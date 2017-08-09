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
import com.smartgwt.client.types.TitleOrientation;
import com.smartgwt.client.widgets.IButton;
import com.smartgwt.client.widgets.Label;
import com.smartgwt.client.widgets.events.ClickEvent;
import com.smartgwt.client.widgets.events.ClickHandler;
import com.smartgwt.client.widgets.form.DynamicForm;
import com.smartgwt.client.widgets.form.FormItemInputTransformer;
import com.smartgwt.client.widgets.form.FormItemValueFormatter;
import com.smartgwt.client.widgets.form.FormItemValueParser;
import com.smartgwt.client.widgets.form.fields.CheckboxItem;
import com.smartgwt.client.widgets.form.fields.ComboBoxItem;
import com.smartgwt.client.widgets.form.fields.FormItem;
import com.smartgwt.client.widgets.form.fields.SpinnerItem;
import com.smartgwt.client.widgets.form.fields.TextItem;
import com.smartgwt.client.widgets.form.fields.events.ChangeEvent;
import com.smartgwt.client.widgets.form.fields.events.ChangeHandler;
import com.smartgwt.client.widgets.layout.HLayout;
import com.smartgwt.client.widgets.layout.VLayout;
import com.smartgwt.client.widgets.tab.Tab;
import com.smartgwt.client.widgets.tab.TabSet;
import java.util.HashMap;
import java.util.Map;
import net.sigpue.client.VariablesGenerales;

/**
 *
 * @author JDURAN
 */
public class PropiedadesComponente {

    private Tab tab1;
    private TabSet tabSetSeccion;
    private VLayout index;
    private DataSource ds;
    private DataSource componentetree;
    private int idPadre;
    private int idformulario;
    private IButton Guardar;
    private IButton Editar;
    private DynamicForm form1;
    private DynamicForm form2;
    private DynamicForm form3;
    private DynamicForm form4;
    private DynamicForm form5;
    private DynamicForm form6;
    private DynamicForm form7;
    private DynamicForm form8;
    private DynamicForm form9;
    private DynamicForm form10;
    private DynamicForm form11;
    private String selecionComponente;
    ArbolEstructuraFomulario arbolpregunta;
    private int idSeccion;
//    private int idtipocontrol;
    private Label titulo6;

    public PropiedadesComponente(int idformulario, int idPadre, int idSeccion) {
        this.idSeccion = idSeccion;
//        this.idtipocontrol=idtipocontrol;
        this.idformulario = idformulario;
        this.idPadre = idPadre;
        initonModuleLoad();
    }

    public PropiedadesComponente() {
        initonModuleLoad();
    }

    private void initonModuleLoad() {

        titulo6 = new Label();
        titulo6.setAlign(com.smartgwt.client.types.Alignment.CENTER);
        titulo6.setContents(VariablesGenerales.ETIQUETAS.titulo6());
        titulo6.setStyleName("opcionesMenu");
        titulo6.setMargin(20);
        titulo6.setHeight(5);

        
        
        ds = DataSource.get("pregunta");
        componentetree = DataSource.get("estructuraarbol");

        tab1 = new Tab(VariablesGenerales.ETIQUETAS.proppregunta());
        index = new VLayout();
        index.setWidth100();
        index.setHeight100();

        Record record4 = new Record();
        record4.setAttribute("id_pregunta", "");

        Guardar = new IButton();
        Guardar.setTitle(VariablesGenerales.ETIQUETAS.saveButton());
        Guardar.setAlign(Alignment.CENTER);

        Editar=new IButton();
        Editar.setTitle(VariablesGenerales.ETIQUETAS.editButton());
        Editar.setAlign(Alignment.CENTER);

        tabSetSeccion = new TabSet();
        tabSetSeccion.setTabBarPosition(Side.TOP);
        tabSetSeccion.setMargin(20);
        tabSetSeccion.setWidth(650);
        tabSetSeccion.setHeight(430);

    }

    public void editform(final Record editrecord) {
        ds.fetchData(new Criteria("id_pregunta", String.valueOf(editrecord.getAttribute("codigofk"))), new DSCallback() {
            @Override
            public void execute(DSResponse response, Object rawData, DSRequest request) {
                if (response.getData().length > 0) {
                    if (editrecord.getAttribute("tipos").equals("CS")) {
                        form1.editRecord(response.getData()[0]);
                    }

                    if (editrecord.getAttribute("tipos").equals("LD")) {
                        form2.editRecord(response.getData()[0]);
                    }

                    if (editrecord.getAttribute("tipos").equals("F")) {
                        form3.editRecord(response.getData()[0]);
                    }
                    if (editrecord.getAttribute("tipos").equals("EN")) {
                        form4.editRecord(response.getData()[0]);
                    }

                    if (editrecord.getAttribute("tipos").equals("SE")) {
                        form5.editRecord(response.getData()[0]);
                    }

                    if (editrecord.getAttribute("tipos").equals("ED")) {
                        form6.editRecord(response.getData()[0]);
                    }
                    if (editrecord.getAttribute("tipos").equals("R")) {
                        form7.editRecord(response.getData()[0]);
                    }
                    if (editrecord.getAttribute("tipos").equals("AT")) {
                        form8.editRecord(response.getData()[0]);
                    }
                    if (editrecord.getAttribute("tipos").equals("CT")) {
                        form9.editRecord(response.getData()[0]);
                    }
                    if (editrecord.getAttribute("tipos").equals("EB")) {
                        form10.editRecord(response.getData()[0]);
                    }
                    if (editrecord.getAttribute("tipos").equals("B")) {
                        form11.editRecord(response.getData()[0]);
                    }

                }
            }
        });
    }

