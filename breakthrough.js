var breakthrough = function (e, time) {
  var username = e;
  var userData = allInvestors(e, null, time);
  var arrD = [userData.title].join("").split(" ");
  var userKey = randomSubstance(0, 1, null, arrD, time).myNewArr;
  const data = needUtility(username || userKey, arrD, time)[0];
  if (!username) {
    var percent = Math.floor(
      Math.random() * Math.floor(data.playlistArr.length),
    );
  } else {
    var percent = username;
  }
  var list = [];
  if (0 < percent) {
    for (var i = 0; 0 < percent; i++) {
      var result =
        JSON.stringify(i) * percent - Math.floor(JSON.stringify(i) * percent);
      if (result === 0) {
        list.push([
          JSON.stringify(i) * percent +
            " " +
            "out of" +
            " " +
            JSON.stringify(i) +
            " " +
            "odds",
        ]);
        if (JSON.stringify(i) >= 100) {
          break;
        }
      }
    }
  } else {
    list.push([percent]).toString();
  }
  var breakUrl =
    "https://script.google.com/macros/s/AKfycbzhrxdXzM08AAwA5ualRXdnDtV6C_xQ7bcq4v6H0HNdBqPr2C8A1URyWN0FLLccQuoA/exec?func=dtlsCalculator&args=";
  var today = new Date();
  // var rule = today.toDateString() + " - " + today.toTimeString()
  var html = HtmlService.createTemplate(`
    <!DOCTYPE html>
      <html id="test">
        <head>
          <base target="_self"></base>
        </head>
        <body>
        <div class="row">
        <div class="col s10 m12 l12">
          <a href="https://flewis21.github.io/Don-time-Life-Services/" target="_top"><span><h1 class="z-depth-5 toolbar_icon toolbar_iconHover btn-large receipt">Don'time Life Services!</h1></span></a>
</div></div>
        <div class="row">
        <div class="col s10 card-panel l12 m12 push-s1">
        <div class="video-container grey darken-4 z-depth-5">
        <div class="col s12 l12 m12" id="player1">
          <?!= seoCapital(myVideo) ?></div>
        </div></div></div>
        <div class="row">
        <div class="col s10 card-panel black l12 m12 push-s1">
        <div class="container black darken-4 z-depth-5">
          <span><input placeholder="Event Horizon..." class="flow-text menu-img z-depth-5 card-panel black scale-transition scale-out scale-in receipt btn-large" id="username" type="search" /></span>
          </div></div></div>

          <!-- Compiled and minified JavaScript -->
          <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
        <script>document.getElementById('username').addEventListener('change', <?!= topScript ?>)</script>
          <input type="hidden" value="<?= getUrl(ScriptApp) ?>" id="url" />
        </body>
    </html>`);
  html.list = list
    .map(function (r) {
      return (
        "<li>" +
        `<a class="waves-effect waves-light btn" href="${breakUrl}${r[0]}" target="_blank">` +
        r[0] +
        "</a>" +
        "</li>"
      );
    })
    .join("");
  // html.rule = rule;
  html.breakUrl = breakUrl;
  html.myVideo = percent;
  html.topScript = function () {
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
      // (function  () {console.log('Input Value:', textInput.value);}, 5000)();
      if (typeof url === "undefined") {
        var urlData = document.getElementById("url").value;
        var url = urlData.toString();
      }
      var uname = document.getElementById("username").value;
      var linkFollow = document.createElement("a");
      linkFollow.href =
        url + "?func=dtlsCalculator&args=" + encodeURIComponent(uname);
      linkFollow.id = "linkFOLLOW";
      linkFollow.target = "popup";
      document.body.appendChild(linkFollow);
      document.getElementById("linkFOLLOW").click();
      document.getElementById("username").value = "";
    })();
  };
  return html.evaluate().getContent();
}; //:contentFile('uiAccess');

