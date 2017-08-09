function ULSqiZ(){var o=new Object;o.ULSTeamName="Microsoft SharePoint Foundation";o.ULSFileName="SP.Runtime.debug.js";return o;}


Type.registerNamespace('SP');

SP.DateTimeKind = function() {}
SP.DateTimeKind.prototype = {
    unspecified: 0, 
    utc: 1, 
    local: 2
}
SP.DateTimeKind.registerEnum('SP.DateTimeKind', false);


SP.ClientRequestStatus = function() {}
SP.ClientRequestStatus.prototype = {
    active: 0, 
    inProgress: 1, 
    completedSuccess: 2, 
    completedException: 3
}
SP.ClientRequestStatus.registerEnum('SP.ClientRequestStatus', false);


SP.IFromJson = function() {}
SP.IFromJson.registerInterface('SP.IFromJson');


SP.ArrayListEnumerator = function(data) {ULSqiZ:;
    this.$2_0 = data;
    this.$L_0 = -1;
    this.$1k_0 = data.length;
}
SP.ArrayListEnumerator.prototype = {
    $2_0: null,
    $L_0: 0,
    $1k_0: 0,
    
    get_current: function() {ULSqiZ:;
        return this.$2_0[this.$L_0];
    },
    
    moveNext: function() {ULSqiZ:;
        if (this.$1k_0 !== this.$2_0.length) {
            throw Error.invalidOperation(SP.Res.collectionModified);
        }
        this.$L_0++;
        return this.$L_0 < this.$2_0.length;
    },
    
    reset: function() {ULSqiZ:;
        this.$L_0 = -1;
    }
}


SP.BaseCollection = function() {
}
SP.BaseCollection.prototype = {
    
    getEnumerator: function() {ULSqiZ:;
        return new SP.BaseCollectionEnumerator(this);
    },
    
    get_count: function() {ULSqiZ:;
        return 0;
    },
    
    itemAtIndex: function(index) {ULSqiZ:;
        return null;
    }
}


SP.BaseCollectionEnumerator = function(collection) {ULSqiZ:;
    this.$18_0 = collection;
    this.$L_0 = -1;
}
SP.BaseCollectionEnumerator.prototype = {
    $18_0: null,
    $L_0: 0,
    
    get_current: function() {ULSqiZ:;
        return this.$18_0.itemAtIndex(this.$L_0);
    },
    
    moveNext: function() {ULSqiZ:;
        this.$L_0++;
        return this.$L_0 < this.$18_0.get_count();
    },
    
    reset: function() {ULSqiZ:;
        this.$L_0 = -1;
    }
}


SP.Base64EncodedByteArray = function() {ULSqiZ:;
    if (arguments.length > 0 && !SP.ScriptUtility.isNullOrEmptyString(arguments[0])) {
        var $v_0 = arguments[0];
        this.$2B_0($v_0);
    }
    else {
        this.$2_0 = ([]);
        this.$A_0 = 0;
    }
}
SP.Base64EncodedByteArray.prototype = {
    $2_0: null,
    $A_0: 0,
    
    get_length: function() {ULSqiZ:;
        return this.$A_0;
    },
    
    $2B_0: function($p0) {
        $p0 = $p0.replace('\\u002f', '/');
        $p0 = $p0.replace('\\u002F', '/');
        var $v_0 = new RegExp('[^A-Za-z0-9+/=]', 'g');
        $p0 = $p0.replace($v_0, '');
        var $v_1 = Math.ceil(($p0.length + 1) / 4);
        var $v_2 = Math.ceil(($v_1 * 3 + 1) / 2);
        this.$2_0 = new Array($v_2);
        for (var $v_3 = 0; $v_3 < this.$2_0.length; $v_3++) {
            this.$2_0[$v_3] = 0;
        }
        this.$A_0 = 0;
        for (var $v_4 = 0; $v_4 < $p0.length; $v_4 += 4) {
            var $v_5 = $p0.charAt($v_4);
            var $v_6 = $p0.charAt($v_4 + 1);
            var $v_7 = $p0.charAt($v_4 + 2);
            var $v_8 = $p0.charAt($v_4 + 3);
            var $v_9 = SP.Base64EncodedByteArray.$m_0.indexOf($v_5);
            var $v_A = SP.Base64EncodedByteArray.$m_0.indexOf($v_6);
            var $v_B = SP.Base64EncodedByteArray.$m_0.indexOf($v_7);
            var $v_C = SP.Base64EncodedByteArray.$m_0.indexOf($v_8);
            var $v_D = ($v_9 << 2) | ($v_A >> 4);
            var $v_E = (($v_A & 15) << 4) | ($v_B >> 2);
            var $v_F = (($v_B & 3) << 6) | $v_C;
            this.$n_0(this.$A_0, $v_D);
            this.$A_0++;
            if ($v_B !== 64) {
                this.$n_0(this.$A_0, $v_E);
                this.$A_0++;
            }
            if ($v_C !== 64) {
                this.$n_0(this.$A_0, $v_F);
                this.$A_0++;
            }
        }
    },
    
    toBase64String: function() {ULSqiZ:;
        var $v_0 = new Sys.StringBuilder();
        var $v_1 = 0;
        var $v_2 = this.$A_0 % 3;
        var $v_3 = this.$A_0 - $v_2;
        var $v_4, $v_5, $v_6;
        var $v_7, $v_8, $v_9, $v_A;
        for ($v_1 = 0; $v_1 < $v_3; $v_1 += 3) {
            $v_4 = this.getByteAt($v_1);
            $v_5 = this.getByteAt($v_1 + 1);
            $v_6 = this.getByteAt($v_1 + 2);
            $v_7 = SP.Base64EncodedByteArray.$H_0[($v_4 & 252) >> 2];
            $v_8 = SP.Base64EncodedByteArray.$H_0[(($v_4 & 3) << 4) | (($v_5 & 240) >> 4)];
            $v_9 = SP.Base64EncodedByteArray.$H_0[(($v_5 & 15) << 2) | (($v_6 & 192) >> 6)];
            $v_A = SP.Base64EncodedByteArray.$H_0[($v_6 & 63)];
            $v_0.append($v_7);
            $v_0.append($v_8);
            $v_0.append($v_9);
            $v_0.append($v_A);
        }
        switch ($v_2) {
            case 2:
                $v_4 = this.getByteAt($v_1);
                $v_5 = this.getByteAt($v_1 + 1);
                $v_7 = SP.Base64EncodedByteArray.$H_0[($v_4 & 252) >> 2];
                $v_8 = SP.Base64EncodedByteArray.$H_0[(($v_4 & 3) << 4) | (($v_5 & 240) >> 4)];
                $v_9 = SP.Base64EncodedByteArray.$H_0[($v_5 & 15) << 2];
                $v_A = SP.Base64EncodedByteArray.$H_0[64];
                $v_0.append($v_7);
                $v_0.append($v_8);
                $v_0.append($v_9);
                $v_0.append($v_A);
                break;
            case 1:
                $v_4 = this.getByteAt($v_1);
                $v_7 = SP.Base64EncodedByteArray.$H_0[($v_4 & 252) >> 2];
                $v_8 = SP.Base64EncodedByteArray.$H_0[($v_4 & 3) << 4];
                $v_9 = SP.Base64EncodedByteArray.$H_0[64];
                $v_A = SP.Base64EncodedByteArray.$H_0[64];
                $v_0.append($v_7);
                $v_0.append($v_8);
                $v_0.append($v_9);
                $v_0.append($v_A);
                break;
        }
        return $v_0.toString();
    },
    
    append: function(b) {ULSqiZ:;
        if (!(this.$A_0 % 2)) {
            this.$2_0[this.$A_0 / 2 + 1] = 0;
        }
        this.$n_0(this.$A_0, b);
        this.$A_0++;
    },
    
    getByteAt: function(index) {ULSqiZ:;
        if (index >= this.$A_0) {
            throw Error.argumentOutOfRange('index');
        }
        var $v_0 = Math.floor(index / 2);
        var $v_1 = this.$2_0[$v_0];
        var $v_2 = index % 2;
        if (!$v_2) {
            return ($v_1 & 255);
        }
        else {
            return (($v_1 & 65280) >> 8);
        }
    },
    
    setByteAt: function(index, b) {ULSqiZ:;
        if (index >= this.$A_0) {
            throw Error.argumentOutOfRange('index');
        }
        this.$n_0(index, b);
    },
    
    $n_0: function($p0, $p1) {
        var $v_0 = Math.floor($p0 / 2);
        var $v_1 = this.$2_0[$v_0];
        var $v_2 = $p0 % 2;
        if (!$v_2) {
            $v_1 = ($v_1 & 65280) + ($p1 & 255);
        }
        else {
            $v_1 = ($p1 & 255) * 256 + ($v_1 & 255);
        }
        this.$2_0[$v_0] = $v_1;
    },
    
    fromJson: function(initValue) {ULSqiZ:;
        if (SP.ScriptUtility.isNullOrUndefined(initValue)) {
            return;
        }
        if (SP.Base64EncodedByteArray.isInstanceOfType(initValue)) {
            var $v_0 = initValue;
            this.$A_0 = $v_0.$A_0;
            this.$2_0 = $v_0.$2_0;
        }
    },
    
    customFromJson: function(initValue) {ULSqiZ:;
        return false;
    }
}


SP.ClientDictionaryResultHandler = function(dict) {ULSqiZ:;
    this.$1e_0 = dict;
}
SP.ClientDictionaryResultHandler.prototype = {
    $1e_0: null,
    
    fromJson: function(obj) {ULSqiZ:;
        if (SP.ScriptUtility.isNullOrUndefined(obj)) {
            return;
        }
        var $v_0 = obj;
        var $$dict_1_0 = $v_0;
        for (var $$key_1_1 in $$dict_1_0) {
            var $v_1 = { key: $$key_1_1, value: $$dict_1_0[$$key_1_1] };
            if (typeof($v_1.value) !== 'function' && $v_1.key !== '_ObjectType_') {
                this.$1e_0[$v_1.key] = $v_1.value;
            }
        }
    },
    
    customFromJson: function(obj) {ULSqiZ:;
        return false;
    }
}


SP.ClientActionInstantiateObjectPathResult = function(path) {ULSqiZ:;
    this.$X_0 = path;
}
SP.ClientActionInstantiateObjectPathResult.prototype = {
    $X_0: null,
    
    fromJson: function($p0) {
        if (!SP.ScriptUtility.isNullOrUndefined($p0) && typeof($p0) === 'object') {
            var $v_0 = false;
            if (typeof($p0.IsNull) === 'boolean') {
                $v_0 = $p0.IsNull;
            }
            this.$X_0.$w_0 = $v_0;
        }
    },
    
    customFromJson: function($p0) {
        return false;
    }
}


SP.ClientObjectCollectionResult = function(context, result) {ULSqiZ:;
    this.$0_0 = context;
    this.$1H_0 = result;
}
SP.ClientObjectCollectionResult.prototype = {
    $1H_0: null,
    $0_0: null,
    
    fromJson: function($p0) {
        if (!SP.ScriptUtility.isNullOrUndefined($p0) && typeof($p0) === 'object') {
            if (Array.isInstanceOfType($p0)) {
                SP.DataConvert.populateArray(this.$0_0, this.$1H_0, $p0);
            }
            else {
                var $v_0 = $p0._Child_Items_;
                if (($v_0)) {
                    SP.DataConvert.populateArray(this.$0_0, this.$1H_0, $v_0);
                }
            }
        }
    },
    
    customFromJson: function($p0) {
        return false;
    }
}


