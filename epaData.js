function companyName(companyNameUrl) {
  const companyNameSecData = epaA(aVar(companyNameUrl));
  const companyArray = testData(companyNameSecData);
  return companyArray;
};

// console.log(companyNameSecData)
// console.log(myObject)

function epaData(e) {
  var urlProduct =
    "https://script.google.com/macros/s/AKfycbzhrxdXzM08AAwA5ualRXdnDtV6C_xQ7bcq4v6H0HNdBqPr2C8A1URyWN0FLLccQuoA/exec?func=epaData&args=";
  var urlIngredient =
    "https://script.google.com/macros/s/AKfycbzhrxdXzM08AAwA5ualRXdnDtV6C_xQ7bcq4v6H0HNdBqPr2C8A1URyWN0FLLccQuoA/exec?func=epaIng&args=";
  var urlCalendar =
    "https://script.google.com/macros/s/AKfycbzhrxdXzM08AAwA5ualRXdnDtV6C_xQ7bcq4v6H0HNdBqPr2C8A1URyWN0FLLccQuoA/exec?func=dateTime&args=";
  var urlPlay =
    "https://script.google.com/macros/s/AKfycbzhrxdXzM08AAwA5ualRXdnDtV6C_xQ7bcq4v6H0HNdBqPr2C8A1URyWN0FLLccQuoA/exec?func=misBing&args=";
  var rndMathArr = [
    `${randomSubstance(null, null, 2)} ${randomSubstance(null, null, 2)}`,
  ];
  var rndMathProduct =
    [e][0] ||
    rndMathArr.toString().split(" ")[
      Math.floor(
        Math.random() * Math.floor(rndMathArr.toString().split(" ").length),
      )
    ];
  var rndMathTest = productNamePartial(rndMathProduct);
  if (rndMathTest) {
    if (typeof rndMathTest["productname"] === "undefined") {
      var rndMthTestStatus = rndMathTest["product_status"];
      var rndMthTestTitle = rndMathTest[0]["rndTitle"];
    }

    if (typeof rndMathTest["productname"] !== "undefined") {
      var mthTestDate = rndMathTest["productstatusdate"];
      var epaProductName = rndMathTest["productname"].split(" ");
      var arrayMath = [`${randomSubstance(epaProductName, 0, 1)}`];
      var product =
        [e][0] ||
        arrayMath.toString().split(" ")[
          Math.floor(
            Math.random() * Math.floor(arrayMath.toString().split(" ").length),
          )
        ];
      var test = productNamePartial(encodeURIComponent(product));
      if (typeof test["productname"] === "undefined") {
        var testTitle = test[0]["rndTitle"];
      }
      if (typeof rndMathTest["productname"] !== "undefined") {
        var test2 = productRegNo(test["eparegno"]);
        // var test3 = productFullName(test["productname"]);
        if (test2) {
          if (typeof test2["active_ingredients"] !== "undefined") {
            var uniqueData = [];
            var actIngUn = test2["active_ingredients"];
            for (
              var i = 0, l = test2["active_ingredients"].length;
              i < l;
              i++
            ) {
              var isIngredient = test2["active_ingredients"][i]["active_ing"];
              if (isIngredient) {
                var pIName = productIngName(encodeURIComponent(isIngredient));
                if (typeof pIName !== "undefined") {
                  uniqueData.push(pIName["items"] || pIName["first"] || pIName);
                }
              }
            }
            var ingArray =
              uniqueData[
                Math.floor(Math.random() * Math.floor(uniqueData.length))
              ];
            if (ingArray) {
              if (typeof ingArray[0]["productname"] === "undefined") {
                var ingTitle = ingArray[0]["rndTitle"];
              }
            }
            var randNum = Math.floor(
              Math.random() * Math.floor(ingArray.length),
            );
            var headings = splitArrHeadings(ingArray[randNum]);
            var range = splitArrRange(ingArray[randNum]);
            var values = [];
            values.push(range);
            var rows = [];
            for (var row in values) {
              rows.push([]);
              for (var col in values[row]) {
                rows[row].push(values[row][col]);
              }
            }
            var record = {};
            for (var i = 0, l = range.length; i < l; i++) {
              record[headings[i]] = range[i];
            }
            var dataArray = [];
            dataArray.push(record);
            var jo = {};
            jo.user = dataArray;
            var coTable = jo.user.map((r) => {
              return `<tr><td><a class="waves-effect waves-light btn" href="${urlIngredient + encodeURIComponent(r["ingredientname"])}" target="_blank">${r["ingredientname"]}</a></td><td><a class="waves-effect waves-light btn" href="${urlPlay + encodeURIComponent(r["registrationstatus"])}" target="_blank">${r["registrationstatus"]}</a></td><td><a class="waves-effect waves-light btn" href="${urlPlay + encodeURIComponent(r["productnamestatus"])}" target="_blank">${r["productnamestatus"]}</a></td><td><a class="waves-effect waves-light btn" href="${urlCalendar + encodeURIComponent(r["productstatusdate"])}" target="_blank">${r["productstatusdate"]}</a></td><td><a class="waves-effect waves-light btn" href="${urlProduct + encodeURIComponent(r["productname"])}" target="_blank">${r["productname"]}</a></td></tr>`;
            });
            var result = JSON.stringify(coTable);
            // var t4 = newEPAData(productIngName(test2["active_ingredients"][0]["active_ing"]));
            var ing2name = ingArray[randNum]["productname"] || product;
            var test5 = productChemCode(
              test2["active_ingredients"][0]["pc_code"],
            );
            var test6 = productAbstractNum(
              test2["active_ingredients"][0]["cas_number"],
            );
            var statusDate = ingArray[randNum]["productstatusdate"];
            var nameStatus = ingArray[randNum]["productnamestatus"];
            var altNames = ingArray[randNum]["alternatebrandnames"];
            var namedIngredient = ingArray[randNum]["ingredientname"];
            var productStatus = ingArray[randNum]["registrationstatus"];
          }
        }
      }
    }
  }
  var startPageUrl = getUrl(ScriptApp);
  var today = new Date(statusDate || mthTestDate || new Date());
  var dateNow = today.toDateString();
  var timeNow = today.toTimeString();
  var rule = today.toDateString() + " - " + today.toTimeString();
  const html = HtmlService.createTemplate(`
  <!DOCTYPE html>
    <html>
      <head>
        <base target="_top">
        <?!= materializeCss ?>
      </head>
      <body class="z-depth-5 grey">
        <div class="row">
          <a href="https://flewis21.github.io/Don-time-Life-Services/" target="_top"><span><h1 class="z-depth-5 grey toolbar_icon toolbar_iconHover scale-transition scale-out scale-in btn-large receipt">Don'time Life Services!</h1></span></a>
        <div class="row">
        <div class="col s10 card-panel l12 m12 push-s1">
        <div class="video-container grey darken-4 z-depth-5">
        <div class="col s12 l12 m12" id="player1">
          <?!= dtls(myVideo) ?></div>
        </div></div></div>
        </div>
        <div class="row">
        <div class="col s10 card-panel l12 m12 push-s1">
        <div class="z-depth-5 grey toolbar_icon toolbar_iconHover container">
        <div class="col s12 l12 m12">
          <input style="font-size:18pt;color:green" placeholder="<?!= ex2 ?>" class="timepicker flow-text menu-img z-depth-5 card-panel black scale-transition scale-out scale-in receipt btn-large" id="prefTime"  type="search" />
        </div></div></div></div>
        <?!= materializeJs ?>
        <script>
          <?!= dOMContentLoaded ?>
        </script>
        <input type="hidden" value="<?= getUrl(ScriptApp) ?>" id="breakUrl" />
        <input type="hidden" value="<?= ext5 ?>" id="pingname" />
      </body>
    </html>`);
  html.materializeCss = HtmlService.createHtmlOutput(
    `
    <link href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" rel="stylesheet"></link>`,
  ).getContent();
  html.dOMContentLoaded = HtmlService.createHtmlOutput(
    `document.addEventListener("DOMContentLoaded", 
    function() 
      {let timePicker = document.getElementById("breakUrl");
      M.Timepicker.init(timePicker, { defaultTime: "now" })})
      document.getElementById("prefTime").addEventListener("change", 
        function()
          {//console.log(document.getElementById("test").innerHTML)
          // Init a timeout variable to be used below
          let timeout = null;
          (() =>
                  {
          // Clear the timeout if it has already been set.
          // This will prevent the previous task from executing
          // if it has been less than <MILLISECONDS>
          // clearTimeout(timeout);

          // Make a new timeout set to go off in 1000ms (1 second)
          // timeout = setTimeout
          // (function  () 
                        // {
          // console.log('Input Value:', textInput.value);
                  //  }, 5000)();
          if (typeof url === "undefined")
                                          {
            var urlData = document.getElementById("breakUrl").value;
            var url = urlData.toString()
                                            }
          var product = document.getElementById("prefTime").value;
          var linkFollow = document.createElement("a");
          linkFollow.href = url + "?func=dtlsEnvironment" + "&args=" + encodeURIComponent(product);
          linkFollow.id = "linkFOLLOW";
          linkFollow.target = "_blank";
          document.body.appendChild(linkFollow);
          document.getElementById("linkFOLLOW").click()
          document.getElementById("prefTime").value = "";})()});
      var elems = document.getElementById("prefTime");
      var instances = M.FormSelect.init(elems);
      `,
  ).getContent();
  html.materializeJs = HtmlService.createHtmlOutput(
    `
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>`,
  ).getContent();
  html.rule = rule;
  html.ex1 = timeNow;
  html.ex2 = dateNow;
  html.ex3 = nameStatus;
  html.ex4 = productStatus || rndMthTestStatus;
  html.ext5 = ing2name || testTitle || rndMthTestTitle || rndMathArr;
  html.startPageUrl = startPageUrl;
  if (actIngUn) {
    html.myVideo = namedIngredient || ingTitle;
  } else {
    html.myVideo = testTitle || rndMthTestTitle || rndMathArr[0];
  }
  html.brand = altNames;
  return html.evaluate().getContent();
};

