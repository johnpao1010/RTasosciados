package net.sigpue.server.informe;

/**
 * Implementación para parametro del paseador XML para manejo de Reportes del SIGPMA
 * Contiene la implementación de los métodos
 * @version 1.0, 2011
 * @author Ing. de la Peña
 * @author Amilcar Rojas
 *
 */

public class Parameter
{
    private int id;
    private String label;
    private String name;
    private String value;
    private String type;
    private boolean Required;

    public boolean isRequired()
    {
        return Required;
    }

    public void setRequired(boolean Required)
    {
        this.Required = Required;
    }

    public String getType()
    {
        return type;
    }

    public void setType(String type)
    {
        this.type = type;
    }

    public int getId()
    {
        return id;
    }

    public void setId(int id)
    {
        this.id = id;
    }

    public String getLabel()
    {
        return label;
    }

    public void setLabel(String label)
    {
        this.label = label;
    }

    public String getName()
    {
        return name;
    }

    public void setName(String name)
    {
        this.name = name;
    }

    public String getValue()
    {
        return value;
    }

    public void setValue(String value)
    {
        this.value = value;
    }
}
