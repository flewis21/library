var allInvestors = function (rndKey, time) {
  console.log(
    JSON.stringify(this["start"]) +
      "\n" +
      arguments.callee.name +
      "\n!ed, = " +
      !rndKey,
  );
  if (typeof time === "undefined") {
    time = start;
  }
  // return console.log([rndKey].join("").length)
  var coArray = rndKey || [`bank semi fact bio science chain space coin`];
  var reCoArray = coArray.toString().split(" ");
  var rndCoA = Math.floor(Math.random() * Math.floor(reCoArray.length));
  var myCoArray = reCoArray.sort((a, b) => {
    // var rndArrayNum =  Math.floor(Math.random() * (Math.floor(matches.length)));
    //[rndArrayNum][0]["title"];
    a - b;
  });
  // console.log(myCoArray + " :\n" + myCoArray[rndCoA])
  var matches = myCoArray[rndCoA];
  var sheetCalc = function () {
    var secSheet = ssGetSheetBySpreadsheetUrl(
      "https://docs.google.com/spreadsheets/d/1-vNcN0vCLcXgMY9uwcKukUgv_4njggRZ6fqoZs-hBFE/edit#gid=138098962",
      "sec",
    );
    var secArrays = secSheet.getDataRange().getValues().slice(1);
    var arrVals = secArrays.map((val) => {
      return {
        cik: val[0],
        ticker: val[1],
        title: val[2],
      };
    });
    var rndArrVals = [];
    while (rndArrVals.length < arrVals.length) {
      rndArrVals.push(
        arrVals[
          Math.floor(Math.random() * Math.floor(arrVals.length)).valueOf()
        ],
      );
    }
    // return console.log(rndTitleVested)
    return rndArrVals;
    // return [Math.random() * (uniqueNum)].join("").split(".")
  };
  // return console.log(sheetCalc())
  var myTitleArray = [];
  while (myTitleArray.length < 1) {
    //   if (typeof rndKey === "undefined") {
    // }
    // var uniqueKey = [urlDataSource("company ticker", "https://www.sec.gov/files/company_tickers.json")];
    var uniqueCoArray = sheetCalc();
    myTitleArray = uniqueCoArray.filter((co) => {
      return co["title"].toLowerCase().includes(matches.toLowerCase());
    });
    // if ([rndKey].join("").length > 1){ //     var timeKey = [rndKey].join("").split(" ");}
  }
  // return console.log(myTitleArray)
  // var myCikArray = [];
  // while (myCikArray.length < 1) {
  //   if (typeof rndKey === "undefined") {     // var uniqueKey = [urlDataSource("company ticker", "https://www.sec.gov/files/company_tickers.json")];
  //   var uniqueCikArray = sheetCalc("A2:A");
  //   myCikArray = uniqueCikArray.filter((cik) => {
  //     return cik.includes(matches.toLowerCase())
  //   })
  // return console.log(myCikArray)
  // if ([rndKey].join("").length > 1){ //     var timeKey = [rndKey].join("").split(" ");}
  // }}
  var rndTitleVested = myTitleArray;
  var coKey = rndKey || rndTitleVested;
  // if (typeof rndKey === "undefined" ){
  // }
  // return console.log(sheetCalc())
  // return console.log(randomCik)
  var titleMatches = [];
  myTitleArray
    .sort((a, b) => a - b)
    .filter((ac) => {
      if (ac["title"].toLowerCase().includes(coKey.toString().toLowerCase())) {
        titleMatches.push(ac);
      }
      // else if (JSON.stringify(ac.toLowerCase().includes(rndTitleVested.toString().toLowerCase())) {   //         matches.push(ac)}
    });
  if (myTitleArray.length !== 0) {
    var uniqueCoKey = [myTitleArray].entries().next().value;
    var uniqueNum = 0;
    while (uniqueNum === 0) {
      console.log(
        "executing rndNum(" + JSON.stringify(uniqueCoKey[1][0]["cik"]) + ")",
      );
      uniqueNum = randNum(JSON.stringify(uniqueCoKey[1][0]["cik"]));
    }
    // return console.log(uniqueNum)
    var mathCalc = function () {
      return [Math.random() * uniqueNum].join("").split(".");
    };
    var takeNum = mathCalc()[1];
    var randomKey = Math.floor(Math.random() * Math.floor(takeNum));
    while (randomKey[0] > 1) {
      randomKey = Math.floor(Math.random() * Math.floor(takeNum));
    }
    var uniqueCoTitle = uniqueCoKey[1][0]["title"];
    var randomTitle = uniqueCoKey[1];
    //[randomKey][0]["title"];
    var uniqueCoTicker = uniqueCoKey[1][0]["ticker"];
    var randomTicker = uniqueCoKey[1];
    //[randomKey][0]["ticker"];
    var uniqueCoCik = uniqueCoKey[1][0]["cik"];
    var randomCik = [randomKey].join("").slice(1, 7);
    //randomKey[randomKey][0]["cik_str"];
    // while (randomCik < 99999 || randomCik > 999999999) {
    //     randomCik = randomKey
    // }
  } //Youtube Widget
  var cikUrl =
    "https://www.sec.gov/edgar/browse/?CIK=" + uniqueCoCik + "&owner=exclude";
  // return console.log(cikUrl)
  var tunPlay = uniqueCoTitle || coKey;
  console.log(
    "allInvestors: \nDeclaring randomPlaylist = needPastTime(" + tunPlay + ")",
  );
  var randomPlaylist = needPastTime(tunPlay);
  console.log(
    "allInvestors: \nRecieved: " +
      randomPlaylist +
      " from declared vatiable randomPlaylist = needPastTime(" +
      tunPlay +
      ")",
  );
  // var randomPlaylist = idArray;
  //   for (var i = 0;i<idArray.length;i++) {
  //   var randomVidKey = Math.floor(Math.random() * (Math.floor([idArray].length)));
  //   randomPlaylist.push(idArray[randomVidKey])
  // }
  var vidPlaylist = function () {
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
      return rVideo;
    }
  };
  var sortaPlay = randomPlaylist.sort((a, b) => a - b);
  var randomVideo =
    vidPlaylist() ||
    sortaPlay[Math.floor(Math.random() * Math.floor(sortaPlay.length))];
  var youtubeUrl = "http://www.youtube.com/watch?v=" + randomVideo;
  // return misBing(randomVideo)
  var secUrl =
    "https://www.sec.gov/edgar/browse/?CIK=" + uniqueCoCik + "&owner=exclude";
  return {
    cik: uniqueCoCik,
    ticker: uniqueCoTicker,
    title: uniqueCoTitle || coKey,
    rndVideoId: randomVideo,
    videoPlaylist: randomPlaylist,
    videoUrl: youtubeUrl,
    edgarUrl: secUrl,
  };
};

