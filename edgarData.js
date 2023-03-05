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
      <? var style = styleHtml().getContent() ?> <?!= style ?>
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
      return "<option>" + Utilities.jsonStringify(r[1][2]) + "</option>";
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

  return renderTemplate(html.evaluate()); //:contentFile('uiAccess');
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

var opt = function (e) {
  var url =
    "https://script.google.com/macros/s/AKfycbzhrxdXzM08AAwA5ualRXdnDtV6C_xQ7bcq4v6H0HNdBqPr2C8A1URyWN0FLLccQuoA/exec?args=";
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
  jo.user = dataArray;
  var coTable = jo.user.map((r) => {
    return `<tr><td><a href="https://www.sec.gov/edgar/browse/?CIK=${
      r["cik"]
    }&owner=exclude" target="_blank">${
      r["cik"]
    }</a></td><td><a class="waves-effect waves-light btn" href="${
      url + encodeURIComponent(r["ticker"])
    }" target="_blank">${
      r["ticker"]
    }</a></td><td><a class="waves-effect waves-light btn" href="${
      url + encodeURIComponent(r["title"])
    }" target="_blank">${r["title"]}</a></td></tr>`;
  });
  var result = JSON.stringify(coTable);
  return renderTemplate(
    HtmlService.createTemplate(
      `
   <?!= styleHtml().getContent() ?>
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
   <div class="truncate">
   </div>
   <script>
    document.addEventListener("DOMContentLoaded", 
function(){document.getElementById("test").innerHTML = ${result}})
  </script>`
    ).evaluate()
  ).setTitle("Don'time Life Services");
};

