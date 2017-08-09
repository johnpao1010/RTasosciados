package net.sigpue.server.informes.filtros;

/**
 * Implementación para parametro del paseador XML para manejo de Filtros del PAU
 * Contiene la implementación de los métodos
 * @version 1.0, 2012
 * @author Ing. de la Peña
 *
 */

public class Criterion
{
    private int id;
    private String name;
    private String reporteId;

    public int getId()
    {
        return id;
    }

    public void setId(int id)
    {
        this.id = id;
    }

    public String getName()
    {
        return name;
    }

    public void setName(String name)
    {
        this.name = name;
    }

    public String getReporteId()
    {
        return reporteId;
    }

    public void setReporteId(String reporteId)
    {
        this.reporteId = reporteId;
    }
}
