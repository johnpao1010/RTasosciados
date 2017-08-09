/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

package net.sigpue.client.interfaces;

import com.smartgwt.client.core.Function;
import com.smartgwt.client.data.Record;

/**
 *
 * @author JDURAN
 */
public interface ArbolConnector 
{
    public void formClick(int id_form,int padre);
    public void tabClick( int padre, int idformulario,int idtab);
    public void seccionClick(int idseccion, int padre, int idformulario);
    public void  formedit(Record editrecord,String idtipoform);
}
