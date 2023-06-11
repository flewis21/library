var allInvestors = function (rndKey) {
  var uniqueKey = JSON.parse([
    urlDataSource("https://www.sec.gov/files/company_tickers.json"),
  ]);
  var uniqueCoArray = covArrays(uniqueKey);
  var coKey =
    rndKey ||
    uniqueCoArray[
      Math.floor(Math.random() * Math.floor(uniqueCoArray.length))
    ][0]["title"];
  const matches = [];
  uniqueCoArray
    .sort((a, b) => a - b)
    .filter((ac) => {
      if (
        JSON.stringify(ac[0]["title"])
          .toLowerCase()
          .includes(
            coKey.toString().toLowerCase() ||
              [`group bank semi fact bio science block chain space coin`]
                .toString()
                .split(" ")
                .sort((a, b) => a - b)[
                Math.floor(
                  Math.random() *
                    Math.floor(
                      [
                        `group bank semi fact bio science block chain space coin`,
                      ]
                        .toString()
                        .split(" ").length
                    )
                )
              ]
          )
      )
        matches.push(ac);
    });
  if (matches.length !== 0) {
    var randomKey = Math.floor(Math.random() * Math.floor(matches.length)); // Math.floor(Math.random())
    var uniqueCoKey = [matches].entries().next().value;
    var randomTitle = uniqueCoKey[1][randomKey][0]["title"];
    var randomTicker = uniqueCoKey[1][randomKey][0]["ticker"];
    var randomCik = uniqueCoKey[1][randomKey][0]["cik_str"];
  }
  //Youtube Widget
  var idArray = needPastTime(randomTitle || coKey);
  var randomPlaylist = [];
  for (var i = 0; i < idArray.length; i++) {
    const randomVidKey = Math.floor(
      Math.random() * Math.floor([idArray].length)
    ); // Math.floor(Math.random());
    randomPlaylist.push(idArray[randomVidKey]);
  }
  var vidPlaylist = function () {
    const randomVidKey = Math.floor(
      Math.random() * Math.floor(randomPlaylist.length)
    ); // Math.floor(Math.random());
    var playListSorted = randomPlaylist.sort((a, b) => a - b);
    var videoObject = covObjects(playListSorted, ["youtubeID"]);
    if (typeof videoObject["youtubeID"] !== "undefined") {
      var uniqueVidKey = [videoObject].entries().next().value;
      var randomVid = uniqueVidKey[1][randomVidKey];
      var rVideo = randomVid["youtubeID"];
      return rVideo;
    }
  };
  var sortaPlay = randomPlaylist.sort((a, b) => a - b);
  var randomVideo =
    vidPlaylist() ||
    sortaPlay[Math.floor(Math.random() * Math.floor(sortaPlay.length))];
  var youtubeUrl = "http://www.youtube.com/watch?v=" + randomVideo;
  // return misBing(randomVideo)
  var secUrl =
    "https://www.sec.gov/edgar/browse/?CIK=" + randomCik + "&owner=exclude";
  return {
    cik: randomCik,
    ticker: randomTicker,
    title: randomTitle || coKey,
    rndVideoId: randomVideo,
    videoPlaylist: randomPlaylist,
    videoUrl: youtubeUrl,
    edgarUrl: secUrl,
  };
};

