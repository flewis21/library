function dateTime(date) {
  console.log(
    functionRegistry.time +
      "\n" +
      arguments.callee.name +
      "\ndate is !" +
      !date +
      ", = " +
      date,
  );
  // Date and Time Picker Widget
  var dateTime = HtmlService.createTemplate(`
  <html id="dateTime">
    <head>
      <base target="_top">
      <meta charset="utf-8">
      <meta name="dateTime" content="Boilerplate Date and Time Function">
      <meta name=viewport content="width=device-width, initial-scale=1">
      <link href="https://fonts.googleapis.com/css?family=Acme" rel="stylesheet">
      <style>
      
        /* This is the most likely culprit based on your computed styles */
        /* Make the date numbers a dark color */
        .datepicker-day-button {
          color: #424242 !important; /* A dark gray. Using !important ensures it overrides Materialize defaults and your other styles. */
        }

        /* Consider other states for the datepicker buttons if needed */
        /* Example: If today's date also disappears */
        .datepicker-table td.is-today .datepicker-day-button {
            color: #ff9800 !important; /* Example: orange for today's date */
        }
        /* Example: If selected dates' numbers disappear (often they should be white on a colored background) */
        .datepicker-table td.is-selected .datepicker-day-button {
            color: white !important; /* Keep white if the selected background is dark */
        }

        /*
        IMPORTANT NOTE ON YOUR GLOBAL TABLE RESETS:
        You have:
        table, thead, tbody, tr, th, td {
          all: unset !important;
          display: block !important;
        }
        AND
        th, td {
          flex: 1 !important;
          padding: 0 !important;
          margin: 0 !important;
          border: none !important;
          vertical-align: top !important;
          text-align: left !important;
        }

        While the "color" fix above should work, these extremely aggressive table resets
        could cause other layout issues with the Materialize datepicker (which uses a table).
        If you encounter further layout problems (e.g., misalignment of days, weird spacing),
        you might need to make these table resets less global or more specific to *only* the tables
        you intend to radically change (like your .receipt table),
        and *not* apply them to the datepicker's internal table.
        For now, apply the color fix first, as it's the direct solution to the numbers being invisible.
        */

      </style>
    </head>
    <body>
      <div class="container">
        <?!= datePicker ?>
        <?!= timePicker ?>
      </div>
      <div id="error_log"></div>
      <script> 
        function serverside(func, args) {
          return new Promise((resolve, reject) => {
            google.script.run
            .withSuccessHandler(result => {
                resolve(result)})
            .withFailureHandler(error => {
              console.log(error)
              console.log(document.getElementById("test").innerHTML)
              reject(error)})
            .runBoilerplate(func, args)})}; 
        document.addEventListener('DOMContentLoaded', function() {
          let timePicker = document.getElementById('prefTime');
          M.Timepicker.init(
            timePicker, {
            defaultTime: "now"});
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
          let datePicker = document.getElementById('prefDate');
          M.Datepicker.init(
          datePicker, {
            defaultDate: "<?!= dateDefault ?>", 
            setDefaultDate: true, 
            minDate: new Date(), 
            disableDayFn: function(day) {
              return disabledDays.indexOf(day.valueOf()) > -1;}})})
          .catch((er) => {
            document.getElementById("error_log").innerHTML = JSON.stringify(er)
          });});
      </script>
    </body>
  </html>`);
  dateTime.dateDefault = new Date() - new Date(date).toLocaleDateString();
  dateTime.timeDefault = new Date(date).toLocaleTimeString();
  dateTime.dateAgenda = dateAgenda();
  dateTime.timePicker = HtmlService.createHtmlOutput(
    contentApp(
      `
  <html id="dateTimeTimePicker">
    <head>
      <base target="_top">
      <meta charset="utf-8">
      <meta name="dateTimeTimePicker" content="Boilerplate dateTime function Time Picker">
      <meta name=viewport content="width=device-width, initial-scale=1">
      <link href="https://fonts.googleapis.com/css?family=Acme" rel="stylesheet">
      <link href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" rel="stylesheet"></link>
    </head>
    <body>
      <div class="row">
        <div class="menu z-depth-5 col s7 l7 m7 card-panel amber scale-out scale-in" style="font-size: 30px">
          <div class="container">
            <div class="col s7 l7 m7 receipt nav-wrapper deep-purple darken-1">
              <div class="agenda z-depth-5 btn-large card-panel blue scale-out scale-in receipt">
              <input  placeholder="<?!= ph ?>" class="timepicker menu-img z-depth-5 card-panel green scale-transition receipt toolbar toolbar_icon toolbar_iconHover scale-out scale-in" id="prefTime" type="text" /></div>
            </div>
          </div>
        </div>
      </div>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
    </body>
  </html>`,
      {
        ph: new Date(date).toLocaleTimeString(),
      },
    ),
  ).getContent();
  dateTime.datePicker = HtmlService.createHtmlOutput(
    contentApp(
      `
  <html id="dateTimeDatePicker">
    <head>
      <base target="_top">
      <meta charset="utf-8">
      <meta name="dateTimeDatePicker" content="Boilerplate dateTime function Date Picker">
      <meta name=viewport content="width=device-width, initial-scale=1">
      <link href="https://fonts.googleapis.com/css?family=Acme" rel="stylesheet">
      <link href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" rel="stylesheet"></link>
    </head>
    <body>
      <div class="row">
        <div class="menu z-depth-5 col s7 l7 m7 card-panel amber scale-out scale-in" style="font-size: 30px">
          <div class="container">
            <div class="col s7 l7 m7 receipt nav-wrapper deep-purple darken-1">
              <div class="agenda z-depth-5 btn-large card-panel blue scale-out scale-in receipt">
              <input placeholder="<?!= ph ?>" class="datepicker menu-img z-depth-5 card-panel red scale-transition receipt toolbar toolbar_icon toolbar_iconHover scale-out scale-in" id="prefDate" type="text" /></div>
            </div>
          </div>
        </div>
      </div>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
    </body>
  </html>`,
      {
        ph: new Date(date).toLocaleDateString(),
      },
    ),
  ).getContent();
  return dateTime.evaluate().getContent();
} //:contentFile('uiAccess');
