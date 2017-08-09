/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package net.sigpue.server;

import com.google.gwt.user.server.rpc.RemoteServiceServlet;
import com.sun.org.apache.xerces.internal.parsers.SAXParser;
import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Vector;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.naming.NamingEnumeration;
import javax.naming.directory.Attributes;
import javax.naming.directory.SearchResult;
import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import javax.sql.DataSource;
import net.sigpue.client.InformacionUsuario;
import net.sigpue.client.ServicioSigpue;
import net.sigpue.client.data.Result;
import net.sigpue.server.informe.Parameter;
import net.sigpue.server.informe.ReporteXMLHandler;
import net.sigpue.server.informe.Reporte_1;
import net.sigpue.server.informes.filtros.Criterion;
import net.sigpue.server.informes.filtros.FilterGUI;
import net.sigpue.server.informes.filtros.FilterXMLHandler;
import net.sigpue.util.ActiveDirectory;
import org.xml.sax.XMLReader;

/**
 *
 * @author jduran
 */
public class ServicioSigpueImpl extends RemoteServiceServlet implements ServicioSigpue {

//    public static final String DOMINIO = "cltech.net.co";
    //public static final String DOMINIO = "ins.local";
    private DAOGeneralBean ses = new DAOGeneralBean();

    @Override
    public InformacionUsuario validarCredenciales(Boolean inicial) {
        Connection conn = null;

        ResultSet rs = null;
        PreparedStatement prestmt = null;
        String nombreCompleto;

        InformacionUsuario infoUsuario = null;
        int idUsuario = 0;
        HttpServletRequest request = this.getThreadLocalRequest();
        String usuario = (String)request.getSession().getAttribute("txtUserName");
        String clave = (String)request.getSession().getAttribute("txtPassword");
        String cons1 = "select id_usuario, nombre_usuario, apellidos from usuario where username=? and password=?";
        String cons2 = "select id_usuario, nombre_usuario, apellidos from usuario where username=? and password=?";
        try {
            conn = ((DataSource) CachingServiceLocator.getInstance().getObjetoRemoto(DBConnection.getPool())).getConnection();
            prestmt = conn.prepareStatement(cons1);
            prestmt.setString(1, usuario);
            prestmt.setString(2, clave);
            System.out.println(prestmt.toString());
            rs = prestmt.executeQuery();
            if (rs.next()) {
                infoUsuario = new InformacionUsuario(rs.getInt(1), rs.getString(2), rs.getString(3),null,null);               
                idUsuario = rs.getInt(1);
                setParametroSesionUsuario(infoUsuario);
            } else {
                rs.close();
                prestmt.close();
                prestmt = conn.prepareStatement(cons2);
                prestmt.setString(1, usuario);
                rs = prestmt.executeQuery();
                if (rs.next()) {
                    try {
                        String choice = "username";
                        ActiveDirectory activeDirectory = new ActiveDirectory(usuario, clave, DBConnection.getDOMINIO());
                        NamingEnumeration<SearchResult> result = activeDirectory.searchUser(usuario, choice, null);
                        if (result.hasMore()) {
                            SearchResult rsldap = (SearchResult) result.next();
                            Attributes attrs = rsldap.getAttributes();
                            String temp = attrs.get("cn").toString();
                            nombreCompleto = temp.substring(temp.indexOf(":") + 1);
                        } else {
                            return null;
                        }
                        activeDirectory.closeLdapConnection();
                    } catch (Exception ex) {
                        ex.printStackTrace();
                        return null;

                    }
                    infoUsuario = new InformacionUsuario(rs.getInt(1), nombreCompleto, "", null, null);
//                    infoUsuario.setIdInstitucion(rs.getInt(5));
                    infoUsuario.setCorreoElectronico(rs.getString(6));
                    idUsuario = rs.getInt(1);
                    setParametroSesionUsuario(infoUsuario);
                }
            }
            if (infoUsuario != null) {
                if (rs != null) {

                    rs.close();

                }
                if (prestmt != null) {
                    prestmt.close();
                }
                prestmt = conn.prepareStatement("select codigo_funcionalidad from funcionalidad where id_funcion in "
                        + "(select id_funcion from rolxfuncionalidad where id_rol in "
                        + "(select id_rol from rolxusuario where id_usuario = ?))");
                prestmt.setInt(1, idUsuario);
                rs = prestmt.executeQuery();
                ArrayList<String> funcionalidades = new ArrayList<String>();
                while (rs.next()) {
                    funcionalidades.add(rs.getString(1));
                }
                infoUsuario.setFuncionalidades(funcionalidades);
                ArrayList<String> roles = new ArrayList<String>();
                
                prestmt = conn.prepareStatement("select id_rol, nombre_rol from rol where id_rol in "
                        + "(select id_rol from rolxusuario where id_usuario = ?)");
                prestmt.setInt(1, idUsuario);
                rs = prestmt.executeQuery();
                while (rs.next()) {
//                    roles.add(rs.getString(1) + "-" + rs.getString(2));
                    roles.add(rs.getString(1));
                }
                infoUsuario.setRoles(roles);
                
                //Cargar el tipo de Institución
//                prestmt = conn.prepareStatement("SELECT tipoInstitucion.Lab2028C01, tipoInstitucion.Lab2028C02 from Lab2013 usuario, Lab2027 institucion, Lab2028 tipoInstitucion WHERE usuario.Lab2027C01=institucion.Lab2027C01 AND institucion.Lab2028C01=tipoInstitucion.Lab2028C01 AND usuario.Lab2013C01= ?");
//                prestmt.setInt(1, idUsuario);
//                rs = prestmt.executeQuery();
//                if (rs.next()) 
//                {
////                    infoUsuario.setIdTipoInstitucion(rs.getInt("Lab2028C01"));
////                    infoUsuario.setNombreTipoInstitucion(rs.getString("Lab2028C02"));
//                }
            }
        } catch (Exception ex) 
        {
                
//            Logger.getLogger(ProcesaExcel.class.getName()).log(Level.SEVERE, null, ex);
        } 
        finally 
        {
            DBConnection.closeDBConnection(conn, null, rs, prestmt, null);
        }

        return infoUsuario;
    }

    @Override
    public InformacionUsuario getSesionUsuario() {
        return getParametroSesionUsuario();
    }

    @Override
    public Boolean destruirSesionUsuario() {
        HttpServletRequest request = this.getThreadLocalRequest();
        request.getSession().setAttribute("infoUsuario", null);
        return true;
    }

