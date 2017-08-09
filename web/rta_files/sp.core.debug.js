function ULS6Pv(){var o=new Object;o.ULSTeamName="Microsoft SharePoint Foundation";o.ULSFileName="SP.Core.debug.js";return o;}
Type.registerNamespace('SP');
if (typeof(IEnumerator) == "undefined")
{
	var IEnumerator = function()
	{
	};
	IEnumerator.prototype = {
	    get_current: null,
	    moveNext: null,
	    reset: null
	};
	IEnumerator.registerInterface("IEnumerator");
}

if (typeof(IEnumerable) == "undefined")
{
	var IEnumerable = function()
	{
	};
	IEnumerable.prototype = {
	    getEnumerator: null
	};
	IEnumerable.registerInterface("IEnumerable");
}

if (typeof(IDisposable) == "undefined")
{
    var IDisposable = function()
    {
    };
    IDisposable.prototype = {
        dispose: null
    };
    IDisposable.registerInterface("IDisposable");
}

SP.EnumerableArray = function SP_EnumerableArray(array) {ULS6Pv:;
	if (array == null)
		array = [];
    this._m_array = array;
}
SP.EnumerableArray.prototype = {
    _m_array: null,
    
    getEnumerator: function SP_EnumerableArray$getEnumerator() {ULS6Pv:;
        return new SP._arrayEnumerator(this._m_array);
    },
    
    get_length: function SP_EnumerableArray$get_length() {ULS6Pv:;
        return this._m_array.length;
    },
    get_count: function SP_EnumerableArray$get_count() {ULS6Pv:;
        return this._m_array.length;
    },    
    add: function SP_EnumerableArray$add(obj) {ULS6Pv:;
        this._m_array.push(obj);
    },
    addRange: function SP_EnumerableArray$addRange(items) {ULS6Pv:;
        Array.addRange(this._m_array, items);
    },
    clear: function SP_EnumerableArray$clear() {ULS6Pv:;
        this._m_array.length = 0;
    },
    contains: function SP_EnumerableArray$contains(item) {ULS6Pv:;
        return Array.contains(this._m_array, item);
    },
    indexOf: function SP_EnumerableArray$indexOf(item, start) {ULS6Pv:;
        return Array.indexOf(this._m_array, item, start);
    },
    insert: function SP_EnumerableArray$insert(index, item) {ULS6Pv:;
        Array.insert(this._m_array, index, item);
    },
    remove: function SP_EnumerableArray$remove(item) {ULS6Pv:;
        Array.remove(this._m_array, item);
    },
    removeAt: function SP_EnumerableArray$removeAt(index) {ULS6Pv:;
        Array.removeAt(this._m_array, index);
    },
    toArray: function SP_EnumerableArray$toArray() {ULS6Pv:;
        return this._m_array;
    },    
    toArrayList: function SP_EnumerableArray$toArrayList() {ULS6Pv:;
        return this._m_array;
    }
}


////////////////////////////////////////////////////////////////////////////////
// SP._arrayEnumerator

SP._arrayEnumerator = function SP__arrayEnumerator(array) {ULS6Pv:;
    this._m_array = array;
    this._m_index = -1;
}
SP._arrayEnumerator.prototype = {
    _m_index: 0,
    _m_array: null,
    
    get_current: function SP__arrayEnumerator$get_current() {ULS6Pv:;
        return this._m_array[this._m_index];
    },
    
    moveNext: function SP__arrayEnumerator$moveNext() {ULS6Pv:;
        this._m_index++;
        return this._m_index < this._m_array.length;
    },
    
    reset: function SP__arrayEnumerator$reset() {ULS6Pv:;
        this._m_index = -1;
    }
}

SP.EnumerableArray.registerClass('SP.EnumerableArray', null, IEnumerable);
SP._arrayEnumerator.registerClass('SP._arrayEnumerator', null, IEnumerator);


Type.registerNamespace('SP');

