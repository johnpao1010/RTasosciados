/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

package net.sigpue.server;

import java.util.HashMap;
import java.util.Map;
import javax.ejb.Stateless;


/**
 *
 * @author GerenciaProyectos
 */
@Stateless
public class DAOGeneralBean
{
    private ConsultaRegistro consultaRegistro = new ConsultaRegistro();

    public Map<String, String> consultaRegistro(String nombreTabla, Long id, String pool)
    {
        return consultaRegistro.consulta(nombreTabla, id, pool);
    }
    public Map<String, String> consultaPersonalizada(String consulta, String pool)
    {
        return consultaRegistro.consultaPersonalizada(consulta, pool);
    }
    public String[][] consultaRegistros(String nombreTabla, String condicion, String pool)
    {
        return consultaRegistro.consultaMasiva(nombreTabla, condicion, pool);
    }
    public String[][] consultaRegistrosSql(String sql, String pool)
    {
        return consultaRegistro.consultaMasivaSql(sql, pool);
    }
    public int consultaExistencia(String nombreTabla, HashMap<String, Object> filaCompleta, String pool)
    {
        try
        {
            return consultaRegistro.consultaExistencia(nombreTabla, filaCompleta, pool);
        } 
        catch (Exception ex)
        {
//            Logger.getLogger(DAOGeneralBean.class.getName()).log(Level.SEVERE, null, ex);
            ex.printStackTrace();
            return -1;
        }
    }
}
