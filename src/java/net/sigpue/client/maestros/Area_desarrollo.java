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

public class Area_desarrollo implements InterfazMaestros{

    private CLMaster cLMaster;

    public Area_desarrollo() {
        //textItem Nombre del Tipo de Transaccion      
        TextItem tiNombreTipoTransaccion = new TextItem("nombreareadesarrollo", VariablesGenerales.ETIQUETAS.nombre());
        tiNombreTipoTransaccion.setRequired(true);
        tiNombreTipoTransaccion.setLength(32);

        //ListGrid de Tipos de Transaccions
        ListGridField gfNombreTipoTransaccion = new ListGridField("nombreareadesarrollo", VariablesGenerales.ETIQUETAS.nombre());
        ListGridField gfEstadoTipoTransaccion = new ListGridField("id_estado", VariablesGenerales.ETIQUETAS.estado());
        gfEstadoTipoTransaccion.setType(ListGridFieldType.BOOLEAN);

        FormItem[] formItems = {tiNombreTipoTransaccion};

//         ListGridField[] gridFields = {gfNombreTransaccion, gfTipoTransaccion,gfEstadoTipoTransaccion};
        ListGridField[] gridFields = {gfNombreTipoTransaccion, gfEstadoTipoTransaccion};

        cLMaster = new CLMaster("areadesarrolloproyec", formItems, gridFields, 1, VariablesGenerales.ETIQUETAS.AreaDesarrollo());
        //el mestro tiene el de activar/desactivar del estado
        cLMaster.setActiveFieldName("id_estado");
        cLMaster.getClms().getSegPrint().setVisible(false);

    }

    public Layout getMaestro() {
        return cLMaster;
    }
}