function youTube(e) {
  console.log(JSON.stringify(e));
  var username = e.parameter["uname"] || `cornea transplant US, Atlanta, GA`;
  // const uniqueVid = needPastTime(username);
  // const randomKey = Math.floor(Math.random() * (Math.floor(uniqueVid.length)))// Math.floor(Math.random());
  // const videoPlaylist = covObjects(uniqueVid, ["youtubeID"]);
  // const uniqueKey = [videoPlaylist].entries().next().value;
  // const randomCo = uniqueKey[1][randomKey];
  // const randomVideo = Utilities.jsonStringify(randomCo["youtubeID"]);
  const content = HtmlService.createTemplate(`<!DOCTYPE html>
<html lang="en" id="test">
  <head>
    <?!= styleHtml() ?>
  </head>

  <body class="blue" id="template">
      <div class="toolbar toolbar_icon toolbar_iconHover scale-out receipt"><?!= rule() ?></div>
      <label for="hubMain">Main Page</label><a href="https://flewis21.github.io/Don-time-Life-Services/" target="_top"><span><h1 class="z-depth-5 toolbar_icon toolbar_iconHover scale-transition scale-out scale-in btn-large receipt" id="hubMain">Don'time Life Services!</h1></span></a>

    <div>
      <ul class="table-body menu-img z-depth-5">

      </ul>

    </div>
    <div><label for="reload01">Search Bing</label><a href="https://www.bing.com/search?q=${encodeURIComponent(
      username
    )}+site%3Aclubhouse.com&PC=U316&FORM=CHROMN" target="_blank"><h1 class="blue z-depth-5 toolbar_icon toolbar_iconHover scale-transition scale-out scale-in btn-large receipt" id="reload01"><?!= myTitle ?></h1></a></div>
    <div class="row">
    <div class="col s8">
    <span><input placeholder="About me?..." class="menu-img z-depth-5 card-panel black scale-transition scale-out scale-in receipt btn-large" id="username" type="search" /></span></div></div>
    <div class="row">
    <div class="col s8">
    <div class="container menu-img valign-wrapper video-container grey darken-4 z-depth-5 scale-transition scale-out scale-in receipt">
    <div class="col s12">
    <div id="player1">
      <?!= videoPlayer(myVideo) ?></div></div></div>
    </div></div>
     <div class="agenda z-depth-5 pulse btn-large card-panel blue scale-out scale-in receipt">
      <input class="datepicker menu-img z-depth-5 card-panel red scale-transition receipt toolbar toolbar_icon toolbar_iconHover scale-out scale-in" id="prefDate" type="text" placeholder="Book a date"/></div>
      
     <div class="agenda z-depth-5 pulse btn-large card-panel blue scale-out scale-in receipt">
      <input class="timepicker menu-img z-depth-5 card-panel green scale-transition receipt toolbar toolbar_icon toolbar_iconHover scale-out scale-in" id="prefTime" type="text" placeholder="Book a time"/></div>
	
    <!-- Compiled and minified JavaScript -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
    <script>document.getElementById('username').addEventListener('change', <?!= topScript ?>)</script>
    <script>document.addEventListener("DOMContentLoaded", appJs);
      function appJs()
      {// mod the array
      let timePicker = document.getElementById('prefTime');
      M.Timepicker.init(timePicker, { defaultTime: "now" });
      google.script.run.withSuccessHandler(populateDates).runAll('boilerplate.busyDates', []);
      function populateDates(disabledDays) 
      {let datePicker = document.getElementById('prefDate');
      M.Datepicker.init(datePicker, 
        {minDate: new Date(), setDefaultDate: true,
        disableDayFn: 
          function(day) 
          {return disabledDays.indexOf(day.valueOf()) > -1;}});};}</script>
    <script>document.querySelector("div").setAttribute("style", "color: blue; clear: both; text-align: center;");
      document.querySelector("body").setAttribute("style", "background-color: amber;background: 282828;");
      document.querySelector("iframe").setAttribute("style", "color: blue; clear: both; text-align: center;");</script>
    <input type="hidden" value="<?= getUrl(ScriptApp) ?>" id="url" />
  </body>
</html>`);
  content.myVideo = username;
  content.myTitle = username;
  content.topScript = function () {
    console.log(document.getElementById("test").innerHTML);
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
      // {
      // console.log('Input Value:', textInput.value);
      //  }, 5000)();
      if (typeof url === "undefined") {
        var urlData = document.getElementById("url").value;
        var url = urlData.toString();
      }
      var uname = document.getElementById("username").value;
      var linkHome = document.createElement("a");
      var linkFollow = document.createElement("a");
      linkHome.href = "https://flewis21.github.io/About-Me/";
      linkFollow.href = url + "?uname=" + uname;
      linkHome.id = "linkHOME";
      linkFollow.id = "linkFOLLOW";
      linkHome.target = "popup";
      linkFollow.target = "_popup";
      document.body.appendChild(linkHome);
      document.body.appendChild(linkFollow);
      document.getElementById("linkFOLLOW").click();
      document.getElementById("linkHOME");
      document.getElementById("username").value = "";
    })();
  };
  content.utf_8 = HtmlService.createHtmlOutput(`<meta charset="UTF-8">`);
  content.viewport = HtmlService.createHtmlOutput(
    `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
  );
  content.fontAwesome = HtmlService.createHtmlOutput(
    `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />`
  );
  content.google_signin_client = HtmlService.createHtmlOutput(
    `<meta content="739921544160-nvqbr8cmqcs35n700q94mn5qnjh7vdr5.apps.googleusercontent.com" name="google-signin-client_id"></meta>`
  );
  content.googleApisOnApiLoad = HtmlService.createHtmlOutput(
    `<script src="https://apis.google.com/js/api.js?onload=onApiLoad"></script>`
  );
  content.googleApis_defer = HtmlService.createHtmlOutput(
    `<script async="" defer="" src="https://apis.google.com/js/platform.js"></script>`
  );
  content.googleApis_preConnect = HtmlService.createHtmlOutput(
    `<link rel="preconnect" href="https://fonts.googleapis.com">`
  );
  content.gstatic_preConnect = HtmlService.createHtmlOutput(
    `<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>`
  );
  content.googleApisCss = HtmlService.createHtmlOutput(
    `<link href="https://fonts.googleapis.com/css2?family=Libre+Barcode+128&family=Montserrat:ital@1&family=Oswald&family=Roboto&display=swap" rel="stylesheet">`
  );
  content.materializeCss = HtmlService.createHtmlOutput(
    `<link href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" rel="stylesheet"></link>`
  );
  content.googleApisIcon = HtmlService.createHtmlOutput(
    `<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>`
  );
  content.materializeMin = HtmlService.createHtmlOutput(
    `<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>`
  );
  content.website = HtmlService.createHtmlOutput(`
      * {box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: "Roboto", sans-serif;}`);
  content.html = HtmlService.createHtmlOutput(`html,body {height: 100%;}`);
  content.main = HtmlService.createHtmlOutput(`
      main {height: 92%;
           margin-top: 10px;}`);
  content.body = HtmlService.createHtmlOutput(
    `body {background-color: #ffc107;}`
  );
  content.header = HtmlService.createHtmlOutput(`
      header {background-color: rgba(255,255,255,.1);
             color: #a7e1ee;
             font-size: smaller;}`);
  content.header_h1 = HtmlService.createHtmlOutput(`
      header h1 {font-family: "Montserrat", cursive;
                margin-left: 15px;}`);
  content.grid = HtmlService.createHtmlOutput(`.grid {display: grid;}`);
  content.flex_row = HtmlService.createHtmlOutput(`
      .flex-row {display: flex;
                flex-direction: row;}`);
  content.flex_column = HtmlService.createHtmlOutput(`
      .flex-column {display: flex;
                   flex-direction: column;}`);
  content.order_menu_payment = HtmlService.createHtmlOutput(`
      .order, .menu-payment {border: solid .5px;
                            border-radius: 10px;
                            margin: 0px 10px 5px 10px;
                            height: 100%;
                            max-height: 100%;}`);
  content.seperator1 = HtmlService.createHtmlOutput(`
    /* -----------------------------------ORDER--------------------------- */`);
  content.order = HtmlService.createHtmlOutput(`
      .order {background-color: white;
             flex: 0 0 440px;
             overflow: auto;}`);
  content.receipt = HtmlService.createHtmlOutput(`
      .receipt {border: solid .5px;
               margin: 10px 15px 5px 15px;
               box-shadow: 3px 3px 2px rgb(3,3,3);
               user-select: none;
               flex-grow: 1;}`);
  content.receipt_company_info_receipt_footer = HtmlService.createHtmlOutput(`
      .receipt, 
      .company-info, 
      .receipt-footer 
        {align-items: center;}`);
  content.company_info = HtmlService.createHtmlOutput(
    `.company-info {margin-top: 5px;}`
  );
  content.company_name = HtmlService.createHtmlOutput(
    `#company-name {font-size: 1.5rem;}`
  );
  content.company_phone = HtmlService.createHtmlOutput(
    `#company-phone {font-size: 1.25rem;}`
  );
  content.th_description = HtmlService.createHtmlOutput(`
      th.description {width: 180px;
                     text-align: left;}`);
  content.th_price = HtmlService.createHtmlOutput(`th.price {width: 75px;}`);
  content.quantity_price_subtotal_delete = HtmlService.createHtmlOutput(`
      .quantity,
      .price,
      .subtotal,
      .delete 
        {text-align: right;}`);
  content.receipt_details = HtmlService.createHtmlOutput(`
      .receipt-details {margin-top: 10px;
                       flex-grow: 1;}`);
  content.dotted_border = HtmlService.createHtmlOutput(
    `.dotted-border {border-bottom: dotted 2px;}`
  );
  content.fa_trash_canHover = HtmlService.createHtmlOutput(
    `.fa-trash-can:hover {transform: scale(1.2);}`
  );
  content.tableSummary_table = HtmlService.createHtmlOutput(
    `table.summary-table {text-align: right;}`
  );
  content.tbodySummary_table_tdNth_child1 = HtmlService.createHtmlOutput(
    `tbody.summary-table td:nth-child(1) {width: 277px;}`
  );
  content.tbodySummary_table_tdNth_child2 = HtmlService.createHtmlOutput(
    `tbody.summary-table td:nth-child(2) {width: 75px;}`
  );
  content.tbodySummary_table_tdNth_child3 = HtmlService.createHtmlOutput(
    `tbody.summary-table td:nth-child(3) {width: 25px;}`
  );
  content.receipt_footer = HtmlService.createHtmlOutput(
    `.receipt-footer {padding-top: 20px;}`
  );
  content.barcode = HtmlService.createHtmlOutput(`
      #barcode {font-family: "Libre Barcode 128", cursive;
               font-size: 70px;
               margin-top: 10px;}`);
  content.toolbar = HtmlService.createHtmlOutput(`
      .toolbar {flex: 0 0 60px;
               justify-content: space-around;
               align-items: center;
               border: solid .5px;
               border-radius: 10px;
               margin: 0px 15px 5px 15px;}`);
  content.toolbar_icon = HtmlService.createHtmlOutput(
    `.toolbar-icon {font-size: 2rem;}`
  );
  content.toolbar_iconHover = HtmlService.createHtmlOutput(
    `.toolbar-icon:hover {transform: scale(1.2);}`
  );
  content.seperator2 = HtmlService.createHtmlOutput(`
    /* ----------------------------Menu-Payment-------------------------- */`);
  content.menu_payment = HtmlService.createHtmlOutput(`
      .menu-payment {background: rgba(255, 255, 255, .05);
                    flex-grow: 1;
                    z-index: 0;}`);
  content.menu = HtmlService.createHtmlOutput(`
      .menu {flex-flow: row wrap;
            grid-column: 1;
            grid-row: 1;
            align-content: flex-start;
            z-index: 0;
            height: 100%;
            overflow: auto;}`);
  content.menu_item = HtmlService.createHtmlOutput(`
      .menu-item {flex-flow: column nowrap;
                 flex-basis: auto;
                 flex-shrink: 0;
                 margin: 5px;
                 background: rgba(255, 255, 255, .05);
                 width: 150px;}`);
  content.menu_img = HtmlService.createHtmlOutput(`
      .menu-img {border-radius: 50%;
                max-width: 100%;
                height: auto;
                display: block;
                margin: auto;}`);
  content.figcaption = HtmlService.createHtmlOutput(`
      figcaption {color: white;
                 text-align: center;
                 user-select: none;}`);
  content.menu_itemHover = HtmlService.createHtmlOutput(
    `.menu-item:hover>.menu-img {transform: scale(1.03);}`
  );
  content.gamer = getUrl(ScriptApp);
  content.email = function () {
    var emails = validate();
    var emailsCount = validate().toString().split(",").length;
    var randomEmail = emails[Math.floor(Math.random() * emailsCount)];
    return randomEmail;
  };
  content.appJs = function () {
    const busyCalendar = function () {
      // mod the array
      let timePicker = document.getElementById("prefTime");
      M.Timepicker.init(timePicker, { defaultTime: "now" });
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
      serverSide("busyDates", [])
        .then((disabledDays) => {
          let datePicker = document.getElementById("prefDate");
          M.Datepicker.init(datePicker, {
            minDate: new Date(),
            setDefaultDate: true,
            disableDayFn: function (day) {
              return disabledDays.indexOf(day.valueOf()) > -1;
            },
          });
        })
        .catch((error) => {
          console.log(error);
        });
    };
    busyCalendar();
  };
  return renderTemplate(content.evaluate()).setTitle("Don'time Life Services");
}
