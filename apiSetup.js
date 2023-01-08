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
