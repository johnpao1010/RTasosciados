/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package net.sigpue.client.gestorformularios;

import com.smartgwt.client.data.Criteria;
import com.smartgwt.client.data.DSCallback;
import com.smartgwt.client.data.DSRequest;
import com.smartgwt.client.data.DSResponse;
import com.smartgwt.client.data.DataSource;
import com.smartgwt.client.data.Record;
import com.smartgwt.client.types.Alignment;
import com.smartgwt.client.widgets.Window;
import com.smartgwt.client.widgets.form.DynamicForm;
import com.smartgwt.client.widgets.form.fields.RadioGroupItem;
import com.smartgwt.client.widgets.form.fields.events.ChangeEvent;
import com.smartgwt.client.widgets.form.fields.events.ChangeHandler;
import com.smartgwt.client.widgets.layout.HLayout;
import net.sigpue.client.VariablesGenerales;
import net.sigpue.client.interfaces.SeleccionComponenteConnector;

/**
 *
 * @author JDURAN
 */
public class SeleccionTipoComponente extends HLayout
{

//    HLayout GruopLayout = new HLayout();
    SeleccionComponenteConnector componente;
    DynamicForm groupform = new DynamicForm();
    Window window;
    int formulario;
    int idPadre;
    int idSeccion;
//    int tipocontrol;


    public SeleccionTipoComponente(SeleccionComponenteConnector componente , int formulario, int idPadre , int idSeccion)
    {
        this.idSeccion=idSeccion;
//        this.tipocontrol=tipocontrol;
        this.idPadre=idPadre;
        this.formulario=formulario;
        this.componente = componente;
        createWin();
    }

    public void createWin()
    {
        try
        {
            try
            {

                groupform.setAutoHeight();
                groupform.setAutoWidth();

                DataSource componente = DataSource.get("tipo_control");

                componente.fetchData(new Criteria("id_estado", "1"), new DSCallback()
                {

                    public void execute(DSResponse response, Object rawData, DSRequest request)
                    {
                        final String[] array = new String[response.getData().length];
                        for (int i = 0; i < array.length; i++)
                        {
                            array[i] = response.getData()[i].getAttribute("nombre_tipocontrol");

                        }
                        RadioGroupItem Componentes = new RadioGroupItem();
                        Componentes.setTitle(VariablesGenerales.ETIQUETAS.componente());
                        Componentes.setWidth(150);
                        Componentes.setHeight(150);
                        Componentes.setAlign(Alignment.CENTER);
                        Componentes.setValueMap(array);
                        Componentes.addChangeHandler(new ChangeHandler()
                        {

                            public void onChange(ChangeEvent event)
                            {
                                String item = (String) event.getValue();
                                getComponent(item);
                                window.destroy();


                            }
                        });

                        groupform.setItems(Componentes);

                    }
                });

                window = new Window();
                window.setTitle(VariablesGenerales.ETIQUETAS.seleccionTipoComponente());
                window.setWidth(310);
                window.setHeight(300);
                window.setCanDragReposition(true);
                window.setCanDragResize(false);
                window.setShowMinimizeButton(false);
                window.addItem(groupform);
                window.setIsModal(true);
                window.setShowModalMask(true);
                window.centerInPage();

                window.draw();
            } catch (Exception ex)
            {
                com.google.gwt.user.client.Window.alert(ex.toString());
            }

        } catch (Exception ex)
        {
            com.google.gwt.user.client.Window.alert(ex.toString());
        }
    }

    private void getComponent(String tipo)
    {
        PropiedadesComponente comp = new PropiedadesComponente(formulario, idPadre, idSeccion);
        if (tipo.equals("Caja de selección"))
            {
            componente.componenteseleccionado(comp.pintarCheckboxItem(null));
                }
           else
           if (tipo.equals("Lista desplegable"))
                 {
                 componente.componenteseleccionado(comp.pintarComboBoxItem(null));
                 }
            else
            if (tipo.equals("Fecha"))
             {
                  componente.componenteseleccionado(comp.pintarDateItem(null));
             }
            else
             if (tipo.equals("Entero"))
            {
             componente.componenteseleccionado(comp.pintarIntegerItem(null));
            }
              else
             if (tipo.equals("Selección exclusiva"))
             {
             componente.componenteseleccionado(comp.pintarRadioGroupItem(null));
             }
             else
             if (tipo.equals("Editor"))
             {
              componente.componenteseleccionado(comp.pintarRichTextItem(null));
             }
             else
              if (tipo.equals("Rango"))
              {
              componente.componenteseleccionado(comp.pintarSpinnertItem(null));
              }
               else
              if (tipo.equals("Área de texto"))
              {
              componente.componenteseleccionado(comp.pintarTextAreaItem(null));
              }
              else
              if (tipo.equals("Caja de texto"))
              {
              componente.componenteseleccionado(comp.pintarTextItem(null));
              }
              else
              if (tipo.equals("Espacio en blanco"))
              {
              componente.componenteseleccionado(comp.pintarSpacerItem(null));
              }
              else
              if (tipo.equals("Botón"))
              {
              componente.componenteseleccionado(comp.pintarIbuttonItem(null));
              }

     }
  }
