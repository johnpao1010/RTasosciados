package net.sigpue.client.gestorformularios;


import com.smartgwt.client.data.Criteria;
import com.smartgwt.client.data.DSCallback;
import com.smartgwt.client.data.DSRequest;
import com.smartgwt.client.data.DSResponse;
import com.smartgwt.client.data.DataSource;
import com.smartgwt.client.data.Record;
import com.smartgwt.client.types.DSOperationType;
import com.smartgwt.client.util.SC;
import com.smartgwt.client.widgets.IButton;
import com.smartgwt.client.widgets.grid.ListGrid;
import com.smartgwt.client.widgets.grid.ListGridField;
import com.smartgwt.client.widgets.layout.HLayout;
import com.smartgwt.client.widgets.layout.VLayout;
import com.smartgwt.client.widgets.tab.TabSet;
import com.smartgwt.client.widgets.Label;
import com.smartgwt.client.widgets.form.DynamicForm;
import net.sigpue.client.VariablesGenerales;
import net.sigpue.client.VariablesSesion;
import net.sigpue.client.VentanaCargando;

public class FormulariosCreadosVU extends HLayout {

    private ListGrid grid;
    private VLayout navigationLayout;
    static int idformulario;
    VLayout vLayoutindex;
    IButton editar;
    IButton Guardar;
    TabSet tabSet;
    DynamicForm forms;
    MotorRenderizacion ren;
    private DataSource ds;
    private IButton renderizar;
    private Label titulo;
    final VentanaCargando vc = new VentanaCargando();   

    public FormulariosCreadosVU() 
    {

       setWidth100();
       setHeight100();
       idformulario = idformulario;
       vistausuario();
    }
       
public void vistausuario()
{
        navigationLayout = new VLayout();
        navigationLayout.setWidth("60%");

        titulo= new Label();  
        titulo.setAlign(com.smartgwt.client.types.Alignment.CENTER);
        titulo.setContents("<H1><center>"+VariablesGenerales.ETIQUETAS.formatosVarios()+"</center></H1>");
        titulo.setStyleName("sc-navigationbar");
        titulo.setMargin(5);
        titulo.setHeight(5);

        ds = DataSource.get("formulario");

        grid = new ListGrid();
        grid.setHeight100();
        grid.setWidth100();
        
        ds.fetchData(new Criteria("id", String.valueOf(VariablesSesion.usuario.getIdUsuario())), new DSCallback()
        {
            @Override
            public void execute(DSResponse response, Object rawData, DSRequest request)
            {
                grid.setData(response.getData());
            }
        }, new DSRequest(DSOperationType.FETCH, "formsDisponibles"));
        
        grid.setAutoFetchData(true);

        ListGridField FormatoField = new ListGridField("nombre", VariablesGenerales.ETIQUETAS.formato(),1150);

        grid.setFields(FormatoField);
        grid.setShowFilterEditor(true);
        grid.setValidateOnChange(true);
        
        ds.fetchData(new Criteria(), new DSCallback() {
            @Override
            public void execute(DSResponse response, Object rawData, DSRequest request) {
                response.getDataAsRecordList();
            }
        });
           
        final Record record = new Record();
        record.setAttribute("id_formulario", "");
        
            renderizar = new IButton();
            renderizar.setTitle(VariablesGenerales.ETIQUETAS.diligenciar());
            renderizar.addClickHandler(new com.smartgwt.client.widgets.events.ClickHandler() 
            {   
                @Override
                public void onClick(com.smartgwt.client.widgets.events.ClickEvent event)
                {
                    ren=new MotorRenderizacion(grid.getSelectedRecord().getAttributeAsInt("id_formulario"));
                }
             
            });
           
        navigationLayout.addMember(titulo);    
        navigationLayout.addMember(grid);
        navigationLayout.addMember(renderizar);
        addMember(navigationLayout);
    }

}
