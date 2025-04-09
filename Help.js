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
    try {
      dataArray.push(
        vidData.slice(vidData.indexOf(`v=`)).toString().split(`v=`),
      );
    } catch (error) {
      return;
    }
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
  var lowCapApp = appList.map(function (item) {
    return item.toLowerCase();
  });
  var lowCapFunc;
  if (Array.isArray(func)) {
    lowCapFunc = func.join("").toLowerCase().split(",");
  } else if (typeof func === "string" && func) {
    lowCapFunc = func.toLowerCase();
  }
  console.log(
    Math.floor((maxTime - (new Date() % (1000 * 60))) / 1000) +
      "\n" +
      arguments.callee.name +
      "\nlowCapFunc is !" +
      !lowCapFunc +
      ", = " +
      lowCapFunc,
  );
  var funFact;
  if (Array.isArray(lowCapFunc)) {
    funFact = lowCapApp.indexOf(lowCapFunc[0]);
  } else if (typeof lowCapFunc === "string" && lowCapFunc) {
    funFact = lowCapApp.indexOf(lowCapFunc);
  }
  return funFact;
};
var crmT = function (func) {
  var appList = [];
  for (var key in globalThis) {
    if (typeof globalThis[key] == "function") {
      appList.push(key);
    }
  }
  var lowCapApp = appList.map(function (item) {
    return item.toLowerCase();
  });
  var lowCapFunc;
  if (Array.isArray(func)) {
    lowCapFunc = func.join("").toLowerCase().split(",");
  } else if (typeof func === "string" && func) {
    lowCapFunc = func.toLowerCase();
  }
  console.log(
    Math.floor((maxTime - (new Date() % (1000 * 60))) / 1000) +
      "\n" +
      arguments.callee.name +
      "\nlowCapFunc is !" +
      !lowCapFunc +
      ", = " +
      lowCapFunc,
  );
  var funFirst;
  if (Array.isArray(lowCapFunc)) {
    funFirst = lowCapApp.indexOf(lowCapFunc[0]);
  } else if (typeof lowCapFunc === "string" && lowCapFunc) {
    funFirst = lowCapApp.indexOf(lowCapFunc);
  }
  return funFirst;
};
var testlt = function () {
  var numVarRnd = randNum(
    arguments.callee.caller.name || arguments.callee.name,
  );
  var arrDRnd = appSort(numVarRnd);
  var searchString = randomSubstance(0, 6, arrDRnd).myNewArr;
  var fParams = gsFParams();
  var result = fParams.find((rndS) => {
    return rndS.name === searchString;
  });
  if (result) {
    return result;
  } else {
    return searchString;
  }
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
var gsFParams = function () {
  var gsParamsList = [];
  var globalScope = this;
  for (var key in globalScope) {
    if (typeof globalScope[key] === "function") {
      try {
        var funcString = globalScope[key].toString();
        var params = funcString
          .substring(funcString.indexOf("(") + 1, funcString.indexOf(")"))
          .split(",")
          .map(function (param) {
            return param.trim();
          })
          .filter(function (param) {
            return param !== "";
          });
        gsParamsList.push({ name: key, parameters: params });
      } catch (e) {
        Logger.log("Error processing function: " + key + ". Error: " + e);
        gsParamsList.push({ name: key, parameters: ["(Unable to parse)"] });
      }
    }
  }
  return gsParamsList;
};
var wwAccess = function (rName, rFunc, rArgs) {
  const Route = {};
  Route.path = function (route, rFunction) {
    Route[route] = rFunction;
  };
  if (this.hasOwnProperty(rFunc)) {
    var funcS = this[rFunc]; // Get the actual function
    Route.path(rName, funcS); // Associate the function with the route
    const args = rArgs;
    return Route[rName](args);
  } else {
    console.error("Invalid function name: " + rFunc);
    return "Invalid function name";
  }
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
    `<html id="seoCapital"><head><base target="_top"><meta charset="utf-8"><meta name="seoCapital" content="Boilerplate SEO Capital"><meta name="viewport" content="width=device-width, initial-scale=1"><link href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" rel="stylesheet" /><link href="https://fonts.googleapis.com/css?family=Acme" rel="stylesheet" /></head><body><div class="row"><div class="col s12 l12 m12 card-panel amber"><div class="responsiveSection"><div class="valign-wrapper col s12 receipt red darken-0 container" id="seoData"><label id="labSEOC"><strong></strong></label></div><div id="divSEOC" class="amber flow-text" style="clear: both;overflow-y: auto;overflow-x: auto;text-align: center"><table class="striped centered highlight responsive-table amber z-depth-5"><thead></thead><tbody><tr><td style="vertical-align: top;text-align: left"><table class="striped centered highlight responsive-table amber z-depth-5"><tbody><td style="width: 815px; height: 1024px; padding: 0;"><div class="video-container"><iframe class="z-depth-5 card-panel amber darken-0 scale-transition scale-out scale-in btn-large" src='${url}' id="w3Res" style="width: 100%;height: 100%" allow="autoplay" allow="encrypted-media" title="Dontime Life Website" frameborder="0" allowfullscreen></iframe></div></td></tbody></table></td></tr></tbody></table></div></div></div></div><input type="hidden" value="<?= getScriptUrl() ?>" id="breakUrl" /><script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script></body></html>`,
  );
  // html.pong = pong.toString().split(",");
  html.research =
    HtmlService.createHtmlOutput(`document.getElementById("w3Search").addEventListener("change", function() {var cap 
  = document.getElementById("w3Search").value;console.log(cap)})`);
  html.prefTimeChange =
    HtmlService.createHtmlOutput(`document.getElementById("w3Search").addEventListener("change", function() {
    //console.log(document.getElementById("test").innerHTML)
    // Init a timeout variable to be used below
    let timeout 
    = null;(() => {
    // Clear the timeout if it has already been set.
    // This will prevent the previous task from executing
    // if it has been less than <MILLISECONDS>
    // clearTimeout(timeout);
    // Make a new timeout set to go off in 1000ms (1 second)
    // timeout = setTimeout
    // (function  () {
    // console.log('Input Value:', textInput.value)}, 5000)();
    if (typeof url === "undefined") {var urlData 
    = document.getElementById("breakUrl").value;var url 
    = urlData.toString()};var prodSearch 
    = document.getElementById("w3Search").value;var linkFollow 
    = document.createElement("a");linkFollow.href 
    = url + "?func=seoCapital" + "&args=" + encodeURIComponent());linkFollow.id 
    = "linkFOLLOW";linkFollow.target 
    = "_top";document.body.appendChild(linkFollow);document.getElementById("linkFOLLOW").click();document.getElementById("w3Search").value 
    = ""})()});`);
  html.dOMContentLoaded =
    HtmlService.createHtmlOutput(`document.addEventListener("DOMContentLoaded", function() {let timePicker 
    = document.getElementById("breakUrl");M.Timepicker.init(timePicker,{defaultTime: "now" })});var elems 
    = document.getElementById("breakUrl");var instances 
    = M.FormSelect.init(elems);`);
  html.recentSearch =
    HtmlService.createHtmlOutput(`document.addEventListener("DOMContentLoaded", homeW3);function homeW3() {function serverside(func, args) {return new Promise((resolve, reject) => {google.script.run.withSuccessHandler((result) => {resolve(result)}).withFailureHandler((error) => {console.log(error);console.log(document.getElementById("test").innerHTML);reject(error)}).runBoilerplate([func], [args])})};const htmlStructure 
    = document.getElementById("divSEOC").innerHTML;const results 
    = document.getElementById("w3Search");const strValue 
    = results.value;results.addEventListener("change",(e) => {var cap 
    = e.target.value;document.getElementById("w3Search").value 
    = "";document.getElementById("divSEOC").innerHTML 
    = "... waiting for " + cap;serverside("portBing", cap).then((vid) => {if (vid) {document.getElementById("divSEOC").innerHTML 
    = htmlStructure;document.getElementById("w3Res").src 
    = vid;}}).catch((er) => {console.log(er);document.getElementById("divSEOC").innerHTML 
    = er})})}`);
  return html.evaluate().getContent();
};
var mis = function (text, maxRetries = 3) {
  var validUrl = isValidUrl(text);
  if (!validUrl.hostname) {
    var supFunc = misSt(text);
    var fx = supFunc.func;
    var payLoad = supFunc.args;
    // if (supFunc.func) {
    // if (supFunc.args) {
    //     var html =
    //       HtmlService.createTemplate(`<!DOCTYPE html><html lang="en"><body><div><label><nav class="center"><a id="caller" href="<?= getUrl(ScriptApp) ?>?func=<?= nav ?>&args=<?= action ?>" target="_top">update<label id="spLab"><strong><?!= seoCapital(HtmlService.createTemplate(decodeURIComponent(encodeURIComponent(url))).evaluate().getContent()) ?></strong></label><div id="contentPlayer"><iframe class="z-depth-5 card-panel deep-purple darken-1 scale-transition scale-out scale-in btn-large" src="<?= HtmlService.createTemplate(decodeURIComponent(encodeURIComponent(url))).evaluate().getContent() ?>" id="eventRes01" class="menu-img grey darken-4 z-depth-5" style="width: 100%; height: 100%; border: none;" allow="autoplay" allow="encrypted-media" title="Dontime Life Website" frameborder="0" allowfullscreen ></iframe></div></a></nav></label></div><br /><input type="hidden" value="<?= getScriptUrl() ?>" id="breakUrl" /></body></html><script>var appUrl
    // = document.getElementById("breakUrl");</script>`);
    //     html.url =
    //       getScriptUrl().toString() + "?func=" + fx + "&args=" + payLoad;
    // html.nav = fx;
    // html.action = payLoad;
    //     return html.evaluate().getContent();
    // } else if (!supFunc.args) {
    // const fx = supFunc.func;
    //     var html =
    //       HtmlService.createTemplate(`<!DOCTYPE html><html lang="en"><body><div><label><nav class="center"><a id="caller" href="<?= getUrl(ScriptApp) ?>?func=<?= nav ?>" target="_top">update<label id="spLab"><strong><?!= seoCapital(HtmlService.createTemplate(decodeURIComponent(encodeURIComponent(url))).evaluate().getContent()) ?></strong></label><div id="contentPlayer"><iframe class="z-depth-5 card-panel deep-purple darken-1 scale-transition scale-out scale-in btn-large" src="<?= HtmlService.createTemplate(decodeURIComponent(encodeURIComponent(url))).evaluate().getContent() ?>" id="eventRes01" class="menu-img grey darken-4 z-depth-5" style="width: 100%; height: 100%; border: none;" allow="autoplay" allow="encrypted-media" title="Dontime Life Website" frameborder="0" allowfullscreen ></iframe></div></a></nav></label></div><br /><input type="hidden" value="<?= getScriptUrl() ?>" id="breakUrl" /></body></html><script>var appUrl
    // = document.getElementById("breakUrl");</script>`);
    //     html.url = getScriptUrl().toString() + "?func=" + fx;
    // html.nav = fx;
    //     return html.evaluate().getContent();
    // }

    let htmlContent = `<!DOCTYPE html><html lang="en"><body><div><label><nav class="center"><a id="caller" href="<?= getUrl(ScriptApp) ?>?func=<?= nav ?>" target="_top">update<label id="spLab"><strong><?!= seoCapital(HtmlService.createTemplate(decodeURIComponent(encodeURIComponent(url))).evaluate().getContent()) ?></strong></label><div id="contentPlayer"><iframe class="z-depth-5 card-panel deep-purple darken-1 scale-transition scale-out scale-in btn-large" src="<?= HtmlService.createTemplate(decodeURIComponent(encodeURIComponent(url))).evaluate().getContent() ?>" id="eventRes01" class="menu-img grey darken-4 z-depth-5" style="width: 100%; height: 100%; border: none;" allow="autoplay" allow="encrypted-media" title="Dontime Life Website" frameborder="0" allowfullscreen ></iframe></div></a></nav></label></div><br /><input type="hidden" value="<?= getScriptUrl() ?>" id="breakUrl" /></body></html><script>var appUrl
    = document.getElementById("breakUrl");</script>`;
    let html = HtmlService.createTemplate(htmlContent);
    html.url =
      getScriptUrl() + "?func=" + fx + (payLoad ? "&args=" + payLoad : "");
    html.nav = fx;
    html.action = payLoad;
    var supUrl =
      getScriptUrl().toString() +
      "?func=mis&args=" +
      (payLoad ? fx + "," + payLoad : fx);
    // var form = formMaker();
    var payT = [payLoad ? fx + " " + payLoad : fx].join("").toUpperCase();
    var form = formMaker(
      payT,
      "misForms",
      Math.floor((maxTime - (new Date() % (1000 * 60))) / 1000),
    );

    if (typeof form === "object") {
      // fileManager(coData.rndTitle, "Forms")
      form
        .addSectionHeaderItem()
        .setTitle(globalThis[supFunc.func].toString())
        .setHelpText(supUrl);
      form.addTextItem().setTitle("Industry").setRequired(true);
      form.addTextItem().setTitle("Sector").setRequired(true);
      form
        .addParagraphTextItem()
        .setTitle("Industry/Market Corrections")
        .setRequired(false);
      form.addParagraphTextItem().setTitle("News").setRequired(false);
      form
        .addParagraphTextItem()
        .setTitle("Economic/Business Cycles")
        .setRequired(false);
      form.addTextItem().setTitle("Stock Price").setRequired(true);
      form.addTextItem().setTitle("Outstanding Shares").setRequired(true);
      form.addTextItem().setTitle("Quarterly Earnings").setRequired(true);
      form.addTextItem().setTitle("Annualized Net Income").setRequired(false);
      form.addTextItem().setTitle("Total Equity").setRequired(false);
      form.addTextItem().setTitle("Retained Earnings").setRequired(false);
      form
        .addTextItem()
        .setTitle("Cash & Marketable Securities")
        .setRequired(true);
      form.addTextItem().setTitle("Accounts Receivable").setRequired(true);
      form.addTextItem().setTitle("Inventories").setRequired(true);
      form.addTextItem().setTitle("Long-term Investments").setRequired(false);
      form.addTextItem().setTitle("Net PP&E").setRequired(false);
      form
        .addTextItem()
        .setTitle("Current Financial Liabilities")
        .setRequired(true);
      form
        .addTextItem()
        .setTitle("Long-term Interest-bearing Debts")
        .setRequired(false);
      form
        .addTextItem()
        .setTitle("Current Year Total Earnings")
        .setRequired(false);
      form
        .addTextItem()
        .setTitle("Base Year Total Earnings")
        .setRequired(false);
      form.addTextItem().setTitle("Your Name").setRequired(true);
      form.addDateItem().setTitle("Birth Date").setRequired(true);
      form.addParagraphTextItem().setTitle("Your Message").setRequired(true);
      form
        .setTitle(JSON.stringify(supFunc))
        .setConfirmationMessage("Thanks for your feedback !!");
      var url = form.getPublishedUrl();
    }
    return { index: url, app: supFunc.res };
  } else {
    let response;
    let location;
    let retries = 0;
    let delay = 1000;
    try {
      // if (supFunc) {
      //   var response = UrlFetchApp.fetch(supFunc.args, {
      //     followRedirects: false, // Prevent automatic redirects
      //   });
      // } else {
      //   var response = UrlFetchApp.fetch(text, {
      //     followRedirects: false, // Prevent automatic redirects
      //   });
      // }
      response = UrlFetchApp.fetch(
        supFunc && supFunc.args ? supFunc.args : text,
        {
          followRedirects: false, // Prevent automatic redirects
          muteHttpExceptions: true,
        },
      );
    } catch (e) {
      Logger.log("Error fetching URL: ", e.toString());
      console.error("Error fetching URL: ", e.toString());
      // var form = formMaker();
      var form = formMaker(
        [JSON.stringify(validUrl)].join("").toUpperCase(),
        "misForms",
        Math.floor((maxTime - (new Date() % (1000 * 60))) / 1000),
      );

      if (typeof form === "object") {
        // fileManager(coData.rndTitle, "Forms")
        form
          .addSectionHeaderItem()
          .setTitle("Error fetching URL")
          .setHelpText(e);
        form.addTextItem().setTitle("Industry").setRequired(true);
        form.addTextItem().setTitle("Sector").setRequired(true);
        form
          .addParagraphTextItem()
          .setTitle("Industry/Market Corrections")
          .setRequired(false);
        form.addParagraphTextItem().setTitle("News").setRequired(false);
        form
          .addParagraphTextItem()
          .setTitle("Economic/Business Cycles")
          .setRequired(false);
        form.addTextItem().setTitle("Stock Price").setRequired(true);
        form.addTextItem().setTitle("Outstanding Shares").setRequired(true);
        form.addTextItem().setTitle("Quarterly Earnings").setRequired(true);
        form.addTextItem().setTitle("Annualized Net Income").setRequired(false);
        form.addTextItem().setTitle("Total Equity").setRequired(false);
        form.addTextItem().setTitle("Retained Earnings").setRequired(false);
        form
          .addTextItem()
          .setTitle("Cash & Marketable Securities")
          .setRequired(true);
        form.addTextItem().setTitle("Accounts Receivable").setRequired(true);
        form.addTextItem().setTitle("Inventories").setRequired(true);
        form.addTextItem().setTitle("Long-term Investments").setRequired(false);
        form.addTextItem().setTitle("Net PP&E").setRequired(false);
        form
          .addTextItem()
          .setTitle("Current Financial Liabilities")
          .setRequired(true);
        form
          .addTextItem()
          .setTitle("Long-term Interest-bearing Debts")
          .setRequired(false);
        form
          .addTextItem()
          .setTitle("Current Year Total Earnings")
          .setRequired(false);
        form
          .addTextItem()
          .setTitle("Base Year Total Earnings")
          .setRequired(false);
        form.addTextItem().setTitle("Your Name").setRequired(true);
        form.addDateItem().setTitle("Birth Date").setRequired(true);
        form.addParagraphTextItem().setTitle("Your Message").setRequired(true);
        form
          .setTitle(JSON.stringify(validUrl))
          .setConfirmationMessage("Thanks for your feedback !!");
        var url = form.getPublishedUrl();
      }
    }
    try {
      if (response) {
        var res = response.getResponseCode();
        if (res) {
          if (res === 429) {
            retries++;
            delay += 2;
            Utilities.sleep(delay + Math.random() * 500);
            Logger.log(`Rate limit hit, retrying in ${delay} ms`);
            while (retries < maxRetries) {
              try {
                response = UrlFetchApp.fetch(
                  supFunc && supFunc.args ? supFunc.args : text,
                  {
                    followRedirects: false, // Prevent automatic redirects
                    muteHttpExceptions: true,
                  },
                );
              } catch (error) {
                Logger.log("Error fetching data: " + error);
                retries++;
                delay += 2;
                Utilities.sleep(delay);
              }
            }
            Logger.log("Max retries reached, failed to fetch data.");
          } else {
            if (res >= 300 && res < 400) {
              // Redirect occurred
              location = response.getHeaders().Location;
              // var form = formMaker();
              var form = formMaker(
                [JSON.stringify(validUrl)].join("").toUpperCase(),
                "misForms",
                Math.floor((maxTime - (new Date() % (1000 * 60))) / 1000),
              );

              if (typeof form === "object") {
                // fileManager(coData.rndTitle, "Forms")
                form
                  .addSectionHeaderItem()
                  .setTitle(
                    "Redirect occurred\n" +
                      UrlFetchApp.fetch(location, {
                        followRedirects: true,
                        muteHttpExceptions: true,
                      }).getContentText(),
                  )
                  .setHelpText(location);
                form.addTextItem().setTitle("Industry").setRequired(true);
                form.addTextItem().setTitle("Sector").setRequired(true);
                form
                  .addParagraphTextItem()
                  .setTitle("Industry/Market Corrections")
                  .setRequired(false);
                form.addParagraphTextItem().setTitle("News").setRequired(false);
                form
                  .addParagraphTextItem()
                  .setTitle("Economic/Business Cycles")
                  .setRequired(false);
                form.addTextItem().setTitle("Stock Price").setRequired(true);
                form
                  .addTextItem()
                  .setTitle("Outstanding Shares")
                  .setRequired(true);
                form
                  .addTextItem()
                  .setTitle("Quarterly Earnings")
                  .setRequired(true);
                form
                  .addTextItem()
                  .setTitle("Annualized Net Income")
                  .setRequired(false);
                form.addTextItem().setTitle("Total Equity").setRequired(false);
                form
                  .addTextItem()
                  .setTitle("Retained Earnings")
                  .setRequired(false);
                form
                  .addTextItem()
                  .setTitle("Cash & Marketable Securities")
                  .setRequired(true);
                form
                  .addTextItem()
                  .setTitle("Accounts Receivable")
                  .setRequired(true);
                form.addTextItem().setTitle("Inventories").setRequired(true);
                form
                  .addTextItem()
                  .setTitle("Long-term Investments")
                  .setRequired(false);
                form.addTextItem().setTitle("Net PP&E").setRequired(false);
                form
                  .addTextItem()
                  .setTitle("Current Financial Liabilities")
                  .setRequired(true);
                form
                  .addTextItem()
                  .setTitle("Long-term Interest-bearing Debts")
                  .setRequired(false);
                form
                  .addTextItem()
                  .setTitle("Current Year Total Earnings")
                  .setRequired(false);
                form
                  .addTextItem()
                  .setTitle("Base Year Total Earnings")
                  .setRequired(false);
                form.addTextItem().setTitle("Your Name").setRequired(true);
                form.addDateItem().setTitle("Birth Date").setRequired(true);
                form
                  .addParagraphTextItem()
                  .setTitle("Your Message")
                  .setRequired(true);
                form
                  .setTitle(JSON.stringify(validUrl))
                  .setConfirmationMessage("Thanks for your feedback !!");
                var url = form.getPublishedUrl();
              }
            } else {
              // No redirect or other error
              location = response.getContentText();
              // var form = formMaker();
              var form = formMaker(
                [JSON.stringify(validUrl)].join("").toUpperCase(),
                "misForms",
                Math.floor((maxTime - (new Date() % (1000 * 60))) / 1000),
              );

              if (typeof form === "object") {
                // fileManager(coData.rndTitle, "Forms")
                form
                  .addSectionHeaderItem()
                  .setTitle(
                    "No redirect or other error\n" + response.getContentText(),
                  )
                  .setHelpText(validUrl.hostname);
                form.addTextItem().setTitle("Industry").setRequired(true);
                form.addTextItem().setTitle("Sector").setRequired(true);
                form
                  .addParagraphTextItem()
                  .setTitle("Industry/Market Corrections")
                  .setRequired(false);
                form.addParagraphTextItem().setTitle("News").setRequired(false);
                form
                  .addParagraphTextItem()
                  .setTitle("Economic/Business Cycles")
                  .setRequired(false);
                form.addTextItem().setTitle("Stock Price").setRequired(true);
                form
                  .addTextItem()
                  .setTitle("Outstanding Shares")
                  .setRequired(true);
                form
                  .addTextItem()
                  .setTitle("Quarterly Earnings")
                  .setRequired(true);
                form
                  .addTextItem()
                  .setTitle("Annualized Net Income")
                  .setRequired(false);
                form.addTextItem().setTitle("Total Equity").setRequired(false);
                form
                  .addTextItem()
                  .setTitle("Retained Earnings")
                  .setRequired(false);
                form
                  .addTextItem()
                  .setTitle("Cash & Marketable Securities")
                  .setRequired(true);
                form
                  .addTextItem()
                  .setTitle("Accounts Receivable")
                  .setRequired(true);
                form.addTextItem().setTitle("Inventories").setRequired(true);
                form
                  .addTextItem()
                  .setTitle("Long-term Investments")
                  .setRequired(false);
                form.addTextItem().setTitle("Net PP&E").setRequired(false);
                form
                  .addTextItem()
                  .setTitle("Current Financial Liabilities")
                  .setRequired(true);
                form
                  .addTextItem()
                  .setTitle("Long-term Interest-bearing Debts")
                  .setRequired(false);
                form
                  .addTextItem()
                  .setTitle("Current Year Total Earnings")
                  .setRequired(false);
                form
                  .addTextItem()
                  .setTitle("Base Year Total Earnings")
                  .setRequired(false);
                form.addTextItem().setTitle("Your Name").setRequired(true);
                form.addDateItem().setTitle("Birth Date").setRequired(true);
                form
                  .addParagraphTextItem()
                  .setTitle("Your Message")
                  .setRequired(true);
                form
                  .setTitle(JSON.stringify(validUrl))
                  .setConfirmationMessage("Thanks for your feedback !!");
                var url = form.getPublishedUrl();
              }
            }
          }
        }
      }
    } catch (e) {
      Logger.log("Error resolving TinyURL: " + e.toString());
      console.error("Error resolving TinyURL: ", e.toString());
    }
    return { index: url };
  }
};
var misSt = function (func, someArgs) {
  var funcUno = decodeURIComponent(func);
  // ? console.log("funcUno = " + typeof funcUno)
  // : console.error("funcUno = " + typeof funcUno);
  var funcDos = decodeURIComponent(someArgs);
  // ? console.log("funcDos = " + typeof funcDos)
  // : console.error("funcDos = " + typeof funcDos);
  var argsX = [];
  var content = [];
  var keys = [funcDos !== "undefined" ? [funcUno].concat([funcDos]) : [funcUno]]
    .toString()
    .split(",");
  keys.forEach((pro) => {
    var bPro = crmT(pro);
    if (bPro >= 0) {
      argsX.push(gsFiles()[bPro]);
    } else {
      content.push(pro);
    }
  });
  // ? console.log("funcDos = " + typeof funcDos)
  // : console.error("funcDos = " + typeof funcDos);
  console.log(
    "misSt returned :\nfunc = " +
      argsX +
      ":\nargs = " +
      content.toString().replace(/,/g, " "),
  );
  var cString = content.toString().replace(/,/g, " ");
  var jsonData = globalThis[argsX.toString()].apply(this, content);
  console.log("typeof " + typeof jsonData + " jsonDara");
  var argsObject = { func: argsX.toString(), args: cString, res: jsonData };
  return argsObject;
};
var isValidUrl = function (url) {
  var protocol = "";
  var hostname = "";
  var pathname = "";
  var query = "";
  if (typeof url !== "string" || url.length === 0) {
    return { protocol: "", hostname: "", pathname: "", query: "" };
  }
  var protocolEnd = url.indexOf("//");
  if (protocolEnd !== -1) {
    protocol = url.substring(0, protocolEnd + 2);
    url = url.substring(protocolEnd + 2);
  }
  var hostnameEnd = url.indexOf("/");
  if (hostnameEnd !== -1) {
    hostname = url.substring(0, hostnameEnd);
    pathname = url.substring(hostnameEnd);
  } else {
    hostname = url;
  }
  var queryStart = pathname.indexOf("?");
  if (queryStart !== -1) {
    query = pathname.substring(queryStart);
    pathname = pathname.substring(0, queryStart);
  }
  var hostnameRegex = /^([a-zA-Z0-9.-]+)(\.[a-zA-Z]{2,})+$/;
  if (hostname && !hostnameRegex.test(hostname)) {
    return { protocol: "", hostname: "", pathname: "", query: "" };
  }
  return {
    protocol: protocol,
    hostname: hostname,
    pathname: pathname,
    query: query,
  };
};
var vidPlaylist = function (tunPlay) {
  console.log(
    Math.floor((maxTime - (new Date() % (1000 * 60))) / 1000) +
      "\n" +
      arguments.callee.name +
      "\ntunPlay !" +
      !tunPlay +
      ", = " +
      tunPlay,
  );
  var testGen = testlt();
  var listGen = objectOfS(
    ["parameter"],
    [[["func", testGen]]],
    Math.floor((maxTime - (new Date() % (1000 * 60))) / 1000),
  ).parameter["func"];
  var noList = [];
  while (noList.length < 3) {
    var noVid = substanceVegas(
      0,
      [listGen].toString().length,
      [listGen].toString().split(""),
    ).substWord;
    noList.push(noVid);
  }
  var randomPlaylist;
  tunPlay
    ? (randomPlaylist = needPastTime(tunPlay).map((itemList) => {
        if (itemList) {
          if (!listObj) {
            var listObj = [];
          }
          listObj.push(itemList);
        }
        return listObj;
      }))
    : (randomPlaylist = noList);
  // return console.log(randomPlaylist)
  console.log(arguments.callee.name + ": \nRecieved: " + randomPlaylist);
  var randomVidKey = Math.floor(
    Math.random() * Math.floor(randomPlaylist.length),
  );
  var playListSorted = randomPlaylist.sort((a, b) => a - b);
  console.log(
    "vidPlaylist: \nDeclaring videoObject = covObjects(" +
      playListSorted +
      ",[youtubeID])",
  );
  var videoObject = covObjects(playListSorted, ["youtubeID"]);
  console.log(
    "vidPlaylist: \nRecieved" +
      JSON.stringify(videoObject) +
      " from  declared variable videoObject = covObjects(" +
      playListSorted +
      ",[youtubeID])",
  );
  if (typeof videoObject["youtubeID"] !== "undefined") {
    var uniqueVidKey = [videoObject].entries().next().value;
    var randomVid = uniqueVidKey[1][randomVidKey];
    var rVideo = randomVid["youtubeID"];
    var randomVideo =
      rVideo ||
      playListSorted[
        Math.floor(Math.random() * Math.floor(playListSorted.length))
      ];
  }
  var youtubeUrl = "http://www.youtube.com/watch?v=" + randomVideo;
  // return console.log({videoItem: randomVideo,videoItemUrl: youtubeUrl,playlistArr: playListSorted})
  return {
    videoItem: randomVideo,
    videoItemUrl: youtubeUrl,
    playlistArr: playListSorted,
  };
};

// console.log("seoYoutube: \nvar " + unFilData + " = UrlFetchApp.fetch(" + rndSearch,{muteHttpExceptions:true} + ")");console.log("seoYoutube: \nvar " + idArray + " = vidFactor(" + data, time + ").vidArray");var elaspeTime = new Date() - time;console.log("vidData: \nelaspeTime: " + elaspeTime);console.log("vidFactor: \ndataArray.push(vidData.slice(" + vidData.indexOf(`v=`) + ").toString().split(" + `v=` + "))");var elaspeTime = new Date() - time;console.log("dataArray[0][i]: " + dataArray[0][i] + "\nelaspeTime: " + elaspeTime);console.log("vidFactor: \nidArray.push(" + dataArray[0][i] + ".toString().substring(" + 0,11 + "))")
