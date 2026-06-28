class Script{};
// Script.prototype. = function () {
// };

class RawFuncResult {
  constructor() {
    this.globalThis = globalThis
    // console.log(this.globalThis)
  }
}
let autoGlobe = new RawFuncResult()
// console.log(autoGlobe.globalThis[autoP.argsX[0]].apply(this, autoP.content));

class ProjectFUnctionNames {
  constructor() {
    this.fileList = [];
    this.paramsList = [];
      for (const key in autoGlobe.globalThis) {
        if (typeof autoGlobe.globalThis[key] == "function") {
          this.fileList.push(key);
          try {
            const funcString = autoGlobe.globalThis[key].toString();
            const params = funcString
              .substring(funcString.indexOf("(") + 1, funcString.indexOf(")"))
              .split(",")
              .map((param) => param.trim())
              .filter((param) => param !== "");
            this.paramsList.push({ name: key, parameters: params });
          } 
          catch (e) {
            Logger.log(`Error processing function: ${key}. Error: ${e}`);
            this.paramsList.push({
              name: key,
              parameters: ["(Unable to parse)"],
            });
          }
        }
      }
  }  
}
let projectP = new ProjectFUnctionNames();

class IsValidKeys {
  constructor(v) {
    this.v = v
  }
  keysValid() {
    let ivkAuto = autoP;
    var isExcludeValue = ivkAuto.omitIt(this.v, "1");
    isExcludeValue = ivkAuto.omitIt(isExcludeValue.omitIt(), "2");
    isExcludeValue = ivkAuto.omitIt(isExcludeValue.omitIt(), "3");
    var isValueOfTypePassedIn = IsValidDoubleObject.validObject(isExcludeValue.omitIt());
    if (isValueOfTypePassedIn) {
      var isInferredTruthy = ivkAuto.trueVfalse(isValueOfTypePassedIn.validObject());
      if (isInferredTruthy) {
        return isValueOfTypePassedIn.validObject();
      }
    }
  }
  res() {
    return this.vLidKey
  }
};

class IsOmit extends RawFuncResult {
  constructor(t, k) {
    super();
    this.t = t;
    this.k = k;
  }
  omitIt() {
    let valuesList = this.pickIt();
    return valuesList;
  };
  res() {
    return this.omList;
  }
};

class IsPick extends IsOmit {
  constructor (t, k) {
    super(t, k);
    this.t = t;
    this.k = k;
  }
  pickIt () {
    var excludeList = this.excludeIt();
    var valuesList = {};
    for (var key in this.t) {
      if (excludeList.includes(key)) {
        valuesList[key] = this.t[key];
      }
    }
    return valuesList;
  };
  res() {
    return this.pipList;
  }
};

class IsExclude extends IsPick {
  constructor (t, k) {
    super(t, k);
    this.t = t;
    this.k = k;
  }
  excludeIt () {
    var keyList = Object.keys(this.t);
    var excludeList = [];
    Array.isArray(keyList)
      ? keyList.forEach((e, i) => {
          if (!e.includes(this.k)) {
            excludeList.push(e);
          }
        })
      : Array(keyList).forEach((e, i) => {
          if (!e.includes(this.k)) {
            excludeList.push(e);
          }
        });
    return excludeList;
  };
  res() {
    return this.exList;
  }
};

class IsMapped extends IsExclude {
  constructor (t, v) {
    super(t, v);
    this.t = t;
    this.v = v;
    this.mapKeys = {};
    for (let key in this.t) {
      this.mapKeys[key] = this.v || typeof this.t[key];
    }
  }
  static mapout (t, v) {
    var mapKeys = {};
    for (var key in t) {
      mapKeys[key] = v || typeof t[key];
    }
    return mapKeys;
  };
  res() {
    return this.mapKeys;
  }
};

