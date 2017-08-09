/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package net.sigpue.client;

import com.smartgwt.client.types.Alignment;
import com.smartgwt.client.types.Cursor;
import com.smartgwt.client.widgets.Img;
import com.smartgwt.client.widgets.events.ClickEvent;
import com.smartgwt.client.widgets.events.ClickHandler;

/**
 *
 * @author jduran
 */
public class BotonMenu extends Img {
    private String but;
    public BotonMenu(final int num, String titulo, final EstructuraPrincipal padre, final InformacionUsuario usuario) {
        super("botones/" + "btn_1" + ".png", 192, 42);
        this.but = "btn_1";
        setID("opcion"+num);
        setAlign(Alignment.LEFT);
        setTitle("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + titulo);
        setTitleStyle("opcionesMenu");
        setShowTitle(true);
        setCursor(Cursor.HAND);
//        setMargin(10);
        addClickHandler(new ClickHandler() {
            @Override
            public void onClick(ClickEvent event) {
                padre.desseleccionarBotones();
                padre.actualizaPantalla(DespachadorLienzo.despachar(num,usuario));
            }
        });
    }
    public void desseleccionar(){
        setSrc("botones/" + but + ".png");
    }
}
