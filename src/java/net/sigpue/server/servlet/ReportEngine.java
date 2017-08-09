package net.sigpue.server.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.Locale;
import java.util.Map;
import java.util.StringTokenizer;
import java.util.TimeZone;
import javax.servlet.ServletException;
//import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.sql.DataSource;
import net.sigpue.server.CachingServiceLocator;
import net.sigpue.server.DBConnection;
import net.sigpue.server.informes.filtros.FilterSQLReport;

/**
 *
 * @author Jhontan Alexander Peña. jpena@cltech.net. All rights reserved. CLTech 2013
 */
//@WebServlet(name = "ReportEngine", urlPatterns = {"/ReportEngine"})
public class ReportEngine extends HttpServlet 
{

    /**
     * Processes requests for both HTTP
     * <code>GET</code> and
     * <code>POST</code> methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)throws ServletException, IOException 
    {
        PrintWriter out = null;
        try 
        {
            HashMap parameters = new HashMap();
            Connection conn = null;
            String plantilla;
            GeneradorReportes gr=new GeneradorReportes();

            Locale clientLocale = request.getLocale();
            Calendar calendar = Calendar.getInstance(clientLocale);
            TimeZone clientTimeZone = calendar.getTimeZone();
            
            System.out.println("Engine " + request.getParameter("id"));  
            //this.getThreadLocalRequest().getSession().setAttribute("PARAM_BANNER",turnos[1][1]);
           // String Banner = (String) request.getSession().getAttribute("PARAM_BANNER");
            String Banner ="BannerMain.png";
            String Footer ="BannerFooter.png";
            
            try
            {
                Map parameterss = new HashMap();
                String parametros = request.getParameter("parameters");
                Integer filterSQL_ID = Integer.parseInt(request.getParameter("fsqlr"));


                System.err.println("filterSQL_ID: " + filterSQL_ID);
                System.err.println("Reporte: " + request.getParameter("ReportPath"));
                System.err.println("parameters: " + request.getParameter("parameters"));

                //Define FilterSQLReport
                FilterSQLReport filter = new FilterSQLReport(getServletConfig().getServletContext().getRealPath(getServletContext().getInitParameter("FilterSQLReport")), filterSQL_ID);

                if (filter.getFilter().getSQLProcedures() == null) 
                {
                    filter.getFilter().setSQLFilter("");
                }

                parametros = parametros.substring(1, parametros.length() - 1);

                String periodo[] = new String[2];
                periodo[0] = "";
                periodo[1] = "";

                StringTokenizer token = new StringTokenizer(parametros, ", ");
                while (token.hasMoreTokens()) 
                {
                    int i = 0;
                    String[] parametro = new String[2];
                    StringTokenizer tokenaux = new StringTokenizer(token.nextToken(), "=");
                    while (tokenaux.hasMoreTokens()) 
                    {
                        parametro[i] = tokenaux.nextToken();
                        i++;
                    }

                    //Construir  SQL dinámico

                    if (isNumeric(parametro[1])) 
                    {
                        parameterss.put(parametro[0], Integer.parseInt(parametro[1]));

                        //Si el reporte tiene paso de parametros Integer
                        if (filter.getFilter().getParameterReport().equals("True")) 
                        {
                            String tokenp[] = parametro[0].split("_");
                            System.out.println("0: " + tokenp[0]);
                            System.out.println("1: " + tokenp[1]);

                            parameters.put(tokenp[0], Integer.parseInt(parametro[1]));
                        }
                    } 
                    else if (isDate(parametro[1])) 
                    {
                        System.out.println("KEY: " + parametro[0] + " VALOR: " + parametro[1]);
                        String a = parametro[0];
                        String tokenKey[] = a.split("_");
                        String key = "";

                        /**
                         * *************
                         */
                        SimpleDateFormat DF = new SimpleDateFormat("yyyy/MM/dd");
                        Date fecha = (Date) DF.parse(parametro[1]);

                        DF = new SimpleDateFormat("yyyyMMdd");
                        System.out.println("******** NUEVO FORMATO:" + DF.format(fecha));

