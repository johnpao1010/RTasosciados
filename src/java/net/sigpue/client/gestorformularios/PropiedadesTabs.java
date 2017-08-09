/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package net.sigpue.client.gestorformularios;

import com.smartgwt.client.core.Function;
import com.smartgwt.client.data.Criteria;
import com.smartgwt.client.data.DSCallback;
import com.smartgwt.client.data.DSRequest;
import com.smartgwt.client.data.DSResponse;
import com.smartgwt.client.data.DataSource;
import com.smartgwt.client.data.Record;
import com.smartgwt.client.types.Alignment;
import com.smartgwt.client.types.AnimationAcceleration;
import com.smartgwt.client.types.Side;
import com.smartgwt.client.types.VerticalAlignment;
import com.smartgwt.client.widgets.IButton;
import com.smartgwt.client.widgets.Label;

import com.smartgwt.client.widgets.RichTextEditor;
import com.smartgwt.client.widgets.events.ClickEvent;
import com.smartgwt.client.widgets.events.ClickHandler;
import com.smartgwt.client.widgets.form.DynamicForm;
import com.smartgwt.client.widgets.form.fields.ComboBoxItem;
import com.smartgwt.client.widgets.form.fields.FormItem;
import com.smartgwt.client.widgets.form.fields.TextItem;
import com.smartgwt.client.widgets.layout.HLayout;
import com.smartgwt.client.widgets.layout.VLayout;
import com.smartgwt.client.widgets.tab.Tab;
import com.smartgwt.client.widgets.tab.TabSet;
import net.sigpue.client.VariablesGenerales;

/**
 * //
 *
 *
 * @author JDURAN
 */
public class PropiedadesTabs extends VLayout {

    Tab tab1;
    Tab tab2;
    DataSource ds;
    DataSource dsarbol;
    private int idformulario;
    private int idPadre;
    private DynamicForm formTab;
    private ArbolEstructuraFomulario arbol;
    private Label titulo;
    private Record idtab;
    private IButton Editar = new IButton();
    private IButton guardar = new IButton();
    public PropiedadesTabs(int idformulario, int idPadre, ArbolEstructuraFomulario arbol) {

        this.arbol = arbol;
        this.idformulario = idformulario;
        this.idPadre = idPadre;
        initonModuleLoad(true);
    }

    public PropiedadesTabs(Record idtab) {

        this.idtab = idtab;
        initonModuleLoad(false);
    }

