
var addDates = function(title, startTime, endTime, series) {
    if (!series) {
        console.log("You did not specify series");
        addEventToCalendar(title, startTime, endTime);
    }
    else if (series) {
        console.log("You specified series of ".concat(series));
        addEventSeriesToCalendar(title, startTime, endTime, series);
    }
    // let busyDays = addDays()
    // switch (busyDays.length.toString()) {
    //   case  "0":
    //     const daysDateRange = dateFunction(series)
    //   return daysDateRange;
    //   default:
    //     const daysCalendarRange = addDays();
    //   return daysCalendarRange;
    // }
}

function addDays() {
    var startDate = new Date();
    var endDate = new Date(new Date().setYear(startDate.getFullYear() + 1));
    var calendar = CalendarApp.getDefaultCalendar();
    var events = calendar.getEvents(startDate, endDate);
    var days = events.map(function (e) { return e.getStartTime().valueOf(); });
    var uniqueDays = [];
    days.forEach(function (d) {
        if (uniqueDays.indexOf(d) === -1) {
            uniqueDays.push(d);
        }
    });
    return uniqueDays;
}

function busyDates() {
    console.log(Math.floor((maxTime - new Date() % (1000 * 60)) / 1000) + "\n" + arguments.callee.name)
  var calendars = CalendarApp.getAllCalendars()
  var myCalendar
    calendars.map((calendar) => {
      authLogic(calendar.isMyPrimaryCalendar())? 
        (function() {
          myCalendar = calendar.getId()
          return myCalendar})()
          :
        (function() {
          return})()})
  var startDate = new Date();
  var endDate = new Date(new Date().setYear(startDate.getFullYear()+1))
  var busyCalendar = CalendarApp.getCalendarsByName(myCalendar)[0]
  var events = busyCalendar.getEvents(startDate, endDate)
  var daysBusy = []
    events.map((event) => {
      daysBusy.push(event.getStartTime().setHours(0,0,0,0))});
  var uniqueBusy = []
    daysBusy.forEach((d) => {
      authLogic(uniqueBusy.indexOf(d) === -1)?
        (function() {
          uniqueBusy.push(d)})()
          :
        (function() {
          return})()})
  return uniqueBusy}
      
async function agendaDates() 
      {
Date.UTC(1970,0,1)
var ss = ssGetSheetBySpreadsheetUrl("https://docs.google.com/spreadsheets/d/1-vNcN0vCLcXgMY9uwcKukUgv_4njggRZ6fqoZs-hBFE/edit#gid=138098962", "Schedules");
var lr = ss.getLastRow();
var aData = ss.getDataRange().getValues();
// var titleData = ss.getRange(2,2,lr).getValues();
// console.log(titleData)
// var startDatesData = ss.getRange(2,3,lr).getValues();
// console.log(new Date(JSON.stringify(startDatesData[0])));
// var endDatesData = ss.getRange(2,4,lr).getValues();
// console.log(new Date(JSON.stringify(endDatesData[0])));
var headers = aData.slice(0);
var data = aData.slice(1, lr);
var calendars =  CalendarApp.getAllCalendars()
var myCalendar
calendars.map((calendar) => 
{authLogic(calendar.isMyPrimaryCalendar())?
(function() {myCalendar = calendar.getId()
    return myCalendar
    })():
(function() {return})()
})
// var startDate = new Date();
// var endDate = new Date(new Date().setYear(startDate.getFullYear()+1))
var busyCalendar = CalendarApp.getCalendarsByName(myCalendar)[0]
var nextDates = [];
var myObj = {};
 for( var i = 0;i<data.length;i++)
  {var title = data[i][1];
  var startTime = new Date(data[i][2]);
  var endTime = new Date(data[i][3]);
  busyCalendar.createEvent(title,startTime,endTime);
// var html = `
// <div>
// <p><em> Hello Scroll!<em>, 
// <br><span>  <h2>${busyCalendar.createEvent(title,startTime,endTime).getTitle()}</h2> on ${busyCalendar.createEvent(title,startTime,endTime).getStartTime().toLocaleString()} is scheduled. </span>
// <br>Best Regards.
// <br><a href=""></a></p>
// </div>`;
var tempTitle = [title].map((i) =>
{var myObj = {};
[title].forEach((d, index) => 
      {myObj[d] = i[index]
      })
  console.log(myObj)
  return myObj
      })
var tempStartTime = [startTime].map((i) =>
{var myObj = {};
[startTime].forEach((d, index) => 
      {myObj[d] = i[index]
      })
  console.log(myObj)
  return myObj
      })
var tempEndTime = [endTime].map((i) =>
{var myObj = {};
[endTime].forEach((d, index) => 
      {myObj[d] = i[index]
      })
  console.log(myObj)
  return myObj
      })
//  = 
  // {title: title,
  // startTime: startTime,
  // endTime: endTime
// }
nextDates.push(tempTitle,tempStartTime,tempEndTime);
// return temp
};
  // var uniqueAgenda = await nextDates.map((event) => 
  //     {busyCalendar.createEvent(busyCalendar.getEventById(event).getTitle(),busyCalendar.getEventById(event).getStartTime(), busyCalendar.getEventById(event).getEndTime())})
// var events = busyCalendar.getEvents(startDate, endDate)
// var daysBusy = []
// events.map((event) => 
// {daysBusy.push(event.getStartTime().setHours(0,0,0,0))
// });
// var uniqueBusy = []
// daysBusy.forEach((d) => 
// { authLogic(uniqueBusy.indexOf(d) === -1)?
// (function() {uniqueBusy.push(d)
//             })():
// (function() {return
//             })()
// })
console.log(nextDates)
return tempTitle
      }
      
