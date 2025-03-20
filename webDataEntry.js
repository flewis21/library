
function dataEntry() {
  return authLogic(typeof dataEntry === "undefined")?
  (function()
            {
  const ws = ssGetSheetBySpreadsheetUrl("https://docs.google.com/spreadsheets/d/1-vNcN0vCLcXgMY9uwcKukUgv_4njggRZ6fqoZs-hBFE/edit#gid=138098962", "General Work Invoice");
  const car = ws.getRange(2,2,ws.getRange("B2").getDataRegion().getLastRow(),1).getValues();
  const jobType = ws.getRange(3,2,ws.getRange("C2").getDataRegion().getLastRow(),1).getValues();
  const vin = ws.getRange(4,2,ws.getRange("D2").getDataRegion().getLastRow(),1).getValues();
  const data = sliceValues(ws.getDataRange().getValues(), 1);
  const list = [];
  for (var i=0; i<data.length;i++)
                                    {
      list.push([data[i][1] + " " + data[i][2] + " - Vin/:" + data[i][3]])
                                    }
  return HtmlService.createTemplate(contentApp(`
    <html id='test'>
      <body>
        <div class='container'>
          <h1>Hello</h1>
            <!--Ideally these elements aren't created until it's confirmed that the client supports video/camera, but for the sake of illustrating the elements involved, they are created with markup (not JavaScript)-->
              <video id='video' width='640' height='480' autoplay></video>
              <button id='snap'>Snap Photo</button>
              <canvas id='canvas' width='640' height='480'></canvas>
              <label>ID:</label><input type='text' id='id'><br>
              <label>Search:</label><input type='text' id='search'><br>
        <div class='row'>
          <select id='dynSearch'>
            <option disabled selected>Search</option>
            <option id='dynList'></option>
          </select>
        </div>
          <label>Date:</label><input type='text' id='date'>
          <label>Car:</label><input type='text' id='car'><br>
          <label>Delivery/Pickup:</label><input type='text' id='jobType'><br>
          <label>Vin/Stock:</label><input type='text' id='vin'><br>
          <label>Delivery Address:</label><input type='text' id='toAddress'><br>
          <label>Labor:</label><input type='text' id='lab'><br>
          <label>Pickup Address:</label><input type='text' id='fromAddress'><br>
          <label>Gas Money:</label><input type='text' id='gas'><br>
          <label>Trip Time:</label><input type='text' id='duration'><br>
          <label>Total:</label><input type='text' id='grandTotal'><br>
            <button id='btn'>Run It!</button>
        <script>
          document.addEventListener('DOMContentLoaded', <?!= runIt ?>);
        </script>
        </div>
          <input type='hidden' value='<?= breakUrl ?>' id='url' />
      </body>
    </html>`,
{
  breakUrl:
  getUrl(ScriptApp), 
  list:
  list.map(
  function(r)
              {
    return r[0];
                }), 
  runIt: 
  function() 
            {
    console.log(document.getElementById("test").innerHTML);
    console.log(document.getElementById("url").value)
    document.getElementById("search").addEventListener("change", searchFind)
    document.getElementById("btn").addEventListener("click", userRun);
      function recordsFound(res)
                                {
          document.getElementById("dynList").innerHTML = res
                                }
      function doStuff(res)
                         {
            console.log(res)
            document.getElementById("id").value = result[0] ;
            document.getElementById("search").value = search;
            document.getElementById("date").value = date;
            document.getElementById("car").value = car;
            document.getElementById("jobType").value = jobType;
            document.getElementById("vin").value = vin;
            document.getElementById("toAddress").value = toAddress;
            document.getElementById("lab").value = lab;
            document.getElementById("fromAddress").value = fromAddress;
            document.getElementById("gas").value = gas;
            document.getElementById("duration").value = duration;
            document.getElementById("grandTotal").value = grandTotal;
                          }
      function userRun()
                        {
        var findMe = document.getElementById("search").value
        google.script.run.withSuccessHandler(doStuff).runBoilerpate("userSearch", [findMe])
        document.getElementById("search").value = "";
        document.getElementById("dynList").innerHTML = "";
                         }
      function searchFind()
                            {
        var findMe = document.getElementById("search").value
        google.script.run.withSuccessHandler(recordsFound).runBoilerpate("userSearch", [findMe])
                            }
            var video = document.getElementById('video');
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({video: true}).then(function (stream) {
            var url = document.getElementById("url").value
            // video.src = url.createObjectURL(stream);
            video.srcObject = stream
            video.play();
        });
    }
      // Elements for taking the snapshot
      var canvas = document.getElementById('canvas');
      var context = canvas.getContext('2d');
      var video = document.getElementById('video');

      // Trigger photo take
      document.getElementById("snap").addEventListener("click", function() {
        context.drawImage(video, 0, 0, 640, 480);
      });
            }
})).evaluate().getContent()
            })():
  (function()
            {
    return
            })()
  
} 


