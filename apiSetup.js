function apiSetupSheet() {
  var doc = SpreadsheetApp.openById(
    PropertiesService.getScriptProperties().getProperty("key")
  );
  return doc;
}

function apiSetupActiveSheet() {
  var doc = SpreadsheetApp.openById(
    PropertiesService.getScriptProperties().getProperty("sheetkey")
  );
  return doc;
}

function apiSetup() {
  var scriptKey = PropertiesService.getScriptProperties().setProperty(
    "key",
    ssId()
  );
  return scriptKey;
}

function apiSetupActive() {
  var scriptKey = PropertiesService.getScriptProperties().setProperty(
    "sheetkey",
    ssSheet().getSheetId()
  );
  return scriptKey;
}

var dtls = function (func) {
  var appList = [];
  for (var key in globalThis) {
    if (typeof globalThis[key] == "function") {
      appList.push(key);
    }
  }
  var rdmNumForName = Math.floor(Math.random() * Math.floor(appList.length));
  var formName = func || appList[rdmNumForName];
  var form = FormApp.create(formName);
  form.addParagraphTextItem().setHelpText(globalThis[formName].toString());
  form.addTextItem().setTitle("Your Name").setRequired(true);
  form.addDateItem().setTitle("Birth Date").setRequired(true);
  form.addParagraphTextItem().setTitle("Your Message").setRequired(true);
  form.setTitle(formName).setConfirmationMessage("Thanks for your feedback !!");
  var url = form.getPublishedUrl();
  return HtmlService.createTemplate(
    `<form action="${url}" method="get" id="foo"></form>
    <script>document.getElementById('foo').submit();</script>`
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
    `<form action="${url}" method="get" id="foo"></form>
    <script>document.getElementById('foo').submit();</script>`
  )
    .evaluate()
    .getContent();
};

//     // list district data into a select box
//   var districtList = form.addListItem();
//   districtList.setTitle('Your Function').setRequired(true);
//   districtList.setChoiceValues(districts);

//   var values = []
//   var data = dtlsCapital(url)
//         .map((a) => {
//           if (a.indexOf("jsname") > -1) {
//           console.log(a.length + " || || " + a.indexOf("jsname") + " || || " + a.slice(a.split(a.substring(a.indexOf("jsname")))))
//           values.push(a.substring(a.indexOf("jsname")))}})
//   var range = []
//   for (var i=0, l=values.length; i<l; i++) {
//           range.push(values[i].substring(8,14))}
// var result = Utilities.jsonStringify(range[Math.floor(Math.random() * (Math.floor(range.length)))])
//   GmailApp.sendEmail('your.name@example.com', // YOUR EMAIL ADDRESS
//                      'Hello',
//                      'Here is the form URL: ' + url);

var dtlsCapital = function (url) {
  const videoSearch = [
    urlDataSource(url, null, { muteHttpExceptions: true, mode: "no-cors" }),
  ];
  const table = videoSearch
    .slice(videoSearch.indexOf("SERP"))
    .toString()
    .split("SERP");
  const pong = table.map((ping) => {
    return ping.substring(0);
  });
  return pong.toString().split(",");
};

var dtlsMain = function (file) {
  var fileX = formsUrls(file);
  var url = FormApp.openByUrl(fileX).getPublishedUrl();
  return HtmlService.createTemplate(
    `<form action="${url}" method="get" id="foo"></form>
    <script>document.getElementById('foo').submit();</script>`
  )
    .evaluate()
    .getContent();
};
