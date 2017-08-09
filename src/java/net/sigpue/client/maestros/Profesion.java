/**
 * Esta clase no tiene métodos por ahora. Solo con que la instancien, desde el
 * constructor por defecto, carga todo. NILSON colaboró arreglando referencias
 * en los XML, web, MainEntryPoint, modulos, etc.
 *
 * @author HLOZADA Sabado 10-Nov-2012
 */
package net.sigpue.client.maestros;

import com.smartgwt.client.types.ListGridFieldType;
import com.smartgwt.client.widgets.form.fields.DateItem;
import com.smartgwt.client.widgets.form.fields.FormItem;
import com.smartgwt.client.widgets.form.fields.TextItem;
import com.smartgwt.client.widgets.grid.ListGridField;
import com.smartgwt.client.widgets.layout.Layout;
import net.sigpue.client.VariablesGenerales;
import net.cltech.lib.client.controls.master.CLMaster;

public class Profesion implements InterfazMaestros{

    CLMaster cLMaster;

    public Profesion() {
        //textItem Nombre del Tipo de Alarma      
        TextItem tiNombreProfesion = new TextItem("nombre_profesion", VariablesGenerales.ETIQUETAS.nombre());
        tiNombreProfesion.setRequired(true);
        tiNombreProfesion.setLength(32);
        
        
        DateItem diFecha = new DateItem("fecha", VariablesGenerales.ETIQUETAS.fechaDilig());
        diFecha.setRequired(true);
      

        //ListGrid de Tipos de Alarmas
        ListGridField gfNombreProfesion = new ListGridField("nombre_profesion", VariablesGenerales.ETIQUETAS.profesion());
        ListGridField gfEstadoProfesion = new ListGridField("id_estdo", VariablesGenerales.ETIQUETAS.estado());
        gfEstadoProfesion.setType(ListGridFieldType.BOOLEAN);

        FormItem[] formItems = {tiNombreProfesion,diFecha};

//         ListGridField[] gridFields = {gfNombreAlarma, gfTipoAlarma,gfEstadoTipoAlarma};
        ListGridField[] gridFields = {gfNombreProfesion, gfEstadoProfesion};

        cLMaster = new CLMaster("profesion", formItems, gridFields, 1, VariablesGenerales.ETIQUETAS.profesion());
        //el mestro tiene el de activar/desactivar del estado
        cLMaster.setActiveFieldName("id_estado");
        cLMaster.getClms().getSegPrint().setVisible(false);

//      
    }

    public Layout getMaestro() {
        return cLMaster;
    }
}