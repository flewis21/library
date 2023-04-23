var dtls = function (func) {
  var appList = [];
  for (var key in globalThis) {
    if (typeof globalThis[key] == "function") {
      appList.push(key);
    }
  }
  var rdmNumForName = Math.floor(Math.random() * Math.floor(appList.length));
  var formName = func || appList[rdmNumForName];
  if (typeof formsUrls(formName) !== "undefined") {
    return dtlsMain(formName);
  }
  var form = FormApp.create(formName);
  form.addParagraphTextItem().setHelpText(globalThis[formName].toString());
  form.addTextItem().setTitle("Your Name").setRequired(true);
  form.addDateItem().setTitle("Birth Date").setRequired(true);
  form.addParagraphTextItem().setTitle("Your Message").setRequired(true);
  form.setTitle(formName).setConfirmationMessage("Thanks for your feedback !!");
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
};

var dtlsCalculator = function (e) {
  var username = e;
  const data = coUtility(e || randomSubstance())[0];
  const rndNumData = Math.floor(
    Math.random() * Math.floor(data.playlistArr.length)
  );
  if (!username) {
    var percent = rndNumData;
  } else {
    var percent = username;
  }
  const form = FormApp.create(data.rndTitle);
  form
    .setTitle(data.rndTitle)
    .setConfirmationMessage("Thanks for your feedback !!");
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
        if (JSON.stringify(i) >= 3) {
          break;
        }
      }
    }
  } else {
    list.push([percent]).toString();
  }
  const breakUrl =
    "https://script.google.com/macros/s/AKfycbzhrxdXzM08AAwA5ualRXdnDtV6C_xQ7bcq4v6H0HNdBqPr2C8A1URyWN0FLLccQuoA/exec?func=foo.dtlsCalculator&args=";
  const today = new Date();
  const rule = today.toDateString() + " - " + today.toTimeString();
  form.addSectionHeaderItem().setTitle(rule);
  var videIdUrl =
    data.playlistArr[
      Math.floor(Math.random() * Math.floor(data.playlistArr.length))
    ];
  var globalYoutubeUrl = "https://www.youtube.com/watch?v=";
  form
    .addVideoItem()
    .setAlignment(FormApp.Alignment.CENTER)
    .setWidth(360)
    .setVideoUrl(videIdUrl)
    .setHelpText(globalYoutubeUrl + videIdUrl);
  const htmlList = list
    .map(function (r) {
      var rndFormArray = coUtility(r[0])[0];
      var rndFormVideo =
        rndFormArray.playlistArr[
          Math.floor(
            Math.random() * Math.floor(rndFormArray.playlistArr.length)
          )
        ];
      return `${form
        .addSectionHeaderItem()
        .setTitle(r[0])
        .setHelpText(globalYoutubeUrl + rndFormVideo)}\n\n\n\n`;
    })
    .toString()
    .replace(/,/g, "");
  const url = form.getPublishedUrl();
  const html = HtmlService.createTemplate(
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
  );
  return html.evaluate().getContent();
}; //:contentFile('uiAccess');

