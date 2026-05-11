function jsonEndpoint(e) {
  return new ContentApp(
    '<?= "Hello World" ?><div class="clubhouse"><? var schedule = dateTime(); ?><?!= schedule ?></div>',
  ).tmp;
}
// webApp = testJSON(e, testData(jsonXpath("https://www.sec.gov/files/company_tickers.json")));
//:contentFile('uiAccess');
