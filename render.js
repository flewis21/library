class AppList {
  constructor(appTemplate) {
    this.appTemplate = appTemplate;
  }
  static listapps () {
    console.log(autoGlobe.functionRegistry.time);
    appTemplate =  HtmlService.createTemplate(
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
  res() {
    return this.appTemplate
  };
}

// <div class="row">
//   <nav class="col s10 push-s1 push-m1 push-l1 menu z-depth-5 card-panel amber scale-out scale-in" style="font-size: 30px">
//     <div class="container">
//       <div class="col s12 receipt nav-wrapper deep-purple darken-1">
//           <a href="javascript:void(0)" onclick="aboutMeSearch()" target="_self" id="aboutme">About-Me</a><br />
//           <a href="javascript:void(0)" onclick="shopResearch()" id="shopstore">Store</a><br />
//           <a href="javascript:void(0)" onclick="secResearch()" id="secenv">Local Enviroment</a><br />
//           <a href="javascript:void(0)" onclick="calcResearch()" id="calculate">Calculate</a><br />
//           <a href="javascript:void(0)" onclick="investResearch()" id="invest">Investors</a><br />
//           <a href="javascript:void(0)" onclick="newResearch()" id="rndnew">New</a><br />
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

class Renderer {
  constructor (payLoad, argsObject, title) {
    // super()
    this.file = autoGlobe.functionRegistry.getHtmlList()[Math.floor(Math.random() * 25)]
    this.payLoad = payLoad;
    this.argsObject = argsObject;
    this.title = title;
    if (Array.isArray(this.argsObject)) {
      if (this.argsObject.length !== 0) {
        this.blob = new RenderTemplate(this.payLoad, this.argsObject, this.title || this.argsObject.payL.title);
        // let renderIt = startRenderer("<div>Hello World!</div>", dataOR.pL.data,dataOR.title);
      }
    }
    else {
      if (typeof this.argsObject === "object" && !Array.isArray(this.argsObject)) {
        if (this.argsObject !== null && Object.keys(this.argsObject).length > 0 && !this.argsObject?.myVar && !this.argsObject?.myNewArr && !Object.keys(this.argsObject)[0]?.rndTitle && typeof Object.keys(this.argsObject)[0] !== "number") {
          this.blob = new RenderTemplate(this.payLoad, this.argsObject, this.title || this.argsObject.payL.title);
          // let renderIt = startRenderer("<div>Hello World!</div>", dataOR.pL.data,dataOR.title);
        }
      }
      else {
        if (typeof this.argsObject === "string") {
          if (String(this.argsObject).length > 0) {
            this.blob = this.argsObject;
              // let renderIt = startRenderer("<div>Hello World!</div>", dataOR.pL.data,dataOR.title);
          }
        }
      }
    }
  }
}

var startRenderer = function(payLoad, argsObject, title) {
  console.log("event; startRenderer called: payLoad -", payLoad);
  console.log("event; startRenderer called: argsObject -", JSON.stringify(argsObject));
  console.log("event; startRenderer called: title -", title);
  let blob = new Renderer(payLoad, argsObject, title);
  return blob;
}

class ContentApp extends Renderer {
  constructor(blob, argsObject) {
    super();
    this.blob = blob;
    this.argsObject = argsObject;
    console.log(
      "boilerplate render: line 201\ncontentApp(blob: " +
        this.blob?.slice(0, 130) +
        "..., argsObject: " +
        JSON.stringify(this.argsObject)?.slice(0, 130) +
        ")",
    );
    console.log(
      autoGlobe.functionRegistry.time +
        "\nBlob is !" +
        !this.blob +
        " = " +
        this.blob.substring(0, 130) +
        "...\nargsObject is !" +
        !this.argsObject +
        " = " +
        JSON.stringify(this.argsObject).slice(0, 130),
    );
    this.api = null;
    try {
      this.api = ContentService.createTextOutput(this.blob)
        .setMimeType(ContentService.MimeType.JSON)
        .getContent();
    } catch (error) {
      console.log("error in contentApp: " + error);
      console.error(
        "Error in contentApp JSON: " + error.toString() + "\n" + error.stack,
      );
    }

    this.tmp;
    try {
      this.tmp = HtmlService.createTemplate(this.api);
    } catch (error) {
      console.log("error in contentApp: " + error);
      console.error(
        "Error in contentApp HTML template: " +
          error.toString() +
          "\n" +
          error.stack,
      );
    }
    try {
      if (this.argsObject) {
        this.keys = Object.keys(this.argsObject);
        let shortTmp = this.tmp;
        let shortObj = this.argsObject;
        this.keys.forEach(function (key) {
          shortTmp[key] = shortObj[key];
        });
        this.tmp = shortTmp;
      }
    } catch (error) {
      console.log("error in contentApp: " + error);
      console.error(
        "Error in contentApp template: " + error.toString() + "\n" + error.stack,
      );
    }
    try {
      this.tmp
          .evaluate()
          .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
          // .setSandboxMode(HtmlService.SandboxMode.IFRAME)
          .getContent()
    } catch (error) {
      console.log("error in contentApp: " + error);
      console.error(
        "Error in contentApp evaluation: " +
          error.toString() +
          "\n" +
          error.stack,
      );
    }
  }


  static appContent (blob, argsObject) {
    console.log(
      "boilerplate render: line 201\ncontentApp(blob: " +
        blob.slice(0, 130) +
        "..., argsObject: " +
        JSON.stringify(argsObject)?.slice(0, 130) +
        ")",
    );
    console.log(
      autoGlobe.functionRegistry.time +
        "\nBlob is !" +
        !blob +
        " = " +
        blob.substring(0, 130) +
        "...\nargsObject is !" +
        !argsObject +
        " = " +
        JSON.stringify(argsObject).slice(0, 130),
    );
    let api;
    try {
      api = ContentService.createTextOutput(blob)
        .setMimeType(ContentService.MimeType.JSON)
        .getContent();
    } catch (error) {
      console.log("error in contentApp: " + error);
      throw new Error(
        "Error in contentApp JSON: " + error.toString() + "\n" + error.stack,
      );
    }

    let tmp;
    try {
      tmp = HtmlService.createTemplate(api);
    } catch (error) {
      console.log("error in contentApp: " + error);
      throw new Error(
        "Error in contentApp HTML template: " +
          error.toString() +
          "\n" +
          error.stack,
      );
    }
    try {
      if (argsObject) {
        const keys = Object.keys(argsObject);
        keys.forEach(function (key) {
          tmp[key] = argsObject[key];
        });
      }
    } catch (error) {
      console.log("error in contentApp: " + error);
      throw new Error(
        "Error in contentApp template: " + error.toString() + "\n" + error.stack,
      );
    }
    try {
      return tmp
          .evaluate()
          .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
          // .setSandboxMode(HtmlService.SandboxMode.IFRAME)
          .getContent()
    } catch (error) {
      console.log("error in contentApp: " + error);
      throw new Error(
        "Error in contentApp evaluation: " +
          error.toString() +
          "\n" +
          error.stack,
      );
    }
  }; // or throw error.
  res() {
    return this.tmp
  };
}

var tentApp = function(blob, argsObject) {
  console.log("event; ContentApp called: blob -", blob);
  console.log("event; ContentApp called: argsObject -", JSON.stringify(argsObject));
  let renderStart = new Renderer(blob, argsObject);
  return renderStart;
}
// const tmp = ContentService.createTextOutput(JSON.stringify({ argsObject }));
// const argsObject = ContentService.createTextOutput({ args });
// if (argsObject) {
// if (ContentService.createTextOutput(JSON.stringify({ argsObject })).setMimeType(ContentService.MimeType.JSON).getContent()) {
// const keys = Object.keys(argsObject);
// tmp["list"] = htmlListArray;
// END IF
// Route[file] = argsObject
// return tmp.setMimeType(ContentService.MimeType.JSON).getContent()

class ContentBlob {
  constructor (blob, argsObject) {
  var tmp = HtmlService.createTemplate(blob);
    if (argsObject) {
      var keys = Object.keys(argsObject);
      keys.forEach(function (key) {
        tmp[key] = argsObject[key];
      });
    }
    this.tmp = tmp
      .evaluate()
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
      .getContent();
  };
  res() {
    return this.tmp
  };
}

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

class ContentTemplate {
  constructor (file, argsObject) {
    try {
      var tmp = HtmlService.createTemplateFromFile(file);
      if (argsObject) {
        var keys = Object.keys(argsObject);
        keys.forEach(function (key) {
          tmp[key] = argsObject[key];
        });
      }
      this.tmp = tmp
        .evaluate()
        .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
        .getContent();
    } catch (error) {
      console.error("Exception: ", error.toString());
    }
  };
  res() {
    return this.tmp
  };
}


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

class ContentCDN extends Renderer {
  constructor (url, argsObject) {
    super();
    let payType = argsObject?.payL?.pL?.type;
    let mContent = argsObject?.payL?.message?.content;
    let mInfo = argsObject?.payL?.message?.info;
    let contentMessage = "";
    let locObj = "";
    let html = "";
    let wATitle = null;
    let cdnOutput = "";
    let infoMessage = "";
    let tmp = "";
    let keys = "";
    // console.log("contentCDN = function (url, argsObject) ", url, argsObject);
    try {
      console.log("cdnData argsObject before tmp processing", argsObject);
      tmp = HtmlService.createHtmlOutputFromFile("cors")
      if (argsObject) {
        keys = Object.keys(argsObject);
        keys.forEach(function (key) {
          tmp[key] = argsObject[key];
          console.log("event; argsObject read: " + JSON.stringify(tmp), autoGlobe.executed);
        });
      }
      console.log("cdnData argsObject after tmp processing", tmp);
      // console.log(
      //   "boilerplate render: line 359\ncontentCDN(this.tmp: " +
      //     JSON.stringify(this.tmp) +
      //     ")\n" +
      //     arguments.callee.caller.name,
      // );
      //Early return
      console.log("tmp payL pL type\n" + payType, tmp?.payL?.pL);
      if (payType !== "url" && payType !== "text") {
        if (mContent) {
          contentMessage = new ClassifyFiles(mContent);
          console.log("From DriveFiles: contentMessage = " + contentMessage.objTest);
          console.log("tmp payL message content\n" + mContent, tmp?.payL?.message);
          locObj = 
            {
              drivemC: contentMessage.objTest,
            }
          html = new ContentApp(tmp.append(stylesSleep.cCDNRunIt.getContent()).getContent(),locObj).tmp;
          wATitle = new ValidUrlResult(getScriptUrl())?.validatedResult?.pathname.split("/")[3];
          cdnOutput = html
            .evaluate()
            .setTitle(wATitle)
            .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL) //Important for CORS
            .setSandboxMode(HtmlService.SandboxMode.IFRAME);     
        }
      }
      else {
        if (mInfo && payType === "text") {
          infoMessage = new ClassifyFiles(mInfo);
          console.log("From DriveFiles: infoMessage = " + infoMessage.objTest);
          console.log("tmp payL message info\n" + mInfo, tmp.payL?.message);
          locObj = 
            {
              drivemC: infoMessage.objTest,
            }
          html = new ContentApp(tmp.append(stylesSleep.cCDNRunIt.getContent()).getContent(),locObj).tmp;
          wATitle = new ValidUrlResult(getScriptUrl())?.validatedResult?.pathname.split("/")[3];
          cdnOutput = html
            .evaluate()
            .setTitle(wATitle)
            .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL) //Important for CORS
            .setSandboxMode(HtmlService.SandboxMode.IFRAME);     
        }
      }
      if (mInfo && payType === "url") {
        wATitle =  new ValidUrlResult(mInfo)?.validatedResult?.pathname.split("/")[3] || new ValidUrlResult(getScriptUrl())?.validatedResult?.pathname.split("/")[3];
        console.log("From DriveFiles: mInfo = " + mInfo);
        cdnOutput = tmp
          .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL) //Important for CORS
          .setSandboxMode(HtmlService.SandboxMode.IFRAME)
          .setContent(seoCapital(mInfo || wATitle))
          .setTitle(wATitle);
      }
    }
    catch (erR) {
      console.log("error in contentCDN: " + erR);
      console.error(
        "Error in contentCDN html: " + erR.toString() + "\n" + erR.stack,
      );
    }
    this.url = url;
    this.argsObject = argsObject;
    this.tmp = tmp;
    this.keys = keys;
    this.payType = payType;
    this.mContent = mContent;
    this.mInfo = mInfo;
    this.contentMessage = contentMessage;
    this.locObj = locObj;
    this.html = html;
    this.wATitle = wATitle;
    this.cdnOutput =cdnOutput;
    this.infoMessage = infoMessage;
    // this.redirectURL = encodeURIComponent(
    //   this.url +
    //     "?" +
    //     Object.keys(this.argsObject)
    //       .map((key) => key + "=" + this.argsObject[key])
    //       .join("&"),
    // );
  }


  static cdnData(url, argsObject) {
    // console.log("contentCDN = function (url, argsObject) ", url, argsObject);
    try {
      console.log("cdnData argsObject before tmp processing", argsObject);
      const tmp = HtmlService.createHtmlOutputFromFile("cors")
      if (argsObject) {
        try {
          const keys = Object.keys(argsObject);
          keys.forEach(function (key) {
            tmp[key] = argsObject[key];
          });
        } 
        catch (error) {
          console.error("Error in contentCDN tmp" + error);
        }
      }
      console.log("cdnData argsObject after tmp processing", tmp);
      // console.log(
      //   "boilerplate render: line 359\ncontentCDN(tmp: " +
      //     JSON.stringify(tmp) +
      //     ")\n" +
      //     arguments.callee.caller.name,
      // );
      //Early return
      console.log("tmp payL pL type\n" + tmp.payL?.pL?.type, tmp.payL?.pL);
      if (tmp.payL?.pL?.type !== "url" && tmp.payL?.pL?.type !== "text") {
        if (tmp.payL?.message?.content) {
          let contentMessage = new DriveFiles(tmp.payL?.message?.content);
          console.log("From DriveFiles: contentMessage = " + contentMessage.filedMain);
          console.log("tmp payL message content\n" + tmp.payL?.message?.content, tmp.payL?.message);
          let locObj = 
            {
              drivemC: contentMessage.filedMain,
            }
          let html = ContentApp.appContent(tmp.append(stylesSleep.cCDNRunIt.getContent()).getContent(),locObj);
          let waTitle = contentMessage.searArn || new ValidUrlResult(getScriptUrl())?.validatedResult?.pathname.split("/")[3];
          return HtmlService.createTemplate(html)
            .evaluate()
            .setTitle(waTitle)
            .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL) //Important for CORS
            .setSandboxMode(HtmlService.SandboxMode.IFRAME);     
        }
      }
      else {
        if (tmp.payL?.message?.info) {
          let infoMessage = new DriveFiles(tmp.payL?.message?.info);
          console.log("From DriveFiles: infoMessage = " + infoMessage.filedMain);
          console.log("tmp payL message info\n" + tmp.payL?.message?.info, tmp.payL?.message);
          let locObj = 
            {
              drivemC: infoMessage.filedMain,
            }
          let html = ContentApp.appContent(tmp.append(stylesSleep.cCDNRunIt.getContent()).getContent(),locObj);
          let waTitle = infoMessage.searArn || new ValidUrlResult(getScriptUrl())?.validatedResult?.pathname.split("/")[3];
          return HtmlService.createTemplate(html)
            .evaluate()
            .setTitle(waTitle)
            .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL) //Important for CORS
            .setSandboxMode(HtmlService.SandboxMode.IFRAME);     
        }
      }
      let urlCDN = new DriveFiles(url);
      let wATitle =  urlCDN.searArn || new ValidUrlResult(getScriptUrl())?.validatedResult?.pathname.split("/")[3];
      console.log("From DriveFiles: urlCDN = " + urlCDN.filedMain);
      return tmp
        .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL) //Important for CORS
        .setSandboxMode(HtmlService.SandboxMode.IFRAME)
        .setContent(seoCapital(urlCDN.filedMain || urlCDN.searArn))
        .setTitle(wATitle);
    }
    catch (erR) {
      console.log("error in contentCDN: " + erR);
      console.error(
        "Error in contentCDN html: " + erR.toString() + "\n" + erR.stack,
      );
    }
    // var redirectURL = encodeURIComponent(
    //   url +
    //     "?" +
    //     Object.keys(argsObject)
    //       .map((key) => key + "=" + argsObject[key])
    //       .join("&"),
    // );
  };
  res() {
    return this.cCDN
  };
}