                        /**
                         * ****************
                         */
                        if (tokenKey[1].equals("1"))
                        {
                            // key= new StringBuffer().append(" AND convert(datetime,").append(tokenKey[0]).append(", 112) >=").append(DF.format(fecha)).toString();
                            key = new StringBuffer().append(" AND convert(datetime,").append(filter.getFilter().getParameterDate()).append(", 112) >=").append("$P{" + tokenKey[0] + "}").toString();
                            periodo[0] = key;
                            parameters.put(tokenKey[0], DF.format(fecha));
                        } 
                        else if (tokenKey[1].equals("2")) 
                        {
                            fecha.setHours(24);
                            //key= new StringBuffer().append(" AND convert(datetime,").append(tokenKey[0]).append(", 112) <=").append(DF.format(fecha)).toString();
                            key = new StringBuffer().append(" AND convert(datetime,").append(filter.getFilter().getParameterDate()).append(", 112) <=").append("$P{" + tokenKey[0] + "}").toString();
                            //key= new StringBuffer().append(" AND convert(datetime,").append(filter.getFilter().getParameterDate()).append(", 112) <=").append("$P{"+DF.format(fecha)+"}").toString();
                            periodo[1] = key;
                            parameters.put(tokenKey[0], DF.format(fecha));
                        } 
                        else if (tokenKey[1].equals("3")) 
                        {
                            key = new StringBuffer().append(" AND convert(varchar,").append(filter.getFilter().getParameterDate()).append(", 112) = ").append("$P!{" + tokenKey[0] + "}").toString();
                            periodo[0] = key;
                            periodo[1] = "";
                            parameters.put(tokenKey[0], DF.format(fecha));
                        }

