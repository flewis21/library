var dtlsBridge = function (func, time) {
  var appList = [];
  for (var key in globalThis) {
    if (typeof globalThis[key] == "function") {
      appList.push(key);
    }
  }
  var lowCapApp = [appList].join("").toLowerCase().split(",");
  var lowCapFunc = [func].join("").toLowerCase().split(",");
  var funFirst = lowCapApp.indexOf(lowCapFunc[0]);
  if (funFirst > -1) {
    // var func = "proMediaSnip"
    var appLen = appList.length;
    var rdmNumForName = Math.floor(Math.random() * Math.floor(appLen));
    var randomSeo = appList[rdmNumForName];
    var resFunc = appList[funFirst];
    var keysFunc = seoSheet(randomSeo).keyWords;
    var keyLen = keysFunc.length;
    var mathRnd = Math.floor(Math.random() * Math.floor(keyLen));
    var rndKey = keysFunc[mathRnd];
    if (mathRnd > 0) {
      var seoFirst = [rndKey][0];
      var lowCapSeo = [seoFirst].join("").toLowerCase().split(",");
      var seoTwo = lowCapApp.indexOf(lowCapSeo[0]);
      var resSeo = appList[seoTwo];
    } else {
      var sLen = rndKey.length;
      var sLenRnd = Math.floor(Math.random() * Math.floor(sLen));
      var seoFirst = rndKey[sLenRnd];
      var lowCapSeo = [seoFirst].join("").toLowerCase().split(",");
      var seoTwo = lowCapApp.indexOf(lowCapSeo[0]);
      var resSeo = appList[seoTwo];
    }
    if (funFirst > -1) {
      var formName = resFunc;
      var jsFunc = globalThis[resFunc]();
      if (typeof jsFunc === "undefined") {
        return;
      }
    } else if (seoTwo > -1) {
      var formName = resSeo;
      var jsFunc = globalThis[resSeo]();
      if (typeof jsFunc === "undefined") {
        return;
      }
    } else {
      var formName = randomSeo;
      var jsFunc = globalThis[randomSeo]();
      if (typeof jsFunc === "undefined") {
        return;
      }
    }
    // var lowCapName = [formName].join("").toLowerCase().split(",");
    // var formFirst = lowCapApp.indexOf(lowCapName[0]);
    // var resForm = appList[formFirst]
    // if (lowCapApp.includes(lowCapName)) {

    //   var jsFunc = globalThis[resForm]()
    //   if (typeof jsFunc === "undefined") {

    //     return

    //   }
    if (
      typeof jsFunc === "string" &&
      jsFunc.indexOf("<") === -1 &&
      jsFunc.indexOf("http") !== -1
    ) {
      var appType = jsFunc.split("/");
      if (appType.indexOf("spreadsheets") > -1) {
        return jsFunc;
      }
      var formUrl = FormApp.openByUrl(jsFunc).getPublishedUrl();
      return formUrl;
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
          .join()
          .toLowerCase()
          .includes([formName].join("").toLowerCase())
      ) {
        form
          .addParagraphTextItem()
          .setHelpText(globalThis[formName].toString());
      }
      if (typeof jsFunc === "object") {
        jsFunc.map((piece) => {
          while (piece) {
            if (piece) {
              var elaspeTime = new Date() - time;
              var timeToExecute = maxTime - elaspeTime;
              // console.log("piece: " + piece + "\nelaspeTime: " + elaspeTime)
              form.addPageBreakItem().setTitle([formName].join(""));
              // form.addSectionHeaderItm().setTitle([piece].join("").split('"'))
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
              if (
                timeToExecute <= 5 * 60 * 1000 &&
                timeToExecute >= 4.98 * 60 * 1000
              ) {
                // console.log("that function: " + arguments.callee.caller.name + "\nthis function: " + arguments.callee.name + "\nTime limit five minutes")
              }
              if (
                timeToExecute <= 4 * 60 * 1000 &&
                timeToExecute >= 3.98 * 60 * 1000
              ) {
                // console.log("that function: " + arguments.callee.caller.name + "\nthis function: " + arguments.callee.name + "\nTime limit four minutes")
              }
              if (
                timeToExecute <= 3 * 60 * 1000 &&
                timeToExecute >= 2.98 * 60 * 1000
              ) {
                // console.log("that function: " + arguments.callee.caller.name + "\nthis function: " + arguments.callee.name + "\nTime limit three minutes")
              }
              if (
                timeToExecute <= 2 * 60 * 1000 &&
                timeToExecute >= 1.98 * 60 * 1000
              ) {
                // console.log("that function: " + arguments.callee.caller.name + "\nthis function: " + arguments.callee.name + "\nTime limit two minutes")
              }
              if (
                timeToExecute <= 1 * 60 * 1000 &&
                timeToExecute >= 0.98 * 60 * 1000
              ) {
                // console.log("that function: " + arguments.callee.caller.name + "\nthis function: " + arguments.callee.name + "\nTime limit one minute")
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

    // }
  }
};

var dtlsPict = function (e, time) {
  var search = [e].join("");
  console.log("calling formUrls with " + search);
  var isProduct = formsUrls(search.toLowerCase(), "pictForms");
  console.log("Receiving from formUrls a(n) - " + typeof isProduct);
  if (typeof isProduct === "string" && typeof isProduct !== "undefined") {
    var formUrl = FormApp.openByUrl(isProduct).getPublishedUrl();
    return formUrl;
  }
  var time = start;
  // var e = "first at vicksburg"
  // console.log("calling coSort")
  // var arrData = coSort(time).title
  // console.log("Receiving from coSort - ")
  // console.log("calling randomUtility with ")
  // var utilNeed = randomUtility(e,arrData).title
  // console.log("Receiving from randomUtility - " + utilNeed)
  var cokey = e; //|| utilNeed
  if (cokey) {
    var boilerUrl = dtlsBridge(cokey, time);
    if (boilerUrl) {
      return boilerUrl;
    }
  }
  var coHelpText =
    "http://www.bing.com/images/search?q=" +
    encodeURIComponent(e) +
    "+intitle:+-+AND+*&PC=U316&top=50&skip=0&FORM=CHROMN";
  console.log("calling formUrls with " + cokey);
  isProduct = formsUrls([cokey].join("").toLowerCase(), "pictForms");
  console.log("Receiving from formUrls a(n) - " + typeof isProduct);
  if (typeof isProduct === "string" && isProduct !== "undefined") {
    var formUrl = FormApp.openByUrl(isProduct).getPublishedUrl();
    return formUrl;
  }
  // var utiStr = skyNeed(cokey, time)
  // var utiSeo = pastSeo(utiStr, time)
  console.log("calling seoPictTime with " + cokey);
  var seoArray = seoPictTime([cokey].join(""), time);
  var uti = seoArray.playList;
  var seoArrayVid = seoPastTime([cokey].join(""), time);
  var utiVid = seoArrayVid.playList;
  console.log("Receiving from seoPictTime - ");
  console.log("calling formMaker with " + cokey);
  var form = formMaker([cokey].join("").toUpperCase(), "pictForms", time);

  if (typeof form === "object") {
    // fileManager(form.getId(), "videoForms", time)

    form
      .addTextItem()
      .setTitle("CUSTOM SEARCH")
      .setRequired(true)
      .setHelpText(coHelpText);
    form.setCollectEmail(true);
    uti.map((piece) => {
      if (
        [piece].join("").split('"')[1].indexOf("Logo.svg") !== -1 &&
        [piece].join("").split('"')[1].indexOf("<") === -1 &&
        [piece].join("").split('"')[1].indexOf("http") !== -1
      ) {
        console.log(
          "calling join with " + [piece] + " looking for index of < and http",
        );
        var pieceStr = [piece].join("").split('"')[1];
        console.log("Receiving from join - " + pieceStr);
        if (pieceStr) {
          var elaspeTime = new Date() - time;
          var timeToExecute = maxTime - elaspeTime;
          // console.log("piece: " + piece + "\nelaspeTime: " + elaspeTime)
          form.addPageBreakItem().setTitle([cokey].join(""));
          // form.addSectionHeaderItm().setTitle(pieceStr.split('"'))

          form.addDateItem().setHelpText("(DATE)");
          form
            .addSectionHeaderItem()
            .setTitle("CODE-BREAKDOWN SHEET")
            .setHelpText(
              "Day Ext- Yellow\nNight Ext- Green\nDay Int- White\nNight Int- Blue",
            );
          form.addTextItem();
          form.addTextItem().setHelpText("production company");
          form.addTextItem().setHelpText("production title/no.");
          form.addTextItem().setHelpText("breakdown page no.");
          form.addSectionHeaderItem().setTitle(cokey).setHelpText("scene name");
          form.addTextItem();
          form
            .addSectionHeaderItem()
            .setTitle(cokey)
            .setHelpText("description");
          form.addTextItem();
          form.addTextItem().setHelpText("page count");
          form
            .addSectionHeaderItem()
            .setTitle("PRODUCTION NOTES")
            .setHelpText("EXTRAS/SILENT BITS\n YELLOW\n\n\n\n\n");
          form.addParagraphTextItem();
          form
            .addSectionHeaderItem()
            .setTitle("PRODUCTION NOTES")
            .setHelpText("SPECIAL EFFECTS\n BLUE\n\n\n\n\n\n");
          form.addParagraphTextItem();
          form
            .addSectionHeaderItem()
            .setTitle("PRODUCTION NOTES")
            .setHelpText("PROPS\n VIOLET\n\n\n\n\n\n");
          form.addParagraphTextItem();
          form
            .addSectionHeaderItem()
            .setTitle("PRODUCTION NOTES")
            .setHelpText("VEHICLES/ANIMALS\n PINK\n\n\n\n\n\n");
          form.addParagraphTextItem();
          form
            .addSectionHeaderItem()
            .setTitle("PRODUCTION NOTES")
            .setHelpText("WARDROBE\n CIRCLE\n\n\n\n\n");
          form.addParagraphTextItem();
          form
            .addSectionHeaderItem()
            .setTitle("PRODUCTION NOTES")
            .setHelpText("MAKE-UP/HAIR\n ASTERISK\n\n\n\n\n");
          form.addParagraphTextItem();
          form
            .addSectionHeaderItem()
            .setTitle("PRODUCTION NOTES")
            .setHelpText("SOUND EFFECTS/MUSIC\n BROWN\n\n\n\n\n");
          form.addParagraphTextItem();
          form
            .addSectionHeaderItem()
            .setTitle("PRODUCTION NOTES")
            .setHelpText("SPECIAL EQUIPMENT\n BOX\n\n\n\n\n");
          form.addParagraphTextItem();
          console.log("calling UrlFetchApp with " + JSON.stringify(pieceStr));

          form
            .addImageItem()
            .setTitle(cokey + " storyboard")
            .setImage(UrlFetchApp.fetch(pieceStr))
            .setWidth(1012)
            .setAlignment(FormApp.Alignment.CENTER);

          form.addTextItem().setHelpText("scene no.").setRequired(true);
          form.addTextItem().setHelpText("int/ext").setRequired(true);
          form.addTextItem().setHelpText("day/night").setRequired(true);
          if (
            timeToExecute <= 6 * 60 * 1000 &&
            timeToExecute >= 5.98 * 60 * 1000
          ) {
            console.log(
              "dtlsPict - \nthis function: " +
                arguments.callee.caller.name +
                "\nis calling: " +
                arguments.callee.name +
                "\nTime limit six minutes",
            );
          }
          if (
            timeToExecute <= 5 * 60 * 1000 &&
            timeToExecute >= 4.98 * 60 * 1000
          ) {
            // console.log("that function: " + arguments.callee.caller.name + "\nthis function: " + arguments.callee.name + "\nTime limit five minutes")
          }
          if (
            timeToExecute <= 4 * 60 * 1000 &&
            timeToExecute >= 3.98 * 60 * 1000
          ) {
            // console.log("that function: " + arguments.callee.caller.name + "\nthis function: " + arguments.callee.name + "\nTime limit four minutes")
          }
          if (
            timeToExecute <= 3 * 60 * 1000 &&
            timeToExecute >= 2.98 * 60 * 1000
          ) {
            // console.log("that function: " + arguments.callee.caller.name + "\nthis function: " + arguments.callee.name + "\nTime limit three minutes")
          }
          if (
            timeToExecute <= 2 * 60 * 1000 &&
            timeToExecute >= 1.98 * 60 * 1000
          ) {
            // console.log("that function: " + arguments.callee.caller.name + "\nthis function: " + arguments.callee.name + "\nTime limit two minutes")
          }
          if (
            timeToExecute <= 1 * 60 * 1000 &&
            timeToExecute >= 0.98 * 60 * 1000
          ) {
            // console.log("that function: " + arguments.callee.caller.name + "\nthis function: " + arguments.callee.name + "\nTime limit one minute")
          }
          if (timeToExecute <= 0.05 * 60 * 1000) {
            console.log(
              "piece: " +
                pieceStr[0] +
                "\ntimeToExecute: " +
                timeToExecute.valueOf(),
            );
            return;
          }
        }
      }
    });
    // return surveyPlayer(utiVid, [cokey].join(""))
    var formUrl = form.getPublishedUrl();
    return formUrl;
  }
  var rndUti = uti[randNum(uti)];
};

var dtlsPro = function (e) {
  if (typeof e === "undefined") {
    var e = "ifandoutbusiness";
  }
  if (e) {
    var boilerUrl = dtlsBridge(e, time);
    if (boilerUrl) {
      return boilerUrl;
    }
  }
  var coHelpText =
    "http://www.bing.com/videos/search?q=" +
    encodeURIComponent(e) +
    "+intitle:+-+AND+*&PC=U316&top=50&skip=0&FORM=CHROMN";
  var isProduct = formsUrls([e].join("").toLowerCase(), "videoForms");
  console.log(typeof isProduct);
  if (typeof isProduct === "string" && isProduct !== "undefined") {
    var formUrl = FormApp.openByUrl(isProduct).getPublishedUrl();
    return formUrl;
  }
  var time = start;
  // var arrData = coSort(time).title
  // var utilNeed = randomUtility(e,arrData).title
  var cokey = e;
  var isProduct = formsUrls([cokey].join("").toLowerCase(), "videoForms");
  console.log(typeof isProduct);
  if (typeof isProduct === "string" && isProduct !== "undefined") {
    var formUrl = FormApp.openByUrl(isProduct).getPublishedUrl();
    return formUrl;
  }
  // var utiStr = skyNeed(cokey, time)
  // var utiSeo = pastSeo(utiStr, time)
  var seoArray = seoPastTime([cokey].join(""), time);
  var uti = seoArray.playList;
  var form = formMaker([cokey].join("").toUpperCase(), "videoForms", time);

  if (typeof form === "object") {
    // fileManager(form.getId(), "videoForms", time)

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
          // console.log("piece: " + piece + "\nelaspeTime: " + elaspeTime)
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
          if (
            timeToExecute <= 5 * 60 * 1000 &&
            timeToExecute >= 4.98 * 60 * 1000
          ) {
            // console.log("that function: " + arguments.callee.caller.name + "\nthis function: " + arguments.callee.name + "\nTime limit five minutes")
          }
          if (
            timeToExecute <= 4 * 60 * 1000 &&
            timeToExecute >= 3.98 * 60 * 1000
          ) {
            // console.log("that function: " + arguments.callee.caller.name + "\nthis function: " + arguments.callee.name + "\nTime limit four minutes")
          }
          if (
            timeToExecute <= 3 * 60 * 1000 &&
            timeToExecute >= 2.98 * 60 * 1000
          ) {
            // console.log("that function: " + arguments.callee.caller.name + "\nthis function: " + arguments.callee.name + "\nTime limit three minutes")
          }
          if (
            timeToExecute <= 2 * 60 * 1000 &&
            timeToExecute >= 1.98 * 60 * 1000
          ) {
            // console.log("that function: " + arguments.callee.caller.name + "\nthis function: " + arguments.callee.name + "\nTime limit two minutes")
          }
          if (
            timeToExecute <= 1 * 60 * 1000 &&
            timeToExecute >= 0.98 * 60 * 1000
          ) {
            // console.log("that function: " + arguments.callee.caller.name + "\nthis function: " + arguments.callee.name + "\nTime limit one minute")
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
    // return surveyPlayer(uti, [cokey].join(""))
    var formUrl = form.getPublishedUrl();
    return formUrl;
  }
  var rndUti = uti[randNum(uti)];
};

var portBing = function (e) {
  if (typeof e === "undefined") {
    var e = "ifandoutbusiness";
  }
  if (e) {
    var boilerUrl = dtlsBridge(e, time);
    if (boilerUrl) {
      return boilerUrl;
    }
  }
  var coHelpText =
    "http://www.bing.com/search?q=" +
    encodeURIComponent(e) +
    "+intitle:+-+AND+*&PC=U316&top=50&skip=0&FORM=CHROMN";
  var isProduct = formsUrls([e].join("").toLowerCase(), "webForms");
  console.log(typeof isProduct);
  if (typeof isProduct === "string" && isProduct !== "undefined") {
    var formUrl = FormApp.openByUrl(isProduct).getPublishedUrl();
    return formUrl;
  }
  var time = start;
  // var arrData = coSort(time).title
  // var utilNeed = randomUtility(e,arrData).title
  var cokey = e;
  var isProduct = formsUrls([cokey].join("").toLowerCase(), "webForms");
  console.log(typeof isProduct);
  if (typeof isProduct === "string" && isProduct !== "undefined") {
    var formUrl = FormApp.openByUrl(isProduct).getPublishedUrl();
    return formUrl;
  }
  // var utiStr = skyNeed(cokey, time)
  // var utiSeo = pastSeo(utiStr, time)
  var seoArray = seoPastTime([cokey].join(""), time);
  var uti = seoArray.playList;
  var form = formMaker([cokey].join("").toUpperCase(), "webForms", time);

  if (typeof form === "object") {
    // fileManager(form.getId(), "videoForms", time)

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
          // console.log("piece: " + piece + "\nelaspeTime: " + elaspeTime)
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
          if (
            timeToExecute <= 5 * 60 * 1000 &&
            timeToExecute >= 4.98 * 60 * 1000
          ) {
            // console.log("that function: " + arguments.callee.caller.name + "\nthis function: " + arguments.callee.name + "\nTime limit five minutes")
          }
          if (
            timeToExecute <= 4 * 60 * 1000 &&
            timeToExecute >= 3.98 * 60 * 1000
          ) {
            // console.log("that function: " + arguments.callee.caller.name + "\nthis function: " + arguments.callee.name + "\nTime limit four minutes")
          }
          if (
            timeToExecute <= 3 * 60 * 1000 &&
            timeToExecute >= 2.98 * 60 * 1000
          ) {
            // console.log("that function: " + arguments.callee.caller.name + "\nthis function: " + arguments.callee.name + "\nTime limit three minutes")
          }
          if (
            timeToExecute <= 2 * 60 * 1000 &&
            timeToExecute >= 1.98 * 60 * 1000
          ) {
            // console.log("that function: " + arguments.callee.caller.name + "\nthis function: " + arguments.callee.name + "\nTime limit two minutes")
          }
          if (
            timeToExecute <= 1 * 60 * 1000 &&
            timeToExecute >= 0.98 * 60 * 1000
          ) {
            // console.log("that function: " + arguments.callee.caller.name + "\nthis function: " + arguments.callee.name + "\nTime limit one minute")
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
    // return surveyPlayer(uti, [cokey].join(""))
    var formUrl = form.getPublishedUrl();
    return formUrl;
  }
  var rndUti = uti[randNum(uti)];
};

var portPro = function (e) {
  // var e = "qvar"
  if (e) {
    var boilerUrl = dtlsBridge(e, time);
    if (boilerUrl) {
      return boilerUrl;
    }
  }
  var isProduct = formsUrls([e].join("").toLowerCase(), "webForms");
  console.log(typeof isProduct);
  if (typeof isProduct === "string" && isProduct !== "undefined") {
    var formUrl = FormApp.openByUrl(isProduct).getPublishedUrl();
    return formUrl;
  }
  var time = start;
  // var namedVar = "pred"
  var arrData = coSort(time).title;
  var utilNeed = randomUtility(e, arrData).title;
  var cokey = e || utilNeed;
  var isProduct = formsUrls([cokey].join("").toLowerCase(), "webForms");
  console.log(typeof isProduct);
  if (typeof isProduct === "string" && isProduct !== "undefined") {
    var formUrl = FormApp.openByUrl(isProduct).getPublishedUrl();
    return formUrl;
  }
  // var utiStr = skyNeed(cokey, time)
  // var utiSeo = pastSeo(utiStr, time)
  var seoArray = needBing([cokey].join(""), time);
  var uti = seoArray.myPlay;
  var form = formMaker([cokey].join("").toUpperCase(), "webForms", time);
  if (typeof form === "object") {
    // fileManager(form.getId(), "webForms", time)

    form.setCollectEmail(true);
    uti.map((piece) => {
      while (piece) {
        var srPiece = piece.indexOf("src2=");
        var svPiece = piece.indexOf("xmlns=");
        var srImgRes = [piece.slice(srPiece).toString().split("src2=")]
          .join("")
          .split('"')[1];
        if ([svPiece].indexOf("svg") > -1) {
          var svImgRes = [piece.slice(svPiece).toString().split("xmlns=")]
            .join("")
            .split('"')[1];
        }
        if (piece.indexOf("http") > -1) {
          var elaspeTime = new Date() - time;
          var timeToExecute = maxTime - elaspeTime;
          // console.log("piece: " + piece + "\nelaspeTime: " + elaspeTime)
          form.addPageBreakItem().setTitle([cokey].join(""));
          form.addSectionHeaderItem().setTitle(piece);
          if (srImgRes || svImgRes) {
            var imgUrl = srImgRes || svImgRes;
          }
          if ([imgUrl].join("").length > 0) {
            form
              .addImageItem()
              .setTitle(cokey + " storyboard")
              .setImage(UrlFetchApp.fetch(imgUrl))
              .setWidth(1012)
              .setAlignment(FormApp.Alignment.CENTER);
          }
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
          if (
            timeToExecute <= 5 * 60 * 1000 &&
            timeToExecute >= 4.98 * 60 * 1000
          ) {
            // console.log("that function: " + arguments.callee.caller.name + "\nthis function: " + arguments.callee.name + "\nTime limit five minutes")
          }
          if (
            timeToExecute <= 4 * 60 * 1000 &&
            timeToExecute >= 3.98 * 60 * 1000
          ) {
            // console.log("that function: " + arguments.callee.caller.name + "\nthis function: " + arguments.callee.name + "\nTime limit four minutes")
          }
          if (
            timeToExecute <= 3 * 60 * 1000 &&
            timeToExecute >= 2.98 * 60 * 1000
          ) {
            // console.log("that function: " + arguments.callee.caller.name + "\nthis function: " + arguments.callee.name + "\nTime limit three minutes")
          }
          if (
            timeToExecute <= 2 * 60 * 1000 &&
            timeToExecute >= 1.98 * 60 * 1000
          ) {
            // console.log("that function: " + arguments.callee.caller.name + "\nthis function: " + arguments.callee.name + "\nTime limit two minutes")
          }
          if (
            timeToExecute <= 1 * 60 * 1000 &&
            timeToExecute >= 0.98 * 60 * 1000
          ) {
            // console.log("that function: " + arguments.callee.caller.name + "\nthis function: " + arguments.callee.name + "\nTime limit one minute")
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
  var rndUti = uti[randNum(uti)];
};

var stockPro = function (e, time) {
  // var e = "inc"
  var isProduct = formsUrls([e].join("").toLowerCase(), "docForms");
  console.log(typeof isProduct);
  if (typeof isProduct === "string" && isProduct !== "undefined") {
    var formUrl = FormApp.openByUrl(isProduct).getPublishedUrl();
    return formUrl;
  }
  if (e) {
    var boilerUrl = dtlsBridge(e, time);
    if (boilerUrl) {
      return boilerUrl;
    }
  }
  var arrData = allInvestors(e, time);
  // var dataTitle = [arrData.title]
  // var coData = randomUtility(e, dataTitle)
  var cokey = arrData.title;
  var yahooNeed = arrData.ticker;
  var coHelpText = arrData.edgarUrl;
  var isProduct = formsUrls([cokey].join("").toLowerCase(), "docForms");
  console.log(typeof isProduct);
  if (typeof isProduct === "string" && isProduct !== "undefined") {
    var formUrl = FormApp.openByUrl(isProduct).getPublishedUrl();
    var survey = seoCapital(formUrl);
  } else {
    var uti = bingSWF([cokey].join("")).myPlay;
    var form = formMaker([cokey].join("").toUpperCase(), "docForms", time);
    if (typeof form === "object") {
      // fileManager(form.getId(), "docForms", time)

      form.addTextItem().setTitle("Stock Price").setRequired(true);
      form
        .addTextItem()
        .setTitle("Outstanding Shares")
        .setRequired(true)
        .setHelpText(coHelpText);
      form.setCollectEmail(true);
      uti.map((piece) => {
        while (piece) {
          if (piece) {
            if (piece.indexOf("https://") > -1) {
              var elaspeTime = new Date() - time;
              var timeToExecute = maxTime - elaspeTime;
              // console.log("piece: " + piece + "\nelaspeTime: " + elaspeTime)
              form.addPageBreakItem().setTitle([yahooNeed].join(""));
              form.addSectionHeaderItem().setTitle(piece);
              form
                .setTitle(arrData.rndTitle)
                .setConfirmationMessage("Thanks for your feedback !!");
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
              if (
                timeToExecute <= 5 * 60 * 1000 &&
                timeToExecute >= 4.98 * 60 * 1000
              ) {
                // console.log("that function: " + arguments.callee.caller.name + "\nthis function: " + arguments.callee.name + "\nTime limit five minutes")
              }
              if (
                timeToExecute <= 4 * 60 * 1000 &&
                timeToExecute >= 3.98 * 60 * 1000
              ) {
                // console.log("that function: " + arguments.callee.caller.name + "\nthis function: " + arguments.callee.name + "\nTime limit four minutes")
              }
              if (
                timeToExecute <= 3 * 60 * 1000 &&
                timeToExecute >= 2.98 * 60 * 1000
              ) {
                // console.log("that function: " + arguments.callee.caller.name + "\nthis function: " + arguments.callee.name + "\nTime limit three minutes")
              }
              if (
                timeToExecute <= 2 * 60 * 1000 &&
                timeToExecute >= 1.98 * 60 * 1000
              ) {
                // console.log("that function: " + arguments.callee.caller.name + "\nthis function: " + arguments.callee.name + "\nTime limit two minutes")
              }
              if (
                timeToExecute <= 1 * 60 * 1000 &&
                timeToExecute >= 0.98 * 60 * 1000
              ) {
                // console.log("that function: " + arguments.callee.caller.name + "\nthis function: " + arguments.callee.name + "\nTime limit one minute")
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
          }
          return;
        }
      });
      var formUrl = form.getPublishedUrl();
      var survey = seoCapital(formUrl);
    }
  }
  // var arrTickerData = yahooSort(yahooNeed, time)
  // var price = JSON.parse(arrTickerData.price)
  // var markTime = new Date(JSON.parse(arrTickerData.time)).toLocaleTimeString()
  // var currency = arrTickerData.currency[0]
  // var currencySymbol = arrTickerData.currencySymbol[0]
  // var freeTime = markTime.toLocaleTimeString()

  // var data = JSON.parse(arrTickerData)
  // var res = JSON.stringify(
  //   {

  //     price,
  //     markTime,
  //     currency,
  //     currencySymbol

  //   }
  //   )

  var html = HtmlService.createTemplate(
    `
      <html id="test">
      
        <head>
        
          <base target="_top">
          <meta charset="utf-8">
          <meta name="description" content="Example meta description.">
          <meta name=viewport content="width=device-width, initial-scale=1">
          <link href="https://fonts.googleapis.com/css?family=Acme" rel="stylesheet">
        
        </head>
      
      <body>
      


      
      </body>
      </html>

  `,
  );
  console.log(eval(html));
  return formUrl;
  return html.evaluate().append(survey).getContent();
};

var stockHistory = function (e) {
  if (typeof e === "undefined") {
    var driveArr = [];
    while (driveArr.length === 0) {
      var eDrive = folderManager();
      var rndDrivePoint = Math.floor(Math.random() * Math.floor(eDrive.length));
      var eFolder = eDrive[rndDrivePoint];
      var eFile = matchManager(eFolder);
      // return console.log(e)
      // var uniqueE = JSON.parse(e)
      for (var key in eFile) {
        if (eFile[key].length > 0) {
          driveArr.push(eFile[key]);
        }
      }
    }
    var rndArrPoint = Math.floor(Math.random() * Math.floor(driveArr.length));
    var arrPoint = driveArr[rndArrPoint];
    var rndFilePoint = Math.floor(Math.random() * Math.floor(arrPoint.length));
    var e = arrPoint[rndFilePoint];
  }
  // return console.log(eFile)
  else if (e) {
    console.log(e, "  ", typeof e);
    var boilerUrl = dtlsBridge([e].join("").toLowerCase(), time);
    if (boilerUrl) {
      return boilerUrl;
    }
    var allTitleData = [];
    var uiDrive = folderManager();
    var returnfolderArr = folderMatch([e].join("").toLowerCase(), uiDrive);
    var rndReturnPoint = Math.floor(
      Math.random() * Math.floor(returnfolderArr.length),
    );
    var eFolder = returnfolderArr[rndReturnPoint];

    // return JSON.stringify(eFolder)
    var uiArr = matchManager(eFolder);
    for (var key in uiArr) {
      if (uiArr[key].length > 0) {
        allTitleData.push(uiArr[key]);
      }
    }
    // return JSON.stringify(allTitleData)
    e = allTitleData;
  }
  var isProduct = formsUrls([e].join("").toLowerCase(), "docForms");
  // return console.log(typeof isProduct)
  if (typeof isProduct === "string" && isProduct !== "undefined") {
    var formUrl = FormApp.openByUrl(isProduct).getPublishedUrl();
    return formUrl;
  }
  var time = start;
  if (typeof eFolder === "undefined") {
    var unArr = [];
    while (unArr.length === 0) {
      var rndUnPoint = Math.floor(Math.random() * Math.floor(uiDrive.length));
      var unFolder = uiDrive[rndUnPoint];
      var unFile = matchManager(unFolder);
      // return console.log(e)
      // var uniqueE = JSON.parse(e)
      for (var key in unFile) {
        if (unFile[key].length > 0) {
          unArr.push(unFile[key]);
        }
      }
    }
    var rndUnPoint = Math.floor(Math.random() * Math.floor(unArr.length));
    var unPoint = unArr[rndUnPoint];
    var rndUnFilePoint = Math.floor(Math.random() * Math.floor(unPoint.length));
    var unE = unPoint[rndUnFilePoint];
    var myFolderHistory = DriveApp.getFoldersByName(unFolder).next();
    var myFileHistory = myFolderHistory.getFilesByName(
      [unE].join("").toLowerCase(),
    );
  } else {
    console.log(arrData, " :", typeof arrData);
    console.log(eFolder);
    var myFolderHistory = DriveApp.getFoldersByName(eFolder).next();
    var myFileHistory = myFolderHistory.getFilesByName(
      [e].join("").toLowerCase(),
    );
  }
  var dataTree = [];
  var nameTree = [];
  while (myFileHistory.hasNext()) {
    var myFile = myFileHistory.next();
    var currentFileUrl = myFile.getUrl();
    var currentFileName = myFile.getName();
    dataTree.push(currentFileUrl);
    nameTree.push(currentFileName);
  }
  var rndFiled = Math.floor(Math.random() * Math.floor(dataTree.length));
  // var arrData = nameTree[rndFiled]
  // var utilNeed = randomUtility(e,arrData).title
  // var yahooNeed = arrData.ticker
  var coHelpText = dataTree[rndFiled];
  var cokey = nameTree[rndFiled];
  var isProduct = formsUrls([cokey].join("").toLowerCase(), "docForms");
  // return console.log(typeof isProduct)
  if (typeof isProduct === "string" && isProduct !== "undefined") {
    var formUrl = FormApp.openByUrl(isProduct).getPublishedUrl();
    return formUrl;
  } else {
    // var utiStr = skyNeed(cokey, time)
    // var utiSeo = pastSeo(utiStr, time)
    var seoArray = seoPastTime([cokey].join(""), time);
    var uti = seoArray.playList;
    // return console.log(uti)
    var form = formMaker([cokey].join("").toUpperCase(), "docForms", time);

    if (typeof form === "object") {
      // fileManager(form.getId(), "videoForms", time)

      form.addTextItem().setTitle("Stock Price").setRequired(true);
      form
        .addTextItem()
        .setTitle("Outstanding Shares")
        .setRequired(true)
        .setHelpText(coHelpText);
      form.setCollectEmail(true);
      uti.map((piece) => {
        while (piece) {
          if (piece) {
            var elaspeTime = new Date() - time;
            var timeToExecute = maxTime - elaspeTime;
            // console.log("piece: " + piece + "\nelaspeTime: " + elaspeTime)
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
            if (
              timeToExecute <= 5 * 60 * 1000 &&
              timeToExecute >= 4.98 * 60 * 1000
            ) {
              // console.log("that function: " + arguments.callee.caller.name + "\nthis function: " + arguments.callee.name + "\nTime limit five minutes")
            }
            if (
              timeToExecute <= 4 * 60 * 1000 &&
              timeToExecute >= 3.98 * 60 * 1000
            ) {
              // console.log("that function: " + arguments.callee.caller.name + "\nthis function: " + arguments.callee.name + "\nTime limit four minutes")
            }
            if (
              timeToExecute <= 3 * 60 * 1000 &&
              timeToExecute >= 2.98 * 60 * 1000
            ) {
              // console.log("that function: " + arguments.callee.caller.name + "\nthis function: " + arguments.callee.name + "\nTime limit three minutes")
            }
            if (
              timeToExecute <= 2 * 60 * 1000 &&
              timeToExecute >= 1.98 * 60 * 1000
            ) {
              // console.log("that function: " + arguments.callee.caller.name + "\nthis function: " + arguments.callee.name + "\nTime limit two minutes")
            }
            if (
              timeToExecute <= 1 * 60 * 1000 &&
              timeToExecute >= 0.98 * 60 * 1000
            ) {
              // console.log("that function: " + arguments.callee.caller.name + "\nthis function: " + arguments.callee.name + "\nTime limit one minute")
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
  // var rndUti = uti[randNum(uti)]
};
