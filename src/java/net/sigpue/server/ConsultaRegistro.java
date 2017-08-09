package net.sigpue.server;

import java.sql.Connection;
import java.sql.ResultSet;
import java.util.HashMap;
import java.util.Map;
import javax.sql.DataSource;

/**
 *
 * @author Jorge
 */
public class ConsultaRegistro
{

    public Map<String, String> consulta(String nombreTabla, Long id, String pool)
    {
        Connection conn = null;
        ResultSet rs = null;
        Map<String, String> datos = null;
        try
        {
            conn = ((DataSource) CachingServiceLocator.getInstance().getObjetoRemoto(pool)).getConnection();
            rs = conn.createStatement(ResultSet.TYPE_SCROLL_SENSITIVE, ResultSet.CONCUR_READ_ONLY).executeQuery("select * from " + nombreTabla + " where codigo = " + id);
            if (rs.first())
            {
                datos = new HashMap<String, String>();
                for (int i = 1; i <= rs.getMetaData().getColumnCount(); i++)
                {
                    datos.put(rs.getMetaData().getColumnName(i).toLowerCase(), rs.getString(i));
                }
            }
        }
        catch (Exception ex)
        {
            ex.printStackTrace();
            return null;
        }
        finally
        {
            DBConnection.closeDBConnection(conn, null, rs, null, null);
        }
        return datos;
    }

    public Map<String, String> consultaPersonalizada(String consulta, String pool)
    {
        Connection conn = null;
        ResultSet rs = null;
        Map<String, String> datos = null;
        try
        {
            conn = ((DataSource) CachingServiceLocator.getInstance().getObjetoRemoto(pool)).getConnection();
            rs = conn.createStatement(ResultSet.TYPE_SCROLL_SENSITIVE, ResultSet.CONCUR_READ_ONLY).executeQuery(consulta);
            if (rs.first())
            {
                datos = new HashMap<String, String>();
                rs.beforeFirst();
                while (rs.next())
                {
                    datos.put(rs.getString(1), rs.getString(2));
                }
            }
        }
        catch (Exception ex)
        {
            ex.printStackTrace();
            return null;
        }
        finally
        {
            DBConnection.closeDBConnection(conn, null, rs, null, null);
        }
        return datos;
    }

    public String[][] consultaMasiva(String nombreTabla, String condicion, String pool)
    {
        Connection conn = null;
        ResultSet rs = null;
        String datos[][] = null;
        try
        {
//            System.out.println("select * from "+nombreTabla+" where "+condicion);
            conn = ((DataSource) CachingServiceLocator.getInstance().getObjetoRemoto(pool)).getConnection();
            rs = conn.createStatement(ResultSet.TYPE_SCROLL_SENSITIVE, ResultSet.CONCUR_READ_ONLY).executeQuery("select * from " + nombreTabla + " where " + condicion);
            if (rs.last())
            {
                datos = new String[rs.getRow()][rs.getMetaData().getColumnCount()];
                rs.beforeFirst();
                for (int i = 0; i < datos.length; i++)
                {
                    rs.next();
                    for (int j = 1; j <= rs.getMetaData().getColumnCount(); j++)
                    {
                        datos[i][j - 1] = rs.getString(j);
                    }
                }
            }
        }
        catch (Exception ex)
        {
            ex.printStackTrace();
            return null;
        }
        finally
        {
            DBConnection.closeDBConnection(conn, null, rs, null, null);
        }
        return datos;
    }

    public String[][] consultaMasivaSql(String sql, String pool)
    {
        Connection conn = null;
        ResultSet rs = null;
        String datos[][] = null;
        try
        {
            conn = ((DataSource) CachingServiceLocator.getInstance().getObjetoRemoto(pool)).getConnection();
            rs = conn.createStatement(ResultSet.TYPE_SCROLL_SENSITIVE, ResultSet.CONCUR_READ_ONLY).executeQuery(sql);
            if (rs.last())
            {
                datos = new String[rs.getRow()][rs.getMetaData().getColumnCount()];
                rs.beforeFirst();
                for (int i = 0; i < datos.length; i++)
                {
                    rs.next();
                    for (int j = 1; j <= rs.getMetaData().getColumnCount(); j++)
                    {
                        datos[i][j - 1] = rs.getString(j);
                    }
                }
            }
        }
        catch (Exception ex)
        {
            ex.printStackTrace();
            return null;
        }
        finally
        {
            DBConnection.closeDBConnection(conn, null, rs, null, null);
        }
        return datos;
    }

    public int consultaExistencia(String nombreTabla, HashMap<String, Object> filaCompleta, String pool)
    {
        Connection conn = null;
        ResultSet rs = null;
        try
        {
            String sql = "SELECT codigo FROM " + nombreTabla + " WHERE ";
            for (Object object : filaCompleta.keySet())
            {
                if (!object.equals("__ref"))
                {
                    sql += object + "='" + filaCompleta.get(object) + "' AND ";
                }
            }
            sql = sql.substring(0, sql.length() - 5);
            conn = ((DataSource) CachingServiceLocator.getInstance().getObjetoRemoto(pool)).getConnection();
            System.out.println(sql);
            rs = conn.prepareStatement(sql).executeQuery();
            if (rs.next())
            {
                return rs.getInt("codigo");
            }
            else
            {
                return -1;
            }
        }
        catch (Exception ex)
        {
            ex.printStackTrace();
            return -1;
        }
        finally
        {
            DBConnection.closeDBConnection(conn, null, rs, null, null);
        }
    }
}