// console.log(JSON.stringify(e))
//:contentFile('uiAccess');
// var data = covArrays(companyName("https://ordspub.epa.gov/ords/pesticides/cswu/ProductSearch/partialprodsearch/v2/riname/" + product), 1);
// const ss =  spreadSheetCreate(testData(sliceValues(dataSheetName.split("(").shift())))
// var rows = testData(data[0])
// ssDatabase(rows, ss)
// ssSetName(ss.getName(), product + " Nah")
// console.log(covObjects(testData(splitValues(fetchDataSource("https://ordspub.epa.gov/ords/pesticides/ppls/66551-1"), "items/0", "/")), [["key"], ["value"]]));

// console.log(epaA(MVar("https://ordspub.epa.gov/ords/pesticides/ppls/"), epaB(JVar("https://ordspub.epa.gov/ords/pesticides/ProductSearch/searchWithIngName/v1/"), epaC(GVar("https://ordspub.epa.gov/ords/pesticides/pplstxt/"), JSON.stringify(epaD(AVar("https://ordspub.epa.gov/ords/pesticides/cswu/ProductSearch/partialprodsearch/v2/riname/"), BVar("c"), CVar("items"), DVar("/"))[EVar(0)][FVar("productname")]), HVar("items/0/active_ingredients/0/active_ing"), IVar("/")), KVar("items/0/eparegno"), LVar("/"))))[JVar(0)][KVar("active_ingredients")][LVar(0)][MVar("active_ing")]

