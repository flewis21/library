var driveManager = function (strNw, time) {
  console.log(
    functionRegistry.time +
      "\n" +
      arguments.callee.name +
      "\nstrNw is !" +
      !strNw +
      ", = " +
      strNw +
      "\ntime is !" +
      !functionRegistry.time +
      ", = " +
      functionRegistry.time,
  );

  console.log(
    'driveManager: Before iam definition. strNw value: "' +
      strNw +
      '", isFalsy: ' +
      !strNw,
  );
  if (!strNw) {
    console.log("driveManager: strNw is falsy. testlt() will be called.");
  } else {
    console.log("driveManager: strNw is truthy. testlt() will NOT be called.");
  }

  // NOTE: The testlt() call here is still explicit in your code.
  // This means testlt() will be called regardless of strNw's truthiness
  // due to its direct placement before the mainStr assignment.
  var manString = testlt();
  console.log("driveManager: manString (from testlt()):", manString);
  var testStrNw = manString.name;
  console.log("driveManager: testStrNw (manString.name):", testStrNw);
  var mainStr = strNw || testStrNw;
  console.log("driveManager: mainStr (strNw || testStrNw):", mainStr);

  var arn = [mainStr].toString().toLowerCase();
  var iam;
  try {
    iam = JSON.parse(
      convertToObjects([[mainStr]], ["file"], functionRegistry.time),
    );
    console.log("driveManager: iam successfully parsed:", iam);
    if (iam && iam[0] && iam[0]["file"]) {
      console.log('driveManager: iam[0]["file"] is:', iam[0]["file"]);
    } else {
      console.warn(
        'driveManager: iam or iam[0]["file"] is invalid after parsing.',
      );
    }
  } catch (e) {
    console.error("driveManager: Error parsing iam JSON:", e);
    return null; // Return null if JSON parsing fails
  }

  var crmCalcResult = crmCalc(iam[0]["file"] || arn);
  console.log(
    "driveManager: crmCalc result (index of found function or -1): " +
      crmCalcResult,
  );

  // If crmCalcResult is 0 or positive (meaning a function was found),
  // then we stop execution and return null as per your desired guard logic.
  if (crmCalcResult >= 0) {
    console.log(
      "driveManager: Matching function name found (index: " +
        crmCalcResult +
        "). Stopping further DriveApp execution.",
    );
    return null;
  } else {
    // If crmCalcResult is -1 (meaning no function was found),
    // then we proceed with the DriveApp search using DriveApp.searchFiles().
    console.log(
      "driveManager: No matching function name found. Proceeding with efficient DriveApp search.",
    );

    var dataTree = [];
    var targetFile = iam[0] && iam[0]["file"] ? iam[0]["file"] : null;

    if (!targetFile) {
      console.warn(
        "driveManager: targetFile is invalid. Cannot perform DriveApp search. Returning null.",
      );
      return null;
    }

    // --- EFFICIENT DRIVEAPP SEARCH USING DriveApp.searchFiles() ---
    // Construct the search query. 'title contains' searches file names.
    // Use the exact targetFile for the query.
    var searchQuery = 'title contains "' + targetFile + '"';
    console.log(
      "driveManager: Performing DriveApp search with query:",
      searchQuery,
    );

    try {
      var files = DriveApp.searchFiles(searchQuery);

      while (files.hasNext()) {
        var file = files.next();
        var fileUrl = file.getUrl();
        dataTree.push(fileUrl);
        console.log("driveManager: Found and added file URL:", fileUrl);
      }
    } catch (e) {
      console.error("driveManager: Error during DriveApp search:", e);
      return null; // Handle search errors gracefully
    }

    console.log(
      "driveManager: Final dataTree length after search:",
      dataTree.length,
    );

    if (dataTree.length > 0) {
      var rndFiledMain = Math.floor(Math.random() * dataTree.length);
      var filedMain = dataTree[rndFiledMain];
      console.log(
        "driveManager: Returning a random found file URL:",
        filedMain,
      );
      return filedMain;
    } else {
      console.warn(
        "driveManager: No matching files found after DriveApp search. Returning null.",
      );
      return null;
    }
  }
};
// var driveManager = function (strNw, time) {
//   console.log(
//     Math.floor((maxTime - (new Date() % (1000 * 60))) / 1000) +
//       "\n" +
//       arguments.callee.name +
//       "\nstrNw is !" +
//       !strNw +
//       ", = " +
//       strNw +
//       "\ntime is !" +
//       !time +
//       ", = " +
//       time,
//   );

