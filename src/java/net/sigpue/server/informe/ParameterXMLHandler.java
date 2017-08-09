
package net.sigpue.server.informe;

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

public class ParameterXMLHandler extends DefaultHandler
{
  private String valor;

  private XMLReader parser;

  private ReporteXMLHandler handlerReporte;

  private Parameter parameter;

  public ParameterXMLHandler (XMLReader parser, ReporteXMLHandler handler,
                            Parameter parametro)
  {
    this.parser = parser;
    this.handlerReporte = handler;
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
    else if(localName.equals("label"))
    {
      parameter.setLabel(valor);
    }
    else if (localName.equals("value"))
    {
      parameter.setValue(valor);
    }
     else if (localName.equals("type"))
     {
      parameter.setType(valor);
    }
    else if (localName.equals("Required"))
    {
      parameter.setRequired(Boolean.parseBoolean(valor));
    }
    else if (localName.equals("parametro"))
    {
      parser.setContentHandler (handlerReporte);
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
