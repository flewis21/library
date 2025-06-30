var dtlsPro = function (e) {
  var cokey;
  if (typeof e === "undefined") {
    e
      ? (cokey = e)
      : (cokey = functionRegistry.getParamsList()[crmT(arguments.callee.name)]);
  }
  var boilerUrl = mis(cokey, time);
  if (boilerUrl) {
    return mis(boilerUrl);
  }
  var coHelpText =
    "http://www.bing.com/videos/search?q=" +
    encodeURIComponent(e) +
    "+intitle:+-+AND+*&PC=U316&top=50&skip=0&FORM=CHROMN";
  var isProduct = matchManager("Forms", [cokey].join("").toLowerCase());
  console.log(
    Math.floor((maxTime - (new Date() % (1000 * 60))) / 1000) +
      "\n" +
      arguments.callee.name +
      "\nisProduct is !" +
      !isProduct +
      ", = " +
      typeof isProduct,
  );
  if (typeof isProduct === "string" && isProduct !== "undefined") {
    var formUrl = FormApp.openByUrl(isProduct).getPublishedUrl();
    if (formUrl) {
      return formUrl;
    }
  }
  var time = Math.floor((maxTime - (new Date() % (1000 * 60))) / 1000);
  var seoArray = seoPastTime([cokey].join(""), time);
  var uti = seoArray.playList;
  var coData = coUtility(cokey)[0];
  if (coData) {
    var coDataName = coData.rndTitle;
    var coDataPy = driveManager([coDataName].join("").toLowerCase());
    if (typeof coDataPy === "string" && coDataPy !== "undefined") {
      var coDataUrl = FormApp.openByUrl(coDataPy).getPublishedUrl();
      if (coDataUrl) {
        return coDataUrl;
      }
    }
  }
  try {
    if (typeof coData.rndTicker !== "undefined") {
      var urlTicker = "https://www.nasdaq.com/search?q=" + coData.rndTicker;
      var form = formMaker([cokey].join("").toUpperCase(), "videoForms", time);
      if (typeof form === "object") {
        form
          .addSectionHeaderItem()
          .setTitle(urlTicker)
          .setHelpText(coData.secUrl);
        form
          .addTextItem()
          .setTitle("CUSTOM SEARCH")
          .setRequired(true)
          .setHelpText(coHelpText);
        form.setCollectEmail(true);
        uti.map((piece) => {
          while (piece) {
            if (piece) {
              var elaspeTime = new Date() - time;
              var timeToExecute = maxTime - elaspeTime;
              form.addPageBreakItem().setTitle([cokey].join(""));
              form
                .addSectionHeaderItem()
                .setTitle(urlTicker)
                .setHelpText(coData.secUrl);
              form
                .addSectionHeaderItem()
                .setTitle("https://youtube.com/watch?v=" + piece);
              form
                .addVideoItem()
                .setAlignment(FormApp.Alignment.CENTER)
                .setWidth(612)
                .setVideoUrl("https://youtube.com/watch?v=" + piece);
              form
                .addTextItem()
                .setTitle("CUSTOM SEARCH")
                .setHelpText(coHelpText);
              if (
                timeToExecute <= 6 * 60 * 1000 &&
                timeToExecute >= 5.98 * 60 * 1000
              ) {
                console.log(
                  "that function: " +
                    arguments.callee.caller.name +
                    "\nthis function: " +
                    arguments.callee.name +
                    "\nTime limit six minutes",
                );
              }
              if (timeToExecute <= 0.05 * 60 * 1000) {
                console.log(
                  "piece: " +
                    piece[0] +
                    "\ntimeToExecute: " +
                    timeToExecute.valueOf(),
                );
                return;
              }
              return piece[0];
            }
            return;
          }
        });
        var formUrl = form.getPublishedUrl();
        return formUrl;
      }
    } else {
      if (typeof form === "object") {
        form
          .addTextItem()
          .setTitle("CUSTOM SEARCH")
          .setRequired(true)
          .setHelpText(coHelpText);
        form.setCollectEmail(true);
        uti.map((piece) => {
          while (piece) {
            if (piece) {
              var elaspeTime = new Date() - time;
              var timeToExecute = maxTime - elaspeTime;
              form.addPageBreakItem().setTitle([cokey].join(""));
              form
                .addSectionHeaderItem()
                .setTitle("https://youtube.com/watch?v=" + piece);
              form
                .addVideoItem()
                .setAlignment(FormApp.Alignment.CENTER)
                .setWidth(612)
                .setVideoUrl("https://youtube.com/watch?v=" + piece);
              form
                .addTextItem()
                .setTitle("CUSTOM SEARCH")
                .setHelpText(coHelpText);
              if (
                timeToExecute <= 6 * 60 * 1000 &&
                timeToExecute >= 5.98 * 60 * 1000
              ) {
                console.log(
                  "that function: " +
                    arguments.callee.caller.name +
                    "\nthis function: " +
                    arguments.callee.name +
                    "\nTime limit six minutes",
                );
              }
              if (timeToExecute <= 0.05 * 60 * 1000) {
                console.log(
                  "piece: " +
                    piece[0] +
                    "\ntimeToExecute: " +
                    timeToExecute.valueOf(),
                );
                return;
              }
              return piece[0];
            }
            return;
          }
        });
        var formUrl = form.getPublishedUrl();
        return formUrl;
      }
    }
  } catch (error) {
    console.log("error in contentApp: " + error);
    return "This alley location does not make sense! " + error;
  }
  return formUrl;
};
var portBing = function (e) {
  var cokey;
  if (typeof e === "undefined") {
    e
      ? (cokey = e)
      : (cokey = objectOfS(
          ["parameter"],
          [[["func", testlt()]]],
          Math.floor((maxTime - (new Date() % (1000 * 60))) / 1000),
        ).parameter["func"]);
  }
  var boilerUrl = mis(
    cokey,
    Math.floor((maxTime - (new Date() % (1000 * 60))) / 1000),
  );
  if (boilerUrl) {
    return boilerUrl;
  }
  var coHelpText =
    "http://www.bing.com/search?q=" +
    encodeURIComponent(e) +
    "+intitle:+-+AND+*&PC=U316&top=50&skip=0&FORM=CHROMN";
  var seoArray = seoPastTime(
    [cokey].join(""),
    Math.floor((maxTime - (new Date() % (1000 * 60))) / 1000),
  );
  var uti = seoArray.playList;
  var coData = coUtility(cokey)[0];
  if (coData) {
    var coDataName = coData.rndTitle;
    var coDataPy = driveManager([coDataName].join("").toLowerCase());
    if (typeof coDataPy === "string" && coDataPy !== "undefined") {
      var coDataUrl = FormApp.openByUrl(coDataPy).getPublishedUrl();
      if (coDataUrl) {
        return coDataUrl;
      }
    }
  }
  try {
    if (typeof coData.rndTicker !== "undefined") {
      var urlTicker = "https://www.nasdaq.com/search?q=" + coData.rndTicker;
      var form = formMaker(
        [cokey].join("").toUpperCase(),
        "webForms",
        Math.floor((maxTime - (new Date() % (1000 * 60))) / 1000),
      );
      if (typeof form === "object") {
        form
          .addSectionHeaderItem()
          .setTitle(urlTicker)
          .setHelpText(coData.secUrl);
        form
          .addTextItem()
          .setTitle("CUSTOM SEARCH")
          .setRequired(true)
          .setHelpText(coHelpText);
        form.setCollectEmail(true);
        uti.map((piece) => {
          while (piece) {
            if (piece) {
              var elaspeTime =
                new Date() -
                Math.floor((maxTime - (new Date() % (1000 * 60))) / 1000);
              var timeToExecute = maxTime - elaspeTime;
              form.addPageBreakItem().setTitle([cokey].join(""));
              form
                .addSectionHeaderItem()
                .setTitle(urlTicker)
                .setHelpText(coData.secUrl);
              form
                .addSectionHeaderItem()
                .setTitle("https://youtube.com/watch?v=" + piece);
              form
                .addVideoItem()
                .setAlignment(FormApp.Alignment.CENTER)
                .setWidth(612)
                .setVideoUrl("https://youtube.com/watch?v=" + piece);
              if (
                timeToExecute <= 6 * 60 * 1000 &&
                timeToExecute >= 5.98 * 60 * 1000
              ) {
                console.log(
                  "that function: " +
                    arguments.callee.caller.name +
                    "\nthis function: " +
                    arguments.callee.name +
                    "\nTime limit six minutes",
                );
              }
              if (timeToExecute <= 0.05 * 60 * 1000) {
                console.log(
                  "piece: " +
                    piece[0] +
                    "\ntimeToExecute: " +
                    timeToExecute.valueOf(),
                );
                return;
              }
              return piece[0];
            }
            return;
          }
        });
        var formUrl = form.getPublishedUrl();
        return formUrl;
      }
    } else {
      if (typeof form === "object") {
        form
          .addTextItem()
          .setTitle("CUSTOM SEARCH")
          .setRequired(true)
          .setHelpText(coHelpText);
        form.setCollectEmail(true);
        uti.map((piece) => {
          while (piece) {
            if (piece) {
              var elaspeTime =
                new Date() -
                Math.floor((maxTime - (new Date() % (1000 * 60))) / 1000);
              var timeToExecute = maxTime - elaspeTime;
              form.addPageBreakItem().setTitle([cokey].join(""));
              form
                .addSectionHeaderItem()
                .setTitle("https://youtube.com/watch?v=" + piece);
              form
                .addVideoItem()
                .setAlignment(FormApp.Alignment.CENTER)
                .setWidth(612)
                .setVideoUrl("https://youtube.com/watch?v=" + piece);
              if (
                timeToExecute <= 6 * 60 * 1000 &&
                timeToExecute >= 5.98 * 60 * 1000
              ) {
                console.log(
                  "that function: " +
                    arguments.callee.caller.name +
                    "\nthis function: " +
                    arguments.callee.name +
                    "\nTime limit six minutes",
                );
              }
              if (timeToExecute <= 0.05 * 60 * 1000) {
                console.log(
                  "piece: " +
                    piece[0] +
                    "\ntimeToExecute: " +
                    timeToExecute.valueOf(),
                );
                return;
              }
              return piece[0];
            }
            return;
          }
        });
        var formUrl = form.getPublishedUrl();
        return formUrl;
      }
    }
  } catch (error) {
    console.log("error in contentApp: " + error);
    return "This alley location does not make sense! ";
  }
  return formUrl;
};
var dtlsBridge = function (func, time) {
  func
    ? func
    : (func = objectOfS(
        ["parameter"],
        [[["func", testlt()]]],
        Math.floor((maxTime - (new Date() % (1000 * 60))) / 1000),
      ).parameter["func"]);
  console.log(
    Math.floor((maxTime - (new Date() % (1000 * 60))) / 1000) +
      "\n" +
      arguments.callee.name +
      "\nfunc is !" +
      !func +
      ", = " +
      func +
      "\ntime is !" +
      !time +
      ", = " +
      time,
  );
  var appList = gsFiles();
  var lowCapFunc = [func].join("").toLowerCase().split(",");
  var funFirst = crmT(lowCapFunc[0]);
  if (crmCalc(lowCapFunc[0]) === true) {
    var resFunc = lowCapFunc[0];
    var formName = resFunc;
    var jsFunc = wwAccess(
      "bridge",
      Route.path("maccall", dtlsSomeFunction),
      resFunc,
    );
    if (typeof jsFunc === "undefined") {
      return;
    }
  } else {
    var appLen = appList.length;
    var rdmNumForName = Math.floor(Math.random() * Math.floor(appLen));
    var randomSeo = appList[rdmNumForName];
    var keysFunc = seoSheet(randomSeo).keyWords;
    var keyLen = keysFunc.length;
    var mathRnd = Math.floor(Math.random() * Math.floor(keyLen));
    var rndKey = keysFunc[mathRnd];
    if (mathRnd > 0) {
      var seoFirst = [rndKey][0];
      var lowCapSeo = [seoFirst].join("").toLowerCase().split(",");
      var seoTwo = appList.indexOf(lowCapSeo[0]);
      var resSeo = appList[seoTwo];
    } else {
      var sLen = rndKey.length;
      var sLenRnd = Math.floor(Math.random() * Math.floor(sLen));
      var seoFirst = appSort(sLenRnd);
      var lowCapSeo = [seoFirst].join("").toLowerCase().split(",");
      var seoTwo = appList.indexOf(lowCapSeo[0]);
      var resSeo = appList[seoTwo];
    }
    if (seoTwo > -1) {
      var formName = resSeo;
      var jsFunc = wwwAccess(
        "bridge",
        Route.path("maccall", dtlsSomeFunction),
        resSeo,
      );
      if (typeof jsFunc === "undefined") {
        return;
      }
    } else {
      var formName = randomSeo;
      var jsFunc = wwAccess(
        "bridge",
        Route.path("maccall", dtlsSomeFunction),
        randomSeo,
      );
      if (typeof jsFunc === "undefined") {
        return;
      }
    }
  }
  if (
    typeof jsFunc === "string" &&
    jsFunc.indexOf("<") === -1 &&
    jsFunc.indexOf("http") !== -1
  ) {
    var appType = jsFunc.split("/");
    if (appType.indexOf("spreadsheets") > -1) {
      return mis(jsFunc.content);
    } else {
      try {
        var formUrl = FormApp.openByUrl(jsFunc.content).getPublishedUrl();
      } catch (error) {
        return dtlsSomeFunction(resFunc).content;
      }
      return formUrl;
    }
  }
  var isProduct = formsUrls([formName].join("").toLowerCase(), "Forms");
  console.log(typeof isProduct);
  if (typeof isProduct === "string") {
    var formUrl = FormApp.openByUrl(isProduct).getPublishedUrl();
    return formUrl;
  }
  var form = formMaker([formName].join("").toUpperCase(), "Forms");
  if (typeof form === "object") {
    form.setCollectEmail(true);
    if (
      [appList]
        .join("")
        .toLowerCase()
        .indexOf([formName].join("").toLowerCase()) !== -1
    ) {
      form
        .addParagraphTextItem()
        .setHelpText(
          globalThis[
            appList[
              [appList]
                .join("")
                .toLowerCase()
                .indexOf([formName].join("").toLowerCase())
            ]
          ].toString(),
        );
    }
    if (typeof jsFunc === "object") {
      [jsFunc].map((piece) => {
        while (piece) {
          if (piece) {
            var elaspeTime =
              new Date() -
              Math.floor((maxTime - (new Date() % (1000 * 60))) / 1000);
            var timeToExecute = maxTime - elaspeTime;
            form.addPageBreakItem().setTitle([formName].join(""));
            form.addSectionHeaderItem().setHelpText(JSON.stringify(piece));
            if (
              timeToExecute <= 6 * 60 * 1000 &&
              timeToExecute >= 5.98 * 60 * 1000
            ) {
              console.log(
                "that function: " +
                  arguments.callee.caller.name +
                  "\nthis function: " +
                  arguments.callee.name +
                  "\nTime limit six minutes",
              );
            }
            if (timeToExecute <= 0.05 * 60 * 1000) {
              console.log(
                "piece: " +
                  piece[0] +
                  "\ntimeToExecute: " +
                  timeToExecute.valueOf(),
              );
              return;
            }
            return piece[0];
          }
          return;
        }
      });
    }
    var formUrl = form.getPublishedUrl();
    return formUrl;
  }
};
var allInvestors = function (rndKey, time) {
  console.log(
    Math.floor((maxTime - (new Date() % (1000 * 60))) / 1000) +
      "\n" +
      arguments.callee.name +
      "\nrndKey is !" +
      !rndKey +
      ", = " +
      rndKey +
      "\ntime is !" +
      !time +
      ", = " +
      time,
  );
  if (typeof time === "undefined") {
    time = start;
  }
  var coArray = [rndKey] || [`bank semi fact bio science chain space coin`];
  var reCoArray = coArray.toString().split(" ");
  var rndCoA = Math.floor(Math.random() * Math.floor(reCoArray.length));
  var myCoArray = reCoArray.sort((a, b) => {
    a - b;
  });
  var matches = myCoArray[rndCoA];
  var rndTitleVested = [];
  var vestCount = 0;
  var uniqueCoArray = sheetCalc();
  var unMatch = crmCalc(matches);
  if (unMatch === false) {
    while (rndTitleVested.length < 1) {
      uniqueCoArray.filter((co) => {
        if (co["title"].toLowerCase().indexOf(matches.toLowerCase()) !== -1) {
          rndTitleVested.push(co["title"]);
        }
      });
      vestCount++;
      if (vestCount === uniqueCoArray.length) {
        break;
      }
    }
  }
  var titleMatches = [];
  rndTitleVested
    .sort((a, b) => a - b)
    .filter((ac) => {
      if (
        ac["title"].toLowerCase().indexOf(coKey.toString().toLowerCase()) !== -1
      ) {
        titleMatches.push(ac);
      }
    });
  if (rndTitleVested.length !== 0) {
    var uniqueCoKey = [rndTitleVested].entries().next().value;
    var uniqueNum = 0;
    while (uniqueNum === 0) {
      console.log(
        "executing rndNum(" + JSON.stringify(uniqueCoKey[1][0]["cik"]) + ")",
      );
      uniqueNum = randNum(JSON.stringify(uniqueCoKey[1][0]["cik"]));
    }
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
    var uniqueCoTicker = uniqueCoKey[1][0]["ticker"];
    var randomTicker = uniqueCoKey[1];
    var uniqueCoCik = uniqueCoKey[1][0]["cik"];
    var randomCik = [randomKey].join("").slice(1, 7);
    var secUrl =
      "https://www.sec.gov/edgar/browse/?CIK=" + uniqueCoCik + "&owner=exclude";
  }
  var tunPlay = rndKey || uniqueCoTitle;
  return {
    cik: uniqueCoCik,
    ticker: uniqueCoTicker,
    title: tunPlay,
    edgarUrl: secUrl,
  };
};
var coUtility = function (rndClient) {
  console.log(
    functionRegistry.time +
      "\n" +
      arguments.callee.name +
      "\nrndClient is !" +
      !rndClient +
      ", = " +
      rndClient,
  );
  var client;
  if (rndClient) {
    client = rndClient;
  }
  var uniqueCo = [];
  if (typeof client !== "undefined") {
    var coName = allInvestors(client.toString().toLowerCase());
    console.log(
      functionRegistry.time +
        "\ncoUtility: \nvar coName = allInvestors(" +
        client +
        ".toString().toLowerCase())",
    );
  } else {
    var coName = allInvestors();
    console.log(
      functionRegistry.time + "\ncoUtility: \nvar coName = allInvestors()",
    );
  }
  if (typeof coName["cik"] === "undefined") {
    uniqueCo.push({ rndTitle: coName["title"] });
  } else {
    uniqueCo.push({
      rndCik: coName["cik"],
      rndTicker: coName["ticker"],
      rndTitle: coName["title"],
      secUrl: coName["edgarUrl"],
    });
  }
  return uniqueCo;
};
var dtlsMain = function (file) {
  console.log(
    Math.floor((maxTime - (new Date() % (1000 * 60))) / 1000) +
      "\n" +
      arguments.callee.name +
      "\nfile is !" +
      !file +
      ", = " +
      file,
  );
  var isProduct = driveManager(
    file,
    Math.floor((maxTime - (new Date() % (1000 * 60))) / 1000),
  );
  console.log(
    Math.floor((maxTime - (new Date() % (1000 * 60))) / 1000) +
      "\n" +
      arguments.callee.name +
      "\nisProduct is !" +
      !isProduct +
      ", = " +
      typeof isProduct,
  );
  if (typeof isProduct === "string" && isProduct !== "undefined") {
    try {
      var formUrl = FormApp.openByUrl(isProduct).getPublishedUrl();
    } catch (error) {
      return mis(isProduct);
    }
    return formUrl;
  } else {
    return "File Does Not Exist!";
  }
};

