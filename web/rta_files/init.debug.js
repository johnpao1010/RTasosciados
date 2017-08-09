function ULSA13(){var o=new Object;o.ULSTeamName="Microsoft SharePoint Foundation";o.ULSFileName="init.js";return o;}
// _lcid="1033" _version="14.0.4762"
// _localBinding
// Version: "14.0.4762"
// Copyright (c) Microsoft Corporation.  All rights reserved.
var L_Infobar_Send_Error_Text="No se pudo enviar el informe de errores de JavaScript. Consulte los detalles del error original.";
var ULS;
if (!ULS)
	ULS=new Object()
ULS.OriginalOnError=window.onerror;
window.onerror=ULSOnError;
function ULSTrim(str)
{ULSA13:;
	str=str.replace(/^\s*/, "");
	str=str.replace(/\s*$/, "");
	return str;
}
function ULSEncodeXML(str)
{ULSA13:;
	str=String(str);
	str=str.replace(/&/g,"&amp;");
	str=str.replace(/</g,"&lt;");
	str=str.replace(/>/g,"&gt;");
	str=str.replace(/'/g,"&apos;");
	str=str.replace(/"/g,"&quot;");
	return str;
}
function ULSStripPII(url)
{ULSA13:;
	if (url.indexOf('?') !=-1)
		url=url.substring(0, url.indexOf('?'));
	if (window.location)
		url=url.replace(window.location.hostname, "[server]");
	return url;
}
function ULSGetFunction(fn, depth, topfn)
{ULSA13:;
	var sF=fn.toString();
	var sFnNm=ULSTrim(sF.substring(0, sF.indexOf("{")));
	if (sFnNm.indexOf("function")==0)
		sFnNm=ULSTrim(sFnNm.substring(8));
	var s='<function ';
	if (depth >=0)
	   s+='depth="'+depth+'" ';
	s+='signature="'+sFnNm+'">';
	if (depth==0 || sFnNm.indexOf("anonymous")==0 || sFnNm.indexOf("(")==0)
		s+='\n<![CDATA['+sF+']]>\n';
	s+='</function>';
	return s;
}
function ULSGetMetadataFromFrame(oCS)
{ULSA13:;
	var sFunctionText=oCS.toString();
	var iOpeningBrace=sFunctionText.indexOf("{");
	if (iOpeningBrace==-1)
		return false;
	sFunctionText=sFunctionText.substr(iOpeningBrace+1);
	var iFirstStatement=sFunctionText.search(/[^\s]/);
	if (iFirstStatement==-1)
		return false;
	var reMatch=sFunctionText.match(/ULS[^\s;]*:/);
	if (reMatch==null || reMatch.index !=iFirstStatement)
		return false;
	var sLabelName=reMatch[0];
	sLabelName=sLabelName.substr(0, sLabelName.length - 1);
	try
	{
		var o=eval(sLabelName+"()");
		if (typeof(o)=="undefined")
			return false;
		ULS.teamName=o.ULSTeamName;
		ULS.originalFile=o.ULSFileName;
		return true;
	}
	catch(e)
	{
		return false;
	}
}
function ULSGetCallstack(callerArg)
{ULSA13:;
	var stack="";
	try
	{
		if (callerArg)
		{
			var fFoundMetadata=false;
			var oCS=callerArg;
			var d=0;
			while (oCS && d < 20)
			{
				if (!fFoundMetadata)
					fFoundMetadata=ULSGetMetadataFromFrame(oCS);
				stack+=ULSGetFunction(oCS, d, callerArg)+'\n';
				oCS=oCS.caller;
				d++;
			}
		}
	}
	catch (e)
	{
	}
	return stack;
}
function ULSGetClientInfo()
{ULSA13:;
	var client="";
	try
	{
		var lang=navigator.browserLanguage;
		if (!lang) lang=navigator.language;
		if (!lang) lang=navigator.systemLanguage;
		var agt=navigator.userAgent.toLowerCase();
		var app=navigator.appName;
		var ver=parseFloat(navigator.appVersion);
		if (agt.indexOf("msie ") !=-1)
			ver=parseFloat(agt.substring(agt.indexOf("msie ")+5));
		if (agt.indexOf("firefox/") !=-1)
		{
			app="Firefox";
			ver=parseFloat(agt.substring(agt.indexOf("firefox/")+8));
		}
		client+='<browser name="'+ULSEncodeXML(app)+'" version="'+ULSEncodeXML(ver)+'" />\n';
		client+='<useragent>'+ULSEncodeXML(navigator.userAgent)+'</useragent>\n';
		if (lang)
			client+='<language>'+ULSEncodeXML(lang)+'</language>\n';
		if (document.referrer)
		{
			var ref=ULSStripPII(document.referrer);
			client+='<referrer>'+ULSEncodeXML(ref)+'</referrer>\n';
		}
		if (window.location)
		{
			var loc=ULSStripPII(window.location.toString());
			client+='<location>'+ULSEncodeXML(loc)+'</location>\n';
		}
		if (ULS.Correlation)
			client+='<correlation>'+ULSEncodeXML(ULS.Correlation)+'</correlation>\n';
	}
	catch (e)
	{
	}
	return client;
}
function ULSHandleWebServiceResponse()
{ULSA13:;
	if (ULS.request.readyState==4 && ULS.request.status==200) {
		ULSFinishErrorHandling();
	}
	if ((ULS.request.readyState==0 || ULS.request.readyState==4) && ULS.request.status > 200) {
		ULSFinishErrorHandling();
	}
}
function ULSFinishErrorHandling()
{ULSA13:;
	ULS.message=null;
}
function ULSGetWebServiceUrl()
{ULSA13:;
	var url="";
	var idx1=document.URL.indexOf('://');
	if (idx1 > 0)
	{
		var idx2=document.URL.indexOf('/', idx1+3);
		if (idx2 > 0)
			url=document.URL.substring(0, idx2);
		else
			url=document.URL;
	}
	if (url.charAt(url.length-1) !='/')
		url+='/';
	url+='_vti_bin/diagnostics.asmx';
	return url;
}
function ULSSendReport()
{ULSA13:;
	if (XMLHttpRequest)
		ULS.request=new XMLHttpRequest();
	else
		ULS.request=new ActiveXObject("MSXML2.XMLHTTP");
	ULS.request.onreadystatechange=ULSHandleWebServiceResponse;
	ULS.request.open("POST", ULSGetWebServiceUrl(), true);
	ULS.request.setRequestHeader("Content-Type", "text/xml; charset=utf-8");
	ULS.request.setRequestHeader("SOAPAction", ULS.WebServiceNS+"SendClientScriptErrorReport");
	ULS.request.send('<?xml version="1.0" encoding="utf-8"?>'+		'<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">'+		'<soap:Body>'+		'<SendClientScriptErrorReport xmlns="'+ULS.WebServiceNS+'">'+		'<message>'+ULSEncodeXML(ULS.message)+'</message>'+		'<file>'+ULSEncodeXML(ULS.file)+'</file>'+		'<line>'+ULS.line+'</line>'+		'<stack>'+ULSEncodeXML(ULS.callStack)+'</stack>'+		'<client>'+ULSEncodeXML(ULS.clientInfo)+'</client>'+		'<team>'+ULSEncodeXML(ULS.teamName)+'</team>'+		'<originalFile>'+ULSEncodeXML(ULS.originalFile)+'</originalFile>'+		'</SendClientScriptErrorReport>'+		'</soap:Body>'+		'</soap:Envelope>');
}
function ULSSendExceptionImpl(msg, url, line, oCaller)
{ULSA13:;
	if (ULS && ULS.enable)
	{
		ULS.enable=false;
		window.onerror=ULS.OriginalOnError;
		ULS.WebServiceNS="http://schemas.microsoft.com/sharepoint/diagnostics/";
		try
		{
			ULS.message=msg;
			if (url.indexOf('?') !=-1)
				url=url.substr(0, url.indexOf('?'));
			ULS.file=url.substr(url.lastIndexOf('/')+1);
			ULS.line=line;
			ULS.teamName="";
			ULS.originalFile="";
			ULS.callStack='<stack>\n'+ULSGetCallstack(oCaller)+'</stack>';
			ULS.clientInfo='<client>\n'+ULSGetClientInfo()+'</client>';
			ULSSendReport();
		}
		catch (e)
		{
		}
	}
	if (ULS && ULS.OriginalOnError)
		return ULS.OriginalOnError(msg, url, line)
	else
		return false;
}
function ULSOnError(msg, url, line)
{ULSA13:;
	return ULSSendExceptionImpl(msg, url, line, ULSOnError.caller);
}
function ULSSendException(ex)
{ULSA13:;
	var message=ex.message;
	if (typeof(message)=="undefined")
		message=ex;
	ULSSendExceptionImpl(message, document.location.href, 0, ULSSendException.caller);
}
function Browseris () {ULSA13:;
	var agt=navigator.userAgent.toLowerCase();
	this.osver=1.0;
	if (agt)
	{
		var stOSVer=agt.substring(agt.indexOf("windows ")+11);
		this.osver=parseFloat(stOSVer);
	}
	this.major=parseInt(navigator.appVersion);
	this.nav=((agt.indexOf('mozilla')!=-1)&&((agt.indexOf('spoofer')==-1) && (agt.indexOf('compatible')==-1)));
	this.nav6=this.nav && (this.major==5);
	this.nav6up=this.nav && (this.major >=5);
	this.nav7up=false;
	if (this.nav6up)
	{
		var navIdx=agt.indexOf("netscape/");
		if (navIdx >=0 )
			this.nav7up=parseInt(agt.substring(navIdx+9)) >=7;
	}
	this.ie=(agt.indexOf("msie")!=-1);
	this.aol=this.ie && agt.indexOf(" aol ")!=-1;
	if (this.ie)
		{
		var stIEVer=agt.substring(agt.indexOf("msie ")+5);
		this.iever=parseInt(stIEVer);
		this.verIEFull=parseFloat(stIEVer);
		}
	else
		this.iever=0;
	this.ie4up=this.ie && (this.major >=4);
	this.ie5up=this.ie && (this.iever >=5);
	this.ie55up=this.ie && (this.verIEFull >=5.5);
	this.ie6up=this.ie && (this.iever >=6);
	this.ie7down=this.ie && (this.iever <=7);
	this.ie7up=this.ie && (this.iever >=7);
	this.ie8standard=this.ie && document.documentMode && (document.documentMode==8);
	this.winnt=((agt.indexOf("winnt")!=-1)||(agt.indexOf("windows nt")!=-1));
	this.win32=((this.major >=4) && (navigator.platform=="Win32")) ||
		(agt.indexOf("win32")!=-1) || (agt.indexOf("32bit")!=-1);
	this.win64bit=(agt.indexOf("win64")!=-1);
		this.win=this.winnt || this.win32 || this.win64bit;
	this.mac=(agt.indexOf("mac")!=-1);
	this.w3c=this.nav6up;
	this.safari=(agt.indexOf("webkit")!=-1);
	this.safari125up=false;
	this.safari3up=false;
	if (this.safari && this.major >=5)
	{
		var navIdx=agt.indexOf("webkit/");
		if (navIdx >=0)
			this.safari125up=parseInt(agt.substring(navIdx+7)) >=125;
		var verIdx=agt.indexOf("version/");
		if (verIdx >=0)
	            this.safari3up=parseInt(agt.substring(verIdx+8)) >=3;
	}
	this.firefox=this.nav && (agt.indexOf("firefox") !=-1);
	this.firefox3up=false;
	this.firefox36up=false;
	if (this.firefox && this.major >=5)
	{
	    var ffVerIdx=agt.indexOf("firefox/");
	    if (ffVerIdx >=0)
	    {
		var firefoxVStr=agt.substring(ffVerIdx+8);
	        this.firefox3up=parseInt(firefoxVStr) >=3;
		this.firefox36up=parseFloat(firefoxVStr) >=3.6;
	    }
	}
}
var browseris=new Browseris();
var bis=browseris;
function byid(id) {ULSA13:; return document.getElementById(id); }
function newE(tag) {ULSA13:; return document.createElement(tag); }
function wpf() {ULSA13:; return document.forms[MSOWebPartPageFormName]; }
function startReplacement() {}
function AttachEvent(eventName, eventFunc, el)
{ULSA13:;
  if(!el) el=window;
  if(eventName=='domLoad')
  {
	eventName=el.addEventListener && browseris.nav ? 'DOMContentLoaded' : 'load';
  }
  if(typeof(eventFunc)=='string') eventFunc=new Function(eventFunc);
  if(el.addEventListener) el.addEventListener(eventName, eventFunc, false);
  else el.attachEvent('on'+eventName, eventFunc);
}
function DetachEvent(eventName, eventFunc, el)
{ULSA13:;
  if(!el) el=window;
  if(eventName=='domLoad')
  {
	eventName=el.removeEventListener && browseris.nav ? 'DOMContentLoaded' : 'load';
  }
  if(typeof(eventFunc)=='string') eventFunc=new Function(eventFunc);
  if(el.removeEventListener) el.removeEventListener(eventName, eventFunc, false);
  else el.detachEvent('on'+eventName, eventFunc);
}
function CancelEvent(e)
{ULSA13:;
  e.cancelBubble=true;
  if(e.preventDefault) e.preventDefault();
  if(e.stopPropogation) e.stopPropogation();
  e.returnValue=false;
  return false;
}
function GetEventSrcElement(e)
{ULSA13:;
	if (browseris.nav)
		return e.target;
	else
		return e.srcElement;
}
function GetEventKeyCode(e)
{ULSA13:;
	if (browseris.nav)
		return e.which;
	else
		return e.keyCode;
}
function GetInnerText(e)
{ULSA13:;
	if (browseris.safari && browseris.major < 5)
		return e.innerHTML;
	else if (browseris.nav)
		return e.textContent;
	else
		return e.innerText;
}
if( typeof(Sys) !="undefined" && Sys && Sys.Application ){
	Sys.Application.notifyScriptLoaded();
}
if(typeof(NotifyScriptLoadedAndExecuteWaitingJobs)=="function"){
	NotifyScriptLoadedAndExecuteWaitingJobs("owsbrows.js");
}
var g_cde={};
function GetCachedElement(id)
{ULSA13:;
	var ret=null;
	if (!(ret=g_cde[id]))
	{
		ret=document.getElementById(id);
		g_cde[id]=ret;
	}
	return ret;
}
var UTF8_1ST_OF_2=0xc0   ;
var UTF8_1ST_OF_3=0xe0   ;
var UTF8_1ST_OF_4=0xf0   ;
var UTF8_TRAIL=0x80   ;
var HIGH_SURROGATE_BITS=0xD800 ;
var LOW_SURROGATE_BITS=0xDC00 ;
var SURROGATE_6_BIT=0xFC00 ;
var SURROGATE_ID_BITS=0xF800 ;
var SURROGATE_OFFSET=0x10000;
function escapeProperlyCoreCore(str, bAsUrl, bForFilterQuery, bForCallback)
{ULSA13:;
	var strOut="";
	var strByte="";
	var ix=0;
	var strEscaped=" \"%<>\'&";
	if (typeof(str)=="undefined")
		return "";
	for (ix=0; ix < str.length; ix++)
	{
		var charCode=str.charCodeAt(ix);
		var curChar=str.charAt(ix);
		if(bAsUrl && (curChar=='#' || curChar=='?') )
		{
			strOut+=str.substr(ix);
			break;
		}
		if (bForFilterQuery && curChar=='&')
		{
			strOut+=curChar;
			continue;
		}
		if (charCode <=0x7f)
		{
			if (bForCallback)
			{
				strOut+=curChar;
			}
			else
			{
				if ( (charCode >=97 && charCode <=122) ||
					 (charCode >=65 && charCode <=90) ||
					 (charCode >=48 && charCode <=57) ||
					 (bAsUrl && (charCode >=32 && charCode <=95) && strEscaped.indexOf(curChar) < 0))
				{
					strOut+=curChar;
				}
				else if (charCode <=0x0f)
				{
					strOut+="%0"+charCode.toString(16).toUpperCase();
				}
				else if (charCode <=0x7f)
				{
					strOut+="%"+charCode.toString(16).toUpperCase();
				}
			}
		}
		else if (charCode <=0x07ff)
		{
			strByte=UTF8_1ST_OF_2 | (charCode >> 6);
			strOut+="%"+strByte.toString(16).toUpperCase() ;
			strByte=UTF8_TRAIL | (charCode & 0x003f);
			strOut+="%"+strByte.toString(16).toUpperCase();
		}
		else if ((charCode & SURROGATE_6_BIT) !=HIGH_SURROGATE_BITS)
		{
			strByte=UTF8_1ST_OF_3 | (charCode >> 12);
			strOut+="%"+strByte.toString(16).toUpperCase();
			strByte=UTF8_TRAIL | ((charCode & 0x0fc0) >> 6);
			strOut+="%"+strByte.toString(16).toUpperCase();
			strByte=UTF8_TRAIL | (charCode & 0x003f);
			strOut+="%"+strByte.toString(16).toUpperCase();
		}
		else if (ix < str.length - 1)
		{
			var charCode=(charCode & 0x03FF) << 10;
			ix++;
			var nextCharCode=str.charCodeAt(ix);
			charCode |=nextCharCode & 0x03FF;
			charCode+=SURROGATE_OFFSET;
			strByte=UTF8_1ST_OF_4 | (charCode >> 18);
			strOut+="%"+strByte.toString(16).toUpperCase();
			strByte=UTF8_TRAIL | ((charCode & 0x3f000) >> 12);
			strOut+="%"+strByte.toString(16).toUpperCase();
			strByte=UTF8_TRAIL | ((charCode & 0x0fc0) >> 6);
			strOut+="%"+strByte.toString(16).toUpperCase();
			strByte=UTF8_TRAIL | (charCode & 0x003f);
			strOut+="%"+strByte.toString(16).toUpperCase();
		}
	}
	return strOut;
}
function escapeProperly(str)
{ULSA13:;
	return escapeProperlyCoreCore(str, false, false, false);
}
function escapeProperlyCore(str, bAsUrl)
{ULSA13:;
	return escapeProperlyCoreCore(str, bAsUrl, false, false);
}
function escapeUrlForCallback(str)
{ULSA13:;
	var iPound=str.indexOf("#");
	var iQues=str.indexOf("?");
	if ((iPound > 0) && ((iQues==-1) || (iPound < iQues)))
	{
		var strNew=str.substr(0, iPound);
		if (iQues > 0)
		{
			strNew+=str.substr(iQues);
		}
		str=strNew;
	}
	return escapeProperlyCoreCore(str, true, false, true);
}
function PageUrlValidation(url)
{ULSA13:;
	if ((url.substr(0, 4)=="http") ||
		(url.substr(0, 1)=="/")	 ||
		(url.indexOf(":")==-1))
	{
		return url;
	}
	else
	{
		var L_InvalidPageUrl_Text="Dirección URL de la página no válida: ";
		alert(L_InvalidPageUrl_Text);
		return "";
	}
}
function SelectRibbonTab(tabId, force)
{ULSA13:;
	var ribbon=null;
	try
	{
		ribbon=SP.Ribbon.PageManager.get_instance().get_ribbon();
	}
	catch(e)
	{
	}
	if(!ribbon)
	{
		if (typeof(_ribbonStartInit)=="function")
			_ribbonStartInit(tabId, false, null);
	}
	else if (force || ribbon.get_selectedTabId()=="Ribbon.Read")
	{
		ribbon.selectTabById(tabId);
	}
}
function FV4UI()
{ULSA13:;
	return typeof(_fV4UI) !="undefined" && _fV4UI;
}
var itemTable=null;
var currentCtx=null;
var g_OfflineClient=null;
function TakeOfflineDisabled(scope, siteTemplateId, listBaseType, listTemplateType)
{ULSA13:;
	try
	{
		if(g_OfflineClient==null )
		{
			if(document.cookie.indexOf("OfflineClientInstalled")==-1)
			{
				if(IsSupportedMacBrowser())
					g_OfflineClient=CreateMacPlugin();
				else
					g_OfflineClient=new ActiveXObject("SharePoint.OfflineClient");
				document.cookie="OfflineClientInstalled=1";
			}
			else
			{
				if(GetCookie("OfflineClientInstalled")=="1")
				{
					if(IsSupportedMacBrowser())
						g_OfflineClient=CreateMacPlugin();
					else
						g_OfflineClient=new ActiveXObject("SharePoint.OfflineClient");
				}
			}
		}
		if (g_OfflineClient !=null &&
			g_OfflineClient.IsOfflineAllowed(scope, siteTemplateId, listBaseType, listTemplateType))
		{
			return false;
		}
		else
		{
			return true;
		};
	}
	catch(e)
	{
		document.cookie="OfflineClientInstalled=0";
		g_OfflineClient=null;
	}
	return true;
}
function GoToHistoryLink(elm, strVersion)
{ULSA13:;
	if (elm.href==null)
		return;
	var targetUrl=elm.href;
	var ch=elm.href.indexOf("?") >=0 ? "&" : "?";
	var srcUrl=ch+"VersionNo="+strVersion;
	var srcSourceUrl=GetSource();
	if (srcSourceUrl !=null && srcSourceUrl !="")
		srcSourceUrl="&"+"Source="+srcSourceUrl;
	var targetUrl=elm.href+srcUrl+srcSourceUrl;
	if (isPortalTemplatePage(targetUrl))
		window.top.location=STSPageUrlValidation(targetUrl);
	else
		window.location=STSPageUrlValidation(targetUrl);
}
function GetGotoLinkUrl(elm)
{ULSA13:;
	if (elm.href==null)
		return null;
	var ch=elm.href.indexOf("?") >=0 ? "&" : "?";
	var srcUrl=GetSource();
	if (srcUrl !=null && srcUrl !="")
		srcUrl=ch+"Source="+srcUrl;
	var targetUrl=elm.href+srcUrl;
	return targetUrl;
}
function GoToLink(elm)
{ULSA13:;
	var targetUrl=GetGotoLinkUrl(elm);
	if (targetUrl==null)
		return;
	if (isPortalTemplatePage(targetUrl))
		window.top.location=STSPageUrlValidation(targetUrl);
	else
		window.location=STSPageUrlValidation(targetUrl);
}
function GoToLinkOrDialogNewWindow(elm)
{ULSA13:;
	if (elm.href==null)
		return;
	if (window.location.search.match("[?&]IsDlg=1"))
		window.open(elm.href);
	else
		GoToLink(elm);
}
function GoToDiscussion(url)
{ULSA13:;
	var ch=url.indexOf("?") >=0 ? "&" : "?";
	var srcUrl=GetSource();
	if (srcUrl !=null && srcUrl !="")
		url+=ch+"TopicsView="+srcUrl;
	STSNavigate(url);
}
function GetCurrentEltStyle(element, cssStyle)
{ULSA13:;
	if (element.currentStyle)
		return element.currentStyle[cssStyle];
	else
	{
		if (window && window.getComputedStyle)
		{
			var compStyle=window.getComputedStyle(element, null);
			if (compStyle && compStyle.getPropertyValue)
			{
				return compStyle.getPropertyValue(cssStyle);
			}
		}
		else
		{
			return null;
		}
	}
}
function EEDecodeSpecialChars(str)
{ULSA13:;
	var decodedStr=str.replace(/&quot;/g, "\"");
	decodedStr=decodedStr.replace(/&gt;/g, ">");
	decodedStr=decodedStr.replace(/&lt;/g, "<");
	decodedStr=decodedStr.replace(/&#39;/g, "'");
	decodedStr=decodedStr.replace(/&amp;/g, "&");
	return decodedStr;
}
function DeferCall()
{ULSA13:;
	if (arguments.length==0)
		return null;
	var args=arguments;
	var fn=null;
	if (browseris.ie5up || browseris.nav6up)
	{
		eval("if (typeof("+args[0]+")=='function') { fn="+args[0]+"; }");
	}
	if (fn==null)
		return null;
	if (args.length==1) return fn();
	else if (args.length==2) return fn(args[1]);
	else if (args.length==3) return fn(args[1], args[2]);
	else if (args.length==4) return fn(args[1], args[2], args[3]);
	else if (args.length==5) return fn(args[1], args[2], args[3], args[4]);
	else if (args.length==6) return fn(args[1], args[2], args[3], args[4], args[5]);
	else if (args.length==7) return fn(args[1], args[2], args[3], args[4], args[5], args[6]);
	else if (args.length==8) return fn(args[1], args[2], args[3], args[4], args[5], args[6], args[7]);
	else if (args.length==9) return fn(args[1], args[2], args[3], args[4], args[5], args[6], args[7], args[8]);
	else if (args.length==10) return fn(args[1], args[2], args[3], args[4], args[5], args[6], args[7], args[8], args[9]);
	else
	{
		var L_TooManyDefers_Text="Se han pasado demasiados argumentos a DeferCall";
		alert(L_TooManyDefers_Text);
	}
	return null;
}
var L_ContainIllegalChar_Text="^1 contiene un carácter no válido \'^2\'.";
var L_ContainIllegalString_Text="^1 contiene una subcadena o caracteres no válidos.";
var LegalUrlChars=new Array
(
	false, false, false, false, false, false, false, false,     false, false, false, false, false, false, false, false,
	false, false, false, false, false, false, false, false,     false, false, false, false, false, false, false, false,
	true,  true, false, false, true, false,  false, true,      true,  true, false, true,  true,  true,  true,  true,
	true,  true,  true,  true,  true,  true,  true,  true,      true,  true, false,  true, false,  true, false, false,
	true,  true,  true,  true,  true,  true,  true,  true,      true,  true,  true,  true,  true,  true,  true,  true,
	true,  true,  true,  true,  true,  true,  true,  true,      true,  true,  true, true, false, true,  true,  true,
	true,  true,  true,  true,  true,  true,  true,  true,      true,  true,  true,  true,  true,  true,  true,  true,
	true,  true,  true,  true,  true,  true,  true,  true,      true,  true,  true,  false, false, false, false, false,
	false, false, false, false, false, false, false, false,     false, false, false, false, false, false, false, false,
	false, false, false, false, false, false, false, false,     false, false, false, false, false, false, false, false
);
function AdmBuildParam(stPattern)
{ULSA13:;
	var re;
	var i;
	for (i=1; i < AdmBuildParam.arguments.length; i++)
		{
		re=new RegExp("\\^"+i);
		stPattern=stPattern.replace(re, AdmBuildParam.arguments[i]);
		}
	return stPattern;
}
function IndexOfIllegalCharInUrlLeafName(strLeafName)
{ULSA13:;
	for(var i=0; i<strLeafName.length; i++)
	{
		var ch=strLeafName.charCodeAt(i);
		if(strLeafName.charAt(i)=='.' && (i==0 || i==(strLeafName.length-1)))
			return i;
		if(ch < 160 && ( strLeafName.charAt(i)=='/' || !LegalUrlChars[ch]) )
			return i;
	}
	return -1;
}
function IndexOfIllegalCharInUrlPath(strPath)
{ULSA13:;
	for(var i=0; i<strPath.length; i++)
	{
		var ch=strPath.charCodeAt(i);
		if( ch < 160 && !LegalUrlChars[ch])
			return i;
	}
	return -1;
}
function UrlContainsIllegalStrings(strPath)
{ULSA13:;
	if(strPath.indexOf("..") >=0
		|| strPath.indexOf("//") >=0
		|| strPath.indexOf("./") >=0
		|| strPath.indexOf("/.") >=0
		|| strPath.indexOf(".")==0
		|| strPath.lastIndexOf(".")==(strPath.length-1)
		)
	{
		return true;
	}
	return false;
}
function UrlLeafNameValidate(source, args)
{ULSA13:;
	var strMessagePrefix="";
	if( typeof(source.MessagePrefix)=="string" )
	{
		strMessagePrefix=source.MessagePrefix;
	}
	else
	{
		strMessagePrefix=source.id;
	}
	var i=IndexOfIllegalCharInUrlLeafName(args.Value);
	if( i >=0 )
	{
		if(typeof(source.errormessage)=="string")
		{
			source.errormessage=AdmBuildParam(L_ContainIllegalChar_Text, strMessagePrefix, args.Value.charAt(i));
		}
		args.IsValid=false;
	}
	else if( UrlContainsIllegalStrings(args.Value) )
	{
		if(typeof(source.errormessage)=="string" )
		{
			source.errormessage=AdmBuildParam(L_ContainIllegalString_Text, strMessagePrefix);
		}
		args.IsValid=false;
	}
	else
	{
		args.IsValid=true;
	}
}
function UrlPathValidate(source, args)
{ULSA13:;
	var strMessagePrefix="";
	if( typeof(source.MessagePrefix)=="string" )
	{
		strMessagePrefix=source.MessagePrefix;
	}
	else
	{
		strMessagePrefix=source.id;
	}
	var i=IndexOfIllegalCharInUrlPath(args.Value);
	if( i >=0)
	{
		if(typeof(source.errormessage)=="string")
		{
			source.errormessage=AdmBuildParam(L_ContainIllegalChar_Text, strMessagePrefix, args.Value.charAt(i));
		}
		args.IsValid=false;
	}
	else if( UrlContainsIllegalStrings(args.Value) )
	{
		if(typeof(source.errormessage)=="string" )
		{
			source.errormessage=AdmBuildParam(L_ContainIllegalString_Text, strMessagePrefix);
		}
		args.IsValid=false;
	}
	else
	{
		args.IsValid=true;
	}
}
function IsCheckBoxListSelected(checkboxlist)
{ULSA13:;
	if(checkboxlist==null )
		return false;
	var len=checkboxlist.length ;
	if (len==null)
	{
		return checkboxlist.checked;
	}
	else
	{
		for (var i=0; i < len ; i++)
		{
			if (checkboxlist[i].checked)
			{
				return true;
			}
		}
	}
	return false;
}
function STSValidatorEnable(val, bEnable, bSilent)
{ULSA13:;
	var objVal=document.getElementById(val);
	if (objVal==null)
		return;
	if (bSilent==true || (objVal.getAttribute("AlwaysEnableSilent")==true))
	{
		objVal.enabled=(bEnable==true);
	}
	else
	{
		ValidatorEnable(objVal, bEnable);
	}
}
if( typeof(Sys) !="undefined" && Sys && Sys.Application ){
	Sys.Application.notifyScriptLoaded();
}
if(typeof(NotifyScriptLoadedAndExecuteWaitingJobs)=="function"){
	NotifyScriptLoadedAndExecuteWaitingJobs("commonvalidation.js");
}
function encodeScriptQuote(str)
{ULSA13:;
	var strIn=new String(str);
	var strOut=new Array();
	var ix=0;
	var max=strIn.length;
	for (ix=0; ix < max; ix++)
	{
		var ch=strIn.charAt(ix);
		strOut.push(ch=='\'' ? "%27" : ch);
	}
	return strOut.join('');
}
function STSHtmlEncode(str)
{ULSA13:;
	if(null==str || typeof(str)=='undefined')
		return "";
	var strIn=new String(str);
	var strOut=new Array();
	var ix=0;
	var max=strIn.length;
	for (ix=0; ix < max; ix++)
	{
		var ch=strIn.charAt(ix);
		switch (ch)
		{
			case '<':
				strOut.push("&lt;");
				break;
			case '>':
				strOut.push("&gt;");
				break;
			case '&':
				strOut.push("&amp;");
				break;
			case '\"':
				strOut.push("&quot;");
				break;
			case '\'':
				strOut.push("&#39;");
				break;
			default:
				strOut.push(ch);
				break;
		}
   }
   return strOut.join('');
}
function StAttrQuote(st)
{ULSA13:;
	st=st.toString();
	st=st.replace(/&/g, '&amp;');
	st=st.replace(/\"/g, '&quot;'); // "
	st=st.replace(/\r/g, '&#13;');
	return '"'+st+'"';
}
function STSScriptEncode(str)
{ULSA13:;
	if(null==str || typeof(str)=='undefined')
		return "";
	var strIn=new String(str);
	var strOut=new Array();
	var ix=0;
	var max=strIn.length;
	for (ix=0; ix < max; ix++)
	{
		var charCode=strIn.charCodeAt(ix);
		if (charCode > 0x0fff)
		{
			strOut.push("\\u"+charCode.toString(16).toUpperCase());
		}
		else if (charCode > 0x00ff)
		{
			strOut.push("\\u0"+charCode.toString(16).toUpperCase());
		}
		else if (charCode > 0x007f)
		{
			strOut.push("\\u00"+charCode.toString(16).toUpperCase());
		}
		else
		{
			var c=strIn.charAt(ix);
			switch (c)
			{
			case '\n':
				strOut.push("\\n");
				break;
			case '\r':
				strOut.push("\\r");
				break;
			case '\"':
				strOut.push("\\u0022");
				break;
			case '%':
				strOut.push("\\u0025");
				break;
			case '&':
				strOut.push("\\u0026");
				break;
			case '\'':
				strOut.push("\\u0027");
				break;
			case '(':
				strOut.push("\\u0028");
				break;
			case ')':
				strOut.push("\\u0029");
				break;
			case '+':
				strOut.push("\\u002b");
				break;
			case '/':
				strOut.push("\\u002f");
				break;
			case '<':
				strOut.push("\\u003c");
				break;
			case '>':
				strOut.push("\\u003e");
				break;
			case '\\':
				strOut.push("\\\\");
				break;
			default:
				strOut.push(c);
			};
		}
	}
	return strOut.join('');
}
function STSScriptEncodeWithQuote(str)
{ULSA13:;
	return '"'+STSScriptEncode(str)+'"';
}
var L_Language_Text="3082";
var L_ClickOnce1_text="Ya está intentando guardar este elemento. Si lo intenta de nuevo, puede crear información duplicada. ¿Desea volver a guardar este elemento?";
var L_STSRecycleConfirm_Text="¿Está seguro de que desea enviar los elementos a la Papelera de reciclaje del sitio?";
var L_STSRecycleConfirm1_Text="¿Confirma que desea enviar esta carpeta y todo su contenido a la Papelera de reciclaje del sitio?";
var L_STSRecycleConfirm2_Text="¿Está seguro de que desea enviar esta colección de documentos y todo su contenido a la Papelera de reciclaje del sitio?";
var L_STSDelConfirm_Text="¿Está seguro de que desea eliminar permanentemente los elementos?";
var L_STSDelConfirm1_Text="¿Está seguro de desea eliminar permanentemente esta carpeta y todo su contenido?";
var L_STSDelConfirm2_Text="¿Está seguro de que desea eliminar permanentemente esta colección de documentos y todo su contenido?";
var L_NewDocLibTb1_Text="No se pudo crear el documento. \nEs posible que la aplicación necesaria no esté instalada correctamente o que no se pueda abrir la plantilla de este biblioteca de documentos.\n\nIntente lo siguiente:\n1. Compruebe el nombre de la plantilla establecido en la Configuración general de esta biblioteca de documentos. Si la aplicación estaba configurada para instalarse la primera vez que se usara, ejecute la aplicación y vuelva a intentar crear un nuevo documento.\n\n2. Si tiene permiso para modificar esta biblioteca de documentos, vaya a su Configuración general y configure la nueva plantilla.";
var L_NewDocLibTb2_Text="'Nuevo documento' requiere una aplicación compatible con Microsoft SharePoint Foundation y un explorador web. Para agregar un documento a esta biblioteca de documentos, haga clic en el botón 'Cargar documento'.";
var L_CheckoutConfirm="Va a desproteger los archivos seleccionados.";
var L_DiscardCheckoutConfirm="Va a descartar los cambios realizados en los archivos desprotegidos seleccionados.";
var L_NewFormLibTb1_Text="No se pudo crear el documento.\nPuede que la aplicación requerida no esté instalada correctamente o que no pueda abrirse la plantilla de esta biblioteca de documentos.\n\nPruebe lo siguiente:\n1. Compruebe la Configuración general del nombre de la plantilla para esta biblioteca de documentos e instale la aplicación necesaria para abrir dicha plantilla. Si la aplicación se configuró para permitir la instalación la primera vez que se utiliza, ejecútela e intente crear un nuevo documento.\n\n2.  Si tiene permiso para modificar esta biblioteca de documentos, vaya a la Configuración general de la biblioteca y configure una nueva plantilla.";
var L_NewFormLibTb2_Text="Esta característica requiere Microsoft Internet Explorer 7.0 o posterior y un editor XML compatible con Microsoft SharePoint Foundation, como Microsoft InfoPath.";
var L_ConfirmCheckout_Text="Debe desproteger este elemento antes de hacer cambios. ¿Desea desproteger este elemento ahora?";
var L_MustCheckout_Text="Debe desproteger este elemento antes de realizar cambios.";
var L_CheckOutRetry_Text="Error de desprotección. ¿Desea volver a intentar desprotegerlo desde el servidor?";
var L_CannotEditPropertyForLocalCopy_Text="No puede editar las propiedades de un documento si está desprotegido o se está modificando sin conexión.";
var L_CannotEditPropertyCheckout_Text="No puede editar las propiedades de este documento mientras esté desprotegido o bloqueado por otro usuario.";
var L_NewFormClickOnce1_Text="Nueva carpeta";
var L_EnterValidCopyDest_Text="Escriba una dirección URL de carpeta válida y un nombre de archivo. La dirección URL de la carpeta debe comenzar por \\'http:\\' o \\'https:\\'.";
var L_ConfirmUnlinkCopy_Text="Como este elemento es una copia, aún puede estar recibiendo actualizaciones desde su origen. Debe asegurarse de eliminar este elemento de la lista de elementos de origen para actualizar. De lo contrario, este elemento puede seguir recibiendo actualizaciones. ¿Confirma que desea quitar el vínculo de este elemento?";
var L_CopyingOfflineVersionWarning_Text="Tiene este documento desprotegido localmente. Sólo pueden copiarse las versiones almacenadas en el servidor. Para copiar la versión secundaria más reciente, haga clic en Aceptar. Para copiar la versión actualmente desprotegida, haga clic en Cancelar, proteja el documento y vuelva a intentar la operación de copia.";
var L_Loading_Text="Cargando...";
var L_Loading_Error_Text="Error al recuperar los datos. Actualice la página y vuelva a intentarlo.";
var L_Inplview_PageNotYetSaved="la página todavía no se guardó";
var L_WarnkOnce_text="Este elemento contiene un patrón de frecuencia. Si guarda los cambios no podrá volver al patrón anterior.";
var L_WebFoldersRequired_Text="Espere a que se cargue la vista del explorador. Si la vista del explorador no aparece, puede que el explorador no lo admita.";
var L_WebFoldersError_Text="Su cliente no admite la apertura de esta lista con el Explorador de Windows.";
var L_NoExplorerView_Text="Para ver sus documentos, navegue hasta la biblioteca y seleccione la acción \\'Abrir con el Explorador\\'. Si esta acción no está disponible, su sistema no la admite.";
var L_WikiWebPartNoClosedOrUploaded="No se admiten elementos web cerrados ni elementos web cargados.";
var L_AccessibleMenu_Text="Menú";
var L_SubMenu_Text="Submenú";
var L_NewBlogPost_Text="Esta característica requiere Microsoft Internet Explorer 7.0 o posterior y un editor de blogs compatible con Microsoft SharePoint Foundation, como Microsoft Word 2007 o posterior.";
var L_NewBlogPostFailed_Text="No se pudo conectar el programa de blog porque está ocupado o falta. Compruebe el programa y vuelva a intentarlo.";
var recycleBinEnabled=0;
var cascadeDeleteWarningMessage="";
var bIsFileDialogView=false;
var g_ViewIdToViewCounterMap=new Array();
var g_ctxDict=new Array();
function NotifyBrowserOfAsyncUpdate(container)
{ULSA13:;
  var iframeName='__spAjaxIframe', iframe=document.getElementById(iframeName);
  if(iframe==null)
  {
	iframe=document.createElement('IFRAME');
	iframe.name=iframe.id=iframeName;
	iframe.width=iframe.height=0;
	iframe.src='about:blank';
	iframe.style.display='none';
	document.body.appendChild(iframe);
  }
  iframe.contentWindow.document.location.replace('/_layouts/images/blank.gif');
}
function UpdateAccessibilityUI()
{ULSA13:;
	var t1=document.getElementById("TurnOnAccessibility");
	var t2=document.getElementById("TurnOffAccessibility");
	if (IsAccessibilityFeatureEnabled())
	{
		if (t1 !=null)
			t1.style.display="none";
		if (t2 !=null)
	    t2.style.display="";	
	}
	else
	{
		if (t1 !=null)
	    t1.style.display="";
		if (t2 !=null)
			t2.style.display="none";
	}
}
function SetIsAccessibilityFeatureEnabled(f)
{ULSA13:;
	if (f)
		document.cookie="WSS_AccessibilityFeature=true;path=/;";
	else
		document.cookie="WSS_AccessibilityFeature=false;path=/;";
	var hiddenAnchor=document.getElementById("HiddenAnchor");
	var event;
	if (browseris.ie)
		event={ "srcElement" : hiddenAnchor , "fakeEvent" : 1, "enableStatus" : f};
	else
		event={ "target" : hiddenAnchor , "fakeEvent" : 1, "enableStatus" : f};
	if (hiddenAnchor==null || hiddenAnchor.onclick==null)
		return;
	hiddenAnchor.onclick(event);	
}
function DeleteCookie(sName)
{ULSA13:;
	document.cookie=sName+"=; expires=Thu, 01-Jan-70 00:00:01 GMT";
}
function GetCookie(sName)
{ULSA13:;
	var aCookie=document.cookie.split("; ");
	for (var i=0; i < aCookie.length; i++)
	{
		var aCrumb=aCookie[i].split("=");
		if (sName==aCrumb[0]) {
			if(aCrumb.length > 1)
				return unescapeProperly(aCrumb[1]);
			else
				return null;
		}
	}
	return null;
}
function IsAccessibilityFeatureEnabled()
{ULSA13:;
	return GetCookie("WSS_AccessibilityFeature")=="true";
}
function escapeForSync(str)
{ULSA13:;
	var strOut="";
	var ix=0;
	var bDoingUnicode=0;
	var strSyncEscaped="\\&|[]";
	for (ix=0; ix < str.length; ix++)
	{
		var charCode=str.charCodeAt(ix);
		var curChar=str.charAt(ix);
		if (bDoingUnicode && charCode <=0x7f) {
			strOut+="]";
			bDoingUnicode=0;
		}
		if (!bDoingUnicode && charCode > 0x7f) {
			strOut+="[";
			bDoingUnicode=1;
		}
		if(strSyncEscaped.indexOf(curChar) >=0)
			strOut+="|";
		if ( (charCode >=97 && charCode <=122) ||
			 (charCode >=65 && charCode <=90) ||
			 (charCode >=48 && charCode <=57) )
		{
			strOut+=curChar;
		}
		else if (charCode <=0x0f)
		{
			strOut+="%0"+charCode.toString(16).toUpperCase();
		}
		else if (charCode <=0x7f)
		{
			strOut+="%"+charCode.toString(16).toUpperCase();
		}
		else if (charCode <=0x00ff)
		{
			strOut+="00"+charCode.toString(16).toUpperCase();
		}
		else if (charCode <=0x0fff)
		{
			strOut+="0"+charCode.toString(16).toUpperCase();
		}
		else {
			strOut+=charCode.toString(16).toUpperCase();
		}
	}
	if (bDoingUnicode)
		strOut+="]";
	return strOut;
}
var g_rgdwchMinEncoded=new Array([
	0x00000000,
	0x00000080,
	0x00000800,
	0x00010000,
	0x00200000,
	0x04000000,
	0x80000000
	]);
function Vutf8ToUnicode(rgBytes)
{ULSA13:;
	var ix=0;
	var strResult="";
	var dwch, wch, uch;
	var nTrailBytes, nTrailBytesOrig;
	while (ix < rgBytes.length)
	{
		if (rgBytes[ix] <=0x007f)
		{
			strResult+=String.fromCharCode(rgBytes[ix++]);
		}
		else
		{
			uch=rgBytes[ix++];
			nTrailBytes=((uch) & 0x20) ? (((uch) & 0x10) ? 3 : 2) : 1;
			nTrailBytesOrig=nTrailBytes;
			dwch=uch & (0xff >>> (2+nTrailBytes));
			while (nTrailBytes && (ix < rgBytes.length))
			{
				--nTrailBytes;
				uch=rgBytes[ix++];
				if (uch==0)
				{
					return strResult;
				}
				if ((uch & 0xC0) !=0x80)
				{
					strResult+='?';
					break;
				}
				dwch=(dwch << 6) | ((uch) & 0x003f);
			}
			if (nTrailBytes)
			{
				strResult+='?';
				break;
			}
			if (dwch < g_rgdwchMinEncoded[nTrailBytesOrig])
			{
				strResult+='?';
				break;
			}
			else if (dwch <=0xffff)
			{
				strResult+=String.fromCharCode(dwch);
			}
			else if (dwch <=0x10ffff)
			{
				dwch -=SURROGATE_OFFSET;
				strResult+=String.fromCharCode(
					HIGH_SURROGATE_BITS | dwch >>> 10);
				strResult+=String.fromCharCode(
					LOW_SURROGATE_BITS | ((dwch) & 0x003FF));
			}
			else
			{
				strResult+='?';
			}
		}
	}
	return strResult;
}
function unescapeProperlyInternal(str)
{ULSA13:;
	if (str==null)
		return "null";
	var ix=0, ixEntity=0;
	var strResult="";
	var rgUTF8Bytes=new Array;
	var ixUTF8Bytes=0;
	var hexString, hexCode;
	while (ix < str.length)
	{
		if (str.charAt(ix)=='%')
		{
			if (str.charAt(++ix)=='u')
			{
				hexString="";
				for (ixEntity=0; ixEntity < 4 && ix < str.length;++ixEntity)
				{
					hexString+=str.charAt(++ix);
				}
				while (hexString.length < 4)
				{
					hexString+='0';
				}
				hexCode=parseInt(hexString, 16);
				if (isNaN(hexCode))
				{
					strResult+='?';
				}
				else
				{
					strResult+=String.fromCharCode(hexCode);
				}
			}
			else
			{
				hexString="";
				for (ixEntity=0; ixEntity < 2 && ix < str.length;++ixEntity)
				{
					hexString+=str.charAt(ix++);
				}
				while (hexString.length < 2)
				{
					hexString+='0';
				}
				hexCode=parseInt(hexString, 16);
				if (isNaN(hexCode))
				{
					if (ixUTF8Bytes)
					{
						strResult+=Vutf8ToUnicode(rgUTF8Bytes);
						ixUTF8Bytes=0;
						rgUTF8Bytes.length=ixUTF8Bytes;
					}
					strResult+='?';
				}
				else
				{
					rgUTF8Bytes[ixUTF8Bytes++]=hexCode;
				}
			}
		}
		else
		{
			if (ixUTF8Bytes)
			{
				strResult+=Vutf8ToUnicode(rgUTF8Bytes);
				ixUTF8Bytes=0;
				rgUTF8Bytes.length=ixUTF8Bytes;
			}
			strResult+=str.charAt(ix++);
		}
	}
	if (ixUTF8Bytes)
	{
		strResult+=Vutf8ToUnicode(rgUTF8Bytes);
		ixUTF8Bytes=0;
		rgUTF8Bytes.length=ixUTF8Bytes;
	}
	return strResult;
}
function unescapeProperly(str)
{ULSA13:;
	var strResult=null;
	if ((browseris.ie55up || browseris.nav6up) &&
		(typeof(decodeURIComponent) !="undefined"))
	{
		strResult=decodeURIComponent(str);
	}
	else
	{
		strResult=unescapeProperlyInternal(str);
	}
	return strResult;
}
function navigateMailToLink(strBody)
{ULSA13:;
	window.location='mailto:?body='+escapeProperly(strBody);
}
function navigateMailToLinkWithMessage(strTo, strBody)
{ULSA13:;
	window.location='mailto:'+escapeProperly(strTo)
+'?body='+escapeProperly(escapeProperlyCoreCore(strBody, false, false, true));
}
function newBlogPostOnClient(strProviderId, strBlogUrl, strBlogName)
{ULSA13:;
	var stsOpen;
	var fRet;
	stsOpen=StsOpenEnsureEx("SharePoint.OpenDocuments.3");
	if (stsOpen==null)
	{
		alert(L_NewBlogPost_Text);
		return;
	}
	try
	{
		fRet=stsOpen.NewBlogPost(strProviderId, strBlogUrl, strBlogName);
	}
	catch (e)
	{
		alert(L_NewBlogPostFailed_Text);
	}
}
function GetUrlFromWebUrlAndWebRelativeUrl(webUrl, webRelativeUrl)
{ULSA13:;
	var retUrl=(webUrl==null || webUrl.length <=0) ? "/" : webUrl;
	if (retUrl.charAt(retUrl.length - 1) !="/")
	{
		retUrl+="/";
	}
	retUrl+=webRelativeUrl;
	return retUrl;
}
var g_updateFormDigestPageLoaded=new Date();
function UpdateFormDigest(serverRelativeWebUrl, updateInterval)
{ULSA13:;
	try
	{
		if ((g_updateFormDigestPageLoaded==null) || (typeof(g_updateFormDigestPageLoaded) !="object"))
		{
			return;
		}
		var now=new Date();
		if (now.getTime() - g_updateFormDigestPageLoaded.getTime() < updateInterval)
		{
			return;
		}
		if ((serverRelativeWebUrl==null) || (serverRelativeWebUrl.length <=0))
		{
			return;
		}
		var formDigestElement=document.getElementsByName("__REQUESTDIGEST")[0];
		if ((formDigestElement==null) || (formDigestElement.tagName.toLowerCase() !="input") || (formDigestElement.type.toLowerCase() !="hidden") ||
			(formDigestElement.value==null) || (formDigestElement.value.length <=0))
		{
			return;
		}
		var request=null;
		try
		{
			request=new ActiveXObject("Msxml2.XMLHTTP");
		}
		catch (ex)
		{
			request=null;
		}
		if (request==null)
		{
			try
			{
				request=new XMLHttpRequest();
			}
			catch (ex)
			{
				request=null;
			}
		}
		if (request==null)
		{
			return;
		}
		request.open("POST", GetUrlFromWebUrlAndWebRelativeUrl(serverRelativeWebUrl, "_vti_bin/sites.asmx"), false);
		request.setRequestHeader("Content-Type", "text/xml");
		request.setRequestHeader("SOAPAction", "http://schemas.microsoft.com/sharepoint/soap/GetUpdatedFormDigest");
		request.send("<?xml version=\"1.0\" encoding=\"utf-8\"?>"+			"<soap:Envelope xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" xmlns:soap=\"http://schemas.xmlsoap.org/soap/envelope/\">"+			"  <soap:Body>"+			"    <GetUpdatedFormDigest xmlns=\"http://schemas.microsoft.com/sharepoint/soap/\" />"+			"  </soap:Body>"+			"</soap:Envelope>");
		var responseText=request.responseText;
		if ((responseText==null) || (responseText.length <=0))
		{
			return;
		}
		var startTag='<GetUpdatedFormDigestResult>';
		var endTag='</GetUpdatedFormDigestResult>';
		var startTagIndex=responseText.indexOf(startTag);
		var endTagIndex=responseText.indexOf(endTag, startTagIndex+startTag.length);
		var newFormDigest=null;
		if ((startTagIndex >=0) && (endTagIndex > startTagIndex))
		{
			var newFormDigest=responseText.substring(startTagIndex+startTag.length, endTagIndex);
		}
		if ((newFormDigest==null) || (newFormDigest.length <=0))
		{
			return;
		}
		var oldValue=formDigestElement.value;
		formDigestElement.value=newFormDigest;
		g_updateFormDigestPageLoaded=new Date();
	}
	catch (ex)
	{
	}
}
function IsSupportedFirefoxOnWin()
{ULSA13:;
	return (browseris.winnt || browseris.win32 || browseris.win64bit) && browseris.firefox3up;
}
function IsFirefoxOnWindowsPluginInstalled()
{ULSA13:;
	return navigator.mimeTypes &&
					navigator.mimeTypes["application/x-sharepoint"] &&
					navigator.mimeTypes["application/x-sharepoint"].enabledPlugin;
}
function CreateFirefoxOnWindowsPlugin()
{ULSA13:;
	var plugin=null;
	if (IsSupportedFirefoxOnWin())
	{
		try{
				plugin=document.getElementById("winFirefoxPlugin");
				if (!plugin && IsFirefoxOnWindowsPluginInstalled())
				{
					var pluginNode=document.createElement("object");
					pluginNode.id="winFirefoxPlugin";
					pluginNode.type="application/x-sharepoint";
					pluginNode.width=0;
					pluginNode.height=0;
					pluginNode.style.setProperty("visibility", "hidden", "");
					document.body.appendChild(pluginNode);
					plugin=document.getElementById("winFirefoxPlugin");
				}
			}
		catch(e)
			{
				plugin=null;
			}
	}
	return plugin;
}
function IsSupportedMacBrowser()
{ULSA13:;
	return browseris.mac && (browseris.firefox3up || browseris.safari3up);
}
function IsBrowserPluginInstalled(mimeType)
{ULSA13:;
	return navigator.mimeTypes &&
				navigator.mimeTypes[mimeType] &&
				navigator.mimeTypes[mimeType].enabledPlugin;
}
function IsMacPluginInstalled()
{ULSA13:;
	var webkitPluginInstalled=IsBrowserPluginInstalled("application/x-sharepoint-webkit");
	var npapiPluginInstalled=IsBrowserPluginInstalled("application/x-sharepoint");
	if (browseris.safari3up && webkitPluginInstalled)
		return true;
	return npapiPluginInstalled;
}
function CreateMacPlugin()
{ULSA13:;
	var plugin=null;
	if (IsSupportedMacBrowser())
	{
		plugin=document.getElementById("macSharePointPlugin");
		if (plugin==null && IsMacPluginInstalled())
		{
			var pluginMimeType=null;
			if (browseris.safari3up && IsBrowserPluginInstalled("application/x-sharepoint-webkit"))
				pluginMimeType="application/x-sharepoint-webkit";
			else
				pluginMimeType="application/x-sharepoint";
			var pluginNode=document.createElement("object");
			pluginNode.id="macSharePointPlugin";
			pluginNode.type=pluginMimeType;
			pluginNode.width=0;
			pluginNode.height=0;
			pluginNode.style.setProperty("visibility", "hidden", "");
			document.body.appendChild(pluginNode);
			plugin=document.getElementById("macSharePointPlugin");
		}
	}
	return plugin;
}
var g_objStssync;
function GetStssyncHandler(szVersion)
{ULSA13:;
	if (!IsSupportedMacBrowser())
	{
		try
		{
			g_objStssync=new ActiveXObject("SharePoint.StssyncHandler"+szVersion);
		}
		catch (e)
		{
			g_objStssync=null;
		}
	}
	else
	{
		g_objStssync=CreateMacPlugin();
	}
}
function GetStssyncData(strType, strTextDefault, strImgPathDefault, strPrefix)
{ULSA13:;
	var stsSyncData=null;
	if((document.cookie.indexOf("stsSyncAppName")==-1) && (document.cookie.indexOf("stsSyncIconPath")==-1))
	{
		if (IsSupportedMacBrowser())
		{
			var plugin=GetStssyncHandler("");
			if (plugin==null || !plugin.StssyncEnabled)
			{
				document.cookie="stsSyncAppName=0;";
				document.cookie="stsSyncIconPath=0;";
				return stsSyncData;
			}
		}
		if ((browseris.ie5up && browseris.win32) || IsSupportedMacBrowser())
		{
			var strAppName;
			var strIconName;
			if (strType !="")
				GetStssyncHandler(".3");
			if (!g_objStssync)
			{
				if (strType !="" && strType !="calendar" && strType !="contacts")
				{
					document.cookie="stsSyncAppName=0;";
					document.cookie="stsSyncIconPath=0;";
					return stsSyncData;
				}
				GetStssyncHandler(".2");
				if (!g_objStssync || !(strAppName=g_objStssync.GetStssyncAppName()))
				{
					document.cookie="stsSyncAppName=0;";
					document.cookie="stsSyncIconPath=0;";
					return stsSyncData;
				}
			}
			else				
			{
				if (!(strAppName=g_objStssync.GetStssyncAppNameForType(strType)))				
				{
					document.cookie="stsSyncAppName=0;";
					document.cookie="stsSyncIconPath=0;";
					return stsSyncData;
				}				
			}
			document.cookie="stsSyncAppName="+escapeProperly(strAppName)+";";
			try
			{
				strIconName=g_objStssync.GetStssyncIconName();
				strIconName=strPrefix+strIconName;
				document.cookie="stsSyncIconPath="+escapeProperly(strIconName)+";";
			}
			catch (e)
			{
				document.cookie="stsSyncIconPath=0;";
				strIconName=strImgPathDefault;
			}
		}
		else
		{
			strAppName=strTextDefault;
			strIconName=strImgPathDefault;		
			document.cookie="stsSyncAppName="+escapeProperly(strTextDefault);
			document.cookie="stsSyncIconPath="+escapeProperly(strImgPathDefault);
		}
	}
	else
	{
		strAppName=GetCookie("stsSyncAppName");
		strIconName=GetCookie("stsSyncIconPath");
		if(strAppName=='0')
		{
			return stsSyncData;					
		}
	}
	var L_LinkToBefore_Text="Conectar a ";
	var L_LinkToAfter_Text="";
	strAppName=L_LinkToBefore_Text+strAppName+L_LinkToAfter_Text;	
	stsSyncData=new Object();
	stsSyncData.BtnText=strAppName;
	stsSyncData.BtnImagePath=strIconName;	
	return stsSyncData;
}
function GetStssyncAppName(strDefault)
{ULSA13:;
	var stsSyncData=GetStssyncData("",strDefault, "", "");
	return stsSyncData.BtnText;
}
function makeAbsUrl(strUrl)
{ULSA13:;
	if (strUrl.length > 0 && "/"==strUrl.substr(0, 1))
	{
		strUrl=window.location.protocol+"//"+window.location.host+strUrl;
	}
	return strUrl;
}
function ExportHailStorm(type,weburl,guid,webname,listname,viewurl,passport,listrooturl,folderurl,folderid)
{ULSA13:;
	var strAppName=GetCookie("stsSyncAppName");
	var strIconName=GetCookie("stsSyncIconPath");
	if(strAppName!=null && strAppName !='0')
	{
		var maxLinkLength=500;
		var maxNameLength=20;
		var link="stssync://sts/?ver=1.1"
+"&type="+escapeProperly(type)
+"&cmd=add-folder"
+"&base-url="+escapeForSync(weburl)
+"&list-url="+escapeForSync("/"+makeAbsUrl(viewurl).substr(weburl.length+1)+"/")
+"&guid="+escapeProperly(guid);
		if (window.self.offlineBtnUser !=undefined)
			link+="&user-id="+offlineBtnUser;
		var names="&site-name="+escapeForSync(webname)
+"&list-name="+escapeForSync(listname);
		var context="";
		if (folderurl)
			context+="&folder-url="+escapeForSync("/"+folderurl.substr(listrooturl.length+1));
		if (folderid)
			context+="&folder-id="+folderid;
		if (link.length+names.length+context.length > maxLinkLength &&
			(webname.length > maxNameLength || listname.length > maxNameLength))
		{
			if (webname.length > maxNameLength)
				webname=webname.substring(0, maxNameLength-1)+"...";
			if (listname.length > maxNameLength)
				listname=listname.substring(0, maxNameLength-1)+"...";
			names="&site-name="+escapeForSync(webname)
+"&list-name="+escapeForSync(listname);
		}
		link=link+names+context;
		var L_StssyncTooLong_Text="El título de esta lista es demasiado largo. Acórtelo y vuelva a intentarlo.";
		if (link.length > maxLinkLength)
			alert(L_StssyncTooLong_Text);
		else
		{
			try
			{
				window.location.href=link;
			}
			catch (e)
			{
			}
		}
	}
}
var g_objDiagramLaunch;
function GetDiagramLaunchInstalled()
{ULSA13:;
	var strAppName='';
	if(document.cookie.indexOf("digInstalled")==-1)
	{
		try
		{
			g_objDiagramLaunch=new ActiveXObject("DiagramLaunch.DiagramLauncher");
			strAppName=g_objDiagramLaunch.EnsureDiagramApplication();
			document.cookie="digInstalled="+escapeProperly(strAppName)+";";			
		}
		catch (e)
		{
			g_objDiagramLaunch=null;
			document.cookie="digInstalled=0;";			
		}
	}
	else
	{
		strAppName=GetCookie("digInstalled");
		if(strAppName=='0')
			strAppName='';
	}
	return strAppName;
}
var g_objProjectTaskLaunch=null;
function GetProjectTaskLaunchInstalled()
{ULSA13:;
	if(document.cookie.indexOf("projInstalled")==-1)
	{
		var strAppName='';
		try
		{
			g_objProjectTaskLaunch=new ActiveXObject("TaskLaunch.TaskLauncher");
			strAppName=g_objProjectTaskLaunch.EnsureTaskApplication();
			document.cookie="projInstalled="+escapeProperly(strAppName)+";";
		}
		catch (e)
		{
			document.cookie="projInstalled=0;";
			g_objProjectTaskLaunch=null;
		}
	}
	else
	{
		strAppName=GetCookie("projInstalled");
		if(strAppName=='0')
			strAppName='';
	}
	return strAppName;
}
var g_expDatabase;
function GetDataBaseInstalled()
{ULSA13:;
	var databaseBtnText='';
	var databaseBtnDesc='';
	if( (document.cookie.indexOf("databaseBtnText")==-1) || (document.cookie.indexOf("databaseBtnDesc")==-1) )
	{
		try
		{
			g_expDatabase=new ActiveXObject('SharePoint.ExportDatabase');
			if (g_expDatabase && g_expDatabase.IsDBProgramInstalled())
			{
				document.cookie="databaseBtnText="+escapeProperly(g_expDatabase.MenuTitle)+";";	
				document.cookie="databaseBtnDesc="+escapeProperly(g_expDatabase.MenuDescription)+";";	
			}
			else
			{
				document.cookie="databaseBtnText="+'0'+";";
				document.cookie="databaseBtnDesc="+'0'+";";
				g_expDatabase=null;
			}
		}
		catch(e)
		{
			document.cookie="databaseBtnText="+'0'+";";
			document.cookie="databaseBtnDesc="+'0'+";";
			g_expDatabase=null;
		}
	}
	else
	{
		databaseBtnText=GetCookie("databaseBtnText");
		databaseBtnDesc=GetCookie("databaseBtnDesc");
		if(databaseBtnText !='0' && databaseBtnText !='0')
		{
			var dummyExpDatabase=new Object();
			dummyExpDatabase.MenuTitle=databaseBtnText;
			dummyExpDatabase.MenuDescription=databaseBtnDesc;
			return dummyExpDatabase;
		}
		else
		{
			g_expDatabase=null;
		}
	}
	return g_expDatabase;
}
var g_ssImporterObj;
var g_fSSImporter=false;
function EnsureSSImportInner()
{ULSA13:;
	if (browseris.ie5up && browseris.win32)
	{
		try
		{
			g_ssImporterObj=new ActiveXObject("SharePoint.SpreadsheetLauncher.2");
			if (g_ssImporterObj)
				g_fSSImporter=true;
		}
		catch (e)
		{
			try
			{
				g_ssImporterObj=new ActiveXObject("SharePoint.SpreadsheetLauncher.1");
				if (g_ssImporterObj)
					g_fSSImporter=true;
			}
			catch (e)
			{
				g_fSSImporter=false;
			}
		}
	}
	else if (IsSupportedMacBrowser())
	{
		g_ssImporterObj=CreateMacPlugin();
		if (g_ssImporterObj)
			g_fSSImporter=true;
		else
			g_fSSImporter=false;
	}
}
function EnsureSSImporter(byPassCookies)
{ULSA13:;
	byPassCookies=(typeof(byPassCookies)==undefined) ? false : byPassCookies;
	if(document.cookie.indexOf("EnsureSSImporter")==-1 || byPassCookies)
	{
		EnsureSSImportInner();		
		document.cookie="EnsureSSImporter="+g_fSSImporter+";";
	}
	else
	{
		g_fSSImporter=GetCookie("EnsureSSImporter")=="true" ? true : false;
	}
	return g_fSSImporter;
}
function ShowHideSection(sectionid, imgid)
{ULSA13:;
	var group=document.getElementById(sectionid);
	var img=document.getElementById(imgid);
	if ((group==null))
		return;
	if (group.style.display !="none")
	{
		group.style.display="none";
		img.src="/_layouts/images/plus.gif";
	}
	else
	{
		group.style.display="";
		img.src="/_layouts/images/minus.gif";
	}
}
function ShowSection(sectionid, imgid)
{ULSA13:;
	var group=document.getElementById(sectionid);
	var img=document.getElementById(imgid);
	if ((group==null))
		return;
	if (group.style.display=="none")
	{
		group.style.display="";
		img.src="/_layouts/images/minus.gif";
	}
}
function ShowHideInputFormSection(sectionid, bShow)
{ULSA13:;
	var e=document.getElementById(sectionid);
	if (e !=null)
		e.style.display=bShow ? "" : "none";
	for (var i=1; i < 3; i++)
	{
		e=document.getElementById(sectionid+"_tablerow"+i);
		if (e !=null)
			e.style.display=bShow ? "" : "none";
	}
}
function ShowHideInputFormControl(id, bHide, bDisableValidators, bSilent)
{ULSA13:;
	var displaySetting="";
	if (bHide==true)
	{
		displaySetting="none";
	}
	var validators=eval(id+'_validators');
	if (validators !=null)
	{
		for(var i=0; i < validators.length; i++)
		{
			STSValidatorEnable(validators[i], !bDisableValidators, bSilent);
		}
	}
	for(var i=1; i<=5; i++)
	{
		var rowId=id+"_tablerow"+i;
		var row=document.getElementById(rowId);
		if ((row !=null) && !browseris.mac)
		{
			row.style.display=displaySetting;
		}
	}
}
function HideMenuControl(menuControlId)
{ULSA13:;
	if (typeof(menuControlId)=="undefined" || menuControlId==null)
		return;
	var menu=document.getElementById(menuControlId);
	if (typeof(menu)=="undefined" || menu==null)
		  return;
	var menuItems=menu.getElementsByTagName("ie:menuitem");
	if (typeof(menuItems)=="undefined" || menuItems==null)
		  return;
	for(var i=0;i<menuItems.length; i++)
	{
	   var menuItem=menuItems[i];
	   var hiddenScript=menuItem.getAttribute("hidden");
	   if (typeof(hiddenScript)=="undefined" || hiddenScript==null
		   || !eval(hiddenScript))
			   return;
	}
	menu.style.display='none';
}
function SetControlDisabledStatus(obj, disabledStatus)
{ULSA13:;
	try
	{
		if (obj.setAttribute)
			obj.setAttribute('disabled', disabledStatus);
		if (!disabledStatus && obj.removeAttribute)
			obj.removeAttribute('disabled');
	}
	catch(e)
	{
	}
}
function SetControlDisabledStatusRecursively(obj, disabledStatus)
{ULSA13:;
	if (obj==null)
		return;
	SetControlDisabledStatus(obj, disabledStatus);
	var objChildren=obj.childNodes;
	for(var i=0; objChildren.length > i; i++)
	{
		SetControlDisabledStatusRecursively(objChildren.item(i), disabledStatus);
	}
}
function SetChildControlsDisabledStatus(obj, disabledStatus)
{ULSA13:;
	var objChildren=obj.childNodes;
	for(var i=0; i < objChildren.length; i++)
	{
		SetControlDisabledStatusRecursively(objChildren.item(i), disabledStatus);
	}
}
var g_PNGImageIds;
var g_PNGImageSources;
function displayPNGImage(id,src,width,height,alt)
{ULSA13:;
	if (g_PNGImageIds==null)
		g_PNGImageIds=new Array();
	if (g_PNGImageSources==null)
		g_PNGImageSources=new Array();
	var style=null;
	document.write("<IMG id='"+id+"' ");
	if (width && width > 0)
		document.write("width='"+width+"' ");
	if (height && height > 0)
		document.write("height='"+height+"' ");
	document.write("alt='"+alt+"' ");
	if (style)
		document.write("style='"+style+"' ");
	document.write(" src='"+src+"' />");
	g_PNGImageIds.push(id);
	g_PNGImageSources.push(src);
}
function ProcessPNGImages()
{ULSA13:;
	var useFilter=browseris.ie &&
				browseris.ie55up &&
				browseris.verIEFull < 7.0;
	if (g_PNGImageIds !=null && useFilter)
	{
		for (var i=0; i < g_PNGImageIds.length; i++)
		{
			var img=document.getElementById(g_PNGImageIds[i]);
			if (img !=null && g_PNGImageSources[i] !=null)
			{
				img.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(src="+g_PNGImageSources[i]+"),sizingMethod=scale);";
				img.src="/_layouts/images/blank.gif";
			}
		}
	}
}
var CTXTYPE_EDITMENU=0;
var CTXTYPE_VIEWSELECTOR=1;
function ContextInfo()
{ULSA13:;
	this.listBaseType=null;
	this.listTemplate=null;
	this.listName=null;
	this.view=null;
	this.listUrlDir=null;
	this.HttpPath=null;
	this.HttpRoot=null;
	this.serverUrl=null;
	this.imagesPath=null;
	this.PortalUrl=null;
	this.RecycleBinEnabled=null;
	this.isWebEditorPreview=null;
	this.rootFolderForDisplay=null;
	this.isPortalTemplate=null;
	this.isModerated=false;
	this.recursiveView=false;
	this.displayFormUrl=null;
	this.editFormUrl=null;
	this.newFormUrl=null;
	this.ctxId=null;
	this.CurrentUserId=null;
	this.isForceCheckout=false;
	this.EnableMinorVersions=false;
	this.ModerationStatus=0;
	this.verEnabled=0;
	this.isVersions=0;
	this.WorkflowsAssociated=false;
	this.ExternalDataList=false;
	this.HasRelatedCascadeLists=0;
	this.CascadeDeleteWarningMessage=null;
	this.ContentTypesEnabled=false;
	this.SendToLocationName="";
	this.SendToLocationUrl="";
	this.StateInitDone=false;
	this.TotalListItems=null;
	this.CurrentSelectedItems=null;
	this.LastSelectableRowIdx=null;
	this.SelectAllCbx=null;
	this.TableCbxFocusHandler=null;
	this.TableMouseoverHandler=null;
}
function ctxInitItemState(ctxCur)
{ULSA13:;
	ctxCur.TotalListItems=0;
	ctxCur.CurrentSelectedItems=0;
	ctxCur.LastSelectableRowIdx=0;
	ctxCur.StateInitDone=true;
}
function STSPageUrlValidation(url)
{ULSA13:;
	return PageUrlValidation(url);
}
function GetSource(defaultSource)
{ULSA13:;
	var str=DeferCall('GetSource2', defaultSource, null);
	if (str==null)
	{
		var source=GetUrlKeyValue("Source");
		if (source=="")
		{
			if (defaultSource !=null && defaultSource !="")
				source=defaultSource;
			else
				source=window.location.href;
		}
		str=source;
	}
	return escapeProperly(STSPageUrlValidation(str));
}
function GetUrlKeyValue(keyName, bNoDecode, url)
{ULSA13:;
	var keyValue="";
	if (url==null)
		url=window.location.href+"";
	var ndx;
	ndx=url.indexOf("#");
	if (ndx >=0)
	{
		url=url.substr(0, ndx);
	}
	ndx=url.indexOf("&"+keyName+"=");
	if (ndx==-1)
		ndx=url.indexOf("?"+keyName+"=");
	if (ndx !=-1)
	{
		ndx2=url.indexOf("&", ndx+1);
		if (ndx2==-1)
			ndx2=url.length;
		keyValue=url.substring(ndx+keyName.length+2, ndx2);
	}
	if (bNoDecode)
		return keyValue;
	else
		return unescapeProperlyInternal(keyValue);
}
function LoginAsAnother(url, bUseSource)
{ULSA13:;
	document.cookie="loginAsDifferentAttemptCount=0";
	if (bUseSource=="1")
	{
		GoToPage(url);
	}
	else
	{
		var ch=url.indexOf("?") >=0 ? "&" : "?";
		url+=ch+"Source="+escapeProperly(window.location.href);
		STSNavigate(url);
	}
}
function isPortalTemplatePage(Url)
{ULSA13:;
	if (GetUrlKeyValue("PortalTemplate")=="1" ||
		GetUrlKeyValue("PortalTemplate", Url)=="1" ||
		(currentCtx !=null && currentCtx.isPortalTemplate))
		return true;
	else
		return false;
}
function CLVPFromEvent(evt)
{ULSA13:;
	return DeferCall('CLVPFromEventReal', evt);
}
function STSNavigateToView(evt, url)
{ULSA13:;
	STSNavigate(url);
}
function STSNavigate2(evt, url)
{ULSA13:;
	STSNavigate(url);
}
function STSNavigate(Url)
{ULSA13:;
	if (window.location.search.indexOf("IsDlg=1") !=-1)
	{
		if (Url.indexOf("?") !=-1)
		{
			if (Url.match("&$") !="&")
			{
				Url=Url+"&IsDlg=1";
			}
			else
			{
				Url=Url+"IsDlg=1";
			}
		}
		else
		{
			Url=Url+"?IsDlg=1";
		}
	}
	if (isPortalTemplatePage(Url))
		window.top.location=STSPageUrlValidation(Url);
	else
		window.location=STSPageUrlValidation(Url);
}
function GoToPage(url)
{ULSA13:;
	var ch=url.indexOf("?") >=0 ? "&" : "?";
	if (GetUrlKeyValue("Source", true, url).length==0)
	{
		var srcUrl=GetSource();
		if (srcUrl !=null && srcUrl !="")
		{
			if((url.length+srcUrl.length) <=1950)
			{
				url+=ch+"Source="+srcUrl;
			}
		}
	}
	STSNavigate(url);
}
function TrimSpaces( str )
{ULSA13:;
	var start;
	var end;
	str=str.toString();
	var len=str.length;
	for (start=0; start < len; start++)
	{
		if (str.charAt(start) !=' ')
			break;
	}
	if (start==len)
		return "";
	for (end=len - 1; end > start; end --)
	{
		if (str.charAt(end) !=' ')
			break;
	}
	end++;
	return str.substring(start, end);
}
function TrimWhiteSpaces( str )
{ULSA13:;
	var start;
	var end;
	str=str.toString();
	var len=str.length;
	for (start=0; start < len; start++)
	{
		ch=str.charAt(start);
		if (ch!=' ' && ch!='\t' && ch!='\n' && ch!='\r' && ch!='\f')
			break;
	}
	if (start==len)
		return "";
	for (end=len - 1; end > start; end --)
	{
		ch=str.charAt(end);
		if (ch!=' ' && ch!='\t' && ch!='\n' && ch!='\r' && ch!='\f')
			break;
	}
	end++;
	return str.substring(start, end);
}
function GetAttributeFromItemTable(itemTable, strAttributeName, strAttributeOldName)
{ULSA13:;
	var attrValue=itemTable !=null ? itemTable.getAttribute(strAttributeName) : null;
	if (attrValue==null && itemTable !=null && strAttributeOldName!=null)
		attrValue=itemTable.getAttribute(strAttributeOldName);
	return attrValue;
}
function ShowMtgNavigatorPane()
{ULSA13:;
	document.getElementById("MeetingNavigatorPane").style.display="block";
}
function HideMtgNavigatorPane()
{ULSA13:;
	document.getElementById("MeetingNavigatorPane").style.display="none";
}
function HideMtgDesc()
{ULSA13:;
	document.getElementById("MeetingDescription").style.display="none";
}
function GetMultipleUploadEnabled()
{ULSA13:;
	try
	{
		if (browseris.ie5up && !browseris.mac && (new ActiveXObject('STSUpld.UploadCtl')))
			return true;
	}
	catch(e)
	{
	}
	return false;
}
function SetUploadPageTitle()
{ULSA13:;
	if (GetUrlKeyValue("Type")==1)
	{
		document.title=L_NewFormClickOnce1_Text;
		if (browseris.ie || browseris.nav6up)
		{
			var titleElt=document.getElementById("onetidTextTitle");
			if (titleElt !=null)
				titleElt.innerHTML=L_NewFormClickOnce1_Text;
		}
	}
}
function GetSelectedValue (frmElem) {ULSA13:;
	if (frmElem && (frmElem.selectedIndex >-1)) {
		return frmElem.options[frmElem.selectedIndex].value
	}
	else
		return "";
}
function GetSelectedText(frmElem) {ULSA13:;
	if (frmElem && (frmElem.selectedIndex >-1)) {
		return frmElem.options[frmElem.selectedIndex].text
	}
	else
		return "";
}
function MtgShowTimeZone()
{ULSA13:;
	if (GetCookie("MtgTimeZone")=="1")
	{
		MtgToggleTimeZone();
	}
}
function FormatDate(sDate, sTime, eDate, eTime)
{ULSA13:;
	var L_Date_Text="<b>Fecha:</b>";
	var L_Time_Text="<b>Hora:</b>";
	var L_DateSeparator=" - ";
	if(browseris.win32 && sDate==eDate)
		L_DateSeparator=" -\u200e ";
	if (sDate==eDate)
	{
		document.write(L_Date_Text+" "+sDate);
		if (sTime !=eTime)
			document.write(" "+L_Time_Text+" "+sTime+L_DateSeparator+eTime);
		else
			document.write(" "+L_Time_Text+" "+sTime);
	}
	else
	{
		document.write(L_Date_Text+" "+sDate+" ("+sTime+")"+L_DateSeparator+eDate+" ("+eTime+")");
	}
}
function GetAlertText(isDetached)
{ULSA13:;
	var L_DETACHEDSINGLEEXCEPT_Text="Esta fecha de reunión ya no está asociada con una reunión del programa de agenda o del calendario. Esta fecha de reunión se ha cancelado o el vínculo al área de trabajo se ha eliminado de la reunión programada.";
	var L_DETACHEDCANCELLEDEXCEPT_Text="Esta fecha de reunión se ha cancelado en el programa de agenda y el calendario. Para especificar lo que desea hacer con la información asociada que hay en el área de trabajo, lleve a cabo las siguientes acciones: en el panel Serie de reuniones, señale la fecha de la reunión y en la lista desplegable, haga clic en Mantener, Eliminar o Mover.";
	var L_DETACHEDUNLINKEDSINGLE_Text="Esta fecha de reunión ya no está asociada con una reunión del programa de agenda o del calendario. Para especificar lo que desea hacer con la información asociada que hay en el área de trabajo, lleve a cabo las siguientes acciones: en el panel Serie de reuniones, señale la fecha de la reunión y en la lista desplegable, haga clic en Mantener, Eliminar o Mover.";
	var L_DETACHEDCANCELLEDSERIES_Text="Esta serie de reuniones se ha cancelado en el programa de agenda y calendario.";
	var L_DETACHEDUNLINKEDSERIES_Text="El evento de reunión programada y periódica asociado con esta área de trabajo se ha desvinculado del área de trabajo. Puede mantener o eliminar esta área de trabajo periódica. Si mantiene el área de trabajo, no podrá vincularla a otra reunión programada.";
	var L_DETACHEDSERIESNOWSINGLE_Text="Esta reunión se ha modificado en el programa de agenda y calendario de una reunión periódica a una no periódica. Puede mantener o eliminar esta área de trabajo. Si mantiene el área de trabajo, no podrá vincularla a otra reunión programada.";
	var L_DETACHEDSINGLENOWSERIES_Text="Esta reunión se ha modificado en el programa de agenda y calendario de una reunión no periódica a una periódica. El área de trabajo actual no admite una reunión periódica. En el programa de agenda, quite el vínculo de la reunión del área de trabajo y vuelva a vincularla a una nueva área de trabajo. Esta nueva área admitirá automáticamente las reuniones periódicas.";
	var L_DETACHEDNONGREGORIANCAL_Text="Esta reunión se creó en un programa de agenda y calendario que sólo admite actualizaciones de serie en el área de reuniones. Los cambios que realice a las repeticiones individuales de las reuniones en ese programa no aparecerán en el área de trabajo.";
	var L_DETACHEDPASTEXCPMODIFIED_Text="La reunión ya pasada se ha modificado o cancelado en el programa de agenda y el calendario. Para mantener, eliminar o mover esta reunión en el área de trabajo, utilice el menú desplegable situado junto a la fecha en el panel Serie de reuniones. Para actualizar la fecha de programación de esta reunión en el área de trabajo, utilice el programa de agenda para actualizar esta aparición de reunión.";
	var howOrphaned=isDetached & (0x10 - 1);
	var howDetached=isDetached - howOrphaned;
	if (howOrphaned)
	{
		switch (howOrphaned)
		{
			case 1:	return (g_meetingCount==1) ? L_DETACHEDSINGLEEXCEPT_Text : L_DETACHEDCANCELLEDEXCEPT_Text;
			case 2:	return L_DETACHEDCANCELLEDSERIES_Text;
			case 3: return L_DETACHEDCANCELLEDEXCEPT_Text;
			case 4:	return (g_meetingCount==1) ? L_DETACHEDSINGLEEXCEPT_Text : L_DETACHEDUNLINKEDSINGLE_Text;
			case 5:	return L_DETACHEDUNLINKEDSERIES_Text;
			case 6:	return L_DETACHEDSERIESNOWSINGLE_Text;
			case 7:	return L_DETACHEDSINGLENOWSERIES_Text;
			case 8:	return L_DETACHEDPASTEXCPMODIFIED_Text;
		}
	}
	else if (howDetached)
	{
		switch (howDetached)
		{
			case 16: return L_DETACHEDNONGREGORIANCAL_Text;
		}
	}
	return null;
}
function retrieveCurrentThemeLink()
{ULSA13:;
	var cssLink;
	var links=document.getElementsByTagName("link");
	for(var i=0; i<links.length; i++)
	{
		if((links[i].type=="text/css") && (links[i].id=="onetidThemeCSS"))
			cssLink=links[i];
	}
	if(cssLink)
	{
		var re=/(\.\.\/)+/;
		var relativeURL=cssLink.href;
		var newURL=relativeURL.replace(re, "/");
		return newURL;
	}
}
function StBuildParam(stPattern)
{ULSA13:;
	var re;
	var i;
	for (i=1; i < StBuildParam.arguments.length; i++)
		{
		re=new RegExp("\\^"+i);
		stPattern=stPattern.replace(re, StBuildParam.arguments[i]);
		}
	return stPattern;
}
JSRequest={
	QueryString : null,
	FileName : null,
	PathName : null,
	EnsureSetup : function()
	{ULSA13:;
		if (JSRequest.QueryString !=null) return;
		JSRequest.QueryString=new Array();
		var queryString=window.location.search.substring(1);
		var pairs=queryString.split("&");
		for (var i=0;i<pairs.length;i++)
		{
			var p=pairs[i].indexOf("=");
			if (p > -1)
			{
				var key=pairs[i].substring(0,p);
				var value=pairs[i].substring(p+1);
				JSRequest.QueryString[key]=value;
			}
		}
		var path=JSRequest.PathName=window.location.pathname;
		var p=path.lastIndexOf("/");
		if (p > -1)
		{
			JSRequest.FileName=path.substring(p+1);
		}
		else
		{
			JSRequest.PageName=path;
		}
	}
};
var ExpGroupWPListName="WSS_ExpGroupWPList";
var ExpGroupCookiePrefix="WSS_ExpGroup_";
var ExpGroupCookieDelimiter="&";
var ExpGroupMaxWP=11;
var ExpGroupMaxCookieLength=3960;
var g_ExpGroupQueue=new Array();
var g_ExpGroupInProgress=false;
var g_ExpInitializing=false;
var g_ExpGroupTable=new Array();
var g_ExpGroupNeedsState=false;
var g_ExpGroupParseStage=false;
function ExpCollGroup(groupName, imgName, evt, noAjax)
{ULSA13:;
	if (evt !=null)
		g_ExpGroupNeedsState=true;
	if (document.getElementById("titl"+groupName)==null)
		return;
	viewTable=document.getElementById("titl"+groupName).parentNode;
	if (viewTable==null)
		return;
	var ctxNum=groupName.substr(0, groupName.indexOf("-"));
	var ctxCur=window["ctx"+ctxNum];
	if (!ctxCur)
		return;
	if (!ctxCur.StateInitDone)
		ctxInitItemState(ctxCur);
	if (ctxCur.SelectAllCbx==null)
		ctxCur.SelectAllCbx=getSelectAllCbxFromTable(viewTable);
	tbodyTags=viewTable.getElementsByTagName("TBODY");
	numElts=tbodyTags.length;
	len=groupName.length;
	img=document.getElementById(imgName);
	if (img==null)
		return;
	srcPath=img.src;
	index=srcPath.lastIndexOf("/");
	imgName=srcPath.slice(index+1);
	var fOpen=false;
	if (imgName=='plus.gif' || g_ExpInitializing)
	{
		fOpen=true;
		displayStr="";
		img.src='/_layouts/images/minus.gif';
	}
	else
	{
		fOpen=false;
		displayStr="none";
		img.src='/_layouts/images/plus.gif';
	}
	for (var i=0;i<numElts;i++)
	{
		var childObj=tbodyTags[i];
		if ( (childObj.id !=null)
					&& (childObj.id.length > len+4)
					&& (groupName==childObj.id.slice(4).substr(0,len)) )
		{
			if (fOpen)
			{
				index=childObj.id.indexOf("_", len+4);
				if (index!=-1)
				{
					index=childObj.id.indexOf("_", index+1);
					if (index!=-1)
						continue;
				}
			}
			var previousDisplay=childObj.style.display;
			childObj.style.display=displayStr;
			var itemCount=0;
			if (childObj.getAttribute("selectableRows"))
				itemCount=Number(childObj.getAttribute("selectableRows"));
			if (typeof(FV4UI) !="undefined" && FV4UI() && itemCount)
			{
				if (!fOpen)
				{
					if (previousDisplay !="none")
						ctxCur.TotalListItems -=itemCount;
					DeselectCollapsedGroup(ctxCur, childObj);
					UpdateSelectAllCbx(ctxCur, true);
				}
				else
				{
					ctxCur.TotalListItems+=itemCount;
					UpdateSelectAllCbx(ctxCur, false);
				}
			}
			if (fOpen && childObj.id.substr(0,4)=="titl")
			{
				imgObj=document.getElementById("img_"+childObj.id.slice(4));
				imgObj.src='/_layouts/images/plus.gif';
			}
			var groupID="tbod"+groupName;
			if (childObj.id.substr(0, groupID.length)==groupID)
			{
				if (noAjax)
				{
					for (var j=0; j < childObj.childNodes.length; j++)
					{
						var child=childObj.childNodes[j];
						child.style.display=displayStr;
					}
				}
				if (childObj.childNodes.length==0)
				{
					var nextTBody=childObj.nextSibling;
					if (nextTBody !=null && nextTBody.tagName=="TBODY" && nextTBody.id=="")
					{
						for (var j=0; j < nextTBody.childNodes.length; j++)
						{
							var child=nextTBody.childNodes[j];
							child.style.display=displayStr;
							if (typeof(FV4UI) !="undefined" && FV4UI())
							{
								HandleSingleGroupByRow(ctxCur, child, fOpen);
								UpdateSelectAllCbx(ctxCur, true);
							}
						}
					}
				}
			}
		}
	}
	EnsureScript("core.js", TypeofFullName('UpdateCtxLastSelectableRow'),
	function()
	{ULSA13:;
		if (typeof(FV4UI) !="undefined" && FV4UI())
			UpdateCtxLastSelectableRow(ctxCur, viewTable);
	});
	if (!noAjax && !g_ExpGroupParseStage)
	{
		if (g_ExpGroupNeedsState && ExpGroupFetchWebPartID(groupName) !=null)
		{
			if (fOpen)
			{
				AddGroupToCookie(groupName);
			}
			else
			{
				RemoveGroupFromCookie(groupName);
			}
		}
		if (fOpen)
		{
			tbody=document.getElementById("tbod"+groupName+"_");
			if (tbody !=null)
			{
				isLoaded=tbody.getAttribute("isLoaded");
				if (isLoaded=="false")
				{
					ExpGroupFetchData(groupName, evt);
				}
			}
		}
	}
}
function ExpGroupFetchData(groupName, evt)
{ULSA13:;
	var loadString="<tr><td colspan=\"100\" class=\"ms-gbload\">"+L_Loading_Text+"</td></tr>";
	ExpGroupRenderData(loadString, groupName, "false");
	if (!g_ExpGroupInProgress)
	{
		var groupString=ExpGroupFetchGroupString(groupName);
		if (groupString==null)
		{
			var loadString="<tr><td></td><td class=\"ms-gbload\">"+L_Loading_Error_Text+"</td></tr>";
			ExpGroupRenderData(loadString, groupName, "false");
			if (g_ExpGroupQueue.length > 0)
			{
				ExpGroupFetchData(g_ExpGroupQueue.shift());
			}
			return;
		}
		if (typeof(InitAllClvps)=="undefined" && evt !=null)
			g_ExpInitializing=true;
		else
		{
			g_ExpInitializing=false;
			g_ExpGroupInProgress=true;
		}
		if (!ExpGroupCallServer(groupString, groupName, evt))
		{
			if (g_ExpGroupQueue.length > 0 && evt==null)
			{
				ExpGroupFetchData(g_ExpGroupQueue.shift());
			}
		}
	}
	else
	{
		g_ExpGroupQueue.push(groupName);
	}
}
function ExpGroupCallServer(groupString, groupName, evt)
{ULSA13:;
	if (evt !=null)
	{
		if (evt=="PageLoad")
		{
			var obj=new Object();
			obj.fakeEvent=true;
			{ var defd; try { defd=typeof(inplview.ExpGroup); } catch (e) { defd='undefined'; } if (defd !='undefined') { inplview.ExpGroup(obj, groupName); } else { var str="inplview.ExpGroup"; var rg=str.split('.'); if (rg.length > 1) { var fnd=function () {ULSA13:; inplview.ExpGroup(obj, groupName); }; EnsureScript(rg[0], defd, fnd); } }};
		}
		else
			ExpGroup(evt, groupName);
	}
	else
	{
		var viewCounter=groupName.substring(0, groupName.indexOf("-"));
		var ctx=window["ctx"+viewCounter];
		var webPartID=ExpGroupFetchWebPartID(groupName);
		if (webPartID !=null)
		{
			var functionName="ExpGroupCallServer"+webPartID;
			if (ctx !=null && ctx.clvp !=null)
			{
				var strFilter=ctx.clvp.FilterString();
				if (strFilter !=null)
				{
					groupString+="|"+strFilter;
				}
			}
			var functionCall=functionName+"('"+groupString+"','"+groupName+"')";
			eval(functionCall);	
		}
	}
}
function ExpGroup(evt, groupName)
{ULSA13:;
	if (typeof(InitAllClvps) !='undefined')
	{
		{ var defd; try { defd=typeof(inplview.ExpGroup); } catch (e) { defd='undefined'; } if (defd !='undefined') { inplview.ExpGroup(evt, groupName); } else { var str="inplview.ExpGroup"; var rg=str.split('.'); if (rg.length > 1) { var fnd=function () {ULSA13:; inplview.ExpGroup(evt, groupName); }; EnsureScript(rg[0], defd, fnd); } }};
	}
	else
	{
		SodDispatchEvent("inplview", typeof(InitAllClvps), evt);
	}
}
function DoPagingCallback(webPartID, pagingParam)
{ULSA13:;
	if (webPartID !=null)
	{
	var functionName="DoPagingCallback"+webPartID;
		var functionCall=functionName+"('"+pagingParam+"')";
		eval(functionCall);
	}
}
function ExpGroupReceiveData(htmlToRender, groupName)
{ULSA13:;
	var ctxId="ctx"+groupName.substring(0, groupName.indexOf("-"));
	var indexBeginCTXName=htmlToRender.indexOf("CTXName=\"");
	if (indexBeginCTXName !=-1)
	{
		if (ctxId !="ctx1")
		{
			htmlToRender=htmlToRender.replace(/ CTXName=\"ctx1\" /g, " CTXName=\""+ctxId+"\" ");
		}
	}
	var needOuterWrap=false;
	if (htmlToRender.length < 4)
	{
		needOuterWrap=true;
	}
	else if (htmlToRender.substring(0,3) !="<tr")
	{
		needOuterWrap=true;
	}
	if (needOuterWrap)
	{
		htmlToRender="<TR><TD>"+htmlToRender+"</TD></TR>";
	}
	ExpGroupRenderData(htmlToRender, groupName, "true");
	ProcessImn();
	g_ExpGroupInProgress=false;
	if (g_ExpGroupQueue.length > 0)
	{
		ExpGroupFetchData(g_ExpGroupQueue.shift());
	}
}
function ExpGroupRenderData(htmlToRender, groupName, isLoaded)
{ULSA13:;
	var tbody=document.getElementById("tbod"+groupName+"_");
	var wrapDiv=document.createElement("DIV");
	var rg=groupName.split("-");
	wrapDiv.innerHTML="<TABLE><TBODY id=\"tbod"+			groupName+"_\" isLoaded=\""+isLoaded+			"\">"+htmlToRender+"</TBODY></TABLE>";
	tbody.parentNode.replaceChild(wrapDiv.firstChild.firstChild,tbody);
}
function ExpGroupFetchGroupString(groupName)
{ULSA13:;
	titlTbody=document.getElementById("titl"+groupName);
	if (titlTbody==null)
	{
		return null;
	}
	else
	{
		var groupString=titlTbody.getAttribute("groupString");
		return groupString;
	}
}
function ExpGroupFetchWebPartID(groupName)
{ULSA13:;
	var viewCounter=groupName.substring(0, groupName.indexOf("-"));
	var lookupEntry=document.getElementById("GroupByWebPartID"+viewCounter);
	if (lookupEntry==null)
		return null;
	return lookupEntry.getAttribute("webPartID");
}
function RenderActiveX(str)
{ULSA13:;
	document.write(str);
}
function OnItem(elm)
{ULSA13:;
	DeferCall('OnItemDeferCall', elm);
}
function OnChildItem(elm)
{ULSA13:;
	var i;
	for (i=0; i < elm.childNodes.length; i++)
	{
		var child=elm.childNodes[i];
		if (child.nodeType==1 && child.tagName=="TABLE" && child.getAttribute("NameOrTitle"))
			break;
		if (child.nodeType==1 && child.tagName=="DIV" && child.style.display !="none" && child.style.visibility !="hidden")
		{
			OnItem(child);
			break;
		}
	}
}
function OnLink(elm)
{ULSA13:;
	DeferCall('OnLinkDeferCall', elm);
}
function MMU_PopMenuIfShowing(menuElement)
{ULSA13:;
	DeferCall('MMU_PopMenuIfShowingDeferCall', menuElement);
}
function OnMouseOverFilter(elm)
{ULSA13:;
	DeferCall('OnMouseOverFilterDeferCall', elm);
}
function OnChildColumn(elm)
{ULSA13:;
	var i;
	for (i=0; i < elm.childNodes.length; i++)
	{
		var child=elm.childNodes[i];
		if (child.nodeType==1 && child.tagName=="DIV" && child.getAttribute("CtxNum") !=null)
		{
			OnMouseOverFilter(child);
			break;
		}
	}
}
function MMU_EcbTableMouseOverOut(ecbTable, fMouseOver)
{ULSA13:;
	DeferCall('MMU_EcbTableMouseOverOutDeferCall', ecbTable, fMouseOver);
}
function OnMouseOverAdHocFilter(elm, fieldStr)
{ULSA13:;
	DeferCall('OnMouseOverAdHocFilterDeferCall', elm, fieldStr);
}
function MMU_EcbLinkOnFocusBlur(menu, ecbLink, fOnFocus)
{ULSA13:;
	DeferCall('MMU_EcbLinkOnFocusBlurDeferCall', menu, ecbLink, fOnFocus);
}
function GetElementByClassName(elem, classname) {ULSA13:;
	if(elem.className) {
		if(elem.className.indexOf(classname) > -1)
			return elem;
	}
	var temp;
	for(var i=0; i<elem.childNodes.length; i++) {
		temp=GetElementByClassName(elem.childNodes[i], classname);
		if(temp !=null)
			return temp;
	}
	return null;
}
function AddWhiteBG() {ULSA13:;
	if(searcharea.className.indexOf(" "+whitebgclass)==-1) {
		var cn=searcharea.className.trim()+" "+whitebgclass;
		cn=cn.trim();
		searcharea.className=cn;
	}
}
function RemoveWhiteBG() {ULSA13:;
	if(locked)
		return;
	searcharea.className=searcharea.className.replace(" "+whitebgclass, "");
}
var locked=false;
function LockBG() {ULSA13:;
	locked=!locked;
	if(locked)
		AddWhiteBG();
	else
		RemoveWhiteBG();
}
var searcharea;
var searchbox;
var searchimage;
var whitebgclass;
function InitSearchBoxStyleEvents(sarea, sbox, simage_class, wbgclass)
{ULSA13:;
	searcharea=document.getElementById(sarea);
	searchbox=document.getElementById(sbox);
	searchimage=GetElementByClassName(searcharea, simage_class);
	whitebgclass=wbgclass;
	if (searchbox==null || searchimage==null)
		return;
	searchbox.onfocus=LockBG;
	searchbox.onmouseover=AddWhiteBG;
	searchbox.onblur=LockBG;
	searchbox.onmouseout=RemoveWhiteBG;
	searchimage.onmouseover=AddWhiteBG;
	searchimage.onmouseout=RemoveWhiteBG;
}
function IsFullNameDefined(fullName)
{ULSA13:;
	if (!fullName)
	{
		return false;
	}
	var names=fullName.split(".");
	var len=names.length;
	var obj=window;
	for (var i=0; i < len; i++)
	{
		obj=obj[names[i]];
		if (typeof(obj)=="undefined")
		{
			return false;
		}
	}
	return true;
}
function TypeofFullName(fullName)
{ULSA13:;
	if (!fullName)
	{
		return "undefined";
	}
	var names=fullName.split(".");
	var len=names.length;
	var obj=window;
	for (var i=0; i < len; i++)
	{
		obj=obj[names[i]];
		if (typeof(obj)=="undefined")
		{
			return "undefined";
		}
	}
	return typeof(obj);
}
var _v_dictSod=[];
var Sods={
	missing: 1,
	loading: 2,
	pending: 3,
	loaded: 4
};
var _v_qsod=[];
var _v_sodctx={"document" : document, "window" : window};
function Sod(url)
{ULSA13:;
	this.url=url;
	this.loaded=false;
	this.depkeys=null;
	this.state=Sods.missing;
	this.qfn=null;
}
function RegisterSod(key, url)
{ULSA13:;
	key=NormalizeSodKey(key);
	var sod=new Sod(url);
	_v_dictSod[key]=sod;
}
function RegisterSodDep(key, dep)
{ULSA13:;
	key=NormalizeSodKey(key);
	var sod=_v_dictSod[key];
	if (sod==null)
		return;
	if (sod.depkeys==null)
		sod.depkeys=[];
	sod.depkeys.push(dep);
}
function LoadSodByKey(key, fn)
{ULSA13:;
	var sod=_v_dictSod[key];
	if (fn !=null && sod !=null)
	{
		if (sod.qfn==null)
			sod.qfn=[];
		sod.qfn.push(fn);
	}
	return LoadSod(sod);
}
function LoadSod(sod)
{ULSA13:;
	if (sod==null)
		return Sods.missing;
	if (sod.state==Sods.loaded || sod.state==Sods.loading)
	{
		return sod.state;
	}
	sod.state=Sods.pending;
	var mll=[];
	if (sod.depkeys !=null)
	{
		var i;
		var fDepLoaded=true;
		var am=sod.depkeys.length;
		for (i=0; i < am; i++)
		{
			var sodDep=_v_dictSod[sod.depkeys[i]];
			if (sodDep==null)
				continue;
			if (sodDep.state !=Sods.loaded)
			{
				fDepLoaded=false;
				mll.push(sodDep);
			}
		}
		if (!fDepLoaded)
		{
			_v_qsod.push(sod);
			am=mll.length;
			for (i=0; i < am; i++)
			{
				var sodDep=mll[i];
				if (sodDep.state !=Sods.loaded && sodDep.state !=Sods.loading)
					LoadSod(sodDep);
			}
			return sod.state;
		}
	}
	if (sod.state==Sods.loaded || sod.state==Sods.loading)
	{
		return sod.state;
	}
	sod.state=Sods.loading;
	var s=document.createElement("SCRIPT");
	s.type="text/javascript";
	s.src=sod.url;
	var fn=GetOnLoad(sod, s);
	if (browseris.ie)
		s.onreadystatechange=fn;
	else
		s.onload=fn;
	document.getElementsByTagName("HEAD")[0].appendChild(s);
	return sod.state;
}
function GetOnLoad(sod, s)
{ULSA13:;
	var fn=function ()
	{ULSA13:;
		var floaded=false;
		if (typeof(s.readyState) !='undefined')
			floaded=s.readyState=="complete" || s.readyState=="loaded";
		else
			floaded=true;
		if (floaded)
		{
			s.onreadystatechange=null;
			s.onload=null;
			var sUrl=sod.url;
			var index=sUrl.lastIndexOf("/");
			if(index > -1)
				sUrl=sUrl.substr(index+1);
			index=sUrl.indexOf("?");
			if (index > -1)
				sUrl=sUrl.substr(0, index);
			sUrl=sUrl.toLowerCase();
			sUrl=sUrl.replace(".debug.js", ".js");
			var fn2=function()
			{ULSA13:;
				sod.state=Sods.loaded;
				while (_v_qsod.length > 0)
				{
					var sodParent=_v_qsod.pop();
					if (sodParent.state==Sods.pending)
					{
						LoadSod(sodParent);
						break;
					}
				}
				if (sod.qfn !=null)
				{
					while (sod.qfn.length > 0)
					{
						var fn3=sod.qfn.shift();
						fn3();
					}
				}
			};
			if (sUrl.indexOf(".js") > 0)
			{
				ExecuteOrDelayUntilScriptLoaded(fn2, sUrl);
			}
			else
			{
				fn2();
			}
		}
	};
	return fn;
}
function EnsureScript(key, typ, fn)
{ULSA13:;
	if (typ !='undefined')
	{
		if (fn !=null)
			fn();
		return true;
	}
	key=NormalizeSodKey(key);
	LoadSodByKey(key, fn);
	return false;
}
function EnsureScriptFunc(key, typ, fn)
{ULSA13:;
	EnsureScript(key, TypeofFullName(typ), fn);
}
function EnsureScriptParams()
{ULSA13:;
	if (arguments.length < 2)
	{
		return;
	}
	var args=arguments;
	var key=Array.prototype.shift.call(args);
	var func=Array.prototype.shift.call(args);
	var fn=function() {ULSA13:;
		var fParts=func.split(".");
		var funcRef=window;
		for (var i=0, len=fParts.length; i<len; i++)
		{
			funcRef=funcRef[fParts[i]];
		}
		funcRef.apply(null, args);
	}
	EnsureScriptFunc(key, func, fn);
}
function NormalizeSodKey(key)
{ULSA13:;
	var lowerCaseKey=key.toLowerCase();
	var lckl=lowerCaseKey.length;
	if (lckl >=3 && ".js"==lowerCaseKey.substr(lckl - 3))
	{
		key=lowerCaseKey;
	}
	else if (lowerCaseKey.indexOf(".resx") > 0)
	{
		var index=lowerCaseKey.indexOf(".resx");
		key=key.substr(0, index+5).toLowerCase()+key.substr(index+5);
	}
	return key;
}
function SodCloneEvent(evt)
{ULSA13:;
	var e;
	if (browseris.ie)
	{
		e=document.createEventObject(evt);
	}
	else
	{
		e=document.createEvent("MouseEvents");
		e.initMouseEvent("click", true, true, window,
		   0, 0, 0, 0, 0, false, false, false, false, 0, null);
	}
	return e;
}
function SodDispatchEvent(key, typ, evt)
{ULSA13:;
	var e=SodCloneEvent(evt);
	var fn;
	if (browseris.ie)
	{
		fn=function() {ULSA13:; e.srcElement.fireEvent("onclick", e); };
	}
	else
	{
		var t=evt.target;
		fn=function () {ULSA13:; t.dispatchEvent(e); };
	}
	if (!EnsureScript(key, typ, fn))
	{
		if (browseris.ie)
			evt.cancelBubble=true;
		else
			evt.stopPropagation();
	}
}
function AddTabHeadHandler(tid, fn)
{ULSA13:;
	var li=document.getElementById(tid);
	if (li !=null)
	{
		var a=li.getElementsByTagName('A')[0];
		AddEvtHandler(a, 'onclick', fn);
	}
}
function LoadWPAdderOnDemand()
{ULSA13:;
	if (typeof(loadWPAdderCallback)=='function')
	{
		{ var defd; try { defd=typeof(WPAdderClass.load); } catch (e) { defd='undefined'; } if (defd !='undefined') { WPAdderClass.load(loadWPAdderCallback); } else { var str="WPAdderClass.load"; var rg=str.split('.'); if (rg.length > 1) { var fnd=function () {ULSA13:; WPAdderClass.load(loadWPAdderCallback); }; EnsureScript(rg[0], defd, fnd); } }};
	}
}
function showSaveConflictDialog(lastModifiedUserId, continueStatusHtml, mergeChangesUrl, mergeChangesStatusHtml, discardScript, overwriteScript)
{ULSA13:;
	{ var defd; try { defd=typeof(ribbon.showSaveConflictDialog); } catch (e) { defd='undefined'; } if (defd !='undefined') { ribbon.showSaveConflictDialog(lastModifiedUserId, continueStatusHtml, mergeChangesUrl, mergeChangesStatusHtml, discardScript, overwriteScript); } else { var str="ribbon.showSaveConflictDialog"; var rg=str.split('.'); if (rg.length > 1) { var fnd=function () {ULSA13:; ribbon.showSaveConflictDialog(lastModifiedUserId, continueStatusHtml, mergeChangesUrl, mergeChangesStatusHtml, discardScript, overwriteScript); }; EnsureScript(rg[0], defd, fnd); } }};
}
function ClkElmt(e)
{ULSA13:;
	if (browseris.ie)
		e.click();
	else
		FFClick(e);
}
function EnsureSelectionHandlerOnFocus(evt, cbx, ctxNum)
{ULSA13:;
	DeferCall("EnsureSelectionHandlerOnFocusDeferred", evt, cbx, ctxNum);
}
function EnsureSelectionHandler(evt, tab, ctxNum)
{ULSA13:;
	DeferCall("EnsureSelectionHandlerDeferred", evt, tab, ctxNum);
}
function StopEvt(evt)
{ULSA13:;
	if (!browseris.ie)
		evt.stopPropagation();
}
function FFGetElementsById(doc, tabId)
{ULSA13:;
	var rg=new Array();
	var ele=doc.getElementById(tabId);
	while (ele !=null)
	{
		rg.push(ele);
		ele.id="";
		ele=doc.getElementById(tabId);
	}
	var i;
	for (i=0; i < rg.length; i++)
	{
		rg[i].id=tabId;
	}
	return rg;
}
function GetElementsByName(str)
{ULSA13:;
	var rg=document.getElementsByName(str);
	if (rg.length==0 && window.XMLHttpRequest )
	{
		rg=FFGetElementsById(document, str);
	}
	return rg;
}
function AddEvtHandler(ele, strEvt, func)
{ULSA13:;
	if (browseris.ie)
		ele.attachEvent(strEvt, func);
	else
		ele.addEventListener(strEvt.substr(2), func, false);
}
function HideListViewRows(sid)
{ULSA13:;
	var t=document.getElementById(sid);
	if (t==null)
		return;
	resetSelectAllCbx(t);
	var strHash=window.location.hash;
	if (strHash.length <=56 || strHash.indexOf("InplviewHash=") !=1)
		return;
	strHash=strHash.substr(14, 42);
	strHash=strHash.replace(/--/g, "-");
	if (sid.length==77)
		sid=sid.substr(39);
	else
	{
		var ctxId;
		var ctx;
		if (sid.indexOf("onetidDoclibViewTbl") !=0)
			return;
		sid=sid.substr(19);
		if (sid=='0')
		{
			if (t.className.indexOf("ms-emptyView") >=0)
				return;
			for (ctxId in g_ctxDict)
			{
				ctx=g_ctxDict[ctxId];
				sid=ctx.view;
				break;
			}
		}
		else
		{
			ctx=g_ctxDict['ctx'+sid];
			sid=ctx.view;
		}
	}
	if (strHash !=sid)
		return;
	if (t.className.length > 0)
		t.className+=" s4-hide-tr";
	else
		t.className="s4-hide-tr";
}
function resetSelectAllCbx(tab)
{ULSA13:;
	var selectAllCbx=getSelectAllCbxFromTable(tab);
	if (selectAllCbx)
		selectAllCbx.checked=false;
}
function getSelectAllCbxFromTable(tab)
{ULSA13:;
	if (tab==null)
		return null;
	var rows=tab.rows;
	if (rows && rows.length > 0)
	{
		var headerRow=rows[0];
		if (!headerRow.className.indexOf("ms-viewheadertr"))
		{
			var cells=headerRow.cells;
			if (cells.length > 0)
			{
				var cbx=cells[0].getElementsByTagName("INPUT")[0];
				if (cbx)
					return cbx;
			}
		}
	}
	return null;
}
function WpClick(evt)
{ULSA13:;
	var s=GetEventSrcElement(evt);
	var p=s;
	while (p !=null && (p.className==null || p.className.indexOf('s4-wpcell') < 0))
	{
		if (p.tagName=='A')
			return;
		if (p.tagName=='DIV' && p.className !=null && p.className.indexOf('s4-ctx') !=-1)
			return;
		if (p.tagName=='TH' && p.className !=null && p.className.indexOf('ms-vh2') !=-1)
			return;
		p=p.parentNode;
	}
	if (typeof(ChevronContainer) !="undefined" && ChevronContainer !=null)
	{
		RemoveCtxImg(ChevronContainer);
	}
	if (p !=null)
	{
		{ var defd; try { defd=typeof(ribbon.SelectWp); } catch (e) { defd='undefined'; } if (defd !='undefined') { ribbon.SelectWp(p); } else { var str="ribbon.SelectWp"; var rg=str.split('.'); if (rg.length > 1) { var fnd=function () {ULSA13:; ribbon.SelectWp(p); }; EnsureScript(rg[0], defd, fnd); } }};
	}
}
function WpKeyUp(evt)
{ULSA13:;
	var focusElt=GetEventSrcElement(evt);
	if (evt.keyCode==32 && focusElt && focusElt.tagName=="INPUT" &&
		  (HasCssClass(focusElt, "s4-selectAllCbx") || HasCssClass(focusElt, "s4-itm-cbx")))
		WpClick(evt);
}
function WzClick(evt, zid)
{ULSA13:;
	var s=GetEventSrcElement(evt);
	var p=s;
	while (p !=null)
	{
		var z=p.getAttribute("ZoneID");
		if (z==zid)
			break;
		if (p.tagName=='A')
			return;
		p=p.parentNode;
	}
	if (p !=null)
	{
		{ var defd; try { defd=typeof(ribbon.SelectWz); } catch (e) { defd='undefined'; } if (defd !='undefined') { ribbon.SelectWz(p, zid); } else { var str="ribbon.SelectWz"; var rg=str.split('.'); if (rg.length > 1) { var fnd=function () {ULSA13:; ribbon.SelectWz(p, zid); }; EnsureScript(rg[0], defd, fnd); } }};
	}
}
function WpCbxSelect(evt)
{ULSA13:;
	var cbx=GetEventSrcElement(evt);
	var currentlySelected=cbx.checked;
	if (!currentlySelected)
		WpClick(evt);
	else
		{ var defd; try { defd=typeof(ribbon.DeselectWpWz); } catch (e) { defd='undefined'; } if (defd !='undefined') { ribbon.DeselectWpWz(); } else { var str="ribbon.DeselectWpWz"; var rg=str.split('.'); if (rg.length > 1) { var fnd=function () {ULSA13:; ribbon.DeselectWpWz(); }; EnsureScript(rg[0], defd, fnd); } }};
	TrapMenuClick(evt);
	if (evt.type !="keyup")
		cbx.className="ms-WPHeaderCbxHidden";
}
function WpCbxKeyHandler(evt)
{ULSA13:;
	var kCode;
	if (browseris.ie)
		kCode=evt.keyCode;
	else
		kCode=evt.which;
	if (kCode==13)
		WpCbxSelect(evt);
}
function PopoutMenuMaybeSwapImage(anchorId, iconId, src)
{ULSA13:;
	var anchor=document.getElementById(anchorId);
	if(anchor && typeof(anchor) !='undefined')
	{
		if(anchor.rel=='_spPopoutMenuIsOpen')
			return;
		SwapImage(iconId, src);
	}
}
function PopoutMenuMaybeSwapImageClustered(anchorId, iconId, src, x, y, height, width)
{ULSA13:;
	var anchor=document.getElementById(anchorId);
	if(anchor && typeof(anchor) !='undefined')
	{
		if(anchor.rel=='_spPopoutMenuIsOpen')
			return;
		var span=document.getElementById(iconId);
		var img=span.firstChild;
		SwapImageInternal(img, src);
		span.style.height=height+"px";
		span.style.width=width+"px";
		img.style.top="-"+y+"px";
		img.style.left="-"+x+"px";
	}
}
function SwapImage(id, src)
{ULSA13:;
	var img=document.getElementById(id);
	SwapImageInternal(img, src);
}
function SwapImageInternal(img, src)
{ULSA13:;
	if(img && typeof(img) !='undefined')
		img.src=src;
}
function GetViewportHeight()
{ULSA13:;
	if(typeof(window.innerHeight) !='undefined')
		viewportHeight=window.innerHeight;
	else
		viewportHeight=document.documentElement.clientHeight;
	return viewportHeight;
}
function GetViewportWidth()
{ULSA13:;
	if(typeof(window.innerWidth) !='undefined')
		viewportWidth=window.innerWidth;
	else
		viewportWidth=document.documentElement.clientWidth;
	return viewportWidth;
}
var g_viewportHeight=null, g_viewportWidth=null, g_wpadderHeight=0, g_setWidth, g_setWidthInited=false, g_workspaceResizedHandlers=[], g_setScrollPos=false;
var g_frl=false;
function FixRibbonAndWorkspaceDimensionsForResize()
{ULSA13:;
	if(g_frl)
		return;
	var vph=GetViewportHeight();
	var vpw=GetViewportWidth();
	if(g_viewportHeight==vph
		&& g_viewportWidth==vpw)
	{
		return;
	}
	g_viewportHeight=vph;
	g_viewportWidth=vpw;
	window.setTimeout(FixRibbonAndWorkspaceDimensions, 0);
}
function FixRibbonAndWorkspaceDimensions()
{ULSA13:;
	g_frl=true;
	var elmRibbon=GetCachedElement("s4-ribbonrow");
	var elmWorkspace=GetCachedElement("s4-workspace");
	var elmTitleArea=GetCachedElement("s4-titlerow");
	var elmBodyTable=GetCachedElement("s4-bodyContainer");
	if(!elmRibbon ||
	   !elmWorkspace ||
	   !elmBodyTable)
	{
		return;
	}
	if(!g_setWidthInited)
	{
		var setWidth=true;
		if(elmWorkspace.className.indexOf("s4-nosetwidth") > -1)
			setWidth=false;
		g_setWidth=setWidth;
		g_setWidthInited=true;
	}
	else
	{
		var setWidth=g_setWidth;
	}
	var baseRibbonHeight=RibbonIsMinimized() ? 44 : 135;
	var ribbonHeight=baseRibbonHeight+g_wpadderHeight;
	if (GetCurrentEltStyle(elmRibbon, "visibility")=="hidden")
	{
		ribbonHeight=0;
	}
	elmRibbon.style.height=ribbonHeight+"px";
	var vph=g_viewportHeight;
	if (null===vph)
	{
		vph=GetViewportHeight();
		g_viewportHeight=vph;
	}
	var newWorkspaceHeight=vph - elmRibbon.offsetHeight - AbsTop(elmRibbon);
	if(newWorkspaceHeight < 0)
		newWorkspaceHeight=0;
	elmWorkspace.style.height=newWorkspaceHeight+"px";
	if(setWidth)
	{
		elmWorkspace.style.width=document.documentElement.clientWidth+"px";
		if(elmBodyTable.offsetWidth < elmWorkspace.clientWidth)
			elmBodyTable.style.width=elmWorkspace.clientWidth+"px";
		if(elmTitleArea)
		{
			elmTitleArea.style.width=Math.max(elmBodyTable.offsetWidth - 1, 0)+"px";
			elmTitleArea.className+=" ms-titlerowborder";
		}
	}
	var isIE7=browseris.ie && browseris.iever==7 && !browseris.ie8standard;
	if (!g_setScrollPos)
	{
		if (browseris.firefox && browseris.firefox36up)
			window.scroll(0,0);
		if (window.location.search.match("[?&]IsDlg=1"))
		{
			if (!isIE7  || elmWorkspace.scrollHeight < elmWorkspace.clientHeight)
				elmWorkspace.style.overflowY="auto";
		}
		var scrollElem=document.getElementById("_maintainWorkspaceScrollPosition");
		if (scrollElem !=null && scrollElem.value !=null)
		{
			elmWorkspace.scrollTop=scrollElem.value;
		}
		g_setScrollPos=true;
	}
	var handlers=[].concat(g_workspaceResizedHandlers);
	for (var i=0, wLen=handlers.length; i<wLen; i++)
	{
		handlers[i]();
	}
	g_frl=false;
}
function RibbonIsMinimized()
{ULSA13:;
	if (g_spribbon.isInited)
	{
		return g_spribbon.isMinimized;
	}
	else
	{
		if (typeof(_ribbon)=="undefined" || null===_ribbon)
			return true;
		else
			return _ribbon.buildMinimized;
	}
}
var g_spribbon=new Object();
g_spribbon.isMinimized=true;
g_spribbon.isInited=false;
g_spribbon.minimizedHeight="44px";
g_spribbon.maximizedHeight="135px";
function OnRibbonMinimizedChanged(ribbonMinimized)
{ULSA13:;
	var ribbonElement=GetCachedElement("s4-ribbonrow");
	var titleElement=GetCachedElement("s4-titlerow");
	if (ribbonElement)
	{
		ribbonElement.className=ribbonElement.className.replace("s4-ribbonrowhidetitle", "");
		if(titleElement)
		{
			titleElement.className=titleElement.className.replace("s4-titlerowhidetitle", "");
			if (ribbonMinimized)
			{
				titleElement.style.display="block";
			}
			else
			{
				titleElement.style.display="none";
			}
		}
	}
	var wasInited=g_spribbon.isInited;
	g_spribbon.isInited=true;
	var lastState=g_spribbon.isMinimized;
	g_spribbon.isMinimized=ribbonMinimized;
	if (lastState !=ribbonMinimized || !wasInited)
		FixRibbonAndWorkspaceDimensions();
}
function setInnerText(elem, text)
{ULSA13:;
	var doc=elem.ownerDocument;
	if (doc.createTextNode)
	{
		var textNode=doc.createTextNode(text);
		elem.innerHTML='';
		elem.appendChild(textNode);
	}
	else
	{
		elem.innerText=text;
	}
}
function setInnerText(elem, text)
{ULSA13:;
	var doc=elem.ownerDocument;
	if (doc.createTextNode)
	{
		var textNode=doc.createTextNode(text);
		elem.innerHTML='';
		elem.appendChild(textNode);
	}
	else
	{
		elem.innerText=text;
	}
}
function CatchCreateError(strIgnore1, strIgnore2, strIgnore3)
{ULSA13:;
	return true;
}
if (typeof(ExpandBody)=="undefined")
{
	var preventSafariParseError=true;	
	function ExpandBody(guid, anchor)
	{ULSA13:;
		var frm=document.forms[MSOWebPartPageFormName];
		frm.CAML_Expand.value=frm.CAML_Expand.value.concat(guid);
		frm.action=frm.action.concat("#"+anchor);
		frm.submit();
		return false;
	}
}
if (typeof(CollapseBody)=="undefined")
{
	var preventSafariParseError=true;
	function CollapseBody(guid, anchor)
	{ULSA13:;
		var frm=document.forms[MSOWebPartPageFormName];
		var reg=new RegExp("\{", "g");
		guid=guid.replace(reg, "\\\{");
		reg=new RegExp("\}", "g");
		guid=guid.replace(reg, "\\\}");
		reg=new RegExp(guid, "g");
		frm.CAML_Expand.value=frm.CAML_Expand.value.replace(reg, "");
		frm.CAML_ShowOriginalEmailBody.value=			frm.CAML_ShowOriginalEmailBody.value.replace(reg, "");
		frm.action=frm.action.concat("#"+anchor);
		frm.submit();
		return false;
	}
}
if (typeof(ShowQuotedText)=="undefined")
{
	var preventSafariParseError=true;
	function ShowQuotedText(guid, anchor)
	{ULSA13:;
		var frm=document.forms[MSOWebPartPageFormName];
		frm.CAML_ShowOriginalEmailBody.value=			frm.CAML_ShowOriginalEmailBody.value.concat(guid);
		if (frm.action.indexOf("#") > 0)
		{
			frm.action=frm.action.substr(0, frm.action.indexOf("#"));
		}
		frm.action=frm.action.concat("#"+anchor);
		frm.submit();
		return false;
	}
}
if (typeof(HideQuotedText)=="undefined")
{
	var preventSafariParseError=true;
	function HideQuotedText(guid, anchor)
	{ULSA13:;
		var frm=document.forms[MSOWebPartPageFormName];
		var reg=new RegExp("\{", "g");
		guid=guid.replace(reg, "\\\{");
		reg=new RegExp("\}", "g");
		guid=guid.replace(reg, "\\\}");
		reg=new RegExp(guid, "g");
		frm.CAML_ShowOriginalEmailBody.value=			frm.CAML_ShowOriginalEmailBody.value.replace(reg, "");
		if (frm.action.indexOf("#") > 0)
		{
			frm.action=frm.action.substr(0, frm.action.indexOf("#"));
		}
		frm.action=frm.action.concat("#"+anchor);
		frm.submit();
		return false;
	}
}
function GetSelectedItemsDict(ctx)
{ULSA13:;
	if (ctx !=null && ctx.dictSel !=null)
	{
		return ctx.dictSel;
	}
	return null;
}
function RemoveOnlyPagingArgs(strUrl)
{ULSA13:;
	var rePagedFlag=/&*Paged=TRUE/gi;
	strUrl=strUrl.replace(rePagedFlag, "");
	var rePagedPrevFlag=/&*PagedPrev=TRUE/gi;
	strUrl=strUrl.replace(rePagedPrevFlag, "");
	var rePagedArgs=/&p_[^&]*/gi;
	strUrl=strUrl.replace(rePagedArgs, "");
	var rePagedRow=/&PageFirstRow=[^&]*/gi;
	strUrl=strUrl.replace(rePagedRow, "");
	var rePagedLastRow=/&PageLastRow=[^&]*/gi;
	strUrl=strUrl.replace(rePagedLastRow, "");
	return strUrl;
}
function RemovePagingArgs(strUrl)
{ULSA13:;
	strUrl=RemoveOnlyPagingArgs(strUrl);
	var reFilter1=/\?Filter=1&*/gi;
	strUrl=strUrl.replace(reFilter1, "?");
	var reFilter2=/&Filter=1/gi;
	strUrl=strUrl.replace(reFilter2, "");
	var reOrphanedQMark=/\?$/;
	strUrl=strUrl.replace(reOrphanedQMark, "");
	return strUrl;
}
var v_stsOpenDoc2=null;
var v_strStsOpenDoc2=null;
function StsOpenEnsureEx2(szProgId)
{ULSA13:;
	if (v_stsOpenDoc2==null || v_strStsOpenDoc2 !=szProgId)
	{
	 v_stsOpenDoc2=null;
	 v_strStsOpenDoc2=null;
	 if (window.ActiveXObject)
		{
			try
			{
				v_stsOpenDoc2=new ActiveXObject(szProgId);
				v_strStsOpenDoc2=szProgId;
			}
			catch(e)
			{
				v_stsOpenDoc2=null;
				v_strStsOpenDoc2=null;
			};
		}
		else if (IsSupportedMacBrowser() && szProgId.indexOf("SharePoint.OpenDocuments") >=0)
		{
			var plugin=CreateMacPlugin();
			if (plugin !=null)
			{
				v_stsOpenDoc2=plugin;
				v_strStsOpenDoc2="SharePoint.MacPlugin";
			}
		}
		else if (IsSupportedFirefoxOnWin() && szProgId.indexOf("SharePoint.OpenDocuments") >=0)
		{
			var plugin=CreateFirefoxOnWindowsPlugin();
			if 	(plugin !=null)
			{
				v_stsOpenDoc2=plugin;
				v_strStsOpenDoc2="SharePoint.FFWinPlugin";
			}
		}
	}
	return v_stsOpenDoc2;
}
function StURLSetVar2(stURL, stVar, stValue)
{ULSA13:;
	var stNewSet=stVar+"="+stValue;
	var curl=new CUrl(stURL);
	var stURL=curl.query;
	var ichQ=stURL.indexOf("?");
	if (ichQ !=-1)
	{
		var ich=stURL.indexOf("?"+stVar+"=", ichQ);
		if (ich==-1)
		{
			ich=stURL.indexOf("&"+stVar+"=", ichQ);
			if (ich !=-1)
				stNewSet="&"+stNewSet;
		}
		else
		{
			stNewSet="?"+stNewSet;
		}
		if (ich !=-1)
		{
			var re=new RegExp("[&?]"+stVar+"=[^&]*", "");
			stURL=stURL.replace(re, stNewSet);
		}
		else
		{
			stURL=stURL+"&"+stNewSet;
		}
	}
	else
	{
		stURL=stURL+"?"+stNewSet;
	}
	curl.query=stURL;
	return curl.ToString();
}
function CUrl(strUrl)
{ULSA13:;
	var ichQ=strUrl.indexOf('?');
	var ichHash=strUrl.indexOf('#');
	if (ichHash >=0 && ichHash < ichQ)
		ichHash=-1;
	this.path=strUrl;
	this.query='';
	this.hash='';
	if (ichQ >=0)
	{
		this.path=strUrl.substr(0, ichQ);
		if (ichHash >=ichQ)
			this.query=strUrl.substr(ichQ, ichHash - ichQ);
		else
			this.query=strUrl.substr(ichQ);
	}
	if (ichHash >=0)
	{
		if (ichQ < 0)
			this.path=strUrl.substr(0, ichHash);
		this.hash=strUrl.substr(ichHash);
	}
}
CUrl.prototype.ToString=CUrlToString;
function CUrlToString()
{ULSA13:;
	var s=this.path+this.query+this.hash;
	return s;
}
function RemoveQueryParameterFromUrl(stURL, stParameterName)
{ULSA13:;
	var re=new RegExp("[&?]"+stParameterName+"=[^&]*", "");
	stURL=stURL.replace(re, "");
	if (stURL.indexOf("?")==-1)
	{
		var ich=stURL.indexOf("&");
		if (ich !=-1)
			stURL=stURL.substring(0, ich)+"?"+stURL.substring(ich+1);
	}
	return stURL;
}
function HasValidUrlPrefix(url)
{ULSA13:;
	var urlLower=url.toLowerCase();
	if (-1==urlLower.search("^http://") &&
		-1==urlLower.search("^https://"))
		return false;
	return true;
}
function AbsLeft(obj)
{ULSA13:;
	var x=obj.offsetLeft;
	var parent=obj.offsetParent;
	while (parent !=null && parent.tagName !="BODY")
	{
		x+=parent.offsetLeft;
		parent=parent.offsetParent;
	}
	if (parent !=null)
		x+=parent.offsetLeft;
	return x;
}
function AbsTop(obj)
{ULSA13:;
	var y=obj.offsetTop;
	var parent=obj.offsetParent;
	while (parent !=null && parent.tagName !="BODY")
	{
		y+=parent.offsetTop;
		parent=parent.offsetParent;
	}
	if (parent !=null)
		y+=parent.offsetTop;
	return y;
}
var deleteInstance=0;
function DeleteItemConfirmation()
{ULSA13:;
	var message="";
	if (typeof(ItemIsCopy) !="undefined")
		if (ItemIsCopy)
			message=L_NotifyThisIsCopy_Text;
	if (cascadeDeleteWarningMessage !="")
	{
		message+=cascadeDeleteWarningMessage;
	}
	if (recycleBinEnabled==1 && deleteInstance !=1)
		message+=L_STSRecycleConfirm_Text;
	else
		message+=L_STSDelConfirm_Text;
	return confirm(message);
}
function DeleteInstanceConfirmation()
{ULSA13:;
	deleteInstance=1;
	return DeleteItemConfirmation()
}
function CancelMultiPageConfirmation(redirectUrl)
{ULSA13:;
	var L_DeletePartialResponse1_text="Se ha guardado una respuesta de encuesta parcial. Haga clic en Aceptar para eliminar la respuesta de encuesta parcial. Si desea continuar con esta encuesta más adelante, haga clic en Cancelar. Su respuesta parcial se encuentra en la vista de encuesta Todas las respuestas.\n\n¿Desea enviar la respuesta parcial a la Papelera de reciclaje del sitio?";
	var L_DeletePartialResponse2_text="Se ha guardado una respuesta de encuesta parcial. Haga clic en Aceptar para eliminar la respuesta de encuesta parcial. Si desea continuar con esta encuesta más adelante, haga clic en Cancelar. Su respuesta parcial se encuentra en la vista de encuestas Todas las respuestas.\n\n¿Desea eliminar la respuesta parcial?";
	var message="";
	if (recycleBinEnabled==1)
		message=L_DeletePartialResponse1_text;
	else
		message=L_DeletePartialResponse2_text;
	if (confirm(message)==true)
		return true;
	else
		STSNavigate(redirectUrl);
	return false;
}
function RestoreItemVersionConfirmation()
{ULSA13:;
	var L_Version_Restore_Confirm_Text="Va a reemplazar la versión actual por la versión seleccionada.";
	var message=L_Version_Restore_Confirm_Text;
	return confirm(message);
}
function DeleteItemVersionConfirmation(bRecycleBinEnabled)
{ULSA13:;
	var L_Version_Delete_Confirm_Text="¿Confirma que desea eliminar esta versión?";
	var L_Version_Recycle_Confirm_Text="¿Está seguro de que desea enviar esta versión a la Papelera de reciclaje del sitio?";
	if (bRecycleBinEnabled)
		return confirm(L_Version_Recycle_Confirm_Text);
	else
		return confirm(L_Version_Delete_Confirm_Text);
}
function DeleteUserInfoItemConfirmation()
{ULSA13:;
	var L_User_Delete_Confirm_Text="Va a eliminar este usuario.";
	var message=L_User_Delete_Confirm_Text;
	return confirm(message);
}
function UnlinkCopyConfirmation(strItemUrl)
{ULSA13:;
	return confirm(L_ConfirmUnlinkCopy_Text);
}
function SupportsNavigateHttpFolder()
{ULSA13:;
	return (browseris.ie5up && browseris.win32);
}
function MtgDeletePageConfirm()
{ULSA13:;
	var L_DeleteGlobalConfirm_Text="Esta página se va a eliminar de todas las reuniones asociadas a esta área.  ";
	var L_DeleteConfirm_Text="¿Confirma que desea eliminar esta página?";
	var text;
	if (document.getElementById("MtgTlPart_PageType").value=='MtgTlPart_LocalPage')
		text=L_DeleteConfirm_Text;
	else
		text=L_DeleteGlobalConfirm_Text+L_DeleteConfirm_Text;
	return confirm(text);
}
function IsImgLibJssLoaded()
{ULSA13:;
	if (typeof(fImglibJssLoaded) !="undefined")
		return fImglibJssLoaded;
	return false;
}
function GetFirstChildElement(e)
{ULSA13:;
	for (var i=0; i < e.childNodes.length; i++)
	{
		if (e.childNodes[i].nodeType==1)
			return e.childNodes[i];
	}
	return null;
}
function TestGCObject( GCObject )
{ULSA13:;
	if (((browseris.ie55up) && (typeof(GCObject)=="undefined")) || (GCObject==null) || (GCObject.object==null))
		return false;
	return true;
}
function MMU_GetMenuFromClientId(clientId)
{ULSA13:;
	return document.getElementById(clientId);
}
function MMU_EcbLinkOnKeyDown(menu, ecbLink, e)
{ULSA13:;
	if (e==null)
	{
		e=window.event;
		if (e==null)
			return;
	}
	var hasHref=((ecbLink.href !=null) && (ecbLink.href.length > 0));
	if (((e.shiftKey || !hasHref) && (GetEventKeyCode(e)==13)) || ((e.altKey) && (GetEventKeyCode(e)==40)))
	{
		var image=byid(ecbLink.id+"_ti");
		if(image==null)
		{
			var serverClientId=ecbLink.getAttribute("serverclientid");
			if ((serverClientId !=null) && (serverClientId.length > 0))
			{
				image=byid(serverClientId+"_ti");
			}
		}
		if ((image !=null) && (image.getAttribute("onclick") !=null))
		{
			image.onclick();
		}
		else
		{
			if(ecbLink.getAttribute("onclick") !=null)
				ecbLink.onclick();
		}
		return false;
	}
	else
	{
		return true;
	}
}
var firstCalled=true;
var _callbackinitdelayed=false;
function DeferWebFormInitCallback()
{ULSA13:;
	if (typeof(WebForm_InitCallback)=='function')
		window['_WebForm_InitCallback']=window['WebForm_InitCallback'];
	window['WebForm_InitCallback']=function ()
	{ULSA13:;
		if (firstCalled)
		{
			firstCalled=false;
			_callbackinitdelayed=true;
			_spBodyOnLoadFunctionNames.push('WebForm_InitCallback');
		}
		else
		{
			_callbackinitdelayed=false;
			if (typeof(window._WebForm_InitCallback)=='function')
				window._WebForm_InitCallback();
		}
	}
	if (typeof(WebForm_DoCallback)=='function')
		window['_WebForm_DoCallback']=window['WebForm_DoCallback'];
	window['WebForm_DoCallback']=function(eventTarget, eventArgument, eventCallback, context, errorCallback, useAsync)
	{ULSA13:;
		if (_callbackinitdelayed)
		{
			_callbackinitdelayed=false;
			if (_spBodyOnLoadFunctionNames !=null)
			{
				var count=_spBodyOnLoadFunctionNames.length;
				for (var i=0; i<count; i++)
				{
					if (_spBodyOnLoadFunctionNames[i]=="WebForm_InitCallback")
					{
						_spBodyOnLoadFunctionNames.splice(i,1);
						break;
					}
				}
			}
			if (typeof(window._WebForm_InitCallback)=='function')
				window._WebForm_InitCallback();
		}
		window._WebForm_DoCallback(eventTarget, eventArgument, eventCallback, context, errorCallback, useAsync);
	}
}
function _ribbonShouldFixRtlHeaders(isRtl)
{ULSA13:;
	return browseris.ie && browseris.iever==7 && !browseris.ie8standard && isRtl;
}
var IMNControlObj=null;
var bIMNControlInited=false;
var IMNDictionaryObj=null;
var bIMNSorted=false;
var bIMNOnloadAttached=false;
var IMNOrigScrollFunc=null;
var bIMNInScrollFunc=false;
var IMNSortableObj=null;
var IMNHeaderObj=null;
var IMNNameDictionaryObj=null;
var IMNShowOfflineObj=null;
function GetCurrentEvent(objEvent)
{ULSA13:;
	if (!IsSupportedMacBrowser())
		return window.event;
	if (objEvent)
		return objEvent;
	return window.event;
}
function GetEventTarget(objEvent)
{ULSA13:;
	if (!IsSupportedMacBrowser())
		return objEvent.srcElement;
	if (objEvent.srcElement)
		return objEvent.srcElement;
	return objEvent.target;
}
function EnsureIMNControl()
{ULSA13:;
	if (!bIMNControlInited)
	{
		 if (typeof(g_presenceEnabled) !="undefined" && g_presenceEnabled)
		 {
			if (IsSupportedMacBrowser())
			{
			   IMNControlObj=CreateMacPlugin();
			}
			else if (browseris.ie5up)
			{
				if (window.ActiveXObject)
				{
					try
					{
						IMNControlObj=new ActiveXObject("Name.NameCtrl.1");
						if (IMNControlObj)
						{
							if(IsSupportedMacBrowser())
								IMNControlObj.OnStatusChange="IMNOnStatusChange";
							else
								IMNControlObj.OnStatusChange=IMNOnStatusChange;						
						}
					}
					catch(e)
					{
						IMNControlObj=null;
					}
				}
			}
		}	
		bIMNControlInited=true;
	}
	return IMNControlObj;
}
function IMNImageInfo()
{ULSA13:;
	this.img=null;
	this.alt='';
}
var L_IMNOnline_Text="Disponible";
var L_IMNOffline_Text="Sin conexión";
var L_IMNAway_Text="Ausente";
var L_IMNBusy_Text="No disponible";
var L_IMNDoNotDisturb_Text="No molestar";
var L_IMNIdle_Text="Puede que siempre";
var L_IMNBlocked_Text="Bloqueado";
var L_IMNOnline_OOF_Text="Disponible (descanso)";
var L_IMNOffline_OOF_Text="Sin conexión (descanso)";
var L_IMNAway_OOF_Text="Ausente (descanso)";
var L_IMNBusy_OOF_Text="No disponible (descanso)";
var L_IMNDoNotDisturb_OOF_Text="No molestar (descanso)";
var L_IMNIdle_OOF_Text="Puede que siempre (descanso)";
function IMNGetStatusImage(state, showoffline)
{ULSA13:;
	var img="blank.gif";
	var alt="";
	switch (state)
	{
		case 0:
			img="imnon.png";
			alt=L_IMNOnline_Text;
		break;
		case 11:
			img="imnonoof.png";
			alt=L_IMNOnline_OOF_Text;
		break;
		case 1:
			if (showoffline)
			{
				img="imnoff.png";
				alt=L_IMNOffline_Text;
			}
			else
			{
				img="blank.gif";
				alt="";
			}
		break;
		case 12:
			if (showoffline)
			{
				img="imnoffoof.png";
				alt=L_IMNOffline_OOF_Text;
			}
			else
			{
				img="blank.gif";
				alt="";
			}
		break;
		case 2:
			img="imnaway.png";
			alt=L_IMNAway_Text;
		break;
		case 13:
			img="imnawayoof.png";
			alt=L_IMNAway_OOF_Text;
		break;
		case 3:
			img="imnbusy.png";
			alt=L_IMNBusy_Text;
		break;
		case 14:
			img="imnbusyoof.png";
			alt=L_IMNBusy_OOF_Text;
		break;
		case 4:
			img="imnaway.png";
			alt=L_IMNAway_Text;
		break;
		case 5:
			img="imnbusy.png";
			alt=L_IMNBusy_Text;
		break;
		case 6:
			img="imnaway.png";
			alt=L_IMNAway_Text;
		break;
		case 7:
			img="imnbusy.png";
			alt=L_IMNBusy_Text;
		break;
		case 8:
			img="imnaway.png";
			alt=L_IMNAway_Text;
		break;
		case 9:
			img="imndnd.png";
			alt=L_IMNDoNotDisturb_Text;
		break;
		case 15:
			img="imndndoof.png";
			alt=L_IMNDoNotDisturb_OOF_Text;
		break;
		case 10:
			img="imnbusy.png";
			alt=L_IMNBusy_Text;
		break;
		case 16:
			img="imnidle.png";
			alt=L_IMNIdle_Text;
		break;
		case 17:
			img="imnidleoof.png";
			alt=L_IMNIdle_OOF_Text;
		break;
		case 18:
			img="imnblocked.png";
			alt=L_IMNBlocked_Text;
		break;
		case 19:
			img="imnidlebusy.png";
			alt=L_IMNBusy_Text;
		break;
		case 20:
			img="imnidlebusyoof.png";
			alt=L_IMNBusy_OOF_Text;
		break;
	}
	var imnInfo=new IMNImageInfo();
	imnInfo.img=img;
	imnInfo.alt=alt;
	return imnInfo;
}
function IMNGetHeaderImage()
{ULSA13:;
	var imnInfo=new IMNImageInfo();
	imnInfo.img="imnhdr.gif";;
	imnInfo.alt="";
	return imnInfo;
}
function IMNIsOnlineState(state)
{ULSA13:;
	if (state==1)
	{
			return false;
	}
	return true;
}
function IMNSortList(j, oldState, state)
{ULSA13:;
	var objTable=null;
	var objRow=null;
	if (IMNSortableObj && IMNSortableObj[j])
	{
		objRow=document.getElementById(j);
		while (objRow && !(objRow.tagName=="TR" &&
			   typeof(objRow.Sortable) !="undefined"))
		{
			objRow=objRow.parentNode;
		}
		objTable=objRow;
		while (objTable && objTable.tagName !="TABLE")
		{
			objTable=objTable.parentNode;
		}
		if (objTable !=null && objRow !=null)
		{
			if (objTable.rows[1].style.display=="none")
			{
				for (i=1; i<4; i++)
				{
					objTable.rows[i].style.display="block";
				}
			}
			if (!IMNIsOnlineState(oldState) && IMNIsOnlineState(state))
			{
				objTable.rows[2].style.display="none";
				i=3;
				while (objTable.rows[i].id !="Offline" && objTable.rows[i].innerText < objRow.innerText)
					i++;
				objTable.moveRow(objRow.rowIndex, i);
				if (    objTable.rows[objTable.rows.length - 3].id=="Offline")
				{
					objTable.rows[objTable.rows.length - 2].style.display="block";
				}
			}
			else if (IMNIsOnlineState(oldState) && !IMNIsOnlineState(state))
			{
				if (objRow.rowIndex==3 &&
					objTable.rows[objRow.rowIndex+1].id=="Offline")
				{
					objTable.rows[2].style.display="block";
				}
				if (objTable.rows[objTable.rows.length - 3].id=="Offline")
				{
					objTable.rows[objTable.rows.length - 2].style.display="none";
				}
				i=objTable.rows.length - 2;
				while (objTable.rows[i - 1].id !="Offline" && objTable.rows[i].innerText > objRow.innerText)
					i--;
				objTable.moveRow(objRow.rowIndex, i);
			}
		}
	}
}
function IMNOnStatusChange(name, state, id)
{ULSA13:;
	if (IMNDictionaryObj)
	{
		var img=IMNGetStatusImage(state, IMNSortableObj[id] ||
									IMNShowOfflineObj[id]);
		if (IMNDictionaryObj[id] !=state)
		{
			if (bIMNSorted)
				IMNSortList(id, IMNDictionaryObj[id], state);
			IMNUpdateImage(id, img);
			IMNDictionaryObj[id]=state;
		}
	}
}
function IMNUpdateImage(id, imgInfo)
{ULSA13:;
	var obj=document.images[id];
	if (obj)
	{
		var img=imgInfo.img;
		var alt=imgInfo.alt;		
		var oldImg=obj.src;
		if (typeof(obj.src)=="undefined")
			oldImg=obj.item(0).src;
		var index=oldImg.lastIndexOf("/");
		var newImg=oldImg.slice(0, index+1);
		newImg+=img;
		if (oldImg==newImg && img !='blank.gif')
			return;
		if (obj.altbase)
		{
			obj.alt=obj.altbase;
		}
		else
		{
			obj.alt=alt;
		}
		var useFilter=browseris.ie &&
					browseris.ie55up &&
					browseris.verIEFull < 7.0;
		var isPng=(newImg.toLowerCase().indexOf(".png") > 0);
		if (useFilter)
		{
			if (isPng)
			{
				obj.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(src="+newImg+"),sizingMethod=scale,enabled=true);";
				obj.src="/_layouts/images/blank.gif";
			}
			else
			{
				obj.style.filter="";
				obj.src=newImg;
			}
		}
		else
		{
			obj.src=newImg;
		}
	}
}
function IMNHandleAccelerator(objEvent)
{ULSA13:;
	if (IMNControlObj)
	{
	   var currEvent=GetCurrentEvent(objEvent);
	   if (currEvent.altKey && currEvent.shiftKey &&
			currEvent.keyCode==121)
		{
		   IMNControlObj.DoAccelerator();
		}
	}
}
function IMNImageOnClick(objEvent)
{ULSA13:;
	if (IMNControlObj)
	{
		IMNShowOOUIKyb(objEvent);
		IMNControlObj.DoAccelerator();
	}
}
function IMNGetOOUILocation(obj)
{ULSA13:;
	var objRet=new Object;
	var objSpan=obj;
	var objOOUI=obj;
	var oouiX=0, oouiY=0, objDX=0;
	var fRtl=document.dir=="rtl";
	while (objSpan && objSpan.tagName !="SPAN" && objSpan.tagName !="TABLE")
	{
		if (objSpan.tagName=="TD" && objSpan.className.indexOf("ms-vb") >=0)
		   break;
		objSpan=objSpan.parentNode;
	}
	if (objSpan)
	{
		var childNode=objSpan.tagName=="TABLE" ?
			objSpan.rows(0).cells(0).firstChild :
			objSpan.firstChild;
		while (childNode !=null)
		{
			if (childNode.tagName=="IMG" && childNode.id)
			{
				objOOUI=childNode;
				break;
			}
			if (childNode.tagName=="A" &&
				childNode.childNodes.length > 0 &&
				childNode.firstChild.tagName=="IMG" &&
				childNode.firstChild.id)
			{
				objOOUI=childNode.firstChild;
				break;
			}
			childNode=childNode.nextSibling;
		}
	}
	obj=objOOUI;
	oouiY=objOOUI.getBoundingClientRect().top - 5;
	oouiX=objOOUI.getBoundingClientRect().left - 5;
	try
	{
		var currentWindow=window;
		while (currentWindow && currentWindow !=currentWindow.parent)
		{
			var iframe=currentWindow.frameElement;
			var iframebcr=iframe ? iframe.getBoundingClientRect() : null;
			var iframetop=iframebcr ? iframebcr.top : 0;
			var iframeleft=iframebcr ? iframebcr.left : 0;
			oouiY+=iframetop;
			oouiX+=iframeleft;
			currentWindow=currentWindow.parent;
		}
	} catch(e)
	{
	};
	objRet.objSpan=objSpan;
	objRet.objOOUI=objOOUI;
	objRet.oouiX=oouiX;
	objRet.oouiY=oouiY;
	return objRet;
}
function IMNShowOOUIMouse(objEvent)
{ULSA13:;
	IMNShowOOUI(objEvent, 0);
}
function IMNShowOOUIKyb(objEvent)
{ULSA13:;
	IMNShowOOUI(objEvent, 1);
}
function IMNShowOOUI(objEvent, inputType)
{ULSA13:;
	if ((browseris.ie5up) || IsSupportedMacBrowser())
	{
		var currEvent=GetCurrentEvent(objEvent);
		var obj=GetEventTarget(currEvent);
		var objSpan=obj;
		var objOOUI=obj;
		var oouiX=0, oouiY=0;
		if (EnsureIMNControl() && IMNNameDictionaryObj)
		{
			var objRet=IMNGetOOUILocation(obj);
			objSpan=objRet.objSpan;
			objOOUI=objRet.objOOUI;
			oouiX=objRet.oouiX;
			oouiY=objRet.oouiY;
			var name=IMNNameDictionaryObj[objOOUI.id];
			if (objSpan)
				objSpan.onkeydown=IMNHandleAccelerator;
			IMNControlObj.ShowOOUI(name, inputType, oouiX, oouiY);
		}
	}
}
function IMNHideOOUI()
{ULSA13:;
	if (IMNControlObj)
	{
		IMNControlObj.HideOOUI();
		return false;
	}
	return true;
}
function IMNScroll()
{ULSA13:;
	if (!bIMNInScrollFunc)
	{
		bIMNInScrollFunc=true;
		IMNHideOOUI();
	}
	bIMNInScrollFunc=false;
	if(IMNOrigScrollFunc==IMNScroll)
		return true;
	return IMNOrigScrollFunc ? IMNOrigScrollFunc() : true;
}
var imnCount=0;
var imnElems;
var imnElemsCount=0;
var imnMarkerBatchSize=4;
var imnMarkerBatchDelay=40;
function ProcessImn()
{ULSA13:;
	imnCount=0;
	imnElems=document.getElementsByName("imnmark");
	imnElemsCount=imnElems.length;
	if (EnsureIMNControl() && IMNControlObj.PresenceEnabled)
	{
		ProcessImnMarkers();
	}
	else
	{
		RemoveImnAnchors();
	}
}
function RemoveImnAnchors()
{ULSA13:;
	for (var i=0; i < imnElemsCount; i++)
	{
		var imnImg=imnElems[i];
		var imnAnchor=imnImg.parentNode;
		var beforeElem=imnAnchor.nextSibling;
		var parentElem=imnAnchor.parentNode;
		if ((imnAnchor !=null) && (imnAnchor.tagName=="A") && (imnAnchor.childNodes.length==1) && (parentElem !=null))
		{
			if (beforeElem !=null)
				parentElem.insertBefore(imnImg, beforeElem);
			else
				parentElem.appendChild(imnImg);
			parentElem.removeChild(imnAnchor);
		}
	}
}
function ProcessImnMarkers()
{ULSA13:;
	for (var i=0; i < imnMarkerBatchSize;++i)
	{
		if (imnCount==imnElemsCount)
			return;
		if (IsSupportedMacBrowser())
			IMNRC(imnElems[imnCount].getAttribute("sip"),imnElems[imnCount]);
		else
			IMNRC(imnElems[imnCount].sip,imnElems[imnCount]);
		imnCount++;
	}
	setTimeout("ProcessImnMarkers()",imnMarkerBatchDelay);
}
function IMNRC(name, elem)
{ULSA13:;
	if (name==null || name=='')
		return;
	if (typeof(g_presenceEnabled)=="undefined" || !g_presenceEnabled)
		return;
	if ((browseris.ie5up) || IsSupportedMacBrowser())
	{
		var obj=(elem) ? elem : window.event.srcElement;
		var objSpan=obj;
		var id=obj.id;
		if (!IMNDictionaryObj)
		{
			IMNDictionaryObj=new Object();
			IMNNameDictionaryObj=new Object();
			IMNSortableObj=new Object();
			IMNShowOfflineObj=new Object();
			if (!IMNOrigScrollFunc)
			{
				IMNOrigScrollFunc=window.onscroll;
				window.onscroll=IMNScroll;
			}
		}
		if (IMNDictionaryObj)
		{
			if (!IMNNameDictionaryObj[id])
			{
				IMNNameDictionaryObj[id]=name;
			}
			if (typeof(IMNDictionaryObj[id])=="undefined")
			{
				IMNDictionaryObj[id]=1;
			}
			if (!IMNSortableObj[id] &&
				(typeof(obj.Sortable) !="undefined"))
			{
				IMNSortableObj[id]=obj.Sortable;
				if (!bIMNOnloadAttached)
				{
					if (EnsureIMNControl() && IMNControlObj.PresenceEnabled)
						AttachEvent("load", IMNSortTable, window);
					bIMNOnloadAttached=true;
				}
			}
			if (!IMNShowOfflineObj[id] &&
				(typeof(obj.ShowOfflinePawn) !="undefined"))
			{
				IMNShowOfflineObj[id]=obj.ShowOfflinePawn;
			}
			if (EnsureIMNControl() && IMNControlObj.PresenceEnabled)
			{
				var state=1, img;
				state=IMNControlObj.GetStatus(name, id);
				if (IMNIsOnlineState(state) || IMNSortableObj[id] ||
					IMNShowOfflineObj[id])
				{
					img=IMNGetStatusImage(state, IMNSortableObj[id] ||
											IMNShowOfflineObj[id]);
					IMNUpdateImage(id, img);
					IMNDictionaryObj[id]=state;
				}
			}
		}
		var objRet=IMNGetOOUILocation(obj);
		SetImnOnClickHandler(objRet.objOOUI);
		objSpan=objRet.objSpan;
		if (objSpan)
		{
			objSpan.onmouseover=IMNShowOOUIMouse;
			objSpan.onfocusin=IMNShowOOUIKyb;
			objSpan.onmouseout=IMNHideOOUI;
			objSpan.onfocusout=IMNHideOOUI;
		}
	}
}
function SetImnOnClickHandler(imgNode)
{ULSA13:;
   var parent=imgNode.parentNode;
   if (parent.tagName=="A")
   {
	  if (typeof(parent.onclick)=="undefined")
	  {
		 parent.onclick=IMNImageOnClickHandler;
	  }
   }
   else
   {
	  var anchor=document.createElement("a");
	  anchor.onclick=IMNImageOnClickHandler;
	  anchor.className="ms-imnlink";
	  anchor.href="javascript:;";
	  parent.insertBefore(anchor, imgNode);
	  anchor.appendChild(imgNode);
   }
}
function IMNImageOnClickHandler(objEvent)
{ULSA13:;
   IMNImageOnClick(objEvent);
   return false;
}
function IMNSortTable()
{ULSA13:;
	var id;
	for (id in IMNDictionaryObj)
	{
		IMNSortList(id, 1, IMNDictionaryObj[id]);
	}
	bIMNSorted=true;
}
function IMNRegisterHeader(objEvent)
{ULSA13:;
	if ((browseris.ie5up) || IsSupportedMacBrowser())
	{
		var currEvent=GetCurrentEvent(objEvent);
		var obj=GetEventTarget(currEvent);
		if (!IMNHeaderObj)
		{
			IMNHeaderObj=new Object();
		}
		if (IMNHeaderObj)
		{
			var id=obj.id;
			IMNHeaderObj[id]=id;
			var img;
			img=IMNGetHeaderImage();
			IMNUpdateImage(id, img);
		}
	}
}
var _spBodyOnLoadFunctionNames;
var _spBodyOnLoadCalled=false;
if (_spBodyOnLoadFunctionNames==null)
{
	_spBodyOnLoadFunctionNames=new Array();
	_spBodyOnLoadFunctionNames.push("_spBodyOnLoad");
	_spBodyOnLoadFunctionNames.push("_spRestoreScrollForDiv_rscr");
}
var _spOriginalFormAction;
var _spEscapedFormAction;
var _spFormOnSubmitCalled=false;
var _spBodyOnPageShowRegistered=false;
function _spBodyOnPageShow(evt)
{ULSA13:;
	_spFormOnSubmitCalled=false;
}
function _spResetFormOnSubmitCalledFlag( sender,  e)
{ULSA13:;
	_spFormOnSubmitCalled=false;
}
function _ribbonReadyForInit()
{ULSA13:;
	return _spBodyOnLoadCalled;
}
var _spBodyOnLoadCalled=false;
function _spBodyOnLoadWrapper()
{ULSA13:;
	_spBodyOnLoadCalled=true;
	if (!_spBodyOnPageShowRegistered &&
		typeof(browseris) !="undefined" &&
		!browseris.ie &&
		typeof(window.addEventListener)=='function')
	{
		window.addEventListener('pageshow', _spBodyOnPageShow, false);
		_spBodyOnPageShowRegistered=true;
	}
	if (typeof(Sys) !="undefined" &&
		typeof(Sys.WebForms) !="undefined" &&
		typeof(Sys.WebForms.PageRequestManager) !="undefined")
	{
		var pageRequestMgr=Sys.WebForms.PageRequestManager.getInstance();
		if (!_spPageLoadedRegistered && pageRequestMgr !=null)
		{
			pageRequestMgr.add_pageLoaded(_spPageLoaded);
			_spPageLoadedRegistered=true;
		}
	}
	if (!_spPageLoadedRegistered)
	{
		_spPageLoaded();
	}
	_spFormOnSubmitCalled=false;
	if (typeof(Sys) !="undefined" &&
		typeof(Sys.Net) !="undefined" &&
		typeof(Sys.Net.WebRequestManager) !="undefined")
	{
		Sys.Net.WebRequestManager.add_invokingRequest(_spResetFormOnSubmitCalledFlag);
	}
	if (typeof(NotifyBodyLoadedAndExecuteWaitingJobs) !="undefined")
	{
		NotifyBodyLoadedAndExecuteWaitingJobs();
	}
	ExecuteOrDelayUntilScriptLoaded(ProcessDefaultOnLoad, "core.js");
	if (typeof(g_prefetch)=="undefined" || g_prefetch==1)
	{
		var prefetch=_spGetQueryParam("prefetch");
		if (prefetch!=0)
			_spPreFetch();
	}
}
function _spPreFetch()
{ULSA13:;
	window.setTimeout(function()
		{ULSA13:;
			if (_v_dictSod)
			{
				var sodCore=_v_dictSod["core.js"];
				if (typeof(sodCore) !="undefined" && sodCore)
				{
					LoadSod(sodCore);
				}
				if (typeof(ribbon)=="undefined")
				{
					 var sod=_v_dictSod["ribbon"];
					 if (typeof(sod) !="undefined" && sod)
					 {
						 LoadSod(sod);
					 }
				}
			}
		},
		0);
	if(typeof(_ribbon) !="undefined" && _ribbon)
	{
		window.setTimeout(function()
			{ULSA13:;
				if (document.images && IsFullNameDefined('_spPageContextInfo.currentLanguage'))
				{
					imgRibbon32x32=new Image();
					imgRibbon32x32.src="/_layouts/"+_spPageContextInfo.currentLanguage+"/images/formatmap32x32.png";
					imgRibbon16x16=new Image();
					imgRibbon16x16.src="/_layouts/"+_spPageContextInfo.currentLanguage+"/images/formatmap16x16.png";
				}
			},
			0);
	}
}
function _spGetQueryParam(p)
{ULSA13:;
	var q=window.location.search.substring(1);
	if(q && q.length > 2)
	{
		var params=q.split("&");
		var l=params.length;
		for (var i=0;i<l;i++)
		{
			var pair=params[i].split("=");
			if (pair[0].toLowerCase()==p)
				return pair[1];
		}
	}
}
var _spSuppressFormOnSubmitWrapper=false;
function _spFormOnSubmitWrapper()
{ULSA13:;
	if (_spSuppressFormOnSubmitWrapper)
	{
		return true;
	}
	if (_spFormOnSubmitCalled)
	{
		return false;
	}
	if (typeof(_spFormOnSubmit)=="function")
	{
		var retval=_spFormOnSubmit();
		var testval=false;
		if (typeof(retval)==typeof(testval) && retval==testval)
		{
			return false;
		}
	}
	_spFormOnSubmitCalled=true;
	return true;
}
var _inlineEditString=null;
var _spPageLoadedRegistered=false;
function _spPageLoaded()
{ULSA13:;
	_spOriginalFormAction=null;
	EscapeFormAction();
	RefreshInplViewState();
	RefreshHeroButtonState();
	InlineEditSetDefaultFocus();
}
function InlineEditSetDefaultFocus()
{ULSA13:;
	if (_inlineEditString !=null)
	{
		var index=_inlineEditString.indexOf("#");
		if (index <=0)
			return;
		var iidVal=_inlineEditString.substring(0, index);
		var trs=document.getElementsByTagName("TR");
		for (var i=0; i < trs.length; i++)
		{
			if(trs[i].getAttribute("automode")==iidVal)
			{
				var nodeWalkStr=_inlineEditString.substring(index+1);
				var nodeWalks=nodeWalkStr.split(",");
				var node=trs[i];
				for(var j=0; j<nodeWalks.length; j++)
				{
					if (node==null)
						break;
					node=node.firstChild;
					for(var k=0; k<nodeWalks[j]; k++)
					{
						if (node==null)
							break;
						node=node.nextSibling;
					}
				}
				if (node !=null)				
					focusControl(node);
				break;
			}
		}
		_inlineEditString=null;
	}
}
function  focusControl(targetControl)
{ULSA13:;
	if (Sys.Browser.agent===Sys.Browser.InternetExplorer)
	{
		var focusTarget=targetControl;
		if (focusTarget && (typeof(focusTarget.contentEditable) !=="undefined"))
		{
			oldContentEditableSetting=focusTarget.contentEditable;
			focusTarget.contentEditable=false;
		}
		else
		{
			focusTarget=null;
		}
		try
		{
			targetControl.focus();
		}
		catch(e) {}
		if (focusTarget)
		{
			focusTarget.contentEditable=oldContentEditableSetting;
		}
	}
	else
	{
		targetControl.focus();
	}
}
function EscapeFormAction()
{ULSA13:;
	if (document.forms.length > 0 && !_spOriginalFormAction)
	{
		_spOriginalFormAction=document.forms[0].action;
		var url=window.location.href;
		var index=url.indexOf("://");
		if (index >=0)
		{
			var temp=url.substring(index+3);
			index=temp.indexOf("/");
			if (index >=0)
				url=temp.substring(index);
			if (url.length > 2 && url.charAt(0)=='/' && url.charAt(1)=='/')
			{
				url=url.substring(1);
			}
		}
		_spEscapedFormAction=escapeUrlForCallback(url);
		document.forms[0].action=_spEscapedFormAction;
		document.forms[0]._initialAction=document.forms[0].action;
	}
}
function RefreshHeroButtonState()
{ULSA13:;
	if (typeof(_spWebPartComponents) !="undefined")
	{
		for (var wp in _spWebPartComponents)
		{
			if (wp.length > 7)
			{
				var strId=wp.substr(7);
				var heroButton=window["heroButtonWebPart"+strId];
				if (typeof(heroButton) !="undefined" && heroButton !=null && heroButton==true)
				{
				 var ele=document.getElementById("Hero-"+strId);
				 if (ele !=null)
					ele.style.display="";
				}
			}
		}
	}
}
function RefreshInplViewState()
{ULSA13:;
	if (typeof(ctx) !="undefined" && ctx.clvp !=null && (ctx.clvp.tab==null ||
		(ctx.clvp.tab !=null && (ctx.clvp.tab.parentNode==null  ||
		ctx.clvp.tab.parentNode.innerHTML==null))))
	{
		FixDroppedOrPastedClvps(null);
		if (ctx.dictSel !=null)
		{
			ctx.dictSel=[];
			ctx.CurrentSelectedItems=0;
		}
	}
}
function RestoreToOriginalFormAction()
{ULSA13:;
	if (_spOriginalFormAction !=null)
	{
		if (_spEscapedFormAction==document.forms[0].action)
		{
			document.forms[0].action=_spOriginalFormAction;
			document.forms[0]._initialAction=document.forms[0].action;
		}
		_spOriginalFormAction=null;
		_spEscapedFormAction=null;
	}
}
function DefaultFocus()
{ULSA13:;
	if (typeof(_spUseDefaultFocus)!="undefined")
	{
		var elements=document.getElementsByName("_spFocusHere");
		var elem=null;
		if (elements==null || elements.length <=0)
		{
			elem=document.getElementById("_spFocusHere");
		}
		else if (elements !=null && elements.length > 0)
		{
			elem=elements[0];
		}
		if (elem !=null)
		{
			var aLinks=elem.getElementsByTagName("a");
			if (aLinks !=null && aLinks.length > 0)
			{
				for (var i=0; i < aLinks.length; i++)
				{
					if (aLinks[i].style.visibility !="hidden")
					{
						try{aLinks[i].focus();}catch(e){}
						break;
					}
				}
			}
		}
	}
}
function ProcessDefaultOnLoad()
{ULSA13:;
	ProcessPNGImages();
	UpdateAccessibilityUI();
	window.setTimeout('ProcessImn()', 10);
	ProcessOnLoadFunctions(_spBodyOnLoadFunctionNames);
	if (typeof(_spUseDefaultFocus)!="undefined")
		DefaultFocus();
}
function ProcessOnLoadFunctions(onLoadFunctionNames)
{ULSA13:;
	for (var i=0; i < onLoadFunctionNames.length; i++)
	{
		var expr="if(typeof("+onLoadFunctionNames[i]+")=='function'){"+onLoadFunctionNames[i]+"();}";
		eval(expr);
	}
	onLoadFunctionNames=[];
}
function CoreInvoke(fn) {ULSA13:;
	var args=Array.prototype.slice.call(arguments, 1);
	var _corefn=function ()
	{ULSA13:;
		window[fn].apply(null, args);
	};
	if (TypeofFullName(fn)=='function')
		return window[fn].apply(null, args);
	else
	{
		EnsureScript("core.js", 'undefined', _corefn);
		return false;
	}
}
function ToggleDeveloperDashboard()
{ULSA13:;
	if (GetCookie('WSS_DeveloperDashboard')=="true")
	{
	document.cookie='WSS_DeveloperDashboard=false';
	window.location.reload(true);
	}
	else
	{
	document.cookie='WSS_DeveloperDashboard=true';
	window.location.reload(true);
	}
}
function ToggleTrace()
{ULSA13:;
	if (GetCookie('WSS_DeveloperDashboardTrace')=="true")
	{
	document.cookie='WSS_DeveloperDashboardTrace=false';
	window.location.reload(true);
	}
	else
	{
	document.cookie='WSS_DeveloperDashboardTrace=true';
	window.location.reload(true);
	}
}
function DevDashMoveTrace()
{ULSA13:;
	var traceDiv=document.getElementById("__asptrace");
	var devDashDiv=document.getElementById("DeveloperDashboard");
	if(typeof(devDashDiv) !='undefined' && devDashDiv)
	{
		if (typeof(traceDiv) !='undefined'&& traceDiv)
		{
			var traceParent=traceDiv.parentNode;
			if (typeof(traceParent) !='undefined'&& traceParent)
			{
				traceParent.removeChild(traceDiv);
				devDashDiv.appendChild(traceDiv);
			}
		}
	}
}
function SetSqlWindowText(textTitle, text, stackTitle, stack, ioTitle, io)
{ULSA13:;
	var sqlWindow=document.sqlWindow;
	if (!sqlWindow || sqlWindow.closed)
	{
		sqlWindow=window.open('', '', 'width=800,height=770,status=yes,location=no,scrollbar=yes,resize=yes');
		document.sqlWindow=sqlWindow;
	}
	var sqlDocument=sqlWindow.document;
	var sqlText=sqlDocument.getElementById("sqlText");
	var sqlStack=sqlDocument.getElementById("sqlStack");
	if (typeof(sqlText)=='undefined' || !sqlText)
	{
		sqlDocument.open();
		sqlDocument.write('<html><head><link rel="stylesheet" type="text/css" href="/_layouts/1033/styles/layouts.css"/></head><body><div class="ms-developerdashboard"><table width="100%"><tr><td style="font-weight:bold">');
		sqlDocument.write(textTitle);
		sqlDocument.write('</td></tr><tr><td><textarea id="sqlText" rows="18" cols="94"></textarea></td></tr>');
		if (typeof(stack) !='undefined' && stack)
		{
			sqlDocument.write('<tr><td style="font-weight:bold">');
			sqlDocument.write(stackTitle);
			sqlDocument.write('</td></tr><tr><td><textarea id="sqlStack" rows="14" cols="94"></textarea></td></tr>');
		}
		if (typeof(io) !='undefined' && io)
		{
			sqlDocument.write('<tr><td style="font-weight:bold">');
			sqlDocument.write(ioTitle);
			sqlDocument.write('</td></tr><tr><td><textarea id="sqlIO" rows="8" cols="94"></textarea></td></tr>');
		}
		sqlDocument.write('</table></div></body></html>');
		sqlDocument.close();
		sqlText=sqlDocument.getElementById("sqlText");
		sqlStack=sqlDocument.getElementById("sqlStack");
		sqlIO=sqlDocument.getElementById("sqlIO");
	}
	sqlText.value=text;
	if (typeof(sqlStack) !='undefined' && sqlStack)
		sqlStack.value=stack;
	if (typeof(sqlIO) !='undefined' && sqlIO)
		sqlIO.value=io;
	sqlWindow.focus();
}
var flyoutsAllowed=false;
function enableFlyoutsAfterDelay()
{ULSA13:;
	setTimeout("flyoutsAllowed=true;", 25);
}
function overrideMenu_HoverStatic(item)
{ULSA13:;
	if (!flyoutsAllowed)
	{
		setTimeout(delayMenu_HoverStatic(item), 50);
	}
	else
	{
		var node=Menu_HoverRoot(item);
		var data=Menu_GetData(item);
		if (!data) return;
		__disappearAfter=data.disappearAfter;
		Menu_Expand(node, data.horizontalOffset, data.verticalOffset);
	}
}
function delayMenu_HoverStatic(item)
{ULSA13:;
	return (function()
	{ULSA13:;
		overrideMenu_HoverStatic(item);
	});
}
var g_ExecuteOrWaitJobs=new Object();
function ExecuteOrDelayUntilEventNotified(func, eventName)
{ULSA13:;
	var executed=false;
	var eventInfo=g_ExecuteOrWaitJobs[eventName];
	if (eventInfo==null || typeof(eventInfo)=="undefined")
	{
		eventInfo=new Object();
		eventInfo.notified=false;
		eventInfo.jobs=new Array();
		eventInfo.jobs.push(func);
		g_ExecuteOrWaitJobs[eventName]=eventInfo;
	}
	else
	{
		if (eventInfo.notified)
		{
			func();
			executed=true;
		}
		else
		{
			eventInfo.jobs.push(func);
		}
	}
	return executed;
}
function NotifyEventAndExecuteWaitingJobs(eventName)
{ULSA13:;
	if(!g_ExecuteOrWaitJobs)
		return;
	var eventInfo=g_ExecuteOrWaitJobs[eventName];
	if (eventInfo==null || typeof(eventInfo)=="undefined")
	{
		eventInfo=new Object();
		eventInfo.notified=true;
		eventInfo.jobs=new Array();
		g_ExecuteOrWaitJobs[eventName]=eventInfo;
	}
	else
	{
		if (eventInfo.jobs !=null)
		{
			for (var i=0; i < eventInfo.jobs.length; i++)
			{
				var func=eventInfo.jobs[i];
				func();
			}
		}
		eventInfo.notified=true;
		eventInfo.jobs=new Array();
	}
}
function ExecuteOrDelayUntilScriptLoaded(func, depScriptFileName)
{ULSA13:;
	depScriptFileName=depScriptFileName.toLowerCase();
	var eventName="sp.scriptloaded-"+depScriptFileName;
	return ExecuteOrDelayUntilEventNotified(func, eventName);
}
function NotifyScriptLoadedAndExecuteWaitingJobs(scriptFileName)
{ULSA13:;
	scriptFileName=scriptFileName.toLowerCase();
	var eventName="sp.scriptloaded-"+scriptFileName;
	NotifyEventAndExecuteWaitingJobs(eventName);
}
function ExecuteOrDelayUntilBodyLoaded(func)
{ULSA13:;
	var eventName="sp.bodyloaded";
	return ExecuteOrDelayUntilEventNotified(func, eventName);
}
function NotifyBodyLoadedAndExecuteWaitingJobs()
{ULSA13:;
	var eventName="sp.bodyloaded";
	NotifyEventAndExecuteWaitingJobs(eventName);
}
function FFClick(elm) {ULSA13:;
  var evt=document.createEvent("MouseEvents");
  evt.initMouseEvent("click", true, true, window,
	0, 0, 0, 0, 0, false, false, false, false, 0, null);
  elm.dispatchEvent(evt);
}
var L_ErrorMessage_InitializeError="No se pudo descargar la aplicación Silverlight.";
var L_ErrorMessage_PluginNotLoadedError="No se pudo descargar la aplicación Silverlight o no se cargó el complemento Silverlight.";
function _spOnSilverlightError(webPartId, sender, args)
{ULSA13:;
	if (args.errorType=="InitializeError")
	{
		_spSetSLErrorMessage(webPartId, L_ErrorMessage_InitializeError);
	}
}
function _spSetSLPluginNotLoadedErrorMessage(webPartId)
{ULSA13:;
	_spSetSLErrorMessage(webPartId, L_ErrorMessage_PluginNotLoadedError);
}
function _spSetSLErrorMessage(webPartId, strErrorMessage)
{ULSA13:;
	var strSilverlightErrorDivId="SilverlightRuntimeErrorMessage_"+webPartId;
	var strDefaultConfigurationMessageDivId="WebPartDefaultConfigurationMessage_"+webPartId;
	var strSilverlightObjectDivId="SilverlightObjectDiv_"+webPartId;
	document.getElementById(strSilverlightObjectDivId).style.display="none";
	document.getElementById(strSilverlightErrorDivId).style.display="block";
	document.getElementById(strSilverlightErrorDivId).innerHTML=strErrorMessage;
	document.getElementById(strDefaultConfigurationMessageDivId).style.display="block";
}
var cuiKeyHash={};
cuiKeyHash[219]=91;
cuiKeyHash[221]=93;
cuiKeyHash[51]=35;
cuiKeyHash[186]=59;
cuiKeyHash[187]=61;
cuiKeyHash[188]=44;
cuiKeyHash[189]=45;
cuiKeyHash[190]=46;
cuiKeyHash[191]=47;
cuiKeyHash[222]=39;
function _processKeyCodes(val)
{ULSA13:;
	if(cuiKeyHash[val])
		return cuiKeyHash[val];
	return val;
}
	var g_fhs;
	function _ribbonScaleHeader(elmTopBars, isRtl)
	{ULSA13:;
		var elmTopBar2=elmTopBars.childNodes[1];
		var len=elmTopBar2.childNodes.length;
		var elmTabHeaders=null;
		var elmTabRowRight=null;
		if (typeof(isRtl)=='undefined')
			isRtl=false;
		if (typeof(g_fhs)=='undefined')
		{
			if (typeof(_ribbonShouldFixRtlHeaders)=='function')
				g_fhs=_ribbonShouldFixRtlHeaders(isRtl);
			else
				g_fhs=false;
		}
		for (var i=0; i < len; i++)
		{
			var child=elmTopBar2.childNodes[i];
			if (child.className.indexOf('ms-cui-tts') !=-1)
				elmTabHeaders=child;
			else if (child.className.indexOf('ms-cui-TabRowRight') !=-1)
				elmTabRowRight=child;
		}
		if (elmTabHeaders && 'undefined'==typeof(elmTabHeaders._widthAdded) && g_fhs)
			_ribbonFixHeaderWidth(elmTabHeaders);
		if (!elmTabHeaders || !elmTabRowRight)
			return;
		elmTabRowRight.style.display='block';
		var needsScaling=_ribbonNeedsHeaderScaling(elmTopBar2, elmTabHeaders, elmTabRowRight, isRtl);
		if (needsScaling)
		{
			_ribbonHeaderScaleDown(elmTabHeaders);
			if (_ribbonNeedsHeaderScaling(elmTopBar2, elmTabHeaders, elmTabRowRight, isRtl))
			{
				_ribbonHeaderScaleDown(elmTabHeaders);
			}
		}
		else
		{
			if (_ribbonGetScaleStep(elmTabHeaders)==0)
				return;
			_ribbonHeaderScaleUp(elmTabHeaders);
			if (_ribbonNeedsHeaderScaling(elmTopBar2, elmTabHeaders, elmTabRowRight, isRtl))
			{
				_ribbonHeaderScaleDown(elmTabHeaders);
				return;
			}
			if (_ribbonGetScaleStep(elmTabHeaders)==0)
				return;
			_ribbonHeaderScaleUp(elmTabHeaders);
			if (_ribbonNeedsHeaderScaling(elmTopBar2, elmTabHeaders, elmTabRowRight, isRtl))
				_ribbonHeaderScaleDown(elmTabHeaders);
		}
		if (_ribbonNeedsHeaderScaling(elmTopBar2, elmTabHeaders, elmTabRowRight, isRtl))
		{
			elmTabRowRight.style.display='none';
		}
	}
	function _ribbonNeedsHeaderScaling(elmTopBar2, elmTabHeaders, elmTabRowRight, isRtl)
	{ULSA13:;
		if (elmTabHeaders.offsetWidth > 0 &&
			elmTabRowRight.offsetWidth > 0 &&
			_ribbonElementsWrap(elmTabHeaders, elmTabRowRight, isRtl))
		{
			return true;
		}
		if (!g_fhs && _ribbonChildNodesWrapped(elmTabRowRight, isRtl))
			return true;
		if (_ribbonChildNodesWrapped(elmTopBar2, isRtl))
			return true;
		return _ribbonChildNodesWrapped(elmTabHeaders, isRtl);
	}
	function _ribbonChildNodesWrapped(elmParent, isRtl)
	{ULSA13:;
		if (elmParent.offsetWidth==0)
			return false;
		var elms=new Array();
		var length=elmParent.childNodes.length;
		for (var i=0; i < length; i++)
		{
			var elmChild=elmParent.childNodes[i];
			if (elmChild &&
				elmChild.nodeName !='#text' &&
				elmChild.offsetWidth > 0 &&
				elmChild.offsetHeight > 0)
			{
				elms.push(elmChild);
			}
		}
		length=elms.length;
		for (var i=0; i < length; i++)
		{
			var elmChild=elms[i];
			var elmSibling=elms[i+1];
			if (typeof(elmSibling) !='undefined' && elmSibling &&
				_ribbonElementsWrap(elmChild, elmSibling, isRtl))
			{
				return true;
			}
		}
		return false;
	}
	function _ribbonElementsWrap(elmLeft, elmRight, isRtl)
	{ULSA13:;
		if (!isRtl && (elmLeft.offsetLeft+elmLeft.offsetWidth > elmRight.offsetLeft))
			return true;
		else if (isRtl && (elmRight.offsetLeft+elmRight.offsetWidth > elmLeft.offsetLeft))
			return true;
		return false;
	}
	function _ribbonGetScaleStep(elm)
	{ULSA13:;
		if ('undefined'==typeof(elm._scaleStep))
		{
			elm._scaleStep=0;
			if (elm.className.indexOf('ms-cui-tts-scale1') !=-1)
			   elm._scaleStep=1;
			else if (elm.className.indexOf('ms-cui-tts-scale2') !=-1)
			   elm._scaleStep=2;
		}
		return elm._scaleStep;
	}
	function _ribbonSetScaleStep(elm, value)
	{ULSA13:;
		elm._scaleStep=value;
	}
	function _ribbonHeaderScaleDown(elmTabHeaders)
	{ULSA13:;
		var scaleStep=_ribbonGetScaleStep(elmTabHeaders);
		if (scaleStep==0)
		{
			_ribbonHeaderScaleIndex(elmTabHeaders, 1);
		}
		else if (scaleStep==1 || scaleStep==2)
		{
			_ribbonHeaderScaleIndex(elmTabHeaders, 2);
		}
	}
	function _ribbonHeaderScaleUp(elmTabHeaders)
	{ULSA13:;
		var scaleStep=_ribbonGetScaleStep(elmTabHeaders);
		if (scaleStep==1)
			_ribbonHeaderScaleIndex(elmTabHeaders, 0);
		else if (scaleStep==2)
		{
			_ribbonHeaderScaleIndex(elmTabHeaders, 1);
		}
	}
	var g_ribbonHeaderScaleClass=['ms-cui-tts', 'ms-cui-tts-scale-1', 'ms-cui-tts-scale-2'];
	function _ribbonHeaderScaleIndex(elmTabHeaders, index)
	{ULSA13:;
		elmTabHeaders.className=g_ribbonHeaderScaleClass[index];
		_ribbonSetScaleStep(elmTabHeaders, index);
		_ribbonFixHeaderWidth(elmTabHeaders);
	}
	function _ribbonFixHeaderWidth(elmTabHeaders)
	{ULSA13:;
		if (!g_fhs)
			return;
		var width=_ribbonCalculateWidth(elmTabHeaders);
		elmTabHeaders.style.width=width+'px';
		elmTabHeaders._widthAdded=true;
	}
	function _ribbonCalculateWidth(elmTabHeaders)
	{ULSA13:;
		var width=0;
		var tabs=elmTabHeaders.childNodes;
		var length=tabs.length;
		for (var i=0; i < length; i++)
		{
			var elm=tabs[i];
			if (elm &&
				elm.nodeName=='LI' &&
				elm.offsetWidth > 0)
			{
				var ctxlGroup=elm.childNodes[1];
				if (ctxlGroup && ctxlGroup.nodeName=='UL')
				{
					var groupWidth=_ribbonCalculateWidth(ctxlGroup);
					ctxlGroup.style.width=groupWidth+'px';
					width=width+groupWidth+4;
				}
				else
				{
					width=width+elm.offsetWidth+2;
				}
			}
		}
		return width;
	}
function _ribbonOnStartInit(ribbonInfo)
{ULSA13:;
	OnRibbonMinimizedChanged(ribbonInfo.initialTabId=="Ribbon.Read");
	var _elmRibbon=document.getElementById("Ribbon");
	if(!_elmRibbon || (ribbonInfo && ribbonInfo.buildMinimized))
		return;
	var _elmTabCont=document.createElement("div");
	_elmTabCont.className="ms-cui-tabContainer";
	var _elmBlankTab=document.createElement("ul");
	_elmBlankTab.id="Ribbon.BlankTab";
	_elmBlankTab.className="ms-cui-tabBody";
	_elmBlankTab.innerHTML="<span class=\"ms-ribbontabswitchloading\"><img src=\"/_layouts/images/loadingcirclests16.gif\" alt=\"\"/><span>"+L_Loading_Text+"</span></span>";
	_elmTabCont.appendChild(_elmBlankTab);
	_elmRibbon.appendChild(_elmTabCont);
}
var L_Status_Text=" Estado";
var L_StatusBarRed_Text="Muy importante";
var L_StatusBarYellow_Text="Importante";
var L_StatusBarGreen_Text="Correcto";
var L_StatusBarBlue_Text="Información";
var StatusIdWithTopPriority=null;	
var StatusColorWithTopPriority=null;
var StatusPriority={
	red		:4,
	yellow	:3,
	green	:2,
	blue	:1
};
var StatusBarClassNames={
	4	:"s4-status-s4",
	3	:"s4-status-s3",
	2	:"s4-status-s2",
	1	:"s4-status-s1"
};
var StatusTitle={
	4	:L_StatusBarRed_Text,
	3	:L_StatusBarYellow_Text,
	2	:L_StatusBarGreen_Text,
	1	:L_StatusBarBlue_Text
};
var g_uniqueIndex=0;
function getUniqueIndex()
{ULSA13:;
	g_uniqueIndex++;
	return g_uniqueIndex;
}
function addStatus(strTitle, strHtml, atBegining)
{ULSA13:;
	var sb=document.getElementById("pageStatusBar");
	if (sb !=null)
	{
		sb.setAttribute("aria-live", "polite");
		sb.setAttribute("aria-relevant", "all");
		var st=_createStatusMarkup(strTitle, strHtml, true);
		if (!atBegining)
			sb.appendChild(st);
		else
		{
			var refs=sb.getElementsByTagName("SPAN");
			var ref=refs.length > 0 ? refs[0] : null;
			if (ref !=null)
				sb.insertBefore(st, ref);
			else
				sb.appendChild(st);
		}
		if (sb.childNodes.length==1)
		{
			StatusIdWithTopPriority=st.id;
			StatusColorWithTopPriority=1 ;
		}
		sb.style.display="block";
		return st.id;
	}
}
function appendStatus(sid, strTitle, strHtml)
{ULSA13:;
	var sb=document.getElementById("pageStatusBar");
	var stRef=document.getElementById(sid);
	if (sb !=null && stRef !=null)
	{
		var st=null;
		if (stRef.lastChild && stRef.lastChild.tagName=="BR")
		{
			stRef.removeChild(stRef.lastChild);
			st=_createStatusMarkup(strTitle, strHtml, true);
		}
		else
		{
			st=_createStatusMarkup(strTitle, strHtml, false);
		}
		if (stRef.nextSibling !=null)
			sb.insertBefore(st, stRef.nextSibling);
		else
			sb.appendChild(st);
		return st.id;
	}
}
function _createStatusMarkup(strTitle, strHtml, bWithBR)
{ULSA13:;
	var st=document.createElement("SPAN");
	st.id="status_"+getUniqueIndex();
	var rg=[];
	rg.push("<span id='");
	rg.push(st.id);
	rg.push("_hiddenPriMsg");
	rg.push("' class='ms-hidden'>");
	rg.push(StatusTitle[1]+L_Status_Text);
	rg.push("</span>");
	if(strTitle.length !=0)
	{
		rg.push("<b>");
		rg.push(strTitle);
		rg.push("</b>&#160;");
	}
	rg.push("<span id='");
	rg.push(st.id);
	rg.push("_body");
	rg.push("'>");
	rg.push(strHtml);
	rg.push("</span>&#160;&#160;");
	if (bWithBR)
		rg.push("<br/>");
	st.innerHTML=rg.join("");
	st.setAttribute("role", "alert");
	st.priorityColor=1;
	st.title=StatusTitle[1];
	st.tabIndex=0;
	return st;
}
function removeAllStatus(hide)
{ULSA13:;
	var sb=document.getElementById("pageStatusBar");
	if (sb !=null)
	{
		sb.innerHTML="";
		sb.className=StatusBarClassNames[1];
		StatusColorWithTopPriority=null;
		StatusIdWithTopPriority=null;
		if (hide)
			sb.style.display="none";
	}
}
function setStatusPriColor(sid, strColor)
{ULSA13:;
	var st=document.getElementById(sid);
	if (st !=null && typeof(strColor)=='string')
	{
	if (strColor in StatusPriority)
		{
			st.priorityColor=StatusPriority[strColor];
			st.title=StatusTitle[st.priorityColor];
		}
		else
		{
			st.priorityColor=1;
			st.title=StatusTitle[1];
		}
		var hiddenSpan=st.firstChild;
		if (hiddenSpan !=null && hiddenSpan.id==(sid+"_hiddenPriMsg"))
		{
			hiddenSpan.innerHTML=st.title+L_Status_Text;
		}
		if (sid==StatusIdWithTopPriority)
		{
			if (st.priorityColor >=StatusColorWithTopPriority)
				StatusColorWithTopPriority=st.priorityColor;
			else
				_selectStatusWithTopPriority();
		}
		else
		{
			if (st.priorityColor >  StatusColorWithTopPriority)
			{
				StatusIdWithTopPriority=sid;
				StatusColorWithTopPriority=st.priorityColor;		
			}
		}
		var sb=document.getElementById("pageStatusBar");
		if (sb)
			sb.className=StatusBarClassNames[StatusColorWithTopPriority];
	}
}
function _selectStatusWithTopPriority()
{ULSA13:;
	var sb=document.getElementById("pageStatusBar");
	if (sb !=null)
	{
		var statusId=null;
		var statusColor=1;
		var statuses=sb.childNodes;
		var statusesLen=statuses.length;
		var status=null;
		for (var i=0; i < statusesLen; i++)
		{
			status=statuses[i];
			if (status.priorityColor > statusColor)
			{
				statusColor=status.priorityColor;
				statusId=status.id;
			}
		}
		StatusIdWithTopPriority=statusId;
		StatusColorWithTopPriority=statusColor;
	}
}
function updateStatus(sid, strHtml)
{ULSA13:;
	var bid=sid+"_body";
	var b=document.getElementById(bid);
	if (b)
		b.innerHTML=strHtml;
}
function removeStatus(sid)
{ULSA13:;
	var st=document.getElementById(sid);
	if (st !=null)
	{
		if (st.lastChild && st.lastChild.tagName=="BR")
		{
			var prevSt=st.previousSibling;
			if (prevSt && prevSt.lastChild && prevSt.lastChild.tagName !="BR")
			{
				var br=document.createElement("BR");
				prevSt.appendChild(br);
			}
		}
		st.parentNode.removeChild(st);
		var sb=document.getElementById("pageStatusBar");
		if (sb)
		{
			if (sb.getElementsByTagName("SPAN").length==0)
			{
				sb.className=StatusBarClassNames[1];
				StatusColorWithTopPriority=null;
				StatusIdWithTopPriority=null;
				sb.style.display="none";
			}
			else
			{
				if (sid==StatusIdWithTopPriority)
				{
					_selectStatusWithTopPriority();
					sb.className=StatusBarClassNames[StatusColorWithTopPriority];
				}
			}
		}
	}
}
var g_dlgWndTop=null;
function _dlgWndTop()
{ULSA13:;
	if (g_dlgWndTop)
	{
		return g_dlgWndTop;
	}
	try
	{
		var parentIsDialogTop=window.parent.g_DialogWindowTop;
		if (parentIsDialogTop)
		{
			g_dlgWndTop=window.parent;
		}
	}
	catch (e)
	{
	}
	finally
	{
		if (!g_dlgWndTop)
		{
			window.self.g_DialogWindowTop=true;
			g_dlgWndTop=window.self;
		}
	}
	return g_dlgWndTop;
}
function commonShowModalDialog(url, features, callback, args)
{ULSA13:;
	if (document.getElementById("__spPickerHasReturnValue") !=null)
		document.getElementById("__spPickerHasReturnValue").value="";
	if (document.getElementById("__spPickerReturnValueHolder") !=null)
		document.getElementById("__spPickerReturnValueHolder").value="";
	commonModalDialogReturnValue.clear();
	var rv;
	if (window.showModalDialog && !browseris.safari125up)
	{
		rv=window.showModalDialog(url, args, features);
		if (callback)
		{
			invokeModalDialogCallback(callback, rv);
		}
	}
	else
	{
		var defaultWidth=500, defaultHeight=550, defaultScrollbars="yes";
		if(!features) features="width="+defaultWidth+",height="+defaultHeight;
		else
		{
			function assocArray() {ULSA13:; return new Array(); }
			function assocArray_add(array, key, value)
			{ULSA13:;
				array.push(key);
				array[key]=value;
			}
			function assocArray_keys(array)
			{ULSA13:;
				var keys=new Array();
				for(var i=0; i<array.length; i++) keys.push(array[i]);
				return keys;
			}
			var feats=assocArray(), fre, split;
			if(features.search(/^(\s*\w+\s*:\s*.+?\s*)(;\s*\s*\w+\s*:\s*.+?\s*)*(;\s*)?$/) !=-1)
			{
				fre=/^\s*(\w+)\s*:\s*(.+?)\s*$/;
				split=features.split(/\s*;\s*/);
			}
			else
			{
				fre=/^\s*(\w+)\s*=\s*(.+?)\s*$/;
				split=features.split(/\s*,\s*/);
			}
			for(var feat in split)
			{
				var kv=fre.exec(split[feat]);
				if(kv && kv.length==3) assocArray_add(feats, kv[1].toLowerCase(), kv[2]);
			}
			if(!feats["width"]) assocArray_add(feats, "width", feats["dialogwidth"] || defaultWidth);
			if(!feats["height"]) assocArray_add(feats, "height", feats["dialogheight"] || defaultHeight);
			if(!feats["scrollbars"]) assocArray_add(feats, "scrollbars", feats["scroll"] || defaultScrollbars);
			features='';
			var keys=assocArray_keys(feats);
			for(var i in keys)
			{
				if(features) features+=",";
				features+=keys[i]+"="+feats[keys[i]];
			}
		}
		var modalDialog=window.open(url, '_blank', features+',modal=yes,dialog=yes');
		modalDialog.dialogArguments=args;
		window.onfocus=function() {ULSA13:;
			var bHasReturnValue
=((document.getElementById("__spPickerHasReturnValue") !=null) &&
					  (document.getElementById("__spPickerHasReturnValue").value=="1"))
				  || commonModalDialogReturnValue.isSet();
			if (modalDialog && !modalDialog.closed && !bHasReturnValue)
			{
				modalDialog.focus();
			}
			else
			{
				window.onfocus=null;
				if (callback)
				{
					invokeModalDialogCallback(callback, rv);
				}
			}
		}
		if (!browseris.ie)
		{
			if (window.frameElement !=null)
			{
				window.fndlgClose=callback;
			}
		}
	}
	return rv;
}
function invokeModalDialogCallback(callback, rv)
{ULSA13:;
	if (typeof(rv) !="undefined" && rv !=null)
	{
		callback(rv);
	}
	else if (commonModalDialogReturnValue.isSet())
	{
		rv=commonModalDialogReturnValue.get();
		callback(rv);
		commonModalDialogReturnValue.clear();
	}
	else if (document.getElementById("__spPickerHasReturnValue") !=null &&
		document.getElementById("__spPickerHasReturnValue").value=="1" &&
		document.getElementById("__spPickerReturnValueHolder") !=null)
	{
		rv=document.getElementById("__spPickerReturnValueHolder").value;
		callback(rv);
	}
	return rv;
}
function setModalDialogReturnValue(wnd, returnValue)
{ULSA13:;
	if (wnd.opener !=null &&
		typeof(returnValue)=='string' &&
		wnd.opener.document.getElementById('__spPickerHasReturnValue') !=null &&
		wnd.opener.document.getElementById('__spPickerReturnValueHolder') !=null)
	{
		wnd.opener.document.getElementById('__spPickerHasReturnValue').value='1';
		wnd.opener.document.getElementById('__spPickerReturnValueHolder').value=returnValue;
	}
	else
	{
	   setModalDialogObjectReturnValue(wnd, returnValue);
	}
	if (browseris.safari125up)
	{
		if (wnd.opener !=null && wnd.opener.fndlgClose !=null)
			wnd.opener.fndlgClose(returnValue);
	}
}
function setModalDialogObjectReturnValue(wnd, returnValue)
{ULSA13:;
	if (wnd.showModalDialog && !browseris.safari125up)
	{
		wnd.returnValue=returnValue;
	}
	else if (wnd.opener !=null)
	{
		wnd.opener.commonModalDialogReturnValue.set(returnValue);
	}
}
function CommonGlobalDialogReturnValue()
{ULSA13:;
	var hasRetVal=false;
	var retVal=null;
	this.set=function (obj)
		{ULSA13:;
			if(typeof(obj) !="undefined")
			{
				this.retVal=obj;
				this.hasRetval=true;
			}
		}
	this.isSet=function()  {ULSA13:; return this.hasRetval;}
	this.get=function() {ULSA13:; if(this.hasRetval) return this.retVal; }
	this.clear=function() {ULSA13:; this.hasRetval=false; this.retVal=null; }
}
var commonModalDialogReturnValue=new CommonGlobalDialogReturnValue();
function commonModalDialogOpen(url, options, callback, args)
{ULSA13:;
	var fn=function ()
	{ULSA13:;
		options.url=url;
		options.dialogReturnValueCallback=callback;
		options.args=args;
		var dlg=SP.UI.ModalDialog.showModalDialog(options);
		dlg.get_frameElement().commonModalDialogClose=commonModalDialogClose;
	};
	var defd;
	try
	{
		defd=typeof(SP.UI.ModalDialog.showModalDialog);
	}
	catch (e)
	{
		defd="undefined"
	}
	EnsureScript("SP.UI.Dialog.js", defd, fn);
}
function commonModalDialogClose(dialogResult, returnValue)
{ULSA13:;
	var dlg=_dlgWndTop().g_childDialog;
	if (dlg)
	{
		dlg.set_returnValue(returnValue);
		dlg.close(dialogResult);
	}
}
function commonModalDialogGetArguments()
{ULSA13:;
	var dlg=_dlgWndTop().g_childDialog;
	if (dlg && typeof(dlg.get_args) !="undefined")
		return dlg.get_args();
	return null;
}
function ShowPopupDialog(dlgUrl)
{ULSA13:;
	ShowPopupDialogWithCallback(dlgUrl, PopupDialogCallback);
}
function ShowPopupDialogWithCallback(dlgUrl, dialogCallback)
{ULSA13:;
	var fn=function ()
	{ULSA13:;
		if (FV4UI())
		{
		var dlgOptions={};
			dlgOptions.url=dlgUrl;
			dlgOptions.dialogReturnValueCallback=dialogCallback;
			var dlg=SP.UI.ModalDialog.showModalDialog(dlgOptions);
			dlg.get_frameElement().commonModalDialogClose=commonModalDialogClose;
	}else
		{
	   	 STSNavigate(dlgUrl);
		}
	};
	var defd;
	try
	{
		defd=typeof(SP.UI.ModalDialog.showModalDialog);
	}
	catch (e)
	{
		defd="undefined"
	}
	EnsureScript("SP.UI.Dialog.js", defd, fn);
}
function PopupDialogCallback(dialogResult, returnValue)
{ULSA13:;
	if (dialogResult==1)
	{
		STSNavigate(_dlgWndTop().location.href);
	}
}
function SelectField(view, selectID) {ULSA13:;
	CoreInvoke('_SelectField', view, selectID);
}
function FilterField(view, fieldName, fieldValue, selOption) {ULSA13:;
	CoreInvoke('_FilterField', view, fieldName, fieldValue, selOption);
}
function SetControlValue(controlId, value) {ULSA13:;
	CoreInvoke('_SetControlValue', controlId, value);
}
function SubmitFormPost(url, bForceSubmit, bDemoteIntoFormBody) {ULSA13:;
	CoreInvoke('_SubmitFormPost', url, bForceSubmit, bDemoteIntoFormBody);
}
function GoToPageRelative(url) {ULSA13:;
	CoreInvoke('_GoToPageRelative', url);
}
function EnterFolder(url) {ULSA13:;
	CoreInvoke('_EnterFolder', url);
}
function HandleFolder(ele, objEvent, url, fTransformServiceOn, fShouldTransformExtension,
	fTransformHandleUrl, strHtmlTrProgId, iDefaultItemOpen, strProgId, strHtmlType, strServerFileRedirect,
	strCheckoutUser, strCurrentUser, strRequireCheckout, strCheckedoutTolocal, strPermmask) {ULSA13:;
	CoreInvoke('_HandleFolder', ele, objEvent, url, fTransformServiceOn, fShouldTransformExtension,
	  fTransformHandleUrl, strHtmlTrProgId, iDefaultItemOpen, strProgId, strHtmlType, strServerFileRedirect,
	  strCheckoutUser, strCurrentUser, strRequireCheckout, strCheckedoutTolocal, strPermmask);
}
function VerifyFolderHref(ele, objEvent, url, strHtmlTrProgId, iDefaultItemOpen, strProgId, strHtmlType, strServerFileRedirect)
{ULSA13:;
	CoreInvoke('_VerifyFolderHref', ele, objEvent, url, strHtmlTrProgId, iDefaultItemOpen, strProgId, strHtmlType, strServerFileRedirect);
}
function VerifyHref(ele, objEvent, iDefaultItemOpen, strProgId, strServerFileRedirect)
{ULSA13:;
	CoreInvoke('_VerifyHref', ele, objEvent, iDefaultItemOpen, strProgId, strServerFileRedirect);
}
function DispEx(ele, objEvent, fTransformServiceOn, fShouldTransformExtension,
	fTransformHandleUrl, strHtmlTrProgId, iDefaultItemOpen, strProgId, strHtmlType, strServerFileRedirect,
	strCheckoutUser, strCurrentUser, strRequireCheckout, strCheckedoutTolocal, strPermmask)
{ULSA13:;
	CoreInvoke('_DispEx', ele, objEvent, fTransformServiceOn, fShouldTransformExtension,
	fTransformHandleUrl, strHtmlTrProgId, iDefaultItemOpen, strProgId, strHtmlType, strServerFileRedirect,
	strCheckoutUser, strCurrentUser, strRequireCheckout, strCheckedoutTolocal, strPermmask);
}
function EditItemWithCheckoutAlert(event, Url, bCheckout, bIsCheckedOutToLocal, strDocument, strhttpRoot,
			strCurrentUser, strCheckoutUser) {ULSA13:;
	CoreInvoke('_EditItemWithCheckoutAlert', event, Url, bCheckout, bIsCheckedOutToLocal, strDocument, strhttpRoot,
	  strCurrentUser, strCheckoutUser);
}
function STSNavigateWithCheckoutAlert(Url, bCheckout, bIsCheckedOutToLocal, strDocument, strhttpRoot,
			strCurrentUser, strCheckoutUser)
{ULSA13:;
	CoreInvoke('_STSNavigateWithCheckoutAlert', Url, bCheckout, bIsCheckedOutToLocal, strDocument, strhttpRoot,
	  strCurrentUser, strCheckoutUser);
}
function NewItem2(evt, url) {ULSA13:;
	CoreInvoke('_NewItem2', evt, url);
}
function NewItem(url) {ULSA13:;
	CoreInvoke('_NewItem', url);
}
function EditItem2(evt, url) {ULSA13:;
	CoreInvoke('_EditItem2', evt, url);
}
function EditItem(url) {ULSA13:;
	CoreInvoke('_EditItem', url);
}
function RefreshPageTo(evt, url, bForceSubmit) {ULSA13:;
	CoreInvoke('_RefreshPageTo', evt, url, bForceSubmit);
}
function AddGroupToCookie(groupName) {ULSA13:;
	CoreInvoke('_AddGroupToCookie', groupName);
}
function RemoveGroupFromCookie(groupName) {ULSA13:;
	CoreInvoke('_RemoveGroupFromCookie', groupName);
}
function ExpGroupBy(formObj) {ULSA13:;
	CoreInvoke('_ExpGroupBy', formObj);
}
function DispDocItem(ele,strProgId) {ULSA13:;
	CoreInvoke('_DispDocItem',ele,strProgId);
}
function DispDocItemExWithServerRedirect(ele, objEvent, fTransformServiceOn, fShouldTransformExtension,
			fTransformHandleUrl, strProgId, iDefaultItemOpen, strServerFileRedirect) {ULSA13:;
	CoreInvoke('_DispDocItemExWithServerRedirect', ele, objEvent, fTransformServiceOn,
	  fShouldTransformExtension, fTransformHandleUrl, strProgId, iDefaultItemOpen, strServerFileRedirect);
}
function DispDocItemEx(ele, fTransformServiceOn, fShouldTransformExtension, fTransformHandleUrl, strProgId) {ULSA13:;
	CoreInvoke('_DispDocItemEx', ele, fTransformServiceOn, fShouldTransformExtension, fTransformHandleUrl, strProgId);
}
function PortalPinToMyPage(eForm, portalUrl, instanceID) {ULSA13:;
	CoreInvoke('_PortalPinToMyPage', eForm, portalUrl, instanceID);
}
function PortalPinToMyPage(eForm, portalUrl, instanceId, listTitle, listDescription, listViewUrl, baseType, serverTemplate) {ULSA13:;
	CoreInvoke('_PortalPinToMyPage', eForm, portalUrl, instanceId, listTitle, listDescription, listViewUrl, baseType, serverTemplate);
}
function MoveToViewDate(strdate, view_type, ctxid) {ULSA13:;
	CoreInvoke('_MoveToViewDate', strdate, view_type, ctxid);
}
function MoveToDate(strdate, ctxid) {ULSA13:;
	CoreInvoke('_MoveToDate', strdate, ctxid);
}
function ClickDay(date) {ULSA13:;
	CoreInvoke('_ClickDay', date);
}
function GetMonthView(str) {ULSA13:;
	CoreInvoke('_GetMonthView', str);
}
function OptLoseFocus(opt) {ULSA13:;
	CoreInvoke('_OptLoseFocus', opt);
}
function SetCtrlFromOpt(ctrl, opt) {ULSA13:;
	CoreInvoke('_SetCtrlFromOpt', ctrl, opt);
}
function ChangeLayoutMode(p1, p2) {ULSA13:;
	CoreInvoke('_ChangeLayoutMode', p1, p2);
}
function MSOLayout_ChangeLayoutMode(p1,p2) {ULSA13:;
	ChangeLayoutMode(p1, p2);
}
function WebPartMenuKeyboardClick(elem, expectedKeyCode1, expectedKeyCode2, event) {ULSA13:;
	CoreInvoke('_WebPartMenuKeyboardClick', elem, expectedKeyCode1, expectedKeyCode2, event);
}
function ShowToolPane2Wrapper(p1, p2, p3) {ULSA13:;
	CoreInvoke('_ShowToolPane2Wrapper', p1, p2, p3);
}
function EditInSPD(strDocument, bRefresh) {ULSA13:;
	CoreInvoke('_EditInSPD', strDocument, bRefresh);
}
function SetupFixedWidthWebParts() {ULSA13:;
	CoreInvoke('_SetupFixedWidthWebParts');
}
function ToggleAllItems(evt, cbx, ctxNum) {ULSA13:;
	CoreInvoke('_ToggleAllItems', evt, cbx, ctxNum);
}
function CommandUIExecuteCommand(commandId) {ULSA13:;
	CoreInvoke('_CommandUIExecuteCommand', commandId);
}
function PopMenuFromChevron(e) {ULSA13:;
	CoreInvoke('_PopMenuFromChevron', e);
}
function NavigateToSubNewAspx(strHttpRoot, strArgs) {ULSA13:;
	CoreInvoke('_NavigateToSubNewAspx', strHttpRoot, strArgs);
}
function NavigateToManagePermsPage(strHttpRoot, strListId, strFileRef) {ULSA13:;
	CoreInvoke('_NavigateToManagePermsPage', strHttpRoot, strListId, strFileRef);
}
function DoNavigateToTemplateGallery(strSaveLocUrl, strTGUrl) {ULSA13:;
	CoreInvoke('_DoNavigateToTemplateGallery', strSaveLocUrl, strTGUrl);
}
function RefreshPage(dialogResult) {ULSA13:;
	CoreInvoke('_RefreshPage', dialogResult);
}
function OpenPopUpPage(url, callback, width, height) {ULSA13:;
	CoreInvoke('_OpenPopUpPage', url, callback, width, height);
}
function OpenCreateWebPageDialog(url) {ULSA13:;
	CoreInvoke('_OpenCreateWebPageDialog', url);
}
function EditLink2(elm, ctxNum) {ULSA13:;
	CoreInvoke('_EditLink2', elm, ctxNum);
}
function GoBack(defViewUrl) {ULSA13:;
	CoreInvoke('_GoBack', defViewUrl);
}
function ReplyItem(url, threading, guid, subject) {ULSA13:;
	CoreInvoke('_ReplyItem', url, threading, guid, subject);
}
function ExportToDatabase(strSiteUrl, strListID, strViewID, fUseExistingDB) {ULSA13:;
	CoreInvoke('_ExportToDatabase', strSiteUrl, strListID, strViewID, fUseExistingDB);
}
function ExportList(using) {ULSA13:;
	CoreInvoke('_ExportList', using);
}
function ClearSearchTerm(guidView) {ULSA13:;
	CoreInvoke('_ClearSearchTerm', guidView);
}
function SubmitSearchForView(ViewGuid) {ULSA13:;
	CoreInvoke('_SubmitSearchForView', ViewGuid);
}
function SubmitSearchRedirect(strUrl) {ULSA13:;
	CoreInvoke('_SubmitSearchRedirect', strUrl);
}
function AlertAndSetFocus(msg, fieldName) {ULSA13:;
	CoreInvoke('_AlertAndSetFocus', msg, fieldName);
}
function AlertAndSetFocusForDropdown(msg, fieldName) {ULSA13:;
	CoreInvoke('_AlertAndSetFocusForDropdown', msg, fieldName);
}
function AddSilverlightWebPart(item, zoneNum, zoneIndex) {ULSA13:;
	CoreInvoke('_AddSilverlightWebPart', item, zoneNum, zoneIndex);
}
function UserSelectionOnClick(chk, viewCounter) {ULSA13:;
	CoreInvoke('_UserSelectionOnClick', chk, viewCounter);
}
function OnIframeLoad() {ULSA13:;
	CoreInvoke('_OnIframeLoad');
}
function OnFocusFilter(elm) {ULSA13:;
	CoreInvoke('_OnFocusFilter', elm);
}
function TopHelpButtonClick(strParam) {ULSA13:;
	CoreInvoke('_TopHelpButtonClick', strParam);
}
function HelpWindowKey(strKey) {ULSA13:;
	CoreInvoke('_HelpWindowKey', strKey);
}
function HelpWindowUrl(strUrl) {ULSA13:;
	CoreInvoke('_HelpWindowUrl', strUrl);
}
function HelpWindow() {ULSA13:;
	CoreInvoke('_HelpWindow');
}
function OnClickFilter(obj, e) {ULSA13:;
	return CoreInvoke('_OnClickFilter', obj, e);
}
function GCActivateAndFocus(GCObject) {ULSA13:;
	CoreInvoke('_GCActivateAndFocus', GCObject);
}
function GCNavigateToNonGridPage() {ULSA13:;
	CoreInvoke('_GCNavigateToNonGridPage');
}
function _EnsureJSClass(nsStr, isNamespace)
{ULSA13:;
	var parts=nsStr.split(".");
	var prevNS;
	for (var i=0, pLen=parts.length; i<pLen; i++)
	{
		var ns=parts[i];
		if (typeof(prevNS)=="undefined")
		{
			prevNS=window;
		}
		if (typeof(prevNS[ns])=="undefined")
		{
			prevNS[ns]=new Object();
		}
		prevNS=prevNS[ns];
		if (isNamespace)
		{
			prevNS.__namespace=true;
		}
	}
}
function _EnsureJSNamespace(nsStr)
{ULSA13:;
	_EnsureJSClass(nsStr, true);
}
_EnsureJSNamespace("SP");
_EnsureJSClass("SP.SOD");
SP.SOD.execute=EnsureScriptParams;
SP.SOD.executeFunc=EnsureScriptFunc;
SP.SOD.registerSod=RegisterSod;
SP.SOD.registerSodDep=RegisterSodDep;
SP.SOD.executeOrDelayUntilScriptLoaded=ExecuteOrDelayUntilScriptLoaded;
SP.SOD.executeOrDelayUntilEventNotified=ExecuteOrDelayUntilEventNotified;
SP.SOD.notifyScriptLoadedAndExecuteWaitingJobs=NotifyScriptLoadedAndExecuteWaitingJobs;
SP.SOD.notifyEventAndExecuteWaitingJobs=NotifyEventAndExecuteWaitingJobs;
SP.SOD.get_prefetch=function () {ULSA13:;return g_prefetch;}
SP.SOD.set_prefetch=function (prefetch) {ULSA13:;g_prefetch=prefetch;}
_EnsureJSNamespace("SP.UI");
_EnsureJSClass("SP.UI.Workspace");
SP.UI.Workspace.add_resized=function (handler)
{ULSA13:;
	g_workspaceResizedHandlers.push(handler);
};
SP.UI.Workspace.remove_resized=function (handler)
{ULSA13:;
	var match=-1;
	for (var i=0, wLen=g_workspaceResizedHandlers.length; i<wLen; i++)
	{
		if (handler==g_workspaceResizedHandlers[i])
		{
			match=i;
			break;
		}
	}
	if (match !=-1)
	{
		g_workspaceResizedHandlers.splice(match, 1);
	}
};
_EnsureJSClass("SP.UI.ModalDialog");
var _SP_UI_ModalDialog=SP.UI.ModalDialog;
_SP_UI_ModalDialog.ShowPopupDialog=ShowPopupDialog;
_SP_UI_ModalDialog.OpenPopUpPage=OpenPopUpPage;
_SP_UI_ModalDialog.commonModalDialogOpen=commonModalDialogOpen;
_SP_UI_ModalDialog.commonModalDialogClose=commonModalDialogClose;
_SP_UI_ModalDialog.RefreshPage=RefreshPage;
if( typeof(Sys) !="undefined" && Sys && Sys.Application ){
   Sys.Application.notifyScriptLoaded();
}
NotifyScriptLoadedAndExecuteWaitingJobs("init.js");

