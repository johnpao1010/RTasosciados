
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

public class FilterXMLHandler extends DefaultHandler
{
 
  private Vector instancias;
 
  private FilterGUI actual;

  private String valor;

  private XMLReader parser;

  private CriterionXMLHandler handlerParameter;

  public FilterXMLHandler (XMLReader parser, Vector v)
  {
    this.parser = parser;
    this.instancias = v;
  }

    @Override
  public void startElement( String namespaceURI, String localName, String qName,
                                           Attributes attr ) throws SAXException
  {

    if (localName.equals("Filter"))
    {

      actual = new FilterGUI();
      instancias.addElement (actual);
      actual.setId(Integer.parseInt(attr.getValue("id")));
      actual.setName(attr.getValue("name"));
    }
   else if (localName.equals("criterion"))
    {
       Criterion parametro = new Criterion();
      actual.setCriteria(parametro);

      handlerParameter = new CriterionXMLHandler( parser, this, parametro );
      parser.setContentHandler( handlerParameter );
    }
  }

    @Override
  public void endElement (String namespaceURI, String localName, String rawName)
                                                             throws SAXException
  {
      if (localName.equals("description"))
      {
          actual.setDescription(valor);
      }
      else if (localName.equals("countCriterion"))
      {
          actual.setCountCriterion(valor);
      }
     /* else if (localName.equals("SQLTables"))
      {
          actual.setSQLTables(valor);
      }
      else if (localName.equals("SQLCondition"))
      {
          actual.setSQLCondition(valor);
      }
      else if (localName.equals("SQLGrouping"))
      {
          actual.setSQLGrouping(valor);
      }
        else if (localName.equals("numeroParametros"))
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