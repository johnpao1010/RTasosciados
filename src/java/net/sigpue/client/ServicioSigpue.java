/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package net.sigpue.client;

import com.google.gwt.user.client.rpc.RemoteService;
import com.google.gwt.user.client.rpc.RemoteServiceRelativePath;
import java.util.HashMap;
import java.util.ArrayList;
import net.sigpue.client.data.Result;

/**
 *
 * @author jduran
 */
@RemoteServiceRelativePath("serviciosigpue")
public interface ServicioSigpue extends RemoteService
{

    public InformacionUsuario getSesionUsuario();

    public InformacionUsuario validarCredenciales(Boolean inicial);

    public Boolean cerrarSesion(InformacionUsuario usuario);

    public Boolean destruirSesionUsuario();
    
    public Integer insertaDiligenciamientoFormulario(Integer idUsuario, Integer idFormulario, Integer idInstitucion);

    public Boolean insertaRespuestas(HashMap<String, String> valoresMap, Integer idFormDilig, Integer idUsuario);

     public Boolean registroAlarmas(String tipoAlarma, String alarma, String textoAlarma);

    
    
}
