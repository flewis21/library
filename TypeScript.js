class AutoParams {
  constructor() {
    console.log("Hello from AutoParams");
    this.executed = 0;

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
        return this.fileList;
      },
      getParamsList: function () {
        return this.paramsList;
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
        let gtAP = autoGlobe
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
              this.functionRegistry.gTree();
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

      // Gets a cache that is common to all users of the script
      sCache: CacheService.getScriptCache(),

      start: new Date(0.1 * 1000).getMilliseconds(),

      threeTime: 3 * 60 * 1000,

      twoTime: 2 * 60 * 1000,

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
    // this.functionRegistry.initialize();
    // this.functionRegistry.startProcessTimer();

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
        Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), 
      ];
      var len = numLen[Math.floor(Math.random() * numLen.length)];
      var rnd = Math.floor(Math.random() * 26);
      var res = Math.floor(rnd * len);
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
      let vidIA = autoGlobe;
      this.functionRegistry.vidTree();
      var arrVals = this.functionRegistry.getVideoList();
      var rndArrVals = [];
      while (rndArrVals.length !== arrVals.length) {
        rndArrVals.push(
          arrVals[Math.floor(Math.random() * Math.floor(arrVals.length)).valueOf()],
        );
      }
      return rndArrVals;
    };
    this.uniqueImageItemArray = function () {
      let imgIA = autoGlobe;
      this.functionRegistry.imgTree();
      var arrVals = this.functionRegistry.getImageList();
      var rndArrVals = [];
      while (rndArrVals.length !== arrVals.length) {
        rndArrVals.push(
          arrVals[Math.floor(Math.random() * Math.floor(arrVals.length)).valueOf()],
        );
      }
      return rndArrVals;
    };
    this.arrD = function () {
      let arrDAP = autoGlobe;
      var titleArray = this.functionRegistry.fileList;
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
      var titleArray = this.functionRegistry.fileList;
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
      console.log(
        formatTime(this.functionRegistry.time) +
          "\nBoilerplate TypeScript line 1398\nsearchString()",
      );
      var arrDRnd = this.functionRegistry.getFileList();
      var arrD = this.functionRegistry.getFileList();
      var newArr = [];
      var i = 0 || 0;
      var l = 6 || 1;
      // console.log(arrDRnd.sort((a, b) => a - b))
      // console.log(arrData.sort((a, b) => a - b))
      if (arrDRnd && typeof arrD === "undefined") {
        for (i, l; i < l; i++) {
          var elaspeTime = new Date() - this.functionRegistry.time;
          // console.log("that function: " + arguments.callee.caller.name + "\nthis function: " + arguments.callee.name + "\ntypeof arrDRnd: " +  typeof arrDRnd + "\nelaspeTime: " + elaspeTime)
          if (typeof arrDRnd !== "undefined" && typeof arrDRnd !== "string") {
            var myImportData = arrDRnd.sort((a, b) => a - b)[
              Math.floor(Math.random() * arrDRnd.length)
            ];
            newArr.push(myImportData);
            var elaspeTime = this.functionRegistry.time;
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
            var elaspeTime = this.functionRegistry.time;
            // console.log("that function: " + arguments.callee.caller.name + "\nthis function: " + arguments.callee.name + "\nmyImportData: " +  myImportData + "\nelaspeTime: " + elaspeTime)
          }
        }
      } else if (typeof arrD !== "undefined") {
        for (i, l; i < l; i++) {
          var myArrData = arrD.sort((a, b) => {
            let pA = autoGlobe.freqPriority.get(a);
            let pB = autoGlobe.freqPriority.get(b);
            return pA - pB;
          })[Math.floor(Math.random() * arrD.length)];
          newArr.push(myArrData);
          var elaspeTime = this.functionRegistry.time;
          // console.log("that function: " + arguments.callee.caller.name + "\nthis function: " + arguments.callee.name + "\nmyArrData: " + myArrData + "\nelaspeTime: " + elaspeTime)
        }
      }
      // console.log("boilerplate TypeScript: line 455");
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
          let pA = autoGlobe.freqPriority.get(a);
          let pB = autoGlobe.freqPriority.get(b);
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
    //   //   autoGlobe.searchString = substanceVegas(
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
      let resFAP = autoGlobe;
      const funcParamsInfo = this.functionRegistry
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
      let gmAP = autoGlobe;
      // this.functionRegistry.initialize();

      // Example call where missing parameters will be populated from your globals
      const args = this.resolveFunctionArgs("myGVFunction", {});
      if (args) {
        this.myGVFunction(...args);
      }
      this.myGVFunction("explicit e", 123); // Overrides globals for e and time
    }
  }
};
// let freqP = new AutoParams();

// class RandomArray extends AutoParams {
//   constructor() {
//     super();
//     let titleArray = projectP;
//     let arrData = Object.keys(globalThis);
//     let numLen = [
//       0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
//       21, 22, 23, 24, 25,
//     ]; // Assuming numVarRnd isn't global yet or needs handling
//     var rndNumLen = numLen[Math.floor(Math.random() * numLen.length)]; // Pick a random index

//     var targetLetter = arrData[rndNumLen]; // The letter we're looking for functions starting with

//     var freqArray = [];
//     // Correct way to filter or iterate and build freqArray
//     for (let i = 0; i < titleArray.fileList.length; i++) {
//       const funcName = titleArray.fileList[i];
//       if (funcName[0] && funcName[0].toLowerCase() === targetLetter) {
//         if (freqArray.indexOf(funcName) === -1) {
//           // Check if not already added
//           freqArray.push(funcName);
//         }
//       }
//     }
//     this.freqArray = freqArray
//   }
// }
// // let rndArrayP = new RandomArray();

// class ResolveParameters extends RandomArray {
//   constructor(func, someArgs) {
//     console.log("Hello from ResolveParameters");
//     super();
//     this.func = func;
//     this.someArgs = someArgs;
//     console.log(
//       "boilerplate TypeScript: line 1527\nResolveParams(func: " +
//         this.func +
//         ", someArgs: " +
//         this.someArgs +
//         ") ",
//     );
//     this.trueFunc = autoGlobe.trueVfalse(this.func);
//     this.trueSomeArgs = autoGlobe.trueVfalse(this.someArgs);
//     this.funcUno = this.trueFunc
//       ? decodeURIComponent(this.func)
//       : Array("rndCoin");
//     this.funcDos = this.trueSomeArgs ? decodeURIComponent(this.someArgs) : this.trueSomeArgs;
//     this.numVarRnd = Math.floor(Math.random() * this.funcUno.length);
//     this.arrDRnd = null;
//     if (this.funcUno || this.funcDos) {
//       this.argsX = [];
//       this.content = [];
//       this.arrUno = Array.isArray(this.func);
//       this.arrDos = autoGlobe.trueVfalse(this.someArgs);
//       if (this.arrUno && this.arrDos) {
//         this.keys = this.func.concat(this.someArgs);
//       } 
//       else {
//         if (this.arrUno && !this.arrDos) {
//           this.keys = this.func;
//         }
//         else {
//           if (!this.arrUno && this.arrDos && this.trueFunc) {
//             this.keys = [this.func].concat(this.someArgs);
//           } 
//           else {
//             if (!this.arrUno && !this.arrDos && this.trueFunc) {
//               this.keys = [this.func];
//             }
//             else {
//               if (!this.arrUno && !this.arrDos && !this.trueFunc) {
//                 this.keys = [this.funcUno[this.numVarRnd]];
//               }
//             }
//           }
//         }
//       }
//       this.keys.forEach((pro) => {
//         this.keyPro
//         if (typeof pro === "object" || Array.isArray(pro)) {
//           this.keyPro = pro;
//           console.log("this.keyPro = " + this.keyPro);
//         }
//         else {
//           this.keyPro = [pro];
//           console.log("this.[keyPro] = " + this.keyPro);
//         }
//         this.keyProParams;
//         this.realItem;
//         this.keysArrArr = autoGlobe.trueVfalse(Array.isArray(pro));
//         if (this.keysArrArr) {
//           this.funcLimit = [];
//           this.paramLimit = [];
//           pro.forEach((subParam, proIndex) => {
//             this.realItem = autoGlobe.trueVfalse(subParam);
//             if (this.realItem) {
//               this.keyProParams;
//               if (typeof subParam === "object" || Array.isArray(subParam)) {
//                 this.keyProParams = new RelatedFunctions(subParam[proIndex]);
//               }
//               else {
//                 this.keyProParams = new RelatedFunctions(subParam);
//               }
//               if (this.keyProParams.funFirst >= 0) {
//                 this.funcLimit.push(this.funcUno[this.keyProParams.funFirst]);
//               } 
//               else {
//                 if (typeof subParam === "object") {
//                   this.paramLimit.push(subParam);
//                 } 
//                 else {
//                   if (Array.isArray(subParam)) {
//                     this.paramLimit.push(subParam[proIndex]);
//                   }
//                   else {
//                     this.paramLimit.push(subParam);
//                   }
//                 }
//               }
//             }
//           });
//           if (this.funcLimit.length > 0) {
//             this.argsX.push(this.funcLimit);
//           }
//           if (this.paramLimit.length > 0) {
//             this.content.push(this.paramLimit);
//           }
//         } 
//         else {
//           this.realItem = autoGlobe.trueVfalse(pro);
//           if (this.realItem) {
//             for (var key in this.keyPro) {
//               this.keyProParams = null;
//               if (typeof pro === "object" || Array.isArray(pro)) {
//                 this.keyProParams = new RelatedFunctions(pro[key]);
//                 console.log("keyProParams = " + JSON.stringify(this.keyProParams.funFirst));
//               }
//               else {
//                 this.keyProParams = new RelatedFunctions(pro);
//                 console.log("keyProParams = " + JSON.stringify(this.keyProParams.funFirst));
//               }
//               if (this.keyProParams.funFirst >= 0) {
//                 this.argsX.push(this.funcUno[this.keyProParams.funFirst]);
//                 console.log("this.funcUno[this.keyProParams.funFirst] = " + this.funcUno[this.keyProParams.funFirst])
//               } else {
//                 if (typeof pro === "object" || Array.isArray(pro)) {
//                   this.content.push(pro[key]);
//                 }
//                 else {
//                   this.content.push(pro);
//                 }
//               }
//             }
//           }
//         }
//       });
//       if (this.argsX && this.argsX.length > 0) {
//         this.allErrors = {};
//         this.allResolutions = {};
//         this.funcString = globalThis[this.funcUno[this.numVarRnd]]?.toString();
//         this.fParams = this.funcString
//           ?.substring(this.funcString?.indexOf("(") + 1, this.funcString?.indexOf(")"))
//           ?.split(",")
//           ?.map((param) => param?.trim())
//           ?.filter((param) => param !== "");; //gsFParams();
//         this.truDos = autoGlobe.trueVfalse(this.fParams)
//         this.resCount = 0;
//         this.argsX.forEach((result, argsXIndex) => {
//           console.log("argsX result " + this.resCount + ": " + result);
//           this.truUno = autoGlobe.trueVfalse(result);
//           this.args = {};
//           this.resolvedArgs = [];
//           this.missingParams = [];
//           this.contentLimit = this.content[argsXIndex];
//           this.searchResult = this.fParams 
//           //this.fParams.find((rndS) => {
//             // return rndS.name === result;
//           // });
//           this.orderedContent = [];
//           if (
//             this.searchResult &&
//             this.searchResult !== "undefined" &&
//             this.searchResult !== null &&
//             this.searchResult.parameters
//           ) {
//             this.declaredParams = this.searchResult.parameters;
//             if (this.contentLimit?.length > 0) {
//               console.log(
//                 "Current content: " +
//                   this.contentLimit +
//                   "\nDeclared parameters: " +
//                   this.declaredParams,
//               );
//             }
//             this.contentMap = {};
//             this.realItem;
//             this.declaredParams.forEach((declaredParam, declaredParamIndex) => {
//               this.declaredParamArrArr = autoGlobe.trueVfalse(Array.isArray(declaredParam));
//               if (this.declaredParamArrArr) {
//                 this.paramLimit = 0;
//                 declaredParam.forEach((subParam, subParamIndex) => {
//                   this.contentLimit.forEach((item, currentDeclaredIndex) => {
//                     this.realItem = autoGlobe.trueVfalse(subItem);
//                     if (this.realItem) {
//                       this.currentDeclared = this.contentMap[declaredParam];
//                       this.currentSub = subItem;
//                       this.currentDeclared = this.currentSub;
//                       this.paramLimit++;
//                       if (this.contentMap.length === this.declaredParams.length) {
//                         return;
//                       }
//                     }
//                   });
//                 });
//               } 
//               else {
//                 if (Array.isArray(this.contentLimit)) {
//                   this.contentLimit.forEach((item, contentLimitIndex) => {
//                     this.contentLimitArrArr = autoGlobe.trueVfalse(Array.isArray(item));
//                     if (this.contentLimitArrArr) {
//                       item.forEach((subItem, mapItemIndex) => {
//                         this.realItem = autoGlobe.trueVfalse(subItem);
//                         if (this.realItem) {
//                           this.paramDKey = this.declaredParams[mapItemIndex];
//                           if (!this.contentMap[paramDKey]) {
//                             this.contentMap[this.paramDKey] = subItem;
//                           }
//                           // if (this.contentMap[this.paramDKey] === subItem) {
//                           //   return;
//                           // }
//                         }
//                       });
//                     } 
//                     else {
//                       this.realItem = autoGlobe.trueVfalse(item);
//                       if (this.realItem) {
//                         this.paramDKey = this.declaredParams[contentLimitIndex];
//                         if (!this.contentMap[this.paramDKey]) {
//                           this.contentMap[this.paramDKey] = item;
//                         }
//                         // if (this.contentMap[this.paramDKey] === item) {
//                         //   return;
//                         // }
//                       }
//                     }
//                   });
//                 } 
//                 else {
//                   this.contentArrArr = autoGlobe.trueVfalse(Array.isArray(this.contentLimit));
//                   if (this.contentArrArr) {
//                   } 
//                   else {
//                     this.realItem = autoGlobe.trueVfalse(this.contentLimit);
//                     if (this.realItem) {
//                       for (var key in this.declaredParams) {
//                         this.paramDKey = this.declaredParams[key];
//                         if (!this.contentMap[paramDKey]) {
//                           this.contentMap[this.paramDKey] = this.contentLimit;
//                         }
//                         // if (this.contentMap[paramDKey] === this.contentLimit) {
//                         //   return;
//                         // }
//                       }
//                     }
//                   }
//                 }
//               }
//             });
//             this.declaredParams.forEach((paramName) => {
//               if (this.contentMap.hasOwnProperty(paramName)) {
//                 this.orderedContent.push(this.contentMap[paramName]);
//               } else {
//                 this.orderedContent.push(null);
//               }
//             });
//           }
//           if (this.orderedContent.length > 0) {
//             if (this.missingParams.length === 0) {
//               // orderedContent = resolvedArgs;
//               this.allResolutions[result] = this.resolvedArgs;
//               // console.error(allErrors[result]);
//               console.log(this.allResolutions[result]);
//             } 
//             else {
//               this.allErrors[result] =
//                 `Error: Missing parameters for ${result}: ${this.missingParams.join(", ")}`;
//               console.error(this.allErrors[result]);
//               console.log(this.allErrors[result]);
//             }
//           }
//           if (Object.keys(this.args).length > 0) {
//             console.log("Resolved arguments:", this.args);
//           }
//           if (this.resolvedArgs.length > 0) {
//             console.log("Resolved parameters Array:", this.resolvedArgs);
//           }
//           this.resCount++;
//           // this.result = this.resolvedArgs
//         })
//         let errorKeys = Object.keys(this.allErrors);
//         // if (errorKeys.length > 0) {
//         //   return allErrors;
//         // }
//       }
//       else {
//         console.log("No matching function found for:", this.func);
//       }
//     }
//   }
//   resParams() {
//   }
// };
// // let autoP = new ResolveParameters();

