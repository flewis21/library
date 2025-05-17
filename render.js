var appList = function () {
  console.log(
    Math.floor((maxTime - (new Date() % (1000 * 60))) / 1000) +
      "\n" +
      arguments.callee.name,
  );
  return HtmlService.createTemplate(
    `<html id="appList"><head><base target="_top"><meta charset="utf-8"><meta name="appList" content="Boilerplate Function List"><meta name=viewport content="width=device-width, initial-scale=1"><link href="https://fonts.googleapis.com/css?family=Acme" rel="stylesheet"><style>
        a:link, a:visited {color:black !important;}
        a:hover, a:active{ 
          color:white  !important;
          text-decoration:none  !important;}</style></head><body><? var nber = randNum(arguments.callee.caller.name) ?><? var appList = appSort(nber) ?><? var dropList = appList.map((item) => {return "<option>" + item + "</option>"}).join("") ?><? var result = JSON.stringify(dropList) ?><? var appUrl = getUrl(ScriptApp) + "?func=" ?><div class="row"><div class="col s12 l12 m12 card-panel amber receipt"><div class="menu-img btn-large valign-wrapper col s12 amber darken-0 receipt" id="seoData"><label id="indexLab"><strong>Research</strong></label><div id="indexDiv" class="video-container amber flow-text" style="clear: both;overflow-y: auto;overflow-x: hidden;text-align: center"><table class="striped centered highlight responsive-table amber z-depth-5"><thead></thead><tbody><tr style="justify-content: space-around;overflow: auto;border-radius: 3%;max-width: 100%;height: auto;display: block;margin: auto;"><td style="vertical-align: top;text-align: left"><table class="striped centered highlight responsive-table amber z-depth-5"><tbody><td id="tdIndexRes" style="width: 705px; height: 405px; padding: 0;">
                    <iframe 
                      class="z-depth-5 card-panel amber darken-0 scale-transition scale-out scale-in btn-large" 
                      src=""
                      id="indexRes"
                      style="width: 100%; height: 100%; border: none;"
                      allow="autoplay"
                      allow="encrypted-media"
                      title="Dontime Life Website"
                      frameborder="0"
                      allowfullscreen
                      ></iframe></td></tbody></table></td></tr></tbody></table></div><div class="row"><div class="col s12 card-panel l12 m12 receipt red"><div class="container"><div class="z-depth-5 grey toolbar_icon toolbar_iconHover container col s12 receipt"><div class="col s12 l12 m12 receipt red">
              <input style="font-size:18pt;color:green" placeholder="research" class="timepicker flow-text menu-img z-depth-5 card-panel black scale-transition scale-out scale-in receipt btn-large" id="homeIndex"  type="search" /></div></div></div></div></div></div></div></div><div class="row"><div class="col s12 m12 l12 menu z-depth-5 card-panel amber scale-out scale-in receipt" style="font-size: 30px"><div class="container"><div class="col s12 m12 l12 receipt nav-wrapper deep-purple darken-1"><div class="agenda z-depth-5 btn-large card-panel blue scale-out scale-in receipt col s12"><span><input placeholder="Your Search Here Ex. apple,orange..." class="flow-text menu-img z-depth-5 card-panel deep-purple darken-1 scale-transition scale-out scale-in receipt btn-large" id="uiApp" type="search"/></span></div></div></div></div></div><div class="row"><div class="col s12 l12 m12 card-panel amber receipt"><div class="menu-img btn-large valign-wrapper col s12 amber darken-0 receipt" id="seoData"><label id="tubeLab"><strong>Research</strong></label><div id="tubeDiv" class="video-container amber flow-text" style="clear: both;overflow-y: auto;overflow-x: hidden;text-align: center"><table class="striped centered highlight responsive-table amber z-depth-5"><thead></thead><tbody><tr style="justify-content: space-around;overflow: auto;border-radius: 3%;max-width: 100%;height: auto;display: block;margin: auto;"><td style="vertical-align: top;text-align: left"><table class="striped centered highlight responsive-table amber z-depth-5"><tbody><td id="tdTubeRes" style="width: 705px; height: 405px; padding: 0;">
                    <iframe 
                      class="z-depth-5 card-panel amber darken-0 scale-transition scale-out scale-in btn-large" 
                      src=""
                      id="tubeRes"
                      style= "width:'100%';height='100%'"
                      allow="autoplay"
                      allow="encrypted-media"
                      title="Dontime Life Website"
                      frameborder="0"
                      allowfullscreen
                      ></iframe></td></tbody></table></td></tr></tbody></table></div><div class="row"><div class="col s12 card-panel l12 m12 receipt red"><div class="container"><div class="z-depth-5 grey toolbar_icon toolbar_iconHover container col s12 receipt"><div class="col s12 l12 m12 receipt red"><input style="font-size:18pt;color:green" placeholder="research" class="timepicker flow-text menu-img z-depth-5 card-panel black scale-transition scale-out scale-in receipt btn-large" id="tubeSearch"  type="search" /></div></div></div></div></div></div></div></div><div class="row"><div class="col s12 l12 m12 card-panel amber receipt"><div class="menu-img btn-large valign-wrapper col s12 amber darken-0 receipt" id="seoData"><label id="bingLab"><strong>Research</strong></label><div id="bingDiv" class="video-container amber flow-text" style="clear: both;overflow-y: auto;overflow-x: hidden;text-align: center"><table class="striped centered highlight responsive-table amber z-depth-5"><thead></thead><tbody><tr style="justify-content: space-around;overflow: auto;border-radius: 3%;max-width: 100%;height: auto;display: block;margin: auto;"><td style="vertical-align: top;text-align: left"><table class="striped centered highlight responsive-table amber z-depth-5"><tbody><td id="tdBingRes" style="width: 705px; height: 405px; padding: 0;">
                  <iframe 
                    class="z-depth-5 card-panel amber darken-0 scale-transition scale-out scale-in btn-large" 
                    src=""
                    id="bingRes"
                    style= "width:'100%';height='100%'"
                    allow="autoplay"
                    allow="encrypted-media"
                    title="Dontime Life Website"
                    frameborder="0"
                    allowfullscreen
                    ></iframe></td></tbody></table></td></tr></tbody></table></div><div class="row"><div class="col s12 card-panel l12 m12 receipt red"><div class="container"><div class="z-depth-5 grey toolbar_icon toolbar_iconHover container col s12 receipt"><div class="col s12 l12 m12 receipt red"><input style="font-size:18pt;color:green" placeholder="research" class="timepicker flow-text menu-img z-depth-5 card-panel black scale-transition scale-out scale-in receipt btn-large" id="bingSearch"  type="search" /></div></div></div></div></div></div></div></div><div class="row"><div class="col s12 l12 m12 card-panel amber receipt"><div class="menu-img btn-large valign-wrapper col s12 darken-0 receipt amber" id="seoData"><label id="busLab"><strong>Research</strong></label><div id="busDiv" class="video-container amber flow-text" style="clear: both;overflow-y: auto;overflow-x: hidden;text-align: center"><table class="striped centered highlight responsive-table amber z-depth-5"><thead></thead><tbody><tr style="justify-content: space-around;overflow: auto;border-radius: 3%;max-width: 100%;height: auto;display: block;margin: auto;"><td style="vertical-align: top;text-align: left"><table class="striped centered highlight responsive-table amber z-depth-5"><tbody><td id="tdBusRes" style="width: 705px; height: 405px; padding: 0;">
                  <iframe 
                    class="z-depth-5 card-panel amber darken-0 scale-transition scale-out scale-in btn-large" 
                    src=""
                    id="busRes"
                    style= "width:'100%';height='100%'"
                    allow="autoplay"
                    allow="encrypted-media"
                    title="Dontime Life Website"
                    frameborder="0"
                    allowfullscreen
                    ></iframe></td></tbody></table></td></tr></tbody></table></div><div class="row"><div class="col s12 card-panel l12 m12 receipt red"><div class="container"><div class="z-depth-5 grey toolbar_icon toolbar_iconHover container col s12 receipt"><div class="col s12 l12 m12 receipt red"><input style="font-size:18pt;color:green" placeholder="research" class="timepicker flow-text menu-img z-depth-5 card-panel black scale-transition scale-out scale-in receipt btn-large" id="busSearch"  type="search" /></div></div></div></div></div></div></div></div><script>function serverside(func, args) {return new Promise((resolve, reject) => {google.script.run.withSuccessHandler((result) => {resolve(result)}).withFailureHandler((error) => {reject(error)}).runBoilerplate(func, args)})};var homeSearch 
  = document.getElementById("homeIndex");homeSearch.addEventListener("change",(e) => {const strValue 
  = homeSearch.value;var cap 
  = e.target.value;document.getElementById("homeIndex").value 
  = "";document.getElementById("indexLab").innerText 
  = "... waiting for " + strValue;serverside("mis", [cap]).then((vid) => {if (vid) {
  // User clicked "No" or X in the title bar.
  document.getElementById("indexLab").innerText 
  = "";if (vid.length === 99 || vid.length ===94 || vid.length === 83 || vid.length ===97 || vid.length ===101 || vid.length ===103 || vid.length ===136 || vid.length ===132 || vid.indexOf("&entry") > -1) {document.getElementById("indexRes").src 
  = vid}else {document.getElementById("tdIndexRes").innerHTML 
  = '<!DOCTYPE html><html><head><base target="_self"></head><body class="amber"><div class="amber" id="div">' + vid + '</div></body></html>'}}}).catch((er) => {alert(er);document.getElementById("indexLab").innerText 
  = er})});homeSearch.addEventListener('keypress', function(event) {
  // If the user preses the "Enter" key on the keyboard. 
  if (event.key === "Enter")  {const strValue 
  = homeSearch.value;if (!strValue) {document.getElementById("indexLab").innerText 
  = "... Loading";serverside("mis").then((stream) => {if (stream) {document.getElementById("indexLab").innerText 
  = "";if (stream.length === 99 || stream.length ===94 || stream.length === 83 || stream.length ===97 || stream.length ===101 || stream.length ===103 || stream.length ===136 || stream.length ===132 || stream.indexOf("&entry") > -1) {document.getElementById("indexRes").src 
  = stream}else {document.getElementById("indexRes").innerHTML 
  = '<!DOCTYPE html><html><head><base target="_self"></head><body class="amber"><div class="amber" id="div">' + stream + '</div></body></html>'}}else {document.getElementById("indexLab").innerText 
  =  e}}).catch((er) => {alert(er);document.getElementById("indexLab").innerText 
  = er})}}});var tube 
  = document.getElementById("tubeSearch");tube.addEventListener("change",(e) => {const strValue 
  = tube.value;var cap 
  = e.target.value;document.getElementById("tubeSearch").value 
  = "";document.getElementById("tubeLab").innerText 
  = "... waiting for " + strValue;serverside("mis", [cap]).then((vid) => {if (vid) {
 // User clicked "No" or X in the title bar.
  document.getElementById("tubeLab").innerText 
  = "";if (vid.length === 99 || vid.length ===94 || vid.length === 83 || vid.length ===97 || vid.length ===101 || vid.length ===103 || vid.length ===136 || vid.length ===132 || vid.indexOf("&entry") > -1) {document.getElementById("tubeRes").src 
  = vid}else {document.getElementById("tdTubeRes").innerHTML 
  = '<!DOCTYPE html><html><head><base target="_self"></head><body class="amber"><div class="amber" id="div">' + vid + '</div></body></html>'}}}).catch((er) => {alert(er);document.getElementById("tubeLab").innerText 
  =  er})});tube.addEventListener('keypress', function(event) {// If the user preses the "Enter" key on the keyboard. 
  if (event.key === "Enter")  {const strValue 
  = tube.value;if (!strValue) {document.getElementById("tubeLab").innerText 
  = "... Loading";serverside("mis").then((stream) => {if (stream) {document.getElementById("tubeLab").innerText 
  = "";if (stream.length === 99 || stream.length ===94 || stream.length === 83 || stream.length ===97 || stream.length ===101 || stream.length ===103 || stream.length ===136 || stream.length ===132 || stream.indexOf("&entry") > -1) {document.getElementById("tubeRes").src 
  = stream}else {document.getElementById("tdTubeRes").innerHTML 
  = '<!DOCTYPE html><html><head><base target="_self"></head><body class="amber"><div class="amber" id="div">' + stream + '</div></body></html>'}}else {document.getElementById("tubeLab").innerText 
  =  e}}).catch((er) => {alert(er);document.getElementById("tubeLab").innerText 
  =  er})}}});var bing 
  = document.getElementById("bingSearch");bing.addEventListener("change",(e) => {const strValue 
  = bing.value;var cap 
  = e.target.value;document.getElementById("bingSearch").value 
  = "";document.getElementById("bingLab").innerText 
  = "... waiting for " + strValue;serverside("mis", [cap]).then((vid) => {if (vid) {// User clicked "No" or X in the title bar.
  document.getElementById("bingLab").innerText 
  = "";if (vid.length === 99 || vid.length ===94 || vid.length === 83 || vid.length ===97 || vid.length ===101 || vid.length ===103 || vid.length ===136 || vid.length ===132 || vid.indexOf("&entry") > -1) {document.getElementById("bingRes").src 
  = vid}else {document.getElementById("tdBingRes").innerHTML 
  = '<!DOCTYPE html><html><head><base target="_self"></head><body class="amber"><div class="amber" id="div">' + vid + '</div></body></html>'}}}).catch((er) => {alert(er);document.getElementById("bingLab").innerText 
  =  er})});bing.addEventListener('keypress', function(event) {// If the user preses the "Enter" key on the keyboard. 
  if (event.key === "Enter")  {const strValue 
  = bing.value;if (!strValue) {document.getElementById("bingLab").innerText 
  = "... Loading";serverside("mis").then((stream) => {if (stream) {document.getElementById("bingLab").innerText 
  = "";if (stream.length === 99 || stream.length ===94 || stream.length === 83 || stream.length ===97 || stream.length ===101 || stream.length ===103 || stream.length ===136 || stream.length ===132 || stream.indexOf("&entry") > -1) {document.getElementById("bingRes").src 
  = stream}else {document.getElementById("tdBingRes").innerHTML 
  = '<!DOCTYPE html><html><head><base target="_self"></head><body class="amber"><div class="amber" id="div">' + stream + '</div></body></html>'}}else {document.getElementById("bingLab").innerText 
  =  e}}).catch((er) => {alert(er);document.getElementById("bingLab").innerText 
  =  er})}}});var busn 
  = document.getElementById("busSearch");busn.addEventListener("change",(e) => {const strValue 
  = busn.value;var cap 
  = e.target.value;document.getElementById("busSearch").value 
  = "";document.getElementById("busLab").innerText 
  = "... waiting for " + strValue;serverside("mis", [cap]).then((html) => {if (html) {// User clicked "No" or X in the title bar.
  document.getElementById("busLab").innerText 
  = "";if (html.length === 99 || html.length ===94 || html.length === 83 || html.length ===97 || html.length ===101 || html.length ===103 || html.length ===136 || html.length ===132 || html.indexOf("&entry") > -1) {document.getElementById("busRes").src 
  = html}else {document.getElementById("tdBusRes").innerHTML 
  = '<!DOCTYPE html><html><head><base target="_self"></head><body class="amber"><div class="amber" id="div">' + html + '</div></body></html>'}}}).catch((er) => {alert(er);document.getElementById("busLab").innerText 
  =  er})});busn.addEventListener('keypress', function(event) {// If the user preses the "Enter" key on the keyboard. 
  if (event.key === "Enter")  {const strValue
  = busn.value;if (!strValue) {document.getElementById("busLab").innerText 
  = "... Loading";serverside("mis").then((stream) => {if (stream) {document.getElementById("busLab").innerText 
  = "";if (stream.length === 99 || stream.length ===94 || stream.length === 83 || stream.length ===97 || stream.length ===101 || stream.length ===103 || stream.length ===136 || stream.length ===132 || stream.indexOf("&entry") > -1) {document.getElementById("busRes").src 
  = stream}else {document.getElementById("tdBusRes").innerHTML 
  = '<!DOCTYPE html><html><head><base target="_self"></head><body class="amber"><div class="amber" id="div">' + stream + '</div></body></html>'}}else {document.getElementById("busLab").innerText 
  =  e}}).catch((er) => {alert(er);document.getElementById("busLab").innerText 
  =  er})}}});var appSearch 
  = document.getElementById("uiApp");appSearch.addEventListener("change",(e) => {const bar 
  = e.target.value || "";document.getElementById("uiApp").value 
  = "";serverside("mis", [bar]).then((cChange) => {if (cChange) {// console.log(cChange)
  var cBlinkFollow 
  = document.createElement("a");if (cChange.length === 99 || cChange.length ===94 || cChange.length === 83 || cChange.length ===97 || cChange.length ===101 || cChange.length ===103 || cChange.length ===136 || cChange.length ===132 || cChange.indexOf("&entry") > -1) {cBlinkFollow.href 
  = cChange;};cBlinkFollow.id 
  = "cBlinkFOLLOW";cBlinkFollow.target 
  = "_blank";document.body.appendChild(cBlinkFollow);document.getElementById("cBlinkFOLLOW").click();document.getElementById("cBlinkFOLLOW").remove()}}).catch((er) => {alert(er)});serverside("mis", [bar]).then((cChange) => {if (cChange) {// console.log(cChange)
  var cdtlinkFollow 
  = document.createElement("a");if (cChange.length === 99 || cChange.length ===94 || cChange.length === 83 || cChange.length ===97 || cChange.length ===101 || cChange.length ===103 || cChange.length ===136 || cChange.length ===132 || cChange.indexOf("&entry") > -1) {cdtlinkFollow.href 
  = cChange;};cdtlinkFollow.id 
  = "cdtlinkFOLLOW";cdtlinkFollow.target 
  = "_blank";document.body.appendChild(cdtlinkFollow);document.getElementById("cdtlinkFOLLOW").click();document.getElementById("cdtlinkFOLLOW").remove()}}).catch((er) => {alert(er)});serverside("mis", [bar]).then((cChange) => {if (cChange) {// console.log(cChange)
  var gwilinkFollow 
  = document.createElement("a");if (cChange.length === 99 || cChange.length ===94 || cChange.length === 83 || cChange.length ===97 || cChange.length ===101 || cChange.length ===103 || cChange.length ===136 || cChange.length ===132 || cChange.indexOf("&entry") > -1) {gwilinkFollow.href 
  = cChange;};gwilinkFollow.id 
  = "gwilinkFOLLOW";gwilinkFollow.target 
  = "_blank";document.body.appendChild(gwilinkFollow);document.getElementById("gwilinkFOLLOW").click();document.getElementById("gwilinkFOLLOW").remove()}}).catch((er) => {alert(er)});serverside("mis", [bar]).then((cChange) => {if (cChange) {// console.log(cChange)
  var hlinkFollow 
  = document.createElement("a");if (cChange.length === 99 || cChange.length ===94 || cChange.length === 83 || cChange.length ===97 || cChange.length ===101 || cChange.length ===103 || cChange.length ===136 || cChange.length ===132 || cChange.indexOf("&entry") > -1) {hlinkFollow.href 
  = cChange;};hlinkFollow.id 
  = "hlinkFOLLOW";hlinkFollow.target 
  = "_blank";document.body.appendChild(hlinkFollow);document.getElementById("hlinkFOLLOW").click();document.getElementById("hlinkFOLLOW").remove()}}).catch((er) => {alert(er)})});appSearch.addEventListener('keypress', function(event) {var bar
  appSearch.addEventListener("change",(e) => {bar 
  = e.target.value || "";var foo 
  = [];alert(foo);var content 
  = [];alert(content);var argsObject 
  = serverside("misSt", [bar]).then((res)=>{return JSON.stringify(res)}).catch((er)=>{alert(er)})})// If the user preses the "Enter" key on the keyboard. 
  if (event.key === "Enter")  {serverside(foo, [content]).then((cChange) => {alert(cChange);var oulinkFollow 
  = document.createElement("a");if (cChange.length === 99 || cChange.length ===94 || cChange.length === 83 || cChange.length ===97 || cChange.length ===101 || cChange.length ===103 || cChange.length ===136 || cChange.length ===132 || cChange.indexOf("&entry") > -1) {oulinkFollow.href 
  = cChange;};oulinkFollow.id 
  = "oulinkFOLLOW";oulinkFollow.target 
  = "_blank";document.body.appendChild(oulinkFollow);document.getElementById("oulinkFOLLOW").click();document.getElementById("uiApp").value 
  = "";document.getElementById("oulinkFOLLOW").remove()}).catch((er) => {alert(er)})}})</script></body></html>`,
  )
    .evaluate()
    .getContent();
};
// <div class="row">
//   <nav class="col s10 push-s1 push-m1 push-l1 menu z-depth-5 card-panel amber scale-out scale-in" style="font-size: 30px">
//     <div class="container">
//       <div class="col s12 receipt nav-wrapper deep-purple darken-1">
//           <a href="#" onclick="aboutMeSearch()" target="_self" id="aboutme">About-Me</a><br />
//           <a href="#" onclick="shopResearch()" id="shopstore">Store</a><br />
//           <a href="#" onclick="secResearch()" id="secenv">Local Enviroment</a><br />
//           <a href="#" onclick="calcResearch()" id="calculate">Calculate</a><br />
//           <a href="#" onclick="investResearch()" id="invest">Investors</a><br />
//           <a href="#" onclick="newResearch()" id="rndnew">New</a><br />
//       </div></div>
//     </nav>
// </div>
// <div class="row">
//   <div class="col s10 card-panel amber push-s1 push-m1 push-l1">
//     <div class="container">
//       <div class="col s12 receipt deep-purple darken-1">
//         <div id="dlts"></div>
//       </div>
//     </div>
//   </div>
// </div>
// <div class="row">
//   <div class="col s10 card-panel amber push-s1 push-m1 push-l1">
//     <div class="container">
//       <div class="col s12 receipt deep-purple darken-1">
//         <label for="appList" class="active" style="font-size: 16px; top: -5px; left: -4px;">Choose your function...</label>
//           <select id="appList" class="browser-default deep-purple darken-1"></select>
//       </div>
//     </div>
//   </div>
// </div>