var allTime = function (rndKey) {
  var uniqueKey = [randomSubstance(null, 0, 4)];
  var uniqueCoArray = covArrays(uniqueKey);
  var coKey =
    rndKey ||
    uniqueCoArray[Math.floor(Math.random() * Math.floor(uniqueCoArray.length))];
  //Youtube Widget
  var idArray = needPastTime(rndKey || coKey);
  var randomPlaylist = [];
  for (var i = 0, l = idArray.length; i < l; i++) {
    const randomVidKey = Math.floor(Math.random() * Math.floor(idArray.length)); // Math.floor(Math.random());
    randomPlaylist.push(idArray[randomVidKey]);
  }
  var vidPlaylist = function () {
    const randomVidKey = Math.floor(
      Math.random() * Math.floor(randomPlaylist.length)
    ); // Math.floor(Math.random());
    var playListSorted = randomPlaylist.sort((a, b) => a - b);
    var videoObject = covObjects(playListSorted, ["youtubeID"]);
    if (typeof videoObject["youtubeID"] !== "undefined") {
      var uniqueVidKey = [videoObject].entries().next().value;
      var randomVid = uniqueVidKey[1][randomVidKey];
      var rVideo = randomVid["youtubeID"];
      return rVideo;
    }
  };
  var sortaPlay = randomPlaylist.sort((a, b) => a - b);
  var randomVideo =
    vidPlaylist() ||
    sortaPlay[Math.floor(Math.random() * Math.floor(sortaPlay.length))];
  var youtubeUrl = "http://www.youtube.com/watch?v=" + randomVideo;
  return {
    title: rndKey || coKey,
    rndVideoId: randomVideo,
    videoPlaylist: randomPlaylist,
    videoUrl: youtubeUrl,
  };
};

