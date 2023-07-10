var finTechWebsite = function () {
  const rowsXpath = testData(
    jsonXpath("https://www.sec.gov/files/company_tickers.json"),
  );
  webApp = testJSON(
    testData(jsonXpath("https://www.sec.gov/files/company_tickers.json")),
  );
  webApp.content = jsonINIT(
    "https://www.clubhouse.com/@fabianlewis?utm_medium=ch_profile&utm_campaign=lhTUtHb2bYqPN3w8EEB7FQ-247242",
  );
  baseUrl = getUrl(ScriptApp);
  console.log(baseUrl);
  inventoryUrl = getUrl(ScriptApp); // + "?webApp=request&sheetName=Inventory&headers=0&q="//.concat(rows,);
  console.log(inventoryUrl);
  financeUrl = getUrl(ScriptApp); // + "?webApp=jsonXpath&q=".concat(rowsDefault[10][1],);
  console.log(financeUrl);
  return contentFile("index").setContent(
    includeApp(
      '<!-- \n                    <?!= include("index"); ?> -->\n                    <h1 class="search-overlay__section-title">General Information</h1>\n                    <ul class="link-list min-list">\n                     <li><div class="query-results"><a target="_top" href="https://www.sec.gov/edgar/browse/?CIK='.concat(
        rowsXpath[0][0],
        '&owner=exclude">'.concat(
          rowsXpath[0][2],
          '</a></div></li>\n                    </ul>\n                    <div  id="table-body"></div><script>\n                     const data = '.concat(
            rowsXpath,
            'document.addEventListener("DOMContentLoaded", function() {\n                    const tbody = document.getElementById("table-body");\n                    data.forEach(function(r) {\n                    console.log(data)\n                    const link = document.createElement("a");\n                    link.textContent = ` value=${r[1]} target="_blank" href="https://www.sec.gov/edgar/browse/?CIK=${r[0][0]}&owner=exclude"`;\n                    tbody.appendChild(link);\n                    })\n                    });\n                    </script>\n                    <div class="clubhouse">'.concat(
              webApp.content,
              '</div>\n                    <script>\n                    document.querySelector(".search-overlay__section-title").setAttribute("style", "background-color: red;color: white;")\n                    document.querySelector(".query-results").setAttribute("style", "background-color: red; color: yellow;")\n                    </script>\n                    ',
            ),
          ),
        ),
      ),
    ),
  ); //:contentFile('uiAccess');
};
