/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package net.sigpue.client.gestorformularios;

import com.smartgwt.client.data.Criteria;
import com.smartgwt.client.data.DSCallback;
import com.smartgwt.client.data.DSRequest;
import com.smartgwt.client.data.DSResponse;
import com.smartgwt.client.data.DataSource;
import com.smartgwt.client.data.Record;
import com.smartgwt.client.types.Side;
import com.smartgwt.client.widgets.IButton;
import com.smartgwt.client.widgets.Label;
import com.smartgwt.client.widgets.form.DynamicForm;
import com.smartgwt.client.widgets.form.fields.FormItem;
import com.smartgwt.client.widgets.form.fields.TextItem;
import com.smartgwt.client.widgets.grid.ListGrid;
import com.smartgwt.client.widgets.grid.ListGridField;
import com.smartgwt.client.widgets.grid.events.EditCompleteEvent;
import com.smartgwt.client.widgets.grid.events.SelectionChangedHandler;
import com.smartgwt.client.widgets.grid.events.SelectionEvent;
import com.smartgwt.client.widgets.layout.HLayout;
import com.smartgwt.client.widgets.layout.VLayout;
import com.smartgwt.client.widgets.tab.Tab;
import com.smartgwt.client.widgets.tab.TabSet;
import com.smartgwt.client.widgets.form.fields.ComboBoxItem;
import com.smartgwt.client.widgets.form.fields.SelectItem;
import com.smartgwt.client.widgets.grid.events.EditCompleteHandler;
import java.util.HashMap;
import net.sigpue.client.interfaces.ArbolConnector;
import net.sigpue.client.interfaces.SeleccionComponenteConnector;
import net.sigpue.client.VariablesGenerales;

public class FormulariosCreadosVA extends HLayout implements ArbolConnector, SeleccionComponenteConnector {

    private Tab tab1;
    private Tab tab2;
    private ModuloFormularios modfor;
    private ListGrid grid;
    private IButton nuevafila;
    private VLayout navigationLayout;
    VLayout vLayoutindex;
    private VLayout centerLayout;
    IButton editar;
    IButton Guardar;
    TabSet tabSet;
    DynamicForm forms;
    private Label titulo;
     private Label titulo2;

    public VLayout getCenterLayout() {
        return centerLayout;
    }

