/************************************************************************************************************
Brian Garnica. 2012. - bamgar@gmail.com
Personalización y extensión de las funcionalidades nativas de SP.
/************************************************************************************************************/

/************************************************************************************************************
Definición de funciones.
************************************************************************************************************/
/* Función para convertir en Tabs los editores de contenido de un page layout "Sección con Pestañas"*/
(function ($) {
    $.fn.wpTabify = function () {
        if ($('.ms-WPAddButton').size() == 0) {
            return this.each(function (i) {
                var tabList = $('<ul class="wpt-ui-tabs-nav"/>');
                var panels = $('<div class="wpt-ui-tabs-wrapper"/>');

                $(this).find('.s4-wpTopTable,td[id^="MSOZoneCell_"] > table').each(function (j) {
                    $(tabList).append('<li><a href="#ui-tab-panel' + i + j + '">' + $(this).find('h3.ms-WPTitle').text() + '</a></li>');

                    var thisPanel = $('<div id="ui-tab-panel' + i + j + '" class="wpt-ui-tabs-panel"/>');
                    var panelContents = $(this).detach();

                    $(thisPanel).append($(panelContents).find('.ms-WPBody').html());
                    $(panels).append(thisPanel);
                });

                if ($(tabList).find('li').size() > 0) {
                    $(this).prepend(panels);
                    $(this).prepend(tabList);
                    $(this).tabs();
                }
            });
        }
        else {
            return false;
        }
    };
})(jQuery);

String.prototype.endsWith = function (str) {
    return (this.match(str + "$") == str)
}

/**
*
*  Base64 encode / decode
*  http://www.webtoolkit.info/
*
**/

var Base64 = {

    // private property
    _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",

    // public method for encoding
    encode: function (input) {
        var output = "";
        var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
        var i = 0;

        input = Base64._utf8_encode(input);

        while (i < input.length) {

            chr1 = input.charCodeAt(i++);
            chr2 = input.charCodeAt(i++);
            chr3 = input.charCodeAt(i++);

            enc1 = chr1 >> 2;
            enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
            enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
            enc4 = chr3 & 63;

            if (isNaN(chr2)) {
                enc3 = enc4 = 64;
            } else if (isNaN(chr3)) {
                enc4 = 64;
            }

            output = output +
                this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) +
                this._keyStr.charAt(enc3) + this._keyStr.charAt(enc4);

        }

        return output;
    },

    // public method for decoding
    decode: function (input) {
        var output = "";
        var chr1, chr2, chr3;
        var enc1, enc2, enc3, enc4;
        var i = 0;

        input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

        while (i < input.length) {

            enc1 = this._keyStr.indexOf(input.charAt(i++));
            enc2 = this._keyStr.indexOf(input.charAt(i++));
            enc3 = this._keyStr.indexOf(input.charAt(i++));
            enc4 = this._keyStr.indexOf(input.charAt(i++));

            chr1 = (enc1 << 2) | (enc2 >> 4);
            chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
            chr3 = ((enc3 & 3) << 6) | enc4;

            output = output + String.fromCharCode(chr1);

            if (enc3 != 64) {
                output = output + String.fromCharCode(chr2);
            }
            if (enc4 != 64) {
                output = output + String.fromCharCode(chr3);
            }

        }

        output = Base64._utf8_decode(output);

        return output;

    },

    // private method for UTF-8 encoding
    _utf8_encode: function (string) {
        string = string.replace(/\r\n/g, "\n");
        var utftext = "";

        for (var n = 0; n < string.length; n++) {

            var c = string.charCodeAt(n);

            if (c < 128) {
                utftext += String.fromCharCode(c);
            }
            else if ((c > 127) && (c < 2048)) {
                utftext += String.fromCharCode((c >> 6) | 192);
                utftext += String.fromCharCode((c & 63) | 128);
            }
            else {
                utftext += String.fromCharCode((c >> 12) | 224);
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                utftext += String.fromCharCode((c & 63) | 128);
            }

        }

        return utftext;
    },

    // private method for UTF-8 decoding
    _utf8_decode: function (utftext) {
        var string = "";
        var i = 0;
        var c = c1 = c2 = 0;

        while (i < utftext.length) {

            c = utftext.charCodeAt(i);

            if (c < 128) {
                string += String.fromCharCode(c);
                i++;
            }
            else if ((c > 191) && (c < 224)) {
                c2 = utftext.charCodeAt(i + 1);
                string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
                i += 2;
            }
            else {
                c2 = utftext.charCodeAt(i + 1);
                c3 = utftext.charCodeAt(i + 2);
                string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
                i += 3;
            }

        }

        return string;
    }

}