var contentApp = function (blob, argsObject) {
  console.log(
    Math.floor((maxTime - (new Date() % (1000 * 60))) / 1000) +
      "\n" +
      arguments.callee.name +
      "\nblob is !" +
      !blob +
      " = " +
      blob +
      "\nargsObject is !" +
      !argsObject +
      " = " +
      argsObject,
  );
  try {
    const tmp = HtmlService.createTemplate(
      ContentService.createTextOutput(blob)
        .setMimeType(ContentService.MimeType.JSON)
        .getContent(),
    );
    if (argsObject) {
      const keys = Object.keys(argsObject);
      keys.forEach(function (key) {
        tmp[key] = argsObject[key];
      });
    }
    return tmp
      .evaluate()
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
      .setSandboxMode(HtmlService.SandboxMode.IFRAME)
      .getContent();
  } catch (error) {
    console.log("error in contentApp: " + error);
    return "Error rendering template.";
  }
}; // or throw error.

// const tmp = ContentService.createTextOutput(JSON.stringify({ argsObject }));
// const argsObject = ContentService.createTextOutput({ args });
// if (argsObject) {
// if (ContentService.createTextOutput(JSON.stringify({ argsObject })).setMimeType(ContentService.MimeType.JSON).getContent()) {
// const keys = Object.keys(argsObject);
// tmp["list"] = htmlListArray;
// END IF
// Route[file] = argsObject
// return tmp.setMimeType(ContentService.MimeType.JSON).getContent()

