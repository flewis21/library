function donorsChoice() {
  const rowsDefault = testData(
    jsonXpath(autoGlobe.uniqueCoArray()),
  );
  let webApp = testJSON(
    testData(jsonXpath(autoGlobe.uniqueCoArray())),
  );
  let options = { muteHTTPExceptions: true };
  webApp.content = jsonINIT(
    getUrlResponse("https://www.brighttalk.com/webcast/19371/546972?player-preauth=kzSDXpxDKGb23OkAQ2MUQtzW1pSkBUbzaaJVpG66h0k%3D&utm_source=brighttalk-promoted&utm_medium=email&utm_term=Audience400648&utm_campaign=AUD-12113&utm_content=2022-08-5",options)
  );
  let baseUrl = getUrl(ScriptApp);
  console.log(baseUrl);
  let inventoryUrl =
    getUrl(ScriptApp) + "?func=request&sheetName=Inventory&headers=0&q="; //.concat(rows,);
  console.log(inventoryUrl);
  let financeUrl = getUrl(ScriptApp) + "?func=jsonXpath&q=".concat(rowsDefault);
  console.log(financeUrl);
  let ht = `
      <div class="clubhouse">${webApp.content}</div>
        <h2 class="search-overlay__section-title">General Information</h2>
      <div class="navbar">
        <nav class="nav">
          <a href="${financeUrl}" class="nav__link" data-link>Finance</a>
          <a href="${inventoryUrl}" class="nav__link"  data-link>Inventory</a>
        </nav>
      </div>
      <?!= includeBlob(${autoGlobe.functionRegistry.getHtmlList()[Math.floor(Math.random() * Math.floor(5))]}).getContent(); ?>`
  return ht
}
