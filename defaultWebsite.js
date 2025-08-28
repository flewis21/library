// is the conveyance of power and authority an objective, measurable quantity?

// No, the conveyance of power and authority is not inherently an objective, measurable quantity. Here's why:

// Subjectivity in Definition: Power and authority themselves are complex concepts with no single, universally agreed-upon definition. What constitutes "power" or "authority" can vary significantly depending on the context, the individuals involved, and the values held by the observer.
// Qualitative Aspects: The impact of power and authority often involves qualitative factors like influence, respect, legitimacy, and the consent of those subject to it. These are difficult to quantify precisely.
// Contextual Dependence: The effectiveness of the conveyance of power and authority depends heavily on the specific context – the social, political, and cultural environment in which it occurs.
// However, there are some aspects that can be measured or assessed to some degree:

// Visible Demonstrations: Observable actions like issuing commands, making decisions, controlling resources, or enforcing rules can provide evidence of the exercise of power.
// Compliance and Obedience: The extent to which others comply with the directives of an authority figure can be observed and, to some extent, measured.
// Social Influence: The ability to influence the beliefs, attitudes, or behaviors of others can be assessed through surveys, observations, or other social science research methods.
// In conclusion: While some aspects of the conveyance of power and authority can be measured or assessed, it's crucial to acknowledge the inherent limitations and the significant role of subjective interpretation in understanding these complex phenomena.

var appSort = function (numIndex, time) {
  // console.log(JSON.stringify(this["start"]) + "\n" + arguments.callee.name + "\n!numIndex = " + !numIndex)
  var titleArray = [];
  for (var key in globalThis) {
    // console.log("that function: " + arguments.callee.caller.name + "\nthis function: " + arguments.callee.name + "\nkey: " +  uniqueKey[key]["title"] + "\nelapsedTime: " + elapsedTime)
    if (typeof globalThis[key] == "function") {
      titleArray.push(key);
    }
  }
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
    "x",
    "j",
    "q",
    "z",
  ];
  var numLen = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    numIndex,
  ];
  var rndNumLen = numLen[Math.floor(Math.random() * Math.floor(numLen.length))];
  var freqArray = [];
  var i = 0;
  var l = arrData.length;
  for (i, l; i < l; i++) {
    titleArray.sort((a, b) => {
      // return console.log("that function: " + arguments.callee.caller.name + "\nthis function: " + arguments.callee.name + "\nsort: " +  a + " OR " + b + "\nelapsedTime: " + elapsedTime)
      if (a[0].toLowerCase() === arrData[rndNumLen || i]) {
        if (freqArray.indexOf(a) > -1) {
          return;
        } else {
          freqArray.push(a);
        }
      }
    });
  }
  // console.log(freqArray)
  return freqArray;
};

