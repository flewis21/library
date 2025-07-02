var checkDay = function () {
  var testList = urlDataSource(
    `https://www.bing.com/search?q=site%3Ayoutube.com&PC=U316&FORM=CHROMN`,
  );
  console.log(testList);
  var emails = email();
  var emailsCount = email().toString().split(",").length;
  var randomEmail = emails[Math.floor(Math.random() * emailsCount)];
  var currentEmail = randomEmail;
  var startPageUrl = getUrl(ScriptApp);
  var input = sheetCalc();
  // console.log(input)
  for (var i = 0; i < input.length; i++) {
    var randomKey = Math.floor(Math.random() * Math.floor(input.length)); // Math.floor(Math.random())
    var currentCik = input[i][randomKey]["cik"];
    var currentTicker = input[i][randomKey]["ticker"];
    var currentTitle = input[i][randomKey]["title"];

    var randomCompany = contentFile("checkOnDay", {
      cik_str: currentCik,
      ticker: currentTicker,
      title: currentTitle,
      relatedVideo: videoPlayer(`playList`, currentTitle),
      startPageUrl: startPageUrl,
    });
    for (var [key, val] in randomCompany) {
      console.log(key);
      console.log(val);
    }
  }
  var openTheForm = contentFile("popUpOpen", {
    openPopup: "".concat(
      'function openTheForm() {\n  document.getElementById("popupForm").style.display = "block";\n}',
      "",
    ),
    closePopup: "".concat(
      'function closeTheForm() {\n  document.getElementById("popupForm").style.display = "none";\n}',
      "",
    ),
    startPageUrl: startPageUrl,
  });
  // let result;
  // result = lower(input, (acc) => acc, )
  // result = input.reduce(raise, []);
  // console.log(result)
  // result = input.reduce((acc, item) => {
  // return {...acc, [[1]]: item }
  // }, {});
  // var ciKString = result.filter(function (i) { return i});
  // const { cik_str, ticker, title } = day2
  //   let objParts = {}
  //     for (var [key, { test }] of  Object.entries(day2))
  //     {
  //       objParts[test] = key
  //     }
  return contentApp("<?!= companyInfo ?>", {
    companyInfo: randomCompany,
    popUpOpen: openTheForm,
  }); //:contentFile("uiAccess")
  console.log(html);
};
