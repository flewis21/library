var testJSON = function (e, rows) {
  const myOhj = [
    { first: "Fabian", last: "Lewis" },
    { first: "Fabes", last: "Lewis" },
    { first: "Joe", last: "Lewis" },
  ];
  const val = JSON.stringify(myOhj);
  var query = rows[e.parameter["i"]][0];
  console.log(query);
  if (query != null) {
    var rowsToReturn = rows.filter(function (a) {
      return a[0] == query;
    });
    webApp = HtmlService.createTemplate(
      ContentService.createTextOutput(
        JSON.stringify({ data: rowsToReturn, error: false })
      )
        .setMimeType(ContentService.MimeType.JSON)
        .getContent()
    );
  }
  return contentApp(webApp); //:contentFile('uiAccess');
};