function basicAuthenticationBuilder(user, password) {
    var tok = user + ':' + password;
    var hash = Base64.encode(tok);
    return "Basic " + hash;
}

/*
* jQuery UI Multilevel Accordion v.1
* 
* Copyright (c) 2011 Pieter Pareit
*
* http://www.scriptbreaker.com
*
*/

//plugin definition
(function ($) {
    $.fn.extend({

        //pass the options variable to the function
        accordion: function (options) {

            var defaults = {
                accordion: 'true',
                speed: 300,
                closedSign: '',
                openedSign: ''
            };

            // Extend our default options with those provided.
            var opts = $.extend(defaults, options);
            //Assign current element to variable, in this case is UL element
            var $this = $(this);

            //open active level
            $this.find("li.toplevel.activo").each(function () {
                $(this).parents("ul").slideDown(opts.speed);
                $(this).parents("ul").parent("li").find("span:first").html(opts.openedSign);
            });

            $this.find("li a").click(function () {
                if ($(this).parent().find("ul").size() != 0) {
                    if (opts.accordion) {
                        //Do nothing when the list is open
                        if (!$(this).parent().find("ul").is(':visible')) {
                            parents = $(this).parent().parents("ul");
                            visible = $this.find("ul:visible");
                            visible.each(function (visibleIndex) {
                                var close = true;
                                parents.each(function (parentIndex) {
                                    if (parents[parentIndex] == visible[visibleIndex]) {
                                        close = false;
                                        return false;
                                    }
                                });
                                if (close) {
                                    if ($(this).parent().find("ul") != visible[visibleIndex]) {
                                        $(visible[visibleIndex]).slideUp(opts.speed, function () {
                                            $(this).parent("li").find("span:first").html(opts.closedSign);
                                        });

                                    }
                                }
                            });
                        }
                    }
                }
            });
        }
    });
})(jQuery);


/* A ejecutar al término de la carga de la página*/
$(document).ready(function () {

    // Delay function execution until 'sp.js' is loaded.
    //ExecuteOrDelayUntilScriptLoaded(function () {

    // Turn content into tabs
    $('#INS-TabbedContent').wpTabify();

    // Turn corners to rounded -> Tabbed content
    $('#INS-TabbedContent').corner("top");

    // Turn corners to rounded -> left menu
    $('#leftMenu > li > a').corner("6px");

    // Turn corners to rounded -> WebPart Temas Interes
    $('#temasInteres > li > a').corner("5px");

    // Turn corners to rounded -> Boton Rojo
    $('.botonRojo').corner('3px');

    // Convert left menu to accordion
    $("#leftMenu").accordion({
        accordion: true,
        collapsible: true,
        active:true,
        speed: 500,
        closedSign: '',
        openedSign: ''
    });

    $('input[id$="InputKeywords"]').val("Buscar");

    $('.ms-rtestate-field').each(function () {
        if ($(this).parent().attr('id') == 'zone3') {
            $(this).addClass('noticiainsStyle-Content');
        }
    });

    if ($('#twitterSpace').children(':not(.tituloHeaderMenuLateralDerecha)').length <= 0) {
        $('#twitterSpace').removeClass('headerMenuLateralIzquierda');
        $('#twitterSpace > .tituloHeaderMenuLateralDerecha').hide();
    }
    else if (!$('#twitterSpace').hasClass('headerMenuLateralDerecha')) {
        $('#twitterSpace').addClass('headerMenuLateralDerecha');
        $('#twitterSpace').children('table').attr('width', '97%');
    }
    else {
        $('#twitterSpace').children('table').attr('width', '97%');
    }

    $('.linksHorizontales > li').last().css({ 'margin-right': '0px' });

    // Add background image on last top menu item
    $('div.menu-horizontal > ul.root > li').last().css({
        'background-image': 'url("/Style Library/INS/Images/division_menu_principal.png"), url("/Style Library/INS/Images/division_menu_principal.png")',
        'background-position-x': 'left, right',
        'background-position-y': '1px, 1px',
        'background-repeat': 'no-repeat, no-repeat',
        'background-attachment': 'scroll, scroll'
    });

    // Open last content editor added to tabbed zone
    $('.wpt-ui-tabs-wrapper > div[id^="ui-tab-panel"]').each(function () {
        if ($(this).is(':last-child')) {
            $(this).removeClass('ui-tabs-hide');
            $($('a[href="#' + $(this).attr('id') + '"]').parent()).addClass('ui-tabs-selected ui-state-active');
        }
        else {
            $(this).addClass('ui-tabs-hide');
            $($('a[href="#' + $(this).attr('id') + '"]').parent()).removeClass('ui-tabs-selected ui-state-active');
        }
    });

    // Hide Printer control if there is no div with "printable" class
    if ($('#fontsizer').parent().children('div.printable').length <= 0) {
        $('#printerControl').hide();
    }

    // change drop down menus href attribute
    $('div.menu-horizontal > ul.root.static > li.dynamic-children > a').each(function () {
        var currentHref = $(this).attr('href');
        $(this).attr('href', currentHref + '#');

        $(this).click(function (e) {
            e.preventDefault();
        });
    });

    // Fix search area posittion
    FixSearchAreaPosition();

    //}, "sp.js");
});

