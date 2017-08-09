package net.sigpue.server.informes.filtros;

import java.io.IOException;
import java.util.Vector;
import java.util.logging.Level;
import java.util.logging.Logger;
import org.xml.sax.SAXException;
import org.xml.sax.XMLReader;
import com.sun.org.apache.xerces.internal.parsers.SAXParser;
import java.util.Iterator;
import java.util.Map;

public class FilterSQLReport
{
    private FilterSQL filter;

    public FilterSQLReport (String RealPath, Integer  filterSQL_ID )
    {
        try
        {
            Vector coleccion = new Vector();
            XMLReader parser = new SAXParser();
            parser.setContentHandler(new FileXMLHandler(parser, coleccion));
            parser.parse(RealPath);
            FilterSQL[] get = new FilterSQL[coleccion.size()];
            filter = null;
            for (int j = 0; j < coleccion.size(); j++)
            {
                get[j] = (FilterSQL) coleccion.elementAt(j);
                if (get[j].getId() == filterSQL_ID)
                {
                    filter = get[j];
                }
            }
        }
        catch (IOException ex)
        {
            Logger.getLogger(FilterSQLReport.class.getName()).log(Level.SEVERE, null, ex);
        }
        catch (SAXException ex)
        {
            Logger.getLogger(FilterSQLReport.class.getName()).log(Level.SEVERE, null, ex);
        }

    }

    public void setParameterSQLFilter(Map parameters)
    {
        Iterator it = parameters.entrySet().iterator();
        Integer pivote=parameters.size();
        Integer i=0;

        if(pivote>0)
        {
            if(filter.getSQLCondition()==null || filter.getSQLCondition().isEmpty() )
            {
                filter.setSQLFilter(filter.getSQLFilter()+" WHERE ") ;
            }
            else
            {
                filter.setSQLFilter(filter.getSQLFilter()+" AND ") ;
            }
            

            while (it.hasNext())
            {
                Map.Entry e = (Map.Entry) it.next();
                String a=(String)e.getKey();
                String token[]= a.split("_");

                filter.setSQLFilter(filter.getSQLFilter()+token[0]+"="+e.getValue()+" ") ;
                i++;
                if(i<pivote)
                    filter.setSQLFilter(filter.getSQLFilter()+" AND ") ;
            }
        }
    }

    public FilterSQL getFilter()
    {
        return filter;
    }

    public void setFilter(FilterSQL filter)
    {
        this.filter = filter;
    }

    public String getFilterSQLReport()
    {
       // String FilterSQLReport="SELECT "+filter.getSQLColums()+" FROM "+ filter.getSQLTables()+ " WHERE "+filter.getSQLCondition()+ filter.getSQLFilter()+filter.getSQLGrouping();
        
        String FilterSQLReport="SELECT "+filter.getSQLColums()+" FROM "+ filter.getSQLTables();
        if(filter.getSQLCondition()!=null && !filter.getSQLCondition().isEmpty())
        {
            FilterSQLReport+=" WHERE "+filter.getSQLCondition();
        }
        FilterSQLReport+= filter.getSQLFilter()+filter.getSQLGrouping();

        return FilterSQLReport;
    }
}
