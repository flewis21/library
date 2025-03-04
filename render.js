var appList = function () {
  console.log(
    Math.floor((maxTime - (new Date() % (1000 * 60))) / 1000) +
      "\n" +
      arguments.callee.name,
  );
  return HtmlService.createTemplate(
    `
  <html id="appList">
    <head>
      <base target="_top">
      <meta charset="utf-8">
      <meta name="appList" content="Boilerplate Function List">
      <meta name=viewport content="width=device-width, initial-scale=1">
      <link href="https://fonts.googleapis.com/css?family=Acme" rel="stylesheet">
      <style>
        a:link, a:visited {color:black !important;}
        a:hover, a:active{ 
          color:white  !important;
          text-decoration:none  !important;}
      </style>
    </head>
    <body>
    <? var appList = appSort(9) ?>
    <? var dropList = appList.map((item) => {
        return "<option>" + item + "</option>"
    }).join("") ?>
    <? var result = JSON.stringify(dropList) ?>
    <? var appUrl = getUrl(ScriptApp) + "?func=" ?>
      <div class="row">
      <div class="col s12 l12 m12 card-panel amber receipt">
      <div class="menu-img btn-large valign-wrapper col s12 amber darken-0 receipt" id="seoData">
      <label id="indexLab">
        <strong>Research</strong>
      </label>
      <div id="indexDiv" class="video-container amber flow-text" style="clear: both;overflow-y: auto;overflow-x: hidden;text-align: center">
      <table class="striped centered highlight responsive-table amber z-depth-5">
        <thead>
        </thead>
        <tbody>
          <tr style="justify-content: space-around;overflow: auto;border-radius: 3%;max-width: 100%;height: auto;display: block;margin: auto;">
            <td style="vertical-align: top;text-align: left">
              <table class="striped centered highlight responsive-table amber z-depth-5">
                <tbody>
                  <td id="tdIndexRes" style="width: 705px; height: 405px; padding: 0;">
                    <iframe 
                      class="z-depth-5 card-panel amber darken-0 scale-transition scale-out scale-in btn-large" 
                      src=""
                      id="indexRes"
                      style="width: 100%; height: 100%; border: none;"
                      allow="autoplay"
                      allow="encrypted-media"
                      title="Dontime Life Website"
                      frameborder="0"
                      allowfullscreen
                      ></iframe>
                  </td>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
      </div>
      <div class="row">
        <div class="col s12 card-panel l12 m12 receipt red">
          <div class="container">
          <div class="z-depth-5 grey toolbar_icon toolbar_iconHover container col s12 receipt">
            <div class="col s12 l12 m12 receipt red">
              <input style="font-size:18pt;color:green" placeholder="research" class="timepicker flow-text menu-img z-depth-5 card-panel black scale-transition scale-out scale-in receipt btn-large" id="homeIndex"  type="search" />
            </div>
          </div>
        </div>
        </div>
      </div>
      </div></div></div>
      <div class="row">
        <div class="col s12 m12 l12 menu z-depth-5 card-panel amber scale-out scale-in receipt" style="font-size: 30px">
          <div class="container">
            <div class="col s12 m12 l12 receipt nav-wrapper deep-purple darken-1">
              <div class="agenda z-depth-5 btn-large card-panel blue scale-out scale-in receipt col s12">
                <span>
                  <input placeholder="Your Search Here Ex. apple,orange..." class="flow-text menu-img z-depth-5 card-panel deep-purple darken-1 scale-transition scale-out scale-in receipt btn-large" id="uiApp" type="search"/>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
      <div class="col s12 l12 m12 card-panel amber receipt">
      <div class="menu-img btn-large valign-wrapper col s12 amber darken-0 receipt" id="seoData">
      <label id="tubeLab">
        <strong>Research</strong>
      </label>
      <div id="tubeDiv" class="video-container amber flow-text" style="clear: both;overflow-y: auto;overflow-x: hidden;text-align: center">
      <table class="striped centered highlight responsive-table amber z-depth-5">
        <thead>
        </thead>
        <tbody>
          <tr style="justify-content: space-around;overflow: auto;border-radius: 3%;max-width: 100%;height: auto;display: block;margin: auto;">
            <td style="vertical-align: top;text-align: left">
              <table class="striped centered highlight responsive-table amber z-depth-5">
                <tbody>
                  <td id="tdTubeRes" style="width: 705px; height: 405px; padding: 0;">
                    <iframe 
                      class="z-depth-5 card-panel amber darken-0 scale-transition scale-out scale-in btn-large" 
                      src=""
                      id="tubeRes"
                      style= "width:'100%';height='100%'"
                      allow="autoplay"
                      allow="encrypted-media"
                      title="Dontime Life Website"
                      frameborder="0"
                      allowfullscreen
                      ></iframe>
                  </td>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
      </div>
      <div class="row">
        <div class="col s12 card-panel l12 m12 receipt red">
          <div class="container">
          <div class="z-depth-5 grey toolbar_icon toolbar_iconHover container col s12 receipt">
            <div class="col s12 l12 m12 receipt red">
              <input style="font-size:18pt;color:green" placeholder="research" class="timepicker flow-text menu-img z-depth-5 card-panel black scale-transition scale-out scale-in receipt btn-large" id="tubeSearch"  type="search" />
            </div>
          </div>
        </div>
        </div>
      </div>
      </div></div></div>
      <div class="row">
      <div class="col s12 l12 m12 card-panel amber receipt">
      <div class="menu-img btn-large valign-wrapper col s12 amber darken-0 receipt" id="seoData">
      <label id="bingLab">
        <strong>Research</strong>
      </label>
      <div id="bingDiv" class="video-container amber flow-text" style="clear: both;overflow-y: auto;overflow-x: hidden;text-align: center">
      <table class="striped centered highlight responsive-table amber z-depth-5">
        <thead>
        </thead>
        <tbody>
          <tr style="justify-content: space-around;overflow: auto;border-radius: 3%;max-width: 100%;height: auto;display: block;margin: auto;">
            <td style="vertical-align: top;text-align: left">
              <table class="striped centered highlight responsive-table amber z-depth-5">
                <tbody>
                  <td id="tdBingRes" style="width: 705px; height: 405px; padding: 0;">
                  <iframe 
                    class="z-depth-5 card-panel amber darken-0 scale-transition scale-out scale-in btn-large" 
                    src=""
                    id="bingRes"
                    style= "width:'100%';height='100%'"
                    allow="autoplay"
                    allow="encrypted-media"
                    title="Dontime Life Website"
                    frameborder="0"
                    allowfullscreen
                    ></iframe>
                  </td>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
      </div>
      <div class="row">
        <div class="col s12 card-panel l12 m12 receipt red">
          <div class="container">
          <div class="z-depth-5 grey toolbar_icon toolbar_iconHover container col s12 receipt">
            <div class="col s12 l12 m12 receipt red">
              <input style="font-size:18pt;color:green" placeholder="research" class="timepicker flow-text menu-img z-depth-5 card-panel black scale-transition scale-out scale-in receipt btn-large" id="bingSearch"  type="search" />
            </div>
          </div>
        </div>
        </div>
      </div>
      </div></div></div>
      <div class="row">
      <div class="col s12 l12 m12 card-panel amber receipt">
      <div class="menu-img btn-large valign-wrapper col s12 darken-0 receipt amber" id="seoData">
      <label id="busLab">
        <strong>Research</strong>
      </label>
      <div id="busDiv" class="video-container amber flow-text" style="clear: both;overflow-y: auto;overflow-x: hidden;text-align: center">
      <table class="striped centered highlight responsive-table amber z-depth-5">
        <thead>
        </thead>
        <tbody>
          <tr style="justify-content: space-around;overflow: auto;border-radius: 3%;max-width: 100%;height: auto;display: block;margin: auto;">
            <td style="vertical-align: top;text-align: left">
              <table class="striped centered highlight responsive-table amber z-depth-5">
                <tbody>
                  <td id="tdBusRes" style="width: 705px; height: 405px; padding: 0;">
                  <iframe 
                    class="z-depth-5 card-panel amber darken-0 scale-transition scale-out scale-in btn-large" 
                    src=""
                    id="busRes"
                    style= "width:'100%';height='100%'"
                    allow="autoplay"
                    allow="encrypted-media"
                    title="Dontime Life Website"
                    frameborder="0"
                    allowfullscreen
                    ></iframe>
                  </td>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
      </div>
      <div class="row">
        <div class="col s12 card-panel l12 m12 receipt red">
          <div class="container">
          <div class="z-depth-5 grey toolbar_icon toolbar_iconHover container col s12 receipt">
            <div class="col s12 l12 m12 receipt red">
              <input style="font-size:18pt;color:green" placeholder="research" class="timepicker flow-text menu-img z-depth-5 card-panel black scale-transition scale-out scale-in receipt btn-large" id="busSearch"  type="search" />
            </div>
          </div>
        </div>
        </div>
      </div>
      </div></div></div>
      <script>
        function serverside(func, args) {
          return new Promise((resolve, reject) => {
            google.script.run
            .withSuccessHandler((result) => {
                resolve(result)})
            .withFailureHandler((error) => {
                reject(error)})
            .runBoilerplate(func, args)})};
        var homeSearch = document.getElementById("homeIndex");
        homeSearch.addEventListener("change",(e) => {
          const strValue = homeSearch.value
          var cap = e.target.value
          document.getElementById("homeIndex").value = ""
          document.getElementById("indexLab").innerText = "... waiting for " + strValue
          serverside("mis", [cap])
          .then((vid) => {
            if (vid) {
              // User clicked "No" or X in the title bar.
              document.getElementById("indexLab").innerText = ""
              if (vid.length === 99 || vid.length ===94 || vid.length === 83 || vid.length ===97 || vid.length ===101 || vid.length ===103 || vid.length ===136 || vid.length ===132 || vid.indexOf("&entry") > -1) {
                          document.getElementById("indexRes").src = vid}
              else {
                document.getElementById("tdIndexRes").innerHTML = '<!DOCTYPE html><html><head><base target="_self"></head><body class="amber"><div class="amber" id="div">' + vid + '</div></body></html>'}}})
          .catch((er) => {
            console.log(er)
            document.getElementById("indexLab").innerText = er})})
        homeSearch.addEventListener('keypress', function(event) {
          // If the user preses the "Enter" key on the keyboard. 
          if (event.key === "Enter")  {
          const strValue = homeSearch.value
            if (!strValue) {
              document.getElementById("indexLab").innerText = "... Loading"
              serverside("mis")
              .then((stream) => {
                if (stream) {
                  document.getElementById("indexLab").innerText = ""
                  if (stream.length === 99 || stream.length ===94 || stream.length === 83 || stream.length ===97 || stream.length ===101 || stream.length ===103 || stream.length ===136 || stream.length ===132 || stream.indexOf("&entry") > -1) {
                              document.getElementById("indexRes").src = stream}
                  else {
                    document.getElementById("indexRes").innerHTML = '<!DOCTYPE html><html><head><base target="_self"></head><body class="amber"><div class="amber" id="div">' + stream + '</div></body></html>'}}
                else {
                  document.getElementById("indexLab").innerText =  e}})
              .catch((er) => {
                console.log(er)
                document.getElementById("indexLab").innerText = er})}}})
        var tube = document.getElementById("tubeSearch")
        tube.addEventListener("change",(e) => {
          const strValue = tube.value
          var cap = e.target.value
          document.getElementById("tubeSearch").value = ""
          document.getElementById("tubeLab").innerText = "... waiting for " + strValue
          serverside("mis", [cap])
          .then((vid) => {
            if (vid) {
              // User clicked "No" or X in the title bar.
              document.getElementById("tubeLab").innerText = ""
              if (vid.length === 99 || vid.length ===94 || vid.length === 83 || vid.length ===97 || vid.length ===101 || vid.length ===103 || vid.length ===136 || vid.length ===132 || vid.indexOf("&entry") > -1) {
                          document.getElementById("tubeRes").src = vid}
              else {
                document.getElementById("tdTubeRes").innerHTML = '<!DOCTYPE html><html><head><base target="_self"></head><body class="amber"><div class="amber" id="div">' + vid + '</div></body></html>'}}})
          .catch((er) => {
            console.log(er)
            document.getElementById("tubeLab").innerText =  er})})
        tube.addEventListener('keypress', function(event) {
          // If the user preses the "Enter" key on the keyboard. 
          if (event.key === "Enter")  {
          const strValue = tube.value
          if (!strValue) {
            document.getElementById("tubeLab").innerText = "... Loading"
            serverside("mis")
            .then((stream) => {
              if (stream) {
                document.getElementById("tubeLab").innerText = ""
                if (stream.length === 99 || stream.length ===94 || stream.length === 83 || stream.length ===97 || stream.length ===101 || stream.length ===103 || stream.length ===136 || stream.length ===132 || stream.indexOf("&entry") > -1) {
                            document.getElementById("tubeRes").src = stream}
                else {
                  document.getElementById("tdTubeRes").innerHTML = '<!DOCTYPE html><html><head><base target="_self"></head><body class="amber"><div class="amber" id="div">' + stream + '</div></body></html>'}}
              else {
                document.getElementById("tubeLab").innerText =  e}})
            .catch((er) => {
              console.log(er)
              document.getElementById("tubeLab").innerText =  er})}}})
        var bing = document.getElementById("bingSearch")
        bing.addEventListener("change",(e) => {
          const strValue = bing.value
          var cap = e.target.value
          document.getElementById("bingSearch").value = ""
          document.getElementById("bingLab").innerText = "... waiting for " + strValue
          serverside("mis", [cap])
          .then((vid) => {
            if (vid) {
              // User clicked "No" or X in the title bar.
              document.getElementById("bingLab").innerText = ""
              if (vid.length === 99 || vid.length ===94 || vid.length === 83 || vid.length ===97 || vid.length ===101 || vid.length ===103 || vid.length ===136 || vid.length ===132 || vid.indexOf("&entry") > -1) {
                          document.getElementById("bingRes").src = vid}
              else {
                document.getElementById("tdBingRes").innerHTML = '<!DOCTYPE html><html><head><base target="_self"></head><body class="amber"><div class="amber" id="div">' + vid + '</div></body></html>'}}})
          .catch((er) => {
            console.log(er)
            document.getElementById("bingLab").innerText =  er})})
        bing.addEventListener('keypress', function(event) {
          // If the user preses the "Enter" key on the keyboard. 
          if (event.key === "Enter")  {
          const strValue = bing.value
            if (!strValue) {
              document.getElementById("bingLab").innerText = "... Loading"
              serverside("mis")
              .then((stream) => {
                if (stream) {
                  document.getElementById("bingLab").innerText = ""
                  if (stream.length === 99 || stream.length ===94 || stream.length === 83 || stream.length ===97 || stream.length ===101 || stream.length ===103 || stream.length ===136 || stream.length ===132 || stream.indexOf("&entry") > -1) {
                              document.getElementById("bingRes").src = stream}
                  else {
                    document.getElementById("tdBingRes").innerHTML = '<!DOCTYPE html><html><head><base target="_self"></head><body class="amber"><div class="amber" id="div">' + stream + '</div></body></html>'}}
                else {
                  document.getElementById("bingLab").innerText =  e}})
              .catch((er) => {
                console.log(er)
                document.getElementById("bingLab").innerText =  er})}}})
        var busn = document.getElementById("busSearch")
        busn.addEventListener("change",(e) => {
          const strValue = busn.value
          var cap = e.target.value
          document.getElementById("busSearch").value = ""
          document.getElementById("busLab").innerText = "... waiting for " + strValue
          serverside("mis", [cap])
          .then((html) => {
            if (html) {
              // User clicked "No" or X in the title bar.
              document.getElementById("busLab").innerText = ""
              if (html.length === 99 || html.length ===94 || html.length === 83 || html.length ===97 || html.length ===101 || html.length ===103 || html.length ===136 || html.length ===132 || html.indexOf("&entry") > -1) {
                          document.getElementById("busRes").src = html}
              else {
                document.getElementById("tdBusRes").innerHTML = '<!DOCTYPE html><html><head><base target="_self"></head><body class="amber"><div class="amber" id="div">' + html + '</div></body></html>'}}})
          .catch((er) => {
            console.log(er)
            document.getElementById("busLab").innerText =  er})})
        busn.addEventListener('keypress', function(event) {
          // If the user preses the "Enter" key on the keyboard. 
          if (event.key === "Enter")  {
            const strValue = busn.value
            if (!strValue) {
              document.getElementById("busLab").innerText = "... Loading"
              serverside("mis")
              .then((stream) => {
                if (stream) {
                  document.getElementById("busLab").innerText = ""
                  if (stream.length === 99 || stream.length ===94 || stream.length === 83 || stream.length ===97 || stream.length ===101 || stream.length ===103 || stream.length ===136 || stream.length ===132 || stream.indexOf("&entry") > -1) {
                              document.getElementById("busRes").src = stream}
                  else {
                    document.getElementById("tdBusRes").innerHTML = '<!DOCTYPE html><html><head><base target="_self"></head><body class="amber"><div class="amber" id="div">' + stream + '</div></body></html>'}}
                else {
                  document.getElementById("busLab").innerText =  e}})
              .catch((er) => {
                console.log(er)
                document.getElementById("busLab").innerText =  er})}}})
        var appSearch = document.getElementById("uiApp")
        appSearch.addEventListener("change",(e) => {
          const bar = appSearch.value || "";
          document.getElementById("uiApp").value = ""
          serverside("mis", [bar])
          .then((cChange) => {
              if (cChange) {
                // console.log(cChange)
            var cBlinkFollow = document.createElement("a");
            if (cChange.length === 99 || cChange.length ===94 || cChange.length === 83 || cChange.length ===97 || cChange.length ===101 || cChange.length ===103 || cChange.length ===136 || cChange.length ===132 || cChange.indexOf("&entry") > -1) {
              cBlinkFollow.href = cChange;}
            cBlinkFollow.id = "cBlinkFOLLOW";
            cBlinkFollow.target = "_blank";
            document.body.appendChild(cBlinkFollow);
          document.getElementById("cBlinkFOLLOW").click();
          document.getElementById("cBlinkFOLLOW").remove()}})
          .catch((er) => {
            console.log(er)})
          serverside("mis", [bar])
          .then((cChange) => {
              if (cChange) {
                // console.log(cChange)
            var cdtlinkFollow = document.createElement("a");
            if (cChange.length === 99 || cChange.length ===94 || cChange.length === 83 || cChange.length ===97 || cChange.length ===101 || cChange.length ===103 || cChange.length ===136 || cChange.length ===132 || cChange.indexOf("&entry") > -1) {
              cdtlinkFollow.href = cChange;}
            cdtlinkFollow.id = "cdtlinkFOLLOW";
            cdtlinkFollow.target = "_blank";
            document.body.appendChild(cdtlinkFollow);
          document.getElementById("cdtlinkFOLLOW").click();
          document.getElementById("cdtlinkFOLLOW").remove()}})
          .catch((er) => {
            console.log(er)})
          serverside("mis", [bar])
          .then((cChange) => {
              if (cChange) {
                // console.log(cChange)
            var gwilinkFollow = document.createElement("a");
            if (cChange.length === 99 || cChange.length ===94 || cChange.length === 83 || cChange.length ===97 || cChange.length ===101 || cChange.length ===103 || cChange.length ===136 || cChange.length ===132 || cChange.indexOf("&entry") > -1) {
              gwilinkFollow.href = cChange;}
            gwilinkFollow.id = "gwilinkFOLLOW";
            gwilinkFollow.target = "_blank";
            document.body.appendChild(gwilinkFollow);
          document.getElementById("gwilinkFOLLOW").click();
          document.getElementById("gwilinkFOLLOW").remove()}})
          .catch((er) => {
            console.log(er)})
          serverside("mis", [bar])
          .then((cChange) => {
              if (cChange) {
                // console.log(cChange)
            var hlinkFollow = document.createElement("a");
            if (cChange.length === 99 || cChange.length ===94 || cChange.length === 83 || cChange.length ===97 || cChange.length ===101 || cChange.length ===103 || cChange.length ===136 || cChange.length ===132 || cChange.indexOf("&entry") > -1) {
              hlinkFollow.href = cChange;}
            hlinkFollow.id = "hlinkFOLLOW";
            hlinkFollow.target = "_blank";
            document.body.appendChild(hlinkFollow);
          document.getElementById("hlinkFOLLOW").click();
          document.getElementById("hlinkFOLLOW").remove()}})
          .catch((er) => {
            console.log(er)})})
        appSearch.addEventListener('keypress', function(event) {
          // If the user preses the "Enter" key on the keyboard. 
          if (event.key === "Enter")  {}})
          function onUserClick(bar) {
            var foo = "mis";
            var oulinkFollow = document.createElement("a");
            oulinkFollow.href = <?= appUrl ?> + foo + "&args=" + bar;
            oulinkFollow.id = "oulinkFOLLOW";
            oulinkFollow.target = "_blank";
            document.body.appendChild(oulinkFollow);}
          function openTheForm(bar) {
            onUserClick(bar)
            document.getElementById("oulinkFOLLOW").click();
            document.getElementById("uiApp").value = ""
            document.getElementById("oulinkFOLLOW").remove()};
      </script>
    </body>
  </html>
  `,
  )
    .evaluate()
    .getContent();
};
// <div class="row">
//   <nav class="col s10 push-s1 push-m1 push-l1 menu z-depth-5 card-panel amber scale-out scale-in" style="font-size: 30px">
//     <div class="container">
//       <div class="col s12 receipt nav-wrapper deep-purple darken-1">
//           <a href="#" onclick="aboutMeSearch()" target="_self" id="aboutme">About-Me</a><br />
//           <a href="#" onclick="shopResearch()" id="shopstore">Store</a><br />
//           <a href="#" onclick="secResearch()" id="secenv">Local Enviroment</a><br />
//           <a href="#" onclick="calcResearch()" id="calculate">Calculate</a><br />
//           <a href="#" onclick="investResearch()" id="invest">Investors</a><br />
//           <a href="#" onclick="newResearch()" id="rndnew">New</a><br />
//       </div></div>
//     </nav>
// </div>
// <div class="row">
//   <div class="col s10 card-panel amber push-s1 push-m1 push-l1">
//     <div class="container">
//       <div class="col s12 receipt deep-purple darken-1">
//         <div id="dlts"></div>
//       </div>
//     </div>
//   </div>
// </div>
// <div class="row">
//   <div class="col s10 card-panel amber push-s1 push-m1 push-l1">
//     <div class="container">
//       <div class="col s12 receipt deep-purple darken-1">
//         <label for="appList" class="active" style="font-size: 16px; top: -5px; left: -4px;">Choose your function...</label>
//           <select id="appList" class="browser-default deep-purple darken-1"></select>
//       </div>
//     </div>
//   </div>
// </div>

