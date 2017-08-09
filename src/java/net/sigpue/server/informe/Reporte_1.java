
package net.sigpue.server.informe;

/**
 * Implementación para parseador XML de resporte del SIGPMA
 * Contiene la implementación de los métodos set y get par aun reporte
 * @version 1.0, 2011
 * @author Ing. de la Peña
 * @author Amilcar Rojas
 *
 */

import java.util.ArrayList;
import java.util.List;

public class Reporte_1
{
    private int id;
    private String name;
    private int countParameter;
    private int filterSQL_ID;

    private String patch;
    private List<Parameter>parameters= new ArrayList();;
    

    public int getCountParameter()
    {
        return countParameter;
    }

    public void setCountParameter(int countParameter)
    {
        this.countParameter = countParameter;
    }

    public int getId() {
        return id;
    }

    public void setId(int id)
    {
        this.id = id;
    }

     public int getFilterSQL_ID()
     {
        return filterSQL_ID;
    }

    public void setFilterSQL_ID(int filterSQL_ID)
    {
        this.filterSQL_ID = filterSQL_ID;
    }

    public String getName()
    {
        return name;
    }

    public void setName(String name)
    {
        this.name = name;
    }

    public List<Parameter> getParameters()
    {
        return parameters;
    }

    public void setParameters(List<Parameter> parameters)
    {
        this.parameters = parameters;
    }

    public void setParameter(Parameter parameter)
    {
        this.parameters.add(parameter);
    }
    
    public String getPatch()
    {
        return patch;
    }

    public void setPatch(String patch)
    {
        this.patch = patch;
    }

}
