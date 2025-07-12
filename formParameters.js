var formMaker = function (fileName, folderX, time) {
  console.log(
    functionRegistry.time +
      "\n" +
      arguments.callee.name +
      "\n!" +
      fileName +
      ", = " +
      !fileName,
  );
  var forEx = formsUrls(fileName, folderX, time)
  if (typeof forEx !== "undefined") {
    console.log("formMaker: \nformsUrls(" + fileName, folderX, time + ")");
    return forEx;
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
    try {
      fileManager(newFile.getId(), folderX, time);
    } catch (error) {
      Logger.log("Error moving file: " + error.toString());
    }
    return newFile;
  }
};

var formsUrlsGlobal = function (fileX, time) {
  console.log(
    functionRegistry.time +
      "\n" +
      arguments.callee.name +
      "\nfileX is !" +
      !fileX +
      ", = " +
      fileX +
      "\ntime is !" +
      !functionRegistry.time +
      ", = " +
      functionRegistry.time,
  );
  if (!fileX && !time) {
    var numVarRnd = randNum(arguments.callee.name);
    var arrDRnd = appSort(numVarRnd);
    var fileX = randomSubstance(0, 6, arrDRnd).myNewArr;
    var time = functionRegistry.time;
  }
  if (!time) {
    var time = functionRegistry.time;
  }
  var treeRoot = DriveApp.getRootFolder().getFiles();
  while (treeRoot.hasNext()) {
    var elaspeTime = new Date() - functionRegistry.time;
    var timeToExecute = functionRegistry.maxTime - elaspeTime;
    var trueName = treeRoot.next();
    if (trueName.getName() === fileX) {
      // console.log("trueName: " + trueName.getName() + "\nelaspeTime: " + elaspeTime + "\ntimeToExecute: " + timeToExecute)
      return trueName.getUrl();
    }
  }
  var dataTree = [];
  var tree = DriveApp.getFolders();
  while (tree.hasNext()) {
    var elaspeTime = new Date() - functionRegistry.time;
    var timeToExecute = functionRegistry.maxTime - elaspeTime;
    var myTree = tree.next();
    dataTree.push(myTree.getId());
    // console.log("myTree: " + myTree.getName() + "\nelaspeTime: " + elaspeTime + "\ntimeToExecute: " + timeToExecute)
  }
  for (i = 0, l = dataTree.length; i < l; i++) {
    var numFolder = DriveApp.getFolderById(dataTree[i]).getFiles();
    while (numFolder.hasNext()) {
      var elaspeTime = new Date() - functionRegistry.time;
      var timeToExecute = functionRegistry.maxTime - elaspeTime;
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
    functionRegistry.time +
      "\n" +
      arguments.callee.name +
      "\n!" +
      fileX +
      ", = " +
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
    functionRegistry.time +
      "\n" +
      arguments.callee.name +
      "\n!" +
      fileX +
      ", = " +
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
    functionRegistry.time +
      "\n" +
      arguments.callee.name +
      "\n!" +
      fileX +
      ", = " +
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
  console.log(functionRegistry.time + "\n" + arguments.callee.name);

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
    functionRegistry.time +
      "\n" +
      arguments.callee.name +
      "\n!" +
      fileX +
      ", = " +
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
  console.log(
    functionRegistry.time +
      "\n" +
      arguments.callee.name +
      "\n!" +
      fileX +
      ", = " +
      !fileX,
  );
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
