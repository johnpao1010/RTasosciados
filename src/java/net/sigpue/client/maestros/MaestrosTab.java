package net.sigpue.client.maestros;

import com.smartgwt.client.widgets.tab.Tab;
import net.sigpue.client.Menu;
import net.sigpue.client.VariablesGenerales;
import net.sigpue.client.Menu;
import net.sigpue.client.VariablesGenerales;

/**
 *
 * @author arojas
 */
public class MaestrosTab extends Tab
{

    public MaestrosTab()
    {
        this.setTitle(VariablesGenerales.ETIQUETAS.configuracion());
        this.setPane(new Menu().getMenu());
    }
}