// class Presidential extends ResolveParameters {
//   constructor() {
//     console.log("Hello from Presidential");
//     super();
//   }
//   spirit() {
//     this.timeLeft = formatTime(autoGlobe.functionRegistry.timeLeftToExecute);
//     console.log(`You have ${this.timeLeft} left to convert. Tick Tock, time is wasting`);
//   }
// };

// class IsTypeScript extends Presidential {
//   constructor(typePassedIn) {
//     console.log("Hello from IsTypeScript");
//     super(typePassedIn);
//     this.typePassedIn = typePassedIn
//   }
//   passedType() {
//     var mapTypes = {};
//     for (var key in this.typePassedIn) {
//       mapTypes[key] = this.typePassedIn[key];
//     }
//     return mapTypes;
//   };
//   res() {
//     return this.mTypes()
//   }
// };

// class IsPropertyOf extends IsTypeScript {
//   constructor (t) {
//     console.log("Hello from IsPropertyOf");
//     super(t);
//     this.t = t;
//   }
//   propIt () {
//     let propertyList = IsMapped.mapout(t);
//     return propertyList;
//   };
//   res() {
//     return this.propList;
//   }
// };

// class IsKeyOf extends IsPropertyOf {
//   constructor (t) {
//     console.log("Hello from IsKeyOf");
//     super(t);
//     this.t = t;
//   }
//   keyIt () {
//     var keyList = {}; //Object.keys(t);
//     for (var key in this.t) {
//       keyList[key] = key;
//     }
//     return keyList;
//   };
//   res() {
//     return this.keyOf;
//   }
// };

// class Script{};
// // Script.prototype. = function () {
// // };

