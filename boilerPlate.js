// Compiled using dontime 1.0.0 (TypeScript 4.7.4)

var convertToJS = function (rndText) {
  console.log(
    formatTime(functionRegistry.time) +
      "\n" +
      arguments.callee.name +
      "\n!" +
      rndText +
      ", = " +
      !rndText,
  );
  if (rndText === "groceries") {
    var groceryList = globalThis.uniqueItemArray().map((dsc) => {
      return dsc["Description"];
    });
    var rndText = groceryList;
  } else if (rndText === "folders") {
    var rndText = functionRegistry.getFolderList();
  } else if (
    typeof rndText !== "undefined" &&
    [rndText].includes("rndText") === -1
  ) {
    var appList = [];
    for (var key in globalThis) {
      if (typeof globalThis[key] == "function") {
        appList.push(key);
      }
    }
    if (
      [appList].join().toLowerCase().includes([rndText].join("").toLowerCase())
    ) {
      rndText = globalThis[rndText].toString();
    }
  }
  var jsCodeS = "<?";
  var jsCodeE = "<?=";
  var jsCodeX = "<?!=";
  var jsCodeC = "?>";
  if (rndText.includes(jsCodeS)) {
    rndText = rndText.replace(/\<\?/g, "");
  }
  if (rndText.includes(jsCodeE)) {
    rndText = rndText.replace(/\<\?=/g, "");
  }
  if (rndText.includes(jsCodeX)) {
    rndText = rndText.replace(/\<\?\!\=/g, "");
  }
  if (rndText.includes(jsCodeC)) {
    rndText = rndText.replace(/\?\>/g, "");
  }
  return rndText;
};

var convertToObjects = function (rows, headings, time) {
  // console.log(
  //   formatTime(functionRegistry.time) +
  //     "\n" +
  //     arguments.callee.name +
  //     "\nrows is !" +
  //     !rows +
  //     ", = " +
  //     rows[0] +
  //     "\nheadings is !" +
  //     !headings +
  //     ", = " +
  //     headings +
  //     "\ntime is !" +
  //     !time +
  //     ", = " +
  //     time,
  // );
  var temp = rows.reduce(
    function (ctx, row) {
      ctx.objects.push(
        ctx.headings.reduce(function (item, heading, index) {
          var elaspeTime = new Date() - functionRegistry.time;
          item[heading] = row[index];
          return item;
        }, {}),
      );
      var myObj = {};
      headings.forEach(function (heading, index) {
        var elaspeTime = new Date() - functionRegistry.time;
        myObj[heading] = [row][index];
      });
      return ctx;
    },
    {
      objects: [],
      headings,
    },
  ).objects;
  return JSON.stringify(temp);
};
// console.log("convertToObjects: \nDeclaring temp = rows.reduce()")
// console.log("convertToObjects: \nrows.reduce(function (" + JSON.stringify(ctx), row + ")")
// console.log("that function: " + arguments.callee.caller.name + "\nthis function: " + arguments.callee.name + "\nforEach: " +  row[index] + "\nelaspeTime: " + elaspeTime)
// console.log("convertToObjects: \nitem[" + heading + "] = row[" + index + "];\nreturn " + item)
// console.log("that function: " + arguments.callee.caller.name + "\nthis function: " + arguments.callee.name + "\nforEach: " +  row[index] + "\nelaspeTime: " + elaspeTime)
// console.log("convertToObjects: \nmyObj[" + heading + "] = [" + row + "][" + index + "]\nreturn " + ctx)

// ---------------------------------------------------------------------------------------------------------------------
// The parameters ((class)) don't match the method signature for HtmlService.createTemplate.
// ---------------------------------------------------------------------------------------------------------------------