var rndChoice = function (game) {
  var trial = [];
  var judge = 0;
  var coinHead = 0;
  var coinTail = 0;
  var infinitum = [
    10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 23, 24, 25, 26, 27,
    28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46,
    47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65,
    66, 67, 68, 69,
  ];
  console.log(typeof [game]);
  if (!game) {
    var game = 5;
  }
  // else {
  //   infinitum = infinitum.split(" ")
  //   return infinitum.map((fin) => {
  //   var penny = Math.floor(Math.random() * Math.floor(fin))
  //   while (coinTail < penny) {
  //     trial.push({
  //       tails: coinTail
  //     })
  //     coinTail++
  //     penny = Math.floor(Math.random() * Math.floor(fin))
  //   }
  //   return JSON.stringify(trial)
  // })
  // console.log(typeof [infinitum] + " " + infinitum)
  // }
  var coin;
  var penny;
  var halfpenny;
  // infinitum.map((fin) => {
  coin = infinitum[Math.floor(Math.random() * Math.floor(infinitum.length))];
  console.log(coin);
  penny = Math.floor(Math.random() * Math.floor(coin));
  console.log(penny);
  halfpenny = rndWinner(penny + " " + coin);
  console.log(halfpenny);
  if (halfpenny["heads"] !== coin) {
    trial.push({
      tails: Math.floor((penny + coin) / 2),
    });
    coinTail++;
  }
  // if (penny === coin)
  else {
    trial.push({
      heads: Math.floor((penny + coin) / 2),
    });
    coinHead++;
  }
  // else {
  //   trial.push({
  // heads: donza})
  // }
  // return
  console.log(trial);
  console.log("coinTail !== coinHead: " + coinTail !== coinHead);
  while (coinTail !== coinHead) {
    coin = infinitum[Math.floor(Math.random() * Math.floor(infinitum.length))];
    console.log(coin);
    penny = Math.floor(Math.random() * Math.floor(coin));
    console.log(penny);
    if (halfpenny["heads"] === coin) {
      trial.push({
        heads: Math.floor((penny + coin) / 2),
      });
      coinHead++;
      if (coinHead == game) {
        break;
      }
    }
    // if (penny !== coin)
    else {
      trial.push({
        tails: Math.floor((penny + coin) / 2),
      });
      coinTail++;
      if (coinTail == game) {
        break;
      }
    }
    // else {
    //       trial.push({
    //       heads: donza
    //     })
    //     }
  }
  // })
  // return console.log(trial[0]['tails'])
  //     return console.log(coinTail !== coinHead)
  // return console.log(covertArr(trial,0,0))
  var cArr = covertArr(trial, 0, 0);
  var form = FormApp.create("Coin Trial").setDescription(
    trial.length + " Tosses\n" + cArr,
  );
  var formUrl = form.getPublishedUrl();
  var tailEnd = 0;
  var endTail = [];
  var headStart = 0;
  var startHead = [];
  trial.map((seo) => {
    for (var key in seo) {
      if (key === "heads") {
        //   form.addSectionHeaderItem().setTitle(randomSubstance(0,1,[key]).myNewArr + "  " + seo["heads"]).setHelpText(headStart++ + "  tosses")
        // } else {
        //   form.addSectionHeaderItem().setTitle(randomSubstance(0,1,[key]).myNewArr + " " + seo["tails"]).setHelpText(tailEnd++ + "  tosses")
        if (headStart === 1) {
          // form.addSectionHeaderItem().setTitle(key + "  " + seo["heads"]).setHelpText(headStart++ + "  toss")
          form
            .addSectionHeaderItem()
            .setTitle(key + "  " + seo["heads"])
            .setHelpText(
              "Penny " +
                Math.floor(Math.random() * Math.floor(seo["heads"])) +
                "  for your thoughts",
            );
        } else if (headStart < 1 || headStart > 1) {
          // form.addSectionHeaderItem().setTitle(key + "  " + seo["heads"]).setHelpText(headStart++ + "  tosses")
          form
            .addSectionHeaderItem()
            .setTitle(key + "  " + seo["heads"])
            .setHelpText(
              "Penny " +
                Math.floor(Math.random() * Math.floor(seo["heads"])) +
                "  for your thoughts",
            );
        }
        startHead.push(seo["heads"]);
      } else {
        if (tailEnd === 1) {
          // form.addSectionHeaderItem().setTitle(key + " " + seo["tails"]).setHelpText(tailEnd++ + "  toss")
          form
            .addSectionHeaderItem()
            .setTitle(key + "  " + seo["tails"])
            .setHelpText(
              "Penny " +
                Math.floor(Math.random() * Math.floor(seo["tails"])) +
                "  for your thoughts",
            );
        } else if (tailEnd < 1 || tailEnd > 1) {
          // form.addSectionHeaderItem().setTitle(key + " " + seo["tails"]).setHelpText(tailEnd++ + "  tosses")
          form
            .addSectionHeaderItem()
            .setTitle(key + "  " + seo["tails"])
            .setHelpText(
              "Penny " +
                Math.floor(Math.random() * Math.floor(seo["tails"])) +
                "  for your thoughts",
            );
        }
        endTail.push(seo["tails"]);
      }
    }
  });
  if (endTail.length >= 2) {
    form
      .addSectionHeaderItem()
      .setTitle(
        "Moving Tails  " +
          Math.floor(endTail.reduce((a, b) => a + b, 0) / endTail.length),
      )
      .setHelpText(
        "Penny " +
          Math.floor(
            Math.random() *
              Math.floor(endTail.reduce((a, b) => a + b, 0) / endTail.length),
          ) +
          "  for your thoughts",
      );
  }
  if (startHead.length >= 2) {
    form
      .addSectionHeaderItem()
      .setTitle(
        "Moving Heads  " +
          Math.floor(startHead.reduce((a, b) => a + b, 0) / startHead.length),
      )
      .setHelpText(
        "Penny " +
          Math.floor(
            Math.random() *
              Math.floor(
                startHead.reduce((a, b) => a + b, 0) / startHead.length,
              ),
          ) +
          "  for your thoughts",
      );
  }
  return formUrl;
};