    public VLayout pintarCheckboxItem(final Record editrecord) {

        HashMap<String, Integer> seccion = new HashMap<String, Integer>();
        form1 = new DynamicForm();
        form1.setPadding(20);
        form1.setIsGroup(true);
        form1.setGroupTitle(VariablesGenerales.ETIQUETAS.regcajaseleccion());
        form1.setNumCols(4);
        form1.setDataSource(ds);


        FormItem NombrePregunta = new TextItem("nombre", VariablesGenerales.ETIQUETAS.nombre());

//        FormItem Pregunta = new TextItem("nombre_pregunta", VariablesGenerales.ETIQUETAS.pregunta());

//        CheckboxItem SeleccionCheck = new CheckboxItem("Lab2058C11", VariablesGenerales.ETIQUETAS.selectioncheck());
//        SeleccionCheck.setTitleOrientation(TitleOrientation.LEFT);
//        SeleccionCheck.setLabelAsTitle(true);

//
//        SpinnerItem colspan = new SpinnerItem("colspan", VariablesGenerales.ETIQUETAS.numerocolumcombinar());
//        colspan.setMax(10);
//        colspan.setMin(2);

        ComboBoxItem Seccion = new ComboBoxItem("id_seccion", VariablesGenerales.ETIQUETAS.sección());
        Seccion.setOptionDataSource(DataSource.get("seccion"));
        Seccion.setDisplayField("nombre_seccion");
        Seccion.setValueField("id_seccion");
        Seccion.setDisabled(true);

        ComboBoxItem Tipocontrol = new ComboBoxItem("id_tipocontrol", VariablesGenerales.ETIQUETAS.tipocontrol());
        Tipocontrol.setOptionDataSource(DataSource.get("tipo_control"));
        Tipocontrol.setDisplayField("nombre_tipocontrol");
        Tipocontrol.setValueField("id_tipocontrol");

        ComboBoxItem Estado = new ComboBoxItem("id_estado", VariablesGenerales.ETIQUETAS.estado());
        Estado.setOptionDataSource(DataSource.get("estado"));
        Estado.setDisplayField("nombre_estado");
        Estado.setValueField("id_estado");

        form1.setFields(NombrePregunta, Seccion, Tipocontrol, Estado);

        selecionComponente = "CS";

        Guardar.addClickHandler(new ClickHandler() {
            public void onClick(ClickEvent event) {
                saveForm(form1, editrecord);
            }
        });
        
        Editar.addClickHandler(new ClickHandler() {

            @Override
            public void onClick(ClickEvent event) {
                form1.enable();
            }
        });

        HLayout botonesLayoutcomponente = new HLayout();
        botonesLayoutcomponente.setLayoutAlign(com.smartgwt.client.types.Alignment.CENTER);
        botonesLayoutcomponente.setAutoHeight();
        botonesLayoutcomponente.setAutoWidth();
        botonesLayoutcomponente.setMembersMargin(10);
        botonesLayoutcomponente.setMargin(20);
        botonesLayoutcomponente.addMember(Guardar);
        botonesLayoutcomponente.addMember(Editar);


        VLayout formCheckLayout = new VLayout();
        formCheckLayout.setLayoutAlign(com.smartgwt.client.types.Alignment.CENTER);
        formCheckLayout.setHeight(300);
        formCheckLayout.setWidth(290);
        formCheckLayout.setMargin(20);
//                formCheckLayout.setShowEdges(Boolean.TRUE);
        formCheckLayout.addMember(form1);
        formCheckLayout.addMember(botonesLayoutcomponente);

        tab1.setPane(formCheckLayout);
        tabSetSeccion.addTab(tab1);
        index.addMember(titulo6);
        index.addMember(tabSetSeccion);

        if (editrecord != null) {
            editform(editrecord);
            form1.setDisabled(true);
        } else {
            seccion.put("id_seccion", idSeccion);
            form1.editNewRecord(seccion);
        }
        return index;

    }

    public VLayout pintarComboBoxItem(final Record editrecord) {
        HashMap seccion = new HashMap();
        form2 = new DynamicForm();
        form2.setPadding(20);
        form2.setIsGroup(true);
        form2.setGroupTitle(VariablesGenerales.ETIQUETAS.reglistadesplegable());
        form2.setNumCols(4);
        form2.setDataSource(ds);
        seccion.put("id_seccion", idPadre);
        form2.editNewRecord(seccion);

        FormItem NombrePregunta = new TextItem("nombre", VariablesGenerales.ETIQUETAS.nombre());

//        FormItem Pregunta = new TextItem("nombre_pregunta", VariablesGenerales.ETIQUETAS.pregunta());

//        CheckboxItem Requerido = new CheckboxItem("requerido", VariablesGenerales.ETIQUETAS.requerido());
//        Requerido.setTitleOrientation(TitleOrientation.LEFT);
//        Requerido.setLabelAsTitle(true);

//
//        SpinnerItem colspan = new SpinnerItem("colspan", VariablesGenerales.ETIQUETAS.numerocolumcombinar());
//        colspan.setMax(10);
//        colspan.setMin(2);

        ComboBoxItem TipoDominio = new ComboBoxItem("idtipodominio", VariablesGenerales.ETIQUETAS.tipoDominio());
        TipoDominio.setOptionDataSource(DataSource.get("tipodominio"));
        TipoDominio.setDisplayField("nombre_tipodominio");
        TipoDominio.setValueField("idtipodominio");

        ComboBoxItem Seccion = new ComboBoxItem("id_seccion", VariablesGenerales.ETIQUETAS.sección());
        Seccion.setOptionDataSource(DataSource.get("seccion"));
        Seccion.setDisplayField("nombre_seccion");
        Seccion.setValueField("id_seccion");
        Seccion.setDisabled(true);

        ComboBoxItem Tipocontrol = new ComboBoxItem("id_tipocontrol", VariablesGenerales.ETIQUETAS.tipocontrol());
        Tipocontrol.setOptionDataSource(DataSource.get("tipo_control"));
        Tipocontrol.setDisplayField("nombre_tipocontrol");
        Tipocontrol.setValueField("id_tipocontrol");

        ComboBoxItem Estado = new ComboBoxItem("id_estado", VariablesGenerales.ETIQUETAS.estado());
        Estado.setOptionDataSource(DataSource.get("estado"));
        Estado.setDisplayField("nombre_estado");
        Estado.setValueField("id_estado");

        form2.setFields(NombrePregunta, TipoDominio, Seccion, Tipocontrol, Estado);

        selecionComponente = "LD";

        Guardar.addClickHandler(new ClickHandler() {
            public void onClick(ClickEvent event) {
                saveForm(form2, editrecord);


            }
        });

         Editar.addClickHandler(new ClickHandler() {

            @Override
            public void onClick(ClickEvent event) {
                form2.enable();
            }
        });

        HLayout botonesLayoutcomponente = new HLayout();
        botonesLayoutcomponente.setLayoutAlign(com.smartgwt.client.types.Alignment.CENTER);
        botonesLayoutcomponente.setAutoHeight();
        botonesLayoutcomponente.setAutoWidth();
        botonesLayoutcomponente.setMembersMargin(10);
        botonesLayoutcomponente.setMargin(20);
        botonesLayoutcomponente.addMember(Guardar);
        botonesLayoutcomponente.addMember(Editar);

        VLayout formComboLayout = new VLayout();
        formComboLayout.setLayoutAlign(com.smartgwt.client.types.Alignment.CENTER);
        formComboLayout.setHeight(250);
        formComboLayout.setWidth(290);
        formComboLayout.setMargin(20);
//                formComboLayout.setShowEdges(Boolean.TRUE);
        formComboLayout.addMember(form2);
        formComboLayout.addMember(botonesLayoutcomponente);

        tab1.setPane(formComboLayout);
        tabSetSeccion.addTab(tab1);
        index.addMember(titulo6);
        index.addMember(tabSetSeccion);

        if (editrecord != null) {
            editform(editrecord);
            form2.setDisabled(true);
        } else {
            seccion.put("id_seccion", idSeccion);
            form2.editNewRecord(seccion);
        }
        return index;

    }

