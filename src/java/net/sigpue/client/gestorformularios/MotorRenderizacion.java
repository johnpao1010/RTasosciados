/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package net.sigpue.client.gestorformularios;

import com.google.gwt.user.client.rpc.AsyncCallback;
import com.smartgwt.client.data.Criteria;
import com.smartgwt.client.data.DSCallback;
import com.smartgwt.client.data.DSRequest;
import com.smartgwt.client.data.DSResponse;
import com.smartgwt.client.data.DataSource;
import com.smartgwt.client.data.Record;
import com.smartgwt.client.data.RecordList;
import com.smartgwt.client.types.Alignment;
import com.smartgwt.client.types.Overflow;
import com.smartgwt.client.types.Side;
import com.smartgwt.client.types.TitleOrientation;
import com.smartgwt.client.types.VisibilityMode;
import com.smartgwt.client.util.SC;
import com.smartgwt.client.widgets.IButton;
import com.smartgwt.client.widgets.Img;
import com.smartgwt.client.widgets.Window;
import com.smartgwt.client.widgets.form.DynamicForm;
import com.smartgwt.client.widgets.form.fields.ButtonItem;
import com.smartgwt.client.widgets.form.fields.CheckboxItem;
import com.smartgwt.client.widgets.form.fields.DateItem;
import com.smartgwt.client.widgets.form.fields.FormItem;
import com.smartgwt.client.widgets.form.fields.IntegerItem;
import com.smartgwt.client.widgets.form.fields.RadioGroupItem;
import com.smartgwt.client.widgets.form.fields.RichTextItem;
import com.smartgwt.client.widgets.form.fields.SelectItem;
import com.smartgwt.client.widgets.form.fields.SpacerItem;
import com.smartgwt.client.widgets.form.fields.SpinnerItem;
import com.smartgwt.client.widgets.form.fields.TextAreaItem;
import com.smartgwt.client.widgets.form.fields.TextItem;
import com.smartgwt.client.widgets.form.fields.events.ClickEvent;
import com.smartgwt.client.widgets.form.fields.events.ClickHandler;
import com.smartgwt.client.widgets.grid.ListGrid;
import com.smartgwt.client.widgets.layout.HLayout;
import com.smartgwt.client.widgets.layout.SectionStack;
import com.smartgwt.client.widgets.layout.SectionStackSection;
import com.smartgwt.client.widgets.layout.VLayout;
import com.smartgwt.client.widgets.tab.Tab;
import com.smartgwt.client.widgets.tab.TabSet;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.Map;
import net.sigpue.client.InvocadorServicios;
import net.sigpue.client.VariablesGenerales;
import net.sigpue.client.VentanaCargando;
import net.cltech.lib.client.controls.checkbox.CLCheckBoxItem;
import net.sigpue.client.EstructuraPrincipal;
import org.springframework.beans.factory.annotation.Required;

public class MotorRenderizacion extends VLayout {

    private Img banner;
    private DataSource dominios;
    private TabSet tabSetSeccion = new TabSet();
    private VLayout renderlayout;
    private DataSource arbol;
    private RecordList recorDominios;
    private DataSource valores;
    private DataSource ds;
    private int idFormularioDiligenciado;
    private int idformulario;
    // Todos los registros de lab2026
    private RecordList recordFormList;
    private DynamicForm forms;
    // Los registros de las tabs que pertencen al formulario actual
    private RecordList recordTabList;
    // Mapa de sesiones que pertenecen a los tab ej. <tab1, [sec1, sec2]>
    //                                               <tab5, [sec5, sec15]>
    private HashMap<Integer, RecordList> tabSecMap;
    // Lista de mapas de los formItems que pertenece a cada sesión ej.
    // ej. <[sec1, [foritem56, formitem52]], [sec5, [foritem23, formitem45]]>
    private ArrayList<HashMap<Integer, RecordList>> secMapList;
    private HashMap<Integer, RecordList> secFormItemMap;
    private ArrayList<DynamicForm> df;
    private ListGrid formatos = new ListGrid();
    VLayout central=new VLayout();

    public MotorRenderizacion(int idformulario) {
        this(idformulario, -1);
    }

