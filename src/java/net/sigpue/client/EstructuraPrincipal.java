/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package net.sigpue.client;

import com.smartgwt.client.types.Alignment;
import com.smartgwt.client.types.Cursor;
import com.smartgwt.client.types.VerticalAlignment;
import com.smartgwt.client.util.SC;
import com.smartgwt.client.widgets.Canvas;
import com.smartgwt.client.widgets.Img;
import com.smartgwt.client.widgets.Label;
import com.smartgwt.client.widgets.events.ClickEvent;
import com.smartgwt.client.widgets.events.ClickHandler;
import com.smartgwt.client.widgets.layout.Layout;
import com.smartgwt.client.widgets.layout.VStack;

/**
 *
 * @author jduran
 */
public class EstructuraPrincipal 
{

    public static BotonMenu botones[] = new BotonMenu[8];
    public static Layout canvasPrincipal = new Layout();
    public static Canvas pantallaActual = null;
    private Img logo1 = new Img("logo.png", 40, 38);
    private Img logo2 = new Img("logo2.png", 40, 38);

    public EstructuraPrincipal(InformacionUsuario usuario) {
        VStack stackMenu = new VStack();
        stackMenu.setMembersMargin(5);
        botones[0] = new BotonMenu(1, "  REGISTRO CASOS", this, usuario);
        botones[1] = new BotonMenu(2, "  SEGUIMIENTO CASOS", this, usuario);
        botones[2] = new BotonMenu(3, "  REGISTRO AGENDAS", this, usuario);
        botones[3] = new BotonMenu(4, "  CONSULTA DE AGENDAS", this, usuario);
        botones[4] = new BotonMenu(5, "  CONSULTA CASOS", this, usuario);
        botones[5] = new BotonMenu(6, "  CARGUE ARCHIVOS", this, usuario);
        botones[6] = new BotonMenu(7, "  CONFIGURACION", this, usuario);
        botones[7] = new BotonMenu(8, "  REPORTE ESTADISTICA", this, usuario);
        
        stackMenu.addMember(botones[0]);
        stackMenu.addMember(botones[1]);
        stackMenu.addMember(botones[2]);
        stackMenu.addMember(botones[3]);
//        if (usuario.getRoles().contains("1")) {
        stackMenu.addMember(botones[4]);
        stackMenu.addMember(botones[5]);
        stackMenu.addMember(botones[6]);
        stackMenu.addMember(botones[7]);
        
//        }
        
        logo2.setAlign(Alignment.CENTER);
        logo2.setCursor(Cursor.HAND);
        logo2.show();
        logo2.setTop(Encabezado.getAlto() - 45);
        logo2.setLeft(Encabezado.getAncho() / 2 - 140);

                
        Label derReserv = new Label("RTASOCIADOS ABOGADOS<br>All Right Reserved Ing Jhon duran <br>2017");
        derReserv.setValign(VerticalAlignment.CENTER);
        derReserv.setAlign(Alignment.CENTER);
        derReserv.setWidth(200);
        derReserv.setHeight(50);
        derReserv.setTop(Encabezado.getAlto() - 45);
        derReserv.setLeft(Encabezado.getAncho() / 2 - 100);
        derReserv.setStyleName("derechosReservados");
        derReserv.draw();

        logo1.showNextTo(derReserv);
        logo1.setCursor(Cursor.HAND);
        logo1.setHoverWidth(110);
        logo1.setHoverOpacity(75);
        logo1.setHoverStyle("interactImageHover");
        logo1.addClickHandler(new ClickHandler() {
            @Override
            public void onClick(ClickEvent event) {
//                InvocadorURLs.invocarURLTab("http://www.uniamazonia.edu.co");
            }
        });
       
        stackMenu.setWidth(192);
        stackMenu.setHeight(42 * 13);
        stackMenu.setLeft(0);
        stackMenu.setTop(120);
        stackMenu.draw();
//        canvasPrincipal.setShowEdges(true);
        canvasPrincipal.setStyleName("sc-rounded-blue");
        canvasPrincipal.setTop(120);
        canvasPrincipal.setLeft(192);
        canvasPrincipal.setWidth(Encabezado.getAncho() - 245);
        canvasPrincipal.setHeight(Encabezado.getAlto() - 165);
        canvasPrincipal.draw();
    }

    public static void desseleccionarBotones() {
        for (BotonMenu b : botones) {
            b.desseleccionar();
            b.setTitleStyle("opcionesMenu");
        }
    }

    public static void actualizaPantalla(Canvas nuevaPantalla) {
        if (pantallaActual != null) {
            canvasPrincipal.removeMember(pantallaActual);
        }
        canvasPrincipal.addMember(nuevaPantalla);
        pantallaActual = nuevaPantalla;
    }
}