SP.Guid = function(guidText) {ULS6Pv:;
    guidText = SP.Guid.$K_0(guidText);
    if (SP.Guid.isValid(guidText)) {
        this.$5_0 = guidText;
    }
    else {
        this.$5_0 = '00000000-0000-0000-0000-000000000000';
        throw Error.argument('guidText');
    }
}
SP.Guid.get_empty = function() {ULS6Pv:;
    if (!SP.Guid.$9_0) {
        SP.Guid.$9_0 = new SP.Guid('00000000-0000-0000-0000-000000000000');
    }
    return SP.Guid.$9_0;
}
SP.Guid.newGuid = function() {ULS6Pv:;
    var $v_0 = '';
    for (var $v_2 = 0; $v_2 < 32; $v_2++) {
        var $v_3 = Math.floor(Math.random() * 16);
        switch ($v_2) {
            case 8:
                $v_0 += '-';
                break;
            case 12:
                $v_3 = 4;
                $v_0 += '-';
                break;
            case 16:
                $v_3 = ($v_3 & 3) | 8;
                $v_0 += '-';
                break;
            case 20:
                $v_0 += '-';
                break;
        }
        $v_0 += SP.Guid.$I_0[$v_3];
    }
    var $v_1 = new SP.Guid($v_0);
    return $v_1;
}
SP.Guid.isValid = function(uuid) {ULS6Pv:;
    if (uuid.length !== 36 || uuid !== uuid.toLowerCase()) {
        return false;
    }
    var $v_0 = uuid.split('-');
    if ($v_0.length !== 5 || $v_0[0].length !== 8 || $v_0[1].length !== 4 || $v_0[2].length !== 4 || $v_0[3].length !== 4 || $v_0[4].length !== 12) {
        return false;
    }
    return true;
}
SP.Guid.$K_0 = function($p0) {
    var $v_0;
    $v_0 = $p0.replace(' ', '');
    $v_0 = $v_0.replace('{', '');
    $v_0 = $v_0.replace('}', '');
    $v_0 = $v_0.toLowerCase();
    return $v_0;
}
SP.Guid.prototype = {
    $5_0: null,
    
    toString: function() {ULS6Pv:;
        if (!arguments.length) {
            return this.$5_0;
        }
        var $v_0 = arguments[0];
        if ($v_0 === 'B') {
            return '{' + this.$5_0 + '}';
        }
        else if ($v_0 === 'D') {
            return this.$5_0;
        }
        else {
            throw Error.argument('format');
        }
    },
    
    equals: function(uuid) {ULS6Pv:;
        if (!uuid) {
            return false;
        }
        return this.$5_0 === uuid.toString();
    },
    
    ToSerialized: function() {ULS6Pv:;
        return this.toString();
    }
}


SP.ScriptUtility = function() {
}
SP.ScriptUtility.isNullOrEmptyString = function(str) {ULS6Pv:;
    var $v_0 = null;
    return str === $v_0 || typeof(str) === 'undefined' || !str.length;
}
SP.ScriptUtility.isNullOrUndefined = function(obj) {ULS6Pv:;
    var $v_0 = null;
    return obj === $v_0 || typeof(obj) === 'undefined';
}
SP.ScriptUtility.isUndefined = function(obj) {ULS6Pv:;
    return typeof(obj) === 'undefined';
}
SP.ScriptUtility.truncateToInt = function(n) {ULS6Pv:;
    return ((n > 0) ? Math.floor(n) : Math.ceil(n));
}


