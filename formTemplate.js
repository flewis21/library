var dtls = function (func) {
  var appList = [];
  for (var key in globalThis) {
    if (typeof globalThis[key] == "function") {
      appList.push(key);
    }
  }
  var rdmNumForName = Math.floor(Math.random() * Math.floor(appList.length));
  var keysFunc = seoSheet(appList[rdmNumForName]).keyWords;
  var formName =
    func || keysFunc[Math.floor(Math.random() * Math.floor(keysFunc.length))];
  var form = formMaker(formName);
  fileManager(formName, "Forms");
  if (typeof form === "object") {
    if (appList.indexOf(formName) !== -1) {
      form.addParagraphTextItem().setHelpText(globalThis[formName].toString());
    }
    form.addTextItem().setTitle("Your Name").setRequired(true);
    form.addDateItem().setTitle("Birth Date").setRequired(true);
    form.addParagraphTextItem().setTitle("Your Message").setRequired(true);
    form
      .setTitle(formName)
      .setConfirmationMessage("Thanks for your feedback !!");
    var url = form.getPublishedUrl();

    return HtmlService.createTemplate(
      `<div class="row">
    <div class="col s10 card-panel amber push-s1 push-m1 push-l1">
    <div class="video-container" style="clear: both">
    <div class="col s12 receipt deep-purple darken-1">
    <iframe 
      class="z-depth-5 card-panel deep-purple darken-1 scale-transition scale-out scale-in btn-large" 
      src="${url}" 
      width="100%"
      height="100%"
      allow="autoplay"
      allow="encrypted-media"
      title="Dontime Life Website"
      frameborder="0"
      allowfullscreen
      ></iframe>
    </div></div></div></div>`
    )
      .evaluate()
      .getContent();
  } else {
    return geneFrame(formName);
  }
};

