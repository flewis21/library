function activeSsId() {
  var ss = spreadSheet();
  var id = ss.getId();
  return id;
}

var bingSWF = function (searchString, time) {
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
  console.log(typeof data);
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
};

var bingNeed = function (searchString, time) {
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
};

var cabDriver = function (e) {
  var res = e || "driver passenger";
  var agendaCal = (function (request) {
    var events = CalendarApp.getEvents(
      new Date(Number([request][0]) * 1000),
      new Date(Number([request][1]) * 1000),
    );
    var result = { available: events.length == 0 };
    return ContentService.createTextOutput(JSON.stringify(result)).setMimeType(
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
    Math.random() * Math.floor(headers.length),
  );
  var dataBody = data.map((r) => {
    return covArrays([[r][0]])[0];
  });
  console.log(dataBody);
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
  console.log(apiPost);
  return HtmlService.createTemplate(
    `
    <div id="dev">
    </div>
    <script>
      document.getElementById("dev").textContent = ${JSON.stringify(agendaCal.getContent())}
    </script>`,
  ).getRawContent();
};

var classifiedCapital = function (searchString, time) {
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
};

var classifiedSheet = function (searchString, time) {
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
};

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
    var ss = ssApp.openById(id);
    return ss;
  }
};

function mis(text) {
  return authLogic(text)
    ? UrlFetchApp.fetch(encodeURI(text)).getContentText()
    : UrlFetchApp.fetch(
        encodeURI("https://avaddc.com/agency/the-paul-rue-agency/4022/"),
      ).getContentText();
}

var needBing = function (searchString, time) {
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
      var resSERP = point.indexOf("SERP");
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
};

var needPong = function (searchString) {
  var rndSearch = `http://www.bing.com/search?q=${encodeURIComponent(searchString)}%20intitle%3A - YouTube+AND+*&PC=U316&top=50&skip=0&FORM=CHROMN`;
  var data = [urlDataSource(rndSearch, null, { muteHttpExceptions: true })];
  var txt = seoBites(searchString, seoFactor(data).split(","));
  console.log(txt.length);
  return {
    myTxt: JSON.stringify(txt),
  };
};

var pastSeo = function (namedVar, time) {
  var seoPlaylist = seoPastTime([namedVar].join(""), time).playList;
  var form = formMaker([namedVar].join("").toUpperCase(), time);
  if (typeof form === "object") {
    fileManager([namedVar].join("").toUpperCase(), "Forms", time);
    seoPlaylist.map((d) => {
      while (d) {
        var elapsedTime = new Date() - time;
        var timeToExecute = maxTime - elapsedTime;
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
          console.log(timeToExecute.valueOf());
          break;
        }
        return;
      }
      return;
    });
  }
  var rndParam = randNum(seoPlaylist);
  return seoPlaylist[rndParam];
};

