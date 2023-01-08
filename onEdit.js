var endPoint = function (end, return_type) {
  var pathEnd = DistanceProject.GOOGLEMAPS(
    "4510 Split Creek Dr, Douglasville, Ga, 30135",
    end,
    return_type
  );
  return pathEnd;
};

var kiloPoint = function (start, end) {
  var path = DistanceProject.GOOGLEMAPS(start, end, "kilometers");
  return path;
};

var lockR = function (row, col) {
  var ws = ssSheet();
  var range = ws.getDataRange().getValues();
  var lock = range.map(openR(row, col));
  return lock;
};

var milePoint = function (start, end) {
  var path =
    DistanceProject.GOOGLEMAPS(start, end, "miles") +
    DistanceProject.GOOGLEMAPS(end, start, "miles");
  return path;
};

var minutePoint = function (start, end) {
  var path =
    DistanceProject.GOOGLEMAPS(start, end, "minutes") +
    DistanceProject.GOOGLEMAPS(end, start, "minutes");
  return path;
};

var onEdit = function (e) {
  // stampRow(e);
  // stampRowItems(e);
  // stampRowRecieve(e);
  // stampRowInventoryCheck(e);
  // stampRowSales(e);
  searchEdit(e);
};

var searchEdit = function (e) {
  authLogic(e.range.getA1Notation() !== "C6")
    ? (() => {
        return;
      })()
    : authLogic(e.source.getSheetName() !== "Invoice Form")
    ? (() => {
        return;
      })()
    : (() => {
        searchRecords();
      })();
};

var openR = function (row, stampRow) {
  var ws = ssSheet();
  var range = ws.getRange(row, stampRow).setValue(new Date());
  return range;
};

var stampRow = function (rowS1, colS1, colS2) {
  var col = e.range.getColumn();
  var row = e.range.getRow();
  var startRow = rowS1;
  var ws = ssSheet().getName();
  console.log(ws);
  if (
    col !== colS1 &&
    col !== colS2 &&
    row >= startRow &&
    e.source.getActiveSheet().getName() === ws
  ) {
    if (e.source.getActiveSheet().getRange(row, colS1).getValue() === "") {
      openR(row, colS1);
    } else {
      openR(row, colS2);
    }
  }
};

var stampRowItems = function (e) {
  var col = e.range.getColumn();
  var row = e.range.getRow();
  var startRow = 2;
  var ws = "Items";
  if (
    col !== 4 &&
    col !== 5 &&
    row >= startRow &&
    e.source.getActiveSheet().getName() === ws
  ) {
    if (e.source.getActiveSheet().getRange(row, 4).getValue() === "") {
      lockR(row, 4);
    } else {
      lockR(row, 5);
    }
  }
  return;
};

var stampRowRecieve = function (e) {
  var col = e.range.getColumn();
  var row = e.range.getRow();
  var startRow = 2;
  var ws = "Recieve";
  if (
    col !== 9 &&
    col !== 10 &&
    row >= startRow &&
    e.source.getActiveSheet().getName() === ws
  ) {
    if (e.source.getActiveSheet().getRange(row, 9).getValue() === "") {
      lockR(row, 9);
    } else {
      lockR(row, 10);
    }
  }
  return;
};

var stampRowSales = function (e) {
  var col = e.range.getColumn();
  var row = e.range.getRow();
  var startRow = 2;
  var ws = "Sales";
  if (
    col !== 6 &&
    col !== 7 &&
    row >= startRow &&
    e.source.getActiveSheet().getName() === ws
  ) {
    if (e.source.getActiveSheet().getRange(row, 6).getValue() === "") {
      lockR(row, 6);
    } else {
      lockR(row, 7);
    }
  }
  return;
};

var stampRowInventoryCheck = function (e) {
  var col = e.range.getColumn();
  var row = e.range.getRow();
  var startRow = 2;
  var ws = "Inventory Check";
  if (
    col !== 4 &&
    col !== 5 &&
    row >= startRow &&
    e.source.getActiveSheet().getName() === ws
  ) {
    if (e.source.getActiveSheet().getRange(row, 4).getValue() === "") {
      lockR(row, 4);
    } else {
      lockR(row, 5);
    }
  }
  return;
};

var startPoint = function (start, return_type) {
  var pathStart = DistanceProject.GOOGLEMAPS(
    start,
    "4510 Split Creek Dr, Douglasville, Ga, 30135",
    return_type
  );
  return pathStart;
};
