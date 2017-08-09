/**
 * Esta clase no tiene métodos por ahora. Solo con que la instancien, desde el
 * constructor por defecto, carga todo. NILSON colaboró arreglando referencias
 * en los XML, web, MainEntryPoint, modulos, etc.
 *
 * @author HLOZADA Sabado 10-Nov-2012
 */
package net.sigpue.client.maestros;

import com.smartgwt.client.types.ListGridFieldType;
import com.smartgwt.client.widgets.form.fields.FormItem;
import com.smartgwt.client.widgets.form.fields.TextItem;
import com.smartgwt.client.widgets.grid.ListGridField;
import com.smartgwt.client.widgets.layout.Layout;
import net.sigpue.client.VariablesGenerales;
import net.cltech.lib.client.controls.master.CLMaster;

public class Tipo_alarma implements InterfazMaestros{

    CLMaster cLMaster;

    public Tipo_alarma() {
        //textItem Nombre del Tipo de Alarma      
        TextItem tiNombreTipoAlarma = new TextItem("nombre_tipo", VariablesGenerales.ETIQUETAS.nombre());
        tiNombreTipoAlarma.setRequired(true);
        tiNombreTipoAlarma.setLength(32);

        //ListGrid de Tipos de Alarmas
        ListGridField gfNombreTipoAlarma = new ListGridField("nombre_tipo", VariablesGenerales.ETIQUETAS.tipo());
        ListGridField gfEstadoTipoAlarma = new ListGridField("id_estdo", VariablesGenerales.ETIQUETAS.estado());
        gfEstadoTipoAlarma.setType(ListGridFieldType.BOOLEAN);

        FormItem[] formItems = {tiNombreTipoAlarma};

//         ListGridField[] gridFields = {gfNombreAlarma, gfTipoAlarma,gfEstadoTipoAlarma};
        ListGridField[] gridFields = {gfNombreTipoAlarma, gfEstadoTipoAlarma};

        cLMaster = new CLMaster("tipo_alarma", formItems, gridFields, 1, VariablesGenerales.ETIQUETAS.tipoAlarma());
        //el mestro tiene el de activar/desactivar del estado
        cLMaster.setActiveFieldName("id_estado");
        cLMaster.getClms().getSegPrint().setVisible(false);

//      
    }

    public Layout getMaestro() {
        return cLMaster;
    }
}