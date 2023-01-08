var edgarData = function (jnsData) {
  // SEC Edgar Filings Widget
  let h = {};
  var tmp = [];
  let jsonData = [
    urlDataSource("https://www.sec.gov/files/company_tickers.json"),
  ];
  //console.log(
  let objParts = {};
  for (var i = 0; i < jsonData.length; i++) {
    //Object.fromEntries(
    //JSON.stringify(
    for (var [key, { title }] of Object.entries(jsonData[i])) {
      objParts[title] = key;
    }
    //.map(entry => [entry[1]])
    //)
  }
  if (jsonData) {
    const keys = Object.keys(jsonData);

    keys.forEach(function (key) {
      tmp[key] = jsonData[key];
    });
  }
  console.log(typeof [jsonData]);
  console.log(objParts);
  // console.log(jsonData.trim())
  // console.log([jsonData][0])
  // console.log(tmp)
  // var o = mapValues([forArray(jsonData)], 0)
  // var jsonValues = mapValues([forArray([splitNoX([testData(jsonData)], 1)])], 1);
  // var jsonKeys = mapValues([forArray([splitNoX([testData(jsonData)], 0)])], 0);
  // var testo = testObject(jsonValues, jsonKeys);
  // for (var i=0;0 < tmp.length; i++)
  // {
  //   let k = JSON.parse(jsonData)[i];
  //   o.push())
  // }
  // const testIndex = testArray(jsonData)
  // const testIndex = splitNoX(jsonData);
  // const arrayObjData = testArray(testIndex)
  // const objTest = forArray(testIndex);
  // const dataHeaders = mapValues(arrayObjData, 1)
  //  var queO = JSON.stringify([testObject([forArray(splitNoX(o, 1))],[forArray(splitNoX(o, 0))])])
  // var edgarArray = []
  // let h = {};
  // for (var i=0;0 < tmp.length; i++)
  // {
  let o = JSON.parse(jsonData);
  // edgarArray.push([result])
  // for (let k of Object.keys())
  // queO.push([testObject([forArray(splitNoX(o, 1))],[forArray(splitNoX(o, 0))])])
  for (let k of Object.keys(o)) {
    // if (o.hasOwnProperty(k))
    // {
    let n = k.split(":")[0];
    // let n = queO.split(":")[0];
    //   if (!h[n]) h[n] = [];
    if (!h[n]) h[n] = [];
    // if (!h[keys]) h[keys] = [];
    h[n].push(o[k]);
    // h[n].push(jsonData[k]);
    // h[keys].push(o[k]);
    // h[n].push(o);
    // }
  }
  // console.log(h.length)
  // }
  // console.log(tmp.length)
  let a = Object.keys(h).map((k) => [k].concat(h[k]));
  var result = JSON.stringify(a);
  console.log(result.length);
  // }

  // if (result)
  // {
  // }

  // const spreadSheet = ssDatabase(["cik_str","ticker","title"], , spreadSheetCreate("edgarData"))
  // const jsonSheet = ;
  // const jsonData = [urlDataSource("https://www.sec.gov/files/company_tickers.json")]//mapValues([urlDataSource("https://www.sec.gov/files/company_tickers.json")], 5)//mapValues([JSON.parse(forHeaders(splitNoX(urlDataSource("https://www.sec.gov/files/company_tickers.json"))))], 0)//.entries()//mapValues([urlDataSource("https://www.sec.gov/files/company_tickers.json")], JSON.parse(forHeaders(splitNoX(urlDataSource("https://www.sec.gov/files/company_tickers.json")))[0]))//.map(obj => {})//))//))[1]//, 3)//)[1])//], 0)//covObjects(sliceValues(testData(urlDataSource("https://www.sec.gov/files/company_tickers.json")), JSON.parse(forHeaders(splitNoX(sliceValues(testData(urlDataSource("https://www.sec.gov/files/company_tickers.json")), JSON.parse(forHeaders(splitNoX(urlDataSource("https://www.sec.gov/files/company_tickers.json")))[0]))))[1])), [JSON.parse(forHeaders(splitNoX(sliceValues(testData(urlDataSource("https://www.sec.gov/files/company_tickers.json")), JSON.parse(forHeaders(splitNoX(urlDataSource("https://www.sec.gov/files/company_tickers.json")))[0]))))[1])])//JSON.parse(forHeaders(splitNoX(sliceValues(testData(urlDataSource("https://www.sec.gov/files/company_tickers.json")), JSON.parse(forHeaders(splitNoX(urlDataSource("https://www.sec.gov/files/company_tickers.json")))[0]))))[0])//sliceValues(testData(urlDataSource("https://www.sec.gov/files/company_tickers.json")), JSON.parse(forHeaders(splitNoX(sliceValues(testData(urlDataSource("https://www.sec.gov/files/company_tickers.json")), JSON.parse(forHeaders(splitNoX(urlDataSource("https://www.sec.gov/files/company_tickers.json")))[1]))))[1]))//covObjects(sliceValues(testData(urlDataSource("https://www.sec.gov/files/company_tickers.json")), JSON.parse(forHeaders(splitNoX(urlDataSource("https://www.sec.gov/files/company_tickers.json")))[1])), [JSON.parse(forHeaders(splitNoX(urlDataSource("https://www.sec.gov/files/company_tickers.json")))[1])])//, "/")//, 0)//, 0)// , 0, "0", "/", 0)"
  // console.log(tmp)
  // const jsonDoc = ssDatabase("edgarData", [JSON.parse(forHeaders(splitNoX(urlDataSource("https://www.sec.gov/files/company_tickers.json")))[1])], jsonData)
  //  edgarData = ("\n <?!= jsonData ?>\n   ")
  //  contentApp("\n <?!= html ?>\n  ", { html: "".concat(contentApp("\n  <head>\n  <link href=\"https://unpkg.com/tabulator-tables@5.2.3/dist/css/tabulator_materialize.min.css\" rel=\"stylesheet\">\n  <link href=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css\" rel=\"stylesheet\"></link>\n  \n\n <?!= headerBottom ?>", { headerBottom: "".concat(contentApp("\n  </head>\n  \n\n  <?!= bodyTop ?>", { bodyTop: "".concat(contentApp("\n  <body>\n <ul class=\"link-list min-list\">\n <li><div class=\"query-results\"></div></li>\n  </ul>\n  <div class=\"search-box-outer container col s1\">\n  <div class=\"search-box-inner container col s1\">\n <label>Search</label><input type=\"text\" id=\"search\" placeholder=\"type here..\" >\n  \n\n <?!= divBottom ?>\n <?!= divBottom ?>\n \n <div id=\"data-table\"><?!= divBottom ?>\n  \n <script src=\"https://cdnjs.cloudflare.com/ajax/libs/luxon/3.0.1/luxon.min.js\" integrity=\"sha512-6ZJuab/UnRq1muTChgrVxJhSgygmL2GMLVmSJN7pcBEqJ1dWPbqN9CiZ6U3HrcApTIJsLnMgXYBYgtVkJ8fWiw==\" crossorigin=\"anonymous\" referrerpolicy=\"no-referrer\"><?!= scriptBottom ?>\n  <script type=\"text/javascript\" src=\"https://unpkg.com/tabulator-tables@5.2.3/dist/js/tabulator.min.js\"><?!= scriptBottom ?>\n  <?!= scriptTop ?>\n <?!= scriptBottom ?>\n  <?!= bodyBottom ?>", { divBottom: "".concat(contentApp("\n  </div>\n "), ""), scriptTop: "".concat(contentApp("\n  <script>\n const elements = {}\n document.addEventListener(\"DOMContentLoaded\", loadData)\n\n function loadData() {\n pageLoad();\n }\n function pageLoad() {\n elements.alerts = document.getElementById(\"alerts\")\n elements.search = document.getElementById(\"search\")\n\n elements.search.addEventListener(\"input\", searchData)\n }\n const tabledata = \"".concat(JSON.stringify(jnsData), "\";\n  const table = new Tabulator(\"#data-table\", {\n    height:205,\n    data:tabledata,\n    layout:\"fitColumns\",\n    responsiveLayout:\"hide\",\n    pagination:\"local\",\n    paginationSize:5,\n    columns:[\n {title:\"Central Index Key\", field:\"cik_str\", editor:\"list\", editorParams:{ valuesLookup:\"active\", valuesLookupField:\"id\" }},\n        {title:\"Ticker Symbol\", field:\"ticker\", editor:\"list\", editorParams:{ valuesLookup:\"active\", valuesLookupField:\"ticker\" }},\n        {title:\"Company or Fund name\", field:\"title\", editor:\"list\", editorParams:{ valuesLookup:\"active\", valuesLookupField:\"title\" }},\n  {title:\"Task Progress\", field:\"progress\", hozAlign:\"left\", formatter:\"progress\", editor:\"input\"},\n  {title:\"Complete\", field:\"Complete\", width:90,  hozAlign:\"center\", formatter:\"tickCross\", sorter:\"boolean\", editor:\"input\"},\n     ],\n  });\n   //table.on(\"rowClick\", function(e, row){\n   //alert(\"Row \" + row.getData().id + \" Clicked!!!!\");\n  //});\n  \n table.on(\"cellEdited\", function(cell){\n  //cell - cell component\n const field = cell._cell.column.field\n const id = cell._cell.row.data.id\n const val = cell._cell.value\n })\n  function searchData(e) {\n  table.setFilter(\"title\",\"like\", e.target.value);\n google.script.run.withSuccessHandler(egdarData).companyName(\"https://www.sec.gov/files/company_tickers.json\", \"\", 1, 1, [[\"cik_str\"],[\"ticker\"],[\"title\"]])\n }\n\n function edgarData()companyInfo) {\n console.log(companyInfo);\n }\n  ")), ""), scriptBottom: "".concat(contentApp("\n  </script>\n"), ""), bodyBottom: "".concat(contentApp("\n  </body>\n"), "")}), "")}), "")}), "")})
  // const tickerValue = widgetData(splitNoX(fetchDataSource("https://www.sec.gov/files/company_tickers.json")), [["key"],["value"]])
  // let search = tickerValue.filter(function(a) { return a[8]; } )
  // let search = widgetData(tickerValue.filter(function(a) { return a; } ), [JSON.stringify(tickerValue[0]["value"]["cik_str"]),JSON.stringify(tickerValue[0]["value"]["ticker"]),JSON.stringify(tickerValue[0]["value"]["title"])])[2]

  // console.log(edgarData("https://www.sec.gov/files/company_tickers.json", "Edgar",widgetData(splitNoX(fetchDataSource("https://www.sec.gov/files/company_tickers.json")), [["key"],["value"]])).getContent())
  // console.log(widgetData(search["value"], [["cik_str"],["ticker"],["title"]]))

  //{
  // ("\n <div  id=\"table-body\"></div>\n  <script>\n  const mydata = \"".concat(JSON.stringify(testData("data")), "\" \n \n  const tbody = document.getElementById(\"table-body\")\n   const htmlBody = mydata.forEach(function(r) {\n   console.log(r)\n   console.log(mydata)\n   const link = document.createElement(\"a\");\n  link.textContent = ".concat("\\ value=r[1] target=\"_blank\" href=\"https://www.sec.gov/edgar/browse/?CIK=\"r[0][0]\"&owner=exclude\"", ";\n   tbody.innerHtml(link);\n  })\n   </script>\n  ")), { textContent: "\\ value=r[1] target=\"_blank\" href=\"https://www.sec.gov/edgar/browse/?CIK=\"r[0][0]\"&owner=exclude\"" });
  //}

  var startPageUrl = getUrl(ScriptApp) + "?default";
  var today = new Date();
  html = "".concat(
    contentFile(
      "edgarFriendly",
      {
        rule: today.toDateString() + " - " + today.toTimeString(),
        opt: tmp
          .map(function (r) {
            return "<option>" + r[0] + "</option>";
          })
          .join(""),
        materializeCss:
          '\n  <link href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" rel="stylesheet"></link>\n',
        tabulatorCss:
          '\n  <link href="https://unpkg.com/tabulator-tables@5.2.3/dist/css/tabulator_materialize.min.css" rel="stylesheet">',
        materializeJs:
          '\n  <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>\n  ',
        dOMContentLoaded:
          "\n      const elements = {}\n      document.addEventListener(\"DOMContentLoaded\", loadData)\n  document.addEventListener('DOMContentLoaded', function() {\n    var elems = document.querySelectorAll('select');\n    var instances = M.FormSelect.init(elems, options);\n  });",
        loadData:
          "\n      function loadData() {\n        tabulatorLoad();\n      }",
        tabulatorLoad:
          '\n      function tabulatorLoad() {\n        elements.alerts = document.getElementById("alerts")\n        elements.search = document.getElementById("search")\n        elements.search.addEventListener("input", searchData)\n      const tabledata = "'.concat(
            JSON.stringify(jnsData),
            '";\n      const table = new Tabulator("#data-table", {\n        height:205,\n        data:tabledata,\n        layout:"fitColumns",\n        responsiveLayout:"hide",\n        pagination:"local",\n        paginationSize:5,\n        columns:[\n          {title:"Central Index Key", field:"cik_str", editor:"list", editorParams:{ valuesLookup:"active", valuesLookupField:"id" }},\n          {title:"Ticker Symbol", field:"ticker", editor:"list", editorParams:{ valuesLookup:"active", valuesLookupField:"ticker" }},\n          {title:"Company or Fund name", field:"title", editor:"list", editorParams:{ valuesLookup:"active", valuesLookupField:"title" }},\n          {title:"Task Progress", field:"progress", hozAlign:"left", formatter:"progress", editor:"input"},\n          {title:"Complete", field:"Complete", width:90,  hozAlign:"center", formatter:"tickCross", sorter:"boolean", editor:"input"},\n          ],\n          });'
          ),
        rowClicked:
          '\n    //table.on("rowClick", function(e, row){\n        //alert("Row " + row.getData().id + " Clicked!!!!");\n        //});',
        cellEdited:
          '\n        table.on("cellEdited", function(cell){\n          //cell - cell component\n        const field = cell._cell.column.field\n        const id = cell._cell.row.data.id\n        const val = cell._cell.value\n        })',
        searchData:
          '\n        function searchData(e) {\n        table.setFilter("title","like", e.target.value);\n        google.script.run.withSuccessHandler(egdarData).companyName("https://www.sec.gov/files/company_tickers.json", "", 1, 1, [["cik_str"],["ticker"],["title"]])\n        }',
        companyInfo:
          "\n        function edgarData()companyInfo) {\n          console.log(companyInfo);\n          }",
        startPageUrl: startPageUrl,
      },
      ""
    ),
    ""
  );

  return contentApp(html); //:contentFile('uiAccess');
};

