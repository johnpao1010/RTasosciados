/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package net.sigpue.client;

import com.google.gwt.core.client.GWT;
import com.smartgwt.client.types.AnimationEffect;

/**
 *
 * @author jlozano
 */
public class VariablesGenerales {
    public static final Etiquetas ETIQUETAS = (Etiquetas) GWT.create(Etiquetas.class);
    public static final AnimationEffect EFECTO_POR_DEFECTO = AnimationEffect.FLY;
    public static final int DEFAULT_SHADOW_SOFTNESS = 10;
    public static final int DEFAULT_SHADOW_OFFSET = 5;
}
