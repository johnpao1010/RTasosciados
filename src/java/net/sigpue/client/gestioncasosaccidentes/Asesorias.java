package net.sigpue.client.gestioncasosaccidentes;

import com.smartgwt.client.data.DataSource;
import com.smartgwt.client.types.Alignment;
import com.smartgwt.client.types.DateDisplayFormat;
import com.smartgwt.client.types.ListGridFieldType;
import com.smartgwt.client.types.Side;
import com.smartgwt.client.types.VerticalAlignment;
import com.smartgwt.client.widgets.ImgButton;
import com.smartgwt.client.widgets.Label;
import com.smartgwt.client.widgets.events.ClickEvent;
import com.smartgwt.client.widgets.events.ClickHandler;
import com.smartgwt.client.widgets.form.DynamicForm;
import com.smartgwt.client.widgets.form.fields.DateItem;
import com.smartgwt.client.widgets.form.fields.SelectItem;
import com.smartgwt.client.widgets.form.fields.TextAreaItem;
import com.smartgwt.client.widgets.form.fields.TextItem;
import com.smartgwt.client.widgets.grid.ListGrid;
import com.smartgwt.client.widgets.grid.ListGridField;
import com.smartgwt.client.widgets.layout.HLayout;
import com.smartgwt.client.widgets.layout.VLayout;
import com.smartgwt.client.widgets.tab.Tab;
import com.smartgwt.client.widgets.tab.TabSet;
import com.smartgwt.client.widgets.tab.events.TabSelectedEvent;
import com.smartgwt.client.widgets.tab.events.TabSelectedHandler;
import net.sigpue.client.VariablesGenerales;
import net.sigpue.client.VariablesSesion;

public class Asesorias extends VLayout
{

    DynamicForm dfAsesoria = new DynamicForm();
    ListGrid lg1TabGrid = new ListGrid();
    ImgButton ibNewOfert = new ImgButton();
    ImgButton deletedButton = new ImgButton();
    ImgButton ibRegAsesoria = new ImgButton();
    ImgButton ibModOfer = new ImgButton();
    Tab tOferta = new Tab(VariablesGenerales.ETIQUETAS.tituloTabasesoria());
    Tab tDemanda = new Tab(VariablesGenerales.ETIQUETAS.demanda());
    Tab tOfertaDer = new Tab(VariablesGenerales.ETIQUETAS.asesoriasProgramadas());
    Tab tDemandaDer = new Tab(VariablesGenerales.ETIQUETAS.demanda());
    Tab tDisponibilidadDer = new Tab(VariablesGenerales.ETIQUETAS.disponibilidad());
    TabSet tsTabReg = new TabSet();
    TabSet tsTabRegDer = new TabSet();
    VLayout vlTitulo = new VLayout(20);
    Label titulo = new Label();

    public Asesorias() 
    {
        getOfertaYDemanda();
    }

