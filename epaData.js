var companyName = function (companyNameUrl) {
  const companyNameSecData = epaA(AVar(companyNameUrl));
  const companyArray = testData(companyNameSecData);
  return companyArray;
};
// console.log(companyNameSecData)
// console.log(myObject)

var epaData = function (e) {
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

var epaIng = function (e) {
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

var newEPAData = function (rawData) {
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

var oldEPA = function (rndTitle) {
  var urlPlayer =
    "https://script.google.com/macros/s/AKfycbzhrxdXzM08AAwA5ualRXdnDtV6C_xQ7bcq4v6H0HNdBqPr2C8A1URyWN0FLLccQuoA/exec?func=misBing&args=";
  var urlProduct =
    "https://script.google.com/macros/s/AKfycbzhrxdXzM08AAwA5ualRXdnDtV6C_xQ7bcq4v6H0HNdBqPr2C8A1URyWN0FLLccQuoA/exec?func=misBing&args=";
  var urlEpaRegNo =
    "https://script.google.com/macros/s/AKfycbzhrxdXzM08AAwA5ualRXdnDtV6C_xQ7bcq4v6H0HNdBqPr2C8A1URyWN0FLLccQuoA/exec?func=misBing&args=";
  var urlCasNo =
    "https://script.google.com/macros/s/AKfycbzhrxdXzM08AAwA5ualRXdnDtV6C_xQ7bcq4v6H0HNdBqPr2C8A1URyWN0FLLccQuoA/exec?func=misBing&args=";
  var urlPcCode =
    "https://script.google.com/macros/s/AKfycbzhrxdXzM08AAwA5ualRXdnDtV6C_xQ7bcq4v6H0HNdBqPr2C8A1URyWN0FLLccQuoA/exec?func=misBing&args=";
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

var productTime = function (product) {
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

var productRegNo = function (eparegno) {
  const res = [
    urlDataSource(
      "https://ordspub.epa.gov/ords/pesticides/ppls/" + eparegno,
      null,
      { muteHttpExceptions: true },
    ),
  ];
  if (res && res[0].indexOf("DOCTYPE") === -1) {
    try {
      if (res[0]["items"].length === 0) {
        return res[0]["first"][0];
      } else {
        const rawData = Utilities.jsonParse(res);
        return newEPAData(rawData);
      }
    } catch (err) {
      return res;
    }
  }
  return coUtility(ingredient);
};

var productDistNum = function (distno) {
  const rawData = Utilities.jsonParse([
    urlDataSource(
      "https://ordspub.epa.gov/ords/pesticides/pplsdist/" +
        encodeURIComponent(distno),
      null,
      { muteHttpExceptions: true },
    ),
  ]);
  return newEPAData(rawData);
};

var productFullName = function (productName) {
  const rawData = Utilities.jsonParse([
    urlDataSource(
      "https://ordspub.epa.gov/ords/pesticides/pplstxt/" +
        encodeURIComponent(productName),
      null,
      { muteHttpExceptions: true },
    ),
  ]);
  return newEPAData(rawData);
};

var productDist = function (
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

var productName = function (epaDaVar, epaDbVar, epaDcVar, dVar, eVar, fVar) {
  const productNameEpaData = epaD(
    AVar(epaDaVar),
    BVar(epaDbVar),
    CVar(epaDcVar),
  )[DVar(dVar)][EVar(eVar)][FVar(fVar)];
  return productNameEpaData;
};

var productNamePartial = function (productName) {
  const res = [
    urlDataSource(
      "https://ordspub.epa.gov/ords/pesticides/ProductSearch/partialprodsearch/riname/" +
        productName,
      null,
      { muteHttpExceptions: true },
    ),
  ];
  if (res && res[0].indexOf("DOCTYPE") === -1) {
    try {
      if (res[0]["items"].length === 0) {
        return res[0]["first"][0];
      } else {
        const rawData = Utilities.jsonParse(res);
        return newEPAData(rawData);
      }
    } catch (err) {
      return res;
    }
  }
  return coUtility(productName);
};

var productNamePartialV2 = function (productName) {
  const rawData = Utilities.jsonParse([
    urlDataSource(
      "https://ordspub.epa.gov/ords/pesticides/cswu/ProductSearch/partialprodsearch/v2/riname/" +
        encodeURIComponent(productName),
      null,
      { muteHttpExceptions: true },
    ),
  ]);
  return newEPAData(rawData);
};

var productNumPartial = function (productNum) {
  const rawData = Utilities.jsonParse([
    urlDataSource(
      "https://ordspub.epa.gov/ords/pesticides/ProductSearch/partialprodsearch/regnum/" +
        encodeURIComponent(productNum),
      null,
      { muteHttpExceptions: true },
    ),
  ]);
  return newEPAData(rawData);
};

var productNumPartialV2 = function (productNum) {
  const rawData = Utilities.jsonParse([
    urlDataSource(
      "https://ordspub.epa.gov/ords/pesticides/cswu/ProductSearch/partialprodsearch/v2/regnum/" +
        encodeURIComponent(productNum),
      null,
      { muteHttpExceptions: true },
    ),
  ]);
  return newEPAData(rawData);
};

var productIngName = function (ingredient) {
  var res = [
    urlDataSource(
      "https://ordspub.epa.gov/ords/pesticides/ProductSearch/searchWithIngName/v1/" +
        ingredient,
      null,
      { muteHttpExceptions: true },
    ),
  ];
  if (res && res[0].indexOf("DOCTYPE") === -1) {
    try {
      if (res[0]["items"].length === 0) {
        return res[0]["first"][0];
      } else {
        const rawData = Utilities.jsonParse(res);
        return rawData;
      }
    } catch (err) {
      return res;
    }
  }
  return coUtility(ingredient);
};

var productChemCode = function (code) {
  const res = [
    urlDataSource(
      "https://ordspub.epa.gov/ords/pesticides/ProductSearch/searchWithPcCode/v1/" +
        encodeURIComponent(code),
      null,
      { muteHttpExceptions: true },
    ),
  ];
  if (res && res[0].indexOf("DOCTYPE") === -1) {
    try {
      if (res[0]["items"].length === 0) {
        return res[0]["first"][0];
      } else {
        const rawData = Utilities.jsonParse(res);
        return newEPAData(rawData);
      }
    } catch (err) {
      return res;
    }
  }
  return coUtility(code);
};

var productAbstractNum = function (abstract) {
  const res = [
    urlDataSource(
      "https://ordspub.epa.gov/ords/pesticides/ProductSearch/searchWithCasNum/v1/" +
        encodeURIComponent(abstract),
      null,
      { muteHttpExceptions: true },
    ),
  ];
  if (res && res[0].indexOf("DOCTYPE") === -1) {
    try {
      if (res[0]["items"].length === 0) {
        return res[0]["first"][0];
      } else {
        const rawData = Utilities.jsonParse(res);
        return newEPAData(rawData);
      }
    } catch (err) {
      return res;
    }
  }
  return coUtility(abstract);
};
