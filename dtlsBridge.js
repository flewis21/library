var dtlsPict 
  = function(snap, time) {snap
? snap
:snap 
  = objectOfS(["parameter"],[[["func", arguments.callee.name]]], Math.floor((maxTime - new Date() % (1000 * 60)) / 1000)).parameter["func"]
  console.log(Math.floor((maxTime - new Date() % (1000 * 60)) / 1000) + "\n" + arguments.callee.name + "\nsnap is !" + !snap + ", = " + snap + "\ntime is !" + !time + ", = " + time)
  if (typeof time === "undefined") {var time 
  = Math.floor((maxTime - new Date() % (1000 * 60)) / 1000)};var allTitleData 
  = [];var atdCount 
  = 0;var maxIterations 
  = 100// if (typeof snap === "undefined") {
    while (allTitleData.length === 0 && atdCount < maxIterations) {var uiArr 
    = matchManager("pictForms", snap, time);for (var key in uiArr) {
              if (uiArr[key]) {// console.log("dtlsPict: \n" + key.valueOf())
                if (uiArr[key].length > 0) {
                  if (snap) {[uiArr[key]][0].map((or) => {
                      if ([or].toString().toLowerCase().includes([snap].toString().toLowerCase()) && [or].indexOf("[") === -1) {
                        allTitleData.push(or)// console.log("dtlsPict: \n[" + or + "].toString().toLowerCase().includes([" + snap + "].toString().toLowerCase()): " + [or].toString().toLowerCase().includes([snap].toString().toLowerCase()))
                      }})}
                  else {[uiArr[key]][0].map((or) => {
                      if ([or].join("").indexOf("[") === -1) {allTitleData.push(or)// console.log("dtlsPict: \nallTitleData.push(" + or + ")")
                      }})}}}}atdCount++;console.log("dtlsPict: \nkey search progress " + atdCount)};var rndArrPoint 
                      = Math.floor(Math.random() * (Math.floor(allTitleData.length)));console.log("dtlsPict: \nvar " + rndArrPoint + " = Math.floor(Math.random() * (" + Math.floor(allTitleData.length) + "))");var arrPoint 
                      = allTitleData[rndArrPoint];console.log("dtlsPict: \nvar " + arrPoint + " = allTitleData[" + rndArrPoint + "]");var rndFilePoint 
                      = Math.floor(Math.random() * (Math.floor([arrPoint].length)));console.log("dtlsPict: \nvar " + rndFilePoint + " = Math.floor(Math.random() * (" + Math.floor([arrPoint].length) + "))");snap 
                      = [arrPoint][rndFilePoint];console.log("dtlsPict: \n" + snap + " = [arrPoint][" + rndFilePoint + "]");var arrData 
                      = coSort(time).title;console.log("dtlsPict: \nvar arrData = coSort(" + time + ").title");var tempNeed 
    = randomUtility(snap,arrData,time);
    if (tempNeed) {var utilNeed 
    = tempNeed.title}
    // return console.log("dtlsPict: \nvar " + utilNeed + " = randomUtility(" + snap,arrData,time + ").title")// }
  var search 
  = [snap].join("")
  // return console.log("dtlsPict: \nvar isProduct = formsUrls(" + search.toLowerCase(), "pictForms" + ")");
  var isProduct 
  = formsUrls(search.toLowerCase(), "pictForms")
  if (typeof isProduct === "string" && typeof isProduct !== "undefined"){// console.log("dtlsPictL \n")
    console.log("dtlsPict: \nDeclaring formUrl = FormApp.openByUrl(" + isProduct + ").getPublishedUrl()");var formUrl 
    = FormApp.openByUrl(isProduct).getPublishedUrl()
    return formUrl};var time 
    = start;var cokey 
    = snap || utilNeed
    if (cokey) {console.log("dtlsPict: \nvar boilerUrl = dtlsBridge(" + cokey, time + ")");var boilerUrl 
    = dtlsBridge(cokey, time)
      if (boilerUrl){
        return boilerUrl}}var coHelpText = "http://www.bing.com/images/search?q=" + encodeURIComponent(snap) + "+intitle:+-+AND+*&PC=U316&top=50&skip=0&FORM=CHROMN"
  console.log("dtlsPict: \nisProduct = formsUrls(" + [cokey].join("").toLowerCase(), "pictForms" + ")");isProduct 
  = formsUrls([cokey].join("").toLowerCase(), "pictForms")// console.log("Receiving from formUrls a(n) - " + typeof isProduct)
    if (typeof isProduct === "string" && isProduct !== "undefined"){console.log("dtlsPict: \nDeclaring formUrl = FormApp.openByUrl(" + isProduct + ").getPublishedUrl()");var formUrl 
    = FormApp.openByUrl(isProduct).getPublishedUrl()
      return formUrl}// var utiStr 
      // = skyNeed(cokey, time);var utiSeo 
      // = pastSeo(utiStr, time)
  console.log("dtlsPict: \nDeclaring seoArray = seoPictTime(" + [cokey].join(""), time + ")");var seoArray 
  = seoPictTime([cokey].join(""), time);var uti 
  = seoArray.playList;console.log("dtlsPict: \nDeclaring seoArrayVid = seoPastTime(" + [cokey].join(""), time + ")");var seoArrayVid 
  = seoPastTime([cokey].join(""), time);var utiVid 
  = seoArrayVid.playList;// console.log("Receiving from seoPictTime - ")
  return console.log("dtlsPict: \nDeclaring form = formMaker(" + [cokey].join("").toUpperCase(), "pictForms", time + ")");var form 
  = formMaker([cokey].join("").toUpperCase(), "pictForms", time)
  if (typeof form === "object"){// fileManager(form.getId(), "videoForms", time)
    form.addTextItem().setTitle("CUSTOM SEARCH").setRequired(true).setHelpText(coHelpText);form.setCollectEmail(true);uti.map((piece) => {
      if ([piece].join("").split('"')[1].indexOf("Logo.svg") !== -1 && [piece].join("").split('"')[1].indexOf("<") === -1 && [piece].join("").split('"')[1].indexOf("http") !== -1) {console.log("calling join with " + [piece] + " looking for index of < and http");var pieceStr 
      = [piece].join("").split('"')[1];console.log("Receiving from join - " + pieceStr)
    if (pieceStr) {var elaspeTime 
    = new Date() - time;var timeToExecute 
    = maxTime - elaspeTime;// console.log("piece: " + piece + "\nelaspeTime: " + elaspeTime)
    form.addPageBreakItem().setTitle([cokey].join(""));// form.addSectionHeaderItm().setTitle(pieceStr.split('"'))
    form.addDateItem().setHelpText("(DATE)");form.addSectionHeaderItem().setTitle("CODE-BREAKDOWN SHEET").setHelpText("Day Ext- Yellow\nNight Ext- Green\nDay Int- White\nNight Int- Blue");form.addTextItem();form.addTextItem().setHelpText("production company");form.addTextItem().setHelpText("production title/no.");form.addTextItem().setHelpText("breakdown page no.");form.addSectionHeaderItem().setTitle(cokey).setHelpText("scene name");form.addTextItem();form.addSectionHeaderItem().setTitle(cokey).setHelpText("description");form.addTextItem();form.addTextItem().setHelpText("page count");form.addSectionHeaderItem().setTitle("PRODUCTION NOTES").setHelpText("EXTRAS/SILENT BITS\n YELLOW\n\n\n\n\n");form.addParagraphTextItem();form.addSectionHeaderItem().setTitle("PRODUCTION NOTES").setHelpText("SPECIAL EFFECTS\n BLUE\n\n\n\n\n\n");form.addParagraphTextItem();form.addSectionHeaderItem().setTitle("PRODUCTION NOTES").setHelpText("PROPS\n VIOLET\n\n\n\n\n\n");form.addParagraphTextItem();form.addSectionHeaderItem().setTitle("PRODUCTION NOTES").setHelpText("VEHICLES/ANIMALS\n PINK\n\n\n\n\n\n");form.addParagraphTextItem();form.addSectionHeaderItem().setTitle("PRODUCTION NOTES").setHelpText("WARDROBE\n CIRCLE\n\n\n\n\n");form.addParagraphTextItem();form.addSectionHeaderItem().setTitle("PRODUCTION NOTES").setHelpText("MAKE-UP/HAIR\n ASTERISK\n\n\n\n\n");form.addParagraphTextItem();form.addSectionHeaderItem().setTitle("PRODUCTION NOTES").setHelpText("SOUND EFFECTS/MUSIC\n BROWN\n\n\n\n\n");form.addParagraphTextItem();form.addSectionHeaderItem().setTitle("PRODUCTION NOTES").setHelpText("SPECIAL EQUIPMENT\n BOX\n\n\n\n\n");form.addParagraphTextItem();console.log("calling UrlFetchApp with " + JSON.stringify(pieceStr));form.addImageItem()
      .setTitle(cokey + " storyboard")
      .setImage(UrlFetchApp.fetch(pieceStr))
      .setWidth(1012)
      .setAlignment(FormApp.Alignment.CENTER);form.addTextItem().setHelpText("scene no.").setRequired(true);form.addTextItem().setHelpText("int/ext").setRequired(true);form.addTextItem().setHelpText("day/night").setRequired(true)
      if (timeToExecute <= 6 * 60 * 1000 && timeToExecute >= 5.98 * 60 * 1000) {console.log("dtlsPict - \nthis function: " + arguments.callee.caller.name + "\nis calling: " + arguments.callee.name + "\nTime limit six minutes")}
    if (timeToExecute <= 5 * 60 * 1000 && timeToExecute >= 4.98 * 60 * 1000) {
      // console.log("that function: " + arguments.callee.caller.name + "\nthis function: " + arguments.callee.name + "\nTime limit five minutes")
    }
    if (timeToExecute <= 4 * 60 * 1000 && timeToExecute >= 3.98 * 60 * 1000) {
      // console.log("that function: " + arguments.callee.caller.name + "\nthis function: " + arguments.callee.name + "\nTime limit four minutes")
    }
    if (timeToExecute <= 3 * 60 * 1000 && timeToExecute >= 2.98 * 60 * 1000) {
      // console.log("that function: " + arguments.callee.caller.name + "\nthis function: " + arguments.callee.name + "\nTime limit three minutes")
    }
    if (timeToExecute <= 2 * 60 * 1000 && timeToExecute >= 1.98 * 60 * 1000) {
      // console.log("that function: " + arguments.callee.caller.name + "\nthis function: " + arguments.callee.name + "\nTime limit two minutes")
    }
    if (timeToExecute <= 1 * 60 * 1000 && timeToExecute >= .98 * 60 * 1000) {
      // console.log("that function: " + arguments.callee.caller.name + "\nthis function: " + arguments.callee.name + "\nTime limit one minute")
        }
        if (timeToExecute <= .05 * 60 * 1000) {console.log("piece: " + pieceStr[0] + "\ntimeToExecute: " + timeToExecute.valueOf())
          return}}}})
      // return surveyPlayer(utiVid, [cokey].join(""))
      var formUrl 
      = form.getPublishedUrl()
      return formUrl};var rndUti 
    = uti[randNum(uti)]}

