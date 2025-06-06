function styleHtml() {
  const startPageUrl = getUrl(ScriptApp) + "?default";
  const content = {};
  content.utf_8 = HtmlService.createHtmlOutput(
    `
    <meta charset="UTF-8">`,
  ).getContent();
  content.viewport = HtmlService.createHtmlOutput(
    `
    <meta name="viewport" content="width=device-width, initial-scale=1.0">`,
  ).getContent();
  content.fontAwesome = HtmlService.createHtmlOutput(
    `
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />`,
  ).getContent();
  content.google_charts_loader = HtmlService.createHtmlOutput(
    `
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>`,
  ).getContent();
  content.google_signin_client = HtmlService.createHtmlOutput(
    `
    <meta content="739921544160-nvqbr8cmqcs35n700q94mn5qnjh7vdr5.apps.googleusercontent.com" name="google-signin-client_id"></meta>`,
  ).getContent();
  content.googleApisOnApiLoad = HtmlService.createHtmlOutput(
    `
    <script src="https://apis.google.com/js/api.js?onload=onApiLoad"></script>`,
  ).getContent();
  content.googleApis_defer = HtmlService.createHtmlOutput(
    `
    <script async="" defer="" src="https://apis.google.com/js/platform.js"></script>`,
  ).getContent();
  content.googleApis_preConnect = HtmlService.createHtmlOutput(
    `
    <link rel="preconnect" href="https://fonts.googleapis.com">`,
  ).getContent();
  content.gstatic_preConnect = HtmlService.createHtmlOutput(
    `
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>`,
  ).getContent();
  content.googleApisCss = HtmlService.createHtmlOutput(
    `
    <link href="https://fonts.googleapis.com/css2?family=Libre+Barcode+128&family=Montserrat:ital@1&family=Oswald&family=Roboto&display=swap" rel="stylesheet">`,
  ).getContent();
  content.materializeCss = HtmlService.createHtmlOutput(
    `
    <link href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" rel="stylesheet"></link>`,
  ).getContent();
  content.tabulatorCss = HtmlService.createHtmlOutput(
    `
    <link href="https://unpkg.com/tabulator-tables@5.2.3/dist/css/tabulator_materialize.min.css" rel="stylesheet">`,
  ).getContent();
  content.googleApisIcon = HtmlService.createHtmlOutput(
    `
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>`,
  ).getContent();
  content.materializeJs = HtmlService.createHtmlOutput(
    `
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>`,
  ).getContent();
  content.luxonJs = HtmlService.createHtmlOutput(
    `
    <script src="https://cdnjs.cloudflare.com/ajax/libs/luxon/3.0.1/luxon.min.js" integrity="sha512-6ZJuab/UnRq1muTChgrVxJhSgygmL2GMLVmSJN7pcBEqJ1dWPbqN9CiZ6U3HrcApTIJsLnMgXYBYgtVkJ8fWiw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>`,
  ).getContent();
  content.tabulatorJs = HtmlService.createHtmlOutput(
    `
    <script type="text/javascript" src="https://unpkg.com/tabulator-tables@5.2.3/dist/js/tabulator.min.js"></script>`,
  ).getContent();
  content.jsQuery = HtmlService.createHtmlOutput(
    `
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>`,
  ).getContent();
  content.website = HtmlService.createHtmlOutput(
    `
    * {box-sizing: border-box;margin: 0;
      padding: 0;font-family: "Roboto", sans-serif;}`,
  ).getContent();
  content.html = HtmlService.createHtmlOutput(
    `
    html,
    body {height: 100%;}`,
  ).getContent();
  content.main = HtmlService.createHtmlOutput(
    `
    main {height: 92%;
          margin-top: 10px;}`,
  ).getContent();
  content.body = HtmlService.createHtmlOutput(
    `
    body {background-color: #ffc107;}`,
  ).getContent();
  content.header = HtmlService.createHtmlOutput(
    `
    header {background-color: rgba(255,255,255,.1);
            color: #a7e1ee;
            font-size: smaller;}`,
  ).getContent();
  content.header_h1 = HtmlService.createHtmlOutput(
    `
    header h1 {font-family: "Montserrat", cursive;
              margin-left: 15px;}`,
  ).getContent();
  content.grid = HtmlService.createHtmlOutput(
    `
    .grid {display: grid;}`,
  ).getContent();
  content.flex_row = HtmlService.createHtmlOutput(
    `
    .flex-row {display: flex;
              flex-direction: row;}`,
  ).getContent();
  content.flex_column = HtmlService.createHtmlOutput(
    `
    .flex-column {display: flex;
                  flex-direction: column;}`,
  ).getContent();
  content.order_menu_payment = HtmlService.createHtmlOutput(
    `
    .order,
    .menu-payment {border: solid .5px;
                  border-radius: 10px;
                  margin: 0px 10px 5px 10px;
                  height: 100%;
                  max-height: 100%;}`,
  ).getContent();
  content.seperator1 = HtmlService.createHtmlOutput(
    `
    /* -----------------------------------ORDER--------------------------- */`,
  ).getContent();
  content.order = HtmlService.createHtmlOutput(
    `
    .order {background-color: white;
            flex: 0 0 440px;
            overflow: auto;}`,
  ).getContent();
  content.receipt = HtmlService.createHtmlOutput(
    `
    .receipt {border: solid .5px;
              margin: 10px 15px 5px 15px;
              box-shadow: 3px 3px 2px rgb(3,3,3);
              user-select: none;
              flex-grow: 1;}`,
  ).getContent();
  content.receipt_company_info_receipt_footer = HtmlService.createHtmlOutput(
    `
    .receipt,
    .company-info,
    .receipt-footer {align-items: center;}`,
  ).getContent();
  content.company_info = HtmlService.createHtmlOutput(
    `
    .company-info {margin-top: 5px;}`,
  ).getContent();
  content.company_name = HtmlService.createHtmlOutput(
    `
    #company-name {font-size: 1.5rem;}`,
  ).getContent();
  content.company_phone = HtmlService.createHtmlOutput(
    `
    #company-phone {font-size: 1.25rem;}`,
  ).getContent();
  content.th_description = HtmlService.createHtmlOutput(
    `
    th.description {width: 180px;
                    text-align: left;}`,
  ).getContent();
  content.th_price = HtmlService.createHtmlOutput(
    `
    th.price {width: 75px;}`,
  ).getContent();
  content.quantity_price_subtotal_delete = HtmlService.createHtmlOutput(
    `
    .quantity,
    .price,
    .subtotal,
    .delete {text-align: right;}`,
  ).getContent();
  content.receipt_details = HtmlService.createHtmlOutput(
    `
    .receipt-details {margin-top: 10px;
                      flex-grow: 1;}`,
  ).getContent();
  content.dotted_border = HtmlService.createHtmlOutput(
    `
    .dotted-border {border-bottom: dotted 2px;}`,
  ).getContent();
  content.fa_trash_canHover = HtmlService.createHtmlOutput(
    `
    .fa-trash-can:hover {transform: scale(1.2);}`,
  ).getContent();
  content.tableSummary_table = HtmlService.createHtmlOutput(
    `
    table.summary-table {text-align: right;}`,
  ).getContent();
  content.tbodySummary_table_tdNth_child1 = HtmlService.createHtmlOutput(
    `
    tbody.summary-table td:nth-child(1) {width: 277px;}`,
  ).getContent();
  content.tbodySummary_table_tdNth_child2 = HtmlService.createHtmlOutput(
    `
    tbody.summary-table td:nth-child(2) {width: 75px;}`,
  ).getContent();
  content.tbodySummary_table_tdNth_child3 = HtmlService.createHtmlOutput(
    `
    tbody.summary-table td:nth-child(3) {width: 25px;}`,
  ).getContent();
  content.receipt_footer = HtmlService.createHtmlOutput(
    `
    .receipt-footer {padding-top: 20px;}`,
  ).getContent();
  content.barcode = HtmlService.createHtmlOutput(
    `
    #barcode {font-family: "Libre Barcode 128", cursive;
              font-size: 70px;
              margin-top: 10px;}`,
  ).getContent();
  content.toolbar = HtmlService.createHtmlOutput(
    `
    .toolbar {flex: 0 0 60px;
              justify-content: space-around;
              align-items: center;
              border: solid .5px;
              border-radius: 10px;
              margin: 0px 15px 5px 15px;}`,
  ).getContent();
  content.toolbar_icon = HtmlService.createHtmlOutput(
    `
    .toolbar-icon {font-size: 2rem;}`,
  ).getContent();
  content.toolbar_iconHover = HtmlService.createHtmlOutput(
    `
    .toolbar-icon:hover {transform: scale(1.2);}`,
  ).getContent();
  content.seperator2 = HtmlService.createHtmlOutput(
    `
    /* ----------------------------Menu-Payment-------------------------- */`,
  ).getContent();
  menu_payment = HtmlService.createHtmlOutput(
    `
    .menu-payment {background: rgba(255, 255, 255, .05);
                  flex-grow: 1;
                  z-index: 0;}`,
  ).getContent();
  content.menu = HtmlService.createHtmlOutput(
    `
    .menu {flex-flow: row wrap;
          grid-column: 1;
          grid-row: 1;
          align-content: flex-start;
          z-index: 0;
          height: 100%;
          overflow: auto;}`,
  ).getContent();
  content.menu_item = HtmlService.createHtmlOutput(
    `
    .menu-item {flex-flow: 
              column nowrap;
              flex-basis: auto;
              flex-shrink: 0;
              margin: 5px;
              background: rgba(255, 255, 255, .05);
              width: 150px;}`,
  ).getContent();
  content.menu_img = HtmlService.createHtmlOutput(
    `
    .menu-img {border-radius: 50%;
              max-width: 100%;
              height: auto;
              display: block;
              margin: auto;}`,
  ).getContent();
  content.figcaption = HtmlService.createHtmlOutput(
    `
    figcaption {color: white;
                text-align: center;
                user-select: none;}`,
  ).getContent();
  content.menu_itemHover = HtmlService.createHtmlOutput(
    `
    .menu-item:hover>.menu-img {transform: scale(1.03);}`,
  ).getContent();
  content.img = HtmlService.createHtmlOutput(
    `
    img {width: 160px;}`,
  ).getContent();
  content.desktopContainer = HtmlService.createHtmlOutput(
    `
    @media only screen and (min-width: 601px) {.desktop-container {width: 85%;margin: 0 auto;};.responsive-section {width: 85%;margin: 20 auto;}}`,
  ).getContent();
  content.mobileSection = HtmlService.createHtmlOutput(
    `
    @media only screen and (max-width: 600px) {.mobile-section {padding: 10px};.responsive-section {padding: 10px}}`,
  ).getContent();
  content.contentSection = HtmlService.createHtmlOutput(
    `
    .content-section {padding: 20px;border: 1px solid #eee;margin-bottom: 20px}`,
  ).getContent();
  content.responsiveSection = HtmlService.createHtmlOutput(
    `
    .responsive-section .container {width: 100%;padding: 0px}`,
  ).getContent();
  content.startPageUrl = startPageUrl;
  return content;
} //:contentFile('uiAccess');

