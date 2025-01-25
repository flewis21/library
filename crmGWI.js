var crmGWI = function (fx) {
  console.log(
    JSON.stringify(this["start"]) +
      "\n" +
      arguments.callee.name +
      "\n!ed, = " +
      !fx,
  );
  // var fx = e;
  var objMaster = {
    miscellaneous: {
      section: [],
    },
  };
  var result = contentApp(
    `
<!DOCTYPE html>
  <html>
    <head>
      <base target="_self">
      <style>
        <?!= website ?>
      </style>
    </head>
    <body>
      <nav>
        <a id="caller" href="<?= getUrl(ScriptApp) ?>?func=crmGWI&args=${fx}" target="_top">update</a>
      </nav>
      <br>
      <div id="div"><?!= index ?></div>
    </body>
  </html>`,
    {
      index: (function index() {
        console.log(
          JSON.stringify(this["start"]) + "\n" + arguments.callee.name,
        );
        if (fx === objMaster) {
          return contentApp(``, {}, " ");
        } else {
          return contentApp(
            `<!DOCTYPE html>
      <html>
      <head>
        <title>General Work Invoice</title>
        <style>
          a:link, a:visited {color:metallic grey !important;
                            font-size: 4.5em;}
          a:hover, a:active{ 
            color:white  !important;
            text-decoration:none  !important;}
          body: {color:metallic grey !important;
                font-size: 4.5em;
                height: 92%;
                margin-top: 10px;
                flex: 0 0 60px;
                justify-content: space-around;
                align-items: center;
                border: solid .5px;
                border-radius: 10px;
                margin: 0px 15px 5px 15px;}
        </style>
      <link href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" rel="stylesheet"></link>
      </head>
      <body>
        <h1>General Work Invoice</h1>
        <form id="myForm" style="font-size: 4.5em">
          <div style="font-size: 1em">
                <label for="date" style="font-size: 1em">Job Date:</label>
                <input placeholder=<?!= ph ?> class="datepicker" type="date" id="date" name="date"><br><br>

                <label for="car" style="font-size: 1em">Car:</label>
                <input type="text" id="car" name="car"><br><br>

                <label for="delPick" style="font-size: 1em">Delivery/Pickup:</label>
                <input type="text" id="delPick" name="delPick"><br><br>

                <label for="vinSTK" style="font-size: 1em">Vin/STK#:</label>
                <input type="text" id="vinSTK" name="vinSTK"><br><br>

                <label for="delAddr" style="font-size: 1em">Delivery Address:</label>
                <input type="text" id="delAddr" name="delAddr"><br><br>

                <label for="lab" style="font-size: 1em">Labor:</label>
                <input type="number" id="lab" name="lab"><br><br>

                <label for="gas" style="font-size: 1em">Gas:</label>
                <input type="number" id="gas" name="gas"><br><br>

                <label for="total" style="font-size: 1em">Total:</label>
                <input type="number" id="total" name="total"><br><br>

                <label for="delTime" style="font-size: 1em">Delivery Time:</label>
                <input type="number" id="delTime" name="delTime"><br><br>

                <label for="pickAddr" style="font-size: 1em">Pickup Address:</label>
                <input type="text" id="pickAddr" name="pickAddr"><br><br>

                <label for="id" style="font-size: 1em">Id:</label>
                <input type="number" id="id" name="id"><br><br>
          </div>
          <button type="submit">Submit</button>
        </form>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
        <script>
          var form = document.getElementById('myForm');
          form.addEventListener('submit', function(event) {
            event.preventDefault();
            submitForm();});
          function serverside(func, args) {
            return new Promise((resolve, reject) => {
              google.script.run
              .withSuccessHandler((result) => {
                alert("Success handling: ")
                  resolve(result)})
              .withFailureHandler((error) => {
                alert("Error handling: ")
                  console.log(error)
                  reject(error)})
              .runBoilerplate(func, args)})};
            function submitForm() {
              var formData = {};
              for (var i = 0; i < form.elements.length; i++) {
                var element = form.elements[i];
                formData[element.name] = element.value;}
                // Send data to Google Apps Script server-side function
                serverside("workEd", [JSON.stringify(formData)])
                .then((cChange) => {
                    if (cChange) {
                      console.log(cChange)
                  var cBlinkFollow = document.createElement("a");
                  cBlinkFollow.href = cChange;
                  cBlinkFollow.id = "cBlinkFOLLOW";
                  cBlinkFollow.target = "_blank";
                  document.body.appendChild(cBlinkFollow);
                document.getElementById("cBlinkFOLLOW").click();
                document.getElementById("cBlinkFOLLOW").remove()}})
                .catch((er) => {
                  alert(er)})}
                serverside('busyDates', [])
                .then((disabledDays) => {
                //mod the array
                let datePicker = document.getElementById('date');
                M.Datepicker.init(datePicker, {
                defaultDate: <?= dateDefault ?>, 
                setDefaultDate: true, 
                minDate: new Date(), 
                disableDayFn: 
                  function(day) {
                    return disabledDays.indexOf(day.valueOf()) > -1;}})})
                .catch((er) => {
                  alert(er)})
          </script>
      </body>
      </html>`,
            {
              ph: new Date(new Date()).toLocaleDateString(),
              dateDefault:
                new Date() - new Date(new Date()).toLocaleDateString(),
            },
            "Employee Benefits Inquiry",
          );
        }
      })(),
      link: getUrl(ScriptApp) + "?func=crmGWI&args=" + fx,
      utf_8: '\n<meta charset="UTF-8">',
      viewport:
        '<meta name="viewport" content="width=device-width, initial-scale=1.0">',
      fontAwesome:
        '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />',
      googleApisCss:
        '<link href="https://fonts.googleapis.com/css2?family=Libre+Barcode+128&family=Montserrat:ital@1&family=Oswald&family=Roboto&display=swap" rel="stylesheet">',
      googleApisIcon:
        '\n <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>\n  ',
      googleApis_preConnect:
        '<link rel="preconnect" href="https://fonts.googleapis.com">',
      website:
        '\n * {\n box-sizing: border-box;margin: 0;padding: 0;font-family: "Roboto", sans-serif;\n }\n ',
      html: "\n html,\n body {\n height: 100%;\n }\n ",
      main: "\n main {\n height: 92%;\n margin-top: 10px;\n }\n ",
      body: "\n body {\n background-color: #ffc107;\n }\n ",
      header:
        "\n header {\n background-color: rgba(255,255,255,.1);\n color: #a7e1ee;\n font-size: smaller;\n }\n ",
      header_h1:
        '\n header h1 {\n font-family: "Montserrat", cursive;\n margin-left: 15px;\n }\n ',
      grid: "\n .grid {\n display: grid;\n }\n ",
      flex_row: "\n .flex-row {\n display: flex;\n flex-direction: row;\n }\n ",
      flex_column:
        "\n .flex-column {\n display: flex;\n flex-direction: column;\n }\n ",
    },
  );
  return result;
};

