function activeSsId() {
  var ss = spreadSheet();
  var id = ss.getId();
  return id;
}

var bingSWF = function (searchString, time) {
  // var searchString = "oa"
  if (typeof searchString !== "undefined") {
    var searchString = `https://www.bing.com/search?q=filetype%3A(ppt swf pptx pdf)+AND+*+${encodeURIComponent(searchString)}&PC=U316&top=50&skip=0&FORM=CHROMN`;
    var data = [
      urlDataSource(searchString, { muteHttpExceptions: true }, time),
    ];
    var resDATA = data.indexOf("SERP");
    var dataSplit = data.slice(resDATA).toString().split("SERP");
    var httpIndex = [dataSplit].join("").indexOf("https");
    var bill = [dataSplit].join("").split("https");
    var playBill = [bill].join("").split(" ");
    const table = data.slice(data.indexOf("SERP")).toString().split("SERP");
    const pong = table.map((ping) => {
      return ping.substring(0);
    });
    return {
      myPong: pong.toString().split(","),
      myPlay: playBill,
    };
  }
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
        var elaspedTime = new Date() - time;
        var timeToExecute = maxTime - elaspedTime;
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
  const searchWords = [searchString]
    .toString()
    .split(" ")
    .map((l) => {
      var elaspeTime = new Date() - time;
      console.log(
        "searchString: " +
          searchString +
          "\nl: " +
          l +
          "\nelaspeTime: " +
          elaspeTime,
      );
      return l;
    });
  for (var i = 0, l = searchWords.length; i < l; i++) {
    idArray.map((w) => {
      // var elaspeTime = new Date() - time
      // console.log("w: \nelaspeTime: " + elaspeTime)
      if (w !== "") {
        if (w.indexOf(w[0].includes(searchWords[i])) !== -1) {
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
                <div id="divSEOC" class="video-container grey flow-text" style="clear: both;overflow-y: auto;overflow-x: hidden;text-align: center">
                    <iframe 
                      class="z-depth-5 card-panel deep-purple darken-1 scale-transition scale-out scale-in btn-large" 
                      src=${url}
                      id="w3Res"
                      width="100%"
                      height="100%"
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
  return {
    factorData: factorArray,
  };
};

var seoIndex = function (searchWord) {
  if (typeof searchWord === "undefined") {
    searchWord = "Nelly Furtado";
  }
  var infoLink = seoSheet([searchWord].join("").toLowerCase()).keyWords;
  var arrInfo = [infoLink].join("");
  var infoSP = arrInfo.split(",");
  var plaListNum = Math.floor(Math.random() * Math.floor(infoSP.length));
  var story = infoSP[plaListNum];
  // var pageArray = []
  // var page =infoSP.map((tv) => {
  //   var listItem = seoPastTime(tv).playList
  //   var plaListNum = Math.floor(Math.random() * Math.floor(listItem.length))
  //   var rndListItem = [listItem][plaListNum]
  //   pageArray.push(rndListItem)
  //   })
  //   var story = pageArray[Math.floor(Math.random() * Math.floor(pageArray.length))]
  return seoCapital(dtlsPict(story));
};

var seoPastTime = function (searchString, time) {
  if (typeof time === "undefined") {
    time = start;
  }
  while (typeof fndOrd !== "object") {
    var uniqueVid = seoYoutube(searchString, time).myIdArr;
    var sorFndOrd = uniqueVid.filter((vidObject) => {
      var elaspeTime = new Date() - time;
      var timeToExecute = maxTime - elaspeTime;
      if (
        vidObject.length === 11 &&
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
        vidObject.indexOf("document.qu") === -1 &&
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
        vidObject.indexOf("localStorag") === -1 &&
        vidObject.indexOf("t.loadEvent") === -1 &&
        vidObject.indexOf("[") === -1 &&
        vidObject.indexOf("a.severity") === -1 &&
        vidObject.indexOf("cont") === -1 &&
        vidObject.indexOf("\\") === -1 &&
        vidObject.indexOf("JSON.parse(") === -1 &&
        vidObject.indexOf("_w._sydConv") === -1 &&
        vidObject.indexOf("o.Prefetchi") === -1 &&
        vidObject.indexOf("get") === -1 &&
        vidObject.indexOf("&&") === -1 &&
        vidObject.indexOf(",") === -1
      ) {
        console.log(
          "vidObject: " +
            vidObject +
            "\nelaspeTime: " +
            elaspeTime +
            "\ntimeToExecute: " +
            timeToExecute,
        );
        return vidObject;
      }
    });
    var i = 0;
    var l = sorFndOrd.length;
    for (i, l; i < l; i++) {
      var fndOrd = [];
      sorFndOrd.sort((a, b) => {
        if (a !== b && fndOrd.indexOf(a) === -1) {
          if (fndOrd.indexOf(a) > -1) {
            return;
          }
          {
          }

          fndOrd.push(a);
        } else if (a === b && fndOrd.indexOf(a) === -1) {
          if (fndOrd.indexOf(a) > -1) {
            return;
          }
          {
          }

          fndOrd.push(a);
        } else if (b !== a && fndOrd.indexOf(b) === -1) {
          if (fndOrd.indexOf(b) > -1) {
            return;
          }
          {
          }

          fndOrd.push(b);
        }
      });
    }
    if (typeof fndOrd === "object") {
      // console.log(seoArray.playList)
      break;
    }
  }
  // console.log(fndOrd)
  if (fndOrd) {
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

var seoPictTime = function (searchString, time) {
  if (typeof time === "undefined") {
    var time = start;
  }
  if (typeof searchString === "undefined") {
    var searchString = "Drones";
  }
  var altSearch = seoSheet(searchString, time);
  var listSearch = altSearch.keyWords;
  var rndListKey = Math.floor(Math.random() * Math.floor(listSearch.length));
  var testSearch = listSearch[rndListKey];
  if ([testSearch].join("").indexOf(searchString) === -1) {
    searchString = allInvestors().title;
  }
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
      if (a.toLowerCase() === sorFndOrd[i].toLowerCase()) {
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
  // var searchString = "linkedIn"
  var rndSearch = `https://www.bing.com/images/search?q=${encodeURIComponent(searchString)}%20intitle%3A - +AND+*&PC=U316&top=50&skip=0&FORM=CHROMN`;
  var data = [urlDataSource(rndSearch, { muteHttpExceptions: true }, time)];
  // var i = 0
  // var l = [data].join("").split(" ").length
  // for (i,l;i<l;i++) {

  // var res = [data].join("").split(" ")[i]
  // if (res.indexOf("https") > -1) {

  // console.log(res)

  // }

  // }
  var uniqueSeo = data.slice(data.indexOf("src2=")).toString().split("src2=");
  // console.log(uniqueSeo.join("").split('"')[6])
  return uniqueSeo;
};

var seoSheet = function (searchString, time) {
  if (typeof time === "undefined") {
    time = start;
  }
  console.log("Calling seoTwitter with searchString " + searchString);
  var uniqueSeo = seoTwitter(searchString, time).twiData;
  console.log(
    "Recieved uniqueSeo: " +
      uniqueSeo +
      " from seoTwitter with searchString " +
      searchString,
  );
  var fndOrd = uniqueSeo
    .join()
    .split(" ")
    .filter((p) => {
      var elaspeTime = new Date() - time;
      // console.log("p: " + p + "\nelaspeTime: " + elaspeTime)
      if (p.length > 3 && p.length < 18) {
        return p[0] !== "<";
      }
    });
  if (fndOrd.length > 0) {
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
          test.indexOf("description") === -1 &&
          test.indexOf("site") === -1 &&
          test.indexOf("won't") === -1 &&
          test.indexOf("allow") === -1 &&
          test.indexOf("undelivered") === -1 &&
          test.indexOf("here") === -1 &&
          test.indexOf("eventName") === -1 &&
          test.indexOf("input") === -1 &&
          test.indexOf("conversationId") === -1 &&
          test.indexOf("chatBNPData") === -1 &&
          test.indexOf("wlcmData") === -1 &&
          test.indexOf("SydFSCModule") === -1 &&
          test.indexOf("function") === -1 &&
          test.indexOf("can\u0027t") === -1 &&
          test.indexOf("render") === -1 &&
          test.indexOf("webResultsUrls") === -1 &&
          test.indexOf("RespImgInfoArr") === -1 &&
          test.indexOf("RespImgInfoArr") === -1 &&
          test.indexOf("RespImgInfoArr") === -1 &&
          test.indexOf("solid") === -1 &&
          test.indexOf("can\u0027t") === -1 &&
          test.indexOf("during") === -1 &&
          test.indexOf("height") === -1 &&
          test.indexOf("have") === -1 &&
          test.indexOf("about") === -1 &&
          test.indexOf("this") === -1 &&
          test.indexOf("Bing") === -1 &&
          test.indexOf("turn") === -1 &&
          test.indexOf("Click") === -1 &&
          test.indexOf("more") === -1 &&
          test.indexOf("Bing!") === -1 &&
          test.indexOf("page") === -1 &&
          test.indexOf("info") === -1 &&
          test.indexOf("find") === -1 &&
          test.indexOf("params") === -1 &&
          test.indexOf("right") === -1 &&
          test.indexOf("Your") === -1 &&
          test.indexOf("Search") === -1 &&
          test.indexOf("Also") === -1 &&
          test.indexOf("powered") === -1 &&
          test.indexOf("copilot") === -1 &&
          test.indexOf("EntityPanePreview") === -1 &&
          test.indexOf("undefined") === -1 &&
          test.indexOf("twitter") === -1 &&
          test.indexOf("startSettings") === -1 &&
          test.indexOf("Feedback") === -1 &&
          test.indexOf("Start") === -1 &&
          test.indexOf("exploring") === -1 &&
          test.indexOf("body") === -1 &&
          test.indexOf("select") === -1 &&
          test.indexOf("rprData") === -1 &&
          test.indexOf("MWHEEEAP0025010") === -1 &&
          test.indexOf("disableSpriteLogo") === -1 &&
          test.indexOf("MWHEEEAP0025010") === -1
        ) {
          if (JSON.stringify(i) >= 3) {
            break;
          }
          return test[i];
        }
      }
      var elaspeTime = new Date() - time;
      // console.log("test: " + test + "\nelaspeTime: " + elaspeTime)
    });
    var resData = rndRes.slice(0);
    var reSearch = resData.toString().replace(/,/g, " ").split(" ");
  }
  if (typeof searchString !== "object") {
    var stringSplit = [searchString].join("").split(",");
  }
  if (stringSplit) {
    console.log("Calling testData with stringSplit: " + stringSplit);
    var testString = JSON.stringify(testData([stringSplit], time).testArray);
    console.log(
      "Recieved testString: " +
        testString +
        " from testData with stringSplit " +
        stringSplit,
    );
  } else {
    console.log("Calling testData with searchString: " + searchString);
    var testString = JSON.stringify(testData([searchString], time).testArray);
    console.log(
      "Recieved testString: " +
        testString +
        " from testData with searchString " +
        searchString,
    );
  }
  var lowerCaseS = [];
  if (lowerCaseS.indexOf(testString[0]) === -1) {
    [testString].map((increase) => {
      var elaspeTime = new Date() - time;
      console.log(
        "testString: " +
          testString +
          "\nincrease: " +
          increase +
          "\nelaspeTime: " +
          elaspeTime,
      );
      lowerCaseS.push(increase);
    });
  }
  if (reSearch) {
    reSearch.map((seo) => {
      var elaspeTime = new Date() - time;
      // console.log("seo: " + seo + "\nelaspeTime: " + elaspeTime)
      var lowerCaseResearch = seo.toLowerCase();
      for (var i = 0, l = lowerCaseS.length; i < l; i++) {
        if (typeof lowerCaseS[0][i] !== "undefined") {
          var lowerCaseSearchString = lowerCaseS[0][i].toLowerCase();
          if (lowerCaseResearch.includes(lowerCaseSearchString)) {
            if (lowerCaseS.indexOf(seo) === -1) {
              var elaspeTime = new Date() - time;
              // console.log("seo: " + seo + "\nelaspeTime: " + elaspeTime)
              lowerCaseS.push(seo);
            }
          }
        }
      }
    });
  }
  return {
    keyWords: lowerCaseS,
  };
};
// var headers = ["keywords"]
// var sheetRndKey = Math.floor(Math.random() * (Math.floor(rndRes.length)))
// var randomSheetname = searchString || rndRes[sheetRndKey]
// var formRndKey = Math.floor(Math.random() * (Math.floor(rndRes.length)))
// var randomFormname = searchString || rndRes[formRndKey]
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
// url: formUrl,

var seoTwitter = function (searchString, time) {
  if (typeof time === "undefined") {
    time = start;
  }
  var rndSearch = `https://www.bing.com/search?q=${encodeURIComponent(searchString)}%20intitle%3A - twitter+AND+*&PC=U316&top=50&skip=0&FORM=CHROMN`;
  var unFilData = UrlFetchApp.fetch(rndSearch, { muteHttpExceptions: true });
  var data = [unFilData.getContentText()];
  console.log("Calling seoFactor with " + data);
  var idArray = [seoFactor(data, time).factorData].toString().split("\n");
  console.log(
    "Recieved idArray: " + idArray + " from seoFactor with data " + data,
  );
  console.log("Calling seoBites with " + searchString);
  var uniqueSeo = seoBites(searchString, idArray, time);
  console.log(
    "Recieved uniqueSeo: " +
      uniqueSeo +
      " from seoBites with searchString " +
      searchString,
  );
  return {
    twiData: uniqueSeo,
  };
};

var seoYoutube = function (searchString, time) {
  if (typeof time === "undefined") {
    time = start;
  }
  var rndSearch = `http://www.bing.com/search?q=${encodeURIComponent(searchString)}%20intitle%3A - YouTube+AND+*&PC=U316&top=50&skip=0&FORM=CHROMN`;
  var unFilData = UrlFetchApp.fetch(rndSearch, { muteHttpExceptions: true });
  var data = [unFilData.getContentText()];
  var idArray = vidFactor(data, time).vidArray;
  return {
    myIdArr: idArray,
  };
};

var sheetsMaker = function (fileName, folderX, time) {
  if (typeof formsUrls(fileName, folderX, time) !== "undefined") {
    return formsUrls(fileName, folderX, time);
  }
  if (fileName !== "") {
    var newFile = SpreadsheetApp.create(fileName);
    sheetsFileManager(newFile.getId(), folderX, time);
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
  var fileNameList = matchManager("json");
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
  console.log(fileX);
  var nSs = formsUrls(fileX, "Sheets");
  console.log("Google Drive Url " + nSs);
  if (typeof nSs === "undefined") {
    if (fileX) {
      var ss = sheetsMaker(fileX, "Sheets", time);
      console.log(ss.getName());
      var sheet = ss.getSheets()[0].activate();
      console.log(
        "that function: " +
          arguments.callee.caller.name +
          "\nthis function: " +
          arguments.callee.name +
          "\nName of this sheet is " +
          sheet.getName(),
      );
      var ws = sheet.setName(sheetName);
      console.log(
        "that function: " +
          arguments.callee.caller.name +
          "\nthis function: " +
          arguments.callee.name +
          "\nSheet name changed to " +
          ws.getName(),
      );
      console.log(ss.getActiveSheet().getName());
      var headers = [];
      rowHeaders.map((h) => {
        headers.push(h);
      });
      ws.appendRow(headers);
      var dataArray = [];
      data.map((o) => {
        var sheetCol = [o].join("").split(",");
        var sheetArr = sheetCol.map((arr) => {
          return [arr];
        });
        dataArray.push(sheetArr);
      });
      var dataCol = dataArray;
      var daLen = dataArray.length;
      console.log(dataArray + " : " + daLen);
      var dRange = ws.getDataRange().getValues();
      var col = dRange[0].length;
      console.log(col);
      ws.getRange(2, 1, dataArray.length, col).setValues(dataArray);
      var wsRange = ws.getRange(2, 1, dataArray.length, col).getValues();
      console.log(
        "that function: " +
          arguments.callee.caller.name +
          "\nthis function: " +
          arguments.callee.name +
          "\nNew file named " +
          fileX +
          " created!",
      );
      var newFile = formsUrls(fileX, "Sheets");
      return {
        myFileX: newFile,
      };
    }
  } else {
    return {
      myFileX: formsUrls(fileX, "Sheets"),
    };
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

var urlSpreadSheet = function (url) {
  var ssApp = SpreadsheetApp;
  var ss = ssApp.openByUrl(url);
  return ss;
};

var vidFactor = function (data, time) {
  if (typeof time === "undefined") {
    time = start;
  }
  var dataArray = [];
  var idArray = [];
  data.map((vidData) => {
    // var elaspeTime = new Date() - time
    // console.log("vidData: \nelaspeTime: " + elaspeTime)
    dataArray.push(vidData.slice(vidData.indexOf(`v=`)).toString().split(`v=`));
  });
  for (var i = 0, l = dataArray[0].length; i < l; i++) {
    // var elaspeTime = new Date() - time
    // console.log("dataArray[0][i]: " + dataArray[0][i] + "\nelaspeTime: " + elaspeTime)
    idArray.push(dataArray[0][i].toString().substring(0, 11));
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
