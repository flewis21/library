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
    var arrD = globalThis.arrDRnd();
    var searchString = randomSubstance(0, 6, arrD).myNewArr;
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
          <?= styleHtml.abcIt.getContent() ?>
          <style>
            <?!= styleHtml.surveyPlayer.getContent() ?>
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
                        <?= searchTtile ?>
                      </h1>
                    </span>
                  </a>
                </div>
              </nav>
            </div>
            <div class="container">
              <div class="row">
                <div class="col s12 card-panel amber">
                  <div class="responsive-section">
                    <div class="container">
                      <div class="col s12 receipt red">
                        <label id="spLab">
                          <strong>
                            Research
                          </strong>
                        </label>
                        <div id="loadingSurvey" style="display: none;">
                          <table class="striped centered highlight responsive-table grey z-depth-5" style="width:100%">
                            <thead></thead>
                            <tbody>
                              <tr style="justify-content: space-around;overflow: auto;border-radius: 3%;max-width: 100%;height: auto;display: block;margin: auto;">
                                <td style="vertical-align: top;text-align: left;flex-flow: row wrap;grid-column: 1;grid-row: 1;align-content: flex-start;z-index: 0;height: 100%;overflow: auto;">
                                  <table class="striped centered highlight responsive-table grey z-depth-5" style="width:100%;">
                                    <tbody>
                                      <td>
                                        <div id="player1"></div>
                                      </td>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <table class="striped centered highlight responsive-table grey z-depth-5" style="width:100%">
                          <thead></thead>
                          <tbody>
                            <tr style="justify-content: space-around;overflow: auto;border-radius: 3%;max-width: 100%;height: auto;display: block;margin: auto;">
                              <td style="vertical-align: top;text-align: left;flex-flow: row wrap;grid-column: 1;grid-row: 1;align-content: flex-start;z-index: 0;height: 100%;overflow: auto;">
                                <table class="striped centered highlight responsive-table grey z-depth-5" style="width:100%;">
                                  <tbody>
                                    <td>
                                      <div id="player2" class="col s10 m-10 l-10 push-s1 push-m1 push-l1">
                                        <?!= seoCapital(link) ?>
                                      </div>
                                    </td>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <div class="row">
                          <div class="col s12 card-panel l12 m12 receipt red">
                            <div class="z-depth-5 grey toolbar_icon toolbar_iconHover col s12 receipt"><div class="col s12 l12 m12 receipt red">
                              <input style="font-size:18pt;color:green" placeholder="research" class="timepicker flow-text menu-img z-depth-5 card-panel black scale-transition scale-out scale-in receipt btn-large" id="spSearch"  value="<?= reValue ?>" type="search" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <?!= styleHtml.spRunIt.getContent() ?>
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
