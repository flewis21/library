var formMaker = function (fileName) {
  if (typeof formsUrlsGlobal(fileName) !== "undefined") {
    return formsUrlsGlobal(fileName);
  }
  var newFile = FormApp.create(fileName);
  return newFile;
};

var formsUrls = function (fileX) {
  var dataTree = [];
  var treeRoot = DriveApp.getFolderById(
    DriveApp.getFoldersByName("FORMS").next().getId()
  ).getFiles();
  while (treeRoot.hasNext()) {
    dataTree.push(treeRoot.next().getUrl());
  }
  var fileX = "beast";
  if (fileX) {
    var formFile = dataTree.filter((gf) => {
      if (gf.toLowerCase().includes(fileX.toLowerCase())) return gf;
    });
  }
  console.log(typeof formFile[0]);
  var filed =
    formFile[0] ||
    dataTree[Math.floor(Math.random() * Math.floor(dataTree.length))];
  return filed;
};

var formsUrlsGlobal = function (fileX) {
  var treeRoot = DriveApp.getRootFolder().getFiles();
  while (treeRoot.hasNext()) {
    var trueName = treeRoot.next();
    if (trueName.getName() === fileX) return trueName.getUrl();
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
      if (trueNumName.getName() === fileX) return trueNumName.getUrl();
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
