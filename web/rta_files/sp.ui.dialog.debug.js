function ULSTYE(){var o=new Object;o.ULSTeamName="Microsoft SharePoint Foundation";o.ULSFileName="SP.UI.Dialog.debug.js";return o;}

Type.registerNamespace('SP.UI');

SP.UI.DialogResult = function() {}
SP.UI.DialogResult.prototype = {
    invalid: -1, 
    cancel: 0, 
    OK: 1
}
SP.UI.DialogResult.registerEnum('SP.UI.DialogResult', false);


SP.UI.DialogOptions = function() {}
SP.UI.$create_DialogOptions = function() {ULSTYE:;
    return new SP.UI.DialogOptions();
}


SP.UI.Dialog = function(options) {ULSTYE:;
    this.$1X = Function.createDelegate(this, this.$2Q_0);
    this.$1J = Function.createDelegate(this, this.autoSize);
    this.$1M = Function.createDelegate(this, this.$1u_0);
    this.$1V = Function.createDelegate(this, this.$2J_0);
    this.$1L = Function.createDelegate(this, this.$1t_0);
    this.$1K = Function.createDelegate(this, this.$1q_0);
    this.$1O = Function.createDelegate(this, this.$1z_0);
    this.$1N = Function.createDelegate(this, this.$1x_0);
    this.$x = Function.createDelegate(this, this.$27_0);
    this.$y = Function.createDelegate(this, this.$28_0);
    this.$w = Function.createDelegate(this, this.$1r);
    this.$Y = Function.createDelegate(this, this.$1s_0);
    this.$z = Function.createDelegate(this, this.$1k_0);
    this.$1Z = Function.createDelegate(this, this.$2S_0);
    this.$1Y = Function.createDelegate(this, this.$2R_0);
    this.$1W = Function.createDelegate(this, this.$2K_0);
    this.$q_0 = -1;
    this.$G_0 = options;
    this.$14_0 = options.args;
    this.$W_0 = options.width;
    if (this.$W_0 < 0) {
        this.$W_0 = null;
    }
    if (SP.ScriptUtility.isNullOrUndefined(this.$W_0)) {
        this.$W_0 = parseInt(SP.Res.defaultDialogWidth);
    }
    this.$R_0 = options.height;
    if (this.$R_0 < 0) {
        this.$R_0 = null;
    }
    if (SP.ScriptUtility.isNullOrUndefined(this.$R_0)) {
        this.$R_0 = parseInt(SP.Res.defaultDialogHeight);
    }
    this.$n_0 = options.autoSize;
    if (SP.ScriptUtility.isNullOrUndefined(this.$n_0)) {
        this.$n_0 = true;
    }
    this.$a_0 = options.dialogReturnValueCallback;
    this.$j_0 = options.url;
    this.$k_0 = options.x;
    if (this.$k_0 < 0) {
        this.$k_0 = null;
    }
    this.$l_0 = options.y;
    if (this.$l_0 < 0) {
        this.$l_0 = null;
    }
    this.$E_0 = options.html;
    this.$P_0 = options.title;
    if (SP.ScriptUtility.isNullOrUndefined(options.allowMaximize)) {
        this.$d_0 = true;
    }
    else {
        this.$d_0 = options.allowMaximize;
    }
    if (SP.ScriptUtility.isNullOrUndefined(options.showMaximized)) {
        this.$1D_0 = false;
    }
    else {
        this.$1D_0 = options.showMaximized;
    }
    if (SP.ScriptUtility.isNullOrUndefined(options.showClose)) {
        this.$t_0 = true;
    }
    else {
        this.$t_0 = options.showClose;
    }
}
SP.UI.Dialog.get_$1 = function() {ULSTYE:;
    return window.self._dlgWndTop();
}
SP.UI.Dialog.$1b_0 = function() {ULSTYE:;
    if (!SP.UI.Dialog.$V_0) {
        var $v_0 = document.createElement('p');
        $v_0.style.width = '100%';
        $v_0.style.height = '100px';
        var $v_1 = document.createElement('div');
        $v_1.style.position = 'absolute';
        $v_1.style.visibility = 'hidden';
        $v_1.style.width = '100px';
        $v_1.style.height = '50px';
        $v_1.appendChild($v_0);
        document.body.appendChild($v_1);
        $v_1.style.overflow = 'hidden';
        var $v_2 = $v_0.offsetWidth;
        $v_1.style.overflow = 'scroll';
        var $v_3 = $v_0.offsetWidth;
        if ($v_2 === $v_3) {
            $v_3 = $v_1.clientWidth;
        }
        document.body.removeChild($v_1);
        SP.UI.Dialog.$V_0 = $v_2 - $v_3;
        if (!SP.UI.Dialog.$V_0) {
            SP.UI.Dialog.$V_0 = 17;
        }
    }
    return SP.UI.Dialog.$V_0;
}
SP.UI.Dialog.$1d = function($p0) {
    var $v_0;
    $v_0 = $p0.document.documentElement.clientWidth;
    if (SP.ScriptUtility.isNullOrUndefined($v_0) || $v_0 <= 0) {
        $v_0 = $p0.innerWidth;
    }
    if (SP.ScriptUtility.isNullOrUndefined($v_0) || $v_0 <= 0) {
        $v_0 = $p0.document.body.clientWidth;
    }
    return $v_0;
}
SP.UI.Dialog.$1c = function($p0) {
    var $v_0;
    $v_0 = $p0.document.documentElement.clientHeight;
    if (SP.ScriptUtility.isNullOrUndefined($v_0) || $v_0 <= 0) {
        $v_0 = $p0.innerHeight;
    }
    if (SP.ScriptUtility.isNullOrUndefined($v_0) || $v_0 <= 0) {
        $v_0 = $p0.document.body.clientHeight;
    }
    return $v_0;
}
SP.UI.Dialog.$12 = function($p0) {
    var $v_0 = 0;
    if (!SP.ScriptUtility.isNullOrUndefined($p0.documentElement) && !SP.ScriptUtility.isNullOrUndefined($p0.documentElement.scrollWidth) && !SP.ScriptUtility.isNullOrUndefined($p0.documentElement.offsetWidth)) {
        $v_0 = Math.max($p0.documentElement.scrollWidth, $p0.documentElement.offsetWidth);
    }
    return Math.max($p0.body.scrollWidth, $p0.body.offsetWidth, $v_0);
}
SP.UI.Dialog.$11 = function($p0) {
    var $v_0 = 0;
    if (!SP.ScriptUtility.isNullOrUndefined($p0.documentElement) && !SP.ScriptUtility.isNullOrUndefined($p0.documentElement.scrollHeight) && !SP.ScriptUtility.isNullOrUndefined($p0.documentElement.offsetHeight)) {
        $v_0 = Math.max($p0.documentElement.scrollHeight, $p0.documentElement.offsetHeight);
    }
    return Math.max($p0.body.scrollHeight, $p0.body.offsetHeight, $v_0);
}
SP.UI.Dialog.$24 = function($p0) {
    var $v_0 = $p0.pageXOffset;
    if (!SP.ScriptUtility.isNullOrUndefined($v_0)) {
        return $v_0;
    }
    if (!(Sys.Browser.agent === Sys.Browser.InternetExplorer && Sys.Browser.version === 7) && !SP.ScriptUtility.isNullOrUndefined($p0.document.documentElement) && !SP.ScriptUtility.isNullOrUndefined($p0.document.documentElement.scrollLeft)) {
        return $p0.document.documentElement.scrollLeft;
    }
    return $p0.document.body.scrollLeft;
}
SP.UI.Dialog.$26 = function($p0) {
    var $v_0 = $p0.pageYOffset;
    if (!SP.ScriptUtility.isNullOrUndefined($v_0)) {
        return $v_0;
    }
    if (!SP.ScriptUtility.isNullOrUndefined($p0.document.documentElement) && !SP.ScriptUtility.isNullOrUndefined($p0.document.documentElement.scrollTop)) {
        return $p0.document.documentElement.scrollTop;
    }
    return $p0.document.body.scrollTop;
}
SP.UI.Dialog.$1o_0 = function($p0) {
    if ($p0.length > 2040) {
        $p0 = $p0.substr(0, 2040);
    }
    if ($p0.indexOf('?') < 0) {
        $p0 = $p0 + '?IsDlg=1';
    }
    else {
        if (!$p0.endsWith('&')) {
            $p0 = $p0 + '&';
        }
        $p0 = $p0 + 'IsDlg=1';
    }
    return $p0;
}
SP.UI.Dialog.$1m_0 = function($p0) {
    $p0.setAttribute('href', 'javascript:;');
}
SP.UI.Dialog.get_$X_0 = function() {ULSTYE:;
    var $v_0 = SP.UI.Dialog.get_$1().g_overlayPopup;
    if (SP.ScriptUtility.isNullOrUndefined($v_0)) {
        return null;
    }
    return $v_0;
}
SP.UI.Dialog.set_$X_0 = function($p0) {
    SP.UI.Dialog.get_$1().g_overlayPopup = $p0;
    return $p0;
}
SP.UI.Dialog.$2T_0 = function($p0) {
    var $v_0 = SP.UI.Dialog.get_$X_0();
    if ($v_0) {
        SP.UI.UIUtility.removeNode($v_0);
        SP.UI.Dialog.get_$1().setTimeout(SP.UI.Dialog.$2U_0, 20);
    }
    var $v_1 = SP.UI.ModalDialog.get_childDialog();
    while ($v_1) {
        $v_1.$2L();
        $v_1 = $v_1.$o_1;
    }
}
SP.UI.Dialog.$2U_0 = function() {ULSTYE:;
    if (SP.UI.Dialog.$K_0) {
        $removeHandler(SP.UI.Dialog.get_$1(), 'resize', SP.UI.Dialog.$K_0);
    }
    var $v_0 = SP.UI.Dialog.get_$X_0();
    if ($v_0) {
        var $v_1 = SP.UI.Dialog.$12(SP.UI.Dialog.get_$1().document);
        $v_0.style.width = $v_1.toString() + 'px';
        var $v_2 = SP.UI.Dialog.$11(SP.UI.Dialog.get_$1().document);
        $v_0.style.height = $v_2.toString() + 'px';
        SP.UI.Dialog.get_$1().document.body.appendChild(SP.UI.Dialog.get_$X_0());
    }
    if (SP.UI.Dialog.$K_0) {
        $addHandler(SP.UI.Dialog.get_$1(), 'resize', SP.UI.Dialog.$K_0);
    }
}
SP.UI.Dialog.prototype = {
    $H_0: null,
    $6_0: null,
    $4_0: null,
    $0_0: null,
    $c_0: null,
    $2_0: null,
    $18_0: null,
    $I_0: null,
    $a_0: null,
    $j_0: null,
    $k_0: 0,
    $l_0: 0,
    $W_0: 0,
    $R_0: 0,
    $17_0: 0,
    $G_0: null,
    $1i_0: false,
    $T_0: 0,
    $U_0: 0,
    $B_0: 0,
    $A_0: 0,
    $S_0: false,
    $1D_0: false,
    $9_0: null,
    $5_0: null,
    $3_0: null,
    $p_0: false,
    $h_0: null,
    $n_0: false,
    $M_0: null,
    $D_0: null,
    $C_0: null,
    $J_0: null,
    
    get_firstTabStop: function() {ULSTYE:;
        return this.$J_0;
    },
    
    $F_0: null,
    
    get_lastTabStop: function() {ULSTYE:;
        if (!this.$F_0) {
            this.$25_0();
        }
        if (this.$F_0) {
            return this.$F_0;
        }
        else {
            return null;
        }
    },
    
    get_url: function() {ULSTYE:;
        return this.$j_0;
    },
    
    $E_0: null,
    
    get_html: function() {ULSTYE:;
        return this.$E_0;
    },
    
    $P_0: null,
    
    get_title: function() {ULSTYE:;
        return this.$P_0;
    },
    
    $14_0: null,
    
    get_args: function() {ULSTYE:;
        return this.$14_0;
    },
    
    $d_0: false,
    
    get_allowMaximize: function() {ULSTYE:;
        return this.$d_0;
    },
    
    $t_0: false,
    
    get_showClose: function() {ULSTYE:;
        return this.$t_0;
    },
    
    $g_0: null,
    
    get_returnValue: function() {ULSTYE:;
        return this.$g_0;
    },
    set_returnValue: function(value) {ULSTYE:;
        this.$g_0 = value;
        return value;
    },
    
    get_$10_0: function() {ULSTYE:;
        if (this.$n_0 && (SP.ScriptUtility.isNullOrUndefined(this.$G_0.width) || SP.ScriptUtility.isNullOrUndefined(this.$G_0.height))) {
            return true;
        }
        return false;
    },
    
    $1g: function() {ULSTYE:;
        this.$1w_0();
        if (this.$L_0 > 0) {
            this.$2N_0((this.$L_0 - 1));
        }
        if (this.get_$10_0() && this.$0_0) {
            window.setTimeout(Function.createDelegate(this, function() {ULSTYE:;
                if (!this.$1i_0 && !this.$p_0) {
                    this.$M_0 = SP.UI.ModalDialog.$2O();
                }
            }), 1000);
            this.$1H_0(false);
        }
        else {
            this.$1H_0(true);
        }
    },
    
    $1f_0: function() {ULSTYE:;
        if (!this.$9_0) {
            this.$9_0 = new SP.Application.UI.DragBehavior(this.$2_0, this.$6_0);
            this.$9_0.$1n(this.$4_0);
            this.$9_0.$1v(this.$0_0);
            this.$9_0.initialize();
        }
    },
    
    $1y_0: function() {ULSTYE:;
        if (this.$9_0) {
            this.$9_0.dispose();
            this.$9_0 = null;
        }
    },
    
    $1r: function($p0) {
        this.close(0);
        $p0.preventDefault();
    },
    
    $27_0: function($p0) {
        if (this.$J_0) {
            try {
                this.$J_0.focus();
            }
            catch ($$e_2_0) {
            }
        }
    },
    
    $28_0: function($p0) {
        if (this.get_lastTabStop()) {
            try {
                this.get_lastTabStop().focus();
            }
            catch ($$e_2_0) {
            }
        }
        else {
            if (this.$J_0) {
                try {
                    this.$J_0.focus();
                }
                catch ($$e_3_0) {
                }
            }
        }
    },
    
    $1s_0: function($p0) {
        $p0.stopPropagation();
    },
    
    $2R_0: function($p0) {
        this.$6_0.style.cursor = 'move';
    },
    
    $2S_0: function($p0) {
        this.$6_0.style.cursor = 'default';
    },
    
    $1k_0: function($p0) {
        if (this.$S_0) {
            this.$3_0.innerHTML = '<span style=\"height:18px;width:18px;position:relative;display:inline-block;overflow:hidden;\" class=\"s4-clust\"><img src=\"/_layouts/images/fgimg.png\" style=\"left:-0px !important;top:-676px !important;position:absolute;\" class=\'ms-dlgCloseBtnImg\' /></span>';
            this.$3_0.setAttribute('title', SP.Res.maximize);
            this.$Q_0(this.$B_0, this.$A_0);
            this.$m_0(this.$T_0, this.$U_0);
        }
        else {
            this.$T_0 = this.$2_0.offsetLeft;
            this.$U_0 = this.$2_0.offsetTop;
            if (this.$0_0) {
                this.$B_0 = this.$0_0.offsetWidth;
                this.$A_0 = this.$0_0.offsetHeight;
            }
            else {
                this.$B_0 = this.$I_0.offsetWidth;
                this.$A_0 = this.$I_0.offsetHeight;
            }
            this.$3_0.innerHTML = '<span style=\"height:18px;width:18px;position:relative;display:inline-block;overflow:hidden;\" class=\"s4-clust\"><img src=\"/_layouts/images/fgimg.png\" style=\"left:-0px !important;top:-694px !important;position:absolute;\" class=\'ms-dlgCloseBtnImg\' /></span>';
            this.$3_0.setAttribute('title', SP.Res.restore);
            this.$1G_0();
        }
        this.$S_0 = !this.$S_0;
        if (this.$S_0) {
            this.$1y_0();
        }
        else {
            this.$1f_0();
        }
        if ($p0) {
            $p0.preventDefault();
        }
        if (this.$3_0) {
            SP.UI.Dialog.get_$1().setTimeout(this.$1W, 0);
        }
    },
    
    $2K_0: function() {ULSTYE:;
        this.$3_0.focus();
    },
    
    $1x_0: function($p0) {
        if (this.$0_0) {
            if (this.$0_0.contentWindow) {
                this.$0_0.contentWindow.focus();
            }
        }
    },
    
    $1G_0: function() {ULSTYE:;
        var $v_0 = this.$1a_0();
        this.$m_0(10, 10);
        this.$Q_0($v_0[0], $v_0[1]);
    },
    
    $2L: function() {ULSTYE:;
        if (this.$S_0) {
            this.$1G_0();
        }
    },
    
    $m_0: function($p0, $p1) {
        this.$4_0.style.left = $p0 + 'px';
        this.$4_0.style.top = $p1 + 'px';
        this.$2_0.style.left = $p0 + 'px';
        this.$2_0.style.top = $p1 + 'px';
    },
    
    $Q_0: function($p0, $p1) {
        if ($p0 <= 0 || $p1 <= 0) {
            return;
        }
        var $v_0 = $p1 + this.$6_0.offsetHeight;
        this.$18_0.style.width = $p0 + 'px';
        this.$18_0.style.height = $v_0 + 'px';
        this.$2_0.style.width = ($p0 + 2) + 'px';
        this.$2_0.style.height = ($v_0 + 2) + 'px';
        if (this.$0_0) {
            this.$0_0.style.width = $p0.toString() + 'px';
            this.$0_0.style.height = $p1.toString() + 'px';
        }
        else {
            this.$I_0.style.width = $p0.toString() + 'px';
            this.$I_0.style.height = $p1.toString() + 'px';
        }
        this.$6_0.style.width = $p0.toString() + 'px';
        this.$H_0.style.width = Math.max(this.$6_0.offsetWidth - 64, 0) + 'px';
        this.$4_0.style.width = $p0 + 'px';
        this.$4_0.style.height = $v_0 + 'px';
    },
    
    $2B_0: function() {ULSTYE:;
        var $v_0 = this.$1a_0();
        var $v_1 = $v_0[0];
        var $v_2 = $v_0[1];
        var $v_3 = false;
        if (this.$B_0 > $v_1) {
            this.$B_0 = $v_1;
            $v_3 = true;
        }
        if (this.$A_0 > $v_2) {
            this.$A_0 = $v_2;
            $v_3 = true;
        }
        if ($v_3) {
            this.$Q_0(this.$B_0, this.$A_0);
        }
        $v_3 = false;
        if (this.$2_0.offsetLeft + this.$2_0.offsetWidth > $v_1 + 20) {
            this.$T_0 = 10;
            $v_3 = true;
        }
        if (this.$2_0.offsetTop + this.$2_0.offsetHeight > $v_2 + 20) {
            this.$U_0 = 10;
            $v_3 = true;
        }
        if ($v_3) {
            this.$m_0(this.$T_0, this.$U_0);
        }
    },
    
    $1a_0: function() {ULSTYE:;
        var $v_0 = SP.UI.Dialog.get_$1();
        var $v_1 = SP.UI.Dialog.$1d($v_0) - 2;
        var $v_2 = SP.UI.Dialog.$1c($v_0) - 2;
        if ($v_1 > 20) {
            $v_1 = $v_1 - 20;
        }
        $v_2 = $v_2 - this.$6_0.offsetHeight;
        if ($v_2 > 20) {
            $v_2 = $v_2 - 20;
        }
        var $v_3 = new Array(2);
        $v_3[0] = $v_1;
        $v_3[1] = $v_2;
        return $v_3;
    },
    
    autoSize: function() {ULSTYE:;
        var $v_0 = 0;
        var $v_1 = 0;
        this.$Q_0((SP.ScriptUtility.isNullOrUndefined(this.$G_0.width)) ? 500 : this.$G_0.width, (SP.ScriptUtility.isNullOrUndefined(this.$G_0.height)) ? 20 : this.$G_0.height);
        if (this.$0_0) {
            try {
                var $v_2 = this.$0_0.contentWindow.document;
                var $v_3 = $v_2.getElementById('s4-ribbonrow');
                var $v_4 = $v_2.getElementById('s4-workspace');
                if ($v_3 && $v_4) {
                    var $v_5 = $v_4.style;
                    var $v_6 = $v_3.style;
                    var $v_7 = $v_5.width;
                    var $v_8 = $v_5.height;
                    var $v_9 = $v_6.width;
                    var $v_A = $v_6.height;
                    $v_5.width = '';
                    $v_5.height = '';
                    $v_6.width = '';
                    $v_6.height = '';
                    $v_0 = Math.max($v_3.offsetWidth, $v_4.scrollWidth);
                    $v_1 = $v_3.offsetHeight + $v_4.scrollHeight;
                    $v_5.width = $v_7;
                    $v_5.height = $v_8;
                    $v_6.width = $v_9;
                    $v_6.height = $v_A;
                }
                else {
                    var $v_B = $v_2.getElementById('ms-notdlgautosize');
                    if ($v_B) {
                        $v_0 = parseInt(SP.Res.defaultDialogWidth);
                        $v_1 = parseInt(SP.Res.defaultDialogHeight);
                    }
                    else {
                        $v_0 = this.$0_0.contentWindow.document.body.scrollWidth;
                        $v_1 = this.$0_0.contentWindow.document.body.scrollHeight;
                    }
                }
            }
            catch ($$e_2_0) {
            }
        }
        else if (this.$E_0) {
            $v_0 = this.$E_0.scrollWidth;
            $v_1 = this.$E_0.scrollHeight;
        }
        $v_0 += SP.UI.Dialog.$1b_0();
        $v_1 += SP.UI.Dialog.$1b_0();
        if ($v_0 < 50) {
            $v_0 = parseInt(SP.Res.defaultDialogWidth);
        }
        if ($v_1 < 20) {
            $v_1 = parseInt(SP.Res.defaultDialogHeight);
        }
        if (SP.ScriptUtility.isNullOrUndefined(this.$G_0.height)) {
            this.$A_0 = $v_1;
        }
        if (SP.ScriptUtility.isNullOrUndefined(this.$G_0.width)) {
            this.$B_0 = $v_0;
        }
        this.$Q_0(this.$B_0, this.$A_0);
    },
    
    $1h_0: function($p0) {
        return Function.createDelegate(this, function($p1_0) {
            var $v_0 = $p1_0.target;
            var $v_1 = '';
            while ($v_0 && !$v_0.getAttribute('href')) {
                $v_0 = $v_0.parentNode;
            }
            if ($v_0 && $v_0.getAttribute('href')) {
                $v_1 = $v_0.getAttribute('href').toString();
                $p1_0.preventDefault();
                $p1_0.stopPropagation();
                $p1_0.rawEvent.returnValue = false;
                if ($p0) {
                    SP.Utilities.HttpUtility.navigateTo($v_1);
                }
                else {
                    var $v_2 = this.$0_0.contentWindow.STSNavigate;
                    $v_2.call(this.$0_0.contentWindow, $v_1);
                }
            }
        });
    },
    
    $1e_0: function($p0) {
        for (var $v_0 = 0, $v_1 = $p0.length; $v_0 < $v_1; $v_0++) {
            var $v_2 = $p0[$v_0];
            var $v_3 = $v_2.getAttribute('target');
            var $v_4 = $v_2.getAttribute('onclick');
            var $v_5 = $v_2.getAttribute('rel');
            var $v_6 = $v_2.getAttribute('href');
            var $v_7 = '';
            if ($v_6) {
                var $v_8 = $v_6.toString();
                var $v_9 = $v_8.indexOf('?');
                if ($v_9 !== -1) {
                    var $v_A = $v_8.substr($v_9 + 1);
                    var $v_B = $v_A.match(new RegExp('DialogLink=[^&]*'));
                    if ($v_B && $v_B.length > 0) {
                        var $v_C = $v_B[0];
                        var $v_D = $v_C.split('=');
                        if ($v_D.length > 1) {
                            $v_7 = $v_D[1];
                        }
                    }
                }
            }
            if ((!$v_3 || $v_3.toString() === '' || $v_3.toString() === '_self') && !$v_4) {
                if (((!$v_5 || $v_5.toString() === 'sp_DialogLinkExternal') && ($v_7 === '' || $v_7 === 'External')) && (!$v_3 || $v_3.toString() === '')) {
                    if ($v_6 && $v_6.toString().indexOf('javascript:') === -1) {
                        $v_2.setAttribute('target', '_blank');
                    }
                }
                else if (($v_5 && $v_5.toString() === 'sp_DialogLinkInternal') || $v_7 === 'Internal') {
                    if (this.$0_0) {
                        if ($v_6 && $v_6.toString().indexOf('javascript:') === -1) {
                            $addHandler($v_2, 'click', this.$1h_0(false));
                        }
                    }
                }
                else if ((($v_5 && $v_5.toString() === 'sp_DialogLinkNavigate') || $v_7 === 'Navigate') && (!$v_3 || $v_3.toString() === '')) {
                    if ($v_6 && $v_6.toString().indexOf('javascript:') === -1) {
                        $addHandler($v_2, 'click', this.$1h_0(true));
                    }
                }
            }
        }
    },
    
    $1z_0: function($p0) {
        this.$1i_0 = true;
        if (this.$H_0 && this.$0_0) {
            var $v_0 = null;
            try {
                if (this.$0_0.contentWindow) {
                    $v_0 = this.$0_0.contentWindow.document;
                }
                else if (this.$0_0.contentDocument) {
                    $v_0 = this.$0_0.contentDocument;
                }
            }
            catch ($$e_2_0) {
            }
            if ($v_0) {
                this.$c_0 = $v_0;
                var $v_1 = SP.Res.defaultDialogTitle;
                try {
                    $v_1 = $v_0.title;
                }
                catch ($$e_3_0) {
                }
                if (SP.ScriptUtility.isNullOrEmptyString(this.$P_0)) {
                    SP.UI.UIUtility.setInnerText(this.$H_0, $v_1);
                    this.$H_0.title = $v_1;
                }
                var $v_2 = this.$0_0.contentWindow;
                var $v_3 = new SP.UI.DialogHostedWindow(this, $v_2);
                $v_3.initialize();
                var $v_4 = this.$c_0.getElementsByTagName('a');
                this.$1e_0($v_4);
            }
            else if (SP.ScriptUtility.isNullOrEmptyString(this.$P_0)) {
                SP.UI.UIUtility.setInnerText(this.$H_0, SP.Res.defaultDialogTitle);
                this.$H_0.title = SP.Res.defaultDialogTitle;
            }
            if (this.get_$10_0()) {
                this.$1H_0(true);
                if (this.$M_0) {
                    this.$M_0.close(0);
                    this.$M_0 = null;
                }
            }
            window.setTimeout(Function.createDelegate(this, function() {ULSTYE:;
                try {
                    this.$0_0.contentWindow.NotifyBrowserOfAsyncUpdate();
                    this.$0_0.contentWindow.EnsureScriptParams('core.js', 'FixRibbonAndWorkspaceDimensions');
                    this.$0_0.contentWindow.AddEvtHandler(this.$0_0.contentWindow, 'onresize', this.$0_0.contentWindow.FixRibbonAndWorkspaceDimensionsForResize);
                }
                catch ($$e_3_0) {
                }
            }), 0);
        }
    },
    
    $25_0: function() {ULSTYE:;
        if (this.$c_0) {
            try {
                this.$F_0 = this.$13_0(this.$c_0.body);
            }
            catch ($$e_2_0) {
                this.$F_0 = null;
            }
        }
        else {
            if (this.$E_0) {
                try {
                    this.$F_0 = this.$13_0(this.$E_0);
                }
                catch ($$e_3_0) {
                    this.$F_0 = null;
                }
            }
            else {
                this.$F_0 = null;
            }
        }
    },
    
    $13_0: function($p0) {
        if ($p0.nodeType === 1) {
            var $v_0 = $p0.childNodes;
            for (var $v_1 = $v_0.length - 1; $v_1 >= 0; $v_1--) {
                var $v_2 = $v_0[$v_1];
                if ($v_2.tagName === 'SCRIPT') {
                    continue;
                }
                if (($v_2.nodeType === 1) && ($v_2.style.display === 'none')) {
                    continue;
                }
                var $v_3 = this.$13_0($v_2);
                if ($v_3) {
                    return $v_3;
                }
            }
            if (this.$2A_0($p0)) {
                return $p0;
            }
            else {
                return null;
            }
        }
        else {
            return null;
        }
    },
    
    $2A_0: function($p0) {
        if ($p0.tagName === 'A' || $p0.tagName === 'INPUT' || $p0.tagName === 'AREA' || $p0.tagName === 'BUTTON' || $p0.tagName === 'SELECT' || $p0.tagName === 'TEXTAREA' || $p0.tagName === 'OBJECT') {
            if ($p0.tabIndex === -1) {
                return false;
            }
            if ($p0.disabled || (($p0.getAttribute('disabled')) === 'true')) {
                return false;
            }
            if ($p0.tagName === 'INPUT') {
                var $v_0 = $p0;
                if ($v_0.type === 'hidden' || $v_0.style.display === 'none') {
                    return false;
                }
            }
            return true;
        }
        return false;
    },
    
    $1w_0: function() {ULSTYE:;
        var $v_0 = this.$7_0('div');
        this.$2_0 = $v_0;
        $v_0.className = 'ms-dlgContent';
        $v_0.setAttribute('role', 'dialog');
        $v_0.setAttribute('aria-labelledby', 'dialogTitleSpan');
        $v_0.setAttribute('tabindex', '-1');
        if (this.$L_0) {
            $v_0.style.zIndex = this.$L_0;
        }
        if (this.get_$Z_0()) {
            SP.UI.Dialog.get_$1().document.body.appendChild($v_0);
        }
        else {
            document.body.appendChild($v_0);
        }
        var $v_1 = this.$7_0('div');
        this.$18_0 = $v_1;
        $v_1.className = 'ms-dlgBorder';
        $v_0.appendChild($v_1);
        this.$D_0 = this.$7_0('input');
        this.$D_0.type = 'button';
        this.$D_0.value = SP.Res.hiddenButtonValueBeforeDialog;
        this.$D_0.className = 'ms-hidden';
        $v_1.appendChild(this.$D_0);
        var $v_2 = this.$7_0('div');
        $v_2.className = 'ms-dlgTitle';
        $addHandler($v_2, 'mousedown', this.$1Y);
        $addHandler($v_2, 'mouseup', this.$1Z);
        $v_1.appendChild($v_2);
        var $v_3 = this.$7_0('span');
        if (SP.ScriptUtility.isNullOrEmptyString(this.$P_0)) {
            if (this.$j_0) {
                SP.UI.UIUtility.setInnerText($v_3, SP.Res.dialogLoading);
                $v_3.title = SP.Res.dialogLoading;
            }
            else {
                SP.UI.UIUtility.setInnerText($v_3, SP.Res.defaultDialogTitle);
                $v_3.title = SP.Res.defaultDialogTitle;
            }
        }
        else {
            SP.UI.UIUtility.setInnerText($v_3, this.$P_0);
            $v_3.title = this.$P_0;
        }
        $v_3.className = 'ms-dlgTitleText';
        $v_3.id = 'dialogTitleSpan';
        this.$H_0 = $v_3;
        this.$6_0 = $v_2;
        $v_2.appendChild($v_3);
        $v_3 = this.$7_0('span');
        $v_3.className = 'ms-dlgTitleBtns';
        if (this.$d_0) {
            this.$3_0 = this.$7_0('a');
            this.$3_0.id = 'DlgResize' + SP.Guid.newGuid().toString();
            this.$3_0.className = 'ms-dlgCloseBtn';
            this.$3_0.setAttribute('title', SP.Res.maximize);
            SP.UI.Dialog.$1m_0(this.$3_0);
            this.$3_0.innerHTML = '<span style=\"height:18px;width:18px;position:relative;display:inline-block;overflow:hidden;\" class=\"s4-clust\"><img src=\"/_layouts/images/fgimg.png\" style=\"left:-0px !important;top:-676px !important;position:absolute;\" class=\'ms-dlgCloseBtnImg\' /></span>';
            this.$h_0 = this.$z;
            $addHandler(this.$6_0, 'dblclick', this.$h_0);
            $addHandler(this.$3_0, 'click', this.$z);
            $addHandler(this.$3_0, 'mousedown', this.$Y);
            $addHandler(this.$3_0, 'mouseup', this.$Y);
            $v_3.appendChild(this.$3_0);
        }
        if (this.$t_0) {
            this.$5_0 = this.$7_0('a');
            this.$5_0.id = 'DlgClose' + SP.Guid.newGuid().toString();
            this.$5_0.className = 'ms-dlgCloseBtn';
            this.$5_0.setAttribute('title', SP.Res.close);
            SP.UI.Dialog.$1m_0(this.$5_0);
            this.$5_0.setAttribute('accesskey', SP.Res.dialogCancelAK);
            this.$5_0.innerHTML = '<span style=\"height:18px;width:18px;position:relative;display:inline-block;overflow:hidden;\" class=\"s4-clust\"><img src=\"/_layouts/images/fgimg.png\" style=\"left:-0px !important;top:-658px !important;position:absolute;\" class=\'ms-dlgCloseBtnImg\' /></span>';
            $addHandler(this.$5_0, 'click', this.$w);
            $addHandler(this.$5_0, 'mousedown', this.$Y);
            $addHandler(this.$5_0, 'mouseup', this.$Y);
            $v_3.appendChild(this.$5_0);
        }
        if (this.$d_0) {
            this.$J_0 = this.$3_0;
        }
        else {
            this.$J_0 = this.$5_0;
        }
        $v_2.appendChild($v_3);
        if (this.$j_0) {
            var $v_4 = this.$j_0;
            $v_4 = SP.UI.Dialog.$1o_0($v_4);
            var $v_5 = this.$7_0('div');
            this.$I_0 = $v_5;
            $v_5.className = 'ms-dlgFrameContainer';
            $v_1.appendChild($v_5);
            var $v_6 = this.$7_0('iframe');
            this.$0_0 = $v_6;
            this.$0_0.id = 'DlgFrame' + SP.Guid.newGuid().toString();
            $v_6.className = 'ms-dlgFrame';
            $v_6.setAttribute('src', $v_4);
            $v_6.setAttribute('frameBorder', '0');
            $v_5.appendChild($v_6);
        }
        else {
            var $v_7 = this.$7_0('div');
            this.$I_0 = $v_7;
            $v_7.className = 'ms-dlgFrameContainer';
            $v_1.appendChild($v_7);
            var $v_8 = this.$E_0.getElementsByTagName('a');
            this.$1e_0($v_8);
            $v_7.appendChild(this.$E_0);
        }
        this.$C_0 = this.$7_0('input');
        this.$C_0.type = 'button';
        this.$C_0.value = SP.Res.hiddenButtonValueAfterDialog;
        this.$C_0.className = 'ms-hidden';
        $v_1.appendChild(this.$C_0);
        $addHandler(this.$D_0, 'focus', this.$y);
        $addHandler(this.$D_0, 'click', this.$y);
        $addHandler(this.$C_0, 'focus', this.$x);
        $addHandler(this.$C_0, 'click', this.$x);
        this.$4_0 = this.$7_0('iframe');
        this.$4_0.style.border = 'none';
        this.$4_0.style.position = 'absolute';
        this.$4_0.setAttribute('frameBorder', '0');
        this.$4_0.style.zIndex = (this.$2_0.style.zIndex - 1);
        if (this.get_$Z_0()) {
            SP.UI.Dialog.get_$1().document.body.insertBefore(this.$4_0, this.$2_0);
        }
        else {
            document.body.insertBefore(this.$4_0, this.$2_0);
        }
        $addHandler(this.$2_0, 'click', this.$1N);
        if (this.$0_0) {
            $addHandler(this.$0_0, 'load', this.$1O);
        }
        this.$2M_0();
    },
    
    $2M_0: function() {ULSTYE:;
        if (this.$0_0) {
            this.$0_0.cancelPopUp = this.$1K;
            this.$0_0.commitPopup = this.$1L;
            this.$0_0.overrideDialogResult = this.$1V;
            this.$0_0.navigateParent = SP.Utilities.HttpUtility.navigateTo;
            this.$0_0.commonModalDialogClose = this.$1M;
            this.$0_0.dialogArgs = this.$14_0;
            this.$0_0.autoSize = this.$1J;
        }
    },
    
    $1q_0: function() {ULSTYE:;
        this.close(0);
    },
    
    $1t_0: function($p0) {
        this.$g_0 = $p0;
        this.close(1);
    },
    
    $1u_0: function($p0, $p1) {
        this.$g_0 = $p1;
        this.close($p0);
    },
    
    $2J_0: function($p0) {
        this.$q_0 = $p0;
    },
    
    $1H_0: function($p0) {
        if (window.IsFullNameDefined('CUI.PMetrics.perfMark')) {
            CUI.PMetrics.perfMark(7706);
        }
        this.$2_0.style.display = 'block';
        this.$Q_0(this.$W_0, this.$R_0);
        if (this.$0_0) {
            this.$A_0 = this.$0_0.offsetHeight;
            this.$B_0 = this.$0_0.offsetWidth;
        }
        else {
            this.$A_0 = this.$I_0.offsetHeight;
            this.$B_0 = this.$I_0.offsetWidth;
        }
        if (this.get_$10_0() && $p0) {
            this.autoSize();
        }
        else {
            this.$Q_0(this.$B_0, this.$A_0);
        }
        var $v_0, $v_1;
        var $v_2 = SP.UI.Dialog.$24(SP.UI.Dialog.get_$1());
        var $v_3 = SP.UI.Dialog.$26(SP.UI.Dialog.get_$1());
        if (!SP.ScriptUtility.isNullOrUndefined(this.$k_0)) {
            $v_0 = this.$k_0;
        }
        else if (this.get_$Z_0()) {
            $v_0 = (SP.UI.Dialog.$1d(SP.UI.Dialog.get_$1()) - this.$2_0.offsetWidth) / 2 + $v_2;
            if ($v_0 < $v_2 + 10) {
                $v_0 = $v_2 + 10;
            }
        }
        else {
            $v_0 = (SP.UI.Dialog.$12(this.$2_0.ownerDocument) - this.$2_0.offsetWidth) / 2;
            if ($v_0 < 10) {
                $v_0 = 10;
            }
        }
        if (!SP.ScriptUtility.isNullOrUndefined(this.$l_0)) {
            $v_1 = this.$l_0;
        }
        else if (this.get_$Z_0()) {
            $v_1 = (SP.UI.Dialog.$1c(SP.UI.Dialog.get_$1()) - this.$2_0.offsetHeight) / 2 + $v_3;
            if ($v_1 < $v_3 + 10) {
                $v_1 = $v_3 + 10;
            }
        }
        else {
            $v_1 = (SP.UI.Dialog.$11(this.$2_0.ownerDocument) - this.$2_0.offsetHeight) / 2;
            if ($v_1 < 10) {
                $v_1 = 10;
            }
        }
        this.$T_0 = $v_0;
        this.$U_0 = $v_1;
        if ($p0) {
            this.$m_0(this.$T_0, this.$U_0);
            this.$H_0.style.width = Math.max(this.$6_0.offsetWidth - 64, 0) + 'px';
            this.$2B_0();
            this.$1f_0();
            if (this.$1D_0) {
                this.$1k_0(null);
            }
            else if (this.$S_0) {
                this.$1G_0();
            }
        }
        else {
            var $v_4 = (document.documentElement.dir === 'rtl') ? 10000 : -10000;
            var $v_5 = -10000;
            this.$m_0($v_4, $v_5);
        }
    },
    
    close: function(dialogResult) {ULSTYE:;
        if (this.$M_0) {
            this.$M_0.close(0);
            this.$M_0 = null;
        }
        if (this.$p_0) {
            return;
        }
        if (this.$9_0) {
            this.$9_0.dispose();
            this.$9_0 = null;
        }
        if (this.$2_0) {
            this.$2_0.style.display = 'none';
            $clearHandlers(this.$2_0);
        }
        if (this.$h_0) {
            $removeHandler(this.$6_0, 'dblclick', this.$h_0);
            this.$h_0 = null;
        }
        this.$H_0 = null;
        if (this.$6_0) {
            $clearHandlers(this.$6_0);
            this.$6_0 = null;
        }
        if (this.$0_0) {
            $clearHandlers(this.$0_0);
            this.$0_0.setAttribute('src', '/_layouts/blank.htm');
            this.$0_0 = null;
        }
        this.$c_0 = null;
        if (this.$5_0) {
            $clearHandlers(this.$5_0);
            this.$5_0 = null;
        }
        if (this.$D_0) {
            $clearHandlers(this.$D_0);
            this.$D_0 = null;
        }
        if (this.$C_0) {
            $clearHandlers(this.$C_0);
            this.$C_0 = null;
        }
        this.$F_0 = null;
        this.$J_0 = null;
        if (this.$3_0) {
            $clearHandlers(this.$3_0);
            this.$3_0 = null;
        }
        if (this.$L_0 > 0) {
            this.$29_0();
        }
        if (this.$q_0 === -1) {
            this.$17_0 = dialogResult;
        }
        else {
            this.$17_0 = this.$q_0;
        }
        if (this.$a_0) {
            SP.UI.Dialog.get_$1().setTimeout(this.$1X, 0);
        }
        if (this.$2_0) {
            SP.UI.UIUtility.removeNode(this.$2_0);
            this.$2_0 = null;
        }
        if (this.$4_0) {
            SP.UI.UIUtility.removeNode(this.$4_0);
            this.$4_0 = null;
        }
        this.$p_0 = true;
        if (window.IsFullNameDefined('CUI.PMetrics.perfMark')) {
            CUI.PMetrics.perfMark(7707);
        }
    },
    
    get_closed: function() {ULSTYE:;
        return this.$p_0;
    },
    
    get_frameElement: function() {ULSTYE:;
        return this.$0_0;
    },
    
    $L_0: 0,
    
    $2Q_0: function() {ULSTYE:;
        if (this.$a_0) {
            this.$a_0(this.$17_0, this.$g_0);
            this.$a_0 = null;
        }
    },
    
    $r_0: 0,
    
    $2N_0: function($p0) {
        var $v_0 = SP.UI.Dialog.get_$X_0();
        if (!$v_0) {
            $v_0 = SP.UI.Dialog.get_$1().document.createElement('div');
            $v_0.className = 'ms-dlgOverlay';
            SP.UI.Dialog.get_$1().document.body.appendChild($v_0);
            SP.UI.Dialog.set_$X_0($v_0);
            if (!SP.UI.Dialog.$K_0) {
                SP.UI.Dialog.$K_0 = SP.UI.Dialog.$2T_0;
            }
            $addHandler(SP.UI.Dialog.get_$1(), 'resize', SP.UI.Dialog.$K_0);
        }
        if (Sys.Browser.agent === Sys.Browser.InternetExplorer) {
            var $v_1 = document.getElementsByTagName('object');
            for (var $v_2 = 0; $v_2 < $v_1.length; $v_2++) {
                var $v_3 = $v_1[$v_2];
                if ($v_3.className.indexOf('ms-dlgDisable') !== -1 && $v_3.style.visibility !== 'hidden') {
                    $v_3.dialogDisabled = true;
                    $v_3.style.visibility = 'hidden';
                }
            }
        }
        this.$r_0 = $v_0.style.zIndex;
        $v_0.style.display = 'block';
        $v_0.style.zIndex = $p0;
        $v_0.style.width = SP.UI.Dialog.$12(SP.UI.Dialog.get_$1().document) + 'px';
        $v_0.style.height = SP.UI.Dialog.$11(SP.UI.Dialog.get_$1().document) + 'px';
    },
    
    $29_0: function() {ULSTYE:;
        var $v_0 = SP.UI.Dialog.get_$X_0();
        if ($v_0) {
            if (SP.ScriptUtility.isNullOrUndefined(this.$r_0) || this.$r_0 <= 0) {
                $v_0.style.display = 'none';
                if (Sys.Browser.agent === Sys.Browser.InternetExplorer) {
                    var $v_1 = document.getElementsByTagName('object');
                    for (var $v_2 = 0; $v_2 < $v_1.length; $v_2++) {
                        var $v_3 = $v_1[$v_2];
                        if ($v_3.className.indexOf('ms-dlgDisable') !== -1 && $v_3.style.visibility === 'hidden' && $v_3.dialogDisabled) {
                            $v_3.dialogDisabled = false;
                            $v_3.style.visibility = 'visible';
                        }
                    }
                }
            }
            $v_0.style.zIndex = this.$r_0;
        }
    },
    
    $7_0: function($p0) {
        if (this.get_$Z_0()) {
            return SP.UI.Dialog.get_$1().document.createElement($p0);
        }
        else {
            return document.createElement($p0);
        }
    },
    
    get_$Z_0: function() {ULSTYE:;
        if (!(this.$L_0 > 0)) {
            throw Error.notImplemented(SP.Res.modelessDialogsNotImplemented);
        }
        return this.$L_0 > 0;
    }
}


