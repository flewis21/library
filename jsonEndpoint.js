function jsonEndpoint(e) {
  return contentApp(
    '<?= "Hello World" ?><div class="clubhouse"><? var schedule = dateTime(); ?><?!= schedule ?></div>',
  );
}
// webApp = testJSON(e, testData(jsonXpath("https://www.sec.gov/files/company_tickers.json")));
//:contentFile('uiAccess');