var edgarData = function (text) {
  // SEC Edgar Filings Widget
  let h = {};
  var tmp = [];
  let jsonData = Utilities.jsonParse([
    urlDataSource(text, null, { muteHttpExceptions: true }),
  ]);
  let objParts = {};
  for (var i = 0; i < jsonData.length; i++) {
    //Object.fromEntries(JSON.stringify(
    for (var [key, { title }] of Object.entries(jsonData[i])) {
      objParts[title] = key;
    }
  } //.map(entry => [entry[1]]))
  var arrData = covArrays(jsonData);
  if (arrData) {
    const keys = Object.keys(arrData);
    keys.forEach(function (key) {
      tmp[key] = arrData[key];
    });
  }
  console.log(typeof [jsonData]);
  console.log(objParts);
  let o = jsonData;
  for (let k of Object.keys(o)) {
    let n = k.split(":")[0];
    if (!h[n]) h[n] = [];
    h[n].push(o[k]);
    let a = Object.keys(h).map((k) => [k].concat(h[k]));
    var result = JSON.stringify(a);
    console.log(result.length);
  }
  var startPageUrl = getUrl(ScriptApp) + "?default";
  var today = new Date();
  var html = HtmlService.createTemplate(`
  <!DOCTYPE html>
    <html>
      <head>
        <base target="_top">
      </head>
      <body>
        <nav>
          <a href="<?= getUrl(ScriptApp) ?>" target="_top">Back</a>
        </nav>
        <div class="menu-img"><?!= rule ?></div>
          <ul class="link-list min-list">
            <li><div class="query-results"></div></li>
          </ul>
        <div>
          <select id="edgarData"><?!= opt ?></select>
        </div>
        <div class="search-box-outer container col s1">
        <div class="search-box-inner container col s1">
        <label>Search</label><input type="text" id="search" placeholder="type here.." >
        <div id="data-table"></div>
        <?!= dOMContentLoaded ?>
      <input type="hidden" value="<?= getUrl(ScriptApp) ?>" id="gamerUrl" />
      </body>
    </html>`);
  html.rule = today.toDateString() + " - " + today.toTimeString();
  html.opt = tmp
    .map(function (r) {
      return "<option>" + JSON.stringify(r[1][2]) + "</option>";
    })
    .join("");
  html.materializeCss = HtmlService.createHtmlOutput(
    `
    <link href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" rel="stylesheet"></link>`
  ).getContent();
  html.tabulatorCss = HtmlService.createHtmlOutput(
    `
    <link href=\"https://unpkg.com/tabulator-tables@5.2.3/dist/css/tabulator_materialize.min.css\" rel=\"stylesheet\">`
  ).getContent();
  html.materializeJs = HtmlService.createHtmlOutput(
    `
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>`
  ).getContent();
  html.dOMContentLoaded = HtmlService.createHtmlOutput(
    `
    <script>
      const elements = {};
      document.addEventListener("DOMContentLoaded", 
function() 
  {var elems = document.querySelectorAll("select");
  var instances = M.FormSelect.init(elems);});
  </script>`
  ).getContent();
  html.loadData = HtmlService.createHtmlOutput(
    `
    <script>
      document.addEventListener("DOMContentLoaded", loadData);
function loadData() {tabulatorLoad();}
    </script>`
  ).getContent();
  html.tabulatorLoad = HtmlService.createHtmlOutput(
    `
function tabulatorLoad() 
  {elements.alerts = document.getElementById("alerts");
  elements.search = document.getElementById("search");
  elements.search.addEventListener("input", searchData);
  const tabledata = ${JSON.stringify(text)};
  const table = 
    new Tabulator("#data-table", 
                 {height:205,
                 data:tabledata,
                 layout:"fitColumns",
                 responsiveLayout:"hide",
                 pagination:"local",
                 paginationSize:5,
                 columns:
                  [{title:"Central Index Key", 
                    field:"cik_str", 
                    editor:"list", 
                    editorParams:{valuesLookup:"active", 
                                  valuesLookupField:"id"}},
                    {title:"Ticker Symbol", 
                    field:"ticker", 
                    editor:"list", 
                    editorParams:{valuesLookup:"active", 
                                  valuesLookupField:"ticker"}},
                    {title:"Company or Fund name", 
                    field:"title", 
                    editor:"list", 
                    editorParams:{valuesLookup:"active", 
                                  valuesLookupField:"title"}},
                    {title:"Task Progress", 
                    field:"progress", 
                    hozAlign:"left", 
                    formatter:"progress", 
                    editor:"input"},
                    {title:"Complete", 
                    field:"Complete", 
                    width:90,  
                    hozAlign:"center", 
                    formatter:"tickCross", 
                    sorter:"boolean", 
                    editor:"input"},],});`
  ).getContent();
  html.rowClicked = HtmlService.createHtmlOutput(
    `
    //table.on("rowClick", 
function(e, row){//alert("Row " + row.getData().id + " Clicked!!!!");//});`
  ).getContent();
  html.cellEdited = HtmlService.createHtmlOutput(
    `
    table.on("cellEdited", 
function(cell){//cell - cell component
              const field = cell._cell.column.field;
              const id = cell._cell.row.data.id;
              const val = cell._cell.value})`
  ).getContent();
  html.searchData = HtmlService.createHtmlOutput(
    `
function searchData(e) 
  {table.setFilter("title","like", e.target.value);
  google.script.run
    .withSuccessHandler(egdarData)
    .companyName("https://www.sec.gov/files/company_tickers.json", "", 1, 1, [["cik_str"],["ticker"],["title"]])}`
  ).getContent();
  html.companyInfo = HtmlService.createHtmlOutput(`
function edgarData()companyInfo) {console.log(companyInfo);}`);
  html.startPageUrl = startPageUrl;

  return html.evaluate().getContent(); //:contentFile('uiAccess');
}; // edgarArray.push([result])
// for (let k of Object.keys())
// queO.push([testObject([forArray(splitNoX(o, 1))],[forArray(splitNoX(o, 0))])])
// if (o.hasOwnProperty(k))
// {
// let n = queO.split(":")[0];
//   if (!h[n]) h[n] = [];
// if (!h[keys]) h[keys] = [];
// h[n].push(jsonData[k]);
// h[keys].push(o[k]);
// h[n].push(o);
// }
// console.log(h.length)
// }
// console.log(tmp.length)
// console.log(jsonData.trim())
// console.log([jsonData][0])
// console.log(tmp)
// var o = mapValues([forArray(jsonData)], 0)
// var jsonValues = mapValues([forArray([splitNoX([testData(jsonData)], 1)])], 1);
// var jsonKeys = mapValues([forArray([splitNoX([testData(jsonData)], 0)])], 0);
// var testo = testObject(jsonValues, jsonKeys);
// for (var i=0;0 < tmp.length; i++)
// {
//   let k = JSON.parse(jsonData)[i];
//   o.push())
// }
// const testIndex = testArray(jsonData)
// const testIndex = splitNoX(jsonData);
// const arrayObjData = testArray(testIndex)
// const objTest = forArray(testIndex);
// const dataHeaders = mapValues(arrayObjData, 1)
//  var queO = JSON.stringify([testObject([forArray(splitNoX(o, 1))],[forArray(splitNoX(o, 0))])])
// var edgarArray = []
// let h = {};
// for (var i=0;0 < tmp.length; i++)
// {
// }