SP.UI.DialogHostedWindow = function(dlg, wnd) {ULSTYE:;
    this.$2C_0 = dlg;
    this.$u_0 = wnd;
}
SP.UI.DialogHostedWindow.prototype = {
    $2C_0: null,
    $u_0: null,
    
    initialize: function() {ULSTYE:;
        try {
            if (this.$u_0.document && this.$u_0.document.body) {
                this.$u_0.document.body.tabIndex = -1;
            }
        }
        catch ($$e_1_0) {
        }
    },
    
    dispose: function() {
    }
}


SP.UI.ModalDialog = function(options) {ULSTYE:;
    SP.UI.ModalDialog.initializeBase(this, [ options ]);
}
SP.UI.ModalDialog.get_$1E_1 = function() {ULSTYE:;
    var $v_0 = 0;
    var $v_1 = SP.UI.Dialog.get_$1().g_ModalDialogCount;
    if (!SP.ScriptUtility.isNullOrUndefined($v_1)) {
        $v_0 = $v_1;
    }
    return $v_0;
}
SP.UI.ModalDialog.set_$1E_1 = function($p0) {
    SP.UI.Dialog.get_$1().g_ModalDialogCount = $p0;
    return $p0;
}
SP.UI.ModalDialog.get_childDialog = function() {ULSTYE:;
    var $v_0 = SP.UI.Dialog.get_$1().g_childDialog;
    if (SP.ScriptUtility.isNullOrUndefined($v_0)) {
        return null;
    }
    return $v_0;
}
SP.UI.ModalDialog.$1l_1 = function($p0) {
    SP.UI.Dialog.get_$1().g_childDialog = $p0;
}
SP.UI.ModalDialog.showModalDialog = function(options) {ULSTYE:;
    var $v_0 = new SP.UI.ModalDialog(options);
    $v_0.$1g();
    return $v_0;
}
SP.UI.ModalDialog.$2O = function() {ULSTYE:;
    return SP.UI.ModalDialog.$1I_1(SP.Res.dialogLoading, SP.Res.dialogLoadingText, false, false, null, null, 270, '12px 12px 4px 6px', 0);
}
SP.UI.ModalDialog.showWaitScreenWithNoClose = function(title, message, height, width) {ULSTYE:;
    return SP.UI.ModalDialog.$1I_1(title, message, false, true, null, height, width, null, 1);
}
SP.UI.ModalDialog.showWaitScreenSize = function(title, message, callbackFunc, height, width) {ULSTYE:;
    return SP.UI.ModalDialog.$1I_1(title, message, true, true, callbackFunc, height, width, null, 1);
}
SP.UI.ModalDialog.$1I_1 = function($p0, $p1, $p2, $p3, $p4, $p5, $p6, $p7, $p8) {
    var $v_0 = SP.UI.Dialog.get_$1().document.createElement('INPUT');
    var $v_1 = SP.UI.Dialog.get_$1().document.createElement('DIV');
    $v_1.style.padding = (SP.ScriptUtility.isNullOrUndefined($p7)) ? '10px' : $p7;
    var $v_2 = SP.UI.Dialog.get_$1().document.createElement('TABLE');
    var $v_3 = SP.UI.Dialog.get_$1().document.createElement('TBODY');
    var $v_6 = SP.UI.Dialog.get_$1().document.createElement('TR');
    var $v_7 = SP.UI.Dialog.get_$1().document.createElement('TD');
    $v_7.style.verticalAlign = 'top';
    if ($p8 === 1) {
        $v_7.style.paddingTop = '6px';
    }
    if ($p2) {
        $v_7.rowSpan = 2;
    }
    var $v_8 = SP.UI.Dialog.get_$1().document.createElement('IMG');
    if ($p8 === 1) {
        $v_8.src = '/_layouts/images/gears_anv4.gif';
    }
    else if (!$p8) {
        $v_8.src = '/_layouts/images/loadingcirclests16.gif';
    }
    $v_7.appendChild($v_8);
    $v_6.appendChild($v_7);
    var $v_9 = SP.UI.Dialog.get_$1().document.createElement('TD');
    $v_9.className = 'ms-dlgLoadingText';
    $v_9.innerHTML = $p1;
    $v_6.appendChild($v_9);
    $v_3.appendChild($v_6);
    if ($p2) {
        var $v_A = SP.UI.Dialog.get_$1().document.createElement('TR');
        var $v_B = SP.UI.Dialog.get_$1().document.createElement('TD');
        $v_B.style.textAlign = 'right';
        $v_0.type = 'Button';
        $v_0.value = SP.Res.createWaitScreenCancel;
        $v_B.appendChild($v_0);
        $v_A.appendChild($v_B);
        $v_3.appendChild($v_A);
    }
    $v_2.appendChild($v_3);
    $v_1.appendChild($v_2);
    var $v_4 = new SP.UI.DialogOptions();
    $v_4.html = $v_1;
    $v_4.width = $p6;
    $v_4.height = $p5;
    $v_4.showClose = $p2;
    $v_4.allowMaximize = $p3;
    $v_4.title = $p0;
    $v_4.dialogReturnValueCallback = $p4;
    var $v_5 = SP.UI.ModalDialog.showModalDialog($v_4);
    $addHandler($v_0, 'click', $v_5.$w);
    return $v_5;
}
SP.UI.ModalDialog.OpenPopUpPage = function(url, callback, width, height) {ULSTYE:;
    OpenPopUpPage(url, callback, width, height);
}
SP.UI.ModalDialog.ShowPopupDialog = function(url) {ULSTYE:;
    ShowPopupDialog(url);
}
SP.UI.ModalDialog.commonModalDialogOpen = function(url, options, callback, args) {ULSTYE:;
    commonModalDialogOpen(url, options, callback, args);
}
SP.UI.ModalDialog.commonModalDialogClose = function(dialogResult, returnVal) {ULSTYE:;
    commonModalDialogClose(dialogResult, returnVal);
}
SP.UI.ModalDialog.RefreshPage = function(dialogResult) {ULSTYE:;
    RefreshPage(dialogResult);
}
SP.UI.ModalDialog.prototype = {
    $1j_1: false,
    $o_1: null,
    
    $1g: function() {ULSTYE:;
        SP.UI.ModalDialog.set_$1E_1(SP.UI.ModalDialog.get_$1E_1() + 1) - 1;
        this.$L_0 = (SP.UI.ModalDialog.get_$1E_1() * 5 + 1500);
        SP.UI.ModalDialog.callBaseMethod(this, '$1g');
        this.$o_1 = SP.UI.ModalDialog.get_childDialog();
        SP.UI.ModalDialog.$1l_1(this);
    },
    
    close: function(dialogResult) {ULSTYE:;
        if (this.$1j_1) {
            return;
        }
        this.$1j_1 = true;
        SP.UI.ModalDialog.set_$1E_1(SP.UI.ModalDialog.get_$1E_1() - 1) + 1;
        SP.UI.ModalDialog.$1l_1(this.$o_1);
        this.$o_1 = null;
        SP.UI.ModalDialog.callBaseMethod(this, 'close', [ dialogResult ]);
    }
}


