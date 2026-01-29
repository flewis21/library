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

/**
 * Creates a PDF invoice from a Google Doc template.
 * @param {object} orderData The data for the quote.
 * @return {string} The URL of the generated PDF file.
 */
function createInvoicePDF(orderData) {
  const templateDocId = "YOUR_INVOICE_TEMPLATE_DOC_ID_HERE"; // ⚠️ Replace with your Google Doc ID
  const outputFolderId = "YOUR_PDF_OUTPUT_FOLDER_ID_HERE"; // ⚠️ Replace with your Google Drive folder ID

  // Open the template document
  const doc = DocumentApp.openById(templateDocId);
  const body = doc.getBody();

  // Replace placeholders in the document with actual data
  // Example placeholders: {{date}}, {{car}}, {{total}}, {{delAddr}}, etc.
  body.replaceText("{{date}}", orderData.date);
  body.replaceText("{{car}}", orderData.car);
  body.replaceText("{{vinSTK}}", orderData.vinSTK);
  body.replaceText("{{delAddr}}", orderData.delAddr);
  body.replaceText("{{pickAddr}}", orderData.pickAddr);
  body.replaceText("{{lab}}", `$${parseFloat(orderData.lab).toFixed(2)}`);
  body.replaceText("{{gas}}", `$${parseFloat(orderData.gas).toFixed(2)}`);
  body.replaceText("{{total}}", `$${parseFloat(orderData.total).toFixed(2)}`);
  body.replaceText("{{delTime}}", orderData.delTime);

  // Save the temporary doc as a PDF
  const pdfFile = doc.saveAndClose().getAs("application/pdf");
  const folder = DriveApp.getFolderById(outputFolderId);
  const file = folder
    .createFile(pdfFile)
    .setName(`Invoice_${orderData.vinSTK}.pdf`);

  // Log and return the PDF file URL
  console.log("Invoice PDF created: " + file.getUrl());
  return file.getUrl();
}

// ⚠️ Note: You will need to create a Google Doc with placeholders like {{date}}, {{car}}, etc.,
// and a folder in Google Drive to store the PDFs.

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
  let ssToast = spreadSheet();
  if (ssToast !== null) {
    ssToast.toast("New record Created", "id: " + nextID);
  }
  var theVerdict = authLogic(idCell.getValue() + 1 === nextIDCell.getValue());
  return theVerdict
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

function pdfTimesheet() {
  saveAsPDFToFolder(
    "https://docs.google.com/spreadsheets/d/1-vNcN0vCLcXgMY9uwcKukUgv_4njggRZ6fqoZs-hBFE/edit#gid=138098962",
    "Timesheet",
  );
}

// function saveAsPDFToFolder(url, sheetname) {
//   const ss = urlSpreadSheet(url);
//   const sheets = ss.getSheets();
//   const ws = ssGetSheetBySpreadsheetUrl(url, sheetname);
//   const pdfFilename = ws.getSheetName();
//   const folders = DriveApp.getFolders();
//   const folderNames = folders.next().getName();
//   if (folderNames.includes(sheetname).valueOf() === false) {
//     folders.next().createFolder(sheetname);
//   }
//   for (var i = 0; i < sheets.length; i++) {
//     if (sheets[i].getName().includes(pdfFilename) === false) {
//       sheets[i].hideSheet();
//       console.log(
//         "Is " +
//           sheets[i].getName() +
//           " hidden?" +
//           " " +
//           sheets[i].isSheetHidden(),
//       );
//     } else {
//       sheets[i].showSheet();
//       console.log(
//         "Is " +
//           sheets[i].getName() +
//           " hidden?" +
//           " " +
//           sheets[i].isSheetHidden(),
//       );
//     }
//   }
//   pdfFolder = DriveApp.getFoldersByName(sheetname).next();
//   const blob = ws.getParent().getBlob().getAs("Application/pdf");
//   pdfFolder.createFile(blob).setName(pdfFilename);
// }

