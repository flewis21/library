class SearchStrings {
  constructor() {
    let arrDRnd = autoGlobe.arrDRnd();
    let arrD = autoGlobe.arrD();
    let newArr = [];
    let i = 0 || 0;
    let l = 6 || 1;
    if (arrDRnd) {
      for (i, l; i < l; i++) {
        if (typeof arrDRnd !== "undefined" && typeof arrDRnd !== "string") {
          let myImportData = arrDRnd.sort((a, b) => a - b)[
            Math.floor(Math.random() * arrDRnd.length)
          ];
          newArr.push(myImportData);
        } 
        else {
          if (typeof arrDRnd !== "undefined" && typeof arrDRnd !== "string") {
            let myImportData = arrDRnd.sort((a, b) => a - b)[
              Math.floor(Math.random() * arrDRnd.length)
            ];
            newArr.push(myImportData);
          } 
          else {
            if (
              typeof arrDRnd !== "undefined" &&
              typeof arrDRnd === "string"
            ) {
              let myImportData = [arrDRnd].sort((a, b) => {
                let pA = freqPriority.get(a);
                let pB = freqPriority.get(b);
                return pA - pB;
              })[Math.floor(Math.random() * [arrDRnd].length)];
              newArr.push(myImportData);
            }
          }
        }
      }
      if (newArr) {
        let sortNewArr = newArr.sort((a, b) => {
          let pA = autoGlobe.freqPriority.get(a);
          let pB = autoGlobe.freqPriority.get(b);
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
    let executed = autoGlobe.executed;
    this.executed = executed;
    let rndE = "";
    this.rndE = rndE;
    let mapArr = {};
    this.mapArr = mapArr;
    let funcTres;
    this.funcTres = funcTres;
    let tempObj = {};
    this.tempObj = tempObj;
    let payLoad;
    this.payLoad = payLoad;
    let htmlArray = autoGlobe.functionRegistry.getHtmlList();
    this.htmlArray = htmlArray;
    let rndHtmlIndex = Math.floor(Math.random() * Math.floor(htmlArray.length));;
    this.rndHtmlIndex = rndHtmlIndex;
    let rndPage = htmlArray[rndHtmlIndex];
    this.rndPage = rndPage;
    let htmlTresArg;
    this.htmlTresArg = htmlTresArg;
    let firstArg;
    this.firstArg = firstArg;
    let funcTres0Index;
    this.funcTres0Index = funcTres0Index;
    let funcTresIndex;
    this.funcTresIndex = funcTresIndex;
    let htAml;
    this.htAml = htAml;
    let options = {
      muteHttpExceptions: true,
    };
    this.options = options;
    let driveA;
    this.driveA = driveA;
    let fT;
    this.fT = fT;
    let dT;
    this.dT = dT;


    // Logging
    if (!e) {
      // let rndCustomer = autoGlobe.customOrder[autoGlobe.numVarRnd];
      // this.rndCustomer = rndCustomer;
      // let customGroup = autoGlobe.functionRegistry.fileList.map((customerWk1) => {
      //   let bl = ["driveManager","folderManager","formsUrls","matchManager"];
      //   this.bl = bl; 
      //   let sblx = [customerWk1];
      //   this.sblx = sblx;
      //   bl.forEach((s) => {
      //     if (sblx.indexOf(String(s)) > -1) {
      //       sblx.pop()
      //     }
      //   })
      //   sblx.map((customerWk2) => {
      //     if (String(customerWk2).indexOf(rndCustomer) === 0) {
      //       return autoGlobe.functionRegistry.fileList.indexOf(customerWk2)
      //     }
      //   })
      // }).filter((isIn) => {
      //     return isIn != null
      // });
      // this.customGroup = customGroup;
      // // console.log("These is the customGroup",customGroup);
      // let pSort = customGroup.sort((a,b) => {
      //     let i = Math.random()
      //     let tSorted = a;
      //     this.tSorted = tSorted;
      //     let zSorted = b;
      //     this.zSorted = zSorted;
      //     if (i < .3) {
      //       return zSorted - tSorted
      //     }
      //     else {
      //       i = Math.random()
      //       if (i > .3 && i < .5 ) {
      //         return tSorted - zSorted
      //       }
      //       else {
      //         i = Math.random()
      //         if (i > .5 && i < .8) {
      //           return zSorted
      //         }
      //         else {
      //           i = Math.random()
      //           if (i > .8) {
      //             return tSorted
      //           }
      //         }
      //       }
      //     }
      //   })
      // this.pSort = pSort;
      let rSorted = autoGlobe.paramsSort()
      this.rSorted = rSorted;
      // console.log("These is the sorted customGroup",pSort);
      tempObj = rSorted[Math.floor(Math.random() * Math.floor(rSorted.length))];
      mapArr[tempObj?.name] = [];
      // console.log("The existance of autoGlobe fParams is ", tempObj?.parameters? true:false);
      // autoGlobe.fParams
      //   ? rndE = new IsMapped(mapArr, [...autoGlobe?.fParams]).mapKeys
      //     :
      //     rndE = new IsMapped(mapArr, []).mapKeys
      if (tempObj?.parameters?.length > 0) {
        rndE = new IsMapped(mapArr, [...tempObj?.parameters]).mapKeys;
      }
      else {
        rndE = new IsMapped(mapArr, []).mapKeys;
      }
      console.log("rndE = " + JSON.stringify(rndE), executed++);
    }
    else {
      if (e && !e.parameter) {
        tempObj = new MisStCreator(e);
        mapArr[tempObj?.argsObject?.func || autoGlobe.func] = [];
        if (tempObj?.argsObject?.args) {
          rndE = new IsMapped(mapArr, [...tempObj?.argsObject?.args] || [autoGlobe.func]).mapKeys;
        }
        else {
          rndE = new IsMapped(mapArr, []).mapKeys;
        }
        console.log("rndE = " + JSON.stringify(rndE), executed++);
      }
      else {
        if (e && e.parameter) {
          let objData = Object.keys(e.parameter);
          this.objData = objData;
          console.log("objData = " + e.parameter[objData[0]], objData);
          if (objData.length === 0) {
            mapArr[tempObj?.name || autoGlobe.func] = [];
            // if (tempObj?.parameters) {
            // }
            // else {
            // }
            rndE = new IsMapped(mapArr, [...tempObj?.parameters] || [autoGlobe.func]).mapKeys;
            console.log("rndE = " + JSON.stringify(rndE), executed++);
            if (typeof rndE === "string") {
              e = objectOfS(
                ["parameter"],
                [
                  [
                    ["func", rndE],
                  ],
                ],
                autoGlobe.functionRegistry.time,
              );
            }
            else {
              if (typeof rndE === "object" && rndE !== null) {
                let rndEAP = Object.values(rndE);
                this.rndEAP = rndEAP;
                if (rndEAP && rndEAP.length > 0) {
                  e = objectOfS(
                    ["parameter"],
                    [
                      [
                        ["func", Object.keys(rndEAP)[0]],
                        ["args", Object.values(rndEAP)[0]],
                      ],
                    ],
                    autoGlobe.functionRegistry.time,
                  );
                } 
                else {
                  e = objectOfS(
                    ["parameter"],
                    [
                      [
                        ["func", Object.keys(rndEAP)[0]],
                      ],
                    ],
                    autoGlobe.functionRegistry.time,
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
                  autoGlobe.functionRegistry.time,
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
                funcTres = e?.parameter["file"];
                try {
                  htmlTresArg = null; // = rndPage; // Default value
                  console.log("htmlArray = " + htmlArray, executed++);
                  if (funcTres) {
                    if (Array.isArray(funcTres)) {
                      firstArg = funcTres[0];
                      if (htmlArray.includes(firstArg)) {
                        funcTres0Index = htmlArray.findIndex(function (element) {
                          return element === firstArg;
                        });
                        htmlTresArg = htmlArray[funcTres0Index];
                      }
                    } 
                    else {
                      if (htmlArray.includes(funcTres)) {
                        funcTresIndex = htmlArray.findIndex(function (element) {
                          return element === this?.funcTres;
                        });
                        htmlTresArg = htmlArray[funcTresIndex];
                      }
                    }
                  }
                  if (!htmlTresArg) {
                    try{
                      payLoad = {};
                      payLoad["type"] = "url";
                      payLoad["data"] = null;
                      if (!funcTres) {
                        htAml = getScriptUrl() + "?file=" + rndPage;
                      } 
                      else {
                        fT = fileBrowser(null, funcTres);
                        payLoad.data = fT?.url
                        if (!fT?.url) {
                          dT = driveManager(funcTres)
                          payLoad.data = dT;
                        }
                        driveA = 
                          {
                            payL: 
                              {
                                pL: payLoad,
                              },
                          };
                        // payLoad.data["app"] = getUrlResponse(fT?.url || getScriptUrl(), options);
                        if (fT?.url) {
                          htAml = renderTemplate(fT.url, driveA);
                        }
                        else {
                          if (dT) {
                            htAml = renderTemplate(dT, driveA);
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
                              htAml = renderTemplate(getScriptUrl(), driveA);
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
                        // htAml = renderTemplate(
                        //   payLoad.data["app"]?.app,
                        //   {
                        //     pL: payLoad,
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
                    if (htmlTresArg) {
                      try {
                        driveA = 
                          {
                            fileParam: funcTres,
                          }
                        htAml = renderFile(
                          funcTres,
                          driveA,
                          new ValidUrlResult(getScriptUrl()).validatedResult.pathname.split("/")[3],
                        );
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
                let argsEd;
                this.argsEd = argsEd;
                let argsAP;
                this.argsAP = argsAP;
                let aOKeys;
                this.aOKeys = aOKeys;
                let argsedObj;
                this.argsedObj = argsedObj;
                if (!e.parameter["func"] && !e.parameter["args"]) {
                  if (typeof globalThis[e.parameter[objData[0]]] !== "function") {
                    argsEd = null;
                    if (e.parameter[objData[0]] && e.parameter[objData[0]]?.indexOf(",") > -1) {
                        argsEd = e.parameter[objData[0]]
                    }
                    else {
                      if (e.parameter[objData[0]] && e.parameter[objData[0]]?.indexOf(",") === -1) {
                        tempObj = new MisCreator(e.parameter[objData[0]])  ;
                        mapArr[tempObj?.argsObject?.link || tempObj?.argsObject?.func] = [];
                        if (tempObj?.argsObject?.args) {
                          argsEd = new IsMapped(mapArr, [...tempObj?.argsObject?.args]).mapKeys;
                        }
                        else {
                          argsEd = new IsMapped(mapArr, []).mapKeys || autoGlobe.func;
                        }
                      }
                    }
                    console.log("argsEd = " + JSON.stringify(argsEd), executed++);
                    if (typeof argsEd === "string") {
                      e = objectOfS(
                        ["parameter"],
                        [[["args", argsEd]]],
                        autoGlobe.functionRegistry.time,
                      );
                      console.log("e = " + JSON.stringify(e), executed++);
                    } 
                    else {
                      if (typeof argsEd === "object" && argsEd !== null) {
                        argsAP = Object.values(argsEd);
                        if (argsAP && argsAP.length > 0) {
                          e = objectOfS(
                            ["parameter"],
                            [
                              [
                                ["func", Object.keys(argsEd)[0]],
                                ["args", [...Object.values(argsEd)[0]]],
                              ],
                            ],
                            autoGlobe.functionRegistry.time,
                          );
                          console.log("e = " + JSON.stringify(e), executed++);
                        } 
                        else {
                          e = objectOfS(
                            ["parameter"],
                            [[["func", Object.keys(argsEd)[0]]]],
                            autoGlobe.functionRegistry.time,
                          );
                          console.log("e = " + JSON.stringify(e), executed++);
                        }
                      } 
                      else {
                        console.log("Unexpected argsEd type: ", argsEd);
                        argsedObj = [];
                        try {
                          aOKeys = Object?.keys(argsEd);
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
                              autoGlobe.functionRegistry.time,
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
                              autoGlobe.functionRegistry.time,
                            );
                            console.log("e = " + JSON.stringify(e), executed++);
                          }
                        }
                        catch (error) {
                          console.log("Error stack:\n", error.stack)
                        }
                      }
                    }
                  }
                  else {
                    if (typeof globalThis[e.parameter[objData[0]]] === "function") {
                      tempObj = new MisStCreator(e.parameter[objData[0]]);
                      mapArr[tempObj?.argsObject?.func || autoGlobe.func] = [];
                      if (tempObj?.argsObject?.args) {
                        argsEd = new IsMapped(mapArr, [...tempObj?.argsObject?.args]).mapKeys;
                      }
                      else {
                        argsEd = new IsMapped(mapArr, []).mapKeys;
                      }
                      console.log("argsEd = " + JSON.stringify(argsEd), executed++);
                      if (typeof argsEd === "string") {
                        e = objectOfS(
                          ["parameter"],
                          [[["func", argsEd]]],
                          autoGlobe.functionRegistry.time,
                        );
                        console.log("e = " + JSON.stringify(e), executed++);
                      } 
                      else {
                        if (typeof argsEd === "object" && argsEd !== null) {
                          argsAP = Object.values(argsEd);
                          if (argsAP && argsAP.length > 0) {
                            e = objectOfS(
                              ["parameter"],
                              [
                                [
                                  ["func", Object.keys(argsEd)[0]],
                                  ["args", [...Object.values(argsEd)[0]]],
                                ],
                              ],
                              autoGlobe.functionRegistry.time,
                            );
                            console.log("e = " + JSON.stringify(e), executed++);
                          } 
                          else {
                            e = objectOfS(
                              ["parameter"],
                              [[["func", Object.keys(argsEd)[0]]]],
                              autoGlobe.functionRegistry.time,
                            );
                            console.log("e = " + JSON.stringify(e), executed++);
                          }
                        } 
                        else {
                          console.log("Unexpected argsEd type: ", argsEd);
                          argsedObj = [];
                          aOKeys = Object.keys(argsEd);
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
                              autoGlobe.functionRegistry.time,
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
                              autoGlobe.functionRegistry.time,
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
                      funcTres = e.parameter[objData[0]];
                      try {
                        console.log("htmlArray = " + htmlArray, executed++);
                        if (funcTres) {
                          if (Array.isArray(funcTres)) {
                            firstArg = funcTres[0];
                            if (htmlArray.includes(firstArg)) {
                              funcTres0Index = htmlArray.findIndex(function (element) {
                                return element === firstArg;
                              });
                              htmlTresArg = htmlArray[funcTres0Index];
                            }
                          } 
                          else {
                            if (htmlArray.includes(funcTres)) {
                              funcTresIndex = htmlArray.findIndex(function (element) {
                                return element === funcTres;
                              });
                              htmlTresArg = htmlArray[funcTresIndex];
                            }
                          }
                        }
                        if (!htmlTresArg) {
                          try{
                            payLoad = {};
                            payLoad["type"] = "url";
                            payLoad["data"] = null;
                            if (funcTres === "undefined") {
                              htAml = getScriptUrl() + "?file=" + rndPage;
                            } 
                            else {
                              fT = fileBrowser(null, funcTres);
                              payLoad.data = fT?.url
                              if (!fT?.url) {
                                dT = driveManager(funcTres);
                                payLoad.data = dT;
                              }
                              driveA = 
                                {
                                  payL: 
                                    {
                                      pL: payLoad,
                                    },
                                };
                              if (fT?.url) {
                                htAml = renderTemplate(fT.url, driveA);
                              }
                              else {
                                if (dT) {
                                  htAml = renderTemplate(dT, driveA);
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
                                    htAml = renderTemplate(getScriptUrl(), driveA);
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
                              // payLoad.data["app"] = getUrlResponse(this.fT?.url || getScriptUrl(), options);
                              // htAml = renderTemplate(
                              //   payLoad.data["app"]?.app,
                              //   {
                              //     pL: payLoad,
                              //   },
                              //   new ValidUrlResult(getScriptUrl()).validatedResult.pathname.split("/")[3],
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
                              driveA = 
                                {
                                  fileParam: funcTres,
                                }
                              htAml = renderTemplate(
                                funcTres,
                                driveA,
                                new ValidUrlResult(getScriptUrl()).validatedResult.pathname.split("/")[3],
                              );
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
    let funcUno;
    let funcDos;
    this.funcUno = funcUno;
    this.funcDos = funcDos;
    if (e && e.parameter && (e.parameter["func"] && e.parameter["args"])) {
    funcUno = Array(e.parameter["func"]);
    funcDos = Array(e.parameter["args"]);
    }
    else {
      if (e && e.parameter && (e.parameter["func"] && !e.parameter["args"])) {
        funcUno = Array(e.parameter["func"]);
        funcDos = false;
      } 
      else {
        if (e && e.parameter && (!e.parameter["func"] && e.parameter["args"])) {
          funcUno = false;
          funcDos = Array(e.parameter["args"]);
        }  
        else {
          funcUno = Object.keys(rndE);
          funcDos = Object.values(rndE);
        }
      } 
    }
    console.log("exec and args\n" + [funcUno, funcDos], executed++);
    // return {
    //   exec: funcUno,
    //   args: funcDos,
    // };
  }


  static handleFunction(e) {
    var executed = 0;
    let funchAP = autoGlobe;
    let rndE = "";
    let mapArr = {};

    // Logging
    if (!e) {
      let tempObj = autoGlobe;
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
          let tempObj = autoGlobe;
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
        var funcDos = false;
      } 
      else {
        if (e && e.parameter && (!e.parameter["func"] && e.parameter["args"])) {
          var funcUno = false;
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
    //   let rawUrlResult = autoGlobe.trueVfalse(isObjValUrl);
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
    //     else if (typeof funcDos !== "object" && autoGlobe.trueVfalse(funcDos)) {
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
