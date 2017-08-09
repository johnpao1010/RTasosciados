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
import com.smartgwt.client.types.Side;
import com.smartgwt.client.widgets.IButton;
import com.smartgwt.client.widgets.Label;
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
 *
 * @author JDURAN
 */
public class PropiedadesSeccion extends VLayout {

    Tab tab1;
    Tab tab2;
    private DynamicForm formseccion;
    private int idPadre;
    private int idformulario;
//    private int idtab;
    DataSource dsarbol2;
    DataSource ds;
    private FormulariosCreadosVA formularios;
    private ArbolEstructuraFomulario arbol2;
    private Label titulo;
    private Record idseccion;

    public PropiedadesSeccion(int idPadre, int idformulario, int idtab, ArbolEstructuraFomulario arbol2) {
        this.idformulario = idformulario;
        this.arbol2 = arbol2;
//        this.idtab=idtab;
        this.idPadre = idPadre;
        initonModuleLoad(true);
    }

    public PropiedadesSeccion(Record idseccion) {

        this.idseccion = idseccion;
        initonModuleLoad(false);
    }

    private void initonModuleLoad(final Boolean isnew) {
        tab1 = new Tab(VariablesGenerales.ETIQUETAS.propiedadesseccion());
        final TabSet tabSetSeccion = new TabSet();
        final HLayout index = new HLayout();
        index.setWidth100();
        index.setHeight100();
        index.setAlign(Alignment.CENTER);

        titulo = new Label();
        titulo.setAlign(com.smartgwt.client.types.Alignment.CENTER);
//        titulo.setContents("<h1><b><p style='color:#780000;'>Registro de una nueva sección</p></b></h1>");
        titulo.setContents(VariablesGenerales.ETIQUETAS.titulo2());
        titulo.setStyleName("opcionesMenu");
        titulo.setMargin(20);
        titulo.setHeight(5);

        String[] DS = {
            "seccion", "estado", "tab"
        };

        ds = DataSource.get("seccion");
        dsarbol2 = DataSource.get("estructuraarbol");

        formseccion = new DynamicForm();
        formseccion.setDataSource(ds);
        formseccion.editNewRecord();
        if (isnew) {

            formseccion.editNewRecord();
        }else
        {
            formseccion.setDisabled(true);
            ds.fetchData(new Criteria("id_seccion", String.valueOf(idseccion.getAttribute("codigofk"))), new DSCallback() {
                @Override
                public void execute(DSResponse response, Object rawData, DSRequest request) {
                    if (response.getData().length > 0) {
                        formseccion.editRecord(response.getData()[0]);
                    } else {
                        formseccion.setDisabled(true);
                    }
                }
            });
        }

        FormItem Nombreseccion = new TextItem("nombre", VariablesGenerales.ETIQUETAS.nombre());

        ComboBoxItem Tab = new ComboBoxItem("id_tab", VariablesGenerales.ETIQUETAS.tab());
        Tab.setOptionDataSource(DataSource.get("tab"));
        Tab.setDisplayField("nombre");
        Tab.setValueField("id_tab");
        Tab.setDisabled(true);

        ComboBoxItem Estado = new ComboBoxItem("id_estado", VariablesGenerales.ETIQUETAS.estado());
        Estado.setOptionDataSource(DataSource.get("estado"));
        Estado.setDisplayField("nombre_estado");
        Estado.setValueField("id_estado");
        formseccion.setFields(Nombreseccion, Tab, Estado);

        final IButton Editar = new IButton();
        Editar.setTitle(VariablesGenerales.ETIQUETAS.editButton());
//        Editar.setDisabled(false);
        Editar.addClickHandler(new ClickHandler() {

            @Override
            public void onClick(ClickEvent event) {
                formseccion.enable();
            }
        });
        
        final IButton Guardar = new IButton();
        Guardar.setTitle(VariablesGenerales.ETIQUETAS.saveButton());
        Guardar.setDisabled(false);
        Guardar.addClickHandler(new ClickHandler() {
            public void onClick(ClickEvent event) {
                formseccion.saveData(new DSCallback() {
                    public void execute(DSResponse response, Object rawData, DSRequest request) {
                        if (isnew) {
                            Record recordtreeSeccion = new Record();

                            recordtreeSeccion.setAttribute("nombre", response.getData()[0].getAttribute("nombre"));
                            recordtreeSeccion.setAttribute("padre", idPadre);
                            recordtreeSeccion.setAttribute("tipos", "S");
                            recordtreeSeccion.setAttribute("codigofk", response.getData()[0].getAttributeAsInt("id_seccion"));
                            recordtreeSeccion.setAttribute("id_formulario", idformulario);
                            recordtreeSeccion.setAttribute("id_estado", "1");

                            dsarbol2.addData(recordtreeSeccion, new DSCallback() {
                                public void execute(DSResponse response, Object rawData, DSRequest request) {
                                    arbol2.treefilter();
                                }
                            });
                        } else {
                            Record recordtree = new Record();

                            recordtree.setAttribute("id_estructura", idseccion.getAttribute("id_estructura"));
                            recordtree.setAttribute("nombre", formseccion.getValue("nombre"));
                            recordtree.setAttribute("id_estado", response.getData()[0].getAttribute("id_estado"));


                            dsarbol2.updateData(recordtree, new DSCallback() {
                                public void execute(DSResponse response, Object rawData, DSRequest request) {
                                    arbol2.treefilter();
                                }
                            });

                        }
                        titulo.destroy();
                        tabSetSeccion.destroy();
                      
                    }
                });
            }
        });
        final VLayout formseccionLayout = new VLayout();
        formseccionLayout.setLayoutAlign(com.smartgwt.client.types.Alignment.CENTER);

        formseccionLayout.setHeight(180);
        formseccionLayout.setWidth(280);
        formseccionLayout.setPadding(20);
//                formseccionLayout.setShowEdges(true);

        formseccionLayout.addMember(formseccion);


        HLayout botonesLayoutseccion = new HLayout();
        botonesLayoutseccion.setLayoutAlign(com.smartgwt.client.types.Alignment.CENTER);
        botonesLayoutseccion.setAutoHeight();
        botonesLayoutseccion.setAutoWidth();
        botonesLayoutseccion.setMargin(20);
        botonesLayoutseccion.setMembersMargin(10);
        botonesLayoutseccion.addMember(Guardar);
        botonesLayoutseccion.addMember(Editar);


        formseccionLayout.addMember(botonesLayoutseccion);

        tabSetSeccion.setTabBarPosition(Side.TOP);
        tabSetSeccion.setMargin(20);
        tabSetSeccion.setWidth(400);
        tabSetSeccion.setHeight(300);

        tabSetSeccion.addTab(tab1);
//                tabSetSeccion.addTab(tab2);

        tab1.setPane(formseccionLayout);



        index.addMember(tabSetSeccion);
        addMember(titulo);
        addMember(index);
    }

    public DynamicForm getFormseccion() {
        return formseccion;
    }

    public void setFormseccion(DynamicForm formseccion) {
        this.formseccion = formseccion;
    }
}