    @Override
    public Boolean cerrarSesion(InformacionUsuario usuario) {
        HttpServletRequest request = this.getThreadLocalRequest();
        request.getSession().setAttribute("infoUsuario", null);
        request.getSession().removeAttribute("infoUsuario");
        request.getSession().invalidate();
        return true;
    }

//    @Override
//    public String[][] consultaAgrupacion(Integer hoja) {
////        return ses.consultaRegistrosSql("select Lab2071.Lab2071C01, Lab2071.Lab2071C02, Lab2002C01, Lab2002C02 "
////                + "from Lab2002, Lab2071 "
////                + "where Lab2002.Lab2071C01=Lab2071.Lab2071C01 "
////                + "and Lab2071.Lab2001C01=" + hoja + " "
////                + "order by Lab2002C04, Lab2071C01", DBConnection.getPool());
//        return null;
//    }

//    @Override
//    public Boolean actualizaOrden(String[] Columnas) {
//        Connection conn = null;
//        PreparedStatement prestmt = null;
//
//        try {
//            conn = ((DataSource) CachingServiceLocator.getInstance().getObjetoRemoto(DBConnection.getPool())).getConnection();
//
//
//            for (int i = 1; i <= Columnas.length; i++) {
//                String sql = "Update Lab2002 Set Lab2002C04=? where Lab2002C01 = ?";
//                prestmt = conn.prepareStatement(sql);
//                prestmt.setInt(1, i);
//                prestmt.setInt(2, Integer.parseInt(Columnas[i - 1]));
//                prestmt.executeUpdate();
//                prestmt.close();
//            }
//        } catch (Exception ex) {
//            ex.printStackTrace();
//        } finally {
//            DBConnection.closeDBConnection(conn, null, null, prestmt, null);
//        }
//        return true;
//    }

//    @Override
//    public Boolean actualizaAgrupacion(HashMap mapColumasAgrupacion, Integer idHoja) {
//        Connection conn = null;
//        PreparedStatement prestmt = null;
//
//        try {
//            conn = ((DataSource) CachingServiceLocator.getInstance().getObjetoRemoto(DBConnection.getPool())).getConnection();
//
//            String sql = "Update Lab2002 Set Lab2071C01=null where Lab2001C01 = ?";
//            prestmt = conn.prepareStatement(sql);
//            prestmt.setInt(1, idHoja);
//            prestmt.executeUpdate();
//            prestmt.close();
//
//            Iterator it = mapColumasAgrupacion.entrySet().iterator();
//
//            while (it.hasNext()) {
//                Map.Entry e = (Map.Entry) it.next();
//
//                String sql2 = "Update Lab2002 Set Lab2071C01=? where Lab2002C01 = ?";
//                prestmt = conn.prepareStatement(sql2);
//                prestmt.setInt(1, Integer.parseInt(e.getValue().toString()));
//                prestmt.setInt(2, Integer.parseInt(e.getKey().toString()));
//                prestmt.executeUpdate();
//                prestmt.close();
//            }
//
//        } catch (Exception ex) {
//            ex.printStackTrace();
//        } finally {
//            DBConnection.closeDBConnection(conn, null, null, prestmt, null);
//        }
//        return true;
//    }

//    @Override
//    public Boolean crearCampos(Integer fila, Integer hoja, Boolean nuevaFila, Integer idReporteDiligenciado) {
//
//        String columna[][] = ses.consultaRegistros("Lab2002", "Lab2001C01=" + hoja, DBConnection.getPool());
//        Connection conn = null;
//        PreparedStatement prestmt = null;
//
//        try {
//            conn = ((DataSource) CachingServiceLocator.getInstance().getObjetoRemoto(DBConnection.getPool())).getConnection();
//
//            for (String col[] : columna) {
//                String sql = "Insert into Lab2005(Lab2005C02, Lab2004C01, Lab2002C01, Lab2049C01)"
//                        + " values (1," + fila + "," + col[0] + ",1)";
//                System.out.println(sql);
//                prestmt = conn.prepareStatement(sql);
//                prestmt.executeUpdate();
//                
//                if(nuevaFila)
//                {
//                    valorCampo(fila, Integer.parseInt(col[0]), "0", idReporteDiligenciado, hoja);
//                }
//                prestmt.close();
//            }
//            
//        } catch (Exception ex) {
//            ex.printStackTrace();
//            return false;
//        } finally {
//            DBConnection.closeDBConnection(conn, null, null, prestmt, null);
//        }
//        return true;
//    }

//    @Override
//    public String[][] consultaCampo(Integer fila, Integer columna) {
//        return ses.consultaRegistrosSql("select Lab2005C01, Lab2049C01 from Lab2005 where Lab2004C01=" + fila + " and Lab2002C01=" + columna, DBConnection.getPool());
//    }

//    @Override
//    public boolean validate(String formula) {
//        formula = formula.replace(" ", "");
//
//        // Segunda validación con ScripEngineManager de Java
//        ScriptEngineManager mgr = new ScriptEngineManager();
//        ScriptEngine engine = mgr.getEngineByName("JavaScript");
//        try {
//            System.out.println(engine.eval(formula));
//            return true;
//        } catch (Exception ex) {
//            System.out.println("Formula erronea: " + ex);
//            return false;
//        }
//    }

//    @Override
//    public String evaluate(String formula) {
//        formula = formula.replace(" ", "");
//
//        ScriptEngineManager mgr = new ScriptEngineManager();
//        ScriptEngine engine = mgr.getEngineByName("JavaScript");
//        try {
//            return engine.eval(formula).toString();
//        } catch (Exception ex) {
//            System.out.println("Formula erronea: " + ex);
//            return "Formula invalida";
//        }
//    }

    public Boolean setParametroSesionUsuario(InformacionUsuario info) {
        HttpServletRequest request = this.getThreadLocalRequest();
        request.getSession().setAttribute("infoUsuario", info);
        return true;
    }

    public InformacionUsuario getParametroSesionUsuario() {
        HttpServletRequest request = this.getThreadLocalRequest();
        Object o = request.getSession().getAttribute("infoUsuario");
        if (o == null) {
            return null;
        } else {
            return (InformacionUsuario) o;
        }

    }

//    @Override
//    public Boolean valorCampo(Integer fila, Integer columna, String valor, Integer idRepDiligenciado, Integer hoja) {
//        String campo[][] = consultaCampo(fila, columna);
//        Connection conn = null;
//        PreparedStatement prestmt = null;
//        Statement select = null;
//        ResultSet result = null;
//
//        try {
//            conn = ((DataSource) CachingServiceLocator.getInstance().getObjetoRemoto(DBConnection.getPool())).getConnection();
//
//            select = conn.createStatement();
//            String query = "Select * from Lab2008 where Lab2005C01=" + campo[0][0] + " and Lab2010C01=" + idRepDiligenciado;
//            result = select.executeQuery(query);
//
//            if (result.next()) {
//                String sql = "Update Lab2008 set Lab2008C02=? where Lab2005C01 = ? and Lab2010C01=?";
//                prestmt = conn.prepareStatement(sql);
//                prestmt.setString(1, valor);
//                prestmt.setInt(2, Integer.parseInt(campo[0][0]));
//                prestmt.setInt(3, idRepDiligenciado);
//                prestmt.executeUpdate();
//                prestmt.close();
//            } else {
//                String sql = "Insert into Lab2008 (Lab2008C02, Lab2010C01, Lab2005C01, Lab2001C01) values (?,?,?,?)";
//                prestmt = conn.prepareStatement(sql);
//                prestmt.setString(1, valor);
//                prestmt.setInt(2, idRepDiligenciado);
//                prestmt.setInt(3, Integer.parseInt(campo[0][0]));
//                prestmt.setInt(4, hoja);
//                prestmt.executeUpdate();
//                prestmt.close();
//            }
//        } catch (Exception ex) {
//            ex.printStackTrace();
//        } finally {
//            DBConnection.closeDBConnection(conn, null, result, prestmt, select);
//        }
//        return true;
//    }

//    @Override
//    public Boolean crearCamposColNueva(Integer idcol, Integer hoja) {
//        String filas[][] = ses.consultaRegistros("Lab2004", "Lab2001C01=" + hoja, DBConnection.getPool());
//        Connection conn = null;
//        PreparedStatement prestmt = null;
//
//        try {
//            conn = ((DataSource) CachingServiceLocator.getInstance().getObjetoRemoto(DBConnection.getPool())).getConnection();
//            if (filas != null) {
//                for (String fila[] : filas) {
//                    String sql = "Insert into Lab2005(Lab2005C02, Lab2004C01, Lab2002C01, Lab2049C01)"
//                            + " values (1," + fila[0] + "," + idcol + ",1)";
//                    System.out.println(sql);
//                    prestmt = conn.prepareStatement(sql);
//                    prestmt.executeUpdate();
//                    prestmt.close();
//                }
//            }
//        } catch (Exception ex) {
//            ex.printStackTrace();
//            return false;
//        } finally {
//            DBConnection.closeDBConnection(conn, null, null, prestmt, null);
//        }
//        return true;
//    }

//    @Override
//    public Boolean eliminarAgrupacion(Integer idagrup) {
//        Connection conn = null;
//        PreparedStatement prestmt = null;
//
//        try {
//            conn = ((DataSource) CachingServiceLocator.getInstance().getObjetoRemoto(DBConnection.getPool())).getConnection();
//
//            String sql = "Update Lab2002 Set Lab2071C01=null where Lab2071C01 = ?";
//            prestmt = conn.prepareStatement(sql);
//            prestmt.setInt(1, idagrup);
//            prestmt.executeUpdate();
//            prestmt.close();
//
//            String sql2 = "Delete from Lab2071 where Lab2071C01=?";
//            prestmt = conn.prepareStatement(sql2);
//            prestmt.setInt(1, idagrup);
//            prestmt.executeUpdate();
//        } catch (Exception ex) {
//            ex.printStackTrace();
//            return false;
//        } finally {
//            DBConnection.closeDBConnection(conn, null, null, prestmt, null);
//        }
//        return true;
//    }
    /* Implementación para manejo de reportes */