    private void initonModuleLoad(final Boolean isnew) {

        final TabSet tabSetSeccion = new TabSet();
        tab1 = new Tab(VariablesGenerales.ETIQUETAS.propiedadestab());
        final HLayout index = new HLayout();
        index.setWidth100();
        index.setHeight100();
        index.setAlign(Alignment.CENTER);

        titulo = new Label();
        titulo.setAlign(com.smartgwt.client.types.Alignment.CENTER);
//        titulo.setContents("<h1><b><p style='color:#780000;'>Registro de una nueva pestaña</p></b></h1>");
        titulo.setContents(VariablesGenerales.ETIQUETAS.titulo1());
        titulo.setStyleName("opcionesMenu");
        titulo.setMargin(20);
        titulo.setHeight(5);


//       
        String[] DS = {
            "estado", "tab", "formulario"
        };

//        DataSource.load(DS, new Function()
//        {
//
//            public void execute()
//            {

//     FORM2 tab
        ds = DataSource.get("tab");
        dsarbol = DataSource.get("estructuraarbol");

        formTab = new DynamicForm();
        formTab.setMargin(10);
        formTab.setDataSource(ds);
        if (isnew) {

            formTab.editNewRecord();
            
        } else {
            formTab.setDisabled(true);
            ds.fetchData(new Criteria("id_tab", String.valueOf(idtab.getAttribute("codigofk"))), new DSCallback() {
                @Override
                public void execute(DSResponse response, Object rawData, DSRequest request) {
                    if (response.getData().length > 0) {
                        formTab.editRecord(response.getData()[0]);
                    } else {
                        formTab.setDisabled(true);
                     
                    }

                }
            });

        }

        FormItem NombreTab = new TextItem("nombre", VariablesGenerales.ETIQUETAS.nombre());

        ComboBoxItem formulario = new ComboBoxItem("id_formulario", VariablesGenerales.ETIQUETAS.formulario());
        formulario.setOptionDataSource(DataSource.get("formulario"));
        formulario.setDisplayField("nombre_formulario");
        formulario.setValueField("id_formulario");
        formulario.setDisabled(true);

        ComboBoxItem Estado = new ComboBoxItem("id_estado", VariablesGenerales.ETIQUETAS.estado());
        Estado.setOptionDataSource(DataSource.get("estado"));
        Estado.setDisplayField("nombre_estado");
        Estado.setValueField("id_estado");

        formTab.setFields(NombreTab, formulario, Estado);

        
        Editar.setTitle(VariablesGenerales.ETIQUETAS.editButton());
        Editar.addClickHandler(new ClickHandler() {
            @Override
            public void onClick(ClickEvent event) {
                formTab.enable();
            }
        });
        guardar.setTitle(VariablesGenerales.ETIQUETAS.saveButton());
        guardar.setDisabled(false);
        guardar.addClickHandler(new ClickHandler() {
            public void onClick(ClickEvent event) {
                formTab.saveData(new DSCallback() {
                    public void execute(DSResponse response, Object rawData, DSRequest request) {
                        if (isnew) {
                            Record recordtree = new Record();

                            recordtree.setAttribute("nombre", response.getData()[0].getAttribute("nombre"));
                            recordtree.setAttribute("padre", idPadre);
                            recordtree.setAttribute("tipos", "T");
                            recordtree.setAttribute("codigofk", response.getData()[0].getAttributeAsInt("id_tab"));
                            recordtree.setAttribute("id_formulario", idformulario);
                            recordtree.setAttribute("id_estado", "1");

                            dsarbol.addData(recordtree, new DSCallback() {
                                public void execute(DSResponse response, Object rawData, DSRequest request) {
                                    arbol.treefilter();
                                }
                            });
                        } else {
                            Record recordtree = new Record();

                            recordtree.setAttribute("id_estructura", idtab.getAttribute("id_estructura"));
                            recordtree.setAttribute("nombre", formTab.getValue("nombre"));
                            recordtree.setAttribute("id_estado", response.getData()[0].getAttribute("id_estado"));


                            dsarbol.updateData(recordtree, new DSCallback() {
                                public void execute(DSResponse response, Object rawData, DSRequest request) {
                                    arbol.treefilter();
                                }
                            });

                        }
                        tabSetSeccion.destroy();
                    }
                });

            }
        });

        VLayout formTabLayout = new VLayout();
        formTabLayout.setLayoutAlign(com.smartgwt.client.types.Alignment.CENTER);
        formTabLayout.setHeight(200);
        formTabLayout.setWidth(280);
        formTabLayout.setPadding(20);
        formTabLayout.setMargin(10);

        formTabLayout.addMember(formTab);

        HLayout botonesLayoutseccion = new HLayout();
        botonesLayoutseccion.setLayoutAlign(com.smartgwt.client.types.Alignment.CENTER);
        botonesLayoutseccion.setHeight(65);
        botonesLayoutseccion.setAutoWidth();
        botonesLayoutseccion.setMargin(20);
        botonesLayoutseccion.setMembersMargin(10);
        botonesLayoutseccion.addMember(guardar);
        botonesLayoutseccion.addMember(Editar);

        formTabLayout.addMember(botonesLayoutseccion);


        tabSetSeccion.setTabBarPosition(Side.TOP);
        tabSetSeccion.setMargin(20);
        tabSetSeccion.setWidth(400);
        tabSetSeccion.setHeight(300);


        tabSetSeccion.addTab(tab1);


        tab1.setPane(formTabLayout);


        index.addMember(tabSetSeccion);
        addMember(titulo);
        addMember(index);

    }

    public DynamicForm getFormTab() {
        return formTab;
    }

    public void setFormTab(DynamicForm formTab) {
        this.formTab = formTab;
    }
}
