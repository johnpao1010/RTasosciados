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

public class Tipo_formulario implements InterfazMaestros{

    private CLMaster cLMaster;

    public Tipo_formulario() {
        //textItem Nombre del TipoDato      
        TextItem tiNombreTipoForm = new TextItem("nombre_tipoformulario", VariablesGenerales.ETIQUETAS.nombre());
        tiNombreTipoForm.setRequired(true);
        tiNombreTipoForm.setLength(32);

        //ListGrid de Tipos de EstadoOyDs
        ListGridField gfNombreTipoForm = new ListGridField("nombre_tipoformulario", VariablesGenerales.ETIQUETAS.nombre());
        ListGridField gfEstadoTipoForm = new ListGridField("id_estado", VariablesGenerales.ETIQUETAS.estado());
        gfEstadoTipoForm.setType(ListGridFieldType.BOOLEAN);

        FormItem[] formItems = {tiNombreTipoForm};

        ListGridField[] gridFields = {gfNombreTipoForm, gfEstadoTipoForm};

        cLMaster = new CLMaster("tipo_formula", formItems, gridFields, 1, VariablesGenerales.ETIQUETAS.tipoformulario());
        //el mestro tiene el de activar/desactivar del estado
        cLMaster.setActiveFieldName("id_estado");
        cLMaster.getClms().getSegPrint().setVisible(false);

    }

    public Layout getMaestro() {
        return cLMaster;
    }
}