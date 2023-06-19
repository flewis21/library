// Compiled using dontime 1.0.0 (TypeScript 4.7.4)

// ---------------------------------------------------------------------------------------------------------------------
function apiRedeplaoy() {
  var scriptKey = PropertiesService.getScriptProperties().getProperties();
  console.log(scriptKey);
  return scriptKey;
}

// The parameters ((class)) don't match the method signature for HtmlService.createTemplate.
// ---------------------------------------------------------------------------------------------------------------------

// ---------------------------------------------------------------------------------------------------------------------
var companyName = function (companyNameUrl) {
  const companyNameSecData = epaA(AVar(companyNameUrl));
  const companyArray = testData(companyNameSecData);
  return companyArray;
};
// console.log(companyNameSecData)
// console.log(myObject)

var covArrays = function (objects) {
  const dataArray = [];
  for (var obj in objects) {
    console.log(obj);
    dataArray.push([objects[obj]]);
  }
  return dataArray;
};
// console.log(JSON.stringify(dataArray[obj]))
// console.log(dataArray)

var covertArr = function (objects) {
  var rows = [];
  for (var key in objects) {
    console.log(key);
    rows.push([]);
    for (var val in objects[key]) {
      console.log(objects[key]);
      rows[key].push(objects[key][val]);
      for (var i = 0; i < rows.length; i++) {
        console.log(rows[i]);
      }
    }
  }
  console.log(rows);
  var temp = mapValues(sliceValues(rows, 1), 0);
  console.log(temp);
  return temp;
}; //, cVar)

// The parameters (number[]) don't match the method signature for HtmlService.createTemplate.
// ---------------------------------------------------------------------------------------------------------------------

var contentApp = function (blob, argsObject) {
  const tmp = HtmlService.createTemplate(
    ContentService.createTextOutput(blob)
      .setMimeType(ContentService.MimeType.JSON)
      .getContent()
  );
  if (argsObject) {
    const keys = Object.keys(argsObject);
    keys.forEach(function (key) {
      tmp[key] = argsObject[key];
    });
  }
  return tmp
    .evaluate()
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
    .getContent();
};
// const tmp = ContentService.createTextOutput(JSON.stringify({ argsObject }));
// const argsObject = ContentService.createTextOutput({ args });
// if (argsObject) {
// if (ContentService.createTextOutput(JSON.stringify({ argsObject })).setMimeType(ContentService.MimeType.JSON).getContent()) {
// const keys = Object.keys(argsObject);
// tmp["list"] = htmlListArray;
// END IF
// Route[file] = argsObject
// return tmp.setMimeType(ContentService.MimeType.JSON).getContent()

var contentBlob = function (blob, argsObject) {
  var tmp = HtmlService.createTemplate(blob);
  if (argsObject) {
    var keys = Object.keys(argsObject);
    keys.forEach(function (key) {
      tmp[key] = argsObject[key];
    });
  }
  return tmp
    .evaluate()
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
    .getContent();
};
// const tmp = ContentService.createTextOutput(JSON.stringify({ argsObject }));
// const argsObject = ContentService.createTextOutput({ args });
// if (argsObject) {
// if (ContentService.createTextOutput(JSON.stringify({ argsObject })).setMimeType(ContentService.MimeType.JSON).getContent()) {
// const keys = Object.keys(argsObject);
// tmp = ContentService.createTextOutput(tmp.evaluate().getContent()).getContent()
// tmp["list"] = htmlListArray;
// END IF
// Route[file] = argsObject
// return tmp.setMimeType(ContentService.MimeType.JSON).getContent()

var contentTemplate = function (file, argsObject) {
  var tmp = HtmlService.createTemplateFromFile(file);
  if (argsObject) {
    var keys = Object.keys(argsObject);
    keys.forEach(function (key) {
      tmp[key] = argsObject[key];
    });
  }
  return tmp
    .evaluate()
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
    .getContent();
};
// const tmp = ContentService.createTextOutput(JSON.stringify({ argsObject }));
// const argsObject = ContentService.createTextOutput({ args });
// if (argsObject) {
// if (ContentService.createTextOutput(JSON.stringify({ argsObject })).setMimeType(ContentService.MimeType.JSON).getContent()) {
// const keys = Object.keys(argsObject);
// tmp = ContentService.createTextOutput(tmp.evaluate().getContent()).setMimeType(ContentService.MimeType.JAVASCRIPT).getContent()
// tmp["list"] = htmlListArray;
// END IF
// Route[file] = argsObject
// return tmp.setMimeType(ContentService.MimeType.JSON).getContent()