// console.log(productDist("https://ordspub.epa.gov/ords/pesticides/pplsdist/", "https://ordspub.epa.gov/ords/pesticides/ppls/" + companyName("https://ordspub.epa.gov/ords/pesticides/cswu/ProductSearch/partialprodsearch/v2/riname/" + "h", 1, [["item"]])[0]["item"]["eparegno"], "items", "/" ))

// epaA(edgarData("https://www.sec.gov/files/company_tickers.json", "Edgar", dateTime().getContent()).getContent(), epaA("https://ordspub.epa.gov/ords/pesticides/ppls/", epaB("https://ordspub.epa.gov/ords/pesticides/ProductSearch/searchWithIngName/v1/", epaC("https://ordspub.epa.gov/ords/pesticides/pplstxt/", epaD(e, "https://ordspub.epa.gov/ords/pesticides/cswu/ProductSearch/partialprodsearch/v2/riname/", "product", "items/", "result", "/productname"), "items/0/active_ingredients/0/active_ing"), "items/0/eparegnumber")))

// return HtmlService.createHtmlOutput(contentApp("\n <head>\n  \n  <link href=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css\" rel=\"stylesheet\"></link>\n </head>\n \n  \n <body>\n <?!= ref1 ?>\n <?!= timePicker ?>\n  \n  <?!= runIt ?>\n  \n  <script src=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js\"></script>\n  <script>\n document.addEventListener(\"DOMContentLoaded\", function() {\n  let timePicker = document.getElementById(\"prefTime\");\n M.Timepicker.init(timePicker, { defaultTime: \"now\" })\n })\n \n  document.getElementById(\"btn\").addEventListener(\"click\", function() {\n  google.script.run.runItLog();\n  })\n </script>\n \n </body>\n ", { runIt: contentApp("\n <button id=\"btn\">Run It!</button>"), timePicker: contentApp("\n  <div class=\"agenda container col s1\">\n  <input class=\"timepicker\" id=\"prefTime\" type=\"text\" />\n  </div>\n "), ref1: contentApp("\n <a href=<?!= ref1 ?> class=\"nav__link\" data-link><?!= title1 ?></a>", { ref1: "https://ordspub.epa.gov/ords/pesticides/cswu/ProductSearch/partialprodsearch/v2/riname/" + product, title1: "EPA Pesticides" }) }))

// var data = companyName("https://ordspub.epa.gov/ords/pesticides/cswu/ProductSearch/partialprodsearch/v2/riname/" + product, 1, [["item"]]);
// companyName(mapValues(sliceValues(testData(arrayToObject(, [["item"]])), 1), 0)[0])
// console.log(data[1])
// webAppUrls: contentApp("<? var webAppUrls = navBar(\"https://www.sec.gov/files/company_tickers.json\", \"Edgar\", \"https://avaddc.com/agency/the-paul-rue-agency/4022/\", \"Defensive Driving\") ?><?!= webAppUrls ?>")

// var ssName = ss.getName()
// console.log(ssName)
// console.log(ssSetSheetBySpreadsheetId())
// console.log(ssCurrent)
// var sheet = createSheetByName(ss.getId(), "myNewSheet")
// console.log(sheet)
// return ssDatabase(data, existingSheet, data[0]["item"]["eparegno"]);
// console.log(typeof(existingSheet))
// console.log()

// console.log()

// (contentApp("\n <head>\n  \n  <link href=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css\" rel=\"stylesheet\"></link>\n </head>\n \n  \n <body>\n <?!= ref1 ?>\n <?!= timePicker ?>\n  \n  <?!= runIt ?>\n  \n  <script src=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js\"></script>\n  <script>\n document.addEventListener(\"DOMContentLoaded\", function() {\n  let timePicker = document.getElementById(\"prefTime\");\n M.Timepicker.init(timePicker, { defaultTime: \"now\" })\n })\n \n  document.getElementById(\"btn\").addEventListener(\"click\", function() {\n  google.script.run.runItLog();\n  })\n </script>\n \n </body>\n ", { runIt: contentApp("\n <button id=\"btn\">Run It!</button>"), timePicker: contentApp("\n  <div class=\"agenda container col s1\">\n  <input class=\"timepicker\" id=\"prefTime\" type=\"text\" />\n  </div>\n "), ref1: contentApp("\n <a href=<?!= ref1 ?> class=\"nav__link\" data-link><?!= title1 ?></a>", { ref1: "https://ordspub.epa.gov/ords/pesticides/cswu/ProductSearch/partialprodsearch/v2/riname/", title1: "EPA Pesticides" }) }));
//(e, contentApp("\n <head>\n  \n </head>\n \n  \n <body>\n <?!= ref1 ?>\n <?!= timePicker ?>\n  \n  <?!= runIt ?>\n  \n \n </body>\n ", { ref1: contentApp("\n <a href=<?!= ref1 ?> class=\"nav__link\" data-link><?!= title1 ?></a>", { ref1: "https://ordspub.epa.gov/ords/pesticides/cswu/ProductSearch/partialprodsearch/v2/riname/", title1: "EPA Pesticides" }) }))