var contentBlob = function (blob, argsObject) {
  var tmp = HtmlService.createTemplate(blob);
  if (argsObject) {
    var keys = Object.keys(argsObject);
    keys.forEach(function (key) {
      tmp[key] = argsObject[key];
    });
  }
  return tmp
    .evaluate()
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.SAMEORIGIN)
    .getContent();
};
// const tmp = ContentService.createTextOutput(JSON.stringify({ argsObject }));
// const argsObject = ContentService.createTextOutput({ args });
// if (argsObject) {
// if (ContentService.createTextOutput(JSON.stringify({ argsObject })).setMimeType(ContentService.MimeType.JSON).getContent()) {
// const keys = Object.keys(argsObject);
// tmp = ContentService.createTextOutput(tmp.evaluate().getContent()).getContent()
// tmp["list"] = htmlListArray;
// END IF
// Route[file] = argsObject
// return tmp.setMimeType(ContentService.MimeType.JSON).getContent()

var contentTemplate = function (file, argsObject) {
  var tmp = HtmlService.createTemplateFromFile(file);
  if (argsObject) {
    var keys = Object.keys(argsObject);
    keys.forEach(function (key) {
      tmp[key] = argsObject[key];
    });
  }
  return tmp
    .evaluate()
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.SAMEORIGIN)
    .getContent();
};
// const tmp = ContentService.createTextOutput(JSON.stringify({ argsObject }));
// const argsObject = ContentService.createTextOutput({ args });
// if (argsObject) {
// if (ContentService.createTextOutput(JSON.stringify({ argsObject })).setMimeType(ContentService.MimeType.JSON).getContent()) {
// const keys = Object.keys(argsObject);
// tmp = ContentService.createTextOutput(tmp.evaluate().getContent()).setMimeType(ContentService.MimeType.JAVASCRIPT).getContent()
// tmp["list"] = htmlListArray;
// END IF
// Route[file] = argsObject
// return tmp.setMimeType(ContentService.MimeType.JSON).getContent()

