// The main function that generates your web app HTML
// var crmGWI = function (fx) {
//   console.log(
//     functionRegistry.time +
//     "\n" +
//     arguments.callee.name +
//     "\n!" +
//     fx +
//     ", = " +
//     !fx,
//   );

//   // --- First contentApp call: For the main form HTML ---
//   var indexContent = (function index() {
//     console.log(functionRegistry.time + "\n" + arguments.callee.name);
//     return contentApp(
//       `
//     <h1>General Work Invoice</h1>
//     <form id="myForm">
//       <div>
//         <label for="date">Job Date:</label>
//         <input placeholder="<?!= ph ?>" class="datepicker" type="date" id="date" name="date"><br><br>

//         <label for="car">Car:</label>
//         <input type="text" id="car" name="car"><br><br>

//         <label for="delPick">Delivery/Pickup:</label>
//         <input type="text" id="delPick" name="delPick"><br><br>

//         <label for="vinSTK">Vin/STK#:</label>
//         <input type="text" id="vinSTK" name="vinSTK"><br><br>

//         <label for="delAddr">Delivery Address:</label>
//         <input type="text" id="delAddr" name="delAddr">
//         <div id="delAddrSuggestions" class="autocomplete-suggestions"></div>
//         <br>

//         <label for="lab">Labor:</label>
//         <input type="number" id="lab" name="lab"><br><br>

//         <label for="gas">Gas:</label>
//         <input type="number" id="gas" name="gas"><br><br>

//         <label for="total">Total:</label>
//         <input type="number" id="total" name="total"><br><br>

//         <label for="delTime">Delivery Time:</label>
//         <input type="number" id="delTime" name="delTime"><br><br>

//         <label for="pickAddr">Pickup Address:</label>
//         <input type="text" id="pickAddr" name="pickAddr">
//         <div id="pickAddrSuggestions" class="autocomplete-suggestions"></div>
//         <br>

//         <label for="id">Id:</label>
//         <input type="number" id="id" name="id"><br><br>

//         <button type="button" id="calculateCostsBtn" class="btn waves-effect waves-light">
//               Calculate Costs <i class="material-icons right">location_on</i>
//           </button>
//           <span id="calculationStatus" style="margin-left: 10px; color: grey;"></span>
//           <br><br>

//       </div>
//       <button type="submit">Submit</button>
//     </form>
// `,
//       {
//         ph: new Date().toLocaleDateString(),
//       },
//     );
//   })();

//   // --- Second contentApp call: For styles and client script ---
//   // Define the common styles and client script as a separate HTML blob
//   var commonHeaderAndScripts = contentApp(
//     `
//     <?!= utf_8 ?>
//     <?!= viewport ?>
//     <?!= googleApis_preConnect ?>
//     <?!= googleApisCss ?>
//     <?!= googleApisIcon ?>
//     <?!= fontAwesome ?>
//     <?!= materializeCss ?>
//     <style>
//       <?!= website ?>
//       <?!= html_body_styles ?>
//     </style>
//     <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
//     <script>
//       <?!= clientScript ?>
//     </script>
//     `,
//     {
//       utf_8: '<meta charset="UTF-8">',
//       viewport: '<meta name="viewport" content="width=device-width, initial-scale=1.0">',
//       fontAwesome: '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />',
//       googleApisCss: '<link href="https://fonts.googleapis.com/css2?family=Libre+Barcode+128&family=Montserrat:ital@1&family=Oswald&family=Roboto&display=swap" rel="stylesheet">',
//       googleApisIcon: '<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">',
//       googleApis_preConnect: '<link rel="preconnect" href="https://fonts.googleapis.com">',
//       materializeCss: '<link href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" rel="stylesheet">',
//       website: `
//         * {
//           box-sizing: border-box;
//           margin: 0;
//           padding: 0;
//           font-family: "Roboto", sans-serif;
//         }
//         a:link, a:visited {
//           color: #757575 !important;
//           font-size: 1em;
//           text-decoration: none;
//         }
//         a:hover, a:active {
//           color: black !important;
//           text-decoration: none !important;
//         }
//         .btn { /* Basic Materialize button styling */
//             background-color: #2196F3; /* Blue */
//             color: white;
//             padding: 10px 20px;
//             border: none;
//             border-radius: 5px;
//             cursor: pointer;
//             font-size: 1em;
//             text-transform: uppercase;
//             transition: background-color 0.3s ease;
//         }
//         .btn:hover {
//             background-color: #1976D2; /* Darker blue */
//         }
//       `,
//       html_body_styles: `
//         html, body {
//           height: 100%;
//         }
//         body {
//           background-color: #ffc107;
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           min-height: 100vh;
//           padding: 20px;
//         }
//         .app-container {
//           background-color: white;
//           padding: 30px;
//           border-radius: 10px;
//           box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//           width: 90%;
//           max-width: 800px;
//           margin-top: 20px;
//           margin-bottom: 20px;
//           position: relative;
//         }
//         nav {
//           width: 100%;
//           background-color: #4CAF50;
//           padding: 15px 0;
//           text-align: center;
//           box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
//           position: sticky;
//           top: 0;
//           z-index: 1000;
//         }
//         nav a {
//           color: white !important;
//           font-size: 1.2em;
//           text-decoration: none;
//           padding: 10px 20px;
//           border-radius: 5px;
//           transition: background-color 0.3s ease;
//         }
//         nav a:hover {
//           background-color: #45a049;
//         }
//         h1 {
//           font-size: 2.5em;
//           color: #333;
//           margin-bottom: 20px;
//           text-align: center;
//         }
//         form label {
//           font-size: 1em;
//           color: #555;
//           margin-bottom: 5px;
//           display: block;
//         }
//         form input[type="text"],
//         form input[type="date"],
//         form input[type="number"] {
//           width: 100%;
//           padding: 10px;
//           margin-bottom: 15px;
//           border: 1px solid #ddd;
//           border-radius: 5px;
//           font-size: 1em;
//         }
//         form button[type="submit"] {
//           background-color: #007bff;
//           color: white;
//           padding: 12px 25px;
//           border: none;
//           border-radius: 5px;
//           cursor: pointer;
//           font-size: 1.1em;
//           transition: background-color 0.3s ease;
//           display: block;
//           margin-top: 20px;
//         }
//         form button[type="submit"]:hover {
//           background-color: #0056b3;
//         }
//         @media (max-width: 600px) {
//           .app-container {
//             width: 95%;
//             padding: 15px;
//           }
//           h1 {
//             font-size: 2em;
//           }
//           form label, form input, form button {
//             font-size: 0.9em;
//           }
//         }
//         .autocomplete-suggestions {
//             border: 1px solid #ccc;
//             max-height: 200px;
//             overflow-y: auto;
//             background-color: white;
//             z-index: 100;
//             position: absolute;
//             width: 100%;
//             box-shadow: 0 2px 4px rgba(0,0,0,0.1);
//             margin-top: -15px;
//             left: 0;
//         }
//         .autocomplete-suggestions div {
//             padding: 8px 12px;
//             cursor: pointer;
//             border-bottom: 1px solid #eee;
//         }
//         .autocomplete-suggestions div:hover {
//             background-color: #f0f0f0;
//         }
//         .autocomplete-suggestions div:last-child {
//             border-bottom: none;
//         }
//       `,
//       clientScript: `
//         function serverside(func, args) {
//           return new Promise((resolve, reject) => {
//             google.script.run
//               .withSuccessHandler((result) => {
//                 console.log("Success handling:", result);
//                 resolve(result);
//               })
//               .withFailureHandler((error) => {
//                 console.error("Error handling:", error);
//                 alert("An error occurred: " + error.message);
//                 reject(error);
//               })
//               .runBoilerplate(func, args);
//           });
//         }

