var driveManagerFilter = function (filterFiles) {
  console.log(
    Math.floor((maxTime - (new Date() % (1000 * 60))) / 1000) +
      "\n" +
      arguments.callee.name +
      "\n!" +
      filterFiles +
      ", = " +
      !filterFiles,
  );
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
  console.log(
    Math.floor((maxTime - (new Date() % (1000 * 60))) / 1000) +
      "\n" +
      arguments.callee.name,
  );
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
  console.log(
    Math.floor((maxTime - (new Date() % (1000 * 60))) / 1000) +
      "\n" +
      arguments.callee.name +
      "\n!" +
      filterFiles +
      ", = " +
      !filterFiles,
  );
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

var driveSheets = function () {
  console.log(
    Math.floor((maxTime - (new Date() % (1000 * 60))) / 1000) +
      "\n" +
      arguments.callee.name,
  );
  var fileList = [];
  while (fileList.length === 0) {
    fileList = matchManager("Sheets").sheets;
  }
  var eFolder = DriveApp.getFoldersByName("Sheets").next();
  var rndFiled = Math.floor(Math.random() * Math.floor(fileList.length));
  var file = fileList[rndFiled];
  var folderFile = eFolder.getFilesByName(file);
  var dataTree = [];
  while (folderFile.hasNext()) {
    var myFile = folderFile.next();
    console.log(myFile.getName());
    var myFileUrl = myFile.getUrl();
    // var currentFileUrl =  FormApp.openByUrl(myFileUrl).getPublishedUrl();
    // dataTree.push(currentFileUrl);
    dataTree.push(myFileUrl);
  }
  console.log(dataTree);
  var rndFiledMain = Math.floor(Math.random() * Math.floor(dataTree.length));
  console.log(dataTree.length);
  console.log(rndFiledMain);
  // var filedMain = dataTree[rndFiledMain]
  var filedMain = FormApp.openByUrl(dataTree[rndFiledMain]).getPublishedUrl();
  console.log(filedMain);
  return filedMain;
};

var driveSheetsFilter = function (filterFiles) {
  console.log(
    Math.floor((maxTime - (new Date() % (1000 * 60))) / 1000) +
      "\n" +
      arguments.callee.name +
      "\n!" +
      filterFiles +
      ", = " +
      !filterFiles,
  );
  var lowList = [];
  while (lowList.length === 0) {
    fileList = matchManager("Sheets").sheets;
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
  var eFolder = DriveApp.getFoldersByName("Sheets").next();
  var rndFiled = Math.floor(Math.random() * Math.floor(lowList.length));
  var file = lowList[rndFiled];
  var folderFile = eFolder.getFilesByName(file);
  var dataTree = [];
  while (folderFile.hasNext()) {
    var myFile = folderFile.next();
    var myFileUrl = myFile.getUrl();
    // var currentFileUrl =  FormApp.openByUrl(myFileUrl).getPublishedUrl();
    // dataTree.push(currentFileUrl)
    dataTree.push(myFileUrl);
  }
  var rndFiledMain = Math.floor(Math.random() * Math.floor(dataTree.length));
  // var filedMain = dataTree[rndFiledMain]
  var filedMain = FormApp.openByUrl(dataTree[rndFiledMain]).getPublishedUrl();
  return filedMain;
};

var driveWebForms = function () {
  console.log(
    Math.floor((maxTime - (new Date() % (1000 * 60))) / 1000) +
      "\n" +
      arguments.callee.name,
  );
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
  console.log(
    Math.floor((maxTime - (new Date() % (1000 * 60))) / 1000) +
      "\n" +
      arguments.callee.name +
      "\n!" +
      filterFiles +
      ", = " +
      !filterFiles,
  );
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
  console.log(
    Math.floor((maxTime - (new Date() % (1000 * 60))) / 1000) +
      "\n" +
      arguments.callee.name,
  );
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
  console.log(
    Math.floor((maxTime - (new Date() % (1000 * 60))) / 1000) +
      "\n" +
      arguments.callee.name +
      "\n!" +
      filterFiles +
      ", = " +
      !filterFiles,
  );
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

var driveDocBrowser = function () {
  var files = DriveApp.searchFiles(
    'mimeType = "application/vnd.google-apps.document"',
  );
  var docsList = [];
  while (files.hasNext()) {
    var file = files.next();
    docsList.push(file.getUrl());
  }
  return docsList;
};

var driveDocForms = function () {
  console.log(
    Math.floor((maxTime - (new Date() % (1000 * 60))) / 1000) +
      "\n" +
      arguments.callee.name,
  );
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
  console.log(
    Math.floor((maxTime - (new Date() % (1000 * 60))) / 1000) +
      "\n" +
      arguments.callee.name +
      "\n!" +
      filterFiles +
      ", = " +
      !filterFiles,
  );
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
  console.log(
    Math.floor((maxTime - (new Date() % (1000 * 60))) / 1000) +
      "\n" +
      arguments.callee.name,
  );
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
  console.log(
    Math.floor((maxTime - (new Date() % (1000 * 60))) / 1000) +
      "\n" +
      arguments.callee.name +
      "\n!" +
      filterFiles +
      ", = " +
      !filterFiles,
  );
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
  console.log(
    Math.floor((maxTime - (new Date() % (1000 * 60))) / 1000) +
      "\n" +
      arguments.callee.name +
      "\n!" +
      fileX +
      ", = " +
      !fileX,
  );
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

var fileBrowser = function (folder) {
  console.log(
    Math.floor((maxTime - (new Date() % (1000 * 60))) / 1000) +
      "\n" +
      arguments.callee.name +
      "\n!" +
      file +
      ", = " +
      !file,
  );
  var fileFiller = function (folder) {
    console.log(
      Math.floor((maxTime - (new Date() % (1000 * 60))) / 1000) +
        "\n" +
        arguments.callee.name +
        ":\n" +
        folder,
    );
    var filesObj;
    while (!filesObj == true) {
      filesObj = fileMatchManager(folder);
    }
    console.log(
      Math.floor((maxTime - (new Date() % (1000 * 60))) / 1000) +
        "\n" +
        arguments.callee.name +
        ":\nfilesObj.length: " +
        filesObj.length,
    );
    var glFiles = [];
    for (var key in filesObj) {
      glFiles.push(filesObj[key]);
    }
    var glMov = glFiles[Math.floor(Math.random() * Math.floor(glFiles.length))];
    var obMov =
      filesObj[Math.floor(Math.random() * Math.floor(filesObj.length))];
    console.log(
      Math.floor((maxTime - (new Date() % (1000 * 60))) / 1000) +
        "\n" +
        arguments.callee.name +
        ":\nglFiles.length: " +
        glFiles.length,
    );
    if (file) {
      if (
        (glFiles
          .join("")
          .toLowerCase()
          .indexOf([file].join("").toLowerCase()) === -1 &&
          glFiles.length > 0) ||
        (filesObj
          .join("")
          .toLowerCase()
          .indexOf([file].join("").toLowerCase()) === -1 &&
          filesObj.length >= 1)
      ) {
        console.log(
          Math.floor((maxTime - (new Date() % (1000 * 60))) / 1000) +
            "\n" +
            arguments.callee.name +
            ":\nMoving file = " +
            file +
            " to file = " +
            glMov || obMov,
        );
        file = glMov || obMov;
      } else {
        return;
      }
    } else {
      console.log(
        Math.floor((maxTime - (new Date() % (1000 * 60))) / 1000) +
          "\n" +
          arguments.callee.name +
          ":\nfile = " +
          glMov || obMov,
      );
      var file = glMov || obMov;
    }
    return file;
  };
  var foldersObj;
  var file;
  while (!file) {
    if (typeof folder === "undefined" || folder === null) {
      foldersObj = folderManager();
      var glFolders = [];
      for (var key in foldersObj) {
        glFolders.push(foldersObj[key]);
      }
      console.log(
        Math.floor((maxTime - (new Date() % (1000 * 60))) / 1000) +
          "\n" +
          arguments.callee.name +
          ":\nglFolders/folderManager().length: " +
          glFolders.length,
      );
      // if (glFolders.indexOf(folder) === -1) {folder} || glFolders.indexOf(folder) === -1}
      var folder =
        glFolders[Math.floor(Math.random() * Math.floor(glFolders.length))];
      file = fileFiller(folder);
    } else {
      foldersObj = folderManager(folder);
      var folder =
        foldersObj[Math.floor(Math.random() * Math.floor(foldersObj.length))];
      console.log(
        Math.floor((maxTime - (new Date() % (1000 * 60))) / 1000) +
          "\n" +
          arguments.callee.name +
          ":\nfoldersObj/folderManager(" +
          folder +
          ").length: " +
          foldersObj.length,
      );
      file = fileFiller(folder);
    }
  }
  //  || glFolders.indexOf(folder) !== -1
  if (
    typeof folder !== "undefined" ||
    folder === null ||
    [folder].join("").length > 0
  ) {
    console.log(
      Math.floor((maxTime - (new Date() % (1000 * 60))) / 1000) +
        "\n" +
        arguments.callee.name +
        ":\nfolder: " +
        folder,
    );
    var eFolder = DriveApp.getFoldersByName([folder].toString()).next();
  } else {
    var eFolder = DriveApp;
  }
  var dataTree = [];
  if (
    typeof file !== "undefined" ||
    file !== null ||
    [file].join("").length > 0 ||
    glFiles.indexOf(file) !== -1
  ) {
    console.log(
      Math.floor((maxTime - (new Date() % (1000 * 60))) / 1000) +
        "\n" +
        arguments.callee.name +
        ":\nfile: " +
        file,
    );
    var folderFile = eFolder.getFilesByName(file);
    while (folderFile.hasNext()) {
      var myFile = folderFile.next();
      // var currentFileUrl = myFile.getUrl();
      dataTree.push({ name: myFile.getName(), url: myFile.getUrl() });
    }
    if (dataTree.length === 0) {
      var driveFile = DriveApp.getFilesByName(file);
      while (driveFile.hasNext()) {
        var myDriveFile = driveFile.next();
        // var currentDriveFileUrl = {};
        // currentDriveFileUrl.name = ;
        // currentDriveFileUrl.url = ;
        dataTree.push({
          name: myDriveFile.getName(),
          url: myDriveFile.getUrl(),
        });
      }
    }
  } else {
    var folderFile = eFolder;
    return folderFile;
  }
  console.log(
    Math.floor((maxTime - (new Date() % (1000 * 60))) / 1000) +
      "\n" +
      arguments.callee.name +
      ":\n" +
      dataTree,
  );
  var rndFiledMain = Math.floor(Math.random() * Math.floor(dataTree.length));
  var filedMain = dataTree[rndFiledMain];
  console.log(
    Math.floor((maxTime - (new Date() % (1000 * 60))) / 1000) +
      "\n" +
      arguments.callee.name +
      ":\n" +
      filedMain,
  );
  return filedMain;
};

var fbTester = function () {
  var res = fileBrowser("main");
  return res;
};

var fileFold = function (folderX, fileX, time) {
  // console.log(Math.floor((maxTime - new Date() % (1000 * 60)) / 1000) + "\n" + arguments.callee.name + "\n!" + folderX + ", = " + !folderX + "\n!" + fileX + ", = " + !fileX + "\n!" + time + ", = " + !time)
  var elapsedTime = Math.floor((maxTime - (new Date() % (1000 * 60))) / 1000);
  var fileFree = [];
  if (
    typeof folderX !== "undefined" ||
    folderX !== null ||
    [folderX].join("").length > 0
  ) {
    if (typeof folderX === "undefined") {
      return;
    }
    var pyFolder = DriveApp.getFoldersByName(folderX).next();
    var tree = pyFolder.getFiles();
    // console.log(folderX + "\n" + typeof folderX)
    // console.log("fileFold: \nDeclaring pyFolder = DriveApp.getFoldersByName(" + folderX + ").next()")
    // console.log("fileFold: \nDeclaring tree = pyFolder.getFiles()")
    // var minFile = [fileX].join("").toLowerCase()
    while (tree.hasNext()) {
      fileFree.push(tree.next().getName());
    }
  } else {
    return JSON.stringify(this);
  }
  // console.log("fileFold: \nDeclaring minFold = [" + tree.next().getName() + "].join('').toLowerCase()");
  // var minFold = [tree.next().getName()].join("").toLowerCase();
  // console.log("fileFold: \nDeclaring minFile = [" + fileX + "].join('').toLowerCase()")
  // if (minFold.includes(minFile)) {
  // }
  // break
  return fileFree;
};

var fileManager = function (fileX, folder, time, content, mimeType) {
  console.log(
    Math.floor((maxTime - (new Date() % (1000 * 60))) / 1000) +
      "\n" +
      arguments.callee.name +
      "\n!" +
      fileX +
      ", = " +
      !fileX,
  );
  if (typeof fileX !== "undefined" && typeof folder !== "undefined") {
    console.log(
      "Declaring folderId calling folderIdGlobal(" + folder + ", time)",
    );
    var folderId = folderIdGlobal(folder, time);
    // console.log("Declaring folderIdName calling DriveApp.getFileById(" + folderId + ").getName() to get the folder name")
    // var folderIdName = DriveApp.getFolderById(folderId).getName()
    console.log(
      "Declaring file calling DriveApp.getRootFolder().getFilesByName(" +
        DriveApp.getFileById(fileX).getName() +
        ").next() to search the root folder for the file",
    );
    var file = DriveApp.getRootFolder().getFilesByName(
      DriveApp.getFileById(fileX).getName(),
    );
    var elaspeTime = new Date() - time;
    if (file.hasNext()) {
      var myFile = file.next();
      var timeToExecute = maxTime - elaspeTime;
    }
    if (myFile) {
      // console.log(myFile)
      console.log(
        "calling DriveApp with id of file: " +
          myFile.getId() +
          " found in root drive - " +
          folderId,
      );
      try {
        var thisFileId = myFile.getId();
        var thisFile = DriveApp.getFileById(thisFileId);
        var thisFolder = DriveApp.getFolderById(folderId);
        thisFile.moveTo(thisFolder);
        Utilities.sleep(2000);
        return;
      } catch (error) {
        Logger.log("Error moving file: " + error.toString());
        console.error("Error moving file: " + error.toString());
        // return;
      }
    } else {
      return driveManager(DriveApp.getFileById(fileX).getName());
    }
  } else {
    // console.log("that function: " + arguments.callee.caller.name + "\nthis function: " + arguments.callee.name + "\nmyFile: " + myFile.getName() + "\nelaspeTime: " + elaspeTime + "\ntimeToExecute: " + timeToExecute)
    // DriveApp.getFolderById(folderId).createFile(fileX,content,mimeType)
    return;
  }
};

var fileMatch = function (fileX, stringArray) {
  console.log(
    Math.floor((maxTime - (new Date() % (1000 * 60))) / 1000) +
      "\n" +
      arguments.callee.name +
      "\n!" +
      fileX +
      ", = " +
      !fileX,
  );
  if (fileX) {
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
  } else {
    return;
  }
};

var fileMatchManager = function (folderX, fileX, time) {
  console.log(
    Math.floor((maxTime - (new Date() % (1000 * 60))) / 1000) +
      "\n" +
      arguments.callee.name +
      "\n!" +
      folderX +
      ", = " +
      !folderX,
  );
  var elapsedTime;
  var fileTree = [];
  if (
    typeof folderX !== "undefined" ||
    folderX === null ||
    [folderX].join("").length > 0
  ) {
    console.log(
      Math.floor((maxTime - (new Date() % (1000 * 60))) / 1000) +
        "\n" +
        arguments.callee.name +
        ":\nfolderX: " +
        "\nA: type of folder - " +
        typeof folderX +
        "\nB: folderX - " +
        folderX +
        "\nC: folder length - " +
        [folderX].join("").length,
    );
    console.log(
      Math.floor((maxTime - (new Date() % (1000 * 60))) / 1000) +
        "\n" +
        arguments.callee.name +
        ":\nD: folder's null value - ",
    );
    console.log(
      Math.floor((maxTime - (new Date() % (1000 * 60))) / 1000) +
        "\n" +
        arguments.callee.name +
        ":\n" +
        folderX ===
        null,
    );
    var pyFolder = DriveApp.getFoldersByName(folderX).next();
  } else {
    var folderX = furtFolder();
    var pyFolder = DriveApp.getFoldersByName(folderX).next();
  }
  var tree = pyFolder.getFiles();
  if (fileX) {
    var matchFile = [fileX].join("").toLowerCase();
    while (tree.hasNext()) {
      var testFile = [tree.next().getName()].join("").toLowerCase();
      if (testFile.includes(matchFile)) {
        fileTree.push(tree.next().getName());
      }
    }
  }
  if (fileTree.length === 0) {
    while (tree.hasNext()) {
      fileTree.push(tree.next().getName());
    }
  }
  if (fileX) {
    var match = fileMatch(fileX, fileTree);
  }
  if (match) {
    return match;
  } else {
    return fileTree;
  }
};
// tree = DriveApp.getFiles();
// tree = pyFolder.getFiles()}
// return fileTree
// else {
//   var tree = DriveApp.getFiles();
//   while (tree.hasNext()) {
//     fileTree.push(tree.next().getName())}
//     return fileTree}
// return match
// else {
//   return fileTree}

var folderIdGlobal = function (folderX, time) {
  console.log(
    Math.floor((maxTime - (new Date() % (1000 * 60))) / 1000) +
      "\n" +
      arguments.callee.name +
      "\nfolderX is !" +
      !folderX +
      ", = " +
      folderX +
      "\ntime is !" +
      !time +
      ", = " +
      time,
  );
  var tree = DriveApp.getFolders();
  while (tree.hasNext()) {
    var elaspeTime = new Date() - time;
    var timeToExecute = maxTime - elaspeTime;
    var myId = tree.next();
    var id = myId.getId();
    var myFolder = DriveApp.getFolderById(id).getName();
    if (folderX === myFolder) {
      return id;
    }
  }
};
// console.log("Declaring tree with DriveApp.getFolders()")
// console.log("Receiving from DriveApp - " + tree)
// console.log("Declaring myFolder with DriveApp.getFolderById(" + id + ").getName()")
// console.log("myFolder = " + JSON.stringify(myFolder))
// console.log("that function: " + arguments.callee.caller.name + "\nthis function: " + arguments.callee.name + "\nmyFolder: " + myFolder + "\nelaspeTime: " + elaspeTime + "\ntimeToExecute: " + timeToExecute)

var folderMatch = function (folderX, stringArray) {
  console.log(
    Math.floor((maxTime - (new Date() % (1000 * 60))) / 1000) +
      "\n" +
      arguments.callee.name +
      "\n!" +
      folderX +
      ", = " +
      !folderX,
  );
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

var furtFolder = function (folder) {
  console.log(
    Math.floor((maxTime - (new Date() % (1000 * 60))) / 1000) +
      "\n" +
      arguments.callee.name +
      "\n!" +
      folder +
      ", = " +
      !folder,
  );
  if (folder) {
    var foldersObj = folderManager(folder);
  } else {
    var foldersObj = folderManager();
  }
  console.log(
    Math.floor((maxTime - (new Date() % (1000 * 60))) / 1000) +
      "\n" +
      arguments.callee.name +
      ":\nfoldersObj.length: " +
      foldersObj.length +
      "\nfoldersObj",
  );
  var glFolders = [];
  for (var key in foldersObj) {
    glFolders.push(foldersObj[key]);
  }
  console.log(
    Math.floor((maxTime - (new Date() % (1000 * 60))) / 1000) +
      "\n" +
      arguments.callee.name +
      ":\nglFolders.length: " +
      glFolders.length +
      "\nglFolders",
  );
  if (
    typeof folder === "undefined" ||
    folder === null ||
    [folder].join("").length === 0 ||
    glFolders.indexOf(folder) === -1
  ) {
    var folder =
      glFolders[Math.floor(Math.random() * Math.floor(glFolders.length))];
  }
  return folder;
};
// if (glFolders.indexOf(folder) === -1) {folder}

var rndUrls = function () {
  console.log(
    Math.floor((maxTime - (new Date() % (1000 * 60))) / 1000) +
      "\n" +
      arguments.callee.name,
  );
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
  console.log(
    Math.floor((maxTime - (new Date() % (1000 * 60))) / 1000) +
      "\n" +
      arguments.callee.name,
  );
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
  console.log(
    Math.floor((maxTime - (new Date() % (1000 * 60))) / 1000) +
      "\n" +
      arguments.callee.name +
      "\nfileX is !" +
      !fileX +
      ", = " +
      fileX +
      "\nfolder is !" +
      !folder +
      ", = " +
      folder +
      "\ntime is !" +
      !time +
      ", = " +
      time,
  );
  if (!fileX) {
    var fileX = arguments.callee.name;
  }
  if (fileX) {
    if (!folder) {
      var folder = "Sheets";
    }
    var folderId = folderIdGlobal(folder, start);
    var idToName = SpreadsheetApp.openById(fileX).getName();
    var file = DriveApp.getRootFolder().getFilesByName(idToName);
    while (file.hasNext()) {
      var elaspeTime = new Date() - start;
      var myFile = file.next();
      var timeToExecute = maxTime - elaspeTime;
      if (myFile.getName() === fileX) {
        myFile.moveTo(DriveApp.getFolderById(folderId));
        return;
      }
    }
  } else {
    return;
  }
};
// console.log("that function: " + arguments.callee.caller.name + "\nthis function: " + arguments.callee.name + "\nmyFile: " + myFile.getName() + "\nelaspeTime: " + elaspeTime + "\ntimeToExecute: " + timeToExecute)
// if (myFile.getName() === fileX) {
//     myFile.moveTo(DriveApp.getFolderById(folderId))
//         return}
// else {
//   // DriveApp.getFolderById(folderId).createFile(fileX,content,mimeType)
//   return sheetsMaker(fileX, folder, timeToExecute)}