var portPro = function(e) {
  if (e) {var boilerUrl = dtlsBridge(e, time)
    if (boilerUrl){return boilerUrl}};
  var isProduct = formsUrls([e].join("").toLowerCase(), "webForms");console.log(typeof isProduct)
  if (typeof isProduct === "string" && isProduct !== "undefined"){var formUrl = FormApp.openByUrl(isProduct).getPublishedUrl();return formUrl};var time = start;var arrData = coSort(time).title;var utilNeed = randomUtility(e,arrData).title;var cokey = e || utilNeed;var isProduct = formsUrls([cokey].join("").toLowerCase(), "webForms");console.log(typeof isProduct)
  if (typeof isProduct === "string" && isProduct !== "undefined"){var formUrl = FormApp.openByUrl(isProduct).getPublishedUrl();return formUrl};var seoArray = needBing([cokey].join(""), time);var uti = seoArray.myPlay;var form = formMaker([cokey].join("").toUpperCase(), "webForms", time)
  if (typeof form === "object"){form.setCollectEmail(true);uti.map((piece) => {while(piece){var srPiece = piece.indexOf("src2=");var svPiece = piece.indexOf("xmlns=");var srImgRes = [piece.slice(srPiece).toString().split("src2=")].join("").split('"')[1] 
    if ([svPiece].indexOf("svg") > -1){var svImgRes = [piece.slice(svPiece).toString().split("xmlns=")].join("").split('"')[1]}
    if (piece.indexOf("http") > -1){var elaspeTime = new Date() - time;var timeToExecute = maxTime - elaspeTime;form.addPageBreakItem().setTitle([cokey].join(""));form.addSectionHeaderItem().setTitle(piece)
      if (srImgRes || svImgRes){var imgUrl = srImgRes || svImgRes}
      if ([imgUrl].join("").length > 0) {form.addImageItem().setTitle(cokey + " storyboard").setImage(UrlFetchApp.fetch(imgUrl)).setWidth(1012).setAlignment(FormApp.Alignment.CENTER)}
      if (timeToExecute <= 6 * 60 * 1000 && timeToExecute >= 5.98 * 60 * 1000) {console.log("that function: " + arguments.callee.caller.name + "\nthis function: " + arguments.callee.name + "\nTime limit six minutes")}
      if (timeToExecute <= .05 * 60 * 1000) {console.log("piece: " + piece[0] + "\ntimeToExecute: " + timeToExecute.valueOf());return};return piece[0]};return}});var formUrl = form.getPublishedUrl();return formUrl};var rndUti = uti[randNum(uti)]}
  // var e = "qvar"
    // var namedVar = "pred"
    // var utiStr = skyNeed(cokey, time)
    // var utiSeo = pastSeo(utiStr, time)
  // fileManager(form.getId(), "webForms", time)
      // console.log("piece: " + piece + "\nelaspeTime: " + elaspeTime)
        // if (timeToExecute <= 5 * 60 * 1000 && timeToExecute >= 4.98 * 60 * 1000) {console.log("that function: " + arguments.callee.caller.name + "\nthis function: " + arguments.callee.name + "\nTime limit five minutes")}
        // if (timeToExecute <= 4 * 60 * 1000 && timeToExecute >= 3.98 * 60 * 1000) {console.log("that function: " + arguments.callee.caller.name + "\nthis function: " + arguments.callee.name + "\nTime limit four minutes")}
        // if (timeToExecute <= 3 * 60 * 1000 && timeToExecute >= 2.98 * 60 * 1000) {console.log("that function: " + arguments.callee.caller.name + "\nthis function: " + arguments.callee.name + "\nTime limit three minutes")
        // if (timeToExecute <= 2 * 60 * 1000 && timeToExecute >= 1.98 * 60 * 1000) {console.log("that function: " + arguments.callee.caller.name + "\nthis function: " + arguments.callee.name + "\nTime limit two minutes")}
        // if (timeToExecute <= 1 * 60 * 1000 && timeToExecute >= .98 * 60 * 1000) {console.log("that function: " + arguments.callee.caller.name + "\nthis function: " + arguments.callee.name + "\nTime limit one minute")}

