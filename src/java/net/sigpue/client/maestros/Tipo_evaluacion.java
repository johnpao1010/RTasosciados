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

public class Tipo_evaluacion implements InterfazMaestros{

    private CLMaster cLMaster;

    public Tipo_evaluacion() {

        TextItem tiNombreTipoEvaluacion = new TextItem("nombre_tipoevaluacion", VariablesGenerales.ETIQUETAS.nombre());
        tiNombreTipoEvaluacion.setRequired(true);
        tiNombreTipoEvaluacion.setLength(32);

        ListGridField gfNombreTipoEvaluacion = new ListGridField("nombre_tipoevaluacion", VariablesGenerales.ETIQUETAS.nombre());
        ListGridField gfEstadoTipoCorreo = new ListGridField("id_estado", VariablesGenerales.ETIQUETAS.estado());
        gfEstadoTipoCorreo.setType(ListGridFieldType.BOOLEAN);

        FormItem[] formItems = {tiNombreTipoEvaluacion};

        ListGridField[] gridFields = {gfNombreTipoEvaluacion, gfEstadoTipoCorreo};

        cLMaster = new CLMaster("tipo_evaluac", formItems, gridFields, 1, VariablesGenerales.ETIQUETAS.tipoEvaluacion());
        //el mestro tiene el de activar/desactivar del estado
        cLMaster.setActiveFieldName("id_estado");
        cLMaster.getClms().getSegPrint().setVisible(false);

    }

    public Layout getMaestro() {
        return cLMaster;
    }
}