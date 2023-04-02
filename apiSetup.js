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

var dtls = function () {
  var form = FormApp.create("Form Example");
  form.addTextItem().setTitle("Your Name").setRequired(true);
  form.addParagraphTextItem().setTitle("Your Message").setRequired(true);
  form
    .setTitle("Feedback Form")
    .setConfirmationMessage("Thanks for your feedback !!");

  var url = form.getPublishedUrl();
  var values = [];
  var data = dtlsCapital(url).map((a) => {
    if (a.indexOf("jsname") > -1) {
      console.log(
        a.length +
          " || || " +
          a.indexOf("jsname") +
          " || || " +
          a.slice(a.split(a.substring(a.indexOf("jsname"))))
      );
      values.push(a.substring(a.indexOf("jsname")));
    }
  });
  var range = [];
  for (var i = 0, l = values.length; i < l; i++) {
    range.push(values[i].substring(8, 14));
  }
  var result = Utilities.jsonStringify(
    range[Math.floor(Math.random() * Math.floor(range.length))]
  );
  return HtmlService.createTemplate(
    `<form id="my-form">
      <input name=${result} type="text" required/>
      <input type="submit" />
    </form>`
  )
    .evaluate()
    .getContent();
  GmailApp.sendEmail(
    "your.name@example.com", // YOUR EMAIL ADDRESS
    "Hello",
    "Here is the form URL: " + url
  );
};

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
