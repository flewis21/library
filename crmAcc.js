function crmAcc(fx) {
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
  var objMaster = {
    miscellaneous: {
      section: [],
    },
  };
}

var finEd = function (ed) {
  console.log(
    JSON.stringify(this["start"]) +
      "\n" +
      arguments.callee.name +
      "\n!ed, = " +
      !ed,
  );
  if (!ed) {
    var formData = JSON.parse(
      convertToObjects([[testlt()]], ["name"], start),
    )[0];
  } else {
    for (var key in ed) {
      if (ed[key]) {
        try {
          var formData = JSON.parse(ed);
        } catch (error) {
          console.info(error.stack);
        }
      } else {
        var formData = JSON.parse(
          convertToObjects([[testlt()]], ["name"], start),
        )[0];
      }
    }
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
};
