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
          "https://www.clubhouse.com/@fabianlewis?utm_medium=ch_profile&utm_campaign=lhTUtHb2bYqPN3w8EEB7FQ-247242"
        )
      );
      webApp.url = getUrl(ScriptApp);
      return renderTemplate(
        contentApp(
          '\n   <body id="test">                 \n<h2 class="search-overlay__section-title">\n  General Information\n</h2>\n<ul class="link-list min-list">\n <li>\n    <a href="#">'.concat(
            webApp.getContent(),
            '</a>\n </li>\n</ul>\n<div class="container row s1 valign-wrapper video-container black darken-4">\n  <div id="player1"></div>\n</div>\n<div class="container row s2 valign-wrapper video-container black darken-4">\n  <div id="player2"></div>\n</div>\n<div class="container row s2 valign-wrapper video-container black darken-4">\n  <div id="player3"></div>\n<script>\n document.addEventListener("DOMContentLoaded", <?!= appJs ?>);\n</script>\n</div>\n </body>\n                              '
          ),
          {
            menu: "\n .menu {\n flex-flow: row wrap;\n grid-column: 1;\n grid-row: 1;\n align-content: flex-start;\n z-index: 0;\n height: 100%;\n overflow: auto;\n }\n ",
            body: "\n body {\n background-color: #ffc107;\n }\n ",
            appJs: function () {
              console.log(document.getElementById("test").innerHTML);
            },
          }
        )
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
        testData(jsonXpath("https://www.sec.gov/files/company_tickers.json"))
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
              '"</div><div class="clubhouse"></div>'
            )
          ),
          ""
        ),
      }); //:contentFile('uiAccess');
    // return render("\n                    <?!= include(\"index\"); ?>\n                    <div class=\"navbar\">\n                    <nav class=\"nav\">\n                    <a href=\"".concat(financeUrl, "\" class=\"nav__link\" data-link>Finance</a>\n                    <a href=\"".concat(inventoryUrl, "\"  class=\"nav__link\"  data-link>Inventory</a>\n                    </nav>\n                    </div>\n                    <h2 class=\"search-overlay__section-title\">General Information</h2>\n                    <div class=\"container row s1 valign-wrapper video-container black darken-4\">\n                      <div id=\"player1\"></div>\n                    </div>\n                    <div class=\"container row s2 valign-wrapper video-container black darken-4\">\n                      <div id=\"player2\"></div>\n                    </div>\n                    <div class=\"container row s2 valign-wrapper video-container black darken-4\">\n                      <div id=\"player3\"></div>\n                    </div>\n                    <div class=\"clubhouse\">".concat(webApp.content, "</div>\n                              "))));
  }
};