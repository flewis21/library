const functionRegistry = {
  fileList: [],
  paramsList: [],
  initialize: function () {
    for (const key in globalThis) {
      if (typeof globalThis[key] === "function") {
        this.fileList.push(key);
        try {
          const funcString = globalThis[key].toString();
          const params = funcString
            .substring(funcString.indexOf("(") + 1, funcString.indexOf(")"))
            .split(",")
            .map((param) => param.trim())
            .filter((param) => param !== "");
          this.paramsList.push({ name: key, parameters: params });
        } catch (e) {
          Logger.log(`Error processing function: ${key}. Error: ${e}`);
          this.paramsList.push({
            name: key,
            parameters: ["(Unable to parse)"],
          });
        }
      }
    }
  },
  getFileList: function () {
    return this.fileList;
  },
  getParamsList: function () {
    return this.paramsList;
  },
  
  htmlArray: [
    "index",
    "proMedia",
    "epaWebsite",
    "callBack",
    "oddChances",
    "jsGame",
    "checkOnDay",
    "uiAccess",
    "popUpOpen",
    "congressLeg",
    "congressMembers",
    "jFundamentals",
    "gnuFree",
    "myGNUFreeJS",
  ],

  get htmlFile() {
    return this.htmlArray[
      Math.floor(Math.random() * Math.floor(this.htmlArray.length))
    ];
  },

  folderTree: [],

  gTree: function () {
    var tree = DriveApp.getFolders(); // Iterator for folders
    // Corrected while loop: Call next() only once per iteration
    while (tree.hasNext()) {
      var folder = tree.next(); // Get the current folder
      // Now check if this 'folder' has files before adding its name
      if (folder.getFiles().hasNext()) {
        this.folderTree.push(folder.getName());
      }
    }
  },
  getFolderList: function () {
    return this.folderTree;
  },

  maxTime: 6 * 60 * 1000, // This is a simple numerical value
  _startTime: null, // Private variable to store the timestamp when the process begins

  /**
   * Starts the global timer for your process.
   * This should be called only ONCE at the beginning of your main execution.
   */
  startProcessTimer: function () {
    if (this._startTime === null) {
      this._startTime = new Date().getTime();
      console.log(
        "Process timer started at:",
        new Date(this._startTime).toISOString(),
      );
    } else {
      console.warn(
        "Process timer has already started. Call resetProcessTimer() if you want to restart.",
      );
    }
  },

  /**
   * Resets the global timer. Call this if you want to start a completely new execution cycle.
   */
  resetProcessTimer: function () {
    this._startTime = null;
    console.log("Process timer reset.");
  },

  /**
   * Get the elapsed time since the process started.
   * Returns 0 if the timer hasn't been started.
   * @returns {number} Elapsed time in milliseconds.
   */
  get time() {
    if (this._startTime === null) {
      return 0;
    }
    return new Date().getTime() - this._startTime;
  },

  /**
   * Get the time remaining until the 'maxTime' timeout is reached.
   * Returns 'maxTime' if the timer hasn't been started.
   * Ensures the returned value is not negative.
   * @returns {number} Time left to execute in milliseconds.
   */
  get timeLeftToExecute() {
    if (this._startTime === null) {
      return this.maxTime; // Full time remaining if not started
    }
    const elapsed = this.time;
    const remaining = this.maxTime - elapsed;
    return Math.max(0, remaining); // Ensure remaining time doesn't go below zero
  },

  /**
   * Helper to get elapsed time in seconds for easier readability.
   * @returns {number} Elapsed time in seconds.
   */
  get elapsedTimeInSeconds() {
    return Math.floor(this.time / 1000);
  },

  /**
   * Helper to get time left in seconds for easier readability.
   * @returns {number} Time left in seconds.
   */
  get timeLeftInSeconds() {
    return Math.floor(this.timeLeftToExecute / 1000);
  },

  // You can add other functions and properties to functionRegistry here

  // Use a getter for 'time'
  // get time() {
  //   return Math.floor(
  //     (this.maxTime - (new Date().getTime() % (1000 * 60))) / 1000,
  //   );
  // },
  // Use a getter for 'time' to represent the remaining time in the current 6-minute cycle
  // get time() {
  //   // Get the current time in milliseconds since the Unix Epoch
  //   const currentTimeMs = new Date().getTime();

  //   // Calculate how many milliseconds have passed within the *current* 6-minute cycle
  //   // This uses the modulo operator with maxTime
  //   const msPassedInCurrentCycle = currentTimeMs % this.maxTime;

  //   // Calculate the remaining time in milliseconds for the current cycle
  //   const remainingMsInCycle = this.maxTime - msPassedInCurrentCycle;

  //   // Convert the remaining milliseconds to seconds and floor it
  //   return Math.floor(remainingMsInCycle / 1000);
  // },

  // ... other properties or methods ...
};

