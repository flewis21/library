function isTypeScript(typePassedIn) {
  var mapTypes = {};
  for (var key in typePassedIn) {
    mapTypes[key] = typePassedIn[key];
  }
  return mapTypes;
}

function isValidKeys(v) {
  var isExcludeValue = isOmit(v, "1");
  isExcludeValue = isOmit(isExcludeValue, "2");
  isExcludeValue = isOmit(isExcludeValue, "3");
  var isValueOfTypePassedIn = isValidDoubleObject(isExcludeValue);
  if (isValueOfTypePassedIn) {
    var isInferredTruthy = isTruthy(isValueOfTypePassedIn);
    if (isInferredTruthy) {
      return isValueOfTypePassedIn;
    }
  }
}

function isMapped(t, v) {
  var mapKeys = {};
  for (var key in t) {
    mapKeys[key] = v || typeof t[key];
  }
  return mapKeys;
}

function isTruthy(t) {
  if (
    typeof t === null ||
    typeof t === "undefined" ||
    typeof t === false ||
    t === 0 ||
    t === ""
  ) {
    return false;
  } else {
    return true;
  }
}

function isValidDoubleObject(t) {
  // var validKeys = isMapped(t);
  var validList = Object.values(t);
  if (validList.length === 2) {
    var valid1 = validList[0];
    var valid2 = validList[1];
    if (typeof valid1 === typeof valid2) {
      return typeof valid1;
    } else {
      return;
    }
  }
  return;
}

function isKeyOf(t) {
  var keyList = {}; //Object.keys(t);
  for (var key in t) {
    keyList[key] = key;
  }
  return keyList;
}

function isPropertyOf(t) {
  var propertyList = isMapped(t);
  return propertyList;
}

function isOmit(t, k) {
  var valuesList = isPick(t, k);
  return valuesList;
}

function isExclude(t, k) {
  var keyList = Object.keys(t);
  var excludeList = [];
  Array.isArray(keyList)
    ? keyList.forEach((e, i) => {
        if (!e.includes(k)) {
          excludeList.push(e);
        }
      })
    : Array(keyList).forEach((e, i) => {
        if (!e.includes(k)) {
          excludeList.push(e);
        }
      });
  return excludeList;
}

function isPick(t, k) {
  var excludeList = isExclude(t, k);
  var valuesList = {};
  for (var key in t) {
    if (excludeList.includes(key)) {
      valuesList[key] = t[key];
    }
  }
  return valuesList;
}

function geneicType() {
  var exampleObjectType = {
    a: "string",
    b: 123,
    c: ["string"],
  };
  // var kee = isKeyOf(exampleObjectType)
  // var tee = isMapped(isOmit(exampleObjectType, "b"))
  var noB = isValidKeys(zuluOrder);
  return;
}
