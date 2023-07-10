var coUtility = function (rndClient) {
  var client = rndClient;
  var uniqueCo = [];
  if (typeof client !== "undefined") {
    var coName = allInvestors(client.toString().toLowerCase());
  } else {
    var coName = allInvestors();
  }
  if (typeof coName["cik"] === "undefined") {
    uniqueCo.push({
      rndTitle: coName["title"],
      videoItem: coName["rndVideoId"],
      videoItemUrl: coName["videoUrl"],
      playlistArr: coName["videoPlaylist"],
    });
  } else {
    uniqueCo.push({
      rndCik: coName["cik"],
      rndTicker: coName["ticker"],
      rndTitle: coName["title"],
      videoItem: coName["rndVideoId"],
      videoItemUrl: coName["videoUrl"],
      playlistArr: coName["videoPlaylist"],
      secUrl: coName["edgarUrl"],
    });
  }
  return uniqueCo;
};

var csvDataSource = function (url, params) {
  var content = UrlFetchApp.fetch(url, params);
  var res = content.getContentText();
  // console.log(res[0])
  var lines = res.split("\n");

  var result = [];

  // NOTE: If your columns contain commas in their values, you'll need
  // to deal with those before doing the next step
  // (you might convert them to &&& or something, then covert them back later)
  // jsfiddle showing the issue https://jsfiddle.net/
  var headers = lines[0].split(",");

  for (var i = 1; i < lines.length; i++) {
    var obj = {};
    var currentline = lines[i].split(",");

    for (var j = 0; j < headers.length; j++) {
      obj[headers[j]] = currentline[j];
    }

    result.push(obj);
  }

  //return result; //JavaScript object
  return result; //JSON
};

var dataRowIndex = function (data, row, index) {
  var sliceObj = JSON.parse(sliceValues(data, row));
  var converted = covArrays(sliceObj);
  // var sliceArray = covArrays(converted)
  // var tempArrays = forArray(sliceArray)
  // var tempObj = rowsToReturn(sliceArray, index);
  // return tempObj
  console.log(converted);
};

var dtlsCapital = function (url) {
  const videoSearch = [
    urlDataSource(url, null, { muteHttpExceptions: true, mode: "no-cors" }),
  ];
  const table = videoSearch
    .slice(videoSearch.indexOf("SERP"))
    .toString()
    .split("SERP");
  const pong = table.map((ping) => {
    return ping.substring(0);
  });
  return pong.toString().split(",");
};

var forArray = function (arrayData) {
  var array = [];
  for (var i = 0; i < arrayData.length; i++) {
    let a = splitNoX(arrayData, [arrayData[i]].values());
    array.push(a);
  }
  return array;
  // console.log(array)
};

var forHeaders = function (objectData) {
  for (var i = 0; i < objectData.length; i++) {
    json = objectHeaders(objectData, JSON.stringify(i));
  }
  return json;
  // console.log(json)
};

var forObjects = function (data, delimiter) {
  for (var i = 0; i < data.length; i++) {
    json = covObjects(
      objectHeaders(data, JSON.stringify(i))[1],
      objectHeaders(data, JSON.stringify(i))[0],
    );
  }
  return json;
  // console.log(json[1])
};

var jsonDataX = function (data) {
  // headings = dataHeadings(data);
  const arrayN = testData(data);
  const noHeaders = sliceValues(arrayN, 0);
  const returnData = rowsToReturn(noHeaders);
  return returnData;
};

async function jsonFormatter() {
  var res = UrlFetchApp.fetch(
    "https://ordspub.epa.gov/ords/pesticides/ppls/66551-1",
  );
  var content = res.getContentText();
  try {
    var json = JSON.parse(content);
    console.log(typeof json);
    var xpath = ["items/0/sites"];
    var pathArray = xpath.map((ppls) => {
      return ppls.split("/");
    });
    for (var i = 0; i < pathArray.length; i++) {
      json = json[pathArray[i]];
    }
    if (typeof json === "undefined") {
      return res.getContentText();
    } else if (typeof json === "object") {
      var tempArr = [];
      for (var obj in json) {
        tempArr.push([obj, json[obj]]);
        console.log(tempArr);
      }
      return JSON.stringify(tempArr);
    }
  } catch (err) {
    return res.getContentText();
  }
}
//console.log(obj)
//console.log(json[obj])
//console.log(pathArray);
//console.log(xpath);

var jsonINIT = function (json) {
  /**
   * Imports JSON data
   * @param url URL of JSON data as string
   * @param xpath simplified xpath as string
   *
   *  @customfunction
   */
  try {
    var tempArr = [];
    for (var obj in json) {
      tempArr.push([obj, json[obj]]);
    }
    return tempArr;
  } catch (err) {
    console.log(err + " -:- " + url);
  }
};
//}
// var res = UrlFetchApp.fetch(url);
// var content = res.getContentText();
//var json = urlDataSource(url, xpath, params);
// if (typeof (json) === "undefined")
// {try {var res = UrlFetchApp.fetch(url);
//       // console.log(UrlFetchApp.fetch(url));
//       return contentApp(res.getContentText());
//       // console.log(res.getContentText());}
//   catch (err) {return "Invalid request";}}
// else if (typeof (json) === "object")
// {var pathArray = xpath.split("/");
// for (var i = 0; i < pathArray.length; i++)
//   {json = json[pathArray[i]];}
// else if (typeof (json) !== "object")
// {return "You have attempted to open " + typeof json + " as JSON";}
// console.log(url)
// var res = UrlFetchApp.fetch(url);
// console.log(UrlFetchApp.fetch(url));
// return contentApp(res.getContentText());
// console.log(res.getContentText());

