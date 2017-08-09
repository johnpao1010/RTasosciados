package net.sigpue.client.data;

/**
 * Respuesta de llamados RPC
 * Define la descripción, el estado y la fuente de Datos (Json)
 * 
 * Smart GWT (GWT for SmartClient)
 * Copyright 2008 and beyond, Isomorphic Software, Inc.
 * GNU Lesser General Public License version 3
 *
 * @version 1.0, 2011
 * @author Ing. de la Peña
 * @author Amilcar Rojas
 *
 */

import java.io.Serializable;

public class Result implements Serializable
{

    private boolean estado;
    private String descripcion;
    private String Json;

    public String getJson()
    {
        return Json;
    }

    public void setJson(String Json)
    {
        this.Json = Json;
    }

    public String getDescripcion()
    {
        return descripcion;
    }

    public void setDescripcion(String descripcion)
    {
        this.descripcion = descripcion;
    }

    public boolean isEstado()
    {
        return estado;
    }

    public void setEstado(boolean estado)
    {
        this.estado = estado;
    }

}
