function dateTime() {
  // Date and Time Picker Widget
  const dateTime = contentApp(
    "\n  <head>\n\n  </head>\n <body>\n\n  <?!= datePicker ?>\n  <?!= timePicker ?>\n  <script>\n function populateDates(disabledDays) {\n  // mod the array\n  let datePicker = document.getElementById('prefDate');\n M.Datepicker.init(datePicker, { minDate: new Date(), setDefaultDate: true,\n  disableDayFn: function(day) {\n return disabledDays.indexOf(day.valueOf()) > -1;\n  }\n });\n }\n\n document.addEventListener('DOMContentLoaded', function() {\n  let timePicker = document.getElementById('prefTime');\n M.Timepicker.init(timePicker, { defaultTime: \"now\" });\n  google.script.run.withSuccessHandler(populateDates).dateAgenda();\n });\n </script>\n\n </body>\n  ",
    {
      dateAgenda: dateAgenda(),
      timePicker: contentApp(
        '\n <head>\n  <link href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" rel="stylesheet"></link>\n  </head>\n <body>\n  <div class="agenda container col s1">\n  <input class="timepicker" id="prefTime" type="text" />\n  </div>\n  <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>\n </body>\n '
      ),
      datePicker: contentApp(
        '\n <head>\n  <link href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" rel="stylesheet"></link>\n  </head>\n <body>\n  <div class="agenda container col s1">\n  <input class="datepicker" id="prefDate" type="text" />\n  </div>\n  <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>\n </body>\n '
      ),
    }
  );
  return contentApp(dateTime); //:contentFile('uiAccess');
}
