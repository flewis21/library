function postToDiscord(currentMessage) {
  let discord = fileBrowser("Sheets", "discord");
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
  getUrlResponse(url, options);
}

function postFromSpreadsheet(column, rowOff, colOff, discord) {
  var messageCell = ssCell(column, rowOff, colOff);
  var currentMessage = messageCell.getValue();
  if (currentMessage == "") return;
  postToDiscord(currentMessage);
}


/**
 * Saves a file to Google Drive
 * @param {string} fileName
 * @param {string} base64Data
 */
function postToDrive(fileName, base64Data) {
  try {
    const contentType = "video/webm";
    const bytes = Utilities.base64Decode(base64Data)
    const blob = Utilities.newBlob(bytes, contentType, fileName);
    const file = DriveApp.createFile(blob);
    let isVUrl = isValidUrl(file.getUrl()) 
    return { success: true, url: isVUrl.url };
  }
  catch (err) {
    return { success: false, error: err.message };
  }
}