var contentCDN = function (url, argsObject) {
  var redirectURL = encodeURIComponent(
    url +
      "?" +
      Object.keys(argsObject)
        .map((key) => key + "=" + argsObject[key])
        .join("&"),
  );
  return HtmlService.createHtmlOutputFromFile("cors")
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL) //Important for CORS
    .setSandboxMode(HtmlService.SandboxMode.IFRAME)
    .addMetaTag("http-equiv", "refresh", "0; url=" + redirectURL);
};

var contentFile = function (file, argsObject) {
  const tmp = HtmlService.createTemplateFromFile(
    ContentService.createTextOutput(file)
      .setMimeType(ContentService.MimeType.JSON)
      .getContent(),
  );
  if (argsObject) {
    const keys = Object.keys(argsObject);
    keys.forEach(function (key) {
      tmp[key] = argsObject[key];
    });
  }
  return tmp
    .evaluate()
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
    .getContent();
};
// const tmp = ContentService.createTextOutput(JSON.stringify({ argsObject }));
// const argsObject = ContentService.createTextOutput({ args });
// if (argsObject) {
// if (ContentService.createTextOutput(JSON.stringify({ argsObject }))
//  .setMimeType(ContentService.MimeType.JSON).getContent())
//  {const keys = Object.keys(argsObject);
// tmp["list"] = htmlListArray;
// END IF
// Route[file] = argsObject
// return tmp.setMimeType(ContentService.MimeType.JSON).getContent()

function eTest() {
  console.log(Math.floor(maxTime - start / 1000));
}

var fiveTime = new Date(5 * 59.9 * 1000).getMilliseconds();

var fourTime = new Date(4 * 59.9 * 1000).getMilliseconds();

var include = function (file, argsObject) {
  console.log(JSON.stringify(this["start"]) + "\n" + arguments.callee.name);
  const tmp = HtmlService.createHtmlOutputFromFile(file);
  if (argsObject) {
    const keys = Object.keys(argsObject);

    keys.forEach(function (key) {
      tmp[key] = argsObject[key];
    });

    // tmp["list"] = htmlListArray;
  } // END IF
  // Route[file] = argsObject
  return tmp
    .asTemplate()
    .evaluate()
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.SAMEORIGIN)
    .getBlob()
    .getDataAsString();
};

var defSBD = function (e) {
  var args = [
    `index proMedia epaWebsite callBack oddChances jsGame checkOnDay uiAccess popUpOpen congressLeg congressMembers jFundamentals gnuFree myGNUFreeJS`,
  ]
    .toString()
    .split(" ")[
    Math.floor(
      Math.random() *
        Math.floor(
          [
            `index proMedia epaWebsite callBack oddChances jsGame checkOnDay uiAccess popUpOpen congressLeg congressMembers jFundamentals gnuFree myGNUFreeJS`,
          ]
            .toString()
            .split(" ").length,
        ),
    )
  ];
  try {
    if (!globalThis.hasOwnProperty(e.parameter["func"])) {
      // Get the actual function
      var foobarr = globalThis.renderFile;
      return renderTemplate(
        `<html id="defSBD"><head><base target="_top"><meta charset="utf-8"><meta name="Subscribe" content="Pro Media Snip"><meta name=viewport content="width=device-width, initial-scale=1"><link href="https://fonts.googleapis.com/css?family=Acme" rel="stylesheet"><style>
          body {
            flex-grow: 1;
            color:blue;
            text-decoration:bold;
            flex-flow: row wrap;
            grid-column: 1;
            grid-row: 1;
            text-align: center;
            align-content: flex-start;
            overflow: auto;
          }</style></head><body><div id="pageObj"></div><div><?!= renBlob ?></div></body><script> document.addEventListener("DOMContentLoaded", eRun);function eRun() {var pagE 
  = document.getElementById("pageObj");pagE.innerHTML 
  = <?= JSON.stringify(e) ?>}</script></html>`,
        {
          renBlob: contentApp(
            `<html id="defSBD"><head><base target="_top"><meta charset="utf-8"><meta name="doGet" content="Company get Function"><meta name=viewport content="width=device-width, initial-scale=1"><link href="https://fonts.googleapis.com/css?family=Acme" rel="stylesheet"><style>
            body {
              flex-grow: 1;
              color:blue;
              text-decoration:bold;
              flex-flow: row wrap;
              grid-column: 1;
              grid-row: 1;
              text-align: center;
              align-content: flex-start;
              overflow: auto;
            }</style></head><body><div id="coApp"><?= appL ?></div><div class="row"><div class="col s7 l7 m7 card-panel push-m2 push-s2 push-l2"><div class="video-container"> 
                <iframe 
                  src=""
                  id="indexBeta"
                  width="100%"
                  height="100%"
                  allow="autoplay"
                  allow="encrypted-media"
                  title="Dontime Life Website"
                  frameborder="0"
                  allowfullscreen
                  ></iframe></div></div></div><script>console.log("script is working");var coDaApp 
  = document.getElementById("coApp");var inDaApp 
  = document.getElementById("indexBeta");console.log(<?= appL ?>);if (typeof <?= appL ?> !== 'undefined') {console.log(<?= appL.length ?>);if (<?= vUrl(appL) ?>) {coDaApp.innerHTML 
  = "";inDaApp.src 
  = "<?= appL ?>"}else {inDaApp.src 
  = "https://www.clubhouse.com/@fabianlewis?utm_medium=ch_profile&utm_campaign=lhTUtHb2bYqPN3w8EEB7FQ-247242"}}else {console.error("appL is undefined");inDaApp.src 
  = "https://www.clubhouse.com/@fabianlewis?utm_medium=ch_profile&utm_campaign=lhTUtHb2bYqPN3w8EEB7FQ-247242";}</script></body></html>`,
            { appL: globalThis[foobarr].apply(this, [args]) },
          ),
          e: e,
        },
        args,
      );
    }
  } catch (error) {
    throw new Error(
      "File not found and global function does not exist: " + foobarr,
    );
  }
};
var freeSBD = function (func) {
  try {
    if (typeof globalThis[func] == "function") {
      // Get the actual function
      var foobarr = globalThis[func];
      return renderTemplate(
        `<html id="freeSBD"><head><base target="_top"><meta charset="utf-8"><meta name="Subscribe" content="Pro Media Snip"><meta name=viewport content="width=device-width, initial-scale=1"><link href="https://fonts.googleapis.com/css?family=Acme" rel="stylesheet"><style>
            body {
              flex-grow: 1;
              color:blue;
              text-decoration:bold;
              flex-flow: row wrap;
              grid-column: 1;
              grid-row: 1;
              text-align: center;
              align-content: flex-start;
              overflow: auto;
            }</style></head><body><div id="pageObj"></div><div><?!= renBlob ?></div></body><script> document.addEventListener("DOMContentLoaded", eRun);function eRun() {
          var pagE 
            = document.getElementById("pageObj");}</script></html>`,
        {
          renBlob: contentApp(
            `<html id="freeSBD"><head><base target="_top"><meta charset="utf-8"><meta name="doGet" content="Company get Function"><meta name=viewport content="width=device-width, initial-scale=1"><link href="https://fonts.googleapis.com/css?family=Acme" rel="stylesheet"><style>
            body {
              flex-grow: 1;
              color:blue;
              text-decoration:bold;
              flex-flow: row wrap;
              grid-column: 1;
              grid-row: 1;
              text-align: center;
              align-content: flex-start;
              overflow: auto;
            }</style></head><body><div id="coApp"><?= appL ?></div><div class="row"><div class="col s7 l7 m7 card-panel push-m2 push-s2 push-l2"><div class="video-container"> 
                <iframe 
                  src=""
                  id="indexBeta"
                  width="100%"
                  height="100%"
                  allow="autoplay"
                  allow="encrypted-media"
                  title="Dontime Life Website"
                  frameborder="0"
                  allowfullscreen
                  ></iframe></div></div></div><script>console.log("script is working");var coDaApp 
  = document.getElementById("coApp");var inDaApp 
  = document.getElementById("indexBeta");console.log(<?= appL ?>);if (typeof <?= appL ?> !== 'undefined') {console.log(<?= appL.length ?>);if (<?= vUrl(appL) ?>) {coDaApp.innerHTML 
  = "";inDaApp.src 
  = "<?= appL ?>"}else {inDaApp.src 
  = "https://www.clubhouse.com/@fabianlewis?utm_medium=ch_profile&utm_campaign=lhTUtHb2bYqPN3w8EEB7FQ-247242"}}else {console.error("appL is undefined");inDaApp.src 
  = "https://www.clubhouse.com/@fabianlewis?utm_medium=ch_profile&utm_campaign=lhTUtHb2bYqPN3w8EEB7FQ-247242";}</script></body></html>`,
            { appL: globalThis[func](), vUrl: isValidUrl },
          ),
        },
        foobarr,
      );
    } else {
      return;
    }
  } catch (error) {
    console.error(error);
    Logger.log("Error creating template from function: " + error);
    throw new Error(
      "Could not create template from file or function: " + foobarr,
    );
  }
};