class IsValidDoubleObject extends IsMapped {
  constructor(t) {
    super(t);
    this.t = t
    for (let key in this.t) {
      let tempV = this.t[key];
      for (let tempVKey in tempV) {
        let vKeyDouble = tempV[tempVKey];
        let tempVDouble = [tempV[tempVKey]].sort((a,b) => {
          let obj1 = a;
          let obj2 = b;
          if (obj1 === obj2) {
            return
          }
        })
      }
      let tempDouble = [this.t[key]].sort((a,b) => {
        let obj1 = a;
        let obj2 = b;
        if (obj1 === obj2) {
          return
        }
      })
      if (tempDouble) {
        this.tempDouble = tempDouble
      }
    }
    if (this.tempDouble && typeof this.tempDouble[0] !== typeof this.tempDouble[1]) {
      this.tempDouble = this.t
    }
  }
  static validObject(t) {
    // var validKeys = IsMapped.mapout(t);
    if (t) {
      var validList = Object.values(t);
      class Valid{
        constructor(vList) {
          this.vList = vList
        }
        static validateList(vList) {
          for (let key in vList) {
            let tempV = vList[key];
            for (let tempVKey in tempV) {
              let vKeyDouble = tempV[tempVKey];
              let tempVDouble = [tempV[tempVKey]].sort((a,b) => {
                let obj1 = a;
                let obj2 = b;
                if (obj1 === obj2) {
                  return
                }
              })
            }
            let tempDouble = [vList[key]].sort((a,b) => {
              let obj1 = a;
              let obj2 = b;
              if (obj1 === obj2) {
                return
              }
            })
            if (tempDouble) {
              return tempDouble
            }
          }
          // let validObj1 = validList[0];
          // let validObj2 = validList[1];
        }
      }
      let myValiObj = Valid.validateList(t);
      let tempValid = myValiObj
      if (typeof tempValid[0] === typeof tempValid[1]) {
        return tempValid
      }
      else {
        return t
      }
    }
  };
  static objRes(t) {
    if (t) {
      let func = Object?.keys(t);
      let args = Object?.values(t);
    }
    return doGet(t);
  }
  res() {
    return this.t
  }
};

class IsTruthy extends IsValidDoubleObject {
  constructor (t) {
    super(t);
    this.t = t;
    if (
      typeof this.t === null ||
      this.t === null ||
      typeof this.t === "undefined" ||
      this.t === "undefined" ||
      typeof this.t === false ||
      this.t === false ||
      this.t === 0 ||
      this.t.length === 0 ||
      this.t === ""
    ) {
      this.t = false;
    } else {
      this.t = true;
    }
  }
  trueVfalse (t) {
    if (
      typeof t === null ||
      t === null ||
      typeof t === "undefined" ||
      t === "undefined" ||
      typeof t === false ||
      t === false ||
      t === 0 ||
      t.length === 0 ||
      t === ""
    ) {
      return false;
    } else {
      return true;
    }
  };
  res() {
    return this.t;
  }
};

class IsKeyOf extends IsTruthy {
  constructor (t) {
    super(t);
    this.t = t;
  }
  keyIt () {
    var keyList = {}; //Object.keys(t);
    for (var key in this.t) {
      keyList[key] = key;
    }
    return keyList;
  };
  res() {
    return this.keyOf;
  }
};

class IsPropertyOf extends IsKeyOf {
  constructor (t) {
    super(t);
    this.t = t;
  }
  propIt () {
    let propertyList = IsMapped.mapout(t);
    return propertyList;
  };
  res() {
    return this.propList;
  }
};

class IsTypeScript extends IsPropertyOf {
  constructor(typePassedIn) {
    super(typePassedIn);
    this.typePassedIn = typePassedIn
  }
  passedType() {
    var mapTypes = {};
    for (var key in this.typePassedIn) {
      mapTypes[key] = this.typePassedIn[key];
    }
    return mapTypes;
  };
  res() {
    return this.mTypes()
  }
};

