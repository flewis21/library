function iFC() {
  return iframeC();
}

function iframeC() {
  var content = HtmlService.createTemplate(`
    <!DOCTYPE html>
      <html>
      <head></head>
      <body>
        <div id="bodyHang">body hang</div>
      </body>
      </html>
  `);
  content.alert = HtmlService.createHtmlOutput(
    `
        <script>
          alert("server side")
        </script>
`,
  ).getContent();
  return content.evaluate().getContent();
  content.serverSide = HtmlService.createHtmlOutput(
    `
        <script>
          function serverSide(func, args) {
            return new Promise((resolve, reject) => {
                  google.script.run
                  .withSuccessHandler(result => {
                    const Route = {};
                    Route.path = function(route, callback) {
                        Route[route] = callback
                      } 
                    Route.path("bHang", resolve);
                    return Route["bHang"](result)
                    })
                  .withFailureHandler(error => {
                      console.log(document.getElementById("test").innerHTML)
                      const Route = {};
                      Route.path = function(route, callback) {
                          Route[route] = callback
                        } 
                      Route.path("bErr", reject);
                      return Route["bErr"](error)
                    })
                  .runBoilerplate([func],[args])
              }
            )
          };
          serverSide("appSort")
          .then((hang) => {
              return hang
            })
        </script>
`,
  ).getContent();
}