var contentFile = function (file, argsObject) {
  const tmp = HtmlService.createTemplateFromFile(
    ContentService.createTextOutput(file)
      .setMimeType(ContentService.MimeType.JSON)
      .getContent()
  );
  if (argsObject) {
    const keys = Object.keys(argsObject);
    keys.forEach(function (key) {
      tmp[key] = argsObject[key];
    });
  }
  return tmp
    .evaluate()
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
    .getContent();
};
// const tmp = ContentService.createTextOutput(JSON.stringify({ argsObject }));
// const argsObject = ContentService.createTextOutput({ args });
// if (argsObject) {
// if (ContentService.createTextOutput(JSON.stringify({ argsObject }))
//  .setMimeType(ContentService.MimeType.JSON).getContent())
//  {const keys = Object.keys(argsObject);
// tmp["list"] = htmlListArray;
// END IF
// Route[file] = argsObject
// return tmp.setMimeType(ContentService.MimeType.JSON).getContent()

var covObjects = function (rows, headings) {
  var temp = rows.map(function (row) {
    var myObj = {};
    headings.forEach(function (heading, index) {
      myObj[heading] = row[index];
    });
    return myObj;
  });
  return temp;
};

var driveUrls = function (fileX) {
  if (typeof fileX !== "undefined") {
    var file = DriveApp.getRootFolder().getFilesByName(fileX);
    if (file.hasNext()) {
      while (file.hasNext()) {
        return file.next().getUrl();
      }
    }
  } else {
    return;
  }
};

var fileManager = function (fileX, folder, time, content, mimeType) {
  if (typeof fileX !== "undefined") {
    var folderId = folderIdGlobal(folder, time);
    var file = DriveApp.getRootFolder().getFilesByName(fileX);
    var elaspeTime = new Date() - time;
    var myFile = file.next();
    var timeToExecute = maxTime - elaspeTime;
    console.log(
      "myFile: " +
        myFile.getName() +
        "\nelaspeTime: " +
        elaspeTime +
        "\ntimeToExecute: " +
        timeToExecute
    );
    if (myFile) {
      myFile.moveTo(DriveApp.getFolderById(folderId));
      return;
    } else {
      // DriveApp.getFolderById(folderId).createFile(fileX,content,mimeType)
      return dtlsMain(fileX);
    }
  } else {
    return;
  }
};

var sheetsFileManager = function (fileX, folder) {
  if (typeof fileX !== "undefined") {
    var file = DriveApp.getRootFolder().getFilesByName(fileX);
    if (file.hasNext()) {
      while (file.hasNext())
        var myFolder = DriveApp.getFolderById(folderIdGlobal(folder, time));
      {
        file.next().moveTo(myFolder);
        return file.next().getUrl();
      }
    }
  } else {
    return;
  }
};

function email() {
  var emails = validateFiles();
  var emailsCount = validateFiles().toString().split(",").length;
  var randomEmail = emails[Math.floor(Math.random() * emailsCount)];
  return randomEmail;
}

var folderIdGlobal = function (folderX, time) {
  var tree = DriveApp.getFolders();
  while (tree.hasNext()) {
    var elaspeTime = new Date() - time;
    var timeToExecute = maxTime - elaspeTime;
    var myId = tree.next();
    var id = myId.getId();
    var myFolder = DriveApp.getFolderById(id).getName();
    console.log(
      "myFolder: " +
        myFolder +
        "\nelaspeTime: " +
        elaspeTime +
        "\ntimeToExecute: " +
        timeToExecute
    );
    if (folderX === myFolder) {
      return id;
    }
  }
};

var getEventValues = function (title, startTime, endTime, series) {
  var eventsDataRange = sliceValues(getValues(), 1);
  for (var i = 0; i < eventsDataRange.length; i++) {
    var start = eventsDataRange[i][startTime];
    var end = eventsDataRange[i][endTime];
    var description = eventsDataRange[i][title];
    return addEventToCalendar(start, end, description, start);
  }
};

