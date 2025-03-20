
function userClass() {
    var cCalId = Classroom.Courses.list().courses;
    for (var iC = 0; iC < cCalId.length; iC++) {
        var cJSON = cCalId[iC];
        console.log(cJSON["id"]);
        console.log(cJSON["room"]);
    }
}


function getDocUrl(docId) {
  Logger.log("Trying to open document with ID:", docId); // Log the ID
  try {
    var doc = DocumentApp.openById(docId);
  Logger.log("Trying to open document with ID:", doc); // Log the ID
    return doc.getUrl();
  } catch (error) {
    Logger.log("Error opening document:", error);
    throw new Error("Error opening document. Check the logs.");  // Throw the error for the client to catch
  }
}


function getPlaceholders(templateUrl) {
  try {
    var doc = DocumentApp.openByUrl(templateUrl);
    var body = doc.getBody();
    var text = body.getText();

    // Regular expression to find placeholders like {{name}}, {{email}}, etc.
    var placeholders = text.match(/{{[a-zA-Z0-9]+}}/g) || []; // Returns an array of matches or null

    // Remove duplicates (optional, but good practice)
    var uniquePlaceholders = placeholders.filter(function(item, pos) {
      return placeholders.indexOf(item) == pos;
    });

    return uniquePlaceholders;

  } catch (error) {
    Logger.log("Error getting placeholders:", error);
    throw new Error("Error getting placeholders. Check the logs.");
  }
}

function submitDomain(formData) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("DomainListings"); // Replace with your sheet name
  sheet.appendRow([formData.domain, formData.price, formData.email, "Available"]); // Add other fields
  return "Domain listing submitted successfully!";
}

function lookupDomain(searchTerm) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("DomainListings");
  var data = sheet.getDataRange().getValues(); // Get all data (optimize for large datasets later)
  var results = [];
  for (var i = 1; i < data.length; i++) { // Skip header row
    if (data[i][0].toLowerCase().includes(searchTerm.toLowerCase())) { // Simple search
      results.push({
        domain: data[i][0],
        price: data[i][1],
        email: data[i][2]
      });
    }
  }
  return results;
}

function processFormData(formData, templateUrl) {
  try {
    var doc = DocumentApp.openByUrl(templateUrl);

    var body = doc.getBody();

    for (var key in formData) {
      var placeholder = "{{" + key + "}}";
      body.replaceText(placeholder, formData[key]);
    }

    var newDoc = doc.copy("Generated Document - " + new Date());
    var newDocUrl = newDoc.getUrl();

    return newDocUrl;

  } catch (error) {
    Logger.log("Error processing form data:", error);
    throw new Error("Error processing form data. Check the logs.");
  }
}