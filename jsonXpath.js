var csvDataSource = function (url, params) {
  console.log(
    Math.floor((maxTime - (new Date() % (1000 * 60))) / 1000) +
      "\n" +
      arguments.callee.name +
      "\n!" +
      url +
      ", = " +
      !url,
  );
  if (url) {
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
    return {
      myCSV: result,
    };
    //JSON
  }
};

var dataRowIndex = function (data, row, index) {
  console.log(
    Math.floor((maxTime - (new Date() % (1000 * 60))) / 1000) +
      "\n" +
      arguments.callee.name +
      "\n!" +
      row +
      ", = " +
      !row,
  );
  var sliceObj = JSON.parse(sliceValues(data, row));
  var converted = covArrays(sliceObj);
  // var sliceArray = covArrays(converted)
  // var tempArrays = forArray(sliceArray)
  // var tempObj = rowsToReturn(sliceArray, index);
  // return tempObj
  console.log(converted);
};

var dtlsCapital = function (url) {
  console.log(
    Math.floor((maxTime - (new Date() % (1000 * 60))) / 1000) +
      "\n" +
      arguments.callee.name +
      "\n!" +
      url +
      ", = " +
      !url,
  );
  if (url) {
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
  } else {
    return {};
  }
};

var forArray = function (arrayData) {
  console.log(
    Math.floor((maxTime - (new Date() % (1000 * 60))) / 1000) +
      "\n" +
      arguments.callee.name +
      "\n!" +
      arrayData +
      ", = " +
      !arrayData,
  );
  var array = [];
  for (var i = 0; i < arrayData.length; i++) {
    let a = splitNoX(arrayData, [arrayData[i]].values());
    array.push(a);
  }
  return array;
  // console.log(array)
};

var forHeaders = function (objectData) {
  console.log(
    Math.floor((maxTime - (new Date() % (1000 * 60))) / 1000) +
      "\n" +
      arguments.callee.name +
      "\n!" +
      objectData +
      ", = " +
      !objectData,
  );
  for (var i = 0; i < objectData.length; i++) {
    json = objectHeaders(objectData, JSON.stringify(i));
  }
  return json;
  // console.log(json)
};

var forObjects = function (data, delimiter) {
  console.log(
    Math.floor((maxTime - (new Date() % (1000 * 60))) / 1000) +
      "\n" +
      arguments.callee.name +
      "\n!" +
      data +
      ", = " +
      !data,
  );
  for (var i = 0; i < data.length; i++) {
    json = covObjects(
      objectHeaders(data, JSON.stringify(i))[1],
      objectHeaders(data, JSON.stringify(i))[0],
    );
  }
  return json;
  // console.log(json[1])
};

var getSize = function (url, params) {
  console.log(
    Math.floor((maxTime - (new Date() % (1000 * 60))) / 1000) +
      "\n" +
      arguments.callee.name +
      "\n!" +
      url +
      ", = " +
      !url,
  );
  if (url) {
    var content = UrlFetchApp.fetch(url, params);
    var res = content.getContentText();
    const lines = res.split(/\r?\n/);
    return {
      rows: lines.length - 1,
      columns: lines[0].split(",").length,
    };
  } else {
    return {};
  }
};

var jsonDataX = function (data) {
  console.log(
    Math.floor((maxTime - (new Date() % (1000 * 60))) / 1000) +
      "\n" +
      arguments.callee.name +
      "\n!" +
      data +
      ", = " +
      !data,
  );
  // headings = dataHeadings(data);
  const arrayN = testData(data);
  const noHeaders = sliceValues(arrayN, 0);
  const returnData = rowsToReturn(noHeaders);
  return returnData;
};