// if (result)
// {
// }

// const spreadSheet = ssDatabase(["cik_str","ticker","title"], , spreadSheetCreate("edgarData"))
// const jsonSheet = ;
// const jsonData = [urlDataSource("https://www.sec.gov/files/company_tickers.json")]//mapValues([urlDataSource("https://www.sec.gov/files/company_tickers.json")], 5)//mapValues([JSON.parse(forHeaders(splitNoX(urlDataSource("https://www.sec.gov/files/company_tickers.json"))))], 0)//.entries()//mapValues([urlDataSource("https://www.sec.gov/files/company_tickers.json")], JSON.parse(forHeaders(splitNoX(urlDataSource("https://www.sec.gov/files/company_tickers.json")))[0]))//.map(obj => {})//))//))[1]//, 3)//)[1])//], 0)//covObjects(sliceValues(testData(urlDataSource("https://www.sec.gov/files/company_tickers.json")), JSON.parse(forHeaders(splitNoX(sliceValues(testData(urlDataSource("https://www.sec.gov/files/company_tickers.json")), JSON.parse(forHeaders(splitNoX(urlDataSource("https://www.sec.gov/files/company_tickers.json")))[0]))))[1])), [JSON.parse(forHeaders(splitNoX(sliceValues(testData(urlDataSource("https://www.sec.gov/files/company_tickers.json")), JSON.parse(forHeaders(splitNoX(urlDataSource("https://www.sec.gov/files/company_tickers.json")))[0]))))[1])])//JSON.parse(forHeaders(splitNoX(sliceValues(testData(urlDataSource("https://www.sec.gov/files/company_tickers.json")), JSON.parse(forHeaders(splitNoX(urlDataSource("https://www.sec.gov/files/company_tickers.json")))[0]))))[0])//sliceValues(testData(urlDataSource("https://www.sec.gov/files/company_tickers.json")), JSON.parse(forHeaders(splitNoX(sliceValues(testData(urlDataSource("https://www.sec.gov/files/company_tickers.json")), JSON.parse(forHeaders(splitNoX(urlDataSource("https://www.sec.gov/files/company_tickers.json")))[1]))))[1]))//covObjects(sliceValues(testData(urlDataSource("https://www.sec.gov/files/company_tickers.json")), JSON.parse(forHeaders(splitNoX(urlDataSource("https://www.sec.gov/files/company_tickers.json")))[1])), [JSON.parse(forHeaders(splitNoX(urlDataSource("https://www.sec.gov/files/company_tickers.json")))[1])])//, "/")//, 0)//, 0)// , 0, "0", "/", 0)"
// console.log(tmp)
// const jsonDoc = ssDatabase("edgarData", [JSON.parse(forHeaders(splitNoX(urlDataSource("https://www.sec.gov/files/company_tickers.json")))[1])], jsonData)
//  edgarData = ("\n <?!= jsonData ?>\n   ")
//  contentApp("\n <?!= html ?>\n  ", { html: "".concat(contentApp("\n  <head>\n  <link href=\"https://unpkg.com/tabulator-tables@5.2.3/dist/css/tabulator_materialize.min.css\" rel=\"stylesheet\">\n  <link href=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css\" rel=\"stylesheet\"></link>\n  \n\n <?!= headerBottom ?>", { headerBottom: "".concat(contentApp("\n  </head>\n  \n\n  <?!= bodyTop ?>", { bodyTop: "".concat(contentApp("\n  <body>\n <ul class=\"link-list min-list\">\n <li><div class=\"query-results\"></div></li>\n  </ul>\n  <div class=\"search-box-outer container col s1\">\n  <div class=\"search-box-inner container col s1\">\n <label>Search</label><input type=\"text\" id=\"search\" placeholder=\"type here..\" >\n  \n\n <?!= divBottom ?>\n <?!= divBottom ?>\n \n <div id=\"data-table\"><?!= divBottom ?>\n  \n <script src=\"https://cdnjs.cloudflare.com/ajax/libs/luxon/3.0.1/luxon.min.js\" integrity=\"sha512-6ZJuab/UnRq1muTChgrVxJhSgygmL2GMLVmSJN7pcBEqJ1dWPbqN9CiZ6U3HrcApTIJsLnMgXYBYgtVkJ8fWiw==\" crossorigin=\"anonymous\" referrerpolicy=\"no-referrer\"><?!= scriptBottom ?>\n  <script type=\"text/javascript\" src=\"https://unpkg.com/tabulator-tables@5.2.3/dist/js/tabulator.min.js\"><?!= scriptBottom ?>\n  <?!= scriptTop ?>\n <?!= scriptBottom ?>\n  <?!= bodyBottom ?>", { divBottom: "".concat(contentApp("\n  </div>\n "), ""), scriptTop: "".concat(contentApp("\n  <script>\n const elements = {}\n document.addEventListener(\"DOMContentLoaded\", loadData)\n\n function loadData() {\n pageLoad();\n }\n function pageLoad() {\n elements.alerts = document.getElementById(\"alerts\")\n elements.search = document.getElementById(\"search\")\n\n elements.search.addEventListener(\"input\", searchData)\n }\n const tabledata = \"".concat(JSON.stringify(jnsData), "\";\n  const table = new Tabulator(\"#data-table\", {\n    height:205,\n    data:tabledata,\n    layout:\"fitColumns\",\n    responsiveLayout:\"hide\",\n    pagination:\"local\",\n    paginationSize:5,\n    columns:[\n {title:\"Central Index Key\", field:\"cik_str\", editor:\"list\", editorParams:{ valuesLookup:\"active\", valuesLookupField:\"id\" }},\n        {title:\"Ticker Symbol\", field:\"ticker\", editor:\"list\", editorParams:{ valuesLookup:\"active\", valuesLookupField:\"ticker\" }},\n        {title:\"Company or Fund name\", field:\"title\", editor:\"list\", editorParams:{ valuesLookup:\"active\", valuesLookupField:\"title\" }},\n  {title:\"Task Progress\", field:\"progress\", hozAlign:\"left\", formatter:\"progress\", editor:\"input\"},\n  {title:\"Complete\", field:\"Complete\", width:90,  hozAlign:\"center\", formatter:\"tickCross\", sorter:\"boolean\", editor:\"input\"},\n     ],\n  });\n   //table.on(\"rowClick\", function(e, row){\n   //alert(\"Row \" + row.getData().id + \" Clicked!!!!\");\n  //});\n  \n table.on(\"cellEdited\", function(cell){\n  //cell - cell component\n const field = cell._cell.column.field\n const id = cell._cell.row.data.id\n const val = cell._cell.value\n })\n  function searchData(e) {\n  table.setFilter(\"title\",\"like\", e.target.value);\n google.script.run.withSuccessHandler(egdarData).companyName(\"https://www.sec.gov/files/company_tickers.json\", \"\", 1, 1, [[\"cik_str\"],[\"ticker\"],[\"title\"]])\n }\n\n function edgarData()companyInfo) {\n console.log(companyInfo);\n }\n  ")), ""), scriptBottom: "".concat(contentApp("\n  </script>\n"), ""), bodyBottom: "".concat(contentApp("\n  </body>\n"), "")}), "")}), "")}), "")})
// const tickerValue = widgetData(splitNoX(fetchDataSource("https://www.sec.gov/files/company_tickers.json")), [["key"],["value"]])
// let search = tickerValue.filter(function(a) { return a[8]; } )
// let search = widgetData(tickerValue.filter(function(a) { return a; } ), [JSON.stringify(tickerValue[0]["value"]["cik_str"]),JSON.stringify(tickerValue[0]["value"]["ticker"]),JSON.stringify(tickerValue[0]["value"]["title"])])[2]

