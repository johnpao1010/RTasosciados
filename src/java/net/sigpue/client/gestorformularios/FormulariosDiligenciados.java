/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package net.sigpue.client.gestorformularios;

import com.smartgwt.client.data.AdvancedCriteria;
import com.smartgwt.client.data.Criteria;
import com.smartgwt.client.data.DSCallback;
import com.smartgwt.client.data.DSRequest;
import com.smartgwt.client.data.DSResponse;
import com.smartgwt.client.data.DataSource;
import com.smartgwt.client.types.Alignment;
import com.smartgwt.client.types.DSOperationType;
import com.smartgwt.client.widgets.IButton;
import com.smartgwt.client.widgets.Label;
import com.smartgwt.client.widgets.events.ClickEvent;
import com.smartgwt.client.widgets.events.ClickHandler;
import com.smartgwt.client.widgets.grid.ListGrid;
import com.smartgwt.client.widgets.grid.ListGridField;
import com.smartgwt.client.widgets.grid.events.SelectionChangedHandler;
import com.smartgwt.client.widgets.grid.events.SelectionEvent;
import com.smartgwt.client.widgets.layout.HLayout;
import com.smartgwt.client.widgets.layout.VLayout;
import net.sigpue.client.VariablesGenerales;
import net.sigpue.client.VariablesSesion;


public class FormulariosDiligenciados extends HLayout
{
    private ListGrid formsDiligenciados;
    private ListGrid formsDisponibles;
    VLayout layout =new VLayout();
    VLayout layout2 =new VLayout();
    Label titulo7;
    Label titulo8;
    
    public FormulariosDiligenciados()
    {
        
        titulo7 = new Label();
        titulo7.setAlign(com.smartgwt.client.types.Alignment.CENTER);
        titulo7.setContents(VariablesGenerales.ETIQUETAS.titulo7());
        titulo7.setStyleName("opcionesMenu");
        titulo7.setMargin(10);
        titulo7.setHeight(5);
        
        titulo8 = new Label();
        titulo8.setAlign(com.smartgwt.client.types.Alignment.CENTER);
        titulo8.setContents(VariablesGenerales.ETIQUETAS.titulo8());
        titulo8.setStyleName("opcionesMenu");
        titulo8.setMargin(10);
        titulo8.setHeight(5);
        
        layout.setWidth("50%");
        layout.setAlign(Alignment.CENTER);
        layout.setShowEdges(true);
        
        layout2.setWidth("50%");
        layout2.setAlign(Alignment.CENTER);
        layout2.setShowEdges(true);
        
        final DataSource formdispo=DataSource.get("formulario");
        
        // grilla para formularios disponibles
        formsDisponibles = new ListGrid();
        formsDisponibles.setHeight("80%");
        formsDisponibles.setWidth(570);
        formsDisponibles.setAutoFetchData(true);
        formsDisponibles.setDataSource(formdispo);
        
        formsDiligenciados=new ListGrid();
        formsDiligenciados.setHeight("80%");
        formsDiligenciados.setWidth(570);
        formsDiligenciados.setDataSource(DataSource.get("consultarVariadas"));
        formsDiligenciados.setFetchOperation("formsDiligenciados");
        
         formsDisponibles.fetchData(new Criteria("id", String.valueOf(VariablesSesion.usuario.getIdUsuario())), new DSCallback()
        {
            @Override
            public void execute(DSResponse response, Object rawData, DSRequest request)
            {
                formsDisponibles.setData(response.getData());
            }
        }, new DSRequest(DSOperationType.FETCH, "formsDisponibles"));
        
        
        ListGridField NombreField = new ListGridField("nombre", VariablesGenerales.ETIQUETAS.nombre(), 550);
        NombreField.setAlign(Alignment.CENTER);
        
//        ListGridField EstadoField = new ListGridField("Lab2049C01", VariablesGenerales.ETIQUETAS.estado(), 100);
//        EstadoField.setAlign(Alignment.CENTER);
//        EstadoField.setOptionDataSource(DataSource.get("Lab2049"));
//        EstadoField.setDisplayField("Lab2049C02");
//        EstadoField.setValueField("Lab2049C01");
//        EstadoField.setRequired(true);
        
        formsDisponibles.setFields(NombreField);
        formsDisponibles.addSelectionChangedHandler(new SelectionChangedHandler() {

            @Override
            public void onSelectionChanged(SelectionEvent event) 
            {
                if(event.getState())
                {
                    
                    String idclick=formsDisponibles.getSelectedRecord().getAttribute("id_formulario");
                    
                    AdvancedCriteria crit =new AdvancedCriteria();
                    crit.addCriteria(new Criteria ("id",idclick));
                    
                    System.out.println(idclick+" - "+formsDisponibles.getSelectedRecord().getAttribute("id_formulario"));
                    formsDiligenciados.fetchData(crit, new DSCallback() {

                        @Override
                        public void execute(DSResponse response, Object rawData, DSRequest request) 
                        {
                            for (int i = 0; i < response.getData().length; i++) 
                            {
                                System.out.println("muestre "+response.getData()[i].getAttribute("idFormDilig"));
                            }
                        }
                    });
                }                    
            }
        });
        
        
        //grilla para formularios diligenciados
        //formsDiligenciados.setAutoFetchData(true);
       
        
//        ListGridField idField = new ListGridField("idFormDilig", 90);
//        idField.setAlign(Alignment.CENTER);
//        formsDiligenciados.setFields(idField);
        
        formsDiligenciados.setWidth(570);
        formsDiligenciados.setHeight("80%");
        
        
        IButton botonConsultar = new IButton(VariablesGenerales.ETIQUETAS.botonConsultar());
        botonConsultar.addClickHandler(new ClickHandler() {
            @Override
            public void onClick(ClickEvent event) {
                
                DataSource.get("diligenciamiento").fetchData(new Criteria("id_diligenciamiento", formsDiligenciados.getSelectedRecord().getAttributeAsString("idFormDilig")), new DSCallback() {
                    @Override
                    public void execute(DSResponse response, Object rawData, DSRequest request) {
                        
//                     
                        new MotorRenderizacion(response.getData()[0].getAttributeAsInt("id_formulario"),response.getData()[0].getAttributeAsInt("id_diligenciamiento"));
                    }
                });
                
            }
        });
        
       layout.addMembers(titulo7,formsDisponibles );
       layout2.addMembers(titulo8,formsDiligenciados, botonConsultar);
       addMember(layout);
       addMember(layout2);
       
    }
}
