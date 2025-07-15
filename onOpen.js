var onOpen = function (appInterface) {
  if (typeof appInterface !== "string") {
    return JSON.stringify({});
  } else {
    var menu = appInterface.getUi();
    return menu;
  }
};