//         function debounce(func, delay) {
//           let timeout;
//           return function(...args) {
//             const context = this;
//             clearTimeout(timeout);
//             timeout = setTimeout(() => func.apply(context, args), delay);
//           };
//         }

//         function setupAutocomplete(inputId, suggestionsDivId) {
//           const input = document.getElementById(inputId);
//           const suggestionsDiv = document.getElementById(suggestionsDivId);

//           if (input && suggestionsDiv) {
//             const fetchSuggestions = debounce((query) => {
//               if (query.length < 3) {
//                 suggestionsDiv.innerHTML = '';
//                 return;
//               }
//               serverside('getSuggestions', [query])
//                 .then(suggestions => {
//                   suggestionsDiv.innerHTML = '';
//                   if (suggestions && suggestions.length > 0) {
//                     suggestions.forEach(suggestion => {
//                       const div = document.createElement('div');
//                       div.textContent = suggestion;
//                       div.addEventListener('click', () => {
//                         input.value = suggestion;
//                         suggestionsDiv.innerHTML = '';
//                       });
//                       suggestionsDiv.appendChild(div);
//                     });
//                   }
//                 })
//                 .catch(error => {
//                   console.error("Error fetching address suggestions for " + inputId + ":", error);
//                   suggestionsDiv.innerHTML = '<div>Error fetching suggestions.</div>';
//                 });
//             }, 300);

//             input.addEventListener('input', (event) => {
//               fetchSuggestions(event.target.value);
//             });

//             document.addEventListener('click', (event) => {
//               if (!input.contains(event.target) && !suggestionsDiv.contains(event.target)) {
//                 suggestionsDiv.innerHTML = '';
//               }
//             });

//             input.addEventListener('keydown', (event) => {
//               if (event.key === 'Escape') {
//                   suggestionsDiv.innerHTML = '';
//                   input.blur();
//               }
//             });

//           } else {
//               console.error("Input element '" + inputId + "' or suggestions div '" + suggestionsDivId + "' not found for autocomplete setup.");
//           }
//         }

//         document.addEventListener('DOMContentLoaded', function() {
//           // Materialize Datepicker Initialization
//           serverside('busyDates', [])
//             .then((disabledDays) => {
//               let datePickerElement = document.getElementById('date');
//               M.Datepicker.init(datePickerElement, {
//                 defaultDate: new Date("<?!= dateDefault ?>"),
//                 setDefaultDate: true,
//                 minDate: new Date(),
//                 disableDayFn: function(day) {
//                   return disabledDays.includes(day.valueOf());
//                 }
//               });
//             })
//             .catch((er) => {
//               console.error("Datepicker error:", er);
//               alert("Failed to load busy dates: " + er.message);
//             });

//           // Setup Autocomplete for Delivery Address
//           setupAutocomplete('delAddr', 'delAddrSuggestions');

//           // Setup Autocomplete for Pickup Address
//           setupAutocomplete('pickAddr', 'pickAddrSuggestions');

//           // NEW: Calculate Costs button logic
//           const calculateCostsBtn = document.getElementById('calculateCostsBtn');
//           const delAddrInput = document.getElementById('delAddr');
//           const pickAddrInput = document.getElementById('pickAddr');
//           const labInput = document.getElementById('lab');
//           const gasInput = document.getElementById('gas');
//           const totalInput = document.getElementById('total');
//           const delTimeInput = document.getElementById('delTime');
//           const calculationStatusSpan = document.getElementById('calculationStatus');

//           if (calculateCostsBtn && delAddrInput && pickAddrInput && labInput && gasInput && totalInput && delTimeInput && calculationStatusSpan) {
//               calculateCostsBtn.addEventListener('click', () => {
//                   const deliveryAddress = delAddrInput.value.trim();
//                   const pickupAddress = pickAddrInput.value.trim();

//                   if (!deliveryAddress || !pickupAddress) {
//                       alert('Please enter both Delivery and Pickup Addresses to calculate costs.');
//                       return;
//                   }

//                   calculateCostsBtn.disabled = true; // Disable button during calculation
//                   calculationStatusSpan.textContent = 'Calculating...';

//                   serverside('calculateTravelCosts', [deliveryAddress, pickupAddress])
//                       .then(results => {
//                           labInput.value = results.labor.toFixed(2);
//                           gasInput.value = results.gas.toFixed(2);
//                           totalInput.value = results.total.toFixed(2);
//                           delTimeInput.value = results.travelTimeMinutes; // Populate delivery time with travel duration
//                           calculationStatusSpan.textContent = 'Done!';
//                           console.log('Calculation Results:', results);
//                       })
//                       .catch(error => {
//                           console.error('Error during cost calculation:', error);
//                           calculationStatusSpan.textContent = 'Error: ' + error.message;
//                           alert('Could not calculate costs: ' + error.message);
//                       })
//                       .finally(() => {
//                           calculateCostsBtn.disabled = false; // Re-enable button
//                           setTimeout(() => calculationStatusSpan.textContent = '', 5000); // Clear status after 5 seconds
//                       });
//               });
//           } else {
//               console.error("One or more elements for cost calculation not found.");
//           }

//           // Form Submission Logic (existing code)
//           var form = document.getElementById('myForm');
//           form.addEventListener('submit', function(event) {
//             event.preventDefault();

//             var formData = {};
//             for (var i = 0; i < form.elements.length; i++) {
//               var element = form.elements[i];
//               if (element.name) {
//                 formData[element.name] = element.value;
//               }
//             }

