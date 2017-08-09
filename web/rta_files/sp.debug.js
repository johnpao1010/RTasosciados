function ULS5Vl(){var o=new Object;o.ULSTeamName="Microsoft SharePoint Foundation";o.ULSFileName="SP.debug.js";return o;}
// JScript File


Type.registerNamespace('SP');

SP.PermissionKind = function() {}
SP.PermissionKind.prototype = {
    emptyMask: 0, 
    viewListItems: 1, 
    addListItems: 2, 
    editListItems: 3, 
    deleteListItems: 4, 
    approveItems: 5, 
    openItems: 6, 
    viewVersions: 7, 
    deleteVersions: 8, 
    cancelCheckout: 9, 
    managePersonalViews: 10, 
    manageLists: 12, 
    viewFormPages: 13, 
    open: 17, 
    viewPages: 18, 
    addAndCustomizePages: 19, 
    applyThemeAndBorder: 20, 
    applyStyleSheets: 21, 
    viewUsageData: 22, 
    createSSCSite: 23, 
    manageSubwebs: 24, 
    createGroups: 25, 
    managePermissions: 26, 
    browseDirectories: 27, 
    browseUserInfo: 28, 
    addDelPrivateWebParts: 29, 
    updatePersonalWebParts: 30, 
    manageWeb: 31, 
    useClientIntegration: 37, 
    useRemoteAPIs: 38, 
    manageAlerts: 39, 
    createAlerts: 40, 
    editMyUserInfo: 41, 
    enumeratePermissions: 63, 
    fullMask: 65
}
SP.PermissionKind.registerEnum('SP.PermissionKind', false);


SP.ULSTraceLevel = function() {}
SP.ULSTraceLevel.prototype = {
    verbose: 100
}
SP.ULSTraceLevel.registerEnum('SP.ULSTraceLevel', false);


SP.AddFieldOptions = function() {}
SP.AddFieldOptions.prototype = {
    defaultValue: 0, 
    addToDefaultContentType: 1, 
    addToNoContentType: 2, 
    addToAllContentTypes: 4, 
    addFieldInternalNameHint: 8, 
    addFieldToDefaultView: 16, 
    addFieldCheckDisplayName: 32
}
SP.AddFieldOptions.registerEnum('SP.AddFieldOptions', false);


SP.BaseType = function() {}
SP.BaseType.prototype = {
    none: -1, 
    genericList: 0, 
    documentLibrary: 1, 
    unused: 2, 
    discussionBoard: 3, 
    survey: 4, 
    issue: 5
}
SP.BaseType.registerEnum('SP.BaseType', false);


SP.BrowserFileHandling = function() {}
SP.BrowserFileHandling.prototype = {
    permissive: 0, 
    strict: 1
}
SP.BrowserFileHandling.registerEnum('SP.BrowserFileHandling', false);


SP.CalendarType = function() {}
SP.CalendarType.prototype = {
    none: 0, 
    gregorian: 1, 
    japan: 3, 
    taiwan: 4, 
    korea: 5, 
    hijri: 6, 
    thai: 7, 
    hebrew: 8, 
    gregorianMEFrench: 9, 
    gregorianArabic: 10, 
    gregorianXLITEnglish: 11, 
    gregorianXLITFrench: 12, 
    koreaJapanLunar: 14, 
    chineseLunar: 15, 
    sakaEra: 16
}
SP.CalendarType.registerEnum('SP.CalendarType', false);


SP.ChangeType = function() {}
SP.ChangeType.prototype = {
    noChange: 0, 
    add: 1, 
    update: 2, 
    deleteObject: 3, 
    rename: 4, 
    moveAway: 5, 
    moveInto: 6, 
    restore: 7, 
    roleAdd: 8, 
    roleDelete: 9, 
    roleUpdate: 10, 
    assignmentAdd: 11, 
    assignmentDelete: 12, 
    memberAdd: 13, 
    memberDelete: 14, 
    systemUpdate: 15, 
    navigation: 16, 
    scopeAdd: 17, 
    scopeDelete: 18, 
    listContentTypeAdd: 19, 
    listContentTypeDelete: 20
}
SP.ChangeType.registerEnum('SP.ChangeType', false);


SP.CheckinType = function() {}
SP.CheckinType.prototype = {
    minorCheckIn: 0, 
    majorCheckIn: 1, 
    overwriteCheckIn: 2
}
SP.CheckinType.registerEnum('SP.CheckinType', false);


SP.CheckOutType = function() {}
SP.CheckOutType.prototype = {
    online: 0, 
    offline: 1, 
    none: 2
}
SP.CheckOutType.registerEnum('SP.CheckOutType', false);


SP.ChoiceFormatType = function() {}
SP.ChoiceFormatType.prototype = {
    dropdown: 0, 
    radioButtons: 1
}
SP.ChoiceFormatType.registerEnum('SP.ChoiceFormatType', false);


SP.CustomizedPageStatus = function() {}
SP.CustomizedPageStatus.prototype = {
    none: 0, 
    uncustomized: 1, 
    customized: 2
}
SP.CustomizedPageStatus.registerEnum('SP.CustomizedPageStatus', false);


SP.DateTimeFieldFormatType = function() {}
SP.DateTimeFieldFormatType.prototype = {
    dateOnly: 0, 
    dateTime: 1
}
SP.DateTimeFieldFormatType.registerEnum('SP.DateTimeFieldFormatType', false);


SP.DraftVisibilityType = function() {}
SP.DraftVisibilityType.prototype = {
    reader: 0, 
    author: 1, 
    approver: 2
}
SP.DraftVisibilityType.registerEnum('SP.DraftVisibilityType', false);


SP.FeatureDefinitionScope = function() {}
SP.FeatureDefinitionScope.prototype = {
    none: 0, 
    farm: 1, 
    site: 2
}
SP.FeatureDefinitionScope.registerEnum('SP.FeatureDefinitionScope', false);


SP.FieldType = function() {}
SP.FieldType.prototype = {
    invalid: 0, 
    integer: 1, 
    text: 2, 
    note: 3, 
    dateTime: 4, 
    counter: 5, 
    choice: 6, 
    lookup: 7, 
    boolean: 8, 
    number: 9, 
    currency: 10, 
    URL: 11, 
    computed: 12, 
    threading: 13, 
    guid: 14, 
    multiChoice: 15, 
    gridChoice: 16, 
    calculated: 17, 
    file: 18, 
    attachments: 19, 
    user: 20, 
    recurrence: 21, 
    crossProjectLink: 22, 
    modStat: 23, 
    error: 24, 
    contentTypeId: 25, 
    pageSeparator: 26, 
    threadIndex: 27, 
    workflowStatus: 28, 
    allDayEvent: 29, 
    workflowEventType: 30, 
    maxItems: 31
}
SP.FieldType.registerEnum('SP.FieldType', false);


SP.FieldUserSelectionMode = function() {}
SP.FieldUserSelectionMode.prototype = {
    peopleOnly: 0, 
    peopleAndGroups: 1
}
SP.FieldUserSelectionMode.registerEnum('SP.FieldUserSelectionMode', false);


SP.FileLevel = function() {}
SP.FileLevel.prototype = {
    published: 1, 
    draft: 2, 
    checkout: 255
}
SP.FileLevel.registerEnum('SP.FileLevel', false);


SP.FileSystemObjectType = function() {}
SP.FileSystemObjectType.prototype = {
    invalid: -1, 
    file: 0, 
    folder: 1, 
    web: 2
}
SP.FileSystemObjectType.registerEnum('SP.FileSystemObjectType', false);


SP.ListDataValidationFailureReason = function() {}
SP.ListDataValidationFailureReason.prototype = {
    dataFailure: 0, 
    formulaError: 1
}
SP.ListDataValidationFailureReason.registerEnum('SP.ListDataValidationFailureReason', false);


SP.ListDataValidationType = function() {}
SP.ListDataValidationType.prototype = {
    userFormulaField: 0, 
    userFormulaItem: 1, 
    requiredField: 2, 
    choiceField: 3, 
    minMaxField: 4, 
    textField: 5
}
SP.ListDataValidationType.registerEnum('SP.ListDataValidationType', false);


SP.ListTemplateType = function() {}
SP.ListTemplateType.prototype = {
    invalidType: -1, 
    noListTemplate: 0, 
    genericList: 100, 
    documentLibrary: 101, 
    survey: 102, 
    links: 103, 
    announcements: 104, 
    contacts: 105, 
    events: 106, 
    tasks: 107, 
    discussionBoard: 108, 
    pictureLibrary: 109, 
    dataSources: 110, 
    webTemplateCatalog: 111, 
    userInformation: 112, 
    webPartCatalog: 113, 
    listTemplateCatalog: 114, 
    xmlForm: 115, 
    masterPageCatalog: 116, 
    noCodeWorkflows: 117, 
    workflowProcess: 118, 
    webPageLibrary: 119, 
    customGrid: 120, 
    solutionCatalog: 121, 
    noCodePublic: 122, 
    themeCatalog: 123, 
    dataConnectionLibrary: 130, 
    workflowHistory: 140, 
    ganttTasks: 150, 
    meetings: 200, 
    agenda: 201, 
    meetingUser: 202, 
    decision: 204, 
    meetingObjective: 207, 
    textBox: 210, 
    thingsToBring: 211, 
    homePageLibrary: 212, 
    posts: 301, 
    comments: 302, 
    categories: 303, 
    facility: 402, 
    whereabouts: 403, 
    callTrack: 404, 
    circulation: 405, 
    timecard: 420, 
    holidays: 421, 
    imeDic: 499, 
    externalList: 600, 
    issueTracking: 1100, 
    adminTasks: 1200, 
    healthRules: 1220, 
    healthReports: 1221
}
SP.ListTemplateType.registerEnum('SP.ListTemplateType', false);


SP.MoveOperations = function() {}
SP.MoveOperations.prototype = {
    none: 0, 
    overwrite: 1, 
    allowBrokenThickets: 8, 
    bypassApprovePermission: 64
}
SP.MoveOperations.registerEnum('SP.MoveOperations', false);


SP.PageType = function() {}
SP.PageType.prototype = {
    invalid: -1, 
    defaultView: 0, 
    normalView: 1, 
    dialogView: 2, 
    view: 3, 
    displayForm: 4, 
    displayFormDialog: 5, 
    editForm: 6, 
    editFormDialog: 7, 
    newForm: 8, 
    newFormDialog: 9, 
    solutionForm: 10, 
    pagE_MAXITEMS: 11
}
SP.PageType.registerEnum('SP.PageType', false);


SP.QuickLaunchOptions = function() {}
SP.QuickLaunchOptions.prototype = {
    off: 0, 
    on: 1, 
    defaultValue: 2
}
SP.QuickLaunchOptions.registerEnum('SP.QuickLaunchOptions', false);


SP.RecycleBinItemState = function() {}
SP.RecycleBinItemState.prototype = {
    none: 0, 
    firstStageRecycleBin: 1, 
    secondStageRecycleBin: 2
}
SP.RecycleBinItemState.registerEnum('SP.RecycleBinItemState', false);


SP.RecycleBinItemType = function() {}
SP.RecycleBinItemType.prototype = {
    none: 0, 
    file: 1, 
    fileVersion: 2, 
    listItem: 3, 
    list: 4, 
    folder: 5, 
    folderWithLists: 6, 
    attachment: 7, 
    listItemVersion: 8, 
    cascadeParent: 9
}
SP.RecycleBinItemType.registerEnum('SP.RecycleBinItemType', false);


SP.RelationshipDeleteBehaviorType = function() {}
SP.RelationshipDeleteBehaviorType.prototype = {
    none: 0, 
    cascade: 1, 
    restrict: 2
}
SP.RelationshipDeleteBehaviorType.registerEnum('SP.RelationshipDeleteBehaviorType', false);


SP.RoleType = function() {}
SP.RoleType.prototype = {
    none: 0, 
    guest: 1, 
    reader: 2, 
    contributor: 3, 
    webDesigner: 4, 
    administrator: 5
}
SP.RoleType.registerEnum('SP.RoleType', false);


SP.TemplateFileType = function() {}
SP.TemplateFileType.prototype = {
    standardPage: 0, 
    wikiPage: 1, 
    formPage: 2
}
SP.TemplateFileType.registerEnum('SP.TemplateFileType', false);


SP.UrlFieldFormatType = function() {}
SP.UrlFieldFormatType.prototype = {
    hyperlink: 0, 
    image: 1
}
SP.UrlFieldFormatType.registerEnum('SP.UrlFieldFormatType', false);


SP.UserCustomActionRegistrationType = function() {}
SP.UserCustomActionRegistrationType.prototype = {
    none: 0, 
    list: 1, 
    contentType: 2, 
    progId: 3, 
    fileType: 4
}
SP.UserCustomActionRegistrationType.registerEnum('SP.UserCustomActionRegistrationType', false);


SP.UserCustomActionScope = function() {}
SP.UserCustomActionScope.prototype = {
    unknown: 0, 
    site: 2, 
    web: 3, 
    list: 4
}
SP.UserCustomActionScope.registerEnum('SP.UserCustomActionScope', false);


SP.ViewScope = function() {}
SP.ViewScope.prototype = {
    defaultValue: 0, 
    recursive: 1, 
    recursiveAll: 2, 
    filesOnly: 3
}
SP.ViewScope.registerEnum('SP.ViewScope', false);


SP.ViewType = function() {}
SP.ViewType.prototype = {
    none: 0, 
    html: 1, 
    grid: 2048, 
    calendar: 524288, 
    recurrence: 8193, 
    chart: 131072, 
    gantt: 67108864
}
SP.ViewType.registerEnum('SP.ViewType', false);


SP.ClientContext = function(serverRelativeUrl) {ULS5Vl:;
    SP.ClientContext.initializeBase(this, [ (SP.ScriptUtility.isNullOrUndefined(serverRelativeUrl)) ? SP.PageContextInfo.get_webServerRelativeUrl() : serverRelativeUrl ]);
}
SP.ClientContext.get_current = function() {ULS5Vl:;
    if (!SP.ClientContext.$1S_1) {
        SP.ClientContext.$1S_1 = new SP.ClientContext(SP.PageContextInfo.get_webServerRelativeUrl());
    }
    return SP.ClientContext.$1S_1;
}
SP.ClientContext.prototype = {
    $N_1: null,
    
    get_web: function() {ULS5Vl:;
        if (!this.$N_1) {
            var $v_0 = SP.RequestContext.getCurrent(this);
            this.$N_1 = $v_0.get_web();
        }
        return this.$N_1;
    },
    
    $M_1: null,
    
    get_site: function() {ULS5Vl:;
        if (!this.$M_1) {
            var $v_0 = SP.RequestContext.getCurrent(this);
            this.$M_1 = $v_0.get_site();
        }
        return this.$M_1;
    },
    
    get_serverVersion: function() {ULS5Vl:;
        return this.get_serverLibraryVersion();
    }
}


SP.PageContextInfo = function() {
}
SP.PageContextInfo.get_$g_0 = function() {ULS5Vl:;
    if (!SP.PageContextInfo.$1T_0) {
        SP.PageContextInfo.$1T_0 = window._spPageContextInfo;
    }
    return SP.PageContextInfo.$1T_0;
}
SP.PageContextInfo.get_webServerRelativeUrl = function() {ULS5Vl:;
    return SP.PageContextInfo.get_$g_0().webServerRelativeUrl;
}
SP.PageContextInfo.get_webLanguage = function() {ULS5Vl:;
    return SP.PageContextInfo.get_$g_0().webLanguage;
}
SP.PageContextInfo.get_currentLanguage = function() {ULS5Vl:;
    return SP.PageContextInfo.get_$g_0().currentLanguage;
}
SP.PageContextInfo.get_pageItemId = function() {ULS5Vl:;
    return SP.PageContextInfo.get_$g_0().pageItemId;
}
SP.PageContextInfo.get_pageListId = function() {ULS5Vl:;
    return SP.PageContextInfo.get_$g_0().pageListId;
}


SP.ULS = function() {
}
SP.ULS.$2x_0 = function() {ULS5Vl:;
    if (SP.ULS.$2T_0) {
        return null;
    }
    var $v_0 = window.top.s_sp_debugWindow;
    if (SP.ScriptUtility.isNullOrUndefined($v_0) || $v_0.closed) {
        try {
            $v_0 = window.open('/_layouts/blank.htm', null, 'width=400,height=200,scrollbars=yes,resizable=yes,status=no,location=no,menubar=no,toolbar=no');
        }
        catch ($$e_2_0) {
            SP.ULS.$2T_0 = true;
        }
        if ($v_0) {
            window.setTimeout(SP.ULS.$3q_0, 100);
        }
        window.top.s_sp_debugWindow = $v_0;
    }
    return $v_0;
}
SP.ULS.$3q_0 = function() {ULS5Vl:;
    var $v_0 = window.top.s_sp_debugWindow;
    if (!$v_0) {
        return;
    }
    try {
        var $v_1 = $v_0.document;
        var $v_2;
        $v_2 = $v_1.createElement('DIV');
        $v_1.body.appendChild($v_2);
        var $v_3 = $v_1.createElement('INPUT');
        $v_3.setAttribute('type', 'checkbox');
        $v_3.id = 'UlsConfigTraceApi';
        $v_2.appendChild($v_3);
        $v_2.appendChild($v_1.createTextNode('Trace API'));
        $v_2 = $v_1.createElement('DIV');
        $v_2.id = 'UlsLogs';
        $v_1.body.appendChild($v_2);
        $v_2 = $v_1.getElementById('UlsLogs');
        $v_2.appendChild($v_1.createTextNode('Use double-click to clear the entries.'));
        $addHandler($v_1.body, 'dblclick', SP.ULS.$3f_0);
        $addHandler($v_3, 'click', SP.ULS.$4F_0);
        $v_1.title = 'Debug Output';
    }
    catch ($$e_1_0) {
    }
}
SP.ULS.get_enabled = function() {ULS5Vl:;
    return SP.ULS.$W_0;
}
SP.ULS.set_enabled = function(value) {ULS5Vl:;
    SP.ULS.$W_0 = value;
    return value;
}
SP.ULS.log = function(debugMessage) {ULS5Vl:;
    if (!SP.ULS.$W_0) {
        return;
    }
    var $v_0 = (new Date()).format('hh:mm:ss.ffff');
    var $v_1 = SP.ULS.$H_0 + debugMessage;
    if (SP.ULS.$E_0) {
        for (var $v_3 = 0; $v_3 < SP.ULS.$E_0.length; $v_3++) {
            var $v_4 = SP.ULS.$E_0[$v_3];
            var $v_5 = SP.ULS.$32_0($v_4['time'], $v_4['msg']);
            if (!$v_5) {
                SP.ULS.$3Y_0($v_0, $v_1);
                return;
            }
        }
        SP.ULS.$E_0 = null;
    }
    var $v_2 = SP.ULS.$32_0($v_0, $v_1);
    if (!$v_2) {
        SP.ULS.$3Y_0($v_0, $v_1);
    }
}
SP.ULS.$3Y_0 = function($p0, $p1) {
    if (!SP.ULS.$E_0) {
        SP.ULS.$E_0 = new Array(0);
    }
    var $v_0 = {};
    $v_0['time'] = $p0;
    $v_0['msg'] = $p1;
    SP.ULS.$E_0[SP.ULS.$E_0.length] = $v_0;
}
SP.ULS.$32_0 = function($p0, $p1) {
    var $v_0 = SP.ULS.$2x_0();
    if ($v_0) {
        try {
            var $v_1 = $v_0.document.createElement('DIV');
            $v_1.style.fontSize = '8pt';
            $v_1.style.fontFamily = 'Consolas, Courier, Sans-Serif';
            if (SP.ULS.$1R_0) {
                $v_1.style.backgroundColor = 'gray';
            }
            SP.ULS.$1R_0 = !SP.ULS.$1R_0;
            var $v_2 = $v_0.document.createElement('SPAN');
            $v_2.style.fontWeight = 'bold';
            var $v_3 = $v_0.document.createElement('SPAN');
            $v_1.appendChild($v_2);
            $v_1.appendChild($v_3);
            var $v_4 = $v_0.document.getElementById('UlsLogs');
            if ($v_4) {
                $v_4.appendChild($v_1);
                SP.UI.UIUtility.setInnerText($v_2, $p0);
                SP.UI.UIUtility.setInnerText($v_3, $p1);
                return true;
            }
        }
        catch ($$e_2_0) {
        }
    }
    return false;
}
SP.ULS.$3f_0 = function($p0) {
    var $v_0 = SP.ULS.$2x_0();
    if ($v_0 && $v_0.document) {
        $v_0.document.getElementById('UlsLogs').innerHTML = '';
    }
}
SP.ULS.$4F_0 = function($p0) {
    SP.ULS.$1U_0 = ($p0.target).checked;
}
SP.ULS.increaseIndent = function() {ULS5Vl:;
    SP.ULS.$2U_0++;
    SP.ULS.$H_0 = SP.ULS.$H_0 + String.fromCharCode(160);
}
SP.ULS.decreaseIndent = function() {ULS5Vl:;
    SP.ULS.$2U_0--;
    if (SP.ULS.$H_0.length > 0) {
        SP.ULS.$H_0 = SP.ULS.$H_0.substr(0, SP.ULS.$H_0.length - 1);
    }
}
SP.ULS.traceApiEnter = function(functionName) {ULS5Vl:;
    if (!SP.ULS.$W_0) {
        return;
    }
    if (!SP.ULS.$1U_0) {
        return;
    }
    SP.ULS.$2V_0.push(functionName);
    var $v_0 = 'Enter ' + functionName + '(';
    for (var $v_1 = 1; $v_1 < arguments.length; $v_1++) {
        var $v_2 = arguments[$v_1];
        if ($v_1 !== 1) {
            $v_0 = $v_0 + ', ';
        }
        switch (typeof($v_2)) {
            case 'number':
                $v_0 = $v_0 + $v_2.toString();
                break;
            case 'string':
                $v_0 = $v_0 + $v_2;
                break;
            case 'boolean':
                $v_0 = $v_0 + $v_2.toString();
                break;
            case 'object':
                $v_0 = $v_0 + '[object]';
                break;
            default:
                $v_0 = $v_0 + '[unknownobj]';
                break;
        }
    }
    $v_0 += ')';
    SP.ULS.log($v_0);
    SP.ULS.increaseIndent();
}
SP.ULS.traceApiLeave = function() {ULS5Vl:;
    if (!SP.ULS.$W_0) {
        return;
    }
    if (!SP.ULS.$1U_0) {
        return;
    }
    SP.ULS.decreaseIndent();
    var $v_0 = SP.ULS.$2V_0.pop();
    var $v_1 = 'Leave ' + $v_0;
    SP.ULS.log($v_1);
}


SP.BasePermissions = function() {ULS5Vl:;
    SP.BasePermissions.initializeBase(this);
}
SP.BasePermissions.prototype = {
    $3_1: 0,
    $4_1: 0,
    
    set: function(perm) {ULS5Vl:;
        if (perm === 65) {
            this.$4_1 = 65535;
            this.$3_1 = 32767;
            return;
        }
        if (!perm) {
            this.$4_1 = 0;
            this.$3_1 = 0;
            return;
        }
        var $v_0 = perm;
        $v_0 = $v_0 - 1;
        var $v_1 = 1;
        if ($v_0 >= 0 && $v_0 < 32) {
            $v_1 = $v_1 << $v_0;
            this.$4_1 = this.$4_1 | $v_1;
        }
        else if ($v_0 >= 32 && $v_0 < 64) {
            $v_1 = $v_1 << ($v_0 - 32);
            this.$3_1 = this.$3_1 | $v_1;
        }
    },
    
    clear: function(perm) {ULS5Vl:;
        var $v_0 = perm;
        $v_0 = $v_0 - 1;
        var $v_1 = 1;
        if ($v_0 >= 0 && $v_0 < 32) {
            $v_1 = $v_1 << $v_0;
            $v_1 = ~$v_1;
            this.$4_1 = this.$4_1 & $v_1;
        }
        else if ($v_0 >= 32 && $v_0 < 64) {
            $v_1 = $v_1 << ($v_0 - 32);
            $v_1 = ~$v_1;
            this.$3_1 = this.$3_1 & $v_1;
        }
    },
    
    clearAll: function() {ULS5Vl:;
        this.$3_1 = 0;
        this.$4_1 = 0;
    },
    
    has: function(perm) {ULS5Vl:;
        if (!perm) {
            return true;
        }
        if (perm === 65) {
            return (this.$3_1 & 32767) === 32767 && this.$4_1 === 65535;
        }
        var $v_0 = perm;
        $v_0 = $v_0 - 1;
        var $v_1 = 1;
        if ($v_0 >= 0 && $v_0 < 32) {
            $v_1 = $v_1 << $v_0;
            return 0 !== (this.$4_1 & $v_1);
        }
        else if ($v_0 >= 32 && $v_0 < 64) {
            $v_1 = $v_1 << ($v_0 - 32);
            return 0 !== (this.$3_1 & $v_1);
        }
        return false;
    },
    
    equals: function(perm) {ULS5Vl:;
        if (!perm) {
            return false;
        }
        return perm.$3_1 === this.$3_1 && perm.$4_1 === this.$4_1;
    },
    
    hasPermissions: function(high, low) {ULS5Vl:;
        return ((this.$3_1 & high) === high) && ((this.$4_1 & low) === low);
    },
    
    get_typeId: function() {ULS5Vl:;
        return '{db780e5a-6bc6-41ad-8e64-9dfa761afb6d}';
    },
    
    writeToXml: function(writer, serializationContext) {ULS5Vl:;
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        writer.writeStartElement(SP.ClientConstants.Property);
        writer.writeAttributeString(SP.ClientConstants.Name, 'High');
        SP.DataConvert.writeValueToXmlElement(writer, this.$3_1, serializationContext);
        writer.writeEndElement();
        writer.writeStartElement(SP.ClientConstants.Property);
        writer.writeAttributeString(SP.ClientConstants.Name, 'Low');
        SP.DataConvert.writeValueToXmlElement(writer, this.$4_1, serializationContext);
        writer.writeEndElement();
    },
    
    initPropertiesFromJson: function(parentNode) {ULS5Vl:;
        var $v_0;
        $v_0 = parentNode.High;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$3_1 = ($v_0);
            delete parentNode.High;
        }
        $v_0 = parentNode.Low;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$4_1 = ($v_0);
            delete parentNode.Low;
        }
    }
}


SP.CamlQuery = function() {ULS5Vl:;
    SP.CamlQuery.initializeBase(this);
    this.$w_1 = true;
}
SP.CamlQuery.createAllItemsQuery = function() {ULS5Vl:;
    var $v_0 = new SP.CamlQuery();
    $v_0.$d_1 = '<View Scope=\"RecursiveAll\">\r\n    <Query>\r\n    </Query>\r\n</View>';
    return $v_0;
}
SP.CamlQuery.createAllFoldersQuery = function() {ULS5Vl:;
    var $v_0 = new SP.CamlQuery();
    $v_0.$d_1 = '<View Scope=\"RecursiveAll\">\r\n    <Query>\r\n        <Where>\r\n            <Eq>\r\n                <FieldRef Name=\"FSObjType\" />\r\n                <Value Type=\"Integer\">1</Value>\r\n            </Eq>\r\n        </Where>\r\n    </Query>\r\n</View>';
    return $v_0;
}
SP.CamlQuery.prototype = {
    $20_1: null,
    $w_1: false,
    $d_1: null,
    $26_1: null,
    
    get_folderServerRelativeUrl: function() {ULS5Vl:;
        return this.$20_1;
    },
    set_folderServerRelativeUrl: function(value) {ULS5Vl:;
        this.$20_1 = value;
        return value;
    },
    
    get_datesInUtc: function() {ULS5Vl:;
        return this.$w_1;
    },
    set_datesInUtc: function(value) {ULS5Vl:;
        this.$w_1 = value;
        return value;
    },
    
    get_viewXml: function() {ULS5Vl:;
        return this.$d_1;
    },
    set_viewXml: function(value) {ULS5Vl:;
        this.$d_1 = value;
        return value;
    },
    
    get_listItemCollectionPosition: function() {ULS5Vl:;
        return this.$26_1;
    },
    set_listItemCollectionPosition: function(value) {ULS5Vl:;
        this.$26_1 = value;
        return value;
    },
    
    get_typeId: function() {ULS5Vl:;
        return '{3d248d7b-fc86-40a3-aa97-02a75d69fb8a}';
    },
    
    writeToXml: function(writer, serializationContext) {ULS5Vl:;
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = [ 'FolderServerRelativeUrl', 'DatesInUtc', 'ViewXml', 'ListItemCollectionPosition' ];
        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
    },
    
    initPropertiesFromJson: function(parentNode) {ULS5Vl:;
        var $v_0;
        $v_0 = parentNode.FolderServerRelativeUrl;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$20_1 = ($v_0);
            delete parentNode.FolderServerRelativeUrl;
        }
        $v_0 = parentNode.DatesInUtc;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$w_1 = ($v_0);
            delete parentNode.DatesInUtc;
        }
        $v_0 = parentNode.ViewXml;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$d_1 = ($v_0);
            delete parentNode.ViewXml;
        }
        $v_0 = parentNode.ListItemCollectionPosition;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$26_1 = ((SP.DataConvert.fixupType(null, $v_0)));
            delete parentNode.ListItemCollectionPosition;
        }
    }
}


SP.Change = function(Context, ObjectPath) {ULS5Vl:;
    SP.Change.initializeBase(this, [ Context, ObjectPath ]);
}
SP.Change.prototype = {
    
    get_changeType: function() {ULS5Vl:;
        this.checkUninitializedProperty('ChangeType');
        return ((this.get_objectData().get_properties()['ChangeType']));
    },
    
    get_siteId: function() {ULS5Vl:;
        this.checkUninitializedProperty('SiteId');
        return ((this.get_objectData().get_properties()['SiteId']));
    },
    
    get_time: function() {ULS5Vl:;
        this.checkUninitializedProperty('Time');
        return ((this.get_objectData().get_properties()['Time']));
    },
    
    get_changeToken: function() {ULS5Vl:;
        this.checkUninitializedProperty('ChangeToken');
        return ((this.get_objectData().get_properties()['ChangeToken']));
    },
    
    initPropertiesFromJson: function(parentNode) {ULS5Vl:;
        SP.Change.callBaseMethod(this, 'initPropertiesFromJson', [ parentNode ]);
        var $v_0;
        $v_0 = parentNode.ChangeType;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ChangeType'] = ($v_0);
            delete parentNode.ChangeType;
        }
        $v_0 = parentNode.SiteId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['SiteId'] = ($v_0);
            delete parentNode.SiteId;
        }
        $v_0 = parentNode.Time;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Time'] = ($v_0);
            delete parentNode.Time;
        }
        $v_0 = parentNode.ChangeToken;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ChangeToken'] = ((SP.DataConvert.fixupType(this.get_context(), $v_0)));
            delete parentNode.ChangeToken;
        }
    }
}


SP.ChangePropertyNames = function() {
}


SP.ChangeAlert = function(Context, ObjectPath) {ULS5Vl:;
    SP.ChangeAlert.initializeBase(this, [ Context, ObjectPath ]);
}
SP.ChangeAlert.prototype = {
    
    get_webId: function() {ULS5Vl:;
        this.checkUninitializedProperty('WebId');
        return ((this.get_objectData().get_properties()['WebId']));
    },
    
    get_alertId: function() {ULS5Vl:;
        this.checkUninitializedProperty('AlertId');
        return ((this.get_objectData().get_properties()['AlertId']));
    },
    
    initPropertiesFromJson: function(parentNode) {ULS5Vl:;
        SP.ChangeAlert.callBaseMethod(this, 'initPropertiesFromJson', [ parentNode ]);
        var $v_0;
        $v_0 = parentNode.WebId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['WebId'] = ($v_0);
            delete parentNode.WebId;
        }
        $v_0 = parentNode.AlertId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['AlertId'] = ($v_0);
            delete parentNode.AlertId;
        }
    }
}


SP.ChangeAlertPropertyNames = function() {
}


SP.ChangeCollection = function(Context, ObjectPath) {ULS5Vl:;
    SP.ChangeCollection.initializeBase(this, [ Context, ObjectPath ]);
}
SP.ChangeCollection.prototype = {
    
    itemAt: function(index) {ULS5Vl:;
        return this.getItemAtIndex(index);
    },
    
    get_item: function(index) {ULS5Vl:;
        return this.getItemAtIndex(index);
    }
}


SP.ChangeContentType = function(Context, ObjectPath) {ULS5Vl:;
    SP.ChangeContentType.initializeBase(this, [ Context, ObjectPath ]);
}
SP.ChangeContentType.prototype = {
    
    get_webId: function() {ULS5Vl:;
        this.checkUninitializedProperty('WebId');
        return ((this.get_objectData().get_properties()['WebId']));
    },
    
    get_contentTypeId: function() {ULS5Vl:;
        this.checkUninitializedProperty('ContentTypeId');
        return ((this.get_objectData().get_properties()['ContentTypeId']));
    },
    
    initPropertiesFromJson: function(parentNode) {ULS5Vl:;
        SP.ChangeContentType.callBaseMethod(this, 'initPropertiesFromJson', [ parentNode ]);
        var $v_0;
        $v_0 = parentNode.WebId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['WebId'] = ($v_0);
            delete parentNode.WebId;
        }
        $v_0 = parentNode.ContentTypeId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ContentTypeId'] = ((SP.DataConvert.fixupType(this.get_context(), $v_0)));
            delete parentNode.ContentTypeId;
        }
    }
}


SP.ChangeContentTypePropertyNames = function() {
}


SP.ChangeField = function(Context, ObjectPath) {ULS5Vl:;
    SP.ChangeField.initializeBase(this, [ Context, ObjectPath ]);
}
SP.ChangeField.prototype = {
    
    get_webId: function() {ULS5Vl:;
        this.checkUninitializedProperty('WebId');
        return ((this.get_objectData().get_properties()['WebId']));
    },
    
    get_fieldId: function() {ULS5Vl:;
        this.checkUninitializedProperty('FieldId');
        return ((this.get_objectData().get_properties()['FieldId']));
    },
    
    initPropertiesFromJson: function(parentNode) {ULS5Vl:;
        SP.ChangeField.callBaseMethod(this, 'initPropertiesFromJson', [ parentNode ]);
        var $v_0;
        $v_0 = parentNode.WebId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['WebId'] = ($v_0);
            delete parentNode.WebId;
        }
        $v_0 = parentNode.FieldId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['FieldId'] = ($v_0);
            delete parentNode.FieldId;
        }
    }
}


SP.ChangeFieldPropertyNames = function() {
}


SP.ChangeFile = function(Context, ObjectPath) {ULS5Vl:;
    SP.ChangeFile.initializeBase(this, [ Context, ObjectPath ]);
}
SP.ChangeFile.prototype = {
    
    get_webId: function() {ULS5Vl:;
        this.checkUninitializedProperty('WebId');
        return ((this.get_objectData().get_properties()['WebId']));
    },
    
    get_uniqueId: function() {ULS5Vl:;
        this.checkUninitializedProperty('UniqueId');
        return ((this.get_objectData().get_properties()['UniqueId']));
    },
    
    initPropertiesFromJson: function(parentNode) {ULS5Vl:;
        SP.ChangeFile.callBaseMethod(this, 'initPropertiesFromJson', [ parentNode ]);
        var $v_0;
        $v_0 = parentNode.WebId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['WebId'] = ($v_0);
            delete parentNode.WebId;
        }
        $v_0 = parentNode.UniqueId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['UniqueId'] = ($v_0);
            delete parentNode.UniqueId;
        }
    }
}


SP.ChangeFilePropertyNames = function() {
}


SP.ChangeFolder = function(Context, ObjectPath) {ULS5Vl:;
    SP.ChangeFolder.initializeBase(this, [ Context, ObjectPath ]);
}
SP.ChangeFolder.prototype = {
    
    get_webId: function() {ULS5Vl:;
        this.checkUninitializedProperty('WebId');
        return ((this.get_objectData().get_properties()['WebId']));
    },
    
    get_uniqueId: function() {ULS5Vl:;
        this.checkUninitializedProperty('UniqueId');
        return ((this.get_objectData().get_properties()['UniqueId']));
    },
    
    initPropertiesFromJson: function(parentNode) {ULS5Vl:;
        SP.ChangeFolder.callBaseMethod(this, 'initPropertiesFromJson', [ parentNode ]);
        var $v_0;
        $v_0 = parentNode.WebId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['WebId'] = ($v_0);
            delete parentNode.WebId;
        }
        $v_0 = parentNode.UniqueId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['UniqueId'] = ($v_0);
            delete parentNode.UniqueId;
        }
    }
}


SP.ChangeFolderPropertyNames = function() {
}


SP.ChangeGroup = function(Context, ObjectPath) {ULS5Vl:;
    SP.ChangeGroup.initializeBase(this, [ Context, ObjectPath ]);
}
SP.ChangeGroup.prototype = {
    
    get_groupId: function() {ULS5Vl:;
        this.checkUninitializedProperty('GroupId');
        return ((this.get_objectData().get_properties()['GroupId']));
    },
    
    initPropertiesFromJson: function(parentNode) {ULS5Vl:;
        SP.ChangeGroup.callBaseMethod(this, 'initPropertiesFromJson', [ parentNode ]);
        var $v_0;
        $v_0 = parentNode.GroupId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['GroupId'] = ($v_0);
            delete parentNode.GroupId;
        }
    }
}


SP.ChangeGroupPropertyNames = function() {
}


SP.ChangeItem = function(Context, ObjectPath) {ULS5Vl:;
    SP.ChangeItem.initializeBase(this, [ Context, ObjectPath ]);
}
SP.ChangeItem.prototype = {
    
    get_webId: function() {ULS5Vl:;
        this.checkUninitializedProperty('WebId');
        return ((this.get_objectData().get_properties()['WebId']));
    },
    
    get_listId: function() {ULS5Vl:;
        this.checkUninitializedProperty('ListId');
        return ((this.get_objectData().get_properties()['ListId']));
    },
    
    get_itemId: function() {ULS5Vl:;
        this.checkUninitializedProperty('ItemId');
        return ((this.get_objectData().get_properties()['ItemId']));
    },
    
    initPropertiesFromJson: function(parentNode) {ULS5Vl:;
        SP.ChangeItem.callBaseMethod(this, 'initPropertiesFromJson', [ parentNode ]);
        var $v_0;
        $v_0 = parentNode.WebId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['WebId'] = ($v_0);
            delete parentNode.WebId;
        }
        $v_0 = parentNode.ListId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ListId'] = ($v_0);
            delete parentNode.ListId;
        }
        $v_0 = parentNode.ItemId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ItemId'] = ($v_0);
            delete parentNode.ItemId;
        }
    }
}


SP.ChangeItemPropertyNames = function() {
}


SP.ChangeList = function(Context, ObjectPath) {ULS5Vl:;
    SP.ChangeList.initializeBase(this, [ Context, ObjectPath ]);
}
SP.ChangeList.prototype = {
    
    get_webId: function() {ULS5Vl:;
        this.checkUninitializedProperty('WebId');
        return ((this.get_objectData().get_properties()['WebId']));
    },
    
    get_listId: function() {ULS5Vl:;
        this.checkUninitializedProperty('ListId');
        return ((this.get_objectData().get_properties()['ListId']));
    },
    
    initPropertiesFromJson: function(parentNode) {ULS5Vl:;
        SP.ChangeList.callBaseMethod(this, 'initPropertiesFromJson', [ parentNode ]);
        var $v_0;
        $v_0 = parentNode.WebId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['WebId'] = ($v_0);
            delete parentNode.WebId;
        }
        $v_0 = parentNode.ListId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ListId'] = ($v_0);
            delete parentNode.ListId;
        }
    }
}


SP.ChangeListPropertyNames = function() {
}


SP.ChangeQuery = function(allChangeObjectTypes, allChangeTypes) {ULS5Vl:;
    SP.ChangeQuery.initializeBase(this);
    if (!arguments.length) {
        allChangeObjectTypes = false;
        allChangeTypes = false;
    }
    this.$3w_1(allChangeObjectTypes, allChangeTypes);
}
SP.ChangeQuery.prototype = {
    $1r_1: null,
    $1q_1: null,
    $13_1: false,
    $G_1: false,
    $N_1: false,
    $M_1: false,
    $z_1: false,
    $10_1: false,
    $r_1: false,
    $1M_1: false,
    $F_1: false,
    $v_1: false,
    $K_1: false,
    $1H_1: false,
    $1N_1: false,
    $q_1: false,
    $1L_1: false,
    $x_1: false,
    $1A_1: false,
    $14_1: false,
    $1B_1: false,
    $1E_1: false,
    $1F_1: false,
    $1G_1: false,
    $1C_1: false,
    $1D_1: false,
    $11_1: false,
    $12_1: false,
    $1I_1: false,
    $15_1: false,
    
    $3w_1: function($p0, $p1) {
        if ($p0) {
            this.$13_1 = true;
            this.$G_1 = true;
            this.$N_1 = true;
            this.$M_1 = true;
            this.$z_1 = true;
            this.$10_1 = true;
            this.$r_1 = true;
            this.$1M_1 = true;
            this.$F_1 = true;
            this.$v_1 = true;
            this.$K_1 = true;
            this.$1H_1 = true;
            this.$1N_1 = true;
        }
        if ($p1) {
            this.$q_1 = true;
            this.$1L_1 = true;
            this.$x_1 = true;
            this.$1A_1 = true;
            this.$14_1 = true;
            this.$1B_1 = true;
            this.$1E_1 = true;
            this.$1F_1 = true;
            this.$1G_1 = true;
            this.$1C_1 = true;
            this.$1D_1 = true;
            this.$11_1 = true;
            this.$12_1 = true;
            this.$1I_1 = true;
            this.$15_1 = true;
        }
    },
    
    get_changeTokenStart: function() {ULS5Vl:;
        return this.$1r_1;
    },
    set_changeTokenStart: function(value) {ULS5Vl:;
        this.$1r_1 = value;
        return value;
    },
    
    get_changeTokenEnd: function() {ULS5Vl:;
        return this.$1q_1;
    },
    set_changeTokenEnd: function(value) {ULS5Vl:;
        this.$1q_1 = value;
        return value;
    },
    
    get_item: function() {ULS5Vl:;
        return this.$13_1;
    },
    set_item: function(value) {ULS5Vl:;
        this.$13_1 = value;
        return value;
    },
    
    get_list: function() {ULS5Vl:;
        return this.$G_1;
    },
    set_list: function(value) {ULS5Vl:;
        this.$G_1 = value;
        return value;
    },
    
    get_web: function() {ULS5Vl:;
        return this.$N_1;
    },
    set_web: function(value) {ULS5Vl:;
        this.$N_1 = value;
        return value;
    },
    
    get_site: function() {ULS5Vl:;
        return this.$M_1;
    },
    set_site: function(value) {ULS5Vl:;
        this.$M_1 = value;
        return value;
    },
    
    get_file: function() {ULS5Vl:;
        return this.$z_1;
    },
    set_file: function(value) {ULS5Vl:;
        this.$z_1 = value;
        return value;
    },
    
    get_folder: function() {ULS5Vl:;
        return this.$10_1;
    },
    set_folder: function(value) {ULS5Vl:;
        this.$10_1 = value;
        return value;
    },
    
    get_alert: function() {ULS5Vl:;
        return this.$r_1;
    },
    set_alert: function(value) {ULS5Vl:;
        this.$r_1 = value;
        return value;
    },
    
    get_user: function() {ULS5Vl:;
        return this.$1M_1;
    },
    set_user: function(value) {ULS5Vl:;
        this.$1M_1 = value;
        return value;
    },
    
    get_group: function() {ULS5Vl:;
        return this.$F_1;
    },
    set_group: function(value) {ULS5Vl:;
        this.$F_1 = value;
        return value;
    },
    
    get_contentType: function() {ULS5Vl:;
        return this.$v_1;
    },
    set_contentType: function(value) {ULS5Vl:;
        this.$v_1 = value;
        return value;
    },
    
    get_field: function() {ULS5Vl:;
        return this.$K_1;
    },
    set_field: function(value) {ULS5Vl:;
        this.$K_1 = value;
        return value;
    },
    
    get_securityPolicy: function() {ULS5Vl:;
        return this.$1H_1;
    },
    set_securityPolicy: function(value) {ULS5Vl:;
        this.$1H_1 = value;
        return value;
    },
    
    get_view: function() {ULS5Vl:;
        return this.$1N_1;
    },
    set_view: function(value) {ULS5Vl:;
        this.$1N_1 = value;
        return value;
    },
    
    get_add: function() {ULS5Vl:;
        return this.$q_1;
    },
    set_add: function(value) {ULS5Vl:;
        this.$q_1 = value;
        return value;
    },
    
    get_update: function() {ULS5Vl:;
        return this.$1L_1;
    },
    set_update: function(value) {ULS5Vl:;
        this.$1L_1 = value;
        return value;
    },
    
    get_deleteObject: function() {ULS5Vl:;
        return this.$x_1;
    },
    set_deleteObject: function(value) {ULS5Vl:;
        this.$x_1 = value;
        return value;
    },
    
    get_rename: function() {ULS5Vl:;
        return this.$1A_1;
    },
    set_rename: function(value) {ULS5Vl:;
        this.$1A_1 = value;
        return value;
    },
    
    get_move: function() {ULS5Vl:;
        return this.$14_1;
    },
    set_move: function(value) {ULS5Vl:;
        this.$14_1 = value;
        return value;
    },
    
    get_restore: function() {ULS5Vl:;
        return this.$1B_1;
    },
    set_restore: function(value) {ULS5Vl:;
        this.$1B_1 = value;
        return value;
    },
    
    get_roleDefinitionAdd: function() {ULS5Vl:;
        return this.$1E_1;
    },
    set_roleDefinitionAdd: function(value) {ULS5Vl:;
        this.$1E_1 = value;
        return value;
    },
    
    get_roleDefinitionDelete: function() {ULS5Vl:;
        return this.$1F_1;
    },
    set_roleDefinitionDelete: function(value) {ULS5Vl:;
        this.$1F_1 = value;
        return value;
    },
    
    get_roleDefinitionUpdate: function() {ULS5Vl:;
        return this.$1G_1;
    },
    set_roleDefinitionUpdate: function(value) {ULS5Vl:;
        this.$1G_1 = value;
        return value;
    },
    
    get_roleAssignmentAdd: function() {ULS5Vl:;
        return this.$1C_1;
    },
    set_roleAssignmentAdd: function(value) {ULS5Vl:;
        this.$1C_1 = value;
        return value;
    },
    
    get_roleAssignmentDelete: function() {ULS5Vl:;
        return this.$1D_1;
    },
    set_roleAssignmentDelete: function(value) {ULS5Vl:;
        this.$1D_1 = value;
        return value;
    },
    
    get_groupMembershipAdd: function() {ULS5Vl:;
        return this.$11_1;
    },
    set_groupMembershipAdd: function(value) {ULS5Vl:;
        this.$11_1 = value;
        return value;
    },
    
    get_groupMembershipDelete: function() {ULS5Vl:;
        return this.$12_1;
    },
    set_groupMembershipDelete: function(value) {ULS5Vl:;
        this.$12_1 = value;
        return value;
    },
    
    get_systemUpdate: function() {ULS5Vl:;
        return this.$1I_1;
    },
    set_systemUpdate: function(value) {ULS5Vl:;
        this.$1I_1 = value;
        return value;
    },
    
    get_navigation: function() {ULS5Vl:;
        return this.$15_1;
    },
    set_navigation: function(value) {ULS5Vl:;
        this.$15_1 = value;
        return value;
    },
    
    get_typeId: function() {ULS5Vl:;
        return '{887a7218-1232-4cfc-b78f-88d54e9d8ec7}';
    },
    
    writeToXml: function(writer, serializationContext) {ULS5Vl:;
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = [ 'ChangeTokenStart', 'ChangeTokenEnd', 'Item', 'List', 'Web', 'Site', 'File', 'Folder', 'Alert', 'User', 'Group', 'ContentType', 'Field', 'SecurityPolicy', 'View', 'Add', 'Update', 'DeleteObject', 'Rename', 'Move', 'Restore', 'RoleDefinitionAdd', 'RoleDefinitionDelete', 'RoleDefinitionUpdate', 'RoleAssignmentAdd', 'RoleAssignmentDelete', 'GroupMembershipAdd', 'GroupMembershipDelete', 'SystemUpdate', 'Navigation' ];
        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
    },
    
    initPropertiesFromJson: function(parentNode) {ULS5Vl:;
        var $v_0;
        $v_0 = parentNode.ChangeTokenStart;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1r_1 = ((SP.DataConvert.fixupType(null, $v_0)));
            delete parentNode.ChangeTokenStart;
        }
        $v_0 = parentNode.ChangeTokenEnd;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1q_1 = ((SP.DataConvert.fixupType(null, $v_0)));
            delete parentNode.ChangeTokenEnd;
        }
        $v_0 = parentNode.Item;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$13_1 = ($v_0);
            delete parentNode.Item;
        }
        $v_0 = parentNode.List;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$G_1 = ($v_0);
            delete parentNode.List;
        }
        $v_0 = parentNode.Web;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$N_1 = ($v_0);
            delete parentNode.Web;
        }
        $v_0 = parentNode.Site;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$M_1 = ($v_0);
            delete parentNode.Site;
        }
        $v_0 = parentNode.File;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$z_1 = ($v_0);
            delete parentNode.File;
        }
        $v_0 = parentNode.Folder;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$10_1 = ($v_0);
            delete parentNode.Folder;
        }
        $v_0 = parentNode.Alert;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$r_1 = ($v_0);
            delete parentNode.Alert;
        }
        $v_0 = parentNode.User;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1M_1 = ($v_0);
            delete parentNode.User;
        }
        $v_0 = parentNode.Group;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$F_1 = ($v_0);
            delete parentNode.Group;
        }
        $v_0 = parentNode.ContentType;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$v_1 = ($v_0);
            delete parentNode.ContentType;
        }
        $v_0 = parentNode.Field;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$K_1 = ($v_0);
            delete parentNode.Field;
        }
        $v_0 = parentNode.SecurityPolicy;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1H_1 = ($v_0);
            delete parentNode.SecurityPolicy;
        }
        $v_0 = parentNode.View;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1N_1 = ($v_0);
            delete parentNode.View;
        }
        $v_0 = parentNode.Add;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$q_1 = ($v_0);
            delete parentNode.Add;
        }
        $v_0 = parentNode.Update;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1L_1 = ($v_0);
            delete parentNode.Update;
        }
        $v_0 = parentNode.DeleteObject;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$x_1 = ($v_0);
            delete parentNode.DeleteObject;
        }
        $v_0 = parentNode.Rename;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1A_1 = ($v_0);
            delete parentNode.Rename;
        }
        $v_0 = parentNode.Move;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$14_1 = ($v_0);
            delete parentNode.Move;
        }
        $v_0 = parentNode.Restore;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1B_1 = ($v_0);
            delete parentNode.Restore;
        }
        $v_0 = parentNode.RoleDefinitionAdd;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1E_1 = ($v_0);
            delete parentNode.RoleDefinitionAdd;
        }
        $v_0 = parentNode.RoleDefinitionDelete;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1F_1 = ($v_0);
            delete parentNode.RoleDefinitionDelete;
        }
        $v_0 = parentNode.RoleDefinitionUpdate;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1G_1 = ($v_0);
            delete parentNode.RoleDefinitionUpdate;
        }
        $v_0 = parentNode.RoleAssignmentAdd;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1C_1 = ($v_0);
            delete parentNode.RoleAssignmentAdd;
        }
        $v_0 = parentNode.RoleAssignmentDelete;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1D_1 = ($v_0);
            delete parentNode.RoleAssignmentDelete;
        }
        $v_0 = parentNode.GroupMembershipAdd;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$11_1 = ($v_0);
            delete parentNode.GroupMembershipAdd;
        }
        $v_0 = parentNode.GroupMembershipDelete;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$12_1 = ($v_0);
            delete parentNode.GroupMembershipDelete;
        }
        $v_0 = parentNode.SystemUpdate;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1I_1 = ($v_0);
            delete parentNode.SystemUpdate;
        }
        $v_0 = parentNode.Navigation;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$15_1 = ($v_0);
            delete parentNode.Navigation;
        }
    }
}


SP.ChangeSite = function(Context, ObjectPath) {ULS5Vl:;
    SP.ChangeSite.initializeBase(this, [ Context, ObjectPath ]);
}


SP.ChangeToken = function() {ULS5Vl:;
    SP.ChangeToken.initializeBase(this);
}
SP.ChangeToken.prototype = {
    $V_1: null,
    
    get_stringValue: function() {ULS5Vl:;
        return this.$V_1;
    },
    set_stringValue: function(value) {ULS5Vl:;
        this.$V_1 = value;
        return value;
    },
    
    get_typeId: function() {ULS5Vl:;
        return '{41c5be82-b5bf-4b5a-9712-97111fb87686}';
    },
    
    writeToXml: function(writer, serializationContext) {ULS5Vl:;
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = [ 'StringValue' ];
        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
    },
    
    initPropertiesFromJson: function(parentNode) {ULS5Vl:;
        var $v_0;
        $v_0 = parentNode.StringValue;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$V_1 = ($v_0);
            delete parentNode.StringValue;
        }
    }
}


SP.ChangeUser = function(Context, ObjectPath) {ULS5Vl:;
    SP.ChangeUser.initializeBase(this, [ Context, ObjectPath ]);
}
SP.ChangeUser.prototype = {
    
    get_userId: function() {ULS5Vl:;
        this.checkUninitializedProperty('UserId');
        return ((this.get_objectData().get_properties()['UserId']));
    },
    
    get_activate: function() {ULS5Vl:;
        this.checkUninitializedProperty('Activate');
        return ((this.get_objectData().get_properties()['Activate']));
    },
    
    initPropertiesFromJson: function(parentNode) {ULS5Vl:;
        SP.ChangeUser.callBaseMethod(this, 'initPropertiesFromJson', [ parentNode ]);
        var $v_0;
        $v_0 = parentNode.UserId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['UserId'] = ($v_0);
            delete parentNode.UserId;
        }
        $v_0 = parentNode.Activate;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Activate'] = ($v_0);
            delete parentNode.Activate;
        }
    }
}


SP.ChangeUserPropertyNames = function() {
}


SP.ChangeView = function(Context, ObjectPath) {ULS5Vl:;
    SP.ChangeView.initializeBase(this, [ Context, ObjectPath ]);
}
SP.ChangeView.prototype = {
    
    get_webId: function() {ULS5Vl:;
        this.checkUninitializedProperty('WebId');
        return ((this.get_objectData().get_properties()['WebId']));
    },
    
    get_listId: function() {ULS5Vl:;
        this.checkUninitializedProperty('ListId');
        return ((this.get_objectData().get_properties()['ListId']));
    },
    
    get_viewId: function() {ULS5Vl:;
        this.checkUninitializedProperty('ViewId');
        return ((this.get_objectData().get_properties()['ViewId']));
    },
    
    initPropertiesFromJson: function(parentNode) {ULS5Vl:;
        SP.ChangeView.callBaseMethod(this, 'initPropertiesFromJson', [ parentNode ]);
        var $v_0;
        $v_0 = parentNode.WebId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['WebId'] = ($v_0);
            delete parentNode.WebId;
        }
        $v_0 = parentNode.ListId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ListId'] = ($v_0);
            delete parentNode.ListId;
        }
        $v_0 = parentNode.ViewId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ViewId'] = ($v_0);
            delete parentNode.ViewId;
        }
    }
}


SP.ChangeViewPropertyNames = function() {
}


SP.ChangeWeb = function(Context, ObjectPath) {ULS5Vl:;
    SP.ChangeWeb.initializeBase(this, [ Context, ObjectPath ]);
}
SP.ChangeWeb.prototype = {
    
    get_webId: function() {ULS5Vl:;
        this.checkUninitializedProperty('WebId');
        return ((this.get_objectData().get_properties()['WebId']));
    },
    
    initPropertiesFromJson: function(parentNode) {ULS5Vl:;
        SP.ChangeWeb.callBaseMethod(this, 'initPropertiesFromJson', [ parentNode ]);
        var $v_0;
        $v_0 = parentNode.WebId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['WebId'] = ($v_0);
            delete parentNode.WebId;
        }
    }
}


SP.ChangeWebPropertyNames = function() {
}


SP.ContentType = function(Context, ObjectPath) {ULS5Vl:;
    SP.ContentType.initializeBase(this, [ Context, ObjectPath ]);
}
SP.ContentType.prototype = {
    
    $7: function($p0) {
        if ($p0) {
            this.get_objectData().get_properties()['Description'] = $p0.$2_1;
            this.get_objectData().get_properties()['Group'] = $p0.$F_1;
            this.get_objectData().get_properties()['Name'] = $p0.$5_1;
        }
    },
    
    get_displayFormTemplateName: function() {ULS5Vl:;
        this.checkUninitializedProperty('DisplayFormTemplateName');
        return ((this.get_objectData().get_properties()['DisplayFormTemplateName']));
    },
    set_displayFormTemplateName: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['DisplayFormTemplateName'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'DisplayFormTemplateName', value));
        }
        return value;
    },
    
    get_editFormTemplateName: function() {ULS5Vl:;
        this.checkUninitializedProperty('EditFormTemplateName');
        return ((this.get_objectData().get_properties()['EditFormTemplateName']));
    },
    set_editFormTemplateName: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['EditFormTemplateName'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'EditFormTemplateName', value));
        }
        return value;
    },
    
    get_newFormTemplateName: function() {ULS5Vl:;
        this.checkUninitializedProperty('NewFormTemplateName');
        return ((this.get_objectData().get_properties()['NewFormTemplateName']));
    },
    set_newFormTemplateName: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['NewFormTemplateName'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'NewFormTemplateName', value));
        }
        return value;
    },
    
    get_newFormUrl: function() {ULS5Vl:;
        this.checkUninitializedProperty('NewFormUrl');
        return ((this.get_objectData().get_properties()['NewFormUrl']));
    },
    set_newFormUrl: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['NewFormUrl'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'NewFormUrl', value));
        }
        return value;
    },
    
    get_editFormUrl: function() {ULS5Vl:;
        this.checkUninitializedProperty('EditFormUrl');
        return ((this.get_objectData().get_properties()['EditFormUrl']));
    },
    set_editFormUrl: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['EditFormUrl'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'EditFormUrl', value));
        }
        return value;
    },
    
    get_displayFormUrl: function() {ULS5Vl:;
        this.checkUninitializedProperty('DisplayFormUrl');
        return ((this.get_objectData().get_properties()['DisplayFormUrl']));
    },
    set_displayFormUrl: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['DisplayFormUrl'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'DisplayFormUrl', value));
        }
        return value;
    },
    
    get_id: function() {ULS5Vl:;
        this.checkUninitializedProperty('Id');
        return ((this.get_objectData().get_properties()['Id']));
    },
    
    get_readOnly: function() {ULS5Vl:;
        this.checkUninitializedProperty('ReadOnly');
        return ((this.get_objectData().get_properties()['ReadOnly']));
    },
    set_readOnly: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['ReadOnly'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'ReadOnly', value));
        }
        return value;
    },
    
    get_name: function() {ULS5Vl:;
        this.checkUninitializedProperty('Name');
        return ((this.get_objectData().get_properties()['Name']));
    },
    set_name: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['Name'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Name', value));
        }
        return value;
    },
    
    get_description: function() {ULS5Vl:;
        this.checkUninitializedProperty('Description');
        return ((this.get_objectData().get_properties()['Description']));
    },
    set_description: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['Description'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Description', value));
        }
        return value;
    },
    
    get_hidden: function() {ULS5Vl:;
        this.checkUninitializedProperty('Hidden');
        return ((this.get_objectData().get_properties()['Hidden']));
    },
    set_hidden: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['Hidden'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Hidden', value));
        }
        return value;
    },
    
    get_scope: function() {ULS5Vl:;
        this.checkUninitializedProperty('Scope');
        return ((this.get_objectData().get_properties()['Scope']));
    },
    
    get_group: function() {ULS5Vl:;
        this.checkUninitializedProperty('Group');
        return ((this.get_objectData().get_properties()['Group']));
    },
    set_group: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['Group'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Group', value));
        }
        return value;
    },
    
    get_fieldLinks: function() {ULS5Vl:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['FieldLinks']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.FieldLinkCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'FieldLinks'));
            this.get_objectData().get_clientObjectProperties()['FieldLinks'] = $v_0;
        }
        return $v_0;
    },
    
    get_workflowAssociations: function() {ULS5Vl:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['WorkflowAssociations']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.Workflow.WorkflowAssociationCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'WorkflowAssociations'));
            this.get_objectData().get_clientObjectProperties()['WorkflowAssociations'] = $v_0;
        }
        return $v_0;
    },
    
    get_documentTemplateUrl: function() {ULS5Vl:;
        this.checkUninitializedProperty('DocumentTemplateUrl');
        return ((this.get_objectData().get_properties()['DocumentTemplateUrl']));
    },
    
    get_documentTemplate: function() {ULS5Vl:;
        this.checkUninitializedProperty('DocumentTemplate');
        return ((this.get_objectData().get_properties()['DocumentTemplate']));
    },
    set_documentTemplate: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['DocumentTemplate'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'DocumentTemplate', value));
        }
        return value;
    },
    
    get_schemaXml: function() {ULS5Vl:;
        this.checkUninitializedProperty('SchemaXml');
        return ((this.get_objectData().get_properties()['SchemaXml']));
    },
    
    get_parent: function() {ULS5Vl:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['Parent']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.ContentType(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'Parent'));
            this.get_objectData().get_clientObjectProperties()['Parent'] = $v_0;
        }
        return $v_0;
    },
    
    get_fields: function() {ULS5Vl:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['Fields']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.FieldCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'Fields'));
            this.get_objectData().get_clientObjectProperties()['Fields'] = $v_0;
        }
        return $v_0;
    },
    
    initPropertiesFromJson: function(parentNode) {ULS5Vl:;
        SP.ContentType.callBaseMethod(this, 'initPropertiesFromJson', [ parentNode ]);
        var $v_0;
        $v_0 = parentNode.DisplayFormTemplateName;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['DisplayFormTemplateName'] = ($v_0);
            delete parentNode.DisplayFormTemplateName;
        }
        $v_0 = parentNode.EditFormTemplateName;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['EditFormTemplateName'] = ($v_0);
            delete parentNode.EditFormTemplateName;
        }
        $v_0 = parentNode.NewFormTemplateName;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['NewFormTemplateName'] = ($v_0);
            delete parentNode.NewFormTemplateName;
        }
        $v_0 = parentNode.NewFormUrl;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['NewFormUrl'] = ($v_0);
            delete parentNode.NewFormUrl;
        }
        $v_0 = parentNode.EditFormUrl;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['EditFormUrl'] = ($v_0);
            delete parentNode.EditFormUrl;
        }
        $v_0 = parentNode.DisplayFormUrl;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['DisplayFormUrl'] = ($v_0);
            delete parentNode.DisplayFormUrl;
        }
        $v_0 = parentNode.Id;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Id'] = ((SP.DataConvert.fixupType(this.get_context(), $v_0)));
            delete parentNode.Id;
        }
        $v_0 = parentNode.ReadOnly;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ReadOnly'] = ($v_0);
            delete parentNode.ReadOnly;
        }
        $v_0 = parentNode.Name;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Name'] = ($v_0);
            delete parentNode.Name;
        }
        $v_0 = parentNode.Description;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Description'] = ($v_0);
            delete parentNode.Description;
        }
        $v_0 = parentNode.Hidden;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Hidden'] = ($v_0);
            delete parentNode.Hidden;
        }
        $v_0 = parentNode.Scope;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Scope'] = ($v_0);
            delete parentNode.Scope;
        }
        $v_0 = parentNode.Group;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Group'] = ($v_0);
            delete parentNode.Group;
        }
        $v_0 = parentNode.FieldLinks;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_fieldLinks().fromJson($v_0);
            delete parentNode.FieldLinks;
        }
        $v_0 = parentNode.WorkflowAssociations;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_workflowAssociations().fromJson($v_0);
            delete parentNode.WorkflowAssociations;
        }
        $v_0 = parentNode.DocumentTemplateUrl;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['DocumentTemplateUrl'] = ($v_0);
            delete parentNode.DocumentTemplateUrl;
        }
        $v_0 = parentNode.DocumentTemplate;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['DocumentTemplate'] = ($v_0);
            delete parentNode.DocumentTemplate;
        }
        $v_0 = parentNode.SchemaXml;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['SchemaXml'] = ($v_0);
            delete parentNode.SchemaXml;
        }
        $v_0 = parentNode.Parent;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_parent().fromJson($v_0);
            delete parentNode.Parent;
        }
        $v_0 = parentNode.Fields;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_fields().fromJson($v_0);
            delete parentNode.Fields;
        }
    },
    
    update: function(updateChildren) {ULS5Vl:;
        var $v_0 = new SP.ClientActionInvokeMethod(this, 'Update', [ updateChildren ]);
        this.get_context().addQuery($v_0);
    },
    
    deleteObject: function() {ULS5Vl:;
        var $v_0 = new SP.ClientActionInvokeMethod(this, 'DeleteObject', null);
        this.get_context().addQuery($v_0);
        this.removeFromParentCollection();
    }
}


SP.ContentTypePropertyNames = function() {
}


SP.ContentTypeObjectPropertyNames = function() {
}


SP.ContentTypeCollection = function(Context, ObjectPath) {ULS5Vl:;
    SP.ContentTypeCollection.initializeBase(this, [ Context, ObjectPath ]);
}
SP.ContentTypeCollection.prototype = {
    
    itemAt: function(index) {ULS5Vl:;
        return this.getItemAtIndex(index);
    },
    
    get_item: function(index) {ULS5Vl:;
        return this.getItemAtIndex(index);
    },
    
    getById: function(contentTypeId) {ULS5Vl:;
        var $v_0;
        var $v_1 = ((this.get_objectData().get_methodReturnObjects()['GetById']));
        if (SP.ScriptUtility.isNullOrUndefined($v_1)) {
            $v_1 = {};
            this.get_objectData().get_methodReturnObjects()['GetById'] = $v_1;
        }
        $v_0 = (($v_1[contentTypeId]));
        if (!SP.ScriptUtility.isNullOrUndefined($v_0)) {
            return $v_0;
        }
        $v_0 = new SP.ContentType(this.get_context(), new SP.ObjectPathMethod(this.get_context(), this.get_path(), 'GetById', [ contentTypeId ]));
        $v_1[contentTypeId] = $v_0;
        return $v_0;
    },
    
    addExistingContentType: function(contentType) {ULS5Vl:;
        var $v_0;
        $v_0 = new SP.ContentType(this.get_context(), new SP.ObjectPathMethod(this.get_context(), this.get_path(), 'AddExistingContentType', [ contentType ]));
        $v_0.get_path().setPendingReplace();
        var $v_1 = new SP.ObjectIdentityQuery($v_0.get_path());
        this.get_context().addQueryIdAndResultObject($v_1.get_id(), $v_0);
        this.get_context().addQuery($v_1);
        this.addChild($v_0);
        return $v_0;
    },
    
    add: function(parameters) {ULS5Vl:;
        var $v_0;
        $v_0 = new SP.ContentType(this.get_context(), new SP.ObjectPathMethod(this.get_context(), this.get_path(), 'Add', [ parameters ]));
        $v_0.get_path().setPendingReplace();
        var $v_1 = new SP.ObjectIdentityQuery($v_0.get_path());
        this.get_context().addQueryIdAndResultObject($v_1.get_id(), $v_0);
        this.get_context().addQuery($v_1);
        this.addChild($v_0);
        $v_0.$7(parameters);
        return $v_0;
    }
}


SP.ContentTypeCreationInformation = function() {ULS5Vl:;
    SP.ContentTypeCreationInformation.initializeBase(this);
}
SP.ContentTypeCreationInformation.prototype = {
    $28_1: null,
    $5_1: null,
    $F_1: null,
    $2_1: null,
    
    get_parentContentType: function() {ULS5Vl:;
        return this.$28_1;
    },
    set_parentContentType: function(value) {ULS5Vl:;
        this.$28_1 = value;
        return value;
    },
    
    get_name: function() {ULS5Vl:;
        return this.$5_1;
    },
    set_name: function(value) {ULS5Vl:;
        this.$5_1 = value;
        return value;
    },
    
    get_group: function() {ULS5Vl:;
        return this.$F_1;
    },
    set_group: function(value) {ULS5Vl:;
        this.$F_1 = value;
        return value;
    },
    
    get_description: function() {ULS5Vl:;
        return this.$2_1;
    },
    set_description: function(value) {ULS5Vl:;
        this.$2_1 = value;
        return value;
    },
    
    get_typeId: function() {ULS5Vl:;
        return '{168f3091-4554-4f14-8866-b20d48e45b54}';
    },
    
    writeToXml: function(writer, serializationContext) {ULS5Vl:;
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = [ 'ParentContentType', 'Name', 'Group', 'Description' ];
        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
    },
    
    initPropertiesFromJson: function(parentNode) {ULS5Vl:;
        var $v_0;
        $v_0 = parentNode.ParentContentType;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$28_1.fromJson($v_0);
            delete parentNode.ParentContentType;
        }
        $v_0 = parentNode.Name;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$5_1 = ($v_0);
            delete parentNode.Name;
        }
        $v_0 = parentNode.Group;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$F_1 = ($v_0);
            delete parentNode.Group;
        }
        $v_0 = parentNode.Description;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$2_1 = ($v_0);
            delete parentNode.Description;
        }
    }
}


SP.ContentTypeId = function() {ULS5Vl:;
    SP.ContentTypeId.initializeBase(this);
}
SP.ContentTypeId.prototype = {
    $V_1: null,
    
    customFromJson: function(parentNode) {ULS5Vl:;
        if (!parentNode) {
            throw Error.argumentNull('parentNode');
        }
        var $v_0;
        $v_0 = parentNode.StringValue;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$V_1 = ($v_0);
        }
        return true;
    },
    
    customWriteToXml: function(writer, serializationContext) {ULS5Vl:;
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        writer.writeStartElement(SP.ClientConstants.Property);
        writer.writeAttributeString(SP.ClientConstants.Name, 'StringValue');
        SP.DataConvert.writeValueToXmlElement(writer, this.$V_1, serializationContext);
        writer.writeEndElement();
        return true;
    },
    
    toString: function() {ULS5Vl:;
        return this.$V_1;
    },
    
    get_typeId: function() {ULS5Vl:;
        return '{da0f1e90-296f-480e-bc27-cefe51eff241}';
    },
    
    writeToXml: function(writer, serializationContext) {ULS5Vl:;
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
    }
}


SP.Feature = function(Context, ObjectPath) {ULS5Vl:;
    SP.Feature.initializeBase(this, [ Context, ObjectPath ]);
}
SP.Feature.prototype = {
    
    get_definitionId: function() {ULS5Vl:;
        this.checkUninitializedProperty('DefinitionId');
        return ((this.get_objectData().get_properties()['DefinitionId']));
    },
    
    initPropertiesFromJson: function(parentNode) {ULS5Vl:;
        SP.Feature.callBaseMethod(this, 'initPropertiesFromJson', [ parentNode ]);
        var $v_0;
        $v_0 = parentNode.DefinitionId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['DefinitionId'] = ($v_0);
            delete parentNode.DefinitionId;
        }
    }
}


SP.FeaturePropertyNames = function() {
}


SP.FeatureCollection = function(Context, ObjectPath) {ULS5Vl:;
    SP.FeatureCollection.initializeBase(this, [ Context, ObjectPath ]);
}
SP.FeatureCollection.prototype = {
    
    itemAt: function(index) {ULS5Vl:;
        return this.getItemAtIndex(index);
    },
    
    get_item: function(index) {ULS5Vl:;
        return this.getItemAtIndex(index);
    },
    
    getById: function(featureId) {ULS5Vl:;
        var $v_0;
        var $v_1 = ((this.get_objectData().get_methodReturnObjects()['GetById']));
        if (SP.ScriptUtility.isNullOrUndefined($v_1)) {
            $v_1 = {};
            this.get_objectData().get_methodReturnObjects()['GetById'] = $v_1;
        }
        $v_0 = (($v_1[featureId.toString()]));
        if (!SP.ScriptUtility.isNullOrUndefined($v_0)) {
            return $v_0;
        }
        $v_0 = new SP.Feature(this.get_context(), new SP.ObjectPathMethod(this.get_context(), this.get_path(), 'GetById', [ featureId ]));
        $v_1[featureId.toString()] = $v_0;
        return $v_0;
    },
    
    add: function(featureId, force, featdefScope) {ULS5Vl:;
        var $v_0;
        $v_0 = new SP.Feature(this.get_context(), new SP.ObjectPathMethod(this.get_context(), this.get_path(), 'Add', [ featureId, force, featdefScope ]));
        $v_0.get_path().setPendingReplace();
        var $v_1 = new SP.ObjectIdentityQuery($v_0.get_path());
        this.get_context().addQueryIdAndResultObject($v_1.get_id(), $v_0);
        this.get_context().addQuery($v_1);
        this.addChild($v_0);
        return $v_0;
    },
    
    remove: function(featureId, force) {ULS5Vl:;
        var $v_0 = new SP.ClientActionInvokeMethod(this, 'Remove', [ featureId, force ]);
        this.get_context().addQuery($v_0);
    }
}


SP.Field = function(Context, ObjectPath) {ULS5Vl:;
    SP.Field.initializeBase(this, [ Context, ObjectPath ]);
}
SP.Field.prototype = {
    
    get_typeDisplayName: function() {ULS5Vl:;
        this.checkUninitializedProperty('TypeDisplayName');
        return ((this.get_objectData().get_properties()['TypeDisplayName']));
    },
    
    get_typeShortDescription: function() {ULS5Vl:;
        this.checkUninitializedProperty('TypeShortDescription');
        return ((this.get_objectData().get_properties()['TypeShortDescription']));
    },
    
    get_internalName: function() {ULS5Vl:;
        this.checkUninitializedProperty('InternalName');
        return ((this.get_objectData().get_properties()['InternalName']));
    },
    
    get_id: function() {ULS5Vl:;
        this.checkUninitializedProperty('Id');
        return ((this.get_objectData().get_properties()['Id']));
    },
    
    get_enforceUniqueValues: function() {ULS5Vl:;
        this.checkUninitializedProperty('EnforceUniqueValues');
        return ((this.get_objectData().get_properties()['EnforceUniqueValues']));
    },
    set_enforceUniqueValues: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['EnforceUniqueValues'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'EnforceUniqueValues', value));
        }
        return value;
    },
    
    get_title: function() {ULS5Vl:;
        this.checkUninitializedProperty('Title');
        return ((this.get_objectData().get_properties()['Title']));
    },
    set_title: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['Title'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Title', value));
        }
        return value;
    },
    
    get_description: function() {ULS5Vl:;
        this.checkUninitializedProperty('Description');
        return ((this.get_objectData().get_properties()['Description']));
    },
    set_description: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['Description'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Description', value));
        }
        return value;
    },
    
    get_group: function() {ULS5Vl:;
        this.checkUninitializedProperty('Group');
        return ((this.get_objectData().get_properties()['Group']));
    },
    set_group: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['Group'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Group', value));
        }
        return value;
    },
    
    get_defaultValue: function() {ULS5Vl:;
        this.checkUninitializedProperty('DefaultValue');
        return ((this.get_objectData().get_properties()['DefaultValue']));
    },
    set_defaultValue: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['DefaultValue'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'DefaultValue', value));
        }
        return value;
    },
    
    get_validationFormula: function() {ULS5Vl:;
        this.checkUninitializedProperty('ValidationFormula');
        return ((this.get_objectData().get_properties()['ValidationFormula']));
    },
    set_validationFormula: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['ValidationFormula'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'ValidationFormula', value));
        }
        return value;
    },
    
    get_validationMessage: function() {ULS5Vl:;
        this.checkUninitializedProperty('ValidationMessage');
        return ((this.get_objectData().get_properties()['ValidationMessage']));
    },
    set_validationMessage: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['ValidationMessage'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'ValidationMessage', value));
        }
        return value;
    },
    
    get_fieldTypeKind: function() {ULS5Vl:;
        this.checkUninitializedProperty('FieldTypeKind');
        return ((this.get_objectData().get_properties()['FieldTypeKind']));
    },
    set_fieldTypeKind: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['FieldTypeKind'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'FieldTypeKind', value));
        }
        return value;
    },
    
    get_typeAsString: function() {ULS5Vl:;
        this.checkUninitializedProperty('TypeAsString');
        return ((this.get_objectData().get_properties()['TypeAsString']));
    },
    set_typeAsString: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['TypeAsString'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'TypeAsString', value));
        }
        return value;
    },
    
    get_fromBaseType: function() {ULS5Vl:;
        this.checkUninitializedProperty('FromBaseType');
        return ((this.get_objectData().get_properties()['FromBaseType']));
    },
    
    get_sealed: function() {ULS5Vl:;
        this.checkUninitializedProperty('Sealed');
        return ((this.get_objectData().get_properties()['Sealed']));
    },
    
    get_canBeDeleted: function() {ULS5Vl:;
        this.checkUninitializedProperty('CanBeDeleted');
        return ((this.get_objectData().get_properties()['CanBeDeleted']));
    },
    
    get_required: function() {ULS5Vl:;
        this.checkUninitializedProperty('Required');
        return ((this.get_objectData().get_properties()['Required']));
    },
    set_required: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['Required'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Required', value));
        }
        return value;
    },
    
    get_readOnlyField: function() {ULS5Vl:;
        this.checkUninitializedProperty('ReadOnlyField');
        return ((this.get_objectData().get_properties()['ReadOnlyField']));
    },
    set_readOnlyField: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['ReadOnlyField'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'ReadOnlyField', value));
        }
        return value;
    },
    
    get_hidden: function() {ULS5Vl:;
        this.checkUninitializedProperty('Hidden');
        return ((this.get_objectData().get_properties()['Hidden']));
    },
    set_hidden: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['Hidden'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Hidden', value));
        }
        return value;
    },
    
    get_direction: function() {ULS5Vl:;
        this.checkUninitializedProperty('Direction');
        return ((this.get_objectData().get_properties()['Direction']));
    },
    set_direction: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['Direction'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Direction', value));
        }
        return value;
    },
    
    get_sortable: function() {ULS5Vl:;
        this.checkUninitializedProperty('Sortable');
        return ((this.get_objectData().get_properties()['Sortable']));
    },
    
    get_filterable: function() {ULS5Vl:;
        this.checkUninitializedProperty('Filterable');
        return ((this.get_objectData().get_properties()['Filterable']));
    },
    
    get_schemaXml: function() {ULS5Vl:;
        this.checkUninitializedProperty('SchemaXml');
        return ((this.get_objectData().get_properties()['SchemaXml']));
    },
    set_schemaXml: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['SchemaXml'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'SchemaXml', value));
        }
        return value;
    },
    
    get_staticName: function() {ULS5Vl:;
        this.checkUninitializedProperty('StaticName');
        return ((this.get_objectData().get_properties()['StaticName']));
    },
    set_staticName: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['StaticName'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'StaticName', value));
        }
        return value;
    },
    
    get_scope: function() {ULS5Vl:;
        this.checkUninitializedProperty('Scope');
        return ((this.get_objectData().get_properties()['Scope']));
    },
    
    initPropertiesFromJson: function(parentNode) {ULS5Vl:;
        SP.Field.callBaseMethod(this, 'initPropertiesFromJson', [ parentNode ]);
        var $v_0;
        $v_0 = parentNode.TypeDisplayName;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['TypeDisplayName'] = ($v_0);
            delete parentNode.TypeDisplayName;
        }
        $v_0 = parentNode.TypeShortDescription;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['TypeShortDescription'] = ($v_0);
            delete parentNode.TypeShortDescription;
        }
        $v_0 = parentNode.InternalName;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['InternalName'] = ($v_0);
            delete parentNode.InternalName;
        }
        $v_0 = parentNode.Id;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Id'] = ($v_0);
            delete parentNode.Id;
        }
        $v_0 = parentNode.EnforceUniqueValues;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['EnforceUniqueValues'] = ($v_0);
            delete parentNode.EnforceUniqueValues;
        }
        $v_0 = parentNode.Title;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Title'] = ($v_0);
            delete parentNode.Title;
        }
        $v_0 = parentNode.Description;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Description'] = ($v_0);
            delete parentNode.Description;
        }
        $v_0 = parentNode.Group;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Group'] = ($v_0);
            delete parentNode.Group;
        }
        $v_0 = parentNode.DefaultValue;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['DefaultValue'] = ($v_0);
            delete parentNode.DefaultValue;
        }
        $v_0 = parentNode.ValidationFormula;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ValidationFormula'] = ($v_0);
            delete parentNode.ValidationFormula;
        }
        $v_0 = parentNode.ValidationMessage;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ValidationMessage'] = ($v_0);
            delete parentNode.ValidationMessage;
        }
        $v_0 = parentNode.FieldTypeKind;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['FieldTypeKind'] = ($v_0);
            delete parentNode.FieldTypeKind;
        }
        $v_0 = parentNode.TypeAsString;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['TypeAsString'] = ($v_0);
            delete parentNode.TypeAsString;
        }
        $v_0 = parentNode.FromBaseType;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['FromBaseType'] = ($v_0);
            delete parentNode.FromBaseType;
        }
        $v_0 = parentNode.Sealed;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Sealed'] = ($v_0);
            delete parentNode.Sealed;
        }
        $v_0 = parentNode.CanBeDeleted;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['CanBeDeleted'] = ($v_0);
            delete parentNode.CanBeDeleted;
        }
        $v_0 = parentNode.Required;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Required'] = ($v_0);
            delete parentNode.Required;
        }
        $v_0 = parentNode.ReadOnlyField;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ReadOnlyField'] = ($v_0);
            delete parentNode.ReadOnlyField;
        }
        $v_0 = parentNode.Hidden;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Hidden'] = ($v_0);
            delete parentNode.Hidden;
        }
        $v_0 = parentNode.Direction;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Direction'] = ($v_0);
            delete parentNode.Direction;
        }
        $v_0 = parentNode.Sortable;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Sortable'] = ($v_0);
            delete parentNode.Sortable;
        }
        $v_0 = parentNode.Filterable;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Filterable'] = ($v_0);
            delete parentNode.Filterable;
        }
        $v_0 = parentNode.SchemaXml;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['SchemaXml'] = ($v_0);
            delete parentNode.SchemaXml;
        }
        $v_0 = parentNode.StaticName;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['StaticName'] = ($v_0);
            delete parentNode.StaticName;
        }
        $v_0 = parentNode.Scope;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Scope'] = ($v_0);
            delete parentNode.Scope;
        }
    },
    
    updateAndPushChanges: function(pushChangesToLists) {ULS5Vl:;
        var $v_0 = new SP.ClientActionInvokeMethod(this, 'UpdateAndPushChanges', [ pushChangesToLists ]);
        this.get_context().addQuery($v_0);
    },
    
    update: function() {ULS5Vl:;
        var $v_0 = new SP.ClientActionInvokeMethod(this, 'Update', null);
        this.get_context().addQuery($v_0);
    },
    
    deleteObject: function() {ULS5Vl:;
        var $v_0 = new SP.ClientActionInvokeMethod(this, 'DeleteObject', null);
        this.get_context().addQuery($v_0);
        this.removeFromParentCollection();
    }
}


SP.FieldPropertyNames = function() {
}


SP.FieldCalculated = function(Context, ObjectPath) {ULS5Vl:;
    SP.FieldCalculated.initializeBase(this, [ Context, ObjectPath ]);
}
SP.FieldCalculated.prototype = {
    
    get_formula: function() {ULS5Vl:;
        this.checkUninitializedProperty('Formula');
        return ((this.get_objectData().get_properties()['Formula']));
    },
    set_formula: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['Formula'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Formula', value));
        }
        return value;
    },
    
    get_outputType: function() {ULS5Vl:;
        this.checkUninitializedProperty('OutputType');
        return ((this.get_objectData().get_properties()['OutputType']));
    },
    set_outputType: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['OutputType'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'OutputType', value));
        }
        return value;
    },
    
    get_dateFormat: function() {ULS5Vl:;
        this.checkUninitializedProperty('DateFormat');
        return ((this.get_objectData().get_properties()['DateFormat']));
    },
    set_dateFormat: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['DateFormat'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'DateFormat', value));
        }
        return value;
    },
    
    initPropertiesFromJson: function(parentNode) {ULS5Vl:;
        SP.FieldCalculated.callBaseMethod(this, 'initPropertiesFromJson', [ parentNode ]);
        var $v_0;
        $v_0 = parentNode.Formula;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Formula'] = ($v_0);
            delete parentNode.Formula;
        }
        $v_0 = parentNode.OutputType;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['OutputType'] = ($v_0);
            delete parentNode.OutputType;
        }
        $v_0 = parentNode.DateFormat;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['DateFormat'] = ($v_0);
            delete parentNode.DateFormat;
        }
    }
}


SP.FieldCalculatedPropertyNames = function() {
}


SP.FieldCalculatedErrorValue = function() {ULS5Vl:;
    SP.FieldCalculatedErrorValue.initializeBase(this);
}
SP.FieldCalculatedErrorValue.prototype = {
    $38_1: null,
    
    get_errorMessage: function() {ULS5Vl:;
        return this.$38_1;
    },
    
    get_typeId: function() {ULS5Vl:;
        return '{3387286b-36e3-4199-bdca-f20048ce8328}';
    },
    
    writeToXml: function(writer, serializationContext) {ULS5Vl:;
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = [ 'ErrorMessage' ];
        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
    },
    
    initPropertiesFromJson: function(parentNode) {ULS5Vl:;
        var $v_0;
        $v_0 = parentNode.ErrorMessage;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$38_1 = ($v_0);
            delete parentNode.ErrorMessage;
        }
    }
}


SP.FieldChoice = function(Context, ObjectPath) {ULS5Vl:;
    SP.FieldChoice.initializeBase(this, [ Context, ObjectPath ]);
}
SP.FieldChoice.prototype = {
    
    get_editFormat: function() {ULS5Vl:;
        this.checkUninitializedProperty('EditFormat');
        return ((this.get_objectData().get_properties()['EditFormat']));
    },
    set_editFormat: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['EditFormat'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'EditFormat', value));
        }
        return value;
    },
    
    initPropertiesFromJson: function(parentNode) {ULS5Vl:;
        SP.FieldChoice.callBaseMethod(this, 'initPropertiesFromJson', [ parentNode ]);
        var $v_0;
        $v_0 = parentNode.EditFormat;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['EditFormat'] = ($v_0);
            delete parentNode.EditFormat;
        }
    }
}


SP.FieldChoicePropertyNames = function() {
}


SP.FieldCollection = function(Context, ObjectPath) {ULS5Vl:;
    SP.FieldCollection.initializeBase(this, [ Context, ObjectPath ]);
}
SP.FieldCollection.prototype = {
    
    itemAt: function(index) {ULS5Vl:;
        return this.getItemAtIndex(index);
    },
    
    get_item: function(index) {ULS5Vl:;
        return this.getItemAtIndex(index);
    },
    
    get_schemaXml: function() {ULS5Vl:;
        this.checkUninitializedProperty('SchemaXml');
        return ((this.get_objectData().get_properties()['SchemaXml']));
    },
    
    getByTitle: function(displayName) {ULS5Vl:;
        var $v_0;
        var $v_1 = ((this.get_objectData().get_methodReturnObjects()['GetByTitle']));
        if (SP.ScriptUtility.isNullOrUndefined($v_1)) {
            $v_1 = {};
            this.get_objectData().get_methodReturnObjects()['GetByTitle'] = $v_1;
        }
        $v_0 = (($v_1[displayName]));
        if (!SP.ScriptUtility.isNullOrUndefined($v_0)) {
            return $v_0;
        }
        $v_0 = new SP.Field(this.get_context(), new SP.ObjectPathMethod(this.get_context(), this.get_path(), 'GetByTitle', [ displayName ]));
        $v_1[displayName] = $v_0;
        return $v_0;
    },
    
    getById: function(id) {ULS5Vl:;
        var $v_0;
        var $v_1 = ((this.get_objectData().get_methodReturnObjects()['GetById']));
        if (SP.ScriptUtility.isNullOrUndefined($v_1)) {
            $v_1 = {};
            this.get_objectData().get_methodReturnObjects()['GetById'] = $v_1;
        }
        $v_0 = (($v_1[id.toString()]));
        if (!SP.ScriptUtility.isNullOrUndefined($v_0)) {
            return $v_0;
        }
        $v_0 = new SP.Field(this.get_context(), new SP.ObjectPathMethod(this.get_context(), this.get_path(), 'GetById', [ id ]));
        $v_1[id.toString()] = $v_0;
        return $v_0;
    },
    
    initPropertiesFromJson: function(parentNode) {ULS5Vl:;
        SP.FieldCollection.callBaseMethod(this, 'initPropertiesFromJson', [ parentNode ]);
        var $v_0;
        $v_0 = parentNode.SchemaXml;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['SchemaXml'] = ($v_0);
            delete parentNode.SchemaXml;
        }
    },
    
    getByInternalNameOrTitle: function(strName) {ULS5Vl:;
        var $v_0;
        var $v_1 = ((this.get_objectData().get_methodReturnObjects()['GetByInternalNameOrTitle']));
        if (SP.ScriptUtility.isNullOrUndefined($v_1)) {
            $v_1 = {};
            this.get_objectData().get_methodReturnObjects()['GetByInternalNameOrTitle'] = $v_1;
        }
        $v_0 = (($v_1[strName]));
        if (!SP.ScriptUtility.isNullOrUndefined($v_0)) {
            return $v_0;
        }
        $v_0 = new SP.Field(this.get_context(), new SP.ObjectPathMethod(this.get_context(), this.get_path(), 'GetByInternalNameOrTitle', [ strName ]));
        $v_1[strName] = $v_0;
        return $v_0;
    },
    
    add: function(field) {ULS5Vl:;
        var $v_0;
        $v_0 = new SP.Field(this.get_context(), new SP.ObjectPathMethod(this.get_context(), this.get_path(), 'Add', [ field ]));
        $v_0.get_path().setPendingReplace();
        var $v_1 = new SP.ObjectIdentityQuery($v_0.get_path());
        this.get_context().addQueryIdAndResultObject($v_1.get_id(), $v_0);
        this.get_context().addQuery($v_1);
        this.addChild($v_0);
        return $v_0;
    },
    
    addDependentLookup: function(displayName, primaryLookupField, lookupField) {ULS5Vl:;
        var $v_0;
        $v_0 = new SP.Field(this.get_context(), new SP.ObjectPathMethod(this.get_context(), this.get_path(), 'AddDependentLookup', [ displayName, primaryLookupField, lookupField ]));
        $v_0.get_path().setPendingReplace();
        var $v_1 = new SP.ObjectIdentityQuery($v_0.get_path());
        this.get_context().addQueryIdAndResultObject($v_1.get_id(), $v_0);
        this.get_context().addQuery($v_1);
        this.addChild($v_0);
        return $v_0;
    },
    
    addFieldAsXml: function(schemaXml, addToDefaultView, options) {ULS5Vl:;
        var $v_0;
        $v_0 = new SP.Field(this.get_context(), new SP.ObjectPathMethod(this.get_context(), this.get_path(), 'AddFieldAsXml', [ schemaXml, addToDefaultView, options ]));
        $v_0.get_path().setPendingReplace();
        var $v_1 = new SP.ObjectIdentityQuery($v_0.get_path());
        this.get_context().addQueryIdAndResultObject($v_1.get_id(), $v_0);
        this.get_context().addQuery($v_1);
        this.addChild($v_0);
        return $v_0;
    }
}


SP.FieldCollectionPropertyNames = function() {
}


SP.FieldComputed = function(Context, ObjectPath) {ULS5Vl:;
    SP.FieldComputed.initializeBase(this, [ Context, ObjectPath ]);
}
SP.FieldComputed.prototype = {
    
    get_enableLookup: function() {ULS5Vl:;
        this.checkUninitializedProperty('EnableLookup');
        return ((this.get_objectData().get_properties()['EnableLookup']));
    },
    set_enableLookup: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['EnableLookup'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'EnableLookup', value));
        }
        return value;
    },
    
    initPropertiesFromJson: function(parentNode) {ULS5Vl:;
        SP.FieldComputed.callBaseMethod(this, 'initPropertiesFromJson', [ parentNode ]);
        var $v_0;
        $v_0 = parentNode.EnableLookup;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['EnableLookup'] = ($v_0);
            delete parentNode.EnableLookup;
        }
    }
}


SP.FieldComputedPropertyNames = function() {
}


SP.FieldCurrency = function(Context, ObjectPath) {ULS5Vl:;
    SP.FieldCurrency.initializeBase(this, [ Context, ObjectPath ]);
}
SP.FieldCurrency.prototype = {
    
    get_currencyLocaleId: function() {ULS5Vl:;
        this.checkUninitializedProperty('CurrencyLocaleId');
        return ((this.get_objectData().get_properties()['CurrencyLocaleId']));
    },
    set_currencyLocaleId: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['CurrencyLocaleId'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'CurrencyLocaleId', value));
        }
        return value;
    },
    
    initPropertiesFromJson: function(parentNode) {ULS5Vl:;
        SP.FieldCurrency.callBaseMethod(this, 'initPropertiesFromJson', [ parentNode ]);
        var $v_0;
        $v_0 = parentNode.CurrencyLocaleId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['CurrencyLocaleId'] = ($v_0);
            delete parentNode.CurrencyLocaleId;
        }
    }
}


SP.FieldCurrencyPropertyNames = function() {
}


SP.FieldDateTime = function(Context, ObjectPath) {ULS5Vl:;
    SP.FieldDateTime.initializeBase(this, [ Context, ObjectPath ]);
}
SP.FieldDateTime.prototype = {
    
    get_dateTimeCalendarType: function() {ULS5Vl:;
        this.checkUninitializedProperty('DateTimeCalendarType');
        return ((this.get_objectData().get_properties()['DateTimeCalendarType']));
    },
    set_dateTimeCalendarType: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['DateTimeCalendarType'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'DateTimeCalendarType', value));
        }
        return value;
    },
    
    get_displayFormat: function() {ULS5Vl:;
        this.checkUninitializedProperty('DisplayFormat');
        return ((this.get_objectData().get_properties()['DisplayFormat']));
    },
    set_displayFormat: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['DisplayFormat'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'DisplayFormat', value));
        }
        return value;
    },
    
    initPropertiesFromJson: function(parentNode) {ULS5Vl:;
        SP.FieldDateTime.callBaseMethod(this, 'initPropertiesFromJson', [ parentNode ]);
        var $v_0;
        $v_0 = parentNode.DateTimeCalendarType;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['DateTimeCalendarType'] = ($v_0);
            delete parentNode.DateTimeCalendarType;
        }
        $v_0 = parentNode.DisplayFormat;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['DisplayFormat'] = ($v_0);
            delete parentNode.DisplayFormat;
        }
    }
}


SP.FieldDateTimePropertyNames = function() {
}


SP.FieldGuid = function(Context, ObjectPath) {ULS5Vl:;
    SP.FieldGuid.initializeBase(this, [ Context, ObjectPath ]);
}


SP.FieldLink = function(Context, ObjectPath) {ULS5Vl:;
    SP.FieldLink.initializeBase(this, [ Context, ObjectPath ]);
}
SP.FieldLink.prototype = {
    
    $7: function($p0) {
    },
    
    get_id: function() {ULS5Vl:;
        this.checkUninitializedProperty('Id');
        return ((this.get_objectData().get_properties()['Id']));
    },
    
    get_required: function() {ULS5Vl:;
        this.checkUninitializedProperty('Required');
        return ((this.get_objectData().get_properties()['Required']));
    },
    set_required: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['Required'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Required', value));
        }
        return value;
    },
    
    get_hidden: function() {ULS5Vl:;
        this.checkUninitializedProperty('Hidden');
        return ((this.get_objectData().get_properties()['Hidden']));
    },
    set_hidden: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['Hidden'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Hidden', value));
        }
        return value;
    },
    
    get_name: function() {ULS5Vl:;
        this.checkUninitializedProperty('Name');
        return ((this.get_objectData().get_properties()['Name']));
    },
    
    initPropertiesFromJson: function(parentNode) {ULS5Vl:;
        SP.FieldLink.callBaseMethod(this, 'initPropertiesFromJson', [ parentNode ]);
        var $v_0;
        $v_0 = parentNode.Id;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Id'] = ($v_0);
            delete parentNode.Id;
        }
        $v_0 = parentNode.Required;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Required'] = ($v_0);
            delete parentNode.Required;
        }
        $v_0 = parentNode.Hidden;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Hidden'] = ($v_0);
            delete parentNode.Hidden;
        }
        $v_0 = parentNode.Name;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Name'] = ($v_0);
            delete parentNode.Name;
        }
    },
    
    deleteObject: function() {ULS5Vl:;
        var $v_0 = new SP.ClientActionInvokeMethod(this, 'DeleteObject', null);
        this.get_context().addQuery($v_0);
        this.removeFromParentCollection();
    }
}


SP.FieldLinkPropertyNames = function() {
}


SP.FieldLinkCollection = function(Context, ObjectPath) {ULS5Vl:;
    SP.FieldLinkCollection.initializeBase(this, [ Context, ObjectPath ]);
}
SP.FieldLinkCollection.prototype = {
    
    itemAt: function(index) {ULS5Vl:;
        return this.getItemAtIndex(index);
    },
    
    get_item: function(index) {ULS5Vl:;
        return this.getItemAtIndex(index);
    },
    
    add: function(parameters) {ULS5Vl:;
        var $v_0;
        $v_0 = new SP.FieldLink(this.get_context(), new SP.ObjectPathMethod(this.get_context(), this.get_path(), 'Add', [ parameters ]));
        $v_0.get_path().setPendingReplace();
        var $v_1 = new SP.ObjectIdentityQuery($v_0.get_path());
        this.get_context().addQueryIdAndResultObject($v_1.get_id(), $v_0);
        this.get_context().addQuery($v_1);
        this.addChild($v_0);
        $v_0.$7(parameters);
        return $v_0;
    }
}


SP.FieldLinkCreationInformation = function() {ULS5Vl:;
    SP.FieldLinkCreationInformation.initializeBase(this);
}
SP.FieldLinkCreationInformation.prototype = {
    $K_1: null,
    
    get_field: function() {ULS5Vl:;
        return this.$K_1;
    },
    set_field: function(value) {ULS5Vl:;
        this.$K_1 = value;
        return value;
    },
    
    get_typeId: function() {ULS5Vl:;
        return '{63fb2c92-8f65-4bbb-a658-b6cd294403f4}';
    },
    
    writeToXml: function(writer, serializationContext) {ULS5Vl:;
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = [ 'Field' ];
        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
    },
    
    initPropertiesFromJson: function(parentNode) {ULS5Vl:;
        var $v_0;
        $v_0 = parentNode.Field;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$K_1.fromJson($v_0);
            delete parentNode.Field;
        }
    }
}


SP.FieldLookup = function(Context, ObjectPath) {ULS5Vl:;
    SP.FieldLookup.initializeBase(this, [ Context, ObjectPath ]);
}
SP.FieldLookup.prototype = {
    
    get_lookupWebId: function() {ULS5Vl:;
        this.checkUninitializedProperty('LookupWebId');
        return ((this.get_objectData().get_properties()['LookupWebId']));
    },
    set_lookupWebId: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['LookupWebId'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'LookupWebId', value));
        }
        return value;
    },
    
    get_lookupList: function() {ULS5Vl:;
        this.checkUninitializedProperty('LookupList');
        return ((this.get_objectData().get_properties()['LookupList']));
    },
    set_lookupList: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['LookupList'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'LookupList', value));
        }
        return value;
    },
    
    get_lookupField: function() {ULS5Vl:;
        this.checkUninitializedProperty('LookupField');
        return ((this.get_objectData().get_properties()['LookupField']));
    },
    set_lookupField: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['LookupField'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'LookupField', value));
        }
        return value;
    },
    
    get_relationshipDeleteBehavior: function() {ULS5Vl:;
        this.checkUninitializedProperty('RelationshipDeleteBehavior');
        return ((this.get_objectData().get_properties()['RelationshipDeleteBehavior']));
    },
    set_relationshipDeleteBehavior: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['RelationshipDeleteBehavior'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'RelationshipDeleteBehavior', value));
        }
        return value;
    },
    
    get_isRelationship: function() {ULS5Vl:;
        this.checkUninitializedProperty('IsRelationship');
        return ((this.get_objectData().get_properties()['IsRelationship']));
    },
    set_isRelationship: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['IsRelationship'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'IsRelationship', value));
        }
        return value;
    },
    
    get_allowMultipleValues: function() {ULS5Vl:;
        this.checkUninitializedProperty('AllowMultipleValues');
        return ((this.get_objectData().get_properties()['AllowMultipleValues']));
    },
    set_allowMultipleValues: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['AllowMultipleValues'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'AllowMultipleValues', value));
        }
        return value;
    },
    
    get_primaryFieldId: function() {ULS5Vl:;
        this.checkUninitializedProperty('PrimaryFieldId');
        return ((this.get_objectData().get_properties()['PrimaryFieldId']));
    },
    set_primaryFieldId: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['PrimaryFieldId'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'PrimaryFieldId', value));
        }
        return value;
    },
    
    initPropertiesFromJson: function(parentNode) {ULS5Vl:;
        SP.FieldLookup.callBaseMethod(this, 'initPropertiesFromJson', [ parentNode ]);
        var $v_0;
        $v_0 = parentNode.LookupWebId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['LookupWebId'] = ($v_0);
            delete parentNode.LookupWebId;
        }
        $v_0 = parentNode.LookupList;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['LookupList'] = ($v_0);
            delete parentNode.LookupList;
        }
        $v_0 = parentNode.LookupField;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['LookupField'] = ($v_0);
            delete parentNode.LookupField;
        }
        $v_0 = parentNode.RelationshipDeleteBehavior;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['RelationshipDeleteBehavior'] = ($v_0);
            delete parentNode.RelationshipDeleteBehavior;
        }
        $v_0 = parentNode.IsRelationship;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['IsRelationship'] = ($v_0);
            delete parentNode.IsRelationship;
        }
        $v_0 = parentNode.AllowMultipleValues;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['AllowMultipleValues'] = ($v_0);
            delete parentNode.AllowMultipleValues;
        }
        $v_0 = parentNode.PrimaryFieldId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['PrimaryFieldId'] = ($v_0);
            delete parentNode.PrimaryFieldId;
        }
    }
}


SP.FieldLookupPropertyNames = function() {
}


SP.FieldLookupValue = function() {ULS5Vl:;
    SP.FieldLookupValue.initializeBase(this);
}
SP.FieldLookupValue.prototype = {
    $L_1: 0,
    $b_1: null,
    
    get_lookupId: function() {ULS5Vl:;
        return this.$L_1;
    },
    set_lookupId: function(value) {ULS5Vl:;
        this.$L_1 = value;
        return value;
    },
    
    get_lookupValue: function() {ULS5Vl:;
        return this.$b_1;
    },
    
    get_typeId: function() {ULS5Vl:;
        return '{f1d34cc0-9b50-4a78-be78-d5facfcccfb7}';
    },
    
    writeToXml: function(writer, serializationContext) {ULS5Vl:;
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = [ 'LookupId', 'LookupValue' ];
        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
    },
    
    initPropertiesFromJson: function(parentNode) {ULS5Vl:;
        var $v_0;
        $v_0 = parentNode.LookupId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$L_1 = ($v_0);
            delete parentNode.LookupId;
        }
        $v_0 = parentNode.LookupValue;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$b_1 = ($v_0);
            delete parentNode.LookupValue;
        }
    }
}


SP.FieldMultiChoice = function(Context, ObjectPath) {ULS5Vl:;
    SP.FieldMultiChoice.initializeBase(this, [ Context, ObjectPath ]);
}
SP.FieldMultiChoice.prototype = {
    
    get_fillInChoice: function() {ULS5Vl:;
        this.checkUninitializedProperty('FillInChoice');
        return ((this.get_objectData().get_properties()['FillInChoice']));
    },
    set_fillInChoice: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['FillInChoice'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'FillInChoice', value));
        }
        return value;
    },
    
    get_choices: function() {ULS5Vl:;
        this.checkUninitializedProperty('Choices');
        return ((this.get_objectData().get_properties()['Choices']));
    },
    set_choices: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['Choices'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Choices', value));
        }
        return value;
    },
    
    get_mappings: function() {ULS5Vl:;
        this.checkUninitializedProperty('Mappings');
        return ((this.get_objectData().get_properties()['Mappings']));
    },
    
    initPropertiesFromJson: function(parentNode) {ULS5Vl:;
        SP.FieldMultiChoice.callBaseMethod(this, 'initPropertiesFromJson', [ parentNode ]);
        var $v_0;
        $v_0 = parentNode.FillInChoice;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['FillInChoice'] = ($v_0);
            delete parentNode.FillInChoice;
        }
        $v_0 = parentNode.Choices;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Choices'] = ($v_0);
            delete parentNode.Choices;
        }
        $v_0 = parentNode.Mappings;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Mappings'] = ($v_0);
            delete parentNode.Mappings;
        }
    }
}


SP.FieldMultiChoicePropertyNames = function() {
}


SP.FieldMultiLineText = function(Context, ObjectPath) {ULS5Vl:;
    SP.FieldMultiLineText.initializeBase(this, [ Context, ObjectPath ]);
}
SP.FieldMultiLineText.prototype = {
    
    get_wikiLinking: function() {ULS5Vl:;
        this.checkUninitializedProperty('WikiLinking');
        return ((this.get_objectData().get_properties()['WikiLinking']));
    },
    
    get_numberOfLines: function() {ULS5Vl:;
        this.checkUninitializedProperty('NumberOfLines');
        return ((this.get_objectData().get_properties()['NumberOfLines']));
    },
    set_numberOfLines: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['NumberOfLines'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'NumberOfLines', value));
        }
        return value;
    },
    
    get_allowHyperlink: function() {ULS5Vl:;
        this.checkUninitializedProperty('AllowHyperlink');
        return ((this.get_objectData().get_properties()['AllowHyperlink']));
    },
    set_allowHyperlink: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['AllowHyperlink'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'AllowHyperlink', value));
        }
        return value;
    },
    
    get_restrictedMode: function() {ULS5Vl:;
        this.checkUninitializedProperty('RestrictedMode');
        return ((this.get_objectData().get_properties()['RestrictedMode']));
    },
    set_restrictedMode: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['RestrictedMode'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'RestrictedMode', value));
        }
        return value;
    },
    
    get_richText: function() {ULS5Vl:;
        this.checkUninitializedProperty('RichText');
        return ((this.get_objectData().get_properties()['RichText']));
    },
    set_richText: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['RichText'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'RichText', value));
        }
        return value;
    },
    
    get_appendOnly: function() {ULS5Vl:;
        this.checkUninitializedProperty('AppendOnly');
        return ((this.get_objectData().get_properties()['AppendOnly']));
    },
    set_appendOnly: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['AppendOnly'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'AppendOnly', value));
        }
        return value;
    },
    
    initPropertiesFromJson: function(parentNode) {ULS5Vl:;
        SP.FieldMultiLineText.callBaseMethod(this, 'initPropertiesFromJson', [ parentNode ]);
        var $v_0;
        $v_0 = parentNode.WikiLinking;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['WikiLinking'] = ($v_0);
            delete parentNode.WikiLinking;
        }
        $v_0 = parentNode.NumberOfLines;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['NumberOfLines'] = ($v_0);
            delete parentNode.NumberOfLines;
        }
        $v_0 = parentNode.AllowHyperlink;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['AllowHyperlink'] = ($v_0);
            delete parentNode.AllowHyperlink;
        }
        $v_0 = parentNode.RestrictedMode;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['RestrictedMode'] = ($v_0);
            delete parentNode.RestrictedMode;
        }
        $v_0 = parentNode.RichText;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['RichText'] = ($v_0);
            delete parentNode.RichText;
        }
        $v_0 = parentNode.AppendOnly;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['AppendOnly'] = ($v_0);
            delete parentNode.AppendOnly;
        }
    }
}


SP.FieldMultiLineTextPropertyNames = function() {
}


SP.FieldNumber = function(Context, ObjectPath) {ULS5Vl:;
    SP.FieldNumber.initializeBase(this, [ Context, ObjectPath ]);
}
SP.FieldNumber.prototype = {
    
    get_minimumValue: function() {ULS5Vl:;
        this.checkUninitializedProperty('MinimumValue');
        return ((this.get_objectData().get_properties()['MinimumValue']));
    },
    set_minimumValue: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['MinimumValue'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'MinimumValue', value));
        }
        return value;
    },
    
    get_maximumValue: function() {ULS5Vl:;
        this.checkUninitializedProperty('MaximumValue');
        return ((this.get_objectData().get_properties()['MaximumValue']));
    },
    set_maximumValue: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['MaximumValue'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'MaximumValue', value));
        }
        return value;
    },
    
    initPropertiesFromJson: function(parentNode) {ULS5Vl:;
        SP.FieldNumber.callBaseMethod(this, 'initPropertiesFromJson', [ parentNode ]);
        var $v_0;
        $v_0 = parentNode.MinimumValue;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['MinimumValue'] = ($v_0);
            delete parentNode.MinimumValue;
        }
        $v_0 = parentNode.MaximumValue;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['MaximumValue'] = ($v_0);
            delete parentNode.MaximumValue;
        }
    }
}


SP.FieldNumberPropertyNames = function() {
}


SP.FieldRatingScale = function(Context, ObjectPath) {ULS5Vl:;
    SP.FieldRatingScale.initializeBase(this, [ Context, ObjectPath ]);
}
SP.FieldRatingScale.prototype = {
    
    get_gridStartNumber: function() {ULS5Vl:;
        this.checkUninitializedProperty('GridStartNumber');
        return ((this.get_objectData().get_properties()['GridStartNumber']));
    },
    set_gridStartNumber: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['GridStartNumber'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'GridStartNumber', value));
        }
        return value;
    },
    
    get_gridEndNumber: function() {ULS5Vl:;
        this.checkUninitializedProperty('GridEndNumber');
        return ((this.get_objectData().get_properties()['GridEndNumber']));
    },
    set_gridEndNumber: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['GridEndNumber'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'GridEndNumber', value));
        }
        return value;
    },
    
    get_rangeCount: function() {ULS5Vl:;
        this.checkUninitializedProperty('RangeCount');
        return ((this.get_objectData().get_properties()['RangeCount']));
    },
    
    get_gridTextRangeLow: function() {ULS5Vl:;
        this.checkUninitializedProperty('GridTextRangeLow');
        return ((this.get_objectData().get_properties()['GridTextRangeLow']));
    },
    set_gridTextRangeLow: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['GridTextRangeLow'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'GridTextRangeLow', value));
        }
        return value;
    },
    
    get_gridTextRangeAverage: function() {ULS5Vl:;
        this.checkUninitializedProperty('GridTextRangeAverage');
        return ((this.get_objectData().get_properties()['GridTextRangeAverage']));
    },
    set_gridTextRangeAverage: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['GridTextRangeAverage'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'GridTextRangeAverage', value));
        }
        return value;
    },
    
    get_gridTextRangeHigh: function() {ULS5Vl:;
        this.checkUninitializedProperty('GridTextRangeHigh');
        return ((this.get_objectData().get_properties()['GridTextRangeHigh']));
    },
    set_gridTextRangeHigh: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['GridTextRangeHigh'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'GridTextRangeHigh', value));
        }
        return value;
    },
    
    get_gridNAOptionText: function() {ULS5Vl:;
        this.checkUninitializedProperty('GridNAOptionText');
        return ((this.get_objectData().get_properties()['GridNAOptionText']));
    },
    set_gridNAOptionText: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['GridNAOptionText'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'GridNAOptionText', value));
        }
        return value;
    },
    
    initPropertiesFromJson: function(parentNode) {ULS5Vl:;
        SP.FieldRatingScale.callBaseMethod(this, 'initPropertiesFromJson', [ parentNode ]);
        var $v_0;
        $v_0 = parentNode.GridStartNumber;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['GridStartNumber'] = ($v_0);
            delete parentNode.GridStartNumber;
        }
        $v_0 = parentNode.GridEndNumber;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['GridEndNumber'] = ($v_0);
            delete parentNode.GridEndNumber;
        }
        $v_0 = parentNode.RangeCount;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['RangeCount'] = ($v_0);
            delete parentNode.RangeCount;
        }
        $v_0 = parentNode.GridTextRangeLow;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['GridTextRangeLow'] = ($v_0);
            delete parentNode.GridTextRangeLow;
        }
        $v_0 = parentNode.GridTextRangeAverage;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['GridTextRangeAverage'] = ($v_0);
            delete parentNode.GridTextRangeAverage;
        }
        $v_0 = parentNode.GridTextRangeHigh;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['GridTextRangeHigh'] = ($v_0);
            delete parentNode.GridTextRangeHigh;
        }
        $v_0 = parentNode.GridNAOptionText;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['GridNAOptionText'] = ($v_0);
            delete parentNode.GridNAOptionText;
        }
    }
}


SP.FieldRatingScalePropertyNames = function() {
}


SP.FieldRatingScaleQuestionAnswer = function() {ULS5Vl:;
    SP.FieldRatingScaleQuestionAnswer.initializeBase(this);
}
SP.FieldRatingScaleQuestionAnswer.prototype = {
    $2C_1: null,
    $1n_1: 0,
    
    get_question: function() {ULS5Vl:;
        return this.$2C_1;
    },
    set_question: function(value) {ULS5Vl:;
        this.$2C_1 = value;
        return value;
    },
    
    get_answer: function() {ULS5Vl:;
        return this.$1n_1;
    },
    set_answer: function(value) {ULS5Vl:;
        this.$1n_1 = value;
        return value;
    },
    
    get_typeId: function() {ULS5Vl:;
        return '{9b88fe8e-47cd-4ddc-9d66-0d12d70dde28}';
    },
    
    writeToXml: function(writer, serializationContext) {ULS5Vl:;
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = [ 'Question', 'Answer' ];
        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
    },
    
    initPropertiesFromJson: function(parentNode) {ULS5Vl:;
        var $v_0;
        $v_0 = parentNode.Question;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$2C_1 = ($v_0);
            delete parentNode.Question;
        }
        $v_0 = parentNode.Answer;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1n_1 = ($v_0);
            delete parentNode.Answer;
        }
    }
}


SP.FieldStringValues = function(Context, ObjectPath) {ULS5Vl:;
    SP.FieldStringValues.initializeBase(this, [ Context, ObjectPath ]);
}
SP.FieldStringValues.prototype = {
    
    get_fieldValues: function() {ULS5Vl:;
        var $v_0 = this.get_objectData().get_methodReturnObjects()[SP.ClientConstants.FieldValuesMethodName];
        if (SP.ScriptUtility.isNullOrUndefined($v_0)) {
            $v_0 = {};
            this.get_objectData().get_methodReturnObjects()[SP.ClientConstants.FieldValuesMethodName] = $v_0;
        }
        return $v_0;
    },
    
    get_item: function(fieldName) {ULS5Vl:;
        return this.$1m(fieldName);
    },
    
    initNonPropertiesFromJson: function(parentNode) {ULS5Vl:;
        SP.DataConvert.populateDictionaryFromObject(this.get_fieldValues(), parentNode);
        SP.DataConvert.fixupTypes(this.get_context(), this.get_fieldValues());
    },
    
    $1m: function($p0) {
        var $v_0 = this.get_fieldValues()[$p0];
        if (SP.ScriptUtility.isUndefined($v_0)) {
            throw Error.create(SP.Res.propertyHasNotBeenInitialized);
        }
        return $v_0;
    },
    
    refreshLoad: function() {ULS5Vl:;
        SP.FieldStringValues.callBaseMethod(this, 'refreshLoad');
        this.loadExpandoFields();
    },
    
    loadExpandoFields: function() {ULS5Vl:;
        var $$dict_1_0 = this.get_fieldValues();
        for (var $$key_1_1 in $$dict_1_0) {
            var $v_0 = { key: $$key_1_1, value: $$dict_1_0[$$key_1_1] };
            this.retrieve($v_0.key);
        }
    }
}


SP.FieldText = function(Context, ObjectPath) {ULS5Vl:;
    SP.FieldText.initializeBase(this, [ Context, ObjectPath ]);
}
SP.FieldText.prototype = {
    
    get_maxLength: function() {ULS5Vl:;
        this.checkUninitializedProperty('MaxLength');
        return ((this.get_objectData().get_properties()['MaxLength']));
    },
    set_maxLength: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['MaxLength'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'MaxLength', value));
        }
        return value;
    },
    
    initPropertiesFromJson: function(parentNode) {ULS5Vl:;
        SP.FieldText.callBaseMethod(this, 'initPropertiesFromJson', [ parentNode ]);
        var $v_0;
        $v_0 = parentNode.MaxLength;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['MaxLength'] = ($v_0);
            delete parentNode.MaxLength;
        }
    }
}


SP.FieldTextPropertyNames = function() {
}


SP.FieldUrl = function(Context, ObjectPath) {ULS5Vl:;
    SP.FieldUrl.initializeBase(this, [ Context, ObjectPath ]);
}
SP.FieldUrl.prototype = {
    
    get_displayFormat: function() {ULS5Vl:;
        this.checkUninitializedProperty('DisplayFormat');
        return ((this.get_objectData().get_properties()['DisplayFormat']));
    },
    set_displayFormat: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['DisplayFormat'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'DisplayFormat', value));
        }
        return value;
    },
    
    initPropertiesFromJson: function(parentNode) {ULS5Vl:;
        SP.FieldUrl.callBaseMethod(this, 'initPropertiesFromJson', [ parentNode ]);
        var $v_0;
        $v_0 = parentNode.DisplayFormat;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['DisplayFormat'] = ($v_0);
            delete parentNode.DisplayFormat;
        }
    }
}


SP.FieldUrlPropertyNames = function() {
}


SP.FieldUrlValue = function() {ULS5Vl:;
    SP.FieldUrlValue.initializeBase(this);
}
SP.FieldUrlValue.prototype = {
    $6_1: null,
    $2_1: null,
    
    get_url: function() {ULS5Vl:;
        return this.$6_1;
    },
    set_url: function(value) {ULS5Vl:;
        this.$6_1 = value;
        return value;
    },
    
    get_description: function() {ULS5Vl:;
        return this.$2_1;
    },
    set_description: function(value) {ULS5Vl:;
        this.$2_1 = value;
        return value;
    },
    
    get_typeId: function() {ULS5Vl:;
        return '{fa8b44af-7b43-43f2-904a-bd319497011e}';
    },
    
    writeToXml: function(writer, serializationContext) {ULS5Vl:;
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = [ 'Url', 'Description' ];
        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
    },
    
    initPropertiesFromJson: function(parentNode) {ULS5Vl:;
        var $v_0;
        $v_0 = parentNode.Url;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$6_1 = ($v_0);
            delete parentNode.Url;
        }
        $v_0 = parentNode.Description;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$2_1 = ($v_0);
            delete parentNode.Description;
        }
    }
}


SP.FieldUser = function(Context, ObjectPath) {ULS5Vl:;
    SP.FieldUser.initializeBase(this, [ Context, ObjectPath ]);
}
SP.FieldUser.prototype = {
    
    get_presence: function() {ULS5Vl:;
        this.checkUninitializedProperty('Presence');
        return ((this.get_objectData().get_properties()['Presence']));
    },
    set_presence: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['Presence'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Presence', value));
        }
        return value;
    },
    
    get_allowDisplay: function() {ULS5Vl:;
        this.checkUninitializedProperty('AllowDisplay');
        return ((this.get_objectData().get_properties()['AllowDisplay']));
    },
    set_allowDisplay: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['AllowDisplay'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'AllowDisplay', value));
        }
        return value;
    },
    
    get_selectionMode: function() {ULS5Vl:;
        this.checkUninitializedProperty('SelectionMode');
        return ((this.get_objectData().get_properties()['SelectionMode']));
    },
    set_selectionMode: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['SelectionMode'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'SelectionMode', value));
        }
        return value;
    },
    
    get_selectionGroup: function() {ULS5Vl:;
        this.checkUninitializedProperty('SelectionGroup');
        return ((this.get_objectData().get_properties()['SelectionGroup']));
    },
    set_selectionGroup: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['SelectionGroup'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'SelectionGroup', value));
        }
        return value;
    },
    
    initPropertiesFromJson: function(parentNode) {ULS5Vl:;
        SP.FieldUser.callBaseMethod(this, 'initPropertiesFromJson', [ parentNode ]);
        var $v_0;
        $v_0 = parentNode.Presence;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Presence'] = ($v_0);
            delete parentNode.Presence;
        }
        $v_0 = parentNode.AllowDisplay;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['AllowDisplay'] = ($v_0);
            delete parentNode.AllowDisplay;
        }
        $v_0 = parentNode.SelectionMode;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['SelectionMode'] = ($v_0);
            delete parentNode.SelectionMode;
        }
        $v_0 = parentNode.SelectionGroup;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['SelectionGroup'] = ($v_0);
            delete parentNode.SelectionGroup;
        }
    }
}


SP.FieldUserPropertyNames = function() {
}


SP.FieldUserValue = function() {ULS5Vl:;
    SP.FieldUserValue.initializeBase(this);
}
SP.FieldUserValue.fromUser = function(userName) {ULS5Vl:;
    var $v_0 = new SP.FieldUserValue();
    $v_0.$L_1 = -1;
    $v_0.$4D(userName);
    return $v_0;
}
SP.FieldUserValue.prototype = {
    $b_1: null,
    $L_1: 0,
    
    $4D: function($p0) {
        this.$b_1 = $p0;
    },
    
    get_lookupValue: function() {ULS5Vl:;
        return this.$b_1;
    },
    
    get_lookupId: function() {ULS5Vl:;
        return this.$L_1;
    },
    set_lookupId: function(value) {ULS5Vl:;
        this.$L_1 = value;
        return value;
    },
    
    get_typeId: function() {ULS5Vl:;
        return '{c956ab54-16bd-4c18-89d2-996f57282a6f}';
    },
    
    writeToXml: function(writer, serializationContext) {ULS5Vl:;
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = [ 'LookupValue', 'LookupId' ];
        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
    },
    
    initPropertiesFromJson: function(parentNode) {ULS5Vl:;
        var $v_0;
        $v_0 = parentNode.LookupValue;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$b_1 = ($v_0);
            delete parentNode.LookupValue;
        }
        $v_0 = parentNode.LookupId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$L_1 = ($v_0);
            delete parentNode.LookupId;
        }
    }
}


SP.File = function(Context, ObjectPath) {ULS5Vl:;
    SP.File.initializeBase(this, [ Context, ObjectPath ]);
}
SP.File.prototype = {
    
    get_exists: function() {ULS5Vl:;
        this.checkUninitializedProperty('Exists');
        return ((this.get_objectData().get_properties()['Exists']));
    },
    
    get_title: function() {ULS5Vl:;
        this.checkUninitializedProperty('Title');
        return ((this.get_objectData().get_properties()['Title']));
    },
    
    get_author: function() {ULS5Vl:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['Author']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.User(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'Author'));
            this.get_objectData().get_clientObjectProperties()['Author'] = $v_0;
        }
        return $v_0;
    },
    
    get_modifiedBy: function() {ULS5Vl:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['ModifiedBy']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.User(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'ModifiedBy'));
            this.get_objectData().get_clientObjectProperties()['ModifiedBy'] = $v_0;
        }
        return $v_0;
    },
    
    get_timeCreated: function() {ULS5Vl:;
        this.checkUninitializedProperty('TimeCreated');
        return ((this.get_objectData().get_properties()['TimeCreated']));
    },
    
    get_timeLastModified: function() {ULS5Vl:;
        this.checkUninitializedProperty('TimeLastModified');
        return ((this.get_objectData().get_properties()['TimeLastModified']));
    },
    
    get_customizedPageStatus: function() {ULS5Vl:;
        this.checkUninitializedProperty('CustomizedPageStatus');
        return ((this.get_objectData().get_properties()['CustomizedPageStatus']));
    },
    
    get_eTag: function() {ULS5Vl:;
        this.checkUninitializedProperty('ETag');
        return ((this.get_objectData().get_properties()['ETag']));
    },
    
    get_lockedByUser: function() {ULS5Vl:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['LockedByUser']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.User(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'LockedByUser'));
            this.get_objectData().get_clientObjectProperties()['LockedByUser'] = $v_0;
        }
        return $v_0;
    },
    
    get_checkOutType: function() {ULS5Vl:;
        this.checkUninitializedProperty('CheckOutType');
        return ((this.get_objectData().get_properties()['CheckOutType']));
    },
    
    get_checkedOutByUser: function() {ULS5Vl:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['CheckedOutByUser']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.User(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'CheckedOutByUser'));
            this.get_objectData().get_clientObjectProperties()['CheckedOutByUser'] = $v_0;
        }
        return $v_0;
    },
    
    get_checkInComment: function() {ULS5Vl:;
        this.checkUninitializedProperty('CheckInComment');
        return ((this.get_objectData().get_properties()['CheckInComment']));
    },
    
    get_uiVersion: function() {ULS5Vl:;
        this.checkUninitializedProperty('UIVersion');
        return ((this.get_objectData().get_properties()['UIVersion']));
    },
    
    get_majorVersion: function() {ULS5Vl:;
        this.checkUninitializedProperty('MajorVersion');
        return ((this.get_objectData().get_properties()['MajorVersion']));
    },
    
    get_minorVersion: function() {ULS5Vl:;
        this.checkUninitializedProperty('MinorVersion');
        return ((this.get_objectData().get_properties()['MinorVersion']));
    },
    
    get_uiVersionLabel: function() {ULS5Vl:;
        this.checkUninitializedProperty('UIVersionLabel');
        return ((this.get_objectData().get_properties()['UIVersionLabel']));
    },
    
    get_serverRelativeUrl: function() {ULS5Vl:;
        this.checkUninitializedProperty('ServerRelativeUrl');
        return ((this.get_objectData().get_properties()['ServerRelativeUrl']));
    },
    
    get_name: function() {ULS5Vl:;
        this.checkUninitializedProperty('Name');
        return ((this.get_objectData().get_properties()['Name']));
    },
    
    get_versions: function() {ULS5Vl:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['Versions']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.FileVersionCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'Versions'));
            this.get_objectData().get_clientObjectProperties()['Versions'] = $v_0;
        }
        return $v_0;
    },
    
    get_listItemAllFields: function() {ULS5Vl:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['ListItemAllFields']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.ListItem(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'ListItemAllFields'));
            this.get_objectData().get_clientObjectProperties()['ListItemAllFields'] = $v_0;
        }
        return $v_0;
    },
    
    get_level: function() {ULS5Vl:;
        this.checkUninitializedProperty('Level');
        return ((this.get_objectData().get_properties()['Level']));
    },
    
    initPropertiesFromJson: function(parentNode) {ULS5Vl:;
        SP.File.callBaseMethod(this, 'initPropertiesFromJson', [ parentNode ]);
        var $v_0;
        $v_0 = parentNode.Exists;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Exists'] = ($v_0);
            delete parentNode.Exists;
        }
        $v_0 = parentNode.Title;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Title'] = ($v_0);
            delete parentNode.Title;
        }
        $v_0 = parentNode.Author;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_author().fromJson($v_0);
            delete parentNode.Author;
        }
        $v_0 = parentNode.ModifiedBy;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_modifiedBy().fromJson($v_0);
            delete parentNode.ModifiedBy;
        }
        $v_0 = parentNode.TimeCreated;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['TimeCreated'] = ($v_0);
            delete parentNode.TimeCreated;
        }
        $v_0 = parentNode.TimeLastModified;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['TimeLastModified'] = ($v_0);
            delete parentNode.TimeLastModified;
        }
        $v_0 = parentNode.CustomizedPageStatus;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['CustomizedPageStatus'] = ($v_0);
            delete parentNode.CustomizedPageStatus;
        }
        $v_0 = parentNode.ETag;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ETag'] = ($v_0);
            delete parentNode.ETag;
        }
        $v_0 = parentNode.LockedByUser;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_lockedByUser().fromJson($v_0);
            delete parentNode.LockedByUser;
        }
        $v_0 = parentNode.CheckOutType;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['CheckOutType'] = ($v_0);
            delete parentNode.CheckOutType;
        }
        $v_0 = parentNode.CheckedOutByUser;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_checkedOutByUser().fromJson($v_0);
            delete parentNode.CheckedOutByUser;
        }
        $v_0 = parentNode.CheckInComment;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['CheckInComment'] = ($v_0);
            delete parentNode.CheckInComment;
        }
        $v_0 = parentNode.UIVersion;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['UIVersion'] = ($v_0);
            delete parentNode.UIVersion;
        }
        $v_0 = parentNode.MajorVersion;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['MajorVersion'] = ($v_0);
            delete parentNode.MajorVersion;
        }
        $v_0 = parentNode.MinorVersion;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['MinorVersion'] = ($v_0);
            delete parentNode.MinorVersion;
        }
        $v_0 = parentNode.UIVersionLabel;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['UIVersionLabel'] = ($v_0);
            delete parentNode.UIVersionLabel;
        }
        $v_0 = parentNode.ServerRelativeUrl;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ServerRelativeUrl'] = ($v_0);
            delete parentNode.ServerRelativeUrl;
        }
        $v_0 = parentNode.Name;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Name'] = ($v_0);
            delete parentNode.Name;
        }
        $v_0 = parentNode.Versions;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_versions().fromJson($v_0);
            delete parentNode.Versions;
        }
        $v_0 = parentNode.ListItemAllFields;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_listItemAllFields().fromJson($v_0);
            delete parentNode.ListItemAllFields;
        }
        $v_0 = parentNode.Level;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Level'] = ($v_0);
            delete parentNode.Level;
        }
    },
    
    moveTo: function(newUrl, flags) {ULS5Vl:;
        var $v_0 = new SP.ClientActionInvokeMethod(this, 'MoveTo', [ newUrl, flags ]);
        this.get_context().addQuery($v_0);
    },
    
    copyTo: function(strNewUrl, bOverWrite) {ULS5Vl:;
        var $v_0 = new SP.ClientActionInvokeMethod(this, 'CopyTo', [ strNewUrl, bOverWrite ]);
        this.get_context().addQuery($v_0);
    },
    
    deleteObject: function() {ULS5Vl:;
        var $v_0 = new SP.ClientActionInvokeMethod(this, 'DeleteObject', null);
        this.get_context().addQuery($v_0);
        this.removeFromParentCollection();
    },
    
    recycle: function() {ULS5Vl:;
        var $v_0;
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'Recycle', null);
        this.get_context().addQuery($v_1);
        $v_0 = new SP.GuidResult();
        this.get_context().addQueryIdAndResultObject($v_1.get_id(), $v_0);
        this.removeFromParentCollection();
        return $v_0;
    },
    
    checkOut: function() {ULS5Vl:;
        var $v_0 = new SP.ClientActionInvokeMethod(this, 'CheckOut', null);
        this.get_context().addQuery($v_0);
    },
    
    undoCheckOut: function() {ULS5Vl:;
        var $v_0 = new SP.ClientActionInvokeMethod(this, 'UndoCheckOut', null);
        this.get_context().addQuery($v_0);
    },
    
    checkIn: function(comment, checkInType) {ULS5Vl:;
        var $v_0 = new SP.ClientActionInvokeMethod(this, 'CheckIn', [ comment, checkInType ]);
        this.get_context().addQuery($v_0);
    },
    
    publish: function(comment) {ULS5Vl:;
        var $v_0 = new SP.ClientActionInvokeMethod(this, 'Publish', [ comment ]);
        this.get_context().addQuery($v_0);
    },
    
    unPublish: function(comment) {ULS5Vl:;
        var $v_0 = new SP.ClientActionInvokeMethod(this, 'UnPublish', [ comment ]);
        this.get_context().addQuery($v_0);
    },
    
    getLimitedWebPartManager: function(scope) {ULS5Vl:;
        var $v_0;
        var $v_1 = ((this.get_objectData().get_methodReturnObjects()['GetLimitedWebPartManager']));
        if (SP.ScriptUtility.isNullOrUndefined($v_1)) {
            $v_1 = [];
            this.get_objectData().get_methodReturnObjects()['GetLimitedWebPartManager'] = $v_1;
        }
        $v_0 = (($v_1[(scope)]));
        if (!SP.ScriptUtility.isNullOrUndefined($v_0)) {
            return $v_0;
        }
        $v_0 = new SP.WebParts.LimitedWebPartManager(this.get_context(), new SP.ObjectPathMethod(this.get_context(), this.get_path(), 'GetLimitedWebPartManager', [ scope ]));
        $v_1[(scope)] = $v_0;
        return $v_0;
    }
}


SP.FilePropertyNames = function() {
}


SP.FileObjectPropertyNames = function() {
}


SP.FileCollection = function(Context, ObjectPath) {ULS5Vl:;
    SP.FileCollection.initializeBase(this, [ Context, ObjectPath ]);
}
SP.FileCollection.prototype = {
    
    itemAt: function(index) {ULS5Vl:;
        return this.getItemAtIndex(index);
    },
    
    get_item: function(index) {ULS5Vl:;
        return this.getItemAtIndex(index);
    },
    
    addTemplateFile: function(urlOfFile, templateFileType) {ULS5Vl:;
        var $v_0;
        $v_0 = new SP.File(this.get_context(), new SP.ObjectPathMethod(this.get_context(), this.get_path(), 'AddTemplateFile', [ urlOfFile, templateFileType ]));
        $v_0.get_path().setPendingReplace();
        var $v_1 = new SP.ObjectIdentityQuery($v_0.get_path());
        this.get_context().addQueryIdAndResultObject($v_1.get_id(), $v_0);
        this.get_context().addQuery($v_1);
        this.addChild($v_0);
        return $v_0;
    }
}


SP.FileVersion = function(Context, ObjectPath) {ULS5Vl:;
    SP.FileVersion.initializeBase(this, [ Context, ObjectPath ]);
}
SP.FileVersion.prototype = {
    
    get_created: function() {ULS5Vl:;
        this.checkUninitializedProperty('Created');
        return ((this.get_objectData().get_properties()['Created']));
    },
    
    get_id: function() {ULS5Vl:;
        this.checkUninitializedProperty('ID');
        return ((this.get_objectData().get_properties()['ID']));
    },
    
    get_versionLabel: function() {ULS5Vl:;
        this.checkUninitializedProperty('VersionLabel');
        return ((this.get_objectData().get_properties()['VersionLabel']));
    },
    
    get_createdBy: function() {ULS5Vl:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['CreatedBy']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.User(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'CreatedBy'));
            this.get_objectData().get_clientObjectProperties()['CreatedBy'] = $v_0;
        }
        return $v_0;
    },
    
    get_url: function() {ULS5Vl:;
        this.checkUninitializedProperty('Url');
        return ((this.get_objectData().get_properties()['Url']));
    },
    
    get_isCurrentVersion: function() {ULS5Vl:;
        this.checkUninitializedProperty('IsCurrentVersion');
        return ((this.get_objectData().get_properties()['IsCurrentVersion']));
    },
    
    get_checkInComment: function() {ULS5Vl:;
        this.checkUninitializedProperty('CheckInComment');
        return ((this.get_objectData().get_properties()['CheckInComment']));
    },
    
    initPropertiesFromJson: function(parentNode) {ULS5Vl:;
        SP.FileVersion.callBaseMethod(this, 'initPropertiesFromJson', [ parentNode ]);
        var $v_0;
        $v_0 = parentNode.Created;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Created'] = ($v_0);
            delete parentNode.Created;
        }
        $v_0 = parentNode.ID;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ID'] = ($v_0);
            delete parentNode.ID;
        }
        $v_0 = parentNode.VersionLabel;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['VersionLabel'] = ($v_0);
            delete parentNode.VersionLabel;
        }
        $v_0 = parentNode.CreatedBy;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_createdBy().fromJson($v_0);
            delete parentNode.CreatedBy;
        }
        $v_0 = parentNode.Url;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Url'] = ($v_0);
            delete parentNode.Url;
        }
        $v_0 = parentNode.IsCurrentVersion;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['IsCurrentVersion'] = ($v_0);
            delete parentNode.IsCurrentVersion;
        }
        $v_0 = parentNode.CheckInComment;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['CheckInComment'] = ($v_0);
            delete parentNode.CheckInComment;
        }
    }
}


SP.FileVersionPropertyNames = function() {
}


SP.FileVersionObjectPropertyNames = function() {
}


SP.FileVersionCollection = function(Context, ObjectPath) {ULS5Vl:;
    SP.FileVersionCollection.initializeBase(this, [ Context, ObjectPath ]);
}
SP.FileVersionCollection.prototype = {
    
    itemAt: function(index) {ULS5Vl:;
        return this.getItemAtIndex(index);
    },
    
    get_item: function(index) {ULS5Vl:;
        return this.getItemAtIndex(index);
    },
    
    deleteByID: function(vid) {ULS5Vl:;
        var $v_0 = new SP.ClientActionInvokeMethod(this, 'DeleteByID', [ vid ]);
        this.get_context().addQuery($v_0);
    },
    
    deleteByLabel: function(versionlabel) {ULS5Vl:;
        var $v_0 = new SP.ClientActionInvokeMethod(this, 'DeleteByLabel', [ versionlabel ]);
        this.get_context().addQuery($v_0);
    },
    
    deleteAll: function() {ULS5Vl:;
        var $v_0 = new SP.ClientActionInvokeMethod(this, 'DeleteAll', null);
        this.get_context().addQuery($v_0);
    },
    
    restoreByLabel: function(versionlabel) {ULS5Vl:;
        var $v_0 = new SP.ClientActionInvokeMethod(this, 'RestoreByLabel', [ versionlabel ]);
        this.get_context().addQuery($v_0);
    }
}


SP.Folder = function(Context, ObjectPath) {ULS5Vl:;
    SP.Folder.initializeBase(this, [ Context, ObjectPath ]);
}
SP.Folder.prototype = {
    
    get_parentFolder: function() {ULS5Vl:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['ParentFolder']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.Folder(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'ParentFolder'));
            this.get_objectData().get_clientObjectProperties()['ParentFolder'] = $v_0;
        }
        return $v_0;
    },
    
    get_itemCount: function() {ULS5Vl:;
        this.checkUninitializedProperty('ItemCount');
        return ((this.get_objectData().get_properties()['ItemCount']));
    },
    
    get_name: function() {ULS5Vl:;
        this.checkUninitializedProperty('Name');
        return ((this.get_objectData().get_properties()['Name']));
    },
    
    get_serverRelativeUrl: function() {ULS5Vl:;
        this.checkUninitializedProperty('ServerRelativeUrl');
        return ((this.get_objectData().get_properties()['ServerRelativeUrl']));
    },
    
    get_welcomePage: function() {ULS5Vl:;
        this.checkUninitializedProperty('WelcomePage');
        return ((this.get_objectData().get_properties()['WelcomePage']));
    },
    set_welcomePage: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['WelcomePage'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'WelcomePage', value));
        }
        return value;
    },
    
    get_files: function() {ULS5Vl:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['Files']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.FileCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'Files'));
            this.get_objectData().get_clientObjectProperties()['Files'] = $v_0;
        }
        return $v_0;
    },
    
    get_folders: function() {ULS5Vl:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['Folders']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.FolderCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'Folders'));
            this.get_objectData().get_clientObjectProperties()['Folders'] = $v_0;
        }
        return $v_0;
    },
    
    get_uniqueContentTypeOrder: function() {ULS5Vl:;
        this.checkUninitializedProperty('UniqueContentTypeOrder');
        return ((this.get_objectData().get_properties()['UniqueContentTypeOrder']));
    },
    set_uniqueContentTypeOrder: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['UniqueContentTypeOrder'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'UniqueContentTypeOrder', value));
        }
        return value;
    },
    
    get_contentTypeOrder: function() {ULS5Vl:;
        this.checkUninitializedProperty('ContentTypeOrder');
        return ((this.get_objectData().get_properties()['ContentTypeOrder']));
    },
    
    initPropertiesFromJson: function(parentNode) {ULS5Vl:;
        SP.Folder.callBaseMethod(this, 'initPropertiesFromJson', [ parentNode ]);
        var $v_0;
        $v_0 = parentNode.ParentFolder;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_parentFolder().fromJson($v_0);
            delete parentNode.ParentFolder;
        }
        $v_0 = parentNode.ItemCount;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ItemCount'] = ($v_0);
            delete parentNode.ItemCount;
        }
        $v_0 = parentNode.Name;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Name'] = ($v_0);
            delete parentNode.Name;
        }
        $v_0 = parentNode.ServerRelativeUrl;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ServerRelativeUrl'] = ($v_0);
            delete parentNode.ServerRelativeUrl;
        }
        $v_0 = parentNode.WelcomePage;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['WelcomePage'] = ($v_0);
            delete parentNode.WelcomePage;
        }
        $v_0 = parentNode.Files;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_files().fromJson($v_0);
            delete parentNode.Files;
        }
        $v_0 = parentNode.Folders;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_folders().fromJson($v_0);
            delete parentNode.Folders;
        }
        $v_0 = parentNode.UniqueContentTypeOrder;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['UniqueContentTypeOrder'] = (([]));
            SP.DataConvert.populateArray(this.get_context(), (((this.get_objectData().get_properties()['UniqueContentTypeOrder']))), ($v_0));
            delete parentNode.UniqueContentTypeOrder;
        }
        $v_0 = parentNode.ContentTypeOrder;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ContentTypeOrder'] = (([]));
            SP.DataConvert.populateArray(this.get_context(), (((this.get_objectData().get_properties()['ContentTypeOrder']))), ($v_0));
            delete parentNode.ContentTypeOrder;
        }
    },
    
    update: function() {ULS5Vl:;
        var $v_0 = new SP.ClientActionInvokeMethod(this, 'Update', null);
        this.get_context().addQuery($v_0);
    },
    
    deleteObject: function() {ULS5Vl:;
        var $v_0 = new SP.ClientActionInvokeMethod(this, 'DeleteObject', null);
        this.get_context().addQuery($v_0);
        this.removeFromParentCollection();
    },
    
    recycle: function() {ULS5Vl:;
        var $v_0;
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'Recycle', null);
        this.get_context().addQuery($v_1);
        $v_0 = new SP.GuidResult();
        this.get_context().addQueryIdAndResultObject($v_1.get_id(), $v_0);
        this.removeFromParentCollection();
        return $v_0;
    }
}


SP.FolderPropertyNames = function() {
}


SP.FolderObjectPropertyNames = function() {
}


SP.FolderCollection = function(Context, ObjectPath) {ULS5Vl:;
    SP.FolderCollection.initializeBase(this, [ Context, ObjectPath ]);
}
SP.FolderCollection.prototype = {
    
    itemAt: function(index) {ULS5Vl:;
        return this.getItemAtIndex(index);
    },
    
    get_item: function(index) {ULS5Vl:;
        return this.getItemAtIndex(index);
    },
    
    add: function(strUrl) {ULS5Vl:;
        var $v_0;
        $v_0 = new SP.Folder(this.get_context(), new SP.ObjectPathMethod(this.get_context(), this.get_path(), 'Add', [ strUrl ]));
        $v_0.get_path().setPendingReplace();
        var $v_1 = new SP.ObjectIdentityQuery($v_0.get_path());
        this.get_context().addQueryIdAndResultObject($v_1.get_id(), $v_0);
        this.get_context().addQuery($v_1);
        this.addChild($v_0);
        return $v_0;
    }
}


SP.Form = function(Context, ObjectPath) {ULS5Vl:;
    SP.Form.initializeBase(this, [ Context, ObjectPath ]);
}
SP.Form.prototype = {
    
    get_serverRelativeUrl: function() {ULS5Vl:;
        this.checkUninitializedProperty('ServerRelativeUrl');
        return ((this.get_objectData().get_properties()['ServerRelativeUrl']));
    },
    
    get_id: function() {ULS5Vl:;
        this.checkUninitializedProperty('Id');
        return ((this.get_objectData().get_properties()['Id']));
    },
    
    get_formType: function() {ULS5Vl:;
        this.checkUninitializedProperty('FormType');
        return ((this.get_objectData().get_properties()['FormType']));
    },
    
    initPropertiesFromJson: function(parentNode) {ULS5Vl:;
        SP.Form.callBaseMethod(this, 'initPropertiesFromJson', [ parentNode ]);
        var $v_0;
        $v_0 = parentNode.ServerRelativeUrl;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ServerRelativeUrl'] = ($v_0);
            delete parentNode.ServerRelativeUrl;
        }
        $v_0 = parentNode.Id;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Id'] = ($v_0);
            delete parentNode.Id;
        }
        $v_0 = parentNode.FormType;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['FormType'] = ($v_0);
            delete parentNode.FormType;
        }
    }
}


SP.FormPropertyNames = function() {
}


SP.FormCollection = function(Context, ObjectPath) {ULS5Vl:;
    SP.FormCollection.initializeBase(this, [ Context, ObjectPath ]);
}
SP.FormCollection.prototype = {
    
    itemAt: function(index) {ULS5Vl:;
        return this.getItemAtIndex(index);
    },
    
    get_item: function(index) {ULS5Vl:;
        return this.getItemAtIndex(index);
    },
    
    getByPageType: function(formType) {ULS5Vl:;
        var $v_0;
        var $v_1 = ((this.get_objectData().get_methodReturnObjects()['GetByPageType']));
        if (SP.ScriptUtility.isNullOrUndefined($v_1)) {
            $v_1 = [];
            this.get_objectData().get_methodReturnObjects()['GetByPageType'] = $v_1;
        }
        $v_0 = (($v_1[(formType)]));
        if (!SP.ScriptUtility.isNullOrUndefined($v_0)) {
            return $v_0;
        }
        $v_0 = new SP.Form(this.get_context(), new SP.ObjectPathMethod(this.get_context(), this.get_path(), 'GetByPageType', [ formType ]));
        $v_1[(formType)] = $v_0;
        return $v_0;
    }
}


SP.Group = function(Context, ObjectPath) {ULS5Vl:;
    SP.Group.initializeBase(this, [ Context, ObjectPath ]);
}
SP.Group.prototype = {
    
    $7: function($p0) {
        if ($p0) {
            this.get_objectData().get_properties()['Title'] = $p0.$1_1;
        }
    },
    
    get_owner: function() {ULS5Vl:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['Owner']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.Principal(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'Owner'));
            this.get_objectData().get_clientObjectProperties()['Owner'] = $v_0;
        }
        return $v_0;
    },
    set_owner: function(value) {ULS5Vl:;
        this.get_objectData().get_clientObjectProperties()['Owner'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Owner', value));
        }
        return value;
    },
    
    get_ownerTitle: function() {ULS5Vl:;
        this.checkUninitializedProperty('OwnerTitle');
        return ((this.get_objectData().get_properties()['OwnerTitle']));
    },
    
    get_users: function() {ULS5Vl:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['Users']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.UserCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'Users'));
            this.get_objectData().get_clientObjectProperties()['Users'] = $v_0;
        }
        return $v_0;
    },
    
    get_description: function() {ULS5Vl:;
        this.checkUninitializedProperty('Description');
        return ((this.get_objectData().get_properties()['Description']));
    },
    set_description: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['Description'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Description', value));
        }
        return value;
    },
    
    get_onlyAllowMembersViewMembership: function() {ULS5Vl:;
        this.checkUninitializedProperty('OnlyAllowMembersViewMembership');
        return ((this.get_objectData().get_properties()['OnlyAllowMembersViewMembership']));
    },
    set_onlyAllowMembersViewMembership: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['OnlyAllowMembersViewMembership'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'OnlyAllowMembersViewMembership', value));
        }
        return value;
    },
    
    get_allowMembersEditMembership: function() {ULS5Vl:;
        this.checkUninitializedProperty('AllowMembersEditMembership');
        return ((this.get_objectData().get_properties()['AllowMembersEditMembership']));
    },
    set_allowMembersEditMembership: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['AllowMembersEditMembership'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'AllowMembersEditMembership', value));
        }
        return value;
    },
    
    get_allowRequestToJoinLeave: function() {ULS5Vl:;
        this.checkUninitializedProperty('AllowRequestToJoinLeave');
        return ((this.get_objectData().get_properties()['AllowRequestToJoinLeave']));
    },
    set_allowRequestToJoinLeave: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['AllowRequestToJoinLeave'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'AllowRequestToJoinLeave', value));
        }
        return value;
    },
    
    get_autoAcceptRequestToJoinLeave: function() {ULS5Vl:;
        this.checkUninitializedProperty('AutoAcceptRequestToJoinLeave');
        return ((this.get_objectData().get_properties()['AutoAcceptRequestToJoinLeave']));
    },
    set_autoAcceptRequestToJoinLeave: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['AutoAcceptRequestToJoinLeave'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'AutoAcceptRequestToJoinLeave', value));
        }
        return value;
    },
    
    get_requestToJoinLeaveEmailSetting: function() {ULS5Vl:;
        this.checkUninitializedProperty('RequestToJoinLeaveEmailSetting');
        return ((this.get_objectData().get_properties()['RequestToJoinLeaveEmailSetting']));
    },
    set_requestToJoinLeaveEmailSetting: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['RequestToJoinLeaveEmailSetting'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'RequestToJoinLeaveEmailSetting', value));
        }
        return value;
    },
    
    get_canCurrentUserViewMembership: function() {ULS5Vl:;
        this.checkUninitializedProperty('CanCurrentUserViewMembership');
        return ((this.get_objectData().get_properties()['CanCurrentUserViewMembership']));
    },
    
    get_canCurrentUserEditMembership: function() {ULS5Vl:;
        this.checkUninitializedProperty('CanCurrentUserEditMembership');
        return ((this.get_objectData().get_properties()['CanCurrentUserEditMembership']));
    },
    
    get_canCurrentUserManageGroup: function() {ULS5Vl:;
        this.checkUninitializedProperty('CanCurrentUserManageGroup');
        return ((this.get_objectData().get_properties()['CanCurrentUserManageGroup']));
    },
    
    initPropertiesFromJson: function(parentNode) {ULS5Vl:;
        SP.Group.callBaseMethod(this, 'initPropertiesFromJson', [ parentNode ]);
        var $v_0;
        $v_0 = parentNode.Owner;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_owner().fromJson($v_0);
            delete parentNode.Owner;
        }
        $v_0 = parentNode.OwnerTitle;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['OwnerTitle'] = ($v_0);
            delete parentNode.OwnerTitle;
        }
        $v_0 = parentNode.Users;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_users().fromJson($v_0);
            delete parentNode.Users;
        }
        $v_0 = parentNode.Description;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Description'] = ($v_0);
            delete parentNode.Description;
        }
        $v_0 = parentNode.OnlyAllowMembersViewMembership;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['OnlyAllowMembersViewMembership'] = ($v_0);
            delete parentNode.OnlyAllowMembersViewMembership;
        }
        $v_0 = parentNode.AllowMembersEditMembership;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['AllowMembersEditMembership'] = ($v_0);
            delete parentNode.AllowMembersEditMembership;
        }
        $v_0 = parentNode.AllowRequestToJoinLeave;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['AllowRequestToJoinLeave'] = ($v_0);
            delete parentNode.AllowRequestToJoinLeave;
        }
        $v_0 = parentNode.AutoAcceptRequestToJoinLeave;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['AutoAcceptRequestToJoinLeave'] = ($v_0);
            delete parentNode.AutoAcceptRequestToJoinLeave;
        }
        $v_0 = parentNode.RequestToJoinLeaveEmailSetting;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['RequestToJoinLeaveEmailSetting'] = ($v_0);
            delete parentNode.RequestToJoinLeaveEmailSetting;
        }
        $v_0 = parentNode.CanCurrentUserViewMembership;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['CanCurrentUserViewMembership'] = ($v_0);
            delete parentNode.CanCurrentUserViewMembership;
        }
        $v_0 = parentNode.CanCurrentUserEditMembership;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['CanCurrentUserEditMembership'] = ($v_0);
            delete parentNode.CanCurrentUserEditMembership;
        }
        $v_0 = parentNode.CanCurrentUserManageGroup;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['CanCurrentUserManageGroup'] = ($v_0);
            delete parentNode.CanCurrentUserManageGroup;
        }
    },
    
    update: function() {ULS5Vl:;
        var $v_0 = new SP.ClientActionInvokeMethod(this, 'Update', null);
        this.get_context().addQuery($v_0);
    }
}


SP.GroupPropertyNames = function() {
}


SP.GroupObjectPropertyNames = function() {
}


SP.GroupCollection = function(Context, ObjectPath) {ULS5Vl:;
    SP.GroupCollection.initializeBase(this, [ Context, ObjectPath ]);
}
SP.GroupCollection.prototype = {
    
    itemAt: function(index) {ULS5Vl:;
        return this.getItemAtIndex(index);
    },
    
    get_item: function(index) {ULS5Vl:;
        return this.getItemAtIndex(index);
    },
    
    getById: function(id) {ULS5Vl:;
        var $v_0;
        var $v_1 = ((this.get_objectData().get_methodReturnObjects()['GetById']));
        if (SP.ScriptUtility.isNullOrUndefined($v_1)) {
            $v_1 = [];
            this.get_objectData().get_methodReturnObjects()['GetById'] = $v_1;
        }
        $v_0 = (($v_1[id]));
        if (!SP.ScriptUtility.isNullOrUndefined($v_0)) {
            return $v_0;
        }
        $v_0 = new SP.Group(this.get_context(), new SP.ObjectPathMethod(this.get_context(), this.get_path(), 'GetById', [ id ]));
        $v_1[id] = $v_0;
        var $v_2 = new SP.ObjectIdentityQuery($v_0.get_path());
        this.get_context().addQueryIdAndResultObject($v_2.get_id(), $v_0);
        this.get_context().addQuery($v_2);
        return $v_0;
    },
    
    add: function(parameters) {ULS5Vl:;
        var $v_0;
        $v_0 = new SP.Group(this.get_context(), new SP.ObjectPathMethod(this.get_context(), this.get_path(), 'Add', [ parameters ]));
        $v_0.get_path().setPendingReplace();
        var $v_1 = new SP.ObjectIdentityQuery($v_0.get_path());
        this.get_context().addQueryIdAndResultObject($v_1.get_id(), $v_0);
        this.get_context().addQuery($v_1);
        this.addChild($v_0);
        $v_0.$7(parameters);
        return $v_0;
    },
    
    remove: function(group) {ULS5Vl:;
        var $v_0 = new SP.ClientActionInvokeMethod(this, 'Remove', [ group ]);
        this.get_context().addQuery($v_0);
        this.removeChild(group);
    }
}


SP.GroupCreationInformation = function() {ULS5Vl:;
    SP.GroupCreationInformation.initializeBase(this);
}
SP.GroupCreationInformation.prototype = {
    $1_1: null,
    $2_1: null,
    
    get_title: function() {ULS5Vl:;
        return this.$1_1;
    },
    set_title: function(value) {ULS5Vl:;
        this.$1_1 = value;
        return value;
    },
    
    get_description: function() {ULS5Vl:;
        return this.$2_1;
    },
    set_description: function(value) {ULS5Vl:;
        this.$2_1 = value;
        return value;
    },
    
    get_typeId: function() {ULS5Vl:;
        return '{9fd1540e-59e6-47fa-9a00-5173c9c35785}';
    },
    
    writeToXml: function(writer, serializationContext) {ULS5Vl:;
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = [ 'Title', 'Description' ];
        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
    },
    
    initPropertiesFromJson: function(parentNode) {ULS5Vl:;
        var $v_0;
        $v_0 = parentNode.Title;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1_1 = ($v_0);
            delete parentNode.Title;
        }
        $v_0 = parentNode.Description;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$2_1 = ($v_0);
            delete parentNode.Description;
        }
    }
}


SP.List = function(Context, ObjectPath) {ULS5Vl:;
    SP.List.initializeBase(this, [ Context, ObjectPath ]);
}
SP.List.prototype = {
    
    $7: function($p0) {
        if ($p0) {
            this.get_objectData().get_properties()['Description'] = $p0.$2_1;
            this.get_objectData().get_properties()['TemplateFeatureId'] = $p0.$1J_1;
            this.get_objectData().get_properties()['Title'] = $p0.$1_1;
        }
    },
    
    getItemById: function(id) {ULS5Vl:;
        if (typeof(id) === 'string') {
            return this.$3o(id.toString());
        }
        else {
            id = parseInt(id.toString());
            var $v_0;
            var $v_1 = ((this.get_objectData().get_methodReturnObjects()['GetItemById']));
            if (SP.ScriptUtility.isNullOrUndefined($v_1)) {
                $v_1 = [];
                this.get_objectData().get_methodReturnObjects()['GetItemById'] = $v_1;
            }
            $v_0 = (($v_1[id]));
            if (!SP.ScriptUtility.isNullOrUndefined($v_0)) {
                return $v_0;
            }
            $v_0 = new SP.ListItem(this.get_context(), new SP.ObjectPathMethod(this.get_context(), this.get_path(), 'GetItemById', [ id ]));
            $v_1[id] = $v_0;
            return $v_0;
        }
    },
    
    get_parentWeb: function() {ULS5Vl:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['ParentWeb']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.Web(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'ParentWeb'));
            this.get_objectData().get_clientObjectProperties()['ParentWeb'] = $v_0;
        }
        return $v_0;
    },
    
    get_parentWebUrl: function() {ULS5Vl:;
        this.checkUninitializedProperty('ParentWebUrl');
        return ((this.get_objectData().get_properties()['ParentWebUrl']));
    },
    
    get_fields: function() {ULS5Vl:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['Fields']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.FieldCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'Fields'));
            this.get_objectData().get_clientObjectProperties()['Fields'] = $v_0;
        }
        return $v_0;
    },
    
    get_views: function() {ULS5Vl:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['Views']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.ViewCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'Views'));
            this.get_objectData().get_clientObjectProperties()['Views'] = $v_0;
        }
        return $v_0;
    },
    
    get_userCustomActions: function() {ULS5Vl:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['UserCustomActions']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.UserCustomActionCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'UserCustomActions'));
            this.get_objectData().get_clientObjectProperties()['UserCustomActions'] = $v_0;
        }
        return $v_0;
    },
    
    get_forms: function() {ULS5Vl:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['Forms']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.FormCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'Forms'));
            this.get_objectData().get_clientObjectProperties()['Forms'] = $v_0;
        }
        return $v_0;
    },
    
    get_dataSource: function() {ULS5Vl:;
        this.checkUninitializedProperty('DataSource');
        return ((this.get_objectData().get_properties()['DataSource']));
    },
    
    get_hasExternalDataSource: function() {ULS5Vl:;
        this.checkUninitializedProperty('HasExternalDataSource');
        return ((this.get_objectData().get_properties()['HasExternalDataSource']));
    },
    
    get_workflowAssociations: function() {ULS5Vl:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['WorkflowAssociations']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.Workflow.WorkflowAssociationCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'WorkflowAssociations'));
            this.get_objectData().get_clientObjectProperties()['WorkflowAssociations'] = $v_0;
        }
        return $v_0;
    },
    
    get_created: function() {ULS5Vl:;
        this.checkUninitializedProperty('Created');
        return ((this.get_objectData().get_properties()['Created']));
    },
    
    get_lastItemModifiedDate: function() {ULS5Vl:;
        this.checkUninitializedProperty('LastItemModifiedDate');
        return ((this.get_objectData().get_properties()['LastItemModifiedDate']));
    },
    
    get_lastItemDeletedDate: function() {ULS5Vl:;
        this.checkUninitializedProperty('LastItemDeletedDate');
        return ((this.get_objectData().get_properties()['LastItemDeletedDate']));
    },
    
    get_id: function() {ULS5Vl:;
        this.checkUninitializedProperty('Id');
        return ((this.get_objectData().get_properties()['Id']));
    },
    
    get_description: function() {ULS5Vl:;
        this.checkUninitializedProperty('Description');
        return ((this.get_objectData().get_properties()['Description']));
    },
    set_description: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['Description'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Description', value));
        }
        return value;
    },
    
    get_rootFolder: function() {ULS5Vl:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['RootFolder']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.Folder(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'RootFolder'));
            this.get_objectData().get_clientObjectProperties()['RootFolder'] = $v_0;
        }
        return $v_0;
    },
    
    get_isSiteAssetsLibrary: function() {ULS5Vl:;
        this.checkUninitializedProperty('IsSiteAssetsLibrary');
        return ((this.get_objectData().get_properties()['IsSiteAssetsLibrary']));
    },
    
    get_title: function() {ULS5Vl:;
        this.checkUninitializedProperty('Title');
        return ((this.get_objectData().get_properties()['Title']));
    },
    set_title: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['Title'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Title', value));
        }
        return value;
    },
    
    get_direction: function() {ULS5Vl:;
        this.checkUninitializedProperty('Direction');
        return ((this.get_objectData().get_properties()['Direction']));
    },
    set_direction: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['Direction'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Direction', value));
        }
        return value;
    },
    
    get_schemaXml: function() {ULS5Vl:;
        this.checkUninitializedProperty('SchemaXml');
        return ((this.get_objectData().get_properties()['SchemaXml']));
    },
    
    get_baseType: function() {ULS5Vl:;
        this.checkUninitializedProperty('BaseType');
        return ((this.get_objectData().get_properties()['BaseType']));
    },
    
    get_imageUrl: function() {ULS5Vl:;
        this.checkUninitializedProperty('ImageUrl');
        return ((this.get_objectData().get_properties()['ImageUrl']));
    },
    
    get_itemCount: function() {ULS5Vl:;
        this.checkUninitializedProperty('ItemCount');
        return ((this.get_objectData().get_properties()['ItemCount']));
    },
    
    get_baseTemplate: function() {ULS5Vl:;
        this.checkUninitializedProperty('BaseTemplate');
        return ((this.get_objectData().get_properties()['BaseTemplate']));
    },
    
    get_defaultContentApprovalWorkflowId: function() {ULS5Vl:;
        this.checkUninitializedProperty('DefaultContentApprovalWorkflowId');
        return ((this.get_objectData().get_properties()['DefaultContentApprovalWorkflowId']));
    },
    set_defaultContentApprovalWorkflowId: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['DefaultContentApprovalWorkflowId'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'DefaultContentApprovalWorkflowId', value));
        }
        return value;
    },
    
    get_templateFeatureId: function() {ULS5Vl:;
        this.checkUninitializedProperty('TemplateFeatureId');
        return ((this.get_objectData().get_properties()['TemplateFeatureId']));
    },
    
    get_defaultViewUrl: function() {ULS5Vl:;
        this.checkUninitializedProperty('DefaultViewUrl');
        return ((this.get_objectData().get_properties()['DefaultViewUrl']));
    },
    
    get_defaultEditFormUrl: function() {ULS5Vl:;
        this.checkUninitializedProperty('DefaultEditFormUrl');
        return ((this.get_objectData().get_properties()['DefaultEditFormUrl']));
    },
    set_defaultEditFormUrl: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['DefaultEditFormUrl'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'DefaultEditFormUrl', value));
        }
        return value;
    },
    
    get_defaultNewFormUrl: function() {ULS5Vl:;
        this.checkUninitializedProperty('DefaultNewFormUrl');
        return ((this.get_objectData().get_properties()['DefaultNewFormUrl']));
    },
    set_defaultNewFormUrl: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['DefaultNewFormUrl'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'DefaultNewFormUrl', value));
        }
        return value;
    },
    
    get_defaultDisplayFormUrl: function() {ULS5Vl:;
        this.checkUninitializedProperty('DefaultDisplayFormUrl');
        return ((this.get_objectData().get_properties()['DefaultDisplayFormUrl']));
    },
    set_defaultDisplayFormUrl: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['DefaultDisplayFormUrl'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'DefaultDisplayFormUrl', value));
        }
        return value;
    },
    
    get_enableAttachments: function() {ULS5Vl:;
        this.checkUninitializedProperty('EnableAttachments');
        return ((this.get_objectData().get_properties()['EnableAttachments']));
    },
    set_enableAttachments: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['EnableAttachments'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'EnableAttachments', value));
        }
        return value;
    },
    
    get_serverTemplateCanCreateFolders: function() {ULS5Vl:;
        this.checkUninitializedProperty('ServerTemplateCanCreateFolders');
        return ((this.get_objectData().get_properties()['ServerTemplateCanCreateFolders']));
    },
    
    get_enableFolderCreation: function() {ULS5Vl:;
        this.checkUninitializedProperty('EnableFolderCreation');
        return ((this.get_objectData().get_properties()['EnableFolderCreation']));
    },
    set_enableFolderCreation: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['EnableFolderCreation'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'EnableFolderCreation', value));
        }
        return value;
    },
    
    get_enableModeration: function() {ULS5Vl:;
        this.checkUninitializedProperty('EnableModeration');
        return ((this.get_objectData().get_properties()['EnableModeration']));
    },
    set_enableModeration: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['EnableModeration'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'EnableModeration', value));
        }
        return value;
    },
    
    get_enableVersioning: function() {ULS5Vl:;
        this.checkUninitializedProperty('EnableVersioning');
        return ((this.get_objectData().get_properties()['EnableVersioning']));
    },
    set_enableVersioning: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['EnableVersioning'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'EnableVersioning', value));
        }
        return value;
    },
    
    get_forceCheckout: function() {ULS5Vl:;
        this.checkUninitializedProperty('ForceCheckout');
        return ((this.get_objectData().get_properties()['ForceCheckout']));
    },
    set_forceCheckout: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['ForceCheckout'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'ForceCheckout', value));
        }
        return value;
    },
    
    get_enableMinorVersions: function() {ULS5Vl:;
        this.checkUninitializedProperty('EnableMinorVersions');
        return ((this.get_objectData().get_properties()['EnableMinorVersions']));
    },
    set_enableMinorVersions: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['EnableMinorVersions'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'EnableMinorVersions', value));
        }
        return value;
    },
    
    get_draftVersionVisibility: function() {ULS5Vl:;
        this.checkUninitializedProperty('DraftVersionVisibility');
        return ((this.get_objectData().get_properties()['DraftVersionVisibility']));
    },
    set_draftVersionVisibility: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['DraftVersionVisibility'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'DraftVersionVisibility', value));
        }
        return value;
    },
    
    get_hidden: function() {ULS5Vl:;
        this.checkUninitializedProperty('Hidden');
        return ((this.get_objectData().get_properties()['Hidden']));
    },
    set_hidden: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['Hidden'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Hidden', value));
        }
        return value;
    },
    
    get_isApplicationList: function() {ULS5Vl:;
        this.checkUninitializedProperty('IsApplicationList');
        return ((this.get_objectData().get_properties()['IsApplicationList']));
    },
    set_isApplicationList: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['IsApplicationList'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'IsApplicationList', value));
        }
        return value;
    },
    
    get_isCatalog: function() {ULS5Vl:;
        this.checkUninitializedProperty('IsCatalog');
        return ((this.get_objectData().get_properties()['IsCatalog']));
    },
    
    get_allowContentTypes: function() {ULS5Vl:;
        this.checkUninitializedProperty('AllowContentTypes');
        return ((this.get_objectData().get_properties()['AllowContentTypes']));
    },
    
    get_documentTemplateUrl: function() {ULS5Vl:;
        this.checkUninitializedProperty('DocumentTemplateUrl');
        return ((this.get_objectData().get_properties()['DocumentTemplateUrl']));
    },
    set_documentTemplateUrl: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['DocumentTemplateUrl'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'DocumentTemplateUrl', value));
        }
        return value;
    },
    
    get_contentTypesEnabled: function() {ULS5Vl:;
        this.checkUninitializedProperty('ContentTypesEnabled');
        return ((this.get_objectData().get_properties()['ContentTypesEnabled']));
    },
    set_contentTypesEnabled: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['ContentTypesEnabled'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'ContentTypesEnabled', value));
        }
        return value;
    },
    
    get_multipleDataList: function() {ULS5Vl:;
        this.checkUninitializedProperty('MultipleDataList');
        return ((this.get_objectData().get_properties()['MultipleDataList']));
    },
    set_multipleDataList: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['MultipleDataList'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'MultipleDataList', value));
        }
        return value;
    },
    
    get_onQuickLaunch: function() {ULS5Vl:;
        this.checkUninitializedProperty('OnQuickLaunch');
        return ((this.get_objectData().get_properties()['OnQuickLaunch']));
    },
    set_onQuickLaunch: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['OnQuickLaunch'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'OnQuickLaunch', value));
        }
        return value;
    },
    
    get_browserFileHandling: function() {ULS5Vl:;
        this.checkUninitializedProperty('BrowserFileHandling');
        return ((this.get_objectData().get_properties()['BrowserFileHandling']));
    },
    
    get_noCrawl: function() {ULS5Vl:;
        this.checkUninitializedProperty('NoCrawl');
        return ((this.get_objectData().get_properties()['NoCrawl']));
    },
    set_noCrawl: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['NoCrawl'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'NoCrawl', value));
        }
        return value;
    },
    
    get_validationFormula: function() {ULS5Vl:;
        this.checkUninitializedProperty('ValidationFormula');
        return ((this.get_objectData().get_properties()['ValidationFormula']));
    },
    set_validationFormula: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['ValidationFormula'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'ValidationFormula', value));
        }
        return value;
    },
    
    get_validationMessage: function() {ULS5Vl:;
        this.checkUninitializedProperty('ValidationMessage');
        return ((this.get_objectData().get_properties()['ValidationMessage']));
    },
    set_validationMessage: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['ValidationMessage'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'ValidationMessage', value));
        }
        return value;
    },
    
    get_contentTypes: function() {ULS5Vl:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['ContentTypes']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.ContentTypeCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'ContentTypes'));
            this.get_objectData().get_clientObjectProperties()['ContentTypes'] = $v_0;
        }
        return $v_0;
    },
    
    get_effectiveBasePermissions: function() {ULS5Vl:;
        this.checkUninitializedProperty('EffectiveBasePermissions');
        return ((this.get_objectData().get_properties()['EffectiveBasePermissions']));
    },
    
    initPropertiesFromJson: function(parentNode) {ULS5Vl:;
        SP.List.callBaseMethod(this, 'initPropertiesFromJson', [ parentNode ]);
        var $v_0;
        $v_0 = parentNode.ParentWeb;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_parentWeb().fromJson($v_0);
            delete parentNode.ParentWeb;
        }
        $v_0 = parentNode.ParentWebUrl;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ParentWebUrl'] = ($v_0);
            delete parentNode.ParentWebUrl;
        }
        $v_0 = parentNode.Fields;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_fields().fromJson($v_0);
            delete parentNode.Fields;
        }
        $v_0 = parentNode.Views;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_views().fromJson($v_0);
            delete parentNode.Views;
        }
        $v_0 = parentNode.UserCustomActions;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_userCustomActions().fromJson($v_0);
            delete parentNode.UserCustomActions;
        }
        $v_0 = parentNode.Forms;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_forms().fromJson($v_0);
            delete parentNode.Forms;
        }
        $v_0 = parentNode.DataSource;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['DataSource'] = ((SP.DataConvert.fixupType(this.get_context(), $v_0)));
            delete parentNode.DataSource;
        }
        $v_0 = parentNode.HasExternalDataSource;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['HasExternalDataSource'] = ($v_0);
            delete parentNode.HasExternalDataSource;
        }
        $v_0 = parentNode.WorkflowAssociations;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_workflowAssociations().fromJson($v_0);
            delete parentNode.WorkflowAssociations;
        }
        $v_0 = parentNode.Created;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Created'] = ($v_0);
            delete parentNode.Created;
        }
        $v_0 = parentNode.LastItemModifiedDate;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['LastItemModifiedDate'] = ($v_0);
            delete parentNode.LastItemModifiedDate;
        }
        $v_0 = parentNode.LastItemDeletedDate;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['LastItemDeletedDate'] = ($v_0);
            delete parentNode.LastItemDeletedDate;
        }
        $v_0 = parentNode.Id;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Id'] = ($v_0);
            delete parentNode.Id;
        }
        $v_0 = parentNode.Description;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Description'] = ($v_0);
            delete parentNode.Description;
        }
        $v_0 = parentNode.RootFolder;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_rootFolder().fromJson($v_0);
            delete parentNode.RootFolder;
        }
        $v_0 = parentNode.IsSiteAssetsLibrary;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['IsSiteAssetsLibrary'] = ($v_0);
            delete parentNode.IsSiteAssetsLibrary;
        }
        $v_0 = parentNode.Title;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Title'] = ($v_0);
            delete parentNode.Title;
        }
        $v_0 = parentNode.Direction;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Direction'] = ($v_0);
            delete parentNode.Direction;
        }
        $v_0 = parentNode.SchemaXml;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['SchemaXml'] = ($v_0);
            delete parentNode.SchemaXml;
        }
        $v_0 = parentNode.BaseType;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['BaseType'] = ($v_0);
            delete parentNode.BaseType;
        }
        $v_0 = parentNode.ImageUrl;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ImageUrl'] = ($v_0);
            delete parentNode.ImageUrl;
        }
        $v_0 = parentNode.ItemCount;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ItemCount'] = ($v_0);
            delete parentNode.ItemCount;
        }
        $v_0 = parentNode.BaseTemplate;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['BaseTemplate'] = ($v_0);
            delete parentNode.BaseTemplate;
        }
        $v_0 = parentNode.DefaultContentApprovalWorkflowId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['DefaultContentApprovalWorkflowId'] = ($v_0);
            delete parentNode.DefaultContentApprovalWorkflowId;
        }
        $v_0 = parentNode.TemplateFeatureId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['TemplateFeatureId'] = ($v_0);
            delete parentNode.TemplateFeatureId;
        }
        $v_0 = parentNode.DefaultViewUrl;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['DefaultViewUrl'] = ($v_0);
            delete parentNode.DefaultViewUrl;
        }
        $v_0 = parentNode.DefaultEditFormUrl;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['DefaultEditFormUrl'] = ($v_0);
            delete parentNode.DefaultEditFormUrl;
        }
        $v_0 = parentNode.DefaultNewFormUrl;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['DefaultNewFormUrl'] = ($v_0);
            delete parentNode.DefaultNewFormUrl;
        }
        $v_0 = parentNode.DefaultDisplayFormUrl;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['DefaultDisplayFormUrl'] = ($v_0);
            delete parentNode.DefaultDisplayFormUrl;
        }
        $v_0 = parentNode.EnableAttachments;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['EnableAttachments'] = ($v_0);
            delete parentNode.EnableAttachments;
        }
        $v_0 = parentNode.ServerTemplateCanCreateFolders;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ServerTemplateCanCreateFolders'] = ($v_0);
            delete parentNode.ServerTemplateCanCreateFolders;
        }
        $v_0 = parentNode.EnableFolderCreation;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['EnableFolderCreation'] = ($v_0);
            delete parentNode.EnableFolderCreation;
        }
        $v_0 = parentNode.EnableModeration;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['EnableModeration'] = ($v_0);
            delete parentNode.EnableModeration;
        }
        $v_0 = parentNode.EnableVersioning;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['EnableVersioning'] = ($v_0);
            delete parentNode.EnableVersioning;
        }
        $v_0 = parentNode.ForceCheckout;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ForceCheckout'] = ($v_0);
            delete parentNode.ForceCheckout;
        }
        $v_0 = parentNode.EnableMinorVersions;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['EnableMinorVersions'] = ($v_0);
            delete parentNode.EnableMinorVersions;
        }
        $v_0 = parentNode.DraftVersionVisibility;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['DraftVersionVisibility'] = ($v_0);
            delete parentNode.DraftVersionVisibility;
        }
        $v_0 = parentNode.Hidden;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Hidden'] = ($v_0);
            delete parentNode.Hidden;
        }
        $v_0 = parentNode.IsApplicationList;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['IsApplicationList'] = ($v_0);
            delete parentNode.IsApplicationList;
        }
        $v_0 = parentNode.IsCatalog;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['IsCatalog'] = ($v_0);
            delete parentNode.IsCatalog;
        }
        $v_0 = parentNode.AllowContentTypes;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['AllowContentTypes'] = ($v_0);
            delete parentNode.AllowContentTypes;
        }
        $v_0 = parentNode.DocumentTemplateUrl;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['DocumentTemplateUrl'] = ($v_0);
            delete parentNode.DocumentTemplateUrl;
        }
        $v_0 = parentNode.ContentTypesEnabled;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ContentTypesEnabled'] = ($v_0);
            delete parentNode.ContentTypesEnabled;
        }
        $v_0 = parentNode.MultipleDataList;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['MultipleDataList'] = ($v_0);
            delete parentNode.MultipleDataList;
        }
        $v_0 = parentNode.OnQuickLaunch;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['OnQuickLaunch'] = ($v_0);
            delete parentNode.OnQuickLaunch;
        }
        $v_0 = parentNode.BrowserFileHandling;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['BrowserFileHandling'] = ($v_0);
            delete parentNode.BrowserFileHandling;
        }
        $v_0 = parentNode.NoCrawl;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['NoCrawl'] = ($v_0);
            delete parentNode.NoCrawl;
        }
        $v_0 = parentNode.ValidationFormula;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ValidationFormula'] = ($v_0);
            delete parentNode.ValidationFormula;
        }
        $v_0 = parentNode.ValidationMessage;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ValidationMessage'] = ($v_0);
            delete parentNode.ValidationMessage;
        }
        $v_0 = parentNode.ContentTypes;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_contentTypes().fromJson($v_0);
            delete parentNode.ContentTypes;
        }
        $v_0 = parentNode.EffectiveBasePermissions;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['EffectiveBasePermissions'] = ((SP.DataConvert.fixupType(this.get_context(), $v_0)));
            delete parentNode.EffectiveBasePermissions;
        }
    },
    
    update: function() {ULS5Vl:;
        var $v_0 = new SP.ClientActionInvokeMethod(this, 'Update', null);
        this.get_context().addQuery($v_0);
    },
    
    getView: function(viewGuid) {ULS5Vl:;
        var $v_0;
        var $v_1 = ((this.get_objectData().get_methodReturnObjects()['GetView']));
        if (SP.ScriptUtility.isNullOrUndefined($v_1)) {
            $v_1 = {};
            this.get_objectData().get_methodReturnObjects()['GetView'] = $v_1;
        }
        $v_0 = (($v_1[viewGuid.toString()]));
        if (!SP.ScriptUtility.isNullOrUndefined($v_0)) {
            return $v_0;
        }
        $v_0 = new SP.View(this.get_context(), new SP.ObjectPathMethod(this.get_context(), this.get_path(), 'GetView', [ viewGuid ]));
        $v_1[viewGuid.toString()] = $v_0;
        return $v_0;
    },
    
    deleteObject: function() {ULS5Vl:;
        var $v_0 = new SP.ClientActionInvokeMethod(this, 'DeleteObject', null);
        this.get_context().addQuery($v_0);
        this.removeFromParentCollection();
    },
    
    recycle: function() {ULS5Vl:;
        var $v_0;
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'Recycle', null);
        this.get_context().addQuery($v_1);
        $v_0 = new SP.GuidResult();
        this.get_context().addQueryIdAndResultObject($v_1.get_id(), $v_0);
        this.removeFromParentCollection();
        return $v_0;
    },
    
    getChanges: function(query_) {ULS5Vl:;
        var $v_0;
        $v_0 = new SP.ChangeCollection(this.get_context(), new SP.ObjectPathMethod(this.get_context(), this.get_path(), 'GetChanges', [ query_ ]));
        return $v_0;
    },
    
    addItem: function(parameters) {ULS5Vl:;
        var $v_0;
        $v_0 = new SP.ListItem(this.get_context(), new SP.ObjectPathMethod(this.get_context(), this.get_path(), 'AddItem', [ parameters ]));
        $v_0.$7(parameters);
        return $v_0;
    },
    
    getItems: function(query_) {ULS5Vl:;
        var $v_0;
        $v_0 = new SP.ListItemCollection(this.get_context(), new SP.ObjectPathMethod(this.get_context(), this.get_path(), 'GetItems', [ query_ ]));
        return $v_0;
    },
    
    $3o: function($p0) {
        var $v_0;
        var $v_1 = ((this.get_objectData().get_methodReturnObjects()['GetItemByStringId']));
        if (SP.ScriptUtility.isNullOrUndefined($v_1)) {
            $v_1 = {};
            this.get_objectData().get_methodReturnObjects()['GetItemByStringId'] = $v_1;
        }
        $v_0 = (($v_1[$p0]));
        if (!SP.ScriptUtility.isNullOrUndefined($v_0)) {
            return $v_0;
        }
        $v_0 = new SP.ListItem(this.get_context(), new SP.ObjectPathMethod(this.get_context(), this.get_path(), 'GetItemByStringId', [ $p0 ]));
        $v_1[$p0] = $v_0;
        return $v_0;
    },
    
    getRelatedFields: function() {ULS5Vl:;
        var $v_0;
        $v_0 = new SP.RelatedFieldCollection(this.get_context(), new SP.ObjectPathMethod(this.get_context(), this.get_path(), 'GetRelatedFields', null));
        return $v_0;
    },
    
    getRelatedFieldsExtendedData: function() {ULS5Vl:;
        var $v_0;
        $v_0 = new SP.RelatedFieldExtendedDataCollection(this.get_context(), new SP.ObjectPathMethod(this.get_context(), this.get_path(), 'GetRelatedFieldsExtendedData', null));
        return $v_0;
    }
}


SP.ListPropertyNames = function() {
}


SP.ListObjectPropertyNames = function() {
}


SP.ListCollection = function(Context, ObjectPath) {ULS5Vl:;
    SP.ListCollection.initializeBase(this, [ Context, ObjectPath ]);
}
SP.ListCollection.prototype = {
    
    itemAt: function(index) {ULS5Vl:;
        return this.getItemAtIndex(index);
    },
    
    get_item: function(index) {ULS5Vl:;
        return this.getItemAtIndex(index);
    },
    
    getByTitle: function(strListName) {ULS5Vl:;
        var $v_0;
        var $v_1 = ((this.get_objectData().get_methodReturnObjects()['GetByTitle']));
        if (SP.ScriptUtility.isNullOrUndefined($v_1)) {
            $v_1 = {};
            this.get_objectData().get_methodReturnObjects()['GetByTitle'] = $v_1;
        }
        $v_0 = (($v_1[strListName.toUpperCase()]));
        if (!SP.ScriptUtility.isNullOrUndefined($v_0)) {
            return $v_0;
        }
        $v_0 = new SP.List(this.get_context(), new SP.ObjectPathMethod(this.get_context(), this.get_path(), 'GetByTitle', [ strListName ]));
        $v_1[strListName.toUpperCase()] = $v_0;
        var $v_2 = new SP.ObjectIdentityQuery($v_0.get_path());
        this.get_context().addQueryIdAndResultObject($v_2.get_id(), $v_0);
        this.get_context().addQuery($v_2);
        return $v_0;
    },
    
    getById: function(uniqueId) {ULS5Vl:;
        var $v_0;
        var $v_1 = ((this.get_objectData().get_methodReturnObjects()['GetById']));
        if (SP.ScriptUtility.isNullOrUndefined($v_1)) {
            $v_1 = {};
            this.get_objectData().get_methodReturnObjects()['GetById'] = $v_1;
        }
        $v_0 = (($v_1[uniqueId.toString()]));
        if (!SP.ScriptUtility.isNullOrUndefined($v_0)) {
            return $v_0;
        }
        $v_0 = new SP.List(this.get_context(), new SP.ObjectPathMethod(this.get_context(), this.get_path(), 'GetById', [ uniqueId ]));
        $v_1[uniqueId.toString()] = $v_0;
        return $v_0;
    },
    
    add: function(parameters) {ULS5Vl:;
        var $v_0;
        $v_0 = new SP.List(this.get_context(), new SP.ObjectPathMethod(this.get_context(), this.get_path(), 'Add', [ parameters ]));
        $v_0.get_path().setPendingReplace();
        var $v_1 = new SP.ObjectIdentityQuery($v_0.get_path());
        this.get_context().addQueryIdAndResultObject($v_1.get_id(), $v_0);
        this.get_context().addQuery($v_1);
        this.addChild($v_0);
        $v_0.$7(parameters);
        return $v_0;
    },
    
    ensureSitePagesLibrary: function() {ULS5Vl:;
        var $v_0;
        $v_0 = new SP.List(this.get_context(), new SP.ObjectPathMethod(this.get_context(), this.get_path(), 'EnsureSitePagesLibrary', null));
        $v_0.get_path().setPendingReplace();
        var $v_1 = new SP.ObjectIdentityQuery($v_0.get_path());
        this.get_context().addQueryIdAndResultObject($v_1.get_id(), $v_0);
        this.get_context().addQuery($v_1);
        return $v_0;
    },
    
    ensureSiteAssetsLibrary: function() {ULS5Vl:;
        var $v_0;
        $v_0 = new SP.List(this.get_context(), new SP.ObjectPathMethod(this.get_context(), this.get_path(), 'EnsureSiteAssetsLibrary', null));
        $v_0.get_path().setPendingReplace();
        var $v_1 = new SP.ObjectIdentityQuery($v_0.get_path());
        this.get_context().addQueryIdAndResultObject($v_1.get_id(), $v_0);
        this.get_context().addQuery($v_1);
        return $v_0;
    }
}


SP.ListCreationInformation = function() {ULS5Vl:;
    SP.ListCreationInformation.initializeBase(this);
}
SP.ListCreationInformation.prototype = {
    $1_1: null,
    $2_1: null,
    $6_1: null,
    $1J_1: null,
    $2I_1: 0,
    $1x_1: 0,
    $1v_1: null,
    $2D_1: 0,
    $1w_1: null,
    
    get_title: function() {ULS5Vl:;
        return this.$1_1;
    },
    set_title: function(value) {ULS5Vl:;
        this.$1_1 = value;
        return value;
    },
    
    get_description: function() {ULS5Vl:;
        return this.$2_1;
    },
    set_description: function(value) {ULS5Vl:;
        this.$2_1 = value;
        return value;
    },
    
    get_url: function() {ULS5Vl:;
        return this.$6_1;
    },
    set_url: function(value) {ULS5Vl:;
        this.$6_1 = value;
        return value;
    },
    
    get_templateFeatureId: function() {ULS5Vl:;
        return this.$1J_1;
    },
    set_templateFeatureId: function(value) {ULS5Vl:;
        this.$1J_1 = value;
        return value;
    },
    
    get_templateType: function() {ULS5Vl:;
        return this.$2I_1;
    },
    set_templateType: function(value) {ULS5Vl:;
        this.$2I_1 = value;
        return value;
    },
    
    get_documentTemplateType: function() {ULS5Vl:;
        return this.$1x_1;
    },
    set_documentTemplateType: function(value) {ULS5Vl:;
        this.$1x_1 = value;
        return value;
    },
    
    get_customSchemaXml: function() {ULS5Vl:;
        return this.$1v_1;
    },
    set_customSchemaXml: function(value) {ULS5Vl:;
        this.$1v_1 = value;
        return value;
    },
    
    get_quickLaunchOption: function() {ULS5Vl:;
        return this.$2D_1;
    },
    set_quickLaunchOption: function(value) {ULS5Vl:;
        this.$2D_1 = value;
        return value;
    },
    
    get_dataSourceProperties: function() {ULS5Vl:;
        return this.$1w_1;
    },
    set_dataSourceProperties: function(value) {ULS5Vl:;
        this.$1w_1 = value;
        return value;
    },
    
    get_typeId: function() {ULS5Vl:;
        return '{e247b7fc-095e-4ea4-a4c9-c5d373723d8c}';
    },
    
    writeToXml: function(writer, serializationContext) {ULS5Vl:;
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = [ 'Title', 'Description', 'Url', 'TemplateFeatureId', 'TemplateType', 'DocumentTemplateType', 'CustomSchemaXml', 'QuickLaunchOption', 'DataSourceProperties' ];
        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
    },
    
    initPropertiesFromJson: function(parentNode) {ULS5Vl:;
        var $v_0;
        $v_0 = parentNode.Title;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1_1 = ($v_0);
            delete parentNode.Title;
        }
        $v_0 = parentNode.Description;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$2_1 = ($v_0);
            delete parentNode.Description;
        }
        $v_0 = parentNode.Url;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$6_1 = ($v_0);
            delete parentNode.Url;
        }
        $v_0 = parentNode.TemplateFeatureId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1J_1 = ($v_0);
            delete parentNode.TemplateFeatureId;
        }
        $v_0 = parentNode.TemplateType;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$2I_1 = ($v_0);
            delete parentNode.TemplateType;
        }
        $v_0 = parentNode.DocumentTemplateType;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1x_1 = ($v_0);
            delete parentNode.DocumentTemplateType;
        }
        $v_0 = parentNode.CustomSchemaXml;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1v_1 = ($v_0);
            delete parentNode.CustomSchemaXml;
        }
        $v_0 = parentNode.QuickLaunchOption;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$2D_1 = ($v_0);
            delete parentNode.QuickLaunchOption;
        }
        $v_0 = parentNode.DataSourceProperties;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1w_1 = ($v_0);
            delete parentNode.DataSourceProperties;
        }
    }
}


SP.ListDataSource = function() {ULS5Vl:;
    SP.ListDataSource.initializeBase(this);
}
SP.ListDataSource.prototype = {
    $3J_1: null,
    
    get_properties: function() {ULS5Vl:;
        return this.$3J_1;
    },
    
    get_typeId: function() {ULS5Vl:;
        return '{06bfe4a5-1516-4b55-a6d7-ecbe3ff7a3c8}';
    },
    
    writeToXml: function(writer, serializationContext) {ULS5Vl:;
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = [ 'Properties' ];
        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
    },
    
    initPropertiesFromJson: function(parentNode) {ULS5Vl:;
        var $v_0;
        $v_0 = parentNode.Properties;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$3J_1 = ($v_0);
            delete parentNode.Properties;
        }
    }
}


SP.ListDataValidationExceptionValue = function() {ULS5Vl:;
    SP.ListDataValidationExceptionValue.initializeBase(this);
}
SP.ListDataValidationExceptionValue.prototype = {
    $1z_1: null,
    $3C_1: null,
    
    get_fieldFailures: function() {ULS5Vl:;
        return this.$1z_1;
    },
    
    get_itemFailure: function() {ULS5Vl:;
        return this.$3C_1;
    },
    
    get_typeId: function() {ULS5Vl:;
        return '{356fe248-721a-4adf-af96-20822bc5476e}';
    },
    
    writeToXml: function(writer, serializationContext) {ULS5Vl:;
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = [ 'FieldFailures', 'ItemFailure' ];
        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
    },
    
    initPropertiesFromJson: function(parentNode) {ULS5Vl:;
        var $v_0;
        $v_0 = parentNode.FieldFailures;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1z_1 = (([]));
            SP.DataConvert.populateArray(null, ((this.$1z_1)), ($v_0));
            delete parentNode.FieldFailures;
        }
        $v_0 = parentNode.ItemFailure;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$3C_1 = ((SP.DataConvert.fixupType(null, $v_0)));
            delete parentNode.ItemFailure;
        }
    }
}


SP.ListDataValidationFailure = function() {ULS5Vl:;
    SP.ListDataValidationFailure.initializeBase(this);
}
SP.ListDataValidationFailure.prototype = {
    $3Q_1: 0,
    $3K_1: 0,
    $5_1: null,
    $y_1: null,
    $3E_1: null,
    
    get_validationType: function() {ULS5Vl:;
        return this.$3Q_1;
    },
    
    get_reason: function() {ULS5Vl:;
        return this.$3K_1;
    },
    
    get_name: function() {ULS5Vl:;
        return this.$5_1;
    },
    
    get_displayName: function() {ULS5Vl:;
        return this.$y_1;
    },
    
    get_message: function() {ULS5Vl:;
        return this.$3E_1;
    },
    
    get_typeId: function() {ULS5Vl:;
        return '{6e0bc783-53a2-4506-827f-135040524794}';
    },
    
    writeToXml: function(writer, serializationContext) {ULS5Vl:;
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = [ 'ValidationType', 'Reason', 'Name', 'DisplayName', 'Message' ];
        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
    },
    
    initPropertiesFromJson: function(parentNode) {ULS5Vl:;
        var $v_0;
        $v_0 = parentNode.ValidationType;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$3Q_1 = ($v_0);
            delete parentNode.ValidationType;
        }
        $v_0 = parentNode.Reason;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$3K_1 = ($v_0);
            delete parentNode.Reason;
        }
        $v_0 = parentNode.Name;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$5_1 = ($v_0);
            delete parentNode.Name;
        }
        $v_0 = parentNode.DisplayName;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$y_1 = ($v_0);
            delete parentNode.DisplayName;
        }
        $v_0 = parentNode.Message;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$3E_1 = ($v_0);
            delete parentNode.Message;
        }
    }
}


SP.ListItem = function(Context, ObjectPath) {ULS5Vl:;
    SP.ListItem.initializeBase(this, [ Context, ObjectPath ]);
}
SP.ListItem.prototype = {
    
    get_fieldValues: function() {ULS5Vl:;
        var $v_0 = this.get_objectData().get_methodReturnObjects()[SP.ClientConstants.FieldValuesMethodName];
        if (SP.ScriptUtility.isNullOrUndefined($v_0)) {
            $v_0 = {};
            this.get_objectData().get_methodReturnObjects()[SP.ClientConstants.FieldValuesMethodName] = $v_0;
        }
        return $v_0;
    },
    
    get_item: function(fieldName) {ULS5Vl:;
        return this.$1m(fieldName);
    },
    set_item: function(fieldName, value) {ULS5Vl:;
        this.$3Z(fieldName, value);
        return value;
    },
    
    $7: function($p0) {
        if ($p0) {
            this.get_objectData().get_properties()['FileSystemObjectType'] = $p0.$1K_1;
            this.get_objectData().get_properties()['Id'] = -1;
        }
    },
    
    get_parentList: function() {ULS5Vl:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['ParentList']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.List(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'ParentList'));
            this.get_objectData().get_clientObjectProperties()['ParentList'] = $v_0;
        }
        return $v_0;
    },
    
    get_id: function() {ULS5Vl:;
        this.checkUninitializedProperty('Id');
        return ((this.get_objectData().get_properties()['Id']));
    },
    
    get_fieldValuesAsHtml: function() {ULS5Vl:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['FieldValuesAsHtml']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.FieldStringValues(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'FieldValuesAsHtml'));
            this.get_objectData().get_clientObjectProperties()['FieldValuesAsHtml'] = $v_0;
        }
        return $v_0;
    },
    
    get_fieldValuesAsText: function() {ULS5Vl:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['FieldValuesAsText']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.FieldStringValues(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'FieldValuesAsText'));
            this.get_objectData().get_clientObjectProperties()['FieldValuesAsText'] = $v_0;
        }
        return $v_0;
    },
    
    get_fieldValuesForEdit: function() {ULS5Vl:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['FieldValuesForEdit']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.FieldStringValues(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'FieldValuesForEdit'));
            this.get_objectData().get_clientObjectProperties()['FieldValuesForEdit'] = $v_0;
        }
        return $v_0;
    },
    
    get_displayName: function() {ULS5Vl:;
        this.checkUninitializedProperty('DisplayName');
        return ((this.get_objectData().get_properties()['DisplayName']));
    },
    
    get_file: function() {ULS5Vl:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['File']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.File(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'File'));
            this.get_objectData().get_clientObjectProperties()['File'] = $v_0;
        }
        return $v_0;
    },
    
    get_fileSystemObjectType: function() {ULS5Vl:;
        this.checkUninitializedProperty('FileSystemObjectType');
        return ((this.get_objectData().get_properties()['FileSystemObjectType']));
    },
    
    get_effectiveBasePermissions: function() {ULS5Vl:;
        this.checkUninitializedProperty('EffectiveBasePermissions');
        return ((this.get_objectData().get_properties()['EffectiveBasePermissions']));
    },
    
    get_contentType: function() {ULS5Vl:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['ContentType']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.ContentType(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'ContentType'));
            this.get_objectData().get_clientObjectProperties()['ContentType'] = $v_0;
        }
        return $v_0;
    },
    
    initNonPropertiesFromJson: function(parentNode) {ULS5Vl:;
        SP.DataConvert.populateDictionaryFromObject(this.get_fieldValues(), parentNode);
        SP.DataConvert.fixupTypes(this.get_context(), this.get_fieldValues());
    },
    
    initPropertiesFromJson: function(parentNode) {ULS5Vl:;
        SP.ListItem.callBaseMethod(this, 'initPropertiesFromJson', [ parentNode ]);
        var $v_0;
        $v_0 = parentNode.ParentList;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_parentList().fromJson($v_0);
            delete parentNode.ParentList;
        }
        $v_0 = parentNode.Id;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Id'] = ($v_0);
            delete parentNode.Id;
        }
        $v_0 = parentNode.FieldValuesAsHtml;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_fieldValuesAsHtml().fromJson($v_0);
            delete parentNode.FieldValuesAsHtml;
        }
        $v_0 = parentNode.FieldValuesAsText;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_fieldValuesAsText().fromJson($v_0);
            delete parentNode.FieldValuesAsText;
        }
        $v_0 = parentNode.FieldValuesForEdit;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_fieldValuesForEdit().fromJson($v_0);
            delete parentNode.FieldValuesForEdit;
        }
        $v_0 = parentNode.DisplayName;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['DisplayName'] = ($v_0);
            delete parentNode.DisplayName;
        }
        $v_0 = parentNode.File;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_file().fromJson($v_0);
            delete parentNode.File;
        }
        $v_0 = parentNode.FileSystemObjectType;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['FileSystemObjectType'] = ($v_0);
            delete parentNode.FileSystemObjectType;
        }
        $v_0 = parentNode.EffectiveBasePermissions;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['EffectiveBasePermissions'] = ((SP.DataConvert.fixupType(this.get_context(), $v_0)));
            delete parentNode.EffectiveBasePermissions;
        }
        $v_0 = parentNode.ContentType;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_contentType().fromJson($v_0);
            delete parentNode.ContentType;
        }
    },
    
    $1m: function($p0) {
        var $v_0 = this.get_fieldValues()[$p0];
        if (SP.ScriptUtility.isUndefined($v_0)) {
            throw Error.create(SP.Res.propertyHasNotBeenInitialized);
        }
        return $v_0;
    },
    
    refreshLoad: function() {ULS5Vl:;
        SP.ListItem.callBaseMethod(this, 'refreshLoad');
        this.loadExpandoFields();
    },
    
    loadExpandoFields: function() {ULS5Vl:;
        var $$dict_1_0 = this.get_fieldValues();
        for (var $$key_1_1 in $$dict_1_0) {
            var $v_0 = { key: $$key_1_1, value: $$dict_1_0[$$key_1_1] };
            this.retrieve($v_0.key);
        }
    },
    
    $3Z: function($p0, $p1) {
        this.get_fieldValues()[$p0] = $p1;
        var $v_0 = new SP.ClientActionInvokeMethod(this, 'SetFieldValue', [ $p0, $p1 ]);
        if ((this.get_context())) {
            this.get_context().addQuery($v_0);
        }
    },
    
    parseAndSetFieldValue: function(fieldName, value_) {ULS5Vl:;
        this.get_fieldValues()[fieldName] = value_;
        var $v_0 = new SP.ClientActionInvokeMethod(this, 'ParseAndSetFieldValue', [ fieldName, value_ ]);
        if ((this.get_context())) {
            this.get_context().addQuery($v_0);
        }
    },
    
    update: function() {ULS5Vl:;
        var $v_0 = new SP.ClientActionInvokeMethod(this, 'Update', null);
        this.get_context().addQuery($v_0);
        this.refreshLoad();
    },
    
    deleteObject: function() {ULS5Vl:;
        var $v_0 = new SP.ClientActionInvokeMethod(this, 'DeleteObject', null);
        this.get_context().addQuery($v_0);
        this.removeFromParentCollection();
    },
    
    recycle: function() {ULS5Vl:;
        var $v_0;
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'Recycle', null);
        this.get_context().addQuery($v_1);
        $v_0 = new SP.GuidResult();
        this.get_context().addQueryIdAndResultObject($v_1.get_id(), $v_0);
        this.removeFromParentCollection();
        return $v_0;
    }
}


SP.ListItemPropertyNames = function() {
}


SP.ListItemObjectPropertyNames = function() {
}


SP.ListItemCollection = function(Context, ObjectPath) {ULS5Vl:;
    SP.ListItemCollection.initializeBase(this, [ Context, ObjectPath ]);
}
SP.ListItemCollection.prototype = {
    
    itemAt: function(index) {ULS5Vl:;
        return this.getItemAtIndex(index);
    },
    
    get_item: function(index) {ULS5Vl:;
        return this.getItemAtIndex(index);
    },
    
    getById: function(id) {ULS5Vl:;
        if (typeof(id) === 'string') {
            return this.$3m(id.toString());
        }
        else {
            id = parseInt(id.toString());
            var $v_0;
            var $v_1 = ((this.get_objectData().get_methodReturnObjects()['GetById']));
            if (SP.ScriptUtility.isNullOrUndefined($v_1)) {
                $v_1 = [];
                this.get_objectData().get_methodReturnObjects()['GetById'] = $v_1;
            }
            $v_0 = (($v_1[id]));
            if (!SP.ScriptUtility.isNullOrUndefined($v_0)) {
                return $v_0;
            }
            $v_0 = new SP.ListItem(this.get_context(), new SP.ObjectPathMethod(this.get_context(), this.get_path(), 'GetById', [ id ]));
            $v_1[id] = $v_0;
            return $v_0;
        }
    },
    
    get_listItemCollectionPosition: function() {ULS5Vl:;
        this.checkUninitializedProperty('ListItemCollectionPosition');
        return ((this.get_objectData().get_properties()['ListItemCollectionPosition']));
    },
    
    initPropertiesFromJson: function(parentNode) {ULS5Vl:;
        SP.ListItemCollection.callBaseMethod(this, 'initPropertiesFromJson', [ parentNode ]);
        var $v_0;
        $v_0 = parentNode.ListItemCollectionPosition;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ListItemCollectionPosition'] = ((SP.DataConvert.fixupType(this.get_context(), $v_0)));
            delete parentNode.ListItemCollectionPosition;
        }
    },
    
    $3m: function($p0) {
        var $v_0;
        var $v_1 = ((this.get_objectData().get_methodReturnObjects()['GetByStringId']));
        if (SP.ScriptUtility.isNullOrUndefined($v_1)) {
            $v_1 = {};
            this.get_objectData().get_methodReturnObjects()['GetByStringId'] = $v_1;
        }
        $v_0 = (($v_1[$p0]));
        if (!SP.ScriptUtility.isNullOrUndefined($v_0)) {
            return $v_0;
        }
        $v_0 = new SP.ListItem(this.get_context(), new SP.ObjectPathMethod(this.get_context(), this.get_path(), 'GetByStringId', [ $p0 ]));
        $v_1[$p0] = $v_0;
        return $v_0;
    }
}


SP.ListItemCollectionPropertyNames = function() {
}


SP.ListItemCollectionPosition = function() {ULS5Vl:;
    SP.ListItemCollectionPosition.initializeBase(this);
}
SP.ListItemCollectionPosition.prototype = {
    $27_1: null,
    
    get_pagingInfo: function() {ULS5Vl:;
        return this.$27_1;
    },
    set_pagingInfo: function(value) {ULS5Vl:;
        this.$27_1 = value;
        return value;
    },
    
    get_typeId: function() {ULS5Vl:;
        return '{922354eb-c56a-4d88-ad59-67496854efe1}';
    },
    
    writeToXml: function(writer, serializationContext) {ULS5Vl:;
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = [ 'PagingInfo' ];
        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
    },
    
    initPropertiesFromJson: function(parentNode) {ULS5Vl:;
        var $v_0;
        $v_0 = parentNode.PagingInfo;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$27_1 = ($v_0);
            delete parentNode.PagingInfo;
        }
    }
}


SP.ListItemCreationInformation = function() {ULS5Vl:;
    SP.ListItemCreationInformation.initializeBase(this);
}
SP.ListItemCreationInformation.prototype = {
    $21_1: null,
    $1K_1: 0,
    $25_1: null,
    
    get_folderUrl: function() {ULS5Vl:;
        return this.$21_1;
    },
    set_folderUrl: function(value) {ULS5Vl:;
        this.$21_1 = value;
        return value;
    },
    
    get_underlyingObjectType: function() {ULS5Vl:;
        return this.$1K_1;
    },
    set_underlyingObjectType: function(value) {ULS5Vl:;
        this.$1K_1 = value;
        return value;
    },
    
    get_leafName: function() {ULS5Vl:;
        return this.$25_1;
    },
    set_leafName: function(value) {ULS5Vl:;
        this.$25_1 = value;
        return value;
    },
    
    get_typeId: function() {ULS5Vl:;
        return '{54cdbee5-0897-44ac-829f-411557fa11be}';
    },
    
    writeToXml: function(writer, serializationContext) {ULS5Vl:;
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = [ 'FolderUrl', 'UnderlyingObjectType', 'LeafName' ];
        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
    },
    
    initPropertiesFromJson: function(parentNode) {ULS5Vl:;
        var $v_0;
        $v_0 = parentNode.FolderUrl;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$21_1 = ($v_0);
            delete parentNode.FolderUrl;
        }
        $v_0 = parentNode.UnderlyingObjectType;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1K_1 = ($v_0);
            delete parentNode.UnderlyingObjectType;
        }
        $v_0 = parentNode.LeafName;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$25_1 = ($v_0);
            delete parentNode.LeafName;
        }
    }
}


SP.ListTemplate = function(Context, ObjectPath) {ULS5Vl:;
    SP.ListTemplate.initializeBase(this, [ Context, ObjectPath ]);
}
SP.ListTemplate.prototype = {
    
    get_name: function() {ULS5Vl:;
        this.checkUninitializedProperty('Name');
        return ((this.get_objectData().get_properties()['Name']));
    },
    
    get_internalName: function() {ULS5Vl:;
        this.checkUninitializedProperty('InternalName');
        return ((this.get_objectData().get_properties()['InternalName']));
    },
    
    get_description: function() {ULS5Vl:;
        this.checkUninitializedProperty('Description');
        return ((this.get_objectData().get_properties()['Description']));
    },
    
    get_baseType: function() {ULS5Vl:;
        this.checkUninitializedProperty('BaseType');
        return ((this.get_objectData().get_properties()['BaseType']));
    },
    
    get_featureId: function() {ULS5Vl:;
        this.checkUninitializedProperty('FeatureId');
        return ((this.get_objectData().get_properties()['FeatureId']));
    },
    
    get_listTemplateTypeKind: function() {ULS5Vl:;
        this.checkUninitializedProperty('ListTemplateTypeKind');
        return ((this.get_objectData().get_properties()['ListTemplateTypeKind']));
    },
    
    get_imageUrl: function() {ULS5Vl:;
        this.checkUninitializedProperty('ImageUrl');
        return ((this.get_objectData().get_properties()['ImageUrl']));
    },
    
    get_hidden: function() {ULS5Vl:;
        this.checkUninitializedProperty('Hidden');
        return ((this.get_objectData().get_properties()['Hidden']));
    },
    
    get_unique: function() {ULS5Vl:;
        this.checkUninitializedProperty('Unique');
        return ((this.get_objectData().get_properties()['Unique']));
    },
    
    get_onQuickLaunch: function() {ULS5Vl:;
        this.checkUninitializedProperty('OnQuickLaunch');
        return ((this.get_objectData().get_properties()['OnQuickLaunch']));
    },
    
    get_allowsFolderCreation: function() {ULS5Vl:;
        this.checkUninitializedProperty('AllowsFolderCreation');
        return ((this.get_objectData().get_properties()['AllowsFolderCreation']));
    },
    
    get_isCustomTemplate: function() {ULS5Vl:;
        this.checkUninitializedProperty('IsCustomTemplate');
        return ((this.get_objectData().get_properties()['IsCustomTemplate']));
    },
    
    initPropertiesFromJson: function(parentNode) {ULS5Vl:;
        SP.ListTemplate.callBaseMethod(this, 'initPropertiesFromJson', [ parentNode ]);
        var $v_0;
        $v_0 = parentNode.Name;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Name'] = ($v_0);
            delete parentNode.Name;
        }
        $v_0 = parentNode.InternalName;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['InternalName'] = ($v_0);
            delete parentNode.InternalName;
        }
        $v_0 = parentNode.Description;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Description'] = ($v_0);
            delete parentNode.Description;
        }
        $v_0 = parentNode.BaseType;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['BaseType'] = ($v_0);
            delete parentNode.BaseType;
        }
        $v_0 = parentNode.FeatureId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['FeatureId'] = ($v_0);
            delete parentNode.FeatureId;
        }
        $v_0 = parentNode.ListTemplateTypeKind;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ListTemplateTypeKind'] = ($v_0);
            delete parentNode.ListTemplateTypeKind;
        }
        $v_0 = parentNode.ImageUrl;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ImageUrl'] = ($v_0);
            delete parentNode.ImageUrl;
        }
        $v_0 = parentNode.Hidden;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Hidden'] = ($v_0);
            delete parentNode.Hidden;
        }
        $v_0 = parentNode.Unique;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Unique'] = ($v_0);
            delete parentNode.Unique;
        }
        $v_0 = parentNode.OnQuickLaunch;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['OnQuickLaunch'] = ($v_0);
            delete parentNode.OnQuickLaunch;
        }
        $v_0 = parentNode.AllowsFolderCreation;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['AllowsFolderCreation'] = ($v_0);
            delete parentNode.AllowsFolderCreation;
        }
        $v_0 = parentNode.IsCustomTemplate;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['IsCustomTemplate'] = ($v_0);
            delete parentNode.IsCustomTemplate;
        }
    }
}


SP.ListTemplatePropertyNames = function() {
}


SP.ListTemplateCollection = function(Context, ObjectPath) {ULS5Vl:;
    SP.ListTemplateCollection.initializeBase(this, [ Context, ObjectPath ]);
}
SP.ListTemplateCollection.prototype = {
    
    itemAt: function(index) {ULS5Vl:;
        return this.getItemAtIndex(index);
    },
    
    get_item: function(index) {ULS5Vl:;
        return this.getItemAtIndex(index);
    }
}


SP.Navigation = function(Context, ObjectPath) {ULS5Vl:;
    SP.Navigation.initializeBase(this, [ Context, ObjectPath ]);
}
SP.Navigation.prototype = {
    
    get_topNavigationBar: function() {ULS5Vl:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['TopNavigationBar']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.NavigationNodeCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'TopNavigationBar'));
            this.get_objectData().get_clientObjectProperties()['TopNavigationBar'] = $v_0;
        }
        return $v_0;
    },
    
    get_quickLaunch: function() {ULS5Vl:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['QuickLaunch']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.NavigationNodeCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'QuickLaunch'));
            this.get_objectData().get_clientObjectProperties()['QuickLaunch'] = $v_0;
        }
        return $v_0;
    },
    
    get_useShared: function() {ULS5Vl:;
        this.checkUninitializedProperty('UseShared');
        return ((this.get_objectData().get_properties()['UseShared']));
    },
    set_useShared: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['UseShared'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'UseShared', value));
        }
        return value;
    },
    
    initPropertiesFromJson: function(parentNode) {ULS5Vl:;
        SP.Navigation.callBaseMethod(this, 'initPropertiesFromJson', [ parentNode ]);
        var $v_0;
        $v_0 = parentNode.TopNavigationBar;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_topNavigationBar().fromJson($v_0);
            delete parentNode.TopNavigationBar;
        }
        $v_0 = parentNode.QuickLaunch;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_quickLaunch().fromJson($v_0);
            delete parentNode.QuickLaunch;
        }
        $v_0 = parentNode.UseShared;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['UseShared'] = ($v_0);
            delete parentNode.UseShared;
        }
    }
}


SP.NavigationPropertyNames = function() {
}


SP.NavigationObjectPropertyNames = function() {
}


SP.NavigationNode = function(Context, ObjectPath) {ULS5Vl:;
    SP.NavigationNode.initializeBase(this, [ Context, ObjectPath ]);
}
SP.NavigationNode.prototype = {
    
    $7: function($p0) {
        if ($p0) {
            this.get_objectData().get_properties()['Title'] = $p0.$1_1;
            this.get_objectData().get_properties()['Url'] = $p0.$6_1;
        }
    },
    
    get_title: function() {ULS5Vl:;
        this.checkUninitializedProperty('Title');
        return ((this.get_objectData().get_properties()['Title']));
    },
    set_title: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['Title'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Title', value));
        }
        return value;
    },
    
    get_id: function() {ULS5Vl:;
        this.checkUninitializedProperty('Id');
        return ((this.get_objectData().get_properties()['Id']));
    },
    
    get_url: function() {ULS5Vl:;
        this.checkUninitializedProperty('Url');
        return ((this.get_objectData().get_properties()['Url']));
    },
    set_url: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['Url'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Url', value));
        }
        return value;
    },
    
    get_children: function() {ULS5Vl:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['Children']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.NavigationNodeCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'Children'));
            this.get_objectData().get_clientObjectProperties()['Children'] = $v_0;
        }
        return $v_0;
    },
    
    initPropertiesFromJson: function(parentNode) {ULS5Vl:;
        SP.NavigationNode.callBaseMethod(this, 'initPropertiesFromJson', [ parentNode ]);
        var $v_0;
        $v_0 = parentNode.Title;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Title'] = ($v_0);
            delete parentNode.Title;
        }
        $v_0 = parentNode.Id;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Id'] = ($v_0);
            delete parentNode.Id;
        }
        $v_0 = parentNode.Url;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Url'] = ($v_0);
            delete parentNode.Url;
        }
        $v_0 = parentNode.Children;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_children().fromJson($v_0);
            delete parentNode.Children;
        }
    },
    
    update: function() {ULS5Vl:;
        var $v_0 = new SP.ClientActionInvokeMethod(this, 'Update', null);
        this.get_context().addQuery($v_0);
        this.refreshLoad();
    },
    
    deleteObject: function() {ULS5Vl:;
        var $v_0 = new SP.ClientActionInvokeMethod(this, 'DeleteObject', null);
        this.get_context().addQuery($v_0);
        this.removeFromParentCollection();
    }
}


SP.NavigationNodePropertyNames = function() {
}


SP.NavigationNodeObjectPropertyNames = function() {
}


SP.NavigationNodeCollection = function(Context, ObjectPath) {ULS5Vl:;
    SP.NavigationNodeCollection.initializeBase(this, [ Context, ObjectPath ]);
}
SP.NavigationNodeCollection.prototype = {
    
    itemAt: function(index) {ULS5Vl:;
        return this.getItemAtIndex(index);
    },
    
    get_item: function(index) {ULS5Vl:;
        return this.getItemAtIndex(index);
    },
    
    add: function(parameters) {ULS5Vl:;
        var $v_0;
        $v_0 = new SP.NavigationNode(this.get_context(), new SP.ObjectPathMethod(this.get_context(), this.get_path(), 'Add', [ parameters ]));
        $v_0.get_path().setPendingReplace();
        var $v_1 = new SP.ObjectIdentityQuery($v_0.get_path());
        this.get_context().addQueryIdAndResultObject($v_1.get_id(), $v_0);
        this.get_context().addQuery($v_1);
        this.addChild($v_0);
        $v_0.$7(parameters);
        return $v_0;
    }
}


SP.NavigationNodeCreationInformation = function() {ULS5Vl:;
    SP.NavigationNodeCreationInformation.initializeBase(this);
}
SP.NavigationNodeCreationInformation.prototype = {
    $1_1: null,
    $6_1: null,
    $23_1: false,
    $2A_1: null,
    $1o_1: false,
    
    get_title: function() {ULS5Vl:;
        return this.$1_1;
    },
    set_title: function(value) {ULS5Vl:;
        this.$1_1 = value;
        return value;
    },
    
    get_url: function() {ULS5Vl:;
        return this.$6_1;
    },
    set_url: function(value) {ULS5Vl:;
        this.$6_1 = value;
        return value;
    },
    
    get_isExternal: function() {ULS5Vl:;
        return this.$23_1;
    },
    set_isExternal: function(value) {ULS5Vl:;
        this.$23_1 = value;
        return value;
    },
    
    get_previousNode: function() {ULS5Vl:;
        return this.$2A_1;
    },
    set_previousNode: function(value) {ULS5Vl:;
        this.$2A_1 = value;
        return value;
    },
    
    get_asLastNode: function() {ULS5Vl:;
        return this.$1o_1;
    },
    set_asLastNode: function(value) {ULS5Vl:;
        this.$1o_1 = value;
        return value;
    },
    
    get_typeId: function() {ULS5Vl:;
        return '{7aaaa605-79a9-4fda-ae1e-db952e5083e0}';
    },
    
    writeToXml: function(writer, serializationContext) {ULS5Vl:;
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = [ 'Title', 'Url', 'IsExternal', 'PreviousNode', 'AsLastNode' ];
        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
    },
    
    initPropertiesFromJson: function(parentNode) {ULS5Vl:;
        var $v_0;
        $v_0 = parentNode.Title;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1_1 = ($v_0);
            delete parentNode.Title;
        }
        $v_0 = parentNode.Url;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$6_1 = ($v_0);
            delete parentNode.Url;
        }
        $v_0 = parentNode.IsExternal;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$23_1 = ($v_0);
            delete parentNode.IsExternal;
        }
        $v_0 = parentNode.PreviousNode;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$2A_1.fromJson($v_0);
            delete parentNode.PreviousNode;
        }
        $v_0 = parentNode.AsLastNode;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1o_1 = ($v_0);
            delete parentNode.AsLastNode;
        }
    }
}


SP.Principal = function(Context, ObjectPath) {ULS5Vl:;
    SP.Principal.initializeBase(this, [ Context, ObjectPath ]);
}
SP.Principal.prototype = {
    
    get_principalType: function() {ULS5Vl:;
        this.checkUninitializedProperty('PrincipalType');
        return ((this.get_objectData().get_properties()['PrincipalType']));
    },
    
    get_title: function() {ULS5Vl:;
        this.checkUninitializedProperty('Title');
        return ((this.get_objectData().get_properties()['Title']));
    },
    set_title: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['Title'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Title', value));
        }
        return value;
    },
    
    get_loginName: function() {ULS5Vl:;
        this.checkUninitializedProperty('LoginName');
        return ((this.get_objectData().get_properties()['LoginName']));
    },
    
    get_id: function() {ULS5Vl:;
        this.checkUninitializedProperty('Id');
        return ((this.get_objectData().get_properties()['Id']));
    },
    
    initPropertiesFromJson: function(parentNode) {ULS5Vl:;
        SP.Principal.callBaseMethod(this, 'initPropertiesFromJson', [ parentNode ]);
        var $v_0;
        $v_0 = parentNode.PrincipalType;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['PrincipalType'] = ($v_0);
            delete parentNode.PrincipalType;
        }
        $v_0 = parentNode.Title;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Title'] = ($v_0);
            delete parentNode.Title;
        }
        $v_0 = parentNode.LoginName;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['LoginName'] = ($v_0);
            delete parentNode.LoginName;
        }
        $v_0 = parentNode.Id;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Id'] = ($v_0);
            delete parentNode.Id;
        }
    }
}


SP.PrincipalPropertyNames = function() {
}


SP.PropertyValues = function(Context, ObjectPath) {ULS5Vl:;
    SP.PropertyValues.initializeBase(this, [ Context, ObjectPath ]);
}
SP.PropertyValues.prototype = {
    
    get_fieldValues: function() {ULS5Vl:;
        var $v_0 = this.get_objectData().get_methodReturnObjects()[SP.ClientConstants.FieldValuesMethodName];
        if (SP.ScriptUtility.isNullOrUndefined($v_0)) {
            $v_0 = {};
            this.get_objectData().get_methodReturnObjects()[SP.ClientConstants.FieldValuesMethodName] = $v_0;
        }
        return $v_0;
    },
    
    get_item: function(fieldName) {ULS5Vl:;
        return this.$1m(fieldName);
    },
    set_item: function(fieldName, value) {ULS5Vl:;
        this.$3Z(fieldName, value);
        return value;
    },
    
    initNonPropertiesFromJson: function(parentNode) {ULS5Vl:;
        SP.DataConvert.populateDictionaryFromObject(this.get_fieldValues(), parentNode);
        SP.DataConvert.fixupTypes(this.get_context(), this.get_fieldValues());
    },
    
    $1m: function($p0) {
        var $v_0 = this.get_fieldValues()[$p0];
        if (SP.ScriptUtility.isUndefined($v_0)) {
            throw Error.create(SP.Res.propertyHasNotBeenInitialized);
        }
        return $v_0;
    },
    
    refreshLoad: function() {ULS5Vl:;
        SP.PropertyValues.callBaseMethod(this, 'refreshLoad');
        this.loadExpandoFields();
    },
    
    loadExpandoFields: function() {ULS5Vl:;
        var $$dict_1_0 = this.get_fieldValues();
        for (var $$key_1_1 in $$dict_1_0) {
            var $v_0 = { key: $$key_1_1, value: $$dict_1_0[$$key_1_1] };
            this.retrieve($v_0.key);
        }
    },
    
    $3Z: function($p0, $p1) {
        this.get_fieldValues()[$p0] = $p1;
        var $v_0 = new SP.ClientActionInvokeMethod(this, 'SetFieldValue', [ $p0, $p1 ]);
        if ((this.get_context())) {
            this.get_context().addQuery($v_0);
        }
    }
}


SP.RecycleBinItem = function(Context, ObjectPath) {ULS5Vl:;
    SP.RecycleBinItem.initializeBase(this, [ Context, ObjectPath ]);
}
SP.RecycleBinItem.prototype = {
    
    get_id: function() {ULS5Vl:;
        this.checkUninitializedProperty('Id');
        return ((this.get_objectData().get_properties()['Id']));
    },
    
    get_itemState: function() {ULS5Vl:;
        this.checkUninitializedProperty('ItemState');
        return ((this.get_objectData().get_properties()['ItemState']));
    },
    
    get_itemType: function() {ULS5Vl:;
        this.checkUninitializedProperty('ItemType');
        return ((this.get_objectData().get_properties()['ItemType']));
    },
    
    get_title: function() {ULS5Vl:;
        this.checkUninitializedProperty('Title');
        return ((this.get_objectData().get_properties()['Title']));
    },
    
    get_dirName: function() {ULS5Vl:;
        this.checkUninitializedProperty('DirName');
        return ((this.get_objectData().get_properties()['DirName']));
    },
    
    get_leafName: function() {ULS5Vl:;
        this.checkUninitializedProperty('LeafName');
        return ((this.get_objectData().get_properties()['LeafName']));
    },
    
    get_author: function() {ULS5Vl:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['Author']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.User(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'Author'));
            this.get_objectData().get_clientObjectProperties()['Author'] = $v_0;
        }
        return $v_0;
    },
    
    get_deletedBy: function() {ULS5Vl:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['DeletedBy']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.User(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'DeletedBy'));
            this.get_objectData().get_clientObjectProperties()['DeletedBy'] = $v_0;
        }
        return $v_0;
    },
    
    get_deletedDate: function() {ULS5Vl:;
        this.checkUninitializedProperty('DeletedDate');
        return ((this.get_objectData().get_properties()['DeletedDate']));
    },
    
    get_size: function() {ULS5Vl:;
        this.checkUninitializedProperty('Size');
        return ((this.get_objectData().get_properties()['Size']));
    },
    
    initPropertiesFromJson: function(parentNode) {ULS5Vl:;
        SP.RecycleBinItem.callBaseMethod(this, 'initPropertiesFromJson', [ parentNode ]);
        var $v_0;
        $v_0 = parentNode.Id;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Id'] = ($v_0);
            delete parentNode.Id;
        }
        $v_0 = parentNode.ItemState;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ItemState'] = ($v_0);
            delete parentNode.ItemState;
        }
        $v_0 = parentNode.ItemType;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ItemType'] = ($v_0);
            delete parentNode.ItemType;
        }
        $v_0 = parentNode.Title;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Title'] = ($v_0);
            delete parentNode.Title;
        }
        $v_0 = parentNode.DirName;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['DirName'] = ($v_0);
            delete parentNode.DirName;
        }
        $v_0 = parentNode.LeafName;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['LeafName'] = ($v_0);
            delete parentNode.LeafName;
        }
        $v_0 = parentNode.Author;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_author().fromJson($v_0);
            delete parentNode.Author;
        }
        $v_0 = parentNode.DeletedBy;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_deletedBy().fromJson($v_0);
            delete parentNode.DeletedBy;
        }
        $v_0 = parentNode.DeletedDate;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['DeletedDate'] = ($v_0);
            delete parentNode.DeletedDate;
        }
        $v_0 = parentNode.Size;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Size'] = ($v_0);
            delete parentNode.Size;
        }
    },
    
    deleteObject: function() {ULS5Vl:;
        var $v_0 = new SP.ClientActionInvokeMethod(this, 'DeleteObject', null);
        this.get_context().addQuery($v_0);
        this.removeFromParentCollection();
    },
    
    restore: function() {ULS5Vl:;
        var $v_0 = new SP.ClientActionInvokeMethod(this, 'Restore', null);
        this.get_context().addQuery($v_0);
        this.removeFromParentCollection();
    }
}


SP.RecycleBinItemPropertyNames = function() {
}


SP.RecycleBinItemObjectPropertyNames = function() {
}


SP.RecycleBinItemCollection = function(Context, ObjectPath) {ULS5Vl:;
    SP.RecycleBinItemCollection.initializeBase(this, [ Context, ObjectPath ]);
}
SP.RecycleBinItemCollection.prototype = {
    
    itemAt: function(index) {ULS5Vl:;
        return this.getItemAtIndex(index);
    },
    
    get_item: function(index) {ULS5Vl:;
        return this.getItemAtIndex(index);
    },
    
    $2v_2: function() {ULS5Vl:;
        var $v_0 = this.get_data();
        while ($v_0.length > 0) {
            Array.removeAt($v_0, $v_0.length - 1);
        }
    },
    
    getById: function(id) {ULS5Vl:;
        var $v_0;
        var $v_1 = ((this.get_objectData().get_methodReturnObjects()['GetById']));
        if (SP.ScriptUtility.isNullOrUndefined($v_1)) {
            $v_1 = {};
            this.get_objectData().get_methodReturnObjects()['GetById'] = $v_1;
        }
        $v_0 = (($v_1[id.toString()]));
        if (!SP.ScriptUtility.isNullOrUndefined($v_0)) {
            return $v_0;
        }
        $v_0 = new SP.RecycleBinItem(this.get_context(), new SP.ObjectPathMethod(this.get_context(), this.get_path(), 'GetById', [ id ]));
        $v_1[id.toString()] = $v_0;
        return $v_0;
    },
    
    deleteAll: function() {ULS5Vl:;
        var $v_0 = new SP.ClientActionInvokeMethod(this, 'DeleteAll', null);
        this.get_context().addQuery($v_0);
        this.$2v_2();
    },
    
    restoreAll: function() {ULS5Vl:;
        var $v_0 = new SP.ClientActionInvokeMethod(this, 'RestoreAll', null);
        this.get_context().addQuery($v_0);
        this.$2v_2();
    }
}


SP.RelatedField = function(Context, ObjectPath) {ULS5Vl:;
    SP.RelatedField.initializeBase(this, [ Context, ObjectPath ]);
}
SP.RelatedField.prototype = {
    
    get_lookupList: function() {ULS5Vl:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['LookupList']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.List(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'LookupList'));
            this.get_objectData().get_clientObjectProperties()['LookupList'] = $v_0;
        }
        return $v_0;
    },
    
    get_webId: function() {ULS5Vl:;
        this.checkUninitializedProperty('WebId');
        return ((this.get_objectData().get_properties()['WebId']));
    },
    
    get_listId: function() {ULS5Vl:;
        this.checkUninitializedProperty('ListId');
        return ((this.get_objectData().get_properties()['ListId']));
    },
    
    get_fieldId: function() {ULS5Vl:;
        this.checkUninitializedProperty('FieldId');
        return ((this.get_objectData().get_properties()['FieldId']));
    },
    
    get_relationshipDeleteBehavior: function() {ULS5Vl:;
        this.checkUninitializedProperty('RelationshipDeleteBehavior');
        return ((this.get_objectData().get_properties()['RelationshipDeleteBehavior']));
    },
    
    initPropertiesFromJson: function(parentNode) {ULS5Vl:;
        SP.RelatedField.callBaseMethod(this, 'initPropertiesFromJson', [ parentNode ]);
        var $v_0;
        $v_0 = parentNode.LookupList;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_lookupList().fromJson($v_0);
            delete parentNode.LookupList;
        }
        $v_0 = parentNode.WebId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['WebId'] = ($v_0);
            delete parentNode.WebId;
        }
        $v_0 = parentNode.ListId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ListId'] = ($v_0);
            delete parentNode.ListId;
        }
        $v_0 = parentNode.FieldId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['FieldId'] = ($v_0);
            delete parentNode.FieldId;
        }
        $v_0 = parentNode.RelationshipDeleteBehavior;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['RelationshipDeleteBehavior'] = ($v_0);
            delete parentNode.RelationshipDeleteBehavior;
        }
    }
}


SP.RelatedFieldPropertyNames = function() {
}


SP.RelatedFieldObjectPropertyNames = function() {
}


SP.RelatedFieldCollection = function(Context, ObjectPath) {ULS5Vl:;
    SP.RelatedFieldCollection.initializeBase(this, [ Context, ObjectPath ]);
}
SP.RelatedFieldCollection.prototype = {
    
    itemAt: function(index) {ULS5Vl:;
        return this.getItemAtIndex(index);
    },
    
    get_item: function(index) {ULS5Vl:;
        return this.getItemAtIndex(index);
    }
}


SP.RelatedFieldExtendedData = function(Context, ObjectPath) {ULS5Vl:;
    SP.RelatedFieldExtendedData.initializeBase(this, [ Context, ObjectPath ]);
}
SP.RelatedFieldExtendedData.prototype = {
    
    get_webId: function() {ULS5Vl:;
        this.checkUninitializedProperty('WebId');
        return ((this.get_objectData().get_properties()['WebId']));
    },
    
    get_listId: function() {ULS5Vl:;
        this.checkUninitializedProperty('ListId');
        return ((this.get_objectData().get_properties()['ListId']));
    },
    
    get_fieldId: function() {ULS5Vl:;
        this.checkUninitializedProperty('FieldId');
        return ((this.get_objectData().get_properties()['FieldId']));
    },
    
    get_resolvedListTitle: function() {ULS5Vl:;
        this.checkUninitializedProperty('ResolvedListTitle');
        return ((this.get_objectData().get_properties()['ResolvedListTitle']));
    },
    
    get_listImageUrl: function() {ULS5Vl:;
        this.checkUninitializedProperty('ListImageUrl');
        return ((this.get_objectData().get_properties()['ListImageUrl']));
    },
    
    get_toolTipDescription: function() {ULS5Vl:;
        this.checkUninitializedProperty('ToolTipDescription');
        return ((this.get_objectData().get_properties()['ToolTipDescription']));
    },
    
    initPropertiesFromJson: function(parentNode) {ULS5Vl:;
        SP.RelatedFieldExtendedData.callBaseMethod(this, 'initPropertiesFromJson', [ parentNode ]);
        var $v_0;
        $v_0 = parentNode.WebId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['WebId'] = ($v_0);
            delete parentNode.WebId;
        }
        $v_0 = parentNode.ListId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ListId'] = ($v_0);
            delete parentNode.ListId;
        }
        $v_0 = parentNode.FieldId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['FieldId'] = ($v_0);
            delete parentNode.FieldId;
        }
        $v_0 = parentNode.ResolvedListTitle;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ResolvedListTitle'] = ($v_0);
            delete parentNode.ResolvedListTitle;
        }
        $v_0 = parentNode.ListImageUrl;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ListImageUrl'] = ($v_0);
            delete parentNode.ListImageUrl;
        }
        $v_0 = parentNode.ToolTipDescription;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ToolTipDescription'] = ($v_0);
            delete parentNode.ToolTipDescription;
        }
    }
}


SP.RelatedFieldExtendedDataPropertyNames = function() {
}


SP.RelatedFieldExtendedDataCollection = function(Context, ObjectPath) {ULS5Vl:;
    SP.RelatedFieldExtendedDataCollection.initializeBase(this, [ Context, ObjectPath ]);
}
SP.RelatedFieldExtendedDataCollection.prototype = {
    
    itemAt: function(index) {ULS5Vl:;
        return this.getItemAtIndex(index);
    },
    
    get_item: function(index) {ULS5Vl:;
        return this.getItemAtIndex(index);
    }
}


SP.RequestContext = function(Context, ObjectPath) {ULS5Vl:;
    SP.RequestContext.initializeBase(this, [ Context, ObjectPath ]);
}
SP.RequestContext.getCurrent = function($p0) {
    var $v_0 = $p0.get_staticObjects()['Microsoft$SharePoint$SPContext$Current'];
    if ((!$v_0)) {
        $v_0 = new SP.RequestContext($p0, new SP.ObjectPathStaticProperty($p0, '{3747adcd-a3c3-41b9-bfab-4a64dd2f1e0a}', 'Current'));
        $p0.get_staticObjects()['Microsoft$SharePoint$SPContext$Current'] = $v_0;
    }
    return ($v_0);
}
SP.RequestContext.prototype = {
    
    get_web: function() {ULS5Vl:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['Web']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.Web(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'Web'));
            this.get_objectData().get_clientObjectProperties()['Web'] = $v_0;
        }
        return $v_0;
    },
    
    get_site: function() {ULS5Vl:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['Site']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.Site(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'Site'));
            this.get_objectData().get_clientObjectProperties()['Site'] = $v_0;
        }
        return $v_0;
    },
    
    initPropertiesFromJson: function($p0) {
        SP.RequestContext.callBaseMethod(this, 'initPropertiesFromJson', [ $p0 ]);
        var $v_0;
        $v_0 = $p0.Web;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_web().fromJson($v_0);
            delete $p0.Web;
        }
        $v_0 = $p0.Site;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_site().fromJson($v_0);
            delete $p0.Site;
        }
    }
}


SP.RequestContextObjectPropertyNames = function() {
}


SP.RoleAssignment = function(Context, ObjectPath) {ULS5Vl:;
    SP.RoleAssignment.initializeBase(this, [ Context, ObjectPath ]);
}
SP.RoleAssignment.prototype = {
    
    get_member: function() {ULS5Vl:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['Member']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.Principal(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'Member'));
            this.get_objectData().get_clientObjectProperties()['Member'] = $v_0;
        }
        return $v_0;
    },
    
    get_roleDefinitionBindings: function() {ULS5Vl:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['RoleDefinitionBindings']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.RoleDefinitionBindingCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'RoleDefinitionBindings'));
            this.get_objectData().get_clientObjectProperties()['RoleDefinitionBindings'] = $v_0;
        }
        return $v_0;
    },
    
    initPropertiesFromJson: function(parentNode) {ULS5Vl:;
        SP.RoleAssignment.callBaseMethod(this, 'initPropertiesFromJson', [ parentNode ]);
        var $v_0;
        $v_0 = parentNode.Member;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_member().fromJson($v_0);
            delete parentNode.Member;
        }
        $v_0 = parentNode.RoleDefinitionBindings;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_roleDefinitionBindings().fromJson($v_0);
            delete parentNode.RoleDefinitionBindings;
        }
    },
    
    importRoleDefinitionBindings: function(roleDefinitionBindings) {ULS5Vl:;
        var $v_0 = new SP.ClientActionInvokeMethod(this, 'ImportRoleDefinitionBindings', [ roleDefinitionBindings ]);
        this.get_context().addQuery($v_0);
    },
    
    update: function() {ULS5Vl:;
        var $v_0 = new SP.ClientActionInvokeMethod(this, 'Update', null);
        this.get_context().addQuery($v_0);
    },
    
    deleteObject: function() {ULS5Vl:;
        var $v_0 = new SP.ClientActionInvokeMethod(this, 'DeleteObject', null);
        this.get_context().addQuery($v_0);
        this.removeFromParentCollection();
    }
}


SP.RoleAssignmentObjectPropertyNames = function() {
}


SP.RoleAssignmentCollection = function(Context, ObjectPath) {ULS5Vl:;
    SP.RoleAssignmentCollection.initializeBase(this, [ Context, ObjectPath ]);
}
SP.RoleAssignmentCollection.prototype = {
    
    itemAt: function(index) {ULS5Vl:;
        return this.getItemAtIndex(index);
    },
    
    get_item: function(index) {ULS5Vl:;
        return this.getItemAtIndex(index);
    },
    
    getByPrincipal: function(principalToFind) {ULS5Vl:;
        var $v_0;
        $v_0 = new SP.RoleAssignment(this.get_context(), new SP.ObjectPathMethod(this.get_context(), this.get_path(), 'GetByPrincipal', [ principalToFind ]));
        $v_0.get_path().setPendingReplace();
        var $v_1 = new SP.ObjectIdentityQuery($v_0.get_path());
        this.get_context().addQueryIdAndResultObject($v_1.get_id(), $v_0);
        this.get_context().addQuery($v_1);
        return $v_0;
    },
    
    getByPrincipalId: function(principalId) {ULS5Vl:;
        var $v_0;
        var $v_1 = ((this.get_objectData().get_methodReturnObjects()['GetByPrincipalId']));
        if (SP.ScriptUtility.isNullOrUndefined($v_1)) {
            $v_1 = [];
            this.get_objectData().get_methodReturnObjects()['GetByPrincipalId'] = $v_1;
        }
        $v_0 = (($v_1[principalId]));
        if (!SP.ScriptUtility.isNullOrUndefined($v_0)) {
            return $v_0;
        }
        $v_0 = new SP.RoleAssignment(this.get_context(), new SP.ObjectPathMethod(this.get_context(), this.get_path(), 'GetByPrincipalId', [ principalId ]));
        $v_1[principalId] = $v_0;
        var $v_2 = new SP.ObjectIdentityQuery($v_0.get_path());
        this.get_context().addQueryIdAndResultObject($v_2.get_id(), $v_0);
        this.get_context().addQuery($v_2);
        return $v_0;
    },
    
    add: function(principal, roleBindings) {ULS5Vl:;
        var $v_0;
        $v_0 = new SP.RoleAssignment(this.get_context(), new SP.ObjectPathMethod(this.get_context(), this.get_path(), 'Add', [ principal, roleBindings ]));
        $v_0.get_path().setPendingReplace();
        var $v_1 = new SP.ObjectIdentityQuery($v_0.get_path());
        this.get_context().addQueryIdAndResultObject($v_1.get_id(), $v_0);
        this.get_context().addQuery($v_1);
        this.addChild($v_0);
        return $v_0;
    }
}


SP.RoleDefinition = function(Context, ObjectPath) {ULS5Vl:;
    SP.RoleDefinition.initializeBase(this, [ Context, ObjectPath ]);
}
SP.RoleDefinition.prototype = {
    
    $7: function($p0) {
        if ($p0) {
            this.get_objectData().get_properties()['Description'] = $p0.$2_1;
            this.get_objectData().get_properties()['Name'] = $p0.$5_1;
            this.get_objectData().get_properties()['Order'] = $p0.$17_1;
            this.get_objectData().get_properties()['BasePermissions'] = $p0.$s_1;
        }
    },
    
    get_id: function() {ULS5Vl:;
        this.checkUninitializedProperty('Id');
        return ((this.get_objectData().get_properties()['Id']));
    },
    
    get_name: function() {ULS5Vl:;
        this.checkUninitializedProperty('Name');
        return ((this.get_objectData().get_properties()['Name']));
    },
    set_name: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['Name'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Name', value));
        }
        return value;
    },
    
    get_description: function() {ULS5Vl:;
        this.checkUninitializedProperty('Description');
        return ((this.get_objectData().get_properties()['Description']));
    },
    set_description: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['Description'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Description', value));
        }
        return value;
    },
    
    get_roleTypeKind: function() {ULS5Vl:;
        this.checkUninitializedProperty('RoleTypeKind');
        return ((this.get_objectData().get_properties()['RoleTypeKind']));
    },
    
    get_hidden: function() {ULS5Vl:;
        this.checkUninitializedProperty('Hidden');
        return ((this.get_objectData().get_properties()['Hidden']));
    },
    
    get_order: function() {ULS5Vl:;
        this.checkUninitializedProperty('Order');
        return ((this.get_objectData().get_properties()['Order']));
    },
    set_order: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['Order'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Order', value));
        }
        return value;
    },
    
    get_basePermissions: function() {ULS5Vl:;
        this.checkUninitializedProperty('BasePermissions');
        return ((this.get_objectData().get_properties()['BasePermissions']));
    },
    set_basePermissions: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['BasePermissions'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'BasePermissions', value));
        }
        return value;
    },
    
    initPropertiesFromJson: function(parentNode) {ULS5Vl:;
        SP.RoleDefinition.callBaseMethod(this, 'initPropertiesFromJson', [ parentNode ]);
        var $v_0;
        $v_0 = parentNode.Id;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Id'] = ($v_0);
            delete parentNode.Id;
        }
        $v_0 = parentNode.Name;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Name'] = ($v_0);
            delete parentNode.Name;
        }
        $v_0 = parentNode.Description;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Description'] = ($v_0);
            delete parentNode.Description;
        }
        $v_0 = parentNode.RoleTypeKind;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['RoleTypeKind'] = ($v_0);
            delete parentNode.RoleTypeKind;
        }
        $v_0 = parentNode.Hidden;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Hidden'] = ($v_0);
            delete parentNode.Hidden;
        }
        $v_0 = parentNode.Order;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Order'] = ($v_0);
            delete parentNode.Order;
        }
        $v_0 = parentNode.BasePermissions;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['BasePermissions'] = ((SP.DataConvert.fixupType(this.get_context(), $v_0)));
            delete parentNode.BasePermissions;
        }
    },
    
    update: function() {ULS5Vl:;
        var $v_0 = new SP.ClientActionInvokeMethod(this, 'Update', null);
        this.get_context().addQuery($v_0);
    },
    
    deleteObject: function() {ULS5Vl:;
        var $v_0 = new SP.ClientActionInvokeMethod(this, 'DeleteObject', null);
        this.get_context().addQuery($v_0);
        this.removeFromParentCollection();
    }
}


SP.RoleDefinitionPropertyNames = function() {
}


SP.RoleDefinitionBindingCollection = function(Context, ObjectPath) {ULS5Vl:;
    SP.RoleDefinitionBindingCollection.initializeBase(this, [ Context, ObjectPath ]);
}
SP.RoleDefinitionBindingCollection.newObject = function(Context) {ULS5Vl:;
    return new SP.RoleDefinitionBindingCollection(Context, new SP.ObjectPathConstructor(Context, '{07bf1941-6953-4761-b114-58374b4aaf57}', null));
}
SP.RoleDefinitionBindingCollection.prototype = {
    
    itemAt: function(index) {ULS5Vl:;
        return this.getItemAtIndex(index);
    },
    
    get_item: function(index) {ULS5Vl:;
        return this.getItemAtIndex(index);
    },
    
    $3U_2: function() {ULS5Vl:;
        var $v_0 = this.get_data();
        while ($v_0.length > 0) {
            Array.removeAt($v_0, $v_0.length - 1);
        }
    },
    
    add: function(roleDefinition) {ULS5Vl:;
        var $v_0 = new SP.ClientActionInvokeMethod(this, 'Add', [ roleDefinition ]);
        this.get_context().addQuery($v_0);
        this.addChild(roleDefinition);
    },
    
    remove: function(roleDefinition) {ULS5Vl:;
        var $v_0 = new SP.ClientActionInvokeMethod(this, 'Remove', [ roleDefinition ]);
        this.get_context().addQuery($v_0);
        this.removeChild(roleDefinition);
    },
    
    removeAll: function() {ULS5Vl:;
        var $v_0 = new SP.ClientActionInvokeMethod(this, 'RemoveAll', null);
        this.get_context().addQuery($v_0);
        this.$3U_2();
    }
}


SP.RoleDefinitionCollection = function(Context, ObjectPath) {ULS5Vl:;
    SP.RoleDefinitionCollection.initializeBase(this, [ Context, ObjectPath ]);
}
SP.RoleDefinitionCollection.prototype = {
    
    itemAt: function(index) {ULS5Vl:;
        return this.getItemAtIndex(index);
    },
    
    get_item: function(index) {ULS5Vl:;
        return this.getItemAtIndex(index);
    },
    
    getByName: function(name) {ULS5Vl:;
        var $v_0;
        var $v_1 = ((this.get_objectData().get_methodReturnObjects()['GetByName']));
        if (SP.ScriptUtility.isNullOrUndefined($v_1)) {
            $v_1 = {};
            this.get_objectData().get_methodReturnObjects()['GetByName'] = $v_1;
        }
        $v_0 = (($v_1[name]));
        if (!SP.ScriptUtility.isNullOrUndefined($v_0)) {
            return $v_0;
        }
        $v_0 = new SP.RoleDefinition(this.get_context(), new SP.ObjectPathMethod(this.get_context(), this.get_path(), 'GetByName', [ name ]));
        $v_1[name] = $v_0;
        var $v_2 = new SP.ObjectIdentityQuery($v_0.get_path());
        this.get_context().addQueryIdAndResultObject($v_2.get_id(), $v_0);
        this.get_context().addQuery($v_2);
        return $v_0;
    },
    
    add: function(parameters) {ULS5Vl:;
        var $v_0;
        $v_0 = new SP.RoleDefinition(this.get_context(), new SP.ObjectPathMethod(this.get_context(), this.get_path(), 'Add', [ parameters ]));
        $v_0.get_path().setPendingReplace();
        var $v_1 = new SP.ObjectIdentityQuery($v_0.get_path());
        this.get_context().addQueryIdAndResultObject($v_1.get_id(), $v_0);
        this.get_context().addQuery($v_1);
        this.addChild($v_0);
        $v_0.$7(parameters);
        return $v_0;
    },
    
    getById: function(id) {ULS5Vl:;
        var $v_0;
        var $v_1 = ((this.get_objectData().get_methodReturnObjects()['GetById']));
        if (SP.ScriptUtility.isNullOrUndefined($v_1)) {
            $v_1 = [];
            this.get_objectData().get_methodReturnObjects()['GetById'] = $v_1;
        }
        $v_0 = (($v_1[id]));
        if (!SP.ScriptUtility.isNullOrUndefined($v_0)) {
            return $v_0;
        }
        $v_0 = new SP.RoleDefinition(this.get_context(), new SP.ObjectPathMethod(this.get_context(), this.get_path(), 'GetById', [ id ]));
        $v_1[id] = $v_0;
        var $v_2 = new SP.ObjectIdentityQuery($v_0.get_path());
        this.get_context().addQueryIdAndResultObject($v_2.get_id(), $v_0);
        this.get_context().addQuery($v_2);
        return $v_0;
    },
    
    getByType: function(roleType) {ULS5Vl:;
        var $v_0;
        var $v_1 = ((this.get_objectData().get_methodReturnObjects()['GetByType']));
        if (SP.ScriptUtility.isNullOrUndefined($v_1)) {
            $v_1 = [];
            this.get_objectData().get_methodReturnObjects()['GetByType'] = $v_1;
        }
        $v_0 = (($v_1[(roleType)]));
        if (!SP.ScriptUtility.isNullOrUndefined($v_0)) {
            return $v_0;
        }
        $v_0 = new SP.RoleDefinition(this.get_context(), new SP.ObjectPathMethod(this.get_context(), this.get_path(), 'GetByType', [ roleType ]));
        $v_1[(roleType)] = $v_0;
        var $v_2 = new SP.ObjectIdentityQuery($v_0.get_path());
        this.get_context().addQueryIdAndResultObject($v_2.get_id(), $v_0);
        this.get_context().addQuery($v_2);
        return $v_0;
    }
}


SP.RoleDefinitionCreationInformation = function() {ULS5Vl:;
    SP.RoleDefinitionCreationInformation.initializeBase(this);
}
SP.RoleDefinitionCreationInformation.prototype = {
    $5_1: null,
    $2_1: null,
    $17_1: 0,
    $s_1: null,
    
    get_name: function() {ULS5Vl:;
        return this.$5_1;
    },
    set_name: function(value) {ULS5Vl:;
        this.$5_1 = value;
        return value;
    },
    
    get_description: function() {ULS5Vl:;
        return this.$2_1;
    },
    set_description: function(value) {ULS5Vl:;
        this.$2_1 = value;
        return value;
    },
    
    get_order: function() {ULS5Vl:;
        return this.$17_1;
    },
    set_order: function(value) {ULS5Vl:;
        this.$17_1 = value;
        return value;
    },
    
    get_basePermissions: function() {ULS5Vl:;
        return this.$s_1;
    },
    set_basePermissions: function(value) {ULS5Vl:;
        this.$s_1 = value;
        return value;
    },
    
    get_typeId: function() {ULS5Vl:;
        return '{59eddf82-1018-4677-8067-69e16efd3495}';
    },
    
    writeToXml: function(writer, serializationContext) {ULS5Vl:;
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = [ 'Name', 'Description', 'Order', 'BasePermissions' ];
        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
    },
    
    initPropertiesFromJson: function(parentNode) {ULS5Vl:;
        var $v_0;
        $v_0 = parentNode.Name;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$5_1 = ($v_0);
            delete parentNode.Name;
        }
        $v_0 = parentNode.Description;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$2_1 = ($v_0);
            delete parentNode.Description;
        }
        $v_0 = parentNode.Order;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$17_1 = ($v_0);
            delete parentNode.Order;
        }
        $v_0 = parentNode.BasePermissions;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$s_1 = ((SP.DataConvert.fixupType(null, $v_0)));
            delete parentNode.BasePermissions;
        }
    }
}


SP.SecurableObject = function(Context, ObjectPath) {ULS5Vl:;
    SP.SecurableObject.initializeBase(this, [ Context, ObjectPath ]);
}
SP.SecurableObject.prototype = {
    
    get_roleAssignments: function() {ULS5Vl:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['RoleAssignments']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.RoleAssignmentCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'RoleAssignments'));
            this.get_objectData().get_clientObjectProperties()['RoleAssignments'] = $v_0;
        }
        return $v_0;
    },
    
    get_hasUniqueRoleAssignments: function() {ULS5Vl:;
        this.checkUninitializedProperty('HasUniqueRoleAssignments');
        return ((this.get_objectData().get_properties()['HasUniqueRoleAssignments']));
    },
    
    initPropertiesFromJson: function(parentNode) {ULS5Vl:;
        SP.SecurableObject.callBaseMethod(this, 'initPropertiesFromJson', [ parentNode ]);
        var $v_0;
        $v_0 = parentNode.RoleAssignments;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_roleAssignments().fromJson($v_0);
            delete parentNode.RoleAssignments;
        }
        $v_0 = parentNode.HasUniqueRoleAssignments;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['HasUniqueRoleAssignments'] = ($v_0);
            delete parentNode.HasUniqueRoleAssignments;
        }
    },
    
    resetRoleInheritance: function() {ULS5Vl:;
        var $v_0 = new SP.ClientActionInvokeMethod(this, 'ResetRoleInheritance', null);
        this.get_context().addQuery($v_0);
    },
    
    breakRoleInheritance: function(copyRoleAssignments, clearSubscopes) {ULS5Vl:;
        var $v_0 = new SP.ClientActionInvokeMethod(this, 'BreakRoleInheritance', [ copyRoleAssignments, clearSubscopes ]);
        this.get_context().addQuery($v_0);
    }
}


SP.SecurableObjectPropertyNames = function() {
}


SP.SecurableObjectObjectPropertyNames = function() {
}


SP.Site = function(Context, ObjectPath) {ULS5Vl:;
    SP.Site.initializeBase(this, [ Context, ObjectPath ]);
}
SP.Site.prototype = {
    
    get_id: function() {ULS5Vl:;
        this.checkUninitializedProperty('Id');
        return ((this.get_objectData().get_properties()['Id']));
    },
    
    get_serverRelativeUrl: function() {ULS5Vl:;
        this.checkUninitializedProperty('ServerRelativeUrl');
        return ((this.get_objectData().get_properties()['ServerRelativeUrl']));
    },
    
    get_url: function() {ULS5Vl:;
        this.checkUninitializedProperty('Url');
        return ((this.get_objectData().get_properties()['Url']));
    },
    
    get_features: function() {ULS5Vl:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['Features']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.FeatureCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'Features'));
            this.get_objectData().get_clientObjectProperties()['Features'] = $v_0;
        }
        return $v_0;
    },
    
    get_userCustomActions: function() {ULS5Vl:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['UserCustomActions']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.UserCustomActionCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'UserCustomActions'));
            this.get_objectData().get_clientObjectProperties()['UserCustomActions'] = $v_0;
        }
        return $v_0;
    },
    
    get_rootWeb: function() {ULS5Vl:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['RootWeb']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.Web(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'RootWeb'));
            this.get_objectData().get_clientObjectProperties()['RootWeb'] = $v_0;
        }
        return $v_0;
    },
    
    get_usage: function() {ULS5Vl:;
        this.checkUninitializedProperty('Usage');
        return ((this.get_objectData().get_properties()['Usage']));
    },
    
    get_uiVersionConfigurationEnabled: function() {ULS5Vl:;
        this.checkUninitializedProperty('UIVersionConfigurationEnabled');
        return ((this.get_objectData().get_properties()['UIVersionConfigurationEnabled']));
    },
    set_uiVersionConfigurationEnabled: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['UIVersionConfigurationEnabled'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'UIVersionConfigurationEnabled', value));
        }
        return value;
    },
    
    get_recycleBin: function() {ULS5Vl:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['RecycleBin']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.RecycleBinItemCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'RecycleBin'));
            this.get_objectData().get_clientObjectProperties()['RecycleBin'] = $v_0;
        }
        return $v_0;
    },
    
    get_maxItemsPerThrottledOperation: function() {ULS5Vl:;
        this.checkUninitializedProperty('MaxItemsPerThrottledOperation');
        return ((this.get_objectData().get_properties()['MaxItemsPerThrottledOperation']));
    },
    
    get_allowDesigner: function() {ULS5Vl:;
        this.checkUninitializedProperty('AllowDesigner');
        return ((this.get_objectData().get_properties()['AllowDesigner']));
    },
    set_allowDesigner: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['AllowDesigner'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'AllowDesigner', value));
        }
        return value;
    },
    
    get_allowRevertFromTemplate: function() {ULS5Vl:;
        this.checkUninitializedProperty('AllowRevertFromTemplate');
        return ((this.get_objectData().get_properties()['AllowRevertFromTemplate']));
    },
    set_allowRevertFromTemplate: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['AllowRevertFromTemplate'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'AllowRevertFromTemplate', value));
        }
        return value;
    },
    
    get_allowMasterPageEditing: function() {ULS5Vl:;
        this.checkUninitializedProperty('AllowMasterPageEditing');
        return ((this.get_objectData().get_properties()['AllowMasterPageEditing']));
    },
    set_allowMasterPageEditing: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['AllowMasterPageEditing'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'AllowMasterPageEditing', value));
        }
        return value;
    },
    
    get_showUrlStructure: function() {ULS5Vl:;
        this.checkUninitializedProperty('ShowUrlStructure');
        return ((this.get_objectData().get_properties()['ShowUrlStructure']));
    },
    set_showUrlStructure: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['ShowUrlStructure'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'ShowUrlStructure', value));
        }
        return value;
    },
    
    initPropertiesFromJson: function(parentNode) {ULS5Vl:;
        SP.Site.callBaseMethod(this, 'initPropertiesFromJson', [ parentNode ]);
        var $v_0;
        $v_0 = parentNode.Id;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Id'] = ($v_0);
            delete parentNode.Id;
        }
        $v_0 = parentNode.ServerRelativeUrl;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ServerRelativeUrl'] = ($v_0);
            delete parentNode.ServerRelativeUrl;
        }
        $v_0 = parentNode.Url;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Url'] = ($v_0);
            delete parentNode.Url;
        }
        $v_0 = parentNode.Features;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_features().fromJson($v_0);
            delete parentNode.Features;
        }
        $v_0 = parentNode.UserCustomActions;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_userCustomActions().fromJson($v_0);
            delete parentNode.UserCustomActions;
        }
        $v_0 = parentNode.RootWeb;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_rootWeb().fromJson($v_0);
            delete parentNode.RootWeb;
        }
        $v_0 = parentNode.Usage;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Usage'] = ((SP.DataConvert.fixupType(this.get_context(), $v_0)));
            delete parentNode.Usage;
        }
        $v_0 = parentNode.UIVersionConfigurationEnabled;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['UIVersionConfigurationEnabled'] = ($v_0);
            delete parentNode.UIVersionConfigurationEnabled;
        }
        $v_0 = parentNode.RecycleBin;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_recycleBin().fromJson($v_0);
            delete parentNode.RecycleBin;
        }
        $v_0 = parentNode.MaxItemsPerThrottledOperation;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['MaxItemsPerThrottledOperation'] = ($v_0);
            delete parentNode.MaxItemsPerThrottledOperation;
        }
        $v_0 = parentNode.AllowDesigner;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['AllowDesigner'] = ($v_0);
            delete parentNode.AllowDesigner;
        }
        $v_0 = parentNode.AllowRevertFromTemplate;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['AllowRevertFromTemplate'] = ($v_0);
            delete parentNode.AllowRevertFromTemplate;
        }
        $v_0 = parentNode.AllowMasterPageEditing;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['AllowMasterPageEditing'] = ($v_0);
            delete parentNode.AllowMasterPageEditing;
        }
        $v_0 = parentNode.ShowUrlStructure;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ShowUrlStructure'] = ($v_0);
            delete parentNode.ShowUrlStructure;
        }
    },
    
    getCustomListTemplates: function(web) {ULS5Vl:;
        var $v_0;
        $v_0 = new SP.ListTemplateCollection(this.get_context(), new SP.ObjectPathMethod(this.get_context(), this.get_path(), 'GetCustomListTemplates', [ web ]));
        return $v_0;
    },
    
    getCatalog: function(typeCatalog) {ULS5Vl:;
        var $v_0;
        var $v_1 = ((this.get_objectData().get_methodReturnObjects()['GetCatalog']));
        if (SP.ScriptUtility.isNullOrUndefined($v_1)) {
            $v_1 = [];
            this.get_objectData().get_methodReturnObjects()['GetCatalog'] = $v_1;
        }
        $v_0 = (($v_1[typeCatalog]));
        if (!SP.ScriptUtility.isNullOrUndefined($v_0)) {
            return $v_0;
        }
        $v_0 = new SP.List(this.get_context(), new SP.ObjectPathMethod(this.get_context(), this.get_path(), 'GetCatalog', [ typeCatalog ]));
        $v_1[typeCatalog] = $v_0;
        return $v_0;
    },
    
    openWeb: function(strUrl) {ULS5Vl:;
        var $v_0;
        var $v_1 = ((this.get_objectData().get_methodReturnObjects()['OpenWeb']));
        if (SP.ScriptUtility.isNullOrUndefined($v_1)) {
            $v_1 = {};
            this.get_objectData().get_methodReturnObjects()['OpenWeb'] = $v_1;
        }
        $v_0 = (($v_1[strUrl.toUpperCase()]));
        if (!SP.ScriptUtility.isNullOrUndefined($v_0)) {
            return $v_0;
        }
        $v_0 = new SP.Web(this.get_context(), new SP.ObjectPathMethod(this.get_context(), this.get_path(), 'OpenWeb', [ strUrl ]));
        $v_1[strUrl.toUpperCase()] = $v_0;
        var $v_2 = new SP.ObjectIdentityQuery($v_0.get_path());
        this.get_context().addQueryIdAndResultObject($v_2.get_id(), $v_0);
        this.get_context().addQuery($v_2);
        return $v_0;
    },
    
    openWebById: function(gWebId) {ULS5Vl:;
        var $v_0;
        $v_0 = new SP.Web(this.get_context(), new SP.ObjectPathMethod(this.get_context(), this.get_path(), 'OpenWebById', [ gWebId ]));
        return $v_0;
    },
    
    getChanges: function(query_) {ULS5Vl:;
        var $v_0;
        $v_0 = new SP.ChangeCollection(this.get_context(), new SP.ObjectPathMethod(this.get_context(), this.get_path(), 'GetChanges', [ query_ ]));
        return $v_0;
    }
}


SP.SitePropertyNames = function() {
}


SP.SiteObjectPropertyNames = function() {
}


SP.SubwebQuery = function() {ULS5Vl:;
    this.$1O_1 = -1;
    this.$u_1 = -1;
    SP.SubwebQuery.initializeBase(this);
}
SP.SubwebQuery.prototype = {
    
    get_webTemplateFilter: function() {ULS5Vl:;
        return this.$1O_1;
    },
    set_webTemplateFilter: function(value) {ULS5Vl:;
        this.$1O_1 = value;
        return value;
    },
    
    get_configurationFilter: function() {ULS5Vl:;
        return this.$u_1;
    },
    set_configurationFilter: function(value) {ULS5Vl:;
        this.$u_1 = value;
        return value;
    },
    
    get_typeId: function() {ULS5Vl:;
        return '{e3a4d63c-876b-4e24-a972-7664437146fe}';
    },
    
    writeToXml: function(writer, serializationContext) {ULS5Vl:;
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = [ 'WebTemplateFilter', 'ConfigurationFilter' ];
        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
    },
    
    initPropertiesFromJson: function(parentNode) {ULS5Vl:;
        var $v_0;
        $v_0 = parentNode.WebTemplateFilter;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1O_1 = ($v_0);
            delete parentNode.WebTemplateFilter;
        }
        $v_0 = parentNode.ConfigurationFilter;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$u_1 = ($v_0);
            delete parentNode.ConfigurationFilter;
        }
    }
}


SP.UsageInfo = function() {ULS5Vl:;
    SP.UsageInfo.initializeBase(this);
}
SP.UsageInfo.prototype = {
    $3M_1: 0,
    $3N_1: 0,
    $33_1: 0,
    $3S_1: 0,
    $3A_1: 0,
    $36_1: 0,
    
    get_storage: function() {ULS5Vl:;
        return this.$3M_1;
    },
    
    get_storagePercentageUsed: function() {ULS5Vl:;
        return this.$3N_1;
    },
    
    get_bandwidth: function() {ULS5Vl:;
        return this.$33_1;
    },
    
    get_visits: function() {ULS5Vl:;
        return this.$3S_1;
    },
    
    get_hits: function() {ULS5Vl:;
        return this.$3A_1;
    },
    
    get_discussionStorage: function() {ULS5Vl:;
        return this.$36_1;
    },
    
    get_typeId: function() {ULS5Vl:;
        return '{7ec28504-35f9-4fcf-a09f-401024417292}';
    },
    
    writeToXml: function(writer, serializationContext) {ULS5Vl:;
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = [ 'Storage', 'StoragePercentageUsed', 'Bandwidth', 'Visits', 'Hits', 'DiscussionStorage' ];
        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
    },
    
    initPropertiesFromJson: function(parentNode) {ULS5Vl:;
        var $v_0;
        $v_0 = parentNode.Storage;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$3M_1 = ($v_0);
            delete parentNode.Storage;
        }
        $v_0 = parentNode.StoragePercentageUsed;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$3N_1 = ($v_0);
            delete parentNode.StoragePercentageUsed;
        }
        $v_0 = parentNode.Bandwidth;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$33_1 = ($v_0);
            delete parentNode.Bandwidth;
        }
        $v_0 = parentNode.Visits;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$3S_1 = ($v_0);
            delete parentNode.Visits;
        }
        $v_0 = parentNode.Hits;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$3A_1 = ($v_0);
            delete parentNode.Hits;
        }
        $v_0 = parentNode.DiscussionStorage;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$36_1 = ($v_0);
            delete parentNode.DiscussionStorage;
        }
    }
}


SP.User = function(Context, ObjectPath) {ULS5Vl:;
    SP.User.initializeBase(this, [ Context, ObjectPath ]);
}
SP.User.prototype = {
    
    $7: function($p0) {
        if ($p0) {
            this.get_objectData().get_properties()['Email'] = $p0.$S_1;
            this.get_objectData().get_properties()['LoginName'] = $p0.$U_1;
            this.get_objectData().get_properties()['Title'] = $p0.$1_1;
        }
    },
    
    get_email: function() {ULS5Vl:;
        this.checkUninitializedProperty('Email');
        return ((this.get_objectData().get_properties()['Email']));
    },
    set_email: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['Email'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Email', value));
        }
        return value;
    },
    
    initPropertiesFromJson: function(parentNode) {ULS5Vl:;
        SP.User.callBaseMethod(this, 'initPropertiesFromJson', [ parentNode ]);
        var $v_0;
        $v_0 = parentNode.Email;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Email'] = ($v_0);
            delete parentNode.Email;
        }
    },
    
    update: function() {ULS5Vl:;
        var $v_0 = new SP.ClientActionInvokeMethod(this, 'Update', null);
        this.get_context().addQuery($v_0);
    }
}


SP.UserPropertyNames = function() {
}


SP.UserCollection = function(Context, ObjectPath) {ULS5Vl:;
    SP.UserCollection.initializeBase(this, [ Context, ObjectPath ]);
}
SP.UserCollection.prototype = {
    
    itemAt: function(index) {ULS5Vl:;
        return this.getItemAtIndex(index);
    },
    
    get_item: function(index) {ULS5Vl:;
        return this.getItemAtIndex(index);
    },
    
    getByLoginName: function(loginName) {ULS5Vl:;
        var $v_0;
        var $v_1 = ((this.get_objectData().get_methodReturnObjects()['GetByLoginName']));
        if (SP.ScriptUtility.isNullOrUndefined($v_1)) {
            $v_1 = {};
            this.get_objectData().get_methodReturnObjects()['GetByLoginName'] = $v_1;
        }
        $v_0 = (($v_1[loginName.toUpperCase()]));
        if (!SP.ScriptUtility.isNullOrUndefined($v_0)) {
            return $v_0;
        }
        $v_0 = new SP.User(this.get_context(), new SP.ObjectPathMethod(this.get_context(), this.get_path(), 'GetByLoginName', [ loginName ]));
        $v_1[loginName.toUpperCase()] = $v_0;
        var $v_2 = new SP.ObjectIdentityQuery($v_0.get_path());
        this.get_context().addQueryIdAndResultObject($v_2.get_id(), $v_0);
        this.get_context().addQuery($v_2);
        return $v_0;
    },
    
    getById: function(id) {ULS5Vl:;
        var $v_0;
        $v_0 = new SP.User(this.get_context(), new SP.ObjectPathMethod(this.get_context(), this.get_path(), 'GetById', [ id ]));
        return $v_0;
    },
    
    getByEmail: function(emailAddress) {ULS5Vl:;
        var $v_0;
        var $v_1 = ((this.get_objectData().get_methodReturnObjects()['GetByEmail']));
        if (SP.ScriptUtility.isNullOrUndefined($v_1)) {
            $v_1 = {};
            this.get_objectData().get_methodReturnObjects()['GetByEmail'] = $v_1;
        }
        $v_0 = (($v_1[emailAddress]));
        if (!SP.ScriptUtility.isNullOrUndefined($v_0)) {
            return $v_0;
        }
        $v_0 = new SP.User(this.get_context(), new SP.ObjectPathMethod(this.get_context(), this.get_path(), 'GetByEmail', [ emailAddress ]));
        $v_1[emailAddress] = $v_0;
        var $v_2 = new SP.ObjectIdentityQuery($v_0.get_path());
        this.get_context().addQueryIdAndResultObject($v_2.get_id(), $v_0);
        this.get_context().addQuery($v_2);
        return $v_0;
    },
    
    remove: function(user) {ULS5Vl:;
        var $v_0 = new SP.ClientActionInvokeMethod(this, 'Remove', [ user ]);
        this.get_context().addQuery($v_0);
        this.removeChild(user);
    },
    
    add: function(parameters) {ULS5Vl:;
        var $v_0;
        $v_0 = new SP.User(this.get_context(), new SP.ObjectPathMethod(this.get_context(), this.get_path(), 'Add', [ parameters ]));
        $v_0.get_path().setPendingReplace();
        var $v_1 = new SP.ObjectIdentityQuery($v_0.get_path());
        this.get_context().addQueryIdAndResultObject($v_1.get_id(), $v_0);
        this.get_context().addQuery($v_1);
        this.addChild($v_0);
        $v_0.$7(parameters);
        return $v_0;
    },
    
    addUser: function(user) {ULS5Vl:;
        var $v_0;
        $v_0 = new SP.User(this.get_context(), new SP.ObjectPathMethod(this.get_context(), this.get_path(), 'AddUser', [ user ]));
        $v_0.get_path().setPendingReplace();
        var $v_1 = new SP.ObjectIdentityQuery($v_0.get_path());
        this.get_context().addQueryIdAndResultObject($v_1.get_id(), $v_0);
        this.get_context().addQuery($v_1);
        this.addChild($v_0);
        return $v_0;
    }
}


SP.UserCreationInformation = function() {ULS5Vl:;
    SP.UserCreationInformation.initializeBase(this);
}
SP.UserCreationInformation.prototype = {
    $U_1: null,
    $1_1: null,
    $S_1: null,
    
    get_loginName: function() {ULS5Vl:;
        return this.$U_1;
    },
    set_loginName: function(value) {ULS5Vl:;
        this.$U_1 = value;
        return value;
    },
    
    get_title: function() {ULS5Vl:;
        return this.$1_1;
    },
    set_title: function(value) {ULS5Vl:;
        this.$1_1 = value;
        return value;
    },
    
    get_email: function() {ULS5Vl:;
        return this.$S_1;
    },
    set_email: function(value) {ULS5Vl:;
        this.$S_1 = value;
        return value;
    },
    
    get_typeId: function() {ULS5Vl:;
        return '{6ecd8af6-bed3-4a74-be76-1ec981b350e1}';
    },
    
    writeToXml: function(writer, serializationContext) {ULS5Vl:;
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = [ 'LoginName', 'Title', 'Email' ];
        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
    },
    
    initPropertiesFromJson: function(parentNode) {ULS5Vl:;
        var $v_0;
        $v_0 = parentNode.LoginName;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$U_1 = ($v_0);
            delete parentNode.LoginName;
        }
        $v_0 = parentNode.Title;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1_1 = ($v_0);
            delete parentNode.Title;
        }
        $v_0 = parentNode.Email;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$S_1 = ($v_0);
            delete parentNode.Email;
        }
    }
}


SP.UserCustomAction = function(Context, ObjectPath) {ULS5Vl:;
    SP.UserCustomAction.initializeBase(this, [ Context, ObjectPath ]);
}
SP.UserCustomAction.prototype = {
    
    get_name: function() {ULS5Vl:;
        this.checkUninitializedProperty('Name');
        return ((this.get_objectData().get_properties()['Name']));
    },
    set_name: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['Name'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Name', value));
        }
        return value;
    },
    
    get_title: function() {ULS5Vl:;
        this.checkUninitializedProperty('Title');
        return ((this.get_objectData().get_properties()['Title']));
    },
    set_title: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['Title'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Title', value));
        }
        return value;
    },
    
    get_description: function() {ULS5Vl:;
        this.checkUninitializedProperty('Description');
        return ((this.get_objectData().get_properties()['Description']));
    },
    set_description: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['Description'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Description', value));
        }
        return value;
    },
    
    get_scope: function() {ULS5Vl:;
        this.checkUninitializedProperty('Scope');
        return ((this.get_objectData().get_properties()['Scope']));
    },
    
    get_sequence: function() {ULS5Vl:;
        this.checkUninitializedProperty('Sequence');
        return ((this.get_objectData().get_properties()['Sequence']));
    },
    set_sequence: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['Sequence'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Sequence', value));
        }
        return value;
    },
    
    get_id: function() {ULS5Vl:;
        this.checkUninitializedProperty('Id');
        return ((this.get_objectData().get_properties()['Id']));
    },
    
    get_imageUrl: function() {ULS5Vl:;
        this.checkUninitializedProperty('ImageUrl');
        return ((this.get_objectData().get_properties()['ImageUrl']));
    },
    set_imageUrl: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['ImageUrl'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'ImageUrl', value));
        }
        return value;
    },
    
    get_registrationType: function() {ULS5Vl:;
        this.checkUninitializedProperty('RegistrationType');
        return ((this.get_objectData().get_properties()['RegistrationType']));
    },
    set_registrationType: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['RegistrationType'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'RegistrationType', value));
        }
        return value;
    },
    
    get_registrationId: function() {ULS5Vl:;
        this.checkUninitializedProperty('RegistrationId');
        return ((this.get_objectData().get_properties()['RegistrationId']));
    },
    set_registrationId: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['RegistrationId'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'RegistrationId', value));
        }
        return value;
    },
    
    get_url: function() {ULS5Vl:;
        this.checkUninitializedProperty('Url');
        return ((this.get_objectData().get_properties()['Url']));
    },
    set_url: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['Url'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Url', value));
        }
        return value;
    },
    
    get_location: function() {ULS5Vl:;
        this.checkUninitializedProperty('Location');
        return ((this.get_objectData().get_properties()['Location']));
    },
    set_location: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['Location'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Location', value));
        }
        return value;
    },
    
    get_scriptSrc: function() {ULS5Vl:;
        this.checkUninitializedProperty('ScriptSrc');
        return ((this.get_objectData().get_properties()['ScriptSrc']));
    },
    set_scriptSrc: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['ScriptSrc'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'ScriptSrc', value));
        }
        return value;
    },
    
    get_scriptBlock: function() {ULS5Vl:;
        this.checkUninitializedProperty('ScriptBlock');
        return ((this.get_objectData().get_properties()['ScriptBlock']));
    },
    set_scriptBlock: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['ScriptBlock'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'ScriptBlock', value));
        }
        return value;
    },
    
    get_group: function() {ULS5Vl:;
        this.checkUninitializedProperty('Group');
        return ((this.get_objectData().get_properties()['Group']));
    },
    set_group: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['Group'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Group', value));
        }
        return value;
    },
    
    get_commandUIExtension: function() {ULS5Vl:;
        this.checkUninitializedProperty('CommandUIExtension');
        return ((this.get_objectData().get_properties()['CommandUIExtension']));
    },
    set_commandUIExtension: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['CommandUIExtension'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'CommandUIExtension', value));
        }
        return value;
    },
    
    get_versionOfUserCustomAction: function() {ULS5Vl:;
        this.checkUninitializedProperty('VersionOfUserCustomAction');
        return ((this.get_objectData().get_properties()['VersionOfUserCustomAction']));
    },
    
    get_rights: function() {ULS5Vl:;
        this.checkUninitializedProperty('Rights');
        return ((this.get_objectData().get_properties()['Rights']));
    },
    set_rights: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['Rights'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Rights', value));
        }
        return value;
    },
    
    initPropertiesFromJson: function(parentNode) {ULS5Vl:;
        SP.UserCustomAction.callBaseMethod(this, 'initPropertiesFromJson', [ parentNode ]);
        var $v_0;
        $v_0 = parentNode.Name;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Name'] = ($v_0);
            delete parentNode.Name;
        }
        $v_0 = parentNode.Title;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Title'] = ($v_0);
            delete parentNode.Title;
        }
        $v_0 = parentNode.Description;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Description'] = ($v_0);
            delete parentNode.Description;
        }
        $v_0 = parentNode.Scope;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Scope'] = ($v_0);
            delete parentNode.Scope;
        }
        $v_0 = parentNode.Sequence;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Sequence'] = ($v_0);
            delete parentNode.Sequence;
        }
        $v_0 = parentNode.Id;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Id'] = ($v_0);
            delete parentNode.Id;
        }
        $v_0 = parentNode.ImageUrl;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ImageUrl'] = ($v_0);
            delete parentNode.ImageUrl;
        }
        $v_0 = parentNode.RegistrationType;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['RegistrationType'] = ($v_0);
            delete parentNode.RegistrationType;
        }
        $v_0 = parentNode.RegistrationId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['RegistrationId'] = ($v_0);
            delete parentNode.RegistrationId;
        }
        $v_0 = parentNode.Url;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Url'] = ($v_0);
            delete parentNode.Url;
        }
        $v_0 = parentNode.Location;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Location'] = ($v_0);
            delete parentNode.Location;
        }
        $v_0 = parentNode.ScriptSrc;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ScriptSrc'] = ($v_0);
            delete parentNode.ScriptSrc;
        }
        $v_0 = parentNode.ScriptBlock;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ScriptBlock'] = ($v_0);
            delete parentNode.ScriptBlock;
        }
        $v_0 = parentNode.Group;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Group'] = ($v_0);
            delete parentNode.Group;
        }
        $v_0 = parentNode.CommandUIExtension;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['CommandUIExtension'] = ($v_0);
            delete parentNode.CommandUIExtension;
        }
        $v_0 = parentNode.VersionOfUserCustomAction;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['VersionOfUserCustomAction'] = ($v_0);
            delete parentNode.VersionOfUserCustomAction;
        }
        $v_0 = parentNode.Rights;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Rights'] = ((SP.DataConvert.fixupType(this.get_context(), $v_0)));
            delete parentNode.Rights;
        }
    },
    
    update: function() {ULS5Vl:;
        var $v_0 = new SP.ClientActionInvokeMethod(this, 'Update', null);
        this.get_context().addQuery($v_0);
        this.refreshLoad();
    },
    
    deleteObject: function() {ULS5Vl:;
        var $v_0 = new SP.ClientActionInvokeMethod(this, 'DeleteObject', null);
        this.get_context().addQuery($v_0);
        this.removeFromParentCollection();
    }
}


SP.UserCustomActionPropertyNames = function() {
}


SP.UserCustomActionCollection = function(Context, ObjectPath) {ULS5Vl:;
    SP.UserCustomActionCollection.initializeBase(this, [ Context, ObjectPath ]);
}
SP.UserCustomActionCollection.prototype = {
    
    itemAt: function(index) {ULS5Vl:;
        return this.getItemAtIndex(index);
    },
    
    get_item: function(index) {ULS5Vl:;
        return this.getItemAtIndex(index);
    },
    
    getById: function(userCustomActionId) {ULS5Vl:;
        var $v_0;
        var $v_1 = ((this.get_objectData().get_methodReturnObjects()['GetById']));
        if (SP.ScriptUtility.isNullOrUndefined($v_1)) {
            $v_1 = {};
            this.get_objectData().get_methodReturnObjects()['GetById'] = $v_1;
        }
        $v_0 = (($v_1[userCustomActionId.toString()]));
        if (!SP.ScriptUtility.isNullOrUndefined($v_0)) {
            return $v_0;
        }
        $v_0 = new SP.UserCustomAction(this.get_context(), new SP.ObjectPathMethod(this.get_context(), this.get_path(), 'GetById', [ userCustomActionId ]));
        $v_1[userCustomActionId.toString()] = $v_0;
        return $v_0;
    },
    
    clear: function() {ULS5Vl:;
        var $v_0 = new SP.ClientActionInvokeMethod(this, 'Clear', null);
        this.get_context().addQuery($v_0);
    },
    
    add: function() {ULS5Vl:;
        var $v_0;
        $v_0 = new SP.UserCustomAction(this.get_context(), new SP.ObjectPathMethod(this.get_context(), this.get_path(), 'Add', null));
        this.addChild($v_0);
        return $v_0;
    }
}


SP.View = function(Context, ObjectPath) {ULS5Vl:;
    SP.View.initializeBase(this, [ Context, ObjectPath ]);
}
SP.View.prototype = {
    
    $7: function($p0) {
        if ($p0) {
            this.get_objectData().get_properties()['Title'] = $p0.$1_1;
            this.get_objectData().get_properties()['Paged'] = $p0.$19_1;
        }
    },
    
    get_viewFields: function() {ULS5Vl:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['ViewFields']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.ViewFieldCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'ViewFields'));
            this.get_objectData().get_clientObjectProperties()['ViewFields'] = $v_0;
        }
        return $v_0;
    },
    
    get_id: function() {ULS5Vl:;
        this.checkUninitializedProperty('Id');
        return ((this.get_objectData().get_properties()['Id']));
    },
    
    get_title: function() {ULS5Vl:;
        this.checkUninitializedProperty('Title');
        return ((this.get_objectData().get_properties()['Title']));
    },
    set_title: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['Title'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Title', value));
        }
        return value;
    },
    
    get_viewType: function() {ULS5Vl:;
        this.checkUninitializedProperty('ViewType');
        return ((this.get_objectData().get_properties()['ViewType']));
    },
    
    get_imageUrl: function() {ULS5Vl:;
        this.checkUninitializedProperty('ImageUrl');
        return ((this.get_objectData().get_properties()['ImageUrl']));
    },
    
    get_moderationType: function() {ULS5Vl:;
        this.checkUninitializedProperty('ModerationType');
        return ((this.get_objectData().get_properties()['ModerationType']));
    },
    
    get_serverRelativeUrl: function() {ULS5Vl:;
        this.checkUninitializedProperty('ServerRelativeUrl');
        return ((this.get_objectData().get_properties()['ServerRelativeUrl']));
    },
    
    get_hidden: function() {ULS5Vl:;
        this.checkUninitializedProperty('Hidden');
        return ((this.get_objectData().get_properties()['Hidden']));
    },
    set_hidden: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['Hidden'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Hidden', value));
        }
        return value;
    },
    
    get_readOnlyView: function() {ULS5Vl:;
        this.checkUninitializedProperty('ReadOnlyView');
        return ((this.get_objectData().get_properties()['ReadOnlyView']));
    },
    
    get_requiresClientIntegration: function() {ULS5Vl:;
        this.checkUninitializedProperty('RequiresClientIntegration');
        return ((this.get_objectData().get_properties()['RequiresClientIntegration']));
    },
    
    get_editorModified: function() {ULS5Vl:;
        this.checkUninitializedProperty('EditorModified');
        return ((this.get_objectData().get_properties()['EditorModified']));
    },
    set_editorModified: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['EditorModified'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'EditorModified', value));
        }
        return value;
    },
    
    get_threaded: function() {ULS5Vl:;
        this.checkUninitializedProperty('Threaded');
        return ((this.get_objectData().get_properties()['Threaded']));
    },
    
    get_scope: function() {ULS5Vl:;
        this.checkUninitializedProperty('Scope');
        return ((this.get_objectData().get_properties()['Scope']));
    },
    set_scope: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['Scope'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Scope', value));
        }
        return value;
    },
    
    get_includeRootFolder: function() {ULS5Vl:;
        this.checkUninitializedProperty('IncludeRootFolder');
        return ((this.get_objectData().get_properties()['IncludeRootFolder']));
    },
    set_includeRootFolder: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['IncludeRootFolder'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'IncludeRootFolder', value));
        }
        return value;
    },
    
    get_defaultView: function() {ULS5Vl:;
        this.checkUninitializedProperty('DefaultView');
        return ((this.get_objectData().get_properties()['DefaultView']));
    },
    set_defaultView: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['DefaultView'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'DefaultView', value));
        }
        return value;
    },
    
    get_mobileView: function() {ULS5Vl:;
        this.checkUninitializedProperty('MobileView');
        return ((this.get_objectData().get_properties()['MobileView']));
    },
    set_mobileView: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['MobileView'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'MobileView', value));
        }
        return value;
    },
    
    get_mobileDefaultView: function() {ULS5Vl:;
        this.checkUninitializedProperty('MobileDefaultView');
        return ((this.get_objectData().get_properties()['MobileDefaultView']));
    },
    set_mobileDefaultView: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['MobileDefaultView'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'MobileDefaultView', value));
        }
        return value;
    },
    
    get_contentTypeId: function() {ULS5Vl:;
        this.checkUninitializedProperty('ContentTypeId');
        return ((this.get_objectData().get_properties()['ContentTypeId']));
    },
    set_contentTypeId: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['ContentTypeId'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'ContentTypeId', value));
        }
        return value;
    },
    
    get_defaultViewForContentType: function() {ULS5Vl:;
        this.checkUninitializedProperty('DefaultViewForContentType');
        return ((this.get_objectData().get_properties()['DefaultViewForContentType']));
    },
    set_defaultViewForContentType: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['DefaultViewForContentType'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'DefaultViewForContentType', value));
        }
        return value;
    },
    
    get_personalView: function() {ULS5Vl:;
        this.checkUninitializedProperty('PersonalView');
        return ((this.get_objectData().get_properties()['PersonalView']));
    },
    
    get_orderedView: function() {ULS5Vl:;
        this.checkUninitializedProperty('OrderedView');
        return ((this.get_objectData().get_properties()['OrderedView']));
    },
    
    get_viewQuery: function() {ULS5Vl:;
        this.checkUninitializedProperty('ViewQuery');
        return ((this.get_objectData().get_properties()['ViewQuery']));
    },
    set_viewQuery: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['ViewQuery'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'ViewQuery', value));
        }
        return value;
    },
    
    get_method: function() {ULS5Vl:;
        this.checkUninitializedProperty('Method');
        return ((this.get_objectData().get_properties()['Method']));
    },
    set_method: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['Method'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Method', value));
        }
        return value;
    },
    
    get_viewProjectedFields: function() {ULS5Vl:;
        this.checkUninitializedProperty('ViewProjectedFields');
        return ((this.get_objectData().get_properties()['ViewProjectedFields']));
    },
    set_viewProjectedFields: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['ViewProjectedFields'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'ViewProjectedFields', value));
        }
        return value;
    },
    
    get_viewJoins: function() {ULS5Vl:;
        this.checkUninitializedProperty('ViewJoins');
        return ((this.get_objectData().get_properties()['ViewJoins']));
    },
    set_viewJoins: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['ViewJoins'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'ViewJoins', value));
        }
        return value;
    },
    
    get_rowLimit: function() {ULS5Vl:;
        this.checkUninitializedProperty('RowLimit');
        return ((this.get_objectData().get_properties()['RowLimit']));
    },
    set_rowLimit: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['RowLimit'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'RowLimit', value));
        }
        return value;
    },
    
    get_paged: function() {ULS5Vl:;
        this.checkUninitializedProperty('Paged');
        return ((this.get_objectData().get_properties()['Paged']));
    },
    set_paged: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['Paged'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Paged', value));
        }
        return value;
    },
    
    get_toolbar: function() {ULS5Vl:;
        this.checkUninitializedProperty('Toolbar');
        return ((this.get_objectData().get_properties()['Toolbar']));
    },
    set_toolbar: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['Toolbar'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Toolbar', value));
        }
        return value;
    },
    
    get_toolbarTemplateName: function() {ULS5Vl:;
        this.checkUninitializedProperty('ToolbarTemplateName');
        return ((this.get_objectData().get_properties()['ToolbarTemplateName']));
    },
    
    get_formats: function() {ULS5Vl:;
        this.checkUninitializedProperty('Formats');
        return ((this.get_objectData().get_properties()['Formats']));
    },
    set_formats: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['Formats'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Formats', value));
        }
        return value;
    },
    
    get_aggregations: function() {ULS5Vl:;
        this.checkUninitializedProperty('Aggregations');
        return ((this.get_objectData().get_properties()['Aggregations']));
    },
    set_aggregations: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['Aggregations'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Aggregations', value));
        }
        return value;
    },
    
    get_aggregationsStatus: function() {ULS5Vl:;
        this.checkUninitializedProperty('AggregationsStatus');
        return ((this.get_objectData().get_properties()['AggregationsStatus']));
    },
    set_aggregationsStatus: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['AggregationsStatus'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'AggregationsStatus', value));
        }
        return value;
    },
    
    get_htmlSchemaXml: function() {ULS5Vl:;
        this.checkUninitializedProperty('HtmlSchemaXml');
        return ((this.get_objectData().get_properties()['HtmlSchemaXml']));
    },
    
    get_styleId: function() {ULS5Vl:;
        this.checkUninitializedProperty('StyleId');
        return ((this.get_objectData().get_properties()['StyleId']));
    },
    
    get_baseViewId: function() {ULS5Vl:;
        this.checkUninitializedProperty('BaseViewId');
        return ((this.get_objectData().get_properties()['BaseViewId']));
    },
    
    get_viewData: function() {ULS5Vl:;
        this.checkUninitializedProperty('ViewData');
        return ((this.get_objectData().get_properties()['ViewData']));
    },
    set_viewData: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['ViewData'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'ViewData', value));
        }
        return value;
    },
    
    initPropertiesFromJson: function(parentNode) {ULS5Vl:;
        SP.View.callBaseMethod(this, 'initPropertiesFromJson', [ parentNode ]);
        var $v_0;
        $v_0 = parentNode.ViewFields;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_viewFields().fromJson($v_0);
            delete parentNode.ViewFields;
        }
        $v_0 = parentNode.Id;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Id'] = ($v_0);
            delete parentNode.Id;
        }
        $v_0 = parentNode.Title;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Title'] = ($v_0);
            delete parentNode.Title;
        }
        $v_0 = parentNode.ViewType;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ViewType'] = ($v_0);
            delete parentNode.ViewType;
        }
        $v_0 = parentNode.ImageUrl;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ImageUrl'] = ($v_0);
            delete parentNode.ImageUrl;
        }
        $v_0 = parentNode.ModerationType;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ModerationType'] = ($v_0);
            delete parentNode.ModerationType;
        }
        $v_0 = parentNode.ServerRelativeUrl;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ServerRelativeUrl'] = ($v_0);
            delete parentNode.ServerRelativeUrl;
        }
        $v_0 = parentNode.Hidden;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Hidden'] = ($v_0);
            delete parentNode.Hidden;
        }
        $v_0 = parentNode.ReadOnlyView;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ReadOnlyView'] = ($v_0);
            delete parentNode.ReadOnlyView;
        }
        $v_0 = parentNode.RequiresClientIntegration;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['RequiresClientIntegration'] = ($v_0);
            delete parentNode.RequiresClientIntegration;
        }
        $v_0 = parentNode.EditorModified;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['EditorModified'] = ($v_0);
            delete parentNode.EditorModified;
        }
        $v_0 = parentNode.Threaded;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Threaded'] = ($v_0);
            delete parentNode.Threaded;
        }
        $v_0 = parentNode.Scope;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Scope'] = ($v_0);
            delete parentNode.Scope;
        }
        $v_0 = parentNode.IncludeRootFolder;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['IncludeRootFolder'] = ($v_0);
            delete parentNode.IncludeRootFolder;
        }
        $v_0 = parentNode.DefaultView;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['DefaultView'] = ($v_0);
            delete parentNode.DefaultView;
        }
        $v_0 = parentNode.MobileView;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['MobileView'] = ($v_0);
            delete parentNode.MobileView;
        }
        $v_0 = parentNode.MobileDefaultView;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['MobileDefaultView'] = ($v_0);
            delete parentNode.MobileDefaultView;
        }
        $v_0 = parentNode.ContentTypeId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ContentTypeId'] = ((SP.DataConvert.fixupType(this.get_context(), $v_0)));
            delete parentNode.ContentTypeId;
        }
        $v_0 = parentNode.DefaultViewForContentType;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['DefaultViewForContentType'] = ($v_0);
            delete parentNode.DefaultViewForContentType;
        }
        $v_0 = parentNode.PersonalView;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['PersonalView'] = ($v_0);
            delete parentNode.PersonalView;
        }
        $v_0 = parentNode.OrderedView;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['OrderedView'] = ($v_0);
            delete parentNode.OrderedView;
        }
        $v_0 = parentNode.ViewQuery;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ViewQuery'] = ($v_0);
            delete parentNode.ViewQuery;
        }
        $v_0 = parentNode.Method;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Method'] = ($v_0);
            delete parentNode.Method;
        }
        $v_0 = parentNode.ViewProjectedFields;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ViewProjectedFields'] = ($v_0);
            delete parentNode.ViewProjectedFields;
        }
        $v_0 = parentNode.ViewJoins;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ViewJoins'] = ($v_0);
            delete parentNode.ViewJoins;
        }
        $v_0 = parentNode.RowLimit;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['RowLimit'] = ($v_0);
            delete parentNode.RowLimit;
        }
        $v_0 = parentNode.Paged;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Paged'] = ($v_0);
            delete parentNode.Paged;
        }
        $v_0 = parentNode.Toolbar;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Toolbar'] = ($v_0);
            delete parentNode.Toolbar;
        }
        $v_0 = parentNode.ToolbarTemplateName;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ToolbarTemplateName'] = ($v_0);
            delete parentNode.ToolbarTemplateName;
        }
        $v_0 = parentNode.Formats;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Formats'] = ($v_0);
            delete parentNode.Formats;
        }
        $v_0 = parentNode.Aggregations;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Aggregations'] = ($v_0);
            delete parentNode.Aggregations;
        }
        $v_0 = parentNode.AggregationsStatus;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['AggregationsStatus'] = ($v_0);
            delete parentNode.AggregationsStatus;
        }
        $v_0 = parentNode.HtmlSchemaXml;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['HtmlSchemaXml'] = ($v_0);
            delete parentNode.HtmlSchemaXml;
        }
        $v_0 = parentNode.StyleId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['StyleId'] = ($v_0);
            delete parentNode.StyleId;
        }
        $v_0 = parentNode.BaseViewId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['BaseViewId'] = ($v_0);
            delete parentNode.BaseViewId;
        }
        $v_0 = parentNode.ViewData;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ViewData'] = ($v_0);
            delete parentNode.ViewData;
        }
    },
    
    renderAsHtml: function() {ULS5Vl:;
        var $v_0;
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'RenderAsHtml', null);
        this.get_context().addQuery($v_1);
        $v_0 = new SP.StringResult();
        this.get_context().addQueryIdAndResultObject($v_1.get_id(), $v_0);
        return $v_0;
    },
    
    update: function() {ULS5Vl:;
        var $v_0 = new SP.ClientActionInvokeMethod(this, 'Update', null);
        this.get_context().addQuery($v_0);
    },
    
    deleteObject: function() {ULS5Vl:;
        var $v_0 = new SP.ClientActionInvokeMethod(this, 'DeleteObject', null);
        this.get_context().addQuery($v_0);
        this.removeFromParentCollection();
    }
}


SP.ViewPropertyNames = function() {
}


SP.ViewObjectPropertyNames = function() {
}


SP.ViewCollection = function(Context, ObjectPath) {ULS5Vl:;
    SP.ViewCollection.initializeBase(this, [ Context, ObjectPath ]);
}
SP.ViewCollection.prototype = {
    
    itemAt: function(index) {ULS5Vl:;
        return this.getItemAtIndex(index);
    },
    
    get_item: function(index) {ULS5Vl:;
        return this.getItemAtIndex(index);
    },
    
    getByTitle: function(strTitle) {ULS5Vl:;
        var $v_0;
        var $v_1 = ((this.get_objectData().get_methodReturnObjects()['GetByTitle']));
        if (SP.ScriptUtility.isNullOrUndefined($v_1)) {
            $v_1 = {};
            this.get_objectData().get_methodReturnObjects()['GetByTitle'] = $v_1;
        }
        $v_0 = (($v_1[strTitle]));
        if (!SP.ScriptUtility.isNullOrUndefined($v_0)) {
            return $v_0;
        }
        $v_0 = new SP.View(this.get_context(), new SP.ObjectPathMethod(this.get_context(), this.get_path(), 'GetByTitle', [ strTitle ]));
        $v_1[strTitle] = $v_0;
        return $v_0;
    },
    
    getById: function(guidId) {ULS5Vl:;
        var $v_0;
        var $v_1 = ((this.get_objectData().get_methodReturnObjects()['GetById']));
        if (SP.ScriptUtility.isNullOrUndefined($v_1)) {
            $v_1 = {};
            this.get_objectData().get_methodReturnObjects()['GetById'] = $v_1;
        }
        $v_0 = (($v_1[guidId.toString()]));
        if (!SP.ScriptUtility.isNullOrUndefined($v_0)) {
            return $v_0;
        }
        $v_0 = new SP.View(this.get_context(), new SP.ObjectPathMethod(this.get_context(), this.get_path(), 'GetById', [ guidId ]));
        $v_1[guidId.toString()] = $v_0;
        return $v_0;
    },
    
    add: function(parameters) {ULS5Vl:;
        var $v_0;
        $v_0 = new SP.View(this.get_context(), new SP.ObjectPathMethod(this.get_context(), this.get_path(), 'Add', [ parameters ]));
        $v_0.get_path().setPendingReplace();
        var $v_1 = new SP.ObjectIdentityQuery($v_0.get_path());
        this.get_context().addQueryIdAndResultObject($v_1.get_id(), $v_0);
        this.get_context().addQuery($v_1);
        this.addChild($v_0);
        $v_0.$7(parameters);
        return $v_0;
    }
}


SP.ViewCreationInformation = function() {ULS5Vl:;
    SP.ViewCreationInformation.initializeBase(this);
}
SP.ViewCreationInformation.prototype = {
    $1_1: null,
    $2K_1: null,
    $2B_1: null,
    $2E_1: 0,
    $19_1: false,
    $2F_1: false,
    $2M_1: 0,
    $29_1: false,
    
    get_title: function() {ULS5Vl:;
        return this.$1_1;
    },
    set_title: function(value) {ULS5Vl:;
        this.$1_1 = value;
        return value;
    },
    
    get_viewFields: function() {ULS5Vl:;
        return this.$2K_1;
    },
    set_viewFields: function(value) {ULS5Vl:;
        this.$2K_1 = value;
        return value;
    },
    
    get_query: function() {ULS5Vl:;
        return this.$2B_1;
    },
    set_query: function(value) {ULS5Vl:;
        this.$2B_1 = value;
        return value;
    },
    
    get_rowLimit: function() {ULS5Vl:;
        return this.$2E_1;
    },
    set_rowLimit: function(value) {ULS5Vl:;
        this.$2E_1 = value;
        return value;
    },
    
    get_paged: function() {ULS5Vl:;
        return this.$19_1;
    },
    set_paged: function(value) {ULS5Vl:;
        this.$19_1 = value;
        return value;
    },
    
    get_setAsDefaultView: function() {ULS5Vl:;
        return this.$2F_1;
    },
    set_setAsDefaultView: function(value) {ULS5Vl:;
        this.$2F_1 = value;
        return value;
    },
    
    get_viewTypeKind: function() {ULS5Vl:;
        return this.$2M_1;
    },
    set_viewTypeKind: function(value) {ULS5Vl:;
        this.$2M_1 = value;
        return value;
    },
    
    get_personalView: function() {ULS5Vl:;
        return this.$29_1;
    },
    set_personalView: function(value) {ULS5Vl:;
        this.$29_1 = value;
        return value;
    },
    
    get_typeId: function() {ULS5Vl:;
        return '{a3547807-7266-42f3-b055-afa6e840e458}';
    },
    
    writeToXml: function(writer, serializationContext) {ULS5Vl:;
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = [ 'Title', 'ViewFields', 'Query', 'RowLimit', 'Paged', 'SetAsDefaultView', 'ViewTypeKind', 'PersonalView' ];
        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
    },
    
    initPropertiesFromJson: function(parentNode) {ULS5Vl:;
        var $v_0;
        $v_0 = parentNode.Title;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1_1 = ($v_0);
            delete parentNode.Title;
        }
        $v_0 = parentNode.ViewFields;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$2K_1 = ($v_0);
            delete parentNode.ViewFields;
        }
        $v_0 = parentNode.Query;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$2B_1 = ($v_0);
            delete parentNode.Query;
        }
        $v_0 = parentNode.RowLimit;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$2E_1 = ($v_0);
            delete parentNode.RowLimit;
        }
        $v_0 = parentNode.Paged;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$19_1 = ($v_0);
            delete parentNode.Paged;
        }
        $v_0 = parentNode.SetAsDefaultView;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$2F_1 = ($v_0);
            delete parentNode.SetAsDefaultView;
        }
        $v_0 = parentNode.ViewTypeKind;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$2M_1 = ($v_0);
            delete parentNode.ViewTypeKind;
        }
        $v_0 = parentNode.PersonalView;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$29_1 = ($v_0);
            delete parentNode.PersonalView;
        }
    }
}


SP.ViewFieldCollection = function(Context, ObjectPath) {ULS5Vl:;
    SP.ViewFieldCollection.initializeBase(this, [ Context, ObjectPath ]);
}
SP.ViewFieldCollection.prototype = {
    
    itemAt: function(index) {ULS5Vl:;
        return this.getItemAtIndex(index);
    },
    
    get_item: function(index) {ULS5Vl:;
        return this.getItemAtIndex(index);
    },
    
    $3z_2: function($p0) {
        Array.add(this.get_data(), $p0);
    },
    
    $47_2: function($p0) {
        Array.remove(this.get_data(), $p0);
    },
    
    $3U_2: function() {ULS5Vl:;
        var $v_0 = this.get_data();
        while ($v_0.length > 0) {
            Array.removeAt($v_0, $v_0.length - 1);
        }
    },
    
    get_schemaXml: function() {ULS5Vl:;
        this.checkUninitializedProperty('SchemaXml');
        return ((this.get_objectData().get_properties()['SchemaXml']));
    },
    
    initPropertiesFromJson: function(parentNode) {ULS5Vl:;
        SP.ViewFieldCollection.callBaseMethod(this, 'initPropertiesFromJson', [ parentNode ]);
        var $v_0;
        $v_0 = parentNode.SchemaXml;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['SchemaXml'] = ($v_0);
            delete parentNode.SchemaXml;
        }
    },
    
    moveFieldTo: function(field, index) {ULS5Vl:;
        var $v_0 = new SP.ClientActionInvokeMethod(this, 'MoveFieldTo', [ field, index ]);
        this.get_context().addQuery($v_0);
    },
    
    add: function(strField) {ULS5Vl:;
        var $v_0 = new SP.ClientActionInvokeMethod(this, 'Add', [ strField ]);
        this.get_context().addQuery($v_0);
        this.$3z_2(strField);
    },
    
    remove: function(strField) {ULS5Vl:;
        var $v_0 = new SP.ClientActionInvokeMethod(this, 'Remove', [ strField ]);
        this.get_context().addQuery($v_0);
        this.$47_2(strField);
    },
    
    removeAll: function() {ULS5Vl:;
        var $v_0 = new SP.ClientActionInvokeMethod(this, 'RemoveAll', null);
        this.get_context().addQuery($v_0);
        this.$3U_2();
    }
}


SP.ViewFieldCollectionPropertyNames = function() {
}


SP.Web = function(Context, ObjectPath) {ULS5Vl:;
    SP.Web.initializeBase(this, [ Context, ObjectPath ]);
}
SP.Web.prototype = {
    
    $7: function($p0) {
        if ($p0) {
            this.get_objectData().get_properties()['Description'] = $p0.$2_1;
            this.get_objectData().get_properties()['Title'] = $p0.$1_1;
        }
    },
    
    get_lists: function() {ULS5Vl:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['Lists']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.ListCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'Lists'));
            this.get_objectData().get_clientObjectProperties()['Lists'] = $v_0;
        }
        return $v_0;
    },
    
    get_rootFolder: function() {ULS5Vl:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['RootFolder']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.Folder(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'RootFolder'));
            this.get_objectData().get_clientObjectProperties()['RootFolder'] = $v_0;
        }
        return $v_0;
    },
    
    get_folders: function() {ULS5Vl:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['Folders']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.FolderCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'Folders'));
            this.get_objectData().get_clientObjectProperties()['Folders'] = $v_0;
        }
        return $v_0;
    },
    
    get_webs: function() {ULS5Vl:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['Webs']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.WebCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'Webs'));
            this.get_objectData().get_clientObjectProperties()['Webs'] = $v_0;
        }
        return $v_0;
    },
    
    get_features: function() {ULS5Vl:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['Features']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.FeatureCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'Features'));
            this.get_objectData().get_clientObjectProperties()['Features'] = $v_0;
        }
        return $v_0;
    },
    
    get_workflowTemplates: function() {ULS5Vl:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['WorkflowTemplates']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.Workflow.WorkflowTemplateCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'WorkflowTemplates'));
            this.get_objectData().get_clientObjectProperties()['WorkflowTemplates'] = $v_0;
        }
        return $v_0;
    },
    
    get_workflowAssociations: function() {ULS5Vl:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['WorkflowAssociations']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.Workflow.WorkflowAssociationCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'WorkflowAssociations'));
            this.get_objectData().get_clientObjectProperties()['WorkflowAssociations'] = $v_0;
        }
        return $v_0;
    },
    
    get_listTemplates: function() {ULS5Vl:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['ListTemplates']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.ListTemplateCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'ListTemplates'));
            this.get_objectData().get_clientObjectProperties()['ListTemplates'] = $v_0;
        }
        return $v_0;
    },
    
    get_currentUser: function() {ULS5Vl:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['CurrentUser']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.User(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'CurrentUser'));
            this.get_objectData().get_clientObjectProperties()['CurrentUser'] = $v_0;
        }
        return $v_0;
    },
    
    get_description: function() {ULS5Vl:;
        this.checkUninitializedProperty('Description');
        return ((this.get_objectData().get_properties()['Description']));
    },
    set_description: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['Description'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Description', value));
        }
        return value;
    },
    
    get_created: function() {ULS5Vl:;
        this.checkUninitializedProperty('Created');
        return ((this.get_objectData().get_properties()['Created']));
    },
    
    get_lastItemModifiedDate: function() {ULS5Vl:;
        this.checkUninitializedProperty('LastItemModifiedDate');
        return ((this.get_objectData().get_properties()['LastItemModifiedDate']));
    },
    
    get_recycleBinEnabled: function() {ULS5Vl:;
        this.checkUninitializedProperty('RecycleBinEnabled');
        return ((this.get_objectData().get_properties()['RecycleBinEnabled']));
    },
    
    get_title: function() {ULS5Vl:;
        this.checkUninitializedProperty('Title');
        return ((this.get_objectData().get_properties()['Title']));
    },
    set_title: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['Title'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Title', value));
        }
        return value;
    },
    
    get_serverRelativeUrl: function() {ULS5Vl:;
        this.checkUninitializedProperty('ServerRelativeUrl');
        return ((this.get_objectData().get_properties()['ServerRelativeUrl']));
    },
    set_serverRelativeUrl: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['ServerRelativeUrl'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'ServerRelativeUrl', value));
        }
        return value;
    },
    
    get_id: function() {ULS5Vl:;
        this.checkUninitializedProperty('Id');
        return ((this.get_objectData().get_properties()['Id']));
    },
    
    get_allProperties: function() {ULS5Vl:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['AllProperties']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.PropertyValues(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'AllProperties'));
            this.get_objectData().get_clientObjectProperties()['AllProperties'] = $v_0;
        }
        return $v_0;
    },
    
    get_syndicationEnabled: function() {ULS5Vl:;
        this.checkUninitializedProperty('SyndicationEnabled');
        return ((this.get_objectData().get_properties()['SyndicationEnabled']));
    },
    set_syndicationEnabled: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['SyndicationEnabled'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'SyndicationEnabled', value));
        }
        return value;
    },
    
    get_allowRssFeeds: function() {ULS5Vl:;
        this.checkUninitializedProperty('AllowRssFeeds');
        return ((this.get_objectData().get_properties()['AllowRssFeeds']));
    },
    
    get_quickLaunchEnabled: function() {ULS5Vl:;
        this.checkUninitializedProperty('QuickLaunchEnabled');
        return ((this.get_objectData().get_properties()['QuickLaunchEnabled']));
    },
    set_quickLaunchEnabled: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['QuickLaunchEnabled'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'QuickLaunchEnabled', value));
        }
        return value;
    },
    
    get_treeViewEnabled: function() {ULS5Vl:;
        this.checkUninitializedProperty('TreeViewEnabled');
        return ((this.get_objectData().get_properties()['TreeViewEnabled']));
    },
    set_treeViewEnabled: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['TreeViewEnabled'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'TreeViewEnabled', value));
        }
        return value;
    },
    
    get_language: function() {ULS5Vl:;
        this.checkUninitializedProperty('Language');
        return ((this.get_objectData().get_properties()['Language']));
    },
    
    get_navigation: function() {ULS5Vl:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['Navigation']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.Navigation(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'Navigation'));
            this.get_objectData().get_clientObjectProperties()['Navigation'] = $v_0;
        }
        return $v_0;
    },
    
    get_contentTypes: function() {ULS5Vl:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['ContentTypes']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.ContentTypeCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'ContentTypes'));
            this.get_objectData().get_clientObjectProperties()['ContentTypes'] = $v_0;
        }
        return $v_0;
    },
    
    get_availableContentTypes: function() {ULS5Vl:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['AvailableContentTypes']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.ContentTypeCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'AvailableContentTypes'));
            this.get_objectData().get_clientObjectProperties()['AvailableContentTypes'] = $v_0;
        }
        return $v_0;
    },
    
    get_fields: function() {ULS5Vl:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['Fields']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.FieldCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'Fields'));
            this.get_objectData().get_clientObjectProperties()['Fields'] = $v_0;
        }
        return $v_0;
    },
    
    get_availableFields: function() {ULS5Vl:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['AvailableFields']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.FieldCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'AvailableFields'));
            this.get_objectData().get_clientObjectProperties()['AvailableFields'] = $v_0;
        }
        return $v_0;
    },
    
    get_userCustomActions: function() {ULS5Vl:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['UserCustomActions']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.UserCustomActionCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'UserCustomActions'));
            this.get_objectData().get_clientObjectProperties()['UserCustomActions'] = $v_0;
        }
        return $v_0;
    },
    
    get_uiVersion: function() {ULS5Vl:;
        this.checkUninitializedProperty('UIVersion');
        return ((this.get_objectData().get_properties()['UIVersion']));
    },
    set_uiVersion: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['UIVersion'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'UIVersion', value));
        }
        return value;
    },
    
    get_uiVersionConfigurationEnabled: function() {ULS5Vl:;
        this.checkUninitializedProperty('UIVersionConfigurationEnabled');
        return ((this.get_objectData().get_properties()['UIVersionConfigurationEnabled']));
    },
    set_uiVersionConfigurationEnabled: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['UIVersionConfigurationEnabled'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'UIVersionConfigurationEnabled', value));
        }
        return value;
    },
    
    get_allowDesignerForCurrentUser: function() {ULS5Vl:;
        this.checkUninitializedProperty('AllowDesignerForCurrentUser');
        return ((this.get_objectData().get_properties()['AllowDesignerForCurrentUser']));
    },
    
    get_allowRevertFromTemplateForCurrentUser: function() {ULS5Vl:;
        this.checkUninitializedProperty('AllowRevertFromTemplateForCurrentUser');
        return ((this.get_objectData().get_properties()['AllowRevertFromTemplateForCurrentUser']));
    },
    
    get_allowMasterPageEditingForCurrentUser: function() {ULS5Vl:;
        this.checkUninitializedProperty('AllowMasterPageEditingForCurrentUser');
        return ((this.get_objectData().get_properties()['AllowMasterPageEditingForCurrentUser']));
    },
    
    get_showUrlStructureForCurrentUser: function() {ULS5Vl:;
        this.checkUninitializedProperty('ShowUrlStructureForCurrentUser');
        return ((this.get_objectData().get_properties()['ShowUrlStructureForCurrentUser']));
    },
    
    get_siteUserInfoList: function() {ULS5Vl:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['SiteUserInfoList']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.List(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'SiteUserInfoList'));
            this.get_objectData().get_clientObjectProperties()['SiteUserInfoList'] = $v_0;
        }
        return $v_0;
    },
    
    get_siteGroups: function() {ULS5Vl:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['SiteGroups']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.GroupCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'SiteGroups'));
            this.get_objectData().get_clientObjectProperties()['SiteGroups'] = $v_0;
        }
        return $v_0;
    },
    
    get_roleDefinitions: function() {ULS5Vl:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['RoleDefinitions']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.RoleDefinitionCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'RoleDefinitions'));
            this.get_objectData().get_clientObjectProperties()['RoleDefinitions'] = $v_0;
        }
        return $v_0;
    },
    
    get_effectiveBasePermissions: function() {ULS5Vl:;
        this.checkUninitializedProperty('EffectiveBasePermissions');
        return ((this.get_objectData().get_properties()['EffectiveBasePermissions']));
    },
    
    get_associatedOwnerGroup: function() {ULS5Vl:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['AssociatedOwnerGroup']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.Group(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'AssociatedOwnerGroup'));
            this.get_objectData().get_clientObjectProperties()['AssociatedOwnerGroup'] = $v_0;
        }
        return $v_0;
    },
    set_associatedOwnerGroup: function(value) {ULS5Vl:;
        this.get_objectData().get_clientObjectProperties()['AssociatedOwnerGroup'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'AssociatedOwnerGroup', value));
        }
        return value;
    },
    
    get_associatedMemberGroup: function() {ULS5Vl:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['AssociatedMemberGroup']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.Group(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'AssociatedMemberGroup'));
            this.get_objectData().get_clientObjectProperties()['AssociatedMemberGroup'] = $v_0;
        }
        return $v_0;
    },
    set_associatedMemberGroup: function(value) {ULS5Vl:;
        this.get_objectData().get_clientObjectProperties()['AssociatedMemberGroup'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'AssociatedMemberGroup', value));
        }
        return value;
    },
    
    get_associatedVisitorGroup: function() {ULS5Vl:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['AssociatedVisitorGroup']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.Group(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'AssociatedVisitorGroup'));
            this.get_objectData().get_clientObjectProperties()['AssociatedVisitorGroup'] = $v_0;
        }
        return $v_0;
    },
    set_associatedVisitorGroup: function(value) {ULS5Vl:;
        this.get_objectData().get_clientObjectProperties()['AssociatedVisitorGroup'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'AssociatedVisitorGroup', value));
        }
        return value;
    },
    
    initPropertiesFromJson: function(parentNode) {ULS5Vl:;
        SP.Web.callBaseMethod(this, 'initPropertiesFromJson', [ parentNode ]);
        var $v_0;
        $v_0 = parentNode.Lists;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_lists().fromJson($v_0);
            delete parentNode.Lists;
        }
        $v_0 = parentNode.RootFolder;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_rootFolder().fromJson($v_0);
            delete parentNode.RootFolder;
        }
        $v_0 = parentNode.Folders;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_folders().fromJson($v_0);
            delete parentNode.Folders;
        }
        $v_0 = parentNode.Webs;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_webs().fromJson($v_0);
            delete parentNode.Webs;
        }
        $v_0 = parentNode.Features;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_features().fromJson($v_0);
            delete parentNode.Features;
        }
        $v_0 = parentNode.WorkflowTemplates;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_workflowTemplates().fromJson($v_0);
            delete parentNode.WorkflowTemplates;
        }
        $v_0 = parentNode.WorkflowAssociations;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_workflowAssociations().fromJson($v_0);
            delete parentNode.WorkflowAssociations;
        }
        $v_0 = parentNode.ListTemplates;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_listTemplates().fromJson($v_0);
            delete parentNode.ListTemplates;
        }
        $v_0 = parentNode.CurrentUser;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_currentUser().fromJson($v_0);
            delete parentNode.CurrentUser;
        }
        $v_0 = parentNode.Description;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Description'] = ($v_0);
            delete parentNode.Description;
        }
        $v_0 = parentNode.Created;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Created'] = ($v_0);
            delete parentNode.Created;
        }
        $v_0 = parentNode.LastItemModifiedDate;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['LastItemModifiedDate'] = ($v_0);
            delete parentNode.LastItemModifiedDate;
        }
        $v_0 = parentNode.RecycleBinEnabled;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['RecycleBinEnabled'] = ($v_0);
            delete parentNode.RecycleBinEnabled;
        }
        $v_0 = parentNode.Title;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Title'] = ($v_0);
            delete parentNode.Title;
        }
        $v_0 = parentNode.ServerRelativeUrl;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ServerRelativeUrl'] = ($v_0);
            delete parentNode.ServerRelativeUrl;
        }
        $v_0 = parentNode.Id;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Id'] = ($v_0);
            delete parentNode.Id;
        }
        $v_0 = parentNode.AllProperties;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_allProperties().fromJson($v_0);
            delete parentNode.AllProperties;
        }
        $v_0 = parentNode.SyndicationEnabled;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['SyndicationEnabled'] = ($v_0);
            delete parentNode.SyndicationEnabled;
        }
        $v_0 = parentNode.AllowRssFeeds;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['AllowRssFeeds'] = ($v_0);
            delete parentNode.AllowRssFeeds;
        }
        $v_0 = parentNode.QuickLaunchEnabled;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['QuickLaunchEnabled'] = ($v_0);
            delete parentNode.QuickLaunchEnabled;
        }
        $v_0 = parentNode.TreeViewEnabled;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['TreeViewEnabled'] = ($v_0);
            delete parentNode.TreeViewEnabled;
        }
        $v_0 = parentNode.Language;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Language'] = ($v_0);
            delete parentNode.Language;
        }
        $v_0 = parentNode.Navigation;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_navigation().fromJson($v_0);
            delete parentNode.Navigation;
        }
        $v_0 = parentNode.ContentTypes;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_contentTypes().fromJson($v_0);
            delete parentNode.ContentTypes;
        }
        $v_0 = parentNode.AvailableContentTypes;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_availableContentTypes().fromJson($v_0);
            delete parentNode.AvailableContentTypes;
        }
        $v_0 = parentNode.Fields;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_fields().fromJson($v_0);
            delete parentNode.Fields;
        }
        $v_0 = parentNode.AvailableFields;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_availableFields().fromJson($v_0);
            delete parentNode.AvailableFields;
        }
        $v_0 = parentNode.UserCustomActions;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_userCustomActions().fromJson($v_0);
            delete parentNode.UserCustomActions;
        }
        $v_0 = parentNode.UIVersion;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['UIVersion'] = ($v_0);
            delete parentNode.UIVersion;
        }
        $v_0 = parentNode.UIVersionConfigurationEnabled;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['UIVersionConfigurationEnabled'] = ($v_0);
            delete parentNode.UIVersionConfigurationEnabled;
        }
        $v_0 = parentNode.AllowDesignerForCurrentUser;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['AllowDesignerForCurrentUser'] = ($v_0);
            delete parentNode.AllowDesignerForCurrentUser;
        }
        $v_0 = parentNode.AllowRevertFromTemplateForCurrentUser;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['AllowRevertFromTemplateForCurrentUser'] = ($v_0);
            delete parentNode.AllowRevertFromTemplateForCurrentUser;
        }
        $v_0 = parentNode.AllowMasterPageEditingForCurrentUser;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['AllowMasterPageEditingForCurrentUser'] = ($v_0);
            delete parentNode.AllowMasterPageEditingForCurrentUser;
        }
        $v_0 = parentNode.ShowUrlStructureForCurrentUser;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ShowUrlStructureForCurrentUser'] = ($v_0);
            delete parentNode.ShowUrlStructureForCurrentUser;
        }
        $v_0 = parentNode.SiteUserInfoList;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_siteUserInfoList().fromJson($v_0);
            delete parentNode.SiteUserInfoList;
        }
        $v_0 = parentNode.SiteGroups;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_siteGroups().fromJson($v_0);
            delete parentNode.SiteGroups;
        }
        $v_0 = parentNode.RoleDefinitions;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_roleDefinitions().fromJson($v_0);
            delete parentNode.RoleDefinitions;
        }
        $v_0 = parentNode.EffectiveBasePermissions;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['EffectiveBasePermissions'] = ((SP.DataConvert.fixupType(this.get_context(), $v_0)));
            delete parentNode.EffectiveBasePermissions;
        }
        $v_0 = parentNode.AssociatedOwnerGroup;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_associatedOwnerGroup().fromJson($v_0);
            delete parentNode.AssociatedOwnerGroup;
        }
        $v_0 = parentNode.AssociatedMemberGroup;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_associatedMemberGroup().fromJson($v_0);
            delete parentNode.AssociatedMemberGroup;
        }
        $v_0 = parentNode.AssociatedVisitorGroup;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_associatedVisitorGroup().fromJson($v_0);
            delete parentNode.AssociatedVisitorGroup;
        }
    },
    
    getFileByServerRelativeUrl: function(serverRelativeUrl) {ULS5Vl:;
        var $v_0;
        var $v_1 = ((this.get_objectData().get_methodReturnObjects()['GetFileByServerRelativeUrl']));
        if (SP.ScriptUtility.isNullOrUndefined($v_1)) {
            $v_1 = {};
            this.get_objectData().get_methodReturnObjects()['GetFileByServerRelativeUrl'] = $v_1;
        }
        $v_0 = (($v_1[serverRelativeUrl.toUpperCase()]));
        if (!SP.ScriptUtility.isNullOrUndefined($v_0)) {
            return $v_0;
        }
        $v_0 = new SP.File(this.get_context(), new SP.ObjectPathMethod(this.get_context(), this.get_path(), 'GetFileByServerRelativeUrl', [ serverRelativeUrl ]));
        $v_1[serverRelativeUrl.toUpperCase()] = $v_0;
        var $v_2 = new SP.ObjectIdentityQuery($v_0.get_path());
        this.get_context().addQueryIdAndResultObject($v_2.get_id(), $v_0);
        this.get_context().addQuery($v_2);
        return $v_0;
    },
    
    getFolderByServerRelativeUrl: function(serverRelativeUrl) {ULS5Vl:;
        var $v_0;
        var $v_1 = ((this.get_objectData().get_methodReturnObjects()['GetFolderByServerRelativeUrl']));
        if (SP.ScriptUtility.isNullOrUndefined($v_1)) {
            $v_1 = {};
            this.get_objectData().get_methodReturnObjects()['GetFolderByServerRelativeUrl'] = $v_1;
        }
        $v_0 = (($v_1[serverRelativeUrl.toUpperCase()]));
        if (!SP.ScriptUtility.isNullOrUndefined($v_0)) {
            return $v_0;
        }
        $v_0 = new SP.Folder(this.get_context(), new SP.ObjectPathMethod(this.get_context(), this.get_path(), 'GetFolderByServerRelativeUrl', [ serverRelativeUrl ]));
        $v_1[serverRelativeUrl.toUpperCase()] = $v_0;
        var $v_2 = new SP.ObjectIdentityQuery($v_0.get_path());
        this.get_context().addQueryIdAndResultObject($v_2.get_id(), $v_0);
        this.get_context().addQuery($v_2);
        return $v_0;
    },
    
    getSubwebsForCurrentUser: function(query_) {ULS5Vl:;
        var $v_0;
        $v_0 = new SP.WebCollection(this.get_context(), new SP.ObjectPathMethod(this.get_context(), this.get_path(), 'GetSubwebsForCurrentUser', [ query_ ]));
        return $v_0;
    },
    
    getAvailableWebTemplates: function(lcid, doIncludeCrossLanguage) {ULS5Vl:;
        var $v_0;
        $v_0 = new SP.WebTemplateCollection(this.get_context(), new SP.ObjectPathMethod(this.get_context(), this.get_path(), 'GetAvailableWebTemplates', [ lcid, doIncludeCrossLanguage ]));
        return $v_0;
    },
    
    getCatalog: function(typeCatalog) {ULS5Vl:;
        var $v_0;
        var $v_1 = ((this.get_objectData().get_methodReturnObjects()['GetCatalog']));
        if (SP.ScriptUtility.isNullOrUndefined($v_1)) {
            $v_1 = [];
            this.get_objectData().get_methodReturnObjects()['GetCatalog'] = $v_1;
        }
        $v_0 = (($v_1[typeCatalog]));
        if (!SP.ScriptUtility.isNullOrUndefined($v_0)) {
            return $v_0;
        }
        $v_0 = new SP.List(this.get_context(), new SP.ObjectPathMethod(this.get_context(), this.get_path(), 'GetCatalog', [ typeCatalog ]));
        $v_1[typeCatalog] = $v_0;
        return $v_0;
    },
    
    getChanges: function(query_) {ULS5Vl:;
        var $v_0;
        $v_0 = new SP.ChangeCollection(this.get_context(), new SP.ObjectPathMethod(this.get_context(), this.get_path(), 'GetChanges', [ query_ ]));
        return $v_0;
    },
    
    mapToIcon: function(fileName, progId, size) {ULS5Vl:;
        var $v_0;
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'MapToIcon', [ fileName, progId, size ]);
        this.get_context().addQuery($v_1);
        $v_0 = new SP.StringResult();
        this.get_context().addQueryIdAndResultObject($v_1.get_id(), $v_0);
        return $v_0;
    },
    
    doesUserHavePermissions: function(permissionMask) {ULS5Vl:;
        var $v_0;
        var $v_1 = new SP.ClientActionInvokeMethod(this, 'DoesUserHavePermissions', [ permissionMask ]);
        this.get_context().addQuery($v_1);
        $v_0 = new SP.BooleanResult();
        this.get_context().addQueryIdAndResultObject($v_1.get_id(), $v_0);
        return $v_0;
    },
    
    ensureUser: function(logonName) {ULS5Vl:;
        var $v_0;
        $v_0 = new SP.User(this.get_context(), new SP.ObjectPathMethod(this.get_context(), this.get_path(), 'EnsureUser', [ logonName ]));
        return $v_0;
    },
    
    applyWebTemplate: function(strWebTemplate) {ULS5Vl:;
        var $v_0 = new SP.ClientActionInvokeMethod(this, 'ApplyWebTemplate', [ strWebTemplate ]);
        this.get_context().addQuery($v_0);
    },
    
    deleteObject: function() {ULS5Vl:;
        var $v_0 = new SP.ClientActionInvokeMethod(this, 'DeleteObject', null);
        this.get_context().addQuery($v_0);
        this.removeFromParentCollection();
    },
    
    update: function() {ULS5Vl:;
        var $v_0 = new SP.ClientActionInvokeMethod(this, 'Update', null);
        this.get_context().addQuery($v_0);
    }
}


SP.WebPropertyNames = function() {
}


SP.WebObjectPropertyNames = function() {
}


SP.WebCollection = function(Context, ObjectPath) {ULS5Vl:;
    SP.WebCollection.initializeBase(this, [ Context, ObjectPath ]);
}
SP.WebCollection.prototype = {
    
    itemAt: function(index) {ULS5Vl:;
        return this.getItemAtIndex(index);
    },
    
    get_item: function(index) {ULS5Vl:;
        return this.getItemAtIndex(index);
    },
    
    add: function(parameters) {ULS5Vl:;
        var $v_0;
        $v_0 = new SP.Web(this.get_context(), new SP.ObjectPathMethod(this.get_context(), this.get_path(), 'Add', [ parameters ]));
        $v_0.get_path().setPendingReplace();
        var $v_1 = new SP.ObjectIdentityQuery($v_0.get_path());
        this.get_context().addQueryIdAndResultObject($v_1.get_id(), $v_0);
        this.get_context().addQuery($v_1);
        this.addChild($v_0);
        $v_0.$7(parameters);
        return $v_0;
    }
}


SP.WebCreationInformation = function() {ULS5Vl:;
    SP.WebCreationInformation.initializeBase(this);
}
SP.WebCreationInformation.prototype = {
    $6_1: null,
    $1_1: null,
    $2_1: null,
    $24_1: 0,
    $2N_1: null,
    $2J_1: false,
    
    get_url: function() {ULS5Vl:;
        return this.$6_1;
    },
    set_url: function(value) {ULS5Vl:;
        this.$6_1 = value;
        return value;
    },
    
    get_title: function() {ULS5Vl:;
        return this.$1_1;
    },
    set_title: function(value) {ULS5Vl:;
        this.$1_1 = value;
        return value;
    },
    
    get_description: function() {ULS5Vl:;
        return this.$2_1;
    },
    set_description: function(value) {ULS5Vl:;
        this.$2_1 = value;
        return value;
    },
    
    get_language: function() {ULS5Vl:;
        return this.$24_1;
    },
    set_language: function(value) {ULS5Vl:;
        this.$24_1 = value;
        return value;
    },
    
    get_webTemplate: function() {ULS5Vl:;
        return this.$2N_1;
    },
    set_webTemplate: function(value) {ULS5Vl:;
        this.$2N_1 = value;
        return value;
    },
    
    get_useSamePermissionsAsParentSite: function() {ULS5Vl:;
        return this.$2J_1;
    },
    set_useSamePermissionsAsParentSite: function(value) {ULS5Vl:;
        this.$2J_1 = value;
        return value;
    },
    
    get_typeId: function() {ULS5Vl:;
        return '{8f9e9fbe-189e-492f-884f-98f9ef9cc4d6}';
    },
    
    writeToXml: function(writer, serializationContext) {ULS5Vl:;
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = [ 'Url', 'Title', 'Description', 'Language', 'WebTemplate', 'UseSamePermissionsAsParentSite' ];
        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
    },
    
    initPropertiesFromJson: function(parentNode) {ULS5Vl:;
        var $v_0;
        $v_0 = parentNode.Url;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$6_1 = ($v_0);
            delete parentNode.Url;
        }
        $v_0 = parentNode.Title;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1_1 = ($v_0);
            delete parentNode.Title;
        }
        $v_0 = parentNode.Description;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$2_1 = ($v_0);
            delete parentNode.Description;
        }
        $v_0 = parentNode.Language;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$24_1 = ($v_0);
            delete parentNode.Language;
        }
        $v_0 = parentNode.WebTemplate;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$2N_1 = ($v_0);
            delete parentNode.WebTemplate;
        }
        $v_0 = parentNode.UseSamePermissionsAsParentSite;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$2J_1 = ($v_0);
            delete parentNode.UseSamePermissionsAsParentSite;
        }
    }
}


SP.WebTemplate = function(Context, ObjectPath) {ULS5Vl:;
    SP.WebTemplate.initializeBase(this, [ Context, ObjectPath ]);
}
SP.WebTemplate.prototype = {
    
    get_lcid: function() {ULS5Vl:;
        this.checkUninitializedProperty('Lcid');
        return ((this.get_objectData().get_properties()['Lcid']));
    },
    
    get_id: function() {ULS5Vl:;
        this.checkUninitializedProperty('Id');
        return ((this.get_objectData().get_properties()['Id']));
    },
    
    get_title: function() {ULS5Vl:;
        this.checkUninitializedProperty('Title');
        return ((this.get_objectData().get_properties()['Title']));
    },
    
    get_name: function() {ULS5Vl:;
        this.checkUninitializedProperty('Name');
        return ((this.get_objectData().get_properties()['Name']));
    },
    
    get_isHidden: function() {ULS5Vl:;
        this.checkUninitializedProperty('IsHidden');
        return ((this.get_objectData().get_properties()['IsHidden']));
    },
    
    get_description: function() {ULS5Vl:;
        this.checkUninitializedProperty('Description');
        return ((this.get_objectData().get_properties()['Description']));
    },
    
    get_imageUrl: function() {ULS5Vl:;
        this.checkUninitializedProperty('ImageUrl');
        return ((this.get_objectData().get_properties()['ImageUrl']));
    },
    
    get_isRootWebOnly: function() {ULS5Vl:;
        this.checkUninitializedProperty('IsRootWebOnly');
        return ((this.get_objectData().get_properties()['IsRootWebOnly']));
    },
    
    get_isSubWebOnly: function() {ULS5Vl:;
        this.checkUninitializedProperty('IsSubWebOnly');
        return ((this.get_objectData().get_properties()['IsSubWebOnly']));
    },
    
    get_displayCategory: function() {ULS5Vl:;
        this.checkUninitializedProperty('DisplayCategory');
        return ((this.get_objectData().get_properties()['DisplayCategory']));
    },
    
    initPropertiesFromJson: function(parentNode) {ULS5Vl:;
        SP.WebTemplate.callBaseMethod(this, 'initPropertiesFromJson', [ parentNode ]);
        var $v_0;
        $v_0 = parentNode.Lcid;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Lcid'] = ($v_0);
            delete parentNode.Lcid;
        }
        $v_0 = parentNode.Id;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Id'] = ($v_0);
            delete parentNode.Id;
        }
        $v_0 = parentNode.Title;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Title'] = ($v_0);
            delete parentNode.Title;
        }
        $v_0 = parentNode.Name;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Name'] = ($v_0);
            delete parentNode.Name;
        }
        $v_0 = parentNode.IsHidden;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['IsHidden'] = ($v_0);
            delete parentNode.IsHidden;
        }
        $v_0 = parentNode.Description;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Description'] = ($v_0);
            delete parentNode.Description;
        }
        $v_0 = parentNode.ImageUrl;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ImageUrl'] = ($v_0);
            delete parentNode.ImageUrl;
        }
        $v_0 = parentNode.IsRootWebOnly;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['IsRootWebOnly'] = ($v_0);
            delete parentNode.IsRootWebOnly;
        }
        $v_0 = parentNode.IsSubWebOnly;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['IsSubWebOnly'] = ($v_0);
            delete parentNode.IsSubWebOnly;
        }
        $v_0 = parentNode.DisplayCategory;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['DisplayCategory'] = ($v_0);
            delete parentNode.DisplayCategory;
        }
    }
}


SP.WebTemplatePropertyNames = function() {
}


SP.WebTemplateCollection = function(Context, ObjectPath) {ULS5Vl:;
    SP.WebTemplateCollection.initializeBase(this, [ Context, ObjectPath ]);
}
SP.WebTemplateCollection.prototype = {
    
    itemAt: function(index) {ULS5Vl:;
        return this.getItemAtIndex(index);
    },
    
    get_item: function(index) {ULS5Vl:;
        return this.getItemAtIndex(index);
    }
}


Type.registerNamespace('SP.UI');

SP.UI.Orientation = function() {}
SP.UI.Orientation.prototype = {
    horizontal: 0, 
    vertical: 1
}
SP.UI.Orientation.registerEnum('SP.UI.Orientation', false);


SP.UI.PopoutMenu = function(launcherId, menuId, iconId, launcherOpenCssClass, textDirection, closeIconUrl, isClustered, closeIconOffsetLeft, closeIconOffsetTop, closeIconHeight, closeIconWidth) {ULS5Vl:;
    this.$2X = Function.createDelegate(this, this.closeMenu);
    this.$2f = Function.createDelegate(this, this.onMenuMouseOver);
    this.$2e = Function.createDelegate(this, this.onMenuMouseOut);
    this.$j_0 = -1;
    this.$A_0 = $get(launcherId);
    this.$0_0 = $get(menuId);
    this.$1a_0 = launcherOpenCssClass;
    this.$2r_0 = textDirection;
    this.$1Y_0 = closeIconUrl;
    this.$2n_0 = isClustered;
    if (isClustered) {
        this.$k_0 = $get(iconId);
        this.$Y_0 = this.$k_0.firstChild;
        this.$2o_0 = closeIconOffsetLeft;
        this.$2p_0 = closeIconOffsetTop;
        this.$2m_0 = closeIconHeight;
        this.$2q_0 = closeIconWidth;
    }
    else {
        this.$Y_0 = $get(iconId);
    }
    if (SP.ScriptUtility.isNullOrUndefined(this.$A_0)) {
        throw Error.argument('launcherId');
    }
    if (SP.ScriptUtility.isNullOrUndefined(this.$0_0)) {
        throw Error.argument('menuId');
    }
    this.$1c_0 = this.$2e;
    this.$1d_0 = this.$2f;
    this.$1b_0 = SP.UI.PopoutMenu.onMenuClick;
    $addHandler(this.$0_0, 'mouseout', this.$1c_0);
    $addHandler(this.$0_0, 'mouseover', this.$1d_0);
    $addHandler(this.$0_0, 'click', this.$1b_0);
}
SP.UI.PopoutMenu.beginModal = function() {ULS5Vl:;
    if (SP.UI.PopoutMenu.$I_0) {
        return;
    }
    if (!SP.UI.PopoutMenu.$1Z_0) {
        $addHandler(document, 'keydown', SP.UI.PopoutMenu.onModalKeyDown);
        var $v_0 = SP.UI.PopoutMenu.onCloseEvent;
        $addHandler(window, 'scroll', $v_0);
        $addHandler(document.body, 'click', $v_0);
        SP.UI.PopoutMenu.$1Z_0 = true;
    }
    SP.UI.PopoutMenu.$I_0 = true;
}
SP.UI.PopoutMenu.endModal = function() {ULS5Vl:;
    if (!SP.UI.PopoutMenu.$I_0) {
        return;
    }
    SP.UI.PopoutMenu.$I_0 = false;
}
SP.UI.PopoutMenu.onMenuClick = function(evt) {ULS5Vl:;
    evt.stopPropagation();
    if (!SP.ScriptUtility.isNullOrUndefined(SP.UI.PopoutMenu._activePopoutMenuInstance)) {
        SP.UI.PopoutMenu._activePopoutMenuInstance.closeMenu();
    }
}
SP.UI.PopoutMenu.onModalKeyDown = function(evt) {ULS5Vl:;
    if (!SP.UI.PopoutMenu.$I_0) {
        return;
    }
    if (evt && evt.rawEvent) {
        if (evt.rawEvent.keyCode === 27) {
            SP.UI.PopoutMenu._activePopoutMenuInstance.closeMenu();
        }
    }
}
SP.UI.PopoutMenu.onCloseEvent = function(evt) {ULS5Vl:;
    if (!SP.UI.PopoutMenu.$I_0) {
        return;
    }
    SP.UI.PopoutMenu._activePopoutMenuInstance.closeMenu();
    evt.preventDefault();
}
SP.UI.PopoutMenu.ensureCSSClassOnElement = function(element, cssClass) {ULS5Vl:;
    if (SP.ScriptUtility.isNullOrUndefined(element)) {
        return;
    }
    var $v_0 = element.className;
    if ($v_0.indexOf(cssClass) !== -1) {
        return;
    }
    var $v_1 = (element.className.trim() + ' ' + cssClass);
    $v_1 = $v_1.trim();
    element.className = $v_1;
}
SP.UI.PopoutMenu.removeCSSClassFromElement = function(element, cssClass) {ULS5Vl:;
    if (SP.ScriptUtility.isNullOrUndefined(element)) {
        return;
    }
    element.className = element.className.replace(cssClass, '');
}
SP.UI.PopoutMenu.getViewPortWidth = function() {ULS5Vl:;
    var $v_0 = window.innerWidth;
    if (SP.ScriptUtility.isNullOrUndefined($v_0)) {
        $v_0 = document.documentElement.clientWidth;
    }
    if (SP.ScriptUtility.isNullOrUndefined($v_0)) {
        $v_0 = document.body.clientWidth;
    }
    return $v_0;
}
SP.UI.PopoutMenu.getViewPortHeight = function() {ULS5Vl:;
    var $v_0 = window.innerHeight;
    if (SP.ScriptUtility.isNullOrUndefined($v_0)) {
        $v_0 = document.documentElement.clientHeight;
    }
    if (SP.ScriptUtility.isNullOrUndefined($v_0)) {
        $v_0 = document.body.clientHeight;
    }
    return $v_0;
}
SP.UI.PopoutMenu.getViewableTop = function() {ULS5Vl:;
    var $v_0;
    $v_0 = window.pageXOffset;
    if (SP.ScriptUtility.isNullOrUndefined($v_0)) {
        $v_0 = document.documentElement.scrollTop;
    }
    if (SP.ScriptUtility.isNullOrUndefined($v_0)) {
        $v_0 = document.body.scrollTop;
    }
    return $v_0;
}
SP.UI.PopoutMenu.getViewableLeft = function() {ULS5Vl:;
    var $v_0;
    $v_0 = window.pageYOffset;
    if (SP.ScriptUtility.isNullOrUndefined($v_0)) {
        $v_0 = document.documentElement.scrollLeft;
    }
    if (SP.ScriptUtility.isNullOrUndefined($v_0)) {
        $v_0 = document.body.scrollLeft;
    }
    return $v_0;
}
SP.UI.PopoutMenu.get_activePopoutMenuInstance = function() {ULS5Vl:;
    return SP.UI.PopoutMenu._activePopoutMenuInstance;
}
SP.UI.PopoutMenu.set_activePopoutMenuInstance = function(value) {ULS5Vl:;
    SP.UI.PopoutMenu._activePopoutMenuInstance = value;
    return value;
}
SP.UI.PopoutMenu.createPopoutMenuInstanceAndLaunch = function(anchorId, menuId, iconId, anchorOpenCss, textDirection, closeIconUrl, isClustered, x, y, height, width) {ULS5Vl:;
    if (!SP.ScriptUtility.isNullOrUndefined(SP.UI.PopoutMenu._activePopoutMenuInstance)) {
        SP.UI.PopoutMenu._activePopoutMenuInstance.closeMenu();
        return;
    }
    var $v_0 = new SP.UI.PopoutMenu(anchorId, menuId, iconId, anchorOpenCss, textDirection, closeIconUrl, isClustered, x, y, height, width);
    $v_0.launchMenu();
}
SP.UI.PopoutMenu.closeActivePopoutMenuInstance = function() {ULS5Vl:;
    if (!SP.ScriptUtility.isNullOrUndefined(SP.UI.PopoutMenu._activePopoutMenuInstance)) {
        SP.UI.PopoutMenu._activePopoutMenuInstance.closeMenu();
    }
}
SP.UI.PopoutMenu.prototype = {
    $A_0: null,
    $0_0: null,
    $k_0: null,
    $Y_0: null,
    $1a_0: null,
    $2r_0: null,
    $1Y_0: null,
    $2n_0: false,
    $2o_0: 0,
    $2p_0: 0,
    $2m_0: 0,
    $2q_0: 0,
    $1c_0: null,
    $1d_0: null,
    $1b_0: null,
    
    launchMenu: function() {ULS5Vl:;
        if (this._menuLaunched) {
            return;
        }
        if (SP.UI.PopoutMenu._activePopoutMenuInstance) {
            SP.UI.PopoutMenu._activePopoutMenuInstance.closeMenu();
        }
        SP.UI.PopoutMenu._activePopoutMenuInstance = this;
        SP.UI.PopoutMenu.beginModal();
        SP.UI.PopoutMenu.ensureCSSClassOnElement(this.$A_0, this.$1a_0);
        this.$0_0.style.display = 'block';
        this.$0_0.style.visibility = 'hidden';
        this.$0_0.style.position = 'absolute';
        this.$0_0.style.top = '0px';
        this.$0_0.style.left = '0px';
        this.$0_0.style.zIndex = 1002;
        var $v_0 = Sys.Browser.agent === Sys.Browser.InternetExplorer && Math.floor(Sys.Browser.version) === 7;
        if ($v_0) {
            var $v_1 = this.$0_0.offsetWidth;
            if ($v_1 < 142) {
                $v_1 = 142;
            }
            else if ($v_1 > 400) {
                $v_1 = 400;
            }
            this.$0_0.style.width = $v_1 + 'px';
        }
        this.positionMenu();
        this.$0_0.style.visibility = 'visible';
        if (Sys.Browser.agent === Sys.Browser.InternetExplorer) {
            this.$0_0.parentNode.insertBefore(this.get_backFrame(), this.$0_0);
            this.positionBackFrame(this.$0_0);
        }
        this.$A_0.rel = '_spPopoutMenuIsOpen';
        this._menuLaunched = true;
    },
    
    closeMenu: function() {ULS5Vl:;
        if (!this._menuLaunched) {
            return;
        }
        this.$0_0.style.display = 'none';
        if (Sys.Browser.agent === Sys.Browser.InternetExplorer) {
            this.$0_0.parentNode.removeChild(this.get_backFrame());
        }
        SP.UI.PopoutMenu.endModal();
        SP.UI.PopoutMenu.removeCSSClassFromElement(this.$A_0, this.$1a_0);
        if (!SP.ScriptUtility.isNullOrEmptyString(this.$1Y_0)) {
            this.$4E_0();
        }
        this.$A_0.rel = '';
        this._menuLaunched = false;
        SP.UI.PopoutMenu._activePopoutMenuInstance = null;
    },
    
    $4E_0: function() {ULS5Vl:;
        this.$Y_0.src = this.$1Y_0;
        if (this.$2n_0) {
            this.$Y_0.style.top = '-' + this.$2p_0 + 'px';
            this.$Y_0.style.left = '-' + this.$2o_0 + 'px';
            this.$k_0.style.height = this.$2m_0 + 'px';
            this.$k_0.style.width = this.$2q_0 + 'px';
        }
    },
    
    positionBackFrame: function(elem) {ULS5Vl:;
        var $v_0 = !SP.ScriptUtility.isNullOrUndefined(elem.offsetParent);
        var $v_1 = AbsTop(elem) - (($v_0) ? AbsTop(elem.offsetParent) : 0);
        var $v_2 = AbsLeft(elem) - (($v_0) ? AbsLeft(elem.offsetParent) : 0);
        var $v_3 = elem.offsetWidth;
        var $v_4 = elem.offsetHeight;
        this.get_backFrame().style.top = $v_1 + 'px';
        this.get_backFrame().style.left = $v_2 + 'px';
        this.get_backFrame().style.width = $v_3 + 'px';
        this.get_backFrame().style.height = $v_4 + 'px';
    },
    
    positionMenu: function() {ULS5Vl:;
        var $v_0 = this.$0_0.offsetWidth;
        var $v_1 = this.$0_0.offsetHeight;
        var $v_2 = !SP.ScriptUtility.isNullOrUndefined(this.$0_0.offsetParent);
        var $v_3 = this.$A_0.offsetWidth;
        var $v_4 = this.$A_0.offsetHeight;
        var $v_5 = AbsTop(this.$A_0) - (($v_2) ? AbsTop(this.$0_0.offsetParent) : 0);
        var $v_6 = AbsLeft(this.$A_0) - (($v_2) ? AbsLeft(this.$0_0.offsetParent) : 0);
        var $v_7 = SP.UI.PopoutMenu.getViewPortWidth();
        var $v_8 = SP.UI.PopoutMenu.getViewPortHeight();
        var $v_9 = SP.UI.PopoutMenu.getViewableTop();
        var $v_A = SP.UI.PopoutMenu.getViewableLeft();
        if (this.get_defaultLaunchRight()) {
            if (this.$2S_0($v_0, $v_1, $v_3, $v_4, $v_5, $v_6, $v_7, $v_8, $v_9, $v_A)) {
                return;
            }
            if (this.$3W_0($v_0, $v_1, $v_3, $v_4, $v_5, $v_6, $v_7, $v_8, $v_9, $v_A)) {
                return;
            }
            if (this.$2R_0($v_0, $v_1, $v_3, $v_4, $v_5, $v_6, $v_7, $v_8, $v_9, $v_A)) {
                return;
            }
            if (this.$3V_0($v_0, $v_1, $v_3, $v_4, $v_5, $v_6, $v_7, $v_8, $v_9, $v_A)) {
                return;
            }
            this.$2S_0($v_0, $v_1, $v_3, $v_4, $v_5, $v_6, $v_7, $v_8, $v_9, $v_A);
        }
        else {
            if (this.$2R_0($v_0, $v_1, $v_3, $v_4, $v_5, $v_6, $v_7, $v_8, $v_9, $v_A)) {
                return;
            }
            if (this.$3V_0($v_0, $v_1, $v_3, $v_4, $v_5, $v_6, $v_7, $v_8, $v_9, $v_A)) {
                return;
            }
            if (this.$2S_0($v_0, $v_1, $v_3, $v_4, $v_5, $v_6, $v_7, $v_8, $v_9, $v_A)) {
                return;
            }
            if (this.$3W_0($v_0, $v_1, $v_3, $v_4, $v_5, $v_6, $v_7, $v_8, $v_9, $v_A)) {
                return;
            }
            this.$2R_0($v_0, $v_1, $v_3, $v_4, $v_5, $v_6, $v_7, $v_8, $v_9, $v_A);
        }
    },
    
    positionMenuWithCoordinates: function(left, top) {ULS5Vl:;
        this.$0_0.style.top = top + 'px';
        this.$0_0.style.left = left + 'px';
    },
    
    $3V_0: function($p0, $p1, $p2, $p3, $p4, $p5, $p6, $p7, $p8, $p9) {
        var $v_0 = $p5 + $p2 - $p0;
        if ($v_0 < $p9) {
            return false;
        }
        var $v_1 = $p4 - $p1;
        if ($v_1 < $p8) {
            return false;
        }
        this.positionMenuWithCoordinates($v_0, $v_1);
        return true;
    },
    
    $2R_0: function($p0, $p1, $p2, $p3, $p4, $p5, $p6, $p7, $p8, $p9) {
        var $v_0 = $p5 + $p2 - $p0;
        if ($v_0 < $p9) {
            return false;
        }
        var $v_1 = $p4 + $p3 + $p1;
        var $v_2 = $p8 + $p7;
        if ($v_1 > $v_2) {
            return false;
        }
        this.positionMenuWithCoordinates($v_0, $p4 + $p3);
        return true;
    },
    
    $3W_0: function($p0, $p1, $p2, $p3, $p4, $p5, $p6, $p7, $p8, $p9) {
        var $v_0 = $p5 + $p0;
        var $v_1 = $p9 + $p6;
        if ($v_0 > $v_1) {
            return false;
        }
        var $v_2 = $p4 - $p1;
        if ($v_2 < $p8) {
            return false;
        }
        this.positionMenuWithCoordinates($p5, $v_2);
        return true;
    },
    
    $2S_0: function($p0, $p1, $p2, $p3, $p4, $p5, $p6, $p7, $p8, $p9) {
        var $v_0 = $p5 + $p0;
        var $v_1 = $p9 + $p6;
        if ($v_0 > $v_1) {
            return false;
        }
        var $v_2 = $p4 + $p3 + $p1;
        var $v_3 = $p8 + $p7;
        if ($v_2 > $v_3) {
            return false;
        }
        this.positionMenuWithCoordinates($p5, $p4 + $p3);
        return true;
    },
    
    onMenuMouseOver: function(evt) {ULS5Vl:;
        window.clearTimeout(this.$j_0);
    },
    
    onMenuMouseOut: function(evt) {ULS5Vl:;
        window.clearTimeout(this.$j_0);
        this.$j_0 = window.setTimeout(this.$2X, 1500);
    },
    
    _menuLaunched: false,
    
    get_menuLaunched: function() {ULS5Vl:;
        return this._menuLaunched;
    },
    set_menuLaunched: function(value) {ULS5Vl:;
        this._menuLaunched = value;
        return value;
    },
    
    _backFrame: null,
    
    get_backFrame: function() {ULS5Vl:;
        if (!this._backFrame) {
            this._backFrame = document.createElement('iframe');
            this._backFrame.style.zIndex = 1001;
            this._backFrame.style.position = 'absolute';
        }
        return this._backFrame;
    },
    
    get_defaultLaunchRight: function() {ULS5Vl:;
        return this.$2r_0 === 'ltr';
    },
    
    dispose: function() {ULS5Vl:;
        $removeHandler(this.$0_0, 'mouseout', this.$1c_0);
        $removeHandler(this.$0_0, 'mouseover', this.$1d_0);
        $removeHandler(this.$0_0, 'click', this.$1b_0);
    }
}


SP.UI.Notify = function() {
}
SP.UI.Notify.addNotification = function(strHtml, bSticky) {ULS5Vl:;
    return addNotification(strHtml, bSticky);
}
SP.UI.Notify.removeNotification = function(nid) {ULS5Vl:;
    removeNotification(nid);
}


SP.UI.Status = function() {
}
SP.UI.Status.addStatus = function(strTitle, strHtml, atBegining) {ULS5Vl:;
    return addStatus(strTitle, strHtml, atBegining);
}
SP.UI.Status.appendStatus = function(sid, strTitle, strHtml) {ULS5Vl:;
    return appendStatus(sid, strTitle, strHtml);
}
SP.UI.Status.updateStatus = function(sid, strHtml) {ULS5Vl:;
    updateStatus(sid, strHtml);
}
SP.UI.Status.setStatusPriColor = function(sid, strColor) {ULS5Vl:;
    setStatusPriColor(sid, strColor);
}
SP.UI.Status.removeStatus = function(sid) {ULS5Vl:;
    removeStatus(sid);
}
SP.UI.Status.removeAllStatus = function(hide) {ULS5Vl:;
    removeAllStatus(hide);
}


SP.UI.Menu = function(menuElem) {ULS5Vl:;
    this.$c_0 = menuElem;
}
SP.UI.Menu.create = function(id) {ULS5Vl:;
    var $v_0 = CMenu(id);
    return new SP.UI.Menu($v_0);
}
SP.UI.Menu.prototype = {
    $c_0: null,
    
    addMenuItem: function(text, actionScriptText, imageSourceUrl, imageAlternateText, sequenceNumber, description, id) {ULS5Vl:;
        var $v_0 = CAMOpt(this.$c_0, text, actionScriptText, imageSourceUrl, imageAlternateText, sequenceNumber, description);
        if (id) {
            $v_0.id = id;
        }
    },
    
    addSeparator: function() {ULS5Vl:;
        CAMSep(this.$c_0);
    },
    
    addSubMenu: function(text, imageSourceUrl, imageAlternateText, sequenceNumber, description, id) {ULS5Vl:;
        var $v_0 = CASubM(this.$c_0, text, imageSourceUrl, imageAlternateText, sequenceNumber, description);
        if (id) {
            $v_0.id = id;
        }
        return new SP.UI.Menu($v_0);
    },
    
    show: function(relativeElement, forceRefresh, flipTopLevelMenu, yOffset) {ULS5Vl:;
        OMenu(this.$c_0, relativeElement, forceRefresh, flipTopLevelMenu, yOffset);
    }
}


SP.UI.MenuTest = function() {
}
SP.UI.MenuTest.setup = function(relativeElement) {ULS5Vl:;
    SP.UI.MenuTest.$X_0 = relativeElement;
    relativeElement.attachEvent('onclick', SP.UI.MenuTest.$3y_0);
}
SP.UI.MenuTest.$3y_0 = function() {ULS5Vl:;
    var $v_0 = SP.UI.MenuTest.$X_0._menu;
    if (!$v_0) {
        $v_0 = SP.UI.Menu.create(SP.UI.MenuTest.$X_0.id + '_menu');
        SP.UI.MenuTest.$X_0._menu = $v_0;
        $v_0.addMenuItem('Option 1', null, null, null, 0, null, null);
        $v_0.addSeparator();
        $v_0.addMenuItem('Option 2', 'window.location=\'http://www.microsoft.com\';', null, null, 0, null, null);
    }
    $v_0.show(SP.UI.MenuTest.$X_0, false, false, -1);
}


SP.UI.AspMenu = function(e) {ULS5Vl:;
    SP.UI.AspMenu.initializeBase(this, [ e ]);
}
SP.UI.AspMenu.$3p_2 = function($p0) {
    var $v_0 = null;
    for (var $v_1 = 0, $v_2 = $p0.childNodes.length; $v_1 < $v_2; ++$v_1) {
        var $v_3 = $p0.childNodes[$v_1];
        if ($v_3 && $v_3.nodeType === 1 && $v_3.tagName.toLowerCase() === 'ul') {
            $v_0 = $v_3;
            break;
        }
    }
    return $v_0;
}
SP.UI.AspMenu.prototype = {
    $C_2: null,
    $O_2: null,
    $1i_2: 500,
    
    get_menuOrientation: function() {ULS5Vl:;
        if (Sys.UI.DomElement.containsCssClass(this.$C_2.parentNode, 'horizontal')) {
            return 0;
        }
        else {
            return 1;
        }
    },
    set_menuOrientation: function(value) {ULS5Vl:;
        if (!value) {
            Sys.UI.DomElement.removeCssClass(this.$C_2.parentNode, 'vertical');
            Sys.UI.DomElement.addCssClass(this.$C_2.parentNode, 'horizontal');
        }
        else if (value === 1) {
            Sys.UI.DomElement.removeCssClass(this.$C_2.parentNode, 'horizontal');
            Sys.UI.DomElement.addCssClass(this.$C_2.parentNode, 'vertical');
        }
        return value;
    },
    
    get_disappearAfter: function() {ULS5Vl:;
        return this.$1i_2;
    },
    set_disappearAfter: function(value) {ULS5Vl:;
        this.$1i_2 = value;
        return value;
    },
    
    initialize: function() {ULS5Vl:;
        SP.UI.AspMenu.callBaseMethod(this, 'initialize');
        this.$C_2 = this.get_element().getElementsByTagName('ul')[0];
        this.$3t_2();
        this.$3v_2();
    },
    
    $3t_2: function() {ULS5Vl:;
        var $v_0 = this.$C_2.getElementsByTagName('ul');
        for (var $v_1 = 0, $v_2 = $v_0.length; $v_1 < $v_2; ++$v_1) {
            if (Sys.UI.DomElement.containsCssClass($v_0[$v_1], 'dynamic')) {
                var $v_3 = $v_0[$v_1].parentNode;
                $v_3.hoverDebouncer = 0;
                this.$3e_2($v_3);
            }
        }
    },
    
    $3e_2: function($p0) {
        $addHandler($p0, 'mouseover', Function.createDelegate(this, function($p1_0) {
            if ($p0.hoverDebouncer > 0) {
                return;
            }
            $p0.hoverDebouncer = $p0.hoverDebouncer + 1;
            if (Sys.UI.DomElement.containsCssClass($p0, 'hover')) {
                return;
            }
            if (Sys.UI.DomElement.containsCssClass($p0, 'dynamic-children') && Sys.UI.DomElement.containsCssClass($p0, 'static')) {
                if (this.$O_2 && this.$O_2 !== $p0) {
                    this.$30_2(this.$O_2);
                }
                this.$O_2 = $p0;
                var $v_0 = document.documentMode;
                var $v_1 = Sys.Browser.agent === Sys.Browser.InternetExplorer && Sys.Browser.version < 8 && (SP.ScriptUtility.isNullOrUndefined($v_0) || $v_0 < 8);
                var $v_2 = document.dir === 'rtl';
                if ($v_2 && !this.get_menuOrientation() && $v_1) {
                    this.$3a_2($p0, -$p0.offsetWidth, 0);
                    return;
                }
            }
            this.$3a_2($p0, 0, 0);
        }));
        $addHandler($p0, 'mouseout', Function.createDelegate(this, function($p1_0) {
            if ($p0.hoverDebouncer <= 0) {
                return;
            }
            $p0.hoverDebouncer = $p0.hoverDebouncer - 1;
            window.setTimeout(Function.createDelegate(this, function() {ULS5Vl:;
                if ($p0.hoverDebouncer <= 0 && Sys.UI.DomElement.containsCssClass($p0, 'hover')) {
                    Sys.UI.DomElement.addCssClass($p0, 'hover-off');
                    Sys.UI.DomElement.removeCssClass($p0, 'hover');
                    window.setTimeout(Function.createDelegate(this, function() {ULS5Vl:;
                        if (Sys.UI.DomElement.containsCssClass($p0, 'hover-off')) {
                            this.$30_2($p0);
                        }
                    }), this.$1i_2);
                }
            }), 0);
        }));
    },
    
    $3a_2: function($p0, $p1, $p2) {
        var $v_0 = Sys.UI.DomElement.containsCssClass($p0, 'hover');
        var $v_1 = Sys.UI.DomElement.containsCssClass($p0, 'hover-off');
        if (!$v_0 && !$v_1) {
            var $v_2 = $p0.offsetHeight;
            Sys.UI.DomElement.addCssClass($p0, 'hover');
            var $v_3 = $p0.childNodes[1];
            var $v_4 = document.dir === 'rtl';
            if (!this.get_menuOrientation() && Sys.UI.DomElement.containsCssClass($p0.parentNode, 'static')) {
                if (!$v_4) {
                    $v_3.style.left = (-1 + $p1) + 'px';
                }
                else {
                    $v_3.style.right = (-1 + $p1) + 'px';
                }
                $v_3.style.top = ($v_2 + $p2) + 'px';
            }
            else {
                if (!$v_4) {
                    $v_3.style.left = ($v_3.parentNode.offsetWidth + $p1) + 'px';
                }
                else {
                    $v_3.style.right = ($v_3.parentNode.offsetWidth + $p1) + 'px';
                }
                $v_3.style.top = (-1 + $p2) + 'px';
            }
        }
        else if (!$v_0) {
            Sys.UI.DomElement.addCssClass($p0, 'hover');
            Sys.UI.DomElement.removeCssClass($p0, 'hover-off');
        }
    },
    
    $30_2: function($p0) {
        var $v_0 = SP.UI.AspMenu.$3p_2($p0);
        if ($v_0) {
            $v_0.style.top = '';
            $v_0.style.left = '';
            $v_0.style.right = '';
        }
        Sys.UI.DomElement.removeCssClass($p0, 'hover-off');
        Sys.UI.DomElement.removeCssClass($p0, 'hover');
        if ($p0 === this.$O_2) {
            this.$O_2 = null;
        }
    },
    
    $3v_2: function() {ULS5Vl:;
        if (!SP.ScriptUtility.isNullOrUndefined(this.$C_2.querySelectorAll)) {
            var $v_0 = this.$C_2.querySelectorAll('a.new-window');
            for (var $v_1 = 0; $v_1 < $v_0.length; ++$v_1) {
                $v_0[$v_1].target = '_blank';
            }
        }
        else {
            var $v_2 = this.$C_2.getElementsByTagName('a');
            for (var $v_3 = 0; $v_3 < $v_2.length; ++$v_3) {
                if (Sys.UI.DomElement.containsCssClass($v_2[$v_3], 'new-window')) {
                    $v_2[$v_3].target = '_blank';
                }
            }
        }
    }
}


Type.registerNamespace('SP.Utilities');

SP.Utilities.DateTimeFormat = function() {}
SP.Utilities.DateTimeFormat.prototype = {
    dateTime: 0, 
    dateOnly: 1, 
    timeOnly: 2, 
    isO8601: 3, 
    monthDayOnly: 4, 
    monthYearOnly: 5
}
SP.Utilities.DateTimeFormat.registerEnum('SP.Utilities.DateTimeFormat', false);


SP.Utilities.IconSize = function() {}
SP.Utilities.IconSize.prototype = {
    size16: 0, 
    size32: 1
}
SP.Utilities.IconSize.registerEnum('SP.Utilities.IconSize', false);


SP.Utilities.PrincipalSource = function() {}
SP.Utilities.PrincipalSource.prototype = {
    none: 0, 
    userInfoList: 1, 
    windows: 2, 
    membershipProvider: 4, 
    roleProvider: 8, 
    all: 15
}
SP.Utilities.PrincipalSource.registerEnum('SP.Utilities.PrincipalSource', false);


SP.Utilities.PrincipalType = function() {}
SP.Utilities.PrincipalType.prototype = {
    none: 0, 
    user: 1, 
    distributionList: 2, 
    securityGroup: 4, 
    sharePointGroup: 8, 
    all: 15
}
SP.Utilities.PrincipalType.registerEnum('SP.Utilities.PrincipalType', false);


SP.Utilities.Utility = function(Context, ObjectPath) {ULS5Vl:;
    SP.Utilities.Utility.initializeBase(this, [ Context, ObjectPath ]);
}
SP.Utilities.Utility.getLayoutsPageUrl = function(pageName) {ULS5Vl:;
    return SP.Utilities.UrlBuilder.urlCombine(SP.PageContextInfo.get_webServerRelativeUrl(), '_layouts/' + pageName);
}
SP.Utilities.Utility.getLocalizedLayoutsPageUrl = function(pageName) {ULS5Vl:;
    return SP.Utilities.UrlBuilder.urlCombine(SP.PageContextInfo.get_webServerRelativeUrl(), SP.PageContextInfo.get_webLanguage().toString() + '/_layouts/' + pageName);
}
SP.Utilities.Utility.getImageUrl = function(imageName) {ULS5Vl:;
    return '/_layouts/images/' + imageName;
}
SP.Utilities.Utility.formatDateTime = function(Context, web, datetime, format) {ULS5Vl:;
    var $v_0;
    var $v_1 = new SP.ClientActionInvokeStaticMethod('{16f43e7e-bf35-475d-b677-9dc61e549339}', 'FormatDateTime', [ web, datetime, format ]);
    Context.addQuery($v_1);
    $v_0 = new SP.StringResult();
    Context.addQueryIdAndResultObject($v_1.get_id(), $v_0);
    return $v_0;
}
SP.Utilities.Utility.searchPrincipals = function(Context, web, input, scopes, sources, usersContainer, maxCount) {ULS5Vl:;
    var $v_0;
    var $v_1 = new SP.ClientActionInvokeStaticMethod('{16f43e7e-bf35-475d-b677-9dc61e549339}', 'SearchPrincipals', [ web, input, scopes, sources, usersContainer, maxCount ]);
    Context.addQuery($v_1);
    $v_0 = (([]));
    Context.addQueryIdAndResultObject($v_1.get_id(), $v_0);
    return $v_0;
}
SP.Utilities.Utility.getCurrentUserEmailAddresses = function(Context) {ULS5Vl:;
    var $v_0;
    var $v_1 = new SP.ClientActionInvokeStaticMethod('{16f43e7e-bf35-475d-b677-9dc61e549339}', 'GetCurrentUserEmailAddresses', null);
    Context.addQuery($v_1);
    $v_0 = new SP.StringResult();
    Context.addQueryIdAndResultObject($v_1.get_id(), $v_0);
    return $v_0;
}
SP.Utilities.Utility.createEmailBodyForInvitation = function(Context, pageAddress) {ULS5Vl:;
    var $v_0;
    var $v_1 = new SP.ClientActionInvokeStaticMethod('{16f43e7e-bf35-475d-b677-9dc61e549339}', 'CreateEmailBodyForInvitation', [ pageAddress ]);
    Context.addQuery($v_1);
    $v_0 = new SP.StringResult();
    Context.addQueryIdAndResultObject($v_1.get_id(), $v_0);
    return $v_0;
}
SP.Utilities.Utility.resolvePrincipal = function(Context, web, input, scopes, sources, usersContainer, inputIsEmailOnly) {ULS5Vl:;
    var $v_0;
    var $v_1 = new SP.ClientActionInvokeStaticMethod('{16f43e7e-bf35-475d-b677-9dc61e549339}', 'ResolvePrincipal', [ web, input, scopes, sources, usersContainer, inputIsEmailOnly ]);
    Context.addQuery($v_1);
    $v_0 = new SP.Utilities.PrincipalInfo();
    Context.addQueryIdAndResultObject($v_1.get_id(), $v_0);
    return $v_0;
}
SP.Utilities.Utility.createNewDiscussion = function(Context, list, title) {ULS5Vl:;
    var $v_0;
    $v_0 = new SP.ListItem(Context, new SP.ObjectPathStaticMethod(Context, '{16f43e7e-bf35-475d-b677-9dc61e549339}', 'CreateNewDiscussion', [ list, title ]));
    return $v_0;
}
SP.Utilities.Utility.createNewDiscussionReply = function(Context, parent) {ULS5Vl:;
    var $v_0;
    $v_0 = new SP.ListItem(Context, new SP.ObjectPathStaticMethod(Context, '{16f43e7e-bf35-475d-b677-9dc61e549339}', 'CreateNewDiscussionReply', [ parent ]));
    return $v_0;
}


SP.Utilities.MobileUtility = function(Context, ObjectPath) {ULS5Vl:;
    SP.Utilities.MobileUtility.initializeBase(this, [ Context, ObjectPath ]);
}


SP.Utilities.PrincipalInfo = function() {ULS5Vl:;
    SP.Utilities.PrincipalInfo.initializeBase(this);
}
SP.Utilities.PrincipalInfo.prototype = {
    $3I_1: 0,
    $U_1: null,
    $3H_1: 0,
    $S_1: null,
    $3L_1: null,
    $3F_1: null,
    $y_1: null,
    $35_1: null,
    $3D_1: null,
    
    get_principalType: function() {ULS5Vl:;
        return this.$3I_1;
    },
    
    get_loginName: function() {ULS5Vl:;
        return this.$U_1;
    },
    
    get_principalId: function() {ULS5Vl:;
        return this.$3H_1;
    },
    
    get_email: function() {ULS5Vl:;
        return this.$S_1;
    },
    
    get_sipAddress: function() {ULS5Vl:;
        return this.$3L_1;
    },
    
    get_mobile: function() {ULS5Vl:;
        return this.$3F_1;
    },
    
    get_displayName: function() {ULS5Vl:;
        return this.$y_1;
    },
    
    get_department: function() {ULS5Vl:;
        return this.$35_1;
    },
    
    get_jobTitle: function() {ULS5Vl:;
        return this.$3D_1;
    },
    
    get_typeId: function() {ULS5Vl:;
        return '{c88e4d2e-768d-4065-9da4-d2880e08733e}';
    },
    
    writeToXml: function(writer, serializationContext) {ULS5Vl:;
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = [ 'PrincipalType', 'LoginName', 'PrincipalId', 'Email', 'SIPAddress', 'Mobile', 'DisplayName', 'Department', 'JobTitle' ];
        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
    },
    
    initPropertiesFromJson: function(parentNode) {ULS5Vl:;
        var $v_0;
        $v_0 = parentNode.PrincipalType;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$3I_1 = ($v_0);
            delete parentNode.PrincipalType;
        }
        $v_0 = parentNode.LoginName;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$U_1 = ($v_0);
            delete parentNode.LoginName;
        }
        $v_0 = parentNode.PrincipalId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$3H_1 = ($v_0);
            delete parentNode.PrincipalId;
        }
        $v_0 = parentNode.Email;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$S_1 = ($v_0);
            delete parentNode.Email;
        }
        $v_0 = parentNode.SIPAddress;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$3L_1 = ($v_0);
            delete parentNode.SIPAddress;
        }
        $v_0 = parentNode.Mobile;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$3F_1 = ($v_0);
            delete parentNode.Mobile;
        }
        $v_0 = parentNode.DisplayName;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$y_1 = ($v_0);
            delete parentNode.DisplayName;
        }
        $v_0 = parentNode.Department;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$35_1 = ($v_0);
            delete parentNode.Department;
        }
        $v_0 = parentNode.JobTitle;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$3D_1 = ($v_0);
            delete parentNode.JobTitle;
        }
    }
}


Type.registerNamespace('SP.Application.UI');

SP.Application.UI.DefaultFormsInformationRequestor = function() {}
SP.Application.UI.DefaultFormsInformationRequestor.registerInterface('SP.Application.UI.DefaultFormsInformationRequestor');


SP.Application.UI.ViewSelectorMenuOptions = function() {}
SP.Application.UI.$create_ViewSelectorMenuOptions = function() {ULS5Vl:;
    return new SP.Application.UI.ViewSelectorMenuOptions();
}


SP.Application.UI.ViewInformationRequestor = function() {}
SP.Application.UI.ViewInformationRequestor.registerInterface('SP.Application.UI.ViewInformationRequestor');


SP.Application.UI.FormsInfo = function() {
}
SP.Application.UI.FormsInfo.prototype = {
    ContentTypeName: null,
    NewFormUrl: null,
    DisplayFormUrl: null,
    EditFormUrl: null
}


SP.Application.UI.DefaultFormsInformation = function() {
}
SP.Application.UI.DefaultFormsInformation.prototype = {
    DefaultForms: null,
    OtherForms: null
}


SP.Application.UI.DefaultFormsMenuBuilder = function(listId) {ULS5Vl:;
    this.$2i = Function.createDelegate(this, this.$48_0);
    this.$2j = Function.createDelegate(this, this.$49_0);
    this.$a_0 = listId;
}
SP.Application.UI.DefaultFormsMenuBuilder.getDefaultFormsInformation = function(requestor, listId) {ULS5Vl:;
    var $v_0 = new SP.Application.UI.DefaultFormsMenuBuilder(listId);
    $v_0.$2z_0(requestor);
}
SP.Application.UI.DefaultFormsMenuBuilder.$1k_0 = function($p0) {
    if (!SP.ScriptUtility.isNullOrUndefined($p0)) {
        if ($p0.startsWith('~list/')) {
            $p0 = $p0.substr(6);
        }
        else if ($p0.toUpperCase().startsWith('_LAYOUTS/')) {
            $p0 = '';
        }
    }
    return $p0;
}
SP.Application.UI.DefaultFormsMenuBuilder.$3n_0 = function($p0, $p1) {
    var $v_0 = new SP.Application.UI.DefaultFormsInformation();
    $v_0.DefaultForms = new SP.Application.UI.FormsInfo();
    if ($p0.get_baseType() !== 1) {
        $v_0.DefaultForms.NewFormUrl = $p0.get_defaultNewFormUrl();
    }
    $v_0.DefaultForms.DisplayFormUrl = $p0.get_defaultDisplayFormUrl();
    $v_0.DefaultForms.EditFormUrl = $p0.get_defaultEditFormUrl();
    $v_0.OtherForms = [];
    var $$enum_1_0 = $p1.getEnumerator();
    while ($$enum_1_0.moveNext()) {
        var $v_1 = $$enum_1_0.get_current();
        var $v_2 = new SP.Application.UI.FormsInfo();
        $v_2.ContentTypeName = $v_1.get_name();
        $v_2.NewFormUrl = SP.Application.UI.DefaultFormsMenuBuilder.$1k_0($v_1.get_newFormUrl());
        $v_2.DisplayFormUrl = SP.Application.UI.DefaultFormsMenuBuilder.$1k_0($v_1.get_displayFormUrl());
        $v_2.EditFormUrl = SP.Application.UI.DefaultFormsMenuBuilder.$1k_0($v_1.get_editFormUrl());
        Array.add($v_0.OtherForms, $v_2);
    }
    return $v_0;
}
SP.Application.UI.DefaultFormsMenuBuilder.prototype = {
    $a_0: null,
    $G_0: null,
    $1u_0: null,
    $9_0: null,
    
    $4B_0: function() {ULS5Vl:;
        var $v_0 = SP.ClientContext.get_current();
        var $v_1 = $v_0.get_web();
        this.$G_0 = $v_1.get_lists().getById(this.$a_0);
        this.$G_0.retrieve('BaseType', 'DefaultNewFormUrl', 'DefaultDisplayFormUrl', 'DefaultEditFormUrl');
        this.$1u_0 = this.$G_0.get_contentTypes();
        var $v_2 = this.$1u_0.retrieveItems();
        $v_2.retrieve([ 'Name', 'DisplayFormUrl', 'NewFormUrl', 'EditFormUrl' ]);
        return $v_0;
    },
    
    $2z_0: function($p0) {
        var $v_0 = this.$4B_0();
        this.$9_0 = $p0;
        $v_0.executeQueryAsync(this.$2j, this.$2i);
    },
    
    $49_0: function($p0, $p1) {
        if (!SP.ScriptUtility.isNullOrUndefined(this.$9_0)) {
            var $v_0 = SP.Application.UI.DefaultFormsMenuBuilder.$3n_0(this.$G_0, this.$1u_0);
            this.$9_0.onDefaultFormsInformationRetrieveSuccess($v_0);
        }
        this.$9_0 = null;
    },
    
    $48_0: function($p0, $p1) {
        if ($p1 && !SP.ScriptUtility.isNullOrUndefined($p1.get_message())) {
        }
        if (!SP.ScriptUtility.isNullOrUndefined(this.$9_0)) {
            this.$9_0.onDefaultFormsInformationRetrieveFailure();
        }
        this.$9_0 = null;
    }
}


SP.Application.UI.BrowserUtility = function() {
}
SP.Application.UI.BrowserUtility.$3x = function() {ULS5Vl:;
    return Sys.Browser.agent === Sys.Browser.Firefox || Sys.Browser.name.toLowerCase().indexOf('firefox') !== -1;
}


SP.Application.UI.ViewSelectorGroups = function() {
}
SP.Application.UI.ViewSelectorGroups.prototype = {
    ModeratedViews: null,
    PublicViews: null,
    PersonalViews: null,
    OtherViews: null,
    DefaultView: null,
    ViewCreation: null
}


SP.Application.UI.ViewSelectorMenuItem = function() {ULS5Vl:;
    this.Sequence = Number.MAX_VALUE;
}
SP.Application.UI.ViewSelectorMenuItem.prototype = {
    Text: '',
    ActionScriptText: '',
    NavigateUrl: '',
    ImageSourceUrl: '',
    Description: '',
    Id: '',
    ItemType: '',
    GroupId: 0
}


SP.Application.UI.ViewSelectorSubMenu = function() {
}
SP.Application.UI.ViewSelectorSubMenu.prototype = {
    Text: '',
    ImageSourceUrl: '',
    SubMenuItems: null
}


SP.Application.UI.ServerMenus = function() {ULS5Vl:;
    this.MenuItems = [];
}


SP.Application.UI.ViewSelectorMenuBuilder = function(elem, options) {ULS5Vl:;
    this.$1W = Function.createDelegate(this, this.$3k_0);
    this.$1X = Function.createDelegate(this, this.$3l_0);
    this.$R_0 = elem;
    this.$a_0 = new SP.Guid(options.listId);
    this.$2L_0 = new SP.Guid(options.viewId);
    this.$3R_0 = options.viewParameters;
    this.$16_0 = options;
}
SP.Application.UI.ViewSelectorMenuBuilder.showMenu = function(elem, options) {ULS5Vl:;
    var $v_0 = elem._menu;
    if ($v_0) {
        $v_0.show(elem, false, false, -1);
        return;
    }
    var $v_1 = new SP.Application.UI.ViewSelectorMenuBuilder(elem, options);
    $v_1.$3g_0();
}
SP.Application.UI.ViewSelectorMenuBuilder.getViewInformation = function(requestor, options) {ULS5Vl:;
    var $v_0 = new SP.Application.UI.ViewSelectorMenuBuilder(null, options);
    $v_0.$2z_0(requestor);
}
SP.Application.UI.ViewSelectorMenuBuilder.prototype = {
    $R_0: null,
    $a_0: null,
    $2L_0: null,
    $16_0: null,
    $3R_0: null,
    $9_0: null,
    $t_0: false,
    
    $2w_0: function($p0, $p1) {
        var $v_0 = SP.PageContextInfo.get_webServerRelativeUrl();
        var $v_1 = new SP.Utilities.UrlBuilder($v_0);
        $v_1.combinePath('_layouts/vsmenu.aspx');
        $v_1.addKeyValueQueryString('List', this.$a_0.toString('B'));
        $v_1.addKeyValueQueryString('View', this.$2L_0.toString('B'));
        $v_1.addKeyValueQueryString('Source', window.location.href);
        var $v_2 = $v_1.get_url();
        $v_2 += '&' + this.$16_0.viewParameters;
        SP.PageRequest.doGet($v_2, 'application/json', $p0, $p1);
    },
    
    $3g_0: function() {ULS5Vl:;
        this.$t_0 = true;
        this.$2w_0(this.$1X, this.$1W);
    },
    
    $2z_0: function($p0) {
        this.$t_0 = false;
        this.$9_0 = $p0;
        this.$2w_0(this.$1X, this.$1W);
    },
    
    $3l_0: function($p0, $p1) {
        var $v_0 = new SP.Application.UI.ServerMenus();
        $v_0.MenuItems = (eval($p1.get_executor().get_responseData()));
        if (this.$9_0) {
            var $v_1 = this.$3i_0($v_0.MenuItems);
            this.$9_0.onViewInformationReturned($v_1);
            this.$9_0 = null;
        }
        if (this.$R_0 && this.$t_0) {
            this.$3h_0(this.$R_0, $v_0.MenuItems);
            this.$t_0 = false;
        }
        this.$R_0 = null;
        this.$a_0 = null;
        this.$2L_0 = null;
        this.$3R_0 = null;
    },
    
    $3h_0: function($p0, $p1) {
        var $v_0 = $p0.id;
        if (SP.ScriptUtility.isNullOrEmptyString($v_0)) {
            $v_0 = SP.UI.UIUtility.generateRandomElementId();
        }
        $v_0 = $v_0 + '_menu';
        var $v_1 = SP.UI.Menu.create($v_0);
        this.$3d_0($v_1, $p1);
        this.$R_0._menu = $v_1;
        $v_1.show(this.$R_0, false, false, -1);
    },
    
    $3d_0: function($p0, $p1) {
        var $v_0 = null;
        var $v_1 = false;
        var $v_2 = SP.Application.UI.BrowserUtility.$3x();
        for (var $v_3 = 0; $v_3 < $p1.length; $v_3++) {
            var $v_4 = $p1[$v_3];
            var $v_5 = $v_4.ItemType;
            if ($v_5 === 'SubMenu') {
                $v_1 = true;
                if (!$v_2) {
                    $v_0 = $p0.addSubMenu($v_4.Text, $v_4.ImageSourceUrl, null, $v_4.Sequence, $v_4.Description, $v_4.Id);
                }
            }
            else if ($v_5 === 'MenuItem') {
                if ($v_1) {
                    if (!$v_2) {
                        this.$2s_0($v_0, $v_4);
                    }
                }
                else {
                    this.$2s_0($p0, $v_4);
                }
            }
            else if ($v_5 === 'SubMenuEnd') {
                $v_1 = false;
            }
            else if ($v_5 === 'MenuSeparator') {
                if ($v_1) {
                    if (!$v_2) {
                        $v_0.addSeparator();
                    }
                }
                else {
                    $p0.addSeparator();
                }
            }
        }
    },
    
    $2s_0: function($p0, $p1) {
        $p0.addMenuItem($p1.Text, $p1.ActionScriptText, $p1.ImageSourceUrl, null, $p1.Sequence, $p1.Description, $p1.Id);
    },
    
    $3i_0: function($p0) {
        var $v_0 = new SP.Application.UI.ViewSelectorGroups();
        $v_0.ModeratedViews = [];
        $v_0.PublicViews = [];
        $v_0.PersonalViews = [];
        $v_0.OtherViews = [];
        $v_0.DefaultView = null;
        $v_0.ViewCreation = [];
        var $v_1 = null;
        var $v_2 = false;
        for (var $v_3 = 0; $v_3 < $p0.length; $v_3++) {
            var $v_4 = $p0[$v_3];
            var $v_5 = $v_4.ItemType;
            var $v_6 = $v_4.GroupId;
            if ($v_5 === 'SubMenu') {
                $v_2 = true;
                $v_1 = new SP.Application.UI.ViewSelectorSubMenu();
                $v_1.Text = $v_4.Text;
                $v_1.ImageSourceUrl = $v_4.ImageSourceUrl;
                $v_1.SubMenuItems = [];
                switch ($v_6) {
                    case 300:
                        Array.add($v_0.PublicViews, $v_1);
                        break;
                    case 200:
                        Array.add($v_0.PersonalViews, $v_1);
                        break;
                    case 400:
                        Array.add($v_0.ModeratedViews, $v_1);
                        break;
                    case 500:
                        Array.add($v_0.ViewCreation, $v_1);
                        break;
                    default:
                        Array.add($v_0.OtherViews, $v_1);
                        break;
                }
            }
            else if ($v_5 === 'SubMenuEnd') {
                $v_2 = false;
            }
            else if ($v_5 === 'MenuSeparator') {
                continue;
            }
            else {
                if ($v_2) {
                    Array.add($v_1.SubMenuItems, $v_4);
                }
                else {
                    switch ($v_6) {
                        case 300:
                            Array.add($v_0.PublicViews, $v_4);
                            break;
                        case 100:
                            $v_0.DefaultView = $v_4;
                            break;
                        case 500:
                            if ($v_4.Id === 'CreateView') {
                                if (this.$16_0.showCreateView) {
                                    Array.add($v_0.ViewCreation, $v_4);
                                }
                            }
                            else if ($v_4.Id === 'ModifyView') {
                                if (this.$16_0.showEditView) {
                                    Array.add($v_0.ViewCreation, $v_4);
                                }
                            }
                            break;
                        case 200:
                            Array.add($v_0.PersonalViews, $v_4);
                            break;
                        case 400:
                            Array.add($v_0.ModeratedViews, $v_4);
                            break;
                        default:
                            Array.add($v_0.OtherViews, $v_4);
                            break;
                    }
                }
            }
        }
        return $v_0;
    },
    
    $3k_0: function($p0, $p1) {
    }
}


SP.Application.UI.MoreColorsPicker = function(e) {ULS5Vl:;
    this.$2b = Function.createDelegate(this, this.$42_2);
    this.$2c = Function.createDelegate(this, this.$43_2);
    SP.Application.UI.MoreColorsPicker.initializeBase(this, [ e ]);
}
SP.Application.UI.MoreColorsPicker.$3r_2 = function() {ULS5Vl:;
    if (SP.Application.UI.MoreColorsPicker.$Z_2) {
        return;
    }
    SP.Application.UI.MoreColorsPicker.$Z_2 = [ new SP.Application.UI.MappedColor('#003366', new Sys.UI.Point(42, 3)), new SP.Application.UI.MappedColor('#336699', new Sys.UI.Point(56, 3)), new SP.Application.UI.MappedColor('#3366CC', new Sys.UI.Point(70, 3)), new SP.Application.UI.MappedColor('#003399', new Sys.UI.Point(84, 3)), new SP.Application.UI.MappedColor('#000099', new Sys.UI.Point(98, 3)), new SP.Application.UI.MappedColor('#0000CC', new Sys.UI.Point(112, 3)), new SP.Application.UI.MappedColor('#000066', new Sys.UI.Point(126, 3)), new SP.Application.UI.MappedColor('#006666', new Sys.UI.Point(35, 15)), new SP.Application.UI.MappedColor('#006699', new Sys.UI.Point(49, 15)), new SP.Application.UI.MappedColor('#0099CC', new Sys.UI.Point(63, 15)), new SP.Application.UI.MappedColor('#0066CC', new Sys.UI.Point(77, 15)), new SP.Application.UI.MappedColor('#0033CC', new Sys.UI.Point(91, 15)), new SP.Application.UI.MappedColor('#0000FF', new Sys.UI.Point(105, 15)), new SP.Application.UI.MappedColor('#3333FF', new Sys.UI.Point(119, 15)), new SP.Application.UI.MappedColor('#333399', new Sys.UI.Point(133, 15)), new SP.Application.UI.MappedColor('#008080', new Sys.UI.Point(28, 27)), new SP.Application.UI.MappedColor('#009999', new Sys.UI.Point(42, 27)), new SP.Application.UI.MappedColor('#33CCCC', new Sys.UI.Point(56, 27)), new SP.Application.UI.MappedColor('#00CCFF', new Sys.UI.Point(70, 27)), new SP.Application.UI.MappedColor('#0099FF', new Sys.UI.Point(84, 27)), new SP.Application.UI.MappedColor('#0066FF', new Sys.UI.Point(98, 27)), new SP.Application.UI.MappedColor('#3366FF', new Sys.UI.Point(112, 27)), new SP.Application.UI.MappedColor('#3333CC', new Sys.UI.Point(126, 27)), new SP.Application.UI.MappedColor('#666699', new Sys.UI.Point(140, 27)), new SP.Application.UI.MappedColor('#339966', new Sys.UI.Point(21, 39)), new SP.Application.UI.MappedColor('#00CC99', new Sys.UI.Point(35, 39)), new SP.Application.UI.MappedColor('#00FFCC', new Sys.UI.Point(49, 39)), new SP.Application.UI.MappedColor('#00FFFF', new Sys.UI.Point(63, 39)), new SP.Application.UI.MappedColor('#33CCFF', new Sys.UI.Point(77, 39)), new SP.Application.UI.MappedColor('#3399FF', new Sys.UI.Point(91, 39)), new SP.Application.UI.MappedColor('#6699FF', new Sys.UI.Point(105, 39)), new SP.Application.UI.MappedColor('#6666FF', new Sys.UI.Point(119, 39)), new SP.Application.UI.MappedColor('#6600FF', new Sys.UI.Point(133, 39)), new SP.Application.UI.MappedColor('#6600CC', new Sys.UI.Point(147, 39)), new SP.Application.UI.MappedColor('#339933', new Sys.UI.Point(14, 51)), new SP.Application.UI.MappedColor('#00CC66', new Sys.UI.Point(28, 51)), new SP.Application.UI.MappedColor('#00FF99', new Sys.UI.Point(42, 51)), new SP.Application.UI.MappedColor('#66FFCC', new Sys.UI.Point(56, 51)), new SP.Application.UI.MappedColor('#66FFFF', new Sys.UI.Point(70, 51)), new SP.Application.UI.MappedColor('#66CCFF', new Sys.UI.Point(84, 51)), new SP.Application.UI.MappedColor('#99CCFF', new Sys.UI.Point(98, 51)), new SP.Application.UI.MappedColor('#9999FF', new Sys.UI.Point(112, 51)), new SP.Application.UI.MappedColor('#9966FF', new Sys.UI.Point(126, 51)), new SP.Application.UI.MappedColor('#9933FF', new Sys.UI.Point(140, 51)), new SP.Application.UI.MappedColor('#9900FF', new Sys.UI.Point(154, 51)), new SP.Application.UI.MappedColor('#006600', new Sys.UI.Point(7, 63)), new SP.Application.UI.MappedColor('#00CC00', new Sys.UI.Point(21, 63)), new SP.Application.UI.MappedColor('#00FF00', new Sys.UI.Point(35, 63)), new SP.Application.UI.MappedColor('#66FF99', new Sys.UI.Point(49, 63)), new SP.Application.UI.MappedColor('#99FFCC', new Sys.UI.Point(63, 63)), new SP.Application.UI.MappedColor('#CCFFFF', new Sys.UI.Point(77, 63)), new SP.Application.UI.MappedColor('#CCECFF', new Sys.UI.Point(91, 63)), new SP.Application.UI.MappedColor('#CCCCFF', new Sys.UI.Point(105, 63)), new SP.Application.UI.MappedColor('#CC99FF', new Sys.UI.Point(119, 63)), new SP.Application.UI.MappedColor('#CC66FF', new Sys.UI.Point(133, 63)), new SP.Application.UI.MappedColor('#CC00FF', new Sys.UI.Point(147, 63)), new SP.Application.UI.MappedColor('#9900CC', new Sys.UI.Point(161, 63)), new SP.Application.UI.MappedColor('#003300', new Sys.UI.Point(0, 75)), new SP.Application.UI.MappedColor('#008000', new Sys.UI.Point(14, 75)), new SP.Application.UI.MappedColor('#33CC33', new Sys.UI.Point(28, 75)), new SP.Application.UI.MappedColor('#66FF66', new Sys.UI.Point(42, 75)), new SP.Application.UI.MappedColor('#99FF99', new Sys.UI.Point(56, 75)), new SP.Application.UI.MappedColor('#CCFFCC', new Sys.UI.Point(70, 75)), new SP.Application.UI.MappedColor('#FFFFFF', new Sys.UI.Point(84, 75)), new SP.Application.UI.MappedColor('#FFCCFF', new Sys.UI.Point(98, 75)), new SP.Application.UI.MappedColor('#FF99FF', new Sys.UI.Point(112, 75)), new SP.Application.UI.MappedColor('#FF66FF', new Sys.UI.Point(126, 75)), new SP.Application.UI.MappedColor('#FF00FF', new Sys.UI.Point(140, 75)), new SP.Application.UI.MappedColor('#CC00CC', new Sys.UI.Point(154, 75)), new SP.Application.UI.MappedColor('#660066', new Sys.UI.Point(168, 75)), new SP.Application.UI.MappedColor('#336600', new Sys.UI.Point(7, 87)), new SP.Application.UI.MappedColor('#009900', new Sys.UI.Point(21, 87)), new SP.Application.UI.MappedColor('#66FF33', new Sys.UI.Point(35, 87)), new SP.Application.UI.MappedColor('#99FF66', new Sys.UI.Point(49, 87)), new SP.Application.UI.MappedColor('#CCFF99', new Sys.UI.Point(63, 87)), new SP.Application.UI.MappedColor('#FFFFCC', new Sys.UI.Point(77, 87)), new SP.Application.UI.MappedColor('#FFCCCC', new Sys.UI.Point(91, 87)), new SP.Application.UI.MappedColor('#FF99CC', new Sys.UI.Point(105, 87)), new SP.Application.UI.MappedColor('#FF66CC', new Sys.UI.Point(119, 87)), new SP.Application.UI.MappedColor('#FF33CC', new Sys.UI.Point(133, 87)), new SP.Application.UI.MappedColor('#CC0099', new Sys.UI.Point(147, 87)), new SP.Application.UI.MappedColor('#800080', new Sys.UI.Point(161, 87)), new SP.Application.UI.MappedColor('#333300', new Sys.UI.Point(14, 99)), new SP.Application.UI.MappedColor('#669900', new Sys.UI.Point(28, 99)), new SP.Application.UI.MappedColor('#99FF33', new Sys.UI.Point(42, 99)), new SP.Application.UI.MappedColor('#CCFF66', new Sys.UI.Point(56, 99)), new SP.Application.UI.MappedColor('#FFFF99', new Sys.UI.Point(70, 99)), new SP.Application.UI.MappedColor('#FFCC99', new Sys.UI.Point(84, 99)), new SP.Application.UI.MappedColor('#FF9999', new Sys.UI.Point(98, 99)), new SP.Application.UI.MappedColor('#FF6699', new Sys.UI.Point(112, 99)), new SP.Application.UI.MappedColor('#FF3399', new Sys.UI.Point(126, 99)), new SP.Application.UI.MappedColor('#CC3399', new Sys.UI.Point(140, 99)), new SP.Application.UI.MappedColor('#990099', new Sys.UI.Point(154, 99)), new SP.Application.UI.MappedColor('#666633', new Sys.UI.Point(21, 111)), new SP.Application.UI.MappedColor('#99CC00', new Sys.UI.Point(35, 111)), new SP.Application.UI.MappedColor('#CCFF33', new Sys.UI.Point(49, 111)), new SP.Application.UI.MappedColor('#FFFF66', new Sys.UI.Point(63, 111)), new SP.Application.UI.MappedColor('#FFCC66', new Sys.UI.Point(77, 111)), new SP.Application.UI.MappedColor('#FF9966', new Sys.UI.Point(91, 111)), new SP.Application.UI.MappedColor('#FF7C80', new Sys.UI.Point(105, 111)), new SP.Application.UI.MappedColor('#FF0066', new Sys.UI.Point(119, 111)), new SP.Application.UI.MappedColor('#D60093', new Sys.UI.Point(133, 111)), new SP.Application.UI.MappedColor('#993366', new Sys.UI.Point(147, 111)), new SP.Application.UI.MappedColor('#808000', new Sys.UI.Point(28, 123)), new SP.Application.UI.MappedColor('#CCCC00', new Sys.UI.Point(42, 123)), new SP.Application.UI.MappedColor('#FFFF00', new Sys.UI.Point(56, 123)), new SP.Application.UI.MappedColor('#FFCC00', new Sys.UI.Point(70, 123)), new SP.Application.UI.MappedColor('#FF9933', new Sys.UI.Point(84, 123)), new SP.Application.UI.MappedColor('#FF6600', new Sys.UI.Point(98, 123)), new SP.Application.UI.MappedColor('#FF5050', new Sys.UI.Point(112, 123)), new SP.Application.UI.MappedColor('#CC0066', new Sys.UI.Point(126, 123)), new SP.Application.UI.MappedColor('#660033', new Sys.UI.Point(140, 123)), new SP.Application.UI.MappedColor('#996633', new Sys.UI.Point(35, 135)), new SP.Application.UI.MappedColor('#CC9900', new Sys.UI.Point(49, 135)), new SP.Application.UI.MappedColor('#FF9900', new Sys.UI.Point(63, 135)), new SP.Application.UI.MappedColor('#CC6600', new Sys.UI.Point(77, 135)), new SP.Application.UI.MappedColor('#FF3300', new Sys.UI.Point(91, 135)), new SP.Application.UI.MappedColor('#FF0000', new Sys.UI.Point(105, 135)), new SP.Application.UI.MappedColor('#CC0000', new Sys.UI.Point(119, 135)), new SP.Application.UI.MappedColor('#990033', new Sys.UI.Point(133, 135)), new SP.Application.UI.MappedColor('#663300', new Sys.UI.Point(42, 147)), new SP.Application.UI.MappedColor('#996600', new Sys.UI.Point(56, 147)), new SP.Application.UI.MappedColor('#CC3300', new Sys.UI.Point(70, 147)), new SP.Application.UI.MappedColor('#993300', new Sys.UI.Point(84, 147)), new SP.Application.UI.MappedColor('#990000', new Sys.UI.Point(98, 147)), new SP.Application.UI.MappedColor('#800000', new Sys.UI.Point(112, 147)), new SP.Application.UI.MappedColor('#A50021', new Sys.UI.Point(126, 147)), new SP.Application.UI.MappedColor('#F8F8F8', new Sys.UI.Point(35, 175)), new SP.Application.UI.MappedColor('#DDDDDD', new Sys.UI.Point(49, 175)), new SP.Application.UI.MappedColor('#B2B2B2', new Sys.UI.Point(63, 175)), new SP.Application.UI.MappedColor('#808080', new Sys.UI.Point(77, 175)), new SP.Application.UI.MappedColor('#5F5F5F', new Sys.UI.Point(91, 175)), new SP.Application.UI.MappedColor('#333333', new Sys.UI.Point(105, 175)), new SP.Application.UI.MappedColor('#1C1C1C', new Sys.UI.Point(119, 175)), new SP.Application.UI.MappedColor('#080808', new Sys.UI.Point(133, 175)), new SP.Application.UI.MappedColor('#EAEAEA', new Sys.UI.Point(42, 187)), new SP.Application.UI.MappedColor('#C0C0C0', new Sys.UI.Point(56, 187)), new SP.Application.UI.MappedColor('#969696', new Sys.UI.Point(70, 187)), new SP.Application.UI.MappedColor('#777777', new Sys.UI.Point(84, 187)), new SP.Application.UI.MappedColor('#4D4D4D', new Sys.UI.Point(98, 187)), new SP.Application.UI.MappedColor('#292929', new Sys.UI.Point(112, 187)), new SP.Application.UI.MappedColor('#111111', new Sys.UI.Point(126, 187)) ];
}
SP.Application.UI.MoreColorsPicker.prototype = {
    $1Q_2: null,
    $2u_2: false,
    $J_2: null,
    $3T_2: null,
    $2O_2: null,
    $2Q_2: null,
    $1g_2: null,
    $1h_2: null,
    
    initialize: function() {ULS5Vl:;
        SP.Application.UI.MoreColorsPicker.callBaseMethod(this, 'initialize');
        this.$1Q_2 = this.get_element().getElementsByTagName('map')[0];
        this.$3T_2 = this.get_element().getElementsByTagName('input')[0];
        this.$J_2 = this.get_element().getElementsByTagName('input')[1];
        this.$J_2.focus();
        this.$1h_2 = this.$2c;
        $addHandler(this.$J_2, 'blur', this.$1h_2);
        var $v_0 = this.get_element().getElementsByTagName('div');
        for (var $v_1 = 0; $v_1 < $v_0.length; ++$v_1) {
            if (Sys.UI.DomElement.containsCssClass($v_0[$v_1], 'new')) {
                this.$2O_2 = $v_0[$v_1];
            }
            else if (Sys.UI.DomElement.containsCssClass($v_0[$v_1], 'old')) {
                this.$2Q_2 = $v_0[$v_1];
            }
        }
        this.$1g_2 = this.$2b;
        SP.Application.UI.MoreColorsPicker.$3r_2();
        if (!this.$1Q_2.getElementsByTagName('area').length) {
            for (var $v_3 = 0; $v_3 < SP.Application.UI.MoreColorsPicker.$Z_2.length; ++$v_3) {
                this.$31_2(SP.Application.UI.MoreColorsPicker.$Z_2[$v_3]);
            }
            var $v_2 = new SP.Application.UI.MappedColor('#000000', new Sys.UI.Point(154, 175));
            $v_2.$o_0 = true;
            this.$31_2($v_2);
        }
    },
    
    $31_2: function($p0) {
        var $v_0 = document.createElement('area');
        $v_0.setAttribute('alt', $p0.$m_0.toString());
        $v_0.setAttribute('value', $p0.$m_0.toString());
        $v_0.setAttribute('shape', 'poly');
        $v_0.setAttribute('coords', $p0.buildCoordsAttributeValue());
        $v_0.setAttribute('href', '#');
        $addHandler($v_0, 'click', this.$1g_2);
        this.$1Q_2.appendChild($v_0);
    },
    
    dispose: function() {ULS5Vl:;
        try {
            $removeHandler(this.$J_2, 'blur', this.$1h_2);
            var $v_0 = this.$1Q_2.getElementsByTagName('area');
            for (var $v_1 = 0; $v_1 < $v_0.length; ++$v_1) {
                $removeHandler($v_0[$v_1], 'click', this.$1g_2);
            }
        }
        finally {
            SP.Application.UI.MoreColorsPicker.callBaseMethod(this, 'dispose');
        }
    },
    
    $43_2: function($p0) {
        this.set_colorValue(this.$J_2.value);
    },
    
    $42_2: function($p0) {
        var $v_0 = $p0.target;
        this.set_colorValue($v_0.getAttribute('value'));
        $p0.preventDefault();
    },
    
    get_colorValue: function() {ULS5Vl:;
        return this.$J_2.value;
    },
    set_colorValue: function(value) {ULS5Vl:;
        if (!this.$2u_2) {
            this.$2Q_2.style.backgroundColor = value;
            this.$2Q_2.title = value;
            this.$3T_2.value = value;
            this.$2u_2 = true;
        }
        this.$2O_2.style.backgroundColor = value;
        this.$2O_2.title = value;
        this.$J_2.value = value;
        this.raisePropertyChanged('colorValue');
        return value;
    }
}


SP.Application.UI.MappedColor = function(hexColor, position) {ULS5Vl:;
    this.$m_0 = hexColor;
    this.$f_0 = position;
}
SP.Application.UI.MappedColor.$3s_0 = function() {ULS5Vl:;
    if (SP.Application.UI.MappedColor.$P_0) {
        return;
    }
    SP.Application.UI.MappedColor.$P_0 = [ new Sys.UI.Point(0, 0), new Sys.UI.Point(2, 0), new Sys.UI.Point(2, -1), new Sys.UI.Point(4, -1), new Sys.UI.Point(4, -2), new Sys.UI.Point(6, -2), new Sys.UI.Point(6, -3), new Sys.UI.Point(8, -3), new Sys.UI.Point(8, -2), new Sys.UI.Point(10, -2), new Sys.UI.Point(10, -1), new Sys.UI.Point(12, -1), new Sys.UI.Point(12, 0), new Sys.UI.Point(13, 0), new Sys.UI.Point(13, 8), new Sys.UI.Point(12, 8), new Sys.UI.Point(12, 9), new Sys.UI.Point(10, 9), new Sys.UI.Point(10, 10), new Sys.UI.Point(8, 10), new Sys.UI.Point(8, 11), new Sys.UI.Point(6, 11), new Sys.UI.Point(6, 10), new Sys.UI.Point(4, 10), new Sys.UI.Point(4, 9), new Sys.UI.Point(2, 9), new Sys.UI.Point(2, 8), new Sys.UI.Point(0, 8) ];
}
SP.Application.UI.MappedColor.$3u_0 = function() {ULS5Vl:;
    if (SP.Application.UI.MappedColor.$p_0) {
        return;
    }
    SP.Application.UI.MappedColor.$p_0 = [ new Sys.UI.Point(0, 0), new Sys.UI.Point(2, 0), new Sys.UI.Point(2, -1), new Sys.UI.Point(4, -1), new Sys.UI.Point(4, -2), new Sys.UI.Point(6, -2), new Sys.UI.Point(6, -3), new Sys.UI.Point(7, -3), new Sys.UI.Point(7, -4), new Sys.UI.Point(9, -4), new Sys.UI.Point(9, -5), new Sys.UI.Point(11, -5), new Sys.UI.Point(11, -6), new Sys.UI.Point(13, -6), new Sys.UI.Point(13, -7), new Sys.UI.Point(15, -7), new Sys.UI.Point(15, -6), new Sys.UI.Point(17, -6), new Sys.UI.Point(17, -5), new Sys.UI.Point(19, -5), new Sys.UI.Point(19, -4), new Sys.UI.Point(20, -4), new Sys.UI.Point(20, -3), new Sys.UI.Point(22, -3), new Sys.UI.Point(22, -2), new Sys.UI.Point(24, -2), new Sys.UI.Point(24, -1), new Sys.UI.Point(26, -1), new Sys.UI.Point(26, 0), new Sys.UI.Point(27, 0), new Sys.UI.Point(27, 16), new Sys.UI.Point(26, 16), new Sys.UI.Point(26, 17), new Sys.UI.Point(24, 17), new Sys.UI.Point(24, 18), new Sys.UI.Point(22, 18), new Sys.UI.Point(22, 19), new Sys.UI.Point(20, 19), new Sys.UI.Point(20, 20), new Sys.UI.Point(19, 20), new Sys.UI.Point(19, 21), new Sys.UI.Point(17, 21), new Sys.UI.Point(17, 22), new Sys.UI.Point(15, 22), new Sys.UI.Point(15, 23), new Sys.UI.Point(13, 23), new Sys.UI.Point(13, 22), new Sys.UI.Point(11, 22), new Sys.UI.Point(11, 21), new Sys.UI.Point(9, 21), new Sys.UI.Point(9, 20), new Sys.UI.Point(7, 20), new Sys.UI.Point(7, 19), new Sys.UI.Point(6, 19), new Sys.UI.Point(6, 18), new Sys.UI.Point(4, 18), new Sys.UI.Point(4, 17), new Sys.UI.Point(2, 17), new Sys.UI.Point(2, 16), new Sys.UI.Point(0, 16) ];
}
SP.Application.UI.MappedColor.prototype = {
    $m_0: null,
    $f_0: null,
    $o_0: false,
    
    get_hexColor: function() {ULS5Vl:;
        return this.$m_0;
    },
    
    get_isLarge: function() {ULS5Vl:;
        return this.$o_0;
    },
    set_isLarge: function($p0) {
        this.$o_0 = $p0;
        return $p0;
    },
    
    buildCoordsAttributeValue: function() {ULS5Vl:;
        SP.Application.UI.MappedColor.$3s_0();
        SP.Application.UI.MappedColor.$3u_0();
        var $v_0 = '';
        if (SP.Application.UI.MappedColor.$P_0.length > 0) {
            var $v_1 = SP.Application.UI.MappedColor.$P_0[0];
            $v_0 += ($v_1.x + this.$f_0.x).toString() + ',' + ($v_1.y + this.$f_0.y).toString();
            var $v_2 = (this.$o_0) ? SP.Application.UI.MappedColor.$p_0 : SP.Application.UI.MappedColor.$P_0;
            for (var $v_3 = 1; $v_3 < $v_2.length; ++$v_3) {
                $v_1 = $v_2[$v_3];
                $v_0 += ' ' + ($v_1.x + this.$f_0.x).toString() + ',' + ($v_1.y + this.$f_0.y).toString();
            }
        }
        return $v_0;
    }
}


SP.Application.UI.MoreColorsPage = function(e) {ULS5Vl:;
    this.$2Z = Function.createDelegate(this, this.$40_2);
    this.$2g = Function.createDelegate(this, this.$45_2);
    this.$2h = Function.createDelegate(this, this.$46_2);
    SP.Application.UI.MoreColorsPage.initializeBase(this, [ e ]);
}
SP.Application.UI.MoreColorsPage.prototype = {
    $e_2: null,
    $1P_2: null,
    $1e_2: null,
    $3X_2: null,
    $2P_2: null,
    $2t_2: null,
    
    initialize: function() {ULS5Vl:;
        SP.Application.UI.MoreColorsPage.callBaseMethod(this, 'initialize');
        this.$1P_2 = $get('OkButton');
        this.$1e_2 = $get('CancelButton');
        this.$3X_2 = this.$2h;
        this.$e_2.add_propertyChanged(this.$3X_2);
        var $v_0 = window.self.frameElement;
        if ($v_0) {
            var $v_1 = $v_0.dialogArgs;
            if ($v_1) {
                this.$e_2.set_colorValue($v_1);
            }
        }
        this.$1P_2.setAttribute('onclick', '');
        this.$2P_2 = this.$2g;
        $addHandler(this.$1P_2, 'click', this.$2P_2);
        this.$1e_2.setAttribute('onclick', '');
        this.$2t_2 = this.$2Z;
        $addHandler(this.$1e_2, 'click', this.$2t_2);
    },
    
    dispose: function() {ULS5Vl:;
        try {
            $removeHandler(this.$1P_2, 'click', this.$2P_2);
        }
        finally {
            SP.Application.UI.MoreColorsPage.callBaseMethod(this, 'dispose');
        }
    },
    
    $46_2: function($p0, $p1) {
        if ($p1.get_propertyName() === 'colorValue' && SP.UI.ModalDialog.get_childDialog()) {
            SP.UI.ModalDialog.get_childDialog().set_returnValue(this.$e_2.get_colorValue());
        }
    },
    
    $45_2: function($p0) {
        $p0.preventDefault();
        $p0.stopPropagation();
        if (SP.UI.ModalDialog.get_childDialog()) {
            SP.UI.ModalDialog.get_childDialog().close(1);
        }
    },
    
    $40_2: function($p0) {
        $p0.preventDefault();
        $p0.stopPropagation();
        if (SP.UI.ModalDialog.get_childDialog()) {
            SP.UI.ModalDialog.get_childDialog().close(0);
        }
    },
    
    get_moreColorsPicker: function() {ULS5Vl:;
        return this.$e_2;
    },
    set_moreColorsPicker: function(value) {ULS5Vl:;
        this.$e_2 = value;
        return value;
    }
}


SP.Application.UI.ThemeWebPage = function(e) {ULS5Vl:;
    this.$2k = Function.createDelegate(this, this.onThemeSelectionChanged);
    this.$l_2 = new Sys.EventHandlerList();
    SP.Application.UI.ThemeWebPage.initializeBase(this, [ e ]);
}
SP.Application.UI.ThemeWebPage.prototype = {
    $h_2: null,
    $1V_2: null,
    $2W_2: null,
    
    add_themeDisplayUpdated: function(value) {ULS5Vl:;
        this.$l_2.addHandler('__ThemeDisplayUpdated', value);
    },
    remove_themeDisplayUpdated: function(value) {ULS5Vl:;
        this.$l_2.removeHandler('__ThemeDisplayUpdated', value);
    },
    
    $4C_2: function() {ULS5Vl:;
        var $v_0 = this.$l_2.getHandler('__ThemeDisplayUpdated');
        if ($v_0) {
            $v_0(null, Sys.EventArgs.Empty);
        }
    },
    
    initialize: function() {ULS5Vl:;
        SP.Application.UI.ThemeWebPage.callBaseMethod(this, 'initialize');
        this.$1V_2 = $get('theme-display');
        this.$2W_2 = this.$2k;
        $addHandler(this.$h_2, 'change', this.$2W_2);
    },
    
    dispose: function() {ULS5Vl:;
        try {
            $removeHandler(this.$h_2, 'change', this.$2W_2);
        }
        finally {
            SP.Application.UI.ThemeWebPage.callBaseMethod(this, 'dispose');
        }
    },
    
    onThemeSelectionChanged: function(evt) {ULS5Vl:;
        this.updateThemeDisplay();
    },
    
    updateThemeDisplay: function() {ULS5Vl:;
        var $v_0 = window.themes[this.$h_2.value];
        var $v_1 = this.$1V_2.getElementsByTagName('li');
        for (var $v_5 = 0; $v_5 < $v_1.length; ++$v_5) {
            if (Sys.UI.DomElement.containsCssClass($v_1[$v_5], 'color')) {
                var $v_6 = null;
                if ($v_0) {
                    $v_6 = $v_0[$v_1[$v_5].getAttribute('themecolor')].Shades;
                }
                var $v_7 = $v_1[$v_5].getElementsByTagName('li');
                for (var $v_8 = 0; $v_8 < $v_7.length; ++$v_8) {
                    if ($v_6) {
                        $v_7[$v_8].style.backgroundColor = $v_6[$v_8].HtmlColor;
                    }
                    else {
                        $v_7[$v_8].style.backgroundColor = '';
                    }
                }
            }
        }
        var $v_2 = this.$1V_2.getElementsByTagName('a');
        $v_2[0].style.color = ($v_0) ? $v_0.HyperlinkColor.DefaultColor.HtmlColor : '';
        $v_2[1].style.color = ($v_0) ? $v_0.FollowedHyperlinkColor.DefaultColor.HtmlColor : '';
        var $v_3 = this.$1V_2.getElementsByTagName('li');
        $v_3[$v_3.length - 2].style.fontFamily = ($v_0) ? $v_0.MajorFont.LatinFont : '';
        $v_3[$v_3.length - 1].style.fontFamily = ($v_0) ? $v_0.MinorFont.LatinFont : '';
        var $v_4 = $get('accdesc');
        if (null !== $v_4) {
            $v_4.innerHTML = ($v_0) ? SP.Utilities.HttpUtility.htmlEncode($v_0.AccessibleDescription) : '';
        }
        this.$4C_2();
    },
    
    get_thmxThemes: function() {ULS5Vl:;
        return this.$h_2;
    },
    set_thmxThemes: function(value) {ULS5Vl:;
        this.$h_2 = value;
        return value;
    }
}


SP.Application.UI.WikiPageNameInPlaceEditor = function(ownerDoc, displayElemId, editElemId, editTextBoxId) {ULS5Vl:;
    this.$2a = Function.createDelegate(this, this.$41_0);
    this.$2l = Function.createDelegate(this, this.$4A_0);
    this.$2d = Function.createDelegate(this, this.$44_0);
    this.$18_0 = ownerDoc;
    this.$D_0 = this.$18_0.getElementById(displayElemId);
    this.$1y_0 = this.$18_0.getElementById(editElemId);
    this.$Q_0 = this.$18_0.getElementById(editTextBoxId);
    this.$3B_0 = this.$2d;
    this.$3P_0 = this.$2l;
    this.$34_0 = this.$2a;
}
SP.Application.UI.WikiPageNameInPlaceEditor.prototype = {
    $18_0: null,
    $D_0: null,
    $1y_0: null,
    $Q_0: null,
    $3G_0: null,
    $39_0: false,
    $3B_0: null,
    $3P_0: null,
    $34_0: null,
    
    editingPageCallback: function() {ULS5Vl:;
        this.$3G_0 = this.$Q_0.value.trim();
    },
    
    $44_0: function($p0) {
        this.$D_0.className = 'ms-WikiPageNameEditor-DisplayHover';
    },
    
    $4A_0: function($p0) {
        this.$D_0.className = 'ms-WikiPageNameEditor-DisplayClickable';
    },
    
    $41_0: function($p0) {
        this.$D_0.style.display = 'none';
        this.$1y_0.style.display = 'inline';
        this.$Q_0.focus();
    },
    
    savingPageCallback: function() {ULS5Vl:;
        this.$Q_0.value = this.$Q_0.value.trim();
        if (this.$3G_0 === this.$Q_0.value) {
            if (this.$39_0) {
                $removeHandler(this.$D_0, 'mouseover', this.$3B_0);
                $removeHandler(this.$D_0, 'mouseout', this.$3P_0);
                $removeHandler(this.$D_0, 'click', this.$34_0);
                this.$39_0 = false;
            }
            this.$D_0.className = 'ms-WikiPageNameEditor-Display';
            this.$D_0.style.display = 'inline';
            this.$1y_0.style.display = 'none';
        }
    }
}


Type.registerNamespace('SP.UI.ApplicationPages');

SP.UI.ApplicationPages.ISelectorComponent = function() {}
SP.UI.ApplicationPages.ISelectorComponent.registerInterface('SP.UI.ApplicationPages.ISelectorComponent');


SP.UI.ApplicationPages.SelectorType = function() {}
SP.UI.ApplicationPages.SelectorType.prototype = {
    none: 0, 
    resource: 1, 
    people: 2, 
    people_And_Resource: 3, 
    event: 4
}
SP.UI.ApplicationPages.SelectorType.registerEnum('SP.UI.ApplicationPages.SelectorType', false);


SP.UI.ApplicationPages.ICalendarController = function() {}
SP.UI.ApplicationPages.ICalendarController.registerInterface('SP.UI.ApplicationPages.ICalendarController');


SP.UI.ApplicationPages.CalendarScope = function() {}
SP.UI.ApplicationPages.CalendarScope.prototype = {
    nothing: 0, 
    monthly: 1, 
    weeklyGroup: 2, 
    daily: 3, 
    weekly: 4, 
    dailyGroup: 5
}
SP.UI.ApplicationPages.CalendarScope.registerEnum('SP.UI.ApplicationPages.CalendarScope', false);


SP.UI.ApplicationPages.SelectorSelectionEventArgs = function(entities) {ULS5Vl:;
    SP.UI.ApplicationPages.SelectorSelectionEventArgs.initializeBase(this);
    this.$37_1 = entities;
}
SP.UI.ApplicationPages.SelectorSelectionEventArgs.prototype = {
    $37_1: null,
    
    get_entities: function() {ULS5Vl:;
        return this.$37_1;
    }
}


SP.UI.ApplicationPages.CalendarSelector = function() {ULS5Vl:;
    this.$2Y = Function.createDelegate(this, this.$3j_1);
    this.$T_1 = {};
    SP.UI.ApplicationPages.CalendarSelector.initializeBase(this);
}
SP.UI.ApplicationPages.CalendarSelector.instance = function() {ULS5Vl:;
    return SP.UI.ApplicationPages.CalendarSelector.$3b_1;
}
SP.UI.ApplicationPages.CalendarSelector.prototype = {
    
    registerSelector: function(selector) {ULS5Vl:;
        selector.set_callback(this.$2Y);
        this.$T_1[this.$1l_1(selector.get_componentType(), selector.get_scopeKey())] = selector;
    },
    
    getSelector: function(type, scopeKey) {ULS5Vl:;
        var $v_0 = this.$T_1[this.$1l_1(type, scopeKey)];
        if (SP.ScriptUtility.isNullOrUndefined($v_0)) {
            $v_0 = this.$T_1[this.$1l_1(3, scopeKey)];
        }
        return $v_0;
    },
    
    addHandler: function(scopeKey, people, resource, handler) {ULS5Vl:;
        this.get_events().addHandler(scopeKey, handler);
        var $v_0 = 0;
        if (people) {
            $v_0 |= 2;
        }
        if (resource) {
            $v_0 |= 1;
        }
        if (!people && !resource) {
            $v_0 |= 4;
        }
        this.$T_1[scopeKey] = $v_0;
        this.$1j_1(scopeKey, handler);
    },
    
    revertTo: function(scopeKey, ent) {ULS5Vl:;
        var $v_0 = this.getSelector(1, scopeKey);
        var $v_1 = this.getSelector(2, scopeKey);
        if ($v_0) {
            $v_0.revertTo(ent);
        }
        if ($v_1) {
            $v_1.revertTo(ent);
        }
        var $v_2 = this.$2y_1(scopeKey);
        this.$1j_1(scopeKey, $v_2);
    },
    
    removeEntity: function(scopeKey, ent) {ULS5Vl:;
        var $v_0 = this.getSelector(1, scopeKey);
        var $v_1 = this.getSelector(2, scopeKey);
        if ($v_0) {
            $v_0.removeEntity(ent);
        }
        if ($v_1) {
            $v_1.removeEntity(ent);
        }
    },
    
    $3c_1: function($p0) {
        var $v_0 = new SP.UI.ApplicationPages.ResolveEntity();
        $v_0.entityType = '0';
        Array.add($p0, $v_0);
    },
    
    $3j_1: function($p0, $p1) {
        var $v_0 = $p0;
        var $v_1 = this.$2y_1($v_0.get_scopeKey());
        this.$1j_1($v_0.get_scopeKey(), $v_1);
    },
    
    $1j_1: function($p0, $p1) {
        var $v_0 = [];
        if (this.$1f_1($p0, 4)) {
            this.$3c_1($v_0);
        }
        else {
            var $v_1 = this.getSelector(3, $p0);
            if (!SP.ScriptUtility.isNullOrUndefined($v_1)) {
                Array.addRange($v_0, $v_1.get_selectedEntities());
            }
            else {
                if (this.$1f_1($p0, 2)) {
                    $v_1 = this.getSelector(2, $p0);
                    if (!SP.ScriptUtility.isNullOrUndefined($v_1)) {
                        Array.addRange($v_0, $v_1.get_selectedEntities());
                    }
                }
                if (this.$1f_1($p0, 1)) {
                    $v_1 = this.getSelector(1, $p0);
                    if (!SP.ScriptUtility.isNullOrUndefined($v_1)) {
                        Array.addRange($v_0, $v_1.get_selectedEntities());
                    }
                }
            }
        }
        if ($p1) {
            $p1(this, new SP.UI.ApplicationPages.SelectorSelectionEventArgs($v_0));
        }
    },
    
    $2y_1: function($p0) {
        return this.get_events().getHandler($p0);
    },
    
    $1f_1: function($p0, $p1) {
        var $v_0 = this.$T_1[$p0];
        return ($v_0 & $p1);
    },
    
    $1l_1: function($p0, $p1) {
        switch ($p0) {
            case 2:
                return '${PPL}_' + $p1;
            case 1:
                return '${RES}_' + $p1;
            case 3:
                return '${PAR}_' + $p1;
        }
        return null;
    }
}


SP.UI.ApplicationPages.BaseSelectorComponent = function(key, type) {ULS5Vl:;
    this.$8_0 = key;
    this.$3O_0 = type;
    this.$B_0 = [];
    var $v_0 = SP.UI.ApplicationPages.CalendarSelector.instance();
    $v_0.registerSelector(this);
}
SP.UI.ApplicationPages.BaseSelectorComponent.prototype = {
    $8_0: null,
    $B_0: null,
    $1p_0: null,
    $3O_0: 0,
    
    get_scopeKey: function() {ULS5Vl:;
        return this.$8_0;
    },
    
    get_componentType: function() {ULS5Vl:;
        return this.$3O_0;
    },
    
    get_selectedEntities: function() {ULS5Vl:;
        return this.$B_0;
    },
    set_selectedEntities: function(value) {ULS5Vl:;
        this.$B_0 = value;
        return value;
    },
    
    get_callback: function() {ULS5Vl:;
        return this.$1p_0;
    },
    set_callback: function(value) {ULS5Vl:;
        this.$1p_0 = value;
        return value;
    },
    
    revertTo: function(ent) {ULS5Vl:;
        Array.clear(this.$B_0);
        if (ent) {
            Array.add(this.$B_0, ent);
        }
    },
    
    removeEntity: function(ent) {ULS5Vl:;
        for (var $v_0 = 0; $v_0 < this.$B_0.length; $v_0++) {
            var $v_1 = this.$B_0[$v_0];
            if (ent.get_key() === $v_1.get_key()) {
                Array.removeAt(this.$B_0, $v_0);
                return;
            }
        }
    },
    
    setEntity: function(ent) {ULS5Vl:;
        Array.clear(this.$B_0);
        Array.add(this.$B_0, ent);
        this.$1p_0(this, new Sys.EventArgs());
    }
}


SP.UI.ApplicationPages.CalendarInstanceRepository = function() {
}
SP.UI.ApplicationPages.CalendarInstanceRepository.registerInstance = function(instanceId, contoller) {ULS5Vl:;
    SP.UI.ApplicationPages.CalendarInstanceRepository.$n_0[instanceId] = contoller;
}
SP.UI.ApplicationPages.CalendarInstanceRepository.lookupInstance = function(instanceId) {ULS5Vl:;
    return SP.UI.ApplicationPages.CalendarInstanceRepository.$n_0[instanceId];
}
SP.UI.ApplicationPages.CalendarInstanceRepository.firstInstance = function() {ULS5Vl:;
    var $$dict_1_0 = SP.UI.ApplicationPages.CalendarInstanceRepository.$n_0;
    for (var $$key_1_1 in $$dict_1_0) {
        var $v_0 = { key: $$key_1_1, value: $$dict_1_0[$$key_1_1] };
        return $v_0.value;
    }
    return null;
}


SP.UI.ApplicationPages.ResolveEntity = function() {
}
SP.UI.ApplicationPages.ResolveEntity.prototype = {
    entityType: null,
    displayName: null,
    email: null,
    accountName: null,
    id: null,
    members: null,
    needResolve: false,
    isGroup: false,
    $8_0: null,
    
    get_key: function() {ULS5Vl:;
        if (this.$8_0) {
            return this.$8_0;
        }
        switch (this.entityType) {
            case '0':
                this.$8_0 = '0;#0';
                break;
            case '1':
                if (this.isGroup) {
                    this.$8_0 = '1;#' + this.id;
                }
                else if (this.email) {
                    this.$8_0 = '1;#' + this.accountName + ';' + this.email;
                }
                else {
                    this.$8_0 = '1;#' + this.accountName;
                }
                break;
            case '2':
                this.$8_0 = '2;#' + this.id;
                break;
            case '3':
            default:
                this.$8_0 = '3;#' + this.email;
                break;
        }
        return this.$8_0;
    }
}


SP.UI.ApplicationPages.PeoplePickerWebServiceInterface = function(Context, ObjectPath) {ULS5Vl:;
    SP.UI.ApplicationPages.PeoplePickerWebServiceInterface.initializeBase(this, [ Context, ObjectPath ]);
}
SP.UI.ApplicationPages.PeoplePickerWebServiceInterface.getSearchResultsByHierarchy = function(Context, providerID, hierarchyNodeID, entityTypes, contextUrl) {ULS5Vl:;
    var $v_0;
    var $v_1 = new SP.ClientActionInvokeStaticMethod('{8a000bc7-5d42-4c47-af0b-3dd25b28d26f}', 'GetSearchResultsByHierarchy', [ providerID, hierarchyNodeID, entityTypes, contextUrl ]);
    Context.addQuery($v_1);
    $v_0 = new SP.StringResult();
    Context.addQueryIdAndResultObject($v_1.get_id(), $v_0);
    return $v_0;
}
SP.UI.ApplicationPages.PeoplePickerWebServiceInterface.getSearchResults = function(Context, searchPattern, providerID, hierarchyNodeID, entityTypes) {ULS5Vl:;
    var $v_0;
    var $v_1 = new SP.ClientActionInvokeStaticMethod('{8a000bc7-5d42-4c47-af0b-3dd25b28d26f}', 'GetSearchResults', [ searchPattern, providerID, hierarchyNodeID, entityTypes ]);
    Context.addQuery($v_1);
    $v_0 = new SP.StringResult();
    Context.addQueryIdAndResultObject($v_1.get_id(), $v_0);
    return $v_0;
}


Type.registerNamespace('SP.WebParts');

SP.WebParts.PersonalizationScope = function() {}
SP.WebParts.PersonalizationScope.prototype = {
    user: 0, 
    shared: 1
}
SP.WebParts.PersonalizationScope.registerEnum('SP.WebParts.PersonalizationScope', false);


SP.WebParts.LimitedWebPartManager = function(Context, ObjectPath) {ULS5Vl:;
    SP.WebParts.LimitedWebPartManager.initializeBase(this, [ Context, ObjectPath ]);
}
SP.WebParts.LimitedWebPartManager.prototype = {
    
    get_scope: function() {ULS5Vl:;
        this.checkUninitializedProperty('Scope');
        return ((this.get_objectData().get_properties()['Scope']));
    },
    
    get_webParts: function() {ULS5Vl:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['WebParts']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.WebParts.WebPartDefinitionCollection(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'WebParts'));
            this.get_objectData().get_clientObjectProperties()['WebParts'] = $v_0;
        }
        return $v_0;
    },
    
    get_hasPersonalizedParts: function() {ULS5Vl:;
        this.checkUninitializedProperty('HasPersonalizedParts');
        return ((this.get_objectData().get_properties()['HasPersonalizedParts']));
    },
    
    initPropertiesFromJson: function(parentNode) {ULS5Vl:;
        SP.WebParts.LimitedWebPartManager.callBaseMethod(this, 'initPropertiesFromJson', [ parentNode ]);
        var $v_0;
        $v_0 = parentNode.Scope;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Scope'] = ($v_0);
            delete parentNode.Scope;
        }
        $v_0 = parentNode.WebParts;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_webParts().fromJson($v_0);
            delete parentNode.WebParts;
        }
        $v_0 = parentNode.HasPersonalizedParts;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['HasPersonalizedParts'] = ($v_0);
            delete parentNode.HasPersonalizedParts;
        }
    },
    
    addWebPart: function(webPart, zoneId, zoneIndex) {ULS5Vl:;
        var $v_0;
        $v_0 = new SP.WebParts.WebPartDefinition(this.get_context(), new SP.ObjectPathMethod(this.get_context(), this.get_path(), 'AddWebPart', [ webPart, zoneId, zoneIndex ]));
        $v_0.get_path().setPendingReplace();
        var $v_1 = new SP.ObjectIdentityQuery($v_0.get_path());
        this.get_context().addQueryIdAndResultObject($v_1.get_id(), $v_0);
        this.get_context().addQuery($v_1);
        return $v_0;
    },
    
    importWebPart: function(webPartXml) {ULS5Vl:;
        var $v_0;
        $v_0 = new SP.WebParts.WebPartDefinition(this.get_context(), new SP.ObjectPathMethod(this.get_context(), this.get_path(), 'ImportWebPart', [ webPartXml ]));
        $v_0.get_path().setPendingReplace();
        var $v_1 = new SP.ObjectIdentityQuery($v_0.get_path());
        this.get_context().addQueryIdAndResultObject($v_1.get_id(), $v_0);
        this.get_context().addQuery($v_1);
        return $v_0;
    }
}


SP.WebParts.LimitedWebPartManagerPropertyNames = function() {
}


SP.WebParts.LimitedWebPartManagerObjectPropertyNames = function() {
}


SP.WebParts.WebPart = function(Context, ObjectPath) {ULS5Vl:;
    SP.WebParts.WebPart.initializeBase(this, [ Context, ObjectPath ]);
}
SP.WebParts.WebPart.prototype = {
    
    get_hidden: function() {ULS5Vl:;
        this.checkUninitializedProperty('Hidden');
        return ((this.get_objectData().get_properties()['Hidden']));
    },
    set_hidden: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['Hidden'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Hidden', value));
        }
        return value;
    },
    
    get_isClosed: function() {ULS5Vl:;
        this.checkUninitializedProperty('IsClosed');
        return ((this.get_objectData().get_properties()['IsClosed']));
    },
    
    get_subtitle: function() {ULS5Vl:;
        this.checkUninitializedProperty('Subtitle');
        return ((this.get_objectData().get_properties()['Subtitle']));
    },
    
    get_title: function() {ULS5Vl:;
        this.checkUninitializedProperty('Title');
        return ((this.get_objectData().get_properties()['Title']));
    },
    set_title: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['Title'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Title', value));
        }
        return value;
    },
    
    get_titleUrl: function() {ULS5Vl:;
        this.checkUninitializedProperty('TitleUrl');
        return ((this.get_objectData().get_properties()['TitleUrl']));
    },
    set_titleUrl: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['TitleUrl'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'TitleUrl', value));
        }
        return value;
    },
    
    get_zoneIndex: function() {ULS5Vl:;
        this.checkUninitializedProperty('ZoneIndex');
        return ((this.get_objectData().get_properties()['ZoneIndex']));
    },
    
    initPropertiesFromJson: function(parentNode) {ULS5Vl:;
        SP.WebParts.WebPart.callBaseMethod(this, 'initPropertiesFromJson', [ parentNode ]);
        var $v_0;
        $v_0 = parentNode.Hidden;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Hidden'] = ($v_0);
            delete parentNode.Hidden;
        }
        $v_0 = parentNode.IsClosed;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['IsClosed'] = ($v_0);
            delete parentNode.IsClosed;
        }
        $v_0 = parentNode.Subtitle;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Subtitle'] = ($v_0);
            delete parentNode.Subtitle;
        }
        $v_0 = parentNode.Title;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Title'] = ($v_0);
            delete parentNode.Title;
        }
        $v_0 = parentNode.TitleUrl;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['TitleUrl'] = ($v_0);
            delete parentNode.TitleUrl;
        }
        $v_0 = parentNode.ZoneIndex;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ZoneIndex'] = ($v_0);
            delete parentNode.ZoneIndex;
        }
    }
}


SP.WebParts.WebPartPropertyNames = function() {
}


SP.WebParts.WebPartDefinition = function(Context, ObjectPath) {ULS5Vl:;
    SP.WebParts.WebPartDefinition.initializeBase(this, [ Context, ObjectPath ]);
}
SP.WebParts.WebPartDefinition.prototype = {
    
    get_id: function() {ULS5Vl:;
        this.checkUninitializedProperty('Id');
        return ((this.get_objectData().get_properties()['Id']));
    },
    
    get_webPart: function() {ULS5Vl:;
        var $v_0 = ((this.get_objectData().get_clientObjectProperties()['WebPart']));
        if (SP.ScriptUtility.isUndefined($v_0)) {
            $v_0 = new SP.WebParts.WebPart(this.get_context(), new SP.ObjectPathProperty(this.get_context(), this.get_path(), 'WebPart'));
            this.get_objectData().get_clientObjectProperties()['WebPart'] = $v_0;
        }
        return $v_0;
    },
    
    initPropertiesFromJson: function(parentNode) {ULS5Vl:;
        SP.WebParts.WebPartDefinition.callBaseMethod(this, 'initPropertiesFromJson', [ parentNode ]);
        var $v_0;
        $v_0 = parentNode.Id;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Id'] = ($v_0);
            delete parentNode.Id;
        }
        $v_0 = parentNode.WebPart;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_webPart().fromJson($v_0);
            delete parentNode.WebPart;
        }
    },
    
    saveWebPartChanges: function() {ULS5Vl:;
        var $v_0 = new SP.ClientActionInvokeMethod(this, 'SaveWebPartChanges', null);
        this.get_context().addQuery($v_0);
    },
    
    closeWebPart: function() {ULS5Vl:;
        var $v_0 = new SP.ClientActionInvokeMethod(this, 'CloseWebPart', null);
        this.get_context().addQuery($v_0);
    },
    
    openWebPart: function() {ULS5Vl:;
        var $v_0 = new SP.ClientActionInvokeMethod(this, 'OpenWebPart', null);
        this.get_context().addQuery($v_0);
    },
    
    deleteWebPart: function() {ULS5Vl:;
        var $v_0 = new SP.ClientActionInvokeMethod(this, 'DeleteWebPart', null);
        this.get_context().addQuery($v_0);
    },
    
    moveWebPartTo: function(zoneID, zoneIndex) {ULS5Vl:;
        var $v_0 = new SP.ClientActionInvokeMethod(this, 'MoveWebPartTo', [ zoneID, zoneIndex ]);
        this.get_context().addQuery($v_0);
    }
}


SP.WebParts.WebPartDefinitionPropertyNames = function() {
}


SP.WebParts.WebPartDefinitionObjectPropertyNames = function() {
}


SP.WebParts.WebPartDefinitionCollection = function(Context, ObjectPath) {ULS5Vl:;
    SP.WebParts.WebPartDefinitionCollection.initializeBase(this, [ Context, ObjectPath ]);
}
SP.WebParts.WebPartDefinitionCollection.prototype = {
    
    itemAt: function(index) {ULS5Vl:;
        return this.getItemAtIndex(index);
    },
    
    get_item: function(index) {ULS5Vl:;
        return this.getItemAtIndex(index);
    },
    
    getById: function(id) {ULS5Vl:;
        var $v_0;
        var $v_1 = ((this.get_objectData().get_methodReturnObjects()['GetById']));
        if (SP.ScriptUtility.isNullOrUndefined($v_1)) {
            $v_1 = {};
            this.get_objectData().get_methodReturnObjects()['GetById'] = $v_1;
        }
        $v_0 = (($v_1[id.toString()]));
        if (!SP.ScriptUtility.isNullOrUndefined($v_0)) {
            return $v_0;
        }
        $v_0 = new SP.WebParts.WebPartDefinition(this.get_context(), new SP.ObjectPathMethod(this.get_context(), this.get_path(), 'GetById', [ id ]));
        $v_1[id.toString()] = $v_0;
        return $v_0;
    }
}


Type.registerNamespace('SP.Workflow');

SP.Workflow.WorkflowAssociation = function(Context, ObjectPath) {ULS5Vl:;
    SP.Workflow.WorkflowAssociation.initializeBase(this, [ Context, ObjectPath ]);
}
SP.Workflow.WorkflowAssociation.prototype = {
    
    $7: function($p0) {
        if ($p0) {
            this.get_objectData().get_properties()['Name'] = $p0.$5_1;
        }
    },
    
    get_instantiationUrl: function() {ULS5Vl:;
        this.checkUninitializedProperty('InstantiationUrl');
        return ((this.get_objectData().get_properties()['InstantiationUrl']));
    },
    
    get_associationData: function() {ULS5Vl:;
        this.checkUninitializedProperty('AssociationData');
        return ((this.get_objectData().get_properties()['AssociationData']));
    },
    set_associationData: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['AssociationData'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'AssociationData', value));
        }
        return value;
    },
    
    get_id: function() {ULS5Vl:;
        this.checkUninitializedProperty('Id');
        return ((this.get_objectData().get_properties()['Id']));
    },
    
    get_baseId: function() {ULS5Vl:;
        this.checkUninitializedProperty('BaseId');
        return ((this.get_objectData().get_properties()['BaseId']));
    },
    
    get_webId: function() {ULS5Vl:;
        this.checkUninitializedProperty('WebId');
        return ((this.get_objectData().get_properties()['WebId']));
    },
    
    get_listId: function() {ULS5Vl:;
        this.checkUninitializedProperty('ListId');
        return ((this.get_objectData().get_properties()['ListId']));
    },
    
    get_internalName: function() {ULS5Vl:;
        this.checkUninitializedProperty('InternalName');
        return ((this.get_objectData().get_properties()['InternalName']));
    },
    
    get_name: function() {ULS5Vl:;
        this.checkUninitializedProperty('Name');
        return ((this.get_objectData().get_properties()['Name']));
    },
    set_name: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['Name'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Name', value));
        }
        return value;
    },
    
    get_description: function() {ULS5Vl:;
        this.checkUninitializedProperty('Description');
        return ((this.get_objectData().get_properties()['Description']));
    },
    set_description: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['Description'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Description', value));
        }
        return value;
    },
    
    get_taskListTitle: function() {ULS5Vl:;
        this.checkUninitializedProperty('TaskListTitle');
        return ((this.get_objectData().get_properties()['TaskListTitle']));
    },
    set_taskListTitle: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['TaskListTitle'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'TaskListTitle', value));
        }
        return value;
    },
    
    get_historyListTitle: function() {ULS5Vl:;
        this.checkUninitializedProperty('HistoryListTitle');
        return ((this.get_objectData().get_properties()['HistoryListTitle']));
    },
    set_historyListTitle: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['HistoryListTitle'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'HistoryListTitle', value));
        }
        return value;
    },
    
    get_allowManual: function() {ULS5Vl:;
        this.checkUninitializedProperty('AllowManual');
        return ((this.get_objectData().get_properties()['AllowManual']));
    },
    set_allowManual: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['AllowManual'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'AllowManual', value));
        }
        return value;
    },
    
    get_autoStartCreate: function() {ULS5Vl:;
        this.checkUninitializedProperty('AutoStartCreate');
        return ((this.get_objectData().get_properties()['AutoStartCreate']));
    },
    set_autoStartCreate: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['AutoStartCreate'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'AutoStartCreate', value));
        }
        return value;
    },
    
    get_autoStartChange: function() {ULS5Vl:;
        this.checkUninitializedProperty('AutoStartChange');
        return ((this.get_objectData().get_properties()['AutoStartChange']));
    },
    set_autoStartChange: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['AutoStartChange'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'AutoStartChange', value));
        }
        return value;
    },
    
    get_isDeclarative: function() {ULS5Vl:;
        this.checkUninitializedProperty('IsDeclarative');
        return ((this.get_objectData().get_properties()['IsDeclarative']));
    },
    
    get_enabled: function() {ULS5Vl:;
        this.checkUninitializedProperty('Enabled');
        return ((this.get_objectData().get_properties()['Enabled']));
    },
    set_enabled: function(value) {ULS5Vl:;
        this.get_objectData().get_properties()['Enabled'] = value;
        if ((this.get_context())) {
            this.get_context().addQuery(new SP.ClientActionSetProperty(this, 'Enabled', value));
        }
        return value;
    },
    
    get_modified: function() {ULS5Vl:;
        this.checkUninitializedProperty('Modified');
        return ((this.get_objectData().get_properties()['Modified']));
    },
    
    get_created: function() {ULS5Vl:;
        this.checkUninitializedProperty('Created');
        return ((this.get_objectData().get_properties()['Created']));
    },
    
    initPropertiesFromJson: function(parentNode) {ULS5Vl:;
        SP.Workflow.WorkflowAssociation.callBaseMethod(this, 'initPropertiesFromJson', [ parentNode ]);
        var $v_0;
        $v_0 = parentNode.InstantiationUrl;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['InstantiationUrl'] = ($v_0);
            delete parentNode.InstantiationUrl;
        }
        $v_0 = parentNode.AssociationData;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['AssociationData'] = ($v_0);
            delete parentNode.AssociationData;
        }
        $v_0 = parentNode.Id;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Id'] = ($v_0);
            delete parentNode.Id;
        }
        $v_0 = parentNode.BaseId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['BaseId'] = ($v_0);
            delete parentNode.BaseId;
        }
        $v_0 = parentNode.WebId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['WebId'] = ($v_0);
            delete parentNode.WebId;
        }
        $v_0 = parentNode.ListId;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['ListId'] = ($v_0);
            delete parentNode.ListId;
        }
        $v_0 = parentNode.InternalName;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['InternalName'] = ($v_0);
            delete parentNode.InternalName;
        }
        $v_0 = parentNode.Name;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Name'] = ($v_0);
            delete parentNode.Name;
        }
        $v_0 = parentNode.Description;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Description'] = ($v_0);
            delete parentNode.Description;
        }
        $v_0 = parentNode.TaskListTitle;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['TaskListTitle'] = ($v_0);
            delete parentNode.TaskListTitle;
        }
        $v_0 = parentNode.HistoryListTitle;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['HistoryListTitle'] = ($v_0);
            delete parentNode.HistoryListTitle;
        }
        $v_0 = parentNode.AllowManual;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['AllowManual'] = ($v_0);
            delete parentNode.AllowManual;
        }
        $v_0 = parentNode.AutoStartCreate;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['AutoStartCreate'] = ($v_0);
            delete parentNode.AutoStartCreate;
        }
        $v_0 = parentNode.AutoStartChange;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['AutoStartChange'] = ($v_0);
            delete parentNode.AutoStartChange;
        }
        $v_0 = parentNode.IsDeclarative;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['IsDeclarative'] = ($v_0);
            delete parentNode.IsDeclarative;
        }
        $v_0 = parentNode.Enabled;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Enabled'] = ($v_0);
            delete parentNode.Enabled;
        }
        $v_0 = parentNode.Modified;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Modified'] = ($v_0);
            delete parentNode.Modified;
        }
        $v_0 = parentNode.Created;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Created'] = ($v_0);
            delete parentNode.Created;
        }
    },
    
    update: function() {ULS5Vl:;
        var $v_0 = new SP.ClientActionInvokeMethod(this, 'Update', null);
        this.get_context().addQuery($v_0);
        this.refreshLoad();
    },
    
    deleteObject: function() {ULS5Vl:;
        var $v_0 = new SP.ClientActionInvokeMethod(this, 'DeleteObject', null);
        this.get_context().addQuery($v_0);
        this.removeFromParentCollection();
    }
}


SP.Workflow.WorkflowAssociationPropertyNames = function() {
}


SP.Workflow.WorkflowAssociationCollection = function(Context, ObjectPath) {ULS5Vl:;
    SP.Workflow.WorkflowAssociationCollection.initializeBase(this, [ Context, ObjectPath ]);
}
SP.Workflow.WorkflowAssociationCollection.prototype = {
    
    itemAt: function(index) {ULS5Vl:;
        return this.getItemAtIndex(index);
    },
    
    get_item: function(index) {ULS5Vl:;
        return this.getItemAtIndex(index);
    },
    
    getById: function(associationId) {ULS5Vl:;
        var $v_0;
        $v_0 = new SP.Workflow.WorkflowAssociation(this.get_context(), new SP.ObjectPathMethod(this.get_context(), this.get_path(), 'GetById', [ associationId ]));
        return $v_0;
    },
    
    add: function(parameters) {ULS5Vl:;
        var $v_0;
        $v_0 = new SP.Workflow.WorkflowAssociation(this.get_context(), new SP.ObjectPathMethod(this.get_context(), this.get_path(), 'Add', [ parameters ]));
        $v_0.get_path().setPendingReplace();
        var $v_1 = new SP.ObjectIdentityQuery($v_0.get_path());
        this.get_context().addQueryIdAndResultObject($v_1.get_id(), $v_0);
        this.get_context().addQuery($v_1);
        this.addChild($v_0);
        $v_0.$7(parameters);
        return $v_0;
    },
    
    getByName: function(name) {ULS5Vl:;
        var $v_0;
        var $v_1 = ((this.get_objectData().get_methodReturnObjects()['GetByName']));
        if (SP.ScriptUtility.isNullOrUndefined($v_1)) {
            $v_1 = {};
            this.get_objectData().get_methodReturnObjects()['GetByName'] = $v_1;
        }
        $v_0 = (($v_1[name]));
        if (!SP.ScriptUtility.isNullOrUndefined($v_0)) {
            return $v_0;
        }
        $v_0 = new SP.Workflow.WorkflowAssociation(this.get_context(), new SP.ObjectPathMethod(this.get_context(), this.get_path(), 'GetByName', [ name ]));
        $v_1[name] = $v_0;
        var $v_2 = new SP.ObjectIdentityQuery($v_0.get_path());
        this.get_context().addQueryIdAndResultObject($v_2.get_id(), $v_0);
        this.get_context().addQuery($v_2);
        return $v_0;
    }
}


SP.Workflow.WorkflowAssociationCreationInformation = function() {ULS5Vl:;
    SP.Workflow.WorkflowAssociationCreationInformation.initializeBase(this);
}
SP.Workflow.WorkflowAssociationCreationInformation.prototype = {
    $2H_1: null,
    $5_1: null,
    $2G_1: null,
    $1t_1: null,
    $22_1: null,
    $1s_1: null,
    
    get_template: function() {ULS5Vl:;
        return this.$2H_1;
    },
    set_template: function(value) {ULS5Vl:;
        this.$2H_1 = value;
        return value;
    },
    
    get_name: function() {ULS5Vl:;
        return this.$5_1;
    },
    set_name: function(value) {ULS5Vl:;
        this.$5_1 = value;
        return value;
    },
    
    get_taskList: function() {ULS5Vl:;
        return this.$2G_1;
    },
    set_taskList: function(value) {ULS5Vl:;
        this.$2G_1 = value;
        return value;
    },
    
    get_contentTypeAssociationTaskListName: function() {ULS5Vl:;
        return this.$1t_1;
    },
    set_contentTypeAssociationTaskListName: function(value) {ULS5Vl:;
        this.$1t_1 = value;
        return value;
    },
    
    get_historyList: function() {ULS5Vl:;
        return this.$22_1;
    },
    set_historyList: function(value) {ULS5Vl:;
        this.$22_1 = value;
        return value;
    },
    
    get_contentTypeAssociationHistoryListName: function() {ULS5Vl:;
        return this.$1s_1;
    },
    set_contentTypeAssociationHistoryListName: function(value) {ULS5Vl:;
        this.$1s_1 = value;
        return value;
    },
    
    get_typeId: function() {ULS5Vl:;
        return '{3c812f4f-8465-41cb-b298-bd33b2604a51}';
    },
    
    writeToXml: function(writer, serializationContext) {ULS5Vl:;
        if (!writer) {
            throw Error.argumentNull('writer');
        }
        if (!serializationContext) {
            throw Error.argumentNull('serializationContext');
        }
        var $v_0 = [ 'Template', 'Name', 'TaskList', 'ContentTypeAssociationTaskListName', 'HistoryList', 'ContentTypeAssociationHistoryListName' ];
        SP.DataConvert.writePropertiesToXml(writer, this, $v_0, serializationContext);
    },
    
    initPropertiesFromJson: function(parentNode) {ULS5Vl:;
        var $v_0;
        $v_0 = parentNode.Template;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$2H_1.fromJson($v_0);
            delete parentNode.Template;
        }
        $v_0 = parentNode.Name;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$5_1 = ($v_0);
            delete parentNode.Name;
        }
        $v_0 = parentNode.TaskList;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$2G_1.fromJson($v_0);
            delete parentNode.TaskList;
        }
        $v_0 = parentNode.ContentTypeAssociationTaskListName;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1t_1 = ($v_0);
            delete parentNode.ContentTypeAssociationTaskListName;
        }
        $v_0 = parentNode.HistoryList;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$22_1.fromJson($v_0);
            delete parentNode.HistoryList;
        }
        $v_0 = parentNode.ContentTypeAssociationHistoryListName;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.$1s_1 = ($v_0);
            delete parentNode.ContentTypeAssociationHistoryListName;
        }
    }
}


SP.Workflow.WorkflowTemplate = function(Context, ObjectPath) {ULS5Vl:;
    SP.Workflow.WorkflowTemplate.initializeBase(this, [ Context, ObjectPath ]);
}
SP.Workflow.WorkflowTemplate.prototype = {
    
    get_id: function() {ULS5Vl:;
        this.checkUninitializedProperty('Id');
        return ((this.get_objectData().get_properties()['Id']));
    },
    
    get_isDeclarative: function() {ULS5Vl:;
        this.checkUninitializedProperty('IsDeclarative');
        return ((this.get_objectData().get_properties()['IsDeclarative']));
    },
    
    get_name: function() {ULS5Vl:;
        this.checkUninitializedProperty('Name');
        return ((this.get_objectData().get_properties()['Name']));
    },
    
    get_associationUrl: function() {ULS5Vl:;
        this.checkUninitializedProperty('AssociationUrl');
        return ((this.get_objectData().get_properties()['AssociationUrl']));
    },
    
    get_description: function() {ULS5Vl:;
        this.checkUninitializedProperty('Description');
        return ((this.get_objectData().get_properties()['Description']));
    },
    
    get_allowManual: function() {ULS5Vl:;
        this.checkUninitializedProperty('AllowManual');
        return ((this.get_objectData().get_properties()['AllowManual']));
    },
    
    get_permissionsManual: function() {ULS5Vl:;
        this.checkUninitializedProperty('PermissionsManual');
        return ((this.get_objectData().get_properties()['PermissionsManual']));
    },
    
    get_autoStartCreate: function() {ULS5Vl:;
        this.checkUninitializedProperty('AutoStartCreate');
        return ((this.get_objectData().get_properties()['AutoStartCreate']));
    },
    
    get_autoStartChange: function() {ULS5Vl:;
        this.checkUninitializedProperty('AutoStartChange');
        return ((this.get_objectData().get_properties()['AutoStartChange']));
    },
    
    initPropertiesFromJson: function(parentNode) {ULS5Vl:;
        SP.Workflow.WorkflowTemplate.callBaseMethod(this, 'initPropertiesFromJson', [ parentNode ]);
        var $v_0;
        $v_0 = parentNode.Id;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Id'] = ($v_0);
            delete parentNode.Id;
        }
        $v_0 = parentNode.IsDeclarative;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['IsDeclarative'] = ($v_0);
            delete parentNode.IsDeclarative;
        }
        $v_0 = parentNode.Name;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Name'] = ($v_0);
            delete parentNode.Name;
        }
        $v_0 = parentNode.AssociationUrl;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['AssociationUrl'] = ($v_0);
            delete parentNode.AssociationUrl;
        }
        $v_0 = parentNode.Description;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['Description'] = ($v_0);
            delete parentNode.Description;
        }
        $v_0 = parentNode.AllowManual;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['AllowManual'] = ($v_0);
            delete parentNode.AllowManual;
        }
        $v_0 = parentNode.PermissionsManual;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['PermissionsManual'] = ((SP.DataConvert.fixupType(this.get_context(), $v_0)));
            delete parentNode.PermissionsManual;
        }
        $v_0 = parentNode.AutoStartCreate;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['AutoStartCreate'] = ($v_0);
            delete parentNode.AutoStartCreate;
        }
        $v_0 = parentNode.AutoStartChange;
        if (!SP.ScriptUtility.isUndefined($v_0)) {
            this.get_objectData().get_properties()['AutoStartChange'] = ($v_0);
            delete parentNode.AutoStartChange;
        }
    }
}


SP.Workflow.WorkflowTemplatePropertyNames = function() {
}


SP.Workflow.WorkflowTemplateCollection = function(Context, ObjectPath) {ULS5Vl:;
    SP.Workflow.WorkflowTemplateCollection.initializeBase(this, [ Context, ObjectPath ]);
}
SP.Workflow.WorkflowTemplateCollection.prototype = {
    
    itemAt: function(index) {ULS5Vl:;
        return this.getItemAtIndex(index);
    },
    
    get_item: function(index) {ULS5Vl:;
        return this.getItemAtIndex(index);
    },
    
    getById: function(templateId) {ULS5Vl:;
        var $v_0;
        var $v_1 = ((this.get_objectData().get_methodReturnObjects()['GetById']));
        if (SP.ScriptUtility.isNullOrUndefined($v_1)) {
            $v_1 = {};
            this.get_objectData().get_methodReturnObjects()['GetById'] = $v_1;
        }
        $v_0 = (($v_1[templateId.toString()]));
        if (!SP.ScriptUtility.isNullOrUndefined($v_0)) {
            return $v_0;
        }
        $v_0 = new SP.Workflow.WorkflowTemplate(this.get_context(), new SP.ObjectPathMethod(this.get_context(), this.get_path(), 'GetById', [ templateId ]));
        $v_1[templateId.toString()] = $v_0;
        return $v_0;
    },
    
    getByName: function(name) {ULS5Vl:;
        var $v_0;
        var $v_1 = ((this.get_objectData().get_methodReturnObjects()['GetByName']));
        if (SP.ScriptUtility.isNullOrUndefined($v_1)) {
            $v_1 = {};
            this.get_objectData().get_methodReturnObjects()['GetByName'] = $v_1;
        }
        $v_0 = (($v_1[name]));
        if (!SP.ScriptUtility.isNullOrUndefined($v_0)) {
            return $v_0;
        }
        $v_0 = new SP.Workflow.WorkflowTemplate(this.get_context(), new SP.ObjectPathMethod(this.get_context(), this.get_path(), 'GetByName', [ name ]));
        $v_1[name] = $v_0;
        var $v_2 = new SP.ObjectIdentityQuery($v_0.get_path());
        this.get_context().addQueryIdAndResultObject($v_2.get_id(), $v_0);
        this.get_context().addQuery($v_2);
        return $v_0;
    }
}


SP.ClientContext.registerClass('SP.ClientContext', SP.ClientRuntimeContext);
SP.PageContextInfo.registerClass('SP.PageContextInfo');
SP.ULS.registerClass('SP.ULS');
SP.BasePermissions.registerClass('SP.BasePermissions', SP.ClientValueObject);
SP.CamlQuery.registerClass('SP.CamlQuery', SP.ClientValueObject);
SP.Change.registerClass('SP.Change', SP.ClientObject);
SP.ChangePropertyNames.registerClass('SP.ChangePropertyNames');
SP.ChangeAlert.registerClass('SP.ChangeAlert', SP.Change);
SP.ChangeAlertPropertyNames.registerClass('SP.ChangeAlertPropertyNames');
SP.ChangeCollection.registerClass('SP.ChangeCollection', SP.ClientObjectCollection);
SP.ChangeContentType.registerClass('SP.ChangeContentType', SP.Change);
SP.ChangeContentTypePropertyNames.registerClass('SP.ChangeContentTypePropertyNames');
SP.ChangeField.registerClass('SP.ChangeField', SP.Change);
SP.ChangeFieldPropertyNames.registerClass('SP.ChangeFieldPropertyNames');
SP.ChangeFile.registerClass('SP.ChangeFile', SP.Change);
SP.ChangeFilePropertyNames.registerClass('SP.ChangeFilePropertyNames');
SP.ChangeFolder.registerClass('SP.ChangeFolder', SP.Change);
SP.ChangeFolderPropertyNames.registerClass('SP.ChangeFolderPropertyNames');
SP.ChangeGroup.registerClass('SP.ChangeGroup', SP.Change);
SP.ChangeGroupPropertyNames.registerClass('SP.ChangeGroupPropertyNames');
SP.ChangeItem.registerClass('SP.ChangeItem', SP.Change);
SP.ChangeItemPropertyNames.registerClass('SP.ChangeItemPropertyNames');
SP.ChangeList.registerClass('SP.ChangeList', SP.Change);
SP.ChangeListPropertyNames.registerClass('SP.ChangeListPropertyNames');
SP.ChangeQuery.registerClass('SP.ChangeQuery', SP.ClientValueObject);
SP.ChangeSite.registerClass('SP.ChangeSite', SP.Change);
SP.ChangeToken.registerClass('SP.ChangeToken', SP.ClientValueObject);
SP.ChangeUser.registerClass('SP.ChangeUser', SP.Change);
SP.ChangeUserPropertyNames.registerClass('SP.ChangeUserPropertyNames');
SP.ChangeView.registerClass('SP.ChangeView', SP.Change);
SP.ChangeViewPropertyNames.registerClass('SP.ChangeViewPropertyNames');
SP.ChangeWeb.registerClass('SP.ChangeWeb', SP.Change);
SP.ChangeWebPropertyNames.registerClass('SP.ChangeWebPropertyNames');
SP.ContentType.registerClass('SP.ContentType', SP.ClientObject);
SP.ContentTypePropertyNames.registerClass('SP.ContentTypePropertyNames');
SP.ContentTypeObjectPropertyNames.registerClass('SP.ContentTypeObjectPropertyNames');
SP.ContentTypeCollection.registerClass('SP.ContentTypeCollection', SP.ClientObjectCollection);
SP.ContentTypeCreationInformation.registerClass('SP.ContentTypeCreationInformation', SP.ClientValueObject);
SP.ContentTypeId.registerClass('SP.ContentTypeId', SP.ClientValueObject);
SP.Feature.registerClass('SP.Feature', SP.ClientObject);
SP.FeaturePropertyNames.registerClass('SP.FeaturePropertyNames');
SP.FeatureCollection.registerClass('SP.FeatureCollection', SP.ClientObjectCollection);
SP.Field.registerClass('SP.Field', SP.ClientObject);
SP.FieldPropertyNames.registerClass('SP.FieldPropertyNames');
SP.FieldCalculated.registerClass('SP.FieldCalculated', SP.Field);
SP.FieldCalculatedPropertyNames.registerClass('SP.FieldCalculatedPropertyNames');
SP.FieldCalculatedErrorValue.registerClass('SP.FieldCalculatedErrorValue', SP.ClientValueObject);
SP.FieldMultiChoice.registerClass('SP.FieldMultiChoice', SP.Field);
SP.FieldChoice.registerClass('SP.FieldChoice', SP.FieldMultiChoice);
SP.FieldChoicePropertyNames.registerClass('SP.FieldChoicePropertyNames');
SP.FieldCollection.registerClass('SP.FieldCollection', SP.ClientObjectCollection);
SP.FieldCollectionPropertyNames.registerClass('SP.FieldCollectionPropertyNames');
SP.FieldComputed.registerClass('SP.FieldComputed', SP.Field);
SP.FieldComputedPropertyNames.registerClass('SP.FieldComputedPropertyNames');
SP.FieldNumber.registerClass('SP.FieldNumber', SP.Field);
SP.FieldCurrency.registerClass('SP.FieldCurrency', SP.FieldNumber);
SP.FieldCurrencyPropertyNames.registerClass('SP.FieldCurrencyPropertyNames');
SP.FieldDateTime.registerClass('SP.FieldDateTime', SP.Field);
SP.FieldDateTimePropertyNames.registerClass('SP.FieldDateTimePropertyNames');
SP.FieldGuid.registerClass('SP.FieldGuid', SP.Field);
SP.FieldLink.registerClass('SP.FieldLink', SP.ClientObject);
SP.FieldLinkPropertyNames.registerClass('SP.FieldLinkPropertyNames');
SP.FieldLinkCollection.registerClass('SP.FieldLinkCollection', SP.ClientObjectCollection);
SP.FieldLinkCreationInformation.registerClass('SP.FieldLinkCreationInformation', SP.ClientValueObject);
SP.FieldLookup.registerClass('SP.FieldLookup', SP.Field);
SP.FieldLookupPropertyNames.registerClass('SP.FieldLookupPropertyNames');
SP.FieldLookupValue.registerClass('SP.FieldLookupValue', SP.ClientValueObject);
SP.FieldMultiChoicePropertyNames.registerClass('SP.FieldMultiChoicePropertyNames');
SP.FieldMultiLineText.registerClass('SP.FieldMultiLineText', SP.Field);
SP.FieldMultiLineTextPropertyNames.registerClass('SP.FieldMultiLineTextPropertyNames');
SP.FieldNumberPropertyNames.registerClass('SP.FieldNumberPropertyNames');
SP.FieldRatingScale.registerClass('SP.FieldRatingScale', SP.FieldMultiChoice);
SP.FieldRatingScalePropertyNames.registerClass('SP.FieldRatingScalePropertyNames');
SP.FieldRatingScaleQuestionAnswer.registerClass('SP.FieldRatingScaleQuestionAnswer', SP.ClientValueObject);
SP.FieldStringValues.registerClass('SP.FieldStringValues', SP.ClientObject);
SP.FieldText.registerClass('SP.FieldText', SP.Field);
SP.FieldTextPropertyNames.registerClass('SP.FieldTextPropertyNames');
SP.FieldUrl.registerClass('SP.FieldUrl', SP.Field);
SP.FieldUrlPropertyNames.registerClass('SP.FieldUrlPropertyNames');
SP.FieldUrlValue.registerClass('SP.FieldUrlValue', SP.ClientValueObject);
SP.FieldUser.registerClass('SP.FieldUser', SP.FieldLookup);
SP.FieldUserPropertyNames.registerClass('SP.FieldUserPropertyNames');
SP.FieldUserValue.registerClass('SP.FieldUserValue', SP.ClientValueObject);
SP.File.registerClass('SP.File', SP.ClientObject);
SP.FilePropertyNames.registerClass('SP.FilePropertyNames');
SP.FileObjectPropertyNames.registerClass('SP.FileObjectPropertyNames');
SP.FileCollection.registerClass('SP.FileCollection', SP.ClientObjectCollection);
SP.FileVersion.registerClass('SP.FileVersion', SP.ClientObject);
SP.FileVersionPropertyNames.registerClass('SP.FileVersionPropertyNames');
SP.FileVersionObjectPropertyNames.registerClass('SP.FileVersionObjectPropertyNames');
SP.FileVersionCollection.registerClass('SP.FileVersionCollection', SP.ClientObjectCollection);
SP.Folder.registerClass('SP.Folder', SP.ClientObject);
SP.FolderPropertyNames.registerClass('SP.FolderPropertyNames');
SP.FolderObjectPropertyNames.registerClass('SP.FolderObjectPropertyNames');
SP.FolderCollection.registerClass('SP.FolderCollection', SP.ClientObjectCollection);
SP.Form.registerClass('SP.Form', SP.ClientObject);
SP.FormPropertyNames.registerClass('SP.FormPropertyNames');
SP.FormCollection.registerClass('SP.FormCollection', SP.ClientObjectCollection);
SP.Principal.registerClass('SP.Principal', SP.ClientObject);
SP.Group.registerClass('SP.Group', SP.Principal);
SP.GroupPropertyNames.registerClass('SP.GroupPropertyNames');
SP.GroupObjectPropertyNames.registerClass('SP.GroupObjectPropertyNames');
SP.GroupCollection.registerClass('SP.GroupCollection', SP.ClientObjectCollection);
SP.GroupCreationInformation.registerClass('SP.GroupCreationInformation', SP.ClientValueObject);
SP.SecurableObject.registerClass('SP.SecurableObject', SP.ClientObject);
SP.List.registerClass('SP.List', SP.SecurableObject);
SP.ListPropertyNames.registerClass('SP.ListPropertyNames');
SP.ListObjectPropertyNames.registerClass('SP.ListObjectPropertyNames');
SP.ListCollection.registerClass('SP.ListCollection', SP.ClientObjectCollection);
SP.ListCreationInformation.registerClass('SP.ListCreationInformation', SP.ClientValueObject);
SP.ListDataSource.registerClass('SP.ListDataSource', SP.ClientValueObject);
SP.ListDataValidationExceptionValue.registerClass('SP.ListDataValidationExceptionValue', SP.ClientValueObject);
SP.ListDataValidationFailure.registerClass('SP.ListDataValidationFailure', SP.ClientValueObject);
SP.ListItem.registerClass('SP.ListItem', SP.SecurableObject);
SP.ListItemPropertyNames.registerClass('SP.ListItemPropertyNames');
SP.ListItemObjectPropertyNames.registerClass('SP.ListItemObjectPropertyNames');
SP.ListItemCollection.registerClass('SP.ListItemCollection', SP.ClientObjectCollection);
SP.ListItemCollectionPropertyNames.registerClass('SP.ListItemCollectionPropertyNames');
SP.ListItemCollectionPosition.registerClass('SP.ListItemCollectionPosition', SP.ClientValueObject);
SP.ListItemCreationInformation.registerClass('SP.ListItemCreationInformation', SP.ClientValueObject);
SP.ListTemplate.registerClass('SP.ListTemplate', SP.ClientObject);
SP.ListTemplatePropertyNames.registerClass('SP.ListTemplatePropertyNames');
SP.ListTemplateCollection.registerClass('SP.ListTemplateCollection', SP.ClientObjectCollection);
SP.Navigation.registerClass('SP.Navigation', SP.ClientObject);
SP.NavigationPropertyNames.registerClass('SP.NavigationPropertyNames');
SP.NavigationObjectPropertyNames.registerClass('SP.NavigationObjectPropertyNames');
SP.NavigationNode.registerClass('SP.NavigationNode', SP.ClientObject);
SP.NavigationNodePropertyNames.registerClass('SP.NavigationNodePropertyNames');
SP.NavigationNodeObjectPropertyNames.registerClass('SP.NavigationNodeObjectPropertyNames');
SP.NavigationNodeCollection.registerClass('SP.NavigationNodeCollection', SP.ClientObjectCollection);
SP.NavigationNodeCreationInformation.registerClass('SP.NavigationNodeCreationInformation', SP.ClientValueObject);
SP.PrincipalPropertyNames.registerClass('SP.PrincipalPropertyNames');
SP.PropertyValues.registerClass('SP.PropertyValues', SP.ClientObject);
SP.RecycleBinItem.registerClass('SP.RecycleBinItem', SP.ClientObject);
SP.RecycleBinItemPropertyNames.registerClass('SP.RecycleBinItemPropertyNames');
SP.RecycleBinItemObjectPropertyNames.registerClass('SP.RecycleBinItemObjectPropertyNames');
SP.RecycleBinItemCollection.registerClass('SP.RecycleBinItemCollection', SP.ClientObjectCollection);
SP.RelatedField.registerClass('SP.RelatedField', SP.ClientObject);
SP.RelatedFieldPropertyNames.registerClass('SP.RelatedFieldPropertyNames');
SP.RelatedFieldObjectPropertyNames.registerClass('SP.RelatedFieldObjectPropertyNames');
SP.RelatedFieldCollection.registerClass('SP.RelatedFieldCollection', SP.ClientObjectCollection);
SP.RelatedFieldExtendedData.registerClass('SP.RelatedFieldExtendedData', SP.ClientObject);
SP.RelatedFieldExtendedDataPropertyNames.registerClass('SP.RelatedFieldExtendedDataPropertyNames');
SP.RelatedFieldExtendedDataCollection.registerClass('SP.RelatedFieldExtendedDataCollection', SP.ClientObjectCollection);
SP.RequestContext.registerClass('SP.RequestContext', SP.ClientObject);
SP.RequestContextObjectPropertyNames.registerClass('SP.RequestContextObjectPropertyNames');
SP.RoleAssignment.registerClass('SP.RoleAssignment', SP.ClientObject);
SP.RoleAssignmentObjectPropertyNames.registerClass('SP.RoleAssignmentObjectPropertyNames');
SP.RoleAssignmentCollection.registerClass('SP.RoleAssignmentCollection', SP.ClientObjectCollection);
SP.RoleDefinition.registerClass('SP.RoleDefinition', SP.ClientObject);
SP.RoleDefinitionPropertyNames.registerClass('SP.RoleDefinitionPropertyNames');
SP.RoleDefinitionBindingCollection.registerClass('SP.RoleDefinitionBindingCollection', SP.ClientObjectCollection);
SP.RoleDefinitionCollection.registerClass('SP.RoleDefinitionCollection', SP.ClientObjectCollection);
SP.RoleDefinitionCreationInformation.registerClass('SP.RoleDefinitionCreationInformation', SP.ClientValueObject);
SP.SecurableObjectPropertyNames.registerClass('SP.SecurableObjectPropertyNames');
SP.SecurableObjectObjectPropertyNames.registerClass('SP.SecurableObjectObjectPropertyNames');
SP.Site.registerClass('SP.Site', SP.ClientObject);
SP.SitePropertyNames.registerClass('SP.SitePropertyNames');
SP.SiteObjectPropertyNames.registerClass('SP.SiteObjectPropertyNames');
SP.SubwebQuery.registerClass('SP.SubwebQuery', SP.ClientValueObject);
SP.UsageInfo.registerClass('SP.UsageInfo', SP.ClientValueObject);
SP.User.registerClass('SP.User', SP.Principal);
SP.UserPropertyNames.registerClass('SP.UserPropertyNames');
SP.UserCollection.registerClass('SP.UserCollection', SP.ClientObjectCollection);
SP.UserCreationInformation.registerClass('SP.UserCreationInformation', SP.ClientValueObject);
SP.UserCustomAction.registerClass('SP.UserCustomAction', SP.ClientObject);
SP.UserCustomActionPropertyNames.registerClass('SP.UserCustomActionPropertyNames');
SP.UserCustomActionCollection.registerClass('SP.UserCustomActionCollection', SP.ClientObjectCollection);
SP.View.registerClass('SP.View', SP.ClientObject);
SP.ViewPropertyNames.registerClass('SP.ViewPropertyNames');
SP.ViewObjectPropertyNames.registerClass('SP.ViewObjectPropertyNames');
SP.ViewCollection.registerClass('SP.ViewCollection', SP.ClientObjectCollection);
SP.ViewCreationInformation.registerClass('SP.ViewCreationInformation', SP.ClientValueObject);
SP.ViewFieldCollection.registerClass('SP.ViewFieldCollection', SP.ClientObjectCollection);
SP.ViewFieldCollectionPropertyNames.registerClass('SP.ViewFieldCollectionPropertyNames');
SP.Web.registerClass('SP.Web', SP.SecurableObject);
SP.WebPropertyNames.registerClass('SP.WebPropertyNames');
SP.WebObjectPropertyNames.registerClass('SP.WebObjectPropertyNames');
SP.WebCollection.registerClass('SP.WebCollection', SP.ClientObjectCollection);
SP.WebCreationInformation.registerClass('SP.WebCreationInformation', SP.ClientValueObject);
SP.WebTemplate.registerClass('SP.WebTemplate', SP.ClientObject);
SP.WebTemplatePropertyNames.registerClass('SP.WebTemplatePropertyNames');
SP.WebTemplateCollection.registerClass('SP.WebTemplateCollection', SP.ClientObjectCollection);
SP.UI.PopoutMenu.registerClass('SP.UI.PopoutMenu', null, Sys.IDisposable);
SP.UI.Notify.registerClass('SP.UI.Notify');
SP.UI.Status.registerClass('SP.UI.Status');
SP.UI.Menu.registerClass('SP.UI.Menu');
SP.UI.MenuTest.registerClass('SP.UI.MenuTest');
SP.UI.AspMenu.registerClass('SP.UI.AspMenu', Sys.UI.Control);
SP.Utilities.Utility.registerClass('SP.Utilities.Utility', SP.ClientObject);
SP.Utilities.MobileUtility.registerClass('SP.Utilities.MobileUtility', SP.ClientObject);
SP.Utilities.PrincipalInfo.registerClass('SP.Utilities.PrincipalInfo', SP.ClientValueObject);
SP.Application.UI.FormsInfo.registerClass('SP.Application.UI.FormsInfo');
SP.Application.UI.DefaultFormsInformation.registerClass('SP.Application.UI.DefaultFormsInformation');
SP.Application.UI.DefaultFormsMenuBuilder.registerClass('SP.Application.UI.DefaultFormsMenuBuilder');
SP.Application.UI.BrowserUtility.registerClass('SP.Application.UI.BrowserUtility');
SP.Application.UI.ViewSelectorGroups.registerClass('SP.Application.UI.ViewSelectorGroups');
SP.Application.UI.ViewSelectorMenuItem.registerClass('SP.Application.UI.ViewSelectorMenuItem');
SP.Application.UI.ViewSelectorSubMenu.registerClass('SP.Application.UI.ViewSelectorSubMenu');
SP.Application.UI.ServerMenus.registerClass('SP.Application.UI.ServerMenus');
SP.Application.UI.ViewSelectorMenuBuilder.registerClass('SP.Application.UI.ViewSelectorMenuBuilder');
SP.Application.UI.MoreColorsPicker.registerClass('SP.Application.UI.MoreColorsPicker', Sys.UI.Control);
SP.Application.UI.MappedColor.registerClass('SP.Application.UI.MappedColor');
SP.Application.UI.MoreColorsPage.registerClass('SP.Application.UI.MoreColorsPage', Sys.UI.Control);
SP.Application.UI.ThemeWebPage.registerClass('SP.Application.UI.ThemeWebPage', Sys.UI.Control);
SP.Application.UI.WikiPageNameInPlaceEditor.registerClass('SP.Application.UI.WikiPageNameInPlaceEditor');
SP.UI.ApplicationPages.SelectorSelectionEventArgs.registerClass('SP.UI.ApplicationPages.SelectorSelectionEventArgs', Sys.EventArgs);
SP.UI.ApplicationPages.CalendarSelector.registerClass('SP.UI.ApplicationPages.CalendarSelector', Sys.Component);
SP.UI.ApplicationPages.BaseSelectorComponent.registerClass('SP.UI.ApplicationPages.BaseSelectorComponent', null, SP.UI.ApplicationPages.ISelectorComponent);
SP.UI.ApplicationPages.CalendarInstanceRepository.registerClass('SP.UI.ApplicationPages.CalendarInstanceRepository');
SP.UI.ApplicationPages.ResolveEntity.registerClass('SP.UI.ApplicationPages.ResolveEntity');
SP.UI.ApplicationPages.PeoplePickerWebServiceInterface.registerClass('SP.UI.ApplicationPages.PeoplePickerWebServiceInterface', SP.ClientObject);
SP.WebParts.LimitedWebPartManager.registerClass('SP.WebParts.LimitedWebPartManager', SP.ClientObject);
SP.WebParts.LimitedWebPartManagerPropertyNames.registerClass('SP.WebParts.LimitedWebPartManagerPropertyNames');
SP.WebParts.LimitedWebPartManagerObjectPropertyNames.registerClass('SP.WebParts.LimitedWebPartManagerObjectPropertyNames');
SP.WebParts.WebPart.registerClass('SP.WebParts.WebPart', SP.ClientObject);
SP.WebParts.WebPartPropertyNames.registerClass('SP.WebParts.WebPartPropertyNames');
SP.WebParts.WebPartDefinition.registerClass('SP.WebParts.WebPartDefinition', SP.ClientObject);
SP.WebParts.WebPartDefinitionPropertyNames.registerClass('SP.WebParts.WebPartDefinitionPropertyNames');
SP.WebParts.WebPartDefinitionObjectPropertyNames.registerClass('SP.WebParts.WebPartDefinitionObjectPropertyNames');
SP.WebParts.WebPartDefinitionCollection.registerClass('SP.WebParts.WebPartDefinitionCollection', SP.ClientObjectCollection);
SP.Workflow.WorkflowAssociation.registerClass('SP.Workflow.WorkflowAssociation', SP.ClientObject);
SP.Workflow.WorkflowAssociationPropertyNames.registerClass('SP.Workflow.WorkflowAssociationPropertyNames');
SP.Workflow.WorkflowAssociationCollection.registerClass('SP.Workflow.WorkflowAssociationCollection', SP.ClientObjectCollection);
SP.Workflow.WorkflowAssociationCreationInformation.registerClass('SP.Workflow.WorkflowAssociationCreationInformation', SP.ClientValueObject);
SP.Workflow.WorkflowTemplate.registerClass('SP.Workflow.WorkflowTemplate', SP.ClientObject);
SP.Workflow.WorkflowTemplatePropertyNames.registerClass('SP.Workflow.WorkflowTemplatePropertyNames');
SP.Workflow.WorkflowTemplateCollection.registerClass('SP.Workflow.WorkflowTemplateCollection', SP.ClientObjectCollection);
SP.ClientContext.$1S_1 = null;
SP.PageContextInfo.$1T_0 = null;
SP.ULS.$2T_0 = false;
SP.ULS.$W_0 = false;
SP.ULS.$1R_0 = false;
SP.ULS.$E_0 = null;
SP.ULS.$1U_0 = false;
SP.ULS.$H_0 = '';
SP.ULS.$2U_0 = 0;
SP.ULS.$2V_0 = [];
SP.ChangePropertyNames.changeType = 'ChangeType';
SP.ChangePropertyNames.siteId = 'SiteId';
SP.ChangePropertyNames.time = 'Time';
SP.ChangePropertyNames.changeToken = 'ChangeToken';
SP.ChangeAlertPropertyNames.webId = 'WebId';
SP.ChangeAlertPropertyNames.alertId = 'AlertId';
SP.ChangeContentTypePropertyNames.webId = 'WebId';
SP.ChangeContentTypePropertyNames.contentTypeId = 'ContentTypeId';
SP.ChangeFieldPropertyNames.webId = 'WebId';
SP.ChangeFieldPropertyNames.fieldId = 'FieldId';
SP.ChangeFilePropertyNames.webId = 'WebId';
SP.ChangeFilePropertyNames.uniqueId = 'UniqueId';
SP.ChangeFolderPropertyNames.webId = 'WebId';
SP.ChangeFolderPropertyNames.uniqueId = 'UniqueId';
SP.ChangeGroupPropertyNames.groupId = 'GroupId';
SP.ChangeItemPropertyNames.webId = 'WebId';
SP.ChangeItemPropertyNames.listId = 'ListId';
SP.ChangeItemPropertyNames.itemId = 'ItemId';
SP.ChangeListPropertyNames.webId = 'WebId';
SP.ChangeListPropertyNames.listId = 'ListId';
SP.ChangeUserPropertyNames.userId = 'UserId';
SP.ChangeUserPropertyNames.activate = 'Activate';
SP.ChangeViewPropertyNames.webId = 'WebId';
SP.ChangeViewPropertyNames.listId = 'ListId';
SP.ChangeViewPropertyNames.viewId = 'ViewId';
SP.ChangeWebPropertyNames.webId = 'WebId';
SP.ContentTypePropertyNames.displayFormTemplateName = 'DisplayFormTemplateName';
SP.ContentTypePropertyNames.editFormTemplateName = 'EditFormTemplateName';
SP.ContentTypePropertyNames.newFormTemplateName = 'NewFormTemplateName';
SP.ContentTypePropertyNames.newFormUrl = 'NewFormUrl';
SP.ContentTypePropertyNames.editFormUrl = 'EditFormUrl';
SP.ContentTypePropertyNames.displayFormUrl = 'DisplayFormUrl';
SP.ContentTypePropertyNames.id = 'Id';
SP.ContentTypePropertyNames.readOnly = 'ReadOnly';
SP.ContentTypePropertyNames.name = 'Name';
SP.ContentTypePropertyNames.description = 'Description';
SP.ContentTypePropertyNames.hidden = 'Hidden';
SP.ContentTypePropertyNames.scope = 'Scope';
SP.ContentTypePropertyNames.group = 'Group';
SP.ContentTypePropertyNames.documentTemplateUrl = 'DocumentTemplateUrl';
SP.ContentTypePropertyNames.documentTemplate = 'DocumentTemplate';
SP.ContentTypePropertyNames.schemaXml = 'SchemaXml';
SP.ContentTypeObjectPropertyNames.fieldLinks = 'FieldLinks';
SP.ContentTypeObjectPropertyNames.workflowAssociations = 'WorkflowAssociations';
SP.ContentTypeObjectPropertyNames.parent = 'Parent';
SP.ContentTypeObjectPropertyNames.fields = 'Fields';
SP.FeaturePropertyNames.definitionId = 'DefinitionId';
SP.FieldPropertyNames.typeDisplayName = 'TypeDisplayName';
SP.FieldPropertyNames.typeShortDescription = 'TypeShortDescription';
SP.FieldPropertyNames.internalName = 'InternalName';
SP.FieldPropertyNames.id = 'Id';
SP.FieldPropertyNames.enforceUniqueValues = 'EnforceUniqueValues';
SP.FieldPropertyNames.title = 'Title';
SP.FieldPropertyNames.description = 'Description';
SP.FieldPropertyNames.group = 'Group';
SP.FieldPropertyNames.defaultValue = 'DefaultValue';
SP.FieldPropertyNames.validationFormula = 'ValidationFormula';
SP.FieldPropertyNames.validationMessage = 'ValidationMessage';
SP.FieldPropertyNames.fieldTypeKind = 'FieldTypeKind';
SP.FieldPropertyNames.typeAsString = 'TypeAsString';
SP.FieldPropertyNames.fromBaseType = 'FromBaseType';
SP.FieldPropertyNames.sealed = 'Sealed';
SP.FieldPropertyNames.canBeDeleted = 'CanBeDeleted';
SP.FieldPropertyNames.required = 'Required';
SP.FieldPropertyNames.readOnlyField = 'ReadOnlyField';
SP.FieldPropertyNames.hidden = 'Hidden';
SP.FieldPropertyNames.direction = 'Direction';
SP.FieldPropertyNames.sortable = 'Sortable';
SP.FieldPropertyNames.filterable = 'Filterable';
SP.FieldPropertyNames.schemaXml = 'SchemaXml';
SP.FieldPropertyNames.staticName = 'StaticName';
SP.FieldPropertyNames.scope = 'Scope';
SP.FieldCalculatedPropertyNames.formula = 'Formula';
SP.FieldCalculatedPropertyNames.outputType = 'OutputType';
SP.FieldCalculatedPropertyNames.dateFormat = 'DateFormat';
SP.FieldChoicePropertyNames.editFormat = 'EditFormat';
SP.FieldCollectionPropertyNames.schemaXml = 'SchemaXml';
SP.FieldComputedPropertyNames.enableLookup = 'EnableLookup';
SP.FieldCurrencyPropertyNames.currencyLocaleId = 'CurrencyLocaleId';
SP.FieldDateTimePropertyNames.dateTimeCalendarType = 'DateTimeCalendarType';
SP.FieldDateTimePropertyNames.displayFormat = 'DisplayFormat';
SP.FieldLinkPropertyNames.id = 'Id';
SP.FieldLinkPropertyNames.required = 'Required';
SP.FieldLinkPropertyNames.hidden = 'Hidden';
SP.FieldLinkPropertyNames.name = 'Name';
SP.FieldLookupPropertyNames.lookupWebId = 'LookupWebId';
SP.FieldLookupPropertyNames.lookupList = 'LookupList';
SP.FieldLookupPropertyNames.lookupField = 'LookupField';
SP.FieldLookupPropertyNames.relationshipDeleteBehavior = 'RelationshipDeleteBehavior';
SP.FieldLookupPropertyNames.isRelationship = 'IsRelationship';
SP.FieldLookupPropertyNames.allowMultipleValues = 'AllowMultipleValues';
SP.FieldLookupPropertyNames.primaryFieldId = 'PrimaryFieldId';
SP.FieldMultiChoicePropertyNames.fillInChoice = 'FillInChoice';
SP.FieldMultiChoicePropertyNames.choices = 'Choices';
SP.FieldMultiChoicePropertyNames.mappings = 'Mappings';
SP.FieldMultiLineTextPropertyNames.wikiLinking = 'WikiLinking';
SP.FieldMultiLineTextPropertyNames.numberOfLines = 'NumberOfLines';
SP.FieldMultiLineTextPropertyNames.allowHyperlink = 'AllowHyperlink';
SP.FieldMultiLineTextPropertyNames.restrictedMode = 'RestrictedMode';
SP.FieldMultiLineTextPropertyNames.richText = 'RichText';
SP.FieldMultiLineTextPropertyNames.appendOnly = 'AppendOnly';
SP.FieldNumberPropertyNames.minimumValue = 'MinimumValue';
SP.FieldNumberPropertyNames.maximumValue = 'MaximumValue';
SP.FieldRatingScalePropertyNames.gridStartNumber = 'GridStartNumber';
SP.FieldRatingScalePropertyNames.gridEndNumber = 'GridEndNumber';
SP.FieldRatingScalePropertyNames.rangeCount = 'RangeCount';
SP.FieldRatingScalePropertyNames.gridTextRangeLow = 'GridTextRangeLow';
SP.FieldRatingScalePropertyNames.gridTextRangeAverage = 'GridTextRangeAverage';
SP.FieldRatingScalePropertyNames.gridTextRangeHigh = 'GridTextRangeHigh';
SP.FieldRatingScalePropertyNames.gridNAOptionText = 'GridNAOptionText';
SP.FieldTextPropertyNames.maxLength = 'MaxLength';
SP.FieldUrlPropertyNames.displayFormat = 'DisplayFormat';
SP.FieldUserPropertyNames.presence = 'Presence';
SP.FieldUserPropertyNames.allowDisplay = 'AllowDisplay';
SP.FieldUserPropertyNames.selectionMode = 'SelectionMode';
SP.FieldUserPropertyNames.selectionGroup = 'SelectionGroup';
SP.FilePropertyNames.exists = 'Exists';
SP.FilePropertyNames.title = 'Title';
SP.FilePropertyNames.timeCreated = 'TimeCreated';
SP.FilePropertyNames.timeLastModified = 'TimeLastModified';
SP.FilePropertyNames.customizedPageStatus = 'CustomizedPageStatus';
SP.FilePropertyNames.eTag = 'ETag';
SP.FilePropertyNames.checkOutType = 'CheckOutType';
SP.FilePropertyNames.checkInComment = 'CheckInComment';
SP.FilePropertyNames.uiVersion = 'UIVersion';
SP.FilePropertyNames.majorVersion = 'MajorVersion';
SP.FilePropertyNames.minorVersion = 'MinorVersion';
SP.FilePropertyNames.uiVersionLabel = 'UIVersionLabel';
SP.FilePropertyNames.serverRelativeUrl = 'ServerRelativeUrl';
SP.FilePropertyNames.name = 'Name';
SP.FilePropertyNames.level = 'Level';
SP.FileObjectPropertyNames.author = 'Author';
SP.FileObjectPropertyNames.modifiedBy = 'ModifiedBy';
SP.FileObjectPropertyNames.lockedByUser = 'LockedByUser';
SP.FileObjectPropertyNames.checkedOutByUser = 'CheckedOutByUser';
SP.FileObjectPropertyNames.versions = 'Versions';
SP.FileObjectPropertyNames.listItemAllFields = 'ListItemAllFields';
SP.FileVersionPropertyNames.created = 'Created';
SP.FileVersionPropertyNames.id = 'ID';
SP.FileVersionPropertyNames.versionLabel = 'VersionLabel';
SP.FileVersionPropertyNames.url = 'Url';
SP.FileVersionPropertyNames.isCurrentVersion = 'IsCurrentVersion';
SP.FileVersionPropertyNames.checkInComment = 'CheckInComment';
SP.FileVersionObjectPropertyNames.createdBy = 'CreatedBy';
SP.FolderPropertyNames.itemCount = 'ItemCount';
SP.FolderPropertyNames.name = 'Name';
SP.FolderPropertyNames.serverRelativeUrl = 'ServerRelativeUrl';
SP.FolderPropertyNames.welcomePage = 'WelcomePage';
SP.FolderPropertyNames.uniqueContentTypeOrder = 'UniqueContentTypeOrder';
SP.FolderPropertyNames.contentTypeOrder = 'ContentTypeOrder';
SP.FolderObjectPropertyNames.parentFolder = 'ParentFolder';
SP.FolderObjectPropertyNames.files = 'Files';
SP.FolderObjectPropertyNames.folders = 'Folders';
SP.FormPropertyNames.serverRelativeUrl = 'ServerRelativeUrl';
SP.FormPropertyNames.id = 'Id';
SP.FormPropertyNames.formType = 'FormType';
SP.GroupPropertyNames.ownerTitle = 'OwnerTitle';
SP.GroupPropertyNames.description = 'Description';
SP.GroupPropertyNames.onlyAllowMembersViewMembership = 'OnlyAllowMembersViewMembership';
SP.GroupPropertyNames.allowMembersEditMembership = 'AllowMembersEditMembership';
SP.GroupPropertyNames.allowRequestToJoinLeave = 'AllowRequestToJoinLeave';
SP.GroupPropertyNames.autoAcceptRequestToJoinLeave = 'AutoAcceptRequestToJoinLeave';
SP.GroupPropertyNames.requestToJoinLeaveEmailSetting = 'RequestToJoinLeaveEmailSetting';
SP.GroupPropertyNames.canCurrentUserViewMembership = 'CanCurrentUserViewMembership';
SP.GroupPropertyNames.canCurrentUserEditMembership = 'CanCurrentUserEditMembership';
SP.GroupPropertyNames.canCurrentUserManageGroup = 'CanCurrentUserManageGroup';
SP.GroupObjectPropertyNames.owner = 'Owner';
SP.GroupObjectPropertyNames.users = 'Users';
SP.ListPropertyNames.parentWebUrl = 'ParentWebUrl';
SP.ListPropertyNames.dataSource = 'DataSource';
SP.ListPropertyNames.hasExternalDataSource = 'HasExternalDataSource';
SP.ListPropertyNames.created = 'Created';
SP.ListPropertyNames.lastItemModifiedDate = 'LastItemModifiedDate';
SP.ListPropertyNames.lastItemDeletedDate = 'LastItemDeletedDate';
SP.ListPropertyNames.id = 'Id';
SP.ListPropertyNames.description = 'Description';
SP.ListPropertyNames.isSiteAssetsLibrary = 'IsSiteAssetsLibrary';
SP.ListPropertyNames.title = 'Title';
SP.ListPropertyNames.direction = 'Direction';
SP.ListPropertyNames.schemaXml = 'SchemaXml';
SP.ListPropertyNames.baseType = 'BaseType';
SP.ListPropertyNames.imageUrl = 'ImageUrl';
SP.ListPropertyNames.itemCount = 'ItemCount';
SP.ListPropertyNames.baseTemplate = 'BaseTemplate';
SP.ListPropertyNames.defaultContentApprovalWorkflowId = 'DefaultContentApprovalWorkflowId';
SP.ListPropertyNames.templateFeatureId = 'TemplateFeatureId';
SP.ListPropertyNames.defaultViewUrl = 'DefaultViewUrl';
SP.ListPropertyNames.defaultEditFormUrl = 'DefaultEditFormUrl';
SP.ListPropertyNames.defaultNewFormUrl = 'DefaultNewFormUrl';
SP.ListPropertyNames.defaultDisplayFormUrl = 'DefaultDisplayFormUrl';
SP.ListPropertyNames.enableAttachments = 'EnableAttachments';
SP.ListPropertyNames.serverTemplateCanCreateFolders = 'ServerTemplateCanCreateFolders';
SP.ListPropertyNames.enableFolderCreation = 'EnableFolderCreation';
SP.ListPropertyNames.enableModeration = 'EnableModeration';
SP.ListPropertyNames.enableVersioning = 'EnableVersioning';
SP.ListPropertyNames.forceCheckout = 'ForceCheckout';
SP.ListPropertyNames.enableMinorVersions = 'EnableMinorVersions';
SP.ListPropertyNames.draftVersionVisibility = 'DraftVersionVisibility';
SP.ListPropertyNames.hidden = 'Hidden';
SP.ListPropertyNames.isApplicationList = 'IsApplicationList';
SP.ListPropertyNames.isCatalog = 'IsCatalog';
SP.ListPropertyNames.allowContentTypes = 'AllowContentTypes';
SP.ListPropertyNames.documentTemplateUrl = 'DocumentTemplateUrl';
SP.ListPropertyNames.contentTypesEnabled = 'ContentTypesEnabled';
SP.ListPropertyNames.multipleDataList = 'MultipleDataList';
SP.ListPropertyNames.onQuickLaunch = 'OnQuickLaunch';
SP.ListPropertyNames.browserFileHandling = 'BrowserFileHandling';
SP.ListPropertyNames.noCrawl = 'NoCrawl';
SP.ListPropertyNames.validationFormula = 'ValidationFormula';
SP.ListPropertyNames.validationMessage = 'ValidationMessage';
SP.ListPropertyNames.effectiveBasePermissions = 'EffectiveBasePermissions';
SP.ListObjectPropertyNames.parentWeb = 'ParentWeb';
SP.ListObjectPropertyNames.fields = 'Fields';
SP.ListObjectPropertyNames.views = 'Views';
SP.ListObjectPropertyNames.userCustomActions = 'UserCustomActions';
SP.ListObjectPropertyNames.forms = 'Forms';
SP.ListObjectPropertyNames.workflowAssociations = 'WorkflowAssociations';
SP.ListObjectPropertyNames.rootFolder = 'RootFolder';
SP.ListObjectPropertyNames.contentTypes = 'ContentTypes';
SP.ListItemPropertyNames.id = 'Id';
SP.ListItemPropertyNames.displayName = 'DisplayName';
SP.ListItemPropertyNames.fileSystemObjectType = 'FileSystemObjectType';
SP.ListItemPropertyNames.effectiveBasePermissions = 'EffectiveBasePermissions';
SP.ListItemObjectPropertyNames.parentList = 'ParentList';
SP.ListItemObjectPropertyNames.fieldValuesAsHtml = 'FieldValuesAsHtml';
SP.ListItemObjectPropertyNames.fieldValuesAsText = 'FieldValuesAsText';
SP.ListItemObjectPropertyNames.fieldValuesForEdit = 'FieldValuesForEdit';
SP.ListItemObjectPropertyNames.file = 'File';
SP.ListItemObjectPropertyNames.contentType = 'ContentType';
SP.ListItemCollectionPropertyNames.listItemCollectionPosition = 'ListItemCollectionPosition';
SP.ListTemplatePropertyNames.name = 'Name';
SP.ListTemplatePropertyNames.internalName = 'InternalName';
SP.ListTemplatePropertyNames.description = 'Description';
SP.ListTemplatePropertyNames.baseType = 'BaseType';
SP.ListTemplatePropertyNames.featureId = 'FeatureId';
SP.ListTemplatePropertyNames.listTemplateTypeKind = 'ListTemplateTypeKind';
SP.ListTemplatePropertyNames.imageUrl = 'ImageUrl';
SP.ListTemplatePropertyNames.hidden = 'Hidden';
SP.ListTemplatePropertyNames.unique = 'Unique';
SP.ListTemplatePropertyNames.onQuickLaunch = 'OnQuickLaunch';
SP.ListTemplatePropertyNames.allowsFolderCreation = 'AllowsFolderCreation';
SP.ListTemplatePropertyNames.isCustomTemplate = 'IsCustomTemplate';
SP.NavigationPropertyNames.useShared = 'UseShared';
SP.NavigationObjectPropertyNames.topNavigationBar = 'TopNavigationBar';
SP.NavigationObjectPropertyNames.quickLaunch = 'QuickLaunch';
SP.NavigationNodePropertyNames.title = 'Title';
SP.NavigationNodePropertyNames.id = 'Id';
SP.NavigationNodePropertyNames.url = 'Url';
SP.NavigationNodeObjectPropertyNames.children = 'Children';
SP.PrincipalPropertyNames.principalType = 'PrincipalType';
SP.PrincipalPropertyNames.title = 'Title';
SP.PrincipalPropertyNames.loginName = 'LoginName';
SP.PrincipalPropertyNames.id = 'Id';
SP.RecycleBinItemPropertyNames.id = 'Id';
SP.RecycleBinItemPropertyNames.itemState = 'ItemState';
SP.RecycleBinItemPropertyNames.itemType = 'ItemType';
SP.RecycleBinItemPropertyNames.title = 'Title';
SP.RecycleBinItemPropertyNames.dirName = 'DirName';
SP.RecycleBinItemPropertyNames.leafName = 'LeafName';
SP.RecycleBinItemPropertyNames.deletedDate = 'DeletedDate';
SP.RecycleBinItemPropertyNames.size = 'Size';
SP.RecycleBinItemObjectPropertyNames.author = 'Author';
SP.RecycleBinItemObjectPropertyNames.deletedBy = 'DeletedBy';
SP.RelatedFieldPropertyNames.webId = 'WebId';
SP.RelatedFieldPropertyNames.listId = 'ListId';
SP.RelatedFieldPropertyNames.fieldId = 'FieldId';
SP.RelatedFieldPropertyNames.relationshipDeleteBehavior = 'RelationshipDeleteBehavior';
SP.RelatedFieldObjectPropertyNames.lookupList = 'LookupList';
SP.RelatedFieldExtendedDataPropertyNames.webId = 'WebId';
SP.RelatedFieldExtendedDataPropertyNames.listId = 'ListId';
SP.RelatedFieldExtendedDataPropertyNames.fieldId = 'FieldId';
SP.RelatedFieldExtendedDataPropertyNames.resolvedListTitle = 'ResolvedListTitle';
SP.RelatedFieldExtendedDataPropertyNames.listImageUrl = 'ListImageUrl';
SP.RelatedFieldExtendedDataPropertyNames.toolTipDescription = 'ToolTipDescription';
SP.RequestContextObjectPropertyNames.web = 'Web';
SP.RequestContextObjectPropertyNames.site = 'Site';
SP.RoleAssignmentObjectPropertyNames.member = 'Member';
SP.RoleAssignmentObjectPropertyNames.roleDefinitionBindings = 'RoleDefinitionBindings';
SP.RoleDefinitionPropertyNames.id = 'Id';
SP.RoleDefinitionPropertyNames.name = 'Name';
SP.RoleDefinitionPropertyNames.description = 'Description';
SP.RoleDefinitionPropertyNames.roleTypeKind = 'RoleTypeKind';
SP.RoleDefinitionPropertyNames.hidden = 'Hidden';
SP.RoleDefinitionPropertyNames.order = 'Order';
SP.RoleDefinitionPropertyNames.basePermissions = 'BasePermissions';
SP.SecurableObjectPropertyNames.hasUniqueRoleAssignments = 'HasUniqueRoleAssignments';
SP.SecurableObjectObjectPropertyNames.roleAssignments = 'RoleAssignments';
SP.SitePropertyNames.id = 'Id';
SP.SitePropertyNames.serverRelativeUrl = 'ServerRelativeUrl';
SP.SitePropertyNames.url = 'Url';
SP.SitePropertyNames.usage = 'Usage';
SP.SitePropertyNames.uiVersionConfigurationEnabled = 'UIVersionConfigurationEnabled';
SP.SitePropertyNames.maxItemsPerThrottledOperation = 'MaxItemsPerThrottledOperation';
SP.SitePropertyNames.allowDesigner = 'AllowDesigner';
SP.SitePropertyNames.allowRevertFromTemplate = 'AllowRevertFromTemplate';
SP.SitePropertyNames.allowMasterPageEditing = 'AllowMasterPageEditing';
SP.SitePropertyNames.showUrlStructure = 'ShowUrlStructure';
SP.SiteObjectPropertyNames.features = 'Features';
SP.SiteObjectPropertyNames.userCustomActions = 'UserCustomActions';
SP.SiteObjectPropertyNames.rootWeb = 'RootWeb';
SP.SiteObjectPropertyNames.recycleBin = 'RecycleBin';
SP.UserPropertyNames.email = 'Email';
SP.UserCustomActionPropertyNames.name = 'Name';
SP.UserCustomActionPropertyNames.title = 'Title';
SP.UserCustomActionPropertyNames.description = 'Description';
SP.UserCustomActionPropertyNames.scope = 'Scope';
SP.UserCustomActionPropertyNames.sequence = 'Sequence';
SP.UserCustomActionPropertyNames.id = 'Id';
SP.UserCustomActionPropertyNames.imageUrl = 'ImageUrl';
SP.UserCustomActionPropertyNames.registrationType = 'RegistrationType';
SP.UserCustomActionPropertyNames.registrationId = 'RegistrationId';
SP.UserCustomActionPropertyNames.url = 'Url';
SP.UserCustomActionPropertyNames.location = 'Location';
SP.UserCustomActionPropertyNames.scriptSrc = 'ScriptSrc';
SP.UserCustomActionPropertyNames.scriptBlock = 'ScriptBlock';
SP.UserCustomActionPropertyNames.group = 'Group';
SP.UserCustomActionPropertyNames.commandUIExtension = 'CommandUIExtension';
SP.UserCustomActionPropertyNames.versionOfUserCustomAction = 'VersionOfUserCustomAction';
SP.UserCustomActionPropertyNames.rights = 'Rights';
SP.ViewPropertyNames.id = 'Id';
SP.ViewPropertyNames.title = 'Title';
SP.ViewPropertyNames.viewType = 'ViewType';
SP.ViewPropertyNames.imageUrl = 'ImageUrl';
SP.ViewPropertyNames.moderationType = 'ModerationType';
SP.ViewPropertyNames.serverRelativeUrl = 'ServerRelativeUrl';
SP.ViewPropertyNames.hidden = 'Hidden';
SP.ViewPropertyNames.readOnlyView = 'ReadOnlyView';
SP.ViewPropertyNames.requiresClientIntegration = 'RequiresClientIntegration';
SP.ViewPropertyNames.editorModified = 'EditorModified';
SP.ViewPropertyNames.threaded = 'Threaded';
SP.ViewPropertyNames.scope = 'Scope';
SP.ViewPropertyNames.includeRootFolder = 'IncludeRootFolder';
SP.ViewPropertyNames.defaultView = 'DefaultView';
SP.ViewPropertyNames.mobileView = 'MobileView';
SP.ViewPropertyNames.mobileDefaultView = 'MobileDefaultView';
SP.ViewPropertyNames.contentTypeId = 'ContentTypeId';
SP.ViewPropertyNames.defaultViewForContentType = 'DefaultViewForContentType';
SP.ViewPropertyNames.personalView = 'PersonalView';
SP.ViewPropertyNames.orderedView = 'OrderedView';
SP.ViewPropertyNames.viewQuery = 'ViewQuery';
SP.ViewPropertyNames.method = 'Method';
SP.ViewPropertyNames.viewProjectedFields = 'ViewProjectedFields';
SP.ViewPropertyNames.viewJoins = 'ViewJoins';
SP.ViewPropertyNames.rowLimit = 'RowLimit';
SP.ViewPropertyNames.paged = 'Paged';
SP.ViewPropertyNames.toolbar = 'Toolbar';
SP.ViewPropertyNames.toolbarTemplateName = 'ToolbarTemplateName';
SP.ViewPropertyNames.formats = 'Formats';
SP.ViewPropertyNames.aggregations = 'Aggregations';
SP.ViewPropertyNames.aggregationsStatus = 'AggregationsStatus';
SP.ViewPropertyNames.htmlSchemaXml = 'HtmlSchemaXml';
SP.ViewPropertyNames.styleId = 'StyleId';
SP.ViewPropertyNames.baseViewId = 'BaseViewId';
SP.ViewPropertyNames.viewData = 'ViewData';
SP.ViewObjectPropertyNames.viewFields = 'ViewFields';
SP.ViewFieldCollectionPropertyNames.schemaXml = 'SchemaXml';
SP.WebPropertyNames.description = 'Description';
SP.WebPropertyNames.created = 'Created';
SP.WebPropertyNames.lastItemModifiedDate = 'LastItemModifiedDate';
SP.WebPropertyNames.recycleBinEnabled = 'RecycleBinEnabled';
SP.WebPropertyNames.title = 'Title';
SP.WebPropertyNames.serverRelativeUrl = 'ServerRelativeUrl';
SP.WebPropertyNames.id = 'Id';
SP.WebPropertyNames.syndicationEnabled = 'SyndicationEnabled';
SP.WebPropertyNames.allowRssFeeds = 'AllowRssFeeds';
SP.WebPropertyNames.quickLaunchEnabled = 'QuickLaunchEnabled';
SP.WebPropertyNames.treeViewEnabled = 'TreeViewEnabled';
SP.WebPropertyNames.language = 'Language';
SP.WebPropertyNames.uiVersion = 'UIVersion';
SP.WebPropertyNames.uiVersionConfigurationEnabled = 'UIVersionConfigurationEnabled';
SP.WebPropertyNames.allowDesignerForCurrentUser = 'AllowDesignerForCurrentUser';
SP.WebPropertyNames.allowRevertFromTemplateForCurrentUser = 'AllowRevertFromTemplateForCurrentUser';
SP.WebPropertyNames.allowMasterPageEditingForCurrentUser = 'AllowMasterPageEditingForCurrentUser';
SP.WebPropertyNames.showUrlStructureForCurrentUser = 'ShowUrlStructureForCurrentUser';
SP.WebPropertyNames.effectiveBasePermissions = 'EffectiveBasePermissions';
SP.WebObjectPropertyNames.lists = 'Lists';
SP.WebObjectPropertyNames.rootFolder = 'RootFolder';
SP.WebObjectPropertyNames.folders = 'Folders';
SP.WebObjectPropertyNames.webs = 'Webs';
SP.WebObjectPropertyNames.features = 'Features';
SP.WebObjectPropertyNames.workflowTemplates = 'WorkflowTemplates';
SP.WebObjectPropertyNames.workflowAssociations = 'WorkflowAssociations';
SP.WebObjectPropertyNames.listTemplates = 'ListTemplates';
SP.WebObjectPropertyNames.currentUser = 'CurrentUser';
SP.WebObjectPropertyNames.allProperties = 'AllProperties';
SP.WebObjectPropertyNames.navigation = 'Navigation';
SP.WebObjectPropertyNames.contentTypes = 'ContentTypes';
SP.WebObjectPropertyNames.availableContentTypes = 'AvailableContentTypes';
SP.WebObjectPropertyNames.fields = 'Fields';
SP.WebObjectPropertyNames.availableFields = 'AvailableFields';
SP.WebObjectPropertyNames.userCustomActions = 'UserCustomActions';
SP.WebObjectPropertyNames.siteUserInfoList = 'SiteUserInfoList';
SP.WebObjectPropertyNames.siteGroups = 'SiteGroups';
SP.WebObjectPropertyNames.roleDefinitions = 'RoleDefinitions';
SP.WebObjectPropertyNames.associatedOwnerGroup = 'AssociatedOwnerGroup';
SP.WebObjectPropertyNames.associatedMemberGroup = 'AssociatedMemberGroup';
SP.WebObjectPropertyNames.associatedVisitorGroup = 'AssociatedVisitorGroup';
SP.WebTemplatePropertyNames.lcid = 'Lcid';
SP.WebTemplatePropertyNames.id = 'Id';
SP.WebTemplatePropertyNames.title = 'Title';
SP.WebTemplatePropertyNames.name = 'Name';
SP.WebTemplatePropertyNames.isHidden = 'IsHidden';
SP.WebTemplatePropertyNames.description = 'Description';
SP.WebTemplatePropertyNames.imageUrl = 'ImageUrl';
SP.WebTemplatePropertyNames.isRootWebOnly = 'IsRootWebOnly';
SP.WebTemplatePropertyNames.isSubWebOnly = 'IsSubWebOnly';
SP.WebTemplatePropertyNames.displayCategory = 'DisplayCategory';
SP.UI.PopoutMenu.$I_0 = false;
SP.UI.PopoutMenu.$1Z_0 = false;
SP.UI.PopoutMenu._activePopoutMenuInstance = null;
SP.UI.MenuTest.$X_0 = null;
SP.Application.UI.MoreColorsPicker.$Z_2 = null;
SP.Application.UI.MappedColor.$P_0 = null;
SP.Application.UI.MappedColor.$p_0 = null;
SP.UI.ApplicationPages.CalendarSelector.$3b_1 = new SP.UI.ApplicationPages.CalendarSelector();
SP.UI.ApplicationPages.CalendarInstanceRepository.$n_0 = {};
SP.UI.ApplicationPages.ResolveEntity.typE_EVENT = '0';
SP.UI.ApplicationPages.ResolveEntity.typE_USER = '1';
SP.UI.ApplicationPages.ResolveEntity.typE_RESOURCE = '2';
SP.UI.ApplicationPages.ResolveEntity.typE_EXCHANGE = '3';
SP.WebParts.LimitedWebPartManagerPropertyNames.scope = 'Scope';
SP.WebParts.LimitedWebPartManagerPropertyNames.hasPersonalizedParts = 'HasPersonalizedParts';
SP.WebParts.LimitedWebPartManagerObjectPropertyNames.webParts = 'WebParts';
SP.WebParts.WebPartPropertyNames.hidden = 'Hidden';
SP.WebParts.WebPartPropertyNames.isClosed = 'IsClosed';
SP.WebParts.WebPartPropertyNames.subtitle = 'Subtitle';
SP.WebParts.WebPartPropertyNames.title = 'Title';
SP.WebParts.WebPartPropertyNames.titleUrl = 'TitleUrl';
SP.WebParts.WebPartPropertyNames.zoneIndex = 'ZoneIndex';
SP.WebParts.WebPartDefinitionPropertyNames.id = 'Id';
SP.WebParts.WebPartDefinitionObjectPropertyNames.webPart = 'WebPart';
SP.Workflow.WorkflowAssociationPropertyNames.instantiationUrl = 'InstantiationUrl';
SP.Workflow.WorkflowAssociationPropertyNames.associationData = 'AssociationData';
SP.Workflow.WorkflowAssociationPropertyNames.id = 'Id';
SP.Workflow.WorkflowAssociationPropertyNames.baseId = 'BaseId';
SP.Workflow.WorkflowAssociationPropertyNames.webId = 'WebId';
SP.Workflow.WorkflowAssociationPropertyNames.listId = 'ListId';
SP.Workflow.WorkflowAssociationPropertyNames.internalName = 'InternalName';
SP.Workflow.WorkflowAssociationPropertyNames.name = 'Name';
SP.Workflow.WorkflowAssociationPropertyNames.description = 'Description';
SP.Workflow.WorkflowAssociationPropertyNames.taskListTitle = 'TaskListTitle';
SP.Workflow.WorkflowAssociationPropertyNames.historyListTitle = 'HistoryListTitle';
SP.Workflow.WorkflowAssociationPropertyNames.allowManual = 'AllowManual';
SP.Workflow.WorkflowAssociationPropertyNames.autoStartCreate = 'AutoStartCreate';
SP.Workflow.WorkflowAssociationPropertyNames.autoStartChange = 'AutoStartChange';
SP.Workflow.WorkflowAssociationPropertyNames.isDeclarative = 'IsDeclarative';
SP.Workflow.WorkflowAssociationPropertyNames.enabled = 'Enabled';
SP.Workflow.WorkflowAssociationPropertyNames.modified = 'Modified';
SP.Workflow.WorkflowAssociationPropertyNames.created = 'Created';
SP.Workflow.WorkflowTemplatePropertyNames.id = 'Id';
SP.Workflow.WorkflowTemplatePropertyNames.isDeclarative = 'IsDeclarative';
SP.Workflow.WorkflowTemplatePropertyNames.name = 'Name';
SP.Workflow.WorkflowTemplatePropertyNames.associationUrl = 'AssociationUrl';
SP.Workflow.WorkflowTemplatePropertyNames.description = 'Description';
SP.Workflow.WorkflowTemplatePropertyNames.allowManual = 'AllowManual';
SP.Workflow.WorkflowTemplatePropertyNames.permissionsManual = 'PermissionsManual';
SP.Workflow.WorkflowTemplatePropertyNames.autoStartCreate = 'AutoStartCreate';
SP.Workflow.WorkflowTemplatePropertyNames.autoStartChange = 'AutoStartChange';

if( typeof(Sys) != "undefined" && Sys && Sys.Application ){
   Sys.Application.notifyScriptLoaded();
}
NotifyScriptLoadedAndExecuteWaitingJobs("sp.js");