SP.XmlWriter = function(sb) {ULS6Pv:;
    this.$3_0 = [];
    this.$0_0 = sb;
    this.$2_0 = true;
}
SP.XmlWriter.create = function(sb) {ULS6Pv:;
    return new SP.XmlWriter(sb);
}
SP.XmlWriter.prototype = {
    $0_0: null,
    $7_0: null,
    $2_0: false,
    $4_0: false,
    
    writeStartElement: function(tagName) {ULS6Pv:;
        this.$A_0();
        this.$8_0();
        Array.add(this.$3_0, tagName);
        this.$7_0 = tagName;
        this.$0_0.append('<');
        this.$0_0.append(tagName);
        this.$2_0 = false;
        this.$4_0 = false;
    },
    
    writeElementString: function(tagName, value) {ULS6Pv:;
        this.$A_0();
        this.$8_0();
        this.writeStartElement(tagName);
        this.writeString(value);
        this.writeEndElement();
    },
    
    writeEndElement: function() {ULS6Pv:;
        this.$A_0();
        if (SP.ScriptUtility.isNullOrEmptyString(this.$7_0)) {
            throw Error.invalidOperation();
        }
        if (!this.$2_0) {
            this.$0_0.append(' />');
            this.$2_0 = true;
        }
        else {
            this.$0_0.append('</');
            this.$0_0.append(this.$7_0);
            this.$0_0.append('>');
        }
        Array.removeAt(this.$3_0, this.$3_0.length - 1);
        if (this.$3_0.length > 0) {
            this.$7_0 = this.$3_0[this.$3_0.length - 1];
        }
        else {
            this.$7_0 = null;
        }
    },
    
    $8_0: function() {ULS6Pv:;
        if (!this.$2_0) {
            this.$0_0.append('>');
            this.$2_0 = true;
        }
    },
    
    writeAttributeString: function(localName, value) {ULS6Pv:;
        if (this.$2_0) {
            throw Error.invalidOperation();
        }
        this.$0_0.append(' ');
        this.$0_0.append(localName);
        this.$0_0.append('=\"');
        this.$B_0(value, true);
        this.$0_0.append('\"');
    },
    
    writeStartAttribute: function(localName) {ULS6Pv:;
        if (!this.$2_0) {
            throw Error.invalidOperation();
        }
        this.$4_0 = true;
        this.$0_0.append(' ');
        this.$0_0.append(localName);
        this.$0_0.append('=\"');
    },
    
    writeEndAttribute: function() {ULS6Pv:;
        if (!this.$4_0) {
            throw Error.invalidOperation();
        }
        this.$0_0.append('\"');
        this.$4_0 = false;
    },
    
    writeString: function(value) {ULS6Pv:;
        if (this.$4_0) {
            this.$B_0(value, true);
            this.$0_0.append(value);
        }
        else {
            this.$8_0();
            this.$B_0(value, false);
        }
    },
    
    writeRaw: function(xml) {ULS6Pv:;
        this.$A_0();
        this.$8_0();
        this.$0_0.append(xml);
    },
    
    $A_0: function() {ULS6Pv:;
        if (this.$4_0) {
            throw Error.invalidOperation();
        }
    },
    
    $B_0: function($p0, $p1) {
        if (SP.ScriptUtility.isNullOrEmptyString($p0)) {
            return;
        }
        for (var $v_0 = 0; $v_0 < $p0.length; $v_0++) {
            var $v_1 = $p0.charCodeAt($v_0);
            if ($v_1 === 62) {
                this.$0_0.append('&gt;');
            }
            else if ($v_1 === 60) {
                this.$0_0.append('&lt;');
            }
            else if ($v_1 === 38) {
                this.$0_0.append('&amp;');
            }
            else if ($v_1 === 34 && $p1) {
                this.$0_0.append('&quot;');
            }
            else if ($v_1 === 39 && $p1) {
                this.$0_0.append('&apos;');
            }
            else if ($v_1 === 9 && $p1) {
                this.$0_0.append('&#09;');
            }
            else if ($v_1 === 10) {
                this.$0_0.append('&#10;');
            }
            else if ($v_1 === 13) {
                this.$0_0.append('&#13;');
            }
            else {
                this.$0_0.append($p0.charAt($v_0).toString());
            }
        }
    },
    
    close: function() {
    }
}


Type.registerNamespace('SP.UI');