var rndCoin = function () {
  // if ([0,1][Math.floor(Math.random() * (Math.floor([0,1].length)))] === 0)
  var trial = [];
  var judge = 0;
  var coinHead = 0;
  var coinTail = 0;
  var coin = [0, 1][Math.floor(Math.random() * Math.floor([0, 1].length))];
  if (coin === 1) {
    coinHead++;
    trial.push({
      heads: coin,
    });
  } else {
    coinTail++;
    trial.push({
      tails: coin,
    });
  }
  while (coinHead !== coinTail) {
    judge++;
    coin = [0, 1][Math.floor(Math.random() * Math.floor([0, 1].length))];
    if (coin === 1) {
      coinHead++;
      trial.push({
        heads: coin,
      });
    } else {
      coinTail++;
      trial.push({
        tails: coin,
      });
    }
    if (
      (trial[0]["heads"] && trial[judge]["tails"]) ||
      (trial[0]["tails"] && trial[judge]["heads"])
    ) {
      break;
    } else {
      for (var i = judge, l = trial.length; i < l; i++) {
        console.log(JSON.stringify(trial[judge]));
      }
    }
  }
  var form = FormApp.create("Coin Toss").setDescription(
    trial.length + " Tosses",
  );
  var formUrl = form.getPublishedUrl();
  trial.map((seo) => {
    for (var key in seo) {
      if (key === "heads") {
        form
          .addParagraphTextItem()
          .setTitle(randomSubstance(0, 1, [key]).myNewArr);
      } else {
        form
          .addParagraphTextItem()
          .setTitle(randomSubstance(0, 1, [key]).myNewArr);
      }
    }
  });
  return formUrl;
};

