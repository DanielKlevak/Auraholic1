/*! Version: 1.0.0; Third Party Notices: https://res.delve.office.com/lpc/versionless/tpn-a8eba47eae38ee22704acc06998e21f6c02d8e8d4f1a4db5ccb5f36e372707da95172fa8d7e845afc862ae004bceda5dd6dc14385e3e63ef3d17035de5459c94.txt */
(window.webpackJsonpLpc=window.webpackJsonpLpc||[]).push([[24],{1005:function(e,t,n){"use strict";var r=n(1015),i=n(728),o=n(92),a=n(37),s=Object(a.S)({"0%":{transform:"rotateZ(0deg)"},"100%":{transform:"rotateZ(360deg)"}});n.d(t,"a",function(){return l});var l=Object(r.a)(i.a,function(e){var t,n=e.theme,r=e.size,i=e.className,l=n.palette;return{root:["ms-Spinner",i],circle:["ms-Spinner-circle",{margin:"auto",boxSizing:"border-box",borderRadius:"50%",width:"100%",height:"100%",border:"1.5px solid "+l.themeLight,borderTopColor:l.themePrimary,animationName:s,animationDuration:"1.3s",animationIterationCount:"infinite",animationTimingFunction:"cubic-bezier(.53,.21,.29,.67)",selectors:(t={},t[a.j]={borderTopColor:"Highlight"},t)},r===o.a.xSmall&&["ms-Spinner--xSmall",{width:12,height:12}],r===o.a.small&&["ms-Spinner--small",{width:16,height:16}],r===o.a.medium&&["ms-Spinner--medium",{width:20,height:20}],r===o.a.large&&["ms-Spinner--large",{width:28,height:28}]],label:["ms-Spinner-label",{color:l.themePrimary,marginTop:10,textAlign:"center"}],screenReaderText:a.R}},void 0,{scope:"Spinner"})},1054:function(e,t,n){"use strict";var r=n(1015),i=n(2),o=n(0),a=n(1014),s=n(1019),l=n(498),c=n(1018),d=n(1e3),u=n(1553),m=n(1550),p=Object(a.a)(),h=function(e){function t(t){var n=e.call(this,t)||this;return n._toggleButton=Object(s.a)(),n._onClick=function(e){var t=n.props,r=t.disabled,i=t.checked,o=t.onChange,a=t.onChanged,s=t.onClick,l=n.state.checked;r||(void 0===i&&n.setState({checked:!l}),o&&o(e,!l),a&&a(!l),s&&s(e))},n._warnMutuallyExclusive({checked:"defaultChecked"}),n._warnDeprecations({onAriaLabel:"ariaLabel",offAriaLabel:void 0,onChanged:"onChange"}),n.state={checked:!(!t.checked&&!t.defaultChecked)},n._id=t.id||Object(l.c)("Toggle"),n}return i.c(t,e),Object.defineProperty(t.prototype,"checked",{get:function(){return this.state.checked},enumerable:!0,configurable:!0}),t.prototype.componentWillReceiveProps=function(e){void 0!==e.checked&&this.setState({checked:!!e.checked})},t.prototype.render=function(){var e=this,t=this.props,n=t.as,r=void 0===n?"div":n,a=t.className,s=t.theme,l=t.disabled,d=t.keytipProps,h=t.label,f=t.ariaLabel,g=t.onAriaLabel,b=t.offAriaLabel,y=t.offText,v=t.onText,x=t.styles,C=this.state.checked,k=C?v:y,S=C?g:b,T=Object(c.f)(this.props,c.i,["defaultChecked"]),N=p(x,{theme:s,className:a,disabled:l,checked:C});return o.createElement(r,{className:N.root},h&&o.createElement(u.a,{htmlFor:this._id,className:N.label},h),o.createElement("div",{className:N.container},o.createElement(m.a,{keytipProps:d,ariaDescribedBy:T["aria-describedby"],disabled:l},function(t){return o.createElement("button",i.a({},T,t,{className:N.pill,disabled:l,id:e._id,type:"button",role:"switch",ref:e._toggleButton,"aria-disabled":l,"aria-checked":C,"aria-label":f||S,"data-is-focusable":!0,onChange:e._noop,onClick:e._onClick}),o.createElement("div",{className:N.thumb}))}),k&&o.createElement(u.a,{className:N.text},k)))},t.prototype.focus=function(){this._toggleButton.current&&this._toggleButton.current.focus()},t.prototype._noop=function(){},t}(d.a),f=n(37);n.d(t,"a",function(){return g});var g=Object(r.a)(h,function(e){var t,n,r,i,o,a,s,l=e.theme,c=e.className,d=e.disabled,u=e.checked,m=l.semanticColors,p=m.bodyBackground,h=m.inputBackgroundChecked,g=m.inputBackgroundCheckedHovered,b=m.disabledBodyText,y=m.inputBorderHovered,v=m.inputForegroundChecked,x=m.disabledBodyText,C=m.disabledBackground,k=m.smallInputBorder,S=m.inputBorderHovered,T=m.disabledBodyText,N=m.disabledText;return{root:["ms-Toggle",u&&"is-checked",!d&&"is-enabled",d&&"is-disabled",l.fonts.medium,{marginBottom:"8px"},c],label:["ms-Toggle-label",d&&{color:N,selectors:(t={},t[f.j]={color:"GrayText"},t)}],container:["ms-Toggle-innerContainer",{display:"inline-flex",position:"relative"}],pill:["ms-Toggle-background",Object(f.L)(l,-3),{fontSize:"20px",boxSizing:"border-box",width:"2.2em",height:"1em",borderRadius:"1em",transition:"all 0.1s ease",borderWidth:"1px",borderStyle:"solid",background:p,borderColor:k,cursor:"pointer",display:"flex",alignItems:"center",padding:"0 .2em"},!d&&[!u&&{selectors:{":hover":[{borderColor:S}],":hover .ms-Toggle-thumb":[{selectors:(n={},n[f.j]={borderColor:"Highlight"},n)}]}},u&&[{background:h,borderColor:"transparent",justifyContent:"flex-end"},{selectors:(r={":hover":[{backgroundColor:g,borderColor:"transparent",selectors:(i={},i[f.j]={backgroundColor:"Highlight"},i)}]},r[f.j]={backgroundColor:"WindowText"},r)}]],d&&[{cursor:"default"},!u&&[{borderColor:T}],u&&[{backgroundColor:b,borderColor:"transparent",justifyContent:"flex-end"}]],!d&&{selectors:{"&:hover":{selectors:(o={},o[f.j]={borderColor:"Highlight"},o)}}}],thumb:["ms-Toggle-thumb",{width:".5em",height:".5em",borderRadius:".5em",transition:"all 0.1s ease",backgroundColor:y,borderColor:"transparent",borderWidth:".28em",borderStyle:"solid",boxSizing:"border-box"},!d&&u&&[{backgroundColor:v,selectors:(a={},a[f.j]={backgroundColor:"Window",borderColor:"Window"},a)}],d&&[!u&&[{backgroundColor:x}],u&&[{backgroundColor:C}]]],text:["ms-Toggle-stateText",{selectors:{"&&":{padding:"0",margin:"0 10px",userSelect:"none"}}},d&&{selectors:{"&&":{color:N,selectors:(s={},s[f.j]={color:"GrayText"},s)}}}]}},void 0,{scope:"Toggle"})},1359:function(e,t,n){"use strict";n.d(t,"a",function(){return u});var r,i=n(525),o="genericfile",a="folder",s="sharedfolder",l="docset",c="listitem",d=16;function u(e){var t=o;if(e.extension)t=function(e){if(!r)for(var t in r={},i.a)if(i.a.hasOwnProperty(t)){var n=i.a[t].extensions;if(n)for(var a=0;a<n.length;a++)r[n[a]]=t}return e=e.replace(".","").toLowerCase(),r[e]||o}(e.extension);else if(e.type)switch(e.type){case 1:t=l;break;case 2:t=a;break;case 4:t=c;break;case 5:t=s}return{iconName:t+function(e,t){void 0===t&&(t="svg");var n=window.devicePixelRatio,r="";"svg"===t&&1<n&&n<=1.5?20!==e&&(r="_1.5x"):"png"===t&&(1<n&&n<=1.5?r=20===e?"_2x":"_1.5x":1.5<n&&n<=2?r="_2x":2<n&&n<=3?r="_3x":3<n&&(r="_4x"));return e+r+"_"+t}(e.size||d,e.imageFileType)}}},1464:function(e,t,n){var r;!function(i){"use strict";var o,a,s,l=(o=/d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZWN]|"[^"]*"|'[^']*'/g,a=/\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,s=/[^-+\dA-Z]/g,function(e,t,n,r){if(1!==arguments.length||"string"!==(null===(i=e)?"null":void 0===i?"undefined":"object"!=typeof i?typeof i:Array.isArray(i)?"array":{}.toString.call(i).slice(8,-1).toLowerCase())||/\d/.test(e)||(t=e,e=void 0),(e=e||new Date)instanceof Date||(e=new Date(e)),isNaN(e))throw TypeError("Invalid date");var i,d=(t=String(l.masks[t]||t||l.masks.default)).slice(0,4);"UTC:"!==d&&"GMT:"!==d||(t=t.slice(4),n=!0,"GMT:"===d&&(r=!0));var u=n?"getUTC":"get",m=e[u+"Date"](),p=e[u+"Day"](),h=e[u+"Month"](),f=e[u+"FullYear"](),g=e[u+"Hours"](),b=e[u+"Minutes"](),y=e[u+"Seconds"](),v=e[u+"Milliseconds"](),x=n?0:e.getTimezoneOffset(),C=function(e){var t=new Date(e.getFullYear(),e.getMonth(),e.getDate());t.setDate(t.getDate()-(t.getDay()+6)%7+3);var n=new Date(t.getFullYear(),0,4);n.setDate(n.getDate()-(n.getDay()+6)%7+3);var r=t.getTimezoneOffset()-n.getTimezoneOffset();t.setHours(t.getHours()-r);var i=(t-n)/6048e5;return 1+Math.floor(i)}(e),k=function(e){var t=e.getDay();return 0===t&&(t=7),t}(e),S={d:m,dd:c(m),ddd:l.i18n.dayNames[p],dddd:l.i18n.dayNames[p+7],m:h+1,mm:c(h+1),mmm:l.i18n.monthNames[h],mmmm:l.i18n.monthNames[h+12],yy:String(f).slice(2),yyyy:f,h:g%12||12,hh:c(g%12||12),H:g,HH:c(g),M:b,MM:c(b),s:y,ss:c(y),l:c(v,3),L:c(Math.round(v/10)),t:g<12?l.i18n.timeNames[0]:l.i18n.timeNames[1],tt:g<12?l.i18n.timeNames[2]:l.i18n.timeNames[3],T:g<12?l.i18n.timeNames[4]:l.i18n.timeNames[5],TT:g<12?l.i18n.timeNames[6]:l.i18n.timeNames[7],Z:r?"GMT":n?"UTC":(String(e).match(a)||[""]).pop().replace(s,""),o:(x>0?"-":"+")+c(100*Math.floor(Math.abs(x)/60)+Math.abs(x)%60,4),S:["th","st","nd","rd"][m%10>3?0:(m%100-m%10!=10)*m%10],W:C,N:k};return t.replace(o,function(e){return e in S?S[e]:e.slice(1,e.length-1)})});function c(e,t){for(e=String(e),t=t||2;e.length<t;)e="0"+e;return e}l.masks={default:"ddd mmm dd yyyy HH:MM:ss",shortDate:"m/d/yy",mediumDate:"mmm d, yyyy",longDate:"mmmm d, yyyy",fullDate:"dddd, mmmm d, yyyy",shortTime:"h:MM TT",mediumTime:"h:MM:ss TT",longTime:"h:MM:ss TT Z",isoDate:"yyyy-mm-dd",isoTime:"HH:MM:ss",isoDateTime:"yyyy-mm-dd'T'HH:MM:sso",isoUtcDateTime:"UTC:yyyy-mm-dd'T'HH:MM:ss'Z'",expiresHeaderFormat:"ddd, dd mmm yyyy HH:MM:ss Z"},l.i18n={dayNames:["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],monthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","January","February","March","April","May","June","July","August","September","October","November","December"],timeNames:["a","p","am","pm","A","P","AM","PM"]},void 0===(r=function(){return l}.call(t,n,t,e))||(e.exports=r)}()},1524:function(e,t,n){e.exports={default:n(1525),__esModule:!0}},1525:function(e,t,n){n(1526);var r=n(60).Object;e.exports=function(e){return r.getOwnPropertyNames(e)}},1526:function(e,t,n){n(477)("getOwnPropertyNames",function(){return n(601).f})},1531:function(e,t,n){"use strict";var r=n(2),i=n(0),o=n(590),a=n(486),s=n(1553),l=n(1057),c=n(1014),d=n(37),u={height:"19px",fontSize:d.h.small,padding:0,maxWidth:"100%",overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"},m=function(e){var t=e.theme.palette;return{brandSummaryCard:[{display:"flex",flexDirection:"row",height:"52px",flex:"1 0 auto",alignItems:"center",border:"solid 1px "+t.neutralLight,padding:"0 12px",selectors:{"&:hover":{border:"solid 1px "+t.themePrimary}}}],iconStyle:[{color:t.themePrimary,fontSize:"20px",width:"20px",height:"20px",margin:"0 13px 1px 0",flexShrink:0}],summaryContainer:[{flex:"1 1 auto",overflow:"hidden",display:"flex",flexDirection:"column"}],summaryFirstLine:[r.a({},u,{fontSize:d.h.medium,color:t.themePrimary,fontWeight:d.i.semibold})],summarySecondLine:u,summaryCardButton:[{marginLeft:"5px",padding:0,width:"82px",height:"28px",flex:"0 0 auto"}],buttonFontWeight:[{fontWeight:d.i.semibold}]}},p=Object(c.a)(),h=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.onContainerClick=function(){},t.onSummaryCardButtonClick=function(e){e.stopPropagation(),t.openUrl()},t.openUrl=function(){var e=t.props.cardItem.actionButtonData;e&&window.open(e.actionUrl)},t}return r.c(t,e),t.prototype.render=function(){var e=this.props,t=e.cardItem,n=e.theme,r=p(m,{theme:n}),o=t.actionButtonData;return i.createElement("div",{className:r.brandSummaryCard,onClick:this.onContainerClick},i.createElement(l.a,{iconName:t.entityIcon,className:r.iconStyle}),i.createElement("div",{className:r.summaryContainer},i.createElement(s.a,{className:r.summaryFirstLine,title:t.brandsSummaryFirstLine},t.brandsSummaryFirstLine),i.createElement(s.a,{className:r.summarySecondLine,title:t.brandsSummarySecondLine},t.brandsSummarySecondLine)),o&&i.createElement(a.a,{id:"summaryCardButton",className:r.summaryCardButton,text:o.actionButtonText,onClick:this.onSummaryCardButtonClick}))},t}(i.Component),f=function(){return{brandSummaryPanel:[{display:"flex",flexDirection:"column"}],brandSummaryItem:[{paddingBottom:"8px"}]}},g=Object(c.a)(),b=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r.c(t,e),t.prototype.render=function(){var e=[],t=this.props,n=t.txpObject,r=t.txpStrings,a=t.txpImages,s=t.numberOfCardsToDisplay,l=t.theme,c=g(f),d=Object(o.c)(n,null,!1,r,a,o.a.Primary,!0),u=d?d.cardItems:null;if(u){for(var m=u.length>s?s:u.length,p=0;p<m;p++)e.push(i.createElement("div",{className:c.brandSummaryItem},i.createElement(h,{key:p,cardItem:u[p],theme:l})));return i.createElement("div",{className:c.brandSummaryPanel},e)}},t}(i.Component);n.d(t,"a",function(){return b})},1548:function(e,t,n){"use strict";var r=n(1015),i=n(2),o=n(0),a=n(1553),s=n(1268),l=n(1057),c=n(1014),d=n(1019),u=n(1018),m=n(1e3),p=Object(c.a)(),h=function(e){function t(t){var n=e.call(this,t)||this;return n._inputElement=Object(d.a)(),n._onRenderField=function(e){var t=e.onRenderLabel,r=void 0===t?n._onRenderLabel:t,a=e.id,c=e.imageSrc,d=e.imageAlt,u=e.selectedImageSrc,m=e.iconProps,p=e.imageSize?e.imageSize:{width:32,height:32};return o.createElement("label",{htmlFor:a,className:n._classNames.field},c&&o.createElement("div",{className:n._classNames.innerField,style:{height:p.height,width:p.width}},o.createElement("div",{className:n._classNames.imageWrapper},o.createElement(s.a,{src:c,alt:d||"",width:p.width,height:p.height})),o.createElement("div",{className:n._classNames.selectedImageWrapper},o.createElement(s.a,{src:u,alt:d||"",width:p.width,height:p.height}))),m?o.createElement("div",{className:n._classNames.innerField},o.createElement("div",{className:n._classNames.iconWrapper},o.createElement(l.a,i.a({},m)))):null,c||m?o.createElement("div",{className:n._classNames.labelWrapper,style:{maxWidth:2*p.width}},r(e)):r(e))},n._onRenderLabel=function(e){return o.createElement("span",{id:e.labelId,className:"ms-ChoiceFieldLabel"},e.text)},n}return i.c(t,e),t.prototype.render=function(){var e=this.props,t=e.focused,n=e.required,r=e.theme,a=e.iconProps,s=e.imageSrc,l=e.imageSize,c=void 0===l?{width:32,height:32}:l,d=e.disabled,m=e.checked,h=e.id,f=e.styles,g=e.name,b=e.onRenderField,y=void 0===b?this._onRenderField:b;return this._classNames=p(f,{theme:r,hasIcon:!!a,hasImage:!!s,checked:m,disabled:d,imageIsLarge:!!s&&(c.width>71||c.height>71),focused:t}),o.createElement("div",{className:this._classNames.root},o.createElement("div",{className:this._classNames.choiceFieldWrapper},o.createElement("input",i.a({ref:this._inputElement,id:h,className:this._classNames.input,type:"radio",name:g,disabled:d,checked:m,required:n,onChange:this._onChange.bind(this,this.props),onFocus:this._onFocus.bind(this,this.props),onBlur:this._onBlur.bind(this,this.props)},Object(u.f)(this.props,u.i))),y(this.props,this._onRenderField)))},t.prototype._onChange=function(e,t){var n=e.onChange;n&&n(t,e)},t.prototype._onBlur=function(e,t){var n=e.onBlur;n&&n(t,e)},t.prototype._onFocus=function(e,t){var n=e.onFocus;n&&n(t,e)},t}(m.a),f=n(37),g=n(837),b={root:"ms-ChoiceField",choiceFieldWrapper:"ms-ChoiceField-wrapper",input:"ms-ChoiceField-input",field:"ms-ChoiceField-field",innerField:"ms-ChoiceField-innerField",imageWrapper:"ms-ChoiceField-imageWrapper",iconWrapper:"ms-ChoiceField-iconWrapper",labelWrapper:"ms-ChoiceField-labelWrapper"},y="200ms";function v(e,t,n){return[t,{paddingBottom:2,transitionProperty:"opacity",transitionDuration:y,transitionTimingFunction:"ease",selectors:{".ms-Image":{display:"inline-block",borderStyle:"none"}}},(n?!e:e)&&["is-hidden",{position:"absolute",left:0,top:0,width:"100%",height:"100%",overflow:"hidden",opacity:0}]]}var x=Object(r.a)(h,function(e){var t,n,r,i,o,a=e.theme,s=e.hasIcon,l=e.hasImage,c=e.checked,d=e.disabled,u=e.imageIsLarge,m=e.focused,p=a.palette,h=a.semanticColors,x=Object(f.M)(b,a),C={selectors:{".ms-ChoiceFieldLabel":{color:h.bodyTextChecked},":before":{borderColor:c?h.inputBackgroundCheckedHovered:h.inputBorderHovered}}},k={borderColor:c?p.themeDark:p.neutralTertiaryAlt,selectors:{":before":{opacity:1,borderColor:c?p.themeDark:h.inputBorderHovered}}},S=[{content:'""',display:"inline-block",backgroundColor:h.bodyBackground,borderWidth:1,borderStyle:"solid",borderColor:h.smallInputBorder,width:20,height:20,fontWeight:"normal",position:"absolute",top:0,left:0,boxSizing:"border-box",transitionProperty:"border-color",transitionDuration:y,transitionTimingFunction:"cubic-bezier(.4, 0, .23, 1)",borderRadius:"50%"},d&&{backgroundColor:c?h.bodyBackground:h.disabledText,borderColor:h.disabledText,selectors:(t={},t[f.j]={color:"GrayText"},t)},c&&{borderWidth:1,borderStyle:"solid",borderColor:h.inputBackgroundChecked,selectors:(n={},n[f.j]={borderColor:"Highlight"},n)},(s||l)&&{top:3,right:3,left:"auto",opacity:!d&&c?1:0}],T=[{content:'""',width:0,height:0,borderRadius:"50%",position:"absolute",left:10,right:0,transitionProperty:"border-width",transitionDuration:y,transitionTimingFunction:"cubic-bezier(.4, 0, .23, 1)",boxSizing:"border-box"},c&&{borderWidth:5,borderStyle:"solid",borderColor:h.inputBackgroundChecked,left:5,top:5,width:10,height:10,selectors:(r={},r[f.j]={borderColor:"Highlight"},r)},c&&(s||l)&&{top:8,right:8,left:"auto"}];return{root:[x.root,{display:"flex",alignItems:"center",boxSizing:"border-box",color:h.bodyText,fontSize:f.h.medium,fontWeight:f.i.regular,minHeight:26,border:"none",position:"relative",marginTop:8,selectors:{".ms-ChoiceFieldLabel":{fontSize:f.h.medium,display:"inline-block"}}},!s&&!l&&{selectors:{".ms-ChoiceFieldLabel":{paddingLeft:"26px"}}},l&&"ms-ChoiceField--image",s&&"ms-ChoiceField--icon",(s||l)&&{display:"inline-flex",fontSize:0,margin:"0 4px 4px 0",paddingLeft:0,backgroundColor:p.neutralLighter,height:"100%"}],choiceFieldWrapper:[x.choiceFieldWrapper,m&&function(e,t){return["is-inFocus",{selectors:(n={},n["."+g.a+" &"]={position:"relative",outline:"transparent",selectors:{"::-moz-focus-inner":{border:0},":after":{content:'""',top:-2,right:-2,bottom:-2,left:-2,pointerEvents:"none",border:"1px solid "+(t?e.neutralSecondary:e.neutralPrimary),position:"absolute",selectors:(r={},r[f.j]={borderColor:"WindowText",borderWidth:t?1:2},r)}}},n)}];var n,r}(p,s||l)],input:[x.input,{position:"absolute",opacity:0,top:8},(s||l)&&{top:0,right:0,opacity:0,width:"100%",height:"100%",margin:0}],field:[x.field,{display:"inline-block",cursor:"pointer",marginTop:0,position:"relative",verticalAlign:"top",userSelect:"none",minHeight:20,selectors:{":hover":!d&&C,":focus":!d&&C,":before":S,":after":T}},s&&"ms-ChoiceField--icon",l&&"ms-ChoiceField-field--image",(s||l)&&{boxSizing:"content-box",cursor:"pointer",paddingTop:22,margin:0,textAlign:"center",transitionProperty:"all",transitionDuration:y,transitionTimingFunction:"ease",border:"2px solid transparent",justifyContent:"center",alignItems:"center",display:"flex",flexDirection:"column"},c&&{borderColor:p.themePrimary},(s||l)&&!d&&{selectors:{":hover":k,":focus":k}},d&&{cursor:"default",selectors:(i={".ms-ChoiceFieldLabel":{color:h.disabledBodyText}},i[f.j]={color:"GrayText"},i)}],innerField:[x.innerField,(s||l)&&{position:"relative",display:"inline-block",paddingLeft:30,paddingRight:30},(s||l)&&u&&{paddingLeft:24,paddingRight:24},(s||l)&&d&&{opacity:.25,selectors:(o={},o[f.j]={color:"GrayText",opacity:1},o)}],imageWrapper:v(!1,x.imageWrapper,c),selectedImageWrapper:v(!0,x.imageWrapper,c),iconWrapper:[x.iconWrapper,{fontSize:32,lineHeight:32,height:32}],labelWrapper:[x.labelWrapper,(s||l)&&{display:"block",position:"relative",margin:"4px 8px",height:30,lineHeight:15,overflow:"hidden",whiteSpace:"pre-wrap",textOverflow:"ellipsis",fontSize:f.h.medium,fontWeight:f.i.regular}]}},void 0,{scope:"ChoiceGroupOption"}),C=n(1020),k=n(498),S=Object(c.a)(),T=function(e){function t(t){var n=e.call(this,t)||this;return n._inputElement=Object(d.a)(),n.focusedVars={},n.changedVars={},n._onFocus=function(e){return n.focusedVars[e]?n.focusedVars[e]:n.focusedVars[e]=function(t,r){n.setState({keyFocused:e,keyChecked:n.state.keyChecked})}},n._onBlur=function(e,t){n.setState({keyFocused:void 0,keyChecked:n.state.keyChecked})},n._onChange=function(e){return n.changedVars[e]?n.changedVars[e]:n.changedVars[e]=function(t,r){var i=n.props,o=i.onChanged,a=i.onChange,s=i.selectedKey,l=i.options,c=void 0===l?[]:l;void 0===s&&n.setState({keyChecked:e});var d=Object(C.d)(c,function(t){return t.key===e});a?a(t,d):o&&o(d)}},n._warnDeprecations({onChanged:"onChange"}),n._warnMutuallyExclusive({selectedKey:"defaultSelectedKey"}),n.state={keyChecked:void 0===t.defaultSelectedKey?n._getKeyChecked(t):t.defaultSelectedKey,keyFocused:void 0},n._id=Object(k.c)("ChoiceGroup"),n._labelId=Object(k.c)("ChoiceGroupLabel"),n}return i.c(t,e),t.prototype.componentWillReceiveProps=function(e){var t=this._getKeyChecked(e);t!==this._getKeyChecked(this.props)&&this.setState({keyChecked:t})},t.prototype.render=function(){var e=this,t=this.props,n=t.className,r=t.theme,s=t.styles,l=t.options,c=t.label,d=t.required,u=t.disabled,m=t.name,p=this.state,h=p.keyChecked,f=p.keyFocused,g=S(s,{theme:r,className:n,optionsContainIconOrImage:l.some(function(e){return Boolean(e.iconProps||e.imageSrc)})}),b=this.props.ariaLabelledBy?this.props.ariaLabelledBy:c?this._id+"-label":this.props["aria-labelledby"],y=u||void 0===l?void 0:Object(C.d)(l,function(e){return!e.disabled}),v=void 0===h&&y?y.key:void 0;return o.createElement("div",{role:"application",className:g.applicationRole},o.createElement("div",i.a({className:g.root,role:"radiogroup"},b&&{"aria-labelledby":b}),c&&o.createElement(a.a,{className:g.label,required:d,id:this._id+"-label"},c),o.createElement("div",{className:g.flexContainer},l.map(function(t){var n=i.a({},t,{focused:t.key===f,checked:t.key===h,"data-is-focusable":t.key===h||t.key===v,disabled:t.disabled||u,id:e._id+"-"+t.key,labelId:e._labelId+"-"+t.key,name:m||e._id,required:d});return o.createElement(x,i.a({key:t.key,onBlur:e._onBlur,onFocus:e._onFocus(t.key),onChange:e._onChange(t.key)},n))}))))},t.prototype.focus=function(){var e=this.props.options;if(e)for(var t=0,n=e;t<n.length;t++){var r=n[t],i=document.getElementById(this._id+"-"+r.key);if(i&&"true"===i.getAttribute("data-is-focusable"))return void i.focus()}this._inputElement.current&&this._inputElement.current.focus()},t.prototype._getKeyChecked=function(e){if(void 0!==e.selectedKey)return e.selectedKey;var t=e.options,n=(void 0===t?[]:t).filter(function(e){return e.checked});return 0===n.length?void 0:n[0].key},t.defaultProps={options:[]},t}(m.a),N={root:"ms-ChoiceFieldGroup",flexContainer:"ms-ChoiceFieldGroup-flexContainer"};n.d(t,"a",function(){return D});var D=Object(r.a)(T,function(e){var t=e.className,n=e.optionsContainIconOrImage,r=e.theme,i=Object(f.M)(N,r);return{applicationRole:t,root:[i.root,r.fonts.medium,{display:"block"}],label:t,flexContainer:[i.flexContainer,n&&{display:"flex",flexDirection:"row",flexWrap:"wrap"}]}},void 0,{scope:"ChoiceGroup"})},45:function(e,t,n){"use strict";n.r(t);var r=n(37);n.d(t,"AnimationClassNames",function(){return r.a}),n.d(t,"FontClassNames",function(){return r.g}),n.d(t,"ColorClassNames",function(){return r.d}),n.d(t,"AnimationStyles",function(){return r.b}),n.d(t,"AnimationVariables",function(){return r.c}),n.d(t,"DefaultPalette",function(){return r.f}),n.d(t,"DefaultFontStyles",function(){return r.e}),n.d(t,"registerDefaultFontFaces",function(){return r.Y}),n.d(t,"FontSizes",function(){return r.h}),n.d(t,"FontWeights",function(){return r.i}),n.d(t,"IconFontSizes",function(){return r.m}),n.d(t,"createFontStyles",function(){return r.G}),n.d(t,"getFocusStyle",function(){return r.L}),n.d(t,"focusClear",function(){return r.I}),n.d(t,"hiddenContentStyle",function(){return r.R}),n.d(t,"PulsingBeaconAnimationStyles",function(){return r.o}),n.d(t,"getGlobalClassNames",function(){return r.M}),n.d(t,"ThemeSettingName",function(){return r.C}),n.d(t,"getTheme",function(){return r.Q}),n.d(t,"loadTheme",function(){return r.T}),n.d(t,"createTheme",function(){return r.H}),n.d(t,"registerOnThemeChangeCallback",function(){return r.bb}),n.d(t,"removeOnThemeChangeCallback",function(){return r.cb}),n.d(t,"buildClassMap",function(){return r.E}),n.d(t,"getIcon",function(){return r.N}),n.d(t,"registerIcons",function(){return r.ab}),n.d(t,"registerIconAlias",function(){return r.Z}),n.d(t,"unregisterIcons",function(){return r.eb}),n.d(t,"setIconOptions",function(){return r.db}),n.d(t,"getIconClassName",function(){return r.O}),n.d(t,"InjectionMode",function(){return r.n}),n.d(t,"Stylesheet",function(){return r.B}),n.d(t,"concatStyleSets",function(){return r.F}),n.d(t,"fontFace",function(){return r.J}),n.d(t,"keyframes",function(){return r.S}),n.d(t,"mergeStyleSets",function(){return r.U}),n.d(t,"mergeStyles",function(){return r.V}),n.d(t,"HighContrastSelector",function(){return r.j}),n.d(t,"HighContrastSelectorWhite",function(){return r.l}),n.d(t,"HighContrastSelectorBlack",function(){return r.k}),n.d(t,"ScreenWidthMinSmall",function(){return r.w}),n.d(t,"ScreenWidthMinMedium",function(){return r.v}),n.d(t,"ScreenWidthMinLarge",function(){return r.u}),n.d(t,"ScreenWidthMinXLarge",function(){return r.y}),n.d(t,"ScreenWidthMinXXLarge",function(){return r.z}),n.d(t,"ScreenWidthMinXXXLarge",function(){return r.A}),n.d(t,"ScreenWidthMaxSmall",function(){return r.r}),n.d(t,"ScreenWidthMaxMedium",function(){return r.q}),n.d(t,"ScreenWidthMaxLarge",function(){return r.p}),n.d(t,"ScreenWidthMaxXLarge",function(){return r.s}),n.d(t,"ScreenWidthMaxXXLarge",function(){return r.t}),n.d(t,"ScreenWidthMinUhfMobile",function(){return r.x}),n.d(t,"getScreenSelector",function(){return r.P}),n.d(t,"normalize",function(){return r.X}),n.d(t,"noWrap",function(){return r.W}),n.d(t,"getFadedOverflowStyle",function(){return r.K}),n.d(t,"ZIndexes",function(){return r.D})},488:function(e,t,n){"use strict";var r=n(1015),i=n(683),o=n(37),a={root:"ms-Dialog"};n.d(t,"a",function(){return s});var s=Object(r.a)(i.a,function(e){var t,n=e.className,r=e.containerClassName,i=e.dialogDefaultMinWidth,s=void 0===i?"288px":i,l=e.dialogDefaultMaxWidth,c=void 0===l?"340px":l,d=e.hidden,u=e.theme;return{root:[Object(o.M)(a,u).root,n],main:[{width:s,selectors:(t={},t["@media (min-width: "+o.v+"px)"]={width:"auto",maxWidth:c,minWidth:s},t)},!d&&{display:"flex"},r]}},void 0,{scope:"Dialog"})},512:function(e,t,n){"use strict";var r=n(147),i=n(68),o=function(){return i.a.Date.now()},a=n(515),s="Expected a function",l=Math.max,c=Math.min;t.a=function(e,t,n){var i,d,u,m,p,h,f=0,g=!1,b=!1,y=!0;if("function"!=typeof e)throw new TypeError(s);function v(t){var n=i,r=d;return i=d=void 0,f=t,m=e.apply(r,n)}function x(e){var n=e-h;return void 0===h||n>=t||n<0||b&&e-f>=u}function C(){var e=o();if(x(e))return k(e);p=setTimeout(C,function(e){var n=t-(e-h);return b?c(n,u-(e-f)):n}(e))}function k(e){return p=void 0,y&&i?v(e):(i=d=void 0,m)}function S(){var e=o(),n=x(e);if(i=arguments,d=this,h=e,n){if(void 0===p)return function(e){return f=e,p=setTimeout(C,t),g?v(e):m}(h);if(b)return p=setTimeout(C,t),v(h)}return void 0===p&&(p=setTimeout(C,t)),m}return t=Object(a.a)(t)||0,Object(r.a)(n)&&(g=!!n.leading,u=(b="maxWait"in n)?l(Object(a.a)(n.maxWait)||0,t):u,y="trailing"in n?!!n.trailing:y),S.cancel=function(){void 0!==p&&clearTimeout(p),f=0,i=h=d=p=void 0},S.flush=function(){return void 0===p?m:k(o())},S}},637:function(e,t){e.exports=function(e){return"string"!=typeof e?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),/["'() \t\n]/.test(e)?'"'+e.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':e)}},683:function(e,t,n){"use strict";n.d(t,"a",function(){return f});var r=n(2),i=n(0),o=n(1014),a=n(498),s=n(1e3),l=n(85),c=n(826),d=n(394),u=n(704),m=Object(o.a)(),p={isDarkOverlay:!1,isBlocking:!1,className:"",containerClassName:""},h={type:l.a.normal,className:"",topButtonsProps:[]},f=function(e){function t(t){var n=e.call(this,t)||this;return n._getSubTextId=function(){var e=n.props,t=e.ariaDescribedById,r=e.modalProps,i=e.dialogContentProps,o=e.subText,a=t||r&&r.subtitleAriaId;return a||(a=(o||i&&i.subText)&&n._defaultSubTextId),a},n._getTitleTextId=function(){var e=n.props,t=e.ariaLabelledById,r=e.modalProps,i=e.dialogContentProps,o=e.title,a=t||r&&r.titleAriaId;return a||(a=(o||i&&i.title)&&n._defaultTitleTextId),a},n._id=Object(a.c)("Dialog"),n._defaultTitleTextId=n._id+"-title",n._defaultSubTextId=n._id+"-subText",n._warnDeprecations({isOpen:"hidden",type:"dialogContentProps.type",subText:"dialogContentProps.subText",contentClassName:"dialogContentProps.className",topButtonsProps:"dialogContentProps.topButtonsProps",className:"modalProps.className",isDarkOverlay:"modalProps.isDarkOverlay",isBlocking:"modalProps.isBlocking",containerClassName:"modalProps.containerClassName",onDismissed:"modalProps.onDismissed",onLayerDidMount:"modalProps.onLayerDidMount",ariaDescribedById:"modalProps.subtitleAriaId",ariaLabelledById:"modalProps.titleAriaId"}),n}return r.c(t,e),t.prototype.render=function(){var e=this.props,t=e.className,n=e.containerClassName,o=e.contentClassName,a=e.elementToFocusOnDismiss,s=e.firstFocusableSelector,l=e.forceFocusInsideTrap,d=e.styles,f=e.hidden,g=e.ignoreExternalFocusing,b=e.isBlocking,y=e.isClickableOutsideFocusTrap,v=e.isDarkOverlay,x=e.isOpen,C=e.onDismiss,k=e.onDismissed,S=e.onLayerDidMount,T=e.responsiveMode,N=e.subText,D=e.theme,_=e.title,w=e.topButtonsProps,F=e.type,M=e.minWidth,B=e.maxWidth,O=r.a({},p,this.props.modalProps),W=r.a({},h,this.props.dialogContentProps),I=m(d,{theme:D,className:t||O.className,containerClassName:n||O.containerClassName,hidden:f,dialogDefaultMinWidth:M,dialogDefaultMaxWidth:B});return i.createElement(c.a,r.a({elementToFocusOnDismiss:a,firstFocusableSelector:s,forceFocusInsideTrap:l,ignoreExternalFocusing:g,isClickableOutsideFocusTrap:y,onDismissed:k,onLayerDidMount:S,responsiveMode:T},O,{isDarkOverlay:void 0!==v?v:O.isDarkOverlay,isBlocking:void 0!==b?b:O.isBlocking,isOpen:void 0!==x?x:!f,className:I.root,containerClassName:I.main,onDismiss:C||O.onDismiss,subtitleAriaId:this._getSubTextId(),titleAriaId:this._getTitleTextId()}),i.createElement(u.a,r.a({titleId:this._defaultTitleTextId,subTextId:this._defaultSubTextId,title:_,subText:N,showCloseButton:void 0!==b?!b:!O.isBlocking,topButtonsProps:w||W.topButtonsProps,type:void 0!==F?F:W.type,onDismiss:C||W.onDismiss,className:o||W.className},W),this.props.children))},t.defaultProps={hidden:!0},t=r.b([d.b],t)}(s.a)},684:function(e,t,n){"use strict";n.d(t,"a",function(){return m});var r=n(2),i=n(0),o=n(1014),a=n(1e3),s=n(85),l=n(1001),c=n(703),d=n(394),u=Object(o.a)(),m=function(e){function t(t){return e.call(this,t)||this}return r.c(t,e),t.prototype.render=function(){var e,t=this.props,n=t.showCloseButton,o=t.className,a=t.closeButtonAriaLabel,c=t.onDismiss,d=t.subTextId,m=t.subText,p=t.titleId,h=t.title,f=t.type,g=t.styles,b=t.theme,y=u(g,{theme:b,className:o,isLargeHeader:f===s.a.largeHeader,isClose:f===s.a.close}),v=this._groupChildren();return m&&(e=i.createElement("p",{className:y.subText,id:d},m)),i.createElement("div",{className:y.content},i.createElement("div",{className:y.header},i.createElement("p",{className:y.title,id:p,role:"heading","aria-level":2},h),i.createElement("div",{className:y.topButton},this.props.topButtonsProps.map(function(e,t){return i.createElement(l.a,r.a({key:e.uniqueId||t},e))}),(f===s.a.close||n&&f!==s.a.largeHeader)&&i.createElement(l.a,{className:y.button,iconProps:{iconName:"Cancel"},ariaLabel:a,onClick:c}))),i.createElement("div",{className:y.inner},i.createElement("div",{className:y.innerContent},e,v.contents),v.footers))},t.prototype._groupChildren=function(){var e={footers:[],contents:[]};return i.Children.map(this.props.children,function(t){"object"==typeof t&&null!==t&&t.type===c.a?e.footers.push(t):e.contents.push(t)}),e},t.defaultProps={showCloseButton:!1,className:"",topButtonsProps:[],closeButtonAriaLabel:"Close"},t=r.b([d.b],t)}(a.a)},685:function(e,t,n){"use strict";n.d(t,"a",function(){return l});var r=n(2),i=n(0),o=n(1014),a=n(1e3),s=Object(o.a)(),l=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r.c(t,e),t.prototype.render=function(){var e=this.props,t=e.className,n=e.styles,r=e.theme;return this._classNames=s(n,{theme:r,className:t}),i.createElement("div",{className:this._classNames.actions},i.createElement("div",{className:this._classNames.actionsRight},this._renderChildrenAsActions()))},t.prototype._renderChildrenAsActions=function(){var e=this;return i.Children.map(this.props.children,function(t){return t?i.createElement("span",{className:e._classNames.action},t):null})},t}(a.a)},697:function(e,t,n){e.exports={default:n(906),__esModule:!0}},702:function(e,t,n){"use strict";n.r(t);var r=n(488),i=n(683),o=n(704),a=n(684),s=n(703),l=n(685),c=n(85);n.d(t,"Dialog",function(){return r.a}),n.d(t,"DialogBase",function(){return i.a}),n.d(t,"DialogContent",function(){return o.a}),n.d(t,"DialogContentBase",function(){return a.a}),n.d(t,"DialogFooter",function(){return s.a}),n.d(t,"DialogFooterBase",function(){return l.a}),n.d(t,"DialogType",function(){return c.a}),n.d(t,"default",function(){return r.a})},703:function(e,t,n){"use strict";var r=n(1015),i=n(685),o=n(37),a={actions:"ms-Dialog-actions",action:"ms-Dialog-action",actionsRight:"ms-Dialog-actionsRight"};n.d(t,"a",function(){return s});var s=Object(r.a)(i.a,function(e){var t=e.className,n=e.theme,r=Object(o.M)(a,n);return{actions:[r.actions,{position:"relative",width:"100%",minHeight:"24px",lineHeight:"24px",margin:"20px 0 0",fontSize:"0",selectors:{".ms-Button":{lineHeight:"normal"}}},t],action:[r.action],actionsRight:[r.actionsRight,{textAlign:"right",marginRight:"-4px",fontSize:"0",selectors:{$action:{margin:"0 4px"}}}]}},void 0,{scope:"DialogFooter"})},704:function(e,t,n){"use strict";var r=n(1015),i=n(684),o=n(37),a={contentLgHeader:"ms-Dialog-lgHeader",close:"ms-Dialog--close",subText:"ms-Dialog-subText",header:"ms-Dialog-header",headerLg:"ms-Dialog--lgHeader",button:"ms-Dialog-button ms-Dialog-button--close",inner:"ms-Dialog-inner",content:"ms-Dialog-content",title:"ms-Dialog-title"};n.d(t,"a",function(){return s});var s=Object(r.a)(i.a,function(e){var t=e.className,n=e.theme,r=e.isLargeHeader,i=e.isClose,s=e.hidden,l=e.isMultiline,c=n.palette,d=n.fonts,u=Object(o.M)(a,n);return{content:[r&&u.contentLgHeader,i&&u.close,{flexGrow:1,overflowY:"auto"},t],subText:[u.subText,r?d.medium:d.small,{margin:"0 0 20px 0",paddingTop:"8px",color:c.neutralPrimary,lineHeight:"1.5",wordWrap:"break-word",fontWeight:o.i.semilight}],header:[u.header,{position:"relative",width:"100%",boxSizing:"border-box"},r&&[u.headerLg,{backgroundColor:c.themePrimary}],i&&u.close],button:[u.button,s&&{selectors:{".ms-Icon.ms-Icon--Cancel":{color:c.neutralSecondary,fontSize:"16px"}}}],inner:[u.inner,{padding:l?"0 20px 20px":"0 28px 20px"}],innerContent:[u.content,{position:"relative",width:"100%",selectors:{".ms-Button.ms-Button--compount":{marginBottom:"20px",selectors:{"&:last-child":{marginBottom:"0"}}}}},t],title:[u.title,{color:c.neutralPrimary,margin:"0",padding:"20px 36px 20px 28px"},d.xLarge,r&&[{color:c.white,marginBottom:"8px",padding:"26px 28px 28px"},d.xxLarge],l&&d.xxLarge],topButton:[{display:"flex",flexDirection:"row",flexWrap:"nowrap",position:"absolute",top:"0",right:"0",padding:"12px 12px 0 0",selectors:{"> *":{flex:"0 0 auto"}}}]}},void 0,{scope:"DialogContent"})},728:function(e,t,n){"use strict";n.d(t,"a",function(){return u});var r=n(2),i=n(0),o=n(92),a=n(1014),s=n(1018),l=n(1036),c=n(1e3),d=Object(a.a)(),u=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r.c(t,e),t.prototype.render=function(){var e=this.props,t=e.type,n=e.size,a=e.ariaLabel,c=e.ariaLive,u=e.styles,m=e.label,p=e.theme,h=e.className,f=a||m,g=Object(s.f)(this.props,s.e,["size"]),b=n;void 0===b&&void 0!==t&&(b=t===o.b.large?o.a.large:o.a.medium);var y=d(u,{theme:p,size:b,className:h});return i.createElement("div",r.a({},g,{className:y.root}),i.createElement("div",{className:y.circle}),m&&i.createElement("div",{className:y.label},m),f&&i.createElement("div",{role:"status","aria-live":c},i.createElement(l.a,null,i.createElement("div",{className:y.screenReaderText},f))))},t.defaultProps={size:o.a.medium,ariaLive:"polite"},t}(c.a)},829:function(e,t,n){"use strict";t.__esModule=!0;var r=o(n(22)),i=o(n(951));function o(e){return e&&e.__esModule?e:{default:e}}t.default=function e(t,n,o){null===t&&(t=Function.prototype);var a=(0,i.default)(t,n);if(void 0===a){var s=(0,r.default)(t);return null===s?void 0:e(s,n,o)}if("value"in a)return a.value;var l=a.get;return void 0!==l?l.call(o):void 0}},85:function(e,t,n){"use strict";var r;n.d(t,"a",function(){return r}),function(e){e[e.normal=0]="normal",e[e.largeHeader=1]="largeHeader",e[e.close=2]="close"}(r||(r={}))},906:function(e,t,n){n(599),e.exports=n(60).Object.getOwnPropertySymbols},92:function(e,t,n){"use strict";var r,i;n.d(t,"a",function(){return r}),n.d(t,"b",function(){return i}),function(e){e[e.xSmall=0]="xSmall",e[e.small=1]="small",e[e.medium=2]="medium",e[e.large=3]="large"}(r||(r={})),function(e){e[e.normal=0]="normal",e[e.large=1]="large"}(i||(i={}))},951:function(e,t,n){e.exports={default:n(952),__esModule:!0}},952:function(e,t,n){n(953);var r=n(60).Object;e.exports=function(e,t){return r.getOwnPropertyDescriptor(e,t)}},953:function(e,t,n){var r=n(232),i=n(494).f;n(477)("getOwnPropertyDescriptor",function(){return function(e,t){return i(r(e),t)}})}}]);