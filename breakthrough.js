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
  var form = FormApp.create("Coin Toss");
  var formUrl = form.getPublishedUrl();
  trial.map((seo) => {
    for (var key in seo) {
      if (key === "heads") {
        form.addSectionHeaderItem().setTitle(randomSubstance([key], 0, 1));
      } else {
        form.addSectionHeaderItem().setTitle(randomSubstance([key], 0, 1));
      }
    }
  });
  return seoCapital(formUrl);
};

var rndDice = function () {
  // if ([0,1,2,3,4,5][Math.floor(Math.random() * (Math.floor([0,1].length)))] === 0)
  var snakeEye = [];
  var deuce = [];
  var tre = [];
  var four = [];
  var five = [];
  var six = [];
  var dice = [0, 1][Math.floor(Math.random() * Math.floor([0, 1].length))] * 3;
  if (dice === 0) {
    snakeEye.push(dice);
  } else if (dice === 1) {
    deuce.push(dice);
  } else if (dice === 2) {
    tre.push(dice);
  } else if (dice === 3) {
    four.push(dice);
  } else if (dice === 4) {
    five.push(dice);
  } else {
    six.push(dice);
  }
  while (
    snakeEye.length !== deuce.length ||
    snakeEye.length !== tre.length ||
    snakeEye.length !== four.length ||
    snakeEye.length !== five.length ||
    snakeEye.length !== six.length
  ) {
    dice = [0, 1][Math.floor(Math.random() * Math.floor([0, 1].length))] * 3;
    if (dice === 0) {
      snakeEye.push(dice);
    } else if (dice === 1) {
      deuce.push(dice);
    } else if (dice === 2) {
      tre.push(dice);
    } else if (dice === 3) {
      four.push(dice);
    } else if (dice === 4) {
      five.push(dice);
    } else {
      six.push(dice);
    }
    console.log(
      snakeEye.length +
        " " +
        deuce.length +
        " " +
        tre.length +
        " " +
        four.length +
        " " +
        five.length +
        " " +
        six.length,
    );
  }
  var trial = [].concat(
    snakeEye.length +
      " " +
      deuce.length +
      " " +
      tre.length +
      " " +
      four.length +
      " " +
      five.length +
      " " +
      six.length,
  );
  snakeEye.length;
  var form = FormApp.create("Dice");
  var formUrl = form.getPublishedUrl();
  trial.map((seo) => {
    return form.addSectionHeaderItem().setTitle(randomSubstance([seo]));
  });
  return geneFrame(formUrl);
};

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
          <?!= dtlsMain(myVideo) ?></div>
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
