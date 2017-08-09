/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package net.sigpue.client.gestorinscripcionescursos;

import com.smartgwt.client.data.DataSource;
import com.smartgwt.client.types.Alignment;
import com.smartgwt.client.types.Side;
import com.smartgwt.client.types.VerticalAlignment;
import com.smartgwt.client.types.VisibilityMode;
import com.smartgwt.client.widgets.ImgButton;
import com.smartgwt.client.widgets.Label;
import com.smartgwt.client.widgets.events.ClickEvent;
import com.smartgwt.client.widgets.events.ClickHandler;
import com.smartgwt.client.widgets.form.DynamicForm;
import com.smartgwt.client.widgets.form.fields.DateItem;
import com.smartgwt.client.widgets.form.fields.SelectItem;
import com.smartgwt.client.widgets.form.fields.TextItem;
import com.smartgwt.client.widgets.grid.ListGrid;
import com.smartgwt.client.widgets.grid.ListGridField;
import com.smartgwt.client.widgets.grid.events.SelectionChangedHandler;
import com.smartgwt.client.widgets.grid.events.SelectionEvent;
import com.smartgwt.client.widgets.layout.HLayout;
import com.smartgwt.client.widgets.layout.HStack;
import com.smartgwt.client.widgets.layout.SectionStack;
import com.smartgwt.client.widgets.layout.SectionStackSection;
import com.smartgwt.client.widgets.layout.VLayout;
import com.smartgwt.client.widgets.layout.VStack;
import com.smartgwt.client.widgets.tab.Tab;
import com.smartgwt.client.widgets.tab.TabSet;
import net.sigpue.client.VariablesGenerales;

/**
 *
 * @author Administrador
 */
public class InscripcionesCursos extends HLayout
{

    HLayout formlayout = new HLayout();
    HLayout botones = new HLayout();
    VLayout formularios = new VLayout();
    public static VLayout principal = new VLayout();
    DynamicForm formulario = new DynamicForm();
    DynamicForm formularioInscripcion = new DynamicForm();
    Label titulogeneral = new Label();
    ImgButton guardar = new ImgButton();
    ImgButton siguiente = new ImgButton();
    ImgButton nuevo = new ImgButton();
    ImgButton editar = new ImgButton();
    VStack grillaStack = new VStack();
    ListGrid grillaInscripcion = new ListGrid();
    ListGrid grillaReportesDinamicos = new ListGrid();
    DataSource ds;
    DataSource ds2;
    DataSource ds3;
    public static int idFormatoconfig;
    private HStack hStackPpal;
    private SectionStack sectionStackTiposformularios;
    TabSet tabSet = new TabSet();
    Tab tab1;

    public InscripcionesCursos()
    {
        organizarVisualizacion();

    }

    public void organizarVisualizacion()
    {
        hStackPpal = new HStack();
        hStackPpal.setVisible(true);


        pintarform();
//        construirGrillaFormatosConfiguracion();


        sectionStackTiposformularios = new SectionStack();
        sectionStackTiposformularios.setVisibilityMode(VisibilityMode.MULTIPLE);
        sectionStackTiposformularios.setWidth("100%");

        SectionStackSection sectionFormularioDiligenciables = new SectionStackSection("<b>" + VariablesGenerales.ETIQUETAS.InscripcionRealizadas() + "</b>");
        sectionFormularioDiligenciables.setExpanded(true);
        sectionFormularioDiligenciables.setCanCollapse(false);
        sectionFormularioDiligenciables.addItem(construirGrillaFormatosConfiguracion());

        SectionStackSection sectionFormularioVisibles = new SectionStackSection("<b>" + VariablesGenerales.ETIQUETAS.inscripcionCursos() + "</b>");
        sectionFormularioVisibles.setExpanded(true);
        sectionFormularioVisibles.setCanCollapse(false);
        sectionFormularioVisibles.addItem(crearTabset());
        sectionFormularioVisibles.addItem(botones);

        sectionStackTiposformularios.addSection(sectionFormularioDiligenciables);
        sectionStackTiposformularios.addSection(sectionFormularioVisibles);

        hStackPpal.addMembers(sectionStackTiposformularios);

        principal.addMember(hStackPpal);
        addMember(principal);
    }

