var delAddress = function () {
  var ws = ssGetSheetBySpreadsheetUrl(
    "https://docs.google.com/spreadsheets/d/1-vNcN0vCLcXgMY9uwcKukUgv_4njggRZ6fqoZs-hBFE/edit#gid=138098962",
    "General Work Invoice",
  );
  var address = ws
    .getRange(2, 5, ws.getRange("E2").getDataRegion().getLastRow(), 1)
    .getValues();
  var toRnd = [Math.floor(Math.random() * Math.floor(address.length))];
  var fromRnd = [Math.floor(Math.random() * Math.floor(address.length))];
  var endAddress = address[toRnd];
  var startAddress = address[fromRnd];
  while (endAddress.join("").length === 0) {
    toRnd = [Math.floor(Math.random() * Math.floor(address.length))];
    endAddress = address[toRnd];
  }
  while (startAddress.join("").length === 0) {
    fromRnd = [Math.floor(Math.random() * Math.floor(address.length))];
    startAddress = address[fromRnd];
  }
  return {
    startPoint: startAddress,
    endPoint: endAddress,
  };
};

var endPoint = function (end, return_type) {
  var rndEnd = delAddress().endPoint;
  var pathEnd = DistanceProject.GOOGLEMAPS(
    "4510 Split Creek Dr, Douglasville, Ga, 30135",
    end || rndEnd,
    return_type,
  );
  return pathEnd;
};

var kiloPoint = function (startCoord, end) {
  var rndStart = delAddress().startPoint;
  var rndEnd = delAddress().endPoint;
  var path = DistanceProject.GOOGLEMAPS(
    startCoord || rndStart,
    end || rndEnd,
    "kilometers",
  );
  return path;
};

var lockR = function (row, col) {
  var ws = ssSheet();
  var range = ws.getDataRange().getValues();
  var lock = range.map(openR(row, col));
  return lock;
};

var lockRange = function (row, col) {
  var ws = ssSheet();
  var range = ws.getDataRange().getValues();
  var lock = range.map(openRange(row, col));
  return ss, ws, range, lock;
};

var milePoint = function (startCoord, end) {
  if (typeof startCoord === "undefined") {
    var startCoord = delAddress().startPoint;
  }
  if (typeof end === "undefined") {
    var end = delAddress().endPoint;
  }
  var path =
    DistanceProject.GOOGLEMAPS(startCoord, end, "miles") +
    DistanceProject.GOOGLEMAPS(end, startCoord, "miles");
  return path;
};

var minutePoint = function (startCoord, end) {
  var rndStart = delAddress().startPoint;
  var rndEnd = delAddress().endPoint;
  var path =
    DistanceProject.GOOGLEMAPS(
      startCoord || rndStart,
      end || rndEnd,
      "minutes",
    ) + DistanceProject.GOOGLEMAPS(end || rndEnd, start || rndStart, "minutes");
  return path;
};

var onEdit = function (e) {
  if (e) {
    // stampRow(e);
    // stampRowItems(e);
    // stampRowRecieve(e);
    // stampRowInventoryCheck(e);
    // stampRowSales(e);
    searchEdit(e);
  }
};

var openRange = function (row, stampRow) {
  var ws = ssSheet();
  var range = ws.getRange(row, stampRow).setValue(new Date());
  return ss, ws, range;
};

var searchEdit = function (e) {
  if (e) {
    return authLogic(e.range.getA1Notation() !== "C6")
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
  }
};

var openR = function (row, stampRow) {
  var ws = ssSheet();
  var range = ws.getRange(row, stampRow).setValue(new Date());
  return range;
};

var stampRow = function (rowS1, colS1, colS2, e) {
  if (e) {
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
  }
};

var stampRowItems = function (e) {
  if (e) {
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
  }
};

var stampRowRecieve = function (e) {
  if (e) {
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
  }
};

var stampRowSales = function (e) {
  if (e) {
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
  }
};

var stampRowInventoryCheck = function (e) {
  if (e) {
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
  }
};

var startPoint = function (start, return_type) {
  var pathStart = DistanceProject.GOOGLEMAPS(
    start,
    "4510 Split Creek Dr, Douglasville, Ga, 30135",
    return_type,
  );
  return pathStart;
};
