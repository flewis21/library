var start = new Date().valueOf();
var oneTime = 1 * 59.9 * 1000;
var twoTime = 2 * 59.9 * 1000;
var threeTime = 3 * 59.9 * 1000;
var fourTime = 4 * 59.9 * 1000;
var fiveTime = 5 * 59.9 * 1000;
var maxTime = 6 * 59.9 * 1000;
// Gets a cache that is common to all users of the script
var sCache = CacheService.getScriptCache();

var formMaker = function (fileName, folderX, time) {
  console.log("calling formUrls with " + fileName + ", " + folderX);
  if (typeof formsUrls(fileName, folderX, time) !== "undefined") {
    return formsUrls(fileName, folderX, time);
  }
  if (fileName !== "") {
    console.log("calling FormApp with " + fileName);
    var newFile = FormApp.create(fileName);
    console.log("calling fileManager with " + newFile.getId() + ", " + folderX);
    fileManager(newFile.getId(), folderX, time);
    return newFile;
  }
};

var formsUrls = function (fileX, folderX, time) {
  if ([fileX].join("").length > 0) {
    var search = [fileX].join("");
    var searchFileStr = search.toLowerCase().split(" ");
    var i = 0;
    var l = searchFileStr.length;
  }
  if (typeof folderX !== "undefined") {
    try {
      // First execution
      var dataTree = [];
      var treeList = [];
      var eFolder = DriveApp.getFoldersByName(folderX).next();
      var eFoldId = eFolder.getId();
      var folderFiles = eFolder.getFiles();
      // var currentFolderFiles = DriveApp.getFolderById(eFoldId).getFiles();
      // var treeRoot = DriveApp.getFolderById(DriveApp.getFoldersByName("Forms").next().getId()).getFiles();
      while (folderFiles.hasNext()) {
        var allFiles = folderFiles.next();
        var currentFileName = allFiles.getName();
        var fileUrl = allFiles.getUrl();
        // treeList.push(fileUrl)
        // var fileX = "eas"
        // if (subFiles.getName().toLowerCase().split(" ").indexOf(fileX) > -1)
        var currentFileStr = currentFileName.toLowerCase().split(" ");
        var fileXIndex = [];
        for (i, l; i < l; i++) {
          var sfi = searchFileStr[i];
          var fxi = currentFileStr.indexOf(sfi);
          if (fxi > -1) {
            var myObj = convertToObjects([[fxi]], [sfi])[0];
          }
          fileXIndex.push(myObj);
        }
        var fileXIndexLen = fileXIndex.join("").length;
        var fileXincluded = currentFileName.toLowerCase().includes(search);
        if (fileXincluded || fileXIndexLen > 0) {
          // console.log(fileX + " " + DriveApp.getFolderById(eFoldId).getFiles().next().getName().toLowerCase().split(" ").indexOf(fileX) + " " +  DriveApp.getFolderById(eFoldId).getFiles().next().getName().toLowerCase().split(" "))
          dataTree.push(allFiles.getUrl());
        }
      }
      // if (fileX) {
      // var formFile = dataTree.filter((gf)=>{
      //   if (gf.toLowerCase().substring(fileX.toLowerCase()))
      //   return gf})
      //   console.log(typeof formFile[0])}
      var rndFiled = Math.floor(Math.random() * Math.floor(dataTree.length));
      var filed = dataTree[rndFiled];
      //  || treeList[Math.floor(Math.random() * (Math.floor(treeList.length)))]
      return filed;
    } catch (err) {
      console.log(err);
    }
  }
};

