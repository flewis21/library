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
