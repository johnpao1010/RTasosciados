/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package net.sigpue.client.gestorformularios;

import com.smartgwt.client.data.AdvancedCriteria;
import com.smartgwt.client.data.Criteria;
import com.smartgwt.client.data.DSCallback;
import com.smartgwt.client.data.DSRequest;
import com.smartgwt.client.data.DSResponse;
import com.smartgwt.client.widgets.layout.HLayout;
import com.smartgwt.client.widgets.layout.VLayout;
import com.smartgwt.client.widgets.menu.events.MenuItemClickEvent;
import com.smartgwt.client.widgets.tree.TreeGrid;
import com.smartgwt.client.widgets.tree.TreeGridField;
import com.smartgwt.client.widgets.tree.TreeNode;
import com.smartgwt.client.data.DataSource;
import com.smartgwt.client.data.Record;
import com.smartgwt.client.types.Alignment;
import com.smartgwt.client.util.BooleanCallback;
import com.smartgwt.client.util.SC;
import com.smartgwt.client.widgets.IButton;
import com.smartgwt.client.widgets.form.DynamicForm;
import com.smartgwt.client.widgets.grid.events.SelectionChangedHandler;
import com.smartgwt.client.widgets.grid.events.SelectionEvent;
import com.smartgwt.client.widgets.menu.Menu;
import com.smartgwt.client.widgets.menu.MenuItem;
import com.smartgwt.client.widgets.menu.events.ClickHandler;
import com.smartgwt.client.widgets.tree.events.NodeClickEvent;
import com.smartgwt.client.widgets.tree.events.NodeClickHandler;
import com.smartgwt.client.widgets.tree.events.NodeContextClickEvent;
import com.smartgwt.client.widgets.tree.events.NodeContextClickHandler;
import net.sigpue.client.VariablesGenerales;
import net.sigpue.client.interfaces.ArbolConnector;

public class ArbolEstructuraFomulario extends HLayout {

    static int idformulario;
    String idborrado;
    static int idtab;
    static int idseccion;
    private TreeGrid treeGrid = new TreeGrid();
    ArbolConnector connector;
    DataSource dsArbolDynamicForm;
    TreeNode node;
    AdvancedCriteria filtro;
    private IButton renderizar;
    private IButton formulario;
    FormulariosCreadosVA principal;
    DynamicForm formularioComponenteArbol;
    MotorRenderizacion ren;
    private DataSource preguntasDynamic;

    public ArbolEstructuraFomulario(ArbolConnector connector, int idformulario) {

        TreeGridField campo2 = new TreeGridField("nombre", VariablesGenerales.ETIQUETAS.nombrearbol());
        campo2.setCanSort(false);

        treeGrid.setFields(campo2);

        this.idtab = idtab;
        this.idseccion = idseccion;
        this.connector = connector;
        this.idformulario = idformulario;
        idborrado= String.valueOf(idformulario);
    }