SP.DataConvert = function() {
}
SP.DataConvert.writePropertiesToXml = function(writer, obj, propNames, serializationContext) {ULSqiZ:;
    for (var $v_0 = 0; $v_0 < propNames.length; $v_0++) {
        var $v_1 = propNames[$v_0];
        writer.writeStartElement('Property');
        writer.writeAttributeString('Name', $v_1);
        var $v_2 = SP.DataConvert.invokeGetProperty(obj, $v_1);
        SP.DataConvert.writeValueToXmlElement(writer, $v_2, serializationContext);
        writer.writeEndElement();
    }
}
SP.DataConvert.populateDictionaryFromObject = function(dict, parentNode) {ULSqiZ:;
    if (SP.ScriptUtility.isNullOrUndefined(parentNode)) {
        return;
    }
    var $v_0 = parentNode;
    var $$dict_1_0 = $v_0;
    for (var $$key_1_1 in $$dict_1_0) {
        var $v_1 = { key: $$key_1_1, value: $$dict_1_0[$$key_1_1] };
        dict[$v_1.key] = $v_1.value;
    }
}
SP.DataConvert.fixupTypes = function(context, dict) {ULSqiZ:;
    var $$dict_1_0 = dict;
    for (var $$key_1_1 in $$dict_1_0) {
        var $v_0 = { key: $$key_1_1, value: $$dict_1_0[$$key_1_1] };
        if (!SP.ScriptUtility.isNullOrUndefined($v_0.value) && typeof($v_0.value) === 'object') {
            var $v_1 = SP.DataConvert.fixupType(context, $v_0.value);
            dict[$v_0.key] = $v_1;
        }
    }
}
SP.DataConvert.populateArray = function(context, dest, jsonArrayFromServer) {ULSqiZ:;
    if (SP.ScriptUtility.isNullOrUndefined(jsonArrayFromServer)) {
        return;
    }
    for (var $v_0 = 0; $v_0 < jsonArrayFromServer.length; $v_0++) {
        var $v_1 = jsonArrayFromServer[$v_0];
        if (SP.ScriptUtility.isNullOrUndefined($v_1)) {
            Array.add(dest, $v_1);
            continue;
        }
        var $v_2 = SP.DataConvert.fixupType(context, $v_1);
        Array.add(dest, $v_2);
    }
}
SP.DataConvert.fixupType = function(context, obj) {ULSqiZ:;
    var $v_0 = obj;
    if (!SP.ScriptUtility.isNullOrUndefined(obj) && typeof(obj) === 'object') {
        var $v_1 = obj._ObjectType_;
        if (!SP.ScriptUtility.isNullOrUndefined($v_1)) {
            var $v_2 = Type.parse($v_1);
            $v_0 = new $v_2(context);
            if (SP.IFromJson.isInstanceOfType($v_0)) {
                var $v_3 = $v_0;
                if (!$v_3.customFromJson(obj)) {
                    $v_3.fromJson(obj);
                }
            }
        }
        else if (Array.isInstanceOfType(obj)) {
            var $v_4 = obj;
            for (var $v_5 = 0; $v_5 < $v_4.length; $v_5++) {
                $v_4[$v_5] = SP.DataConvert.fixupType(context, $v_4[$v_5]);
            }
        }
    }
    return $v_0;
}
SP.DataConvert.writeDictionaryToXml = function(writer, dict, topLevelElementTagName, keys, serializationContext) {ULSqiZ:;
    if (!SP.ScriptUtility.isNullOrEmptyString(topLevelElementTagName)) {
        writer.writeStartElement(topLevelElementTagName);
    }
    var $$dict_1_0 = dict;
    for (var $$key_1_1 in $$dict_1_0) {
        var $v_0 = { key: $$key_1_1, value: $$dict_1_0[$$key_1_1] };
        if (!keys || Array.contains(keys, $v_0.key)) {
            writer.writeStartElement('Property');
            writer.writeAttributeString('Name', $v_0.key);
            var $v_1 = $v_0.value;
            SP.DataConvert.writeValueToXmlElement(writer, $v_1, serializationContext);
            writer.writeEndElement();
        }
    }
    if (!SP.ScriptUtility.isNullOrEmptyString(topLevelElementTagName)) {
        writer.writeEndElement();
    }
}
SP.DataConvert.writeValueToXmlElement = function(writer, objValue, serializationContext) {ULSqiZ:;
    if (SP.ScriptUtility.isNullOrUndefined(objValue)) {
        writer.writeAttributeString('Type', 'Null');
    }
    else if (SP.ClientObject.isInstanceOfType(objValue)) {
        var $v_0 = objValue;
        if (!$v_0.get_path()) {
            throw Error.create(SP.Res.noObjectPathAssociatedWithObject);
        }
        writer.writeAttributeString('ObjectPathId', $v_0.get_path().$1_0.toString());
        serializationContext.addClientObject($v_0);
    }
    else if (SP.ClientValueObject.isInstanceOfType(objValue)) {
        var $v_1 = objValue;
        writer.writeAttributeString('TypeId', $v_1.get_typeId());
        if (!$v_1.customWriteToXml(writer, serializationContext)) {
            $v_1.writeToXml(writer, serializationContext);
        }
    }
    else {
        if (Object.getType(objValue) === Array) {
            writer.writeAttributeString('Type', 'Array');
            var $v_2 = objValue;
            for (var $v_3 = 0; $v_3 < $v_2.length; $v_3++) {
                var $v_4 = $v_2[$v_3];
                writer.writeStartElement('Object');
                SP.DataConvert.writeValueToXmlElement(writer, $v_4, serializationContext);
                writer.writeEndElement();
            }
        }
        else if (Object.getType(objValue) === Date) {
            writer.writeAttributeString('Type', 'DateTime');
            var $v_5 = objValue;
            var $v_6 = SP.DataConvert.getDateTimeKind($v_5);
            var $v_7;
            if (!$v_6) {
                var $v_8 = $v_5.getMonth() + 1;
                $v_7 = SP.DataConvert.$7_0($v_5.getFullYear().toString(), 4) + '-' + SP.DataConvert.$7_0($v_8.toString(), 2) + '-' + SP.DataConvert.$7_0($v_5.getDate().toString(), 2) + 'T' + SP.DataConvert.$7_0($v_5.getHours().toString(), 2) + ':' + SP.DataConvert.$7_0($v_5.getMinutes().toString(), 2) + ':' + SP.DataConvert.$7_0($v_5.getSeconds().toString(), 2) + '.' + SP.DataConvert.$7_0($v_5.getMilliseconds().toString(), 3);
            }
            else if ($v_6 === 2) {
                var $v_9 = $v_5.getMonth() + 1;
                $v_7 = SP.DataConvert.$7_0($v_5.getFullYear().toString(), 4) + '-' + SP.DataConvert.$7_0($v_9.toString(), 2) + '-' + SP.DataConvert.$7_0($v_5.getDate().toString(), 2) + 'T' + SP.DataConvert.$7_0($v_5.getHours().toString(), 2) + ':' + SP.DataConvert.$7_0($v_5.getMinutes().toString(), 2) + ':' + SP.DataConvert.$7_0($v_5.getSeconds().toString(), 2) + '.' + SP.DataConvert.$7_0($v_5.getMilliseconds().toString(), 3);
                var $v_A = $v_5.getTimezoneOffset() / 60;
                var $v_B = ($v_A <= 0) ? '+' : '-';
                $v_7 = $v_7 + $v_B + SP.DataConvert.$7_0(Math.floor(Math.abs($v_A)).toString(), 2) + ':' + SP.DataConvert.$7_0(Math.abs($v_5.getTimezoneOffset() % 60).toString(), 2);
            }
            else {
                var $v_C = $v_5.getUTCMonth() + 1;
                $v_7 = SP.DataConvert.$7_0($v_5.getUTCFullYear().toString(), 4) + '-' + SP.DataConvert.$7_0($v_C.toString(), 2) + '-' + SP.DataConvert.$7_0($v_5.getUTCDate().toString(), 2) + 'T' + SP.DataConvert.$7_0($v_5.getUTCHours().toString(), 2) + ':' + SP.DataConvert.$7_0($v_5.getUTCMinutes().toString(), 2) + ':' + SP.DataConvert.$7_0($v_5.getUTCSeconds().toString(), 2) + '.' + SP.DataConvert.$7_0($v_5.getUTCMilliseconds().toString(), 3) + 'Z';
            }
            writer.writeString($v_7);
        }
        else if (Object.getType(objValue) === String) {
            writer.writeAttributeString('Type', 'String');
            writer.writeString(objValue.toString());
        }
        else if (Object.getType(objValue) === SP.Guid) {
            writer.writeAttributeString('Type', 'Guid');
            writer.writeString((objValue).toString('B'));
        }
        else if (Object.getType(objValue) === SP.Base64EncodedByteArray) {
            writer.writeAttributeString('Type', 'Base64Binary');
            writer.writeString((objValue).toBase64String());
        }
        else if (typeof(objValue) === 'number') {
            writer.writeAttributeString('Type', 'Number');
            writer.writeString(objValue.toString());
        }
        else if (typeof(objValue) === 'object') {
            writer.writeAttributeString('Type', 'Dictionary');
            var $v_D = objValue;
            var $$dict_3_0 = $v_D;
            for (var $$key_3_1 in $$dict_3_0) {
                var $v_E = { key: $$key_3_1, value: $$dict_3_0[$$key_3_1] };
                var $v_F = $v_E.value;
                if (SP.DataConvert.$26_0($v_F)) {
                    writer.writeStartElement('Property');
                    writer.writeAttributeString('Name', $v_E.key);
                    SP.DataConvert.writeValueToXmlElement(writer, $v_E.value, serializationContext);
                    writer.writeEndElement();
                }
            }
        }
        else if (typeof(objValue) === 'boolean') {
            writer.writeAttributeString('Type', 'Boolean');
            writer.writeString((objValue) ? 'true' : 'false');
        }
        else {
            writer.writeAttributeString('Type', 'Unspecified');
            writer.writeString(objValue.toString());
        }
    }
}
SP.DataConvert.$26_0 = function($p0) {
    if (SP.ScriptUtility.isNullOrUndefined($p0)) {
        return true;
    }
    if (SP.ClientObject.isInstanceOfType($p0) || SP.ClientValueObject.isInstanceOfType($p0)) {
        return true;
    }
    var $v_0 = Object.getType($p0);
    if ($v_0 === Array || $v_0 === Date || $v_0 === SP.Guid) {
        return true;
    }
    var $v_1 = typeof($p0);
    if ($v_1 === 'number' || $v_1 === 'string' || $v_1 === 'boolean') {
        return true;
    }
    return false;
}
SP.DataConvert.$7_0 = function($p0, $p1) {
    if ($p0.length >= $p1) {
        return $p0;
    }
    if ($p1 - $p0.length >= SP.DataConvert.$1S_0.length) {
        throw Error.argumentOutOfRange('len');
    }
    return SP.DataConvert.$1S_0[$p1 - $p0.length] + $p0;
}
SP.DataConvert.$1q_0 = function($p0) {
    var $v_0;
    var $v_1 = 0;
    for (var $v_2 = 0; $v_2 < $p0.length && $p0.charCodeAt($v_2) >= 65 && $p0.charCodeAt($v_2) <= 90; $v_2++) {
        $v_1++;
    }
    if (!$v_1) {
        $v_0 = $p0;
    }
    else if ($v_1 === $p0.length) {
        $v_0 = $p0.toLowerCase();
    }
    else {
        $v_0 = $p0.substr(0, $v_1).toLowerCase() + $p0.substr($v_1);
    }
    return $v_0;
}
SP.DataConvert.invokeSetProperty = function(obj, propName, propValue) {ULSqiZ:;
    var $v_0 = SP.DataConvert.$1q_0(propName);
    obj['set_' + $v_0](propValue);
}
SP.DataConvert.invokeGetProperty = function(obj, propName) {ULSqiZ:;
    var $v_0 = SP.DataConvert.$1q_0(propName);
    var $v_1 = obj['get_' + $v_0]();
    return $v_1;
}
SP.DataConvert.specifyDateTimeKind = function(datetime, kind) {ULSqiZ:;
    datetime.kind = kind;
}
SP.DataConvert.getDateTimeKind = function(datetime) {ULSqiZ:;
    var $v_0 = datetime.kind;
    if (SP.ScriptUtility.isNullOrUndefined($v_0)) {
        return 2;
    }
    return $v_0;
}
SP.DataConvert.createUnspecifiedDateTime = function(year, month, day, hour, minute, second, milliseconds) {ULSqiZ:;
    var $v_0 = new Date(year, month, day, hour, minute, second, milliseconds);
    SP.DataConvert.specifyDateTimeKind($v_0, 0);
    return $v_0;
}
SP.DataConvert.createUtcDateTime = function(milliseconds) {ULSqiZ:;
    var $v_0 = new Date(milliseconds);
    SP.DataConvert.specifyDateTimeKind($v_0, 1);
    return $v_0;
}
SP.DataConvert.createLocalDateTime = function(milliseconds) {ULSqiZ:;
    var $v_0 = new Date(milliseconds);
    SP.DataConvert.specifyDateTimeKind($v_0, 2);
    return $v_0;
}


SP.PageRequestFailedEventArgs = function(executor, errorMessage) {ULSqiZ:;
    SP.PageRequestFailedEventArgs.initializeBase(this);
    this.$e_1 = executor;
    this.$d_1 = errorMessage;
}
SP.PageRequestFailedEventArgs.prototype = {
    $d_1: null,
    $e_1: null,
    
    get_executor: function() {ULSqiZ:;
        return this.$e_1;
    },
    
    get_errorMessage: function() {ULSqiZ:;
        if (SP.ScriptUtility.isNullOrEmptyString(this.$d_1)) {
            return 'Cannot complete the request.';
        }
        return this.$d_1;
    },
    
    get_isErrorPage: function() {ULSqiZ:;
        if (this.$e_1.get_statusCode() !== 200) {
            return true;
        }
        var $v_0 = this.$e_1.getResponseHeader('SharePointError');
        if (!SP.ScriptUtility.isNullOrEmptyString($v_0)) {
            return true;
        }
        return false;
    }
}


SP.PageRequestSucceededEventArgs = function(executor) {ULSqiZ:;
    SP.PageRequestSucceededEventArgs.initializeBase(this);
    this.$e_1 = executor;
}
SP.PageRequestSucceededEventArgs.prototype = {
    $e_1: null,
    
    get_executor: function() {ULSqiZ:;
        return this.$e_1;
    }
}


SP.PageRequest = function() {ULSqiZ:;
    this.$11 = Function.createDelegate(this, this.$2F_0);
}
SP.PageRequest.doPost = function(url, body, expectedContentType, succeededHandler, failedHandler) {ULSqiZ:;
    var $v_0 = new SP.PageRequest();
    if (succeededHandler) {
        $v_0.add_succeeded(succeededHandler);
    }
    if (failedHandler) {
        $v_0.add_failed(failedHandler);
    }
    $v_0.set_url(url);
    $v_0.set_expectedContentType(expectedContentType);
    $v_0.post(body);
}
SP.PageRequest.doGet = function(url, expectedContentType, succeededHandler, failedHandler) {ULSqiZ:;
    var $v_0 = new SP.PageRequest();
    if (succeededHandler) {
        $v_0.add_succeeded(succeededHandler);
    }
    if (failedHandler) {
        $v_0.add_failed(failedHandler);
    }
    $v_0.set_url(url);
    $v_0.set_expectedContentType(expectedContentType);
    $v_0.get();
}
SP.PageRequest.prototype = {
    $8_0: null,
    
    get_request: function() {ULSqiZ:;
        if (!this.$8_0) {
            this.$8_0 = new Sys.Net.WebRequest();
        }
        return this.$8_0;
    },
    
    get_url: function() {ULSqiZ:;
        return this.get_request().get_url();
    },
    set_url: function(value) {ULSqiZ:;
        value = window.escapeUrlForCallback(value);
        this.get_request().set_url(value);
        return value;
    },
    
    $1C_0: null,
    
    get_expectedContentType: function() {ULSqiZ:;
        if (SP.ScriptUtility.isNullOrEmptyString(this.$1C_0)) {
            return 'html';
        }
        return this.$1C_0;
    },
    set_expectedContentType: function(value) {ULSqiZ:;
        this.$1C_0 = value;
        return value;
    },
    
    post: function(body) {ULSqiZ:;
        this.get_request().set_httpVerb('POST');
        this.get_request().set_body(body);
        SP.ClientRequest.$1T(this.get_request());
        this.get_request().add_completed(this.$11);
        this.get_request().invoke();
    },
    
    get: function() {ULSqiZ:;
        this.get_request().set_httpVerb('GET');
        SP.ClientRequest.$1T(this.get_request());
        this.get_request().add_completed(this.$11);
        this.get_request().invoke();
    },
    
    $C_0: null,
    
    get_$E_0: function() {ULSqiZ:;
        if (!this.$C_0) {
            this.$C_0 = new Sys.EventHandlerList();
        }
        return this.$C_0;
    },
    
    add_succeeded: function(value) {ULSqiZ:;
        this.get_$E_0().addHandler('succeeded', value);
    },
    remove_succeeded: function(value) {ULSqiZ:;
        this.get_$E_0().removeHandler('succeeded', value);
    },
    
    add_failed: function(value) {ULSqiZ:;
        this.get_$E_0().addHandler('failed', value);
    },
    remove_failed: function(value) {ULSqiZ:;
        this.get_$E_0().removeHandler('failed', value);
    },
    
    $2F_0: function($p0) {
        var $v_0 = null;
        var $v_1 = null;
        if (this.$C_0) {
            $v_1 = this.$C_0.getHandler('succeeded');
            $v_0 = this.$C_0.getHandler('failed');
        }
        var $v_2 = SP.ClientRequest.$1b($p0, this.get_expectedContentType());
        if ($v_2) {
            if ($v_0) {
                $v_0(this, new SP.PageRequestFailedEventArgs($p0, $v_2));
            }
            else {
                alert($v_2);
            }
        }
        else {
            if ($v_1) {
                $v_1(this, new SP.PageRequestSucceededEventArgs($p0));
            }
        }
        this.$C_0 = null;
    }
}


SP.ClientConstants = function() {
}


SP.ClientSchemaVersions = function() {
}


SP.ClientErrorCodes = function() {
}


SP.ClientAction = function(objectPath, name) {ULSqiZ:;
    this.$I_0 = objectPath;
    this.$B_0 = name;
    this.$1_0 = SP.ClientRequest.get_nextSequenceId();
}
SP.ClientAction.prototype = {
    $1_0: 0,
    $I_0: null,
    $B_0: null,
    
    get_id: function() {ULSqiZ:;
        return this.$1_0;
    },
    
    get_path: function() {ULSqiZ:;
        return this.$I_0;
    },
    
    get_name: function() {ULSqiZ:;
        return this.$B_0;
    }
}


SP.ClientActionSetProperty = function(obj, propName, propValue) {ULSqiZ:;
    SP.ClientActionSetProperty.initializeBase(this, [ (!obj) ? null : obj.get_path(), propName ]);
    if (!obj) {
        throw Error.argumentNull('obj');
    }
    if (!obj.get_path() || !obj.get_path().$V_0) {
        throw Error.create(SP.Res.noObjectPathAssociatedWithObject);
    }
    this.$1m_1 = propName;
    this.$f_1 = propValue;
    this.$5_1 = new SP.SerializationContext();
    var $v_0;
    this.$6_1 = new Sys.StringBuilder();
    $v_0 = SP.XmlWriter.create(this.$6_1);
    this.$Z_1($v_0, this.$5_1);
    $v_0.close();
    this.$f_1 = null;
}
SP.ClientActionSetProperty.prototype = {
    $1m_1: null,
    $f_1: null,
    $5_1: null,
    $6_1: null,
    
    $22: function($p0, $p1) {
        $p0.writeRaw(this.$6_1.toString());
        $p1.$S(this.$5_1);
    },
    
    $Z_1: function($p0, $p1) {
        $p0.writeStartElement('SetProperty');
        $p0.writeAttributeString('Id', this.$1_0.toString());
        $p0.writeAttributeString('ObjectPathId', this.$I_0.$1_0.toString());
        $p0.writeAttributeString('Name', this.$1m_1);
        $p1.addObjectPath(this.$I_0);
        $p0.writeStartElement('Parameter');
        SP.DataConvert.writeValueToXmlElement($p0, this.$f_1, $p1);
        $p0.writeEndElement();
        $p0.writeEndElement();
    }
}


