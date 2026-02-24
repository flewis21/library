function allTime(rndKey, arrD, time) {
  console.log(
    formatTime(functionRegistry.time) +
      "\n" +
      arguments.callee.name +
      "\n!" +
      rndKey +
      ", = " +
      !rndKey +
      "\n!" +
      [arrD].toString().substring(0, 20) +
      ", = " +
      !arrD +
      "\n!" +
      time +
      ", = " +
      !time,
  );
  if (typeof time === "undefined") {
    var time = functionRegistry.time;
  }
  if (typeof rndKey === "undefined" || typeof rndKey === null) {
    var uniqueKey = randomSubstance(0, 4, null, arrD, time).myNewArr;
    console.log(
      "allTime: \nvar " + uniqueKey + " = randomSubstance(" + 0,
      4,
      null,
      [arrD].toString().substring(0, 20),
      time + ").myNewArr",
    );
    var uniCoArr = [uniqueKey].join("").split(" ");
    console.log(
      "allTime: \nvar " + uniCoArr + " = " + [uniqueKey].join("").split(" "),
    );
    var uniqueCoObjects = covObjects(uniCoArr, ["allTime"], time);
    console.log(
      "allTime: \nvar " + uniqueCoObjects + " = covObjects(" + uniCoArr,
      ["allTime"],
      time + ")",
    );
    var rndCoObjects =
      uniqueCoObjects[
        Math.floor(Math.random() * Math.floor(uniqueCoObjects.length))
      ];
    var uniqueCoArray = covArrays(rndCoObjects, time);
    console.log(
      "allTime: \nvar " + uniqueCoArray + " = covArrays(" + rndCoObjects,
      time + ")",
    );
    var rndCoArray =
      uniqueCoArray[
        Math.floor(Math.random() * Math.floor(uniqueCoArray.length))
      ];
  }
  var coKey = rndKey || rndCoArray;
  var seoArray = seoPastTime([coKey].join(""), time).playList;
  console.log(
    "allTime: \nvar " +
      JSON.stringify(seoArray) +
      " = seoPastTime(" +
      [coKey].join(""),
    time + ")",
  );
  if (seoArray && Array.isArray(seoArray)) {
    if (!seoArray.keys().next()) {
      var idArray = seoArray.playList;
      var randomPlaylist = [];
      for (var i = 1, l = idArray.length; i < l; i++) {
        const randomVidKey = Math.floor(
          Math.random() * Math.floor(idArray.length),
        );
        randomPlaylist.push(
          idArray.filter((rp) => {
            return rp === idArray[randomVidKey];
          }),
        );
      }
      var vidPlaylist = function () {
        const randomVidKey = Math.floor(
          Math.random() * Math.floor(randomPlaylist.length),
        );
        var playListSorted = randomPlaylist.sort((a, b) => a - b);
        var videoObject = covObjects(playListSorted, ["youtubeID"], time);
        console.log(
          "allTime: \nvar " +
            JSON.stringify(videoObject) +
            " = covObjects(" +
            playListSorted,
          ["youtubeID"],
          time + ")",
        );
        if (typeof videoObject["youtubeID"] !== "undefined") {
          var uniqueVidKey = [videoObject].entries().next().value;
          console.log(
            "allTime: \nvar " +
              uniqueVidKey +
              " = "[videoObject].entries().next().value,
          );
          var randomVid = uniqueVidKey[1][randomVidKey];
          var rVideo = randomVid["youtubeID"];
          return rVideo;
        }
      };
      var sortaPlay = randomPlaylist.sort((a, b) => a - b);
      var randomVideo =
        vidPlaylist() ||
        sortaPlay[Math.floor(Math.random() * Math.floor(sortaPlay.length))];
      var youtubeUrl = "http://www.youtube.com/watch?v=" + randomVideo;
      return {
        title: rndKey || coKey,
        rndVideoId: randomVideo,
        videoPlaylist: randomPlaylist,
        videoUrl: youtubeUrl,
      };
    }
  }
}