var builtStyling = function (e) {
  var content = styleHtml();
  var frame = frameHtml();

  var htmlString = `
  <!DOCTYPE html>
  <html>
    <head>
      ${content.utf_8}
      ${content.viewport}
      ${content.googleApis_preConnect}
      ${content.googleApisCss}
      ${content.fontAwesome}
      ${content.materializeCss}
      ${content.jsQuery}
      ${content.tabulatorCss}
      ${content.gstatic_preConnect}
      <style>
        ${content.desktopContainer}
        ${content.mobileSection}
        ${content.contentSection}
        ${content.responsiveSection}
        ${content.website}
        ${content.html}
        ${content.main}
        ${content.body}
        ${content.header}
        ${content.header_h1}
        ${content.grid}
        ${content.flex_row}
        ${content.flex_column}
        ${content.order_menu_payment}
        ${content.seperator1}
        ${content.order}
        ${content.receipt}
        ${content.receipt_company_info_receipt_footer}
        ${content.company_info}
        ${content.company_name}
        ${content.company_phone}
        ${content.th_description}
        ${content.th_price}
        ${content.quantity_price_subtotal_delete}
        ${content.receipt_details}
        ${content.dotted_border}
        ${content.fa_trash_canHover}
        ${content.tableSummary_table}
        ${content.tbodySummary_table_tdNth_child1}
        ${content.tbodySummary_table_tdNth_child2}
        ${content.tbodySummary_table_tdNth_child3}
        ${content.receipt_footer}
        ${content.barcode}
        ${content.toolbar}
        ${content.toolbar_icon}
        ${content.toolbar_iconHover}
        ${content.seperator2}
        ${content.menu_payment}
        ${content.menu}
        ${content.menu_item}
        ${content.menu_img}
        ${content.figcaption}
        ${content.menu_itemHover}
        ${content.img}
      </style>
    </head>
    <body>
    <div id="iframePlayer"></div>
      ${content.materializeJs}
      ${content.luxonJs}
      ${content.tabulatorJs}
      <script>
        ${HtmlService.createTemplate(frame.iframePlayer).evaluate().getContent()}
      </script>
    </body>
  </html>
  `;
  return HtmlService.createHtmlOutput(htmlString).asTemplate();
};

var frameHtml = function (file, argsArray) {
  const content = {};
  content.iframePlayer = function fPla() {
    const myObj = {
      appJS: function serverSide(func, args) {
        "use strict";
        return new Promise((resolve, reject) => {
          google.script.run
            .withSuccessHandler((result) => {
              resolve(result);
            })
            .withFailureHandler((error) => {
              console.error(error);
              reject(error);
            })
            .runBoilerplate(func, args);
        });
      },
    };
    // Expose serverSide to the global scope or a specific namespace
    if (!window && !window.myApp) {
      window.myApp = {};
    }
    window.myApp.serverSide = myObj.appJS; // Or, if you have a namespace
    // : myApp.serverSide
    // = serverSide;
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    let iframePlayer;
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
      function onPlayerReady(event) {
        event.target.playVideo();
      }
      const done = false;
      function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING) {
          setTimeout(playVideo); // done
          // = true;
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
    }
    return myObj;
  };
  return content;
};