var contentApp = function (blob, argsObject) {
  console.log(
    Math.floor((maxTime - (new Date() % (1000 * 60))) / 1000) +
      "\n" +
      arguments.callee.name +
      "\nblob is !" +
      !blob +
      " = " +
      blob +
      "\nargsObject is !" +
      !argsObject +
      " = " +
      argsObject,
  );
  try {
    const tmp = HtmlService.createTemplate(
      ContentService.createTextOutput(blob)
        .setMimeType(ContentService.MimeType.JSON)
        .getContent(),
    );
    if (argsObject) {
      const keys = Object.keys(argsObject);
      keys.forEach(function (key) {
        tmp[key] = argsObject[key];
      });
    }
    return tmp
      .evaluate()
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
      .setSandboxMode(HtmlService.SandboxMode.IFRAME)
      .getContent();
  } catch (error) {
    console.log("error in contentApp: " + error);
    return "Error rendering template.";
  }
}; // or throw error.

// const tmp = ContentService.createTextOutput(JSON.stringify({ argsObject }));
// const argsObject = ContentService.createTextOutput({ args });
// if (argsObject) {
// if (ContentService.createTextOutput(JSON.stringify({ argsObject })).setMimeType(ContentService.MimeType.JSON).getContent()) {
// const keys = Object.keys(argsObject);
// tmp["list"] = htmlListArray;
// END IF
// Route[file] = argsObject
// return tmp.setMimeType(ContentService.MimeType.JSON).getContent()

