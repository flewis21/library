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
  if (typeof formsUrls(fileName, folderX, time) !== "undefined") {
    console.log("formMaker: \nformsUrls(" + fileName, folderX, time + ")");
    return formsUrls(fileName, folderX, time);
  }
  if (fileName !== "") {
    console.log(
      "formMaker: \nDeclaring newFile = FormApp.create(" + fileName + ")",
    );
    var newFile = FormApp.create(fileName);
    console.log(
      "formMaker: \nfileManager(" + newFile.getId(),
      folderX,
      time + ")",
    );
    fileManager(newFile.getId(), folderX, time);
    return newFile;
  }
};

var formsUrls = function (fileX, folderX, time) {
  if ([fileX].join("").length > 0) {
    // console.log("formUrls: \nDeclaring")
    console.log(
      "formUrls: \nDeclaring search = [" + fileX + "].join(" + "" + ")",
    );
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
      console.log(
        "formUrls: \nDeclaring eFolder = DriveApp.getFoldersByName(" +
          folderX +
          ").next()",
      );
      var eFolder = DriveApp.getFoldersByName(folderX).next();
      var eFoldId = eFolder.getId();
      var folderFiles = eFolder.getFiles();
      // var currentFolderFiles = DriveApp.getFolderById(eFoldId).getFiles();
      // var treeRoot = DriveApp.getFolderById(DriveApp.getFoldersByName("Forms").next().getId()).getFiles();
      while (folderFiles.hasNext()) {
        var allFiles = folderFiles.next();
        var currentFileName = allFiles.getName();
        console.log("formUrls: \ncurrent file name: " + currentFileName);
        var fileUrl = allFiles.getUrl();
        // treeList.push(fileUrl)
        // var fileX = "eas"
        // if (subFiles.getName().toLowerCase().split(" ").indexOf(fileX) > -1)
        console.log(
          "formUrls: \nDeclaring currentFileStr = currentFileName.toLowerCase().split(" +
            " " +
            ")",
        );
        var currentFileStr = currentFileName.toLowerCase().split(" ");
        var fileXIndex = [];
        for (i, l; i < l; i++) {
          console.log("formUrls: \nDeclaring sfi = searchFileStr[" + i + "]");
          var sfi = searchFileStr[i];
          console.log(
            "formUrls: \nDeclaring fxi = currentFileStr.indexOf(" + sfi + ")",
          );
          var fxi = currentFileStr.indexOf(sfi);
          if (fxi > -1) {
            console.log(
              "formUrls: \nDeclaring myObj = convertToObjects(" + [[fxi]],
              [sfi] + ")[0]",
            );
            var myObj = convertToObjects([[fxi]], [sfi])[0];
          }
          console.log("formUrls: \nfileXIndex.push(" + myObj + ")");
          fileXIndex.push(myObj);
        }
        var fileXIndexLen = fileXIndex.join("").length;
        console.log(
          "formUrls: \nDeclaring fileXincluded = currentFileName.toLowerCase().includes(" +
            search +
            ")",
        );
        var fileXincluded = currentFileName.toLowerCase().includes(search);
        if (fileXincluded || fileXIndexLen > 0) {
          // console.log(fileX + " " + DriveApp.getFolderById(eFoldId).getFiles().next().getName().toLowerCase().split(" ").indexOf(fileX) + " " +  DriveApp.getFolderById(eFoldId).getFiles().next().getName().toLowerCase().split(" "))
          console.log("formUrls: \ndataTree.push(" + allFiles.getUrl() + ")");
          dataTree.push(allFiles.getUrl());
        }
      }
      // if (fileX) {
      // var formFile = dataTree.filter((gf)=>{
      //   if (gf.toLowerCase().substring(fileX.toLowerCase()))
      //   return gf})
      //   console.log(typeof formFile[0])}
      console.log(
        "formUrls: \nDeclaring rndFiled = Math.floor(" +
          Math.random() * Math.floor(dataTree.length) +
          ")",
      );
      var rndFiled = Math.floor(Math.random() * Math.floor(dataTree.length));
      console.log("formUrls: \nDeclaring filed = dataTree[" + rndFiled + "]");
      var filed = dataTree[rndFiled];
      //  || treeList[Math.floor(Math.random() * (Math.floor(treeList.length)))]
      return filed;
    } catch (err) {
      console.log(err);
    }
  }
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