SP.ClientActionSetStaticProperty = function(typeId, propName, propValue) {ULSqiZ:;
    SP.ClientActionSetStaticProperty.initializeBase(this, [ null, propName ]);
    this.$M_1 = typeId;
    this.$f_1 = propValue;
    this.$5_1 = new SP.SerializationContext();
    var $v_0;
    this.$6_1 = new Sys.StringBuilder();
    $v_0 = SP.XmlWriter.create(this.$6_1);
    this.$Z_1($v_0, this.$5_1);
    $v_0.close();
    this.$f_1 = null;
}
SP.ClientActionSetStaticProperty.prototype = {
    $M_1: null,
    $f_1: null,
    $5_1: null,
    $6_1: null,
    
    $22: function($p0, $p1) {
        $p0.writeRaw(this.$6_1.toString());
        $p1.$S(this.$5_1);
    },
    
    $Z_1: function($p0, $p1) {
        $p0.writeStartElement('SetStaticProperty');
        $p0.writeAttributeString('Id', this.$1_0.toString());
        $p0.writeAttributeString('TypeId', this.$M_1);
        $p0.writeAttributeString('Name', this.$B_0);
        $p0.writeStartElement('Parameter');
        SP.DataConvert.writeValueToXmlElement($p0, this.$f_1, $p1);
        $p0.writeEndElement();
        $p0.writeEndElement();
    }
}


SP.ClientActionInvokeMethod = function(obj, methodName, parameters) {ULSqiZ:;
    SP.ClientActionInvokeMethod.initializeBase(this, [ obj.get_path(), methodName ]);
    this.$3_1 = parameters;
    if (!obj.get_path() || !obj.get_path().$V_0) {
        throw Error.create(SP.Res.noObjectPathAssociatedWithObject);
    }
    this.$Y_1 = obj.$4_0.$Y_0;
    this.$5_1 = new SP.SerializationContext();
    var $v_0;
    this.$6_1 = new Sys.StringBuilder();
    $v_0 = SP.XmlWriter.create(this.$6_1);
    this.$Z_1($v_0, this.$5_1);
    $v_0.close();
    this.$3_1 = null;
}
SP.ClientActionInvokeMethod.prototype = {
    $3_1: null,
    $Y_1: null,
    $5_1: null,
    $6_1: null,
    
    $22: function($p0, $p1) {
        $p0.writeRaw(this.$6_1.toString());
        $p1.$S(this.$5_1);
    },
    
    $Z_1: function($p0, $p1) {
        $p0.writeStartElement('Method');
        $p0.writeAttributeString('Name', this.$B_0);
        $p0.writeAttributeString('Id', this.$1_0.toString());
        $p0.writeAttributeString('ObjectPathId', this.$I_0.$1_0.toString());
        if (!SP.ScriptUtility.isNullOrUndefined(this.$Y_1)) {
            $p0.writeAttributeString('Version', this.$Y_1);
        }
        $p1.addObjectPath(this.$I_0);
        if (this.$3_1 && this.$3_1.length > 0) {
            $p0.writeStartElement('Parameters');
            for (var $v_0 = 0; $v_0 < this.$3_1.length; $v_0++) {
                var $v_1 = this.$3_1[$v_0];
                $p0.writeStartElement('Parameter');
                SP.DataConvert.writeValueToXmlElement($p0, $v_1, $p1);
                $p0.writeEndElement();
            }
            $p0.writeEndElement();
        }
        $p0.writeEndElement();
    }
}


SP.ClientActionInvokeStaticMethod = function(typeId, methodName, parameters) {ULSqiZ:;
    SP.ClientActionInvokeStaticMethod.initializeBase(this, [ null, methodName ]);
    this.$M_1 = typeId;
    this.$3_1 = parameters;
    this.$5_1 = new SP.SerializationContext();
    var $v_0;
    this.$6_1 = new Sys.StringBuilder();
    $v_0 = SP.XmlWriter.create(this.$6_1);
    this.$Z_1($v_0, this.$5_1);
    $v_0.close();
    this.$3_1 = null;
}
SP.ClientActionInvokeStaticMethod.prototype = {
    $3_1: null,
    $M_1: null,
    $5_1: null,
    $6_1: null,
    
    $22: function($p0, $p1) {
        $p0.writeRaw(this.$6_1.toString());
        $p1.$S(this.$5_1);
    },
    
    $Z_1: function($p0, $p1) {
        $p0.writeStartElement('StaticMethod');
        $p0.writeAttributeString('TypeId', this.$M_1);
        $p0.writeAttributeString('Name', this.$B_0);
        $p0.writeAttributeString('Id', this.$1_0.toString());
        if (this.$3_1 && this.$3_1.length > 0) {
            $p0.writeStartElement('Parameters');
            for (var $v_0 = 0; $v_0 < this.$3_1.length; $v_0++) {
                var $v_1 = this.$3_1[$v_0];
                $p0.writeStartElement('Parameter');
                SP.DataConvert.writeValueToXmlElement($p0, $v_1, $p1);
                $p0.writeEndElement();
            }
            $p0.writeEndElement();
        }
        $p0.writeEndElement();
    }
}


SP.ClientActionInstantiateObjectPath = function(path) {ULSqiZ:;
    SP.ClientActionInstantiateObjectPath.initializeBase(this, [ path, null ]);
}
SP.ClientActionInstantiateObjectPath.prototype = {
    
    $22: function($p0, $p1) {
        $p0.writeStartElement('ObjectPath');
        $p0.writeAttributeString('Id', this.$1_0.toString());
        $p0.writeAttributeString('ObjectPathId', this.$I_0.$1_0.toString());
        $p1.addObjectPath(this.$I_0);
        $p0.writeEndElement();
    }
}


SP.ClientObject = function(context, objectPath) {ULSqiZ:;
    if (!context) {
        throw Error.argumentNull('context');
    }
    this.$0_0 = context;
    this.$4_0 = new SP.ClientObjectData();
    this.$4_0.$X_0 = objectPath;
}
SP.ClientObject.prototype = {
    $0_0: null,
    $4_0: null,
    
    get_context: function() {ULSqiZ:;
        return this.$0_0;
    },
    
    get_path: function() {ULSqiZ:;
        return this.$4_0.$X_0;
    },
    
    get_objectVersion: function() {ULSqiZ:;
        return this.$4_0.$Y_0;
    },
    set_objectVersion: function(value) {ULSqiZ:;
        this.$4_0.$Y_0 = value;
        return value;
    },
    
    get_objectData: function() {ULSqiZ:;
        return this.$4_0;
    },
    
    checkUninitializedProperty: function(propName) {ULSqiZ:;
        var $v_0 = this.$4_0.get_properties()[propName];
        if (SP.ScriptUtility.isUndefined($v_0)) {
            throw Error.create(SP.Res.propertyHasNotBeenInitialized);
        }
    },
    
    $1U: function($p0) {
        this.$4_0 = $p0.$4_0;
    },
    
    fromJson: function(initValue) {ULSqiZ:;
        if (SP.ScriptUtility.isNullOrUndefined(initValue)) {
            this.$2H();
            return;
        }
        this.initPropertiesFromJson(initValue);
        this.initNonPropertiesFromJson(initValue);
    },
    
    initPropertiesFromJson: function(initValue) {ULSqiZ:;
        var $v_0 = initValue._ObjectIdentity_;
        if (!SP.ScriptUtility.isNullOrUndefined($v_0)) {
            var $v_1 = $v_0;
            if (!SP.ScriptUtility.isNullOrEmptyString($v_1)) {
                var $v_2 = new SP.ObjectPathIdentity(this.$0_0, $v_1);
                if (this.$4_0.$X_0) {
                    $v_2.$1_0 = this.$4_0.$X_0.$1_0;
                }
                this.$4_0.$X_0 = $v_2;
                $v_2.$w_0 = false;
                this.$0_0.$1X($v_2);
            }
            delete initValue._ObjectIdentity_;
        }
        $v_0 = initValue._ObjectVersion_;
        if (!SP.ScriptUtility.isNullOrUndefined($v_0)) {
            var $v_3 = $v_0;
            if (!SP.ScriptUtility.isNullOrEmptyString($v_3)) {
                this.$4_0.$Y_0 = $v_3;
            }
            delete initValue._ObjectVersion_;
        }
        delete initValue._ObjectType_;
    },
    
    initNonPropertiesFromJson: function(initValue) {
    },
    
    customFromJson: function(initValue) {ULSqiZ:;
        return false;
    },
    
    retrieve: function() {ULSqiZ:;
        var $v_0 = this.get_$h();
        if (!arguments.length) {
            $v_0.selectAllProperties();
        }
        else {
            if (arguments.length === 1 && Array.isInstanceOfType(arguments[0])) {
                var $v_1 = arguments[0];
                for (var $v_2 = 0; $v_2 < $v_1.length; $v_2++) {
                    var $v_3 = $v_1[$v_2];
                    $v_0.select($v_3);
                }
            }
            else {
                for (var $v_4 = 0; $v_4 < arguments.length; $v_4++) {
                    var $v_5 = arguments[$v_4];
                    $v_0.select($v_5);
                }
            }
        }
    },
    
    refreshLoad: function() {ULSqiZ:;
        var $v_0 = this.get_$h();
        this.$1x_0($v_0);
    },
    
    isPropertyAvailable: function(propertyName) {ULSqiZ:;
        var $v_0 = this.$4_0.get_properties()[propertyName];
        return (!SP.ScriptUtility.isUndefined($v_0));
    },
    
    isObjectPropertyInstantiated: function(propertyName) {ULSqiZ:;
        var $v_0 = this.$4_0.get_clientObjectProperties()[propertyName];
        return (!SP.ScriptUtility.isUndefined($v_0));
    },
    
    get_$h: function() {ULSqiZ:;
        var $v_0 = this.$4_0.$9_0;
        if (!$v_0 || $v_0 !== this.$0_0.get_pendingRequest().$W_0) {
            $v_0 = new SP.ClientQueryInternal(this, null, false, null);
            this.$4_0.$9_0 = $v_0;
            this.$0_0.addQueryIdAndResultObject($v_0.$1_0, this);
            this.$0_0.addQuery($v_0);
            this.$0_0.$1Y(this);
            this.$1x_0($v_0);
            this.loadExpandoFields();
        }
        return $v_0;
    },
    
    $1x_0: function($p0) {
        var $$dict_1_0 = this.$4_0.get_properties();
        for (var $$key_1_1 in $$dict_1_0) {
            var $v_0 = { key: $$key_1_1, value: $$dict_1_0[$$key_1_1] };
            $p0.select($v_0.key);
        }
    },
    
    loadExpandoFields: function() {
    },
    
    $13: function() {ULSqiZ:;
        this.$4_0.$9_0 = null;
    },
    
    $O_0: null,
    
    removeFromParentCollection: function() {ULSqiZ:;
        if (this.$O_0) {
            this.$O_0.removeChild(this);
        }
    },
    
    $1o_0: false,
    
    $2H: function() {ULSqiZ:;
        this.$1o_0 = true;
    },
    
    get_serverObjectIsNull: function() {ULSqiZ:;
        if (this.$1o_0) {
            return true;
        }
        var $v_0 = this.get_path();
        if (!$v_0) {
            return false;
        }
        return $v_0.$w_0;
    }
}


SP.ClientObjectData = function() {
}
SP.ClientObjectData.prototype = {
    $Y_0: null,
    $G_0: null,
    
    get_properties: function() {ULSqiZ:;
        if (!this.$G_0) {
            this.$G_0 = {};
        }
        return this.$G_0;
    },
    
    $17_0: null,
    
    get_clientObjectProperties: function() {ULSqiZ:;
        if (!this.$17_0) {
            this.$17_0 = {};
        }
        return this.$17_0;
    },
    
    $1F_0: null,
    
    get_methodReturnObjects: function() {ULSqiZ:;
        if (!this.$1F_0) {
            this.$1F_0 = {};
        }
        return this.$1F_0;
    },
    
    $9_0: null,
    $N_0: null,
    $X_0: null
}


SP.ClientObjectCollection = function(context, objectPath) {ULSqiZ:;
    SP.ClientObjectCollection.initializeBase(this, [ context, objectPath ]);
}
SP.ClientObjectCollection.prototype = {
    $p_1: null,
    
    retrieveItems: function() {ULSqiZ:;
        if (!this.$p_1) {
            this.$p_1 = new SP.ClientObjectPrototype(this.get_$h(), true);
        }
        return this.$p_1;
    },
    
    $13: function() {ULSqiZ:;
        SP.ClientObjectCollection.callBaseMethod(this, '$13');
        this.$p_1 = null;
    },
    
    getEnumerator: function() {ULSqiZ:;
        this.$1y();
        return new SP.ArrayListEnumerator(this.get_data());
    },
    
    getItemAtIndex: function(i) {ULSqiZ:;
        var $v_0 = this.get_data()[i];
        return $v_0;
    },
    
    get_count: function() {ULSqiZ:;
        this.$1y();
        return this.get_data().length;
    },
    
    $19_1: false,
    
    $1y: function() {ULSqiZ:;
        if (!this.$19_1) {
            throw Error.create(SP.Res.collectionHasNotBeenInitialized);
        }
    },
    
    $2_1: null,
    
    get_data: function() {ULSqiZ:;
        if (!this.$2_1) {
            this.$2_1 = [];
        }
        return this.$2_1;
    },
    
    fromJson: function(obj) {ULSqiZ:;
        SP.ClientObjectCollection.callBaseMethod(this, 'fromJson', [ obj ]);
        var $v_0;
        $v_0 = obj._Child_Items_;
        if (($v_0)) {
            this.$2_1 = [];
            this.$19_1 = true;
            SP.DataConvert.populateArray(this.$0_0, this.$2_1, $v_0);
            for (var $v_1 = 0; $v_1 < this.$2_1.length; $v_1++) {
                if (SP.ClientObject.isInstanceOfType(this.$2_1[$v_1])) {
                    var $v_2 = this.$2_1[$v_1];
                    $v_2.$O_0 = this;
                }
            }
        }
    },
    
    addChild: function(obj) {ULSqiZ:;
        Array.add(this.get_data(), obj);
        if (!obj.$O_0) {
            obj.$O_0 = this;
        }
        this.$19_1 = true;
    },
    
    removeChild: function(obj) {ULSqiZ:;
        if (!this.$2_1) {
            return;
        }
        var $v_0 = null;
        if (SP.ObjectPathIdentity.isInstanceOfType(obj.get_path())) {
            $v_0 = obj.get_path();
        }
        for (var $v_1 = this.$2_1.length - 1; $v_1 >= 0; $v_1--) {
            if (this.$2_1[$v_1] === obj) {
                if ((this.$2_1[$v_1]).$O_0 === this) {
                    (this.$2_1[$v_1]).$O_0 = null;
                }
                Array.removeAt(this.$2_1, $v_1);
            }
            else if ($v_0 && SP.ClientObject.isInstanceOfType(this.$2_1[$v_1]) && SP.ObjectPathIdentity.isInstanceOfType((this.$2_1[$v_1]).get_path()) && $v_0.$k_1 === ((this.$2_1[$v_1]).get_path()).$k_1) {
                if ((this.$2_1[$v_1]).$O_0 === this) {
                    (this.$2_1[$v_1]).$O_0 = null;
                }
                Array.removeAt(this.$2_1, $v_1);
            }
        }
    }
}