var getSize = function (url, params) {
  var content = UrlFetchApp.fetch(url, params);
  var res = content.getContentText();
  const lines = res.split(/\r?\n/);
  return {
    rows: lines.length - 1,
    columns: lines[0].split(",").length,
  };
};

var getScriptUrl = function () {
  return ScriptApp.getService().getUrl();
};

var getUrl = function (appInterface) {
  var url = appInterface.getService().getUrl();
  return url;
};

var include = function (file, argsObject) {
  const tmp = HtmlService.createHtmlOutputFromFile(file);
  if (argsObject) {
    const keys = Object.keys(argsObject);

    keys.forEach(function (key) {
      tmp[key] = argsObject[key];
    });

    // tmp["list"] = htmlListArray;
  } // END IF
  // Route[file] = argsObject
  return tmp
    .asTemplate()
    .evaluate()
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
    .getBlob()
    .getDataAsString();
};

var includeApp = function (blob, argsObject) {
  const tmp = HtmlService.createHtmlOutput(blob);
  if (argsObject) {
    const keys = Object.keys(argsObject);

    keys.forEach(function (key) {
      tmp[key] = argsObject[key];
    });

    // tmp["list"] = htmlListArray;
  } // END IF
  // Route[file] = argsObject
  return tmp
    .asTemplate()
    .evaluate()
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
};

var includeBlob = function (file, argsObject) {
  const temp = ContentService.createTextOutput(
    HtmlService.createTemplateFromFile(file).evaluate().getContent()
  );
  const tmp = HtmlService.createTemplate(
    temp.setMimeType(ContentService.MimeType.TEXT).getContent()
  );
  if (argsObject) {
    const keys = Object.keys(argsObject);
    keys.forEach(function (key) {
      tmp[key] = argsObject[key];
    });
    // tmp["list"] = htmlListArray;
  } // END IF
  // Route[file] = argsObject
  return tmp
    .evaluate()
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
};

var includeGSFile = function (file, argsArray) {
  return renderTemplate(`<?!= appJS ?>`, {
    appJS: async function () {
      const serverSide = function (func, args) {
        return new Promise((resolve, reject) => {
          google.script.run
            .withSuccessHandler((result) => {
              resolve(result);
            })
            .withFailureHandler((error) => {
              console.log(document.getElementById("test").innerHTML);
              reject(error);
            })
            .runAll(`boilerplate.${[func]}`, [args]);
        });
      };
      try {
        const content = await serverSide(file, argsArray);
        return content;
      } catch (error_1) {
        console.log(error_1);
      }
    },
  });
};

var includeGSBlob = function (blob, argsArray) {
  return renderTemplate(`<?!= appJS ?>`, {
    appJS: async function () {
      try {
        const content = await serverSide(blob, argsArray);
        return content;
      } catch (error_1) {
        console.log(error_1);
      }
    },
  });
};

var includeRunIt = () => {};

var includeJs = function (blob, argsObject) {
  const tmp = HtmlService.createTemplate(blob);
  if (argsObject) {
    const keys = Object.keys(argsObject);

    keys.forEach(function (key) {
      tmp[key] = argsObject[key];
    });

    // tmp["list"] = htmlListArray;
  } // END IF
  // Route[file] = argsObject
  return tmp
    .evaluate()
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
};

var lockRange = function (row, col) {
  var ws = ssSheet();
  var range = ws.getDataRange().getValues();
  var lock = range.map(openRange(row, col));
  return ss, ws, range, lock;
};

var mapValues = function (data, index) {
  var mapData = data.map(function (e) {
    return e[index].valueOf();
  });
  return mapData;
};

var myFunction = function (webApp, argsObject) {
  const tmp = HtmlService.createHtmlOutput(webApp);
  if (argsObject) {
    const keys = Object.keys(argsObject);

    keys.forEach(function (key) {
      tmp[key] = argsObject[key];
    });

    // tmp["list"] = htmlListArray;
  } // END IF
  // Route[file] = argsObject
  return tmp.setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
};

var openRange = function (row, stampRow) {
  var ws = ssSheet();
  var range = ws.getRange(row, stampRow).setValue(new Date());
  return ss, ws, range;
};

