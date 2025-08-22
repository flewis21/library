var donorsChoice = function () {
  const rowsDefault = testData(
    jsonXpath("https://www.sec.gov/files/company_tickers.json"),
  );
  webApp = testJSON(
    testData(jsonXpath("https://www.sec.gov/files/company_tickers.json")),
  );
  webApp.content = jsonINIT(
    "https://www.brighttalk.com/webcast/19371/546972?player-preauth=kzSDXpxDKGb23OkAQ2MUQtzW1pSkBUbzaaJVpG66h0k%3D&utm_source=brighttalk-promoted&utm_medium=email&utm_term=Audience400648&utm_campaign=AUD-12113&utm_content=2022-08-5",
  );
  baseUrl = getUrl(ScriptApp);
  console.log(baseUrl);
  inventoryUrl =
    getUrl(ScriptApp) + "?webApp=request&sheetName=Inventory&headers=0&q="; //.concat(rows,);
  console.log(inventoryUrl);
  financeUrl = getUrl(ScriptApp) + "?webApp=jsonXpath&q=".concat(rowsDefault);
  console.log(financeUrl);
  return HtmlService.createTemplate(
    `
      <div class="clubhouse">${webApp.content}</div>
        <h2 class="search-overlay__section-title">General Information</h2>
      <div class="navbar">
        <nav class="nav">
          <a href="${financeUrl}" class="nav__link" data-link>Finance</a>
          <a href="${inventoryUrl}" class="nav__link"  data-link>Inventory</a>
        </nav>
      </div>
      <?!= includeBlob("Untitled").getContent(); ?>`,
  )
    .evaluate()
    .getContent(); //:contentFile('uiAccess');
};
