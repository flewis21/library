var proMediaSnip 
  = function(e) {var today 
  = new Date();var rule 
  = today.toDateString() + " - " + today.toTimeString();var gaming 
  = jsGameScripts();var chancing 
  = breakthrough(e);var backLinkUrl 
  = getUrl(ScriptApp);var media 
  = e || "the Rybka Twins";var html 
  = HtmlService.createTemplate(`<!DOCTYPE html><html id="test"><head><base id="pageTarget" target="_top"><?!= jsGameScripts() ?></head><body id="template"><div class="row"><nav class="col s3 menu z-depth-5 card-panel amber scale-out scale-in"><a id="mainIndex" href='https://flewis21.github.io/About-Me/'>About Me</a><br /><a id="checkOnDay" href='https://flewis21.github.io/videoSEC/'>SEC Videos Today</a><br /><a href='https://flewis21.github.io/odd-chances/' target="_top">Numerological Numbers</a><br /><a href='https://flewis21.github.io/budget/' target="_blank">Check Today EPA</a><br /><a href='<?= getUrl(ScriptApp) ?>' target="_parent">Homemade Games</a><br /><a href='<?= getUrl(ScriptApp) ?>' target="_blank">Company Info Table</a><br /><a href='<?= getUrl(ScriptApp) ?>' target="_top">Congress Legislation</a><br /></nav><br /></div><div class="agenda z-depth-5 pulse btn-large card-panel blue scale-out scale-in"><a class="black darken-4 receipt toolbar toolbar_icon toolbar_iconHover scale-out btn-large" href="mailto: <?!= email() ?> ? {subject} = {subject}" class="menu-img z-depth-5 card-panel black scale-transition scale-out scale-in" target="-blank"> Contact Me</a><br><a id="caller" href='<?= getUrl(ScriptApp) ?>'>update</a><br><ul id="uldiv">waiting...</ul><div class="interface"><a href='<?= getUrl(ScriptApp) ?>' onclick="PageManager.setPageStart('Setup')"><img src="" alt="setup" /><div><h3>Setup</h3></div></a></div><iframe src="https://drive.google.com/file/d/11oKCk1am1bqTEIylMcsatdkMdF6jKkFe/preview" width="800" height="600" allow="autoplay"></iframe><?!= artifacts ?><script>document.addEventListener('DOMContentLoaded', <?!= misc ?>)</script></body></html>`);html.misc 
  = function(e) {"use strict";(google.script.run.withSuccessHandler(function(hasAccess){google.script.run.withSuccessHandler(function(author){}).runBoilerplate("carbon", ["fabian.j.lewis.dontnent@gmail.com"]);document.getElementById("uldiv").innerHTML="";}).runBoilerplate("validate", []))();var go 
  = function() {google.script.run.withSuccessHandler(function(){}).runBoilerplate("wwAccess", ["uiTest", "uiAccess"])};document.getElementById("caller").onclick 
  = go;};html.artifacts 
  = HtmlService.createTemplate(`<nav><a href="" target="_blank">Lab Results</a><a href="chemo" target="_blank">Style</a><a href="homeGame" target="_blank">Play</a><a href="media" target="_blank">Media</a></nav><div class="row"><div class ="col s12"><div class="container"><div class="col s12"><?!= geneFrame(seoPastTime(media).playList[0]) ?></div></div></div></div>`).getRawContent();html.artifacts.media 
  = media; html.artifacts.odd 
  = chancing; html.artifacts.play 
  = gaming; // html.artifacts.htmlStyle = htmlCss; 
  html.backLinkUrl 
  = backLinkUrl;html.pagemanager 
  = HtmlService.createHtmlOutput(`let PageManager 
  = {setPageStart: function(classType) {this.resetPager(classType);this.setPrePage();},resetPager: function(classType) {switch (classType) {case "Setup": pager 
  = new Pager(classType);break;};let getInterface 
  = document.querySelector(".interface");getInterface.innerHTML 
  = },setPrePage: function() {}}`).getContent();html.pager 
  = HtmlService.createHtmlOutput(`let pager;var Pager 
  = function(classType) {this.classType 
  = classType;}`).getContent();html.rule 
  = rule;html.website 
  =  HtmlService.createHtmlOutput(`
    * {box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: "Roboto", sans-serif;}`).getContent();html.utf_8 
      = HtmlService.createHtmlOutput(`<meta charset="UTF-8">`).getContent();html.viewport 
      = HtmlService.createHtmlOutput(`
  <meta name="viewport" content="width=device-width, initial-scale=1.0">`).getContent();html.fontAwesome 
  = HtmlService.createHtmlOutput(`<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />`).getContent();html.materializeCss 
  = HtmlService.createHtmlOutput(`<link href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" rel="stylesheet"></link>`).getContent();html.materializeJs 
  = HtmlService.createHtmlOutput(`<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>`).getContent();html.html 
  = HtmlService.createHtmlOutput(`html, body {height: 100%;}`).getContent();html.main 
  = HtmlService.createHtmlOutput(`main {height: 92%;margin-top: 10px;}`).getContent();html.body 
  = HtmlService.createHtmlOutput(`body {background-color: #ffc107;}`).getContent();html.header 
  = HtmlService.createHtmlOutput(`
    header {background-color: rgba(255,255,255,.1);
    color: #a7e1ee;
    font-size: smaller;}`).getContent();html.header_h1 
    = HtmlService.createHtmlOutput(`
    header h1 {font-family: "Montserrat", cursive;
    margin-left: 15px;}`).getContent();html.menu 
    = HtmlService.createHtmlOutput(`
    .menu {flex-flow: row wrap;
          grid-column: 1;
          grid-row: 1;
          align-content: flex-start;
          z-index: 0;
          height: 100%;
          overflow: auto;}`).getContent();html.menu_item 
          = HtmlService.createHtmlOutput(`
    .menu-item {flex-flow: column nowrap;
               flex-basis: auto;
               flex-shrink: 0;
               margin: 5px;
               background: rgba(255, 255, 255, .05);
               width: 150px;}`).getContent();html.menu_img 
               = HtmlService.createHtmlOutput(`
    .menu-img {border-radius: 50%;
              max-width: 100%;
              height: auto;
              display: block;
              margin: auto;}`).getContent();html.figcaption 
              = HtmlService.createHtmlOutput(`
    figcaption {color: white;
               text-align: center;
               user-select: none;}`).getContent();html.menu_itemHover 
               = HtmlService.createHtmlOutput(`.menu-item:hover>.menu-img {transform: scale(1.03);}`).getContent();return wwAccess("test", renderTemplate, html.evaluate().getContent())}

