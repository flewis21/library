var driveManager = function () {
  var folderMain = folderManager();
  var fileList = [];
  while (fileList.length === 0) {
    var rndFolder = Math.floor(Math.random() * Math.floor(folderMain.length));
    folder = folderMain[rndFolder];
    fileList = matchManager(folder).forms;
  }
  var eFolder = DriveApp.getFoldersByName(folder).next();
  var rndFiled = Math.floor(Math.random() * Math.floor(fileList.length));
  var file = fileList[rndFiled];
  var folderFile = eFolder.getFilesByName(file);
  var dataTree = [];
  while (folderFile.hasNext()) {
    var myFile = folderFile.next();
    var currentFileUrl = myFile.getUrl();
    // var currentFileUrl =  FormApp.openByUrl(myFileUrl).getPublishedUrl();
    dataTree.push(currentFileUrl);
  }
  var rndFiledMain = Math.floor(Math.random() * Math.floor(dataTree.length));
  var filedMain = dataTree[rndFiledMain];
  return filedMain;
};

var driveManagerFilter = function (filterFiles) {
  var folderMain = folderManager();
  var fileList = [];
  var lowList = [];
  while (lowList.length === 0) {
    var rndFolder = Math.floor(Math.random() * Math.floor(folderMain.length));
    folder = folderMain[rndFolder];
    fileList = matchManager(folder).forms;
    for (i = 0, l = fileList.length; i < l; i++) {
      var lowListEx =
        fileList[i]
          .toLowerCase()
          .indexOf([filterFiles].join("").toLowerCase()) > -1;
      if (lowListEx) {
        lowList.push(fileList[i]);
      }
    }
    for (i = 0, l = fileList.length; i < l; i++) {
      var lowListIn = fileList[i]
        .toLowerCase()
        .includes([filterFiles].join("").toLowerCase());
      if (lowListIn) {
        if (lowList.indexOf(fileList[i]) === -1) {
          lowList.push(fileList[i]);
        }
      }
    }
  }
  // return lowList
  var eFolder = DriveApp.getFoldersByName(folder).next();
  var rndFiled = Math.floor(Math.random() * Math.floor(lowList.length));
  var file = lowList[rndFiled];
  var folderFile = eFolder.getFilesByName(file);
  var dataTree = [];
  while (folderFile.hasNext()) {
    var myFile = folderFile.next();
    var currentFileUrl = myFile.getUrl();
    // var currentFileUrl =  FormApp.openByUrl(myFileUrl).getPublishedUrl();
    dataTree.push(currentFileUrl);
  }
  var rndFiledMain = Math.floor(Math.random() * Math.floor(dataTree.length));
  var filedMain = dataTree[rndFiledMain];
  return filedMain;
};

var driveForms = function () {
  var fileList = [];
  while (fileList.length === 0) {
    fileList = matchManager("Forms").forms;
  }
  var eFolder = DriveApp.getFoldersByName("Forms").next();
  var rndFiled = Math.floor(Math.random() * Math.floor(fileList.length));
  var file = fileList[rndFiled];
  var folderFile = eFolder.getFilesByName(file);
  var dataTree = [];
  while (folderFile.hasNext()) {
    var myFile = folderFile.next();
    console.log(myFile.getName());
    var myFileUrl = myFile.getUrl();
    var currentFileUrl = FormApp.openByUrl(myFileUrl).getPublishedUrl();
    dataTree.push(currentFileUrl);
  }
  console.log(dataTree);
  var rndFiledMain = Math.floor(Math.random() * Math.floor(dataTree.length));
  console.log(dataTree.length);
  console.log(rndFiledMain);
  var filedMain = dataTree[rndFiledMain];
  console.log(filedMain);
  return filedMain;
};