SP.ClientObjectPrototype = function(query, childItem) {ULSqiZ:;
    this.$9_0 = query;
    this.$b_0 = childItem;
}
SP.ClientObjectPrototype.prototype = {
    $9_0: null,
    $b_0: false,
    
    retrieve: function() {ULSqiZ:;
        if (this.$b_0) {
            if (!arguments.length) {
                this.$9_0.get_childItemQuery().selectAllProperties();
            }
            else {
                if (arguments.length === 1 && Array.isInstanceOfType(arguments[0])) {
                    var $v_0 = arguments[0];
                    for (var $v_1 = 0; $v_1 < $v_0.length; $v_1++) {
                        var $v_2 = $v_0[$v_1];
                        this.$9_0.get_childItemQuery().select($v_2);
                    }
                }
                else {
                    for (var $v_3 = 0; $v_3 < arguments.length; $v_3++) {
                        var $v_4 = arguments[$v_3];
                        this.$9_0.get_childItemQuery().select($v_4);
                    }
                }
            }
        }
        else {
            if (!arguments.length) {
                this.$9_0.selectAllProperties();
            }
            else {
                if (arguments.length === 1 && Array.isInstanceOfType(arguments[0])) {
                    var $v_5 = arguments[0];
                    for (var $v_6 = 0; $v_6 < $v_5.length; $v_6++) {
                        var $v_7 = $v_5[$v_6];
                        this.$9_0.select($v_7);
                    }
                }
                else {
                    for (var $v_8 = 0; $v_8 < arguments.length; $v_8++) {
                        var $v_9 = arguments[$v_8];
                        this.$9_0.select($v_9);
                    }
                }
            }
        }
    },
    
    $y_0: null,
    
    retrieveObject: function(propertyName) {ULSqiZ:;
        if (!this.$y_0) {
            this.$y_0 = {};
        }
        var $v_0 = this.$y_0[propertyName];
        if (!SP.ScriptUtility.isNullOrUndefined($v_0)) {
            return $v_0;
        }
        var $v_1 = false;
        var $v_2;
        if (this.$b_0) {
            $v_2 = this.$9_0.get_childItemQuery().$i(propertyName);
        }
        else {
            $v_2 = this.$9_0.$i(propertyName);
        }
        if (!$v_2) {
            $v_2 = new SP.ClientQueryInternal(null, propertyName, true, this.$9_0);
            $v_1 = true;
        }
        $v_0 = new SP.ClientObjectPrototype($v_2, false);
        if ($v_1) {
            if (this.$b_0) {
                this.$9_0.get_childItemQuery().selectSubQuery($v_2);
            }
            else {
                this.$9_0.selectSubQuery($v_2);
            }
        }
        this.$y_0[propertyName] = $v_0;
        return $v_0;
    },
    
    $x_0: null,
    
    retrieveCollectionObject: function(propertyName) {ULSqiZ:;
        if (!this.$x_0) {
            this.$x_0 = {};
        }
        var $v_0 = this.$x_0[propertyName];
        if (!SP.ScriptUtility.isNullOrUndefined($v_0)) {
            return $v_0;
        }
        var $v_1 = false;
        var $v_2;
        if (this.$b_0) {
            $v_2 = this.$9_0.get_childItemQuery().$i(propertyName);
        }
        else {
            $v_2 = this.$9_0.$i(propertyName);
        }
        if (!$v_2) {
            $v_2 = new SP.ClientQueryInternal(null, propertyName, true, this.$9_0);
            $v_1 = true;
        }
        $v_0 = new SP.ClientObjectCollectionPrototype($v_2, false);
        if ($v_1) {
            if (this.$b_0) {
                this.$9_0.get_childItemQuery().selectSubQuery($v_2);
            }
            else {
                this.$9_0.selectSubQuery($v_2);
            }
        }
        this.$x_0[propertyName] = $v_0;
        return $v_0;
    }
}


SP.ClientObjectCollectionPrototype = function(query, childItem) {ULSqiZ:;
    SP.ClientObjectCollectionPrototype.initializeBase(this, [ query, childItem ]);
}
SP.ClientObjectCollectionPrototype.prototype = {
    $1E_1: null,
    
    retrieveItems: function() {ULSqiZ:;
        if (!this.$1E_1) {
            this.$1E_1 = new SP.ClientObjectPrototype(this.$9_0, true);
        }
        return this.$1E_1;
    }
}


SP.ClientQueryProperty = function() {
}
SP.ClientQueryProperty.prototype = {
    scalarProperty: false,
    scalarPropertySet: false,
    selectAll: false,
    selectAllSet: false,
    query: null
}


SP.ClientQueryInternal = function(obj, name, subQuery, parentQuery) {ULSqiZ:;
    this.$G_1 = {};
    this.$2E_1 = [];
    SP.ClientQueryInternal.initializeBase(this, [ (subQuery) ? null : obj.get_path(), name ]);
    if (!subQuery && (!obj.get_path() || !obj.get_path().$V_0)) {
        throw Error.create(SP.Res.noObjectPathAssociatedWithObject);
    }
    if (subQuery) {
        if (!parentQuery) {
            throw Error.argumentNull('parentQuery');
        }
        this.$1I_1 = parentQuery.$1I_1;
        this.$0_1 = parentQuery.$0_1;
    }
    else {
        if (!obj) {
            throw Error.argumentNull('obj');
        }
        this.$1I_1 = this;
        this.$0_1 = obj.$0_0;
    }
}
SP.ClientQueryInternal.prototype = {
    $1I_1: null,
    $0_1: null,
    $c_1: null,
    $o_1: false,
    
    get_isChildItemQuery: function() {ULSqiZ:;
        return this.$o_1;
    },
    
    $2I: function() {ULSqiZ:;
        this.$o_1 = true;
    },
    
    select: function($p0) {
        if (SP.ScriptUtility.isNullOrEmptyString($p0)) {
            throw Error.argument('propertyName', SP.Res.requestEmptyQueryName);
        }
        var $v_0 = this.$G_1[$p0];
        if (SP.ScriptUtility.isNullOrUndefined($v_0)) {
            $v_0 = new SP.ClientQueryProperty();
            this.$G_1[$p0] = $v_0;
        }
        else {
            if ($v_0.query) {
                throw Error.argument('propertyName');
            }
        }
        $v_0.scalarProperty = true;
        $v_0.scalarPropertySet = true;
        return this;
    },
    
    selectWithAll: function($p0) {
        if (SP.ScriptUtility.isNullOrEmptyString($p0)) {
            throw Error.argument('propertyName', SP.Res.requestEmptyQueryName);
        }
        var $v_0 = this.$G_1[$p0];
        if (SP.ScriptUtility.isNullOrUndefined($v_0)) {
            $v_0 = new SP.ClientQueryProperty();
            this.$G_1[$p0] = $v_0;
        }
        $v_0.selectAllSet = true;
        $v_0.selectAll = true;
        return this;
    },
    
    $1n_1: false,
    
    selectAllProperties: function() {ULSqiZ:;
        this.$1n_1 = true;
        return this;
    },
    
    selectSubQuery: function($p0) {
        if (SP.ScriptUtility.isNullOrEmptyString($p0.$B_0)) {
            throw Error.argument('subQuery', SP.Res.requestEmptyQueryName);
        }
        var $v_0 = this.$G_1[$p0.$B_0];
        if (SP.ScriptUtility.isNullOrUndefined($v_0)) {
            $v_0 = new SP.ClientQueryProperty();
            $v_0.query = $p0;
            this.$G_1[$p0.$B_0] = $v_0;
        }
        else {
            if ($v_0.scalarPropertySet && $v_0.scalarProperty) {
                throw Error.argument('subQuery');
            }
            if ($v_0.query && $v_0.query !== $p0) {
                throw Error.argument('subQuery');
            }
            $v_0.query = $p0;
        }
        return this;
    },
    
    $i: function($p0) {
        if (SP.ScriptUtility.isNullOrEmptyString($p0)) {
            throw Error.argumentNull('name');
        }
        var $v_0 = this.$G_1[$p0];
        if ($v_0) {
            return $v_0.query;
        }
        return null;
    },
    
    get_childItemQuery: function() {ULSqiZ:;
        if (!this.$c_1) {
            this.$c_1 = new SP.ClientQueryInternal(null, '_Child_Items_', true, this);
            this.$c_1.$2I();
        }
        return this.$c_1;
    },
    
    $20: function($p0, $p1) {
        $p0.writeStartElement('Query');
        this.$1z($p0, $p1);
        $p0.writeEndElement();
        if (this.$c_1) {
            $p0.writeStartElement('ChildItemQuery');
            this.$c_1.$1z($p0, $p1);
            $p0.writeEndElement();
        }
    },
    
    $1z: function($p0, $p1) {
        $p0.writeAttributeString('SelectAllProperties', (this.$1n_1) ? 'true' : 'false');
        $p0.writeStartElement('Properties');
        var $$dict_1_0 = this.$G_1;
        for (var $$key_1_1 in $$dict_1_0) {
            var $v_0 = { key: $$key_1_1, value: $$dict_1_0[$$key_1_1] };
            var $v_1 = $v_0.key;
            var $v_2 = this.$G_1[$v_1];
            $p0.writeStartElement('Property');
            $p0.writeAttributeString('Name', $v_1);
            if ($v_2.scalarPropertySet) {
                $p0.writeAttributeString('ScalarProperty', ($v_2.scalarProperty) ? 'true' : 'false');
            }
            if ($v_2.selectAllSet) {
                $p0.writeAttributeString('SelectAll', ($v_2.selectAll) ? 'true' : 'false');
            }
            if ($v_2.query) {
                $v_2.query.$20($p0, $p1);
            }
            $p0.writeEndElement();
        }
        $p0.writeEndElement();
        if (this.$o_1) {
        }
    },
    
    $22: function($p0, $p1) {
        $p0.writeStartElement('Query');
        $p0.writeAttributeString('Id', this.$1_0.toString());
        $p0.writeAttributeString('ObjectPathId', this.$I_0.$1_0.toString());
        $p1.addObjectPath(this.$I_0);
        this.$20($p0, $p1);
        $p0.writeEndElement();
    }
}


