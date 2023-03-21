function dateTime(date) {
  // Date and Time Picker Widget
  const dateTime = HtmlService.createTemplate(`
  <head>
  </head>
  <body>
    <?!= datePicker ?>
    <?!= timePicker ?>
    <script>
      function populateDates(disabledDays) 
        {//mod the array
        let datePicker = document.getElementById('prefDate');
        M.Datepicker.init(
        datePicker, 
          {defaultDate: ${new Date() - new Date(date).toLocaleDateString()},
          setDefaultDate: true,
          minDate: new Date(),
          disableDayFn: function(
        day) 
          {return disabledDays.indexOf(
        day.valueOf()) > -1;}});}
        document.addEventListener(
        'DOMContentLoaded', 
          function() 
            {let timePicker = document.getElementById(
        'prefTime');
        M.Timepicker.init(
        timePicker, 
          { defaultTime: "${new Date(date).toLocaleDateString()}" });
          google.script.run.withSuccessHandler(
        populateDates).runAll('foo.busyDates', []);});
    </script>
  </body>`);
  dateTime.dateAgenda = dateAgenda();
  dateTime.timePicker = HtmlService.createHtmlOutput(
    `
    <head>
      <link href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" rel="stylesheet"></link>
    </head>
    <body>
      <div class="row">
      <div class="agenda container col s4"><input  placeholder="${new Date(
        date
      ).getHours()}" class="timepicker blue" id="prefTime" type="text" />
      </div></div>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
    </body>`
  ).getContent();
  dateTime.datePicker = HtmlService.createHtmlOutput(
    `
    <head>
      <link href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" rel="stylesheet"></link>
    </head>
    <body>
      <div class="row">
      <div class="agenda container col s4"><input placeholder="${new Date(
        date
      ).getDay()}" class="datepicker red" id="prefDate" type="text" />
      </div></div>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
    </body>`
  ).getContent();
  return dateTime.evaluate().getContent();
} //:contentFile('uiAccess');
