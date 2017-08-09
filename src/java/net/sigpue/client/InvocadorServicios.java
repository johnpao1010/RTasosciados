/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package net.sigpue.client;

import com.google.gwt.core.client.GWT;

/**
 *
 * @author jlozano
 */
public class InvocadorServicios {
    public static ServicioSigpueAsync getServicio() {
        return GWT.create(ServicioSigpue.class);
    }
}