// ---------------------------------------------------------------------------------------------------------------------
var covertArr = function (objects, row, index) {
  console.log(
    functionRegistry.time +
      "\n" +
      arguments.callee.name +
      "\n!" +
      objects +
      ", = " +
      !objects,
  );
  var data = [];
  for (var key in objects) {
    // console.log(key)
    data.push([]);
    for (var val in objects[key]) {
      // console.log(objects[key])
      data[key].push(objects[key][val]);
      for (var i = 0; i < data.length; i++) {
        // console.log(data[i])
      }
    }
  }
  // console.log(data)
  var temp = mapValues(sliceValues(data, row), index);
  // console.log(temp)
  return temp;
}; //, cVar)

// The parameters (number[]) don't match the method signature for HtmlService.createTemplate.
// ---------------------------------------------------------------------------------------------------------------------

var covSheetArrays = function (myArray) {
  console.log(
    functionRegistry.time +
      "\n" +
      arguments.callee.name +
      "\n!" +
      myArray +
      ", = " +
      !myArray,
  );

  var sheetArray = [];
  for (var key in myArray) {
    sheetArray.push([]);
    for (var val in myArray[key]) {
      sheetArray[key].push([myArray[key][val]]);
    }
  }
  return sheetArray;
};

var getEventValues = function (title, startTime, endTime, series) {
  console.log(
    functionRegistry.time +
      "\n" +
      arguments.callee.name +
      "\n!" +
      title +
      ", = " +
      !title,
  );
  var eventsDataRange = sliceValues(getValues(), 1);
  for (var i = 0; i < eventsDataRange.length; i++) {
    var start = eventsDataRange[i][startTime];
    var end = eventsDataRange[i][endTime];
    var description = eventsDataRange[i][title];
    return addEventToCalendar(start, end, description, start);
  }
};

var getFolderValues = function () {
  return functionRegistry.getFolderList();
};

function objectOfS(keys, values, time) {
  /**
   * Creates an object of objects from key-value pairs.
   *
   * @param {Array} keys An array of keys for the outer objects.
   * @param {Array} values An array of arrays, where each inner array contains
   *                      key-value pairs for the inner objects.
   * @return {Object} An object of objects.
   */
  console.log(
    functionRegistry.time +
      "\n" +
      arguments.callee.name +
      "\nkeys is !" +
      !keys +
      ", = " +
      keys +
      "\nvalues is !" +
      !values +
      ", = " +
      values +
      "\ntime is !" +
      !time +
      ", = " +
      time,
  );
  if (keys.length !== values.length) {
    throw new Error("Number of keys must match the number of value arrays.");
  }
  return keys.reduce((acc, key, index) => {
    acc[key] = {};
    values[index].forEach(([innerKey, innerValue]) => {
      // if (
      //   innerKey === "args" &&
      //   typeof innerValue === "object" &&
      //   innerValue !== null
      // ) {
      //   if (innerValue.name && innerValue.parameters) {
      //     acc[key][innerKey] = [innerValue.name, ...innerValue.parameters];
      //   } else {
      //     acc[key][innerKey] = [innerValue.name];
      //   }
      // } else {
      acc[key][innerKey] = innerValue;
      // }
    });
    console.log(
      "values[index].forEach(([innerKey, innerValue]) => {acc[key][innerKey] = innerValue;}); ",
      acc,
    );
    return acc;
  }, {});
}

var randNum = function (namedVar) {
  console.log(
    functionRegistry.time +
      "\n" +
      arguments.callee.name +
      "\nnamedVar is !" +
      !namedVar +
      ", = " +
      namedVar,
  );
  if (namedVar) {
    var len = namedVar.length;
    var rnd = Math.random();
    var res = Math.floor(rnd * Math.floor(len));
    return res;
  }
};

var sliceValues = function (data, row) {
  // console.log(JSON.stringify(this["start"]) + "\n" + arguments.callee.name + "\n!ed, = " + !data)
  if (data) {
    data = data.slice(row);
    return data;
  }
};

