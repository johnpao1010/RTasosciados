package net.sigpue.client.gestorproyectos;

  
import com.smartgwt.client.data.DataSource;  
import com.smartgwt.client.widgets.events.ClickEvent;  
import com.smartgwt.client.widgets.events.ClickHandler;  
import com.smartgwt.client.widgets.form.DynamicForm;  
import com.smartgwt.client.widgets.form.fields.TextItem;  
import com.smartgwt.client.widgets.layout.HLayout;  
import com.smartgwt.client.widgets.layout.VLayout;  
import com.smartgwt.client.types.Alignment;
import com.smartgwt.client.types.Overflow;
import com.smartgwt.client.types.Side;
import com.smartgwt.client.widgets.ImgButton;
import com.smartgwt.client.widgets.Label;
import com.smartgwt.client.widgets.form.fields.DateItem;
import com.smartgwt.client.widgets.form.fields.SectionItem;
import com.smartgwt.client.widgets.form.fields.SelectItem;
import com.smartgwt.client.widgets.tab.Tab;
import com.smartgwt.client.widgets.tab.TabSet;
import net.sigpue.client.VariablesGenerales;
  
public class GestionarProyectos extends VLayout  {  
  
    private HLayout layout = new HLayout();
    private DataSource dsProyecto;
    private TabSet TabRegistroporyecto;
    private Label titulo;
    private Tab tab1;
    ImgButton deletedButton = new ImgButton();
    ImgButton cleareButton = new ImgButton();
    ImgButton editarForm = new ImgButton();
    ImgButton saveButton = new ImgButton();
    ImgButton nuevoButton = new ImgButton();
  
    private DynamicForm dynamicForm;  
    
   public GestionarProyectos()
   {
       Pintar();
   } 
  
