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
  var dataTree = driveDocBrowser();
  while (folderFile.hasNext()) {
    var myFile = folderFile.next();
    var currentFileUrl = myFile.getUrl();
  } //  dataTree.push(currentFileUrl)};
  var testGen = testlt();
  var listGen = objectOfS(
    ["parameter"],
    [[["func", testGen]]],
    Math.floor((maxTime - (new Date() % (1000 * 60))) / 1000),
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
  const html =
    HtmlService.createTemplate(`<!DOCTYPE html><html id="test"><head><base target="_top"><?!= builtStyling().evaluate().getContent() ?></head><body  id="template"><div class="responsiveSection"><div class="row container"><nav class="col s12 menu-img btn-large z-depth-5 card-panel amber scale-out scale-in" style="font-size: 30px"><div class=""><a href="<?= link ?>" id="linkload01" target="_blank"><span><h1 class="col s12 receipt center nav-wrapper deep-purple darken-1 z-depth-5 toolbar_icon toolbar_iconHover scale-transition scale-out scale-in btn-large"  style="font-size: 30px" id="reload01"><?= searchTtile ?></h1></span></a></div></nav></div><div class="row"><div class="col s12 card-panel amber"><div class=""><div class="col s12 receipt red"><label id="spLab"><strong>Research</strong></label><div id="loadingSurvey" style="display: none;"><table class="striped centered highlight responsive-table grey z-depth-5" style="width:100%"><thead></thead><tbody><tr style="justify-content: space-around;overflow: auto;border-radius: 5%;max-width: 100%;height: auto;display: block;margin: auto;"><td style="vertical-align: top;text-align: left"><table class="striped centered highlight responsive-table grey z-depth-5" style="width:100%;height:100%"><tbody><td style="width: 885px; height: 1024px; padding: 0;"><div id="player1"></div></td></tbody></table></td></tr></tbody></table></div><table class="striped centered highlight responsive-table grey z-depth-5" style="width:100%"><thead></thead><tbody><tr style="justify-content: space-around;overflow: auto;border-radius: 5%;max-width: 100%;height: auto;display: block;margin: auto;"><td style="vertical-align: top;text-align: left"><table class="striped centered highlight responsive-table grey z-depth-5" style="width:100%;height:100%"><tbody><td style="width: 885px; height: 1024px; padding: 0;"><div id="player2" class="col s12 m12 l12"><?!= seoCapital(link) ?></div></td></tbody></table></td></tr></tbody></table><div class="row"><div class="col s12 card-panel l12 m12 receipt red"><div class="z-depth-5 grey toolbar_icon toolbar_iconHover col s12 receipt"><div class="col s12 l12 m12 receipt red"><input style="font-size:18pt;color:green" placeholder="research" class="timepicker flow-text menu-img z-depth-5 card-panel black scale-transition scale-out scale-in receipt btn-large" id="spSearch"  value="<?= reValue ?>" type="search" /></div></div></div></div></div></div></div></div></div><script>
  // 2. This code loads the IFrame Player API code asynchronously.
  var tag 
  = document.createElement('script');tag.src 
  = "https://www.youtube.com/iframe_api";var firstScriptTag 
  = document.getElementsByTagName('script')[0];firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)
  // 3. This function creates an <iframe> (and YouTube player);after the API code downloads.
  var player1;
  // Show the loading indicator
  loadingSurvey.style.display 
  = 'block';var player1 
  var ctr 
  = 0;function onYouTubeIframeAPIReady() {console.log("youtube API ready");player1
  = new YT.Player('player1', {height: '475',width: '535',playerVars: {'autoplay': 1,'loop': 1,'controls': 0,'rel': 0,'autohide': 1,'playsinline': 0,'mute': 0,'modestbranding': 1,'vq': 'hd1080','rel': 0,'iv_load_policy': 3,'cc_load_policy': 1},events: {'onReady': onPlayerReady,'onStateChange': onPlayerStateChange,'onError': onPlayerError}})};var playlistIndex 
  = 0
  // 4. The API will call this function when the video player is ready.
  function onPlayerReady(event) {event.target.loadPlaylist(<?= myPlayList ?>, ctr);ctr++
  //event.target.loadVideoById({videoId: vidTubeId});console.log("videoId: ")
  event.target.setShuffle();event.target.setLoop();event.target.playVideo()}
  // 5. The API calls this function when the player's state changes.The function indicates that when playing a video (state=1),the player should play for six seconds and then stop.
  var done 
  = false;function onPlayerStateChange(event) {if (event.data == YT.PlayerState.UNSTARTED && !done) {var youtubeID 
  = event.target.getVideoUrl();changeBorderColor(event.data);setTimeout(playVideo())}
  // done = true;
  else if (event.data == YT.PlayerState.ENDED && !done) {
  //console.log("load another video")
  player1.loadPlaylist(<?= myPlayList ?>, ctr);ctr++
  // setTimeout(player1.loadVideoById());setTimeout(nextVideo())
  changeBorderColor(event.data)};else if (event.data == YT.PlayerState.PAUSED && !done) {setTimeout(pauseVideo());changeBorderColor(event.data)};else if (event.data == YT.PlayerState.BUFFERING && !done) {setTimeout(playVideo());changeBorderColor(event.data)};else if (event.data == YT.PlayerState.VIDEO_CUED && !done) {setTimeout(playVideo());changeBorderColor(event.data)}};function changeBorderColor(playerStatus) {var color
  if (playerStatus == -1) {color 
  = "#37474F"}; // unstarted = gray
  else if (playerStatus == 0) {color 
  = "#FFFF00"}; // ended = yellow
  else if (playerStatus == 1) {color 
  = "#33691E"}; // playing = green
  else if (playerStatus == 2) {color 
  = "#DD2C00"}; // paused = red
  else if (playerStatus == 3) {color 
  = "#AA00FF"}; // buffering = purple
  else if (playerStatus == 5) {color 
  = "#FF6DOO"}; // video cued = orange
  if (color) {document.getElementById('player1').style.borderColor 
  = color;}};function stopVideo() {player1.stopVideo();};function getVideoUrl() {player1.getVideoUrl();};function setLoop() {player1.setLoop(true);};function setShuffle() {player1.setShuffle(true);};function playVideo() {player1.playVideo();};function nextVideo() {player1.nextVideo();};function pauseVideo() {player1.pauseVideo();};function onPlayerError() {
  // Hide the loading indicator after error is returned
  loadingSurvey.style.display 
  = 'none';player1.destroy;onYouTubeIframeAPIReady();}</script><script>document.addEventListener("DOMContentLoaded", function() {function serverside(func, args) {return new Promise((resolve, reject) => {google.script.run.withSuccessHandler((result) => {resolve(result)}).withFailureHandler((error) => {reject(error)}).runBoilerplate(func, args)})};var eventG 
  = document.getElementById("linkload01");var eventH 
  = document.getElementById("spSearch");var eventL 
  = document.getElementById("spLab");var eventV 
  = document.getElementById("player2");document.addEventListener("DOMContentLoaded", function() {serverside("mis", link).then((misHome) => {var emPlay 
  = document.getElementById("player2");if (emPlay.innerHTML === "") {emplay.innerHTML 
  = misHome}}).catch((er) => {eventL.innerText 
  = er})});eventH.addEventListener("keypress", function(event) {
  // If the user preses the "Enter" key on the keyboard. 
  if (event.key === "Enter")  {var strValue 
  = eventH.value;serverside("substanceVegas", [null,null,null,1,1,5]).then((sub)=>{var hosts 
  = sub.substHost;var rndHost 
  = hosts[Math.floor(Math.random() * (Math.floor(hosts.length)))];eventH.value 
  = rndHost;});if (!strValue) {eventL.innerText 
  = "... Loading";serverside("mis").then((stream) => {if (stream) {if (stream.length === 99 || stream.length ===94 || stream.length === 83 || stream.length ===97 || stream.length ===101 || stream.length ===103 || stream.length ===136 || stream.length ===132 || [stream].indexOf("&entry") > -1) {eventV.innerHTML 
  = '<iframe class="z-depth-5 card-panel deep-purple darken-1 scale-transition scale-out scale-in btn-large" src="" id="eventRes01" class="menu-img grey darken-4 z-depth-5" style="width: 100%; height: 100%; border: none;" allow="autoplay" allow="encrypted-media" title="Dontime Life Website" frameborder="0" allowfullscreen ></iframe>';document.getElementById("eventRes01").src 
  = stream;eventG.href 
  = stream;eventL.innerText 
  = "Research"}else {eventV.innerHTML 
  = stream;eventG.href 
  = stream;eventL.innerText 
  = "Research"}}}).catch((er) => {eventL.innerText 
  = er})}else {document.getElementById("spSearch").value 
  = "";eventL.innerText 
  = "... Loading " + strValue;serverside("mis", [strValue]).then((stream) => {if (stream) {if (stream.length === 99 || stream.length ===94 || stream.length === 83 || stream.length ===97 || stream.length ===101 || stream.length ===103 || stream.length ===136 || stream.length ===132 || [stream].indexOf("&entry") > -1) {eventV.innerHTML 
  = '<iframe class="z-depth-5 card-panel deep-purple darken-1 scale-transition scale-out scale-in btn-large" src="" id="eventRes01" class="menu-img grey darken-4 z-depth-5" style="width: 100%; height: 100%; border: none;" allow="autoplay" allow="encrypted-media" title="Dontime Life Website" frameborder="0" allowfullscreen ></iframe>';document.getElementById("eventRes01").src 
  = stream;eventG.href 
  = stream;eventL.innerText 
  = "Research"}else {eventV.innerHTML 
  = stream;eventG.href 
  = stream;eventL.innerText 
  = "Research"}}}).catch((er) => {eventL.innerText 
  = er})}}})})</script></body></html>`);
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
