function styleHtml() {
  var startPageUrl = getUrl(ScriptApp) + "?default";
  var content = HtmlService.createTemplate(`
    <!DOCTYPE html>
      <html>
        <head>
          <?!= utf_8 ?>
          <?!= viewport ?>
          <?!= googleApis_preConnect ?>
          <?!= googleApisCss ?>
          <?!= fontAwesome ?>
          <?!= materializeCss ?>
          <?!= tabulatorCss ?>
          <?!= gstatic_preConnect ?>
          <style>
            <?!= website ?>
            <?!= html ?>
            <?!= main ?>
            <?!= body ?>
            <?!= header ?>
            <?!= header_h1 ?>
            <?!= grid ?>
            <?!= flex_row ?>
            <?!= flex_column ?>
            <?!= order_menu_payment ?>
            <?!= seperator1 ?>
            <?!= order ?>
            <?!= receipt ?>
            <?!= receipt_company_info_receipt_footer ?>
            <?!= company_info ?>
            <?!= company_name ?>
            <?!= company_phone ?>
            <?!= th_description ?>
            <?!= th_price ?>
            <?!= quantity_price_subtotal_delete ?>
            <?!= receipt_details ?>
            <?!= dotted_border ?>
            <?!= fa_trash_canHover ?>
            <?!= tableSummary_table ?>
            <?!= tbodySummary_table_tdNth_child1 ?>
            <?!= tbodySummary_table_tdNth_child2 ?>
            <?!= tbodySummary_table_tdNth_child3 ?>
            <?!= receipt_footer ?>
            <?!= barcode ?>
            <?!= toolbar ?>
            <?!= toolbar_icon ?>
            <?!= toolbar_iconHover ?>
            <?!= seperator2 ?>
            <?!= menu_payment ?>
            <?!= menu ?>
            <?!= menu_item ?>
            <?!= menu_img ?>
            <?!= figcaption ?>
            <?!= menu_itemHover ?>
            <?!= img ?>
          </style>
        </head>
        <body>
          <?!= materializeJs ?>
          <?!= luxonJs ?>
          <?!= tabulatorJs ?>
        </body>
      </html>`);
  content.utf_8 = HtmlService.createHtmlOutput(
    `
    <meta charset="UTF-8">`
  ).getContent();
  content.viewport = HtmlService.createHtmlOutput(
    `
    <meta name="viewport" content="width=device-width, initial-scale=1.0">`
  ).getContent();
  content.fontAwesome = HtmlService.createHtmlOutput(
    `
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />`
  ).getContent();
  content.google_charts_loader = HtmlService.createHtmlOutput(
    `
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>`
  ).getContent();
  content.google_signin_client = HtmlService.createHtmlOutput(
    `
    <meta content="739921544160-nvqbr8cmqcs35n700q94mn5qnjh7vdr5.apps.googleusercontent.com" name="google-signin-client_id"></meta>`
  ).getContent();
  content.googleApisOnApiLoad = HtmlService.createHtmlOutput(
    `
    <script src="https://apis.google.com/js/api.js?onload=onApiLoad"></script>`
  ).getContent();
  content.googleApis_defer = HtmlService.createHtmlOutput(
    `
    <script async="" defer="" src="https://apis.google.com/js/platform.js"></script>`
  ).getContent();
  content.googleApis_preConnect = HtmlService.createHtmlOutput(
    `
    <link rel="preconnect" href="https://fonts.googleapis.com">`
  ).getContent();
  content.gstatic_preConnect = HtmlService.createHtmlOutput(
    `
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>`
  ).getContent();
  content.googleApisCss = HtmlService.createHtmlOutput(
    `
    <link href="https://fonts.googleapis.com/css2?family=Libre+Barcode+128&family=Montserrat:ital@1&family=Oswald&family=Roboto&display=swap" rel="stylesheet">`
  ).getContent();
  content.materializeCss = HtmlService.createHtmlOutput(
    `
    <link href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" rel="stylesheet"></link>`
  ).getContent();
  content.tabulatorCss = HtmlService.createHtmlOutput(
    `
    <link href="https://unpkg.com/tabulator-tables@5.2.3/dist/css/tabulator_materialize.min.css" rel="stylesheet">`
  ).getContent();
  content.googleApisIcon = HtmlService.createHtmlOutput(
    `
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>`
  ).getContent();
  content.materializeJs = HtmlService.createHtmlOutput(
    `
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>`
  ).getContent();
  content.luxonJs = HtmlService.createHtmlOutput(
    `
    <script src="https://cdnjs.cloudflare.com/ajax/libs/luxon/3.0.1/luxon.min.js" integrity="sha512-6ZJuab/UnRq1muTChgrVxJhSgygmL2GMLVmSJN7pcBEqJ1dWPbqN9CiZ6U3HrcApTIJsLnMgXYBYgtVkJ8fWiw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>`
  ).getContent();
  content.tabulatorJs = HtmlService.createHtmlOutput(
    `
    <script type="text/javascript" src="https://unpkg.com/tabulator-tables@5.2.3/dist/js/tabulator.min.js"></script>`
  ).getContent();
  content.website = HtmlService.createHtmlOutput(
    `
    * {box-sizing: border-box;margin: 0;
      padding: 0;font-family: "Roboto", sans-serif;}`
  ).getContent();
  content.html = HtmlService.createHtmlOutput(
    `
    html,
    body {height: 100%;}`
  ).getContent();
  content.main = HtmlService.createHtmlOutput(
    `
    main {height: 92%;
          margin-top: 10px;}`
  ).getContent();
  content.body = HtmlService.createHtmlOutput(
    `
    body {background-color: #ffc107;}`
  ).getContent();
  content.header = HtmlService.createHtmlOutput(
    `
    header {background-color: rgba(255,255,255,.1);
            color: #a7e1ee;
            font-size: smaller;}`
  ).getContent();
  content.header_h1 = HtmlService.createHtmlOutput(
    `
    header h1 {font-family: "Montserrat", cursive;
              margin-left: 15px;}`
  ).getContent();
  content.grid = HtmlService.createHtmlOutput(
    `
    .grid {display: grid;}`
  ).getContent();
  content.flex_row = HtmlService.createHtmlOutput(
    `
    .flex-row {display: flex;
              flex-direction: row;}`
  ).getContent();
  content.flex_column = HtmlService.createHtmlOutput(
    `
    .flex-column {display: flex;
                  flex-direction: column;}`
  ).getContent();
  content.order_menu_payment = HtmlService.createHtmlOutput(
    `
    .order,
    .menu-payment {border: solid .5px;
                  border-radius: 10px;
                  margin: 0px 10px 5px 10px;
                  height: 100%;
                  max-height: 100%;}`
  ).getContent();
  content.seperator1 = HtmlService.createHtmlOutput(
    `
    /* -----------------------------------ORDER--------------------------- */`
  ).getContent();
  content.order = HtmlService.createHtmlOutput(
    `
    .order {background-color: white;
            flex: 0 0 440px;
            overflow: auto;}`
  ).getContent();
  content.receipt = HtmlService.createHtmlOutput(
    `
    .receipt {border: solid .5px;
              margin: 10px 15px 5px 15px;
              box-shadow: 3px 3px 2px rgb(3,3,3);
              user-select: none;
              flex-grow: 1;}`
  ).getContent();
  content.receipt_company_info_receipt_footer = HtmlService.createHtmlOutput(
    `
    .receipt,
    .company-info,
    .receipt-footer {align-items: center;}`
  ).getContent();
  content.company_info = HtmlService.createHtmlOutput(
    `
    .company-info {margin-top: 5px;}`
  ).getContent();
  content.company_name = HtmlService.createHtmlOutput(
    `
    #company-name {font-size: 1.5rem;}`
  ).getContent();
  content.company_phone = HtmlService.createHtmlOutput(
    `
    #company-phone {font-size: 1.25rem;}`
  ).getContent();
  content.th_description = HtmlService.createHtmlOutput(
    `
    th.description {width: 180px;
                    text-align: left;}`
  ).getContent();
  content.th_price = HtmlService.createHtmlOutput(
    `
    th.price {width: 75px;}`
  ).getContent();
  content.quantity_price_subtotal_delete = HtmlService.createHtmlOutput(
    `
    .quantity,
    .price,
    .subtotal,
    .delete {text-align: right;}`
  ).getContent();
  content.receipt_details = HtmlService.createHtmlOutput(
    `
    .receipt-details {margin-top: 10px;
                      flex-grow: 1;}`
  ).getContent();
  content.dotted_border = HtmlService.createHtmlOutput(
    `
    .dotted-border {border-bottom: dotted 2px;}`
  ).getContent();
  content.fa_trash_canHover = HtmlService.createHtmlOutput(
    `
    .fa-trash-can:hover {transform: scale(1.2);}`
  ).getContent();
  content.tableSummary_table = HtmlService.createHtmlOutput(
    `
    table.summary-table {text-align: right;}`
  ).getContent();
  content.tbodySummary_table_tdNth_child1 = HtmlService.createHtmlOutput(
    `
    tbody.summary-table td:nth-child(1) {width: 277px;}`
  ).getContent();
  content.tbodySummary_table_tdNth_child2 = HtmlService.createHtmlOutput(
    `
    tbody.summary-table td:nth-child(2) {width: 75px;}`
  ).getContent();
  content.tbodySummary_table_tdNth_child3 = HtmlService.createHtmlOutput(
    `
    tbody.summary-table td:nth-child(3) {width: 25px;}`
  ).getContent();
  content.receipt_footer = HtmlService.createHtmlOutput(
    `
    .receipt-footer {padding-top: 20px;}`
  ).getContent();
  content.barcode = HtmlService.createHtmlOutput(
    `
    #barcode {font-family: "Libre Barcode 128", cursive;
              font-size: 70px;
              margin-top: 10px;}`
  ).getContent();
  content.toolbar = HtmlService.createHtmlOutput(
    `
    .toolbar {flex: 0 0 60px;
              justify-content: space-around;
              align-items: center;
              border: solid .5px;
              border-radius: 10px;
              margin: 0px 15px 5px 15px;}`
  ).getContent();
  content.toolbar_icon = HtmlService.createHtmlOutput(
    `
    .toolbar-icon {font-size: 2rem;}`
  ).getContent();
  content.toolbar_iconHover = HtmlService.createHtmlOutput(
    `
    .toolbar-icon:hover {transform: scale(1.2);}`
  ).getContent();
  content.seperator2 = HtmlService.createHtmlOutput(
    `
    /* ----------------------------Menu-Payment-------------------------- */`
  ).getContent();
  menu_payment = HtmlService.createHtmlOutput(
    `
    .menu-payment {background: rgba(255, 255, 255, .05);
                  flex-grow: 1;
                  z-index: 0;}`
  ).getContent();
  content.menu = HtmlService.createHtmlOutput(
    `
    .menu {flex-flow: row wrap;
          grid-column: 1;
          grid-row: 1;
          align-content: flex-start;
          z-index: 0;
          height: 100%;
          overflow: auto;}`
  ).getContent();
  content.menu_item = HtmlService.createHtmlOutput(
    `
    .menu-item {flex-flow: 
              column nowrap;
              flex-basis: auto;
              flex-shrink: 0;
              margin: 5px;
              background: rgba(255, 255, 255, .05);
              width: 150px;}`
  ).getContent();
  content.menu_img = HtmlService.createHtmlOutput(
    `
    .menu-img {border-radius: 50%;
              max-width: 100%;
              height: auto;
              display: block;
              margin: auto;}`
  ).getContent();
  content.figcaption = HtmlService.createHtmlOutput(
    `
    figcaption {color: white;
                text-align: center;
                user-select: none;}`
  ).getContent();
  content.menu_itemHover = HtmlService.createHtmlOutput(
    `
    .menu-item:hover>.menu-img {transform: scale(1.03);}`
  ).getContent();
  content.img = HtmlService.createHtmlOutput(
    `
    img {width: 160px;}`
  ).getContent();
  content.iframePlayer = function () {
    tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    var iframePlayer;
    function onYouTubeIframeAPIReady() {
      iframePlayer = new YT.Player("iframePlayer", {
        height: "505",
        width: "585",
        //  videoId: 'OTeQee-gxa4',
        playerVars: {
          autoplay: 1,
          loop: 1,
          controls: 0,
          showinfo: 0,
          autohide: 1,
          playsinline: 1,
          mute: 1,
          modestbranding: 1,
          vq: "hd1080",
          listType: "playlist",
          list: "UU6DOFpA9UCTgNwJiVX1IOpQ",
        },
        events: { onReady: onPlayerReady, onStateChange: onPlayerStateChange },
      });
    }
    function onPlayerReady(event) {
      event.target.playVideo();
    }
    var done = false;
    function onPlayerStateChange(event) {
      if (event.data == YT.PlayerState.PLAYING) {
        setTimeout(playVideo);
        // done = true;
      }
    }
    function stopVideo() {
      iframePlayer.stopVideo();
    }
    function playVideo() {
      iframePlayer.playVideo();
    }
    function nextVideo() {
      iframePlayer.nextVideo();
    }
  };
  content.startPageUrl = startPageUrl;
  return renderTemplate(content.evaluate()); //:contentFile('uiAccess');
}

