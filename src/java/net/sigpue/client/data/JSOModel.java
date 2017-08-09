package net.sigpue.client.data;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import com.google.gwt.core.client.JavaScriptObject;
import com.google.gwt.core.client.JsArray;
import com.google.gwt.core.client.JsArrayString;

/**
 * Java overlay of a JavaScriptObject.
 */
public abstract class JSOModel extends JavaScriptObject
{

    /**
     * JSON Wrapper to Boost performance, specially in arrays
     * More information in http://weblogs.asp.net/yuanjian/archive/2009/03/22/json-performance-comparison-of-eval-new-function-and-json.aspx
     *    Conclusions:
     *                      choose eval in IE6, 7
     *                      choose native JSON in IE8
     *                      choose new Function in Firefox2, 3
     *                      choose eval in Safari4
     *                      eval has the same performance as new Function on the whole when you use the other browsers.
     */
    //wrapper
    protected static native JavaScriptObject parse(String text)/*-{
    var Browser = function() {
    var o = {
    ie: 0,
    opera: 0,
    gecko: 0,
    webkit: 0
    };
    var ua = navigator.userAgent, m;
    if ( ( /KHTML/ ).test( ua ) ) {
    o.webkit = 1;
    }
    // Modern WebKit browsers are at least X-Grade
    m = ua.match(/AppleWebKit\/([^\s]*)/);
    if (m&&m[1]) {
    o.webkit=parseFloat(m[1]);
    }

    if (!o.webkit) { // not webkit
    // @todo check Opera/8.01 (J2ME/MIDP; Opera Mini/2.0.4509/1316; fi; U; ssr)
    m=ua.match(/Opera[\s\/]([^\s]*)/);
    if (m&&m[1]) {
    o.opera=parseFloat(m[1]);
    } else { // not opera or webkit
    m=ua.match(/MSIE\s([^;]*)/);
    if (m&&m[1]) {
    o.ie=parseFloat(m[1]);
    } else { // not opera, webkit, or ie
    m=ua.match(/Gecko\/([^\s]*)/);
    if (m) {
    o.gecko=1; // Gecko detected, look for revision
    m=ua.match(/rv:([^\s\)]*)/);
    if (m&&m[1]) {
    o.gecko=parseFloat(m[1]);
    }
    }
    }
    }
    }
    return o;
    }();
    var __json = null;
    if ( typeof JSON !== "undefined" ) {
    __json = JSON;
    }
    var browser = Browser;
    if ( __json !== null ) {
    return __json.parse( text );
    }
    if ( browser.gecko ) {
    return new Function( "return " + text )();
    }
    return eval( "(" + text + ")" );
    }-*/;

    // Overlay types always have protected, zero-arg constructors
    protected JSOModel()
    {
    }

    /**
     * Create an empty instance.
     *
     * @return new Object
     */
    public static native JSOModel create() /*-{
    return new Object();
    }-*/;

    /**
     * Convert a JSON encoded string into a JSOModel instance.
     * <p/>
     * Expects a JSON string structured like '{"foo":"bar","number":123}'
     *
     * @return a populated JSOModel object
     */
    public static JSOModel fromJson(String jsonString)
    {
        return (JSOModel) parse(jsonString);
    }

    ;

    /**
     * Convert a JSON encoded string into an array of JSOModel instance.
     * <p/>
     * Expects a JSON string structured like '[{"foo":"bar","number":123}, {...}]'
     *
     * @return a populated JsArray
     */
    public static JsArray<JSOModel> arrayFromJson(String jsonString)
    {
        return (JsArray<JSOModel>) parse(jsonString);
        //return eval('(' + jsonString + ')');
    }

    ;

    public final native boolean hasKey(String key) /*-{
    return this[key] != undefined;
    }-*/;

    public final native JsArrayString keys() /*-{
    var a = new Array();
    for (var p in this) { a.push(p); }
    return a;
    }-*/;

    @Deprecated
    public final Set<String> keySet()
    {
        JsArrayString array = keys();
        Set<String> set = new HashSet<String>();
        for (int i = 0; i < array.length(); i++)
        {
            set.add(array.get(i));
        }
        return set;
    }

    public final native String get(String key) /*-{
    return "" + this[key];
    }-*/;

    public final native String get(String key, String defaultValue) /*-{
    return this[key] ? ("" + this[key]) : defaultValue;
    }-*/;

    public final native void set(String key, String value) /*-{
    this[key] = value;
    }-*/;

    public final int getInt(String key)
    {
        return Integer.parseInt(get(key));
    }

    public final boolean getBoolean(String key)
    {
        return Boolean.parseBoolean(get(key));
    }

    public final native JSOModel getObject(String key) /*-{
    return this[key];
    }-*/;

    public final native JsArray<JSOModel> getArray(String key) /*-{
    return this[key] ? this[key] : new Array();
    }-*/;

    public final void set(String key, List<JSOModel> values)
    {
        JsArray<JSOModel> array = JavaScriptObject.createArray().cast();
        for (int i = 0; i < values.size(); i++)
        {
            array.set(i, values.get(i));
        }
        setArray(key, array);
    }

    protected final native void setArray(String key, JsArray<JSOModel> values) /*-{
    this[key] = values;
    }-*/;
}