// console.log("allTime: \nrndKey: " + rndKey + "\narrD: " + arrD + "\nTime: " + time);Youtube Widget;console.log(typeof seoArray);Math.floor(Math.random());Math.floor(Math.random());console.log(seoArray.playList)

function covArrays(object, time) {
  // console.log(
  //   formatTime(functionRegistry.time) +
  //     "\n" +
  //     arguments.callee.name +
  //     "\nobject is !" +
  //     !object +
  //     ", = " +
  //     JSON.stringify(object[0]) +
  //     "...\ntime is !" +
  //     !time +
  //     ", = " +
  //     time,
  // );
  const dataArray = [];
  for (var obj in object) {
    var elaspeTime = new Date() - functionRegistry.time;
    dataArray.push([object[obj]]);
  }
  return dataArray;
}

// console.log("that function: " + arguments.callee.caller.name + "\nthis function: " + arguments.callee.name + "\nobj: " +  obj + "\nelaspeTime: " + elaspeTime)
// console.log(JSON.stringify(dataArray[obj]))
// console.log(dataArray)

function covObjects(rows, headings, time) {
  // console.log(
  //   formatTime(functionRegistry.time) +
  //     "\n" +
  //     arguments.callee.name +
  //     "\nrows is !" +
  //     !rows +
  //     " = " +
  //     rows +
  //     "\nheadings is !" +
  //     !headings +
  //     " = " +
  //     headings +
  //     "\ntime is !" +
  //     !time +
  //     " = " +
  //     time,
  // );
  if (rows && Array.isArray(rows)) {
    var temp = rows.map(function (row) {
      var myObj = {};
      headings.forEach(function (heading, index) {
        var elaspeTime = new Date() - time;
        // console.log("that function: " + arguments.callee.caller.name + "\nthis function: " + arguments.callee.name + "\nforEach: " +  row[index] + "\nelaspeTime: " + elaspeTime)
        myObj[heading] = [row][index];
      });
      return myObj;
    });
    return temp;
  }
}

function itemCalc() {
  var itemSheet = ssGetSheetBySpreadsheetUrl(
    "https://docs.google.com/spreadsheets/d/1-vNcN0vCLcXgMY9uwcKukUgv_4njggRZ6fqoZs-hBFE/edit#gid=138098962",
    "items",
  );
  var itemArrays = itemSheet.getDataRange().getValues().slice(1);
  var arrVals = itemArrays.map((val) => {
    return {
      SKU: val[0],
      Description: val[1],
      "Pack Size": val[2],
      "Data Entered": val[3],
      "Last Modified": val[4],
    };
  });
  var rndArrVals = [];
  while (rndArrVals.length !== arrVals.length) {
    rndArrVals.push(
      arrVals[Math.floor(Math.random() * Math.floor(arrVals.length)).valueOf()],
    );
  }
  return rndArrVals;
}

