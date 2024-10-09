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
  if (folder) {
    var foldersObj = folderManager(folder);
  } else {
    var foldersObj = folderManager();
  }
  console.log("foldersObj.length: " + foldersObj.length + "\n " + foldersObj);
  var glFolders = [];
  for (var key in foldersObj) {
    glFolders.push(foldersObj[key]);
  }
  console.log("glFolders.length: " + glFolders.length + "\n " + glFolders);
  // if (glFolders.indexOf(folder) === -1) {folder} || glFolders.indexOf(folder) === -1
  if (
    typeof folder === "undefined" ||
    folder === null ||
    [folder].join("").length === 0 ||
    foldersObj.length > 1
  ) {
    var folder =
      glFolders[Math.floor(Math.random() * Math.floor(glFolders.length))];
  } else {
    var folder = foldersObj.toString();
  }
  console.log(folder);
  var filesObj = fileMatchManager(folder, file);
  console.log("filesObj.length: " + filesObj.length + "\n " + filesObj);
  var glFiles = [];
  for (var key in filesObj) {
    glFiles.push(filesObj[key]);
  }
  console.log("glFiles.length: " + glFiles.length + "\n " + glFiles);
  if (
    typeof file === "undefined" ||
    file === null ||
    [file].join("").length === 0 ||
    (glFiles.join("").toLowerCase().indexOf([file].join("").toLowerCase()) ===
      -1 &&
      glFiles.length > 0) ||
    filesObj.length > 1
  ) {
    console.log(
      "Declaring " +
        file +
        " by assigning " +
        glFiles[Math.floor(Math.random() * Math.floor(glFiles.length))] +
        " to variable",
    );
    var file = glFiles[Math.floor(Math.random() * Math.floor(glFiles.length))];
  } else {
    var file = filesObj.toString();
  }
  //  || glFolders.indexOf(folder) !== -1
  if (
    typeof folder !== "undefined" ||
    folder !== null ||
    [folder].join("").length > 0
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

var fileFold = function (folderX, fileX, time) {
  var elaspedTime;
  var fileFree = [];
  if (
    typeof folderX !== "undefined" ||
    folderX !== null ||
    [folderX].join("").length > 0
  ) {
    if (typeof folderX === "undefined") {
      return;
    }
    // console.log(folderX + "\n" + typeof folderX)
    console.log(
      "fileFold: \nDeclaring pyFolder = DriveApp.getFoldersByName(" +
        folderX +
        ").next()",
    );
    var pyFolder = DriveApp.getFoldersByName(folderX).next();
    console.log("fileFold: \nDeclaring tree = pyFolder.getFiles()");
    // var minFile = [fileX].join("").toLowerCase()
    var tree = pyFolder.getFiles();
    while (tree.hasNext()) {
      // console.log("fileFold: \nDeclaring minFold = [" + tree.next().getName() + "].join('').toLowerCase()");
      // var minFold = [tree.next().getName()].join("").toLowerCase();
      // console.log("fileFold: \nDeclaring minFile = [" + fileX + "].join('').toLowerCase()")
      // if (minFold.includes(minFile)) {
      fileFree.push(tree.next().getName());
      // }
      // break
    }
  } else {
    return JSON.stringify(this);
  }
  return fileFree;
};

var fileManager = function (fileX, folder, time, content, mimeType) {
  if (typeof fileX !== "undefined" && typeof folder !== "undefined") {
    console.log(
      "Declaring folderId calling folderIdGlobal(" + folder + ", time)",
    );
    var folderId = folderIdGlobal(folder, time);
    console.log(
      "Declaring folderIdName calling DriveApp.getFileById(" +
        folderId +
        ").getName() to get the folder name",
    );
    var folderIdName = DriveApp.getFolderById(folderId).getName();
    console.log(
      "Declaring file calling DriveApp.getRootFolder().getFilesByName(" +
        fileX +
        ").next() to search the root folder for the file",
    );
    var file = DriveApp.getRootFolder().getFilesByName(fileX);
    var elaspeTime = new Date() - time;
    if (file.hasNext()) {
      var myFile = file.next();
      var timeToExecute = maxTime - elaspeTime;
      // console.log("that function: " + arguments.callee.caller.name + "\nthis function: " + arguments.callee.name + "\nmyFile: " + myFile.getName() + "\nelaspeTime: " + elaspeTime + "\ntimeToExecute: " + timeToExecute)
    }
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

var fileMatch = function (fileX, stringArray) {
  var lenFile = [fileX].join("").length;
  if (lenFile > 0) {
    var search = [fileX].join("").toLowerCase();
    var searchFileStr = search.split(" ");
    var i = 0;
    var l = searchFileStr.length;
  }
  var fileXIndex = [];
  stringArray.map((file) => {
    // var sfi = searchFileStr
    var matchFile = [fileX].join("").toLowerCase();
    var testFile = [file].join("").toLowerCase();
    var fxi = testFile.indexOf(matchFile);
    if (fxi > -1) {
      // var properFile = file
      var myObj = convertToObjects([[file]], [fxi])[0];
      fileXIndex.push(file);
    }
  });
  return fileXIndex;
};

var fileMatchManager = function (folderX, fileX, time) {
  var elaspedTime;
  var fileTree = [];
  if (
    typeof folderX !== "undefined" ||
    folderX !== null ||
    [folderX].join("").length > 0
  ) {
    var pyFolder = DriveApp.getFoldersByName(folderX).next();
  } else {
    var folderX = furtFolder();
    var pyFolder = DriveApp.getFoldersByName(folderX).next();
  }
  var tree = pyFolder.getFiles();
  var matchFile = [fileX].join("").toLowerCase();
  while (tree.hasNext()) {
    var testFile = [tree.next().getName()].join("").toLowerCase();
    if (testFile.includes(matchFile)) {
      fileTree.push(tree.next().getName());
    }
  }
  if (fileTree.length === 0) {
    // tree = DriveApp.getFiles();
    // tree = pyFolder.getFiles()
    while (tree.hasNext()) {
      fileTree.push(tree.next().getName());
    }
    // return fileTree
  }
  // else {
  //   var tree = DriveApp.getFiles();
  //   while (tree.hasNext()) {
  //     fileTree.push(tree.next().getName())
  //   }
  //     return fileTree
  // }

  if (fileX) {
    var match = fileMatch(fileX, fileTree);
    // return match
  }
  // else {
  //   return fileTree
  // }

  if (match) {
    return match;
  } else {
    return fileTree;
  }
};

var furtFolder = function (folder) {
  if (folder) {
    var foldersObj = folderManager(folder);
  } else {
    var foldersObj = folderManager();
  }
  console.log("foldersObj.length: " + foldersObj.length + "\n " + foldersObj);
  var glFolders = [];
  for (var key in foldersObj) {
    glFolders.push(foldersObj[key]);
  }
  console.log("glFolders.length: " + glFolders.length + "\n " + glFolders);
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
  return console.log(folder);
};

var folderIdGlobal = function (folderX, time) {
  console.log("Declaring tree with DriveApp.getFolders()");
  var tree = DriveApp.getFolders();
  // console.log("Receiving from DriveApp - " + tree)
  while (tree.hasNext()) {
    var elaspeTime = new Date() - time;
    var timeToExecute = maxTime - elaspeTime;
    var myId = tree.next();
    var id = myId.getId();
    // console.log("Declaring myFolder with DriveApp.getFolderById(" + id + ").getName()")
    var myFolder = DriveApp.getFolderById(id).getName();
    // console.log("myFolder = " + JSON.stringify(myFolder))
    // console.log("that function: " + arguments.callee.caller.name + "\nthis function: " + arguments.callee.name + "\nmyFolder: " + myFolder + "\nelaspeTime: " + elaspeTime + "\ntimeToExecute: " + timeToExecute)
    if (folderX === myFolder) {
      return id;
    }
  }
};

var folderManager = function (folderX, time) {
  var elaspedTime;
  var folderTree = [];
  var tree = DriveApp.getFolders();
  while (tree.hasNext()) {
    // console.log("folderManager: \n folderTree.push(" + tree.next().getName() + ")")
    folderTree.push(tree.next().getName());
  }
  if (folderX) {
    console.log(
      "folderManager: \nDeclaring match = folderMatch(" + folderX,
      folderTree + ")",
    );
    var match = folderMatch(folderX, folderTree);
    return match;
  } else {
    return folderTree;
  }
};

var folderMatch = function (folderX, stringArray) {
  if ([folderX].join("").length === 0) {
    var eDrive = folderManager();
    var folderX = eDrive[Math.floor(Math.random() * Math.floor(eDrive.length))];
  }
  var search = [folderX].join("");
  var searchFolderStr = search.toLowerCase().split(" ");
  var i = 0;
  var l = searchFolderStr.length;
  // return console.log(l)
  if ([stringArray].join("").length === 0) {
    var stringArray = folderManager();
  }
  var folderXIndex = [];
  stringArray.map((folder) => {
    // var sfi = searchFileStr
    var xStr = [folder].join("").toLowerCase();
    var xFold = [folderX].join("").toLowerCase();
    var xRes = xStr.includes(xFold);
    if (xRes === true) {
      var fxi = xStr.indexOf(xFold);
      if (fxi > -1) {
        // var properFolder = folder
        var myObj = convertToObjects([[folder]], [fxi])[0];
        folderXIndex.push(folder);
      }
    }
  });
  return folderXIndex;
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
    console.log(
      "matchManager: \nDeclaring rndFolder = Math.floor(" +
        Math.random() * Math.floor(allFolders.length) +
        ")",
    );
    var rndFolder = Math.floor(Math.random() * Math.floor(allFolders.length));
    console.log(
      "matchManager: \nDeclaring folderX = JSON.stringify(" +
        allFolders[rndFolder] +
        ")",
    );
    var folderX = JSON.stringify(allFolders[rndFolder]);
  }
  // console.log("matchManager: \nDeclaring  = (" + ")")
  console.log(
    "matchManager: \nDeclaring eFolder = DriveApp.getFoldersByName(" +
      folderX +
      ").next()",
  );
  var eFolder = DriveApp.getFoldersByName(folderX).next();
  // console.log("matchManager: \nDeclaring eFoldId = (" + eFolder.getId() + ")")
  var eFoldId = eFolder.getId();
  // console.log("matchManager: \nDeclaring folderFiles = (" + eFolder.getFiles() + ")")
  var folderFiles = eFolder.getFiles();
  console.log(
    "matchManager: \nDeclaring folderDocs = eFolder.getFilesByType(" +
      MimeType.GOOGLE_DOCS +
      ")",
  );
  var folderDocs = eFolder.getFilesByType(MimeType.GOOGLE_DOCS);
  console.log(
    "matchManager: \nDeclaring folderSlides = eFolder.getFilesByType(" +
      MimeType.GOOGLE_SLIDES +
      ")",
  );
  var folderSlides = eFolder.getFilesByType(MimeType.GOOGLE_SLIDES);
  console.log(
    "matchManager: \nDeclaring folderSheets = eFolder.getFilesByType(" +
      MimeType.GOOGLE_SHEETS +
      ")",
  );
  var folderSheets = eFolder.getFilesByType(MimeType.GOOGLE_SHEETS);
  console.log(
    "matchManager: \nDeclaring folderForms = eFolder.getFilesByType(" +
      MimeType.GOOGLE_FORMS +
      ")",
  );
  var folderForms = eFolder.getFilesByType(MimeType.GOOGLE_FORMS);
  console.log(
    "matchManager: \nDeclaring folderApps = eFolder.getFilesByType(" +
      MimeType.GOOGLE_APPS_SCRIPT +
      ")",
  );
  var folderApps = eFolder.getFilesByType(MimeType.GOOGLE_APPS_SCRIPT);
  console.log(
    "matchManager: \nDeclaring folderPng = eFolder.getFilesByType(" +
      MimeType.PNG +
      ")",
  );
  var folderPng = eFolder.getFilesByType(MimeType.PNG);
  console.log(
    "matchManager: \nDeclaring folderPdf = eFolder.getFilesByType(" +
      MimeType.PDF +
      ")",
  );
  var folderPdf = eFolder.getFilesByType(MimeType.PDF);
  // console.log("matchManager: \nDeclaring  = (" + ")")
  // var currentFolderFiles = DriveApp.getFolderById(eFoldId).getFiles();
  // var treeRoot = DriveApp.getFolderById(DriveApp.getFoldersByName("Forms").next().getId()).getFiles();
  // return console.log(eFolder.getFilesByType(MimeType.GOOGLE_DOCS).hasNext())
  if (
    folderDocs.hasNext() ||
    folderSlides.hasNext() ||
    folderSheets.hasNext() ||
    folderForms.hasNext()
  ) {
    // if (folderDocs.hasNext()) {
    while (folderDocs.hasNext()) {
      // console.log("matchManager: \nDeclaring docFiles = (" + ")")
      // var docFiles = folderDocs.next()
      // console.log("matchManager: \nDeclaring currentDocName = (" + folderDocs.next().getName() + ")")
      // var currentDocName =  folderDocs.next().getName();
      // console.log("matchManager: \ndocList.push(" + folderDocs.next().getName() + ")")
      docList.push(folderDocs.next().getName());
    }
    // }
    // if (folderSlides.hasNext()) {
    while (folderSlides.hasNext()) {
      // console.log("matchManager: \nDeclaring slideFiles = (" + folderSlides.next() + ")")
      // var slideFiles = folderSlides.next()
      // console.log("matchManager: \nDeclaring currentSlideName = (" + folderSlides.next().getName() + ")")
      // var currentSlideName =  folderSlides.next().getName();
      // console.log("matchManager: \nslideList.push(" + folderSlides.next().getName() + ")")
      slideList.push(folderSlides.next().getName());
    }
    // }
    // if (folderSheets.hasNext()) {
    while (folderSheets.hasNext()) {
      // console.log("matchManager: \nDeclaring sheetFiles = (" + folderSheets.next() + ")")
      // var sheetFiles = folderSheets.next()
      // console.log("matchManager: \nDeclaring currentSheetName = (" + folderSheets.next().getName() + ")")
      // var currentSheetName =  folderSheets.next().getName();
      // console.log("matchManager: \nsheetList.push(" + folderSheets.next().getName() + ")")
      sheetList.push(folderSheets.next().getName());
    }
    // }
    // if (folderForms.hasNext()) {
    while (folderForms.hasNext()) {
      // console.log("matchManager: \nDeclaring formFiles = (" + folderForms.next() + ")")
      // var formFiles = folderForms.next()
      // console.log("matchManager: \nDeclaring currentFormName = (" + folderForms.next().getName() + ")")
      // var currentFormName =  folderForms.next().getName();
      // console.log("matchManager: \nformList.push(" + folderForms.next().getName() + ")")
      formList.push(folderForms.next().getName());
    }
    // }
    // var fileUrl = allFiles.getUrl()
    // var fileEx = allFiles.getMimeType()
    // return console.log(fileEx)
  }
  if (folderApps.hasNext() || folderPng.hasNext() || folderPdf.hasNext()) {
    // if (folderApps.hasNext()) {
    while (folderApps.hasNext()) {
      // console.log("matchManager: \nDeclaring appFiles = (" + folderApps.next() + ")")
      // var appFiles = folderApps.next()
      // console.log("matchManager: \nDeclaring currentAppName = (" + folderApps.next().getName() + ")")
      // var currentAppName =  folderApps.next().getName();
      // console.log("matchManager: \nappTree.push(" + folderApps.next().getName() + ")")
      appTree.push(folderApps.next().getName());
    }
    // }
    // if (folderPng.hasNext()) {
    while (folderPng.hasNext()) {
      // console.log("matchManager: \nDeclaring pngFiles = (" + folderPng.next() + ")")
      // var pngFiles = folderPng.next()
      // console.log("matchManager: \nDeclaring currentPngName = (" + folderPng.next().getName() + ")")
      // var currentPngName =  folderPng.next().getName();
      // console.log("matchManager: \npngTree.push(" + folderPng.next().getName() + ")")
      pngTree.push(folderPng.next().getName());
    }
    // }
    // if (folderPdf.hasNext()) {
    while (folderPdf.hasNext()) {
      // console.log("matchManager: \nDeclaring pdfFiles = (" + folderPdf.next() + ")")
      // var pdfFiles = folderPdf.next()
      // console.log("matchManager: \nDeclaring currentPdfName = (" + folderPdf.next().getName() + ")")
      // var currentPdfName =  folderPdf.next().getName();
      // console.log("matchManager: \n pdfTree.push(" + folderPdf.next().getName() + ")")
      pdfTree.push(folderPdf.next().getName());
    }
    // }
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