SP.UI.UIUtility = function() {
}
SP.UI.UIUtility.generateRandomElementId = function() {ULS6Pv:;
    var $v_0 = null;
    var $v_1 = null;
    do {
        var $v_2 = Math.random();
        $v_2 = $v_2 * 100000;
        $v_2 = Math.round($v_2);
        $v_0 = 'rnd' + $v_2.toString();
        $v_1 = $get($v_0);
    } while ($v_1);
    return $v_0;
}
SP.UI.UIUtility.cancelEvent = function(evt) {ULS6Pv:;
    if (evt) {
        evt.preventDefault();
        evt.stopPropagation();
    }
}
SP.UI.UIUtility.clearChildNodes = function(elem) {ULS6Pv:;
    if (elem) {
        var $v_0 = [];
        for (var $v_1 = 0; $v_1 < elem.childNodes.length; $v_1++) {
            Array.add($v_0, elem.childNodes[$v_1]);
        }
        for (var $v_2 = 0; $v_2 < $v_0.length; $v_2++) {
            var $v_3 = $v_0[$v_2];
            elem.removeChild($v_3);
        }
    }
}
SP.UI.UIUtility.hideElement = function(elem) {ULS6Pv:;
    if (elem) {
        elem.style.display = 'none';
    }
}
SP.UI.UIUtility.showElement = function(elem) {ULS6Pv:;
    if (elem) {
        elem.style.display = '';
    }
}
SP.UI.UIUtility.insertBefore = function(newElement, referenceElement) {ULS6Pv:;
    var $v_0 = referenceElement.parentNode;
    $v_0.insertBefore(newElement, referenceElement);
}
SP.UI.UIUtility.insertAfter = function(newElement, targetElement) {ULS6Pv:;
    var $v_0 = targetElement.parentNode;
    if ($v_0.lastChild === targetElement) {
        $v_0.appendChild(newElement);
    }
    else {
        $v_0.insertBefore(newElement, targetElement.nextSibling);
    }
}
SP.UI.UIUtility.removeNode = function(elem) {ULS6Pv:;
    if (elem.parentNode) {
        elem.parentNode.removeChild(elem);
    }
}
SP.UI.UIUtility.calculateOffsetLeft = function(elem) {ULS6Pv:;
    var $v_0 = 0;
    while (elem) {
        $v_0 += elem.offsetLeft;
        elem = elem.offsetParent;
    }
    return $v_0;
}
SP.UI.UIUtility.calculateOffsetTop = function(elem) {ULS6Pv:;
    var $v_0 = 0;
    while (elem) {
        $v_0 += elem.offsetTop;
        elem = elem.offsetParent;
    }
    return $v_0;
}
SP.UI.UIUtility.createHtmlInputText = function(text) {ULS6Pv:;
    var $v_0 = document.createElement('input');
    $v_0.setAttribute('type', 'text');
    if (text) {
        $v_0.setAttribute('value', text);
    }
    return $v_0;
}
SP.UI.UIUtility.createHtmlInputCheckbox = function(isChecked) {ULS6Pv:;
    var $v_0 = document.createElement('input');
    $v_0.setAttribute('type', 'checkbox');
    if (isChecked) {
        $v_0.setAttribute('defaultChecked', isChecked);
    }
    return $v_0;
}
SP.UI.UIUtility.setInnerText = function(elem, text) {ULS6Pv:;
    SP.UI.NativeDomHelper.setInnerText(elem, text);
}
SP.UI.UIUtility.getInnerText = function(elem) {ULS6Pv:;
    if (Sys.Browser.agent === Sys.Browser.Safari || Sys.Browser.agent === Sys.Browser.AppleWebKit) {
        return elem.innerHTML;
    }
    else if (Sys.Browser.agent === Sys.Browser.Firefox) {
        return elem.textContent;
    }
    else {
        return elem.innerText;
    }
}
SP.UI.UIUtility.isTextNode = function(elem) {ULS6Pv:;
    return elem.nodeType === 3 || elem.nodeType === 4;
}
SP.UI.UIUtility.isNodeOfType = function(elem, tagNames) {ULS6Pv:;
    for (var $v_0 = 0; $v_0 < tagNames.length; $v_0++) {
        if (elem.tagName === tagNames[$v_0]) {
            return true;
        }
    }
    return false;
}
SP.UI.UIUtility.$J_0 = function($p0) {
    var $v_0 = $p0;
    while ($v_0) {
        var $v_1 = $v_0.className;
        if ($v_1) {
            if ($v_1.indexOf('ms-cui') !== -1 || $v_1.indexOf('ms-rtefocus-invalid') !== -1 || $v_1.indexOf('ms-dlgOverlay') !== -1 || $v_1.indexOf('ms-dlgFrame') !== -1 || $v_1.indexOf('ms-dlgTitle') !== -1 || $v_1.indexOf('ms-dlgTitleText') !== -1) {
                return true;
            }
        }
        $v_0 = $v_0.parentNode;
    }
    if ($p0.tagName === 'HTML') {
        return true;
    }
    return false;
}
SP.UI.UIUtility.focusValidOnThisNode = function(node) {ULS6Pv:;
    if (!node || SP.UI.UIUtility.$C_0 === node) {
        return true;
    }
    if (!SP.UI.UIUtility.$J_0(node)) {
        SP.UI.UIUtility.$C_0 = node;
        return true;
    }
    else {
        return false;
    }
}