                        // DateTimeFormat DF = DateTimeFormat.getFormat("dd/MM/yyyy");
                        // DateTimeFormat DF = DateTimeFormat.getFormat("yyyyMMdd");
                        //and convert(datetime, turno.lab7500c2, 112) >= $P{FECHA_INICIO}
                        //and convert(datetime, turno.lab7500c2, 112) <= $P{FECHA_FIN}
                        //fecha=(Date)DF.parse(DF.format(fecha));
                        //parameterss.put(tokenKey[0],DF.format(fecha));
                        // parameterss.put(tokenKey[0],fecha);
                        // parameterss.put(tokenKey[0],DF.format(DF));
                        //parameterss.put(tokenKey[0],DF.format(new Date(parametro[1])));
                        // parameterss.put(key,"'"+ DF.format(new Date(parametro[1]))+"'");
                    } 
                    else 
                    {
                        System.out.println("ES String !!");
                        parameterss.put(parametro[0], "'"+parametro[1]+"'");
                    }
                }

                System.err.println("parameterss: " + parameterss);
                if (filter.getFilter().getSQLProcedures() != null) 
                {
        //                            System.err.println("SQLProcedure: " + filter.getFilter().getSQLProcedures());
        //                            System.err.println("SQLProcedures parameters: " + parameters);


                    conn = ((DataSource) CachingServiceLocator.getInstance().getObjetoRemoto(DBConnection.getPool())).getConnection();
                    plantilla = request.getSession().getServletContext().getRealPath(request.getParameter("ReportPath"));
                    parameters.put("REPORT_LOCALE", new Locale("es", "CO"));
                    parameters.put("REPORT_TIME_ZONE", clientTimeZone);
                    parameters.put("TITLE_REPORT", filter.getFilter().getFilter());
                    parameters.put("BANNER_REPORT", request.getSession().getServletContext().getRealPath("/images/" + Banner));
                    parameters.put("FOOTER_REPORT", request.getSession().getServletContext().getRealPath("/images/" + Footer));
                    parameters.put("SQL", filter.getFilter().getSQLProcedures());

                    gr.generadorReportes(request, response, plantilla, parameters, conn);

                    /* conn = ((DataSource) CachingServiceLocator.getInstance().getObjetoRemoto(DBConnection.getPool())).getConnection();
                     plantilla = request.getSession().getServletContext().getRealPath(request.getParameter("ReportPath"));
                     parameters.put("REPORT_LOCALE", new Locale("es", "CO"));
                     parameters.put("REPORT_TIME_ZONE", clientTimeZone);
                     parameters.put("TITLE_REPORT", filter.getFilter().getFilter());
                     parameters.put("BANNER_REPORT", request.getSession().getServletContext().getRealPath("/images/" + Banner));
                     parameters.put("SQL", filter.getFilter().getSQLProcedures());
                     sou = response.getOutputStream();
                     byte[] bytes8 = JasperRunManager.runReportToPdf(plantilla, parameters, conn);
                     response.setContentType("application/pdf");
                     response.setContentLength(bytes8.length);
                     sou.write(bytes8, 0, bytes8.length);
                     sou.flush();*/
                } 
                else 
                {
                    // Asignar Parametros de Filtro
                    filter.setParameterSQLFilter(parameterss);

                    //Adicionar parametros de rango de tiempo al reporte
                    System.err.println("filter NAME: " + filter.getFilter().getName());
                    filter.getFilter().setSQLTables(filter.getFilter().getSQLTables().replace("|1|", ">"));
                    filter.getFilter().setSQLTables(filter.getFilter().getSQLTables().replace("|2|", "<"));
                    System.err.println("SQLTables: " + filter.getFilter().getSQLTables());
                    System.err.println("Condition: " + filter.getFilter().getSQLCondition());
                    filter.getFilter().setSQLFilter(filter.getFilter().getSQLFilter() + periodo[0] + periodo[1] + " ");
                    System.err.println("FiLTER: " + filter.getFilter().getSQLFilter());
                    System.err.println("SQL: " + filter.getFilterSQLReport());

                    System.out.println("PARAMETERS TO REPORT: " + parameters);
                    //+ "&ReportPath=" + ruta.getValueAsString() + "&parameters=" + parameters+"&format=" +format

                    conn = ((DataSource) CachingServiceLocator.getInstance().getObjetoRemoto(DBConnection.getPool())).getConnection();
                    plantilla = request.getSession().getServletContext().getRealPath(request.getParameter("ReportPath"));
                    parameters.put("REPORT_LOCALE", new Locale("es", "CO"));
                    parameters.put("REPORT_TIME_ZONE", clientTimeZone);
                    parameters.put("TITLE_REPORT", filter.getFilter().getName());
                    parameters.put("BANNER_REPORT", request.getSession().getServletContext().getRealPath("/images/" + Banner));
                    System.out.println("footer:"+request.getSession().getServletContext().getRealPath("/images/" + Footer));
                    parameters.put("FOOTER_REPORT", request.getSession().getServletContext().getRealPath("/images/" + Footer));
                    parameters.put("SQL", filter.getFilterSQLReport());

                    gr.generadorReportes(request, response, plantilla, parameters, conn);
                    /* sou = response.getOutputStream();
                     byte[] bytes8 = JasperRunManager.runReportToPdf(plantilla, parameters, conn);
                     response.setContentType("application/pdf");
                     response.setContentLength(bytes8.length);
                     sou.write(bytes8, 0, bytes8.length);
                     sou.flush();*/
                }
            }
            catch (Exception ex)
            {
                ex.printStackTrace();
            }
            finally
            {
                DBConnection.closeDBConnection(conn, null, null, null, null);
            }
        } 
        finally 
        {
            if (out != null)
            {
                out.close();
            }
        }
    }
    
        /**
     * Método para comprobar que una cadena de texto es numerica
     *  @param cadena cadena de texto a comprobar
     * @return boolean resultado de validación de cadena
     * @throws NumberFormatException  error de conversión
     */
    private static boolean isNumeric(String cadena)
    {
        try
        {
            Integer.parseInt(cadena);
            return true;
        }
        catch (NumberFormatException nfe)
        {
            return false;
        }
    }

    /**
     * Método para comprobar que una cadena de texto es de tipo Fecha
     * @param fecha cadena de texto a comprobar
     * @return boolean resultado de validación de cadena
     */
    private boolean isDate(String fecha)
    {
        System.out.print("COMPROBANDO FECHA*****************");

        if (fecha == null)
        {
            return false;
        }

        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy/MM/dd"); //año-mes-dia
        //SimpleDateFormat dateFormat = new SimpleDateFormat("dd/MM/yyyy"); //año-mes-dia

        if (fecha.trim().length() != dateFormat.toPattern().length())
        {
            return false;
        }

        dateFormat.setLenient(false);

        try
        {
            dateFormat.parse(fecha.trim());
        }
        catch (ParseException pe)
        {
            return false;
        }
        return true;
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP
     * <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP
     * <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>
}