class ProjectFUnctionNames {
  constructor() {
    this.fileList = [];
    this.paramsList = [];
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

// class IsValidKeys {
//   constructor(v) {
//     this.v = v
//   }
//   keysValid() {
//     let ivkAuto = autoGlobe;
//     var isExcludeValue = ivkAuto.omitIt(this.v, "1");
//     isExcludeValue = ivkAuto.omitIt(isExcludeValue.omitIt(), "2");
//     isExcludeValue = ivkAuto.omitIt(isExcludeValue.omitIt(), "3");
//     var isValueOfTypePassedIn = IsValidDoubleObject.validObject(isExcludeValue.omitIt());
//     if (isValueOfTypePassedIn) {
//       var isInferredTruthy = ivkAuto.trueVfalse(isValueOfTypePassedIn.validObject());
//       if (isInferredTruthy) {
//         return isValueOfTypePassedIn.validObject();
//       }
//     }
//   }
//   res() {
//     return this.vLidKey
//   }
// };


class IsTruthy extends AutoParams {
  constructor (t) {
    console.log("Hello from IsTruthy");
    super();
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

// class IsValidDoubleObject extends IsTruthy {
//   constructor(t) {
//     console.log("Hello from IsValidDoubleObject");
//     super(t);
//     this.t = t
//     for (let key in this.t) {
//       let tempV = this.t[key];
//       for (let tempVKey in tempV) {
//         let vKeyDouble = tempV[tempVKey];
//         let tempVDouble = [tempV[tempVKey]].sort((a,b) => {
//           let obj1 = a;
//           let obj2 = b;
//           if (obj1 === obj2) {
//             return
//           }
//         })
//       }
//       let tempDouble = [this.t[key]].sort((a,b) => {
//         let obj1 = a;
//         let obj2 = b;
//         if (obj1 === obj2) {
//           return
//         }
//       })
//       if (tempDouble) {
//         this.tempDouble = tempDouble
//       }
//     }
//     if (this.tempDouble && typeof this.tempDouble[0] !== typeof this.tempDouble[1]) {
//       this.tempDouble = this.t
//     }
//   }
//   static validObject(t) {
//     // var validKeys = IsMapped.mapout(t);
//     if (t) {
//       var validList = Object.values(t);
//       class Valid{
//         constructor(vList) {
//           this.vList = vList
//         }
//         static validateList(vList) {
//           for (let key in vList) {
//             let tempV = vList[key];
//             for (let tempVKey in tempV) {
//               let vKeyDouble = tempV[tempVKey];
//               let tempVDouble = [tempV[tempVKey]].sort((a,b) => {
//                 let obj1 = a;
//                 let obj2 = b;
//                 if (obj1 === obj2) {
//                   return
//                 }
//               })
//             }
//             let tempDouble = [vList[key]].sort((a,b) => {
//               let obj1 = a;
//               let obj2 = b;
//               if (obj1 === obj2) {
//                 return
//               }
//             })
//             if (tempDouble) {
//               return tempDouble
//             }
//           }
//           // let validObj1 = validList[0];
//           // let validObj2 = validList[1];
//         }
//       }
//       let myValiObj = Valid.validateList(t);
//       let tempValid = myValiObj
//       if (typeof tempValid[0] === typeof tempValid[1]) {
//         return tempValid
//       }
//       else {
//         return t
//       }
//     }
//   };
//   static objRes(t) {
//     if (t) {
//       let func = Object?.keys(t);
//       let args = Object?.values(t);
//     }
//     return doGet(t);
//   }
//   res() {
//     return this.t
//   }
// };

class IsMapped extends IsTruthy {
  constructor (t, v) {
    console.log("Hello from IsMapped");
    super(t);
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

// class IsExclude extends IsMapped {
//   constructor (t, k) {
//     console.log("Hello from IsExclude");
//     super(t, k);
//     this.t = t;
//     this.k = k;
//   }
//   excludeIt () {
//     var keyList = Object.keys(this.t);
//     var excludeList = [];
//     Array.isArray(keyList)
//       ? keyList.forEach((e, i) => {
//           if (!e.includes(this.k)) {
//             excludeList.push(e);
//           }
//         })
//       : Array(keyList).forEach((e, i) => {
//           if (!e.includes(this.k)) {
//             excludeList.push(e);
//           }
//         });
//     return excludeList;
//   };
//   res() {
//     return this.exList;
//   }
// };

// class IsPick extends IsExclude {
//   constructor (t, k) {
//     console.log("Hello from IsPick");
//     super(t, k);
//     this.t = t;
//     this.k = k;
//   }
//   pickIt () {
//     var excludeList = this.excludeIt();
//     var valuesList = {};
//     for (var key in this.t) {
//       if (excludeList.includes(key)) {
//         valuesList[key] = this.t[key];
//       }
//     }
//     return valuesList;
//   };
//   res() {
//     return this.pipList;
//   }
// };

// class IsOmit extends IsPick {
//   constructor(t, k) {
//     console.log("Hello from IsOmit");
//     super(t, k);
//     this.t = t;
//     this.k = k;
//   }
//   omitIt() {
//     let valuesList = this.pickIt();
//     return valuesList;
//   };
//   res() {
//     return this.omList;
//   }
// };

class GetDomains extends IsMapped {
  constructor() {
    super();
    this.functionRegistry.domainTree();
    this.domainSheetVals = this.functionRegistry.getDomainList();
    this.domainData = [];
    this.inValsKeys = Object.keys(this.domainSheetVals);
    this.inValsKeys.forEach((key) => {
      this.domainObj = this.domainSheetVals[key];
      this.domainTLD = this.domainObj["Domain"];
      this.domainData.push(this.domainTLD);
    });
  };
}

class RawFuncResult {
  constructor(funcUno, funcDos) {
    // super();
    this.funcUno = funcUno || "rndCoin";
    this.funcDos = funcDos || "";
    // this.globalThis = globalThis
    // console.log(this.globalThis)
    this.rawFuncResult = null;
    console.log("truUno and truDos\n" + [this.truUno, this.truDos]);

    // --- BEGIN Refactored payLoad processing ---

    try {
      this.objVal = this.truDos? this.funcDos?.toString(): false;
      console.log("objVal\n" + [this.objVal]);
      this.truVal = autoGlobe.trueVfalse(this.objVal);
      console.log("truVal\n" + [this.truVal]);
      this.rawUrlResult = null;
      this.isObjValUrl = null;
      if (this.truVal && this.objVal?.indexOf(",") === -1) {
        this.isObjValUrl = new ValidUrlResult(this.objVal);
        if (Array.isArray(this.isObjValUrl?.matches)) {
          this.rawUrlResult = autoGlobe.trueVfalse(this.isObjValUrl?.matches[0]);
        }
        else {
          this.rawUrlResult = autoGlobe.trueVfalse(this.isObjValUrl?.matches);
        }
        console.log("rawUrlResult = " + this.rawUrlResult, autoGlobe.executed++);
      }
      // executed++
      if (!this.rawUrlResult) {
        this.parsedFuncArgs = [];
        this.keyObject = null;
        if (typeof this.funcDos === "object" && this.funcDos !== null) {
          this.keyObject = Object.keys(this.funcDos);
          if (this.keyObject && this.keyObject.length > 0) {
            console.log("This execution is initiating JSON Parse on a(n) " , typeof this.funcDos);
            try {
              if (!this.objVal && !Array.isArray(this.funcDos)) {
                try {
                  this.parsedFuncArgs = JSON.parse(this.funcDos);
                }
                catch (error) {
                  console.log("But, it is failing. \n", error.stack);
                }
              } 
              else {
                if (this.objVal && this.funcDos.length > 0) {
                  this.parsedFuncArgs = this.funcDos; // Treat as a single string argument if not valid JSON
                }
              }
            } 
            catch (jsonError) {
              console.log("But, it is failing. \n" + jsonError.stack);
              if (this.objVal && this.funcDos.length > 0) {
                this.parsedFuncArgs = this.funcDos; // Treat as a single string argument if not valid JSON
              }
            }
          }
        } 
        else {
          if (typeof this.funcDos !== "object" && this.truDos) {
            this.parsedFuncArgs = [this.funcDos]; // Treat as a single string argument if not valid JSON
          }
          else {
            this.parsedFuncArgs = this.funcDos; // Treat as a single string argument if not valid JSON
          }
        }
        console.log("Parsed funtion and arguments = " + [this.funcUno, this.parsedFuncArgs]);
        if ((this.funcUno && typeof globalThis[this.funcUno] === "function " && !this.funcDos) || (this.funcUno && typeof globalThis[this.funcUno] !== "function" && !this.funcDos)) {
          console.log("This execution is initiating without funcDos. funcUno is  " , this.funcUno);
          try {
            this.funcAFunc = crmT(this.funcUno);
            if (!this.funcAFunc === -1) {
              console.log(this.funcUno + "'s function index is = " + this.funcAFunc, autoGlobe.executed++);
              this.rawFuncResult = globalThis[this.funcUno]();
            }
          } 
          catch (error) {
            console.log("But, it is failing.");
          }
          console.log("rawFuncResult = " + this.rawFuncResult, autoGlobe.executed++);
        } 
        else {
          if (this.funcUno && typeof globalThis[this.funcUno] !== "function" && this.funcDos) { 
            console.log("This execution is initiating with funcDos. funcDos is  " , this.funcDos);
            try {
              this.rawFuncResult = new MisCreator(this.funcUno.concat(this.parsedFuncArgs)).argsObject;
            } 
            catch (error) {
              console.log("But, it is failing. " + this.funcUno.concat(this.parsedFuncArgs).join(""), error.stack);
            }
            console.log("rawFuncResult = " + this.rawFuncResult, autoGlobe.executed++);
          } 
          else { 
            if (!this.funcUno && this.funcDos) {
              console.log("This execution is initiating without funcUno.", !this.funcUno);
              if (typeof globalThis[this.funcDos] === "function") {
                try {
                  this.rawFuncResult = globalThis[this.parsedFuncArgs]();
                } 
                catch (error) {
                  console.log("But, it is failing.");
                }
              }
              else {
                this.rawFuncResult = new MisCreator(this.parsedFuncArgs).argsObject;
              }
              console.log("rawFuncResult = " + this.rawFuncResult, autoGlobe.executed++);
            } 
            else {
              console.log(
                "This execution is initiating with all parameters \n",
                  [this.funcUno, this.parsedFuncArgs]
              );
              try {
                this.rawFuncResult = globalThis[this.funcUno].apply(this, this.parsedFuncArgs);
              } 
              catch (error) {
                console.log("But, it is failing.");
                // rawFuncResult = new MisCreator([funcUno, ...parsedFuncArgs]).argsObject;
              }
              console.log("rawFuncResult = " + this.rawFuncResult, autoGlobe.executed++);
            }
          }
        }
      }  
      else {
        this.rawFuncResult = this.isObjValUrl?.url;
        console.log("Happens everytime createFunctionResult returns the form url as the objects value", this.rawFuncResult);
      }
    }
    catch (error) {
      console.error(`Error during payload processing:`, error);
      this.appL = `Critical Error: ${error.stack}`;
    }
  }
}


class MisCreator {
  constructor(text, maxRetries = 3) {
    // super(text);
    this.text = text || [this.funcUno, this.parsedFuncArgs];
    this.maxRetries = maxRetries;
    console.log(
      "boilerplate Help: line 196\nMisCreator(text: " +
        this.text +
        ", maxRetries: " +
        this.maxRetries +
        ")\n ",
    );
    if (this.text?.indexOf(",") === -1) {
      this.validUrl = new ValidUrlResult(this.text).validatedResult;
      autoGlobe.executed++;
    }
    if (!this.validUrl?.hostname) {
      this.supFunc = new MisStCreator(this.text).argsObject;
      autoGlobe.executed++;
      this.truSup = autoGlobe.trueVfalse(this.supFunc.func);
      autoGlobe.executed++;
      if (this.truSup) {
        Logger.log("function - " + this.supFunc.func);
      }
      while (!this.supFunc.func) {
        this.truSup = autoGlobe.trueVfalse(this.supFunc.func);
        autoGlobe.executed++;
        if (this.truSup) {
          Logger.log("function - " + this.supFunc.func);
        }
        this.funcSup = autoGlobe.functionRegistry.fileList;
        autoGlobe.executed++;
        this.rndSup =
          this.funcSup[Math.floor(Math.random() * Math.floor(this.funcSup.length))];
        this.supFunc = new MisStCreator(this.rndSup).argsObject;
        autoGlobe.executed++;
      }
      if (this.supFunc && typeof this.supFunc === "object") {
        this.isError = false;
        for (var key in this.supFunc) {
          if (
            typeof this.supFunc[key] === "string" &&
            this.supFunc[key].startsWith("Error:")
          ) {
            this.isError = true;
            break;
          }
        }
        if (this.isError) {
          Logger.log("Error(s) from misSt:", this.supFunc);
          console.error("Error(s) from misSt:", this.supFunc);
          this.earlyReturn = "misSt returned errors: " + JSON.stringify(this.supFunc);
          this.errorthis.url = this.text;
          this.form =
            new DriveFiles(String(this.text).toUpperCase()).filedMain ||
            formMaker(
              [this.text].join("").toUpperCase(),
              "misForms",
              autoGlobe.functionRegistry.time,
            );
          autoGlobe.executed++;
          if (typeof this.form === "object") {
            // fileManager(coData.rndTitle, "this.forms")
            Logger.log(
              `Created new form: ${this.form.getTitle()} - ${this.form.getEditUrl()}`,
            );

            // --- Set Basic this.form Properties ---

            // Randomly decide to collect email or not
            this.form.setCollectEmail(Math.random() < 0.5);

            // Randomly decide to show progress bar for multi-section this.forms
            this.runChance = Math.random();
            if (this.runChance < 0.7) {
              this.form.setProgressBar(true);
            }

            // --- Add Sections and Questions ---

            this.form.addSectionHeaderItem().setTitle(this.earlyReturn);
            this.runChance = Math.random();
            if (this.runChance < 0.7) {
              this.form.addTextItem().setTitle("Your Name").setRequired(true);
            }
            this.runChance = Math.random();
            if (this.runChance < 0.7) {
              this.form.addDateItem().setTitle("Birth Date").setRequired(true);
            }
            this.runChance = Math.random();
            if (this.runChance < 0.7) {
              this.form
                .addParagraphtTextItem()
                .setTitle("Your Message")
                .setRequired(true);
            }
            this.form.setConfirmationMessage("Thanks for your feedback !!");
            this.url = seoPastTime(this.text) || this.form.getPublishedUrl() || this.form;
          }
          console.log("Final app:", this.earlyReturn);
          this.argsObject = { index: url, app: this.earlyReturn, link: this.errorUrl };
        }
      }
      this.fx = this.supFunc?.func;
      this.payLoad = this.supFunc?.args;
      console.log("The 'e.parameter[args]' for url links, " + this.payLoad);
      console.log(
        "The 'e.parameter[args]' for url links after encoding, " +
          encodeURIComponent(this.payLoad),
      );
      autoGlobe.executed++;
      // if (this.supFunc.func) {
      // if (this.supFunc.args) {
      //     this.html =
      //       HtmlService.createTemplate(`<!DOCTYPE html><html lang="en"><body><div><label><nav class="center"><a id="caller" href="<?= getUrl(ScriptApp) ?>?func=<?= nav ?>&args=<?= action ?>" target="_top">update<label id="spLab"><strong><?!= seoCapital(HtmlService.createTemplate(decodeURIComponent(encodeURIComponent(url))).evaluate().getContent()) ?></strong></label><div id="contentPlayer"><iframe class="z-depth-5 card-panel deep-purple darken-1 scale-transition scale-out scale-in btn-large" src="<?= HtmlService.createTemplate(decodeURIComponent(encodeURIComponent(url))).evaluate().getContent() ?>" id="eventRes01" class="menu-img grey darken-4 z-depth-5" style="width: 100%; height: "100%"; border: none;" allow="thislay" allow="encrypted-media" title="Dontime Life Website" frameborder="0" allowfullscreen ></iframe></div></a></nav></label></div><br /><input type="hidden" value="<?= getScriptUrl() ?>" id="breakUrl" /></body></html><script>var appUrl
      // = document.getElementById("breakUrl");</script>`);
      //     this.html.this.url =
      //       getScriptUrl().toString() + "?func=" + this.fx + "&args=" + this.payLoad;
      // this.html.nav = this.fx;
      // this.html.action = this.payLoad;
      //     return this.html.evaluate().getContent();
      // } else if (!this.supFunc.args) {
      // const this.fx = this.supFunc.func;
      //     this.html =
      //       HtmlService.createTemplate(`<!DOCTYPE html><html lang="en"><body><div><label><nav class="center"><a id="caller" href="<?= getUrl(ScriptApp) ?>?func=<?= nav ?>" target="_top">update<label id="spLab"><strong><?!= seoCapital(HtmlService.createTemplate(decodeURIComponent(encodeURIComponent(url))).evaluate().getContent()) ?></strong></label><div id="contentPlayer"><iframe class="z-depth-5 card-panel deep-purple darken-1 scale-transition scale-out scale-in btn-large" src="<?= HtmlService.createTemplate(decodeURIComponent(encodeURIComponent(url))).evaluate().getContent() ?>" id="eventRes01" class="menu-img grey darken-4 z-depth-5" style="width: 100%; height: 100%; border: none;" allow="thislay" allow="encrypted-media" title="Dontime Life Website" frameborder="0" allowfullscreen ></iframe></div></a></nav></label></div><br /><input type="hidden" value="<?= getScriptUrl() ?>" id="breakUrl" /></body></html><script>var appUrl
      // = document.getElementById("breakUrl");</script>`);
      //     this.html.this.url = getScriptUrl().toString() + "?func=" + this.fx;
      // this.html.nav = this.fx;
      //     return this.html.evaluate().getContent();
      // }

      this.htmlContent = `<!DOCTYPE html><html lang="en"><body><div><label><nav class="center"><a id="caller" href="<?= getUrl(ScriptApp) ?>?func=<?= nav ?>" target="_top">update<label id="spLab"><strong><?!= seoCapital(HtmlService.createTemplate(decodeURIComponent(encodeURIComponent(formUrl))).evaluate().getContent()) ?></strong></label><div id="contentPlayer"><iframe class="z-depth-5 card-panel deep-purple darken-1 scale-transition scale-out scale-in btn-large" src="<?= HtmlService.createTemplate(decodeURIComponent(encodeURIComponent(formUrl))).evaluate().getContent() ?>" id="eventRes01" class="menu-img grey darken-4 z-depth-5" style="width: 100%; height: 100%; border: none;" allow="thislay" allow="encrypted-media" title="Dontime Life Website" frameborder="0" allowfullscreen ></iframe></div></a></nav></label></div><br /><input type="hidden" value="<?= getScriptUrl() ?>" id="breakUrl" /></body></html><script>var appUrl
      = document.getElementById("breakUrl");</script>`;
      this.html = HtmlService.createTemplate(this.htmlContent);
      this.html.formurl =
        getScriptUrl() + "?func=" + this.fx + (this.payLoad ? "&args=" + this.payLoad : "");
      this.html.nav = this.fx;
      this.html.action = this.payLoad;
      this.supUrl =
        getScriptUrl().toString() +
        "?func=" +
        this.fx +
        "&args=" +
        (this.payLoad ? encodeURIComponent(this.payLoad) : "");
      autoGlobe.executed++;
      // this.form = formMaker();
      this.formattedPayLoad = "";
      if (this.payLoad && typeof this.payLoad === "object") {
        if (Array.isArray(this.payLoad)) {
          this.formattedPayLoad = this.payLoad
            .map((item) => {
              if (typeof item === "string") {
                return item;
              }
              return JSON.stringify(item);
            })
            .join(", ");
        } else {
          this.values = Object.values(this.payLoad)
            .map((value) => {
              if (typeof value === "string") {
                return value;
              }
              return JSON.stringify(value);
            })
            .join(", ");
          this.formattedPayLoad = this.values;
        }
      }
      this.payT = this.fx;
      if (this.formattedPayload) {
        this.payT += "(" + this.formattedPayload + ")";
      } else if (this.payLoad) {
        this.payT += "(" + this.payLoad + ")";
      }
      this.payT = this.payT.toUpperCase();
      try {
        this.form = new DriveFiles([this.formattedPayload][0] || this.payLoad).filedMain;
        this.webAppObj = {
          funcStr: globalThis[this.supFunc.func]?.toString(),
          url: this.form,
        };
      } catch (balance) {
        this.form =
          new DriveFiles([this.formattedPayload][0] || this.payLoad).filedMain ||
          formMaker(this.payT, "misForms", autoGlobe.functionRegistry.time);
        autoGlobe.executed++;

        if (typeof this.form === "object") {
          // fileManager(coData.rndTitle, "Forms")
          Logger.log(
            `Created new form: ${this.form.getTitle()} - ${this.form.getEditUrl()}`,
          );

          // --- Set Basic this.form Properties ---

          // Randomly decide to collect email or not
          this.form.setCollectEmail(Math.random() < 0.5);

          // Randomly decide to show progress bar for multi-section this.forms
          this.runChance = Math.random();
          if (this.runChance < 0.7) {
            this.form.setProgressBar(true);
          }

          // --- Add Sections and Questions ---

          if (this.fx) {
            this.form
              .addSectionHeaderItem()
              .setTitle(globalThis[this.supFunc.func].toString());
          } else {
            this.form.addSectionHeaderItem().setTitle("No Function Found");
          }
          if (this.supFunc && this.supFunc.res) {
            if (typeof this.supFunc.res === "object") {
              this.form.addSectionHeaderItem().setTitle(JSON.stringify(this.supFunc.res));
            } else {
              this.form.addSectionHeaderItem().setTitle(this.supFunc.res);
            }
          }
          this.runChance = Math.random();
          if (this.runChance < 0.7) {
            this.form.addTextItem().setTitle("Your Name").setRequired(true);
          }
          this.runChance = Math.random();
          if (this.runChance < 0.7) {
            this.form.addDateItem().setTitle("Birth Date").setRequired(true);
          }
          this.runChance = Math.random();
          if (this.runChance < 0.7) {
            this.form
              .addParagraphtTextItem()
              .setTitle("Your Message")
              .setRequired(true);
          }
          this.form.setConfirmationMessage("Thanks for your feedback !!");
        }
        this.webAppObj = {
          funcStr: globalThis[this.supFunc.func]?.toString(),
          url: this.form.getPublishedUrl(),
        };
      }
      console.log("Final app:", this.supFunc.res);
      this.argsObject = { index: this.webAppObj, app: this.supFunc.res, link: this.supUrl };
    } else {
      this.response;
      this.location;
      this.htmlData;
      this.supUrl;
      this.retries = 0;
      this.delay = 1000;
      try {
        // if (this.supFunc) {
        //   this.response = UrlFetchApp.fetch(this.supFunc.args, {
        //     followRedirects: false, // Prevent automatic redirects
        //   });
        // } else {
        //   this.response = UrlFetchApp.fetch(this.validUrl?.hostname, {
        //     followRedirects: false, // Prevent automatic redirects
        //   });
        // }
        this.response = UrlFetchApp.fetch(
          this.supFunc && this.supFunc.args ? this.supFunc.args : this.validUrl?.hostname,
          {
            followRedirects: false, // Prevent automatic redirects
            muteHttpExceptions: true,
          },
        );
      } catch (e) {
        Logger.log("Error fetching URL: ", e.toString());
        console.error("Error fetching URL: ", e.toString());
        this.htmlData = "Error fetching URL: " + e.toString();
        this.supUrl = this.validUrl?.hostname;
        try {
          this.form = new DriveFiles(String(this.text).toUpperCase()).filedMain;
          this.responseObj = {
            dataStr: seoPastTime(this.validUrl?.hostname),
            url: this.form,
          };
        } catch (balance) {
          // var this.form = formMaker();
          this.form =
            new DriveFiles(String(this.text).toUpperCase()).filedMain ||
            formMaker(
              [JSON.stringify(this.text)].join("").toUpperCase(),
              "misForms",
              autoGlobe.functionRegistry.time,
            );
          autoGlobe.executed++;

          if (typeof this.form === "object") {
            // fileManager(coData.rndTitle, "this.forms")
            Logger.log(
              `Created new form: ${this.form.getTitle()} - ${this.form.getEditUrl()}`,
            );

            // --- Set Basic this.form Properties ---

            // Randomly decide to collect email or not
            this.form.setCollectEmail(Math.random() < 0.5);

            // Randomly decide to show progress bar for multi-section this.forms
            this.runChance = Math.random();
            if (this.runChance < 0.7) {
              this.form.setProgressBar(true);
            }

            // --- Add Sections and Questions ---

            this.form.addSectionHeaderItem().setTitle(this.htmlData);
            this.runChance = Math.random();
            if (this.runChance < 0.7) {
              this.form.addTextItem().setTitle("Industry").setRequired(true);
            }
            this.runChance = Math.random();
            if (this.runChance < 0.7) {
              this.form.addTextItem().setTitle("Sector").setRequired(true);
            }
            this.form
              .addParagraphtTextItem()
              .setTitle("Industry/Market Corrections")
              .setRequired(false);
            this.form.addParagraphtTextItem().setTitle("News").setRequired(false);
            this.form
              .addParagraphtTextItem()
              .setTitle("Economic/Business Cycles")
              .setRequired(false);
            this.runChance = Math.random();
            if (this.runChance < 0.7) {
              this.form.addTextItem().setTitle("Stock Price").setRequired(true);
            }
            this.runChance = Math.random();
            if (this.runChance < 0.7) {
              this.form.addTextItem().setTitle("Outstanding Shares").setRequired(true);
            }
            this.runChance = Math.random();
            if (this.runChance < 0.7) {
              this.form.addTextItem().setTitle("Quarterly Earnings").setRequired(true);
            }
            this.form
              .addTextItem()
              .setTitle("Annualized Net Income")
              .setRequired(false);
            this.form.addTextItem().setTitle("Total Equity").setRequired(false);
            this.form.addTextItem().setTitle("Retained Earnings").setRequired(false);
            this.runChance = Math.random();
            if (this.runChance < 0.7) {
              this.form
                .addTextItem()
                .setTitle("Cash & Marketable Securities")
                .setRequired(true);
            }
            this.runChance = Math.random();
            if (this.runChance < 0.7) {
              this.form
                .addTextItem()
                .setTitle("Accounts Receivable")
                .setRequired(true);
            }
            this.runChance = Math.random();
            if (this.runChance < 0.7) {
              this.form.addTextItem().setTitle("Inventories").setRequired(true);
            }
            this.form
              .addTextItem()
              .setTitle("Long-term Investments")
              .setRequired(false);
            this.form.addTextItem().setTitle("Net PP&E").setRequired(false);
            this.runChance = Math.random();
            if (this.runChance < 0.7) {
              this.form
                .addTextItem()
                .setTitle("Current Financial Liabilities")
                .setRequired(true);
            }
            this.form
              .addTextItem()
              .setTitle("Long-term Interest-bearing Debts")
              .setRequired(false);
            this.form
              .addTextItem()
              .setTitle("Current Year Total Earnings")
              .setRequired(false);
            this.form
              .addTextItem()
              .setTitle("Base Year Total Earnings")
              .setRequired(false);
            this.runChance = Math.random();
            if (this.runChance < 0.7) {
              this.form.addTextItem().setTitle("Your Name").setRequired(true);
            }
            this.runChance = Math.random();
            if (this.runChance < 0.7) {
              this.form.addDateItem().setTitle("Birth Date").setRequired(true);
            }
            this.runChance = Math.random();
            if (this.runChance < 0.7) {
              this.form
                .addParagraphtTextItem()
                .setTitle("Your Message")
                .setRequired(true);
            }
            this.form.setConfirmationMessage("Thanks for your feedback !!");
            this.responseObj = {
              dataStr: seoPastTime(this.validUrl?.hostname),
              url: this.form.getPublishedUrl(),
            };
            autoGlobe.executed++;
          }
        }
      }
      try {
        if (this.response) {
          this.res = this.response.getResponseCode();
          if (this.res) {
            if (this.res === 429) {
              this.retries++;
              this.delay += 2;
              Utilities.sleep(this.delay + Math.random() * 500);
              Logger.log(`Rate limit hit, retrying in ${this.delay} ms`);
              while (this.retries < this.maxRetries) {
                try {
                  this.response = UrlFetchApp.fetch(
                    this.supFunc && this.supFunc.args ? this.supFunc.args : this.validUrl?.hostname,
                    {
                      followRedirects: false, // Prevent automatic redirects
                      muteHttpExceptions: true,
                    },
                  );
                } catch (error) {
                  Logger.log("Error fetching data: " + error);
                  this.retries++;
                  this.delay += 2;
                  Utilities.sleep(this.delay);
                }
              }
              Logger.log("Max retries reached, failed to fetch data.");
            } else {
              if (this.res >= 300 && this.res < 400) {
                // Redirect occurred
                this.location = String(this.response.getHeaders().Location).indexOf(":") > 1? String(this.response.getHeaders().Location).substring(0,String(this.response.getHeaders().Location).length - 5):String(this.response.getHeaders().Location);
                console.log("event; result from response getHeaders: ", this.location);
                this.htmlData = UrlFetchApp.fetch(this.location, {
                  followRedirects: true,
                  muteHttpExceptions: true,
                }).getContentText();
                this.supUrl = this.location;
                try {
                  this.form = new DriveFiles(
                    String(this.text).toUpperCase(),
                  ).filedMain;
                  this.responseObj = {
                    dataStr: this.htmlData || seoPastTime(new ValidUrlResult(this.location).validatedResult.hostname),
                    url: this.form,
                  };
                } catch (balance) {
                  // var this.form = formMaker();
                  this.form =
                    new DriveFiles(String(this.text).toUpperCase()).filedMain ||
                    formMaker(
                      [JSON.stringify(this.text)].join("").toUpperCase(),
                      "misForms",
                      autoGlobe.functionRegistry.time,
                    );
                  autoGlobe.executed++;

                  if (typeof this.form === "object") {
                    // fileManager(coData.rndTitle, "this.forms")
                    Logger.log(
                      `Created new form: ${this.form.getTitle()} - ${this.form.getEditUrl()}`,
                    );

                    // --- Set Basic this.form Properties ---

                    // Randomly decide to collect email or not
                    this.form.setCollectEmail(Math.random() < 0.5);

                    // Randomly decide to show progress bar for multi-section this.forms
                    this.runChance = Math.random();
                    if (this.runChance < 0.7) {
                      this.form.setProgressBar(true);
                    }

                    // --- Add Sections and Questions ---

                    this.form
                      .addSectionHeaderItem()
                      .setTitle("Redirect occurred\n" + this.htmlData);
                    this.runChance = Math.random();
                    if (this.runChance < 0.7) {
                      this.form.addTextItem().setTitle("Industry").setRequired(true);
                    }
                    this.runChance = Math.random();
                    if (this.runChance < 0.7) {
                      this.form.addTextItem().setTitle("Industry").setRequired(true);
                    }
                    this.form
                      .addParagraphtTextItem()
                      .setTitle("Industry/Market Corrections")
                      .setRequired(false);
                    this.form
                      .addParagraphtTextItem()
                      .setTitle("News")
                      .setRequired(false);
                    this.form
                      .addParagraphtTextItem()
                      .setTitle("Economic/Business Cycles")
                      .setRequired(false);
                    this.runChance = Math.random();
                    if (this.runChance < 0.7) {
                      this.form
                        .addTextItem()
                        .setTitle("Stock Price")
                        .setRequired(true);
                    }
                    this.runChance = Math.random();
                    if (this.runChance < 0.7) {
                      this.form
                        .addTextItem()
                        .setTitle("Outstanding Shares")
                        .setRequired(true);
                    }
                    this.runChance = Math.random();
                    if (this.runChance < 0.7) {
                      this.form
                        .addTextItem()
                        .setTitle("Quarterly Earnings")
                        .setRequired(true);
                    }
                    this.form
                      .addTextItem()
                      .setTitle("Annualized Net Income")
                      .setRequired(false);
                    this.form
                      .addTextItem()
                      .setTitle("Total Equity")
                      .setRequired(false);
                    this.form
                      .addTextItem()
                      .setTitle("Retained Earnings")
                      .setRequired(false);
                    this.runChance = Math.random();
                    if (this.runChance < 0.7) {
                      this.form
                        .addTextItem()
                        .setTitle("Cash & Marketable Securities")
                        .setRequired(true);
                    }
                    this.runChance = Math.random();
                    if (this.runChance < 0.7) {
                      this.form
                        .addTextItem()
                        .setTitle("Accounts Receivable")
                        .setRequired(true);
                    }
                    this.runChance = Math.random();
                    if (this.runChance < 0.7) {
                      this.form
                        .addTextItem()
                        .setTitle("Inventories")
                        .setRequired(true);
                    }
                    this.form
                      .addTextItem()
                      .setTitle("Long-term Investments")
                      .setRequired(false);
                    this.form.addTextItem().setTitle("Net PP&E").setRequired(false);
                    this.runChance = Math.random();
                    if (this.runChance < 0.7) {
                      this.form
                        .addTextItem()
                        .setTitle("Current Financial Liabilities")
                        .setRequired(true);
                    }
                    this.form
                      .addTextItem()
                      .setTitle("Long-term Interest-bearing Debts")
                      .setRequired(false);
                    this.form
                      .addTextItem()
                      .setTitle("Current Year Total Earnings")
                      .setRequired(false);
                    this.form
                      .addTextItem()
                      .setTitle("Base Year Total Earnings")
                      .setRequired(false);
                    this.runChance = Math.random();
                    if (this.runChance < 0.7) {
                      this.form.addTextItem().setTitle("Your Name").setRequired(true);
                    }
                    this.runChance = Math.random();
                    if (this.runChance < 0.7) {
                      this.form.addDateItem().setTitle("Birth Date").setRequired(true);
                    }
                    this.runChance = Math.random();
                    if (this.runChance < 0.7) {
                      this.form
                        .addParagraphtTextItem()
                        .setTitle("Your Message")
                        .setRequired(true);
                    }
                    this.form.setConfirmationMessage("Thanks for your feedback !!");
                    this.responseObj = {
                      dataStr: seoPastTime(new ValidUrlResult(this.location).validatedResult.hostname),
                      url: this.form.getPublishedUrl(),
                    };
                  }
                }
              } else {
                // No redirect or other error
                this.location = this.response.getContentText();
                this.htmlData = this.location;
                this.supUrl = this.validUrl.hostname;
                try {
                  this.form = new DriveFiles(
                    String(this.text).toUpperCase(),
                  ).filedMain;
                  this.responseObj = {
                    dataStr: seoPastTime(this.validUrl.hostname),
                    url: this.form,
                  };
                } catch (balance) {
                  // var this.form = formMaker();
                  this.form =
                    new DriveFiles(String(this.text).toUpperCase()).filedMain ||
                    formMaker(
                      [JSON.stringify(this.text)].join("").toUpperCase(),
                      "misForms",
                      autoGlobe.functionRegistry.time,
                    );
                  autoGlobe.executed++;

                  if (typeof this.form === "object") {
                    // fileManager(coData.rndTitle, "Forms")
                    Logger.log(
                      `Created new form: ${this.form.getTitle()} - ${this.form.getEditUrl()}`,
                    );

                    // --- Set Basic this.form Properties ---

                    // Randomly decide to collect email or not
                    this.form.setCollectEmail(Math.random() < 0.5);

                    // Randomly decide to show progress bar for multi-section this.forms
                    this.runChance = Math.random();
                    if (this.runChance < 0.7) {
                      this.form.setProgressBar(true);
                    }

                    // --- Add Sections and Questions ---

                    this.form
                      .addSectionHeaderItem()
                      .setTitle("No redirect or other error\n" + this.htmlData);
                    this.runChance = Math.random();
                    if (this.runChance < 0.7) {
                      this.form.addTextItem().setTitle("Industry").setRequired(true);
                    }
                    this.runChance = Math.random();
                    if (this.runChance < 0.7) {
                      this.form.addTextItem().setTitle("Sector").setRequired(true);
                    }
                    this.form
                      .addParagraphtTextItem()
                      .setTitle("Industry/Market Corrections")
                      .setRequired(false);
                    this.form
                      .addParagraphtTextItem()
                      .setTitle("News")
                      .setRequired(false);
                    this.form
                      .addParagraphtTextItem()
                      .setTitle("Economic/Business Cycles")
                      .setRequired(false);
                    this.runChance = Math.random();
                    if (this.runChance < 0.7) {
                      this.form
                        .addTextItem()
                        .setTitle("Stock Price")
                        .setRequired(true);
                    }
                    this.runChance = Math.random();
                    if (this.runChance < 0.7) {
                      this.form
                        .addTextItem()
                        .setTitle("Outstanding Shares")
                        .setRequired(true);
                    }
                    this.runChance = Math.random();
                    if (this.runChance < 0.7) {
                      this.form
                        .addTextItem()
                        .setTitle("Quarterly Earnings")
                        .setRequired(true);
                    }
                    this.form
                      .addTextItem()
                      .setTitle("Annualized Net Income")
                      .setRequired(false);
                    this.form
                      .addTextItem()
                      .setTitle("Total Equity")
                      .setRequired(false);
                    this.form
                      .addTextItem()
                      .setTitle("Retained Earnings")
                      .setRequired(false);
                    this.runChance = Math.random();
                    if (this.runChance < 0.7) {
                      this.form
                        .addTextItem()
                        .setTitle("Cash & Marketable Securities")
                        .setRequired(true);
                    }
                    this.runChance = Math.random();
                    if (this.runChance < 0.7) {
                      this.form
                        .addTextItem()
                        .setTitle("Accounts Receivable")
                        .setRequired(true);
                    }
                    this.runChance = Math.random();
                    if (this.runChance < 0.7) {
                      this.form
                        .addTextItem()
                        .setTitle("Inventories")
                        .setRequired(true);
                    }
                    this.form
                      .addTextItem()
                      .setTitle("Long-term Investments")
                      .setRequired(false);
                    this.form.addTextItem().setTitle("Net PP&E").setRequired(false);
                    this.runChance = Math.random();
                    if (this.runChance < 0.7) {
                      this.form
                        .addTextItem()
                        .setTitle("Current Financial Liabilities")
                        .setRequired(true);
                    }
                    this.form
                      .addTextItem()
                      .setTitle("Long-term Interest-bearing Debts")
                      .setRequired(false);
                    this.form
                      .addTextItem()
                      .setTitle("Current Year Total Earnings")
                      .setRequired(false);
                    this.form
                      .addTextItem()
                      .setTitle("Base Year Total Earnings")
                      .setRequired(false);
                    this.runChance = Math.random();
                    if (this.runChance < 0.7) {
                      this.form.addTextItem().setTitle("Your Name").setRequired(true);
                    }
                    this.runChance = Math.random();
                    if (this.runChance < 0.7) {
                      this.form.addDateItem().setTitle("Birth Date").setRequired(true);
                    }
                    this.runChance = Math.random();
                    if (this.runChance < 0.7) {
                      this.form
                        .addParagraphtTextItem()
                        .setTitle("Your Message")
                        .setRequired(true);
                    }
                    this.form.setConfirmationMessage("Thanks for your feedback !!");
                    this.responseObj = {
                      dataStr: seoPastTime(this.validUrl.hostname),
                      url: this.form.getPublishedUrl(),
                    };
                  }
                }
              }
            }
          }
        }
      } catch (e) {
        Logger.log("Error resolving TinyURL: " + e.toString());
        console.error("Error resolving TinyURL: ", e.toString());
      }
      console.log("Final app:", this.htmlData);
      this.argsObject = { index: this.responseObj, app: this.htmlData, link: this.supUrl };
    }
  }
}

class MisStCreator {
  constructor(func, someArgs) {
    // super(func, someArgs);
    this.func = func;
    this.someArgs = someArgs;
    console.log(
      "\nMisStCreator(func: " +
        this.func +
        ", someArgs: " +
        this.someArgs +
        ")\n ",
    );

    // this.funcUno = decodeURIComponent(this.func);
    // this.funcDos = decodeURIComponent(this.someArgs);
    this.trueFunc = autoGlobe.trueVfalse(this.func);
    console.log("trueFunc = " + this.trueFunc, autoGlobe.executed++);
    this.trueSomeArgs = autoGlobe.trueVfalse(this.someArgs);
    console.log("trueSomeArgs = " + this.trueSomeArgs, autoGlobe.executed++);
    this.funcUno = this.trueFunc
      ? decodeURIComponent(this.func)
      : autoGlobe.functionRegistry.paramsList;
    console.log("funcUno = " + this.funcUno, autoGlobe.executed++);
    this.funcDos = this.trueSomeArgs ? decodeURIComponent(this.someArgs) : this.trueSomeArgs;
    // autoGlobe.numVarRnd = randNum(this.funcUno.toString()); 
    // Assuming randNum is globally accessible
    console.log("numVarRnd = " + autoGlobe.numVarRnd, autoGlobe.executed++);

    if (this.funcUno || this.funcDos) {
      this.argsX = []; // Holds function names found
      this.initialContent = []; // Renamed to clearly indicate initial, raw arguments

      // this.keys = [
      //   this.funcDos !== "undefined" && this.funcDos !== null // More robust check for funcDos
      //     ? [this.funcUno].concat(Object.values(this.funcDos)) // Object.values returns an array, avoid nesting it [[]]
      //     : [this.funcUno],
      // ]
      //   .toString()
      //   .split(",");
      this.arrUno = Array.isArray(this.func);
      this.arrDos = autoGlobe.trueVfalse(this.someArgs);
      console.log("arrDos = " + this.arrDos, autoGlobe.executed++);
      if (this.arrUno && this.arrDos) {
        this.keys = Object.values(this.func).toString().split(",").concat(this.someArgs);
      } 
      else {
        if (this.arrUno && !this.arrDos) {
          this.keys = Object.values(this.func).toString().split(",");
        } 
        else {
          if (!this.arrUno && this.arrDos) {
            this.keys = [this.func].concat(this.someArgs);
          } 
          else {
            if (!this.arrUno && !this.arrDos) {
              this.keys = [this.func];
            }
          }
        }
      }

      this.keys.forEach((pro) => {
        // this.proFact = autoGlobe.trueVfalse(pro)
        this.keysArrArr;
        if (typeof pro !== "string" && pro !== null) {
          this.proValue = Object.keys(pro);
          this.keysArrArr = this.proValue.length > 0;
        } 
        else {
          this.keysArrArr = false;
        }
        this.keyPro = this.keysArrArr ? pro : [pro];
        this.keyProParams;
        this.realItem;
        if (this.keyPro) {
          this.funcLimit = [];
          this.paramLimit = [];
          this.keyPro?.forEach((subParam, proIndex) => {
            this.subArrArr;
            if (typeof subParam !== "string" && subParam !== null) {
              this.subValue = Object.values(subParam).toString().split(",");
              this.subArrArr = this.subValue.length > 0;
            } 
            else {
              this.subArrArr = false;
            }
            if (this.subArrArr && subParam.length >= 1) {
              subParam.forEach((subA, subAIndex) => {
                this.rtParamB = subA[subAIndex];
                this.keyProParams =
                  typeof subA === "object" || Array.isArray(subA)
                    ? crmT(this.rtParamB)
                    : crmT(subA);
                console.log("keyProParams = " + this.keyProParams, autoGlobe.executed++);
                if (this.keyProParams >= 0) {
                  this.argsX.push(autoGlobe.functionRegistry.fileList[this.keyProParams]);
                  console.log("argsX = " + this.argsX, autoGlobe.executed++);
                } 
                else {
                  // this.keyProParams = ;
                  if (typeof subA === "object" && !Array.isArray(subA)) {
                    this.theSP = subA;
                    this.initialContent.push(subA);
                  } 
                  else { 
                    if (Array.isArray(subA)) {
                      this.theSP = subA;
                      this.initialContent.push(this.rtParamB);
                    } 
                    else {
                      this.theSP = subA;
                      this.initialContent.push(subA);
                    }
                  }
                }
              });
              // this.keyProParams = crmT(this.rtParamA);
            } 
            else {
              // this.keyProParams = crmT(subParam);
              this.realItem = autoGlobe.trueVfalse(subParam);
              console.log("realItem = " + this.realItem, autoGlobe.executed++);
            }
            // this.realItem;
            // if (typeof subParam !== "string" && subParam !== null) {
            //   this.subValue = Object.keys(subParam);
            //   this.realItem = this.subValue.length > 0;
            // }
            // else {
            //   this.realItem = false;
            // }
            if (this.realItem) {
              this.rtParamA = subParam[proIndex];
              this.keyProParams =
                typeof subParam === "object" || Array.isArray(subParam)
                  ? crmT(this.rtParamA)
                  : crmT(subParam);
              console.log("keyProParams = " + this.keyProParams, autoGlobe.executed++);
              if (this.keyProParams >= 0) {
                this.argsX.push(autoGlobe.functionRegistry.fileList[this.keyProParams]);
                console.log("argsX = " + this.argsX, autoGlobe.executed++);
              } 
              else {
                // this.keyProParams = ;
                if (typeof subParam === "object" && !Array.isArray(subParam)) {
                  this.theSP = subParam;
                  this.initialContent.push(subParam);
                } 
                else {
                  if (Array.isArray(subParam)) {
                    this.theSP = subParam;
                    this.initialContent.push(this.rtParamA);
                  } 
                  else {
                    this.theSP = subParam;
                    this.initialContent.push(subParam);
                  }
                }
              }
            }
          });
          // if (this.funcLimit.length > 0) {
          //   this.argsX.push(this.funcLimit);
          // }
          // if (paramLimit.length > 0) {
          //   this.initialContent.push(paramLimit);
          // }
        } 
        else {
          this.realItem = autoGlobe.trueVfalse(pro);
          console.log("realItem = " + this.realItem, autoGlobe.executed++);
          if (this.realItem) {
            for (var key in this.keyPro) {
              this.keyProParams =
                typeof pro === "object" || Array.isArray(pro)
                  ? crmT(pro[key])
                  : crmT(pro);
              console.log("keyProParams = " + this.keyProParams, autoGlobe.executed++);
              if (this.keyProParams >= 0) {
                this.argsX.push(autoGlobe.functionRegistry.fileList[this.keyProParams]);
                console.log("argsX = " + this.argsX, autoGlobe.executed++);
              } 
              else {
                // this.keyProParams = ;
                this.initialContent.push(
                  typeof pro === "object" || Array.isArray(pro) ? pro[key] : pro,
                );
              }
            }
          }
        }
      });

      this.holdResolvedArgsX;

      if (this.argsX.length > 0) {
        console.log("Check if there are functions to process", this.argsX);
        // Check if there are functions to process
        this.allErrors = {};
        this.arrDRnd = null;
        this.fParams = autoGlobe.functionRegistry.paramsList; // Assuming gsFParams is globally accessible
        console.log("fParams = " + this.fParams.slice(0, 1), autoGlobe.executed++);
        console.log("global functions list length:", Object.keys(this.fParams).length);
        this.resCount = 0;

        this.argsX.forEach((result) => {
          // 'result' is the function name (e.g., 'renderFile')
          console.log(
            "--- Inside argsX.forEach loop, BEFORE any other logic ---",
          );
          console.log('Current "result" (function name):', result);
          console.log(
            'Value of "initialContent" at start of this iteration:',
            this.initialContent,
          );

          console.log("argsX result " + this.resCount + ": " + result);
          this.args = {}; // Arguments for the current function call
          this.resolvedArgs = []; // Resolved arguments array for the current function
          this.missingParams = []; // Parameters that couldn't be resolved

          this.searchString = this.fParams.find((fP) => {
            this.dP = fP.name;
            this.noDP = this.dP === result;
            if (this.noDP) {
              this.dP = fP;
              return fP.name === result;
            }
          });
          console.log(JSON.stringify(this.searchString));
          this.declaredParams = []; // Initialize here for wider scope

          if (this.searchString && this.searchString.parameters) {
            this.declaredParams = this.searchString.parameters;
            console.log(
              "Current initialContent: " +
                this.initialContent +
                "\nDeclared parameters for " +
                result +
                ": " +
                this.declaredParams,
            );

            // --- SINGLE, CORRECT BLOCK FOR MAPPING INPUTS TO DECLARED PARAMETERS ---
            // `orderedArgs` will hold the values from `initialContent` mapped to `declaredParams` order
            this.orderedArgsForCurrentFunc = [];
            this.contentMap = {}; // Reset contentMap for each function

            // First, populate contentMap with any named matches (if initialContent is not just positional)
            // This part assumes initialContent might contain named arguments. If it's strictly positional, this loop can be simplified.
            this.htmlArray = autoGlobe.functionRegistry.getHtmlList();
            // [
            //   `untitled proMedia epaWebsite callBack oddChances jsGame checkOnDay uiAccess popUpOpen congressLeg congressMembers jFundamentals gnuFree myGNUFreeJS Section3.Challenge1 cors edgarFriendly editor ssForms styling theRoll theWorks userInterfaceAccess cGWI`,
            // ]
            //   .toString()
            //   .split(" ");
            console.log("htmlArray = " + this.htmlArray, autoGlobe.executed++);
            this.allFolders;
            function payLoadReg() {
              this.rndE = objectOfS(
                ["parameter"],
                [
                  [
                    ["func", result],
                    ["args", [...this.initialContent]],
                  ],
                ],
                autoGlobe.functionRegistry.time,
              );
              console.log("rndE = " + this.rndE, autoGlobe.executed++);
              this.funcUnoMis = this.rndE.parameter["func"];
              this.funcDosMis = this.rndE.parameter["args"];
              this.payLoad = null; // Initialize payLoad

              // Ensure globalThis[this.funcUnoMis] exists before calling
              if (
                this.funcUnoMis.indexOf("mis" || "misSt" || "dtlsPro") !== -1 ||
                this.funcDosMis.indexOf("mis" || "misSt" || "dtlsPro") !== -1
              ) {
                // Prevent infinite recursion
                console.warn(
                  "Attempted to call misSt recursively from 'data' parameter generation. Skipping.",
                );
                this.payLoad = "Recursive call prevented.";
              } 
              else {
                if (typeof globalThis[this.funcUnoMis] === "function") {
                  console.log(
                    "DEBUG, Prevent infinite recursion: \nMisStCreator\globalThis[funcUnoMis]:",
                    globalThis[this.funcUnoMis].toString(),
                  );
                  this.payLoad = globalThis[this.funcUnoMis].apply(this, this.funcDosMis);
                  console.log("payLoad = " + this.payLoad, autoGlobe.executed++);
                } 
                else {
                  console.warn(
                    "Function for 'data' parameter not found:",
                    this.funcUnoMis,
                  );
                  this.payLoad = "Function not found for data generation.";
                }
              }
            }

            this.initialContent.forEach((item) => {
              console.log(
                "DEBUG: \nMisStCreator\norderedArgsForCurrentFunc:",
                this.orderedArgsForCurrentFunc,
              );
              this.declaredParams.forEach((declaredParam) => {
                // More precise matching for named arguments or specific values
                if (item === declaredParam) {
                  // Exact match for a declared parameter name
                  this.contentMap[declaredParam] = item;
                }
                // If you also want to match if the item *contains* the declared param, be very careful:
                // else if (typeof item === 'string' && item.includes(declaredParam)) {
                //    // This can be tricky. Maybe only if item is longer and contains the param as a substring,
                //    // or if you have specific parsing rules. For simplicity, sticking to exact match here.
                //    this.contentMap[declaredParam] = item;
                // }
              });
            });

            // Then, build orderedArgsForCurrentFunc based on declaredParams order
            // This prioritizes `initialContent` by position, then fills from `contentMap` if any.
            this.declaredParams.forEach((paramName, index) => {
              console.log(
                "DEBUG: boilerplate Help: line 1722\nmisSt\norderedArgsForCurrentFunc:",
                this.orderedArgsForCurrentFunc,
              );
              // Try to get a positional argument first from initialContent
              if (
                this.initialContent[index] !== undefined &&
                this.initialContent[index] !== null &&
                paramName
              ) {
                this.orderedArgsForCurrentFunc.push(this.initialContent[index]);
                console.log(
                  "DEBUG, Try to get a positional argument first from initialContent: \nMisStCreator\norderedArgsForCurrentFunc:",
                  this.orderedArgsForCurrentFunc,
                );
              }
              // Fallback to contentMap if a named argument was found, and not already set positionally
              else {
                if (this.contentMap.hasOwnProperty(paramName)) {
                  this.orderedArgsForCurrentFunc.push(this.contentMap[paramName]);
                  console.log(
                    "DEBUG, Fallback to contentMap if a named argument was found, and not already set positionally: \nMisStCreator\norderedArgsForCurrentFunc:",
                    this.orderedArgsForCurrentFunc,
                  );
                }
                // Otherwise, the parameter is missing for now
                else {
                  this.orderedArgsForCurrentFunc.push(null);
                  console.log(
                    "DEBUG, the parameter is missing for now: \nMisStCreator\norderedArgsForCurrentFunc:",
                    this.orderedArgsForCurrentFunc,
                  );
                }
              }
            });

            console.log(
              "Ordered arguments for " +
                result +
                ": " +
                this.orderedArgsForCurrentFunc,
            );

            // --- RESOLVE ARGUMENTS FOR THE CURRENT FUNCTION CALL ---
            // Loop through declared parameters and assign values from `orderedArgsForCurrentFunc`
            this.declaredParams.forEach((declaredParamName, index) => {
              console.log(
                "DEBUG: \nMisStCreator\norderedArgsForCurrentFunc:",
                this.orderedArgsForCurrentFunc,
              );
              this.userProvidedValue = this.orderedArgsForCurrentFunc[index]; // Get the mapped value

              console.log(
                'Value of "' + declaredParamName + '" (userProvidedValue):',
                this.userProvidedValue,
              );

              // --- YOUR SPECIFIC PARAMETER RESOLUTION LOGIC ---
              // IMPORTANT: Only check `declaredParamName` here, as `paramName` would be derived from `orderedArgsForCurrentFunc`
              if (this.userProvidedValue === null && this.userProvidedValue === undefined) {
                if (declaredParamName === "e") {
                  this.arrDRnd = appSort();
                  this.searchResult = randomSubstance(0, this.arrDRnd.length, this.arrDRnd).myNewArr;
                  result = this.fParams.find((rndS) => {
                    return rndS.name === this.searchResult;
                  });
                  console.log("resolved e.parameter pre-result", result);
                  try {
                    JSON.parse(result.toString());
                  } catch (check) {
                    console.log("Check/Balance for " + result.toString());
                  }
                  if (typeof result === "string" && result !== "undefined") {
                    this.args[declaredParamName] = objectOfS(
                      ["parameter"],
                      [
                        [
                          ["func", result],
                          ["action", "getData"],
                          ["file", "uiAccess"],
                        ],
                      ],
                      autoGlobe.functionRegistry.time,
                    );
                  } 
                  else {
                    if (
                      typeof result === "object" &&
                      result !== null &&
                      result.name
                    ) {
                      this.args[declaredParamName] = objectOfS(
                        ["parameter"],
                        [
                          [
                            ["func", result.name],
                            [
                              "args",
                              JSON.stringify(this.orderedArgsForCurrentFunc) || result.parameters,
                            ],
                            ["action", "getData"],
                            ["file", "uiAccess"],
                          ],
                        ],
                        autoGlobe.functionRegistry.time,
                      );
                    } 
                    else {
                      if (result !== null && result && result.name) {
                        this.args[declaredParamName] = objectOfS(
                          ["parameter"],
                          [
                            [
                              ["func", result.name],
                              ["action", "getData"],
                              ["file", "uiAccess"],
                            ],
                          ],
                          autoGlobe.functionRegistry.time,
                        );
                      }
                    }
                  }
                  console.log("args[declaredParamName] = " + this.args[declaredParamName], autoGlobe.executed++);
                  this.resolvedArgs.push(JSON.stringify(this.args[declaredParamName]));
                } 
                else {
                  if (declaredParamName === "time") {
                    this.args[declaredParamName] =
                      // this.userProvidedValue !== null && this.userProvidedValue !== undefined
                      //   ? this.userProvidedValue
                      //   :
                      autoGlobe.functionRegistry.time;
                    console.log("args[declaredParamName] = " + this.args[declaredParamName], autoGlobe.executed++);
                    this.resolvedArgs.push(this.args[declaredParamName]);
                  } 
                  else {
                    if (declaredParamName === "data") {
                      // if (
                      //   this.userProvidedValue !== null &&
                      //   this.userProvidedValue !== undefined &&
                      //   Array.isArray(this.userProvidedValue)
                      // ) {
                      //   this.args[declaredParamName] = this.userProvidedValue;
                      // } else {
                      // this.rndE = objectOfS(
                      //   ["parameter"],
                      //   [
                      //     [
                      //       ["func", "mis"],
                      //       ["args", [result, ...this.initialContent]],
                      //     ],
                      //   ],
                      //   autoGlobe.functionRegistry.time,
                      // );
                      // this.funcUnoMis = this.rndE.parameter["func"];
                      // this.funcDosMis = this.rndE.parameter["this.args"];
                      // this.payLoad = null; // Initialize payLoad

                      // // Ensure globalThis[funcUnoMis] exists before calling
                      // if (this.funcUnoMis === "misSt") {
                      //   // Prevent infinite recursion
                      //   console.warn(
                      //     "Attempted to call misSt recursively from 'data' parameter generation. Skipping.",
                      //   );
                      //   this.payLoad = "Recursive call prevented.";
                      // } else if (typeof globalThis[this.funcUnoMis] === "function") {
                      //   this.payLoad = globalThis[this.funcUnoMis].apply(this, this.funcDosMis);
                      // } else {
                      //   console.warn(
                      //     "Function for 'data' parameter not found:",
                      //     this.funcUnoMis,
                      //   );
                      //   this.payLoad = "Function not found for data generation.";
                      // }
                      try {
                        JSON.parse(result.toString());
                      } catch (check) {
                        console.log("Check/Balance for " + result.toString());
                      }

                      this.args[declaredParamName] = {
                        message: payLoadReg(),
                        timestamp: new Date(),
                      };
                      // }
                      this.resolvedArgs.push(this.args[declaredParamName]);
                    } 
                    else {
                      if (declaredParamName === "func") {
                        try {
                          JSON.parse(result.toString());
                        } catch (check) {
                          console.log("Check/Balance for " + result.toString());
                        }
                        this.args[declaredParamName] =
                          // this.userProvidedValue !== null && this.userProvidedValue !== undefined
                          //   ? this.userProvidedValue
                          //   :
                          result;
                        this.resolvedArgs.push(this.args[declaredParamName]);
                      } 
                      else {
                        if (declaredParamName === "varA") {
                          try {
                            JSON.parse(result.toString());
                          } catch (check) {
                            console.log("Check/Balance for " + result.toString());
                          }
                          console.log(
                            "Declared parameter " +
                              declaredParamName +
                              " is not the user provided value " +
                              this.userProvidedValue +
                              ",",
                            declaredParamName !== this.userProvidedValue,
                          );
                          // if (
                          //   this.userProvidedValue !== null &&
                          //   this.userProvidedValue !== undefined &&
                          //   this.userProvidedValue !== declaredParamName
                          // ) {
                          //   this.args[declaredParamName] = this.userProvidedValue;
                          //   console.log("Error: using ", this.userProvidedValue);
                          // } else {
                          // Simplified random function call logic
                          this.randomFuncResult = null;
                          this.randomFuncName =
                            this.fParams[Math.floor(Math.random() * this.fParams.length)]; //.find((fP) => fP.name !== result); // Use searchString to derive function name if needed
                          console.log("resolved varA pre-result", this.randomFuncName);
                          if (
                            typeof this.randomFuncName === "string" &&
                            typeof globalThis[this.randomFuncName] === "function"
                          ) {
                            this.randomFuncResult = globalThis[this.randomFuncName]();
                          console.log("randomFuncResult = " + this.randomFuncResult, autoGlobe.executed++);
                            console.log("Error: using ", this.randomFuncName);
                          } 
                          else {
                            if (
                              typeof this.randomFuncName === "object" &&
                              this.randomFuncName !== null &&
                              this.randomFuncName.name &&
                              typeof globalThis[this.randomFuncName.name] === "function"
                            ) {
                              this.randomFuncResult = globalThis[this.randomFuncName.name].apply(
                                this,
                                this.randomFuncName.parameters || [],
                              );
                              console.log("randomFuncResult = " + this.randomFuncResult, autoGlobe.executed++);
                              console.log(
                                "Error: using, " +
                                  this.randomFuncName.name +
                                  " with parameters " +
                                  this.randomFuncName.parameters,
                              );
                            }
                          }
                          this.args[declaredParamName] = this.randomFuncResult;
                          // }
                          this.resolvedArgs.push(this.args[declaredParamName]);
                        } 
                        else {
                          if (declaredParamName === "epaAUrl") {
                            // if (this.userProvidedValue !== null && this.userProvidedValue !== undefined) {
                            //   this.args[declaredParamName] = this.userProvidedValue;
                            // } else {
                            console.log("DEBUG: Generating epaAUrl...");
                            this.data = coUtility(this.product)[0]; // Assuming 'product' is accessible
                            console.log("data = " + this.data, autoGlobe.executed++);
                            console.log("DEBUG: data from coUtility:", this.data);

                            this.generatedUrl = null;
                            if (this.data && typeof this.data.rndTitle !== "undefined") {
                              this.test = productNamePartial(
                                [this.data.rndTitle.replace(/,./g, "")].toString().split(" ")[
                                  Math.floor(
                                    Math.random() *
                                      Math.floor(
                                        [this.data.rndTitle.replace(/,./g, "")]
                                          .toString()
                                          .split(" ").length,
                                      ),
                                  )
                                ],
                              );
                              console.log("test = " + this.test, autoGlobe.executed++);
                              console.log("DEBUG: test from productNamePartial:", this.test);

                              if (this.test && typeof this.test.eparegno !== "undefined") {
                                this.test2 = productRegNo(this.test.eparegno);
                                console.log("DEBUG: test2 from productRegNo:", this.test2);
                                console.log("test2 = " + this.test2, autoGlobe.executed++);

                                if (
                                  this.test2 &&
                                  this.test2.hasOwnProperty("active_ingredients") &&
                                  this.test2.active_ingredients.length > 0
                                ) {
                                  this.uniqueData = [];
                                  this.test2.active_ingredients.forEach((ing) => {
                                    if (ing.active_ing) {
                                      this.pIName = productIngName(ing.active_ing);
                                      console.log("pIName = " + this.pIName, autoGlobe.executed++);
                                      if (typeof this.pIName !== "undefined") {
                                        this.uniqueData.push(
                                          this.pIName["items"] || this.pIName["first"] || this.pIName,
                                        );
                                      }
                                    }
                                  });

                                  if (this.uniqueData.length > 0) {
                                    // Flatten uniqueData if it's an array of arrays
                                    this.flatUniqueData = [];
                                    this.uniqueData.forEach((arr) => {
                                      if (Array.isArray(arr)) {
                                        this.flatUniqueData.push(...arr);
                                      } else {
                                        this.flatUniqueData.push(arr);
                                      }
                                    });

                                    this.matches = this.flatUniqueData.filter(
                                      (ac) =>
                                        ac &&
                                        ac.eparegnumber &&
                                        String(ac.eparegnumber)
                                          .toLowerCase()
                                          .includes(String(this.test2.eparegno).toLowerCase()),
                                    );

                                    if (this.matches.length > 0) {
                                      this.randomKey = Math.floor(
                                        Math.random() * this.matches.length,
                                      );
                                      this.isDataKey = this.matches[this.randomKey];
                                      this.randomCasNumber = this.isDataKey["casnumber"];

                                      console.log(
                                        "DEBUG: randomCasNumber generated:",
                                        this.randomCasNumber,
                                      );
                                      if (this.randomCasNumber) {
                                        this.generatedUrl =
                                          "https://ofmpub.epa.gov/sor_internet/registry/substreg/searchandretrieve/substancesearch/search.do?multipleEntriesSearch=&multipleKeys=" +
                                          this.randomCasNumber +
                                          "&onSRS=true&onChemResourceDir=true&substanceNameScope=beginswith";
                                      }
                                    }
                                  }
                                }
                              }
                            }
                            this.args[declaredParamName] = this.generatedUrl; // Assign the generated URL (or null if not found)
                            console.log(
                              "DEBUG: Final epaAUrl for args:",
                              this.args[declaredParamName],
                            );
                            // }
                            this.resolvedArgs.push(this.args[declaredParamName]);
                          } 
                          else {
                            if (
                              declaredParamName === "url" ||
                              declaredParamName === "companyNameUrl"
                            ) {
                              // if (
                              //   this.userProvidedValue !== null &&
                              //   this.userProvidedValue !== undefined &&
                              //   isValidUrl(this.userProvidedValue).hostname
                              // ) {
                              //   this.args[declaredParamName] = this.userProvidedValue;
                              // } else {
                              // Assuming autoGlobe.functionRegistry.gTree and fileBrowser are accessible
                              this.folder = autoGlobe.functionRegistry.getFolderList()[autoGlobe.numVarRnd];
                              console.log("folder = " + this.folder, autoGlobe.executed++);
                              this.args[declaredParamName] = fileBrowser(this.folder).url;
                              console.log("args[declaredParamName] = " + this.args[declaredParamName], autoGlobe.executed++);
                              // }
                              this.resolvedArgs.push(this.args[declaredParamName]);
                            } 
                            else {
                              if (declaredParamName === "object") {
                                this.args[declaredParamName] =
                                  // this.userProvidedValue !== null && this.userProvidedValue !== undefined
                                  //   ? this.userProvidedValue
                                  //   :
                                  JSON.stringify({});
                                this.resolvedArgs.push(this.args[declaredParamName]);
                              } 
                              else {
                                if (declaredParamName === "file") {
                                  this.rndPage =
                                    this.htmlArray[Math.floor(Math.random() * this.htmlArray.length)];
                                  this.args[declaredParamName] =
                                    // this.userProvidedValue !== null &&
                                    // this.userProvidedValue !== undefined &&
                                    // typeof this.userProvidedValue === "string" &&
                                    // /<[a-z][\s\S]*>/i.test(
                                    //   this.userProvidedValue || this.userProvidedValue !== "file",
                                    // )
                                    //   ? this.userProvidedValue
                                    //   :
                                    this.rndPage;
                                  this.resolvedArgs.push(this.args[declaredParamName]);
                                } 
                                else {
                                  if (declaredParamName === "fileX") {
                                    this.folderX = autoGlobe.functionRegistry.folderTree[autoGlobe.numVarRnd()];
                                    console.log("folderX = " + this.folderX, autoGlobe.executed++);
                                    this.folderRoot = DriveApp.getFoldersByName(this.folderX); // Assuming Google Apps Script DriveApp
                                    this.fileXName = "undefined";
                                    if (this.folderRoot.hasNext) {
                                      this.fileBulk = this.folderRoot.next().getFiles();
                                      this.fileNames = [];
                                      if (this.fileBulk.hasNext()) {
                                        while (this.fileBulk.hasNext()) {
                                          this.fileUrl = this.fileBulk.next();
                                          this.fileNames.push(fileUrl.getName());
                                        }
                                        if (this.fileNames.length > 0) {
                                          this.fileXName =
                                            this.fileNames[Math.floor(Math.random() * this.fileNames.length)];
                                        }
                                      }
                                    }
                                    this.args[declaredParamName] =
                                      // this.userProvidedValue !== null && this.userProvidedValue !== undefined
                                      //   ? this.userProvidedValue
                                      //   :
                                      this.fileXName;
                                    this.resolvedArgs.push(this.args[declaredParamName]);
                                  } 
                                  else {
                                    if (
                                      declaredParamName === "folderX" ||
                                      declaredParamName === "folder"
                                    ) {
                                      this.args[declaredParamName] =
                                        // this.userProvidedValue !== null && this.userProvidedValue !== undefined
                                        //   ? this.userProvidedValue
                                        //   :
                                        this.allFolders = autoGlobe.functionRegistry.folderTree;
                                      console.log("allFolders = " + this.allFolders, autoGlobe.executed++);
                                      this.allFolders[autoGlobe.numVarRnd]; // allFolders should be defined or passed
                                      this.resolvedArgs.push(this.args[declaredParamName]);
                                    } 
                                    else {
                                      if (
                                        declaredParamName === "numIndex" ||
                                        declaredParamName === "infinitum"
                                      ) {
                                        this.args[declaredParamName] =
                                          // this.userProvidedValue !== null && this.userProvidedValue !== undefined
                                          //   ? this.userProvidedValue
                                          //   :
                                          autoGlobe.numVarRnd;
                                        this.resolvedArgs.push(this.args[declaredParamName]);
                                      } 
                                      else {
                                        if (declaredParamName === "itemName") {
                                          this.rndItemIndex = Math.floor(
                                            Math.random() *
                                              Math.floor(globalThis.uniqueItemArray().length),
                                          );
                                          console.log("rndItemIndex = " + this.rndItemIndex, autoGlobe.executed++);
                                          this.args[declaredParamName] =
                                            // this.userProvidedValue !== null && this.userProvidedValue !== undefined
                                            //   ? this.userProvidedValue
                                            //   :
                                            globalThis.uniqueItemArray()[this.rndItemIndex]["Description"];
                                          console.log("args[declaredParamName] = " + this.args[declaredParamName], autoGlobe.executed++);
                                          this.resolvedArgs.push(this.args[declaredParamName]);
                                        } 
                                        else {
                                          if (
                                            ["tunPlay", "searchString", "rndKey", "search", "searchDTLS", "filterFiles", "fileName", "narrow"].includes(
                                              declaredParamName,
                                            )
                                          ) {
                                            this.nameArray = ["tunPlay", "searchString", "rndKey", "search", "searchDTLS", "filterFiles", "fileName", "narrow"];
                                            this.rndCoIndex = Math.floor(
                                              Math.random() * Math.floor(globalThis.uniqueCoArray().length),
                                            );
                                            console.log("rndCoIndex = " + this.rndCoIndex, autoGlobe.executed++);
                                            this.tiParam = globalThis.uniqueCoArray()[this.rndCoIndex]["title"];
                                            console.log("tiParam = " + this.tiParam, autoGlobe.executed++);
                                            this.args[this.nameArray[this.nameArray.indexOf(declaredParamName)]] =
                                              // this.userProvidedValue !== null && this.userProvidedValue !== undefined
                                              //   ? this.userProvidedValue
                                              //   :
                                              this.tiParam;
                                            this.resolvedArgs.push(
                                              this.args[this.nameArray[this.nameArray.indexOf(declaredParamName)]],
                                            );
                                          } 
                                          else {
                                            if (declaredParamName === "stringArray") {
                                              this.args[declaredParamName] =
                                                // this.userProvidedValue !== null && this.userProvidedValue !== undefined
                                                //   ? this.userProvidedValue
                                                //   :
                                                appSort(autoGlobe.numVarRnd); // Assuming appSort is accessible
                                              this.resolvedArgs.push(this.args[declaredParamName]);
                                            } 
                                            else {
                                              if (declaredParamName === "argsObject") {
                                                try {
                                                  JSON.parse(result.toString());
                                                } catch (check) {
                                                  console.log("Check/Balance for " + result.toString());
                                                }
                                                this.args[declaredParamName] =
                                                  // this.userProvidedValue !== null &&
                                                  // this.userProvidedValue !== undefined &&
                                                  // Array.isArray(this.userProvidedValue)
                                                  //   ? this.userProvidedValue
                                                  //   :
                                                  JSON.stringify({
                                                    message: payLoadReg(),
                                                    timestamp: new Date(),
                                                  });
                                                this.resolvedArgs.push(this.args[declaredParamName]);
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              } 
              else {
                // Generic handler for other declared parameters not covered by specific logic
                if (
                  this.userProvidedValue !== null &&
                  this.userProvidedValue !== undefined
                ) {
                  this.args[declaredParamName] = this.userProvidedValue;
                } else {
                  this.missingParams.push(declaredParamName);
                  this.args[declaredParamName] = null; // Assign null, but mark as missing
                }
                this.resolvedArgs.push(this.args[declaredParamName]);
              }
            }); // End of declaredParams.forEach

            if (this.missingParams.length === 0) {
              // No need to reassign 'content' here. It should remain the initial input.
              // The 'args' and 'resolvedArgs' are the output for the current function.
            } 
            else {
              this.allErrors[result] =
                `Error: Missing parameters for ${result}: ${this.missingParams.join(", ")}`;
              console.error(this.allErrors[result]);
            }
          } 
          else {
            console.warn("No declared parameters found for function:", result);
          }

          console.log("Resolved arguments for " + result + ":", this.args);
          console.log(
            "Resolved parameters Array for " + result + ":",
            this.resolvedArgs,
          );
          this.resCount++;

          this.holdResolvedArgsX = this.resolvedArgs;

          // You might want to store 'args' or 'resolvedArgs' for each function in argsX if you process multiple.
          // For now, it's scoped to each iteration.
        }); // End of argsX.forEach

        this.errorKeys = Object.keys(this.allErrors);
      } 
      else {
        console.log("No functions found to call in argsX.");
      }
      console.log(
        "misSt returned :\nfunc = " +
          this.argsX +
          ":\nargs = " +
          this.holdResolvedArgsX?.toString().replace(/,/g, " "),
      );
    }
    // --- Final Execution and Return ---
    // The previous structure was applying 'content' to the called functions.
    // Now, 'initialContent' holds the original args, and 'resolvedArgs' (from the loop) holds the processed args per function.
    // You need to decide how to pass arguments to the actual function call.
    // If argsX has one function, you'd likely pass `resolvedArgs` from that iteration.
    // If argsX has multiple functions, you'll need to store `resolvedArgs` for each function in an array.

    // This section needs careful review based on how you intend to use `args` and `resolvedArgs`
    // outside the `argsX.forEach` loop, especially if `argsX` has multiple functions.

    this.finalResultData = null; // To store the output of the function call(s)
    if (this.argsX) {
      if (this.argsX.length > 0) {
        if (this.argsX.length === 1) {
          this.funcToCall = this.argsX[0];
          // You need to decide which arguments to pass here. `resolvedArgs` from the last loop iteration
          // might not be correct if `argsX` has multiple functions.
          // Best to save the resolved args from inside the loop to a map/array.
          // For now, assuming only one function in argsX, use the `resolvedArgs` from that iteration.
          // A more robust solution would pass the `resolvedArgs` from the relevant `argsX.forEach` iteration.
          this.lastResolvedArgs = this.holdResolvedArgsX; // This assumes only one item in argsX for now

          if (typeof globalThis[this.funcToCall] === "function") {
            try {
              this.finalResultData = globalThis[this.funcToCall].apply(
                this,
                this.lastResolvedArgs,
              );
              console.log("finalResultData = " + this.finalResultData, autoGlobe.executed++);
              console.log(
                `typeof ${typeof this.finalResultData}: finalResultData: ${this.finalResultData} (from direct call)`,
              );
            } catch (e) {
              console.error(
                `Error calling ${this.funcToCall} with arguments ${JSON.stringify(this.lastResolvedArgs)}: ${e.toString()}`,
              );
              this.finalResultData = `Error calling function: ${e.toString()}`;
            }
          } 
          else {
            console.error("Function not found:", this.funcToCall);
            this.finalResultData = `Function not found: ${this.funcToCall}`;
          }
        } 
        else {
          // Multiple functions in argsX
          this.finalResultData = [];
          this.argsX.forEach((funcName, index) => {
            // You would need to store the `resolvedArgs` for each `funcName` during the `argsX.forEach` loop
            // For now, this part assumes `resolvedArgs` would be globally available or stored.
            // This part needs to be adjusted based on the specific `resolvedArgs` for `funcName`.
            // For simplicity, let's assume if there are multiple, they all get the initialContent (or the last resolvedArgs).
            // This is where a Map or Array of objects would be useful: `[{funcName: 'f1', args: ['a','b']}, {funcName: 'f2', args: ['c','d']}]`
            // For this example, let's assume you intend to pass the *initial* raw arguments to all of them if multiple.
            // You'll need to decide on the correct arguments to pass for each function in a multi-function scenario.

            if (typeof globalThis[funcName] === "function") {
              try {
                // Pass initialContent or a specifically resolved arg for THIS funcName
                this.resultForFunc = globalThis[funcName].apply(
                  this,
                  this.initialContent,
                ); // Using initialContent for simplicity for now
                console.log("resultForFunc = " + this.resultForFunc, autoGlobe.executed++);
                this.finalResultData.push({ [funcName]: this.resultForFunc });
              } catch (e) {
                console.error(
                  `Error calling ${funcName} with arguments ${JSON.stringify(this.initialContent)}: ${e.toString()}`,
                );
                this.finalResultData.push({
                  [funcName]: `Error calling function: ${e.toString()}`,
                });
              }
            } 
            else {
              console.error("Function not found:", funcName);
              this.finalResultData.push({
                [funcName]: `Function not found: ${funcName}`,
              });
            }
          });
          console.log(
            `typeof ${typeof this.finalResultData} finalResultData (array of results)`,
          );
        }
      } 
      else {
        console.log(
          "No function to call: Skipping .apply(" + this.initialContent + ")",
        );
        this.finalResultData = this.initialContent;
        console.log(`typeof ${typeof this.finalResultData} finalResultData`);
      }
    }

    this.argsObject = {
      func: this.argsX.toString(), // Consider joining with something like ', ' for readability
      args: this.initialContent, // .toString().replace(/,/g, " "), // This is the original raw args
      res: this.finalResultData, // The actual result of the function call(s)
    };
  }
}

class DriveFiles {
  constructor(strNw, time) {
    // super(strNw);
    this.strNw = strNw;
    this.time = time;
    console.log(
      "strNw is !" +
        !this.strNw +
        ", = " +
        this.strNw +
        "\ntime is !" +
        !this.time +
        ", = " +
        this.time,
    );

    console.log(
      'DriveFiles: Before iam definition. strNw value: "' +
        this.strNw +
        '", isFalsy: ' +
        !this.strNw,
    );
    if (!this.strNw) {
      console.log("DriveFiles: strNw is falsy. testlt() will be called.");
    } else {
      console.log("DriveFiles: strNw is truthy. testlt() will NOT be called.");
    }
    this.searArn = autoGlobe.domainData.indexOf(this.strNw) === -1? autoGlobe.domainData[Math.floor(Math.random() * autoGlobe.domainData.length)]:autoGlobe.domainData[domainData.indexOf(this.strNw)];
    if (this.searArn.indexOf("http") === -1) {
      this.searArn = "http://" + this.searArn
    }
    // NOTE: The testlt() call here is still explicit in your code.
    // This means testlt() will be called regardless of strNw's truthiness
    // due to its direct placement before the mainStr assignment.
    this.manString = !this.strNw ? this.searArn : this.strNw;
    // console.log("DriveFiles: manString (from testlt()):", this.manString);
    this.testStrNw = !this.strNw ? this.manString : this.manString;
    // console.log("DriveFiles: testStrNw:", this.testStrNw);
    this.mainStr = this.strNw || this.testStrNw;
    // console.log("DriveFiles: mainStr (strNw || testStrNw):", this.mainStr);

    this.arn = String(this.mainStr).toLowerCase();
    this.iam;
    try {
      this.iam = JSON.parse(
        ObjectConvertor.newConvert([[String(this.mainStr)]], ["file"], autoGlobe.functionRegistry.time),
      );
      // console.log("iam = " + this.iam, autoGlobe.executed++);
      // console.log("DriveFiles: iam successfully parsed:", this.iam);
      if (this.iam && this.iam[0] && this.iam[0]["file"]) {
        console.log('DriveFiles: iam[0]["file"] is:', this.iam[0]["file"]);
      } else {
        console.warn(
          'DriveFiles: iam or iam[0]["file"] is invalid after parsing.',
        );
      }
    } catch (e) {
      console.error("DriveFiles: Error parsing iam JSON:", e);
      this.filedMain = null; // Return null if JSON parsing fails
    }
    this.crmCalcResult = ObjectConvertor.newCRMCalc(this.iam[0]["file"] || this.arn);
    console.log("crmCalcResult = " + this.crmCalcResult, autoGlobe.executed++);
    console.log(
      "DriveFiles: crmCalc result (index of found function or -1): " +
        this.crmCalcResult,
    );
    // If crmCalcResult is 0 or positive (meaning a function was found),
    // then we stop execution and return null as per your desired guard logic.
    if (this.crmCalcResult >= 0) {
      console.log(
        "DriveFiles: Matching function name found (index: " +
          this.crmCalcResult +
          "). Stopping further DriveApp execution.",
      );
      this.filedMain = null;
    } 
    else {
      // If crmCalcResult is -1 (meaning no function was found),
      // then we proceed with the DriveApp search using DriveApp.searchFiles().
      console.log(
        "DriveFiles: No matching function name found. Proceeding with efficient DriveApp search.",
      );
      this.dataTree = [];
      this.targetFile = this.iam[0] && this.iam[0]["file"] ? this.iam[0]["file"] : null;

      if (!this.targetFile) {
        console.warn(
          "DriveFiles: targetFile is invalid. Cannot perform DriveApp search. Returning null.",
        );
        this.filedMain = null;
      }
      // --- EFFICIENT DRIVEAPP SEARCH USING DriveApp.searchFiles() ---
      // Construct the search query. 'title contains' searches file names.
      // Use the exact targetFile for the query.
      this.searchQuery = 'title contains "' + this.targetFile + '"';
      console.log(
        "DriveFiles: Performing DriveApp search with query:",
        this.searchQuery,
      );
      try {
        this.files = DriveApp.searchFiles(this.searchQuery);
        console.log("event; DriveApp search result: ", this.files.hasNext())

        if (this.files && this.files?.hasNext()) {
          while (this.files.hasNext()) {
            this.file = this.files.next();
            this.fiTitle = this.file.getName();
            this.fileUrl = this.file.getUrl();
            this.dataTree.push(this.fileUrl);
          }
        }
      } catch (e) {
        console.error("DriveFiles: Error during DriveApp search:", e);
        this.filedMain = null; // Handle search errors gracefully
      }
      console.log(
        "DriveFiles: Final dataTree length after search:",
        this.dataTree.length,
      );
      if (this.dataTree.length > 0) {
        this.rndFiledMain = Math.floor(Math.random() * this.dataTree.length);
        this.filedMain = this.dataTree[this.rndFiledMain];
        console.log(
          "DriveFiles: Returning a random found file URL:",
          this.filedMain,
        );
      } 
      else {
        if (this.dataTree.length === 0) {
          console.warn(
            "DriveFiles: No matching files found after DriveApp search. Returning null.",
          );
          // this.dataTree = [];
          // this.options = { muteHttpExceptions: true };
          // this.data = null;
          // try {}
          // catch(fromResponse) {}
          // this.data = getUrlResponse(this.mainStr, this.options)?.app;
          // console.log("data = " + this.data, autoGlobe.executed++);
          // if (!this.data) {
            // --- EFFICIENT DRIVEAPP SEARCH USING DriveApp.searchFiles() ---
            // Construct the search query. 'title contains' searches file names.
            // Use the exact targetFile for the query.
            // this.searchQuery = 'title contains "' + this.mainStr + '"';
            // console.log(
            //   "DriveFiles: Performing DriveApp search with query:",
            //   this.searchQuery,
            // );
            // try {
            //   this.files = DriveApp.searchFiles(this.searchQuery);

            //   while (this.files.hasNext()) {
            //     this.file = this.files.next();
            //     this.fiTitle = this.file.getName();
            //     this.fileUrl = this.file.getUrl();
            //     this.dataTree.push(this.fileUrl);
            //   }
            // } catch (e) {
            //   console.error("driveManager: Error during DriveApp search:", e);
            //   this.filedMain = null; // Handle search errors gracefully
            // }
            console.log(
              "DriveFiles: Final dataTree length after search:",
              this.dataTree.length,
            );
            if (this.dataTree.length > 0) {
              this.rndFiledMain = Math.floor(Math.random() * this.dataTree.length);
              this.filedMain = this.dataTree[this.rndFiledMain];
              console.log(
                "DriveFiles: Returning a random found file URL:",
                this.filedMain,
              );
            }
            // else {
              // if (this.dataTree.length === 0) {
                // autoGlobe.executed++;
                // this.filedSide = createFormFunction(this.strNw);
                // this.funcKeys = Object.keys([this.filedSide]);
                // this.funcUrl = null;
                // this.funcKeys.forEach((key) => {
                //   this.funcObj = [this.filedSide][key];
                //   this.funcUrl = this.funcObj[0];
                // });
              // }
            // }
          // }
          // else {
            // this.filedMain = this.mainStr;
          // }
        }
      }
    }
  }
}

class ObjectConvertor {
  constructor(rows, headings, time) {
    // super(rows, time);
    this.rows = rows || this.mainStr;
    this.headings = headings || ["file"];
    this.time = time || autoGlobe.functionRegistry.time;
    // console.log(
    //   formatTime(autoGlobe.functionRegistry.time) +
    //     "\nrows is !" +
    //     !this.rows +
    //     ", = " +
    //     this.rows[0] +
    //     "\nheadings is !" +
    //     !this.headings +
    //     ", = " +
    //     this.headings +
    //     "\ntime is !" +
    //     !this.time +
    //     ", = " +
    //     this.time,
    // );
    // this.temp = this.rows?.reduce(
    //   function (ctx, row) {
    //     ctx.objects.push(
    //       ctx.headings.reduce(function (item, heading, index) {
    //         item[heading] = row[index];
    //         return item;
    //       }, {}),
    //     );
    //     this.myObj = {};
    //     this.headings.forEach(function (heading, index) {
    //       this.myObj[heading] = [row][index];
    //     });
    //     return ctx;
    //   },
    //   {
    //     objects: [],
    //     headings,
    //   },
    // ).objects;
    // this.newObj = JSON.stringify(this.temp);
  };
  static newConvert(rows, headings, time) {
    // console.log(
    //   formatTime(autoGlobe.functionRegistry.time) +
    //     "\n" +
    //     arguments.callee.name +
    //     "\nrows is !" +
    //     !rows +
    //     ", = " +
    //     rows[0] +
    //     "\nheadings is !" +
    //     !headings +
    //     ", = " +
    //     headings +
    //     "\ntime is !" +
    //     !time +
    //     ", = " +
    //     time,
    // );
    var temp = rows.reduce(
      function (ctx, row) {
        ctx.objects.push(
          ctx.headings.reduce(function (item, heading, index) {
            item[heading] = row[index];
            return item;
          }, {}),
        );
        var myObj = {};
        headings.forEach(function (heading, index) {
          myObj[heading] = [row][index];
        });
        return ctx;
      },
      {
        objects: [],
        headings,
      },
    ).objects;
    return JSON.stringify(temp);
  }

  static newCRMCalc(func) {
    console.log(
      "boilerplate Help: line 232\ncrmCalc(func: " +
        func +
        ") ",
    );
    var appList = [];
    for (var key in globalThis) {
      if (typeof globalThis[key] == "function") {
        appList.push(key);
      }
    }
    var lowCapApp = appList.map(function (item) {
      return item.toLowerCase();
    });
    var lowCapFunc;
    if (Array.isArray(func)) {
      lowCapFunc = func.join("").toLowerCase().split(",");
    } else if (typeof func === "string" && func) {
      lowCapFunc = func.toLowerCase();
    }
    console.log(
      "\nlowCapFunc is !" +
        !lowCapFunc +
        ", = " +
        lowCapFunc,
    );
    var funFact;
    if (Array.isArray(lowCapFunc)) {
      funFact = lowCapApp.indexOf(lowCapFunc[0]);
    } else if (typeof lowCapFunc === "string" && lowCapFunc) {
      funFact = lowCapApp.indexOf(lowCapFunc);
    }
    return funFact;
  }
}

class ValidUrlResult {
  constructor(text) {
    // super();
    this.text = text;
    console.log(
      "\nValidUrlResult(text: " +
        this.text +
        ": " +
        typeof this.text +
        ")",
    );
    this.validatedResult = {};
    this.validatedResult.protocol = "";
    this.validatedResult.hostname = "";
    this.validatedResult.pathname = "";
    this.validatedResult.query =  "";
    this.validatedResult.rndRes = [];
    this.validatedResult.matches = "";
    this.validatedResult.allMatches = "";
    if (typeof this.text !== "string" || this.text?.length === 0) {
      console.log("No url string or string length is 0!\nreturning: ",this.validatedResult)
    }
    else {
      this.urlRegex =
        /(https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*))|((?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*))/gi;
      this.regxRes = this.text.match(this.urlRegex);
      if (this.regxRes !== null) {
        this.validatedResult.matches = this.regxRes;
      }
      console.log("matches = " + this.validatedResult.matches);
      if (this.validatedResult.matches.length === 0) {
        // this.searchLinkDrive = new DriveFiles(this.text, autoGlobe.functionRegistry.time);
        // if (this.searchLinkDrive && this.searchLinkDrive.dataTree && this.searchLinkDrive.dataTree !== null && Array.isArray(this.searchLinkDrive.dataTree)) {
          this.validatedResult.matches = this.dataTree  //this.searchLinkDrive?.dataTree;
        // }
        console.log("matches to return = " + this.validatedResult.matches);
        // if (this.searchLinkDrive?.filedMain) {
        if (this?.filedMain) {
          autoGlobe.functionRegistry.vidTree();
          this.vidSheetVals = autoGlobe.functionRegistry.getVideoList();
          this.vidData = [];
          this.vidVals = Object.values(this.vidSheetVals);
          this.vidVals.forEach((val) => {
            this.inVVals = Object.values(val);
            this.inVVals.forEach((inV) => {
              this.truInv = autoGlobe.trueVfalse(inV);
              if (this.truInv) {
                this.vidData.push(inV);
              }
            });
          });
          // String(this.searchLinkDrive?.filedMain)?.forEach((fileUrl) => {
          Array(this?.filedMain)?.forEach((fileUrl) => {
            if (fileUrl && this.validatedResult.rndRes.indexOf(fileUrl) === -1) {
              if (this.vidData?.indexOf(fileUrl) !== -1) {
                this.validatedResult.rndRes.push(fileUrl);
              } 
              else {
                this.validatedResult.rndRes.push(fileUrl);
                updateQuote(
                  JSON.stringify({
                    name: "videoSheet",
                    number: parseInt("001", 8),
                    videoid: fileUrl,
                    videodescription: this.text,
                  }),
                );
              }
            }
          });
        }
      }
      console.log("rndRes = " + this.validatedResult.rndRes);
      this.validatedResult.allMatches = this.validatedResult.matches ? this.validatedResult.matches : this.validatedResult.rndRes;
      console.log(`allMatches = matches ? [...${this.validatedResult.allMatches}]`);
      if (this.validatedResult.allMatches?.length > 0) {
        this.tempUrlResult = {};
        this.tempUrlResult.currentProtocol = "";
        this.tempUrlResult.currentHostname = "";
        this.tempUrlResult.currentPathname = "";
        this.tempUrlResult.currentQuery = "";
        this.validatedResult?.allMatches?.forEach((url) => {
          this.protocolEnd = url.indexOf("://");
          if (this.protocolEnd !== -1) {
            this.tempUrlResult.currentProtocol = url.substring(0, this.protocolEnd + 3);
            url = url.substring(this.protocolEnd + 3);
          }
          // else {
          //   if (this.validatedResult.rndRes.length === 0) {
          //     this.searchLinkDrive = new DriveFiles(this.text, autoGlobe.functionRegistry.time);
          //     if (this.searchLinkDrive && this.searchLinkDrive.dataTree && this.searchLinkDrive.dataTree !== null && Array.isArray(this.searchLinkDrive.dataTree)) {
          //       this.validatedResult.matches = this.searchLinkDrive?.dataTree;
          //     }
          //     console.log("matches to return = " + this.validatedResult.matches);
          //     if (this.searchLinkDrive?.filedMain) {
          //       String(this.searchLinkDrive?.filedMain)?.forEach((fileUrl) => {
          //         if (fileUrl && this.validatedResult.rndRes.indexOf(fileUrl) === -1) {
          //           autoGlobe.functionRegistry.vidTree();
          //           this.vidSheetVals = autoGlobe.functionRegistry.getVideoList();
          //           this.vidData = [];
          //           this.vidVals = Object.values(this.vidSheetVals);
          //           this.vidVals.forEach((val) => {
          //             this.inVVals = Object.values(val);
          //             this.inVVals.forEach((inV) => {
          //               this.truInv = autoGlobe.trueVfalse(inV);
          //               if (this.truInv) {
          //                 this.vidData.push(inV);
          //               }
          //             });
          //           });
          //           if (this.vidData?.indexOf(fileUrl) !== -1) {
          //             this.validatedResult.rndRes.push(fileUrl);
          //           } 
          //           else {
          //             this.validatedResult.rndRes.push(fileUrl);
          //             updateQuote(
          //               JSON.stringify({
          //                 name: "videoSheet",
          //                 number: parseInt("001", 8),
          //                 videoid: fileUrl,
          //                 videodescription: this.text,
          //               }),
          //             );
          //           }
          //         }
          //       });
          //       this.validatedResult.matches = this.searchLinkDrive?.dataTree
          //       this.tempUrlResult.currentProtocol = this.searchLinkDrive?.filedMain.substring(0, this.protocolEnd + 3);
          //       url = this.searchLinkDrive?.filedMain.substring(this.protocolEnd + 3);
          //     }
          //     else {
          //       if (!this.searchLinkDrive?.filedMain) {
          //         this.tempUrlResult.currentProtocol = url.substring(0, this.protocolEnd + 3);
          //         url = url.substring(this.protocolEnd + 3);
          //       }
          //     }
          //   }
          //   else {
          //     if (this.validatedResult.rndRes.length > 0) {
          //       this.tempUrlResult.currentProtocol = this.validatedResult.rndRes[0].substring(0, this.protocolEnd + 3);
          //       url = this.validatedResult.rndRes[0].substring(this.protocolEnd + 3);
          //     }
          //   }
          // }
          this.hostnameEnd = url.indexOf("/");
          if (this.hostnameEnd !== -1) {
            this.tempUrlResult.currentHostname = url.substring(0, this.hostnameEnd);
            this.tempUrlResult.currentPathname = url.substring(this.hostnameEnd);
          } else {
            this.tempUrlResult.currentHostname = url;
          }
          this.queryStart = this.validatedResult.pathname.indexOf("?");
          if (this.queryStart !== -1) {
            this.currentQuery = this.validatedResult.pathname.substring(this.queryStart);
            this.currentPathname = this.validatedResult.pathname.substring(0, this.queryStart);
          }
          this.hostnameRegex =
            /^([a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]+$|^localhost$/;
          if (this.tempUrlResult.currentHostname && this.hostnameRegex.test(this.tempUrlResult.currentHostname)) {
            if (this.tempUrlResult.currentProtocol && this.tempUrlResult.currentHostname) {
              this.validatedResult.protocol = this.tempUrlResult.currentProtocol;
              this.validatedResult.hostname = this.tempUrlResult.currentHostname;
              this.validatedResult.pathname = this.tempUrlResult.currentPathname;
              this.validatedResult.query = this.tempUrlResult.currentQuery;
              this.validatedResult.url =
                this.tempUrlResult.currentProtocol +
                this.tempUrlResult.currentHostname +
                this.tempUrlResult.currentPathname +
                this.tempUrlResult.currentQuery;
            }
          }
        });
      }
    }
  }
}
let autoGlobe = new GetDomains()
// console.log(autoGlobe.globalThis[autoGlobe.argsX[0]].apply(this, autoGlobe.content));
    // Set some global variables
autoGlobe.functionRegistry.initialize();
autoGlobe.functionRegistry.startProcessTimer();

var geneicType = function (e) {
  let data = null;
  let base = null;
  let dataOR = null;
  let executed = autoGlobe.executed;
  if (e && ((typeof e === "object" &&  Object.keys(e).length > 0) || (typeof e === "string" && String(e).length > 0))) {
    data = funcHandle(e);
  }
  else {
    let rndCustomer = autoGlobe.customOrder[autoGlobe.numVarRnd];
    let customGroup = autoGlobe.functionRegistry.fileList.map((customerWk1) => {
      if (String(customerWk1).indexOf(rndCustomer) === 0) {
        return autoGlobe.functionRegistry.fileList.indexOf(customerWk1)
      }
    }).filter((isIn) => {
      return isIn != null
    });
    // console.log("These is the customGroup", customGroup);
    let pSort = customGroup.sort((a,b) => {
        let i = Math.random()
        let tSorted = a;
        let zSorted = b;
        if (i < .3) {
          return zSorted - tSorted
        }
        else {
          i = Math.random()
          if (i > .3 && i < .5 ) {
            return tSorted - zSorted
          }
          else {
            i = Math.random()
            if (i > .5 && i < .8) {
              return zSorted
            }
            else {
              i = Math.random()
              if (i > .8) {
                return tSorted
              }
            }
          }
        }
      })
    // console.log("These is the sorted customGroup", pSort);
    let tempObj = autoGlobe.functionRegistry?.paramsList[Math.floor(Math.random() * Math.floor(pSort.length))];
    // let misStCallParameters = null
    // if (tempObj?.parameters) {
    //   misStCallParameters = Array(tempObj?.name,tempObj?.parameters)
    // }
    // else {
    //   misStCallParameters = tempObj?.name
    // }
    data = new MisStCreator(Array(tempObj?.name,tempObj?.parameters));
  //   base = new MisStCreator(data.funcUno + "," + data.funcDos)?.argsObject.res;
  //   console.log("What is type of base variable ", typeof base);
  //   if (typeof base === "string") {
  //     if (String(base).length > 0) {
  //       dataOR = globalHandleGetData(base);
  //       return dataOR
  //     }
  //     else {
  //       return {payload: base}
  //     }
  //   }
  //   else {
  //     if (Array.isArray(base)) {
  //       if (base.length !== 0) {
  //         dataOR = globalHandleGetData(base);
  //         return dataOR
  //       }
  //       else {
  //         return {payload: base}
  //       }
  //     }
  //     else {
  //       if (typeof base === "object") {
  //         if (base !== null && Object.keys(base).length > 0 && !base?.myVar && !base?.myNewArr && !Object.keys(base)[0]?.rndTitle && typeof Object.keys(base)[0] !== "number") {
  //           dataOR = globalHandleGetData(base);
  //           return dataOR
  //         }
  //         else {
  //           return {payload: base}
  //         }
  //       }
  //       else {
  //         data = funcHandle();
  //       }
  //     }
  //   }
  }
  let handles = null; 
  let exampleObjectType = {
    a: Array.isArray(data?.funcDos)? data?.funcDos[0] : "String",
    b: Array.isArray(data?.funcDos)? data?.funcDos[1] : 123,
    c: Array.isArray(data?.funcDos)? data?.funcDos[3] : ["String"],
  };
  let chopSort = data
  ?.argsObject?.args?.sort((a,b) => {
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
          base = globalThis["vidPlaylist"]?.apply(this, [rndWord()]);
        }
        else {
          // eQueryObject = {
          //   parameter: {
          //     q: data?.argsObject?.func + "," + data?.argsObject?.args,
          //   }
          // };
          // eQueryObject = {parameter: {q: "http://politico.com"}}
          // data = funcHandle(eQueryObject);
          // handles =  tempObj
          console.log("data = " + JSON.stringify(data?.argsObject?.func), executed++);
          if (data?.argsObject?.func?.length === 0 && data?.argsObject?.args?.length === 0) {
            base = data?.argsObject?.res;
          }
          else {
            if (data?.tempObj?.argsObject?.app?.length === 0) {
              base = data?.tempObj?.argsObject?.index?.res
            }
            else {
              // let funcU = data.funcUno;
              base = data?.argsObject?.res || data?.tempObj?.argsObject?.app;
              // let funcD = autoP.resolvedArgs.length > 0?  autoP.resolvedArgs:data.funcDos;
              // base = new RawFuncResult(funcU, funcD).rawFuncResult;
            }
          }
        }
        // if (typeof base === "string") {
        //   if (String(base).length > 0) {
        //     dataOR = globalHandleGetData(base);
        //     return dataOR
        //   }
        //   else {
        //     return {payload: base}
        //   }
        // }
        // else {
        //   if (Array.isArray(base)) {
        //     if (base.length !== 0) {
        //       dataOR = globalHandleGetData(base);
        //       return dataOR
        //     }
        //     else {
        //       return {payload: base}
        //     }
        //   }
        //   else {
        //     if (typeof base === "object" && !Array.isArray(base)) {
        //       if (base !== null && Object.keys(base).length > 0 && !base?.myVar && !base?.myNewArr && !Object.keys(base)[0]?.rndTitle && typeof Object.keys(base)[0] !== "number") {
        //         dataOR = globalHandleGetData(base);
        //         return dataOR
        //       }
        //       else {
        //         return {payload: base}
        //       }
        //     }
            // else {
              // eQueryObject = {parameter: {q: "sigma"}}
              // data = funcHandle(eQueryObject);
              // console.log("data = " + JSON.stringify(data), executed++);
              // if (data?.funcUno?.length === 0 && data?.funcDos?.length === 0) {
              //   base = data;
              // }
              // else {
              //   base = new MisStCreator(data.funcUno + "," + data.funcDos)?.argsObject.res;
              // }
              if (typeof base === "string") {
                if (String(base).length > 0) {
                  dataOR = globalHandleGetData(base);
                  // let organizeIt = new Renderer("<div>Hello World!</div>", dataOR.pL.data,dataOR.title);
                  // let renderIt =
                  return dataOR
                }
                else {
                  return {payload: base}
                }
              }
              else {
                if (Array.isArray(base)) {
                  if (base.length !== 0) {
                    dataOR = globalHandleGetData(base);
                    // let organizeIt = new Renderer("<div>Hello World!</div>", dataOR.pL.data,dataOR.title);
                    return dataOR
                  }
                  else {
                    return {payload: base}
                  }
                }
                else {
                  if (typeof base === "object" && !Array.isArray(base)) {
                    if (base !== null && Object.keys(base).length > 0 && !base?.myVar && !base?.myNewArr && !Object.keys(base)[0]?.rndTitle && typeof Object.keys(base)[0] !== "number") {
                      dataOR = globalHandleGetData(base);
                      // let organizeIt = new Renderer("<div>Hello World!</div>", dataOR.pL.data,dataOR.title);
                      return dataOR
                    }
                    else {
                      return {payload: base}
                    }
                  }
                  else {
                    let uItems = autoGlobe.uniqueItemArray()
                    var noSearch = uItems[Math.floor(Math.random() * Object.keys(uItems.length).length)].Description;
                    base = new MisStCreator(Array(["vidPlaylist"] + "," + [noSearch]))?.argsObject.res;
                    if (typeof base === "string") {
                      if (String(base).length > 0) {
                        dataOR = globalHandleGetData(base);
                        // let organizeIt = new Renderer("<div>Hello World!</div>", dataOR.pL.data,dataOR.title);
                        return dataOR
                      }
                      else {
                        return {payload: base}
                      }
                    }
                    else {
                      if (Array.isArray(base)) {
                        if (base.length !== 0) {
                          dataOR = globalHandleGetData(base);
                          // let organizeIt = new Renderer("<div>Hello World!</div>", dataOR.pL.data,dataOR.title);
                          return dataOR
                        }
                        else {
                          return {payload: base}
                        }
                      }
                      else {
                        if (typeof base === "object" && !Array.isArray(base)) {
                          if (base !== null && Object.keys(base).length > 0 && !base?.myVar && !base?.myNewArr && !Object.keys(base)[0]?.rndTitle && typeof Object.keys(base)[0] !== "number") {
                            dataOR = globalHandleGetData(base);
                            // let organizeIt = new Renderer("<div>Hello World!</div>", dataOR.pL.data,dataOR.title);
                            return dataOR
                          }
                          else {
                            return {payload: base}
                          }
                        }
                        else {
                          data = funcHandle(eQueryObject);
                        }
                      }
                    }
                  }
                }
              }
            // }
          // }
        // }
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
        // let tempObj = funcHandle(e);
        // handles =  tempObj
        // console.log("handles = " + JSON.stringify(handles), executed++);
        console.log("data = " + JSON.stringify(data), executed++);
        if (data?.funcUno?.length === 0 && data?.funcDos?.length === 0) {
          base = data;
        }
        else {
          base = new MisStCreator(data.funcUno + "," + data.funcDos)?.argsObject.res;
        }
        if (typeof base === "string") {
          if (String(base).length > 0) {
            dataOR = globalHandleGetData(base);
            return dataOR
          }
          else {
            return {payload: base}
          }
        }
        else {
          if (Array.isArray(base)) {
            if (base.length !== 0) {
              dataOR = globalHandleGetData(base);
              return dataOR
            }
            else {
              return {payload: base}
            }
          }
          else {
            if (typeof base === "object" && !Array.isArray(base)) {
              if (base !== null && Object.keys(base).length > 0 && !base?.myVar && !base?.myNewArr && !Object.keys(base)[0]?.rndTitle && typeof Object.keys(base)[0] !== "number") {
                dataOR = globalHandleGetData(base);
                return dataOR
              }
              else {
                return {payload: base}
              }
            }
            else {
              data = funcHandle(eQueryObject);
              console.log("data = " + JSON.stringify(data), executed++);
              if (data?.funcUno?.length === 0 && data?.funcDos?.length === 0) {
                base = data;
              }
              else {
                base = new MisStCreator(data.funcUno + "," + data.funcDos)?.argsObject.res;
              }
              if (typeof base === "string") {
                if (String(base).length > 0) {
                  dataOR = globalHandleGetData(base);
                  return dataOR
                }
                else {
                  return {payload: base}
                }
              }
              else {
                if (Array.isArray(base)) {
                  if (base.length !== 0) {
                    dataOR = globalHandleGetData(base);
                    return dataOR
                  }
                  else {
                    return {payload: base}
                  }
                }
                else {
                  if (typeof base === "object" && !Array.isArray(base)) {
                    if (base !== null && Object.keys(base).length > 0 && !base?.myVar && !base?.myNewArr && !Object.keys(base)[0]?.rndTitle && typeof Object.keys(base)[0] !== "number") {
                      dataOR = globalHandleGetData(base);
                      return dataOR
                    }
                    else {
                      return {payload: base}
                    }
                  }
                  else {
                    base = new MisStCreator(Array(["vidPlaylist"] + "," + [rndWord()]))?.argsObject.res;
                    if (typeof base === "string") {
                      if (String(base).length > 0) {
                        dataOR = globalHandleGetData(base);
                        return dataOR
                      }
                      else {
                        return {payload: base}
                      }
                    }
                    else {
                      if (Array.isArray(base)) {
                        if (base.length !== 0) {
                          dataOR = globalHandleGetData(base);
                          return dataOR
                        }
                        else {
                          return {payload: base}
                        }
                      }
                      else {
                        if (typeof base === "object" && !Array.isArray(base)) {
                          if (base !== null && Object.keys(base).length > 0 && !base?.myVar && !base?.myNewArr && !Object.keys(base)[0]?.rndTitle && typeof Object.keys(base)[0] !== "number") {
                            dataOR = globalHandleGetData(base);
                            return dataOR
                          }
                          else {
                            return {payload: base}
                          }
                        }
                        else {
                          data = funcHandle(eQueryObject);
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    else {
      if (i > .3 && i < .7) {
        if (!e) {
          if (i > .4 && i < .6) {
            return globalThis[autoGlobe.argsX[0]].apply(this, autoGlobe.content);
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
        }
      }
      else {
        if (i > .6) {
          if (!e) {
            if (i > .8) {
              base = globalThis[autoGlobe.argsX[0]].apply(this, autoGlobe.content);
            }
            else {
              eQueryObject = {
                parameter: {
                  file: autoGlobe.functionRegistry.htmlArray[Math.floor(Math.random() * autoGlobe.functionRegistry.htmlArray.length)]
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
              dataOR = globalHandleGetData(base);
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
              dataOR = globalHandleGetData(base);
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
    // console.log(Object.getOwnPropertyNames(autoGlobe));
    // console.log(Object.getPrototypeOf(autoGlobe));
    // GameManager.setGameStart("Warrior");
    // let mmoRpgPlay = GameManager.setGameStart.instances[0];
    // let mmoRpgEnemy = GameManager.setGameStart.instances[1];
    // GameManager.setGameStart.instances.forEach((instance) => {
    //   console.log(`${JSON.stringify(instance)}`)
    // })
    // var numVarRnd = Math.floor(Math.random() * 25);
    // var functionObjectType = resolveParams(["isOmit",["e","b"],"isPick",["e","a"],"isExclude",["e","c"],"IsMapped.mapout",["e","f"],"isPropertyOf","e","isKeyOf","e","autoGlobe.trueVfalse","e",,"isTypeScript","e","isValidDoubleObject",{a:"e",b:"e"}]);
    // var functionObjectType = resolveParams(["dtlsPro","bounty","portBing","hunter"]);
    // let randomWord = rndWord();
    // let tyFile = wsSIPOC(randomWord);
    // console.log(tyFile.split(">")[1].split("<")[0]);
    // let arrDRnd = appSort(randNum(randomWord));
    // let searchResult = randomSubstance(0, 1, ["kVar", "kiloPoint"]).myNewArr;
    // let result = autoGlobe.functionRegistry.paramsList.find((rndS) => {
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
    //   dataOR = globalHandleGetData(base);
    //   return dataOR
    // }
    // else {
    //   return {payload: base}
    // }
    // autoGlobe.functionRegistry.domainTree();
    // let kilo = contentCDN(dataOR.message.content, {payL: dataOR})
    // let fileParams = autoGlobe.functionRegistry.paramsList[fileIndex];
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
    //   dataOR = globalHandleGetData(base);
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
