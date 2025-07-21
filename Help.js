var seoPastTime = function (searchString, time) {
  console.log(
    formatTime(functionRegistry.time) +
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
  if (typeof searchString === "undefined") {
    var searchString = globalThis.searchString().myNewArr;
  }
  while (typeof fndOrd !== "object") {
    var uniqueVid = seoYoutube(searchString, functionRegistry.time).myIdArr;
    var sorFndOrd = uniqueVid.filter((vidObject) => {
      var elaspeTime = functionRegistry.time;
      var timeToExecute = functionRegistry.timeLeftToExecute;
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
        vidObject.indexOf('"inversion"') === -1 &&
        vidObject.indexOf("Math.min(h-") === -1 &&
        vidObject.indexOf("regexEsc(a)") === -1 &&
        vidObject.indexOf('"origin-tri') === -1 &&
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
      var elaspeTime = functionRegistry.time;
      var timeToExecute = functionRegistry.timeLeftToExecute;
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
      if (JSON.stringify(i) >= 0) {
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
  // console.log(
  //   formatTime(functionRegistry.time) +
  //     "\n" +
  //     arguments.callee.name +
  //     "\nsearchString is !" +
  //     !searchString +
  //     ", = " +
  //     searchString +
  //     "\ntime is !" +
  //     !time +
  //     ", = " +
  //     time,
  // );
  if (typeof searchString === "undefined") {
    var searchString = globalThis.searchString().myNewArr;
  }
  var rndSearch = `http://www.bing.com/search?q=${encodeURIComponent(searchString)}%20intitle%3A - YouTube+AND+*&PC=U316&top=50&skip=0&FORM=CHROMN`;
  var unFilData = UrlFetchApp.fetch(rndSearch, { muteHttpExceptions: true });
  var data = unFilData.getContentText();
  var idArray = vidFactor(data, time).vidArray;
  return { myIdArr: idArray };
};
var vidFactor = function (data, time) {
  // console.log(
  //   formatTime(functionRegistry.time) +
  //     "\n" +
  //     arguments.callee.name +
  //     "\ndata is !" +
  //     !data +
  //     ", = " +
  //     data.substring(0, 100) +
  //     "\ntime is !" +
  //     !time +
  //     ", = " +
  //     time,
  // );
  if (typeof data !== "object") {
    data = [data];
  }
  var dataArray = [];
  var idArray = [];
  data.map((vidData) => {
    try {
      var veqIndex = vidData.indexOf(`v=`);
      var veqResult = vidData.slice(veqIndex).split(`v=`);
      dataArray.push(veqResult);
    } catch (error) {
      Logger.log("dataArray.push failed");
    }
  });
  for (var i = 0, l = dataArray[0].length; i < l; i++) {
    var veqStr = dataArray[0][i];
    var veqLoop = veqStr.substring(0, 11);
    idArray.push(veqLoop);
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
    functionRegistry.time +
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
    functionRegistry.time +
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
  console.log(
    arguments.callee.caller.name +
      "\n*** Inside testlt() function. It has been called. ***",
  );
  // var numVarRnd = randNum;
  // var arrNum = numVarRnd
  // var arrDRnd = appSort(arrNum);
  // var searchString = randomSubstance(0, 6, arrDRnd).myNewArr;
  var ssearchString = globalThis.searchString().myNewArr;
  var fParams = gsFParams();
  var result = fParams.find((rndS) => {
    return rndS.name === ssearchString;
  });
  if (result) {
    return result;
  } else {
    console.log("No function parameters found for:", searchString);
    return searchString;
  }
  // Make sure testlt() returns something that JSON.parse expects,
  // or it will also cause issues down the line.
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
var paramVals = function (funcInfo) {
  var fParams = gsFParams();
  var result = fParams.find((rndS) => {
    return rndS.name === funcInfo;
  });
  if (typeof result === "object" && result !== null && result.name) {
    misArgs =
      result.parameters && result.parameters.length > 0
        ? [result.name, ...result.parameters]
        : [result.name];
  }
  return misArgs;
};
var resolveParams = function (func, someArgs) {
  var funcUno = decodeURIComponent(func);
  // ? console.log("funcUno = " + typeof funcUno)
  // : console.error("funcUno = " + typeof funcUno);
  var funcDos = decodeURIComponent(someArgs);
  // ? console.log("funcDos = " + typeof funcDos)
  // : console.error("funcDos = " + typeof funcDos);
  var numVarRnd = randNum(
    arguments.callee.caller.name || arguments.callee.name,
  );
  var argsX = [];
  var content = [];
  var keys = [
    funcDos !== "undefined"
      ? [funcUno].concat([Object.values(funcDos)])
      : [funcUno],
  ]
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
  if (argsX) {
    var allErrors = {};
    var fParams = gsFParams();
    var resCount = 0;
    argsX.forEach((result) => {
      console.log("argsX result " + resCount + ": " + result);
      var args = {};
      var resolvedArgs = [];
      var missingParams = [];
      var searchString = fParams.find((rndS) => {
        return rndS.name === result;
      });
      var orderedArgs = [];
      if (
        searchString &&
        searchString !== "undefined" &&
        searchString !== null &&
        searchString.parameters
      ) {
        var declaredParams = searchString.parameters;
        console.log(
          "Current content: " +
            content +
            "\nDeclared parameters: " +
            declaredParams,
        );
        var contentMap = {};
        content.forEach((item) => {
          declaredParams.forEach((declaredParam) => {
            if (item !== null) {
              if (item === declaredParam || item.includes(declaredParam)) {
                contentMap[declaredParam] = item;
              }
            }
          });
        });
        declaredParams.forEach((paramName) => {
          if (contentMap.hasOwnProperty(paramName)) {
            orderedArgs.push(contentMap[paramName]);
          } else {
            orderedArgs.push(null);
          }
        });
        console.log("Ordered arguments: " + orderedArgs);
        content = orderedArgs;
      }
      if (content) {
        var htmlArray = [
          `index proMedia epaWebsite callBack oddChances jsGame checkOnDay uiAccess popUpOpen congressLeg congressMembers jFundamentals gnuFree myGNUFreeJS Section3.Challenge1 cors edgarFriendly editor ssForms styling theRoll theWorks uiAccess cGWI`,
        ]
          .toString()
          .split(" ");
        var allFolders = folderManager();
        var uniqueCoArray = sheetCalc();
        var uniqueItemArray = itemCalc();
        content.forEach((paramName, index) => {
          var declaredParamName = declaredParams[index];
          if (
            paramName === "e" ||
            (paramName === null && declaredParamName === "e")
          ) {
            args["e"] = objectOfS(
              ["parameter"],
              [
                [
                  ["func", result],
                  ["args", JSON.stringify(content)],
                  ["action", "getData"],
                  ["file", "uiAccess"],
                ],
              ],
              functionRegistry.time,
            );
            resolvedArgs.push(args["e"]);
          } else if (
            paramName === "time" ||
            (paramName === null && declaredParamName === "time")
          ) {
            args["time"] = functionRegistry.time;
            resolvedArgs.push(args["time"]);
          } else if (
            paramName === "data" ||
            (paramName === null && declaredParamName === "data")
          ) {
            var rndE = objectOfS(
              ["parameter"],
              [
                [
                  ["func", "mis"],
                  ["args", [result, ...content]],
                ],
              ],
              functionRegistry.time,
            );
            var funcUno = rndE.parameter["func"];
            var funcDos = rndE.parameter["args"];
            if (!funcUno === "resolvedParams") {
              var payLoad = globalThis[funcUno].apply(this, funcDos);
            }
            args["data"] = {
              message: payLoad,
              timestamp: new Date(),
            };
            resolvedArgs.push(args["data"]);
          } else if (
            paramName === "func" ||
            (paramName === null && declaredParamName === "func")
          ) {
            args["func"] = result;
            resolvedArgs.push(args["func"]);
          }
          // else if (
          //   paramName === "searchString" ||
          //   (paramName === null && declaredParamName === "searchString")
          // ) {
          //   args["searchString"] = substanceVegas(
          //     0,
          //     [
          //       objectOfS(
          //         ["parameter"],
          //         [[["func", result]]],
          //         Math.floor((maxTime - (new Date() % (1000 * 60))) / 1000),
          //       ).parameter["func"],
          //     ].toString().length,
          //     [
          //       objectOfS(
          //         ["parameter"],
          //         [[["func", result]]],
          //         Math.floor((maxTime - (new Date() % (1000 * 60))) / 1000),
          //       ).parameter["func"],
          //     ]
          //       .toString()
          //       .split(""),
          //   ).substWord;
          //   resolvedArgs.push(args["searchString"]);
          // }
          else if (
            paramName === "varA" ||
            (paramName === null && declaredParamName === "varA")
          ) {
            arrDRnd = appSort(numVarRnd);
            searchString = randomSubstance(0, 6, arrDRnd).myNewArr;
            result = fParams.find((rndS) => {
              return rndS.name === searchString;
            });
            if (typeof result === "string") {
              args["varA"] = globalThis[result]();
            } else if (
              typeof result === "object" &&
              result !== null &&
              result.name
            ) {
              args["varA"] = globalThis[result.name].apply(result.parameters);
            } else if (result !== null && result.name) {
              args["varA"] = globalThis[result.name]();
            }
            resolvedArgs.push(args["varA"]);
          } else if (
            paramName === "url" || paramName === "companyNameUrl"
            (paramName === null && (declaredParamName === "url" || declaredParamName === "companyNameUrl"))
          ) {
            functionRegistry.gTree
            var folder = functionRegistry.getFolderList()[numVarRnd];
            args["url"] = fileBrowser(folder).url;
            resolvedArgs.push(args["url"]);
          } else if (
            paramName === "object" ||
            (paramName === null && declaredParamName === "object")
          ) {
            args["object"] = JSON.stringify({});
            resolvedArgs.push(args["object"]);
          } else if (
            paramName === "file" ||
            (paramName === null && declaredParamName === "file")
          ) {
            var rndPage =
              htmlArray[
                Math.floor(Math.random() * Math.floor(htmlArray.length))
              ];
            args["file"] = rndPage;
            resolvedArgs.push(args["file"]);
          } else if (
            paramName === "fileX" ||
            (paramName === null && declaredParamName === "fileX")
          ) {
            var folderX = allFolders[numVarRnd];
            var folderRoot = DriveApp.getFoldersByName(folderX);
            let fileXName = "undefined";
            if (folderRoot.hasNext) {
              var fileBulk = folderRoot.next().getFiles();
              const fileNames = [];
              if (fileBulk.hasNext()) {
                while (fileBulk.hasNext()) {
                  var fileUrl = fileBulk.next();
                  fileNames.push(fileUrl.getName());
                }
                if (fileNames.length > 0) {
                  fileXName =
                    fileNames[Math.floor(Math.random() * fileNames.length)];
                }
              }
            }
            args["fileX"] = fileXName;
            resolvedArgs.push(args["fileX"]);
          } else if (
            paramName === "folderX" ||
            paramName === "folder" ||
            (paramName === null && declaredParamName === "folderX") ||
            declaredParamName === "folder"
          ) {
            if (paramName === "folderX") {
              args["folderX"] = allFolders[numVarRnd];
              resolvedArgs.push(args["folderX"]);
            } else if (paramName === "folder") {
              args["folder"] = allFolders[numVarRnd];
              resolvedArgs.push(args["folder"]);
            }
          } else if (
            paramName === "numIndex" ||
            (paramName === null && declaredParamName === "numIndex")
          ) {
            args["numIndex"] = numVarRnd;
            resolvedArgs.push(args["numIndex"]);
          } else if (
            paramName === "infinitum" ||
            (paramName === null && declaredParamName === "infinitum")
          ) {
            args["infinitum"] = numVarRnd;
            resolvedArgs.push(args["infinitum"]);
          } else if (
            paramName === "itemName" ||
            (paramName === null && declaredParamName === "itemName")
          ) {
            var rndItemIndex = Math.floor(
              Math.random() * Math.floor(uniqueItemArray.length),
            );
            args["itemName"] = uniqueItemArray[rndItemIndex].Description;
            resolvedArgs.push(args["itemName"]);
          } else if (
            paramName === "tunPlay" ||
            paramName === "searchString" ||
            paramName === "rndKey" ||
            paramName === "search" ||
            (paramName === null && declaredParamName === "tunPlay") ||
            declaredParamName === "searchString" ||
            declaredParamName === "search" ||
            declaredParamName === "rndKey"
          ) {
            var rndItemIndex = Math.floor(
              Math.random() * Math.floor(uniqueCoArray.length),
            );
            var tiParam = uniqueCoArray[rndItemIndex]["title"];
            if (paramName === "tunPlay") {
              args["tunPlay"] = tiParam;
              resolvedArgs.push(args["tunPlay"]);
            } else if (paramName === "searchString") {
              args["searchString"] = tiParam;
              resolvedArgs.push(args["searchString"]);
            } else if (paramName === "rndKey") {
              args["rndKey"] = tiParam;
              resolvedArgs.push(args["rndKey"]);
            } else if (paramName === "search") {
              args["search"] = tiParam;
              resolvedArgs.push(args["search"]);
            }
          } else if (
            paramName === "stringArray" ||
            (paramName === null && declaredParamName === "stringArray")
          ) {
            args["stringArray"] = appSort(numVarRnd);
            resolvedArgs.push(args["stringArray"]);
          } else if (
            paramName === "argsObject" ||
            (paramName === null && declaredParamName === "argsObject")
          ) {
            var rawVar = mis("VVar");
            args["argsObject"] = rawVar.app["myVar"];
            resolvedArgs.push(args["argsObject"]);
          } else {
            if (paramName !== null) {
              args[paramName] = paramName;
              resolvedArgs.push(args[paramName]);
            } else {
              missingParams.push(declaredParamName);
            }
          }
        });
        if (missingParams.length === 0) {
          content = resolvedArgs;
        } else {
          allErrors[result] =
            `Error: Missing parameters for ${result}: ${missingParams.join(", ")}`;
          console.error(allErrors[result]);
          console.log(allErrors[result]);
        }
      }
      console.log("Resolved arguments:", args);
      console.log("Resolved parameters Array:", resolvedArgs);
      resCount++;
    });
    var errorKeys = Object.keys(allErrors);
    if (errorKeys.length > 0) {
      return allErrors;
    }
  } else {
    console.log("No function parameters found for:", searchString);
  }
  return content;
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
    `<!DOCTYPE html>
      <html id="seoCapital" lang="en">
        <head>
          <base target="_top"></base>
          <meta charset="utf-8"></meta>
          <meta name="seoCapital" content="Boilerplate SEO Capital"></meta>
          <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
          <link href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Acme" rel="stylesheet" />
        </head>
        <body>
          <div class="row">
            <div class="responsive-section">
                <div class="container" id="seoData">
                  <label id="labSEOC">
                    <strong></strong></label>
                  <div class="row">
                    <div class="col s12 card-panel amber">
                      <div class="responsive-section">
                        <div class="container">
                          <div id="divSEOC" class="col s12 receipt amber flow-text">
                            <table class="striped centered highlight responsive-table amber z-depth-5" style="width:100%">
                              <thead></thead>
                              <tbody>
                                <tr style="justify-content: space-around;overflow: auto;border-radius: 3%;max-width: 100%;height: auto;display: block;margin: auto;">
                                  <td style="vertical-align: top;text-align: left;flex-flow: row wrap;grid-column: 1;grid-row: 1;align-content: flex-start;z-index: 0;height: 100%;overflow: auto;">
                                    <table class="striped centered highlight responsive-table amber z-depth-5" style="width:100%">
                                      <tbody >
                                        <td>
                                          <div>
                                            <iframe src='${url}' id="w3Res" width="100%" height="1080vh" allow="autoplay,encrypted-media" title="Dontime Life Website" frameborder="0" allowfullscreen=true ></iframe></div></td></tbody></table></td></tr></tbody></table></div></div></div></div></div></div></div></div>
          <input type="hidden" value="<?= getScriptUrl() ?>" id="breakUrl" />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
        </body>
      </html>`,
  );
  // html.pong = pong.toString().split(",");
  html.research = HtmlService.createHtmlOutput(`document
      .getElementById("w3Search")
      .addEventListener("change", function() {
        var cap = 
          document
          .getElementById("w3Search")
          .value;
        console.log(cap)
      })`);
  html.prefTimeChange = HtmlService.createHtmlOutput(`document
      .getElementById("w3Search")
      .addEventListener("change", function() {
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
          // (function  () {
          // console.log('Input Value:', textInput.value)}, 5000)();
          if (typeof url === "undefined") {
            var urlData = document.getElementById("breakUrl").value;
            var url = urlData.toString()
          };
          var prodSearch = document.getElementById("w3Search").value;
          var linkFollow = document.createElement("a");
          linkFollow.href = url + "?func=seoCapital" + "&args=" + encodeURIComponent();
          linkFollow.id = "linkFOLLOW";
          linkFollow.target = "_top";
          document.body.appendChild(linkFollow);
          document.getElementById("linkFOLLOW").click();
          document.getElementById("w3Search").value = ""
        })()
      });`);
  html.dOMContentLoaded = HtmlService.createHtmlOutput(`document
      .addEventListener("DOMContentLoaded", function() {
        let timePicker = document.getElementById("breakUrl");
        M.Timepicker.init(timePicker,
          {
            defaultTime: "now" 
          })
      });
      var elems = document.getElementById("breakUrl");
      var instances = M.FormSelect.init(elems);`);
  html.recentSearch = HtmlService.createHtmlOutput(`document
      .addEventListener("DOMContentLoaded", homeW3);
      function homeW3() {
        function serverside(func, args) {
          return new Promise((resolve, reject) => {
            google.script.run
            .withSuccessHandler((result) => {
              resolve(result)
            })
            .withFailureHandler((error) => {
              console.log(error);
              console.log(document.getElementById("test").innerHTML);
              reject(error)
            })
            .runBoilerplate([func], args)
          })
        };
        const htmlStructure = document.getElementById("divSEOC").innerHTML;
        const results = document.getElementById("w3Search");
        const strValue = results.value;
        results.addEventListener("change",(e) => {
          var cap = e.target.value;
          document.getElementById("w3Search").value = "";
          document.getElementById("divSEOC").innerHTML = "... waiting for " + cap;
          serverside("portBing", [cap])
          .then((vid) => {
            if (vid) {
              document.getElementById("divSEOC").innerHTML = htmlStructure;
              document.getElementById("w3Res").src = vid;
            }
          })
          .catch((er) => {
            console.log(er);
            document.getElementById("divSEOC").innerHTML = er
          })
        })
      }`);
  return html.evaluate().getContent();
};
var mis = function (text, maxRetries = 3) {
  var validUrl = isValidUrl(text);
  if (!validUrl.hostname || text.indexOf(",") > -1) {
    var supFunc = misSt(text);
    if (supFunc && typeof supFunc === "object") {
      let isError = false;
      for (var key in supFunc) {
        if (
          typeof supFunc[key] === "string" &&
          supFunc[key].startsWith("Error:")
        ) {
          isError = true;
          break;
        }
      }
      if (isError) {
        Logger.log("Error(s) from misSt:", supFunc);
        console.error("Error(s) from misSt:", supFunc);
        var earlyReturn = "misSt returned errors: " + JSON.stringify(supFunc);
        var errorUrl = text;
        var form = formMaker(
          [text].join("").toUpperCase(),
          "misForms",
          functionRegistry.time,
        );
        if (typeof form === "object") {
          // fileManager(coData.rndTitle, "Forms")
          form.addSectionHeaderItem().setTitle(earlyReturn);
          form.addTextItem().setTitle("Your Name").setRequired(true);
          form.addDateItem().setTitle("Birth Date").setRequired(true);
          form
            .addParagraphTextItem()
            .setTitle("Your Message")
            .setRequired(true);
          form.setConfirmationMessage("Thanks for your feedback !!");
          var url = earlyReturn || form.getPublishedUrl();
        }
        console.log("Final app:", supFunc?.res);
        return { index: url, app: earlyReturn, link: errorUrl };
      }
    }
    var fx = supFunc?.func;
    var payLoad = supFunc?.args;
    // if (supFunc.func) {
    // if (supFunc.args) {
    //     var html =
    //       HtmlService.createTemplate(`<!DOCTYPE html><html lang="en"><body><div><label><nav class="center"><a id="caller" href="<?= getUrl(ScriptApp) ?>?func=<?= nav ?>&args=<?= action ?>" target="_top">update<label id="spLab"><strong><?!= seoCapital(HtmlService.createTemplate(decodeURIComponent(encodeURIComponent(url))).evaluate().getContent()) ?></strong></label><div id="contentPlayer"><iframe class="z-depth-5 card-panel deep-purple darken-1 scale-transition scale-out scale-in btn-large" src="<?= HtmlService.createTemplate(decodeURIComponent(encodeURIComponent(url))).evaluate().getContent() ?>" id="eventRes01" class="menu-img grey darken-4 z-depth-5" style="width: 100%; height: "100%"; border: none;" allow="autoplay" allow="encrypted-media" title="Dontime Life Website" frameborder="0" allowfullscreen ></iframe></div></a></nav></label></div><br /><input type="hidden" value="<?= getScriptUrl() ?>" id="breakUrl" /></body></html><script>var appUrl
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

    let htmlContent = `<!DOCTYPE html><html lang="en"><body><div><label><nav class="center"><a id="caller" href="<?= getUrl(ScriptApp) ?>?func=<?= nav ?>" target="_top">update<label id="spLab"><strong><?!= seoCapital(HtmlService.createTemplate(decodeURIComponent(encodeURIComponent(formUrl))).evaluate().getContent()) ?></strong></label><div id="contentPlayer"><iframe class="z-depth-5 card-panel deep-purple darken-1 scale-transition scale-out scale-in btn-large" src="<?= HtmlService.createTemplate(decodeURIComponent(encodeURIComponent(formUrl))).evaluate().getContent() ?>" id="eventRes01" class="menu-img grey darken-4 z-depth-5" style="width: 100%; height: 100%; border: none;" allow="autoplay" allow="encrypted-media" title="Dontime Life Website" frameborder="0" allowfullscreen ></iframe></div></a></nav></label></div><br /><input type="hidden" value="<?= getScriptUrl() ?>" id="breakUrl" /></body></html><script>var appUrl
    = document.getElementById("breakUrl");</script>`;
    let html = HtmlService.createTemplate(htmlContent);
    html.formUrl =
      getScriptUrl() + "?func=" + fx + (payLoad ? "&args=" + payLoad : "");
    html.nav = fx;
    html.action = payLoad;
    var supUrl =
      getScriptUrl().toString() +
      "?func=mis&args=" +
      (payLoad ? fx + "," + encodeURIComponent(payLoad) : fx);
    // var form = formMaker();
    let formattedPayload = "";
    if (payLoad && typeof payLoad === "object") {
      if (Array.isArray(payLoad)) {
        formattedPayload = payLoad
          .map((item) => {
            if (typeof item === "string") {
              return item;
            }
            return JSON.stringify(item);
          })
          .join(", ");
      } else {
        var values = Object.values(payLoad)
          .map((value) => {
            if (typeof value === "string") {
              return value;
            }
            return JSON.stringify(value);
          })
          .join(", ");
        formattedPayload = values;
      }
    }
    var payT = fx;
    if (formattedPayload) {
      payT += "(" + formattedPayload + ")";
    } else if (payLoad) {
      payT += "(" + payLoad + ")";
    }
    payT = payT.toUpperCase();
    var form = formMaker(payT, "misForms", functionRegistry.time);

    if (typeof form === "object") {
      // fileManager(coData.rndTitle, "Forms")
      if (fx) {
        form
          .addSectionHeaderItem()
          .setTitle(globalThis[supFunc.func].toString());
      } else {
        form.addSectionHeaderItem().setTitle("No Function Found");
      }
      form.addSectionHeaderItem().setTitle(supFunc.res);
      form.addTextItem().setTitle("Your Name").setRequired(true);
      form.addDateItem().setTitle("Birth Date").setRequired(true);
      form.addParagraphTextItem().setTitle("Your Message").setRequired(true);
      form.setConfirmationMessage("Thanks for your feedback !!");
      var webAppObj = 
        {
          funcStr: globalThis[supFunc.func]?.toString(),
          url: form.getPublishedUrl()
        };
    }
    console.log("Final app:", supFunc.res);
    return { index: webAppObj, app: supFunc.res, link: supUrl };
  } else {
    let response;
    let location;
    let htmlData;
    let supUrl;
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
      htmlData = "Error fetching URL: " + e.toString();
      supUrl = text;
      // var form = formMaker();
      var form = formMaker(
        [JSON.stringify(validUrl)].join("").toUpperCase(),
        "misForms",
        functionRegistry.time,
      );

      if (typeof form === "object") {
        // fileManager(coData.rndTitle, "Forms")
        form.addSectionHeaderItem().setTitle(htmlData);
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
        form.setConfirmationMessage("Thanks for your feedback !!");
        var responseObj = 
          {
            dataStr: htmlData, 
            url: form.getPublishedUrl()
          };
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
              htmlData = UrlFetchApp.fetch(location, {
                followRedirects: true,
                muteHttpExceptions: true,
              }).getContentText();
              supUrl = location;
              // var form = formMaker();
              var form = formMaker(
                [JSON.stringify(validUrl)].join("").toUpperCase(),
                "misForms",
                functionRegistry.time,
              );

              if (typeof form === "object") {
                // fileManager(coData.rndTitle, "Forms")
                form
                  .addSectionHeaderItem()
                  .setTitle("Redirect occurred\n" + htmlData);
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
                form.setConfirmationMessage("Thanks for your feedback !!");
                var responseObj = 
                  {
                    dataStr: htmlData, 
                    url: form.getPublishedUrl()
                  };
              }
            } else {
              // No redirect or other error
              location = response.getContentText();
              htmlData = location;
              supUrl = validUrl.hostname;
              // var form = formMaker();
              var form = formMaker(
                [JSON.stringify(validUrl)].join("").toUpperCase(),
                "misForms",
                functionRegistry.time,
              );

              if (typeof form === "object") {
                // fileManager(coData.rndTitle, "Forms")
                form
                  .addSectionHeaderItem()
                  .setTitle("No redirect or other error\n" + htmlData);
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
                form.setConfirmationMessage("Thanks for your feedback !!");
                var responseObj = 
                  {
                    dataStr: htmlData, 
                    url: form.getPublishedUrl()
                  };
              }
            }
          }
        }
      }
    } catch (e) {
      Logger.log("Error resolving TinyURL: " + e.toString());
      console.error("Error resolving TinyURL: ", e.toString());
    }
    console.log("Final app:", htmlData);
    return { index: responseObj, app: htmlData, link: supUrl };
  }
};
var misSt = function (func, someArgs) {
  var funcUno = decodeURIComponent(func);
  // ? console.log("funcUno = " + typeof funcUno)
  // : console.error("funcUno = " + typeof funcUno);
  var funcDos = decodeURIComponent(someArgs);
  // ? console.log("funcDos = " + typeof funcDos)
  // : console.error("funcDos = " + typeof funcDos);
  var numVarRnd = randNum;
  var argsX = [];
  var content = [];
  var keys = [
    funcDos !== "undefined"
      ? [funcUno].concat([Object.values(funcDos)])
      : [funcUno],
  ]
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
  if (argsX) {
    var allErrors = {};
    var fParams = gsFParams();
    var resCount = 0;
    argsX.forEach((result) => {
      console.log("argsX result " + resCount + ": " + result);
      var args = {};
      var resolvedArgs = [];
      var missingParams = [];
      var searchString = fParams.find((rndS) => {
        return rndS.name === result;
      });
      var orderedArgs = [];
      if (
        searchString &&
        searchString !== "undefined" &&
        searchString !== null &&
        searchString.parameters
      ) {
        var declaredParams = searchString.parameters;
        console.log(
          "Current content: " +
            content +
            "\nDeclared parameters: " +
            declaredParams,
        );
        var contentMap = {};
        content.forEach((item) => {
          declaredParams.forEach((declaredParam) => {
            if (item !== null) {
              if (item === declaredParam || item.includes(declaredParam)) {
                contentMap[declaredParam] = item;
              }
            }
          });
        });
        declaredParams.forEach((paramName) => {
          if (contentMap.hasOwnProperty(paramName)) {
            orderedArgs.push(contentMap[paramName]);
          } else {
            orderedArgs.push(null);
          }
        });
        console.log("Ordered arguments: " + orderedArgs);
        content = orderedArgs;
      }
      if (content) {
        var htmlArray = [
          `index proMedia epaWebsite callBack oddChances jsGame checkOnDay uiAccess popUpOpen congressLeg congressMembers jFundamentals gnuFree myGNUFreeJS Section3.Challenge1 cors edgarFriendly editor ssForms styling theRoll theWorks uiAccess cGWI`,
        ]
          .toString()
          .split(" ");
        var allFolders = functionRegistry.getFolderList();
        // var uniqueCoArray = sheetCalc;
        // var uniqueItemArray = itemCalc;
        content.forEach((paramName, index) => {
          var declaredParamName = declaredParams[index]; // The actual declared parameter name (e.g., "e", "time", "url")
          var userProvidedValue = orderedArgs[index]; // This is the value that came from the user, or null if not mapped initially

          if (
            paramName === "e" ||
            (paramName === null && declaredParamName === "e")
          ) {
            args["e"] =
              userProvidedValue !== null && userProvidedValue !== undefined
                ? userProvidedValue
                : objectOfS(
                    ["parameter"],
                    [
                      [
                        ["func", result],
                        ["args", JSON.stringify(content)],
                        ["action", "getData"],
                        ["file", "uiAccess"],
                      ],
                    ],
                    functionRegistry.time,
                  );
            resolvedArgs.push(JSON.stringify(args["e"]));
          } else if (
            paramName === "time" ||
            (paramName === null && declaredParamName === "time")
          ) {
            args["time"] =
              userProvidedValue !== null && userProvidedValue !== undefined
                ? userProvidedValue
                : functionRegistry.time;
            resolvedArgs.push(args["time"]);
          } else if (
            paramName === "data" ||
            (paramName === null && declaredParamName === "data")
          ) {
            // This one is more complex as it involves calling a function, but the principle is the same:
            // If userProvidedValue is present, use it. Otherwise, generate the data.
            if (userProvidedValue !== null && userProvidedValue !== undefined && Array.isArray(userProvidedValue)) {
              args["data"] = userProvidedValue;
            } else {
              var rndE = objectOfS(
                ["parameter"],
                [
                  [
                    ["func", "mis"],
                    ["args", [result, ...content]],
                  ],
                ],
                functionRegistry.time,
              );
              var funcUno = rndE.parameter["func"];
              var funcDos = rndE.parameter["args"];
              if (!funcUno === "misSt") {
                var payLoad = globalThis[funcUno].apply(this, funcDos);
              }
              args["data"] = {
                message: payLoad,
                timestamp: new Date(),
              };
            }
            resolvedArgs.push(args["data"]);
          } else if (
            paramName === "func" ||
            (paramName === null && declaredParamName === "func")
          ) {
            args["func"] =
              userProvidedValue !== null && userProvidedValue !== undefined
                ? userProvidedValue
                : result;
            resolvedArgs.push(args["func"]);
          }
          // else if (
          //   paramName === "searchString" ||
          //   (paramName === null && declaredParamName === "searchString")
          // ) {
          //   args["searchString"] = substanceVegas(
          //     0,
          //     [
          //       objectOfS(
          //         ["parameter"],
          //         [[["func", result]]],
          //         Math.floor((maxTime - (new Date() % (1000 * 60))) / 1000),
          //       ).parameter["func"],
          //     ].toString().length,
          //     [
          //       objectOfS(
          //         ["parameter"],
          //         [[["func", result]]],
          //         Math.floor((maxTime - (new Date() % (1000 * 60))) / 1000),
          //       ).parameter["func"],
          //     ]
          //       .toString()
          //       .split(""),
          //   ).substWord;
          //   resolvedArgs.push(args["searchString"]);
          // }
          else if (
            paramName === "varA" ||
            (paramName === null && declaredParamName === "varA")
          ) {
            if (userProvidedValue !== null && userProvidedValue !== undefined) {
              args["varA"] = userProvidedValue;
            } else {
              // arrDRnd = appSort(numVarRnd);
              // searchString = randomSubstance(0, 6, arrDRnd).myNewArr;
              result = fParams.find((rndS) => {
                return rndS.name === searchString;
              });
              if (typeof result === "string") {
                args["varA"] = globalThis[result]();
              } else if (
                typeof result === "object" &&
                result !== null &&
                result.name
              ) {
                args["varA"] = globalThis[result.name].apply(result.parameters);
              } else if (result && result.name) {
                args["varA"] = globalThis[result.name]();
              }
            }
            resolvedArgs.push(args["varA"]);
          } else if (
            paramName === "epaAUrl" ||
            (paramName === null && declaredParamName === "epaAUrl")
          ) {
            if (userProvidedValue !== null && userProvidedValue !== undefined) {
              args["epaAUrl"] = userProvidedValue;
            }
            // else {
            //   // var folder = allFolders[numVarRnd];
            //   var data = coUtility(product)[0];
            //   if (typeof data.rndTitle !== "undefined") {
            //     var test = productNamePartial(
            //       [data.rndTitle.replace(/,./g, "")].toString().split(" ")[
            //         Math.floor(
            //           Math.random() *
            //             Math.floor(
            //               [data.rndTitle.replace(/,./g, "")]
            //                 .toString()
            //                 .split(" ").length,
            //             ),
            //         )
            //       ],
            //     );
            //   }
            //   if (typeof test !== "undefined") {
            //     var test2 = productRegNo(test["eparegno"]);
            //     if ([test2].indexOf("companyinfo") !== -1) {
            //       var productCo = [];
            //       for (var i = 0, l = test2["companyinfo"].length; i < l; i++) {
            //         var isCompany = test2["companyinfo"][i]["name"];
            //         productCo.push(isCompany);
            //       }
            //       var uniqueCo = [];
            //       for (var i = 0, l = productCo.length; i < l; i++) {
            //         var epaCo = coUtility(productCo[i]);
            //         uniqueCo.push(epaCo);
            //       }
            //       var randomCik = uniqueCo[0];
            //       var coInfo = uniqueCo[0][0].rndTitle;
            //       var secReport = uniqueCo[0][0].secUrl;
            //       var stkTicker = uniqueCo[0][0].rndTicker;
            //       var watchV = uniqueCo[0][0].videoItem;
            //       var playVid = uniqueCo[0][0].videoItemUrl;
            //     } else {
            //       var coInfo = data.rndTitle;
            //       var secReport = data.secUrl;
            //       var stkTicker = data.rndTicker;
            //       var watchV = data.videoItem;
            //       var playVid = data.videoItemUrl;
            //     }
            //     if ([test2].indexOf("active_ingredients") !== -1) {
            //       var uniqueData = [];
            //       for (
            //         var i = 0, l = test2["active_ingredients"].length;
            //         i < l;
            //         i++
            //       ) {
            //         var isIngredient =
            //           test2["active_ingredients"][i]["active_ing"];
            //         if (isIngredient) {
            //           var pIName = productIngName(isIngredient);
            //           if (typeof pIName !== "undefined") {
            //             uniqueData.push(
            //               pIName["items"] || pIName["first"] || pIName,
            //             );
            //           }
            //         }
            //       }
            //       if (typeof uniqueData[0][0]["rndTitle"] === "undefined") {
            //         var uniqueDataArray = [];
            //         for (var i = 0, l = uniqueData.length; i < l; i++) {
            //           if (uniqueData[i].length !== 0) {
            //             uniqueData[i].map((item) => {
            //               uniqueDataArray.push(item);
            //             });
            //           }
            //         }
            //         const matches = [];
            //         uniqueDataArray
            //           .sort((a, b) => a - b)
            //           .filter((ac) => {
            //             if (
            //               JSON.stringify(ac["eparegnumber"])
            //                 .toLowerCase()
            //                 .includes(test2["eparegno"])
            //             )
            //               matches.push(ac);
            //           });
            //         var uniqueDataKey = [matches].entries().next().value;
            //         if (typeof uniqueDataKey[1].length !== 0) {
            //           var randomKey = Math.floor(
            //             Math.random() * Math.floor(matches.length),
            //           );
            //           var isDataKey = uniqueDataKey[1][randomKey];
            //           var randomCasNumber = isDataKey["casnumber"];
            //           console.log(
            //             "randomCasNumber = " +
            //               isDataKey +
            //               "[" +
            //               casnumber +
            //               "] *** ",
            //             randomCasNumber,
            //           );
            //           args["epaAUrl"] =
            //             "https://ofmpub.epa.gov/sor_internet/registry/substreg/searchandretrieve/substancesearch/search.do?multipleEntriesSearch=&multipleKeys=" +
            //             randomCasNumber +
            //             "&onSRS=true&onChemResourceDir=true&substanceNameScope=beginswith";
            //         }
            //       }
            //     }
            //   }
            // }
            // resolvedArgs.push(args["epaAUrl"]);
            else {
              // No userProvidedValue
              console.log("DEBUG: Generating epaAUrl...");
              var data = coUtility(product)[0];
              console.log("DEBUG: data from coUtility:", data);

              if (typeof data.rndTitle !== "undefined") {
                var test = productNamePartial(
                  [data.rndTitle.replace(/,./g, "")].toString().split(" ")[
                    Math.floor(
                      Math.random() *
                        Math.floor(
                          [data.rndTitle.replace(/,./g, "")]
                            .toString()
                            .split(" ").length,
                        ),
                    )
                  ],
                );
                console.log("DEBUG: test from productNamePartial:", test);
              } else {
                console.log("DEBUG: data.rndTitle is undefined.");
              }

              if (typeof test !== "undefined") {
                var test2 = productRegNo(test["eparegno"]);
                console.log("DEBUG: test2 from productRegNo:", test2);

                // Corrected check
                if (test2 && test2.hasOwnProperty("companyinfo")) {
                  console.log("DEBUG: test2 has companyinfo.");
                  // ... (company info logic) ...
                  var productCo = [];
                  for (var i = 0, l = test2["companyinfo"].length; i < l; i++) {
                    var isCompany = test2["companyinfo"][i]["name"];
                    productCo.push(isCompany);
                  }
                  var uniqueCo = [];
                  for (var i = 0, l = productCo.length; i < l; i++) {
                    var epaCo = coUtility(productCo[i]);
                    uniqueCo.push(epaCo);
                  }
                  var randomCik = uniqueCo[0];
                  var coInfo = uniqueCo[0][0].rndTitle;
                  var secReport = uniqueCo[0][0].secUrl;
                  var stkTicker = uniqueCo[0][0].rndTicker;
                  var watchV = uniqueCo[0][0].videoItem;
                  var playVid = uniqueCo[0][0].videoItemUrl;
                } else {
                  console.log(
                    "DEBUG: test2 does NOT have companyinfo or is undefined/null.",
                  );
                  // ... (fallback logic) ...
                  var coInfo = data.rndTitle;
                  var secReport = data.secUrl;
                  var stkTicker = data.rndTicker;
                  var watchV = data.videoItem;
                  var playVid = data.videoItemUrl;
                }

                // Corrected check
                if (test2 && test2.hasOwnProperty("active_ingredients")) {
                  console.log("DEBUG: test2 has active_ingredients.");
                  // ... (ingredient logic) ...
                  var uniqueData = [];
                  for (
                    var i = 0, l = test2["active_ingredients"].length;
                    i < l;
                    i++
                  ) {
                    var isIngredient =
                      test2["active_ingredients"][i]["active_ing"];
                    if (isIngredient) {
                      var pIName = productIngName(isIngredient);
                      if (typeof pIName !== "undefined") {
                        uniqueData.push(
                          pIName["items"] || pIName["first"] || pIName,
                        );
                      }
                    }
                  }
                  if (
                    typeof uniqueDataKey !== "undefined" &&
                    uniqueDataKey[1] &&
                    uniqueDataKey[1].length > 0
                  ) {
                    // ... randomKey, isDataKey, randomCasNumber ...
                    var randomKey = Math.floor(
                      Math.random() * Math.floor(matches.length),
                    );
                    var isDataKey = uniqueDataKey[1][randomKey];
                    var randomCasNumber = isDataKey["casnumber"];

                    console.log(
                      "DEBUG: randomCasNumber generated:",
                      randomCasNumber,
                    );
                    args["epaAUrl"] = "..."; // Only assign here if randomCasNumber is valid
                  } else {
                    console.log(
                      "DEBUG: No uniqueDataKey or matches for CAS number generation.",
                    );
                  }
                } else {
                  console.log(
                    "DEBUG: test2 does NOT have active_ingredients or is undefined/null.",
                  );
                }
              } else {
                console.log(
                  "DEBUG: 'test' is undefined, cannot proceed with test2.",
                );
              }
              // IMPORTANT: If epaAUrl wasn't set, explicitly set it to a default or null to avoid pushing undefined.
              if (args["epaAUrl"] === undefined) {
                args["epaAUrl"] = null; // Or a default error URL
                console.log(
                  "DEBUG: epaAUrl could not be generated, setting to null.",
                );
                n;
              }
            }
            resolvedArgs.push(args["epaAUrl"]); // This pushes whatever args["epaAUrl"] is at this point.
          } else if (
            paramName === "url" || paramName === "companyNameUrl" ||
            (paramName === null && (declaredParamName === "url" || declaredParamName === "companyNameUrl"))
          ) {
            if (userProvidedValue !== null && userProvidedValue !== undefined && isValidUrl(userProvidedValue).hostname) {
              if (paramName === "url") {
                args["url"] = userProvidedValue;
              }
              else if (paramName === "companyNameUrl") {
                args["companyNameUrl"] = userProvidedValue;
              }
            } else {
              functionRegistry.gTree
              var folder = functionRegistry.getFolderList()[numVarRnd];
              if (paramName === "url") {
                args["url"] = fileBrowser(folder).url ;
              }
              else if (paramName === "companyNameUrl") {
                args["companyNameUrl"] = fileBrowser(folder).url ;
              }
            }
            if (paramName === "url") {
              resolvedArgs.push(args["url"]);
            }
            else if (paramName === "companyNameUrl") {
              resolvedArgs.push(args["companyNameUrl"]);
            }
          } else if (
            paramName === "object" ||
            (paramName === null && declaredParamName === "object")
          ) {
            args["object"] =
              userProvidedValue !== null && userProvidedValue !== undefined
                ? userProvidedValue
                : JSON.stringify({});
            resolvedArgs.push(args["object"]);
          } else if (
            paramName === "file" ||
            (paramName === null && declaredParamName === "file")
          ) {
            var rndPage =
              htmlArray[
                Math.floor(Math.random() * Math.floor(htmlArray.length))
              ];
            args["file"] =
              userProvidedValue !== null && userProvidedValue !== undefined && /<[a-z][\s\S]*>/i.test(userProvidedValue)
                ? userProvidedValue
                : rndPage;
            resolvedArgs.push(args["file"]);
          } else if (
            paramName === "fileX" ||
            (paramName === null && declaredParamName === "fileX")
          ) {
            var folderX = functionRegistry.getFolderList()[numVarRnd()];
            var folderRoot = DriveApp.getFoldersByName(folderX);
            let fileXName = "undefined";
            if (folderRoot.hasNext) {
              var fileBulk = folderRoot.next().getFiles();
              const fileNames = [];
              if (fileBulk.hasNext()) {
                while (fileBulk.hasNext()) {
                  var fileUrl = fileBulk.next();
                  fileNames.push(fileUrl.getName());
                }
                if (fileNames.length > 0) {
                  fileXName =
                    fileNames[Math.floor(Math.random() * fileNames.length)];
                }
              }
            }
            args["fileX"] =
              userProvidedValue !== null && userProvidedValue !== undefined
                ? userProvidedValue
                : fileXName;
            resolvedArgs.push(args["fileX"]);
          } else if (
            paramName === "folderX" ||
            paramName === "folder" ||
            (paramName === null && declaredParamName === "folderX") ||
            declaredParamName === "folder"
          ) {
            if (paramName === "folderX") {
              args["folderX"] =
                userProvidedValue !== null && userProvidedValue !== undefined
                  ? userProvidedValue
                  : allFolders[numVarRnd];
              resolvedArgs.push(args["folderX"]);
            } else if (paramName === "folder") {
              args["folder"] =
                userProvidedValue !== null && userProvidedValue !== undefined
                  ? userProvidedValue
                  : allFolders[numVarRnd];
              resolvedArgs.push(args["folder"]);
            }
          } else if (
            paramName === "numIndex" ||
            (paramName === null && declaredParamName === "numIndex")
          ) {
            args["numIndex"] =
              userProvidedValue !== null && userProvidedValue !== undefined
                ? userProvidedValue
                : numVarRnd;
            resolvedArgs.push(args["numIndex"]);
          } else if (
            paramName === "infinitum" ||
            (paramName === null && declaredParamName === "infinitum")
          ) {
            args["infinitum"] =
              userProvidedValue !== null && userProvidedValue !== undefined
                ? userProvidedValue
                : numVarRnd;
            resolvedArgs.push(args["infinitum"]);
          } else if (
            paramName === "itemName" ||
            (paramName === null && declaredParamName === "itemName")
          ) {
            var rndItemIndex = Math.floor(
              Math.random() * Math.floor(globalThis.uniqueItemArray().length),
            );
            args["itemName"] =
              userProvidedValue !== null && userProvidedValue !== undefined
                ? userProvidedValue
                : globalThis.uniqueItemArray()[rndItemIndex].Description;
            resolvedArgs.push(args["itemName"]);
          } else if (
            paramName === "tunPlay" ||
            paramName === "searchString" ||
            paramName === "rndKey" ||
            paramName === "search" ||
            (paramName === null && declaredParamName === "tunPlay") ||
            declaredParamName === "searchString" ||
            declaredParamName === "search" ||
            declaredParamName === "rndKey"
          ) {
            var rndItemIndex = Math.floor(
              Math.random() * Math.floor(globalThis.uniqueCoArray().length),
            );
            var tiParam = globalThis.uniqueCoArray()[rndItemIndex]["title"];
            if (paramName === "tunPlay") {
              args["tunPlay"] =
                userProvidedValue !== null && userProvidedValue !== undefined
                  ? userProvidedValue
                  : tiParam;
              resolvedArgs.push(args["tunPlay"]);
            } else if (paramName === "searchString") {
              args["searchString"] =
                userProvidedValue !== null && userProvidedValue !== undefined
                  ? userProvidedValue
                  : tiParam;
              resolvedArgs.push(args["searchString"]);
            } else if (paramName === "rndKey") {
              args["rndKey"] =
                userProvidedValue !== null && userProvidedValue !== undefined
                  ? userProvidedValue
                  : tiParam;
              resolvedArgs.push(args["rndKey"]);
            } else if (paramName === "search") {
              args["search"] =
                userProvidedValue !== null && userProvidedValue !== undefined
                  ? userProvidedValue
                  : tiParam;
              resolvedArgs.push(args["search"]);
            }
          } else if (
            paramName === "stringArray" ||
            (paramName === null && declaredParamName === "stringArray")
          ) {
            args["stringArray"] =
              userProvidedValue !== null && userProvidedValue !== undefined
                ? userProvidedValue
                : appSort(numVarRnd);
            resolvedArgs.push(args["stringArray"]);
          } else if (
            paramName === "argsObject" ||
            (paramName === null && declaredParamName === "argsObject")
          ) {
            var rawVar = mis("VVar");
            args["argsObject"] =
              userProvidedValue !== null && userProvidedValue !== undefined && Array.isArray(userProvidedValue)
                ? userProvidedValue
                : rawVar.app["myVar"];
            resolvedArgs.push(args["argsObject"]);
          } else {
            if (declaredParamName !== null) {
              // For these, we just take the user's value (which is 'paramName' here, coming from orderedArgs)
              args[declaredParamName] = userProvidedValue;
              resolvedArgs.push(args[declaredParamName]);
            } else {
              missingParams.push(declaredParamName);
            }
          }
        });
        if (missingParams.length === 0) {
          content = resolvedArgs;
        } else {
          allErrors[result] =
            `Error: Missing parameters for ${result}: ${missingParams.join(", ")}`;
          console.error(allErrors[result]);
          console.log(allErrors[result]);
        }
      }
      console.log("Resolved arguments:", args);
      console.log("Resolved parameters Array:", resolvedArgs);
      resCount++;
    });
    var errorKeys = Object.keys(allErrors);
    if (errorKeys.length > 0) {
      return allErrors;
    }
  } else {
    console.log("No function parameters found for:", searchString);
  }
  console.log(
    "misSt returned :\nfunc = " +
      argsX +
      ":\nargs = " +
      content.toString().replace(/,/g, " "),
  );
  var cString = content.toString().replace(/,/g, " ");
  try {
    var jsonData;
    if (argsX.length > 0) {
      if (argsX.length === 1) {
        var funcToCall = argsX[0];
        if (typeof globalThis[funcToCall] === "function") {
          jsonData = globalThis[funcToCall].apply(this, content);
          console.log(typeof jsonData + ": typeof jsonDara");
        } else {
          console.error("Function not found:", funcToCall);
          jsonData = `Function not found: ${funcToCall}`;
        }
      } else if (argsX.length > 1) {
        jsonData = [];
        argsX.forEach(function (funcName) {
          if (typeof globalThis[funcName] === "function") {
            var result = globalThis[funcName].apply(this, content);
            jsonData.push({ [funcName]: result });
          } else {
            console.error("Function not found:", funcName);
            jsonData.push({ [funcName]: `Function not found: ${funcName}` });
          }
        });
        console.log(
          "typeof " + typeof jsonData + " jsonData (array of results)",
        );
      }
    } else {
      console.log(
        "function = " + argsX.toString() + " :Skipping .apply(" + content + ")",
      );
      jsonData = content;
      console.log("typeof " + typeof jsonData + " jsonData");
    }
  } catch (er) {
    console.error(
      argsX.toLocaleString() +
        "(" +
        content.toString() +
        ")  Error: " +
        er.toString(),
    );
    var jsonData =
      argsX.toLocaleString() +
      "(" +
      content.toString() +
      ") Error: " +
      er.toString();
  }
  var argsObject = { func: argsX.toString(), args: cString, res: jsonData };
  return argsObject;
};
var isValidUrl = function (text) {
  // var protocol = "";
  // var hostname = "";
  var pathname = "";
  // var query = "";
  var validUrlResult = { protocol: "", hostname: "", pathname: "", query: "" };
  var allMatches = [];
  if (typeof text !== "string" || text.length === 0) {
    return { protocol: "", hostname: "", pathname: "", query: "" };
  }
  var urlRegex =
    /(https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*))|((?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*))/gi;
  var matches = text.match(urlRegex);
  allMatches = matches ? [...matches] : [];
  if (matches) {
    let currentProtocol = "";
    let currentHostname = "";
    let currentPathname = "";
    let currentQuery = "";
    matches.forEach((url) => {
      var protocolEnd = url.indexOf("://");
      if (protocolEnd !== -1) {
        currentProtocol = url.substring(0, protocolEnd + 3);
        url = url.substring(protocolEnd + 3);
      }
      var hostnameEnd = url.indexOf("/");
      if (hostnameEnd !== -1) {
        currentHostname = url.substring(0, hostnameEnd);
        currentPathname = url.substring(hostnameEnd);
      } else {
        currentHostname = url;
      }
      var queryStart = pathname.indexOf("?");
      if (queryStart !== -1) {
        currentQuery = pathname.substring(queryStart);
        currentPathname = pathname.substring(0, queryStart);
      }
      var hostnameRegex =
        /^([a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]+$|^localhost$/;
      if (currentHostname && hostnameRegex.test(currentHostname)) {
        if (currentProtocol && currentHostname) {
          validUrlResult = {
            protocol: currentProtocol,
            hostname: currentHostname,
            pathname: currentPathname,
            query: currentQuery,
          };
          return validUrlResult;
        }
      }
    });
  }
  validUrlResult.matches = allMatches;
  return validUrlResult;
};
var vidPlaylist = function (tunPlay) {
  console.log(
    functionRegistry.time +
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
    functionRegistry.time,
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
