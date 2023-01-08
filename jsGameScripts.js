function jsGameScripts() {
  var gamerUrl = getUrl(ScriptApp) + "?default";
  html = contentFile("jsGame", {
    gamemanager:
      'let GameManager = {\n setGameStart: function(classType) {\n this.resetPlayer(classType);this.setPreFight();\n },\n resetPlayer: function(classType) {\n switch (classType) {\n case "Warrior":\n gamer = new Gamer(classType, 200, 0, 200, 100, 50);\n break;\n case "Rouge":\n gamer = new Gamer(classType, 100, 0, 100, 150, 200);\n break;\n case "Mage":\n gamer = new Gamer(classType, 80, 0, 50, 200, 50);\n break;\n case "Hunter":\n gamer = new Gamer(classType, 200, 0, 50, 200, 100);\n break;\n }\n let getInterface = document.querySelector(".interface");\n getInterface.innerHTML = \'<img src="" class="img-avatar"><div><h3>\' + classType + \'</h3><p>Health: \' + gamer.health + \'</p>\';\n },\n setPreFight: function() {\n }\n }\n ',
    gamer:
      "let gamer;\n var Gamer = function(classType, health, mana, strength, agility, speed) {\n this.classType = classType;\n this.health = health;\n this.mana = mana;\n this.strength = strength;\n this.agility = agility;\n this.speed = speed;\n }\n ",
    enemy:
      "let enemy;\n var Enemy = function(enemyType, health, mana, strength, agility, speed) {\n this.classType = enemyType;\n this.health = health;\n this.mana = mana;\n this.strength = strength;\n this.agility = agility;\n this.speed = speed;\n }\n ",
    img: "img {\n width: 160px;\n }",
    gamerUrl: gamerUrl,
  });
  return contentApp(html); //: contentFile("uiAccess")
}