//   // *** ADD THIS LOGGING LINE ***
//   console.log('driveManager: Before iam definition. strNw value: "' + strNw + '", isFalsy: ' + !strNw);
//   if (!strNw) {
//       console.log('driveManager: strNw is falsy. testlt() will be called.');
//   } else {
//       console.log('driveManager: strNw is truthy. testlt() will NOT be called.');
//   }

//   var manString = testlt();
//   var testStrNw = manString.name;
//   var mainStr = strNw || testStrNw
//   var arn = [mainStr].toString().toLowerCase();
//   var iam = JSON.parse(
//     convertToObjects(
//       [[mainStr]],
//       ["file"],
//       Math.floor((maxTime - (new Date() % (1000 * 60))) / 1000),
//     ),
//   );
//   var crmCalcResult = crmCalc(iam[0]["file"] || arn); // This will be a number (-1 or >= 0)

//   // Add more detailed logging for crmCalcResult for clarity:
//   console.log('driveManager: crmCalc result (index of found function or -1): ' + crmCalcResult);

//   // --- MODIFIED IF CONDITION ---
//   // If crmCalcResult is 0 or positive (meaning a function was found),
//   // then we stop execution and return.
//   if (crmCalcResult >= 0) {
//     console.log('driveManager: Matching function name found (index: ' + crmCalcResult + '). Stopping further DriveApp execution.');
//     // You need to decide what to return here.
//     // Returning null is often a good way to indicate "no data found/processed due to condition".
//     return null;
//     // Or, if you want to explicitly return the found function name, you could:
//     // return lowCapApp[crmCalcResult]; // This would require passing appList or lowCapApp back from crmCalc, or re-deriving it.
//     // For now, let's stick to null to indicate no DriveApp action.
//   } else {
//     console.log('driveManager: No matching function name found. Proceeding with DriveApp search.');

//     var eFolder = folderManager();
//     console.log('driveManager: eFolder (from folderManager):', eFolder);
//     var dataTree = [];
//     var i = 0;

//     if (!Array.isArray(eFolder)) {
//         console.error("driveManager: folderManager did not return an array. Cannot proceed.");
//         return null;
//     }

//     var l = eFolder.length;
//     for (i = 0; i < l; i++) {
//       var folderName = eFolder[i];
//       if (!folderName || typeof folderName !== 'string') {
//           console.warn("driveManager: Invalid folder name at index " + i + ": " + folderName + ". Skipping.");
//           continue;
//       }
//       console.log('driveManager: Looping through folder:', folderName);
//       var folderRoot = DriveApp.getFoldersByName(folderName);
//       console.log('driveManager: Folder found by name? (hasNext):', folderRoot.hasNext());

//       // --- FIX IS HERE: Call .next() only ONCE ---
//       if (folderRoot.hasNext()) {
//         var folder = folderRoot.next(); // <--- Get the folder object ONCE
//         console.log('driveManager: Getting files for folder:', folder.getName()); // Use the retrieved folder object
//         var fileBulk = folder.getFiles();
//         console.log('driveManager: File found in folder? (fileBulk.hasNext):', fileBulk.hasNext())
//         if (fileBulk.hasNext()) {
//           while (fileBulk.hasNext()) {
//             var fileUrl = fileBulk.next();
//             var coLate = fileUrl.getName().toLowerCase();
//             var targetFile = iam[0] && iam[0]["file"] ? iam[0]["file"] : null;
//             console.log('driveManager: Checking file name:', coLate, 'against target:', targetFile);
//             if (targetFile && coLate.indexOf(targetFile) !== -1) {
//               var strNwUrl = fileUrl.getUrl();
//               dataTree.push(strNwUrl);
//               console.log('driveManager: dataTree after adding a URL:', dataTree);
//             } else if (!targetFile) {
//                  console.warn("driveManager: iam[0]['file'] is invalid. Cannot filter files.");
//             }
//           }
//         }
//       }
//     }

