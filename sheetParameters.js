function activeSsId() {
  var ss = spreadSheet();
  var id = ss.getId();
  return id;
}

var bingSWF = function (searchString) {
  if (typeof searchString !== "undefined") {
    const videoSearch = [
      urlDataSource(
        `https://www.bing.com/search?q=filetype%3A(ppt swf pptx pdf)+AND+*+${encodeURIComponent(
          searchString
        )}&PC=U316&top=50&skip=0&FORM=CHROMN`,
        null,
        { muteHttpExceptions: true }
      ),
    ];
    const table = videoSearch
      .slice(videoSearch.indexOf("SERP"))
      .toString()
      .split("SERP");
    const pong = table.map((ping) => {
      return ping.substring(0);
    });
    return pong.toString().split(",");
  }
};

var cabDriver = function (e) {
  var res = e || "driver passenger";
  var agendaCal = (function (request) {
    var events = CalendarApp.getEvents(
      new Date(Number([request][0]) * 1000),
      new Date(Number([request][1]) * 1000)
    );
    var result = { available: events.length == 0 };
    return ContentService.createTextOutput(JSON.stringify(result)).setMimeType(
      ContentService.MimeType.JSON
    );
  })();
  var xkcdRSS = (function (e) {
    var feed = UrlFetchApp.fetch("http://xkcd.com/rss.xml").getContentText();
    feed = feed.replace(
      /(&lt;img.*?alt="(.*?)".*?&gt;)/g,
      "$1" + new Array(10).join("&lt;br /&gt;") + "$2"
    );
    return ContentService.createTextOutput(feed).setMimeType(
      ContentService.MimeType.RSS
    );
  })();
  console.log(xkcdRSS.getContent());
  var coolStatus = (function (e) {
    const response = { status: "cool!" };
    return ContentService.createTextOutput(JSON.stringify(response))
      .setMimeType(ContentService.MimeType.JSON)
      .getContent();
  })();
  console.log(JSON.stringify([coolStatus]));
  var data = res.split(" ");
  var dataRandomLength = Math.floor(Math.random() * Math.floor(data.length));
  var headers = data.map((r) => {
    return covArrays([[r][0]])[0];
  })[dataRandomLength];
  console.log(headers);
  var headersRandomLength = Math.floor(
    Math.random() * Math.floor(headers.length)
  );
  var dataBody = data.map((r) => {
    return covArrays([[r][0]])[0];
  });
  console.log(dataBody);
  var dataBodyRandomLength = Math.floor(
    Math.random() * Math.floor(dataBody.length)
  );
  var randomSsName = headers[headersRandomLength];
  var randomSheetName = headers[headersRandomLength];
  var sSheet = spreadSheetCreate(
    randomSsName,
    randomSheetName,
    headers,
    dataBody
  );
  var ssUrl = driveUrls(randomSsName);
  var ws = ssGetSheetBySpreadsheetUrl(ssUrl, randomSheetName);
  var wsData = ws.getDataRange().getValues();
  var apiPost = (function (e) {
    const body = e || "";
    const bodyJS = JSON.parse(body);
    ws.appendRow([bodyJS]);
  })();
  console.log(apiPost);
  return HtmlService.createTemplate(
    `
    <div id="dev">
    </div>
    <script>
      document.getElementById("dev").textContent = ${JSON.stringify(
        agendaCal.getContent()
      )}
    </script>`
  ).getRawContent();
};

var classifiedCapital = function (searchString) {
  const videoSearch = [
    urlDataSource(
      `https://www.bing.com/search?q=${encodeURIComponent(
        searchString
      )}%20+AND+*&PC=U316&top=50&skip=0&FORM=CHROMN`,
      null,
      { muteHttpExceptions: true }
    ),
  ];
  const table = videoSearch
    .slice(videoSearch.indexOf("SERP"))
    .toString()
    .split("SERP");
  const pong = table.map((ping) => {
    return ping.substring(0);
  });
  return pong.toString().split(",");
};

var classifiedSheet = function (searchString) {
  var rndSearch = `https://www.bing.com/search?q=${encodeURIComponent(
    searchString
  )}%20intitle%3A - twitter+AND+*&PC=U316&top=50&skip=0&FORM=CHROMN`;
  var headers = ["keywords"];
  var data = urlDataSource(rndSearch);
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
          {document.getElementById("seoData").innerHTML = ${JSON.stringify(
            searchesCapital
          )};})</script>
    <input type="hidden" value="<?= getUrl(ScriptApp) ?>" id="breakUrl" />
        `
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
      `
  ).getContent();
  return html.evaluate().getContent();
};