function videoPage() {
  var youPlayer = videoPlayer("search");
  content = "<?!= playerPlayer ?>";
  //("\n <? var yourVideos = videoPlayer(\"playlist\", \"UU6DOFpA9UCTgNwJiVX1IOpQ\"); ?><?!= yourVideos ?>");
  return renderTemplate(
    contentApp(content, {
      playerPlayer: youPlayer,
    })
  ); //:contentFile('uiAccess')
}

function videoSEC(e) {
  //console.log(JSON.stringify(e));
  const uniqueCo = Utilities.jsonParse([
    urlDataSource("https://www.sec.gov/files/company_tickers.json"),
  ]);
  const uniqueCoArray = covArrays(uniqueCo);
  const randomCoKey = Math.floor(
    Math.random() * Math.floor(uniqueCoArray.length)
  ); // Math.floor(Math.random());
  const uniqueCoKey = [uniqueCo].entries().next().value;
  const randomCo = uniqueCoKey[1][randomCoKey];
  const randomTitle = randomCo["title"];
  const randomTicker = randomCo["ticker"];
  const randomCIK = randomCo["cik_str"];
  // const uniqueVid = needPastTime(randomTitle);
  // const randomVidKey = Math.floor(Math.random() * (Math.floor(uniqueVid.length)))// Math.floor(Math.random());
  // const videoPlaylist = covObjects(uniqueVid, ["youtubeID"]);
  // const uniqueVidKey = [videoPlaylist].entries().next().value;
  // const randomVid = uniqueVidKey[1][randomVidKey];
  // const randomVideo = Utilities.jsonStringify(randomVid["youtubeID"]);
  var stkTicker = e.parameter["tick"] || randomTicker;
  var cik = e.parameter["cik"] || randomCIK;
  var percent = e.parameter["uname"] || randomTitle;
  console.log([randomTitle].indexOf(e.parameter["uname"]));
  var list = [];
  if (
    uniqueCoArray.find((w) => {
      return w;
    })
  ) {
    for (var i = 0; i < uniqueCoArray.length; i++) {
      var received = uniqueCoArray[i].filter((f) => {
        return f;
      });
      var result = received.find((w) => {
        return w;
      });
      if (result) {
        list.push([result]);
        if (JSON.stringify(i) >= uniqueCoArray.length) {
          break;
        }
      }
    }
  } else {
    list.push([percent]);
  }
  // console.log(list)
  var breakUrl = getUrl(ScriptApp);
  const html = HtmlService.createTemplate(`
    <!DOCTYPE html>
      <html id="test">
        <head>
          <?!= styleHtml() ?>
        </head>
        <body class="green">
          <div class="toolbar toolbar_icon toolbar_iconHover scale-out receipt"><em><?!= rule() ?></em></div>
          <a href="https://flewis21.github.io/Don-time-Life-Services/" target="_top"><span><h1 class="z-depth-5 toolbar_icon toolbar_iconHover scale-transition scale-out scale-in btn-large receipt">Don'time Life Services!</h1></span></a>
          <div><a href="https://www.sec.gov/edgar/browse/?CIK=<?!= myCIK ?>&owner=exclude" target="_blank"><h1 class="blue z-depth-5 toolbar_icon toolbar_iconHover scale-transition scale-out scale-in btn-large receipt"><?!= myTicker ?></h1></a></div>
          <div class="row">
          <div class="col s12 push-s1 push-m1 push-l2">
          <div class="container row valign-wrapper video-container grey darken-4 z-depth-5 scale-transition scale-out scale-in receipt">
          <div class="col s12 receipt red" id="player1"><?!= videoPlayer(myVideo) ?></div></div></div></div>
          <div class="row">
          <div class="col s6 push-s1 push-m1 push-l2">
          <div class="container agenda z-depth-5 pulse blue receipt">
          <div class="col s12 receipt red">
          <input class="left datepicker menu-img z-depth-5 card-panel red scale-transition receipt toolbar toolbar_icon toolbar_iconHover scale-out scale-in" id="prefDate" type="text" placeholder="Book a date"/></div></div></div></div>
          <div class="row">
          <div class="col s6 push-s1 push-m1 push-l2">
          <div class="container agenda z-depth-5 pulse blue receipt">
          <div class="col s12 receipt red">
          <input class="right timepicker menu-img z-depth-5 card-panel green scale-transition receipt toolbar toolbar_icon toolbar_iconHover scale-out scale-in" id="prefTime" type="text" placeholder="Book a time"/></div></div></div></div>
          <div class="row">
          <div class="col s6 push-s1 push-m1 push-l2">
          <div class="container">
          <div class="col s12 receipt red">
          <span><input placeholder="Calculator..." class="menu-img z-depth-5 card-panel black scale-transition scale-out scale-in receipt btn-large" id="username" type="search" /></span>
          </div></div></div></div>
          <div class="row">
          <div class="col s6 push-s1 push-m1 push-l2 truncate">
          <div class="container dotted-border">
          <div class="col s12 receipt red">
            <ul class="darken-4 z-depth-5"><p id='list' class="toolbar toolbar-icon toolbar_iconHover amber darken-4 receipt scale-out"><?!= list ?></p></ul></div></div></div></div>
          <script>document.getElementById('username').addEventListener('change', <?!= topScript ?>)</script>
          <script>document.addEventListener("DOMContentLoaded", appJS);
            function appJS()
              {// mod the array
              let timePicker = document.getElementById('prefTime');
              M.Timepicker.init(timePicker, { defaultTime: "now" });
              google.script.run.withSuccessHandler(populateDates).runAll('app.busyDates', []);
              function populateDates(disabledDays) 
                {let datePicker = document.getElementById('prefDate');
                  M.Datepicker.init(datePicker, 
                    {minDate: new Date(), 
                    setDefaultDate: true,
                    disableDayFn: 
                      function(day) 
                        {return disabledDays.indexOf(day.valueOf()) > -1;}});};}
          </script>
          <input type="hidden" value="<?= getUrl(ScriptApp) ?>" id="url" />
        </body>
      </html>`);
  html.list = list
    .map(function (r) {
      return (
        "<li>" +
        `<a class="waves-effect waves-light btn" href="${breakUrl}?uname=${r[0]["title"]}&cik=${r[0]["cik_str"]}&tick=${r[0]["ticker"]}" target="_blank">` +
        r[0]["ticker"] +
        "</a>" +
        "</li>"
      );
    })
    .sort()
    .join("");
  html.breakUrl = breakUrl;
  html.myVideo = percent;
  html.myTitle = percent;
  html.myTicker = stkTicker;
  html.myCIK = cik;
  const idArray = needPastTime(randomTitle);
  const vidIdObject = covObjects(idArray, ["youTubeId"]);
  const rdmVidId = Math.floor(Math.random() * Math.floor(vidIdObject.length));
  html.myVidId = vidIdObject[rdmVidId]["youTubeId"];
  html.topScript = function () {
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
      var uname = document.getElementById("username").value;
      var linkHome = document.createElement("a");
      var linkFollow = document.createElement("a");
      linkHome.href = "https://flewis21.github.io/videoSEC/";
      linkFollow.href = url + "?uname=" + encodeURIComponent(uname);
      linkHome.id = "linkHOME";
      linkFollow.id = "linkFOLLOW";
      linkHome.target = "popup";
      linkFollow.target = "_top";
      document.body.appendChild(linkHome);
      document.body.appendChild(linkFollow);
      document.getElementById("linkFOLLOW").click();
      document.getElementById("linkHOME");
      document.getElementById("username").value = "";
    })();
  }; //Global object closed
  return renderTemplate(html.evaluate()).setTitle("Don'time Life Services");
} //webApp closed
