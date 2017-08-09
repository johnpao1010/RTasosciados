/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package net.sigpue.client;

import com.google.gwt.user.client.rpc.AsyncCallback;
import com.smartgwt.client.types.Alignment;
import com.smartgwt.client.types.Cursor;
import com.smartgwt.client.types.Overflow;
import com.smartgwt.client.types.VerticalAlignment;
import com.smartgwt.client.util.SC;
import com.smartgwt.client.widgets.Img;
import com.smartgwt.client.widgets.ImgButton;
import com.smartgwt.client.widgets.Label;
import com.smartgwt.client.widgets.events.ClickEvent;
import com.smartgwt.client.widgets.events.ClickHandler;
/**
 *
 * @author jduran
 */
public class Encabezado {

    private ImgButton cerrarsesion;
 
    private Label bienvenida = null;
    private Label cerrar = null;
    private ImgButton acercade = null;
//    private Img encabezado2 = new Img("");
    private Img encabezado2 = new Img("banner2.png");
    private static Img pixel = new Img("pixel.png");

    public Encabezado(final InformacionUsuario usuario) {
        pixel.setWidth100();
        pixel.setHeight100();
        pixel.sendToBack();
        pixel.draw();
        encabezado2.setHeight(100);
        encabezado2.setWidth100();
        encabezado2.setLeft(0);
        encabezado2.setTop(0);
        encabezado2.draw();

        if (usuario != null) {
            
            
            acercade = new ImgButton();
            acercade.setValign(VerticalAlignment.TOP);
            acercade.setAlign(Alignment.RIGHT);
            acercade.setHeight(24);
            acercade.setWidth(24);
            acercade.setSrc("acercade.png");
            acercade.setTooltip("Acerca de...");
            acercade.setTop(65);
            acercade.setLeft(1100);
            acercade.addClickHandler(new ClickHandler() {

                @Override
                public void onClick(ClickEvent event)
                {
                    AcercaDe acerca=new AcercaDe();
                    acerca.show();
                    acerca.centerInPage();
                }
            });
            
            cerrar=new Label("Cerrar Sesión");
            cerrar.setTop(65);
            cerrar.setWrap(false);
            cerrar.setLeft(1156);
            cerrar.setHeight(24);
            cerrar.setWidth(60);
            cerrar.setTitleStyle("opcionesMenu");
            
            cerrarsesion = new ImgButton();
            cerrarsesion.setValign(VerticalAlignment.TOP);
            cerrarsesion.setAlign(Alignment.RIGHT);
            cerrarsesion.setHeight(24);
            cerrarsesion.setWidth(24);
            cerrarsesion.setCursor(Cursor.HAND);
            cerrarsesion.setSrc("cerrarsesion.png");
            cerrarsesion.setTooltip("Cerrar sesion");
            cerrarsesion.setTop(97);
            cerrarsesion.setLeft(1230);
            cerrarsesion.addClickHandler(new ClickHandler() {

                @Override
                public void onClick(ClickEvent event)
                {
                   InvocadorServicios.getServicio().cerrarSesion(usuario, new AsyncCallback<Boolean>() {
                        @Override
                        public void onFailure(Throwable caught) {
                            SC.say(VariablesGenerales.ETIQUETAS.errorInesperado());
                        }

                        @Override
                        public void onSuccess(Boolean result) {
                            InvocadorURLs.invocarURL("/sigpue/login.html");
                        }
                    });
                }
            });
            
            bienvenida = new Label("Bienvenido:" +"  "+ usuario.getNombre() + " " + usuario.getApellido() + ".            .");
            bienvenida.setHeight(20);
            bienvenida.setWidth(bienvenida.getContents().length() * 4 + 20);
            bienvenida.setOverflow(Overflow.VISIBLE);
            bienvenida.setLeft(920);
            bienvenida.setTop(97);
            bienvenida.draw();
//            acercade.draw();
//            cerrar.draw();
            cerrarsesion.draw();

        }
    }

    public static int getAlto() {
        return pixel.getHeight();
    }

    public static int getAncho() {
        return pixel.getWidth();
    }
}
