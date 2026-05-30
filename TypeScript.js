class Script{};
// Script.prototype. = function () {
// };

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

class IsOmit {
  constructor(t, k) {
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
  }
};

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
      : projectP.paramsList;
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
          if (!this.arrUno && this.arrDos) {
            this.keys = [this.func].concat(this.someArgs);
          } 
          else {
            if (!this.arrUno && !this.arrDos && this.trueFunc) {
              this.keys = [this.func];
            }
            else {
              if (!this.trueFunc) {
                this.keys = Object.values(this.funcUno[this.numVarRnd])
              }
            }
          }
        }
      }
      this.keys.forEach((pro) => {
        this.keyPro
        if (typeof pro === "object" || Array.isArray(pro)) {
          this.keyPro = pro;
        }
        else {
          this.keyPro = [pro];
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
                this.funcLimit.push(projectP.fileList[this.keyProParams.funFirst]);
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
              }
              else {
                this.keyProParams = new RelatedFunctions(pro);
              }
              if (this.keyProParams.funFirst >= 0) {
                this.argsX.push(projectP.fileList[this.keyProParams.funFirst]);
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
        this.fParams = projectP; //gsFParams();
        this.resCount = 0;
        this.argsX.forEach((result, argsXIndex) => {
          console.log("argsX result " + this.resCount + ": " + result);
          this.args = {};
          this.resolvedArgs = [];
          this.missingParams = [];
          this.contentLimit = this.content[argsXIndex];
          this.searchResult = this.fParams.paramsList.find((rndS) => {
            return rndS.name === result;
          });
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
  let executed = handlerP.executed;
  let handles;
  let base;
  let exampleObjectType = {
    a: "string",
    b: 123,
    c: ["string"],
  };
  let eQueryObject = exampleObjectType;
  let i = Math.random();
  let l = 1;
  for (i,l;i<l;i++) {
    if (i < .4) {
      if (!e) {
        eQueryObject = {
          parameter: {
            q: autoP.argsX[0]
          }
        };
        eQueryObject = {parameter: {q:"http://instagram.com"}}
        let tempObj = new FunctionHandle(eQueryObject);
        handles =  tempObj
        console.log("handles = " + handles, executed++);
        if (!handles.funcUno && !handles.funcDos) {
          base = handles
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
      else {
        if (e && e.parameter && e.parameter.action && e.parameter.action === "getData") {
          return handleRequest(e);
        }
        else {
          if (e && e.parameter && e.parameter.action && e.parameter.action === "getDe") {
            return wwwDe(e);
          }
        }
        let tempObj = new FunctionHandle(e);
        handles =  tempObj.
        console.log("handles = " + handles, executed++);
        if (!handles.funcUno && !handles.funcDos) {
          base = handles
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
          eQueryObject = {
            parameter: {
              action:"getData"
            }
          };
          if (eQueryObject && eQueryObject.parameter && eQueryObject.parameter.action === "getData") {
            return handleRequest(eQueryObject);
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
          let tempObj = new FunctionHandle(e);
          handles =  tempObj.
          console.log("handles = " + handles, executed++);
          if (!handles.funcUno && !handles.funcDos) {
            base = handles
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
            eQueryObject = {
              parameter: {
                file: autoP.functionRegistry.htmlArray[Math.floor(Math.random() * autoP.functionRegistry.htmlArray.length)]
              }
            };
            eQueryObject = {parameter: {q:"http://instagram.com"}}
            let tempObj = new FunctionHandle(eQueryObject);
            handles =  tempObj.
            console.log("handles = " + handles, executed++);
            if (!handles.funcUno && !handles.funcDos) {
              base = handles
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
          else {
            if (e && e.parameter && e.parameter.action && e.parameter.action === "getData") {
              return handleRequest(e);
            }
            else {
              if (e && e.parameter && e.parameter.action && e.parameter.action === "getDe") {
                return wwwDe(e);
              }
            }
            let tempObj = new FunctionHandle(e);
            handles =  tempObj.
            console.log("handles = " + handles, executed++);
            let base
            if (!handles.funcUno && !handles.funcDos) {
              base = handles
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
    // if (!handles["exec"] && !handles["args"]) {
    //   base = handles
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
    //   let tempObj = new FunctionHandle(eQueryObject);
    //   handles =  tempObj.
    //   console.log("handles = " + handles, executed++);
    // }
    // else {
    //   handles = handlerP;
    //   console.log("handles = " + handles, executed++);
    // }
    // let base
    // if (!handles.funcUno && !handles.funcDos) {
    //   base = handles
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
