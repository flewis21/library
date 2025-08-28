var coSort = function (time) {
  // console.log("coSort: \nvar data = [" + urlDataSource("https://www.sec.gov/files/company_tickers.json") + "]")
  // var data = [urlDataSource("https://www.sec.gov/files/company_tickers.json")]
  // console.log("coSort: \nvar dataObjects = convertToObjects(" + data, 'dataObject',time + ")")
  // var dataObjects = convertToObjects(data, ["dataObject"],time)
  // var uniqueKey = JSON.parse(dataObjects);
  // var cikArray = []
  // var tickerArray = []
  // var titleArray = []
  // for (var key in uniqueKey) {
  //   var elaspeTime = new Date() - start
  //   // console.log("that function: " + arguments.callee.caller.name + "\nthis function: " + arguments.callee.name + "\nkey: " +  uniqueKey[key]["title"] + "\nelaspeTime: " + elaspeTime)
  //   cikArray.push(uniqueKey[key]["cik_str"])
  //   tickerArray.push(uniqueKey[key]["ticker"])
  //   titleArray.push(uniqueKey[key]["title"])

  // }{

  // }
  var sheetCalc = function () {
    var secSheet = ssGetSheetBySpreadsheetUrl(
      "https://docs.google.com/spreadsheets/d/1-vNcN0vCLcXgMY9uwcKukUgv_4njggRZ6fqoZs-hBFE/edit#gid=138098962",
      "sec",
    );
    var secArrays = secSheet.getDataRange().getValues().slice(1);
    var arrVals = secArrays.map((val) => {
      return {
        cik: val[0],
        ticker: val[1],
        title: val[2],
      };
    });
    return arrVals;
  };

  var data = sheetCalc();
  var cikArray = [];
  var tickerArray = [];
  var titleArray = [];
  data.map((sec) => {
    cikArray.push(sec["cik"]);
    tickerArray.push(sec["ticker"]);
    titleArray.push(sec["title"]);
  });
  var cikArrData = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var titleArrData = [
    "e",
    "t",
    "a",
    "o",
    "n",
    "r",
    "i",
    "s",
    "h",
    "d",
    "l",
    "f",
    "c",
    "m",
    "u",
    "g",
    "y",
    "p",
    "w",
    "b",
    "v",
    "k",
    "x",
    "j",
    "q",
    "z",
  ];
  var tickerArrData = [
    "e",
    "t",
    "a",
    "o",
    "n",
    "r",
    "i",
    "s",
    "h",
    "d",
    "l",
    "f",
    "c",
    "m",
    "u",
    "g",
    "y",
    "p",
    "w",
    "b",
    "v",
    "k",
    "x",
    "j",
    "q",
    "z",
  ];
  var i = 0;
  var cikl = cikArrData.length;
  var ticl = tickerArrData.length;
  var titl = titleArrData.length;
  var cikFreqArray = coSortCIKS(cikArray, cikArrData, i, cikl);
  var tickerFreqArray = coSortTickers(tickerArray, tickerArrData, i, ticl);
  var titleFreqArray = coSortTitles(titleArray, titleArrData, i, titl);
  return {
    cik: cikFreqArray,
    ticker: tickerFreqArray,
    title: titleFreqArray,
  };
};

var coSortCIKS = function (cikArray, cikArrData, i, cikl) {
  var cikFreqArray = [];

  for (i, cikl; i < cikl; i++) {
    cikArray.sort((a, b) => {
      // console.log("that function: " + arguments.callee.caller.name + "\nthis function: " + arguments.callee.name + "\nsort: " +  a + "\nelaspeTime: " + elaspeTime)
      // console.log(a.toString()[0])
      if (a.toString()[0] === cikArrData[i].toString()) {
        if (a !== b && cikFreqArray.indexOf(a) === -1) {
          if (cikFreqArray.indexOf(a) > -1) {
            return;
          }
          {
          }

          cikFreqArray.push(a);
        }
      } else if (b.toString()[0] === cikArrData[i].toString()) {
        if (b !== a && cikFreqArray.indexOf(b) === -1) {
          if (cikFreqArray.indexOf(b) > -1) {
            return;
          }
          {
          }

          cikFreqArray.push(b);
        }
      }
    });
  }
  // var cikNonStandard = []
  // l = cikArray.length
  // for (i,1;i<l;i++) {

  //   if (cikFreqArray.indexOf(cikArray[i]) === -1) {

  //     cikNonStandard.push(cikArray[i])

  //   }

  //  }

  return cikFreqArray;
};