SP.ClientRequest = function(context) {ULSqiZ:;
    this.$1W = Function.createDelegate(this, this.$29_0);
    this.$P_0 = 0;
    this.$v_0 = [];
    this.$l_0 = {};
    if (!context) {
        throw Error.argumentNull('context');
    }
    this.$0_0 = context;
}
SP.ClientRequest.get_nextSequenceId = function() {ULSqiZ:;
    var $v_0 = SP.ClientRequest.$1R_0;
    SP.ClientRequest.$1R_0++;
    return $v_0;
}
SP.ClientRequest.$1T = function($p0) {
    if (!SP.ScriptUtility.isUndefined(window._spPageContextInfo) && !SP.ScriptUtility.isUndefined(window._spFormDigestRefreshInterval) && !SP.ScriptUtility.isUndefined(window.UpdateFormDigest)) {
        var $v_2 = window._spPageContextInfo;
        var $v_3 = $v_2.webServerRelativeUrl;
        var $v_4 = window._spFormDigestRefreshInterval;
        UpdateFormDigest($v_3, $v_4);
    }
    var $v_0 = null;
    var $v_1 = document.getElementsByName('__REQUESTDIGEST');
    if ($v_1 && $v_1.length > 0 && $v_1[0].tagName === 'INPUT') {
        var $v_5 = $v_1[0];
        $v_0 = $v_5.value;
    }
    if (!SP.ScriptUtility.isNullOrUndefined($v_0)) {
        $p0.get_headers()['X-RequestDigest'] = $v_0;
    }
}
SP.ClientRequest.$1b = function($p0, $p1) {
    var $v_0;
    if ($p0.get_aborted() || $p0.get_timedOut()) {
        $v_0 = SP.Res.requestAbortedOrTimedOut;
        return $v_0;
    }
    if ($p0.get_statusCode() !== 200) {
        $v_0 = String.format(SP.Res.requestUnexpectedResponseWithStatus, $p0.get_statusCode(), $p0.get_statusText());
        return $v_0;
    }
    if (!SP.ScriptUtility.isNullOrEmptyString($p1)) {
        var $v_2 = $p0.getResponseHeader('content-type');
        if (!$v_2 || $v_2.toLowerCase().indexOf($p1.toLowerCase()) < 0) {
            $v_0 = SP.Res.requestUnexpectedResponse;
            return $v_0;
        }
    }
    var $v_1 = $p0.getResponseHeader('SharePointError');
    if (!SP.ScriptUtility.isNullOrEmptyString($v_1)) {
        $v_0 = SP.Res.requestUnexpectedResponse;
        return $v_0;
    }
    return null;
}
SP.ClientRequest.$1r = function($p0) {
    $p0 = $p0.replace(SP.ClientRequest.$1v_0, '$1SP.DataConvert.createUtcDateTime($2)');
    $p0 = $p0.replace(SP.ClientRequest.$1t_0, '$1SP.DataConvert.createLocalDateTime($2)');
    $p0 = $p0.replace(SP.ClientRequest.$1u_0, '$1SP.DataConvert.createUnspecifiedDateTime($2)');
    $p0 = $p0.replace(SP.ClientRequest.$1w_0, '$1new SP.Guid(\"$2\")');
    $p0 = $p0.replace(SP.ClientRequest.$1s_0, '$1new SP.Base64EncodedByteArray(\"$2\")');
    return $p0;
}
SP.ClientRequest.prototype = {
    $0_0: null,
    $8_0: null,
    
    get_webRequest: function() {ULSqiZ:;
        if (!this.$8_0) {
            this.$8_0 = new Sys.Net.WebRequest();
            this.$8_0.set_httpVerb('POST');
            this.$8_0.get_headers()['Content-Type'] = 'text/xml';
            var $v_0 = this.get_$2L_0();
            $v_0 = window.escapeUrlForCallback($v_0);
            this.$8_0.set_url($v_0);
        }
        return this.$8_0;
    },
    
    $g_0: null,
    
    get_$2L_0: function() {ULSqiZ:;
        if (SP.ScriptUtility.isNullOrEmptyString(this.$g_0)) {
            this.$g_0 = this.$0_0.$1P_0;
            if (!this.$g_0.endsWith('/')) {
                this.$g_0 += '/_vti_bin/client.svc/ProcessQuery';
            }
            else {
                this.$g_0 += '_vti_bin/client.svc/ProcessQuery';
            }
        }
        return this.$g_0;
    },
    
    $C_0: null,
    
    get_$E_0: function() {ULSqiZ:;
        if (!this.$C_0) {
            this.$C_0 = new Sys.EventHandlerList();
        }
        return this.$C_0;
    },
    
    add_requestSucceeded: function(value) {ULSqiZ:;
        this.get_$E_0().addHandler('succeeded', value);
    },
    remove_requestSucceeded: function(value) {ULSqiZ:;
        this.get_$E_0().removeHandler('succeeded', value);
    },
    
    add_requestFailed: function(value) {ULSqiZ:;
        this.get_$E_0().addHandler('failed', value);
    },
    remove_requestFailed: function(value) {ULSqiZ:;
        this.get_$E_0().removeHandler('failed', value);
    },
    
    $W_0: null,
    
    $12: function($p0) {
        if (this.$P_0) {
            throw Error.create(SP.Res.requestHasBeenExecuted);
        }
        Array.add(this.$v_0, $p0);
        this.$W_0 = $p0;
    },
    
    $T_0: null,
    
    $1Y: function($p0) {
        if (!this.$T_0) {
            this.$T_0 = [];
        }
        Array.add(this.$T_0, $p0);
    },
    
    $U_0: null,
    
    $23: function($p0) {
        if (!this.$U_0) {
            this.$U_0 = [];
        }
        Array.add(this.$U_0, $p0);
    },
    
    $1B_0: null,
    
    get_$14: function() {ULSqiZ:;
        if (!this.$1B_0) {
            this.$1B_0 = [];
        }
        return this.$1B_0;
    },
    
    $13_0: function() {ULSqiZ:;
        if (this.$T_0) {
            for (var $v_0 = 0; $v_0 < this.$T_0.length; $v_0++) {
                var $v_1 = this.$T_0[$v_0];
                $v_1.$13();
            }
            this.$T_0 = null;
        }
        if (this.$U_0) {
            for (var $v_2 = 0; $v_2 < this.$U_0.length; $v_2++) {
                var $v_3 = this.$U_0[$v_2];
                $v_3.$2C();
            }
            this.$U_0 = null;
        }
    },
    
    $28: function() {ULSqiZ:;
        if (this.$P_0) {
            throw Error.create(SP.Res.requestHasBeenExecuted);
        }
        this.$P_0 = 1;
        SP.ClientRequest.$1T(this.get_webRequest());
        var $v_0 = this.$24_0();
        this.$13_0();
        this.get_webRequest().add_completed(this.$1W);
        this.get_webRequest().set_body($v_0.toString());
        this.get_webRequest().invoke();
    },
    
    $5_0: null,
    
    get_$2G: function() {ULSqiZ:;
        if (!this.$5_0) {
            this.$5_0 = new SP.SerializationContext();
        }
        return this.$5_0;
    },
    
    $24_0: function() {ULSqiZ:;
        var $v_0 = this.get_$2G();
        var $v_1 = new Sys.StringBuilder();
        var $v_2 = SP.XmlWriter.create($v_1);
        $v_2.writeStartElement('Request');
        $v_2.writeAttributeString('xmlns', 'http://schemas.microsoft.com/sharepoint/clientquery/2009');
        $v_2.writeAttributeString('SchemaVersion', SP.ClientSchemaVersions.currentVersion);
        $v_2.writeAttributeString('LibraryVersion', '14.0.4762.1000');
        if (!SP.ScriptUtility.isNullOrEmptyString(this.$0_0.get_applicationName())) {
            $v_2.writeAttributeString('ApplicationName', this.$0_0.get_applicationName());
        }
        $v_2.writeStartElement('Actions');
        var $v_3 = [];
        for (var $v_5 = 0; $v_5 < this.$v_0.length; $v_5++) {
            var $v_6 = this.$v_0[$v_5];
            if (SP.ClientActionExecutionScopeStart.isInstanceOfType($v_6)) {
                var $v_7 = $v_6;
                $v_7.$F_1.$21($v_2, $v_0);
                $v_3.push($v_7.$F_1);
            }
            else if (SP.ClientActionExecutionScopeEnd.isInstanceOfType($v_6)) {
                var $v_8 = $v_6;
                if (!$v_3.length || $v_3.pop() !== $v_8.$F_1) {
                    throw SP.ExceptionHandlingScope.$D();
                }
                $v_8.$F_1.$2N($v_2, $v_0);
            }
            else {
                $v_6.$22($v_2, $v_0);
            }
        }
        if ($v_3.length > 0) {
            throw SP.ExceptionHandlingScope.$D();
        }
        $v_2.writeEndElement();
        $v_2.writeStartElement('ObjectPaths');
        var $v_4 = {};
        do {
            var $v_9 = [];
            var $$dict_2_0 = $v_0.$t_0;
            for (var $$key_2_1 in $$dict_2_0) {
                var $v_A = { key: $$key_2_1, value: $$dict_2_0[$$key_2_1] };
                if (SP.ScriptUtility.isUndefined($v_4[$v_A.key])) {
                    Array.add($v_9, ($v_A.value).$1_0);
                }
            }
            if (!$v_9.length) {
                break;
            }
            for (var $v_B = 0; $v_B < $v_9.length; $v_B++) {
                var $v_C = this.$0_0.$r_0[$v_9[$v_B].toString()];
                $v_C.$22($v_2, $v_0);
                $v_4[$v_9[$v_B].toString()] = $v_C;
            }
        } while (true);
        $v_2.writeEndElement();
        $v_2.writeEndElement();
        return $v_1;
    },
    
    $1G_0: false,
    
    get_navigateWhenServerRedirect: function() {ULSqiZ:;
        return this.$1G_0;
    },
    set_navigateWhenServerRedirect: function(value) {ULSqiZ:;
        this.$1G_0 = value;
        return value;
    },
    
    $25_0: function($p0) {
        var $v_0 = SP.ClientRequest.$1b($p0, 'application/json');
        if ($v_0) {
            this.$10_0($v_0, null, 0, null, null, null);
            return true;
        }
        return false;
    },
    
    $10_0: function($p0, $p1, $p2, $p3, $p4, $p5) {
        var $v_0 = this.get_$E_0().getHandler('failed');
        if ($v_0) {
            $v_0(this, new SP.ClientRequestFailedEventArgs(this, $p0, $p1, $p2, $p3, $p4, $p5));
        }
        else {
            alert($p0);
        }
    },
    
    $29_0: function($p0) {
        if (this.$25_0($p0)) {
            this.$8_0 = null;
            return;
        }
        var $v_0 = $p0.get_responseData();
        var $v_1 = SP.ClientRequest._validateJson($v_0);
        if (!$v_1) {
            var $v_6 = SP.Res.requestUnexpectedResponse;
            this.$P_0 = 3;
            this.$10_0($v_6, null, 0, null, null, null);
            this.$8_0 = null;
            return;
        }
        $v_0 = SP.ClientRequest.$1r($v_0);
        var $v_2 = eval($v_0);
        if (!$v_2 || SP.ScriptUtility.isNullOrUndefined($v_2.length) || !($v_2.length >= 1) || SP.ScriptUtility.isNullOrUndefined($v_2[0]) || typeof($v_2[0]) !== 'object' || SP.ScriptUtility.isNullOrEmptyString($v_2[0].SchemaVersion) || SP.ScriptUtility.isNullOrEmptyString($v_2[0].LibraryVersion)) {
            var $v_7 = SP.Res.requestUnexpectedResponse;
            this.$P_0 = 3;
            this.$10_0($v_7, null, 0, null, null, null);
            this.$8_0 = null;
            return;
        }
        var $v_3 = $v_2[0];
        this.$0_0.$2K($v_3.SchemaVersion);
        this.$0_0.$2J($v_3.LibraryVersion);
        var $v_4 = $v_3.ErrorInfo;
        if (!SP.ScriptUtility.isNullOrUndefined($v_4)) {
            var $v_8 = $v_4.ErrorMessage;
            var $v_9 = $v_4.ErrorStackTrace;
            var $v_A = $v_4.ErrorCode;
            var $v_B = $v_4.ErrorTypeName;
            var $v_C = $v_4.ErrorValue;
            var $v_D = $v_4.ErrorDetails;
            $v_D = SP.DataConvert.fixupType(this.$0_0, $v_D);
            this.$P_0 = 3;
            this.$8_0 = null;
            if ($v_A === SP.ClientErrorCodes.redirect && !SP.ScriptUtility.isNullOrEmptyString($v_C) && this.$1G_0) {
                window.navigate($v_C);
            }
            else {
                this.$10_0($v_8, $v_9, $v_A, $v_C, $v_B, $v_D);
            }
            return;
        }
        this.$0_0.$16_0 = true;
        try {
            for (var $v_E = 1; $v_E < $v_2.length; $v_E += 2) {
                var $v_F = $v_2[$v_E];
                var $v_G = this.$l_0[$v_F.toString()];
                var $v_H = $v_2[$v_E + 1];
                if (!SP.ScriptUtility.isNullOrUndefined($v_G) && !SP.ScriptUtility.isNullOrUndefined($v_H)) {
                    if (SP.IFromJson.isInstanceOfType($v_G)) {
                        var $v_I = $v_G;
                        if (!$v_I.customFromJson($v_H)) {
                            $v_I.fromJson($v_H);
                        }
                    }
                    if (Array.isInstanceOfType($v_G)) {
                        SP.DataConvert.populateArray(this.$0_0, $v_G, $v_H);
                    }
                }
            }
        }
        finally {
            this.$0_0.$16_0 = false;
        }
        this.$P_0 = 2;
        var $v_5 = this.get_$E_0().getHandler('succeeded');
        if ($v_5) {
            $v_5(this, new SP.ClientRequestSucceededEventArgs(this));
        }
        this.$8_0 = null;
    },
    
    $1Z: function($p0, $p1) {
        if (this.$P_0) {
            throw Error.create(SP.Res.requestHasBeenExecuted);
        }
        this.$l_0[$p0.toString()] = $p1;
        if (SP.ClientObject.isInstanceOfType($p1)) {
            if (($p1).$4_0.$N_0) {
                this.$l_0[$p0.toString()] = ($p1).$4_0.$N_0;
            }
        }
    }
}


SP.ClientRequestEventArgs = function(request) {ULSqiZ:;
    SP.ClientRequestEventArgs.initializeBase(this);
    this.$8_1 = request;
}
SP.ClientRequestEventArgs.prototype = {
    $8_1: null,
    
    get_request: function() {ULSqiZ:;
        return this.$8_1;
    }
}


SP.ClientRequestFailedEventArgs = function(request, message, stackTrace, errorCode, errorValue, errorTypeName, errorDetails) {ULSqiZ:;
    SP.ClientRequestFailedEventArgs.initializeBase(this, [ request ]);
    this.$1j_2 = message;
    this.$1p_2 = stackTrace;
    this.$1f_2 = errorCode;
    this.$1i_2 = errorValue;
    this.$1h_2 = errorTypeName;
    this.$1g_2 = errorDetails;
}
SP.ClientRequestFailedEventArgs.prototype = {
    $1j_2: null,
    $1p_2: null,
    $1f_2: 0,
    $1i_2: null,
    $1h_2: null,
    $1g_2: null,
    
    get_message: function() {ULSqiZ:;
        return this.$1j_2;
    },
    
    get_stackTrace: function() {ULSqiZ:;
        return this.$1p_2;
    },
    
    get_errorCode: function() {ULSqiZ:;
        return this.$1f_2;
    },
    
    get_errorValue: function() {ULSqiZ:;
        return this.$1i_2;
    },
    
    get_errorTypeName: function() {ULSqiZ:;
        return this.$1h_2;
    },
    
    get_errorDetails: function() {ULSqiZ:;
        return this.$1g_2;
    }
}


SP.ClientRequestSucceededEventArgs = function(request) {ULSqiZ:;
    SP.ClientRequestSucceededEventArgs.initializeBase(this, [ request ]);
}


SP.ClientRuntimeContext = function(serverRelativeUrl) {ULSqiZ:;
    this.$r_0 = {};
    if (!serverRelativeUrl) {
        throw Error.argumentNull('serverRelativeUrl');
    }
    if (!serverRelativeUrl.startsWith('/')) {
        throw Error.argument('serverRelativeUrl');
    }
    this.$1P_0 = serverRelativeUrl;
}
SP.ClientRuntimeContext.prototype = {
    $1P_0: null,
    
    get_url: function() {ULSqiZ:;
        return this.$1P_0;
    },
    
    $1c_0: 'Javascript Library',
    
    get_applicationName: function() {ULSqiZ:;
        return this.$1c_0;
    },
    set_applicationName: function(value) {ULSqiZ:;
        if (SP.ScriptUtility.isNullOrEmptyString(value) || value.length > 128) {
            throw Error.argumentOutOfRange('value');
        }
        this.$1c_0 = value;
        return value;
    },
    
    $8_0: null,
    
    get_pendingRequest: function() {ULSqiZ:;
        if (!this.$8_0) {
            this.$8_0 = new SP.ClientRequest(this);
        }
        return this.$8_0;
    },
    
    get_hasPendingRequest: function() {ULSqiZ:;
        return this.$8_0 && this.$8_0.$W_0;
    },
    
    $16_0: false,
    $C_0: null,
    
    get_$E_0: function() {ULSqiZ:;
        if (!this.$C_0) {
            this.$C_0 = new Sys.EventHandlerList();
        }
        return this.$C_0;
    },
    
    add_requestSucceeded: function(value) {ULSqiZ:;
        this.get_$E_0().addHandler('succeeded', value);
    },
    remove_requestSucceeded: function(value) {ULSqiZ:;
        this.get_$E_0().removeHandler('succeeded', value);
    },
    
    add_requestFailed: function(value) {ULSqiZ:;
        this.get_$E_0().addHandler('failed', value);
    },
    remove_requestFailed: function(value) {ULSqiZ:;
        this.get_$E_0().removeHandler('failed', value);
    },
    
    add_beginningRequest: function(value) {ULSqiZ:;
        this.get_$E_0().addHandler('beginningrequest', value);
    },
    remove_beginningRequest: function(value) {ULSqiZ:;
        this.get_$E_0().removeHandler('beginningrequest', value);
    },
    
    executeQueryAsync: function(succeededCallback, failedCallback) {ULSqiZ:;
        var $v_0 = this.get_pendingRequest();
        if (this.$C_0) {
            var $v_1 = this.$C_0.getHandler('beginningrequest');
            if ($v_1) {
                $v_1(this, new SP.ClientRequestEventArgs($v_0));
            }
        }
        this.$8_0 = null;
        if (!SP.ScriptUtility.isNullOrUndefined(succeededCallback)) {
            $v_0.add_requestSucceeded(succeededCallback);
        }
        if (!SP.ScriptUtility.isNullOrUndefined(failedCallback)) {
            $v_0.add_requestFailed(failedCallback);
        }
        if (this.$C_0) {
            var $v_2 = this.$C_0.getHandler('succeeded');
            if ($v_2) {
                $v_0.add_requestSucceeded($v_2);
            }
            var $v_3 = this.$C_0.getHandler('failed');
            if ($v_3) {
                $v_0.add_requestFailed($v_3);
            }
        }
        $v_0.$28();
    },
    
    $1O_0: null,
    
    get_staticObjects: function() {ULSqiZ:;
        if (!this.$1O_0) {
            this.$1O_0 = {};
        }
        return this.$1O_0;
    },
    
    castTo: function(obj, type) {ULSqiZ:;
        if (!obj) {
            throw Error.argumentNull('obj');
        }
        var $v_0;
        if (!type.inheritsFrom(SP.ClientObject)) {
            throw Error.argument('type');
        }
        if (obj.$0_0 !== this) {
            throw Error.invalidOperation();
        }
        if (type.isInstanceOfType(obj)) {
            $v_0 = new type(this, obj.get_path());
            $v_0.$1U(obj);
            return $v_0;
        }
        if (obj.$4_0.$N_0 && type.isInstanceOfType(obj.$4_0.$N_0)) {
            $v_0 = new type(this, obj.get_path());
            $v_0.$1U(obj);
            return $v_0;
        }
        if (!type.inheritsFrom(Object.getType(obj))) {
            throw Error.argument('type');
        }
        if (obj.$4_0.$N_0 && !type.inheritsFrom(Object.getType(obj.$4_0.$N_0))) {
            throw Error.argument('type');
        }
        $v_0 = new type(this, obj.get_path());
        $v_0.$1U(obj);
        var $v_1 = null;
        if (!obj.$4_0.$N_0) {
            $v_1 = obj;
        }
        else {
            $v_1 = obj.$4_0.$N_0;
        }
        if ($v_1) {
            var $v_2 = new SP.EnumerableArray();
            var $v_3 = this.get_pendingRequest().$l_0;
            var $$dict_2_0 = $v_3;
            for (var $$key_2_1 in $$dict_2_0) {
                var $v_4 = { key: $$key_2_1, value: $$dict_2_0[$$key_2_1] };
                if ($v_4.value === obj) {
                    $v_2.add($v_4.key);
                }
            }
            var $$enum_2_0 = $v_2.getEnumerator();
            while ($$enum_2_0.moveNext()) {
                var $v_5 = $$enum_2_0.get_current();
                $v_3[$v_5] = $v_0;
            }
            obj.$4_0.$N_0 = $v_0;
        }
        return $v_0;
    },
    
    addQuery: function(query) {ULSqiZ:;
        if (!query) {
            throw Error.argumentNull('query');
        }
        this.get_pendingRequest().$12(query);
    },
    
    $1Y: function($p0) {
        this.get_pendingRequest().$1Y($p0);
    },
    
    $1X: function($p0) {
        this.$r_0[$p0.$1_0.toString()] = $p0;
    },
    
    addQueryIdAndResultObject: function(id, obj) {ULSqiZ:;
        if (!obj) {
            throw Error.argumentNull('obj');
        }
        this.get_pendingRequest().$1Z(id, obj);
    },
    
    parseObjectFromJsonString: function(json) {ULSqiZ:;
        if (SP.ScriptUtility.isNullOrEmptyString(json)) {
            return null;
        }
        var $v_0 = SP.ClientRequest._validateJson(json);
        if (!$v_0) {
            throw Error.argument('json');
        }
        json = SP.ClientRequest.$1r(json);
        var $v_1 = eval(json);
        var $v_2;
        if (Array.isInstanceOfType($v_1)) {
            var $v_3 = [];
            SP.DataConvert.populateArray(this, $v_3, $v_1);
            $v_2 = $v_3;
        }
        else {
            $v_2 = SP.DataConvert.fixupType(this, $v_1);
        }
        return $v_2;
    },
    
    load: function(clientObject) {ULSqiZ:;
        var $v_0 = null;
        if (arguments.length === 2 && Array.isInstanceOfType(arguments[1])) {
            $v_0 = (arguments[1]);
        }
        else {
            var $v_1 = [];
            for (var $v_2 = 1; $v_2 < arguments.length; $v_2++) {
                Array.add($v_1, arguments[$v_2]);
            }
            $v_0 = $v_1;
        }
        SP.DataRetrievalWithExpressionString.load(clientObject, $v_0);
    },
    
    loadQuery: function(clientObjectCollection, exp) {ULSqiZ:;
        return SP.DataRetrievalWithExpressionString.loadQuery(clientObjectCollection, exp);
    },
    
    $1M_0: null,
    
    get_serverSchemaVersion: function() {ULSqiZ:;
        if (SP.ScriptUtility.isNullOrUndefined(this.$1M_0)) {
            throw Error.create(SP.Res.propertyHasNotBeenInitialized);
        }
        return this.$1M_0;
    },
    
    $2K: function($p0) {
        this.$1M_0 = $p0;
    },
    
    $1L_0: null,
    
    get_serverLibraryVersion: function() {ULSqiZ:;
        if (SP.ScriptUtility.isNullOrUndefined(this.$1L_0)) {
            throw Error.create(SP.Res.propertyHasNotBeenInitialized);
        }
        return this.$1L_0;
    },
    
    $2J: function($p0) {
        this.$1L_0 = $p0;
    },
    
    dispose: function() {
    }
}


