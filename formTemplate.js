var dtls = function(callFunc, time) {
  // var callFunc = storeFunction.name
  var appList = [];
    for (var key in globalThis) {
      if (typeof globalThis[key] == "function") {
        appList.push(key)}};
  var rdmNumForName = Math.floor(Math.random() * (Math.floor(appList.length)))
  var keysFunc = seoSheet(appList[rdmNumForName]).keyWords
  var formName = callFunc.name || keysFunc[Math.floor(Math.random() * (Math.floor(keysFunc.length)))][0]
  if ([appList].join().toLowerCase().includes([formName].join("").toLowerCase())) {

  
    var jsFunc = globalThis[formName]()
    var isProduct = formsUrls([formName].join("").toLowerCase(), "Forms")
    console.log(typeof isProduct)
    if (typeof isProduct === "string"){
      var formUrl = FormApp.openByUrl(isProduct).getPublishedUrl()
      return formUrl}
    var form = formMaker([formName].join("").toUpperCase(), "Forms");
    if (typeof form === "object") {
    form.setCollectEmail(true);
    if ([appList].join().toLowerCase().includes([formName].join("").toLowerCase())) {
        form.addParagraphTextItem().setHelpText(globalThis[formName].toString())}
    jsFunc.map((piece) => {
    while(piece){
      if (piece) {
      var elaspeTime = new Date() - time
      var timeToExecute = maxTime - elaspeTime
      // console.log("piece: " + piece + "\nelaspeTime: " + elaspeTime)
        form.addPageBreakItem().setTitle([formName].join(""))
    // form.addSectionHeaderItm().setTitle([piece].join("").split('"'))
    form.addSectionHeaderItem().setHelpText(JSON.stringify(piece))
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
      return formUrl}

    }
  var isProduct = formsUrls([formName].join("").toLowerCase(), "Forms")
  console.log(typeof isProduct)
  if (typeof isProduct === "string"){
    var formUrl = FormApp.openByUrl(isProduct).getPublishedUrl()
    return formUrl}
  var form = formMaker([formName].join("").toUpperCase(), "Forms");
    if (typeof form === "object") {
    form.addTextItem().setTitle('Your Name').setRequired(true);
    form.addDateItem().setTitle('Birth Date').setRequired(true);  
    form.addParagraphTextItem().setTitle('Your Message')
                             .setRequired(true);
  form.setTitle(formName)
      .setConfirmationMessage('Thanks for your feedback !!');  
  var url = form.getPublishedUrl();
  return url
  return HtmlService.createTemplate(
    `<div class="row">
    <div class="col s10 card-panel amber push-s1 push-m1 push-l1">
    <div class="video-container" style="clear: both">
    <div class="col s12 receipt deep-purple darken-1">
    <iframe 
      class="z-depth-5 card-panel deep-purple darken-1 scale-transition scale-out scale-in btn-large" 
      src="${url}" 
      width="100%"
      height="100%"
      allow="autoplay"
      allow="encrypted-media"
      title="Dontime Life Website"
      frameborder="0"
      allowfullscreen
      ></iframe>
    </div></div></div></div>`).evaluate().getContent()}
  else {
    return dtlsMain(formName)
  }}

var dtlsCalculator = function(e)
  {var username = e;
  const data = needUtility(randomSubstance(0, 2, ["0","1","2","3","4","5","6","7","8","9"]))[0]
  const rndNumData = Math.floor(Math.random() * (Math.floor(data.playlistArr.length)))
  if (!username)
    {var percent =  data.rndTitle;}
  else {var percent = username;}
  if (typeof username === "undefined") {
  
  var form = formMaker(data.rndTitle);
    form.setTitle(data.rndTitle)
      .setConfirmationMessage('Thanks for your feedback !!');}
  else {

  var form = formMaker(username);
  fileManager(username, "Forms")
    form.setTitle(username)
      .setConfirmationMessage('Thanks for your feedback !!');}
  var list = []
  if (0 < percent)
  { for ( var i = 0;0 < percent; i++)
    {var result = JSON.stringify(i)*percent - Math.floor(JSON.stringify(i)*percent); 
  if (result === 0) {list.push([JSON.stringify(i)*percent + " " + "out of" + " " + JSON.stringify(i) + " " + "odds"])
  if ( JSON.stringify(i) >= 10) {break}}}}
  else {list.push([percent]).toString()}
  const breakUrl = "https://script.google.com/macros/s/AKfycbzhrxdXzM08AAwA5ualRXdnDtV6C_xQ7bcq4v6H0HNdBqPr2C8A1URyWN0FLLccQuoA/exec?func=dtlsCalculator&args="
  const vegasUrl = "https://script.google.com/macros/s/AKfycbzhrxdXzM08AAwA5ualRXdnDtV6C_xQ7bcq4v6H0HNdBqPr2C8A1URyWN0FLLccQuoA/exec?func=dtlsVegas&args="
  const today = new Date();
  const rule = today.toDateString() + " - " + today.toTimeString()
  form.addSectionHeaderItem().setTitle(rule);
  var videIdUrl = data.playlistArr[rndNumData];
  var globalYoutubeUrl = "https://www.youtube.com/watch?v="
  if (typeof data.videoItem !== "undefined") {

  form.addVideoItem().setAlignment(FormApp.Alignment.CENTER).setWidth(360).setVideoUrl(globalYoutubeUrl + videIdUrl).setHelpText(globalYoutubeUrl + videIdUrl)}
  const htmlList = list.map(function(r){ 
      var rndFormArray = needUtility(r[0])[0]
      var videoVegas = substanceVegas(null, 0, 11) 
      var rndFormVideo = rndFormArray.playlistArr[Math.floor(Math.random() * (Math.floor(rndFormArray.playlistArr.length)))]
      return `${form.addSectionHeaderItem().setTitle(r[0]).setHelpText(vegasUrl + globalYoutubeUrl + rndFormVideo)}\n\n\n\n`; }).toString().replace(/,/g, "");
  const url = form.getPublishedUrl();
  // return geneFrame(url)
  const html = HtmlService
  .createTemplate(`
    <div class="row">
    <div class="col s10 l10 m10 card-panel push-s1 push-l1 push-m1">
    <div class="container row valign-wrapper"><?!= rule() ?></div>
    <div class="video-container grey" style="clear: both">
    <div class="col s10 l10 m10 receipt black darken-1">
    <iframe 
      class="z-depth-5 card-panel deep-purple darken-1 scale-transition scale-out scale-in btn-large" 
      src="${url}" 
      width="100%"
      height="100%"
      allow="autoplay"
      allow="encrypted-media"
      title="Dontime Life Website"
      frameborder="0"
      allowfullscreen
      ></iframe>
    </div></div></div></div></div>`);
  return html.evaluate().getContent()}//:contentFile('uiAccess');

var dtlsEnvironment = function(e, time) {
    var dtlsUrl = "https://script.google.com/macros/s/AKfycbzhrxdXzM08AAwA5ualRXdnDtV6C_xQ7bcq4v6H0HNdBqPr2C8A1URyWN0FLLccQuoA/exec?func=videoPage&args="
  var arrayMath = allInvestors(e, time)
  // var arrayMath = [`${randomSubstance(null,0,2*3)} ${randomSubstance(null,0,3*5)}`]
  var product = e || arrayMath.toString().split(" ").sort((a, b) => a - b)[Math.floor(Math.random() * (Math.floor(arrayMath.toString().split(" ").length)))];
    // var e = "if and out business"
  if (e) {

    var boilerUrl = dtlsBridge(e, time)
    if (boilerUrl){

      return boilerUrl
    
      
    }

  }
  var isProduct = formsUrls(product)
  if (typeof isProduct !== "undefined"){
    var formUrl = FormApp.openByUrl(isProduct).getPublishedUrl()
    return HtmlService.createTemplate(
      `
    <div class="row">
    <div class="col s10 l10 m10 card-panel push-s1 push-l1 push-m1">
    <div class="container row valign-wrapper"><?!= rule() ?></div>
    <div class="video-container grey" style="clear: both">
    <div class="col s10 l10 m10 receipt black darken-1">
    <iframe 
      class="z-depth-5 card-panel deep-purple darken-1 scale-transition scale-out scale-in btn-large" 
      src=${formUrl}
      width="100%"
      height="100%"
      allow="autoplay"
      allow="encrypted-media"
      title="Dontime Life Website"
      frameborder="0"
      allowfullscreen
      ></iframe>
    </div></div></div></div>
      `
    ).getRawContent()}
  var data = coUtility(product)[0];
  if (typeof data.rndTitle !== "undefined") {
  var test = productNamePartial([data.rndTitle.replace(/,./g, "")].toString().split(" ")[Math.floor(Math.random() * (Math.floor([data.rndTitle.replace(/,./g, "")].toString().split(" ").length)))]);}
 if (typeof test !== "undefined") {
  var test2 = productRegNo(test["eparegno"]);
  if ([test2].indexOf("companyinfo") !== -1) {
  var productCo = []
 for (var i=0,l=test2["companyinfo"].length; i<l; i++)
    {var isCompany = test2["companyinfo"][i]["name"];
    productCo.push(isCompany)}
var uniqueCo = []
for (var i=0, l=productCo.length;i<l;i++) {
  var epaCo = coUtility(productCo[i])
  uniqueCo.push(epaCo)}
var randomCik = uniqueCo[0]
var coInfo =  uniqueCo[0][0].rndTitle;
var secReport = uniqueCo[0][0].secUrl
var stkTicker = uniqueCo[0][0].rndTicker
var watchV = uniqueCo[0][0].videoItem;
var playVid = uniqueCo[0][0].videoItemUrl}
else {
  var coInfo =  data.rndTitle;
  var secReport = data.secUrl
  var stkTicker = data.rndTicker
  var watchV = data.videoItem;
  var playVid = data.videoItemUrl}
  if ([test2].indexOf("active_ingredients") !== -1) {
  var uniqueData = [];
 for (var i=0,l=test2["active_ingredients"].length; i<l; i++)
    {var isIngredient = test2["active_ingredients"][i]["active_ing"]
    if (isIngredient)
      {var pIName = productIngName(isIngredient)
      if (typeof pIName !== "undefined" ) {
        uniqueData.push(pIName["items"] || pIName["first"] || pIName)}}}
if (typeof uniqueData[0][0]["rndTitle"] === "undefined") {
  var uniqueDataArray = []
 for (var i=0,l=uniqueData.length;i<l;i++)
    {if (uniqueData[i].length !== 0) {
    uniqueData[i].map((item) => 
    {uniqueDataArray.push(item)})}}
  const matches = []
  uniqueDataArray.sort((a, b) => a - b).filter(
      (ac)=>
        {if (JSON.stringify(ac["eparegnumber"]).toLowerCase().includes(test2["eparegno"]))
            matches.push(ac)})
  var randomKey = Math.floor(Math.random() * (Math.floor(matches.length)))// Math.floor(Math.random())
  var uniqueDataKey = [matches].entries().next().value
  if (typeof uniqueDataKey[1].length !== 0) {
  var randomProduct =  uniqueDataKey[1][randomKey]["productname"];
  var isProductOnDrive = formsUrls(randomProduct);
 if (typeof isProductOnDrive !== "undefined"){
  return dtlsMain(randomProduct)}
  var isDataKey = uniqueDataKey[1][randomKey]
  var randomIngredient = isDataKey["ingredientname"];
  var randomProductStatusDate = isDataKey["productstatusdate"];
  var randomProductNameStatus = isDataKey["productnamestatus"];
  var randomAlternateBrandName = isDataKey["alternatebrandname"];
  var randomPcCode = isDataKey["pccode"];
  var randomRegistrationStatus = isDataKey["registrationstatus"];
  var randomCasNumber = isDataKey["casnumber"];
  var randomEpaRegNum = isDataKey["eparegnumber"];
  var epaUrl = "https://ofmpub.epa.gov/sor_internet/registry/substreg/searchandretrieve/substancesearch/search.do?multipleEntriesSearch=&multipleKeys=" + randomCasNumber + "&onSRS=true&onChemResourceDir=true&substanceNameScope=beginswith";}}}}
  else {
  var coInfo =  data.rndTitle;
  var secReport = data.secUrl
  var stkTicker = data.rndTicker
  var watchV = data.videoItem;
  var playVid = data.videoItemUrl}
  var form = formMaker(coInfo);
  fileManager(coInfo, "Forms")
  form.addVideoItem().setAlignment(FormApp.Alignment.CENTER).setWidth(360).setVideoUrl(playVid).setHelpText(playVid);
 if (typeof randomProduct !== "undefined") {  
  form.addSectionHeaderItem().setTitle("Active Ingredient in " + randomProduct).setHelpText(randomIngredient);
  form.addSectionHeaderItem().setTitle("Alternate Brand Name(s) for " + randomProduct).setHelpText(randomAlternateBrandName);
  form.addSectionHeaderItem().setTitle("EPA Registration Number for " + randomProduct).setHelpText(randomEpaRegNum);
  form.addSectionHeaderItem().setTitle("Registration Status for " + randomProduct).setHelpText(randomRegistrationStatus);
  form.addSectionHeaderItem().setTitle("Name Status for " + randomProduct).setHelpText(randomProductNameStatus)
  form.addSectionHeaderItem().setTitle("Status Date for " + randomProduct).setHelpText(randomProductStatusDate);
  form.addSectionHeaderItem().setTitle("Pesticide Chemical Code for " + randomIngredient).setHelpText(randomPcCode);
  form.addSectionHeaderItem().setTitle("Chemical Number for " + randomIngredient).setHelpText(epaUrl);}
  form.addSectionHeaderItem().setTitle("Company Info").setHelpText(dtlsUrl + encodeURIComponent(coInfo));
 if (typeof secReport !== "undefined") 
  {form.addSectionHeaderItem().setTitle(stkTicker).setHelpText(secReport);
  form.addTextItem().setTitle("Industry").setRequired(true);
  form.addParagraphTextItem().setTitle("Industry/Market Corrections").setRequired(false);
  form.addParagraphTextItem().setTitle("News").setRequired(false);
  form.addParagraphTextItem().setTitle("Economic/Business Cycles").setRequired(false);
  form.addTextItem().setTitle("Stock Price").setRequired(true);
  form.addTextItem().setTitle("Outstanding Shares").setRequired(true);
  form.addTextItem().setTitle("Quarterly Earnings").setRequired(true);
  form.addTextItem().setTitle("Annualized Net Income").setRequired(false);
  form.addTextItem().setTitle("Total Equity").setRequired(false);
  form.addTextItem().setTitle("Retained Earnings").setRequired(false);
  form.addTextItem().setTitle("Cash & Marketable Securities").setRequired(true);
  form.addTextItem().setTitle("Accounts Receivable").setRequired(true);
  form.addTextItem().setTitle("Inventories").setRequired(true);
  form.addTextItem().setTitle("Long-term Investments").setRequired(false);
  form.addTextItem().setTitle("Net PP&E").setRequired(false);
  form.addTextItem().setTitle("Current Financial Liabilities").setRequired(true);
  form.addTextItem().setTitle("Long-term Interest-bearing Debts").setRequired(false);
  form.addTextItem().setTitle("Current Year Total Earnings").setRequired(false);
  form.addTextItem().setTitle("Base Year Total Earnings").setRequired(false);}
  form.addTextItem().setTitle('Your Name').setRequired(true);
  form.addDateItem().setTitle('Birth Date').setRequired(true);  
  form.addParagraphTextItem().setTitle('Your Message').setRequired(true);
  form.setTitle(coInfo).setConfirmationMessage('Thanks for your feedback !!');  
  var url = form.getPublishedUrl();
  return url
  // return HtmlService.createTemplate(
  //   `<div class="row">
  //   <div class="col s10 card-panel amber push-s1 push-m1 push-l1">
  //   <div class="video-container" style="clear: both">
  //   <div class="col s12 receipt deep-purple darken-1">
  //   <iframe 
  //     class="z-depth-5 card-panel deep-purple darken-1 scale-transition scale-out scale-in btn-large" 
  //     src="${url}" 
  //     width="100%"
  //     height="100%"
  //     allow="autoplay"
  //     allow="encrypted-media"
  //     title="Dontime Life Website"
  //     frameborder="0"
  //     allowfullscreen
  //     ></iframe>
  //   </div></div></div></div>`).evaluate().getContent()
  }

var dtlsInvestor = function(coKey, time) {
  var coData = coUtility(coKey)[0];
  if (coData) {
 var coDataName = coData.rndTitle
  try {
  
  dtlsMain(coDataName)}
  catch {
  
  console.log(coDataName + " does not exist yet!")}}
  if (typeof coData.rndTicker !== "undefined") {
    // var form = formMaker();
  var urlTicker = "https://www.nasdaq.com/search?q=" + coData.rndTicker 
  var form = formMaker([coData.rndTitle].join("").toUpperCase(), "Forms", time)

    if (typeof form === "object"){
  // fileManager(coData.rndTitle, "Forms")
  form.addSectionHeaderItem().setTitle(urlTicker).setHelpText(coData.secUrl);
  form.addTextItem().setTitle("Industry").setRequired(true);
  form.addTextItem().setTitle("Sector").setRequired(true);
  form.addParagraphTextItem().setTitle("Industry/Market Corrections").setRequired(false);
  form.addParagraphTextItem().setTitle("News").setRequired(false);
  form.addParagraphTextItem().setTitle("Economic/Business Cycles").setRequired(false);
  form.addTextItem().setTitle("Stock Price").setRequired(true);
  form.addTextItem().setTitle("Outstanding Shares").setRequired(true);
  form.addTextItem().setTitle("Quarterly Earnings").setRequired(true);
  form.addTextItem().setTitle("Annualized Net Income").setRequired(false);
  form.addTextItem().setTitle("Total Equity").setRequired(false);
  form.addTextItem().setTitle("Retained Earnings").setRequired(false);
  form.addTextItem().setTitle("Cash & Marketable Securities").setRequired(true);
  form.addTextItem().setTitle("Accounts Receivable").setRequired(true);
  form.addTextItem().setTitle("Inventories").setRequired(true);
  form.addTextItem().setTitle("Long-term Investments").setRequired(false);
  form.addTextItem().setTitle("Net PP&E").setRequired(false);
  form.addTextItem().setTitle("Current Financial Liabilities").setRequired(true);
  form.addTextItem().setTitle("Long-term Interest-bearing Debts").setRequired(false);
  form.addTextItem().setTitle("Current Year Total Earnings").setRequired(false);
  form.addTextItem().setTitle("Base Year Total Earnings").setRequired(false);
  form.addTextItem().setTitle('Your Name').setRequired(true);
  form.addDateItem().setTitle('Birth Date').setRequired(true);  
  form.addParagraphTextItem().setTitle('Your Message')
                             .setRequired(true);
  form.setTitle(coData.rndTitle)
      .setConfirmationMessage('Thanks for your feedback !!');      
  var url = form.getPublishedUrl();
  return url
  // return HtmlService.createTemplate(
    // <div class="row">
    // <div class="col s10 card-panel amber push-s1 push-m1 push-l1">
    // <div class="video-container" style="clear: both">
    // <div class="col s12 receipt deep-purple darken-1">
    // <iframe 
    //   class="z-depth-5 card-panel deep-purple darken-1 scale-transition scale-out scale-in btn-large" 
    //   src="${url}" 
    //   width="100%"
    //   height="100%"
    //   allow="autoplay"
    //   allow="encrypted-media"
    //   title="Dontime Life Website"
    //   frameborder="0"
    //   allowfullscreen
    //   ></iframe>
    // </div></div></div></div> 
    // ).evaluate().getContent()
    }} else {return dtlsEnviroment(coData.rndTitle)}}

var dtlsResearchForm = function(topic) {
  var cokey
  topic? cokey = topic:cokey = objectOfS(["parameter"],[[["func", arguments.callee.name]]], Math.floor((maxTime - new Date() % (1000 * 60)) / 1000)).parameter["func"]
  console.log(Math.floor((maxTime - new Date() % (1000 * 60)) / 1000) + "\n" + arguments.callee.name + "\n!" + topic + ", = " + topic)
  var tri = trial() 
  var form = FormApp.create(cokey).setDescription(" Research " + tri.length)
  if (typeof form === "object"){
    var formUrl = form.getPublishedUrl()
    tri.map((seo) => {
      for (var key in seo) {
        if (key === "heads") {
          form.addParagraphTextItem().setTitle(randomSubstance(0,1,[key]).myNewArr)}
        else {
          form.addParagraphTextItem().setTitle(randomSubstance(0,1,[key]).myNewArr)}}})
      form.setCollectEmail(true)
    return formUrl}}

var dtlsSomeFunction = function(e) {
  var time = start
  var uniqueKey = [randomSubstance(0,4)];
  var uniqueCoObjects = covObjects(uniqueKey,["allTime"])
  var rndCoObjects = uniqueCoObjects[Math.floor(Math.random() * (Math.floor(uniqueCoObjects.length)))]
  var uniqueCoArray = covArrays(rndCoObjects);
  var rndCoArray = uniqueCoArray[Math.floor(Math.random() * (Math.floor(uniqueCoArray.length)))]
  var cokey = e || rndCoArray
  var isProduct = formsUrls([cokey].join("").toLowerCase(), "videoForms")
  console.log(typeof isProduct)
  if (typeof isProduct === "string"){
    var formUrl = FormApp.openByUrl(isProduct).getPublishedUrl()
    return formUrl}
  
    //Youtube Widget
    var seoArray = seoPastTime([cokey].join(""), time)
    if (seoArray){
  var idArray = seoArray.playList;
  var covIdArray = covArrays(idArray)}
  // console.log(covIdArray[0][0].map((e)=>{return e[0]}))
  var form = formMaker([cokey].join("").toUpperCase(), "videoForms", time)
  var formUrl = form.getPublishedUrl()
  form.setCollectEmail(true)
  if (seoArray) {
  if (typeof form === "object"){
  covIdArray.map((d)=>{
    while(d){
    var elapsedTime = new Date() - time
    var timeToExecute = maxTime - elapsedTime
    form.addPageBreakItem().setTitle([cokey].join(""))
    form.addSectionHeaderItem().setTitle("https://youtube.com/watch?v=" + d)
    form.addVideoItem()
      .setAlignment(FormApp.Alignment.CENTER)
      .setWidth(612)
      .setVideoUrl("https://youtube.com/watch?v=" + d)
      if (timeToExecute <= 6 * 60 * 1000 && timeToExecute >= 5.98 * 60 * 1000) {
      console.log("Time limit six minutes")
    }if (timeToExecute <= 5 * 60 * 1000 && timeToExecute >= 4.98 * 60 * 1000) {
      console.log("Time limit five minutes")
    }if (timeToExecute <= 4 * 60 * 1000 && timeToExecute >= 3.98 * 60 * 1000) {
      console.log("Time limit four minutes")
    }if (timeToExecute <= 3 * 60 * 1000 && timeToExecute >= 2.98 * 60 * 1000) {
      console.log("Time limit three minutes")
    }if (timeToExecute <= 2 * 60 * 1000 && timeToExecute >= 1.98 * 60 * 1000) {
      console.log("Time limit two minutes")
    }if (timeToExecute <= 1 * 60 * 1000 && timeToExecute >= .98 * 60 * 1000) {
      console.log("Time limit one minute")
    }if (timeToExecute <= .1 * 60 * 1000) {
      console.log(timeToExecute.valueOf())
      break}
      return}
    return})}}
return {playList: covIdArray,content: formUrl}}

var dtlsStore = function(itemName, time) {
  // if (typeof itemName === "undefined") {
  //   var itemName = "water"
  // }
  if (itemName) {

    var boilerUrl = dtlsBridge(itemName, time)
    if (boilerUrl){

      return boilerUrl
    
      
    }

  }
    var isProduct = formsUrls([itemName].join("").toLowerCase(), "inventoryForms")
    console.log(typeof isProduct)
    if (typeof isProduct === "string" && isProduct !== "undefined"){
      var formUrl = FormApp.openByUrl(isProduct).getPublishedUrl()
      return formUrl}
  var time = start;
  var form = formMaker([itemName].join("").toUpperCase(), "inventoryForms", time) 
  var formUrl = form.getPublishedUrl() 
  var jo = storeFunction()
  var joItemCount = []
    jo.map((c) => { 
    var joXItem = c["Description"]
    if ([joXItem].join("").toLowerCase().includes([itemName].join("").toLowerCase())) {
       joItemCount.push(c)
    }
  })
  if (joItemCount.length > 1 || joItemCount.length < 1) {
    form.setTitle(joItemCount.length + " Items").setConfirmationMessage('Thanks for your feedback !!')
  } else {
    form.setTitle(joItemCount.length + " Item").setConfirmationMessage('Thanks for your feedback !!')
  }
  var coTable = joItemCount.map((r)=>{ 
      form.addPageBreakItem().setTitle(r["Description"])
      form.addSectionHeaderItem().setTitle("Quantity: " + r["QTY"] + " set of " + r["Pack Size"])
      form.addSectionHeaderItem().setTitle("Price: " + r["TOTAL COST"])
      form.addSectionHeaderItem().setTitle("Cost Per Piece: " + r["COST PER PIECE"]) + "\n\n\n\n\n\n"

      }).toString().replace(/,/g, "")
    return formUrl
   var result = JSON.stringify(coTable); 
   baseUrl = getUrl(ScriptApp); 
   inventoryUrl = getUrl(ScriptApp); 
   financeUrl = getUrl(ScriptApp);
  var itemContent = contentApp(
    `
      <div class="row">
        <div class="col s10 card-panel l12 m12 push-s1">
          <div class="z-depth-5 green toolbar_icon toolbar_iconHover container">
            <div class="col s12 l12 m12">
              <div class="black" id="seoData">
                <div class="row">
                  <div class="col s10 l10 m10 card-panel push-s1 push-l1 push-m1">
                    <div class="container row valign-wrapper"><?!= rule() ?></div>
                      <div class="video-container grey" style="clear: both">
                        <div class="col s10 l10 m10 receipt black darken-1">
                          <iframe 
                            class="z-depth-5 card-panel deep-purple darken-1 scale-transition scale-out scale-in btn-large" 
                            src=<fileUrl 
                            id="busRes"
                            width="100%"
                            height="100%"
                            allow="autoplay"
                            allow="encrypted-media"
                            title="Dontime Life Website"
                            frameborder="0"
                            allowfullscreen
                            ></iframe>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col s10 card-panel l12 m12 push-s1">
                    <div class="z-depth-5 grey toolbar_icon toolbar_iconHover container">
                      <div class="col s12 l12 m12">
                        <input style="font-size:18pt;color:green" placeholder="research" class="timepicker flow-text menu-img z-depth-5 card-panel black scale-transition scale-out scale-in receipt btn-large" id="busSearch"  type="search" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
`, {item: itemName || "SHOPPING LIST", fileUrl: formUrl, allTime: time})
return  itemContent
}

var dtlsTv = function() {
  var randomSECCo = needUtility(randomSubstance(null,0,7))[0] 
  var myVid = randomSECCo.rndTitle
  var infoLink = seoSheet(myVid).keyWords
    var pageArray = []
      infoLink.map((tv) => {
      var plaListNum = Math.floor(Math.random() * Math.floor(tv.length))
      var rndListItem = tv[plaListNum]
        pageArray.push(rndListItem)})
      var story = pageArray[Math.floor(Math.random() * Math.floor(pageArray.length))]
    dtlsVegas(story)}

var dtlsVegas = function(rndId) {
  if (typeof rndId === "undefined") {
    var rndId = "Converse Chuck Taylor All Star Low Top"
  }
  console.log("dtlsVegas:\ncalling seoSheet(" + rndId + ").keyWords" )
  var rndTKey = seoSheet(rndId).keyWords
  return console.log(convertToJS(rndTKey))
  var keyNum = Math.floor(Math.random() * (Math.floor(rndTKey.length)))
  var ndT = rndTKey[keyNum].replace(/"'/g,"")
  var ndTNum = Math.floor(Math.random() * (Math.floor(ndT.length)))
  var util = ndT[ndTNum]
  var ndtUtil = needUtility(util)[0]
  return console.log(ndtUtil)
  var ndTArray = ndtUtil.playlistArr
  var form = formMaker([rndId].join("").toUpperCase(), "Forms");
  if (typeof form === "string") {
    var formUrl = FormApp.openByUrl(form).getPublishedUrl()}
  else {
    // fileManager([rndId].join("").toUpperCase(), "Forms")
    var rndVid = ndTArray[Math.floor(Math.random() * (Math.floor(ndTArray.length)))]
    form.addVideoItem().setAlignment(FormApp.Alignment.CENTER).setWidth(612).setVideoUrl(rndVid)
    form.addPageBreakItem().setTitle(rndVid);
    var formUrl = form.getPublishedUrl();}
  var result = JSON.stringify(ndtUtil.rndTitle);
  var html= HtmlService.createTemplate(
    `<html>
      <body>
        <div class="row">
        <div class="col s10 card-panel amber push-s1 push-m1 push-l1">
        <div class="container" style="clear: both">
        <div class="col s12 receipt deep-purple darken-1">
        <div id="vegas">${result}</div>          
        </div></div></div></div>
        <div class="row">
        <div class="col s10 card-panel amber push-s1 push-m1 push-l1">
        <div class="video-container" style="clear: both">
        <div class="col s12 receipt deep-purple darken-1">
        <iframe 
          class="z-depth-5 card-panel deep-purple darken-1 scale-transition scale-out scale-in btn-large" 
          src="${formUrl}" 
          width="100%"
          height="100%"
          allow="autoplay"
          allow="encrypted-media"
          title="Dontime Life Website"
          frameborder="0"
          allowfullscreen
          ></iframe>
        </div></div></div></div>
      </body>
    </html>`);
    // html.result = ndtUtil.rndTitle
return html.getRawContent();}

var filetypeBing = function(e) {
var time = start
    // var namedVar = "pred"
    var arrData = coSort(time).ticker
    var utilNeed = randomUtility(e,arrData)
    var cokey = e || utilNeed
    var isProduct = formsUrls([cokey].join("").toLowerCase(), "docForms")
    console.log(typeof isProduct)
    if (typeof isProduct === "string"){
      var formUrl = FormApp.openByUrl(isProduct).getPublishedUrl()
      return formUrl}
    // var utiStr = skyNeed(cokey, time)
    // var utiSeo = pastSeo(utiStr, time)
    var uti = bingSWF([cokey].join(""))
  var form = formMaker([cokey].join("").toUpperCase(), "docForms", time)
  if (typeof form === "object"){
  // fileManager(form.getId(), "docForms", time)

    form.addTextItem().setTitle('Your Name').setRequired(true);
    form.addDateItem().setTitle('Birth Date').setRequired(true);  
    form.addParagraphTextItem().setTitle('Your Message').setRequired(true);
    form.setCollectEmail(true);
    uti.map((piece) => {
    while(piece){
      if (piece) {
        if (piece.indexOf("https://") > -1){
      var elaspeTime = new Date() - time
      var timeToExecute = maxTime - elaspeTime
      // console.log("piece: " + piece + "\nelaspeTime: " + elaspeTime)
        form.addPageBreakItem().setTitle([cokey].join(""))
        form.addSectionHeaderItem().setTitle(piece)
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
      return formUrl}
    var rndUti = uti[randNum(uti)]
    return [cokey].join("")

}

var generalWorkInvoice = function(clientName, time) {
  // var clientName = "iforce maxx"
  if (clientName) {

    var boilerUrl = dtlsBridge(clientName, time)
    if (boilerUrl){

      return boilerUrl
    
      
    }

  }
    var isProduct = formsUrls([clientName].join("").toLowerCase(), "Forms")
    console.log(typeof isProduct)
    if (typeof isProduct === "string" && isProduct !== "undefined"){
      console.log(isProduct)
      var formUrl = FormApp.openByUrl(isProduct).getPublishedUrl()
      return formUrl}
  var time = start
  var arrData = allInvestors(clientName, time)
  var cokey = arrData.title
  var yahooNeed = arrData.ticker
  var coHelpText = arrData.edgarUrl
  if ([cokey].join().toLowerCase().includes([clientName].join().toLowerCase())) 
  {

  
    isProduct = formsUrls([cokey].join("").toLowerCase(), "Forms")
    console.log(typeof isProduct)
    if (typeof isProduct === "string" && isProduct !== "undefined"){
        console.log(isProduct)
      var formUrl = FormApp.openByUrl(isProduct).getPublishedUrl()
      return formUrl}
  return HtmlService.createTemplate(
      contentApp(
        `
      <?  var clientBusName = busName ?>
      <?  var dtlsUrl =  portBing(clientBusName); ?>
      <?  var form = formMaker([clientBusName].join("").toUpperCase(), "Forms", timeNow);  ?>
      <?   if (typeof form === "object"){ ?>
      <?  console.log("form object " + form.getPublishedUrl()) ?>
      <?  var formUrl = form.getPublishedUrl(); ?>
      <?  form.setCollectEmail(true); ?>
      <?  form.setAllowResponseEdits(true); ?>
      <?  form.addSectionHeaderItem().setTitle; ?>
      <?  form.addDateItem().setTitle('Invoice Date').setRequired(true); ?>
      <?  form.addTextItem().setTitle("Pickup Address ").setRequired(false) ?>
      <?  form.addTextItem().setTitle("Car ").setRequired(true); ?>
      <?  form.addTextItem().setTitle("Vin/STK # ").setRequired(true) ?>
      <?  form.addTextItem().setTitle("Gas ").setRequired(true) ?>
      <?  form.addTextItem().setTitle("Company Address ").setRequired(true) ?>
      <?  form.addTextItem().setTitle("Delivery/Pick-up/Chase-car ").setRequired(true) ?>
      <?  form.addTextItem().setTitle("Hours").setRequired(false) ?>
      <?  form.addTextItem().setTitle("Labor ").setRequired(true) ?>
      <?  form.addTextItem().setTitle("Total ").setRequired(false) ?>
      <?  form.addSectionHeaderItem().setTitle("Company Info").setHelpText(dtlsUrl); ?>
      <?  if (typeof clientTicker !== "undefined") { ?>
      <?  form.addSectionHeaderItem().setTitle(clientTicker).setHelpText(clientFile); ?>
      <?  form.addTextItem().setTitle("Industry").setRequired(true); ?>
      <?  form.addTextItem().setTitle("Sector").setRequired(true); ?>
      <?  form.addParagraphTextItem().setTitle("Industry/Market Corrections").setRequired(false); ?>
      <?  form.addParagraphTextItem().setTitle("News").setRequired(false); ?>
      <?  form.addParagraphTextItem().setTitle("Economic/Business Cycles").setRequired(false); ?>
      <?  form.addTextItem().setTitle("Stock Price").setRequired(true); ?>
      <?  form.addTextItem().setTitle("Outstanding Shares").setRequired(true); ?>
      <?  form.addTextItem().setTitle("Quarterly Earnings").setRequired(true); ?>
      <?  form.addTextItem().setTitle("Annualized Net Income").setRequired(false); ?>
      <?  form.addTextItem().setTitle("Total Equity").setRequired(false); ?>
      <?  form.addTextItem().setTitle("Retained Earnings").setRequired(false); ?>
      <?  form.addTextItem().setTitle("Cash & Marketable Securities").setRequired(true); ?>
      <?  form.addTextItem().setTitle("Accounts Receivable").setRequired(true); ?>
      <?  form.addTextItem().setTitle("Inventories").setRequired(true); ?>
      <?  form.addTextItem().setTitle("Long-term Investments").setRequired(false); ?>
      <?  form.addTextItem().setTitle("Net PP&E").setRequired(false); ?>
      <?  form.addTextItem().setTitle("Current Financial Liabilities").setRequired(true); ?>
      <?  form.addTextItem().setTitle("Long-term Interest-bearing Debts").setRequired(false); ?>
      <?  form.addTextItem().setTitle("Current Year Total Earnings").setRequired(false); ?>
      <?  form.addTextItem().setTitle("Base Year Total Earnings").setRequired(false);} ?>
      <?  form.addTextItem().setTitle('Your Name').setRequired(true); ?>
      <?  form.addTextItem().setTitle('Your Address').setRequired(true); ?>
      <?  form.addTextItem().setTitle('Your Phone Number').setRequired(true); ?>
      <?  form.addParagraphTextItem().setTitle('Your Message').setRequired(true); ?>
      <?  form.addGridItem().setTitle('Track').setRows(["Status"]).setColumns(["Queued", "Pending", "Settled"]).setRequired(true); ?>
      <?  form.setTitle(clientBusName.toUpperCase()).setConfirmationMessage('Thanks for your feedback !!')}; ?>
      <div class="row">
      <div class="col s12 l12 m12 card-panel">
      <div class="container row valign-wrapper"><?!= rule() ?></div>
      <div class="video-container grey" style="clear: both">
      <div class="col s12 l12 m12 receipt black darken-1">
      <iframe 
        class="z-depth-5 card-panel deep-purple darken-1 scale-transition scale-out scale-in btn-large" 
        src="<?= formUrl ?>" 
        width="100%"
        height="100%"
        allow="autoplay"
        allow="encrypted-media"
        title="Dontime Life Website"
        frameborder="0"
        allowfullscreen
        ></iframe>
      </div></div></div></div>`,{
      client: clientName,
      timeNow: time,
      busName: cokey,
      clientTicker: yahooNeed,
      clientFile: coHelpText})).evaluate().getContent()


    }
    else {


  return HtmlService.createTemplate(
    contentApp(
      `
    <?  var clientBusName = busName ?>
    <?  var dtlsUrl =  portBing(clientBusName); ?>
    <?  var form = formMaker([clientBusName].join("").toUpperCase(), "Forms", timeNow);  ?>
    <?   if (typeof form === "object"){ ?>
    <?  console.log("form object " + form.getPublishedUrl()) ?>
    <?  var formUrl = form.getPublishedUrl(); ?>
    <?  form.setCollectEmail(true); ?>
    <?  form.setAllowResponseEdits(true); ?>
    <?  form.addSectionHeaderItem().setTitle; ?>
    <?  form.addDateItem().setTitle('Invoice Date').setRequired(true); ?>
    <?  form.addTextItem().setTitle("Pickup Address ").setRequired(false) ?>
    <?  form.addTextItem().setTitle("Car ").setRequired(true); ?>
    <?  form.addTextItem().setTitle("Vin/STK # ").setRequired(true) ?>
    <?  form.addTextItem().setTitle("Gas ").setRequired(true) ?>
    <?  form.addTextItem().setTitle("Customer Address ").setRequired(true) ?>
    <?  form.addTextItem().setTitle("Delivery/Pick-up/Chase-car ").setRequired(true) ?>
    <?  form.addTextItem().setTitle("Hours").setRequired(false) ?>
    <?  form.addTextItem().setTitle("Labor ").setRequired(true) ?>
    <?  form.addTextItem().setTitle("Total ").setRequired(false) ?>
    <?  if (dtlsUrl.length === 99){form.addSectionHeaderItem().setTitle("Customer Info").setHelpText(dtlsUrl);} ?>
    <?  form.addTextItem().setTitle('Your Name').setRequired(true); ?>
    <?  form.addTextItem().setTitle('Your Address').setRequired(true); ?>
    <?  form.addTextItem().setTitle('Your Phone Number').setRequired(true); ?>
    <?  form.addParagraphTextItem().setTitle('Your Message').setRequired(true); ?>
      <?  form.addGridItem().setTitle('Track').setRows(["Status"]).setColumns(["Queued", "Pending", "Settled"]).setRequired(true); ?>
    <?  form.setTitle(clientBusName.toUpperCase()).setConfirmationMessage('Thanks for your feedback !!')}; ?>
    <div class="row">
    <div class="col s12 l12 m12 card-panel">
    <div class="container row valign-wrapper"><?!= rule() ?></div>
    <div class="video-container grey" style="clear: both">
    <div class="col s12 l12 m12 receipt black darken-1">
    <iframe 
      class="z-depth-5 card-panel deep-purple darken-1 scale-transition scale-out scale-in btn-large" 
      src="<?= formUrl ?>" 
      width="100%"
      height="100%"
      allow="autoplay"
      allow="encrypted-media"
      title="Dontime Life Website"
      frameborder="0"
      allowfullscreen
      ></iframe>
    </div></div></div></div>`,{
    client: clientName,
    timeNow: time,
    busName: clientName,
    clientTicker: yahooNeed,
    clientFile: coHelpText})).evaluate().getContent()
  }
  }

var overFlow = function()  {

`    <?  var liveForm = FormApp.openById(form.getId()) ?>
    <?  var formResponses = liveForm.getResponses() ?>
    <?  for (var i = 0; i < formResponses.length; i++) { ?>
    <?  var formResponse = formResponses[i]; ?>
    <?  var itemResponses = formResponse.getItemResponses(); ?>
    <?  for (var j = 0; j < itemResponses.length; j++) { ?>
      <?  var itemResponse = itemResponses[j]; ?>
      <?  console.log('Response #%s to the question "%s" was "%s"', 
        (i + 1).toString(), 
        itemResponse.getItem().getTitle(), 
          itemResponse.getResponse()); ?>
    <?  }} ?>
      <? var liveForm = FormApp.openById(form.getId()) ?>
      <? var formResponses = liveForm.getResponses() ?>
      <? for (var i = 0; i < formResponses.length; i++) { ?>
      <? var formResponse = formResponses[i]; ?>
      <? var itemResponses = formResponse.getItemResponses(); ?>
      <? for (var j = 0; j < itemResponses.length; j++) { ?>
        <? var itemResponse = itemResponses[j]; ?>
        <? console.log('Response #%s to the question "%s" was "%s"', 
          (i + 1).toString(), 
          itemResponse.getItem().getTitle(), 
            itemResponse.getResponse()); ?>
      <? }} ?>
`

}

var geneFrame = function(reference) 
  {return HtmlService.createTemplate(
    contentApp( 
    `
    <? var rndClient = function() { ?>
    <?  return new Promise((resolve) => {resolve(formMaker(file, "videoForms"))})} ?>
    <? var clientRes = rndClient()
    .then((resu) => {return resu})
    .catch((err) => {console.log(err)}) ?>
    <? var form = FormApp.openByUrl(JSON.stringify(formMaker(file, "videoForms"))) ?>
    <? var vidId = coUtility(file)[0].playlistArr ?>
    <? if (vidId.length > 0) {?>
    <? vidId.map((id)=>{return form.addVideoItem().setAlignment(FormApp.Alignment.CENTER).setWidth(612).setVideoUrl("https://youtube.com/watch?v=" + id)})} ?>
    <? var formUrl = form.getPublishedUrl() ?>
    <div class="row">
    <div class="col s10 card-panel amber push-s1 push-m1 push-l1">
    <div class="container" style="clear: both">
    <div class="col s12 receipt deep-purple darken-1">
    <div id="vegas"></div>          
    </div></div></div></div>
    <div class="row">
    <div class="col s10 l10 m10 card-panel push-s1 push-l1 push-m1">
    <div class="container row valign-wrapper"><?!= rule() ?></div>
    <div class="video-container grey" style="clear: both">
    <div class="col s10 l10 m10 receipt black darken-1">
    <iframe 
      class="z-depth-5 card-panel deep-purple darken-1 scale-transition scale-out scale-in btn-large" 
      src=<?= formUrl  ?>
      width="100%"
      height="100%"
      allow="autoplay"
      allow="encrypted-media"
      title="Dontime Life Website"
      frameborder="0"
      allowfullscreen
      ></iframe>
    </div></div></div></div>
    <script>document.addEventListener("DOMContentLoaded", lasVegas)
    function lasVegas() {
      
      document.getElementById("vegas").innerHTML = <?= formsUrls(file, "videoForms") ?>
      }</script>`, {
      file: reference})).evaluate().getContent()          }

var mainMan = function(mainFile) {
  if (mainFile) {

  
    // var mainFile = "wild"
      var stringSplit = mainFile.split(" ");
    var lowerCaseS = []
    testData([stringSplit]).map((increase) => {
      if (lowerCaseS.indexOf(increase) === -1) {
        lowerCaseS.push(increase)}})
    for (var i=0,l=lowerCaseS.length;i<l;i++) {
    if (typeof lowerCaseS[i] !== "undefined") {
    var fileX = searchDataTree(mainFile)}}
    if (fileX) {
      var appType = fileX.split("/")
        if (appType.indexOf("spreadsheets") === -1) {
          var url = FormApp.openByUrl(fileX).getPublishedUrl()}}
    return HtmlService.createTemplate(contentApp(

      `
      <div class="row">
      <div class="col s10 l12 m12 card-panel push-s1">
      <div class="container row valign-wrapper"><?!= rule() ?></div>
      <div class="video-container grey" style="clear: both">
      <div class="col s12 l12 m12 receipt black darken-1">
      <iframe 
        class="z-depth-5 card-panel deep-purple darken-1 scale-transition scale-out scale-in btn-large" 
        src=<?= url ?>
        width="100%"
        height="100%"
        allow="autoplay"
        allow="encrypted-media"
        title="Dontime Life Website"
        frameborder="0"
        allowfullscreen
        ></iframe>
      </div></div></div></div>
      `
    
    , {url: url})).evaluate().getContent()


}
}

var somMainFunc = async function(e){
  var elapsedTime = new Date() - start
  var timeToExecute = maxTime - elapsedTime
  while(timeToExecute > .3 * 60 * 1000) {
    console.log(timeToExecute)
      dtlsSomeFunction("It's who you know")
    if (elapsedTime <= .3 * 60 * 1000){
      console.log("Six minutes")
    }if (elapsedTime == 1 * 60 * 1000){
      console.log("Five minutes remainig")
    }if (elapsedTime == 2 * 60 * 1000){
      console.log("Four minutes remainig")
    }if (elapsedTime == 3 * 60 * 1000){
      console.log("Three minutes remainig")
    }if (elapsedTime == 4 * 60 * 1000){
      console.log("Two minutes remainig")
    }if (elapsedTime == 5 * 60 * 1000){
      console.log("One minute remainig")
    }if (elapsedTime >= maxTime){
      console.log("maximum execution time exceeded")
    }}
}