// console.log(edgarData("https://www.sec.gov/files/company_tickers.json", "Edgar",widgetData(splitNoX(fetchDataSource("https://www.sec.gov/files/company_tickers.json")), [["key"],["value"]])).getContent())
// console.log(widgetData(search["value"], [["cik_str"],["ticker"],["title"]]))

//{
// ("\n <div  id=\"table-body\"></div>\n  <script>\n  const mydata = \"".concat(JSON.stringify(testData("data")), "\" \n \n  const tbody = document.getElementById(\"table-body\")\n   const htmlBody = mydata.forEach(function(r) {\n   console.log(r)\n   console.log(mydata)\n   const link = document.createElement(\"a\");\n  link.textContent = ".concat("\\ value=r[1] target=\"_blank\" href=\"https://www.sec.gov/edgar/browse/?CIK=\"r[0][0]\"&owner=exclude\"", ";\n   tbody.innerHtml(link);\n  })\n   </script>\n  ")), { textContent: "\\ value=r[1] target=\"_blank\" href=\"https://www.sec.gov/edgar/browse/?CIK=\"r[0][0]\"&owner=exclude\"" });
//}

var epaA = function (epaAUrl) {
  const epaA = splitNoX(urlDataSource(epaAUrl));
  return epaA;
};

var epaB = function (epaBurl, epaC, uniA, epaBdelimiter) {
  const epaB = splitX(urlDataSource(epaBurl + epaC), uniA, epaBdelimiter);
  return epaB;
};

