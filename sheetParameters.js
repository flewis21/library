var activeSsId = function () {
  var ss = spreadSheet();
  if (ss !== null) {
    var id = ss.getId();
    return id;
  } else {
    try {
      return id;
    } catch (error) {
      return error.stack;
    }
  }
};

function bingSWF(searchString, time) {
  //
  if (typeof searchString === "undefined") {
    var searchString = "oa";
  }
  var searcher =
    "https://www.bing.com/search?q=filetype%3A(ppt swf pptx pdf)+AND+*+" +
    encodeURIComponent(searchString) +
    "&PC=U316&top=50&skip=0&FORM=CHROMN";
  var searcherOptions = {
    muteHttpExceptions: true,
  };
  console.log(
    "bingSWF: \nDeclaring data = [" +
      UrlFetchApp.fetch(searcher, searcherOptions).getContentText() +
      "]",
  );
  var data = [UrlFetchApp.fetch(searcher, searcherOptions).getContentText()];
  console.log(
    "bingSWF: [UrlFetchApp.fetch(" + searcher,
    searcherOptions + ").getContentText()]\n",
    typeof data,
  );
  // console.log("bingSWF: \n")
  console.log(
    "bingSWF: \nDeclaring resDATA = data.slice(" +
      data.indexOf("SERP") +
      ").join(" +
      "" +
      ")",
  );
  var resDATA = data.slice(data.indexOf("SERP")).join("");
  console.log(typeof resDATA);
  console.log("bingSWF: \nDeclaring dataSplit = resDATA.split(" + "SERP" + ")");
  var dataSplit = resDATA.split("SERP");
  console.log(
    "bingSWF: \nDeclaring httpIndex = dataSplit.slice(" +
      dataSplit.indexOf("https") +
      ").join(" +
      "" +
      ")",
  );
  var httpIndex = dataSplit.slice(dataSplit.indexOf("https")).join("");
  console.log("bingSWF: \nDeclaring bill = httpIndex.split(" + "https" + ")");
  var bill = httpIndex.split("https");
  console.log(
    "bingSWF: \nDeclaring playBill = [" +
      bill +
      "].join(" +
      "" +
      ").split(" +
      " " +
      ")",
  );
  var playBill = [bill].join("").split(" ");
  const plate = playBill.map((silver) => {
    console.log(
      "bingSWF: \n[silver].slice(" + 0,
      silver.indexOf(searchString) + ")",
    );
    return [silver].slice(0, silver.indexOf(searchString));
  });
  var setPlate = plate.filter((plated) => {
    if (typeof plated === "undefined" || plated.length == 0) {
      return;
    } else {
      return plated;
    }
  });
  console.log(setPlate);
  console.log(
    "bingSWF: \nDeclaring table = [" + dataSplit + "].join(",
    ").split(",
    ")",
  );
  const table = [dataSplit].join(",").split(",");
  const pong = setPlate.map((ping) => {
    console.log("bingSWF: \nping[0].substring(" + 0, ping[0].length + ")");
    return ping[0].substring(0, ping[0].length);
  });
  return {
    myPong: pong.toString().split(","),
    myPlay: table,
  };
}

function bingNeed(searchString, time) {
  if (typeof searchString !== "undefined") {
    // const videoSearch = [urlDataSource(`https://www.bing.com/search?q=filetype%3A(ppt swf pptx pdf)+AND+*+${encodeURIComponent(searchString)}&PC=U316&top=50&skip=0&FORM=CHROMN`, null, {muteHttpExceptions:true})];
    const search = `https://www.bing.com/search?q=${encodeURIComponent(searchString)}%20intitle%3A - Bing+AND+*&PC=U316&top=50&skip=0&FORM=CHROMN`;
    const data = [urlDataSource(search, { muteHttpExceptions: true }, time)];
    const table = data.slice(data.indexOf("SERP")).toString().split("SERP");
    const pong = table.map((ping) => {
      return ping.substring(0);
    });
    return {
      myPong: pong.toString().split(","),
    };
  }
}

function cabDriver(e) {
  var res = e || testlt();
  var agendaCal = (function (request) {
    var events = CalendarApp.getEvents(
      new Date(Number([request][0]) * 1000),
      new Date(Number([request][1]) * 1000),
    );
    var result = { available: events.length == 0 };
    return ContentService.createTextOutput(result).setMimeType(
      ContentService.MimeType.JSON,
    );
  })();
  var xkcdRSS = (function (e) {
    var feed = UrlFetchApp.fetch("http://xkcd.com/rss.xml").getContentText();
    feed = feed.replace(
      /(&lt;img.*?alt="(.*?)".*?&gt;)/g,
      "$1" + new Array(10).join("&lt;br /&gt;") + "$2",
    );
    return ContentService.createTextOutput(feed).setMimeType(
      ContentService.MimeType.RSS,
    );
  })();
  console.log("xkcdRSS: \nxkcdRSS.getContent()\n", xkcdRSS.getContent());
  var coolStatus = (function (e) {
    const response = { status: "cool!" };
    return ContentService.createTextOutput(JSON.stringify(response))
      .setMimeType(ContentService.MimeType.JSON)
      .getContent();
  })();
  console.log("xkcdRSS: \ncoolStatus\n", JSON.stringify([coolStatus]));
  var data = res.split(" ");
  var dataRandomLength = Math.floor(Math.random() * Math.floor(data.length));
  var headers = data.map((r) => {
    return covArrays([[r][0]])[0];
  })[dataRandomLength];
  console.log("xkcdRSS: \nheaders\n", headers);
  var headersRandomLength = Math.floor(
    Math.random() * Math.floor(headers.length),
  );
  var dataBody = data.map((r) => {
    return covArrays([[r][0]])[0];
  });
  console.log("xkcdRSS: \ndataBody\n", dataBody);
  var dataBodyRandomLength = Math.floor(
    Math.random() * Math.floor(dataBody.length),
  );
  var randomSsName = headers[headersRandomLength];
  var randomSheetName = headers[headersRandomLength];
  var sSheet = spreadSheetCreate(
    randomSsName,
    randomSheetName,
    headers,
    dataBody,
  );
  var ssUrl = driveUrls(randomSsName);
  var ws = ssGetSheetBySpreadsheetUrl(ssUrl, randomSheetName);
  var wsData = ws.getDataRange().getValues();
  var apiPost = (function (e) {
    const body = e || "";
    const bodyJS = JSON.parse(body);
    ws.appendRow([bodyJS]);
  })();
  console.log("xkcdRSS: \napiPost\n", apiPost);
  return HtmlService.createTemplate(
    `
    <div id="dev">
    </div>
    <script>
      document.getElementById("dev").textContent = ${JSON.stringify(agendaCal.getContent())}
    </script>`,
  ).getRawContent();
}

function classifiedCapital(searchString, time) {
  const searchStr = `https://www.bing.com/search?q=${encodeURIComponent(searchString)}%20+AND+*&PC=U316&top=50&skip=0&FORM=CHROMN`;
  const videoSearch = [
    urlDataSource(searchStr, { muteHttpExceptions: true }, time),
  ];
  const table = videoSearch
    .slice(videoSearch.indexOf("SERP"))
    .toString()
    .split("SERP");
  const pong = table.map((ping) => {
    return ping.substring(0);
  });
  return {
    myPong: pong.toString().split(","),
  };
}