function epaA(epaAUrl) {
  console.log(
    functionRegistry.time +
      "\n" +
      arguments.callee.name +
      "\nepaAUrl is !" +
      !epaAUrl +
      ", = " +
      epaAUrl,
  );
  if (typeof epaAUrl === "undefined") {
    // No userProvidedValue
    let args = {};
    console.log("DEBUG: Generating epaAUrl...");
    var rndStr = globalThis.uniqueItemArray();
    var rndStrObj =
      rndStr[Math.floor(Math.random() * Math.floor(rndStr.length))];
    var product = rndStrObj["Description"];
    var data = coUtility(product)[0];
    console.log("DEBUG: data from coUtility:", data);

    if (typeof data.rndTitle !== "undefined") {
      var dataTest = [data.rndTitle.replace(/,./g, "")].toString().split(" ");
      var rnddaTe = Math.floor(
        Math.random() *
          Math.floor(
            [data.rndTitle.replace(/,./g, "")].toString().split(" ").length,
          ),
      );
      var test = productNamePartial(dataTest[rnddaTe]);
      console.log("DEBUG: test from productNamePartial:", test);
    } else {
      console.log("DEBUG: data.rndTitle is undefined.");
    }

    if (typeof test !== "undefined" && test["eparegno"]) {
      var test2 = productRegNo(test["eparegno"]);
      console.log("DEBUG: test2 from productRegNo:", test2);

      // Corrected check
      if (test2 && test2.hasOwnProperty("companyinfo")) {
        console.log("DEBUG: test2 has companyinfo.");
        // ... (company info logic) ...
        var productCo = [];
        for (var i = 0, l = test2["companyinfo"].length; i < l; i++) {
          var isCompany = test2["companyinfo"][i]["name"];
          productCo.push(isCompany);
        }
        var uniqueCo = [];
        for (var i = 0, l = productCo.length; i < l; i++) {
          var epaCo = coUtility(productCo[i]);
          uniqueCo.push(epaCo);
        }
        var randomCik = uniqueCo[0];
        var coInfo = uniqueCo[0][0].rndTitle;
        var secReport = uniqueCo[0][0].secUrl;
        var stkTicker = uniqueCo[0][0].rndTicker;
        var watchV = uniqueCo[0][0].videoItem;
        var playVid = uniqueCo[0][0].videoItemUrl;
      } else {
        console.log(
          "DEBUG: test2 does NOT have companyinfo or is undefined/null.",
        );
        // ... (fallback logic) ...
        var coInfo = data.rndTitle;
        var secReport = data.secUrl;
        var stkTicker = data.rndTicker;
        var watchV = data.videoItem;
        var playVid = data.videoItemUrl;
      }

      // Corrected check
      if (test2 && test2.hasOwnProperty("active_ingredients")) {
        console.log("DEBUG: test2 has active_ingredients.");
        // ... (ingredient logic) ...
        var uniqueData = [];
        for (var i = 0, l = test2["active_ingredients"].length; i < l; i++) {
          var isIngredient = test2["active_ingredients"][i]["active_ing"];
          if (isIngredient) {
            var pIName = productIngName(isIngredient);
            if (typeof pIName !== "undefined") {
              uniqueData.push(pIName["items"] || pIName["first"] || pIName);
            }
          }
        }
        if (
          typeof uniqueDataKey !== "undefined" &&
          uniqueDataKey[1] &&
          uniqueDataKey[1].length > 0
        ) {
          // ... randomKey, isDataKey, randomCasNumber ...
          var randomKey = Math.floor(
            Math.random() * Math.floor(matches.length),
          );
          var isDataKey = uniqueDataKey[1][randomKey];
          var randomCasNumber = isDataKey["casnumber"];

          console.log("DEBUG: randomCasNumber generated:", randomCasNumber);
          args["epaAUrl"] = "..."; // Only assign here if randomCasNumber is valid
        } else {
          console.log(
            "DEBUG: No uniqueDataKey or matches for CAS number generation.",
          );
        }
      } else {
        console.log(
          "DEBUG: test2 does NOT have active_ingredients or is undefined/null.",
        );
      }
    } else {
      console.log("DEBUG: 'test' may be undefined, cannot proceed with test2.");
    }
    // IMPORTANT: If epaAUrl wasn't set, explicitly set it to a default or null to avoid pushing undefined.
    if (args["epaAUrl"] === undefined) {
      args["epaAUrl"] = test["message"].info; // Or a default error URL
      console.log(
        "DEBUG: epaAUrl could not be generated, setting to test info.",
      );
    }
    epaAUrl = args["epaAUrl"];
  }
  const urlSrc = urlDataSource(epaAUrl);
  const epaA = splitNoX(urlSrc["data"]);
  return epaA;
};

function epaB(epaBurl, epaC, uniA, epaBdelimiter) {
  const epaB = splitX(urlDataSource(epaBurl + epaC), uniA, epaBdelimiter);
  return epaB;
};

function epaC(epaCurl, epaD, uniA, epaCdelimiter) {
  const epaC = splitX(urlDataSource(epaCurl + epaD), uniA, epaCdelimiter);
  return epaC;
};

function epaD(epaDurl, epaDXpath, epaDdelimiter) {
  const epaD = splitX(urlDataSource(epaDurl), epaDXpath, epaDdelimiter);
  return epaD;
};