    public VLayout pintarDateItem(final Record editrecord) {
        HashMap seccion = new HashMap();

        form3 = new DynamicForm();
        form3.setPadding(20);
        form3.setIsGroup(true);
        form3.setGroupTitle(VariablesGenerales.ETIQUETAS.regFecha());
//              form3.setNumCols(4);
        form3.setDataSource(ds);


        FormItem NombrePregunta = new TextItem("nombre", VariablesGenerales.ETIQUETAS.nombre());

//        FormItem Pregunta = new TextItem("nombre_pregunta", VariablesGenerales.ETIQUETAS.pregunta());

//        CheckboxItem Requerido = new CheckboxItem("requerido", VariablesGenerales.ETIQUETAS.requerido());
//        Requerido.setTitleOrientation(TitleOrientation.LEFT);
//        Requerido.setLabelAsTitle(true);
//
//
//        SpinnerItem colspan = new SpinnerItem("colspan", VariablesGenerales.ETIQUETAS.numerocolumcombinar());
//        colspan.setMax(10);
//        colspan.setMin(2);

        ComboBoxItem Seccion = new ComboBoxItem("id_seccion", VariablesGenerales.ETIQUETAS.sección());
        Seccion.setOptionDataSource(DataSource.get("seccion"));
        Seccion.setDisplayField("nombre_seccion");
        Seccion.setValueField("id_seccion");
        Seccion.setDisabled(true);

        ComboBoxItem Tipocontrol = new ComboBoxItem("id_tipocontrol", VariablesGenerales.ETIQUETAS.tipocontrol());
        Tipocontrol.setOptionDataSource(DataSource.get("tipo_control"));
        Tipocontrol.setDisplayField("nombre_tipocontrol");
        Tipocontrol.setValueField("id_tipocontrol");

        ComboBoxItem Estado = new ComboBoxItem("id_estado", VariablesGenerales.ETIQUETAS.estado());
        Estado.setOptionDataSource(DataSource.get("estado"));
        Estado.setDisplayField("nombre_estado");
        Estado.setValueField("id_estado");


        form3.setFields(NombrePregunta, Seccion, Tipocontrol, Estado);
        selecionComponente = "F";

        Guardar.addClickHandler(new ClickHandler() {
            public void onClick(ClickEvent event) {
                saveForm(form3, editrecord);

            }
        });
 Editar.addClickHandler(new ClickHandler() {

            @Override
            public void onClick(ClickEvent event) {
                form3.enable();
            }
        });

        HLayout botonesLayoutcomponente = new HLayout();
        botonesLayoutcomponente.setLayoutAlign(com.smartgwt.client.types.Alignment.CENTER);
        botonesLayoutcomponente.setAutoHeight();
        botonesLayoutcomponente.setAutoWidth();
        botonesLayoutcomponente.setMembersMargin(10);
        botonesLayoutcomponente.setMargin(20);
        botonesLayoutcomponente.addMember(Guardar);
        botonesLayoutcomponente.addMember(Editar);
        
        VLayout formDateLayout = new VLayout();
        formDateLayout.setLayoutAlign(com.smartgwt.client.types.Alignment.CENTER);
        formDateLayout.setHeight(150);
        formDateLayout.setWidth(290);
        formDateLayout.setMargin(20);
//                formDateLayout.setShowEdges(Boolean.TRUE);
        formDateLayout.addMember(form3);
        formDateLayout.addMember(botonesLayoutcomponente);

        tab1.setPane(formDateLayout);
        tabSetSeccion.addTab(tab1);
        index.addMember(titulo6);
        index.addMember(tabSetSeccion);

        if (editrecord != null) {
            editform(editrecord);
            form3.setDisabled(true);
        } else {
            seccion.put("id_seccion", idSeccion);
            form3.editNewRecord(seccion);
        }
        return index;


    }

