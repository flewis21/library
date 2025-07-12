// The main function that generates your web app HTML
var crmGWI = function (fx) {
  console.log(
    functionRegistry.time +
      "\n" +
      arguments.callee.name +
      "\n!" +
      fx +
      ", = " +
      !fx,
  );

  var indexContent = (function index() {
    console.log(functionRegistry.time + "\n" + arguments.callee.name);
    return contentApp(
      `
    <h1>General Work Invoice</h1>
    <form id="myForm">
      <div>
        <label for="date">Job Date:</label>
        <input placeholder="<?!= ph ?>" class="datepicker" type="date" id="date" name="date"><br><br>

        <label for="car">Car:</label>
        <input type="text" id="car" name="car"><br><br>

        <label for="delPick">Delivery/Pickup:</label>
        <input type="text" id="delPick" name="delPick"><br><br>

        <label for="vinSTK">Vin/STK#:</label>
        <input type="text" id="vinSTK" name="vinSTK"><br><br>

        <label for="delAddr">Delivery Address:</label>
        <input type="text" id="delAddr" name="delAddr">
        <div id="delAddrSuggestions" class="autocomplete-suggestions"></div>
        <br>

        <label for="lab">Labor:</label>
        <input type="number" id="lab" name="lab"><br><br>

        <label for="gas">Gas:</label>
        <input type="number" id="gas" name="gas"><br><br>

        <label for="total">Total:</label>
        <input type="number" id="total" name="total"><br><br>

        <label for="delTime">Delivery Time:</label>
        <input type="number" id="delTime" name="delTime"><br><br>

        <label for="pickAddr">Pickup Address:</label>
        <input type="text" id="pickAddr" name="pickAddr">
        <div id="pickAddrSuggestions" class="autocomplete-suggestions"></div>
        <br>

        <label for="id">Id:</label>
        <input type="number" id="id" name="id"><br><br>

        <button type="button" id="calculateCostsBtn" class="btn waves-effect waves-light">
              Calculate Costs <i class="material-icons right">location_on</i>
          </button>
          <span id="calculationStatus" style="margin-left: 10px; color: grey;"></span>
          <br><br>

      </div>
      <button type="submit">Submit</button>
    </form>
`,
      {
        ph: new Date().toLocaleDateString(),
      },
    );
  })();

  var templateVariables = {
    fx: fx,
    link: getUrl(ScriptApp) + "?func=crmGWI&args=" + fx,
    index: indexContent,
    dateDefault: new Date().toISOString(),

    utf_8: '<meta charset="UTF-8">',
    viewport: '<meta name="viewport" content="width=device-width, initial-scale=1.0">',
    fontAwesome: '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />',
    googleApisCss: '<link href="https://fonts.googleapis.com/css2?family=Libre+Barcode+128&family=Montserrat:ital@1&family=Oswald&family=Roboto&display=swap" rel="stylesheet">',
    googleApisIcon: '<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">',
    googleApis_preConnect: '<link rel="preconnect" href="https://fonts.googleapis.com">',
    materializeCss: '<link href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" rel="stylesheet">',

    website: `
      * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: "Roboto", sans-serif;
      }
      a:link, a:visited {
        color: #757575 !important;
        font-size: 1em;
        text-decoration: none;
      }
      a:hover, a:active {
        color: black !important;
        text-decoration: none !important;
      }
      .btn { /* Basic Materialize button styling */
          background-color: #2196F3; /* Blue */
          color: white;
          padding: 10px 20px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-size: 1em;
          text-transform: uppercase;
          transition: background-color 0.3s ease;
      }
      .btn:hover {
          background-color: #1976D2; /* Darker blue */
      }
    `,
    html_body_styles: `
      html, body {
        height: 100%;
      }
      body {
        background-color: #ffc107;
        display: flex;
        flex-direction: column;
        align-items: center;
        min-height: 100vh;
        padding: 20px;
      }
      .app-container {
        background-color: white;
        padding: 30px;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        width: 90%;
        max-width: 800px;
        margin-top: 20px;
        margin-bottom: 20px;
        position: relative; /* ADD THIS LINE */
      }
      nav {
        width: 100%;
        background-color: #4CAF50;
        padding: 15px 0;
        text-align: center;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        position: sticky;
        top: 0;
        z-index: 1000;
      }
      nav a {
        color: white !important;
        font-size: 1.2em;
        text-decoration: none;
        padding: 10px 20px;
        border-radius: 5px;
        transition: background-color 0.3s ease;
      }
      nav a:hover {
        background-color: #45a049;
      }
      h1 {
        font-size: 2.5em;
        color: #333;
        margin-bottom: 20px;
        text-align: center;
      }
      form label {
        font-size: 1em;
        color: #555;
        margin-bottom: 5px;
        display: block;
      }
      form input[type="text"],
      form input[type="date"],
      form input[type="number"] {
        width: 100%;
        padding: 10px;
        margin-bottom: 15px;
        border: 1px solid #ddd;
        border-radius: 5px;
        font-size: 1em;
      }
      form button[type="submit"] {
        background-color: #007bff;
        color: white;
        padding: 12px 25px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 1.1em;
        transition: background-color 0.3s ease;
        display: block;
        margin-top: 20px;
      }
      form button[type="submit"]:hover {
        background-color: #0056b3;
      }
      @media (max-width: 600px) {
        .app-container {
          width: 95%;
          padding: 15px;
        }
        h1 {
          font-size: 2em;
        }
        form label, form input, form button {
          font-size: 0.9em;
        }
      }
      .autocomplete-suggestions {
          border: 1px solid #ccc;
          max-height: 200px;
          overflow-y: auto;
          background-color: white;
          z-index: 100;
          position: absolute;
          width: 100%; /* CHANGED: Was calc(100% - 60px) */
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          margin-top: -15px;
          left: 0; /* ADDED: Ensure it starts at the left edge of its relative parent */
      }
      .autocomplete-suggestions div {
          padding: 8px 12px;
          cursor: pointer;
          border-bottom: 1px solid #eee;
      }
      .autocomplete-suggestions div:hover {
          background-color: #f0f0f0;
      }
      .autocomplete-suggestions div:last-child {
          border-bottom: none;
      }
    `,
    clientScript: `
      function serverside(func, args) {
        return new Promise((resolve, reject) => {
          google.script.run
            .withSuccessHandler((result) => {
              console.log("Success handling:", result);
              resolve(result);
            })
            .withFailureHandler((error) => {
              console.error("Error handling:", error);
              alert("An error occurred: " + error.message);
              reject(error);
            })
            .runBoilerplate(func, args);
        });
      }

      function debounce(func, delay) {
        let timeout;
        return function(...args) {
          const context = this;
          clearTimeout(timeout);
          timeout = setTimeout(() => func.apply(context, args), delay);
        };
      }

      function setupAutocomplete(inputId, suggestionsDivId) {
        const input = document.getElementById(inputId);
        const suggestionsDiv = document.getElementById(suggestionsDivId);

        if (input && suggestionsDiv) {
          const fetchSuggestions = debounce((query) => {
            if (query.length < 3) {
              suggestionsDiv.innerHTML = '';
              return;
            }
            serverside('getSuggestions', [query])
              .then(suggestions => {
                suggestionsDiv.innerHTML = '';
                if (suggestions && suggestions.length > 0) {
                  suggestions.forEach(suggestion => {
                    const div = document.createElement('div');
                    div.textContent = suggestion;
                    div.addEventListener('click', () => {
                      input.value = suggestion;
                      suggestionsDiv.innerHTML = '';
                    });
                    suggestionsDiv.appendChild(div);
                  });
                }
              })
              .catch(error => {
                console.error("Error fetching address suggestions for " + inputId + ":", error);
                suggestionsDiv.innerHTML = '<div>Error fetching suggestions.</div>';
              });
          }, 300);

          input.addEventListener('input', (event) => {
            fetchSuggestions(event.target.value);
          });

          document.addEventListener('click', (event) => {
            if (!input.contains(event.target) && !suggestionsDiv.contains(event.target)) {
              suggestionsDiv.innerHTML = '';
            }
          });

          input.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') {
                suggestionsDiv.innerHTML = '';
                input.blur();
            }
          });

        } else {
            console.error("Input element '" + inputId + "' or suggestions div '" + suggestionsDivId + "' not found for autocomplete setup.");
        }
      }


      document.addEventListener('DOMContentLoaded', function() {
        // Materialize Datepicker Initialization
        serverside('busyDates', [])
          .then((disabledDays) => {
            let datePickerElement = document.getElementById('date');
            M.Datepicker.init(datePickerElement, {
              defaultDate: new Date("<?!= dateDefault ?>"),
              setDefaultDate: true,
              minDate: new Date(),
              disableDayFn: function(day) {
                return disabledDays.includes(day.valueOf());
              }
            });
          })
          .catch((er) => {
            console.error("Datepicker error:", er);
            alert("Failed to load busy dates: " + er.message);
          });

        // Setup Autocomplete for Delivery Address
        setupAutocomplete('delAddr', 'delAddrSuggestions');

        // Setup Autocomplete for Pickup Address
        setupAutocomplete('pickAddr', 'pickAddrSuggestions');

        // NEW: Calculate Costs button logic
        const calculateCostsBtn = document.getElementById('calculateCostsBtn');
        const delAddrInput = document.getElementById('delAddr');
        const pickAddrInput = document.getElementById('pickAddr');
        const labInput = document.getElementById('lab');
        const gasInput = document.getElementById('gas');
        const totalInput = document.getElementById('total');
        const delTimeInput = document.getElementById('delTime');
        const calculationStatusSpan = document.getElementById('calculationStatus');


        if (calculateCostsBtn && delAddrInput && pickAddrInput && labInput && gasInput && totalInput && delTimeInput && calculationStatusSpan) {
            calculateCostsBtn.addEventListener('click', () => {
                const deliveryAddress = delAddrInput.value.trim();
                const pickupAddress = pickAddrInput.value.trim();

                if (!deliveryAddress || !pickupAddress) {
                    alert('Please enter both Delivery and Pickup Addresses to calculate costs.');
                    return;
                }

                calculateCostsBtn.disabled = true; // Disable button during calculation
                calculationStatusSpan.textContent = 'Calculating...';

                serverside('calculateTravelCosts', [deliveryAddress, pickupAddress])
                    .then(results => {
                        labInput.value = results.labor.toFixed(2);
                        gasInput.value = results.gas.toFixed(2);
                        totalInput.value = results.total.toFixed(2);
                        delTimeInput.value = results.travelTimeMinutes; // Populate delivery time with travel duration
                        calculationStatusSpan.textContent = 'Done!';
                        console.log('Calculation Results:', results);
                    })
                    .catch(error => {
                        console.error('Error during cost calculation:', error);
                        calculationStatusSpan.textContent = 'Error: ' + error.message;
                        alert('Could not calculate costs: ' + error.message);
                    })
                    .finally(() => {
                        calculateCostsBtn.disabled = false; // Re-enable button
                        setTimeout(() => calculationStatusSpan.textContent = '', 5000); // Clear status after 5 seconds
                    });
            });
        } else {
            console.error("One or more elements for cost calculation not found.");
        }


        // Form Submission Logic (existing code)
        var form = document.getElementById('myForm');
        form.addEventListener('submit', function(event) {
          event.preventDefault();

          var formData = {};
          for (var i = 0; i < form.elements.length; i++) {
            var element = form.elements[i];
            if (element.name) {
              formData[element.name] = element.value;
            }
          }

          serverside("workEd", [JSON.stringify(formData)])
            .then((cChange) => {
              if (cChange) {
                console.log("cChange:", cChange);
                var cBlinkFollow = document.createElement("a");
                cBlinkFollow.href = cChange;
                cBlinkFollow.id = "cBlinkFOLLOW";
                cBlinkFollow.target = "_blank";
                document.body.appendChild(cBlinkFollow);
                cBlinkFollow.click();
                cBlinkFollow.remove();
              }
            })
            .catch((er) => {
              console.error("Submission error:", er);
              alert("Failed to submit form: " + er.message);
            });
        });
      `,
  };

  var mainHtmlBlob = `
<!DOCTYPE html>
<html>
<head>
  <base target="_self">
  <title>General Work Invoice</title>
  <?!= utf_8 ?>
  <?!= viewport ?>
  <?!= googleApis_preConnect ?>
  <?!= googleApisCss ?>
  <?!= googleApisIcon ?>
  <?!= fontAwesome ?>
  <?!= materializeCss ?>
  <style>
    <?!= website ?>
    <?!= html_body_styles ?>
  </style>
</head>
<body>
  <nav>
    <a id="caller" href="<?= link ?>" target="_top">update</a>
  </nav>
  <br>
  <div class="app-container">
    <?!= index ?>
  </div>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
  <script>
    <?!= clientScript ?>
  </script>
</body>
</html>
`;

  var result = contentApp(mainHtmlBlob, templateVariables);
  return result;
};

