/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package net.sigpue.client.trazabilidadproyectos;

import com.google.gwt.resources.css.ast.CssProperty;
import com.smartgwt.client.data.DataSource;
import com.smartgwt.client.types.Alignment;
import com.smartgwt.client.types.VerticalAlignment;
import com.smartgwt.client.util.SC;
import com.smartgwt.client.widgets.ImgButton;
import com.smartgwt.client.widgets.Label;
import com.smartgwt.client.widgets.events.ClickEvent;
import com.smartgwt.client.widgets.events.ClickHandler;
import com.smartgwt.client.widgets.form.DynamicForm;
import com.smartgwt.client.widgets.form.fields.SelectItem;
import com.smartgwt.client.widgets.form.fields.TextAreaItem;
import com.smartgwt.client.widgets.form.fields.TextItem;
import com.smartgwt.client.widgets.form.fields.events.ChangeEvent;
import com.smartgwt.client.widgets.form.fields.events.ChangeHandler;
import com.smartgwt.client.widgets.form.fields.events.ChangedEvent;
import com.smartgwt.client.widgets.form.fields.events.ChangedHandler;
import com.smartgwt.client.widgets.form.fields.events.EditorEnterEvent;
import com.smartgwt.client.widgets.form.fields.events.EditorEnterHandler;
import com.smartgwt.client.widgets.form.fields.events.EditorExitEvent;
import com.smartgwt.client.widgets.form.fields.events.EditorExitHandler;
import com.smartgwt.client.widgets.layout.HLayout;
import com.smartgwt.client.widgets.layout.VLayout;
import net.sigpue.client.VariablesGenerales;

/**
 *
 * @author jduran
 */
public class EvaluacionIdea extends VLayout
{
    DynamicForm evaluacion =new DynamicForm();
    TextItem evaluador=new TextItem("evaluador","Evaluador");
    TextItem ponderacionmercadoPotencial=new TextItem("ponderacionmercadopot","X 0.15=");
    TextItem codigoIdea=new TextItem("id_proyecto","Codigo Idea");
    TextItem intensidadCompetitiva=new TextItem("intensidadcompetitividad","Intensidad Competitiva y Diferenciación");
    TextItem factoresClaves=new TextItem("factoresclavesexito","Factores Claves de Exíto");
    TextItem mercadoPotencial=new TextItem("mercadopotencial","Merdado Potencial");
    TextItem ponderacionfactoresClaves=new TextItem("ponderacionfactoresclavesexito","X 0.15=");
    TextItem sistemaNegocio=new TextItem("sistemanegocio","Sistema del Negocio");
    TextItem ponderacionintensidadCompetitiva=new TextItem("ponderacionintensidadcompe","X 0.15=");
    TextItem nombreEquipo=new TextItem("nombreequipo","Nombre Equipo");
    TextItem ponderacionsistemaNegocio=new TextItem("ponderacionsistemanegocio","X 0.15=");
    TextItem viabilidadImplementacion=new TextItem("viabilidadimplementacion","Viabilidad de Implementacion");
    TextItem experticeEquipo=new TextItem("experticedelequipo","Expertice del Equipo");
    TextItem notaPonderada=new TextItem("puntajefinal","Puntaje Total");
    SelectItem tipoEvaluacion =new SelectItem("id_tipoevaluacion", "Tipo Evaluacion");
    TextItem ponderacionexperticeEquipo=new TextItem("ponderacionexperticeequipo","X 0.15=");
    TextAreaItem fortalezas=new TextAreaItem("fortalezas","Fortalezas");
    TextAreaItem aspectosVarios=new TextAreaItem("aspectosvarios","Aspectos a Mejorar");
    TextAreaItem debilidades=new TextAreaItem("debilidades","Debilidades");
    TextItem ponderacionviabilidadImplementacion=new TextItem("ponderacionviabilidadimplemen","X 0.15=");
    double variable;
    double Ponderado1;
    double Ponderado2;
    double Ponderado3;
    double Ponderado4;
    double Ponderado5;
    double Ponderado6;
    double constante=0.15;
    double ponderadofinal=0;
    Label tituloevaluacion;
    ImgButton guardar = new ImgButton();
    ImgButton siguiente = new ImgButton();
    VLayout center=new VLayout();
    HLayout titulo=new HLayout();
    HLayout botones=new HLayout();
    HLayout formlayout=new HLayout();
    
