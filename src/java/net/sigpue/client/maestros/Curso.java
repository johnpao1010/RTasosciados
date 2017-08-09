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
import com.smartgwt.client.widgets.form.validator.Validator;
import com.smartgwt.client.widgets.grid.ListGridField;
import com.smartgwt.client.widgets.layout.Layout;
import net.sigpue.client.VariablesGenerales;
import net.cltech.lib.client.controls.master.CLMaster;

public class Curso implements InterfazMaestros {

    private CLMaster cLMaster;

    public Curso() {
        //textItem nombre Curso
        TextItem tiNombreCurso = new TextItem("nombre", VariablesGenerales.ETIQUETAS.nombre());
//        tiNombreCurso.setMask("??????????????????????????????????");
        tiNombreCurso.setRequired(true);
        tiNombreCurso.setLength(128);

        //textItem Descripcion curso
        TextItem tiDescripcionCurso = new TextItem("descripcion", VariablesGenerales.ETIQUETAS.descripcion());
//        tiDescripcionCurso.setMask("??????????????????????????????????");
        tiDescripcionCurso.setRequired(true);
        tiDescripcionCurso.setLength(128);

        //textItem Lugar curso
        TextItem tiLugarCurso = new TextItem("lugar_curso", VariablesGenerales.ETIQUETAS.LugarCurso());
//        tiLugarCurso.setMask("???????????????????????????????????");
        tiLugarCurso.setRequired(true);
        tiLugarCurso.setLength(128);

        
         //textItem Lugar curso
        TextItem tiDocenteTutor = new TextItem("docente_tutor", VariablesGenerales.ETIQUETAS.DocenteTutor());
//      tiDocenteTutor.setMask("????????????????????????????????????");
        tiDocenteTutor.setRequired(true);
        tiDocenteTutor.setLength(128);
        
        
        DataSource dsTipoCurso = DataSource.get("tipo_curso");
        SelectItem siTipoCurso = new SelectItem("id_tipo_curso", VariablesGenerales.ETIQUETAS.tipoCurso());
        siTipoCurso.setOptionDataSource(dsTipoCurso);
        siTipoCurso.setValueField("id_tipo_curso");
        siTipoCurso.setDisplayField("nombre_tipocurso");
        siTipoCurso.setRequired(true);
        
        DataSource dsEstadoCurso = DataSource.get("estado");
        SelectItem siEstado = new SelectItem("id_estado", VariablesGenerales.ETIQUETAS.estado());
        siEstado.setOptionDataSource(dsEstadoCurso);
        siEstado.setValueField("id_estado");
        siEstado.setDisplayField("nombre_estado");
        siEstado.setRequired(true);

        FormItem[] formItems = {tiNombreCurso, tiDescripcionCurso, tiLugarCurso, tiDocenteTutor,
            siTipoCurso, siEstado};


        ListGridField gfNombreInstitucion = new ListGridField("nombre", VariablesGenerales.ETIQUETAS.nombre());
        ListGridField gfEstadoInstitucion = new ListGridField("id_estado", VariablesGenerales.ETIQUETAS.estado());
        gfEstadoInstitucion.setType(ListGridFieldType.BOOLEAN);


        ListGridField[] gridFields = {gfNombreInstitucion, gfEstadoInstitucion,};

        cLMaster = new CLMaster("curso", formItems, gridFields, 1, VariablesGenerales.ETIQUETAS.Curso());
        cLMaster.setActiveFieldName("id_estado");
        cLMaster.getClms().getSegPrint().setVisible(false);
    }
    public Layout getMaestro() {
        return cLMaster;
    }
}