var includeApp = function (blob, argsObject) {
  const tmp = HtmlService.createHtmlOutput(blob);
  if (argsObject) {
    const keys = Object.keys(argsObject);

    keys.forEach(function (key) {
      tmp[key] = argsObject[key];
    });

    // tmp["list"] = htmlListArray;
  } // END IF
  // Route[file] = argsObject
  return tmp
    .asTemplate()
    .evaluate()
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.SAMEORIGIN);
};

var includeBlob = function (file, argsObject) {
  if (file) {
    const temp = ContentService.createTextOutput(
      HtmlService.createTemplateFromFile(file).evaluate().getContent(),
    );
    const tmp = HtmlService.createTemplate(
      temp.setMimeType(ContentService.MimeType.TEXT).getContent(),
    );
    if (argsObject) {
      const keys = Object.keys(argsObject);
      keys.forEach(function (key) {
        tmp[key] = argsObject[key];
      });
      // tmp["list"] = htmlListArray;
    } // END IF;Route[file] = argsObject
    return tmp
      .evaluate()
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.SAMEORIGIN);
  }
};

var includeGSFile = function (file, argsArray) {
  var misStArrayFile = misSt(file, argsArray)
    ? console.log("misStArrayFile = " + typeof misStArrayFile)
    : console.error("misStArrayFile = " + typeof misStArrayFile);
  var misStArrayArgs = misSt(argsArray)
    ? console.log("misStArrayArgs = " + typeof misStArrayArgs)
    : console.error("misStArrayArgs = " + typeof misStArrayArgs);
  if (misStArrayFile.args) {
    var fileNames = misStArrayFile.args;
    if (fileNames) {
      file = [fileNames][0];
    } else {
      file = testlt();
    }
  } // else if (misStArrayArgs.args) {var fileNames
  // = misStArrayArgs.args;file
  // = [fileNames][0]}argsArray
  // = [fileNames].slice(1).toString().replace(/,/g, " ")var funcNames
  // =  misStArray.func;
  var tmp = {};
  var myApp = {
    appJS: () => {
      function serverSide(func, args) {
        "use strict";
        return new Promise((resolve, reject) => {
          google.script.run
            .withSuccessHandler((result) => {
              resolve(result);
            })
            .withFailureHandler((error) => {
              console.error(error);
              reject(error);
            })
            .runBoilerplate(func, args);
        });
      }
      // Expose serverSide to the global scope or a specific namespace
      window.serverSide = serverSide; // Or, if you have a namespace: myApp.serverSide = serverSide;
      if (argsArray) {
        // Optionally, if you want to run a specific function immediately:
        // (If argsArray is not defined, you can omit the args)
        if (file && typeof file === "string" && file.length > 0) {
          // basic validation
          if (argsArray && Array.isArray(argsArray)) {
            const freeCall = serverSide(file, argsArray)
              .then((result) => {
                // Handle the result of the initial server-side call
                console.log("Initial serverSide call result:", result);
              })
              .catch((error) => {
                // Handle errors from the initial server-side call
                console.error("Initial serverSide call error:", error);
              })
              ? console.log("freeCall = " + typeof freeCall)
              : console.error("freeCall = " + typeof freeCall);
          } else {
            const defCall = serverSide(file)
              .then((result) => {
                console.log("Initial serverSide call result:", result);
              })
              .catch((error) => {
                console.error("Initial serverSide call error:", error);
              })
              ? console.log("defCall = " + typeof defCall)
              : console.error("defCall = " + typeof defCall);
          }
        }
      }
    },
  };
  try {
    const keys = Object.keys(myApp);
    keys.forEach(function (key) {
      tmp[key] = [key];
    })
      ? console.log("keys = " + typeof keys)
      : console.error("keys = " + typeof keys);
  } catch (error) {
    console.error(error);
    return "Error in includeGSFile appJS " + error;
  }
  if (argsArray) {
    try {
      const keys = Object.keys(argsArray);
      keys.forEach(function (key) {
        tmp[key] = argsArray[key];
      })
        ? console.log("keys = " + typeof keys)
        : console.error("keys = " + typeof keys);
    } catch (error) {
      console.error(error);
      return "Error in includeGSFile args " + error;
    }
  }
  try {
    tmp = HtmlService.createTemplateFromFile(file)
      ? console.log("tmp = " + typeof tmp)
      : console.error("tmp = " + typeof tmp);
  } catch (error) {
    console.error(error);
  }
  Logger.log("Error creating template from file: " + error);
  if (typeof globalThis[file] == "function") {
    try {
      var content = ContentService.createTextOutput(globalThis[file]())
        .setMimeType(ContentService.MimeType.JSON)
        .getContent()
        ? console.log("content = " + typeof content)
        : console.error("content = " + typeof content);
      tmp = HtmlService.createTemplate(content)
        ? console.log("tmp = " + typeof tmp)
        : console.error("tmp = " + typeof tmp);
    } catch (error1) {
      console.error(error1);
      Logger.log("Error creating template from function: " + error1);
      throw new Error(
        "Could not create template from file or function: " + file,
      );
    }
  } else {
    throw new Error(
      "File not found and global function does not exist: " + file,
    );
  }
  return tmp
    .evaluate()
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.DEFAULT)
    .setSandboxMode(HtmlService.SandboxMode.IFRAME)
    .getContent();
};

var includeGSBlob = function (blob, argsObject) {
  return renderTemplate(`<?!= appJS ?>`, {
    appJS: async function () {
      try {
        const content = await serverSide(blob, argsObject);
        return content;
      } catch (error_1) {
        console.log(error_1);
      }
    },
  });
};

var includeRunIt = () => {
  // mis(
  //   `https://api.robinhood.com/instruments/?query=${encodeURIComponent("physical")}`,
  // );
  console.log(mis("rndCoin"));
};

var includeJs = function (blob, argsObject) {
  const tmp = HtmlService.createTemplate(blob);
  if (argsObject) {
    const keys = Object.keys(argsObject);

    keys.forEach(function (key) {
      tmp[key] = argsObject[key];
    });

    // tmp["list"] = htmlListArray;
  } // END IF
  // Route[file] = argsObject
  return tmp
    .evaluate()
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.SAMEORIGIN);
};

var maxTime = new Date(6 * 59.9 * 1000);

var myFunction = function (webApp, argsObject) {
  const tmp = HtmlService.createHtmlOutput(webApp);
  if (argsObject) {
    const keys = Object.keys(argsObject);

    keys.forEach(function (key) {
      tmp[key] = argsObject[key];
    });

    // tmp["list"] = htmlListArray;
  } // END IF
  // Route[file] = argsObject
  return tmp.setXFrameOptionsMode(HtmlService.XFrameOptionsMode.SAMEORIGIN);
};

var oneTime = new Date(59.9 * 1000).getMilliseconds();

