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

public class Rol implements InterfazMaestros {

    private CLMaster cLMaster;

    public Rol() {
        //textItem Nombre del rol
       

        TextItem tiNombreRol = new TextItem("nombre_rol", VariablesGenerales.ETIQUETAS.nombre());
        tiNombreRol.setMask("????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????");
        tiNombreRol.setRequired(true);
        tiNombreRol.setLength(64);

        //Id de la Institucion es un Select Item
       

        //ListGrid de Usuario
        ListGridField gfRol = new ListGridField("nombre_rol", VariablesGenerales.ETIQUETAS.nombre());
        ListGridField gfEstadoRol = new ListGridField("id_estado", VariablesGenerales.ETIQUETAS.estado());
        gfEstadoRol.setType(ListGridFieldType.BOOLEAN);


        FormItem[] formItems = {tiNombreRol};

        ListGridField[] gridFields = {gfRol, gfEstadoRol};


        //ListGrid de Usuario
        ListGridField gfCodigoFuncionalidad = new ListGridField("codigo_funcionalidad", VariablesGenerales.ETIQUETAS.codigo());
        ListGridField gfnombreFuncionalidad = new ListGridField("nombre_funcion", VariablesGenerales.ETIQUETAS.nombre());
        ListGridField gfEstado = new ListGridField("id_estado", VariablesGenerales.ETIQUETAS.estado());
        gfEstado.setType(ListGridFieldType.BOOLEAN);

        ListGridField[] gridFieldsDragList = {gfnombreFuncionalidad, gfCodigoFuncionalidad,gfEstado};

        //SIN DRAG LIST
        //cLMaster = new CLMaster("Lab2013", formItems, gridFields, 2, VariablesGenerales.ETIQUETAS.usuario());

        //CON DRAG LIST
        cLMaster = new CLMaster("rol", "funcionalidad", "rolxfuncionalidad", VariablesGenerales.ETIQUETAS.rolXFuncionalidad());
        cLMaster.setFormItems(formItems, 2);
        cLMaster.setGridFields(gridFields);
        cLMaster.setClDragListFields(gridFieldsDragList);
        cLMaster.getClms().getSegPrint().setVisible(false);

        //el mestro tiene el de activar/desactivar del estado
        cLMaster.setActiveFieldName("id_estado");
//        cLMaster.show();

        // </editor-fold>
    }

    @Override
    public Layout getMaestro() {
        return cLMaster;
    }
}