function videoSEC(e) {
  var breakUrl = getUrl(ScriptApp);
  const uniqueCo = Utilities.jsonParse([
    urlDataSource("https://www.sec.gov/files/company_tickers.json"),
  ]);
  const uniqueCoArray = covArrays(uniqueCo);
  var jo = {};
  var dataArray = [];
  // var minData = [tmp][0].entries().next().value
  var randNum = Math.floor(Math.random() * Math.floor(uniqueCoArray.length)); // Math.floor(Math.random());
  for (var i = 0, l = uniqueCoArray.length; i < l; i++) {
    //var dataRow = Utilities.jsonParse(arrData);
    // console.log(typeof arrData[i]);
    // console.log(arrData[i])
    var record = {};
    record["cik"] = uniqueCoArray[i][0]["cik_str"];
    record["ticker"] = uniqueCoArray[i][0]["ticker"];
    record["title"] = uniqueCoArray[i][0]["title"];
    dataArray.push(record);
  }
  jo.user = dataArray;
  var coTable = jo.user.map((r) => {
    return `<tr><td><a href="https://www.sec.gov/edgar/browse/?CIK=${
      r["cik"]
    }&owner=exclude" target="_blank">${
      r["cik"]
    }</a></td><td><a class="waves-effect waves-light btn" href="${
      breakUrl +
      "?uname=" +
      encodeURIComponent(r["title"]) +
      "&cik=" +
      encodeURIComponent(r["cik"]) +
      "&tick=" +
      encodeURIComponent(r["ticker"])
    }" target="_blank">${
      r["ticker"]
    }</a></td><td><a class="waves-effect waves-light btn" href="${
      breakUrl +
      "?uname=" +
      encodeURIComponent(r["title"]) +
      "&cik=" +
      encodeURIComponent(r["cik"]) +
      "&tick=" +
      encodeURIComponent(r["ticker"])
    }" target="_blank">${r["title"]}</a></td></tr>`;
  });
  var resultOpt = JSON.stringify(coTable);
  const randomCoKey = Math.floor(
    Math.random() * Math.floor(uniqueCoArray.length)
  ); // Math.floor(Math.random());
  const uniqueCoKey = [uniqueCo].entries().next().value;
  const randomCo = uniqueCoKey[1][randomCoKey];
  const randomTitle = randomCo["title"];
  const randomTicker = randomCo["ticker"];
  const randomCIK = randomCo["cik_str"];
  // const uniqueVid = needPastTime(randomTitle);
  // const randomVidKey = Math.floor(Math.random() * (Math.floor(uniqueVid.length)))// Math.floor(Math.random());
  // const videoPlaylist = covObjects(uniqueVid, ["youtubeID"]);
  // const uniqueVidKey = [videoPlaylist].entries().next().value;
  // const randomVid = uniqueVidKey[1][randomVidKey];
  // const randomVideo = Utilities.jsonStringify(randomVid["youtubeID"]);
  var stkTicker = e.parameter["tick"] || randomTicker;
  var cik = e.parameter["cik"] || randomCIK;
  var percent = e.parameter["uname"] || randomTitle;
  var list = [];
  if (
    uniqueCoArray.find((w) => {
      return w;
    })
  ) {
    for (var i = 0; i < uniqueCoArray.length; i++) {
      var received = uniqueCoArray[i].filter((f) => {
        return f;
      });
      var result = received.find((w) => {
        return w;
      });
      if (result) {
        list.push([result]);
        if (JSON.stringify(i) >= uniqueCoArray.length) {
          break;
        }
      }
    }
  } else {
    list.push([percent]);
  }
  // console.log(list)
  const html = HtmlService.createTemplate(`
    <!DOCTYPE html>
      <html id="test">
        <head>
          <?!= styleHtml().getContent() ?>
        </head>
        <body class="green">
          <div class="toolbar toolbar_icon toolbar_iconHover scale-out receipt"><em><?!= rule() ?></em></div>
          <a href="https://flewis21.github.io/Don-time-Life-Services/" target="_top"><span><h1 class="z-depth-5 toolbar_icon toolbar_iconHover scale-transition scale-out scale-in btn-large receipt">Don'time Life Services!</h1></span></a>
          <div><a href="https://www.sec.gov/edgar/browse/?CIK=<?!= myCIK ?>&owner=exclude" target="_blank"><h1 class="blue z-depth-5 toolbar_icon toolbar_iconHover scale-transition scale-out scale-in btn-large receipt"><?!= myTicker ?></h1></a></div>
          <div class="row">
          <div class="col s12 push-s1 push-m1 push-l2">
          <div class="container row valign-wrapper video-container grey darken-4 z-depth-5 scale-transition scale-out scale-in receipt">
          <div class="col s12 receipt red" id="player1"><?!= videoPlayer(myVideo) ?></div></div></div></div>
          <div class="row">
          <div class="col s6 push-s1 push-m1 push-l2">
          <div class="container agenda z-depth-5 pulse blue receipt">
          <div class="col s12 receipt red">
          <input class="left datepicker menu-img z-depth-5 card-panel red scale-transition receipt toolbar toolbar_icon toolbar_iconHover scale-out scale-in" id="prefDate" type="text" placeholder="Book a date"/></div></div></div></div>
          <div class="row">
          <div class="col s6 push-s1 push-m1 push-l2">
          <div class="container agenda z-depth-5 pulse blue receipt">
          <div class="col s12 receipt red">
          <input class="right timepicker menu-img z-depth-5 card-panel green scale-transition receipt toolbar toolbar_icon toolbar_iconHover scale-out scale-in" id="prefTime" type="text" placeholder="Book a time"/></div></div></div></div>
          <div class="row">
          <div class="col s6 push-s1 push-m1 push-l2">
          <div class="container">
          <div class="col s12 receipt red">
          <span><input placeholder="Calculator..." class="menu-img z-depth-5 card-panel black scale-transition scale-out scale-in receipt btn-large" id="username" type="search" /></span>
          </div></div></div></div>
          <div class="row">
          <div class="col s6 push-s1 push-m1 push-l2">
          <div class="container dotted-border">
          <div class="col s12 receipt red">
            <table class="striped centered highlight responsive-table grey z-depth-5" style="width:100%">
              <thead>
                <tr>
                  <th>SEC book reference</th>
                  <th>Stock Market book reference</th>
                  <th>Company Name</th>
                </tr>
              </thead>
              <tbody id='opt' class="amber darken-4 receipt scale-out">
              </tbody>
            </table></div></div></div></div>
          <script>document.getElementById('username').addEventListener('change', <?!= topScript ?>)</script>
          <script>document.addEventListener("DOMContentLoaded", function(){document.getElementById("opt").innerHTML = ${resultOpt}})</script>
          <script>document.addEventListener("DOMContentLoaded", appJS);
            function appJS()
              {// mod the array
              let timePicker = document.getElementById('prefTime');
              M.Timepicker.init(timePicker, { defaultTime: "now" });
              google.script.run.withSuccessHandler(populateDates).runAll('app.busyDates', []);
              function populateDates(disabledDays) 
                {let datePicker = document.getElementById('prefDate');
                  M.Datepicker.init(datePicker, 
                    {minDate: new Date(), 
                    setDefaultDate: true,
                    disableDayFn: 
                      function(day) 
                        {return disabledDays.indexOf(day.valueOf()) > -1;}});};}
          </script>
          <input type="hidden" value="<?= getUrl(ScriptApp) ?>" id="url" />
        </body>
      </html>`);
  html.list = list
    .map(function (r) {
      return (
        "<li>" +
        `<a class="waves-effect waves-light btn" href="${breakUrl}?uname=${r[0]["title"]}&cik=${r[0]["cik_str"]}&tick=${r[0]["ticker"]}" target="_blank">` +
        r[0]["ticker"] +
        "</a>" +
        "</li>"
      );
    })
    .sort()
    .join("");
  html.breakUrl = breakUrl;
  html.myVideo = percent;
  html.myTitle = percent;
  html.myTicker = stkTicker;
  html.myCIK = cik;
  const idArray = needPastTime(randomTitle);
  const vidIdObject = covObjects(idArray, ["youTubeId"]);
  const rdmVidId = Math.floor(Math.random() * Math.floor(vidIdObject.length));
  html.myVidId = vidIdObject[rdmVidId]["youTubeId"];
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
      var linkHome = document.createElement("a");
      var linkFollow = document.createElement("a");
      linkHome.href = "https://flewis21.github.io/videoSEC/";
      linkFollow.href = url + "?uname=" + encodeURIComponent(uname);
      linkHome.id = "linkHOME";
      linkFollow.id = "linkFOLLOW";
      linkHome.target = "popup";
      linkFollow.target = "_top";
      document.body.appendChild(linkHome);
      document.body.appendChild(linkFollow);
      document.getElementById("linkFOLLOW").click();
      document.getElementById("linkHOME");
      document.getElementById("username").value = "";
    })();
  }; //Global object closed
  return renderTemplate(html.evaluate()).setTitle("Don'time Life Services");
} //webApp closed
