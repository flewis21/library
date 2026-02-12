function jsGameScripts() {
  var gamerUrl = getScriptUrl();
  var html = 
    HtmlService
      .createTemplate(`<html id="jsGameScripts">
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
                              <a href='<?= getUrl(ScriptApp) ?>' onclick="GameManager.setGameStart('Warrior')">
                                <img src="" alt="warrior">
                                <div>
                                  <h3>Warrior</h3> 
                                  <p>Function execution has timed out. Restart the debugger to continue debugging.</p>
                                </div>
                              </a>
                              <a href='<?= getUrl(ScriptApp) ?>' onclick="GameManager.setGameStart('Rouge')">
                                <img src="" alt="rouge">
                                <div>
                                  <h3 class="header h1">Rouge</h3> 
                                  <p>Function execution has timed out. Restart the debugger to continue debugging.</p>
                                </div>
                              </a>
                              <a href='<?= getUrl(ScriptApp) ?>' onclick="GameManager.setGameStart('Mage')">
                                <img src="" alt="mage">
                                <div>
                                  <h3>Mage</h3> 
                                  <p>Function execution has timed out. Restart the debugger to continue debugging.</p>
                                </div>
                              </a>
                              <a href='<?= getUrl(ScriptApp) ?>' onclick="GameManager.setGameStart('Hunter')">
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
                            <script>
                            </script>  
                          </body>
                        </html>`);
  html.gamemanager = 
    HtmlService
      .createHtmlOutput(
    `let GameManager = 
      {
        setGameStart: function(classType) {
          this.resetPlayer(classType);
          this.setPreFight();
        },
        resetPlayer: function(classType) {
          switch (classType) {
            case "Warrior": gamer = 
              new Gamer(classType, 200, 0, 200, 100, 50);
              break;
            case "Rouge": gamer = 
              new Gamer(classType, 100, 0, 100, 150, 200);
              break;
            case "Mage": gamer = 
              new Gamer(classType, 80, 0, 50, 200, 50);
              break;
            case "Hunter": gamer = 
              new Gamer(classType, 200, 0, 50, 200, 100);
              break;
          } 
          let getInterface = document.querySelector(\".interface\");
          getInterface.innerHTML = 
            "<img src="" class="img-avatar">
            <div><h3>" + classType + "</h3>
            <p>Health: " + gamer.health + "</p>";
        },
        setPreFight: function() {
        }
      }`,
  ).getContent();
  html.gamer = 
    HtmlService
      .createHtmlOutput(
        `let gamer;
        var Gamer = function(classType, health, mana, strength, agility, speed) {
          this.classType = classType;
          this.health = health;
          this.mana = mana;
          this.strength = strength;
          this.agility = agility;
          this.speed = speed;
        }`,
  ).getContent();
  html.enemy = 
    HtmlService
      .createHtmlOutput(
        `let enemy;
        var Enemy = function(enemyType, health, mana, strength, agility, speed) {
          this.classType = enemyType;
          this.health = health;
          this.mana = mana;
          this.strength = strength;
          this.agility = agility;
          this.speed = speed;
        }`,
  ).getContent();
  html.img = HtmlService.createHtmlOutput(`img {width: 160px;}`).getContent();
  html.gamerUrl = gamerUrl;
  return html.getRawContent(); //: contentFile("uiAccess")
}
