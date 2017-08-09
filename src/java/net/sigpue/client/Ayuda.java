/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package net.sigpue.client;

import com.smartgwt.client.types.ContentsType;
import com.smartgwt.client.widgets.HTMLPane;
import com.smartgwt.client.widgets.Window;

/**
 *
 * @author jlozano
 */
public class Ayuda extends Window {
    
    public Ayuda() {
        final HTMLPane htmlPane = new HTMLPane();        
        htmlPane.setContentsURL("ayuda.html");        
        htmlPane.setContentsType(ContentsType.PAGE); 
        htmlPane.setWidth100();
        htmlPane.setHeight100();
        addItem(htmlPane);
        setTitle(VariablesGenerales.ETIQUETAS.ayuda());
        setCanDragResize(true);
        setShowMinimizeButton(false);
        setWidth(600);
        setHeight(400);
        centerInPage();
        draw();
    }
}
