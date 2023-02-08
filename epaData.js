var productTime = function (product) {
  var test = productNamePartial("zee");
  var test2 = productRegNo(test["eparegno"]);
  var test3 = productFullName(test["productname"]);
  var test4 = productIngName(test2["active_ingredients"][0]["active_ing"]);
  var t4 = newEPAData(
    productIngName(test2["active_ingredients"][0]["active_ing"])
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
  const rawData = Utilities.jsonParse([
    urlDataSource(
      "https://ordspub.epa.gov/ords/pesticides/ppls/" +
        encodeURIComponent(eparegno)
    ),
  ]);
  return newEPAData(rawData);
};

var productDistNum = function (distno) {
  const rawData = Utilities.jsonParse([
    urlDataSource(
      "https://ordspub.epa.gov/ords/pesticides/pplsdist/" +
        encodeURIComponent(distno)
    ),
  ]);
  return newEPAData(rawData);
};

var productFullName = function (productName) {
  const rawData = Utilities.jsonParse([
    urlDataSource(
      "https://ordspub.epa.gov/ords/pesticides/pplstxt/" +
        encodeURIComponent(productName)
    ),
  ]);
  return newEPAData(rawData);
};

var productNamePartial = function (productName) {
  const rawData = Utilities.jsonParse([
    urlDataSource(
      "https://ordspub.epa.gov/ords/pesticides/ProductSearch/partialprodsearch/riname/" +
        encodeURIComponent(productName)
    ),
  ]);
  return newEPAData(rawData);
};

var productNamePartialV2 = function (productName) {
  const rawData = Utilities.jsonParse([
    urlDataSource(
      "https://ordspub.epa.gov/ords/pesticides/cswu/ProductSearch/partialprodsearch/v2/riname/" +
        encodeURIComponent(productName)
    ),
  ]);
  return newEPAData(rawData);
};

var productNumPartial = function (productNum) {
  const rawData = Utilities.jsonParse([
    urlDataSource(
      "https://ordspub.epa.gov/ords/pesticides/ProductSearch/partialprodsearch/regnum/" +
        encodeURIComponent(productNum)
    ),
  ]);
  return newEPAData(rawData);
};

var productNumPartialV2 = function (productNum) {
  const rawData = Utilities.jsonParse([
    urlDataSource(
      "https://ordspub.epa.gov/ords/pesticides/cswu/ProductSearch/partialprodsearch/v2/regnum/" +
        encodeURIComponent(productNum)
    ),
  ]);
  return newEPAData(rawData);
};

var productIngName = function (ingredient) {
  const rawData = Utilities.jsonParse([
    urlDataSource(
      "https://ordspub.epa.gov/ords/pesticides/ProductSearch/searchWithIngName/v1/" +
        encodeURIComponent(ingredient)
    ),
  ]);
  return rawData;
};

var productChemCode = function (code) {
  const rawData = Utilities.jsonParse([
    urlDataSource(
      "https://ordspub.epa.gov/ords/pesticides/ProductSearch/searchWithPcCode/v1/" +
        encodeURIComponent(code)
    ),
  ]);
  return newEPAData(rawData);
};

var productAbstractNum = function (abstract) {
  const rawData = Utilities.jsonParse([
    urlDataSource(
      "https://ordspub.epa.gov/ords/pesticides/ProductSearch/searchWithCasNum/v1/" +
        encodeURIComponent(abstract)
    ),
  ]);
  return newEPAData(rawData);
};

var newEPAData = function (rawData) {
  const uniqueCoArray = covArrays(rawData["items"]);
  const randomCoKey = Math.floor(
    Math.random() * Math.floor(uniqueCoArray.length)
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

var doGet = function (e) {
  console.log(JSON.stringify(e));
  var product =
    e.parameter["product"] ||
    Math.floor(Math.random() * Math.floor(Utilities.jsonStringify(e).length));
  var test = productNamePartial(product);
  var test2 = productRegNo(test["eparegno"]);
  var test3 = productFullName(test["productname"]);
  var test4 = productIngName(test2["active_ingredients"][0]["active_ing"]);
  var t4 = newEPAData(
    productIngName(test2["active_ingredients"][0]["active_ing"])
  );
  var test5 = productChemCode(test2["active_ingredients"][0]["pc_code"]);
  var test6 = productAbstractNum(test2["active_ingredients"][0]["cas_number"]);
  var statusDate = test["product_status_date"];
  var nameStatus = test["product_name_status"];
  var altNames = test["altrntbrndnames"];
  var ing2name = t4["productname"];
  var productStatus = test["product_status"];
  var startPageUrl = getUrl(ScriptApp);
  var today = new Date(statusDate);
  var dateNow = today.toDateString();
  var timeNow = today.toTimeString();
  var rule = today.toDateString() + " - " + today.toTimeString();
  const html = HtmlService.createTemplate(`<!DOCTYPE html>
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
        <?!= videoPlayer(myVideo) ?></div>
      </div></div></div>
      <?!= materializeJs ?>
      <script>
        <?!= dOMContentLoaded ?>
      </script>
      <input type="hidden" value="<?= getUrl(ScriptApp) ?>" id="breakUrl" />
      <input type="hidden" value="<?= ext5 ?>" id="pingname" />
    </body>
  </html>`);
  html.materializeCss = HtmlService.createHtmlOutput(
    `<link href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" rel="stylesheet"></link>`
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
          document.getElementById("linkHOME").click();
          document.getElementById("linkFOLLOW").click();
                    })()
          })
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
          linkFollow.href = url + "?product=" + encodeURIComponent(product);
          linkHome.id = "linkHOME";
          linkFollow.id = "linkFOLLOW";
          linkHome.target = "popup";
          linkFollow.target = "popup";
          document.body.appendChild(linkHome);
          document.body.appendChild(linkFollow);
          document.getElementById("linkHOME").click();
          document.getElementById("linkFOLLOW").click();
                    })()
                      });
      var elems = document.getElementById("prefTime");
      var instances = M.FormSelect.init(elems, options);
      `
  ).getContent();
  html.materializeJs = HtmlService.createHtmlOutput(
    `<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>`
  ).getContent();
  html.rule = rule;
  html.ex1 = timeNow;
  html.ex2 = dateNow;
  html.ex3 = nameStatus;
  html.ex4 = productStatus;
  html.ext5 = ing2name;
  html.startPageUrl = startPageUrl;
  html.myVideo = test2["active_ingredients"][0]["active_ing"];
  html.brand = altNames;
  return renderTemplate(html.evaluate()); //:contentFile('uiAccess');
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
};
