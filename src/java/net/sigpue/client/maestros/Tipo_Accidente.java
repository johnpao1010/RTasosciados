package net.sigpue.client.maestros;

import com.smartgwt.client.types.ListGridFieldType;
import com.smartgwt.client.widgets.form.fields.FormItem;
import com.smartgwt.client.widgets.form.fields.TextItem;
import com.smartgwt.client.widgets.grid.ListGridField;
import com.smartgwt.client.widgets.layout.Layout;
import net.sigpue.client.VariablesGenerales;
import net.cltech.lib.client.controls.master.CLMaster;

public class Tipo_Accidente implements InterfazMaestros {

    private CLMaster cLMaster;

    public Tipo_Accidente() {
        //textItem Nombre del Tipo de Identificacion      
        TextItem tiNombre = new TextItem("nombre", VariablesGenerales.ETIQUETAS.nombre());
        tiNombre.setRequired(true);
        tiNombre.setLength(32);

        //ListGrid de Tipos de Reportes
        ListGridField gfTipoInstitucion = new ListGridField("nombre", "Tipo Accidente");
        ListGridField gfEstadoTipoInstitucion = new ListGridField("estado", VariablesGenerales.ETIQUETAS.estado());
        gfEstadoTipoInstitucion.setType(ListGridFieldType.BOOLEAN);

        FormItem[] formItems = {tiNombre};
        ListGridField[] gridFieldsGF = {gfTipoInstitucion, gfEstadoTipoInstitucion};

        cLMaster = new CLMaster("tipoaccidente", formItems,gridFieldsGF,1, "Tipo Accidente");
        cLMaster.getClms().getSegPrint().setVisible(false);
        cLMaster.setActiveFieldName("id_estado");

    }

    public Layout getMaestro() {
        return cLMaster;
    }
}