function epaIng(e) {
  var urlProduct =
    "https://script.google.com/macros/s/AKfycbzhrxdXzM08AAwA5ualRXdnDtV6C_xQ7bcq4v6H0HNdBqPr2C8A1URyWN0FLLccQuoA/exec?func=epaData&args=";
  var urlIngredient =
    "https://script.google.com/macros/s/AKfycbzhrxdXzM08AAwA5ualRXdnDtV6C_xQ7bcq4v6H0HNdBqPr2C8A1URyWN0FLLccQuoA/exec?func=epaIng&args=";
  var urlCalendar =
    "https://script.google.com/macros/s/AKfycbzhrxdXzM08AAwA5ualRXdnDtV6C_xQ7bcq4v6H0HNdBqPr2C8A1URyWN0FLLccQuoA/exec?func=dateTime&args=";
  var urlPlay =
    "https://script.google.com/macros/s/AKfycbzhrxdXzM08AAwA5ualRXdnDtV6C_xQ7bcq4v6H0HNdBqPr2C8A1URyWN0FLLccQuoA/exec?func=misBing&args=";
  var res = productIngName(e);
  var product =
    [e][0] ||
    res.toString().split(" ")[
      Math.floor(Math.random() * Math.floor(res.toString().split(" ").length))
    ];
  var randNum = Math.floor(Math.random() * Math.floor(res["items"].length));
  var coTable = res["items"].map((r) => {
    return `<tr><td><a class="waves-effect waves-light btn" href="${urlIngredient + encodeURIComponent(r["ingredientname"])}" target="_blank">${r["ingredientname"]}</a></td><td><a class="waves-effect waves-light btn" href="${urlPlay + encodeURIComponent(r["registrationstatus"])}" target="_blank">${r["registrationstatus"]}</a></td><td><a class="waves-effect waves-light btn" href="${urlPlay + encodeURIComponent(r["productnamestatus"])}" target="_blank">${r["productnamestatus"]}</a></td><td><a class="waves-effect waves-light btn" href="${urlCalendar + encodeURIComponent(r["productstatusdate"])}" target="_blank">${r["productstatusdate"]}</a></td><td><a class="waves-effect waves-light btn" href="${urlProduct + encodeURIComponent(r["productname"])}" target="_blank">${r["productname"]}</a></td></tr>`;
  });
  var result = JSON.stringify(coTable);
  var ing2name = res["items"][randNum]["productname"] || product;
  var statusDate = res["items"][randNum]["productstatusdate"];
  var nameStatus = res["items"][randNum]["productnamestatus"];
  var productStatus = res["items"][randNum]["registrationstatus"];
  var startPageUrl = getUrl(ScriptApp);
  var today = new Date(statusDate);
  var dateNow = today.toDateString();
  var timeNow = today.toTimeString();
  var rule = today.toDateString() + " - " + today.toTimeString();
  const html = HtmlService.createTemplate(`
  <!DOCTYPE html>
    <html>
      <head>
        <base target="_top">
        <?!= materializeCss ?>
      </head>
      <body class="z-depth-5 grey">
        <div class="row">
          <a href="https://flewis21.github.io/Don-time-Life-Services/" target="_top"><span><h1 class="z-depth-5 grey toolbar_icon toolbar_iconHover scale-transition scale-out scale-in btn-large receipt">Don'time Life Services!</h1></span></a>
        </div>
        <div class="row">
        <div class="z-depth-5 grey toolbar_icon toolbar_iconHover scale-transition scale-out scale-in btn-large receipt agenda container col s12 l12 m12">
          <input style="font-size:18pt;color:green" placeholder="<?!= ex2 ?>" class="timepicker flow-text menu-img z-depth-5 card-panel black scale-transition scale-out scale-in receipt btn-large" id="prefTime"  type="search" />
        </div></div>
        <div class="row">
        <div class="col s12 l12 m12 push-s1 push-m1 push-l2">
        <button class="z-depth-5 grey toolbar_icon toolbar_iconHover scale-transition scale-out scale-in btn-large receipt" id="btn"><span><?!= ex4 ?></span></button></div></div>
        <div class="row">
        <div class="col s9 l12 m12 push-s1 push-m1 push-l2">
        <div class="container row valign-wrapper video-container grey darken-4 z-depth-5 scale-transition scale-out scale-in receipt">
        <div class="col s12 l12 m12" id="player1">
          <?!= geneFrame(seoSheet(myVideo).url) ?></div>
        </div></div></div>
        <table class="striped centered highlight responsive-table grey z-depth-5" style="width:100%">
          <thead>
            <tr>
              <th>Active Ingredient</th>
              <th>Registration Status</th>
              <th>Product Name Status</th>
              <th>Product Status Date</th>
              <th>Product Name</th>
            </tr>
          </thead>
          <tbody id="epaData">
          </tbody>
        </table>
        <?!= materializeJs ?>
        <script>
          <?!= dOMContentLoaded ?>
        </script>
        <script>document.addEventListener("DOMContentLoaded", function()
          {document.getElementById("epaData").innerHTML = ${result};})</script>
        <input type="hidden" value="<?= getUrl(ScriptApp) ?>" id="breakUrl" />
        <input type="hidden" value="<?= ext5 ?>" id="pingname" />
      </body>
    </html>`);
  html.materializeCss = HtmlService.createHtmlOutput(
    `
    <link href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" rel="stylesheet"></link>`,
  ).getContent();
  html.dOMContentLoaded = HtmlService.createHtmlOutput(
    `document.addEventListener("DOMContentLoaded", 
    function() 
      {let timePicker = document.getElementById("btn");
      M.Timepicker.init(timePicker, { defaultTime: "now" })})
      document.getElementById("btn").addEventListener("click", 
        function() 
          {var search = document.getElementById("pingname").value
          document.getElementById("prefTime").value = search          
          //console.log(document.getElementById("test").innerHTML)
          // Init a timeout variable to be used below
          let timeout = null;
          (() =>
                  {
          // Clear the timeout if it has already been set.
          // This will prevent the previous task from executing
          // if it has been less than <MILLISECONDS>
          // clearTimeout(timeout);

          // Make a new timeout set to go off in 1000ms (1 second)
          // timeout = setTimeout
          // (function  () 
                        // {
          // console.log('Input Value:', textInput.value);
                  //  }, 5000)();
          if (typeof url === "undefined")
                                          {
            var urlData = document.getElementById("breakUrl").value;
            var url = urlData.toString()
                                            }
          var product = document.getElementById("prefTime").value;
          var linkHome = document.createElement("a");
          var linkFollow = document.createElement("a");
          linkHome.href = "https://flewis21.github.io/budget/";
          linkFollow.href = url + "?product=" + encodeURIComponent(product);
          linkHome.id = "linkHOME";
          linkFollow.id = "linkFOLLOW";
          linkHome.target = "popup";
          linkFollow.target = "popup";
          document.body.appendChild(linkHome);
          document.body.appendChild(linkFollow);
          document.getElementById("linkHOME");
          document.getElementById("linkFOLLOW").click();
          document.getElementById("prefTime").value = "";})()})
      document.getElementById("prefTime").addEventListener("change", 
        function()
          {//console.log(document.getElementById("test").innerHTML)
          // Init a timeout variable to be used below
          let timeout = null;
          (() =>
                  {
          // Clear the timeout if it has already been set.
          // This will prevent the previous task from executing
          // if it has been less than <MILLISECONDS>
          // clearTimeout(timeout);

          // Make a new timeout set to go off in 1000ms (1 second)
          // timeout = setTimeout
          // (function  () 
                        // {
          // console.log('Input Value:', textInput.value);
                  //  }, 5000)();
          if (typeof url === "undefined")
                                          {
            var urlData = document.getElementById("breakUrl").value;
            var url = urlData.toString()
                                            }
          var product = document.getElementById("prefTime").value;
          var linkHome = document.createElement("a");
          var linkFollow = document.createElement("a");
          linkHome.href = "https://flewis21.github.io/budget/";
          linkFollow.href = url + "?func=epaData"+ "&args=" + encodeURIComponent(product);
          linkHome.id = "linkHOME";
          linkFollow.id = "linkFOLLOW";
          linkHome.target = "popup";
          linkFollow.target = "popup";
          document.body.appendChild(linkHome);
          document.body.appendChild(linkFollow);
          document.getElementById("linkHOME");
          document.getElementById("linkFOLLOW").click()
          document.getElementById("prefTime").value = "";})()});
      var elems = document.getElementById("prefTime");
      var instances = M.FormSelect.init(elems, options);
      `,
  ).getContent();
  html.materializeJs = HtmlService.createHtmlOutput(
    `
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>`,
  ).getContent();
  html.rule = rule;
  html.ex1 = timeNow;
  html.ex2 = dateNow;
  html.ex3 = nameStatus;
  html.ex4 = productStatus;
  html.ext5 = ing2name || product;
  html.startPageUrl = startPageUrl;
  html.myVideo = res["items"][randNum]["ingredientname"] || product;
  return html.evaluate().getContent();
};