//             serverside("workEd", [JSON.stringify(formData)])
//               .then((cChange) => {
//                 if (cChange) {
//                   console.log("cChange:", cChange);
//                   var cBlinkFollow = document.createElement("a");
//                   cBlinkFollow.href = cChange;
//                   cBlinkFollow.id = "cBlinkFOLLOW";
//                   cBlinkFollow.target = "_blank";
//                   document.body.appendChild(cBlinkFollow);
//                   cBlinkFollow.click();
//                   cBlinkFollow.remove();
//                 }
//               })
//               .catch((er) => {
//                 console.error("Submission error:", er);
//                 alert("Failed to submit form: " + er.message);
//               });
//           });
//         `, // End clientScript
//       dateDefault: new Date().toISOString(), // Pass dateDefault here for the clientScript template
//     }
//   );

//   var templateVariables = {
//     fx: fx,
//     link: getUrl(ScriptApp) + "?func=crmGWI&args=" + fx,
//     index: indexContent,
//     // We no longer need individual style/script variables here, as they're now in commonHeaderAndScripts
//     // dateDefault: new Date().toISOString(), // This is now passed to commonHeaderAndScripts directly
//     commonHeaderAndScripts: commonHeaderAndScripts, // This will embed the output of the second contentApp
//   };

//   var mainHtmlBlob = `
// <!DOCTYPE html>
// <html>
// <head>
//   <base target="_self">
//   <title>General Work Invoice</title>
//   <?!= commonHeaderAndScripts ?>
// </head>
// <body>
//   <nav>
//     <a id="caller" href="<?= link ?>" target="_top">update</a>
//   </nav>
//   <br>
//   <div class="app-container">
//     <?!= index ?>
//   </div>
// </body>
// </html>
// `;

//   var result = contentApp(mainHtmlBlob, templateVariables);
//   return result;
// };

