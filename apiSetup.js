function apiRedeplaoy() {
  var funcInfo = gsFiles()[crmT(arguments.callee.name)];
  var result = functionRegistry.getParamsList().find((rndS) => {
    return rndS.name === funcInfo;
  });
  if (typeof result === "object" && result !== null && result.name) {
    misArgs =
      result.parameters && result.parameters.length > 0
        ? [result.name, ...result.parameters]
        : [result.name];
  }
  var scriptKey = PropertiesService.getScriptProperties().getProperties();
  console.log(scriptKey);
  return scriptKey;
}

function apiSetupSheet() {
  var cprops = PropertiesService.getScriptProperties();
  var keyC = cprops.getProperty("key");
  var doc = SpreadsheetApp.openById(keyC);
  return doc;
}

function apiSetupActiveSheet() {
  var cprops = PropertiesService.getScriptProperties();
  var activeC = cprops.getProperty("sheetkey");
  var doc = SpreadsheetApp.openById(activeC);
  return doc;
}

function apiSetup() {
  var wsId = ssId();
  var cprops = PropertiesService.getScriptProperties();
  var scriptKey = cprops.setProperty("key", wsId);
  return scriptKey;
}

function apiSetupActive() {
  var ssId = ssSheet()?.getSheetId();
  var cprops = PropertiesService.getScriptProperties();
  var scriptKey = cprops.setProperty("sheetkey", ssId);
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