function classifiedSheet(searchString, time) {
  var rndSearch = `https://www.bing.com/search?q=${encodeURIComponent(searchString)}%20intitle%3A - twitter+AND+*&PC=U316&top=50&skip=0&FORM=CHROMN`;
  var headers = ["keywords"];
  var data = [urlDataSource(rndSearch, { muteHttpExceptions: true }, time)];
  const seoSearched = [];
  const seoValues = [];
  const uniqueSeo = [];
  [data].map((seoData) => {
    const idArray = seoData.slice(seoData.indexOf(` `)).toString().split(` `);
    for (var i = 1; i < idArray.length; i++) {
      const playId = idArray[i].toString().substring(0, 11);
      seoSearched.push([playId]);
      seoValues.push(playId.valueOf());
    }
    // const vidV = [vidsSearched].map(function (v){console.log(v[0].valueOf());
    // return v[0].valueOf();});
    // console.log(vidV)
    // console.log(vidsSearched.map((m) => {const mObject = Utilities.jsonStringify(m)
    // console.log(mObject.indexOf(","))}))
    return seoSearched.forEach(function (seoBing) {
      const seoObject = seoBing;
      // console.log(typeof vidObject)
      if (
        seoObject[0].indexOf("=") === -1 &&
        seoObject[0].indexOf("query") === -1 &&
        seoObject[0].indexOf(";") === -1 &&
        seoObject[0].indexOf("ajax") === -1 &&
        seoObject[0].indexOf("whole") === -1 &&
        seoObject[0].indexOf("inner") === -1 &&
        seoObject[0].indexOf("strong") === -1 &&
        seoObject[0].indexOf("ing") === -1 &&
        seoObject[0].indexOf("so") === -1 &&
        seoObject[0].indexOf("1'") === -1 &&
        seoObject[0].indexOf("2'") === -1 &&
        seoObject[0].indexOf("3'") === -1 &&
        seoObject[0].indexOf("4'") === -1 &&
        seoObject[0].indexOf("5'") === -1 &&
        seoObject[0].indexOf("2s") === -1 &&
        seoObject[0].indexOf("6'") === -1 &&
        seoObject[0].indexOf("7'") === -1 &&
        seoObject[0].indexOf("8'") === -1 &&
        seoObject[0].indexOf("9'") === -1 &&
        seoObject[0].indexOf('1"') === -1 &&
        seoObject[0].indexOf('2"') === -1 &&
        seoObject[0].indexOf('3"') === -1 &&
        seoObject[0].indexOf('4"') === -1 &&
        seoObject[0].indexOf('5"') === -1 &&
        seoObject[0].indexOf('6"') === -1 &&
        seoObject[0].indexOf('7"') === -1 &&
        seoObject[0].indexOf('8"') === -1 &&
        seoObject[0].indexOf('9"') === -1 &&
        seoObject[0].indexOf("h1") === -1 &&
        seoObject[0].indexOf("h2") === -1 &&
        seoObject[0].indexOf("h3") === -1 &&
        seoObject[0].indexOf("h4") === -1 &&
        seoObject[0].indexOf("h5") === -1 &&
        seoObject[0].indexOf("h6") === -1 &&
        seoObject[0].indexOf("So") === -1 &&
        seoObject[0].indexOf("go") === -1 &&
        seoObject[0].indexOf("Uses") === -1 &&
        seoObject[0].indexOf("b") === -1 &&
        seoObject[0].indexOf("v") === -1 &&
        seoObject[0].indexOf("code") === -1 &&
        seoObject[0].indexOf("vs") === -1 &&
        seoObject[0].indexOf("keys") === -1 &&
        seoObject[0].indexOf("use") === -1 &&
        seoObject[0].indexOf("ten") === -1 &&
        seoObject[0].indexOf("out") === -1 &&
        seoObject[0].indexOf("new") === -1 &&
        seoObject[0].indexOf("of") === -1 &&
        seoObject[0].indexOf("The") === -1 &&
        seoObject[0].indexOf("mode") === -1 &&
        seoObject[0].indexOf("used") === -1 &&
        seoObject[0].indexOf("the") === -1 &&
        seoObject[0].indexOf("cite") === -1 &&
        seoObject[0].indexOf("}") === -1 &&
        seoObject[0].indexOf("{") === -1 &&
        seoObject[0].indexOf("px") === -1 &&
        seoObject[0].indexOf("transparent") === -1 &&
        seoObject[0].indexOf("Segoe") === -1 &&
        seoObject[0].indexOf("#") === -1 &&
        seoObject[0].indexOf(".") === -1 &&
        seoObject[0].indexOf(">") === -1 &&
        seoObject[0].indexOf("-") === -1 &&
        seoObject[0].indexOf("<") === -1 &&
        seoObject[0].indexOf("_") === -1 &&
        seoObject[0].indexOf("...") === -1 &&
        seoObject[0].indexOf('"') === -1 &&
        seoObject[0].indexOf("or") === -1 &&
        seoObject[0].indexOf("and") === -1 &&
        seoObject[0].indexOf("(") === -1 &&
        seoObject[0].indexOf("tr") === -1 &&
        seoObject[0].indexOf("td") === -1 &&
        seoObject[0].indexOf("th") === -1 &&
        seoObject[0].indexOf(")") === -1 &&
        seoObject[0].indexOf("`") === -1 &&
        seoObject[0].indexOf("!") === -1 &&
        seoObject[0].indexOf("?") === -1 &&
        seoObject[0].indexOf(",") === -1 &&
        seoObject[0].indexOf("/") === -1 &&
        seoObject[0].indexOf("\\") === -1 &&
        seoObject[0].indexOf(":") === -1 &&
        seoObject[0].indexOf("li") === -1 &&
        seoObject[0].indexOf("p") === -1 &&
        seoObject[0].indexOf("if") === -1 &&
        seoObject[0].indexOf("a") === -1 &&
        seoObject[0].indexOf("but") === -1 &&
        seoObject[0].indexOf("r") === -1 &&
        seoObject[0].indexOf("screen") === -1 &&
        seoObject[0].indexOf("in") === -1 &&
        seoObject[0].indexOf("0") === -1 &&
        seoObject[0].indexOf("solid") === -1 &&
        seoObject[0].indexOf("n") === -1 &&
        seoObject[0].indexOf("width") === -1 &&
        seoObject[0].indexOf(" ") === -1 &&
        seoObject[0].indexOf("you") === -1 &&
        seoObject[0].indexOf("height") === -1 &&
        seoObject[0].indexOf("t") === -1 &&
        seoObject[0].indexOf("]") === -1 &&
        seoObject[0].indexOf("[") === -1 &&
        seoObject[0].indexOf("by") === -1 &&
        seoObject[0].indexOf("A") === -1 &&
        seoObject[0].indexOf("who") === -1 &&
        seoObject[0].indexOf("what") === -1 &&
        seoObject[0].indexOf("when") === -1 &&
        seoObject[0].indexOf("where") === -1 &&
        seoObject[0].indexOf("why") === -1 &&
        seoObject[0].indexOf("how") === -1 &&
        seoObject[0].indexOf("You") === -1 &&
        seoObject[0].indexOf("Do") === -1 &&
        seoObject[0].indexOf("do") === -1 &&
        seoObject[0].indexOf("To") === -1 &&
        seoObject[0].indexOf("to") === -1 &&
        seoObject[0].indexOf("is") === -1 &&
        seoObject[0].indexOf("||") === -1 &&
        seoObject[0].indexOf("Be") === -1 &&
        seoObject[0].indexOf("be") === -1 &&
        seoObject[0].indexOf("myself") === -1 &&
        seoObject[0].indexOf("Myself") === -1 &&
        seoObject[0].indexOf("Me") === -1 &&
        seoObject[0].indexOf("Log") === -1 &&
        seoObject[0].indexOf("elem") === -1 &&
        seoObject[0].indexOf("Check") === -1 &&
        seoObject[0].indexOf("Mine") === -1 &&
        seoObject[0].indexOf("me") === -1 &&
        seoObject[0].indexOf("mine") === -1 &&
        seoObject[0].indexOf("TO") === -1 &&
        seoObject[0].indexOf("My") === -1 &&
        seoObject[0].indexOf("We") === -1 &&
        seoObject[0].indexOf("Of") === -1 &&
        seoObject[0].indexOf("svg") === -1 &&
        seoObject[0].indexOf("\\") === -1 &&
        seoObject[0].indexOf("I") === -1 &&
        seoObject[0].indexOf("Why") === -1 &&
        seoObject[0].indexOf("my") === -1 &&
        seoObject[0].indexOf("i") === -1 &&
        seoObject[0].indexOf("x") === -1 &&
        seoObject[0].indexOf("we") === -1 &&
        seoObject[0].indexOf("us") === -1 &&
        seoObject[0].indexOf("table") === -1 &&
        seoObject[0].indexOf("else") === -1 &&
        seoObject[0].indexOf("ul") === -1 &&
        seoObject[0].indexOf("web") === -1 &&
        seoObject[0].indexOf("ol") === -1 &&
        seoObject[0].indexOf("obj") === -1 &&
        seoObject[0].indexOf("+") === -1 &&
        seoObject[0].indexOf("|") === -1 &&
        seoObject[0].indexOf("get") === -1 &&
        seoObject[0].indexOf("&&") === -1 &&
        seoObject[0].indexOf(",") === -1
      ) {
        if ([seoBing].toString().length > 0) {
          uniqueSeo.push(seoBing);
        }
      }
    });
  });
  //  console.log(uniqueVid)
  const randomKey = Math.floor(Math.random() * Math.floor(uniqueSeo.length)); // Math.floor(Math.random());
  var randomSheetname = uniqueSeo[randomKey];
  var resData = uniqueSeo.slice(0);
  var reSearch = resData.toString().replace(/,/g, " ");
  var searchesCapital = classifiedCapital(reSearch);
  const html = HtmlService.createTemplate(
    `        
    <div id="seoData"></div>
    <div class="row">
    <div class="col s10 card-panel l12 m12 push-s1">
    <div class="z-depth-5 grey toolbar_icon toolbar_iconHover container">
    <div class="col s12 l12 m12">
    <input style="font-size:18pt;color:green" value="${reSearch}" class="timepicker flow-text menu-img z-depth-5 card-panel black scale-transition scale-out scale-in receipt btn-large" id="prefTime"  type="search" />
    </div></div></div></div>
    <script>
      <?!= dOMContentLoaded ?>
    </script>
    <script>document.addEventListener("DOMContentLoaded", function()
          {document.getElementById("seoData").innerHTML = ${JSON.stringify(searchesCapital)};})</script>
    <input type="hidden" value="<?= getUrl(ScriptApp) ?>" id="breakUrl" />
        `,
  );
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
          console.log(typeof product.split(" ") + " || || " + product.split(" ").map((r) => {return '"' + r + '"' }))
          var linkFollow = document.createElement("a");
          linkFollow.href = url + "?func=dtls" + "&args=" + encodeURIComponent(product);
          linkFollow.id = "linkFOLLOW";
          linkFollow.target = "_blank";
          document.body.appendChild(linkFollow);
          document.getElementById("linkFOLLOW").click()
          document.getElementById("prefTime").value = "";})()});
      var elems = document.getElementById("prefTime");
      var instances = M.FormSelect.init(elems, options);
      `,
  ).getContent();
  return html.evaluate().getContent();
}

var createSheetHeader = function (headers) {
  if (headers) {
    var headings = data[headers].map(function (val) {
      console.log(val);
      return val.toString().toLowerCase();
    });
    return headings;
  }
};

var idSpreadSheet = function (id) {
  var ssApp = SpreadsheetApp;
  if (id) {
    var ss = ssApp?.openById(id);
    return ss;
  }
};

var insertSheetSS = function (url, sheetName) {
  var ss = ssGetSheetBySpreadsheetUrl(url);
  if (!sheetName) {
    var sheetName = testlt().name;
  }
  ss.insertSheet(sheetName);
  // var sheet = ssGetSheetBySpreadsheetUrl(
  //   url,
  //   sheetName,
  // );
};

function jsonToSpreadsheet(data, time) {
  data
    ? data
    : (data = JSON.parse(
        convertToObjects([[testlt()]], ["name"], functionRegistry.time),
      )[0]);
  console.log(
    formatTime(functionRegistry.time) +
      "\n" +
      arguments.callee.name +
      "\ndata is !" +
      !data +
      ", = " +
      data +
      "\ntime is !" +
      !time +
      ", = " +
      time,
  );
  var arrayData = covArrays(data);
  var colArray = [];
  const keys = Object.keys(data);
  keys.forEach(function (key) {
    console.log(
      formatTime(functionRegistry.time) +
        "\n" +
        arguments.callee.name +
        "\nkey is !" +
        !key +
        ", = " +
        key,
    );
    colArray.push(key);
  });
  var file = arguments.callee.caller.name;
  var sheetName = colArray[0];
  var playSheet = spreadSheetCreate(
    file,
    sheetName,
    colArray,
    arrayData[0],
    functionRegistry.time,
  ).myFileX;
  return playSheet;
}

// Get form data from the request

// for (var key in formData) {
//     colArray.push([])
// for (var val in formData[key]) {
//     colArray[key].push(formData[key][val])}
//     }
//     return dtlsPro(colArray)
// var postSheet = sheetsMaker(name,"Sheets",start)
// var postId = postSheet.getId()
// var postUrl = postSheet.getUrl()
// return SpreadsheetApp.openById(postId).getUrl()
// var postPub = FormApp.openById(postSheet.getId()).getPublishedUrl()
// return console.log(postPub)

function jsonXCalc(searchString, time) {
  searchString
    ? searchString
    : (searchString = objectOfS(
        ["parameter"],
        [[["func", testlt()]]],
        functionRegistry.time,
      ));
  if (typeof searchString === "object") {
    searchString = searchString.parameter["func"];
  }
  console.log(
    formatTime(functionRegistry.time) +
      "\n" +
      arguments.callee.name +
      "\ndata is !" +
      !searchString +
      ", = " +
      searchString +
      "\ntime is !" +
      !time +
      ", = " +
      time,
  );
  var isProduct = driveManager([searchString].join("").toLowerCase());
  console.log(
    formatTime(functionRegistry.time) +
      "\n" +
      arguments.callee.name +
      "\nisProduct is !" +
      !isProduct +
      ", = " +
      typeof isProduct,
  );
  if (typeof isProduct === "string") {
    var playSheet = SpreadsheetApp.openByUrl(isProduct).getUrl();
    return playSheet;
  } else {
    var contentData = dtlsSomeFunction(searchString, time).playList;
    var formData = JSON.parse(
      convertToObjects(
        [[[contentData], [arguments.callee.caller.name], [searchString]]],
        ["content", "function", "title"],
        functionRegistry.time,
      ),
    );
    var playSheet = jsonToSpreadsheet(formData);
  }
  var secSheet = ssGetSheetBySpreadsheetUrl(playSheet, searchString);
  var secArrays = secSheet.getDataRange().getValues().slice(1);
  var arrVals = secArrays.map((val) => {
    return { content: val[0], function: val[1], title: val[2] };
  });
  var rndArrVals = [];
  while (rndArrVals.length !== arrVals.length) {
    rndArrVals.push(
      arrVals[Math.floor(Math.random() * Math.floor(arrVals.length)).valueOf()],
    );
  }
  return rndArrVals;
}

// var playL = ssData(playSheet, searchString)
// return console.log(rndTitleVested)
// return [Math.random() * (uniqueNum)].join("").split(".")

function jsonXSpreadsheet(rndTitle, time) {
  rndTitle
    ? rndTitle
    : (rndTitle = objectOfS(
        ["parameter"],
        [[["func", testlt()]]],
        functionRegistry.time,
      ));
  if (typeof rndTitle === "object") {
    rndTitle = rndTitle.parameter["func"];
  }
  console.log(
    formatTime(functionRegistry.time) +
      "\n" +
      arguments.callee.name +
      "\nrndTitle is !" +
      !rndTitle +
      ", = " +
      rndTitle +
      "\ntime is !" +
      !time +
      ", = " +
      time,
  );
  var urlTitle = "<?= getScriptUrl() ?>?func=dtlsResearchForm&args=";
  var urlFunction = "<?= getScriptUrl() ?>?func=dtlsBridgeForm&args=";
  var urlContent = "http://www.youtube.com/watch?v=";
  const uniqueCo = jsonXCalc(rndTitle, functionRegistry.time);
  const uniqueCoArray = covArrays(uniqueCo);
  const matches = [];
  const alTheCo = uniqueCoArray.filter((ac) => {
    if (
      JSON.stringify(ac[0]["title"])
        .toLowerCase()
        .includes([rndTitle].toString().toLowerCase())
    );
    matches.push(ac);
  });
  var coTable = matches
    .map((r) => {
      return `<tr><td><a class="waves-effect waves-light btn" href="${urlFunction}${encodeURIComponent(r[0]["function"])}&page=1&sort_by=relevence&langcode=en" target="_blank">${r[0]["ticker"]}</a></td><td><a class="waves-effect waves-light btn" href="${urlContent}${encodeURIComponent(r[0]["content"])}&owner=exclude" target="_blank">${r[0]["cik"]}</a></td><td><a class="waves-effect waves-light btn" href="${urlTitle}${encodeURIComponent(r[0]["title"])}" target="_top">${r[0]["title"]}</a></td></tr>`;
    })
    .toString()
    .replace(/,/g, "");
  const result = JSON.stringify(coTable);
  const html = HtmlService.createTemplate(
    `<body><div class="row"><div class="col s12 card-panel amber"><div class="container"><div class="col s12 receipt red"><table class="striped centered highlight amber responsive-table z-depth-5" style="width:100%"><thead><tr style="justify-content: space-around;overflow: auto;border-radius: 50%;max-width: 100%;height: auto;display: block;margin: auto;"><th>Ticker</th><th>Company Identification Key</th><th>Company Name</th></tr></thead><tbody id="epaData"></tbody></table></div></div></div></div><div class="row"><div class="col s10 card-panel amber push-s1 push-m1 push-l1"><div class="container"><div class="col s12 receipt red"><span><input placeholder="Your Search Here Ex. apple,orange..." class="menu-img z-depth-5 card-panel black scale-transition scale-out scale-in receipt btn-large" id="username" type="search" /></span></div></div></div></div></body><script>document.getElementById('username').addEventListener('change', <?!= topScript ?>)</script><script>document.addEventListener("DOMContentLoaded", function() {document.getElementById("epaData").innerHTML = ${result};})</script>`,
  );
  html.topScript = function () {
    let timeout = null;
    (() => {
      if (typeof url === "undefined") {
        var urlData = document.getElementById("url").value;
        var url = urlData.toString();
      }
      var uname = document.getElementById("username").value;
      var linkFollow = document.createElement("a");
      linkFollow.href =
        url + "?func=jsonXSpreadsheet" + "&args=" + encodeURIComponent(uname);
      linkFollow.id = "linkFOLLOW";
      linkFollow.target = "_self";
      document.body.appendChild(linkFollow);
      document.getElementById("linkFOLLOW").click();
      document.getElementById("username").value = "";
      document.getElementById("linkFOLLOW").remove();
    })();
  };
  return html.evaluate().getContent();
}

// const titleKings = needCapital(rndTitle)
// const titleMatches = [matches.toString().substring(titleKings)];
// console.log(Utilities.jsonStringify([titleMatches]))
// const randomCoKey = Math.floor(Math.random() * (Math.floor(uniqueCoArray.length)))// Math.floor(Math.random());
// const uniqueCoKey = [uniqueCo].entries().next().value;
// const randomCo = uniqueCoKey[1][randomCoKey];
//console.log(document.getElementById("test").innerHTML)
// Init a timeout variable to be used below
// Clear the timeout if it has already been set.
// This will prevent the previous task from executing
// if it has been less than <MILLISECONDS>
// clearTimeout(timeout);
// Make a new timeout set to go off in 1000ms (1 second)
// timeout = setTimeout
// (function  ()
// {console.log('Input Value:', textInput.value);}, 5000)();
//Global object closed

function lookupDomain(searchTerm) {
  // var ss = SpreadsheetApp.getActiveSpreadsheet();
  // var sheet = ss.getSheetByName("DomainListings");
  var sheet = ssGetSheetBySpreadsheetUrl(
    "https://docs.google.com/spreadsheets/d/1-vNcN0vCLcXgMY9uwcKukUgv_4njggRZ6fqoZs-hBFE/edit#gid=138098962",
    "DomainListings",
  );
  var data = sheet.getDataRange().getValues(); // Get all data (optimize for large datasets later)
  var results = [];
  for (var i = 1; i < data.length; i++) {
    // Skip header row
    if (data[i][0].toLowerCase().includes(searchTerm.toLowerCase())) {
      // Simple search
      results.push({
        domain: data[i][0],
        price: data[i][1],
        email: data[i][2],
      });
    }
  }
  return results;
}

function mapValues(data, index) {
  console.log(
    formatTime(functionRegistry.time) +
      "\n" +
      arguments.callee.name +
      "\ndata is !" +
      !data +
      ", = " +
      data[0] +
      "...\nindex is !" +
      !index +
      ", = " +
      index,
  );
  if (data) {
    data = data.map(function (e) {
      return e[index].valueOf();
    });
    return data;
  }
}

function needBing(searchString, time) {
  // var searchString = "Just married"
  if (typeof searchString !== "undefined") {
    const search = `http://www.bing.com/search?q=${encodeURIComponent(searchString)}%20intitle%3A - Search - Bing+AND+*&PC=U316&top=50&skip=0&FORM=CHROMN`;
    const data = [urlDataSource(search, { muteHttpExceptions: true }, time)];
    var resDATA = data.indexOf("SERP");
    var dataSplit = data.slice(resDATA).toString().split("SERP");
    var httpIndex = [dataSplit].join("").indexOf("https");
    var bill = [dataSplit].join("").split("https");
    var playBill = [bill].join("").split(" ");
    const table = [];
    data.map((point) => {
      var resSERP = point?.indexOf("SERP");
      var serpSplit = point.slice(resSERP).toString().split("SERP");
      table.push(serpSplit);
      // var resSrc2 = point.indexOf("src2=")
      // var srcSplit = point.slice(resSrc2).toString().split("src2=")
      // table.push(srcSplit)
    });
    var pong = [];
    var i = 0;
    var l = table.length;
    for (i, l; i < l; i++) {
      var tableTennis = table[i].map((ping) => {
        if ([ping][i]) {
          var ball = [ping].join("").indexOf("https");
          var tennisBall = [ball].join("").split(" ");

          if (ball > -1) {
            return ping.substring(ball);
          }
        }
      });
      pong.push(tableTennis);
    }
    return {
      myPing: pong.toString().split(","),
      myPlay: playBill,
    };
  }
}