    public void setCenterLayout(VLayout centerLayout) {
        this.centerLayout = centerLayout;
    }
    private DataSource ds;
    private DataSource dsarbol;
    private IButton vercampos;
    private ArbolEstructuraFomulario arbol;
    public FormulariosCreadosVA() {

        modfor = new ModuloFormularios();
        setWidth100();
        setHeight100();

        
        titulo=new Label();
        titulo.setAlign(com.smartgwt.client.types.Alignment.CENTER);
        titulo.setContents("<H1><center>"+VariablesGenerales.ETIQUETAS.titulo3()+"</center></H1>");
        titulo.setStyleName("sc-navigationbar");
        titulo.setMargin(20);
        titulo.setHeight(5);
        
        
        titulo2 = new Label();
        titulo2.setAlign(com.smartgwt.client.types.Alignment.CENTER);
        titulo2.setContents(VariablesGenerales.ETIQUETAS.titulo4());
        titulo2.setStyleName("opcionesMenu");
        titulo2.setMargin(10);
        titulo2.setHeight(5);
        
        
        
        tab1 = new Tab(VariablesGenerales.ETIQUETAS.general());
        tab2 = new Tab(VariablesGenerales.ETIQUETAS.roles());
        
        forms = new DynamicForm();

        navigationLayout = new VLayout();
        navigationLayout.setWidth("50%");
        navigationLayout.setShowEdges(Boolean.TRUE);

        vLayoutindex = new VLayout();
        vLayoutindex.setWidth("60%");


        centerLayout = new VLayout();
        centerLayout.setHeight("50%");
        centerLayout.setLayoutAlign(com.smartgwt.client.types.Alignment.CENTER);
        centerLayout.setShowEdges(Boolean.TRUE);

        vercampos = new IButton();
        vercampos.setTitle(VariablesGenerales.ETIQUETAS.vercampos());
        vercampos.setDisabled(true);

        ds = DataSource.get("formulario");
        dsarbol = DataSource.get("estructuraarbol");

        grid = new ListGrid();
        grid.setHeight100();
        grid.setWidth100();
        grid.setAutoFetchData(true);
        grid.setDataSource(ds);
        ListGridField NombreField = new ListGridField("nombre", VariablesGenerales.ETIQUETAS.nombre(), 170);
        
        ListGridField TipoField = new ListGridField("id_tipoformulario", VariablesGenerales.ETIQUETAS.tipoformulario(), 150);
        TipoField.setOptionDataSource(DataSource.get("tipo_formula"));
        TipoField.setDisplayField("nombre_tipoformulario");
        TipoField.setValueField("id_tipoformulario");
        TipoField.setRequired(true);
        
        ListGridField FechacreacionField = new ListGridField("fecha_creacion", VariablesGenerales.ETIQUETAS.fechacreación(), 110);
        FechacreacionField.setCanEdit(false);
        
        ListGridField EstadoField = new ListGridField("id_estado", VariablesGenerales.ETIQUETAS.estado(), 60);
        EstadoField.setOptionDataSource(DataSource.get("estado"));
        EstadoField.setDisplayField("nombre_estado");
        EstadoField.setValueField("id_estado");
        EstadoField.setRequired(true);

        
        grid.setFields(NombreField, TipoField, EstadoField, FechacreacionField);
        grid.addEditCompleteHandler(new EditCompleteHandler() {
            public void onEditComplete(EditCompleteEvent event) {
                if (event.getOldRecord() == null) {
                    Record recordformtree = new Record();
                    recordformtree.setAttribute("nombre", event.getNewValues().get("nombre"));
                    recordformtree.setAttribute("tipos", "FO");
                    recordformtree.setAttribute("id_formulario", event.getDsResponse().getData()[0].getAttribute("id_formulario"));
                    recordformtree.setAttribute("id_estado","1");
                    dsarbol.addData(recordformtree);
                    grid.setCanEdit(false);
                    nuevafila.enable();
                }
            }
        });
        grid.setShowFilterEditor(true);
        grid.setValidateOnChange(true);
        grid.addSelectionChangedHandler(new SelectionChangedHandler() {
            public void onSelectionChanged(SelectionEvent event) {
                if (event.getState()) {
                    vercampos.setDisabled(false);
                    tab2.setDisabled(false);
                    editar.setDisabled(false);
                    forms.editSelectedData(grid);
                    modfor.getAuxDragList().setValueMaster(event.getSelectedRecord().getAttribute("id_formulario"));
                    modfor.getAuxDragList().refreshRightRecords();
                }
            }
        });
        ds.fetchData(new Criteria(), new DSCallback() {
            public void execute(DSResponse response, Object rawData, DSRequest request) {
                response.getDataAsRecordList();
            }
        });

        final Record record = new Record();
        record.setAttribute("id_formulario", "");

        forms.setDataSource(ds);
        forms.setMargin(20);
        forms.setIsGroup(true);
        forms.setGroupTitle(VariablesGenerales.ETIQUETAS.formulario());
        forms.setNumCols(4);
        forms.disable();
        forms.editNewRecord();
        forms.setCellPadding(10);
        FormItem Nombre = new TextItem("nombre", VariablesGenerales.ETIQUETAS.nombre());

        TextItem Encabezado = new TextItem("encabezado", VariablesGenerales.ETIQUETAS.encabezado());

//        FormItem Titulo = new TextItem("titulo", VariablesGenerales.ETIQUETAS.título());

        ComboBoxItem Tipo_Formulario = new ComboBoxItem("id_tipoformulario", VariablesGenerales.ETIQUETAS.tipoformulario());
        Tipo_Formulario.setOptionDataSource(DataSource.get("tipo_formula"));
        Tipo_Formulario.setDisplayField("nombre_tipoformulario");
        Tipo_Formulario.setValueField("id_tipoformulario");

        ComboBoxItem Usuario = new ComboBoxItem("id_usuario", VariablesGenerales.ETIQUETAS.usuario());
        Usuario.setOptionDataSource(DataSource.get("usuario"));
        Usuario.setDisplayField("nombre_usuario");
        Usuario.setValueField("id_usuario");
        Usuario.setDisabled(false);

        ComboBoxItem Estado = new ComboBoxItem("id_estado", VariablesGenerales.ETIQUETAS.estado());
        Estado.setOptionDataSource(DataSource.get("estado"));
        Estado.setDisplayField("nombre_estado");
        Estado.setValueField("id_estado");

        forms.setFields(Nombre, Encabezado, Tipo_Formulario, Usuario, Estado);

        VLayout formLayout = new VLayout();
        formLayout.setLayoutAlign(com.smartgwt.client.types.Alignment.CENTER);
        formLayout.setHeight(380);
        formLayout.setWidth(280);
        formLayout.setMargin(20);
        formLayout.setPadding(20);

        formLayout.addMember(forms);

        editar = new IButton();
        editar.setTitle(VariablesGenerales.ETIQUETAS.editButton());
        editar.setDisabled(true);

        Guardar = new IButton();
        Guardar.setTitle(VariablesGenerales.ETIQUETAS.saveButton());
        Guardar.setDisabled(true);
        Guardar.addClickHandler(new com.smartgwt.client.widgets.events.ClickHandler() {
            public void onClick(com.smartgwt.client.widgets.events.ClickEvent event) {
                forms.saveData();
                forms.disable();
                Guardar.disable();
            }
        });

        nuevafila = new IButton();
        nuevafila.setTitle(VariablesGenerales.ETIQUETAS.nuevoformulario());
        nuevafila.setTop(70);
        nuevafila.setLeft(5);
        nuevafila.setWidth(100);

        nuevafila.addClickHandler(new com.smartgwt.client.widgets.events.ClickHandler() {
            @Override
            public void onClick(com.smartgwt.client.widgets.events.ClickEvent event) {
                grid.startEditingNew();
                nuevafila.disable();
            }
        });
        vercampos.addClickHandler(new com.smartgwt.client.widgets.events.ClickHandler() {
            @Override
            public void onClick(com.smartgwt.client.widgets.events.ClickEvent event) {
                verCamposClickEvent();
            }
        });

        editar.addClickHandler(new com.smartgwt.client.widgets.events.ClickHandler() {
            @Override
            public void onClick(com.smartgwt.client.widgets.events.ClickEvent event) {
                forms.enable();
                Guardar.setDisabled(false);
            }
        });

        HLayout botonesLayout = new HLayout();
        botonesLayout.setLayoutAlign(com.smartgwt.client.types.Alignment.CENTER);
        botonesLayout.setAutoHeight();
        botonesLayout.setAutoWidth();
        botonesLayout.setMargin(10);
//                botonesLayout.addMember(formularios);
        botonesLayout.addMember(vercampos);
        botonesLayout.addMember(editar);
        botonesLayout.addMember(Guardar);
        botonesLayout.setMembersMargin(10);

        formLayout.addMember(botonesLayout);

        tabSet = new TabSet();
        tabSet.setTabBarPosition(Side.TOP);
        tabSet.setMargin(10);
        tabSet.setWidth(550);
        tabSet.setHeight(450);
        tabSet.addTab(tab1);
        tabSet.addTab(tab2);

        tab1.setPane(formLayout);
        tab2.setDisabled(true);
        tab2.setPane(modfor.CrearPanelRolForm());


        
        centerLayout.addMember(titulo2);
        centerLayout.addMember(tabSet);

        navigationLayout.addMember(titulo);
        navigationLayout.addMember(grid);
        navigationLayout.addMember(nuevafila);
        centerLayout.addMember(formLayout);
        vLayoutindex.addMember(centerLayout);
        addMember(navigationLayout);
        addMember(vLayoutindex);
    }