SP.ClientValueObject = function() {
}
SP.ClientValueObject.prototype = {
    
    fromJson: function(obj) {ULSqiZ:;
        this.initPropertiesFromJson(obj);
    },
    
    initPropertiesFromJson: function(obj) {
    },
    
    customFromJson: function(obj) {ULSqiZ:;
        return false;
    },
    
    writeToXml: function(writer, serializationContext) {
    },
    
    customWriteToXml: function(writer, serializationContext) {ULSqiZ:;
        return false;
    }
}


SP.DataRetrievalWithExpressionString = function() {
}
SP.DataRetrievalWithExpressionString.load = function($p0, $p1) {
    if (!$p1 || !$p1.length) {
        $p0.get_$h().selectAllProperties();
        if (SP.ClientObjectCollection.isInstanceOfType($p0)) {
            $p0.get_$h().get_childItemQuery().selectAllProperties();
        }
    }
    else {
        for (var $v_0 = 0; $v_0 < $p1.length; $v_0++) {
            var $v_1 = $p1[$v_0];
            SP.DataRetrievalWithExpressionString.$1Q_0($p0.get_$h(), $v_1);
        }
    }
}
SP.DataRetrievalWithExpressionString.loadQuery = function($p0, $p1) {
    var $v_0 = [];
    var $v_1 = new SP.ClientObjectCollectionResult($p0.$0_0, $v_0);
    var $v_2 = new SP.ClientQueryInternal($p0, null, false, null);
    $p0.$0_0.addQueryIdAndResultObject($v_2.$1_0, $v_1);
    $p0.$0_0.addQuery($v_2);
    if (SP.ScriptUtility.isNullOrEmptyString($p1)) {
        $v_2.get_childItemQuery().selectAllProperties();
    }
    else {
        SP.DataRetrievalWithExpressionString.$1Q_0($v_2, $p1);
    }
    return $v_0;
}
SP.DataRetrievalWithExpressionString.$1Q_0 = function($p0, $p1) {
    if (SP.ScriptUtility.isNullOrEmptyString($p1)) {
        throw Error.argumentOutOfRange('exp');
    }
    var $v_0 = $p1.length;
    $p1 = $p1.trim();
    if (!$p1.length || $v_0 !== $p1.length) {
        throw Error.argumentOutOfRange('exp');
    }
    var $v_1 = $p0;
    var $v_2 = 0;
    var $v_3;
    var $v_4 = null;
    var $v_5 = $p1.length;
    var $v_6 = false;
    for (var $v_7 = 0; $v_7 < $v_5; $v_7++) {
        var $v_8 = $p1.charAt($v_7);
        if ($v_8 === ',' || $v_8 === ')' || $v_6) {
            throw SP.DataRetrievalWithExpressionString.$J_0($p1);
        }
        if ($v_8 === '.' || $v_8 === '(') {
            $v_3 = $p1.substr($v_2, $v_7 - $v_2);
            $v_3 = $v_3.trim();
            if ($v_8 === '(') {
                if ($v_3 !== 'Include' && $v_3 !== 'IncludeWithDefaultProperties') {
                    throw SP.DataRetrievalWithExpressionString.$J_0($p1);
                }
                if ($v_1.$o_1) {
                    throw SP.DataRetrievalWithExpressionString.$J_0($p1);
                }
                var $v_9 = SP.DataRetrievalWithExpressionString.$2A_0($p1, $v_7);
                if ($v_9 < 0) {
                    throw SP.DataRetrievalWithExpressionString.$J_0($p1);
                }
                var $v_A = $p1.substr($v_7 + 1, $v_9 - $v_7 - 1);
                var $v_B = $v_1.get_childItemQuery();
                if ($v_3 === 'IncludeWithDefaultProperties') {
                    $v_B.selectAllProperties();
                }
                var $v_C = SP.DataRetrievalWithExpressionString.$2M_0($v_A);
                for (var $v_D = 0; $v_D < $v_C.length; $v_D++) {
                    var $v_E = $v_C[$v_D];
                    SP.DataRetrievalWithExpressionString.$1Q_0($v_B, $v_E);
                }
                $v_7 = $v_9;
                $v_6 = true;
            }
            else if ($v_8 === '.') {
                if ($v_6 || !$v_3.length) {
                    throw SP.DataRetrievalWithExpressionString.$J_0($p1);
                }
                var $v_F = $v_1.$i($v_3);
                if (!$v_F) {
                    $v_F = new SP.ClientQueryInternal(null, $v_3, true, $v_1);
                    $v_1.selectSubQuery($v_F);
                }
                $v_1 = $v_F;
            }
            $v_2 = $v_7 + 1;
            $v_4 = $v_3;
        }
    }
    if ($v_2 < $p1.length) {
        $v_3 = $p1.substr($v_2);
        $v_3 = $v_3.trim();
        if ($v_3.length > 0) {
            if ($v_6) {
                throw SP.DataRetrievalWithExpressionString.$J_0($p1);
            }
            $v_1.selectWithAll($v_3);
        }
    }
}
SP.DataRetrievalWithExpressionString.$2A_0 = function($p0, $p1) {
    var $v_0 = $p0.length;
    var $v_1 = 1;
    var $v_2 = -1;
    for (var $v_3 = $p1 + 1; $v_3 < $v_0; $v_3++) {
        var $v_4 = $p0.charAt($v_3);
        if ($v_4 === '(') {
            $v_1++;
        }
        else if ($v_4 === ')') {
            $v_1--;
            if (!$v_1) {
                $v_2 = $v_3;
                break;
            }
        }
    }
    return $v_2;
}
SP.DataRetrievalWithExpressionString.$2M_0 = function($p0) {
    $p0 = $p0.trim();
    var $v_0 = [];
    var $v_1 = 0;
    var $v_2 = 0;
    var $v_3;
    var $v_4 = $p0.length;
    if (!$v_4) {
        return (($v_0));
    }
    if ($p0.charAt(0) === ',' || $p0.charAt(0) === '(' || $p0.charAt($v_4 - 1) === ',') {
        throw SP.DataRetrievalWithExpressionString.$J_0($p0);
    }
    for (var $v_5 = 0; $v_5 < $v_4; $v_5++) {
        var $v_6 = $p0.charAt($v_5);
        if ($v_6 === '(') {
            $v_1++;
        }
        else if ($v_6 === ')') {
            $v_1--;
            if ($v_1 < 0) {
                throw SP.DataRetrievalWithExpressionString.$J_0($p0);
            }
        }
        else if ($v_6 === ',' && !$v_1) {
            $v_3 = $p0.substr($v_2, $v_5 - $v_2);
            $v_3 = $v_3.trim();
            if (!$v_3.length) {
                throw SP.DataRetrievalWithExpressionString.$J_0($p0);
            }
            Array.add($v_0, $v_3);
            $v_2 = $v_5 + 1;
        }
    }
    if ($v_1) {
        throw SP.DataRetrievalWithExpressionString.$J_0($p0);
    }
    if ($v_2 < $p0.length) {
        $v_3 = $p0.substr($v_2);
        $v_3 = $v_3.trim();
        if ($v_3.length > 0) {
            Array.add($v_0, $v_3);
        }
    }
    return (($v_0));
}
SP.DataRetrievalWithExpressionString.$J_0 = function($p0) {
    return Error.argument(null, String.format(SP.Res.notSupportedQueryExpressionWithExpressionDetail, $p0));
}


SP.ClientActionExecutionScopeStart = function(scope, name) {ULSqiZ:;
    SP.ClientActionExecutionScopeStart.initializeBase(this, [ null, name ]);
    this.$F_1 = scope;
}
SP.ClientActionExecutionScopeStart.prototype = {
    $F_1: null,
    
    get_scope: function() {ULSqiZ:;
        return this.$F_1;
    },
    
    $22: function($p0, $p1) {
    }
}


SP.ClientActionExecutionScopeEnd = function(scope, name) {ULSqiZ:;
    SP.ClientActionExecutionScopeEnd.initializeBase(this, [ null, name ]);
    this.$F_1 = scope;
}
SP.ClientActionExecutionScopeEnd.prototype = {
    $F_1: null,
    
    get_scope: function() {ULSqiZ:;
        return this.$F_1;
    },
    
    $22: function($p0, $p1) {
    }
}


SP.ExecutionScope = function(context, name, disposingCallback) {ULSqiZ:;
    this.$0_0 = context;
    this.$B_0 = name;
    this.$1_0 = SP.ClientRequest.get_nextSequenceId();
    this.$0_0.get_pendingRequest().get_$14().push(this);
    this.$1d_0 = new SP.ClientActionExecutionScopeStart(this, this.$B_0);
    this.$0_0.get_pendingRequest().$12(this.$1d_0);
    this.$1A_0 = disposingCallback;
}
SP.ExecutionScope.prototype = {
    $0_0: null,
    $R_0: false,
    $B_0: null,
    $1_0: 0,
    $1A_0: null,
    $1d_0: null,
    
    get_id: function() {ULSqiZ:;
        return this.$1_0;
    },
    
    get_name: function() {ULSqiZ:;
        return this.$B_0;
    },
    
    dispose: function() {ULSqiZ:;
        if (this.$R_0) {
            throw SP.ExceptionHandlingScope.$D();
        }
        if (this.$1A_0) {
            this.$1A_0();
        }
        if (this.$0_0.get_pendingRequest().get_$14().length > 0 && this.$0_0.get_pendingRequest().get_$14().pop() === this) {
            this.$0_0.get_pendingRequest().$12(new SP.ClientActionExecutionScopeEnd(this, this.$B_0));
        }
        else {
            throw SP.ExceptionHandlingScope.$D();
        }
        this.$R_0 = true;
    },
    
    $21: function($p0, $p1) {
        $p0.writeStartElement(this.$B_0);
        $p0.writeAttributeString('Id', this.$1_0.toString());
    },
    
    $2N: function($p0, $p1) {
        $p0.writeEndElement();
    }
}