var contentBlob = function (blob, argsObject) {
  var tmp = HtmlService.createTemplate(blob);
  if (argsObject) {
    var keys = Object.keys(argsObject);
    keys.forEach(function (key) {
      tmp[key] = argsObject[key];
    });
  }
  return tmp
    .evaluate()
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.SAMEORIGIN)
    .getContent();
};
// const tmp = ContentService.createTextOutput(JSON.stringify({ argsObject }));
// const argsObject = ContentService.createTextOutput({ args });
// if (argsObject) {
// if (ContentService.createTextOutput(JSON.stringify({ argsObject })).setMimeType(ContentService.MimeType.JSON).getContent()) {
// const keys = Object.keys(argsObject);
// tmp = ContentService.createTextOutput(tmp.evaluate().getContent()).getContent()
// tmp["list"] = htmlListArray;
// END IF
// Route[file] = argsObject
// return tmp.setMimeType(ContentService.MimeType.JSON).getContent()

var contentTemplate = function (file, argsObject) {
  var tmp = HtmlService.createTemplateFromFile(file);
  if (argsObject) {
    var keys = Object.keys(argsObject);
    keys.forEach(function (key) {
      tmp[key] = argsObject[key];
    });
  }
  return tmp
    .evaluate()
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.SAMEORIGIN)
    .getContent();
};
// const tmp = ContentService.createTextOutput(JSON.stringify({ argsObject }));
// const argsObject = ContentService.createTextOutput({ args });
// if (argsObject) {
// if (ContentService.createTextOutput(JSON.stringify({ argsObject })).setMimeType(ContentService.MimeType.JSON).getContent()) {
// const keys = Object.keys(argsObject);
// tmp = ContentService.createTextOutput(tmp.evaluate().getContent()).setMimeType(ContentService.MimeType.JAVASCRIPT).getContent()
// tmp["list"] = htmlListArray;
// END IF
// Route[file] = argsObject
// return tmp.setMimeType(ContentService.MimeType.JSON).getContent()