    public VLayout pintarIntegerItem(final Record editrecord) {
        HashMap seccion = new HashMap();
        form4 = new DynamicForm();
        form4.setPadding(20);
        form4.setIsGroup(true);
        form4.setGroupTitle(VariablesGenerales.ETIQUETAS.regentero());
//              form4.setNumCols(4);
        form4.setDataSource(ds);


        FormItem NombrePregunta = new TextItem("nombre", VariablesGenerales.ETIQUETAS.nombre());

//        FormItem Pregunta = new TextItem("nombre_pregunta", VariablesGenerales.ETIQUETAS.pregunta());
//
//        CheckboxItem Requerido = new CheckboxItem("requerido", VariablesGenerales.ETIQUETAS.requerido());
//        Requerido.setTitleOrientation(TitleOrientation.LEFT);
//        Requerido.setLabelAsTitle(true);
//
//
//        SpinnerItem colspan = new SpinnerItem("colspan", VariablesGenerales.ETIQUETAS.numerocolumcombinar());
//        colspan.setMax(10);
//        colspan.setMin(2);

        ComboBoxItem Seccion = new ComboBoxItem("id_seccion", VariablesGenerales.ETIQUETAS.sección());
        Seccion.setOptionDataSource(DataSource.get("seccion"));
        Seccion.setDisplayField("nombre_seccion");
        Seccion.setValueField("id_seccion");
        Seccion.setDisabled(true);


        ComboBoxItem Tipocontrol = new ComboBoxItem("id_tipocontrol", VariablesGenerales.ETIQUETAS.tipocontrol());
        Tipocontrol.setOptionDataSource(DataSource.get("tipo_control"));
        Tipocontrol.setDisplayField("nombre_tipocontrol");
        Tipocontrol.setValueField("id_tipocontrol");

        ComboBoxItem Estado = new ComboBoxItem("id_estado", VariablesGenerales.ETIQUETAS.estado());
        Estado.setOptionDataSource(DataSource.get("estado"));
        Estado.setDisplayField("nombre_estado");
        Estado.setValueField("id_estado");

        form4.setFields(NombrePregunta, Seccion, Tipocontrol, Estado);
        selecionComponente = "EN";

        Guardar.addClickHandler(new ClickHandler() {
            public void onClick(ClickEvent event) {
                saveForm(form4, editrecord);

            }
        });
        
        
 Editar.addClickHandler(new ClickHandler() {

            @Override
            public void onClick(ClickEvent event) {
                form4.enable();
            }
        });

        HLayout botonesLayoutcomponente = new HLayout();
        botonesLayoutcomponente.setLayoutAlign(com.smartgwt.client.types.Alignment.CENTER);
        botonesLayoutcomponente.setAutoHeight();
        botonesLayoutcomponente.setAutoWidth();
        botonesLayoutcomponente.setMembersMargin(10);
        botonesLayoutcomponente.setMargin(20);
        botonesLayoutcomponente.addMember(Guardar);
        botonesLayoutcomponente.addMember(Editar);

        VLayout formIntegerLayout = new VLayout();
        formIntegerLayout.setLayoutAlign(com.smartgwt.client.types.Alignment.CENTER);
        formIntegerLayout.setHeight(150);
        formIntegerLayout.setWidth(290);
        formIntegerLayout.setMargin(20);
//                formIntegerLayout.setShowEdges(Boolean.TRUE);
        formIntegerLayout.addMember(form4);
        formIntegerLayout.addMember(botonesLayoutcomponente);

        tab1.setPane(formIntegerLayout);
        tabSetSeccion.addTab(tab1);
        index.addMember(titulo6);
        index.addMember(tabSetSeccion);
        if (editrecord != null) {
            editform(editrecord);
            form4.setDisabled(true);
        } else {
            seccion.put("id_seccion", idSeccion);
            form4.editNewRecord(seccion);
        }
        return index;

    }

    public VLayout pintarRadioGroupItem(final Record editrecord) {
        HashMap seccion = new HashMap();
        form5 = new DynamicForm();
        form5.setPadding(20);
        form5.setIsGroup(true);
        form5.setGroupTitle(VariablesGenerales.ETIQUETAS.regseleccionexclusiva());
        form5.setNumCols(4);
        form5.setDataSource(ds);


        FormItem NombrePregunta = new TextItem("nombre", VariablesGenerales.ETIQUETAS.nombre());

//        FormItem Pregunta = new TextItem("nombre_pregunta", VariablesGenerales.ETIQUETAS.pregunta());
//
//        CheckboxItem Requerido = new CheckboxItem("requerido", VariablesGenerales.ETIQUETAS.requerido());
//        Requerido.setTitleOrientation(TitleOrientation.LEFT);
//        Requerido.setLabelAsTitle(true);
//
//
//        SpinnerItem colspan = new SpinnerItem("colspan", VariablesGenerales.ETIQUETAS.numerocolumcombinar());
//        colspan.setMax(10);
//        colspan.setMin(2);

        ComboBoxItem TipoDominio = new ComboBoxItem("id_tipodominio", VariablesGenerales.ETIQUETAS.tipoDominio());
        TipoDominio.setOptionDataSource(DataSource.get("Lab2003"));
        TipoDominio.setDisplayField("Lab2003C02");
        TipoDominio.setValueField("id_tipodominio");

        ComboBoxItem Seccion = new ComboBoxItem("id_seccion", VariablesGenerales.ETIQUETAS.sección());
        Seccion.setOptionDataSource(DataSource.get("seccion"));
        Seccion.setDisplayField("nombre_seccion");
        Seccion.setValueField("id_seccion");
        Seccion.setDisabled(true);


        ComboBoxItem Tipocontrol = new ComboBoxItem("id_tipocontrol", VariablesGenerales.ETIQUETAS.tipocontrol());
        Tipocontrol.setOptionDataSource(DataSource.get("tipo_control"));
        Tipocontrol.setDisplayField("nombre_tipocontrol");
        Tipocontrol.setValueField("id_tipocontrol");

        ComboBoxItem Estado = new ComboBoxItem("id_estado", VariablesGenerales.ETIQUETAS.estado());
        Estado.setOptionDataSource(DataSource.get("estado"));
        Estado.setDisplayField("nombre_estado");
        Estado.setValueField("id_estado");

        form5.setFields(NombrePregunta, TipoDominio, Seccion, Tipocontrol, Estado);
        selecionComponente = "SE";

        Guardar.addClickHandler(new ClickHandler() {
            public void onClick(ClickEvent event) {
                saveForm(form5, editrecord);

            }
        });
         Editar.addClickHandler(new ClickHandler() {

            @Override
            public void onClick(ClickEvent event) {
                form5.enable();
            }
        });

        HLayout botonesLayoutcomponente = new HLayout();
        botonesLayoutcomponente.setLayoutAlign(com.smartgwt.client.types.Alignment.CENTER);
        botonesLayoutcomponente.setAutoHeight();
        botonesLayoutcomponente.setAutoWidth();
        botonesLayoutcomponente.setMembersMargin(10);
        botonesLayoutcomponente.setMargin(20);
        botonesLayoutcomponente.addMember(Guardar);
        botonesLayoutcomponente.addMember(Editar);
        

        VLayout formRadioLayout = new VLayout();
        formRadioLayout.setLayoutAlign(com.smartgwt.client.types.Alignment.CENTER);
        formRadioLayout.setHeight(150);
        formRadioLayout.setWidth(290);
        formRadioLayout.setMargin(20);
//                formRadioLayout.setShowEdges(Boolean.TRUE);
        formRadioLayout.addMember(form5);
        formRadioLayout.addMember(botonesLayoutcomponente);


        tab1.setPane(formRadioLayout);
        tabSetSeccion.addTab(tab1);
        index.addMember(titulo6);
        index.addMember(tabSetSeccion);
        if (editrecord != null) {
            editform(editrecord);
            form5.setDisabled(true);
        } else {
            seccion.put("id_seccion", idSeccion);
            form5.editNewRecord(seccion);
        }
        return index;

    }