var splitArr = function (rows, idx, query) {
  console.log(
    functionRegistry.time +
      "\n" +
      arguments.callee.name +
      "\nrows is ! " +
      !rows +
      ", = " +
      rows,
  );
  return rows.filter(function (a) {
    return a[idx] == query;
  });
};

var splitArrHeadings = function (test) {
  console.log(
    functionRegistry.time +
      "\n" +
      arguments.callee.name +
      "\n is ! " +
      !test +
      ", = " +
      test,
  );
  var headings = [];
  for (var key in test) {
    headings.push(key);
  }
  return headings;
};

var splitArrRange = function (test) {
  console.log(
    functionRegistry.time +
      "\n" +
      arguments.callee.name +
      "\n is ! " +
      !test +
      ", = " +
      test,
  );
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

var splitNoX = function (json, pushIndex) {
  console.log(
    functionRegistry.time +
      "\n" +
      arguments.callee.name +
      "\n is ! " +
      !content +
      ", = " +
      content,
  );
  // var json = content;
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
    console.log("Invalid request");
    return "Invalid request";
  } else if (typeof json === "object") {
    // console.log("JSON is an Object!")
    var tempArr = [];
    for (var obj in json) {
      // console.log(obj)
      tempArr.push([obj, json[obj]][pushIndex]);
      // console.log(tempArr)
    }
    console.log(tempArr);
    return tempArr;
  } else if (typeof json !== "object") {
    console.log("JSON is not an Object!");
    return json;
  }
};

