// Compiled using dontime 1.0.0 (TypeScript 4.7.4)

var convertToJS = function (rndText) {
  console.log(
    JSON.stringify(this["start"]) +
      "\n" +
      arguments.callee.name +
      "\n!ed, = " +
      !rndText,
  );
  if (typeof rndText === "undefined") {
    var rndText = `
      <? var form = formMaker([item].join("").toUpperCase(), "inventoryForms", allTime) ?>
      <? var formUrl = form.getPublishedUrl() ?>
      <? var jo = storeFunction() ?>
      <? form.setTitle(jo.length + " Items").setConfirmationMessage('Thanks for your feedback !!') ?>
      <? var coTable = jo.map((r)=>{ ?>
        <? var xItem = r["Description"] ?>
        <? if ([xItem].join("").toLowerCase().includes([item].join("").toLowerCase())) { ?>
          form.addPageBreakItem().setTitle(r["Description"])
          form.addSectionHeaderItem().setTitle("Quantity: " + r["QTY"] + " set of " + r["Pack Size"])
          form.addSectionHeaderItem().setTitle("Price: " + r["TOTAL COST"])
          form.addSectionHeaderItem().setTitle("Cost Per Piece: " + r["COST PER PIECE"])\n\n\n\n 
        <? } ?>
        <? }).toString().replace(/,/g, "") ?>
      <? var result = JSON.stringify(coTable); ?>
      <? baseUrl = getUrl(ScriptApp); ?>
      <? inventoryUrl = getUrl(ScriptApp); ?>
      <? financeUrl = getUrl(ScriptApp); ?>
    `;
  } else {
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
  return JSON.stringify(rndText);
};

var convertToObjects = function (rows, headings, time) {
  console.log(
    JSON.stringify(this["start"]) +
      "\n" +
      arguments.callee.name +
      "\n!headings, = " +
      !headings,
  );
  // console.log("convertToObjects: \nDeclaring temp = rows.reduce()")
  var temp = rows.reduce(
    function (ctx, row) {
      // console.log("convertToObjects: \nrows.reduce(function (" + JSON.stringify(ctx), row + ")")
      ctx.objects.push(
        ctx.headings.reduce(function (item, heading, index) {
          var elaspeTime = new Date() - time;
          // console.log("that function: " + arguments.callee.caller.name + "\nthis function: " + arguments.callee.name + "\nforEach: " +  row[index] + "\nelaspeTime: " + elaspeTime)
          // console.log("convertToObjects: \nitem[" + heading + "] = row[" + index + "];\nreturn " + item)
          item[heading] = row[index];
          return item;
        }, {}),
      );
      var myObj = {};
      headings.forEach(function (heading, index) {
        var elaspeTime = new Date() - time;
        // console.log("that function: " + arguments.callee.caller.name + "\nthis function: " + arguments.callee.name + "\nforEach: " +  row[index] + "\nelaspeTime: " + elaspeTime)
        // console.log("convertToObjects: \nmyObj[" + heading + "] = [" + row + "][" + index + "]\nreturn " + ctx)
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

// ---------------------------------------------------------------------------------------------------------------------
// The parameters ((class)) don't match the method signature for HtmlService.createTemplate.
// ---------------------------------------------------------------------------------------------------------------------

// ---------------------------------------------------------------------------------------------------------------------
var covertArr = function (objects, row, index) {
  console.log(
    JSON.stringify(this["start"]) +
      "\n" +
      arguments.callee.name +
      "\n!ed, = " +
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
    JSON.stringify(this["start"]) +
      "\n" +
      arguments.callee.name +
      "\n!ed, = " +
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
    JSON.stringify(this["start"]) +
      "\n" +
      arguments.callee.name +
      "\n!ed, = " +
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

var mapValues = function (data, index) {
  // console.log(JSON.stringify(this["start"]) + "\n" + arguments.callee.name + "\n!ed, = " + !data)
  if (data) {
    data = data.map(function (e) {
      return e[index].valueOf();
    });
    return data;
  }
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
  // console.log(time + "\n" + arguments.callee.name + "\n!keys, = " + !keys,)
  if (keys.length !== values.length) {
    throw new Error("Number of keys must match the number of value arrays.");
  }
  return keys.reduce((acc, key, index) => {
    acc[key] = {};
    values[index].forEach(([innerKey, innerValue]) => {
      acc[key][innerKey] = innerValue;
    });
    return acc;
  }, {});
}

var randNum = function (namedVar) {
  console.log(
    JSON.stringify(this["start"]) +
      "\n" +
      arguments.callee.name +
      "\n!ed, = " +
      !namedVar,
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
    JSON.stringify(this["start"]) +
      "\n" +
      arguments.callee.name +
      "\n!ed, = " +
      !rows,
  );
  return rows.filter(function (a) {
    return a[idx] == query;
  });
};

var splitArrHeadings = function (test) {
  console.log(
    JSON.stringify(this["start"]) +
      "\n" +
      arguments.callee.name +
      "\n!ed, = " +
      !test,
  );
  var headings = [];
  for (var key in test) {
    headings.push(key);
  }
  return headings;
};

var splitArrRange = function (test) {
  console.log(
    JSON.stringify(this["start"]) +
      "\n" +
      arguments.callee.name +
      "\n!ed, = " +
      !test,
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

var splitNoX = function (content, pushIndex) {
  console.log(
    JSON.stringify(this["start"]) +
      "\n" +
      arguments.callee.name +
      "\n!ed, = " +
      !content,
  );
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
  console.log(
    JSON.stringify(this["start"]) +
      "\n" +
      arguments.callee.name +
      "\n!ed, = " +
      !splitXContent,
  );
  if (splitXContent) {
    var json = splitXContent;
    var pathArray = splitXXpath.split(splitXDelimiter);
    console.log(pathArray);
    for (var i = 0; i < pathArray.length; i++) {
      json = json[pathArray[i]];
      console.log(json);
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

var substanceVegas = function (importedData, index, loopLength) {
  console.log(
    JSON.stringify(this["start"]) +
      "\n" +
      arguments.callee.name +
      "\n!ed, = " +
      !importedData,
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
  var newArr = [];
  var i = index || 0;
  var l = loopLength || 1;
  for (i, l; i < l; i++) {
    newArr.push(
      arrData.sort((a, b) => a - b)[Math.floor(Math.random() * arrData.length)],
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

var testArray = function (content) {
  console.log(
    JSON.stringify(this["start"]) +
      "\n" +
      arguments.callee.name +
      "\n!ed, = " +
      !content,
  );
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

var testData = function (sourceData, time) {
  console.log(
    JSON.stringify(this["start"]) +
      "\n" +
      arguments.callee.name +
      "\n!ed, = " +
      !sourceData,
  );
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
      var elaspeTime = new Date() - time;
      console.log(
        "testData: \nsourceData: " +
          sourceData +
          "\nrow: " +
          row +
          "\nelaspeTime: " +
          elaspeTime,
      );
      myArray.push([]);
      for (var col in sourceData[row]) {
        var elaspeTime = new Date() - time;
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
            elaspeTime,
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
            elaspeTime,
        );
      }
    }
    return console.log(
      "testData: \nmyArray: " +
        spreadSheetCreate("myArraySheet", myArray, "arrayData", myArray, time),
    );
  } catch (err) {
    console.log("testData: \nerr: " + err);
    return err;
  }
  return {
    testArray: myArray,
  };
};
// console.log(" myArray ROW -:_ " + row + " sourceData ROW -:_ " + row + " sourceData COL -:_ " + col + " myArray -:_ " + myArray)

var testObject = function (dataArray, fVarHeaders) {
  console.log(
    JSON.stringify(this["start"]) +
      "\n" +
      arguments.callee.name +
      "\n!ed, = " +
      !dataArray,
  );
  myRows = testData(dataArray);
  myObject = covObjects(myRows, FVar(fVarHeaders));
  return myObject;
};