    public TabSet crearTabset()
    {
        

        tabSet = new TabSet();
        tabSet.setTabBarAlign(Side.LEFT);
        tabSet.setWidth("100%");
        tabSet.setHeight("100%");

//        Tab tab2 = new Tab(VariablesGenerales.ETIQUETAS.formulario());
        tab1 = new Tab(VariablesGenerales.ETIQUETAS.formulario());


//        tab1.setPane(formlayoutConfiguracion);
//        tab2.setPane(formulario);
//
        tab1.setPane(formularios);
        tabSet.setTabs(tab1);

        return tabSet;

        
    }

    private void pintarform()
    {

        titulogeneral = new Label();
        titulogeneral.setAlign(com.smartgwt.client.types.Alignment.CENTER);
        titulogeneral.setContents("<H1>" + VariablesGenerales.ETIQUETAS.inscripcionCursos() + "<H1>");
        titulogeneral.setStyleName("sc-navigationbar");
        titulogeneral.setMargin(5);
        titulogeneral.setHeight(5);
        principal.addMember(titulogeneral);

        construirFormConfiguracion();

    }

    public void construirFormConfiguracion()
    {

        ds3 = DataSource.get("usuarioxcurso");

        formularioInscripcion.setNumCols(4);
        formularioInscripcion.setIsGroup(true);
        formularioInscripcion.setMargin(5);
        formularioInscripcion.setDataSource(ds3);
        formularioInscripcion.editNewRecord();
        formularioInscripcion.setDisabled(true);
        formularioInscripcion.setCellPadding(5);

        final SelectItem curso = new SelectItem("id_curso", "Curso");
        curso.setOptionDataSource(DataSource.get("curso"));
        curso.setDisplayField("nombre");
        curso.setValueField("id_curso");
        curso.setWrapTitle(false);

        final SelectItem usuario = new SelectItem("id_usuario", "Usuario");
        usuario.setOptionDataSource(DataSource.get("usuario"));
        usuario.setDisplayField("nombre_usuario");
        usuario.setValueField("id_usuario");
        usuario.setWrapTitle(false);


        final DateItem fecha_inscripcion = new DateItem("fecha_inscripcion", "Fecha Inscripcion");
        fecha_inscripcion.setWrapTitle(false);
//       
        final TextItem horas_asistidas = new TextItem("horas_asistidas", "Horas Asistidas");
        horas_asistidas.setWrapTitle(false);
        horas_asistidas.setMask("###");

        SelectItem Estado = new SelectItem("id_estado", "Estado");
        Estado.setOptionDataSource(DataSource.get("estado"));
        Estado.setDisplayField("nombre_estado");
        Estado.setValueField("id_estado");


        formularioInscripcion.setFields(curso, usuario, fecha_inscripcion, horas_asistidas, Estado);


        formularios.setAutoHeight();
        formularios.setAutoWidth();
        formularios.setLayoutAlign(Alignment.CENTER);
        formularios.setMargin(5);
        formularios.addMember(formularioInscripcion);


        guardar = new ImgButton();
        guardar.setValign(VerticalAlignment.TOP);
        guardar.setAlign(Alignment.RIGHT);
        guardar.setHeight(24);
        guardar.setWidth(24);
        guardar.setVisible(false);
        guardar.setSrc("Save.png");
        guardar.setTooltip("Guardar y Continuar");
        guardar.addClickHandler(new ClickHandler()
        {
            @Override
            public void onClick(ClickEvent event)
            {
                formularioInscripcion.saveData();
            }
        });

        nuevo = new ImgButton();
        nuevo.setValign(VerticalAlignment.TOP);
        nuevo.setAlign(Alignment.RIGHT);
        nuevo.setHeight(24);
        nuevo.setWidth(24);
        nuevo.setSrc("Add.png");
        nuevo.setTooltip("Nuevo");
        nuevo.addClickHandler(new ClickHandler()
        {
            @Override
            public void onClick(ClickEvent event)
            {  
                formularioInscripcion.setDisabled(false);
                formularioInscripcion.editNewRecord();
                guardar.setVisible(true);
                editar.setVisible(false);
                nuevo.setVisible(false);
                
            }
                    
         });

        editar = new ImgButton();
        editar.setValign(VerticalAlignment.TOP);
        editar.setAlign(Alignment.RIGHT);
        editar.setHeight(24);
        editar.setWidth(24);
        editar.setSrc("Edit.png");
        editar.setTooltip("Editar");
        editar.addClickHandler(new ClickHandler()
        {
            @Override
            public void onClick(ClickEvent event)
            {

                formularioInscripcion.setDisabled(false);
            }
        });

        
        botones.setAutoHeight();
        botones.setAutoWidth();
        botones.setLayoutAlign(Alignment.CENTER);
        botones.setMembersMargin(10);
        botones.addMembers(nuevo, editar,guardar);


        principal.setHeight100();
        principal.setWidth100();
    }