function needUtility(rndClient, arrD, time) {
  console.log(
    formatTime(functionRegistry.time) +
      "\n" +
      arguments.callee.name +
      "\n!" +
      rndClient +
      ", = " +
      !rndClient +
      "\n!" +
      [arrD].toString().substring(0, 20) +
      ", = " +
      !arrD +
      "\n!" +
      time +
      ", = " +
      !time,
  );
  if (typeof rndClient === "undefined") {
    var rndClient = "random";
  }
  var client = rndClient;
  // console.log("needUtility: \n" + client + " is a:  \n" + typeof [client].join("") + ", and is " + [client].join("").length + " characters in length")
  var uniqueCo = [];
  if (typeof client !== "undefined" && [client].join("").length > 0) {
    // console.log("needUtility: \n" + [client].join("").length + " is greater than " + 0);
    var seoTitle = seoSheet(client, time).keyWords;
    console.log(
      "needUtility: \nvar " + seoTitle + " = seoSheet(" + client,
      time + ").keyWords",
    );
    var improvUI = [seoTitle].join("").split(" ");
    var improvedTitle = [];
    improvUI.map((r) => {
      for (var i = 0, l = r.length; i < l; i++) {
        // var elaspeTime
        // = new Date() - time;console.log("r[i]: " + r[i] + "\nelaspeTime: " + elaspeTime)
        if (r.indexOf(",") === -1 && r.indexOf("can\u0027t") === -1) {
          improvedTitle.push(r);
          if (i == 5) {
            break;
          }
        }
      }
    });
    var titleSlice = improvedTitle.slice(1);
    var title2 = titleSlice.map((l) => {
      return l;
    });
    if (title2.length > 0) {
      var rndTitle2 =
        title2[Math.floor(Math.random() * Math.floor(title2.length))];
      var coName = allTime([rndTitle2].join("").toLowerCase(), arrD, time);
      try {
        if (Array.isArray(rndTitle2)) {
          console.log(
            " + needUtility: \nvar " +
              coName +
              " = allTime(" +
              rndTitle2.join("").toLowerCase(),
            [arrD].toString().substring(0, 20),
            time + ")",
          );
        } else if (typeof rndTitle2 === "string" && rndTitle2) {
          console.log(
            " + needUtility: \nvar " +
              coName +
              " = allTime(" +
              rndTitle2.toLowerCase(),
            [arrD].toString().substring(0, 20),
            time + ")",
          );
        }
      } catch (error) {
        var rndTitle2 = [error][
          Math.floor(Math.random() * Math.floor([error].length))
        ];
        var coName = allTime([rndTitle2].join("").toLowerCase(), arrD, time);
        if (Array.isArray(rndTitle2)) {
          console.log(
            " + needUtility: \nvar " +
              coName +
              " = allTime(" +
              rndTitle2.join("").toLowerCase(),
            [arrD].toString().substring(0, 20),
            time + ")",
          );
        } else if (typeof rndTitle2 === "string" && rndTitle2) {
          console.log(
            " + needUtility: \nvar " +
              coName +
              " = allTime(" +
              rndTitle2.toLowerCase(),
            [arrD].toString().substring(0, 20),
            time + ")",
          );
        }
      }
    } else {
      var coName = allTime(null, arrD, time);
      console.log(
        "needUtility: \nvar " + coName + " = allTime(" + null,
        [arrD].toString().substring(0, 20),
        time + ")",
      );
    }
  } else {
    var coName = allTime(null, arrD, time);
    console.log(
      "needUtility: \nvar " + coName + " = allTime(" + null,
      [arrD].toString().substring(0, 20),
      time + ")",
    );
  }
  if (coName && coName.hasOwnProperty("title") && !coName["title"]) {
    uniqueCo.push({
      videoItem: coName["rndVideoId"],
      videoItemUrl: coName["videoUrl"],
      playlistArr: coName["videoPlaylist"],
    });
  } else if (coName && coName.hasOwnProperty("title") && coName["title"]) {
    uniqueCo.push({
      rndTitle: coName["title"],
      videoItem: coName["rndVideoId"],
      videoItemUrl: coName["videoUrl"],
      playlistArr: coName["videoPlaylist"],
    });
  }
  return uniqueCo;
}