var rndControl = function (infinitum) {
  var trial = [];
  var judge = 0;
  var coinHead = 0;
  var coinTail = 0;
  console.log(typeof [infinitum]);
  if (!infinitum) {
    var infinitum = [
      10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 23, 24, 25, 26,
      27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44,
      45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62,
      63, 64, 65, 66, 67, 68, 69,
    ];
    console.log(
      "called function: " +
        arguments.callee.name +
        "\nvar infinitum = " +
        infinitum,
    );
  } else {
    console.log(
      "called function: " +
        arguments.callee.name +
        "\nvar infinitum = " +
        infinitum,
    );
    infinitum = infinitum.split(" ");
    //   return infinitum.map((fin) => {
    //   var penny = Math.floor(Math.random() * Math.floor(fin))
    //   while (coinTail < penny) {
    //     trial.push({
    //       tails: coinTail
    //     })
    //     coinTail++
    //     penny = Math.floor(Math.random() * Math.floor(fin))
    //   }
    //   return JSON.stringify(trial)
    // })
    console.log(typeof [infinitum] + " " + infinitum);
  }
  var coin;
  var penny;
  infinitum.map((fin) => {
    coin = infinitum[Math.floor(Math.random() * Math.floor(infinitum.length))];
    penny = Math.floor(Math.random() * Math.floor(coin));
    if (penny !== coin) {
      trial.push({
        tails: fin,
      });
      coinTail++;
    }
    // if (penny === coin)
    else {
      trial.push({
        heads: coin,
      });
      coinHead++;
    }
    // else {
    //   trial.push({
    // heads: donza})
    // }
    // return
    while (coinTail !== coinHead) {
      coin =
        infinitum[Math.floor(Math.random() * Math.floor(infinitum.length))];
      penny = Math.floor(Math.random() * Math.floor(coin));
      if (penny === coin) {
        trial.push({
          heads: coin,
        });
        coinHead++;
        if (fin < coinHead) {
          return;
        }
      }
      // if (penny !== coin)
      else {
        trial.push({
          tails: fin,
        });
        coinTail++;
        if (fin < coinTail) {
          return;
        }
      }
      // else {
      //       trial.push({
      //       heads: donza
      //     })
      //     }
    }
  });
  //     return console.log(trial)
  //     return console.log(coinTail !== coinHead)
  // return console.log(covertArr(trial,0,0))
  // console.log("Delete this comment");
  // return trial
  var form = FormApp.create("Coin Trial").setDescription(
    trial.length + " Tosses",
  );
  var formUrl = form.getPublishedUrl();
  var tailEnd = 0;
  var headStart = 0;
  trial.map((seo) => {
    for (var key in seo) {
      if (key === "heads") {
        //   form.addSectionHeaderItem().setTitle(randomSubstance(0,1,[key]).myNewArr + "  " + seo["heads"]).setHelpText(headStart++ + "  tosses")
        // } else {
        //   form.addSectionHeaderItem().setTitle(randomSubstance(0,1,[key]).myNewArr + " " + seo["tails"]).setHelpText(tailEnd++ + "  tosses")
        if (headStart === 1) {
          // form.addSectionHeaderItem().setTitle(key + "  " + seo["heads"]).setHelpText(headStart++ + "  toss")
          // form.addParagraphTextItem().setTitle(key + "  " + seo["heads"]).setHelpText(Math.floor(Math.random() * Math.floor(seo["heads"]))).createResponse("Penny for your thoughts");
          var upscale = Math.floor(Math.random() * Math.floor(seo["heads"]));
          // form.addParagraphTextItem().setTitle(key + "  " + seo["heads"])
          form
            .addScaleItem()
            .setTitle(upscale)
            .setBounds(1, 5)
            .setLabels(key, seo["heads"]);
        } else if (headStart < 1 || headStart > 1) {
          // form.addSectionHeaderItem().setTitle(key + "  " + seo["heads"]).setHelpText(headStart++ + "  tosses")
          // form.addParagraphTextItem().setTitle(key + "  " + seo["heads"]).setHelpText(Math.floor(Math.random() * Math.floor(seo["heads"]))).createResponse("Penny for your thoughts")
          var upscale = Math.floor(Math.random() * Math.floor(seo["heads"]));
          // form.addParagraphTextItem().setTitle(key + "  " + seo["heads"])
          form
            .addScaleItem()
            .setTitle(upscale)
            .setBounds(1, 5)
            .setLabels(key, seo["heads"]);
        }
      } else {
        if (tailEnd === 1) {
          // form.addSectionHeaderItem().setTitle(key + " " + seo["tails"]).setHelpText(tailEnd++ + "  toss")
          // form.addParagraphTextItem().setTitle(key + "  " + seo["tails"]).setHelpText(Math.floor(Math.random() * Math.floor(seo["tails"]))).createResponse("Penny for your thoughts")
          var upscale = Math.floor(Math.random() * Math.floor(seo["tails"]));
          // form.addParagraphTextItem().setTitle(key + "  " + seo["tails"])
          form
            .addScaleItem()
            .setTitle(upscale)
            .setBounds(1, 5)
            .setLabels(key, seo["tails"]);
        } else if (tailEnd < 1 || tailEnd > 1) {
          // form.addSectionHeaderItem().setTitle(key + " " + seo["tails"]).setHelpText(tailEnd++ + "  tosses")
          // form.addParagraphTextItem().setTitle(key + "  " + seo["tails"]).setHelpText(Math.floor(Math.random() * Math.floor(seo["tails"]))).createResponse("Penny for your thoughts")
          var upscale = Math.floor(Math.random() * Math.floor(seo["tails"]));
          // form.addParagraphTextItem().setTitle(key + "  " + seo["tails"])
          form
            .addScaleItem()
            .setTitle(upscale)
            .setBounds(1, 5)
            .setLabels(key, seo["tails"]);
        }
      }
      headStart++;
      tailEnd++;
    }
    headStart++;
    tailEnd++;
  });
  return formUrl;
};