var contentCDN = function (url, argsObject) {
  var redirectURL = encodeURIComponent(
    url +
      "?" +
      Object.keys(argsObject)
        .map((key) => key + "=" + argsObject[key])
        .join("&"),
  );
  return HtmlService.createHtmlOutputFromFile("cors")
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL) //Important for CORS
    .setSandboxMode(HtmlService.SandboxMode.IFRAME)
    .addMetaTag("http-equiv", "refresh", "0; url=" + redirectURL);
};

var contentFile = function (file, argsObject) {
  const tmp = HtmlService.createTemplateFromFile(
    ContentService.createTextOutput(file)
      .setMimeType(ContentService.MimeType.JSON)
      .getContent(),
  );
  if (argsObject) {
    const keys = Object.keys(argsObject);
    keys.forEach(function (key) {
      tmp[key] = argsObject[key];
    });
  }
  return tmp
    .evaluate()
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.SAMEORIGIN)
    .getContent();
};
// const tmp = ContentService.createTextOutput(JSON.stringify({ argsObject }));
// const argsObject = ContentService.createTextOutput({ args });
// if (argsObject) {
// if (ContentService.createTextOutput(JSON.stringify({ argsObject }))
//  .setMimeType(ContentService.MimeType.JSON).getContent())
//  {const keys = Object.keys(argsObject);
// tmp["list"] = htmlListArray;
// END IF
// Route[file] = argsObject
// return tmp.setMimeType(ContentService.MimeType.JSON).getContent()

function eTest() {
  console.log(Math.floor(maxTime - start / 1000));
}

var fiveTime = new Date(5 * 59.9 * 1000).getMilliseconds();

var fourTime = new Date(4 * 59.9 * 1000).getMilliseconds();