function randomSubstance(index, loopLength, importedData, arrD, time) {
  console.log(
    formatTime(functionRegistry.time) +
      "\n" +
      arguments.callee.name +
      "\nindex is !" +
      !index +
      ", = " +
      index +
      "\nloopLength is !" +
      !loopLength +
      ", = " +
      loopLength +
      "\nimportedData is !" +
      !importedData +
      ", = " +
      importedData +
      "\narrD is !" +
      !arrD +
      ", = " +
      [arrD].toString().substring(0, 20) +
      "\ntime is !" +
      !time +
      ", = " +
      time,
  );
  if (typeof time === "undefined") {
    var time = start;
  }
  var newArr = [];
  var i = index || 0;
  var l = loopLength || 1;
  // console.log(importedData.sort((a, b) => a - b))
  // console.log(arrData.sort((a, b) => a - b))
  if (importedData) {
    for (i, l; i < l; i++) {
      var elaspeTime = new Date() - time;
      // console.log("that function: " + arguments.callee.caller.name + "\nthis function: " + arguments.callee.name + "\ntypeof importedData: " +  typeof importedData + "\nelaspeTime: " + elaspeTime)
      if (
        typeof importedData !== "undefined" &&
        typeof importedData !== "string"
      ) {
        var myImportData = importedData.sort((a, b) => a - b)[
          Math.floor(Math.random() * importedData.length)
        ];
        newArr.push(myImportData);
        var elaspeTime = new Date() - time;
        // console.log("that function: " + arguments.callee.caller.name + "\nthis function: " + arguments.callee.name + "\nmyImportData: " +  myImportData + "\nelaspeTime: " + elaspeTime)
      } else if (
        typeof importedData !== "undefined" &&
        typeof importedData === "string"
      ) {
        var myImportData = [importedData].sort((a, b) => a - b)[
          Math.floor(Math.random() * [importedData].length)
        ];
        newArr.push(myImportData);
        var elaspeTime = new Date() - time;
        // console.log("that function: " + arguments.callee.caller.name + "\nthis function: " + arguments.callee.name + "\nmyImportData: " +  myImportData + "\nelaspeTime: " + elaspeTime)
      }
    }
  } else if (typeof arrD !== "undefined") {
    for (i, l; i < l; i++) {
      var myArrData = arrD.sort((a, b) => a - b)[
        Math.floor(Math.random() * arrD.length)
      ];
      newArr.push(myArrData);
      var elaspeTime = new Date() - time;
      // console.log("that function: " + arguments.callee.caller.name + "\nthis function: " + arguments.callee.name + "\nmyArrData: " + myArrData + "\nelaspeTime: " + elaspeTime)
    }
  }
  console.log(
    "randomSubstance: \n( \nindex: " +
      index +
      "\nLoop Length: " +
      loopLength +
      "\nImported Data: " +
      importedData +
      "\nArray Data: " +
      [arrD].toString().substring(0, 20) +
      "\nTime: " +
      formatTime(functionRegistry.time) +
      " )",
  );
  if (newArr) {
    var sortNewArr = newArr.sort((a, b) => a - b)[
      Math.floor(Math.random() * newArr.length)
    ];
    // return console.log({myNewArr: sortNewArr});
    return { myNewArr: sortNewArr };
    console.log();
  }
}

// console.log(sortNewArr)
// var thisNewArr = sortNewArr.map((w) => {
// return w[0].toString()}
// ).join("")
// var randomWord = sortNewArr.toString().replace(/'"/g,"").replace(/,/g ,"")
// console.log(thisNewArr)
// console.log(randomWord)