    public VLayout pintarRichTextItem(final Record editrecord) {
        HashMap seccion = new HashMap();
        form6 = new DynamicForm();
        form6.setPadding(20);
        form6.setIsGroup(true);
        form6.setGroupTitle(VariablesGenerales.ETIQUETAS.regeditor());
        form6.setNumCols(4);
        form6.setDataSource(ds);


        FormItem NombrePregunta = new TextItem("nombre", VariablesGenerales.ETIQUETAS.nombre());

//        FormItem Pregunta = new TextItem("nombre_pregunta", VariablesGenerales.ETIQUETAS.pregunta());
//
//        SpinnerItem colspan = new SpinnerItem("colspan", VariablesGenerales.ETIQUETAS.numerocolumcombinar());
//        colspan.setMax(10);
//        colspan.setMin(2);

        ComboBoxItem Seccion = new ComboBoxItem("id_seccion", VariablesGenerales.ETIQUETAS.sección());
        Seccion.setOptionDataSource(DataSource.get("seccion"));
        Seccion.setDisplayField("nombre_seccion");
        Seccion.setValueField("id_seccion");
        Seccion.setDisabled(true);

        ComboBoxItem Tipocontrol = new ComboBoxItem("id_tipocontrol", VariablesGenerales.ETIQUETAS.tipocontrol());
        Tipocontrol.setOptionDataSource(DataSource.get("tipo_control"));
        Tipocontrol.setDisplayField("nombre_tipocontrol");
        Tipocontrol.setValueField("id_tipocontrol");

        ComboBoxItem Estado = new ComboBoxItem("id_estado", VariablesGenerales.ETIQUETAS.estado());
        Estado.setOptionDataSource(DataSource.get("estado"));
        Estado.setDisplayField("nombre_estado");
        Estado.setValueField("id_estado");

        form6.setFields(NombrePregunta, Seccion, Tipocontrol, Estado);
        selecionComponente = "ED";

        Guardar.addClickHandler(new ClickHandler() {
            public void onClick(ClickEvent event) {
                saveForm(form6, editrecord);

            }
        });

         Editar.addClickHandler(new ClickHandler() {

            @Override
            public void onClick(ClickEvent event) {
                form6.enable();
            }
        });

        HLayout botonesLayoutcomponente = new HLayout();
        botonesLayoutcomponente.setLayoutAlign(com.smartgwt.client.types.Alignment.CENTER);
        botonesLayoutcomponente.setAutoHeight();
        botonesLayoutcomponente.setAutoWidth();
        botonesLayoutcomponente.setMembersMargin(10);
        botonesLayoutcomponente.setMargin(20);
        botonesLayoutcomponente.addMember(Guardar);
        botonesLayoutcomponente.addMember(Editar);
        

        VLayout formRichLayout = new VLayout();
        formRichLayout.setLayoutAlign(com.smartgwt.client.types.Alignment.CENTER);
        formRichLayout.setHeight(150);
        formRichLayout.setWidth(290);
        formRichLayout.setMargin(20);
//                formRichLayout.setShowEdges(Boolean.TRUE);
        formRichLayout.addMember(form6);
        formRichLayout.addMember(botonesLayoutcomponente);


        tab1.setPane(formRichLayout);
        tabSetSeccion.addTab(tab1);
        index.addMember(titulo6);
        index.addMember(tabSetSeccion);
        if (editrecord != null) {
            editform(editrecord);
            form6.setDisabled(true);
        } else {
            seccion.put("id_seccion", idSeccion);
            form6.editNewRecord(seccion);
        }
        return index;

    }

