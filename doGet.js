var buildTags = function (posHtml) {
  const Route = {};

  Route.path = function (route, callback) {
    Route[route] = callback;
  };
  Route.path("tagBar", tagBuilder);
  return authLogic(validate())
    ? Route["tagBar"](posHtml())
    : contentFile("uiAccess");
};

function sheetWebsite(e) {
  console.log(JSON.stringify(e));
  const uniqueKey = Utilities.jsonParse([
    urlDataSource("https://www.sec.gov/files/company_tickers.json"),
  ]);
  const uniqueCoArray = covArrays(uniqueKey);
  const randomKey = Math.floor(
    Math.random() * Math.floor(uniqueCoArray.length)
  ); // Math.floor(Math.random())
  const uniqueCoKey = [uniqueKey].entries().next().value;
  const randomTitle = e || uniqueCoKey[1][randomKey]["title"];
  const html = HtmlService.createTemplate(`<html id="test">
      <head>
        <?!= styleHtml().getContent() ?>
      </head>
      <body>
        <div>
          <nav>
            <?!= myRandoms ?>...
          </nav>
        </div>
        <div class="row">
        <div class="col s12 push-s1 push-m1 push-l2">
        <div class="container row valign-wrapper video-container grey darken-4 z-depth-5 scale-transition scale-out scale-in receipt">
        <div class="col s12" id="player1">
          <?!= videoPlayer(myRandoms) ?></div>
        </div></div></div>
        <span><input placeholder="foo..." class="flow-text menu-img z-depth-5 card-panel black scale-transition scale-out scale-in receipt btn-large" id="func" type="search" /></span>
        <span><input placeholder="bar..." class="flow-text menu-img z-depth-5 card-panel black scale-transition scale-out scale-in receipt btn-large" id="args" type="search" /></span>
        <script>document.getElementById('func').addEventListener('change', <?!= userClicked ?>)</script>
        <script>document.addEventListener("DOMContentLoaded", <?!= onPageLoad ?>)</script>
        <input type="hidden" value="<?= getUrl(ScriptApp) ?>" id="url" />
      </body>
    </html>`);
  html.onPageLoad = function () {
    //var url = urlData.toString();
    // var linkLoad = document.createElement("a");
    // linkLoad.href = url + "?func=doGet&args=e";
    // linkLoad.id = "linkLOAD";
    // linkLoad.target = "popup";
    // document.body.appendChild(linkLoad);
    // document.getElementById("linkLOAD").click();
  };
  html.userClicked = function () {
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
      var linkHome = document.createElement("a");
      var linkFollow = document.createElement("a");
      linkHome.href = "https://flewis21.github.io/foobar/";
      linkFollow.href =
        url +
        "?func=" +
        encodeURIComponent(func) +
        "&args=" +
        encodeURIComponent(args);
      linkHome.id = "linkHOME";
      linkFollow.id = "linkFOLLOW";
      linkHome.target = "popup";
      linkFollow.target = "_top";
      document.body.appendChild(linkHome);
      document.body.appendChild(linkFollow);
      document.getElementById("linkFOLLOW").click();
      document.getElementById("linkHOME");
      document.getElementById("func").value = "";
      document.getElementById("args").value = "";
    })();
  }; //Global object closed
  (html.vidApp = function () {
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
          .runAll(`app.${[func]}`, [args]);
      });
    }; //serverSide closed
    // VideoPlayer Widget
    serverSide(`userClicked`, [`traffic`])
      .then(async (videoSearch) => {
        document.getElementById("vids").innerHTML = videoSearch;
      }) //Global then closed
      .catch((error) => {
        console.log(error);
      }); //Global catch closed
  }), //vidApp closed
    (html.jsApp = function () {
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
            .runAll(`App.${[func]}`, [args]);
        });
      }; //serverSide closed
      serverSide("urlDataSource", [
        "https://www.sec.gov/files/company_tickers.json",
      ])
        .then(async (res) => {
          var input = [JSON.parse(res)];
          for (var i = 0; i < input.length; i++) {
            var randomKey = Math.floor(
              Math.random() * Math.floor(input.length)
            ); // Math.floor(Math.random())
            var currentCik = await input[i][randomKey]["cik_str"];
            var currentTicker = await input[i][randomKey]["ticker"];
            var currentTitle = await input[i][randomKey]["title"];
            var companyHtml = `<div>
                <p><em> Hello Scroll!<em>, 
                <br><span> <div id="searchMe">${currentTitle}</div> <h2>${currentTicker}</h2> is ready to trade. </span>
                <br>Best Regards.
                <br>P.S. <a href="https://www.sec.gov/edgar/browse/?CIK=${currentCik}&owner=exclude" target="_blank">Click here for info!</a></p>
                </div>`;
          }
          document.getElementById("template1").innerHTML = companyHtml;
        }) //Global then closed
        .catch((error) => {
          console.log(error);
        }); //Global catch closed
    }), //jsApp closed
    (html.myRandoms = randomTitle);
  // })Global object closed
  return renderTemplate(html.evaluate()).setTitle("Don'time Life Services");
} //webApp closed

