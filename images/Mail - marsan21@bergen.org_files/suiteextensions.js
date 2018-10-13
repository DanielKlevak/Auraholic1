﻿window.scriptsLoaded = window.scriptsLoaded || {}; window.scriptProcessStart = window.scriptProcessStart || {}; window.scriptProcessStart['suiteextensions.js'] = (new Date()).getTime();
var SuiteExtensions;(function(n){var t=function(){function n(){}n.AddInId="addInId";n.Type="type";n.AppId="appId";n.DisplayName="displayName";return n}();n.AddInPropertyName=t})(SuiteExtensions||(SuiteExtensions={}));var SuiteExtensions;(function(n){var i=function(){function n(){}n.FileHandler="FileHandler";return n}();n.AddInType=i;var t=function(){function t(t){this.addInId=t[n.AddInPropertyName.AddInId];this.type=t[n.AddInPropertyName.Type];this.appId=t[n.AddInPropertyName.AppId];this.displayName=t[n.AddInPropertyName.DisplayName];this.id=this.appId+"_"+this.addInId}return t}();n.AddIn=t})(SuiteExtensions||(SuiteExtensions={}));var __extends=this.__extends||function(n,t){for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);function r(){this.constructor=n}r.prototype=t.prototype;n.prototype=new r};var SuiteExtensions;(function(n){var t=function(n){__extends(t,n);function t(){n.apply(this,arguments)}t.Extension="extension";t.FileIcon="fileIcon";t.OpenUrl="openUrl";t.PreviewUrl="previewUrl";t.NewFileUrl="newFileUrl";return t}(n.AddInPropertyName);n.FileHandlerAddInPropertyName=t})(SuiteExtensions||(SuiteExtensions={}));var SuiteExtensions;(function(n){var t=function(t){__extends(i,t);function i(i){t.call(this,i);var f=i.properties[n.FileHandlerAddInPropertyName.Extension];if(f!=undefined){this.extension=f.split(";");var e=this.extension.length>1;if(e){var r=n.SuiteExtensionsDataStore.GetInstance().hostConfig;if(r!=null){r.logging.WriteStart("StartParsingLongExtensionsProperty");r.logging.WriteDebugLog("ParsingLongExtensionsProperty",!1,"Number of extensions is "+this.extension.length)}}this.extension=this.extension.filter(function(n){return n.length>0});var u={};this.extension.forEach(function(n){u[n]=!0});this.extension=Object.keys(u);if(e&&r!=null){r.logging.WriteDebugLog("ParsingLongExtensionsProperty",!1,"Number of unique extensions is "+this.extension.length);r.logging.WriteSuccess("SuccessParsingLongExtensionsProperty")}}else this.extension=undefined;this.fileIcon=i.properties[n.FileHandlerAddInPropertyName.FileIcon];this.openUrl=i.properties[n.FileHandlerAddInPropertyName.OpenUrl];this.previewUrl=i.properties[n.FileHandlerAddInPropertyName.PreviewUrl];this.newFileUrl=i.properties[n.FileHandlerAddInPropertyName.NewFileUrl]}return i}(n.AddIn);n.FileHandlerAddIn=t})(SuiteExtensions||(SuiteExtensions={}));var SuiteExtensions;(function(n){var t=function(){function n(){}n.Equals=1;n.NotNull=2;n.Contains=3;return n}();n.AddInFilterOperation=t;var r=function(){function n(n,t,i){this.name=n;this.operation=t;this.value=i}n.prototype.IsMatch=function(n){var i=n[this.name];switch(this.operation){case t.Equals:if(i==undefined)return!1;if(typeof i=="object")throw new Error("Error: FilterClause: the property to test for Equals shouldn't be an object.");return i==this.value?!0:!1;case t.NotNull:return i!=undefined?!0:!1;break;case t.Contains:if(i==undefined)return!1;if(typeof i!="object"||typeof i.indexOf!="function")throw new Error("Error: FilterClause: the property to test for Contains should be an Array.");return i.indexOf(this.value)>=0?!0:!1;break;default:return!1}};return n}();var i=function(){function n(){this.clauses=[]}n.prototype.add=function(n,t,i){this.clauses.push(new r(n,t,i))};n.prototype.IsMatch=function(n){var t=!0;for(var i in this.clauses)t=t&&this.clauses[i].IsMatch(n);return t};return n}();n.AddInFilter=i})(SuiteExtensions||(SuiteExtensions={}));var SuiteExtensions;(function(n){var t=function(){function t(){this.unittestFlag=!1}t.prototype.getData=function(t,i){i.getDataCall&&i.getDataCall(t,n.SuiteExtensionsDataStore.dataPipeSuccessCallback,n.SuiteExtensionsDataStore.dataPipeFailCallback)};return t}();n.AzureDataPipe=t})(SuiteExtensions||(SuiteExtensions={}));var SuiteExtensions;(function(n){var t=function(){function n(){}n.Icon=0;n.Preview=1;n.Edit=2;n.FileCreation=3;return n}();n.ControlType=t;var i=function(){function n(){}n.FileExtension="fileExtension";return n}();n.ControlCreationProperty=i;var r=function(){function r(){}r.CreateControl=function(u,f){var e=n.SuiteExtensionsDataStore.GetInstance();if(e.hostConfig==null||!e.hostConfig.isFlightEnabled(n.AddInsFlights.FileHandlerFileCreation)&&f==t.FileCreation)return null;var c="Creating File Handler Control: [extension = "+u+"][control = "+f+"]";e.hostConfig.logging.WriteDebugLog("CreatingControl",!1,c);var h={};h[i.FileExtension]=u;var o=new n.AddInFilter;switch(f){case t.Icon:o.add(n.FileHandlerAddInPropertyName.Extension,n.AddInFilterOperation.Contains,u);e.hostConfig.isFlightEnabled(n.AddInsFlights.FileHandlerAddInPicker)||o.add(n.FileHandlerAddInPropertyName.FileIcon,n.AddInFilterOperation.NotNull,"");break;case t.Preview:o.add(n.FileHandlerAddInPropertyName.Extension,n.AddInFilterOperation.Contains,u);e.hostConfig.isFlightEnabled(n.AddInsFlights.FileHandlerAddInPicker)||o.add(n.FileHandlerAddInPropertyName.PreviewUrl,n.AddInFilterOperation.NotNull,"");break;case t.Edit:o.add(n.FileHandlerAddInPropertyName.Extension,n.AddInFilterOperation.Contains,u);e.hostConfig.isFlightEnabled(n.AddInsFlights.FileHandlerAddInPicker)||o.add(n.FileHandlerAddInPropertyName.OpenUrl,n.AddInFilterOperation.NotNull,"");break;case t.FileCreation:if(u!="")throw new Error("Error: CreateControl: parameter fileExtension must be empty string when control type is file creation");o.add(n.FileHandlerAddInPropertyName.Extension,n.AddInFilterOperation.NotNull,"");o.add(n.FileHandlerAddInPropertyName.NewFileUrl,n.AddInFilterOperation.NotNull,"");break;default:break}var s=e.getAddIns(n.AddInType.FileHandler,o);e.hostConfig.logging.WriteDebugLog("CreatingControl",!1,"Found "+(s==null?0:s.length)+"AddIn");if(s!=null&&s.length>0){e.hostConfig.logging.WriteStart("Collision_Start");s.length===1?e.hostConfig.logging.WriteSuccess("Collision_Success"):e.hostConfig.logging.WriteFailure("Collision_Failure");return r.CreateControlCommon(s,f,h)}else return null};r.CreateControlCommon=function(r,u,f){if(typeof SuiteExtensionsControls!="undefined"){var s=n.SuiteExtensionsDataStore.GetInstance();var h="Creating Common Control:[control = "+u+"]";s.hostConfig.logging.WriteDebugLog("CreatingCommonControl",!1,h);if(r.length>0&&r[0].type===n.AddInType.FileHandler){var e=r;switch(u){case t.Icon:var o=f[i.FileExtension];return new SuiteExtensionsControls.IconControl(e,o);case t.Preview:var o=f[i.FileExtension];return new SuiteExtensionsControls.PreviewControl(e,o);case t.Edit:var o=f[i.FileExtension];return new SuiteExtensionsControls.EditControl(e,o);case t.FileCreation:return new SuiteExtensionsControls.FileCreationMenu(e);default:s.hostConfig.logging.WriteDebugLog("CreatingCommonControl",!0,"Invalid Control Type");return null}}}return null};return r}();n.ControlFactory=r})(SuiteExtensions||(SuiteExtensions={}));var SuiteExtensions;(function(n){n.__namespace=!0})(SuiteExtensions||(SuiteExtensions={}));var SuiteExtensions;(function(n){var t=function(){function n(){this.prefix=null}n.prototype.WriteDebugLog=function(n,t,i){};n.prototype.WriteEngagementLog=function(n,t){};n.prototype.WriteStart=function(n){};n.prototype.WriteSuccess=function(n){};n.prototype.WriteFailure=function(n){};return n}();n.Logging=t})(SuiteExtensions||(SuiteExtensions={}));var SuiteExtensions;(function(n){var t=function(){function t(t){this.prefix=n.AddInType.FileHandler+"_"}t.prototype.WriteDebugLog=function(n,t,i){typeof WriteDebugLog!="undefined"&&WriteDebugLog(this.prefix+n,t,i)};t.prototype.WriteEngagementLog=function(n,t){typeof WriteEngagementLog!="undefined"&&WriteEngagementLog(this.prefix+n,t)};t.prototype.WriteStart=function(n){typeof WriteStart!="undefined"&&WriteStart(this.prefix+n)};t.prototype.WriteSuccess=function(n){typeof WriteSuccess!="undefined"&&WriteSuccess(this.prefix+n)};t.prototype.WriteFailure=function(n){typeof WriteFailure!="undefined"&&WriteFailure(this.prefix+n)};return t}();n.SharePointLogging=t})(SuiteExtensions||(SuiteExtensions={}));var SuiteExtensions;(function(n){var t=function(){function t(t){this.prefix=n.AddInType.FileHandler+"_";this.traceComponent=t}t.prototype.WriteDebugLog=function(n,t,i){};t.prototype.WriteEngagementLog=function(n,t){};t.prototype.WriteStart=function(n){};t.prototype.WriteSuccess=function(n){};t.prototype.WriteFailure=function(n){};return t}();n.OwaLogging=t})(SuiteExtensions||(SuiteExtensions={}));var SuiteExtensions;(function(n){var t=function(){function t(t,i){this.prefix=n.AddInType.FileHandler+"OneDrive_";this.errorHelper=t;this.engagement=i}t.prototype.WriteDebugLog=function(n,t,i){t==!0?this.errorHelper.log(i,this.prefix+n):this.errorHelper.verbose(i,this.prefix+n)};t.prototype.WriteEngagementLog=function(n,t){this.engagement.logData({name:this.prefix+n+t})};t.prototype.WriteStart=function(n){this.errorHelper.log("",this.prefix+n)};t.prototype.WriteSuccess=function(n){this.errorHelper.log("",this.prefix+n)};t.prototype.WriteFailure=function(n){this.errorHelper.log("",this.prefix+n)};return t}();n.OneDriveLogging=t})(SuiteExtensions||(SuiteExtensions={}));var SuiteExtensions;(function(n){var i=function(){function n(){}n.AzureDataPipe=0;n.FileHandlerAddInPicker=1;n.FileHandlerFileCreation=2;return n}();n.AddInsFlights=i;var t=function(){function t(t,i){this.enabledFlights=[];this.host="Office365";this.logging=new n.Logging;this.cultureName="en-us";this.resourceId="http://office365.com/";this.set_logging(null);this.userId=t;this.getDataCall=i}t.prototype.set_logging=function(t,i){switch(this.host){case"SharePoint":this.logging=new n.SharePointLogging(t);break;case"OWA":this.logging=new n.OwaLogging(t);break;case"OneDrive":this.logging=new n.OneDriveLogging(t,i);break;default:}};t.prototype.addFlight=function(n){this.enabledFlights.push(n)};t.prototype.isFlightEnabled=function(n){return this.enabledFlights.indexOf(n)>=0};return t}();n.HostConfig=t})(SuiteExtensions||(SuiteExtensions={}));var SuiteExtensions;(function(n){var t=function(){function n(){}n.NotRefresh=0;n.StorageNotSupported=1;n.PerformanceNotSupported=2;n.UnknownException=3;n.Refresh=4;return n}();n.RefreshDetectorStatus=t;var i=function(){function n(){this.status=this.CheckRefresh()}n.GetInstance=function(){n.instance==null&&(n.instance=new n);return n.instance};n.prototype.IsRefresh=function(){return this.status==t.Refresh||this.status==t.PerformanceNotSupported};n.prototype.GetStatus=function(){return this.status};n.prototype.ListenForRefresh=function(){this.pageUnloadListener==null&&(this.pageUnloadListener=this.OnPageUnload.bind(this));typeof Window!="undefined"&&Window.prototype.addEventListener.call(window,"unload",this.pageUnloadListener)};n.prototype.OnPageUnload=function(){var i=(location.href+"").split(location.hash||"#")[0];var t=+new Date;try{sessionStorage.setItem(n.LastPageKey,i);sessionStorage.setItem(n.UnloadTimeKey,t.toString())}catch(r){}};n.prototype.CheckRefresh=function(){try{if(!this.IsSessionStorageSupported())return t.StorageNotSupported;var u=sessionStorage.getItem(n.LastPageKey);var r=sessionStorage.getItem(n.UnloadTimeKey);if(u==null||r==null)return t.NotRefresh;var e=(location.href+"").split(location.hash||"#")[0];if(e!=u)return t.NotRefresh;if(window.performance==null||performance.timing==null||performance.timing.navigationStart==null)return t.PerformanceNotSupported;var f=Number(r);var i=performance.timing.navigationStart;return i==0?t.PerformanceNotSupported:i-f>n.MaxDelay?t.NotRefresh:t.Refresh}catch(o){return t.UnknownException}};n.prototype.IsSessionStorageSupported=function(){try{sessionStorage.setItem("Test","2");sessionStorage.removeItem("Test");return!0}catch(n){return!1}};n.UnloadTimeKey="RefreshDetector.UnloadTime";n.LastPageKey="RefreshDetector.LastPage";n.MaxDelay=100;return n}();n.RefreshDetector=i})(SuiteExtensions||(SuiteExtensions={}));var SuiteExtensions;(function(n){function t(){typeof SuiteExtensionsControls!="undefined"?SuiteExtensionsControls.InitializeIconControls():setTimeout("SuiteExtensions.CallInitializeIconControls()",300)}n.CallInitializeIconControls=t;var i=function(){function i(){}i.AddScriptToDocument=function(n,t,i){i&&document.getElementsByTagName("head")[0].removeChild(i);var r=document.createElement("script");r.setAttribute("id",t);r.setAttribute("src",n);r.setAttribute("type","text/javascript");document.getElementsByTagName("head")[0].appendChild(r);return r};i.LoadControlsJavascript=function(){var r=n.SuiteExtensionsDataStore.GetInstance();var u=document.getElementById("SuiteExtensionsControlsScript");if(r.hostConfig.host==="SharePoint"){r.hostConfig.controlsScriptPath="/_layouts/15/online/scripts/SuiteExtensionsControls.js";r.hostConfig.controlsScriptLoadCallback=t}if(u==null||typeof SuiteExtensionsControls=="undefined")if(r.hostConfig.controlsScriptPath){u=i.AddScriptToDocument(r.hostConfig.controlsScriptPath,"SuiteExtensionsControlsScript",u);u.onload=function(){typeof r.hostConfig.controlsScriptLoadCallback=="function"&&r.hostConfig.controlsScriptLoadCallback()}}else r.hostConfig.logging.WriteDebugLog("ScriptOnDemand.LoadControlsJavascript",!0,"Unable to load controls script because HostConfig.controlsScriptPath is null");else typeof r.hostConfig.controlsScriptLoadCallback=="function"&&r.hostConfig.controlsScriptLoadCallback()};i.LoadLocalizedStrings=function(t){if(t&&t.isFlightEnabled(n.AddInsFlights.FileHandlerAddInPicker)&&typeof t.localizedStringsPath=="string"&&t.localizedStringsPath&&(typeof Strings=="undefined"||typeof Strings.CloudApps=="undefined")){var r=new XMLHttpRequest;r.onreadystatechange=function(){if(r.readyState===4)if(r.status===200){t.logging.WriteSuccess("SuccessLoadLocalizedStrings");i.AddScriptToDocument(t.localizedStringsPath,"CloudAppsLocalizationScript")}else t.logging.WriteFailure("FailedLoadLocalizedStrings")};r.open("GET",t.localizedStringsPath,!0);r.send("");t.logging.WriteStart("StartLoadLocalizedStrings")}};return i}();n.ScriptOnDemand=i})(SuiteExtensions||(SuiteExtensions={}));var SuiteExtensions;(function(n){var t=function(){function t(){}t.prototype.getData=function(t,i){var f=t;var u=[{type:"FileHandler",appId:"4463c52c-491f-4559-a2b1-8b688fca9eb9",displayName:"GPX App",addInId:"12b4c4f2-d1c5-c12a-6245-1b5c3fdd85b1",properties:{extension:"gpx",fileIcon:"https://gpxfileapp-int.azurewebsites.net/content/pinpoint-16x16.png",openUrl:"https://gpxfileapp-int.azurewebsites.net/FileHandler/Open",previewUrl:"https://gpxfileapp-int.azurewebsites.net/FileHandler/Preview",newFileUrl:"https://gpxfileapp-int.azurewebsites.net/FileHandler/NewFile"}},{type:"FileHandler",addInId:"4463c52c-491f-4559-a2b1-8b688fca9eb9",displayName:"TWS test app",appId:"41e0235f-7bc4-4b32-83ec-2f4a7951be84",properties:{extension:"t",fileIcon:"https://testfilehandler.azurewebsites.net/icon.png",openUrl:"https://testfilehandler.azurewebsites.net/FileHandler/Open",previewUrl:"https://testfilehandler.azurewebsites.net/FileHandler/preview"}},{type:"FileHandler",appId:"6f7b9f0c-e0f9-41f9-9bff-bcf66d599c2b",displayName:"TEST or INI App",addInId:"5f0b526b-f1e4-4def-9d43-3b0d28d4ff53",properties:{extension:"test",fileIcon:"https://testorinifileapp-int.azurewebsites.net/content/test.png",openUrl:"https://testorinifileapp-int.azurewebsites.net/FileHandler/Open",newFileUrl:"https://testorinifileapp-int.azurewebsites.net/FileHandler/NewFile"}},{type:"FileHandler",appId:"6f7b9f0c-e0f9-41f9-9bff-bcf66d599c2b",displayName:"TEST or INI App",addInId:"e94ca6fe-66c3-4212-b4db-3c32c2b00d85",properties:{extension:"ini",previewUrl:"https://testorinifileapp-int.azurewebsites.net/FileHandler/Preview"}},{type:"FileHandler",appId:"f02cf431-6830-4090-9e3e-f8526e676852",displayName:"DRW App",addInId:"b0497361-9dff-4fcf-a8ac-ae11b5f27f1c",properties:{extension:"drw",openUrl:"https://drwfileapp-int.azurewebsites.net/FileHandler/Open",previewUrl:"https://drwfileapp-int.azurewebsites.net/FileHandler/Preview"}},{type:"FileHandler",appId:"523f34b4-200f-4239-aa3d-67682bf24bdc",displayName:"OFF App",addInId:"55d5929b-e6d3-4518-8297-98078e4f0ee8",properties:{extension:"off",fileIcon:"https://offfileapp-int.azurewebsites.net/content/off.png",openUrl:"https://offfileapp-int.azurewebsites.net/FileHandler/Open",newFileUrl:"https://offfileapp-int.azurewebsites.net/FileHandler/NewFile"}},{type:"FileHandler",appId:"f266399a-ab8d-4407-9f2d-797a35a75d3f",displayName:"OFF or OFFICE App",addInId:"5afb40fd-3604-4cbe-b991-82d01a66a29b",properties:{extension:"off",fileIcon:"https://offorofficefileapp-int.azurewebsites.net/content/off-mt.png",previewUrl:"https://offorofficefileapp-int.azurewebsites.net/FileHandler/Preview",newFileUrl:"https://offorofficefileapp-int.azurewebsites.net/FileHandler/NewFile"}},{type:"FileHandler",appId:"f266399a-ab8d-4407-9f2d-797a35a75d3f",displayName:"OFF or OFFICE App",addInId:"3a3ff70e-23c7-4dae-8bad-43c314a98b82",properties:{extension:"office",fileIcon:"https://offorofficefileapp-int.azurewebsites.net/content/office.png",previewUrl:"https://offorofficefileapp-int.azurewebsites.net/FileHandler/Preview",openUrl:"https://offorofficefileapp-int.azurewebsites.net/FileHandler/Open",newFileUrl:"https://offorofficefileapp-int.azurewebsites.net/FileHandler/NewFile"}},{type:"FileHandler",appId:"b565d800-242f-4eef-aa2e-1b5f09529a94",displayName:"EXT App",addInId:"0c21f706-6071-4b2c-9273-59ea1f486eb9",properties:{extension:"ext1",previewUrl:"https://extfileapp-int.azurewebsites.net/FileHandler/Preview",openUrl:"https://extfileapp-int.azurewebsites.net/FileHandler/Open"}},{type:"FileHandler",appId:"b565d800-242f-4eef-aa2e-1b5f09529a94",displayName:"EXT App",addInId:"88551be5-def0-4aeb-b2b6-6bf2e259f3ea",properties:{extension:"ext2",fileIcon:"https://extfileapp-int.azurewebsites.net/content/ext2.png",openUrl:"https://extfileapp-int.azurewebsites.net/FileHandler/Open"}},{type:"FileHandler",appId:"b565d800-242f-4eef-aa2e-1b5f09529a94",displayName:"EXT App",addInId:"da4b51ef-4b12-434a-b79d-0e930db6f133",properties:{extension:"ext3",fileIcon:"https://extfileapp-int.azurewebsites.net/content/ext3.png",previewUrl:"https://extfileapp-int.azurewebsites.net/FileHandler/Preview",newFileUrl:"https://extfileapp-int.azurewebsites.net/FileHandler/NewFile"}},{type:"FileHandler",appId:"b565d800-242f-4eef-aa2e-1b5f09529a94",displayName:"EXT App",addInId:"92f9bcf2-aa0f-4a68-8714-c648af3fb715",properties:{extension:"ext4",fileIcon:"https://extfileapp-int.azurewebsites.net/content/ext4.png",newFileUrl:"https://extfileapp-int.azurewebsites.net/FileHandler/NewFile"}},{type:"FileHandler",appId:"b565d800-242f-4eef-aa2e-1b5f09529a94",displayName:"EXT App",addInId:"7fed2d59-55b3-490d-819c-474dfd772900",properties:{extension:"ext5",previewUrl:"https://extfileapp-int.azurewebsites.net/FileHandler/Preview",openUrl:"https://extfileapp-int.azurewebsites.net/FileHandler/Open",newFileUrl:"https://extfileapp-int.azurewebsites.net/FileHandler/NewFile"}},{type:"FileHandler",addInId:"0436ffad-8131-4307-963b-9595ebb34e85",displayName:"Code View App",appId:"41e0235f-7bc4-4b32-83ec-2f4a7951be84",properties:{extension:"txa;txb;txc;off",fileIcon:"https://codeviewapp.azurewebsites.net/content/fileicon.png",openUrl:"https://codeviewapp.azurewebsites.net/filehandler/open",previewUrl:"https://codeviewapp.azurewebsites.net/filehandler/preview",newFileUrl:"https://codeviewapp.azurewebsites.net/filehandler/newfile"}}];var r=JSON.stringify(u);n.SuiteExtensionsDataStore.dataPipeSuccessCallback(f,r)};return t}();n.TestDataPipe=t})(SuiteExtensions||(SuiteExtensions={}));var SuiteExtensions;(function(n){var t=function(){function t(){this.extensionsDictionary={};this.refreshRequested=!1;if(t._instance)throw new Error("Error: Instantiation failed: Use SuiteExtensionsDataStore.GetInstance() instead of new.");t._instance=this;this.localStorage=n.SuiteExtensionsLocalStorage.GetInstance();this.useAzureDataPipe=!1;var i=n.RefreshDetector.GetInstance();i.IsRefresh()&&(this.refreshRequested=!0);i.ListenForRefresh()}t.Initialize=function(i){n.ScriptOnDemand.LoadLocalizedStrings(i);var f=i.isFlightEnabled(n.AddInsFlights.AzureDataPipe);var r=t.GetInstance();if(r.hostConfig==null){var u=n.RefreshDetector.GetInstance();i.logging.WriteStart("StartIsRefresh");u.IsRefresh()?i.logging.WriteSuccess("SuccessIsRefresh"):i.logging.WriteFailure("FailedIsRefresh");i.logging.WriteStart("StartRefreshDetectorStatus");switch(u.GetStatus()){case n.RefreshDetectorStatus.NotRefresh:case n.RefreshDetectorStatus.Refresh:i.logging.WriteSuccess("SuccessRefreshDetectorStatus");break;case n.RefreshDetectorStatus.StorageNotSupported:i.logging.WriteFailure("FailedRefreshDetectorStatus_StorageNotSupported");break;case n.RefreshDetectorStatus.PerformanceNotSupported:i.logging.WriteFailure("FailedRefreshDetectorStatus_PerformanceNotSupported");break;case n.RefreshDetectorStatus.UnknownException:i.logging.WriteFailure("FailedRefreshDetectorStatus_UnknownException");break}}r.set_host(i);r.SetDataPipe(f);r.GetDataFromLocalStorage()};t.GetInstance=function(){t._instance===null&&(t._instance=new t);return t._instance};t.dataPipeSuccessCallback=function(n,i){var r=t.GetInstance();try{r.hostConfig.logging.WriteDebugLog("StartSetLocalStorage",!1,"Starting to set local storage with add-in data");r.hostConfig.logging.WriteStart("StartSetLocalStorage");r.localStorage.SetItem(n,i);r.hostConfig.logging.WriteSuccess("SuccessSetLocalStorage");r.hostConfig.logging.WriteDebugLog("SuccessSetLocalStorage",!1,"Successfully set local storage with add-in data")}catch(u){r.hostConfig.logging.WriteFailure("FailedSetLocalStorage");r.hostConfig.logging.WriteDebugLog("FailedSetLocalStorage",!0,"Failed to set local storage with add-in data in this browser "+u.message)}r.GetDataFromStorageAndLoadControlsJS(n,"StartLoadControlsScriptOnNewData","SuccessLoadControlsScriptOnNewData")};t.dataPipeFailCallback=function(n){t.GetInstance().hostConfig.logging.WriteDebugLog("FailedAzureDataPipe",!0,"Failed to get the add-in data from azure"+n.message)};t.prototype.SetDataPipe=function(t){this.useAzureDataPipe=t;this.dataPipe=this.useAzureDataPipe===!0?new n.AzureDataPipe:new n.TestDataPipe};t.prototype.set_host=function(n){this.hostConfig=n};t.prototype.GetDataFromLocalStorage=function(){var t=n.AddInType.FileHandler;if(this.localStorage!=null){this.GetDataFromStorageAndLoadControlsJS(t,"StartLoadControlsScript","SuccessLoadControlsScript");if(this.localStorage.IsExpired(t)||this.refreshRequested){this.refreshRequested=!1;this.dataPipe.getData(t,this.hostConfig)}}else{this.hostConfig.logging.WriteEngagementLog("LocalStorageNotSupportedInBrowser",null);var i=navigator.appCodeName+navigator.appName+navigator.appVersion;this.hostConfig.logging.WriteDebugLog("LocalStorageNotSupportedInBrowser",!0,"Local Storage is not supported in this browser: "+i)}};t.prototype.GetExtensions=function(n){return this.extensionsDictionary[n]?this.extensionsDictionary[n]:null};t.prototype.GetDataFromStorageAndLoadControlsJS=function(t,i,r){if(this.localStorage!=null){try{this.hostConfig.logging.WriteDebugLog("StartGetLocalStorageItem",!1,"Trying to get add-ins from local storage");this.hostConfig.logging.WriteStart("StartGetLocalStorageItem");var u=this.localStorage.GetItemObject(t);this.hostConfig.logging.WriteSuccess("SuccessGetLocalStorageItem");this.hostConfig.logging.WriteDebugLog("SuccessGetLocalStorageItem",!1,"Successfully retrieved add-ins from local storage")}catch(f){this.hostConfig.logging.WriteFailure("FailedGetLocalStorageItem");this.hostConfig.logging.WriteDebugLog("FailedGetLocalStorageItem",!0,"Failed to retrive add in from local storage: "+f.message)}if(u!=null&&u.length>0){this.extensionsDictionary[t]=u;this.hostConfig.logging.WriteDebugLog(i,!1,"Trying to load suite extensions controls javascript");this.hostConfig.logging.WriteStart(i);n.ScriptOnDemand.LoadControlsJavascript();this.hostConfig.logging.WriteSuccess(r);this.hostConfig.logging.WriteDebugLog(r,!1,"Successfully loaded suite extensions controls javascript")}}};t.prototype.getAddIns=function(t,i){var s=[];var u=this.GetExtensions(t);var o=0;if(u!=null)for(var r=0;r<u.length;r++){var f=u[r];if(f.type===t){var e=new n.FileHandlerAddIn(f);if(i.IsMatch(e)){s[o]=e;o++}}}return s};t.IsValidUrlForFileHandlerApp=function(i,r){var e=t.GetInstance();e.hostConfig.logging.WriteStart("IsValidUrlForApp_Start");var u=null;try{u=e.localStorage.GetItemObject(n.AddInType.FileHandler)}catch(s){e.hostConfig.logging.WriteDebugLog("IsValidUrlForApp",!0,"Failed to retrive add in from local storage: "+s.message);e.hostConfig.logging.WriteFailure("IsValidUrlForApp_Failure");return!1}var o=!1;if(u!=null&&u.length>0)for(var f=0;f<u.length;f++)if(u[f]&&u[f].properties&&u[f].appId===i&&(u[f].properties.previewUrl===r||u[f].properties.openUrl===r||u[f].properties.newFileUrl===r)){o=!0;break}if(o)e.hostConfig.logging.WriteSuccess("IsValidUrlForApp_Success");else{e.hostConfig.logging.WriteDebugLog("IsValidUrlForApp",!0,"appId: "+i+", appUrl: "+r);e.hostConfig.logging.WriteFailure("IsValidUrlForApp_Failure")}return o};t._instance=null;return t}();n.SuiteExtensionsDataStore=t})(SuiteExtensions||(SuiteExtensions={}));var SuiteExtensions;(function(n){var t=function(){function t(){if(t.instance)throw new Error("Error: Instantiation failed: Use SuiteExtensionsLocalStorage.GetInstance() instead of new.");t.instance=this}t.GetInstance=function(){if(!t.Supported())return null;t.instance===null&&(t.instance=new t);return t.instance};t.prototype.SetItem=function(n,t){this.SetItemInternal(this.GetExtensionTypeKey(n),t);this.SetItemInternal(this.GetExpirationKey(n),(+new Date).toString())};t.prototype.GetItem=function(n){return this.GetItemInternal(this.GetExtensionTypeKey(n))};t.prototype.SetItemObject=function(n,t){this.SetItem(n,JSON.stringify(t))};t.prototype.GetItemObject=function(n){return JSON.parse(this.GetItem(n))};t.prototype.GetExpirationKey=function(n){return this.GetExtensionTypeKey(n)+".LocalStorageSetTime"};t.prototype.IsExpired=function(n){var i=this.GetItemInternal(this.GetExpirationKey(n));if(i==null||i==undefined)return!0;else{var u=+i;var r=+new Date;return r-u>=t.MaximumExpiredPeriod?!0:!1}};t.Supported=function(){try{localStorage.setItem("Test","2");localStorage.removeItem("Test");return!0}catch(n){return!1}};t.prototype.GetExtensionTypeKey=function(t){return"Office365.AddIns."+t+"."+n.SuiteExtensionsDataStore.GetInstance().hostConfig.userId};t.prototype.SetItemInternal=function(n,t){localStorage.setItem(n,t)};t.prototype.GetItemInternal=function(n){return localStorage.getItem(n)};t.MaximumExpiredPeriod=864e5;t.instance=null;return t}();n.SuiteExtensionsLocalStorage=t})(SuiteExtensions||(SuiteExtensions={}));typeof window.define=="function"&&window.define.amd&&define("SuiteExtensions",["require","exports"],function(n,t){t.SuiteExtensions=SuiteExtensions});
window.scriptsLoaded['suiteextensions.js'] = 1; window.scriptProcessEnd = window.scriptProcessEnd || {}; window.scriptProcessEnd['suiteextensions.js'] = (new Date()).getTime();