var contCDN = function(url, argsObject) {
  console.log("event; ContentCDN called: url -", url);
  console.log("event; ContentCDN called: argsObject -", JSON.stringify(argsObject));
  let html = new ContentCDN(url, argsObject).cdnOutput;
  return html
}

class ContentFile {
  constructor (file, argsObject) {
    console.log("contentFile = function (file, argsObject) ", file, argsObject);
    try {
      const tmp = HtmlService.createTemplateFromFile(
        ContentService.createTextOutput(file)
          .setMimeType(ContentService.MimeType.JSON)
          .getContent(),
      );
      console.log(
        "line 680\nContentFile(tmp: " +
          JSON.stringify(tmp) +
          ")",
      );
      if (argsObject) {
        const keys = Object.keys(argsObject);
        console.log(
          "line 688\nContentFile(keys: " +
            keys[0] +
            ")\n",
        );
        keys.forEach(function (key) {
          tmp[key] = argsObject[key];
        });
      }
      console.log(
        "line 697\nContentFile(tmp: " +
          JSON.stringify(tmp[0]) +
          ")",
      );
      this.tmp = tmp
        .evaluate()
        .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
        .getContent();
    } catch (error) {
      console.log("error in contentFile: " + error);
      throw new Error(
        "Error in contentFile html: " + error.toString() + "\n" + error.stack,
      );
    }
  };
  res() {
    return this.tmp
  };
}

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