var prepareDataBrain = function (data, ratio = 29) {
  return data.map((row) => {
    const rings = Object.values(row).slice(0, 1);
    const values = Object.values(row).slice(1);
    authLogic(values[values.indexOf("M")] === "M")
      ? (function () {
          const male = values.splice(values.indexOf("M"), 1);
          values.splice(0, 0, male[0]);
        })()
      : authLogic(values[values.indexOf("F")] === "F")
      ? (function () {
          const female = values.splice(values.indexOf("F"), 1);
          values.splice(0, 0, female[0]);
        })()
      : authLogic(values[values.indexOf("I")] === "I")
      ? (function () {
          const inConclusive = values.splice(values.indexOf("I"), 1);
          values.splice(0, 0, inConclusive[0]);
        })()
      : (function () {
          return;
        })();
    values[0] = sexToNumber(values[0]);
    return {
      input: values,
      output: [rings[0] / ratio],
    };
  });
};

var productDist = function (
  epaAUrl,
  epaDUrl,
  epaDXpath,
  epaDDelimiter,
  dVar,
  eVar,
  fVar,
  iVar,
  jVar
) {
  const productDistEpaData =
    // epaA(
    // GVar(epaAUrl)
    epaD(AVar(epaDUrl), BVar(epaDXpath), CVar(epaDDelimiter));
  // [DVar(dVar)]
  // [EVar(eVar)]
  // [FVar(fVar)]
  // )
  // [HVar(hVar)]
  // [IVar(iVar)]
  // [JVar(jVar)]
  return productDistEpaData;
};

var productName = function (epaDaVar, epaDbVar, epaDcVar, dVar, eVar, fVar) {
  const productNameEpaData = epaD(
    AVar(epaDaVar),
    BVar(epaDbVar),
    CVar(epaDcVar)
  )[DVar(dVar)][EVar(eVar)][FVar(fVar)];
  return productNameEpaData;
};

var randomTickerXpath = function (rnum) {
  const rnumber = rnum;
  return rnumber;
};

function randomEmail() {
  var emails = validate();
  var emailsCount = validate().toString().split(",").length;
  var randomEmail = emails[Math.floor(Math.random() * emailsCount)];
  return randomEmail;
}

var randNum = function (namedVar) {
  var len = namedVar.length;
  var rnd = Math.random();
  var res = Math.floor(rnd * Math.floor(len));
  return res;
};

var randomSubstance = function (index, loopLength, importedData) {
  var arrData = [
    "e",
    "t",
    "a",
    "o",
    "n",
    "r",
    "i",
    "s",
    "h",
    "d",
    "l",
    "f",
    "c",
    "m",
    "u",
    "g",
    "y",
    "p",
    "w",
    "b",
    "v",
    "k",
    "xe",
    "j",
    "q",
    "z",
  ];
  var newArr = [];
  var i = index || 0;
  var l = loopLength || 1;
  // console.log(importedData.sort((a, b) => a - b))
  // console.log(arrData.sort((a, b) => a - b))
  for (i, l; i < l; i++) {
    if (typeof importedData !== "undefined") {
      newArr.push(
        importedData.sort((a, b) => a - b)[
          Math.floor(Math.random() * importedData.length)
        ]
      );
    } else {
      newArr.push(
        arrData.sort((a, b) => a - b)[
          Math.floor(Math.random() * arrData.length)
        ]
      );
    }
  }
  var sortNewArr = newArr.sort((a, b) => a - b)[
    Math.floor(Math.random() * newArr.length)
  ];
  // console.log(sortNewArr)
  // var thisNewArr = sortNewArr.map((w) => {
  // return w[0].toString()}
  // ).join("")
  // var randomWord = sortNewArr.toString().replace(/'"/g,"").replace(/,/g ,"")
  // console.log(thisNewArr)
  // console.log(randomWord)
  return sortNewArr;
  console.log();
};

var rndUrls = function () {
  var treeRoot = DriveApp.getRootFolder().getFiles();
  while (treeRoot.hasNext()) {
    var trueName = treeRoot.next();
    console.log(
      trueName.getName() +
        " || / || " +
        trueName.getName()[
          Object.keys(trueName.getName())[
            Math.floor(
              Math.random() * Math.floor(Object.keys(trueName.getName()).length)
            )
          ]
        ]
    );
    var truArray = [];
    for (var i = 0, l = trueName.getName().length; i < l; i++) {
      console.log(truArray.push([trueName.getName()][i]));
    }
    if (trueName.getName()) return trueName.getUrl();
  }
};

