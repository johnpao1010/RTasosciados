package net.sigpue.server.informe;

/**
 * Implementación para parseador XML para manejo de reportes del SIGPMA
 * Contiene la implementación de los métodos
 * @version 1.0, 2011
 * @author Ing. de la Peña
 * @author Amilcar Rojas
 *
 */

import org.xml.sax.helpers.DefaultHandler;
import org.xml.sax.Attributes;
import java.util.Vector;
import org.xml.sax.*;
import org.xml.sax.helpers.*;


public class Parseador extends DefaultHandler 
{

    private Vector coleccion;
    private Reporte_1 actual;
    private String valor;

    public Parseador(Vector coleccion)
    {
        this.coleccion = coleccion;
    }

    @Override
    public void startElement(String namespaceURI,String localName, String qName, Attributes attr) throws SAXException
    {

        inicioElemento(localName, attr);
    }

    @Override
    public void endElement(String namespaceURI, String localName, String rawName) throws SAXException
    {
        finElemento(localName);
    }

    public void inicioElemento(String nombreElemento,Attributes atributo) throws SAXException
    {
        if (nombreElemento.equals("reporte"))
        {
            actual = new Reporte_1();
            coleccion.addElement(actual);
            actual.setId(Integer.parseInt(atributo.getValue("id")));
        }
    }

    public void finElemento(String nombreElemento)throws SAXException
    {

        if (nombreElemento.equals("name"))
        {
            actual.setName(valor);
        } 
        else if (nombreElemento.equals("numeroParametros"))
        {
            actual.setCountParameter(Integer.parseInt(valor));
        }
        else if(nombreElemento.equals("patch"))
        {
            actual.setPatch(valor);
        }
        else if(nombreElemento.equals("parametros"))
        {
           // actual.setParameters(valor);
        }
    }

    @Override
    public void characters(char[] ch, int start, int end)
    {
        valor = new String(ch, start, end);
        valor = valor.trim();
    }
}