        public void getOfertaYDemanda() 
        {
        HLayout hlContainer = new HLayout();
        hlContainer.setWidth100();  //ancho
        hlContainer.setHeight100(); //alto
        
        titulo.setAlign(com.smartgwt.client.types.Alignment.CENTER);
        titulo.setContents("<H1><center>"+VariablesGenerales.ETIQUETAS.labelTitulosesoria()+"</center></H1>");
        titulo.setStyleName("sc-navigationbar");
        titulo.setMargin(20);
        titulo.setHeight(5);

        
        HLayout hlNavegationPanel = new HLayout();
        hlNavegationPanel.setID("hlNavegationPanel");
        hlNavegationPanel.setHeight100(); //alto 450
        hlNavegationPanel.setWidth(355);  //ancho 420
        hlNavegationPanel.setMargin(5);  //Espacio superior y espacio izquierdo

        tsTabReg.setHeight("87%");  //alto 400
        tsTabReg.setWidth(600);   //ancho      
        tsTabReg.setTabBarPosition(Side.TOP); //Posición de los TABS
        tOferta.addTabSelectedHandler(new TabSelectedHandler() {
            @Override
            public void onTabSelected(TabSelectedEvent event) {
                tsTabRegDer.disableTab(tDemandaDer);
                tsTabRegDer.disableTab(tDisponibilidadDer);
                tsTabRegDer.enableTab(tOfertaDer);
                tOfertaDer.setID("TabOfertaDerecha");
                tsTabRegDer.selectTab("TabOfertaDerecha");
            }
        });
        dfAsesoria.setDataSource(DataSource.get("asesoria"));
        dfAsesoria.setMargin(5); //Margen

        dfAsesoria.setNumCols(4); //En la 1 pinta los titulos y la 2 pinta el control
        dfAsesoria.setColWidths("40%");   //Hace que el texto no salga encima cuando es muy largo
        dfAsesoria.setCellPadding(5);    //Espacio adicional entre los botones
        dfAsesoria.setDisabled(false);     //se muestra deshabilitado desde el inicio
        dfAsesoria.setGroupTitle(VariablesGenerales.ETIQUETAS.tituloAsesoria());
        dfAsesoria.setIsGroup(Boolean.TRUE);


        DateItem diFechaCreacion = new DateItem("fecha", VariablesGenerales.ETIQUETAS.fechaCreacion());
        diFechaCreacion.setDisabled(Boolean.TRUE);
       
        DateItem diFechaAsesoria = new DateItem("fecha", VariablesGenerales.ETIQUETAS.fechaAsesoria());

        TextItem tema = new TextItem("tema", VariablesGenerales.ETIQUETAS.tema());
        tema.setRequired(true);
        tema.setLength(64);
        tema.setMask("????????????????????");
        tema.setVisible(Boolean.FALSE);

        SelectItem asistencia = new SelectItem("asistencia", VariablesGenerales.ETIQUETAS.asistencia());
        asistencia.setRequired(Boolean.TRUE);
        asistencia.setValueMap("SI","NO");
        asistencia.setVisible(Boolean.FALSE);

        SelectItem emprendedor = new SelectItem("id_emprendedor", VariablesGenerales.ETIQUETAS.emprendedor());
        emprendedor.setOptionDataSource(DataSource.get("usuario"));
        emprendedor.setDisplayField("nombre_usuario");
        emprendedor.setValueField("id_usuario");

        SelectItem asesor = new SelectItem("id_asesor", VariablesGenerales.ETIQUETAS.asesor());
        asesor.setOptionDataSource(DataSource.get("usuario"));
        asesor.setDisplayField("nombre_usuario");
        asesor.setValueField("id_usuario");
        asesor.setDefaultValues(VariablesSesion.usuario.getIdUsuario());
        asesor.setDisabled(true);


        SelectItem proyecto = new SelectItem("id_proyecto", VariablesGenerales.ETIQUETAS.proyecto());
        proyecto.setOptionDataSource(DataSource.get("proyecto"));
        proyecto.setDisplayField("nombre");
        proyecto.setValueField("id_proyecto");
        
        SelectItem Estado = new SelectItem("id_estado", VariablesGenerales.ETIQUETAS.estado());
        Estado.setOptionDataSource(DataSource.get("estado"));
        Estado.setDisplayField("nombre_estado");
        Estado.setValueField("id_estado");
        Estado.setDefaultValue(Boolean.TRUE);
        
        TextAreaItem Descripcion=new TextAreaItem("descripcion", VariablesGenerales.ETIQUETAS.descripcion());



        dfAsesoria.setFields(diFechaCreacion,diFechaAsesoria, tema, asistencia, emprendedor, asesor, proyecto,Estado,Descripcion);
       
        HLayout hlButtons = new HLayout();
        hlButtons.setMembersMargin(20);
        hlButtons.setMargin(15);//Define las márgenes entre cada control que contenga
        hlButtons.setLayoutAlign(Alignment.CENTER);
        hlButtons.setDefaultLayoutAlign(VerticalAlignment.CENTER);
        hlButtons.setAutoHeight();
        hlButtons.setAutoWidth();
        hlButtons.setStyleName("sc-rounded-white");
        
        HLayout hldeleted = new HLayout();
        hldeleted.setMembersMargin(20);
        hldeleted.setMargin(15);//Define las márgenes entre cada control que contenga
        hldeleted.setLayoutAlign(Alignment.CENTER);
        hldeleted.setDefaultLayoutAlign(VerticalAlignment.CENTER);
        hldeleted.setAutoHeight();
        hldeleted.setAutoWidth();
        hldeleted.setStyleName("sc-rounded-white");

        deletedButton.setSrc("Delete.png");
        deletedButton.setTooltip("Eliminar");
        deletedButton.setAlign(Alignment.RIGHT);
        deletedButton.setWidth(32);
        deletedButton.setHeight(32);
        deletedButton.setShowTitle(true);
        deletedButton.addClickHandler(new ClickHandler() {  
            @Override  
            public void onClick(ClickEvent event) {  
                lg1TabGrid.removeSelectedData();  
                
            }  
        });  
        
        
        ibNewOfert.setSrc("Add.png");
        ibNewOfert.setTooltip("Nuevo");
        ibNewOfert.setShowTitle(true);
        ibNewOfert.setWidth(32);
        ibNewOfert.setHeight(32);
        ibNewOfert.setShowTitle(true);
        ibNewOfert.addClickHandler(new ClickHandler() {
            @Override
            public void onClick(ClickEvent event) {
                dfAsesoria.editNewRecord();   //Deshabilita el formulario para que no se pueda hacer nada
                ibRegAsesoria.setDisabled(false);
            }
        });

        ibRegAsesoria.setSrc("Save.png");
        ibRegAsesoria.setTooltip("Guardar");
        ibRegAsesoria.setWidth(32);
        ibRegAsesoria.setHeight(32);
        ibRegAsesoria.setShowTitle(true);
        ibRegAsesoria.addClickHandler(new ClickHandler() {
            @Override
            public void onClick(ClickEvent event) {
                dfAsesoria.saveData();    //Guarda lo que est{e en el formulario
                dfAsesoria.editNewRecord();   //Limpia el formulario luego de guardar.   
                ibRegAsesoria.setDisabled(true);
                dfAsesoria.setDisabled(true);
                ibModOfer.setVisible(true);
            }
        });
        ibModOfer.setSrc("Edit.png");
        ibModOfer.setTooltip("Editar");
        ibModOfer.setWidth(32);
        ibModOfer.setHeight(32);
        ibModOfer.addClickHandler(new ClickHandler() {
            @Override
            public void onClick(ClickEvent event) {
                dfAsesoria.setDisabled(false);
                ibRegAsesoria.setDisabled(false);
                ibModOfer.setVisible(false);
            }
        });
        hlButtons.addMembers(ibNewOfert,ibRegAsesoria,ibModOfer);
      
        hldeleted.addMember(deletedButton);
        
        VLayout vlFormContainer = new VLayout();
        vlFormContainer.setTop(30);
        vlFormContainer.addMember(dfAsesoria);
        vlFormContainer.addMember(hlButtons);
        tOferta.setPane(vlFormContainer);

        tDemanda.addTabSelectedHandler(new TabSelectedHandler() {
            @Override
            public void onTabSelected(TabSelectedEvent event) {
                tsTabRegDer.disableTab(tOfertaDer);

                tDemandaDer.setID("TabDemandaDerecha");
                tsTabRegDer.selectTab("TabDemandaDerecha");
            }
        });
        tsTabReg.addTab(tOferta, 1);  // Oferta en Tab 1
        HLayout hlNavegationPanelDer = new HLayout();
        hlNavegationPanelDer.setHeight100(); //alto 450
        hlNavegationPanelDer.setWidth100();  //ancho 420-690
        hlNavegationPanelDer.setMargin(5);  //Espacio superior y espacio izquierdo
        tsTabRegDer.setHeight("85%"); //Alto 400
        tsTabRegDer.setWidth100();  //Ancho 690
        tsTabRegDer.setTabBarPosition(Side.TOP); //Posición de los TABS        
//
                lg1TabGrid.setHeight("70%"); //Alto
                lg1TabGrid.setWidth100();   //Ancho
                lg1TabGrid.setAutoFetchData(true);
                lg1TabGrid.setDataSource(DataSource.get("asesoria"));
                lg1TabGrid.setShowFilterEditor(true);   //Permite visualizar los filtros                
                   
                    ListGridField lgfCodigoAsesoria    =   new ListGridField("id_asesoria", VariablesGenerales.ETIQUETAS.codigoAsesoria(), 90);
                    lgfCodigoAsesoria.setAlign(Alignment.LEFT);
                    lgfCodigoAsesoria.setCanEdit(false);   
                
                    ListGridField lgfFechaProgramada   =   new ListGridField("fecha_asesoria", VariablesGenerales.ETIQUETAS.fechaAsesoria(), 140);  
                    lgfFechaProgramada.setAlign(Alignment.LEFT);
                    lgfFechaProgramada.setType(ListGridFieldType.DATE);
                    lgfFechaProgramada.setDateFormatter(DateDisplayFormat.TOEUROPEANSHORTDATE);
                    lgfFechaProgramada.setCanEdit(false);
                

                    ListGridField lgfEmprendedor   =   new ListGridField("id_emprendedor", VariablesGenerales.ETIQUETAS.emprendedor() , 105);
                    lgfEmprendedor.setOptionDataSource(DataSource.get("usuario"));
                    lgfEmprendedor.setDisplayField("nombre_usuario");
                    lgfEmprendedor.setValueField("id_usuario");
                    lgfEmprendedor.setRequired(true);
                    lgfEmprendedor.setAlign(Alignment.LEFT);
                    lgfEmprendedor.setCanEdit(false);                         

                    ListGridField lgfAsesor   =   new ListGridField("id_asesor", VariablesGenerales.ETIQUETAS.asesor(), 117);
                    lgfAsesor.setOptionDataSource(DataSource.get("usuario"));
                    lgfAsesor.setDisplayField("nombre_usuario");
                    lgfAsesor.setValueField("id_usuario");
                    lgfAsesor.setRequired(true);
                    lgfAsesor.setAlign(Alignment.LEFT);
                    lgfAsesor.setCanEdit(false);  
                    
                    ListGridField lgfAsistencia    =   new ListGridField("asistencia", VariablesGenerales.ETIQUETAS.asistencia(), 60);
                    lgfAsistencia.setAlign(Alignment.LEFT);
                    lgfAsistencia.setCanEdit(false); 

                lg1TabGrid.setFields(lgfCodigoAsesoria,lgfFechaProgramada,  lgfEmprendedor, lgfAsesor,lgfAsistencia);                
                lg1TabGrid.setCanResizeFields(false);

        
        VLayout contenedorgrilla=new VLayout();
        contenedorgrilla.setHeight("85%");
        contenedorgrilla.setWidth100();
        contenedorgrilla.addMembers(lg1TabGrid,hldeleted);
        
                
        tOfertaDer.setPane(contenedorgrilla);  
        tsTabRegDer.addTab(tOfertaDer);
        hlNavegationPanel.setAlign(Alignment.CENTER);
        hlNavegationPanel.addMembers(tsTabReg);   //Tab Container de la Izquierda
        hlNavegationPanelDer.addMember(tsTabRegDer);    //Tab Container de la Derecha
        hlContainer.addMember(hlNavegationPanel);
        hlContainer.addMember(hlNavegationPanelDer);
        
        vlTitulo.addMember(hlContainer);
        vlTitulo.setAlign(Alignment.CENTER);
        setAlign(Alignment.CENTER);
        addMembers(titulo,vlTitulo);
        show();
        
    } 
} 