SP.ExceptionHandlingScope = function(context) {ULSqiZ:;
    this.$1V = Function.createDelegate(this, this.$27_0);
    if (!context) {
        throw Error.argumentNull('context');
    }
    this.$0_0 = context;
    this.$1J_0 = SP.ClientRequest.$1a;
}
SP.ExceptionHandlingScope.$D = function() {ULSqiZ:;
    return Error.create(SP.Res.invalidUsageOfExceptionHandlingScope);
}
SP.ExceptionHandlingScope.prototype = {
    $0_0: null,
    $1l_0: false,
    $1D_0: false,
    $d_0: null,
    $1N_0: null,
    $1J_0: 0,
    $1K_0: null,
    $K_0: null,
    
    get_$2D: function() {ULSqiZ:;
        if (!this.$Q_0) {
            return true;
        }
        return false;
    },
    
    startScope: function() {ULSqiZ:;
        if (this.$K_0) {
            throw SP.ExceptionHandlingScope.$D();
        }
        this.$K_0 = new SP.ExceptionHandlingExecutionScope(this.$0_0, this, this.$1V);
        this.$0_0.get_pendingRequest().$1Z(this.$K_0.$1_0, this);
        return this.$K_0;
    },
    
    $27_0: function() {ULSqiZ:;
        if (this.$Q_0) {
            if (!this.$a_0 && !this.$j_0) {
                throw SP.ExceptionHandlingScope.$D();
            }
            var $v_0 = this.$0_0.get_pendingRequest().$W_0;
            if (!$v_0 || !(SP.ClientActionExecutionScopeEnd.isInstanceOfType($v_0))) {
                throw SP.ExceptionHandlingScope.$D();
            }
            var $v_1 = $v_0;
            if ($v_1.$F_1.$B_0 !== 'CatchScope' && $v_1.$F_1.$B_0 !== 'FinallyScope') {
                throw SP.ExceptionHandlingScope.$D();
            }
        }
    },
    
    $Q_0: null,
    
    startTry: function() {ULSqiZ:;
        if (!this.$K_0 || this.$K_0.$R_0 || this.$Q_0) {
            throw SP.ExceptionHandlingScope.$D();
        }
        var $v_0 = this.$0_0.get_pendingRequest().$W_0;
        if (!$v_0 || !(SP.ClientActionExecutionScopeStart.isInstanceOfType($v_0))) {
            throw SP.ExceptionHandlingScope.$D();
        }
        if (($v_0).$F_1.$B_0 !== 'ExceptionHandlingScope') {
            throw SP.ExceptionHandlingScope.$D();
        }
        this.$Q_0 = new SP.ExecutionScope(this.$0_0, 'TryScope', null);
        return this.$Q_0;
    },
    
    $a_0: null,
    
    startCatch: function() {ULSqiZ:;
        if (!this.$K_0 || this.$K_0.$R_0 || !this.$Q_0 || !this.$Q_0.$R_0 || this.$a_0 || this.$j_0) {
            throw SP.ExceptionHandlingScope.$D();
        }
        var $v_0 = this.$0_0.get_pendingRequest().$W_0;
        if (!$v_0 || !(SP.ClientActionExecutionScopeEnd.isInstanceOfType($v_0))) {
            throw SP.ExceptionHandlingScope.$D();
        }
        if (($v_0).$F_1.$B_0 !== 'TryScope') {
            throw SP.ExceptionHandlingScope.$D();
        }
        this.$a_0 = new SP.ExecutionScope(this.$0_0, 'CatchScope', null);
        return this.$a_0;
    },
    
    $j_0: null,
    
    startFinally: function() {ULSqiZ:;
        if (!this.$K_0 || this.$K_0.$R_0 || !this.$Q_0 || !this.$Q_0.$R_0 || (this.$a_0 && !this.$a_0.$R_0) || this.$j_0) {
            throw SP.ExceptionHandlingScope.$D();
        }
        var $v_0 = this.$0_0.get_pendingRequest().$W_0;
        if (!$v_0 || !(SP.ClientActionExecutionScopeEnd.isInstanceOfType($v_0))) {
            throw SP.ExceptionHandlingScope.$D();
        }
        if (($v_0).$F_1.$B_0 !== 'TryScope' && ($v_0).$F_1.$B_0 !== 'CatchScope') {
            throw SP.ExceptionHandlingScope.$D();
        }
        this.$j_0 = new SP.ExecutionScope(this.$0_0, 'FinallyScope', null);
        return this.$j_0;
    },
    
    get_processed: function() {ULSqiZ:;
        return this.$1l_0;
    },
    
    get_hasException: function() {ULSqiZ:;
        return this.$1D_0;
    },
    
    get_errorMessage: function() {ULSqiZ:;
        return this.$d_0;
    },
    
    get_serverStackTrace: function() {ULSqiZ:;
        return this.$1N_0;
    },
    
    get_serverErrorCode: function() {ULSqiZ:;
        return this.$1J_0;
    },
    
    get_serverErrorValue: function() {ULSqiZ:;
        return this.$1K_0;
    },
    
    fromJson: function(initValue) {ULSqiZ:;
        var $v_0 = initValue;
        if (SP.ScriptUtility.isNullOrUndefined($v_0)) {
            throw Error.create(SP.Res.unknownResponseData);
        }
        var $v_1;
        $v_1 = $v_0.HasException;
        if (SP.ScriptUtility.isUndefined($v_1)) {
            throw Error.create(SP.Res.unknownResponseData);
        }
        this.$1D_0 = $v_1;
        if (this.$1D_0) {
            var $v_2 = $v_0.ErrorInfo;
            if (SP.ScriptUtility.isNullOrUndefined($v_2)) {
                throw Error.create(SP.Res.unknownResponseData);
            }
            $v_1 = $v_2.ErrorMessage;
            if (!SP.ScriptUtility.isUndefined($v_1)) {
                this.$d_0 = $v_1;
            }
            else {
                this.$d_0 = SP.ScriptUtility.emptyString;
            }
            $v_1 = $v_2.ErrorStackTrace;
            if (!SP.ScriptUtility.isUndefined($v_1)) {
                this.$1N_0 = $v_1;
            }
            else {
                this.$1N_0 = SP.ScriptUtility.emptyString;
            }
            $v_1 = $v_2.ErrorCode;
            if (!SP.ScriptUtility.isUndefined($v_1)) {
                this.$1J_0 = $v_1;
            }
            $v_1 = $v_2.ErrorValue;
            if (!SP.ScriptUtility.isUndefined($v_1)) {
                this.$1K_0 = $v_1;
            }
            else {
                this.$1K_0 = SP.ScriptUtility.emptyString;
            }
        }
        this.$1l_0 = true;
    },
    
    customFromJson: function(initValue) {ULSqiZ:;
        return false;
    }
}


SP.ExceptionHandlingExecutionScope = function(context, scope, callback) {ULSqiZ:;
    SP.ExceptionHandlingExecutionScope.initializeBase(this, [ context, 'ExceptionHandlingScope', callback ]);
    this.$F_1 = scope;
}
SP.ExceptionHandlingExecutionScope.prototype = {
    $F_1: null,
    
    $21: function($p0, $p1) {
        if (this.$F_1.get_$2D()) {
            $p0.writeStartElement('ExceptionHandlingScopeSimple');
            $p0.writeAttributeString('Id', this.$1_0.toString());
        }
        else {
            SP.ExceptionHandlingExecutionScope.callBaseMethod(this, '$21', [ $p0, $p1 ]);
        }
    }
}


SP.ObjectIdentityQuery = function(objectPath) {ULSqiZ:;
    SP.ObjectIdentityQuery.initializeBase(this, [ objectPath, null ]);
}
SP.ObjectIdentityQuery.prototype = {
    
    $22: function($p0, $p1) {
        $p0.writeStartElement('ObjectIdentityQuery');
        $p0.writeAttributeString('Id', this.$1_0.toString());
        $p0.writeAttributeString('ObjectPathId', this.$I_0.$1_0.toString());
        $p1.addObjectPath(this.$I_0);
        $p0.writeEndElement();
    }
}


SP.ObjectPath = function(context, parent, addToContext) {ULSqiZ:;
    this.$0_0 = context;
    if (!parent) {
        this.$s_0 = SP.ClientRequest.$15;
    }
    else {
        this.$s_0 = parent.$1_0;
    }
    this.$1_0 = SP.ClientRequest.get_nextSequenceId();
    if (addToContext) {
        context.$1X(this);
        if (!context.$16_0) {
            var $v_0 = new SP.ClientActionInstantiateObjectPath(this);
            context.addQuery($v_0);
            var $v_1 = new SP.ClientActionInstantiateObjectPathResult(this);
            context.addQueryIdAndResultObject($v_0.$1_0, $v_1);
        }
    }
    this.$w_0 = false;
    this.$V_0 = true;
}
SP.ObjectPath.prototype = {
    $s_0: 0,
    $1_0: 0,
    $0_0: null,
    $w_0: false,
    
    get_$z: function() {ULSqiZ:;
        if (this.$s_0 === SP.ClientRequest.$15) {
            return null;
        }
        return this.$0_0.$r_0[this.$s_0.toString()];
    },
    
    $V_0: false,
    
    $2C: function() {
    },
    
    setPendingReplace: function() {ULSqiZ:;
        this.$0_0.get_pendingRequest().$23(this);
    }
}


SP.ObjectPathProperty = function(context, parent, propertyName) {ULSqiZ:;
    SP.ObjectPathProperty.initializeBase(this, [ context, parent, true ]);
    this.$u_1 = propertyName;
}
SP.ObjectPathProperty.prototype = {
    $u_1: null,
    
    $22: function($p0, $p1) {
        $p0.writeStartElement('Property');
        $p0.writeAttributeString('Id', this.$1_0.toString());
        $p0.writeAttributeString('ParentId', this.get_$z().$1_0.toString());
        $p1.addObjectPath(this.get_$z());
        $p0.writeAttributeString('Name', this.$u_1);
        $p0.writeEndElement();
    }
}


SP.ObjectPathStaticProperty = function(context, typeId, propertyName) {ULSqiZ:;
    SP.ObjectPathStaticProperty.initializeBase(this, [ context, null, true ]);
    this.$M_1 = typeId;
    this.$u_1 = propertyName;
}
SP.ObjectPathStaticProperty.prototype = {
    $u_1: null,
    $M_1: null,
    
    $22: function($p0, $p1) {
        $p0.writeStartElement('StaticProperty');
        $p0.writeAttributeString('Id', this.$1_0.toString());
        $p0.writeAttributeString('TypeId', this.$M_1);
        $p0.writeAttributeString('Name', this.$u_1);
        $p0.writeEndElement();
    }
}


SP.ObjectPathMethod = function(context, parent, methodName, parameters) {ULSqiZ:;
    SP.ObjectPathMethod.initializeBase(this, [ context, parent, true ]);
    this.$q_1 = methodName;
    this.$3_1 = parameters;
    this.$5_1 = new SP.SerializationContext();
    var $v_0;
    this.$6_1 = new Sys.StringBuilder();
    $v_0 = SP.XmlWriter.create(this.$6_1);
    this.$Z_1($v_0, this.$5_1);
    $v_0.close();
    this.$3_1 = null;
}
SP.ObjectPathMethod.prototype = {
    $q_1: null,
    $5_1: null,
    $6_1: null,
    $3_1: null,
    
    $22: function($p0, $p1) {
        $p0.writeRaw(this.$6_1.toString());
        $p1.$S(this.$5_1);
    },
    
    $Z_1: function($p0, $p1) {
        $p0.writeStartElement('Method');
        $p0.writeAttributeString('Id', this.$1_0.toString());
        $p0.writeAttributeString('ParentId', this.get_$z().$1_0.toString());
        $p1.addObjectPath(this.get_$z());
        $p0.writeAttributeString('Name', this.$q_1);
        if (this.$3_1 && this.$3_1.length > 0) {
            $p0.writeStartElement('Parameters');
            for (var $v_0 = 0; $v_0 < this.$3_1.length; $v_0++) {
                var $v_1 = this.$3_1[$v_0];
                $p0.writeStartElement('Parameter');
                SP.DataConvert.writeValueToXmlElement($p0, $v_1, $p1);
                $p0.writeEndElement();
            }
            $p0.writeEndElement();
        }
        $p0.writeEndElement();
    },
    
    $2C: function() {ULSqiZ:;
        this.$3_1 = null;
        this.$6_1 = null;
        this.$5_1 = null;
        this.$V_0 = false;
    }
}


SP.ObjectPathStaticMethod = function(context, typeId, methodName, parameters) {ULSqiZ:;
    SP.ObjectPathStaticMethod.initializeBase(this, [ context, null, true ]);
    this.$M_1 = typeId;
    this.$q_1 = methodName;
    this.$3_1 = parameters;
    this.$5_1 = new SP.SerializationContext();
    var $v_0;
    this.$6_1 = new Sys.StringBuilder();
    $v_0 = SP.XmlWriter.create(this.$6_1);
    this.$Z_1($v_0, this.$5_1);
    $v_0.close();
    this.$3_1 = null;
}
SP.ObjectPathStaticMethod.prototype = {
    $M_1: null,
    $q_1: null,
    $3_1: null,
    $5_1: null,
    $6_1: null,
    
    $22: function($p0, $p1) {
        $p0.writeRaw(this.$6_1.toString());
        $p1.$S(this.$5_1);
    },
    
    $Z_1: function($p0, $p1) {
        $p0.writeStartElement('StaticMethod');
        $p0.writeAttributeString('Id', this.$1_0.toString());
        $p0.writeAttributeString('Name', this.$q_1);
        $p0.writeAttributeString('TypeId', this.$M_1);
        if (this.$3_1 && this.$3_1.length > 0) {
            $p0.writeStartElement('Parameters');
            for (var $v_0 = 0; $v_0 < this.$3_1.length; $v_0++) {
                var $v_1 = this.$3_1[$v_0];
                $p0.writeStartElement('Parameter');
                SP.DataConvert.writeValueToXmlElement($p0, $v_1, $p1);
                $p0.writeEndElement();
            }
            $p0.writeEndElement();
        }
        $p0.writeEndElement();
    },
    
    $2C: function() {ULSqiZ:;
        this.$3_1 = null;
        this.$6_1 = null;
        this.$5_1 = null;
        this.$V_0 = false;
    }
}


SP.ObjectPathConstructor = function(context, typeId, parameters) {ULSqiZ:;
    SP.ObjectPathConstructor.initializeBase(this, [ context, null, true ]);
    this.$M_1 = typeId;
    this.$3_1 = parameters;
    this.$5_1 = new SP.SerializationContext();
    var $v_0;
    this.$6_1 = new Sys.StringBuilder();
    $v_0 = SP.XmlWriter.create(this.$6_1);
    this.$Z_1($v_0, this.$5_1);
    $v_0.close();
    this.$3_1 = null;
}
SP.ObjectPathConstructor.prototype = {
    $M_1: null,
    $3_1: null,
    $5_1: null,
    $6_1: null,
    
    $22: function($p0, $p1) {
        $p0.writeRaw(this.$6_1.toString());
        $p1.$S(this.$5_1);
    },
    
    $Z_1: function($p0, $p1) {
        $p0.writeStartElement('Constructor');
        $p0.writeAttributeString('Id', this.$1_0.toString());
        $p0.writeAttributeString('TypeId', this.$M_1);
        if (this.$3_1 && this.$3_1.length > 0) {
            $p0.writeStartElement('Parameters');
            for (var $v_0 = 0; $v_0 < this.$3_1.length; $v_0++) {
                var $v_1 = this.$3_1[$v_0];
                $p0.writeStartElement('Parameter');
                SP.DataConvert.writeValueToXmlElement($p0, $v_1, $p1);
                $p0.writeEndElement();
            }
            $p0.writeEndElement();
        }
        $p0.writeEndElement();
    },
    
    $2C: function() {ULSqiZ:;
        this.$3_1 = null;
        this.$6_1 = null;
        this.$5_1 = null;
        this.$V_0 = false;
    }
}


SP.ObjectPathIdentity = function(context, identity) {ULSqiZ:;
    SP.ObjectPathIdentity.initializeBase(this, [ context, null, false ]);
    this.$k_1 = identity;
}
SP.ObjectPathIdentity.prototype = {
    $k_1: null,
    
    get_identity: function() {ULSqiZ:;
        return this.$k_1;
    },
    
    $22: function($p0, $p1) {
        $p0.writeStartElement('Identity');
        $p0.writeAttributeString('Id', this.$1_0.toString());
        $p0.writeAttributeString('Name', this.$k_1);
        $p0.writeEndElement();
    }
}


SP.SerializationContext = function() {ULSqiZ:;
    this.$t_0 = {};
}
SP.SerializationContext.prototype = {
    
    addClientObject: function(obj) {ULSqiZ:;
        if (obj.get_path()) {
            this.addObjectPath(obj.get_path());
        }
    },
    
    addObjectPath: function(path) {ULSqiZ:;
        this.$t_0[path.$1_0.toString()] = path;
    },
    
    $S: function($p0) {
        var $$dict_1_0 = $p0.$t_0;
        for (var $$key_1_1 in $$dict_1_0) {
            var $v_0 = { key: $$key_1_1, value: $$dict_1_0[$$key_1_1] };
            this.addObjectPath($v_0.value);
        }
    }
}


SP.OfficeVersion = function() {
}


