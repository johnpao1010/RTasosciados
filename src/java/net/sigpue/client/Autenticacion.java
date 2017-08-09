package net.sigpue.client;

import com.google.gwt.user.client.rpc.AsyncCallback;
import com.smartgwt.client.types.ContentsType;
import com.smartgwt.client.util.SC;
import com.smartgwt.client.widgets.HTMLPane;
import com.smartgwt.client.widgets.IButton;
import com.smartgwt.client.widgets.form.DynamicForm;
import com.smartgwt.client.widgets.form.fields.CanvasItem;
import com.smartgwt.client.widgets.form.fields.PasswordItem;
import com.smartgwt.client.widgets.form.fields.TextItem;
import com.smartgwt.client.widgets.form.fields.events.KeyPressEvent;
import com.smartgwt.client.widgets.form.fields.events.KeyPressHandler;

/**
 *
 * @author jeduran
 */
public class Autenticacion extends DynamicForm{
    private TextItem texto;
    private PasswordItem clave;
    private IButton aceptar;
    
    public Autenticacion() {
         final HTMLPane htmlPane = new HTMLPane();  
        htmlPane.setShowEdges(false);  
        htmlPane.setContentsURL("login.html");  
        htmlPane.setContentsType(ContentsType.PAGE);  
        htmlPane.setTop(0);
        htmlPane.setLeft(0);
        htmlPane.setWidth100();
        htmlPane.setHeight100();
        htmlPane.draw();
    }
    public Autenticacion(boolean b) {
        setTop(200);
        setLeft("40%");
        setWidth(300);
        setHeight(100);
        setShowShadow(true);
        setShadowSoftness(VariablesGenerales.DEFAULT_SHADOW_SOFTNESS);
        setShadowOffset(VariablesGenerales.DEFAULT_SHADOW_OFFSET);
        setStyleName("ventanas");
        texto = new TextItem("campo", VariablesGenerales.ETIQUETAS.usuario());
        texto.setRequired(true);
        texto.setValue("");
        clave = new PasswordItem("pass", VariablesGenerales.ETIQUETAS.clave());
        clave.setRequired(true);
        aceptar = new IButton();
        aceptar.setTitle(VariablesGenerales.ETIQUETAS.ingresar());
        aceptar.setWidth(120);
        aceptar.setHeight(30);
//        aceptar.setTitleStyle("botones");
//        aceptar.setCursor(Cursor.HAND);
//        aceptar.setShowTitle(true);
//        aceptar.setSrc("botones/" + "0" + ".png");
        final CanvasItem canvasAceptar = new CanvasItem("", "");
        canvasAceptar.setCanvas(aceptar);
        setItems(texto, clave, canvasAceptar);
        aceptar.addClickHandler(new com.smartgwt.client.widgets.events.ClickHandler() {

            public void onClick(com.smartgwt.client.widgets.events.ClickEvent event) {
                if (validate()) {
                    ingresa();
                }
            }
        });
        clave.addKeyPressHandler(new KeyPressHandler() {

            public void onKeyPress(KeyPressEvent event) {
                if (event.getKeyName().toLowerCase().equals("enter")) {
                    if (validate()) {
                        ingresa();
                    }
                }
            }
        });
        animateShow(VariablesGenerales.EFECTO_POR_DEFECTO);
        texto.focusInItem();
    }

    public void ingresa() {
        final VentanaCargando vc = new VentanaCargando();
        vc.mostrar();
        InvocadorServicios.getServicio().validarCredenciales(true, new AsyncCallback<InformacionUsuario>() {

            @Override
            public void onFailure(Throwable caught) {
                vc.ocultar();
                SC.say(VariablesGenerales.ETIQUETAS.errorInesperado());
            }

            @Override
            public void onSuccess(InformacionUsuario result) 
            {
                vc.ocultar();
                if(result!=null)
                {
                    com.google.gwt.user.client.Window.Location.replace(com.google.gwt.user.client.Window.Location.getProtocol() + "//" + com.google.gwt.user.client.Window.Location.getHost() + "/sigpue/index.html?locale=es");
                }
                else
                {
                    SC.say(VariablesGenerales.ETIQUETAS.credencialesInvalidas());
                }
            }
        });
   }

    public void enter() {
        if (validate()) {
            ingresa();
        }
    }
}