var createSheetHeader = function (headers) {
  var headings = data[headers].map(function (val) {
    console.log(val);
    return val.toString().toLowerCase();
  });
  return headings;
};

var idSpreadSheet = function (id) {
  var ssApp = SpreadsheetApp;
  var ss = ssApp.openById(id);
  return ss;
};

function mis(text) {
  return authLogic(text)
    ? UrlFetchApp.fetch(encodeURI(text)).getContentText()
    : UrlFetchApp.fetch(
        encodeURI("https://avaddc.com/agency/the-paul-rue-agency/4022/")
      ).getContentText();
}

var needBing = function (searchString) {
  if (typeof searchString !== "undefined") {
    const search = [
      urlDataSource(
        `https://www.bing.com/search?q=${encodeURIComponent(
          searchString
        )}%20+AND+*&PC=U316&top=50&skip=0&FORM=CHROMN`,
        null,
        { muteHttpExceptions: true }
      ),
    ];
    const table = search.slice(search.indexOf("SERP")).toString().split("SERP");
    const pong = table.map((ping) => {
      return ping.substring(0);
    });
    return pong.toString().split(",");
  }
};

var needPong = function (searchString) {
  var rndSearch = `http://www.bing.com/search?q=${encodeURIComponent(
    searchString
  )}%20intitle%3A - YouTube+AND+*&PC=U316&top=50&skip=0&FORM=CHROMN`;
  var data = [urlDataSource(rndSearch, null, { muteHttpExceptions: true })];
  var txt = seoBites(searchString, seoFactor(data).split(","));
  console.log(txt.length);
  return JSON.stringify(txt);
};

var pastSeo = function (namedVar) {
  return seoPastTime([namedVar].join("")).playList[randNum(namedVar)];
};

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
  spreadSheetCreate(randomSheetname, `Medications`, headers, resData);
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

var rndString = function (inputArray) {
  return randomSubstance(inputArray, 0, 2);
};

var seoBites = function (searchString, idArray) {
  const uniqueSeo = [];
  const searchWords = [searchString]
    .toString()
    .split(" ")
    .map((l) => {
      return l;
    });
  for (var i = 0, l = searchWords.length; i < l; i++) {
    idArray.map((w) => {
      if (w !== "") {
        if (w.indexOf(w[0].includes(searchWords[i])) !== -1) {
          uniqueSeo.push(w);
        }
      }
    });
  }
  return uniqueSeo;
};