var include = function (file, argsObject) {
  console.log(JSON.stringify(this["start"]) + "\n" + arguments.callee.name);
  const tmp = HtmlService.createHtmlOutputFromFile(file);
  if (argsObject) {
    const keys = Object.keys(argsObject);

    keys.forEach(function (key) {
      tmp[key] = argsObject[key];
    });

    // tmp["list"] = htmlListArray;
  } // END IF
  // Route[file] = argsObject
  return tmp
    .asTemplate()
    .evaluate()
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.SAMEORIGIN)
    .getBlob()
    .getDataAsString();
};

var includeApp = function (blob, argsObject) {
  const tmp = HtmlService.createHtmlOutput(blob);
  if (argsObject) {
    const keys = Object.keys(argsObject);

    keys.forEach(function (key) {
      tmp[key] = argsObject[key];
    });

    // tmp["list"] = htmlListArray;
  } // END IF
  // Route[file] = argsObject
  return tmp
    .asTemplate()
    .evaluate()
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.SAMEORIGIN);
};

var includeBlob = function (file, argsObject) {
  if (file) {
    const temp = ContentService.createTextOutput(
      HtmlService.createTemplateFromFile(file).evaluate().getContent(),
    );
    const tmp = HtmlService.createTemplate(
      temp.setMimeType(ContentService.MimeType.TEXT).getContent(),
    );
    if (argsObject) {
      const keys = Object.keys(argsObject);
      keys.forEach(function (key) {
        tmp[key] = argsObject[key];
      });
      // tmp["list"] = htmlListArray;
    } // END IF
    // Route[file] = argsObject
    return tmp
      .evaluate()
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.SAMEORIGIN);
  }
};

var includeGSFile = function (file, argsArray) {
  return renderTemplate(`<?!= appJS ?>`, {
    appJS: async function () {
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
      try {
        if (file) {
          const content = await serverSide(file, argsArray);
          return content;
        }
      } catch (error_1) {
        console.log(error_1);
      }
    },
  });
};

var includeGSBlob = function (blob, argsArray) {
  return renderTemplate(`<?!= appJS ?>`, {
    appJS: async function () {
      try {
        const content = await serverSide(blob, argsArray);
        return content;
      } catch (error_1) {
        console.log(error_1);
      }
    },
  });
};

var includeRunIt = () => {};

var includeJs = function (blob, argsObject) {
  const tmp = HtmlService.createTemplate(blob);
  if (argsObject) {
    const keys = Object.keys(argsObject);

    keys.forEach(function (key) {
      tmp[key] = argsObject[key];
    });

    // tmp["list"] = htmlListArray;
  } // END IF
  // Route[file] = argsObject
  return tmp
    .evaluate()
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.SAMEORIGIN);
};

var maxTime = new Date(6 * 59.9 * 1000);

var myFunction = function (webApp, argsObject) {
  const tmp = HtmlService.createHtmlOutput(webApp);
  if (argsObject) {
    const keys = Object.keys(argsObject);

    keys.forEach(function (key) {
      tmp[key] = argsObject[key];
    });

    // tmp["list"] = htmlListArray;
  } // END IF
  // Route[file] = argsObject
  return tmp.setXFrameOptionsMode(HtmlService.XFrameOptionsMode.SAMEORIGIN);
};

var oneTime = new Date(59.9 * 1000).getMilliseconds();