var jsonXpath = function (jsonXpathDataRange) {
  var jsonXpathNoHeaders = [jsonXpathDataRange].map(function (val) {
    return val.toString().toLowerCase();
  });
  var jsonXpathRowsToReturn = jsonXpathNoHeaders.filter(function (a) {
    return a[0];
  });
  return jsonXpathRowsToReturn;
};
// var jsonXpathHeadings = jsonXpathDataRange.slice(0,1);
// var jsonXpathOutputQuery = (covObjects(jsonXpathRowsToReturn, jsonXpathHeadings));
// var dataXpath = [urlDataSource(url, params, xpath)];
// var dataString = JSON.stringify(dataXpath);
// var objXpath = JSON.parse(dataString);
// console.log(objXpath);
// var jsonXpathDataRange = testData(data);
// var jsonValuesXpath = dataXpath;
// for (var row in jsonValuesXpath)
//   {jsonXpathDataRange.push([]);
//   for (var col in jsonValuesXpath[row])
//     {jsonXpathDataRange[row].push(jsonValuesXpath[row][col]);}}

var needCapital = function (searchString) {
  const videoSearch = [
    urlDataSource(`https://flewis21.github.io/foobar`, null, {
      muteHttpExceptions: true,
    }),
  ];
  const table = videoSearch
    .slice(videoSearch.indexOf("SERP"))
    .toString()
    .split("SERP");
  const pong = table.map((ping) => {
    return ping.substring(0);
  });
  return pong.toString().split(",");
};

var needUtility = function (rndClient, time) {
  var client = rndClient;
  var uniqueCo = [];
  if (typeof client !== "undefined") {
    var seoTitle = seoSheet(client, time).keyWords;
    var improvedTitle = seoTitle.map((r) => {
      for (var i = 0, l = r.length; i < l; i++) {
        // var elaspeTime = new Date() - time
        // console.log("r[i]: " + r[i] + "\nelaspeTime: " + elaspeTime)
        if (r.indexOf(",") === -1 && r.indexOf("can\u0027t") === -1) {
          if (i == 1) {
            break;
          }
        }
      }
      return r;
    });
    var titleSlice = improvedTitle.slice(1);
    var title2 = titleSlice.map((l) => {
      return l;
    });
    if (title2.length > 0) {
      var rndTitle2 =
        title2[Math.floor(Math.random() * Math.floor(title2.length))];
      var coName = allTime(rndTitle2.toLowerCase(), time);
    } else {
      var coName = allTime(null, time);
    }
  } else {
    var coName = allTime(null, time);
  }
  if (typeof coName["cik"] === "undefined") {
    uniqueCo.push({
      rndTitle: coName["title"],
      videoItem: coName["rndVideoId"],
      videoItemUrl: coName["videoUrl"],
      playlistArr: coName["videoPlaylist"],
    });
  } else {
    uniqueCo.push({
      rndCik: coName["cik"],
      rndTicker: coName["ticker"],
      rndTitle: coName["title"],
      videoItem: coName["rndVideoId"],
      videoItemUrl: coName["videoUrl"],
      playlistArr: coName["videoPlaylist"],
      secUrl: coName["edgarUrl"],
    });
  }
  return uniqueCo;
};

var objectHeaders = function (object, index) {
  var headerRow = object[index].map(function (val) {
    return JSON.stringify(val).toString().toLowerCase();
  });
  return headerRow;
};

var rowsToReturn = function (data, index) {
  var rowsToReturn = data.filter(function (a) {
    return a[index];
  });
  return rowsToReturn;
};

var tabData = function (url, xpath, headers) {
  var test = covObjects(
    jsonDataX(sliceValues(jsonXpath(url, xpath), 0)),
    dataHeadings(testData(headers)),
  );
  return test;
};

var tabIndex = function (url, xpath, index, headers) {
  var test = covObjects(
    jsonDataX(sliceValues(jsonXpath(url, xpath), 0)[index]),
    dataHeadings(testData(headers)),
  );
  return test;
};

var urlDataSource = function (url, params, time, xpath) {
  var res = UrlFetchApp.fetch(url, params);
  var content = res.getContentText();
  return content;
  // if (typeof content === "object")
  // {var json = Utilities.jsonParse(content);
  // var pathArray = content.split("\n");
  // for (var i = 0; i < pathArray.length; i++)
  //   {console.log(typeof pathArray)
  //   json = json[pathArray[i]];}
  //     var helpJSON = [json].entries().next()
  // console.log([helpJSON].keys().next())
  // return json}
  // else
  // {console.log(typeof content)
  // console.log(res.getContentText());
  // }
};
