/**
 * Esta clase no tiene métodos por ahora. Solo con que la instancien, desde el
 * constructor por defecto, carga todo. NILSON colaboró arreglando referencias
 * en los XML, web, MainEntryPoint, modulos, etc.
 *
 * @author HLOZADA Sabado 10-Nov-2012
 */
package net.sigpue.client.maestros;

import com.smartgwt.client.data.DataSource;
import com.smartgwt.client.types.ListGridFieldType;
import com.smartgwt.client.widgets.form.fields.FormItem;
import com.smartgwt.client.widgets.form.fields.SelectItem;
import com.smartgwt.client.widgets.form.fields.TextItem;
import com.smartgwt.client.widgets.grid.ListGridField;
import com.smartgwt.client.widgets.layout.Layout;
import net.sigpue.client.VariablesGenerales;
import net.cltech.lib.client.controls.master.CLMaster;

public class Ciudad implements InterfazMaestros{

    private CLMaster cLMaster;

    public Ciudad() {
        //textItem Nombre de la Ciudad      
        TextItem tiNombreCiudad = new TextItem("nombre_ciudad", VariablesGenerales.ETIQUETAS.nombre());
        tiNombreCiudad.setRequired(true);
        tiNombreCiudad.setLength(64);

        //Id de la periodicidad es un Select Item
        DataSource dsDepartamento = DataSource.get("departamento");
        SelectItem siDepartamento = new SelectItem("id_departamento", VariablesGenerales.ETIQUETAS.departamento());
        siDepartamento.setOptionDataSource(dsDepartamento);
        siDepartamento.setValueField("id_departamento");
        siDepartamento.setDisplayField("nombre_departamento");
        siDepartamento.setRequired(true);

        //ListGrid de Tipos de Graficas
        ListGridField gfNombreCiudad = new ListGridField("nombre_ciudad", VariablesGenerales.ETIQUETAS.nombre());
        ListGridField gfEstadoCiudad = new ListGridField("id_estado", VariablesGenerales.ETIQUETAS.estado());
        gfEstadoCiudad.setType(ListGridFieldType.BOOLEAN);

        FormItem[] formItems = {tiNombreCiudad, siDepartamento};

//         ListGridField[] gridFields = {gfNombreGrafica, gfCiudad,gfEstadoCiudad};
        ListGridField[] gridFields = {gfNombreCiudad, gfEstadoCiudad};

        cLMaster = new CLMaster("ciudad", formItems, gridFields, 1, VariablesGenerales.ETIQUETAS.ciudad());
        //el mestro tiene el de activar/desactivar del estado
        cLMaster.setActiveFieldName("id_estado");
        cLMaster.getClms().getSegPrint().setVisible(false);

    }

    public Layout getMaestro() {
        return cLMaster;
    }
}