function needPastTime(searchString) {
  console.log(
    Math.floor((maxTime - (new Date() % (1000 * 60))) / 1000) +
      "\n" +
      arguments.callee.name +
      "\n!" +
      searchString +
      ", = " +
      !searchString,
  );
  if (typeof time === "undefined") {
    time = start;
  }
  while (typeof fndOrd !== "object") {
    if (typeof searchString === "undefined") {
      var searchString = "influencer";
    }
    const data = UrlFetchApp.fetch(
      `http://www.bing.com/search?q=${encodeURIComponent(searchString)}%20intitle%3A - YouTube+AND+*&PC=U316&top=50&skip=0&FORM=CHROMN`,
      { muteHTTPExceptions: true },
    );
    const videoSearch = data.getContentText();
    // return videoSearch
    const vidsSearched = [];
    const vidValues = [];
    const sorFndOrd = [];
    [videoSearch].map((videoId) => {
      const idArray = videoId
        .slice(videoId.indexOf(`v=`))
        .toString()
        .split(`v=`);
      for (var i = 1; i < idArray.length; i++) {
        const playId = idArray[i].toString().substring(0, 11);
        vidsSearched.push(playId);
        vidValues.push(playId.valueOf());
      }
      // const vidV = [vidsSearched].map(function (v){console.log(v[0].valueOf());
      // return v[0].valueOf();});
      // console.log(vidV)
      // console.log(vidsSearched.map((m) => {const mObject = Utilities.jsonStringify(m)
      // console.log(mObject.indexOf(","))}))
      return vidsSearched.forEach(function (vid) {
        const vidObject = vid;
        // console.log(typeof vidObject)
        if (
          vidObject[0].indexOf("=") === -1 &&
          vidObject[0].indexOf("query") === -1 &&
          vidObject[0].indexOf(";") === -1 &&
          vidObject[0].indexOf("ajax") === -1 &&
          vidObject[0].indexOf("whole") === -1 &&
          vidObject[0].indexOf("inner") === -1 &&
          vidObject[0].indexOf("strong") === -1 &&
          vidObject[0].indexOf("ing") === -1 &&
          vidObject[0].indexOf("brid") === -1 &&
          vidObject[0].indexOf("ctrl") === -1 &&
          vidObject[0].indexOf("location") === -1 &&
          vidObject[0].indexOf("wiki") === -1 &&
          vidObject[0].indexOf("//") === -1 &&
          vidObject[0].indexOf("Html") === -1 &&
          vidObject[0].indexOf("data") === -1 &&
          vidObject[0].indexOf("undefined") === -1 &&
          vidObject[0].indexOf("client") === -1 &&
          vidObject[0].indexOf("/") === -1 &&
          vidObject[0].indexOf("peri") === -1 &&
          vidObject[0].indexOf("ten") === -1 &&
          vidObject[0].indexOf("out") === -1 &&
          vidObject[0].indexOf("new") === -1 &&
          vidObject[0].indexOf("]") === -1 &&
          vidObject[0].indexOf("[") === -1 &&
          vidObject[0].indexOf("\\") === -1 &&
          vidObject[0].indexOf("get") === -1 &&
          vidObject[0].indexOf("&&") === -1 &&
          vidObject[0].indexOf("a.severity") === -1 &&
          vidObject[0].indexOf("b_cont") === -1 &&
          vidObject[0].indexOf(",") === -1 &&
          vidObject[0].indexOf("document.qu") === -1 &&
          vidObject[0].indexOf("1,typeof h!") === -1 &&
          vidObject[0].indexOf("EdgeWorksp") === -1 &&
          vidObject[0].indexOf("{") === -1 &&
          vidObject[0].indexOf("personaI") === -1
        ) {
          sorFndOrd.push(vid);
        }
      });
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

          fndOrd.push(a);
        } else if (a === b && fndOrd.indexOf(a) === -1) {
          if (fndOrd.indexOf(a) > -1) {
            return;
          }

          fndOrd.push(a);
        } else if (b !== a && fndOrd.indexOf(b) === -1) {
          if (fndOrd.indexOf(b) > -1) {
            return;
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
    console.log("needPastTime \n" + fndOrd);
    var randomKey = 0;
    var rndRes = [];
    while (rndRes.length === 0) {
      randomKey = Math.floor(Math.random() * Math.floor(fndOrd.length)); // Math.floor(Math.random());
      rndRes = fndOrd.filter((test) => {
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
            test.indexOf(">") === -1 &&
            test.indexOf("r[1]+r[3],a") === -1 &&
            test.indexOf("EdgeWorksp") === -1 &&
            test.indexOf("new XMLHttp") === -1
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

      //  console.log(uniqueVid)
      return { playList: rndRes.sort((a, b) => a - b) };
    }
  }
}

var pastTime = function (url) {
  const uniqueVid = needPastTime(
    `https://www.bing.com/search?q=%20site%3Ayoutube.com&PC=U316$top=50&$skip=0&FORM=PORE`,
    `v=`,
    0,
    10,
  );
  const randomKey = Math.floor(Math.random() * Math.floor(uniqueVid.length)); // Math.floor(Math.random());
  const videoPlaylist = covObjects(uniqueVid, ["youtubeID"]);
  // const randomKey = Math.floor(Math.random() * (Math.floor(10000)))// Math.floor(Math.random());
  const uniqueKey = [videoPlaylist].entries().next().value;
  console.log(uniqueKey[1][randomKey]);
  // const randomCo = uniqueKey[1][randomKey];
  // const randomTitle = randomCo["youtubeID"];
  // const randomTicker = randomCo["ticker"];
  // const randomCIK = randomCo["cik_str"];
};

function seoKeyword() {
  needPastTime(`lawyer mugs`);
}

function surveyPlayer(searchString, joinString) {
  console.log(
    Math.floor((maxTime - (new Date() % (1000 * 60))) / 1000) +
      "\n" +
      arguments.callee.name +
      "\nsearchString is !" +
      !searchString +
      " = " +
      searchString +
      "\njoinString is !" +
      !joinString +
      " = " +
      joinString,
  );
  //var url = seoSheet(encodeURIComponent(searchString)).url;Youtube Widget
  var eFolder = DriveApp.getFoldersByName("SDTLC").next();
  var folderFile = eFolder.getFilesByName("Code Editor");
  var dataTree = [];
  while (folderFile.hasNext()) {
    var myFile = folderFile.next();
    var currentFileUrl = myFile.getUrl();
    dataTree.push(currentFileUrl);
  }
  var rndFiled = Math.floor(Math.random() * Math.floor(dataTree.length));
  var filed = dataTree[rndFiled];
  if (!searchString && !joinString) {
    var numVarRnd = randNum(arguments.callee.name);
    var arrDRnd = appSort(numVarRnd);
    var searchString = randomSubstance(0, 6, arrDRnd).myNewArr;
    var joinString = [searchString].join("");
  }
  if (!joinString) {
    var joinString = [searchString].join("");
  }
  var uti = dtlsSomeFunction(searchString).playList;
  var idArray = uti.map((piece) => {
    //   console.log(typeof piece)
    if (typeof piece !== "undefined") {
      // console.log("it's " + typeof piece)
      return piece;
    }
  });
  const html =
    HtmlService.createTemplate(`<!DOCTYPE html><html id="test"><head><base target="_parent"></head><body  id="template"><div class="row container"><nav class="col s12 menu-img btn-large z-depth-5 card-panel amber scale-out scale-in" style="font-size: 30px"><div class=""><a href="<?= link ?>" id="linkload01" target="_top"><h1 class="col s12 receipt nav-wrapper deep-purple darken-1 z-depth-5 toolbar_icon toolbar_iconHover scale-transition scale-out scale-in btn-large"  style="font-size: 30px" id="reload01"><?= searchTtile ?></h1></a></div></nav></div><div class="row"><div class="col s12 card-panel amber"><div class=""><div class="col s12 receipt red"><label id="spLab"><strong>Research</strong></label><table class="striped centered highlight responsive-table grey z-depth-5" style="width:100%"><thead></thead><tbody><tr style="justify-content: space-around;overflow: auto;border-radius: 5%;max-width: 100%;height: auto;display: block;margin: auto;"><td style="vertical-align: top;text-align: left"><table class="striped centered highlight responsive-table grey z-depth-5" style="width:100%;height:100%"><tbody><td style="width: 885px; height: 1024px; padding: 0;"><div id="player1"><?!= seoCapital(link) ?></div></td></tbody></table></td></tr></tbody></table><div class="row"><div class="col s12 card-panel l12 m12 receipt red"><div class="z-depth-5 grey toolbar_icon toolbar_iconHover col s12 receipt"><div class="col s12 l12 m12 receipt red"><input style="font-size:18pt;color:green" placeholder="research" class="timepicker flow-text menu-img z-depth-5 card-panel black scale-transition scale-out scale-in receipt btn-large" id="spSearch"  type="search" /></div></div></div></div></div></div></div></div><script>
      // 2. This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement('script');tag.src = "https://www.youtube.com/iframe_api";var firstScriptTag = document.getElementsByTagName('script')[0];firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)
      // 3. This function creates an <iframe> (and YouTube player);after the API code downloads.
      var player1;var ctr = 0;function onYouTubeIframeAPIReady() {console.log("youtube API ready");player1 = new YT.Player('player1', {height: '475',width: '535',playerVars: {'autoplay': 1,'loop': 1,'controls': 0,'rel': 0,'autohide': 1,'playsinline': 0,'mute': 0,'modestbranding': 1,'vq': 'hd1080','rel': 0,'iv_load_policy': 3,'cc_load_policy': 1},events: {'onReady': onPlayerReady,'onStateChange': onPlayerStateChange,'onError': onPlayerError}})};var playlistIndex = 0
      // 4. The API will call this function when the video player is ready.
      function onPlayerReady(event) {event.target.loadPlaylist(<?= myPlayList ?>, ctr);ctr++
        //event.target.loadVideoById({videoId: vidTubeId});console.log("videoId: ")
        event.target.setShuffle();event.target.setLoop();event.target.playVideo()}
      // 5. The API calls this function when the player's state changes.The function indicates that when playing a video (state=1),the player should play for six seconds and then stop.
      var done = false;function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.UNSTARTED && !done) {var youtubeID = event.target.getVideoUrl();changeBorderColor(event.data);setTimeout(playVideo)}
          // done = true;
      else if (event.data == YT.PlayerState.ENDED && !done) {
        //console.log("load another video")
        player1.loadPlaylist(<?!= myPlayList ?>, ctr);ctr++
        // setTimeout(player1.loadVideoById());setTimeout(nextVideo)
        changeBorderColor(event.data)}
      else if (event.data == YT.PlayerState.PAUSED && !done) {setTimeout(pauseVideo);changeBorderColor(event.data)}
      else if (event.data == YT.PlayerState.BUFFERING && !done) {setTimeout(playVideo);changeBorderColor(event.data)}
      else if (event.data == YT.PlayerState.VIDEO_CUED && !done) {setTimeout(playVideo);changeBorderColor(event.data)}};function changeBorderColor(playerStatus) {var color
        if (playerStatus == -1) {color = "#37474F"}; // unstarted = gray
         else if (playerStatus == 0) {color = "#FFFF00"}; // ended = yellow
         else if (playerStatus == 1) {color = "#33691E"}; // playing = green
         else if (playerStatus == 2) {color = "#DD2C00"}; // paused = red
         else if (playerStatus == 3) {color = "#AA00FF"}; // buffering = purple
         else if (playerStatus == 5) {color = "#FF6DOO"}; // video cued = orange
        if (color) {document.getElementById('player1').style.borderColor = color;}};function stopVideo() {player1.stopVideo();};function getVideoUrl() {player1.getVideoUrl();};function setLoop() {player1.setLoop(true);};function setShuffle() {player1.setShuffle(true);};function playVideo() {player1.playVideo();};function nextVideo() {player1.nextVideo();};function pauseVideo() {player1.pauseVideo();};function onPlayerError() {player1.destroy;onYouTubeIframeAPIReady();}</script><script>document.addEventListener("DOMContentLoaded", function() {function serverside(func, args) {return new Promise((resolve, reject) => {google.script.run.withSuccessHandler((result) => {resolve(result)}).withFailureHandler((error) => {reject(error)}).runBoilerplate(func, args)})};var eventG = document.getElementById("linkload01");var eventH = document.getElementById("spSearch");var eventL = document.getElementById("spLab");var eventV = document.getElementById("player1");document.addEventListener("DOMContentLoaded", function() {serverside("mis", link).then((misHome) => {var emPlay = document.getElementById("player1");
        if (emPlay.innerHTML === "") {emplay.innerHTML = misHome}}).catch((er) => {eventL.innerText = er})});eventH.addEventListener("keypress", function(event) {
            // If the user preses the "Enter" key on the keyboard. 
            if (event.key === "Enter")  {const strValue = eventH.value
              if (!strValue) {eventL.innerText = "... Loading";serverside("mis").then((stream) => {
                if (stream) {
                  if (stream.length === 99 || stream.length ===94 || stream.length === 83 || stream.length ===97 || stream.length ===101 || stream.length ===103 || stream.length ===136 || stream.length ===132 || stream.indexOf("&entry") > -1) {eventV.innerHTML = '<iframe class="z-depth-5 card-panel deep-purple darken-1 scale-transition scale-out scale-in btn-large" src="" id="eventRes01" class="menu-img grey darken-4 z-depth-5" style="width: 100%; height: 100%; border: none;" allow="autoplay" allow="encrypted-media" title="Dontime Life Website" frameborder="0" allowfullscreen ></iframe>';document.getElementById("eventRes01").src = stream;eventG.href = stream;eventL.innerText = "Research"}
                  else {eventV.innerHTML = stream;eventG.href = stream;eventL.innerText = "Research"}}}).catch((er) => {eventL.innerText = er})}
              else {document.getElementById("spSearch").value = "";eventL.innerText = "... Loading " + strValue;serverside("mis", [strValue]).then((stream) => {
                  if (stream) {
                    if (stream.length === 99 || stream.length ===94 || stream.length === 83 || stream.length ===97 || stream.length ===101 || stream.length ===103 || stream.length ===136 || stream.length ===132 || stream.indexOf("&entry") > -1) {eventV.innerHTML = '<iframe class="z-depth-5 card-panel deep-purple darken-1 scale-transition scale-out scale-in btn-large" src="" id="eventRes01" class="menu-img grey darken-4 z-depth-5" style="width: 100%; height: 100%; border: none;" allow="autoplay" allow="encrypted-media" title="Dontime Life Website" frameborder="0" allowfullscreen ></iframe>';document.getElementById("eventRes01").src = stream;eventG.href = stream;eventL.innerText = "Research"}
                    else {eventV.innerHTML = stream;eventG.href = stream;eventL.innerText = "Research"}}}).catch((er) => {eventL.innerText = er})}}})})</script></body></html>`);
  html.link = filed;
  html.searchTtile = joinString;
  html.myPlayList = [idArray].sort((a, b) => a - b);
  html.home = getScriptUrl();
  return html.evaluate().getContent();
}
// const randomPlaylist = [];
//   for (var i=0,l=idArray.length;i<l;i++)
//     {const randomVidKey = Math.floor(Math.random() * (Math.floor(idArray.length)))// Math.floor(Math.random());
//   randomPlaylist.push(idArray[randomVidKey])}
// if (randomPlaylist.length === 0){
// return}
// const vidPlaylist = function(){const randomVidKey = Math.floor(Math.random() * (Math.floor(randomPlaylist.length)))// Math.floor(Math.random());
// const videoObject = covObjects(randomPlaylist, ["youtubeID"]);
// const uniqueVidKey = [videoObject].entries().next().value;
// const randomVid = uniqueVidKey[1][randomVidKey];
// if (typeof randomVid === "undefined") {
// return}
// const rVideo = randomVid["youtubeID"];
// return rVideo}
// const randomVideo = vidPlaylist();
// const titleVar = JSON.stringify(searchString);
// const playListVar = JSON.stringify(searchString);
// const videoTable = [searchString].map((v) => {return `<tr><td>${geneFrame("https://www.youtube.com/watch?v=" + v[0])}<br /><a class="waves-effect waves-light btn" href="https://www.youtube.com/watch?v=${v[0]}" target="_blank">${v[0]}</a></td></tr>`}).toString().replace(/,/g, "")
// const result = JSON.stringify(videoTable);
// html.vidTubeId = JSON.stringify(randomVideo);
// html.researchId = randomVideo
// html.link = getScriptUrl() + "?func=surveyPlayer&args=" + joinString

function videoPage(search) {
  // var search = "NEWMONT Corp. DE"
  var res = seoSheet(search).keyWords;
  var resRnd = Math.floor(Math.random() * Math.floor(res.length));
  var content = res[resRnd];
  var youPlayer = videoPlayer(content);
  var content = HtmlService.createTemplate(`
  ${
    contentApp(
      `
    <?!= playerPlayer ?>`,
      { playerPlayer: youPlayer },
    )
    //:contentFile('uiAccess')
  }`); //("\n <? var yourVideos = videoPlayer(\"playlist\", \"UU6DOFpA9UCTgNwJiVX1IOpQ\"); ?><?!= yourVideos ?>");
  return content.getRawContent();
}

function videoPlayer(searchString) {
  //var url = seoSheet(encodeURIComponent(searchString)).url;
  //Youtube Widget
  var uti = sheetSeo(pastSeo(skyNeed(`searchString`)));
  const idArray = uti.map((piece) => {
    console.log(typeof piece);
    if (typeof piece === "undefined") {
      console.log("it's " + typeof piece);
      return;
    } else {
      return piece;
    }
  });
  const randomPlaylist = [];
  for (var i = 0, l = idArray.length; i < l; i++) {
    const randomVidKey = Math.floor(Math.random() * Math.floor(idArray.length)); // Math.floor(Math.random());
    randomPlaylist.push(idArray[randomVidKey]);
  }
  if (randomPlaylist.length === 0) {
    return;
  }
  const vidPlaylist = function () {
    const randomVidKey = Math.floor(
      Math.random() * Math.floor(randomPlaylist.length),
    ); // Math.floor(Math.random());
    const videoObject = covObjects(randomPlaylist, ["youtubeID"]);
    const uniqueVidKey = [videoObject].entries().next().value;
    const randomVid = uniqueVidKey[1][randomVidKey];
    if (typeof randomVid === "undefined") {
      return;
    }
    const rVideo = randomVid["youtubeID"];
    return rVideo;
  };
  const randomVideo = vidPlaylist();
  const titleVar = JSON.stringify(searchString);
  const playListVar = JSON.stringify(randomPlaylist);
  const videoTable = [randomPlaylist]
    .map((v) => {
      return `<tr><td>${geneFrame("https://www.youtube.com/watch?v=" + v[0])}<br /><a class="waves-effect waves-light btn" href="https://www.youtube.com/watch?v=${v[0]}" target="_blank">${v[0]}</a></td></tr>`;
    })
    .toString()
    .replace(/,/g, "");
  const result = JSON.stringify(videoTable);
  const html = HtmlService.createTemplate(`<!DOCTYPE html>
<html id="test">
  <head>
    <base target="_parent">
  </head>
  <body  id="template">
    <div class="row">
        <nav class="col s10 push-s1 push-m1 push-l1 menu z-depth-5 card-panel amber scale-out scale-in" style="font-size: 30px">
          <div class="container">
      <a href="${url}" target="_top">
        <h1 class="col s12 receipt nav-wrapper deep-purple darken-1 z-depth-5 toolbar_icon toolbar_iconHover scale-transition scale-out scale-in btn-large"  style="font-size: 30px" id="reload01">
      <?= searchTtile ?>
    </h1></a></div></nav></div>
      <div class="row">
      <div class="col s10 card-panel amber push-s1 push-m1 push-l1">
      <div class="container">
      <div class="col s12 receipt red">
      <label id="spLab">
        <strong>Research</strong>
      </label>
      <table class="striped centered highlight responsive-table grey z-depth-5" style="width:100%">
        <thead>
          <tr>
            <th>Title</th>
            <th>Videos</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="vertical-align: top;text-align: left">
              <table class="striped centered highlight responsive-table grey z-depth-5" style="width:100%">
                <tbody>
                  <td>
                    <div id="player1"></div>
                  </td>
                </tbody>
              </table>
            </td>
            <td style="text-align: right">
              <table class="striped centered highlight responsive-table grey z-depth-5" style="width:100%">
                <tbody id="reload02">
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="row">
        <div class="col s12 card-panel l12 m12 receipt red">
          <div class="z-depth-5 grey toolbar_icon toolbar_iconHover container col s12 receipt">
            <div class="col s12 l12 m12 receipt red">
              <input style="font-size:18pt;color:green" placeholder="research" class="timepicker flow-text menu-img z-depth-5 card-panel black scale-transition scale-out scale-in receipt btn-large" id="spSearch"  type="search" />
            </div>
          </div>
        </div>
      </div>
      </div></div></div></div>
    <script>
      // 2. This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      var player1;
      var ctr = 0;
      function onYouTubeIframeAPIReady() {
        console.log("youtube API ready");
        player1 = new YT.Player('player1', {
          height: '505',
          width: '585',
          playerVars: {
            'autoplay': 1,
            'loop': 1,
            'controls': 0,
            'rel': 0,
            'autohide': 1,
            'playsinline': 0,
            'mute': 0,
            'modestbranding': 1,
            'vq': 'hd1080',
            'rel': 0,
            'iv_load_policy': 3,
            'cc_load_policy': 1},
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange,
            'onError': onPlayerError}});}

      var playlistIndex = 0

      // 4. The API will call this function when the video player is ready.
      function onPlayerReady(event) {
        event.target.loadPlaylist(<?!= myPlayList ?>, ctr);
        ctr++;
        //event.target.loadVideoById({videoId: <?!= vidTubeId ?>});
        // console.log("videoId: " + ${randomVideo});
        event.target.setShuffle()
        event.target.setLoop()
        event.target.playVideo()}

      // 5. The API calls this function when the player's state changes.
      //    The function indicates that when playing a video (state=1),
      //    the player should play for six seconds and then stop.
      var done = false;
      function onPlayerStateChange(event) 
        {if (event.data == YT.PlayerState.UNSTARTED && !done) {
          var youtubeID = event.target.getVideoUrl()
          changeBorderColor(event.data);
          setTimeout(playVideo)};
          // done = true;
        
      else if (event.data == YT.PlayerState.ENDED && !done) {
        //console.log("load another video");
        player1.loadPlaylist(<?!= myPlayList ?>, ctr);
        ctr++;          
        // setTimeout(player1.loadVideoById(${vidPlaylist()}));
          //setTimeout(nextVideo);
        changeBorderColor(event.data);}
      else if (event.data == YT.PlayerState.PAUSED && !done) {
        setTimeout(pauseVideo);
        changeBorderColor(event.data);}
      else if (event.data == YT.PlayerState.BUFFERING && !done) {
        setTimeout(playVideo);
        changeBorderColor(event.data);}
      else if (event.data == YT.PlayerState.VIDEO_CUED && !done) {
        setTimeout(playVideo);
        changeBorderColor(event.data);}}
      function changeBorderColor(playerStatus) {
        var color;
        if (playerStatus == -1) {
          color = "#37474F"}; // unstarted = gray
         else if (playerStatus == 0) {
          color = "#FFFF00"}; // ended = yellow
         else if (playerStatus == 1) {
          color = "#33691E"}; // playing = green
         else if (playerStatus == 2) {
          color = "#DD2C00"}; // paused = red
         else if (playerStatus == 3) {
          color = "#AA00FF"}; // buffering = purple
         else if (playerStatus == 5) {
          color = "#FF6DOO"}; // video cued = orange
        if (color) {
          document.getElementById('player1').style.borderColor = color;}}
      function stopVideo() {
        player1.stopVideo();}
      function getVideoUrl() {
        player1.getVideoUrl();}
      function setLoop() {
        player1.setLoop(true);}
      function setShuffle() {
        player1.setShuffle(true);}
      function playVideo() {
        player1.playVideo();}
      function nextVideo() {
        player1.nextVideo();}
      function pauseVideo() {
        player1.pauseVideo();}
      function onPlayerError() {
        player1.destroy;
        onYouTubeIframeAPIReady();}
    </script>
    <script>document.addEventListener("DOMContentLoaded", function() {
        function serverside(func, args) {
          return new Promise((resolve, reject) => {
            google.script.run
            .withSuccessHandler((result) => {
                resolve(result)})
            .withFailureHandler((error) => {
                reject(error)})
            .runBoilerplate(func, args)})};
        var surveyTube = document.getElementById("spSearch")
        surveyTube.addEventListener('keypress', function(event) {
          // If the user preses the "Enter" key on the keyboard. 
          if (event.key === "Enter")  {
          const results = document.getElementById("spSearch")
          const strValue = results.value
          if (!strValue) {
            document.getElementById("spLab").innerText = "... Loading"
            serverside("surveyPlayer")
            .then((stream) => {
              if (stream) {
                document.getElementById("spLab").innerText = ""}
              else {
                document.getElementById("spLab").innerText =  JSON.stringify(e)}})
            .catch((er) => {
              console.log(er)
              document.getElementById("spLab").innerText =  JSON.stringify(er)})}
        results.addEventListener("change",(e) => {
          var cap = e.target.value
          document.getElementById("spSearch").value = ""
          document.getElementById("spLab").innerText = "... waiting for " + strValue
          serverside("surveyPlayer", [cap])
          .then((html) => {
            if (html) {
              // User clicked "No" or X in the title bar.
              document.getElementById("spLab").innerText = ""}})
          .catch((er) => {
            console.log(er)
            document.getElementById("spLab").innerText =  JSON.stringify(er)})})}})
      document.getElementById("reload02").innerHTML = ${result};})</script>
  </body>
</html>`);
  html.vidTubeId = JSON.stringify(randomVideo);
  html.researchId = randomVideo;
  html.searchTtile = searchString;
  html.myPlayList = [playListVar].sort((a, b) => a - b);
  return html.evaluate().getContent();
}
// console.log(JSON.stringify(randomPlaylist[0][randomVidKey]))
// const rdmIdArray = Utilities.jsonStringify([randomPlaylist])
// const plVidKey = Math.floor(Math.random() * (Math.floor(randomPlaylist.length)))// Math.floor(Math.random());
// const playVid = Utilities.jsonStringify(randomPlaylist[0][plVidKey])}

// serverSide('youTube', [])
// .then((content) => {document.getElementById('template').innerHTML = content})
// .catch((error) => {console.log(error)});
// serverSide('checkOnDay', [])
// .then((content) =>
// {document.getElementById('checkOnDay').addEventListener('click', userClicked);
//   function userClicked()
//         {document.getElementById('template').innerHTML = content}})
// .catch((error) => {console.log(error)});

// serverSide('onYouTubeIframeAPIReady', ['', ''])
// .then((content) =>
// {document.getElementById('mainIndex').addEventListener('click', userClicked);
//   function userClicked()
//         {document.getElementById('template').innerHTML = content}})
// .catch(
//     (error) => {console.log(error)});

// function iframeC() {
//   return JSON.stringify({
//     appJs:
//       function create() {
//       function serverSide(func, args) {
//         return new Promise((resolve, reject) => {
//             HtmlService.createTemplate(`
//             <script>
//               google.script.run
//               .withSuccessHandler(result => {
//                 const Route = {};
//                 Route.path = function(route, callback) {
//                     Route[route] = callback
//                   }
//                 Route.path("bHang", ${resolve});
//                 return Route["bHang"](result)
//                 })
//               .withFailureHandler(error => {
//                   console.log(document.getElementById("test").innerHTML)
//                   const Route = {};
//                   Route.path = function(route, callback) {
//                       Route[route] = callback
//                     }
//                   Route.path("bErr", ${reject});
//                   return Route["bErr"](error)
//                 })
//               .runBoilerplate(${[func]},${[args]})
//             </script>`).evaluate().asTemplate()
//           }
//         )
//       };
//       JSON.stringify(serverSide("appSort")
//       .then((hang) => {
//           return hang
//         }))
//       }
//     ,
//   })
// }

var vidPlaylist = function (tunPlay) {
  console.log(
    Math.floor((maxTime - (new Date() % (1000 * 60))) / 1000) +
      "\n" +
      arguments.callee.name +
      "\n!" +
      tunPlay +
      ", = " +
      !tunPlay,
  );
  var listGen = objectOfS(
    ["parameter"],
    [[["func", arguments.callee.name]]],
    Math.floor((maxTime - (new Date() % (1000 * 60))) / 1000),
  ).parameter["func"];
  var noList = [];
  while (noList.length < 3) {
    var noVid = substanceVegas(
      0,
      [listGen].toString().length,
      [listGen].toString().split(""),
    );
    noList.push(noVid);
  }
  tunPlay
    ? (randomPlaylist = needPastTime(tunPlay).map((itemList) => {
        if (itemList) {
          if (!listObj) {
            var listObj = [];
          } else {
            listObj.push(itemList);
          }
        }
        return listObj;
      }))
    : (randomPlaylist = noList);
  // return console.log(randomPlaylist)
  console.log(arguments.callee.name + ": \nRecieved: " + randomPlaylist);
  var randomVidKey = Math.floor(
    Math.random() * Math.floor(randomPlaylist.length),
  );
  var playListSorted = randomPlaylist.sort((a, b) => a - b);
  console.log(
    "vidPlaylist: \nDeclaring videoObject = covObjects(" +
      playListSorted +
      ",[youtubeID])",
  );
  var videoObject = covObjects(playListSorted, ["youtubeID"]);
  console.log(
    "vidPlaylist: \nRecieved" +
      JSON.stringify(videoObject) +
      " from  declared variable videoObject = covObjects(" +
      playListSorted +
      ",[youtubeID])",
  );
  if (typeof videoObject["youtubeID"] !== "undefined") {
    var uniqueVidKey = [videoObject].entries().next().value;
    var randomVid = uniqueVidKey[1][randomVidKey];
    var rVideo = randomVid["youtubeID"];
    var randomVideo =
      rVideo ||
      playListSorted[
        Math.floor(Math.random() * Math.floor(playListSorted.length))
      ];
  }
  var youtubeUrl = "http://www.youtube.com/watch?v=" + randomVideo;
  // return console.log({
  //   videoItem: randomVideo,
  //   videoItemUrl: youtubeUrl,
  //   playlistArr: playListSorted})
  return {
    videoItem: randomVideo,
    videoItemUrl: youtubeUrl,
    playlistArr: playListSorted,
  };
};
