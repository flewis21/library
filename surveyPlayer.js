function surveyPlayer(searchString, joinString) {
  console.log(
    "boilerplate surveyPlayer: line 2\nsurveyPlayer(searchString: " +
      searchString +
      ", joinString: " +
      joinString +
      ")\n " +
      arguments.callee.caller.name,
  );
  console.log(
    functionRegistry.time +
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
  var rndFol = furtFolder();
  var currentFileUrl = fileBrowser(rndFol).url;
  // var eFolder = DriveApp.getFoldersByName(rndFol).next();
  // var folderFile = eFolder.getFilesByName("Code Editor");
  var rndStr = globalThis.uniqueItemArray();
  var rndStrObj = rndStr[Math.floor(Math.random() * Math.floor(rndStr.length))];
  var dataTree = driveManager(rndStrObj["Description"]);
  // while (folderFile.hasNext()) {
  //   var myFile = folderFile.next();
  //   var currentFileUrl = myFile.getUrl();
  // }
  //  dataTree.push(currentFileUrl)};
  var testGen = testlt();
  var listGen = objectOfS(
    ["parameter"],
    [[["func", testGen]]],
    functionRegistry.time,
  ).parameter["func"];
  var noList = [];
  while (noList.length < 3) {
    var noVid = substanceVegas(
      0,
      [listGen].toString().length,
      [listGen].toString().split(""),
      50,
      1,
      20,
    ).substHost;
    noList.push(noVid);
  }
  if (dataTree) {
    var rndFiled = Math.floor(Math.random() * Math.floor(dataTree.length));
    var filed = dataTree[rndFiled];
  } else {
    var filed = currentFileUrl;
  }
  if (!searchString && !joinString) {
    var numVarRnd = randNum(arguments.callee.name);
    var arrDRnd = globalThis.arrDRnd();
    var searchString = randomSubstance(0, 6, arrDRnd).myNewArr;
    var joinString = [searchString].join("");
  }
  if (searchString && !joinString) {
    var joinString = [searchString].join("");
  }
  var uti = dtlsSomeFunction(searchString).playList;
  const html = HtmlService.createTemplate(
    `<!DOCTYPE html>
      <html id="test">
        <head>
          <base target="_top">
          <?!= builtStyling().evaluate().getContent() ?>
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
        <body  id="template">
          <div class="responsive-section">
            <div class="row container">
              <nav class="col s12 menu-img btn-large z-depth-5 card-panel amber scale-out scale-in" style="font-size: 30px">
                <div class="">
                  <a href="<?= link ?>" id="linkload01" target="_blank">
                    <span>
                      <h1 class="col s12 receipt center nav-wrapper deep-purple darken-1 z-depth-5 toolbar_icon toolbar_iconHover scale-transition scale-out scale-in btn-large" style="font-size: 30px" id="reload01">
                        <?= searchTtile ?></h1></span></a></div></nav></div>
            <div class="container">
              <div class="row">
                <div class="col s12 card-panel amber">
                  <div class="responsive-section">
                    <div class="container">
                      <div class="col s12 receipt red">
                        <label id="spLab">
                          <strong>
                            Research</strong></label>
                        <div id="loadingSurvey" style="display: none;">
                          <table class="striped centered highlight responsive-table grey z-depth-5" style="width:100%">
                            <thead></thead>
                            <tbody>
                              <tr style="justify-content: space-around;overflow: auto;border-radius: 3%;max-width: 100%;height: auto;display: block;margin: auto;">
                                <td style="vertical-align: top;text-align: left;flex-flow: row wrap;grid-column: 1;grid-row: 1;align-content: flex-start;z-index: 0;height: 100%;overflow: auto;">
                                  <table class="striped centered highlight responsive-table grey z-depth-5" style="width:100%;">
                                    <tbody>
                                      <td>
                                        <div id="player1"></div></td></tbody></table></td></tr></tbody></table></div>
                        <table class="striped centered highlight responsive-table grey z-depth-5" style="width:100%">
                          <thead></thead>
                          <tbody>
                            <tr style="justify-content: space-around;overflow: auto;border-radius: 3%;max-width: 100%;height: auto;display: block;margin: auto;">
                              <td style="vertical-align: top;text-align: left;flex-flow: row wrap;grid-column: 1;grid-row: 1;align-content: flex-start;z-index: 0;height: 100%;overflow: auto;">
                                <table class="striped centered highlight responsive-table grey z-depth-5" style="width:100%;">
                                  <tbody>
                                    <td>
                                      <div id="player2" class="col s10 m-10 l-10 push-s1 push-m1 push-l1">
                                        <?!= seoCapital(link) ?></div></td></tbody></table></td></tr></tbody></table>
                        <div class="row">
                          <div class="col s12 card-panel l12 m12 receipt red">
                            <div class="z-depth-5 grey toolbar_icon toolbar_iconHover col s12 receipt"><div class="col s12 l12 m12 receipt red">
                              <input style="font-size:18pt;color:green" placeholder="research" class="timepicker flow-text menu-img z-depth-5 card-panel black scale-transition scale-out scale-in receipt btn-large" id="spSearch"  value="<?= reValue ?>" type="search" /></div></div></div></div></div></div></div></div></div></div></div>
          <script>
    // 1. Load the IFrame Player API code asynchronously.
    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api"; // *** FIX THIS URL ***
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    var player1; // Declare player1 once globally or within appropriate scope
    var ctr = 0;

    // This global function will be called by the YouTube API once it's loaded
    function onYouTubeIframeAPIReady() {
        console.log("youtube API ready");

        const loadingSurveyElement = document.getElementById('loadingSurvey');
        const player1Div = document.getElementById('player1');

        if (!player1Div) {
            console.error("Error: The 'player1' div element was not found in the DOM.");
            if (loadingSurveyElement) {
                loadingSurveyElement.style.display = 'none'; // Hide loading if element missing
            }
            return; // Stop execution if player div is missing
        }

        // Show the loading indicator *after* player1Div is confirmed to exist
        if (loadingSurveyElement) {
            loadingSurveyElement.style.display = 'block';
        }

        try {
            player1 = new YT.Player('player1', {
                height: '100%',
                width: '535',
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
                    'cc_load_policy': 1
                },
                events: {
                    'onReady': onPlayerReady,
                    'onStateChange': onPlayerStateChange,
                    'onError': onPlayerError
                }
            });
            console.log("YT.Player initialization attempted for player1.");
        } catch (error) {
            console.error("Error creating YouTube player:", error);
            if (loadingSurveyElement) {
                loadingSurveyElement.style.display = 'none'; // Hide loading indicator on player creation error
            }
        }
    }

    function onPlayerReady(event) {
        console.log("Player ready, loading playlist.");
        event.target.loadPlaylist(<?= myPlayList ?>, ctr);
        ctr++;
        event.target.setShuffle();
        event.target.setLoop();
        event.target.playVideo();

        // Hide the loading indicator once the player is ready and playing
        const loadingSurveyElement = document.getElementById('loadingSurvey');
        if (loadingSurveyElement) {
            loadingSurveyElement.style.display = 'none';
        }
    }

    
    // 5. The API calls this function when the player's state changes.The function indicates that when playing a video (state=1),the player should play for six seconds and then stop.
    var done = false;function onPlayerStateChange(event) {
      if (event.data == YT.PlayerState.UNSTARTED && !done) {
        var youtubeID = event.target.getVideoUrl();
        changeBorderColor(event.data);setTimeout(playVideo())
      }
      // done = true;
      else if (event.data == YT.PlayerState.ENDED && !done) {
        //console.log("load another video")
        player1.loadPlaylist(<?= myPlayList ?>, ctr);
        ctr++
        // setTimeout(player1.loadVideoById());setTimeout(nextVideo())
        changeBorderColor(event.data)
      }
      else if (event.data == YT.PlayerState.PAUSED && !done) {
        setTimeout(pauseVideo());
        changeBorderColor(event.data)
      }
      else if (event.data == YT.PlayerState.BUFFERING && !done) {
        setTimeout(playVideo());
        changeBorderColor(event.data)
      }
      else if (event.data == YT.PlayerState.VIDEO_CUED && !done) {
        setTimeout(playVideo());
        changeBorderColor(event.data)
      };
    };
    function changeBorderColor(playerStatus) {
      var color
      if (playerStatus == -1) {
        color = "#37474F"
      } // unstarted = gray
      else if (playerStatus == 0) {
        color = "#FFFF00"
      } // ended = yellow
      else if (playerStatus == 1) {
        color = "#33691E"
      } // playing = green
      else if (playerStatus == 2) {
        color = "#DD2C00"
      } // paused = red
      else if (playerStatus == 3) {
        color = "#AA00FF"
      } // buffering = purple
      else if (playerStatus == 5) {
        color = "#FF6DOO"
      }; // video cued = orange
      if (color) {
        document.getElementById('player1').style.borderColor = color;
      };
    };
    
    function onPlayerError(event) {
        console.error("YouTube Player Error (Code:", event.data, "):", event);
        const loadingSurveyElement = document.getElementById('loadingSurvey');
        if (loadingSurveyElement) {
            loadingSurveyElement.style.display = 'none'; // Hide loading indicator
        }

        if (player1) {
            player1.destroy(); // Properly destroy the player instance
            player1 = null; // Clear the reference to the destroyed player
        }
        // Do NOT call onYouTubeIframeAPIReady() here.
        // Depending on the error code, you might:
        // - Display a user-friendly error message.
        // - Attempt to load a different video if the current one is broken.
        // - Log the error to a server for monitoring.
    }

    
    function stopVideo() {
      player1.stopVideo();
    };
    function getVideoUrl() {
      player1.getVideoUrl();
    };
    function setLoop() {
      player1.setLoop(true);
    };
    function setShuffle() {
      player1.setShuffle(true);
    };
    function playVideo() {
      player1.playVideo();
    };
    function nextVideo() {
      player1.nextVideo();
    };
    function pauseVideo() {
      player1.pauseVideo();
    };
    
  </script>
  <script>
    document.addEventListener("DOMContentLoaded", function() {
      function serverside(func, args) {
        return new Promise((resolve, reject) => {
          google.script.run
          .withSuccessHandler((result) => {
            resolve(result)
          })
          .withFailureHandler((error) => {
            reject(error)
          })
          .runBoilerplate(func, args)
        })
      };
      var eventG = document.getElementById("linkload01");
      var eventH = document.getElementById("spSearch");
      var eventL = document.getElementById("spLab");
      var eventV = document.getElementById("player2");
      var vLen = [83, 94, 97, 99, 101, 103, 136, 132];
      document.addEventListener("DOMContentLoaded", function() {
        serverside("mis", link)
        .then((misHome) => {
          var emPlay = document.getElementById("player2");
          if (emPlay.innerHTML === "") {
            emplay.innerHTML = misHome;
          }
        })
        .catch((er) => {
          eventL.innerText = er;
        })
      });
      eventH.addEventListener("keypress", function(event) {
        // If the user preses the "Enter" key on the keyboard. 
        if (event.key === "Enter")  {
          let parsedE;
          try {
            // Parse the user's input as the new 'args' value
            // Allow direct strings or JSON arrays/objects
            try {
              parsedE = JSON.parse(eventH.value);
            } 
            catch (jsonError) {
              // If it's not valid JSON, treat it as a plain string
              parsedE = eventH.value;
            }
          } 
          catch(error) {
            alert("Error parsing JSON. Please ensure the input is valid JSON.");
            console.error("JSON parsing error:", error);
          };
          var strValue = parsedE;
          serverside("substanceVegas", [null,null,null,1,1,5])
          .then((sub) => {
            var hosts = sub.substHost;
            var rndHost = hosts[Math.floor(Math.random() * (Math.floor(hosts.length)))];
            eventH.value = rndHost;
          });
          if (!strValue) {
            eventL.innerText = "... Loading";
            serverside("mis")
            .then((retn) => {
              var stream = retn.index; 
              if (stream) {
                if (vLen.includes(stream.length) || [stream].indexOf("&entry") > -1) {
                  eventV.innerHTML = '<iframe class="z-depth-5 card-panel deep-purple darken-1 scale-transition scale-out scale-in btn-large" src="" id="eventRes01" class="menu-img grey darken-4 z-depth-5" style="width: 100%; height: 100%; border: none;" allow="autoplay" allow="encrypted-media" title="Dontime Life Website" frameborder="0" allowfullscreen ></iframe>';
                  document.getElementById("eventRes01").src = stream;
                  eventG.href = stream;
                  eventL.innerText = "Research"
                } 
                else {
                  let data;
                  // 1. Handle UrlFetchApp.HTTPResponse
                  if (typeof stream.getResponseCode === "function" && typeof stream.getContentText === "function") {
                    const contentType = stream.getHeaders()["Content-Type"] || "";
                    const responseText = stream.getContentText();

                    if (contentType.includes("application/json")) {
                      try {
                        data = JSON.parse(responseText);
                      } 
                      catch (e) {
                        data = "Error parsing JSON from URL fetch: " + responseText
                      }
                    } 
                    else if (contentType.includes("text/html")) {
                      data = responseText;
                    } 
                    else {
                      data = responseText;
                    }
                  };
                  eventV.innerHTML = JSON.stringify(stream);
                  eventG.href = stream;
                  eventL.innerText = "Research"
                }
              }
            })
            .catch((er) => {
              eventL.innerText = er;
            })
          } 
          else {
            document.getElementById("spSearch").value = "";
            eventL.innerText = "... Loading " + strValue;
            serverside("mis", [strValue])
            .then((retn) => {
              var stream = retn.index; 
              if (stream) {
                if (vLen.includes(stream.length) || [stream].indexOf("&entry") > -1) {
                  eventV.innerHTML = '<iframe class="z-depth-5 card-panel deep-purple darken-1 scale-transition scale-out scale-in btn-large" src="" id="eventRes01" class="menu-img grey darken-4 z-depth-5" style="width: 100%; height: 100%; border: none;" allow="autoplay" allow="encrypted-media" title="Dontime Life Website" frameborder="0" allowfullscreen ></iframe>';document.getElementById("eventRes01").src = stream;
                  eventG.href = stream;
                  eventL.innerText = "Research"
                } 
                else {
                  let data;
                  // 1. Handle UrlFetchApp.HTTPResponse
                  if (typeof stream.getResponseCode === "function" && typeof stream.getContentText === "function") {
                    const contentType = stream.getHeaders()["Content-Type"] || "";
                    const responseText = stream.getContentText();
                    if (contentType.includes("application/json")) {
                      try {
                        data = JSON.parse(responseText);
                      } 
                      catch (e) {
                        data = "Error parsing JSON from URL fetch: " + responseText
                      }
                    } 
                    else if (contentType.includes("text/html")) {
                      data = responseText;
                    } 
                    else {
                      data = responseText;
                    }
                  };
                  eventV.innerHTML = JSON.stringify(stream);
                  eventG.href = stream;
                  eventL.innerText = "Research"
                }
              }
            })
            .catch((er) => {
              eventL.innerText = er
            })
          }
        }
      })
    })
    </script>
  </body>
</html>`,
  );
  if (uti) {
    var idArray = uti.map((piece) => {
      try {
        //   console.log(typeof piece)
        if (typeof piece !== "undefined") {
          // console.log("it's " + typeof piece)
          return piece;
        }
      } catch (error) {
        return "Error in surveyPlayer " + error;
      }
    });
  } else {
    try {
      uti.map((piece) => {
        return piece;
      });
    } catch (error) {
      var idArray = [error].toString().split(" ");
    }
  }
  html.myPlayList = [idArray].sort((a, b) => a - b);
  html.link = filed;
  html.searchTtile = joinString;
  html.home = getScriptUrl();
  html.reValue = (() => {
    return noList[Math.floor(Math.random() * Math.floor(noList.length))];
  })();
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
