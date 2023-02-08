function needPastTime(searchString) {
  const videoSearch = urlDataSource(
    `https://www.bing.com/search?q=${encodeURIComponent(
      searchString
    )}%20site%3Ayoutube.com+AND+*&PC=U316$top=50&$skip=0&FORM=CHROMIN`
  );
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
        vidObject[0].indexOf("ten") === -1 &&
        vidObject[0].indexOf("out") === -1 &&
        vidObject[0].indexOf("new") === -1 &&
        vidObject[0].indexOf("]") === -1 &&
        vidObject[0].indexOf("[") === -1 &&
        vidObject[0].indexOf("\\") === -1 &&
        vidObject[0].indexOf("get") === -1 &&
        vidObject[0].indexOf("&&") === -1 &&
        vidObject[0].indexOf(",") === -1
      ) {
        uniqueVid.push(vid);
      }
    });
  });
  //  console.log(uniqueVid)
  return uniqueVid;
}

var pastTime = function (url) {
  const uniqueVid = needPastTime(
    `https://www.bing.com/search?q=%20site%3Ayoutube.com&PC=U316$top=50&$skip=0&FORM=PORE`,
    `v=`,
    0,
    10
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

function videoPlayer(searchString) {
  //Youtube Widget
  const idArray = needPastTime(searchString);
  // console.log(JSON.stringify(randomPlaylist[0][randomVidKey]))
  // const rdmIdArray = Utilities.jsonStringify([randomPlaylist])
  const randomPlaylist = [];
  for (var i = 0; i < idArray.length; i++) {
    const randomVidKey = Math.floor(Math.random() * Math.floor(idArray.length)); // Math.floor(Math.random());
    randomPlaylist.push(idArray[randomVidKey]);
  }
  // const plVidKey = Math.floor(Math.random() * (Math.floor(randomPlaylist.length)))// Math.floor(Math.random());
  // const playVid = Utilities.jsonStringify(randomPlaylist[0][plVidKey])
  const vidPlaylist = function () {
    const randomVidKey = Math.floor(
      Math.random() * Math.floor(randomPlaylist.length)
    ); // Math.floor(Math.random());
    const videoObject = covObjects(randomPlaylist, ["youtubeID"]);
    const uniqueVidKey = [videoObject].entries().next().value;
    const randomVid = uniqueVidKey[1][randomVidKey];
    const rVideo = randomVid["youtubeID"];
    return rVideo;
  };
  const randomVideo = vidPlaylist();
  const titleVar = Utilities.jsonStringify(searchString);
  const playListVar = Utilities.jsonStringify(randomPlaylist);
  const html = HtmlService.createTemplate(`<!DOCTYPE html>
<html id="test">
<head>
  <base target="_parent">
</head>
<body  id="template">
  <div><a href="https://www.youtube.com/watch?v=<?= researchId ?>" target="_blank"><h1 class="blue z-depth-5 toolbar_icon toolbar_iconHover scale-transition scale-out scale-in btn-large receipt" id="reload01"><?= searchTtile ?></h1></a></div>
  <div class="receipt container row s1 valign-wrapper video-container grey darken-4 z-depth-5 scale-transition scale-out scale-in">
  <div id="player1"></div></div>
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
      {event.target.loadVideoById({videoId: <?!= vidTubeId ?>});
      // console.log("videoId: " + ${randomVideo});
      event.target.playVideo()}

    // 5. The API calls this function when the player's state changes.
    //    The function indicates that when playing a video (state=1),
    //    the player should play for six seconds and then stop.
    var done = false;
    function onPlayerStateChange(event) 
      {if (event.data == YT.PlayerState.UNSTARTED && !done)
        {setTimeout(playVideo)        
        changeBorderColor(event.data);
        // done = true;
      }
    else if (event.data == YT.PlayerState.ENDED && !done) 
      {console.log("load another video");
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
</body>
</html>`);
  html.vidTubeId = Utilities.jsonStringify(randomVideo);
  html.researchId = randomVideo;
  html.searchTtile = searchString;
  html.myPlayList = [playListVar].sort((a, b) => a - b);
  return html.evaluate().getContent(); //}
}

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
            .runAll(`boilerplate.${[func]}`, [args]);
        });
      };
      // serverSide('youTube', []).then(
      //   (content) => {document.getElementById('template').innerHTML = content
      //                       }).catch(
      //     (error) => {console.log(error)
      //                 });
      // serverSide('checkOnDay', []).then(
      //   (content) => {document.getElementById('checkOnDay').addEventListener('click', userClicked);
      //   function userClicked()
      //         {document.getElementById('template').innerHTML = content}
      //                       }).catch(
      //     (error) => {console.log(error)
      //                 });

      // serverSide('onYouTubeIframeAPIReady', ['', '']).then(
      //   (content) => {    document.getElementById('mainIndex').addEventListener('click', userClicked);
      //   function userClicked()
      //         {document.getElementById('template').innerHTML = content}
      //                       }).catch(
      //     (error) => {console.log(error)
      //                 });
    },
  };
}

function iFC() {
  iframeC().appJs();
}