var epaC = function (epaCurl, epaD, uniA, epaCdelimiter) {
  const epaC = splitX(urlDataSource(epaCurl + epaD), uniA, epaCdelimiter);
  return epaC;
};

var epaD = function (epaDurl, epaDXpath, epaDdelimiter) {
  const epaD = splitX(urlDataSource(epaDurl), epaDXpath, epaDdelimiter);
  return epaD;
};

var oldSEC = function (rndTitle) {
  var urlCompany =
    "https://script.google.com/macros/s/AKfycbzhrxdXzM08AAwA5ualRXdnDtV6C_xQ7bcq4v6H0HNdBqPr2C8A1URyWN0FLLccQuoA/exec?func=foo.misBing&args=";
  var urlTicker = "https://www.nasdaq.com/search?q=";
  var urlCik = "https://www.sec.gov/edgar/browse/?CIK=";
  const uniqueCo = JSON.parse([
    urlDataSource("https://www.sec.gov/files/company_tickers.json", null, {
      muteHttpExceptions: true,
    }),
  ]);
  const titleKings = needCapital(rndTitle);
  const uniqueCoArray = covArrays(uniqueCo);
  const matches = [];
  const alTheCo = uniqueCoArray.filter((ac) => {
    if (JSON.stringify(ac[0]["title"]).toLowerCase().includes(rndTitle))
      matches.push(ac);
  });
  const titleMatches = [matches.toString().substring(titleKings)];
  // console.log(Utilities.jsonStringify([titleMatches]))
  var coTable = matches.map((r) => {
    return `<tr><td><a class="waves-effect waves-light btn" href="${urlTicker}${encodeURIComponent(
      r[0]["ticker"]
    )}&page=1&sort_by=relevence&langcode=en" target="_blank">${
      r[0]["ticker"]
    }</a></td><td><a class="waves-effect waves-light btn" href="${urlCik}${encodeURIComponent(
      r[0]["cik_str"]
    )}&owner=exclude" target="_blank">${
      r[0]["cik_str"]
    }</a></td><td><a class="waves-effect waves-light btn" href="${urlCompany}${encodeURIComponent(
      r[0]["title"]
    )}" target="_blank">${r[0]["title"]}</a></td></tr>`;
  });
  const result = JSON.stringify(coTable);
  const randomCoKey = Math.floor(
    Math.random() * Math.floor(uniqueCoArray.length)
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
            <th>Ticker</th>
            <th>Company Identification Key</th>
            <th>Company Name</th>
          </tr>
        </thead>
        <tbody id="epaData">
        </tbody>
      </table>
      </div></div></div></div>
      <div class="row">
      <div class="col s10 card-panel amber push-s1 push-m1 push-l1">
      <div class="container">
      <div class="col s12 receipt red">
      <span><input placeholder="Your Search Here Ex. apple,orange..." class="menu-img z-depth-5 card-panel black scale-transition scale-out scale-in receipt btn-large" id="username" type="search" /></span>
      </div></div></div></div>
    </body>
    <script>document.getElementById('username').addEventListener('change', <?!= topScript ?>)</script>
    <script>document.addEventListener("DOMContentLoaded", function()
      {document.getElementById("epaData").innerHTML = ${result};})</script>`
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
        url + "?func=oldSEC" + "&args=" + encodeURIComponent(uname);
      linkFollow.id = "linkFOLLOW";
      linkFollow.target = "_top";
      document.body.appendChild(linkFollow);
      document.getElementById("linkFOLLOW").click();
      document.getElementById("username").value = "";
    })();
  }; //Global object closed
  return html.evaluate().getContent();
};

var opt = function (searchString) {
  var url =
    "https://script.google.com/macros/s/AKfycbzhrxdXzM08AAwA5ualRXdnDtV6C_xQ7bcq4v6H0HNdBqPr2C8A1URyWN0FLLccQuoA/exec?args=";
  var optUrl = getUrl(ScriptApp) + "?func=seoSheet&args=";
  var tmp = [];
  let jsonData = Utilities.jsonParse([
    urlDataSource("https://www.sec.gov/files/company_tickers.json"),
  ]);
  var arrData = covArrays(jsonData);
  // console.log(arrData.length)
  let objParts = {};
  for (var i = 0; i < arrData.length; i++) {
    //Object.fromEntries(JSON.stringify(
    for (var [key, { cik_str, ticker, title }] of Object.entries(arrData[i])) {
      objParts[title] = key;
      objParts[ticker] = key;
      objParts[cik_str] = key;
    } //.map(entry => [entry[1]]))
  }
  if (arrData) {
    const keys = Object.keys(arrData);
    keys.forEach(function (key) {
      tmp[key] = arrData[key];
    });
  }
  var jo = {};
  var dataArray = [];
  // var minData = [tmp][0].entries().next().value
  var randNum = Math.floor(Math.random() * Math.floor(arrData.length)); // Math.floor(Math.random());
  for (var i = 0, l = arrData.length; i < l; i++) {
    //var dataRow = Utilities.jsonParse(arrData);
    // console.log(typeof arrData[i]);
    // console.log(arrData[i])
    var record = {};
    record["cik"] = arrData[i][0]["cik_str"];
    record["ticker"] = arrData[i][0]["ticker"];
    record["title"] = arrData[i][0]["title"];
    dataArray.push(record);
  }
  const matches = [];
  const alTheCo = arrData
    .sort((a, b) => a - b)
    .filter((ac) => {
      if (
        JSON.stringify(ac[0]["title"])
          .toLowerCase()
          .includes(
            searchString ||
              [`group bank semi fact bio science block chain space coin`]
                .toString()
                .split(" ")[
                Math.floor(
                  Math.random() *
                    Math.floor(
                      [
                        `group bank semi fact bio science block chain space coin`,
                      ]
                        .toString()
                        .split(" ").length
                    )
                )
              ]
          )
      )
        matches.push(ac);
    });
  jo.user = dataArray;
  var coTable = matches.map((r) => {
    return `<tr><td><a href="https://www.sec.gov/edgar/browse/?CIK=${
      r[0]["cik_str"]
    }&owner=exclude" target="_blank">${
      r[0]["cik_str"]
    }</a></td><td><a class="waves-effect waves-light btn" href="${
      optUrl + encodeURIComponent(r[0]["ticker"])
    }" target="_blank">${
      r[0]["ticker"]
    }</a></td><td><a class="waves-effect waves-light btn" href="${
      optUrl + encodeURIComponent(r[0]["title"])
    }" target="_blank">${r[0]["title"]}</a></td></tr>`;
  });
  var result = JSON.stringify(coTable);
  return HtmlService.createTemplate(
    `
    <div class="row">
    <div class="col s10 card-panel amber push-s1 push-m1 push-l1">
    <div class="container">
    <div class="col s12 receipt red">
   <table class="striped centered highlight responsive-table grey z-depth-5" style="width:100%">
    <thead>
      <tr>
        <th>SEC book reference</th>
        <th>Stock Market book reference</th>
        <th>Company Name</th>
      </tr>
    </thead>
    <tbody id="test">
    </tbody>
   </table>   
    </div></div></div></div>
   <div class="truncate">
   </div>
   <script>
    document.addEventListener("DOMContentLoaded", 
function(){document.getElementById("test").innerHTML = ${result}})
  </script>`
  )
    .evaluate()
    .getContent();
};

