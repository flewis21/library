function apiSetupSheet() {
  var doc = SpreadsheetApp.openById(
    PropertiesService.getScriptProperties().getProperty("key"),
  );
  return doc;
}

function apiSetupActiveSheet() {
  var doc = SpreadsheetApp.openById(
    PropertiesService.getScriptProperties().getProperty("sheetkey"),
  );
  return doc;
}

function apiSetup() {
  var scriptKey = PropertiesService.getScriptProperties().setProperty(
    "key",
    ssId(),
  );
  return scriptKey;
}

function apiSetupActive() {
  var scriptKey = PropertiesService.getScriptProperties().setProperty(
    "sheetkey",
    ssSheet().getSheetId(),
  );
  return scriptKey;
}

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
