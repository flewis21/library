function activeSsId() {
  var ss = spreadSheet();
  var id = ss.getId();
  return id;
}

var createSheetHeader = function (headers) {
  var headings = data[headers].map(function (val) {
    console.log(val);
    return val.toString().toLowerCase();
  });
  return headings;
};

var driveUrls = function (fileX) {
  var file = DriveApp.getRootFolder().getFilesByName(fileX);
  if (file.hasNext()) {
    console.log(file.next());
    while (file.hasNext()) {
      var url = file.next().getUrl();
    }
    // return url
    console.log(url);
  } else {
    return;
  }
};

var idSpreadSheet = function (id) {
  var ssApp = SpreadsheetApp;
  var ss = ssApp.openById(id);
  return ss;
};

function spreadSheet() {
  var ssApp = SpreadsheetApp;
  var ss = ssApp.getActiveSpreadsheet();
  return ss;
}

var spreadSheetCreate = function (fileX, sheetName, headers, data, col) {
  var ssApp = SpreadsheetApp;
  if (typeof driveUrls(fileX) === "undefined") {
    var ss = ssApp.create(fileX);
    var sheets = ss.getSheets();
    sheets[0].activate();
    var ws = sheets[0].setName(sheetName);
    var mySheet = ss.setActiveSheet(ws);
    mySheet.appendRow(headers);
    var dataArray = testData(data);
    mySheet.getRange(2, 1, dataArray.length, col).setValues(dataArray);
    console.log(typeof fileX);
    var url = driveUrls(fileX);
    if (typeof url !== "undefined") {
      var ss = ssApp.openByUrl(url);
      ws = ws.getActiveSheet();
      return ws.getRange(1, 1, ws.getLastRow(), col).getValues();
    } else {
      return;
    }
  } else {
    console.log(typeof fileX);
    var url = driveUrls(fileX);
    if (typeof url !== "undefined") {
      var ss = ssApp.openByUrl(url);
      ws = ws.getActiveSheet();
      return ws.getRange(1, 1, ws.getLastRow(), col).getValues();
    } else {
      return;
    }
  }
};

function ssActiveRange() {
  var sheet = ssSheet();
  var data = sheet.getActiveRange();
  return data;
}

var ssCell = function (column, rowOffSet, colOffSet) {
  var sheet = ssSheet();
  var data = sheet
    .getRange(sheet.getMaxRows(), column)
    .getNextDataCell(SpreadsheetApp.Direction.UP)
    .offset(rowOffSet, colOffSet);
  return data;
};

var ssDatabase = function (file, sheet, col, headers, data) {
  var result = contentApp("", {
    createProject: (function () {
      var ws = spreadSheetCreate(file, sheet);
      ws.appendRow(headers);
      var dataArray = testData(data);
      ssSheet().getRange(2, 1, dataArray.length, col).setValues(dataArray);
      // for (let i = 0; i < dataArray.length; i++) {
      //   ws.appendRow(dataArray[i]);
      // }
    })(),
  });
  return result;
};

function ssDataRange() {
  var sheet = ssSheet();
  var data = sheet.getDataRange().getValues();
  return data;
}

var ssGetSheet = function (sheetname) {
  var ss = spreadSheet();
  var sheet = ss.getSheetByName(sheetname);
  return sheet;
};

var ssGetSheetBySpreadsheetId = function (id, sheetname) {
  var ss = idSpreadSheet(id);
  var sheet = ss.getSheetByName(sheetname);
  return sheet;
};

var ssGetSheetBySpreadsheetUrl = function (url, sheetname) {
  var ss = urlSpreadSheet(url);
  var sheet = ss.getSheetByName(sheetname);
  return sheet;
};

var ssSetName = function (randomSheet, sheetname) {
  var sheetName = idSpreadSheet(randomSheet.getId())
    .getSheetByName("sheet1")
    .setName(sheetname);
  var sheet = idSpreadSheet(randomSheet.getId()).getSheetByName(sheetName);
  return sheet;
};

function ssSetSheet() {
  var ss = spreadSheet();
  var sheet = ss.setActiveSheet();
  return sheet;
}

var ssSetSheetBySpreadsheetId = function (id) {
  var ss = idSpreadSheet(id);
  var sheet = ss.setActiveSheet();
  return sheet;
};

var ssSetSheetBySpreadsheetUrl = function (url) {
  var ss = urlSpreadSheet(url);
  var sheet = ss.setActiveSheet();
  return sheet;
};

function ssSheet() {
  var ss = spreadSheet();
  var sheet = ss.getActiveSheet();
  return sheet;
}

function ssSheetName() {
  var sheet = ssSheet();
  var sheetName = sheet.getSheetName();
  return sheetName;
}

var urlSpreadSheet = function (url) {
  var ssApp = SpreadsheetApp;
  var ss = ssApp.openByUrl(url);
  return ss;
};

var wsSIPOC = function (fileName, col) {
  var result = contentApp("", {
    createSheet: (function () {
      var spreadSheet = driveOpenFiles(fileName);
      var ss = SpreadsheetApp.open(spreadSheet);
      var sheets = ss.getSheets();
      var ws = sheets[0].activate();
      return ws.getRange(2, 1, ws.getLastRow() - 1, col).getDisplayValue();
    })(),
  });
  return result;
};