var stockPro = function(e, time) {
  if (typeof e === "undefined") {
    var allTitleData = []
    var atdCount = 0
    while (allTitleData.length === 0) {
      var uiArr = matchManager("docForms", time)
            for (var key in uiArr) {
                if (uiArr[key].length > 0) {
                  console.log("stockPro: \nallTitleData.push(" + uiArr[key] + ")")
                  allTitleData.push(uiArr[key])
                }
              }
              atdCount++
              console.log("stockPro: \nkey search progress " + atdCount)
    }
      var rndArrPoint = Math.floor(Math.random() * (Math.floor(allTitleData.length)));
      var arrPoint = allTitleData[rndArrPoint]
      var rndFilePoint = Math.floor(Math.random() * (Math.floor(arrPoint.length)));
      // if (driveArr.length === 0) {
      //    e = undefined
      //    console.log("stockHistory: \nDeclaring e = " + typeof e)
      // } else {
      e = arrPoint[rndFilePoint];
      // }
    // var e = "bank"
    console.log("stockPro: \nDeclaring isProduct = formsUrls(" + [e].join("").toLowerCase(), "docForms" + ")")
    var isProduct = formsUrls([e].join("").toLowerCase(), "docForms")
    console.log(typeof isProduct)
    if (typeof isProduct === "string" && isProduct !== "undefined"){
      console.log("stockPro: \nDeclaring formUrl = FormApp.openByUrl(" + isProduct + ").getPublishedUrl()")
      var formUrl = FormApp.openByUrl(isProduct).getPublishedUrl()
      return formUrl}
  }
  if (e) {

    console.log("stockPro: \nDeclaring boilerUrl = dtlsBridge(" + e, time + ")")
    var boilerUrl = dtlsBridge(e, time)
    if (boilerUrl){

      return boilerUrl
    
      
    }

  }
    console.log("stockPro: \nDeclaring arrData = allInvestors(" + e, time + ")")
    var arrData = allInvestors(e, time)
    // var dataTitle = [arrData.title]
    // var coData = randomUtility(e, dataTitle)
    var cokey = arrData.title
    var yahooNeed = arrData.ticker
    var coHelpText = arrData.edgarUrl
    console.log("stockPro: \nDeclaring isProduct = formsUrls(" + [cokey].join("").toLowerCase(), "docForms" + ")")
    var isProduct = formsUrls([cokey].join("").toLowerCase(), "docForms")
    console.log(typeof isProduct)
    if (typeof isProduct === "string" && isProduct !== "undefined"){
      console.log("stockPro: \nDeclaring formUrl = FormApp.openByUrl(" + isProduct + ").getPublishedUrl()")
      var formUrl = FormApp.openByUrl(isProduct).getPublishedUrl()
      console.log("stockPro: \nDeclaring survey = seoCapital(" + formUrl + ")")
      var survey = seoCapital(formUrl)
    } 
    else {
      console.log("stockPro: \nDeclaring uti = bingSWF(" + [cokey].join("") + ").myPlay")
    var uti = bingSWF([cokey].join("")).myPlay
    console.log("stockPro: \nDeclaring form = formMaker(" + [cokey].join("").toUpperCase(), "docForms", time + ")")
  var form = formMaker([cokey].join("").toUpperCase(), "docForms", time)
  if (typeof form === "object"){
  // fileManager(form.getId(), "docForms", time)

    form.addTextItem().setTitle("Stock Price").setRequired(true);
    form.addTextItem().setTitle("Outstanding Shares").setRequired(true).setHelpText(coHelpText);
    form.setCollectEmail(true);
    uti.map((piece) => {
    while(piece){
      if (piece) {
        if (piece.indexOf("https://") > -1){
      var elaspeTime = new Date() - time
      var timeToExecute = maxTime - elaspeTime
      // console.log("piece: " + piece + "\nelaspeTime: " + elaspeTime)
        form.addPageBreakItem().setTitle([yahooNeed].join(""));
        form.addSectionHeaderItem().setTitle(piece);
        form.setTitle(arrData.rndTitle)
            .setConfirmationMessage('Thanks for your feedback !!');      
        if (timeToExecute <= 6 * 60 * 1000 && timeToExecute >= 5.98 * 60 * 1000) {
      console.log("that function: " + arguments.callee.caller.name + "\nthis function: " + arguments.callee.name + "\nTime limit six minutes")
    }if (timeToExecute <= 5 * 60 * 1000 && timeToExecute >= 4.98 * 60 * 1000) {
      // console.log("that function: " + arguments.callee.caller.name + "\nthis function: " + arguments.callee.name + "\nTime limit five minutes")
    }if (timeToExecute <= 4 * 60 * 1000 && timeToExecute >= 3.98 * 60 * 1000) {
      // console.log("that function: " + arguments.callee.caller.name + "\nthis function: " + arguments.callee.name + "\nTime limit four minutes")
    }if (timeToExecute <= 3 * 60 * 1000 && timeToExecute >= 2.98 * 60 * 1000) {
      // console.log("that function: " + arguments.callee.caller.name + "\nthis function: " + arguments.callee.name + "\nTime limit three minutes")
    }if (timeToExecute <= 2 * 60 * 1000 && timeToExecute >= 1.98 * 60 * 1000) {
      // console.log("that function: " + arguments.callee.caller.name + "\nthis function: " + arguments.callee.name + "\nTime limit two minutes")
    }if (timeToExecute <= 1 * 60 * 1000 && timeToExecute >= .98 * 60 * 1000) {
      // console.log("that function: " + arguments.callee.caller.name + "\nthis function: " + arguments.callee.name + "\nTime limit one minute")
    }if (timeToExecute <= .05 * 60 * 1000) {
      console.log("piece: " + piece[0] + "\ntimeToExecute: " + timeToExecute.valueOf())
      return}
      return piece[0] 
          }} 
      return
        }    
      })
      var formUrl = form.getPublishedUrl()
      var survey = seoCapital(formUrl)}}
  // var arrTickerData = yahooSort(yahooNeed, time)
  // var price = JSON.parse(arrTickerData.price)
  // var markTime = new Date(JSON.parse(arrTickerData.time)).toLocaleTimeString()
  // var currency = arrTickerData.currency[0]
  // var currencySymbol = arrTickerData.currencySymbol[0]
  // var freeTime = markTime.toLocaleTimeString()

  // var data = JSON.parse(arrTickerData)
  // var res = JSON.stringify(
  //   {

  //     price,
  //     markTime,
  //     currency,
  //     currencySymbol

  //   }
  //   )

 var html = HtmlService.createTemplate( 

  `
      <html id="test">
      
        <head>
        
          <base target="_top">
          <meta charset="utf-8">
          <meta name="description" content="Example meta description.">
          <meta name=viewport content="width=device-width, initial-scale=1">
          <link href="https://fonts.googleapis.com/css?family=Acme" rel="stylesheet">
        
        </head>
      
      <body>
      


      
      </body>
      </html>

  ` 
  
  )
console.log(eval(html))
return formUrl
return html.evaluate()
.append(survey)
.getContent()}


