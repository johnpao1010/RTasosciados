package net.sigpue.client.gestorformularios;

import com.smartgwt.client.widgets.tab.Tab;
import net.sigpue.client.VariablesGenerales;

/**
 *
 * @author Jhonatan Alexander Peña. jpena@cltech.net. All rights reserved. CLTech 2013
 */
public class FormulariosDinamicosTab extends Tab
{

    public FormulariosDinamicosTab()
    {
        this.setTitle(VariablesGenerales.ETIQUETAS.personalizacionFormulariosDinamicos());
        this.setPane(new FormulariosCreadosVA());
    }
}