var seoCapital = function (url) {
  const videoSearch = [
    urlDataSource(url || getUrl(ScriptApp), null, {
      muteHttpExceptions: true,
      mode: "no-cors",
    }),
  ];
  const table = videoSearch
    .slice(videoSearch.indexOf("SERP"))
    .toString()
    .split("SERP");
  const pong = table.map((ping) => {
    return ping.substring(0);
  });
  const html = HtmlService.createTemplate(
    `
    <div class="row">
    <div class="col s10 card-panel l12 m12 push-s1">
    <div class="z-depth-5 green toolbar_icon toolbar_iconHover container">
    <div class="col s12 l12 m12">
    <div class="black" id="seoData">
      <?!= pong ?>
    </div></div></div></div></div>
    <div class="row">
    <div class="col s10 card-panel l12 m12 push-s1">
    <div class="z-depth-5 grey toolbar_icon toolbar_iconHover container">
    <div class="col s12 l12 m12">
    <input style="font-size:18pt;color:green" placeholder="research" class="timepicker flow-text menu-img z-depth-5 card-panel black scale-transition scale-out scale-in receipt btn-large" id="prefTime"  type="search" />
    </div></div></div></div>
    <script>
      <?!= dOMContentLoaded ?>
    </script>
    <input type="hidden" value="<?= getUrl(ScriptApp) ?>" id="breakUrl" />
        `
  );
  html.pong = pong.toString().split(",");
  html.research = HtmlService.createHtmlOutput(`
  document.addEventListener("DOMContentLoaded", 
    function() {
      document.getElementById("prefTime").value
    })`);
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
          var prodSearch = document.getElementById("prefTime").value 
          var product = <?!= seoSheet(prodSearch).url ?>;
          console.log(typeof product.split(" ") + " || || " + product.split(" ").map((r) => {return '"' + r + '"' }) + url+"?func=seoSheet"+"&args="+encodeURIComponent(product))
          var linkFollow = document.createElement("a");
          linkFollow.href = url + "?func=dtls" + "&args=" + encodeURIComponent(product);
          linkFollow.id = "linkFOLLOW";
          linkFollow.target = "_top";
          document.body.appendChild(linkFollow);
          document.getElementById("linkFOLLOW").click();})()});
      var elems = document.getElementById("prefTime");
      var instances = M.FormSelect.init(elems, options);
      `
  ).getContent();
  return html.evaluate().getContent();
};

var seoFactor = function (data) {
  var idArray = [];
  data.map((seoData) => {
    idArray.push(
      seoData.slice(seoData.indexOf("<div>")).toString().split("</div>")
    );
  });
  return [idArray].toString().replace(/,/g, "");
};

var seoPastTime = function (searchString, time) {
  var uniqueVid = seoYoutube(searchString);
  var fndOrd = uniqueVid.filter((vidObject) => {
    var elaspeTime = new Date() - time;
    var timeToExecute = maxTime - elaspeTime;
    if (vidObject.length === 11) {
      if (
        vidObject !== '"' &&
        vidObject.toLowerCase !== "http" &&
        vidObject.toLowerCase !== "result" &&
        vidObject.toLowerCase !== "content" &&
        vidObject.toLowerCase !== "data" &&
        vidObject.toLowerCase !== "length" &&
        vidObject.toLowerCase !== "ajax" &&
        vidObject.toLowerCase !== "if" &&
        vidObject.toLowerCase !== "attrib" &&
        vidObject.toLowerCase !== "get" &&
        vidObject.toLowerCase !== "null" &&
        vidObject.toLowerCase !== "saving" &&
        vidObject.toLowerCase !== "location" &&
        vidObject.toLowerCase !== "has" &&
        vidObject.toLowerCase !== "query" &&
        vidObject.toLowerCase !== "res" &&
        vidObject.toLowerCase !== "acc" &&
        vidObject.toLowerCase !== "hybrid" &&
        vidObject.toLowerCase !== "amp" &&
        vidObject.indexOf("=") === -1 &&
        vidObject.indexOf("query") === -1 &&
        vidObject.indexOf(";") === -1 &&
        vidObject.indexOf("ajax") === -1 &&
        vidObject.indexOf("whole") === -1 &&
        vidObject.indexOf("inner") === -1 &&
        vidObject.indexOf("strong") === -1 &&
        vidObject.indexOf("ing") === -1 &&
        vidObject.indexOf("brid") === -1 &&
        vidObject.indexOf("ctrl") === -1 &&
        vidObject.indexOf("location") === -1 &&
        vidObject.indexOf("wiki") === -1 &&
        vidObject.indexOf("//") === -1 &&
        vidObject.indexOf("Html") === -1 &&
        vidObject.indexOf("data") === -1 &&
        vidObject.indexOf("undefined") === -1 &&
        vidObject.indexOf("client") === -1 &&
        vidObject.indexOf("/") === -1 &&
        vidObject.indexOf("peri") === -1 &&
        vidObject.indexOf("ten") === -1 &&
        vidObject.indexOf("out") === -1 &&
        vidObject.indexOf("new") === -1 &&
        vidObject.indexOf("]") === -1 &&
        vidObject.indexOf("[") === -1 &&
        vidObject.indexOf("a.severity") === -1 &&
        vidObject.indexOf("cont") === -1 &&
        vidObject.indexOf("\\") === -1 &&
        vidObject.indexOf("get") === -1 &&
        vidObject.indexOf("&&") === -1 &&
        vidObject.indexOf(",") === -1
      ) {
        return vidObject;
      }
    }
    console.log(
      "vidObject: " +
        vidObject +
        "\nelaspeTime: " +
        elaspeTime +
        "\ntimeToExecute: " +
        timeToExecute
    );
  });
  const randomKey = Math.floor(Math.random() * Math.floor(fndOrd.length)); // Math.floor(Math.random());
  var rndRes = fndOrd.filter((test) => {
    var elaspeTime = new Date() - time;
    var timeToExecute = maxTime - elaspeTime;
    for (var i = 0, l = randomKey; i < l; i++) {
      if (
        test.indexOf("false") === -1 &&
        test.indexOf("var") === -1 &&
        test.indexOf("=") === -1 &&
        test.indexOf(".") === -1 &&
        test.indexOf("(") === -1 &&
        test.indexOf(")") === -1 &&
        test.indexOf("_") === -1 &&
        test.indexOf(";") === -1 &&
        test.indexOf('"') === -1 &&
        test.indexOf("Error") === -1 &&
        test.indexOf("error") === -1 &&
        test.indexOf("Codes") === -1 &&
        test.indexOf("siz23") === -1 &&
        test.indexOf(":") === -1 &&
        test.indexOf("{}") === -1 &&
        test.indexOf("}") === -1 &&
        test.indexOf("<") === -1 &&
        test.indexOf(">") === -1
      ) {
        if (JSON.stringify(i) >= 3) {
          break;
        }
        return test[i];
      }
    }
    console.log(
      "test: " +
        test +
        "\nelaspeTime: " +
        elaspeTime +
        "\ntimeToExecute: " +
        timeToExecute
    );
  });
  // var form = formMaker(searchString)
  // fileManager(searchString, "Forms")
  // var lowerCaseS = seoSheet(searchString).keyWords
  // lowerCaseS.map((b) => {
  // console.log(b + "</></></></></></>" + JSON.stringify(covObjects([[b]], ["keywords"])))
  // return form.addVideoItem().setTitle(JSON.stringify(covObjects([[b]], ["keywords"]))).setAlignment(FormApp.Alignment.CENTER).setWidth(612).setVideoUrl(needUtility(b)[0].videoItemUrl)})
  // var formUrl = form.getPublishedUrl()
  var rndSort = [];
  for (var i = 0, l = rndRes.length; i < l; i++) {
    rndSort.push(
      rndRes.filter((o) => {
        return o !== rndRes[i];
      })
    );
  }
  var rndKind = rndSort.toString().split(" ").reverse().pop().split(",");
  return {
    playList: rndKind.sort((a, b) => a - b),
    // url: formUrl
  };
};

var seoSheet = function (searchString) {
  var uniqueSeo = seoTwitter(searchString);
  // var headers = ["keywords"]
  var fndOrd = uniqueSeo
    .toString()
    .split(" ")
    .filter((p) => {
      if (p.length > 3 && p.length < 18) {
        return p[0] !== "<";
      }
    });
  const randomKey = Math.floor(Math.random() * Math.floor(fndOrd.length)); // Math.floor(Math.random());
  var rndRes = fndOrd.filter((test) => {
    for (var i = 0, l = randomKey; i < l; i++) {
      if (
        test.indexOf("false") === -1 &&
        test.indexOf("var") === -1 &&
        test.indexOf("=") === -1 &&
        test.indexOf(".") === -1 &&
        test.indexOf("(") === -1 &&
        test.indexOf(")") === -1 &&
        test.indexOf("_") === -1 &&
        test.indexOf(";") === -1 &&
        test.indexOf('"') === -1 &&
        test.indexOf("Error") === -1 &&
        test.indexOf("error") === -1 &&
        test.indexOf("Codes") === -1 &&
        test.indexOf("siz23") === -1 &&
        test.indexOf(":") === -1 &&
        test.indexOf("{}") === -1 &&
        test.indexOf("}") === -1 &&
        test.indexOf("<") === -1 &&
        test.indexOf(">") === -1 &&
        test.indexOf("0?void") === -1 &&
        test.indexOf("12H7a3") === -1 &&
        test.indexOf("6H13ZM7") === -1 &&
        test.indexOf("2zm0") === -1 &&
        test.indexOf("null") === -1 &&
        test.indexOf("return") === -1 &&
        test.indexOf("%eSearch") === -1 &&
        test.indexOf("#fbpgdg") === -1 &&
        test.indexOf("fbpkgiid") === -1 &&
        test.indexOf("'undefined'") === -1 &&
        test.indexOf("bepcfg") === -1 &&
        test.indexOf("instanceof") === -1 &&
        test.indexOf("passed") === -1 &&
        test.indexOf("element") === -1 &&
        test.indexOf("0v2ZM3") === -1 &&
        test.indexOf("1-1-1H0a3") === -1 &&
        test.indexOf("13V3H0v10h2Zm1") === -1 &&
        test.indexOf("14H3v2h10v-2ZM2") === -1 &&
        test.indexOf("serp") === -1 &&
        test.indexOf("Identity") === -1 &&
        test.indexOf("else") === -1 &&
        test.indexOf("errd") === -1 &&
        test.indexOf("'Ref") === -1 &&
        test.indexOf("Rewards") === -1 &&
        test.indexOf("payload") === -1 &&
        test.indexOf("eventData") === -1 &&
        test.indexOf("else") === -1 &&
        test.indexOf("root") === -1 &&
        test.indexOf("'noresult'") === -1 &&
        test.indexOf("muid") === -1 &&
        test.indexOf("payload") === -1 &&
        test.indexOf("eventObj") === -1 &&
        test.indexOf("eventType") === -1 &&
        test.indexOf("handler") === -1 &&
        test.indexOf("throw") === -1 &&
        test.indexOf("remove") === -1 &&
        test.indexOf("typeof") === -1 &&
        test.indexOf("failed") === -1 &&
        test.indexOf("removed") === -1 &&
        test.indexOf("from") === -1 &&
        test.indexOf("your") === -1 &&
        test.indexOf("Init") === -1 &&
        test.indexOf("parachuteSuccess") === -1 &&
        test.indexOf("contentType") === -1 &&
        test.indexOf("postBody") === -1 &&
        test.indexOf("quick") === -1 &&
        test.indexOf("execute") === -1 &&
        test.indexOf("bind") === -1 &&
        test.indexOf("toggle") === -1 &&
        test.indexOf("true") === -1 &&
        test.indexOf("callback") === -1 &&
        test.indexOf("load") === -1 &&
        test.indexOf("allow-popups") === -1 &&
        test.indexOf("allow-same-origin") === -1 &&
        test.indexOf("config") === -1 &&
        test.indexOf("match") === -1 &&
        test.indexOf("name") === -1 &&
        test.indexOf("accLinkParams") === -1 &&
        test.indexOf("successFunc") === -1 &&
        test.indexOf("status") === -1 &&
        test.indexOf("timestamp") === -1 &&
        test.indexOf("impressionGuid") === -1 &&
        test.indexOf("eventToLog") === -1 &&
        test.indexOf("pageType") === -1 &&
        test.indexOf("explicitTimeStamp") === -1 &&
        test.indexOf("DynScopesDropdown") === -1 &&
        test.indexOf("AwayTimeThreshold") === -1 &&
        test.indexOf("contains") === -1 &&
        test.indexOf("these") === -1 &&
        test.indexOf("logEvent") === -1 &&
        test.indexOf("search") === -1 &&
        test.indexOf("eventName") === -1
      ) {
        if (JSON.stringify(i) >= 3) {
          break;
        }
        return test[i];
      }
    }
  });
  // var sheetRndKey = Math.floor(Math.random() * (Math.floor(rndRes.length)))
  // var randomSheetname = searchString || rndRes[sheetRndKey]
  var resData = rndRes.slice(0);
  var reSearch = resData.toString().replace(/,/g, " ").split(" ");
  // var formRndKey = Math.floor(Math.random() * (Math.floor(rndRes.length)))
  // var randomFormname = searchString || rndRes[formRndKey]
  var stringSplit = searchString.split(" ");
  var lowerCaseS = [];
  testData([stringSplit]).map((increase) => {
    if (lowerCaseS.indexOf(increase) === -1) {
      lowerCaseS.push(increase);
    }
  });
  reSearch.map((seo) => {
    var lowerCaseResearch = seo.toLowerCase();
    for (var i = 0, l = lowerCaseS.length; i < l; i++) {
      if (typeof lowerCaseS[0][i] !== "undefined") {
        var lowerCaseSearchString = lowerCaseS[0][i].toLowerCase();
        if (lowerCaseResearch.includes(lowerCaseSearchString)) {
          if (lowerCaseS.indexOf(seo) === -1) {
            lowerCaseS.push(seo);
          }
        }
      }
    }
  });
  // var form = formMaker(randomFormname)
  // fileManager(randomFormname, "Forms")
  // var ss = sheetsMaker(randomFormname)
  // fileManager(randomFormname, "Sheets")
  // if (typeof form === "object") {
  // var headForms = []
  // lowerCaseS.map((b) => {
  // if (globalThis[b]) {
  // console.log(globalThis[b].toString())
  // console.log(b + "</></></></></></>" + JSON.stringify(covObjects([[b]], ["keywords"])))
  // headForms.push(b)
  // return //form.addParagraphTextItem().setTitle(JSON.stringify(covObjects([[b]], ["keywords"]))).setHelpText(globalThis[b].toString())
  // }
  // else {
  // console.log(b + "</></></></></></>" + JSON.stringify(covObjects([[b]], ["keywords"])))
  // headForms.push(b)
  // return //form.addParagraphTextItem().setTitle(JSON.stringify(covObjects([[b]], ["keywords"]))).setHelpText(b)
  // }
  // })
  // form.setDestination(FormApp.DestinationType.SPREADSHEET, ss.getId())
  // var formUrl = form.getPublishedUrl()
  // }
  // else {
  // var formUrl = form
  // }
  return {
    // url: formUrl,
    keyWords: lowerCaseS,
  };
};

var seoTwitter = function (searchString) {
  var rndSearch = `https://www.bing.com/search?q=${encodeURIComponent(
    searchString
  )}%20intitle%3A - twitter+AND+*&PC=U316&top=50&skip=0&FORM=CHROMN`;
  var data = [urlDataSource(rndSearch, null, { muteHttpExceptions: true })];
  var idArray = seoFactor(data).split("\n");
  var uniqueSeo = seoBites(searchString, idArray);
  return uniqueSeo;
};

var seoYoutube = function (searchString) {
  var rndSearch = `http://www.bing.com/search?q=${encodeURIComponent(
    searchString
  )}%20intitle%3A - YouTube+AND+*&PC=U316&top=50&skip=0&FORM=CHROMN`;
  var data = [urlDataSource(rndSearch, null, { muteHttpExceptions: true })];
  var idArray = vidFactor(data);
  return idArray;
};

var sheetsMaker = function (fileName) {
  if (typeof sheetsUrls(fileName) !== "undefined") {
    return sheetsUrls(fileName);
  }
  var newFile = SpreadsheetApp.create(fileName);
  return newFile;
};

var sheetSeo = function (namedVar) {
  var pageArray = [];
  seoSheet(namedVar).keyWords.map((tv) => {
    pageArray.push(pastSeo(tv));
  });
  return pageArray;
};

var sheetsUrls = function (fileX) {
  var treeRoot = DriveApp.getRootFolder().getFiles();
  while (treeRoot.hasNext()) {
    var trueName = treeRoot.next();
    if (trueName.getMimeType() === "GOOGLE_SHEETS") {
      if (trueName.getName() === fileX) return trueName.getUrl();
    }
  }
};

var skyNeed = function (namedVar) {
  var wanVar = wanUtil(namedVar);
  return needUtility(
    randomSubstance(
      [wanVar].sort((a, b) => a - b),
      0,
      3
    )
  )[0].rndTitle;
};

function spreadSheet() {
  var ssApp = SpreadsheetApp;
  var ss = ssApp.getActiveSpreadsheet();
  return ss;
}

var spreadSheetCreate = function (fileX, sheetName, rowHeaders, data) {
  console.log(fileX);
  var nSs = sheetsUrls(fileX);
  console.log("Google Drive Url " + nSs);
  if (typeof nSs === "undefined") {
    var ss = fileMakerSheets(SpreadsheetApp, fileX);
    console.log(ss.getName());
    var sheet = ss.getSheets()[0].activate();
    console.log("Name of this sheet is " + sheet.getName());
    var ws = sheet.setName(sheetName);
    console.log("Sheet name changed to " + ws.getName());
    console.log(ss.getActiveSheet().getName());
    var headers = [];
    rowHeaders.map((h) => {
      headers.push(h);
    });
    ws.appendRow(headers);
    var dataArray = [];
    data.forEach((o) => {
      dataArray.push([o].toString().split(" "));
    });
    console.log(dataArray + " : " + dataArray.length);
    var col = ws.getDataRange().getNumColumns();
    console.log(col);
    ws.getRange(2, 1, dataArray.length, col).setValues(dataArray);
    console.log("New file named " + fileX + " created!");
    return nSs;
  } else {
    return nSs;
  }
  `else if (typeof nSs !== "undefined"){var ss = ssApp.openByUrl(url);
            ws = ss.getActiveSheet()
    return ws.getRange(1, 1, ws.getLastRow(), ws.getLastColumn()).getValues();
    } else  
    {console.log(typeof nSs);
  if (typeof nSs !== "undefined"){var ss = ssApp.openByUrl(nSs);
        ws = ss.getActiveSheet();
return ws.getRange(1, 1, ws.getLastRow(), ws.getLastColumn()).getValues();} `;
};

function ssActiveRange() {
  var sheet = ssSheet();
  var data = sheet.getActiveRange();
  return data;
}

var ssCell = function (column, rowOffSet, colOffSet) {
  var sheet = ssSheet();
  var data = sheet
    .getRange(sheet.getMaxRows(), column)
    .getNextDataCell(SpreadsheetApp.Direction.UP)
    .offset(rowOffSet, colOffSet);
  return data;
};

var ssDatabase = function (file, sheet, col, headers, data) {
  var result = contentApp("", {
    createProject: (function () {
      var ws = spreadSheetCreate(file, sheet);
      ws.appendRow(headers);
      var dataArray = testData(data);
      ssSheet().getRange(2, 1, dataArray.length, col).setValues(dataArray);
      // for (let i = 0; i < dataArray.length; i++) {
      //   ws.appendRow(dataArray[i]);
      // }
    })(),
  });
  return result;
};

function ssDataRange() {
  var sheet = ssSheet();
  var data = sheet.getDataRange().getValues();
  return data;
}

var ssGetSheet = function (sheetname) {
  var ss = spreadSheet();
  var sheet = ss.getSheetByName(sheetname);
  return sheet;
};

var ssGetSheetBySpreadsheetId = function (id, sheetname) {
  var ss = idSpreadSheet(id);
  var sheet = ss.getSheetByName(sheetname);
  return sheet;
};

var ssGetSheetBySpreadsheetUrl = function (url, sheetname) {
  var ss = urlSpreadSheet(url);
  var sheet = ss.getSheetByName(sheetname);
  return sheet;
};

var ssSetName = function (randomSheet, sheetname) {
  var sheetName = idSpreadSheet(randomSheet.getId())
    .getSheetByName("sheet1")
    .setName(sheetname);
  var sheet = idSpreadSheet(randomSheet.getId()).getSheetByName(sheetName);
  return sheet;
};

function ssSetSheet() {
  var ss = spreadSheet();
  var sheet = ss.setActiveSheet();
  return sheet;
}

var ssSetSheetBySpreadsheetId = function (id) {
  var ss = idSpreadSheet(id);
  var sheet = ss.setActiveSheet();
  return sheet;
};

var ssSetSheetBySpreadsheetUrl = function (url) {
  var ss = urlSpreadSheet(url);
  var sheet = ss.setActiveSheet();
  return sheet;
};

function ssSheet() {
  var ss = spreadSheet();
  var sheet = ss.getActiveSheet();
  return sheet;
}

function ssSheetName() {
  var sheet = ssSheet();
  var sheetName = sheet.getSheetName();
  return sheetName;
}

var taxiService = function () {
  const server = http.createServer(requestListener);
  server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
  });
};

var tutorial = function (text) {
  var html = contentApp(`
    <body id="screen"></body>
    <script>document.getElementById("screen").innerHTML = ${urlDataSource(
      encodeURI(text)
    )} || ${urlDataSource(
    encodeURI("https://avaddc.com/agency/the-paul-rue-agency/4022/")
  )} </script>`);
  return html;
};

var urlSpreadSheet = function (url) {
  var ssApp = SpreadsheetApp;
  var ss = ssApp.openByUrl(url);
  return ss;
};

var vidFactor = function (data) {
  var dataArray = [];
  var idArray = [];
  data.map((vidData) => {
    dataArray.push(vidData.slice(vidData.indexOf(`v=`)).toString().split(`v=`));
  });
  for (var i = 0, l = dataArray[0].length; i < l; i++) {
    idArray.push(dataArray[0][i].toString().substring(0, 11));
  }
  return idArray;
};

var wanUtil = function (namedVar) {
  return needUtility(rndString(namedVar))[0].rndTitle;
};

var wsSIPOC = function (fileName, col) {
  var result = contentApp("", {
    createSheet: (function () {
      var spreadSheet = driveOpenFiles(fileName);
      var ss = SpreadsheetApp.open(spreadSheet);
      var sheets = ss.getSheets();
      var ws = sheets[0].activate();
      return ws.getRange(2, 1, ws.getLastRow() - 1, col).getDisplayValue();
    })(),
  });
  return result;
};
