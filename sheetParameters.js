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
  if (typeof fileX !== "undefined") {
    var file = DriveApp.getRootFolder().getFilesByName(fileX);
    if (file.hasNext()) {
      while (file.hasNext()) {
        var url = file.next().getUrl();
      }
      return url;
    } else {
      return;
    }
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

var spreadSheetCreate = function (fileX, sheetName, rowHeaders, data) {
  var ssApp = SpreadsheetApp;
  var nSs = driveUrls(fileX);
  console.log("Google Drive Url " + nSs);
  if (typeof nSs === "undefined") {
    var ss = ssApp.create(fileX);
    var sheet = ss.getSheets()[0].activate();
    console.log("Name of this sheet is " + sheet.getName());
    var ws = sheet.setName(sheetName);
    console.log("Sheet name changed to " + ws.getName());
    console.log(ss.getActiveSheet().getName());
    var headers = [];
    testData(rowHeaders).map((h) => {
      headers.push(h[0]);
    });
    ws.appendRow(headers);
    var dataArray = [];
    testData(data).forEach((o) => {
      dataArray.push(o[0]);
    });
    col = ws.getDataRange().getNumColumns();
    ws.getRange(2, 1, [dataArray].length, col).setValues([dataArray]);
    console.log("New file named " + fileX + " created!");
    if (typeof nSs !== "undefined") {
      var ss = ssApp.openByUrl(url);
      ws = ss.getActiveSheet();
      return ws.getRange(1, 1, ws.getLastRow(), ws.getLastColumn()).getValues();
    } else {
      return;
    }
  } else {
    console.log(typeof nSs);
    if (typeof nSs !== "undefined") {
      var ss = ssApp.openByUrl(nSs);
      ws = ss.getActiveSheet();
      return ws.getRange(1, 1, ws.getLastRow(), ws.getLastColumn()).getValues();
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