//     console.log('driveManager: Final dataTree length:', dataTree.length);
//     if (dataTree.length > 0) {
//       var rndFiledMain = Math.floor(Math.random() * dataTree.length);
//       var filedMain = dataTree[rndFiledMain];
//       return filedMain;
//     } else {
//       console.warn("driveManager: No matching files found after DriveApp search. Returning null.");
//       return null;
//     }
//   }
// };
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
          } else if (
            folderX === "Sheets" &&
            mimeType === MimeType.GOOGLE_SHEETS
          ) {
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
// var folderManager = function (folderX, time) {
//   console.log(
//     Math.floor((maxTime - (new Date() % (1000 * 60))) / 1000) +
//       "\n" +
//       arguments.callee.name +
//       "\nfolderX is !" +
//       !folderX +
//       ", = " +
//       folderX +
//       "\ntime is !" +
//       !time +
//       ", = " +
//       time,
//   );
//   var folderTree = [];
//   var tree = DriveApp.getFolders();
//   while (tree.hasNext() && tree.next().getFiles().hasNext()) {
//     folderTree.push(tree.next().getName());
//   }
//   if (folderX) {
//     console.log(
//       Math.floor((maxTime - (new Date() % (1000 * 60))) / 1000) +
//         "\n" +
//         arguments.callee.name +
//         ":\nDeclaring match = folderMatch(" +
//         folderX,
//       "folderTree)",
//     );
//     var match = folderMatch(folderX, folderTree);
//     return match;
//   } else {
//     return folderTree;
//   }
// };

var folderManager = function (folderX, time) {
  console.log(
    functionRegistry.time +
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
  var tree = DriveApp.getFolders(); // Iterator for folders

  // Corrected while loop: Call next() only once per iteration
  while (tree.hasNext()) {
    var folder = tree.next(); // Get the current folder
    // Now check if this 'folder' has files before adding its name
    if (folder.getFiles().hasNext()) {
      folderTree.push(folder.getName());
    }
  }

  if (folderX) {
    console.log(
      functionRegistry.time +
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

var fileTypeManager = function (fileType) {
  if (fileType === MimeType.GOOGLE_DOCS) {
    return DocumentApp;
  } else if (fileType === MimeType.GOOGLE_SLIDES) {
    return SlidesApp;
  } else if (fileType === MimeType.GOOGLE_SHEETS) {
    return SpreadsheetApp;
  } else if (fileType === MimeType.GOOGLE_FORMS) {
    return FormApp;
  } else {
    console.warn("Unsupported file type: " + fileType);
  }
};
var formsUrls = function (fileX, folderX, time) {
  console.log(
    functionRegistry.time +
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
      !functionRegistry.time +
      ", = " +
      functionRegistry.time,
  );
  if ([fileX].join("").length > 0) {
    console.log(
      functionRegistry.time +
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
        functionRegistry.time +
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
        functionRegistry.time +
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
// var validateFolders = function () {
//   // Grant or Deny access
//   const folderList = (() => {
//     const folders = DriveApp.getFolders();
//     const folderNames = folders.next().getName();
//     const sharedFolders = [];
//     try {
//       for (var i = 0; i < folderNames.length; i++) {
//         [folderNames].map((name) => {
//           if (sharedFolders.indexOf(name) === -1) {
//             sharedFolders.push(name);
//           }
//         });
//         folder = DriveApp.getFoldersByName(sharedFolders).next();
//       }
//     } catch (e) {
//       // Access denied.
//       return false;
//     }
//     // Access granted.
//     // List all users with Editor permission.
//     return folder.getEditors().map((editor) => {
//       return editor.getEmail();
//       console.log(editor.getEmail());
//     });
//   })();
//   // return emailList
//   console.log(folderList);
// };
function validateFolders() {
  // Get all folders from the user's Drive.
  const folders = DriveApp.getFolders();
  const sharedFolderEmails = [];

  // Iterate through all folders.
  while (folders.hasNext()) {
    const folder = folders.next();
    
    // You cannot check if a folder is "shared" with DriveApp alone.
    // The presence of editors is one way to infer it's shared.
    
    try {
      const editors = folder.getEditors();

      // If the folder has editors, it is considered a shared folder.
      if (editors.length > 0) {
        const folderName = folder.getName();
        console.log(`Found shared folder: ${folderName}`);

        // Get the emails of all editors for this folder.
        const editorEmails = editors.map(editor => editor.getEmail());
        
        // Push an object with the folder name and its editors to our list.
        sharedFolderEmails.push({
          name: folderName,
          editors: editorEmails
        });
      }
    } catch (e) {
      // This catch block is useful if a folder throws an access error,
      // but DriveApp.getFolders() typically only returns folders the user can access.
      console.log(`Could not access folder: ${folder.getName()}`);
    }
  }

  // Log the results.
  console.log("Shared Folders and Editors:", sharedFolderEmails);
  
  return sharedFolderEmails;
}
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