// var crmGWI = function (fx) {
//   console.log(
//     functionRegistry.time +
//       "\n" +
//       arguments.callee.name +
//       "\n!" +
//       fx +
//       ", = " +
//       !fx,
//   );
//   // var fx = e;
//   var objMaster = { miscellaneous: { section: [] } };
//   var result = contentApp(
//     `
// <!DOCTYPE html>
//   <html>
//     <head>
//       <base target="_self">
//       <style>
//         <?!= website ?>
//       </style>
//     </head>
//     <body>
//       <nav class="center">
//         <a id="caller" href="<?= getUrl(ScriptApp) ?>?func=crmGWI&args=${fx}" target="_top">update</a>
//       </nav>
//       <br>
//       <div class="center" id="div"><?!= index ?></div>
//     </body>
//   </html>`,
//     {
//       index: (function index() {
//         console.log(functionRegistry.time + "\n" + arguments.callee.name);
//         return contentApp(
//           `<!DOCTYPE html>
//   <html>
//   <head>
//     <title>General Work Invoice</title>
//     <style>
//       a:link, a:visited {color:metallic grey !important;
//                         font-size: 4.5em;}
//       a:hover, a:active{ 
//         color:white  !important;
//         text-decoration:none  !important;}
//       body: {color:metallic grey !important;
//             font-size: 4.5em;
//             height: 92%;
//             margin-top: 10px;
//             flex: 0 0 60px;
//             justify-content: space-around;
//             align-items: center;
//             border: solid .5px;
//             border-radius: 10px;
//             margin: 0px 15px 5px 15px;}
//     </style>
//   <link href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" rel="stylesheet"></link>
//   </head>
//   <body>
//     <h1>General Work Invoice</h1>
//     <form id="myForm" style="font-size: 4.5em">
//       <div style="font-size: 1em">
//             <label for="date" style="font-size: 1em">Job Date:</label>
//             <input placeholder="<?!= ph ?>" class="datepicker" type="date" id="date" name="date"><br><br>