    public MotorRenderizacion(final int idformulario, int idFormularioDiligenciado) {
        recordFormList = new RecordList();
        recordTabList = new RecordList();
        tabSecMap = new HashMap<Integer, RecordList>();
        secMapList = new ArrayList<HashMap<Integer, RecordList>>();
        df = new ArrayList<DynamicForm>();
        this.idformulario = idformulario;
        ds = DataSource.get("formulario");


        formatos.setDataSource(ds);
        formatos.setAutoFetchData(true);
        forms = new DynamicForm();
        forms.setMargin(20);
        forms.setNumCols(4);
        forms.disable();
        forms.editNewRecord();
        forms.setCellPadding(10);
        DataSource.get("formulario").fetchData(new Criteria("id_formulario", String.valueOf(idformulario)), new DSCallback() {
            @Override
            public void execute(DSResponse response, Object rawData, DSRequest request) {
                banner = new Img(response.getData()[0].getAttributeAsString("encabezado"));
                banner.setHeight(80);
                banner.setWidth100();
            }
        });
        this.idFormularioDiligenciado = idFormularioDiligenciado;
        renderizar();

    }

    public void renderizar() {

        renderlayout = new VLayout();
        renderlayout.setLayoutAlign(com.smartgwt.client.types.Alignment.CENTER);
        renderlayout.setHeight(180);
        renderlayout.setWidth(280);
        renderlayout.setPadding(20);
        renderlayout.setShowEdges(true);

        doLogic();
        tabSetSeccion.setWidth100();

    }

    public void cargarValores() {

        Criteria crit = new Criteria();
        crit.addCriteria("diligenciamiento", idFormularioDiligenciado);
        final VentanaCargando vc = new VentanaCargando();
        vc.mostrar();
        valores = DataSource.get("respuesta_formulario");

        valores.fetchData(crit, new DSCallback() {
            @Override
            public void execute(DSResponse response, Object rawData, DSRequest request) {
                for (int i = 0; i < response.getData().length; i++) {
                    for (DynamicForm formulario : df) {
                        formulario.setDisabled(true);
                        if (formulario.getField(response.getData()[i].getAttributeAsString("id_pregunta")) != null) {

                            String idItem = response.getData()[i].getAttributeAsString("id_pregunta");
                            if (formulario.getField(idItem) instanceof CheckboxItem) {
                                if (response.getData()[i].getAttributeAsString("valor").equals("1")) {
                                    formulario.getField(idItem).setValue(Boolean.TRUE);
                                } else {
                                    formulario.getField(idItem).setValue(Boolean.FALSE);
                                }
                                //  formulario.getField(idItem).setValue(false);
                            } else {
                                formulario.getField(idItem).setValue(response.getData()[i].getAttributeAsString("valor"));
                            }
                            break;
                        }

                        CheckboxItem cbi = new CheckboxItem();
                        cbi.setValue(isElementSet);
                    }
                }
                vc.ocultar();
            }
        });
    }

    private void doLogic() {

        arbol = DataSource.get("estructuraarbol");
        dominios = DataSource.get("dominio");
    

        dominios.fetchData(new Criteria(), new DSCallback() {
            public void execute(DSResponse response, Object rawData, DSRequest request) {

                recorDominios = response.getDataAsRecordList();
                
                arbol.fetchData(new Criteria("id_formulario", String.valueOf(idformulario)), new DSCallback() {
                    public void execute(DSResponse response, Object rawData, DSRequest request) {
                        recordFormList = response.getDataAsRecordList();

                        fillTabArray();

                        fillArray(recordTabList, tabSecMap);

                        Iterator it = tabSecMap.entrySet().iterator();

                        RecordList recorList;

                        while (it.hasNext()) {
                            secFormItemMap = new HashMap<Integer, RecordList>();
                            Map.Entry ent = (Map.Entry) it.next();
                            recorList = (RecordList) ent.getValue();
                            fillArray(recorList, secFormItemMap);
                            secMapList.add(secFormItemMap);
                        }

                        pintar();

                    }

                    public void fillTabArray() {

                        Record formRec;
                        for (int i = 0; i < recordFormList.getLength(); i++) {
                            formRec = recordFormList.get(i);
                            if (formRec.getAttribute("tipos").equals("T")) {
                                recordTabList.add(formRec);
                            }
                        }
                    }

                    public void fillArray(RecordList srcRecord, HashMap mapToSave) {
                        RecordList destRecord;
                        int currentKey;
                        for (Record src : srcRecord.toArray()) {
                            destRecord = new RecordList();
                            currentKey = src.getAttributeAsInt("id_estructura");
                            for (Record formRec : recordFormList.toArray()) {
                                if (src.getAttribute("id_estructura").equals(formRec.getAttribute("padre"))) {
                                    destRecord.add(formRec);
                                }
                            }
                            mapToSave.put(currentKey, destRecord);
                        }
                    }
                });
            }
        });
    }

