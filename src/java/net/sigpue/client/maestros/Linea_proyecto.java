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

public class Linea_proyecto  implements InterfazMaestros{

    private CLMaster cLMaster;

    public Linea_proyecto() {
        //textItem Nombre del Tipo de Grafica      
        TextItem tiNombreLineaProyecto = new TextItem("nombre_linea", VariablesGenerales.ETIQUETAS.nombre());
        tiNombreLineaProyecto.setRequired(true);
        tiNombreLineaProyecto.setLength(32);

        //TextItem con la descripcion del Grafica
        TextItem tiDescripcion = new TextItem("descripcion", VariablesGenerales.ETIQUETAS.descripcion());
        tiDescripcion.setRequired(true);
        tiDescripcion.setLength(256);
        
       
        //ListGrid de Tipos de Graficas
        ListGridField gfNombreLineaProyecto = new ListGridField("nombre_linea", VariablesGenerales.ETIQUETAS.nombre());
        ListGridField gfEstado = new ListGridField("id_estado", VariablesGenerales.ETIQUETAS.estado());
        gfEstado.setType(ListGridFieldType.BOOLEAN);

        FormItem[] formItems = {tiNombreLineaProyecto, tiDescripcion};

//         ListGridField[] gridFields = {gfNombreGrafica, gfTipoGrafica,gfEstadoTipoGrafica};
        ListGridField[] gridFields = {gfNombreLineaProyecto, gfEstado};

        cLMaster = new CLMaster("lineaproyecto", formItems, gridFields, 1, VariablesGenerales.ETIQUETAS.LineaProyecto());
        //el mestro tiene el de activar/desactivar del estado
        cLMaster.setActiveFieldName("id_estado");
        cLMaster.getClms().getSegPrint().setVisible(false);

    }

    public Layout getMaestro() {
        return cLMaster;
    }
}