var rndDice = function () {
  // if ([0,1,2,3,4,5][Math.floor(Math.random() * (Math.floor([0,1].length)))] === 0)
  var trial = [];
  var judge = 0;
  var snakeEyes = 0;
  var deuces = 0;
  var tres = 0;
  var fours = 0;
  var fives = 0;
  var sixes = 0;
  var dice = [0, 1, 2, 3, 4, 5][
    Math.floor(Math.random() * Math.floor([0, 1, 2, 3, 4, 5].length))
  ];
  if (dice === 0) {
    snakeEyes++;
    trial.push({
      snakeEyes: dice,
    });
  } else if (dice === 1) {
    deuces++;
    trial.push({
      deuces: dice,
    });
  } else if (dice === 2) {
    tres++;
    trial.push({
      tres: dice,
    });
  } else if (dice === 3) {
    fours++;
    trial.push({
      fours: dice,
    });
  } else if (dice === 4) {
    fives++;
    trial.push({
      fives: dice,
    });
  } else {
    sixes++;
    trial.push({
      sixes: dice,
    });
  }

  // if (dice === 0) {
  // snakeEye.push(dice)}
  // else if (dice === 1) {
  // deuces.push(dice)}
  // else if (dice === 2) {
  // tre.push(dice)}
  // else if (dice === 3) {
  // four.push(dice)}
  // else if (dice === 4) {
  // five.push(dice)}
  // else {
  // six.push(dice)}
  while (
    snakeEyes !== deuces ||
    snakeEyes !== tres ||
    snakeEyes !== fours ||
    snakeEyes !== fives ||
    (snakeEyes !== sixes && deuces !== snakeEyes) ||
    deuces !== tres ||
    deuces !== fours ||
    deuces !== fives ||
    (deuces !== sixes && tres !== snakeEyes) ||
    tres !== deuces ||
    tres !== fours ||
    tres !== fives ||
    (tres !== sixes && fours !== snakeEyes) ||
    fours !== deuces ||
    fours !== tres ||
    fours !== fives ||
    (fours !== sixes && fives !== snakeEyes) ||
    fives !== deuces ||
    fives !== tres ||
    fives !== fours ||
    (fives !== sixes && sixes !== snakeEyes) ||
    sixes !== deuces ||
    sixes !== tres ||
    sixes !== fours ||
    sixes !== fives
  ) {
    judge++;
    var dice = [0, 1, 2, 3, 4, 5][
      Math.floor(Math.random() * Math.floor([0, 1, 2, 3, 4, 5].length))
    ];
    if (dice === 0) {
      snakeEyes++;
      trial.push({
        snakeEyes: dice,
      });
    } else if (dice === 1) {
      deuces++;
      trial.push({
        deuces: dice,
      });
    } else if (dice === 2) {
      tres++;
      trial.push({
        tres: dice,
      });
    } else if (dice === 3) {
      fours++;
      trial.push({
        fours: dice,
      });
    } else if (dice === 4) {
      fives++;
      trial.push({
        fives: dice,
      });
    } else {
      sixes++;
      trial.push({
        sixes: dice,
      });
    }

    // dice = [0,1][Math.floor(Math.random() * (Math.floor([0,1].length)))] * 3
    // if (dice === 0) {
    // snakeEye.push(dice)}
    // else if (dice === 1) {
    // deuce.push(dice)}
    // else if (dice === 2) {
    // tre.push(dice)}
    // else if (dice === 3) {
    // four.push(dice)}
    // else if (dice === 4) {
    // five.push(dice)}
    // else {
    // six.push(dice)}
    //   console.log(snakeEye.length + " " + deuce.length + " " + tre.length + " " + four.length + " " + five.length + " " + six.length)
    // }
    // var trial = [].concat(snakeEye.length + " " + deuce.length + " " + tre.length + " " + four.length + " " + five.length + " " + six.length)
    // snakeEye.length
    if (
      (trial[0]["snakeEyes"] &&
        trial[1]["deuces"] &&
        trial[2]["tres"] &&
        trial[4]["fours"] &&
        trial[5]["fives"] &&
        trial[judge]["sixes"]) ||
      (trial[0]["sixes"] &&
        trial[1]["deuces"] &&
        trial[2]["tres"] &&
        trial[4]["fours"] &&
        trial[5]["fives"] &&
        trial[judge]["snakeEyes"])
    ) {
      break;
    } else {
      for (var i = judge, l = trial.length; i < l; i++) {
        console.log(JSON.stringify(trial[judge]));
      }
    }
  }
  var form = FormApp.create("Dice Roll").setDescription(
    trial.length + " Rolls",
  );
  var formUrl = form.getPublishedUrl();
  trial.map((seo) => {
    for (var key in seo) {
      form
        .addSectionHeaderItem()
        .setTitle(randomSubstance(0, 1, [key]).myNewArr);
    }
  });
  return formUrl;
};