var defaultWebsite = function (e) {
  // const Route = {};
  // Route.path = function(route, callback) {
  //       Route[route] = callback
  // }
  var webApp;

  // var query = e.parameter['q'];

  // var product = e.parameter['product'];

  // var result = e.parameter['result'];

  // var xpath = e.parameter['xpath'];
  //  baseUrl = getUrl(ScriptApp);
  // Route.path("default", renderTemplate);
  // Route["default"]("<h1>Hello World!</h1>")
  switch (e.parameter["webApp"]) {
    // case "dlsindex": // <!------------------------------Main Website Index Page-----------------------------!>
    //     webApp = HtmlService.createTemplateFromFile("dlsindex");
    //     webApp.url = getUrl(ScriptApp);
    //     return contentApp(webApp)//:contentFile('uiAccess');
    //         case "help": // <!-------------------------------Main Help Page-----------------------------!>
    //             webApp = HtmlService.createTemplateFromFile("help");
    //             webApp.url = getUrl(ScriptApp);
    //             return webApp.evaluate().setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
    //         case "about": // <!---------------------------Main About Page----------------------------------!>
    //             webApp = HtmlService.createTemplateFromFile("about");
    //             webApp.url = getUrl(ScriptApp);
    //             return webApp.evaluate().setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
    //         case "sipoc": // <!-------------------------------Google Docs Page---------------------------------!>
    //             webApp = HtmlService.createTemplateFromFile("sipoc");
    //             webApp.url = getUrl(ScriptApp);
    //             return webApp.evaluate().setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
    //         case "newChartOfHistory": // <!--------------------Google Site Page----------------------------!>
    //             webApp = HtmlService.createTemplateFromFile("newChartOfHistory");
    //             webApp.url = getUrl(ScriptApp);
    //             return webApp.evaluate().setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
    //         case "home": // <!-----------------------Boilerplate WebApp Index Pages------------------------!>
    //             webApp = HtmlService.createTemplateFromFile("index");
    //             webApp.url = getUrl(ScriptApp);
    //             return webApp.evaluate().setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
    //         case "blog": // <!--------------------Boilerplate WebApp Index Pages-----------------------!>
    //             webApp = HtmlService.createTemplateFromFile("sidebar");
    //             webApp.url = getUrl(ScriptApp);
    //             return webApp.evaluate().setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
    //         case "iframeAPI": // <!-------------------Boilerplate WebApp Index Pages------------------------!>
    //             webApp = HtmlService.createTemplate("\n                    <?!= include(\"index\"); ?>\n                    <div class=\"container row s1 valign-wrapper video-container black darken-4\">\n                      <div id=\"player1\"></div>\n                    </div>\n                    <div class=\"container row s2 valign-wrapper video-container black darken-4\">\n                      <div id=\"player2\"></div>\n                    </div>\n                    <div class=\"container row s2 valign-wrapper video-container black darken-4\">\n                      <div id=\"player3\"></div>\n                    </div>\n                  ");
    //             webApp.url = getUrl(ScriptApp);
    //             return webApp.evaluate().setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
    //         case "jsonIframeAPI": // <!-----------------Boilerplate WebApp Index Pages-----------------------!>
    //             webApp = HtmlService.createTemplate('<?!= include("test"); ?>');
    //             webApp.url = getUrl(ScriptApp);
    //             return webApp.evaluate().setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
    case "iframeJSON": // <!---------------------JSON API Results--------------------------!>
      webApp = HtmlService.createHtmlOutput(
        jsonINIT(
          "https://www.clubhouse.com/@fabianlewis?utm_medium=ch_profile&utm_campaign=lhTUtHb2bYqPN3w8EEB7FQ-247242",
        ),
      );
      webApp.url = getUrl(ScriptApp);
      return renderTemplate(
        contentApp(
          '\n   <body id="test">                 \n<h2 class="search-overlay__section-title">\n  General Information\n</h2>\n<ul class="link-list min-list">\n <li>\n    <a href="#">'.concat(
            webApp.getContent(),
            '</a>\n </li>\n</ul>\n<div class="container row s1 valign-wrapper video-container black darken-4">\n  <div id="player1"></div>\n</div>\n<div class="container row s2 valign-wrapper video-container black darken-4">\n  <div id="player2"></div>\n</div>\n<div class="container row s2 valign-wrapper video-container black darken-4">\n  <div id="player3"></div>\n<script>\n document.addEventListener("DOMContentLoaded", <?!= appJs ?>);\n</script>\n</div>\n </body>\n                              ',
          ),
          {
            menu: "\n .menu {\n flex-flow: row wrap;\n grid-column: 1;\n grid-row: 1;\n align-content: flex-start;\n z-index: 0;\n height: 100%;\n overflow: auto;\n }\n ",
            body: "\n body {\n background-color: #ffc107;\n }\n ",
            appJs: function () {
              console.log(document.getElementById("test").innerHTML);
            },
          },
        ),
      ); //:contentFile('uiAccess');
    //         case "jsonSECEdgar": // <!-----------------------JSON API Results-------------------------!>
    //             // webApp = jsonINIT("https://ordspub.epa.gov/ords/pesticides/ppls/" + jsonINIT("https://ordspub.epa.gov/ords/pesticides/ProductSearch/searchWithIngName/v1/" + jsonINIT("https://ordspub.epa.gov/ords/pesticides/pplstxt/" + jsonINIT("https://ordspub.epa.gov/ords/pesticides/cswu/ProductSearch/partialprodsearch/v2/riname/" + e.parameter["product"], "items/" + e.parameter["result"] + "/productname"), "items/0/active_ingredients/0/active_ing"), "items/0/eparegnumber"));
    //             webApp.url = getUrl(ScriptApp);
    //             return HtmlService.createHtmlOutput(webApp).setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
    //         case "awsUrl": // <!---------------------JSON API Results---------------------------!>
    //             // webApp = jsonINIT("https://gydpkagp4d.execute-api.us-east-1.amazonaws.com/dev/1972/09/11/", JSON.parse(e.parameter["xpath"]));
    //             webApp.url = getUrl(ScriptApp);
    //             return HtmlService.createHtmlOutput(webApp).setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
    //         case "jsonItemA": // <!---------------------JSON API Results------------------------------!>
    //             // webApp = jsonINIT("https://ordspub.epa.gov/ords/pesticides/cswu/ProductSearch/partialprodsearch/v2/riname/" + e.parameter["product"], JSON.parse(e.parameter["itemA"]));
    //             webApp.url = getUrl(ScriptApp);
    //             return HtmlService.createHtmlOutput(webApp).setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
    //         case "jsonItemB": // <!----------------------JSON API Results------------------------!>
    //             // webApp = jsonINIT("https://ordspub.epa.gov/ords/pesticides/pplstxt/" + jsonINIT("https://ordspub.epa.gov/ords/pesticides/cswu/ProductSearch/partialprodsearch/v2/riname/" + e.parameter["product"], "items/0/productname"), "items/0/eparegno");
    //             webApp.url = getUrl(ScriptApp);
    //             return HtmlService.createHtmlOutput(webApp).setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
    //         case "jsonXpath": // <!----------JSON API Results---------------!>
    //             // var query = e.parameter['q'];
    //             // var parameters = e.parameter['params'];
    //             // var dataXpath = jsonINIT();
    //             // var objXpath = JSON.parse(dataXpath);
    //             // console.log(objXpath);
    //             // // const sheetJSON = SpreadsheetApp.create(e.parameter['ssName']);
    //             // // sheetJSON.appendRow(['cik_str','ticker','title']);
    //             // // const jsonXpatHeaderRow = ['cik_str','ticker','title'];
    //             // // for (let i = 0; i < dataXpath.length; i++) {
    //             // //   sheetJSON.appendRow([objXpath[i]['cik_str'],objXpath[i]['ticker'],objXpath[i]['title']]);
    //             // // }
    //             // var jsonXpathDataRange = [];
    //             // // for (var i = 0; i < dataXpath.length; i++) {
    //             // var jsonValuesXpath = objXpath;
    //             // for (var row in jsonValuesXpath) {
    //             //     jsonXpathDataRange.push([]);
    //             //     for (var col in jsonValuesXpath[row]) {
    //             //         jsonXpathDataRange[row].push(jsonValuesXpath[row][col]);
    //             //     }
    //             // }
    //             // // }
    //             // // console.log(jsonXpathDataRange)
    //             // // console.log(jsonXpathDataRange)
    //             // // var sheetName = idSpreadSheet(sheetJSON.getId()).getSheetByName('sheet1').setName(e.parameter['sheetName']);
    //             // // var sheet = idSpreadSheet(sheetJSON.getId()).getSheetByName(sheetName);
    //             // // // let lastrow = sheet.getLastRow();
    //             // // var range = sheet.getDataRange();
    //             // // var data = range.getValues();
    //             // // var range = jsonXpathDataRange;
    //             // // var headings = data[e.parameter['headers']].map(function (val) {
    //             // //     console.log(val)
    //             // //     return val.toString().toLowerCase();
    //             // // });
    //             // var jsonXpathHeadings = jsonXpathDataRange[e.parameter['headers']].map(function (val) {
    //             //     // console.log(val);
    //             //     return val.toString().toLowerCase();
    //             // });
    //             // // var noHeaders = data.slice(e.parameter['noheaders']);
    //             // var jsonXpathNoHeaders = jsonXpathDataRange.slice(e.parameter['noheaders']);
    //             // // console.log(jsonXpathNoHeaders)
    //             // // var outputData = (covObjects(noHeaders, headings));
    //             // // var outputData = (covObjects(jsonXpathDataRange, jsonXpatHeaderRow));
    //             // // var output = JSON.stringify({
    //             // //     status: 'success',
    //             // //     data: outputData
    //             // // });
    //             var rowsXpath = [];
    //             // let rangeXpath = jsonXpath("https://www.sec.gov/files/company_tickers.json");
    //             // let valuesXpath = rangeXpath.getValues();
    //             // var valuesXpath = jsonXpath("https://www.sec.gov/files/company_tickers.json");
    //             // for (var row in valuesXpath) {
    //             //     rowsXpath.push([]);
    //             //     for (var col in valuesXpath[row]) {
    //             //         rowsXpath[row].push(valuesXpath[row][col]);
    //             //     }
    //             // }
    //             // console.log(rowsXpath[1000][1])
    //             // console.log(rowsXpath[e.parameter.ticker][1])
    //             // const rowsXpath = testData(jsonXpath("https://www.sec.gov/files/company_tickers.json"))
    //             // const coName = rowsXpath[e.parameter.i][2]
    //             // const randomTickerXpath = rowsXpath[1000][1];
    //             let xpathSearch = rowsXpath.filter(function(a) { return a[0] == query; } )
    //             if (query != null) {
    //                 // let jsonXpathQueryData = jsonXpath("https://www.sec.gov/files/company_tickers.json").filter(function (a) { return a[0] == query })
    //                 // var jsonXpathheadings = jsonXpathQueryData.map(function (val) {
    //                 //     // console.log(val)
    //                 //     return val.toString().toLowerCase();
    //                 // });
    //                 // var jsonXpathnoHeaders = jsonXpathQueryData.slice(1);
    //                 //     console.log(jsonXpathnoHeaders)
    //                 // let jsonXpathINIT = covObjects(jsonXpathheadings, jsonXpathnoHeaders);
    //                 // console.log(rowsXpath);
    //                 var jsonXpathRowsToReturn = rowsXpath.filter(function (a) { return a[0] == xpathSearch; });
    //                 // jsonXpathQueryData = mapValues(sliceValues(, 0), 0)
    //                 console.log(jsonXpathRowsToReturn[0]);
    //                 //     // var outputQuery = (covObjects(rowsToReturn, rowsXpath));
    //                 //     var jsonXpathOutputQuery = (covObjects(jsonXpathRowsToReturn, jsonXpathHeadings));
    //                 //     // console.log(jsonXpathOutputQuery)
    //                 // webApp = HtmlService.createTemplate(ContentService.createTextOutput(JSON.stringify({ data: jsonXpathRowsToReturn, error: false })).setMimeType(ContentService.MimeType.JSON).getContent());
    //             }
    //             webApp = contentApp("\"".concat(data, "\""), JSON.stringify({ data: jsonXpathRowsToReturn, error: false }))
    //             // webApp.content = jsonINIT("https://www.clubhouse.com/@fabianlewis?utm_medium=ch_profile&utm_campaign=lhTUtHb2bYqPN3w8EEB7FQ-247242");
    //             baseUrl = getUrl(ScriptApp);
    //             console.log(baseUrl)
    //             inventoryUrl = getUrl(ScriptApp);
    //             console.log(inventoryUrl)
    //             financeUrl = getUrl(ScriptApp);
    //             console.log(financeUrl)
    //             return HtmlService.createTemplate("\n ".concat(navBar("https://www.sec.gov/files/company_tickers.json", "Tickers"), "\n                    <h1 class=\"search-overlay__section-title\">General Information</h1>\n                    <div class=\"clubhouse\">".concat(webApp.content, "</div>\n  <ul class=\"link-list min-list\">\n <li><div class=\"query-results\"><a target=\"_blank\" href=\"https://www.sec.gov/edgar/browse/?CIK=".concat(e.parameter.q, "&owner=exclude\"><h1>".concat(xpathSearch, "</h1></a></div></li>\n  </ul>\n <div  id=\"table-body\"></div>\n  <script>\n const data = ".concat(rowsXpath[0], "\n document.addEventListener(\"DOMContentLoaded\", function() {\n  const tbody = document.getElementById(\"table-body\");\n data.forEach(function(r) {\n  console.log(data)\n const link = document.createElement(\"a\");\n link.textContent = \\ value=r[1] target=\"_blank\" href=\"https://www.sec.gov/edgar/browse/?CIK=\"r[0][0]\"&owner=exclude\"\n tbody.appendChild(link);\n  })\n  });\n </script>\n <script>\n  document.querySelector(\".search-overlay__section-title\").setAttribute(\"style\", \"background-color: red;color: white;\")\n document.querySelector(\".query-results\").setAttribute(\"style\", \"background-color: red; color: yellow;\")\n </script>\n ")))))).evaluate().setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
    //         // return HtmlService.createHtmlOutput(webApp).setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
    //         case "funstore": // <!--------------------------------UDEMY Activity HTML----------------------!>
    //             webApp = HtmlService.createTemplateFromFile("funstore");
    //             webApp.url = getUrl(ScriptApp);
    //             return webApp.evaluate().setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
    //         case "funindex": // <!-------------------------UDEMY Activity HTML---------------------!>
    //             webApp = HtmlService.createTemplateFromFile("funindex");
    //             webApp.url = getUrl(ScriptApp);
    //             return webApp.evaluate().setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
    //         case "funblog": // <!---------------------------UDEMY Activity HTML--------------------------!>
    //             webApp = HtmlService.createTemplateFromFile("funblog");
    //             webApp.url = getUrl(ScriptApp);
    //             return webApp.evaluate().setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
    //         case "request": // <!-----------------------------API Endpoint Page------------------------!>
    //             // var query = e.parameter['q'];
    //             var parameters = e.parameter['params'];
    //             var sheetName = e.parameter['sheetname'];
    //             var sheet = spreadSheet().getSheetByName(sheetName);
    //             // let lastrow = sheet.getLastRow();
    //             var range = sheet.getDataRange();
    //             var data = range.getValues();
    //             var headings = data[e.parameter['headers']].map(function (val) {
    //                 // console.log(val)
    //                 return val.toString().toLowerCase();
    //             });
    //             var noHeaders = data.slice(e.parameter['noheaders']);
    //             var outputData = (covObjects(noHeaders, headings));
    //             var output = JSON.stringify({
    //                 status: 'success',
    //                 data: outputData
    //             });
    //             var rows = [];
    //             // let range = sheet.getRange(e.parameter['noheaders'],e.parameter['col'],lastrow,parameters);
    //             var values = range.getValues();
    //             for (var row in values) {
    //                 rows.push([]);
    //                 for (var col in values[row]) {
    //                     rows[row].push(values[row][col]);
    //                 }
    //             }
    //             if (query != null) {
    //                 var rowsToReturn = rows.filter(function (a) { return a[3] == query; });
    //                 console.log(rowsToReturn[0]);
    //                 var outputQuery = (covObjects(rowsToReturn, headings));
    //                 webApp = HtmlService.createTemplate(ContentService.createTextOutput(JSON.stringify({ data: outputQuery, error: false })).setMimeType(ContentService.MimeType.JSON).getContent());
    //             }
    //             // let randomRequest = rowsToReturn[0][1][0];
    //             // console.log(rowsToReturn[0]);
    //             // webApp = HtmlService.createTemplate(ContentService.createTextOutput(JSON.stringify({'data': rows, 'error': false})).setMimeType(ContentService.MimeType.JSON).getContent());
    //             // webApp.content = jsonINIT("https://www.clubhouse.com/@fabianlewis?utm_medium=ch_profile&utm_campaign=lhTUtHb2bYqPN3w8EEB7FQ-247242");
    //             baseUrl = getUrl(ScriptApp);
    //             console.log(baseUrl)
    //             inventoryUrl = getUrl(ScriptApp);
    //             console.log(inventoryUrl)
    //             financeUrl = getUrl(ScriptApp);
    //             console.log(financeUrl)
    //             // return webApp.evaluate().setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
    //             return HtmlService.createTemplate("\n                    <?!= include(\"index\"); ?>\n                    <h2 class=\"search-overlay__section-title\">General Information</h2>\n                    <ul class=\"link-list min-list\">\n                      <li><div class=\"query-results\"><a href=\"#\">".concat(webApp.getRawContent(), "</a></div></li>                  \n                    </ul>\n                    <div class=\"clubhouse\">".concat(webApp.content, "</div>\n                    <script>\n                    document.querySelector(\".search-overlay__section-title\").setAttribute(\"style\", \"background-color: red;color: white;\")\n                    document.querySelector(\".query-results\").setAttribute(\"style\", \"background-color: red; color: yellow;\")\n                    </script>\n                    "))).evaluate().setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
    default: // <!-----------------------------Default Website---------------------------------!>
      // var query = "";
      // var rowsDefault = [];
      // var valuesDefault = jsonXpath("https://www.sec.gov/files/company_tickers.json");
      // for (var row in valuesDefault) {
      //     rowsDefault.push([]);
      //     for (var col in valuesDefault[row]) {
      //         rowsDefault[row].push(valuesDefault[row][col]);
      //     }
      // }
      // const rowsDefault = testData(jsonXpath("https://www.sec.gov/files/company_tickers.json"))
      // if (query != null) {
      //     var defaultRowsToReturn = rowsDefault.filter(function (a) { return a[1] == query; });
      //     // console.log(defaultRowsToReturn[0]);
      //     webApp = HtmlService.createTemplate(ContentService.createTextOutput(JSON.stringify({ data: defaultRowsToReturn, error: false })).setMimeType(ContentService.MimeType.JSON).getContent());
      // }
      webApp = testJSON(
        e,
        testData(jsonXpath("https://www.sec.gov/files/company_tickers.json")),
      );
      // webApp.content = jsonINIT("https://www.clubhouse.com/@fabianlewis?utm_medium=ch_profile&utm_campaign=lhTUtHb2bYqPN3w8EEB7FQ-247242");
      // webApp.gov = jsonINIT("https://status.login.gov/");
      // blogUrl = "https://www.blogger.com/blog/posts/3269360121752133428"
      // groupsUrl = "https://groups.google.com/my-groups"
      // tweetUrl = "https://twitter.com/trchaury"
      // instaUrl = "https://www.instagram.com/flew72/"
      baseUrl = getUrl(ScriptApp);
      // console.log(baseUrl)
      // inventoryUrl = getUrl(ScriptApp);
      // console.log(inventoryUrl)
      // financeUrl = getUrl(ScriptApp)
      // console.log(financeUrl)
      // webApp.html =  HtmlService.createHtmlOutput(webApp).setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
      return contentApp("\n\n <?!= html ?>\n\n  ", {
        html: "".concat(
          contentApp(
            '"'.concat(
              navBar(baseUrl, "Finance"),
              '"</div><div class="clubhouse"></div>',
            ),
          ),
          "",
        ),
      }); //:contentFile('uiAccess');
    // return render("\n                    <?!= include(\"index\"); ?>\n                    <div class=\"navbar\">\n                    <nav class=\"nav\">\n                    <a href=\"".concat(financeUrl, "\" class=\"nav__link\" data-link>Finance</a>\n                    <a href=\"".concat(inventoryUrl, "\"  class=\"nav__link\"  data-link>Inventory</a>\n                    </nav>\n                    </div>\n                    <h2 class=\"search-overlay__section-title\">General Information</h2>\n                    <div class=\"container row s1 valign-wrapper video-container black darken-4\">\n                      <div id=\"player1\"></div>\n                    </div>\n                    <div class=\"container row s2 valign-wrapper video-container black darken-4\">\n                      <div id=\"player2\"></div>\n                    </div>\n                    <div class=\"container row s2 valign-wrapper video-container black darken-4\">\n                      <div id=\"player3\"></div>\n                    </div>\n                    <div class=\"clubhouse\">".concat(webApp.content, "</div>\n                              "))));
  }
};