function newEPAData(rawData) {
  const uniqueCoArray = covArrays(rawData["items"]);
  const randomCoKey = Math.floor(
    Math.random() * Math.floor(uniqueCoArray.length),
  ); // Math.floor(Math.random());
  const uniqueCoKey = [rawData].entries().next().value;
  var reference = uniqueCoKey[1]["first"]?.["$ref"] || randomCoKey;
  const randomCo = uniqueCoKey[1]["items"][randomCoKey];
  return randomCo;
  // var data = []
  //   rawData[1]["items"].map((i)=>{data.push([i])});
  // var uAdata = data.map((dp)=>{return covArrays(dp)});
  // const ss = spreadSheetCreate("EPAData", "pesticides", [data].slice(0), [data].slice(1))
};

function oldEPA(rndTitle) {
  var wAppUrl = getScriptUrl();
  var urlPlayer = wAppUrl + "?func=misBing&args=";
  var urlProduct = wAppUrl + "?func=misBing&args=";
  var urlEpaRegNo = wAppUrl + "?func=misBing&args=";
  var urlCasNo = wAppUrl + "?func=misBing&args=";
  var urlPcCode = wAppUrl + "?func=misBing&args=";
  var arrayMath = [`acme`];
  var product =
    rndTitle ||
    arrayMath.toString().split(" ")[
      Math.floor(
        Math.random() * Math.floor(arrayMath.toString().split(" ").length),
      )
    ];
  var test = productNamePartial(product);
  var test2 = productRegNo(test["eparegno"]);
  var uniqueCo = [];
  try {
    if (test2 && test2["active_ingredients"].length > 0) {
      for (var i = 0, l = test2["active_ingredients"].length; i < l; i++) {
        if (test2["active_ingredients"][i]["active_ing"]) {
          var pIName = productIngName(
            test2["active_ingredients"][i]["active_ing"],
          );
          uniqueCo.push(pIName["items"]);
        }
      }
      var rndIng = Math.floor(
        Math.random() * Math.floor(test2["active_ingredients"].length),
      );
      // var uniqueCo = productIngName(test2["active_ingredients"][rndIng]["active_ing"])
      var productRnD =
        test2["active_ingredients"][0]["active_ing"] ||
        uniqueCo.toString().split(" ")[
          Math.floor(
            Math.random() * Math.floor(uniqueCo.toString().split(" ").length),
          )
        ];
    } else {
      for (var key in test) {
        uniqueCo.push(test[key]);
      }
    }
  } catch (error) {
    if (uniqueCo.length > 0) {
      // var randNum = Math.floor(Math.random() * (Math.floor(uniqueCo["items"].length)));
      const titleKings = needCapital(rndTitle);
      var uniqueCoArray = [];
      for (var i = 0, l = uniqueCo.length; i < l; i++) {
        uniqueCo[i].map((item) => {
          uniqueCoArray.push(item);
        });
      }
      // const uniqueCoArray = covArrays(uniqueCo["items"]);
      const matches = [];
      const alTheCo = uniqueCoArray
        .sort((a, b) => a - b)
        .filter((ac) => {
          if (
            !JSON.stringify(ac["registrationstatus"])
              .toLowerCase()
              .includes("cancelled")
          )
            matches.push(ac);
        });
      const titleMatches = [matches.toString().substring(titleKings)];
      // console.log(Utilities.jsonStringify([titleMatches]))
      var coTable = matches
        .map((r) => {
          return `<tr><td><a class="waves-effect waves-light btn" href="${urlProduct}${encodeURIComponent(r["productname"])}" target="_blank">${r["productname"]}</a></td><td><a class="waves-effect waves-light btn" href="${urlEpaRegNo}${encodeURIComponent(r["eparegnumber"])}" target="_blank">${r["eparegnumber"]}</a></td><td><a class="waves-effect waves-light btn" href="${urlEpaRegNo}${encodeURIComponent(r["registrationstatus"])}" target="_blank">${r["registrationstatus"]}</a></td><td><a class="waves-effect waves-light btn" href="${urlPlayer}${encodeURIComponent(r["ingredientname"])}" target="_blank">${r["ingredientname"]}</a></td><td><a class="waves-effect waves-light btn" href="${urlCasNo}${encodeURIComponent(r["casnumber"])}" target="_blank">${r["casnumber"]}</a></td><td><a class="waves-effect waves-light btn" href="${urlPcCode}${encodeURIComponent(r["pccode"])}" target="_blank">${r["pccode"]}</a></td></tr>`;
        })
        .toString()
        .replace(/,/g, "");
      const result = JSON.stringify(coTable);
      const randomCoKey = Math.floor(
        Math.random() * Math.floor(uniqueCoArray.length),
      ); // Math.floor(Math.random());
      const uniqueCoKey = [uniqueCo].entries().next().value;
      const randomCo = uniqueCoKey[1][randomCoKey];
      const html = HtmlService.createTemplate(
        `<body>
        <div class="row">
        <div class="col s10 card-panel amber push-s1 push-m1 push-l1">
        <div class="container">
        <div class="col s12 receipt red">
        <table class="striped centered highlight responsive-table grey z-depth-5" style="width:100%">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>EPA Registration Number</th>
            <th>EPA Registration Status</th>
            <th>Ingredient Name</th>
            <th>Product Abstract Number</th>
            <th>Product Chemical Code</th>
          </tr>
        </thead>
        <tbody id="epaData">
        </tbody>
      </table>
      </div></div></div></div>
      <div class="row">
      <div class="col s10 card-panel red push-s1 push-m1 push-l1">
      <div class="container">
      <div class="col s12 receipt red">
      <span><input placeholder="Your Search Here Ex. apple,orange..." class="menu-img z-depth-5 card-panel black scale-transition scale-out scale-in receipt btn-large" id="username" type="search" /></span>
      </div></div></div></div>
    </body>
    <script>document.getElementById('username').addEventListener('change', <?!= topScript ?>)</script>
    <script>document.addEventListener("DOMContentLoaded", function()
      {document.getElementById("epaData").innerHTML = ${result};})</script>`,
      );
      html.topScript = function () {
        //console.log(document.getElementById("test").innerHTML)
        // Init a timeout variable to be used below
        let timeout = null;
        (() => {
          // Clear the timeout if it has already been set.
          // This will prevent the previous task from executing
          // if it has been less than <MILLISECONDS>
          // clearTimeout(timeout);
          // Make a new timeout set to go off in 1000ms (1 second)
          // timeout = setTimeout
          // (function  ()
          // {console.log('Input Value:', textInput.value);}, 5000)();
          if (typeof url === "undefined") {
            var urlData = document.getElementById("url").value;
            var url = urlData.toString();
          }
          var uname = document.getElementById("username").value;
          var linkFollow = document.createElement("a");
          linkFollow.href =
            url + "?func=oldEPA" + "&args=" + encodeURIComponent(uname);
          linkFollow.id = "linkFOLLOW";
          linkFollow.target = "_top";
          document.body.appendChild(linkFollow);
          document.getElementById("linkFOLLOW").click();
          document.getElementById("username").value = "";
        })();
      }; //Global object closed
      return html.evaluate().getContent();
    } else {
      return;
    }
  }
};