async function jsonFormatter() {
  console.log(
    Math.floor((maxTime - (new Date() % (1000 * 60))) / 1000) +
      "\n" +
      arguments.callee.name,
  );
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
  console.log(
    Math.floor((maxTime - (new Date() % (1000 * 60))) / 1000) +
      "\n" +
      arguments.callee.name +
      "\n!" +
      json +
      ", = " +
      !json,
  );
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
  console.log(
    Math.floor((maxTime - (new Date() % (1000 * 60))) / 1000) +
      "\n" +
      arguments.callee.name +
      "\n!" +
      jsonXpathDataRange +
      ", = " +
      !jsonXpathDataRange,
  );
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
  console.log(
    Math.floor((maxTime - (new Date() % (1000 * 60))) / 1000) +
      "\n" +
      arguments.callee.name +
      "\n!" +
      searchString +
      ", = " +
      !searchString,
  );
  const videoSearch = [
    urlDataSource(searchString, null, {
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

var objectHeaders = function (object, index) {
  console.log(
    Math.floor((maxTime - (new Date() % (1000 * 60))) / 1000) +
      "\n" +
      arguments.callee.name +
      "\n!" +
      object +
      ", = " +
      !object,
  );
  var headerRow = object[index].map(function (val) {
    return JSON.stringify(val).toString().toLowerCase();
  });
  return headerRow;
};

var rowsToReturn = function (data, index) {
  console.log(
    Math.floor((maxTime - (new Date() % (1000 * 60))) / 1000) +
      "\n" +
      arguments.callee.name +
      "\n!" +
      data +
      ", = " +
      !data,
  );
  if (data) {
    var rowsToReturn = data.filter(function (a) {
      return a[index];
    });
    return {
      myData: rowsToReturn,
    };
  }
};

var tabData = function (url, xpath, headers) {
  console.log(
    Math.floor((maxTime - (new Date() % (1000 * 60))) / 1000) +
      "\n" +
      arguments.callee.name +
      "\n!" +
      headers +
      ", = " +
      !headers,
  );
  var test = covObjects(
    jsonDataX(sliceValues(jsonXpath(url, xpath), 0)),
    dataHeadings(testData(headers)),
  );
  return test;
};

var tabField = function (url, xpath, index, time) {
  console.log(
    Math.floor((maxTime - (new Date() % (1000 * 60))) / 1000) +
      "\n" +
      arguments.callee.name +
      "\n!" +
      url +
      ", = " +
      !url,
  );
  if (url) {
    var data = [urlDataSource(url), { muteHttpExceptions: true }, time];
    var test = dataHeadings(splitX(data, xpath))[index];
    return {
      myTab: test,
    };
  }
};

var tabIndex = function (url, xpath, index, headers) {
  console.log(
    Math.floor((maxTime - (new Date() % (1000 * 60))) / 1000) +
      "\n" +
      arguments.callee.name +
      "\n!" +
      headers +
      ", = " +
      !headers,
  );
  var test = covObjects(
    jsonDataX(sliceValues(jsonXpath(url, xpath), 0)[index]),
    dataHeadings(testData(headers)),
  );
  return test;
};

var tempArrayNoX = function (url, indexParsed, index) {
  console.log(
    Math.floor((maxTime - (new Date() % (1000 * 60))) / 1000) +
      "\n" +
      arguments.callee.name +
      "\n!" +
      url +
      ", = " +
      !url,
  );
  const jsonData = urlDataSource(url);
  const testIndex = splitNoX(JSON.parse(sliceValues(jsonData, indexParsed)));
  // const arrayObjData = testArray(testIndex)
  // const objTest = forArray(testIndex);
  // const dataHeaders = splitNoX(sliceValues(objTest, index))
  console.log(testIndex);
};

var tempArrayX = function (url, indexParsed, xpath, delimiter, index) {
  console.log(
    Math.floor((maxTime - (new Date() % (1000 * 60))) / 1000) +
      "\n" +
      arguments.callee.name +
      "\n!" +
      url +
      ", = " +
      !url,
  );
  const jsonData = urlDataSource(url);
  try {
    const testIndex = splitX(
      JSON.parse(sliceValues(jsonData, indexParsed)),
      xpath,
      delimiter,
    );
  } catch (error) {
    return;
  }
  // const arrayObjData = testArray(testIndex)
  const objTest = forArray(testIndex);
  const dataHeaders = splitX(sliceValues(objTest, index), xpath, delimiter);
  console.log(testIndex);
};

var udsCache = function (content) {
  console.log(
    Math.floor((maxTime - (new Date() % (1000 * 60))) / 1000) +
      "\n" +
      arguments.callee.name +
      "\n!" +
      content +
      ", = " +
      !content,
  );
  var data = JSON.parse(content);
  if (data) {
    for (var key in data) {
      var foo = data[key]["title"];
      var bar = data[key];
      var cached = sCache.get(foo);
      if (cached != null) {
        return cached;
      }
      var expiration = 600;
      sCache.putAll(bar, expiration);
    }
  }
};

var urlDataSource = function (cokey, url, time, xpath, maxRetries = 3) {
  console.log(
    Math.floor((maxTime - (new Date() % (1000 * 60))) / 1000) +
      "\n" +
      urlDataSource.name +
      "\n!" +
      cokey +
      ", = " +
      !cokey,
  );
  if (typeof time === "undefined") {
    time = Math.floor((maxTime - (new Date() % (1000 * 60))) / 1000);
  }
  if (typeof cokey === "undefined") {
    var cokey = "url data";
  }
  let response;
  let location;
  let retries = 0;
  let delay = 1000;
  try {
    response = UrlFetchApp.fetch(url, {
      followRedirects: false, // Prevent automatic redirects
      muteHttpExceptions: true,
    });
  } catch (e) {
    Logger.log("Error fetching URL: ", e.toString());
    console.error("Error fetching URL: ", e.toString());
  }
  try {
    if (response) {
      var res = response.getResponseCode();
      if (res) {
        if (res === 429) {
          retries++;
          delay += 2;
          Utilities.sleep(delay + Math.random() * 500);
          Logger.log(`Rate limit hit, retrying in ${delay} ms`);
          while (retries < maxRetries) {
            try {
              response = UrlFetchApp.fetch(url, {
                followRedirects: false, // Prevent automatic redirects
                muteHttpExceptions: true,
              });
            } catch (error) {
              Logger.log("Error fetching data: " + error);
              retries++;
              delay += 2;
              Utilities.sleep(delay);
            }
          }
          Logger.log("Max retries reached, failed to fetch data.");
        }
      } else {
        if (res >= 300 && res < 400) {
          // Redirect occurred
          location = response.getHeaders().Location;
          var content = UrlFetchApp.fetch(location, {
            followRedirects: true,
            muteHttpExceptions: true,
          }).getContentText();
        } else {
          // No redirect or other error
          var content = response.getContentText();
        }
      }
    }
  } catch (e) {
    Logger.log("Error resolving TinyURL: " + e.toString());
    console.error("Error resolving TinyURL: ", e.toString());
  }
  var seoArray = seoPastTime([cokey].join(""), time);
  console.log(
    "urlDataSource: \nvar " +
      seoArray.playList +
      " = seoPastTime(" +
      [cokey].join(""),
    time + ")",
  );
  // return { uti: seoArray.playList };
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