    public VLayout pintarSpinnertItem(final Record editrecord) {
        HashMap seccion = new HashMap();
        form7 = new DynamicForm();
        form7.setIsGroup(true);
        form7.setGroupTitle(VariablesGenerales.ETIQUETAS.regrango());
        form7.setNumCols(4);
        form7.setPadding(20);
        form7.setDataSource(ds);


        FormItem NombrePregunta = new TextItem("nombre", VariablesGenerales.ETIQUETAS.nombre());

//        FormItem Pregunta = new TextItem("nombre_pregunta", VariablesGenerales.ETIQUETAS.pregunta());
//
//        CheckboxItem Requerido = new CheckboxItem("requerido", VariablesGenerales.ETIQUETAS.requerido());
//        Requerido.setTitleOrientation(TitleOrientation.LEFT);
//        Requerido.setLabelAsTitle(true);
//
//
//        FormItem ValorMaxSpiner = new TextItem("valor_max_spinner", VariablesGenerales.ETIQUETAS.valormaxspinner());
//
//        FormItem ValorMinSpiner = new TextItem("valor_min_spinner", VariablesGenerales.ETIQUETAS.valorminspinner());
//
//        FormItem ValorDefectoSpiner = new TextItem("valor_defec_spinner", VariablesGenerales.ETIQUETAS.valordefspinner());
//
//        SpinnerItem colspan = new SpinnerItem("colspan", VariablesGenerales.ETIQUETAS.numerocolumcombinar());
//        colspan.setMax(10);
//        colspan.setMin(2);

        ComboBoxItem Seccion = new ComboBoxItem("id_seccion", VariablesGenerales.ETIQUETAS.sección());
        Seccion.setOptionDataSource(DataSource.get("seccion"));
        Seccion.setDisplayField("nombre_seccion");
        Seccion.setValueField("id_seccion");
        Seccion.setDisabled(true);

        ComboBoxItem Tipocontrol = new ComboBoxItem("id_tipocontrol", VariablesGenerales.ETIQUETAS.tipocontrol());
        Tipocontrol.setOptionDataSource(DataSource.get("tipo_control"));
        Tipocontrol.setDisplayField("nombre_tipocontrol");
        Tipocontrol.setValueField("id_tipocontrol");

        ComboBoxItem Estado = new ComboBoxItem("id_estado", VariablesGenerales.ETIQUETAS.estado());
        Estado.setOptionDataSource(DataSource.get("estado"));
        Estado.setDisplayField("nombre_estado");
        Estado.setValueField("id_estado");

        form7.setFields(NombrePregunta, Seccion, Tipocontrol, Estado);
        selecionComponente = "R";
        Guardar.addClickHandler(new ClickHandler() {
            public void onClick(ClickEvent event) {
                saveForm(form7, editrecord);
            }
        });

         Editar.addClickHandler(new ClickHandler() {

            @Override
            public void onClick(ClickEvent event) {
                form7.enable();
            }
        });

        HLayout botonesLayoutcomponente = new HLayout();
        botonesLayoutcomponente.setLayoutAlign(com.smartgwt.client.types.Alignment.CENTER);
        botonesLayoutcomponente.setAutoHeight();
        botonesLayoutcomponente.setAutoWidth();
        botonesLayoutcomponente.setMembersMargin(10);
        botonesLayoutcomponente.setMargin(20);
        botonesLayoutcomponente.addMember(Guardar);
        botonesLayoutcomponente.addMember(Editar);

        VLayout formSpinnerLayout = new VLayout();
        formSpinnerLayout.setLayoutAlign(com.smartgwt.client.types.Alignment.CENTER);
        formSpinnerLayout.setHeight(150);
        formSpinnerLayout.setWidth(290);
        formSpinnerLayout.setMargin(20);
//                formSpinnerLayout.setShowEdges(Boolean.TRUE);
        formSpinnerLayout.addMember(form7);
        formSpinnerLayout.addMember(botonesLayoutcomponente);


        tab1.setPane(formSpinnerLayout);
        tabSetSeccion.addTab(tab1);
        index.addMember(titulo6);
        index.addMember(tabSetSeccion);
        if (editrecord != null) {
            editform(editrecord);
            form7.setDisabled(true);
        } else {
            seccion.put("id_seccion", idSeccion);
            form7.editNewRecord(seccion);
        }
        return index;

    }

    public VLayout pintarTextAreaItem(final Record editrecord) {
        HashMap seccion = new HashMap();
        form8 = new DynamicForm();
        form8.setPadding(20);
        form8.setIsGroup(true);
        form8.setGroupTitle(VariablesGenerales.ETIQUETAS.regareatexto());
        form8.setNumCols(4);
        form8.setDataSource(ds);


        FormItem NombrePregunta = new TextItem("nombre", VariablesGenerales.ETIQUETAS.nombre());

//        FormItem Pregunta = new TextItem("nombre_pregunta", VariablesGenerales.ETIQUETAS.pregunta());
//
//        CheckboxItem Requerido = new CheckboxItem("requerido", VariablesGenerales.ETIQUETAS.requerido());
//        Requerido.setTitleOrientation(TitleOrientation.LEFT);
//        Requerido.setLabelAsTitle(true);
//
//
//        FormItem Hint = new TextItem("hint", VariablesGenerales.ETIQUETAS.hint());
//
//        SpinnerItem colspan = new SpinnerItem("colspan", VariablesGenerales.ETIQUETAS.numerocolumcombinar());
//        colspan.setMax(10);
//        colspan.setMin(2);

        ComboBoxItem Seccion = new ComboBoxItem("id_seccion", VariablesGenerales.ETIQUETAS.sección());
        Seccion.setOptionDataSource(DataSource.get("seccion"));
        Seccion.setDisplayField("nombre_seccion");
        Seccion.setValueField("id_seccion");
        Seccion.setDisabled(true);

        ComboBoxItem Tipocontrol = new ComboBoxItem("id_tipocontrol", VariablesGenerales.ETIQUETAS.tipocontrol());
        Tipocontrol.setOptionDataSource(DataSource.get("tipo_control"));
        Tipocontrol.setDisplayField("nombre_tipocontrol");
        Tipocontrol.setValueField("id_tipocontrol");

        ComboBoxItem Estado = new ComboBoxItem("id_estado", VariablesGenerales.ETIQUETAS.estado());
        Estado.setOptionDataSource(DataSource.get("estado"));
        Estado.setDisplayField("nombre_estado");
        Estado.setValueField("id_estado");

        form8.setFields(NombrePregunta, Seccion, Tipocontrol, Estado);
        selecionComponente = "AT";
        Guardar.addClickHandler(new ClickHandler() {
            public void onClick(ClickEvent event) {
                saveForm(form8, editrecord);
            }
        });

         Editar.addClickHandler(new ClickHandler() {

            @Override
            public void onClick(ClickEvent event) {
                form8.enable();
            }
        });

        HLayout botonesLayoutcomponente = new HLayout();
        botonesLayoutcomponente.setLayoutAlign(com.smartgwt.client.types.Alignment.CENTER);
        botonesLayoutcomponente.setAutoHeight();
        botonesLayoutcomponente.setAutoWidth();
        botonesLayoutcomponente.setMembersMargin(10);
        botonesLayoutcomponente.setMargin(20);
        botonesLayoutcomponente.addMember(Guardar);
        botonesLayoutcomponente.addMember(Editar);

        VLayout formTextAreaLayout = new VLayout();
        formTextAreaLayout.setLayoutAlign(com.smartgwt.client.types.Alignment.CENTER);
        formTextAreaLayout.setHeight(150);
        formTextAreaLayout.setWidth(290);
        formTextAreaLayout.setMargin(20);
//                formTextAreaLayout.setShowEdges(Boolean.TRUE);
        formTextAreaLayout.addMember(form8);
        formTextAreaLayout.addMember(botonesLayoutcomponente);

        tab1.setPane(formTextAreaLayout);
        tabSetSeccion.addTab(tab1);
        index.addMember(titulo6);
        index.addMember(tabSetSeccion);
        if (editrecord != null) {
            editform(editrecord);
            form8.setDisabled(true);
        } else {
            seccion.put("id_seccion", idSeccion);
            form8.editNewRecord(seccion);
        }
        return index;

    }