function seoSheet(searchString, time) {
  // console.log(
  //   formatTime(functionRegistry.time) +
  //     "\n" +
  //     arguments.callee.name +
  //     "\n!" +
  //     searchString +
  //     ", = " +
  //     !searchString,
  // );
  if (typeof time === "undefined") {
    var time = functionRegistry.time;
  }
  if (typeof searchString === "undefined") {
    var searchString = globalThis.searchString().myNewArr;
  }
  var uniqueSeo = seoTwitter(null, searchString, time).twiData;
  // console.log(
  //   formatTime(functionRegistry.time) +
  //     "\nseoSheet: \nvar " +
  //     uniqueSeo +
  //     " = seoTwitter(" +
  //     searchString,
  //   time + ").twiData",
  // );
  var fndOrd = uniqueSeo
    .join("")
    .split(" ")
    .filter((p) => {
      var elaspeTime = new Date() - time;
      if (p.length > 3 && p.length < 18) {
        return p[0] !== "<";
      }
    });
  if (fndOrd.length > 0) {
    const randomKey = Math.floor(Math.random() * Math.floor(fndOrd.length));
    var rndRes = fndOrd.filter((test) => {
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
          test.indexOf("0?void") === -1 &&
          test.indexOf("12H7a3") === -1 &&
          test.indexOf("6H13ZM7") === -1 &&
          test.indexOf("2zm0") === -1 &&
          test.indexOf("null") === -1 &&
          test.indexOf("return") === -1 &&
          test.indexOf("%eSearch") === -1 &&
          test.indexOf("#fbpgdg") === -1 &&
          test.indexOf("fbpkgiid") === -1 &&
          test.indexOf("'undefined'") === -1 &&
          test.indexOf("bepcfg") === -1 &&
          test.indexOf("instanceof") === -1 &&
          test.indexOf("passed") === -1 &&
          test.indexOf("element") === -1 &&
          test.indexOf("0v2ZM3") === -1 &&
          test.indexOf("1-1-1H0a3") === -1 &&
          test.indexOf("13V3H0v10h2Zm1") === -1 &&
          test.indexOf("14H3v2h10v-2ZM2") === -1 &&
          test.indexOf("serp") === -1 &&
          test.indexOf("Identity") === -1 &&
          test.indexOf("else") === -1 &&
          test.indexOf("errd") === -1 &&
          test.indexOf("'Ref") === -1 &&
          test.indexOf("Rewards") === -1 &&
          test.indexOf("payload") === -1 &&
          test.indexOf("eventData") === -1 &&
          test.indexOf("else") === -1 &&
          test.indexOf("root") === -1 &&
          test.indexOf("'noresult'") === -1 &&
          test.indexOf("muid") === -1 &&
          test.indexOf("payload") === -1 &&
          test.indexOf("eventObj") === -1 &&
          test.indexOf("eventType") === -1 &&
          test.indexOf("handler") === -1 &&
          test.indexOf("throw") === -1 &&
          test.indexOf("remove") === -1 &&
          test.indexOf("typeof") === -1 &&
          test.indexOf("failed") === -1 &&
          test.indexOf("removed") === -1 &&
          test.indexOf("from") === -1 &&
          test.indexOf("your") === -1 &&
          test.indexOf("Init") === -1 &&
          test.indexOf("parachuteSuccess") === -1 &&
          test.indexOf("contentType") === -1 &&
          test.indexOf("postBody") === -1 &&
          test.indexOf("quick") === -1 &&
          test.indexOf("execute") === -1 &&
          test.indexOf("bind") === -1 &&
          test.indexOf("toggle") === -1 &&
          test.indexOf("true") === -1 &&
          test.indexOf("callback") === -1 &&
          test.indexOf("load") === -1 &&
          test.indexOf("allow-popups") === -1 &&
          test.indexOf("allow-same-origin") === -1 &&
          test.indexOf("config") === -1 &&
          test.indexOf("match") === -1 &&
          test.indexOf("name") === -1 &&
          test.indexOf("accLinkParams") === -1 &&
          test.indexOf("successFunc") === -1 &&
          test.indexOf("status") === -1 &&
          test.indexOf("timestamp") === -1 &&
          test.indexOf("impressionGuid") === -1 &&
          test.indexOf("eventToLog") === -1 &&
          test.indexOf("pageType") === -1 &&
          test.indexOf("explicitTimeStamp") === -1 &&
          test.indexOf("DynScopesDropdown") === -1 &&
          test.indexOf("AwayTimeThreshold") === -1 &&
          test.indexOf("contains") === -1 &&
          test.indexOf("these") === -1 &&
          test.indexOf("logEvent") === -1 &&
          test.indexOf("search") === -1 &&
          test.indexOf("description") === -1 &&
          test.indexOf("site") === -1 &&
          test.indexOf("won't") === -1 &&
          test.indexOf("allow") === -1 &&
          test.indexOf("undelivered") === -1 &&
          test.indexOf("here") === -1 &&
          test.indexOf("eventName") === -1 &&
          test.indexOf("input") === -1 &&
          test.indexOf("conversationId") === -1 &&
          test.indexOf("chatBNPData") === -1 &&
          test.indexOf("wlcmData") === -1 &&
          test.indexOf("SydFSCModule") === -1 &&
          test.indexOf("function") === -1 &&
          test.indexOf("can\u0027t") === -1 &&
          test.indexOf("render") === -1 &&
          test.indexOf("webResultsUrls") === -1 &&
          test.indexOf("RespImgInfoArr") === -1 &&
          test.indexOf("RespImgInfoArr") === -1 &&
          test.indexOf("RespImgInfoArr") === -1 &&
          test.indexOf("solid") === -1 &&
          test.indexOf("can\u0027t") === -1 &&
          test.indexOf("during") === -1 &&
          test.indexOf("height") === -1 &&
          test.indexOf("have") === -1 &&
          test.indexOf("about") === -1 &&
          test.indexOf("this") === -1 &&
          test.indexOf("Bing") === -1 &&
          test.indexOf("turn") === -1 &&
          test.indexOf("Click") === -1 &&
          test.indexOf("more") === -1 &&
          test.indexOf("Bing!") === -1 &&
          test.indexOf("page") === -1 &&
          test.indexOf("info") === -1 &&
          test.indexOf("find") === -1 &&
          test.indexOf("params") === -1 &&
          test.indexOf("right") === -1 &&
          test.indexOf("Your") === -1 &&
          test.indexOf("Search") === -1 &&
          test.indexOf("Also") === -1 &&
          test.indexOf("powered") === -1 &&
          test.indexOf("copilot") === -1 &&
          test.indexOf("EntityPanePreview") === -1 &&
          test.indexOf("undefined") === -1 &&
          test.indexOf("twitter") === -1 &&
          test.indexOf("startSettings") === -1 &&
          test.indexOf("Feedback") === -1 &&
          test.indexOf("Start") === -1 &&
          test.indexOf("exploring") === -1 &&
          test.indexOf("body") === -1 &&
          test.indexOf("select") === -1 &&
          test.indexOf("rprData") === -1 &&
          test.indexOf("MWHEEEAP0025010") === -1 &&
          test.indexOf("disableSpriteLogo") === -1 &&
          test.indexOf("MWHEEEAP0025010") === -1
        ) {
          // if (JSON.stringify(i) >= 3) {
          //   break;
          // }
          return test[i];
        }
      }
    });
    var resData = rndRes.slice(0);
    var reSearch = resData.toString().replace(/,/g, " ").split(" ");
  }
  if (!Array.isArray(searchString)) {
    var stringSplit = [searchString].join("").split(" ");
  }
  if (stringSplit) {
    if (stringSplit.length > 0) {
      var testString = testData([stringSplit], time).testArray;
      // console.log(
      //   formatTime(functionRegistry.time) +
      //     "\nseoSheet: \nvar " +
      //     testString +
      //     " = " +
      //     testData([stringSplit], time).testArray,
      // );
    }
  } else {
    var testString = testData([searchString], time).testArray;
    // console.log(
    //   formatTime(functionRegistry.time) +
    //     "\nseoSheet: \nvar " +
    //     testString +
    //     " = " +
    //     testData([searchString], time).testArray,
    // );
  }
  var lowerCaseS = [];
  if (lowerCaseS.indexOf(testString) === -1) {
    // console.log(
    //   formatTime(functionRegistry.time) +
    //     "\nseoSheet: \nlowerCaseS.indexOf(" +
    //     testString +
    //     ") === -1: " +
    //     lowerCaseS.indexOf(testString),
    // );
    var stringUI = [testString].join("").split(",");
    stringUI.map((increase) => {
      var elaspeTime = new Date() - time;
      lowerCaseS.push(increase);
    });
  }
  if (reSearch) {
    reSearch.map((seo) => {
      var elaspeTime = new Date() - time;
      var lowerCaseResearch = seo.toLowerCase();
      for (var i = 0, l = lowerCaseS.length; i < l; i++) {
        if (typeof lowerCaseS[i][lowerCaseS[i].length - 1] !== "undefined") {
          // console.log(
          //   formatTime(functionRegistry.time) +
          //     "\nseoSheet: \ntypeof " +
          //     lowerCaseS[0][i] +
          //     " !== undefined: " +
          //     typeof lowerCaseS[0][i],
          // );
          var lowerCaseSearchString =
            lowerCaseS[i][lowerCaseS[i].length - 1].toLowerCase();
          if (lowerCaseResearch.includes(lowerCaseSearchString)) {
            // console.log(
            //   formatTime(functionRegistry.time) +
            //     "\nseoSheet: \nlowerCaseResearch.includes(" +
            //     lowerCaseSearchString +
            //     "): " +
            //     lowerCaseResearch.includes(lowerCaseSearchString),
            // );
            if (lowerCaseS.indexOf(seo) === -1) {
              // console.log(
              //   functionRegistry.time +
              //     "\nseoSheet: \nlowerCaseS.indexOf(" +
              //     seo +
              //     ") === -1: " +
              //     lowerCaseS.indexOf(seo),
              // );
              var elaspeTime = functionRegistry.time;
              lowerCaseS.push(seo);
            }
          }
        }
      }
    });
  }
  return { keyWords: lowerCaseS };
}