function formatTime(milliseconds) {
  if (milliseconds < 0) {
    return "Time travel detected! (Negative elapsed time)";
  }

  var seconds = Math.floor(milliseconds / 1000);
  var minutes = Math.floor(seconds / 60);
  var hours = Math.floor(minutes / 60);
  var days = Math.floor(hours / 24);

  seconds %= 60;
  minutes %= 60;
  hours %= 24;

  var parts = [];
  if (days > 0) {
    parts.push(days + " days");
  }
  if (hours > 0) {
    parts.push(hours + " hours");
  }
  if (minutes > 0) {
    parts.push(minutes + " minutes");
  }
  if (seconds > 0 || parts.length === 0) {
    // Include seconds if nothing else, or if there are other parts
    parts.push(seconds + " seconds");
  }

  return parts.join(", ");
}

var funcCalc = function () {
  var appList = [];
  for (var key in globalThis) {
    if (typeof globalThis[key] == "function") {
      appList.push(key);
    }
  }
  var rndArrVals = [];
  while (rndArrVals.length < appList.length) {
    rndArrVals.push(
      appList[Math.floor(Math.random() * Math.floor(appList.length)).valueOf()],
    );
  }
  return rndArrVals;
};

var getScriptUrl = function () {
  return ScriptApp.getService().getUrl();
};

