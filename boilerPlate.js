// Compiled using dontime 1.0.0 (TypeScript 4.7.4)

function apiRedeplaoy() {
  var scriptKey = PropertiesService.getScriptProperties().getProperties();
  console.log(scriptKey);
  return scriptKey;
}

var companyName = function (companyNameUrl) {
  const companyNameSecData = epaA(AVar(companyNameUrl));
  const companyArray = testData(companyNameSecData);
  return companyArray;
  // console.log(companyNameSecData)
  // console.log(myObject)
};

var contentApp = function (blob, argsObject) {
  const tmp = HtmlService.createTemplate(
    ContentService.createTextOutput(blob)
      .setMimeType(ContentService.MimeType.JSON)
      .getContent()
  );
  // const tmp = ContentService.createTextOutput(JSON.stringify({ argsObject }));
  // const argsObject = ContentService.createTextOutput({ args });
  // if (argsObject) {
  // if (ContentService.createTextOutput(JSON.stringify({ argsObject })).setMimeType(ContentService.MimeType.JSON).getContent()) {
  // const keys = Object.keys(argsObject);
  if (argsObject) {
    const keys = Object.keys(argsObject);

    keys.forEach(function (key) {
      tmp[key] = argsObject[key];
    });

    // tmp["list"] = htmlListArray;
  } // END IF
  // Route[file] = argsObject
  // return tmp.setMimeType(ContentService.MimeType.JSON).getContent()
  return tmp
    .evaluate()
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
    .getContent();
};

var contentBlob = function (blob, argsObject) {
  var tmp = HtmlService.createTemplate(blob);
  // const tmp = ContentService.createTextOutput(JSON.stringify({ argsObject }));
  // const argsObject = ContentService.createTextOutput({ args });
  // if (argsObject) {
  // if (ContentService.createTextOutput(JSON.stringify({ argsObject })).setMimeType(ContentService.MimeType.JSON).getContent()) {
  // const keys = Object.keys(argsObject);
  if (argsObject) {
    var keys = Object.keys(argsObject);

    keys.forEach(function (key) {
      tmp[key] = argsObject[key];
      // tmp = ContentService.createTextOutput(tmp.evaluate().getContent()).getContent()
    });

    // tmp["list"] = htmlListArray;
  } // END IF
  // Route[file] = argsObject
  // return tmp.setMimeType(ContentService.MimeType.JSON).getContent()
  return tmp
    .evaluate()
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
    .getContent();
};

var contentTemplate = function (file, argsObject) {
  var tmp = HtmlService.createTemplateFromFile(file);
  // const tmp = ContentService.createTextOutput(JSON.stringify({ argsObject }));
  // const argsObject = ContentService.createTextOutput({ args });
  // if (argsObject) {
  // if (ContentService.createTextOutput(JSON.stringify({ argsObject })).setMimeType(ContentService.MimeType.JSON).getContent()) {
  // const keys = Object.keys(argsObject);
  if (argsObject) {
    var keys = Object.keys(argsObject);

    keys.forEach(function (key) {
      tmp[key] = argsObject[key];
      // tmp = ContentService.createTextOutput(tmp.evaluate().getContent()).setMimeType(ContentService.MimeType.JAVASCRIPT).getContent()
    });

    // tmp["list"] = htmlListArray;
  } // END IF
  // Route[file] = argsObject
  // return tmp.setMimeType(ContentService.MimeType.JSON).getContent()
  return tmp
    .evaluate()
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
    .getContent();
};

var contentFile = function (file, argsObject) {
  const tmp = HtmlService.createTemplateFromFile(
    ContentService.createTextOutput(file)
      .setMimeType(ContentService.MimeType.JSON)
      .getContent()
  );
  // const tmp = ContentService.createTextOutput(JSON.stringify({ argsObject }));
  // const argsObject = ContentService.createTextOutput({ args });
  // if (argsObject) {
  // if (ContentService.createTextOutput(JSON.stringify({ argsObject })).setMimeType(ContentService.MimeType.JSON).getContent()) {
  // const keys = Object.keys(argsObject);
  if (argsObject) {
    const keys = Object.keys(argsObject);

    keys.forEach(function (key) {
      tmp[key] = argsObject[key];
    });

    // tmp["list"] = htmlListArray;
  } // END IF
  // Route[file] = argsObject
  // return tmp.setMimeType(ContentService.MimeType.JSON).getContent()
  return tmp
    .evaluate()
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
    .getContent();
};

var covArrays = function (
  objects //, cVar)
) {
  const dataArray = [];
  for (var obj in objects) {
    dataArray.push([objects[obj]]);
    // console.log(JSON.stringify(dataArray[obj]))
  }
  return dataArray;
  // console.log(dataArray)
};

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
};

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

function email() {
  var emails = validate();
  var emailsCount = validate().toString().split(",").length;
  var randomEmail = emails[Math.floor(Math.random() * emailsCount)];
  return randomEmail;
}

var epaA = function (epaAUrl) {
  const epaA = splitNoX(urlDataSource(epaAUrl));
  return epaA;
};

var epaB = function (epaBurl, epaC, uniA, epaBdelimiter) {
  const epaB = splitX(urlDataSource(epaBurl + epaC), uniA, epaBdelimiter);
  return epaB;
};

var epaC = function (epaCurl, epaD, uniA, epaCdelimiter) {
  const epaC = splitX(urlDataSource(epaCurl + epaD), uniA, epaCdelimiter);
  return epaC;
};

var epaD = function (epaDurl, epaDXpath, epaDdelimiter) {
  const epaD = splitX(urlDataSource(epaDurl), epaDXpath, epaDdelimiter);
  return epaD;
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

var getUrl = function (appInterface) {
  var url = appInterface.getService().getUrl();
  return url;
};

function includeGS(file, argsArray) {
  return {
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
  };
}

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
  const temp = ContentService.createTextOutput(file);
  const tmp = HtmlService.createTemplate(
    temp.setMimeType(ContentService.MimeType.TEXT)
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

var renderFile = function (file, argsObject) {
  const tmp = HtmlService.createTemplateFromFile(file);
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

var renderTemplate = function (blob, argsObject) {
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

var tabField = function (url, xpath, index) {
  var test = dataHeadings(splitX(urlDataSource(url), xpath))[index];
  return test;
};

var tagBuilder = function (content) {
  const htmlBody = contentApp(content);
  return renderTemplate(htmlBody);
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

var testData = function (data) {
  try {
    var myArray = [];
    var sourceData = data;
    for (var row in sourceData) {
      // console.log("row " + row)
      myArray.push([]);
      for (var col in sourceData[row]) {
        // console.log("col " + col)
        myArray[row].push(sourceData[row][col]);
        // console.log("myArray " + row + " " + "sourceData " + row + " " + col)
      }
    }
    return myArray;
    console.log(myArray);
  } catch {
    return;
  }
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
