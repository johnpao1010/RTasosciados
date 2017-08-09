
package net.sigpue.server.informes.filtros;

/**
 *
 * @author Jhontan Alexander Peña. jpena@cltech.net. All rights reserved. CLTech 2012
 */


public class FilterSQL
{
    private int id;
    private String name;
    private String parameterDate;
    private String parameterReport;
    private String filter;
    private String SQLColums;
    private String SQLTables;
    private String SQLCondition;
    private String SQLFilter;
    private String SQLGrouping;
    
    private String SQLProcedures;


    public String getParameterReport()
    {
        return parameterReport;
    }

    public void setParameterReport(String parameterReport)
    {
        this.parameterReport = parameterReport;
    }

    public String getSQLProcedures()
    {
        return SQLProcedures;
    }

    public void setSQLProcedures(String SQLProcedures)
    {
        this.SQLProcedures = SQLProcedures;
    }

    public String getSQLColums()
    {
        return SQLColums;
    }

    public void setSQLColums(String SQLColums)
    {
        this.SQLColums = SQLColums;
    }

    public String getSQLCondition()
    {
        return SQLCondition;
    }

    public void setSQLCondition(String SQLCondition)
    {
        this.SQLCondition = SQLCondition;
    }

    public String getSQLFilter()
    {
        return SQLFilter;
    }

    public void setSQLFilter(String SQLFilter)
    {
        this.SQLFilter = SQLFilter;
    }

    public String getSQLGrouping()
    {
        return SQLGrouping;
    }

    public void setSQLGrouping(String SQLGrouping)
    {
        this.SQLGrouping = SQLGrouping;
    }

    public String getSQLTables()
    {
        return SQLTables;
    }

    public void setSQLTables(String SQLTables)
    {
        this.SQLTables = SQLTables;
    }

    public String getFilter()
    {
        return filter;
    }

    public void setFilter(String filter)
    {
        this.filter = filter;
    }

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

    public String getParameterDate()
    {
        return parameterDate;
    }

    public void setParameterDate(String parameterDate)
    {
        this.parameterDate = parameterDate;
    }
}
