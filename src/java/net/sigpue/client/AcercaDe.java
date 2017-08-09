/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package net.sigpue.client;

import com.smartgwt.client.types.Alignment;
import com.smartgwt.client.types.Cursor;
import com.smartgwt.client.types.VerticalAlignment;
import com.smartgwt.client.widgets.Img;
import com.smartgwt.client.widgets.Label;
import com.smartgwt.client.widgets.Window;
import com.smartgwt.client.widgets.layout.HLayout;
import com.smartgwt.client.widgets.layout.VLayout;

/**
 *
 * @author jduran
 */
public class AcercaDe extends Window{
    private Label texto;
    private Label derReserv;
    private Img logo1 = new Img("encabezado/UE.png", 40, 38);
    private Img logo2 = new Img("ua.png", 40, 38);
    public AcercaDe() 
    {
        HLayout layout=new HLayout();
        
        setTitle("SIGPUE Version 1.0");
        setWidth(300);
        setHeight(200);
        setShowShadow(true);
        setShadowSoftness(VariablesGenerales.DEFAULT_SHADOW_SOFTNESS);
        setShadowOffset(VariablesGenerales.DEFAULT_SHADOW_OFFSET);
        setStyleName("ventanas");
        texto = new Label(VariablesGenerales.ETIQUETAS.textoAcercaDe());
        texto.setAlign(Alignment.CENTER);
        animateShow(VariablesGenerales.EFECTO_POR_DEFECTO);
        
        derReserv = new Label("RTAsocialdos ABOGADOS<br>Todos los derechos reservados.Ings Jhon Duran;<br> 2017");
        derReserv.setAlign(Alignment.CENTER);
        derReserv.setWidth(150);
        derReserv.setHeight(50);
        derReserv.setStyleName("derechosReservados");
        derReserv.draw();
        
        logo1.setAlign(Alignment.CENTER);
        logo1.setCursor(Cursor.HAND);
        logo1.setLeft(50);
        logo1.showNextTo(derReserv);
      
        logo2.setAlign(Alignment.CENTER);
        logo2.setCursor(Cursor.HAND);
        logo2.setLeft(50);
        
        
        layout.setHeight(60);
        layout.setWidth(200);
        layout.setLayoutAlign(Alignment.CENTER);
        layout.addMembers(logo2,derReserv,logo1);
        
        
        addItem(texto);
        addItem(layout);
        setAlign(Alignment.CENTER);
        setBackgroundColor("#7DF30F");
        setShowMinimizeButton(false);
        setIsModal(true);  
        show();
    }

}