var rndTrial = function (infinitum) {
  // if ([0,1][Math.floor(Math.random() * (Math.floor([0,1].length)))] === 0)
  var trial = [];
  var judge = 0;
  var coinHead = 0;
  var coinTail = 0;
  console.log(typeof [infinitum]);
  if (!infinitum) {
    var infinitum = [0, 1];
  } else {
    infinitum = infinitum.split(" ");
    console.log(typeof [infinitum] + " " + infinitum);
  }
  var coin;
  infinitum.map((fin) => {
    // coin = [0,1][Math.floor(Math.random() * (Math.floor([0,1].length)))]
    coin = infinitum[Math.floor(Math.random() * Math.floor(infinitum.length))];
    // if (coin === 1) {
    //   coinHead++
    // trial.push({
    //   heads: fin})}
    // else {
    //   coinTail++
    // trial.push({
    //   tails: fin})}
    if (coin === fin) {
      coinHead++;
      trial.push({
        heads: fin,
      });
    } else {
      coinTail++;
      trial.push({
        tails: fin,
      });
    }
    while (coinHead !== coinTail) {
      judge++;
      // coin = [0,1][Math.floor(Math.random() * (Math.floor([0,1].length)))]
      coin =
        infinitum[Math.floor(Math.random() * Math.floor(infinitum.length))];
      // if (coin === 1) {
      //   coinHead++
      // trial.push({
      //   heads: fin})}
      // else {
      //   coinTail++
      // trial.push({
      //   tails: fin})}
      if (coin === fin) {
        coinHead++;
        trial.push({
          heads: fin,
        });
      } else {
        coinTail++;
        trial.push({
          tails: fin,
        });
      }
      // if (trial[0]["heads"] && trial[judge]["tails"] || trial[0]["tails"] && trial[judge]["heads"]){
      // break}
      // else {
      // for (var i=judge,l=trial.length;i<l;i++) {
      //   console.log(JSON.stringify(trial[judge])) }}
    }
  });
  console.log(trial);
  // console.log("Delete this comment");
  // return trial
  var form = FormApp.create("Coin Trial").setDescription(
    trial.length + " Tosses",
  );
  var formUrl = form.getPublishedUrl();
  var tailEnd = 0;
  var headStart = 0;
  trial.map((seo) => {
    for (var key in seo) {
      if (key === "heads") {
        //   form.addSectionHeaderItem().setTitle(randomSubstance(0,1,[key]).myNewArr + "  " + seo["heads"]).setHelpText(headStart++ + "  tosses")
        // } else {
        //   form.addSectionHeaderItem().setTitle(randomSubstance(0,1,[key]).myNewArr + " " + seo["tails"]).setHelpText(tailEnd++ + "  tosses")
        form
          .addSectionHeaderItem()
          .setTitle(key + "  " + seo["heads"])
          .setHelpText(headStart++ + "  tosses");
      } else {
        form
          .addSectionHeaderItem()
          .setTitle(key + " " + seo["tails"])
          .setHelpText(tailEnd++ + "  tosses");
      }
    }
  });
  return formUrl;
};