var driveFormsFilter = function (filterFiles) {
  var lowList = [];
  while (lowList.length === 0) {
    fileList = matchManager("Forms").forms;
    for (i = 0, l = fileList.length; i < l; i++) {
      var lowListEx =
        fileList[i]
          .toLowerCase()
          .indexOf([filterFiles].join("").toLowerCase()) > -1;
      if (lowListEx) {
        lowList.push(fileList[i]);
      }
    }
    for (i = 0, l = fileList.length; i < l; i++) {
      var lowListIn = fileList[i]
        .toLowerCase()
        .includes([filterFiles].join("").toLowerCase());
      if (lowListIn) {
        if (lowList.indexOf(fileList[i]) === -1) {
          lowList.push(fileList[i]);
        }
      }
    }
  }
  // return lowList
  var eFolder = DriveApp.getFoldersByName("Forms").next();
  var rndFiled = Math.floor(Math.random() * Math.floor(lowList.length));
  var file = lowList[rndFiled];
  var folderFile = eFolder.getFilesByName(file);
  var dataTree = [];
  while (folderFile.hasNext()) {
    var myFile = folderFile.next();
    var myFileUrl = myFile.getUrl();
    var currentFileUrl = FormApp.openByUrl(myFileUrl).getPublishedUrl();
    dataTree.push(currentFileUrl);
  }
  var rndFiledMain = Math.floor(Math.random() * Math.floor(dataTree.length));
  var filedMain = dataTree[rndFiledMain];
  return filedMain;
};

var driveWebForms = function () {
  var fileList = [];
  while (fileList.length === 0) {
    fileList = matchManager("webForms").forms;
  }
  // return console.log(fileList)
  var eFolder = DriveApp.getFoldersByName("webForms").next();
  var rndFiled = Math.floor(Math.random() * Math.floor(fileList.length));
  var file = fileList[rndFiled];
  var folderFile = eFolder.getFilesByName(file);
  var dataTree = [];
  while (folderFile.hasNext()) {
    var myFile = folderFile.next();
    var myFileUrl = myFile.getUrl();
    var currentFileUrl = FormApp.openByUrl(myFileUrl).getPublishedUrl();
    dataTree.push(currentFileUrl);
  }
  // return console.log(dataTree)
  var rndFiledMain = Math.floor(Math.random() * Math.floor(dataTree.length));
  var filedMain = dataTree[rndFiledMain];
  return filedMain;
};

var driveWebFormsFilter = function (filterFiles) {
  var fileList = [];
  var lowList = [];
  while (lowList.length === 0) {
    fileList = matchManager("webForms").forms;
    for (i = 0, l = fileList.length; i < l; i++) {
      var lowListEx =
        fileList[i]
          .toLowerCase()
          .indexOf([filterFiles].join("").toLowerCase()) > -1;
      if (lowListEx) {
        lowList.push(fileList[i]);
      }
    }
    for (i = 0, l = fileList.length; i < l; i++) {
      var lowListIn = fileList[i]
        .toLowerCase()
        .includes([filterFiles].join("").toLowerCase());
      if (lowListIn) {
        if (lowList.indexOf(fileList[i]) === -1) {
          lowList.push(fileList[i]);
        }
      }
    }
  }
  // return lowList
  var eFolder = DriveApp.getFoldersByName("webForms").next();
  var rndFiled = Math.floor(Math.random() * Math.floor(lowList.length));
  var file = lowList[rndFiled];
  var folderFile = eFolder.getFilesByName(file);
  var dataTree = [];
  while (folderFile.hasNext()) {
    var myFile = folderFile.next();
    var myFileUrl = myFile.getUrl();
    var currentFileUrl = FormApp.openByUrl(myFileUrl).getPublishedUrl();
    dataTree.push(currentFileUrl);
  }
  var rndFiledMain = Math.floor(Math.random() * Math.floor(dataTree.length));
  var filedMain = dataTree[rndFiledMain];
  return filedMain;
};

var driveVideoForms = function () {
  var fileList = [];
  while (fileList.length === 0) {
    fileList = matchManager("videoForms").forms;
  }
  // return console.log(fileList)
  var eFolder = DriveApp.getFoldersByName("videoForms").next();
  var rndFiled = Math.floor(Math.random() * Math.floor(fileList.length));
  var file = fileList[rndFiled];
  var folderFile = eFolder.getFilesByName(file);
  var dataTree = [];
  while (folderFile.hasNext()) {
    var myFile = folderFile.next();
    var myFileUrl = myFile.getUrl();
    var currentFileUrl = FormApp.openByUrl(myFileUrl).getPublishedUrl();
    dataTree.push(currentFileUrl);
  }
  // return console.log(dataTree)
  var rndFiledMain = Math.floor(Math.random() * Math.floor(dataTree.length));
  var filedMain = dataTree[rndFiledMain];
  return filedMain;
};