    public void pintar() {

        final VentanaCargando vc = new VentanaCargando();
        vc.mostrar();

        DynamicForm dynamicForm = null;
        Record currentRecordTab;
        Tab currentTab;
        SectionStack currentSectionStack;
        RecordList currentArraySection;
        SectionStackSection currentSectionStackSection;
        RecordList currentFormItems;
        FormItem currentFormItem[];

        tabSetSeccion.setHeight100();
        tabSetSeccion.setOverflow(Overflow.VISIBLE);

        for (int i = 0; i < recordTabList.getLength(); i++) {
            currentRecordTab = recordTabList.get(i);
            currentTab = new Tab(currentRecordTab.getAttribute("nombre"));
            currentSectionStack = new SectionStack();
            currentSectionStack.setWidth100();

            currentArraySection = tabSecMap.get(currentRecordTab.getAttributeAsInt("id_estructura"));

            for (Record nombreDificil : currentArraySection.toArray()) {
                currentSectionStackSection = new SectionStackSection(nombreDificil.getAttributeAsString("nombre"));
                currentSectionStackSection.setExpanded(true);
                currentSectionStackSection.setCanCollapse(false);

                for (HashMap<Integer, RecordList> section : secMapList) {
                    Iterator it = section.entrySet().iterator();

                    while (it.hasNext()) {
                        Map.Entry ent = (Map.Entry) it.next();

                        int currentSectionStackSectionKey = nombreDificil.getAttributeAsInt("id_estructura");
                        if ((Integer) ent.getKey() == currentSectionStackSectionKey) {
                            currentFormItems = (RecordList) ent.getValue();

                            dynamicForm = new DynamicForm();
                            dynamicForm.setNumCols(4);
                            dynamicForm.setWidth100();
                            dynamicForm.setHeight100();
                            dynamicForm.editNewRecord();
//                          
                            currentFormItem = new FormItem[currentFormItems.getLength()];
                            for (int k = 0; k < currentFormItems.getLength(); k++) {

                                currentFormItem[k] = getFormItem(currentFormItems.get(k));

                            }
                            dynamicForm.setItems(currentFormItem);
                            df.add(dynamicForm);
                            currentSectionStackSection.addItem(dynamicForm);
                            break;
                        }
                    }
                }

                currentSectionStack.addSection(currentSectionStackSection);

            }
            if (i == 0) {
                currentSectionStack.setHeight100();
//                currentSectionStack.setHeight(1520);
            } else {
                currentSectionStack.setHeight100();
//                currentSectionStack.setHeight100();
            }
            currentSectionStack.setVisibilityMode(VisibilityMode.MULTIPLE);
            currentTab.setPane(currentSectionStack);
            tabSetSeccion.addTab(currentTab);

        }
        vc.ocultar();
        if (idFormularioDiligenciado != -1) {
            cargarValores();
        }
        
        
        
        central.setTitle(VariablesGenerales.ETIQUETAS.vistapreviaform());
        central.addMember(banner);
        central.addMember(tabSetSeccion);
        central.setWidth100();
        central.setHeight100();
        central.draw();
        EstructuraPrincipal.actualizaPantalla(central);
    }