function crmGWI(fx) {
  console.log(
    functionRegistry.time +
      "\n" +
      arguments.callee.name +
      "\n!" +
      fx +
      ", = " +
      !fx,
  );
  // var fx = e;
  var objMaster = { miscellaneous: { section: [] } };
  var result = contentApp(
    `
<!DOCTYPE html>
  <html>
    <head>
      <base target="_self">
      <style>
        <?!= website ?>
        .app-container {
          background-color: white;
          padding: 30px;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          width: 90%;
          max-width: 800px;
          margin-top: 20px;
          margin-bottom: 20px;
          position: relative;
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
        @media (max-width: 600px) {
          .app-container {
            width: 95%;
            padding: 15px;
          }
        }
      </style>
    </head>
    <body>
      <nav class="center">
        <a id="caller" href="<?= getUrl(ScriptApp) ?>?func=crmGWI&args=${fx}" target="_top">update</a>
      </nav>
      <br>
      <div class="center app-container" id="div"><?!= index ?></div>
    </body>
  </html>`,
    {
      index: (function index() {
        console.log(functionRegistry.time + "\n" + arguments.callee.name);
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
      html, body {
        height: 100%;
      }
      body: {color:metallic grey !important;
            font-size: 4.5em;
            margin-top: 10px;
            flex: 0 0 60px;
            justify-content: space-around;
            align-items: center;
            border: solid .5px;
            border-radius: 10px;
            margin: 0px 15px 5px 15px;
            background-color: #ffc107;
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            padding: 20px;}
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
          width: 100%;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          margin-top: -15px;
          left: 0;
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
    </style>
  <link href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" rel="stylesheet"></link>
  </head>
  <body>
    <h1>General Work Invoice</h1>
    <form id="myForm" style="font-size: 4.5em">
      <div style="font-size: 1em">
            <label for="date" style="font-size: 1em">Job Date:</label>
            <input placeholder="<?!= ph ?>" class="datepicker" type="date" id="date" name="date"><br><br>

            <label for="car" style="font-size: 1em">Car:</label>
            <input type="text" id="car" name="car"><br><br>

            <label for="delPick" style="font-size: 1em">Delivery/Pickup:</label>
            <input type="text" id="delPick" name="delPick"><br><br>

            <label for="vinSTK" style="font-size: 1em">Vin/STK#:</label>
            <input type="text" id="vinSTK" name="vinSTK">
            <div id="vinSTKSuggestions" class="autocomplete-suggestions"></div><br><br>

            <label for="delAddr" style="font-size: 1em">Delivery Address:</label>
            <input type="text" id="delAddr" name="delAddr">
            <div id="delAddrSuggestions" class="autocomplete-suggestions"></div><br><br>

            <label for="lab" style="font-size: 1em">Labor:</label>
            <input type="number" id="lab" name="lab"><br><br>

            <label for="gas" style="font-size: 1em">Gas:</label>
            <input type="number" id="gas" name="gas"><br><br>

            <label for="total" style="font-size: 1em">Total:</label>
            <input type="number" id="total" name="total"><br><br>

            <label for="delTime" style="font-size: 1em">Delivery Time:</label>
            <input type="number" id="delTime" name="delTime"><br><br>

            <label for="pickAddr" style="font-size: 1em">Pickup Address:</label>
            <input type="text" id="pickAddr" name="pickAddr">
            <div id="pickAddrSuggestions" class="autocomplete-suggestions"></div><br><br>

            <label for="id" style="font-size: 1em">Id:</label>
            <input type="number" id="id" name="id"><br><br>

            <button type="button" id="calculateCostsBtn" class="btn waves-effect waves-light">
              Calculate Costs <i class="material-icons right">location_on</i>
            </button>
            <span id="calculationStatus" style="margin-left: 10px; color: grey;"></span>
            <br><br>

            <button type="button" id="acceptQuoteBtn" class="btn waves-effect waves-light" style="background-color: #28a745; margin-top: 10px;" disabled>
                Accept Quote <i class="material-icons right">check_circle</i>
            </button>
            <br><br>

            <button type="button" id="updateQuoteBtn" class="btn waves-effect waves-light" style="background-color: #28a745; margin-top: 10px;" disabled>
                Update Quote <i class="material-icons right">check_circle</i>
            </button>
            <br><br>
      </div>
      <button type="submit">Submit</button>
    </form>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
    <script>
      function serverside(func, args) {
        return new Promise((resolve, reject) => {
          google.script.run
          .withSuccessHandler((result) => {
              resolve(result)})
          .withFailureHandler((error) => {
            alert("Error handling: ")
              // console.log(error)
              reject(error)})
          .runBoilerplate(func, args)})};
      // NEW: Get reference to the form itself to collect all data easily
      const form = document.getElementById('myForm'); // Assuming your form has id="myForm"
      form.addEventListener('submit', function(event) {
        event.preventDefault();
        var formData = {};
        for (var i = 0; i < form.elements.length; i++) {
          var element = form.elements[i];
          // let value = formData.get[element.name];
          // console.log("element", value)
          // if (value) {
          //   value = value.replace(/"/g, "");
          // }
          // formData.set(element.name, value);
          console.log("element", element);
          formData[element.name] = element.value;}
      // Send data to Google Apps Script server-side function
      serverside("workEd", [JSON.stringify(formData)])
      .then((cChange) => {
          if (cChange) {
            // console.log(cChange)
        var cBlinkFollow = document.createElement("a");
        cBlinkFollow.href = cChange.data;
        cBlinkFollow.id = "cBlinkFOLLOW";
        cBlinkFollow.target = "_blank";
        document.body.appendChild(cBlinkFollow);
      document.getElementById("cBlinkFOLLOW").click();
      document.getElementById("cBlinkFOLLOW").remove()}})
      .catch((er) => {
        alert(er)})});

      function debounce(func, delay) {
        let timeout;
        return function(...args) {
          const context = this;
          clearTimeout(timeout);
          timeout = setTimeout(() => func.apply(context, args), delay);
        };
      }

      function setupAutocomplete(inputId, suggestionsDivId, columnName) {

        // Client-side code
        const localSuggestionsCache = {};
        const input = document.getElementById(inputId);
        const suggestionsDiv = document.getElementById(suggestionsDivId);

        if (!input || !suggestionsDiv) {
          console.error("Input element " + inputId + " or suggestions div " + suggestionsDivId + " not found for autocomplete setup.");
          return;
        }
        
        serverside('chaseFunction', [columnName])
          .then((response) => { 
            // Rename 'fullList' to 'response' or 'payload' to avoid confusion
            // Access the actual array from the 'data' property
            let fullList = {};
            if (response && response.type === "object") {
              fullList = response.data;
            } else {
              console.warn("Expected an object with an array in 'data' from chaseFunction, received:", response);
              // Fallback to empty array if the structure is not as expected
              fullList = {};
            }
            localSuggestionsCache[columnName] = fullList
            // console.log('Successfully fetched full list for', columnName);
            // console.log('chaseFunction, [' + columnName + ']:' + JSON.stringify(localSuggestionsCache[columnName][0]))
          })
          .catch(error => {
            console.error("Error fetching address suggestions for " + inputId + ":", error);
            suggestionsDiv.innerHTML = '<div>Error fetching suggestions.</div>';
          });
          
        const fetchSuggestions = debounce((query) => {
          if (query.length < 3) {
            suggestionsDiv.innerHTML = '';
            return;
          }
          
          // Filter the local list instead of making a server call
          const localList = localSuggestionsCache[columnName] || [];
          // console.log("localSuggestionsCache[columnName] || [] ", localList)
          const suggestions = localList.filter(item => 
            String(item).toLowerCase().includes(query.toLowerCase())
          );
          
          suggestionsDiv.innerHTML = '';
          if (suggestions && suggestions.length > 0) {
            suggestions.forEach(suggestion => {
              // console.log(suggestion)
              const div = document.createElement('div');
              div.textContent = suggestion;
              div.addEventListener('click', () => {
                input.value = suggestion;
                suggestionsDiv.innerHTML = '';
              });
              suggestionsDiv.appendChild(div);
            });
          }

        }, 300);
        
        if (input && suggestionsDiv) {
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

      // Setup Autocomplete for Delivery Address
      setupAutocomplete('delAddr', 'delAddrSuggestions', "Delivery Address");

      // Setup Autocomplete for Pickup Address
      setupAutocomplete('pickAddr', 'pickAddrSuggestions', "Pickup address");

      // Setup Autocomplete for Pickup Address
      setupAutocomplete('vinSTK', 'vinSTKSuggestions', "Vin/Stk");

      // NEW: Calculate Costs button logic
      const calculateCostsBtn = document.getElementById('calculateCostsBtn');
      const delAddrInput = document.getElementById('delAddr');
      const pickAddrInput = document.getElementById('pickAddr');
      const labInput = document.getElementById('lab');
      const gasInput = document.getElementById('gas');
      const totalInput = document.getElementById('total');
      const delTimeInput = document.getElementById('delTime');
      const calculationStatusSpan = document.getElementById('calculationStatus');

      // NEW: Get reference to the Accept Quote button
      const acceptQuoteBtn = document.getElementById('acceptQuoteBtn');

      // NEW: Get reference to the Update Quote button
      const updateQuoteBtn = document.getElementById('updateQuoteBtn');
      
      if (calculateCostsBtn && delAddrInput && pickAddrInput && labInput && gasInput && totalInput && delTimeInput && calculationStatusSpan) {
        calculateCostsBtn.addEventListener('click', () => {
            const deliveryAddress = delAddrInput.value.trim();
            const pickupAddress = pickAddrInput.value.trim();
            const travelTimeMinutes = parseFloat(delTimeInput.value.trim());

            // --- Configuration (these should match your server-side values for consistency) ---
            const COST_PER_MINUTE_LABOR = 1.25; // Example: $1.25 per minute for labor
            const COST_PER_MILE_GAS = 0.50; // This will be tricky if not using distance directly


            if (!deliveryAddress || !pickupAddress) {
                alert('Please enter both Delivery and Pickup Addresses to calculate costs.');
                return;
            }

            if (isNaN(travelTimeMinutes) || travelTimeMinutes < 0) {
                alert('Please enter a valid positive number for Delivery Time.');
                delTimeInput.value = ''; // Clear invalid input
                return;
            }

            calculateCostsBtn.disabled = true; // Disable button during calculation
            acceptQuoteBtn.disabled = true; // NEW: Disable accept button during calculation
            updateQuoteBtn.disabled = true; // NEW: Disable update button during calculation
            calculationStatusSpan.textContent = 'Calculating...';


            serverside('calculateTravelCosts', [deliveryAddress, pickupAddress])
              .then((response) => { 
                // Rename 'results' to 'response' or 'payload' to avoid confusion
                // Access the actual array from the 'data' property
                let results = {};
                if (response && response.type === "object") {
                  results = response.data;
                } else {
                  console.warn("Expected an object with an array in 'data' from calculateTravelCosts, received:", response);
                  // Fallback to empty array if the structure is not as expected
                  results = {};
                }
                //mod the array
          
                // Since gas cost is per mile, and we only have time, we can either:
                // 1. Omit gas calculation for manual time input, or
                // 2. Estimate distance from time (e.g., average speed)
                // For simplicity here, we'll make gas cost proportional to time for manual input,
                // or you could choose to leave it to manual entry.
                const distanceMult = travelTimeMinutes / 15
                const ESTIMATED_AVG_SPEED_MPH = 30; // Example average speed
                const estimatedDistanceMiles = (travelTimeMinutes / 60) * ESTIMATED_AVG_SPEED_MPH; // Convert minutes to hours
                                  
                const laborCost =  results.labor * distanceMult;
                const laborCostStyle = laborCost.toFixed(2);
                const gasCost = results.gas * distanceMult; // Still based on estimated distance for gas
                const gasCostStyle = gasCost.toFixed(2);
                const totalCost = laborCost + gasCost;
                const totalCostStyle = totalCost.toFixed(2);
                const totalTravelTimeMinutes = results.travelTimeMinutes * distanceMult;

                labInput.value = laborCostStyle
                gasInput.value = gasCostStyle
                totalInput.value = totalCostStyle
                delTimeInput.value = totalTravelTimeMinutes; // Populate delivery time with travel duration
                calculationStatusSpan.textContent = 'Done!';
                acceptQuoteBtn.disabled = false; // NEW: Enable accept button after successful calculation
                updateQuoteBtn.disabled = false; // NEW: Enable updat quote button after successful calculation
                // console.log('Calculation Results:', results);
              })
              .catch(error => {
                  console.error('Error during cost calculation:', error);
                  calculationStatusSpan.textContent = 'Error: ' + error.message;
                  alert('Could not calculate costs: ' + error.message);
              })
              .finally(() => {
                  calculateCostsBtn.disabled = false; // Re-enable button
                  // Don't clear status immediately if user needs to see "Done!" before clicking Accept
                  // setTimeout(() => calculationStatusSpan.textContent = '', 5000); // Clear status after 5 seconds
              });
          });

        // NEW: Event listener for the Accept Quote button
        acceptQuoteBtn.addEventListener('click', () => {
          // 1. Gather all form data
          const formData = {};
          for (var i = 0; i < myForm.elements.length; i++) {
            var element = myForm.elements[i];
            // Only include elements with a name and a value
            if (element.name && element.value) {
              var element = form.elements[i];
              // let value = formData.get[element.name];
              // console.log("element", value)
              // if (value) {
              //   value = value.replace(/"/g, "");
              // }
              // formData.set(element.name, value);
              console.log("element", element);
              formData[element.name] = element.value;
            }
          }
          console.log("Accepted form", formData)

          // Optional: Add a confirmation dialog
          if (!confirm('Are you sure you want to accept this quote and submit?')) {
            return; // User cancelled
          }

          // Disable buttons during submission
          acceptQuoteBtn.disabled = true;
          updateQuoteBtn.disabled = true;
          calculateCostsBtn.disabled = true;
          calculationStatusSpan.textContent = 'Submitting Quote...';

          // 2. Send data to a new server-side function
          serverside("acceptQuote", [JSON.stringify(formData)])
            .then((response) => { 
                // Rename 'submitResult' to 'response' or 'payload' to avoid confusion
                // Access the actual array from the 'data' property
                let submitResult = {};
                if (response && response.type === "object") {
                  submitResult = response.data;
                } else if (response && /<[a-z][\s\S]*>/i.test(response.data)) {
                  submitResult = response.data
                  try {
                    window.location.href = "<?= homePage ?>?func=mis&args=contentFile,slideCard," + submitResult
                    // console.log("Client-side: Page re-rendered with new content from server.");
                  } 
                  catch (error) {
                    console.error("Client-side Error during full re-render:", error);
                    alert("Error re-rendering: " + error.message);
                  }
                } else {
                  console.warn("Expected an object with an array in 'data' from acceptQuote, received:", response);
                  // Fallback to empty array if the structure is not as expected
                  submitResult = {};
                }
              updateQuoteBtn.disabled = false; // NEW: Enable update button after successful quote submission
              console.log('Quote accepted successfully:', submitResult);
              calculationStatusSpan.textContent = 'Quote Accepted!';
              alert('Quote accepted and submitted successfully!');
              // Optional: Redirect or clear form after successful submission
              // window.top.location.href = getUrl(ScriptApp); // Redirect to homepage or confirmation page
              // myForm.reset(); // Clear the form
            })
            .catch((error) => {
              console.error('Error accepting quote:', error);
              calculationStatusSpan.textContent = 'Error submitting: ' + error.message;
              alert('Failed to accept quote: ' + error.message);
            })
            .finally(() => {
              // acceptQuoteBtn.disabled = false; // Re-enable (or keep disabled if form is reset/redirected)
              calculateCostsBtn.disabled = false;
              setTimeout(() => calculationStatusSpan.textContent = '', 5000); // Clear status after 5 seconds
            });
        });

        // NEW: Event listener for the Update Quote button
        updateQuoteBtn.addEventListener('click', () => {
          // 1. Gather all form data
          const formData = {};
          for (var i = 0; i < myForm.elements.length; i++) {
            var element = myForm.elements[i];
            // Only include elements with a name and a value
            if (element.name && element.value) {
              var element = form.elements[i];
              // let value = formData.get[element.name];
              // if (value) {
              //   value = value.replace(/"/g, "");
              // }
              // formData.set(element.name, value)
              console.log("element", element);
              formData[element.name] = element.value;
            }
          }
          console.log("Updated form", formData)

          // Optional: Add a confirmation dialog
          if (!confirm('Are you sure you want to accept this quote and submit?')) {
            return; // User cancelled
          }

          // Disable buttons during submission
          acceptQuoteBtn.disabled = true;
          updateQuoteBtn.disabled = true;
          calculateCostsBtn.disabled = true;
          calculationStatusSpan.textContent = 'Submitting Quote...';

          // 2. Send data to a new server-side function
          serverside("updateQuote", [JSON.stringify(formData)])
            .then((response) => { 
                // Rename 'submitResult' to 'response' or 'payload' to avoid confusion
                // Access the actual array from the 'data' property
                let submitResult = {};
                if (response && response.type === "object") {
                  submitResult = response.data;
                } else if (response && /<[a-z][\s\S]*>/i.test(response.data)) {
                  submitResult = response.data
                  try {
                    window.location.href = "<?= homePage ?>?func=mis&args=contentFile,slideCard," + submitResult
                    // console.log("Client-side: Page re-rendered with new content from server.");
                  } 
                  catch (error) {
                    console.error("Client-side Error during full re-render:", error);
                    alert("Error re-rendering: " + error.message);
                  }
                } else {
                  console.warn("Expected an object with an array in 'data' from updateQuote, received:", response);
                  // Fallback to empty array if the structure is not as expected
                  submitResult = {};
                }
              console.log('Quote updated successfully:', submitResult);
              calculationStatusSpan.textContent = 'Quote Updated!';
              alert('Quote updated and submitted successfully!');
              // Optional: Redirect or clear form after successful submission
              // window.top.location.href = getUrl(ScriptApp); // Redirect to homepage or confirmation page
              // myForm.reset(); // Clear the form
            })
            .catch((error) => {
              console.error('Error updating quote:', error);
              calculationStatusSpan.textContent = 'Error submitting: ' + error.message;
              alert('Failed to update quote: ' + error.message);
            })
            .finally(() => {
              updateQuoteBtn.disabled = false; // Re-enable (or keep disabled if form is reset/redirected)
              calculateCostsBtn.disabled = false;
              setTimeout(() => calculationStatusSpan.textContent = '', 5000); // Clear status after 5 seconds
            });
        });

      } else {
          console.error("One or more elements for cost calculation not found.");
      }


      serverside('busyDates', [])
      .then((response) => { 
        // Rename 'disabledDays' to 'response' or 'payload' to avoid confusion
        // Access the actual array from the 'data' property
        let disabledDays = [];
        if (response && response.type === "object" && Array.isArray(response.data)) {
          disabledDays = response.data;
        } else {
          console.warn("Expected an object with an array in 'data' from busyDates, received:", response);
          // Fallback to empty array if the structure is not as expected
          disabledDays = [];
        }//mod the array
        let datePicker = document.getElementById('date');
        M.Datepicker.init(datePicker, {
        defaultDate: "<?!= dateDefault ?>", 
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
            dateDefault: new Date() - new Date(new Date()).toLocaleDateString(),
            homePage: getScriptUrl(),
          },
        );
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

var workEd = function (ed) {
  console.log(
    functionRegistry.time +
      "\n" +
      arguments.callee.name +
      "\n!" +
      ed +
      ", = " +
      !ed,
  );
  if (!ed || typeof ed !== "object") {
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
    console.log("Object.keys(formData)", key);
    var cleanKey = key.substring(1, key.length - 1);
    colArray.push(JSON.stringify(cleanKey));
  });
  for (var key in formData) {
    console.log("formData object key", key);
    flatArray.push(formData[key]);
  }
  var sicSliceArray = flatArray.slice(1);
  var sheetUrl =
    "https://docs.google.com/spreadsheets/d/1-vNcN0vCLcXgMY9uwcKukUgv_4njggRZ6fqoZs-hBFE/edit#gid=138098962";
  var sheetName = "General Work Invoice";
  var numCols = colArray.length;
  return updateSheet(
    sheetUrl,
    sheetName,
    sicSliceArray,
    numCols,
    functionRegistry.time,
  ).myFileX;
}

// Assume getUrl and ScriptApp are defined elsewhere or passed in context if this is a templated function

// /**
//  * Server-side function to handle quote acceptance.
//  * This function receives the client-side form data after calculation.
//  * @param {string} formDataJson A JSON string of the form data.
//  * @return {string} A confirmation message or URL.
//  */
// function acceptQuote(formDataJson) {
//   let formData;
//   try {
//     if (!formDataJson) {
// formData = JSON.parse(
//   convertToObjects(
//     [[arguments.callee.name]],
//     ["name"],
//     functionRegistry.time,
//   ),
// )[0];
// console.log("Fake formData for quote acceptance:", formData);
//     } else {
//       formData = JSON.parse(formDataJson);
//       console.log("Received formData for quote acceptance:", formData);
//     }
// // Get form data from the request
// var arrayData = covArrays(formData);
// var colArray = [];
// const keys = Object.keys(formData);
// keys.forEach(function (key) {
//   console.log(key);
//   colArray.push(JSON.stringify(key));
// });
// var dataName = {
//   message: {
//     info: formData,
//   },
//   timestamp: new Date(),
// };
// const name = dataName.message.info["delAddr"];
// const rawSpreadSheet = spreadSheetCreate(
//   name,
//   name,
//   colArray,
//   arrayData,
//   start,
// );
// console.log(
//   "SpreadsheetApp.openByUrl(rawSpreadSheet.myFileX) ",
//   rawSpreadSheet.myFileX,
// );
// const ss = SpreadsheetApp.openByUrl(rawSpreadSheet.myFileX);

//     // --- Your Logic Here ---

//     // Example 1: Update a Google Sheet (assuming you have a spreadsheet ID)
//     const ssId = rawSpreadSheet.myFileXId || "YOUR_SPREADSHEET_ID_HERE"; // <--- IMPORTANT: Replace with your actual Spreadsheet ID
//     const sheetName = ss.getSheetName() || "Accepted Quotes"; // Or your main data sheet
//     const sheet = SpreadsheetApp.openById(ssId).getSheetByName(sheetName);

// if (!sheet) {
//   throw new Error(
//     `Sheet "${sheetName}" not found in spreadsheet ID "${ssId}".`,
//   );
// }

// // Append a new row with the accepted quote data
// // You'll need to map your formData keys to sheet columns
// const headerRow = sheet
//   .getRange(1, 1, 1, sheet.getLastColumn())
//   .getValues()[0];
// const newRow = [];

// // Example mapping: populate newRow based on headerRow and formData
// // This is a robust way to ensure data goes into correct columns
// headerRow.forEach((header) => {
//   const key = header.toLowerCase().replace(/[^a-z0-9]/g, ""); // Simple way to derive key from header, e.g., "Job Date" -> "jobdate"
//   if (formData.hasOwnProperty(key)) {
//     newRow.push(formData[key]);
//   } else {
//     // Handle cases where a form field doesn't directly map to a header
//     // Or if you want to add static data like a timestamp
//     if (header === "Timestamp") {
//       newRow.push(new Date());
//     } else if (header === "Status") {
//       newRow.push("Quote Accepted");
//     } else {
//       newRow.push(""); // Empty for unmapped columns
//     }
//   }
// });

// // A simpler (less robust against column changes) way if you know exact order:
// // newRow.push(formData.date);
// // newRow.push(formData.car);
// // newRow.push(formData.delPick);
// // // ... and so on for all your fields
// // newRow.push(formData.lab); // Ensure these are numbers if you need them as such in sheet
// // newRow.push(formData.gas);
// // newRow.push(formData.total);

//     sheet.appendRow(newRow);
//     console.log("Quote data appended to sheet:", sheetName);

//     // Example 2: Generate a PDF Invoice (requires Google Drive integration)
//     // This is more complex and would involve creating a Google Doc/Sheet template,
//     // filling it with data, and saving it as a PDF.
//     // var invoicePdfUrl = generateInvoicePdf(formData);

//     // Example 3: Send an Email Confirmation (requires MailApp or GmailApp)
//     // MailApp.sendEmail({
//     //   to: "client@example.com", // Get client email from formData or other source
//     //   subject: "Your Quote for " + formData.car + " is Accepted!",
//     //   htmlBody: `Dear Client,<br><br>
//     //              Your quote for the General Work Invoice has been successfully accepted.<br>
//     //              Total Cost: $${parseFloat(formData.total || 0).toFixed(2)}<br><br>
//     //              We will be in touch shortly to schedule the service.<br><br>
//     //              Thank you!`,
//     //   // attachments: [invoicePdfBlob] // If you generated a PDF
//     // });
//     // console.log('Email confirmation sent.');

//     return "Quote Accepted Successfully!"; // Return a success message or a URL for redirection
//   } catch (error) {
//     console.error("Error in acceptQuote:", error);
//     // It's good practice to re-throw or return an error object so the client-side catch block works
//     throw new Error("Failed to process quote acceptance: " + error.message);
//   }
// }

var acceptSsUrl = "";

/**
 * Server-side function to handle quote acceptance.
 * This function receives the client-side form data after calculation.
 * @param {string} formDataJson A JSON string of the form data.
 * @return {string} A confirmation message or URL.
 */
var acceptQuote = function (formDataJson) {
  let formData;
  try {
    // ... (rest of your existing code to parse formData)
    if (!formDataJson || typeof formDataJson !== "object") {
      // ... (your existing fallback logic)
      formData = JSON.parse(
        convertToObjects(
          [[formatDataJson || arguments.callee.name, "007", "Bugatti"]],
          ["name", "number", "car"],
          functionRegistry.time,
        ),
      )[0];
      console.log("Fake formData for quote acceptance:", formData);
    } else {
      formData = JSON.parse(formDataJson);
      console.log("Received formData for quote acceptance:", formData);
    }

    // ... (your existing code to get keys, create the new spreadsheet)
    // Get form data from the request
    var arrayData = covArrays(formData);
    var colArray = [];
    const keys = Object.keys(formData);
    keys.forEach(function (key) {
      console.log(key);
      colArray.push(JSON.stringify(key));
    });
    var dataName = {
      message: {
        info: formData,
      },
      timestamp: new Date(),
    };
    const name = dataName.message.info["name"] || dataName.message.info["id"];
    const sheetId =
      dataName.message.info["number"] || dataName.message.info["id"];
    const rawSpreadSheet = spreadSheetCreate(
      name,
      sheetId,
      colArray,
      arrayData,
      functionRegistry.time,
    );
    console.log(
      "SpreadsheetApp.openByUrl(rawSpreadSheet.myFileX) ",
      rawSpreadSheet.myFileX,
    );
    const ss = SpreadsheetApp.openByUrl(rawSpreadSheet.myFileX);
    // Assuming `rawSpreadSheet.myFileX` is the URL of your new spreadsheet
    // and `ss.getSheetName()` is the name of the sheet you want to PDF.
    const newSpreadsheetUrl = rawSpreadSheet.myFileX;
    const sheetToPDF = ss.getSheetName() || "Accepted Quotes";

    // ... (your existing code to append row to the main sheet)
    const ssId = rawSpreadSheet.myFileXId || "YOUR_SPREADSHEET_ID_HERE";
    const sheetName = ss.getSheetName() || "Accepted Quotes";
    const sheet = SpreadsheetApp.openById(ssId).getSheetByName(sheetName);

    // ... (your existing code to append a new row)
    if (!sheet) {
      throw new Error(
        `Sheet "${sheetName}" not found in spreadsheet ID "${ssId}".`,
      );
    }

    // Append a new row with the accepted quote data
    // You'll need to map your formData keys to sheet columns
    const headerRow = sheet
      .getRange(1, 1, 1, sheet.getLastColumn())
      .getValues()[0];
    const newRow = [];

    // Example mapping: populate newRow based on headerRow and formData
    // This is a robust way to ensure data goes into correct columns
    headerRow.forEach((header) => {
      const key = header.toLowerCase().replace(/[^a-z0-9]/g, ""); // Simple way to derive key from header, e.g., "Job Date" -> "jobdate"
      const valueKey = header.replace(/[^a-zA-Z0-9]/g, "");
      if (formData.hasOwnProperty(key)) {
        newRow.push(formData[key]);
        console.log("pushed formData[key]", formData[key]);
      } else if (formData.hasOwnProperty(valueKey)) {
        newRow.push(formData[valueKey]);
        console.log("pushed formData[key]", formData[valueKey]);
      } else {
        // Handle cases where a form field doesn't directly map to a header
        // Or if you want to add static data like a timestamp
        if (header === "Timestamp") {
          newRow.push(new Date());
          console.log("pushed new Date()", new Date());
        } else if (header === "Status") {
          newRow.push("Quote Updated");
          console.log("pushed Quote Updated", "Quote Updated");
        } else {
          newRow.push(""); // Empty for unmapped columns
          console.log("pushed blank space", "");
        }
      }
    });

    // A simpler (less robust against column changes) way if you know exact order:
    // newRow.push(formData.date);
    // newRow.push(formData.car);
    // newRow.push(formData.delPick);
    // // ... and so on for all your fields
    // newRow.push(formData.lab); // Ensure these are numbers if you need them as such in sheet
    // newRow.push(formData.gas);
    // newRow.push(formData.total);

    const lastRow = sheet.getLastRow();
    const lastRowData = sheet
      .getRange(lastRow, 1, 1, newRow.length)
      .getValues()[0];

    // Check if the new row matches the last row
    if (JSON.stringify(newRow) !== JSON.stringify(lastRowData)) {
      sheet.appendRow(newRow);
    }
    console.log("Quote data appended to sheet:", sheetName);

    // --- START OF NEW CODE TO GENERATE PDF INVOICE ---
    // const invoicePdfUrl = saveAsPDFToFolder(newSpreadsheetUrl, sheetToPDF);
    // console.log("Invoice PDF generated at: " + invoicePdfUrl);
    // --- END OF NEW CODE ---

    // Now, you can use the `invoicePdfUrl` in your email logic.
    // Example 3: Send an Email Confirmation (modified)
    // MailApp.sendEmail({
    //   to: "client@example.com", // Get client email from formData or other source
    //   subject: "Your Quote for " + formData.car + " is Accepted!",
    //   htmlBody: `Dear Client,<br><br>
    //             Your quote has been accepted. You can view your invoice here: <a href="${invoicePdfUrl}">View Invoice</a>`,
    //   // Note: You can't directly attach a URL, but linking to it is effective.
    // });
    // console.log('Email confirmation sent.');

    // You can return the PDF URL to the client-side for them to display or download.

    let slideRender = renderFile("slideCard", formData, "Success");
    return slideRender;
    return invoicePdfUrl;
  } catch (error) {
    console.error("Error in acceptQuote:", error);
    throw new Error("Failed to process quote acceptance: " + error.message);
  }
}

/**
 * Server-side function to handle quote updatance.
 * This function receives the client-side form data after calculation.
 * @param {string} formDataJson A JSON string of the form data.
 * @return {string} A confirmation message or URL.
 */
var updateQuote = function (formDataJson) {
  let formData;
  try {
    // ... (rest of your existing code to parse formData)
    if (!formDataJson) {
      // ... (your existing fallback logic)
      formData = JSON.parse(
        convertToObjects(
          [[arguments.callee.name, "007", "McClaren"]],
          ["name", "number", "car"],
          functionRegistry.time,
        ),
      )[0];
      // console.log("Fake formData for quote updatance:", formData);
    } else {
      formData = JSON.parse(formDataJson);
      // console.log("Received formData for quote updatance:", formData);
    }

    // ... (your existing code to get keys, create the new spreadsheet)
    // Get form data from the request
    var arrayData = covArrays(formData);
    var colArray = [];
    const keys = Object.keys(formData);
    keys.forEach(function (key) {
      // console.log(key);
      colArray.push(JSON.stringify(key));
    });
    var dataName = {
      message: {
        info: formData,
      },
      timestamp: new Date(),
    };
    const name = dataName.message.info["name"] || dataName.message.info["id"];
    const sheetId =
      dataName.message.info["number"] || dataName.message.info["id"];
    const rawSpreadSheet = ssNameIdFind(name, sheetId);
    // spreadSheetCreate(
    //   name,
    //   sheetId,
    //   colArray,
    //   arrayData,
    //   functionRegistry,time,
    // );
    // console.log(
    //   "SpreadsheetApp.openByUrl(rawSpreadSheet) ",
    //   rawSpreadSheet?.getUrl(),
    // );
    const ss = SpreadsheetApp.openByUrl(rawSpreadSheet?.getUrl());
    // Assuming `rawSpreadSheet` is the URL of your new spreadsheet
    // and `ss.getSheetName()` is the name of the sheet you want to PDF.
    const newSpreadsheetUrl = rawSpreadSheet?.getUrl();
    const sheetToPDF = ss.getSheetName() || "Updated Quotes";

    // ... (your existing code to append row to the main sheet)
    const ssId =
      ss?.getId() || rawSpreadSheet?.getId() || "YOUR_SPREADSHEET_ID_HERE";
    const sheetName = ss?.getSheetName() || "Updated Quotes";
    const sheet = SpreadsheetApp.openById(ssId).getSheetByName(sheetName);

    // ... (your existing code to append a new row)
    if (!sheet) {
      throw new Error(
        `Sheet "${sheetName}" not found in spreadsheet ID "${ssId}".`,
      );
    }

    // Append a new row with the updated quote data
    // You'll need to map your formData keys to sheet columns
    const headerRow = sheet
      .getRange(1, 1, 1, sheet.getLastColumn())
      .getValues()[0];
    const newRow = [];

    // Example mapping: populate newRow based on headerRow and formData
    // This is a robust way to ensure data goes into correct columns
    headerRow.forEach((header) => {
      const key = header.toLowerCase().replace(/[^a-z0-9]/g, ""); // Simple way to derive key from header, e.g., "Job Date" -> "jobdate"
      const valueKey = header.replace(/[^a-zA-Z0-9]/g, "");
      if (formData.hasOwnProperty(key)) {
        newRow.push(formData[key]);
        // console.log("pushed formData[key]", formData[key]);
      } else if (formData.hasOwnProperty(valueKey)) {
        newRow.push(formData[valueKey]);
        // console.log("pushed formData[key]", formData[valueKey]);
      } else {
        // Handle cases where a form field doesn't directly map to a header
        // Or if you want to add static data like a timestamp
        if (header === "Timestamp") {
          newRow.push(new Date());
          // console.log("pushed new Date()", new Date());
        } else if (header === "Status") {
          newRow.push("Quote Updated");
          // console.log("pushed Quote Updated", "Quote Updated");
        } else {
          newRow.push(""); // Empty for unmapped columns
          // console.log("pushed blank space", "");
        }
      }
    });

    // A simpler (less robust against column changes) way if you know exact order:
    // newRow.push(formData.date);
    // newRow.push(formData.car);
    // newRow.push(formData.delPick);
    // // ... and so on for all your fields
    // newRow.push(formData.lab); // Ensure these are numbers if you need them as such in sheet
    // newRow.push(formData.gas);
    // newRow.push(formData.total);

    const lastRow = sheet.getLastRow();
    const lastRowData = sheet
      .getRange(lastRow, 1, 1, newRow.length)
      .getValues()[0];

    // Check if the new row matches the last row
    if (JSON.stringify(newRow) !== JSON.stringify(lastRowData)) {
      sheet.appendRow(newRow);
    }
    // console.log("Quote data appended to sheet:", sheetName);

    // --- START OF NEW CODE TO GENERATE PDF INVOICE ---
    // const invoicePdfUrl = saveAsPDFToFolder(newSpreadsheetUrl, sheetToPDF);
    // console.log("Invoice PDF generated at: " + invoicePdfUrl);
    // --- END OF NEW CODE ---

    // Now, you can use the `invoicePdfUrl` in your email logic.
    // Example 3: Send an Email Confirmation (modified)
    // MailApp.sendEmail({
    //   to: "client@example.com", // Get client email from formData or other source
    //   subject: "Your Quote for " + formData.car + " is Updated!",
    //   htmlBody: `Dear Client,<br><br>
    //             Your quote has been updated. You can view your invoice here: <a href="${invoicePdfUrl}">View Invoice</a>`,
    //   // Note: You can't directly attach a URL, but linking to it is effective.
    // });
    // console.log('Email confirmation sent.');

    // You can return the PDF URL to the client-side for them to display or download.

    let slideRender = renderFile("slideCard", formData, "Success");

    return slideRender;
    return invoicePdfUrl;
  } catch (error) {
    console.error("Error in updateQuote:", error);
    throw new Error("Failed to process quote updatance: " + error.message);
  }
}

// You'll also need to ensure 'runBoilerplate' is defined, likely in your main Code.gs file
// For example:
// function runBoilerplate(funcName, args) {
//   if (typeof this[funcName] === "function") {
//     return this[funcName].apply(this, args);
//   } else {
//     throw new Error("Function " + funcName + " not found.");
//   }
// }

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
