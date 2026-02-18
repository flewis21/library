function storeFunction(xfactor) {
  var ssWs = ssGetSheetBySpreadsheetUrl(
    "https://docs.google.com/spreadsheets/d/1-vNcN0vCLcXgMY9uwcKukUgv_4njggRZ6fqoZs-hBFE/edit#gid=138098962",
    "Receive",
  );
  var rawData = ssWs.getDataRange().getValues();
  var data = rawData.slice(1);
  var dataHeaders = rawData.slice(0, 1);
  var headerArray = covSheetArrays(dataHeaders);
  var headerFactor = headerArray[0].map((dx) => {
    return dx[0];
  });
  var arrayJobs = JSON.stringify(convertToObjects(data, headerFactor));
  if (xfactor) {
    if (
      [arrayJobs]
        .join("")
        .toLowerCase()
        .indexOf([xfactor].join("").toLowerCase()) > -1
    ) {
      var booleFactor = [];
      JSON.parse(arrayJobs).map((dx) => {
        var neatR =
          dx[
            arrayJobs.slice(
              [arrayJobs]
                .join("")
                .toLowerCase()
                .indexOf([xfactor].join("").toLowerCase()),
              [arrayJobs]
                .join("")
                .toLowerCase()
                .indexOf([xfactor].join("").toLowerCase()) + xfactor.length,
            )
          ];
        // console.log(typeof neatR === "string")
        if ([neatR].join("").length > 0) {
          booleFactor.push(neatR);
        }
      });

      return booleFactor;
    }
  }

  var booleFactor = [];
  covArrays(arrayJobs).map((dx) => {
    var neatR = dx;
    // console.log(typeof neatR === "object")
    if ([neatR["Description"]].join("").length > 0) {
      // var friendNeat = new Date(neatR).toDateString()// .toLocaleString()// .toLocaleDateString()
      booleFactor.push(neatR);
    }
  });

  return booleFactor;
};

//   if ([xfactor].join("").toLowerCase() === "sku") {

//   var booleFactor = []
//   JSON.parse(arrayJobs).map((dx) => {

//       var neatR =  dx["SKU"]
//         // console.log(typeof neatR === "string")
//           if ([neatR].join("").length > 0) {
//             // var friendNeat = new Date(neatR).toDateString()// .toLocaleString()// .toLocaleDateString()
//          booleFactor.push(neatR)}
//       })

// return booleFactor
//       }

//   if ([xfactor].join("").toLowerCase() === "car") {

//   var booleFactor = []
//   JSON.parse(arrayJobs).map((dx) => {

//       var neatR =  dx["Car"]
//         // console.log(typeof neatR === "string")
//           if ([neatR].join("").length > 0) {
//          booleFactor.push(neatR)}
//       })

// return booleFactor
//       }

//   if ([xfactor].join("").toLowerCase() === "description") {

//   var booleFactor = []
//   JSON.parse(arrayJobs).map((dx) => {

//       var neatR =  dx["Description"]
//         // console.log(typeof neatR === "string")
//           if ([neatR].join("").length > 0) {
//          booleFactor.push(neatR)}
//       })

// return booleFactor
//       }

// if ([xfactor].join("").toLowerCase() === "pack size") {

// }

//   if ([xfactor].join("").toLowerCase() === "qty") {

//   var booleFactor = []
//   JSON.parse(arrayJobs).map((dx) => {

//       var neatR =  dx["QTY"];
//         // console.log(typeof neatR === "string")
//           if ([neatR].join("").length > 0) {
//          booleFactor.push(neatR)}
//       })

// return booleFactor
//       }

//   if ([xfactor].join("").toLowerCase() === "qty expanded") {

//   var booleFactor = []
//   JSON.parse(arrayJobs).map((dx) => {

//       var neatR =  dx["QTY EXPENDED"]
//         // console.log(typeof neatR === "string")
//           if ([neatR].join("").length > 0) {
//          booleFactor.push(neatR)}
//       })

// return booleFactor
//       }

//   if ([xfactor].join("").toLowerCase() === "cost per pack") {

//   var booleFactor = []
//   JSON.parse(arrayJobs).map((dx) => {

//       var neatR =  dx["COST PER PACK"]
//         // console.log(typeof neatR === "string")
//           if ([neatR].join("").length > 0) {
//          booleFactor.push(neatR)}
//       })

// return booleFactor
//       }

//   if ([xfactor].join("").toLowerCase() === "total cost") {

//   var booleFactor = []
//   JSON.parse(arrayJobs).map((dx) => {

//       var neatR =  dx["TOTAL COST"]
//         // console.log(typeof neatR === "string")
//           if ([neatR].join("").length > 0) {
//          booleFactor.push(neatR)}
//       })

// return booleFactor
//       }

//   if ([xfactor].join("").toLowerCase() === "cost per piece") {

//   var booleFactor = []
//   JSON.parse(arrayJobs).map((dx) => {

//       var neatR =  dx["COST PER PIECE"]
//         // console.log(typeof neatR === "string")
//           if ([neatR].join("").length > 0) {
//          booleFactor.push(neatR)}
//       })

// return booleFactor
//       }

//   if ([xfactor].join("").toLowerCase() === "date entered") {

//   var booleFactor = []
//   JSON.parse(arrayJobs).map((dx) => {

//       var neatR =  dx["Date Entered"]
//         // console.log(typeof neatR === "string")
//           if ([neatR].join("").length > 0) {
//          booleFactor.push(neatR)}
//       })

// return booleFactor
//       }

//   if ([xfactor].join("").toLowerCase() === "last modified") {

//   var booleFactor = []
//   JSON.parse(arrayJobs).map((dx) => {

//       var neatR =  dx["Last Modified"]
//         // console.log(typeof neatR === "string")
//           if ([neatR].join("").length > 0) {
//          booleFactor.push(neatR)}
//       })

// return booleFactor
//       }

//   if ([xfactor].join("").toLowerCase() === "search column") {

//   var booleFactor = []
//   JSON.parse(arrayJobs).map((dx) => {

//       var neatR =  dx["Search Column"]
//         // console.log(typeof neatR === "string")
//           if ([neatR].join("").length > 0) {
//          booleFactor.push(neatR)}
//       })

// return booleFactor
//       }

//   if ([xfactor].join("").toLowerCase() === "sales person") {

//   var booleFactor = []
//   JSON.parse(arrayJobs).map((dx) => {

//       var neatR =  dx["Sales Person"]
//         // console.log(typeof neatR === "string")
//           if ([neatR].join("").length > 0) {
//          booleFactor.push(neatR)}
//       })

// return booleFactor
//       }

//   if ([xfactor].join("").toLowerCase() === "complete") {

//   var booleFactor = []
//   JSON.parse(arrayJobs).map((dx) => {

//       var neatR =  dx["Complete"]
//         // console.log(typeof neatR === "string")
//           if ([neatR].join("").length > 0) {
//          booleFactor.push(neatR)}
//       })

// return booleFactor
//       }