var driveVideoFormsFilter = function (filterFiles) {
  var fileList = [];
  var lowList = [];
  while (lowList.length === 0) {
    fileList = matchManager("videoForms").forms;
    for (i = 0, l = fileList.length; i < l; i++) {
      var lowListEx =
        fileList[i]
          .toLowerCase()
          .indexOf([filterFiles].join("").toLowerCase()) > -1;
      if (lowListEx) {
        lowList.push(fileList[i]);
      }
    }
    for (i = 0, l = fileList.length; i < l; i++) {
      var lowListIn = fileList[i]
        .toLowerCase()
        .includes([filterFiles].join("").toLowerCase());
      if (lowListIn) {
        if (lowList.indexOf(fileList[i]) === -1) {
          lowList.push(fileList[i]);
        }
      }
    }
  }
  // return lowList
  var eFolder = DriveApp.getFoldersByName("videoForms").next();
  var rndFiled = Math.floor(Math.random() * Math.floor(lowList.length));
  var file = lowList[rndFiled];
  var folderFile = eFolder.getFilesByName(file);
  var dataTree = [];
  while (folderFile.hasNext()) {
    var myFile = folderFile.next();
    var myFileUrl = myFile.getUrl();
    var currentFileUrl = FormApp.openByUrl(myFileUrl).getPublishedUrl();
    dataTree.push(currentFileUrl);
  }
  var rndFiledMain = Math.floor(Math.random() * Math.floor(dataTree.length));
  var filedMain = dataTree[rndFiledMain];
  return filedMain;
};

var driveDocForms = function () {
  var fileList = [];
  while (fileList.length === 0) {
    fileList = matchManager("docForms").forms;
  }
  // return console.log(fileList)
  var eFolder = DriveApp.getFoldersByName("docForms").next();
  var rndFiled = Math.floor(Math.random() * Math.floor(fileList.length));
  var file = fileList[rndFiled];
  var folderFile = eFolder.getFilesByName(file);
  var dataTree = [];
  while (folderFile.hasNext()) {
    var myFile = folderFile.next();
    var myFileUrl = myFile.getUrl();
    var currentFileUrl = FormApp.openByUrl(myFileUrl).getPublishedUrl();
    dataTree.push(currentFileUrl);
  }
  // return console.log(dataTree)
  var rndFiledMain = Math.floor(Math.random() * Math.floor(dataTree.length));
  var filedMain = dataTree[rndFiledMain];
  return filedMain;
};

var driveDocFormsFilter = function (filterFiles) {
  var fileList = [];
  var lowList = [];
  while (lowList.length === 0) {
    fileList = matchManager("docForms").forms;
    for (i = 0, l = fileList.length; i < l; i++) {
      var lowListEx =
        fileList[i]
          .toLowerCase()
          .indexOf([filterFiles].join("").toLowerCase()) > -1;
      if (lowListEx) {
        lowList.push(fileList[i]);
      }
    }
    for (i = 0, l = fileList.length; i < l; i++) {
      var lowListIn = fileList[i]
        .toLowerCase()
        .includes([filterFiles].join("").toLowerCase());
      if (lowListIn) {
        if (lowList.indexOf(fileList[i]) === -1) {
          lowList.push(fileList[i]);
        }
      }
    }
  }
  // return lowList
  var eFolder = DriveApp.getFoldersByName("docForms").next();
  var rndFiled = Math.floor(Math.random() * Math.floor(lowList.length));
  var file = lowList[rndFiled];
  var folderFile = eFolder.getFilesByName(file);
  var dataTree = [];
  while (folderFile.hasNext()) {
    var myFile = folderFile.next();
    var myFileUrl = myFile.getUrl();
    var currentFileUrl = FormApp.openByUrl(myFileUrl).getPublishedUrl();
    dataTree.push(currentFileUrl);
  }
  var rndFiledMain = Math.floor(Math.random() * Math.floor(dataTree.length));
  var filedMain = dataTree[rndFiledMain];
  return filedMain;
};

var drivePictForms = function () {
  var fileList = [];
  while (fileList.length === 0) {
    fileList = matchManager("pictForms").forms;
  }
  // return console.log(fileList)
  var eFolder = DriveApp.getFoldersByName("pictForms").next();
  var rndFiled = Math.floor(Math.random() * Math.floor(fileList.length));
  var file = fileList[rndFiled];
  var folderFile = eFolder.getFilesByName(file);
  var dataTree = [];
  while (folderFile.hasNext()) {
    var myFile = folderFile.next();
    var myFileUrl = myFile.getUrl();
    var currentFileUrl = FormApp.openByUrl(myFileUrl).getPublishedUrl();
    dataTree.push(currentFileUrl);
  }
  // return console.log(dataTree)
  var rndFiledMain = Math.floor(Math.random() * Math.floor(dataTree.length));
  var filedMain = dataTree[rndFiledMain];
  return filedMain;
};