var allTime = function (rndKey, arrD, time) {
  console.log(
    JSON.stringify(this["start"]) +
      "\n" +
      arguments.callee.name +
      "\n!ed, = " +
      !rndKey,
  );
  if (typeof time === "undefined") {
    var time = start;
  }
  if (typeof rndKey === "undefined" || typeof rndKey === null) {
    // console.log("allTime: \nrndKey: " + rndKey + "\narrD: " + arrD + "\nTime: " + time)
    var uniqueKey = randomSubstance(0, 4, null, arrD, time).myNewArr;
    console.log(
      "allTime: \nvar " + uniqueKey + " = randomSubstance(" + 0,
      4,
      null,
      arrD,
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
  //Youtube Widget
  var seoArray = seoPastTime([coKey].join(""), time);
  console.log(
    "allTime: \nvar " +
      JSON.stringify(seoArray) +
      " = seoPastTime(" +
      [coKey].join(""),
    time + ")",
  );
  // console.log(typeof seoArray)
  if (typeof seoArray === "object") {
    var idArray = seoArray.playList;
    var randomPlaylist = [];
    for (var i = 1, l = idArray.length; i < l; i++) {
      const randomVidKey = Math.floor(
        Math.random() * Math.floor(idArray.length),
      ); // Math.floor(Math.random());
      randomPlaylist.push(
        idArray.filter((rp) => {
          return rp === idArray[randomVidKey];
        }),
      );
    }
    var vidPlaylist = function () {
      const randomVidKey = Math.floor(
        Math.random() * Math.floor(randomPlaylist.length),
      ); // Math.floor(Math.random());
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
    // console.log(seoArray.playList)

    return {
      title: rndKey || coKey,
      rndVideoId: randomVideo,
      videoPlaylist: randomPlaylist,
      videoUrl: youtubeUrl,
    };
  }
};

var covArrays = function (objects, time) {
  console.log(
    JSON.stringify(this["start"]) +
      "\n" +
      arguments.callee.name +
      "\n!ed, = " +
      !objects,
  );
  const dataArray = [];
  for (var obj in objects) {
    var elaspeTime = new Date() - time;
    // console.log("that function: " + arguments.callee.caller.name + "\nthis function: " + arguments.callee.name + "\nobj: " +  obj + "\nelaspeTime: " + elaspeTime)
    dataArray.push([objects[obj]]);
  }
  return dataArray;
};
// console.log(JSON.stringify(dataArray[obj]))
// console.log(dataArray)

var covObjects = function (rows, headings, time) {
  console.log(
    JSON.stringify(this["start"]) +
      "\n" +
      arguments.callee.name +
      "\n!ed, = " +
      !rows,
  );
  if (rows) {
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
};

var needUtility = function (rndClient, arrD, time) {
  console.log(
    JSON.stringify(this["start"]) +
      "\n" +
      arguments.callee.name +
      "\n!ed, = " +
      !rndClient,
  );
  if (typeof rndClient === "undefined") {
    var rndClient = "random";
  }
  var client = rndClient;
  // console.log("needUtility: \n" + client + " is a:  \n" + typeof [client].join("") + ", and is " + [client].join("").length + " characters in length")
  var uniqueCo = [];
  if (typeof client !== "undefined" && [client].join("").length > 0) {
    // console.log("needUtility: \n" + [client].join("").length + " is greater than " + 0)
    var seoTitle = seoSheet(client, time).keyWords;
    console.log(
      "needUtility: \nvar " + seoTitle + " = seoSheet(" + client,
      time + ").keyWords",
    );
    var improvUI = [seoTitle].join("").split(" ");
    var improvedTitle = [];
    improvUI.map((r) => {
      for (var i = 0, l = r.length; i < l; i++) {
        // var elaspeTime = new Date() - time
        // console.log("r[i]: " + r[i] + "\nelaspeTime: " + elaspeTime)
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
      console.log(
        " + needUtility: \nvar " +
          coName +
          " = allTime("[rndTitle2].join("").toLowerCase(),
        arrD,
        time + ")",
      );
    } else {
      var coName = allTime(null, arrD, time);
      console.log(
        "needUtility: \nvar " + coName + " = allTime(" + null,
        arrD,
        time + ")",
      );
    }
  } else {
    var coName = allTime(null, arrD, time);
    console.log(
      "needUtility: \nvar " + coName + " = allTime(" + null,
      arrD,
      time + ")",
    );
  }
  if (typeof coName["cik"] === "undefined") {
    uniqueCo.push({
      rndTitle: coName["title"],
      videoItem: coName["rndVideoId"],
      videoItemUrl: coName["videoUrl"],
      playlistArr: coName["videoPlaylist"],
    });
  } else {
    uniqueCo.push({
      rndCik: coName["cik"],
      rndTicker: coName["ticker"],
      rndTitle: coName["title"],
      videoItem: coName["rndVideoId"],
      videoItemUrl: coName["videoUrl"],
      playlistArr: coName["videoPlaylist"],
      secUrl: coName["edgarUrl"],
    });
  }
  return uniqueCo;
};

var randomSubstance = function (index, loopLength, importedData, arrD, time) {
  console.log(
    JSON.stringify(this["start"]) +
      "\n" +
      arguments.callee.name +
      "\n!ed, = " +
      !importedData,
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
      arrD +
      "\nTime: " +
      time +
      " )",
  );
  if (newArr) {
    var sortNewArr = newArr.sort((a, b) => a - b)[
      Math.floor(Math.random() * newArr.length)
    ];
    return {
      myNewArr: sortNewArr,
    };
    console.log();
  }
};
// console.log(sortNewArr)
// var thisNewArr = sortNewArr.map((w) => {
// return w[0].toString()}
// ).join("")
// var randomWord = sortNewArr.toString().replace(/'"/g,"").replace(/,/g ,"")
// console.log(thisNewArr)
// console.log(randomWord)

var seoPastTime = function (searchString, time) {
  console.log(
    JSON.stringify(this["start"]) +
      "\n" +
      arguments.callee.name +
      "\n!ed, = " +
      !searchString,
  );
  if (typeof time === "undefined") {
    time = start;
  }
  while (typeof fndOrd !== "object") {
    // console.log("seoPastTime: \n")
    var uniqueVid = seoYoutube(searchString, time).myIdArr;
    // console.log("seoPastTime: \nvar " + uniqueVid + " = seoYoutube(" + searchString, time + ").myIdArr")
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
        // console.log("seoPastTime: \nvidObject: " + vidObject + "\nelaspeTime: " + elaspeTime + "\ntimeToExecute: " + timeToExecute)
        return vidObject;
      }
    });
    var i = 0;
    var l = sorFndOrd.length;
    for (i, l; i < l; i++) {
      var fndOrd = [];
      sorFndOrd.sort((a, b) => {
        //  if (a !== b && fndOrd.indexOf(a) === -1) {
        while (a !== b && fndOrd.indexOf(a) === -1) {
          if (fndOrd.indexOf(a) > -1) {
            return;
          }
          {
          }

          //  console.log("stockHistory: \n")
          fndOrd.push(a);
          //  console.log("seoPastTime: \nfndOrd.push(" + a + ")")
        }
        //  else if (a === b && fndOrd.indexOf(a) === -1) {
        while (a === b && fndOrd.indexOf(a) === -1) {
          //  console.log("seoPastTime: \n" + a + " === " + b + " && fndOrd.indexOf(" + a + ") === -1 " + a === b && fndOrd.indexOf(a) === -1)
          if (fndOrd.indexOf(a) > -1) {
            //  console.log("seoPastTime: \nfndOrd.indexOf(" + a + ") > -1 "+ fndOrd.indexOf(a))
            return;
          }
          {
          }

          fndOrd.push(a);
          //  console.log("seoPastTime: \nfndOrd.push(" + a + ")")
        }
        //  else if (b !== a && fndOrd.indexOf(b) === -1) {
        while (b !== a && fndOrd.indexOf(b) === -1) {
          //  console.log("seoPastTime: \n" + b + " !== " + a + " && fndOrd.indexOf(" + b + ") === -1 " + b !== a && fndOrd.indexOf(b) === -1)
          if (fndOrd.indexOf(b) > -1) {
            //  console.log("seoPastTime: \nfndOrd.indexOf(" + b + ") > -1 "+ fndOrd.indexOf(b))
            return;
          }
          {
          }

          fndOrd.push(b);
          //  else if (b !== a && fndOrd.indexOf(b) === -1) {
          while (b === a && fndOrd.indexOf(b) === -1) {
            //  console.log("seoPastTime: \n" + b + " === " + a + " && fndOrd.indexOf(" + b + ") === -1 " + b === a && fndOrd.indexOf(b) === -1)
            if (fndOrd.indexOf(b) > -1) {
              //  console.log("seoPastTime: \nfndOrd.indexOf(" + b + ") > -1 " + fndOrd.indexOf(b))
              return;
            }
            {
            }

            fndOrd.push(b);
            //  console.log("seoPastTime: \nfndOrd.push(" + a + ")")
          }
          //  console.log("seoPastTime: \nfndOrd.push(" + b + ")")
        }
      });
    }
    if (typeof fndOrd === "object") {
      // console.log(seoArray.playList)
      break;
    }
  }
  // console.log(fndOrd)
  if (fndOrd) {
    const randomKey = Math.floor(Math.random() * Math.floor(fndOrd.length)); // Math.floor(Math.random());
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
          if (JSON.stringify(i) >= 3) {
            break;
          }
          return test[i];
        }
      }
      // console.log("test: " + test + "\nelaspeTime: " + elaspeTime + "\ntimeToExecute: " + timeToExecute)
    });
    var rndSort = [];
    for (var i = 0, l = rndRes.length; i < l; i++) {
      rndRes.filter((o) => {
        rndSort.push(o !== rndRes[i]);
        if (rndSort.length === rndRes.length) {
          return;
        }
      });
    }
    var sorKind = rndSort.toString().split(" ");
    var revKind = sorKind.reverse();
    var popKind = revKind.pop();
    var rndKind = popKind.split(",");
    return {
      playList: rndRes.sort((a, b) => a - b),
    };
  }
};
// var form = formMaker(searchString)
// fileManager(searchString, "Forms")
// var lowerCaseS = seoSheet(searchString).keyWords
// lowerCaseS.map((b) => {
// console.log(b + "</></></></></></>" + JSON.stringify(covObjects([[b]], ["keywords"])))
// return form.addVideoItem().setTitle(JSON.stringify(covObjects([[b]], ["keywords"]))).setAlignment(FormApp.Alignment.CENTER).setWidth(612).setVideoUrl(needUtility(b)[0].videoItemUrl)})
// var formUrl = form.getPublishedUrl()
// url: formUrl

