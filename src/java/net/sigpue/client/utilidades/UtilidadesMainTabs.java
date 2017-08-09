package net.sigpue.client.utilidades;

import com.smartgwt.client.types.Side;
import com.smartgwt.client.widgets.Canvas;
import com.smartgwt.client.widgets.layout.VLayout;
import com.smartgwt.client.widgets.tab.TabSet;
import net.sigpue.client.VariablesSesion;

/**
 *
 * @author jpena - Jhonatan Alexander Peña. jpena@cltech.net.
 * CLTech - Clinical Laboratory Technology
 * All rights reserved. CLTech 2013
 *
 */

public class UtilidadesMainTabs extends TabSet
{   
    public Canvas CreateUtilidadesMainTabs()
    {
        setTabBarPosition(Side.TOP);
        setWidth("100%");
        setHeight("100%"); 
//        addTab(new CargadorArchivosIndividualTab());
        
       // if(VariablesSesion .usuario.getIdTipoInstitucion())
//        addTab(new CargadorArchivosConsolidadoTab());
        
        final VLayout vl = new VLayout();
        vl.setMembers(this);
        vl.setSize("100%", "100%");
        return vl;
    }
}
