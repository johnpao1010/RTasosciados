/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package net.sigpue.client.gestorconvocatorias;

/**
 *
 * @author JDURAN
 */
import com.smartgwt.client.data.DataSource;
import com.smartgwt.client.types.Alignment;
import com.smartgwt.client.types.Side;
import com.smartgwt.client.widgets.Canvas;
import com.smartgwt.client.widgets.Img;
import com.smartgwt.client.widgets.ImgButton;
import com.smartgwt.client.widgets.Label;
import com.smartgwt.client.widgets.events.ClickEvent;
import com.smartgwt.client.widgets.events.ClickHandler;
import com.smartgwt.client.widgets.form.DynamicForm;
import com.smartgwt.client.widgets.form.fields.DateItem;
import com.smartgwt.client.widgets.form.fields.FileItem;
import com.smartgwt.client.widgets.form.fields.SelectItem;
import com.smartgwt.client.widgets.form.fields.TextAreaItem;
import com.smartgwt.client.widgets.form.fields.TextItem;
import com.smartgwt.client.widgets.grid.ListGrid;
import com.smartgwt.client.widgets.grid.ListGridField;
import com.smartgwt.client.widgets.grid.events.SelectionChangedHandler;
import com.smartgwt.client.widgets.grid.events.SelectionEvent;
import com.smartgwt.client.widgets.layout.HLayout;
import com.smartgwt.client.widgets.layout.VLayout;
import com.smartgwt.client.widgets.tab.Tab;
import com.smartgwt.client.widgets.tab.TabSet;
import net.sigpue.client.VariablesGenerales;

public class Convocatorias extends HLayout {

    public int idform;
    private Label titulo;
    DynamicForm form;
    DataSource ds;
    HLayout layout = new HLayout();
    private Tab tab1;
    private Tab tab2;
    TabSet tabSet;
    ListGrid grid;
    VLayout formlayout =new VLayout();
    VLayout layoutgrilla =new VLayout();
    ImgButton editar = new ImgButton();
    ImgButton deletedButton = new ImgButton();
    ImgButton nuevoForm = new ImgButton();
    ImgButton guardarForm = new ImgButton();
      
    public Convocatorias() {
        
        pintar();
    }