// Fixes for XHTML compliant validation
$(document).ready(function () {

    // Delay function execution until 'sp.js' is loaded.
    //ExecuteOrDelayUntilScriptLoaded(function () {
    // Add 'type' attribute to javascript scripts without it.
    $('script').not('[type]').each(function () {
        $(this).attr('type', 'text/javascript');
    });

    // Add 'alt' attribute to images without it.
    $('img').each(function () {
        var img = $(this);

        if (!img.attr('alt') || img.attr('alt') == '') {
            img.attr('alt', 'Auto Generated Attribute');
        }

        if (img.attr('align') == 'absmiddle')
            img.attr('align', 'middle');
    });
    //}, 'sp.js');
});

$(document).ready(function () {

    // Delay function execution until 'sp.js' is loaded.
    //ExecuteOrDelayUntilScriptLoaded(function () {
    // Change site icon in top menu bar
    if (typeof (arrLogos) != 'undefined') {
        $('.menu-horizontal > ul.root.static > li.static').not('.selected').each(function () {
            var href = $($(this).children('a.static')).attr('href');
            var siteURL = '';
            var indexOfPages = -1;
            var imageURL = '';

            indexOfPages = (href.indexOf('Paginas') - 1);

            if (indexOfPages > 0) {
                siteURL = href.substr(0, indexOfPages);
            }
            else if ((href.indexOf('Forms') - 1) > 0) {
                //indexOfPages = (href.indexOf('Forms') - 1);
                siteURL = href.substr(0, href.substr(1, href.length).indexOf('/') + 1)
            }
            else {
                siteURL = '/';
            }
            if (siteURL.trim() == '/') {
                imageURL = arrLogos["Root"];
            }
            else {
                imageURL = arrLogos[siteURL];
            }

            // Apply CSS
            $(this).hover(function () {
                // Apply CSS
                $(this).css('background-image', 'url(' + imageURL + ')');
                $(this).css('background-position', '50% 3px');
                $(this).css('background-repeat', 'no-repeat');
            },
            function () {
                $(this).css('background-image', 'url(/Style%20Library/INS/Images/division_menu_principal.png)');
                $(this).css('background-position', '1px 1px');
                $(this).css('background-repeat', 'no-repeat');
                
                $('div.menu-horizontal > ul.root > li').last().css({
			        'background-image': 'url("/Style Library/INS/Images/division_menu_principal.png"), url("/Style Library/INS/Images/division_menu_principal.png")',
			        'background-position-x': 'left, right',
			        'background-position-y': '1px, 1px',
			        'background-repeat': 'no-repeat, no-repeat',
			        'background-attachment': 'scroll, scroll'
			    });
            });
        });

        // change site icons in top menu bar when item is selected
        $('.menu-horizontal > ul.root.static > li.selected').each(function () {
            var href = $($(this).children('a.static')).attr('href');
            var siteURL = '';
            var indexOfPages = -1;
            var imageURL = '';

            indexOfPages = (href.indexOf('Paginas') - 1);

            if (indexOfPages > 0) {
                siteURL = href.substr(0, indexOfPages);
            }
            else if ((href.indexOf('Forms') - 1) > 0) {
                siteURL = href.substr(0, href.substr(1, href.length).indexOf('/') + 1)
            }
            else {
                siteURL = '/';
            }

            if (siteURL.trim() == '/') {
                imageURL = arrLogos["Root"];
            }
            else {
                imageURL = arrLogos[siteURL];
            }

            $(this).css('background-image', 'url(' + imageURL + ')');
            $(this).css('background-position', '50% 3px');
            $(this).css('background-repeat', 'no-repeat');
        });
    }

    // Insertar flecha desplegable
    $('ul.dynamic').prepend('<li class="dynamic flechaMenuDesplegable">&nbsp;</li>');
    //}, 'sp.js');
});