var matchManager = function (folderX, time) {
  // First execution
  var appTree = [];
  var pngTree = [];
  var pdfTree = [];
  var docList = [];
  var slideList = [];
  var sheetList = [];
  var formList = [];
  if (typeof folderX === "undefined") {
    var allFolders = folderManager();
    var rndFolder = Math.floor(Math.random() * Math.floor(allFolders.length));
    folderX = allFolders[rndFolder];
  }
  var eFolder = DriveApp.getFoldersByName(folderX).next();
  var eFoldId = eFolder.getId();
  var folderFiles = eFolder.getFiles();
  var folderDocs = eFolder.getFilesByType(MimeType.GOOGLE_DOCS);
  var folderSlides = eFolder.getFilesByType(MimeType.GOOGLE_SLIDES);
  var folderSheets = eFolder.getFilesByType(MimeType.GOOGLE_SHEETS);
  var folderForms = eFolder.getFilesByType(MimeType.GOOGLE_FORMS);
  var folderApps = eFolder.getFilesByType(MimeType.GOOGLE_APPS_SCRIPT);
  var folderPng = eFolder.getFilesByType(MimeType.PNG);
  var folderPdf = eFolder.getFilesByType(MimeType.PDF);
  // var currentFolderFiles = DriveApp.getFolderById(eFoldId).getFiles();
  // var treeRoot = DriveApp.getFolderById(DriveApp.getFoldersByName("Forms").next().getId()).getFiles();
  // return console.log(eFolder.getFilesByType(MimeType.GOOGLE_DOCS).hasNext())
  while (
    folderDocs.hasNext() ||
    folderSlides.hasNext() ||
    folderSheets.hasNext() ||
    folderForms.hasNext()
  ) {
    if (folderDocs.hasNext()) {
      var docFiles = folderDocs.next();
      var currentDocName = docFiles.getName();
      docList.push(currentDocName);
    }
    if (folderSlides.hasNext()) {
      var slideFiles = folderSlides.next();
      var currentSlideName = slideFiles.getName();
      slideList.push(currentSlideName);
    }
    if (folderSheets.hasNext()) {
      var sheetFiles = folderSheets.next();
      var currentSheetName = sheetFiles.getName();
      sheetList.push(currentSheetName);
    }
    if (folderForms.hasNext()) {
      var formFiles = folderForms.next();
      var currentFormName = formFiles.getName();
      formList.push(currentFormName);
    }
    // var fileUrl = allFiles.getUrl()
    // var fileEx = allFiles.getMimeType()
    // return console.log(fileEx)
  }
  while (folderApps.hasNext() || folderPng.hasNext() || folderPdf.hasNext()) {
    if (folderApps.hasNext()) {
      var appFiles = folderApps.next();
      var currentAppName = appFiles.getName();
      appTree.push(currentAppName);
    }
    if (folderPng.hasNext()) {
      var pngFiles = folderPng.next();
      var currentPngName = pngFiles.getName();
      pngTree.push(currentPngName);
    }
    if (folderPdf.hasNext()) {
      var pdfFiles = folderPdf.next();
      var currentPdfName = pdfFiles.getName();
      pdfTree.push(currentPdfName);
    }
    // var fileUrl = allFiles.getUrl()
    // var fileEx = allFiles.getMimeType()
    // return console.log(fileEx)
  }
  // return console.log(treeList)
  // var fileX = "eas"
  // if (subFiles.getName().toLowerCase().split(" ").indexOf(fileX) > -1)
  // var currentFileStr = currentFileName.toLowerCase().split(" ")
  // console.log(currentFileStr)
  // var match = fileMatch(fileX, treeList)
  return {
    docs: docList,
    slides: slideList,
    sheets: sheetList,
    forms: formList,
    apps: appTree,
    pngs: pngTree,
    pdfs: pdfTree,
  };
};

var fileMatch = function (fileX, stringArray) {
  if ([fileX].join("").length > 0) {
    var search = [fileX].join("");
    var searchFileStr = search.toLowerCase().split(" ");
    var i = 0;
    var l = searchFileStr.length;
  }
  var fileXIndex = [];
  stringArray.map((file) => {
    // var sfi = searchFileStr
    var fxi = file.toLowerCase().indexOf(fileX.toLowerCase());
    if (fxi > -1) {
      // var properFile = file
      var myObj = convertToObjects([[file]], [fxi])[0];
      fileXIndex.push(file);
    }
  });
  return fileXIndex;
};

var folderManager = function (folderX, time) {
  var elaspedTime;
  var folderTree = [];
  var tree = DriveApp.getFolders();
  while (tree.hasNext()) {
    folderTree.push(tree.next().getName());
  }
  if (folderX) {
    var match = folderMatch(folderX, folderTree);
    return match;
  } else {
    return folderTree;
  }
};

var folderMatch = function (folderX, stringArray) {
  if ([folderX].join("").length > 0) {
    var search = [folderX].join("");
    var searchFolderStr = search.toLowerCase().split(" ");
    var i = 0;
    var l = searchFolderStr.length;
  }
  var folderXIndex = [];
  stringArray.map((folder) => {
    // var sfi = searchFileStr
    var fxi = folder.toLowerCase().indexOf(folderX.toLowerCase());
    if (fxi > -1) {
      // var properFolder = folder
      var myObj = convertToObjects([[folder]], [fxi])[0];
      folderXIndex.push(folder);
    }
  });
  return folderXIndex;
};