var splitX = function (splitXContent, splitXXpath, splitXDelimiter) {
  console.log(
    functionRegistry.time +
      "\n" +
      arguments.callee.name +
      "\n is ! " +
      !splitXContent +
      ", = " +
      splitXContent,
  );
  if (splitXContent) {
    var json = splitXContent;
    if (splitXXpath && splitXDelimiter) {
      var pathArray = splitXXpath.split(splitXDelimiter);
      console.log(pathArray);
      for (var i = 0; i < pathArray.length; i++) {
        json = json[pathArray[i]];
        console.log(json);
      }
    }
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

var substanceVegas = function (
  index,
  loopLength,
  importedData,
  numHosts,
  minLength,
  maxLength,
) {
  console.log(
    functionRegistry.time +
      "\n" +
      arguments.callee.name +
      "\n is ! " +
      !index +
      ", = " +
      index +
      "\n is ! " +
      !loopLength +
      ", = " +
      loopLength +
      "\n is ! " +
      !importedData +
      ", = " +
      importedData,
  );
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
  var hostnames = [];
  var newArr = [];
  var i = index || 0;
  var l = loopLength || 1;
  if (numHosts && minLength && maxLength) {
    var lpLength =
      Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;
    for (i; i < numHosts; i++) {
      for (i, lpLength; i < lpLength; i++) {
        hostnames.push(
          arrData.sort(() => Math.random - 0.5)[
            Math.floor(Math.random() * arrData.length)
          ],
        );
      }
    }
  }
  for (i, l; i < l; i++) {
    newArr.push(
      arrData.sort(() => Math.random - 0.5)[
        Math.floor(Math.random() * arrData.length)
      ],
    );
  }
  var randomHost = hostnames.toString().replace(/'"/g, "").replace(/,/g, "");
  var randomWord = newArr.toString().replace(/'"/g, "").replace(/,/g, "");
  newArr
    .map((w) => {
      return w[0].toString();
    })
    .join("");
  return { substWord: randomWord, substHost: randomHost };
  console.log();
};

var testArray = function (content) {
  console.log(
    functionRegistry.time +
      "\n" +
      arguments.callee.name +
      "\n!" +
      content +
      ", = " +
      !content,
  );
  json = content;
  // console.log(json)
  // console.log(json.length)
  var pathArray = [];
  // console.log(pathArray);
  try {
    for (var i = 0; i < json.length; i++) {
      pathArray.push([JSON.stringify(i).split("/")]);
      // console.log(json[i])
    }
  } catch (error) {
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
  }
};

var testData = function (sourceData, time) {
  // console.log(
  //   formatTime(functionRegistry.time) +
  //     "\n" +
  //     arguments.callee.name +
  //     "\n is ! " +
  //     !sourceData +
  //     ", = " +
  //     sourceData +
  //     "\n is ! " +
  //     !time +
  //     ", = " +
  //     time,
  // );
  if (typeof time === "undefined") {
    var time = start;
  }
  if (typeof sourceData === "undefined") {
    var sourceData = ["0", "1", "2", "3", "4", "5", "6", "7"]
      .toString()
      .split("3");
  }
  var myArray = [];
  try {
    for (var row in sourceData) {
      var elaspeTime = functionRegistry.time;
      console.log(
        "testData: \nsourceData: " +
          sourceData +
          "\nrow: " +
          row +
          "\nelaspeTime: " +
          formatTime(elaspeTime),
      );
      myArray.push([]);
      for (var col in sourceData[row]) {
        // var elaspeTime = functionRegistry.time;
        console.log(
          "testData: \nmyArray - " +
            myArray +
            "[row - " +
            row +
            "]: " +
            myArray[row] +
            "\nsourceData - " +
            sourceData +
            "[row - " +
            row +
            "]: " +
            [sourceData][row] +
            "\ncol: " +
            col +
            "\nelaspeTime: " +
            formatTime(elaspeTime),
        );
        myArray[row].push(sourceData[row][col]);
        console.log(
          "testData: \nmyArray - " +
            myArray +
            "[row - " +
            row +
            "]: " +
            myArray[row] +
            "\nmyArray[row].push(sourceData - " +
            sourceData +
            "[row - " +
            row +
            "][col - " +
            col +
            "]): " +
            [sourceData][row][col] +
            "\nelaspeTime: " +
            formatTime(elaspeTime),
        );
      }
    }
    // console.log("testData: \nmyArray: " + spreadSheetCreate("myArraySheet",myArray,["arrayData"],myArray,time))
  } catch (err) {
    console.log("testData: \nerr: " + err.stack);
    return {
      testArray: err.stack,
    };
  }
  return {
    testArray: myArray,
  };
};
// console.log(" myArray ROW -:_ " + row + " sourceData ROW -:_ " + row + " sourceData COL -:_ " + col + " myArray -:_ " + myArray)

var trial = function () {
  // if ([0,1][Math.floor(Math.random() * (Math.floor([0,1].length)))] === 0)
  var trial = [];
  var judge = 0;
  var coinHead = 0;
  var coinTail = 0;
  var coin = [0, 1][Math.floor(Math.random() * Math.floor([0, 1].length))];
  if (coin === 1) {
    coinHead++;
    trial.push({
      heads: coin,
    });
  } else {
    coinTail++;
    trial.push({
      tails: coin,
    });
  }
  while (coinHead !== coinTail) {
    judge++;
    coin = [0, 1][Math.floor(Math.random() * Math.floor([0, 1].length))];
    if (coin === 1) {
      coinHead++;
      trial.push({
        heads: coin,
      });
    } else {
      coinTail++;
      trial.push({
        tails: coin,
      });
    }
    if (
      (trial[0]["heads"] && trial[judge]["tails"]) ||
      (trial[0]["tails"] && trial[judge]["heads"])
    ) {
      break;
    } else {
      for (var i = judge, l = trial.length; i < l; i++) {
        console.log(JSON.stringify(trial[judge]));
      }
    }
  }
  return trial;
};

var testObject = function (dataArray, fVarHeaders) {
  console.log(
    functionRegistry.time +
      "\n" +
      arguments.callee.name +
      "\n is ! " +
      !dataArray +
      ", = " +
      dataArray,
  );
  myRows = testData(dataArray);
  myObject = covObjects(myRows, FVar(fVarHeaders));
  return myObject;
};
