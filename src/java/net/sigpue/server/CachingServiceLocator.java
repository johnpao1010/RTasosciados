package net.sigpue.server;

import java.util.HashMap;
import java.util.Map;
import java.util.Collections;
import java.net.URL;

import java.util.Properties;
import javax.naming.Context;
import javax.naming.InitialContext;
import javax.naming.NamingException;

/**
 *
 * @author AriasBarrosTorres
 */
public class CachingServiceLocator
{

    public static final String HOST_REMOTO = "localhost";
    public static final String PUERTO_HOST_REMOTO = "3700";
    private InitialContext ic;
    private Map<String, Object> cache;
    private static CachingServiceLocator me;

    static
    {
        try
        {
            me = new CachingServiceLocator();
        }
        catch (NamingException se)
        {
            throw new RuntimeException(se);
        }
    }

    private CachingServiceLocator() throws NamingException
    {
        ic = localInitialContext();
        cache = Collections.synchronizedMap(new HashMap<String, Object>());
    }

    public static CachingServiceLocator getInstance()
    {
        return me;
    }

    private Object lookup(String jndiName) throws NamingException
    {
        Object cachedObj = cache.get(jndiName);
        if (cachedObj == null)
        {
            cachedObj = ic.lookup(jndiName);
            cache.put(jndiName, cachedObj);
        }
        return cachedObj;
    }

    public Object getObjetoRemoto(String destName) throws NamingException
    {
        return lookup(destName);
    }

    /**
     * This method obtains the URL
     * @return the URL value corresponding to the env entry name.
     */
    public URL getUrl(String envName) throws NamingException
    {
        return (URL) lookup(envName);
    }

    private InitialContext localInitialContext()
    {
        Properties props = new Properties();
        props.put(Context.INITIAL_CONTEXT_FACTORY, "com.sun.enterprise.naming.SerialInitContextFactory");
        props.setProperty("org.omg.CORBA.ORBInitialHost", HOST_REMOTO);
        props.setProperty("org.omg.CORBA.ORBInitialPort", PUERTO_HOST_REMOTO);
        InitialContext ctx = null;
        try
        {
            ctx = new InitialContext(props);
        }
        catch (NamingException ex)
        {
            ex.printStackTrace();
        }
        return ctx;
    }
}