function calCalendar() {
    var eCalId = CalendarApp.getDefaultCalendar();
    return eCalId;
}

var calRecurrence = function(series) {
    var recurrence = CalendarApp.newRecurrence()
        .addDailyRule()
        .until(series);
    return recurrence;
}

function dateAgenda() {
  console.log(Math.floor((maxTime - new Date() % (1000 * 60)) / 1000) + "\n" + arguments.callee.name)
  var sheetJSONSheet = ssGetSheetBySpreadsheetUrl("https://docs.google.com/spreadsheets/d/1-vNcN0vCLcXgMY9uwcKukUgv_4njggRZ6fqoZs-hBFE/edit#gid=138098962", "Schedules");
  var range = sheetJSONSheet.getDataRange();
  var data = range.getValues();
  var dates = mapValues(sliceValues(data, 1), 0);
  var uniqueData = dateModel(dates);
  return uniqueData;
  console.log(sheetJSONSheet.getName())
  console.log(uniqueData)
}
    // var ws = idSpreadSheet("1-vNcN0vCLcXgMY9uwcKukUgv_4njggRZ6fqoZs-hBFE/edit#gid=1223141535");
    // console.log(uniqueData)
    // var headings = data[0].map(function (val) {
    //     console.log(val);
    //     return val.toString().toLowerCase();
    // });
    // var noHeaders = data.slice(1);
    // var outputData = (covObjects(noHeaders, headings));

var dateFunction = function(series) {
    var days = mapValues(sliceValues(ssDataRange(), 1), series);
    var uniqueDays = [];
    days.forEach(function (d) {
        if (uniqueDays.indexOf(d) === -1) {
            uniqueDays.push(d);
        }
    });
    return uniqueDays;
}

var dateModel = function(days) {
  console.log(Math.floor((maxTime - new Date() % (1000 * 60)) / 1000) + "\n" + arguments.callee.name + "\ndays is !" + !days + ", = " + days)
  var uniqueDays = [];
  if (days) {
    days.forEach(function (d) {
        if (uniqueDays.indexOf(d) === -1) {
            uniqueDays.push(d)}})}
  return uniqueDays}

var flatten = function(input) {  
  console.log(input)
  var stocks = []
  if (!Array.isArray(input)) {
    return input}
  for (let data of input) {  
    stocks = stocks.concat(flatten(data))}
    return {
      myStock: stocks}}

var getCalendarBusyDays = function(dates) {
    var ws = ssSheet();
    var disabledDays = ws.getRange(dates).getValues();
    var days = disabledDays.map(function (e) { return e[0].valueOf(); });
    var uniqueDays = [];
    days.forEach(function (d) {
        if (uniqueDays.indexOf(d) === -1) {
            uniqueDays.push(d);
        }
    });
    return uniqueDays;
}

var getDates = function(series) {
    // if (!series) {
    //   addEventToCalendar(title, startTime, endTime);
    // }
    // else if (series) {
    //   addEventSeriesToCalendar(title, startTime, endTime, series);
    // }
    var busyDays = addDays();
    switch (busyDays.length.toString()) {
        case "0":
            var daysDateRange = dateFunction(series);
            return daysDateRange;
        default:
            var daysCalendarRange = addDays();
            return daysCalendarRange;
    }
}

var raise = function(acc, item) 
{  
  console.log(acc, item)
  if (Array.isArray(item)) 
  {
    return item.reduce(raise, acc);
  }
  return {
    myItem: [...acc, item]
}
}

var lower = function(array, callback, initial) 
{
  let acc = initial;
  for (let i = 0; i < array.length; i++)
  {
    acc = callback(acc, array[i], i, array);
    comsole.log(acc)
  }
  return {
    myCall: acc
}
}

var randomDay = function(disabledDays) 
                                      {
      disabledDays = dateAgenda()
      var populateDates = disabledDays.map
      (function(day) 
                    {
      return disabledDays.indexOf(day.valueOf()) > -1;
                     })
                                    // }
      console.log(new Date().valueOf())
      return populateDates
      console.log(disabledDays)
                                      };
                    
var sheetDates = function(colIndex) {
    var eventsDataRange = sliceValues(ssDataRange(), 1);
    for (var i = 0; i < eventsDataRange.length; i++) {
        return eventsDataRange[i][colIndex];
    }
}

var sheetUniqueDates = function(colIndex) {
    var eventsDataRange = sliceValues(ssDataRange(), 1);
    for (var i = 0; i < eventsDataRange.length; i++) {
        return eventsDataRange[i][colIndex].valueOf();
    }
}