    /**
     * Método RPC para obtener lista de reportes: GReportesService
     *
     * @return val objeto de resultado
     * @exception Exception Error al obtener lista de resportes
     */
//    @Override
//    public Result Cargar_ListaReportes() {
//        Result val = new Result();
//
//        try {
//            Vector coleccion = new Vector();
//            XMLReader parser = new SAXParser();
//            parser.setContentHandler(new ReporteXMLHandler(parser, coleccion));
//            parser.parse(getServletConfig().getServletContext().getRealPath(getServletContext().getInitParameter("ReportesXML")));
//
//
//            Reporte_1[] get = new Reporte_1[coleccion.size()];
//
//            //ServletContext context = getServletContext();
//            //context.setAttribute("ListReports", get);
//            //getServletContext().setAttribute("ListReports", get);
//            //System.out.println("lista--> "+getServletContext().getInitParameter("ListReports"));
//
//            String Json = "[";
//            for (int j = 0; j < coleccion.size(); j++) {
//                get[j] = (Reporte_1) coleccion.elementAt(j);
//                Json = Json + "{\"id\":" + get[j].getId()
//                        + ",\"name\":\"" + get[j].getName()
//                        + "\",\"numeroParametros\":" + get[j].getCountParameter()
//                        + ",\"FilterSQL_ID\":" + get[j].getFilterSQL_ID()
//                        + ",\"patch\":\"" + get[j].getPatch() + "\"},";
//            }
//            Json = Json.substring(0, Json.length() - 1);
//            Json = Json + "]";
//
//            val.setEstado(true);
//            val.setDescripcion(" Lista de Reportes!");
//            val.setJson(Json);
//            System.out.println("Listado de Reportes Consultado Exitosamente ! ");
//
//        } catch (Exception e) {
//            val.setDescripcion("Error al Cargar Lista de Reportes");
//            System.out.println("Error al Cargar Lista de Reportes Imp:" + e.getMessage());
//        }
//        return val;
//    }
//
//    /**
//     * Método RPC para carga de reporte: GReportesService
//     *
//     * @param IdReporte identificador del reporte
//     * @return val objeto de resultado
//     * @exception Exception Error al cargar reporte
//     */
//    @Override
//    public Result Cargar_Reporte(Integer IdReporte) {
//        Result val = new Result();
//
//        try {
//            Vector coleccion = new Vector();
//            XMLReader parser = new SAXParser();
//            parser.setContentHandler(new ReporteXMLHandler(parser, coleccion));
//            parser.parse(getServletConfig().getServletContext().getRealPath(getServletContext().getInitParameter("ReportesXML")));
//
//            Reporte_1[] get = new Reporte_1[coleccion.size()];
//            String Json = "[";
//
//            for (int j = 0; j < coleccion.size(); j++) {
//                get[j] = (Reporte_1) coleccion.elementAt(j);
//
//                if (get[j].getId() == IdReporte) {
//                    Json = Json + "{\"id\":" + get[j].getId()
//                            + ",\"name\":\"" + get[j].getName()
//                            + "\",\"numeroParametros\":" + get[j].getCountParameter()
//                            + ",\"FilterSQL_ID\":" + get[j].getFilterSQL_ID()
//                            + ",\"patch\":\"" + get[j].getPatch() + "\"}]";
//                }
//            }
//
//            val.setEstado(true);
//            val.setDescripcion(" Cargar Reporte!");
//            val.setJson(Json);
//            System.out.println("Carga de Reporte Exitosamente ! ");
//        } catch (Exception e) {
//            val.setDescripcion("Error al Cargar Reporte");
//            System.out.println("Error al Cargar Reporte Imp:" + e.getMessage());
//        }
//        return val;
//    }
//
//    /**
//     * Método RPC para carga de paramentos de reporte: GReportesService
//     *
//     * @param IdReporte identificador del reporte
//     * @return val objeto de resultado
//     * @exception Exception Error al cargar los parametros de reporte
//     */
//    @Override
//    public Result Cargar_ParametrosReporte(Integer IdReporte) {
//        Result val = new Result();
//
//        try {
//            Vector coleccion = new Vector();
//            XMLReader parser = new SAXParser();
//            parser.setContentHandler(new ReporteXMLHandler(parser, coleccion));
//            parser.parse(getServletConfig().getServletContext().getRealPath(getServletContext().getInitParameter("ReportesXML")));
//
//            Reporte_1[] get = new Reporte_1[coleccion.size()];
//            String Json = "[";
//
//            for (int j = 0; j < coleccion.size(); j++) {
//                get[j] = (Reporte_1) coleccion.elementAt(j);
//
//                if (get[j].getId() == IdReporte) {
//                    if (get[j].getCountParameter() > 0) {
//                        List<Parameter> parametros = get[j].getParameters();
//                        for (int i = 0; i < parametros.size(); i++) {
//                            Parameter param = (Parameter) parametros.get(i);
//                            Json = Json + "{\"id\":" + param.getId()
//                                    + ",\"name\":\"" + param.getName()
//                                    + "\",\"label\":\"" + param.getLabel()
//                                    + "\",\"type\":\"" + param.getType()
//                                    + "\",\"required\":" + param.isRequired() + "},";
//                        }
//                        System.out.println("JSON:" + Json);
//                        Json = Json.substring(0, Json.length() - 1);
//                        Json = Json + "]";
//                    }
//                }
//            }
//
//            val.setEstado(true);
//            val.setDescripcion(" Lista de Parametros de Reporte!");
//            val.setJson(Json);
//            System.out.println("Listado de Parametros de Reporte Consultado Exitosamente ! ");
//
//            /*String Json="[\"Reporte\":"
//             +"{\"id\":1"
//             +",\"name\":\""+"Listar Cuentas"
//             +"\",\"numeroParametros\":2"
//             +",\"parametros\":"
//             +"{\"parametro\":"
//             +"[{\"id\":1"+",\"name\":\""+"codigoUs"+"\",\"size\":2"+"},"
//             + "{\"id\":2"+",\"name\":\""+"codigoGroup"+"\",\"size\":22"+"}]"
//             +"}"
//             +"}"
//             +"]";*/
//
//            //val.setJson(Json);
//        } catch (Exception e) {
//            val.setDescripcion("Error al Cargar Reporte");
//            System.out.println("Error al Cargar Reporte Imp:" + e.getMessage());
//        }
//        return val;
//    }
//
//    @Override
//    public Result Cargar_FilterXML(Integer IdFilter) {
//        Result val = new Result();
//
//        try {
//            Vector coleccion = new Vector();
//            XMLReader parser = new SAXParser();
//            parser.setContentHandler(new FilterXMLHandler(parser, coleccion));
//            parser.parse(getServletConfig().getServletContext().getRealPath(getServletContext().getInitParameter("FilterGUIXML")));
//
//            FilterGUI[] get = new FilterGUI[coleccion.size()];
//            String Json = "[";
//
//            for (int j = 0; j < coleccion.size(); j++) {
//                get[j] = (FilterGUI) coleccion.elementAt(j);
//
//                if (get[j].getId() == IdFilter) {
//                    /*Json=Json+"{\"id\":"+get[j].getId()
//                     +",\"name\":\""+get[j].getName()
//                     +"\",\"numeroParametros\":"+get[j].getCountParameter()
//                     +",\"patch\":\""+get[j].getPatch()+"\"}]";*/
//
//                    Json = Json + "{\"id\":" + get[j].getId()
//                            + ",\"name\":\"" + get[j].getName()
//                            + "\",\"description\":\"" + get[j].getDescription()
//                            + "\",\"countCriterion\":\"" + get[j].getCountCriterion() + "\"}]";
//                }
//            }
//
//            val.setEstado(true);
//            val.setDescripcion(" Cargar Filtro!");
//            val.setJson(Json);
//            System.out.println("Carga de Filtro Exitosamente ! ");
//        } catch (Exception e) {
//            val.setDescripcion("Error al Cargar Filtro");
//            System.out.println("Error al Cargar Filtro Imp:" + e.getMessage());
//        }
//        return val;
//    }
//
//    @Override
//    public Result Cargar_FilterXMLCriterion(Integer IdFilter) {
//        Result val = new Result();
//
//        try {
//            Vector coleccion = new Vector();
//            XMLReader parser = new SAXParser();
//            parser.setContentHandler(new FilterXMLHandler(parser, coleccion));
//            parser.parse(getServletConfig().getServletContext().getRealPath(getServletContext().getInitParameter("FilterGUIXML")));
//
//            FilterGUI[] get = new FilterGUI[coleccion.size()];
//            String Json = "[";
//
//            for (int j = 0; j < coleccion.size(); j++) {
//                get[j] = (FilterGUI) coleccion.elementAt(j);
//
//                if (get[j].getId() == IdFilter) {
//                    if (Integer.parseInt(get[j].getCountCriterion()) > 0) {
//                        List<Criterion> parametros = get[j].getCriteria();
//
//                        for (int i = 0; i < parametros.size(); i++) {
//                            Criterion param = (Criterion) parametros.get(i);
//                            Json = Json + "{\"id\":" + param.getId()
//                                    + ",\"name\":\"" + param.getName()
//                                    + "\",\"reporteId\":\"" + param.getReporteId() + "\"},";
//                        }
//                        Json = Json.substring(0, Json.length() - 1);
//                        Json = Json + "]";
//                    }
//                }
//            }
//
//            val.setEstado(true);
//            val.setDescripcion(" Lista de Parametros de Reporte!");
//            val.setJson(Json);
//            System.out.println("Listado de Parametros de Reporte Consultado Exitosamente ! ");
//
//            /*String Json="[\"Reporte\":"
//             +"{\"id\":1"
//             +",\"name\":\""+"Listar Cuentas"
//             +"\",\"numeroParametros\":2"
//             +",\"parametros\":"
//             +"{\"parametro\":"
//             +"[{\"id\":1"+",\"name\":\""+"codigoUs"+"\",\"size\":2"+"},"
//             + "{\"id\":2"+",\"name\":\""+"codigoGroup"+"\",\"size\":22"+"}]"
//             +"}"
//             +"}"
//             +"]";*/
//
//            //val.setJson(Json);
//        } catch (Exception e) {
//            val.setDescripcion("Error al Cargar FilterXMLCriterion");
//            System.out.println("Error al Cargar FilterXMLCriterion Imp:" + e.getMessage());
//        }
//        return val;
//    }
//
//    /**
//     * Método RPC para obtener contexto de la aplicación
//     *
//     * @return val objeto de resultado
//     * @exception Exception Error al obtener contexto de la aplicación
//     */
////    @Override
////    public Result obtenerContexto_Aplicacion() {
////        Result val = new Result();
////        try {
////            HttpServletRequest request = this.getThreadLocalRequest();
////
////            String ContextPath = request.getContextPath();
////
////            if (ContextPath != null) {
////                val.setDescripcion("Ruta de Contexto Aplicación !");
////                val.setJson(ContextPath);
////                val.setEstado(true);
////                System.out.println("Ruta de Contexto Aplicación: " + ContextPath);
////            } else {
////                val.setDescripcion("La Ruta de Contexto Aplicación es: " + ContextPath);
////                System.out.println("La Ruta de Contexto Aplicación es: " + ContextPath);
////            }
////        } catch (Exception e) {
////            val.setDescripcion("Error al Obtener Ruta Contexto Aplicación !");
////            val.setEstado(false);
////            System.out.println("Error al Obtener Ruta Contexto Aplicación: " + e.getMessage());
////        }
////        return val;
////    }
//
    @Override
    public Integer insertaDiligenciamientoFormulario(Integer idUsuario, Integer idFormulario, Integer idInstitucion) {
        Connection conn = null;
        PreparedStatement prestmt = null;
        Integer idFormDilig = 0;

        try {
            conn = ((DataSource) CachingServiceLocator.getInstance().getObjetoRemoto(DBConnection.getPool())).getConnection();

            String sql = "Insert into Lab2040(Lab2040C02, Lab2040C03, Lab2040C04, Lab2013C01a, Lab2013C01b, Lab2013C01c, Lab2052C01, Lab2027C01)"
                    + " values (getdate(), getdate(), getdate()," + idUsuario + ", 1, 1," + idFormulario + "," + idInstitucion + ")";
            System.out.println(sql);prestmt = conn.prepareStatement(sql,Statement.RETURN_GENERATED_KEYS);
            prestmt.executeUpdate();
            
            ResultSet idInsertado = prestmt.getGeneratedKeys();
            
            if (idInsertado.next()) 
            {
                idFormDilig = idInsertado.getInt(1);
            }
            
            idInsertado.close();
            prestmt.close();
            

        } catch (Exception ex) {
            ex.printStackTrace();
            return idFormDilig;
        } finally {
            DBConnection.closeDBConnection(conn, null, null, prestmt, null);
        }
        return idFormDilig;
    }

