/***************************************
 * @preserve
 * Copyright (c) 2019 Verint Systems, Inc. All rights reserved.
 * ForeSee Web SDK: Gateway Script
 * Version: 19.11.1
 * Built: October 01, 2019, 13:20:02 CDT
 ***************************************/
!function(){var e=window,t=e.document,n=!!e.sessionStorage,r=t.getElementsByTagName("head");r=r&&r.length>0?r[0]:t.body;try{n&&(sessionStorage.setItem("_",""),sessionStorage.removeItem("_"))}catch(re){n=!1}var globalConfig={},productConfig={};function o(e,t){productConfig[e]=JSON.parse(JSON.stringify(t))}function i(e){globalConfig=JSON.parse(JSON.stringify(e))}

globalConfig = {"codeVer":"19.11.1","products":{"trigger":true,"feedback":false,"record":false},"storage":"COOKIE","brainUrl":"https://brain.foresee.com","recUrl":"https://record.foresee.com/rec/","surveyUrl":"https://survey.foreseeresults.com/survey/display","analyticsUrl":"https://analytics.foresee.com/ingest/events","staticUrl":"https://static.foresee.com","alwaysOnLatest":0,"cookieSecure":false,"deferredLoading":false,"cookieDomain":[],"adobeRsid":"","modernSurveyUrl":"https://cxsurvey.foresee.com/sv","customerId":"qsfGnnCKmFkwenjoLgB4Qg==","surveyAsyncCurl":"s.foresee.com","mobileOnExitUrl":"s.foresee.com","modernRecord":false,"replayId":"sec-gov","vendors":{"fs":{"codeVer":"19.11.1","products":{"trigger":true,"feedback":false,"record":false},"storage":"COOKIE","brainUrl":"https://brain.foresee.com","recUrl":"https://record.foresee.com/rec/","surveyUrl":"https://survey.foreseeresults.com/survey/display","analyticsUrl":"https://analytics.foresee.com/ingest/events","staticUrl":"https://static.foresee.com","alwaysOnLatest":0,"cookieSecure":false,"deferredLoading":false,"cookieDomain":[],"adobeRsid":"","modernSurveyUrl":"https://cxsurvey.foresee.com/sv","customerId":"qsfGnnCKmFkwenjoLgB4Qg==","surveyAsyncCurl":"s.foresee.com","mobileOnExitUrl":"s.foresee.com","modernRecord":false,"replayId":"sec-gov","siteKey":"sec-gov"}},"siteKey":"sec-gov"};

productConfig = {fs:{}, };
productConfig.fs.trigger = productConfig.trigger = {"config":{"triggerDelay":0,"inviteDelay":0,"pageLoadUrlChangeBlackout":0,"repeatDays":{"decline":90,"accept":90},"pageViewsResetTimeout":86400000,"cppsResetTimeout":86400000,"surveyDefResetTimeout":86400000,"trackerConvertsAfter":10000,"trackerHeartbeatTimeout":10000,"trackerHeartbeatLongTimeout":12000,"onExitMobileHeartbeatInterval":60000,"reinviteDelayAfterInviteAbandon":7776000000,"centerTrackerPopup":false,"workInIframes":"dontRunOtherIframes","abSurveyType":{"defs":[],"shouldTest":false},"onlyModernSurvey":false,"ignoreNavigationEvents":false,"publicApiName":"FSR","globalExclude":{"urls":[],"referrers":[],"userAgents":[],"browsers":[],"cookies":[],"variables":[]},"inviteExclude":{"urls":["*/nb/*","*/edgar/edgar_rfp*","*sec.gov/edgarfeedback*"],"referrers":[],"userAgents":[],"browsers":[],"cookies":[],"variables":[{"name":"foresee_noinvite","value":"true"}]},"browser_cutoff":{"Edge":1,"IE":11,"Safari":5.2,"Firefox":30,"Chrome":30,"Opera":1000},"platform_cutoff":{"Android":5,"Winphone":9999,"iPod":9,"iPhone":9,"iPad":9},"device_blacklist":["HTC_Rezound","blackberry"],"replay_pools":[{"path":".","sp":100}],"replay_repools":[],"cpps":{}},"surveydefs":[{"name":"phone","site":"sec","uid":"8ab0e112-5657-444b-b29e-1eedc7770d0b","language":{"locale":"en"},"cxRecord":false,"mouseoff":{"mode":"off","minSiteTime":6000,"minPageTime":3000,"sp":{"reg":-1,"outreplaypool":0},"lf":1},"criteria":{"sp":{"reg":40,"outreplaypool":0},"lf":2,"supportsSmartPhones":true,"supportsTablets":false,"supportsDesktop":false},"include":{"urls":["*sec.gov*","*sec.gov/mobile*","*secsearch.sec.gov*"],"referrers":[],"userAgents":[],"browsers":[],"cookies":[],"variables":[]},"inviteExclude":{"urls":[],"referrers":[],"userAgents":[],"browsers":[],"cookies":[],"variables":[]},"pattern":"url","selectMode":"default","links":{"cancel":[],"survey":[],"tracker":[]},"display":{"desktop":[{"displayname":"redesign","template":"desktopredesign","inviteLogo":"","inviteBanner":"","trackerLogo":"","trackerBanner":"","siteLogoTitleText":"Logo Image","siteLogoAltText":"Logo Image","inviteType":"TRACKER","inviteDelay":null,"closeClickOnBackdrop":true,"removeSurveyAlerts":false,"shortSurvey":{"idleViewsBeforeStop":null,"idleTimeBeforeAbandon":null,"paginationType":"default","midOverride":null,"abTestPercent":100,"style":{"zIndex":99999999,"position":"bottomright"}},"dialog":{"headline":"We'd welcome your feedback!","blurb":"Would you take a brief survey so we can improve your experience on our site?","closeInviteButtonText":"Close dialog","declineButton":"No thanks","acceptButton":"Yes, I'll give feedback","acceptButtonTitleText":"Yes, I'll give feedback (Opens in a new window)","error":"Error","warnLaunch":"this will launch a new window","allowclose":true,"surveyavailable":"Your survey is now available","poweredbyLink":"http://www.foresee.com","poweredbyText":"Powered by ForeSee","privacyPolicyText":"Privacy Policy","privacyPolicyLink":"//www.foresee.com/privacy-policy/","trackerTitle":"ForeSee - Survey Window","trackerClickToView":"Begin Survey Now","trackerPlsLeaveOpen":"Please keep this window open!","trackerDesc1":"<strong>We'll ask you some questions after you finish your visit.</strong><br><br>The survey will appear in this window. You can minimize it for now or simply click on the window of our website.","trackerDesc2":"<strong>If your session is complete, please click below to begin the survey.</strong><br><br>The survey will appear in this window. You can minimize it for now or simply click on the window of our website."},"style":{"fonts":[],"backgroundColor":"#FFFFFF","brandColor":"#000000","invite":{"backgroundImage":"","height":"","width":"","borderRadius":"","bannerBackgroundColor":"#000000","bannerHeight":"","logoMargin":"","logoBackgroundColor":"","logoHide":false,"headerFontFamily":"","headerFontSize":"","headerLineHeight":"","headerFontWeight":"","headerTextDecor":"","bodyFontFamily":"","bodyFontSize":"","bodyLineHeight":"","bodyTextDecor":"","buttonFontFamily":"","buttonBorder":"","buttonBorderRadius":"","acceptTextColor":"","acceptFontSize":"","declineTextColor":"","declineFontSize":"","xColor":"","xBorderRadius":""},"tracker":{"margin":"","leftBackgroundColor":"","logoHide":false,"headerFontFamily":"","headerFontSize":"","headerLineHeight":"","headerFontWeight":"","headerTextDecor":"","bodyFontFamily":"","bodyFontSize":"","bodyLineHeight":"","buttonFontFamily":"","startBorder":"","startBorderRadius":"","startTextColor":"","startFontSize":""},"presetStyles":"","customStyleBlock":null}}],"mobile":[{"displayname":"default","template":"mobile","inviteLogo":"sitelogo.png","trackerLogo":"sitelogo.png","siteLogoTitleText":"","siteLogoAltText":"","vendorLogo":"fslogo.svg","vendorLogoPNG":"fslogo.png","vendorTitleText":"ForeSee","vendorAltText":"ForeSee Logo","hideForeSeeLogoMobile":false,"inviteType":"SMSEMAIL","trapFocus":false,"dialog":{"ariaCloseInvite":"Close dialog","headline":"We'd welcome your feedback!","subheadline":"Can we send you a brief survey so we can improve your experience on this website?","declineButton":"No, thanks","acceptButton":"Yes, I'll help","emailButton":"Email me","textButton":"Text me","poweredbyLink":"http://www.foresee.com","poweredbyText":"Powered by ForeSee","ariaContactLabel":"Please provide your contact information","emailPlaceholder":"Your email...","textPlaceholder":"Your cellphone number...","submitButton":"Submit","textDisclaimer":"Providing your number means you are participating in a ForeSee survey. Message &amp; data rates may apply. 1 message per survey.","emailDisclaimer":"","termsAndConditionsText":"SMS Disclosure","termsAndConditionsLink":"https://www.foresee.com/sms-terms-and-conditions/","privacyPolicyText":"Privacy Policy","privacyPolicyLink":"https://www.foresee.com/privacy-policy/","emailInvalidation":"Error: Please enter a valid email","textInvalidation":"Error: Please enter a valid cellphone number","onexitheadline":"Thank you!","onexitsubheadline":"We'll reach out to you after you finish on our site.","onexitcountertag":"Returning in ","onexitcounterval":"7","theme":"light"},"style":{"font":"","backgroundColor":"","shadowColor":"","privacyBackgroundColor":"","fullScreenBackgroundColor":"","invite":{"logoSwitch":false,"textColor":"","smsButtonTextColor":"","smsButtonBackgroundColor":"","emailButtonTextColor":"","emailButtonBackgroundColor":"","xColor":"","xBackgroundColor":"","xBorderRadius":"","buttonBorderRadius":"","buttonShadowColor":"","buttonDisabledTextColor":"","buttonDisabledBackgroundColor":"","invalidColor":""},"presetStyles":"","customStyleBlock":null}}]},"qualifier":{"useQualifier":false,"survey":{"topSection":"Thank you for your willingness to participate in our survey.","noThanksTopSection":"You will not receive the survey.  Thank you for your willingness to help.","noThanksBottomSection":"You can close this window now.","validationFailedMsg":"Please answer all of the questions.","continueLabel":"Continue","noLabel":"No thanks","closeLabel":"Close the window","questions":[{"text":"Please specify your age:","questionType":"RADIO","choices":[{"text":"Prefer not to say","qualifies":false},{"text":"8 or under","qualifies":"preteen","cpps":[{"Age":"8 or under"}]},{"text":"9-13","qualifies":"preteen","cpps":[{"Age":"9-13"}]},{"text":"14-17","qualifies":"teen","cpps":[{"Age":"14-17"}]},{"text":"18-24","qualifies":"qual1","cpps":[{"Age":"18-24"}]},{"text":"25-34","qualifies":"qual1","cpps":[{"Age":"25-34"}]},{"text":"35-44","qualifies":"qual1","cpps":[{"Age":"35-44"}]},{"text":"45-54","qualifies":"qual1","cpps":[{"Age":"45-54"}]},{"text":"55-64","qualifies":"qual1","cpps":[{"Age":"55-64"}]},{"text":"65+","qualifies":"qual1","cpps":[{"Age":"65+"}]}]}]}},"reminder":{"useReminder":false,"display":{"headerSection":"Your survey is ready now!","bodySection":"Thank you for your willingness to give your feedback","buttonText":"Begin Survey"}}},{"name":"browse","site":"sec","uid":"8ea34f76-10e8-4742-9763-0b6e874d0c1a","language":{"locale":"en"},"cxRecord":false,"mouseoff":{"mode":"off","minSiteTime":6000,"minPageTime":3000,"sp":{"reg":-1,"outreplaypool":0},"lf":1},"criteria":{"sp":{"reg":40,"outreplaypool":0},"lf":2,"supportsSmartPhones":false,"supportsTablets":false,"supportsDesktop":true},"include":{"urls":["*"],"referrers":[],"userAgents":[],"browsers":[],"cookies":[],"variables":[]},"inviteExclude":{"urls":[],"referrers":[],"userAgents":[],"browsers":[],"cookies":[],"variables":[]},"pattern":"url","selectMode":"default","links":{"cancel":[],"survey":[],"tracker":[]},"display":{"desktop":[{"displayname":"default","template":"classicdesktop","inviteLogo":"sitelogo.png","inviteBanner":"","trackerLogo":"sitelogo.png","trackerBanner":"","siteLogoTitleText":"","siteLogoAltText":"","inviteType":"TRACKER","closeClickOnBackdrop":true,"removeSurveyAlerts":false,"shortSurvey":{"idleViewsBeforeStop":null,"idleTimeBeforeAbandon":null,"paginationType":"default","midOverride":null,"abTestPercent":100,"style":{"zIndex":99999999,"position":"bottomright"}},"dialog":{"headline":"The U.S. Securities and Exchange Commission welcomes your feedback.","blurb":"Thank you for visiting SEC.gov. You have been selected to participate in a brief customer satisfaction survey to let us know how we can improve your experience.","closeInviteButtonText":"Close dialog","declineButton":"No thanks","acceptButton":"Yes, I'll give feedback","acceptButtonTitleText":"Yes, I'll give feedback (Opens in a new window)","error":"Error","warnLaunch":"this will launch a new window","allowclose":true,"surveyavailable":"Your survey is now available","poweredbyLink":"http://www.foresee.com","poweredbyText":"Powered by ForeSee","privacyPolicyText":"Privacy Policy","privacyPolicyLink":"//www.foresee.com/privacy-policy/","trackerTitle":"ForeSee - Survey Tracker Window","trackerClickToView":"Click to view the survey.","trackerPlsLeaveOpen":"Please leave this window open.","trackerDesc1":"It is part of the customer satisfaction survey you agreed to take on this site. You may click here when ready to complete the survey, although it should activate on its own after a few moments when you have left the site.","trackerDesc2":"Please leave this window open until you have completed your time on this site. This window is part of the customer satisfaction survey you agreed to take on this site. You may click here when ready to complete the survey, although it should activate on its own after a few moments when you have left the site.","noticeAboutSurvey":"The survey is designed to measure your entire experience, please look for it at the <u>conclusion</u> of your visit.","attribution":"This survey is conducted by an independent company ForeSee, on behalf of the site you are visiting.","trackerAtEnd":"At the end of your session, click here to begin the survey.","trackerDesc3":"Thank you for helping us improve your website experience. This survey is conducted by an independent company, ForeSee, on behalf of the site you visited.","trackerCorp":"ForeSee. All rights reserved.","trackerPrivacy":"Privacy"},"style":{"fonts":[],"backgroundColor":"#FFFFFF","brandColor":"#000000","invite":{"backgroundImage":"","height":"","width":"","borderRadius":"","bannerBackgroundColor":"#000000","bannerHeight":"","logoMargin":"","logoBackgroundColor":"","logoHide":false,"headerFontFamily":"","headerFontSize":"","headerLineHeight":"","headerFontWeight":"","headerTextDecor":"","bodyFontFamily":"","bodyFontSize":"","bodyLineHeight":"","bodyTextDecor":"","buttonFontFamily":"","buttonBorder":"","buttonBorderRadius":"","acceptTextColor":"","acceptFontSize":"","declineTextColor":"","declineFontSize":"","xColor":"","xBorderRadius":""},"tracker":{"margin":"","leftBackgroundColor":"","logoHide":false,"headerFontFamily":"","headerFontSize":"","headerLineHeight":"","headerFontWeight":"","headerTextDecor":"","bodyFontFamily":"","bodyFontSize":"","bodyLineHeight":"","buttonFontFamily":"","startBorder":"","startBorderRadius":"","startTextColor":"","startFontSize":""},"presetStyles":"","customStyleBlock":null},"hideForeSeeLogoDesktop":false,"vendorTitleText":"ForeSee","vendorAltText":"ForeSee"}],"mobile":[{"displayname":"default","template":"mobile","inviteLogo":"","trackerLogo":"","siteLogoTitleText":"","siteLogoAltText":"","vendorLogo":"fslogo.svg","vendorLogoPNG":"fslogo.png","vendorTitleText":"ForeSee","vendorAltText":"ForeSee Logo","hideForeSeeLogoMobile":false,"inviteType":"SMSEMAIL","inviteDelay":null,"trapFocus":false,"dialog":{"ariaCloseInvite":"Close dialog","headline":"We'd welcome your feedback!","subheadline":"Can we send you a brief survey so we can improve your experience on this website?","declineButton":"No, thanks","acceptButton":"Yes, I'll help","emailButton":"Email me","textButton":"Text me","poweredbyDisclaimer":null,"poweredbyLink":"http://www.foresee.com","poweredbyText":"Powered by ForeSee","ariaContactLabel":"Please provide your contact information","emailPlaceholder":"Your email...","textPlaceholder":"Your cellphone number...","submitButton":"Submit","textDisclaimer":"Providing your number means you are participating in a ForeSee survey. Message &amp; data rates may apply. 1 message per survey.","emailDisclaimer":"","termsAndConditionsText":"SMS Disclosure","termsAndConditionsLink":"https://www.foresee.com/sms-terms-and-conditions/","privacyPolicyText":"Privacy Policy","privacyPolicyLink":"https://www.foresee.com/privacy-policy/","emailInvalidation":"Error: Please enter a valid email","textInvalidation":"Error: Please enter a valid cellphone number","onexitheadline":"Thank you!","onexitsubheadline":"We'll reach out to you after you finish on our site.","onexitcountertag":"Returning in ","onexitcounterval":"7","theme":"main"},"style":{"font":"","backgroundColor":"","shadowColor":"","privacyBackgroundColor":"","fullScreenBackgroundColor":"","invite":{"logoSwitch":false,"textColor":"","smsButtonTextColor":"","smsButtonBackgroundColor":"","emailButtonTextColor":"","emailButtonBackgroundColor":"","xColor":"","xBackgroundColor":"","xBorderRadius":"","buttonBorderRadius":"","buttonShadowColor":"","buttonDisabledTextColor":"","buttonDisabledBackgroundColor":"","invalidColor":""},"presetStyles":"","customStyleBlock":null}}]},"qualifier":{"useQualifier":false,"survey":{"topSection":"Thank you for your willingness to participate in our survey.","noThanksTopSection":"You will not receive the survey.  Thank you for your willingness to help.","noThanksBottomSection":"You can close this window now.","validationFailedMsg":"Please answer all of the questions.","continueLabel":"Continue","noLabel":"No thanks","closeLabel":"Close the window","questions":[{"text":"Please specify your age:","questionType":"RADIO","choices":[{"text":"Prefer not to say","qualifies":false},{"text":"8 or under","qualifies":"preteen","cpps":[{"Age":"8 or under"}]},{"text":"9-13","qualifies":"preteen","cpps":[{"Age":"9-13"}]},{"text":"14-17","qualifies":"teen","cpps":[{"Age":"14-17"}]},{"text":"18-24","qualifies":"qual1","cpps":[{"Age":"18-24"}]},{"text":"25-34","qualifies":"qual1","cpps":[{"Age":"25-34"}]},{"text":"35-44","qualifies":"qual1","cpps":[{"Age":"35-44"}]},{"text":"45-54","qualifies":"qual1","cpps":[{"Age":"45-54"}]},{"text":"55-64","qualifies":"qual1","cpps":[{"Age":"55-64"}]},{"text":"65+","qualifies":"qual1","cpps":[{"Age":"65+"}]}]}]}},"reminder":{"useReminder":false,"display":{"headerSection":"Your survey is ready now!","bodySection":"Thank you for your willingness to give your feedback","buttonText":"Begin Survey"}}}],"vendorCode":"fs"};
delete globalConfig._;var a=Object.prototype.hasOwnProperty,s=function(e,t){return a.call(e,t)},c=function(e,t){var n;for(n in e)if(s(e,n)&&t(e[n],n))break},f=function(e){return null!=e},u=function(e){return"function"==typeof e},l=function(e){return"object"==typeof e},d=function(e){return"[object Array]"==Object.prototype.toString.call(e)},g=function(e){return"string"==typeof e},p=function(t){var n={};e.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,(function(e,t,r){n[t]=r}));var r=n[t];return r?decodeURIComponent(r):r},v=function(e){return setTimeout(e,0)};function h(){var e,t,n,r=arguments,o=r[0]||{},i=1,a=r.length,s=!1===arguments[arguments.length-1];for("object"!=typeof o&&"function"!=typeof o&&(o={}),a===i&&(o=this,--i);i<a;i++)if(void 0!==(e=r[i]))for(t in e)o!==(n=e[t])&&void 0!==n&&(n instanceof Array?n=n.slice(0):n instanceof Date?n=new Date(n.getTime()):null===n?n=null:"object"!=typeof n||s||(n=h({},n)),o[t]=n);return o}var y=function(e,t,n){return f(n)&&e.setAttribute(t,n),e&&e.getAttribute?e.getAttribute(t):null};var m=function(e){var t=document.documentElement.classList;e?t.add("_fsrclientInvokedHide"):t.remove("_fsrclientInvokedHide")},b={_enforceGlobalNS:function(){e.FSR||(e.FSR={}),e.FSFB||(e.FSFB={})},expose:function(t,n){var r;b._enforceGlobalNS(),"clearState"!==t&&"clearStateFeedback"!==t||(r=n,n=function(){for(var e=0;e<_.length;e++)_[e]();r()}),e.FSR[t]=e.FSFB[t]=n},retrieveFromAPI:function(t){return b._enforceGlobalNS(),e.FSR[t]}},_=[];b.expose("setFSRVisibility",m);var S=function(e){var t,n=[],r=document,o=r.documentElement,i=o.doScroll,a=(i?/^loaded|^c/:/^loaded|c/).test(r.readyState);function s(e){a=1;do{(e=n.shift())&&e()}while(e)}return r.addEventListener&&r.addEventListener("DOMContentLoaded",t=function(){r.removeEventListener("DOMContentLoaded",t,!1),s()},!1),i&&r.attachEvent("onreadystatechange",t=function(){/^c/.test(r.readyState)&&(r.detachEvent("onreadystatechange",t),s())}),e=i?function(t){self!=top?a?t():n.push(t):function(){try{o.doScroll("left")}catch(re){return setTimeout((function(){e(t)}),50)}t()}()}:function(e){a?e():n.push(e)}}();var w=function(e){var t=(""+location.hash).toLowerCase();return e=(e||"").toLowerCase(),!!(/fscommand|fscmd|acscmd|acscommand/.test(t)&&t.indexOf(e)>-1)},O=function(){function e(){}function t(e){if(!(this instanceof t))throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],s(e,this)}function n(e,t){for(;3===e._state;)e=e._value;0!==e._state?(e._handled=!0,v((function(){var n=1===e._state?t.onFulfilled:t.onRejected;if(null!==n){var i;try{i=n(e._value)}catch(re){return void o(t.promise,re)}r(t.promise,i)}else(1===e._state?r:o)(t.promise,e._value)}))):e._deferreds.push(t)}function r(e,n){try{if(n===e)throw new TypeError("A promise cannot be resolved with itself.");if(n&&("object"==typeof n||"function"==typeof n)){var r=n.then;if(n instanceof t)return e._state=3,e._value=n,void i(e);if("function"==typeof r)return void s((a=r,c=n,function(){a.apply(c,arguments)}),e)}e._state=1,e._value=n,i(e)}catch(re){o(e,re)}var a,c}function o(e,t){e._state=2,e._value=t,i(e)}function i(e){2===e._state&&0===e._deferreds.length&&v((function(){e._handled||t._unhandledRejectionFn(e._value)}));for(var r=0,o=e._deferreds.length;r<o;r++)n(e,e._deferreds[r]);e._deferreds=null}function a(e,t,n){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=n}function s(e,t){var n=!1;try{e((function(e){n||(n=!0,r(t,e))}),(function(e){n||(n=!0,o(t,e))}))}catch(i){if(n)return;n=!0,o(t,i)}}return t.prototype.catch=function(e){return this.then(null,e)},t.prototype.then=function(t,r){var o=new this.constructor(e);return n(this,new a(t,r,o)),o},t.prototype.finally=function(e){var t=this.constructor;return this.then((function(n){return t.resolve(e()).then((function(){return n}))}),(function(n){return t.resolve(e()).then((function(){return t.reject(n)}))}))},t.all=function(e){return new t((function(t,n){if(!e||void 0===e.length)throw new TypeError("Promise.all accepts an array");var r=Array.prototype.slice.call(e);if(0===r.length)return t([]);var o=r.length;function i(e,a){try{if(a&&("object"==typeof a||"function"==typeof a)){var s=a.then;if("function"==typeof s)return void s.call(a,(function(t){i(e,t)}),n)}r[e]=a,0==--o&&t(r)}catch(c){n(c)}}for(var a=0;a<r.length;a++)i(a,r[a])}))},t.resolve=function(e){return e&&"object"==typeof e&&e.constructor===t?e:new t((function(t){t(e)}))},t.reject=function(e){return new t((function(t,n){n(e)}))},t.race=function(e){return new t((function(t,n){for(var r=0,o=e.length;r<o;r++)e[r].then(t,n)}))},t._unhandledRejectionFn=function(e){},t}(),j=e.Promise||O,F=/MSIE |Trident/.test(window.navigator.userAgent)?O:j;var L=null,R=null,A=null,E=null,C=null,x=null,N=null,k=null,U=null,P=null,T=e.performance&&e.performance.timing?e.performance.timing.responseStart:(new Date).getTime(),I=globalConfig.codeVer||"";function D(e){L=e.assetOverride,R=e.rootOverride,A=e.tagAttrs,E=e.productCfgOverride,C=e.hasSSL,x=e.gatewayLocation,N=e.isProduction,k=e.isSelfHosted,U=e.normalizeAssetUrl,P=e.normalizeUrl,I=globalConfig.codeVer||""}function z(e,t,n){void 0===n&&(n=!1);for(var r=t.split("."),o=1,i=e,a=r.length,s=r[0];o<a&&(i=i[s]);)s=r[o++],d(i)&&!isNaN(parseFloat(s))&&isFinite(s)&&(s=+s);if(o!==a||!i){if(n)return;throw new Error("Can't find config: "+r.slice(0,o).join("."))}return{obj:i,key:s}}var H=globalConfig,J=decodeURIComponent,$=encodeURIComponent,K=Object.freeze({config:H,dec:J,enc:$,getProductConfig:function(e){return productConfig[e]},get globalConfig(){return globalConfig},API:b,domReady:S,featureFlag:function(e,t){if((t=t||{}).after=t.after||function(){},!e)return t.after(),null;if(!globalConfig.featureFlags)return t.after(),null;var n=globalConfig.featureFlags[e];return"boolean"!=typeof n?(t.after(),null):n&&"function"==typeof t.on?(t.on(t.after),t.on.length<1&&t.after(),n):n||"function"!=typeof t.off?void 0:(t.off(t.after),t.off.length<1&&t.after(),n)},fsCmd:w,Promise:F,get supportsDomStorage(){return n},winReady:function(n){var r,o,i;"complete"===t.readyState?v(n):(o="load",i=n,(r=e).addEventListener?r.addEventListener(o,i,!1):r.attachEvent("on"+o,i))},get assetLocation(){return L},get codeLocation(){return R},get embedAttrs(){return A},get gwConfigOverride(){return E},get hasSSL(){return C},get home(){return x},get isProduction(){return N},get isSelfHosted(){return k},get makeAssetURI(){return U},get makeURI(){return P},resetStartTS:function(){T=(new Date).getTime()},get startTS(){return T},get tagVersion(){return I},attr:y,compute:function(t){return new[].constructor.constructor(t).call(e)},diff:function e(t,n,r){r=r||[];var o,i={};for(var a in t)if((o=t[a])!==t&&void 0!==o&&(!f(n[a])||o!==n[a]))if(l(o)&&!d(o)){if(r.some((function(e){return e===this}),o))continue;r.push(o);var s=e(o,n[a],r);f(s)&&(!s.length||s.length>0)&&(i[a]=s),r.pop()}else i[a]=o;return i},dispose:function(e){if(e){if(e.length)for(var t=e.length-1;t>=0;t--)e[t]=null;for(var n in e){var r=typeof e[n];"function"!=r&&"object"!=r||(e[n]=null)}}e=null},eachProp:c,ext:h,getParam:p,getQueryString:function(t){var n={};e.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,(function(e,t,r){r.indexOf("#")>-1?n[t]=r.substring(0,r.indexOf("#")):n[t]=r}));var r=n[t];return r?decodeURIComponent(r):r},hasProp:s,isArray:d,isDate:function(e){return e instanceof Date},isDefined:f,isElement:function(e){return e&&e.nodeType&&(1==e.nodeType||11==e.nodeType||9==e.nodeType)},isFunction:u,isNodeList:function(e){return"[object NodeList]"==Object.prototype.toString.call(e)},isObject:l,isPlainObject:function(e){if(!e||"[object Object]"!==Object.prototype.toString.call(e)||e.nodeType||e.setInterval)return!1;if(e.constructor&&!hasOwnProperty.call(e,"constructor")&&!hasOwnProperty.call(e.constructor.prototype,"isPrototypeOf"))return!1;var t,n=!0;for(t in e)(!n||void 0===t||hasOwnProperty.call(e,t)||!hasOwnProperty.call(e,t)&&hasOwnProperty.call(Object.prototype,t))&&(n=!1);return n},isString:g,nextTick:v,proxy:function(e,t){return e.bind(t)},setFSRVisibility:m,toLowerCase:function(e){return g(e)?e.toLowerCase():""},toQueryString:function(e,t){var n,r=f(t)?t+(t.indexOf("?")>-1?"&":"?"):"";if(e)for(var o in e)n=e[o],g(n)||(n=JSON.stringify(n)),r+=encodeURIComponent(o)+"="+encodeURIComponent(n)+"&";return r},getNested:z}),q=function(){function e(e){var t=this;this.name=e,this.promise=new F((function(e){return t._resolve=e})),this._loaded=!1}var n=e.prototype;return n.resolve=function(e){this._resolve&&(this._resolve(e),this._resolve=null,this._loaded=!0)},n.isResolved=function(){return!this._resolve},n.load=function(){var e=this;if(!(this._loaded||this.name.indexOf("/")<0)){this._loaded=!0;var n=t.createElement("script");return n.type="text/javascript",n.charset="utf-8",n.async=!0,n.setAttribute("data-name",this.name),new F((function(t,o){var i=function(){s(),t()},a=function(){s(),o(new Error("Foresee WebSDK failed to load: "+e.name))};function s(){n.removeEventListener("load",i,!1),n.removeEventListener("error",a,!1),n.parentNode.removeChild(n)}n.addEventListener("load",i,!1),n.addEventListener("error",a,!1),n.src=e.name,r.appendChild(n)}))}},e}(),B=new(function(){function n(){this._modules={},this._pending=[]}var r=n.prototype;return r.require=function(t,n){for(var r=[],o=0;o<t.length;o++)if("exports"===t[o])r.push({});else{var i=this._getModule(t[o]);r.push(i.promise),this._load(i)}n&&F.all(r).then((function(t){v((function(){return n.apply(e,t)}))}))},r.define=function(e,t,n){var r=this;u(t)&&(n=t),d(e)&&(t=e,e=null);var o=new F((function(e){r.require(t,(function(){for(var t=arguments.length,o=new Array(t),i=0;i<t;i++)o[i]=arguments[i];v((function(){return e(r._run(n,o))}))}))}));this._register(e,o)},r._getModule=function(e){return this._modules[e]=this._modules[e]||new q(e),this._modules[e]},r._register=function(e,n){if(!e){var r=t.currentScript;if(!r)return void this._pending.push(n);e=r.getAttribute("data-name")}this._getModule(e).resolve(n)},r._run=function(t,n){var r=t.apply(e,n);return r&&r.startup&&r.startup(),r},r._load=function(e){var t=this,n=e.load();n&&n.then((function(){e.isResolved()||t._legacyLoad(e)})).catch((function(e){}))},r._legacyLoad=function(e){if(!(this._pending.length<1)){var t=this._pending.shift();this._register(e.name,t)}},n}()),Q=B.define.bind(B),V=B.require.bind(B);Q("define",(function(){return Q})),Q("require",(function(){return V})),e._fsDefine=e._acsDefine=Q,e._fsRequire=e._acsRequire=V;var M={};M.normalizeUrl=function(e){e=e.replace("foresee/","trigger/");var t,n=M.gatewayLocation||"";if(e.indexOf("v=")>-1)return e;if("$"==e.substr(0,1)){if(M.rootOverride){var r="/";return"/"===M.rootOverride[M.rootOverride.length-1]&&(r=""),e.replace("$",""+M.rootOverride+r)}return t="code/"+globalConfig.codeVer+"/"+e.replace("$",""),"/"==n?n+t:function(e,t){var n=e.substr(0,e.indexOf("//"))+"//",r=e.substr(n.length),o=r.substr(r.indexOf("/")+1),i=o.substr(o.lastIndexOf("/")+1);o=o.substr(0,o.length-i.length-1),r=r.substr(0,r.indexOf("/"));var a=o.split("/");return a.length-=Math.min(a.length,t),(n+r+"/"+a.join("/")+i).replace(/\/\/\//g,"//")}(n,3)+t}return-1==e.indexOf("//")&&(e="/"==n.substr(n.length-1,1)&&"/"==e.substr(0,1)?n+e.substr(1):n+e),e},M.normalizeAssetUrl=function(e){return M.assetOverride?"/"===e.substr(0,1)?M.assetOverride+e.substr(1):M.assetOverride+e:M.normalizeUrl(e)},M.locateGW=function(){var n,o,i,a,s,f,u,l,d,g,v,h,m=t.getElementsByTagName("script"),b="gateway",_="/";if(r&&("true"==y(r,"data-skipfsinit"),a=y(r,"data-fsgatewaylocparam"),s=y(r,"data-codeversion"),f=y(r,"data-analyticsurl"),u=y(r,"data-surveyurl"),l=y(r,"data-product-assets"),d=y(r,"data-codelocation"),g=y(r,"data-productconfig"),v=y(r,"data-isselfhosted"),h=y(r,"data-hasssl"),a&&(a=p(a)),M.isSelfHosted=!1,v&&(M.isSelfHosted="true"==p(v)),M.hasSSL=!0,h&&(M.hasSSL="true"==p(h)||"false"),d&&(M.rootOverride=p(d)),l&&(M.assetOverride=p(l),"undefined"===M.assetOverride&&(M.assetOverride=void 0)),g&&(M.productCfgOverride=p(g)),s&&(globalConfig.codeVer=p(s)),f&&(globalConfig.analyticsUrl=p(f)),u&&(globalConfig.surveyUrl=p(u))),("string"!=typeof globalConfig.siteKey||globalConfig.siteKey.length<1)&&(globalConfig.siteKey=p("sitekey")),c(m,(function(e,t){if("length"!==t){i=y(e,"src")||"";var r=y(e,"data-vendor");"fs"!=r&&"acs"!=r||y(e,"data-role")!=b?i.indexOf(b)>-1&&(o=e):n=e}})),n||(n=o),!n)throw new Error('FSR: No script tag has been found. Expected is a script tag with the following attributes:  data-vendor="fs"  data-role="gateway"  src="[a_path_leading_to]/gateway[.min].js". Aborting loading.');for(var S=0;S<n.attributes.length;S++){var w=n.attributes[S];M.tagAttrs[w.name]=w.value}M.gwScript=n,i=a||y(n,"src"),M.environment=y(n,"data-environment")||M.environment,M.rootOverride=y(n,"data-codelocation")||M.rootOverride,M.assetOverride=y(n,"data-product-assets")||M.assetOverride,M.isSelfHosted=y(n,"data-isselfhosted")?"true"==y(n,"data-isselfhosted"):M.isSelfHosted,M.hasSSL=y(n,"data-hasssl")||M.hasSSL,-1==i.indexOf(":/")&&i.substr(0,1)!=_&&((m=(""+e.location.href).split(_))[m.length-1].indexOf(".")>-1&&m[m.length-1].toLowerCase()!=e.location.hostname.toLowerCase()&&m.pop(),i=m.join(_)+(i.substr(0,1)==_?"":_)+i),(i=i.split(_)).pop(),function(e){var t,n;for(t=0;t<e.length;t++)if("."===(n=e[t]))e.splice(t,1),t-=1;else if(".."===n){if(0===t||1==t&&".."===e[2]||".."===e[t-1])continue;t>0&&(e.splice(t-1,2),t-=2)}}(i),M.gatewayLocation=i.join(_)+_,M.isProduction=M.gatewayLocation.toLowerCase().indexOf("production")>-1,M.rootOverride&&M.rootOverride.substr(M.rootOverride.length-1)!=_&&(M.rootOverride+=_),M.assetOverride&&M.assetOverride.substr(M.assetOverride.length-1)!=_&&(M.assetOverride+=_),D(M)},M.environment="production",M.isSelfHosted=!1,M.hasSSL=!0,M.assetOverride=void 0,M.rootOverride=void 0,M.tagAttrs={},M.gatewayLocation="",M.isProduction=!1,M.productCfgOverride=null,M.gwScript=null,D(M);var G=M.normalizeUrl;function W(t){return"object"==typeof t&&c(t,(function(n,r){if("object"==typeof n&&null!=n)if("variable"===n.source&&f(n.default)&&f(n.path)){var o=z(e,n.path,!0),i=o&&o.obj[o.key];if(f(i)&&null!==i){if("function"==typeof i||"object"==typeof i)throw new Error("Cannot replace config setting "+r+" with path "+n.path+" with a "+typeof i);switch(typeof n.default){case"string":i=function(e){if(X.test(e))return e.replace(X,(function(e){return Y[e]}));return e}(String(i));break;case"number":i=parseFloat(i);break;case"boolean":i="false"!==String(i)&&Boolean(i);break;default:throw new Error("Default for "+r+" replaced with path "+n.path+" is invalid type "+typeof n.default)}t[r]=i}else t[r]=n.default}else W(n)})),t}e._fsNormalizeUrl=e._acsNormalizeUrl=M.normalizeUrl,e._fsNormalizeAssetUrl=M.normalizeAssetUrl;var X=/[&<>"']/g,Y={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"};var Z;Z=function(){if(n)try{sessionStorage.removeItem("fsrQAConfig")}catch(re){}},_.push(Z),Q("fs",(function(){return K})),Q("_acs",(function(){return K}));var ee={record:["$fs.record.js"],feedback:["$fs.feedback.js","$fs.survey.js"],trigger:["$fs.trigger.js"]};function te(){if((void 0===e.opera||"[object Opera]"!==e.opera.toString())&&JSON&&!(document.documentMode<10)){if(void 0!==e._fsAlreadyBootedSDK)return console.error("Foresee WebSDK detected its embed code ran more than once."),void console.error("This is a serious problem, please contact support.");e._fsAlreadyBootedSDK=!0,S(ne)}}function ne(){v((function(){var t,r,a,s,l="fsReady";if(M.gwScript&&(t=y(M.gwScript,"data-module"),a="true"==y(M.gwScript,"data-isselfhosted"),globalConfig.selfHosted||(globalConfig.selfHosted=a),(s=y(M.gwScript,"data-config"))&&(s=JSON.parse(atob(s)),h(globalConfig,s.global))),f(e.acsReady)&&(e[l]=e.acsReady),!f(e.acsReady)){e.acsReady=e[l]||function(){var t="__"+l+"_stk__";e[t]=e[t]||[],e[t].push(arguments)}}var d=[],g=function(){if(function(){var e;if(n){try{e=sessionStorage.getItem("fsrQAConfig")}catch(re){}if(e){var t=JSON.parse(e);i(t.global),c(productConfig,(function(e,n){t[n]&&o(n,t[n])}))}}}(),W(globalConfig),W(productConfig),c(productConfig,(function(e,t){globalConfig.products[t]&&(d=d.concat(ee[t]))})),d.push("$fs.utils.js"),d.push("$fs.compress.js"),c(globalConfig.products,(function(e,t){e&&!productConfig[t]&&(globalConfig.products[t]=!1)})),t)t&&v((function(){V([G(t)],(function(){}))}));else{for(r=0;r<d.length;r++)d[r]=M.normalizeUrl(d[r]);V(d,(function(){if(!e.__fsReady__){e.__fsReady__=e.__acsReady__=e.fsReady=e.acsReady=function(){var t=arguments;v((function(){for(var n=0;n<t.length;n++)u(t[n])&&t[n].call(e)}))};var t=e.__fsReady_stk__,n=function(t){return function(){for(var n=0;n<t.length;n++)t[n].call(e)}};if(t){for(var r=0;r<t.length;r++)v(n(t[r]));delete e.__fsReady_stk__}}}))}};if(globalConfig.selfHosted&&!s){var p=[M.normalizeUrl("$fs.utils.js"),M.normalizeUrl("$fs.sanitize.js")];V(p,(function(e,t){var n=new e.SeshStorage(globalConfig.siteKey+"_"+M.environment,!1),r=n.get("setts");if(r)s(r);else{var a=""+(0!=globalConfig.configLocation.indexOf("/")?location.protocol+"//":"")+globalConfig.configLocation+"/"+M.environment+"/config.json";(new e.AjaxTransport).send({method:"GET",url:a,success:function(e){e&&t.checkIntegrity(e).then((function(t){t?(n.set("setts",e),n.commit(),s(e)):(console.error("ForeSee WebSDK failed integrity code check on config.json."),console.error("Please contact ForeSee support for an updated integrity code."))})).catch((function(e){}))}})}function s(e){var t=JSON.parse(e);t.global=t.global||{},t.global.selfHosted=globalConfig.selfHosted,t.global.siteKey=globalConfig.siteKey,t.global.codeVer=globalConfig.codeVer,t.global.gateway=globalConfig.gateway,t.global.configLocation=globalConfig.configLocation,i(t.global),delete t.global,c(t,(function(e,t){globalConfig.products[t]&&o(t,e)})),g()}}))}else g()}))}M.locateGW(),function(){try{if(n&&sessionStorage.getItem("fsrQAConfig"))return!1}catch(re){}return w("qa")||p("fsr-qa-mode")}()?function(t){V([G("$fs.utils.js")],(function(r){!function(t,r,o){function i(e){var t=z(o,e);return t.obj[t.key]}function a(e,t){var n=z(o,e);n.obj[n.key]=t}o.global=globalConfig,b.expose("QA",{get:i,set:a,copy:function(e,t){return a(t,JSON.parse(JSON.stringify(i(e))))},remove:function(e){var t=z(o,e);d(t.obj)?t.obj.splice(t.key,1):delete t.obj[e]},insert:function(e,t,n){var r=i(e);if(!d(r))throw new Error("Expected "+e+" to be an array");t<0&&(t=r.length+1+t),r.splice(t,0,n)},getFlag:function(e){return i("global.featureFlags."+e)},setFlag:function(e,t){return a("global.featureFlags."+e,t)},getAllFlags:function(){return i("global.featureFlags")},setAllFlags:function(e){for(var t=i("global.featureFlags"),n=Object.keys(t),r=n.length,o=0;o<r;o++)a("global.featureFlags."+n[o],e)},done:function(){delete e.FSR.QA,delete e.FSFB.QA,n&&sessionStorage.setItem("fsrQAConfig",JSON.stringify(o)),t()}})}(t,0,h({},productConfig))}))}(te):te()}();