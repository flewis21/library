function authLogic(logic) {
  if (!logic) {
    let isValid = false;
    return isValid;
  }
  let isValid = true;
  return isValid;
}

// async function authPromise(promise)
// {let isValid = false;
// if (typeof promise === "undefined")
// {isValid = false
// console.log('promise === "undefined"')
// return isValid} else if (typeof promise !== "undefined" && promise === false)
// {isValid = false;
// console.log('promise !== "undefined" && promise === false')
// return isValid} else if (typeof promise !== "undefined" && promise === true)
// {isValid = true;
// console.log('promise !== "undefined" && promise === true')
// return isValid}
// return new Promise((reject, resolve) => {(isValid) => {console.log('this is ' + isValid)
// if (!isValid)
// {reject(isValid);
// console.log(typeof isValid)} else if (isValid)
// {resolve(isValid);
// console.log(typeof isValid)}}
// console.log(isValid)});
// return isValid;}

function email() {
  var emails = validateFiles();
  var emailsCount = validateFiles().toString().split(",").length;
  var randomEmail = emails[Math.floor(Math.random() * emailsCount)];
  return randomEmail;
}

function getBreakthrough(e) {
  const list = (e) => {
    return {
      list: function (e) {
        //const URL = new URL(window.location.href);
        // const getParam = URL.searchParams.get("uname");
        // var username = URL.searchParams.get("uname") || 1;
        var username = e.parameter["uname"] || 1;
        percent = username;
        var list = [];
        for (var i = 0; 0 < percent; i++) {
          var result =
            JSON.stringify(i) * percent -
            Math.floor(JSON.stringify(i) * percent);
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
        list
          .map(function (r) {
            return "<li>" + r[0] + "</li>";
          })
          .join("");
        return list;
      },
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
          // {console.log('Input Value:', textInput.value);}, 5000)();
          if (typeof url === "undefined") {
            var urlData = document.getElementById("url").value;
            var url = urlData.toString();
          }
          var uname = document.getElementById("username").value;
          var linkFollow = document.createElement("a");
          linkFollow.href = url + "?default=ssDCUO&uname=" + uname;
          linkFollow.id = "linkFOLLOW";
          document.body.appendChild(linkFollow);
          document.getElementById("linkFOLLOW").click();
        })();
      },
    };
  };
  list().list(e);
  list().topScript();
}

function carbon(email) {
  // Grant or Deny access
  const emailList = (() => {
    let isEditor = false;
    var files = DriveApp.getFiles();
    var fileNames = files.next().getName();
    var sharedFiles = [];
    try {
      for (var i = 0; i < fileNames.length; i++) {
        [fileNames].map((name) => {
          if (sharedFiles.indexOf(name) === -1) {
            sharedFiles.push(name);
          }
        });
        file = DriveApp.getFilesByName(sharedFiles).next();
      }
    } catch (e) {
      // Access denied.
      return false;
    }
    // Access granted.
    // List all users with Editor permission.
    file
      .getEditors()
      .map((editor) => {
        return editor.getEmail();
        console.log(editor.getEmail());
      })
      .forEach((editor) => {
        if (email.includes(editor)) {
          isEditor = true;
        }
      });
    return isEditor;
    console.log(isEditor);
  })();
  return emailList;
  console.log(emailList);
}