function productTime(product) {
  var test = productNamePartial("zee");
  var test2 = productRegNo(test["eparegno"]);
  var test3 = productFullName(test["productname"]);
  var test4 = productIngName(test2["active_ingredients"][0]["active_ing"]);
  var t4 = newEPAData(
    productIngName(test2["active_ingredients"][0]["active_ing"]),
  );
  var test5 = productChemCode(test2["active_ingredients"][0]["pc_code"]);
  var test6 = productAbstractNum(test2["active_ingredients"][0]["cas_number"]);
  console.log(test3);
  console.log(" information: ");
  console.log(test2);
  console.log(" information: ");
  console.log(test4);
  console.log(" information: ");
  console.log(test5);
  console.log(" information: ");
  console.log(test6);
  var dataSheetName =
    `product` +
    " " +
    new Date().toDateString() +
    " " +
    new Date().toTimeString();
  console.log(dataSheetName.split("(").shift());
};

function productRegNo(eparegno) {
  const res = urlDataSource(
    "https://ordspub.epa.gov/ords/pesticides/ppls/" + eparegno,
  );
  if (res[0] && res[0].indexOf("DOCTYPE") === -1) {
    try {
      if (res[0]["items"].length === 0) {
        return res[0]["first"][0];
      } else {
        const rawData = JSON.parse(res);
        return newEPAData(rawData);
      }
    } catch (err) {
      console.error("Error retrieving reg no" + err);
      return res;
    }
  }
};

function productDistNum(distno) {
  const rawData = JSON.parse(
    urlDataSource(
      "https://ordspub.epa.gov/ords/pesticides/pplsdist/" +
        encodeURIComponent(distno),
    ),
  );
  return newEPAData(rawData);
};

function productFullName(productName) {
  const rawData = JSON.parse(
    urlDataSource(
      "https://ordspub.epa.gov/ords/pesticides/pplstxt/" +
        encodeURIComponent(productName),
    ),
  );
  return newEPAData(rawData);
};

function productDist(
  epaAUrl,
  epaDUrl,
  epaDXpath,
  epaDDelimiter,
  dVar,
  eVar,
  fVar,
  iVar,
  jVar,
) {
  const productDistEpaData =
    // epaA(
    // GVar(epaAUrl)
    epaD(AVar(epaDUrl), BVar(epaDXpath), CVar(epaDDelimiter));
  // [DVar(dVar)]
  // [EVar(eVar)]
  // [FVar(fVar)]
  // )
  // [HVar(hVar)]
  // [IVar(iVar)]
  // [JVar(jVar)]
  return productDistEpaData;
};