    public void verCamposClickEvent() {
        centerLayout.removeMembers(centerLayout.getMembers());
        arbol = new ArbolEstructuraFomulario(this, grid.getSelectedRecord().getAttributeAsInt("id_formulario"));
        vercampos.disable();
        grid.destroy();
        nuevafila.hide();
        arbol.onModuleLoad(navigationLayout);

    }

    public void formClick(int id_form, int padre) {
        centerLayout.removeMembers(centerLayout.getMembers());
        PropiedadesTabs tab = new PropiedadesTabs(id_form, padre, arbol);
        centerLayout.addMember(tab);

        HashMap m = new HashMap();
        m.put("id_formulario", id_form);
        tab.getFormTab().editNewRecord(m);

    }

    public void tabClick(int padre, int idformulario, int idtab) {
        centerLayout.removeMembers(centerLayout.getMembers());
        PropiedadesSeccion Seccion = new PropiedadesSeccion(padre, idformulario, idtab, arbol);
        centerLayout.addMember(Seccion);

        HashMap t = new HashMap();
        t.put("id_tab", idtab);
        Seccion.getFormseccion().editNewRecord(t);
    }

    public void seccionClick(int idseccion, int padre, int idformulario) {
        centerLayout.removeMembers(centerLayout.getMembers());
        SeleccionTipoComponente tipocomponente = new SeleccionTipoComponente(this, idformulario, padre, idseccion);
        centerLayout.addMember(tipocomponente);
    }