function needPong(searchString) {
  var rndSearch = `http://www.bing.com/search?q=${encodeURIComponent(searchString ? searchString : "")}%20intitle%3A%20-%20YouTube+AND+*&PC=U316&top=50&skip=0&FORM=CHROMN`;
  var data = urlDataSource(rndSearch, searchString);
  var txt = seoBites(searchString, seoFactor(data).split(","));
  console.log(txt.length);
  return {
    myTxt: JSON.stringify(txt),
  };
}

function pastSeo(namedVar, time) {
  var seoPlaylist = seoPastTime([namedVar].join(""), time).playList;
  var form = formMaker([namedVar].join("").toUpperCase(), time);
  if (typeof form === "object") {
    fileManager([namedVar].join("").toUpperCase(), "Forms", time);
    seoPlaylist.map((d) => {
      while (d) {
        var elapsedTime = functionRegistry.time;
        var timeToExecute = functionRegistry.timeLeftToExecute;
        form.addPageBreakItem().setTitle([namedVar].join(""));
        form
          .addSectionHeaderItem()
          .setTitle("https://youtube.com/watch?v=" + d);
        form
          .addVideoItem()
          .setAlignment(FormApp.Alignment.CENTER)
          .setWidth(612)
          .setVideoUrl("https://youtube.com/watch?v=" + d);
        if (
          timeToExecute <= 6 * 60 * 1000 &&
          timeToExecute >= 5.98 * 60 * 1000
        ) {
          console.log(
            "that function: " +
              arguments.callee.caller.name +
              "\nthis function: " +
              arguments.callee.name +
              "\nTime limit six minutes",
          );
        }
        if (
          timeToExecute <= 5 * 60 * 1000 &&
          timeToExecute >= 4.98 * 60 * 1000
        ) {
          console.log(
            "that function: " +
              arguments.callee.caller.name +
              "\nthis function: " +
              arguments.callee.name +
              "\nTime limit five minutes",
          );
        }
        if (
          timeToExecute <= 4 * 60 * 1000 &&
          timeToExecute >= 3.98 * 60 * 1000
        ) {
          console.log(
            "that function: " +
              arguments.callee.caller.name +
              "\nthis function: " +
              arguments.callee.name +
              "\nTime limit four minutes",
          );
        }
        if (
          timeToExecute <= 3 * 60 * 1000 &&
          timeToExecute >= 2.98 * 60 * 1000
        ) {
          console.log(
            "that function: " +
              arguments.callee.caller.name +
              "\nthis function: " +
              arguments.callee.name +
              "\nTime limit three minutes",
          );
        }
        if (
          timeToExecute <= 2 * 60 * 1000 &&
          timeToExecute >= 1.98 * 60 * 1000
        ) {
          console.log(
            "that function: " +
              arguments.callee.caller.name +
              "\nthis function: " +
              arguments.callee.name +
              "\nTime limit two minutes",
          );
        }
        if (
          timeToExecute <= 1 * 60 * 1000 &&
          timeToExecute >= 0.98 * 60 * 1000
        ) {
          console.log(
            "that function: " +
              arguments.callee.caller.name +
              "\nthis function: " +
              arguments.callee.name +
              "\nTime limit one minute",
          );
        }
        if (timeToExecute <= 0.1 * 60 * 1000) {
          console.log("time to execute", timeToExecute.valueOf());
          break;
        }
        return;
      }
      return;
    });
  }
  var rndParam = randNum(seoPlaylist);
  return seoPlaylist[rndParam];
}