var seoSheet = function (searchString, time) {
  console.log(
    JSON.stringify(this["start"]) +
      "\n" +
      arguments.callee.name +
      "\n!ed, = " +
      !searchString,
  );
  if (typeof time === "undefined") {
    time = start;
  }
  if (typeof searchString === "undefined") {
    var searchString = "sports medicine";
  }
  var uniqueSeo = seoTwitter(searchString, time).twiData;
  console.log(
    "seoSheet: \nvar " + uniqueSeo + " = seoTwitter(" + searchString,
    time + ").twiData",
  );
  var fndOrd = uniqueSeo
    .join("")
    .split(" ")
    .filter((p) => {
      var elaspeTime = new Date() - time;
      // console.log("p: " + p + "\nelaspeTime: " + elaspeTime)
      if (p.length > 3 && p.length < 18) {
        return p[0] !== "<";
      }
    });
  if (fndOrd.length > 0) {
    const randomKey = Math.floor(Math.random() * Math.floor(fndOrd.length)); // Math.floor(Math.random());
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
          if (JSON.stringify(i) >= 3) {
            break;
          }
          return test[i];
        }
      }
      var elaspeTime = new Date() - time;
      // console.log("test: " + test + "\nelaspeTime: " + elaspeTime)
    });
    var resData = rndRes.slice(0);
    var reSearch = resData.toString().replace(/,/g, " ").split(" ");
  }
  if (typeof searchString !== "object") {
    var stringSplit = [searchString].join("").split(",");
  }
  if (stringSplit) {
    var testString = testData([stringSplit], time).testArray;
    console.log(
      "seoSheet: \nvar " +
        testString +
        " = " +
        testData([stringSplit], time).testArray,
    );
  } else {
    var testString = testData([searchString], time).testArray;
    console.log(
      "seoSheet: \nvar " +
        testString +
        " = " +
        testData([searchString], time).testArray,
    );
  }
  var lowerCaseS = [];
  if (lowerCaseS.indexOf(testString) === -1) {
    console.log(
      "seoSheet: \nlowerCaseS.indexOf(" +
        testString +
        ") === -1: " +
        lowerCaseS.indexOf(testString),
    );
    var stringUI = [testString].join("").split(" ");
    stringUI.map((increase) => {
      var elaspeTime = new Date() - time;
      lowerCaseS.push(increase);
    });
  }
  if (reSearch) {
    reSearch.map((seo) => {
      var elaspeTime = new Date() - time;
      // console.log("seo: " + seo + "\nelaspeTime: " + elaspeTime)
      var lowerCaseResearch = seo.toLowerCase();
      for (var i = 0, l = lowerCaseS.length; i < l; i++) {
        if (typeof lowerCaseS[0][i] !== "undefined") {
          console.log(
            "seoSheet: \ntypeof " +
              lowerCaseS[0][i] +
              " !== undefined: " +
              typeof lowerCaseS[0][i],
          );
          var lowerCaseSearchString = lowerCaseS[0][i].toLowerCase();
          if (lowerCaseResearch.includes(lowerCaseSearchString)) {
            console.log(
              "seoSheet: \nlowerCaseResearch.includes(" +
                lowerCaseSearchString +
                "): " +
                lowerCaseResearch.includes(lowerCaseSearchString),
            );
            if (lowerCaseS.indexOf(seo) === -1) {
              console.log(
                "seoSheet: \nlowerCaseS.indexOf(" +
                  seo +
                  ") === -1: " +
                  lowerCaseS.indexOf(seo),
              );
              var elaspeTime = new Date() - time;
              // console.log("seo: " + seo + "\nelaspeTime: " + elaspeTime)
              lowerCaseS.push(seo);
            }
          }
        }
      }
    });
  }
  return {
    keyWords: lowerCaseS,
  };
};
// var headers = ["keywords"]
// var sheetRndKey = Math.floor(Math.random() * (Math.floor(rndRes.length)))
// var randomSheetname = searchString || rndRes[sheetRndKey]
// var formRndKey = Math.floor(Math.random() * (Math.floor(rndRes.length)))
// var randomFormname = searchString || rndRes[formRndKey]
// var form = formMaker(randomFormname)
// fileManager(randomFormname, "Forms")
// var ss = sheetsMaker(randomFormname)
// fileManager(randomFormname, "Sheets")
// if (typeof form === "object") {
// var headForms = []
// lowerCaseS.map((b) => {
// if (globalThis[b]) {
// console.log(globalThis[b].toString())
// console.log(b + "</></></></></></>" + JSON.stringify(covObjects([[b]], ["keywords"])))
// headForms.push(b)
// return //form.addParagraphTextItem().setTitle(JSON.stringify(covObjects([[b]], ["keywords"]))).setHelpText(globalThis[b].toString())
// }
// else {
// console.log(b + "</></></></></></>" + JSON.stringify(covObjects([[b]], ["keywords"])))
// headForms.push(b)
// return //form.addParagraphTextItem().setTitle(JSON.stringify(covObjects([[b]], ["keywords"]))).setHelpText(b)
// }
// })
// form.setDestination(FormApp.DestinationType.SPREADSHEET, ss.getId())
// var formUrl = form.getPublishedUrl()
// }
// else {
// var formUrl = form
// }
// url: formUrl,