var renderFile = function (file, argsObject, title) {
  console.log(
    Math.floor((maxTime - (new Date() % (1000 * 60))) / 1000) +
      "\n" +
      arguments.callee.name +
      "\n!" +
      file +
      " = " +
      !file,
  );
  try {
    if (file) {
      const tmp = HtmlService.createTemplateFromFile(file);
      if (argsObject) {
        const keys = Object.keys(argsObject);
        keys.forEach(function (key) {
          tmp[key] = argsObject[key];
        });
      }

      // tmp["list"] = htmlListArray;
      // END IF
      // Route[file] = argsObject
      // var research = geneFrame(seoSheet(coUtility()[0].rndTitle).url
      var funcCheck = appList();
      var schedule = dateTime(new Date());
      var html = contentApp(
        `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <base target="_top">
          <meta charset="UTF-8">
          <meta name="renderTemplate" content="Boilerplate Render Template">
          <meta name=viewport content="width=device-width, initial-scale=1">
          <meta name="contentApp" content="conveyance, power, authority, measured, assessed, subjective, interpretation, understanding, complex, phenomena, Social, Influence, beliefs, attitudes, behaviors, surveys, observations, social, science, research, methods, Compliance, Obedience, directives, Visible, Demonstrations, commands, decisions, resources, enforcing, rules, evidence, exercise, Contextual, Dependence, effectiveness, political, cultural, environment, Qualitative, Aspects, impact, involves, factors, respect, legitimacy, consent, difficult, quantify, precisely, Subjectivity, concepts, single, universally, agreed-upon, definition, constitutes, individuals, involved, values, observer">
          <link href="https://fonts.googleapis.com/css?family=Acme" rel="stylesheet">
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
          <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
          <meta content="739921544160-nvqbr8cmqcs35n700q94mn5qnjh7vdr5.apps.googleusercontent.com" name="google-signin-client_id"></meta>
          <script src="https://apis.google.com/js/api.js?onload=onApiLoad"></script>
          <script async="" defer="" src="https://apis.google.com/js/platform.js"></script>
          <link rel="preconnect" href="https://fonts.googleapis.com">
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
          <link href="https://fonts.googleapis.com/css2?family=Libre+Barcode+128&family=Montserrat:ital@1&family=Oswald&family=Roboto&display=swap" rel="stylesheet">
          <link href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" rel="stylesheet"></link>
          <link href="https://unpkg.com/tabulator-tables@5.2.3/dist/css/tabulator_materialize.min.css" rel="stylesheet">
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/luxon/3.0.1/luxon.min.js" integrity="sha512-6ZJuab/UnRq1muTChgrVxJhSgygmL2GMLVmSJN7pcBEqJ1dWPbqN9CiZ6U3HrcApTIJsLnMgXYBYgtVkJ8fWiw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
          <script type="text/javascript" src="https://unpkg.com/tabulator-tables@5.2.3/dist/js/tabulator.min.js"></script>
          <style>
          * {box-sizing: border-box;margin: 0;
            padding: 0;font-family: "Roboto", sans-serif;}
          html,
          body {height: 100%;}
          main {height: 92%;
                margin-top: 10px;}
          body {background-color: #ffc107;}
          header {background-color: rgba(255,255,255,.1);
                  color: #a7e1ee;
                  font-size: smaller;}
          header h1 {font-family: "Montserrat", cursive;
                    margin-left: 15px;}
          .grid {display: grid;}
          .flex-row {display: flex;
                    flex-direction: row;}
          .flex-column {display: flex;
                        flex-direction: column;}
          .order,
          .menu-payment {border: solid .5px;
                        border-radius: 10px;
                        margin: 0px 10px 5px 10px;
                        height: 100%;
                        max-height: 100%;}
          /* -----------------------------------ORDER--------------------------- */
          .order {background-color: white;
                  flex: 0 0 440px;
                  overflow: auto;}
          .receipt {border: solid .5px;
                    margin: 10px 15px 5px 15px;
                    box-shadow: 3px 3px 2px rgb(3,3,3);
                    user-select: none;
                    flex-grow: 1;}
          .receipt,
          .company-info,
          .receipt-footer {align-items: center;}
          .company-info {margin-top: 5px;}
          #company-name {font-size: 1.5rem;}
          #company-phone {font-size: 1.25rem;}
          th.description {width: 180px;
                          text-align: left;}
          th.price {width: 75px;}
          .quantity,
          .price,
          .subtotal,
          .delete {text-align: right;}
          .receipt-details {margin-top: 10px;
                            flex-grow: 1;}
          .dotted-border {border-bottom: dotted 2px;}
          .fa-trash-can:hover {transform: scale(1.2);}
          table.summary-table {text-align: right;}
          tbody.summary-table td:nth-child(1) {width: 277px;}
          tbody.summary-table td:nth-child(2) {width: 75px;}
          tbody.summary-table td:nth-child(3) {width: 25px;}
          .receipt-footer {padding-top: 20px;}
          #barcode {font-family: "Libre Barcode 128", cursive;
                    font-size: 70px;
                    margin-top: 10px;}
          .toolbar {flex: 0 0 60px;
                    justify-content: space-around;
                    align-items: center;
                    border: solid .5px;
                    border-radius: 10px;
                    margin: 0px 15px 5px 15px;}
          .toolbar-icon {font-size: 2rem;}
          .toolbar-icon:hover {transform: scale(1.2);}
          /* ----------------------------Menu-Payment-------------------------- */
          .menu-payment {background: rgba(255, 255, 255, .05);
                        flex-grow: 1;
                        z-index: 0;}
          .menu {flex-flow: row wrap;
                grid-column: 1;
                grid-row: 1;
                align-content: flex-start;
                z-index: 0;
                height: 100%;
                overflow: auto;}
          .menu-item {flex-flow: 
                    column nowrap;
                    flex-basis: auto;
                    flex-shrink: 0;
                    margin: 5px;
                    background: rgba(255, 255, 255, .05);
                    width: 150px;}
          .menu-img {border-radius: 50%;
                    max-width: 100%;
                    height: auto;
                    display: block;
                    margin: auto;}
          figcaption {color: white;
                      text-align: center;
                      user-select: none;}
          .menu-item:hover>.menu-img {transform: scale(1.03);}
          img {width: 160px;}
          </style>
        </head>
        <body id="renderFile">
      <div class="row">
      <div class="col s12 card-panel amber">
      <div class="container">
      <div class="col s12 receipt red">
      <table class="striped centered highlight responsive-table grey z-depth-5" style="width:100%">
        <thead>
        </thead>
        <tbody>
          <tr>
            <td style="vertical-align: top;text-align: left">
              <table class="striped centered highlight responsive-table grey z-depth-5" style="width:100%">
                <tbody>
                  <td>
                    <div class="row"><p>
                    <p> Is the conveyance of power and authority an objective, measurable quantity?</p><br />


                    <i>   No, the conveyance of power and authority is not inherently an objective, measurable quantity. Here's why:
                    <br />
                    <br />
                    </i>
                    <div class="row">
                          <p style="text-align: left">Subjectivity in Definition: Power and authority themselves are complex concepts with no single, universally agreed-upon definition. What constitutes "power" or "authority" can vary significantly depending on the context, the individuals involved, and the values held by the observer.</p>
                    <br />
                          <p style="text-align: left">Qualitative Aspects: The impact of power and authority often involves qualitative factors like influence, respect, legitimacy, and the consent of those subject to it. These are difficult to quantify precisely.</p>
                    <br />
                          <p style="text-align: left">Contextual Dependence: The effectiveness of the conveyance of power and authority depends heavily on the specific context – the social, political, and cultural environment in which it occurs.</p>
                    <br />
                    </div>
                    <i>
                          However, there are some aspects that can be measured or assessed to some degree:
                    <br />
                    <br />
                    </i>
                    <div class="row">
                          <p style="text-align: left">Visible Demonstrations: Observable actions like issuing commands, making decisions, controlling resources, or enforcing rules can provide evidence of the exercise of power.</p>
                    <br />
                          <p style="text-align: left">Compliance and Obedience: The extent to which others comply with the directives of an authority figure can be observed and, to some extent, measured.</p>
                    <br />
                          <p style="text-align: left">Social Influence: The ability to influence the beliefs, attitudes, or behaviors of others can be assessed through surveys, observations, or other social science research methods.</p>
                    <br />
                    </div>
                    <p style="text-align: left">
                          In conclusion: While some aspects of the conveyance of power and authority can be measured or assessed, it's crucial to acknowledge the inherent limitations and the significant role of subjective interpretation in understanding these complex phenomena.
                    <br />
                    </p>
                    </p>
                    </div>
                    <br />
                  </td>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
      </div></div></div></div>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
      <script>
        function serverside(func, args) {
        return new Promise((resolve, reject) => {
          google.script.run
          .withSuccessHandler(result => {
              resolve(result)})
          .withFailureHandler(error => {
              reject(error)})
          .runBoilerplate(func, args)})}; 
      </script>
      <script>document.getElementById('func').addEventListener('change', <?!= funcClicked ?>)</script>
      <script>document.getElementById('args').addEventListener('change', <?!= argsClicked ?>)</script>
      <input type="hidden" value="<?= getUrl(ScriptApp) ?>" id="url" />
    </body>
  </html>`,
        {
          funcClicked: function () {
            //console.log(document.getElementById("test").innerHTML)
            // Init a timeout variable to be used below
            let timeout = null;
            (() => {
              // Clear the timeout if it has already been set.
              // This will prevent the previous task from executing
              // if it has been less than <MILLISECONDS>
              // clearTimeout(timeout);
              // Make a new timeout set to go off in 1000ms (1 second)
              // timeout = setTimeout
              // (function  ()
              // {console.log('Input Value:', textInput.value);}, 5000)();
              if (typeof url === "undefined") {
                var urlData = document.getElementById("url").value;
                var url = urlData.toString();
              }
              var func = document.getElementById("func").value;
              var args = document.getElementById("args").value;
              if (typeof args !== "undefined") {
                var linkFollow = document.createElement("a");
                linkFollow.href =
                  url +
                  "?func=" +
                  encodeURIComponent(func) +
                  "&args=" +
                  encodeURIComponent(args);
                linkFollow.id = "linkFOLLOW";
                linkFollow.target = "_top";
                document.body.appendChild(linkFollow);
                document.getElementById("linkFOLLOW").click();
                document.getElementById("linkFOLLOW").remove();
              }
            })();
          },
          argsClicked: function () {
            //console.log(document.getElementById("test").innerHTML)
            // Init a timeout variable to be used below
            let timeout = null;
            (() => {
              // Clear the timeout if it has already been set.
              // This will prevent the previous task from executing
              // if it has been less than <MILLISECONDS>
              // clearTimeout(timeout);
              // Make a new timeout set to go off in 1000ms (1 second)
              // timeout = setTimeout
              // (function  ()
              // {console.log('Input Value:', textInput.value);}, 5000)();
              if (typeof url === "undefined") {
                var urlData = document.getElementById("url").value;
                var url = urlData.toString();
              }
              var func = document.getElementById("func").value;
              var args = document.getElementById("args").value;
              if (typeof func !== "undefined") {
                var linkFollow = document.createElement("a");
                linkFollow.href =
                  url +
                  "?func=" +
                  encodeURIComponent(func) +
                  "&args=" +
                  encodeURIComponent(args);
                linkFollow.id = "linkFOLLOW";
                linkFollow.target = "_top";
                document.body.appendChild(linkFollow);
                document.getElementById("linkFOLLOW").click();
                document.getElementById("linkFOLLOW").remove();
              }
            })();
          },
        },
      );
      return tmp
        .evaluate()
        .setTitle(title)
        .append(funcCheck)
        .append(html)
        .setSandboxMode(HtmlService.SandboxMode.IFRAME)
        .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
        .getContent();
    } else {
      return handleRequest(argsObject);
    }
  } catch (error) {
    console.log("error in renderTemplate: " + error);
    return "Error rendering template.";
  }
};

