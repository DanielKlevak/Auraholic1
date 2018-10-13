﻿window.scriptsLoaded = window.scriptsLoaded || {}; window.scriptProcessStart = window.scriptProcessStart || {}; window.scriptProcessStart['microsoft.o365.suiteserviceproxycommon.js'] = (new Date()).getTime();
Type.registerNamespace("O365SuiteServiceProxy");O365SuiteServiceProxy.C=function(){};O365SuiteServiceProxy.D=function(){};function MsrCryptoUtils(){}MsrCryptoUtils.ComputeSHA256=function(n,t,i,r){try{var e=MsrCryptoUtils.b(n,r);var f=new O365SuiteServiceProxy.w;f.name="SHA-256";var u=msrCrypto.subtle.digest(f,MsrCryptoUtils.c(e));u.oncomplete=function(n){if(MsrCryptoUtils.a(n,i)){var r=MsrCryptoUtils.e(n.target.result);t(msrCrypto.stringToBase64(MsrCryptoUtils.d(r,!1)))}};u.onerror=function(n){MsrCryptoUtils.a(n,i)&&i(n.target.result)}}catch(o){i(o.toString())}};MsrCryptoUtils.h=function(n,t,i,r,u){try{var o=String.format('{{ "kty": "oct", "k": "{0}", "extractable": true }}',MsrCryptoUtils.f(n));var s=MsrCryptoUtils.b(o,!1);var e=new O365SuiteServiceProxy.r;e.name="AES-CBC";var f=msrCrypto.subtle.importKey("jwk",MsrCryptoUtils.c(s),e,!0,[]);f.oncomplete=function(n){try{var s=n.target.result;var h=MsrCryptoUtils.b(msrCrypto.base64ToString(t),!1);var o=MsrCryptoUtils.b(i,!0);var f=new O365SuiteServiceProxy.s;f.iv=MsrCryptoUtils.c(h);f.name="AES-CBC";var e=msrCrypto.subtle.encrypt(f,s,MsrCryptoUtils.c(o));e.oncomplete=function(n){try{if(MsrCryptoUtils.a(n,u)){var t=MsrCryptoUtils.e(n.target.result);r(msrCrypto.stringToBase64(MsrCryptoUtils.d(t,!1)))}}catch(i){u(i.toString())}};e.onerror=function(n){MsrCryptoUtils.a(n,u)&&u(n.target.result)}}catch(c){u(c.toString())}};f.onerror=function(n){MsrCryptoUtils.a(n,u)&&u(n.target.result)}}catch(h){u(h.toString())}};MsrCryptoUtils.g=function(n,t,i,r,u){try{var o=String.format('{{ "kty": "oct", "k": "{0}", "extractable": true }}',MsrCryptoUtils.f(n));var s=MsrCryptoUtils.b(o,!1);var e=new O365SuiteServiceProxy.r;e.name="AES-CBC";var f=msrCrypto.subtle.importKey("jwk",MsrCryptoUtils.c(s),e,!0,[]);f.oncomplete=function(n){try{var s=n.target.result;var h=MsrCryptoUtils.b(msrCrypto.base64ToString(t),!1);var o=MsrCryptoUtils.b(msrCrypto.base64ToString(i),!1);var f=new O365SuiteServiceProxy.s;f.iv=MsrCryptoUtils.c(h);f.name="AES-CBC";var e=msrCrypto.subtle.decrypt(f,s,MsrCryptoUtils.c(o));e.oncomplete=function(n){try{if(MsrCryptoUtils.a(n,u)){var t=MsrCryptoUtils.e(n.target.result);r(MsrCryptoUtils.d(t,!0))}}catch(i){u(i.toString())}};e.onerror=function(n){MsrCryptoUtils.a(n,u)&&u(n.target.result)}}catch(c){u(c.toString())}};f.onerror=function(n){MsrCryptoUtils.a(n,u)&&u(n.target.result)}}catch(h){u(h.toString())}};MsrCryptoUtils.b=function(n,t){n=t?encodeURI(n):n;for(var r=new Array(n.length),i=0;i<r.length;i++)r[i]=n.charCodeAt(i);return r};MsrCryptoUtils.d=function(n,t){for(var r="",i=0;i<n.length;i++)r+=String.fromCharCode(n[i]);return t?decodeURI(r):r};MsrCryptoUtils.f=function(n){return n.replace(new RegExp("\\+","g"),"-").replace(new RegExp("/","g"),"_").replace(new RegExp("=","g"),"")};MsrCryptoUtils.c=function(n){return window.Uint8Array?new Uint8Array(n):n;return null};MsrCryptoUtils.e=function(n){if(n.pop)return n;else{var i=new Uint8Array(n);var r=i.length;if(r===1)return i[0];else{for(var u=[],t=0;t<r;t++)u[t]=i[t];return u}return null}};MsrCryptoUtils.a=function(n,t){if(n&&n.target&&n.target.result)return!0;else{t("result undefined");return!1}};O365SuiteServiceProxy.w=function(){};O365SuiteServiceProxy.w.prototype={name:null};O365SuiteServiceProxy.r=function(){};O365SuiteServiceProxy.r.prototype={name:null};O365SuiteServiceProxy.s=function(){};O365SuiteServiceProxy.s.prototype={name:null,iv:null};O365SuiteServiceProxy.u=function(){};O365SuiteServiceProxy.A=function(){};O365SuiteServiceProxy.StT=function(){};O365SuiteServiceProxy.StT.prototype={session:0,suiteDataSharing:1};O365SuiteServiceProxy.StT.registerEnum("O365SuiteServiceProxy.StT",!1);O365SuiteServiceProxy.x=function(){};O365SuiteServiceProxy.x.prototype={SignedIn:1,SignedInIdp:2,NotSignedIn:3};O365SuiteServiceProxy.x.registerEnum("O365SuiteServiceProxy.x",!1);O365SuiteServiceProxy.B=function(){this.MailboxLocation=2};O365SuiteServiceProxy.n=function(){};O365SuiteServiceProxy.JQueryAdapter=function(){};O365SuiteServiceProxy.JQueryAdapter.$$cctor=function(){var n=window.self;n.MejQuery=O365SuiteServiceProxy.JQueryAdapter.a()};O365SuiteServiceProxy.JQueryAdapter.a=function(){var n=function(n){return O365SuiteServiceProxy.JQueryAPIImplementor.a(n)};n.prototype=O365SuiteServiceProxy.JQueryAPIImplementor.prototype;n.each=O365SuiteServiceProxy.JQueryAPIImplementor.each;n.parseJSON=O365SuiteServiceProxy.JQueryAPIImplementor.parseJSON;return n};O365SuiteServiceProxy.JQueryAPIImplementor=function(n){this.a=n;if(n){this[0]=n;n.jievents||(n.jievents={})}};O365SuiteServiceProxy.JQueryAPIImplementor.each=function(n,t){if(n){var i=0;if(n.length)for(var f=n;i<f.length;i++)t(i,f[i]);else{var e=n;for(var r in e){var u={key:r,value:e[r]};t(u.key,u.value)}}}};O365SuiteServiceProxy.JQueryAPIImplementor.parseJSON=function(n){return O365SuiteServiceProxy.a.k(n)};O365SuiteServiceProxy.JQueryAPIImplementor.a=function(n){if(n)if(String.isInstanceOfType(n)){var t=n;if(O365SuiteServiceProxy.JQueryAPIImplementor.b.test(t)){var i=document.createElement("Div");i.innerHTML=t;return new O365SuiteServiceProxy.JQueryAPIImplementor(i.firstChild)}else{var r=document.getElementsByTagName(t);return new O365SuiteServiceProxy.JQueryAPIImplementor(r)}}else return new O365SuiteServiceProxy.JQueryAPIImplementor(n);else return new O365SuiteServiceProxy.JQueryAPIImplementor(null)};O365SuiteServiceProxy.JQueryAPIImplementor.prototype={a:null,attr:function(n,t){if(this.a){var i=this.a;i.setAttribute(n,t)}return this},appendTo:function(n){if(n){var t=O365SuiteServiceProxy.JQueryAPIImplementor.a(n);if(t.a)if(t.a.length){var r=this;O365SuiteServiceProxy.JQueryAPIImplementor.each(t.a,function(n,t){var i=t;i.appendChild(r.a)})}else{var i=t.a;i.appendChild(this.a)}}},on:function(n,t){if(this.a&&n&&t){var u=n.split(".");var f=this;var i=function(n){var i={};i.originalEvent=n;t(i)};_o365su.a.a(this.a,u[0],i,!1);var r=this.a.jievents;r[n]=i}},off:function(n){if(this.a){var t=this.a.jievents;var i=null;t&&n in t&&(i=t[n]);var r=n.split(".");_o365su.a.b(this.a,r[0],i)}}};O365SuiteServiceProxy.m=function(){};O365SuiteServiceProxy.m.b=function(n,t,i){var f="";var u;var e=0;var c=" \"%<>'&";var h=null;if(n===h||typeof n=="undefined"||!n.length)return"";for(e=0;e<n.length;e++){var r=n.charCodeAt(e);var o=n.charAt(e);if(t&&(o==="#"||o==="?")){f+=n.substr(e);break}if(r<=127)i?f+=o:r>=97&&r<=122||r>=65&&r<=90||r>=48&&r<=57||r>=32&&r<=95&&c.indexOf(o)<0?f+=o:r<=15?f+="%0"+r.toString(16).toUpperCase():r<=127&&(f+="%"+r.toString(16).toUpperCase());else if(r<=2047){u=192|r>>6;f+="%"+u.toString(16).toUpperCase();u=128|r&63;f+="%"+u.toString(16).toUpperCase()}else if((r&64512)!=55296){u=224|r>>12;f+="%"+u.toString(16).toUpperCase();u=128|(r&4032)>>6;f+="%"+u.toString(16).toUpperCase();u=128|r&63;f+="%"+u.toString(16).toUpperCase()}else if(e<n.length-1){r=(r&1023)<<10;e++;var s=n.charCodeAt(e);r|=s&1023;r+=65536;u=240|r>>18;f+="%"+u.toString(16).toUpperCase();u=128|(r&258048)>>12;f+="%"+u.toString(16).toUpperCase();u=128|(r&4032)>>6;f+="%"+u.toString(16).toUpperCase();u=128|r&63;f+="%"+u.toString(16).toUpperCase()}}return f};O365SuiteServiceProxy.m.a=function(n){for(var f=document.cookie.split(";"),u=null,t=0;t<f.length;t++){var i=f[t];var r=i.indexOf("=");if(r!==-1&&i.substring(0,r).trim()===n){u=i.substr(r+1);break}}return u};O365SuiteServiceProxy.e=function(){};O365SuiteServiceProxy.e.a=function(n){var t=n.indexOf("://");t=n.indexOf("/",t+3);t>0&&(n=n.substr(0,t));n.substr(0,8).toLowerCase()==="https://"&&n.substr(n.length-4,4)===":443"?n=n.substr(0,n.length-4):n.substr(0,7).toLowerCase()==="http://"&&n.substr(n.length-3,3)===":80"&&(n=n.substr(0,n.length-3));return n};O365SuiteServiceProxy.e.g=function(n){var u=null;if(typeof n=="string"){for(var r=new ArrayBuffer(n.length),f=new Uint8Array(r),i=0;i<n.length;i++)f[i]=n.charCodeAt(i)&255;var t=null;window.BlobBuilder?t=new BlobBuilder:window.MozBlobBuilder&&(t=new MozBlobBuilder);if(t){t.append(r);u=t.getBlob()}else u=r}return u};O365SuiteServiceProxy.e.f=function(n){var i="";if(n)for(var r=new Uint8Array(n),t=0;t<n.byteLength;t++)i=i+String.fromCharCode(r[t]);return i};O365SuiteServiceProxy.e.i=function(n){n.responseType="arraybuffer"};O365SuiteServiceProxy.e.c=function(){O365SuiteServiceProxy.e.b++;return O365SuiteServiceProxy.e.e+O365SuiteServiceProxy.e.b.toString()};O365SuiteServiceProxy.e.h=function(n){var i="";var t=n.indexOf("?");t>0&&(i=n.substr(t+1,n.length));return i};O365SuiteServiceProxy.e.d=function(n){var i="";var t=O365SuiteServiceProxy.e.a(n);var r=n.indexOf("?");i=r>t.length+1?n.substring(t.length+1,r):n.substring(t.length+1,n.length);return i};O365SuiteServiceProxy.e.get_emptyCallback=function(){return null};O365SuiteServiceProxy.a=function(){};O365SuiteServiceProxy.a.c=function(n){var t=null;return n===t||typeof n=="undefined"||!n.length};O365SuiteServiceProxy.a.a=function(n){var t=null;return n===t||typeof n=="undefined"};O365SuiteServiceProxy.a.d=function(n){return typeof n=="undefined"};O365SuiteServiceProxy.a.k=function(n){try{return JSON.parse(n)}catch(t){return null}};O365SuiteServiceProxy.a.i=function(){var n=window.XMLHttpRequest;if(O365SuiteServiceProxy.a.d(n))throw O365SuiteServiceProxy.a.b("Browser not supported",-2003);return new XMLHttpRequest};O365SuiteServiceProxy.a.g=function(n,t){if(!O365SuiteServiceProxy.a.j(n))throw O365SuiteServiceProxy.a.f(t);};O365SuiteServiceProxy.a.j=function(n){return n.substr(0,8).toLowerCase()==="https://"||n.substr(0,7).toLowerCase()==="http://"};O365SuiteServiceProxy.a.e=function(n,t,i,r){if(r){if(O365SuiteServiceProxy.a.a(n)||typeof n!==i)throw O365SuiteServiceProxy.a.b(String.format("Invalid field or parameter {0}",t),-2001);}else if(!O365SuiteServiceProxy.a.a(n)&&typeof n!==i)throw O365SuiteServiceProxy.a.b(String.format("Invalid field or parameter {0}",t),-2001);};O365SuiteServiceProxy.a.b=function(n,t){var i=Error.create(n);i.errorCode=t;return i};O365SuiteServiceProxy.a.f=function(n){return O365SuiteServiceProxy.a.b(String.format("Invalid field or parameter {0}",n),-2001)};O365SuiteServiceProxy.a.h=function(n){return O365SuiteServiceProxy.m.b(n,!0,!0)};O365SuiteServiceProxy.ServiceHandlers=function(){};O365SuiteServiceProxy.ServiceHandlers.onBeforeSendRequestAdmin=function(n,t,i){var r=O365SuiteServiceProxy.m.a("s.AjaxSessionKey");r&&n.setRequestHeader("AjaxSessionKey",r);return null};O365SuiteServiceProxy.ServiceHandlers.onBeforeSendRequestSuiteService=function(n,t,i){var f="X-OWA-CANARY";var e="X-OWA-CANARY-DEBUG";var r=O365SuiteServiceProxy.m.a(f);var u=O365SuiteServiceProxy.m.a(e);r&&n.setRequestHeader(f,r);u&&n.setRequestHeader(e,u);return null};O365SuiteServiceProxy.ServiceHandlers.validateOrigin=function(n,t){var f=253;if(!t||n.length>f)return!1;for(var u=!1,r,i=0;i<t.length;i++){if(O365SuiteServiceProxy.a.c(t[i]))return!1;r=new RegExp(t[i],"i");if(r.test(n)){u=!0;break}}return u};O365SuiteServiceProxy.ServiceHandlers.IsAllowedApi=function(n){if(O365SuiteServiceProxy.a.c(n))return!1;var t=O365SuiteServiceProxy.e.d(n);if(t in O365SuiteServiceProxy.ServiceHandlers.a)if(O365SuiteServiceProxy.ServiceHandlers.a[t]){var i=O365SuiteServiceProxy.e.h(n).replace("&UA=0","");if(i in O365SuiteServiceProxy.ServiceHandlers.b)return!0}else return!0;else if(t.startsWith("O365SuiteService/api/"))return!0;return t==="owa/ev.owa2"||t==="ev.owa2"?O365SuiteServiceProxy.ServiceHandlers.d(n):!1};O365SuiteServiceProxy.ServiceHandlers.e=function(){var n={};n["action=GetReminders"]=!0;n["action=GetOwaUserConfiguration"]=!0;n["action=SetNotificationSettings"]=!0;n["action=FindItem"]=!0;n["action=GetUserAvailabilityInternal"]=!0;n["action=GetCalendarFolders"]=!0;n["action=ProcessSuiteStorage"]=!0;n["action=SubscribeToNotification"]=!0;n["action=GetReminders"]=!0;n["action=PerformReminderAction"]=!0;n["action=GetOwaUserOofSettings"]=!0;n["action=SetUserTheme"]=!0;n["action=SetUserLocale"]=!0;n["action=UnsubscribeToNotification"]=!0;n["action=GetDaysUntilPasswordExpiration"]=!0;n["action=GetModernGroups"]=!0;n["action=GetModernGroup"]=!0;n["action=GetModernGroupUnseenItems"]=!0;n["action=GetCalendarFolderConfiguration"]=!0;n["action=SubscribeToGroupUnseenNotification"]=!0;n["action=SubscribeToGroupNotification"]=!0;n["action=GetSocialActivityNotifications"]=!0;n["action=GetSocialActivityNotifications2"]=!0;n["action=MarkSocialActivityNotificationsAsSeen"]=!0;n["action=MarkSocialActivityNotificationsAsSeen2"]=!0;n["action=GetBingHelpSearchResults"]=!0;n["action=GetMailboxByIdentity"]=!0;n["action=GetMailboxRegionalConfiguration"]=!0;n["action=SetMailboxRegionalConfiguration"]=!0;n["format=json"]=!0;n["action=TestAddReminders"]=!0;n["action=TestDeleteAllReminders"]=!0;n["action=TestAddItems"]=!0;n["action=TestDeleteAllItems"]=!0;n["action=TestAddCalendarFolders"]=!0;n["action=TestAddCalendarGroups"]=!0;n["action=TestDeleteAllCalendarFolders"]=!0;n["action=TestDeleteAllCalendarGroups"]=!0;n["action=TestAddUserAvailability"]=!0;n["action=TestDeleteAllUserAvailability"]=!0;n["action=TestAddOwaUserOofSettings"]=!0;n["action=TestDeleteNotifications"]=!0;n["action=TestAddNotifications"]=!0;n["action=TestGetSettings"]=!0;return n};O365SuiteServiceProxy.ServiceHandlers.g=function(){var n={};n.ecnsq=!0;n.brwnm=!0;n.cid=!0;n.syncFnshRq=!0;n.ns=!0;n.ev=!0;n.Fn=!0;n.UA=!0;n["UX-E4E-CANARY"]=!0;n["X-OWA-CANARY"]=!0;n["X-OWA-CANARY-DEBUG"]=!0;n["X-E4E-CANARY-DEBUG"]=!0;return n};O365SuiteServiceProxy.ServiceHandlers.f=function(){var n={};n["owa/service.svc"]=!0;n["SuiteService.svc/"]=!0;n["SuiteService.svc"]=!0;n["owa/ev.owa2"]=!0;n["ev.owa2"]=!0;n["Microsoft.Online.BOX.Admin.UI.SystemAlert.GetAlerts.model"]=!0;n["Microsoft.Online.BOX.Admin.UI.AppHub.AppUICallbacks.GetPrePinnedAppTiles.model"]=!0;n["Microsoft.Online.BOX.Admin.UI.AppHub.AppUICallbacks.GetAllAppTilesForAllCollectors.model"]=!0;n["api/myapps/GetAllApps"]=!1;n["api/myapps/GetAppDetails"]=!1;n["api/myapps/GetCompleteAppData"]=!1;n["api/myapps/ExecuteAppCustomAction"]=!1;n["api/myapps/ActivatePendingProvisioningApps"]=!1;n["owa/service.svc/s/GetPersonaPhoto"]=!1;n["api/settings/cards"]=!1;n["api/settings/cards/data"]=!1;n["api/settings/theme"]=!1;n["api/settings/language"]=!1;n["api/settings/startpage"]=!1;n["api/settings/contactPreferences"]=!1;n["api/NotificationsSettings/User"]=!1;n["api/settings/SPO/MySiteUrl"]=!1;n["api/settings/regiontimezone"]=!1;n["api/profile/photo"]=!1;return n};O365SuiteServiceProxy.ServiceHandlers.d=function(n){if(O365SuiteServiceProxy.a.c(n)||n===" ")return!1;var u=n.split("?");if(u.length===2){var i=u[1];if(O365SuiteServiceProxy.a.c(i)||i===" ")return!1;for(var f=i.split("&"),t=0;t<f.length;t++){var r=f[t].split("=");if(r.length===2){if(!(r[0]in O365SuiteServiceProxy.ServiceHandlers.c))return!1}else return!1}return!0}return!1};O365SuiteServiceProxy.SSRqD=function(){};O365SuiteServiceProxy.SSRqD.prototype={userId:null,clear:!1,reads:null,writes:null,deletes:null,requestType:0};O365SuiteServiceProxy.StS=function(){};O365SuiteServiceProxy.StS.a=function(n,t){if(n&&!n.startsWith(t+"//"))throw O365SuiteServiceProxy.a.b("Access denied",-2010);};O365SuiteServiceProxy.SSWE=function(){};O365SuiteServiceProxy.SSWE.prototype={key:null,value:null};O365SuiteServiceProxy.b=function(){};O365SuiteServiceProxy.b.b=function(n,t){t.val=0;var i=n.errorCode;if(i){t.val=i;return!0}else return!1};O365SuiteServiceProxy.b.a=function(n){var t;var r,i;return(i=O365SuiteServiceProxy.b.b(n,r={val:t}),t=r.val,i)&&(t===-1010||t===-1007)};O365SuiteServiceProxy.v=function(){};O365SuiteServiceProxy.v.a=function(n){var t=window.self;return t.MSA?new window.MSA.MeControl.UserStateModel(n):null};O365SuiteServiceProxy.f=function(){};O365SuiteServiceProxy.f.h=function(n,t){var r=new O365SuiteServiceProxy.q;var u=O365SuiteServiceProxy.m.a("SuiteServiceProxyKey");var e=null;var o=null;if(O365SuiteServiceProxy.a.c(u)){u=O365SuiteServiceProxy.m.a("ClientStorageCookie");if(O365SuiteServiceProxy.a.c(u))throw O365SuiteServiceProxy.a.b("Session storage error",-2007);else u=decodeURIComponent(u)}var f=u.split("&");if(f.length!==2)throw O365SuiteServiceProxy.a.b("Session storage error",-2007);e=f[0];o=f[1];if(O365SuiteServiceProxy.a.c(n.userId))throw O365SuiteServiceProxy.a.b("Session storage error",-2004);var i=window.sessionStorage;if(!i)throw O365SuiteServiceProxy.a.b("Session storage error",-2005);var s=window.MsrCryptoUtils;if(!s)throw O365SuiteServiceProxy.a.b("Session storage error",-2006);try{MsrCryptoUtils.ComputeSHA256(n.userId,function(u){var f=i.getItem("CurrentUserId");f&&u!==f&&i.clear();i.setItem("CurrentUserId",u);O365SuiteServiceProxy.f.e(n,r,i);O365SuiteServiceProxy.f.f(n,r,i);O365SuiteServiceProxy.f.g(n,e,o,i,r,t)},function(n){var i=n?n:"Session storage error";r.resetError=O365SuiteServiceProxy.a.b(i,-2008);t(r)},!0)}catch(h){r.resetError=h;t(r)}};O365SuiteServiceProxy.f.i=function(n,t){var r=window.localStorage;if(!r)throw O365SuiteServiceProxy.a.b("Session storage error",-2005);if(!O365SuiteServiceProxy.f.d){_o365su.a.a(window.self,"storage",function(){},!1);O365SuiteServiceProxy.f.d=!0}if(n.clear)throw O365SuiteServiceProxy.a.b("Invalid operation",-2010);var i=new O365SuiteServiceProxy.q;if(n.deletes)try{for(var s=0;s<n.deletes.length;s++){var h=n.deletes[s];O365SuiteServiceProxy.StS.a(h,"O365S");r.removeItem(h)}}catch(y){i.deleteError=y}if(n.writes)try{for(var v={},o=0;o<n.writes.length;o++){var u=n.writes[o];O365SuiteServiceProxy.StS.a(u.key,"O365S");r.setItem(u.key,u.value)}}catch(l){i.writeError=l}if(n.reads)try{for(var c={},f=0;f<n.reads.length;f++){var e=n.reads[f];O365SuiteServiceProxy.StS.a(e,"O365S");c[e]=r.getItem(e)}i.reads=c}catch(a){i.readError=a}t(i)};O365SuiteServiceProxy.f.e=function(n,t,i){try{n.clear&&i.clear()}catch(r){t.clearError=r}};O365SuiteServiceProxy.f.f=function(n,t,i){try{if(!1===O365SuiteServiceProxy.a.a(n.deletes))for(var r=0;r<n.deletes.length;r++){var u=n.deletes[r];i.removeItem(u)}}catch(f){t.deleteError=f}};O365SuiteServiceProxy.f.g=function(n,t,i,r,u,f){try{!1===O365SuiteServiceProxy.a.a(n.writes)?O365SuiteServiceProxy.f.c(t,i,n.writes,0,r,function(){O365SuiteServiceProxy.f.b(n,t,i,r,u,f)},function(e){u.writeError=e;O365SuiteServiceProxy.f.b(n,t,i,r,u,f)}):O365SuiteServiceProxy.f.b(n,t,i,r,u,f)}catch(e){u.writeError=e;O365SuiteServiceProxy.f.b(n,t,i,r,u,f)}};O365SuiteServiceProxy.f.b=function(n,t,i,r,u,f){var s={};try{if(!1===O365SuiteServiceProxy.a.a(n.reads)){var e={};O365SuiteServiceProxy.f.a(t,i,n.reads,0,e,r,function(n){u.reads=n;f(u)},function(n){u.readError=n;f(u)})}}catch(o){u.readError=o;f(u)}};O365SuiteServiceProxy.f.c=function(n,t,i,r,u,f,e){if(i&&r<i.length)if(n)MsrCryptoUtils.h(n,t,"$"+i[r].value+"$",function(o){u.setItem(i[r].key,o);O365SuiteServiceProxy.f.c(n,t,i,r+1,u,f,e)},function(n){var t=n?n:"Session storage error";e(O365SuiteServiceProxy.a.b(t,-2009))});else{u.setItem(i[r].key,i[r].value);O365SuiteServiceProxy.f.c(n,t,i,r+1,u,f,e)}else f()};O365SuiteServiceProxy.f.a=function(n,t,i,r,u,f,e,o){if(i&&r<i.length){var h=i[r];var s=f.getItem(h);if(s===null)O365SuiteServiceProxy.f.a(n,t,i,r+1,u,f,e,o);else if(n)MsrCryptoUtils.g(n,t,s,function(s){O365SuiteServiceProxy.a.a(s)||!1===s.startsWith("$")||!1===s.endsWith("$")||s.length<=2?f.clear():u[h]=s.substr(1,s.length-2);O365SuiteServiceProxy.f.a(n,t,i,r+1,u,f,e,o)},function(n){o(Error.create(n))});else{u[h]=s;O365SuiteServiceProxy.f.a(n,t,i,r+1,u,f,e,o)}}else e(u)};O365SuiteServiceProxy.q=function(){};O365SuiteServiceProxy.q.prototype={reads:null,resetError:null,clearError:null,deleteError:null,writeError:null,readError:null};O365SuiteServiceProxy.c=function(){};O365SuiteServiceProxy.c.a=function(){return _o365su.c.a("performance.now")?performance.now():Date.now()};O365SuiteServiceProxy.c.e=function(n){return O365SuiteServiceProxy.c.d(O365SuiteServiceProxy.c.b(n,"resource"))};O365SuiteServiceProxy.c.b=function(n,t){return _o365su.c.a("performance.getEntriesByName")?performance.getEntriesByName(n,t):null};O365SuiteServiceProxy.c.c=function(n){var t={};t.fetchStart=n.fetchStart;t.requestStart=n.requestStart;t.responseStart=n.responseStart;t.responseEnd=n.responseEnd;return JSON.stringify(t)};O365SuiteServiceProxy.c.d=function(n){if(n){for(var f=[],u=n,e=u.length,r=0;r<e;++r){var i=u[r];var t={};t.connectEnd=i.connectEnd;t.connectStart=i.connectStart;t.decodedBodySize=i.decodedBodySize;t.domainLookupEnd=i.domainLookupEnd;t.domainLookupStart=i.domainLookupStart;t.duration=i.duration;t.encodedBodySize=i.encodedBodySize;t.entryType=i.entryType;t.fetchStart=i.fetchStart;t.initiatorType=i.initiatorType;t.name=i.name;t.nextHopProtocol=i.nextHopProtocol;t.redirectEnd=i.redirectEnd;t.redirectStart=i.redirectStart;t.requestStart=i.requestStart;t.responseEnd=i.responseEnd;t.responseStart=i.responseStart;t.secureConnectionStart=i.secureConnectionStart;t.startTime=i.startTime;t.transferSize=i.transferSize;t.workerStart=i.workerStart;Array.add(f,t)}return f}else return null};MsrCryptoUtils.registerClass("MsrCryptoUtils");O365SuiteServiceProxy.u.registerClass("O365SuiteServiceProxy.u");O365SuiteServiceProxy.A.registerClass("O365SuiteServiceProxy.A");O365SuiteServiceProxy.JQueryAPIImplementor.registerClass("O365SuiteServiceProxy.JQueryAPIImplementor");O365SuiteServiceProxy.ServiceHandlers.registerClass("O365SuiteServiceProxy.ServiceHandlers");O365SuiteServiceProxy.SSRqD.registerClass("O365SuiteServiceProxy.SSRqD");O365SuiteServiceProxy.SSWE.registerClass("O365SuiteServiceProxy.SSWE");O365SuiteServiceProxy.q.registerClass("O365SuiteServiceProxy.q");O365SuiteServiceProxy.n.MSA="msa";O365SuiteServiceProxy.n.AAD="aad";O365SuiteServiceProxy.n.msaFed="msaFed";O365SuiteServiceProxy.JQueryAdapter.$$cctor();O365SuiteServiceProxy.JQueryAPIImplementor.b=new RegExp("^<(\\w+)(.*)>");O365SuiteServiceProxy.e.b=0;O365SuiteServiceProxy.e.e="SP.RequestExecutor";O365SuiteServiceProxy.ServiceHandlers.c=O365SuiteServiceProxy.ServiceHandlers.g();O365SuiteServiceProxy.ServiceHandlers.b=O365SuiteServiceProxy.ServiceHandlers.e();O365SuiteServiceProxy.ServiceHandlers.a=O365SuiteServiceProxy.ServiceHandlers.f();O365SuiteServiceProxy.StS.OSS="O365S";O365SuiteServiceProxy.StS.DSPS="//";O365SuiteServiceProxy.f.d=!1;
window.scriptsLoaded['microsoft.o365.suiteserviceproxycommon.js'] = 1; window.scriptProcessEnd = window.scriptProcessEnd || {}; window.scriptProcessEnd['microsoft.o365.suiteserviceproxycommon.js'] = (new Date()).getTime();