    @Override
    public Boolean insertaRespuestas(HashMap<String, String> valoresMap, Integer idFormDilig, Integer idUsuario) {
        Connection conn = null;
        PreparedStatement prestmt = null;

        try {
            conn = ((DataSource) CachingServiceLocator.getInstance().getObjetoRemoto(DBConnection.getPool())).getConnection();

            Iterator it = valoresMap.entrySet().iterator();

            while (it.hasNext()) {
                Map.Entry valor = (Map.Entry) it.next();
                String sql = "Insert into Lab2066(Lab2066C02, Lab2066C03, Lab2058C01, Lab2013C01, Lab2040C01, Lab2049C01)"
                        + " values ('" + valor.getValue() + "',getdate()," + valor.getKey() + "," + idUsuario + "," + idFormDilig + ",1)";
                System.out.println(sql);
                prestmt = conn.prepareStatement(sql);
                prestmt.executeUpdate();
                prestmt.close();
            }
        } catch (Exception ex) {
            System.err.println("excepcion:" + ex.getMessage());
//            ex.printStackTrace();
            return false;
        } finally {
            DBConnection.closeDBConnection(conn, null, null, prestmt, null);
        }
        return true;
    }

    
//    @Override
//    public Boolean cargarValoresFormulario(HashMap<String, String> valoresMap, Integer idFormDilig, Integer idUsuario) {
//        Connection conn = null;
//        PreparedStatement prestmt = null;
//
//        try {
//            conn = ((DataSource) CachingServiceLocator.getInstance().getObjetoRemoto(DBConnection.getPool())).getConnection();
//            
//            Iterator it=valoresMap.entrySet().iterator();
//
//            while(it.hasNext())
//            {
//                Map.Entry valor = (Map.Entry) it.next();
//                String sql = "Select * from Lab2066(Lab2066C02, Lab2066C03, Lab2026C05, Lab2013C01, Lab2040C01, Lab2049C01)"
//                        + " values ('"+valor.getValue()+"',getdate(),"+valor.getKey()+"," + idUsuario + ","+idFormDilig+",1)";
//                System.out.println(sql);
//                prestmt = conn.prepareStatement(sql);
//                prestmt.executeUpdate();
//                prestmt.close();
//            }
//        } catch (Exception ex) {
//            System.err.println("excepcion:"+ ex.getMessage());
////            ex.printStackTrace();
//            return false;
//        } finally {
//            DBConnection.closeDBConnection(conn, null, null, prestmt, null);
//        }
//        return true;
//    }
//    
//    @Override
//    public Integer registraReporteDiligenciado(Integer tipoReporte, Integer periodo, Integer Anio, Integer idInstitucion, Integer idUsuario) {
//        Connection conn = null;
//        PreparedStatement prestmt = null;
//        Integer idRepDilig = null;
//
//        try {
//            conn = ((DataSource) CachingServiceLocator.getInstance().getObjetoRemoto(DBConnection.getPool())).getConnection();
//
//            String sql = "Insert into Lab2010(Lab2010C03, Lab2010C04, Lab2010C05, Lab2027C01, Lab2000C01, Lab2013C01, Lab2079C01)"
//                    + " values (getdate(),"+ periodo+", "+ Anio+", " + idInstitucion + "," + tipoReporte + "," + idUsuario + ", 2)";
//            System.out.println(sql);
//            prestmt = conn.prepareStatement(sql,Statement.RETURN_GENERATED_KEYS);
//            prestmt.executeUpdate();
//            
//            ResultSet idInsertado = prestmt.getGeneratedKeys();
//            
//            if (idInsertado.next()) 
//            {
//                idRepDilig = idInsertado.getInt(1);
//            }
//            
//            idInsertado.close();
//            prestmt.close();
//            
//        } catch (Exception ex) {
//            ex.printStackTrace();
//            if(ex.getMessage().contains("UNIQUE KEY"))
//            {
//                return -1;
//            }
//            else
//            {
//                return idRepDilig;
//            }
//        } finally {
//            DBConnection.closeDBConnection(conn, null, null, prestmt, null);
//        }
//        return idRepDilig;
//    }

