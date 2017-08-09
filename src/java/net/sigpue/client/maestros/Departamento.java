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

public class Departamento implements InterfazMaestros{

    private CLMaster cLMaster;

    public Departamento() {
        //textItem Nombre del Departamento      
        TextItem tiNombreDepartamento = new TextItem("nombre_departamento", VariablesGenerales.ETIQUETAS.nombre());
        tiNombreDepartamento.setRequired(true);
        tiNombreDepartamento.setLength(68);

        //ListGrid de Tipos de EstadoOyDs
        ListGridField gfNombreDepartamento = new ListGridField("nombre_departamento", VariablesGenerales.ETIQUETAS.nombre());
        ListGridField gfEstadoDepartamento = new ListGridField("id_estado", VariablesGenerales.ETIQUETAS.estado());
        gfEstadoDepartamento.setType(ListGridFieldType.BOOLEAN);

        FormItem[] formItems = {tiNombreDepartamento};

        ListGridField[] gridFields = {gfNombreDepartamento, gfEstadoDepartamento};

        cLMaster = new CLMaster("departamento", formItems, gridFields, 1, VariablesGenerales.ETIQUETAS.departamento());
        //el mestro tiene el de activar/desactivar del estado
        cLMaster.setActiveFieldName("id_estado");
        cLMaster.getClms().getSegPrint().setVisible(false);

    }

    public Layout getMaestro() {
        return cLMaster;
    }
}