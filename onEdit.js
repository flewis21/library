/**
 * Calculates estimated travel costs (labor, gas, total) and time
 * between a delivery and pickup address using an external Directions API.
 * @param {string} deliveryAddress The starting address.
 * @param {string} pickupAddress The destination address.
 * @returns {object} An object containing calculated labor, gas, total, and travel time in minutes.
 */
function calculateTravelCosts(deliveryAddress, pickupAddress) {
  console.log(
    "Calculating travel costs for:",
    deliveryAddress,
    "to",
    pickupAddress,
  );

  // --- Configuration (replace with your actual values) ---
  const DIRECTIONS_API_KEY = "YOUR_DIRECTIONS_API_KEY"; // Get this from Mapbox, TomTom, HERE, etc.
  // Example for Mapbox: const MAPBOX_DIRECTIONS_BASE_URL = 'https://api.mapbox.com/directions/v5/mapbox/driving/';
  // Example for HERE: const HERE_ROUTING_BASE_URL = 'https://router.hereapi.com/v8/routes';

  const COST_PER_MINUTE_LABOR = 1.25; // Example: $1.25 per minute for labor
  const COST_PER_MILE_GAS = 0.5; // Example: $0.50 per mile for gas

  try {
    // --- Step 1: Call an External Directions API ---
    // This is highly dependent on the chosen API. The example below is conceptual.
    // You'd typically need to geocode the addresses first if the Directions API
    // only accepts coordinates, or if it has a built-in geocoding step.

    // For simplicity, let's assume the API directly takes addresses or handles geocoding internally.
    // If using Mapbox, for instance, you'd typically geocode addresses to lat/lon first.
    // For a more robust solution, you might chain a geocoding step here if your chosen
    // directions API strictly requires coordinates.

    let travelTimeMinutes = 0;
    let travelDistanceMiles = 0;

    // --- Using a placeholder for API call, you'd replace this with actual UrlFetchApp.fetch() ---
    // Example conceptual API call (NOT REAL, just for illustration)
    // You MUST replace this with a real API integration.
    // For Mapbox, it often involves:
    // 1. Geocoding deliveryAddress to deliveryLat, deliveryLon
    // 2. Geocoding pickupAddress to pickupLat, pickupLon
    // 3. Calling Mapbox Directions:
    //    `https://api.mapbox.com/directions/v5/mapbox/driving/${deliveryLon},${deliveryLat};${pickupLon},${pickupLat}?access_token=${DIRECTIONS_API_KEY}`
    // Then parsing the 'routes[0].duration' and 'routes[0].distance' from the response.

    // Let's simulate a successful API call for demonstration purposes
    // In a real scenario, this would be the result of UrlFetchApp.fetch() and parsing.
    // For a proper implementation, refer to the documentation of your chosen Directions API.

    // Using dummy values for now until a real API is integrated
    // You'd replace this section with actual API fetching and parsing
    const DUMMY_DISTANCE_MILES = 15; // Example: 15 miles
    const DUMMY_DURATION_SECONDS = 900; // Example: 900 seconds = 15 minutes

    travelDistanceMiles = DUMMY_DISTANCE_MILES;
    travelTimeMinutes = DUMMY_DURATION_SECONDS / 60; // Convert seconds to minutes

    console.log(`Estimated travel distance: ${travelDistanceMiles} miles`);
    console.log(`Estimated travel time: ${travelTimeMinutes} minutes`);

    // --- Step 2: Calculate Costs ---
    const laborCost = travelTimeMinutes * COST_PER_MINUTE_LABOR;
    const gasCost = travelDistanceMiles * COST_PER_MILE_GAS;
    const totalCost = laborCost + gasCost;

    return {
      labor: parseFloat(laborCost.toFixed(2)),
      gas: parseFloat(gasCost.toFixed(2)),
      total: parseFloat(totalCost.toFixed(2)),
      travelTimeMinutes: parseInt(travelTimeMinutes), // Return as integer minutes
    };
  } catch (error) {
    console.error("Error in calculateTravelCosts:", error);
    // Propagate a user-friendly error message back to the client
    throw new Error("Failed to calculate travel costs: " + error.message);
  }
}

