function needPastTime(url, searchString, startNum, endNum) {
  const videoSearch = urlDataSource(url);
  const vidsSearched = [];
  const vidValues = [];
  const uniqueVid = [];
  [videoSearch].map((videoId) => {
    const idArray = videoId
      .slice(videoId.indexOf(searchString))
      .toString()
      .split(searchString);
    for (var i = 1; i < idArray.length; i++) {
      const playId = idArray[i].toString().substring(startNum, endNum);
      vidsSearched.push(playId);
      vidValues.push(playId.valueOf());
    }
    return vidsSearched.forEach((vid) => {
      if (uniqueVid.indexOf(vid) === -1) {
        if (
          vid.indexOf(" ") < 1 &&
          vid.indexOf("[") < 1 &&
          vid.indexOf("]") < 1 &&
          vid.indexOf(",") < 1 &&
          vid.indexOf(";") < 1 &&
          vid.indexOf("content") < 1 &&
          vid.indexOf("whole") < 1 &&
          vid.indexOf("get") < 1 &&
          vid.indexOf("acc") < 1 &&
          vid.indexOf("#") < 1 &&
          vid.indexOf("=") < 1
        ) {
          uniqueVid.push([vid]);
          console.log(vid);
        }
      }
    });
  });
  return uniqueVid;
}

function videoPlayer(idArray) {
  //Youtube Widget
  const vidPlaylist = function () {
    const videoArray = idArray;
    const randomVidKey = Math.floor(
      Math.random() * Math.floor(videoArray.length)
    ); // Math.floor(Math.random());
    const videoPlaylist = covObjects(videoArray, ["youtubeID"]);
    const uniqueVidKey = [videoPlaylist].entries().next().value;
    const randomVid = uniqueVidKey[1][randomVidKey];
    const rVideo = Utilities.jsonStringify(randomVid["youtubeID"]);
    return rVideo;
  };
  const randomVideo = vidPlaylist();

  const html = `<!DOCTYPE html>
<html id="test">
  <head>
    <base target="_parent">
    <?!= styleHtml() ?>
  </head>
  <body  id="template">
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
      function onYouTubeIframeAPIReady() 
        {console.log("youtube API ready");
        player1 = new YT.Player('player1', 
          {height: '505',
          width: '585',
          playerVars: 
            {'autoplay': 1,
            'loop': 1,
            'controls': 0,
            'showinfo': 0,
            'autohide': 1,
            'playsinline': 1,
            'mute': 0,
            'modestbranding': 1,
            'vq': 'hd1080',
            'rel': 0,
            'showinfo': 0,
            'iv_load_policy': 3
          },
          events: 
            {'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange,
            'onError': onPlayerError}});}

      var playlistIndex = 0

      // 4. The API will call this function when the video player is ready.
      function onPlayerReady(event) 
        {event.target.loadVideoById({videoId: ${randomVideo}});
        console.log("videoId: " + ${randomVideo});
        event.target.playVideo()}

      // 5. The API calls this function when the player's state changes.
      //    The function indicates that when playing a video (state=1),
      //    the player should play for six seconds and then stop.
      var done = false;
      function onPlayerStateChange(event) 
        {if (event.data == YT.PlayerState.UNSTARTED)
          {setTimeout(playVideo)        
          changeBorderColor(event.data);
          // done = true;
        }
      else if (event.data == YT.PlayerState.ENDED) 
        {setTimeout(player1.loadVideoById(${vidPlaylist()}));
          //setTimeout(nextVideo);
        changeBorderColor(event.data);}
      else if (event.data == YT.PlayerState.PAUSED) 
        {setTimeout(playVideo);
        changeBorderColor(event.data);}
      else if (event.data == YT.PlayerState.BUFFERING) 
        {setTimeout(playVideo);
        changeBorderColor(event.data);}
      else if (event.data == YT.PlayerState.VIDEO_CUED) 
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
        {//if (player1.playVideo)
          // {
            player1.playVideo()//}
        // else {location.reload(true)}
        }
      function nextVideo() 
        {player1.nextVideo();}
      function onPlayerError()
        {player1.destroy;
        onYouTubeIframeAPIReady();}
    </script>
  </body>
</html>`;
  return contentApp(html); //}
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
