/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package net.sigpue.client.gestorformularios;


import com.smartgwt.client.widgets.Canvas;
import com.smartgwt.client.widgets.IButton;
import com.smartgwt.client.widgets.Label;
import com.smartgwt.client.widgets.events.ClickHandler;
import com.smartgwt.client.widgets.grid.ListGridField;
import com.smartgwt.client.widgets.layout.HLayout;
import com.smartgwt.client.widgets.layout.VStack;
import net.sigpue.client.VariablesGenerales;
import net.cltech.lib.client.controls.dragList.CLDragList;

public class ModuloFormularios
{

    public int idform;
    private CLDragList auxDragList;
    private Label titulo;

    public ModuloFormularios()
    {
    }

    public Canvas CrearPanelRolForm()
    {

        
        titulo = new Label();
        titulo.setAlign(com.smartgwt.client.types.Alignment.CENTER);
        titulo.setContents(VariablesGenerales.ETIQUETAS.tituloRolProyecto());
        titulo.setStyleName("opcionesMenu");
        titulo.setMargin(10);
        titulo.setHeight(5);
        
        
        Canvas canvas = new Canvas();
        canvas.setHeight("100%");
        canvas.setWidth("100%");
        canvas.setMargin(20);
        canvas.setAlign(com.smartgwt.client.types.Alignment.CENTER);

        IButton guardar = new IButton();
        guardar.setTitle(VariablesGenerales.ETIQUETAS.saveButton());
        guardar.addClickHandler(new ClickHandler()
        {

            public void onClick(com.smartgwt.client.widgets.events.ClickEvent event)
            {
                auxDragList.save();
            }
        });

        VStack vStack = new VStack(10);
        vStack.setHeight(300);
        vStack.setWidth(500);


        HLayout botonlayout =new HLayout();
        botonlayout.setAutoHeight();
        botonlayout.setAutoWidth();
        botonlayout.setLayoutAlign(com.smartgwt.client.types.Alignment.CENTER);

        
        setAuxDragList(new CLDragList("rol", "formularioxrol"));
        auxDragList.getLeftList().setShowFilterEditor(Boolean.TRUE);
        auxDragList.getRightList().setShowFilterEditor(Boolean.TRUE);
        getAuxDragList().setHeight(250);
        getAuxDragList().setIdMaster("id_formulario");
        getAuxDragList().setLeftListFields(new ListGridField[]
                {
                    new ListGridField("nombre_rol", VariablesGenerales.ETIQUETAS.rolesdisponibles())
                });
        getAuxDragList().setRighttListFields(new ListGridField[]
                {
                    new ListGridField("nombre_rol", VariablesGenerales.ETIQUETAS.rolesasociados())
                });

        botonlayout.addMember(guardar);
        vStack.addMember(titulo);
        vStack.addMember(getAuxDragList());
        vStack.addMember(botonlayout);
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