var dtlsEnvironment = function (rndSubstance) {
  var dtlsUrl =
    "https://script.google.com/macros/s/AKfycbzhrxdXzM08AAwA5ualRXdnDtV6C_xQ7bcq4v6H0HNdBqPr2C8A1URyWN0FLLccQuoA/exec?func=foo.videoPage&args=";
  var arrayMath = [`${randomSubstance()} ${randomSubstance()}`];
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
    return dtlsMain(product);
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
              Utilities.jsonStringify(ac["eparegnumber"])
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
  var form = FormApp.create(coInfo);
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
    var form = FormApp.create(coData.rndTitle);
    form
      .addVideoItem()
      .setAlignment(FormApp.Alignment.CENTER)
      .setHelpText(coData.videoItemUrl)
      .setVideoUrl(coData.videoItemUrl)
      .setWidth(360);
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

var dtlsMain = function (file) {
  var fileX = formsUrls(file);
  if (fileX) {
    var url = FormApp.openByUrl(fileX).getPublishedUrl();
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
  } else return;
};

var dtlsStore = function (e) {
  var urlSs =
    "https://docs.google.com/spreadsheets/d/1-vNcN0vCLcXgMY9uwcKukUgv_4njggRZ6fqoZs-hBFE/edit#gid=138098962";
  var urlWww =
    "https://script.google.com/macros/s/AKfycbzhrxdXzM08AAwA5ualRXdnDtV6C_xQ7bcq4v6H0HNdBqPr2C8A1URyWN0FLLccQuoA/exec?func=foo.dtlsEnvironment&args=";
  var usr = e;
  var dataUtility = coUtility(e || randomSubstance())[0];
  if (!usr) {
    var query = Math.floor(
      Math.random() * Math.floor(dataUtility.playlistArr.length)
    );
  } else {
    var query = usr;
  }
  var form = FormApp.create(dataUtility.rndTitle);
  var tmp = [];
  var parameters = [e][1] || 1;
  var sheetName = "Inventory";
  var sheet = ssGetSheetBySpreadsheetUrl(urlSs, sheetName).activate();
  var range = sheet.getDataRange();
  var data = range.getValues();
  var headings = data.slice(3, 4).toString().toLowerCase().split(",");
  var noHeaders = data.slice(4).map(function (val) {
    return val.toString().toLowerCase();
  });
  var outputData = covObjects(noHeaders, headings);
  var output = JSON.stringify({ status: "success", data: outputData });
  var rows = [];
  var values = range.getValues();
  for (var row in values) {
    rows.push([]);
    for (var col in values[row]) {
      rows[row].push(values[row][col]);
    }
  }
  var rowsToReturn = rows.filter((r) => {
    return r[5];
  });
  var outputQuery = covObjects(rowsToReturn, headings);
  var arrData = covArrays(outputQuery);
  let objParts = {};
  for (var i = 0; i < arrData.length; i++) {
    for (var [key, { headings }] of Object.entries(arrData[i])) {
      objParts[headings] = key;
    }
  }
  if (arrData) {
    const keys = Object.keys(arrData);
    keys.forEach(function (key) {
      tmp[key] = arrData[key];
    });
  }
  var jo = {};
  var dataArray = [];
  for (var i = 1, l = arrData.length; i < l; i++) {
    var record = {};
    record["id"] = arrData[i][0]["sku"];
    record["productName"] = arrData[i][0]["description"];
    record["rand1"] = arrData[i][0]["total customer purchase"];
    record["rand2"] = arrData[i][0]["qty offset"];
    record["rand3"] = arrData[i][0]["estimated value"];
    record["rand4"] = arrData[i][0]["supply processed "];
    record["rand5"] = arrData[i][0]["pack size"];
    record["rand6"] = arrData[i][0]["total supply available"];
    record["rand7"] = arrData[i][0]["cost supply available"];
    record["rand8"] = arrData[i][0]["current cost per item"];
    record["rand9"] = arrData[i][0][" average cost over time"];
    if (record["id"] !== "") {
      dataArray.push(record);
    }
  }
  form
    .setTitle(dataArray.length)
    .setConfirmationMessage("Thanks for your feedback !!");
  var productData = coUtility(
    dataArray[Math.floor(Math.random() * Math.floor(dataArray.length))][
      "productName"
    ]
  )[0];
  var randNum = Math.floor(Math.random() * Math.floor(dataArray.length));
  var searchString = dataArray[randNum]["productName"];
  jo.user = dataArray;
  var today = new Date();
  var rule = today.toDateString() + " - " + today.toTimeString();
  form.addSectionHeaderItem().setTitle(rule);
  var coTable = jo.user
    .map((r) => {
      var productItemVideo = coUtility(r["productName"])[0];
      return `${
        form
          .addSectionHeaderItem()
          .setTitle(
            r["productName"] + ": price: " + r["rand7"] + ": cpi: " + r["rand8"]
          ) +
        form
          .addSectionHeaderItem()
          .setHelpText(urlWww + encodeURIComponent(r["productName"]))
      }\n\n\n\n`;
    })
    .toString()
    .replace(/,/g, "");
  const url = form.getPublishedUrl();
  var result = JSON.stringify(coTable);
  baseUrl = getUrl(ScriptApp);
  inventoryUrl = getUrl(ScriptApp);
  financeUrl = getUrl(ScriptApp);
  return HtmlService.createTemplate(
    `<div class="row">
    <div class="col s10 card-panel l12 m12 push-s1">
    <div class="video-container amber" style="clear: both">
    <div class="col s12 l12 m12 receipt deep-purple darken-1">
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
  ).getRawContent();
};

var generalWorkInvoice = function (clientName) {
  var rndClient = coUtility(clientName)[0];
  var dtlsUrl =
    "https://script.google.com/macros/s/AKfycbzhrxdXzM08AAwA5ualRXdnDtV6C_xQ7bcq4v6H0HNdBqPr2C8A1URyWN0FLLccQuoA/exec?func=foo.videoPage&args=";
  var form = FormApp.create(rndClient.rndTitle);
  form
    .addVideoItem()
    .setAlignment(FormApp.Alignment.CENTER)
    .setWidth(360)
    .setVideoUrl(rndClient.videoItemUrl)
    .setHelpText(rndClient.videoItemUrl);
  form.addDateItem().setTitle("Invoice Date").setRequired(true);
  form.addTextItem().setTitle("Car ").setRequired(true);
  form.addTextItem().setTitle("Deliver/Pickup ").setRequired(true);
  form.addTextItem().setTitle("Vin/STK # ").setRequired(true);
  form.addTextItem().setTitle("Delivery Address ").setRequired(true);
  form.addTextItem().setTitle("Labor ").setRequired(true);
  form.addTextItem().setTitle("Gas ").setRequired(true);
  form.addTextItem().setTitle("Total ").setRequired(false);
  form.addTextItem().setTitle("Delivery Time ").setRequired(false);
  form.addTextItem().setTitle("Pickup Address ").setRequired(false);
  form
    .addSectionHeaderItem()
    .setTitle("Company Info")
    .setHelpText(dtlsUrl + rndClient.rndTitle)
    .setRequired(false);
  if (typeof rndClient.rndTicker !== "undefined") {
    form
      .addSectionHeaderItem()
      .setTitle(rndClient.rndTicker)
      .setHelpText(rndClient.secUrl)
      .setRequired(false);
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
  form.addParagraphTextItem().setTitle("Your Message").setRequired(true);
  form
    .setTitle(rndClient.rndTitle)
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
};