var delAddress = function () {
  var ws = ssGetSheetBySpreadsheetUrl(
    "https://docs.google.com/spreadsheets/d/1-vNcN0vCLcXgMY9uwcKukUgv_4njggRZ6fqoZs-hBFE/edit#gid=138098962",
    "General Work Invoice",
  );
  var address = ws
    .getRange(2, 5, ws.getRange("E2").getDataRegion().getLastRow(), 1)
    .getValues();
  var toRnd = [Math.floor(Math.random() * Math.floor(address.length))];
  var fromRnd = [Math.floor(Math.random() * Math.floor(address.length))];
  var endAddress = address[toRnd];
  var startAddress = address[fromRnd];
  while (endAddress.join("").length === 0) {
    toRnd = [Math.floor(Math.random() * Math.floor(address.length))];
    endAddress = address[toRnd];
  }
  while (startAddress.join("").length === 0) {
    fromRnd = [Math.floor(Math.random() * Math.floor(address.length))];
    startAddress = address[fromRnd];
  }
  return {
    startPoint: startAddress,
    endPoint: endAddress,
  };
};

var endPoint = function (end, return_type) {
  var rndEnd = delAddress().endPoint;
  var pathEnd = chaseFunction(
    "4510 Split Creek Dr, Douglasville, Ga, 30135",
    end || rndEnd,
    return_type,
  );
  return pathEnd;
};

/**
 * Fetches address suggestions from an external geocoding API (e.g., OpenCage).
 * @param {string} partialAddress The partial address string to get suggestions for.
 * @returns {string[]} An array of formatted address suggestions.
 */
function getSuggestions(partialAddress) {
  // IMPORTANT: Replace 'YOUR_OPENCAGE_API_KEY' with your actual API key
  // It's best practice to store this in User Properties or a dedicated configuration
  // to avoid hardcoding it directly. For demonstration, it's here.
  const OPENCAGE_API_KEY = "YOUR_OPENCAGE_API_KEY";

  // Encode the partial address to be safe for URL
  const encodedPartialAddress = encodeURIComponent(partialAddress);

  // Construct the API endpoint URL for OpenCage
  // 'limit=5' gets up to 5 suggestions, 'countrycode=us' restricts to United States
  const apiUrl = `https://api.opencagedata.com/geocode/v1/json?q=${encodedPartialAddress}&key=${OPENCAGE_API_KEY}&limit=5&countrycode=us`;

  try {
    // Fetch data from the OpenCage API
    const response = UrlFetchApp.fetch(apiUrl, { muteHttpExceptions: true });
    if (response.getResponseCode() !== 200) {
      console.error("API Error Code:", response.getResponseCode());
      console.error("API Error Response:", response.getContentText());
      throw new Error(`API request failed: ${response.getContentText()}`);
    }
    const jsonResponse = JSON.parse(response.getContentText());

    const suggestions = [];
    if (jsonResponse.results && jsonResponse.results.length > 0) {
      jsonResponse.results.forEach(function (result) {
        // OpenCage typically uses 'formatted' for the full address string
        suggestions.push(result.formatted);
      });
    }

    console.log('Suggestions for "' + partialAddress + '":', suggestions);
    return suggestions;
  } catch (error) {
    console.error("Error in getSuggestions (using OpenCage):", error);
    // Propagate a user-friendly error message back to the client
    throw new Error("Failed to get address suggestions: " + error.message);
  }
}

var kiloPoint = function (startCoord, end) {
  var rndStart = delAddress().startPoint;
  var rndEnd = delAddress().endPoint;
  var path = chaseFunction(startCoord || rndStart, end || rndEnd, "kilometers");
  return path;
};

var lockR = function (row, col) {
  var ws = ssSheet();
  var range = ws.getDataRange().getValues();
  var lock = range.map(openR(row, col));
  return lock;
};

var lockRange = function (row, col) {
  var ws = ssSheet();
  if (ws) {
    var range = ws.getDataRange().getValues();
    var lock = range.map(openRange(row, col));
    return (ws, range, lock);
  }
};

var milePoint = function (startCoord, end) {
  if (typeof startCoord === "undefined") {
    var startCoord = delAddress().startPoint;
  }
  if (typeof end === "undefined") {
    var end = delAddress().endPoint;
  }
  var path =
    chaseFunction(startCoord, end, "miles") +
    chaseFunction(end, startCoord, "miles");
  return path;
};