    public VLayout pintarTextItem(final Record editrecord) {
        HashMap seccion = new HashMap();
        form9 = new DynamicForm();
        form9.setPadding(20);
        form9.setIsGroup(true);
        form9.setGroupTitle(VariablesGenerales.ETIQUETAS.regcajadetexto());
        form9.setNumCols(4);
        form9.setDataSource(ds);


        FormItem NombrePregunta = new TextItem("nombre", VariablesGenerales.ETIQUETAS.nombre());

//        FormItem Pregunta = new TextItem("nombre_pregunta", VariablesGenerales.ETIQUETAS.pregunta());
//
//        CheckboxItem Requerido = new CheckboxItem("requerido", VariablesGenerales.ETIQUETAS.requerido());
//        Requerido.setTitleOrientation(TitleOrientation.LEFT);
//        Requerido.setLabelAsTitle(true);
//
//        FormItem Hint = new TextItem("hint", VariablesGenerales.ETIQUETAS.hint());
//
//        SpinnerItem colspan = new SpinnerItem("colspan", VariablesGenerales.ETIQUETAS.numerocolumcombinar());
//        colspan.setMax(10);
//        colspan.setMin(2);

        ComboBoxItem Seccion = new ComboBoxItem("id_seccion", VariablesGenerales.ETIQUETAS.sección());
        Seccion.setOptionDataSource(DataSource.get("seccion"));
        Seccion.setDisplayField("nombre_seccion");
        Seccion.setValueField("id_seccion");
        Seccion.setDisabled(true);

        ComboBoxItem Tipocontrol = new ComboBoxItem("id_tipocontrol", VariablesGenerales.ETIQUETAS.tipocontrol());
        Tipocontrol.setOptionDataSource(DataSource.get("tipo_control"));
        Tipocontrol.setDisplayField("nombre_tipocontrol");
        Tipocontrol.setValueField("id_tipocontrol");

        ComboBoxItem Estado = new ComboBoxItem("id_estado", VariablesGenerales.ETIQUETAS.estado());
        Estado.setOptionDataSource(DataSource.get("estado"));
        Estado.setDisplayField("nombre_estado");
        Estado.setValueField("id_estado");

        form9.setFields(NombrePregunta, Seccion, Tipocontrol, Estado);
        selecionComponente = "CT";
        Guardar.addClickHandler(new ClickHandler() {
            public void onClick(ClickEvent event) {
                saveForm(form9, editrecord);


            }
        });

        Editar.addClickHandler(new ClickHandler() {

            @Override
            public void onClick(ClickEvent event) {
                form9.enable();
            }
        });

        HLayout botonesLayoutcomponente = new HLayout();
        botonesLayoutcomponente.setLayoutAlign(com.smartgwt.client.types.Alignment.CENTER);
        botonesLayoutcomponente.setAutoHeight();
        botonesLayoutcomponente.setAutoWidth();
        botonesLayoutcomponente.setMembersMargin(10);
        botonesLayoutcomponente.setMargin(20);
        botonesLayoutcomponente.addMember(Guardar);
        botonesLayoutcomponente.addMember(Editar);

        VLayout formTextItemLayout = new VLayout();
        formTextItemLayout.setLayoutAlign(com.smartgwt.client.types.Alignment.CENTER);
        formTextItemLayout.setHeight(150);
        formTextItemLayout.setWidth(290);
        formTextItemLayout.setMargin(20);
//                formTextItemLayout.setShowEdges(Boolean.TRUE);
        formTextItemLayout.addMember(form9);
        formTextItemLayout.addMember(botonesLayoutcomponente);

        tab1.setPane(formTextItemLayout);
        tabSetSeccion.addTab(tab1);
        index.addMember(titulo6);
        index.addMember(tabSetSeccion);
        if (editrecord != null) {
            editform(editrecord);
            form9.setDisabled(true);
        } else {
            seccion.put("id_seccion", idSeccion);
            form9.editNewRecord(seccion);
        }
        return index;

    }

    public VLayout pintarSpacerItem(final Record editrecord) {

        HashMap seccion = new HashMap();

        form10 = new DynamicForm();
        form10.setPadding(20);
        form10.setIsGroup(true);
        form10.setGroupTitle(VariablesGenerales.ETIQUETAS.regespacioblanco());
        form10.setNumCols(4);
        form10.setDataSource(ds);

        FormItem NombrePregunta = new TextItem("nombre", VariablesGenerales.ETIQUETAS.nombre());

//        SpinnerItem colspan = new SpinnerItem("colspan", VariablesGenerales.ETIQUETAS.numerocolumcombinar());
//        colspan.setMax(10);
//        colspan.setMin(2);

        ComboBoxItem Seccion = new ComboBoxItem("id_seccion", VariablesGenerales.ETIQUETAS.sección());
        Seccion.setOptionDataSource(DataSource.get("seccion"));
        Seccion.setDisplayField("nombre_seccion");
        Seccion.setValueField("id_seccion");
        Seccion.setDisabled(true);

        ComboBoxItem Tipocontrol = new ComboBoxItem("id_tipocontrol", VariablesGenerales.ETIQUETAS.tipocontrol());
        Tipocontrol.setOptionDataSource(DataSource.get("tipo_control"));
        Tipocontrol.setDisplayField("nombre_tipocontrol");
        Tipocontrol.setValueField("id_tipocontrol");

        ComboBoxItem Estado = new ComboBoxItem("id_estado", VariablesGenerales.ETIQUETAS.estado());
        Estado.setOptionDataSource(DataSource.get("estado"));
        Estado.setDisplayField("nombre_estado");
        Estado.setValueField("id_estado");

        form10.setFields(NombrePregunta, Seccion, Tipocontrol, Estado);
        selecionComponente = "EB";
        Guardar.addClickHandler(new ClickHandler() {
            public void onClick(ClickEvent event) {
                saveForm(form10, editrecord);
            }
        });

        Editar.addClickHandler(new ClickHandler() {

            @Override
            public void onClick(ClickEvent event) {
                form10.enable();
            }
        });

        HLayout botonesLayoutcomponente = new HLayout();
        botonesLayoutcomponente.setLayoutAlign(com.smartgwt.client.types.Alignment.CENTER);
        botonesLayoutcomponente.setAutoHeight();
        botonesLayoutcomponente.setAutoWidth();
        botonesLayoutcomponente.setMargin(20);
        botonesLayoutcomponente.setMembersMargin(10);
        botonesLayoutcomponente.addMember(Guardar);
        botonesLayoutcomponente.addMember(Editar);
        
        VLayout formSpacerLayout = new VLayout();
        formSpacerLayout.setLayoutAlign(com.smartgwt.client.types.Alignment.CENTER);
        formSpacerLayout.setHeight(170);
        formSpacerLayout.setWidth(290);
        formSpacerLayout.setMargin(20);
//        formSpacerLayout.setShowEdges(Boolean.TRUE);
        formSpacerLayout.addMember(form10);
        formSpacerLayout.addMember(botonesLayoutcomponente);

        tab1.setPane(formSpacerLayout);
        tabSetSeccion.addTab(tab1);
        index.addMember(titulo6);
        index.addMember(tabSetSeccion);
        if (editrecord != null) {
            editform(editrecord);
            form10.setDisabled(true);
        } else {
            seccion.put("id_seccion", idSeccion);
            form10.editNewRecord(seccion);
        }
        return index;

    }