function pictBing(searchString, time) {
  // var searchString =  "Drones"
  if (typeof searchString !== "undefined") {
    const rndSearch = `https://www.bing.com/images/search?q=${encodeURIComponent(searchString)}%20+AND+*&PC=U316&top=50&skip=0&FORM=CHROMN`;
    const search = urlDataSource(rndSearch, searchString, time);
    // var i = 0
    // var l = [search].join("").split(" ").length
    // for (i,l;i<l;i++) {

    // var res = [search].join("").split(" ")[i]
    // if (res.indexOf("https") > -1) {

    // console.log(res)

    // }

    // }
    const table = search
      .slice(search.indexOf("src2="))
      .toString()
      .split("src2=");
    const pong = table.map((ping) => {
      return ping.substring(0);
    });
    var fndOrd = pong.toString().split(",");
  }
  if (fndOrd) {
    const randomKey = Math.floor(Math.random() * Math.floor(fndOrd.length)); // Math.floor(Math.random());
    var rndRes = fndOrd.filter((test) => {
      var elaspeTime = functionRegistry.time;
      var timeToExecute = functionRegistry.timeLeftToExecute;
      var e = 0;
      var q = randomKey;
      for (var e, q; e < q; i++) {
        var ans = test.indexOf("https://tse1.mm.bing.net/th?q=") > -1;
        // console.log(ans)
        if (ans === true) {
          // if ( JSON.stringify(i) !== JSON.stringify(l)) {break}
          return test;
        }
      }
      // console.log("test: " + test + "\nelaspeTime: " + elaspeTime + "\ntimeToExecute: " + timeToExecute)
    });
    var rndSort = [];
    var i = 0;
    var l = rndRes.length;
    for (var i, l; i < l; i++) {
      var sorRes = rndRes.filter((o) => {
        return o !== rndRes[i];
      });
      rndSort.push(sorRes);
    }
    var sorKind = rndSort.toString().split(" ");
    var revKind = sorKind.reverse();
    var popKind = revKind.pop();
    var rndKind = popKind.split(",");
    return {
      playList: rndRes.sort((a, b) => a - b),
    };
  }
}

function pictFactor(data, time) {
  var idArray = [];
  data.map((seoData) => {
    // var elaspeTime = new Date() - time
    // console.log("seoData: \nelaspeTime: " + elaspeTime)
    idArray.push(
      seoData.slice(seoData.indexOf("src2=")).toString().split("src2="),
    );
  });
  return {
    myIdArr: [idArray].toString().replace(/,/g, ""),
  };
}

var proTest = function () {
  var headers = ["Medications", "Dosage"];
  var data = [
    ["Amlodipine", "5mg"],
    ["Doxazasin", "8mg"],
    ["Lisinopril", "40mg"],
    ["Sodium Bicarbonate", "10 Grain"],
    ["HydroChlorthiarizide", "50mg"],
    ["Tacrolimus", "1mg"],
    ["Cellcept", "500mg"],
    ["Prednisone", "5mg"],
    ["Vitamin D", "125mcg(5000iu)"],
    ["Doxazasin", "4mg"],
    ["Famotidine", "4mg"],
    ["Ferosimide", "20mg"],
    ["Prednisilone 1%", "5mL"],
  ];
  const randomKey = Math.floor(Math.random() * Math.floor(data.length)); // Math.floor(Math.random());
  var randomSheetname = data[randomKey];
  var resData = data.slice(0);
  var sheetUrl = spreadSheetCreate(
    randomSheetname,
    `Medications`,
    headers,
    resData,
  ).myFileX;
  var sheetType = typeof sheetUrl;
  var viewUrl = SpreadsheetApp.openByUrl(sheetUrl).getUrl();
  return viewUrl;
  //var dataSS = ssGetSheetBySpreadsheetUrl("https://docs.google.com/spreadsheets/d/1-vNcN0vCLcXgMY9uwcKukUgv_4njggRZ6fqoZs-hBFE/edit#gid=138098962", "Timesheet");
  //    var sData = dataSS.getDataRange().getValues();
  //    var headers = sData.map((r) => {return r}).splice(0,2)[1];
  //    console.log(headers)
  //    var data = sData.map((r) => {return r})[1];
  // const vidV = [vidsSearched].map(function (v){console.log(v[0].valueOf());
  // return v[0].valueOf();});
  // console.log(vidV)
  // console.log(vidsSearched.map((m) => {const mObject = Utilities.jsonStringify(m)
  // console.log(mObject.indexOf(","))}))
  // console.log(typeof vidObject)
  //  console.log(uniqueVid)
};

function renameSheetSafely(ss, newSheetName) {
  var sheet = ss?.getSheets()[0];
  var sheetName = newSheetName; // Set your desired new sheet name here

  // Get the current sheet name
  var currentName = sheet.getName();

  // Get the last row with content
  var lastRow = sheet.getLastRow();
  // Get the last column with content
  var lastColumn = sheet.getLastColumn();

  // Check if the sheet name is the default name
  var isDefaultName =
    currentName === "Sheet1" ||
    currentName === "Sheet2" ||
    currentName === "Sheet3" ||
    currentName === "Untitled";

  // Check if the sheet is empty (no content)
  var isEmpty = lastRow === 0 && lastColumn === 0;

  // Rename the sheet only if it has a default name AND is empty
  if (isDefaultName && isEmpty) {
    sheet.setName(sheetName);
  }
}

function rndString(inputArray, time) {
  inputArray
    ? inputArray
    : (inputArray = objectOfS(
        ["parameter"],
        [[["func", testlt()]]],
        functionRegistry.time,
      ));
  if (typeof searchString === "object") {
    searchString = searchString.parameter["func"];
  }
  console.log(
    formatTime(functionRegistry.time) +
      "\n" +
      arguments.callee.name +
      "\n!" +
      inputArray +
      ", = " +
      !inputArray +
      "\n!" +
      time +
      ", = " +
      !time,
  );
  if (typeof time === "undefined") {
    var time = functionRegistry.time;
  }
  if (typeof inputArray === "undefined") {
    var inputArray = ["01234567"].join("").split(",");
  }
  console.log(
    formatTime(functionRegistry.time) +
      "\ninputArray: " +
      inputArray +
      "\nTime: " +
      format(functionRegistry.time),
  );
  console.log(
    formatTime(functionRegistry.time) +
      "\nCalling testData with inputArray: " +
      inputArray,
  );
  var testString = testData(inputArray, time).testArray;
  console.log(
    formatTime(functionRegistry.time) +
      "\nRecieved testString: " +
      testString +
      " from testData with inputArray: " +
      inputArray,
  );
  return {
    resStr: testString,
  };
}

// var strArray = testString.join("").split("")
// console.log("Calling randomSubstance with testString: " + testString)
// var str = randomSubstance(0,2,testString, null, time).myNewArr
// console.log("Recieved str: " + str + " from randomSubstance with testString: " + testString)

var seoBites = function (searchString, idArray, time) {
  // console.log(
  //   formatTime(functionRegistry.time) +
  //     "\n" +
  //     arguments.callee.name +
  //     "\nsearchString is !" +
  //     !searchString +
  //     ", = " +
  //     searchString +
  //     "\nidArray is !" +
  //     idArray +
  //     ", = " +
  //     idArray +
  //     "\ntime is !" +
  //     !time +
  //     ", = " +
  //     time,
  // );
  if (typeof time === "undefined") {
    var time = functionRegistry.time;
  }
  let uniqueSeo = [];
  let searchWords = [];
  searchString
    ? searchString
    : (searchString = globalThis.searchString().myNewArr);
  if (typeof searchString === "object") {
    if (searchString.parameter && searchString.parameter["func"]) {
      searchString = searchString.parameter["func"];
    } else {
      searchString = Object.values(searchString);
    }
  }
  let searchUI = [searchString].join("").split(" ");
  searchUI.map((l) => {
    var elaspeTime = functionRegistry.time;
    // console.log(
    //   formatTime(functionRegistry.time) +
    //     "\nseoBites: \nsearchString: " +
    //     searchString +
    //     "\nl: " +
    //     l +
    //     "\nelaspeTime: " +
    //     formatTime(elaspeTime),
    // );
    searchWords.push(l);
  });
  for (var i = 0, l = searchWords.length; i < l; i++) {
    idArray.map((w) => {
      if (w !== "") {
        // console.log(
        //   formatTime(functionRegistry.time) + "\nseoBites: \nw is !" + !w + " !== '': " + w,
        // );
        let hasId = [w][0].includes(searchWords[i]);
        if (w.indexOf(hasId) !== -1) {
          // console.log(
          //   formatTime(functionRegistry.time) +
          //     "\nseoBites: \nw is !" +
          //     !w +
          //     ".indexOf(" +
          //     w[0] +
          //     ".includes(" +
          //     searchWords[i] +
          //     ")) !== -1: " +
          //     w.indexOf(w[0].includes(searchWords[i])),
          // );
          uniqueSeo.push(w);
        }
      }
    });
  }
  if (uniqueSeo.length === 0) {
    uniqueSeo = idArray;
  }
  return uniqueSeo;
};