var chaseFunction = function(xfactor) {
  var xfactor = "Car"
  var ssWs = ssGetSheetBySpreadsheetUrl("https://docs.google.com/spreadsheets/d/1-vNcN0vCLcXgMY9uwcKukUgv_4njggRZ6fqoZs-hBFE/edit#gid=138098962", "General Work Invoice");
  var data = ssWs.getDataRange().getValues().slice(1)
  var dataHeaders = ssWs.getDataRange().getValues().slice(0,1)
  var headerArray = covSheetArrays(dataHeaders);
  var headerFactor = headerArray[0].map((dx) => {

     return dx[0]

  })
  var arrayJobs = JSON.stringify(convertToObjects(data, headerFactor));
  if (xfactor) {

  
  if (arrayJobs.indexOf(xfactor) > -1) {
    if ([xfactor].join("").toLowerCase() === ["Date"].join("").toLowerCase()) {

    
    var booleFactor = []
    JSON.parse(arrayJobs).map((dx) => {

        var neatR =  dx["Date"]
          console.log(typeof neatR === "string")
            if ([neatR].join("").length > 0) {
              var friendNeat = new Date(neatR).toDateString()// .toLocaleString()// .toLocaleDateString()
           booleFactor.push(friendNeat)}
        })

  return JSON.stringify(booleFactor)
        }


    if ([xfactor].join("").toLowerCase() === ["Car"].join("").toLowerCase()) {

    
    var booleFactor = []
    JSON.parse(arrayJobs).map((dx) => {

        var neatR =  dx["Car"]
          console.log(typeof neatR === "string")
            if ([neatR].join("").length > 0) {
           booleFactor.push(neatR)}
        })

  return booleFactor
        }


    if ([xfactor].join("").toLowerCase() === ["Delivery/Pickup"].join("").toLowerCase()) {

    
    var booleFactor = []
    JSON.parse(arrayJobs).map((dx) => {

        var neatR =  dx["Delivery/Pickup"]
          console.log(typeof neatR === "string")
            if ([neatR].join("").length > 0) {
           booleFactor.push(neatR)}
        })

  return booleFactor
        }


    if ([xfactor].join("").toLowerCase() === ["Vin/Stk"].join("").toLowerCase()) {

    
    var booleFactor = []
    JSON.parse(arrayJobs).map((dx) => {

        var neatR =  dx["Vin/Stk"]
          console.log(typeof neatR === "string")
            if ([neatR].join("").length > 0) {
           booleFactor.push(neatR)}
        })

  return booleFactor
        }


    if ([xfactor].join("").toLowerCase() === ["Delivery Address"].join("").toLowerCase()) {

    
    var booleFactor = []
    JSON.parse(arrayJobs).map((dx) => {

        var neatR =  dx["Delivery Address"]
          console.log(typeof neatR === "string")
            if ([neatR].join("").length > 0) {
           booleFactor.push(neatR)}
        })

  return booleFactor
        }


    if ([xfactor].join("").toLowerCase() === ["Lab"].join("").toLowerCase()) {

    
    var booleFactor = []
    JSON.parse(arrayJobs).map((dx) => {

        var neatR =  dx["Lab"]
          console.log(typeof neatR === "string")
            if ([neatR].join("").length > 0) {
           booleFactor.push(neatR)}
        })

  return booleFactor
        }


    if ([xfactor].join("").toLowerCase() === ["Gas"].join("").toLowerCase()) {

    
    var booleFactor = []
    JSON.parse(arrayJobs).map((dx) => {

        var neatR =  dx["Gas"]
          console.log(typeof neatR === "string")
            if ([neatR].join("").length > 0) {
           booleFactor.push(neatR)}
        })

  return booleFactor
        }


    if ([xfactor].join("").toLowerCase() === ["Total"].join("").toLowerCase()) {

    
    var booleFactor = []
    JSON.parse(arrayJobs).map((dx) => {

        var neatR =  dx["Total"]
          console.log(typeof neatR === "string")
            if ([neatR].join("").length > 0) {
           booleFactor.push(neatR)}
        })

  return booleFactor
        }


    if ([xfactor].join("").toLowerCase() === ["Delivery Time (hours)"].join("").toLowerCase()) {

    
    var booleFactor = []
    JSON.parse(arrayJobs).map((dx) => {

        var neatR =  dx["Delivery Time (hours)"]
          console.log(typeof neatR === "string")
            if ([neatR].join("").length > 0) {
           booleFactor.push(neatR)}
        })

  return booleFactor
        }


    if ([xfactor].join("").toLowerCase() === ["Pickup address"].join("").toLowerCase()) {

    
    var booleFactor = []
    JSON.parse(arrayJobs).map((dx) => {

        var neatR =  dx["Pickup address"]
          console.log(typeof neatR === "string")
            if ([neatR].join("").length > 0) {
           booleFactor.push(neatR)}
        })

  return booleFactor
        }


    if ([xfactor].join("").toLowerCase() === ["id"].join("").toLowerCase()) {

    
    var booleFactor = []
    JSON.parse(arrayJobs).map((dx) => {

        var neatR =  dx["id"]
          console.log(typeof neatR === "string")
            if ([neatR].join("").length > 0) {
           booleFactor.push(neatR)}
        })

  return booleFactor
        }


    if ([xfactor].join("").toLowerCase() === ["Search Column"].join("").toLowerCase()) {

    
    var booleFactor = []
    JSON.parse(arrayJobs).map((dx) => {

        var neatR =  dx["Search Column"]
          console.log(typeof neatR === "string")
            if ([neatR].join("").length > 0) {
           booleFactor.push(neatR)}
        })

  return booleFactor
        }


    if ([xfactor].join("").toLowerCase() === ["Sales Person"].join("").toLowerCase()) {

    
    var booleFactor = []
    JSON.parse(arrayJobs).map((dx) => {

        var neatR =  dx["Sales Person"]
          console.log(typeof neatR === "string")
            if ([neatR].join("").length > 0) {
           booleFactor.push(neatR)}
        })

  return booleFactor
        }


    if ([xfactor].join("").toLowerCase() === ["Complete"].join("").toLowerCase()) {

    
    var booleFactor = []
    JSON.parse(arrayJobs).map((dx) => {

        var neatR =  dx["Complete"]
          console.log(typeof neatR === "string")
            if ([neatR].join("").length > 0) {
           booleFactor.push(neatR)}
        })

  return booleFactor
        }


    }

  }

    
    var booleFactor = []
    JSON.parse(arrayJobs).map((dx) => {

        var neatR =  dx
          console.log(typeof neatR === "object")
            if ([neatR["Description"]].join("").length > 0) {
              // var friendNeat = new Date(neatR).toDateString()// .toLocaleString()// .toLocaleDateString()
           booleFactor.push(neatR)}
        })

  return booleFactor}
  // var rawData = ssWs.getDataRange().getValues()
  // var i = 0
  // var l = dataHeaders.length
  // var dataArray = covSheetArrays(data);
  // var headerArray = []
  // for (var key in dataHeaders) {

  //     headerArray.push([]) 
  // for (var val in dataHeaders[key]) {
  //     headerArray[key].push([dataHeaders[key][val]]) 
  //     // return [headerArray]

  // }}
  // debugger
  // var rowDataX = dataArray.map((dx) => {

  //    return dx[1][0]

  // })
  // headerArray.toString().split(",")
  // console.log(typeof dataHeaders)
  // debugger
  // debugger
  // var myObj = {}
  
  //   var stringData = [rawData].map((b) => {
  //     var m = b.length
  //     for (i,m;i<m;i++) {

  //      console.log({"b": b[i]})

  //     }
  //     console.log(b)
  //     var rowR = b

  // return b
    

  // })
  // debugger
  //   var minH = dataHeaders.map((rh) => {

    
  //   console.log(rh[0])

    

  //     return myObj[rh[0]] = b
    
      
  // })
  // debugger

  // var dataObj = covObjects(data, dataHeaders.toString().split(","));
  // debugger