var minutePoint = function (startCoord, end) {
  var rndStart = delAddress().startPoint;
  var rndEnd = delAddress().endPoint;
  var path =
    chaseFunction(startCoord || rndStart, end || rndEnd, "minutes") +
    chaseFunction(end || rndEnd, start || rndStart, "minutes");
  return path;
};

var onEdit = function (e) {
  if (e) {
    // stampRow(e);
    // stampRowItems(e);
    // stampRowRecieve(e);
    // stampRowInventoryCheck(e);
    // stampRowSales(e);
    searchEdit(e);
  }
};

var openRange = function (row, stampRow) {
  var ws = ssSheet();
  var range = ws.getRange(row, stampRow).setValue(new Date());
  return (ss, ws, range);
};

var searchEdit = function (e) {
  if (e) {
    return authLogic(e.range.getA1Notation() !== "C6")
      ? (() => {
          return;
        })()
      : authLogic(e.source.getSheetName() !== "Invoice Form")
        ? (() => {
            return;
          })()
        : (() => {
            searchRecords();
          })();
  }
};

var openR = function (row, stampRow) {
  var ws = ssSheet();
  var range = ws.getRange(row, stampRow).setValue(new Date());
  return range;
};

var stampRow = function (rowS1, colS1, colS2, e) {
  if (e) {
    var col = e.range.getColumn();
    var row = e.range.getRow();
    var startRow = rowS1;
    var ws = ssSheet().getName();
    console.log(ws);
    if (
      col !== colS1 &&
      col !== colS2 &&
      row >= startRow &&
      e.source.getActiveSheet().getName() === ws
    ) {
      if (e.source.getActiveSheet().getRange(row, colS1).getValue() === "") {
        openR(row, colS1);
      } else {
        openR(row, colS2);
      }
    }
  }
};

var stampRowItems = function (e) {
  if (e) {
    var col = e.range.getColumn();
    var row = e.range.getRow();
    var startRow = 2;
    var ws = "Items";
    if (
      col !== 4 &&
      col !== 5 &&
      row >= startRow &&
      e.source.getActiveSheet().getName() === ws
    ) {
      if (e.source.getActiveSheet().getRange(row, 4).getValue() === "") {
        lockR(row, 4);
      } else {
        lockR(row, 5);
      }
    }
    return;
  }
};

var stampRowRecieve = function (e) {
  if (e && typeof e === "object") {
    var col = e.range.getColumn();
    var row = e.range.getRow();
    var startRow = 2;
    var ws = "Recieve";
    if (
      col !== 9 &&
      col !== 10 &&
      row >= startRow &&
      e.source.getActiveSheet().getName() === ws
    ) {
      if (e.source.getActiveSheet().getRange(row, 9).getValue() === "") {
        lockR(row, 9);
      } else {
        lockR(row, 10);
      }
    }
    return;
  }
};

var stampRowSales = function (e) {
  if (e) {
    var col = e.range.getColumn();
    var row = e.range.getRow();
    var startRow = 2;
    var ws = "Sales";
    if (
      col !== 6 &&
      col !== 7 &&
      row >= startRow &&
      e.source.getActiveSheet().getName() === ws
    ) {
      if (e.source.getActiveSheet().getRange(row, 6).getValue() === "") {
        lockR(row, 6);
      } else {
        lockR(row, 7);
      }
    }
    return;
  }
};

var stampRowInventoryCheck = function (e) {
  if (e) {
    var col = e.range.getColumn();
    var row = e.range.getRow();
    var startRow = 2;
    var ws = "Inventory Check";
    if (
      col !== 4 &&
      col !== 5 &&
      row >= startRow &&
      e.source.getActiveSheet().getName() === ws
    ) {
      if (e.source.getActiveSheet().getRange(row, 4).getValue() === "") {
        lockR(row, 4);
      } else {
        lockR(row, 5);
      }
    }
    return;
  }
};

var startPoint = function (start, return_type) {
  var pathStart = chaseFunction(
    start,
    "4510 Split Creek Dr, Douglasville, Ga, 30135",
    return_type,
  );
  return pathStart;
};
