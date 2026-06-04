var calAgenda = function (appInterface) {
  var html = HtmlService.createHtmlOutputFromFile(autoP.functionRegistry.htmlList[Math.floor(Math.random() * 8)]).setTitle("Agenda");
  appInterface.getUi().showSidebar(html);
};
