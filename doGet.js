var buildTags = function (posHtml) {
  const Route = {};

  Route.path = function (route, callback) {
    Route[route] = callback;
  };
  Route.path("tagBar", tagBuilder);
  return authLogic(validGroup())
    ? Route["tagBar"](posHtml())
    : contentFile("uiAccess");
};

function doGet(e) {
  Logger.log(">>> [LIBRARY] LIBRARY's doGet() called. e: " + JSON.stringify(e));
  validGroup();
  validateFolders();
  validateFiles();
  var argsEd = testlt();
  if (typeof globalThis.mis === "function") {
    var misArgs;
    if (typeof argsEd === "string") {
      misArgs = [argsEd];
    } else if (typeof argsEd === "object" && argsEd !== null && argsEd.name) {
      misArgs =
        argsEd.parameters && argsEd.parameters.length > 0
          ? [argsEd.name, ...argsEd.parameters]
          : [argsEd.name];
    } else {
      console.log("Unexpected argsEd type: ", argsEd);
      misArgs = ["Invalid Entry"];
    }
  }
  e && e.parameter && e.parameter["func"]
    ? e
    : (e = objectOfS(
        ["parameter"],
        [
          [
            ["func", "mis"],
            ["args", misArgs],
            ["action", "getData"],
          ],
        ],
        functionRegistry.time,
      ));
  console.log(
    functionRegistry.time +
      "\n" +
      arguments.callee.name +
      "\ne is !" +
      !e +
      ", = " +
      JSON.stringify(e),
  );
  var webAppUrl = getScriptUrl();
  if (typeof e === "object") {
    var fx = e.parameter["func"];
  } else {
    var fx = e.parameter["func"];
  }
  var titleArray = functionRegistry.getFileList();
  var content = e.parameter["args"];
  // for (var key in globalThis) {
  //   if (typeof globalThis[key] == "function") {
  //     titleArray.push(key);
  //   }
  // }
  var lowCapApp = [appList].join("").toLowerCase().split(",");
  var lowCapFunc = [e].join("").toLowerCase().split(",");
  var funFirst = lowCapApp.indexOf(lowCapFunc[0]);
  var objMaster = {
    miscellaneous: {
      section: titleArray,
    },
  };
  if (fx && typeof globalThis[fx] === "function") {
    var rndStr = globalThis.searchString().myNewArr;
    return renderTemplate(surveyPlayer(rndStr, rndStr), {}, rndStr);
  } else if (crmT(fx)) {
    try {
      var payload = fx(content);
    } catch (error) {
      return renderTemplate(surveyPlayer(fx, error), {}, content);
    }
    if (payload) {
      if (
        payload.length === 99 ||
        payload.length === 94 ||
        payload.length === 83 ||
        payload.length === 97 ||
        payload.length === 101 ||
        payload.length === 103 ||
        payload.length === 136 ||
        payload.length === 132 ||
        payload.indexOf("&entry") > -1
      ) {
        return renderTemplate(mis(payload), {}, "All departments");
      } else {
        return renderTemplate(
          `<!DOCTYPE html><html><head><base target="_self"></head><body class="amber"><div class="amber" id="div">${payload}</div></body></html>`,
          {},
          "All departments",
        );
      }
    }
  } else if (fx === objMaster.miscellaneous.section[0]) {
  } else if (fx === objMaster.miscellaneous.section[1]) {
  } else if (fx === objMaster.miscellaneous.section[3]) {
    return renderTemplate(DVar.apply(this, rndCoin));
    var aVar = objectOfS(
      ["parameter"],
      [[["func", arguments.callee.name]]],
      Math.floor((maxTime - (new Date() % (1000 * 60))) / 1000),
    );

    return renderTemplatedVar(dVar).myVar;
  } else if (fx === objMaster.miscellaneous.section[10]) {
  } else if (fx === objMaster.miscellaneous.section[11]) {
  } else if (fx === objMaster.miscellaneous.section[21]) {
  } else if (fx === objMaster.miscellaneous.section[31]) {
  } else if (fx === objMaster.miscellaneous.section[41]) {
  } else if (fx === objMaster.miscellaneous.section[51]) {
  } else if (fx === objMaster.miscellaneous.section[58]) {
    console.log(
      Math.floor((maxTime - (new Date() % (1000 * 60))) / 1000) +
        "\n" +
        arguments.callee.name +
        "\nfx is !" +
        !fx +
        ", = " +
        fx,
    );
    // Replace with your actual sheet ID
    // const spreadsheetId = 'YOUR_SPREADSHEET_ID';
    // const range = 'Sheet1!A1:C'; // Adjust the range as needed

    // Get the data from the sheet
    // const ss = SpreadsheetApp.getActiveSpreadsheet();
    // const sheet = ss.getSheetByName('Sheet1'); // Adjust the sheet name
    const sheet = ssGetSheetBySpreadsheetUrl(
      "https://docs.google.com/spreadsheets/d/1-vNcN0vCLcXgMY9uwcKukUgv_4njggRZ6fqoZs-hBFE/edit#gid=138098962",
      "Receive",
    );
    const data = sheet.getDataRange().getValues();

    // Generate the HTML table
    let html = "<table>";
    for (const row of data) {
      html += "<tr>";
      for (const cell of row) {
        html += `<td>${cell}</td>`;
      }
      html += "</tr>";
    }
    html += "</table>";

    // Create the HTML content
    const pageHtml = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Financial Statements</title>
        <style>
          table {
            border-collapse: collapse;
            width: 100%;
          }
          th, td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: left;
          }
          th {
            background-color: #f2f2f2;
          }
        </style>
      </head>
      <body>
        <h1>Financial Statements</h1>
        <div id="tabDiv">
          ${html}
        </div>
      </body>
    </html>
  `;

    // Return the HTML content
    return renderTemplate(pageHtml, {}, "Finance Landing Page");
  } else if (fx === objMaster.miscellaneous.section[59]) {
    /**
     * Handles HTTP GET requests.
     * This is primarily for testing the web app URL directly or serving static content.
     * Not strictly necessary for this specific POST-only use case, but good practice.
     * @param {GoogleAppsScript.Events.DoGet} e The event object.
     * @returns {GoogleAppsScript.HTML.HtmlOutput} A simple HTML page.
     */
    return HtmlService.createHtmlOutput(
      "<h1>Business Card Generator Backend</h1><p>This Apps Script functions as a backend for the Business Card Generator form. Please submit data via a POST request.</p>",
    );
  } else if (fx === objMaster.miscellaneous.section[71]) {
  } else if (fx === objMaster.miscellaneous.section[81]) {
  } else if (fx === objMaster.miscellaneous.section[91]) {
  } else if (fx === objMaster.miscellaneous.section[100]) {
  } else if (fx === objMaster.miscellaneous.section[101]) {
  } else if (fx === objMaster.miscellaneous.section[111]) {
    return handleRequest(e);
  } else if (fx === objMaster.miscellaneous.section[121]) {
  } else if (fx === objMaster.miscellaneous.section[131]) {
  } else if (fx === objMaster.miscellaneous.section[132]) {
    return renderTemplate(oldSEC, {}, "Securities and Exchanges");
  } else if (fx === objMaster.miscellaneous.section[141]) {
  } else if (fx === objMaster.miscellaneous.section[151]) {
  } else if (fx === objMaster.miscellaneous.section[161]) {
  } else if (fx === objMaster.miscellaneous.section[171]) {
  } else if (fx === objMaster.miscellaneous.section[181]) {
  } else if (fx === objMaster.miscellaneous.section[191]) {
  } else if (fx === objMaster.miscellaneous.section[201]) {
  } else if (fx === objMaster.miscellaneous.section[210]) {
  } else if (fx === objMaster.miscellaneous.section[211]) {
  } else if (fx === objMaster.miscellaneous.section[221]) {
  } else if (fx === objMaster.miscellaneous.section[231]) {
  } else if (fx === objMaster.miscellaneous.section[241]) {
  } else if (fx === objMaster.miscellaneous.section[251]) {
  } else if (fx === objMaster.miscellaneous.section[261]) {
  } else if (fx === objMaster.miscellaneous.section[271]) {
  } else if (fx === objMaster.miscellaneous.section[281]) {
  } else if (fx === objMaster.miscellaneous.section[291]) {
  } else if (fx === objMaster.miscellaneous.section[301]) {
  } else if (fx === objMaster.miscellaneous.section[310]) {
  } else if (fx === objMaster.miscellaneous.section[311]) {
  } else if (fx === objMaster.miscellaneous.section[321]) {
  } else if (fx === objMaster.miscellaneous.section[331]) {
  } else if (fx === objMaster.miscellaneous.section[341]) {
  } else if (fx === objMaster.miscellaneous.section[351]) {
  } else if (fx === objMaster.miscellaneous.section[361]) {
  } else if (fx === objMaster.miscellaneous.section[362]) {
  } else if (fx === objMaster.miscellaneous.section[363]) {
  } else if (fx === objMaster.miscellaneous.section[364]) {
  } else if (fx === objMaster.miscellaneous.section[365]) {
  } else if (fx === objMaster.miscellaneous.section[366]) {
  } else if (fx === objMaster.miscellaneous.section[367]) {
  } else if (fx === objMaster.miscellaneous.section[368]) {
  } else if (fx === objMaster.miscellaneous.section[369]) {
  } else if (fx === objMaster.miscellaneous.section[370]) {
  } else {
    var libFunc = "renderFile";
    var htmlArray = [
      `index proMedia epaWebsite callBack oddChances jsGame checkOnDay uiAccess popUpOpen congressLeg congressMembers jFundamentals gnuFree myGNUFreeJS Section3.Challenge1 cors edgarFriendly editor ssForms styling theRoll theWorks uiAccess`,
    ]
      .toString()
      .split(" ");
    var args =
      htmlArray[Math.floor(Math.random() * Math.floor(htmlArray.length))];
    if (renderFile(args)) {
      return renderTemplate(
        contentApp(
          `<?!= HtmlService.createTemplate(appL).evaluate().getContent() ?>`,
          {
            appL: this[libFunc].apply(this, ["oddChances"]),
          },
        ),
        { e: e },
        "oddChances",
      );
    } else {
      return handleRequest(e);
    }
  }
}

var doGetPost = function (e) {
  console.log(
    JSON.stringify(this["start"]) +
      "\n" +
      arguments.callee.name +
      "\n!e, = " +
      !e,
  );
  if (e) {
    var foobarr = e.parameter["func"];
    var barArgs = e.parameter["args"];
  }
  var libFunc = foobarr || "renderFile";
  var rndPage = [
    `index proMedia epaWebsite callBack oddChances jsGame checkOnDay uiAccess popUpOpen congressLeg congressMembers jFundamentals gnuFree myGNUFreeJS`,
  ]
    .toString()
    .split(" ")[
    Math.floor(
      Math.random() *
        Math.floor(
          [
            `index proMedia epaWebsite callBack oddChances jsGame checkOnDay uiAccess popUpOpen congressLeg congressMembers jFundamentals gnuFree myGNUFreeJS`,
          ]
            .toString()
            .split(" ").length,
        ),
    )
  ];
  args = barArgs || ["jFundamentals"];
  if (renderFile(args)) {
    return renderTemplate(
      contentApp(`<?!= appL ?>`, {
        appL:
          libFunc ||
          HtmlService.createHtmlOutput(
            `
              <script>
                document.getElementById("appList").value
              </script>
              `,
          )
            .getContent()
            .apply(this, [
              args ||
                HtmlService.createHtmlOutput(
                  `
              <script>
                document.getElementById("username").value
              </script>
              `,
                ).getContent(),
            ]),
      }),
      { e: e },
    );
  } else {
    return handleRequest(e);
  }
};

function doGetStop(e) {
  return handleRequest(e);
}

function handleRequest(e) {
  if (e && e.parameter && e.parameter.action === "getData") {
    return handleGetData();
  } else if (e && e.parameter && e.parameter.action === "submitForm") {
    return handleFormSubmission(e);
  } else {
    throw new Error("Error completing your request ", error.stack);
    // return ContentService.createTextOutput("Invalid Request").setMimeType(
    //   ContentService.MimeType.TEXT,
    // );
  }
}

function handleGetData() {
  // var payLoad = globalThis[funcUno].apply(this, [funcDos]);
  // var pIndex = payLoad.index;
  // var pApp = payLoad.app;
  // var pLink = payLoad.link;
  // var vUrl = isValidUrl(pApp);
  // if (!vUrl.hostname || pApp.indexOf(",") > -1) {
  //   let jsonData = null;
  //   let htmlDoc = null;
  //   let errM = null;
  //   if (typeof pApp === "string") {
  //     try {
  //       jsonData = JSON.parse(pApp);
  //     }
  //     catch (jsonError) {
  //       Logger.log("JSON Parse Error: " + jsonError + ", Input: " + pApp); // Log the error and the input
  //       try {
  //         htmlDoc = XmlService.parse(pApp);
  //         if (!htmlDoc.getRootElement() || htmlDoc.getRootElement() !== "html") {
  //           throw new Error("Not a valid HTML document (no <html> tag or invalid structure).");
  //         }
  //       }
  //       catch (htmlError) {
  //         Logger.log("HTML Parse Error: " + htmlError + ", Input: " + pApp);  // Log the error and the input
  //         errM = pApp;
  //         Logger.log("Response is an error message: " + errM);
  //       }
  //     }
  //     if (jsonData) {
  //       payLoad = { "jsonData": pLink };
  //     }
  //     else if (htmlDoc) {
  //       payLoad = { "htmlDoc": pLink };
  //     }
  //     else if (errM) {
  //       payLoad = { "errM": pLink };
  //     }
  //     else {
  //       Logger.log("Empty or unexpected response for string input: " + pApp);
  //     }
  //   }
  //   else if (typeof pApp === "object") {
  //     if (Object.keys(pApp) > 0) {
  //       payLoad = pApp
  //       Logger.log("pApp is a non-empty object.  Payload is: " + JSON.stringify(payLoad));
  //     }
  //     else {
  //       payLoad = payLoad
  //       Logger.log("pApp is an empty object.  No specific action taken.");
  //     }}
  // } else {
  //     const vLen = [83, 94, 97, 99, 101, 103, 136, 132]
  //     if (!vLen.includes(pApp.length)) {
  //       payLoad = { "client": pApp};
  //     }
  //     else if (vLen.includes(pApp.length)) {
  //       payLoad = { "webApp": pApp};
  //     }
  //   }

  // Logging
  var rndFunc = testlt();
  if (typeof mis === "function") {
    var misArgs;
    if (typeof rndFunc === "string") {
      misArgs = [rndFunc];
    } else if (
      typeof rndFunc === "object" &&
      rndFunc !== null &&
      rndFunc.name
    ) {
      misArgs =
        rndFunc.parameters && rndFunc.parameters.length > 0
          ? [rndFunc.name, ...rndFunc.parameters]
          : [rndFunc.name];
    } else {
      console.log("Unexpected rndFunc type: ", rndFunc);
      misArgs = ["Invalid Entry"];
    }

    var rndE = objectOfS(
      ["parameter"],
      [
        [
          ["func", "mis"],
          ["args", misArgs],
          ["action", "getData"],
        ],
      ],
      functionRegistry.time,
    );
    console.log(JSON.stringify(rndE));
  }

  // Logging
  console.log(
    formatTime(functionRegistry.time) +
      "\n" +
      arguments.callee.name +
      "\ne is !" +
      !rndE +
      ", = " +
      JSON.stringify(rndE),
  );

  var funcUno = rndE.parameter["func"];
  var funcDos = rndE.parameter["args"];
  const vLen = [83, 94, 97, 99, 101, 103, 136, 132];
  var payLoad = {}; // Initialize payload

  // --- BEGIN Refactored payLoad processing ---
  let appL = "";
  let iframeSrc =
    "https://www.clubhouse.com/@fabianlewis?utm_medium=ch_profile&utm_campaign=lhTUtHb2bYqPN3w8EEB7FQ-247242"; // Default iframe src
  let feed = "";

  try {
    let rawFuncResult = null;
    if (typeof globalThis[funcUno] === "function") {
      let parsedFuncArgs = [];
      if (funcDos) {
        try {
          parsedFuncArgs = JSON.parse(funcDos);
          if (!Array.isArray(parsedFuncArgs)) {
            parsedFuncArgs = [parsedFuncArgs];
          }
        } catch (jsonError) {
          parsedFuncArgs = [funcDos]; // Treat as a single string argument if not valid JSON
        }
      }
      rawFuncResult = globalThis[funcUno].apply(this, parsedFuncArgs);
    } else {
      console.error(
        `Error: Function "${funcUno}" not found or not callable in "${globalThis}".`,
      );
      rawFuncResult = {
        type: "error",
        message: `Function "${funcUno}" not found.`,
      };
    }

    // Helper function to process any value (rawFuncResult or a nested property like .app)
    function processContent(content) {
      content;
      if (!content) {
        return { type: "unknown", data: null };
      }

      // Regex for a basic HTTP/HTTPS URL validation
      // This regex is fairly comprehensive for common URLs but can be refined if needed.
      const urlRegex =
        /^(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/[a-zA-Z0-9]+\.[^\s]{2,}|[a-zA-Z0-9]+\.[^\s]{2,})$/i;

      // 1. Handle UrlFetchApp.HTTPResponse
      if (
        typeof content.getResponseCode === "function" &&
        typeof content.getContentText === "function"
      ) {
        const contentType = content.getHeaders()["Content-Type"] || "";
        const responseText = content.getContentText();

        if (contentType.includes("application/json")) {
          try {
            return { type: "jsonData", data: JSON.parse(responseText) };
          } catch (e) {
            return {
              type: "text",
              data: `Error parsing JSON from URL fetch: ${responseText}`,
            };
          }
        } else if (contentType.includes("text/html")) {
          return { type: "html", data: responseText };
        } else {
          return { type: "text", data: responseText };
        }
      }
      // 2. Handle Google Apps Script HtmlOutput
      else if (typeof content.getContent === "function") {
        return { type: "html", data: content.getContent() };
      }
      // 3. Handle String content (URL, JSON, HTML, or plain text)
      else if (typeof content === "string") {
        // --- MODIFIED: Use Regex for URL check ---
        if (urlRegex.test(content)) {
          return { type: "url", data: content }; // New type "url" for strings
        }
        // --- END MODIFIED ---

        try {
          const parsedJson = JSON.parse(content);
          return { type: "jsonData", data: parsedJson };
        } catch (jsonError) {
          // Not JSON, treat as HTML or plain text
          if (content.trim().startsWith("<") && content.trim().endsWith(">")) {
            // More robust HTML check
            return { type: "html", data: content };
          } else {
            return { type: "text", data: content };
          }
        }
      }
      // 4. Handle Generic Objects
      else if (typeof content === "object" && content !== null) {
        // If the object itself contains structured data you want to directly use
        if (content.html) {
          // If there's an explicit 'html' property
          return { type: "html", data: content.html };
        }
        if (content.url && urlRegex.test(content.url)) {
          // Use regex for object.url as well
          return { type: "url", data: content.url };
        }
        // Add other specific object property checks here if needed
        return { type: "object", data: content }; // Default for other objects
      }
      // 5. Default unknown
      else {
        return { type: "unknown", data: content };
      }
    }

    // Process the main rawFuncResult
    payLoad = processContent(rawFuncResult);

    // If rawFuncResult was an object and it had an 'app' property,
    // we should specifically process that 'app' property as well.
    // This assumes that the 'app' property might override or provide the primary content.
    if (
      rawFuncResult &&
      typeof rawFuncResult === "object" &&
      rawFuncResult.app
    ) {
      console.log("the 'app' property:", rawFuncResult);
      rawFuncResult.app;
      let appProcessed;

      // Check if rawFuncResult.app exists and is an object
      if (
        rawFuncResult.app &&
        typeof rawFuncResult.app === "object" &&
        !Array.isArray(rawFuncResult.app)
      ) {
        // If it's a non-array object, you can safely attempt to spread its values
        // Choose one of the options from the previous response based on your exact need:

        // Option 3: Spread all values (the arrays) of the app object
        appProcessed = processContent(Object.values(rawFuncResult.app));

        /*
        // Option 1: Spread the individual content arrays (most common intent)
        appProcessed = processContent([
          rawFuncResult.index,
          ...(rawFuncResult.app.cik || []), // Use || [] to handle cases where cik might be missing
          ...(rawFuncResult.app.ticker || []),
          ...(rawFuncResult.app.title || [])
        ]);

        // Option 2: Spread the arrays themselves as elements
        appProcessed = processContent([
          rawFuncResult.index,
          rawFuncResult.app.cik,
          rawFuncResult.app.ticker,
          rawFuncResult.app.title
        ]);
        */
      } else {
        // Handle cases where rawFuncResult.app is not a suitable object,
        // e.g., it's null, undefined, an array, or a primitive.
        // You might want to log a warning, assign a default value, or throw an error.
        console.warn(
          "rawFuncResult.app is not a valid object for spreading. Value:",
          rawFuncResult.app,
        );

        // Example: Just include rawFuncResult.index or a placeholder
        // appProcessed = processContent([rawFuncResult.index]);

        // Or, if rawFuncResult.app itself should be passed as a single item if not spreadable:
        appProcessed = processContent(rawFuncResult.app);
      }
      // Overwrite payLoad if 'app' property yields more specific or desired content
      // You might want more sophisticated merging here if both rawFuncResult and .app hold valuable distinct data.
      if (
        appProcessed.type !== "unknown" ||
        (appProcessed.data !== null && appProcessed.data !== undefined)
      ) {
        payLoad = appProcessed;
        // Also, if rawFuncResult has a 'link' or 'vApp' property, ensure it's retained if meaningful
        // This part of merging can be tailored to your specific needs if 'link' or 'vApp'
        // represent something distinct from the 'app' content but should still be propagated.
        if (rawFuncResult.link && !payLoad.link) {
          // Only add if payLoad doesn't already have it
          payLoad.link = rawFuncResult.link;
        }
        // if (rawFuncResult.index && typeof rawFuncResult.index === "string" && !payLoad.index) {
        //   // Only add if payLoad doesn't already have it
        //   payLoad.index = rawFuncResult.index;
        // }
        if (rawFuncResult.index && rawFuncResult.index.funcStr) {
          // Only add if payLoad doesn't already have it
          payLoad.dataData = rawFuncResult.index.funcStr;
        } else if (rawFuncResult.index && rawFuncResult.index.dataStr) {
          // Only add if payLoad doesn't already have it
          payLoad.dataData = rawFuncResult.index.dataStr;
        }
        if (rawFuncResult.index && rawFuncResult.index.url) {
          // Only add if payLoad doesn't already have it
          payLoad.dataIndex = rawFuncResult.index.url;
        }
      }
    }

    console.log("payLoad.type === ", payLoad.type);
    console.log("payLoad.data === ", payLoad.data);

    // Now, use the structured 'payLoad' to set the final content variables
    // (This part needs adjustments to handle the new "url" type)
    if (payLoad.type === "html") {
      iframeSrc = payLoad.index || payLoad.dataIndex; // Assign iframeSrc
      appL = payLoad.data || payLoad.dataData;
      feed = `${payLoad.link}`;
    } else if (payLoad.type === "url") {
      // --- NEW: Handle "url" type directly ---
      iframeSrc = payLoad.data || payLoad.dataData; // Assign the URL to iframeSrc
      appL = `URL provided: ${payLoad.index || payLoad.dataIndex}`;
      feed = payLoad.link;
    } else if (payLoad.type === "jsonData") {
      iframeSrc = payLoad.index || payLoad.dataIndex; // Assign iframeSrc
      appL = JSON.stringify(payLoad.data || payLoad.dataData, null, 2);
      feed = payLoad.link;
    } else if (payLoad.type === "text") {
      iframeSrc = payLoad.index || payLoad.dataIndex; // Assign iframeSrc
      appL = payLoad.data || payLoad.dataData;
      feed = payLoad.link;
    } else if (payLoad.type === "object") {
      // Here, if payLoad.data is an object, you need to decide how to display it.
      // It could contain sub-properties you want to render.
      if (payLoad.data.html || payLoad.data.app) {
        appL = payLoad.data.html || payLoad.data.app || payLoad.dataData;
        // If the object itself contains a URL, use it for iframeSrc
        iframeSrc = payLoad.data.url || payLoad.dataIndex || iframeSrc;
      } else if (payLoad.data.url) {
        // If the object explicitly has a 'url' property
        iframeSrc = payLoad.data.url || payLoad.dataIndex;
        appL = `URL provided: ${payLoad.index || payLoad.dataIndex}`;
        feed = `URL provided: ${payLoad.link}`;
      } else {
        // Default way to display a generic object: stringify it
        iframeSrc = payLoad.index || payLoad.dataIndex; // Assign iframeSrc
        appL = payLoad?.dataData?.concat(
          "\n\n\n\n" + JSON.stringify(payLoad.data, null, 2),
        );
        feed = payLoad.link;
      }
    } else if (payLoad.type === "unknown" || payLoad.type === "error") {
      feed = `Error: ${payLoad.message || payLoad.data || payLoad.dataData || "Unknown error."}`;
    }
  } catch (error) {
    console.error(`Error during payload processing:`, error);
    appL = `Critical Error: ${error.stack}`;
    // iframeSrc = ""; // Clear iframe on critical error
  }
  // --- END Refactored payLoad processing ---

  Logger.log("The final value of content. " + JSON.stringify(appL));
  var data = {
    message: {
      content: payLoad.type === "text" ? iframeSrc : feed,
      info: appL,
      link: feed, // Clear iframe on critical error
    },
    timestamp: new Date(),
  };
  return ContentService.createTextOutput(JSON.stringify(data)).setMimeType(
    ContentService.MimeType.JSON,
  );
}

function handleFormSubmission(e) {
  try {
    return ContentService.createTextOutput(
      JSON.stringify({
        success: true,
        message: "Form submitted successfully!",
      }),
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(
      JSON.stringify({ success: false, message: "Error submitting form." }),
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * This Apps Script handles POST requests from a web form to generate business cards
 * in a Google Slides presentation.
 *
 * It duplicates a template slide and replaces placeholders with submitted data.
 */

// !!! IMPORTANT: REPLACE THIS WITH THE ID OF YOUR GOOGLE SLIDES TEMPLATE PRESENTATION !!!
// You can find the ID in the URL of your Google Slides presentation:
// https://docs.google.com/presentation/d/YOUR_PRESENTATION_ID_HERE/edit
const TEMPLATE_PRESENTATION_ID = "YOUR_GOOGLE_SLIDES_PRESENTATION_ID_HERE";

// The index of the slide in your template presentation that you want to use as a template.
// Slide indices are 0-based. So, if it's the first slide, use 0. If it's the second, use 1.
const TEMPLATE_SLIDE_INDEX = 0;

/**
 * Handles HTTP POST requests.
 * This function receives data from the web form and processes it to create a new slide.
 * @param {GoogleAppsScript.Events.DoPost} e The event object containing the POST data.
 * @returns {GoogleAppsScript.Content.TextOutput} A JSON response indicating success or failure.
 */
function doPost(e) {
  try {
    // Parse the incoming JSON data from the web form
    const data = JSON.parse(e.postData.contents);

    // Basic validation for required fields
    if (!data.name || !data.company || !data.email) {
      return createJsonResponse(
        false,
        "Name, Company, and Email are required.",
      );
    }

    // Open the template presentation
    const presentation = SlidesApp.openById(TEMPLATE_PRESENTATION_ID);
    const templateSlide = presentation.getSlides()[TEMPLATE_SLIDE_INDEX];

    if (!templateSlide) {
      throw new Error(
        `Template slide at index ${TEMPLATE_SLIDE_INDEX} not found.`,
      );
    }

    // Duplicate the template slide
    // The duplicateSlide method adds the new slide at the end of the presentation.
    const newSlide = templateSlide.duplicate();

    // Define the replacements. Ensure these keys match the 'name' attributes in your HTML form
    // and the placeholders in your Google Slides template (e.g., {{NAME}}).
    const replacements = {
      "{{NAME}}": data.name || "",
      "{{TITLE}}": data.title || "",
      "{{COMPANY}}": data.company || "",
      "{{PHONE}}": data.phone || "",
      "{{EMAIL}}": data.email || "",
      "{{WEBSITE}}": data.website || "",
      "{{ADDRESS}}": data.address || "",
    };

    // Replace all defined placeholders in the new slide
    for (const placeholder in replacements) {
      // replaceAllText is case-insensitive by default.
      newSlide.replaceAllText(placeholder, replacements[placeholder]);
    }

    // You can optionally move the new slide to a specific position if needed.
    // For now, it will be at the end. If you want it at the beginning:
    // presentation.moveSlide(newSlide, 0);

    return createJsonResponse(true, "Business card created successfully!");
  } catch (error) {
    Logger.log("Error creating business card: " + error.message);
    return createJsonResponse(
      false,
      "Error creating business card: " + error.message,
    );
  }
}

/**
 * Helper function to create a JSON response.
 * @param {boolean} success Indicates if the operation was successful.
 * @param {string} message The message to send back.
 * @returns {GoogleAppsScript.Content.TextOutput} A ContentService TextOutput object.
 */
function createJsonResponse(success, message) {
  return ContentService.createTextOutput(
    JSON.stringify({ success: success, message: message }),
  )
    .setMimeType(ContentService.MimeType.JSON)
    .getContent();
}

function misBing(e, time) {
  console.log(
    functionRegistry.time +
      "\n" +
      arguments.callee.name +
      "\n!" +
      e +
      ", = " +
      !e +
      "\n!" +
      time +
      ", = " +
      !time,
  );
  console.log(JSON.stringify(e));
  const uniqueKey = sheetCalc();
  const uniqueCoArray = covArrays(uniqueKey);
  const randomKey = Math.floor(
    Math.random() * Math.floor(uniqueCoArray.length),
  ); // Math.floor(Math.random())
  const uniqueCoKey = [uniqueKey].entries().next().value;
  const randomTitle = e || uniqueCoKey[1][randomKey]["title"];
  var randomSECCo = coUtility(randomTitle)[0];
  var myVid = randomSECCo.rndTitle;
  var myVidId = randomSECCo.videoItem || coUtility()[0].videoItem;
  var infoLink = randomSECCo.videoItemUrl;
  var form = formMaker(myVid.toUpperCase(), "Forms", time);
  // fileManager(myVid.toUpperCase(), "Forms", time)
  var formUrl = form.getPublishedUrl();
  form.addSectionHeaderItem();
  var result = JSON.stringify(seoSheet(randomTitle).keyWords);
  const html = HtmlService.createTemplate(`<html id="test">
      <head>
      </head>
      <body>
      <div class="row">
        <nav class="col s10 push-s1 push-m1 push-l1 menu z-depth-5 card-panel amber scale-out scale-in" style="font-size: 30px">
          <div class="container">
            <div class="col s12 receipt nav-wrapper deep-purple darken-1">
              <?!= myRandoms ?>...
            </div></div>
          </nav>
      </div>
        <div class="row">
        <div class="col s10 card-panel amber push-s1 push-m1 push-l1 receipt valign-wrapper z-depth-5 scale-transition scale-out scale-in ">
        <div class="container amber">
        <div class="col s12 receipt deep-purple darken-1" id="player1">
        </div></div></div></div>
        <script>document.getElementById('func').addEventListener('change', <?!= userClicked ?>)</script>
        <script>document.addEventListener("DOMContentLoaded", <?!= onPageLoad ?>)</script>
        <input type="hidden" value="<?= getUrl(ScriptApp) ?>" id="url" />
        <script>document.addEventListener("DOMContentLoaded", function()
      {document.getElementById("player1").innerHTML = ${result};})</script>
      </body>
    </html>`);
  html.onPageLoad = function () {
    //var url = urlData.toString();
    // var linkLoad = document.createElement("a");
    // linkLoad.href = url + "?func=doGet&args=e";
    // linkLoad.id = "linkLOAD";
    // linkLoad.target = "popup";
    // document.body.appendChild(linkLoad);
    // document.getElementById("linkLOAD").click();
  };
  html.userClicked = function () {
    //console.log(document.getElementById("test").innerHTML)
    // Init a timeout variable to be used below
    let timeout = null;
    (() => {
      // Clear the timeout if it has already been set.
      // This will prevent the previous task from executing
      // if it has been less than <MILLISECONDS>
      // clearTimeout(timeout);
      // Make a new timeout set to go off in 1000ms (1 second)
      // timeout = setTimeout
      // (function  ()
      // {console.log('Input Value:', textInput.value);}, 5000)();
      if (typeof url === "undefined") {
        var urlData = document.getElementById("url").value;
        var url = urlData.toString();
      }
      var func = document.getElementById("func").value;
      var args = document.getElementById("args").value;
      const confirmation = window.confirm(
        "Click OK to continue to the destination.",
      );
      if (confirmation) {
        var linkHome = document.createElement("a");
        var linkFollow = document.createElement("a");
        linkFollow.href =
          url +
          "?func=" +
          encodeURIComponent(func) +
          "&args=" +
          encodeURIComponent(args);
        linkFollow.id = "linkFOLLOW";
        linkFollow.target = "_top";
        document.body.appendChild(linkFollow);
        document.getElementById("linkFOLLOW").click();
        document.getElementById("linkFOLLOW").remove();
      }
      document.getElementById("func").value = "";
      document.getElementById("args").value = "";
    })();
  };
  ((html.vidApp = function () {
    const serverSide = function (func, args) {
      return new Promise((resolve, reject) => {
        google.script.run
          .withSuccessHandler((result) => {
            resolve(result);
          })
          .withFailureHandler((error) => {
            console.log(document.getElementById("test").innerHTML);
            reject(error);
          })
          .runBoilerplate(func, args);
      });
    }; //serverSide closed
    // VideoPlayer Widget
    serverSide("userClicked")
      .then((videoSearch) => {
        document.getElementById("vids").innerHTML = videoSearch;
      }) //Global then closed
      .catch((error) => {
        alert(error);
        console.log(error);
      });
  }), //vidApp closed //Global catch closed
    (html.jsApp = function () {
      const serverSide = function (func, args) {
        return new Promise((resolve, reject) => {
          google.script.run
            .withSuccessHandler((result) => {
              resolve(result);
            })
            .withFailureHandler((error) => {
              console.log(document.getElementById("test").innerHTML);
              reject(error);
            })
            .runBoilerplate(func, args);
        });
      }; //serverSide closed
      serverSide("sheetCalc")
        .then((res) => {
          var input = res;
          for (var i = 0; i < input.length; i++) {
            var randomKey = Math.floor(
              Math.random() * Math.floor(input.length),
            ); // Math.floor(Math.random())
            var currentCik = input[i][randomKey]["cik_str"];
            var currentTicker = input[i][randomKey]["ticker"];
            var currentTitle = input[i][randomKey]["title"];
            var companyHtml =
              "<div><p><em> Hello Scroll!<em>,<br><span> <div id='searchMe'>${currentTitle}</div> <h2>${currentTicker}</h2> is ready to trade. </span><br>Best Regards.<br>P.S. <a href='https://www.sec.gov/edgar/browse/?CIK=${currentCik}&owner=exclude' target='_blank' rel='noopener noreferrer'>Click here for info!</a></p></div>";
          }
          document.getElementById("template1").innerHTML = companyHtml;
        }) //Global then closed
        .catch((error) => {
          alert(error);
          console.log(error);
        });
    }), //jsApp closed; //Global catch closed
    (html.myRandoms = randomTitle));
  return html.evaluate().getContent();
} //webApp closed    // })Global object closed

var userClicked = function () {
  console.log(functionRegistry.time + "\n" + arguments.callee.name);
  //console.log(document.getElementById("test").innerHTML)
  // Init a timeout variable to be used below
  let timeout = null;
  (() => {
    // Clear the timeout if it has already been set.
    // This will prevent the previous task from executing
    // if it has been less than <MILLISECONDS>
    // clearTimeout(timeout);
    // Make a new timeout set to go off in 1000ms (1 second)
    // timeout = setTimeout
    // (function  ()
    // {console.log('Input Value:', textInput.value);}, 5000)();
    if (typeof url === "undefined") {
      var urlData = document.getElementById("url").value;
      var url = urlData.toString();
    }
    var uname = document.getElementById("username").value;
    const confirmation = window.confirm(
      "Click OK to continue to the destination.",
    );
    if (confirmation) {
      var linkHome = document.createElement("a");
      var linkFollow = document.createElement("a");
      linkHome.href = "https://flewis21.github.io/videoSEC/";
      linkFollow.href = url + "?func=dtls&args=" + encodeURIComponent(uname);
      linkHome.id = "linkHOME";
      linkFollow.id = "linkFOLLOW";
      linkHome.target = "popup";
      linkFollow.target = "_top";
      document.body.appendChild(linkHome);
      document.body.appendChild(linkFollow);
      document.getElementById("linkFOLLOW").click();
      document.getElementById("linkFOLLOW").remove();
    }
    document.getElementById("linkHOME");
    document.getElementById("username").value = "";
  })();
}; //Global object closed

//  {cik_str: await currentCik,
//                             ticker: await currentTicker,
//                             title: await currentTitle,
//                             relatedVideo: serverside(`videoPlayer`, [`playList`, await currentTitle]),
//                             startPageUrl: await startPageUrl
//                             };
// `
// <div><p>
// <em> Hello Scroll!<em>,
// <br>
// <span>
// title <h2>ticker</h2> is ready to trade. </span>
// <br>
// Best Regards.
// <br>
// P.S. Click <a href="https://www.sec.gov/edgar/browse/?CIK=cik_str&owner=exclude" target="_blank">ticker</a> for Info at the SEC</p>
// </div>`
// function doGet(e)
//     {content = contentFile("jsGame",
//             {appJs:
//         function()
//           {const serverSide =
//     function (func, args)
//           {return new Promise((resolve, reject) =>
//           {google.script.run.withSuccessHandler(result =>
//                 {resolve(result)
//               })
//         .withFailureHandler(error =>
//     {console.log(document.getElementById("test").innerHTML)
//   reject(error)
//               })
//         .runAll(`boilerplate.${[func]}`, [args])
//               })
//               };
// // serverSide('youTube', []).then(
// //   (content) => {document.getElementById('template').innerHTML = content
// //                       }).catch(
// //     (error) => {console.log(error)
// //                 });
// // serverSide('checkOnDay', []).then(
// //   (content) => {document.getElementById('checkOnDay').addEventListener('click', userClicked);
// //   function userClicked()
// //         {document.getElementById('template').innerHTML = content}
// //                       }).catch(
// //     (error) => {console.log(error)
// //                 });
// serverSide('videoPlayer', []).then(
//   (content) => {document.getElementById('mainIndex').addEventListener('click', userClicked);
//   function userClicked()
//         {document.getElementById('pageTarget').target = "_parent"
//         document.getElementById('template').innerHTML = content}
//                       }).catch(
//     (error) => {console.log(error)
//                 });
//             },
//             })
//        return renderTemplate(contentApp(content))
//             }

// var doGet = function(e)
//       {const Route =
//       {
//       };
//         Route.path = function(route, callback)
//   {Route[route] = callback
//   }
//       Route.path("default", wwAccess);
//           return authLogic(typeof e.parameter["default"] !== "undefined")? (function()
//   {return authLogic(e.  parameter["default"] === "")?
//   (function()
//               {return wwAccess("development", proMediaSnip)(e)//: contentFile("uiAccess");
//                 })(): authLogic(e.parameter["default"] === "epa")?
//   (function()
//               {return renderTemplate(wwAccess("epa", epaData)())//: contentFile("uiAccess");
//               })(): authLogic(e.parameter["default"] === "edgar")?
//   (function()
//               {return renderTemplate(wwAccess("edgar", edgarData)())//: contentFile("uiAccess");
//                 })(): authLogic(e.parameter["default"] === "odd")?
//   (function()
//               {return renderTemplate(wwAccess("odd", breakthrough)(e))//: contentFile("uiAccess");
//                 })(): authLogic(e.parameter["default"] === "gamer")?
//   (function()
//               {return renderTemplate(wwAccess("gamer", jsGameScripts)())//: contentFile("uiAccess");
//                 })(): authLogic(e.parameter["default"] === "checkOD")?
//   (function()
//             {return renderTemplate(wwAccess("checkOD", checkOnDay)())//: contentFile("uiAccess");
//               })(): authLogic(e.parameter["default"] === "usGov")?
//   (function()
//               {return renderTemplate(wwAccess("usGov", congressLeg)())//: contentFile("uiAccess");
//                 })(): authLogic(e.parameter["default"] === "jFun")?
//   (function()
//               {return renderTemplate(wwAccess("jFun", jFundamentals)(e))//: contentFile("uiAccess");
//                 })(): authLogic(e.parameter["default"] === "ssTest")?
//   (function()
//               {return renderTemplate(wwAccess("ssTest", superTest)(e))//: contentFile("uiAccess");
//                 })(): authLogic(e.parameter["default"] === "ssDataEntry")?
//   (function()
//               {return renderTemplate(wwAccess("ssDataEntry", dataEntry)(e))//: contentFile("uiAccess");
//                 })():  authLogic(e.parameter["default"] === "ssgnuFree")?
//   (function()
//               {return renderTemplate(wwAccess("ssgnuFree", contentFile)("gnuFree"))//: contentFile("uiAccess");
//                 })():  authLogic(e.parameter["default"] === "ssDCUO")?
//   (function()
//               {return renderTemplate(wwAccess("ssDCUO", contentFile)("oddChances"))//: contentFile("uiAccess");
//                 })():  authLogic(e.parameter["default"] === "ssPro")?
//   (function()
//               {return renderTemplate(wwAccess("ssPro", contentFile)("proMedia"))//: contentFile("uiAccess");
//                 })():  authLogic(e.parameter["default"] === "ssCSS")?
//   (function()
//               {return renderTemplate(wwAccess("ssCSS", contentFile)("styling"))//: contentFile("uiAccess");
//                 })():  authLogic(e.parameter["default"] === "ssChemical")?
//   (function()
//               {return renderTemplate(wwAccess("ssChemical", contentFile)("epaWebsite"))//: contentFile("uiAccess");
//                 })():  authLogic(e.parameter["default"] === "ssFinance")?
//   (function()
//               {return renderTemplate(wwAccess("ssFinance", contentFile)("edgarFriendly"))//: contentFile("uiAccess");
//                 })():  authLogic(e.parameter["default"] === "ssHome")?
//   (function()
//               {return renderTemplate(wwAccess("ssHome", contentFile)("index"))//: contentFile("uiAccess");
//                 })():  authLogic(e.parameter["default"] === "ssJCalls")?
//   (function()
//               {return renderTemplate(wwAccess("ssJCalls", contentFile)("callBack"))//: contentFile("uiAccess");
//                 })():  authLogic(e.parameter["default"] === "ssGamer")?
//   (function()
//               {return renderTemplate(wwAccess("ssGamer", contentFile)("jsGame"))//: contentFile("uiAccess");
//                 })():  authLogic(e.parameter["default"] === "ssDateTime")?
//   (function()
//               {return renderTemplate(wwAccess("ssDateTime", contentFile)("checkOnDay"))//: contentFile("uiAccess");
//                 })():  authLogic(e.parameter["default"] === "ssCatch")?
//   (function()
//               {return renderTemplate(wwAccess("ssCatch", contentFile)("uiAccess"))//: contentFile("uiAccess");
//                 })():  authLogic(e.parameter["default"] === "ssForm")?
//   (function()
//               {return renderTemplate(wwAccess("ssForm", contentFile)("popUpOpen"))//: contentFile("uiAccess");
//                 })():  authLogic(e.parameter["default"] === "ssUSCongress")?
//   (function()
//               {return renderTemplate(wwAccess("ssUSCongress", contentFile)("congressLeg"))//: contentFile("uiAccess");
//                 })():  authLogic(e.parameter["default"] === "ssUSHouse")?
//   (function()
//               {return renderTemplate(wwAccess("ssUSHouse", contentFile)("congressMembers"))//: contentFile("uiAccess");
//                 })():  authLogic(e.parameter["default"] === "ssJSFun")?
//   (function()
//               {return renderTemplate(wwAccess("ssJSFun", contentFile)("jFundamentals"))//: contentFile("uiAccess");
//                 })():  authLogic(e.parameter["default"] === "ssGNUJSFun")?
//   (function()
//               {return renderTemplate(wwAccess("ssGNUJSFun", contentFile)("myGNUFreeJS"))//: contentFile("uiAccess");
//                 })():
//   (function()
//       {// Route.path("default", defaultWebsite);
//   // Route.path("escape", escapedHTML);
//   // Route.path("test", testJSON);
//   // Route.path("tagBar", tagBuilder);
//   // Route.path("uiAccess", uiAccess);
//   // Route.path("test", contentFile);
//   // Route.path("default", HtmlService.createHtmlOutput);
//   // Route.path("default", HtmlService.createHtmlOutput);
//   // Route.path("default", HtmlService.createHtmlOutput);
//   // Route.path("default", HtmlService.createHtmlOutput);
//   // Route.path("default", HtmlService.createHtmlOutput);
//   // Route.path("default", HtmlService.createHtmlOutput);
//   // Route.path("default", HtmlService.createHtmlOutput);
//   // Route.path("default", HtmlService.createHtmlOutput);
//   return wwAccess(e.parameter["default"], defaultWebsite)(e)
//                })()})():
//   (function()
//               {return renderTemplate(Route["default"]("html", contentFile)('index'))
//                 })()
//                         }

// var doGet = function(e) {//   // const Route = {};
//   // Route.path = function(route, callback) {//   //       Route[route] = callback
//   // }
//   // var pageCheck = wwAccess()
//   // return wwAccess("unTested", uiAccess);
//   if (typeof e.parameter["default"] === "undefined")
//   {//     // baseUrl = getUrl(ScriptApp);
//   var emails = validate()
//   var emailsCount = validate().toString().split(",").length;
//   var randomEmail = emails[Math.floor(Math.random() * emailsCount)]
//   var gamerUrl = getUrl(ScriptApp) + "?default"
//   // var homeP = wwAccess("test", contentFile)
//   return renderTemplate(wwAccess("test", contentFile)("index"    , {//         utf_8: ("\n<meta charset=\"UTF-8\">"),
//         viewport: ("<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">"),
//         fontAwesome: ("<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css\" integrity=\"sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==\" crossorigin=\"anonymous\" referrerpolicy=\"no-referrer\" />"),
//         google_signin_client: ("\n<meta content=\"739921544160-nvqbr8cmqcs35n700q94mn5qnjh7vdr5.apps.googleusercontent.com\" name=\"google-signin-client_id\"></meta>"),
//         googleApisOnApiLoad: ("\n<script src=\"https://apis.google.com/js/api.js?onload=onApiLoad\"></script>"),
//         googleApis_defer: ("\n<script async=\"\" defer=\"\" src=\"https://apis.google.com/js/platform.js\"></script>"),
//         googleApis_preConnect: ("<link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">"),
//         gstatic_preConnect: ("<link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>"),
//         googleApisCss: ("<link href=\"https://fonts.googleapis.com/css2?family=Libre+Barcode+128&family=Montserrat:ital@1&family=Oswald&family=Roboto&display=swap\" rel=\"stylesheet\">"),
//         materializeCss: ("\n  <link href=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css\" rel=\"stylesheet\"></link>\n"),
//         googleApisIcon: ("\n <link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\"></link>\n  "),
//         materializeMin: ("\n  <script src=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js\"></script>\n  "),
//         website:  ("\n * {\n box-sizing: border-box;margin: 0;padding: 0;font-family: \"Roboto\", sans-serif;\n }\n "),
//         html: ("\n html,\n body {\n height: 100%;\n }\n "),
//         main: ("\n main {\n height: 92%;\n margin-top: 10px;\n }\n "),
//         body: ("\n body {\n background-color: #ffc107;\n }\n "),
//         header: ("\n header {\n background-color: rgba(255,255,255,.1);\n color: #a7e1ee;\n font-size: smaller;\n }\n "),
//         header_h1: ("\n header h1 {\n font-family: \"Montserrat\", cursive;\n margin-left: 15px;\n }\n "),
//         grid: ("\n .grid {\n display: grid;\n }\n "),
//         flex_row: ("\n .flex-row {\n display: flex;\n flex-direction: row;\n }\n "),
//         flex_column: ("\n .flex-column {\n display: flex;\n flex-direction: column;\n }\n "),
//         order_menu_payment: ("\n .order,\n .menu-payment {\n border: solid .5px;\n border-radius: 10px;\n margin: 0px 10px 5px 10px;\n height: 100%;\n max-height: 100%;\n }\n "),
//         seperator1: ("\n /* -----------------------------------ORDER--------------------------- */\n "),
//         order: ("\n .order {\n background-color: white;\n flex: 0 0 440px;\n overflow: auto;\n }\n "),
//         receipt: ("\n .receipt {\n border: solid .5px;\n margin: 10px 15px 5px 15px;\n box-shadow: 3px 3px 2px rgb(3,3,3);\n user-select: none;\n flex-grow: 1;\n }\n "),
//         receipt_company_info_receipt_footer: (".receipt,\n .company-info,\n .receipt-footer {\n align-items: center;\n }\n "),
//         company_info: ("\n .company-info {\n margin-top: 5px;\n }\n "),
//         company_name: ("\n #company-name {\n font-size: 1.5rem;\n }\n "),
//         company_phone: ("\n #company-phone {\n font-size: 1.25rem;\n }\n "),
//         th_description: ("\n th.description {\n width: 180px;\n text-align: left;\n }\n "),
//         th_price: ("\n th.price {\n width: 75px;\n }\n "),
//         quantity_price_subtotal_delete: ("\n .quantity,\n .price,\n .subtotal,\n .delete {\n text-align: right;\n }\n "),
//         receipt_details: ("\n .receipt-details {\n margin-top: 10px;\n flex-grow: 1;\n }\n "),
//         dotted_border: ("\n .dotted-border {\n border-bottom: dotted 2px;\n }\n "),
//         fa_trash_canHover: ("\n .fa-trash-can:hover {\n transform: scale(1.2);\n }\n "),
//         tableSummary_table: ("\n table.summary-table {\n text-align: right;\n }\n "),
//         tbodySummary_table_tdNth_child1: ("\n tbody.summary-table td:nth-child(1) {\n width: 277px;\n }\n "),
//         tbodySummary_table_tdNth_child2: ("\n tbody.summary-table td:nth-child(2) {\n width: 75px;\n }\n "),
//         tbodySummary_table_tdNth_child3: ("\n tbody.summary-table td:nth-child(3) {\n width: 25px;\n }\n "),
//         receipt_footer: ("\n .receipt-footer {\n padding-top: 20px;\n }\n "),
//         barcode: ("\n #barcode {\n font-family: \"Libre Barcode 128\", cursive;\n font-size: 70px;\n margin-top: 10px;\n }\n "),
//         toolbar: ("\n .toolbar {\n flex: 0 0 60px;\n justify-content: space-around;\n align-items: center;\n border: solid .5px;\n border-radius: 10px;\n margin: 0px 15px 5px 15px;\n }\n "),
//         toolbar_icon: ("\n .toolbar-icon {\n font-size: 2rem;\n }\n "),
//         toolbar_iconHover: ("\n .toolbar-icon:hover {\n transform: scale(1.2);\n }\n "),
//         seperator2: ("\n /* ----------------------------Menu-Payment-------------------------- */\n "),
//         menu_payment: ("\n .menu-payment {\n background: rgba(255, 255, 255, .05);\n flex-grow: 1;\n z-index: 0;\n }\n "),
//         menu: ("\n .menu {\n flex-flow: row wrap;\n grid-column: 1;\n grid-row: 1;\n align-content: flex-start;\n z-index: 0;\n height: 100%;\n overflow: auto;\n }\n "),
//         menu_item: ("\n .menu-item {\n flex-flow: column nowrap;\n flex-basis: auto;\n flex-shrink: 0;\n margin: 5px;\n background: rgba(255, 255, 255, .05);\n width: 150px;\n }\n "),
//         menu_img: ("\n .menu-img {\n border-radius: 50%;\n max-width: 100%;\n height: auto;\n display: block;\n margin: auto;\n }\n "),
//         figcaption: ("\n figcaption {\n color: white;\n text-align: center;\n user-select: none;\n }\n "),
//         menu_itemHover: ("\n .menu-item:hover>.menu-img {\n transform: scale(1.03);\n }\n "),
//         gamer: gamerUrl,
//         email: randomEmail
//      })
//      )//: contentFile('uiAccess');
//    Route.path("production", includeApp);
//    return renderTemplate(Route["production"]("<?!= index ?>"))//, { properties: contentApp("\n \n  <? var style = styleHtml() ?> <?!= style ?>\n  <div class=\"row menu-img\">\n  <div class=\"container menu-img col s12\">\n  <div class=\"row menu-img pulse btn-large amber scale-transition scale-out scale-in\">\n  \n <? var webAppUrls = navBar(\"https://www.sec.gov/files/company_tickers.json\", \"Edgar\", \"https://avaddc.com/agency/the-paul-rue-agency/4022/\", \"Defensive Driving\", \"https://script.google.com/macros/s/AKfycbyKOcrgL3g9dTOJSBvjTJD8_S_QGd0_S8j2PwNdKO-3ctWo0uV8UN1bgOTJwFK493qC/exec\", \"Portfolio Beta\", \"https://script.google.com/macros/s/AKfycbxTu7GwOomQ4H97GFSCYfujxWdumQJxT3EkYcrS1fpOr_UFTc-K4BELWHKHC-jVSSx0/exec\", \"B Roll\"); ?>\n  <?!= webAppUrls ?>\n  </div>\n  </div>\n  <div class=\"row menu-img\">\n  <div class=\"container menu-img col s12\">\n  <div class=\"container menu-img col s12\">\n <p id=\"p1\">\n  "), htmlStyle: styleHtml(), })
//   } else
//   {//     switch (e.parameter["default"])
//     {//       case "posHtml":
//         Route.path("default", buildTags);
//         return authLogic(validate())? Route["default"](posHtml): contentFile('uiAccess');
//       case "wwAccess":
//         Route.path("default", wwAccess);
//         return authLogic(validate())? Route["default"](): contentFile('uiAccess');
//       default:
//         return wwAccess("default", runIt)(e)//: contentFile('uiAccess');

//     }
//   }
//   // runIt(e, {path: "default"})
//   // Route.path = function(route, callback) {//   //       Route[route] = callback
//   // }
//   // Route.path("jsonXpath", defaultWebsite)
//   // Route["jsonXpath"]
//   // callback = e.parameter["callback"].replace(/"/g, "");
//   // console.log(callback)
//   // route = e.parameter["webApp"];
//   // console.log(route)
//   // console.log(Route[route])
//     // if(activeSsId() !== "")
// // { // <!----WebApp Website----!>

// //   Route.path("jsonXpath", runIt)
// //   return Route["jsonXpath"](e);

// // } else   return
// // if(e.parameter["webApp"] !== "" && e.parameter["callback"].replace(/"/g, "") !== "")
// //   {// //       Route.path(route,callback)
// //       return Route[route](e);

// //   } else return

//   // console.log(JSON.stringify(e));
//   // const Route = {};
//   // const test = e.parameter['test']
//   // Route.path = function(route, callback) {//   //       Route[route] = callback
//   // }
//   // if(e.parameter['webApp'] === "") { // <!--------------------WebApp Website----------------------!>
//   //   Route.path(e.parameter['webApp'], defaultWebsite)
//   //   return Route[e.parameter['webApp']](e);
//   // } else if (e.parameter['webApp'] === 'jsonEndpoint') { // <!--------------JsonEndpoint Website---------------!>
//   //   Route.path(e.parameter['webApp'], jsonEndpoint)
//   //   return Route[e.parameter['webApp']](e);
//   // } else if (e.parameter['webApp'] === 'devWebsite') { // <!-------------------DevWebsite Website----------------!>
//   //   Route.path(e.parameter['webApp'], devWebsite)
//   //   return Route[e.parameter['webApp']](e);
//   // } else if (e.parameter['webApp'] === 'escapedHTML') { // <!-----------------EscapedHTML Website----------------!>
//   //   Route.path(e.parameter['webApp'], escapedHTML)
//   //   return Route[e.parameter['webApp']](e);
//   // } else if (e.parameter['webApp'] === 'edgarData') { // <!-------------------EdgarData Website----------------!>
//   //   Route.path(e.parameter['webApp'], edgarData)
//   //   return Route[e.parameter['webApp']](e);
//   // } else if (e.parameter['webApp'] === 'videoPlayer') { // <!-----------------VideoPlayer Website----------------!>
//   //   Route.path(e.parameter['webApp'], videoPlayer)
//   //   return Route[e.parameter['webApp']](e);
//   // } else if (e.parameter['webApp'] === 'dateTime') { // <!-------------------DateTime Website----------------!>
//   //   Route.path(e.parameter['webApp'], dateTime)
//   //   return Route[e.parameter['webApp']](e);
//   // } else if (e.parameter['webApp'] === 'runIt') { // <!-------------------DateTime Website----------------!>
//   //   Route.path(e.parameter['webApp'], runIt)
//   //   return Route[e.parameter['webApp']](e);
//   // } else if (e.parameter['webApp'] === 'superDoGet') { // <!-------------------DateTime Website----------------!>
//   //   Route.path(e.parameter['webApp'], e.parameter["callback"].replace(/"/g, ""));
//   //   return Route[e.parameter['webApp']](e);
//   // };
// }

// var runBoilerplate = function (func, someargs) {
//   console.log(
//     functionRegistry.time +
//       "\n" +
//       arguments.callee.name +
//       "\nfunc is !" +
//       !func +
//       ", = " +
//       func +
//       "\nsomeargs is !" +
//       !someargs +
//       ", = " +
//       someargs,
//   );
//   var libFunc = func || "doGet";
//   var args = someargs || [];
//   return this[libFunc].apply(this, args);
// };

function runBoilerplate(func, args, callCount = 0) {
  // === GUARDRAIL STARTS HERE ===
  const MAX_RECURSION_DEPTH = 10; // Or a more suitable number for your app
  if (callCount >= MAX_RECURSION_DEPTH) {
    throw new Error(
      `Maximum recursion depth (${MAX_RECURSION_DEPTH}) exceeded. This indicates a potential infinite loop.`,
    );
  }
  // === GUARDRAIL ENDS HERE ===

  var libName = "foo";
  // Check if maxTime exists as a global variable
  const timeRemaining =
    typeof functionRegistry.maxTime !== "undefined" &&
    functionRegistry.maxTime instanceof Date
      ? Math.floor(
          (functionRegistry.maxTime.getTime() -
            (new Date().getTime() % (1000 * 60))) /
            1000,
        ) // Use .getTime() for Date objects
      : "N/A"; // Provide a fallback if maxTime is not defined or not a Date

  console.log(
    `Time remaining: ${timeRemaining}` +
      `\nFunction: ${arguments.callee.name}` +
      `\nfunc: ${func}, args: ${JSON.stringify(args)}`,
  );
  try {
    // If 'foo' is still where your functions like 'mis' are, keep this line.
    // However, if your functions like 'mis' are also global (e.g., globalThis.mis),
    // then you might just call them directly or use `this[func]` if `this` refers to the global scope.
    // Based on the logs, 'mis' and 'yahooSort' seem to be global functions.
    let rawResult;
    if (typeof globalThis[func] === "function") {
      // Pass the updated callCount to the next function
      // NOTE: You'll need to modify the function being called to accept this new parameter.
      // rawResult = globalThis[func].apply(this, args); // Call the global function
      rawResult = globalThis[func].apply(this, [...args, callCount + 1]);
    } else {
      // Fallback or error if func is not found in globalThis
      throw new Error(
        `Function '${globalThis[func]}' not found in global scope.`,
      );
    }

    // ... (rest of your processing logic for rawResult)
    if (
      rawResult &&
      typeof rawResult.getContent === "function" &&
      typeof rawResult.setXFrameOptionsMode === "function"
    ) {
      return { type: "html", data: rawResult.getContent() };
    } else if (
      rawResult &&
      typeof rawResult.getResponseCode === "function" &&
      typeof rawResult.getContentText === "function"
    ) {
      const contentType = rawResult.getHeaders()["Content-Type"] || "";
      const responseText = rawResult.getContentText();
      if (contentType.includes("application/json")) {
        try {
          return { type: "jsonData", data: JSON.parse(responseText) };
        } catch (e) {
          return {
            type: "text",
            data: `Error parsing JSON from URL fetch: ${responseText}`,
          };
        }
      } else if (contentType.includes("text/html")) {
        return { type: "html", data: responseText };
      } else {
        return { type: "text", data: responseText };
      }
    } else if (typeof rawResult === "string") {
      try {
        const parsedJson = JSON.parse(rawResult);
        return { type: "jsonData", data: parsedJson };
      } catch (jsonError) {
        if (
          rawResult.trim().startsWith("<") &&
          rawResult.trim().endsWith(">")
        ) {
          return { type: "html", data: rawResult };
        } else {
          return { type: "text", data: rawResult };
        }
      }
    } else if (typeof rawResult === "object" && rawResult !== null) {
      if (rawResult.html) {
        return { type: "html", data: rawResult.html };
      }
      if (rawResult.url) {
        return { type: "url", data: rawResult.url };
      }
      return { type: "object", data: rawResult };
    } else {
      return { type: "unknown", data: rawResult };
    }
  } catch (error) {
    Logger.log("Error in " + func + ": " + error.message);
    throw new Error(`Server error in ${func}: ${error.message}`);
  }
}

/**
 * Server-side function to receive a new 'e' object from the client
 * and re-render the entire page based on it.
 * @param {GoogleAppsScript.Events.AppsScriptHttpRequestEvent} clientEObject The 'e' object sent from the client, with updated parameters.
 * @returns {GoogleAppsScript.HTML.HtmlOutput} The complete new HTML content wrapped in HtmlOutput.
 */
function reRenderPageWithNewE(clientEObject) {
  Logger.log(
    "Server-side: reRenderPageWithNewE called with clientEObject: " +
      JSON.stringify(clientEObject),
  );
  // Call the original doGet function, passing the clientEObject as if it were a new request.
  // doGet should return an HtmlOutput object.
  return doGet(clientEObject); // <-- Ensure doGet returns HtmlOutput, not just a string
}

var runAll = function (func, args) {
  try {
    var arr = func.split(".");
    var libFunc = arr[0];
  } catch (error) {
    return;
  }
  args = args || [];
  return this[libFunc].apply(this, args);
};

var superDoGet = function (route, callback) {
  const Route = {};
  Route.path = function (route, callback) {
    Route[route] = callback;
  };
  // if(runIt(e)) { // <!----WebApp Website----!>
  console.log(callback);
  //     Route.path(route,callback)
  //     return authLogic(validate())? Route[route](e): contentFile('uiAccess');
  // } else return
};