Type.registerNamespace('SP.Application.UI');

SP.Application.UI.DragBehavior = function(elem, dragHandle) {ULSTYE:;
    this.$1U = Function.createDelegate(this, this.$2I_2);
    this.$1T = Function.createDelegate(this, this.$2H_2);
    this.$1S = Function.createDelegate(this, this.$2G_2);
    SP.Application.UI.DragBehavior.initializeBase(this, [ elem ]);
    this.$N_2 = new SP.Application.UI.MouseTrackerBehavior(dragHandle);
    this.$b_2 = [];
    this.$8_2 = null;
}
SP.Application.UI.DragBehavior.prototype = {
    $N_2: null,
    $b_2: null,
    $8_2: null,
    
    $1n: function($p0) {
        this.$b_2[this.$b_2.length] = $p0;
    },
    
    $1v: function($p0) {
        if (Sys.Browser.agent === Sys.Browser.Firefox || Sys.Browser.agent === Sys.Browser.Safari || Sys.Browser.agent === Sys.Browser.AppleWebKit) {
            if (!$p0) {
                return;
            }
            this.$8_2 = document.createElement('div');
            this.$8_2.style.position = 'absolute';
            this.$8_2.style.cursor = 'move';
            this.$8_2.style.zIndex = ($p0.style.zIndex + 1);
            this.$8_2.style.width = $p0.offsetWidth + 'px';
            this.$8_2.style.height = $p0.offsetHeight + 'px';
            this.$8_2.style.top = $p0.offsetTop + 'px';
            this.$8_2.style.left = $p0.offsetLeft + 'px';
        }
    },
    
    initialize: function() {ULSTYE:;
        SP.Application.UI.DragBehavior.callBaseMethod(this, 'initialize');
        this.$N_2.initialize();
        this.$N_2.add_$1p(this.$1S);
        this.$N_2.add_$20(this.$1T);
        this.$N_2.add_$2P(this.$1U);
    },
    
    $15_2: 0,
    $16_2: 0,
    $1A_2: 0,
    $19_2: 0,
    
    $2G_2: function($p0, $p1) {
        var $v_0 = $p1.$f_1.x;
        var $v_1 = $p1.$f_1.y;
        var $v_2 = this.get_element().offsetLeft;
        var $v_3 = this.get_element().offsetTop;
        this.$15_2 = $v_0 - $v_2;
        this.$16_2 = $v_1 - $v_3;
        var $v_4 = window.self._dlgWndTop();
        this.$1A_2 = $v_4.document.body.clientWidth;
        this.$19_2 = $v_4.document.body.clientHeight;
        if (this.$8_2) {
            this.get_element().appendChild(this.$8_2);
        }
    },
    
    $2H_2: function($p0, $p1) {
        var $v_0 = $p1.$f_1.x;
        var $v_1 = $p1.$f_1.y;
        if ($v_0 < 16) {
            $v_0 = 16;
        }
        else if ($v_0 > (this.$1A_2 - 16)) {
            $v_0 = (this.$1A_2 - 16);
        }
        if ($v_1 < 16) {
            $v_1 = 16;
        }
        else if ($v_1 > (this.$19_2 - 16)) {
            $v_1 = (this.$19_2 - 16);
        }
        this.get_element().style.left = ($v_0 - this.$15_2) + 'px';
        this.get_element().style.top = ($v_1 - this.$16_2) + 'px';
        for (var $v_2 = 0, $v_3 = this.$b_2.length; $v_2 < $v_3; $v_2++) {
            var $v_4 = this.$b_2[$v_2];
            $v_4.style.left = ($v_0 - this.$15_2) + 'px';
            $v_4.style.top = ($v_1 - this.$16_2) + 'px';
        }
    },
    
    $2I_2: function($p0, $p1) {
        if (this.$8_2) {
            this.get_element().removeChild(this.$8_2);
        }
    },
    
    dispose: function() {ULSTYE:;
        try {
            if (this.$N_2) {
                this.$N_2.dispose();
            }
        }
        finally {
            SP.Application.UI.DragBehavior.callBaseMethod(this, 'dispose');
        }
    }
}


