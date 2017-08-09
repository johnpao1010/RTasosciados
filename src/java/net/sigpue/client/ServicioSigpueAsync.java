/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package net.sigpue.client;

import com.google.gwt.user.client.rpc.AsyncCallback;
import java.util.HashMap;
import java.util.ArrayList;
import net.sigpue.client.data.Result;

/**
 *
 * @author jduran
 */
public interface ServicioSigpueAsync
{

    public void validarCredenciales(Boolean inicial, AsyncCallback<InformacionUsuario> callback);

    public void getSesionUsuario(AsyncCallback<InformacionUsuario> callback);

    public void destruirSesionUsuario(AsyncCallback<Boolean> asyncCallback);

    public void cerrarSesion(InformacionUsuario usuario, AsyncCallback<Boolean> callback);

    public void insertaDiligenciamientoFormulario(Integer idUsuario, Integer idFormulario, Integer idInstitucion, AsyncCallback<Integer> asyncCallback);

    public void insertaRespuestas(HashMap<String, String> valoresMap, Integer idFormDilig, Integer idUsuario, AsyncCallback<Boolean> asyncCallback);

   public void registroAlarmas(String tipoAlarma, String alarma, String textoAlarma, AsyncCallback<Boolean> asyncCallback);



}