var congressLeg = function (e) {
  // var gamerUrl = (getUrl(ScriptApp) + "?default")()
  var congressInfoAPI = (function (e) {
    var congressAPIEmail = "f.lewis20.specialist19@outlook.com";
    var congressAPIID = "0c400392-606a-401e-a5b1-d74f8d6d9727";
    var congressAPIkey = {
      "X-API-Key": "d2E8liJwaPel5hHe3erhvLhneEj4zOWbAGKerZSv",
    };
    var congressEndpoint = "https://api.congress.gov/v3/bill";
    var data = urlDataSource(congressEndpoint, {
      method: "get",
      contentType: "application/json",
      headers: congressAPIkey,
      muteHttpExceptions: true,
    });
    spreadSheetCreate(
      "tableS",
      "usCongress",
      ["Last Name", "First Name", "Party", "Leadership Role"],
      testData(covertArr(data)),
      2,
    );
    // return data
    // var chart = Charts.newDashboardPanel().setDataTable(data)
    console.log(data);
  })();
  // var data = urlDataSource(congressUrl)
  var civicInfoAPI = (function () {
    var proPublicaAPI = {
      "X-API-Key": "xsthr17B8JL92bsGD5LChwptJHDQRM3f7mF4mVUL",
    };
    var proPublicaEndpoint = "https://api.propublica.org/congress/v1/";
    var civicDataURL =
      "https://api.propublica.org/congress/v1/116/senate/members.json";
    var data = urlDataSource(civicDataURL, {
      method: "get",
      contentType: "application/json",
      headers: proPublicaAPI,
      muteHttpExceptions: true,
    });
    var uSCongress = data.results[0].members;
    var dataTableBuilder = Charts.newDataTable()
      .addColumn(Charts.ColumnType.STRING, "Last Name")
      .addColumn(Charts.ColumnType.STRING, "First Name")
      .addColumn(Charts.ColumnType.STRING, "Party")
      .addColumn(Charts.ColumnType.STRING, "Leadership Role");
    for (var i in uSCongress) {
      var cm = uSCongress[i];
      var ssData = uSCongress.map((r) => [
        r.last_name,
        r.first_name,
        r.party,
        r.leadership_role,
      ]);
      dataTableBuilder.addRow([
        cm.last_name,
        cm.first_name,
        cm.party,
        cm.leadership_role,
      ]);
      var member = contentFile("congressMembers", {
        memberData: ssData,
        loadTable: function loadTable() {
          dataTableBuilder.build();
          Charts.newStringFilter(),
            Charts.newTableChart().build(),
            Charts.newDashboardPanel()
              .setDataTable(dataTableBuilder.build())
              .build(),
            google.charts.load("current", { packages: ["table"] });
          google.charts.setOnLoadCallback(drawTable);
        },
        drawTable: function () {
          function drawTable() {
            var data = new google.visualization.DataTable().data
              .addColumn("string", "Last Name")
              .data.addColumn("string", "First Name")
              .data.addColumn("string", "Party")
              .data.addColumn("string", "Leadership Role")
              .data.addRows([this.tableSs()]);
            var table = new google.visualization.Table(
              document.getElementById("table_div"),
            );
            table.draw(data, {
              showRowNumber: true,
              width: "100%",
              height: "100%",
            });
          }
        },
        tableSs: function () {
          var myTable = spreadSheetCreate(
            "tableS",
            "usCongress",
            ["Last Name", "First Name", "Party", "Leadership Role"],
            ssData,
            4,
          );
          return myTable;
        },
      });
      console.log(member);
    }
    return member;
    console.log(dashboard);
  })();
};
// return doGet("content", contentFile)("congressLeg"
// ,{
// gamerUrl:gamerUrl,
// congressData: congressInfoAPI(),
// civicData: civicInfoAPI()//"".concat(contentApp("\n  document.addEventListener('DOMContentLoaded', function() {\n   let getCivic = document.querySelector(\".civic\");\n   getCivic.textContent = <?!= data ?>;\n   })\n   ", {data: civicInfoAPI()}), "")});

function pill() {
  const Route = {};
  Route.path = function (route, callback) {
    Route[route] = callback;
  };
  Route.path("test", contentFile);
  pill = Route["test"]("epaWebsite", {
    materializeCss:
      '\n  <link href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" rel="stylesheet"></link>\n',
    tabulatorCss:
      '\n  <link href="https://unpkg.com/tabulator-tables@5.2.3/dist/css/tabulator_materialize.min.css" rel="stylesheet">',
    materializeJs:
      '\n  <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>\n  ',
    luxonJs:
      '\n    <script src="https://cdnjs.cloudflare.com/ajax/libs/luxon/3.0.1/luxon.min.js" integrity="sha512-6ZJuab/UnRq1muTChgrVxJhSgygmL2GMLVmSJN7pcBEqJ1dWPbqN9CiZ6U3HrcApTIJsLnMgXYBYgtVkJ8fWiw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>',
    tabulatorJs:
      '\n<script type="text/javascript" src="https://unpkg.com/tabulator-tables@5.2.3/dist/js/tabulator.min.js"></script>',
    dOMContentLoaded:
      '\n  document.addEventListener(\'DOMContentLoaded\', function() {\n  let timePicker = document.getElementById("prefTime");\n M.Timepicker.init(timePicker, { defaultTime: "now" })\n })\n \n  document.getElementById("btn").addEventListener("click", function() {\n  google.script.run.runItLog();\n  })\nvar elems = document.querySelectorAll(\'select\');\n    var instances = M.FormSelect.init(elems, options);\n  });',
  });
  return contentApp(pill);
  //:contentFile('uiAccess')
}

