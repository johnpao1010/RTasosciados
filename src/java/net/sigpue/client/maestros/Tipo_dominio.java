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

public class Tipo_dominio implements InterfazMaestros{

    private CLMaster cLMaster;

    public Tipo_dominio() {
        //textItem Nombre del Tipo de Dominio      
        TextItem tiNombreTipoDominio = new TextItem("nombre_tipodominio", VariablesGenerales.ETIQUETAS.nombre());
        tiNombreTipoDominio.setRequired(true);
        tiNombreTipoDominio.setLength(30);

        //TextItem con la descripcion del Dominio
        TextItem tiDescripcionTipoDominio = new TextItem("descripcion", VariablesGenerales.ETIQUETAS.descripcion());
        tiDescripcionTipoDominio.setRequired(true);
        tiDescripcionTipoDominio.setLength(256);

        //ListGrid de Tipos de Dominios
        ListGridField gfNombreTipoDominio = new ListGridField("descripcion", VariablesGenerales.ETIQUETAS.tipo());
        ListGridField gfEstadoTipoDominio = new ListGridField("id_estado", VariablesGenerales.ETIQUETAS.estado());
        gfEstadoTipoDominio.setType(ListGridFieldType.BOOLEAN);

        FormItem[] formItems = {tiNombreTipoDominio, tiDescripcionTipoDominio};

//         ListGridField[] gridFields = {gfNombreDominio, gfTipoDominio,gfEstadoTipoDominio};
        ListGridField[] gridFields = {gfNombreTipoDominio, gfEstadoTipoDominio};

        cLMaster = new CLMaster("tipodominio", formItems, gridFields, 1, VariablesGenerales.ETIQUETAS.tipoDominio());
        cLMaster.getClms().getSegPrint().setVisible(false);
        cLMaster.setActiveFieldName("id_estado");
        
    }
    public Layout getMaestro(){
        return cLMaster;
    }
}