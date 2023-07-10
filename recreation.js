function youTube(e) {
  var usr = e;
  if (!usr) {
    var username = [`cornea transplant usa atlanta georgia kidney`]
      .toString()
      .split(" ")[
      Math.floor(
        Math.random() *
          Math.floor(
            [`cornea transplant US Atlanta GA`].toString().split(" ").length,
          ),
      )
    ];
  } else {
    var username = usr;
  }
  // var username = e.parameter["uname"] || `cornea transplant US, Atlanta, GA`;
  // const uniqueVid = needPastTime(username);
  // const randomKey = Math.floor(Math.random() * (Math.floor(uniqueVid.length)))// Math.floor(Math.random());
  // const videoPlaylist = covObjects(uniqueVid, ["youtubeID"]);
  // const uniqueKey = [videoPlaylist].entries().next().value;
  // const randomCo = uniqueKey[1][randomKey];
  // const randomVideo = Utilities.jsonStringify(randomCo["youtubeID"]);
  const content = HtmlService.createTemplate(`
    <!DOCTYPE html>
      <html lang="en" id="test">
        <head>
          <base target="_top  "></base>
        </head>
        <body class="blue" id="template">
            <label for="hubMain">Main Page</label><a href="https://flewis21.github.io/Don-time-Life-Services/" target="_top"><span><h1 class="z-depth-5 toolbar_icon toolbar_iconHover scale-transition scale-out scale-in btn-large receipt" id="hubMain">Don'time Life Services!</h1></span></a>

          <div>
            <ul class="table-body menu-img z-depth-5">

            </ul>

          </div>
          <div><label for="reload01">Search Bing</label><a href="https://www.bing.com/search?q=${encodeURIComponent(
            username,
          )}+site%3Aclubhouse.com&PC=U316&FORM=CHROMN" target="_blank"><h1 class="blue z-depth-5 toolbar_icon toolbar_iconHover scale-transition scale-out scale-in btn-large receipt" id="reload01"><?!= myTitle ?></h1></a></div>
          <div class="row">
          <div class="col s8">
          <span><input placeholder="About me?..." class="menu-img z-depth-5 card-panel black scale-transition scale-out scale-in receipt btn-large" id="username" type="search" /></span></div></div>
          <div class="row">
          <div class="col s8">
          <div class="menu-img valign-wrapper grey darken-4 z-depth-5 scale-transition scale-out scale-in receipt">
          <div class="col s12">
          <div id="player1"><?!= dtls(myVideo) ?></div>
          </div></div></div></div>
          <div class="agenda z-depth-5 pulse btn-large card-panel blue scale-out scale-in receipt">
            <input class="datepicker menu-img z-depth-5 card-panel red scale-transition receipt toolbar toolbar_icon toolbar_iconHover scale-out scale-in" id="prefDate" type="text" placeholder="Book a date"/></div>
            
          <div class="agenda z-depth-5 pulse btn-large card-panel blue scale-out scale-in receipt">
            <input class="timepicker menu-img z-depth-5 card-panel green scale-transition receipt toolbar toolbar_icon toolbar_iconHover scale-out scale-in" id="prefTime" type="text" placeholder="Book a time"/></div>
        
          <!-- Compiled and minified JavaScript -->
          <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
          <script>document.getElementById('username').addEventListener('change', <?!= topScript ?>)</script>
          <script>document.querySelector("div").setAttribute("style", "color: blue; clear: both; text-align: center;");</script>
          <script>document.querySelector("body").setAttribute("style", "background-color: amber;background: 282828;");</script>
          <script>document.querySelector("iframe").setAttribute("style", "color: blue; clear: both; text-align: center;");</script>
          <input type="hidden" value="<?= getUrl(ScriptApp) ?>" id="url" />
        </body>
      </html>`);
  content.myVideo = username;
  content.myTitle = username;
  content.topScript = function () {
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
      // (function  () {// console.log('Input Value:', textInput.value);}, 5000)();
      if (typeof url === "undefined") {
        var urlData = document.getElementById("url").value;
        var url = urlData.toString();
      }
      var uname = document.getElementById("username").value;
      var linkFollow = document.createElement("a");
      linkFollow.href = url + "?func=youTube" + "&args=" + uname;
      linkFollow.id = "linkFOLLOW";
      linkFollow.target = "_top";
      document.body.appendChild(linkFollow);
      document.getElementById("linkFOLLOW").click();
      document.getElementById("username").value = "";
    })();
  };
  content.gamer = getUrl(ScriptApp);
  content.email = function () {
    var emails = validate();
    var emailsCount = validate().toString().split(",").length;
    var randomEmail = emails[Math.floor(Math.random() * emailsCount)];
    return randomEmail;
  };
  content.appJs = function () {
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
  };
  return content.evaluate().getContent();
}