var renderFile = function (file, argsObject, title) {
  console.log(
    Math.floor((maxTime - (new Date() % (1000 * 60))) / 1000) +
      "\n" +
      arguments.callee.name +
      "\nfile is !" +
      !file +
      " = " +
      file +
      "\nargsObject is !" +
      !argsObject +
      " = " +
      argsObject +
      "\ntitle is !" +
      !title +
      " = " +
      title,
  );
  try {
    if (file) {
      const tmp = HtmlService.createTemplateFromFile(file);
      if (argsObject) {
        const keys = Object.keys(argsObject);
        keys.forEach(function (key) {
          tmp[key] = argsObject[key];
        });
      }

      // tmp["list"] = htmlListArray;
      // END IF
      // Route[file] = argsObject
      // var research = geneFrame(seoSheet(coUtility()[0].rndTitle).url
      var funcCheck = appList();
      var schedule = dateTime(new Date());
      var html = contentApp(
        `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <?!= builtStyling().evaluate().getContent() ?>
        </head>
        <body id="renderFile">
      <div class="row">
      <div class="col s12 m12 l12 card-panel amber">
      <div class="responsive-section">
      <div class="container" style="clear: both">
      <div class="col s12 receipt red">
      <table class="striped centered highlight responsive-table grey z-depth-5" style="width:100%">
        <thead>
        </thead>
        <tbody>
          <tr>
            <td style="vertical-align: top;text-align: left">
              <table class="striped centered highlight responsive-table grey z-depth-5" style="width:100%">
                <tbody>
                  <td>
                    <div class="row"><p>
                    <p> To truly "own" something, beyond just having it issued, granted in custody, or being responsible for it, you generally need these key elements:</p>

                    <i>Legal Title:</i>
                    <p> This is the formal, legal recognition of your right to the property. It's often documented in official records, like a deed for real estate or a certificate of title for a vehicle. </p>
                    <i>Rights of Possession and Control: </i>
                    <p> This includes the right to use the property as you see fit (within legal limits), to exclude others from using it, and to determine what happens to it. </p>
                    <i>Right of Disposal:</i>
                    <p>This is the power to transfer ownership to someone else, whether by sale, gift, or inheritance. </p>
                    <i>Freedom from Competing Claims:</i>
                    <p> True ownership means that your right to the property is secure and not easily challenged by others. </p>
                    <i>Bearing the Burdens of Ownership:</i>
                    <p> This means that the owner is responsible for any liabilities, taxes, or maintainance associated with the property. </p>
                    </div>
                    <div class="row"><p>
                    <p> Is the conveyance of power and authority an objective, measurable quantity?</p><br />


                    <i>   No, the conveyance of power and authority is not inherently an objective, measurable quantity. Here's why:
                    <br />
                    <br />
                    </i>
                    <div class="row">
                          <p style="text-align: left">Subjectivity in Definition: Power and authority themselves are complex concepts with no single, universally agreed-upon definition. What constitutes "power" or "authority" can vary significantly depending on the context, the individuals involved, and the values held by the observer.</p>
                    <br />
                          <p style="text-align: left">Qualitative Aspects: The impact of power and authority often involves qualitative factors like influence, respect, legitimacy, and the consent of those subject to it. These are difficult to quantify precisely.</p>
                    <br />
                          <p style="text-align: left">Contextual Dependence: The effectiveness of the conveyance of power and authority depends heavily on the specific context – the social, political, and cultural environment in which it occurs.</p>
                    <br />
                    </div>
                    <i>
                          However, there are some aspects that can be measured or assessed to some degree:
                    <br />
                    <br />
                    </i>
                    <div class="row">
                          <p style="text-align: left">Visible Demonstrations: Observable actions like issuing commands, making decisions, controlling resources, or enforcing rules can provide evidence of the exercise of power.</p>
                    <br />
                          <p style="text-align: left">Compliance and Obedience: The extent to which others comply with the directives of an authority figure can be observed and, to some extent, measured.</p>
                    <br />
                          <p style="text-align: left">Social Influence: The ability to influence the beliefs, attitudes, or behaviors of others can be assessed through surveys, observations, or other social science research methods.</p>
                    <br />
                    </div>
                    <p style="text-align: left">
                          In conclusion: While some aspects of the conveyance of power and authority can be measured or assessed, it's crucial to acknowledge the inherent limitations and the significant role of subjective interpretation in understanding these complex phenomena.
                    <br />
                    </p>
                    </p>
                    </div>
                    <br />
                  </td>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
      </div></div></div></div></div>
      <script>
      document.querySelector("div").setAttribute("style", "color: blue; clear: both; text-align: center;");
      document.querySelector("body").setAttribute("style", "background-color: amber;background: 282828;");
      document.querySelector("iframe").setAttribute("style", "color: blue; clear: both; text-align: center;");
        function serverside(func, args) {
        return new Promise((resolve, reject) => {
          google.script.run
          .withSuccessHandler(result => {
              resolve(result)})
          .withFailureHandler(error => {
              reject(error)})
          .runBoilerplate(func, args)})}; 
          $(document).ready(function() {
            $('select').formSelect();

            $('#templateSelect').change(function() {
              var selectedTemplateUrl 
                = $(this).val();
                if (selectedTemplateUrl) {
                  $("#editorFrame").prop("src", selectedTemplateUrl); // Load template in iframe
                  $("#myForm").show(); // Show the form only after template is loaded.
                  $("#myForm").empty(); // Clear previous form fields.
                  // 2. Dynamically create form fields based on template placeholders (requires server-side)
                  serverside("getPlaceholders",[selectedTemplateUrl]).then((placeholders)=>{
                    placeholders.forEach(function(placeholder) {
                      var fieldName 
                        = placeholder.replace(/{{|}}/g, ''); // Extract field name
                      $("#myForm").append("<label for='" + fieldName + "'>" + fieldName + ":</label><br>");
                      $("#myForm").append("<input type='text' name='" + fieldName + "'><br>");
                    });
                    $("#myForm").append("<button type='submit'>Submit</button>");


                    $("#myForm").submit(function(event) {
                      event.preventDefault();

                      var formData 
                        = $(this).serializeObject();
                      serverside("processFormData",[formData, selectedTemplateUrl]).then((newDocUrl)=>{
                        $("#result").html("<p>Document created. <a href='" + newDocUrl + "' target='_blank'>Open Document</a></p>");
                      }).catch((error)=>{
                        console.error("Error:", error);
                        $("#result").html("<p>Error creating document. Please check the logs.</p>");
                      })

                    });

                  }).catch((er)=>{alert(er);console.error("Error:", er);return "Error" + er})}else {
                $("#editorFrame").prop("src", "");
                $("#myForm").hide();}
            });

            $.fn.serializeObject = function() { // jQuery plugin for serializing form data
              var o 
                = {};
              var a 
                = this.serializeArray();
              $.each(a, function() {
                if (o[this.name] !== undefined) {
                  if (!o[this.name].push) {
                    o[this.name] = [o[this.name]];
                  }
                  o[this.name].push(this.value || '');
                } else {
                  o[this.name] = this.value || '';
                }
              });
              return o;
            };
          });
        function submitDomain(formData) {
          serverside("submitDomain", [formData])
            .then(result => {
              console.log("Server response:", result);
              $("#successMessage").text(result); // Display success message
            })
            .catch(error => {
              console.error("Error submitting domain:", error);
              $("#errorMessage").text(error); // Display error message
            });
        }

        $("#domainForm").submit(function(event) {
          event.preventDefault();
          const formData = $(this).serializeObject();
          submitDomain(formData); // Call the function
        });

        function lookupDomain(searchTerm) {
          serverside("lookupDomain", [searchTerm])
            .then(results => {
              console.log("Lookup results:", results);
              displaySearchResults(results); // Display results
            })
            .catch(error => {
              console.error("Error looking up domain:", error);
              $("#errorMessage").text(error); // Display error message
            });
        }

        $("#lookupButton").click(function() {
          const searchTerm = $("#searchTerm").val();
          lookupDomain(searchTerm);
        });

        var busa = document.getElementById("artiicleIndex");
        var busx = document.getElementById("loadingLab");
        var busc = document.getElementById("contentDiv");
        busa.addEventListener('keypress', function(event) {
          // If the user preses the "Enter" key on the keyboard. 
          if (event.key === "Enter")  {
            const strValue = busa.value;
            busx.innerText = "... waiting for " + strValue;
            serverside("jFund", strValue)
            .then((article) => {
              if (article) {
                // User clicked "No" or X in the title bar.
                busx.innerText = ""
                busc.innerHTML = article;}})
            .catch((er) => {
              console.log(er)
              busx.innerText = JSON.stringify(er)})
            busa.value = ""}})
      </script>
      <script>document.getElementById('func').addEventListener('change', <?!= funcClicked ?>)</script>
      <script>document.getElementById('args').addEventListener('change', <?!= argsClicked ?>)</script>
      <input type="hidden" value="<?= getUrl(ScriptApp) ?>" id="url" />
    </body>
  </html>`,
        {
          funcClicked: function () {
            //console.log(document.getElementById("test").innerHTML)
            // Init a timeout variable to be used below
            let timeout = null;
            (() => {
              // Clear the timeout if it has already been set.
              // This will prevent the previous task from executing
              // if it has been less than <MILLISECONDS>
              // clearTimeout(timeout);
              // Make a new timeout set to go off in 1000ms (1 second)
              // timeout = setTimeout
              // (function  ()
              // {console.log('Input Value:', textInput.value);}, 5000)();
              if (typeof url === "undefined") {
                var urlData = document.getElementById("url").value;
                var url = urlData.toString();
              }
              var func = document.getElementById("func").value;
              var args = document.getElementById("args").value;
              if (typeof args !== "undefined") {
                var linkFollow = document.createElement("a");
                linkFollow.href =
                  url +
                  "?func=" +
                  encodeURIComponent(func) +
                  "&args=" +
                  encodeURIComponent(args);
                linkFollow.id = "linkFOLLOW";
                linkFollow.target = "_top";
                document.body.appendChild(linkFollow);
                document.getElementById("linkFOLLOW").click();
                document.getElementById("linkFOLLOW").remove();
              }
            })();
          },
          argsClicked: function () {
            //console.log(document.getElementById("test").innerHTML)
            // Init a timeout variable to be used below
            let timeout = null;
            (() => {
              // Clear the timeout if it has already been set.
              // This will prevent the previous task from executing
              // if it has been less than <MILLISECONDS>
              // clearTimeout(timeout);
              // Make a new timeout set to go off in 1000ms (1 second)
              // timeout = setTimeout
              // (function  ()
              // {console.log('Input Value:', textInput.value);}, 5000)();
              if (typeof url === "undefined") {
                var urlData = document.getElementById("url").value;
                var url = urlData.toString();
              }
              var func = document.getElementById("func").value;
              var args = document.getElementById("args").value;
              if (typeof func !== "undefined") {
                var linkFollow = document.createElement("a");
                linkFollow.href =
                  url +
                  "?func=" +
                  encodeURIComponent(func) +
                  "&args=" +
                  encodeURIComponent(args);
                linkFollow.id = "linkFOLLOW";
                linkFollow.target = "_top";
                document.body.appendChild(linkFollow);
                document.getElementById("linkFOLLOW").click();
                document.getElementById("linkFOLLOW").remove();
              }
            })();
          },
        },
      );
      return tmp
        .evaluate()
        .setTitle(title)
        .append(html)
        .setSandboxMode(HtmlService.SandboxMode.IFRAME)
        .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
    } else {
      return handleRequest(argsObject);
    }
  } catch (error) {
    console.log("error in renderTemplate: " + error);
    return "Error rendering template.";
  }
};