    /**
     * Calcula el valor de la formula, inserta el valor calculado en el campo usado
     * para la formula, y retorna el valor calculado.
     * @param formula
     * @param filaReporte
     * @param columnaReporte
     * @param idReporteDilig
     * @param idHoja
     * @return 
     */
//    @Override
//    public String calcularValorFormula(String formula, Integer filaReporte,
//            Integer columnaReporte, Integer idReporteDilig, Integer idHoja) {
//        Connection conn = null;
//        PreparedStatement prestmt = null;
//        Statement select = null;
//        ResultSet result = null;
//
//        String formulaDefinitiva = "";
//
//        String[] item = formula.split(" ");
//
//        for (int i = 0; i < item.length; i++) {
//            if (item[i].charAt(0) == '|') {
//                int filaIndexBegin = nthOccurrence(item[i], '/', 2) + 1;
//                int filaIndexEnd = nthOccurrence(item[i], '/', 3);
//                String fila = item[i].substring(filaIndexBegin, filaIndexEnd);
//
//                int colIndexBegin = nthOccurrence(item[i], '/', 4) + 1;
//                String columna = item[i].substring(colIndexBegin, item[i].length() - 1);
//
//                try {
//                    conn = ((DataSource) CachingServiceLocator.getInstance().getObjetoRemoto(DBConnection.getPool())).getConnection();
//
//                    select = conn.createStatement();
//                    String query = "select lab2008c02 from lab2008 "
//                            + "where lab2008.lab2005c01 = "
//                            + "("
//                            + "select distinct lab2005.lab2005c01 from lab2002, lab2004, lab2005 "
//                            + "where lab2005.lab2002c01 = " + columna + " and "
//                            + "lab2005.lab2004c01 = " + fila
//                            + ") and Lab2010C01 = " + idReporteDilig;
//                    result = select.executeQuery(query);
//
//                    if (result.next()) {
//                        formulaDefinitiva += result.getString("lab2008c02");
//                        System.out.println("formulaDefinitiva = " + formulaDefinitiva);
//                    }
//                } catch (Exception ex) {
//                    ex.printStackTrace();
//                } finally {
//                    DBConnection.closeDBConnection(conn, null, result, prestmt, select);
//                }
//            } else {
//                formulaDefinitiva += item[i];
//            }
//        }
//
//        String formulaCalculada = calcularValor(formulaDefinitiva);
//        if (formulaCalculada.contains(".")) {
//            int index = formulaCalculada.indexOf('.');
//            if ((formulaCalculada.length() - index) > 3) {
//                formulaCalculada = formulaCalculada.substring(0, index + 2);
//            }
//        }
//
//        valorCampo(filaReporte, columnaReporte, formulaCalculada, idReporteDilig,idHoja);
//
//        return formulaCalculada;
//    }

//    private int nthOccurrence(String str, char c, int n) {
//        int pos = str.indexOf(c, 0);
//        while (n-- > 0 && pos != -1) {
//            pos = str.indexOf(c, pos + 1);
//        }
//        return pos;
//    }

//    private String calcularValor(String formula) {
//        ScriptEngineManager mgr = new ScriptEngineManager();
//        ScriptEngine engine = mgr.getEngineByName("JavaScript");    
//        try {
//            String value = engine.eval(formula).toString();
//            
//            if (isNumber(value))
//            {
//                float v = Float.parseFloat(value);
//                return String.valueOf((v > 99.6)? 100 : v);
//            }
//            
//            return value;
//        } catch (Exception ex) {
//            System.out.println("Formula erronea: " + ex);
//            return "#Error";
//        }
//    }
//
//    public static boolean isNumber(String s)
//    {
//        try
//        {
//            Float.parseFloat(s);
//        }
//        catch (NumberFormatException e)
//        {
//            return false;
//        }
//        return true;
//    }

//    @Override
//    public Integer insertaFila(Integer orden, Integer idHoja, Integer idReporteDiligenciado) {
//        Connection conn = null;
//        PreparedStatement prestmt = null;
//        Statement select = null;
//        ResultSet result = null;
//        Integer idFila = 0;
//
//        try {
//            conn = ((DataSource) CachingServiceLocator.getInstance().getObjetoRemoto(DBConnection.getPool())).getConnection();
//
//            String sql = "Insert into Lab2004(Lab2004C02, Lab2004C05, Lab2001C01,Lab2010C01,Lab2049C01)"
//                    + " values ('Institución', " + orden + ", " + idHoja + ", "+idReporteDiligenciado+", 1)";
//            prestmt = conn.prepareStatement(sql);
//            prestmt.executeUpdate();
//            prestmt.close();
//
//            select = conn.createStatement();
//            String query = "Select max(Lab2004C01) idFila from Lab2004";
//            result = select.executeQuery(query);
//
//            if (result.next()) {
//                idFila = result.getInt("idFila");
//            }
//
//        } catch (Exception ex) {
//            ex.printStackTrace();
//            return idFila;
//        } finally {
//            DBConnection.closeDBConnection(conn, null, result, prestmt, select);
//        }
//        return idFila;
//    }
//
//    @Override
//    public Boolean registrarAccion(String accion) {
//        Connection conn = null;
//        PreparedStatement prestmt = null;
//        try {
//            conn = ((DataSource) CachingServiceLocator.getInstance().getObjetoRemoto(DBConnection.getPool())).getConnection();
//            String sql = "insert into Lab2082 (Lab2082C03, Lab2013C01) values (?,?)";
//            prestmt = conn.prepareStatement(sql);
//            prestmt.setString(1, accion);
//            prestmt.setInt(2, getParametroSesionUsuario().getIdUsuario());
//            System.out.println(prestmt.toString());
//            prestmt.executeUpdate();
//        } 
//        catch (Exception ex) 
//        {
////            Logger.getLogger(ProcesaExcel.class.getName()).log(Level.SEVERE, null, ex);
//        } 
//        finally 
//        {
//            DBConnection.closeDBConnection(conn, null, null, prestmt, null);
//        }
//        return true;
//    }

//    @Override
//    public void poblarHojas(Integer[] idHojas, int idReporteDil) {
//        Connection conn = null;
//        PreparedStatement prestmt = null;
//        Statement select = null;
//        ResultSet result = null;
//
//        for (int hoja : idHojas) {
//            System.err.println("Poblando Hoja: " + hoja);
//            try {
//                conn = ((DataSource) CachingServiceLocator.getInstance().getObjetoRemoto(DBConnection.getPool())).getConnection();
//
//                select = conn.createStatement();
//                String query = "select Lab2005C01 from VHojas where lab2001c01 = " + hoja +" and Lab2010C01 is NULL";
//                result = select.executeQuery(query);
//                System.err.println("query = " + query);
//                ArrayList<Integer> campos = new ArrayList<Integer>();
//
//                while (result.next()) {
//                    campos.add(result.getInt("Lab2005C01"));
//                }
//
//                if (campos.isEmpty()) {
//                   // System.err.println("salimos");
//                    return;
//                }
//
//                for (int campo : campos) {
//                   // System.err.println("campo = " + campo);
//
//                    String sql = "Insert into Lab2008 (Lab2008C02, Lab2010C01, Lab2009C01, Lab2005C01, Lab2001C01)"
//                            + " values ('0', " + idReporteDil + ", 1, " + campo + ", " + hoja + ")";
//
//                    //System.err.println("insert = " + sql);
//
//                    prestmt = conn.prepareStatement(sql);
//                    prestmt.executeUpdate();
//                    prestmt.close();
//                }
//
//            } catch (Exception ex) {
////                Logger.getLogger(ProcesaExcel.class.getName()).log(Level.SEVERE, null, ex);
//            } finally {
//                DBConnection.closeDBConnection(conn, null, result, prestmt, select);
//            }
//        }
//    }