function productName(epaDaVar, epaDbVar, epaDcVar, dVar, eVar, fVar) {
  const productNameEpaData = epaD(
    aVar(epaDaVar),
    bVar(epaDbVar),
    cVar(epaDcVar),
  )[dVar(dVar)][eVar(eVar)][fVar(fVar)];
  return productNameEpaData;
};

function productNamePartial(productName) {
  let appL = "";
  let iframeSrc =
    "https://www.clubhouse.com/@fabianlewis?utm_medium=ch_profile&utm_campaign=lhTUtHb2bYqPN3w8EEB7FQ-247242"; // Default iframe src
  let feed = "";

  const url = "https://search.epa.gov/epasearch/?querytext=" + productName;
  const res = mis(url);
  if (res.type === "html") {
    iframeSrc = res.index; // Assign iframeSrc
    appL = res.data;
    feed = res.link || url;
  } else if (res.type === "url") {
    // --- NEW: Handle "url" type directly ---
    iframeSrc = res.data; // Assign the URL to iframeSrc
    appL = res.index || url;
    finalFeedDivContent = res.link || url;
  } else if (res.type === "jsonData") {
    iframeSrc = res.index || url; // Assign iframeSrc
    appL = `${JSON.stringify(res.data, null, 2)}`;
    feed = res.link || url;
  } else if (res.type === "text") {
    iframeSrc = res.index || url; // Assign iframeSrc
    appL = res.data;
    feed = res.link || url;
  } else if (res.type === "object") {
    // Here, if payLoad.data is an object, you need to decide how to display it.
    // It could contain sub-properties you want to render.
    if (res.data.html || res.data.app) {
      appL = res.data.html || res.data.app;
      // If the object itself contains a URL, use it for iframeSrc
      iframeSrc = res.data.url || iframeSrc;
    } else if (payLoad.data.url) {
      // If the object explicitly has a 'url' property
      iframeSrc = res.data.url || url;
      appL = res.index || url;
      feed = res.link || url;
    } else {
      // Default way to display a generic object: stringify it
      iframeSrc = res.index || url; // Assign iframeSrc
      appL = `${res}`;
      feed = res.link || url;
    }
  } else if (res.type === "unknown" || res.type === "error") {
    feed = `Error: ${res.message || res.data || "Unknown error."}`;
  }
  // if (res && typeof res === "object") {
  //   try {
  //     if (res["items"] && res["items"].length !== 0) {
  //       return res["first"][0];
  //     } else {
  //       const rawData = JSON.parse(res);
  //       return newEPAData(rawData);
  //     }
  //   } catch (err) {
  //     console.error("Error retrieving reg no" + err);
  //     return res;
  //   }
  // }

  Logger.log("The final value of content. " + JSON.stringify(appL));
  var data = {
    message: {
      content: appL,
      info: feed,
      link: iframeSrc, // Clear iframe on critical error
    },
    timestamp: new Date(),
  };
  return data;
};

function productNamePartialV2(productName) {
  const rawData = JSON.parse(
    urlDataSource(
      "https://ordspub.epa.gov/ords/pesticides/cswu/ProductSearch/partialprodsearch/v2/riname/" +
        encodeURIComponent(productName),
    ),
  );
  return newEPAData(rawData);
};

function productNumPartial(productNum) {
  const rawData = JSON.parse(
    urlDataSource(
      "https://ordspub.epa.gov/ords/pesticides/ProductSearch/partialprodsearch/regnum/" +
        encodeURIComponent(productNum),
    ),
  );
  return newEPAData(rawData);
};

function productNumPartialV2(productNum) {
  const rawData = JSON.parse(
    urlDataSource(
      "https://ordspub.epa.gov/ords/pesticides/cswu/ProductSearch/partialprodsearch/v2/regnum/" +
        encodeURIComponent(productNum),
    ),
  );
  return newEPAData(rawData);
};

function productIngName(ingredient) {
  var res = urlDataSource(
    "https://ordspub.epa.gov/ords/pesticides/ProductSearch/searchWithIngName/v1/" +
      ingredient,
  );
  if (res[0] && res[0].indexOf("DOCTYPE") === -1) {
    try {
      if (res[0]["items"].length === 0) {
        return res[0]["first"][0];
      } else {
        const rawData = JSON.parse(res);
        return rawData;
      }
    } catch (err) {
      console.error("Error retrieving reg no" + err);
      return res;
    }
  }
};

function productChemCode(code) {
  const res = urlDataSource(
    "https://ordspub.epa.gov/ords/pesticides/ProductSearch/searchWithPcCode/v1/" +
      encodeURIComponent(code),
  );
  if (res[0] && res[0].indexOf("DOCTYPE") === -1) {
    try {
      if (res[0]["items"].length === 0) {
        return res[0]["first"][0];
      } else {
        const rawData = JSON.parse(res);
        return newEPAData(rawData);
      }
    } catch (err) {
      console.error("Error retrieving reg no" + err);
      return res;
    }
  }
};

function productAbstractNum(abstract) {
  const res = urlDataSource(
    "https://ordspub.epa.gov/ords/pesticides/ProductSearch/searchWithCasNum/v1/" +
      encodeURIComponent(abstract),
  );
  if (res[0] && res[0].indexOf("DOCTYPE") === -1) {
    try {
      if (res[0]["items"].length === 0) {
        return res[0]["first"][0];
      } else {
        const rawData = JSON.parse(res);
        return newEPAData(rawData);
      }
    } catch (err) {
      console.error("Error retrieving reg no" + err);
      return res;
    }
  }
};