function openContactDialog() {
    ExecuteOrDelayUntilScriptLoaded(function () {
        var options =
	    {
	        url: '/Paginas/Contactenos.aspx',
	        title: "Contáctenos",
	        allowMaximize: false,
	        showClose: true
	    };

        SP.UI.ModalDialog.showModalDialog(options);
    }, "sp.js");
}

function openBeforePrintDialog()
{
	ExecuteOrDelayUntilScriptLoaded(function () {
        var options =
	    {
	        url: '/Paginas/mensaje-imprimir.aspx',
	        title: "Considere el Medio Ambiente",
	        allowMaximize: false,
	        showClose: true,
	        dialogReturnValueCallback: onClosePrintMessage
	    };

        SP.UI.ModalDialog.showModalDialog(options);
    }, "sp.js");
}

function onClosePrintMessage(dialogResult, returnValue) {
    $('.printable').print();
}

//Results displayed if 'OK' or 'Cancel' button is clicked if the html content has 'OK' and 'Cancel' buttons
function onDialogClose(dialogResult, returnValue) {
    if (dialogResult == SP.UI.DialogResult.OK) {
        if (returnValue == '') {
            location.href = 'http://www.google.com';
        }
    }

    if (dialogResult == SP.UI.DialogResult.cancel) {

    }
}

$(function () {
    // Delay function execution until 'sp.js' is loaded.
    //ExecuteOrDelayUntilScriptLoaded(function () {
    var theSearchBox = $('input[id$="InputKeywords"]');
    var defaultSearchText = "Buscar en este sitio...";
    var preferredSearchText = "Buscar";

    theSearchBox.css({ 'font-family': 'Arial', 'font-style': 'normal' });

    //replace the text initially
    theSearchBox.val(preferredSearchText);

    theSearchBox.focus(function () {
        if ($(this).val().indexOf(defaultSearchText) > -1)
            $(this).val(preferredSearchText);
    });

    theSearchBox.blur(function () {
        if ($(this).val().indexOf(defaultSearchText) > -1)
            $(this).val(preferredSearchText);
    });
    //}, 'sp.js');
});

function expandirTodoMenuLateral() {
    $('#leftMenu').find("li.toplevel").each(function () {
        $(this).children('ul').slideDown(300);
    });

    return false;
}

$(document).ready(function () {

    // Delay function execution until 'sp.js' is loaded.
    //ExecuteOrDelayUntilScriptLoaded(function () {
/*    $('#fontsizer').jfontsizer(
        {
            applyTo: '.ms-WPBody',
            changesmall: '2',
            changelarge: '2',
            expire: 30
        });

    $('#fontsizer').jfontsizer(
        {
            applyTo: '.ContenidoTab',
            changesmall: '2',
            changelarge: '2',
            expire: 30
        });
        */
    //}, 'sp.js');
});


/* Font Sizer */
/*
* 
* jFontSizer Plugin
* Written by fluidByte - http://www.fluidbyte.net
* 
* 
*/

