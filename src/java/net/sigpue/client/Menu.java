/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package net.sigpue.client;

import com.smartgwt.client.types.VerticalAlignment;
import com.smartgwt.client.types.VisibilityMode;
import com.smartgwt.client.widgets.Canvas;
import com.smartgwt.client.widgets.layout.HLayout;
import com.smartgwt.client.widgets.layout.HStack;
import com.smartgwt.client.widgets.layout.SectionStack;
import com.smartgwt.client.widgets.layout.SectionStackSection;
import com.smartgwt.client.widgets.layout.VStack;

/**
 *
 * @author jduran
 */
public class Menu {
    public static Canvas configActual = null;
    public HStack getMenu() {
        
        HLayout principal =new HLayout();
        principal.setWidth("85%");
        principal.setHeight100();
        HStack hStack = new HStack();
        final SectionStack sectionStack = new SectionStack();  
        sectionStack.setVisibilityMode(VisibilityMode.MUTEX);  
        sectionStack.setWidth("15%");
        sectionStack.setHeight100();
        sectionStack.setStyleName("sc-rounded-blue");
        SectionStackSection section1 = new SectionStackSection(VariablesGenerales.ETIQUETAS.demograficos());  
        section1.setExpanded(true);  
//        section1.setAttribute("style", "sc-rounded-blue");
        VStack vStack1 = new VStack();
//        vStack1.setStyleName("sc-rounded-blue");
        VStack vStack2 = new VStack();
        vStack2.addMember(new OpcionMenu(6, VariablesGenerales.ETIQUETAS.tipoDominio(), principal,"gral.ico"));
//        vStack2.setStyleName("sc-rounded-blue");
        VStack vStack3 = new VStack();
//        vStack3.setStyleName("sc-rounded-blue");
        section1.addItem(vStack1);  
       
//        vStack1.addMember(new OpcionMenu(2, VariablesGenerales.ETIQUETAS.TipoIdentificacion(), hStack));
//        vStack1.addMember(new OpcionMenu(3, VariablesGenerales.ETIQUETAS.genero(), hStack));
        vStack1.addMember(new OpcionMenu(4, VariablesGenerales.ETIQUETAS.ciudad(),principal,"City.png"));
        vStack1.addMember(new OpcionMenu(5, VariablesGenerales.ETIQUETAS.departamento(), principal,"Departamento.ico"));
        vStack1.addMember(new OpcionMenu(10, VariablesGenerales.ETIQUETAS.Ocupacion(), principal,"ocupacion.ico"));
        vStack1.addMember(new OpcionMenu(22, VariablesGenerales.ETIQUETAS.profesion(), principal,"profesion.ico"));
        
        vStack2.addMember(new OpcionMenu(6, VariablesGenerales.ETIQUETAS.tipoDominio(), principal,"gral.ico"));
        vStack2.addMember(new OpcionMenu(7, VariablesGenerales.ETIQUETAS.dominio(), principal,"gral.ico"));
        vStack2.addMember(new OpcionMenu(8, VariablesGenerales.ETIQUETAS.LineaProyecto(),principal,"lineaproyecto.ico"));
        vStack2.addMember(new OpcionMenu(9, VariablesGenerales.ETIQUETAS.AreaDesarrollo(), principal,"areadesarrollo.ico"));
        vStack2.addMember(new OpcionMenu(1, "Tipo Accidente", principal,"tipocursos.ico"));
        vStack2.addMember(new OpcionMenu(21, VariablesGenerales.ETIQUETAS.Curso(), principal,"cursos.ico"));
        vStack2.addMember(new OpcionMenu(11, VariablesGenerales.ETIQUETAS.tipoAlarma(),principal,"alarma.ico"));
//        vStack2.addMember(new OpcionMenu(13, VariablesGenerales.ETIQUETAS.tipoControl(), hStack));
        vStack2.addMember(new OpcionMenu(14, VariablesGenerales.ETIQUETAS.tipoformulario(),principal,"tipoformulario.ico"));
        vStack2.addMember(new OpcionMenu(15, VariablesGenerales.ETIQUETAS.tipoEvaluacion(), principal,"tipoevaluacion.ico"));
        vStack2.addMember(new OpcionMenu(16, VariablesGenerales.ETIQUETAS.EtapaProyecto(), principal,"etapaproyecto.ico"));
        
        vStack3.addMember(new OpcionMenu(17, VariablesGenerales.ETIQUETAS.usuario(),principal,"usuario.ico"));
        vStack3.addMember(new OpcionMenu(18, VariablesGenerales.ETIQUETAS.roles(), principal,"roles.ico"));
//        vStack3.addMember(new OpcionMenu(20, VariablesGenerales.ETIQUETAS.informacionComplementaria(),principal,"usuario.ico"));
//        vStack3.addMember(new OpcionMenu(20, VariablesGenerales.ETIQUETAS.rolXFuncionalidad(), hStack));
        
        SectionStackSection section2 = new SectionStackSection(VariablesGenerales.ETIQUETAS.general());  
        section2.setExpanded(false);  
        section2.addItem(vStack2);  
        SectionStackSection section3 = new SectionStackSection(VariablesGenerales.ETIQUETAS.seguridad());  
        section3.setExpanded(false);  
        section3.addItem(vStack3);  
        sectionStack.addSection(section1);  
        sectionStack.addSection(section2);  
        sectionStack.addSection(section3);  
        hStack.addMember(sectionStack);
        hStack.addMember(principal);
        
        return hStack;
    }
}
