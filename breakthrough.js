var breakthrough = function (e) {
  console.log(JSON.stringify(e));
  var username = e.parameter["uname"] || 1;
  percent = username;
  var list = [];
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
  // console.log(list)
  var htmlCss = styleHtml();
  var breakUrl = getUrl(ScriptApp);
  var today = new Date();
  // var rule = today.toDateString() + " - " + today.toTimeString()
  var html = contentFile("oddChances", {
    list: list
      .map(function (r) {
        return "<li>" + r[0] + "</li>";
      })
      .join(""),
    // rule: rule,
    breakUrl: breakUrl,
    htmlStyle: htmlCss,
    topScript: function () {
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
        var linkFollow = document.createElement("a");
        linkFollow.href = url + "?default=odd&uname=" + uname;
        linkFollow.id = "linkFOLLOW";
        linkFollow.target = "_self";
        document.body.appendChild(linkFollow);
        document.getElementById("linkFOLLOW").click();
      })();
    },
  });
  return renderTemplate(contentApp("<?!= html ?>", { html: html })); //:contentFile('uiAccess');
};
