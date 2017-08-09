package net.sigpue.client.maestros;

import com.smartgwt.client.data.DataSource;
import com.smartgwt.client.data.fields.DataSourceTextField;
import com.smartgwt.client.types.ListGridFieldType;
import com.smartgwt.client.widgets.form.fields.DateItem;
import com.smartgwt.client.widgets.form.fields.FormItem;
import com.smartgwt.client.widgets.form.fields.PasswordItem;
import com.smartgwt.client.widgets.form.fields.SelectItem;
import com.smartgwt.client.widgets.form.fields.TextItem;
import com.smartgwt.client.widgets.form.validator.RegExpValidator;
import com.smartgwt.client.widgets.grid.ListGridField;
import com.smartgwt.client.widgets.layout.Layout;
import net.sigpue.client.VariablesGenerales;
import net.cltech.lib.client.controls.master.CLMaster;

public class Usuario implements InterfazMaestros {

    private CLMaster cLMaster;

    public Usuario() {
        // <editor-fold desc=" ">

        // </editor-fold>         

        //textItem Nombre del Usuario
        TextItem tiNombreUsuario = new TextItem("nombre_usuario", VariablesGenerales.ETIQUETAS.nombre());
        //tiNombreUsuario.setMask("LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL");
        tiNombreUsuario.setRequired(true);
        tiNombreUsuario.setLength(256);

        //textItem Apellido del Usuario
        TextItem tiApellidoUsuario = new TextItem("apellidos", VariablesGenerales.ETIQUETAS.apellido());
        //tiApellidoUsuario.setMask("LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL");         
        tiApellidoUsuario.setRequired(true);
        tiApellidoUsuario.setLength(256);
        
        DataSource dsTipo_Identificacion = DataSource.get("tipoiden");
        SelectItem siTipoidentificacion = new SelectItem("idtipoidentificacion", "Tipo Identificación");
        siTipoidentificacion.setOptionDataSource(dsTipo_Identificacion);
        siTipoidentificacion.setValueField("idtipoidentificacion");
        siTipoidentificacion.setDisplayField("sigla");
        siTipoidentificacion.setRequired(true);

         TextItem tiIdenficicacion = new TextItem("identificacion", "Numero Identificacion");
        //tiApellidoUsuario.setMask("LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL");         
        tiIdenficicacion.setRequired(true);
        tiIdenficicacion.setLength(256);
        
        DataSource dsGenero = DataSource.get("genero");
        SelectItem siGenero = new SelectItem("id_genero", "Genero");
        siGenero.setOptionDataSource(dsGenero);
        siGenero.setValueField("id_genero");
        siGenero.setDisplayField("genero");
        siGenero.setRequired(true);
        
        DataSource dsProfesion = DataSource.get("profesion");
        SelectItem siProfesion = new SelectItem("id_profesion", "Profesion");
        siProfesion.setOptionDataSource(dsProfesion);
        siProfesion.setValueField("id_profesion");
        siProfesion.setDisplayField("nombre_profesion");
        
        TextItem tiTelefonMovil = new TextItem("celular", "Celular");
        
        
        DataSource dsCiudad = DataSource.get("ciudad");
        SelectItem siCiudad = new SelectItem("id_ciudad", "Ciudad");
        siCiudad.setOptionDataSource(dsCiudad);
        siCiudad.setValueField("id_ciudad");
        siCiudad.setDisplayField("nombre_ciudad");
        siCiudad.setRequired(true);
        
        TextItem tiUsuario = new TextItem("username", VariablesGenerales.ETIQUETAS.usuario());
        tiUsuario.setRequired(true);
        tiUsuario.setLength(32);

        PasswordItem piPwdUsuario = new PasswordItem("password", VariablesGenerales.ETIQUETAS.password());
        piPwdUsuario.setRequired(true);
        piPwdUsuario.setLength(64);
        
        TextItem tiMailUsuario = new TextItem("email", VariablesGenerales.ETIQUETAS.email());
        RegExpValidator regExpValidator = new RegExpValidator();
        regExpValidator.setExpression("^([a-zA-Z0-9_.\\-+])+@(([a-zA-Z0-9\\-])+\\.)+[a-zA-Z0-9]{2,4}$");
        tiMailUsuario.setValidators(regExpValidator);
        tiMailUsuario.setRequired(true);
        tiMailUsuario.setLength(128);

        TextItem tiTelefonFijo = new TextItem("telefonofijo", "Telefono fijo");
        tiTelefonFijo.setMask("###############");
        
        TextItem direccion = new TextItem("direccion", "Direccion");
        
        TextItem tiUniversidad = new TextItem("universidad", "Universidad");
        
        TextItem tiPrograma = new TextItem("programa", "Programa");
        
        TextItem tiSemestre = new TextItem("semestre", "Semestre");
        
        TextItem tiNombreempresa = new TextItem("nombreempresa", "Empresa");
        
        TextItem tiDireccionempresa = new TextItem("direccionempresa", "Direccion Empresa");
      
        TextItem tiTelefonoempresa = new TextItem("telefonoempresa", "Telefono Empresa");
        tiTelefonoempresa.setMask("###############");

        DataSource dsCiudadempresa = DataSource.get("ciudad");
        SelectItem siCiudadempresa = new SelectItem("ciudadempresa", "Ciudad Empresa");
        siCiudadempresa.setOptionDataSource(dsCiudadempresa);
        siCiudadempresa.setValueField("id_ciudad");
        siCiudadempresa.setDisplayField("nombre_ciudad");
        siCiudadempresa.setRequired(true);
        
        //ListGrid de Usuario
        ListGridField gfUsuario = new ListGridField("username", VariablesGenerales.ETIQUETAS.nombre());
        ListGridField gfEstadoUsuario = new ListGridField("id_estado", VariablesGenerales.ETIQUETAS.estado());
        gfEstadoUsuario.setType(ListGridFieldType.BOOLEAN);


        FormItem[] formItems = {tiNombreUsuario, tiApellidoUsuario, siTipoidentificacion, tiIdenficicacion,
        siGenero,siProfesion,tiTelefonMovil,siCiudad,tiUsuario, piPwdUsuario, tiMailUsuario,tiTelefonFijo, direccion, tiUniversidad, tiPrograma,
        tiSemestre,tiNombreempresa,tiDireccionempresa,tiTelefonoempresa,siCiudadempresa};

        ListGridField[] gridFields = {gfUsuario, gfEstadoUsuario};


        //ListGrid de Usuario
        ListGridField gfNombreRol = new ListGridField("nombre_rol", VariablesGenerales.ETIQUETAS.rol());
        ListGridField gfDescripcionRol = new ListGridField("descripcion", VariablesGenerales.ETIQUETAS.descripcion());
        ListGridField gfEstadoRol = new ListGridField("id_estado", VariablesGenerales.ETIQUETAS.estado());
        gfEstadoRol.setType(ListGridFieldType.BOOLEAN);

        ListGridField[] gridFieldsDragList = {gfNombreRol, gfDescripcionRol, gfEstadoRol};

        //SIN DRAG LIST
//        cLMaster = new CLMaster("Usuario", formItems, gridFields, 2, VariablesGenerales.ETIQUETAS.usuario());

        //CON DRAG LIST
        cLMaster = new CLMaster("usuario", "rol", "rol_x_usuario", VariablesGenerales.ETIQUETAS.usuario());
        cLMaster.setFormItems(formItems, 2);
        cLMaster.setGridFields(gridFields);
        cLMaster.setClDragListFields(gridFieldsDragList);

        //el mestro tiene el de activar/desactivar del estado
        cLMaster.setActiveFieldName("id_estado");
        cLMaster.getClms().getSegPrint().setVisible(false);
//        cLMaster.show();

        // </editor-fold>
    }

    @Override
    public Layout getMaestro() {
        return cLMaster;
    }
}