// var elaspeTime = new Date() - time
// console.log("w: \nelaspeTime: " + elaspeTime)
// var elaspeTime = new Date() - time
// console.log("w: \nelaspeTime: " + elaspeTime)

var seoFactor = function (data, time) {
  if (typeof time === "undefined") {
    var time = functionRegistry.time;
  }
  var idArray = [];
  data.map((seoData) => {
    // var elaspeTime = new Date() - time
    // console.log("seoData: \nelaspeTime: " + elaspeTime)
    try {
      var strDiv = seoData.split("<div>");
      // for (var i=0,l=seoData.length; i<l; i++) {
      // var sliDiv = seoData.slice(strDiv)
      // var spDiv = sliDiv.toString()
      // var arrDiv = spDiv.split("</div>")}
      idArray.push(strDiv.slice(strDiv.indexOf("</div>")));
    } catch (error) {
      return;
    }
  });
  var factorArray = [idArray].toString().replace(/,/g, "");
  // console.log("seoFactor: \nvar " + factorArray + " = " + [idArray].toString().replace(/,/g, ''))
  return {
    factorData: factorArray,
  };
};

var seoIndex = function (searchWord) {
  if (typeof searchWord === "undefined") {
    searchWord = globalThis.searchString().myNewArr;
  }
  console.log(
    "seoIndex: \nDeclaring infoSP = seoSheet(" +
      searchWord.toLowerCase() +
      ").keyWords",
  );
  var infoSP = seoSheet(searchWord.toLowerCase()).keyWords;
  var plaListNum = Math.floor(Math.random() * Math.floor(infoSP.length));
  var story = infoSP[plaListNum];
  return console.log(dtlsPict(story));
  return seoCapital(dtlsPict(story));
  // var arrInfo =  [infoLink].join("");
  // var infoSP = arrInfo.split(",")
  // var pageArray = []
  // var page =infoSP.map((tv) => {
  //   var listItem = seoPastTime(tv).playList
  //   var plaListNum = Math.floor(Math.random() * Math.floor(listItem.length))
  //   var rndListItem = [listItem][plaListNum]
  //   pageArray.push(rndListItem)
  //   })
  //   var story = pageArray[Math.floor(Math.random() * Math.floor(pageArray.length))]
};

function seoPictTime(searchString, time) {
  functionRegistry.imgTree();
  var imgSheetVals = functionRegistry.getImageList();
  var imgData = [];
  var imgVals = Object.values(imgSheetVals);
  imgVals.forEach((img) => {
    var inValsKeys = Object.keys(img);
    var inVVals = Object.values(img);
    inVVals.forEach((inV) => {
      // console.log("I'm holding the value of vidVals", inV)
      let truInv = isTruthy(inV);
      if (truInv) {
        imgData.push(inV);
      } else {
        return;
      }
    });
  });
  searchString
    ? searchString
    : (searchString = objectOfS(
        ["parameter"],
        [[["func", testlt()]]],
        functionRegistry.time,
      ));
  if (typeof searchString === "object") {
    if (searchString.parameter && searchString.parameter["func"]) {
      searchString = searchString.parameter["func"];
    } else {
      searchString = Object.values(searchString);
    }
  }
  // console.log(
  //   formatTime(functionRegistry.time) +
  //     "\n" +
  //     arguments.callee.name +
  //     "\nsearchString is !" +
  //     !searchString +
  //     " = " +
  //     searchString +
  //     "\ntime is !" +
  //     !time +
  //     " = " +
  //     time,
  // );
  if (typeof time === "undefined") {
    var time = functionRegistry.time;
  }
  if (typeof searchString === "undefined") {
    var searchString = globalThis.searchString().myNewArr;
  }
  // console.log(
  //   formatTime(functionRegistry.time) +
  //     "\nseoPictTime: \nvar altSearch = seoSheet(" +
  //     searchString,
  //   time + ")",
  // );
  var altSearch = seoSheet(searchString, time);
  var listSearch = altSearch.keyWords;
  var rndListKey = Math.floor(Math.random() * Math.floor(listSearch.length));
  var testSearch = listSearch[rndListKey];
  // if (
  //   [searchString]
  //     .toString()
  //     .toLowerCase()
  //     .includes([testSearch].toString().toLowerCase())
  // ) {
  // console.log(
  //   formatTime(functionRegistry.time) +
  //     "\nseoPictTime: \n[" +
  //     testSearch +
  //     "].join().indexOf(" +
  //     searchString +
  //     ") === " +
  //     [testSearch].join("").indexOf(searchString),
  // );
  // }
  if (
    searchString &&
    typeof searchString === "string" &&
    testSearch &&
    typeof testSearch === "string" &&
    listSearch &&
    typeof listSearch === "string"
  ) {
    if (
      !searchString
        .toLowerCase()
        .includes([testSearch].join("").toLowerCase()) &&
      !searchString.toLowerCase().includes(listSearch[0].toLowerCase())
    ) {
      searchString = allInvestors().title;
    }
  }
  // console.log(
  //   formatTime(functionRegistry.time) +
  //     "\nseoPictTime: \nvar uniqueVid = seoPictures(" +
  //     searchString,
  //   time + ")",
  // );
  var uniqueVid = seoPictures(searchString, time);
  var sorFndOrd = [];
  uniqueVid.results.forEach((vidObject) => {
    var elaspeTime = functionRegistry.time;
    var timeToExecute = functionRegistry.timeLeftToExecute;
    var res = [vidObject].join("").split(" ");
    let wHttps = res[0].indexOf("https");
    let wDoct = res[0].indexOf("<!DOCTYPE");
    if (res[0].indexOf("https") > -1 && res[0].indexOf("<!DOCTYPE") === -1) {
      if (sorFndOrd.indexOf(vidObject) === -1) {
        sorFndOrd.push(vidObject);
      }
    }
  });
  if (sorFndOrd.length === 0) {
    sorFndOrd = uniqueVid;
  }
  var fndOrd = [];
  var i = 0;
  var l = sorFndOrd.length;
  for (i, l; i < l; i++) {
    // sorFndOrd.sort((a, b) => {
    //   console.log(
    //     formatTime(functionRegistry.time) +
    //       "\nseoPictTime: \n" +
    //       a +
    //       ".toLowerCase() === " +
    //       sorFndOrd[i] +
    //       ".toLowerCase() " +
    //       a.toLowerCase() ===
    //       sorFndOrd[i].toLowerCase(),
    //   );
    //   if (a.toLowerCase() === sorFndOrd[i].toLowerCase()) {
    //     console.log(
    //       formatTime(functionRegistry.time) +
    //         "\nseoPictTime: \nfndOrd.indexOf(" +
    //         a +
    //         ") > -1 " +
    //         fndOrd.indexOf(a),
    //     );
    //   }
    // });
    if (!fndOrd.indexOf(sorFndOrd) > -1) {
      fndOrd.push(sorFndOrd);
    }
    // else {
    //   fndOrd.push(sorFndOrd);
    // }
  }
  if (fndOrd) {
    const randomKey = Math.floor(Math.random() * Math.floor(fndOrd.length));
    var rndRes = [];
    fndOrd.forEach((test) => {
      var elaspeTime = functionRegistry.time;
      var timeToExecute = functionRegistry.timeLeftToExecute;
      for (var i = 0, l = randomKey; i < l; i++) {
        // console.log(
        //   formatTime(functionRegistry.time) +
        //     "\nseoPictTime: \ntest.indexOf(" +
        //     "tse4.mm.bing.net" +
        //     ") > -1 " +
        //     test.indexOf("tse4.mm.bing.net"),
        // );
        if (test.indexOf("tse4.mm.bing.net") > -1) {
          // if (JSON.stringify(i) >= 3) {
          //   break;
          // }
          var imgUrl = [test].join("").split('"')[1];
          // rndRes.push(imgUrl);
          if (test && rndRes.indexOf(test) === -1) {
            if (imgData.indexOf(test) !== -1) {
              return;
            } else {
              updateQuote(
                JSON.stringify({
                  name: "imageSheet",
                  number: 001,
                  imageid: test,
                  imagedescription: searchString,
                }),
              );
            }
            rndRes.push(imgUrl);
          }
        }
      }
    });
    if (rndRes.length > 0) {
      functionRegistry.imgTree();
      imgSheetVals = functionRegistry.getImageList();
      imgData = [];
      // var vidKeys = Object.keys(vidSheetVals);
      imgVals = Object.values(imgSheetVals);
      imgVals.forEach((img) => {
        let inValsKeys = Object.keys(img);
        let inVVals = Object.values(img);
        inVVals.forEach((inV) => {
          // console.log("I'm holding the value of vidVals", inV)
          let truInv = isTruthy(inV);
          if (truInv) {
            imgData.push(inV);
          } else {
            return;
          }
        });
      });
      var rndSort = [];
      for (var i = 0, l = rndRes.length; i < l; i++) {
        var sorRes = rndRes.filter((o) => {
          return o !== rndRes[i];
        });
        rndSort.push(sorRes);
      }
      var sorKind = rndSort.toString().split(" ");
      var revKind = sorKind.reverse();
      var popKind = revKind.pop();
      var rndKind = popKind.split(",");
    }
    var imgPlay = [];
    var imgKeys = Object.keys(imgSheetVals);
    imgKeys.forEach((img) => {
      let imgObj = vidSheetVals[img];
      let imageId = vidObj["Image"];
      let matchKeys = Object.keys(imgObj);
      matchKeys.forEach((match) => {
        let imgMatch = imgObj[match];
        let truMatch = isTruthy(imgMatch);
        if (truMatch) {
          let searchMatch = imgMatch.indexOf(searchString) > -1;
          let matchSearch = searchString.indexOf(imgMatch) > -1;
          if (searchMatch || matchSearch) {
            imgPlay.push(imageId);
          }
        }
      });
    });
    return { playList: imgPlay, hardLink: uniqueVid.hardLink };
  } else {
    return { playList: {} };
  }
}

