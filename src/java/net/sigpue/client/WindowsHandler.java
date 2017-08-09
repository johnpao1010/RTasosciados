/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package net.sigpue.client;

import com.google.gwt.event.logical.shared.ValueChangeEvent;
import com.google.gwt.event.logical.shared.ValueChangeHandler;

/**
 *
 * @author nmarmolejo
 */
public class WindowsHandler implements ValueChangeHandler<String> {

    private InformacionUsuario usuario;

    public WindowsHandler(InformacionUsuario usuario) {
        this.usuario = usuario;
    }

    @Override
    public void onValueChange(ValueChangeEvent<String> event) {
        if (event.getValue().equals("main")) {
            DespachadorLienzo.despachar(0, usuario);
        } else {
            if (!event.getValue().equals("login")) {
                DespachadorLienzo.despachar(Integer.parseInt(event.getValue().substring(6)), usuario);
            }
        }

    }
}