    public void onModuleLoad(final VLayout navigationLayout) {

        try {
            dsArbolDynamicForm = DataSource.get("estructuraarbol");
            preguntasDynamic=DataSource.get("pregunta");

            getTreeGrid().addNodeContextClickHandler(new NodeContextClickHandler() {
                public void onNodeContextClick(NodeContextClickEvent event) {
                    node = event.getNode();
                    Menu menu = new Menu();
                    menu.setShowShadow(true);
                    menu.setShadowDepth(10);

                    if (node.getAttributeAsString("tipos").equals("FO")) {

                        final int padre = getTreeGrid().getRecord(event.getRecordNum()).getAttributeAsInt("id_estructura");
                        MenuItem newItem1 = new MenuItem(VariablesGenerales.ETIQUETAS.nuevapestaña(), "", "");
                        menu.setItems(newItem1);
                        getTreeGrid().setContextMenu(menu);
                        newItem1.addClickHandler(new com.smartgwt.client.widgets.menu.events.ClickHandler() {
                            public void onClick(MenuItemClickEvent event) {

                                connector.formClick(idformulario, padre);

                            }
                        });
                        
//                        desactiveItem1.addClickHandler(new ClickHandler() {
//                            public void onClick(MenuItemClickEvent event) {
//                                SC.ask(null,VariablesGenerales.ETIQUETAS.mensajeDesactivacion(), new BooleanCallback() {
//                                    @Override
//                                    public void execute(Boolean value) {
//
//                                        if (value != null & value) {
//
//                                            final Record recordAct = new Record(node.toMap());
//
//                                            final String idArbol = recordAct.getAttribute("Lab2026C01");
//
//                                            dsArbolDynamicForm.fetchData(new Criteria("Lab2052C01", idborrado), new DSCallback() {
//                                                @Override
//                                                public void execute(DSResponse response, Object rawData, DSRequest request) {
//                                                    Record[] record = response.getData();
//
//                                                    for (int i = 0; i < record.length; i++) {
//
//                                                        if (idArbol.equals(record[i].getAttribute("Lab2026C03"))) {
//                                                            record[i].setAttribute("Lab2049C01", 2);
//                                                            dsArbolDynamicForm.updateData(record[i]);
//                                                            treeGrid.saveAllEdits();
//                                                        }
//
//
//                                                    }
//                                                }
//                                            });
//                                        }
//                                    }
//                                });
//
//                            }
//                        });


                    }

                     else if (node.getAttributeAsString("tipos").equals("T")) {
                        final int padre = getTreeGrid().getRecord(event.getRecordNum()).getAttributeAsInt("id_estructura");
                        final int idtab = getTreeGrid().getRecord(event.getRecordNum()).getAttributeAsInt("codigofk");
                        MenuItem newItem2 = new MenuItem(VariablesGenerales.ETIQUETAS.nuevaseccion(), "", "");
                        menu.setItems(newItem2);
                        getTreeGrid().setContextMenu(menu);
                        newItem2.addClickHandler(new com.smartgwt.client.widgets.menu.events.ClickHandler() {
                            public void onClick(MenuItemClickEvent event) {

                                connector.tabClick(padre, idformulario, idtab);

                            }
                        });

                        

                    } else if (node.getAttributeAsString("tipos").equals("S")) {
                        final int padre = getTreeGrid().getRecord(event.getRecordNum()).getAttributeAsInt("id_estructura");
                        MenuItem newItem3 = new MenuItem(VariablesGenerales.ETIQUETAS.nuevapregunta(), "", "");
                        menu.setItems(newItem3);
                        getTreeGrid().setContextMenu(menu);
                        idseccion = getTreeGrid().getRecord(event.getRecordNum()).getAttributeAsInt("codigofk");

                        newItem3.addClickHandler(new com.smartgwt.client.widgets.menu.events.ClickHandler() {
                            public void onClick(MenuItemClickEvent event) {
                                connector.seccionClick(idseccion, padre, idformulario);
                            }
                        });

                    }
                }
            });

            HLayout botonlayout = new HLayout();
            botonlayout.setAutoHeight();
            botonlayout.setAutoWidth();
            botonlayout.setMembersMargin(10);
            botonlayout.setLayoutAlign(Alignment.CENTER);

            renderizar = new IButton();
            renderizar.setTitle(VariablesGenerales.ETIQUETAS.vistapreviabuton());
            renderizar.setAlign(Alignment.CENTER);
            renderizar.addClickHandler(new com.smartgwt.client.widgets.events.ClickHandler() {
                public void onClick(com.smartgwt.client.widgets.events.ClickEvent event) {
                    ren = new MotorRenderizacion(idformulario);

                }
            });

            botonlayout.addMember(renderizar);


            getTreeGrid().setWidth100();
            getTreeGrid().setHeight100();
            getTreeGrid().setDataSource(dsArbolDynamicForm);
            AdvancedCriteria filtro = new AdvancedCriteria();
            filtro.addCriteria(new Criteria("id_estado", "1"));
            getTreeGrid().setCanReorderRecords(true);
            getTreeGrid().setCanAcceptDroppedRecords(true);
            getTreeGrid().setAutoFetchData(true);
            treefilter();
//           
            getTreeGrid().addNodeClickHandler(new NodeClickHandler() {
                @Override
                public void onNodeClick(NodeClickEvent event) {
                    Record r = new Record(getTreeGrid().getSelectedRecord().toMap());
                    connector.formedit(r, r.getAttribute("tipos"));
                }
            });

            navigationLayout.addMember(getTreeGrid());
            navigationLayout.addMember(botonlayout);

        } catch (Exception ex) {
            com.google.gwt.user.client.Window.alert(ex.toString());
        }

    }

    public void destruir() {
        getTreeGrid().destroy();
    }

    public TreeGrid getTreeGrid() {
        return treeGrid;
    }

    public void setTreeGrid(TreeGrid treeGrid) {
        this.treeGrid = treeGrid;
    }

    public void treefilter() {
        filtro = new AdvancedCriteria();
        filtro.addCriteria(new Criteria("id_formulario", String.valueOf(idformulario)));
        filtro.addCriteria(new Criteria("id_estado", "1"));
        treeGrid.setCriteria(filtro);

    }
}