function randomEmail() {
  var emails = validate();
  var emailsCount = validate().toString().split(",").length;
  var randomEmail = emails[Math.floor(Math.random() * emailsCount)];
  return randomEmail;
}

var runIt = function (e) {
  //urlDataSource("https://www.sec.gov/files/company_tickers.json")
  if (e.parameter["args"] === "") {
    return wwAccess("development", proMediaSnip)(e);
    //: contentFile("uiAccess");
  } else if (e.parameter["args"] === "epa") {
    return renderTemplate(wwAccess("epa", epaData)());
    //: contentFile("uiAccess");
  } else if (e.parameter["args"] === "edgar") {
    return renderTemplate(wwAccess("edgar", edgarData)());
    //: contentFile("uiAccess");
  } else if (e.parameter["args"] === "odd") {
    return renderTemplate(wwAccess("odd", breakthrough)(e));
    //: contentFile("uiAccess");
  } else if (e.parameter["args"] === "gamer") {
    return renderTemplate(wwAccess("gamer", jsGameScripts)());
    //: contentFile("uiAccess");
  } else if (e.parameter["args"] === "checkOD") {
    return renderTemplate(wwAccess("checkOD", checkOnDay)());
    //: contentFile("uiAccess");
  } else if (e.parameter["args"] === "usGov") {
    return renderTemplate(wwAccess("usGov", congressLeg)());
    //: contentFile("uiAccess");
  } else if (e.parameter["args"] === "jFun") {
    return renderTemplate(wwAccess("jFun", jFundamentals)(e));
    //: contentFile("uiAccess");
  } else if (e.parameter["args"] === "ssTest") {
    return renderTemplate(wwAccess("ssTest", superTest)(e));
    //: contentFile("uiAccess");
  } else {
    // Route.path("default", defaultWebsite);
    // Route.path("escape", escapedHTML);
    // Route.path("test", testJSON);
    // Route.path("tagBar", tagBuilder);
    // Route.path("uiAccess", uiAccess);
    // Route.path("test", contentFile);
    // Route.path("default", HtmlService.createHtmlOutput);
    // Route.path("default", HtmlService.createHtmlOutput);
    // Route.path("default", HtmlService.createHtmlOutput);
    // Route.path("default", HtmlService.createHtmlOutput);
    // Route.path("default", HtmlService.createHtmlOutput);
    // Route.path("default", HtmlService.createHtmlOutput);
    // Route.path("default", HtmlService.createHtmlOutput);
    // Route.path("default", HtmlService.createHtmlOutput);
    return wwAccess(e.parameter["default"], defaultWebsite)(e);
  }
};
//{ Route.path("jsonXpath", HtmlService.createHtmlOutput);}
// {if({ }typeof e.parameter["webApp"] === "undefined")
// { <!----WebApp Website----!>
// Route.path("jsonXpath", HtmlService.createHtmlOutput)
// return}} else   return
// webAppUrls =
// runIt =
// return ss

function uiAccess() {
  const isValidEmail = authLogic(validGroup());
  return authLogic(isValidEmail) ? "uiAccess" : "index";
}
// const authInfo = ScriptApp.getAuthorizationInfo(ScriptApp.AuthMode.FULL);
// const authStatus = authInfo.getAuthorizationStatus();
// const activeUser = Session.getActiveUser().getEmail();
// const effectiveUser = Session.getEffectiveUser().getEmail();
// const isValidGroup = authLogic(validGroup());
//:contentFile('uiAccess');