function rule() {
  var today = new Date();
  var todayString = today.toDateString() + " - " + today.toTimeString();
  return todayString;
}

function scriptQuit() {
  return;
}

var sexToNumber = function (sex) {
  switch (sex) {
    case "F":
      return 0;
    case "M":
      return 1;
    default:
      return 0.5;
  }
};

function shareDrive() {
  var dApp = DriveApp;
  var folderIter = dApp.getFolders();
  var driveFiles = [];
  while (folderIter.hasNext()) {
    var folder = folderIter.next();
    var filesIter = folder.getFiles();
    while (filesIter.hasNext()) {
      var file = filesIter.next();
      driveFiles.push([file.getName()]);
    }
  }
  authLogic(driveFiles !== "")
    ? (function () {
        //return driveFiles
        console.log(driveFiles);
      })()
    : (function () {
        console.log("Drive has no files");
      })();
}

var sliceValues = function (data, row) {
  var values = data.slice(row);
  return values;
};

var splitArr = function (rows, idx, query) {
  return rows.filter(function (a) {
    return a[idx] == query;
  });
};

var splitArrHeadings = function (test) {
  var headings = [];
  for (var key in test) {
    headings.push(key);
  }
  return headings;
};

var splitArrRange = function (test) {
  var headings = [];
  for (var key in test) {
    headings.push(key);
  }
  var values = [];
  for (var headings in test) {
    values.push(test[headings]);
  }
  return values;
};
// var rows = [];
// for (var row in values)
//   {rows.push([]);
//   for (var col in values[row])
//     {rows[row].push(values[row][col]);}

var splitNoX = function (content, pushIndex) {
  var json = content;
  // console.log(json);
  var pathArray = [];
  // console.log(pathArray);
  for (var i = 0; i < json.length; i++) {
    pathArray.push(JSON.stringify(i).split("/"));
    // console.log(json[i])
  }
  // console.log(pathArray);
  for (var i = 0; i < json.length; i++) {
    json = rowsToReturn([json], JSON.stringify(i));
    // console.log(pathArray[i])
  }
  // return json
  if (typeof json === "undefined") {
    return "Invalid request";
  } else if (typeof json === "object") {
    // console.log("JSON is an Object!")
    var tempArr = [];
    for (var obj in json) {
      // console.log(obj)
      tempArr.push([obj, json[obj]][pushIndex]);
      // console.log(tempArr)
    }
    // console.log(tempArr)
    return tempArr;
  } else if (typeof json !== "object") {
    console.log("JSON is not an Object!");
    return json;
  }
};

var splitX = function (splitXContent, splitXXpath, splitXDelimiter) {
  var json = splitXContent;
  var pathArray = splitXXpath.split(splitXDelimiter);
  console.log(pathArray);
  for (var i = 0; i < pathArray.length; i++) {
    json = json[pathArray[i]];
    console.log(json);
  }
  if (typeof json === "undefined") {
    return "Invalid request";
  } else if (typeof json === "object") {
    var tempArr = [];
    for (var obj in json) {
      tempArr.push([obj, json[obj]]);
    }
    // console.log(tempArr)
    return tempArr;
  } else if (typeof json !== "object") {
    return json;
  }
};

