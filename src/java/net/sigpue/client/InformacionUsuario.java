package net.sigpue.client;

import com.google.gwt.user.client.rpc.IsSerializable;
import java.util.ArrayList;

/**
 *
 * @author jduran
 */
public class InformacionUsuario implements IsSerializable{

    private int idUsuario;
//    private int idInstitucion;
//    private int idTipoInstitucion;
    private String nombre;
    private String apellido;
    private String correoElectronico;
//    private String nombreInstitucion;
//    private String nombreTipoInstitucion;
    private ArrayList<String> roles;
    private ArrayList<String> funcionalidades;
    public InformacionUsuario() {
    }

    public InformacionUsuario(int idUsuario, String nombre, String apellido, ArrayList<String> roles, ArrayList<String> funcionalidades) {
        this.idUsuario = idUsuario;
        this.nombre = nombre;
        this.apellido = apellido;
        this.roles = roles;
        this.funcionalidades = funcionalidades;
//        this.nombreInstitucion = nombreInstitucion;
    }

    public int getIdUsuario() {
        return idUsuario;
    }

    public void setIdUsuario(int idUsuario) {
        this.idUsuario = idUsuario;
    }

//    public int getIdInstitucion() {
//        return idInstitucion;
//    }
//
//    public void setIdInstitucion(int idInstitucion) {
//        this.idInstitucion = idInstitucion;
//    }

    public String getCorreoElectronico() {
        return correoElectronico;
    }

    public void setCorreoElectronico(String correoElectronico) {
        this.correoElectronico = correoElectronico;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellido() {
        return apellido;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    public ArrayList<String> getRoles() {
        return roles;
    }

    public void setRoles(ArrayList<String> roles) {
        this.roles = roles;
    }

    public ArrayList<String> getFuncionalidades() {
        return funcionalidades;
    }

    public void setFuncionalidades(ArrayList<String> funcionalidades) {
        this.funcionalidades = funcionalidades;
    }

}
