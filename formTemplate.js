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
      title="SIPOC"
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

var dtlsEnviroment = function (rndTitle) {
  var dtlsUrl =
    "https://script.google.com/macros/s/AKfycbzhrxdXzM08AAwA5ualRXdnDtV6C_xQ7bcq4v6H0HNdBqPr2C8A1URyWN0FLLccQuoA/exec?func=foo.videoPage&args=";
  var arrayMath = [`${randomSubstance()} ${randomSubstance()}`];
  var product =
    rndTitle ||
    arrayMath
      .toString()
      .split(" ")
      .sort((a, b) => a - b)[
      Math.floor(
        Math.random() * Math.floor(arrayMath.toString().split(" ").length)
      )
    ];
  if (typeof formsUrls(product) !== "undefined") {
    return dtlsMain(product);
  }
  var test = productNamePartial(product);
  if (typeof test === "undefined") {
    return;
  }
  var test2 = productRegNo(test["eparegno"]);
  var uniqueCo = [];
  for (var i = 0, l = test2["companyinfo"].length; i < l; i++) {
    if (test2["companyinfo"][i]["name"]) {
      var coName = allInvestors(
        test2["companyinfo"][i]["name"].toString().toLowerCase()
      );
      console.log(coName);
      if (typeof coName === "undefined") {
        uniqueCo.push({
          searchString: test2["companyinfo"][i]["name"]
            .toString()
            .toLowerCase(),
          title: test2["companyinfo"][i]["name"].toString(),
        });
      } else {
        uniqueCo.push({
          secUrl:
            "https://www.sec.gov/edgar/browse/?CIK=" +
            coName +
            "&owner=exclude",
          title: test2["companyinfo"][i]["name"].toString(),
        });
      }
    }
  }
  var randomCik = uniqueCo[0];
  var uniqueData = [];
  for (var i = 0, l = test2["active_ingredients"].length; i < l; i++) {
    if (test2["active_ingredients"][i]["active_ing"]) {
      var pIName = productIngName(test2["active_ingredients"][i]["active_ing"]);
      uniqueData.push(pIName["items"]);
    }
  }
  var uniqueDataArray = [];
  for (var i = 0, l = uniqueData.length; i < l; i++) {
    if (uniqueData[i].length === 0) {
      return;
    }
    uniqueData[i].map((item) => {
      uniqueDataArray.push(item);
    });
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
  if (typeof uniqueDataKey[1][randomKey] === "undefined") {
    return;
  }
  var randomProduct = uniqueDataKey[1][randomKey]["productname"];
  if (typeof formsUrls(randomProduct) !== "undefined") {
    return dtlsMain(randomProduct);
  }
  var randomIngredient = uniqueDataKey[1][randomKey]["ingredientname"];
  var randomProductStatusDate =
    uniqueDataKey[1][randomKey]["productstatusdate"];
  var randomProductNameStatus =
    uniqueDataKey[1][randomKey]["productnamestatus"];
  var randomAlternateBrandName =
    uniqueDataKey[1][randomKey]["alternatebrandname"];
  var randomPcCode = uniqueDataKey[1][randomKey]["pccode"];
  var randomRegistrationStatus =
    uniqueDataKey[1][randomKey]["registrationstatus"];
  var randomCasNumber = uniqueDataKey[1][randomKey]["casnumber"];
  var randomEpaRegNum = uniqueDataKey[1][randomKey]["eparegnumber"];
  //Youtube Widget
  var idArray = needPastTime(randomProduct);
  var randomPlaylist = [];
  for (var i = 0; i < idArray.length; i++) {
    const randomVidKey = Math.floor(Math.random() * Math.floor(idArray.length)); // Math.floor(Math.random());
    randomPlaylist.push(idArray[randomVidKey]);
  }
  var vidPlaylist = function () {
    const randomVidKey = Math.floor(
      Math.random() * Math.floor(randomPlaylist.length)
    ); // Math.floor(Math.random());
    var videoObject = covObjects(randomPlaylist, ["youtubeID"]);
    var uniqueVidKey = [videoObject].entries().next().value;
    var randomVid = uniqueVidKey[1][randomVidKey];
    if (typeof randomVid === "undefined") {
      return;
    }
    var rVideo = randomVid["youtubeID"];
    return rVideo;
  };
  var randomVideo = vidPlaylist();
  var youtubeUrl = "http://www.youtube.com/watch?v=" + randomVideo;
  var epaUrl =
    "https://ofmpub.epa.gov/sor_internet/registry/substreg/searchandretrieve/substancesearch/search.do?multipleEntriesSearch=&multipleKeys=" +
    randomCasNumber +
    "&onSRS=true&onChemResourceDir=true&substanceNameScope=beginswith";
  // return misBing(randomVideo)
  var secUrl =
    "https://www.sec.gov/edgar/browse/?CIK=" +
    randomEpaRegNum +
    "&owner=exclude";
  var form = FormApp.create(randomProduct);
  form
    .addVideoItem()
    .setAlignment(FormApp.Alignment.CENTER)
    .setTitle(randomProduct)
    .setHelpText(youtubeUrl)
    .setVideoUrl(youtubeUrl)
    .setWidth(360);
  form
    .addTextItem()
    .setTitle("Active Ingredient in " + randomProduct)
    .setHelpText(randomIngredient)
    .setRequired(false);
  form
    .addTextItem()
    .setTitle("Alternate Brand Name(s) for " + randomProduct)
    .setHelpText(randomAlternateBrandName)
    .setRequired(false);
  form
    .addTextItem()
    .setTitle("EPA Registration Number for " + randomProduct)
    .setHelpText(randomEpaRegNum)
    .setRequired(false);
  form
    .addTextItem()
    .setTitle("Registration Status for " + randomProduct)
    .setHelpText(randomRegistrationStatus)
    .setRequired(false);
  form
    .addTextItem()
    .setTitle("Name Status for " + randomProduct)
    .setHelpText(randomProductNameStatus)
    .setRequired(false);
  form
    .addTextItem()
    .setTitle("Status Date for " + randomProduct)
    .setHelpText(randomProductStatusDate)
    .setRequired(false);
  form
    .addTextItem()
    .setTitle("Pesticide Chemical Code for " + randomIngredient)
    .setHelpText(randomPcCode)
    .setRequired(false);
  form
    .addTextItem()
    .setTitle("Chemical Number for " + randomIngredient)
    .setHelpText(epaUrl)
    .setRequired(false);
  if (uniqueCo[0].searchString) {
    form
      .addTextItem()
      .setTitle("Company Info")
      .setHelpText(dtlsUrl + encodeURIComponent(uniqueCo[0].searchString))
      .setRequired(false);
  } else
    form
      .addTextItem()
      .setTitle("Company Info")
      .setHelpText(uniqueCo[0].secUrl)
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
  form.addTextItem().setTitle("Cash & Marketable Securities").setRequired(true);
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
  form.addTextItem().setTitle("Current Year Total Earnings").setRequired(false);
  form.addTextItem().setTitle("Base Year Total Earnings").setRequired(false);
  form.addTextItem().setTitle("Your Name").setRequired(true);
  form.addDateItem().setTitle("Birth Date").setRequired(true);
  form.addParagraphTextItem().setTitle("Your Message").setRequired(true);
  form
    .setTitle(uniqueCo[0].title)
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
      title="SIPOC"
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
  var uniqueKey = Utilities.jsonParse([
    urlDataSource("https://www.sec.gov/files/company_tickers.json"),
  ]);
  var uniqueCoArray = covArrays(uniqueKey);
  const matches = [];
  uniqueCoArray
    .sort((a, b) => a - b)
    .filter((ac) => {
      if (
        Utilities.jsonStringify(ac[0]["title"])
          .toLowerCase()
          .includes(
            coKey ||
              [`group bank semi fact bio science block chain space coin`]
                .toString()
                .split(" ")
                .sort((a, b) => a - b)[
                Math.floor(
                  Math.random() *
                    Math.floor(
                      [
                        `group bank semi fact bio science block chain space coin`,
                      ]
                        .toString()
                        .split(" ").length
                    )
                )
              ]
          )
      )
        matches.push(ac);
    });
  var randomKey = Math.floor(Math.random() * Math.floor(matches.length)); // Math.floor(Math.random())
  var uniqueCoKey = [matches].entries().next().value;
  var randomTitle = uniqueCoKey[1][randomKey][0]["title"];
  if (typeof formsUrls(randomTitle) !== "undefined") {
    return dtlsMain(randomTitle);
  }
  var randomTicker = uniqueCoKey[1][randomKey][0]["ticker"];
  var randomCik = uniqueCoKey[1][randomKey][0]["cik_str"];
  //Youtube Widget
  var idArray = needPastTime(randomTitle);
  var randomPlaylist = [];
  for (var i = 0; i < idArray.length; i++) {
    const randomVidKey = Math.floor(Math.random() * Math.floor(idArray.length)); // Math.floor(Math.random());
    randomPlaylist.push(idArray[randomVidKey]);
  }
  var vidPlaylist = function () {
    const randomVidKey = Math.floor(
      Math.random() * Math.floor(randomPlaylist.length)
    ); // Math.floor(Math.random());
    var videoObject = covObjects(randomPlaylist, ["youtubeID"]);
    var uniqueVidKey = [videoObject].entries().next().value;
    var randomVid = uniqueVidKey[1][randomVidKey];
    var rVideo = randomVid["youtubeID"];
    return rVideo;
  };
  var randomVideo = vidPlaylist();
  var youtubeUrl = "http://www.youtube.com/watch?v=" + randomVideo;
  // return misBing(randomVideo)
  var secUrl =
    "https://www.sec.gov/edgar/browse/?CIK=" + randomCik + "&owner=exclude";
  var form = FormApp.create(randomTitle);
  form
    .addVideoItem()
    .setAlignment(FormApp.Alignment.CENTER)
    .setTitle(randomTitle)
    .setHelpText(youtubeUrl)
    .setVideoUrl(youtubeUrl)
    .setWidth(360);
  form
    .addTextItem()
    .setTitle(randomTicker)
    .setHelpText(secUrl)
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
  form.addTextItem().setTitle("Cash & Marketable Securities").setRequired(true);
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
  form.addTextItem().setTitle("Current Year Total Earnings").setRequired(false);
  form.addTextItem().setTitle("Base Year Total Earnings").setRequired(false);
  form.addTextItem().setTitle("Your Name").setRequired(true);
  form.addDateItem().setTitle("Birth Date").setRequired(true);
  form.addParagraphTextItem().setTitle("Your Message").setRequired(true);
  form
    .setTitle(randomTitle)
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
      title="SIPOC"
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

var dtlsMain = function (file) {
  var fileX = formsUrls(file);
  var url = FormApp.openByUrl(fileX).getPublishedUrl();
  return HtmlService.createTemplate(
    `<div class="row">
    <div class="col s10 card-panel amber push-s1 push-m1 push-l1">
    <div class="video-container" style="clear: both">
    <div class="col s12 receipt deep-purple darken-1">
    <iframe 
      class="z-depth-5 card-panel deep-purple darken-1 scale-transition scale-out scale-in btn-large" 
      src="${url}" 
      title="SIPOC"
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

var generalWorkInvoice = function (rndClient) {
  var dtlsUrl =
    "https://script.google.com/macros/s/AKfycbzhrxdXzM08AAwA5ualRXdnDtV6C_xQ7bcq4v6H0HNdBqPr2C8A1URyWN0FLLccQuoA/exec?func=foo.videoPage&args=";
  var client = rndClient;
  if (typeof formsUrls(client) !== "undefined") {
    return dtlsMain(client);
  }
  var randomCik = coUtility(client)[0].rndCik;
  //Youtube Widget
  var idArray = needPastTime(client);
  var randomPlaylist = [];
  for (var i = 0; i < idArray.length; i++) {
    const randomVidKey = Math.floor(Math.random() * Math.floor(idArray.length)); // Math.floor(Math.random());
    randomPlaylist.push(idArray[randomVidKey]);
  }
  var vidPlaylist = function () {
    const randomVidKey = Math.floor(
      Math.random() * Math.floor(randomPlaylist.length)
    ); // Math.floor(Math.random());
    var videoObject = covObjects(randomPlaylist, ["youtubeID"]);
    var uniqueVidKey = [videoObject].entries().next().value;
    var randomVid = uniqueVidKey[1][randomVidKey];
    if (typeof randomVid === "undefined") {
      return;
    }
    var rVideo = randomVid["youtubeID"];
    return rVideo;
  };
  var randomVideo = vidPlaylist();
  var youtubeUrl = "http://www.youtube.com/watch?v=" + randomVideo;
  var form = FormApp.create(rndClient);
  if (typeof randomCik === "undefined") {
    form
      .addVideoItem()
      .setAlignment(FormApp.Alignment.CENTER)
      .setTitle(coUtility(client)[0].title)
      .setHelpText(youtubeUrl)
      .setVideoUrl(youtubeUrl)
      .setWidth(360);
  } else {
    form
      .addVideoItem()
      .setAlignment(FormApp.Alignment.CENTER)
      .setTitle(coUtility(client)[0].title)
      .setHelpText(coUtility(client)[0].videoItemUrl)
      .setVideoUrl(coUtility(client)[0].videoItemUrl)
      .setWidth(360);
  }
  form.addDateItem().setTitle("Invoice Date").setRequired(true);
  form
    .addTextItem()
    .setTitle("Car " + client)
    .setRequired(true);
  form
    .addTextItem()
    .setTitle("Deliver/Pickup " + client)
    .setRequired(true);
  form
    .addTextItem()
    .setTitle("Vin/STK # " + client)
    .setRequired(true);
  form
    .addTextItem()
    .setTitle("Delivery Address " + client)
    .setRequired(true);
  form
    .addTextItem()
    .setTitle("Labor " + client)
    .setRequired(true);
  form
    .addTextItem()
    .setTitle("Gas " + client)
    .setRequired(true);
  form
    .addTextItem()
    .setTitle("Total " + client)
    .setRequired(false);
  form
    .addTextItem()
    .setTitle("Delivery Time " + client)
    .setRequired(false);
  form
    .addTextItem()
    .setTitle("Pickup Address " + client)
    .setRequired(false);
  if (typeof randomCik === "undefined") {
    form
      .addTextItem()
      .setTitle("Company Info")
      .setHelpText(dtlsUrl + coUtility(client)[0].searchString)
      .setRequired(false);
  } else
    form
      .addTextItem()
      .setTitle("Company Info")
      .setHelpText(coUtility(client)[0].secUrl)
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
  form.addTextItem().setTitle("Cash & Marketable Securities").setRequired(true);
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
  form.addTextItem().setTitle("Current Year Total Earnings").setRequired(false);
  form.addTextItem().setTitle("Base Year Total Earnings").setRequired(false);
  form.addTextItem().setTitle("Your Name").setRequired(true);
  form.addParagraphTextItem().setTitle("Your Message").setRequired(true);
  if (typeof randomCik === "undefined") {
    form
      .setTitle(coUtility(client)[0].title)
      .setConfirmationMessage("Thanks for your feedback !!");
  } else {
    form
      .setTitle(coUtility(client)[0].rndTitle)
      .setConfirmationMessage("Thanks for your feedback !!");
  }
  var url = form.getPublishedUrl();
  return HtmlService.createTemplate(
    `<div class="row">
    <div class="col s10 card-panel amber push-s1 push-m1 push-l1">
    <div class="video-container" style="clear: both">
    <div class="col s12 receipt deep-purple darken-1">
    <iframe 
      class="z-depth-5 card-panel deep-purple darken-1 scale-transition scale-out scale-in btn-large" 
      src="${url}" 
      title="SIPOC"
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