    public void componenteseleccionado(VLayout componente) {
        centerLayout.removeMembers(centerLayout.getMembers());
        centerLayout.addMember(componente);

    }

    @Override
    public void formedit(Record editrecord, String idtipoform) {

        if (idtipoform.equals("FO")) {
            centerLayout.removeMembers(centerLayout.getMembers());

        }   else if (idtipoform.equals("T")) {
            centerLayout.removeMembers(centerLayout.getMembers());
            PropiedadesTabs tab = new PropiedadesTabs(editrecord);
            centerLayout.addMember(tab);
        } else if (idtipoform.equals("S")) {
            centerLayout.removeMembers(centerLayout.getMembers());
            PropiedadesSeccion sec = new PropiedadesSeccion(editrecord);
            centerLayout.addMember(sec);
        } else if (idtipoform.equals("CS")) {
            centerLayout.removeMembers(centerLayout.getMembers());
            VLayout comp = new PropiedadesComponente().pintarCheckboxItem(editrecord);
            centerLayout.addMember(comp);
        } else if (idtipoform.equals("LD")) {
            centerLayout.removeMembers(centerLayout.getMembers());
            VLayout comp = new PropiedadesComponente().pintarComboBoxItem(editrecord);
            centerLayout.addMember(comp);
        } else if (idtipoform.equals("F")) {
            centerLayout.removeMembers(centerLayout.getMembers());
            VLayout comp = new PropiedadesComponente().pintarDateItem(editrecord);
            centerLayout.addMember(comp);
        }else if (idtipoform.equals("EN")) {
            centerLayout.removeMembers(centerLayout.getMembers());
            VLayout comp = new PropiedadesComponente().pintarIntegerItem(editrecord);
            centerLayout.addMember(comp);
        }else if (idtipoform.equals("SE")) {
            centerLayout.removeMembers(centerLayout.getMembers());
            VLayout comp = new PropiedadesComponente().pintarRadioGroupItem(editrecord);
            centerLayout.addMember(comp);
        }else if (idtipoform.equals("ED")) {
            centerLayout.removeMembers(centerLayout.getMembers());
            VLayout comp = new PropiedadesComponente().pintarRichTextItem(editrecord);
            centerLayout.addMember(comp);
        }else if (idtipoform.equals("R")) {
            centerLayout.removeMembers(centerLayout.getMembers());
            VLayout comp = new PropiedadesComponente().pintarSpinnertItem(editrecord);
            centerLayout.addMember(comp);
        }else if (idtipoform.equals("AT")) {
            centerLayout.removeMembers(centerLayout.getMembers());
            VLayout comp = new PropiedadesComponente().pintarTextAreaItem(editrecord);
            centerLayout.addMember(comp);
        }else if (idtipoform.equals("CT")) {
            centerLayout.removeMembers(centerLayout.getMembers());
            VLayout comp = new PropiedadesComponente().pintarTextItem(editrecord);
            centerLayout.addMember(comp);
        }else if (idtipoform.equals("EB")) {
            centerLayout.removeMembers(centerLayout.getMembers());
            VLayout comp = new PropiedadesComponente().pintarSpacerItem(editrecord);
            centerLayout.addMember(comp);
        }else if (idtipoform.equals("B")) {
            centerLayout.removeMembers(centerLayout.getMembers());
            VLayout comp = new PropiedadesComponente().pintarIbuttonItem(editrecord);
            centerLayout.addMember(comp);
        }
    }
}