function defSBD(e) {
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
    if (e && e.parameter && e.parameter["func"] && !globalThis.hasOwnProperty(e.parameter["func"])) {
      // Get the actual function
      var foobarr = globalThis["rendFile"];
      let html = RenderTemplate.templateRender(
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
          renBlob: ContentApp.appContent(
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
      return html;
    }
  } catch (error) {
    throw new Error(
      "File not found and global function does not exist: " + foobarr,
    );
  }
}

var eTest = function () {
  console.log(
    Math.floor(
      autoGlobe.functionRegistry.timeLeftToExecute - autoGlobe.functionRegistry.time / 1000,
    ),
  );
};

function freeSBD(func) {
  try {
    console.log("The received parameter ", func);
    !func ? (func = "rule") : (func = func);
    var testArray = misSt(func);
    if (testArray) {
      if (testArray.func) {
        var arrMis = Array.isArray(testArray.func)
          ? testArray.func.split(",")[0]
          : testArray.func;
        var arrTest = Array.isArray(testArray.func)
          ? testArray.func.split(",")[1]
          : testArray.func;
      } else {
        var funStopped = Array.isArray(func) ? func[0] : func;
        var arrMis = testArray[funStopped];
        console.log("misSt returned Error ", arrMis);
      }
    }
    var testTime = arrTest || arrMis;
    var toBeTested = crmCalc(testTime);
    var untestedArgs = testArray.args;
    if (typeof globalThis[testTime] == "function") {
      // Get the actual function
      var foobarr = testArray.res;
      var urlFunc = isValidUrl(foobarr).hostname;
      let html = null;
      html = RenderTemplate.templateRender(
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
          renBlob: ContentApp.appContent(
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
  = document.getElementById("indexBeta");console.log(<?= appL ?>);if (typeof <?= appL ?> !== 'undefined') {console.log(<?= appL.length ?>);if (!<?= appL ?>) {inDaApp.src 
  = "<?= vUrl ?>"}
  else {inDaApp.src 
  = "https://www.clubhouse.com/@fabianlewis?utm_medium=ch_profile&utm_campaign=lhTUtHb2bYqPN3w8EEB7FQ-247242"}}else {console.error("appL is undefined");inDaApp.src 
  = "https://www.clubhouse.com/@fabianlewis?utm_medium=ch_profile&utm_campaign=lhTUtHb2bYqPN3w8EEB7FQ-247242";}</script></body></html>`,
            {
              vUrl: urlFunc,
              appL: foobarr,
            },
          ),
        },
        foobarr,
      );
      return html;
    } else {
      console.log(
        `Problem with content, exiting. globalThis[testTime] == "${typeof globalThis[testTime]}"`,
        foobarr,
      );
      html = RenderFile.fileRender("myGNUFreeJS", {}, "freeSDB");
      return html
    }
  } catch (error) {
    console.error(error);
    Logger.log("Error creating template from function: " + error);
    throw new Error(
      "Could not create template from file or function: " + foobarr,
    );
  }
}

globalThis.fiveTime = 5 * 59.9 * 1000;

globalThis.fourTime = 4 * 59.9 * 1000;

var include = function (file, argsObject) {
  console.log(JSON.stringify(this["start"]) + "\n" + arguments.callee.name);
  try {
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
  } catch (error) {
    console.log("error in include: " + error);
    throw new Error(
      "Error in include html: " + error.toString() + "\n" + error.stack,
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
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
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
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
  }
};

var includeGSFile = function (file, argsArray) {
  var misStArrayFile = misSt([file, argsArray]);
  // ? console.log("misStArrayFile = " + typeof misStArrayFile)
  // : console.error("misStArrayFile = " + typeof misStArrayFile);
  var misStArrayArgs = misSt(argsArray);
  // ? console.log("misStArrayArgs = " + typeof misStArrayArgs)
  // : console.error("misStArrayArgs = " + typeof misStArrayArgs);
  if (misStArrayFile?.args) {
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
    throw new Error(
      "Error in includeGSFile appJS: " + error.toString() + "\n" + error.stack,
    );
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
      throw new Error(
        "Error in includeGSFile args: " + error.toString() + "\n" + error.stack,
      );
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
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
    .setSandboxMode(HtmlService.SandboxMode.IFRAME)
    .getContent();
};

var includeGSBlob = function (blob, argsObject) {
  return renderTemplate.templateRender(`<?!= appJS ?>`, {
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
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
};

var myWebFunction = function (webApp, argsObject) {
  const tmp = HtmlService.createHtmlOutput(webApp);
  if (argsObject) {
    const keys = Object.keys(argsObject);

    keys.forEach(function (key) {
      tmp[key] = argsObject[key];
    });

    // tmp["list"] = htmlListArray;
  } // END IF
  // Route[file] = argsObject
  return tmp.setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
};

globalThis.oneTime = 59.9 * 1000;

class RenderFile extends Renderer { 
  constructor(file, argsObject, title) {
    super();
    this.file = file;
    this.argsObject = argsObject;
    this.title = title;
    try {
      if (this.file) {
        this.htmlList = autoGlobe.functionRegistry.getHtmlList();
        if (this.htmlList.indexOf(this.file) !== -1) { 
          console.log("argsObject before htmlList & tmp processing", this.argsObject);
          let tmp = HtmlService.createTemplateFromFile(this.file);
          let tmpObj = this.argsObject;
          if (this.argsObject) {
            this.keys = Object.keys(this.argsObject);
            this.keys.forEach(function (key) {
              tmp[key] = tmpObj[key];
            });
          }
          this.tmp = tmp;
          console.log("argsObject after tmp processing", this.argsObject);

          // this.tmp["list"] = htmlListArray;
          // END IF
          // Route[this.file] = this.argsObject
          // this.research = geneFrame(seoSheet(coUtility()[0].rndTitle).url
          // this.funcCheck = appList();
          // this.schedule = dateTime(new Date());
          this.html = new ContentApp(
            `
          <!doctype html>
            <html lang="en">
              <head>
                <base target="_self" />
                <?!= stylesSleep.abcIt.getContent() ?>
                <style>
                  <?!= stylesSleep.renderFile.getContent() ?>
                  <!--[if lt IE 9]>
                  <script>
                    document.createElement("article");
                    document.createElement("footer");
                    document.createElement("header");
                    document.createElement("nav");
                    document.createElement("main");
                    document.createElement("section");
                    document.createElement("aside");
                  </script>
                  <![endif]-->
                </style>
              </head>
              <body id="rendFile" clas="flex-div" background-image="<?!= global_logo.getContent() ?>">
                <nav class="flex-div card-panel transparent static-fix">
                  <div class="nav-left flex-div">
                    <img src="<?!= global_logo.getContent() ?>" class="logo menu-icon" />
                  </div>
                  <div id="navMiddle" class="nav-middle flex-div ">
                    <div class="search-box flex-div logo menu-icon">
                      <input id="artiicleIndex" class="getVideo" type="text" placeholder="Search">
                    </div>
                  </div>
                  <div class="nav-right flex-div">
                    <img src="<?!= global_sea_icn.getContent() ?>" class="user-icon" />
                  </div>
                </nav>
                <div id="artiicleIndexSuggestions" class="autocomplete-suggestions card-panel transparent static-fix"></div>
                  <header class="banner card-panel transparent static-fix">
                    <div id="iframePlayer" class="row card-panel transparent" style="display: none"></div>
                    <h1>Blog</h1>
                    <label id="loadingLab">
                      <strong>
                        <p>Recent Applications</p>
                      </strong>
                    </label>
                  </header>
                  <div class="row responsive-section transparent">
                  <div class="card-panel transparent responsive-section">
                  <div class="responsive-section transparent">
                  <div class="responsive-section transparent">
                  <div class="receipt transparent responsive-section">
                  <table class="striped centered highlight transparent z-depth-5 responsive-section static-fix">
                    <thead class="transparent">
                    </thead>
                    <tbody class="transparent">
                      <tr class="transparent" style="justify-content: space-around;border-radius: 3%;height: auto;display: block;margin: auto;">
                        <td class="transparent" style="vertical-align: top;text-align: left;flex-flow: row wrap;grid-column: 1;grid-row: 1;align-content: flex-start;z-index: 0;height: 100%;">
                          <table class="striped centered highlight transparent z-depth-5 responsive-section static-fix">
                            <tbody class="transparent">
                              <td class="transparent">
                                <div class="row transparent">
                                  <section class="transparent">
                                      <header class="card-panel transparent list-container grid">
                                      <h2>Owe</h2>
                                      <aside class="card-panel transparent vid-list">
                                        <article class="transparent">
                                          <div class="row">
                                            <?!= renTemp ?>
                                          </div>
                                        </article>
                                        <a id="tro" href="javascript:void(0)">
                                          <img src="<?!= global_sea_icn.getContent() ?>" class="thumbnail transparent" />
                                        </a>
                                        <div class="flex-div transparent">
                                          <img src="<?!= global_sea_icn.getContent() ?>" class="transparent" />
                                          <div class="vid-info">
                                            <p> To truly "own" something, beyond just having it issued, granted in custody, or being responsible for it, you generally need these key elements:</p>
                                          </div>
                                        </div>
                                      </aside>
                                      <article class="transparent vid-list">
                                        <article class="transparent">
                                          <div class="row">
                                            <?!= renTemp ?>
                                          </div>
                                        </article>
                                        <a id="lti" href="javascript:void(0)">
                                          <img src="<?!= global_sea_icn.getContent() ?>" class="thumbnail transparent" />
                                        </a>
                                        <div class="flex-div transparent">
                                          <img src="<?!= global_sea_icn.getContent() ?>" class="transparent" />
                                          <div class="vid-info">
                                            <header class="transparent">
                                              <h3><a href="">Legal Title:</a></h3>
                                            </header>
                                            <p> This is the formal, legal recognition of your right to the property. It's often documented in official records, like a deed for real estate or a certificate of title for a vehicle. </p>
                                          </div>
                                        </div>
                                      </article>
                                      <article class="transparent vid-list">
                                        <article class="transparent">
                                          <div class="row">
                                            <?!= renTemp ?>
                                          </div>
                                        </article>
                                        <a id="rpc" href="javascript:void(0)">
                                          <img src="<?!= global_sea_icn.getContent() ?>" class="thumbnail transparent" />
                                        </a>
                                        <div class="flex-div transparent">
                                          <img src="<?!= global_sea_icn.getContent() ?>" class="transparent" />
                                          <div class="vid-info">
                                            <header class="transparent">
                                              <h3><a href="">Rights of Possession and Control:</a></h3>
                                            </header>
                                            <p> This includes the right to use the property as you see fit (within legal limits), to exclude others from using it, and to determine what happens to it. </p>
                                          </div>
                                        </div>
                                      </article>
                                      <article class="transparent vid-list">
                                        <article class="transparent">
                                          <div class="row">
                                            <?!= renTemp ?>
                                          </div>
                                        </article>
                                        <a id="rdi" href="javascript:void(0)">
                                          <img src="<?!= global_sea_icn.getContent() ?>" class="thumbnail transparent" />
                                        </a>
                                        <div class="flex-div transparent">
                                          <img src="<?!= global_sea_icn.getContent() ?>" class="transparent" />
                                          <div class="vid-info">
                                            <header class="transparent">
                                              <h3><a href="">Right of Disposal:</a></h3>
                                            </header>
                                            <p>This is the power to transfer ownership to someone else, whether by sale, gift, or inheritance. </p>
                                          </div>
                                        </div>
                                      </article>
                                      <article class="transparent vid-list">
                                        <article class="transparent">
                                          <div class="row">
                                            <?!= renTemp ?>
                                          </div>
                                        </article>
                                        <a id="ccm" href="javascript:void(0)">
                                          <img src="<?!= global_sea_icn.getContent() ?>" class="thumbnail transparent" />
                                        </a>
                                        <div class="flex-div transparent">
                                          <img src="<?!= global_sea_icn.getContent() ?>" class="transparent" />
                                          <div class="vid-info">
                                            <header class="transparent">
                                              <h3><a href="">Freedom from Competing Claims:</a></h3>
                                            </header>
                                            <p> True ownership means that your right to the property is secure and not easily challenged by others. </p>
                                          </div>
                                        </div>
                                      </article>
                                      <article class="transparent vid-list">
                                        <article class="transparent">
                                          <div class="row">
                                            <?!= renTemp ?>
                                          </div>
                                        </article>
                                        <a id="beb" href="javascript:void(0)">
                                          <img src="<?!= global_sea_icn.getContent() ?>" class="thumbnail transparent" />
                                        </a>
                                        <div class="flex-div transparent">
                                          <img src="<?!= global_sea_icn.getContent() ?>" class="transparent" />
                                          <div class="vid-info">
                                            <header class="transparent">
                                              <h3><a href="">Bearing the Burdens of Ownership:</a></h3>
                                            </header>
                                            <p> This means that the owner is responsible for any liabilities, taxes, or maintainance associated with the property. </p>
                                          </div>
                                        </div>
                                      </article>
                                    </header>
                                  </section>
                                </div>
                                <iframe src="https://discord.com/widget?id=1477464657722867722&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
                                <div class="transparent" style="display: none;">
                                  <button id="startShare">Start Screen Capture</button>
                                  <button id="stopShare">Stop Screen Capture</button>
                                  <div class="transparent">
                                    <video id="videoPlayer" controls></video>
                                  </div>
                                </div>
                                <header class="banner transparent responsive-section">
                                  <div id="loadingSurvey">
                                    <a id="rfif" href="javascript:void(0)">
                                      <h5>Remove</h5>
                                    </a>
                                  </div>
                                </header>
                                <hr>
                                <div class="subscribed-list">
                                  <h3>SUBSCRIBED</h3>
                                  <a href=""><img src="<?!= global_sea_icn.getContent() ?>"><p>Jack Nicholson</p></a>
                                </div>
                              </td>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table></div></div></div></div></div>
                <?!= stylesSleep.runIt.getContent() ?>
                <input type="hidden" value="<?= getUrl(ScriptApp) ?>" id="url" />
              </body>
            </html>`,
            {
              renTemp: this.tmp.evaluate().getContent(),
            },
          ).tmp;
          // return renderTemplate.templateRender(this.html,this.argsObject,this.title)
          this.fileOutput = this.html //this.tmp
              .evaluate()
              .setTitle(this.title)
              // .append(this.html)
              // .setSandboxMode(HtmlService.SandboxMode.IFRAME)
              .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
        }
      } else {
        this.fileOutput = handleRequest(this.argsObject);
      }
    } catch (error) {
      console.error("error in renderTemplate: " + error);
      console.error(
        "Error in renderFile html: " + error.toString() + "\n" + error.stack,
      );
    }
  }
  static fileRender (file, argsObject, title) {
    console.log(
      autoGlobe.functionRegistry.time +
        "\nfile is !" +
        !file +
        " = " +
        file +
        "\nargsObject is !" +
        !argsObject +
        " = " +
        JSON.stringify(argsObject) +
        "\ntitle is !" +
        !title +
        " = " +
        title,
    );
    try {
      if (file) {
        let htmlList = autoGlobe.functionRegistry.getHtmlList();
        if (htmlList.indexOf(file) !== -1) { 
          console.log("argsObject before htmlList & tmp processing", argsObject);
          const tmp = HtmlService.createTemplateFromFile(file);
          if (argsObject) {
            const keys = Object.keys(argsObject);
            keys.forEach(function (key) {
              tmp[key] = argsObject[key];
            });
          }
          console.log("argsObject after tmp processing", argsObject);

          // tmp["list"] = htmlListArray;
          // END IF
          // Route[file] = argsObject
          // var research = geneFrame(seoSheet(coUtility()[0].rndTitle).url
          // var funcCheck = appList();
          // var schedule = dateTime(new Date());
          var html = ContentApp.appContent(
            `
          <!doctype html>
            <html lang="en">
              <head>
                <base target="_self" />
                <?!= stylesSleep.abcIt.getContent() ?>
                <style>
                  <?!= stylesSleep.renderFile.getContent() ?>
                  <!--[if lt IE 9]>
                  <script>
                    document.createElement("article");
                    document.createElement("footer");
                    document.createElement("header");
                    document.createElement("nav");
                    document.createElement("main");
                    document.createElement("section");
                    document.createElement("aside");
                  </script>
                  <![endif]-->
                </style>
              </head>
              <body id="rendFile" clas="flex-div" background-image="<?!= global_logo.getContent() ?>">
                <nav class="flex-div card-panel transparent static-fix">
                  <div class="nav-left flex-div">
                    <img src="<?!= global_logo.getContent() ?>" class="logo menu-icon" />
                  </div>
                  <div id="navMiddle" class="nav-middle flex-div ">
                    <div class="search-box flex-div logo menu-icon">
                      <input id="artiicleIndex" class="getVideo" type="text" placeholder="Search">
                    </div>
                  </div>
                  <div class="nav-right flex-div">
                    <img src="<?!= global_sea_icn.getContent() ?>" class="user-icon" />
                  </div>
                </nav>
                <div id="artiicleIndexSuggestions" class="autocomplete-suggestions card-panel transparent static-fix"></div>
                  <header class="banner card-panel transparent static-fix">
                    <div id="iframePlayer" class="row card-panel transparent" style="display: none"></div>
                    <h1>Blog</h1>
                    <label id="loadingLab">
                      <strong>
                        <p>Recent Applications</p>
                      </strong>
                    </label>
                  </header>
                  <div class="row responsive-section transparent">
                  <div class="card-panel transparent responsive-section">
                  <div class="responsive-section transparent">
                  <div class="responsive-section transparent">
                  <div class="receipt transparent responsive-section">
                  <table class="striped centered highlight transparent z-depth-5 responsive-section static-fix">
                    <thead class="transparent">
                    </thead>
                    <tbody class="transparent">
                      <tr class="transparent" style="justify-content: space-around;border-radius: 3%;height: auto;display: block;margin: auto;">
                        <td class="transparent" style="vertical-align: top;text-align: left;flex-flow: row wrap;grid-column: 1;grid-row: 1;align-content: flex-start;z-index: 0;height: 100%;">
                          <table class="striped centered highlight transparent z-depth-5 responsive-section static-fix">
                            <tbody class="transparent">
                              <td class="transparent">
                                <div class="row transparent">
                                  <section class="transparent">
                                      <header class="card-panel transparent list-container grid">
                                      <h2>Owe</h2>
                                      <aside class="card-panel transparent vid-list">
                                        <article class="transparent">
                                          <div class="row">
                                            <?!= renTemp ?>
                                          </div>
                                        </article>
                                        <a id="tro" href="javascript:void(0)">
                                          <img src="<?!= global_sea_icn.getContent() ?>" class="thumbnail transparent" />
                                        </a>
                                        <div class="flex-div transparent">
                                          <img src="<?!= global_sea_icn.getContent() ?>" class="transparent" />
                                          <div class="vid-info">
                                            <p> To truly "own" something, beyond just having it issued, granted in custody, or being responsible for it, you generally need these key elements:</p>
                                          </div>
                                        </div>
                                      </aside>
                                      <article class="transparent vid-list">
                                        <article class="transparent">
                                          <div class="row">
                                            <?!= renTemp ?>
                                          </div>
                                        </article>
                                        <a id="lti" href="javascript:void(0)">
                                          <img src="<?!= global_sea_icn.getContent() ?>" class="thumbnail transparent" />
                                        </a>
                                        <div class="flex-div transparent">
                                          <img src="<?!= global_sea_icn.getContent() ?>" class="transparent" />
                                          <div class="vid-info">
                                            <header class="transparent">
                                              <h3><a href="">Legal Title:</a></h3>
                                            </header>
                                            <p> This is the formal, legal recognition of your right to the property. It's often documented in official records, like a deed for real estate or a certificate of title for a vehicle. </p>
                                          </div>
                                        </div>
                                      </article>
                                      <article class="transparent vid-list">
                                        <article class="transparent">
                                          <div class="row">
                                            <?!= renTemp ?>
                                          </div>
                                        </article>
                                        <a id="rpc" href="javascript:void(0)">
                                          <img src="<?!= global_sea_icn.getContent() ?>" class="thumbnail transparent" />
                                        </a>
                                        <div class="flex-div transparent">
                                          <img src="<?!= global_sea_icn.getContent() ?>" class="transparent" />
                                          <div class="vid-info">
                                            <header class="transparent">
                                              <h3><a href="">Rights of Possession and Control:</a></h3>
                                            </header>
                                            <p> This includes the right to use the property as you see fit (within legal limits), to exclude others from using it, and to determine what happens to it. </p>
                                          </div>
                                        </div>
                                      </article>
                                      <article class="transparent vid-list">
                                        <article class="transparent">
                                          <div class="row">
                                            <?!= renTemp ?>
                                          </div>
                                        </article>
                                        <a id="rdi" href="javascript:void(0)">
                                          <img src="<?!= global_sea_icn.getContent() ?>" class="thumbnail transparent" />
                                        </a>
                                        <div class="flex-div transparent">
                                          <img src="<?!= global_sea_icn.getContent() ?>" class="transparent" />
                                          <div class="vid-info">
                                            <header class="transparent">
                                              <h3><a href="">Right of Disposal:</a></h3>
                                            </header>
                                            <p>This is the power to transfer ownership to someone else, whether by sale, gift, or inheritance. </p>
                                          </div>
                                        </div>
                                      </article>
                                      <article class="transparent vid-list">
                                        <article class="transparent">
                                          <div class="row">
                                            <?!= renTemp ?>
                                          </div>
                                        </article>
                                        <a id="ccm" href="javascript:void(0)">
                                          <img src="<?!= global_sea_icn.getContent() ?>" class="thumbnail transparent" />
                                        </a>
                                        <div class="flex-div transparent">
                                          <img src="<?!= global_sea_icn.getContent() ?>" class="transparent" />
                                          <div class="vid-info">
                                            <header class="transparent">
                                              <h3><a href="">Freedom from Competing Claims:</a></h3>
                                            </header>
                                            <p> True ownership means that your right to the property is secure and not easily challenged by others. </p>
                                          </div>
                                        </div>
                                      </article>
                                      <article class="transparent vid-list">
                                        <article class="transparent">
                                          <div class="row">
                                            <?!= renTemp ?>
                                          </div>
                                        </article>
                                        <a id="beb" href="javascript:void(0)">
                                          <img src="<?!= global_sea_icn.getContent() ?>" class="thumbnail transparent" />
                                        </a>
                                        <div class="flex-div transparent">
                                          <img src="<?!= global_sea_icn.getContent() ?>" class="transparent" />
                                          <div class="vid-info">
                                            <header class="transparent">
                                              <h3><a href="">Bearing the Burdens of Ownership:</a></h3>
                                            </header>
                                            <p> This means that the owner is responsible for any liabilities, taxes, or maintainance associated with the property. </p>
                                          </div>
                                        </div>
                                      </article>
                                    </header>
                                  </section>
                                </div>
                                <iframe src="https://discord.com/widget?id=1477464657722867722&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
                                <div class="transparent" style="display: none;">
                                  <button id="startShare">Start Screen Capture</button>
                                  <button id="stopShare">Stop Screen Capture</button>
                                  <div class="transparent">
                                    <video id="videoPlayer" controls></video>
                                  </div>
                                </div>
                                <header class="banner transparent responsive-section">
                                  <div id="loadingSurvey">
                                    <a id="rfif" href="javascript:void(0)">
                                      <h5>Remove</h5>
                                    </a>
                                  </div>
                                </header>
                                <hr>
                                <div class="subscribed-list">
                                  <h3>SUBSCRIBED</h3>
                                  <a href=""><img src="<?!= global_sea_icn.getContent() ?>"><p>Jack Nicholson</p></a>
                                </div>
                              </td>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table></div></div></div></div></div>
                <?!= stylesSleep.runIt.getContent() ?>
                <input type="hidden" value="<?= getUrl(ScriptApp) ?>" id="url" />
              </body>
            </html>`,
            {
              renTemp: tmp.evaluate().getContent(),
            },
          );
          // return renderTemplate.templateRender(html,argsObject,title)
          return HtmlService.createHtmlOutput(html) //tmp
              // .evaluate()
              .setTitle(title)
              // .append(html)
              // .setSandboxMode(HtmlService.SandboxMode.IFRAME)
              .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
        }
      } else {
        return handleRequest(argsObject);
      }
    } catch (error) {
      console.error("error in renderTemplate: " + error);
      console.error(
        "Error in renderFile html: " + error.toString() + "\n" + error.stack,
      );
    }
  };
  res() {
    return this.fileTemplate
  };
}

var rendFile = function(file, argsObject, title) {
  console.log("event; RenderFile called: file -", file);
  console.log("event; RenderFile called: argsObject -", JSON.stringify(argsObject));
  console.log("event; RenderFile called: title -", title);
  let html = new RenderFile(file, argsObject, title).fileOutput;
  return html;
}

class RenderTemplate extends Renderer {
  constructor (blob, argsObject, title) {
    super();
    this.blob = blob;
    this.argsObject = argsObject;
    this.title = title;
    console.log(
      "boilerplate render: line 201\nrenderTemplate.templateRender(blob: " + this.blob &&
        this.blob?.length > 9
        ? this.blob?.substring(0, 130)
        : "" +
            "..., argsObject: " +
            JSON.stringify(this.argsObject) +
            ", title: " +
            this.title +
            ")",
    );
    this.executed = autoGlobe.executed;
    console.log(autoGlobe.functionRegistry.time);
    console.log("argsObject before blob & tmp processing", this.argsObject);
    this.tmp = HtmlService.createTemplate(this.blob);
    if (this.argsObject) {
      const keys = Object.keys(this.argsObject);
      let shortTmp = this.tmp;
      let shortObj = this.argsObject;
      try {
        keys.forEach(function (key) {
          shortTmp[key] = shortObj[key];
          // this.tmp[key] = this.argsObject[key];
        });
      } catch (error) {
        return "Error in renderTemplate tmp" + error;
      }
      this.tmp = shortTmp;
    }
    console.log("argsObject after tmp processing", this.tmp);
    // this.funcCheck = appList();
    // this.css = builtStyling();
    // this.schedule = dateTime(new Date());
    // this.research = geneFrame(seoSheet(coUtility()[0].rndTitle).url)
    this.payType = this.tmp.payL?.pL?.type;
    this.parType = this.tmp.payL?.type;
    this.payData = this.tmp.payL?.data;
    this.payInfo = this.tmp.payL?.message?.info;
    this.payTmp = this.tmp.evaluate().getContent();
    this.payDataPL = this.tmp.payL?.pL?.data;
    this.payDataD = this.tmp.payL?.pL?.dataData;
    this.payDataI = this.tmp.payL?.pL?.dataIndex;
    this.payMFeed = this.tmp.payL?.message?.feed;
    this.payLink = this.tmp.payL?.pL?.link; 
    this.payM = this.tmp.payL?.message;
    this.payMContent = this.tmp.payL?.message?.content;
    this.payPL = this.tmp.payL?.pL;
    let shortTitle = this.title;
    let shortType = this.payType;
    let shortPar = this.parType;
    let shortData = this.payData;
    let shortInfo = this.payInfo;
    let shortTmp = this.payTmp;
    let shortDataPL = this.payDataPL;
    let shortDataD = this.payDataD;
    let shortDataI = this.payDataI;;
    let shortFeed = this.payMFeed;
    let shortLink = this.payLink; 
    let shortM = this.payM;
    let shortMContent = this.payMContent;
    let shortPL = this.payPL;
    let shortHtml = "";
    let shortHtmlPayL = "";
    let shortHtmlPL = "";
    try {
      if (shortType === "html"  || shortPar === "html") {
        if (shortPar === "html") {
          shortHtmlPayL = new ContentApp(shortData,
            {
              driveT: shortPar,
            },
          ).tmp
            .evaluate()
            .setTitle(shortTitle)
            // .append(shortHtml)
            // .setSandboxMode(HtmlService.SandboxMode.IFRAME)
            .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
        }
        else {
          if (shortType === "html") {
            shortHtmlPL = new ContentApp(shortInfo,
              {
                renTemp: shortTmp,
                driveA: JSON.stringify(this.argsObject),
                driveD: shortDataPL,
                drivedD: shortDataD,
                drivemI: shortInfo,
                drivedI: shortDataI,
                drivedU: shortFeed,
                driveL: shortLink,
                driveM: shortM,
                drivemC: shortMContent,
                driveP: shortPL,
                driveT: shortType,
              },
            ).tmp
              .evaluate()
              .setTitle(shortTitle)
              // .append(shortHtml)
              // .setSandboxMode(HtmlService.SandboxMode.IFRAME)
              .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
          }
        }
      }
      else {
        shortHtml = new ContentApp(
          `
        <html id="renderTemplate">
          <head>
            <?!= stylesSleep.abcIt.getContent() ?>
            <style>
              <?!= stylesSleep.renderFile.getContent() ?>
              <!--[if lt IE 9]>
              <script>
                document.createElement("article");
                document.createElement("footer");
                document.createElement("header");
                document.createElement("nav");
                document.createElement("main");
                document.createElement("section");
                document.createElement("aside");
              </script>
              <![endif]-->
            </style>
          </head>
          <body>
            <nav class="flex-div responsive-section transparent static-fix">
              <div class="nav-left flex-div responsive-section">
                <img src="<?!= global_logo.getContent() ?>" class="logo menu-icon" />
              </div>
              <div id="navMiddle" class="nav-middle flex-div responsive-section">
                <div class="search-box flex-div">
                  <input id="artiicleIndex" class="getVideo" type="text" placeholder="Search">
                </div>
              </div>
              <div class="nav-right flex-div responsive-section">
                <img src="<?!= global_sea_icn.getContent() ?>" class="user-icon" />
              </div>
            </nav>
            <div id="artiicleIndexSuggestions" class="autocomplete-suggestions responsive-section transparent static-fix"></div>
            <main class="responsive-section float-left">
              <header class="transparent banner responsive-section">
                <div id="player1" class="row card-panel transparent list-container grid" style="display: none"></div>
                <div id="iframePlayer" class="row card-panel transparent" style="display: none"></div>
                <h4><?!= drivedD?.split("{")[0] ?></h4>
                <label id="loadingLab">
                  <strong>
                    <p>Recent Applications</p>
                  </strong>
                </label>
              </header>
              <div class="row responsive-section">
              <div class="card-panel transparent responsive-section">
              <div class="responsive-section">
              <div class="responsive-section">
              <div class="receipt transparent responsive-section">
              <table class="striped centered highlight transparent z-depth-5 responsive-section static-fix">
                <thead class="transparent" >
                </thead>
                <tbody class="transparent" style="vertical-align: top;text-align: left;flex-flow: row wrap;grid-column: 1;grid-row: 1;align-content: flex-start;z-index: 0;height: 100%;">
                  <tr class="transparent" style="justify-content: space-around;border-radius: 3%;height: auto;display: block;margin: auto;">
                    <td class="transparent" style="vertical-align: top;text-align: left;flex-flow: row wrap;grid-column: 1;grid-row: 1;align-content: flex-start;z-index: 0;height: 100%;">
                      <table class="striped centered highlight purple z-depth-5 responsive-section static-fix">
                        <tbody class="transparent" style="vertical-align: top;text-align: left;flex-flow: row wrap;grid-column: 1;grid-row: 1;align-content: flex-start;z-index: 0;height: 100%;">
                          <td class="transparent">
                            <div class="transparent row responsive-section">
                              <section class="transparent responsive-section static-fix">
                                <header class="transparent responsive-section list-container grid">
                                  <h2>Power</h2>
                                  <p> Is the conveyance of power and authority an objective, measurable quantity?</p>
                                  <aside class="transparent responsive-section card-panel vid-list">
                                    <article class="transparent responsive-section card-panel static-fix container">
                                      <div class="row responsive-section static-fix">
                                        <?!= renTemp ?>
                                      </div>
                                    </article>
                                      <iframe id="dmi" src="<?!= global_sea_icn.getContent() ?>" class="thumbnail"></iframe>
                                    // <a id="dmi" href="<?!= drivemI ?>" target="_blank">
                                    //   <img src="<?!= global_sea_icn.getContent() ?>" class="thumbnail" />
                                    // </a>
                                    <div class="flex-div">
                                      <img src="<?!= global_sea_icn.getContent() ?>" />
                                      <div class="vid-info">
                                        <p>
                                          <i>   
                                            No, the conveyance of power and authority is not inherently an objective, measurable quantity. Here's why:\n
                                            <?!= JSON.stringify(driveM) ?>
                                          </i>
                                        </p>
                                      </div>
                                    </div>
                                  </aside>
                                  <article class="transparent responsive-section card-panel vid-list">
                                    <article class="transparent responsive-section card-panel static-fix container">
                                      <div class="row responsive-section static-fix">
                                        <?!= renTemp ?>
                                      </div>
                                    </article>
                                    <a id="del" href="<?!= driveL ?>" target="_blank">
                                      <img src="<?!= global_sea_icn.getContent() ?>" class="thumbnail" />
                                    </a>
                                    <div class="flex-div">
                                      <img src="<?!= global_sea_icn.getContent() ?>" />
                                      <div class="vid-info">
                                        <?!= drivedD ?>
                                        <header class="responsive-section">
                                          <h3><a href="javascript:void(0)">Subjectivity in Definition:</a></h3>
                                        </header>
                                        <p style="text-align: left"> Power and authority themselves are complex concepts with no single, universally agreed-upon definition. What constitutes "power" or "authority" can vary significantly depending on the context, the individuals involved, and the values held by the observer.</p>
                                      </div>
                                    </div>
                                  </article>
                                  <article class="transparent responsive-section card-panel vid-list">
                                    <article class="transparent responsive-section card-panel static-fix container">
                                      <div class="row responsive-section static-fix">
                                        <?!= renTemp ?>
                                      </div>
                                    </article>
                                    <a id="qua" href="javascript:void(0)">
                                      <img src="<?!= global_sea_icn.getContent() ?>" class="thumbnail" />
                                    </a>
                                    <div class="flex-div">
                                      <img src="<?!= global_sea_icn.getContent() ?>" />
                                      <div class="vid-info">
                                        <?!= driveT ?>
                                        <header class="responsive-section">
                                          <h3><a href="javascript:void(0)">Qualitative Aspects:</a></h3>
                                        </header>
                                        <p style="text-align: left"> The impact of power and authority often involves qualitative factors like influence, respect, legitimacy, and the consent of those subject to it. These are difficult to quantify precisely.</p>
                                      </div>
                                    </div>
                                  </article>
                                  <article class="transparent responsive-section card-panel vid-list">
                                    <article class="transparent responsive-section card-panel static-fix container">
                                      <div class="row responsive-section static-fix">
                                        <?!= renTemp ?>
                                      </div>
                                    </article>
                                    <a id="ddi" href="<?!= drivedI ?>" target="_blank">
                                      <img src="<?!= global_sea_icn.getContent() ?>" class="thumbnail" />
                                    </a>
                                    <div class="flex-div">
                                      <img src="<?!= global_sea_icn.getContent() ?>" />
                                      <div class="vid-info">
                                        <?!= drivedI ?>
                                        <header class="responsive-section">
                                          <h3><a href="javascript:void(0)">Contextual Dependence:</a></h3>
                                        </header>
                                        <p style="text-align: left"> The effectiveness of the conveyance of power and authority depends heavily on the specific context – the social, political, and cultural environment in which it occurs.</p>
                                      </div>
                                    </div>
                                  </article>
                                  <aside class="transparent responsive-section card-panel vid-list">
                                    <article class="transparent responsive-section card-panel static-fix container">
                                      <div class="row responsive-section static-fix">
                                        <?!= renTemp ?>
                                      </div>
                                    </article>
                                    <a id="ama" href="javascript:void(0)">
                                      <img src="<?!= global_sea_icn.getContent() ?>" class="thumbnail" />
                                    </a>
                                    <div class="flex-div">
                                      <img src="<?!= global_sea_icn.getContent() ?>" />
                                      <div class="vid-info">
                                        <i>
                                          However, there are some aspects that can be measured or assessed to some degree:
                                        </i>
                                      </div>
                                    </div>
                                  </aside>
                                  <article class="transparent responsive-section card-panel vid-list">
                                    <article class="transparent responsive-section card-panel static-fix container">
                                      <div class="row responsive-section static-fix">
                                        <?!= renTemp ?>
                                      </div>
                                    </article>
                                    <a id="vsd" href="javascript:void(0)">
                                      <img src="<?!= global_sea_icn.getContent() ?>" class="thumbnail" />
                                    </a>
                                    <div class="flex-div">
                                      <img src="<?!= global_sea_icn.getContent() ?>" />
                                      <div class="vid-info">
                                        <header class="responsive-section">
                                          <h3><a href="javascript:void(0)">Visible Demonstrations:</a></h3>
                                        </header>
                                        <p style="text-align: left"> Observable actions like issuing commands, making decisions, controlling resources, or enforcing rules can provide evidence of the exercise of power.</p>
                                      </div>
                                    </div>
                                  </article>
                                  <article class="transparent responsive-section card-panel vid-list">
                                    <article class="transparent responsive-section card-panel static-fix container">
                                      <div class="row responsive-section static-fix">
                                        <?!= renTemp ?>
                                      </div>
                                    </article>
                                    <a id="ccc" href="javascript:void(0)">
                                      <img src="<?!= global_sea_icn.getContent() ?>" class="thumbnail" />
                                    </a>
                                    <div class="flex-div">
                                      <img src="<?!= global_sea_icn.getContent() ?>" />
                                      <div class="vid-info">
                                        <header class="responsive-section">
                                          <h3><a href="javascript:void(0)">Compliance and Obedience:</a></h3>
                                        </header>
                                        <p style="text-align: left"> The extent to which others comply with the directives of an authority figure can be observed and, to some extent, measured.</p>
                                      </div>
                                    </div>
                                  </article>
                                  <article class="transparent responsive-section card-panel vid-list">
                                    <article class="transparent responsive-section card-panel static-fix container">
                                      <div class="row responsive-section static-fix">
                                        <?!= renTemp ?>
                                      </div>
                                    </article>
                                    <a id="sli" href="javascript:void(0)">
                                      <img src="<?!= global_sea_icn.getContent() ?>" class="thumbnail" />
                                    </a>
                                    <div class="flex-div">
                                      <img src="<?!= global_sea_icn.getContent() ?>" />
                                      <div class="vid-info">
                                        <header class="responsive-section">
                                          <h3><a href="javascript:void(0)">Social Influence:</a></h3>
                                        </header>
                                        <p style="text-align: left"> The ability to influence the beliefs, attitudes, or behaviors of others can be assessed through surveys, observations, or other social science research methods.</p>
                                      </div>
                                    </div>
                                  </article>
                                  <aside class="transparent responsive-section card-panel vid-list">
                                    <article class="transparent responsive-section card-panel static-fix container">
                                      <div class="row responsive-section static-fix">
                                        <?!= renTemp ?>
                                      </div>
                                    </article>
                                    <a id="drd" href="<?!= driveD ?>" target="_blank">
                                      <img src="<?!= global_sea_icn.getContent() ?>" class="thumbnail" />
                                    </a>
                                    <div class="flex-div">
                                      <img src="<?!= global_sea_icn.getContent() ?>" />
                                      <div class="vid-info">
                                        <header class="responsive-section">
                                          <h3><a href="javascript:void(0)">In conclusion:</a></h3>
                                        </header>
                                        <p style="text-align: left">
                                        While some aspects of the conveyance of power and authority can be measured or assessed, it's crucial to acknowledge the inherent limitations and the significant role of subjective interpretation in understanding these complex phenomena.
                                        </p>
                                      </div>
                                    </div>
                                  </aside>
                                </header>
                              </section>
                            </div>
                          </td>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              </div></div></div></div></div>
            </main>
            <footer class="transparent receipt-footer responsive-section card-panel float-right">
              <div class="row responsive-section">
                <aside class="pulse transparent sidebar float-right">
                  <p>
                    <iframe src="https://discord.com/widget?id=1477464657722867722&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
                    <header class="banner transparent responsive-section">
                      <div id="loadingSurvey">
                        <a id="rtif" href="javascript:void(0)">
                          <h5>Remove</h5>
                        </a>
                      </div>
                    </header>
                    <hr>
                    <div class="subscribed-list">
                      <h3>SUBSCRIBED</h3>
                      <a href=""><img src="<?!= global_sea_icn.getContent() ?>"><p>Jack Nicholson</p></a>
                    </div>
                  </p>
                </aside>
              </div>
            </footer>
            <?!= stylesSleep.runIt.getContent() ?>
            <input type="hidden" value="<?= getUrl(ScriptApp) ?>" id="url" />
            <div id="result"></div>
            <div id="successMessage"></div>
            <div id="errorMessage"></div>
            <table id="resultsTable"></table>
          </body>
        </html>`,
          {
            renTemp: shortTmp,
            driveA: JSON.stringify(this.argsObject),
            driveD: shortDataPL,
            drivedD: shortDataD,
            drivemI: shortInfo,
            drivedI: shortDataI,
            drivedU: shortFeed,
            driveL: shortLink,
            driveM: shortM,
            drivemC: shortMContent,
            driveP: shortPL,
            driveT: shortType,
          },
        ).tmp
          .evaluate()
          .setTitle(shortTitle)
          // .append(shortHtml)
          // .setSandboxMode(HtmlService.SandboxMode.IFRAME)
          .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
      }
    } catch (error) {
      console.error("Error rendering template:", error, error.stack);
      console.error(
        "Error in rendertemplate html: " + this.blob + "\n" + error.stack,
      );
    }
    this.html = shortHtml;
    this.htmlPayL = shortHtmlPayL;
    this.htmlPL = shortHtmlPL;
  }
  static templateRender (blob, argsObject, title) {
    console.log(
      "boilerplate render: line 201\nrenderTemplate.templateRender(blob: " + blob &&
        blob?.length > 9
        ? blob?.substring(0, 130)
        : "" +
            "..., argsObject: " +
            JSON.stringify(argsObject) +
            ", title: " +
            title +
            ")",
    );
    let executed = 0;
    console.log(autoGlobe.functionRegistry.time);
    console.log("argsObject before blob & tmp processing", argsObject);
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
    console.log("argsObject after tmp processing", tmp);
    // var funcCheck = appList();
    // var css = builtStyling();
    // var schedule = dateTime(new Date());
    // var research = geneFrame(seoSheet(coUtility()[0].rndTitle).url)
    let html = null;
    let htmlPayL = null;
    let htmlPL = null;
    try {
      if (tmp.payL?.pL?.type === "html"  || tmp.payL?.type === "html") {
        if (tmp.payL?.type === "html") {
          htmlPayL = ContentApp.appContent(tmp.payL?.data,
            {
              driveT: tmp.payL?.type,
            },
          );
        }
        else {
          if (tmp.payL?.pL?.type === "html") {
            htmlPL = ContentApp.appContent(tmp.payL?.message?.info,
              {
                renTemp: tmp.evaluate().getContent(),
                driveA: JSON.stringify(argsObject),
                driveD: tmp.payL?.pL?.data,
                drivedD: tmp.payL?.pL?.dataData,
                drivemI: tmp.payL?.message?.info,
                drivedI: tmp.payL?.pL?.dataIndex,
                drivedU: tmp.payL?.message?.feed,
                driveL: tmp.payL?.pL?.link,
                driveM: tmp.payL?.message,
                drivemC: tmp.payL?.message?.content,
                driveP: tmp.payL?.pL,
                driveT: tmp.payL?.pL?.type,
              },
            );
          }
        }
      }
      else {
        html = ContentApp.appContent(
          `
        <html id="renderTemplate">
          <head>
            <?!= stylesSleep.abcIt.getContent() ?>
            <style>
              <?!= stylesSleep.renderFile.getContent() ?>
              <!--[if lt IE 9]>
              <script>
                document.createElement("article");
                document.createElement("footer");
                document.createElement("header");
                document.createElement("nav");
                document.createElement("main");
                document.createElement("section");
                document.createElement("aside");
              </script>
              <![endif]-->
            </style>
          </head>
          <body>
            <nav class="flex-div responsive-section transparent static-fix">
              <div class="nav-left flex-div responsive-section">
                <img src="<?!= global_logo.getContent() ?>" class="logo menu-icon" />
              </div>
              <div id="navMiddle" class="nav-middle flex-div responsive-section">
                <div class="search-box flex-div">
                  <input id="artiicleIndex" class="getVideo" type="text" placeholder="Search">
                </div>
              </div>
              <div class="nav-right flex-div responsive-section">
                <img src="<?!= global_sea_icn.getContent() ?>" class="user-icon" />
              </div>
            </nav>
            <div id="artiicleIndexSuggestions" class="autocomplete-suggestions responsive-section transparent static-fix"></div>
            <main class="responsive-section float-left">
              <header class="transparent banner responsive-section">
                <div id="player1" class="row card-panel transparent list-container grid" style="display: none"></div>
                <div id="iframePlayer" class="row card-panel transparent" style="display: none"></div>
                <h4><?!= drivedD?.split("{")[0] ?></h4>
                <label id="loadingLab">
                  <strong>
                    <p>Recent Applications</p>
                  </strong>
                </label>
              </header>
              <div class="row responsive-section">
              <div class="card-panel transparent responsive-section">
              <div class="responsive-section">
              <div class="responsive-section">
              <div class="receipt transparent responsive-section">
              <table class="striped centered highlight transparent z-depth-5 responsive-section static-fix">
                <thead class="transparent" >
                </thead>
                <tbody class="transparent" style="vertical-align: top;text-align: left;flex-flow: row wrap;grid-column: 1;grid-row: 1;align-content: flex-start;z-index: 0;height: 100%;">
                  <tr class="transparent" style="justify-content: space-around;border-radius: 3%;height: auto;display: block;margin: auto;">
                    <td class="transparent" style="vertical-align: top;text-align: left;flex-flow: row wrap;grid-column: 1;grid-row: 1;align-content: flex-start;z-index: 0;height: 100%;">
                      <table class="striped centered highlight purple z-depth-5 responsive-section static-fix">
                        <tbody class="transparent" style="vertical-align: top;text-align: left;flex-flow: row wrap;grid-column: 1;grid-row: 1;align-content: flex-start;z-index: 0;height: 100%;">
                          <td class="transparent">
                            <div class="transparent row responsive-section">
                              <section class="transparent responsive-section static-fix">
                                <header class="transparent responsive-section list-container grid">
                                  <h2>Power</h2>
                                  <p> Is the conveyance of power and authority an objective, measurable quantity?</p>
                                  <aside class="transparent responsive-section card-panel vid-list">
                                    <article class="transparent responsive-section card-panel static-fix container">
                                      <div class="row responsive-section static-fix">
                                        <?!= renTemp ?>
                                      </div>
                                    </article>
                                    <a id="dmi" href="<?!= drivemI ?>" target="_blank">
                                      <img src="<?!= global_sea_icn.getContent() ?>" class="thumbnail" />
                                    </a>
                                    <div class="flex-div">
                                      <img src="<?!= global_sea_icn.getContent() ?>" />
                                      <div class="vid-info">
                                        <p>
                                          <i>   
                                            No, the conveyance of power and authority is not inherently an objective, measurable quantity. Here's why:\n
                                            <?!= JSON.stringify(driveM) ?>
                                          </i>
                                        </p>
                                      </div>
                                    </div>
                                  </aside>
                                  <article class="transparent responsive-section card-panel vid-list">
                                    <article class="transparent responsive-section card-panel static-fix container">
                                      <div class="row responsive-section static-fix">
                                        <?!= renTemp ?>
                                      </div>
                                    </article>
                                    <a id="del" href="<?!= driveL ?>" target="_blank">
                                      <img src="<?!= global_sea_icn.getContent() ?>" class="thumbnail" />
                                    </a>
                                    <div class="flex-div">
                                      <img src="<?!= global_sea_icn.getContent() ?>" />
                                      <div class="vid-info">
                                        <?!= drivedD ?>
                                        <header class="responsive-section">
                                          <h3><a href="javascript:void(0)">Subjectivity in Definition:</a></h3>
                                        </header>
                                        <p style="text-align: left"> Power and authority themselves are complex concepts with no single, universally agreed-upon definition. What constitutes "power" or "authority" can vary significantly depending on the context, the individuals involved, and the values held by the observer.</p>
                                      </div>
                                    </div>
                                  </article>
                                  <article class="transparent responsive-section card-panel vid-list">
                                    <article class="transparent responsive-section card-panel static-fix container">
                                      <div class="row responsive-section static-fix">
                                        <?!= renTemp ?>
                                      </div>
                                    </article>
                                    <a id="qua" href="javascript:void(0)">
                                      <img src="<?!= global_sea_icn.getContent() ?>" class="thumbnail" />
                                    </a>
                                    <div class="flex-div">
                                      <img src="<?!= global_sea_icn.getContent() ?>" />
                                      <div class="vid-info">
                                        <?!= driveT ?>
                                        <header class="responsive-section">
                                          <h3><a href="javascript:void(0)">Qualitative Aspects:</a></h3>
                                        </header>
                                        <p style="text-align: left"> The impact of power and authority often involves qualitative factors like influence, respect, legitimacy, and the consent of those subject to it. These are difficult to quantify precisely.</p>
                                      </div>
                                    </div>
                                  </article>
                                  <article class="transparent responsive-section card-panel vid-list">
                                    <article class="transparent responsive-section card-panel static-fix container">
                                      <div class="row responsive-section static-fix">
                                        <?!= renTemp ?>
                                      </div>
                                    </article>
                                    <a id="ddi" href="<?!= drivedI ?>" target="_blank">
                                      <img src="<?!= global_sea_icn.getContent() ?>" class="thumbnail" />
                                    </a>
                                    <div class="flex-div">
                                      <img src="<?!= global_sea_icn.getContent() ?>" />
                                      <div class="vid-info">
                                        <?!= drivedI ?>
                                        <header class="responsive-section">
                                          <h3><a href="javascript:void(0)">Contextual Dependence:</a></h3>
                                        </header>
                                        <p style="text-align: left"> The effectiveness of the conveyance of power and authority depends heavily on the specific context – the social, political, and cultural environment in which it occurs.</p>
                                      </div>
                                    </div>
                                  </article>
                                  <aside class="transparent responsive-section card-panel vid-list">
                                    <article class="transparent responsive-section card-panel static-fix container">
                                      <div class="row responsive-section static-fix">
                                        <?!= renTemp ?>
                                      </div>
                                    </article>
                                    <a id="ama" href="javascript:void(0)">
                                      <img src="<?!= global_sea_icn.getContent() ?>" class="thumbnail" />
                                    </a>
                                    <div class="flex-div">
                                      <img src="<?!= global_sea_icn.getContent() ?>" />
                                      <div class="vid-info">
                                        <i>
                                          However, there are some aspects that can be measured or assessed to some degree:
                                        </i>
                                      </div>
                                    </div>
                                  </aside>
                                  <article class="transparent responsive-section card-panel vid-list">
                                    <article class="transparent responsive-section card-panel static-fix container">
                                      <div class="row responsive-section static-fix">
                                        <?!= renTemp ?>
                                      </div>
                                    </article>
                                    <a id="vsd" href="javascript:void(0)">
                                      <img src="<?!= global_sea_icn.getContent() ?>" class="thumbnail" />
                                    </a>
                                    <div class="flex-div">
                                      <img src="<?!= global_sea_icn.getContent() ?>" />
                                      <div class="vid-info">
                                        <header class="responsive-section">
                                          <h3><a href="javascript:void(0)">Visible Demonstrations:</a></h3>
                                        </header>
                                        <p style="text-align: left"> Observable actions like issuing commands, making decisions, controlling resources, or enforcing rules can provide evidence of the exercise of power.</p>
                                      </div>
                                    </div>
                                  </article>
                                  <article class="transparent responsive-section card-panel vid-list">
                                    <article class="transparent responsive-section card-panel static-fix container">
                                      <div class="row responsive-section static-fix">
                                        <?!= renTemp ?>
                                      </div>
                                    </article>
                                    <a id="ccc" href="javascript:void(0)">
                                      <img src="<?!= global_sea_icn.getContent() ?>" class="thumbnail" />
                                    </a>
                                    <div class="flex-div">
                                      <img src="<?!= global_sea_icn.getContent() ?>" />
                                      <div class="vid-info">
                                        <header class="responsive-section">
                                          <h3><a href="javascript:void(0)">Compliance and Obedience:</a></h3>
                                        </header>
                                        <p style="text-align: left"> The extent to which others comply with the directives of an authority figure can be observed and, to some extent, measured.</p>
                                      </div>
                                    </div>
                                  </article>
                                  <article class="transparent responsive-section card-panel vid-list">
                                    <article class="transparent responsive-section card-panel static-fix container">
                                      <div class="row responsive-section static-fix">
                                        <?!= renTemp ?>
                                      </div>
                                    </article>
                                    <a id="sli" href="javascript:void(0)">
                                      <img src="<?!= global_sea_icn.getContent() ?>" class="thumbnail" />
                                    </a>
                                    <div class="flex-div">
                                      <img src="<?!= global_sea_icn.getContent() ?>" />
                                      <div class="vid-info">
                                        <header class="responsive-section">
                                          <h3><a href="javascript:void(0)">Social Influence:</a></h3>
                                        </header>
                                        <p style="text-align: left"> The ability to influence the beliefs, attitudes, or behaviors of others can be assessed through surveys, observations, or other social science research methods.</p>
                                      </div>
                                    </div>
                                  </article>
                                  <aside class="transparent responsive-section card-panel vid-list">
                                    <article class="transparent responsive-section card-panel static-fix container">
                                      <div class="row responsive-section static-fix">
                                        <?!= renTemp ?>
                                      </div>
                                    </article>
                                    <a id="drd" href="<?!= driveD ?>" target="_blank">
                                      <img src="<?!= global_sea_icn.getContent() ?>" class="thumbnail" />
                                    </a>
                                    <div class="flex-div">
                                      <img src="<?!= global_sea_icn.getContent() ?>" />
                                      <div class="vid-info">
                                        <header class="responsive-section">
                                          <h3><a href="javascript:void(0)">In conclusion:</a></h3>
                                        </header>
                                        <p style="text-align: left">
                                        While some aspects of the conveyance of power and authority can be measured or assessed, it's crucial to acknowledge the inherent limitations and the significant role of subjective interpretation in understanding these complex phenomena.
                                        </p>
                                      </div>
                                    </div>
                                  </aside>
                                </header>
                              </section>
                            </div>
                          </td>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              </div></div></div></div></div>
            </main>
            <footer class="transparent receipt-footer responsive-section card-panel float-right">
              <div class="row responsive-section">
                <aside class="pulse transparent sidebar float-right">
                  <p>
                    <iframe src="https://discord.com/widget?id=1477464657722867722&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
                    <header class="banner transparent responsive-section">
                      <div id="loadingSurvey">
                        <a id="rtif" href="javascript:void(0)">
                          <h5>Remove</h5>
                        </a>
                      </div>
                    </header>
                    <hr>
                    <div class="subscribed-list">
                      <h3>SUBSCRIBED</h3>
                      <a href=""><img src="<?!= global_sea_icn.getContent() ?>"><p>Jack Nicholson</p></a>
                    </div>
                  </p>
                </aside>
              </div>
            </footer>
            <?!= stylesSleep.runIt.getContent() ?>
            <input type="hidden" value="<?= getUrl(ScriptApp) ?>" id="url" />
            <div id="result"></div>
            <div id="successMessage"></div>
            <div id="errorMessage"></div>
            <table id="resultsTable"></table>
          </body>
        </html>`,
          {
            renTemp: tmp.evaluate().getContent(),
            driveA: JSON.stringify(argsObject),
            driveD: tmp.payL?.pL?.data,
            drivedD: tmp.payL?.pL?.dataData,
            drivemI: tmp.payL?.message?.info,
            drivedI: tmp.payL?.pL?.dataIndex,
            drivedU: tmp.payL?.message?.feed,
            driveL: tmp.payL?.pL?.link,
            driveM: tmp.payL?.message,
            drivemC: tmp.payL?.message?.content,
            driveP: tmp.payL?.pL,
            driveT: tmp.payL?.pL?.type,
          },
        );
      }
    } catch (error) {
      console.error("Error rendering template:", error, error.stack);
      console.error(
        "Error in rendertemplate html: " + blob + "\n" + error.stack,
      );
    }
    if(!htmlPayL || !htmlPL) {
      return HtmlService.createHtmlOutput(html) //tmp
          .setTitle(title)
          // .append(html)
          // .setSandboxMode(HtmlService.SandboxMode.IFRAME)
          .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
    }
    else {
      return HtmlService.createHtmlOutput(htmlPayL || htmlPL) //tmp
          .setTitle(title)
          // .append(html)
          // .setSandboxMode(HtmlService.SandboxMode.IFRAME)
          .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
    }
  }; // or throw error.
  res() {
    return this.blobTemplate
  }
}

var rendTemplate = function(blob, argsObject, title) {
  console.log("event; RenderTemplate called: blob -", blob);
  console.log("event; RenderTemplate called: argsObject -", JSON.stringify(argsObject));
  console.log("event; RenderTemplate called: title -", title);
  let html = new RenderTemplate(blob, argsObject, title).templateOutput;
  return html
}

var tagBuilder = function (content) {
  console.log(JSON.stringify(this["start"]) + "\n" + arguments.callee.name);
  const htmlBody = ContentApp.appContent(content);
  return htmlBody;
};

function wildSBD(e) {
  try {
    var args = e.parameter["args"];
    if (
      globalThis.hasOwnProperty(e.parameter["func"]) &&
      typeof globalThis[e.parameter["func"]] === "function"
    ) {
      // Get the actual function
      var foobarr = globalThis[e.parameter["func"]];
      return RenderTemplate.templateRender(
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
          renBlob: ContentApp.appContent(
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
    Logger.log("Error creating template from function: " + error.stack);
    throw new Error(
      "Could not create template from file or function: " + foobarr,
    );
  }
}