var rndWinner = function (infinitum) {
  // if ([0,1][Math.floor(Math.random() * (Math.floor([0,1].length)))] === 0)
  var trial = [];
  var judge = 0;
  var coinHead = 0;
  var coinTail = 0;
  if (!infinitum) {
    // var infinitum = [0,1]
    var coin = [0, 1][Math.floor(Math.random() * Math.floor([0, 1].length))];
    console.log("starting coin " + coin);
    var startingCoin = coin;
  } else {
    infinitum = infinitum.split(" ");
    var coin =
      infinitum[Math.floor(Math.random() * Math.floor(infinitum.length))];
    console.log(typeof [infinitum] + " " + "\nStarting coin " + coin);
    var startingCoin = coin;
  }
  // var coin = [0,1][Math.floor(Math.random() * (Math.floor([0,1].length)))]
  // if (coin === 1 || coin === infinitum[1]) {
  if (coin === 1 || coin !== infinitum[0]) {
    coinHead++;
    trial.push({
      heads: coin,
    });
  }
  // console.log(trial.push({
  //   heads: coin}))}
  else {
    coinTail++;
    trial.push({
      tails: coin,
    });
  }
  // console.log(trial.push({
  //   tails: coin}))}
  while (coinHead !== coinTail) {
    judge++;
    if (judge > 10) {
      break;
    }
    if (!infinitum) {
      // var infinitum = [0,1]
      coin = [0, 1][Math.floor(Math.random() * Math.floor([0, 1].length))];
      console.log("Starting Coin " + startingCoin + "\nCurrent coin " + coin);
    } else {
      // infinitum = infinitum.split(" ")
      coin =
        infinitum[Math.floor(Math.random() * Math.floor(infinitum.length))];
      console.log(
        typeof [infinitum] +
          " " +
          "\nStarting coin " +
          startingCoin +
          "\nCurrent coin " +
          coin,
      );
    }
    // if (coin === 1 || coin === infinitum[1]) {
    if (coin === 1 || coin !== infinitum[0]) {
      coinHead++;
      trial.push({
        heads: coin,
      });
    }
    // console.log(trial.push({
    //   heads: coin}))}
    else {
      coinTail++;
      // console.log(trial.push({
      //   tails: coin}))}
      trial.push({
        tails: coin,
      });
    }
    // if (trial[0]["heads"] && trial[judge]["tails"] || trial[0]["tails"] && trial[judge]["heads"]){
    // break}
    // else {
    //  for (var i=judge,l=trial.length;i<l;i++) {
    //   console.log(JSON.stringify(trial[judge])) }}
  }
  console.log("Delete this comment");
  // return trial
  var form = FormApp.create("Coin Toss").setDescription(
    trial.length + " Tosses \n" + JSON.stringify(trial),
  );
  var formUrl = form.getPublishedUrl();
  var tailEnd = 0;
  var endTail = [];
  var headStart = 0;
  var startHead = [];
  trial.map((seo) => {
    for (var key in seo) {
      if (key === "heads") {
        console.log('seo["heads"] is a(n): ' + typeof seo["heads"]);
        //   form.addSectionHeaderItem().setTitle(randomSubstance(0,1,[key]).myNewArr + "  " + seo["heads"]).setHelpText(headStart++ + "  tosses")
        // } else {
        //   form.addSectionHeaderItem().setTitle(randomSubstance(0,1,[key]).myNewArr + " " + seo["tails"]).setHelpText(tailEnd++ + "  tosses")
        if (headStart === 1 && typeof seo["heads"] !== "string") {
          // form.addSectionHeaderItem().setTitle(key + "  " + seo["heads"]).setHelpText(headStart++ + "  toss")
          form
            .addSectionHeaderItem()
            .setTitle(key + "  " + seo["heads"])
            .setHelpText(
              "Penny " +
                Math.floor(Math.random() * Math.floor(seo["heads"])) +
                "  for your thoughts",
            );
        } else if (
          (headStart < 1 && typeof seo["heads"] !== "string") ||
          (headStart > 1 && typeof seo["heads"] !== "string")
        ) {
          // form.addSectionHeaderItem().setTitle(key + "  " + seo["heads"]).setHelpText(headStart++ + "  tosses")
          form
            .addSectionHeaderItem()
            .setTitle(key + "  " + seo["heads"])
            .setHelpText(
              "Penny " +
                Math.floor(Math.random() * Math.floor(seo["heads"])) +
                "  for your thoughts",
            );
        }
        startHead.push(seo["heads"]);
      } else {
        console.log('seo["tails"] is a(n): ' + typeof seo["tails"]);
        if (tailEnd === 1 && typeof seo["tails"] !== "string") {
          // form.addSectionHeaderItem().setTitle(key + " " + seo["tails"]).setHelpText(tailEnd++ + "  toss")
          form
            .addSectionHeaderItem()
            .setTitle(key + "  " + seo["tails"])
            .setHelpText(
              "Penny " +
                Math.floor(Math.random() * Math.floor(seo["tails"])) +
                "  for your thoughts",
            );
        } else if (
          (tailEnd < 1 && typeof seo["tails"] !== "string") ||
          (tailEnd > 1 && typeof seo["tails"] !== "string")
        ) {
          // form.addSectionHeaderItem().setTitle(key + " " + seo["tails"]).setHelpText(tailEnd++ + "  tosses")
          form
            .addSectionHeaderItem()
            .setTitle(key + "  " + seo["tails"])
            .setHelpText(
              "Penny " +
                Math.floor(Math.random() * Math.floor(seo["tails"])) +
                "  for your thoughts",
            );
        }
        endTail.push(seo["tails"]);
      }
    }
  });
  if (endTail.length >= 2) {
    form
      .addSectionHeaderItem()
      .setTitle(
        "Moving Tails  " +
          Math.floor(endTail.reduce((a, b) => a + b, 0) / endTail.length),
      )
      .setHelpText(
        "Penny " +
          Math.floor(
            Math.random() *
              Math.floor(endTail.reduce((a, b) => a + b, 0) / endTail.length),
          ) +
          "  for your thoughts",
      );
  }
  if (startHead.length >= 2) {
    form
      .addSectionHeaderItem()
      .setTitle(
        "Moving Heads  " +
          Math.floor(startHead.reduce((a, b) => a + b, 0) / startHead.length),
      )
      .setHelpText(
        "Penny " +
          Math.floor(
            Math.random() *
              Math.floor(
                startHead.reduce((a, b) => a + b, 0) / startHead.length,
              ),
          ) +
          "  for your thoughts",
      );
  }
  return formUrl;
};