function workEd(ed) {
  console.log(
    JSON.stringify(this["start"]) +
      "\n" +
      arguments.callee.name +
      "\n!ed, = " +
      !ed,
  );
  if (!ed) {
    var formData = JSON.parse(
      convertToObjects([[arguments.callee.name]], ["name"], start),
    )[0];
  } else {
    var formData = JSON.parse(ed);
  }
  // Get form data from the request
  var arrayData = covArrays(formData);
  var flatArray = [];
  var colArray = [];
  const keys = Object.keys(formData);
  keys.forEach(function (key) {
    console.log(key);
    var cleanKey = key.substring(1, key.length - 1);
    colArray.push(JSON.stringify(cleanKey));
  });
  for (var key in formData) {
    flatArray.push(formData[key]);
    // for (var val in formData[key]) {
    //     flatArray.push(formData[key][val])}
  }
  var sicSliceArray = flatArray.slice(1);
  // return dtlsPro(flatArray)
  var sheetUrl =
    "https://docs.google.com/spreadsheets/d/1-vNcN0vCLcXgMY9uwcKukUgv_4njggRZ6fqoZs-hBFE/edit#gid=138098962";
  var sheetName = "General Work Invoice";
  var numCols = colArray.length;
  return updateSheet(sheetUrl, sheetName, sicSliceArray, numCols, start)
    .myFileX;
  // var name = formData.name;
  // var email = formData.email;
  // var phone = formData.phone;
  // var fullTimeEmployees = formData.fullTimeEmployees;
  // var partTimeEmployees = formData.partTimeEmployees;
  // var postSheet = sheetsMaker(name,"Sheets",start)
  // var postId = postSheet.getId()
  // var postUrl = postSheet.getUrl()
  // return SpreadsheetApp.openById(postId).getUrl()
  // var postPub = FormApp.openById(postSheet.getId()).getPublishedUrl()
  // return console.log(postPub)
  // return spreadSheetCreate(name,name, colArray, arrayData, start).myFileX;
  // try {
  // Send data to AWS
  // var url = "https://YOUR_AWS_ENDPOINT"; // Replace with your AWS endpoint URL
  // var options = {
  //   'method': 'post',
  //   'contentType': 'application/json',
  //   'payload': JSON.stringify({
  //     "name": name,
  //     "email": email,
  //     "phone": phone,
  //     "fullTimeEmployees": fullTimeEmployees,
  //     "partTimeEmployees": partTimeEmployees
  //   })
  // };
  // var response = UrlFetchApp.fetch(url, options);
  // if (response.getResponseCode() == 200) {
  // Update Google Sheet if AWS call is successful
  // return spreadSheetCreate(name,name, colArray, arrayData, start).myFileX;
  // return dtlsPro(busS)
  // return ContentService.createTextOutput("Data sent to AWS and updated in sheet successfully!");
  // return ContentService.createTextOutput("Data sent to sheet successfully!");
  // return busS
  // } else {
  //   return ContentService.createTextOutput("Error sending data to AWS: " + response.getStatusCode() + " - " + response.getContentText());
  // }
  // } catch(error) {
  // return ContentService.createTextOutput("Error sending data to AWS: " + error);
  // return ContentService.createTextOutput("Error sending data: " + error);
  // }
}