var dtlsCalculator = function (e) {
  var username = e;
  const data = needUtility(
    randomSubstance(0, 2, ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"])
  )[0];
  const rndNumData = Math.floor(
    Math.random() * Math.floor(data.playlistArr.length)
  );
  if (!username) {
    var percent = data.rndTitle;
  } else {
    var percent = username;
  }
  if (typeof username === "undefined") {
    var form = formMaker(data.rndTitle);
    form
      .setTitle(data.rndTitle)
      .setConfirmationMessage("Thanks for your feedback !!");
  } else {
    var form = formMaker(username);
    fileManager(username, "Forms");
    form
      .setTitle(username)
      .setConfirmationMessage("Thanks for your feedback !!");
  }
  var list = [];
  if (0 < percent) {
    for (var i = 0; 0 < percent; i++) {
      var result =
        JSON.stringify(i) * percent - Math.floor(JSON.stringify(i) * percent);
      if (result === 0) {
        list.push([
          JSON.stringify(i) * percent +
            " " +
            "out of" +
            " " +
            JSON.stringify(i) +
            " " +
            "odds",
        ]);
        if (JSON.stringify(i) >= 10) {
          break;
        }
      }
    }
  } else {
    list.push([percent]).toString();
  }
  const breakUrl =
    "https://script.google.com/macros/s/AKfycbzhrxdXzM08AAwA5ualRXdnDtV6C_xQ7bcq4v6H0HNdBqPr2C8A1URyWN0FLLccQuoA/exec?func=dtlsCalculator&args=";
  const vegasUrl =
    "https://script.google.com/macros/s/AKfycbzhrxdXzM08AAwA5ualRXdnDtV6C_xQ7bcq4v6H0HNdBqPr2C8A1URyWN0FLLccQuoA/exec?func=dtlsVegas&args=";
  const today = new Date();
  const rule = today.toDateString() + " - " + today.toTimeString();
  form.addSectionHeaderItem().setTitle(rule);
  var videIdUrl = data.playlistArr[rndNumData];
  var globalYoutubeUrl = "https://www.youtube.com/watch?v=";
  if (typeof data.videoItem !== "undefined") {
    form
      .addVideoItem()
      .setAlignment(FormApp.Alignment.CENTER)
      .setWidth(360)
      .setVideoUrl(globalYoutubeUrl + videIdUrl)
      .setHelpText(globalYoutubeUrl + videIdUrl);
  }
  const htmlList = list
    .map(function (r) {
      var rndFormArray = needUtility(r[0])[0];
      var videoVegas = substanceVegas(null, 0, 11);
      var rndFormVideo =
        rndFormArray.playlistArr[
          Math.floor(
            Math.random() * Math.floor(rndFormArray.playlistArr.length)
          )
        ];
      return `${form
        .addSectionHeaderItem()
        .setTitle(r[0])
        .setHelpText(vegasUrl + globalYoutubeUrl + rndFormVideo)}\n\n\n\n`;
    })
    .toString()
    .replace(/,/g, "");
  const url = form.getPublishedUrl();
  // return geneFrame(url)
  const html = HtmlService.createTemplate(`
    <div class="row">
    <div class="col s10 l10 m10 card-panel push-s1 push-l1 push-m1">
    <div class="container row valign-wrapper"><?!= rule() ?></div>
    <div class="video-container grey" style="clear: both">
    <div class="col s10 l10 m10 receipt black darken-1">
    <iframe 
      class="z-depth-5 card-panel deep-purple darken-1 scale-transition scale-out scale-in btn-large" 
      src="${url}" 
      width="100%"
      height="100%"
      allow="autoplay"
      allow="encrypted-media"
      title="Dontime Life Website"
      frameborder="0"
      allowfullscreen
      ></iframe>
    </div></div></div></div></div>`);
  return html.evaluate().getContent();
}; //:contentFile('uiAccess');

var dtlsEnvironment = function (rndSubstance) {
  var dtlsUrl =
    "https://script.google.com/macros/s/AKfycbzhrxdXzM08AAwA5ualRXdnDtV6C_xQ7bcq4v6H0HNdBqPr2C8A1URyWN0FLLccQuoA/exec?func=videoPage&args=";
  var arrayMath = [
    `${randomSubstance(null, 0, 2 * 3)} ${randomSubstance(null, 0, 3 * 5)}`,
  ];
  var product =
    rndSubstance ||
    arrayMath
      .toString()
      .split(" ")
      .sort((a, b) => a - b)[
      Math.floor(
        Math.random() * Math.floor(arrayMath.toString().split(" ").length)
      )
    ];
  var isProduct = formsUrls(product);
  if (typeof isProduct !== "undefined") {
    var formUrl = FormApp.openByUrl(isProduct).getPublishedUrl();
    return HtmlService.createTemplate(
      `
    <div class="row">
    <div class="col s10 l10 m10 card-panel push-s1 push-l1 push-m1">
    <div class="container row valign-wrapper"><?!= rule() ?></div>
    <div class="video-container grey" style="clear: both">
    <div class="col s10 l10 m10 receipt black darken-1">
    <iframe 
      class="z-depth-5 card-panel deep-purple darken-1 scale-transition scale-out scale-in btn-large" 
      src=${formUrl}
      width="100%"
      height="100%"
      allow="autoplay"
      allow="encrypted-media"
      title="Dontime Life Website"
      frameborder="0"
      allowfullscreen
      ></iframe>
    </div></div></div></div>
      `
    ).getRawContent();
  }
  var data = coUtility(product)[0];
  if (typeof data.rndTitle !== "undefined") {
    var test = productNamePartial(
      [data.rndTitle.replace(/,./g, "")].toString().split(" ")[
        Math.floor(
          Math.random() *
            Math.floor(
              [data.rndTitle.replace(/,./g, "")].toString().split(" ").length
            )
        )
      ]
    );
  }
  if (typeof test !== "undefined") {
    var test2 = productRegNo(test["eparegno"]);
    if ([test2].indexOf("companyinfo") !== -1) {
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
      var coInfo = data.rndTitle;
      var secReport = data.secUrl;
      var stkTicker = data.rndTicker;
      var watchV = data.videoItem;
      var playVid = data.videoItemUrl;
    }
    if ([test2].indexOf("active_ingredients") !== -1) {
      var uniqueData = [];
      for (var i = 0, l = test2["active_ingredients"].length; i < l; i++) {
        var isIngredient = test2["active_ingredients"][i]["active_ing"];
        if (isIngredient) {
          var pIName = productIngName(isIngredient);
          if (typeof pIName !== "undefined") {
            uniqueData.push(pIName["items"] || pIName["first"] || pIName);
          }
        }
      }
      if (typeof uniqueData[0][0]["rndTitle"] === "undefined") {
        var uniqueDataArray = [];
        for (var i = 0, l = uniqueData.length; i < l; i++) {
          if (uniqueData[i].length !== 0) {
            uniqueData[i].map((item) => {
              uniqueDataArray.push(item);
            });
          }
        }
        const matches = [];
        uniqueDataArray
          .sort((a, b) => a - b)
          .filter((ac) => {
            if (
              JSON.stringify(ac["eparegnumber"])
                .toLowerCase()
                .includes(test2["eparegno"])
            )
              matches.push(ac);
          });
        var randomKey = Math.floor(Math.random() * Math.floor(matches.length)); // Math.floor(Math.random())
        var uniqueDataKey = [matches].entries().next().value;
        if (typeof uniqueDataKey[1].length !== 0) {
          var randomProduct = uniqueDataKey[1][randomKey]["productname"];
          var isProductOnDrive = formsUrls(randomProduct);
          if (typeof isProductOnDrive !== "undefined") {
            return dtlsMain(randomProduct);
          }
          var isDataKey = uniqueDataKey[1][randomKey];
          var randomIngredient = isDataKey["ingredientname"];
          var randomProductStatusDate = isDataKey["productstatusdate"];
          var randomProductNameStatus = isDataKey["productnamestatus"];
          var randomAlternateBrandName = isDataKey["alternatebrandname"];
          var randomPcCode = isDataKey["pccode"];
          var randomRegistrationStatus = isDataKey["registrationstatus"];
          var randomCasNumber = isDataKey["casnumber"];
          var randomEpaRegNum = isDataKey["eparegnumber"];
          var epaUrl =
            "https://ofmpub.epa.gov/sor_internet/registry/substreg/searchandretrieve/substancesearch/search.do?multipleEntriesSearch=&multipleKeys=" +
            randomCasNumber +
            "&onSRS=true&onChemResourceDir=true&substanceNameScope=beginswith";
        }
      }
    }
  } else {
    var coInfo = data.rndTitle;
    var secReport = data.secUrl;
    var stkTicker = data.rndTicker;
    var watchV = data.videoItem;
    var playVid = data.videoItemUrl;
  }
  var form = formMaker(coInfo);
  fileManager(coInfo, "Forms");
  form
    .addVideoItem()
    .setAlignment(FormApp.Alignment.CENTER)
    .setWidth(360)
    .setVideoUrl(playVid)
    .setHelpText(playVid);
  if (typeof randomProduct !== "undefined") {
    form
      .addSectionHeaderItem()
      .setTitle("Active Ingredient in " + randomProduct)
      .setHelpText(randomIngredient);
    form
      .addSectionHeaderItem()
      .setTitle("Alternate Brand Name(s) for " + randomProduct)
      .setHelpText(randomAlternateBrandName);
    form
      .addSectionHeaderItem()
      .setTitle("EPA Registration Number for " + randomProduct)
      .setHelpText(randomEpaRegNum);
    form
      .addSectionHeaderItem()
      .setTitle("Registration Status for " + randomProduct)
      .setHelpText(randomRegistrationStatus);
    form
      .addSectionHeaderItem()
      .setTitle("Name Status for " + randomProduct)
      .setHelpText(randomProductNameStatus);
    form
      .addSectionHeaderItem()
      .setTitle("Status Date for " + randomProduct)
      .setHelpText(randomProductStatusDate);
    form
      .addSectionHeaderItem()
      .setTitle("Pesticide Chemical Code for " + randomIngredient)
      .setHelpText(randomPcCode);
    form
      .addSectionHeaderItem()
      .setTitle("Chemical Number for " + randomIngredient)
      .setHelpText(epaUrl);
  }
  form
    .addSectionHeaderItem()
    .setTitle("Company Info")
    .setHelpText(dtlsUrl + encodeURIComponent(coInfo));
  if (typeof secReport !== "undefined") {
    form.addSectionHeaderItem().setTitle(stkTicker).setHelpText(secReport);
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
    form.addTextItem().setTitle("Base Year Total Earnings").setRequired(false);
  }
  form.addTextItem().setTitle("Your Name").setRequired(true);
  form.addDateItem().setTitle("Birth Date").setRequired(true);
  form.addParagraphTextItem().setTitle("Your Message").setRequired(true);
  form.setTitle(coInfo).setConfirmationMessage("Thanks for your feedback !!");
  var url = form.getPublishedUrl();
  return geneFrame(url);
  return HtmlService.createTemplate(
    `<div class="row">
    <div class="col s10 card-panel amber push-s1 push-m1 push-l1">
    <div class="video-container" style="clear: both">
    <div class="col s12 receipt deep-purple darken-1">
    <iframe 
      class="z-depth-5 card-panel deep-purple darken-1 scale-transition scale-out scale-in btn-large" 
      src="${url}" 
      width="100%"
      height="100%"
      allow="autoplay"
      allow="encrypted-media"
      title="Dontime Life Website"
      frameborder="0"
      allowfullscreen
      ></iframe>
    </div></div></div></div>`
  )
    .evaluate()
    .getContent();
};

var dtlsInvestor = function (coKey) {
  var coData = coUtility(coKey)[0];
  if (coData) {
    var coDataName = coData.rndTitle;
    try {
      dtlsMain(coDataName);
    } catch {
      console.log(coDataName + " does not exist yet!");
    }
  }
  if (typeof coData.rndTicker !== "undefined") {
    var form = formMaker(coData.rndTitle);
    fileManager(coData.rndTitle, "Forms");
    form.addParagraphTextItem().setTitle();
    form
      .addSectionHeaderItem()
      .setTitle(coData.rndTicker)
      .setHelpText(coData.secUrl);
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
    form.addTextItem().setTitle("Base Year Total Earnings").setRequired(false);
    form.addTextItem().setTitle("Your Name").setRequired(true);
    form.addDateItem().setTitle("Birth Date").setRequired(true);
    form.addParagraphTextItem().setTitle("Your Message").setRequired(true);
    form
      .setTitle(coData.rndTitle)
      .setConfirmationMessage("Thanks for your feedback !!");
    var url = form.getPublishedUrl();
    return geneFrame(url);
    return HtmlService.createTemplate(
      `<div class="row">
    <div class="col s10 card-panel amber push-s1 push-m1 push-l1">
    <div class="video-container" style="clear: both">
    <div class="col s12 receipt deep-purple darken-1">
    <iframe 
      class="z-depth-5 card-panel deep-purple darken-1 scale-transition scale-out scale-in btn-large" 
      src="${url}" 
      width="100%"
      height="100%"
      allow="autoplay"
      allow="encrypted-media"
      title="Dontime Life Website"
      frameborder="0"
      allowfullscreen
      ></iframe>
    </div></div></div></div>`
    )
      .evaluate()
      .getContent();
  } else {
    return dtlsEnviroment(coData.rndTitle);
  }
};

var mainMan = function (mainFile) {
  // var mainFile = "wild"
  var stringSplit = mainFile.split(" ");
  var lowerCaseS = [];
  testData([stringSplit]).map((increase) => {
    if (lowerCaseS.indexOf(increase) === -1) {
      lowerCaseS.push(increase);
    }
  });
  for (var i = 0, l = lowerCaseS.length; i < l; i++) {
    if (typeof lowerCaseS[i] !== "undefined") {
      var fileX = searchDataTree(mainFile);
    }
  }
  if (fileX) {
    var appType = fileX.split("/");
    if (appType.indexOf("spreadsheets") === -1) {
      var url = FormApp.openByUrl(fileX).getPublishedUrl();
    }
  }
  return HtmlService.createTemplate(
    contentApp(
      `
    <div class="row">
    <div class="col s10 l12 m12 card-panel push-s1">
    <div class="container row valign-wrapper"><?!= rule() ?></div>
    <div class="video-container grey" style="clear: both">
    <div class="col s12 l12 m12 receipt black darken-1">
    <iframe 
      class="z-depth-5 card-panel deep-purple darken-1 scale-transition scale-out scale-in btn-large" 
      src=<?= url ?>
      width="100%"
      height="100%"
      allow="autoplay"
      allow="encrypted-media"
      title="Dontime Life Website"
      frameborder="0"
      allowfullscreen
      ></iframe>
    </div></div></div></div>
    `,

      { url: url }
    )
  )
    .evaluate()
    .getContent();
};

var dtlsMain = function (file) {
  var isProduct = formsUrls(file);
  console.log(typeof isProduct);
  if (typeof isProduct === "string") {
    var formUrl = FormApp.openByUrl(isProduct).getPublishedUrl();
    return HtmlService.createTemplate(
      `
    <div class="row">
    <div class="col s10 l10 m10 card-panel push-s1 push-l1 push-m1">
    <div class="container row valign-wrapper"><?!= rule() ?></div>
    <div class="video-container grey" style="clear: both">
    <div class="col s10 l10 m10 receipt black darken-1">
    <iframe 
      class="z-depth-5 card-panel deep-purple darken-1 scale-transition scale-out scale-in btn-large" 
      src=${formUrl}
      width="100%"
      height="100%"
      allow="autoplay"
      allow="encrypted-media"
      title="Dontime Life Website"
      frameborder="0"
      allowfullscreen
      ></iframe>
    </div></div></div></div>
      `
    )
      .evaluate()
      .getContent();
  }
};

var dtlsPro = function (namedVar) {
  var utilNeed = function (namedVar) {
    return needUtility(randomSubstance(skyNeed(namedVar), 0, 4))[0].rndTitle;
  };
  var uti = sheetSeo(pastSeo(skyNeed(namedVar)));
  uti.map((piece) => {
    if (piece) {
      return piece[0];
    }
  });
  var rndUti = uti[randNum(uti)];
  return dtlsVegas(rndUti);
};

var somMainFunc = async function (e) {
  var elaspedTime = new Date() - start;
  var timeToExecute = maxTime - elaspedTime;
  while (timeToExecute > 0.3 * 60 * 1000) {
    console.log(timeToExecute);
    dtlsSomeFunction("It's who you know");
    if (elaspedTime <= 0.3 * 60 * 1000) {
      console.log("Six minutes");
    }
    if (elaspedTime == 1 * 60 * 1000) {
      console.log("Five minutes remainig");
    }
    if (elaspedTime == 2 * 60 * 1000) {
      console.log("Four minutes remainig");
    }
    if (elaspedTime == 3 * 60 * 1000) {
      console.log("Three minutes remainig");
    }
    if (elaspedTime == 4 * 60 * 1000) {
      console.log("Two minutes remainig");
    }
    if (elaspedTime == 5 * 60 * 1000) {
      console.log("One minute remainig");
    }
    if (elaspedTime >= maxTime) {
      console.log("maximum execution time exceeded");
    }
  }
};

var dtlsSomeFunction = function (e) {
  var time = start;
  var uniqueKey = [randomSubstance(0, 4)];
  var uniqueCoObjects = covObjects(uniqueKey, ["allTime"]);
  var rndCoObjects =
    uniqueCoObjects[
      Math.floor(Math.random() * Math.floor(uniqueCoObjects.length))
    ];
  var uniqueCoArray = covArrays(rndCoObjects);
  var rndCoArray =
    uniqueCoArray[Math.floor(Math.random() * Math.floor(uniqueCoArray.length))];
  var coKey = "Your my Inspiration" || rndCoArray;

  //Youtube Widget
  var idArray = seoPastTime(coKey, time);
  var covIdArray = covArrays(idArray);
  // console.log(covIdArray[0][0].map((e)=>{return e[0]}))
  var form = formMaker(coKey.toUpperCase(), time);
  if (typeof form === "object") {
    fileManager(coKey.toUpperCase(), "Forms", time);
    covIdArray[0][0].map((d) => {
      while (d) {
        var elaspedTime = new Date() - time;
        var timeToExecute = maxTime - elaspedTime;
        form.addPageBreakItem().setTitle(coKey);
        form
          .addSectionHeaderItem()
          .setTitle("https://youtube.com/watch?v=" + d);
        form
          .addVideoItem()
          .setAlignment(FormApp.Alignment.CENTER)
          .setWidth(612)
          .setVideoUrl("https://youtube.com/watch?v=" + d);
        if (
          timeToExecute <= 6 * 60 * 1000 &&
          timeToExecute >= 5.98 * 60 * 1000
        ) {
          console.log("Time limit six minutes");
        }
        if (
          timeToExecute <= 5 * 60 * 1000 &&
          timeToExecute >= 4.98 * 60 * 1000
        ) {
          console.log("Time limit five minutes");
        }
        if (
          timeToExecute <= 4 * 60 * 1000 &&
          timeToExecute >= 3.98 * 60 * 1000
        ) {
          console.log("Time limit four minutes");
        }
        if (
          timeToExecute <= 3 * 60 * 1000 &&
          timeToExecute >= 2.98 * 60 * 1000
        ) {
          console.log("Time limit three minutes");
        }
        if (
          timeToExecute <= 2 * 60 * 1000 &&
          timeToExecute >= 1.98 * 60 * 1000
        ) {
          console.log("Time limit two minutes");
        }
        if (
          timeToExecute <= 1 * 60 * 1000 &&
          timeToExecute >= 0.98 * 60 * 1000
        ) {
          console.log("Time limit one minute");
        }
        if (timeToExecute <= 0.1 * 60 * 1000) {
          console.log(timeToExecute.valueOf());
          break;
        }
        return;
      }
      return;
    });
  }
  return covIdArray;
};

var dtlsStore = function (itemName) {
  return HtmlService.createTemplate(
    contentApp(
      `
  <? var urlSs = "https://docs.google.com/spreadsheets/d/1-vNcN0vCLcXgMY9uwcKukUgv_4njggRZ6fqoZs-hBFE/edit#gid=138098962" ?>
  <? var sheetName = "Inventory" ?>
  <? var sheet = ssGetSheetBySpreadsheetUrl(urlSs, sheetName).activate() ?>
  <? var range = sheet.getDataRange() ?>
  <? var data = range.getValues() ?>
  <? var rows = [] ?>
  <? var values = range.getValues() ?>
  <? for (var row in values) { ?>
    <? rows.push([]) ?>
    <? for (var col in values[row]) { ?>
      <? rows[row].push(values[row][col]) ?>
      <? } ?>
      <? } ?>
  <? var rowsToReturn = rows.filter((r) => {return r[5]}) ?>
  <? var headings = data.slice(3,4).toString().toLowerCase().split(",") ?>
  <? var noHeaders = data.slice(4).map(function (val) { ?>
      <? return val.toString().toLowerCase() ?>
      <? }) ?>
  <? var outputQuery = (covObjects(rowsToReturn, headings)) ?>
  <? var arrData = covArrays(outputQuery) ?>
  <? var jo = {}; ?>
  <? var dataArray = []; ?>
  <? for (var i = 1, l = arrData.length; i<l; i++) { ?>
    <? var record = {} ?> 
    <? record["id"] = arrData[i][0]["sku"]; ?>
    <? record["productName"] = arrData[i][0]["description"]; ?>
    <? record["rand1"] = arrData[i][0]["total customer purchase"]; ?>
    <? record["rand2"] = arrData[i][0]["qty offset"]; ?> 
    <? record["rand3"] = arrData[i][0]["estimated value"]; ?>
    <? record["rand4"] = arrData[i][0]["supply processed "]; ?>
    <? record["rand5"] = arrData[i][0]["pack size"]; ?>
    <? record["rand6"] = arrData[i][0]["total supply available"]; ?>
    <? record["rand7"] = arrData[i][0]["cost supply available"]; ?>
    <? record["rand8"] = arrData[i][0]["current cost per item"]; ?>
    <? record["rand9"] = arrData[i][0][" average cost over time"]; ?>
    <? if (record["id"] !== "") { ?>
      <? dataArray.push(record) ?>
      <? } ?>
      <? } ?>
  <? var form = FormApp.create(sheetName) ?>
  <? fileManager(sheetName, "Forms") ?>
  <? var formUrl = form.getPublishedUrl(); ?>
  <? form.setTitle(dataArray.length + " Items").setConfirmationMessage('Thanks for your feedback !!'); ?>
  <? var randNum = Math.floor(Math.random() * (Math.floor(dataArray.length))); ?>
  <? var searchString = dataArray[randNum]["productName"] ?>
  <? jo.user = dataArray; ?>
  <? var coTable = jo.user.map((r)=>{ ?>
      <? form.addPageBreakItem().setTitle(r["productName"]) ?>
      <? form.addSectionHeaderItem().setTitle("Quantity: " + r["rand4"] + " set of " + r["rand5"]) ?>
      <? form.addSectionHeaderItem().setTitle("Price: " + r["rand7"]) ?>
      <? form.addSectionHeaderItem().setTitle("Cost Per Piece: " + r["rand8"]) ?>
      \n\n\n\n 
      <? }).toString().replace(/,/g, "") ?>
  <? var result = JSON.stringify(coTable); ?>
  <? baseUrl = getUrl(ScriptApp); ?>
  <? inventoryUrl = getUrl(ScriptApp); ?>
  <? financeUrl = getUrl(ScriptApp); ?>
  <div class="row">
    <div class="col s10 card-panel l12 m12 push-s1">
    <div class="container row valign-wrapper"><?!= rule() ?></div>
    <div class="video-container amber" style="clear: both">
    <div class="col s12 l12 m12 receipt deep-purple darken-1">
    <iframe 
      class="z-depth-5 card-panel deep-purple darken-1 scale-transition scale-out scale-in btn-large" 
      src=<?= formUrl ?> 
      width="100%"
      height="100%"
      allow="autoplay"
      allow="encrypted-media"
      title="Dontime Life Website"
      frameborder="0"
      allowfullscreen
      ></iframe>
    </div></div></div></div>
    `,
      { item: itemName }
    )
  )
    .evaluate()
    .getContent();
};

var dtlsTv = function () {
  var randomSECCo = needUtility(randomSubstance(null, 0, 7))[0];
  var myVid = randomSECCo.rndTitle;
  var infoLink = seoSheet(myVid).keyWords;
  var pageArray = [];
  infoLink.map((tv) => {
    var plaListNum = Math.floor(Math.random() * Math.floor(tv.length));
    var rndListItem = tv[plaListNum];
    pageArray.push(rndListItem);
  });
  var story =
    pageArray[Math.floor(Math.random() * Math.floor(pageArray.length))];
  dtlsVegas(story);
};

var dtlsVegas = function (rndId) {
  // var rndId = "Converse Chuck Taylor All Star Low Top"
  var rndTKey = seoSheet(rndId).keyWords;
  var keyNum = Math.floor(Math.random() * Math.floor(rndTKey.length));
  var ndT = rndTKey[keyNum].replace(/"'/g, "");
  var ndTNum = Math.floor(Math.random() * Math.floor(ndT.length));
  var util = ndT[ndTNum];
  var ndtUtil = needUtility(util)[0];
  var ndTArray = ndtUtil.playlistArr;
  var form = formMaker(rndId.toUpperCase());
  if (typeof form === "string") {
    var formUrl = FormApp.openByUrl(form).getPublishedUrl();
  } else {
    fileManager(rndId.toUpperCase(), "Forms");
    var rndVid =
      ndTArray[Math.floor(Math.random() * Math.floor(ndTArray.length))];
    form
      .addVideoItem()
      .setAlignment(FormApp.Alignment.CENTER)
      .setWidth(612)
      .setVideoUrl(rndVid);
    form.addPageBreakItem().setTitle(rndVid);
    var formUrl = form.getPublishedUrl();
  }
  var result = JSON.stringify(ndtUtil.rndTitle);
  var html = HtmlService.createTemplate(
    `<html>
      <body>
        <div class="row">
        <div class="col s10 card-panel amber push-s1 push-m1 push-l1">
        <div class="container" style="clear: both">
        <div class="col s12 receipt deep-purple darken-1">
        <div id="vegas"></div>          
        </div></div></div></div>
        <div class="row">
        <div class="col s10 card-panel amber push-s1 push-m1 push-l1">
        <div class="video-container" style="clear: both">
        <div class="col s12 receipt deep-purple darken-1">
        <iframe 
          class="z-depth-5 card-panel deep-purple darken-1 scale-transition scale-out scale-in btn-large" 
          src="${formUrl}" 
          width="100%"
          height="100%"
          allow="autoplay"
          allow="encrypted-media"
          title="Dontime Life Website"
          frameborder="0"
          allowfullscreen
          ></iframe>
        </div></div></div></div>
        <script>document.addEventListener("DOMContentLoaded", lasVegas)
        function lasVegas() {
          
          document.getElementById("vegas").innerHTML = ${result}
        </script>
      </body>
    </html>`
  );
  return html.getRawContent();
};

var generalWorkInvoice = function (clientName) {
  return HtmlService.createTemplate(
    contentApp(
      `
    <? var rndClient = coUtility(client)[0]; ?>
    <? var dtlsUrl = "https://script.google.com/macros/s/AKfycbzhrxdXzM08AAwA5ualRXdnDtV6C_xQ7bcq4v6H0HNdBqPr2C8A1URyWN0FLLccQuoA/exec?func=videoPage&args="; ?>
    <?  var form = formMaker(rndClient.rndTitle);  ?>
    <? fileManager(rndClient.rndTitle, "Forms") ?>
    <?  form.addSectionHeaderItem().setTitle; ?>
    <?  form.addDateItem().setTitle('Invoice Date').setRequired(true); ?>
    <?  form.addTextItem().setTitle("Car ").setRequired(true); ?>
    <?  form.addTextItem().setTitle("Deliver/Pickup ").setRequired(true) ?>
    <?  form.addTextItem().setTitle("Vin/STK # ").setRequired(true) ?>
    <?  form.addTextItem().setTitle("Delivery Address ").setRequired(true) ?>
    <?  form.addTextItem().setTitle("Labor ").setRequired(true) ?>
    <?  form.addTextItem().setTitle("Gas ").setRequired(true) ?>
    <?  form.addTextItem().setTitle("Total ").setRequired(false) ?>
    <?  form.addTextItem().setTitle("Delivery Time ").setRequired(false) ?>
    <?  form.addTextItem().setTitle("Pickup Address ").setRequired(false) ?>
    <?  form.addSectionHeaderItem().setTitle("Company Info").setHelpText(dtlsUrl + encodeURIComponent(rndClient.rndTitle)); ?>
    <?  if (typeof rndClient.rndTicker !== "undefined") { ?>
    <?  form.addSectionHeaderItem().setTitle(rndClient.rndTicker).setHelpText(rndClient.secUrl); ?>
    <?  form.addTextItem().setTitle("Industry").setRequired(true); ?>
    <?  form.addTextItem().setTitle("Sector").setRequired(true); ?>
    <?  form.addParagraphTextItem().setTitle("Industry/Market Corrections").setRequired(false); ?>
    <?  form.addParagraphTextItem().setTitle("News").setRequired(false); ?>
    <?  form.addParagraphTextItem().setTitle("Economic/Business Cycles").setRequired(false); ?>
    <?  form.addTextItem().setTitle("Stock Price").setRequired(true); ?>
    <?  form.addTextItem().setTitle("Outstanding Shares").setRequired(true); ?>
    <?  form.addTextItem().setTitle("Quarterly Earnings").setRequired(true); ?>
    <?  form.addTextItem().setTitle("Annualized Net Income").setRequired(false); ?>
    <?  form.addTextItem().setTitle("Total Equity").setRequired(false); ?>
    <?  form.addTextItem().setTitle("Retained Earnings").setRequired(false); ?>
    <?  form.addTextItem().setTitle("Cash & Marketable Securities").setRequired(true); ?>
    <?  form.addTextItem().setTitle("Accounts Receivable").setRequired(true); ?>
    <?  form.addTextItem().setTitle("Inventories").setRequired(true); ?>
    <?  form.addTextItem().setTitle("Long-term Investments").setRequired(false); ?>
    <?  form.addTextItem().setTitle("Net PP&E").setRequired(false); ?>
    <?  form.addTextItem().setTitle("Current Financial Liabilities").setRequired(true); ?>
    <?  form.addTextItem().setTitle("Long-term Interest-bearing Debts").setRequired(false); ?>
    <?  form.addTextItem().setTitle("Current Year Total Earnings").setRequired(false); ?>
    <?  form.addTextItem().setTitle("Base Year Total Earnings").setRequired(false);} ?>
    <?  form.addTextItem().setTitle('Your Name').setRequired(true); ?>
    <?  form.addParagraphTextItem().setTitle('Your Message').setRequired(true); ?>
    <?  form.setTitle(rndClient.rndTitle).setConfirmationMessage('Thanks for your feedback !!'); ?>
    <?  var url = form.getPublishedUrl(); ?>
    <div class="row">
    <div class="col s10 l12 m12 card-panel push-s1">
    <div class="container row valign-wrapper"><?!= rule() ?></div>
    <div class="video-container grey" style="clear: both">
    <div class="col s12 l12 m12 receipt black darken-1">
    <iframe 
      class="z-depth-5 card-panel deep-purple darken-1 scale-transition scale-out scale-in btn-large" 
      src="<?!= url ?>" 
      width="100%"
      height="100%"
      allow="autoplay"
      allow="encrypted-media"
      title="Dontime Life Website"
      frameborder="0"
      allowfullscreen
      ></iframe>
    </div></div></div></div>
    <? var liveForm = FormApp.openById(form.getId()) ?>
    <? var formResponses = liveForm.getResponses() ?>
    <? for (var i = 0; i < formResponses.length; i++) { ?>
    <? var formResponse = formResponses[i]; ?>
    <? var itemResponses = formResponse.getItemResponses(); ?>
    <? for (var j = 0; j < itemResponses.length; j++) { ?>
      <? var itemResponse = itemResponses[j]; ?>
      <? console.log('Response #%s to the question "%s" was "%s"', 
         (i + 1).toString(), 
         itemResponse.getItem().getTitle(), 
          itemResponse.getResponse()); ?>
    <? } ?>
  <? } ?>`,
      { client: clientName }
    )
  )
    .evaluate()
    .getContent();
};

var geneFrame = function (reference) {
  return HtmlService.createTemplate(
    contentApp(
      `
    <? var rndClient = function() { ?>
    <?  return new Promise((resolve) => {resolve(formMaker(file))})} ?>
    <? var clientRes = rndClient()
    .then((resu) => {return resu})
    .catch((err) => {console.log(err)}) ?>
    <? var form = FormApp.openByUrl(JSON.stringify(formMaker(file))) ?>
    <? var vidId = coUtility(file)[0].playlistArr ?>
    <? if (vidId.length > 0) {?>
    <? vidId.map((id)=>{return form.addVideoItem().setAlignment(FormApp.Alignment.CENTER).setWidth(612).setVideoUrl("https://youtube.com/watch?v=" + id)})} ?>
    <? var formUrl = form.getPublishedUrl() ?>
    <div class="row">
    <div class="col s10 card-panel amber push-s1 push-m1 push-l1">
    <div class="container" style="clear: both">
    <div class="col s12 receipt deep-purple darken-1">
    <div id="vegas"></div>          
    </div></div></div></div>
    <div class="row">
    <div class="col s10 l10 m10 card-panel push-s1 push-l1 push-m1">
    <div class="container row valign-wrapper"><?!= rule() ?></div>
    <div class="video-container grey" style="clear: both">
    <div class="col s10 l10 m10 receipt black darken-1">
    <iframe 
      class="z-depth-5 card-panel deep-purple darken-1 scale-transition scale-out scale-in btn-large" 
      src=<?= formUrl  ?>
      width="100%"
      height="100%"
      allow="autoplay"
      allow="encrypted-media"
      title="Dontime Life Website"
      frameborder="0"
      allowfullscreen
      ></iframe>
    </div></div></div></div>
    <script>document.addEventListener("DOMContentLoaded", lasVegas)
    function lasVegas() {
      
      document.getElementById("vegas").innerHTML = <?= formsUrls(file) ?>
      }</script>`,
      {
        file: reference,
      }
    )
  )
    .evaluate()
    .getContent();
};