Type.registerNamespace('SP.Utilities');

SP.Utilities.HttpUtility = function() {
}
SP.Utilities.HttpUtility.htmlEncode = function(str) {ULS6Pv:;
    return STSHtmlEncode(str);
}
SP.Utilities.HttpUtility.urlPathEncode = function(str) {ULS6Pv:;
    return escapeProperlyCore(str, true);
}
SP.Utilities.HttpUtility.urlKeyValueEncode = function(keyOrValueToEncode) {ULS6Pv:;
    return escapeProperlyCore(keyOrValueToEncode, false);
}
SP.Utilities.HttpUtility.ecmaScriptStringLiteralEncode = function(scriptLiteralToEncode) {ULS6Pv:;
    return STSScriptEncode(scriptLiteralToEncode);
}
SP.Utilities.HttpUtility.navigateTo = function(url) {ULS6Pv:;
    STSNavigate(url);
}
SP.Utilities.HttpUtility.appendSourceAndNavigateTo = function(url) {ULS6Pv:;
    GoToPage(url);
}
SP.Utilities.HttpUtility.escapeXmlText = function(toescape) {ULS6Pv:;
    toescape = toescape.replace(SP.Utilities.HttpUtility.$D_0, '&amp;');
    toescape = toescape.replace(SP.Utilities.HttpUtility.$H_0, '&#39;');
    toescape = toescape.replace(SP.Utilities.HttpUtility.$E_0, '&quot;');
    toescape = toescape.replace(SP.Utilities.HttpUtility.$G_0, '&lt;');
    toescape = toescape.replace(SP.Utilities.HttpUtility.$F_0, '&gt;');
    return toescape;
}