// ;return HtmlService.createTemplate(`<html id="test"><head><base target="_top"><meta charset="utf-8"><meta name="description" content="Example meta description."><meta name=viewport content="width=device-width, initial-scale=1"><link href="https://fonts.googleapis.com/css?family=Acme" rel="stylesheet"></head><body><div class="row"><div class="col s10 l10 m10 card-panel push-s1 push-l1 push-m1"><div class="container row valign-wrapper"><?!= rule() ?></div><div class="video-container grey" style="clear: both"><div class="col s10 l10 m10 receipt black darken-1"><iframe class="z-depth-5 card-panel deep-purple darken-1 scale-transition scale-out scale-in btn-large" src=${formUrl} width="100%" height="100%" allow="autoplay" allow="encrypted-media" title="Dontime Life Website" frameborder="0" allowfullscreen></iframe></div></div></div></div></body></html>`).evaluate().getContent();Youtube Widget;var rndArrayNum =  Math.floor(Math.random() * (Math.floor(matches.length)));[rndArrayNum][0]["title"];console.log(myCoArray + " :\n" + myCoArray[rndCoA])
//   if (typeof rndKey === "undefined") {};var uniqueKey = [urlDataSource("company ticker", "https://www.sec.gov/files/company_tickers.json")];
// if ([rndKey].join("").length > 1){ //     var timeKey = [rndKey].join("").split(" ");};return console.log(myTitleArray);var myCikArray = [];while (myCikArray.length < 1) {  if (typeof rndKey === "undefined") {var uniqueKey = [urlDataSource("company ticker", "https://www.sec.gov/files/company_tickers.json")];var uniqueCikArray = sheetCalc("A2:A");myCikArray = uniqueCikArray.filter((cik) => {return cik.includes(matches.toLowerCase())});return console.log(myCikArray)
// if ([rndKey].join("").length > 1){var timeKey = [rndKey].join("").split(" ");}}}
// if (typeof rndKey === "undefined" ){};return console.log(sheetCalc());return console.log(randomCik)
// else if (JSON.stringify(ac.toLowerCase().includes(rndTitleVested.toString().toLowerCase())) {matches.push(ac)};return console.log(uniqueNum);[randomKey][0]["title"];[randomKey][0]["ticker"];randomKey[randomKey][0]["cik_str"];while (randomCik < 99999 || randomCik > 999999999) {randomCik = randomKey};return console.log(cikUrl);var randomPlaylist = idArray;for (var i = 0;i<idArray.length;i++) {var randomVidKey = Math.floor(Math.random() * (Math.floor([idArray].length)));randomPlaylist.push(idArray[randomVidKey])}return misBing;var func = "proMediaSnip";var timeToExecute = maxTime - elaspeTime;console.log("piece: " + piece + "\nelaspeTime: " + elaspeTime);form.addSectionHeaderItm().setTitle([piece].join("").split('"'))
// if (timeToExecute <= 5 * 60 * 1000 && timeToExecute >= 4.98 * 60 * 1000) {console.log("that function: " + arguments.callee.caller.name + "\nthis function: " + arguments.callee.name + "\nTime limit five minutes")}
//if (timeToExecute <= 4 * 60 * 1000 && timeToExecute >= 3.98 * 60 * 1000) {console.log("that function: " + arguments.callee.caller.name + "\nthis function: " + arguments.callee.name + "\nTime limit four minutes")}
//if (timeToExecute <= 3 * 60 * 1000 && timeToExecute >= 2.98 * 60 * 1000) {console.log("that function: " + arguments.callee.caller.name + "\nthis function: " + arguments.callee.name + "\nTime limit three minutes")}
//if (timeToExecute <= 2 * 60 * 1000 && timeToExecute >= 1.98 * 60 * 1000) {console.log("that function: " + arguments.callee.caller.name + "\nthis function: " + arguments.callee.name + "\nTime limit two minutes")}
//if (timeToExecute <= 1 * 60 * 1000 && timeToExecute >= .98 * 60 * 1000) {console.log("that function: " + arguments.callee.caller.name + "\nthis function: " + arguments.callee.name + "\nTime limit one minute")}};console.log("piece: " + piece + "\nelaspeTime: " + elaspeTime)
// else if (typeof isProduct === "string" && isProduct !== "undefined"){var formUrl = FormApp.openByUrl(isProduct).getPublishedUrl();return formUrl};var arrData = coSort(time).title;var utilNeed = randomUtility(e,arrData).title;var isProduct = formsUrls([cokey].join("").toLowerCase(), "videoForms");console.log(typeof isProduct);var utiStr = skyNeed(cokey, time);var utiSeo = pastSeo(utiStr, time)
// if (timeToExecute <= 5 * 60 * 1000 && timeToExecute >= 4.98 * 60 * 1000) {console.log("that function: " + arguments.callee.caller.name + "\nthis function: " + arguments.callee.name + "\nTime limit five minutes")}
// if (timeToExecute <= 4 * 60 * 1000 && timeToExecute >= 3.98 * 60 * 1000) {console.log("that function: " + arguments.callee.caller.name + "\nthis function: " + arguments.callee.name + "\nTime limit four minutes")}
// if (timeToExecute <= 3 * 60 * 1000 && timeToExecute >= 2.98 * 60 * 1000) {console.log("that function: " + arguments.callee.caller.name + "\nthis function: " + arguments.callee.name + "\nTime limit three minutes")}
// if (timeToExecute <= 2 * 60 * 1000 && timeToExecute >= 1.98 * 60 * 1000) {console.log("that function: " + arguments.callee.caller.name + "\nthis function: " + arguments.callee.name + "\nTime limit two minutes")}
// if (timeToExecute <= 1 * 60 * 1000 && timeToExecute >= .98 * 60 * 1000) {console.log("that function: " + arguments.callee.caller.name + "\nthis function: " + arguments.callee.name + "\nTime limit one minute")};return surveyPlayer(uti, [cokey].join(""));or throw error.;var arrData = coSort(time).title;var utilNeed = randomUtility(e,arrData).title;var utiStr = skyNeed(cokey, time);var utiSeo = pastSeo(utiStr, time);fileManager(form.getId(), "videoForms", time);console.log("piece: " + piece + "\nelaspeTime: " + elaspeTime)
// if (timeToExecute <= 5 * 60 * 1000 && timeToExecute >= 4.98 * 60 * 1000) {console.log("that function: " + arguments.callee.caller.name + "\nthis function: " + arguments.callee.name + "\nTime limit five minutes")}
// if (timeToExecute <= 4 * 60 * 1000 && timeToExecute >= 3.98 * 60 * 1000) {console.log("that function: " + arguments.callee.caller.name + "\nthis function: " + arguments.callee.name + "\nTime limit four minutes")}
// if (timeToExecute <= 3 * 60 * 1000 && timeToExecute >= 2.98 * 60 * 1000) {console.log("that function: " + arguments.callee.caller.name + "\nthis function: " + arguments.callee.name + "\nTime limit three minutes")}
// if (timeToExecute <= 2 * 60 * 1000 && timeToExecute >= 1.98 * 60 * 1000) {console.log("that function: " + arguments.callee.caller.name + "\nthis function: " + arguments.callee.name + "\nTime limit two minutes")}
// if (timeToExecute <= 1 * 60 * 1000 && timeToExecute >= .98 * 60 * 1000) {console.log("that function: " + arguments.callee.caller.name + "\nthis function: " + arguments.callee.name + "\nTime limit one minute")};return surveyPlayer(uti, [cokey].join(""));Math.floor(Math.random());console.log("seoPastTime: \n");console.log("seoPastTime: \nvar " + uniqueVid + " = seoYoutube(" + searchString, time + ").myIdArr");console.log("seoPastTime: \nvidObject: " + vidObject + "\nelaspeTime: " + elaspeTime + "\ntimeToExecute: " + timeToExecute)
//  if (a !== b && fndOrd.indexOf(a) === -1) {console.log("stockHistory: \n");console.log("seoPastTime: \nfndOrd.push(" + a + ")")
//  else if (a === b && fndOrd.indexOf(a) === -1) {console.log("seoPastTime: \n" + a + " === " + b + " && fndOrd.indexOf(" + a + ") === -1 " + a === b && fndOrd.indexOf(a) === -1);console.log("seoPastTime: \nfndOrd.indexOf(" + a + ") > -1 "+ fndOrd.indexOf(a));console.log("seoPastTime: \nfndOrd.push(" + a + ")")
//  else if (b !== a && fndOrd.indexOf(b) === -1) {console.log("seoPastTime: \n" + b + " !== " + a + " && fndOrd.indexOf(" + b + ") === -1 " + b !== a && fndOrd.indexOf(b) === -1);console.log("seoPastTime: \nfndOrd.indexOf(" + b + ") > -1 "+ fndOrd.indexOf(b))
//  else if (b !== a && fndOrd.indexOf(b) === -1) {console.log("seoPastTime: \n" + b + " === " + a + " && fndOrd.indexOf(" + b + ") === -1 " + b === a && fndOrd.indexOf(b) === -1)console.log("seoPastTime: \nfndOrd.indexOf(" + b + ") > -1 " + fndOrd.indexOf(b));console.log("seoPastTime: \nfndOrd.push(" + a + ")");console.log("seoPastTime: \nfndOrd.push(" + b + ")");console.log(seoArray.playList);console.log(fndOrd);console.log("test: " + test + "\nelaspeTime: " + elaspeTime + "\ntimeToExecute: " + timeToExecute);var form = formMaker(searchString);fileManager(searchString, "Forms");var lowerCaseS = seoSheet(searchString).keyWords;lowerCaseS.map((b) => {console.log(b + "</></></></></></>" + JSON.stringify(covObjects([[b]], ["keywords"])));return form.addVideoItem().setTitle(JSON.stringify(covObjects([[b]], ["keywords"]))).setAlignment(FormApp.Alignment.CENTER).setWidth(612).setVideoUrl(needUtility(b)[0].videoItemUrl)});var formUrl = form.getPublishedUrl();url: formUrl
