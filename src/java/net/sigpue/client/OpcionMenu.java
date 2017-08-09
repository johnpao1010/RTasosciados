/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package net.sigpue.client;

import com.smartgwt.client.types.Cursor;
import com.smartgwt.client.widgets.Label;
import com.smartgwt.client.widgets.Window;
import com.smartgwt.client.widgets.events.ClickEvent;
import com.smartgwt.client.widgets.events.ClickHandler;
import com.smartgwt.client.widgets.layout.HLayout;
import com.smartgwt.client.widgets.layout.HStack;
import net.sigpue.client.gestorconvocatorias.Convocatorias;
import net.sigpue.client.maestros.InterfazMaestros;
import net.sigpue.client.maestros.Tipo_dominio;
import net.sigpue.client.maestros.Dominio;
import net.sigpue.client.maestros.Usuario;
import net.sigpue.client.maestros.Rol;
import net.sigpue.client.maestros.Linea_proyecto;
import net.sigpue.client.maestros.Area_desarrollo;
import net.sigpue.client.maestros.Curso;
import net.sigpue.client.maestros.Tipo_Accidente;
import net.sigpue.client.maestros.Ocupacion;
import net.sigpue.client.maestros.Tipo_alarma;
import net.sigpue.client.maestros.Ciudad;
import net.sigpue.client.maestros.Departamento;
import net.sigpue.client.maestros.Etapa_proyecto;
import net.sigpue.client.maestros.Profesion;
import net.sigpue.client.maestros.Tipo_evaluacion;
import net.sigpue.client.maestros.Tipo_formulario;

/**
 *
 * @author jduran
 */
public class OpcionMenu extends Label {

    public static InterfazMaestros maestro = null;
   int reentrada=1;

    public OpcionMenu(final int codigo, String texto, final HLayout hStack,String image) {
        super(texto);
        setCursor(Cursor.HAND);
        setIcon("config/"+image);
        setIconHeight(24);
        setIconWidth(24);
        setWidth(180);
        setHeight(25);
        addClickHandler(new ClickHandler() {
            @Override
            public void onClick(ClickEvent event) {
                if (Menu.configActual != null) {
                    Menu.configActual.destroy();
                }
                if (maestro != null) {
                    hStack.removeMember(maestro.getMaestro());
                }
                switch (codigo) {
                    case 1://Tipo curso
                        maestro = new Tipo_Accidente();
                        break;
//                    case 2://Tipo identificación
//                        maestro = new Tipo_identificacion();
//                        break;
//                    case 3://Género
//                        maestro = new Genero();
//                        break;
                    case 4://Ciudad
                        maestro = new Ciudad();
                        break;
                    case 5://Departamento
                        maestro = new Departamento();
                        break;
                    case 6://Tipo dominio
                        maestro = new Tipo_dominio();
                        break;
                    case 7://Dominio
                        maestro = new Dominio();
                        break;
                    case 8://linea proyecto
                        maestro = new Linea_proyecto();
                        break;
                    case 9://Area desarrollo
                        maestro = new Area_desarrollo();
                        break;
                    case 10://ocupacion
                        maestro = new Ocupacion();
                        break;
                    case 11://Tipo alarma
                        maestro = new Tipo_alarma();
                        break;
//                    case 13://Tipo control
//                        maestro = new Tipo_control();
//                        break;
                    case 14://Tipo formulario
                        maestro = new Tipo_formulario();
                        break;
                    case 15://Tipo evaluacion
                        maestro = new Tipo_evaluacion();
                        break;
                    case 16://etapa proyecto
                        maestro = new Etapa_proyecto();
                        break;
                    
                    case 17://Usuarios
                        
                        maestro = new Usuario();
                        break;
                    case 18://Roles
                        maestro = new Rol();
                        break;
//                    case 19://Funcionalidad
//                        maestro = new Funcionalidad();
//                        break;
//                    case 20://Informacion complemantaria
//                        maestro = new infocompleusuario();
//                        break;
                    case 21://curso
                        maestro = new Curso();
                        break;
                        
                    case 22://curso
                        maestro = new Profesion();
                        break;    
                }
             
             hStack.addMember(maestro.getMaestro());
              
            }
        });
    }
}
