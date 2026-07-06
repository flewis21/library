class RandomArray extends AutoParams {
  constructor() {
    super();
    let titleArray = projectP;
    let arrData = freqP.customOrder;
    let numLen = [
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
      21, 22, 23, 24, 25,
    ]; // Assuming numVarRnd isn't global yet or needs handling
    var rndNumLen = numLen[Math.floor(Math.random() * numLen.length)]; // Pick a random index

    var targetLetter = arrData[rndNumLen]; // The letter we're looking for functions starting with

    var freqArray = [];
    // Correct way to filter or iterate and build freqArray
    for (let i = 0; i < titleArray.fileList.length; i++) {
      const funcName = titleArray.fileList[i];
      if (funcName[0] && funcName[0].toLowerCase() === targetLetter) {
        if (freqArray.indexOf(funcName) === -1) {
          // Check if not already added
          freqArray.push(funcName);
        }
      }
    }
    this.freqArray = freqArray
  }
}
let rndArrayP = new RandomArray();

class SearchStrings {
  constructor() {
    let arrDRnd = rndArrayP;
    let arrD = rndArrayP;
    let newArr = [];
    let i = 0 || 0;
    let l = 6 || 1;
    if (arrDRnd.freqArray) {
      for (i, l; i < l; i++) {
        if (typeof arrDRnd.freqArray!== "undefined" && typeof arrDRnd.freqArray !== "string") {
          let myImportData = arrDRnd.freqArray.sort((a, b) => a - b)[
            Math.floor(Math.random() * arrDRnd.freqArray.length)
          ];
          newArr.push(myImportData);
        } 
        else {
          if (typeof arrDRnd.freqArray !== "undefined" && typeof arrDRnd.freqArray !== "string") {
            let myImportData = arrDRnd.freqArray.sort((a, b) => a - b)[
              Math.floor(Math.random() * arrDRnd.freqArray.length)
            ];
            newArr.push(myImportData);
          } 
          else {
            if (
              typeof arrDRnd.freqArray !== "undefined" &&
              typeof arrDRnd.freqArray === "string"
            ) {
              let myImportData = [arrDRnd.freqArray].sort((a, b) => {
                let pA = freqPriority.get(a);
                let pB = freqPriority.get(b);
                return pA - pB;
              })[Math.floor(Math.random() * [arrDRnd.freqArray].length)];
              newArr.push(myImportData);
            }
          }
        }
      }
      if (newArr) {
        let sortNewArr = newArr.sort((a, b) => {
          let pA = freqP.freqPriority.get(a);
          let pB = freqP.freqPriority.get(b);
          return pA - pB;
        })[Math.floor(Math.random() * newArr.length)];
        this.myNewArr = sortNewArr;
      }
    }
  }
}
let strSearch = new SearchStrings();

