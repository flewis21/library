function seoKeyword() {
  needPastTime(`lawyer mugs`);
}

function needPastTime(searchString) {
  const videoSearch = urlDataSource(
    `http://www.bing.com/search?q=${encodeURIComponent(
      searchString,
    )}%20intitle%3A - YouTube+AND+*&PC=U316&top=50&skip=0&FORM=CHROMN`,
  );
  // return videoSearch
  const vidsSearched = [];
  const vidValues = [];
  const uniqueVid = [];
  [videoSearch].map((videoId) => {
    const idArray = videoId.slice(videoId.indexOf(`v=`)).toString().split(`v=`);
    for (var i = 1; i < idArray.length; i++) {
      const playId = idArray[i].toString().substring(0, 11);
      vidsSearched.push([playId]);
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
        vidObject[0].indexOf(",") === -1
      ) {
        uniqueVid.push(vid);
      }
    });
  });
  //  console.log(uniqueVid)
  return uniqueVid.sort((a, b) => a - b);
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

function videoPage(search) {
  // var search = "NEWMONT Corp. DE"
  var res = seoSheet(search).keyWords;
  var resRnd = Math.floor(Math.random() * Math.floor(res.length));
  var content = res[resRnd];
  var youPlayer = dtlsMain(content);
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
      return `<tr><td>${geneFrame(
        "https://www.youtube.com/watch?v=" + v[0],
      )}<br /><a class="waves-effect waves-light btn" href="https://www.youtube.com/watch?v=${
        v[0]
      }" target="_blank">${v[0]}</a></td></tr>`;
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
      function onYouTubeIframeAPIReady() 
        {console.log("youtube API ready");
        player1 = new YT.Player('player1', 
          {height: '505',
          width: '585',
          playerVars: 
            {'autoplay': 1,
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
            'cc_load_policy': 1
          },
          events: 
            {'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange,
            'onError': onPlayerError}});}

      var playlistIndex = 0

      // 4. The API will call this function when the video player is ready.
      function onPlayerReady(event) 
        {event.target.loadPlaylist(<?!= myPlayList ?>, ctr);
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
        {if (event.data == YT.PlayerState.UNSTARTED && !done)
          {var youtubeID = event.target.getVideoUrl()
          changeBorderColor(event.data);
          setTimeout(playVideo);
          // done = true;
        }
      else if (event.data == YT.PlayerState.ENDED && !done) 
        {//console.log("load another video");
        player1.loadPlaylist(<?!= myPlayList ?>, ctr);
        ctr++;          
        // setTimeout(player1.loadVideoById(${vidPlaylist()}));
          //setTimeout(nextVideo);
        changeBorderColor(event.data);}
      else if (event.data == YT.PlayerState.PAUSED && !done) 
        {setTimeout(pauseVideo);
        changeBorderColor(event.data);}
      else if (event.data == YT.PlayerState.BUFFERING && !done) 
        {setTimeout(playVideo);
        changeBorderColor(event.data);}
      else if (event.data == YT.PlayerState.VIDEO_CUED && !done) 
        {setTimeout(playVideo);
        changeBorderColor(event.data);}}
      function changeBorderColor(playerStatus) 
        {var color;
        if (playerStatus == -1) 
          {color = "#37474F"; // unstarted = gray
        } else if (playerStatus == 0) 
          {color = "#FFFF00"; // ended = yellow
        } else if (playerStatus == 1) 
          {color = "#33691E"; // playing = green
        } else if (playerStatus == 2) 
          {color = "#DD2C00"; // paused = red
        } else if (playerStatus == 3) 
          {color = "#AA00FF"; // buffering = purple
        } else if (playerStatus == 5) 
          {color = "#FF6DOO"; // video cued = orange
        }
        if (color) 
          {document.getElementById('player1').style.borderColor = color;}}
      function stopVideo() 
        {player1.stopVideo();}
      function getVideoUrl() 
        {player1.getVideoUrl();}
      function setLoop() 
        {player1.setLoop(true);}
      function setShuffle() 
        {player1.setShuffle(true);}
      function playVideo() 
        {player1.playVideo();}
      function nextVideo() 
        {player1.nextVideo();}
      function pauseVideo() 
        {player1.pauseVideo();}
      function onPlayerError()
        {player1.destroy;
        onYouTubeIframeAPIReady();}
    </script>
    <script>document.addEventListener("DOMContentLoaded", function()
      {document.getElementById("reload02").innerHTML = ${result};})</script>
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

function iframeC() {
  return {
    appJs: function create() {
      const serverSide = function (func, args) {
        return new Promise((resolve, reject) => {
          google.script.run
            .withSuccessHandler((result) => {
              resolve(result);
            })
            .withFailureHandler((error) => {
              console.log(document.getElementById("test").innerHTML);
              reject(error);
            })
            .runBoilerplate([func], [args]);
        });
      };
    },
  };
}

function iFC() {
  iframeC().appJs();
}
