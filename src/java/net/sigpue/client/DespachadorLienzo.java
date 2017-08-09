/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package net.sigpue.client;

import com.smartgwt.client.data.Record;
import com.smartgwt.client.widgets.Canvas;
import net.sigpue.client.gestioncasosaccidentes.Asesorias;
import net.sigpue.client.gestorconvocatorias.Convocatorias;
import net.sigpue.client.gestorformularios.FormulariosCreadosVA;
import net.sigpue.client.gestorformularios.FormulariosCreadosVU;
import net.sigpue.client.gestorformularios.FormulariosDiligenciados;
import net.sigpue.client.gestorformularios.PersonalizacionMainTabs;
import net.sigpue.client.gestorinscripcionescursos.InscripcionesCursos;
import net.sigpue.client.gestorproyectos.GestionarProyectos;
import net.sigpue.client.trazabilidadproyectos.TrazabilidadProyectos;
//import net.cltech.hemovigilancia.client.ofertaydemanda.Asesorias;
import net.sigpue.client.utilidades.UtilidadesMainTabs;

/**
 *
 * @author jduran
 */
public class DespachadorLienzo {

    public static Canvas actual = null;

    public static Canvas despachar(int codigo, InformacionUsuario usuario) 
    {
        VariablesSesion.usuario=usuario; 
        //InvocadorServicios.getServicio().registrarAccion("Ingreso a la opción número " + codigo, null);
        
        switch (codigo) 
        {
            case 0://
                EstructuraPrincipal.desseleccionarBotones();
                break;
            case 1://Reportes
                actual = new GestionarProyectos();
                break;
            case 2://Consolidado reportes
                 actual = new Convocatorias();
                break;
            case 3://Hemovigilancia
                actual = new FormulariosCreadosVU();
                break;
            case 4:
                actual = new FormulariosDiligenciados();
                break;
            case 5:
//              EstructuraPrincipal.canvasPrincipal.removeMembers(EstructuraPrincipal.canvasPrincipal.getMembers());
                if (actual != null) {
                    actual.removeChild(actual);
                }
                actual = new Asesorias();
                break;
           
            case 6:
                     if (actual != null)
                     {
                    actual.destroy();
                     }
                    actual = new TrazabilidadProyectos();   
                
                //actual = new Diferidos();
                break;
//            case 7://Insecripcion a Cursos
//                
//                   actual = new InscripcionesCursos(); 
//                break;
          
//            case 8://Auditoría
////                final HTMLPane htmlPane2 = new HTMLPane();
////                htmlPane2.setContentsURL("Col3D3.html");
////                htmlPane2.setContentsType(ContentsType.PAGE);
////                htmlPane2.setWidth100();
////                htmlPane2.setHeight100();
////                actual = htmlPane2;
////                actual = new FormulariosCreadosVA();
//                break;
//            case 9://Personalización
//                actual = new PersonalizacionMainTabs().CreatePersonalizacionMainTabs();
//                break;
//            case 9://Utilidades
////                actual = new Utilidades();
//                break;
//            case 10://Configuración
////                 actual = new PersonalizacionMainTabs().CreatePersonalizacionMainTabs();
//////                new AcercaDe();
//                break;
        
            case 7://Configuración
                 actual = new PersonalizacionMainTabs().CreatePersonalizacionMainTabs();
//                new AcercaDe();
                break;
        }
        if (codigo != 0) {
            EstructuraPrincipal.botones[codigo - 1].setSrc("botones/" + "btn_1_press" + ".png");
//            EstructuraPrincipal.botones[codigo - 1].setTitleStyle("opcionesMenuSub");
        }
//        History.newItem("opcion"+codigo);
        return actual;
    }
}