    public EvaluacionIdea()
    {
     pintarForm();
    }
    public void pintarForm()
    {
        DataSource ds=new DataSource();
        ds=DataSource.get("evaluacion");
        
        setWidth("100%");
        setHeight("100%");
        
        titulo.setHeight("70%");
        titulo.setWidth("70%");
        titulo.setLayoutAlign(Alignment.CENTER);
        
        center.setWidth("70%");
        center.setHeight("70%");
        
        tituloevaluacion=new Label(); 
        tituloevaluacion.setContents("<H1><center>"+VariablesGenerales.ETIQUETAS.labelEvaluacion()+"</center></H1>");
        tituloevaluacion.setStyleName("sc-navigationbar");
        tituloevaluacion.setMargin(10);
        tituloevaluacion.setHeight(5);
        tituloevaluacion.setWidth("100%");
        
        titulo.addMember(tituloevaluacion);
        
        evaluacion = new DynamicForm();
        evaluacion.setNumCols(4);
        evaluacion.setMargin(5);
        evaluacion.setDataSource(ds);
        evaluacion.setAlign(Alignment.CENTER);
//        Evaluacion.setDisabled(true);
        
        codigoIdea.setMask("###########");
        codigoIdea.setWrapTitle(false);
        
        nombreEquipo.setMask("LLLLLLLLLLLLLLLLLLLLLL");
        nombreEquipo.setWrapTitle(false);
        
        evaluador.setMask("LLLLLLLLLLLLLLLLLLLLLL");
        evaluador.setWrapTitle(false);
        
        mercadoPotencial.setMask("CCCC");
        mercadoPotencial.setWrapTitle(false);
        mercadoPotencial.setWidth(30);
        mercadoPotencial.addEditorExitHandler(new EditorExitHandler() {

            @Override
            public void onEditorExit(EditorExitEvent event)
            {
                 calculos1();
                 notaFinal();
            }
        });

        ponderacionmercadoPotencial.setMask("CCCC");
        ponderacionmercadoPotencial.setWrapTitle(false);
        ponderacionmercadoPotencial.setWidth(30);
        ponderacionmercadoPotencial.setDisabled(true);
        
        intensidadCompetitiva.setMask("CCCC");
        intensidadCompetitiva.setWrapTitle(false);
        intensidadCompetitiva.setWidth(30);
        intensidadCompetitiva.addEditorExitHandler(new EditorExitHandler() {

            @Override
            public void onEditorExit(EditorExitEvent event)
            {
                calculos2();
                notaFinal();
            }
        });
       
        ponderacionintensidadCompetitiva.setMask("CCCC");
        ponderacionintensidadCompetitiva.setWrapTitle(false);
        ponderacionintensidadCompetitiva.setWidth(30);
        ponderacionintensidadCompetitiva.setDisabled(true);
        
        factoresClaves.setMask("CCCC");
        factoresClaves.setWrapTitle(false);
        factoresClaves.setWidth(30);
        factoresClaves.addEditorExitHandler(new EditorExitHandler() {

            @Override
            public void onEditorExit(EditorExitEvent event)
            {
                calculos3();
                notaFinal();
            }
        });
        
        ponderacionfactoresClaves.setMask("CCCC");
        ponderacionfactoresClaves.setWrapTitle(false);
        ponderacionfactoresClaves.setWidth(30);
        ponderacionfactoresClaves.setDisabled(true);
        
        sistemaNegocio.setMask("CCCC");
        sistemaNegocio.setWrapTitle(false);
        sistemaNegocio.setWidth(30);
        sistemaNegocio.addEditorExitHandler(new EditorExitHandler() {

            @Override
            public void onEditorExit(EditorExitEvent event)
            {
               calculos4();
               notaFinal();
            }
        });
        
        ponderacionsistemaNegocio.setMask("CCCC");
        ponderacionsistemaNegocio.setWrapTitle(false);
        ponderacionsistemaNegocio.setWidth(30);
        ponderacionsistemaNegocio.setDisabled(true);
        
        viabilidadImplementacion.setMask("CCCC");
        viabilidadImplementacion.setWrapTitle(false);
        viabilidadImplementacion.setWidth(30);
        viabilidadImplementacion.addEditorExitHandler(new EditorExitHandler() {

            @Override
            public void onEditorExit(EditorExitEvent event)
            {
                calculos5();
                notaFinal();
            }
        });
        
        ponderacionviabilidadImplementacion.setMask("CCCC");
        ponderacionviabilidadImplementacion.setWrapTitle(false);
        ponderacionviabilidadImplementacion.setWidth(30);
        ponderacionviabilidadImplementacion.setDisabled(true);
        
        experticeEquipo.setMask("CCCC");
        experticeEquipo.setWrapTitle(false);
        experticeEquipo.setWidth(30);
        experticeEquipo.addEditorExitHandler(new EditorExitHandler() {

            @Override
            public void onEditorExit(EditorExitEvent event)
            {
                calculos6();
                notaFinal();
            }
        });
        
        ponderacionexperticeEquipo.setMask("CCCC");
        ponderacionexperticeEquipo.setWrapTitle(false);
        ponderacionexperticeEquipo.setWidth(30);
        ponderacionexperticeEquipo.setDisabled(true);
        
        
        notaPonderada.setMask("CCCC");
        notaPonderada.setWrapTitle(false);
        notaPonderada.setWidth(30);
        notaPonderada.setDisabled(true);
        
        
        fortalezas.setLength(512);
        fortalezas.setWrapTitle(false);
        
        debilidades.setLength(512);
        debilidades.setWrapTitle(false);
        
        aspectosVarios.setLength(512);
        aspectosVarios.setWrapTitle(false);
        
        tipoEvaluacion.setOptionDataSource(DataSource.get("tipo_evaluac"));
        tipoEvaluacion.setDisplayField("nombre_tipoevaluacion");
        tipoEvaluacion.setValueField("id_tipoevaluacion");
        tipoEvaluacion.setWrapTitle(false);
        
        evaluacion.setFields(codigoIdea,nombreEquipo,evaluador,tipoEvaluacion,mercadoPotencial,ponderacionmercadoPotencial,intensidadCompetitiva,ponderacionintensidadCompetitiva,factoresClaves,ponderacionfactoresClaves,sistemaNegocio,ponderacionsistemaNegocio,viabilidadImplementacion,ponderacionviabilidadImplementacion,experticeEquipo,ponderacionexperticeEquipo,notaPonderada,fortalezas,debilidades,aspectosVarios);
    
        guardar = new ImgButton();
        guardar.setValign(VerticalAlignment.TOP);
        guardar.setAlign(Alignment.RIGHT);
        guardar.setHeight(36);
        guardar.setWidth(36);
        guardar.setSrc("Save.png");
        guardar.setTooltip("Guardar");
        guardar.addClickHandler(new ClickHandler() {

            @Override
            public void onClick(ClickEvent event)
            {
                if(evaluacion.validate())
                { 
                   evaluacion.saveData();
                   evaluacion.editNewRecord();
                   evaluacion.setDisabled(true);
                   SC.say("la informacion de evaluacion ha sido almacenado satisfactoriamente");
                
                }
            }
        });


        siguiente = new ImgButton();
        siguiente.setValign(VerticalAlignment.TOP);
        siguiente.setAlign(Alignment.RIGHT);
        siguiente.setHeight(36);
        siguiente.setWidth(36);
        siguiente.setSrc("Next.png");
        siguiente.setTooltip("Pasar a Siguiente Etapa");
        siguiente.setVisible(false);
        siguiente.addClickHandler(new ClickHandler() {

            @Override
            public void onClick(ClickEvent event)
            {
              
               TrazabilidadProyectos traza =new TrazabilidadProyectos();
               traza.investigacion.setDisabled(false);
            }
        });
       
        
        botones.setAutoHeight();
        botones.setAutoWidth();
        botones.setLayoutAlign(Alignment.CENTER);
        botones.setMembersMargin(10);
        botones.addMembers(guardar, siguiente);
        
        
        formlayout.addMember(evaluacion);
       
        center.setLayoutAlign(Alignment.CENTER);
        center.addMembers(titulo,formlayout,botones);
    
        addMember(center);
    }
    
    
    public void calculos1()
    {
        variable=Double.parseDouble(mercadoPotencial.getValueAsString());
        Ponderado1=Double.parseDouble(String.valueOf(variable*constante));
        ponderacionmercadoPotencial.setValue(Ponderado1);
        
    }
      public void calculos2()
    {
        variable=Double.parseDouble(intensidadCompetitiva.getValueAsString());
        Ponderado2=Double.parseDouble(String.valueOf(variable*constante));
        ponderacionintensidadCompetitiva.setValue(Ponderado2);
        
    }
    
