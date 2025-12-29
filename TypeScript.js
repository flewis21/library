function isValidKeys(v) {
  [isOmit(v, k)] ? isExclude(v[k], null) : Array(isOmit(v, k));
  // if ({a: })
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
  var inferObj = {};
  for (var key in t) {
    inferObj[key] = typeof t[key];
  }
  if (Object.keys(inferObj).length === 2) {
    var objVal = Object.values(inferObj);
    if (objVal[0] === objVal[1]) {
      return t;
    } else {
      return null;
    }
  }
  return null;
}

function isKeyOf(t) {
  var keyList = Object.keys(t);
  return keyList;
}

function isOmit(t, k) {
  var tKeys = isKeyOf(t);
  // var excludeList = isExclude(t, k)
  var valuesList = isPick(t, k);
  return valuesList;
  // if (tKeys.includes(k)) {
  //   var omitList = isPick()
  // }
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
  var valuesList = [];
  for (var key in t) {
    if (excludeList.includes(key)) {
      valuesList.push(t[key]);
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
  var noB = isValidDoubleObject(isPick(exampleObjectType, "b"));
  return;
}
