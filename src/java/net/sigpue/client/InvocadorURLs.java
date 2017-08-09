package net.sigpue.client;

import com.google.gwt.core.client.GWT;
import com.google.gwt.user.client.Window;

/**
 *
 * @author jpena - Jhonatan Alexander Peña. jpena@cltech.net.
 * CLTech - Clinical Laboratory Technology
 * All rights reserved. CLTech 2013
 *
 */
public class InvocadorURLs 
{
    public static void  invocarURL(String path) 
    {
        String newURL = Window.Location.createUrlBuilder().setPath(path).buildString();
        Window.Location.replace(newURL);  
        
        //com.google.gwt.user.client.Window.open("https://twitter.com/#!/sigpma", "sgwt", null);
         //com.google.gwt.user.client.Window.Location.assign("privateView.jsp");
                            
//                            UrlBuilder urlBuilder = Window.Location.createUrlBuilder();
//        urlBuilder.setPath("/ApplicationScaffold.html");
//        widget.setReturnUrl(urlBuilder.buildString());
// Window.open("http://www.smartclient.com/smartgwt/showcase", "_blank", "");
    }
    
    public static void  invocarURLTab(String URL) 
    {//"https://twitter.com/#!/sigpma", "sgwt"
        com.google.gwt.user.client.Window.open(URL, "sgwt", null);
    }
}
