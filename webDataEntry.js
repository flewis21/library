function dataEntry() {
  return authLogic(typeof dataEntry === "undefined")
    ? (function () {
        const ws = ssGetSheetBySpreadsheetUrl(
          "https://docs.google.com/spreadsheets/d/1-vNcN0vCLcXgMY9uwcKukUgv_4njggRZ6fqoZs-hBFE/edit#gid=138098962",
          "General Work Invoice"
        );
        const car = ws
          .getRange(2, 2, ws.getRange("B2").getDataRegion().getLastRow(), 1)
          .getValues();
        const jobType = ws
          .getRange(3, 2, ws.getRange("C2").getDataRegion().getLastRow(), 1)
          .getValues();
        const vin = ws
          .getRange(4, 2, ws.getRange("D2").getDataRegion().getLastRow(), 1)
          .getValues();
        const data = sliceValues(ws.getDataRange().getValues(), 1);
        const list = [];
        for (var i = 0; i < data.length; i++) {
          list.push([data[i][1] + " " + data[i][2] + " - Vin/:" + data[i][3]]);
        }
        return renderTemplate(
          contentApp(
            "<html id='test'>\n\n<body>\n<div class='container'>\n<h1>Hello</h1>\n<!--Ideally these elements aren't created until it's confirmed that the client supports video/camera, but for the sake of illustrating the elements involved, they are created with markup (not JavaScript)-->\n<video id='video' width='640' height='480' autoplay></video>\n<button id='snap'>Snap Photo</button>\n<canvas id='canvas' width='640' height='480'></canvas>\n<label>ID:</label><input type='text' id='id'><br>\n<label>Search:</label><input type='text' id='search'><br>\n<div class='row'>\n<select id='dynSearch'>\n<option disabled selected>Search</option>\n<option id='dynList'></option>\n</select>\n</div>\n<label>Date:</label><input type='text' id='date'>\n<label>Car:</label><input type='text' id='car'><br>\n<label>Delivery/Pickup:</label><input type='text' id='jobType'>\n<label>Vin/Stock:</label><input type='text' id='vin'><br>\n<label>Delivery Address:</label><input type='text' id='toAddress'>\n<label>Labor:</label><input type='text' id='lab'><br>\n<label>Pickup Address:</label><input type='text' id='fromAddress'>\n<label>Gas Money:</label><input type='text' id='gas'><br>\n<label>Trip Time:</label><input type='text' id='duration'><br>\n<label>Total:</label><input type='text' id='grandTotal'><br>\n<button id='btn'>Run It!</button>\n<script>\ndocument.addEventListener('DOMContentLoaded', <?!= runIt ?>);\n</script>\n</div>\n<input type='hidden' value='<?= breakUrl ?>' id='url' />\n</body>\n</html>\n",
            {
              breakUrl: getUrl(ScriptApp) + "?default=ssDataEntry",
              list: list.map(function (r) {
                return r[0];
              }),
              runIt: function () {
                console.log(document.getElementById("test").innerHTML);
                console.log(document.getElementById("url").value);
                document
                  .getElementById("search")
                  .addEventListener("change", searchFind);
                document
                  .getElementById("btn")
                  .addEventListener("click", userRun);
                function recordsFound(res) {
                  document.getElementById("dynList").innerHTML = res;
                }
                function doStuff(res) {
                  console.log(res);
                  document.getElementById("id").value = result[0];
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
                function userRun() {
                  var findMe = document.getElementById("search").value;
                  google.script.run
                    .withSuccessHandler(doStuff)
                    .runAll("boilerplate.userSearch", [findMe]);
                  document.getElementById("search").value = "";
                  document.getElementById("dynList").innerHTML = "";
                }
                function searchFind() {
                  var findMe = document.getElementById("search").value;
                  google.script.run
                    .withSuccessHandler(recordsFound)
                    .runAll("boilerplate.userSearch", [findMe]);
                }
                var video = document.getElementById("video");
                if (
                  navigator.mediaDevices &&
                  navigator.mediaDevices.getUserMedia
                ) {
                  navigator.mediaDevices
                    .getUserMedia({ video: true })
                    .then(function (stream) {
                      var url = document.getElementById("url").value;
                      // video.src = url.createObjectURL(stream);
                      video.srcObject = stream;
                      video.play();
                    });
                }
                // Elements for taking the snapshot
                var canvas = document.getElementById("canvas");
                var context = canvas.getContext("2d");
                var video = document.getElementById("video");

                // Trigger photo take
                document
                  .getElementById("snap")
                  .addEventListener("click", function () {
                    context.drawImage(video, 0, 0, 640, 480);
                  });
              },
            }
          )
        );
      })()
    : (function () {
        return;
      })();
}