// console.log("seoPictTime: \n")
// console.log("vidObject: " + vidObject + "\nelaspeTime: " + elaspeTime + "\ntimeToExecute: " + timeToExecute)
// console.log(a)
// console.log(fndOrd)
// Math.floor(Math.random());
// console.log("test: " + test + "\nelaspeTime: " + elaspeTime + "\ntimeToExecute: " + timeToExecute)
// var form = formMaker(searchString)
// fileManager(searchString, "Forms")
// var lowerCaseS = seoSheet(searchString).keyWords
// lowerCaseS.map((b) => {
// console.log(b + "</></></></></></>" + JSON.stringify(covObjects([[b]], ["keywords"])))
// return form.addVideoItem().setTitle(JSON.stringify(covObjects([[b]], ["keywords"]))).setAlignment(FormApp.Alignment.CENTER).setWidth(612).setVideoUrl(needUtility(b)[0].videoItemUrl)})
// var formUrl = form.getPublishedUrl()
// url: formUrl

function seoPictures(searchString, time) {
  // console.log(
  //   formatTime(functionRegistry.time) +
  //     "\n" +
  //     arguments.callee.name +
  //     "\n!" +
  //     searchString +
  //     "= " +
  //     !searchString +
  //     "\n!" +
  //     time +
  //     "= " +
  //     !time,
  // );
  if (typeof searchString === "undefined") {
    var searchString = globalThis.searchString().myNewArr;
  }
  var rndSearch = `https://www.bing.com/images/search?q=(${encodeURIComponent(searchString)})%20intitle%3A - +AND+${encodeURIComponent(searchString)}*&PC=U316&top=50&skip=0&FORM=CHROMN`;
  // console.log(
  //   "seoPictures: \nvar data = [urlFetchApp.fetch(" + rndSearch,
  //   { muteHttpExceptions: true } + ")]",
  // );
  var data = [UrlFetchApp.fetch(rndSearch, { muteHttpExceptions: true })];
  // console
  //   .log(
  //     "seoPictures: \nvar uniqueSeo = data.slice(" +
  //       data.indexOf(" + 'src2=' + "),
  //   )
  // .toString()
  // .split(" + 'src2=' + " + ")");
  var uniqueSeo = data.slice(data.indexOf("src2=")).toString().split("src2=");
  return { results: uniqueSeo, hardLink: rndSearch };
}

// console.log("seoPictures: \n");var i = 0;var l = [data].join("").split(" ").length;for (i,l;i<l;i++) {var res = [data].join("").split(" ")[i]
// if (res.indexOf("https") > -1) {console.log(res)}};console.log(uniqueSeo.join("").split('"')[6])

var seoTwitter = function (folderX, searchString, time) {
  // console.log(
  //   formatTime(functionRegistry.time) +
  //     "\n" +
  //     arguments.callee.name +
  //     "\n!" +
  //     folderX +
  //     "= " +
  //     !folderX +
  //     "\n!" +
  //     searchString +
  //     "= " +
  //     !searchString +
  //     "\n!" +
  //     time +
  //     "= " +
  //     !time,
  // );
  if (typeof time === "undefined") {
    var time = functionRegistry.time;
  }
  var foldCounter = 0;
  var foldData = folderManager(folderX); // && folderX !== "folderX" ? folderX : randomFolderName);
  var randomFolderCount = Math.floor(
    Math.random() * Math.floor(foldData.length),
  );
  var minFold = fileFold(foldData[randomFolderCount]);
  var rndString =
    minFold[Math.floor(Math.random() * Math.floor(minFold.length))];
  if (!searchString) {
    var searchString = rndString;
  } else if (searchString === "searchString") {
    searchString = rndString;
  }
  var uniqueSeo = seoBites(searchString, minFold, time);
  return { twiData: uniqueSeo };
  var data = [];
  while (data.length === 0) {
    data = minFold.filter((p) => {
      if (p === searchString) {
        console.log("seoTwitter: \n" + p + " === " + searchString);
        return p === searchString;
      }
    });
    if (foldCounter + 1 >= minFold.length) {
      break;
    } else {
      foldCounter++;
    }
  }
  // for (var key in minFold) {
  //   if (
  //     minFold[key]
  //       .toLowerCase()
  //       .includes([searchString].toString().toLowerCase())
  //   ) {
  //     data.push(minFold[key]);
  //   }
  // }
  // var idArray = [seoFactor(data || minFold, time).factorData].toString().split("\n");
  // let seoTruth = isTruthy(idArray);
  // if (!seoTruth) {
  //   idArray = minFold
  // }
};
// var rndSearch = `https://www.bing.com/search?q=${encodeURIComponent(searchString)}%20intitle%3A - twitter+AND+*&PC=U316&top=50&skip=0&FORM=CHROMN`;var unFilData = UrlFetchApp.fetch(rndSearch,{muteHttpExceptions:true});var data = [unFilData.getContentText()];console.log("seoTwitter: \nDeclaring foldData = folderManager()");console.log(data.length);console.log(data.length);console.log(foldData[foldCounter]);console.log("seoTwitter: \nvar minFold = fileFold(" + foldData[foldCounter], searchString + ")")
// console.log("seoTwitter: \n data = " + minFold.map((p) => {console.log("fileFold: \nif ([" + p + "].join(" + "" + ").toLowerCase().includes([" + searchString +"].join(" + "" + ").toLowerCase())) = " + "\n" + [p].join("").toLowerCase().includes([searchString].join("").toLowerCase()) + " return " + p);
// if ([p].join("").toLowerCase().includes([searchString].join("").toLowerCase()));return p}));console.log(data);console.log("seoTwitter: \nvar " + idArray + " = " + [seoFactor(data, time).factorData].toString().split("\n"));console.log("seoTwitter: \nvar " + uniqueSeo + " = seoBites(" + searchString,idArray, time + ")")

function sheetsMaker(fileName, folderX, time) {
  console.log(
    formatTime(functionRegistry.time) +
      "\n" +
      arguments.callee.name +
      "\nfileName is !" +
      !fileName +
      ", = " +
      fileName +
      "\nfolderX is !" +
      !folderX +
      ", = " +
      folderX +
      "\ntime is !" +
      !time +
      ", = " +
      time,
  );
  if (fileName ? fileName : "base") {
    var unique = 0;
    // var oldFile = "https://";
    var fileNameList = matchManager(folderX ? folderX : "Sheets");
    fileNameList.sheets.map((t) => {
      var isTaken = t === fileName ? fileName : "base";
      if (isTaken === true) {
        fileName = fileName ? fileName : "base" + unique;
        unique++;
        return;
      } else {
        return;
      }
    });
    var newFileName = fileName ? fileName : "base";
    console.log(
      formatTime(functionRegistry.time) +
        "\n" +
        arguments.callee.name +
        "\nnewFileName is !" +
        !newFileName +
        ", = " +
        newFileName,
    );
    // while (fileNameList.sheets[matches]) {
    //   newFileName = fileName + unique;
    //   unique++;
    //   oldMatch = [].push(
    //     fileNameList.sheets.map((t) => {
    //       if (t === newFileName) {
    //         oldMatch = t
    //       } else {
    //         oldMatch = ""
    //       };
    //     }),
    //   );
    // }
    var newFile = SpreadsheetApp.create(newFileName.toString());
    console.log(
      formatTime(functionRegistry.time) +
        "\n" +
        arguments.callee.name +
        "\nnewFile is !" +
        !newFile +
        ", = " +
        newFile,
    );
    sheetsFileManager(newFile.getId(), folderX, start);
    return newFile;
  }
}

// var sheetsMaker = function (fileName, folderX, time) {
//   console.log(
//     functionRegistry.time +
//       "\n" +
//       arguments.callee.name +
//       "\nfileName is !" +
//       !fileName +
//       ", = " +
//       fileName +
//       "\nfolderX is !" +
//       !folderX +
//       ", = " +
//       folderX +
//       "\ntime is !" +
//       !time +
//       ", = " +
//       time,
//   );

//   if (fileName) {
//     let unique = 0; // Use let for block scope
//     var oldFile = "https://"; // This variable seems unused or misleading
//     let newFileName = fileName; // Use let for block scope

//     // Assuming matchManager(folderX) returns an object with a 'sheets' property that is an array of sheet names
//     const fileNameList = matchManager(folderX);

//     // --- FIX START ---
//     // Function to check if a fileName already exists in the list
//     const isFileNameTaken = (nameToCheck) => {
//       // Use .some() which returns true if at least one element satisfies the condition
//       // It's much more efficient than map and push for this purpose.
//       return fileNameList.sheets.some(t => t === nameToCheck);
//     };

//     // Check if the initial fileName is taken
//     let isTaken = isFileNameTaken(newFileName);

//     // Loop while the generated newFileName is already taken
//     while (isTaken) {
//       newFileName = fileName + unique;
//       unique++;
//       isTaken = isFileNameTaken(newFileName); // Update the check for the new name
//     }
//     // --- FIX END ---

//     var newFile = SpreadsheetApp.create(newFileName);
//     console.log(
//       functionRegistry.time +
//         "\n" +
//         arguments.callee.name +
//         "\nnewFile is !" +
//         !newFile +
//         ", = " +
//         (newFile ? newFile.getName() : ""), // Corrected ternary logic for console.log
//     );

//     // Assuming sheetsFileManager and start are defined elsewhere
//     sheetsFileManager(newFile.getId(), folderX, start);
//     return newFile;
//   }
// };

function sheetSeo(namedVar, time) {
  var pageArray = [];
  var seoArray = seoSheet(namedVar, time).keyWords;
  seoArray.map((tv) => {
    var elaspeTime = new Date() - functionRegistry.time;
    console.log(
      "that function: " +
        arguments.callee.caller.name +
        "\nthis function: " +
        arguments.callee.name +
        "\ntv: " +
        tv +
        "\nelaspeTime: " +
        elaspeTime,
    );
    var newSeo = pastSeo(tv, time);
    pageArray.push(newSeo);
  });
  return { sheetObj: pageArray };
}