class FunctionHandle {
  constructor(e) {
    this.e = e;
    this.executed = 0;
    this.rndE = "";
    this.mapArr = {};

    // Logging
    if (!this.e) {
      this.mapArr[autoP?.argsX] = [];
      console.log("The existance of autoP fParams is ", autoP.fParams? true:false);
      // autoP.fParams
      //   ? this.rndE = new IsMapped(this.mapArr, [...autoP?.fParams]).mapKeys
      //     :
      //     this.rndE = new IsMapped(this.mapArr, []).mapKeys
      if (autoP?.fParams && autoP?.fParams?.length > 0) {
        this.rndE = new IsMapped(this.mapArr, [...autoP?.fParams]).mapKeys;
      }
      else {
        this.rndE = new IsMapped(this.mapArr, []).mapKeys;
      }
      console.log("rndE = " + JSON.stringify(this.rndE), this.executed++);
    }
    else {
      if (this.e && !this.e.parameter) {
        autoP = new ResolveParameters(this.e);
        this.mapArr[autoP?.searchResult?.name || autoP.func] = [];
        if (autoP?.searchResult?.parameters) {
          this.rndE = new IsMapped(this.mapArr, [...autoP?.searchResult?.parameters] || [autoP.func]).mapKeys;
        }
        else {
          this.rndE = new IsMapped(this.mapArr, []).mapKeys;
        }
        console.log("rndE = " + JSON.stringify(this.rndE), this.executed++);
      }
      else {
        if (this.e && this.e.parameter) {
          this.objData = Object.keys(this.e.parameter);
          console.log("objData = " + this.e.parameter[this.objData[0]], this.objData);
          if (this.objData.length === 0) {
            autoP = autoP;
            this.mapArr[autoP?.searchResult?.name || autoP.func] = [];
            if (autoP?.searchResult?.parameters) {
            }
            else {
            }
            this.rndE = new IsMapped(this.mapArr, [...autoP?.searchResult?.parameters] || [autoP.func]).mapKeys;
            console.log("rndE = " + JSON.stringify(this.rndE), this.executed++);
            if (typeof this.rndE === "string") {
              this.e = objectOfS(
                ["parameter"],
                [
                  [
                    ["func", this.rndE],
                  ],
                ],
                autoP.functionRegistry.time,
              );
            }
            else {
              if (typeof this.rndE === "object" && this.rndE !== null) {
                this.rndEAP = Object.values(this.rndE);
                if (this.rrndEAP && this.rndEAP.length > 0) {
                  this.e = objectOfS(
                    ["parameter"],
                    [
                      [
                        ["func", Object.keys(this.rrndEAP)[0]],
                        ["args", Object.values(this.rrndEAP)[0]],
                      ],
                    ],
                    autoP.functionRegistry.time,
                  );
                } 
                else {
                  this.e = objectOfS(
                    ["parameter"],
                    [
                      [
                        ["func", Object.keys(this.rrndEAP)[0]],
                      ],
                    ],
                    autoP.functionRegistry.time,
                  );
                }
              }
              else {
                console.log("Unexpected rndE type: ", this.rndE);
                this.e = objectOfS(
                  ["parameter"],
                  [
                    [
                      ["func", "aVar"],
                      ["args", "varA"],
                    ],
                  ],
                  autoP.functionRegistry.time,
                );
              }
            }
            console.log(JSON.stringify(this.e));
          }
          else {
            if (this.objData.length > 0) {
              if (this.objData.indexOf("file") > -1) {
                console.log(">>> [LIBRARY] LIBRARY REQUEST: " + JSON.stringify(this.e));
                console.log(
                  "Determined that funcTres execution is requested! \n" +
                    this.e.parameter["file"],
                );
                this.funcTres = this.e?.parameter["file"];
                try {
                  this.htmlArray = autoP.functionRegistry.getHtmlList();
                  this.rndHtmlIndex = Math.floor(Math.random() * Math.floor(this.htmlArray.length));
                  this.rndPage = this.htmlArray[this.rndHtmlIndex];
                  this.htmlTresArg = null; // = rndPage; // Default value
                  console.log("htmlArray = " + this.htmlArray, this.executed++);
                  if (this.funcTres) {
                    if (Array.isArray(this.funcTres)) {
                      this.firstArg = this.funcTres[0];
                      if (this.htmlArray.includes(this.firstArg)) {
                        this.funcTres0Index = this.htmlArray.findIndex(function (element) {
                          return element === this.firstArg;
                        });
                        this.htmlTresArg = this.htmlArray[this.funcTres0Index];
                      }
                    } 
                    else {
                      if (this.htmlArray.includes(this.funcTres)) {
                        this.funcTresIndex = this.htmlArray.findIndex(function (element) {
                          return element === this?.funcTres;
                        });
                        this.htmlTresArg = this.htmlArray[this.funcTresIndex];
                      }
                    }
                  }
                  if (!this.htmlTresArg) {
                    try{
                      this.payLoad = {};
                      this.payLoad["type"] = "url";
                      this.payLoad["data"] = null;
                      if (!this.funcTres) {
                        this.htAml = getScriptUrl() + "?file=" + this.rndPage;
                        // return this.htAml;
                      } 
                      else {
                        this.fT = fileBrowser(null, this.funcTres);
                        this.payLoad.data = this.fT?.url
                        if (!this.fT?.url) {
                          this.dT = driveManager(this.funcTres)
                          this.payLoad.data = this.dT;
                        }
                        let options = {
                          muteHttpExceptions: true,
                        };
                        this.driveA = 
                          {
                            payL: 
                              {
                                pL: this.payLoad,
                              },
                          };
                        // this.payLoad.data["app"] = getUrlResponse(this.fT?.url || getScriptUrl(), options);
                        if (this.fT?.url) {
                          this.htAml = contCDN(this.fT.url, this.driveA);
                          return this.htAml
                        }
                        else {
                          if (this.dT) {
                            this.htAml = contCDN(this.dT, this.driveA);
                            return this.htAml;
                            // payLoad.data["app"] = getUrlResponse(dT, options);
                            // let hTAml = rendTemplate(
                            //   payLoad.data["app"]?.app,
                            //   {
                            //     pL: payLoad,
                            //   },
                            //   JSON.stringify(fT?.name || funcTres),
                            // );
                            // return hTAml
                          }
                          else {
                            if (!this.dT) {
                              this.htAml = contCDN(getScriptUrl(), this.driveA);
                              return this.htAml;
                            // payLoad.data["app"] = getUrlResponse(getScriptUrl(), options);
                            // let hTAml = rendTemplate(
                            //   payLoad.data["app"]?.app,
                            //   {
                            //     pL: payLoad,
                            //   },
                            //   JSON.stringify(fT?.name || funcTres),
                            // );
                            // return hTAml
                            }
                          }
                        }
                        // this.hTAml = RenderTemplate.templateRender(
                        //   this.payLoad.data["app"]?.app,
                        //   {
                        //     pL: this.payLoad,
                        //   },
                        //   isValidUrl(getScriptUrl()).pathname.split("/")[3],
                        // );
                        // return hTAml
                      }
                    }
                    catch (error) {
                      console.log("Requested template Out of Order", error.stack);
                    }
                  }
                  else { 
                    if (this.htmlTresArg) {
                      try {
                        this.driveA = 
                          {
                            fileParam: this.funcTres,
                          }
                        this.htAml = rendFile(
                          this.funcTres,
                          this.driveA,
                          isValidUrl(getScriptUrl()).pathname.split("/")[3],
                        );
                        return this.htAml;
                      } 
                      catch (error) {
                        Logger.log("Requested! HTML Out of Order", error.stack);
                      }
                    }
                  }
                } 
                catch (error) {
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
              else {
                if (!this.e.parameter["func"] && !this.e.parameter["args"]) {
                  if (typeof globalThis[this.e.parameter[this.objData[0]]] !== "function") {
                    this.argsEd = null;
                    if (this.e.parameter[this.objData[0]] && this.e.parameter[this.objData[0]]?.indexOf(",") > -1) {
                        this.argsEd = this.e.parameter[this.objData[0]]
                    }
                    else {
                      if (this.e.parameter[this.objData[0]] && this.e.parameter[this.objData[0]]?.indexOf(",") === -1) {
                        autoP = new ResolveParameters(this.e.parameter[this.objData[0]])  ;
                        this.mapArr[autoP?.searchResult?.name || autoP.func] = [];
                        if (autoP?.searchResult) {
                          this.argsEd = new IsMapped(this.mapArr, [...this?.tempObj?.searchResult?.parameters]).mapKeys;
                        }
                        else {
                          this.argsEd = autoP.func;
                        }
                      }
                    }
                    console.log("argsEd = " + JSON.stringify(this.argsEd), this.executed++);
                    if (typeof this.argsEd === "string") {
                      this.e = objectOfS(
                        ["parameter"],
                        [[["args", this.argsEd]]],
                        autoP.functionRegistry.time,
                      );
                      console.log("e = " + JSON.stringify(this.e), this.executed++);
                    } 
                    else {
                      if (typeof this.argsEd === "object" && this.argsEd !== null) {
                        this.argsAP = Object.values(this.argsEd);
                        if (this.argsAP && this.argsAP.length > 0) {
                          this.e = objectOfS(
                            ["parameter"],
                            [
                              [
                                ["func", Object.keys(this.argsEd)[0]],
                                ["args", [...Object.values(this.argsEd)[0]]],
                              ],
                            ],
                            autoP.functionRegistry.time,
                          );
                          console.log("e = " + JSON.stringify(this.e), this.executed++);
                        } 
                        else {
                          this.e = objectOfS(
                            ["parameter"],
                            [[["func", Object.keys(this.argsEd)[0]]]],
                            autoP.functionRegistry.time,
                          );
                          console.log("e = " + JSON.stringify(this.e), this.executed++);
                        }
                      } 
                      else {
                        console.log("Unexpected argsEd type: ", this.argsEd);
                        this.argsedObj = [];
                        try {
                          this.aOKeys = Object?.keys(this.argsEd);
                          if (this.aOKeys.length > 0) {
                            this.aOKeys.forEach((key) => {
                              this.argsedObj.push(this.argsEd[key]);
                            });
                            this.e = objectOfS(
                              ["parameter"],
                              [
                                [
                                  ["func", this.aOKeys],
                                  ["args", this.argsedObj],
                                ],
                              ],
                              autoP.functionRegistry.time,
                            );
                            console.log("e = " + JSON.stringify(this.e), this.executed++);
                          } 
                          else {
                            this.e = objectOfS(
                              ["parameter"],
                              [
                                [
                                  ["func", "aVar"],
                                  ["args", "varA"],
                                ],
                              ],
                              autoP.functionRegistry.time,
                            );
                            console.log("e = " + JSON.stringify(this.e), this.executed++);
                          }
                        }
                        catch (error) {
                          console.log("Error stack:\n", error.stack)
                        }
                      }
                    }
                  }
                  else {
                    if (typeof globalThis[this.e.parameter[this.objData[0]]] === "function") {
                      autoP = new ResolveParameters(this.e.parameter[this.objData[0]]);
                      this.mapArr[autoP?.searchResult?.name || autoP.func] = [];
                      if (autoP.searchResult?.parameters) {
                        this.argsEd = new IsMapped(this.mapArr, [...autoP?.searchResult?.parameters]).mapKeys;
                      }
                      else {
                        this.argsEd = new IsMapped(this.mapArr, []).mapKeys;
                      }
                      console.log("argsEd = " + JSON.stringify(this.argsEd), this.executed++);
                      if (typeof this.argsEd === "string") {
                        this.e = objectOfS(
                          ["parameter"],
                          [[["func", this.argsEd]]],
                          autoP.functionRegistry.time,
                        );
                        console.log("e = " + JSON.stringify(this.e), this.executed++);
                      } 
                      else {
                        if (typeof this.argsEd === "object" && this.argsEd !== null) {
                          this.argsAP = Object.values(this.argsEd);
                          if (this.argsAP && this.argsAP.length > 0) {
                            this.e = objectOfS(
                              ["parameter"],
                              [
                                [
                                  ["func", Object.keys(this.argsEd)[0]],
                                  ["args", [...Object.values(this.argsEd)[0]]],
                                ],
                              ],
                              autoP.functionRegistry.time,
                            );
                            console.log("e = " + JSON.stringify(this.e), this.executed++);
                          } 
                          else {
                            this.e = objectOfS(
                              ["parameter"],
                              [[["func", Object.keys(this.argsEd)[0]]]],
                              autoP.functionRegistry.time,
                            );
                            console.log("e = " + JSON.stringify(this.e), this.executed++);
                          }
                        } 
                        else {
                          console.log("Unexpected argsEd type: ", this.argsEd);
                          this.argsedObj = [];
                          this.aOKeys = Object.keys(this.argsEd);
                          if (this.aOKeys.length > 0) {
                            this.aOKeys.forEach((key) => {
                              this.argsedObj.push(this.argsEd[key]);
                            });
                            this.e = objectOfS(
                              ["parameter"],
                              [
                                [
                                  ["func", this.aOKeys],
                                  ["args", this.argsedObj],
                                ],
                              ],
                              autoP.functionRegistry.time,
                            );
                            console.log("e = " + JSON.stringify(this.e), this.executed++);
                          } 
                          else {
                            this.e = objectOfS(
                              ["parameter"],
                              [
                                [
                                  ["func", "aVar"],
                                  ["args", "varA"],
                                ],
                              ],
                              autoP.functionRegistry.time,
                            );
                            console.log("e = " + JSON.stringify(this.e), this.executed++);
                          }
                        }
                      }
                      console.log(JSON.stringify(this.e));
                    }
                    else {
                      console.log(">>> [LIBRARY] LIBRARY REQUEST: " + JSON.stringify(this.e));
                      console.log(
                        "Determined that funcTres execution is requested! \n" +
                          this.e.parameter[this.objData[0]],
                      );
                      this.funcTres = this.e.parameter[this.objData[0]];
                      try {
                        this.htmlArray = autoP.functionRegistry.getHtmlList();
                        this.rndHtmlIndex = Math.floor(Math.random() * Math.floor(this.htmlArray.length));
                        this.rndPage = this.htmlArray[this.rndHtmlIndex];
                        this.htmlTresArg; // = rndPage; // Default value
                        console.log("htmlArray = " + this.htmlArray, this.executed++);
                        if (this.funcTres) {
                          if (Array.isArray(this.funcTres)) {
                            this.firstArg = this.funcTres[0];
                            if (this.htmlArray.includes(this.firstArg)) {
                              this.funcTres0Index = this.htmlArray.findIndex(function (element) {
                                return element === this.firstArg;
                              });
                              this.htmlTresArg = this.htmlArray[this.funcTres0Index];
                            }
                          } 
                          else {
                            if (this.htmlArray.includes(this.funcTres)) {
                              this.funcTresIndex = this.htmlArray.findIndex(function (element) {
                                return element === this.funcTres;
                              });
                              this.htmlTresArg = this.htmlArray[this.funcTresIndex];
                            }
                          }
                        }
                        if (!this.htmlTresArg) {
                          try{
                            this.payLoad = {};
                            this.payLoad["type"] = "url";
                            this.payLoad["data"] = null;
                            if (this.funcTres === "undefined") {
                              this.hTAml = getScriptUrl() + "?file=" + this.rndPage;
                              // return this.htAml;
                            } 
                            else {
                              this.fT = fileBrowser(null, this.funcTres);
                              this.payLoad.data = this.fT?.url
                              if (!this.fT?.url) {
                                this.dT = driveManager(this.funcTres);
                                this.payLoad.data = this.dT;
                              }
                              let options = {
                                muteHttpExceptions: true,
                              };
                              this.driveA = 
                                {
                                  payL: 
                                    {
                                      pL: this.payLoad,
                                    },
                                };
                              if (this.fT?.url) {
                                this.htAml = contCDN(this.fT.url, this.driveA);
                                return this.htAml
                              }
                              else {
                                if (this.dT) {
                                  this.htAml = contCDN(this.dT, this.driveA);
                                  return this.htAml;
                                  // payLoad.data["app"] = getUrlResponse(dT, options);
                                  // let hTAml = rendTemplate(
                                  //   payLoad.data["app"]?.app,
                                  //   {
                                  //     pL: payLoad,
                                  //   },
                                  //   JSON.stringify(fT?.name || funcTres),
                                  // );
                                  // return hTAml
                                }
                                else {
                                  if (!this.dT) {
                                    this.htAml = contCDN(getScriptUrl(), this.driveA);
                                    return this.htAml;
                                  // payLoad.data["app"] = getUrlResponse(getScriptUrl(), options);
                                  // let hTAml = rendTemplate(
                                  //   payLoad.data["app"]?.app,
                                  //   {
                                  //     pL: payLoad,
                                  //   },
                                  //   JSON.stringify(fT?.name || funcTres),
                                  // );
                                  // return hTAml
                                  }
                                }
                              }
                              // this.payLoad.data["app"] = getUrlResponse(this.fT?.url || getScriptUrl(), options);
                              // this.hTAml = RenderTemplate.templateRender(
                              //   this.payLoad.data["app"]?.app,
                              //   {
                              //     pL: this.payLoad,
                              //   },
                              //   isValidUrl(getScriptUrl()).pathname.split("/")[3],
                              // );
                              // return hTAmla
                            }
                          }
                          catch (error) {
                            console.log("Requested template Out of Order", error.stack);
                          }
                        }
                        else { 
                          if (this.htmlTresArg) {
                            try {
                              this.driveA = 
                                {
                                  fileParam: this.funcTres,
                                }
                              this.htAml = rendFile(
                                this.funcTres,
                                this.driveA,
                                isValidUrl(getScriptUrl()).pathname.split("/")[3],
                              );
                              return this.htAml
                            } 
                            catch (error) {
                              Logger.log("Requested! HTML Out of Order", error.stack);
                            }
                          }
                        }
                      } 
                      catch (error) {
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
                  }
                }
              }
            }
          }
        }
      }
    } 
    if (this.e && this.e.parameter && (this.e.parameter["func"] && this.e.parameter["args"])) {
    this.funcUno = Array(this.e.parameter["func"]);
    this.funcDos = Array(this.e.parameter["args"]);
    }
    else {
      if (this.e && this.e.parameter && (this.e.parameter["func"] && !this.e.parameter["args"])) {
        this.funcUno = Array(this.e.parameter["func"]);
        this.funcDos = Array(null);
      } 
      else {
        if (this.e && this.e.parameter && (!this.e.parameter["func"] && this.e.parameter["args"])) {
          this.funcUno = Array(null);
          this.funcDos = Array(this.e.parameter["args"]);
        }  
        else {
          this.funcUno = Object.keys(this.rndE);
          this.funcDos = Object.values(this.rndE);
        }
      } 
    }
    console.log("exec and args\n" + [this.funcUno, this.funcDos], this.executed++);
    // return {
    //   exec: funcUno,
    //   args: funcDos,
    // };
  }
  static handleFunction(e) {
    var executed = 0;
    let funchAP = autoP;
    let rndE = "";
    let mapArr = {};

    // Logging
    if (!e) {
      let tempObj = autoP;
      mapArr[tempObj?.searchResult?.name || tempObj.func] = [];
      rndE = new IsMapped(mapArr, [...tempObj?.searchResult?.parameters] || [tempObj.func]).mapKeys;
      console.log("rndE = " + JSON.stringify(rndE), executed++);
    } 
    else { 
      if (e && !e.parameter) {
        let tempObj = new ResolveParameters(e);
        mapArr[tempObj?.searchResult?.name || tempObj.func] = [];
        rndE = new IsMapped(mapArr, [...tempObj?.searchResult?.parameters] || [tempObj.func]).mapKeys;
        console.log("rndE = " + JSON.stringify(rndE), executed++);
      } 
      else {
        if (e && e.parameter) {
        let objData = Object.keys(e.parameter);
        console.log("objData = " + e.parameter[objData[0]], objData);
        if (objData.length === 0) {
          let tempObj = autoP;
          mapArr[tempObj?.searchResult?.name || tempObj.func] = [];
          rndE = new IsMapped(mapArr, [...tempObj?.searchResult?.parameters] || [tempObj.func]).mapKeys;
          console.log("rndE = " + JSON.stringify(rndE), executed++);
          if (typeof rndE === "string") {
            e = objectOfS(
              ["parameter"],
              [
                [
                  ["func", rndE],
                ],
              ],
              funchAP.functionRegistry.time,
            );
          }
          else {
            if (typeof rndE === "object" && rndE !== null) {
              let rndEAP = Object.values(rndE);
              if (rrndEAP && rndEAP.length > 0) {
                e = objectOfS(
                  ["parameter"],
                  [
                    [
                      ["func", Object.keys(rrndEAP)[0]],
                      ["args", Object.values(rrndEAP)[0]],
                    ],
                  ],
                  funchAP.functionRegistry.time,
                );
              } 
              else {
                e = objectOfS(
                  ["parameter"],
                  [
                    [
                      ["func", Object.keys(rrndEAP)[0]],
                    ],
                  ],
                  funchAP.functionRegistry.time,
                );
              }
            }
            else {
              console.log("Unexpected rndE type: ", rndE);
              e = objectOfS(
                ["parameter"],
                [
                  [
                    ["func", "aVar"],
                    ["args", "varA"],
                  ],
                ],
                funchAP.functionRegistry.time,
              );
            }
          }
          console.log(JSON.stringify(e));
        }
        else { 
          if (objData.length > 0) {
            if (objData.indexOf("file") > -1) {
              console.log(">>> [LIBRARY] LIBRARY REQUEST: " + JSON.stringify(e));
              console.log(
                "Determined that funcTres execution is requested! \n" +
                  e.parameter["file"],
              );
              var funcTres = e?.parameter["file"];
              try {
                var htmlArray = funchAP.functionRegistry.getHtmlList();
                var rndHtmlIndex = Math.floor(Math.random() * Math.floor(htmlArray.length));
                var rndPage = htmlArray[rndHtmlIndex];
                var htmlTresArg; // = rndPage; // Default value
                console.log("htmlArray = " + htmlArray, executed++);
                if (funcTres) {
                  if (Array.isArray(funcTres)) {
                    const firstArg = funcTres[0];
                    if (htmlArray.includes(firstArg)) {
                      var funcTres0Index = htmlArray.findIndex(function (element) {
                        return element === firstArg;
                      });
                      htmlTresArg = htmlArray[funcTres0Index];
                    }
                  } 
                  else {
                    if (htmlArray.includes(funcTres)) {
                      var funcTresIndex = htmlArray.findIndex(function (element) {
                        return element === funcTres;
                      });
                      htmlTresArg = htmlArray[funcTresIndex];
                    }
                  }
                }
                if (!htmlTresArg) {
                  try{
                    let payLoad = {};
                    payLoad["type"] = "url";
                    payLoad["data"] = {};
                    if (funcTres === "undefined") {
                      return getScriptUrl() + "?file=" + rndPage;
                    } 
                    else {
                      var fT = fileBrowser(null, funcTres);
                      payLoad.data["url"] = fT?.url
                      if (!fT?.url) {
                        var dT = driveManager(funcTres);
                        payLoad.data["url"] = dT;
                      }
                      let options = {
                        muteHttpExceptions: true,
                      };
                      if (fT?.url) {
                        return contCDN(fT.url, payLoad);
                      }
                      else {
                        if (dT) {
                          return contCDN(dT, payLoad);
                          // payLoad.data["app"] = getUrlResponse(dT, options);
                          // let hTAml = rendTemplate(
                          //   payLoad.data["app"]?.app,
                          //   {
                          //     pL: payLoad,
                          //   },
                          //   JSON.stringify(fT?.name || funcTres),
                          // );
                          // return hTAml
                        }
                        else {
                          if (!dT) {
                            return contCDN(getScriptUrl(), payLoad);
                          // payLoad.data["app"] = getUrlResponse(getScriptUrl(), options);
                          // let hTAml = rendTemplate(
                          //   payLoad.data["app"]?.app,
                          //   {
                          //     pL: payLoad,
                          //   },
                          //   JSON.stringify(fT?.name || funcTres),
                          // );
                          // return hTAml
                          }
                        }
                      }
                    }
                  }
                  catch (error) {
                    console.log("Requested template Out of Order", error.stack);
                  }
                }
                else { 
                  if (htmlTresArg) {
                    try {
                      let driveA = 
                        {
                          fileParam: funcTres,
                        }
                      let noLhtml = RenderFile.fileRender(
                        funcTres,
                        driveA,
                        isValidUrl(getScriptUrl()).pathname.split("/")[3],
                      );
                      return noLhtml
                    } 
                    catch (error) {
                      Logger.log("Requested! HTML Out of Order", error.stack);
                    }
                  }
                }
              } 
              catch (error) {
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
            else {
              if (!e.parameter["func"] && !e.parameter["args"]) {
                if (typeof globalThis[e.parameter[objData[0]]] !== "function") {
                  let argsEd;
                  if (e.parameter[objData[0]].indexOf(",") > -1) {
                      argsEd = e.parameter[objData[0]]
                  }
                  else {
                    let tempObj = new ResolveParameters(e.parameter[objData[0]])  ;
                    mapArr[tempObj?.searchResult?.name || tempObj.func] = [];
                    argsEd = new IsMapped(mapArr, [...tempObj?.searchResult?.parameters] || [tempObj.func]).mapKeys;
                  }
                  console.log("argsEd = " + JSON.stringify(argsEd), executed++);
                  if (typeof argsEd === "string") {
                    e = objectOfS(
                      ["parameter"],
                      [[["func", argsEd]]],
                      funchAP.functionRegistry.time,
                    );
                    console.log("e = " + JSON.stringify(e), executed++);
                  } 
                  else {
                    if (typeof argsEd === "object" && argsEd !== null) {
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
                          funchAP.functionRegistry.time,
                        );
                        console.log("e = " + JSON.stringify(e), executed++);
                      } 
                      else {
                        e = objectOfS(
                          ["parameter"],
                          [[["func", Object.keys(argsEd)[0]]]],
                          funchAP.functionRegistry.time,
                        );
                        console.log("e = " + JSON.stringify(e), executed++);
                      }
                    } 
                    else {
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
                          funchAP.functionRegistry.time,
                        );
                        console.log("e = " + JSON.stringify(e), executed++);
                      } 
                      else {
                        e = objectOfS(
                          ["parameter"],
                          [
                            [
                              ["func", "aVar"],
                              ["args", "varA"],
                            ],
                          ],
                          funchAP.functionRegistry.time,
                        );
                        console.log("e = " + JSON.stringify(e), executed++);
                      }
                      }
                    }
                  }
                  else {
                    if (typeof globalThis[e.parameter[objData[0]]] === "function") {
                      let tempObj = new ResolveParameters(e.parameter[objData[0]]);
                      mapArr[tempObj?.searchResult?.name || tempObj.func] = [];
                      let argsEd = new IsMapped(mapArr, [...tempObj?.searchResult?.parameters] || [tempObj.func]).mapKeys;
                      console.log("argsEd = " + JSON.stringify(argsEd), executed++);
                      if (typeof argsEd === "string") {
                        e = objectOfS(
                          ["parameter"],
                          [[["func", argsEd]]],
                          funchAP.functionRegistry.time,
                        );
                        console.log("e = " + JSON.stringify(e), executed++);
                      } 
                      else {
                        if (typeof argsEd === "object" && argsEd !== null) {
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
                              funchAP.functionRegistry.time,
                            );
                            console.log("e = " + JSON.stringify(e), executed++);
                          } 
                          else {
                            e = objectOfS(
                              ["parameter"],
                              [[["func", Object.keys(argsEd)[0]]]],
                              funchAP.functionRegistry.time,
                            );
                            console.log("e = " + JSON.stringify(e), executed++);
                          }
                        } 
                        else {
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
                              funchAP.functionRegistry.time,
                            );
                            console.log("e = " + JSON.stringify(e), executed++);
                          } 
                          else {
                            e = objectOfS(
                              ["parameter"],
                              [
                                [
                                  ["func", "aVar"],
                                  ["args", "varA"],
                                ],
                              ],
                              funchAP.functionRegistry.time,
                            );
                            console.log("e = " + JSON.stringify(e), executed++);
                          }
                        }
                      }
                      console.log(JSON.stringify(e));
                    }
                    else {
                      console.log(">>> [LIBRARY] LIBRARY REQUEST: " + JSON.stringify(e));
                      console.log(
                        "Determined that funcTres execution is requested! \n" +
                          e.parameter[objData[0]],
                      );
                      var funcTres = e.parameter[objData[0]];
                      try {
                        var htmlArray = funchAP.functionRegistry.getHtmlList();
                        var rndHtmlIndex = Math.floor(Math.random() * Math.floor(htmlArray.length));
                        var rndPage = htmlArray[rndHtmlIndex];
                        var htmlTresArg; // = rndPage; // Default value
                        console.log("htmlArray = " + htmlArray, executed++);
                        if (funcTres) {
                          if (Array.isArray(funcTres)) {
                            const firstArg = funcTres[0];
                            if (htmlArray.includes(firstArg)) {
                              var funcTres0Index = htmlArray.findIndex(function (element) {
                                return element === firstArg;
                              });
                              htmlTresArg = htmlArray[funcTres0Index];
                            }
                          } 
                          else {
                            if (htmlArray.includes(funcTres)) {
                              var funcTresIndex = htmlArray.findIndex(function (element) {
                                return element === funcTres;
                              });
                              htmlTresArg = htmlArray[funcTresIndex];
                            }
                          }
                        }
                        if (!htmlTresArg) {
                          try{
                            let payLoad = {};
                            payLoad["type"] = "url";
                            payLoad["data"] = {};
                            if (funcTres === "undefined") {
                              return getScriptUrl() + "?file=" + rndPage;
                            } 
                            else {
                              var fT = fileBrowser(null, funcTres);
                              payLoad.data["url"] = fT?.url
                              if (!fT?.url) {
                                var dT = driveManager(funcTres);
                                payLoad.data["url"] = dT;;
                              }
                              let options = {
                                muteHttpExceptions: true,
                              };
                              // payLoad.data["app"] = getUrlResponse(fT?.url || getScriptUrl(), options);
                              if (fT?.url) {
                                return contCDN(fT.url, payLoad);
                              }
                              else {
                                if (dT) {
                                  return contCDN(dT, payLoad);
                                  // payLoad.data["app"] = getUrlResponse(dT, options);
                                  // let hTAml = rendTemplate(
                                  //   payLoad.data["app"]?.app,
                                  //   {
                                  //     pL: payLoad,
                                  //   },
                                  //   JSON.stringify(fT?.name || funcTres),
                                  // );
                                  // return hTAml
                                }
                                else {
                                  if (!dT) {
                                    return contCDN(getScriptUrl(), payLoad);
                                  // payLoad.data["app"] = getUrlResponse(getScriptUrl(), options);
                                  // let hTAml = rendTemplate(
                                  //   payLoad.data["app"]?.app,
                                  //   {
                                  //     pL: payLoad,
                                  //   },
                                  //   JSON.stringify(fT?.name || funcTres),
                                  // );
                                  // return hTAml
                                  }
                                }
                              }
                              // let hTAmla = RenderTemplate.templateRender(
                              //   payLoad.data["app"]?.app,
                              //   {
                              //     pL: payLoad,
                              //   },
                              //   JSON.stringify(fT?.name || funcTres),
                              // );
                              // return hTAmla
                            }
                          }
                          catch (error) {
                            console.log("Requested template Out of Order", error.stack);
                          }
                        }
                        else { 
                          if (htmlTresArg) {
                            try {
                              let driveA = 
                                {
                                  fileParam: funcTres,
                                }
                              let noLhtmlb = RenderFile.fileRender(
                                funcTres,
                                driveA,
                                isValidUrl(getScriptUrl()).pathname.split("/")[3],
                              );
                              return noLhtmlb
                            } 
                            catch (error) {
                              Logger.log("Requested! HTML Out of Order", error.stack);
                            }
                          }
                        }
                      } 
                      catch (error) {
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
                  }
                }
              }
            }
          }
        }
      }
    }
    if (e && e.parameter && (e.parameter["func"] && e.parameter["args"])) {
    var funcUno = e.parameter["func"];
    var funcDos = e.parameter["args"];
    }
    else {
      if (e && e.parameter && (e.parameter["func"] && !e.parameter["args"])) {
        var funcUno = e.parameter["func"];
        var funcDos = null;
      } 
      else {
        if (e && e.parameter && (!e.parameter["func"] && e.parameter["args"])) {
          var funcUno = null;
          var funcDos = e.parameter["args"];
        }  
        else {
          var funcUno = Object.keys(rndE);
          var funcDos = Object.values(rndE);
        }
      } 
    }
    console.log("exec and args\n" + [funcUno, funcDos]);
    return {
      exec: funcUno,
      args: funcDos,
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
    //   let rawUrlResult = autoP.trueVfalse(isObjValUrl);
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
    //     else if (typeof funcDos !== "object" && autoP.trueVfalse(funcDos)) {
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
  res() {
    return this.fhRes
  }
}
// let handlerP = new FunctionHandle()

function funcHandle(e) {
  let data = new FunctionHandle(e);
  return data
}
