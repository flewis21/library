function jsGameScripts() {
  let gamerUrl = getScriptUrl();
  let html = contentApp(
    `
    <html id="jsGameScripts">
      <head>
        <?!= styleHtml.abcIt.getContent() ?>
        <meta name="jsGameScripts" content="Boilerplate Script Game">
        <style>
          <?!= styleHtml.renderFile.getContent() ?>
        </style>
      </head>
      <body>
        <div class="header toolbar toolbar-icon menu-icon">
          <p>Play the greatest RPG ever to be made!</p>
          <h2>Choose Your Character</h2>
        </div>
        <div class="interface dotted_border container">
          <a id="wro" href="#">
            <img src="" alt="warrior">
            <div>
              <h3>Warrior</h3>
              <input type="text" id="delAddr" class="datepicker prefDate float-right menu-img z-depth-5 card-panel transparent center scale-transition receipt toolbar toolbar_icon toolbar_iconHover scale-out scale-in" name="delAddr" placeholder="Function execution has timed out. Restart the debugger to continue debugging.">
              <div id="delAddrSuggestions" class="autocomplete-suggestions"></div>
            </div>
          </a>
          <a id="roe" href="#">
            <img src="" alt="rouge">
            <div>
              <h3 class="header h1">Rouge</h3>
              <input type="text" id="delAddr" class="datepicker prefDate float-right menu-img z-depth-5 card-panel transparent center scale-transition receipt toolbar toolbar_icon toolbar_iconHover scale-out scale-in" name="delAddr" placeholder="Function execution has timed out. Restart the debugger to continue debugging.">
              <div id="delAddrSuggestions" class="autocomplete-suggestions"></div>
            </div>
          </a>
          <a id="mge" href="#">
            <img src="" alt="mage">
            <div>
              <h3>Mage</h3>
              <input type="text" id="delAddr" class="datepicker prefDate float-right menu-img z-depth-5 card-panel transparent center scale-transition receipt toolbar toolbar_icon toolbar_iconHover scale-out scale-in" name="delAddr" placeholder="Function execution has timed out. Restart the debugger to continue debugging.">
              <div id="delAddrSuggestions" class="autocomplete-suggestions"></div>
            </div>
          </a>
          <a id="hne" href="#">
            <img src="" alt="hunter">
            <div>
              <h3>Hunter</h3>
              <input type="text" id="delAddr" class="datepicker prefDate float-right menu-img z-depth-5 card-panel transparent center scale-transition receipt toolbar toolbar_icon toolbar_iconHover scale-out scale-in" name="delAddr" placeholder="Function execution has timed out. Restart the debugger to continue debugging.">
              <div id="delAddrSuggestions" class="autocomplete-suggestions"></div>
            </div>
          </a>
        </div>
        <div class="actions"></div>
        <div class="arena"></div>
        <div class="enemy"></div>
        <?!= styleHtml.runIt.getContent() ?>
        <?!= styleHtml.mgfRunIt.getContent() ?>
        <?!= styleHtml.jsGameScriptsRunIt.getContent() ?>
      </body>
    </html>`
    ,{
      gamestart: new Gamer("Warrior",100,0,50,10,25)
    },
  );
  html.gamerUrl = gamerUrl;
  return html; //: contentFile("uiAccess")
}
