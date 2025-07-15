var escapedHTML = function (e) {
  var webApp;

  var username = e || [1, 2, 3, 4, 5, 6, 7, 8, 9];
  if (!username["parameter"]) {
    var query =
      [username][0] || Math.floor(Math.random() * Math.floor(username.length));

    var product =
      [username][1] || Math.floor(Math.random() * Math.floor(username.length));

    var result =
      [username][2] || Math.floor(Math.random() * Math.floor(username.length));

    var xpath =
      [username][3] || Math.floor(Math.random() * Math.floor(username.length));
  } else {
    var query =
      username.parameter["q"] ||
      Math.floor(Math.random() * Math.floor(username.length));

    var product =
      username.parameter["product"] ||
      Math.floor(Math.random() * Math.floor(username.length));

    var result =
      username.parameter["result"] ||
      Math.floor(Math.random() * Math.floor(username.length));

    var xpath =
      username.parameter["xpath"] ||
      Math.floor(Math.random() * Math.floor(username.length));
  }

  if (!username["parameter"]) {
    switch (
      [username][4] ||
      Math.floor(Math.random() * Math.floor(username.length))
    ) {
      case "sec": // <!------------------JSON API Results---------------------------!>
        // dataUrl = tabData("https://www.sec.gov/files/company_tickers.json", 0, [["id"],["ticker"],["title"]]);

        // webApp = edgarData("https://www.sec.gov/files/company_tickers.json", "SEC Edgar Data", dataUrl );

        // webApp = epaA(edgarData("https://www.sec.gov/files/company_tickers.json", "Edgar", dateTime().getContent()).getContent(), epaA("https://ordspub.epa.gov/ords/pesticides/ppls/", epaB("https://ordspub.epa.gov/ords/pesticides/ProductSearch/searchWithIngName/v1/", epaC("https://ordspub.epa.gov/ords/pesticides/pplstxt/", epaD(e, "https://ordspub.epa.gov/ords/pesticides/cswu/ProductSearch/partialprodsearch/v2/riname/", "product", "items/", "result", "/productname"), "items/0/active_ingredients/0/active_ing"), "items/0/eparegnumber")))

        // webApp.url = getUrl(ScriptApp);

        return contentApp(
          '\n  <? var webApp = epaA("https://ordspub.epa.gov/ords/pesticides/ppls/", epaB("https://ordspub.epa.gov/ords/pesticides/ProductSearch/searchWithIngName/v1/", epaC("https://ordspub.epa.gov/ords/pesticides/pplstxt/", epaD("https://ordspub.epa.gov/ords/pesticides/cswu/ProductSearch/partialprodsearch/v2/riname/", product, "items/", result, "/productname"), "items/0/active_ingredients/0/active_ing"), "items/0/eparegnumber")); ?>\n <?! webApp ?>\n  <? var tabulator = edgarData(); ?>\n <?!= tabulator ?>\n <? var schedule = dateTime()?>\n  <?!= schedule ?>\n ',
          {
            product: product,
            result: result,
          },
        ); //:contentFile('uiAccess');

      case "epa": // <!----------------------------------JSON API Results------------------------------------!>
        // dataUrl = jsonINIT(itemA + itemB, "items/0/eparegnumber" + itemC, "items/0/active_ingredients/0/active_ing" + itemD, "items/" + e.parameter["result"] + "/productname");

        // epaUrl = getUrl(ScriptApp) + "?test=" + e.parameter["test"] + "&webTest=" + e.parameter["webTest"] + "&product=" + e.parameter["product"] + "&result=" + e.parameter["result"];

        // epaUrl = epaA(epaB(epaC(epaD(e))));

        // webApp = edgarData(epaUrl, e.parameter["product"], epaA(epaB(epaC(epaD(e)))));

        // splittedJson = covObjects(testData(splitValues(fetchDataSource("https://ordspub.epa.gov/ords/pesticides/ppls/66551-1"), "items/0", "/")), [["key"], ["value"]])

        // webApp = epaA(edgarData("https://www.sec.gov/files/company_tickers.json", "Edgar", dateTime().getContent()).getContent(), epaA("https://ordspub.epa.gov/ords/pesticides/ppls/", epaB("https://ordspub.epa.gov/ords/pesticides/ProductSearch/searchWithIngName/v1/", epaC("https://ordspub.epa.gov/ords/pesticides/pplstxt/", epaD(e, "https://ordspub.epa.gov/ords/pesticides/cswu/ProductSearch/partialprodsearch/v2/riname/", "product", "items/", "result", "/productname"), "items/0/active_ingredients/0/active_ing"), "items/0/eparegnumber")));

        // webApp.url = getUrl(ScriptApp);

        return contentApp(
          '\n  <? var webAppUrls = navBar("https://ordspub.epa.gov/ords/pesticides/cswu/ProductSearch/partialprodsearch/v2/riname/" + product, "Pesticides"); ?>\n  <?!= webAppUrls ?>\n  <? var webApp = edgarData(covObjects(testData(splitValues(fetchDataSource("https://ordspub.epa.gov/ords/pesticides/cswu/ProductSearch/partialprodsearch/v2/riname/" + product), "items", "/")), [["key"], ["value"]])) ?>\n  <?!= webApp ?>\n  ',
          {
            product: product,
          },
        ); //:contentFile('uiAccess');

      case "tech": // <!----------------------------JSON API Results--------------------------------!>
        // dataUrl = jsonINIT(itemA + itemB, "items/0/eparegnumber" + itemC, "items/0/active_ingredients/0/active_ing" + itemD, "items/" + e.parameter["result"] + "/productname");

        // epaUrl = getUrl(ScriptApp) + "?test=" + e.parameter["test"] + "&webTest=" + e.parameter["webTest"] + "&product=" + e.parameter["product"] + "&result=" + e.parameter["result"];

        // epaUrl = epaA(epaB(epaC(epaD(e))));

        // webApp = edgarData(epaUrl, e.parameter["product"], epaA(epaB(epaC(epaD(e)))));

        // splittedJson = covObjects(testData(splitValues(fetchDataSource("https://ordspub.epa.gov/ords/pesticides/ppls/66551-1"), "items/0", "/")), [["key"], ["value"]])

        return contentApp(
          '\n  <? var webAppUrls = navBar("https://www.sec.gov/files/company_tickers.json", "Edgar"); ?>\n  <?!= webAppUrls ?>\n <? var webApp = edgarData(widgetData(splitNoX(fetchDataSource("https://www.sec.gov/files/company_tickers.json")), [["key"],["value"]])); ?>\n  <?!= webApp ?>\n  ',
          {},
        ); //:contentFile('uiAccess');

      default: // <!-------------------------------------Default Website-------------------------------------!>
        if (!username["parameter"]) {
          var sheetName =
            [username][5] ||
            Math.floor(Math.random() * Math.floor(username.length));
        } else {
          var sheetName =
            username.parameter["sheetname"] ||
            Math.floor(Math.random() * Math.floor(username.length));
        }

        var ss = spreadSheetCreate(
          sheetName,
          sheetName,
          ["data"],
          [["a"], ["b"], ["c"], ["d"], ["e"], ["f"], ["g"], ["h"], ["i"]],
        );

        if (typeof ss === "string") {
          var ssAppName = SpreadsheetApp.openByUrl(ss)
            .getActiveSheet()
            .getSheetName();
          var sheet = ssGetSheetBySpreadsheetUrl(ss, ssAppName);

          var range = sheet.getDataRange();

          var data = range.getValues();
        } else {
          console.log(ss + " || ||  " + typeof ss);
        }
        if (typeof ss === "object") {
          var data = ss.getDisplayValues();
        }

        if (!username["parameter"]) {
          var headings =
            [data].map(function (val) {
              return val.toString().toLowerCase();
            }) ||
            data[Math.floor(Math.random() * Math.floor(username.length))].map(
              function (val) {
                return val.toString().toLowerCase();
              },
            );
        } else {
          var headings =
            data[username.parameter["headers"]].map(function (val) {
              return val.toString().toLowerCase();
            }) ||
            data[Math.floor(Math.random() * Math.floor(username.length))].map(
              function (val) {
                return val.toString().toLowerCase();
              },
            );
        }

        if (!username["parameter"]) {
          var noHeaders =
            data.slice([username][7]) ||
            data.slice(Math.floor(Math.random() * Math.floor(username.length)));
        } else {
          var noHeaders =
            data.slice(username.parameter["noheaders"]) ||
            data.slice(Math.floor(Math.random() * Math.floor(username.length)));
        }

        var outputData = covObjects(noHeaders, headings);

        var output = JSON.stringify({
          status: "success",
          data: outputData,
        });

        var rows = [];

        var values = range.getValues();

        for (var row in values) {
          rows.push([]);
          for (var col in values[row]) {
            rows[row].push(values[row][col]);
          }
        }

        let search = rows.filter(function (a) {
          return a[0] == query;
        });

        if (query != null) {
          var rowsToReturn = rows.filter(function (a) {
            return a[3] == query;
          });

          console.log(rowsToReturn[0]);

          const outputQuery = covObjects(rowsToReturn, headings);

          inventoryApp = contentApp(outputQuery, { outputQuery: "Fun Stuff" });
        } else {
          inventoryApp = contentApp(
            "\n <h1>Funny Story, <?!= data ?> </h1>\n  `<h1>Ha Ha LOL</h1>\n  ",
            { data: "Die Without You! " },
          );
        }

        inventoryApp.content = jsonINIT(
          "https://www.clubhouse.com/@fabianlewis?utm_medium=ch_profile&utm_campaign=lhTUtHb2bYqPN3w8EEB7FQ-247242",
        );

        const bloggerUrl =
          "https://www.blogger.com/blog/posts/3269360121752133428";

        // const dataUrl = "https://ordspub.epa.gov/ords/pesticides/cswu/ProductSearch/partialprodsearch/v2/riname/" + e.parameter["product"];

        const groupsUrl = "https://groups.google.com/my-groups";

        const tweetUrl = "https://twitter.com/trchaury";

        const instaUrl = "https://www.instagram.com/flew72/";

        const financeUrl = getUrl(ScriptApp);

        const inventoryUrl = getUrl(ScriptApp);

        const dataSheetName =
          product +
          " " +
          new Date().toLocaleDateString() +
          " " +
          new Date().toLocaleTimeString();

        const dataO = covArrays(
          companyName(
            "https://ordspub.epa.gov/ords/pesticides/cswu/ProductSearch/partialprodsearch/v2/riname/" +
              product,
          ),
          1,
        );

        const rowsO = testData(dataO[0]);

        const ssO = spreadSheetCreate(
          sheetName,
          sheetName,
          ["data"],
          testData(sliceValues(dataSheetName.split("/"))),
        );

        listType = "playlist";

        list = "UU6DOFpA9UCTgNwJiVX1IOpQ";

        // const jsData = covObjects(testData(jsonXpath("https://www.sec.gov/files/company_tickers.json")), [["id"],["ticker"],["title"]]);

        // const widgetData = JSON.stringify(covObjects(testData(jsData), [["id"],["ticker"],["title"]]));

        return contentApp(
          `<? var properties = properties ?>
      <?!= properties ?>
      <script>document.getElementById("");}</script>
      <? var productNameEpaData = JSON.stringify(productName("https://ordspub.epa.gov/ords/pesticides/cswu/ProductSearch/partialprodsearch/v2/riname/" + product, "items", "/", 0, 1, "productname")); ?>
      <?!= productNameEpaData ?>
      </p></div></div></div>
      <div class="row">
      <div class="container col s12">
      <div class="container col s12">
      <span>
        <p id="p2" style="border-width:3px; border-style:solid; border-color:#FF0000; padding: 1em;">     
        <strong>
          <? var runIt = ssDatabase(rowsO, ssO); ?><?!= runIt ?>
        </strong></p></span></div></div>
      <div class="row">
      <div class="container col s12">
      <div class="container col s12">
      <span>
        <p id="p2" style=\"border-width:3px; border-style:solid; border-color:#FF0000; padding: 1em;">
        <strong>
          <? var productDistEpaData = JSON.stringify(covArrays(companyName("https://ordspub.epa.gov/ords/pesticides/cswu/ProductSearch/partialprodsearch/v2/riname/" + product), 1)); ?>
          <?!= productDistEpaData ?>
        </strong></p></span></div></div>
      <? var yourVideos = dtls(listType); ?><?!= yourVideos ?>
      <? var calendarDays = dateTime(); ?><?!= calendarDays ?>`,
          {
            properties: contentApp(
              `<? var webAppUrls = navBar("https://www.sec.gov/files/company_tickers.json", "Edgar", "https://avaddc.com/agency/the-paul-rue-agency/4022/", "Defensive Driving"); ?><?!= webAppUrls ?>
        <div class="row">
        <div class="container col s12">
        <div class="container col s12">
        <p id="p1">`,
            ),
            ssO: ssO,
            rowsO: rowsO,
            dataSheetName: dataSheetName,
            xpath: xpath,
            product: product,
            listType: listType,
            list: list,
          },
        ); //:contentFile('uiAccess');
    }
  } else {
    switch (
      e.parameter["htmlTest"] ||
      Math.floor(Math.random() * Math.floor(e.length))
    ) {
      case "sec": // <!------------------JSON API Results---------------------------!>
        // dataUrl = tabData("https://www.sec.gov/files/company_tickers.json", 0, [["id"],["ticker"],["title"]]);

        // webApp = edgarData("https://www.sec.gov/files/company_tickers.json", "SEC Edgar Data", dataUrl );

        // webApp = epaA(edgarData("https://www.sec.gov/files/company_tickers.json", "Edgar", dateTime().getContent()).getContent(), epaA("https://ordspub.epa.gov/ords/pesticides/ppls/", epaB("https://ordspub.epa.gov/ords/pesticides/ProductSearch/searchWithIngName/v1/", epaC("https://ordspub.epa.gov/ords/pesticides/pplstxt/", epaD(e, "https://ordspub.epa.gov/ords/pesticides/cswu/ProductSearch/partialprodsearch/v2/riname/", "product", "items/", "result", "/productname"), "items/0/active_ingredients/0/active_ing"), "items/0/eparegnumber")))

        // webApp.url = getUrl(ScriptApp);

        return contentApp(
          '\n  <? var webApp = epaA("https://ordspub.epa.gov/ords/pesticides/ppls/", epaB("https://ordspub.epa.gov/ords/pesticides/ProductSearch/searchWithIngName/v1/", epaC("https://ordspub.epa.gov/ords/pesticides/pplstxt/", epaD("https://ordspub.epa.gov/ords/pesticides/cswu/ProductSearch/partialprodsearch/v2/riname/", product, "items/", result, "/productname"), "items/0/active_ingredients/0/active_ing"), "items/0/eparegnumber")); ?>\n <?! webApp ?>\n  <? var tabulator = edgarData(); ?>\n <?!= tabulator ?>\n <? var schedule = dateTime()?>\n  <?!= schedule ?>\n ',
          {
            product: product,
            result: result,
          },
        ); //:contentFile('uiAccess');

      case "epa": // <!----------------------------------JSON API Results------------------------------------!>
        // dataUrl = jsonINIT(itemA + itemB, "items/0/eparegnumber" + itemC, "items/0/active_ingredients/0/active_ing" + itemD, "items/" + e.parameter["result"] + "/productname");

        // epaUrl = getUrl(ScriptApp) + "?test=" + e.parameter["test"] + "&webTest=" + e.parameter["webTest"] + "&product=" + e.parameter["product"] + "&result=" + e.parameter["result"];

        // epaUrl = epaA(epaB(epaC(epaD(e))));

        // webApp = edgarData(epaUrl, e.parameter["product"], epaA(epaB(epaC(epaD(e)))));

        // splittedJson = covObjects(testData(splitValues(fetchDataSource("https://ordspub.epa.gov/ords/pesticides/ppls/66551-1"), "items/0", "/")), [["key"], ["value"]])

        // webApp = epaA(edgarData("https://www.sec.gov/files/company_tickers.json", "Edgar", dateTime().getContent()).getContent(), epaA("https://ordspub.epa.gov/ords/pesticides/ppls/", epaB("https://ordspub.epa.gov/ords/pesticides/ProductSearch/searchWithIngName/v1/", epaC("https://ordspub.epa.gov/ords/pesticides/pplstxt/", epaD(e, "https://ordspub.epa.gov/ords/pesticides/cswu/ProductSearch/partialprodsearch/v2/riname/", "product", "items/", "result", "/productname"), "items/0/active_ingredients/0/active_ing"), "items/0/eparegnumber")));

        // webApp.url = getUrl(ScriptApp);

        return contentApp(
          '\n  <? var webAppUrls = navBar("https://ordspub.epa.gov/ords/pesticides/cswu/ProductSearch/partialprodsearch/v2/riname/" + product, "Pesticides"); ?>\n  <?!= webAppUrls ?>\n  <? var webApp = edgarData(covObjects(testData(splitValues(fetchDataSource("https://ordspub.epa.gov/ords/pesticides/cswu/ProductSearch/partialprodsearch/v2/riname/" + product), "items", "/")), [["key"], ["value"]])) ?>\n  <?!= webApp ?>\n  ',
          {
            product: product,
          },
        ); //:contentFile('uiAccess');

      case "tech": // <!----------------------------JSON API Results--------------------------------!>
        // dataUrl = jsonINIT(itemA + itemB, "items/0/eparegnumber" + itemC, "items/0/active_ingredients/0/active_ing" + itemD, "items/" + e.parameter["result"] + "/productname");

        // epaUrl = getUrl(ScriptApp) + "?test=" + e.parameter["test"] + "&webTest=" + e.parameter["webTest"] + "&product=" + e.parameter["product"] + "&result=" + e.parameter["result"];

        // epaUrl = epaA(epaB(epaC(epaD(e))));

        // webApp = edgarData(epaUrl, e.parameter["product"], epaA(epaB(epaC(epaD(e)))));

        // splittedJson = covObjects(testData(splitValues(fetchDataSource("https://ordspub.epa.gov/ords/pesticides/ppls/66551-1"), "items/0", "/")), [["key"], ["value"]])

        return contentApp(
          '\n  <? var webAppUrls = navBar("https://www.sec.gov/files/company_tickers.json", "Edgar"); ?>\n  <?!= webAppUrls ?>\n <? var webApp = edgarData(widgetData(splitNoX(fetchDataSource("https://www.sec.gov/files/company_tickers.json")), [["key"],["value"]])); ?>\n  <?!= webApp ?>\n  ',
          {},
        ); //:contentFile('uiAccess');

      default: // <!-------------------------------------Default Website-------------------------------------!>
        var sheetName = e.parameter["sheetname"];

        var sheet = spreadSheet().getSheetByName(sheetName);

        var range = sheet.getDataRange();

        var data = range.getValues();

        var headings = data[e.parameter["headers"]].map(function (val) {
          return val.toString().toLowerCase();
        });

        var noHeaders = data.slice(e.parameter["noheaders"]);

        var outputData = covObjects(noHeaders, headings);

        var output = JSON.stringify({
          status: "success",
          data: outputData,
        });

        var rows = [];

        var values = range.getValues();

        for (var row in values) {
          rows.push([]);
          for (var col in values[row]) {
            rows[row].push(values[row][col]);
          }
        }

        let search = rows.filter(function (a) {
          return a[0] == query;
        });

        if (query != null) {
          var rowsToReturn = rows.filter(function (a) {
            return a[3] == query;
          });

          console.log(rowsToReturn[0]);

          const outputQuery = covObjects(rowsToReturn, headings);

          inventoryApp = contentApp(outputQuery, { outputQuery: "Fun Stuff" });
        } else {
          inventoryApp = contentApp(
            "\n <h1>Funny Story, <?!= data ?> </h1>\n  `<h1>Ha Ha LOL</h1>\n  ",
            { data: "Die Without You! " },
          );
        }

        inventoryApp.content = jsonINIT(
          "https://www.clubhouse.com/@fabianlewis?utm_medium=ch_profile&utm_campaign=lhTUtHb2bYqPN3w8EEB7FQ-247242",
        );

        const bloggerUrl =
          "https://www.blogger.com/blog/posts/3269360121752133428";

        // const dataUrl = "https://ordspub.epa.gov/ords/pesticides/cswu/ProductSearch/partialprodsearch/v2/riname/" + e.parameter["product"];

        const groupsUrl = "https://groups.google.com/my-groups";

        const tweetUrl = "https://twitter.com/trchaury";

        const instaUrl = "https://www.instagram.com/flew72/";

        const financeUrl = getUrl(ScriptApp);

        const inventoryUrl = getUrl(ScriptApp);

        const dataSheetName =
          product +
          " " +
          new Date().toLocaleDateString() +
          " " +
          new Date().toLocaleTimeString();

        const dataO = covArrays(
          companyName(
            "https://ordspub.epa.gov/ords/pesticides/cswu/ProductSearch/partialprodsearch/v2/riname/" +
              product,
          ),
          1,
        );

        const rowsO = testData(dataO[0]);

        const ssO = spreadSheetCreate(
          testData(sliceValues(dataSheetName.split("/"))),
        );

        listType = "playlist";

        list = "UU6DOFpA9UCTgNwJiVX1IOpQ";

        // const jsData = covObjects(testData(jsonXpath("https://www.sec.gov/files/company_tickers.json")), [["id"],["ticker"],["title"]]);

        // const widgetData = JSON.stringify(covObjects(testData(jsData), [["id"],["ticker"],["title"]]));

        return contentApp(
          '\n  \n  <? var properties = properties ?>\n  <?!= properties ?>\n  \n  <script>\n  document.getElementById("");\n  }\n </script>\n \n  <? var productNameEpaData = JSON.stringify(productName("https://ordspub.epa.gov/ords/pesticides/cswu/ProductSearch/partialprodsearch/v2/riname/" + product, "items", "/", 0, 1, "productname")); ?>\n  <?!= productNameEpaData ?>\n  </p>\n  </div>\n </div>\n </div>\n  <div class="row">\n  <div class="container col s12">\n  <div class="container col s12">\n <span><p id="p2" style="border-width:3px; border-style:solid; border-color:#FF0000; padding: 1em;"><strong>\n <? var runIt = ssDatabase(rowsO, ssO); ?>\n  <?!= runIt ?>\n  </strong></p></span>\n  </div>\n </div>\n  <div class="row">\n  <div class="container col s12">\n  <div class="container col s12">\n <span><p id="p2" style="border-width:3px; border-style:solid; border-color:#FF0000; padding: 1em;"><strong>\n <? var productDistEpaData = JSON.stringify(covArrays(companyName("https://ordspub.epa.gov/ords/pesticides/cswu/ProductSearch/partialprodsearch/v2/riname/" + product), 1)); ?>\n  <?!= productDistEpaData ?>\n  </strong></p></span>\n  </div>\n </div>\n <? var yourVideos = dtls(listType); ?>\n   <?!= yourVideos ?>\n  <? var calendarDays = dateTime(); ?>\n  <?!= calendarDays ?>\n  ',
          {
            properties: contentApp(
              '\n \n  <? var webAppUrls = navBar("https://www.sec.gov/files/company_tickers.json", "Edgar", "https://avaddc.com/agency/the-paul-rue-agency/4022/", "Defensive Driving"); ?>\n  <?!= webAppUrls ?>\n  <div class="row">\n  <div class="container col s12">\n  <div class="container col s12">\n <p id="p1">\n  ',
            ),
            ssO: ssO,
            rowsO: rowsO,
            dataSheetName: dataSheetName,
            xpath: xpath,
            product: product,
            listType: listType,
            list: list,
          },
        ); //:contentFile('uiAccess');
    }
  }
};