var substanceVegas = function (importedData, index, loopLength) {
  var arrData = importedData || [
    "e",
    "E",
    "t",
    "T",
    "a",
    "A",
    "o",
    "O",
    "n",
    "N",
    "r",
    "R",
    "i",
    "I",
    "s",
    "S",
    "h",
    "H",
    "d",
    "D",
    "l",
    "L",
    "f",
    "F",
    "c",
    "C",
    "m",
    "M",
    "u",
    "U",
    "g",
    "G",
    "y",
    "Y",
    "p",
    "P",
    "w",
    "W",
    "b",
    "B",
    "v",
    "V",
    "k",
    "K",
    "x",
    "X",
    "j",
    "J",
    "q",
    "Q",
    "z",
    "Z",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "_",
  ];
  var newArr = [];
  var i = index || 0;
  var l = loopLength || 1;
  for (i, l; i < l; i++) {
    newArr.push(
      arrData.sort((a, b) => a - b)[Math.floor(Math.random() * arrData.length)]
    );
  }
  var randomWord = newArr.toString().replace(/'"/g, "").replace(/,/g, "");
  newArr
    .map((w) => {
      return w[0].toString();
    })
    .join("");
  return randomWord;
  console.log();
};

var tabField = function (url, xpath, index) {
  var test = dataHeadings(splitX(urlDataSource(url), xpath))[index];
  return test;
};

var tagBuilder = function (content) {
  const htmlBody = contentApp(content);
  return htmlBody;
};

var tempArrayNoX = function (url, indexParsed, index) {
  const jsonData = urlDataSource(url);
  const testIndex = splitNoX(JSON.parse(sliceValues(jsonData, indexParsed)));
  // const arrayObjData = testArray(testIndex)
  // const objTest = forArray(testIndex);
  // const dataHeaders = splitNoX(sliceValues(objTest, index))

  console.log(testIndex);
};

var tempArrayX = function (url, indexParsed, xpath, delimiter, index) {
  const jsonData = urlDataSource(url);
  const testIndex = splitX(
    JSON.parse(sliceValues(jsonData, indexParsed)),
    xpath,
    delimiter
  );
  // const arrayObjData = testArray(testIndex)
  const objTest = forArray(testIndex);
  const dataHeaders = splitX(sliceValues(objTest, index), xpath, delimiter);

  console.log(testIndex);
};

var testArray = function (content) {
  json = content;
  // console.log(json)
  // console.log(json.length)
  var pathArray = [];
  // console.log(pathArray);
  for (var i = 0; i < json.length; i++) {
    pathArray.push([JSON.stringify(i).split("/")]);
    // console.log(json[i])
  }
  // console.log(pathArray);
  // var json = content;
  // var tempObj = dataRowIndex(json, 0, 0)
  //   json = forData(tempObj)
  // var jsonTestObj = dataRowIndex(json[1], 0, 0)
  // console.log(jsonTestObj)
  // var tempArr = [];
  // for (var obj in content) {
  //     tempArr.push([obj, content]);
  // }
  return pathArray;
  // console.log(tempArr)
};

var testData = function (sourceData) {
  try {
    var myArray = [];
    for (var row in sourceData) {
      console.log(row);
      myArray.push([]);
      for (var col in sourceData[row]) {
        console.log(col);
        myArray[row].push(sourceData[row][col]);
      }
    }
    return myArray;
    console.log(myArray);
  } catch (err) {
    console.log(err);
    return err;
  }
};
// console.log(" myArray ROW -:_ " + row + " sourceData ROW -:_ " + row + " sourceData COL -:_ " + col + " myArray -:_ " + myArray)

var untestedData = function (arrData) {
  const tmpArray = Object.entries(arrData);
  const tmpKeys = Object.keys(tmpArray);
  const tmpValues = Object.values(tmpArray);
  let objTmpParts = {};
  for (var i = 0, l = tmpKeys.length; i < l; i++) {
    objTmpParts[tmpValues[i][0]] = tmpValues[i][1];
  }
  return objTmpParts;
  let objParts = {};
  for (var i = 0; i < [arrData].length; i++) {
    //Object.fromEntries(JSON.stringify(
    var heldKey = [arrData].keys();
    for (const key of heldKey) {
      return key;
    }
    var keyLog = heldKey.next().value;
    for (var [key, { keyLog }] of Object.entries(arrData[i])) {
      console.log(key);
      objParts[keyLog] = key;
    } //.map(entry => [entry[1]]))
  }
  console.log(objParts);
  return objParts;
};

var testObject = function (dataArray, fVarHeaders) {
  myRows = testData(dataArray);
  myObject = covObjects(myRows, FVar(fVarHeaders));
  return myObject;
};

function userSite() {
  var website = SitesApp.getSites();
  console.log(website);
}

var widgetData = function (dataSource, headings) {
  var values = dataSource;
  var temp = values.map(function (row) {
    var myObj = {};
    headings.forEach(function (heading, index) {
      myObj[heading] = row[index];
    });
    return myObj;
  });
  return temp;
  // console.log(temp)
};