jQuery.fn.jfontsizer = function (o) {

    // Cookie functions
    function setCookie(c_name, value, expiredays) {
        var exdate = new Date();
        exdate.setDate(exdate.getDate() + expiredays);
        document.cookie = c_name + "=" + escape(value) +
	((expiredays == null) ? "" : ";expires=" + exdate.toGMTString());
    }

    function getCookie(c_name) {
        if (document.cookie.length > 0) {
            c_start = document.cookie.indexOf(c_name + "=");
            if (c_start != -1) {
                c_start = c_start + c_name.length + 1;
                c_end = document.cookie.indexOf(";", c_start);
                if (c_end == -1) c_end = document.cookie.length;
                return unescape(document.cookie.substring(c_start, c_end));
            }
        }
        return "";
    }


    // Defaults
    var o = jQuery.extend({
        applyTo: 'body',
        changesmall: '2',
        changelarge: '2',
        expire: 30
    }, o);

    var s = '';
    var m = '';
    var l = '';

    // Current
    var c = 'fs_med';

    // Check cookie  
    if (getCookie('fsizer') != "") {
        var c = getCookie('fsizer');
        switch (c) {
            case 'fs_sml':
                s = 'fsactive';
                $(o.applyTo).css('font-size', '.' + (10 - o.changesmall) + 'em');
                break;
            case 'fs_med':
                m = 'fsactive';
                $(o.applyTo).css('font-size', '1em');
                break;
            case 'fs_lrg':
                l = 'fsactive';
                $(o.applyTo).css('font-size', '1.' + o.changelarge + 'em');
                break;
        }
    }
    else {
        m = "fsactive";
    }

    // Create font-chooser box
    $(this).html('<div class="fsizer"><div id="printerControl">Imprimir <a id="imprimir" class="botonImprimir" href="#" onclick="javascript:imprimirContenido();"></a>&nbsp;|&nbsp;</div><div id="fontSizerControl">Tamaño <a id="fs_sml" onclick="javascript:return false;" href="#" class="' + s + '">A</a>&nbsp;<a id="fs_med" onclick="javascript:return false;" href="#" class="' + m + '">A</a>&nbsp;<a id="fs_lrg" onclick="javascript:return false;" href="#" class="' + l + '">A</a></div><br style="clear: both" /></div>');


    $('.fsizer a').click(function () {

        var t = $(this).attr('id');

        setCookie('fsizer', t, o.expire);

        $('.fsizer a').removeClass('fsactive');
        $(this).addClass('fsactive');

        var f = $(o.applyTo).css('font-size');

        switch (t) {
            case 'fs_sml':
                $(o.applyTo).css('font-size', '.' + (10 - o.changesmall) + 'em');
                break;
            case 'fs_med':
                $(o.applyTo).css('font-size', '1em');
                break;
            case 'fs_lrg':
                $(o.applyTo).css('font-size', '1.' + o.changelarge + 'em');
                break;
        }
    });
};


// Create a jquery plugin that prints the given element.
jQuery.fn.print = function () {
    // NOTE: We are trimming the jQuery collection down to the
    // first element in the collection.
    if (this.size() > 1) {
        this.eq(0).print();
        return;
    } else if (!this.size()) {
        return;
    }

    // ASSERT: At this point, we know that the current jQuery
    // collection (as defined by THIS), contains only one
    // printable element.

    // Create a random name for the print frame.
    var strFrameName = ("printer-" + (new Date()).getTime());

    // Create an iFrame with the new name.
    var jFrame = $("<iframe name='" + strFrameName + "'>");

    // Hide the frame (sort of) and attach to the body.
    jFrame
		.css("width", "1px")
		.css("height", "1px")
		.css("position", "absolute")
		.css("left", "-9999px")
		.appendTo($("body:first"))
	;

    // Get a FRAMES reference to the new frame.
    var objFrame = window.frames[strFrameName];

    // Get a reference to the DOM in the new frame.
    var objDoc = objFrame.document;

    // Grab all the style tags and copy to the new
    // document so that we capture look and feel of
    // the current document.

    // Create a temp document DIV to hold the style tags.
    // This is the only way I could find to get the style
    // tags into IE.
    var jStyleDiv = $("<div>").append(
		$("style").clone()
		);

    // Write the HTML for the document. In this, we will
    // write out the HTML of the current element.
    objDoc.open();
    objDoc.write("<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">");
    objDoc.write("<html>");
    objDoc.write("<body>");
    objDoc.write("<head>");
    objDoc.write("<title>");
    objDoc.write(document.title);
    objDoc.write("</title>");
    objDoc.write(jStyleDiv.html());
    objDoc.write("</head>");
    objDoc.write(this.html());
    objDoc.write("</body>");
    objDoc.write("</html>");
    objDoc.close();

    // Print the document.
    objFrame.focus();
    objFrame.print();

    // Have the frame remove itself in about a minute so that
    // we don't build up too many of these frames.
    setTimeout(
		function () {
		    jFrame.remove();
		},
		(60 * 1000)
		);
}

function imprimirContenido() {
	openBeforePrintDialog();
}

function getUrlVars() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for (var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}

function HideRibbonInDialog() {
    /* Para invocar esta función: 
    1. Agregar WebPart de Editor de Contenido en la página correspondiente.
    2. Editar contenido como HTML
    3. Incluir la siguiente línea: <script type="text/javascript" language="javascript">javascriptHideRibbonInDialog();</script>
    */

    var isDlg = getUrlVars()['IsDlg'];
    if (isDlg == "1") {
        if ($('#s4-ribbonrow').length > 0) {
            $('#s4-ribbonrow').hide();
        }
    }
}

function FixSearchAreaPosition() {
    // detach search area and append it to main menu div
    var searchArea = $('#s4-searcharea').detach();

    searchArea.appendTo('.menu-horizontal');
}
