var csvDataSource = function (url, params) {
  console.log(
    functionRegistry.time +
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
    functionRegistry.time +
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
    functionRegistry.time +
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
    functionRegistry.time +
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
    functionRegistry.time +
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
    functionRegistry.time +
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
    functionRegistry.time +
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
    functionRegistry.time +
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
  console.log(functionRegistry.time + "\n" + arguments.callee.name);
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
    functionRegistry.time +
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
    formatTime(functionRegistry.time) +
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
    functionRegistry.time +
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
    functionRegistry.time +
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
    functionRegistry.time +
      "\n" +
      arguments.callee.name +
      "\n is ! " +
      !data +
      ", = " +
      data,
  );
  if (data) {
    var rowsToReturn = Array.isArray(data)
      ? data.filter(function (a) {
          return a[index];
        })
      : data;
    return {
      myData: rowsToReturn,
    };
  }
};

var tabData = function (url, xpath, headers) {
  console.log(
    functionRegistry.time +
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
    functionRegistry.time +
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
    functionRegistry.time +
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
    functionRegistry.time +
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
    functionRegistry.time +
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
    functionRegistry.time +
      "\n" +
      arguments.callee.name +
      "\n!" +
      content +
      ", = " +
      !content,
  );
  try {
    var data = JSON.parse(content);
  } catch (error) {
    console.error("Syntax Error: ", error.toString());
  }
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

var urlDataSource = function (url, cokey, time, xpath, maxRetries = 3) {
  console.log(
    functionRegistry.time +
      "\n" +
      urlDataSource.name +
      "\n!" +
      cokey +
      ", = " +
      !cokey,
  );
  if (typeof time === "undefined") {
    time = functionRegistry.time;
  }
  if (typeof cokey === "undefined") {
    var rndStr = globalThis.uniqueItemArray();
    var rndStrObj =
      rndStr[Math.floor(Math.random() * Math.floor(rndStr.length))];
    var cokey = rndStrObj["Description"];
  }

  if (typeof url === "undefined" || !isValidUrl(url).hostname) {
    var rndFol = furtFolder();
    var url = fileBrowser(rndFol).url;
  }
  let response;
  let location;
  let retries = 0;
  let delay = 1000;
  try {
    response = UrlFetchApp.fetch(url, {
      followRedirects: true, // Allow automatic redirects
      muteHttpExceptions: true,
    });
  } catch (e) {
    Logger.log("Error fetching URL: ", e.toString());
    console.error("Error fetching URL: ", e.toString());
  }
  try {
    if (response) {
      var res = response.getResponseCode();
      console.log(`HTTP response code: ${res}`);
      if (res) {
        if (res === 429) {
          retries++;
          delay += 2;
          Utilities.sleep(delay + Math.random() * 500);
          Logger.log(`Rate limit hit, retrying in ${delay} ms`);
          while (retries < maxRetries) {
            try {
              response = UrlFetchApp.fetch(url, {
                followRedirects: true, // Allow automatic redirects
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
        } else {
          var conText = response.getContentText();
          if (res >= 300 && res < 400) {
            location = response.getHeaders().Location;
            var content = UrlFetchApp.fetch(location, {
              followRedirects: true,
              muteHttpExceptions: true,
            }).getContentText();
          } else {
            if (
              typeof response.getResponseCode === "function" &&
              typeof response.getContentText === "function"
            ) {
              const contentType = response.getHeaders()["Content-Type"] || "";
              const responseText = response.getContentText();

              if (contentType.includes("application/json")) {
                try {
                  var content = {
                    type: "jsonData",
                    data: JSON.parse(responseText),
                  };
                } catch (e) {
                  var content = {
                    type: "text",
                    data: `Error parsing JSON from URL fetch: ${responseText}`,
                  };
                }
              } else if (contentType.includes("text/html")) {
                var content = { type: "html", data: responseText };
              } else {
                var content = { type: "text", data: responseText };
              }
            }
            // var content = JSON.parse(conText);
          }
        }
      }
    }
  } catch (e) {
    Logger.log("Error resolving TinyURL: " + e.toString());
    console.error("Error resolving TinyURL: ", e.toString());
  }
  if (content && xpath) {
    try {
      var pathSegments = xpath.split("/");
      let current = content;
      for (var segment of pathSegments) {
        if (segment) {
          if (current && current.hasOwnProperty(segment)) {
            current = current[segment];
          } else if (Array.isArray(current) && !isNaN(parseInt(segment))) {
            var index = parseInt(segment);
            if (index >= 0 && index < current.length) {
              current = current[index];
            } else {
              console.warn(`XPath index out of bounds: ${segment}`);
              return null;
            }
          } else {
            console.warn(`XPath segment not found: ${segment}`);
            return null;
          }
        }
      }
      console.log("Successfully applied basic XPath-like navigation.");
      return current;
    } catch (e) {
      Logger.log("Error applying XPath: " + e.toString());
      console.error("Error applying XPath: ", e.toString());
    }
  }
  var seoArray = seoPastTime([cokey].join(""), time);
  var listArr = JSON.stringify(
    Array.isArray(seoArray.playList)
      ? seoArray.playList.map((id) => {
          var arrLi = "http://youtube.com/watch?v=" + id;
          return arrLi;
        })
      : seoArray.playList,
  );

  console.log(
    "urlDataSource: \nvar " + listArr + " = seoPastTime(" + [cokey].join(""),
    time + ")",
  );
  // return { uti: seoArray.playList };
  return content || listArr;

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
