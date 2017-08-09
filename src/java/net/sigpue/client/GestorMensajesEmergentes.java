/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package net.sigpue.client;

import com.google.gwt.user.client.Timer;
import com.smartgwt.client.data.AdvancedCriteria;
import com.smartgwt.client.data.Criteria;
import com.smartgwt.client.data.DSCallback;
import com.smartgwt.client.data.DataSource;
import com.smartgwt.client.types.OperatorId;
import com.smartgwt.client.data.DSRequest;
import com.smartgwt.client.data.DSResponse;
import com.smartgwt.client.types.Cursor;
import com.smartgwt.client.types.Overflow;
import com.smartgwt.client.util.SC;
import com.smartgwt.client.widgets.Img;
import com.smartgwt.client.widgets.events.ClickEvent;
import com.smartgwt.client.widgets.events.ClickHandler;
import com.smartgwt.client.widgets.layout.VStack;

public class GestorMensajesEmergentes {

    private String CampoIdAlarma = "id_logalarma";
    private String CampoTextoAlarma = "texto_alarma";
    public int counter = 0;
    private VStack dynamicVstack;
    private String LogAlarma = "log_alarma";
    private String CampoIdUsuario = "id_usuarioemisor";
    private String CampoFechaDescarte = "fecha_descarte";
    private Img ocultar = new Img("close.png", 20, 20);
    private boolean visible = false;

    public GestorMensajesEmergentes(InformacionUsuario usuario, int left, int top, Encabezado encabezado) {
        ocultar.setTooltip(VariablesGenerales.ETIQUETAS.ocultar());
        ocultar.setCursor(Cursor.HAND);
        dynamicVstack = new VStack(1);
        dynamicVstack.setBorder("1px solid blue");
        dynamicVstack.setWidth(218);
        dynamicVstack.setLeft(left);
        dynamicVstack.setTop(top);
        dynamicVstack.setMembersMargin(2);
        dynamicVstack.setLayoutMargin(2);
        dynamicVstack.setOverflow(Overflow.AUTO);
//        threadAlert(usuario, encabezado);
        ocultar.addClickHandler(new ClickHandler() {
            @Override
            public void onClick(ClickEvent event) {
                dynamicVstack.setVisible(false);
                visible = false;
            }
        });
    }//END GestorMensajesEmergentes Constructor   

//    private void threadAlert(final InformacionUsuario usuario, final Encabezado encabezado) {
//        new Timer() {
//            @Override
//            public void run() {
//                DataSource dsLogAlarma = DataSource.get(LogAlarma);
//                AdvancedCriteria acLogAlarma = new AdvancedCriteria();
//                acLogAlarma.addCriteria(new Criteria(CampoIdUsuario, String.valueOf(usuario.getIdUsuario())));
//                acLogAlarma.addCriteria(new AdvancedCriteria(CampoFechaDescarte, OperatorId.IS_NULL));
//                dsLogAlarma.fetchData(acLogAlarma, new DSCallback() {
//                    @Override
//                    public void execute(DSResponse response, Object rawData, DSRequest request) {
////                        encabezado.setNumeroAlarmas(response.getDataAsRecordList().getLength());
//                    }//END execute
//                });//END DSCallback
//            }//END run           
//        }.scheduleRepeating(1000 * 30);//END Timer
//    }//END threadAlert    

    public void desplegarAlarmas(final InformacionUsuario usuario) {
        if (!visible) {
            visible = true;
            DataSource dsLogAlarma = DataSource.get(LogAlarma);
            AdvancedCriteria acLogAlarma = new AdvancedCriteria();
            acLogAlarma.addCriteria(new Criteria(CampoIdUsuario, String.valueOf(usuario.getIdUsuario())));
            acLogAlarma.addCriteria(new AdvancedCriteria(CampoFechaDescarte, OperatorId.IS_NULL));
            dsLogAlarma.fetchData(acLogAlarma, new DSCallback() {
                @Override
                public void execute(DSResponse response, Object rawData, DSRequest request) {
                    if (response.getDataAsRecordList().getLength() == 0) {
                        SC.say(VariablesGenerales.ETIQUETAS.noHayAlarmas());
                    } else {
                        dynamicVstack.removeMembers(dynamicVstack.getMembers());
                        dynamicVstack.addMember(ocultar);
                        for (int i = 0; i < response.getDataAsRecordList().getLength(); i++) {
                            dynamicVstack.addMember(new MensajesEmergentes(response.getDataAsRecordList().get(i).getAttributeAsInt(CampoIdAlarma), response.getDataAsRecordList().get(i).getAttribute(CampoTextoAlarma)));
                        }  //END FOR
                        if (response.getDataAsRecordList().getLength() > 3) {
                            dynamicVstack.setHeight(25 + 75 * 3);
                            dynamicVstack.setWidth(235);
                        } else {
                            dynamicVstack.setHeight(25 + 75 * response.getDataAsRecordList().getLength());
                        }
                        dynamicVstack.show();
                        dynamicVstack.setVisible(true);
                    }
                }//END execute
            });//END DSCallback
        }
    }
}//END class GestorMensajesEmergentes