const fieldRange = [
  "C8",
  "F8",
  "C10",
  "F10",
  "C12",
  "F12",
  "F14",
  "C18",
  "C17",
  "C14",
];

function createNewRecord() {
  const settingsWS = ssGetSheetBySpreadsheetUrl(
    "https://docs.google.com/spreadsheets/d/1-vNcN0vCLcXgMY9uwcKukUgv_4njggRZ6fqoZs-hBFE/edit#gid=138098962",
    "Invoice Settings",
  );
  const formWS = ssGetSheetBySpreadsheetUrl(
    "https://docs.google.com/spreadsheets/d/1-vNcN0vCLcXgMY9uwcKukUgv_4njggRZ6fqoZs-hBFE/edit#gid=138098962",
    "Invoice Form",
  );
  const dataWS = ssGetSheetBySpreadsheetUrl(
    "https://docs.google.com/spreadsheets/d/1-vNcN0vCLcXgMY9uwcKukUgv_4njggRZ6fqoZs-hBFE/edit#gid=138098962",
    "General Work Invoice",
  );
  const delivery = Math.ceil(
    Math.ceil(
      minutePoint(
        formWS.getRange("C14").getValue(),
        formWS.getRange("C12").getValue(),
      ),
    ) / 60,
  );
  const deliveryCell = formWS.getRange("C17");
  deliveryCell.setValue(delivery);
  const fieldValues = fieldRange.map((f) => formWS.getRange(f).getValue());
  const nextIDCell = settingsWS.getRange("A2");
  console.log(delivery);
  const nextID = nextIDCell.getValue();
  fieldValues.push(nextID);
  // console.log(fieldValues);
  dataWS.appendRow(fieldValues);
  const idCell = formWS.getRange("C3");
  idCell.setValue(nextID);
  nextIDCell.setValue(nextID + 1);
  spreadSheet().toast("New record Created", "id: " + nextID);
  return authLogic(idCell.getValue() + 1 === nextIDCell.getValue())
    ? (function () {
        const searchCell = formWS.getRange("C6");
        fieldRange.map((f) => formWS.getRange(f).clearContent());
        idCell.clearContent();
        deliveryCell.clearContent();
        searchCell.clearContent();
      })()
    : (function () {
        return;
      })();
}

function saveRecord() {
  const settingsWS = ssGetSheetBySpreadsheetUrl(
    "https://docs.google.com/spreadsheets/d/1-vNcN0vCLcXgMY9uwcKukUgv_4njggRZ6fqoZs-hBFE/edit#gid=138098962",
    "Invoice Settings",
  );
  const formWS = ssGetSheetBySpreadsheetUrl(
    "https://docs.google.com/spreadsheets/d/1-vNcN0vCLcXgMY9uwcKukUgv_4njggRZ6fqoZs-hBFE/edit#gid=138098962",
    "Invoice Form",
  );
  const dataWS = ssGetSheetBySpreadsheetUrl(
    "https://docs.google.com/spreadsheets/d/1-vNcN0vCLcXgMY9uwcKukUgv_4njggRZ6fqoZs-hBFE/edit#gid=138098962",
    "General Work Invoice",
  );
  const idCell = formWS.getRange("C3");
  const id = idCell.getValue();
  return authLogic(id === "")
    ? createNewRecord()
    : (function () {
        const cellFound = dataWS.getRange("K:K");
        cellFound
          .createTextFinder(id)
          .matchCase(true)
          .matchEntireCell(true)
          .findNext();
        return authLogic(!cellFound)
          ? (function () {
              return;
            })()
          : (function () {
              const nextIDCell = settingsWS.getRange("A2");
              const nextID = nextIDCell.getValue();
              const row = cellFound.getRow();
              const fieldValues = fieldRange.map((f) =>
                formWS.getRange(f).getValue(),
              );
              fieldValues.push(id);
              console.log(fieldValues);
              // const findValues =
              dataWS
                .getRange(row, 1, 1, fieldValues.length)
                .setValues([fieldValues]);
              spreadSheet().toast("New record Created", "id: " + nextID);
            })();
      })();
}

