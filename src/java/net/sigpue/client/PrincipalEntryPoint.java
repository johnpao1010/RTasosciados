/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package net.sigpue.client;

import com.google.gwt.core.client.EntryPoint;
import com.google.gwt.event.logical.shared.ResizeEvent;
import com.google.gwt.event.logical.shared.ResizeHandler;
import com.google.gwt.user.client.rpc.AsyncCallback;
import com.google.gwt.user.client.ui.RootPanel;
import com.smartgwt.client.core.Function;
import com.smartgwt.client.data.DataSource;
import com.smartgwt.client.util.SC;
import com.smartgwt.client.util.BooleanCallback;

/**
 * Main entry point.
 *
 * @author juran
 */
public class PrincipalEntryPoint implements EntryPoint {

    /**
     * Creates a new instance of PrincipalEntryPoint
     */
    public PrincipalEntryPoint() {
    }

    /**
     * The entry point method, called automatically by loading a module that
     * declares an implementing class as an entry-point
     */
    public void onModuleLoad() {
        com.google.gwt.user.client.Window.enableScrolling(false);
        final VentanaCargando vc = new VentanaCargando();
        vc.mostrar();
        InvocadorServicios.getServicio().getSesionUsuario(new AsyncCallback<InformacionUsuario>() {
            @Override
            public void onFailure(Throwable caught) {
                vc.ocultar();
                SC.say(VariablesGenerales.ETIQUETAS.errorInesperado());
            }

            @Override
            public void onSuccess(final InformacionUsuario result) {
//                    History.newItem("main");
//                    History.addValueChangeHandler(new WindowsHandler(result));
//                    History.fireCurrentHistoryState();
                if (result != null) {
                    String[] dataSourceList = {"agenda","archivo","amparoafectado","archivo_casoaccidente","consultarVariadas","areadesarrollo_x_proyecto","areadesarrolloproyec","aseguradora","asesoria","calificacion","casoaccidente", "ciudad","claseproceso", "convocatoria", 
                        "convocatoria_x_proyecto", "curso", "departamento","diligenciamiento","dominio", "estado","estadofacturacion","estadoproyecto","estructuraarbol", "etapa_proyect",
                        "etapaproyecto_x_proyecto","evaluacion","facturacion","fiscalia","formulario","formularioxrol", "funcionalidad","funcionalidad_rol","juzgado", "genero","lineaproyecto","marcavehiculo","municipio", "noticia","ocupacion", "ocupacion_x_usuario","pregunta",
                        "profesion", "proyecto","respuesta_formulario", "rol","rolxusuario","rol_usuario" ,"rolxfuncionalidad","seccion","seguimientocaso","tab",
                        "tipo_control", "tipo_curso","tipodominio","tipo_formula","tipoaccidente","tipoasistencia","tipochoque","tipoproceso","tiposervicio","tipovehiculo", "tipo_evaluac", "tipoiden","usuario", "usuarioxcurso"};
                  
                    DataSource.load(dataSourceList, new Function() {
                        public void execute() {
                            try {
                                new Encabezado(result);
                                new EstructuraPrincipal(result);
                                vc.ocultar();
                            } catch (Exception ex) {
                                vc.ocultar();
                                com.google.gwt.user.client.Window.alert(ex.toString());
                            }
                        }
                    }, true);
                } else {
                    InvocadorServicios.getServicio().validarCredenciales(true, new AsyncCallback<InformacionUsuario>() {
                        @Override
                        public void onFailure(Throwable caught) {
                            vc.ocultar();
                            SC.say(VariablesGenerales.ETIQUETAS.errorInesperado());
                        }

                        @Override
                        public void onSuccess(InformacionUsuario result) {
                            vc.ocultar();
                            if (result != null) {
                                com.google.gwt.user.client.Window.Location.replace(com.google.gwt.user.client.Window.Location.getProtocol() + "//" + com.google.gwt.user.client.Window.Location.getHost() + "/sigpue/index.html?locale=es");
                            } else {
                                SC.say(VariablesGenerales.ETIQUETAS.credencialesInvalidas(), new BooleanCallback() {
                                    @Override
                                    public void execute(Boolean value) {
                                        com.google.gwt.user.client.Window.Location.replace(com.google.gwt.user.client.Window.Location.getProtocol() + "//" + com.google.gwt.user.client.Window.Location.getHost() + "/sigpue/login.html?locale=es");
                                    }
                                });
                            }
                        }
                    });
                }
            }
        });
    }
}
