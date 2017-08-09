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

public class Dominio  implements InterfazMaestros{

    private CLMaster cLMaster;

    public Dominio() {
        //Id del Tipo de Dominio es un Select Item
        DataSource dsTipoDominio = DataSource.get("tipodominio");
        SelectItem siTipoDominio = new SelectItem("idtipodominio", VariablesGenerales.ETIQUETAS.tipo());
        siTipoDominio.setOptionDataSource(dsTipoDominio);
        siTipoDominio.setValueField("idtipodominio");
        siTipoDominio.setDisplayField("nombre_tipodominio");
        siTipoDominio.setRequired(true);

        //textItem Nombre del Dominio      
        TextItem tiNombreDominio = new TextItem("nombre_dominio", VariablesGenerales.ETIQUETAS.nombre());
        tiNombreDominio.setRequired(true);
        tiNombreDominio.setLength(30);

        //TextItem con la descripcion del Dominio
        TextItem tiDescripcionDominio = new TextItem("descripcion", VariablesGenerales.ETIQUETAS.descripcion());
        tiDescripcionDominio.setRequired(true);
        tiDescripcionDominio.setLength(256);

        //ListGrid de Tipos de Dominios
        ListGridField gfNombreDominio = new ListGridField("nombre_dominio", VariablesGenerales.ETIQUETAS.dominio());
        ListGridField gfTipoDominio = new ListGridField("nombre_tipodominio", VariablesGenerales.ETIQUETAS.tipo());
        ListGridField gfEstadoTipoDominio = new ListGridField("id_estado", VariablesGenerales.ETIQUETAS.estado());
        gfEstadoTipoDominio.setType(ListGridFieldType.BOOLEAN);

        FormItem[] formItems = new FormItem[]{siTipoDominio, tiNombreDominio, tiDescripcionDominio};

//         ListGridField[] gridFields = {gfNombreDominio, gfTipoDominio,gfEstadoTipoDominio};
        ListGridField[] gridFields = {gfNombreDominio, gfEstadoTipoDominio};

        cLMaster = new CLMaster("dominio", formItems, gridFields, 1, VariablesGenerales.ETIQUETAS.dominio());
        //el mestro tiene el de activar/desactivar del estado
        cLMaster.setActiveFieldName("id_estado");
        cLMaster.getClms().getSegPrint().setVisible(false);

    }

    public Layout getMaestro() {
        return cLMaster;
    }
}