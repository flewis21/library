var renderFile = function (file, argsObject) {
  const tmp = HtmlService.createTemplateFromFile(file);
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
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
    .setTitle("Don'time Life Services");
};

var renderTemplate = function (blob, argsObject) {
  const tmp = HtmlService.createTemplate(blob);
  if (argsObject) {
    const keys = Object.keys(argsObject);
    keys.forEach(function (key) {
      tmp[key] = argsObject[key];
    });
  }
  var funcCheck = appList();
  var html = contentApp(
    `
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
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
    img {width: 160px;}</style></head>
    <body>
      <div class="row">
        <nav class="col s10 push-s1 push-m1 push-l1 menu z-depth-5 card-panel amber scale-out scale-in" style="font-size: 30px">
          <div class="container">
            <div class="col s12 receipt nav-wrapper deep-purple darken-1">
                <a href="https://script.google.com/macros/s/AKfycbzhrxdXzM08AAwA5ualRXdnDtV6C_xQ7bcq4v6H0HNdBqPr2C8A1URyWN0FLLccQuoA/exec?func=foo.youTube&args=${
                  [`(by Dontime Life Services)`].toString().split(" ")[
                    Math.floor(
                      Math.random() *
                        Math.floor(
                          [`(by Dontime Life Services)`].toString().split(" ")
                            .length
                        )
                    )
                  ]
                }" target="_top">About-Me</a><br />
                <a href="https://script.google.com/macros/s/AKfycbzhrxdXzM08AAwA5ualRXdnDtV6C_xQ7bcq4v6H0HNdBqPr2C8A1URyWN0FLLccQuoA/exec?func=foo.sheetWebsite&args=${
                  [`1 2 3 4 5`].toString().split(" ")[
                    Math.floor(
                      Math.random() *
                        Math.floor([`1 2 3 4 5`].toString().split(" ").length)
                    )
                  ]
                }" target="_top">Store</a><br />
                <a href="https://script.google.com/macros/s/AKfycbzhrxdXzM08AAwA5ualRXdnDtV6C_xQ7bcq4v6H0HNdBqPr2C8A1URyWN0FLLccQuoA/exec?func=foo.oldEPA&args=${
                  [`ethyl zole zime anol hane leum ther`].toString().split(" ")[
                    Math.floor(
                      Math.random() *
                        Math.floor(
                          [`ethyl zole zime anol hane leum ther`]
                            .toString()
                            .split(" ").length
                        )
                    )
                  ]
                }" target="_top">Local Enviroment</a><br />
                <a href="https://script.google.com/macros/s/AKfycbzhrxdXzM08AAwA5ualRXdnDtV6C_xQ7bcq4v6H0HNdBqPr2C8A1URyWN0FLLccQuoA/exec?func=foo.breakthrough&args=${Math.floor(
                  Math.random() *
                    Math.floor(Utilities.jsonStringify(argsObject).length)
                )}" target="_top">Calculate</a><br />
                <a href="https://script.google.com/macros/s/AKfycbzhrxdXzM08AAwA5ualRXdnDtV6C_xQ7bcq4v6H0HNdBqPr2C8A1URyWN0FLLccQuoA/exec?func=foo.opt&args=${
                  [`group bank semi fact bio science block chain space coin`]
                    .toString()
                    .split(" ")[
                    Math.floor(
                      Math.random() *
                        Math.floor(
                          [
                            `group bank semi fact bio science block chain space coin`,
                          ]
                            .toString()
                            .split(" ").length
                        )
                    )
                  ]
                }" target="_top">Investors</a><br />
                <a href="https://script.google.com/macros/s/AKfycbzhrxdXzM08AAwA5ualRXdnDtV6C_xQ7bcq4v6H0HNdBqPr2C8A1URyWN0FLLccQuoA/exec?func=foo.misBing&args=" target="_top">New</a><br />
            </div></div>
          </nav>
      </div>
    </body>
    <script>document.getElementById('func').addEventListener('change', <?!= funcClicked ?>)</script>
    <script>document.getElementById('args').addEventListener('change', <?!= argsClicked ?>)</script>
    <input type="hidden" value="<?= getUrl(ScriptApp) ?>" id="url" />`,
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
          }
        })();
      },
    }
  );
  return tmp
    .evaluate()
    .append(funcCheck)
    .append(html)
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
    .setTitle("Don'time Life Services");
};

var appList = function (e) {
  var url =
    "https://script.google.com/macros/s/AKfycbzhrxdXzM08AAwA5ualRXdnDtV6C_xQ7bcq4v6H0HNdBqPr2C8A1URyWN0FLLccQuoA/exec?func=foo.";
  const matches = [];
  for (var key in globalThis) {
    if (typeof globalThis[key] == "function") {
      matches.push(key);
    }
  }
  var coTable = matches.map((r) => {
    return `<option><a class="waves-effect waves-light btn" href="${url}${encodeURIComponent(
      r
    )}&args=" target="_blank">${r}</a></option>`;
  });
  const result = Utilities.jsonStringify(coTable);
  const html = HtmlService.createTemplate(
    `<div class="row">
    <div class="col s10 card-panel amber push-s1 push-m1 push-l1">
    <div class="container">
    <div class="col s12 receipt deep-purple darken-1">
    <span><input placeholder="Your Search Here Ex. apple,orange..." class="menu-img z-depth-5 card-panel deep-purple darken-1 scale-transition scale-out scale-in receipt btn-large" id="username" type="search" /></span>
    </div></div></div></div>
    <div class="row">
    <div class="col s10 card-panel amber push-s1 push-m1 push-l1">
    <div class="container">
    <div class="col s12 receipt deep-purple darken-1">
    <label for="appList" class="active" style="font-size: 16px; top: -5px; left: -4px;">Choose your function...</label>
    <select id="appList" class="browser-default deep-purple darken-1">
    </select>
    </div></div></div></div>
    <script>document.addEventListener("DOMContentLoaded", 
function()
  {document.getElementById("appList").innerHTML = ${result};
  var elems = document.querySelectorAll('select');
  var instances = M.FormSelect.init(elems);
  document.getElementById("appList").selectedIndex = -1;})</script>
    <script>document.getElementById("appList").addEventListener("change", foo)
function foo(){
  var bar = document.getElementById("username").value;
  var foo = document.getElementById("appList").value
  var linkFollow = document.createElement("a");
  linkFollow.href = ${Utilities.jsonStringify(url)} + foo + "&args=" + bar;
  linkFollow.id = "linkFOLLOW";
  linkFollow.target = "_top";
  document.body.appendChild(linkFollow);
  document.getElementById("linkFOLLOW").click();
  document.getElementById("appList").value = ""}</script>    
    <script>document.getElementById("username").addEventListener("change", bar)
function bar(){
  var bar = document.getElementById("username").value;
  var foo = document.getElementById("appList").value
  if (indexOf(foo) !== -1){
  var linkFollow = document.createElement("a");
  linkFollow.href = ${Utilities.jsonStringify(url)} + foo + "&args=" + bar;
  linkFollow.id = "linkFOLLOW";
  linkFollow.target = "_top";
  document.body.appendChild(linkFollow);
  document.getElementById("linkFOLLOW").click();}}</script>`
  );
  return html.evaluate().getContent();
};
