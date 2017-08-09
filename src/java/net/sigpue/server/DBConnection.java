/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package net.sigpue.server;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.Properties;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.naming.InitialContext;
import javax.naming.NamingException;
import javax.sql.DataSource;

/**
 *
 * @author Die
 */
public class DBConnection
{
    public static String HOST_BROKER = "localhost";
    public static String PORT_BROKER = "3700";
    public static final String JDBC_DRIVER = "org.postgresql.Driver";
    public static InitialContext ic = null;
    public static String POOL = null;
    public static String DOMINIO = null;
    public static String CONTEXT_ROOT_SERVER = "sigpue";

    private static DataSource ds = null;

    public static java.sql.Connection getConnection() throws ClassNotFoundException, SQLException, NamingException
    {
//        if (connection == null) {
//            try {
               //return ((DataSource) CachingServiceLocator.getInstance().getObjetoRemoto(getPool())).getConnection();
//            } catch (Exception ex) {
//                ex.printStackTrace();
//            }
//        }
//        return connection;

               /*** Nueva implementación para evitar llenado de Pool de Conexiones ***/

        System.out.println("entrads");
        if (ds == null)
        {
            Properties properties = new Properties();
            properties.put(ic.INITIAL_CONTEXT_FACTORY, "com.sun.enterprise.naming.SerialInitContextFactory");
            properties.setProperty("org.omg.CORBA.ORBInitialHost", "localhost");
            properties.setProperty("org.omg.CORBA.ORBInitialPort", "3700");
            InitialContext ic = new InitialContext(properties);
            ds = (DataSource) ic.lookup(getPool());
        }
        return ds.getConnection();

    }

    public static String getHOST_BROKER()
    {
        return HOST_BROKER;
    }

    public static String getPORT_BROKER()
    {
        return PORT_BROKER;
    }
    
    public static String getDOMINIO()
    {
        return DOMINIO;
    }
    
    public static String getPool() 
    {
        if (POOL == null)
        {
            try
            {
                System.err.println("Paht .Config: "+System.getProperty("user.dir"));
                Properties prop = new Properties();
                prop.load(new FileInputStream(new File(CONTEXT_ROOT_SERVER+".config")));
                

            //prop.load(new FileInputStream(new File(CONTEXT_ROOT_SERVER+"..properties")));
                //prop.load(new FileInputStream("C://Documents and Settings//jpena//Mis documentos//NetBeansProjects//Alert//src//java//"+CONTEXT_ROOT_SERVER+".properties"));
                //prop.load(new FileInputStream("C://Documents and Settings//jpena//Mis documentos//NetBeansProjects//Alert//src//java//"+CONTEXT_ROOT_SERVER+".config"));
                POOL = prop.getProperty("pool");
                PORT_BROKER = prop.getProperty("PORT_BROKER");
                DOMINIO = prop.getProperty("DOMINIO");
                //POOL ="jdbc/Digiturno";
                //PORT_BROKER = "3700";
            } 
            catch (IOException ex)
            {
                Logger.getLogger(DBConnection.class.getName()).log(Level.SEVERE, null, ex);
            }
        }
        return POOL;
    }

     /**
     * Cierra los parametros de conexion
     *
     * @param conn Conexion DB
     * @param call Callable
     * @param rs ResultSet
     */
    public static void closeDBConnection(Connection conn, CallableStatement call, ResultSet rs,PreparedStatement ps, Statement st)
    {
        try
        {
            if (conn != null)
            {
                conn.close();
            }
            
            if (call != null)
            {
                call.close();
            }

            if (rs != null)
            {
                rs.close();
            }

            if (ps != null)
            {
                ps.close();
            }
            if (st != null)
            {
                st.close();
            }
        }
        catch (SQLException ex)
        {
            Logger.getLogger(DBConnection  .class.getName()).log(Level.SEVERE, null, ex);
        }
    }
}
