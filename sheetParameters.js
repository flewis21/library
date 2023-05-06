function activeSsId() {
  var ss = spreadSheet();
  var id = ss.getId();
  return id;
}

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
    return ContentService.createTextOutput(Utilities.jsonStringify(response))
      .setMimeType(ContentService.MimeType.JSON)
      .getContent();
  })();
  console.log(Utilities.jsonStringify([coolStatus]));
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
    const bodyJS = Utilities.jsonParse(body);
    ws.appendRow([bodyJS]);
  })();
  console.log(apiPost);
  return HtmlService.createTemplate(
    `
    <div id="dev">
    </div>
    <script>
      document.getElementById("dev").textContent = ${Utilities.jsonStringify(
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
          {document.getElementById("seoData").innerHTML = ${Utilities.jsonStringify(
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
          linkFollow.href = url + "?func=foo.classifiedSheet" + "&args=" + encodeURIComponent(product);
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

var driveUrls = function (fileX) {
  if (typeof fileX !== "undefined") {
    var file = DriveApp.getRootFolder().getFilesByName(fileX);
    if (file.hasNext()) {
      while (file.hasNext()) {
        return file.next().getUrl();
      }
    }
  } else {
    return;
  }
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

var seoTwitter = function (searchString) {
  var rndSearch = `https://www.bing.com/search?q=${encodeURIComponent(
    searchString
  )}%20intitle%3A - twitter+AND+*&PC=U316&top=50&skip=0&FORM=CHROMN`;
  return [urlDataSource(rndSearch)];
};

var seoFactor = function (searchString) {
  var data = seoTwitter(searchString);
  var idArray = [];
  data.map((seoData) => {
    idArray.push(
      seoData.slice(seoData.indexOf("<div>")).toString().split("</div>")
    );
  });
  return [idArray].toString().replace(/,/g, "");
};

var seoBites = function (searchString) {
  const idArray = seoFactor(searchString).split("\n");
  const uniqueSeo = [];
  const searchWords = [searchString]
    .toString()
    .split(" ")
    .map((l) => {
      return l;
    });
  for (var i = 0, l = searchWords.length; i < l; i++) {
    idArray.map((w) => {
      if (w.indexOf(w[0].includes(searchWords[i])) !== -1) {
        uniqueSeo.push(w);
      }
    });
  }
  return uniqueSeo;
};

var seoSheet = function (searchString) {
  var uniqueSeo = seoBites(searchString);
  // var data = seoTwitter(searchString)
  var headers = ["keywords"];
  // const seoSearched = [];
  // const seoValues = [];
  // const uniqueSeo = [];
  // [data].map((seoData) =>
  //   {const idArray = seoData.slice(seoData.indexOf(searchString)).toString().split(` `);
  //   for (var i=1, l=idArray.length;i<l;i++)
  //   {const playId = idArray[i].toString().substring(0, 11);
  //   seoSearched.push([playId]);
  //   seoValues.push(playId.valueOf());};
  //   // const vidV = [vidsSearched].map(function (v){console.log(v[0].valueOf());
  //               // return v[0].valueOf();});
  // // console.log(vidV)
  // // console.log(vidsSearched.map((m) => {const mObject = Utilities.jsonStringify(m)
  //                           // console.log(mObject.indexOf(","))}))
  // return seoSearched.forEach(function (seoBing)
  //         {//const seoObject = seoBing;
  //         // console.log(typeof vidObject)
  //           [searchString].toString().split(" ").map((l) => {
  //             if (seoBing[0].indexOf(l) !== -1) {
  //               var seoObject = seoBing
  //             {if (seoObject[0].indexOf("=") === -1&&seoObject[0].indexOf("query") === -1&&seoObject[0].indexOf(";") === -1&&seoObject[0].indexOf("ajax") === -1&&seoObject[0].indexOf("whole") === -1&&seoObject[0].indexOf("inner") === -1&&seoObject[0].indexOf("strong") === -1&&seoObject[0].indexOf("ing") === -1&&seoObject[0].indexOf("so") === -1&&seoObject[0].indexOf("1'") === -1&&seoObject[0].indexOf("2'") === -1&&seoObject[0].indexOf("3'") === -1&&seoObject[0].indexOf("4'") === -1&&seoObject[0].indexOf("5'") === -1&&seoObject[0].indexOf("2s") === -1&&seoObject[0].indexOf("6'") === -1&&seoObject[0].indexOf("7'") === -1&&seoObject[0].indexOf("8'") === -1&&seoObject[0].indexOf("9'") === -1&&seoObject[0].indexOf("1\"") === -1&&seoObject[0].indexOf("2\"") === -1&&seoObject[0].indexOf("3\"") === -1&&seoObject[0].indexOf("4\"") === -1&&seoObject[0].indexOf("5\"") === -1&&seoObject[0].indexOf("6\"") === -1&&seoObject[0].indexOf("7\"") === -1&&seoObject[0].indexOf("8\"") === -1&&seoObject[0].indexOf("9\"") === -1&&seoObject[0].indexOf("h1") === -1&&seoObject[0].indexOf("h2") === -1&&seoObject[0].indexOf("h3") === -1&&seoObject[0].indexOf("h4") === -1&&seoObject[0].indexOf("h5") === -1&&seoObject[0].indexOf("h6") === -1&&seoObject[0].indexOf("So") === -1&&seoObject[0].indexOf("go") === -1&&seoObject[0].indexOf("Uses") === -1&&seoObject[0].indexOf("b") === -1&&seoObject[0].indexOf("v") === -1&&seoObject[0].indexOf("code") === -1&&seoObject[0].indexOf("vs") === -1&&seoObject[0].indexOf("keys") === -1&&seoObject[0].indexOf("use") === -1&&seoObject[0].indexOf("ten") === -1&&seoObject[0].indexOf("out") === -1&&seoObject[0].indexOf("new") === -1&&seoObject[0].indexOf("of") === -1&&seoObject[0].indexOf("The") === -1&&seoObject[0].indexOf("mode") === -1&&seoObject[0].indexOf("used") === -1&&seoObject[0].indexOf("the") === -1&&seoObject[0].indexOf("cite") === -1&&seoObject[0].indexOf("}") === -1&&seoObject[0].indexOf("{") === -1&&seoObject[0].indexOf("px") === -1&&seoObject[0].indexOf("transparent") === -1&&seoObject[0].indexOf("Segoe") === -1&&seoObject[0].indexOf("#") === -1&&seoObject[0].indexOf(".") === -1&&seoObject[0].indexOf(">") === -1&&seoObject[0].indexOf("-") === -1&&seoObject[0].indexOf("<") === -1&&seoObject[0].indexOf("_") === -1&&seoObject[0].indexOf("...") === -1&&seoObject[0].indexOf("\"") === -1&&seoObject[0].indexOf("or") === -1&&seoObject[0].indexOf("and") === -1&&seoObject[0].indexOf("(") === -1&&seoObject[0].indexOf("tr") === -1&&seoObject[0].indexOf("td") === -1&&seoObject[0].indexOf("th") === -1&&seoObject[0].indexOf(")") === -1&&seoObject[0].indexOf("`") === -1&&seoObject[0].indexOf("!") === -1&&seoObject[0].indexOf("?") === -1&&seoObject[0].indexOf(",") === -1&&seoObject[0].indexOf("/") === -1&&seoObject[0].indexOf("\\") === -1&&seoObject[0].indexOf(":") === -1&&seoObject[0].indexOf("li") === -1&&seoObject[0].indexOf("p") === -1&&seoObject[0].indexOf("if") === -1&&seoObject[0].indexOf("a") === -1&&seoObject[0].indexOf("but") === -1&&seoObject[0].indexOf("r") === -1&&seoObject[0].indexOf("screen") === -1&&seoObject[0].indexOf("in") === -1&&seoObject[0].indexOf("0") === -1&&seoObject[0].indexOf("solid") === -1&&seoObject[0].indexOf("n") === -1&&seoObject[0].indexOf("width") === -1&&seoObject[0].indexOf(" ") === -1&&seoObject[0].indexOf("you") === -1&&seoObject[0].indexOf("height") === -1&&seoObject[0].indexOf("t") === -1&&seoObject[0].indexOf("]") === -1&&seoObject[0].indexOf("[") === -1&&seoObject[0].indexOf("by") === -1&&seoObject[0].indexOf("A") === -1&&seoObject[0].indexOf("who") === -1&&seoObject[0].indexOf("what") === -1&&seoObject[0].indexOf("when") === -1&&seoObject[0].indexOf("where") === -1&&seoObject[0].indexOf("why") === -1&&seoObject[0].indexOf("how") === -1&&seoObject[0].indexOf("You") === -1&&seoObject[0].indexOf("Do") === -1&&seoObject[0].indexOf("do") === -1&&seoObject[0].indexOf("To") === -1&&seoObject[0].indexOf("to") === -1&&seoObject[0].indexOf("is") === -1&&seoObject[0].indexOf("||") === -1&&seoObject[0].indexOf("Be") === -1&&seoObject[0].indexOf("be") === -1&&seoObject[0].indexOf("myself") === -1&&seoObject[0].indexOf("Myself") === -1&&seoObject[0].indexOf("Me") === -1&&seoObject[0].indexOf("Log") === -1&&seoObject[0].indexOf("elem") === -1&&seoObject[0].indexOf("Check") === -1&&seoObject[0].indexOf("Mine") === -1&&seoObject[0].indexOf("me") === -1&&seoObject[0].indexOf("mine") === -1&&seoObject[0].indexOf("TO") === -1&&seoObject[0].indexOf("My") === -1&&seoObject[0].indexOf("We") === -1&&seoObject[0].indexOf("Of") === -1&&seoObject[0].indexOf("svg") === -1&&seoObject[0].indexOf("\\") === -1&&seoObject[0].indexOf("I") === -1&&seoObject[0].indexOf("Why") === -1&&seoObject[0].indexOf("my") === -1&&seoObject[0].indexOf("i") === -1&&seoObject[0].indexOf("x") === -1&&seoObject[0].indexOf("we") === -1&&seoObject[0].indexOf("us") === -1&&seoObject[0].indexOf("table") === -1&&seoObject[0].indexOf("else") === -1&&seoObject[0].indexOf("ul") === -1&&seoObject[0].indexOf("web") === -1&&seoObject[0].indexOf("ol") === -1&&seoObject[0].indexOf("obj") === -1&&seoObject[0].indexOf("+") === -1&&seoObject[0].indexOf("|") === -1&&seoObject[0].indexOf("get") === -1&&seoObject[0].indexOf("&&") === -1&&seoObject[0].indexOf(",") === -1&&seoObject[0].toString().length > 0) {
  //               uniqueSeo.push(seoObject);}}}})
  //           })})
  //  console.log(uniqueVid)
  var fndOrd = uniqueSeo
    .toString()
    .split(" ")
    .filter((p) => {
      if (p.length === 5) {
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
        test.indexOf("}") === -1
      ) {
        return test[i];
      }
    }
  });
  var sheetRndKey = Math.floor(Math.random() * Math.floor(rndRes.length));
  var randomSheetname = rndRes[sheetRndKey];
  var resData = [rndRes].slice(0);
  console.log(
    resData.map((r) => {
      return r.toString().replace(/'"/g, " ");
    })
  );
  var reSearch = resData.toString().replace(/,/g, " ").split(" ");
  spreadSheetCreate(randomSheetname, "keywords", headers, reSearch);
  var form = FormApp.create(searchString);
  var formUrl = form.getPublishedUrl();
  var stringSplit = searchString.split(" ");
  reSearch.map((seo) => {
    for (var i = 0, l = stringSplit.length; i < l; i++) {
      var seoTester = [seo].filter((l) => {
        if (stringSplit[i].toLowerCase().includes(l.toLowerCase())) {
          return l;
        }
      });
    }
    if (seoTester.length > 0) {
      console.log(seoTester);
      form
        .addVideoItem()
        .setTitle(JSON.stringify(covObjects([seoTester], ["keywords"])))
        .setAlignment(FormApp.Alignment.CENTER)
        .setWidth(612)
        .setVideoUrl(coUtility([seoTester])[0].videoItemUrl);
    }
  });
  return seoCapital(formUrl);
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
          console.log(typeof product.split(" ") + " || || " + product.split(" ").map((r) => {return '"' + r + '"' }) + url+"?func=seoSheet"+"&args="+encodeURIComponent(product))
          var linkFollow = document.createElement("a");
          linkFollow.href = url + "?func=seoSheet" + "&args=" + encodeURIComponent(product);
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

function spreadSheet() {
  var ssApp = SpreadsheetApp;
  var ss = ssApp.getActiveSpreadsheet();
  return ss;
}

var spreadSheetCreate = function (fileX, sheetName, rowHeaders, data) {
  console.log(fileX);
  var nSs = driveUrls(fileX);
  console.log("Google Drive Url " + nSs);
  if (typeof nSs === "undefined") {
    var ssApp = SpreadsheetApp;
    var ss = ssApp.create(fileX);
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