function videoSEC() {
  const uniqueCo = Utilities.jsonParse([
    urlDataSource("https://www.sec.gov/files/company_tickers.json"),
  ]);
  const uniqueCoArray = covArrays(uniqueCo);
  const randomCoKey = Math.floor(
    Math.random() * Math.floor(uniqueCoArray.length)
  ); // Math.floor(Math.random());
  var sectionCo = [uniqueCoArray[randomCoKey][0]["title"]]
    .toString()
    .split(" ");
  var itemId =
    sectionCo[Math.floor(Math.random() * Math.floor(sectionCo.length))];
  var vidDetail = coUtility(itemId)[0];
  const html = HtmlService.createTemplate(`
    <!DOCTYPE html>
      <html id="test">
        <body class="green">
          <a href="https://flewis21.github.io/Don-time-Life-Services/" target="_top"><span><h1 class="z-depth-5 toolbar_icon toolbar_iconHover scale-transition scale-out scale-in btn-large receipt">Don'time Life Services!</h1></span></a>
          <div class="row">
          <div class="col s10 card-panel red push-s1 push-m1 push-l1">
          <div class="video-container">
          <div class="col s12 receipt red" id="player1"><?!= dtlsVegas(myTitle) ?></div></div></div></div>
          <div class="row">
          <div class="col s10 card-panel red push-s1 push-m1 push-l1">
          <div class="container">
          <div class="col s12 receipt red">
          <span><input placeholder="Calculator..." class="menu-img z-depth-5 card-panel black scale-transition scale-out scale-in receipt btn-large" id="username" type="search" /></span>
          </div></div></div></div>
          <div class="row">
          <div class="col s10 card-panel red push-s1 push-m1 push-l1">
          <div class="container agenda z-depth-5 pulse blue receipt">
          <div class="col s12 receipt red">
          <input class="left datepicker menu-img z-depth-5 card-panel red scale-transition receipt toolbar toolbar_icon toolbar_iconHover scale-out scale-in" id="prefDate" type="text" placeholder="Book a date"/></div></div></div></div>
          <div class="row">
          <div class="col s10 card-panel red push-s1 push-m1 push-l1">
          <div class="container agenda z-depth-5 pulse blue receipt">
          <div class="col s12 receipt red">
          <input class="right timepicker menu-img z-depth-5 card-panel green scale-transition receipt toolbar toolbar_icon toolbar_iconHover scale-out scale-in" id="prefTime" type="text" placeholder="Book a time"/></div></div></div></div>
          <script>document.getElementById('username').addEventListener('change', <?!= topScript ?>)</script>
          <input type="hidden" value="<?= getUrl(ScriptApp) ?>" id="url" />
        </body>
      </html>`);
  html.myTitle = vidDetail.rndTitle;
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
        url + "?func=dtlsInvestor" + "&args=" + encodeURIComponent(uname);
      linkFollow.id = "linkFOLLOW";
      linkFollow.target = "_blank";
      document.body.appendChild(linkFollow);
      document.getElementById("linkFOLLOW").click();
      document.getElementById("username").value = "";
    })();
  }; //Global object closed
  return html.evaluate().getContent();
} //webApp closed