var pictBing = function (searchString, time) {
  // var searchString =  "Drones"
  if (typeof searchString !== "undefined") {
    const rndSearch = `https://www.bing.com/images/search?q=${encodeURIComponent(searchString)}%20+AND+*&PC=U316&top=50&skip=0&FORM=CHROMN`;
    const search = [
      urlDataSource(rndSearch, { muteHttpExceptions: true }, time),
    ];
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
      var elaspeTime = new Date() - time;
      var timeToExecute = maxTime - elaspeTime;
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
};

var pictFactor = function (data, time) {
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

var rndString = function (inputArray, time) {
  if (typeof time === "undefined") {
    var time = start;
  }
  if (typeof inputArray === "undefined") {
    var inputArray = [01234567].join("").split(",");
  }
  console.log("inputArray: " + inputArray + "\nTime: " + time);
  console.log("Calling testData with inputArray: " + inputArray);
  var testString = testData(inputArray, time).testArray;
  console.log(
    "Recieved testString: " +
      testString +
      " from testData with inputArray: " +
      inputArray,
  );
  // var strArray = testString.join("").split("")
  // console.log("Calling randomSubstance with testString: " + testString)
  // var str = randomSubstance(0,2,testString, null, time).myNewArr
  // console.log("Recieved str: " + str + " from randomSubstance with testString: " + testString)
  return {
    resStr: testString,
  };
};

var seoBites = function (searchString, idArray, time) {
  if (typeof time === "undefined") {
    time = start;
  }
  const uniqueSeo = [];
  const searchWords = [];
  const searchUI = [searchString].join("").split(" ");
  searchUI.map((l) => {
    var elaspeTime = new Date() - time;
    console.log(
      "seoBites: \nsearchString: " +
        searchString +
        "\nl: " +
        l +
        "\nelaspeTime: " +
        elaspeTime,
    );
    searchWords.push(l);
  });
  for (var i = 0, l = searchWords.length; i < l; i++) {
    idArray.map((w) => {
      // var elaspeTime = new Date() - time
      // console.log("w: \nelaspeTime: " + elaspeTime)
      if (w !== "") {
        console.log("seoBites: \n" + w + " !== '': " + w);
        if (w.indexOf(w[0].includes(searchWords[i])) !== -1) {
          console.log(
            "seoBites: \n" +
              w +
              ".indexOf(" +
              w[0] +
              ".includes(" +
              searchWords[i] +
              ")) !== -1: " +
              w.indexOf(w[0].includes(searchWords[i])),
          );
          // var elaspeTime = new Date() - time
          // console.log("w: \nelaspeTime: " + elaspeTime)
          uniqueSeo.push(w);
        }
      }
    });
  }
  return uniqueSeo;
};

var seoCapital = function (url) {
  // const videoSearch = [urlDataSource(url || getUrl(ScriptApp), null, {muteHttpExceptions:true, mode:"no-cors"})];
  // const table = videoSearch.slice(videoSearch.indexOf("SERP")).toString().split("SERP")
  // const pong = table.map((ping)=>{return ping.substring(0)})
  const html = HtmlService.createTemplate(
    `
    <html id="seoCapital">
      <head>
        <base target="_top">
        <meta charset="utf-8">
        <meta name="seoCapital" content="Boilerplate SEO Capital">
        <meta name=viewport content="width=device-width, initial-scale=1">
        <link href="https://fonts.googleapis.com/css?family=Acme" rel="stylesheet">
      </head>
      <body>
      <div class="container">
        <nav>
          <div class="row">
            <div class="col s10 card-panel l12 m12 push-s1">
              <div class="container row valign-wrapper"><?!= rule() ?></div>
                <div id="divSEOC" class="container grey flow-text" style="clear: both;overflow-y: auto;overflow-x: hidden;text-align: center">
                    <iframe 
                      class="z-depth-5 card-panel deep-purple darken-1 scale-transition scale-out scale-in btn-large" 
                      src=${url}
                      id="w3Res"
                      style="width:100%; height:207vh"
                      allow="autoplay"
                      allow="encrypted-media"
                      title="Dontime Life Website"
                      frameborder="0"
                      allowfullscreen
                      ></iframe>
                </div>
              </div>
            </div>
          </nav>
        </div>
      <input type="hidden" value="<?= getUrl(ScriptApp) ?>" id="breakUrl" />
      </body>
    </html>
        `,
  );
  // html.pong = pong.toString().split(",");
  html.research = HtmlService.createHtmlOutput(`
  document.getElementById("w3Search").addEventListener("change", 
    function() {
      var cap = document.getElementById("w3Search").value
      console.log(cap)
    })`);
  html.prefTimeChange = HtmlService.createHtmlOutput(`
      document.getElementById("w3Search").addEventListener("change", 
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
          var prodSearch = document.getElementById("w3Search").value 
          var linkFollow = document.createElement("a");
          linkFollow.href = url + "?func=seoCapital" + "&args=" + encodeURIComponent());
          linkFollow.id = "linkFOLLOW";
          linkFollow.target = "_top";
          document.body.appendChild(linkFollow);
          document.getElementById("linkFOLLOW").click();
          document.getElementById("w3Search").value = ""})()});
      `);
  html.dOMContentLoaded =
    HtmlService.createHtmlOutput(`document.addEventListener("DOMContentLoaded", 
    function() 
      {let timePicker = document.getElementById("breakUrl");
      M.Timepicker.init(timePicker, { defaultTime: "now" })})
      var elems = document.getElementById("breakUrl");
      var instances = M.FormSelect.init(elems);
      `);
  html.recentSearch =
    HtmlService.createHtmlOutput(`document.addEventListener("DOMContentLoaded", homeW3) 
      function homeW3() {
      function serverside(func, args) {
        return new Promise((resolve, reject) => {
          google.script.run
          .withSuccessHandler((result) => {
              resolve(result)})
          .withFailureHandler((error) => {
              console.log(error)
              console.log(document.getElementById("test").innerHTML)
              reject(error)})
          .runBoilerplate([func], [args])})};
        
        const htmlStructure = document.getElementById("divSEOC").innerHTML
        const results = document.getElementById("w3Search")
        const strValue = results.value
        results.addEventListener("change",(e) => 
        {

            var cap = e.target.value
            document.getElementById("w3Search").value = ""
            document.getElementById("divSEOC").innerHTML = "... waiting for " + cap
            serverside("portBing", cap)
            .then((vid) => {

            
              if (vid) {

                    
                      document.getElementById("divSEOC").innerHTML = htmlStructure
                      document.getElementById("w3Res").src = vid;}
              })
            .catch((er) => {

            
              console.log(er)
              document.getElementById("divSEOC").innerHTML = JSON.stringify(er)
              })

            
        })}`);
  console.log(eval(html.recentSearch));
  return html.evaluate().getContent();
};

var seoFactor = function (data, time) {
  if (typeof time === "undefined") {
    time = start;
  }
  var idArray = [];
  data.map((seoData) => {
    // var elaspeTime = new Date() - time
    // console.log("seoData: \nelaspeTime: " + elaspeTime)
    var strDiv = seoData.split("<div>");
    // for (var i=0,l=seoData.length; i<l; i++) {
    // var sliDiv = seoData.slice(strDiv)
    // var spDiv = sliDiv.toString()
    // var arrDiv = spDiv.split("</div>")}
    idArray.push(strDiv.slice(strDiv.indexOf("</div>")));
  });
  var factorArray = [idArray].toString().replace(/,/g, "");
  // console.log("seoFactor: \nvar " + factorArray + " = " + [idArray].toString().replace(/,/g, ''))
  return {
    factorData: factorArray,
  };
};

var seoIndex = function (searchWord) {
  if (typeof searchWord === "undefined") {
    searchWord = "Nelly Furtado";
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

var seoPictTime = function (searchString, time) {
  if (typeof time === "undefined") {
    var time = start;
  }
  if (typeof searchString === "undefined") {
    var searchString = "Drones";
  }
  // console.log("seoPictTime: \n")
  console.log(
    "seoPictTime: \nvar altSearch = seoSheet(" + searchString,
    time + ")",
  );
  var altSearch = seoSheet(searchString, time);
  var listSearch = altSearch.keyWords;
  var rndListKey = Math.floor(Math.random() * Math.floor(listSearch.length));
  var testSearch = listSearch[rndListKey];
  console.log(
    "seoPictTime: \n[" +
      testSearch +
      "].join().indexOf(" +
      searchString +
      ") === " +
      [testSearch].join("").indexOf(searchString),
  );
  if ([testSearch].join("").indexOf(searchString) === -1) {
    searchString = allInvestors().title;
  }
  console.log(
    "seoPictTime: \nvar uniqueVid = seoPictures(" + searchString,
    time + ")",
  );
  var uniqueVid = seoPictures(searchString, time);
  var sorFndOrd = uniqueVid.filter((vidObject) => {
    var elaspeTime = new Date() - time;
    var timeToExecute = maxTime - elaspeTime;
    var i = 0;
    var l = [vidObject].join("").split(" ").length;
    for (i, l; i < l; i++) {
      var res = [vidObject].join("").split(" ")[i];
      if (res.indexOf("https") > -1 && res.indexOf("<!DOCTYPE html>") === -1) {
        return vidObject;
      }
    }

    // console.log("vidObject: " + vidObject + "\nelaspeTime: " + elaspeTime + "\ntimeToExecute: " + timeToExecute)
  });
  var fndOrd = [];
  var i = 0;
  var l = sorFndOrd.length;
  for (i, l; i < l; i++) {
    sorFndOrd.sort((a, b) => {
      // console.log(a)
      console.log(
        "seoPictTime: \n" +
          a +
          ".toLowerCase() === " +
          sorFndOrd[i] +
          ".toLowerCase() " +
          a.toLowerCase() ===
          sorFndOrd[i].toLowerCase(),
      );
      if (a.toLowerCase() === sorFndOrd[i].toLowerCase()) {
        console.log(
          "seoPictTime: \nfndOrd.indexOf(" + a + ") > -1 " + fndOrd.indexOf(a),
        );
        if (fndOrd.indexOf(a) > -1) {
          return;
        }
        {
        }

        fndOrd.push(a);
      }
    });
  }
  // console.log(fndOrd)
  if (fndOrd) {
    const randomKey = Math.floor(Math.random() * Math.floor(fndOrd.length)); // Math.floor(Math.random());
    var rndRes = fndOrd.filter((test) => {
      var elaspeTime = new Date() - time;
      var timeToExecute = maxTime - elaspeTime;
      for (var i = 0, l = randomKey; i < l; i++) {
        console.log(
          "seoPictTime: \ntest.indexOf(" +
            "tse4.mm.bing.net" +
            ") > -1 " +
            test.indexOf("tse4.mm.bing.net"),
        );
        if (test.indexOf("tse4.mm.bing.net") > -1) {
          if (JSON.stringify(i) >= 3) {
            break;
          }
          var imgUrl = [test].join("").split('"')[1];
          return imgUrl;
        }
      }
      // console.log("test: " + test + "\nelaspeTime: " + elaspeTime + "\ntimeToExecute: " + timeToExecute)
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
    return {
      playList: rndRes.sort((a, b) => a - b),
    };
  } else {
    return {
      playList: {},
    };
  }
};
// var form = formMaker(searchString)
// fileManager(searchString, "Forms")
// var lowerCaseS = seoSheet(searchString).keyWords
// lowerCaseS.map((b) => {
// console.log(b + "</></></></></></>" + JSON.stringify(covObjects([[b]], ["keywords"])))
// return form.addVideoItem().setTitle(JSON.stringify(covObjects([[b]], ["keywords"]))).setAlignment(FormApp.Alignment.CENTER).setWidth(612).setVideoUrl(needUtility(b)[0].videoItemUrl)})
// var formUrl = form.getPublishedUrl()
// url: formUrl

var seoPictures = function (searchString, time) {
  if (typeof searchString === "undefined") {
    var searchString = "linkedIn";
  }
  var rndSearch = `https://www.bing.com/images/search?q=${encodeURIComponent(searchString)}%20intitle%3A - +AND+*&PC=U316&top=50&skip=0&FORM=CHROMN`;
  // console.log("seoPictures: \n")
  console.log(
    "seoPictures: \nvar data = [urlDataSource(" + rndSearch,
    { muteHttpExceptions: true },
    time + ")]",
  );
  var data = [urlDataSource(rndSearch, { muteHttpExceptions: true }, time)];
  // var i = 0
  // var l = [data].join("").split(" ").length
  // for (i,l;i<l;i++) {

  // var res = [data].join("").split(" ")[i]
  // if (res.indexOf("https") > -1) {

  // console.log(res)

  // }

  // }
  console
    .log(
      "seoPictures: \nvar uniqueSeo = data.slice(" +
        data.indexOf(" + 'src2=' + "),
    )
    .toString()
    .split(" + 'src2=' + " + ")");
  var uniqueSeo = data.slice(data.indexOf("src2=")).toString().split("src2=");
  // console.log(uniqueSeo.join("").split('"')[6])
  return uniqueSeo;
};

var seoTwitter = function (searchString, time) {
  if (typeof time === "undefined") {
    time = start;
  }
  if (typeof searchString === "undefined") {
    var searchString = "love";
  }
  // var rndSearch = `https://www.bing.com/search?q=${encodeURIComponent(searchString)}%20intitle%3A - twitter+AND+*&PC=U316&top=50&skip=0&FORM=CHROMN`
  // var unFilData = UrlFetchApp.fetch(rndSearch,{muteHttpExceptions:true})
  // var data = [unFilData.getContentText()]
  var data = [];
  var foldCounter = 0;
  // console.log("seoTwitter: \nDeclaring foldData = folderManager()")
  var foldData = folderManager();
  // console.log(data.length)
  while (data.length === 0) {
    // console.log(data.length)
    // console.log(foldData[foldCounter])
    var minFold = fileFold(foldData[foldCounter], searchString);
    // console.log("seoTwitter: \nvar minFold = fileFold(" + foldData[foldCounter], searchString + ")")
    // console.log("seoTwitter: \n data = " + minFold.map((p) => {
    // console.log("fileFold: \nif ([" + p + "].join(" + "" + ").toLowerCase().includes([" + searchString +"].join(" + "" + ").toLowerCase())) = " + "\n" + [p].join("").toLowerCase().includes([searchString].join("").toLowerCase()) + " return " + p);
    // if ([p].join("").toLowerCase().includes([searchString].join("").toLowerCase()))
    // return p
    // }))
    data = minFold.filter((p) => {
      if (p === searchString) {
        console.log("seoTwitter: \n" + p + " === " + searchString);
        return p === searchString;
      }
    });
    // console.log(data)
    if (foldData.length > foldCounter) {
      foldCounter++;
    } else {
      break;
    }
  }
  var idArray = [seoFactor(data, time).factorData].toString().split("\n");
  // console.log("seoTwitter: \nvar " + idArray + " = " + [seoFactor(data, time).factorData].toString().split("\n"))
  var uniqueSeo = seoBites(searchString, idArray, time);
  // console.log("seoTwitter: \nvar " + uniqueSeo + " = seoBites(" + searchString,idArray, time + ")")
  return {
    twiData: uniqueSeo,
  };
};

var seoYoutube = function (searchString, time) {
  if (typeof time === "undefined") {
    time = start;
  }
  if (typeof searchString === "undefined") {
    var searchString = "love";
  }
  var rndSearch = `http://www.bing.com/search?q=${encodeURIComponent(searchString)}%20intitle%3A - YouTube+AND+*&PC=U316&top=50&skip=0&FORM=CHROMN`;
  var unFilData = UrlFetchApp.fetch(rndSearch, { muteHttpExceptions: true });
  // console.log("seoYoutube: \nvar " + unFilData + " = UrlFetchApp.fetch(" + rndSearch,{muteHttpExceptions:true} + ")")
  var data = unFilData.getContentText();
  var idArray = vidFactor(data, time).vidArray;
  // console.log("seoYoutube: \nvar " + idArray + " = vidFactor(" + data, time + ").vidArray")
  return {
    myIdArr: idArray,
  };
};

var sheetsMaker = function (fileName, folderX, time) {
  console.log(
    JSON.stringify(this["start"]) +
      "\n" +
      arguments.callee.name +
      "\n!fileName, = " +
      !fileName,
  );
  if (fileName) {
    var unique = 0;
    var oldFile = "https://";
    var newFileName = fileName;
    while (oldFile.indexOf("https://") > 0) {
      oldFile = formsUrls(newFileName, folderX, start);
      console.log(
        JSON.stringify(this["start"]) +
          "\n" +
          arguments.callee.name +
          "\n!oldFile, = " +
          !oldFile,
      );
      newFileName = fileName + unique;
      unique++;
    }
    var newFile = SpreadsheetApp.create(newFileName);
    console.log(
      JSON.stringify(this["start"]) +
        "\n" +
        arguments.callee.name +
        "\n!newFile, = " +
        !newFile
        ? newFile.getName()
        : "",
    );
    sheetsFileManager(newFile.getId(), folderX, start);
    return newFile;
  }
};

var sheetSeo = function (namedVar, time) {
  var pageArray = [];
  var seoArray = seoSheet(namedVar, time).keyWords;
  seoArray.map((tv) => {
    var elaspeTime = new Date() - time;
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
  return {
    sheetObj: pageArray,
  };
};

var sheetsUrls = function (fileX) {
  if (typeof fileX === "undefined") {
    var fileX = "json";
  }
  var fileNameList = matchManager(fileX);
  var fileName = fileNameList.join("");
  var treeRoot = DriveApp.getRootFolder().getFiles();
  while (treeRoot.hasNext()) {
    var trueName = treeRoot.next();
    if (trueName.getMimeType() == "GOOGLE_SHEETS") {
      if (trueName.getName() === fileName) {
        return console.log(trueName.getUrl());
      } else {
        return console.log({});
      }
    }
  }
};

var skyNeed = function (namedVar, time) {
  var wanVar = wanUtil(namedVar, time).verInfo;
  var rndVar = randomSubstance(
    0,
    3,
    [wanVar].sort((a, b) => a - b),
    time,
  );
  var rndSeo = needUtility(rndVar, time)[0].rndTitle;
  return rndSeo;
};

function spreadSheet() {
  var ssApp = SpreadsheetApp;
  var ss = ssApp.getActiveSpreadsheet();
  return ss;
}

var spreadSheetCreate = function (fileX, sheetName, rowHeaders, data, time) {
  console.log(
    JSON.stringify(this["start"]) +
      "\n" +
      arguments.callee.name +
      "\n!fileX, = " +
      !fileX,
  );
  if (!fileX) {
    var fileX = arguments.callee.name;
  }
  if (fileX) {
    // console.log("called function: " + arguments.callee.name + "\nfile name: " + fileX)
    var ss = sheetsMaker(fileX, "Sheets", start);
    // console.log("called function: " + arguments.callee.name + "\nGoogle Drive Url: " + nSs);
    if (ss) {
      // SpreadsheetApp.openByUrl(ss)
      // console.log("called function: " + arguments.callee.name + "\nSheet name: " + ss.getName())
      var sheet = ss.getSheets()[0].activate();
      // console.log("called function: " + arguments.callee.name + "\ncaller function: " + arguments.callee.caller.name + "\nName of this sheet is " + sheet.getName());
      if (!sheetName) {
        var sheetName = arguments.callee.name;
      }
      var ws = sheet.setName(sheetName);
      // console.log("called function: " + arguments.callee.name + "\ncaller function: " + arguments.callee.caller.name + "\nSheet name changed to " + ws.getName());
      // console.log("called function: " + arguments.callee.name + "\nName of active sheet" + ss.getActiveSheet().getName());
      var headers = [];
      if (!rowHeaders) {
        var rowHeaders = arguments.callee.name;
      }
      rowHeaders.map((h) => {
        headers.push(h);
      });
      ws.appendRow(headers);
      var dataArray = [];
      if (!data) {
        var data = arguments.callee.name;
      }
      data.map((o) => {
        var sheetCol = [o].join("").split(",");
        var sheetArr = sheetCol.map((arr) => {
          return [arr];
        });
        dataArray.push(sheetArr);
      });
      // var dataCol = dataArray
      var daLen = dataArray.length;
      console.log(dataArray + " : " + daLen);
      var dRange = ws.getDataRange().getValues();
      var col = dRange[0].length;
      console.log(col);
      var rowDRange = ws.getLastRow();
      var colDRange = ws.getLastColumn();
      ws.getRange(2, 1, [dataArray].length, col).setValues([dataArray]);
      // var wsRange = ws.getRange(2, 1, dataArray.length, col).getValues()
      console.log(
        "Called function: " +
          arguments.callee.name +
          "\nCaller function: " +
          arguments.callee.caller.name +
          "\nNew file with name " +
          fileX +
          " was created!",
      );
      var ssId = ss.getId();
      var ssNewFile = SpreadsheetApp.openById(ssId).getUrl();
      // var newFile = formsUrls(fileX,"Sheets", rowHeaders, data, start)
      return {
        myFileX: ssNewFile,
      };
    }
  } else {
    return {};
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
  if (sheet) {
    var data = sheet.getActiveRange();
    return data;
  }
}

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
  if (sheet) {
    var data = sheet.getDataRange().getValues();
    return data;
  }
}

var ssGetSheet = function (sheetname) {
  var ss = spreadSheet();
  if (ss) {
    var sheet = ss.getSheetByName(sheetname);
    return sheet;
  }
};

var ssGetSheetBySpreadsheetId = function (id, sheetname) {
  if (id) {
    var ss = idSpreadSheet(id);
    var sheet = ss.getSheetByName(sheetname);
    return sheet;
  }
};

var ssGetSheetBySpreadsheetUrl = function (url, sheetname) {
  if (url) {
    var ss = urlSpreadSheet(url);
    var sheet = ss.getSheetByName(sheetname);
    return sheet;
  }
};

var ssSetName = function (randomSheet, sheetname) {
  if (randomSheet) {
    var sheetName = idSpreadSheet(randomSheet.getId())
      .getSheetByName("sheet1")
      .setName(sheetname);
    var sheet = idSpreadSheet(randomSheet.getId()).getSheetByName(sheetName);
    return sheet;
  }
};

function ssSetSheet() {
  var ss = spreadSheet();
  if (ss) {
    var sheet = ss.setActiveSheet();
    return sheet;
  }
}

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

function ssSheet() {
  var ss = spreadSheet();
  if (ss) {
    var sheet = ss.getActiveSheet();
    return sheet;
  }
}

function ssSheetName() {
  var sheet = ssSheet();
  if (sheet) {
    var sheetName = sheet.getSheetName();
    return sheetName;
  }
}

var taxiService = function () {
  const server = http.createServer(requestListener);
  server.listen(port, host, () => {
    console.log(
      `"that function: " + arguments.callee.caller.name + "\nthis function: " + ${arguments.callee.name} + "\nServer is running on http://${host}:${port}`,
    );
  });
};

var tutorial = function (text) {
  var html = contentApp(`
    <body id="screen"></body>
    <script>document.getElementById("screen").innerHTML = ${urlDataSource(encodeURI(text))} || ${urlDataSource(encodeURI("https://avaddc.com/agency/the-paul-rue-agency/4022/"))} </script>`);
  return html;
};

function updateSheet(url, sheetName, data, numCols, time) {
  console.log(
    JSON.stringify(this["start"]) +
      "\n" +
      arguments.callee.name +
      "\n!ed, = " +
      !data,
  );
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
  var sheet = ssGetSheetBySpreadsheetUrl(url, sheetName);
  // var nextRow = sheet.getLastRow();
  // Get the range for the next row
  // const nextRowRange = sheet.getRange(nextRow, 1, 1, data.length);
  // Set the values in the next row
  // nextRowRange.setValues([data]);
  // Append data to the sheet
  sheet.appendRow(data);
  // Get the range of the newly added row
  // var newRowRange = sheet.getRange(nextRow + 1, 1, 1, data.length);
  // Set the background color of the newly added row (optional)
  // newRowRange.setBackgroundColor("lightgreen");
  // Display a success message (optional)
  // Browser.msgBox("Data submitted to Google Sheet successfully!");
  var sheetArray = SpreadsheetApp.openByUrl(url).getUrl();
  return {
    myFileX: sheetArray,
  };
}

var urlSpreadSheet = function (url) {
  var ssApp = SpreadsheetApp;
  var ss = ssApp.openByUrl(url);
  return ss;
};

var vidFactor = function (data, time) {
  if (typeof time === "undefined") {
    time = start;
  }
  if (typeof data !== "object") {
    data = [data];
  }
  var dataArray = [];
  var idArray = [];
  data.map((vidData) => {
    // var elaspeTime = new Date() - time
    // console.log("vidData: \nelaspeTime: " + elaspeTime)
    dataArray.push(vidData.slice(vidData.indexOf(`v=`)).toString().split(`v=`));
    // console.log("vidFactor: \ndataArray.push(vidData.slice(" + vidData.indexOf(`v=`) + ").toString().split(" + `v=` + "))")
  });
  for (var i = 0, l = dataArray[0].length; i < l; i++) {
    // var elaspeTime = new Date() - time
    // console.log("dataArray[0][i]: " + dataArray[0][i] + "\nelaspeTime: " + elaspeTime)
    idArray.push(dataArray[0][i].toString().substring(0, 11));
    // console.log("vidFactor: \nidArray.push(" + dataArray[0][i] + ".toString().substring(" + 0,11 + "))")
  }
  return {
    vidArray: idArray,
  };
};

var wanUtil = function (namedVar, time) {
  if (typeof time === "undefined") {
    var time = start;
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
