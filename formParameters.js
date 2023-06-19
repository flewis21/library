var start = new Date();
var oneTime = 1 * 59.9 * 1000;
var twoTime = 2 * 59.9 * 1000;
var threeTime = 3 * 59.9 * 1000;
var fourTime = 4 * 59.9 * 1000;
var fiveTime = 5 * 59.9 * 1000;
var maxTime = 6 * 59.9 * 1000;
var cache = CacheService.getScriptCache();

var formMaker = function (fileName, time) {
  if (typeof formsUrlsGlobal(fileName, time) !== "undefined") {
    return formsUrlsGlobal(fileName, time);
  }
  var newFile = FormApp.create(fileName);
  return newFile;
};

var formsUrls = function (fileX) {
  var startTime = start;
  var timedOut = maxTime;
  try {
    // First execution
    var dataTree = [];
    var treeList = [];
    var currentFolder = DriveApp.getFolderById(
      DriveApp.getFoldersByName("Forms").next().getId()
    );
    var currentFolderFiles = currentFolder.getFiles();
    // var treeRoot = DriveApp.getFolderById(DriveApp.getFoldersByName("Forms").next().getId()).getFiles();
    while (currentFolderFiles.hasNext()) {
      // Exit before script times out
      if (new Date().getTime() - startTime.getTime() > timedOut) {
        return;
      }
      var subFiles = currentFolderFiles.next();
      treeList.push(subFiles.getUrl());
      // var fileX = "eas"
      // if (subFiles.getName().toLowerCase().split(" ").indexOf(fileX) > -1)
      if (
        subFiles
          .getName()
          .toLowerCase()
          .split(" ")
          .toString()
          .includes(fileX) ||
        subFiles.getName().toLowerCase().indexOf(fileX) > -1
      ) {
        console.log(
          fileX +
            " " +
            subFiles.getName().toLowerCase().split(" ").indexOf(fileX) +
            " " +
            subFiles.getName().toLowerCase().split(" ")
        );
        dataTree.push(subFiles.getUrl());
      }
    }
    if (fileX) {
      var formFile = dataTree.filter((gf) => {
        if (gf.toLowerCase().substring(fileX.toLowerCase())) return gf;
      });
      console.log(typeof formFile[0]);
    }
    var filed =
      dataTree[Math.floor(Math.random() * Math.floor(dataTree.length))] ||
      treeList[Math.floor(Math.random() * Math.floor(treeList.length))];
    return filed;
  } catch (err) {
    console.log(err);
  }
};

var formsUrlsGlobal = function (fileX, time) {
  var treeRoot = DriveApp.getRootFolder().getFiles();
  while (treeRoot.hasNext()) {
    var elaspeTime = new Date() - time;
    var timeToExecute = maxTime - elaspeTime;
    var trueName = treeRoot.next();
    if (trueName.getName() === fileX) {
      console.log(
        "trueName: " +
          trueName.getName() +
          "\nelaspeTime: " +
          elaspeTime +
          "\ntimeToExecute: " +
          timeToExecute
      );
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
    console.log(
      "myTree: " +
        myTree.getName() +
        "\nelaspeTime: " +
        elaspeTime +
        "\ntimeToExecute: " +
        timeToExecute
    );
  }
  for (i = 0, l = dataTree.length; i < l; i++) {
    var numFolder = DriveApp.getFolderById(dataTree[i]).getFiles();
    while (numFolder.hasNext()) {
      var elaspeTime = new Date() - time;
      var timeToExecute = maxTime - elaspeTime;
      var trueNumName = numFolder.next();
      console.log(
        "trueNumName: " +
          trueNumName.getName() +
          "\nelaspeTime: " +
          elaspeTime +
          "\ntimeToExecute: " +
          timeToExecute
      );
      if (trueNumName.getName() === fileX) {
        return trueNumName.getUrl();
      }
    }
  }
};

var searchUrlsGlobal = function (fileX) {
  var treeRoot = DriveApp.getRootFolder().getFiles();
  while (treeRoot.hasNext()) {
    var trueName = treeRoot.next();
    if (trueName.getName().includes(fileX)) return trueName.getUrl();
  }
  var dataTree = [];
  var tree = DriveApp.getFolders();
  while (tree.hasNext()) {
    dataTree.push(tree.next().getId());
  }
  for (i = 0, l = dataTree.length; i < l; i++) {
    var numFolder = DriveApp.getFolderById(dataTree[i]).getFiles();
    while (numFolder.hasNext()) {
      var trueNumName = numFolder.next();
      if (trueNumName.getName().includes(fileX)) return trueNumName.getUrl();
    }
  }
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
