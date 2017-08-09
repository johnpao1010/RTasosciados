
package net.sigpue.server.informes.filtros;

import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author Jhontan Alexander Peña. jpena@cltech.net. All rights reserved. CLTech 2012
 */


public class FilterGUI
{
    private int id;
    private String name;

    private String description;
    private String countCriterion;
    private List<Criterion>criteria= new ArrayList();

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

    public List<Criterion> getCriteria()
    {
        return criteria;
    }

    public void setCriterias(List<Criterion> criteria)
    {
        this.criteria = criteria;
    }

    public void setCriteria(Criterion criteria)
    {
        this.criteria.add(criteria);
    }

    public String getDescription()
    {
        return description;
    }

    public void setDescription(String description)
    {
        this.description = description;
    }

    public String getCountCriterion()
    {
        return countCriterion;
    }

    public void setCountCriterion(String countCriterion)
    {
        this.countCriterion = countCriterion;
    }
}
