package net.sigpue.client;

import com.smartgwt.client.widgets.Img;
import com.smartgwt.client.widgets.Window;



public class VentanaCargando {
    private Window winModal = null;
    private Img img = new Img("loading.gif", 200, 100);
    public void mostrar(){
        if(winModal==null){
            winModal = new Window();
        }
        winModal.setOpacity(90);
        winModal.setWidth(200);
        winModal.setHeight(100);
        winModal.setBorder("0px");
        winModal.setShowMinimizeButton(false);
        winModal.setShowHeader(false);
        winModal.setShowEdges(false);
        winModal.setShowHeaderBackground(false);
        winModal.setShowHeaderIcon(false);
        winModal.setShowStatusBar(false);
        winModal.setShowTitle(false);
        winModal.setIsModal(true);
        winModal.setShowModalMask(true);
        winModal.centerInPage();
        winModal.addMember(img);
        winModal.show();
    }
    public void ocultar(){
        if(winModal!=null){
            winModal.hide();
            winModal.destroy();
            winModal=null;
        }
    }

}