var renderTemplate = function (blob, argsObject, title) {
  console.log(
    Math.floor((maxTime - (new Date() % (1000 * 60))) / 1000) +
      "\n" +
      arguments.callee.name,
  );
  const tmp = HtmlService.createTemplate(blob);
  if (argsObject) {
    try {
      const keys = Object.keys(argsObject);
      keys.forEach(function (key) {
        tmp[key] = argsObject[key];
      });
    } catch (error) {
      return "Error in renderTemplate tmp" + error;
    }
  }
  var funcCheck = appList();
  var css = builtStyling();
  var schedule = dateTime(new Date());
  // var research = geneFrame(seoSheet(coUtility()[0].rndTitle).url)
  try {
    var html = contentApp(
      `
    <html id="renderTemplate">
      <head>
        <?!= builtStyling().evaluate().getContent() ?>
      </head>
      <body>
      <div class="row">
      <div class="col s12 card-panel amber">
      <div class="responsive-section">
      <div class="container">
      <div class="col s12 receipt red">
      <table class="striped centered highlight responsive-table grey z-depth-5" style="width:100%">
        <thead>
        </thead>
        <tbody>
          <tr style="justify-content: space-around;overflow: auto;border-radius: 3%;max-width: 100%;height: auto;display: block;margin: auto;">
            <td style="vertical-align: top;text-align: left;flex-flow: row wrap;grid-column: 1;grid-row: 1;align-content: flex-start;z-index: 0;height: 100%;overflow: auto;">
              <table class="striped centered highlight responsive-table grey z-depth-5" style="width:100%">
                <tbody>
                  <td>
                    <div><p>
                    <p> Is the conveyance of power and authority an objective, measurable quantity?</p><br />


                    <i>   No, the conveyance of power and authority is not inherently an objective, measurable quantity. Here's why:
                    <br />
                    <br />
                    </i>
                    <div>
                          <p style="text-align: left">Subjectivity in Definition: Power and authority themselves are complex concepts with no single, universally agreed-upon definition. What constitutes "power" or "authority" can vary significantly depending on the context, the individuals involved, and the values held by the observer.</p>
                    <br />
                          <p style="text-align: left">Qualitative Aspects: The impact of power and authority often involves qualitative factors like influence, respect, legitimacy, and the consent of those subject to it. These are difficult to quantify precisely.</p>
                    <br />
                          <p style="text-align: left">Contextual Dependence: The effectiveness of the conveyance of power and authority depends heavily on the specific context – the social, political, and cultural environment in which it occurs.</p>
                    <br />
                    </div>
                    <i>
                          However, there are some aspects that can be measured or assessed to some degree:
                    <br />
                    <br />
                    </i>
                    <div>
                          <p style="text-align: left">Visible Demonstrations: Observable actions like issuing commands, making decisions, controlling resources, or enforcing rules can provide evidence of the exercise of power.</p>
                    <br />
                          <p style="text-align: left">Compliance and Obedience: The extent to which others comply with the directives of an authority figure can be observed and, to some extent, measured.</p>
                    <br />
                          <p style="text-align: left">Social Influence: The ability to influence the beliefs, attitudes, or behaviors of others can be assessed through surveys, observations, or other social science research methods.</p>
                    <br />
                    </div>
                    <p style="text-align: left">
                          In conclusion: While some aspects of the conveyance of power and authority can be measured or assessed, it's crucial to acknowledge the inherent limitations and the significant role of subjective interpretation in understanding these complex phenomena.
                    <br />
                    </p>
                    </p>
                    </div>
                    <br />
                  </td>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
      </div></div></div></div></div>
        <script>
          function serverside(func, args) {
          return new Promise((resolve, reject) => {
            google.script.run
            .withSuccessHandler(result => {
                resolve(result)})
            .withFailureHandler(error => {
                reject(error)})
            .runBoilerplate(func, args)})};
          $(document).ready(function() {
            $('select').formSelect();

            $('#templateSelect').change(function() {
              var selectedTemplateUrl 
                = $(this).val();
                if (selectedTemplateUrl) {
                  $("#editorFrame").prop("src", selectedTemplateUrl); // Load template in iframe
                  $("#myForm").show(); // Show the form only after template is loaded.
                  $("#myForm").empty(); // Clear previous form fields.
                  // 2. Dynamically create form fields based on template placeholders (requires server-side)
                  serverside("getPlaceholders",[selectedTemplateUrl]).then((placeholders)=>{
                    placeholders.forEach(function(placeholder) {
                      var fieldName 
                        = placeholder.replace(/{{|}}/g, ''); // Extract field name
                      $("#myForm").append("<label for='" + fieldName + "'>" + fieldName + ":</label><br>");
                      $("#myForm").append("<input type='text' name='" + fieldName + "'><br>");
                    });
                    $("#myForm").append("<button type='submit'>Submit</button>");


                    $("#myForm").submit(function(event) {
                      event.preventDefault();

                      var formData 
                        = $(this).serializeObject();
                      serverside("processFormData",[formData, selectedTemplateUrl]).then((newDocUrl)=>{
                        $("#result").html("<p>Document created. <a href='" + newDocUrl + "' target='_blank'>Open Document</a></p>");
                      }).catch((error)=>{
                        console.error("Error:", error);
                        $("#result").html("<p>Error creating document. Please check the logs.</p>");
                      })

                    });

                  }).catch((er)=>{alert(er);console.error("Error:", er);return "Error" + er})}else {
                $("#editorFrame").prop("src", "");
                $("#myForm").hide();}
            });

            $.fn.serializeObject = function() { // jQuery plugin for serializing form data
              var o 
                = {};
              var a 
                = this.serializeArray();
              $.each(a, function() {
                if (o[this.name] !== undefined) {
                  if (!o[this.name].push) {
                    o[this.name] = [o[this.name]];
                  }
                  o[this.name].push(this.value || '');
                } else {
                  o[this.name] = this.value || '';
                }
              });
              return o;
            };
          });
        function submitDomain(formData) {
          serverside("submitDomain", [formData])
            .then(result => {
              console.log("Server response:", result);
              $("#successMessage").text(result); // Display success message
            })
            .catch(error => {
              console.error("Error submitting domain:", error);
              $("#errorMessage").text(error); // Display error message
            });
        }

        $("#domainForm").submit(function(event) {
          event.preventDefault();
          const formData = $(this).serializeObject();
          submitDomain(formData); // Call the function
        });

        function lookupDomain(searchTerm) {
          serverside("lookupDomain", [searchTerm])
            .then(results => {
              console.log("Lookup results:", results);
              displaySearchResults(results); // Display results
            })
            .catch(error => {
              console.error("Error looking up domain:", error);
              $("#errorMessage").text(error); // Display error message
            });
        }

        $("#lookupButton").click(function() {
          const searchTerm = $("#searchTerm").val();
          lookupDomain(searchTerm);
        });

        var busa = document.getElementById("artiicleIndex");
        var busx = document.getElementById("loadingLab");
        var busc = document.getElementById("contentDiv");
        busa.addEventListener('keypress', function(event) {
          // If the user preses the "Enter" key on the keyboard. 
          if (event.key === "Enter")  {
            const strValue = busa.value;
            busx.innerText = "... waiting for " + strValue;
            serverside("jFund", strValue)
            .then((article) => {
              if (article) {
                // User clicked "No" or X in the title bar.
                busx.innerText = ""
                busc.innerHTML = article;}})
            .catch((er) => {
              console.log(er)
              busx.innerText = JSON.stringify(er)})
            busa.value = ""}})
      </script>
        <script>document.getElementById('func').addEventListener('change', <?!= funcClicked ?>)</script>
        <script>document.getElementById('args').addEventListener('change', <?!= argsClicked ?>)</script>
        <input type="hidden" value="<?= getUrl(ScriptApp) ?>" id="url" />
      </body>
    </html>
  <div id="result"></div>
  <div id="successMessage"></div>
  <div id="errorMessage"></div>
  <table id="resultsTable"></table>`,
      {
        funcClicked: function () {
          //console.log(document.getElementById("test").innerHTML)
          // Init a timeout variable to be used below
          let timeout = null;
          (() => {
            // Clear the timeout if it has already been set.
            // This will prevent the previous task from executing
            // if it has been less than <MILLISECONDS>
            // clearTimeout(timeout);
            // Make a new timeout set to go off in 1000ms (1 second)
            // timeout = setTimeout
            // (function  ()
            // {console.log('Input Value:', textInput.value);}, 5000)();
            if (typeof url === "undefined") {
              var urlData = document.getElementById("url").value;
              var url = urlData.toString();
            }
            var func = document.getElementById("func").value;
            var args = document.getElementById("args").value;
            if (typeof args !== "undefined") {
              var linkFollow = document.createElement("a");
              linkFollow.href =
                url +
                "?func=" +
                encodeURIComponent(func) +
                "&args=" +
                encodeURIComponent(args);
              linkFollow.id = "linkFOLLOW";
              linkFollow.target = "_top";
              document.body.appendChild(linkFollow);
              document.getElementById("linkFOLLOW").click();
              document.getElementById("linkFOLLOW").remove();
            }
          })();
        },
        argsClicked: function () {
          //console.log(document.getElementById("test").innerHTML)
          // Init a timeout variable to be used below
          let timeout = null;
          (() => {
            // Clear the timeout if it has already been set.
            // This will prevent the previous task from executing
            // if it has been less than <MILLISECONDS>
            // clearTimeout(timeout);
            // Make a new timeout set to go off in 1000ms (1 second)
            // timeout = setTimeout
            // (function  ()
            // {console.log('Input Value:', textInput.value);}, 5000)();
            if (typeof url === "undefined") {
              var urlData = document.getElementById("url").value;
              var url = urlData.toString();
            }
            var func = document.getElementById("func").value;
            var args = document.getElementById("args").value;
            if (typeof func !== "undefined") {
              var linkFollow = document.createElement("a");
              linkFollow.href =
                url +
                "?func=" +
                encodeURIComponent(func) +
                "&args=" +
                encodeURIComponent(args);
              linkFollow.id = "linkFOLLOW";
              linkFollow.target = "_top";
              document.body.appendChild(linkFollow);
              document.getElementById("linkFOLLOW").click();
              document.getElementById("linkFOLLOW").remove();
            }
          })();
        },
      },
    );
  } catch (error) {
    console.error("Error rendering template:", error, error.stack);
    return (
      "Error in rendertemplate html: " + errortoString() + "\n" + error.stack
    );
  }
  return tmp
    .evaluate()
    .setTitle(title)
    .append(html)
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
    .setSandboxMode(HtmlService.SandboxMode.IFRAME);
}; // or throw error.