    private FormItem getFormItem(Record recordFormItem) throws NullPointerException {
        FormItem item;
        String formItemId = recordFormItem.getAttribute("tipos");

        if (formItemId.equals("CS")) {
            item = new CLCheckBoxItem(recordFormItem.getAttribute("codigofk"),
                    recordFormItem.getAttribute("nombre"));
            ((CheckboxItem) item).setLabelAsTitle(true);
            ((CheckboxItem) item).setWrapTitle(false);
            ((CheckboxItem) item).setTitleOrientation(TitleOrientation.LEFT);
            ((CheckboxItem) item).setShowLabel(false);

        } else if (formItemId.equals("LD")) {

            item = new SelectItem(recordFormItem.getAttribute("codigofk"),
                    recordFormItem.getAttribute("nombre"));
            String itemId = recordFormItem.getAttribute("id_tipodominio");
            ((SelectItem) item).setTitleOrientation(TitleOrientation.LEFT);
            ((SelectItem) item).setWrapTitle(false);
            LinkedHashMap<String, String> values = new LinkedHashMap<String, String>();
            for (int i = 0; i < recorDominios.getLength(); i++) {
                if (recorDominios.get(i).getAttribute("id_tipodominio").equals(itemId)) {
                    values.put(String.valueOf(i), recorDominios.get(i).getAttribute("nombre_tipodominio"));

                }
            }
            item.setValueMap(values);

        } else if (formItemId.equals("F")) {
            item = new DateItem(recordFormItem.getAttribute("codigofk"),
                    recordFormItem.getAttribute("nombre"));
            ((DateItem) item).setTitleOrientation(TitleOrientation.LEFT);

        } else if (formItemId.equals("EN")) {
            item = new IntegerItem(recordFormItem.getAttribute("codigofk"),
                    recordFormItem.getAttribute("nombre"));

        } else if (formItemId.equals("SE")) {
            item = new RadioGroupItem(recordFormItem.getAttribute("codigofk"),
                    recordFormItem.getAttribute("nombre"));

            String itemId = recordFormItem.getAttribute("id_tipodominio");

            LinkedHashMap<String, String> values = new LinkedHashMap<String, String>();
            for (int i = 0; i < recorDominios.getLength(); i++) {
                if (recorDominios.get(i).getAttribute("id_tipodominio").equals(itemId)) {
                    values.put(String.valueOf(i), recorDominios.get(i).getAttribute("nombre_dominio"));
                }
            }
            ((RadioGroupItem) item).setVertical(false);
            ((RadioGroupItem) item).setValueMap(values);
            ((RadioGroupItem) item).setTitleOrientation(TitleOrientation.LEFT);


        } else if (formItemId.equals("ED")) {
            item = new RichTextItem(recordFormItem.getAttribute("codigofk"),
                    recordFormItem.getAttribute("nombre"));


        } else if (formItemId.equals("R")) {
            
            item = new SpinnerItem(recordFormItem.getAttribute("codigofk"),
                    recordFormItem.getAttribute("nombre"));
            
            ((SpinnerItem) item).setTitleOrientation(TitleOrientation.LEFT);
//            ((SpinnerItem) item).setMax(recordFormItem.getAttributeAsInt("Lab2026C08"));
//            ((SpinnerItem) item).setMin(recordFormItem.getAttributeAsInt("Lab2026C09"));

        } else if (formItemId.equals("AT")) {
            item = new TextAreaItem(recordFormItem.getAttribute("codigofk"),
                    recordFormItem.getAttribute("nombre"));
            ((TextAreaItem) item).setTitleOrientation(TitleOrientation.LEFT);
            ((TextAreaItem) item).setWrapTitle(false);
            item.setWidth(200);
            item.setHeight(100);


        } else if (formItemId.equals("CT")) {
            item = new TextItem(recordFormItem.getAttribute("codigofk"),
                    recordFormItem.getAttribute("nombre"));
            ((TextItem) item).setTitleOrientation(TitleOrientation.LEFT);
            ((TextItem) item).setWrapTitle(false);

        } else if (formItemId.equals("EB")) {
            item = new SpacerItem(recordFormItem.getAttribute("codigofk"));
        } else if (formItemId.equals("B")) {
            item = new ButtonItem(recordFormItem.getAttribute("codigofk"),
                    recordFormItem.getAttribute("nombre"));

            item.addClickHandler(new ClickHandler() {
                @Override
                public void onClick(ClickEvent event) {
//                    final VentanaCargando vc = new VentanaCargando();
//                    vc.mostrar();
                    final HashMap<String, String> valoresMap = new HashMap<String, String>();

                    for (int i = 0; i < df.size(); i++) {
                        int limite = df.get(i).getFields().length;
                        for (int j = 0; j < limite; j++) {
                            if (!(df.get(i).getFields()[j] instanceof ButtonItem)) {
                                if (df.get(i).getFields()[j] instanceof CheckboxItem) {
                                    try {
                                        if (df.get(i).getFields()[j].getValue() != null) {
                                            if ((Boolean) (df.get(i).getFields()[j].getValue())) {
                                                valoresMap.put(df.get(i).getFields()[j].getName(), "1");
                                            } else {
                                                valoresMap.put(df.get(i).getFields()[j].getName(), "0");
                                            }
                                        } else {
                                            valoresMap.put(df.get(i).getFields()[j].getName(), "0");
                                        }
//                                        valoresMap.put(df.get(i).getFields()[j].getName(), df.get(i).getFields()[j].getValue().toString());
                                    } catch (Exception e) {
                                        valoresMap.put(df.get(i).getFields()[j].getName(), "0");
                                    }
                                } else {
                                    System.out.println("i: " + i + " - j: " + j + "df.size()" + df.size() + "df.get(" + i + ").getFields().length" + df.get(i).getFields().length);
                                    System.out.println(df.get(i).getFields()[j].getName() + "," + df.get(i).getFields()[j].getValue().toString());
                                    valoresMap.put(df.get(i).getFields()[j].getName(), df.get(i).getFields()[j].getValue().toString());
                                }
                            }
                        }
                    }

                    InvocadorServicios.getServicio().insertaDiligenciamientoFormulario(2, idformulario, 1, new AsyncCallback<Integer>() {
                        @Override
                        public void onFailure(Throwable caught) {
//                            vc.ocultar();
                            SC.say(VariablesGenerales.ETIQUETAS.errorInesperado());
                        }

                        @Override
                        public void onSuccess(Integer result) {


                            InvocadorServicios.getServicio().insertaRespuestas(valoresMap, result, 2, new AsyncCallback<Boolean>() {
                                @Override
                                public void onFailure(Throwable caught) {
//                                    vc.ocultar();
                                    SC.say(VariablesGenerales.ETIQUETAS.errorInesperado());
                                }

                                @Override
                                public void onSuccess(Boolean result) {

                                    DataSource alarmas = DataSource.get("alarma");
                                    alarmas.fetchData(null, new DSCallback() {
                                        @Override
                                        public void execute(DSResponse response, Object rawData, DSRequest request) {

                                            for (int i = 0; i < response.getData().length; i++) {
                                                for (DynamicForm formulario : df) {
                                                    if (formulario.getField(response.getData()[i].getAttributeAsString("id_pregunta")) != null) {
                                                        if (formulario.getField(response.getData()[i].getAttributeAsString("id_pregunta")) instanceof CheckboxItem) {
                                                            if (formulario.getValueAsString(response.getData()[i].getAttributeAsString("id_pregunta")) != null) {
                                                                if (formulario.getValueAsString(response.getData()[i].getAttributeAsString("id_pregunta")).equals("true")) {
                                                                    if ("1".equals(response.getData()[i].getAttributeAsString("texto_alarma"))) {
                                                                        InvocadorServicios.getServicio().registroAlarmas(response.getData()[i].getAttributeAsString("id_tipoalarma"), response.getData()[i].getAttributeAsString("id_alarma"), response.getData()[i].getAttributeAsString("descripcion"), null);
//                                                                       com.google.gwt.user.client.Window.alert(response.getData()[i].getAttributeAsString("Lab2042C02"));
                                                                    }
                                                                } else {
                                                                    if ("0".equals(response.getData()[i].getAttributeAsString("texto_alarma"))) {
//                                                                       
                                                                        InvocadorServicios.getServicio().registroAlarmas(response.getData()[i].getAttributeAsString("id_tipoalarma"), response.getData()[i].getAttributeAsString("id_alarma"), response.getData()[i].getAttributeAsString("descripcion"), null);
                                                                    }
                                                                }
                                                            }
                                                        } else {
                                                            System.out.println("Que vaina es: "+formulario.getValueAsString(response.getData()[i].getAttributeAsString("id_pregunta"))+" - "+response.getData()[i].getAttributeAsString("texto_alarma"));
                                                            if (formulario.getValueAsString(response.getData()[i].getAttributeAsString("id_pregunta")).equals(response.getData()[i].getAttributeAsString("texto_alarma"))) {
                                                                InvocadorServicios.getServicio().registroAlarmas(response.getData()[i].getAttributeAsString("id_tipoalarma"), response.getData()[i].getAttributeAsString("id_alarma"), response.getData()[i].getAttributeAsString("descripcion"), null);
                                                            }

                                                        }
                                                        break;
                                                    }
                                                }
                                            }
                                        }
                                    });

//                                    vc.ocultar();

                                    SC.say(VariablesGenerales.ETIQUETAS.formularioAlmacenadoExitosamente());
                                }
                            });
                        }
                    });
                }
            });
        } else {
            throw new NullPointerException("Error, se ha encontrado un valor no soportado de form item se ha "
                    + "encontrado en la base de datos.");
        }

        return item;
    }
}