var getUrl = function (appInterface) {
  var url = appInterface?.getService().getUrl();
  return url;
};

var prepareDataBrain = function (data, ratio = 29) {
  if (data) {
    return Array.isArray(data)
      ? data.map((row) => {
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
        })
      : data;
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

var sheetWebsite = function (e) {
  var usr = e;
  if (!usr["parameter"]) {
    var query = [e][0] || Math.floor(Math.random() * Math.floor(e.length));
  } else {
    var query =
      usr.parameter["args"] || Math.floor(Math.random() * Math.floor(e.length));
  }
  var urlSs =
    "https://docs.google.com/spreadsheets/d/1-vNcN0vCLcXgMY9uwcKukUgv_4njggRZ6fqoZs-hBFE/edit#gid=138098962";
  var urlWww =
    "https://script.google.com/macros/s/AKfycbzhrxdXzM08AAwA5ualRXdnDtV6C_xQ7bcq4v6H0HNdBqPr2C8A1URyWN0FLLccQuoA/exec?func=misBing&args=";
  var tmp = [];
  var parameters = [e][1] || 1;
  var sheetName = "Inventory";
  var sheet = ssGetSheetBySpreadsheetUrl(urlSs, sheetName).activate();
  var range = sheet.getDataRange();
  var data = range.getValues();
  var headings = data.slice(3, 4).toString().toLowerCase().split(",");
  var noHeaders = data.slice(4).map(function (val) {
    return val.toString().toLowerCase();
  });
  var outputData = covObjects(noHeaders, headings);
  var output = JSON.stringify({ status: "success", data: outputData });
  var rows = [];
  var values = range.getValues();
  for (var row in values) {
    rows.push([]);
    for (var col in values[row]) {
      rows[row].push(values[row][col]);
    }
  }
  var rowsToReturn = splitArr(rows, 5, query);
  var outputQuery = covObjects(rowsToReturn, headings);
  var arrData = covArrays(outputQuery);
  let objParts = {};
  for (var i = 0; i < arrData.length; i++) {
    for (var [key, { headings }] of Object.entries(arrData[i])) {
      objParts[headings] = key;
    }
  }
  if (arrData) {
    const keys = Object.keys(arrData);
    keys.forEach(function (key) {
      tmp[key] = arrData[key];
    });
  }
  var jo = {};
  var dataArray = [];
  for (var i = 0, l = arrData.length; i < l; i++) {
    var record = {};
    record["id"] = arrData[i][0]["sku"];
    record["productName"] = arrData[i][0]["description"];
    record["rand1"] = arrData[i][0]["total customer purchase"];
    record["rand2"] = arrData[i][0]["qty offset"];
    record["rand3"] = arrData[i][0]["estimated value"];
    record["rand4"] = arrData[i][0]["supply processed "];
    record["rand5"] = arrData[i][0]["pack size"];
    record["rand6"] = arrData[i][0]["total supply available"];
    record["rand7"] = arrData[i][0]["cost supply available"];
    record["rand8"] = arrData[i][0]["current cost per item"];
    record["rand9"] = arrData[i][0][" average cost over time"];
    if (record["id"] !== "") {
      dataArray.push(record);
    }
  }
  var randNum = Math.floor(Math.random() * Math.floor(dataArray.length));
  var searchString = dataArray[randNum]["productName"];
  jo.user = dataArray;
  var coTable = jo.user.map((r) => {
    return `<tr><td><a class="waves-effect waves-light btn" href="${urlWww + encodeURIComponent(r["id"])}" target="_blank">${r["id"]}</a></td><td><a class="waves-effect waves-light btn" href="${urlWww + encodeURIComponent(r["productName"])}" target="_blank">${r["productName"]}</a></td><td><a class="waves-effect waves-light btn" href="${urlWww + encodeURIComponent(r["rand1"])}" target="_blank">${r["rand1"]}</a></td><td><a class="waves-effect waves-light btn" href="${urlWww + encodeURIComponent(r["rand2"])}" target="_blank">${r["rand2"]}</a></td><td><a class="waves-effect waves-light btn" href="${urlWww + encodeURIComponent(r["rand3"])}" target="_blank">${r["rand3"]}</a></td><td><a class="waves-effect waves-light btn" href="${urlWww + encodeURIComponent(r["rand4"])}" target="_blank">${r["rand4"]}</a></td><td><a class="waves-effect waves-light btn" href="${urlWww + encodeURIComponent(r["rand5"])}" target="_blank">${r["rand5"]}</a></td><td><a class="waves-effect waves-light btn" href="${urlWww + encodeURIComponent(r["rand6"])}" target="_blank">${r["rand6"]}</a></td><td><a class="waves-effect waves-light btn" href="${urlWww + encodeURIComponent(r["rand7"])}" target="_blank">${r["rand7"]}</a></td><td><a class="waves-effect waves-light btn" href="${urlWww + encodeURIComponent(r["rand8"])}" target="_blank">${r["rand8"]}</a></td><td><a class="waves-effect waves-light btn" href="${urlWww + encodeURIComponent(r["rand9"])}" target="_blank">${r["rand9"]}</a></td></tr>`;
  });
  var result = JSON.stringify(coTable);
  baseUrl = getUrl(ScriptApp);
  inventoryUrl = getUrl(ScriptApp);
  financeUrl = getUrl(ScriptApp);
  return HtmlService.createTemplate(
    `
    <h2 class="search-overlay__section-title">General Information</h2>
    <div class="row">
    <div class="col s10 card-panel amber push-s1 push-m1 push-l1">
    <div class="container">
    <div class="col s12 receipt red">
    <span><input placeholder="args ex. 1, 2...6" class="flow-text menu-img z-depth-5 card-panel black scale-transition scale-out scale-in receipt btn-large" id="invItem" type="search" /></span>
    </div></div></div></div>
    <div class="row">
    <div class="col s10 card-panel amber push-s1 push-m1 push-l1">
    <div class="container">
    <div class="col s12 receipt red">
    <table class="striped centered highlight responsive-table grey z-depth-5" style="width:100%">
      <thead>
        <tr>
          <th>ID</th>
          <th>Product Name</th>
          <th>Inventory</th>
          <th>In House</th>
          <th>Est Value</th>
          <th>Incoming</th>
          <th>Quantity</th>
          <th>Available</th>
          <th>Price</th>
          <th>Item Price</th>
          <th>Price Change</th>
        </tr>
      </thead>
      <tbody id="sheetWebsite">
      </tbody>
    </table>
    </div></div></div></div>
    <script>document.getElementById('invItem').addEventListener('change', userClicked)
      function userClicked()
        {// Init a timeout variable to be used below
        let timeout = null;
        (() => {// Clear the timeout if it has already been set.
        // This will prevent the previous task from executing
        // if it has been less than <MILLISECONDS>
        // clearTimeout(timeout);
        // Make a new timeout set to go off in 1000ms (1 second)
        // timeout = setTimeout
        // (function  () 
          // {console.log('Input Value:', textInput.value);}, 5000)();
        if (typeof url === "undefined")
          {var urlData = document.getElementById("url").value;
          var url = urlData.toString()}
        var args = document.getElementById("invItem").value;
        var linkHome = document.createElement("a");
        var linkFollow = document.createElement("a");
        linkHome.href = "https://flewis21.github.io/foobar/";
        linkFollow.href = url + "?func=sheetWebsite" + "&args=" + encodeURIComponent(args);
        linkHome.id = "linkHOME";
        linkFollow.id = "linkFOLLOW";
        linkHome.target = "popup";
        linkFollow.target = "_top";
        document.body.appendChild(linkHome);
        document.body.appendChild(linkFollow);
        document.getElementById("linkFOLLOW").click();
        document.getElementById("linkHOME");
        document.getElementById("invItem").value = "";})()}; //Global object closed
    </script>
    <script>document.querySelector(".search-overlay__section-title").setAttribute("style", "background-color: red;color: white;");</script>
    <script>document.querySelector(".query-results").setAttribute("style", "background-color: red; color: yellow;");</script>
    <script>document.addEventListener("DOMContentLoaded", function()
      {document.getElementById("sheetWebsite").innerHTML = ${result};})</script>
    <input type="hidden" value="<?= getUrl(ScriptApp) ?>" id="url" />`,
  ).getRawContent();
};
// case "request": // <!-----------------------------API Endpoint Page------------------------!>
// console.log(query)
// let lastrow = sheet.getLastRow();
// console.log(data)
// console.log(noHeaders)
// console.log(typeof headings + " - HEADINGS: " + headings[5])
// let range = sheet.getRange(e.parameter['noheaders'],e.parameter['col'],lastrow,parameters);
// console.log(rowsToReturn[0]);
// console.log(Utilities.jsonStringify(Object.entries([arrData])))
// Math.floor(Math.random());
//.map(entry => [entry[1]]))
// console.log(rows)
//Object.fromEntries(JSON.stringify(
// console.log(arrData[i]);
// var minData = [tmp][0].entries().next().value
//var dataRow = Utilities.jsonParse(arrData);
// console.log(typeof arrData[i]);
// console.log(arrData[i])
// console.log(result)
// webApp = HtmlService.createTemplate(ContentService.createTextOutput(JSON.stringify({ data: coTable, error: false })).setMimeType(ContentService.MimeType.JSON).getContent());
// let randomRequest = rowsToReturn[0][1][0];
// console.log(rowsToReturn[0]);
// if (query != null)
//   {var rowsToReturn = rows.filter(function (a) { return a[5] == query; });}
// webApp = HtmlService.createTemplate(ContentService.createTextOutput(JSON.stringify({'data': rows, 'error': false})).setMimeType(ContentService.MimeType.JSON).getContent());
// webApp.content = jsonINIT("https://www.clubhouse.com/@fabianlewis?utm_medium=ch_profile&utm_campaign=lhTUtHb2bYqPN3w8EEB7FQ-247242");
// return webApp.evaluate().setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
// console.log("Array of Objects: " + Utilities.jsonStringify(arrData[0]))

// function userSite() {
//   var website = SitesApp.getSites();
//   console.log(website);
//   return {
//     mySites: website,
//   };
// }