SP.ArrayListEnumerator.registerClass('SP.ArrayListEnumerator', null, IEnumerator);
SP.BaseCollection.registerClass('SP.BaseCollection', null, IEnumerable);
SP.BaseCollectionEnumerator.registerClass('SP.BaseCollectionEnumerator', null, IEnumerator);
SP.Base64EncodedByteArray.registerClass('SP.Base64EncodedByteArray', null, SP.IFromJson);
SP.ClientDictionaryResultHandler.registerClass('SP.ClientDictionaryResultHandler', null, SP.IFromJson);
SP.ClientActionInstantiateObjectPathResult.registerClass('SP.ClientActionInstantiateObjectPathResult', null, SP.IFromJson);
SP.ClientObjectCollectionResult.registerClass('SP.ClientObjectCollectionResult', null, SP.IFromJson);
SP.DataConvert.registerClass('SP.DataConvert');
SP.PageRequestFailedEventArgs.registerClass('SP.PageRequestFailedEventArgs', Sys.EventArgs);
SP.PageRequestSucceededEventArgs.registerClass('SP.PageRequestSucceededEventArgs', Sys.EventArgs);
SP.PageRequest.registerClass('SP.PageRequest');
SP.ClientConstants.registerClass('SP.ClientConstants');
SP.ClientSchemaVersions.registerClass('SP.ClientSchemaVersions');
SP.ClientErrorCodes.registerClass('SP.ClientErrorCodes');
SP.ClientAction.registerClass('SP.ClientAction');
SP.ClientActionSetProperty.registerClass('SP.ClientActionSetProperty', SP.ClientAction);
SP.ClientActionSetStaticProperty.registerClass('SP.ClientActionSetStaticProperty', SP.ClientAction);
SP.ClientActionInvokeMethod.registerClass('SP.ClientActionInvokeMethod', SP.ClientAction);
SP.ClientActionInvokeStaticMethod.registerClass('SP.ClientActionInvokeStaticMethod', SP.ClientAction);
SP.ClientActionInstantiateObjectPath.registerClass('SP.ClientActionInstantiateObjectPath', SP.ClientAction);
SP.ClientObject.registerClass('SP.ClientObject', null, SP.IFromJson);
SP.ClientObjectData.registerClass('SP.ClientObjectData');
SP.ClientObjectCollection.registerClass('SP.ClientObjectCollection', SP.ClientObject, IEnumerable);
SP.ClientObjectPrototype.registerClass('SP.ClientObjectPrototype');
SP.ClientObjectCollectionPrototype.registerClass('SP.ClientObjectCollectionPrototype', SP.ClientObjectPrototype);
SP.ClientQueryProperty.registerClass('SP.ClientQueryProperty');
SP.ClientQueryInternal.registerClass('SP.ClientQueryInternal', SP.ClientAction);
SP.ClientRequest.registerClass('SP.ClientRequest');
SP.ClientRequestEventArgs.registerClass('SP.ClientRequestEventArgs', Sys.EventArgs);
SP.ClientRequestFailedEventArgs.registerClass('SP.ClientRequestFailedEventArgs', SP.ClientRequestEventArgs);
SP.ClientRequestSucceededEventArgs.registerClass('SP.ClientRequestSucceededEventArgs', SP.ClientRequestEventArgs);
SP.ClientRuntimeContext.registerClass('SP.ClientRuntimeContext', null, Sys.IDisposable);
SP.ClientValueObject.registerClass('SP.ClientValueObject', null, SP.IFromJson);
SP.DataRetrievalWithExpressionString.registerClass('SP.DataRetrievalWithExpressionString');
SP.ClientActionExecutionScopeStart.registerClass('SP.ClientActionExecutionScopeStart', SP.ClientAction);
SP.ClientActionExecutionScopeEnd.registerClass('SP.ClientActionExecutionScopeEnd', SP.ClientAction);
SP.ExecutionScope.registerClass('SP.ExecutionScope', null, IDisposable);
SP.ExceptionHandlingScope.registerClass('SP.ExceptionHandlingScope', null, SP.IFromJson);
SP.ExceptionHandlingExecutionScope.registerClass('SP.ExceptionHandlingExecutionScope', SP.ExecutionScope);
SP.ObjectIdentityQuery.registerClass('SP.ObjectIdentityQuery', SP.ClientAction);
SP.ObjectPath.registerClass('SP.ObjectPath');
SP.ObjectPathProperty.registerClass('SP.ObjectPathProperty', SP.ObjectPath);
SP.ObjectPathStaticProperty.registerClass('SP.ObjectPathStaticProperty', SP.ObjectPath);
SP.ObjectPathMethod.registerClass('SP.ObjectPathMethod', SP.ObjectPath);
SP.ObjectPathStaticMethod.registerClass('SP.ObjectPathStaticMethod', SP.ObjectPath);
SP.ObjectPathConstructor.registerClass('SP.ObjectPathConstructor', SP.ObjectPath);
SP.ObjectPathIdentity.registerClass('SP.ObjectPathIdentity', SP.ObjectPath);
SP.SerializationContext.registerClass('SP.SerializationContext');
SP.OfficeVersion.registerClass('SP.OfficeVersion');
SP.Base64EncodedByteArray.$m_0 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
SP.Base64EncodedByteArray.$H_0 = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '/', '=' ];
SP.DataConvert.$1S_0 = [ '', '0', '00', '000', '0000', '00000', '000000', '0000000', '00000000', '000000000' ];
SP.ClientConstants.AddExpandoFieldTypeSuffix = 'AddExpandoFieldTypeSuffix';
SP.ClientConstants.Actions = 'Actions';
SP.ClientConstants.ApplicationName = 'ApplicationName';
SP.ClientConstants.Body = 'Body';
SP.ClientConstants.CatchScope = 'CatchScope';
SP.ClientConstants.ChildItemQuery = 'ChildItemQuery';
SP.ClientConstants.ChildItems = '_Child_Items_';
SP.ClientConstants.ConditionalScope = 'ConditionalScope';
SP.ClientConstants.Constructor = 'Constructor';
SP.ClientConstants.Context = 'Context';
SP.ClientConstants.ErrorInfo = 'ErrorInfo';
SP.ClientConstants.ErrorMessage = 'ErrorMessage';
SP.ClientConstants.ErrorStackTrace = 'ErrorStackTrace';
SP.ClientConstants.ErrorCode = 'ErrorCode';
SP.ClientConstants.ErrorTypeName = 'ErrorTypeName';
SP.ClientConstants.ErrorValue = 'ErrorValue';
SP.ClientConstants.ErrorDetails = 'ErrorDetails';
SP.ClientConstants.ExceptionHandlingScope = 'ExceptionHandlingScope';
SP.ClientConstants.ExceptionHandlingScopeSimple = 'ExceptionHandlingScopeSimple';
SP.ClientConstants.QueryableExpression = 'QueryableExpression';
SP.ClientConstants.FinallyScope = 'FinallyScope';
SP.ClientConstants.HasException = 'HasException';
SP.ClientConstants.Id = 'Id';
SP.ClientConstants.Identity = 'Identity';
SP.ClientConstants.IfFalseScope = 'IfFalseScope';
SP.ClientConstants.IfTrueScope = 'IfTrueScope';
SP.ClientConstants.IsNull = 'IsNull';
SP.ClientConstants.LibraryVersion = 'LibraryVersion';
SP.ClientConstants.Count = 'Count';
SP.ClientConstants.Method = 'Method';
SP.ClientConstants.Methods = 'Methods';
SP.ClientConstants.Name = 'Name';
SP.ClientConstants.Object = 'Object';
SP.ClientConstants.ObjectPathId = 'ObjectPathId';
SP.ClientConstants.ObjectPath = 'ObjectPath';
SP.ClientConstants.ObjectPaths = 'ObjectPaths';
SP.ClientConstants.ObjectType = '_ObjectType_';
SP.ClientConstants.ObjectIdentity = '_ObjectIdentity_';
SP.ClientConstants.ObjectIdentityQuery = 'ObjectIdentityQuery';
SP.ClientConstants.ObjectVersion = '_ObjectVersion_';
SP.ClientConstants.Parameter = 'Parameter';
SP.ClientConstants.Parameters = 'Parameters';
SP.ClientConstants.ParentId = 'ParentId';
SP.ClientConstants.Processed = 'Processed';
SP.ClientConstants.Property = 'Property';
SP.ClientConstants.Properties = 'Properties';
SP.ClientConstants.Query = 'Query';
SP.ClientConstants.QueryResult = 'QueryResult';
SP.ClientConstants.Request = 'Request';
SP.ClientConstants.Results = 'Results';
SP.ClientConstants.ScalarProperty = 'ScalarProperty';
SP.ClientConstants.SchemaVersion = 'SchemaVersion';
SP.ClientConstants.ScopeId = 'ScopeId';
SP.ClientConstants.SelectAll = 'SelectAll';
SP.ClientConstants.SelectAllProperties = 'SelectAllProperties';
SP.ClientConstants.SetProperty = 'SetProperty';
SP.ClientConstants.SetStaticProperty = 'SetStaticProperty';
SP.ClientConstants.StaticMethod = 'StaticMethod';
SP.ClientConstants.StaticProperty = 'StaticProperty';
SP.ClientConstants.SuffixChar = '$   Char';
SP.ClientConstants.SuffixByte = '$   Byte';
SP.ClientConstants.SuffixInt16 = '$  Int16';
SP.ClientConstants.SuffixUInt16 = '$ UInt16';
SP.ClientConstants.SuffixInt32 = '$  Int32';
SP.ClientConstants.SuffixUInt32 = '$ UInt32';
SP.ClientConstants.SuffixInt64 = '$  Int64';
SP.ClientConstants.SuffixUInt64 = '$ UInt64';
SP.ClientConstants.SuffixSingle = '$ Single';
SP.ClientConstants.SuffixDouble = '$ Double';
SP.ClientConstants.SuffixArray = '$  Array';
SP.ClientConstants.Test = 'Test';
SP.ClientConstants.TryScope = 'TryScope';
SP.ClientConstants.Type = 'Type';
SP.ClientConstants.TypeId = 'TypeId';
SP.ClientConstants.Update = '$Update';
SP.ClientConstants.Version = 'Version';
SP.ClientConstants.XmlNamespace = 'http://schemas.microsoft.com/sharepoint/clientquery/2009';
SP.ClientConstants.FieldValuesMethodName = '$m_dict';
SP.ClientConstants.RequestTokenHeader = 'X-RequestToken';
SP.ClientConstants.FormDigestHeader = 'X-RequestDigest';
SP.ClientConstants.useWebLanguageHeader = 'X-UseWebLanguage';
SP.ClientConstants.useWebLanguageHeaderValue = 'true';
SP.ClientConstants.greaterThan = 'GT';
SP.ClientConstants.lessThan = 'LT';
SP.ClientConstants.equal = 'EQ';
SP.ClientConstants.notEqual = 'NE';
SP.ClientConstants.greaterThanOrEqual = 'GE';
SP.ClientConstants.lessThanOrEqual = 'LE';
SP.ClientConstants.andAlso = 'AND';
SP.ClientConstants.orElse = 'OR';
SP.ClientConstants.not = 'NOT';
SP.ClientConstants.expressionParameter = 'ExpressionParameter';
SP.ClientConstants.expressionProperty = 'ExpressionProperty';
SP.ClientConstants.expressionStaticProperty = 'ExpressionStaticProperty';
SP.ClientConstants.expressionMethod = 'ExpressionMethod';
SP.ClientConstants.expressionStaticMethod = 'ExpressionStaticMethod';
SP.ClientConstants.expressionConstant = 'ExpressionConstant';
SP.ClientConstants.expressionConvert = 'ExpressionConvert';
SP.ClientConstants.take = 'Take';
SP.ClientConstants.where = 'Where';
SP.ClientConstants.queryableObject = 'QueryableObject';
SP.ClientConstants.ServiceFileName = 'client.svc';
SP.ClientConstants.ServiceMethodName = 'ProcessQuery';
SP.ClientConstants.fluidApplicationInitParamUrl = 'MS.SP.url';
SP.ClientConstants.fluidApplicationInitParamViaUrl = 'MS.SP.viaUrl';
SP.ClientConstants.fluidApplicationInitParamRequestToken = 'MS.SP.requestToken';
SP.ClientConstants.fluidApplicationInitParamFormDigestTimeoutSeconds = 'MS.SP.formDigestTimeoutSeconds';
SP.ClientConstants.fluidApplicationInitParamFormDigest = 'MS.SP.formDigest';
SP.ClientSchemaVersions.version14 = '14.0.0.0';
SP.ClientSchemaVersions.currentVersion = '14.0.0.0';
SP.ClientErrorCodes.genericError = -1;
SP.ClientErrorCodes.accessDenied = -2147024891;
SP.ClientErrorCodes.docAlreadyExists = -2130575257;
SP.ClientErrorCodes.versionConflict = -2130575339;
SP.ClientErrorCodes.listItemDeleted = -2130575338;
SP.ClientErrorCodes.invalidFieldValue = -2130575155;
SP.ClientErrorCodes.notSupported = -2147024846;
SP.ClientErrorCodes.redirect = -2130575152;
SP.ClientErrorCodes.notSupportedRequestVersion = -2130575151;
SP.ClientRequest.$1R_0 = 0;
SP.ClientRequest.$15 = -1;
SP.ClientRequest.$1a = -1;
SP.ClientRequest.$1u_0 = new RegExp('(^|[^\\\\])\\\"\\\\/Date\\(([0-9]+(?:,[0-9]+){2,6})\\)\\\\/\\\"', 'g');
SP.ClientRequest.$1t_0 = new RegExp('(^|[^\\\\])\\\"\\\\/Date\\((-?[0-9]+)(?:[a-zA-Z]|(?:\\+|-)[0-9]{4})\\)\\\\/\\\"', 'g');
SP.ClientRequest.$1v_0 = new RegExp('(^|[^\\\\])\\\"\\\\/Date\\((-?[0-9]+)\\)\\\\/\\\"', 'g');
SP.ClientRequest.$1w_0 = new RegExp('(^|[^\\\\])\\\"\\\\/Guid\\(([0-9a-fA-F\\-]+)\\)\\\\/\\\"', 'g');
SP.ClientRequest.$1s_0 = new RegExp('(^|[^\\\\])\\\"\\\\/Base64Binary\\(([^\\)]*)\\)\\\\/\\\"', 'g');
SP.OfficeVersion.majorBuildVersion = 14;
SP.OfficeVersion.majorVersion = '14';
SP.OfficeVersion.previousVersion = '12';
SP.OfficeVersion.majorVersionDotZero = '14.0';
SP.OfficeVersion.previousVersionDotZero = '12.0';
SP.OfficeVersion.assemblyVersion = '14.0.0.0';
SP.OfficeVersion.fullBuildVersion = '14.0.4762.1000';
SP.OfficeVersion.fullBuildBase = '14.0.4762.0';
SP.OfficeVersion.wssMajorVersion = '4';

SP.ClientRequest._validateJson = function SP_ClientRequest$validateJson(text)
{ULSqiZ:;
	// Use the regular expression from http://www.json.org/json2.js  to validate the 
	// JSON response
	return (/^[\],:{}\s]*$/.
test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@').
replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').
replace(/(?:^|:|,)(?:\s*\[)+/g, '')));
}

////////////////////////////////////////////////////////////////////////////////
// SP.Result

SP.Result = function SP_Result() {
}
SP.Result.prototype = {
    m_value: 0,
    
    get_value: function SP_Result$get_value() {ULSqiZ:;
        return this.m_value;
    },
    
    fromJson: function SP_Result$fromJson(obj) {ULSqiZ:;
        this.m_value = obj;
    },
    customFromJson: function SP_Result$customFromJson(obj) {ULSqiZ:;
        return false;
    }    
}
SP.Result.registerClass('SP.Result', null, SP.IFromJson);
SP.BooleanResult = SP.Result;
SP.ByteResult = SP.Result;
SP.IntResult = SP.Result;
SP.DoubleResult = SP.Result;
SP.DateTimeResult = SP.Result;
SP.GuidResult = SP.Result;
SP.StringResult = SP.Result;

if( typeof(Sys) != "undefined" && Sys && Sys.Application ){
   Sys.Application.notifyScriptLoaded();
}
NotifyScriptLoadedAndExecuteWaitingJobs("sp.runtime.js");