class AutoParams extends IsTypeScript {
  constructor() {
    super()

    this.functionRegistry = {
      fileList: [],
      paramsList: [],
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
        return fileList;
      },
      getParamsList: function () {
        return paramsList;
      },
      getHtmlList: function () {
        this.htmlArray = [
          "Untitled",
          "uiAccess",
          "theWorks",
          "theRoll",
          "ssSheets",
          "slideCard",
          "Section3.Challenge1",
          "editor",
          "edgarFriendly",
          "cors",
          "playParam",
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
        ]
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
        // this.functionRegistry.gTree();
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
        return this.arrImgVals;
      },

      folderTree: [],
      gTree: function () {
        let gtAP = autoP
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
              gtAP.functionRegistry.gTree();
            }
          }
        }
      },
      getFolderList: function () {
        // this.functionRegistry.gTree();
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
        for (const key in itemArrays) {
          this.arrDomainVals.push(
            {
              Domain: itemArrays[key][0],
              Price: "$" + itemArrays[key][1] + ".00",
              Email: itemArrays[key][2],
              Status: itemArrays[key][3]
          })
        }
        this.arrDomainVals = itemArrays.map((val) => {
          return {
            Domain: val[0],
            Price: val[1],
            Email: val[2],
          };
        });
      },
      getDomainList: function () {
        // this.functionRegistry.gTree();
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
    console.log("boilerplate autoParams: line 272");
    this.functionRegistry.initialize();
    console.log("boilerplate autoParams: line 274");
    this.functionRegistry.startProcessTimer();

    // A hypothetical frequency-based order for the Zulu alphabet
    this.zuluFrequencyOrder = [
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

    this.zuluFreqPriority = new Map();
    this.zuluFrequencyOrder.forEach((char, index) => {
      this.zuluFreqPriority.set(char, index);
    });
    // Function to get the priority of the first letter/multigraph
    this.getZuluFreqPriority = (word) => {
      const lowercaseWord = word.toLowerCase();

      // Check for multigraphs first, as they are longer
      for (const key of this.zuluFrequencyOrder) {
        if (lowercaseWord.startsWith(key)) {
          return this.zuluFreqPriority.get(key);
        }
      }

      // If no multigraph is found, check for single letters
      if (lowercaseWord.length > 0) {
        return this.zuluFreqPriority.get(lowercaseWord.charAt(0));
      }

      return Infinity; // For empty strings
    };
    this.zuluOrder = [
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

    this.zuluPriority = new Map();
    this.zuluOrder.forEach((char, index) => {
      this.zuluPriority.set(char, index);
    });
    // Function to get the priority of the first letter/multigraph
    this.getZuluPriority = (word) => {
      const lowercaseWord = word.toLowerCase();

      // Check for multigraphs first, as they are longer
      for (const key of this.zuluOrder) {
        if (lowercaseWord.startsWith(key)) {
          return this.zuluPriority.get(key);
        }
      }

      // If no multigraph is found, check for single letters
      if (lowercaseWord.length > 0) {
        return this.zuluPriority.get(lowercaseWord.charAt(0));
      }

      return Infinity; // For empty strings
    };
    this.customOrder = [
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
    this.freqPriority = new Map();
    this.customOrder.forEach((char, index) => {
      this.freqPriority.set(char, index);
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
    // htmlArray = [
    //   `index proMedia epaWebsite callBack oddChances jsGame checkOnDay uiAccess popUpOpen congressLeg congressMembers jFundamentals gnuFree myGNUFreeJS Section3.Challenge1 cors edgarFriendly editor ssForms styling theRoll theWorks uiAccess cGWI`,
    // ]
    //   .toString()
    //   .split(" ");
    this.numVarRnd = (function () {
      var numLen = [
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25,
      ];
      var len = numLen[Math.floor(Math.random() * Math.floor(numLen.length))];
      var rnd = Math.random();
      var res = Math.floor(rnd * Math.floor(len));
      return res;
    })();
    // const allFolders = folderManager();
    this.uniqueCoArray = function () {
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
    this.uniqueItemArray = function () {
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
    this.uniqueVideoItemArray = function () {
      let vidIA = autoP;
      vidIA.functionRegistry.vidTree();
      var arrVals = vidIA.functionRegistry.getVideoList();
      var rndArrVals = [];
      while (rndArrVals.length !== arrVals.length) {
        rndArrVals.push(
          arrVals[Math.floor(Math.random() * Math.floor(arrVals.length)).valueOf()],
        );
      }
      return rndArrVals;
    };
    this.uniqueImageItemArray = function () {
      let imgIA = autoP;
      imgIA.functionRegistry.imgTree();
      var arrVals = imgIA.functionRegistry.getImageList();
      var rndArrVals = [];
      while (rndArrVals.length !== arrVals.length) {
        rndArrVals.push(
          arrVals[Math.floor(Math.random() * Math.floor(arrVals.length)).valueOf()],
        );
      }
      return rndArrVals;
    };
    this.arrD = function () {
      let arrDAP = autoP;
      var titleArray = arrDAP.functionRegistry.fileList;
      // for (var key in globalThis) {
      //   if (typeof globalThis[key] == "function") {
      //     titleArray.push(key);
      //   }
      // }

      var arrData = customOrder;
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
    // this.arrD = (function () {
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
    this.arrDRnd = function () {
      let arrnDAP = autoP;
      var titleArray = arrnDAP.functionRegistry.fileList;
      // for (var key in globalThis) {
      //   if (typeof globalThis[key] == "function") {
      //     titleArray.push(key);
      //   }
      // }

      var arrData = this.customOrder;
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

    // const arrDRnd = (function () {
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
    this.searchString = function () {
      let secStAP = autoP;
      console.log(
        formatTime(secStAP.functionRegistry.time) +
          "\nBoilerplate autoParams line 654\nsearchString()\n" +
          arguments.callee.caller.name,
      );
      var arrDRnd = secStAP.functionRegistry.getFileList();
      var arrD = secStAP.functionRegistry.getFileList();
      var newArr = [];
      var i = 0 || 0;
      var l = 6 || 1;
      // console.log(arrDRnd.sort((a, b) => a - b))
      // console.log(arrData.sort((a, b) => a - b))
      if (arrDRnd && typeof arrD === "undefined") {
        for (i, l; i < l; i++) {
          var elaspeTime = new Date() - secStAP.functionRegistry.time;
          // console.log("that function: " + arguments.callee.caller.name + "\nthis function: " + arguments.callee.name + "\ntypeof arrDRnd: " +  typeof arrDRnd + "\nelaspeTime: " + elaspeTime)
          if (typeof arrDRnd !== "undefined" && typeof arrDRnd !== "string") {
            var myImportData = arrDRnd.sort((a, b) => a - b)[
              Math.floor(Math.random() * arrDRnd.length)
            ];
            newArr.push(myImportData);
            var elaspeTime = secStAP.functionRegistry.time;
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
            var elaspeTime = secStAP.functionRegistry.time;
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
          var elaspeTime = secStAP.functionRegistry.time;
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
      //     this.functionRegistry.time +
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

    // result = gsFParams().find((rndS) => {
    //       return rndS.name === searchString;
    //     });
    // varA = result.name.apply(result.parameters) || result.name();
    // e = objectOfS(
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
    //   //   autoP.searchString = substanceVegas(
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

    this.resolveFunctionArgs = function(funcName, providedArgs = {}) {
      let resFAP = autoP;
      const funcParamsInfo = resFAP.functionRegistry
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
    this.myGVFunction = function(
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

    this.gMain = function() {
      let gmAP = autoP;
      // this.functionRegistry.initialize();

      // Example call where missing parameters will be populated from your globals
      const args = gmAP.resolveFunctionArgs("myGVFunction", {});
      if (args) {
        gmAP.myGVFunction(...args);
      }
      gmAP.myGVFunction("explicit e", 123); // Overrides globals for e and time
    }
  }
};
let freqP = new AutoParams();

class Presidential extends AutoParams {
  constructor() {
    super();
  }
  spirit() {
    this.timeLeft = formatTime(this.functionRegistry.timeLeftToExecute);
    console.log(`You have ${this.timeLeft} left to convert. Tick Tock, time is wasting`);
  }
};

class ResolveParameters extends Presidential {
  constructor(func, someArgs) {
    super();
    this.func = func;
    this.someArgs = someArgs;
    console.log(
      "boilerplate Help: line 2284\nresolveParams(func: " +
        this.func +
        ", someArgs: " +
        this.someArgs +
        ") ",
    );
    this.trueFunc = this.trueVfalse(this.func);
    this.trueSomeArgs = this.trueVfalse(this.someArgs);
    this.funcUno = this.trueFunc
      ? decodeURIComponent(this.func)
      : Object.keys(autoGlobe.globalThis);
    this.funcDos = this.trueSomeArgs ? decodeURIComponent(this.someArgs) : this.trueSomeArgs;
    this.numVarRnd = Math.floor(Math.random() * this.funcUno.length);
    this.arrDRnd = null;
    if (this.funcUno || this.funcDos) {
      this.argsX = [];
      this.content = [];
      this.arrUno = Array.isArray(this.func);
      this.arrDos = this.trueVfalse(this.someArgs);
      if (this.arrUno && this.arrDos) {
        this.keys = Object.values(this.func).concat(this.someArgs);
      } 
      else {
        if (this.arrUno && !this.arrDos) {
          this.keys = Object.values(this.func);
        }
        else {
          if (!this.arrUno && this.arrDos && this.trueFunc) {
            this.keys = [this.func].concat(this.someArgs);
          } 
          else {
            if (!this.arrUno && !this.arrDos && this.trueFunc) {
              this.keys = [this.func];
            }
            else {
              if (!this.arrUno && !this.arrDos && !this.trueFunc) {
                this.keys = [this.funcUno[this.numVarRnd]];
              }
            }
          }
        }
      }
      this.keys.forEach((pro) => {
        this.keyPro
        if (typeof pro === "object" || Array.isArray(pro)) {
          this.keyPro = pro;
          console.log("this.keyPro = " + this.keyPro);
        }
        else {
          this.keyPro = [pro];
          console.log("this.[keyPro] = " + this.keyPro);
        }
        this.keyProParams;
        this.realItem;
        this.keysArrArr = this.trueVfalse(Array.isArray(pro));
        if (this.keysArrArr) {
          this.funcLimit = [];
          this.paramLimit = [];
          pro.forEach((subParam, proIndex) => {
            this.realItem = this.trueVfalse(subParam);
            if (this.realItem) {
              this.keyProParams;
              if (typeof subParam === "object" || Array.isArray(subParam)) {
                this.keyProParams = new RelatedFunctions(subParam[proIndex]);
              }
              else {
                this.keyProParams = new RelatedFunctions(subParam);
              }
              if (this.keyProParams.funFirst >= 0) {
                this.funcLimit.push(this.funcUno[this.keyProParams.funFirst]);
              } 
              else {
                if (typeof subParam === "object") {
                  this.paramLimit.push(subParam);
                } 
                else {
                  if (Array.isArray(subParam)) {
                    this.paramLimit.push(subParam[proIndex]);
                  }
                  else {
                    this.paramLimit.push(subParam);
                  }
                }
              }
            }
          });
          if (this.funcLimit.length > 0) {
            this.argsX.push(this.funcLimit);
          }
          if (this.paramLimit.length > 0) {
            this.content.push(this.paramLimit);
          }
        } 
        else {
          this.realItem = this.trueVfalse(pro);
          if (this.realItem) {
            for (var key in this.keyPro) {
              this.keyProParams;
              if (typeof pro === "object" || Array.isArray(pro)) {
                this.keyProParams = new RelatedFunctions(pro[key]);
                console.log("keyProParams = " + JSON.stringify(this.keyProParams));
              }
              else {
                this.keyProParams = new RelatedFunctions(pro);
                console.log("keyProParams = " + JSON.stringify(this.keyProParams));
              }
              if (this.keyProParams.funFirst >= 0) {
                this.argsX.push(this.funcUno[this.keyProParams.funFirst]);
                console.log("this.funcUno[this.keyProParams.funFirst] = " + this.funcUno[this.keyProParams.funFirst])
              } else {
                if (typeof pro === "object" || Array.isArray(pro)) {
                  this.content.push(pro[key]);
                }
                else {
                  this.content.push(pro);
                }
              }
            }
          }
        }
      });
      if (this.argsX && this.argsX.length > 0) {
        this.allErrors = {};
        this.allResolutions = {};
        this.funcString = autoGlobe.globalThis[this.funcUno[this.numVarRnd]]?.toString();
        this.fParams = this.funcString
          ?.substring(this.funcString?.indexOf("(") + 1, this.funcString?.indexOf(")"))
          ?.split(",")
          ?.map((param) => param?.trim())
          ?.filter((param) => param !== "");; //gsFParams();
        this.resCount = 0;
        this.argsX.forEach((result, argsXIndex) => {
          console.log("argsX result " + this.resCount + ": " + result);
          this.args = {};
          this.resolvedArgs = [];
          this.missingParams = [];
          this.contentLimit = this.content[argsXIndex];
          this.searchResult = this.fParams 
          //this.fParams.find((rndS) => {
            // return rndS.name === result;
          // });
          this.orderedContent = [];
          if (
            this.searchResult &&
            this.searchResult !== "undefined" &&
            this.searchResult !== null &&
            this.searchResult.parameters
          ) {
            this.declaredParams = this.searchResult.parameters;
            if (this.contentLimit?.length > 0) {
              console.log(
                "Current content: " +
                  this.contentLimit +
                  "\nDeclared parameters: " +
                  this.declaredParams,
              );
            }
            this.contentMap = {};
            this.realItem;
            this.declaredParams.forEach((declaredParam, declaredParamIndex) => {
              this.declaredParamArrArr = this.trueVfalse(Array.isArray(declaredParam));
              if (this.declaredParamArrArr) {
                this.paramLimit = 0;
                declaredParam.forEach((subParam, subParamIndex) => {
                  this.contentLimit.forEach((item, currentDeclaredIndex) => {
                    this.realItem = this.trueVfalse(subItem);
                    if (this.realItem) {
                      this.currentDeclared = this.contentMap[declaredParam];
                      this.currentSub = subItem;
                      this.currentDeclared = this.currentSub;
                      this.paramLimit++;
                      if (this.contentMap.length === this.declaredParams.length) {
                        return;
                      }
                    }
                  });
                });
              } 
              else {
                if (Array.isArray(this.contentLimit)) {
                  this.contentLimit.forEach((item, contentLimitIndex) => {
                    this.contentLimitArrArr = this.trueVfalse(Array.isArray(item));
                    if (this.contentLimitArrArr) {
                      item.forEach((subItem, mapItemIndex) => {
                        this.realItem = this.trueVfalse(subItem);
                        if (this.realItem) {
                          this.paramDKey = this.declaredParams[mapItemIndex];
                          if (!this.contentMap[paramDKey]) {
                            this.contentMap[this.paramDKey] = subItem;
                          }
                          // if (this.contentMap[this.paramDKey] === subItem) {
                          //   return;
                          // }
                        }
                      });
                    } 
                    else {
                      this.realItem = this.trueVfalse(item);
                      if (this.realItem) {
                        this.paramDKey = this.declaredParams[contentLimitIndex];
                        if (!this.contentMap[this.paramDKey]) {
                          this.contentMap[this.paramDKey] = item;
                        }
                        // if (this.contentMap[this.paramDKey] === item) {
                        //   return;
                        // }
                      }
                    }
                  });
                } 
                else {
                  this.contentArrArr = this.trueVfalse(Array.isArray(this.contentLimit));
                  if (this.contentArrArr) {
                  } 
                  else {
                    this.realItem = this.trueVfalse(this.contentLimit);
                    if (this.realItem) {
                      for (var key in this.declaredParams) {
                        this.paramDKey = this.declaredParams[key];
                        if (!this.contentMap[paramDKey]) {
                          this.contentMap[this.paramDKey] = this.contentLimit;
                        }
                        // if (this.contentMap[paramDKey] === this.contentLimit) {
                        //   return;
                        // }
                      }
                    }
                  }
                }
              }
            });
            this.declaredParams.forEach((paramName) => {
              if (this.contentMap.hasOwnProperty(paramName)) {
                this.orderedContent.push(this.contentMap[paramName]);
              } else {
                this.orderedContent.push(null);
              }
            });
          }
          if (this.orderedContent) {
            if (this.missingParams.length === 0) {
              // orderedContent = resolvedArgs;
              this.allResolutions[result] = this.resolvedArgs;
              // console.error(allErrors[result]);
              console.log(this.allResolutions[result]);
            } 
            else {
              this.allErrors[result] =
                `Error: Missing parameters for ${result}: ${this.missingParams.join(", ")}`;
              console.error(this.allErrors[result]);
              console.log(this.allErrors[result]);
            }
          }
          if (Object.keys(this.args).length > 0) {
            console.log("Resolved arguments:", this.args);
          }
          if (this.resolvedArgs.length > 0) {
            console.log("Resolved parameters Array:", this.resolvedArgs);
          }
          this.resCount++;
          // this.result = this.resolvedArgs
        })
        let errorKeys = Object.keys(this.allErrors);
        // if (errorKeys.length > 0) {
        //   return allErrors;
        // }
      }
      else {
        console.log("No matching function found for:", this.func);
      }
    }
  }
  resParams() {
  }
};
let autoP = new ResolveParameters();

var geneicType = function (e) {
  let executed = funcHandle.executed;
  let handles;
  let base;
  let exampleObjectType = {
    a: Array.isArray(autoP?.fParams)? autoP?.fParams[0] : "String",
    b: Array.isArray(autoP?.fParams)? autoP?.fParams[1] : 123,
    c: Array.isArray(autoP?.fParams)? autoP?.fParams[3] : ["String"],
  };
  let chopSort = autoP
  ?.fParams?.sort((a,b) => {
      let i = Math.random()
      let tSorted = a;
      let zSorted = b;
      if (i < .3) {
        return zSorted - tSorted
      }
      else {
        if (i > .3 && i < .5 ) {
          return tSorted - zSorted
        }
        else {
          if (i > .5 && i < .8) {
            return zSorted
          }
          else {
            if (i > .8) {
              return tSorted
            }
          }
        }
      }
    }).filter((val) => {
        if (String(val).indexOf(exampleObjectType.a) > -1) {
          return val === exampleObjectType.a
          // exampleObjectType.a = val;
        }
      });
  let eQueryObject = exampleObjectType;
  let i = Math.random();
  while (i >= .4 || i < .2) {
    i = Math.random();
  }
  let l = 1;
  for (i,l;i<l;i++) {
    if (i < .4) {
      if (!e) {
        if (i < .2) {
          base = autoGlobe.globalThis["vidPlaylist"].apply(this, [rndWord()]);
        }
        else {
          eQueryObject = {
            parameter: {
              q: autoP.spirit()
            }
          };
          eQueryObject = {parameter: {file: "uiAccess"}}
          let tempObj = funcHandle(eQueryObject);
          handles =  tempObj
          console.log("handles = " + handles, executed++);
          if (handles.funcUno.length === 0 && handles.funcDos.length === 0) {
            base = handles;
          }
          else {
            let funcU = handles.funcUno;
            let funcD = handles.funcDos;
            base = createFunctionResult(funcU, funcD);
          }
        }
        if (base && !base?.myVar || ((base && base[0]) && (!base[0]?.rndTitle || typeof base[0] !== "number")) || [base].length !== 0) {
          let dataOR = globalHandleGetData(base);
          return dataOR
        }
        else {
          return {payload: base}
        }
      }
      else {
        if (e && e.parameter && e.parameter.action && e.parameter.action === "getData") {
          return handleRequest(e);
        }
        else {
          if (e && e.parameter && e.parameter.action && e.parameter.action === "getDe") {
            return wwwDe(e);
          }
        }
        let tempObj = funcHandle(e);
        handles =  tempObj
        console.log("handles = " + handles, executed++);
        if (handles.funcUno.length === 0 && handles.funcDos.length === 0) {
          base = handles;
        }
        else {
          let funcU = handles.funcUno;
          let funcD = handles.funcDos;
          base = createFunctionResult(funcU, funcD);
        }
        if (base && !base?.myVar || ((base && base[0]) && (!base[0]?.rndTitle || typeof base[0] !== "number")) || [base].length !== 0) {
          let dataOR = globalHandleGetData(base);
          return dataOR
        }
        else {
          return {payload: base}
        }
      }
    }
    else {
      if (i > .3 && i < .7) {
        if (!e) {
          if (i > .4 && i < .6) {
            return autoGlobe.globalThis[autoP.argsX[0]].apply(this, autoP.content);
          }
          else {
            eQueryObject = {
              parameter: {
                action:"getData"
              }
            };
            if (eQueryObject && eQueryObject.parameter && eQueryObject.parameter.action === "getData") {
              return handleRequest(eQueryObject);
            }
          }
        }
        else {
          if (e && e.parameter && e.parameter.action && e.parameter.action === "getData") {
            return handleRequest(e);
          }
          else {
            if (e && e.parameter && e.parameter.action && e.parameter.action === "getDe") {
              return wwwDe(e);
            }
          }
          let tempObj = funcHandle(e);
          handles =  tempObj
          console.log("handles = " + handles, executed++);
          if (handles.funcUno.length === 0 && handles.funcDos.length === 0) {
            base = handles;
          }
          else {
            let funcU = handles.funcUno;
            let funcD = handles.funcDos;
            base = createFunctionResult(funcU, funcD);
          }
          if (base && !base?.myVar || ((base && base[0]) && (!base[0]?.rndTitle || typeof base[0] !== "number")) || [base].length !== 0) {
            let dataOR = globalHandleGetData(base);
            return dataOR
          }
          else {
            return {payload: base}
          }
        }
      }
      else {
        if (i > .6) {
          if (!e) {
            if (i > .8) {
              base = autoGlobe.globalThis[autoP.argsX[0]].apply(this, autoP.content);
            }
            else {
              eQueryObject = {
                parameter: {
                  file: autoP.functionRegistry.htmlArray[Math.floor(Math.random() * autoP.functionRegistry.htmlArray.length)]
                }
              };
              let tempObj = funcHandle(eQueryObject);
              handles =  tempObj
              console.log("handles = " + handles, executed++);
              if (handles.funcUno.length === 0 && handles.funcDos.length === 0) {
                base = handles;
              }
              else {
                let funcU = handles.funcUno;
                let funcD = handles.funcDos;
                base = createFunctionResult(funcU, funcD);
              }
            }
            if (base && !base?.myVar || ((base && base[0]) && (!base[0]?.rndTitle || typeof base[0] !== "number")) || [base].length !== 0) {
              let dataOR = globalHandleGetData(base);
              return dataOR
            }
            else {
              return {payload: base}
            }
          }
          else {
            if (e && e.parameter && e.parameter.action && e.parameter.action === "getData") {
              return handleRequest(e);
            }
            else {
              if (e && e.parameter && e.parameter.action && e.parameter.action === "getDe") {
                return wwwDe(e);
              }
            }
            let tempObj = funcHandle(e);
            handles =  tempObj
            console.log("handles = " + handles, executed++);
            if (handles.funcUno.length === 0 && handles.funcDos.length === 0) {
              base = handles;
            }
            else {
              let funcU = handles.funcUno;
              let funcD = handles.funcDos;
              base = createFunctionResult(funcU, funcD);
            }
            if (base && !base?.myVar || ((base && base[0]) && (!base[0]?.rndTitle || typeof base[0] !== "number")) || [base].length !== 0) {
              let dataOR = globalHandleGetData(base);
              return dataOR
            }
            else {
              return {payload: base}
            }
          }
        }
      }
    }
  }
  // let tempSc = new IsValidDoubleObject(eQueryObject);
  // let script = new IsValidDoubleObject(eQueryObject);
    // return script.objRes();
    // console.log(Object.getOwnPropertyNames(autoP));
    // console.log(Object.getPrototypeOf(autoP));
    // GameManager.setGameStart("Warrior");
    // let mmoRpgPlay = GameManager.setGameStart.instances[0];
    // let mmoRpgEnemy = GameManager.setGameStart.instances[1];
    // GameManager.setGameStart.instances.forEach((instance) => {
    //   console.log(`${JSON.stringify(instance)}`)
    // })
    // var numVarRnd = Math.floor(Math.random() * 25);
    // var functionObjectType = resolveParams(["isOmit",["e","b"],"isPick",["e","a"],"isExclude",["e","c"],"IsMapped.mapout",["e","f"],"isPropertyOf","e","isKeyOf","e","autoP.trueVfalse","e",,"isTypeScript","e","isValidDoubleObject",{a:"e",b:"e"}]);
    // var functionObjectType = resolveParams(["dtlsPro","bounty","portBing","hunter"]);
    // let randomWord = rndWord();
    // let tyFile = wsSIPOC(randomWord);
    // console.log(tyFile.split(">")[1].split("<")[0]);
    // let arrDRnd = appSort(randNum(randomWord));
    // let searchResult = randomSubstance(0, 1, ["kVar", "kiloPoint"]).myNewArr;
    // let result = autoP.functionRegistry.paramsList.find((rndS) => {
    //   return rndS.name === searchResult;
    // });
    // let fileIndex = handleRequest({parameter: {action:"getData"}});
    // let handles
    // if (e) {
    //   let tempObj = FunctionHandle.handleFunction(e);
    //   handles =  tempObj
    //   console.log("handles = " + handles, executed++);
    // }
    // else {
    //   let tempObj = FunctionHandle.handleFunction({parameter: {func:"vidPlylist",args:tyFile.split(">")[1].split("<")[0]}});
    //   handles = tempObj;
    //   console.log("handles = " + handles, executed++);
    // }
    // let base
    // if (handles.funcUno.length === 0 && handles.funcDos.length === 0) {
    //   base = handles;
    // }
    // else {
    //   let funcU = handles["exec"];
    //   let funcD = handles["args"];
    //   base = createFunctionResult(funcU, funcD);
    // }
    // if (base && !base?.myVar || ((base && base[0]) && (!base[0]?.rndTitle || typeof base[0] !== "number")) || [base].length !== 0) {
    //   let dataOR = globalHandleGetData(base);
    //   return dataOR
    // }
    // else {
    //   return {payload: base}
    // }
    // autoP.functionRegistry.domainTree();
    // let kilo = contentCDN(dataOR.message.content, {payL: dataOR})
    // let fileParams = autoP.functionRegistry.paramsList[fileIndex];
    // exampleObjectType[randonWord] = [];
    // let bex = isOmit(exampleObjectType, "b");
    // bex = isOmit(bex, "c");
    // let scriptUrl = IsMapped.mapout(bex, [...fileParams?.parameters]);
    // let crfRes = createRandomFunction();
    // var functionObjectType = handleGetData();
    //misSt([Object.keys(crfRes),Object.values(crfRes)]);
    // var isExcludeValue = isOmit(functionObjectType["dtlsPro"], "c");
    // isExcludeValue = isOmit(isExcludeValue, "2");
    // isExcludeValue = isOmit(isExcludeValue, "3");
    // var teeValid1 = IsMapped.mapout({ 0: null }, [
    //   "isValidUrl",
    //   "http://www.google.com",
    // ])[0];
    // var forTruth = resolveParams(teeValid1);
    // var tee = isPropertyOf(teeValid1)
    // var kee = IsMapped.mapout(tee)
    // var noB = isValidKeys(forTruth);
    // console.log(typeof initForm);
    // if (e) {
    //   let tempObj = funcHandle(eQueryObject);
    //   handles =  tempObj.
    //   console.log("handles = " + handles, executed++);
    // }
    // else {
    //   handles = funcHandle();
    //   console.log("handles = " + handles, executed++);
    // }
    // let base
    // if (handles.funcUno.length === 0 && handles.funcDos.length === 0) {
    //   base = handles;
    // }
    // else {
    //   let funcU = handles.funcUno;
    //   let funcD = handles.funcDos;
    //   base = createFunctionResult(funcU, funcD);
    // }
    // if (base && !base?.myVar || ((base && base[0]) && (!base[0]?.rndTitle || typeof base[0] !== "number")) || [base].length !== 0) {
    //   let dataOR = globalHandleGetData(base);
    //   return dataOR
    // }
    // else {
    //   return {payload: base}
    // }
  
  // try {
  //   let proScript = testPro.getOwnPropertyNames(script.prototype);
  // }
  // catch (proError) {}
};