var renderTemplate = function (blob, argsObject, title) {
  console.log(
    Math.floor((maxTime - (new Date() % (1000 * 60))) / 1000) +
      "\n" +
      arguments.callee.name,
  );
  try {
    const tmp = HtmlService.createTemplate(blob);
    if (argsObject) {
      const keys = Object.keys(argsObject);
      keys.forEach(function (key) {
        tmp[key] = argsObject[key];
      });
    }
    var funcCheck = appList();
    var schedule = dateTime(new Date());
    // var research = geneFrame(seoSheet(coUtility()[0].rndTitle).url)
    var html = contentApp(
      `
    <html id="renderTemplate">
      <head>
        <base target="_top">
        <meta charset="UTF-8">
        <meta name="renderTemplate" content="Boilerplate Render Template">
        <meta name=viewport content="width=device-width, initial-scale=1">
        <meta name="contentApp" content="conveyance, power, authority, measured, assessed, subjective, interpretation, understanding, complex, phenomena, Social, Influence, beliefs, attitudes, behaviors, surveys, observations, social, science, research, methods, Compliance, Obedience, directives, Visible, Demonstrations, commands, decisions, resources, enforcing, rules, evidence, exercise, Contextual, Dependence, effectiveness, political, cultural, environment, Qualitative, Aspects, impact, involves, factors, respect, legitimacy, consent, difficult, quantify, precisely, Subjectivity, concepts, single, universally, agreed-upon, definition, constitutes, individuals, involved, values, observer">
        <link href="https://fonts.googleapis.com/css?family=Acme" rel="stylesheet">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
        <meta content="739921544160-nvqbr8cmqcs35n700q94mn5qnjh7vdr5.apps.googleusercontent.com" name="google-signin-client_id"></meta>
        <script src="https://apis.google.com/js/api.js?onload=onApiLoad"></script>
        <script async="" defer="" src="https://apis.google.com/js/platform.js"></script>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Libre+Barcode+128&family=Montserrat:ital@1&family=Oswald&family=Roboto&display=swap" rel="stylesheet">
        <link href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" rel="stylesheet"></link>
        <link href="https://unpkg.com/tabulator-tables@5.2.3/dist/css/tabulator_materialize.min.css" rel="stylesheet">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/luxon/3.0.1/luxon.min.js" integrity="sha512-6ZJuab/UnRq1muTChgrVxJhSgygmL2GMLVmSJN7pcBEqJ1dWPbqN9CiZ6U3HrcApTIJsLnMgXYBYgtVkJ8fWiw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
        <script type="text/javascript" src="https://unpkg.com/tabulator-tables@5.2.3/dist/js/tabulator.min.js"></script>
        <style>
        * {box-sizing: border-box;margin: 0;
          padding: 0;font-family: "Roboto", sans-serif;}
        html,
        body {height: 100%;}
        main {height: 92%;
              margin-top: 10px;}
        body {background-color: #ffc107;}
        header {background-color: rgba(255,255,255,.1);
                color: #a7e1ee;
                font-size: smaller;}
        header h1 {font-family: "Montserrat", cursive;
                  margin-left: 15px;}
        .grid {display: grid;}
        .flex-row {display: flex;
                  flex-direction: row;}
        .flex-column {display: flex;
                      flex-direction: column;}
        .order,
        .menu-payment {border: solid .5px;
                      border-radius: 10px;
                      margin: 0px 10px 5px 10px;
                      height: 100%;
                      max-height: 100%;}
        /* -----------------------------------ORDER--------------------------- */
        .order {background-color: white;
                flex: 0 0 440px;
                overflow: auto;}
        .receipt {border: solid .5px;
                  margin: 10px 15px 5px 15px;
                  box-shadow: 3px 3px 2px rgb(3,3,3);
                  user-select: none;
                  flex-grow: 1;}
        .receipt,
        .company-info,
        .receipt-footer {align-items: center;}
        .company-info {margin-top: 5px;}
        #company-name {font-size: 1.5rem;}
        #company-phone {font-size: 1.25rem;}
        th.description {width: 180px;
                        text-align: left;}
        th.price {width: 75px;}
        .quantity,
        .price,
        .subtotal,
        .delete {text-align: right;}
        .receipt-details {margin-top: 10px;
                          flex-grow: 1;}
        .dotted-border {border-bottom: dotted 2px;}
        .fa-trash-can:hover {transform: scale(1.2);}
        table.summary-table {text-align: right;}
        tbody.summary-table td:nth-child(1) {width: 277px;}
        tbody.summary-table td:nth-child(2) {width: 75px;}
        tbody.summary-table td:nth-child(3) {width: 25px;}
        .receipt-footer {padding-top: 20px;}
        #barcode {font-family: "Libre Barcode 128", cursive;
                  font-size: 70px;
                  margin-top: 10px;}
        .toolbar {flex: 0 0 60px;
                  justify-content: space-around;
                  align-items: center;
                  border: solid .5px;
                  border-radius: 10px;
                  margin: 0px 15px 5px 15px;}
        .toolbar-icon {font-size: 2rem;}
        .toolbar-icon:hover {transform: scale(1.2);}
        /* ----------------------------Menu-Payment-------------------------- */
        .menu-payment {background: rgba(255, 255, 255, .05);
                      flex-grow: 1;
                      z-index: 0;}
        .menu {flex-flow: row wrap;
              grid-column: 1;
              grid-row: 1;
              align-content: flex-start;
              z-index: 0;
              height: 100%;
              overflow: auto;}
        .menu-item {flex-flow: 
                  column nowrap;
                  flex-basis: auto;
                  flex-shrink: 0;
                  margin: 5px;
                  background: rgba(255, 255, 255, .05);
                  width: 150px;}
        .menu-img {border-radius: 50%;
                  max-width: 100%;
                  height: auto;
                  display: block;
                  margin: auto;}
        figcaption {color: white;
                    text-align: center;
                    user-select: none;}
        .menu-item:hover>.menu-img {transform: scale(1.03);}
        img {width: 160px;}
        </style>
      </head>
      <body>
      <div class="row">
      <div class="col s12 card-panel amber">
      <div class="container">
      <div class="col s12 receipt red">
      <table class="striped centered highlight responsive-table grey z-depth-5" style="width:100%">
        <thead>
        </thead>
        <tbody>
          <tr style="justify-content: space-around;overflow: auto;border-radius: 3%;max-width: 100%;height: auto;display: block;margin: auto;">
            <td style="vertical-align: top;text-align: left;flex-flow: row wrap;grid-column: 1;grid-row: 1;align-content: flex-start;z-index: 0;height: 100%;overflow: auto;">
              <table class="striped centered highlight responsive-table grey z-depth-5" style="width:100%">
                <tbody>
                  <td>
                    <div><p>
                    <p> Is the conveyance of power and authority an objective, measurable quantity?</p><br />


                    <i>   No, the conveyance of power and authority is not inherently an objective, measurable quantity. Here's why:
                    <br />
                    <br />
                    </i>
                    <div>
                          <p style="text-align: left">Subjectivity in Definition: Power and authority themselves are complex concepts with no single, universally agreed-upon definition. What constitutes "power" or "authority" can vary significantly depending on the context, the individuals involved, and the values held by the observer.</p>
                    <br />
                          <p style="text-align: left">Qualitative Aspects: The impact of power and authority often involves qualitative factors like influence, respect, legitimacy, and the consent of those subject to it. These are difficult to quantify precisely.</p>
                    <br />
                          <p style="text-align: left">Contextual Dependence: The effectiveness of the conveyance of power and authority depends heavily on the specific context – the social, political, and cultural environment in which it occurs.</p>
                    <br />
                    </div>
                    <i>
                          However, there are some aspects that can be measured or assessed to some degree:
                    <br />
                    <br />
                    </i>
                    <div>
                          <p style="text-align: left">Visible Demonstrations: Observable actions like issuing commands, making decisions, controlling resources, or enforcing rules can provide evidence of the exercise of power.</p>
                    <br />
                          <p style="text-align: left">Compliance and Obedience: The extent to which others comply with the directives of an authority figure can be observed and, to some extent, measured.</p>
                    <br />
                          <p style="text-align: left">Social Influence: The ability to influence the beliefs, attitudes, or behaviors of others can be assessed through surveys, observations, or other social science research methods.</p>
                    <br />
                    </div>
                    <p style="text-align: left">
                          In conclusion: While some aspects of the conveyance of power and authority can be measured or assessed, it's crucial to acknowledge the inherent limitations and the significant role of subjective interpretation in understanding these complex phenomena.
                    <br />
                    </p>
                    </p>
                    </div>
                    <br />
                  </td>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
      </div></div></div></div>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
        <script>
          function serverside(func, args) {
          return new Promise((resolve, reject) => {
            google.script.run
            .withSuccessHandler(result => {
                resolve(result)})
            .withFailureHandler(error => {
                reject(error)})
            .runBoilerplate(func, args)})};
        var busa = document.getElementById("artiicleIndex");
        var busx = document.getElementById("loadingLab");
        var busc = document.getElementById("contentDiv");
        busa.addEventListener('keypress', function(event) {
          // If the user preses the "Enter" key on the keyboard. 
          if (event.key === "Enter")  {
            const strValue = busa.value;
            busx.innerText = "... waiting for " + strValue;
            serverside("jFund", strValue)
            .then((article) => {
              if (article) {
                // User clicked "No" or X in the title bar.
                busx.innerText = ""
                busc.innerHTML = article;}})
            .catch((er) => {
              console.log(er)
              busx.innerText = JSON.stringify(er)})
            busa.value = ""}})
      </script>
        <script>document.getElementById('func').addEventListener('change', <?!= funcClicked ?>)</script>
        <script>document.getElementById('args').addEventListener('change', <?!= argsClicked ?>)</script>
        <input type="hidden" value="<?= getUrl(ScriptApp) ?>" id="url" />
      </body>
    </html>`,
      {
        funcClicked: function () {
          //console.log(document.getElementById("test").innerHTML)
          // Init a timeout variable to be used below
          let timeout = null;
          (() => {
            // Clear the timeout if it has already been set.
            // This will prevent the previous task from executing
            // if it has been less than <MILLISECONDS>
            // clearTimeout(timeout);
            // Make a new timeout set to go off in 1000ms (1 second)
            // timeout = setTimeout
            // (function  ()
            // {console.log('Input Value:', textInput.value);}, 5000)();
            if (typeof url === "undefined") {
              var urlData = document.getElementById("url").value;
              var url = urlData.toString();
            }
            var func = document.getElementById("func").value;
            var args = document.getElementById("args").value;
            if (typeof args !== "undefined") {
              var linkFollow = document.createElement("a");
              linkFollow.href =
                url +
                "?func=" +
                encodeURIComponent(func) +
                "&args=" +
                encodeURIComponent(args);
              linkFollow.id = "linkFOLLOW";
              linkFollow.target = "_top";
              document.body.appendChild(linkFollow);
              document.getElementById("linkFOLLOW").click();
              document.getElementById("linkFOLLOW").remove();
            }
          })();
        },
        argsClicked: function () {
          //console.log(document.getElementById("test").innerHTML)
          // Init a timeout variable to be used below
          let timeout = null;
          (() => {
            // Clear the timeout if it has already been set.
            // This will prevent the previous task from executing
            // if it has been less than <MILLISECONDS>
            // clearTimeout(timeout);
            // Make a new timeout set to go off in 1000ms (1 second)
            // timeout = setTimeout
            // (function  ()
            // {console.log('Input Value:', textInput.value);}, 5000)();
            if (typeof url === "undefined") {
              var urlData = document.getElementById("url").value;
              var url = urlData.toString();
            }
            var func = document.getElementById("func").value;
            var args = document.getElementById("args").value;
            if (typeof func !== "undefined") {
              var linkFollow = document.createElement("a");
              linkFollow.href =
                url +
                "?func=" +
                encodeURIComponent(func) +
                "&args=" +
                encodeURIComponent(args);
              linkFollow.id = "linkFOLLOW";
              linkFollow.target = "_top";
              document.body.appendChild(linkFollow);
              document.getElementById("linkFOLLOW").click();
              document.getElementById("linkFOLLOW").remove();
            }
          })();
        },
      },
    );
    return tmp
      .evaluate()
      .setTitle(title)
      .append(funcCheck)
      .append(html)
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
      .setSandboxMode(HtmlService.SandboxMode.IFRAME);
  } catch (error) {
    console.log("error in renderTemplate: " + error);
    return "Error rendering template.";
  }
}; // or throw error.

// Gets a cache that is common to all users of the script
var sCache = CacheService.getScriptCache();

var start = new Date(0.1 * 1000).getMilliseconds();

var tagBuilder = function (content) {
  console.log(JSON.stringify(this["start"]) + "\n" + arguments.callee.name);
  const htmlBody = contentApp(content);
  return htmlBody;
};

var threeTime = new Date(3 * 59.9 * 1000).getMilliseconds();

var twoTime = new Date(2 * 59.9 * 1000).getMilliseconds();
