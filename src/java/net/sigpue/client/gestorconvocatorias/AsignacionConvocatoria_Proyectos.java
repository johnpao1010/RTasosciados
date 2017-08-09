/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package net.sigpue.client.gestorconvocatorias;
  


import com.smartgwt.client.data.DataSource;
import com.smartgwt.client.types.Alignment;
import com.smartgwt.client.widgets.Canvas;
import com.smartgwt.client.widgets.IButton;
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
import com.smartgwt.client.widgets.layout.VStack;
import com.smartgwt.client.widgets.tab.Tab;
import net.sigpue.client.VariablesGenerales;
import net.cltech.lib.client.controls.dragList.CLDragList;

public class AsignacionConvocatoria_Proyectos
{

  public int idform;
    private CLDragList auxDragList;
    private Label titulo;
    DynamicForm formAsignacion;
    DataSource ds;
    private Tab tab1;
    private Tab tab2;
    ListGrid gridAsignacion;
    ImgButton editarFormAsignacion = new ImgButton();
    ImgButton deletedButton = new ImgButton();
    ImgButton nuevoFormAsignacion = new ImgButton();
    ImgButton guardarFormAsignacion = new ImgButton();
    VLayout formlayout=new VLayout();
    VLayout layoutgrilla=new VLayout();
    HLayout layout=new HLayout();
    
    public AsignacionConvocatoria_Proyectos()
    {
    }