var userClicked = function () {
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

//  {cik_str: await currentCik,
//                             ticker: await currentTicker,
//                             title: await currentTitle,
//                             relatedVideo: serverside(`videoPlayer`, [`playList`, await currentTitle]),
//                             startPageUrl: await startPageUrl
//                             };
// `
// <div><p>
// <em> Hello Scroll!<em>,
// <br>
// <span>
// title <h2>ticker</h2> is ready to trade. </span>
// <br>
// Best Regards.
// <br>
// P.S. Click <a href="https://www.sec.gov/edgar/browse/?CIK=cik_str&owner=exclude" target="_blank">ticker</a> for Info at the SEC</p>
// </div>`
// function doGet(e)
//     {content = contentFile("jsGame",
//             {appJs:
//         function()
//           {const serverSide =
//     function (func, args)
//           {return new Promise((resolve, reject) =>
//           {google.script.run.withSuccessHandler(result =>
//                 {resolve(result)
//               })
//         .withFailureHandler(error =>
//     {console.log(document.getElementById("test").innerHTML)
//   reject(error)
//               })
//         .runAll(`boilerplate.${[func]}`, [args])
//               })
//               };
// // serverSide('youTube', []).then(
// //   (content) => {document.getElementById('template').innerHTML = content
// //                       }).catch(
// //     (error) => {console.log(error)
// //                 });
// // serverSide('checkOnDay', []).then(
// //   (content) => {document.getElementById('checkOnDay').addEventListener('click', userClicked);
// //   function userClicked()
// //         {document.getElementById('template').innerHTML = content}
// //                       }).catch(
// //     (error) => {console.log(error)
// //                 });
// serverSide('videoPlayer', []).then(
//   (content) => {document.getElementById('mainIndex').addEventListener('click', userClicked);
//   function userClicked()
//         {document.getElementById('pageTarget').target = "_parent"
//         document.getElementById('template').innerHTML = content}
//                       }).catch(
//     (error) => {console.log(error)
//                 });
//             },
//             })
//        return renderTemplate(contentApp(content))
//             }

// var doGet = function(e)
//       {const Route =
//       {
//       };
//         Route.path = function(route, callback)
//   {Route[route] = callback
//   }
//       Route.path("default", wwAccess);
//           return authLogic(typeof e.parameter["default"] !== "undefined")? (function()
//   {return authLogic(e.  parameter["default"] === "")?
//   (function()
//               {return wwAccess("development", proMediaSnip)(e)//: contentFile("uiAccess");
//                 })(): authLogic(e.parameter["default"] === "epa")?
//   (function()
//               {return renderTemplate(wwAccess("epa", epaData)())//: contentFile("uiAccess");
//               })(): authLogic(e.parameter["default"] === "edgar")?
//   (function()
//               {return renderTemplate(wwAccess("edgar", edgarData)())//: contentFile("uiAccess");
//                 })(): authLogic(e.parameter["default"] === "odd")?
//   (function()
//               {return renderTemplate(wwAccess("odd", breakthrough)(e))//: contentFile("uiAccess");
//                 })(): authLogic(e.parameter["default"] === "gamer")?
//   (function()
//               {return renderTemplate(wwAccess("gamer", jsGameScripts)())//: contentFile("uiAccess");
//                 })(): authLogic(e.parameter["default"] === "checkOD")?
//   (function()
//             {return renderTemplate(wwAccess("checkOD", checkOnDay)())//: contentFile("uiAccess");
//               })(): authLogic(e.parameter["default"] === "usGov")?
//   (function()
//               {return renderTemplate(wwAccess("usGov", congressLeg)())//: contentFile("uiAccess");
//                 })(): authLogic(e.parameter["default"] === "jFun")?
//   (function()
//               {return renderTemplate(wwAccess("jFun", jFundamentals)(e))//: contentFile("uiAccess");
//                 })(): authLogic(e.parameter["default"] === "ssTest")?
//   (function()
//               {return renderTemplate(wwAccess("ssTest", superTest)(e))//: contentFile("uiAccess");
//                 })(): authLogic(e.parameter["default"] === "ssDataEntry")?
//   (function()
//               {return renderTemplate(wwAccess("ssDataEntry", dataEntry)(e))//: contentFile("uiAccess");
//                 })():  authLogic(e.parameter["default"] === "ssgnuFree")?
//   (function()
//               {return renderTemplate(wwAccess("ssgnuFree", contentFile)("gnuFree"))//: contentFile("uiAccess");
//                 })():  authLogic(e.parameter["default"] === "ssDCUO")?
//   (function()
//               {return renderTemplate(wwAccess("ssDCUO", contentFile)("oddChances"))//: contentFile("uiAccess");
//                 })():  authLogic(e.parameter["default"] === "ssPro")?
//   (function()
//               {return renderTemplate(wwAccess("ssPro", contentFile)("proMedia"))//: contentFile("uiAccess");
//                 })():  authLogic(e.parameter["default"] === "ssCSS")?
//   (function()
//               {return renderTemplate(wwAccess("ssCSS", contentFile)("styling"))//: contentFile("uiAccess");
//                 })():  authLogic(e.parameter["default"] === "ssChemical")?
//   (function()
//               {return renderTemplate(wwAccess("ssChemical", contentFile)("epaWebsite"))//: contentFile("uiAccess");
//                 })():  authLogic(e.parameter["default"] === "ssFinance")?
//   (function()
//               {return renderTemplate(wwAccess("ssFinance", contentFile)("edgarFriendly"))//: contentFile("uiAccess");
//                 })():  authLogic(e.parameter["default"] === "ssHome")?
//   (function()
//               {return renderTemplate(wwAccess("ssHome", contentFile)("index"))//: contentFile("uiAccess");
//                 })():  authLogic(e.parameter["default"] === "ssJCalls")?
//   (function()
//               {return renderTemplate(wwAccess("ssJCalls", contentFile)("callBack"))//: contentFile("uiAccess");
//                 })():  authLogic(e.parameter["default"] === "ssGamer")?
//   (function()
//               {return renderTemplate(wwAccess("ssGamer", contentFile)("jsGame"))//: contentFile("uiAccess");
//                 })():  authLogic(e.parameter["default"] === "ssDateTime")?
//   (function()
//               {return renderTemplate(wwAccess("ssDateTime", contentFile)("checkOnDay"))//: contentFile("uiAccess");
//                 })():  authLogic(e.parameter["default"] === "ssCatch")?
//   (function()
//               {return renderTemplate(wwAccess("ssCatch", contentFile)("uiAccess"))//: contentFile("uiAccess");
//                 })():  authLogic(e.parameter["default"] === "ssForm")?
//   (function()
//               {return renderTemplate(wwAccess("ssForm", contentFile)("popUpOpen"))//: contentFile("uiAccess");
//                 })():  authLogic(e.parameter["default"] === "ssUSCongress")?
//   (function()
//               {return renderTemplate(wwAccess("ssUSCongress", contentFile)("congressLeg"))//: contentFile("uiAccess");
//                 })():  authLogic(e.parameter["default"] === "ssUSHouse")?
//   (function()
//               {return renderTemplate(wwAccess("ssUSHouse", contentFile)("congressMembers"))//: contentFile("uiAccess");
//                 })():  authLogic(e.parameter["default"] === "ssJSFun")?
//   (function()
//               {return renderTemplate(wwAccess("ssJSFun", contentFile)("jFundamentals"))//: contentFile("uiAccess");
//                 })():  authLogic(e.parameter["default"] === "ssGNUJSFun")?
//   (function()
//               {return renderTemplate(wwAccess("ssGNUJSFun", contentFile)("myGNUFreeJS"))//: contentFile("uiAccess");
//                 })():
//   (function()
//       {// Route.path("default", defaultWebsite);
//   // Route.path("escape", escapedHTML);
//   // Route.path("test", testJSON);
//   // Route.path("tagBar", tagBuilder);
//   // Route.path("uiAccess", uiAccess);
//   // Route.path("test", contentFile);
//   // Route.path("default", HtmlService.createHtmlOutput);
//   // Route.path("default", HtmlService.createHtmlOutput);
//   // Route.path("default", HtmlService.createHtmlOutput);
//   // Route.path("default", HtmlService.createHtmlOutput);
//   // Route.path("default", HtmlService.createHtmlOutput);
//   // Route.path("default", HtmlService.createHtmlOutput);
//   // Route.path("default", HtmlService.createHtmlOutput);
//   // Route.path("default", HtmlService.createHtmlOutput);
//   return wwAccess(e.parameter["default"], defaultWebsite)(e)
//                })()})():
//   (function()
//               {return renderTemplate(Route["default"]("html", contentFile)('index'))
//                 })()
//                         }

// var doGet = function(e) {//   // const Route = {};
//   // Route.path = function(route, callback) {//   //       Route[route] = callback
//   // }
//   // var pageCheck = wwAccess()
//   // return wwAccess("unTested", uiAccess);
//   if (typeof e.parameter["default"] === "undefined")
//   {//     // baseUrl = getUrl(ScriptApp);
//   var emails = validate()
//   var emailsCount = validate().toString().split(",").length;
//   var randomEmail = emails[Math.floor(Math.random() * emailsCount)]
//   var gamerUrl = getUrl(ScriptApp) + "?default"
//   // var homeP = wwAccess("test", contentFile)
//   return renderTemplate(wwAccess("test", contentFile)("index"    , {//         utf_8: ("\n<meta charset=\"UTF-8\">"),
//         viewport: ("<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">"),
//         fontAwesome: ("<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css\" integrity=\"sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==\" crossorigin=\"anonymous\" referrerpolicy=\"no-referrer\" />"),
//         google_signin_client: ("\n<meta content=\"739921544160-nvqbr8cmqcs35n700q94mn5qnjh7vdr5.apps.googleusercontent.com\" name=\"google-signin-client_id\"></meta>"),
//         googleApisOnApiLoad: ("\n<script src=\"https://apis.google.com/js/api.js?onload=onApiLoad\"></script>"),
//         googleApis_defer: ("\n<script async=\"\" defer=\"\" src=\"https://apis.google.com/js/platform.js\"></script>"),
//         googleApis_preConnect: ("<link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">"),
//         gstatic_preConnect: ("<link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>"),
//         googleApisCss: ("<link href=\"https://fonts.googleapis.com/css2?family=Libre+Barcode+128&family=Montserrat:ital@1&family=Oswald&family=Roboto&display=swap\" rel=\"stylesheet\">"),
//         materializeCss: ("\n  <link href=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css\" rel=\"stylesheet\"></link>\n"),
//         googleApisIcon: ("\n <link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\"></link>\n  "),
//         materializeMin: ("\n  <script src=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js\"></script>\n  "),
//         website:  ("\n * {\n box-sizing: border-box;margin: 0;padding: 0;font-family: \"Roboto\", sans-serif;\n }\n "),
//         html: ("\n html,\n body {\n height: 100%;\n }\n "),
//         main: ("\n main {\n height: 92%;\n margin-top: 10px;\n }\n "),
//         body: ("\n body {\n background-color: #ffc107;\n }\n "),
//         header: ("\n header {\n background-color: rgba(255,255,255,.1);\n color: #a7e1ee;\n font-size: smaller;\n }\n "),
//         header_h1: ("\n header h1 {\n font-family: \"Montserrat\", cursive;\n margin-left: 15px;\n }\n "),
//         grid: ("\n .grid {\n display: grid;\n }\n "),
//         flex_row: ("\n .flex-row {\n display: flex;\n flex-direction: row;\n }\n "),
//         flex_column: ("\n .flex-column {\n display: flex;\n flex-direction: column;\n }\n "),
//         order_menu_payment: ("\n .order,\n .menu-payment {\n border: solid .5px;\n border-radius: 10px;\n margin: 0px 10px 5px 10px;\n height: 100%;\n max-height: 100%;\n }\n "),
//         seperator1: ("\n /* -----------------------------------ORDER--------------------------- */\n "),
//         order: ("\n .order {\n background-color: white;\n flex: 0 0 440px;\n overflow: auto;\n }\n "),
//         receipt: ("\n .receipt {\n border: solid .5px;\n margin: 10px 15px 5px 15px;\n box-shadow: 3px 3px 2px rgb(3,3,3);\n user-select: none;\n flex-grow: 1;\n }\n "),
//         receipt_company_info_receipt_footer: (".receipt,\n .company-info,\n .receipt-footer {\n align-items: center;\n }\n "),
//         company_info: ("\n .company-info {\n margin-top: 5px;\n }\n "),
//         company_name: ("\n #company-name {\n font-size: 1.5rem;\n }\n "),
//         company_phone: ("\n #company-phone {\n font-size: 1.25rem;\n }\n "),
//         th_description: ("\n th.description {\n width: 180px;\n text-align: left;\n }\n "),
//         th_price: ("\n th.price {\n width: 75px;\n }\n "),
//         quantity_price_subtotal_delete: ("\n .quantity,\n .price,\n .subtotal,\n .delete {\n text-align: right;\n }\n "),
//         receipt_details: ("\n .receipt-details {\n margin-top: 10px;\n flex-grow: 1;\n }\n "),
//         dotted_border: ("\n .dotted-border {\n border-bottom: dotted 2px;\n }\n "),
//         fa_trash_canHover: ("\n .fa-trash-can:hover {\n transform: scale(1.2);\n }\n "),
//         tableSummary_table: ("\n table.summary-table {\n text-align: right;\n }\n "),
//         tbodySummary_table_tdNth_child1: ("\n tbody.summary-table td:nth-child(1) {\n width: 277px;\n }\n "),
//         tbodySummary_table_tdNth_child2: ("\n tbody.summary-table td:nth-child(2) {\n width: 75px;\n }\n "),
//         tbodySummary_table_tdNth_child3: ("\n tbody.summary-table td:nth-child(3) {\n width: 25px;\n }\n "),
//         receipt_footer: ("\n .receipt-footer {\n padding-top: 20px;\n }\n "),
//         barcode: ("\n #barcode {\n font-family: \"Libre Barcode 128\", cursive;\n font-size: 70px;\n margin-top: 10px;\n }\n "),
//         toolbar: ("\n .toolbar {\n flex: 0 0 60px;\n justify-content: space-around;\n align-items: center;\n border: solid .5px;\n border-radius: 10px;\n margin: 0px 15px 5px 15px;\n }\n "),
//         toolbar_icon: ("\n .toolbar-icon {\n font-size: 2rem;\n }\n "),
//         toolbar_iconHover: ("\n .toolbar-icon:hover {\n transform: scale(1.2);\n }\n "),
//         seperator2: ("\n /* ----------------------------Menu-Payment-------------------------- */\n "),
//         menu_payment: ("\n .menu-payment {\n background: rgba(255, 255, 255, .05);\n flex-grow: 1;\n z-index: 0;\n }\n "),
//         menu: ("\n .menu {\n flex-flow: row wrap;\n grid-column: 1;\n grid-row: 1;\n align-content: flex-start;\n z-index: 0;\n height: 100%;\n overflow: auto;\n }\n "),
//         menu_item: ("\n .menu-item {\n flex-flow: column nowrap;\n flex-basis: auto;\n flex-shrink: 0;\n margin: 5px;\n background: rgba(255, 255, 255, .05);\n width: 150px;\n }\n "),
//         menu_img: ("\n .menu-img {\n border-radius: 50%;\n max-width: 100%;\n height: auto;\n display: block;\n margin: auto;\n }\n "),
//         figcaption: ("\n figcaption {\n color: white;\n text-align: center;\n user-select: none;\n }\n "),
//         menu_itemHover: ("\n .menu-item:hover>.menu-img {\n transform: scale(1.03);\n }\n "),
//         gamer: gamerUrl,
//         email: randomEmail
//      })
//      )//: contentFile('uiAccess');
//    Route.path("production", includeApp);
//    return renderTemplate(Route["production"]("<?!= index ?>"))//, { properties: contentApp("\n \n  <? var style = styleHtml() ?> <?!= style ?>\n  <div class=\"row menu-img\">\n  <div class=\"container menu-img col s12\">\n  <div class=\"row menu-img pulse btn-large amber scale-transition scale-out scale-in\">\n  \n <? var webAppUrls = navBar(\"https://www.sec.gov/files/company_tickers.json\", \"Edgar\", \"https://avaddc.com/agency/the-paul-rue-agency/4022/\", \"Defensive Driving\", \"https://script.google.com/macros/s/AKfycbyKOcrgL3g9dTOJSBvjTJD8_S_QGd0_S8j2PwNdKO-3ctWo0uV8UN1bgOTJwFK493qC/exec\", \"Portfolio Beta\", \"https://script.google.com/macros/s/AKfycbxTu7GwOomQ4H97GFSCYfujxWdumQJxT3EkYcrS1fpOr_UFTc-K4BELWHKHC-jVSSx0/exec\", \"B Roll\"); ?>\n  <?!= webAppUrls ?>\n  </div>\n  </div>\n  <div class=\"row menu-img\">\n  <div class=\"container menu-img col s12\">\n  <div class=\"container menu-img col s12\">\n <p id=\"p1\">\n  "), htmlStyle: styleHtml(), })
//   } else
//   {//     switch (e.parameter["default"])
//     {//       case "posHtml":
//         Route.path("default", buildTags);
//         return authLogic(validate())? Route["default"](posHtml): contentFile('uiAccess');
//       case "wwAccess":
//         Route.path("default", wwAccess);
//         return authLogic(validate())? Route["default"](): contentFile('uiAccess');
//       default:
//         return wwAccess("default", runIt)(e)//: contentFile('uiAccess');

//     }
//   }
//   // runIt(e, {path: "default"})
//   // Route.path = function(route, callback) {//   //       Route[route] = callback
//   // }
//   // Route.path("jsonXpath", defaultWebsite)
//   // Route["jsonXpath"]
//   // callback = e.parameter["callback"].replace(/"/g, "");
//   // console.log(callback)
//   // route = e.parameter["webApp"];
//   // console.log(route)
//   // console.log(Route[route])
//     // if(activeSsId() !== "")
// // { // <!----WebApp Website----!>

// //   Route.path("jsonXpath", runIt)
// //   return Route["jsonXpath"](e);

// // } else   return
// // if(e.parameter["webApp"] !== "" && e.parameter["callback"].replace(/"/g, "") !== "")
// //   {// //       Route.path(route,callback)
// //       return Route[route](e);

// //   } else return

//   // console.log(JSON.stringify(e));
//   // const Route = {};
//   // const test = e.parameter['test']
//   // Route.path = function(route, callback) {//   //       Route[route] = callback
//   // }
//   // if(e.parameter['webApp'] === "") { // <!--------------------WebApp Website----------------------!>
//   //   Route.path(e.parameter['webApp'], defaultWebsite)
//   //   return Route[e.parameter['webApp']](e);
//   // } else if (e.parameter['webApp'] === 'jsonEndpoint') { // <!--------------JsonEndpoint Website---------------!>
//   //   Route.path(e.parameter['webApp'], jsonEndpoint)
//   //   return Route[e.parameter['webApp']](e);
//   // } else if (e.parameter['webApp'] === 'devWebsite') { // <!-------------------DevWebsite Website----------------!>
//   //   Route.path(e.parameter['webApp'], devWebsite)
//   //   return Route[e.parameter['webApp']](e);
//   // } else if (e.parameter['webApp'] === 'escapedHTML') { // <!-----------------EscapedHTML Website----------------!>
//   //   Route.path(e.parameter['webApp'], escapedHTML)
//   //   return Route[e.parameter['webApp']](e);
//   // } else if (e.parameter['webApp'] === 'edgarData') { // <!-------------------EdgarData Website----------------!>
//   //   Route.path(e.parameter['webApp'], edgarData)
//   //   return Route[e.parameter['webApp']](e);
//   // } else if (e.parameter['webApp'] === 'videoPlayer') { // <!-----------------VideoPlayer Website----------------!>
//   //   Route.path(e.parameter['webApp'], videoPlayer)
//   //   return Route[e.parameter['webApp']](e);
//   // } else if (e.parameter['webApp'] === 'dateTime') { // <!-------------------DateTime Website----------------!>
//   //   Route.path(e.parameter['webApp'], dateTime)
//   //   return Route[e.parameter['webApp']](e);
//   // } else if (e.parameter['webApp'] === 'runIt') { // <!-------------------DateTime Website----------------!>
//   //   Route.path(e.parameter['webApp'], runIt)
//   //   return Route[e.parameter['webApp']](e);
//   // } else if (e.parameter['webApp'] === 'superDoGet') { // <!-------------------DateTime Website----------------!>
//   //   Route.path(e.parameter['webApp'], e.parameter["callback"].replace(/"/g, ""));
//   //   return Route[e.parameter['webApp']](e);
//   // };
// }

var superDoGet = function (route, callback) {
  const Route = {};
  Route.path = function (route, callback) {
    Route[route] = callback;
  };
  // if(runIt(e)) { // <!----WebApp Website----!>
  console.log(callback);
  //     Route.path(route,callback)
  //     return authLogic(validate())? Route[route](e): contentFile('uiAccess');
  // } else return
};