var coSortTickers = function (tickerArray, tickerArrData, i, ticl) {
  var tickerFreqArray = [];

  for (i, ticl; i < ticl; i++) {
    tickerArray.sort((a, b) => {
      // console.log("that function: " + arguments.callee.caller.name + "\nthis function: " + arguments.callee.name + "\nsort: " +  a + "\nelaspeTime: " + elaspeTime)
      if (a[0].toLowerCase() === tickerArrData[i]) {
        tickerFreqArray.push(a);
      }
    });
  }

  return tickerFreqArray;
};

var coSortTitles = function (titleArray, titleArrData, i, titl) {
  var titleFreqArray = [];
  for (i, titl; i < titl; i++) {
    titleArray.sort((a, b) => {
      // console.log("that function: " + arguments.callee.caller.name + "\nthis function: " + arguments.callee.name + "\nsort: " +  a + "\nelaspeTime: " + elaspeTime)
      if (a[0].toLowerCase() === titleArrData[i]) {
        titleFreqArray.push(a);
      }
    });
  }

  return titleFreqArray;
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
    <link href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" rel="stylesheet"></link>`,
  ).getContent();
  html.tabulatorCss = HtmlService.createHtmlOutput(
    `
    <link href=\"https://unpkg.com/tabulator-tables@5.2.3/dist/css/tabulator_materialize.min.css\" rel=\"stylesheet\">`,
  ).getContent();
  html.materializeJs = HtmlService.createHtmlOutput(
    `
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>`,
  ).getContent();
  html.dOMContentLoaded = HtmlService.createHtmlOutput(
    `
    <script>
      const elements = {};
      document.addEventListener("DOMContentLoaded", 
function() 
  {var elems = document.querySelectorAll("select");
  var instances = M.FormSelect.init(elems);});
  </script>`,
  ).getContent();
  html.loadData = HtmlService.createHtmlOutput(
    `
    <script>
      document.addEventListener("DOMContentLoaded", loadData);
function loadData() {tabulatorLoad();}
    </script>`,
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
                    editor:"input"},],});`,
  ).getContent();
  html.rowClicked = HtmlService.createHtmlOutput(
    `
    //table.on("rowClick", 
