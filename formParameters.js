var formMaker = function (fileName, folderX, time) {
  console.log(
    JSON.stringify(this["start"]) +
      "\n" +
      arguments.callee.name +
      "\n!fileName, = " +
      !fileName,
  );
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
  console.log(
    JSON.stringify(this["start"]) +
      "\n" +
      arguments.callee.name +
      "\n!fileX, = " +
      !fileX,
  );
  if ([fileX].join("").length > 0) {
    console.log(
      "formUrls: \nDeclaring search = [" + fileX + "].join(" + "" + ")",
    );
    var search = [fileX].toString();
    var searchFileStr = search.toLowerCase().split(" ");
    var i = 0;
    var l = searchFileStr.length;
  }
  if (typeof folderX !== "undefined") {
    try {
      // First execution
      var dataTree = [];
      console.log(
        "formUrls: \nDeclaring eFolder = DriveApp.getFoldersByName(" +
          folderX +
          ").next()",
      );
      var eFolder = DriveApp.getFoldersByName(folderX).next();
      var folderFiles = eFolder.getFiles();
      while (folderFiles.hasNext()) {
        var allFiles = folderFiles.next();
        var currentFileName = allFiles.getName();
        var currentFileStr = currentFileName.toLowerCase().split(" ");
        var fileXIndex = [];
        for (i, l; i < l; i++) {
          var sfi = searchFileStr[i];
          var fxi = currentFileStr.indexOf(sfi);
          if (fxi > -1) {
            var myObj = convertToObjects([[fxi]], [sfi], start)[0];
          }
          fileXIndex.push(myObj);
        }
        var fileXIndexLen = fileXIndex.join("").length;
        var fileXincluded = currentFileName.toLowerCase().includes(search);
        if (fileXincluded || fileXIndexLen > 0) {
          dataTree.push(allFiles.getUrl());
        }
      }
      var rndFiled = Math.floor(Math.random() * Math.floor(dataTree.length));
      var filed = dataTree[rndFiled];
      return filed;
    } catch (err) {
      console.log(err);
      return "Error loading files " + err;
    }
  }
  return;
};

var formsUrlsGlobal = function (fileX, time) {
  console.log(
    JSON.stringify(this["start"]) +
      "\n" +
      arguments.callee.name +
      "\n!fileName, = " +
      !fileX,
  );
  if (!fileX && !time) {
    var numVarRnd = randNum(arguments.callee.name);
    var arrDRnd = appSort(numVarRnd);
    var fileX = randomSubstance(0, 6, arrDRnd).myNewArr;
    var time = start;
  }
  if (!time) {
    var time = start;
  }
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
  console.log(
    JSON.stringify(this["start"]) +
      "\n" +
      arguments.callee.name +
      "\n!fileName, = " +
      !fileX,
  );
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
  console.log(
    JSON.stringify(this["start"]) +
      "\n" +
      arguments.callee.name +
      "\n!fileName, = " +
      !fileX,
  );
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
  console.log(
    JSON.stringify(this["start"]) +
      "\n" +
      arguments.callee.name +
      "\n!fileName, = " +
      !fileX,
  );
  var elapsedTime;
  var fileTree = [];
  var tree = DriveApp.getFolders();
  while (tree.hasNext()) {
    fileTree.push(tree.next().getId());
  }
  fileTree.map((id) => {
    var treeFolder = DriveApp.getFolderById(id);
    var numFolder = treeFolder.getFiles();
    while (numFolder.hasNext()) {
      elapsedTime = new Date().valueOf() - start;
      var trueNumName = numFolder.next();

      if (trueNumName.getName().includes(fileX)) {
        return trueNumName.getUrl();
      } else if (elapsedTime < oneTime) {
        break;
      }
    }
  });
  return matchManager(fileX);
};

var searchUrlsRandom = function () {
  console.log(JSON.stringify(this["start"]) + "\n" + arguments.callee.name);

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
  console.log(
    JSON.stringify(this["start"]) +
      "\n" +
      arguments.callee.name +
      "\n!fileName, = " +
      !fileX,
  );
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