      public void calculos3()
    {
        variable=Double.parseDouble(factoresClaves.getValueAsString());
        Ponderado3=Double.parseDouble(String.valueOf(variable*constante));
        ponderacionfactoresClaves.setValue(Ponderado3);
        
    }
   
      public void calculos4()
    {
        variable=Double.parseDouble(sistemaNegocio.getValueAsString());
        Ponderado4=Double.parseDouble(String.valueOf(variable*constante));
        ponderacionsistemaNegocio.setValue(Ponderado4);
        
    }
     
      public void calculos5()
    {
        variable=Double.parseDouble(viabilidadImplementacion.getValueAsString());
        Ponderado5=Double.parseDouble(String.valueOf(variable*constante));
        ponderacionviabilidadImplementacion.setValue(Ponderado5);
        
    }
     
      public void calculos6()
    {
        variable=Double.parseDouble(experticeEquipo.getValueAsString());
        Ponderado6=Double.parseDouble(String.valueOf(variable*constante));
        ponderacionexperticeEquipo.setValue(Ponderado6);
        
    }
    
     public void notaFinal()
     {
        double suma=0;
        
        suma=(Ponderado1+Ponderado2+Ponderado3+Ponderado4+Ponderado5+Ponderado6);     
        ponderadofinal=suma;
        notaPonderada.setValue(ponderadofinal);
        if(ponderadofinal>=7.0)
        {
            siguiente.setVisible(true);
        }
        else
        {
            siguiente.setVisible(false);
            
        }
     } 
      
}