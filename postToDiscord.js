function postToDiscord(currentMessage) {
  let discord = fileBrowser("Sheets", "discord")
  var url = discord.name;
  var message = {
    content: currentMessage,
  };
  var options = {
    method: "post",
    payload: message,
    followRedirects: false, // Prevent automatic redirects
    muteHttpExceptions: true,
  };
  getUrlResponse(url,options)
}

function postFromSpreadsheet(column, rowOff, colOff, discord) {
  var messageCell = ssCell(column, rowOff, colOff);
  var currentMessage = messageCell.getValue();
  if (currentMessage == "") return;
  postToDiscord(currentMessage);
}
