
package net.sigpue.server.informes.filtros;

/**
 * Implementación para PatameterXMLHandlet del parseador XML (manejo de resportes) del SIGPMA
 * Contiene la implementación de los métodos para gestión de IReport
 * @version 1.0, 2011
 * @author Ing. de la Peña
 * @author Amilcar Rojas
 *
 */

import org.xml.sax.helpers.DefaultHandler;
import org.xml.sax.SAXException;
import org.xml.sax.XMLReader;

public class CriterionXMLHandler extends DefaultHandler
{
  private String valor;

  private XMLReader parser;

  private FilterXMLHandler handlerFilter;

  private Criterion parameter;

  public CriterionXMLHandler (XMLReader parser, FilterXMLHandler handler,
                            Criterion parametro)
  {
    this.parser = parser;
    this.handlerFilter = handler;
    this.parameter = parametro;
  }

    @Override
  public void endElement (String namespaceURI, String localName, String rawName)
                                                             throws SAXException
  {
    if (localName.equals("id"))
    {
      parameter.setId(Integer.parseInt(valor));
    }
    else if(localName.equals("name"))
    {
      parameter.setName(valor);
    }
    else if (localName.equals("reporteId"))
    {
      parameter.setReporteId(valor);
    }
     /*else if (localName.equals("type"))
     {
      parameter.setType(valor);
    }*/
    else if (localName.equals("criterion"))
    {
      parser.setContentHandler (handlerFilter);
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