var prose 
  = function() {var myApp 
  = {appJS: function() {var randomSECCo 
  = allInvestors();var randomSECMe
  = vidPlaylist();var myVid 
  = randomSECCo.title;var myVidId 
  = randomSECMe.videoItemUrl || (needUtility() && needUtility()[0] && needUtility()[0].videoItemUrl);var infoLink 
  = seoSheet(myVid).keyWords;var pageArray 
  = [];
  if (Array.isArray(infoLink)) {var page 
  = infoLink.map(function(tv) {var listItem 
  = (seoPastTime(tv) && seoPastTime(tv).playList);
    if (Array.isArray(listItem)) {var plaListNum 
  = Math.floor(Math.random() * Math.floor(listItem.length));var rndListItem 
  = listItem[plaListNum];pageArray.push(rndListItem)}
  else {console.error(listItem + " listItem is not an array")}})}
  else {console.error(infoLink + " infoLink.keyWords is not an array.")};var story 
  = pageArray[Math.floor(Math.random() * Math.floor(pageArray.length))];return seoCapital(dtlsPict(story))}};var result 
  = myApp.appJS();
  if (result) {Logger.log("Result: " + result)}
  else {Logger.log("Error: " + result)};var htmlOutput 
  = `<!DOCTYPE html><html id="proMedia"><head><base target="_top"><meta charset="utf-8"><meta name="proMedia" content="Boilerplate Professional Media Services"><meta name=viewport content="width=device-width, initial-scale=1"><link href="https://fonts.googleapis.com/css?family=Acme" rel="stylesheet"><style>
      a:link, a:visited {color:black !important;}
      a:hover, a:active{ 
        color:white  !important;
        text-decoration:none  !important;}</style></head><body class="blue" id="template"><h2>Result</h2><nav class="amber darken-4"><?= result ?></nav><input type="hidden" value="startPageUrl" id="breakUrl" /></body></html>`;
  return htmlOutput}


  // var author 
  // = validGroup("f.");var myFileE 
  // = myFileJS(e);return renderTemplate(wwAccess("something", contentFile)("epaWebsite", {materializeCss: ("\n  <link href=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css\" rel=\"stylesheet\"></link>\n"),tabulatorCss: ("\n  <link href=\"https://unpkg.com/tabulator-tables@5.2.3/dist/css/tabulator_materialize.min.css\" rel=\"stylesheet\">"),materializeJs: ("\n  <script src=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js\"></script>\n  "),luxonJs: ("\n    <script src=\"https://cdnjs.cloudflare.com/ajax/libs/luxon/3.0.1/luxon.min.js\" integrity=\"sha512-6ZJuab/UnRq1muTChgrVxJhSgygmL2GMLVmSJN7pcBEqJ1dWPbqN9CiZ6U3HrcApTIJsLnMgXYBYgtVkJ8fWiw==\" crossorigin=\"anonymous\" referrerpolicy=\"no-referrer\"></script>"),tabulatorJs: ("\n    <script type=\"text/javascript\" src=\"https://unpkg.com/tabulator-tables@5.2.3/dist/js/tabulator.min.js\"></script>"),dOMContentLoaded: ("\n  document.addEventListener('DOMContentLoaded', function() {\n  let timePicker 
  // = document.getElementById(\"prefTime\");\n M.Timepicker.init(timePicker, { defaultTime: \"now\" })\n })\n \n  document.getElementById(\"btn\").addEventListener(\"click\", function() {\n  google.script.run.runItLog();\n  })\n    var elems 
  // = document.querySelectorAll('select');\n    var instances 
  // = M.FormSelect.init(elems, options);\n  });"),startPageUrl: getUrl(ScriptApp),rule
  // : today.toDateString() + " - " + today.toTimeString(),}))
  // :contentFile("uiAccess")