/**
 * Saves a single sheet from a spreadsheet as a PDF in a Google Drive folder.
 * Creates the folder if it doesn't exist.
 * @param {string} spreadsheetUrl The URL of the Google Spreadsheet.
 * @param {string} sheetname The name of the specific sheet to save as a PDF.
 * @return {string} The URL of the created PDF file.
 */
function saveAsPDFToFolder(spreadsheetUrl, sheetname) {
  try {
    spreadsheetUrl
      ? (spreadsheetUrl = spreadsheetUrl)
      : (spreadsheetUrl = SpreadsheetApp.openById(sheetsUrls()).getUrl());
    console.log("SpreadsheetApp.openByUrl(sheetsUrls().getUrl()) ");
    var ss = SpreadsheetApp?.openByUrl(spreadsheetUrl);
    sheetname ? (sheetname = sheetname) : (sheetname = ss.getSheetName());
    const sheet = ss.getSheetByName(sheetname);

    if (!sheet) {
      throw new Error(`Sheet "${sheetname}" not found in the spreadsheet.`);
    }

    // Get or create the folder
    let pdfFolder;
    const folders = DriveApp.getFoldersByName(sheetname);
    if (folders.hasNext()) {
      pdfFolder = folders.next();
    } else {
      pdfFolder = DriveApp.createFolder(sheetname);
    }

    // Generate the URL for the PDF of the single sheet
    const url =
      `https://docs.google.com/spreadsheets/d/${ss.getId()}/export?` +
      `format=pdf&` +
      `gid=${sheet.getSheetId()}&` +
      `portrait=true&` +
      `fitw=true&` +
      `size=A4`;

    // Fetch the PDF blob
    const token = ScriptApp.getOAuthToken();
    const response = UrlFetchApp.fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      muteHttpExceptions: true,
    });

    if (response.getResponseCode() !== 200) {
      throw new Error(
        `Failed to fetch PDF. Response code: ${response.getResponseCode()}`,
      );
    }

    const pdfBlob = response.getBlob().setName(`${sheetname}.pdf`);

    // Create the file in the folder and return its URL
    const pdfFile = pdfFolder.createFile(pdfBlob);

    Logger.log(`PDF created for sheet "${sheetname}" at: ${pdfFile.getUrl()}`);

    return pdfFile.getUrl();
  } catch (error) {
    Logger.log("Error in saveAsPDFToFolder: " + error.toString());
    throw error; // Re-throw to be handled by the caller
  }
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
  const formMiles = formWS.getRange("C17").getDisplayValue();
  const destMiles = JSON.stringify(formWS.getRange("C14").getDisplayValue());
  const startMiles = JSON.stringify(formWS.getRange("C12").getDisplayValue());
  console.log(
    typeof formMiles +
      " /// " +
      [formMiles].length +
      "//////\n " +
      destMiles +
      "/////////\n " +
      startMiles,
  );
  if ([formMiles].length === 1) {
    const delivery = Math.ceil(
      Math.ceil(minutePoint(destMiles, startMiles)) / 60,
    );
    const deliveryCell = formWS.getRange("C17");
    deliveryCell.setValue(delivery);
  }
  //   const idCell = formWS.getRange("C3");
  //   const id = idCell.getValue()
  //     return authLogic(id === "")? createNewRecord():
  // (function() {
  //   const cellFound = dataWS.getRange("K:K");
  //   cellFound.createTextFinder(id).matchCase(true).matchEntireCell(true).findNext();
  //     return authLogic(!cellFound)?
  // (function()
  //     {return})():
  // (function(){
  //   const nextIDCell = settingsWS.getRange("A2");
  //   const nextID = nextIDCell.getValue();
  //   const row = cellFound.getRow();
  //   const fieldValues = fieldRange.map(f => formWS.getRange(f).getValue());
  // fieldValues.push(id);
  //       console.log(fieldValues)
  //   // const findValues =
  // dataWS.getRange(row,1,1,fieldValues.length).setValues([fieldValues])
  // spreadSheet().toast("New record Created", "id: " + nextID);
  // })()
  // })()
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
