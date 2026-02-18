function postToDiscord(discord, currentMessage) {
  var url = discord;
  var message = {
    content: currentMessage,
  };
  var options = {
    method: "post",
    payload: message,
  };
  var res = UrlFetchApp.fetch(url, options);
}

function postFromSpreadsheet(column, rowOff, colOff, discord) {
  var messageCell = ssCell(column, rowOff, colOff);
  var currentMessage = messageCell.getValue();
  if (currentMessage == "") return;
  postToDiscord(discord, currentMessage);
}
