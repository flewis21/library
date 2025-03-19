var crmEBI = function (fx) {
  console.log(
    Math.floor((maxTime - (new Date() % (1000 * 60))) / 1000) +
      "\n" +
      arguments.callee.name +
      "\n!" +
      fx +
      ", = " +
      !fx,
  );
  // var fx = e;
  var objMaster = {
    miscellaneous: {
      section: ["EBI Yes", "EBI No"],
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
      <nav class="center">
        <a id="caller" href="<?= getUrl(ScriptApp) ?>?func=crmEBI&args=${fx}" target="_top">update</a>
      </nav>
      <br>
      <div class="center" id="div"><?!= index ?></div>
    </body>
  </html>`,
    {
      index: (function index() {
        console.log(
          JSON.stringify(this["start"]) + "\n" + arguments.callee.name,
        );
        if (fx === objMaster.miscellaneous.section[0]) {
          return contentApp(
            `<!DOCTYPE html>
    <html>
    <head>
      <title>Yes</title>
      <style>
        a:link, a:visited {color:metallic grey !important;
                          font-size: 4.5em;}
        a:hover, a:active{ 
          color:white  !important;
          text-decoration:none  !important;}
      </style>
    </head>
    <body>
      <h1>Yes</h1>
      <form id="myForm" style="font-size: 4.5em">
        <div class="header toolbar toolbar-icon">
          <div class="interface dotted_border">
            <a href='<?= getUrl(ScriptApp) ?>?func=crmEBI' onclick="GameManager.setGameStart('Warrior')" target="_top">
              <img src="https://th.bing.com/th/id/R.57eccfdb6e4aa879a3f1916f680230cc?rik=lTo5WUyhUhAWdQ&pid=ImgRaw&r=0" alt="Ask: Do you offer employee benefits?" />
              <div>
                <p>Are you satisfied with the annual renewals costs of your employee benefits every year?</p>
                <p>As a small business owner, I know how proud you must be to offer benefits to your employees!</p>
                <p>However, many small business owners I talk to tell me the costs can be very high!</p>
                <p>I’m sure it’s the same for you!</p>
                <p>So, we would like to share some interesting changes the government has made to make the cost of offering benefits more affordable for small businesses!</p>
              </div>
            </a>
          </div>
        </div>
      <button type="submit">Submit</button>
      </form>
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
              serverside("postEd", [JSON.stringify(formData)])
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
                alert(er)})
              }
        </script>
      </body>
    </html>`,
            {},
          );
        } else if (fx === objMaster.miscellaneous.section[1]) {
          return contentApp(
            `<!DOCTYPE html>
    <html>
    <head>
      <title>No</title>
      <style>
        a:link, a:visited {color:metallic grey !important;
                          font-size: 4.5em;}
        a:hover, a:active{ 
          color:white  !important;
          text-decoration:none  !important;}
      </style>
    </head>
    <body>
      <h1>No</h1>
      <form id="myForm" style="font-size: 4.5em">
        <div class="header toolbar toolbar-icon">
          <div class="interface dotted_border">
            <a href='<?= getUrl(ScriptApp) ?>?func=crmEBI' onclick="GameManager.setGameStart('Rouge')" target="_top">
              <img src="https://th.bing.com/th/id/OIP.Ma7y1maQJ2aG4_SmBPZzxwHaFj?rs=1&pid=ImgDetMain" alt="Ask: Do you offer employee benefits?" />
              <div>
                <p>I understand!</p>
                <p>Several of our business clients have told us how expensive it is to offer benefits!</p>
                <p>When we showed them how they could offer benefits at lower costs, many were excited and partnered with us, and are now offering benefits to their employees!</p>
              </div>
            </a>
          </div>
        </div>
      <button type="submit">Submit</button>
      </form>
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
              serverside("postEd", [JSON.stringify(formData)])
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
          </script>
        </body>
      </html>`,
            {},
          );
        } else if (fx === objMaster) {
          return contentApp(``, {}, " ");
        } else {
          return contentApp(
            `<!DOCTYPE html>
      <html>
      <head>
        <title>Employee Benefits Inquiry</title>
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
      </head>
      <body>
        <div class="col s12">
          <div class="input-field col s12">
            <select id="templateSelect">
              <option value="" disabled selected>Choose a Template Doc</option>
              <? var files = DriveApp.searchFiles('mimeType = "application/vnd.google-apps.document"'); ?>
              <? while (files.hasNext()) { ?>
                <? var file = files.next(); ?>
                <option value="<?= file.getUrl() ?>"><?= file.getName() ?></option>
              <? } ?>
            </select>
            <label for="templateSelect">Select a Google Doc</label>
          </div>
        </div>
        <h1><div id="companyName">Employee Benefits Inquiry</div></h1>
        <input type="number" id="rowIndex" placeholder="Enter row number" value="1" style="font-size: 5em">
        <form id="ebiForm" style="font-size: 4.5em">
          <div style="font-size: 1.5em">
            <p>Hi!</p><p>This is Fabian with WLS Community Benefits!</p><p> Good morning/afternoon!</p><p>How are you today? (Wait for answer)!</p><p>Please tell me your name (again)!</p><p>(Insert <label for="name" style="font-size: 1em">Name</label> here:<input type="text" id="name" name="name" style="font-size: .5em"> or write it down)!</p><p>Thanks!</p><p>Hi<input type="text" id="nameFr" name="nameFriendly" style="font-size: .5em"><label for="nameFr" style="font-size: 1em">Friendly Name</label>!:</p><p>Are you the person who handles employee benefits?(Wait for answer)!</p><h2>May I speak with the person who handles benefits, please?</h2>
            <p>Hi<input type="text" id="nameBM" name="nameBenefitsManager" style="font-size: .5em"><label for="nameBM" style="font-size: 1em">Benefits Manager Name</label>!:</p><p>This is Fabian with WLS Community Benefits!</p><p>I am calling you today to share some exciting news about employee benefits and how you can save money on your employee health insurance!</p><p>Can I have a few minutes of your time? (If not, find out what would be a good time to call back)! Do you offer employee benefits?</p><div class="interface dotted_border"><a id="yesHL"><div id="yesOffer"><h3>If yes, continue!</h3></div><img src="https://th.bing.com/th/id/R.57eccfdb6e4aa879a3f1916f680230cc?rik=lTo5WUyhUhAWdQ&pid=ImgRaw&r=0" alt="Ask: Do you offer employee benefits?" /></a><a id="noHL"><div id="noOffer"><h3 class="header h1">If no, continue!</h3></div><img src="https://th.bing.com/th/id/OIP.Ma7y1maQJ2aG4_SmBPZzxwHaFj?rs=1&pid=ImgDetMain" alt="Ask: Do you offer employee benefits?" /></a></div><div class="agenda z-depth-5 pulse btn-large card-panel blue scale-out scale-in"><a href="https://calendly.com/wlstraininginc/employee-benefits-consultation" class="black darken-4 receipt toolbar toolbar_icon toolbar_iconHover scale-out btn-large menu-img z-depth-5 card-panel black scale-transition scale-out scale-in" target="-blank">Contact Me</a></div><br />
            <p>I want to schedule some time for you to meet with my director to discuss it!</p><p>How is<input placeholder=<?!= ph ?> class="datepicker" type="date" id="date" name="date" style="font-size: .5em"><label for="date" style="font-size: 1em">Date:</label> at<input placeholder=<?!= ph ?> class="timepicker" type="time" id="time" name="time" style="font-size: .5em"><label for="time" style="font-size: 1em">Time</label>?: or<input placeholder=<?!= ph ?> class="datepicker" type="date" id="dateAlt" name="dateAlternate" style="font-size: .5em"><label for="dateAlt" style="font-size: 1em">Alternate Date:</label> at<input placeholder=<?!= ph ?> class="timepicker" type="time" id="timeAlt" name="timeAlternate" style="font-size: .5em"><label for="timeAlt" style="font-size: 1em">Alternate Time</label>?:</p>
            <p>So that we can be better prepared for the meeting let me ask you a few additional questions:</p><label for="email" style="font-size: 1em">Email:</label><p>What is your email address?</p><input type="email" id="email" name="email" style="font-size: .5em"><label for="phone" style="font-size: 1em">Telephone:</label><p>What is your cell phone number or the best way to reach you directly?</p><input type="tel" id="phone" name="phone" style="font-size: .5em"><label for="fullTimeEmployees" style="font-size: 1em">Full-time Employees:</label><p>How many full-time employees do you have?</p><input type="number" id="fullTimeEmployees" name="fullTimeEmployees" style="font-size: .5em"><label for="partTimeEmployees" style="font-size: 1em">Part-time Employees:</label><p>How many part-time employees do you have?</p><input type="number" id="partTimeEmployees" name="partTimeEmployees" style="font-size: .5em"><label for="nameAdd" style="font-size: 1em">Additional Name:</label><p>Is there someone else at your business you would like to have attend this meeting as well? (get name <input type="text" id="nameAdd" name="nameAdditional" style="font-size: .5em"> and email <input type="email" id="emailAdd" name="emailAdditional" style="font-size: 1em"><label for="emailAdd" style="font-size: 1em">Additional Email</label>):</p><p>Are you the final decision maker about benefits?</p><p>OK!</p><p>Great!</p><p>Ms. Bridget Lewis will email you a reminder a few minutes before your meeting on<input placeholder=<?!= ph ?> class="datepicker" type="date" id="dateFin" name="dateFinalized" style="font-size: .5em"><label for="dateFin" style="font-size: 1em">Finalized Date:</label> at<input placeholder=<?!= ph ?> class="timepicker" type="time" id="timeFin" name="timeFinalized" style="font-size: .5em"><label for="timeFin" style="font-size: 1em">Finalized Time:</label>!</p><p>If you have any further questions or need to reschedule, her number 678-296-7290 and her email is bridget@wlstraininginc.com!</p></div></form><button type="submit" style="font-size: 5em">Submit</button>
        
        <script>
          var sheetRows = document.getElementById('rowIndex');
          var form = document.getElementById('ebiForm');
          form.addEventListener('submit', function(event) {
            event.preventDefault();
            submitForm();
            window.scrollTo(0,0);});
          var goToYes = document.getElementById("yesHL")
          goToYes.addEventListener("click", function() {
            var yesDiv = document.getElementById("yesOffer")
            yesDiv.innerHTML = "<p>Are you satisfied with the annual renewals costs of your employee benefits every year?</p><p>As a small business owner, I know how proud you must be to offer benefits to your employees!</p><p>However, many small business owners I talk to tell me the costs can be very high!</p><p>I’m sure it’s the same for you!</p><p>So, we would like to share some interesting changes the government has made to make the cost of offering benefits more affordable for small businesses!</p>"})
          var goToNo = document.getElementById("noHL")
          goToNo.addEventListener("click", function() {
            var noDiv = document.getElementById("noOffer")
            noDiv.innerHTML = "<p>I understand!</p><p>Several of our business clients have told us how expensive it is to offer benefits!</p><p>When we showed them how they could offer benefits at lower costs, many were excited and partnered with us, and are now offering benefits to their employees!</p>"})
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
                serverside("postEd", [JSON.stringify(formData)])
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
              if (sheetRows) {
                sheetRows.addEventListener('select', function() { 
                var rowIndex = parseInt(document.getElementById("rowIndex").value);
                console.log(rowIndex)
                serverside("leadBook", [rowIndex])
                .then((cChange) => {
                  var link = cChange.url
                  var data = cChange.jsonData
                  if (data) {
                    document.getElementById("companyName").innerHTML = data.Company_Name
                    document.getElementById("name").value = data.Legal_Name || "";
                    document.getElementById("nameFr").value = data.Executive_First_Name || "";
                    document.getElementById("nameBM").value = data.Legal_Name || "";
                    document.getElementById("nameAdd").value = "";
                    document.getElementById("phone").value = data.Phone_Number_Combined || "";
                    document.getElementById("fullTimeEmployees").value = data.Location_Employee_Size_Actual || "";
                  } else {
                    console.log("No more data or invalid row index.");
                    // Optionally, disable the form or show a message

                    // Increment and update the row index
                    var rowIndex = parseInt(document.getElementById("rowIndex").value);
                    document.getElementById("rowIndex").value = rowIndex + 1;
                  }
                    if (link) {
                      alert(link)
                  var cClinkFollow = document.createElement("a");
                  cClinkFollow.href = link;
                  cClinkFollow.id = "cClinkFOLLOW";
                  cClinkFollow.target = "_blank";
                  document.body.appendChild(cClinkFollow);
                var confirmation = window.confirm("Click OK to continue to the destination."); 
                if (confirmation) {
                  document.getElementById("cClinkFOLLOW").click();
                  document.getElementById("cClinkFOLLOW").remove()}}})
                .catch((er) => {
                  alert(er)})})}
                serverside('busyDates', [])
                .then((disabledDays) => {
                let timePicker = document.getElementById('time');
                M.Timepicker.init(timePicker, {
                defaultTime: "now"})
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
                document.getElementById("templateSelect").addEventListener("change", function() {
                  var edSrc 
                    = document.getElementById("templateSelect").value
                  window.open(edSrc)})
          </script>
      </body>
      </html>`,
            {
              ph: new Date(new Date()).toLocaleDateString(),
              bh: new Date(new Date()).toLocaleTimeString(),
              timeDefault:
                new Date() - new Date(new Date()).toLocaleTimeString(),
              dateDefault:
                new Date() - new Date(new Date()).toLocaleDateString(),
            },
          );
        }
      })(),
      link: getUrl(ScriptApp) + "?func=crmEBI&args=" + fx,
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

function postEd(ed) {
  console.log(
    JSON.stringify(this["start"]) +
      "\n" +
      arguments.callee.name +
      "\n!" +
      ed +
      ", = " +
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
  var colArray = [];
  const keys = Object.keys(formData);
  keys.forEach(function (key) {
    console.log(key);
    colArray.push(JSON.stringify(key));
  });
  // for (var key in formData) {
  //     colArray.push([])
  // for (var val in formData[key]) {
  //     colArray[key].push(formData[key][val])}
  //     }
  //     return dtlsPro(colArray)
  var name = formData.name;
  var email = formData.email;
  var phone = formData.phone;
  var fullTimeEmployees = formData.fullTimeEmployees;
  var partTimeEmployees = formData.partTimeEmployees;
  // var postSheet = sheetsMaker(name,"Sheets",start)
  // var postId = postSheet.getId()
  // var postUrl = postSheet.getUrl()
  // return SpreadsheetApp.openById(postId).getUrl()
  // var postPub = FormApp.openById(postSheet.getId()).getPublishedUrl()
  // return console.log(postPub)
  return spreadSheetCreate(name, name, colArray, arrayData, start).myFileX;
  try {
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
    return spreadSheetCreate(name, name, colArray, arrayData, start).myFileX;
    return dtlsPro(busS);
    // return ContentService.createTextOutput("Data sent to AWS and updated in sheet successfully!");
    // return ContentService.createTextOutput("Data sent to sheet successfully!");
    return busS;
    // } else {
    //   return ContentService.createTextOutput("Error sending data to AWS: " + response.getStatusCode() + " - " + response.getContentText());
    // }
  } catch (error) {
    // return ContentService.createTextOutput("Error sending data to AWS: " + error);
    return ContentService.createTextOutput("Error sending data: " + error);
  }
}

function leadBook(rowIndex) {
  var rowNum = parseInt(rowIndex);
  var leadSheet =
    "https://docs.google.com/spreadsheets/d/1Ykxv-zQiAjNix7w9IwzGTWiO2X0nqw7NkV5PsaEx3lI/edit?gid=356453707#gid=356453707";
  var leadName = "Custom2025010921011842";
  var ss = ssGetSheetBySpreadsheetUrl(leadSheet, leadName);
  var liadSsId = ss.getParent().getId();
  var sheetArray = SpreadsheetApp.openById(liadSsId).getUrl();
  var ssData = ss.getDataRange().getValues();
  if (rowNum >= 1 && rowNum < ssData.length) {
    var headers = ssData[0].map(function (header) {
      // Normalize headers: remove spaces, convert to camelCase, etc.
      return header.replace(/ /g, "_"); // Replace spaces with underscores
      // or
      // return header.replace(/ (\w)/g, function(match, letter) { // camelCase
      //   return letter.toUpperCase();
      // });
    });
    var row = ssData[rowNum];
    var rowObject = {};

    for (var j = 0; j < headers.length; j++) {
      rowObject[headers[j]] = row[j];
    }
    return { url: sheetArray, jsonData: rowObject };
  } else {
    return { url: sheetArray, jsonData: null }; // Return null if the row index is out of bounds
  }
}