// Gets a cache that is common to all users of the script
var sCache = CacheService.getScriptCache();

var start = new Date(0.1 * 1000).getMilliseconds();

var tagBuilder = function (content) {
  console.log(JSON.stringify(this["start"]) + "\n" + arguments.callee.name);
  const htmlBody = contentApp(content);
  return htmlBody;
};

var threeTime = new Date(3 * 59.9 * 1000).getMilliseconds();

var twoTime = new Date(2 * 59.9 * 1000).getMilliseconds();

var wildSBD = function (e) {
  var args = e.parameter["args"];
  try {
    if (
      globalThis.hasOwnProperty(e.parameter["func"]) &&
      typeof globalThis[e.parameter["func"]] === "function"
    ) {
      // Get the actual function
      var foobarr = globalThis[e.parameter["func"]];
      return renderTemplate(
        `<html id="wildSBD"><head><base target="_top"><meta charset="utf-8"><meta name="Subscribe" content="Pro Media Snip"><meta name=viewport content="width=device-width, initial-scale=1"><link href="https://fonts.googleapis.com/css?family=Acme" rel="stylesheet"><style>

            body {

              flex-grow: 1;
              color:blue;
              text-decoration:bold;
              flex-flow: row wrap;
              grid-column: 1;
              grid-row: 1;
              text-align: center;
              align-content: flex-start;
              overflow: auto;
            }
        </style></head><body><div id="pageObj"></div><div><?!= renBlob ?></div></body><script> document.addEventListener("DOMContentLoaded", eRun);function eRun() {
          var pagE 
            = document.getElementById("pageObj");
          pagE.innerHTML = <?= JSON.stringify(e) ?>}</script></html>`,
        {
          renBlob: contentApp(
            `<html id="wildSBD"><head><base target="_top"><meta charset="utf-8"><meta name="doGet" content="Company get Function"><meta name=viewport content="width=device-width, initial-scale=1"><link href="https://fonts.googleapis.com/css?family=Acme" rel="stylesheet"><style>

            body {

              flex-grow: 1;
              color:blue;
              text-decoration:bold;
              flex-flow: row wrap;
              grid-column: 1;
              grid-row: 1;
              text-align: center;
              align-content: flex-start;
              overflow: auto;
            }
        </style></head><body><div id="coApp"><?= appL ?></div><div class="row"><div class="col s7 l7 m7 card-panel push-m2 push-s2 push-l2"><div class="video-container"> 
                <iframe 
                  src=""
                  id="indexBeta"
                  width="100%"
                  height="100%"
                  allow="autoplay"
                  allow="encrypted-media"
                  title="Dontime Life Website"
                  frameborder="0"
                  allowfullscreen
                  ></iframe>
            </div></div></div><script>console.log("script is working");
              var coDaApp 
                = document.getElementById("coApp");
              var inDaApp 
                = document.getElementById("indexBeta");console.log(<?= appL ?>);if (typeof <?= appL ?> !== 'undefined') {console.log(<?= appL.length ?>);if (<?= vUrl(appL) ?>) {
              coDaApp.innerHTML 
                = "";
              inDaApp.src 
                = "<?= appL ?>"}else {
              inDaApp.src 
                = "https://www.clubhouse.com/@fabianlewis?utm_medium=ch_profile&utm_campaign=lhTUtHb2bYqPN3w8EEB7FQ-247242"}}else {console.error("appL is undefined");
              inDaApp.src 
                = "https://www.clubhouse.com/@fabianlewis?utm_medium=ch_profile&utm_campaign=lhTUtHb2bYqPN3w8EEB7FQ-247242";}</script></body></html>`,
            {
              appL: globalThis[e.parameter["func"]].apply(this, [args]),
            },
          ),

          e: e,
        },
        args,
      );
    }
  } catch (error) {
    console.error(error);
    Logger.log("Error creating template from function: " + error);
    throw new Error(
      "Could not create template from file or function: " + foobarr,
    );
  }
};