function sheetsUrls(fileX, folderX, time) {
  console.log(
    formatTime(functionRegistry.time) +
      "\n" +
      arguments.callee.name +
      "\nfileX is !" +
      !fileX +
      ", = " +
      fileX +
      "\nfolderX is !" +
      !folderX +
      ", = " +
      folderX +
      "\ntime is !" +
      !time +
      ", = " +
      time,
  );
  var runRndMat = function () {
    var rndName = functionRegistry.fileList;
    let nameRnd =
      rndName[Math.floor(Math.random() * Math.floor(rndName.length))];
    return nameRnd;
  };
  if (typeof fileX === "undefined") {
    var fileX = runRndMat();
    console.log(
      formatTime(functionRegistry.time) +
        "\n" +
        arguments.callee.name +
        "\nfileX is !" +
        !fileX +
        ", = " +
        fileX,
    );
  }
  var fileNameList = matchManager(folderX ? folderX : "Sheets", fileX);
  var mineField = [];
  if (fileNameList) {
    while (mineField.length === 0) {
      fileNameList.sheets.map((repo) => {
        if (repo.toLowerCase().includes(fileX.toLowerCase())) {
          var mineFile = DriveApp.getFilesByName(repo);
          if (mineFile.hasNext()) {
            var bogy = mineFile.next().getId();
            if (
              DriveApp.getFileById(bogy).getMimeType() ===
              MimeType.GOOGLE_SHEETS
            ) {
              mineField.push(bogy);
            }
          }
        }
      });
      let testFlight =
        fileNameList.sheets[
          Math.floor(Math.random() * Math.floor(fileNameList.sheets.length))
        ];
      if (testFlight) {
        var rndBogy = DriveApp.getFilesByName(testFlight).next().getId();
      }
      if (mineField.length === 0) {
        mineField.push(rndBogy);
      }
    }
    return mineField[Math.floor(Math.random() * Math.floor(mineField.length))];
  } else {
    var treeRoot = DriveApp.getRootFolder().getFiles();
    while (treeRoot.hasNext()) {
      var trueName = treeRoot.next();
      if (trueName) {
        var truMime = trueName.getMimeType();
        var mimeName = trueName.getName();
        var truUrl = trueName.getUrl();
        if (truMime == "GOOGLE_SHEETS") {
          if (mimeName === fileX) {
            var mineFile = truUrl;
            return mineFile;
          } else {
            return "File Not Found!";
          }
        }
      }
    }
  }
}

function skyNeed(namedVar, time) {
  var wanVar = wanUtil(namedVar, time).verInfo;
  var rndVar = randomSubstance(
    0,
    3,
    [wanVar].sort((a, b) => a - b),
    functionRegistry.time,
  );
  var rndSeo = needUtility(rndVar, time)[0].rndTitle;
  return rndSeo;
}

var spreadSheet = function () {
  var ssApp = SpreadsheetApp;
  var ss = ssApp.getActiveSpreadsheet();
  return ss;
};

// var spreadSheetCreate = function (fileX, sheetName, rowHeaders, data, time) {
// console.log(
//   functionRegistry.time +
//     "\n" +
//     arguments.callee.name +
//     "\nfileX is !" +
//     !fileX +
//     ", = " +
//     fileX +
//     "\nsheetName is !" +
//     !sheetName +
//     ", = " +
//     sheetName +
//     "\nrowHeaders is !" +
//     !rowHeaders +
//     ", = " +
//     rowHeaders +
//     "\ndata is !" +
//     !data +
//     ", = " +
//     data +
//     "\ntime is !" +
//     !time +
//     ", = " +
//     time,
// );

// // Declare variables here, outside the try block
//   var ssNewFile, ssId;

//   if (!fileX) {
//     console.log("fileX is ! ", !fileX)
//     var fileX = testlt();
//     console.log("testlt ", fileX)
//   }
//   try {
//   console.log(
//     "boilerplate sheetParameters: line 1660\nspreadSheetCreate(fileX: " +
//       fileX +
//       ")\n " +
//       arguments.callee.caller.name,
//   );

//     var ss = sheetsMaker(fileX, "Sheets", start);
//     if (ss && ss.getUrl()) { // Good practice to check for ss object
//       console.log(
//         "boilerplate sheetParameters: line 1669\nspreadSheetCreate(ss.getUrl(): " +
//           ss.getUrl() +
//           ")\n " +
//           arguments.callee.caller.name,
//       );
// var sheet = ss.getSheets()[0].activate();
// if (!sheetName) {
//   var sheetName = testlt();
// }
// console.log(
//   "boilerplate sheetParameters: line 1679\nspreadSheetCreate(sheetName: " +
//     sheetName +
//     ")\n " +
//     arguments.callee.caller.name,
// );
// var ws = sheet.setName([sheetName][0]);
// var headers = [];
// if (!rowHeaders) {
//   var rowHeaders = [testlt()];
// }
// console.log(
//   "boilerplate sheetParameters: line 1690\nspreadSheetCreate(rowHeaders: " +
//     rowHeaders +
//     ")\n " +
//     arguments.callee.caller.name,
// );
// rowHeaders.map((h) => {
//   headers.push([h][0]);
// });
// ws.appendRow(headers);
// var dataArray = [];
// if (!data) {
//   var data = JSON.parse(
//     convertToObjects([[arguments.callee.name]], ["name"], start),
//   )[0];
// }
// console.log(
//   "boilerplate sheetParameters: line 1706\nspreadSheetCreate(data: " +
//     data +
//     ")\n " +
//     arguments.callee.caller.name,
// );
// for (var key in data) {
//   dataArray.push(data[key]);
// }
// console.log(
//   "boilerplate sheetParameters: line 1715\nspreadSheetCreate(dataArray: " +
//     dataArray +
//     ")\n " +
//     arguments.callee.caller.name,
// );
// var sicSliceArray = dataArray.slice(0);
// var dRange = ws.getDataRange().getValues();
// var col = dRange[0].length;
// var rowDRange = ws.getLastRow();
// var colDRange = ws.getLastColumn();
// ws.getRange(2, 1, [sicSliceArray].length, headers.length).setValues(
//   sicSliceArray,
// );
// console.log(
//   functionRegistry.time +
//     "\nCalled function: " +
//     arguments.callee.name +
//     "\nCaller function: " +
//     arguments.callee.caller.name +
//     "\nNew file with name " +
//     fileX +
//     " was created!",
// );

// // Assign values to the pre-declared variables
//       ssId = ss.getId();
//       console.log("SpreadsheetApp.openById(ssId).getUrl() ", ss.getUrl());
//       ssNewFile = ss.getUrl();
//     }
//   } catch (error) {
//     return "Error creating spreadSheet: " + error;
//   }
//   // The variables ssNewFile and ssId are now available here,
//   // and will either have their assigned values or remain undefined.
//   return { myFileX: ssNewFile, myFileXId: ssId };
// };

function spreadSheetCreate(fileX, sheetName, rowHeaders, data, time) {
  console.log(
    formatTime(functionRegistry.time) +
      "\n" +
      arguments.callee.name +
      "\nfileX is !" +
      !fileX +
      ", = " +
      fileX +
      "\nsheetName is !" +
      !sheetName +
      ", = " +
      sheetName +
      "\nrowHeaders is !" +
      !rowHeaders +
      ", = " +
      rowHeaders +
      "\ndata is !" +
      !data +
      ", = " +
      data +
      "\ntime is !" +
      !time +
      ", = " +
      time,
  );

  // Declare variables here, outside the try block

  // Use 'let' instead of 'var' for block-scoping
  let ssNewFile, ssId;

  if (!fileX) {
    let fileX = testlt(); // Also use let here
    console.log("testlt ", fileX);
  }

  try {
    console.log(
      "boilerplate sheetParameters: line 1660\nspreadSheetCreate(fileX: " +
        fileX +
        ")\n " +
        arguments.callee.caller.name,
    );

    let ss = sheetsMaker(fileX, "Sheets", start); // Use let here too
    if (ss && ss.getUrl()) {
      console.log(
        "boilerplate sheetParameters: line 1669\nspreadSheetCreate(ss.getUrl(): " +
          ss.getUrl() +
          ")\n " +
          arguments.callee.caller.name,
      );
      var sheet = ss.getSheets()[0].activate();
      if (!sheetName) {
        var sheetName = testlt();
      }
      console.log(
        "boilerplate sheetParameters: line 1679\nspreadSheetCreate(sheetName: " +
          sheetName +
          ")\n " +
          arguments.callee.caller.name,
      );
      var ws = sheet.setName([sheetName][0]);
      var headers = [];
      if (!rowHeaders) {
        var rowHeaders = [testlt()];
      }
      console.log(
        "boilerplate sheetParameters: line 1690\nspreadSheetCreate(rowHeaders: " +
          rowHeaders +
          ")\n " +
          arguments.callee.caller.name,
      );
      rowHeaders.map((h) => {
        headers.push([h][0]);
      });
      ws.appendRow(headers);
      var dataArray = [];
      if (!data) {
        var data = JSON.parse(
          convertToObjects([[arguments.callee.name]], ["name"], start),
        )[0];
      }
      console.log(
        "boilerplate sheetParameters: line 1706\nspreadSheetCreate(data: " +
          data +
          ")\n " +
          arguments.callee.caller.name,
      );
      for (var key in data) {
        dataArray.push(data[key]);
      }
      console.log(
        "boilerplate sheetParameters: line 1715\nspreadSheetCreate(dataArray: " +
          dataArray +
          ")\n " +
          arguments.callee.caller.name,
      );
      var sicSliceArray = dataArray.slice(0);
      var dRange = ws.getDataRange().getValues();
      var col = dRange[0].length;
      var rowDRange = ws.getLastRow();
      var colDRange = ws.getLastColumn();
      // ws.getRange(2, 1, [sicSliceArray].length, headers.length).setValues(
      //   sicSliceArray,
      // );
      ws.getRange(2, 1, 1, headers.length)?.setValues([sicSliceArray]);
      console.log(
        formatTime(functionRegistry.time) +
          "\nCalled function: " +
          arguments.callee.name +
          "\nCaller function: " +
          arguments.callee.caller.name +
          "\nNew file with name " +
          fileX +
          " was created!",
      );

      // Assign values to the pre-declared variables
      ssId = ss.getId();
      ssNewFile = ss.getUrl();
    }
  } catch (error) {
    return "Error creating spreadSheet: " + error;
  }

  // Add a final check to see the variable values right before return
  console.log("Final return values: ", { myFileX: ssNewFile, myFileXId: ssId });

  return { myFileX: ssNewFile, myFileXId: ssId };
}

// data.map((o)=>{var sheetCol =[o].join("").split(",");var sheetArr = sheetCol.map((arr)=>{return arr});dataArray.push(sheetArr[0])});console.log("called function: " + arguments.callee.name + "\nfile name: " + fileX);console.log("called function: " + arguments.callee.name + "\nGoogle Drive Url: " + nSs);SpreadsheetApp.openByUrl(ss);console.log("called function: " + arguments.callee.name + "\nSheet name: " + ss.getName());console.log("called function: " + arguments.callee.name + "\ncaller function: " + arguments.callee.caller.name + "\nName of this sheet is " + sheet.getName());console.log("called function: " + arguments.callee.name + "\ncaller function: " + arguments.callee.caller.name + "\nSheet name changed to " + ws.getName());console.log("called function: " + arguments.callee.name + "\nName of active sheet" + ss.getActiveSheet().getName());var dataCol = dataArray;var wsRange = ws.getRange(2, 1, dataArray.length, col).getValues();var newFile = formsUrls(fileX,"Sheets", rowHeaders, data, start);
// else if (typeof nSs !== "undefined"){var ss = ssApp.openByUrl(url);ws = ss.getActiveSheet();return ws.getRange(1, 1, ws.getLastRow(), ws.getLastColumn()).getValues()}
// else {console.log(typeof nSs);
// if (typeof nSs !== "undefined"){var ss = ssApp.openByUrl(nSs);ws = ss.getActiveSheet();return ws.getRange(1, 1, ws.getLastRow(), ws.getLastColumn()).getValues();}

