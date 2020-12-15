/* ---- FORESEE CODE UPDATED 9/25/17 ------ */

// ForeSee Production Embed Script v2.00
// DO NOT MODIFY BELOW THIS LINE *****************************************
;(function (g) {
var d = document, am = d.createElement('script'), h = d.head || d.getElementsByTagName("head")[0], fsr = 'fsReady',
aex = {
  "src": "//gateway.foresee.com/sites/sec-gov/production/gateway.min.js",
  "type": "text/javascript",
  "async": "true",
  "data-vendor": "fs",
  "data-role": "gateway"
};
for (var attr in aex){am.setAttribute(attr, aex[attr]);}h.appendChild(am);g[fsr] = function () {var aT = '__' + fsr + '_stk__';g[aT] = g[aT] || [];g[aT].push(arguments);};
})(window);
// DO NOT MODIFY ABOVE THIS LINE *****************************************



/* browser test for stylesheets */

var isIE;
if (navigator.appName == "Microsoft Internet Explorer") {
    if (parseInt(navigator.appVersion) >= 4) {
        isIE = true;
        document.write("<LINK REL='STYLESHEET' HREF='/include/ie.css'>");
    }
} else {
    isIE = false;
    document.write("<LINK REL='STYLESHEET' HREF='/include/others.css'>");
} 

/* indicate the current page in lists of archive links */

var currentIndex = function() {
    if (!document.getElementsByTagName || !document.createElement) return;
    var para = document.getElementById("archive-links");
    if (!para || para.nodeName != "P") return;
    var lnks = para.getElementsByTagName("a");
    for (i = 0; i < lnks.length; i++) {
        if (lnks[i].href == location.href) {
            var lnkTxt = lnks[i].firstChild.nodeValue;
            var spn = document.createElement("span");
            spn.appendChild(document.createTextNode(lnkTxt));
            spn.style.fontWeight = "bold";
            para.replaceChild(spn, lnks[i]);
        }
    }
};

/* google analytics, updated 2/22/16 */

  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-30394047-1', 'auto');
  ga('set', 'anonymizeIp', true);
  ga('send', 'pageview');

/* addLoadEvent -- for handling multiple onload events  */

function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function() {
            if (oldonload) {
                oldonload();
            }
            func();
        }
    }
}

if (typeof entourage !== "undefined") {
    addLoadEvent(entourage.initialize);
}
addLoadEvent(currentIndex);

//<![CDATA[
  var usasearch_config = { siteHandle:"secsearch" };
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = "https://search.usa.gov/javascripts/remote.loader.js";
  document.getElementsByTagName("head")[0].appendChild(script);

//]]>

function jsLoad () {
            var js = document.createElement("script");
            js.async = 1;
            js.type = "text/javascript";
            js.id = "_fed_an_ua_tag";
            js.src = "https://dap.digitalgov.gov/UniversalFederatedAnalyticsMin.js?agency=SEC&pua=ua-33523145-2&sdor=sec.gov";
            document.getElementsByTagName("head")[0].appendChild(js);
}
jsLoad();