    /**
     * Calcula el valor de varias formulas, que se envían por arrayLists, e inserta
     * el valor de estas en los campos correspondientes.
     * @param celdasConFormula
     * @param formulas
     * @param idReporteDilig
     * @param idHoja
     * @return 
     */
//    @Override
//    public ArrayList<String> calcularFormulas(ArrayList<Integer[]> celdasConFormula, ArrayList<String> formulas, Integer idReporteDilig, Integer idHoja) {
//        ArrayList<String> formulasCalculadas = new ArrayList<String>();
//
//        for (int i = 0; i < celdasConFormula.size(); i++) {
//            formulasCalculadas.add(calcularValorFormula(formulas.get(i), celdasConFormula.get(i)[0], celdasConFormula.get(i)[1],
//                    idReporteDilig, idHoja));
//        }
//
//        return formulasCalculadas;
//    }

    @Override
    public Boolean registroAlarmas(String tipoAlarma, String alarma, String textoAlarma) {
        Connection conn = null;
        PreparedStatement prestmt = null;

        try {
            conn = ((DataSource) CachingServiceLocator.getInstance().getObjetoRemoto(DBConnection.getPool())).getConnection();

            String sql = "Insert into Lab2024(Lab2024C03, Lab2038C01, Lab2013C01a,Lab2042C01)"
                    + " values (?,?,?,?)";
            prestmt = conn.prepareStatement(sql);
            prestmt.setString(1, textoAlarma);
            prestmt.setString(2, tipoAlarma);
            prestmt.setInt(3, getParametroSesionUsuario().getIdUsuario());
            prestmt.setString(4, alarma);
            prestmt.executeUpdate();
        } 
        catch (Exception ex) 
        {
                
//            Logger.getLogger(ProcesaExcel.class.getName()).log(Level.SEVERE, null, ex);
        } 
        finally 
        {
            DBConnection.closeDBConnection(conn, null, null, prestmt, null);
        }
        return true;
    }

//    @Override
//    public Integer registarReporteDiligenciadoProcedimiento(Integer periodo, Integer idInstitucion,Integer idTipoReporte, Integer idUsuario,Integer idEstadoReporte, Integer anio) 
//    {
//        Integer identity=0;
//        Connection conn = null;
//        CallableStatement call = null;
//        try
//        {
//            System.err.println("Registro Reporte Diligenciado: Periodo: "+periodo+" | Institución: "+idInstitucion+" | TipoReporte: "+idTipoReporte+" | Usuario: "+idUsuario+" | Estado: "+idEstadoReporte);
//            //conn = DBConnection.getConnection();
//            conn = ((DataSource) CachingServiceLocator.getInstance().getObjetoRemoto(DBConnection.getPool())).getConnection();
//            call = conn.prepareCall("{call Lab2010_Set (?,?,?,?,?,?,?)}", ResultSet.TYPE_SCROLL_INSENSITIVE, ResultSet.CONCUR_READ_ONLY);
//            call.setInt("lab2010C04",periodo);
//            call.setInt("lab2010C05",anio);
//            call.setInt("lab2027C01",idInstitucion);
//            call.setInt("lab2000C01",idTipoReporte);
//            call.setInt("lab2013C01",idUsuario);
//            call.setInt("lab2079C01",idEstadoReporte);
//            call.registerOutParameter("Identity", java.sql.Types.INTEGER);
//            call.executeUpdate();
//            
//            identity=call.getInt("Identity");
//            System.err.println("Identidad-----------------------> "+identity);
//        }
//        catch (Exception ex)
//        {
//            Logger.getLogger(ServicioSigpueImpl.class.getName()).log(Level.SEVERE, null, ex);
//            return identity;
//        }
//        finally
//        {
//            DBConnection.closeDBConnection(conn, call, null, null, null);
//            return identity;
//        }
//    }
    
//    public void actualizaReferenciaFormulas() {
//        Connection conn = null;
//        CallableStatement call = null;
//
//        try {
//            conn = ((DataSource) CachingServiceLocator.getInstance().getObjetoRemoto(DBConnection.getPool())).getConnection();
//            call = conn.prepareCall("{call Lab2006_GetByLab2006C04()}", ResultSet.TYPE_SCROLL_INSENSITIVE, ResultSet.CONCUR_READ_ONLY);
//            call.execute();
//
//            System.out.println("Finalizó Reajuste de Fórmulas");
//        } 
//        catch (Exception ex) 
//        {
//                
////            Logger.getLogger(ProcesaExcel.class.getName()).log(Level.SEVERE, null, ex);
//        } 
//        finally 
//        {
//            DBConnection.closeDBConnection(conn, call, null, null, null);
//        }
//    }
    
//  
//    @Override
//    public ArrayList<String> validarConsistencia(Integer idReporte, Integer idReporteDilig)
//    {
//////        boolean esValido = true;
////        ArrayList<String> arrayAlarmas=new ArrayList<String>();
////        
////        Connection conn = null;
////        PreparedStatement prestmt = null;
////        Statement select = null;
////        ResultSet result = null;
////        
////        try 
////        {
////            conn = ((DataSource) CachingServiceLocator.getInstance().getObjetoRemoto(DBConnection.getPool())).getConnection();
////
////            select = conn.createStatement();
////            String query = "select formula.lab2006c01 idFormula, formula.lab2006c02 nombreFormula, formula.lab2006c04 formula, formula.lab2006c11 esLogico, "
////                        + "campo.lab2005c01 idCampo, fila.lab2004c02 nombreFila, col.lab2002c02 nombreCol, "
////                        + "hoja.lab2001c02 nombreHoja, reporte.lab2000c01 reporte "
////                        + "from lab2006 formula "
////                        + "join lab2005 campo "
////                        + "on formula.lab2005c01 = campo.lab2005c01 "
////                        + "join lab2004 fila "
////                        + "on campo.lab2004c01 = fila.lab2004c01 "
////                        + "join lab2002 col "
////                        + "on campo.lab2002c01 = col.lab2002c01 "
////                        + "join lab2001 hoja "
////                        + "on fila.lab2001c01 = hoja.lab2001c01 "
////                        + "join lab2000 reporte "
////                        + "on hoja.lab2000c01 = reporte.lab2000c01 "
////                        + "where formula.lab2006c11 = 1 and "
////                        + "reporte.lab2000c01 = " + idReporte;
////            
////            System.err.println("query = " + query);
////            result = select.executeQuery(query);
////            
////            // ArrayList de vectores de String con información sobre la formula:
////            // [reporte, hoja, fila, columna, formula]
////            ArrayList<String[]> formulas = new ArrayList<String[]>();
////
////            while (result.next()) {
////                String[] registro = new String[6];
////                registro[0] = result.getString("reporte");
////                registro[1] = result.getString("nombreHoja");
////                registro[2] = result.getString("nombreFila");
////                registro[3] = result.getString("nombreCol");
////                registro[4] = result.getString("formula");
////                registro[5] = result.getString("nombreFormula");
////                formulas.add(registro);
////            } 
////
////            if (formulas.isEmpty())
////            {
////                System.err.println("salimos");
//////                esValido = true;
////            }
////
////            for (String[] registro : formulas)
////            {
////                System.err.println("formula = " + registro[4]);
////                String resultadoFormula = calcularFormula(registro[4], idReporteDilig);
////                
////                if (resultadoFormula.equals("#Error"))
////                {
//////                    esValido = false;
////                    
////                    System.err.println("error al evaluar formula = " + registro[4]);
////                    
////                    String textoAlarma = "Se ha encontrado un error al evaluar la restricción \"" + registro[5]
////                            + "\", del reporte: " + idReporteDilig + ", hoja: " + registro[1] + ", fila: " + 
////                            registro[2] + ", y columna: " + registro[3]+".";
////                    String tipoAlarma = "4";
////                    
////                    arrayAlarmas.add(textoAlarma);
////                    
////                    String sql = "Insert into Lab2024(Lab2024C03, Lab2038C01, Lab2013C01a)"
////                    + " values (?,?,?)";
////                    prestmt = conn.prepareStatement(sql);
////                    prestmt.setString(1, textoAlarma);
////                    prestmt.setString(2, tipoAlarma);
////                    prestmt.setInt(3, getParametroSesionUsuario().getIdUsuario());
////                    
////                    System.err.println("insert = " + sql);
////
////                    prestmt.executeUpdate();
////                    prestmt.close();
////                }
////                else if (Boolean.valueOf(resultadoFormula))
////                {
////                    System.err.println("formula evaluada correctamente = " + registro[4]);
////                }
////                else if (!Boolean.valueOf(resultadoFormula))
////                {
//////                    esValido = false;
////                    System.err.println("resultado de la formula negativo = " + registro[4]);
////                    
////                    String textoAlarma = "La restricción \"" + registro[5] + "\", del reporte: " + idReporteDilig
////                             + ", hoja: " + registro[1] + ", fila: " + registro[2] + ", y columna: " + registro[3]
////                            + ", no se cumplió.";
////                    String tipoAlarma = "4";
////                    
////                    arrayAlarmas.add(textoAlarma);
////                    
////                    String sql = "Insert into Lab2024(Lab2024C03, Lab2038C01, Lab2013C01a)"
////                    + " values (?,?,?)";
////                    prestmt = conn.prepareStatement(sql);
////                    prestmt.setString(1, textoAlarma);
////                    prestmt.setString(2, tipoAlarma);
////                    prestmt.setInt(3, getParametroSesionUsuario().getIdUsuario());
////                    
////                    System.err.println("insert = " + sql);
////
////                    prestmt.executeUpdate();
////                    prestmt.close();
////                    
////                }                
////
////            }
////            
////        }
////        catch (Exception ex) 
////        {
////                
//////            Logger.getLogger(ProcesaExcel.class.getName()).log(Level.SEVERE, null, ex);
////        } 
////        finally 
////        {
////            DBConnection.closeDBConnection(conn, null, result, prestmt, select);
////        }
////        
//////        if (esValido)
////        if (!arrayAlarmas.isEmpty())
////        {
////            actualizaReporteDiligenciado(idReporteDilig, 3);
////        }
////        else
////        {
////            actualizaReporteDiligenciado(idReporteDilig, 4);
////        }
////        
//        return null;
//    }
    
