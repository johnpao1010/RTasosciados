/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package net.sigpue.client;

import com.smartgwt.client.types.Alignment;
import com.smartgwt.client.types.Cursor;
import com.smartgwt.client.util.SC;
import com.smartgwt.client.widgets.Img;
import com.smartgwt.client.widgets.Label;
import com.smartgwt.client.widgets.events.ClickEvent;
import com.smartgwt.client.widgets.events.ClickHandler;
import com.smartgwt.client.widgets.layout.VStack;

/**
 *
 * @author jlozano
 */
public class MensajesEmergentes extends VStack{
    private Label mensaje = new Label();
    private Img boton = new Img("trash.png",24,24);
    public MensajesEmergentes(int codigo, String texto) {
        mensaje.setStyleName("mensajesEmergentes");
        mensaje.setAlign(Alignment.CENTER);  
        mensaje.setHeight(42);
        mensaje.setWidth(205);
        mensaje.setContents(texto);
        boton.setTooltip(VariablesGenerales.ETIQUETAS.descartar());
        boton.setCursor(Cursor.HAND);
        setHeight(70);
        setWidth(205);
        setShowEdges(true);
        addMember(boton);
        addMember(mensaje);
        mensaje.addClickHandler(new ClickHandler() {

            @Override
            public void onClick(ClickEvent event) {
                SC.say("Abrir opción");
            }
        });
        boton.addClickHandler(new ClickHandler() {

            @Override
            public void onClick(ClickEvent event) {
                SC.say("Descartado");
            }
        });
    }
    
}