var epaData = function (e) {
  var startPageUrl = getUrl(ScriptApp) + "?default";
  var today = new Date();
  var rule = today.toDateString() + " - " + today.toTimeString();
  // var product = e.parameter['product'];
  // var dataSheetName = product + " " + new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString();
  // var data = covArrays(companyName("https://ordspub.epa.gov/ords/pesticides/cswu/ProductSearch/partialprodsearch/v2/riname/" + product), 1);
  // const ss =  spreadSheetCreate(testData(sliceValues(dataSheetName.split("/"))))
  // var rows = testData(data[0])
  // ssDatabase(rows, ss)
  // ssSetName(ss.getName(), product + " Nah")
  // console.log(covObjects(testData(splitValues(fetchDataSource("https://ordspub.epa.gov/ords/pesticides/ppls/66551-1"), "items/0", "/")), [["key"], ["value"]]));

  // console.log(epaA(MVar("https://ordspub.epa.gov/ords/pesticides/ppls/"), epaB(JVar("https://ordspub.epa.gov/ords/pesticides/ProductSearch/searchWithIngName/v1/"), epaC(GVar("https://ordspub.epa.gov/ords/pesticides/pplstxt/"), JSON.stringify(epaD(AVar("https://ordspub.epa.gov/ords/pesticides/cswu/ProductSearch/partialprodsearch/v2/riname/"), BVar("c"), CVar("items"), DVar("/"))[EVar(0)][FVar("productname")]), HVar("items/0/active_ingredients/0/active_ing"), IVar("/")), KVar("items/0/eparegno"), LVar("/"))))[JVar(0)][KVar("active_ingredients")][LVar(0)][MVar("active_ing")]

  // console.log(productDist("https://ordspub.epa.gov/ords/pesticides/pplsdist/", "https://ordspub.epa.gov/ords/pesticides/ppls/" + companyName("https://ordspub.epa.gov/ords/pesticides/cswu/ProductSearch/partialprodsearch/v2/riname/" + "h", 1, [["item"]])[0]["item"]["eparegno"], "items", "/" ))

  // epaA(edgarData("https://www.sec.gov/files/company_tickers.json", "Edgar", dateTime().getContent()).getContent(), epaA("https://ordspub.epa.gov/ords/pesticides/ppls/", epaB("https://ordspub.epa.gov/ords/pesticides/ProductSearch/searchWithIngName/v1/", epaC("https://ordspub.epa.gov/ords/pesticides/pplstxt/", epaD(e, "https://ordspub.epa.gov/ords/pesticides/cswu/ProductSearch/partialprodsearch/v2/riname/", "product", "items/", "result", "/productname"), "items/0/active_ingredients/0/active_ing"), "items/0/eparegnumber")))

  // return HtmlService.createHtmlOutput(contentApp("\n <head>\n  \n  <link href=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css\" rel=\"stylesheet\"></link>\n </head>\n \n  \n <body>\n <?!= ref1 ?>\n <?!= timePicker ?>\n  \n  <?!= runIt ?>\n  \n  <script src=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js\"></script>\n  <script>\n document.addEventListener(\"DOMContentLoaded\", function() {\n  let timePicker = document.getElementById(\"prefTime\");\n M.Timepicker.init(timePicker, { defaultTime: \"now\" })\n })\n \n  document.getElementById(\"btn\").addEventListener(\"click\", function() {\n  google.script.run.runItLog();\n  })\n </script>\n \n </body>\n ", { runIt: contentApp("\n <button id=\"btn\">Run It!</button>"), timePicker: contentApp("\n  <div class=\"agenda container col s1\">\n  <input class=\"timepicker\" id=\"prefTime\" type=\"text\" />\n  </div>\n "), ref1: contentApp("\n <a href=<?!= ref1 ?> class=\"nav__link\" data-link><?!= title1 ?></a>", { ref1: "https://ordspub.epa.gov/ords/pesticides/cswu/ProductSearch/partialprodsearch/v2/riname/" + product, title1: "EPA Pesticides" }) }))

  // var data = companyName("https://ordspub.epa.gov/ords/pesticides/cswu/ProductSearch/partialprodsearch/v2/riname/" + product, 1, [["item"]]);
  // companyName(mapValues(sliceValues(testData(arrayToObject(, [["item"]])), 1), 0)[0])
  // console.log(data[1])
  // webAppUrls: contentApp("<? var webAppUrls = navBar(\"https://www.sec.gov/files/company_tickers.json\", \"Edgar\", \"https://avaddc.com/agency/the-paul-rue-agency/4022/\", \"Defensive Driving\") ?><?!= webAppUrls ?>")

  // var ssName = ss.getName()
  // console.log(ssName)
  // console.log(ssSetSheetBySpreadsheetId())
  // console.log(ssCurrent)
  // var sheet = createSheetByName(ss.getId(), "myNewSheet")
  // console.log(sheet)
  // return ssDatabase(data, existingSheet, data[0]["item"]["eparegno"]);
  // console.log(typeof(existingSheet))
  // console.log()

  // console.log()

  // (contentApp("\n <head>\n  \n  <link href=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css\" rel=\"stylesheet\"></link>\n </head>\n \n  \n <body>\n <?!= ref1 ?>\n <?!= timePicker ?>\n  \n  <?!= runIt ?>\n  \n  <script src=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js\"></script>\n  <script>\n document.addEventListener(\"DOMContentLoaded\", function() {\n  let timePicker = document.getElementById(\"prefTime\");\n M.Timepicker.init(timePicker, { defaultTime: \"now\" })\n })\n \n  document.getElementById(\"btn\").addEventListener(\"click\", function() {\n  google.script.run.runItLog();\n  })\n </script>\n \n </body>\n ", { runIt: contentApp("\n <button id=\"btn\">Run It!</button>"), timePicker: contentApp("\n  <div class=\"agenda container col s1\">\n  <input class=\"timepicker\" id=\"prefTime\" type=\"text\" />\n  </div>\n "), ref1: contentApp("\n <a href=<?!= ref1 ?> class=\"nav__link\" data-link><?!= title1 ?></a>", { ref1: "https://ordspub.epa.gov/ords/pesticides/cswu/ProductSearch/partialprodsearch/v2/riname/", title1: "EPA Pesticides" }) }));
  //(e, contentApp("\n <head>\n  \n </head>\n \n  \n <body>\n <?!= ref1 ?>\n <?!= timePicker ?>\n  \n  <?!= runIt ?>\n  \n \n </body>\n ", { ref1: contentApp("\n <a href=<?!= ref1 ?> class=\"nav__link\" data-link><?!= title1 ?></a>", { ref1: "https://ordspub.epa.gov/ords/pesticides/cswu/ProductSearch/partialprodsearch/v2/riname/", title1: "EPA Pesticides" }) }))

  html = "".concat(
    contentFile("epaWebsite", {
      materializeCss:
        '\n  <link href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" rel="stylesheet"></link>\n',
      dOMContentLoaded:
        '\n  document.addEventListener(\'DOMContentLoaded\', function() {\n  let timePicker = document.getElementById("prefTime");\n M.Timepicker.init(timePicker, { defaultTime: "now" })\n })\n \n  document.getElementById("btn").addEventListener("click", function() {\n  google.script.run.runItLog();\n  })\n    var elems = document.querySelectorAll(\'select\');\n    var instances = M.FormSelect.init(elems, options);\n  });',
      materializeJs:
        '\n  <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>\n  ',
      rule: rule,
      startPageUrl: startPageUrl,
    }),
    ""
  );
  return contentApp(html); //:contentFile('uiAccess');
};
