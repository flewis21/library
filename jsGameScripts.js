function jsGameScripts() {
  let gamerUrl = getScriptUrl();
  let html = contentApp(
    `
    <html id="jsGameScripts">
      <head>
        <base target="_top"></base>
        <meta charset="utf-8">
        <meta name="jsGameScripts" content="Boilerplate Script Game">
        <meta name=viewport content="width=device-width, initial-scale=1">
        <link href="https://fonts.googleapis.com/css?family=Acme" rel="stylesheet">
      </head>
      <body>
        <div class="header toolbar toolbar-icon">
          <p>Play the greatest RPG ever to be made!</p>
          <h2>Choose Your Character</h2>
        </div>
        <div class="interface dotted_border">
          <a id="wro" href="#">
            <img src="" alt="warrior">
            <div>
              <h3>Warrior</h3> 
              <p>Function execution has timed out. Restart the debugger to continue debugging.</p>
            </div>
          </a>
          <a id="roe" href='<?= getUrl(ScriptApp) ?>'>
            <img src="" alt="rouge">
            <div>
              <h3 class="header h1">Rouge</h3> 
              <p>Function execution has timed out. Restart the debugger to continue debugging.</p>
            </div>
          </a>
          <a id="mge" href='<?= getUrl(ScriptApp) ?>'>
            <img src="" alt="mage">
            <div>
              <h3>Mage</h3> 
              <p>Function execution has timed out. Restart the debugger to continue debugging.</p>
            </div>
          </a>
          <a id="hne" href='<?= getUrl(ScriptApp) ?>'>
            <img src="" alt="hunter">
            <div>
              <h3>Hunter</h3> 
              <p>Function execution has timed out. Restart the debugger to continue debugging.</p>
            </div>
          </a>
        </div>
        <div class="actions"></div>
        <div class="arena"></div>
        <div class="enemy"></div>
        <?!= game_warrior.getContent() ?>
      </body>
    </html>`,
    {
      gamestart: rePlay("Warrior")
    },
  );
  html.img = HtmlService.createHtmlOutput(`img {width: 160px;}`).getContent();
  html.gamerUrl = gamerUrl;
  return html; //: contentFile("uiAccess")
}
