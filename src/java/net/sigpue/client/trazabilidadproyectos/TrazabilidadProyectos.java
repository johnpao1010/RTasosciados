/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package net.sigpue.client.trazabilidadproyectos;

import com.smartgwt.client.types.Side;  
import com.smartgwt.client.widgets.Img;  
import com.smartgwt.client.widgets.Label;
import com.smartgwt.client.widgets.layout.HLayout;
import com.smartgwt.client.widgets.layout.VLayout;  
import com.smartgwt.client.widgets.tab.Tab;  
import com.smartgwt.client.widgets.tab.TabSet;
import net.sigpue.client.VariablesGenerales;
/**
 *
 * @author jduran
 */
public class TrazabilidadProyectos extends VLayout
{
     private TabSet topTabSet;
     private Tab idea;

     public Tab investigacion;
     private Tab desarrollo;
     private Tab comercializacion;
     private Label titulo;        
  
   public TrazabilidadProyectos()
   {
        
        titulo=new Label(); 
        titulo.setAlign(com.smartgwt.client.types.Alignment.CENTER);
        titulo.setContents("<H1><center>"+VariablesGenerales.ETIQUETAS.trazabilidadProyectos()+"</center></H1>");
        titulo.setStyleName("sc-navigationbar");
        titulo.setHeight(5);
       
        topTabSet = new TabSet();
        topTabSet.setTabBarAlign(Side.TOP);
        topTabSet.setWidth("100%");  
        topTabSet.setHeight("100%"); 
  
        idea = new Tab("Etapa 1: Idea de Negocio", "ideasdenego.png");
        idea.setPane(new EvaluacionIdea());
        
        investigacion = new Tab("Etapa 2: Investigacion", "investigacion.png");  
        investigacion.setDisabled(true);
        
        desarrollo = new Tab("Etapa 3: Desarrollo Proyecto", "desarrollo.png");  
        desarrollo.setDisabled(true);
       
        comercializacion = new Tab("Etapa 4: Comercialización", "comercialización.png");  
        comercializacion.setDisabled(true);
        
        topTabSet.addTab(idea);  
        topTabSet.addTab(investigacion);  
        topTabSet.addTab(desarrollo);  
        topTabSet.addTab(comercializacion);  
        
        setMembersMargin(15); 
        addMember(titulo);
        addMember(topTabSet);  
  
   }
   public TabSet getTopTabSet()
    {
        return topTabSet;
    }

    public void setTopTabSet(TabSet topTabSet)
    {
        this.topTabSet = topTabSet;
    }

    public Tab getIdea()
    {
        return idea;
    }

    public void setIdea(Tab idea)
    {
        this.idea = idea;
    }

    public Tab getInvestigacion()
    {
        return investigacion;
    }

    public void setInvestigacion(Tab investigacion)
    {
        this.investigacion = investigacion;
    }

    public Tab getDesarrollo()
    {
        return desarrollo;
    }

    public void setDesarrollo(Tab desarrollo)
    {
        this.desarrollo = desarrollo;
    }

    public Tab getComercializacion()
    {
        return comercializacion;
    }

    public void setComercializacion(Tab comercializacion)
    {
        this.comercializacion = comercializacion;
    }

    public Label getTitulo()
    {
        return titulo;
    }

    public void setTitulo(Label titulo)
    {
        this.titulo = titulo;
    }
}