SP.Application.UI.MouseTrackerEventArgs = function(mousePosition, mousePositionMoved, mousePagePosition, target) {ULSTYE:;
    SP.Application.UI.MouseTrackerEventArgs.initializeBase(this);
    this.$2F_1 = target;
    this.$f_1 = mousePosition;
    this.$2E_1 = mousePositionMoved;
    this.$2D_1 = mousePagePosition;
}
SP.Application.UI.MouseTrackerEventArgs.prototype = {
    $f_1: null,
    $2E_1: null,
    $2D_1: null,
    $2F_1: null
}


SP.Application.UI.MouseTrackerBehavior = function(elem) {ULSTYE:;
    this.$1R = Function.createDelegate(this, this.$23_2);
    this.$1Q = Function.createDelegate(this, this.$22_2);
    this.$1P = Function.createDelegate(this, this.$21_2);
    SP.Application.UI.MouseTrackerBehavior.initializeBase(this, [ elem ]);
    this.$s_2 = this.$1P;
    this.$e_2 = this.$1Q;
    this.$O_2 = this.$1R;
}
SP.Application.UI.MouseTrackerBehavior.$1F_2 = function($p0) {
    if ($p0.rawEvent.pageX) {
        return new Sys.UI.Point($p0.rawEvent.pageX, $p0.rawEvent.pageY);
    }
    var $v_0 = $p0.clientX + document.body.scrollLeft - document.body.clientLeft;
    var $v_1 = $p0.clientY + document.body.scrollTop - document.body.clientTop;
    var $v_2 = document.body.parentNode;
    if ($v_2 && ($v_2.clientLeft)) {
        $v_0 += $v_2.scrollLeft - $v_2.clientLeft;
        $v_1 += $v_2.scrollTop - $v_2.clientTop;
    }
    return new Sys.UI.Point($v_0, $v_1);
}
SP.Application.UI.MouseTrackerBehavior.prototype = {
    $s_2: null,
    $e_2: null,
    $O_2: null,
    $i_2: false,
    
    initialize: function() {ULSTYE:;
        SP.Application.UI.MouseTrackerBehavior.callBaseMethod(this, 'initialize');
        this.$i_2 = false;
        $addHandler(this.get_element(), 'mousedown', this.$s_2);
    },
    
    $1B_2: 0,
    $1C_2: 0,
    
    add_$1p: function($p0) {
        this.get_events().addHandler('begindrag', $p0);
    },
    remove_$1p: function($p0) {
        this.get_events().removeHandler('begindrag', $p0);
    },
    
    add_$2P: function($p0) {
        this.get_events().addHandler('stopdrag', $p0);
    },
    remove_$2P: function($p0) {
        this.get_events().removeHandler('stopdrag', $p0);
    },
    
    add_$20: function($p0) {
        this.get_events().addHandler('dragging', $p0);
    },
    remove_$20: function($p0) {
        this.get_events().removeHandler('dragging', $p0);
    },
    
    $21_2: function($p0) {
        if (this.$i_2 || $p0.button) {
            return;
        }
        this.$i_2 = true;
        this.$1B_2 = $p0.clientX;
        this.$1C_2 = $p0.clientY;
        if (this.get_element().ownerDocument.addEventListener) {
            $addHandler(this.get_element().ownerDocument, 'mousemove', this.$e_2);
            $addHandler(this.get_element().ownerDocument, 'mouseup', this.$O_2);
        }
        else {
            this.get_element().setCapture();
            $addHandler(this.get_element(), 'mousemove', this.$e_2);
            $addHandler(this.get_element(), 'mouseup', this.$O_2);
            $addHandler(this.get_element(), 'losecapture', this.$O_2);
        }
        $p0.preventDefault();
        $p0.stopPropagation();
        var $v_0 = this.get_events().getHandler('begindrag');
        if ($v_0) {
            var $v_1 = new Sys.UI.Point($p0.clientX, $p0.clientY);
            var $v_2 = new Sys.UI.Point(0, 0);
            var $v_3 = SP.Application.UI.MouseTrackerBehavior.$1F_2($p0);
            var $v_4 = new SP.Application.UI.MouseTrackerEventArgs($v_1, $v_2, $v_3, $p0.target);
            $v_0(this, $v_4);
        }
    },
    
    $22_2: function($p0) {
        if (!this.$i_2) {
            return;
        }
        $p0.stopPropagation();
        var $v_0 = this.get_events().getHandler('dragging');
        if ($v_0) {
            var $v_1 = new Sys.UI.Point($p0.clientX, $p0.clientY);
            var $v_2 = new Sys.UI.Point($p0.clientX - this.$1B_2, $p0.clientY - this.$1C_2);
            var $v_3 = SP.Application.UI.MouseTrackerBehavior.$1F_2($p0);
            var $v_4 = new SP.Application.UI.MouseTrackerEventArgs($v_1, $v_2, $v_3, $p0.target);
            $v_0(this, $v_4);
        }
    },
    
    $23_2: function($p0) {
        this.$i_2 = false;
        if (this.get_element().ownerDocument.removeEventListener) {
            $removeHandler(this.get_element().ownerDocument, 'mouseup', this.$O_2);
            $removeHandler(this.get_element().ownerDocument, 'mousemove', this.$e_2);
        }
        else {
            $removeHandler(this.get_element(), 'losecapture', this.$O_2);
            $removeHandler(this.get_element(), 'mouseup', this.$O_2);
            $removeHandler(this.get_element(), 'mousemove', this.$e_2);
            this.get_element().releaseCapture();
        }
        $p0.stopPropagation();
        var $v_0 = this.get_events().getHandler('stopdrag');
        if ($v_0) {
            var $v_1 = new Sys.UI.Point($p0.clientX, $p0.clientY);
            var $v_2 = new Sys.UI.Point($p0.clientX - this.$1B_2, $p0.clientY - this.$1C_2);
            var $v_3 = SP.Application.UI.MouseTrackerBehavior.$1F_2($p0);
            var $v_4 = new SP.Application.UI.MouseTrackerEventArgs($v_1, $v_2, $v_3, $p0.target);
            $v_0(this, $v_4);
        }
    },
    
    dispose: function() {ULSTYE:;
        try {
            if (this.$s_2) {
                if (this.get_element()) {
                    $removeHandler(this.get_element(), 'mousedown', this.$s_2);
                }
            }
        }
        finally {
            SP.Application.UI.MouseTrackerBehavior.callBaseMethod(this, 'dispose');
        }
    }
}


SP.UI.Dialog.registerClass('SP.UI.Dialog');
SP.UI.DialogHostedWindow.registerClass('SP.UI.DialogHostedWindow', null, Sys.IDisposable);
SP.UI.ModalDialog.registerClass('SP.UI.ModalDialog', SP.UI.Dialog);
SP.Application.UI.DragBehavior.registerClass('SP.Application.UI.DragBehavior', Sys.UI.Behavior);
SP.Application.UI.MouseTrackerEventArgs.registerClass('SP.Application.UI.MouseTrackerEventArgs', Sys.EventArgs);
SP.Application.UI.MouseTrackerBehavior.registerClass('SP.Application.UI.MouseTrackerBehavior', Sys.UI.Behavior);
SP.UI.Dialog.$K_0 = null;
SP.UI.Dialog.$V_0 = 0;
SP.UI.ModalDialog.zIndexStep = 5;
SP.UI.ModalDialog.zIndexStart = 1500;

if( typeof(Sys) != "undefined" && Sys && Sys.Application ){
   Sys.Application.notifyScriptLoaded();
}
NotifyScriptLoadedAndExecuteWaitingJobs("sp.ui.dialog.js");
