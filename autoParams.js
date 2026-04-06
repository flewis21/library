const functionRegistry = {
  fileList: [],
  paramsList: [],
  htmlArray: [
    "Untitled",
    "uiAccess",
    "theWorks",
    "theRoll",
    "ssSheets",
    "ssForms",
    "slideCard",
    "Section3.Challenge1",
    "editor",
    "edgarFriendly",
    "cors",
    "cGWI",
    "proMedia",
    "epaWebsite",
    "callBack",
    "oddChances",
    "jsGame",
    "checkOnDay",
    "userInterfaceAccess",
    "styling",
    "popUpOpen",
    "congressLeg",
    "congressMembers",
    "jFundamentals",
    "gnuFree",
    "myGNUFreeJS",
  ],
  initialize: function () {
    for (const key in globalThis) {
      if (typeof globalThis[key] == "function") {
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
  getHtmlList: function () {
    return this.htmlArray;
  },

  arrVidVals: [],
  vidTree: function () {
    var itemSheet = (function () {
      var ss = (function () {
        var ssApp = SpreadsheetApp;
        var ss = ssApp.openByUrl(
          "https://docs.google.com/spreadsheets/d/1TIzKrqGoZIxpmEt2SH_6IS9E-Yby8JdhD_byZhTjqbo/edit?gid=0#gid=0",
        );
        return ss;
      })();
      var sheet = ss.getSheetByName("001");
      return sheet;
    })();
    var itemArrays = itemSheet.getDataRange().getValues().slice(1);
    this.arrVidVals = itemArrays.map((val) => {
      return {
        Video: val[0],
        Description: val[1],
        "Data Entered": val[3],
        "Last Modified": val[4],
      };
    });
  },
  getVideoList: function () {
    // functionRegistry.gTree();
    return this.arrVidVals;
  },

  arrImgVals: [],
  imgTree: function () {
    var itemSheet = (function () {
      var ss = (function () {
        var ssApp = SpreadsheetApp;
        var ss = ssApp.openByUrl(
          "https://docs.google.com/spreadsheets/d/1V9McFbDwZ4JOuRDGGm3uk-yUX03k4TdyTbWNwHm5M7k/edit?gid=0#gid=0",
        );
        return ss;
      })();
      var sheet = ss.getSheetByName("001");
      return sheet;
    })();
    var itemArrays = itemSheet.getDataRange().getValues().slice(1);
    this.arrImgVals = itemArrays.map((val) => {
      return {
        Image: val[0],
        Description: val[1],
        "Data Entered": val[3],
        "Last Modified": val[4],
      };
    });
  },
  getImageList: function () {
    // functionRegistry.gTree();
    return this.arrImgVals;
  },

  folderTree: [],
  gTree: function () {
    var tree = DriveApp.getFolders(); // Iterator for folders
    // Corrected while loop: Call next() only once per iteration
    while (tree.hasNext()) {
      var folder = tree.next(); // Get the current folder
      // Now check if this 'folder' has files before adding its name
      if (folder) {
        try {
          let fofi = folder.getFiles();
          if (fofi.hasNext()) {
            this.folderTree.push(folder.getName());
          }
        } catch (err) {
          Logger.log("Error getting folder tree", err.stack);
          functionRegistry.gTree();
        }
      }
    }
  },
  getFolderList: function () {
    // functionRegistry.gTree();
    return this.folderTree;
  },

  arrDomainVals: [],
  domainTree: function () {
    var itemSheet = (function () {
      var ss = (function () {
        var ssApp = SpreadsheetApp;
        var ss = ssApp.openByUrl(
          "https://docs.google.com/spreadsheets/d/1-vNcN0vCLcXgMY9uwcKukUgv_4njggRZ6fqoZs-hBFE/edit#gid=138098962",
        );
        return ss;
      })();
      var sheet = ss.getSheetByName("DomainListings");
      return sheet;
    })();
    var itemArrays = itemSheet.getDataRange().getValues().slice(1);
    this.arrDomainVals = itemArrays.map((val) => {
      return {
        Domain: val[0],
        Price: val[1],
        Email: val[2],
      };
    });
  },
  getDomainList: function () {
    // functionRegistry.gTree();
    return this.arrDomainVals;
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
console.log("boilerplate autoParams: line 175");
functionRegistry.initialize();
console.log("boilerplate autoParams: line 177");
functionRegistry.startProcessTimer();
// A hypothetical frequency-based order for the Zulu alphabet
const zuluFrequencyOrder = [
  "a",
  "u",
  "i",
  "e",
  "o",
  "m",
  "n",
  "s",
  "h",
  "k",
  "l",
  "t",
  "b",
  "p",
  "g",
  "d",
  "y",
  "z",
  "w",
  "v",
  "f",
  "r",
  "c",
  "j",
  "q",
  "x",
  "ng",
  "sh",
  "ph",
  "bh",
  "hl",
  "th",
  "ch",
  "kh",
  "ts",
  "mb",
  "tsh",
  "dl",
  "nc",
  "nd",
  "nq",
  "nt",
];

const zuluFreqPriority = new Map();
zuluFrequencyOrder.forEach((char, index) => {
  zuluFreqPriority.set(char, index);
});
// Function to get the priority of the first letter/multigraph
const getZuluFreqPriority = (word) => {
  const lowercaseWord = word.toLowerCase();

  // Check for multigraphs first, as they are longer
  for (const key of zuluFrequencyOrder) {
    if (lowercaseWord.startsWith(key)) {
      return zuluFreqPriority.get(key);
    }
  }

  // If no multigraph is found, check for single letters
  if (lowercaseWord.length > 0) {
    return zuluFreqPriority.get(lowercaseWord.charAt(0));
  }

  return Infinity; // For empty strings
};
const zuluOrder = [
  "a",
  "b",
  "bh",
  "c",
  "ch",
  "d",
  "dl",
  "e",
  "f",
  "g",
  "h",
  "hh",
  "hl",
  "i",
  "j",
  "k",
  "kh",
  "l",
  "m",
  "n",
  "o",
  "p",
  "ph",
  "q",
  "r",
  "s",
  "sh",
  "t",
  "th",
  "ts",
  "tsh",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const zuluPriority = new Map();
zuluOrder.forEach((char, index) => {
  zuluPriority.set(char, index);
});
// Function to get the priority of the first letter/multigraph
const getZuluPriority = (word) => {
  const lowercaseWord = word.toLowerCase();

  // Check for multigraphs first, as they are longer
  for (const key of zuluOrder) {
    if (lowercaseWord.startsWith(key)) {
      return zuluPriority.get(key);
    }
  }

  // If no multigraph is found, check for single letters
  if (lowercaseWord.length > 0) {
    return zuluPriority.get(lowercaseWord.charAt(0));
  }

  return Infinity; // For empty strings
};
const customOrder = [
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

// Step 1: Create a lookup map for quick access to priority/rank
// Lower index in customOrder means higher priority (comes earlier in sort)
const freqPriority = new Map();
customOrder.forEach((char, index) => {
  freqPriority.set(char, index);
});

// Example array to sort (e.g., letters from a scrambled word)
// const scrambledWordLetters = ["l", "e", "h", "l", "o"]; // To form "hello"

// scrambledWordLetters.sort((a, b) => {
//   const priorityA = charPriority.get(a);
//   const priorityB = charPriority.get(b);

//   // Handle cases where a character might not be in your customOrder (optional, but good practice)
//   // For this example, assuming all characters are in customOrder
//   if (priorityA === undefined || priorityB === undefined) {
//     // You might throw an error, put them at the end, or define custom logic
//     // For simplicity, let's assume all chars are found.
//     console.warn("Character not found in custom order:", a, b);
//     // Fallback to alphabetical for unknown chars, or push them to end
//     if (priorityA === undefined && priorityB !== undefined) return 1; // Unknown to end
//     if (priorityA !== undefined && priorityB === undefined) return -1; // Known to front
//     return 0; // Both unknown, keep original order
//   }

//   // Compare based on their priorities (lower index means higher priority, so a - b)
//   return priorityA - priorityB;
// });

// console.log(scrambledWordLetters); // Output based on your custom order: ["e", "l", "l", "o", "h"]

// // Let's try sorting the custom order itself to show it works
// const arrToSort = [
//   "e",
//   "t",
//   "a",
//   "o",
//   "n",
//   "r",
//   "i",
//   "s",
//   "h",
//   "d",
//   "l",
//   "f",
//   "c",
//   "m",
//   "u",
//   "g",
//   "y",
//   "p",
//   "w",
//   "b",
//   "v",
//   "k",
//   "x",
//   "j",
//   "q",
//   "z",
// ];
// arrToSort.sort((a, b) => {
//   const priorityA = charPriority.get(a);
//   const priorityB = charPriority.get(b);
//   return priorityA - priorityB;
// });
// console.log(arrToSort); // Output: ["e", "t", "a", "o", "n", "r", "i", "s", "h", "d", "l", "f", "c", "m", "u", "g", "y", "p", "w", "b", "v", "k", "x", "j", "q", "z"] (the original custom order, as expected)

// // Example with a different mix
// const mixedLetters = ["z", "a", "q", "e", "s"];
// mixedLetters.sort((a, b) => {
//   const priorityA = charPriority.get(a);
//   const priorityB = charPriority.get(b);
//   return priorityA - priorityB;
// });
// console.log(mixedLetters); // Output: ["e", "a", "s", "q", "z"] (e first, then a, then s, q, z)
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
globalThis.uniqueVideoItemArray = function () {
  functionRegistry.vidTree();
  var arrVals = functionRegistry.getVideoList();
  var rndArrVals = [];
  while (rndArrVals.length !== arrVals.length) {
    rndArrVals.push(
      arrVals[Math.floor(Math.random() * Math.floor(arrVals.length)).valueOf()],
    );
  }
  return rndArrVals;
};
globalThis.uniqueImageItemArray = function () {
  functionRegistry.imgTree();
  var arrVals = functionRegistry.getImageList();
  var rndArrVals = [];
  while (rndArrVals.length !== arrVals.length) {
    rndArrVals.push(
      arrVals[Math.floor(Math.random() * Math.floor(arrVals.length)).valueOf()],
    );
  }
  return rndArrVals;
};
globalThis.arrD = function () {
  var titleArray = functionRegistry.fileList;
  // for (var key in globalThis) {
  //   if (typeof globalThis[key] == "function") {
  //     titleArray.push(key);
  //   }
  // }

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
  var titleArray = functionRegistry.fileList;
  // for (var key in globalThis) {
  //   if (typeof globalThis[key] == "function") {
  //     titleArray.push(key);
  //   }
  // }

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
    formatTime(functionRegistry.time) +
      "\nBoilerplate autoParams line 654\nsearchString()\n" +
      arguments.callee.caller.name,
  );
  var arrDRnd = functionRegistry.getFileList();
  var arrD = functionRegistry.getFileList();
  var newArr = [];
  var i = 0 || 0;
  var l = 6 || 1;
  // console.log(arrDRnd.sort((a, b) => a - b))
  // console.log(arrData.sort((a, b) => a - b))
  if (arrDRnd && typeof arrD === "undefined") {
    for (i, l; i < l; i++) {
      var elaspeTime = new Date() - functionRegistry.time;
      // console.log("that function: " + arguments.callee.caller.name + "\nthis function: " + arguments.callee.name + "\ntypeof arrDRnd: " +  typeof arrDRnd + "\nelaspeTime: " + elaspeTime)
      if (typeof arrDRnd !== "undefined" && typeof arrDRnd !== "string") {
        var myImportData = arrDRnd.sort((a, b) => a - b)[
          Math.floor(Math.random() * arrDRnd.length)
        ];
        newArr.push(myImportData);
        var elaspeTime = functionRegistry.time;
        // console.log("that function: " + arguments.callee.caller.name + "\nthis function: " + arguments.callee.name + "\nmyImportData: " +  myImportData + "\nelaspeTime: " + elaspeTime)
      } else if (
        typeof arrDRnd !== "undefined" &&
        typeof arrDRnd === "string"
      ) {
        var myImportData = [arrDRnd].sort((a, b) => {
          let pA = freqPriority.get(a);
          let pB = freqPriority.get(b);
          return pA - pB;
        })[Math.floor(Math.random() * [arrDRnd].length)];
        newArr.push(myImportData);
        var elaspeTime = functionRegistry.time;
        // console.log("that function: " + arguments.callee.caller.name + "\nthis function: " + arguments.callee.name + "\nmyImportData: " +  myImportData + "\nelaspeTime: " + elaspeTime)
      }
    }
  } else if (typeof arrD !== "undefined") {
    for (i, l; i < l; i++) {
      var myArrData = arrD.sort((a, b) => {
        let pA = freqPriority.get(a);
        let pB = freqPriority.get(b);
        return pA - pB;
      })[Math.floor(Math.random() * arrD.length)];
      newArr.push(myArrData);
      var elaspeTime = functionRegistry.time;
      // console.log("that function: " + arguments.callee.caller.name + "\nthis function: " + arguments.callee.name + "\nmyArrData: " + myArrData + "\nelaspeTime: " + elaspeTime)
    }
  }
  console.log("boilerplate autoParams: line 455");
  // console.log(
  //   "randomSubstance: \n( \0: " +
  //     0 +
  //     "\nLoop Length: " +
  //     6 +
  //     "\nImported Data: " +
  //     arrDRnd +
  //     "\nArray Data: " +
  //     arrD +
  //     "\nTime: " +
  //     functionRegistry.time +
  //     " )",
  // );
  if (newArr) {
    var sortNewArr = newArr.sort((a, b) => {
      let pA = freqPriority.get(a);
      let pB = freqPriority.get(b);
      return pA - pB;
    })[Math.floor(Math.random() * newArr.length)];
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

function gMain() {
  // functionRegistry.initialize();

  // Example call where missing parameters will be populated from your globals
  const args = resolveFunctionArgs("myGVFunction", {});
  if (args) {
    myGVFunction(...args);
  }
  myGVFunction("explicit e", 123); // Overrides globals for e and time
}

function functionHandle(e) {
  var executed = 0;
  let rndE = "";

  // Logging
  if (!e) {
    rndE = createRandomFunction();
    executed++;
  } else if (e && !e.parameter) {
    rndE = createRandomFunction(e);
    executed++;
  } else if (e && e.parameter) {
    let objData = Object.keys(e.parameter);
    if (objData.length === 0) {
      rndE = createRandomFunction();
      executed++;
    } else if (objData.length > 0) {
      if (e.parameter["func"] || e.parameter["args"] || e.parameter["file"]) {
        console.log(">>> [LIBRARY] LIBRARY REQUEST: " + JSON.stringify(e));
        if (e.parameter["file"]) {
          console.log(
            "Determined that funcTres execution is requested! \n" +
              e.parameter["file"],
          );
          var funcTres = e?.parameter["file"];
          try {
            var htmlArray = functionRegistry.getHtmlList();
            var rndHtmlIndex = Math.floor(Math.random() * Math.floor(htmlArray.length));
            var rndPage = htmlArray[rndHtmlIndex];
            var htmlTresArg; // = rndPage; // Default value
            executed++;
            if (funcTres) {
              if (Array.isArray(funcTres)) {
                const firstArg = funcTres[0];
                if (htmlArray.includes(firstArg)) {
                  var funcTres0Index = htmlArray.findIndex(function (element) {
                    return element === firstArg;
                  });
                  htmlTresArg = htmlArray[funcTres0Index];
                }
              } else if (htmlArray.includes(funcTres)) {
                var funcTresIndex = htmlArray.findIndex(function (element) {
                  return element === funcTres;
                });
                htmlTresArg = htmlArray[funcTresIndex];
              }
            }
            if (!htmlTresArg) {
              try{
                let payLoad = {};
                payLoad["type"] = "url";
                payLoad["data"] = {};
                if (funcTres === "undefined") {
                  return getScriptUrl() + "?file=" + rndPage;
                } else {
                  var fT = fileBrowser(null, funcTres);
                  payLoad.data["url"] = fT?.url
                  if (!fT?.url) {
                    payLoad.data["url"] = driveManager(funcTres);
                  }
                  let options = {
                    muteHttpExceptions: true,
                  };
                  payLoad.data["app"] = getUrlResponse(payLoad.data["url"] || getScriptUrl(), options);
                  return renderTemplate(
                    payLoad.data["app"]?.app,
                    {
                      pL: payLoad,
                    },
                    JSON.stringify(fT?.name || funcTres),
                  );
                }
              }
              catch {
                console.log("Requested template Out of Order", error.stack);
              }
            }
            else if (htmlTresArg) {
              try {
                let driveA = 
                  {
                    fileParam: funcTres,
                  }
                return renderFile(
                  funcTres,
                  driveA,
                  "GitHub Pages with Apps Script returning ?func=renderFile&args=" +
                    htmlTresArg +
                    ", " +
                    JSON.stringify(driveA) +
                    ", " +
                    htmlTresArg +
                    ",",
                );
              } catch (error) {
                Logger.log("Requested! HTML Out of Order", error.stack);
              }
            }
          } catch (error) {
            console.error(
              `Error in "RENDER" exec:`,
              error.stack,
            );
            throw new Error(
              "Error executing function: " +
                error.toString() +
                "\n" +
                error.stack,
            );
          }
        }
        else if ((e.parameter["func"] || e.parameter["args"])) {
          try{
            let funcU = e.parameter["func"] || "";
            let funcD = e.parameter["args"] || "";
            let base = createFunctionResult(funcU, funcD);
            const data = globalHandleGetData(base);
            return renderTemplate(
              data?.message?.info,
              {
                pL: data.pL,
              },
              JSON.stringify(data.pL.type),
            );
          }
          catch (error){
            console.log("Requested template Out of Order", error.stack);
          }
        }
      } else {
        if (!e.parameter["func"] && !e.parameter["args"]) {
          var argsEd = createRandomFunction(e.parameter[objData[0]]);
          executed++;
          if (typeof argsEd === "string") {
            e = objectOfS(
              ["parameter"],
              [[["func", argsEd]]],
              functionRegistry.time,
            );
            executed++;
          } else if (typeof argsEd === "object" && argsEd !== null) {
            let argsAP = Object.values(argsEd);
            if (argsAP && argsAP.length > 0) {
              e = objectOfS(
                ["parameter"],
                [
                  [
                    ["func", Object.keys(argsEd)[0]],
                    ["args", [...Object.values(argsEd)[0]]],
                  ],
                ],
                functionRegistry.time,
              );
              executed++;
            } else {
              e = objectOfS(
                ["parameter"],
                [[["func", Object.keys(argsEd)[0]]]],
                functionRegistry.time,
              );
              executed++;
            }
          } else {
            console.log("Unexpected argsEd type: ", argsEd);
            let argsedObj = [];
            let aOKeys = Object.keys(argsEd);
            if (aOKeys.length > 0) {
              aOKeys.forEach((key) => {
                argsedObj.push(argsEd[key]);
              });
              e = objectOfS(
                ["parameter"],
                [
                  [
                    ["func", aOKeys],
                    ["args", argsedObj],
                  ],
                ],
                functionRegistry.time,
              );
              executed++;
            } else {
              e = objectOfS(
                ["parameter"],
                [
                  [
                    ["func", "aVar"],
                    ["args", "varA"],
                  ],
                ],
                functionRegistry.time,
              );
              executed++;
            }
          }
        }
      }
    }
  }
  if (e && e.parameter && !e.parameter["func"] && e.parameter["args"]) {
    var funcUno;
  } else if (e && e.parameter && e.parameter["func"] && !e.parameter["args"]) {
    var funcUno = e.parameter["func"];
  } else if (e && e.parameter && e.parameter["func"] && e.parameter["args"]) {
    var funcUno = e.parameter["func"];
  } else {
    var funcUno = Object.keys(rndE);
  }
  if (e && e.parameter && e.parameter["func"] && !e.parameter["args"]) {
    var funcDos;
  } else if (e && e.parameter && !e.parameter["func"] && e.parameter["args"]) {
    var funcDos = e.parameter["args"];
  } else if (e && e.parameter && e.parameter["func"] && e.parameter["args"]) {
    var funcDos = e.parameter["args"];
  } else {
    var funcDos = Object.values(rndE);
  }
  return {
    exec: funcUno,
    args: funcDos,
    website: funcTres,
  };

  // --- BEGIN Refactored payLoad processing ---

  // try {
  //   let rawFuncResult = null;
  //   let objVal = funcDos?.toString();
  //   if (objVal?.indexOf(",") === -1) {
  // console.info(`previously exec count - \nfunctionHandle(${[funcUno, funcDos]}) - `, executed);
  //     var isObjValUrl = isValidUrl(objVal).hostname;
  // executed++
  //   }
  // console.info(`previously exec count - \nfunctionHandle(${[funcUno, funcDos]}) - `, executed);
  //   let rawUrlResult = isTruthy(isObjValUrl);
  // executed++
  //   if (!rawUrlResult) {
  //     let parsedFuncArgs = [];
  //     let keyObject;
  //     if (typeof funcDos === "object") {
  //       keyObject = Object.keys(funcDos);
  //       if (keyObject && keyObject.length > 0){
  //         Logger.log("This execution is trying to JSON Parse a(n) " + typeof funcDos);
  //         try {
  //           Logger.log("These are the keys of the object that is being parsed - " + keyObject)
  //           parsedFuncArgs = JSON.parse(funcDos);
  //           console.info(error.stack);
  //         } catch (jsonError) {
  //           Logger.log("But, it is failing. \n" + jsonError.stack);
  //           if (Array.isArray(funcDos) && funcDos.length > 0) {
  //             parsedFuncArgs = funcDos; // Treat as a single string argument if not valid JSON
  //           }
  //         }
  //       }
  //     }
  //     else if (typeof funcDos !== "object" && isTruthy(funcDos)) {
  //       parsedFuncArgs = [funcDos]; // Treat as a single string argument if not valid JSON
  //     }
  //     else {
  //       parsedFuncArgs = funcDos; // Treat as a single string argument if not valid JSON
  //     }    //   }
  //       if (
  //         (funcUno && typeof globalThis[funcUno] === "function " && !funcDos) ||
  //         (funcUno && typeof globalThis[funcUno] !== "function" && !funcDos)
  //       ) {
  //         Logger.log("This execution is trying to process without funcDos. funcDos is  " + funcDos);
  //         try {
  // console.info(`previously exec count - \nfunctionHandle(${rawUrlResult}) - `, executed);
  //             rawFuncResult = mis([funcUno]);
  // executed++
  //         } catch (error) {
  //           Logger.log("But, it is failing.");
  // console.info(`previously exec count - \nfunctionHandle(${rawUrlResult}) - `, executed);
  //           rawFuncResult = globalThis[funcUno]();
  // executed++
  //         }
  //       } else if (
  //         funcUno &&
  //         typeof globalThis[funcUno] !== "function" &&
  //         funcDos
  //       ) {
  //         Logger.log("This execution is trying to process with funcDos. funcDos is  " + funcDos);
  //         try {
  // console.info(`previously exec count - \nfunctionHandle(${rawUrlResult}) - `, executed);
  //             rawFuncResult = mis(funcUno.concat(parsedFuncArgs).join(""));
  // executed++
  //         }
  //         catch (error) {
  //           Logger.log("But, it is failing.");
  //           if (funcUno && typeof globalThis[funcUno] === "function " && !funcDos) {
  // console.info(`previously exec count - \nfunctionHandle(${rawFuncResult}) - `, executed);
  //             rawFuncResult = globalThis[funcUno]();
  // executed++
  //           } else if (!funcUno && funcDos) {
  // console.info(`previously exec count - \nfunctionHandle(${rawFuncResult}) - `, executed);
  //             rawFuncResult = globalThis[parsedFuncArgs]();
  // executed++
  //           } else {
  // console.info(`previously exec count - \nfunctionHandle(${rawFuncResult}) - `, executed);
  //             rawFuncResult = globalThis[funcUno].apply(this, parsedFuncArgs);
  // executed++
  //           }
  //         }
  //       } else if (!funcUno && funcDos) {
  //         Logger.log("This execution is trying to process without funcUno. FuncUno is " + funcUno);
  //         try {
  // console.info(`previously exec count - \nfunctionHandle(${rawUrlResult}) - `, executed);
  //             rawFuncResult = globalThis.mis([parsedFuncArgs]);
  // executed++
  //         } catch (error) {
  //           Logger.log("But, it is failing.");
  // console.info(`previously exec count - \nfunctionHandle(${rawFuncResult}) - `, executed);
  //           rawFuncResult = globalThis[parsedFuncArgs]();
  // executed++
  //         }
  //       } else {
  //         Logger.log("This execution is trying to process all input \n" + [funcUno, parsedFuncArgs]);
  //         try {
  // console.info(`previously exec count - \nfunctionHandle(${rawUrlResult}) - `, executed);
  //             rawFuncResult = globalThis.mis([funcUno, ...parsedFuncArgs]);
  // executed++
  //         } catch (error) {
  //           Logger.log("But, it is failing.");
  // console.info(`previously exec count - \nfunctionHandle(${rawFuncResult}) - `, executed);
  //           rawFuncResult = globalThis[funcUno].apply(this, parsedFuncArgs);
  // executed++
  //         }
  //       }
  //   } else {
  //     rawFuncResult = rndE;
  //     console.log(
  //       "Happens everytime createFandomFunction returns the form url as the objects value",
  //       rawFuncResult,
  //     );
  //   }
  //   return globalHandleGetData(rawFuncResult)
  // } catch (error) {
  //   console.error(`Error during payload processing:`, error);
  //   appL = `Critical Error: ${error.stack}`;
  // }
}