//             <label for="car" style="font-size: 1em">Car:</label>
//             <input type="text" id="car" name="car"><br><br>

//             <label for="delPick" style="font-size: 1em">Delivery/Pickup:</label>
//             <input type="text" id="delPick" name="delPick"><br><br>

//             <label for="vinSTK" style="font-size: 1em">Vin/STK#:</label>
//             <input type="text" id="vinSTK" name="vinSTK"><br><br>

//             <label for="delAddr" style="font-size: 1em">Delivery Address:</label>
//             <input type="text" id="delAddr" name="delAddr"><br><br>

//             <label for="lab" style="font-size: 1em">Labor:</label>
//             <input type="number" id="lab" name="lab"><br><br>

//             <label for="gas" style="font-size: 1em">Gas:</label>
//             <input type="number" id="gas" name="gas"><br><br>

//             <label for="total" style="font-size: 1em">Total:</label>
//             <input type="number" id="total" name="total"><br><br>

//             <label for="delTime" style="font-size: 1em">Delivery Time:</label>
//             <input type="number" id="delTime" name="delTime"><br><br>

//             <label for="pickAddr" style="font-size: 1em">Pickup Address:</label>
//             <input type="text" id="pickAddr" name="pickAddr"><br><br>

//             <label for="id" style="font-size: 1em">Id:</label>
//             <input type="number" id="id" name="id"><br><br>
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//     <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
//     <script>
//       var form = document.getElementById('myForm');
//       form.addEventListener('submit', function(event) {
//         event.preventDefault();
//         var formData = {};
//         for (var i = 0; i < form.elements.length; i++) {
//           var element = form.elements[i];
//           formData[element.name] = element.value;}
//           // Send data to Google Apps Script server-side function
//           serverside("workEd", [JSON.stringify(formData)])
//           .then((cChange) => {
//               if (cChange) {
//                 console.log(cChange)
//             var cBlinkFollow = document.createElement("a");
//             cBlinkFollow.href = cChange;
//             cBlinkFollow.id = "cBlinkFOLLOW";
//             cBlinkFollow.target = "_blank";
//             document.body.appendChild(cBlinkFollow);
//           document.getElementById("cBlinkFOLLOW").click();
//           document.getElementById("cBlinkFOLLOW").remove()}})
//           .catch((er) => {
//             alert(er)})});
//       function serverside(func, args) {
//         return new Promise((resolve, reject) => {
//           google.script.run
//           .withSuccessHandler((result) => {
//             alert("Success handling: ")
//               resolve(result)})
//           .withFailureHandler((error) => {
//             alert("Error handling: ")
//               console.log(error)
//               reject(error)})
//           .runBoilerplate(func, args)})};
//       serverside('busyDates', [])
//       .then((disabledDays) => {
//       //mod the array
//       let datePicker = document.getElementById('date');
//       M.Datepicker.init(datePicker, {
//       defaultDate: "<?!= dateDefault ?>", 
//       setDefaultDate: true, 
//       minDate: new Date(), 
//       disableDayFn: 
//         function(day) {
//           return disabledDays.indexOf(day.valueOf()) > -1;}})})
//       .catch((er) => {
//         alert(er)})
//       </script>
//   </body>
//   </html>`,
//           {
//             ph: new Date(new Date()).toLocaleDateString(),
//             dateDefault: new Date() - new Date(new Date()).toLocaleDateString(),
//           },
//         );
//       })(),
//       link: getUrl(ScriptApp) + "?func=crmGWI&args=" + fx,
//       utf_8: '\n<meta charset="UTF-8">',
//       viewport:
//         '<meta name="viewport" content="width=device-width, initial-scale=1.0">',
//       fontAwesome:
//         '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />',
//       googleApisCss:
//         '<link href="https://fonts.googleapis.com/css2?family=Libre+Barcode+128&family=Montserrat:ital@1&family=Oswald&family=Roboto&display=swap" rel="stylesheet">',
//       googleApisIcon:
//         '\n <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>\n  ',
//       googleApis_preConnect:
//         '<link rel="preconnect" href="https://fonts.googleapis.com">',
//       website:
//         '\n * {\n box-sizing: border-box;margin: 0;padding: 0;font-family: "Roboto", sans-serif;\n }\n ',
//       html: "\n html,\n body {\n height: 100%;\n }\n ",
//       main: "\n main {\n height: 92%;\n margin-top: 10px;\n }\n ",
//       body: "\n body {\n background-color: #ffc107;\n }\n ",
//       header:
//         "\n header {\n background-color: rgba(255,255,255,.1);\n color: #a7e1ee;\n font-size: smaller;\n }\n ",
//       header_h1:
//         '\n header h1 {\n font-family: "Montserrat", cursive;\n margin-left: 15px;\n }\n ',
//       grid: "\n .grid {\n display: grid;\n }\n ",
//       flex_row: "\n .flex-row {\n display: flex;\n flex-direction: row;\n }\n ",
//       flex_column:
//         "\n .flex-column {\n display: flex;\n flex-direction: column;\n }\n ",
//     },
//   );
//   return result;
// };

function workEd(ed) {
  console.log(
    functionRegistry.time +
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
  }
  var sicSliceArray = flatArray.slice(1);
  var sheetUrl =
    "https://docs.google.com/spreadsheets/d/1-vNcN0vCLcXgMY9uwcKukUgv_4njggRZ6fqoZs-hBFE/edit#gid=138098962";
  var sheetName = "General Work Invoice";
  var numCols = colArray.length;
  return updateSheet(sheetUrl, sheetName, sicSliceArray, numCols, start)
    .myFileX;
}
// for (var val in formData[key]) {
//     flatArray.push(formData[key][val])}

// return dtlsPro(flatArray)
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