var stockHistory = function(e) {
  var eDrive = folderManager()
  var driveArr = [];
  var allTitleData = []
  // else 
  // if (typeof e === "undefined") {
  while (driveArr.length === 0 && allTitleData.length === 0) {
    if (typeof e === "undefined" && driveArr.length === 0) {
      var rndDrivePoint = Math.floor(Math.random() * (Math.floor(eDrive.length)))
      var eFolder = eDrive[rndDrivePoint]
      // return console.log(eFile)
      // return console.log(e)
      // var uniqueE = JSON.parse(e)
      var eFile = matchManager(eFolder)
        for (var key in eFile) {
            if (eFile[key].length > 0) {
              console.log(eFile[key])
              driveArr.push(eFile[key])
            }
          }
      // var rndArrPoint = Math.floor(Math.random() * (Math.floor(driveArr.length)));
      // var arrPoint = driveArr[rndArrPoint]
      // var rndFilePoint = Math.floor(Math.random() * (Math.floor([arrPoint].length)));
      // var eRndFile = arrPoint[rndFilePoint];
      var e = eFolder
    }
    if (e) {
      var boilerUrl = dtlsBridge([e].join("").toLowerCase(), time)
      if (boilerUrl) {
        console.log("stockHistory: \n" + e, "  ", typeof e)
        return boilerUrl        
      }
      var atdCount = 0
      // while (allTitleData.length === 0) {
        // if (returnfolderArr) {

        //   return console.log(JSON.stringify(eFolder))
        // }
          console.log("stockHistory: \nDeclaring returnfolderArr = folderMatch(" + [e].join("").toLowerCase(), [eDrive] + ")")
          var returnfolderArr = folderMatch([e].join("").toLowerCase(), eDrive)
          var rndReturnPoint = Math.floor(Math.random() * (Math.floor(returnfolderArr.length)))
          var eFolder = returnfolderArr[rndReturnPoint]
          var uiArr = matchManager(eFolder)
            for (var key in uiArr) {
                if (uiArr[key].length > 0) {
                  allTitleData.push(uiArr[key])
                }
              }
              atdCount++
              console.log("stockHistory: \nkey search progress " + atdCount)
        // return JSON.stringify(allTitleData)
    // }
      var rndArrPoint = Math.floor(Math.random() * (Math.floor(allTitleData.length)));
      var arrPoint = allTitleData[rndArrPoint]
      var rndFilePoint = Math.floor(Math.random() * (Math.floor([arrPoint].length)));
      if (driveArr.length === 0) {
         e = undefined
         console.log("stockHistory: \nDeclaring e = " + typeof e)
      } else {
      e = arrPoint[rndFilePoint];
      }
    // e = allTitleData
  } 
}
  // }

  // return console.log(driveArr)
  // return console.log(eFile)
  // else if (e) {
  // }
    console.log("stockHistory: \nDeclaring isProduct = formsUrls(" + [e].join("").toLowerCase(), "docForms" + ")")
    var isProduct = formsUrls([e].join("").toLowerCase(), "docForms")
    // return console.log(typeof isProduct)
    if (typeof isProduct === "string" && isProduct !== "undefined") {
      console.log("stockHistory: \nDeclaring formUrl = FormApp.openByUrl(" + isProduct + ").getPublishedUrl()")
      var formUrl = FormApp.openByUrl(isProduct).getPublishedUrl()
      return formUrl
    }
      var time = start
      if (typeof eFolder === "undefined") {
        var unArr = []
        while (unArr.length === 0) {
          var rndUnPoint = Math.floor(Math.random() * (Math.floor(eDrive.length)))
          var unFolder = eDrive[rndUnPoint]
          var unFile = matchManager(unFolder)
          // return console.log(e)
          // var uniqueE = JSON.parse(e)
            for (var key in unFile) {
                if (unFile[key].length > 0) {
                  unArr.push(unFile[key])
                }
              }
            }   
          var rndUnPoint = Math.floor(Math.random() * (Math.floor(unArr.length)));
          var unPoint = unArr[rndUnPoint]
          var rndUnFilePoint = Math.floor(Math.random() * (Math.floor(unPoint.length)));
          var unE = unPoint[rndUnFilePoint]
          console.log("stockHistory: \nDeclaring myFolderHistory = DriveApp.getFoldersByName(" + unFolder + ").next()")
          var myFolderHistory = DriveApp.getFoldersByName(unFolder).next();
          console.log("stockHistory: \nDeclaring myFileHistory = myFolderHistory.getFilesByName(" + [unE].join("").toLowerCase() + ")")
          var myFileHistory = myFolderHistory.getFilesByName([unE].join("").toLowerCase());
        }
        else {
          // console.log("stockHiatory: \n" + arrData, " :", typeof arrData)
          // console.log(eFolder)
          // console.log("stockHistory: \nDeclaring  = (" +  + ")")
          console.log("stockHistory: \nDeclaring myFolderHistory = DriveApp.getFoldersByName(" + eFolder + ").next()")
          var myFolderHistory = DriveApp.getFoldersByName(eFolder).next();
          console.log("stockHistory: \nDeclaring myFileHistory = myFolderHistory.getFilesByName(" + [e].join("").toLowerCase() + ")")
          var myFileHistory = myFolderHistory.getFilesByName([e].join("").toLowerCase());
        }
      // return console.log(myFileHistory)
      var dataTree = []
      var nameTree = []
        while (myFileHistory.hasNext()) {
          var myFile = myFileHistory.next()
          var currentFileUrl =  myFile.getUrl();
          var currentFileName =  myFile.getName();
          // console.log("stockHistory: \nDeclaring  = (" +  + ")")
          console.log("stockHistory: \n dataTree.push(" + currentFileUrl + ")")
          dataTree.push(currentFileUrl)
          console.log("stockHistory: \n nameTree.push(" + currentFileName + ")")
          nameTree.push(currentFileName)
      } 
      var rndFiled = Math.floor(Math.random() * (Math.floor(dataTree.length))) 
    // var arrData = nameTree[rndFiled]
    // var utilNeed = randomUtility(e,arrData).title
    // var yahooNeed = arrData.ticker
    // console.log("stockHistory: \nDeclaring  = (" +  + ")")
    console.log("stockHistory: \nDeclaring coHelpText = dataTree[" + rndFiled + "]")
    var coHelpText = dataTree[rndFiled]
    console.log("stockHistory: \nDeclaring cokey = nameTree[" + rndFiled + "]")
    var cokey = nameTree[rndFiled]
    console.log("stockHistory: \nDeclaring isProduct = formsUrls(" + [cokey].join("").toLowerCase(), "docForms" + ")")
    var isProduct = formsUrls([cokey].join("").toLowerCase(), "docForms")
    // return console.log(typeof isProduct)
    if (typeof isProduct === "string" && isProduct !== "undefined") {
      console.log("stockHistory: \nDeclaring formUrl = FormApp.openByUrl(" + isProduct + ").getPublishedUrl()")
      var formUrl = FormApp.openByUrl(isProduct).getPublishedUrl()
      return formUrl
      } 
    else {
    // var utiStr = skyNeed(cokey, time)
    // var utiSeo = pastSeo(utiStr, time)
    console.log("stockHistory: \nDeclaring seoArray = seoPastTime(" + [cokey].join(""), time + ")")
    var seoArray = seoPastTime([cokey].join(""), time)
    var uti = seoArray.playList
    // return console.log(uti)
    console.log("stockHistory: \nDeclaring form = formMaker(" + [cokey].join("").toUpperCase(), "docForms", time + ")")
    var form = formMaker([cokey].join("").toUpperCase(), "docForms", time)

    if (typeof form === "object"){
    // fileManager(form.getId(), "videoForms", time)

    form.addTextItem().setTitle("Stock Price").setRequired(true);
    form.addTextItem().setTitle("Outstanding Shares").setRequired(true).setHelpText(coHelpText);
    form.setCollectEmail(true);
      uti.map((piece) => {
      while(piece){
        if (piece) {
        var elaspeTime = new Date() - time
        var timeToExecute = maxTime - elaspeTime
        // console.log("piece: " + piece + "\nelaspeTime: " + elaspeTime)
          form.addPageBreakItem().setTitle([cokey].join(""))
      form.addSectionHeaderItem().setTitle("https://youtube.com/watch?v=" + piece)
      form.addVideoItem()
        .setAlignment(FormApp.Alignment.CENTER)
        .setWidth(612)
        .setVideoUrl("https://youtube.com/watch?v=" + piece)
        if (timeToExecute <= 6 * 60 * 1000 && timeToExecute >= 5.98 * 60 * 1000) {
        console.log("that function: " + arguments.callee.caller.name + "\nthis function: " + arguments.callee.name + "\nTime limit six minutes")
      }if (timeToExecute <= 5 * 60 * 1000 && timeToExecute >= 4.98 * 60 * 1000) {
        // console.log("that function: " + arguments.callee.caller.name + "\nthis function: " + arguments.callee.name + "\nTime limit five minutes")
      }if (timeToExecute <= 4 * 60 * 1000 && timeToExecute >= 3.98 * 60 * 1000) {
        // console.log("that function: " + arguments.callee.caller.name + "\nthis function: " + arguments.callee.name + "\nTime limit four minutes")
      }if (timeToExecute <= 3 * 60 * 1000 && timeToExecute >= 2.98 * 60 * 1000) {
        // console.log("that function: " + arguments.callee.caller.name + "\nthis function: " + arguments.callee.name + "\nTime limit three minutes")
      }if (timeToExecute <= 2 * 60 * 1000 && timeToExecute >= 1.98 * 60 * 1000) {
        // console.log("that function: " + arguments.callee.caller.name + "\nthis function: " + arguments.callee.name + "\nTime limit two minutes")
      }if (timeToExecute <= 1 * 60 * 1000 && timeToExecute >= .98 * 60 * 1000) {
        // console.log("that function: " + arguments.callee.caller.name + "\nthis function: " + arguments.callee.name + "\nTime limit one minute")
      }if (timeToExecute <= .05 * 60 * 1000) {
        console.log("piece: " + piece[0] + "\ntimeToExecute: " + timeToExecute.valueOf())
        return}
        return piece[0] 
            } 
        return
          }    
        })
        var formUrl = form.getPublishedUrl()
        return formUrl}}
    // var rndUti = uti[randNum(uti)]

  }

