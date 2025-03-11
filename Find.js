var driveManager = function (strNw, time) {
  console.log(
    Math.floor((maxTime - (new Date() % (1000 * 60))) / 1000) +
      "\n" +
      arguments.callee.name +
      "\nstrNw is !" +
      !strNw +
      ", = " +
      strNw +
      "\ntime is !" +
      !time +
      ", = " +
      time,
  );
  var iam = JSON.parse(
    convertToObjects(
      [[strNw || testlt()]],
      ["file"],
      Math.floor((maxTime - (new Date() % (1000 * 60))) / 1000),
    ),
  );
  var arn = [strNw || testlt()].toString().toLowerCase();
  if (crmCalc(iam[0]["file"] || arn) !== true) {
    var eFolder = folderManager();
    var dataTree = [];
    var i = 0;
    var l = eFolder.length - 1;
    for (i, l; i < l; i++) {
      var folderRoot = DriveApp.getFoldersByName(eFolder[i]);
      if (folderRoot.hasNext) {
        var fileBulk = folderRoot.next().getFiles();
        if (fileBulk.hasNext()) {
          while (fileBulk.hasNext()) {
            var fileUrl = fileBulk.next();
            var coLate = fileUrl.getName().toLowerCase();
            if (coLate.indexOf(iam[0]["file"]) !== -1) {
              var strNwUrl = fileUrl.getUrl();
              dataTree.push(strNwUrl);
            }
          }
        }
      }
    }
    var rndFiledMain = Math.floor(Math.random() * Math.floor(dataTree.length));
    var filedMain = dataTree[rndFiledMain];
    return filedMain;
  }
};
var matchManager = function (folderX, narrow, time) {
  // console.log(Math.floor((maxTime - new Date() % (1000 * 60)) / 1000) + "\n" + arguments.callee.name + "\nfolderX is !" + !folderX + ", = " + folderX + "\nnarrow is !" + !narrow + ", = " + narrow + "\ntime is !" + !time + ", = " + time);
  var arn = [narrow || testlt()].toString().toLowerCase();
  var xFolder = [];
  var appTree = [],
    pngTree = [],
    pdfTree = [],
    docList = [],
    formList = [],
    slideList = [],
    sheetList = [];
  var iterationCount = 0;
  var maxiterations = 10;
  if (typeof folderX === "undefined") {
    var allFolders = folderManager();
    allFolders.map((folderX) => {
      xFolder.push(folderX);
    });
  }
  var folderRoot = DriveApp.getFoldersByName(folderX || xFolder.toString());
  if (folderRoot.hasNext()) {
    var eFolder = folderRoot.next();
    var eFoldId = eFolder.getId();
    var folderFiles = eFolder.getFiles();
    var filesArray = [];
    while (folderFiles.hasNext()) {
      filesArray.push(folderFiles.next());
    }
    while (
      appTree.length === 0 &&
      pngTree.length === 0 &&
      pdfTree.length === 0 &&
      docList.length === 0 &&
      formList.length === 0 &&
      slideList.length === 0 &&
      sheetList.length === 0 &&
      iterationCount < maxiterations
    ) {
      filesArray.forEach(function (file) {
        var fileMim = file.getName().toLowerCase();
        var mimeType = file.getMimeType();
        if (fileMim.includes(arn)) {
          if (mimeType === MimeType.GOOGLE_DOCS) {
            docList.push(file.getName());
          } else if (mimeType === MimeType.GOOGLE_SLIDES) {
            slideList.push(file.getName());
          } else if (mimeType === MimeType.GOOGLE_SHEETS) {
            sheetList.push(file.getName());
          } else if (mimeType === MimeType.GOOGLE_FORMS) {
            formList.push(file.getName());
          } else if (mimeType === MimeType.GOOGLE_APPS_SCRIPT) {
            appTree.push(file.getName());
          } else if (mimeType === MimeType.PNG) {
            pngTree.push(file.getName());
          } else if (mimeType === MimeType.PDF) {
            pdfTree.push(file.getName());
          }
        } else {
          if (mimeType === MimeType.GOOGLE_DOCS) {
            docList.push(file.getName());
          } else if (mimeType === MimeType.GOOGLE_SLIDES) {
            slideList.push(file.getName());
          } else if (mimeType === MimeType.GOOGLE_SHEETS) {
            sheetList.push(file.getName());
          } else if (mimeType === MimeType.GOOGLE_FORMS) {
            formList.push(file.getName());
          } else if (mimeType === MimeType.GOOGLE_APPS_SCRIPT) {
            appTree.push(file.getName());
          } else if (mimeType === MimeType.PNG) {
            pngTree.push(file.getName());
          } else if (mimeType === MimeType.PDF) {
            pdfTree.push(file.getName());
          }
        }
      });
    }
    return {
      docs: docList,
      slides: slideList,
      sheets: sheetList,
      forms: formList,
      apps: appTree,
      pngs: pngTree,
      pdfs: pdfTree,
      fderX: xFolder,
    };
  } else {
    console.warn("Folder " + folderX + "not found");
    return {
      docs: [],
      slides: [],
      sheets: [],
      forms: [],
      apps: [],
      pngs: [],
      pdfs: [],
      fderX: [],
    };
  }
};
var folderManager = function (folderX, time) {
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
  var folderTree = [];
  var tree = DriveApp.getFolders();
  while (tree.hasNext() && tree.next().getFiles().hasNext()) {
    folderTree.push(tree.next().getName());
  }
  if (folderX) {
    console.log(
      Math.floor((maxTime - (new Date() % (1000 * 60))) / 1000) +
        "\n" +
        arguments.callee.name +
        ":\nDeclaring match = folderMatch(" +
        folderX,
      "folderTree)",
    );
    var match = folderMatch(folderX, folderTree);
    return match;
  } else {
    return folderTree;
  }
};
var formsUrls = function (fileX, folderX, time) {
  console.log(
    Math.floor((maxTime - (new Date() % (1000 * 60))) / 1000) +
      "\n" +
      arguments.callee.name +
      "\nfileX is !" +
      !fileX +
      ", = " +
      fileX +
      "\nfolderX is !" +
      !folderX +
      ", = " +
      folderX +
      "\ntime is !" +
      !time +
      ", = " +
      time,
  );
  if ([fileX].join("").length > 0) {
    console.log(
      Math.floor((maxTime - (new Date() % (1000 * 60))) / 1000) +
        "\nformUrls: \nDeclaring search = [" +
        fileX +
        "].join(" +
        "" +
        ")",
    );
    var search = [fileX].toString();
    var searchSplitStr = search.toLowerCase().split(" ");
    var i = 0;
    var l = searchSplitStr.length;
  }
  var appIndex = crmCalc(fileX);
  if (typeof folderX !== "undefined" && appIndex === false) {
    try {
      var dataTree = [];
      console.log(
        Math.floor((maxTime - (new Date() % (1000 * 60))) / 1000) +
          "\nformUrls: \nDeclaring eFolder = DriveApp.getFoldersByName(" +
          folderX +
          ").next()",
      );
      var eFolder = DriveApp.getFoldersByName(folderX).next();
      var folderFiles = eFolder.getFiles();
      while (folderFiles.hasNext()) {
        var allFiles = folderFiles.next();
        var currentFileName = allFiles.getName();
        var currentSplitStr = currentFileName.toLowerCase().split(" ");
        var fileXIndex = [];
        for (i, l; i < l; i++) {
          var sfi = searchSplitStr[i];
          var fxi = currentSplitStr.indexOf(sfi);
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
      console.log(
        Math.floor((maxTime - (new Date() % (1000 * 60))) / 1000) +
          "\n" +
          arguments.callee.name +
          "\nerr is !" +
          !err +
          ", = " +
          err,
      );
      return "Error loading files " + err;
    }
  }
};
var validateFiles = function () {
  // Grant or Deny access
  const emailList = (() => {
    var files = DriveApp.getFiles();
    var fileNames = files.next().getName();
    var sharedFiles = [];
    try {
      for (var i = 0; i < fileNames.length; i++) {
        [fileNames].map((name) => {
          if (sharedFiles.indexOf(name) === -1) {
            sharedFiles.push(name);
          }
        });
        file = DriveApp.getFilesByName(sharedFiles).next();
      }
    } catch (e) {
      // Access denied.
      return false;
    }
    // Access granted.
    // List all users with Editor permission.
    return file.getEditors().map((editor) => {
      return editor.getEmail();
      console.log(editor.getEmail());
    });
  })();
  return emailList;
  console.log(emailList);
};
var validateFolders = function () {
  // Grant or Deny access
  const folderList = (() => {
    const folders = DriveApp.getFolders();
    const folderNames = folders.next().getName();
    const sharedFolders = [];
    try {
      for (var i = 0; i < folderNames.length; i++) {
        [folderNames].map((name) => {
          if (sharedFolders.indexOf(name) === -1) {
            sharedFolders.push(name);
          }
        });
        folder = DriveApp.getFoldersByName(sharedFolders).next();
      }
    } catch (e) {
      // Access denied.
      return false;
    }
    // Access granted.
    // List all users with Editor permission.
    return folder.getEditors().map((editor) => {
      return editor.getEmail();
      console.log(editor.getEmail());
    });
  })();
  // return emailList
  console.log(folderList);
};
var validGroup = function () {
  const hasAccess = (() => {
    let isMemberOfGroup = false;
    let emailList = validateFiles();
    console.log(emailList);
    GroupsApp.getGroups()
      .map((group) => {
        return group.getEmail();
        console.log(group.getEmail());
      })
      .forEach((group) => {
        if (emailList.includes(group)) {
          isMemberOfGroup = true;
        }
      });
    return isMemberOfGroup;
  })();
  return { acc: hasAccess };
  console.log(groupEmailList);
};

// console.log("folderManager: \n folderTree.push(" + tree.next().getName() + ")");var currentFileUrl =  FormApp.openByUrl(myFileUrl).getPublishedUrl();First execution;console.log("matchManager: \nvar folderX = JSON.stringify(allFolders[" + rndFolder + "])");console.log("matchManager: \nDeclaring  = (" + ")");console.log("matchManager: \nvar eFolder = DriveApp.getFoldersByName(" + folderX + ").next()");console.log("matchManager: \nDeclaring eFoldId = (" + eFolder.getId() + ")");console.log("matchManager: \nDeclaring folderFiles = (" + eFolder.getFiles() + ")");console.log("matchManager: \nDeclaring folderDocs = eFolder.getFilesByType(" + MimeType.GOOGLE_DOCS + ")");console.log("matchManager: \nDeclaring docFiles = (" + ")");var docFiles = folderDocs.next();console.log("matchManager: \nDeclaring currentDocName = (" + folderDocs.next().getName() + ")");var currentDocName =  folderDocs.next().getName();console.log("matchManager: \ndocList.push(" + folderDocs.next().getName() + ")");console.log("matchManager: \nDeclaring folderSlides = eFolder.getFilesByType(" + MimeType.GOOGLE_SLIDES + ")");console.log("matchManager: \nDeclaring slideFiles = (" + folderSlides.next() + ")");var slideFiles = folderSlides.next();console.log("matchManager: \nDeclaring currentSlideName = (" + folderSlides.next().getName() + ")");var currentSlideName =  folderSlides.next().getName();console.log("matchManager: \nslideList.push(" + folderSlides.next().getName() + ")");console.log("matchManager: \nDeclaring folderSheets = eFolder.getFilesByType(" + MimeType.GOOGLE_SHEETS + ")");console.log("matchManager: \nDeclaring sheetFiles = (" + folderSheets.next() + ")");var sheetFiles = folderSheets.next();console.log("matchManager: \nDeclaring currentSheetName = (" + folderSheets.next().getName() + ")");var currentSheetName =  folderSheets.next().getName();console.log("matchManager: \nsheetList.push(" + folderSheets.next().getName() + ")");console.log("matchManager: \nDeclaring folderForms = eFolder.getFilesByType(" + MimeType.GOOGLE_FORMS + ")");console.log("matchManager: \nDeclaring formFiles = (" + folderForms.next() + ")");var formFiles = folderForms.next();console.log("matchManager: \nDeclaring currentFormName = (" + folderForms.next().getName() + ")");var currentFormName =  folderForms.next().getName();console.log("matchManager: \nformList.push(" + folderForms.next().getName() + ")");console.log("matchManager: \nDeclaring folderApps = eFolder.getFilesByType(" + MimeType.GOOGLE_APPS_SCRIPT + ")");console.log("matchManager: \nDeclaring appFiles = (" + folderApps.next() + ")");var appFiles = folderApps.next();console.log("matchManager: \nDeclaring currentAppName = (" + folderApps.next().getName() + ")");var currentAppName =  folderApps.next().getName();console.log("matchManager: \nappTree.push(" + folderApps.next().getName() + ")");console.log("matchManager: \nDeclaring folderPng = eFolder.getFilesByType(" + MimeType.PNG + ")");console.log("matchManager: \nDeclaring pngFiles = (" + folderPng.next() + ")");var pngFiles = folderPng.next();console.log("matchManager: \nDeclaring currentPngName = (" + folderPng.next().getName() + ")");var currentPngName =  folderPng.next().getName();console.log("matchManager: \npngTree.push(" + folderPng.next().getName() + ")");console.log("matchManager: \nDeclaring folderPdf = eFolder.getFilesByType(" + MimeType.PDF + ")");console.log("matchManager: \nDeclaring pdfFiles = (" + folderPdf.next() + ")");var pdfFiles = folderPdf.next();console.log("matchManager: \nDeclaring currentPdfName = (" + folderPdf.next().getName() + ")");var currentPdfName =  folderPdf.next().getName();console.log("matchManager: \n pdfTree.push(" + folderPdf.next().getName() + ")");console.log("matchManager: \nDeclaring  = (" + ")");var currentFolderFiles = DriveApp.getFolderById(eFoldId).getFiles();var treeRoot = DriveApp.getFolderById(DriveApp.getFoldersByName("Forms").next().getId()).getFiles();return console.log(eFolder.getFilesByType(MimeType.GOOGLE_DOCS).hasNext());
// if (folderDocs.hasNext() === true || folderSlides.hasNext() === true || folderSheets.hasNext() === true || folderForms.hasNext() === true) {var fileUrl = allFiles.getUrl();var fileEx = allFiles.getMimeType();return console.log(fileEx)}
// if (folderApps.hasNext() === true || folderPng.hasNext() === true || folderPdf.hasNext() === true) {var fileUrl = allFiles.getUrl();var fileEx = allFiles.getMimeType();return console.log(fileEx)};return console.log(treeList);var fileX = "eas"
// if (subFiles.getName().toLowerCase().split(" ").indexOf(fileX) > -1);var currentFileStr = currentFileName.toLowerCase().split(" ");console.log(currentFileStr);var match = fileMatch(fileX, treeList)