// Set some global variables
functionRegistry.initialize();
functionRegistry.startProcessTimer();
// globalThis.htmlArray = [
//   `index proMedia epaWebsite callBack oddChances jsGame checkOnDay uiAccess popUpOpen congressLeg congressMembers jFundamentals gnuFree myGNUFreeJS Section3.Challenge1 cors edgarFriendly editor ssForms styling theRoll theWorks uiAccess cGWI`,
// ]
//   .toString()
//   .split(" ");
globalThis.numVarRnd = (function () {
  var numLen = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25,
  ];
  var len = numLen[Math.floor(Math.random() * Math.floor(numLen.length))];
  var rnd = Math.random();
  var res = Math.floor(rnd * Math.floor(len));
  return res;
})();
// globalThis.allFolders = folderManager();
globalThis.uniqueCoArray = function () {
  var secSheet = (function () {
    var ss = (function () {
      var ssApp = SpreadsheetApp;
      var ss = ssApp.openByUrl(
        "https://docs.google.com/spreadsheets/d/1-vNcN0vCLcXgMY9uwcKukUgv_4njggRZ6fqoZs-hBFE/edit#gid=138098962",
      );
      return ss;
    })();
    var sheet = ss.getSheetByName("sec");
    return sheet;
  })();
  var secArrays = secSheet.getDataRange().getValues().slice(1);
  var arrVals = secArrays.map((val) => {
    return { cik: val[0], ticker: val[1], title: val[2] };
  });
  var rndArrVals = [];
  while (rndArrVals.length !== arrVals.length) {
    rndArrVals.push(
      arrVals[Math.floor(Math.random() * Math.floor(arrVals.length)).valueOf()],
    );
  }
  return rndArrVals;
};
globalThis.uniqueItemArray = function () {
  var itemSheet = (function () {
    var ss = (function () {
      var ssApp = SpreadsheetApp;
      var ss = ssApp.openByUrl(
        "https://docs.google.com/spreadsheets/d/1-vNcN0vCLcXgMY9uwcKukUgv_4njggRZ6fqoZs-hBFE/edit#gid=138098962",
      );
      return ss;
    })();
    var sheet = ss.getSheetByName("items");
    return sheet;
  })();
  var itemArrays = itemSheet.getDataRange().getValues().slice(1);
  var arrVals = itemArrays.map((val) => {
    return {
      SKU: val[0],
      Description: val[1],
      "Pack Size": val[2],
      "Data Entered": val[3],
      "Last Modified": val[4],
    };
  });
  var rndArrVals = [];
  while (rndArrVals.length !== arrVals.length) {
    rndArrVals.push(
      arrVals[Math.floor(Math.random() * Math.floor(arrVals.length)).valueOf()],
    );
  }
  return rndArrVals;
};
globalThis.arrD = function () {
  var titleArray = [];
  for (var key in globalThis) {
    if (typeof globalThis[key] == "function") {
      titleArray.push(key);
    }
  }

  var arrData = [
    "e",
    "t",
    "a",
    "o",
    "n",
    "r",
    "i",
    "s",
    "h",
    "d",
    "l",
    "f",
    "c",
    "m",
    "u",
    "g",
    "y",
    "p",
    "w",
    "b",
    "v",
    "k",
    "x",
    "j",
    "q",
    "z",
  ];
  var numLen = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25,
  ]; // Assuming numVarRnd isn't global yet or needs handling
  var rndNumLen = numLen[Math.floor(Math.random() * numLen.length)]; // Pick a random index

  var targetLetter = arrData[rndNumLen]; // The letter we're looking for functions starting with

  var freqArray = [];
  // Correct way to filter or iterate and build freqArray
  for (let i = 0; i < titleArray.length; i++) {
    const funcName = titleArray[i];
    if (funcName[0] && funcName[0].toLowerCase() === targetLetter) {
      if (freqArray.indexOf(funcName) === -1) {
        // Check if not already added
        freqArray.push(funcName);
      }
    }
  }
  return freqArray;
};
// globalThis.arrD = (function () {
//     // console.log(JSON.stringify(this["start"]) + "\n" + arguments.callee.name + "\n!numIndex = " + !numIndex)
//     var titleArray = [];
//     for (var key in globalThis) {
//       // console.log("that function: " + arguments.callee.caller.name + "\nthis function: " + arguments.callee.name + "\nkey: " +  uniqueKey[key]["title"] + "\nelapsedTime: " + elapsedTime)
//       if (typeof globalThis[key] == "function") {
//         titleArray.push(key)}};
//     var arrData = ["e","t","a","o","n","r","i","s","h","d","l","f","c","m","u","g","y","p","w","b","v","k","x","j","q","z"];
//     var numLen = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,numVarRnd]
//     var rndNumLen = numLen[Math.floor(Math.random() * (Math.floor(numLen.length)))]
//     var freqArray = []
//     var i = 0
//     var l = arrData.length
//     for (i,l;i<l;i++) {
//         titleArray.sort((a,b) => {
//           // return console.log("that function: " + arguments.callee.caller.name + "\nthis function: " + arguments.callee.name + "\nsort: " +  a + " OR " + b + "\nelapsedTime: " + elapsedTime)
//           if (a[0].toLowerCase() === arrData[rndNumLen || i]){
//             if (freqArray.indexOf(a) > -1 ) {
//               return
//           }else{freqArray.push(a)}}} )
//     }
//     // console.log(freqArray)
//     return freqArray
// })();
globalThis.arrDRnd = function () {
  var titleArray = [];
  for (var key in globalThis) {
    if (typeof globalThis[key] == "function") {
      titleArray.push(key);
    }
  }

  var arrData = [
    "e",
    "t",
    "a",
    "o",
    "n",
    "r",
    "i",
    "s",
    "h",
    "d",
    "l",
    "f",
    "c",
    "m",
    "u",
    "g",
    "y",
    "p",
    "w",
    "b",
    "v",
    "k",
    "x",
    "j",
    "q",
    "z",
  ];
  var numLen = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25,
  ]; // Assuming numVarRnd isn't global yet or needs handling
  var rndNumLen = numLen[Math.floor(Math.random() * numLen.length)]; // Pick a random index

  var targetLetter = arrData[rndNumLen]; // The letter we're looking for functions starting with

  var freqArray = [];
  // Correct way to filter or iterate and build freqArray
  for (let i = 0; i < titleArray.length; i++) {
    const funcName = titleArray[i];
    if (funcName[0] && funcName[0].toLowerCase() === targetLetter) {
      if (freqArray.indexOf(funcName) === -1) {
        // Check if not already added
        freqArray.push(funcName);
      }
    }
  }
  return freqArray;
};
// globalThis.arrDRnd = (function () {
//     // console.log(JSON.stringify(this["start"]) + "\n" + arguments.callee.name + "\n!numIndex = " + !numIndex)
//     var titleArray = [];
//     for (var key in globalThis) {
//       // console.log("that function: " + arguments.callee.caller.name + "\nthis function: " + arguments.callee.name + "\nkey: " +  uniqueKey[key]["title"] + "\nelapsedTime: " + elapsedTime)
//       if (typeof globalThis[key] == "function") {
//         titleArray.push(key)}};
//     var arrData = ["e","t","a","o","n","r","i","s","h","d","l","f","c","m","u","g","y","p","w","b","v","k","x","j","q","z"];
//     var numLen = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,numVarRnd]
//     var rndNumLen = numLen[Math.floor(Math.random() * (Math.floor(numLen.length)))]
//     var freqArray = []
//     var i = 0
//     var l = arrData.length
//     for (i,l;i<l;i++) {
//         titleArray.sort((a,b) => {
//           // return console.log("that function: " + arguments.callee.caller.name + "\nthis function: " + arguments.callee.name + "\nsort: " +  a + " OR " + b + "\nelapsedTime: " + elapsedTime)
//           if (a[0].toLowerCase() === arrData[rndNumLen || i]){
//             if (freqArray.indexOf(a) > -1 ) {
//               return
//           }else{freqArray.push(a)}}} )
//     }
//     // console.log(freqArray)
//     return freqArray
// })();
globalThis.searchString = function () {
  console.log(
    functionRegistry.time +
      "\n" +
      arguments.callee.name +
      "\n0 is !" +
      !0 +
      ", = " +
      0 +
      "\n6 is !" +
      !6 +
      ", = " +
      6 +
      "\narrDRnd is !" +
      !arrDRnd +
      ", = " +
      arrDRnd +
      "\narrD is !" +
      !arrD +
      ", = " +
      arrD +
      "\ntime is !" +
      !functionRegistry.time +
      ", = " +
      functionRegistry.time,
  );
  var arrDRnd = globalThis.arrDRnd();
  var arrD = globalThis.arrD();
  var newArr = [];
  var i = 0 || 0;
  var l = 6 || 1;
  // console.log(arrDRnd.sort((a, b) => a - b))
  // console.log(arrData.sort((a, b) => a - b))
  if (arrDRnd) {
    for (i, l; i < l; i++) {
      var elaspeTime = new Date() - functionRegistry.time;
      // console.log("that function: " + arguments.callee.caller.name + "\nthis function: " + arguments.callee.name + "\ntypeof arrDRnd: " +  typeof arrDRnd + "\nelaspeTime: " + elaspeTime)
      if (typeof arrDRnd !== "undefined" && typeof arrDRnd !== "string") {
        var myImportData = arrDRnd.sort((a, b) => a - b)[
          Math.floor(Math.random() * arrDRnd.length)
        ];
        newArr.push(myImportData);
        var elaspeTime = new Date() - functionRegistry.time;
        // console.log("that function: " + arguments.callee.caller.name + "\nthis function: " + arguments.callee.name + "\nmyImportData: " +  myImportData + "\nelaspeTime: " + elaspeTime)
      } else if (
        typeof arrDRnd !== "undefined" &&
        typeof arrDRnd === "string"
      ) {
        var myImportData = [arrDRnd].sort((a, b) => a - b)[
          Math.floor(Math.random() * [arrDRnd].length)
        ];
        newArr.push(myImportData);
        var elaspeTime = new Date() - functionRegistry.time;
        // console.log("that function: " + arguments.callee.caller.name + "\nthis function: " + arguments.callee.name + "\nmyImportData: " +  myImportData + "\nelaspeTime: " + elaspeTime)
      }
    }
  } else if (typeof arrD !== "undefined") {
    for (i, l; i < l; i++) {
      var myArrData = sarrD.sort((a, b) => a - b)[
        Math.floor(Math.random() * arrD.length)
      ];
      newArr.push(myArrData);
      var elaspeTime = new Date() - functionRegistry.time;
      // console.log("that function: " + arguments.callee.caller.name + "\nthis function: " + arguments.callee.name + "\nmyArrData: " + myArrData + "\nelaspeTime: " + elaspeTime)
    }
  }
  console.log(
    "randomSubstance: \n( \0: " +
      0 +
      "\nLoop Length: " +
      6 +
      "\nImported Data: " +
      arrDRnd +
      "\nArray Data: " +
      arrD +
      "\nTime: " +
      functionRegistry.time +
      " )",
  );
  if (newArr) {
    var sortNewArr = newArr.sort((a, b) => a - b)[
      Math.floor(Math.random() * newArr.length)
    ];
    // return console.log({myNewArr: sortNewArr});
    return { myNewArr: sortNewArr };
    console.log();
  }
};
// globalThis.result = gsFParams().find((rndS) => {
//       return rndS.name === searchString;
//     });
// globalThis.varA = globalThis[result.name].apply(result.parameters) || globalThis[result.name]();
// globalThis.e = objectOfS(
//       ["parameter"],
//       [
//         [
//           ["func", result.name],
//           ["args", JSON.stringify(result.parameters)],
//           ["action", "getData"],
//           ["file", "uiAccess"],
//         ],
//       ],
//       Math.floor((maxTime - (new Date() % (1000 * 60))) / 1000),
//     );
// globalThis.rndE = objectOfS(
//       ["parameter"],
//       [
//         [
//           ["func", "mis"],
//           ["args", [result.name, ...result.parameters]],
//         ],
//       ],
//       Math.floor((maxTime - (new Date() % (1000 * 60))) / 1000),
//     );
// globalThis.funcUno = rndE.parameter["func"];
// globalThis.funcDos = rndE.parameter["args"];
// globalThis.payLoad = globalThis[funcUno].apply(this, funcDos);
// globalThis.data = {
//       message: payLoad,
//       timestamp: new Date(),
//     };
// globalThis.func = result;
//   //   globalThis.searchString = substanceVegas(
//   //     0,
//   //     [
//   //       objectOfS(
//   //         ["parameter"],
//   //         [[["func", result]]],
//   //         Math.floor((maxTime - (new Date() % (1000 * 60))) / 1000),
//   //       ).parameter["func"],
//   //     ].toString().length,
//   //     [
//   //       objectOfS(
//   //         ["parameter"],
//   //         [[["func", result]]],
//   //         Math.floor((maxTime - (new Date() % (1000 * 60))) / 1000),
//   //       ).parameter["func"],
//   //     ]
//   //       .toString()
//   //       .split(""),
//   //   ).substWord;
// globalThis.folder = allFolders[numVarRnd]
// globalThis.url = (function () {
//   console.log(
//     Math.floor((maxTime - (new Date() % (1000 * 60))) / 1000) +
//       "\n" +
//       arguments.callee.name +
//       "\n!" +
//       file +
//       ", = " +
//       !file,
//   );
//   var fileFiller = function (folder) {
//     console.log(
//       Math.floor((maxTime - (new Date() % (1000 * 60))) / 1000) +
//         "\n" +
//         arguments.callee.name +
//         ":\n" +
//         folder,
//     );
//     var filesObj;
//     while (!filesObj == true) {
//       filesObj = fileMatchManager(folder);
//     }
//     console.log(
//       Math.floor((maxTime - (new Date() % (1000 * 60))) / 1000) +
//         "\n" +
//         arguments.callee.name +
//         ":\nfilesObj.length: " +
//         filesObj.length,
//     );
//     var glFiles = [];
//     for (var key in filesObj) {
//       glFiles.push(filesObj[key]);
//     }
//     var glMov = glFiles[Math.floor(Math.random() * Math.floor(glFiles.length))];
//     var obMov =
//       filesObj[Math.floor(Math.random() * Math.floor(filesObj.length))];
//     console.log(
//       Math.floor((maxTime - (new Date() % (1000 * 60))) / 1000) +
//         "\n" +
//         arguments.callee.name +
//         ":\nglFiles.length: " +
//         glFiles.length,
//     );
//     if (file) {
//       if (
//         (glFiles
//           .join("")
//           .toLowerCase()
//           .indexOf([file].join("").toLowerCase()) === -1 &&
//           glFiles.length > 0) ||
//         (filesObj
//           .join("")
//           .toLowerCase()
//           .indexOf([file].join("").toLowerCase()) === -1 &&
//           filesObj.length >= 1)
//       ) {
//         console.log(
//           Math.floor((maxTime - (new Date() % (1000 * 60))) / 1000) +
//             "\n" +
//             arguments.callee.name +
//             ":\nMoving file = " +
//             file +
//             " to file = " +
//             glMov || obMov,
//         );
//         file = glMov || obMov;
//       } else {
//         return;
//       }
//     } else {
//       console.log(
//         Math.floor((maxTime - (new Date() % (1000 * 60))) / 1000) +
//           "\n" +
//           arguments.callee.name +
//           ":\nfile = " +
//           glMov || obMov,
//       );
//       var file = glMov || obMov;
//     }
//     return file;
//   };
//   var foldersObj;
//   var file;
//   while (!file) {
//     if (typeof folder === "undefined" || folder === null) {
//       foldersObj = folderManager();
//       var glFolders = [];
//       for (var key in foldersObj) {
//         glFolders.push(foldersObj[key]);
//       }
//       console.log(
//         Math.floor((maxTime - (new Date() % (1000 * 60))) / 1000) +
//           "\n" +
//           arguments.callee.name +
//           ":\nglFolders/folderManager().length: " +
//           glFolders.length,
//       );
//       // if (glFolders.indexOf(folder) === -1) {folder} || glFolders.indexOf(folder) === -1}
//       var folder =
//         glFolders[Math.floor(Math.random() * Math.floor(glFolders.length))];
//       file = fileFiller(folder);
//     } else {
//       foldersObj = folderManager(folder);
//       var folder =
//         foldersObj[Math.floor(Math.random() * Math.floor(foldersObj.length))];
//       console.log(
//         Math.floor((maxTime - (new Date() % (1000 * 60))) / 1000) +
//           "\n" +
//           arguments.callee.name +
//           ":\nfoldersObj/folderManager(" +
//           folder +
//           ").length: " +
//           foldersObj.length,
//       );
//       file = fileFiller(folder);
//     }
//   }
//   //  || glFolders.indexOf(folder) !== -1
//   if (
//     typeof folder !== "undefined" ||
//     folder === null ||
//     [folder].join("").length > 0
//   ) {
//     console.log(
//       Math.floor((maxTime - (new Date() % (1000 * 60))) / 1000) +
//         "\n" +
//         arguments.callee.name +
//         ":\nfolder: " +
//         folder,
//     );
//     var eFolder = DriveApp.getFoldersByName([folder].toString()).next();
//   } else {
//     var eFolder = DriveApp;
//   }
//   var dataTree = [];
//   if (
//     typeof file !== "undefined" ||
//     file !== null ||
//     [file].join("").length > 0 ||
//     glFiles.indexOf(file) !== -1
//   ) {
//     console.log(
//       Math.floor((maxTime - (new Date() % (1000 * 60))) / 1000) +
//         "\n" +
//         arguments.callee.name +
//         ":\nfile: " +
//         file,
//     );
//     var folderFile = eFolder.getFilesByName(file);
//     while (folderFile.hasNext()) {
//       var myFile = folderFile.next();
//       // var currentFileUrl = myFile.getUrl();
//       dataTree.push({ name: myFile.getName(), url: myFile.getUrl() });
//     }
//     if (dataTree.length === 0) {
//       var driveFile = DriveApp.getFilesByName(file);
//       while (driveFile.hasNext()) {
//         var myDriveFile = driveFile.next();
//         // var currentDriveFileUrl = {};
//         // currentDriveFileUrl.name = ;
//         // currentDriveFileUrl.url = ;
//         dataTree.push({
//           name: myDriveFile.getName(),
//           url: myDriveFile.getUrl(),
//         });
//       }
//     }
//   } else {
//     var folderFile = eFolder;
//     return folderFile;
//   }
//   console.log(
//     Math.floor((maxTime - (new Date() % (1000 * 60))) / 1000) +
//       "\n" +
//       arguments.callee.name +
//       ":\n" +
//       dataTree,
//   );
//   var rndFiledMain = Math.floor(Math.random() * Math.floor(dataTree.length));
//   var filedMain = dataTree[rndFiledMain];
//   console.log(
//     Math.floor((maxTime - (new Date() % (1000 * 60))) / 1000) +
//       "\n" +
//       arguments.callee.name +
//       ":\n" +
//       filedMain,
//   );
//   return filedMain;
// })().url;
// globalThis.object = JSON.stringify({});
// globalThis.rndPage =
//       htmlArray[
//         Math.floor(Math.random() * Math.floor(htmlArray.length))
//       ];
// globalThis.file = rndPage;
// globalThis.folderX = allFolders[numVarRnd];
// globalThis.folderRoot = DriveApp.getFoldersByName(folderX);
// globalThis.fileXName = "undefined";
//     if (folderRoot.hasNext) {
//       var fileBulk = folderRoot.next().getFiles();
//       const fileNames = [];
//       if (fileBulk.hasNext()) {
//         while (fileBulk.hasNext()) {
//           var fileUrl = fileBulk.next();
//           fileNames.push(fileUrl.getName());
//         }
//         if (fileNames.length > 0) {
//           fileXName =
//             fileNames[Math.floor(Math.random() * fileNames.length)];
//         }
//       }
//     }
// globalThis.fileX = fileXName;
// globalThis.folderX = allFolders[numVarRnd];
// globalThis.numIndex = numVarRnd;
// globalThis.infinitum = numVarRnd;
// globalThis.rndItemIndex = Math.floor(Math.random() * (Math.floor(uniqueItemArray.length)))
// globalThis.itemName = uniqueItemArray[rndItemIndex].Description;
// globalThis.rndItemIndex = Math.floor(Math.random() * (Math.floor(uniqueCoArray.length)));
// globalThis.tiParam = uniqueCoArray[rndItemIndex]["title"]
// globalThis.tunPlay = tiParam;
// globalThis.rndKey = tiParam;
// globalThis.search = tiParam;
// globalThis.stringArray = appSort(numVarRnd);
// globalThis.rawVar = mis("VVar")
// globalThis.argsObject = rawVar.app["myVar"];
// globalThis.missingParams.push(declaredParamName);
// if (missingParams.length === 0) {
//   result.parameters = resolvedArgs;
// } else {
//   allErrors[result] =
//     `Error: Missing parameters for ${result}: ${missingParams.join(", ")}`;
//   console.error(allErrors[result]);
//   console.log(allErrors[result]);
// }
// console.log("Resolved arguments:", args);
// console.log("Resolved parameters Array:", resolvedArgs);
// resCount++
// globalThis.errorKeys = Object.keys(allErrors);
// if (errorKeys.length > 0) {
//   allErrors;
// }
// console.log("No function parameters found for:", searchString);
// result.parameters