var ssActiveRange = function () {
  var sheet = ssSheet();
  if (sheet) {
    var data = sheet.getActiveRange();
    return data;
  }
};

var ssCell = function (column, rowOffSet, colOffSet) {
  var sheet = ssSheet();
  if (sheet) {
    var data = sheet
      .getRange(sheet.getMaxRows(), column)
      .getNextDataCell(SpreadsheetApp.Direction.UP)
      .offset(rowOffSet, colOffSet);
    return data;
  }
};

function ssData(playSheet, sheetName, time) {
  console.log(
    formatTime(functionRegistry.time) +
      "\n" +
      arguments.callee.name +
      "\nplaySheet is !" +
      !playSheet +
      ", = " +
      playSheet +
      "\nsheetName is !" +
      !sheetName +
      ", = " +
      sheetName +
      "\ntime is !" +
      !time +
      ", = " +
      time,
  );
  var sheetWS = ssGetSheetBySpreadsheetUrl(playSheet, sheetName);
  if (sheetWS) {
    var sheetD = sliceValues(sheetWS.getDataRange().getValues(), 1);
    console.log(
      formatTime(functionRegistry.time) +
        "\n" +
        arguments.callee.name +
        "\nsheetD is !" +
        !sheetD +
        ", = " +
        sheetD,
    );
    return JSON.stringify(sheetD);
  }
}

function ssDatabase(file, sheet, col, headers, data) {
  var result = contentApp("<?!= myProject ?> ", {
    createProject: function myProject() {
      var ws = spreadSheetCreate(file, sheet);
      ws.appendRow(headers);
      var dataArray = testData(data);
      ssSheet().getRange(2, 1, dataArray.length, col).setValues(dataArray);
    },
  });
  return result;
}

// for (let i = 0; i < dataArray.length; i++) {
//   ws.appendRow(dataArray[i])}

var ssDataRange = function () {
  var sheet = ssSheet();
  if (sheet) {
    var data = sheet.getDataRange().getValues();
    return data;
  }
};

function ssNameIdFind(sheetName, id) {
  // Search for files with the given name
  const files = DriveApp.getFilesByName(sheetName);

  while (files.hasNext()) {
    const file = files.next();
    if (id) {
      // Check if the file ID matches the provided sheet ID
      if (file.getId() === id) {
        const spreadsheet = SpreadsheetApp.openById(sheetId);
        return spreadsheet; // Return the Spreadsheet object
      } else {
        const spreadsheet = SpreadsheetApp.openByUrl(file.getUrl());
        return spreadsheet; // Return the Spreadsheet object
      }
    }
  }

  // If no match is found
  return null;
}

var ssGetSheet = function (sheetname) {
  var ss = spreadSheet();
  if (ss) {
    var sheet = ss.getSheetByName(sheetname);
    return sheet;
  }
};

/**
 * @param {string} url The URL of the spreadsheet.
 * @returns The Sheets.
 */
function ssGetSheetBSI(url) {
  if (url) {
    var ss = urlSpreadSheet(url);
    let ssSheets = [];
    var sheets = ss.getSheets();
    for (const sheet of sheets) {
      ssSheets.push({ name: sheet.getName(), ID: sheet.getSheetId() });
    }
    return ssSheets;
  }
}

function ssGetSheetBySpreadsheetId(id, sheetname) {
  if (id) {
    var ss = idSpreadSheet(id);
    var sheet = ss.getSheetByName(sheetname);
    return sheet;
  }
}

/**
 * @param {string} url The URL of the spreadsheet.
 * @param {string} sheetname The name of the sheet to get.
 * @returns {SpreadsheetApp.Spreadsheet|SpreadsheetApp.Sheet} The Spreadsheet or Sheet object.
 */
function ssGetSheetBySpreadsheetUrl(url, sheetname) {
  if (url) {
    var ss = urlSpreadSheet(url);
    if (sheetname) {
      var sheet = ss.getSheetByName(sheetname);
      return sheet;
    } else {
      return ss;
    }
  }
}

function ssSetName(randomSheet, sheetname) {
  if (randomSheet) {
    var sheetName = idSpreadSheet(randomSheet.getId())
      .getSheetByName("sheet1")
      .setName(sheetname);
    var sheet = idSpreadSheet(randomSheet.getId()).getSheetByName(sheetName);
    return sheet;
  }
}

var ssSetSheet = function () {
  var ss = spreadSheet();
  if (ss) {
    var sheet = ss.setActiveSheet();
    return sheet;
  }
};

var ssSetSheetBySpreadsheetId = function (id) {
  if (id) {
    var ss = idSpreadSheet(id);
    var sheet = ss.setActiveSheet();
    return sheet;
  }
};

var ssSetSheetBySpreadsheetUrl = function (url) {
  if (url) {
    var ss = urlSpreadSheet(url);
    var sheet = ss.setActiveSheet();
    return sheet;
  }
};

var ssSheet = function () {
  var ss = spreadSheet();
  if (ss) {
    var sheet = ss.getActiveSheet();
    return sheet;
  }
};

var ssSheetName = function () {
  var sheet = ssSheet();
  if (sheet) {
    var sheetName = sheet.getSheetName();
    return sheetName;
  }
};

function submitDomain(formData) {
  // var ss = SpreadsheetApp.getActiveSpreadsheet();
  // var sheet = ss.getSheetByName("DomainListings"); // Replace with your sheet name
  var sheet = ssGetSheetBySpreadsheetUrl(
    "https://docs.google.com/spreadsheets/d/1-vNcN0vCLcXgMY9uwcKukUgv_4njggRZ6fqoZs-hBFE/edit#gid=138098962",
    "DomainListings",
  );
  sheet.appendRow([
    formData.domain,
    formData.price,
    formData.email,
    "Available",
  ]); // Add other fields
  return "Domain listing submitted successfully!";
}

function taxiService() {
  const server = http.createServer(requestListener);
  server.listen(port, host, () => {
    console.log(
      `"that function: " + arguments.callee.caller.name + "\nthis function: " + ${arguments.callee.name} + "\nServer is running on http://${host}:${port}`,
    );
  });
}

function tutorial(text) {
  var html = contentApp(`
    <body id="screen"></body>
    <script>document.getElementById("screen").innerHTML = ${urlDataSource(encodeURI(text))} || ${urlDataSource(encodeURI("https://avaddc.com/agency/the-paul-rue-agency/4022/"))} </script>`);
  return html;
}

function updateSheet(url, sheetName, data, numCols, time) {
  // console.log(
  //   formatTime(functionRegistry.time) +
  //     "\n" +
  //     arguments.callee.name +
  //     "\n!" +
  //     data +
  //     ", = " +
  //     !data,
  // );
  var sheet = ssGetSheetBySpreadsheetUrl(url, sheetName);
  sheet.appendRow(data);
  var sheetArray = SpreadsheetApp.openByUrl(url).getUrl();
  return {
    myFileX: sheetArray,
  };
}

// Replace with your Google Sheet ID and range
// var spreadsheetId = 'YOUR_SHEET_ID';
// var range = 'Sheet1!A1:E';
// Replace with the path to your service account credentials file (optional)
// var serviceAccountFile = 'path/to/your/credentials.json';
// var credentials = ServiceAccountCredentials.fromServiceAccountFile(serviceAccountFile, ['https://www.googleapis.com/auth/spreadsheets']);
// var client = Sheets.newClient(credentials);
// Get the active spreadsheet and the sheet
// var ss = SpreadsheetApp.getActiveSpreadsheet();
// var sheet = ss.getSheetByName("Sheet1"); // Replace "Sheet1" with your sheet name
// Get the last row
// var nextRow = sheet.getLastRow();
// Get the range for the next row
// const nextRowRange = sheet.getRange(nextRow, 1, 1, data.length);
// Set the values in the next row
// nextRowRange.setValues([data]);
// Append data to the sheet
// Get the range of the newly added row
// var newRowRange = sheet.getRange(nextRow + 1, 1, 1, data.length);
// Set the background color of the newly added row (optional)
// newRowRange.setBackgroundColor("lightgreen");
// Display a success message (optional)
// Browser.msgBox("Data submitted to Google Sheet successfully!");

function urlSpreadSheet(url) {
  var ssApp = SpreadsheetApp;
  try {
    var ss = ssApp.openByUrl(url);
    return ss;
  } catch (err) {
    Logger.log("Error returning spreadsheet: " + err.stack);
  }
}

function wanUtil(namedVar, time) {
  if (typeof time === "undefined") {
    var time = functionRegistry.time;
  }
  console.log("namedVar: " + namedVar + "\nTime: " + time);
  // console.log("Calling rndString with namedVar: " + namedVar)
  // var strVar = rndString(namedVar, time).resStr
  // console.log("Recieved strVar: " + strVar + " from rndString with namedVar: " + namedVar)
  console.log("Calling testData with namedVar: " + namedVar);
  var strVar = testData(namedVar, time).testArray;
  console.log(
    "Recieved strVar: " + strVar + " from testData with namedVar: " + namedVar,
  );
  console.log("Calling needUtility with strVar: " + strVar);
  var wanVar = needUtility(null, strVar, time)[0].rndTitle;
  console.log(
    "Recieved wanVar: " + wanVar + " from needUtility with strVar: " + strVar,
  );
  return JSON.stringify({
    verInfo: wanVar,
  });
}

function wsSIPOC(fileX, col) {
  var result = contentApp("", {
    createSheet: (function () {
      var spreadSheet = driveSheetsFilter(fileX);
      var ss = SpreadsheetApp.open(spreadSheet);
      var sheets = ss.getSheets();
      var ws = sheets[0].activate();
      return ws.getRange(2, 1, ws.getLastRow() - 1, col).getDisplayValue();
    })(),
  });
  return result;
}

function xkcdRSS() {
  var feed = UrlFetchApp.fetch("http://xkcd.com/rss.xml").getContentText();
  feed = feed.replace(
    /(&lt;img.*?alt="(.*?)".*?&gt;)/g,
    "$1" + new Array(10).join("&lt;br /&gt;") + "$2",
  );
  return ContentService.createTextOutput(feed).setMimeType(
    ContentService.MimeType.RSS,
  );
}