    public ListGrid construirGrillaFormatosConfiguracion()
    {

        grillaInscripcion = new ListGrid();
        grillaInscripcion.setHeight("100%");
        grillaInscripcion.setWidth("100%");
        grillaInscripcion.setDataSource(ds3);
        grillaInscripcion.setAutoFetchData(true);
        grillaInscripcion.setShowFilterEditor(true);


        ListGridField curso = new ListGridField("id_curso", "Curso", 350);
        curso.setOptionDataSource(DataSource.get("curso"));
        curso.setDisplayField("nombre");
        curso.setValueField("id_curso");
        curso.setAlign(Alignment.CENTER);
////       
        ListGridField usuario = new ListGridField("id_usuario", "Usuario", 350);
        usuario.setOptionDataSource(DataSource.get("usuario"));
        usuario.setDisplayField("nombre_usuario");
        usuario.setValueField("id_usuario");
        usuario.setAlign(Alignment.CENTER);
////       
        ListGridField fechaInscripcion = new ListGridField("fecha_inscripcion", "Fecha Inscripcion", 200);
        fechaInscripcion.setAlign(Alignment.CENTER);
        
        ListGridField horasAsistidas = new ListGridField("horas_asistidas", "Horas Asistidas", 150);
        horasAsistidas.setAlign(Alignment.CENTER);
       
        ListGridField EstadoField = new ListGridField("id_estado", VariablesGenerales.ETIQUETAS.estado(), 115);
        EstadoField.setOptionDataSource(DataSource.get("estado"));
        EstadoField.setDisplayField("nombre_estado");
        EstadoField.setValueField("id_estado");
        EstadoField.setAlign(Alignment.CENTER);

       
//        ListGridField codigoField = new ListGridField("Lab2067C02", VariablesGenerales.ETIQUETAS.codigoHemored(), 120);
//        codigoField.setAlign(Alignment.CENTER);
     
        ListGridField descripcionField = new ListGridField("Lab2067C03", VariablesGenerales.ETIQUETAS.descripcion(), 200);
        descripcionField.setAlign(Alignment.CENTER);
////        
//        
//        
        grillaInscripcion.setFields(curso, usuario, fechaInscripcion, horasAsistidas,EstadoField);

        grillaInscripcion.addSelectionChangedHandler(new SelectionChangedHandler()
        {
//
            @Override
            public void onSelectionChanged(SelectionEvent event)
            {
//                
                if (event.getState())
                {
                    guardar.setVisible(true);
                    formulario.setVisible(false);
                    editar.setVisible(true);
                    formularioInscripcion.editSelectedData(grillaInscripcion);
                }
//
            }
        });

        return grillaInscripcion;
    }
}