    public void Pintar() 
    {  
        setHeight("100%");
        setWidth("100%");
        
        titulo = new Label();
        titulo.setAlign(com.smartgwt.client.types.Alignment.LEFT);
        titulo.setContents("<H1><center>"+"GESTIÓN CASOS ACCIDENTES"+"</center></H1>");
        titulo.setMargin(10);
        titulo.setHeight(5);
        
        layout.setHeight("100%");
        layout.setWidth(950);
        layout.setAlign(Alignment.CENTER);
        
        VLayout formLayout = new VLayout();
        formLayout.setHeight("100%");
        formLayout.setWidth("90%");
        formLayout.setStyleName("sc-rounded-white");
        
        dsProyecto=DataSource.get("casoaccidente");
        
        tab1 = new Tab("REGISTRO CASO");
          
        dynamicForm = new DynamicForm();  
        dynamicForm.setWidth("100%"); 
        dynamicForm.setNumCols(4);
        dynamicForm.setMargin(5);
        dynamicForm.setDataSource(dsProyecto);  
          
        TextItem nombre=new TextItem("nombre",VariablesGenerales.ETIQUETAS.nombre());
        nombre.setRequired(true);
        nombre.setLength(128);
        nombre.setMask("????????????????????????????????????????????????????????");
        nombre.setName("item"); 
         
        TextItem Emprendedor1 = new TextItem("emprendedor1", VariablesGenerales.ETIQUETAS.primerEmprendedor());
        Emprendedor1.setName("item1");  
        
        TextItem Emprendedor2 = new TextItem("emprendedor2", VariablesGenerales.ETIQUETAS.segundoEmprendedor());
        Emprendedor2.setName("item2");  
          
        TextItem Emprendedor3 = new TextItem("emprendedor3", VariablesGenerales.ETIQUETAS.tercerEmprendedor());
        Emprendedor3.setName("item3");
        
        SelectItem AsesorLider = new SelectItem("id_asesor_lider", VariablesGenerales.ETIQUETAS.asesorLider());
        AsesorLider.setOptionDataSource(DataSource.get("usuario"));
        AsesorLider.setDisplayField("nombre_usuario");
        AsesorLider.setValueField("id_usuario");
        AsesorLider.setName("item4");
         
        SelectItem AsesorAcompañante = new SelectItem("id_asesor_acompa", VariablesGenerales.ETIQUETAS.asesorAcompañante());
        AsesorAcompañante.setOptionDataSource(DataSource.get("usuario"));
        AsesorAcompañante.setDisplayField("nombre_usuario");
        AsesorAcompañante.setValueField("id_usuario");
        AsesorAcompañante.setName("item5");
         
        SelectItem lineaProyecto = new SelectItem("idlinea", VariablesGenerales.ETIQUETAS.LineaProyecto());
        lineaProyecto.setOptionDataSource(DataSource.get("lineaproyecto"));
        lineaProyecto.setDisplayField("nombre_linea");
        lineaProyecto.setValueField("idlinea");
        lineaProyecto.setName("item6");
        
        DateItem diFechaCreacion = new DateItem("fechacreacion", VariablesGenerales.ETIQUETAS.fechaCreacion());
        diFechaCreacion.setCanEdit(false);
        diFechaCreacion.setName("item7");
       
        SelectItem Estado = new SelectItem("id_estado", VariablesGenerales.ETIQUETAS.estado());
        Estado.setOptionDataSource(DataSource.get("estado"));
        Estado.setDisplayField("nombre_estado");
        Estado.setValueField("id_estado");
        Estado.setName("item8");
        
        
        SectionItem section1 = new SectionItem();  
        section1.setDefaultValue("Información del Accidente");  
        section1.setSectionExpanded(true);  
        section1.setWidth(950);
        section1.setItemIds("item","item1", "item2", "item3","item4", "item5", "item6", "item7", "item8"); 
        
        
        dynamicForm.setFields(section1,nombre, Emprendedor1, Emprendedor2, Emprendedor3, AsesorLider, AsesorAcompañante,lineaProyecto,diFechaCreacion,Estado);  

        
        deletedButton.setSrc("Delete.png");
        deletedButton.setTooltip("Eliminar");
        deletedButton.setAlign(Alignment.RIGHT);
        deletedButton.setWidth(32);
        deletedButton.setHeight(32);
        deletedButton.setShowTitle(true);
        deletedButton.addClickHandler(new ClickHandler() {  
            @Override  
            public void onClick(ClickEvent event) {  
//                listGrid.removeSelectedData();  
                dynamicForm.editNewRecord();  
                
            }  
        });  
        
        
        saveButton.setSrc("Save.png");
        saveButton.setTooltip("Guardar");
        saveButton.setAlign(Alignment.RIGHT);
        saveButton.setWidth(32);
        saveButton.setHeight(32);
        saveButton.addClickHandler(new ClickHandler() {  
            @Override  
            public void onClick(ClickEvent event) {  
                dynamicForm.saveData();  
                dynamicForm.editNewRecord();  
                
            }  
        });  
  
       
        nuevoButton.setSrc("Add.png");
        nuevoButton.setTooltip("Nuevo");
        nuevoButton.setAlign(Alignment.RIGHT);
        nuevoButton.setWidth(32);
        nuevoButton.setHeight(32);
        nuevoButton.addClickHandler(new ClickHandler() {  
            @Override  
            public void onClick(ClickEvent event) {  
                
                 dynamicForm.editNewRecord(); 
                 dynamicForm.setDisabled(false);
            }  
        });  
        
               
        editarForm.setSrc("Edit.png");
        editarForm.setTooltip("Editar");
        editarForm.setAlign(Alignment.RIGHT);
        editarForm.setWidth(32);
        editarForm.setHeight(32);
        editarForm.addClickHandler(new ClickHandler() {

            @Override
            public void onClick(ClickEvent event) {
               dynamicForm.setDisabled(false);
            }
        });
        
  
        HLayout buttonLayout = new HLayout();
        buttonLayout.setLayoutAlign(Alignment.CENTER);
        buttonLayout.setAlign(Alignment.CENTER);
        buttonLayout.setAutoHeight();
        buttonLayout.setAutoWidth();
        buttonLayout.setStyleName("sc-rounded-white");
        buttonLayout.addMembers(nuevoButton,saveButton,editarForm); 
        buttonLayout.setMembersMargin(20);
        buttonLayout.setPadding(30);
        
//        HLayout buttondeleted = new HLayout();
//        buttondeleted.setAutoWidth();
//        buttondeleted.setStyleName("sc-rounded-white");
//        buttondeleted.setLayoutAlign(Alignment.CENTER);
//        buttondeleted.setAlign(Alignment.CENTER);
//        buttondeleted.addMember(deletedButton);
        
        
         
         formLayout.addMembers(dynamicForm,buttonLayout);

//         layoutgrilla.addMembers(listGrid,buttondeleted);
         layout.addMembers(formLayout);
//         layout.setLayoutAlign(Alignment.CENTER);
        
        tab1.setPane(layout);
        
      
        TabRegistroporyecto = new TabSet();
        TabRegistroporyecto.setTabBarPosition(Side.TOP);
        TabRegistroporyecto.setMargin(5);
        TabRegistroporyecto.setLeft(80);
        TabRegistroporyecto.setWidth("100%");
        TabRegistroporyecto.setHeight("100%");
        TabRegistroporyecto.addTab(tab1);
        TabRegistroporyecto.setOverflow(Overflow.HIDDEN);
        TabRegistroporyecto.setLayoutAlign(Alignment.CENTER);
       
       
        
        
        addMember(titulo);
        addMembers(TabRegistroporyecto);  
          
        draw();  
    }  
      
}  