    /**
     * Calcula el valor de una formula, y retorna el resultado
     * @param formula
     * @param idReporteDilig
     * @return 
     */
//    public String calcularFormula(String formula, Integer idReporteDilig) {
//        Connection conn = null;
//        PreparedStatement prestmt = null;
//        Statement select = null;
//        ResultSet result = null;
//
//        String formulaDefinitiva = "";
//
//        String[] item = formula.split(" ");
//
//        for (int i = 0; i < item.length; i++) {
//            if (item[i].charAt(0) == '|') {
//                int filaIndexBegin = nthOccurrence(item[i], '/', 2) + 1;
//                int filaIndexEnd = nthOccurrence(item[i], '/', 3);
//                String fila = item[i].substring(filaIndexBegin, filaIndexEnd);
//
//                int colIndexBegin = nthOccurrence(item[i], '/', 4) + 1;
//                String columna = item[i].substring(colIndexBegin, item[i].length() - 1);
//
//                try {
//                    conn = ((DataSource) CachingServiceLocator.getInstance().getObjetoRemoto(DBConnection.getPool())).getConnection();
//
//                    select = conn.createStatement();
//                    String query = "select lab2008c02 from lab2008 "
//                            + "where lab2008.lab2005c01 = "
//                            + "("
//                            + "select distinct lab2005.lab2005c01 from lab2002, lab2004, lab2005 "
//                            + "where lab2005.lab2002c01 = " + columna + " and "
//                            + "lab2005.lab2004c01 = " + fila
//                            + ") and Lab2010C01 = " + idReporteDilig;
//                    result = select.executeQuery(query);
//
//                    if (result.next()) {
//                        formulaDefinitiva += result.getString("lab2008c02");
//                        System.out.println("formulaDefinitiva = " + formulaDefinitiva);
//                    }
//                } catch (Exception ex) {
//                    ex.printStackTrace();
//                } finally {
//                    DBConnection.closeDBConnection(conn, null, result, prestmt, select);
//                }
//            } else {
//                formulaDefinitiva += item[i];
//            }
//        }
//
//        String formulaCalculada = calcularValor(formulaDefinitiva);
//        if (formulaCalculada.contains(".")) {
//            int index = formulaCalculada.indexOf('.');
//            if ((formulaCalculada.length() - index) > 3) {
//                formulaCalculada = formulaCalculada.substring(0, index + 2);
//            }
//        }       
//
//        return formulaCalculada;
//    }
//    
//    @Override
//    public Boolean actualizaReporteDiligenciado(Integer idRepDil, Integer estado) {
//        Connection conn = null;
//        PreparedStatement prestmt = null;
//
//        try
//        {
//            conn = ((DataSource) CachingServiceLocator.getInstance().getObjetoRemoto(DBConnection.getPool())).getConnection();
//
//            String sql = "Update Lab2010 Set Lab2079C01=? where Lab2010C01 = ?";
//            prestmt = conn.prepareStatement(sql);
//            prestmt.setInt(1, estado);
//            prestmt.setInt(2, idRepDil);
//            prestmt.executeUpdate();
//            prestmt.close();
//        } catch (Exception ex)
//        {
//            ex.printStackTrace();
//        } finally
//        {
//            DBConnection.closeDBConnection(conn, null, null, prestmt, null);
//        }
//        return true;
//    }
    
//    @Override
//    public String getResumenCargueReporte()
//    {
//        HttpServletRequest request=this.getThreadLocalRequest();
//        HttpSession session = request.getSession();
//        
//        return (String)session.getAttribute("resumen");
//    }
//        
//    @Override
//    public Boolean actualizaCampo(Integer idCampo, Integer estado)
//    {
//        Connection conn = null;
//        PreparedStatement prestmt = null;
//
//        try
//        {
//            conn = ((DataSource) CachingServiceLocator.getInstance().getObjetoRemoto(DBConnection.getPool())).getConnection();
//
//            String sql = "Update Lab2005 Set Lab2049C01=? where Lab2005C01 = ?";
//            prestmt = conn.prepareStatement(sql);
//            prestmt.setInt(1, estado);
//            prestmt.setInt(2, idCampo);
//            prestmt.executeUpdate();
//            prestmt.close();
//        } catch (Exception ex)
//        {
//            ex.printStackTrace();
//        } finally
//        {
//            DBConnection.closeDBConnection(conn, null, null, prestmt, null);
//        }
//        return true;
//    }
    
     
//    @Override
//    public Boolean actualizaAgrupacion(Integer idAgrup, String nombreAgrup) {
//        Connection conn = null;
//        PreparedStatement prestmt = null;
//
//        try {
//            conn = ((DataSource) CachingServiceLocator.getInstance().getObjetoRemoto(DBConnection.getPool())).getConnection();
//
//
//                String sql = "Update Lab2071 Set Lab2071C02=? where Lab2071C01 = ?";
//                prestmt = conn.prepareStatement(sql);
//                prestmt.setString(1,nombreAgrup);
//                prestmt.setInt(2, idAgrup);
//                prestmt.executeUpdate();
//                prestmt.close();
//        } catch (Exception ex) {
//            ex.printStackTrace();
//        } finally {
//            DBConnection.closeDBConnection(conn, null, null, prestmt, null);
//        }
//        return true;
//    }

//    @Override
//    public Boolean registrarDonantesDiferidos(Integer idReporteDiligenciado) {
//
//        String valoresCampos[][] = ses.consultaRegistrosSql("select Lab2008.Lab2005C01, Lab2004C01, Lab2008C02 from Lab2005, Lab2008 "
//                + "where Lab2008.Lab2005C01=Lab2005.Lab2005C01 "
//                + "and Lab2002C01=1000369 "
//                + "and Lab2010C01=" + idReporteDiligenciado + " "
//                + "and Lab2008C02='Positivo'", DBConnection.getPool());
//        Connection conn = null;
//        PreparedStatement prestmt = null;
//        ResultSet rs = null;
//
//        try
//        {
//            conn = ((DataSource) CachingServiceLocator.getInstance().getObjetoRemoto(DBConnection.getPool())).getConnection();
//
//            for (String val[] : valoresCampos)
//            {
//                String query = "select Lab2008.Lab2005C01, Lab2008C02 from Lab2005, Lab2008 "
//                        + "where Lab2008.Lab2005C01=Lab2005.Lab2005C01 "
//                        + "and Lab2002C01=1000362 "
//                        + "and Lab2004C01="+val[1]+" " 
//                        + "and Lab2010C01=" + idReporteDiligenciado;
//                System.out.println(query);
//                prestmt = conn.prepareStatement(query);
//                rs = prestmt.executeQuery();
//                
//                rs.next();
//                String cedula=rs.getString("Lab2008C02");
//                
//                String query2 = "select * from Lab2081 where Lab2081C01=" + cedula;
//                prestmt = conn.prepareStatement(query2);
//                rs = prestmt.executeQuery();
//
//                if (!rs.next())
//                {
//                    String sql = "Insert into Lab2081(Lab2081C01, Lab2081C02) "
//                            + "values (" + cedula + ",'PERMANENTE')";
//                    System.out.println(sql);
//                    prestmt = conn.prepareStatement(sql);
//                    prestmt.executeUpdate();
//                    prestmt.close();
//                    rs.close();
//                }
//            }
//            prestmt.close();
//
//        } catch (Exception ex) {
//            ex.printStackTrace();
//            return false;
//        } finally {
//            DBConnection.closeDBConnection(conn, null, rs, prestmt, null);
//        }
//        return true;
//    }
    
//    @Override
//    public String consultarPeriodo(String tipoPeriodo) {
//
//        Connection conn = null;
//        PreparedStatement prestmt = null;
//        ResultSet rs = null;
//        String retorno = null;
//
//        try
//        {
//            conn = ((DataSource) CachingServiceLocator.getInstance().getObjetoRemoto(DBConnection.getPool())).getConnection();
//
//                String query = "SELECT Lab2011C04 from Lab2011 where Lab2011C05 = '"+tipoPeriodo+"'"
//                        +" and Lab2011C02 <= SUBSTRING (CONVERT(VARCHAR(6), GETDATE(), 12),3, 6)"
//                        +" and  SUBSTRING (CONVERT(VARCHAR(6), GETDATE(), 12),3, 6) <= Lab2011C03";
//                prestmt = conn.prepareStatement(query);
//                rs = prestmt.executeQuery();
//
//                if (rs.next())
//                {
//                    retorno=rs.getString("Lab2011C04");
//                    return retorno;
//                }
//
//        } catch (Exception ex) {
//            ex.printStackTrace();
//                    return retorno;
//        } finally {
//            DBConnection.closeDBConnection(conn, null, rs, prestmt, null);
//        }
//        return retorno;
//    }

//    @Override
//    public Boolean crearCampos(Integer fila, Integer hoja) {
//        throw new UnsupportedOperationException("Not supported yet.");
//    }
//
//    @Override
//    public Boolean valorCampo(Integer fila, Integer columna, String valor, Integer idrepdiligenciado, Integer idref, Integer dominio) {
//        throw new UnsupportedOperationException("Not supported yet.");
//    }
//
//    @Override
//    public Integer insertaFila(Integer orden, Integer idHoja) {
//        throw new UnsupportedOperationException("Not supported yet.");
//    }

}