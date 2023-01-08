var jsonEndpoint = function (e) {
  // webApp = testJSON(e, testData(jsonXpath("https://www.sec.gov/files/company_tickers.json")));
  return contentApp(
    '<?= "Hello World" ?><div class="clubhouse"><? var schedule = dateTime(); ?><?!= schedule ?></div>'
  ); //:contentFile('uiAccess');
};
