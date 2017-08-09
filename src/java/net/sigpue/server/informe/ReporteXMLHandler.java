
package net.sigpue.server.informe;

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

public class ReporteXMLHandler extends DefaultHandler
{
 
  private Vector instancias;
 
  private Reporte_1 actual;

  private String valor;

  private XMLReader parser;

  private ParameterXMLHandler handlerParameter;

  public ReporteXMLHandler (XMLReader parser, Vector v)
  {
    this.parser = parser;
    this.instancias = v;
  }

    @Override
  public void startElement( String namespaceURI, String localName, String qName,
                                           Attributes attr ) throws SAXException
  {

    if (localName.equals("reporte"))
    {

      actual = new Reporte_1();
      instancias.addElement (actual);
      actual.setId(Integer.parseInt(attr.getValue("id")));
    }
    else if (localName.equals("parametro"))
    {
      Parameter parametro = new Parameter();
      actual.setParameter(parametro);

      handlerParameter = new ParameterXMLHandler( parser, this, parametro );
      parser.setContentHandler( handlerParameter );
    }
  }

    @Override
  public void endElement (String namespaceURI, String localName, String rawName)
                                                             throws SAXException
  {
    if (localName.equals("name"))
        {
            actual.setName(valor);
        }
        else if (localName.equals("numeroParametros"))
        {
            actual.setCountParameter(Integer.parseInt(valor));
        }
        else if (localName.equals("FilterSQL_ID"))
        {
            actual.setFilterSQL_ID(Integer.parseInt(valor));
        }
        else if(localName.equals("patch"))
        {
            actual.setPatch(valor);
        }
        else if(localName.equals("parametros"))
        {
           // actual.setParameters(valor);
        }
    valor = null;
  }

    @Override
  public void characters (char[] ch, int start, int end) throws SAXException
  {
    valor = new String (ch, start, end);
    valor = valor.trim();
  }

}