
package net.sigpue.server.informes.filtros;

/**
 * Implementación para XMLHandler del parseador XML (manejo de resportes) del SIGPMA
 * Contiene la implementación de los métodos
 * @version 1.0, 2011
 * @author Ing. de la Peña
 * @author Amilcar Rojas
 *
 */

import org.xml.sax.helpers.DefaultHandler;
import org.xml.sax.Attributes;
import org.xml.sax.XMLReader;

import org.xml.sax.helpers.DefaultHandler;
import org.xml.sax.Attributes;
import java.util.Vector;
import org.xml.sax.SAXException;

public class FileXMLHandler extends DefaultHandler
{
 
  private Vector instancias;
 
  private FilterSQL actual;

  private String valor;

  private XMLReader parser;

  private FileParameterXMLHandler handlerParameter;

  public FileXMLHandler (XMLReader parser, Vector v)
  {
    this.parser = parser;
    this.instancias = v;
  }

    @Override
  public void startElement( String namespaceURI, String localName, String qName,
                                           Attributes attr ) throws SAXException
  {

    if (localName.equals("FilterSQL"))
    {

      actual = new FilterSQL();
      instancias.addElement (actual);
      actual.setId(Integer.parseInt(attr.getValue("id")));
      actual.setName(attr.getValue("name"));
      actual.setParameterDate(attr.getValue("parameterDate"));
      actual.setParameterReport(attr.getValue("parameterReport"));
    }
   /*else if (localName.equals("parametro"))
    {
      Parameter parametro = new Parameter();
      actual.setParameter(parametro);

      handlerParameter = new ParameterXMLHandler( parser, this, parametro );
      parser.setContentHandler( handlerParameter );
    }*/
  }

    @Override
  public void endElement (String namespaceURI, String localName, String rawName)
                                                             throws SAXException
  {
      if (localName.equals("filter"))
      {
          actual.setFilter(valor);
      }
      else if (localName.equals("SQLColums"))
      {
          actual.setSQLColums(valor);
      }
      else if (localName.equals("SQLTables"))
      {
          actual.setSQLTables(valor);
      }
      else if (localName.equals("SQLCondition"))
      {
          actual.setSQLCondition(valor);
      }
      else if (localName.equals("SQLFilter"))
      {
          actual.setSQLFilter(valor);
      }
      else if (localName.equals("SQLGrouping"))
      {
          actual.setSQLGrouping(valor);
      }

      else if (localName.equals("SQLProcedures"))
      {
          if(!valor.equals(""))
           actual.setSQLProcedures(valor);
          else
              actual.setSQLProcedures(null);

      }
        /*else if (localName.equals("numeroParametros"))
        {
            actual.setCountParameter(Integer.parseInt(valor));
        }
        else if(localName.equals("patch"))
        {
            actual.setPatch(valor);
        }
        else if(localName.equals("parametros"))
        {
           // actual.setParameters(valor);
        }*/
    valor = null;
  }

    @Override
  public void characters (char[] ch, int start, int end) throws SAXException
  {
    valor = new String (ch, start, end);
    valor = valor.trim();
  }

}