// console.log("test: " + test + "\nelaspeTime: " + elaspeTime);console.log("seo: " + seo + "\nelaspeTime: " + elaspeTime);console.log("seo: " + seo + "\nelaspeTime: " + elaspeTime);var headers = ["keywords"];var sheetRndKey = Math.floor(Math.random() * (Math.floor(rndRes.length)));var randomSheetname = searchString || rndRes[sheetRndKey];var formRndKey = Math.floor(Math.random() * (Math.floor(rndRes.length)));var randomFormname = searchString || rndRes[formRndKey];var form = formMaker(randomFormname);fileManager(randomFormname, "Forms");var ss = sheetsMaker(randomFormname);fileManager(randomFormname, "Sheets")
// if (typeof form === "object") {var headForms = [];lowerCaseS.map((b) => {
// if (globalThis[b]) {console.log(globalThis[b].toString());console.log(b + "</></></></></></>" + JSON.stringify(covObjects([[b]], ["keywords"])));headForms.push(b);return;form.addParagraphTextItem().setTitle(JSON.stringify(covObjects([[b]], ["keywords"]))).setHelpText(globalThis[b].toString())}
// else {console.log(b + "</></></></></></>" + JSON.stringify(covObjects([[b]], ["keywords"])));headForms.push(b);return;form.addParagraphTextItem().setTitle(JSON.stringify(covObjects([[b]], ["keywords"]))).setHelpText(b)}});form.setDestination(FormApp.DestinationType.SPREADSHEET, ss.getId());var formUrl = form.getPublishedUrl()}
// else {var formUrl = form};url: formUrl,

function sheetCalc() {
  var secSheet = ssGetSheetBySpreadsheetUrl(
    "https://docs.google.com/spreadsheets/d/1-vNcN0vCLcXgMY9uwcKukUgv_4njggRZ6fqoZs-hBFE/edit#gid=138098962",
    "sec",
  );
  var secArrays = secSheet.getDataRange().getValues().slice(1);
  var arrVals = secArrays.map((val) => {
    return { cik: val[0], ticker: val[1], title: val[2] };
  });
  var rndArrVals = [];
  while (rndArrVals.length !== arrVals.length) {
    rndArrVals.push(
      arrVals[Math.floor(Math.random() * Math.floor(arrVals.length)).valueOf()],
    );
  }
  return rndArrVals;
}

// return console.log(rndTitleVested);return [Math.random() * (uniqueNum)].join("").split(".")
// return console.log(rndTitleVested);return [Math.random() * (uniqueNum)].join("").split(".")