function(e, row){//alert("Row " + row.getData().id + " Clicked!!!!");//});`,
  ).getContent();
  html.cellEdited = HtmlService.createHtmlOutput(
    `
    table.on("cellEdited", 
function(cell){//cell - cell component
              const field = cell._cell.column.field;
              const id = cell._cell.row.data.id;
              const val = cell._cell.value})`,
  ).getContent();
  html.searchData = HtmlService.createHtmlOutput(
    `
function searchData(e) 
  {table.setFilter("title","like", e.target.value);
  google.script.run
    .withSuccessHandler(egdarData)
    .companyName("https://www.sec.gov/files/company_tickers.json", "", 1, 1, [["cik_str"],["ticker"],["title"]])}`,
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

var oldSEC = function (rndTitle) {
  var urlCompany = "<?= getScriptUrl() ?>?func=surveyPlayer&args=";
  var urlTicker = "https://www.nasdaq.com/search?q=";
  var urlCik = "https://www.sec.gov/edgar/browse/?CIK=";
  const uniqueCo = sheetCalc();
  // const titleKings = needCapital(rndTitle)
  const uniqueCoArray = covArrays(uniqueCo);
  const matches = [];
  const alTheCo = uniqueCoArray.filter((ac) => {
    if (
      JSON.stringify(ac[0]["title"])
        .toLowerCase()
        .includes([rndTitle].toString().toLowerCase())
    )
      matches.push(ac);
  });
  // const titleMatches = [matches.toString().substring(titleKings)];
  // console.log(Utilities.jsonStringify([titleMatches]))
  var coTable = matches
    .map((r) => {
      return `<tr><td><a class="waves-effect scale-transition scale-out scale-in waves-light" href="${urlTicker}${encodeURIComponent(r[0]["ticker"])}&page=1&sort_by=relevence&langcode=en" target="_blank">${r[0]["ticker"]}</a></td><td><a class="waves-effect scale-transition scale-out scale-in waves-light" href="${urlCik}${encodeURIComponent(r[0]["cik"])}&owner=exclude" target="_blank">${r[0]["cik"]}</a></td><td><a class="waves-effect scale-transition scale-out scale-in waves-light" href="${urlCompany}${encodeURIComponent(r[0]["title"])}" target="_blank">${r[0]["title"]}</a></td></tr>`;
    })
    .toString()
    .replace(/,/g, "");
  const result = JSON.stringify(coTable);
  // const randomCoKey = Math.floor(Math.random() * (Math.floor(uniqueCoArray.length)))// Math.floor(Math.random());
  // const uniqueCoKey = [uniqueCo].entries().next().value;
  // const randomCo = uniqueCoKey[1][randomCoKey];
  const html = HtmlService.createTemplate(
    `<body>
      <div class="row">
      <div class="col s12 card-panel amber">
      <div class="container">
      <div class="col s12 receipt red">
      <table class="striped centered highlight amber responsive-table z-depth-5" style="width:100%">
        <thead>
          <tr style="justify-content: space-around;overflow: auto;border-radius: 50%;max-width: 100%;height: auto;display: block;margin: auto;">
            <th class="waves-effect scale-transition scale-out scale-in waves-light btn">Ticker</th>
            <th class="waves-effect scale-transition scale-out scale-in waves-light btn">Company Identification Key</th>
            <th class="waves-effect scale-transition scale-out scale-in waves-light btn">Company Name</th>
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
        url + "?func=oldSEC" + "&args=" + encodeURIComponent(uname);
      linkFollow.id = "linkFOLLOW";
      linkFollow.target = "_self";
      document.body.appendChild(linkFollow);
      document.getElementById("linkFOLLOW").click();
      document.getElementById("username").value = "";
      document.getElementById("linkFOLLOW").remove();
    })();
  }; //Global object closed
  return html.evaluate().getContent();
};

var opt = function (searchString) {
  if (typeof searchString === "undefined") {
    var searchString = "company user";
  }
  var url = "<?= getScriptUrl() ?>?func=";
  var optUrl = "<?= getScriptUrl() ?>?func=dtlsPict&args=";
  var tmp = [];
  let jsonData = coUtility(searchString)[0];
  var arrData = covArrays(jsonData.playlistArr);
  while (arrData.length === 0) {
    arrData = covArrays(jsonData.playlistArr);
  }
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
      var logAC = ac[0]; //["title"]
      if (
        JSON.stringify(logAC)
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
                        .split(" ").length,
                    ),
                )
              ],
          )
      )
        matches.push(ac);
    });
  jo.user = dataArray;
  var coTable = arrData
    .map((r) => {
      return `<tr><td><a href="https://www.sec.gov/edgar/browse/?CIK=${jsonData.rndCik}&owner=exclude" target="_blank">${jsonData.rndCik}</a></td><td><a class="waves-effect waves-light btn" href="${optUrl + encodeURIComponent(jsonData.rndTicker)}" target="_blank">${jsonData.rndTicker}</a></td><td><a class="waves-effect waves-light btn" href="${optUrl + encodeURIComponent(jsonData.rndTitle)}" target="_blank">${jsonData.rndTitle}</a></td></tr>`;
    })
    .toString()
    .replace(/,/g, "");
  var result = JSON.stringify(coTable);
  return HtmlService.createTemplate(
    contentApp(
      `
    <html id="opt">
      <head>
        <base target="_top">
        <meta charset="utf-8">
        <meta name="seoCapital" content="Boilerplate SEO Capital">
        <meta name=viewport content="width=device-width, initial-scale=1">
        <link href="https://fonts.googleapis.com/css?family=Acme" rel="stylesheet">
          <style>

              body {

                flex-grow: 1;
                color:blue;
                text-decoration:bold;
                flex-flow: row wrap;
                grid-column: 1;
                grid-row: 1;
                text-align: center;
                align-content: flex-start;
                overflow: auto;
              }
          </style>
      </head>
      <body>

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
function(){document.getElementById("test").innerHTML = <?!= tableContents ?>})
  </script>
  
      <input type="hidden" value="<?= getUrl(ScriptApp) ?>" id="breakUrl" />
      </body>
    </html>
        `,
      {
        tableContents: result,
      },
    ),
  )
    .evaluate()
    .getContent();
};

var randomTickerXpath = function (rnum) {
  const rnumber = rnum;
  return rnumber;
};

var randomUtility = function (e, arrD, time) {
  // var utilStr
  // = skyNeed(namedVar, time);var utilSubst
  // = randomSubstance(0,4,namedVar,time)
  var rndObj = needUtility([e].join(" "), arrD, time)[0];
  console.log(
    "randomUtility: \nvar " + rndObj + " = needUtility(" + [e].join(" "),
    arrD,
    time + ")[0]",
  );
  if (rndObj) {
    return {
      playlist: rndObj.playlistArr,
      cik: rndObj.rndCik,
      ticker: rndObj.rndTicker,
      title: rndObj.rndTitle,
      secData: rndObj.secUrl,
      youtubeID: rndObj.videoItem,
      youtubVideo: rndObj.videoItemUrl,
    };
  } else {
    return;
  }
};

function videoSEC() {
  const ws = ssGetSheetBySpreadsheetUrl(
    "https://docs.google.com/spreadsheets/d/1-vNcN0vCLcXgMY9uwcKukUgv_4njggRZ6fqoZs-hBFE/edit#gid=138098962",
    "sec",
  );
  // const wsData = sliceValues(ws.getDataRange().getValues(),1)
  const vidOptionsCik = ws
    .getRange(1, 1, ws.getRange("A2").getDataRegion().getLastRow(), 1)
    .getValues();
  const vidOptionsTicker = ws
    .getRange(2, 2, ws.getRange("B2").getDataRegion().getLastRow(), 1)
    .getValues();
  const vidOptionsTitle = ws
    .getRange(3, 3, ws.getRange("C2").getDataRegion().getLastRow(), 1)
    .getValues();
  const vidOptions = {
    muteHttpExceptions: true,
  };
  // const vidSheetsJson = mapValues(wsData,0)
  // const vidJson = UrlFetchApp.fetch("https://www.sec.gov/Archives/edgar/cik-lookup-data.txt",vidOptions).getContentText();
  // const uniqueCo = JSON.parse([]);
  const uniqueCoArray = sliceValues(ws.getDataRange().getValues(), 1); //covArrays(uniqueCo);
  const randomCoKey = Math.floor(
    Math.random() * Math.floor(uniqueCoArray.length),
  ); // Math.floor(Math.random());
  var sectionCo = [uniqueCoArray[randomCoKey][2]].toString().split(" ");
  var itemId =
    sectionCo[Math.floor(Math.random() * Math.floor(sectionCo.length))];
  console.log(itemId);
  var vidDetail = coUtility(itemId)[0];
  console.log(vidDetail);
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
            <script>
              document.getElementById('username').addEventListener('change', <?!= topScript ?>)
            </script>
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

var yahooSort = function (ticker, time) {
  // var ticker = "AAPL"
  var data = [
    urlDataSource(
      "https://query2.finance.yahoo.com/v10/finance/quoteSummary/" +
        ticker +
        "?modules=assetProfile%2CsummaryProfile%2CsummaryDetail%2CesgScores%2Cprice%2CincomeStatementHistory%2CincomeStatementHistoryQuarterly%2CbalanceSheetHistory%2CbalanceSheetHistoryQuarterly%2CcashflowStatementHistory%2CcashflowStatementHistoryQuarterly%2CdefaultKeyStatistics%2CfinancialData%2CcalendarEvents%2CsecFilings%2CrecommendationTrend%2CupgradeDowngradeHistory%2CinstitutionOwnership%2CfundOwnership%2CmajorDirectHolders%2CmajorHoldersBreakdown%2CinsiderTransactions%2CinsiderHolders%2CnetSharePurchaseActivity%2Cearnings%2CearningsHistory%2CearningsTrend%2CindustryTrend%2CindexTrend%2CsectorTrend",
      { muteHttpExceptions: true },
    ),
  ];
  try {
    var uniqueKey = JSON.parse(data);
    var priceArray = [];
    var timeArray = [];
    var currencyArray = [];
    var currencySymArray = [];
    for (var key in uniqueKey) {
      var elaspeTime = new Date() - start;
      // console.log("that function: " + arguments.callee.caller.name + "\nthis function: " + arguments.callee.name + "\nkey: " +  uniqueKey[key]["title"] + "\nelaspeTime: " + elaspeTime)
      priceArray.push(
        uniqueKey[key]["result"][0]["price"]["regularMarketPrice"],
      );
      timeArray.push(uniqueKey[key]["result"][0]["price"]["regularMarketTime"]);
      currencyArray.push(uniqueKey[key]["result"][0]["price"]["currency"]);
      currencySymArray.push(
        uniqueKey[key]["result"][0]["price"]["currencySymbol"],
      );
    }
    {
    }
    var stockPrice = [priceArray[0]["fmt"]];
    var priceTime = [timeArray[0]];
    var priceCurrency = [currencyArray[0]];
    var priceCurrencySymbol = [currencySymArray[0]];
    return {
      price: stockPrice,
      time: priceTime,
      currency: priceCurrency,
      currencySymbol: priceCurrencySymbol,
    };
  } catch (error) {
    console.error("Syntax Error: ", error.toString());
  }
  var arrData = [
    "e",
    "t",
    "a",
    "o",
    "n",
    "r",
    "i",
    "s",
    "h",
    "d",
    "l",
    "f",
    "c",
    "m",
    "u",
    "g",
    "y",
    "p",
    "w",
    "b",
    "v",
    "k",
    "x",
    "j",
    "q",
    "z",
  ];
  var freqArray = [];
  var i = 0;
  var l = arrData.length;
  for (i, l; i < l; i++) {
    var sorArray = titleArray.sort((a, b) => {
      // console.log("that function: " + arguments.callee.caller.name + "\nthis function: " + arguments.callee.name + "\nsort: " +  a + "\nelaspeTime: " + elaspeTime)
      if (a[0].toLowerCase() === arrData[i]) {
        freqArray.push(a);
        return a - b;
      }
    });
  }
  return freqArray;
};