function searchRecords() {
  const formWS = ssGetSheetBySpreadsheetUrl(
    "https://docs.google.com/spreadsheets/d/1-vNcN0vCLcXgMY9uwcKukUgv_4njggRZ6fqoZs-hBFE/edit#gid=138098962",
    "Invoice Form",
  );
  const dataWS = ssGetSheetBySpreadsheetUrl(
    "https://docs.google.com/spreadsheets/d/1-vNcN0vCLcXgMY9uwcKukUgv_4njggRZ6fqoZs-hBFE/edit#gid=138098962",
    "General Work Invoice",
  );
  const idCell = formWS.getRange("C3");
  const searchCell = formWS.getRange("C6");
  const searchValue = searchCell.getValue();
  const data = dataWS.getRange("A2:L").getValues();
  const recordsFound = data.filter((r) => r[11] == searchValue);
  authLogic(recordsFound.length !== 0)
    ? idCell.setValue(recordsFound[0][10])
    : "";
  fieldRange.forEach((f, i) => formWS.getRange(f).setValue(recordsFound[0][i]));
}

function userClicked() {
  const formWS = ssGetSheetBySpreadsheetUrl(
    "https://docs.google.com/spreadsheets/d/1-vNcN0vCLcXgMY9uwcKukUgv_4njggRZ6fqoZs-hBFE/edit#gid=138098962",
    "Invoice Form",
  );
  const search = formWS.getRange("C6").getValue();
  return authLogic(typeof search !== "undefined")
    ? (function () {
        const records = searchRecords();
        return records;
      })()
    : (function () {
        return;
      })();
}

function userSearch(findMe) {
  const dataWS = ssGetSheetBySpreadsheetUrl(
    "https://docs.google.com/spreadsheets/d/1-vNcN0vCLcXgMY9uwcKukUgv_4njggRZ6fqoZs-hBFE/edit#gid=138098962",
    "General Work Invoice",
  );
  const data = sliceValues(dataWS.getDataRange().getValues(), 1);
  const carsList = data.map(function (r) {
    return r[1];
  });
  const jobsList = data.map(function (r) {
    return r[2];
  });
  const vinsList = data.map(function (r) {
    return r[3];
  });
  const filtersList = data.map(function (r) {
    return r[11];
  });
  const carPosition = carsList.indexOf(findMe);
  const jobPosition = jobsList.indexOf(findMe);
  console.log(vinsList);
  const vinPosition = vinsList.indexOf(findMe);
  const filterPosition = filtersList.indexOf(findMe);
  return authLogic(carPosition > -1)
    ? (function () {
        console.log(carsList);
        return filtersList[carPosition];
      })()
    : (function () {
        return authLogic(jobPosition > -1)
          ? (function () {
              console.log(jobsList);
              return filtersList[jobPosition];
            })()
          : (function () {
              return authLogic(vinPosition > -1)
                ? (function () {
                    console.log(vinsList);
                    return filtersList[vinPosition];
                  })()
                : (function () {
                    console.log("Error. Nothing found!");
                    return;
                  })();
            })();
      })();
}

function pdfTimesheet() {
  saveAsPDFToFolder(
    "https://docs.google.com/spreadsheets/d/1-vNcN0vCLcXgMY9uwcKukUgv_4njggRZ6fqoZs-hBFE/edit#gid=138098962",
    "Timesheet",
  );
}

function saveAsPDFToFolder(url, sheetname) {
  const ss = urlSpreadSheet(url);
  const sheets = ss.getSheets();
  const ws = ssGetSheetBySpreadsheetUrl(url, sheetname);
  const pdfFilename = ws.getSheetName();
  const folders = DriveApp.getFolders();
  const folderNames = folders.next().getName();
  if (folderNames.includes(sheetname).valueOf() === false) {
    folders.next().createFolder(sheetname);
  }
  for (var i = 0; i < sheets.length; i++) {
    if (sheets[i].getName().includes(pdfFilename) === false) {
      sheets[i].hideSheet();
      console.log(
        "Is " +
          sheets[i].getName() +
          " hidden?" +
          " " +
          sheets[i].isSheetHidden(),
      );
    } else {
      sheets[i].showSheet();
      console.log(
        "Is " +
          sheets[i].getName() +
          " hidden?" +
          " " +
          sheets[i].isSheetHidden(),
      );
    }
  }
  pdfFolder = DriveApp.getFoldersByName(sheetname).next();
  const blob = ws.getParent().getBlob().getAs("Application/pdf");
  pdfFolder.createFile(blob).setName(pdfFilename);
}