    public Canvas CrearPanelConvoProyec()
    {

        ds = DataSource.get("convocatoria_x_proyecto");   
       
        Canvas canvas = new Canvas();
        canvas.setHeight("100%");
        canvas.setWidth("100%");
        canvas.setMargin(20);
        canvas.setAlign(com.smartgwt.client.types.Alignment.CENTER);


        VStack vStack = new VStack(10);
        vStack.setHeight(300);
        vStack.setWidth(500);

        layout.setHeight("100%");
        layout.setWidth(1000);
        layout.setAlign(Alignment.CENTER);
        
        formlayout.setAutoHeight();
        formlayout.setAutoWidth();
        formlayout.setStyleName("sc-rounded-white");

        
        formAsignacion = new DynamicForm();
        formAsignacion.setNumCols(2);
//        formAsignacion.setMargin(10);
        formAsignacion.setIsGroup(true);
        formAsignacion.setTop(90);
        formAsignacion.setGroupTitle(VariablesGenerales.ETIQUETAS.asignacionProyecConvoca());
        formAsignacion.setCellPadding(10);
        formAsignacion.setDataSource(ds);
        formAsignacion.setDisabled(true);
                
        
        SelectItem Proyecto = new SelectItem("id_proyecto", VariablesGenerales.ETIQUETAS.proyecto());
        Proyecto.setOptionDataSource(DataSource.get("proyecto"));
        Proyecto.setDisplayField("nombre");
        Proyecto.setValueField("id_proyecto");
        
        SelectItem Convocatoria = new SelectItem("id_convocatoria", VariablesGenerales.ETIQUETAS.convocatoria());
        Convocatoria.setOptionDataSource(DataSource.get("convocatoria"));
        Convocatoria.setDisplayField("nombre_conv");
        Convocatoria.setValueField("id_convocatoria");
        
              
        DateItem diFechaAsignacion = new DateItem("fecha_asignacion", VariablesGenerales.ETIQUETAS.fechaAsignacion());

        SelectItem Estado = new SelectItem("id_estado", VariablesGenerales.ETIQUETAS.estado());
        Estado.setOptionDataSource(DataSource.get("estado"));
        Estado.setDisplayField("nombre_estado");
        Estado.setValueField("id_estado");
       
        
        formAsignacion.setFields(Proyecto, Convocatoria, diFechaAsignacion,Estado);
        
        
        gridAsignacion = new ListGrid();
        gridAsignacion.setHeight("70%");
        gridAsignacion.setWidth100();
        gridAsignacion.setAutoFetchData(true);
        gridAsignacion.setDataSource(ds);
        gridAsignacion.setTop("10%");
        gridAsignacion.setAlign(Alignment.CENTER);
        
        ListGridField nombreProyecto = new ListGridField("id_proyecto", VariablesGenerales.ETIQUETAS.proyecto(), 210);
        nombreProyecto.setOptionDataSource(DataSource.get("proyecto"));
        nombreProyecto.setDisplayField("nombre");
        nombreProyecto.setValueField("id_proyecto");
        nombreProyecto.setRequired(true);
        nombreProyecto.setCanEdit(false);
        
        
        ListGridField nombreConvocatoria = new ListGridField("id_convocatoria", VariablesGenerales.ETIQUETAS.convocatoria(), 210);
        nombreConvocatoria.setOptionDataSource(DataSource.get("convocatoria"));
        nombreConvocatoria.setDisplayField("nombre_conv");
        nombreConvocatoria.setValueField("id_convocatoria");
        nombreConvocatoria.setRequired(true);
        nombreConvocatoria.setCanEdit(false);
        
        ListGridField FechaAsignacionField = new ListGridField("fecha_asignacion", VariablesGenerales.ETIQUETAS.fechaAsignacion(), 90);
        FechaAsignacionField.setCanEdit(false);
        
        ListGridField EstadoField = new ListGridField("id_estado", VariablesGenerales.ETIQUETAS.estado(), 80);
        EstadoField.setOptionDataSource(DataSource.get("estado"));
        EstadoField.setDisplayField("nombre_estado");
        EstadoField.setValueField("id_estado");
        EstadoField.setRequired(true);
        EstadoField.setCanEdit(false);

        
        gridAsignacion.setFields(nombreProyecto,nombreConvocatoria, FechaAsignacionField,EstadoField);
        
        
         gridAsignacion.addSelectionChangedHandler(new SelectionChangedHandler() {

            @Override
            public void onSelectionChanged(SelectionEvent event) {
                
                editarFormAsignacion.setDisabled(false);
                formAsignacion.editSelectedData(gridAsignacion);
                
            }
        });
        
         
         
        guardarFormAsignacion.setSrc("Save.png");
        guardarFormAsignacion.setTooltip("Guardar");
        guardarFormAsignacion.setWidth(32);
        guardarFormAsignacion.setHeight(32);
        guardarFormAsignacion.addClickHandler(new ClickHandler() {
            public void onClick(com.smartgwt.client.widgets.events.ClickEvent event) {
                formAsignacion.saveData();
            }
        });
        
        
        editarFormAsignacion.setSrc("Edit.png");
        editarFormAsignacion.setTooltip("Editar");
        editarFormAsignacion.setWidth(32);
        editarFormAsignacion.setHeight(32);
        editarFormAsignacion.setTitle(VariablesGenerales.ETIQUETAS.editButton());
        editarFormAsignacion.addClickHandler(new ClickHandler() {

            @Override
            public void onClick(ClickEvent event) {
               formAsignacion.setDisabled(false);
            }
        });
        
        nuevoFormAsignacion.setSrc("Add.png");
        nuevoFormAsignacion.setTooltip("Nuevo");
        nuevoFormAsignacion.setWidth(32);
        nuevoFormAsignacion.setHeight(32);
        nuevoFormAsignacion.setAlign(Alignment.CENTER);
        nuevoFormAsignacion.addClickHandler(new ClickHandler() {
            @Override
            public void onClick(ClickEvent event) {

                formAsignacion.editNewRecord();

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
                gridAsignacion.removeSelectedData();  
                formAsignacion.editNewRecord();  
                
            }  
        });  
         
        HLayout botondeleted = new HLayout();
        botondeleted.setAutoHeight();
        botondeleted.setAutoWidth();
        botondeleted.setMembersMargin(10);
        botondeleted.setMargin(10);
        botondeleted.setStyleName("sc-rounded-white");
        botondeleted.setLayoutAlign(Alignment.CENTER);
        botondeleted.addMembers(deletedButton);
        
        
        HLayout botonlayout = new HLayout();
        botonlayout.setAutoHeight();
        botonlayout.setAutoWidth();
        botonlayout.setMembersMargin(10);
        botonlayout.setMargin(10);
        botonlayout.setStyleName("sc-rounded-white");
        botonlayout.setLayoutAlign(com.smartgwt.client.types.Alignment.CENTER);
        botonlayout.addMembers(guardarFormAsignacion,editarFormAsignacion,nuevoFormAsignacion);
//        setAuxDragList(new CLDragList("proyecto", "convocatoria_x_proyecto"));
//        auxDragList.getLeftList().setShowFilterEditor(Boolean.TRUE);
//        auxDragList.getRightList().setShowFilterEditor(Boolean.TRUE);
//        getAuxDragList().setHeight(250);
//        getAuxDragList().setWidth(500);
//        getAuxDragList().setIdMaster("id_convocatoria");
//        getAuxDragList().setLeftListFields(new ListGridField[]{
//                    new ListGridField("nombre", VariablesGenerales.ETIQUETAS.proyectosdisponibles())
//                });
//        getAuxDragList().setRighttListFields(new ListGridField[]{
//                    new ListGridField("nombre", VariablesGenerales.ETIQUETAS.proyectosAsociados())
//                });
        layoutgrilla.setHeight100();
        layoutgrilla.setWidth100();
        layoutgrilla.setAlign(Alignment.CENTER); 
        layoutgrilla.setStyleName("sc-rounded-white");
        layoutgrilla.setMargin(20);
        layoutgrilla.addMembers(gridAsignacion,botondeleted);
        layoutgrilla.setStyleName("sc-rounded-white");

        formlayout.addMembers(formAsignacion,botonlayout);
        
        layout.addMember(formlayout);
        layout.addMember(layoutgrilla);     
       
        
        vStack.addMembers(layout);
        canvas.addChild(vStack);

        return canvas;
    }

    /**
     * @return the auxDragList
     */
    public CLDragList getAuxDragList()
    {
        return auxDragList;
    }

    /**
     * @param auxDragList the auxDragList to set
     */
    public void setAuxDragList(CLDragList auxDragList)
    {
        this.auxDragList = auxDragList;
    }
}
