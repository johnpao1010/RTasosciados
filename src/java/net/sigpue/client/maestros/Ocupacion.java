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

public class Ocupacion implements InterfazMaestros{

    private CLMaster cLMaster;

    public Ocupacion() {
        //textItem Nombre del Tipo de EstadoOyD      
        TextItem tiNombreOcupacion = new TextItem("ocupacion", VariablesGenerales.ETIQUETAS.nombre());
        tiNombreOcupacion.setRequired(true);
        tiNombreOcupacion.setLength(32);

        //ListGrid de Tipos de EstadoOyDs
        ListGridField gfNombreOcupacion = new ListGridField("ocupacion", VariablesGenerales.ETIQUETAS.nombre());
        ListGridField gfEstado = new ListGridField("id_estado", VariablesGenerales.ETIQUETAS.estado());
        gfEstado.setType(ListGridFieldType.BOOLEAN);

        FormItem[] formItems = {tiNombreOcupacion};

//         ListGridField[] gridFields = {gfNombreEstadoOyD, gfTipoEstadoOyD,gfEstadoTipoEstadoOyD};
        ListGridField[] gridFields = {gfNombreOcupacion, gfEstado};

        cLMaster = new CLMaster("ocupacion", formItems, gridFields, 1, VariablesGenerales.ETIQUETAS.Ocupacion());
        //el mestro tiene el de activar/desactivar del estado
        cLMaster.setActiveFieldName("id_estado");
        cLMaster.getClms().getSegPrint().setVisible(false);

    }

    public Layout getMaestro() {
        return cLMaster;
    }
}