function resolveFunctionArgs(funcName, providedArgs = {}) {
  const funcParamsInfo = functionRegistry
    .getParamsList()
    .find((item) => item.name === funcName);
  if (!funcParamsInfo) {
    Logger.log(`Function "${funcName}" not found in registry.`);
    return null;
  }

  const declaredParams = funcParamsInfo.parameters;
  const resolvedArgs = [];
  const providedArgsArray = Array.isArray(providedArgs)
    ? providedArgs
    : Object.values(providedArgs);
  const argMap = Array.isArray(providedArgs) ? {} : providedArgs;

  declaredParams.forEach((paramName) => {
    if (argMap.hasOwnProperty(paramName)) {
      resolvedArgs.push(argMap[paramName]);
    } else if (providedArgsArray.length > resolvedArgs.length) {
      resolvedArgs.push(providedArgsArray[resolvedArgs.length]);
    } else if (globalThis[paramName] !== undefined) {
      resolvedArgs.push(globalThis[paramName]); // Use your pre-defined global
    } else {
      Logger.log(
        `Warning: Parameter "${paramName}" for function "${funcName}" is missing and no suitable global variable found.`,
      );
      resolvedArgs.push(undefined); // Or handle as missing
    }
  });
  return resolvedArgs;
}

// Example usage (assuming your global variables are already declared as you've shown)
function myGVFunction(
  e,
  time,
  data,
  func,
  searchString,
  varA,
  url,
  object,
  file,
  fileX,
  folderX,
  folder,
  numIndex,
  infinitum,
  itemName,
  tunPlay,
  rndKey,
  search,
  stringArray,
  argsObject,
) {
  Logger.log(
    `e: ${e}, time: ${time}, data: ${data}, func: ${func}, searchString: ${searchString}, varA: ${varA}, url: ${url}, object: ${object}, file: ${file}, fileX: ${fileX}, folderX: ${folderX}, folder: ${folder}, numIndex: ${numIndex}, infinitum: ${infinitum}, itemName: ${itemName}, tunPlay: ${tunPlay}, rndKey: ${rndKey}, search: ${search}, stringArray: ${stringArray}, argsObject: ${argsObject}`,
  );
}

function main() {
  functionRegistry.initialize();

  // Example call where missing parameters will be populated from your globals
  const args = resolveFunctionArgs("myGVFunction", {});
  if (args) {
    myGVFunction(...args);
  }
  myGVFunction("explicit e", 123); // Overrides globals for e and time
}