    public void pintar()
    {

        //formulario convocatoria 
  
        final AsignacionConvocatoria_Proyectos asignacion=new AsignacionConvocatoria_Proyectos();
        
        formlayout.setAutoHeight();
        formlayout.setAutoWidth();
        formlayout.setMargin(15);
        
//        layout.setShowEdges(true);
        layout.setAutoHeight();
        layout.setWidth100();
        layout.setAlign(Alignment.CENTER);
        
        layoutgrilla.setHeight100();
        layoutgrilla.setWidth100();
        layoutgrilla.setAlign(Alignment.CENTER); 
        layoutgrilla.setStyleName("sc-rounded-white");
        layoutgrilla.setMargin(20);
        
        ds = DataSource.get("convocatoria");
        
        form = new DynamicForm();
        form.setNumCols(2);
        form.setMargin(5);
        form.setIsGroup(true);
        form.setGroupTitle(VariablesGenerales.ETIQUETAS.registroConvocatoria());
        form.setDataSource(ds);
        form.setDisabled(true);
        
        tab1 = new Tab("Registro Convocatoria", "icons/convocatoria.png");
        Img tImg1 = new Img("icons/convocatoria.png", 60, 48);  
        tab1.setPane(tImg1); 
        
        tab2 = new Tab("Asignar Convocato a Proyecto", "icons/Asignacion.png");
        Img tImg2 = new Img("icons/Asignacion.png", 60, 48);  
        tab2.setPane(tImg2); 
        
        titulo = new Label();
        titulo.setAlign(com.smartgwt.client.types.Alignment.CENTER);
        titulo.setContents("<H1>"+VariablesGenerales.ETIQUETAS.titulo5()+"</H1>");
        titulo.setStyleName("sc-navigationbar");
        titulo.setHeight(3);
        titulo.setWidth(1000);
        
        
        TextItem NombreConvo = new TextItem("nombre_conv", VariablesGenerales.ETIQUETAS.nombre());
        NombreConvo.setRequired(true);
        NombreConvo.setLength(128);
        NombreConvo.setMask("????????????????????????????????????????????????????????");
        
        TextAreaItem descripcion = new TextAreaItem("descripcion_convocatoria", VariablesGenerales.ETIQUETAS.descripcion());
        descripcion.setRequired(true);
        descripcion.setLength(512);
   
        FileItem rutaArchivo = new FileItem("ruta_archivotrc", VariablesGenerales.ETIQUETAS.rutaarchivo());
        rutaArchivo.setRequired(true);
      
        DateItem diFechaInicio = new DateItem("fecha_inicio", VariablesGenerales.ETIQUETAS.fechainicio());

        DateItem diFechaFin = new DateItem("fecha_fin", VariablesGenerales.ETIQUETAS.fechafin());
        
        SelectItem Estado = new SelectItem("id_estado", VariablesGenerales.ETIQUETAS.estado());
        Estado.setOptionDataSource(DataSource.get("estado"));
        Estado.setDisplayField("nombre_estado");
        Estado.setValueField("id_estado");
       
        
        form.setFields(NombreConvo, descripcion, diFechaInicio,diFechaFin,Estado,rutaArchivo);
       
       //// grilla convocatorias creadas
       
        grid = new ListGrid();
        grid.setHeight(300);
        grid.setWidth100();
        grid.setMargin(15);
        grid.setDataSource(ds);
        grid.setAlign(Alignment.CENTER);
        grid.setAutoFetchData(true);
        
        ListGridField NombreField = new ListGridField("nombre_conv", VariablesGenerales.ETIQUETAS.nombre(), 260);
        NombreField.setAlign(Alignment.CENTER);
        
        ListGridField FechacreacionField = new ListGridField("fecha_inicio", VariablesGenerales.ETIQUETAS.fechainicio(), 100);
        FechacreacionField.setCanEdit(false);
        FechacreacionField.setAlign(Alignment.CENTER);
        
        ListGridField FechafinField = new ListGridField("fecha_fin", VariablesGenerales.ETIQUETAS.fechafin(), 120);
        FechafinField.setCanEdit(false);
        FechafinField.setAlign(Alignment.CENTER);
        
        ListGridField EstadoField = new ListGridField("id_estado", VariablesGenerales.ETIQUETAS.estado(), 80);
        EstadoField.setOptionDataSource(DataSource.get("estado"));
        EstadoField.setDisplayField("nombre_estado");
        EstadoField.setValueField("id_estado");
        EstadoField.setCanEdit(false);
        EstadoField.setAlign(Alignment.CENTER);

        
        grid.setFields(NombreField, FechacreacionField,FechafinField,EstadoField);
       
        grid.addSelectionChangedHandler(new SelectionChangedHandler() {

            @Override
            public void onSelectionChanged(SelectionEvent event) {
                
                editar.setDisabled(false);
                form.editSelectedData(grid);
                
            }
        });
       
        Canvas canvas = new Canvas();
        canvas.setHeight("100%");
        canvas.setWidth("100%");
        canvas.setAlign(com.smartgwt.client.types.Alignment.CENTER);

       
        guardarForm.setSrc("Save.png");
        guardarForm.setTooltip("Guardar");
        guardarForm.setShowTitle(true);
        guardarForm.setAlign(Alignment.RIGHT);
        guardarForm.setWidth(32);
        guardarForm.setHeight(32);
        guardarForm.addClickHandler(new ClickHandler() {
            public void onClick(com.smartgwt.client.widgets.events.ClickEvent event) {
                form.saveData();
            }
        });
        
        deletedButton.setSrc("Delete.png");
        deletedButton.setTooltip("Eliminar");
        deletedButton.setAlign(Alignment.RIGHT);
        deletedButton.setWidth(32);
        deletedButton.setHeight(32);
        deletedButton.setShowTitle(true);
        deletedButton.addClickHandler(new ClickHandler() {  
            @Override  
            public void onClick(ClickEvent event) {  
                grid.removeSelectedData();  
                form.editNewRecord();  
                
            }  
        });  
        
        editar.setSrc("Edit.png");
        editar.setTooltip("Editar");
        editar.setShowTitle(true);
        editar.setAlign(Alignment.RIGHT);
        editar.setWidth(32);
        editar.setHeight(32);
        editar.addClickHandler(new ClickHandler() {

            @Override
            public void onClick(ClickEvent event) {
               form.setDisabled(false);
            }
        });
        
        nuevoForm.setSrc("Add.png");
        nuevoForm.setTooltip("Nuevo");
        nuevoForm.setShowTitle(true);
        nuevoForm.setWidth(32);
        nuevoForm.setHeight(32);
        nuevoForm.setAlign(Alignment.RIGHT);
        nuevoForm.addClickHandler(new ClickHandler() {
            @Override
            public void onClick(ClickEvent event) {

                form.setDisabled(false);
                form.editNewRecord();

            }
        });
       
        HLayout buttondeleted = new HLayout();
        buttondeleted.setAutoWidth();
        buttondeleted.setStyleName("sc-rounded-white");
        buttondeleted.setLayoutAlign(Alignment.CENTER);
        buttondeleted.setAlign(Alignment.CENTER);
        buttondeleted.addMember(deletedButton);
        
        VLayout vStack = new VLayout();
        vStack.setHeight(500);
        vStack.setLeft("5%");
        vStack.setWidth(850);

        
        HLayout botonesform = new HLayout();
        botonesform.setAutoHeight();
        botonesform.setAutoWidth();
        botonesform.setLayoutAlign(Alignment.CENTER);
        botonesform.setMargin(10);
        botonesform.setStyleName("sc-rounded-white");
        botonesform.setMembersMargin(10);
        botonesform.addMembers(guardarForm, editar ,nuevoForm);

        formlayout.addMembers(form,botonesform);
        formlayout.setStyleName("sc-rounded-white");
        
        layoutgrilla.addMembers(grid,buttondeleted);
        layoutgrilla.setStyleName("sc-rounded-white");
        
        layout.addMembers(formlayout,layoutgrilla);
        layout.setStyleName("sc-rounded-white");
        
        tab1.setPane(layout);
        tab2.setPane(asignacion.CrearPanelConvoProyec());
        
        tabSet = new TabSet();
        tabSet.setTabBarPosition(Side.TOP);
        tabSet.setMargin(20);
        tabSet.setLeft(50);
        tabSet.setWidth(1000);
        tabSet.setHeight(460);
        tabSet.addTab(tab1);
        tabSet.addTab(tab2);
        
        
        vStack.addMember(titulo);
        vStack.addMember(tabSet);
        vStack.setAlign(Alignment.CENTER);
        canvas.addChild(vStack);
        addMember(canvas);
    }

}
