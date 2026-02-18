function ssFormsSnip(test) {
  var htmlObject = HtmlService.createTemplate(
    `<!DOCTYPE html><html><head><base target="_top"><meta charset="utf-8"><meta name="appList" content="Boilerplate Function List"><meta name="viewport" content="width=device-width, initial-scale=1"><link href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" rel="stylesheet"><link href="https://fonts.googleapis.com/css?family=Acme" rel="stylesheet"><style> a:link, a:visited {color:black !important;}; a:hover, a:active{color:white  !important; text-decoration:none  !important;}</style></head><body><div id="pageBlock"><p>Forms: <?= file ?></p></div><div class="row"><div class="col s10 card-panel amber push-s1 push-m1 push-l1"><div class="video-container" style="clear: both"><div class="col s12 receipt deep-purple darken-1"><iframe id="indexDrive" class="z-depth-5 card-panel deep-purple darken-1 scale-transition scale-out scale-in btn-large" src="<?= filedMain ?>" width="100%" height="100%" allow="autoplay encrypted-media" title="Dontime Life Website" frameborder="0" allowfullscreen ></iframe><div id="loadingIndicator" style="display: none;"><?= media ?></div></div></div></div></div></body></html>`,
  );
  var folderMain = folderManager();
  var fileList = [];
  while (fileList.length === 0) {
    var rndFolder = Math.floor(Math.random() * Math.floor(folderMain.length));
    var folder = folderMain[rndFolder] || "Forms";
    fileList = matchManager(folder, test);
  }
  if (fileList && typeof fileList === "object") {
    var listResults = Object.values(fileList)
      .filter((value) => Array.isArray(value))
      .reduce((acc, current) => acc.concat(current), [])
      .map((main) => {
        return main;
      });
  }
  var eFolder = DriveApp.getFoldersByName(folder).next();
  var rndFiled = Math.floor(Math.random() * Math.floor(listResults.length));
  htmlObject.file = listResults[rndFiled];
  var folderFile = eFolder.getFilesByName(htmlObject.file);
  var dataTree = [];
  while (folderFile.hasNext()) {
    var myFile = folderFile.next();
    var myFileUrl = myFile.getUrl();
    var mimeType = myFile.getMimeType();
    if (
      mimeType === DriveApp.MimeType.GOOGLE_FORMS ||
      mimeType === DriveApp.MimeType.GOOGLE_DOCS ||
      mimeType === DriveApp.MimeType.GOOGLE_SHEETS ||
      mimeType === DriveApp.MimeType.GOOGLE_SLIDES
    ) {
      var service = fileTypeManager(mimeType);
      if (service) {
        var currentFileUrl = service.openByUrl(myFileUrl).getPublishedUrl();
      } else {
        console.error(
          "filetype manager returned undefined for mimetype: " + mimeType,
        );
        currentFileUrl = "#";
      }
    } else {
      try {
        var fileId = myFileUrl.match(/d\/([-\w]+)/)[1];
        var currentFileUrl = DriveApp.getFileById(fileId).getDownloadUrl();
      } catch (error) {
        console.warn("Error processing file url: " + myFileUrl + "\n" + error);
      }
    }
    dataTree.push(currentFileUrl);
  }
  var rndFiledMain = Math.floor(Math.random() * Math.floor(dataTree.length));
  htmlObject.filedMain = dataTree[rndFiledMain];
  htmlObject.media = mis(dataTree[rndFiledMain]);
  return htmlObject.evaluate().asTemplate;
};
