var seoPastTime = function (searchString, time) {
  searchString
    ? searchString
    : (searchString = objectOfS(
        ["parameter"],
        [[["func", testlt()]]],
        Math.floor((maxTime - (new Date() % (1000 * 60))) / 1000),
      ));
  if (typeof searchString === "object") {
    searchString = searchString.parameter["func"];
  }
  console.log(
    Math.floor((maxTime - (new Date() % (1000 * 60))) / 1000) +
      "\n" +
      arguments.callee.name +
      "\nsearchString is !" +
      !searchString +
      ", = " +
      searchString +
      "\ntime is !" +
      !time +
      ", = " +
      time,
  );
  if (typeof time === "undefined") {
    time = Math.floor((maxTime - (new Date() % (1000 * 60))) / 1000);
  }
  while (typeof fndOrd !== "object") {
    var uniqueVid = seoYoutube(searchString, time).myIdArr;
    var sorFndOrd = uniqueVid.filter((vidObject) => {
      var elaspeTime = new Date() - time;
      var timeToExecute = maxTime - elaspeTime;
      if (
        vidObject.length === 11 &&
        vidObject !== '"' &&
        vidObject.toLowerCase !== "http" &&
        vidObject.toLowerCase !== "result" &&
        vidObject.toLowerCase !== "content" &&
        vidObject.toLowerCase !== "data" &&
        vidObject.toLowerCase !== "length" &&
        vidObject.toLowerCase !== "ajax" &&
        vidObject.toLowerCase !== "if" &&
        vidObject.toLowerCase !== "attrib" &&
        vidObject.toLowerCase !== "get" &&
        vidObject.toLowerCase !== "null" &&
        vidObject.toLowerCase !== "saving" &&
        vidObject.toLowerCase !== "location" &&
        vidObject.toLowerCase !== "has" &&
        vidObject.toLowerCase !== "query" &&
        vidObject.toLowerCase !== "res" &&
        vidObject.toLowerCase !== "acc" &&
        vidObject.toLowerCase !== "hybrid" &&
        vidObject.toLowerCase !== "amp" &&
        vidObject.indexOf("=") === -1 &&
        vidObject.indexOf("query") === -1 &&
        vidObject.indexOf(";") === -1 &&
        vidObject.indexOf("ajax") === -1 &&
        vidObject.indexOf("whole") === -1 &&
        vidObject.indexOf("document.qu") === -1 &&
        vidObject.indexOf("inner") === -1 &&
        vidObject.indexOf("strong") === -1 &&
        vidObject.indexOf("ing") === -1 &&
        vidObject.indexOf("brid") === -1 &&
        vidObject.indexOf("ctrl") === -1 &&
        vidObject.indexOf("location") === -1 &&
        vidObject.indexOf("wiki") === -1 &&
        vidObject.indexOf("//") === -1 &&
        vidObject.indexOf("Html") === -1 &&
        vidObject.indexOf("data") === -1 &&
        vidObject.indexOf("undefined") === -1 &&
        vidObject.indexOf("client") === -1 &&
        vidObject.indexOf("/") === -1 &&
        vidObject.indexOf("peri") === -1 &&
        vidObject.indexOf("ten") === -1 &&
        vidObject.indexOf("out") === -1 &&
        vidObject.indexOf("new") === -1 &&
        vidObject.indexOf("]") === -1 &&
        vidObject.indexOf("localStorag") === -1 &&
        vidObject.indexOf("t.loadEvent") === -1 &&
        vidObject.indexOf("[") === -1 &&
        vidObject.indexOf("a.severity") === -1 &&
        vidObject.indexOf("cont") === -1 &&
        vidObject.indexOf("\\") === -1 &&
        vidObject.indexOf("JSON.parse(") === -1 &&
        vidObject.indexOf("_w._sydConv") === -1 &&
        vidObject.indexOf("o.Prefetchi") === -1 &&
        vidObject.indexOf("get") === -1 &&
        vidObject.indexOf("&&") === -1 &&
        vidObject.indexOf(",") === -1
      ) {
        return vidObject;
      }
    });
    var i = 0;
    var l = sorFndOrd.length;
    for (i, l; i < l; i++) {
      var fndOrd = [];
      sorFndOrd.sort((a, b) => {
        while (a !== b && fndOrd.indexOf(a) === -1) {
          if (fndOrd.indexOf(a) > -1) {
            return;
          }
          fndOrd.push(a);
        }
        while (a === b && fndOrd.indexOf(a) === -1) {
          if (fndOrd.indexOf(a) > -1) {
            return;
          }
          fndOrd.push(a);
        }
        while (b !== a && fndOrd.indexOf(b) === -1) {
          if (fndOrd.indexOf(b) > -1) {
            return;
          }
          fndOrd.push(b);
          while (b === a && fndOrd.indexOf(b) === -1) {
            if (fndOrd.indexOf(b) > -1) {
              return;
            }
            fndOrd.push(b);
          }
        }
      });
    }
  }
  if (fndOrd) {
    const randomKey = Math.floor(Math.random() * Math.floor(fndOrd.length));
    var rndRes = fndOrd.filter((test) => {
      var elaspeTime = new Date() - time;
      var timeToExecute = maxTime - elaspeTime;
      for (var i = 0, l = randomKey; i < l; i++) {
        if (
          test.indexOf("false") === -1 &&
          test.indexOf("var") === -1 &&
          test.indexOf("=") === -1 &&
          test.indexOf(".") === -1 &&
          test.indexOf("(") === -1 &&
          test.indexOf(")") === -1 &&
          test.indexOf("_") === -1 &&
          test.indexOf(";") === -1 &&
          test.indexOf('"') === -1 &&
          test.indexOf("Error") === -1 &&
          test.indexOf("error") === -1 &&
          test.indexOf("Codes") === -1 &&
          test.indexOf("siz23") === -1 &&
          test.indexOf(":") === -1 &&
          test.indexOf("{}") === -1 &&
          test.indexOf("}") === -1 &&
          test.indexOf("<") === -1 &&
          test.indexOf(">") === -1 &&
          test.indexOf("EdgeWorksp") === -1
        ) {
          if (i >= 100) {
            break;
          }
          return test[i];
        }
      }
    });
    var rndSort = [];
    for (var i = 0, l = rndRes.length; i < l; i++) {
      rndRes.filter((o) => {
        rndSort.push(o !== rndRes[i]);
        if (rndSort.length === rndRes.length) {
          return;
        }
      });
      if (JSON.stringify(i) >= 3) {
        break;
      }
    }
    var sorKind = rndSort.toString().split(" ");
    var revKind = sorKind.reverse();
    var popKind = revKind.pop();
    var rndKind = popKind.split(",");
    return { playList: rndRes.sort((a, b) => a - b) };
  }
};
var seoYoutube = function (searchString, time) {
  console.log(
    Math.floor((maxTime - (new Date() % (1000 * 60))) / 1000) +
      "\n" +
      arguments.callee.name +
      "\nsearchString is !" +
      !searchString +
      ", = " +
      searchString +
      "\ntime is !" +
      !time +
      ", = " +
      time,
  );
  if (typeof time === "undefined") {
    time = Math.floor((maxTime - (new Date() % (1000 * 60))) / 1000);
  }
  if (typeof searchString === "undefined") {
    var searchString = testlt();
  }
  var rndSearch = `http://www.bing.com/search?q=${encodeURIComponent(searchString)}%20intitle%3A - YouTube+AND+*&PC=U316&top=50&skip=0&FORM=CHROMN`;
  var unFilData = UrlFetchApp.fetch(rndSearch, { muteHttpExceptions: true });
  var data = unFilData.getContentText();
  var idArray = vidFactor(data, time).vidArray;
  return { myIdArr: idArray };
};
var vidFactor = function (data, time) {
  console.log(
    Math.floor((maxTime - (new Date() % (1000 * 60))) / 1000) +
      "\n" +
      arguments.callee.name +
      "\ndata is !" +
      !data +
      ", = " +
      data +
      "\ntime is !" +
      !time +
      ", = " +
      time,
  );
  if (typeof time === "undefined") {
    time = Math.floor((maxTime - (new Date() % (1000 * 60))) / 1000);
  }
  if (typeof data !== "object") {
    data = [data];
  }
  var dataArray = [];
  var idArray = [];
  data.map((vidData) => {
    dataArray.push(vidData.slice(vidData.indexOf(`v=`)).toString().split(`v=`));
  });
  for (var i = 0, l = dataArray[0].length; i < l; i++) {
    idArray.push(dataArray[0][i].toString().substring(0, 11));
  }
  return { vidArray: idArray };
};
var crmCalc = function (func) {
  var appList = [];
  for (var key in globalThis) {
    if (typeof globalThis[key] == "function") {
      appList.push(key);
    }
  }
  var lowCapApp = [appList].join("").toLowerCase().split(",");
  var lowCapFunc = [func].join("").toLowerCase().split(",");
  console.log(
    Math.floor((maxTime - (new Date() % (1000 * 60))) / 1000) +
      "\n" +
      arguments.callee.name +
      "\nlowCapFunc is !" +
      !lowCapFunc +
      ", = " +
      lowCapFunc,
  );
  var funFirst = lowCapApp.indexOf(lowCapFunc[0]);
  var funFact = appList[funFirst] !== func;
  return funFact;
};
var crmT = function (func) {
  var appList = [];
  for (var key in globalThis) {
    if (typeof globalThis[key] == "function") {
      appList.push(key);
    }
  }
  var lowCapApp = [appList].join("").toLowerCase().split(",");
  var lowCapFunc = [func].join("").toLowerCase().split(",");
  console.log(
    Math.floor((maxTime - (new Date() % (1000 * 60))) / 1000) +
      "\n" +
      arguments.callee.name +
      "\nlowCapFunc is !" +
      !lowCapFunc +
      ", = " +
      lowCapFunc,
  );
  var funFirst = lowCapApp.indexOf(lowCapFunc[0]);
  return funFirst;
};
var testlt = function () {
  var numVarRnd = randNum(arguments.callee.name);
  var arrDRnd = appSort(numVarRnd);
  var searchString = randomSubstance(0, 6, arrDRnd).myNewArr;
  return searchString;
};
var gsFiles = function () {
  var gsFileList = [];
  for (var key in globalThis) {
    if (typeof globalThis[key] == "function") {
      gsFileList.push(key);
    }
  }
  return gsFileList;
};
var wwAccess = function (rname, rfunction, args) {
  const Route = {};
  Route.path = function (route, callback) {
    Route[route] = callback;
  };
  Route.path(rname, rfunction);
  args = args || [];
  return Route[rname](args);
};
const Route = {};
Route.path = function (route, callback) {
  return (Route[route] = callback);
};
var seoCapital = function (url) {
  // const videoSearch = [urlDataSource(url || getUrl(ScriptApp), null, {muteHttpExceptions:true, mode:"no-cors"})];
  // const table = videoSearch.slice(videoSearch.indexOf("SERP")).toString().split("SERP")
  // const pong = table.map((ping)=>{return ping.substring(0)})
  const html = HtmlService.createTemplate(
    `<html id="seoCapital"><head><base target="_top"><meta charset="utf-8"><meta name="seoCapital" content="Boilerplate SEO Capital"><meta name=viewport content="width=device-width, initial-scale=1"><link href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" rel="stylesheet"><link href="https://fonts.googleapis.com/css?family=Acme" rel="stylesheet"></head><body><div class="row"><div class="col s12 l12 m12 card-panel amber"><div class=""><div class="valign-wrapper col s12 receipt red darken-0 container" id="seoData"><label id="labSEOC"><strong></strong></label><div id="divSEOC" class="amber flow-text" style="clear: both;overflow-y: auto;overflow-x: auto;text-align: center"><table class="striped centered highlight responsive-table amber z-depth-5"><thead></thead><tbody><tr><td style="vertical-align: top;text-align: left"><table class="striped centered highlight responsive-table amber z-depth-5"><tbody><td style="width: 815px; height: 1024px; padding: 0;"><iframe class="z-depth-5 card-panel amber darken-0 scale-transition scale-out scale-in btn-large" src="${url}" id="w3Res" style="width:100%; height:100%" allow="autoplay" allow="encrypted-media" title="Dontime Life Website" frameborder="0" allowfullscreen></iframe></td></tbody></table></td></tr></tbody></table></div><input type="hidden" value="<?= getUrl(ScriptApp) ?>" id="breakUrl" /><script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script></body></html>`,
  );
  // html.pong = pong.toString().split(",");
  html.research = HtmlService.createHtmlOutput(
    `document.getElementById("w3Search").addEventListener("change", function() {var cap = document.getElementById("w3Search").value;console.log(cap)})`,
  );
  html.prefTimeChange =
    HtmlService.createHtmlOutput(`document.getElementById("w3Search").addEventListener("change", function() {
    //console.log(document.getElementById("test").innerHTML)
    // Init a timeout variable to be used below
    let timeout = null;(() => {
    // Clear the timeout if it has already been set.
    // This will prevent the previous task from executing
    // if it has been less than <MILLISECONDS>
    // clearTimeout(timeout);
    // Make a new timeout set to go off in 1000ms (1 second)
    // timeout = setTimeout
    // (function  () {
    // console.log('Input Value:', textInput.value)}, 5000)();
    if (typeof url === "undefined") {var urlData = document.getElementById("breakUrl").value;var url = urlData.toString()};var prodSearch = document.getElementById("w3Search").value;var linkFollow = document.createElement("a");linkFollow.href = url + "?func=seoCapital" + "&args=" + encodeURIComponent());linkFollow.id = "linkFOLLOW";linkFollow.target = "_top";document.body.appendChild(linkFollow);document.getElementById("linkFOLLOW").click();document.getElementById("w3Search").value = ""})()});`);
  html.dOMContentLoaded = HtmlService.createHtmlOutput(
    `document.addEventListener("DOMContentLoaded", function() {let timePicker = document.getElementById("breakUrl");M.Timepicker.init(timePicker,{defaultTime: "now" })});var elems = document.getElementById("breakUrl");var instances = M.FormSelect.init(elems);`,
  );
  html.recentSearch = HtmlService.createHtmlOutput(
    `document.addEventListener("DOMContentLoaded", homeW3);function homeW3() {function serverside(func, args) {return new Promise((resolve, reject) => {google.script.run.withSuccessHandler((result) => {resolve(result)}).withFailureHandler((error) => {console.log(error);console.log(document.getElementById("test").innerHTML);reject(error)}).runBoilerplate([func], [args])})};const htmlStructure = document.getElementById("divSEOC").innerHTML;const results = document.getElementById("w3Search");const strValue = results.value;results.addEventListener("change",(e) => {var cap = e.target.value;document.getElementById("w3Search").value = "";document.getElementById("divSEOC").innerHTML = "... waiting for " + cap;serverside("portBing", cap).then((vid) => {if (vid) {document.getElementById("divSEOC").innerHTML = htmlStructure;document.getElementById("w3Res").src = vid;}}).catch((er) => {console.log(er);document.getElementById("divSEOC").innerHTML = er})})}`,
  );
  console.log(eval(html.recentSearch));
  return html.evaluate().getContent();
};

// console.log("seoYoutube: \nvar " + unFilData + " = UrlFetchApp.fetch(" + rndSearch,{muteHttpExceptions:true} + ")");console.log("seoYoutube: \nvar " + idArray + " = vidFactor(" + data, time + ").vidArray");var elaspeTime = new Date() - time;console.log("vidData: \nelaspeTime: " + elaspeTime);console.log("vidFactor: \ndataArray.push(vidData.slice(" + vidData.indexOf(`v=`) + ").toString().split(" + `v=` + "))");var elaspeTime = new Date() - time;console.log("dataArray[0][i]: " + dataArray[0][i] + "\nelaspeTime: " + elaspeTime);console.log("vidFactor: \nidArray.push(" + dataArray[0][i] + ".toString().substring(" + 0,11 + "))")
