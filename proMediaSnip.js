var proMediaSnip = function (e) {
  // var author = validGroup("f.")
  // var myFileE = myFileJS(e)
  var gaming = jsGameScripts();
  var htmlCss = styleHtml();
  var today = new Date();
  var chancing = breakthrough(e);
  var gamerUrl = getUrl(ScriptApp) + "?default";
  var backLinkUrl = getUrl(ScriptApp);
  var media = videoPlayer("playlist", "UU6DOFpA9UCTgNwJiVX1IOpQ");
  // var rule = today.toDateString() + " - " + today.toTimeString()
  // return renderTemplate(wwAccess("something", contentFile)("epaWebsite"
  //       , {
  // materializeCss: ("\n  <link href=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css\" rel=\"stylesheet\"></link>\n"),
  // tabulatorCss: ("\n  <link href=\"https://unpkg.com/tabulator-tables@5.2.3/dist/css/tabulator_materialize.min.css\" rel=\"stylesheet\">"),
  // materializeJs: ("\n  <script src=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js\"></script>\n  "),
  // luxonJs: ("\n    <script src=\"https://cdnjs.cloudflare.com/ajax/libs/luxon/3.0.1/luxon.min.js\" integrity=\"sha512-6ZJuab/UnRq1muTChgrVxJhSgygmL2GMLVmSJN7pcBEqJ1dWPbqN9CiZ6U3HrcApTIJsLnMgXYBYgtVkJ8fWiw==\" crossorigin=\"anonymous\" referrerpolicy=\"no-referrer\"></script>"),
  // tabulatorJs: ("\n    <script type=\"text/javascript\" src=\"https://unpkg.com/tabulator-tables@5.2.3/dist/js/tabulator.min.js\"></script>"),
  // dOMContentLoaded: ("\n  document.addEventListener('DOMContentLoaded', function() {\n  let timePicker = document.getElementById(\"prefTime\");\n M.Timepicker.init(timePicker, { defaultTime: \"now\" })\n })\n \n  document.getElementById(\"btn\").addEventListener(\"click\", function() {\n  google.script.run.runItLog();\n  })\n    var elems = document.querySelectorAll('select');\n    var instances = M.FormSelect.init(elems, options);\n  });"),
  // startPageUrl: getUrl(ScriptApp),
  // rule: today.toDateString() + " - " + today.toTimeString(),

  //         }))
  return renderTemplate(
    wwAccess("test", contentFile)("callBack", {
      misc: function (e) {
        console.log(eval(e.target));
        ("use strict");
        console.log(document.getElementById("test").innerHTML)(
          google.script.run
            .withSuccessHandler(function (hasAccess) {
              console.log(hasAccess);
              google.script.run
                .withSuccessHandler(function (author) {
                  console.log(author);
                })
                .runAll("boilerplate.carbon", [
                  "fabian.j.lewis.dontnent@gmail.com",
                ]);
              document.getElementById("uldiv").innerHTML = "";
            })
            .runAll("boilerplate.validate", [])
        )();
        var go = function () {
          google.script.run
            .withSuccessHandler(function () {})
            .runAll("boilerplate.wwAccess", ["uiTest", "uiAccess"]);
        };
        document.getElementById("caller").onclick = go;
      },
      artifacts: contentApp(
        '\n<nav>\n<a href="" target="_blank">Lab Results</a>\n<a href="chemo" target="_blank">Style</a>\n<a href="homeGame" target="_blank">Play</a>\n<a href="dcuo" target="_blank">Media</a>\n</nav>\n \n \n \n ',
        {
          media: media,
          odd: chancing,
          play: gaming,
          htmlStyle: htmlCss,
        }
      ),
      gamerUrl: gamerUrl,
      backLinkUrl: backLinkUrl,
      pagemanager: contentApp(
        'let PageManager = {\n setPageStart: function(classType) {\n this.resetPager(classType);this.setPrePage();\n },\n resetPager: function(classType) {\n switch (classType) {\n case "Setup":\n pager = new Pager(classType);\n break;\n }\n let getInterface = document.querySelector(".interface");\n getInterface.innerHTML = \n },\n setPrePage: function() {\n }\n }\n '
      ),
      pager:
        "let pager;\n var Pager = function(classType) {\n this.classType = classType;\n }\n ",
      rule: rule,
      website:
        '\n * {\n box-sizing: border-box;margin: 0;padding: 0;font-family: "Roboto", sans-serif;\n }\n ',
      utf_8: '\n<meta charset="UTF-8">',
      viewport:
        '<meta name="viewport" content="width=device-width, initial-scale=1.0">',
      fontAwesome:
        '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />',
      materializeCss:
        '\n  <link href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" rel="stylesheet"></link>\n',
      materializeJs:
        '\n  <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>\n  ',
      html: "\n html,\n body {\n height: 100%;\n }\n ",
      main: "\n main {\n height: 92%;\n margin-top: 10px;\n }\n ",
      body: "\n body {\n background-color: #ffc107;\n }\n ",
      header:
        "\n header {\n background-color: rgba(255,255,255,.1);\n color: #a7e1ee;\n font-size: smaller;\n }\n ",
      header_h1:
        '\n header h1 {\n font-family: "Montserrat", cursive;\n margin-left: 15px;\n }\n ',
      menu: "\n .menu {\n flex-flow: row wrap;\n grid-column: 1;\n grid-row: 1;\n align-content: flex-start;\n z-index: 0;\n height: 100%;\n overflow: auto;\n }\n ",
      menu_item:
        "\n .menu-item {\n flex-flow: column nowrap;\n flex-basis: auto;\n flex-shrink: 0;\n margin: 5px;\n background: rgba(255, 255, 255, .05);\n width: 150px;\n }\n ",
      menu_img:
        "\n .menu-img {\n border-radius: 50%;\n max-width: 100%;\n height: auto;\n display: block;\n margin: auto;\n }\n ",
      figcaption:
        "\n figcaption {\n color: white;\n text-align: center;\n user-select: none;\n }\n ",
      menu_itemHover:
        "\n .menu-item:hover>.menu-img {\n transform: scale(1.03);\n }\n ",
    })
  ); //:contentFile("uiAccess")
};
