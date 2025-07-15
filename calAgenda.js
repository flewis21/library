var calAgenda = function (appInterface) {
  var html = HtmlService.createHtmlOutputFromFile("index").setTitle("Agenda");
  appInterface.getUi().showSidebar(html);
};
