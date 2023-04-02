var devWebsite = function (e) {
  var webApp;
  var webTest;
  console.log(Utilities.jsonStringify(e));
  var index = [e][0] || 0;
  var query = [e][1] || 1;
  switch ([e][2] || 2) {
    case "sec": // <!-----------------------------JSON API Results------------------------------!>
      // dataUrl = tabData("https://www.sec.gov/files/company_tickers.json", 0, [["id"],["ticker"],["title"]]);
      // webApp = edgarData("https://www.sec.gov/files/company_tickers.json", "SEC Edgar Data", dataUrl );
      webApp = epaA(
        edgarData(
          "https://www.sec.gov/files/company_tickers.json",
          "Edgar",
          dateTime().getContent()
        ).getContent(),
        epaA(
          "https://ordspub.epa.gov/ords/pesticides/ppls/",
          epaB(
            "https://ordspub.epa.gov/ords/pesticides/ProductSearch/searchWithIngName/v1/",
            epaC(
              "https://ordspub.epa.gov/ords/pesticides/pplstxt/",
              epaD(
                e,
                "https://ordspub.epa.gov/ords/pesticides/cswu/ProductSearch/partialprodsearch/v2/riname/",
                "product",
                "items/",
                "result",
                "/productname"
              ),
              "items/0/active_ingredients/0/active_ing"
            ),
            "items/0/eparegnumber"
          )
        )
      );
      webApp.url = getUrl(ScriptApp);
      return contentApp(webApp); //:contentFile('uiAccess');
    case "epa": // <!----------------------------------JSON API Results---------------------------------!>
      // dataUrl = jsonINIT(itemA + itemB, "items/0/eparegnumber" + itemC, "items/0/active_ingredients/0/active_ing" + itemD, "items/" + e.parameter["result"] + "/productname");
      // epaUrl = getUrl(ScriptApp) + "?test=" + e.parameter["test"] + "&webTest=" + e.parameter["webTest"] + "&product=" + e.parameter["product"] + "&result=" + e.parameter["result"];
      // epaUrl = epaA(epaB(epaC(epaD(e))));
      // webApp = edgarData(epaUrl, e.parameter["product"], epaA(epaB(epaC(epaD(e)))));
      webApp = epaA(
        edgarData(
          "https://www.sec.gov/files/company_tickers.json",
          "Edgar",
          dateTime().getContent()
        ).getContent(),
        epaA(
          "https://ordspub.epa.gov/ords/pesticides/ppls/",
          epaB(
            "https://ordspub.epa.gov/ords/pesticides/ProductSearch/searchWithIngName/v1/",
            epaC(
              "https://ordspub.epa.gov/ords/pesticides/pplstxt/",
              epaD(
                "https://ordspub.epa.gov/ords/pesticides/cswu/ProductSearch/partialprodsearch/v2/riname/",
                "c",
                "items/",
                6,
                "/productname",
                "/"
              ),
              "items/0/active_ingredients/0/active_ing",
              "/"
            ),
            "items/0/eparegnumber",
            "/"
          )
        )
      );
      webApp.url = getUrl(ScriptApp);
      return contentApp(webApp); //:contentFile('uiAccess');
    default: // <!-----------------------------Default Website-------------------------------!>
      const unData = Utilities.jsonParse([
        urlDataSource("https://www.sec.gov/files/company_tickers.json"),
      ]);
      const testUnData = untestedData(unData);
      const jsonUnData = Utilities.jsonStringify(testUnData);
      const rowsDefault = jsonXpath([jsonUnData]);
      let search = rowsDefault.filter(function (a) {
        return a[0] == query;
      });
      let searchEntries = [search].values().next().value;
      for (let key in search) {
        console.log(
          [search].filter(function (a) {
            return a[1] == query;
          })
        );
      }
      webApp = testJSON(e, jsonXpath([jsonUnData]));
      webApp.content = jsonINIT(
        "https://www.clubhouse.com/@fabianlewis?utm_medium=ch_profile&utm_campaign=lhTUtHb2bYqPN3w8EEB7FQ-247242"
      );
      webApp.thrift = jsonINIT(
        "https://drive.google.com/drive/u/0/shared-with-me"
      );
      const bloggerUrl =
        "https://www.blogger.com/blog/posts/3269360121752133428";
      const groupsUrl = "https://groups.google.com/my-groups";
      const tweetUrl = "https://twitter.com/trchaury";
      const instaUrl = "https://www.instagram.com/flew72/";
      const jsData = covObjects(testData([jsonUnData]), [
        ["id"],
        ["ticker"],
        ["title"],
      ]);
      console.log(jsData);
      // const widgetData = JSON.stringify(covObjects(testData(jsData), [["id"],["ticker"],["title"]]));
      const baseUrl = getUrl(ScriptApp);
      const inventoryUrl =
        getUrl(ScriptApp) + "?webApp=request&sheetName=Inventory&headers=0&q="; //.concat(rows,);
      console.log(rowsDefault[0]);
      const financeUrl =
        getUrl(ScriptApp) +
        "?webApp=jsonXpath&q=" +
        encodeURIComponent(rowsDefault[0][1]);
      navBar = navBar(
        baseUrl,
        "Social",
        financeUrl,
        "Finance",
        instaUrl,
        "Instagram",
        tweetUrl,
        "Twitter",
        baseUrl,
        "Social",
        groupsUrl,
        "Google Groups",
        bloggerUrl,
        "Blogger",
        inventoryUrl,
        "Inventory",
        baseUrl,
        "Social"
      ).getContent();
      dateTime = dateTime();

      // Header of Page
      const head = includeApp(
        '\n  <head>\n  <base target="_parent"></base>\n  <meta charset="UTF-8"></meta>\n  <meta content="width=device-width, initial-scale=1.0" name="viewport"></meta>\n <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>\n  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" srel="stylesheet"></link>\n <meta content="739921544160-nvqbr8cmqcs35n700q94mn5qnjh7vdr5.apps.googleusercontent.com" name="google-signin-client_id"></meta>\n <script src="https://apis.google.com/js/api.js?onload=onApiLoad"></script>\n  <script async="" defer="" src="https://apis.google.com/js/platform.js"></script>\n  <link href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" rel="stylesheet"></link>\n  <style>\n .search-box-outer {\n margin-bottom:1rem;\n }\n\n .search-box-inner{\n  padding:0.5rem;\n }\n\n .search-box-inner input{\n  color: #fff;\n  padding:0.5rem;\n  border: 1px solid #3FB449;\n border-radius:0.5rem;\n  }\n\n .search-box-inner label{\n  color: #fff;\n  margin-right:0.5rem;\n  padding:0.5rem;\n  }\n  </style>\n\n  </head>\n '
      );

      // Body of Page
      const body = includeApp(
        '\n <body>\n\n <?!= navBar ?>\n  <h2 class="search-overlay__section-title">General Information</h2>\n  <div class="clubhouse"></div>\n <?!= dateTime ?>\n </body>\n  ',
        {
          thrift: "\n ".concat(webApp.thrift, ""),
          query: "\n ".concat(query, ""),
          search: "\n ".concat(search, ""),
          navBar: "\n ".concat(navBar, ""),
          edgarData: "\n ".concat(edgarData, ""),
          dateTime: "\n ".concat(dateTime, ""),
          head: "".concat(head, ""),
        }
      );

      // What Should Return
      return contentApp("\n <?!= edgarData ?>\n  ", {
        html: "\n ".concat(webApp, ""),
        body: "\n ".concat(body, ""),
        head: "\n ".concat(head, ""),
        edgarData: "\n ".concat(
          contentApp(
            '\n  <?!= headerTop ?>\n  <meta charset="UTF-8"><?!= metaBottom ?>\n  <meta content="width=device-width, initial-scale=1.0" name="viewport"><?!= metaBottom ?>\n  <link href="https://unpkg.com/tabulator-tables@5.2.3/dist/css/tabulator_materialize.min.css" rel="stylesheet">\n  <link href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" rel="stylesheet"><?!= linkBottom ?>\n\n <?!= headerBottom ?>\n\n  <?!= bodyTop ?>\n\n  <div class="search-box-outer container col s1">\n  <div class="search-box-inner container col s1">\n <label>Search</label><input type="text" id="search" placeholder="type here.." >\n <?!= divBottom ?>\n <?!= divBottom ?>\n <div id="data-table"><?!= divBottom ?>\n <script src="https://cdnjs.cloudflare.com/ajax/libs/luxon/3.0.1/luxon.min.js" integrity="sha512-6ZJuab/UnRq1muTChgrVxJhSgygmL2GMLVmSJN7pcBEqJ1dWPbqN9CiZ6U3HrcApTIJsLnMgXYBYgtVkJ8fWiw==" crossorigin="anonymous" referrerpolicy="no-referrer"><?!= scriptBottom ?>\n  <script type="text/javascript" src="https://unpkg.com/tabulator-tables@5.2.3/dist/js/tabulator.min.js"><?!= scriptBottom ?>\n  <?!= scriptTop ?>\n const elements = {}\n document.addEventListener("DOMContentLoaded", loadData)\n\n function loadData() {\n pageLoad();\n }\n function pageLoad() {\n elements.alerts = document.getElementById("alerts")\n elements.search = document.getElementById("search")\n\n elements.search.addEventListener("input", searchData)\n }\n const tabledata = <?!= widgetData ?>\n  const table = new Tabulator("#data-table", {\n    height:205,\n    data:tabledata,\n    layout:"fitColumns",\n responsiveLayout:"hide",\n    pagination:true,\n    paginationSize:5,\n    columns:[\n {title:"Central Index Key", field:"id", editor:"list", editorParams:{ valuesLookup:"active", valuesLookupField:"id" }},\n        {title:"Ticker Symbol", field:"ticker", editor:"list", editorParams:{ valuesLookup:"active", valuesLookupField:"ticker" }},\n        {title:"Company or Fund name", field:"title", editor:"list", editorParams:{ valuesLookup:"active", valuesLookupField:"title" }},\n  {title:"Task Progress", field:"progress", hozAlign:"left", formatter:"progress", editor:"input"},\n  {title:"Complete", field:"Complete", width:90,  hozAlign:"center", formatter:"tickCross", sorter:"boolean", editor:"input"},\n     ],\n  });\n   //table.on("rowClick", function(e, row){\n   //alert("Row " + row.getData().id + " Clicked!!!!");\n  //});\n  \n table.on("cellEdited", function(cell){\n  //cell - cell component\n const field = cell._cell.column.field\n const id = cell._cell.row.data.id\n const val = cell._cell.value\n })\n  function searchData(e) {\n  table.setFilter("title","like", e.target.value);\n }\n <?!= scriptBottom ?>\n  <?!= bodyBottom ?>\n ',
            {
              widgetData: "".concat(widgetData, ""),
              headerTop: "".concat(contentApp("\n  <head>\n  </head>\n"), ""),
              metaBottom: "".concat(contentApp("\n  </meta>\n"), ""),
              linkBottom: "".concat(contentApp("\n  </link>\n"), ""),
              headerBottom: "".concat(contentApp("\n  </head>\n"), ""),
              bodyTop: "".concat(contentApp("\n  <body>\n"), ""),
              bodyBottom: "".concat(contentApp("\n  </body>\n"), ""),
              divBottom: "".concat(contentApp("\n  </div>\n"), ""),
              scriptTop: "".concat(contentApp("\n  <script>\n"), ""),
              scriptBottom: "".concat(
                contentApp("\n  </script>\n", {
                  data: widgetData,
                }),
                ""
              ),
            }
          ),
          ""
        ),
      }); //:contentFile('uiAccess');
      console.log(jsData);
  }
};