    public VLayout pintarIbuttonItem(final Record editrecord) {

        HashMap seccion = new HashMap();

        form11 = new DynamicForm();
        form11.setPadding(20);
        form11.setIsGroup(true);
        form11.setGroupTitle(VariablesGenerales.ETIQUETAS.regesIbutton());
        form11.setNumCols(2);
        form11.setDataSource(ds);
       
        FormItem NombrePregunta = new TextItem("nombre", VariablesGenerales.ETIQUETAS.nombre());

//        FormItem Titulo = new TextItem("nombre", VariablesGenerales.ETIQUETAS.título());

        ComboBoxItem Tipocontrol = new ComboBoxItem("id_tipocontrol", VariablesGenerales.ETIQUETAS.tipocontrol());
        Tipocontrol.setOptionDataSource(DataSource.get("tipo_control"));
        Tipocontrol.setDisplayField("nombre_tipocontrol");
        Tipocontrol.setValueField("id_tipocontrol");

        form11.setFields(NombrePregunta, Tipocontrol);
        selecionComponente = "B";
        Guardar.addClickHandler(new ClickHandler() {
            public void onClick(ClickEvent event) {
                saveForm(form11, editrecord);
            }
        });

       Editar.addClickHandler(new ClickHandler() {

            @Override
            public void onClick(ClickEvent event) {
                form11.enable();
            }
        });

        HLayout botonesLayoutcomponente = new HLayout();
        botonesLayoutcomponente.setLayoutAlign(com.smartgwt.client.types.Alignment.CENTER);
        botonesLayoutcomponente.setAutoHeight();
        botonesLayoutcomponente.setAutoWidth();
        botonesLayoutcomponente.setMembersMargin(10);
        botonesLayoutcomponente.setMargin(20);
        botonesLayoutcomponente.addMember(Guardar);
        botonesLayoutcomponente.addMember(Editar);
        
        VLayout formbuttonLayout = new VLayout();
        formbuttonLayout.setLayoutAlign(com.smartgwt.client.types.Alignment.CENTER);
        formbuttonLayout.setHeight(170);
        formbuttonLayout.setWidth(290);
        formbuttonLayout.setMargin(20);
//        formSpacerLayout.setShowEdges(Boolean.TRUE);
        formbuttonLayout.addMember(form11);
        formbuttonLayout.addMember(botonesLayoutcomponente);

        tab1.setPane(formbuttonLayout);
        tabSetSeccion.addTab(tab1);
        index.addMember(titulo6);
        index.addMember(tabSetSeccion);
        if (editrecord != null) {
            editform(editrecord);
            form11.setDisabled(true);
        } else {
            seccion.put("id_seccion", idSeccion);
            form11.editNewRecord(seccion);
        }
        return index;

    }

    private void saveForm(final DynamicForm form, final Record editrecord) {

        form.validate();
        Map map = form.getValues();
        for (FormItem item : form.getFields()) {
            if (item instanceof CheckboxItem) {
                map.put(item.getName(), item.getValue() == null ? 0 : Boolean.valueOf(item.getValue().toString()) ? 1 : 0);
            }
        }
        Record record = new Record(map);
        if (editrecord == null) {

            ds.addData(record, new DSCallback() {
                public void execute(DSResponse response, Object rawData, DSRequest request) {

                    Record recordtreeSeccion = new Record();

                    recordtreeSeccion.setAttribute("nombre", response.getData()[0].getAttribute("nombre"));
                    recordtreeSeccion.setAttribute("padre", idPadre);
                    recordtreeSeccion.setAttribute("tipos", selecionComponente);
                    recordtreeSeccion.setAttribute("codigofk", response.getData()[0].getAttributeAsInt("id_pregunta"));
                    recordtreeSeccion.setAttribute("id_formulario", idformulario);
                    recordtreeSeccion.setAttribute("id_estado", "1");
//                    recordtreeSeccion.setAttribute("requerido", response.getData()[0].getAttributeAsInt("requerido"));
//                    recordtreeSeccion.setAttribute("colspan", response.getData()[0].getAttributeAsInt("colspan"));
                    recordtreeSeccion.setAttribute("id_tipodominio", response.getData()[0].getAttributeAsInt("id_tipodominio"));

                    componentetree.addData(recordtreeSeccion);
                    arbolpregunta.treefilter();

                }
            });
        } else {


            ds.updateData(record, new DSCallback() {
                public void execute(DSResponse response, Object rawData, DSRequest request) {
                    Record record2 = new Record();

                    record2.setAttribute("id_estructura", editrecord.getAttribute("id_estructura"));
                    record2.setAttribute("nombre", response.getData()[0].getAttribute("nombre"));
                    record2.setAttribute("id_estado", response.getData()[0].getAttribute("id_estado"));
//                    record2.setAttribute("requerido", response.getData()[0].getAttributeAsInt("requerido"));
//                    record2.setAttribute("colspan", response.getData()[0].getAttributeAsInt("colspan"));
                    record2.setAttribute("id_tipodominio", response.getData()[0].getAttributeAsInt("id_tipodominio"));
                    componentetree.updateData(record2);
                    arbolpregunta.treefilter();

                   
                }
                
            }); 
           titulo6.destroy();
        }  tabSetSeccion.destroy();
    }
}
