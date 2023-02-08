var breakthrough = function (e) {
  console.log(JSON.stringify(e));
  var username =
    e.parameter["uname"] ||
    Math.floor(Math.random() * Math.floor(Utilities.jsonStringify(e).length));
  var percent = username;
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
            "odds!",
        ]);
        if (JSON.stringify(i) >= 100) {
          break;
        }
      }
    }
  } else {
    list.push([percent]);
  }
  // console.log(list)
  var htmlCss = styleHtml();
  var breakUrl = getUrl(ScriptApp);
  var today = new Date();
  // var rule = today.toDateString() + " - " + today.toTimeString()
  var html = HtmlService.createTemplate(`<!DOCTYPE html>
  <html id="test">
    <head>
      <base target="_self"></base>
      <?!= htmlStyle ?>
    </head>
    <body>
      <div class="toolbar toolbar_icon toolbar_iconHover scale-out receipt"><?!= rule() ?></div>
      <a href="https://flewis21.github.io/Don-time-Life-Services/" target="_top"><span><h1 class="z-depth-5 toolbar_icon toolbar_iconHover scale-transition scale-out scale-in btn-large receipt">Don'time Life Services!</h1></span></a>
    <div class="row">
    <div class="col s12 push-s1 push-m1 push-l2">
    <div class="container row valign-wrapper video-container grey darken-4 z-depth-5 scale-transition scale-out scale-in receipt">
    <div class="col s12" id="player1">
      <?!= videoPlayer(myVideo) ?></div>
    </div></div></div>
      <span><input placeholder="Event Horizon..." class="flow-text menu-img z-depth-5 card-panel black scale-transition scale-out scale-in receipt btn-large" id="username" type="search" /></span>
      <div class="dotted-border menu-img z-depth-5 btn-large card-panel amber z-depth-5">
        <ul class="receipt_company_info_receipt_footer receipt breakthrough amber menu-img btn-large video-container valign-wrapper darken-4 z-depth-5 scale-in"><p id='list' class="toolbar toolbar-icon toolbar_iconHover amber darken-4 receipt scale-out"><?!= list ?></p></ul>
      </div>
     <div class="agenda z-depth-5 pulse btn-large card-panel blue scale-out scale-in receipt">
      <input class="datepicker menu-img z-depth-5 card-panel red scale-transition receipt toolbar toolbar_icon toolbar_iconHover scale-out scale-in" id="prefDate" type="text" placeholder="Book a date"/></div>
      
     <div class="agenda z-depth-5 pulse btn-large card-panel blue scale-out scale-in receipt">
      <input class="timepicker menu-img z-depth-5 card-panel green scale-transition receipt toolbar toolbar_icon toolbar_iconHover scale-out scale-in" id="prefTime" type="text" placeholder="Book a time"/></div>

      <!-- Compiled and minified JavaScript -->
      <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
      <script>document.getElementById('username').addEventListener('change', <?!= topScript ?>)</script>
      <script>document.addEventListener("DOMContentLoaded", appJS);
        function appJS()
                  {
                      // mod the array
                      let timePicker = document.getElementById('prefTime');
                      M.Timepicker.init(timePicker, { defaultTime: "now" });
              google.script.run.withSuccessHandler(populateDates).runAll('boilerplate.busyDates', []);
              function populateDates(disabledDays) 
                                                  {
                  let datePicker = document.getElementById('prefDate');
                  M.Datepicker.init(datePicker, 
                                                { 
                      minDate: new Date(), setDefaultDate: true,
                      disableDayFn: 
                      function(day) 
                                                  {
                          return disabledDays.indexOf(day.valueOf()) > -1;
                                                  }
                                                });
                                                  };

                  }                    

      </script>
      <input type="hidden" value="<?= getUrl(ScriptApp) ?>" id="url" />
    </body>
</html>`);
  html.list = list
    .map(function (r) {
      return (
        "<li>" +
        `<a class="waves-effect waves-light btn" href="${breakUrl}?uname=${r[0]}" target="_blank">` +
        r[0] +
        "</a>" +
        "</li>"
      );
    })
    .join("");
  // html.rule = rule;
  html.breakUrl = breakUrl;
  html.htmlStyle = htmlCss;
  html.myVideo = percent;
  const idArray = needPastTime(percent);
  const vidIdObject = covObjects(idArray, ["youTubeId"]);
  const rdmVidId = Math.floor(Math.random() * Math.floor(vidIdObject.length));
  html.myTitle = vidIdObject[rdmVidId]["youTubeId"];
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
      // (function  ()
      // {
      // console.log('Input Value:', textInput.value);
      //  }, 5000)();
      if (typeof url === "undefined") {
        var urlData = document.getElementById("url").value;
        var url = urlData.toString();
      }
      var uname = document.getElementById("username").value;
      var linkHome = document.createElement("a");
      var linkFollow = document.createElement("a");
      linkHome.href = "https://flewis21.github.io/odd-chances/";
      linkFollow.href = url + "?uname=" + encodeURIComponent(uname);
      linkHome.id = "linkHOME";
      linkFollow.id = "linkFOLLOW";
      linkHome.target = "popup";
      linkFollow.target = "popup";
      document.body.appendChild(linkHome);
      document.body.appendChild(linkFollow);
      document.getElementById("linkHOME").click();
      document.getElementById("linkFOLLOW").click();
    })();
  };
  return renderTemplate(html.evaluate()).setTitle("Don'time Life Services"); //:contentFile('uiAccess');
};