var formsUrlsGlobal = function (fileX, time) {
  var treeRoot = DriveApp.getRootFolder().getFiles();
  while (treeRoot.hasNext()) {
    var elaspeTime = new Date() - time;
    var timeToExecute = maxTime - elaspeTime;
    var trueName = treeRoot.next();
    if (trueName.getName() === fileX) {
      // console.log("trueName: " + trueName.getName() + "\nelaspeTime: " + elaspeTime + "\ntimeToExecute: " + timeToExecute)
      return trueName.getUrl();
    }
  }
  var dataTree = [];
  var tree = DriveApp.getFolders();
  while (tree.hasNext()) {
    var elaspeTime = new Date() - time;
    var timeToExecute = maxTime - elaspeTime;
    var myTree = tree.next();
    dataTree.push(myTree.getId());
    // console.log("myTree: " + myTree.getName() + "\nelaspeTime: " + elaspeTime + "\ntimeToExecute: " + timeToExecute)
  }
  for (i = 0, l = dataTree.length; i < l; i++) {
    var numFolder = DriveApp.getFolderById(dataTree[i]).getFiles();
    while (numFolder.hasNext()) {
      var elaspeTime = new Date() - time;
      var timeToExecute = maxTime - elaspeTime;
      var trueNumName = numFolder.next();
      // console.log("trueNumName: " + trueNumName.getName() + "\nelaspeTime: " + elaspeTime + "\ntimeToExecute: " + timeToExecute)
      if (trueNumName.getName() === fileX) {
        return trueNumName.getUrl();
      }
    }
  }
};

var searchUrlsGlobal = function (fileX) {
  var rootFile = searchUrlsRoot(fileX);
  if (rootFile) {
    return rootFile;
  } else if (!rootFile) {
    var treeFile = searchUrlsTree(fileX);
    if (typeof treeFile === "object") {
      var rndFile = searchUrlsRandom();
      if (rndFile) {
        return rndFile;
      }
    } else {
      return treeFile;
    }
  }
};

var searchUrlsRoot = function (fileX) {
  var treeRoot = DriveApp.getRootFolder().getFiles();
  while (treeRoot.hasNext()) {
    var trueName = treeRoot.next();
    if (trueName.getName().includes(fileX)) {
      return trueName.getUrl();
    } else {
      return;
    }
  }
};

var searchUrlsTree = function (fileX) {
  var elaspedTime;
  var fileTree = [];
  var tree = DriveApp.getFolders();
  while (tree.hasNext()) {
    fileTree.push(tree.next().getId());
  }
  fileTree.map((id) => {
    var treeFolder = DriveApp.getFolderById(id);
    var numFolder = treeFolder.getFiles();
    while (numFolder.hasNext()) {
      elaspedTime = new Date().valueOf() - start;
      var trueNumName = numFolder.next();

      if (trueNumName.getName().includes(fileX)) {
        return trueNumName.getUrl();
      } else if (elaspedTime < oneTime) {
        break;
      }
    }
  });
  return matchManager(fileX);
};

var searchUrlsRandom = function () {
  var fileTree = [];
  var fileData = [];
  var dataTree = [];
  var trunk = DriveApp.getRootFolder();
  var tree = trunk.getFolders();
  while (tree.hasNext()) {
    var allFolders = tree.next();
    var allFolderIds = allFolders.getId();
    dataTree.push(allFolderIds);
  }
  dataTree.map((id) => {
    var folderLoop = DriveApp.getFolderById(id);
    var folderFiles = folderLoop.getFiles();
    while (folderFiles.hasNext()) {
      var allFiles = folderFiles.next();
      fileData.push(allFiles.getUrl());
    }
  });

  var rndFiled = Math.floor(Math.random() * Math.floor(fileData.length));
  var filed = fileData[rndFiled];
  return filed;
};

var searchTreeRoot = function (fileX) {
  var treeRoot = DriveApp.getRootFolder().getFiles();
  while (treeRoot.hasNext()) {
    var trueName = treeRoot.next();
    if (trueName.getName().includes(fileX)) {
      return trueName.getUrl();
    } else if (!trueName.getName().includes(fileX)) return trueName.getUrl();
  }
};

var searchDataTree = function (fileX) {
  var dataTree = [];
  var tree = DriveApp.getFolders();
  while (tree.hasNext()) {
    dataTree.push(tree.next().getId());
  }
  for (i = 0, l = dataTree.length; i < l; i++) {
    var numFolder = DriveApp.getFolderById(dataTree[i]).getFiles();
    while (numFolder.hasNext()) {
      var trueNumName = numFolder.next();
      if (trueNumName.getName().includes(fileX)) {
        return trueNumName.getUrl();
      } else if (!trueNumName.getName().includes(fileX))
        return trueNumName.getUrl();
    }
  }
};