SP.Utilities.UrlBuilder = function(path) {ULS6Pv:;
    this.$6_0 = path;
}
SP.Utilities.UrlBuilder.urlCombine = function(path1, path2) {ULS6Pv:;
    if (path1.endsWith('/')) {
        return path1 + path2;
    }
    else {
        return path1 + '/' + path2;
    }
}
SP.Utilities.UrlBuilder.replaceOrAddQueryString = function(url, key, value) {ULS6Pv:;
    key = SP.Utilities.HttpUtility.urlKeyValueEncode(key);
    value = SP.Utilities.HttpUtility.urlKeyValueEncode(value);
    return StURLSetVar2(url, key, value);
}
SP.Utilities.UrlBuilder.removeQueryString = function(url, key) {ULS6Pv:;
    key = SP.Utilities.HttpUtility.urlKeyValueEncode(key);
    return RemoveQueryParameterFromUrl(url, key);
}
SP.Utilities.UrlBuilder.prototype = {
    $6_0: null,
    $1_0: null,
    
    combinePath: function(path) {ULS6Pv:;
        this.$6_0 = SP.Utilities.UrlBuilder.urlCombine(this.$6_0, path);
    },
    
    addKeyValueQueryString: function(key, value) {ULS6Pv:;
        if (!this.$1_0) {
            this.$1_0 = new Sys.StringBuilder();
        }
        if (!this.$1_0.isEmpty()) {
            this.$1_0.append('&');
        }
        this.$1_0.append(SP.Utilities.HttpUtility.urlKeyValueEncode(key));
        this.$1_0.append('=');
        this.$1_0.append(SP.Utilities.HttpUtility.urlKeyValueEncode(value));
    },
    
    get_url: function() {ULS6Pv:;
        if (SP.ScriptUtility.isNullOrEmptyString(this.$6_0)) {
            return '';
        }
        if (!this.$1_0 || this.$1_0.isEmpty()) {
            return this.$6_0;
        }
        return this.$6_0 + '?' + this.$1_0.toString();
    },
    
    toString: function() {ULS6Pv:;
        return this.get_url();
    }
}


Type.registerNamespace('SP.ListOperation');

SP.ListOperation.Selection = function() {
}
SP.ListOperation.Selection.selectListItem = function(iid, bSelect) {ULS6Pv:;
    return SelectListItemNative(iid, bSelect);
}
SP.ListOperation.Selection.getSelectedItems = function() {ULS6Pv:;
    return GetSelectedItemsNative();
}
SP.ListOperation.Selection.getSelectedList = function() {ULS6Pv:;
    return GetSelectedListNative();
}
SP.ListOperation.Selection.deselectAllListItems = function(iid) {ULS6Pv:;
    return DeselectAllListItemsNative(iid);
}


SP.Guid.registerClass('SP.Guid');
SP.ScriptUtility.registerClass('SP.ScriptUtility');
SP.XmlWriter.registerClass('SP.XmlWriter');
SP.UI.UIUtility.registerClass('SP.UI.UIUtility');
SP.Utilities.HttpUtility.registerClass('SP.Utilities.HttpUtility');
SP.Utilities.UrlBuilder.registerClass('SP.Utilities.UrlBuilder');
SP.ListOperation.Selection.registerClass('SP.ListOperation.Selection');
SP.Guid.$I_0 = [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f' ];
SP.Guid.$9_0 = null;
SP.ScriptUtility.emptyString = '';
SP.UI.UIUtility.$C_0 = null;
SP.Utilities.HttpUtility.$D_0 = new RegExp('&', 'g');
SP.Utilities.HttpUtility.$H_0 = new RegExp('\'', 'g');
SP.Utilities.HttpUtility.$E_0 = new RegExp('\"', 'g');
SP.Utilities.HttpUtility.$G_0 = new RegExp('<', 'g');
SP.Utilities.HttpUtility.$F_0 = new RegExp('>', 'g');

SP.UI.NativeDomHelper = function SP_UI_NativeDomHelper()
{
};
SP.UI.NativeDomHelper.setInnerText = function SP_UI_NativeDomHelper$SetInnerText(elem, text)
{ULS6Pv:;
    var doc = elem.ownerDocument;
    if (doc.createTextNode)
    {
        var textNode = doc.createTextNode(text);
        elem.innerHTML = '';
        elem.appendChild(textNode);        
    }
    else
    {
        elem.innerText = text;
    }
};

if( typeof(Sys) != "undefined" && Sys && Sys.Application ){
   Sys.Application.notifyScriptLoaded();
}
NotifyScriptLoadedAndExecuteWaitingJobs("sp.core.js");