var drivePictFormsFilter = function (filterFiles) {
  var fileList = [];
  var lowList = [];
  while (lowList.length === 0) {
    fileList = matchManager("pictForms").forms;
    for (i = 0, l = fileList.length; i < l; i++) {
      var lowListEx =
        fileList[i]
          .toLowerCase()
          .indexOf([filterFiles].join("").toLowerCase()) > -1;
      if (lowListEx) {
        lowList.push(fileList[i]);
      }
    }
    for (i = 0, l = fileList.length; i < l; i++) {
      var lowListIn = fileList[i]
        .toLowerCase()
        .includes([filterFiles].join("").toLowerCase());
      if (lowListIn) {
        if (lowList.indexOf(fileList[i]) === -1) {
          lowList.push(fileList[i]);
        }
      }
    }
  }
  // return lowList
  var eFolder = DriveApp.getFoldersByName("pictForms").next();
  var rndFiled = Math.floor(Math.random() * Math.floor(lowList.length));
  var file = lowList[rndFiled];
  var folderFile = eFolder.getFilesByName(file);
  var dataTree = [];
  while (folderFile.hasNext()) {
    var myFile = folderFile.next();
    var myFileUrl = myFile.getUrl();
    var currentFileUrl = FormApp.openByUrl(myFileUrl).getPublishedUrl();
    dataTree.push(currentFileUrl);
  }
  var rndFiledMain = Math.floor(Math.random() * Math.floor(dataTree.length));
  var filedMain = dataTree[rndFiledMain];
  return filedMain;
};

var driveUrls = function (fileX) {
  if (typeof fileX !== "undefined") {
    var file = DriveApp.getRootFolder().getFilesByName(fileX);
    if (file.hasNext()) {
      while (file.hasNext()) {
        return file.next().getUrl();
      }
    }
  } else {
    return;
  }
};

var fileBrowser = function (folder, file) {
  console.log([folder, file]);
  var foldersObj = folderManager();
  var glFolders = [];
  for (var key in foldersObj) {
    glFolders.push(foldersObj[key]);
  }
  // if (glFolders.indexOf(folder) === -1) {folder}
  if (
    typeof folder === "undefined" ||
    folder === null ||
    [folder].join("").length === 0 ||
    glFolders.indexOf(folder) === -1
  ) {
    var folder =
      glFolders[Math.floor(Math.random() * Math.floor(glFolders.length))];
  }
  console.log(folder);
  var filesObj = fileMatchManager(folder);
  var glFiles = [];
  for (var key in filesObj) {
    glFiles.push(filesObj[key]);
  }
  console.log("glFiles.length: " + glFiles.length);
  if (
    typeof file === "undefined" ||
    file === null ||
    [file].join("").length === 0 ||
    (glFiles.indexOf(file) === -1 && glFiles.length > 0)
  ) {
    var file = glFiles[Math.floor(Math.random() * Math.floor(glFiles.length))];
  }
  if (
    typeof folder !== "undefined" ||
    folder !== null ||
    [folder].join("").length > 0 ||
    glFolders.indexOf(folder) !== -1
  ) {
    console.log("folder: " + folder);
    var eFolder = DriveApp.getFoldersByName(folder).next();
    // return eFolder
  } else {
    var eFolder = DriveApp;
    return eFolder;
  }
  var dataTree = [];
  if (
    typeof file !== "undefined" ||
    file !== null ||
    [file].join("").length > 0 ||
    glFiles.indexOf(file) !== -1
  ) {
    console.log("file: " + file);
    var folderFile = eFolder.getFilesByName(file);
    while (folderFile.hasNext()) {
      var myFile = folderFile.next();
      var currentFileUrl = myFile.getUrl();
      // return console.log(currentFileUrl)
      dataTree.push(currentFileUrl);
    }
    if (dataTree.length === 0) {
      var driveFile = DriveApp.getFilesByName(file);
      while (driveFile.hasNext()) {
        var myDriveFile = driveFile.next();
        var currentDriveFileUrl = myDriveFile.getUrl();
        // return console.log(currentDriveFileUrl)
        dataTree.push(currentDriveFileUrl);
      }
    }
  } else {
    var folderFile = eFolder;
    return folderFile;
  }
  console.log(dataTree);
  var rndFiledMain = Math.floor(Math.random() * Math.floor(dataTree.length));
  var filedMain = dataTree[rndFiledMain];
  return filedMain;
};

