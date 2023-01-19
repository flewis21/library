function youTube(searchWord, e) {
  console.log(JSON.stringify(e));
  var username = e.parameter["uname"] || searchWord;
  const uniqueVid = needPastTime(
    `https://www.bing.com/search?q=${encodeURIComponent(
      username
    )}%20site%3Ayoutube.com&PC=U316$top=50&$skip=0&FORM=CHROMIN`,
    `v=`,
    0,
    11
  );
  // const randomKey = Math.floor(Math.random() * (Math.floor(uniqueVid.length)))// Math.floor(Math.random());
  // const videoPlaylist = covObjects(uniqueVid, ["youtubeID"]);
  // const uniqueKey = [videoPlaylist].entries().next().value;
  // const randomCo = uniqueKey[1][randomKey];
  // const randomVideo = Utilities.jsonStringify(randomCo["youtubeID"]);
  content = contentFile("index", {
    myVideo: uniqueVid,
    myTitle: username,
    linkMaker: function () {
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
      serverSide(`getScriptUrl`, [])
        .then((url) => {
          window.open(url, `_self`);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  });
  return renderTemplate(
    contentApp(content, {
      utf_8: '\n<meta charset="UTF-8">',
      viewport:
        '<meta name="viewport" content="width=device-width, initial-scale=1.0">',
      fontAwesome:
        '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />',
      google_signin_client:
        '\n<meta content="739921544160-nvqbr8cmqcs35n700q94mn5qnjh7vdr5.apps.googleusercontent.com" name="google-signin-client_id"></meta>',
      googleApisOnApiLoad:
        '\n<script src="https://apis.google.com/js/api.js?onload=onApiLoad"></script>',
      googleApis_defer:
        '\n<script async="" defer="" src="https://apis.google.com/js/platform.js"></script>',
      googleApis_preConnect:
        '<link rel="preconnect" href="https://fonts.googleapis.com">',
      gstatic_preConnect:
        '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>',
      googleApisCss:
        '<link href="https://fonts.googleapis.com/css2?family=Libre+Barcode+128&family=Montserrat:ital@1&family=Oswald&family=Roboto&display=swap" rel="stylesheet">',
      materializeCss:
        '\n  <link href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" rel="stylesheet"></link>\n',
      googleApisIcon:
        '\n <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>\n  ',
      materializeMin:
        '\n  <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>\n  ',
      website:
        '\n * {\n box-sizing: border-box;margin: 0;padding: 0;font-family: "Roboto", sans-serif;\n }\n ',
      html: "\n html,\n body {\n height: 100%;\n }\n ",
      main: "\n main {\n height: 92%;\n margin-top: 10px;\n }\n ",
      body: "\n body {\n background-color: #ffc107;\n }\n ",
      header:
        "\n header {\n background-color: rgba(255,255,255,.1);\n color: #a7e1ee;\n font-size: smaller;\n }\n ",
      header_h1:
        '\n header h1 {\n font-family: "Montserrat", cursive;\n margin-left: 15px;\n }\n ',
      grid: "\n .grid {\n display: grid;\n }\n ",
      flex_row: "\n .flex-row {\n display: flex;\n flex-direction: row;\n }\n ",
      flex_column:
        "\n .flex-column {\n display: flex;\n flex-direction: column;\n }\n ",
      order_menu_payment:
        "\n .order,\n .menu-payment {\n border: solid .5px;\n border-radius: 10px;\n margin: 0px 10px 5px 10px;\n height: 100%;\n max-height: 100%;\n }\n ",
      seperator1:
        "\n /* -----------------------------------ORDER--------------------------- */\n ",
      order:
        "\n .order {\n background-color: white;\n flex: 0 0 440px;\n overflow: auto;\n }\n ",
      receipt:
        "\n .receipt {\n border: solid .5px;\n margin: 10px 15px 5px 15px;\n box-shadow: 3px 3px 2px rgb(3,3,3);\n user-select: none;\n flex-grow: 1;\n }\n ",
      receipt_company_info_receipt_footer:
        ".receipt,\n .company-info,\n .receipt-footer {\n align-items: center;\n }\n ",
      company_info: "\n .company-info {\n margin-top: 5px;\n }\n ",
      company_name: "\n #company-name {\n font-size: 1.5rem;\n }\n ",
      company_phone: "\n #company-phone {\n font-size: 1.25rem;\n }\n ",
      th_description:
        "\n th.description {\n width: 180px;\n text-align: left;\n }\n ",
      th_price: "\n th.price {\n width: 75px;\n }\n ",
      quantity_price_subtotal_delete:
        "\n .quantity,\n .price,\n .subtotal,\n .delete {\n text-align: right;\n }\n ",
      receipt_details:
        "\n .receipt-details {\n margin-top: 10px;\n flex-grow: 1;\n }\n ",
      dotted_border: "\n .dotted-border {\n border-bottom: dotted 2px;\n }\n ",
      fa_trash_canHover:
        "\n .fa-trash-can:hover {\n transform: scale(1.2);\n }\n ",
      tableSummary_table:
        "\n table.summary-table {\n text-align: right;\n }\n ",
      tbodySummary_table_tdNth_child1:
        "\n tbody.summary-table td:nth-child(1) {\n width: 277px;\n }\n ",
      tbodySummary_table_tdNth_child2:
        "\n tbody.summary-table td:nth-child(2) {\n width: 75px;\n }\n ",
      tbodySummary_table_tdNth_child3:
        "\n tbody.summary-table td:nth-child(3) {\n width: 25px;\n }\n ",
      receipt_footer: "\n .receipt-footer {\n padding-top: 20px;\n }\n ",
      barcode:
        '\n #barcode {\n font-family: "Libre Barcode 128", cursive;\n font-size: 70px;\n margin-top: 10px;\n }\n ',
      toolbar:
        "\n .toolbar {\n flex: 0 0 60px;\n justify-content: space-around;\n align-items: center;\n border: solid .5px;\n border-radius: 10px;\n margin: 0px 15px 5px 15px;\n }\n ",
      toolbar_icon: "\n .toolbar-icon {\n font-size: 2rem;\n }\n ",
      toolbar_iconHover:
        "\n .toolbar-icon:hover {\n transform: scale(1.2);\n }\n ",
      seperator2:
        "\n /* ----------------------------Menu-Payment-------------------------- */\n ",
      menu_payment:
        "\n .menu-payment {\n background: rgba(255, 255, 255, .05);\n flex-grow: 1;\n z-index: 0;\n }\n ",
      menu: "\n .menu {\n flex-flow: row wrap;\n grid-column: 1;\n grid-row: 1;\n align-content: flex-start;\n z-index: 0;\n height: 100%;\n overflow: auto;\n }\n ",
      menu_item:
        "\n .menu-item {\n flex-flow: column nowrap;\n flex-basis: auto;\n flex-shrink: 0;\n margin: 5px;\n background: rgba(255, 255, 255, .05);\n width: 150px;\n }\n ",
      menu_img:
        "\n .menu-img {\n border-radius: 50%;\n max-width: 100%;\n height: auto;\n display: block;\n margin: auto;\n }\n ",
      figcaption:
        "\n figcaption {\n color: white;\n text-align: center;\n user-select: none;\n }\n ",
      menu_itemHover:
        "\n .menu-item:hover>.menu-img {\n transform: scale(1.03);\n }\n ",
      gamer: getUrl(ScriptApp),
      email: function () {
        var emails = validate();
        var emailsCount = validate().toString().split(",").length;
        var randomEmail = emails[Math.floor(Math.random() * emailsCount)];
        return randomEmail;
      },
      appJs: function () {
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
      },
    })
  );
}

var pastTime = function (url) {
  const uniqueVid = needPastTime(
    `https://www.bing.com/search?q=%20site%3Ayoutube.com&PC=U316$top=50&$skip=0&FORM=PORE`,
    `v=`,
    0,
    10
  );
  const randomKey = Math.floor(Math.random() * Math.floor(15)); // Math.floor(Math.random());
  const videoPlaylist = covObjects(uniqueVid, ["youtubeID"]);
  // const randomKey = Math.floor(Math.random() * (Math.floor(10000)))// Math.floor(Math.random());
  const uniqueKey = [videoPlaylist].entries().next().value;
  console.log(uniqueKey[1][randomKey]);
  const randomCo = uniqueKey[1][randomKey];
  const randomTitle = randomCo["youtubeID"];
  const randomTicker = randomCo["ticker"];
  const randomCIK = randomCo["cik_str"];
};