var fbTester = function () {
  var res = fileBrowser("Toyota", "img_0053.jpg");
  return console.log(res);
};

var fileManager = function (fileX, folder, time, content, mimeType) {
  if (typeof fileX !== "undefined") {
    console.log("calling folderIdGlobal with " + folder);
    var folderId = folderIdGlobal(folder, time);
    console.log("calling DriveApp with " + fileX + " to get the file name");
    folderIdName = DriveApp.getFileById(fileX).getName();
    console.log(
      "calling DriveApp with " +
        folderIdName +
        " to search the root folder for the file",
    );
    var file = DriveApp.getRootFolder().getFilesByName(folderIdName);
    var elaspeTime = new Date() - time;
    var myFile = file.next();
    var timeToExecute = maxTime - elaspeTime;
    // console.log("that function: " + arguments.callee.caller.name + "\nthis function: " + arguments.callee.name + "\nmyFile: " + myFile.getName() + "\nelaspeTime: " + elaspeTime + "\ntimeToExecute: " + timeToExecute)
    if (myFile) {
      // console.log(myFile)
      console.log(
        "calling DriveApp with id of file found in root drive - " + folderId,
      );
      myFile.moveTo(DriveApp.getFolderById(folderId));
      return;
    } else {
      // DriveApp.getFolderById(folderId).createFile(fileX,content,mimeType)
      return dtlsMain(fileX);
    }
  } else {
    return;
  }
};

var folderIdGlobal = function (folderX, time) {
  console.log("calling DriveApp");
  var tree = DriveApp.getFolders();
  console.log("Receiving from DriveApp - " + tree);
  while (tree.hasNext()) {
    var elaspeTime = new Date() - time;
    var timeToExecute = maxTime - elaspeTime;
    var myId = tree.next();
    var id = myId.getId();
    var myFolder = DriveApp.getFolderById(id).getName();
    console.log("Receiving from DriveApp - " + myFolder);
    // console.log("that function: " + arguments.callee.caller.name + "\nthis function: " + arguments.callee.name + "\nmyFolder: " + myFolder + "\nelaspeTime: " + elaspeTime + "\ntimeToExecute: " + timeToExecute)
    if (folderX === myFolder) {
      return id;
    }
  }
};

var rndUrls = function () {
  var treeRoot = DriveApp.getRootFolder().getFiles();
  while (treeRoot.hasNext()) {
    var trueName = treeRoot.next();
    console.log(
      trueName.getName() +
        " || / || " +
        trueName.getName()[
          Object.keys(trueName.getName())[
            Math.floor(
              Math.random() *
                Math.floor(Object.keys(trueName.getName()).length),
            )
          ]
        ],
    );
    var truArray = [];
    for (var i = 0, l = trueName.getName().length; i < l; i++) {
      console.log(truArray.push([trueName.getName()][i]));
    }
    if (trueName.getName()) return trueName.getUrl();
  }
};

function shareDrive() {
  var dApp = DriveApp;
  var folderIter = dApp.getFolders();
  var driveFiles = [];
  while (folderIter.hasNext()) {
    var folder = folderIter.next();
    var filesIter = folder.getFiles();
    while (filesIter.hasNext()) {
      var file = filesIter.next();
      driveFiles.push([file.getName()]);
    }
  }
  authLogic(driveFiles !== "")
    ? (function () {
        //return driveFiles
        console.log(driveFiles);
      })()
    : (function () {
        console.log("Drive has no files");
      })();
}

var sheetsFileManager = function (fileX, folder, time) {
  if (typeof fileX !== "undefined") {
    var folderId = folderIdGlobal(folder, time);
    var file = DriveApp.getRootFolder().getFilesByName(
      DriveApp.getFileById(fileX).getName(),
    );
    var elaspeTime = new Date() - time;
    var myFile = file.next();
    var timeToExecute = maxTime - elaspeTime;
    // console.log("that function: " + arguments.callee.caller.name + "\nthis function: " + arguments.callee.name + "\nmyFile: " + myFile.getName() + "\nelaspeTime: " + elaspeTime + "\ntimeToExecute: " + timeToExecute)
    if (myFile) {
      myFile.moveTo(DriveApp.getFolderById(folderId));
      return;
    } else {
      // DriveApp.getFolderById(folderId).createFile(fileX,content,mimeType)
      return dtlsMain(fileX);
    }
  } else {
    return;
  }
};
