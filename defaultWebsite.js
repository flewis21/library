// is the conveyance of power and authority an objective, measurable quantity?

// No, the conveyance of power and authority is not inherently an objective, measurable quantity. Here's why:

// Subjectivity in Definition: Power and authority themselves are complex concepts with no single, universally agreed-upon definition. What constitutes "power" or "authority" can vary significantly depending on the context, the individuals involved, and the values held by the observer.
// Qualitative Aspects: The impact of power and authority often involves qualitative factors like influence, respect, legitimacy, and the consent of those subject to it. These are difficult to quantify precisely.
// Contextual Dependence: The effectiveness of the conveyance of power and authority depends heavily on the specific context – the social, political, and cultural environment in which it occurs.
// However, there are some aspects that can be measured or assessed to some degree:

// Visible Demonstrations: Observable actions like issuing commands, making decisions, controlling resources, or enforcing rules can provide evidence of the exercise of power.
// Compliance and Obedience: The extent to which others comply with the directives of an authority figure can be observed and, to some extent, measured.
// Social Influence: The ability to influence the beliefs, attitudes, or behaviors of others can be assessed through surveys, observations, or other social science research methods.
// In conclusion: While some aspects of the conveyance of power and authority can be measured or assessed, it's crucial to acknowledge the inherent limitations and the significant role of subjective interpretation in understanding these complex phenomena.

function appSort(numIndex, time) {
  // console.log(JSON.stringify(this["start"]) + "\n" + arguments.callee.name + "\n!numIndex = " + !numIndex)
  var titleArray = [];
  for (var key in globalThis) {
    // console.log("that function: " + arguments.callee.caller.name + "\nthis function: " + arguments.callee.name + "\nkey: " +  uniqueKey[key]["title"] + "\nelapsedTime: " + elapsedTime)
    if (typeof globalThis[key] == "function") {
      titleArray.push(key);
    }
  }
  var arrData = [
    "e",
    "t",
    "a",
    "o",
    "n",
    "r",
    "i",
    "s",
    "h",
    "d",
    "l",
    "f",
    "c",
    "m",
    "u",
    "g",
    "y",
    "p",
    "w",
    "b",
    "v",
    "k",
    "x",
    "j",
    "q",
    "z",
  ];
  var numLen = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    numIndex,
  ];
  var rndNumLen = numLen[Math.floor(Math.random() * Math.floor(numLen.length))];
  var freqArray = [];
  var i = 0;
  var l = arrData.length;
  for (i, l; i < l; i++) {
    titleArray.sort((a, b) => {
      // return console.log("that function: " + arguments.callee.caller.name + "\nthis function: " + arguments.callee.name + "\nsort: " +  a + " OR " + b + "\nelapsedTime: " + elapsedTime)
      if (a[0].toLowerCase() === arrData[rndNumLen || i]) {
        if (freqArray.indexOf(a) > -1) {
          return;
        } else {
          freqArray.push(a);
        }
      }
    });
  }
  // console.log(freqArray)
  return freqArray;
};

/**
 * Creates a new Google script with a random structure and content,
 * leveraging available ScriptsApp properties and methods from the provided documentation.
 *
 * NOTE: Programmatic control over font styles and direct theme color
 * setting (beyond the initial script creation) is NOT available via the ScriptApp API.
 * The script will use Google Scripts' default theme or the last manually applied theme.
 *
 * @returns {string} The URL of the newly created random Google Script.
 */
function createRandomFunction(searchString) {
  // --- Configuration for randomness ---
  const SCRIPT_TITLES = searchString? Array(searchString) : functionRegistry.fileList;
  const SCRIPT_DESCRIPTIONS = [
    "A randomly generated script to gather insights.",
    "Please fill out this script at your leisure. Content is randomized.",
    "Exploring the possibilities of programmatic script creation.",
    "This script was created by an algorithm. Enjoy!",
    "Your input helps us understand randomness better.",
    "An automated inquiry for diverse data points.",
    "Completely random, yet surprisingly functional.",
  ];
  const QUESTION_WORDS = [
    "Name",
    "Email",
    "Date",
    "Preference",
    "Opinion",
    "Favorite",
    "Quantity",
    "Description",
    "Rating",
    "Contact",
    "Experience",
    "Level",
    "Choice",
    "Details",
    "Location",
    "Time",
    "Duration",
    "Feedback",
  ];
  const CHOICE_WORDS = [
    "Option A",
    "Choice B",
    "Value C",
    "Item D",
    "Selection E",
    "Yes",
    "No",
    "Maybe",
    "Agree",
    "Disagree",
    "Red",
    "Blue",
    "Green",
    "Small",
    "Medium",
    "Large",
  ];

  const MIN_SECTIONS = 1;
  const MAX_SECTIONS = 1;
  const MIN_QUESTIONS_PER_SECTION = 1;
  const MAX_QUESTIONS_PER_SECTION = 1;

  // --- Create the script ---
  const scriptTitle =
    SCRIPT_TITLES[Math.floor(Math.random() * SCRIPT_TITLES.length)];
  const script = globalThis[scriptTitle]; //ScriptApp.newTrigger(scriptTitle).timeBased().everyHours(24).create();
  // const funcXName = script.name;
  Logger.log(`Random script: ${scriptTitle} = ${script?.toString()}`);

  // --- Set Basic script Properties ---
  const scriptDescription =
    SCRIPT_DESCRIPTIONS[Math.floor(Math.random() * SCRIPT_DESCRIPTIONS.length)];

  // Randomly decide to collect email or not
  // script(Math.random() < 0.5);

  // Randomly decide to show progress bar for multi-section scripts
  // if (Math.random() < 0.7) {
  //   script.setProgressBar(true); // Using setProgressBar as found in script methods
  // }

  // --- Add Sections and Questions ---
  const numSections =
    Math.floor(Math.random() * (MAX_SECTIONS - MIN_SECTIONS + 1)) +
    MIN_SECTIONS;

  const questionTitle = `${QUESTION_WORDS[Math.floor(Math.random() * QUESTION_WORDS.length)]} ${Math.random() < 0.5 ? "?" : ""}`;
  const isRequired = Math.random() < 0.7; // 70% chance of being required

  let fileIndex; //= crmT(scriptTitle)
  let fileParams; //= functionRegistry.paramsList[fileIndex]
  let scriptUrl; //= script()//.getPublishedUrl();
  let mapArr = {};
  const userSubmit = FormApp.create(scriptTitle);
  const sectionHeaderItem = userSubmit
    .addSectionHeaderItem()
    .setTitle(questionTitle + " (New Section)");
  const checkboxGridItem = userSubmit
    .addCheckboxGridItem()
    .setTitle(questionTitle + " (Checkbox Grid)");
  const gridItem = userSubmit
    .addGridItem()
    .setTitle(questionTitle + " (Radio Grid)");
  const imageItem = userSubmit
    // .addImageItem()
    // .setTitle(questionTitle + " (Image)");
  let vidTubeTime = needPastTime(scriptTitle);
  let tubeArr = vidTubeTime.playList;
  var tubeEngine = vidTubeTime.hardUrl;
  const videoItem = userSubmit
  // Use a valid YouTube video ID
  // if (tubeArr) {
  const videoAlignments = [
    FormApp.Alignment.LEFT,
    FormApp.Alignment.CENTER,
    FormApp.Alignment.RIGHT,
  ];
  if (tubeArr.length > 0) {
    let tubeUrlsArr = [];
    tubeArr.forEach((vidId) =>{
      let linkLocation = "https://www.youtube.com/watch?v=" + vidId;
      tubeUrlsArr.push(linkLocation);
      let rndTube = Math.floor(Math.random() * (Math.floor(tubeUrlsArr.length)));
      var tubeVideoUrl = tubeUrlsArr[rndTube];
      videoItem
        .addVideoItem()
        .setTitle(questionTitle)
        .setHelpText(encodeURI(tubeEngine))
        .setVideoUrl(tubeVideoUrl)
        .setWidth(Math.floor(Math.random() * 300) + 400) // 400-700px width
        .setAlignment(
          videoAlignments[Math.floor(Math.random() * videoAlignments.length)],
        );
    })
  }
  // }
  else {
    videoItem
      .addVideoItem()
      .setTitle(questionTitle)
      .setHelpText(encodeURI(tubeEngine))
      .setVideoUrl("https://www.youtube.com/watch?v=dQw4w9WgXcQ") // Rick Astley - Never Gonna Give You Up (a classic placeholder)
      .setWidth(Math.floor(Math.random() * 300) + 400) // 400-700px width
      .setAlignment(
        videoAlignments[Math.floor(Math.random() * videoAlignments.length)],
      );
  }
  const imgFile = seoPictTime(scriptTitle, functionRegistry.time)?.playList;
  let rndfileImage = imgFile[Math.floor(Math.random() * (Math.floor(imgFile.length)))];
  if (rndfileImage) {
    let deepFileDive = DriveApp.getFilesByName(rndfileImage);
    if (deepFileDive.hasNext()) {
      var nextDFD = deepFileDive?.hasNext()
    }
  }
  if (nextDFD) { 
    while (nextDFD) {
      let dFile = deepFileDive
      // Use a public image URL or provide a Blob
      imageItem.setImage(dFile.getBlob()); // Replace with a real public image ID
      // Or use a placeholder image if you don't want to use DriveApp and have a public URL
      // imageItem.setUrl('https://via.placeholder.com/150'); // This method doesn't exist, must be Blob
      imageItem.setWidth(Math.floor(Math.random() * 300) + 200); // 200-500px width
      const alignments = [
        FormApp.Alignment.LEFT,
        FormApp.Alignment.CENTER,
        FormApp.Alignment.RIGHT,
      ];
      imageItem.setAlignment(
        alignments[Math.floor(Math.random() * alignments.length)],
      );
    }
  }
  else {
    const alignments = [
      FormApp.Alignment.LEFT,
      FormApp.Alignment.CENTER,
      FormApp.Alignment.RIGHT,
    ];
    let tempSortImg = [];
    imgFile.forEach((piece, imgFileIndex) => {
      // while (piece) {
      var srPiece = piece[piece.indexOf("src2=")];
      var svPiece = piece[piece.indexOf("xmlns=")];
      var srImgRes = [piece.slice(srPiece).toString().split("src2=")]
        .join("")
        .split('"')[1];
      if ([svPiece].indexOf("svg") > -1) {
        var svImgRes = [piece.slice(svPiece).toString().split("xmlns=")]
          .join("")
          .split('"')[1];
      }
      if (piece.indexOf("http") > -1) {
        var elaspeTime = functionRegistry.time;
        var timeToExecute = functionRegistry.timeLeftToExecute;
        if (srImgRes || svImgRes) {
          var imgUrl = srImgRes || svImgRes;
        }
        if ([imgUrl].join("").length > 0) {
          if (tempSortImg.indexOf(imgUrl) !== -1) {
            return
          }
          else {
            tempSortImg.push(imgUrl)
          }
        }
        // if (
        //   timeToExecute <= 6 * 60 * 1000 &&
        //   timeToExecute >= 5.98 * 60 * 1000
        // ) {
        //   console.log(
        //     "that function: " +
        //       arguments.callee.caller.name +
        //       "\nthis function: " +
        //       arguments.callee.name +
        //       "\nTime limit six minutes",
        //   );
        // }
        // if (timeToExecute <= 0.05 * 60 * 1000) {
        //   console.log(
        //     "piece: " +
        //       piece[0] +
        //       "\ntimeToExecute: " +
        //       timeToExecute.valueOf(),
        //   );
        //   return;
        // }
        // return piece[0];
      }
      // return;
      // }
    });
    tempSortImg.forEach((priImg) =>{
      userSubmit.addPageBreakItem().setTitle("Storyboard");
      userSubmit.addSectionHeaderItem().setTitle("timestamp: " + new Date());
      try {
        imageItem
          .addImageItem()
          .setTitle(questionTitle + ": " + [script]?.join(""))
          .setImage(UrlFetchApp.fetch(priImg))
          .setWidth(Math.floor(Math.random() * 800) + 200) // 200-500px width
          .setAlignment(
          alignments[Math.floor(Math.random() * alignments.length)],
        );
      }
      catch (error) {
        console.info(error.stack)
      }
    })
    // Use a public image URL or provide a Blob
    // imageItem.setImage(UrlFetchApp.fetch(rndfileImage)); // Replace with a real public image ID
    // Or use a placeholder image if you don't want to use DriveApp and have a public URL
    // imageItem.setUrl('https://via.placeholder.com/150'); // This method doesn't exist, must be Blob
    // imageItem.setWidth(Math.floor(Math.random() * 300) + 200); // 200-500px width
    // const alignments = [
    //   FormApp.Alignment.LEFT,
    //   FormApp.Alignment.CENTER,
    //   FormApp.Alignment.RIGHT,
    // ];
    // imageItem.setAlignment(
    //   alignments[Math.floor(Math.random() * alignments.length)],
    // );
  }
  if (isRequired) gridItem.setRequired(true);
  if (Math.random() < 0.3) {
    gridItem.setValidation(
      FormApp.createGridValidation()
        .requireLimitOneResponsePerColumn()
        .build(),
    );
  }
  checkboxGridItem.setRows(["Feature A", "Feature B", "Feature C"]);
  checkboxGridItem.setColumns(["Yes", "No", "N/A"]);
  if (isRequired) checkboxGridItem.setRequired(true);
  if (Math.random() < 0.3) {
    checkboxGridItem.setValidation(
      FormApp.createCheckboxGridValidation()
        .requireLimitOneResponsePerColumn()
        .build(),
    );
  }
  if (Math.random() < 0.7) {
    sectionHeaderItem.setHelpText(
      "This is a random section header for organization.",
    );
  }
  if (isRequired) {
    // console.info(userEMail);
    if (!script || script?.length === 0) {
      console.info(script?.toString() || scriptTitle);
      // var tempObj =
      if (!script) {
        mapArr[scriptTitle] = [];
        scriptUrl = isMapped(mapArr, [driveManager(scriptTitle, functionRegistry.time)]);//userSubmit.getPublishedUrl()]);
      }
      else {
        scriptUrl = resolveParams(
          isMapped({ a: [] }, [scriptTitle])["a"],
        );
      }
    } 
    else {
      fileIndex = crmT(scriptTitle);
      fileParams = functionRegistry.paramsList[fileIndex];
      let tempObj = isMapped({ a: [...fileParams.parameters] }, [
          scriptTitle,
          [...fileParams.parameters]
        ])["a"];
      scriptUrl = resolveParams(tempObj);
    }
  } 
  else {
    if (!script || script.length === 0) {
      if (!script){
        mapArr[scriptTitle] = [];
        scriptUrl = isMapped(mapArr, [driveManager(scriptTitle, functionRegistry.time)]);//userSubmit.getPublishedUrl()]);
      }
      else {
        mapArr[scriptTitle] = [];
        scriptUrl = isMapped(mapArr, [driveManager(scriptTitle, functionRegistry.time)]);//userSubmit.getPublishedUrl()]);
      }
    }
    else {
      fileIndex = crmT(scriptTitle);
      fileParams = functionRegistry.paramsList[fileIndex];
      mapArr[scriptTitle] = [];
      scriptUrl = isMapped(mapArr, [...fileParams.parameters]);
    }
  }
  // scriptUrl = userSubmit.getPublishedUrl();
  // break;
  for (let s = 0; s < numSections; s++) {
    // if (s > 0) {
    //   // Add page break for subsequent sections
    //   script
    //     .addPageBreakItem()
    //     .setTitle(
    //       `Section ${s + 1}: ${QUESTION_WORDS[Math.floor(Math.random() * QUESTION_WORDS.length)]} Details`,
    //     )
    //     .setHelpText(
    //       `This is a random section for more ${QUESTION_WORDS[Math.floor(Math.random() * QUESTION_WORDS.length)]} related questions.`,
    //     );
    // }

    const numQuestions =
      Math.floor(
        Math.random() *
          (MAX_QUESTIONS_PER_SECTION - MIN_QUESTIONS_PER_SECTION + 1),
      ) + MIN_QUESTIONS_PER_SECTION;

    for (let q = 0; q < numQuestions; q++) {
      // All EventTypes that have corresponding add...Item() methods and are not UNSUPPORTED
      const eventTypes = [
        // ScriptApp.EventType.CLOCK,
        // ScriptApp.EventType.ON_CHANGE,
        // ScriptApp.EventType.ON_EDIT,
        // ScriptApp.EventType.ON_EVENT_UPDATED,
        // ScriptApp.EventType.ON_FORM_SUBMIT,
        ScriptApp.EventType.ON_OPEN,
      ];
      const rndTMult = Math.floor(Math.random() * eventTypes.length)
      const randomType = 
        eventTypes[rndTMult];
      Logger.log(randomType);

      switch (randomType) {
        case ScriptApp.EventType.ON_OPEN:
          const rndText = driveDocBrowser();
          const userText =
            rndText[Math.floor(Math.random() * Math.floor(rndText.length))];
          const textItem = DocumentApp.openByUrl(userText);
          // .addTextItem()
          // .setTitle(questionTitle + " (Short Text)");
          // if (isRequired) {
          //   console.info(textItem.getBody().getText().toString());
          //   if (script.length === 0) {
          //     console.info(script?.toString());
          //     scriptUrl = resolveParams(
          //       isMapped({ a: [] }, [scriptTitle])["a"],
          //     );
          //   } else {
          //     fileIndex = crmT(scriptTitle);
          //     fileParams = functionRegistry.paramsList[fileIndex];
          //     scriptUrl = resolveParams(
          //       isMapped({ a: [...fileParams.parameters] }, [
          //         scriptTitle,
          //         [...fileParams.parameters],
          //       ])["a"],
          //     );
          //   }
          // } else {
          //   mapArr[scriptTitle] = [];
          //   if (script.length === 0) {
          //     scriptUrl = isMapped(mapArr, []);
          //   }
          //   else {
          //     fileIndex = crmT(scriptTitle);
          //     fileParams = functionRegistry.paramsList[fileIndex];
          //     mapArr[scriptTitle] = [...fileParams];
          //     scriptUrl = isMapped(mapArr, [userText]);
          //   }
          // }
          if (Math.random() < 0.4) {
            // Add random text/number validation
            const validationType = Math.floor(Math.random() * 5); // More text validations
            let validationBuilder = FormApp.createTextValidation()// ScriptApp.WeekDay; // .requireAllScopes(ScriptApp.AuthMode.FULL);
            switch (validationType) {
              case 0:
                validationBuilder.requireNumber()//.FRIDAY; //;
                break;
              case 1:
                validationBuilder.requireTextContainsPattern("test")//.MONDAY; //;
                break;
              case 2:
                validationBuilder.requireTextIsEmail()//.WEDNESDAY; //;
                break;
              case 3:
                validationBuilder.requireTextIsUrl()//.THURSDAY; //;
                break;
              case 4:
                validationBuilder.requireTextLengthGreaterThanOrEqualTo(5)//.TUESDAY; //;
                break;
            }
            userSubmit
            .addTextItem()
            .setTitle(questionTitle + "\n" +  textItem.getBody().getText())//.textItem
              // .getBody()
              // .appendListItem
              .setValidation(
                validationBuilder.build()
                // .withCustomMessage("Please follow the specific text rule.")
                // .build()
              ).setHelpText("Please follow the specific text rule.")
          }
          break;

        case ScriptApp.EventType.ON_CHANGE:
          const userChangeSheetId = sheetsUrls(scriptTitle);
          // const rndParagraphs = driveDocBrowser();
          // const userParagraph = rndParagraphs[Math.floor(Math.random() * Math.floor(rndParagraphs.length))];
          // const paragraphItem = ScriptApp.newTrigger(scriptTitle).forSpreadsheet(userChangeSheetId).onOpen().create(); //ScriptApp.newTrigger(scriptTitle).forDocument(DocumentApp.openByUrl(userParagraph).getId()).onOpen().create();
          // .addParagraphTextItem()
          // .setTitle(questionTitle + " (Long Text)");
          const pChoice = DriveApp.getFileById(userChangeSheetId);
          // if (isRequired) {
          //   console.info(pChoice.toString());
          //   if (script.length === 0) {
          //     console.info(script?.toString());
          //     scriptUrl = resolveParams(
          //       isMapped({ a: [] }, [scriptTitle])["a"],
          //     );
          //   } else {
          //     fileIndex = crmT(scriptTitle);
          //     fileParams = functionRegistry.paramsList[fileIndex];
          //     scriptUrl = resolveParams(
          //       isMapped({ a: [...fileParams.parameters] }, [
          //         scriptTitle,
          //         [...fileParams.parameters],
          //       ])["a"],
          //     );
          //   }
          // } else {
          //   mapArr[scriptTitle] = [];
          //   if (script.length === 0) {
          //     scriptUrl = isMapped(mapArr, []);
          //   }
          //   else {
          //     fileIndex = crmT(scriptTitle);
          //     fileParams = functionRegistry.paramsList[fileIndex];
          //     mapArr[scriptTitle] = [...fileParams];
          //     scriptUrl = isMapped(mapArr, [pChoice.getMimeType()]);
          //   }
          // }
          if (Math.random() < 0.3) {
            // Add random length validation
            // **** CORRECTED: Use createParagraphTextValidation() ****
            pChoice.getAccess(email());
            userSubmit
              .addParagraphTextItem()
              .setTitle(questionTitle + "\n" + pChoice.getDescription())
              .setValidation(
                FormApp.createParagraphTextValidation()
                  .requireTextLengthGreaterThanOrEqualTo(20)
                  .withCustomMessage("Please write at least 20 characters.")
                  .build(),
              );
          }
          break;

        case ScriptApp.EventType.ON_EDIT:
          const userEditSheetId = sheetsUrls(scriptTitle);
          // const editTrigger = ScriptApp.newTrigger(scriptTitle).forSpreadsheet(userEditSheetId).onOpen().create();
          // const mcItem = editTrigger;
          // const cbItem = editTrigger;
          // const listItem = editTrigger;
          // .addMultipleChoiceItem()
          // .setTitle(questionTitle + " (Choose One)");
          const mcChoices = [];
          const cbChoices = [];
          const listChoices = [];
          const cChoice = DriveApp.getFileById(userEditSheetId);
          var cCId = cChoice.getId();
          const dChoice = SpreadsheetApp.openById(cCId);
          const dSheets = dChoice.getSheets();
          dSheets.map((sheet) => {
            if (sheet) {
              let sheetName = sheet.getName();
              let endLine = sheet.getLastRow() + 1;
              let endColumn = sheet.getLastColumn() + 1;
              sheet
                .getRange(endLine, 1, 3)
                .setValues([["Row 1"], ["Row 2"], ["Row 3"]]);
              sheet
                .getRange(1, endColumn, 3)
                .setValues([["Disagree"], ["Neutral"], ["Agree"]]);
            }
          });
          // dSheets.map((sheet) =>{
          //   if (sheet) {
          //     let sheetName = sheet.getName()
          //     let endColumn = sheet.getLastColumn() + 1;
          //     sheet.getRange(1,endColumn,3).setValues([["Disagree"], ["Neutral"], ["Agree"]])
          //   }
          // });
          for (let i = 0; i < Math.floor(Math.random() * 3) + 2; i++) {
            // 2-4 choices
            mcChoices.push(
              cChoice.setDescription(
                CHOICE_WORDS[Math.floor(Math.random() * CHOICE_WORDS.length)],
              ),
            );
          }
          for (let i = 0; i < Math.floor(Math.random() * 4) + 2; i++) {
            // 2-5 choices
            cbChoices.push(
              CHOICE_WORDS[Math.floor(Math.random() * CHOICE_WORDS.length)],
            );
          }
          for (let i = 0; i < Math.floor(Math.random() * 3) + 2; i++) {
            // 2-4 choices
            listChoices.push(
              cChoice.setDescription(
                CHOICE_WORDS[Math.floor(Math.random() * CHOICE_WORDS.length)],
              ),
            );
          }
          // cChoice.makeCopy().setDescription(mcChoices);
          // cChoice.makeCopy().setDescription(cbChoices);
          // cChoice.makeCopy().setDescription(listChoices);
          // if (isRequired) script();
          if (Math.random() < 0.3) {
            // Add random checkbox validation
            cChoice.getAccess(email());
            // ScriptApp.createCheckboxValidation()
            //   .setHelpText("Select between 1 and 3 options.")
            //   .requireSelectBetween(1, 3)
            //   .build(),
            // );
          }
          // if (isRequired) {
          //   console.info(dChoice.toString());
          //   if (script.length === 0) {
          //     console.info(script?.toString());
          //     scriptUrl = resolveParams(
          //       isMapped({ a: [] }, [scriptTitle])["a"],
          //     );
          //   } else {
          //     fileIndex = crmT(scriptTitle);
          //     fileParams = functionRegistry.paramsList[fileIndex];
          //     scriptUrl = resolveParams(
          //       isMapped({ a: [...fileParams.parameters] }, [
          //         scriptTitle,
          //         [...fileParams.parameters],
          //       ])["a"],
          //     );
          //   }
          // } else {
          //   mapArr[scriptTitle] = [];
          //   if (script.length === 0) {
          //     scriptUrl = isMapped(mapArr, []);
          //   }
          //   else {
          //     fileIndex = crmT(scriptTitle);
          //     fileParams = functionRegistry.paramsList[fileIndex];
          //     mapArr[scriptTitle] = [...fileParams];
          //     scriptUrl = isMapped(mapArr, [cChoice.getMimeType()]);
          //   }
          // }; // Randomly add 'Other' option
          // if (Math.random() < 0.2) cbItem.showOtherOption(true); // Randomly add 'Other' option
          break;

        // case ScriptApp.EventType.ON_EVENT_UPDATED:
        //   const userEMail = email();
        //   const cbItem = ScriptApp.newTrigger(scriptTitle).forSpreadsheet(userSheetId).onOpen().create();// ScriptApp.newTrigger(scriptTitle).forUserCalendar(userEMail).onEventUpdated()?.create();
        //     // .addCheckboxItem()
        //     // .setTitle(questionTitle + " (Select All That Apply)");
        //   break;

        // case ScriptApp.EventType.ON_FORM_SUBMIT:
        //   const listItem = ScriptApp.newTrigger(scriptTitle).forForm(FormApp.create(scriptTitle).getId()).onFormSubmit().create()
        //     // .addListItem()
        //     // .setTitle(questionTitle + " (Dropdown)");
        //   break;

        case ScriptApp.EventType.CLOCK:
          // const clockTrigger = ScriptApp.newTrigger(scriptTitle).timeBased().everyHours(24).create();
          // const dateItem = clockTrigger
          // const dateTimeItem =  clockTrigger// ScriptApp.newTrigger(scriptTitle).forSpreadsheet(userSheetId).onOpen().create();
          // .addDateItem()
          // .setTitle(questionTitle + " (Date)");
          // if (isRequired) {
          //   // console.info(script?.toString());
          //   if (script.length === 0) {
          //     console.info(script?.toString());
          //     scriptUrl = resolveParams(
          //       isMapped({ a: [] }, [scriptTitle])["a"],
          //     );
          //   } else {
          //     fileIndex = crmT(scriptTitle);
          //     fileParams = functionRegistry.paramsList[fileIndex];
          //     scriptUrl = resolveParams(
          //       isMapped({ a: [...fileParams.parameters] }, [
          //         scriptTitle,
          //         [...fileParams.parameters],
          //       ])["a"],
          //     );
          //   }
          // } else {
          //   mapArr[scriptTitle] = [];
          //   if (script.length === 0) {
          //     scriptUrl = isMapped(mapArr, []);
          //   }
          //   else {
          //     fileIndex = crmT(scriptTitle);
          //     fileParams = functionRegistry.paramsList[fileIndex];
          //     mapArr[scriptTitle] = [...fileParams];
          //     scriptUrl = isMapped(mapArr, [new Date().getDate().toLocaleString()]);
          //   }
          // }; //.setRequired(true);
          // if (isRequired) script();
          // dateItem.setIncludesYear(Math.random() < 0.5); // Randomly include year
          // dateTimeItem.setIncludesYear(Math.random() < 0.5); // Randomly include year
          break;

        // case ScriptApp.ItemType.DATETIME:
        //   const dateTimeItem = script
        //     .addDateTimeItem()
        //     .setTitle(questionTitle + " (Date & Time)");
        //   break;

        case ScriptApp.EventType.ON_EVENT_UPDATED:
          const userEMail = email();
          // try {
          //   const durationItem = ScriptApp.newTrigger(scriptTitle).forUserCalendar(userEMail).onEventUpdated().create();
          // }
          // catch (error){
          //   console.warn("No Bueno!", error.stack)
          // }
          // .addDurationItem()
          // .setTitle(questionTitle + " (Duration)");
          // if (isRequired) {
          //   console.info(userEMail);
          //   if (script.length === 0) {
          //     console.info(script?.toString());
          //     // var tempObj =
          //     scriptUrl = resolveParams(
          //       isMapped({ a: [] }, [scriptTitle])["a"],
          //     );
          //   } 
          //   else {
          //     fileIndex = crmT(scriptTitle);
          //     fileParams = functionRegistry.paramsList[fileIndex];
          //     // var tempObj =
          //     scriptUrl = resolveParams(
          //       isMapped({ a: [...fileParams.parameters] }, [
          //         scriptTitle,
          //         [...fileParams.parameters],
          //       ])["a"],
          //     );
          //   }
          // } 
          // else {
          //   mapArr[scriptTitle] = [];
          //   if (script.length === 0) {
          //     scriptUrl = isMapped(mapArr, []);
          //   }
          //   else {
          //     fileIndex = crmT(scriptTitle);
          //     fileParams = functionRegistry.paramsList[fileIndex];
          //     mapArr[scriptTitle] = [...fileParams];
          //     scriptUrl = isMapped(mapArr, [userEMail]);
          //   }
          // }
          break;

        // case ScriptApp.ItemType.TIME:
        //   const timeItem = script
        //     .addTimeItem()
        //     .setTitle(questionTitle + " (Time)");
        //   if (isRequired) timeItem.setRequired(true);
        //   break;

        // case ScriptApp.ItemType.SCALE:
        //   const scaleItem = script
        //     .addScaleItem()
        //     .setTitle(questionTitle + " (Rating Scale)");
        //   scaleItem.setLowerBound(1);
        //   scaleItem.setUpperBound(Math.floor(Math.random() * 5) + 5); // Scale of 1 to 5-9
        //   if (Math.random() < 0.5) scaleItem.setLabels("Lowest", "Highest");
        //   if (isRequired) scaleItem.setRequired(true);
        //   break;

        // case ScriptApp.ItemType.RATING:
        //   const ratingItem = script
        //     .addRatingItem()
        //     .setTitle(questionTitle + " (Icon Rating)");
        //   ratingItem.setRatingScaleLevel(Math.floor(Math.random() * 5) + 5); // Scale of 5-9
        //   const ratingIcons = [
        //     ScriptApp.RatingIconType.STAREnum,
        //     ScriptApp.RatingIconType.HEARTEnum,
        //     ScriptApp.RatingIconType.THUMB_UPEnum,
        //   ];
        //   ratingItem.setRatingIcon(
        //     ratingIcons[Math.floor(Math.random() * ratingIcons.length)],
        //   );
        //   if (isRequired) ratingItem.setRequired(true);
        //   break;

        // case ScriptApp.ItemType.GRID:
        //   break;

        // case ScriptApp.ItemType.CHECKBOX_GRID:
        //   break;

        // case ScriptApp.EventType.ON_FORM_SUBMIT:
        //   const userSubmit = FormApp.create(scriptTitle);
        //   const sectionHeaderItem = userSubmit
        //     .addSectionHeaderItem()
        //     .setTitle(questionTitle + " (New Section)");
        //   const checkboxGridItem = userSubmit
        //     .addCheckboxGridItem()
        //     .setTitle(questionTitle + " (Checkbox Grid)");
        //   const gridItem = userSubmit
        //     .addGridItem()
        //     .setTitle(questionTitle + " (Radio Grid)");
        //   const imageItem = userSubmit
        //     // .addImageItem()
        //     // .setTitle(questionTitle + " (Image)");
        //   const videoItem = userSubmit
        //     .addVideoItem()
        //     .setTitle(questionTitle + " (Video)");
        //   // Use a valid YouTube video ID
        //   videoItem.setVideoUrl("https://www.youtube.com/watch?v=dQw4w9WgXcQ"); // Rick Astley - Never Gonna Give You Up (a classic placeholder)
        //   videoItem.setWidth(Math.floor(Math.random() * 300) + 400); // 400-700px width
        //   const videoAlignments = [
        //     FormApp.Alignment.LEFT,
        //     FormApp.Alignment.CENTER,
        //     FormApp.Alignment.RIGHT,
        //   ];
        //   videoItem.setAlignment(
        //     videoAlignments[Math.floor(Math.random() * videoAlignments.length)],
        //   );
        //   let imgFile = seoPictTime(scriptTitle, functionRegistry.time).playList;
        //   let rndfileImage = imgFile[Math.floor(Math.random() * (Math.floor(imgFile.length)))];
        //   if (rndfileImage) {
        //     let deepFileDive = DriveApp.getFilesByName(rndfileImage);
        //     var nextDFD = deepFileDive.hasNext()
        //   }
        //   if (nextDFD) { 
        //     while (nextDFD) {
        //       let dFile = deepFileDive
        //       // Use a public image URL or provide a Blob
        //       imageItem.setImage(dFile.getBlob()); // Replace with a real public image ID
        //       // Or use a placeholder image if you don't want to use DriveApp and have a public URL
        //       // imageItem.setUrl('https://via.placeholder.com/150'); // This method doesn't exist, must be Blob
        //       imageItem.setWidth(Math.floor(Math.random() * 300) + 200); // 200-500px width
        //       const alignments = [
        //         FormApp.Alignment.LEFT,
        //         FormApp.Alignment.CENTER,
        //         FormApp.Alignment.RIGHT,
        //       ];
        //       imageItem.setAlignment(
        //         alignments[Math.floor(Math.random() * alignments.length)],
        //       );
        //     }
        //   }
        //   else {
        //     imgFile.map((piece) => {
        //       // while (piece) {
        //       var srPiece = piece[piece.indexOf("src2=")];
        //       var svPiece = piece[piece.indexOf("xmlns=")];
        //       var srImgRes = [piece.slice(srPiece).toString().split("src2=")]
        //         .join("")
        //         .split('"')[1];
        //       if ([svPiece].indexOf("svg") > -1) {
        //         var svImgRes = [piece.slice(svPiece).toString().split("xmlns=")]
        //           .join("")
        //           .split('"')[1];
        //       }
        //       if (piece.indexOf("http") > -1) {
        //         var elaspeTime = functionRegistry.time;
        //         var timeToExecute = functionRegistry.timeLeftToExecute;
        //         userSubmit.addPageBreakItem().setTitle([questionTitle].join(""));
        //         userSubmit.addSectionHeaderItem().setTitle(piece);
        //         if (srImgRes || svImgRes) {
        //           var imgUrl = srImgRes || svImgRes;
        //         }
        //         if ([imgUrl].join("").length > 0) {
        //           const alignments = [
        //             FormApp.Alignment.LEFT,
        //             FormApp.Alignment.CENTER,
        //             FormApp.Alignment.RIGHT,
        //           ];
        //           imageItem
        //             .addImageItem()
        //             .setTitle(questionTitle + " storyboard")
        //             .setImage(UrlFetchApp.fetch(imgUrl))
        //             .setWidth(Math.floor(Math.random() * 300) + 200) // 200-500px width
        //             .setAlignment(
        //             alignments[Math.floor(Math.random() * alignments.length)],
        //           );
        //         }
        //         // if (
        //         //   timeToExecute <= 6 * 60 * 1000 &&
        //         //   timeToExecute >= 5.98 * 60 * 1000
        //         // ) {
        //         //   console.log(
        //         //     "that function: " +
        //         //       arguments.callee.caller.name +
        //         //       "\nthis function: " +
        //         //       arguments.callee.name +
        //         //       "\nTime limit six minutes",
        //         //   );
        //         // }
        //         // if (timeToExecute <= 0.05 * 60 * 1000) {
        //         //   console.log(
        //         //     "piece: " +
        //         //       piece[0] +
        //         //       "\ntimeToExecute: " +
        //         //       timeToExecute.valueOf(),
        //         //   );
        //         //   return;
        //         // }
        //         // return piece[0];
        //       }
        //       // return;
        //       // }
        //     });
        //     // Use a public image URL or provide a Blob
        //     // imageItem.setImage(UrlFetchApp.fetch(rndfileImage)); // Replace with a real public image ID
        //     // Or use a placeholder image if you don't want to use DriveApp and have a public URL
        //     // imageItem.setUrl('https://via.placeholder.com/150'); // This method doesn't exist, must be Blob
        //     // imageItem.setWidth(Math.floor(Math.random() * 300) + 200); // 200-500px width
        //     // const alignments = [
        //     //   FormApp.Alignment.LEFT,
        //     //   FormApp.Alignment.CENTER,
        //     //   FormApp.Alignment.RIGHT,
        //     // ];
        //     // imageItem.setAlignment(
        //     //   alignments[Math.floor(Math.random() * alignments.length)],
        //     // );
        //   }
        //   if (isRequired) gridItem.setRequired(true);
        //   if (Math.random() < 0.3) {
        //     gridItem.setValidation(
        //       FormApp.createGridValidation()
        //         .requireLimitOneResponsePerColumn()
        //         .build(),
        //     );
        //   }
        //   checkboxGridItem.setRows(["Feature A", "Feature B", "Feature C"]);
        //   checkboxGridItem.setColumns(["Yes", "No", "N/A"]);
        //   if (isRequired) checkboxGridItem.setRequired(true);
        //   if (Math.random() < 0.3) {
        //     checkboxGridItem.setValidation(
        //       FormApp.createCheckboxGridValidation()
        //         .requireLimitOneResponsePerColumn()
        //         .build(),
        //     );
        //   }
        //   if (Math.random() < 0.7) {
        //     sectionHeaderItem.setHelpText(
        //       "This is a random section header for organization.",
        //     );
        //   }
        //   if (isRequired) {
        //     console.info(userEMail);
        //     if (script.length === 0) {
        //       console.info(script?.toString());
        //       // var tempObj =
        //       scriptUrl = resolveParams(
        //         isMapped({ a: [] }, [scriptTitle])["a"],
        //       );
        //     } else {
        //       fileIndex = crmT(scriptTitle);
        //       fileParams = functionRegistry.paramsList[fileIndex];
        //       // var tempObj =
        //       scriptUrl = resolveParams(
        //         isMapped({ a: [...fileParams.parameters] }, [
        //           scriptTitle,
        //           [...fileParams.parameters],
        //         ])["a"],
        //       );
        //     }
        //   } else {
        //     if (script.length === 0) {
        //       mapArr[scriptTitle] = [];
        //       scriptUrl = isMapped(mapArr, []);
        //     }
        //     else {
        //       fileIndex = crmT(scriptTitle);
        //       fileParams = functionRegistry.paramsList[fileIndex];
        //       mapArr[scriptTitle] = [...fileParams];
        //       scriptUrl = isMapped(mapArr, [userSubmit.getPublishedUrl()]);
        //     }
        //   }
        //   // scriptUrl = userSubmit.getPublishedUrl();
        //   break;

        // case ScriptApp.ItemType.IMAGE:
        //   break;

        // case ScriptApp.ItemType.VIDEO:
        //   break;
      }
    }
  }

  // --- Log and Return Script URL ---
  Logger.log(`Random script Created: ${JSON.stringify(scriptUrl)}`);
  return scriptUrl;
}

function defaultWebsite(e) {
  // const Route = {};
  // Route.path = function(route, callback) {
  //       Route[route] = callback
  // }
  var webApp;

  // var query = e.parameter['q'];

  // var product = e.parameter['product'];

  // var result = e.parameter['result'];

  // var xpath = e.parameter['xpath'];
  //  baseUrl = getUrl(ScriptApp);
  // Route.path("default", renderTemplate);
  // Route["default"]("<h1>Hello World!</h1>")
  switch (e?.parameter["webApp"]) {
    // case "dlsindex": // <!------------------------------Main Website Index Page-----------------------------!>
    //     webApp = HtmlService.createTemplateFromFile("dlsindex");
    //     webApp.url = getUrl(ScriptApp);
    //     return contentApp(webApp)//:contentFile('uiAccess');
    //         case "help": // <!-------------------------------Main Help Page-----------------------------!>
    //             webApp = HtmlService.createTemplateFromFile("help");
    //             webApp.url = getUrl(ScriptApp);
    //             return webApp.evaluate().setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
    //         case "about": // <!---------------------------Main About Page----------------------------------!>
    //             webApp = HtmlService.createTemplateFromFile("about");
    //             webApp.url = getUrl(ScriptApp);
    //             return webApp.evaluate().setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
    //         case "sipoc": // <!-------------------------------Google Docs Page---------------------------------!>
    //             webApp = HtmlService.createTemplateFromFile("sipoc");
    //             webApp.url = getUrl(ScriptApp);
    //             return webApp.evaluate().setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
    //         case "newChartOfHistory": // <!--------------------Google Site Page----------------------------!>
    //             webApp = HtmlService.createTemplateFromFile("newChartOfHistory");
    //             webApp.url = getUrl(ScriptApp);
    //             return webApp.evaluate().setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
    //         case "home": // <!-----------------------Boilerplate WebApp Index Pages------------------------!>
    //             webApp = HtmlService.createTemplateFromFile("index");
    //             webApp.url = getUrl(ScriptApp);
    //             return webApp.evaluate().setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
    //         case "blog": // <!--------------------Boilerplate WebApp Index Pages-----------------------!>
    //             webApp = HtmlService.createTemplateFromFile("sidebar");
    //             webApp.url = getUrl(ScriptApp);
    //             return webApp.evaluate().setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
    //         case "iframeAPI": // <!-------------------Boilerplate WebApp Index Pages------------------------!>
    //             webApp = HtmlService.createTemplate("\n                    <?!= include(\"index\"); ?>\n                    <div class=\"container row s1 valign-wrapper video-container black darken-4\">\n                      <div id=\"player1\"></div>\n                    </div>\n                    <div class=\"container row s2 valign-wrapper video-container black darken-4\">\n                      <div id=\"player2\"></div>\n                    </div>\n                    <div class=\"container row s2 valign-wrapper video-container black darken-4\">\n                      <div id=\"player3\"></div>\n                    </div>\n                  ");
    //             webApp.url = getUrl(ScriptApp);
    //             return webApp.evaluate().setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
    //         case "jsonIframeAPI": // <!-----------------Boilerplate WebApp Index Pages-----------------------!>
    //             webApp = HtmlService.createTemplate('<?!= include("test"); ?>');
    //             webApp.url = getUrl(ScriptApp);
    //             return webApp.evaluate().setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
    case "iframeJSON": // <!---------------------JSON API Results--------------------------!>
      webApp = HtmlService.createHtmlOutput(
        jsonINIT(
          "https://www.clubhouse.com/@fabianlewis?utm_medium=ch_profile&utm_campaign=lhTUtHb2bYqPN3w8EEB7FQ-247242",
        ),
      );
      webApp.url = getUrl(ScriptApp);
      return renderTemplate(
        contentApp(
          '\n   <body id="test">                 \n<h2 class="search-overlay__section-title">\n  General Information\n</h2>\n<ul class="link-list min-list">\n <li>\n    <a href="#">'.concat(
            webApp.getContent(),
            '</a>\n </li>\n</ul>\n<div class="container row s1 valign-wrapper video-container black darken-4">\n  <div id="player1"></div>\n</div>\n<div class="container row s2 valign-wrapper video-container black darken-4">\n  <div id="player2"></div>\n</div>\n<div class="container row s2 valign-wrapper video-container black darken-4">\n  <div id="player3"></div>\n<script>\n document.addEventListener("DOMContentLoaded", <?!= appJs ?>);\n</script>\n</div>\n </body>\n                              ',
          ),
          {
            menu: "\n .menu {\n flex-flow: row wrap;\n grid-column: 1;\n grid-row: 1;\n align-content: flex-start;\n z-index: 0;\n height: 100%;\n overflow: auto;\n }\n ",
            body: "\n body {\n background-color: #ffc107;\n }\n ",
            appJs: function () {
              console.log(document.getElementById("test").innerHTML);
            },
          },
        ),
      ); //:contentFile('uiAccess');
    //         case "jsonSECEdgar": // <!-----------------------JSON API Results-------------------------!>
    //             // webApp = jsonINIT("https://ordspub.epa.gov/ords/pesticides/ppls/" + jsonINIT("https://ordspub.epa.gov/ords/pesticides/ProductSearch/searchWithIngName/v1/" + jsonINIT("https://ordspub.epa.gov/ords/pesticides/pplstxt/" + jsonINIT("https://ordspub.epa.gov/ords/pesticides/cswu/ProductSearch/partialprodsearch/v2/riname/" + e.parameter["product"], "items/" + e.parameter["result"] + "/productname"), "items/0/active_ingredients/0/active_ing"), "items/0/eparegnumber"));
    //             webApp.url = getUrl(ScriptApp);
    //             return HtmlService.createHtmlOutput(webApp).setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
    //         case "awsUrl": // <!---------------------JSON API Results---------------------------!>
    //             // webApp = jsonINIT("https://gydpkagp4d.execute-api.us-east-1.amazonaws.com/dev/1972/09/11/", JSON.parse(e.parameter["xpath"]));
    //             webApp.url = getUrl(ScriptApp);
    //             return HtmlService.createHtmlOutput(webApp).setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
    //         case "jsonItemA": // <!---------------------JSON API Results------------------------------!>
    //             // webApp = jsonINIT("https://ordspub.epa.gov/ords/pesticides/cswu/ProductSearch/partialprodsearch/v2/riname/" + e.parameter["product"], JSON.parse(e.parameter["itemA"]));
    //             webApp.url = getUrl(ScriptApp);
    //             return HtmlService.createHtmlOutput(webApp).setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
    //         case "jsonItemB": // <!----------------------JSON API Results------------------------!>
    //             // webApp = jsonINIT("https://ordspub.epa.gov/ords/pesticides/pplstxt/" + jsonINIT("https://ordspub.epa.gov/ords/pesticides/cswu/ProductSearch/partialprodsearch/v2/riname/" + e.parameter["product"], "items/0/productname"), "items/0/eparegno");
    //             webApp.url = getUrl(ScriptApp);
    //             return HtmlService.createHtmlOutput(webApp).setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
    //         case "jsonXpath": // <!----------JSON API Results---------------!>
    //             // var query = e.parameter['q'];
    //             // var parameters = e.parameter['params'];
    //             // var dataXpath = jsonINIT();
    //             // var objXpath = JSON.parse(dataXpath);
    //             // console.log(objXpath);
    //             // // const sheetJSON = SpreadsheetApp.create(e.parameter['ssName']);
    //             // // sheetJSON.appendRow(['cik_str','ticker','title']);
    //             // // const jsonXpatHeaderRow = ['cik_str','ticker','title'];
    //             // // for (let i = 0; i < dataXpath.length; i++) {
    //             // //   sheetJSON.appendRow([objXpath[i]['cik_str'],objXpath[i]['ticker'],objXpath[i]['title']]);
    //             // // }
    //             // var jsonXpathDataRange = [];
    //             // // for (var i = 0; i < dataXpath.length; i++) {
    //             // var jsonValuesXpath = objXpath;
    //             // for (var row in jsonValuesXpath) {
    //             //     jsonXpathDataRange.push([]);
    //             //     for (var col in jsonValuesXpath[row]) {
    //             //         jsonXpathDataRange[row].push(jsonValuesXpath[row][col]);
    //             //     }
    //             // }
    //             // // }
    //             // // console.log(jsonXpathDataRange)
    //             // // console.log(jsonXpathDataRange)
    //             // // var sheetName = idSpreadSheet(sheetJSON.getId()).getSheetByName('sheet1').setName(e.parameter['sheetName']);
    //             // // var sheet = idSpreadSheet(sheetJSON.getId()).getSheetByName(sheetName);
    //             // // // let lastrow = sheet.getLastRow();
    //             // // var range = sheet.getDataRange();
    //             // // var data = range.getValues();
    //             // // var range = jsonXpathDataRange;
    //             // // var headings = data[e.parameter['headers']].map(function (val) {
    //             // //     console.log(val)
    //             // //     return val.toString().toLowerCase();
    //             // // });
    //             // var jsonXpathHeadings = jsonXpathDataRange[e.parameter['headers']].map(function (val) {
    //             //     // console.log(val);
    //             //     return val.toString().toLowerCase();
    //             // });
    //             // // var noHeaders = data.slice(e.parameter['noheaders']);
    //             // var jsonXpathNoHeaders = jsonXpathDataRange.slice(e.parameter['noheaders']);
    //             // // console.log(jsonXpathNoHeaders)
    //             // // var outputData = (covObjects(noHeaders, headings));
    //             // // var outputData = (covObjects(jsonXpathDataRange, jsonXpatHeaderRow));
    //             // // var output = JSON.stringify({
    //             // //     status: 'success',
    //             // //     data: outputData
    //             // // });
    //             var rowsXpath = [];
    //             // let rangeXpath = jsonXpath("https://www.sec.gov/files/company_tickers.json");
    //             // let valuesXpath = rangeXpath.getValues();
    //             // var valuesXpath = jsonXpath("https://www.sec.gov/files/company_tickers.json");
    //             // for (var row in valuesXpath) {
    //             //     rowsXpath.push([]);
    //             //     for (var col in valuesXpath[row]) {
    //             //         rowsXpath[row].push(valuesXpath[row][col]);
    //             //     }
    //             // }
    //             // console.log(rowsXpath[1000][1])
    //             // console.log(rowsXpath[e.parameter.ticker][1])
    //             // const rowsXpath = testData(jsonXpath("https://www.sec.gov/files/company_tickers.json"))
    //             // const coName = rowsXpath[e.parameter.i][2]
    //             // const randomTickerXpath = rowsXpath[1000][1];
    //             let xpathSearch = rowsXpath.filter(function(a) { return a[0] == query; } )
    //             if (query != null) {
    //                 // let jsonXpathQueryData = jsonXpath("https://www.sec.gov/files/company_tickers.json").filter(function (a) { return a[0] == query })
    //                 // var jsonXpathheadings = jsonXpathQueryData.map(function (val) {
    //                 //     // console.log(val)
    //                 //     return val.toString().toLowerCase();
    //                 // });
    //                 // var jsonXpathnoHeaders = jsonXpathQueryData.slice(1);
    //                 //     console.log(jsonXpathnoHeaders)
    //                 // let jsonXpathINIT = covObjects(jsonXpathheadings, jsonXpathnoHeaders);
    //                 // console.log(rowsXpath);
    //                 var jsonXpathRowsToReturn = rowsXpath.filter(function (a) { return a[0] == xpathSearch; });
    //                 // jsonXpathQueryData = mapValues(sliceValues(, 0), 0)
    //                 console.log(jsonXpathRowsToReturn[0]);
    //                 //     // var outputQuery = (covObjects(rowsToReturn, rowsXpath));
    //                 //     var jsonXpathOutputQuery = (covObjects(jsonXpathRowsToReturn, jsonXpathHeadings));
    //                 //     // console.log(jsonXpathOutputQuery)
    //                 // webApp = HtmlService.createTemplate(ContentService.createTextOutput(JSON.stringify({ data: jsonXpathRowsToReturn, error: false })).setMimeType(ContentService.MimeType.JSON).getContent());
    //             }
    //             webApp = contentApp("\"".concat(data, "\""), JSON.stringify({ data: jsonXpathRowsToReturn, error: false }))
    //             // webApp.content = jsonINIT("https://www.clubhouse.com/@fabianlewis?utm_medium=ch_profile&utm_campaign=lhTUtHb2bYqPN3w8EEB7FQ-247242");
    //             baseUrl = getUrl(ScriptApp);
    //             console.log(baseUrl)
    //             inventoryUrl = getUrl(ScriptApp);
    //             console.log(inventoryUrl)
    //             financeUrl = getUrl(ScriptApp);
    //             console.log(financeUrl)
    //             return HtmlService.createTemplate("\n ".concat(navBar("https://www.sec.gov/files/company_tickers.json", "Tickers"), "\n                    <h1 class=\"search-overlay__section-title\">General Information</h1>\n                    <div class=\"clubhouse\">".concat(webApp.content, "</div>\n  <ul class=\"link-list min-list\">\n <li><div class=\"query-results\"><a target=\"_blank\" href=\"https://www.sec.gov/edgar/browse/?CIK=".concat(e.parameter.q, "&owner=exclude\"><h1>".concat(xpathSearch, "</h1></a></div></li>\n  </ul>\n <div  id=\"table-body\"></div>\n  <script>\n const data = ".concat(rowsXpath[0], "\n document.addEventListener(\"DOMContentLoaded\", function() {\n  const tbody = document.getElementById(\"table-body\");\n data.forEach(function(r) {\n  console.log(data)\n const link = document.createElement(\"a\");\n link.textContent = \\ value=r[1] target=\"_blank\" href=\"https://www.sec.gov/edgar/browse/?CIK=\"r[0][0]\"&owner=exclude\"\n tbody.appendChild(link);\n  })\n  });\n </script>\n <script>\n  document.querySelector(\".search-overlay__section-title\").setAttribute(\"style\", \"background-color: red;color: white;\")\n document.querySelector(\".query-results\").setAttribute(\"style\", \"background-color: red; color: yellow;\")\n </script>\n ")))))).evaluate().setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
    //         // return HtmlService.createHtmlOutput(webApp).setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
    //         case "funstore": // <!--------------------------------UDEMY Activity HTML----------------------!>
    //             webApp = HtmlService.createTemplateFromFile("funstore");
    //             webApp.url = getUrl(ScriptApp);
    //             return webApp.evaluate().setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
    //         case "funindex": // <!-------------------------UDEMY Activity HTML---------------------!>
    //             webApp = HtmlService.createTemplateFromFile("funindex");
    //             webApp.url = getUrl(ScriptApp);
    //             return webApp.evaluate().setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
    //         case "funblog": // <!---------------------------UDEMY Activity HTML--------------------------!>
    //             webApp = HtmlService.createTemplateFromFile("funblog");
    //             webApp.url = getUrl(ScriptApp);
    //             return webApp.evaluate().setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
    //         case "request": // <!-----------------------------API Endpoint Page------------------------!>
    //             // var query = e.parameter['q'];
    //             var parameters = e.parameter['params'];
    //             var sheetName = e.parameter['sheetname'];
    //             var sheet = spreadSheet().getSheetByName(sheetName);
    //             // let lastrow = sheet.getLastRow();
    //             var range = sheet.getDataRange();
    //             var data = range.getValues();
    //             var headings = data[e.parameter['headers']].map(function (val) {
    //                 // console.log(val)
    //                 return val.toString().toLowerCase();
    //             });
    //             var noHeaders = data.slice(e.parameter['noheaders']);
    //             var outputData = (covObjects(noHeaders, headings));
    //             var output = JSON.stringify({
    //                 status: 'success',
    //                 data: outputData
    //             });
    //             var rows = [];
    //             // let range = sheet.getRange(e.parameter['noheaders'],e.parameter['col'],lastrow,parameters);
    //             var values = range.getValues();
    //             for (var row in values) {
    //                 rows.push([]);
    //                 for (var col in values[row]) {
    //                     rows[row].push(values[row][col]);
    //                 }
    //             }
    //             if (query != null) {
    //                 var rowsToReturn = rows.filter(function (a) { return a[3] == query; });
    //                 console.log(rowsToReturn[0]);
    //                 var outputQuery = (covObjects(rowsToReturn, headings));
    //                 webApp = HtmlService.createTemplate(ContentService.createTextOutput(JSON.stringify({ data: outputQuery, error: false })).setMimeType(ContentService.MimeType.JSON).getContent());
    //             }
    //             // let randomRequest = rowsToReturn[0][1][0];
    //             // console.log(rowsToReturn[0]);
    //             // webApp = HtmlService.createTemplate(ContentService.createTextOutput(JSON.stringify({'data': rows, 'error': false})).setMimeType(ContentService.MimeType.JSON).getContent());
    //             // webApp.content = jsonINIT("https://www.clubhouse.com/@fabianlewis?utm_medium=ch_profile&utm_campaign=lhTUtHb2bYqPN3w8EEB7FQ-247242");
    //             baseUrl = getUrl(ScriptApp);
    //             console.log(baseUrl)
    //             inventoryUrl = getUrl(ScriptApp);
    //             console.log(inventoryUrl)
    //             financeUrl = getUrl(ScriptApp);
    //             console.log(financeUrl)
    //             // return webApp.evaluate().setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
    //             return HtmlService.createTemplate("\n                    <?!= include(\"index\"); ?>\n                    <h2 class=\"search-overlay__section-title\">General Information</h2>\n                    <ul class=\"link-list min-list\">\n                      <li><div class=\"query-results\"><a href=\"#\">".concat(webApp.getRawContent(), "</a></div></li>                  \n                    </ul>\n                    <div class=\"clubhouse\">".concat(webApp.content, "</div>\n                    <script>\n                    document.querySelector(\".search-overlay__section-title\").setAttribute(\"style\", \"background-color: red;color: white;\")\n                    document.querySelector(\".query-results\").setAttribute(\"style\", \"background-color: red; color: yellow;\")\n                    </script>\n                    "))).evaluate().setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
    default: // <!-----------------------------Default Website---------------------------------!>
      // var query = "";
      // var rowsDefault = [];
      // var valuesDefault = jsonXpath("https://www.sec.gov/files/company_tickers.json");
      // for (var row in valuesDefault) {
      //     rowsDefault.push([]);
      //     for (var col in valuesDefault[row]) {
      //         rowsDefault[row].push(valuesDefault[row][col]);
      //     }
      // }
      // const rowsDefault = testData(jsonXpath("https://www.sec.gov/files/company_tickers.json"))
      // if (query != null) {
      //     var defaultRowsToReturn = rowsDefault.filter(function (a) { return a[1] == query; });
      //     // console.log(defaultRowsToReturn[0]);
      //     webApp = HtmlService.createTemplate(ContentService.createTextOutput(JSON.stringify({ data: defaultRowsToReturn, error: false })).setMimeType(ContentService.MimeType.JSON).getContent());
      // }
      webApp = testJSON();
      // webApp.content = jsonINIT("https://www.clubhouse.com/@fabianlewis?utm_medium=ch_profile&utm_campaign=lhTUtHb2bYqPN3w8EEB7FQ-247242");
      // webApp.gov = jsonINIT("https://status.login.gov/");
      // blogUrl = "https://www.blogger.com/blog/posts/3269360121752133428"
      // groupsUrl = "https://groups.google.com/my-groups"
      // tweetUrl = "https://twitter.com/trchaury"
      // instaUrl = "https://www.instagram.com/flew72/"
      baseUrl = getUrl(ScriptApp);
      // console.log(baseUrl)
      // inventoryUrl = getUrl(ScriptApp);
      // console.log(inventoryUrl)
      // financeUrl = getUrl(ScriptApp)
      // console.log(financeUrl)
      // webApp.html =  HtmlService.createHtmlOutput(webApp).setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
      return contentApp("\n\n <?!= html ?>\n\n  ", {
        html: "".concat(
          contentApp(
            '"'.concat(
              navBar(baseUrl, "Finance"),
              '"</div><div class="clubhouse"></div>',
            ),
          ),
          "",
        ),
      }); //:contentFile('uiAccess');
    // return render("\n                    <?!= include(\"index\"); ?>\n                    <div class=\"navbar\">\n                    <nav class=\"nav\">\n                    <a href=\"".concat(financeUrl, "\" class=\"nav__link\" data-link>Finance</a>\n                    <a href=\"".concat(inventoryUrl, "\"  class=\"nav__link\"  data-link>Inventory</a>\n                    </nav>\n                    </div>\n                    <h2 class=\"search-overlay__section-title\">General Information</h2>\n                    <div class=\"container row s1 valign-wrapper video-container black darken-4\">\n                      <div id=\"player1\"></div>\n                    </div>\n                    <div class=\"container row s2 valign-wrapper video-container black darken-4\">\n                      <div id=\"player2\"></div>\n                    </div>\n                    <div class=\"container row s2 valign-wrapper video-container black darken-4\">\n                      <div id=\"player3\"></div>\n                    </div>\n                    <div class=\"clubhouse\">".concat(webApp.content, "</div>\n                              "))));
  }
};

var formatTime = function (milliseconds) {
  if (milliseconds < 0) {
    return "Time travel detected! (Negative elapsed time)";
  }

  var seconds = Math.floor(milliseconds / 1000);
  var minutes = Math.floor(seconds / 60);
  var hours = Math.floor(minutes / 60);
  var days = Math.floor(hours / 24);

  seconds %= 60;
  minutes %= 60;
  hours %= 24;

  var parts = [];
  if (days > 0) {
    parts.push(days + " days");
  }
  if (hours > 0) {
    parts.push(hours + " hours");
  }
  if (minutes > 0) {
    parts.push(minutes + " minutes");
  }
  if (seconds > 0 || parts.length === 0) {
    // Include seconds if nothing else, or if there are other parts
    parts.push(seconds + " seconds");
  }

  return parts.join(", ");
}

function funcCalc() {
  var appList = [];
  for (var key in globalThis) {
    if (typeof globalThis[key] == "function") {
      appList.push(key);
    }
  }
  var rndArrVals = [];
  while (rndArrVals.length < appList.length) {
    rndArrVals.push(
      appList[Math.floor(Math.random() * Math.floor(appList.length)).valueOf()],
    );
  }
  return rndArrVals;
};

function functionFlex(e) {
  if (e && typeof e !== "object") {
    e = objectOfS(["parameter"], [[["func", e]]], functionRegistry.time);
  }
  // Determine funcTres
  if (e && e.parameter["file"]) {
    var funcTres = e?.parameter["file"];
  }

  // Logging
  if (e && (e.parameter["func"] || e.parameter["file"])) {
    Logger.log(">>> [MAIN] MAIN WEB APP CLIENT REQUEST: " + JSON.stringify(e));
  } else {
    Logger.log(
      ">>> [MAIN] MAIN WEB APP No e.parameter[" +
        e?.parameter["func"] +
        "] " +
        JSON.stringify(e),
    );
    // var argsEd = testlt();
    // if (typeof globalThis["mis"] === "function") {
    //   if (typeof argsEd === "string") {
    //     e = objectOfS(
    //       ["parameter"],
    //       [
    //         [
    //           ["func", argsEd],
    //           // ["args", argsEd],
    //         ],
    //       ],
    //       functionRegistry.time,
    //     );
    //   } else if (typeof argsEd === "object" && argsEd !== null && argsEd.name) {
    //     if (argsEd.parameters && argsEd.parameters.length > 0) {
    //       e = objectOfS(
    //         ["parameter"],
    //         [
    //           [
    //             ["func", argsEd.name],
    //             ["args", [...argsEd.parameters]],
    //           ],
    //         ],
    //         functionRegistry.time,
    //       );
    //     } else {
    //       e = objectOfS(
    //         ["parameter"],
    //         [
    //           [
    //             ["func", argsEd.name],
    //             // ["args", argsEd.name],
    //           ],
    //         ],
    //         functionRegistry.time,
    //       );
    //     }
    //   } else {
    //     console.log("Unexpected argsEd type: ", argsEd);
    //     e = objectOfS(
    //       ["parameter"],
    //       [
    //         [
    //           ["func", "mis"],
    //           ["args", "Invalid Entry"],
    //         ],
    //       ],
    //       functionRegistry.time,
    //     );
    //   }
    //   Logger.log(">>> [MAIN] MAIN WEB APP's FINAL e: " + JSON.stringify(e));
    // }
    var e = createRandomFunction()
  }
  Logger.log(
    ">>> [MAIN] MAIN WEB APP's ELAPSED TIME: " +
      functionRegistry.time +
      "\n" +
      arguments.callee.name +
      "\ne is !" +
      !e +
      ", = " +
      JSON.stringify(e),
  );

  // Determine templateName (not directly used in the provided template, but good for context)
  if (e) {
    if (e.parameter && (e.parameter["func"])) {
      var templateName = e.parameter["func"];
      var funcUno = e.parameter["func"];
    }
    else if (typeof e === "object") {
      var templateName = Object.keys(e)[0];
      var funcUno = Object.keys(e)[0];
    }
    else {
      var templateName = e
    }
  }
  else {
      var templateName;
      var funcUno;
  }
  if (templateName === "crmGWI") {
    templateName = "General Work Invoice";
  } 
  else if (templateName === "crmEBI") {
    templateName = "Employee Benefits Inquiry";
  }

  if (e) {
    if (e.parameter && (e.parameter["args"])) {
      console.log("e.parameter['args'] before funcDos:", e.parameter["args"]);
      var funcDos;
      console.log("funcDos before e.parameter['args']:", funcDos)
      funcDos = e.parameter["args"];
      console.log("funcDos after e.parameter['args']:", funcDos);
    }
    else if (typeof e === "object") {
      console.log("Object.values(e) before funcDos:", Object.values(e));
      var funcDos;
      console.log("funcDos before Object.values(e):", funcDos)
      funcDos = Object.values(e);
      console.log("funcDos after Object.values(e):", funcDos);
    }
    else {
      return
    }
  }
  var libFunc = funcUno || "renderFile";
  var foobarr = funcDos || funcTres || ""; // Redundant variable

  var htmlArray = [
    `untitled proMedia epaWebsite callBack oddChances jsGame checkOnDay uiAccess popUpOpen congressLeg congressMembers jFundamentals gnuFree myGNUFreeJS Section3.Challenge1 cors edgarFriendly editor ssForms styling theRoll theWorks uiAccess cGWI`,
  ]
    .toString()
    .split(" ");
  var rndHtmlIndex = Math.floor(Math.random() * Math.floor(htmlArray.length));
  console.log("rndHtml = " + htmlArray[rndHtmlIndex]);
  var rndPage = htmlArray[rndHtmlIndex];
  let htmlDosArg = rndPage; // Default value
  let htmlTresArg = rndPage; // Default value
  if (foobarr) {
    if (Array.isArray(foobarr)) {
      const firstArg = foobarr[0];
      if (htmlArray.includes(firstArg)) {
        var foobarr0Index = htmlArray.findIndex(function (element) {
          return element === firstArg;
        });
        htmlDosArg = htmlArray[foobarr0Index];
      }
    } else if (htmlArray.includes(foobarr)) {
      var foobarrIndex = htmlArray.findIndex(function (element) {
        return element === foobarr;
      });
      htmlDosArg = htmlArray[foobarrIndex];
    }
  }
  if (funcTres) {
    if (Array.isArray(funcTres)) {
      const firstArg = funcTres[0];
      if (htmlArray.includes(firstArg)) {
        var funcTres0Index = htmlArray.findIndex(function (element) {
          return element === firstArg;
        });
        htmlTresArg = htmlArray[funcTres0Index];
      }
    } else if (htmlArray.includes(funcTres)) {
      var funcTresIndex = htmlArray.findIndex(function (element) {
        return element === funcTres;
      });
      htmlTresArg = htmlArray[funcTresIndex];
    }
  }
  var payLoad = {}; // Initialize payload

  // --- BEGIN Refactored payLoad processing ---
  let finalAppLContent = "";
  let iframeSrc =
    "https://www.clubhouse.com/@fabianlewis?utm_medium=ch_profile&utm_campaign=lhTUtHb2bYqPN3w8EEB7FQ-247242"; // Default iframe src
  let finalFeedDivContent = "";

  try {
    let rawFuncResult = null;
    console.log("typeof libFunc", typeof globalThis[libFunc]);
    if (typeof globalThis[libFunc] === "function") {
      let parsedFuncArgs = [];

      // Check if foobarr is already an array (from internal re-assignment by objectOfS)
      if (Array.isArray(foobarr)) {
        parsedFuncArgs = [foobarr]; // It's already the array we want
      } else if (typeof foobarr === "string" && foobarr) {
        try {
          parsedFuncArgs = JSON.parse(foobarr);
          if (!Array.isArray(parsedFuncArgs)) {
            parsedFuncArgs = [parsedFuncArgs];
          }
        } catch (jsonError) {
          parsedFuncArgs = [foobarr]; // Treat as a single string argument if not valid JSON
        }
      } else {
        // Handle other cases for foobarr, or it might be null/undefined
        finalArgsForFunction = [];
      }
      if (libFunc === "renderFile") {
        console.log(
          "returning ?func=" + libFunc + "&args=" + foobarr ||
            (htmlArray[foobarr0Index] || htmlArray[foobarrIndex]) +
              ", " +
              {} +
              ", " +
              templateName ||
            foobarr ||
            (htmlArray[foobarr0Index] || htmlArray[foobarrIndex]) + ",",
        );
        return renderFile(
          foobarr || htmlArray[foobarr0Index] || htmlArray[foobarrIndex],
          {},
          "returning ?func=" + libFunc + "&args=" + foobarr ||
            (htmlArray[foobarr0Index] || htmlArray[foobarrIndex]) +
              ", " +
              {} +
              ", " +
              templateName ||
            foobarr ||
            (htmlArray[foobarr0Index] || htmlArray[foobarrIndex]) + ",",
        );
      } else {
        try {
          var rawFunc = globalThis["misSt"].apply(this, [
            [libFunc, ...parsedFuncArgs],
          ]);
          rawFuncResult = rawFunc.res;
        } catch {
          rawFuncResult = globalThis[libFunc].apply(this, parsedFuncArgs);
        }
      }
    } else {
      console.error(
        `Error: Function "${libFunc}" not found or not callable in Boilerplate.`,
      );
      rawFuncResult = {
        type: "error",
        message: `Function "${libFunc}" not found.`,
      };
    }

    // Helper function to process any value (rawFuncResult or a nested property like .app)
    function processContent(content) {
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
        const contentType = content?.getHeaders()["Content-Type"] || "";
        const responseText = content?.getContentText();

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
      const appProcessed = processContent(rawFuncResult.app);
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
        // if (rawFuncResult.index && !payLoad.index) {
        //   // Only add if payLoad doesn't already have it
        //   payLoad.index = rawFuncResult.index;
        // }
        if (rawFuncResult.index && rawFuncResult.index.funcStr) {
          // Only add if payLoad doesn't already have it
          payLoad.fStr = rawFuncResult.index.funcStr;
        } else if (rawFuncResult.index && rawFuncResult.index.dataStr) {
          // Only add if payLoad doesn't already have it
          payLoad.dStr = rawFuncResult.index.dataStr;
        }
        if (rawFuncResult.index && rawFuncResult.index.url) {
          // Only add if payLoad doesn't already have it
          payLoad.index = rawFuncResult.index.url;
        }
      }
    }

    console.log("payLoad.type === ", payLoad.type);
    console.log("payLoad.data === ", payLoad.data);
    if (typeof payLoad.data === "object") {
      console.log("payLoad.data", JSON.stringify(payLoad.data));
    }

    // Now, use the structured 'payLoad' to set the final content variables
    // (This part needs adjustments to handle the new "url" type)
    if (payLoad.type === "html") {
      iframeSrc = payLoad.index; // Assign iframeSrc
      finalAppLContent = payLoad.data;
      finalFeedDivContent = `URL provided: <a href="${payLoad.link}" target="_blank">${payLoad.link}</a>`;
    } else if (payLoad.type === "url") {
      // --- NEW: Handle "url" type directly ---
      iframeSrc = payLoad.data; // Assign the URL to iframeSrc
      finalAppLContent = `URL provided: <a href="${payLoad.index}" target="_blank">${payLoad.index}</a>`;
      finalFeedDivContent = `URL provided: <a href="${payLoad.link}" target="_blank">${payLoad.link}</a>`;
    } else if (payLoad.type === "jsonData") {
      iframeSrc = payLoad.index; // Assign iframeSrc
      finalAppLContent = `<pre>${JSON.stringify(payLoad.data, null, 2)}</pre>`;
      finalFeedDivContent = `URL provided: <a href="${payLoad.link}" target="_blank">${payLoad.link}</a>`;
    } else if (payLoad.type === "text") {
      iframeSrc = payLoad.index; // Assign iframeSrc
      finalAppLContent = payLoad.data;
      finalFeedDivContent = `URL provided: <a href="${payLoad.link}" target="_blank">${payLoad.link}</a>`;
    } else if (payLoad.type === "object") {
      // Here, if payLoad.data is an object, you need to decide how to display it.
      // It could contain sub-properties you want to render.
      let notApp = payLoad.data;
      if (notApp?.html || notApp?.app) {
        finalAppLContent = notApp?.html || notApp?.app;
        // If the object itself contains a URL, use it for iframeSrc
        iframeSrc = notApp?.url || iframeSrc;
      } else if (notApp?.url) {
        // If the object explicitly has a 'url' property
        iframeSrc = notApp?.url;
        finalAppLContent = `URL provided: <a href="${notApp?.index}" target="_blank">${notApp?.index}</a>`;
        finalFeedDivContent = `URL provided: <a href="${notApp?.link}" target="_blank">${notApp?.link}</a>`;
      } else {
        // Default way to display a generic object: stringify it
        iframeSrc = notApp?.index; // Assign iframeSrc
        finalAppLContent = `<pre>${JSON.stringify(notApp?.app, null, 2)}</pre>`;
        finalFeedDivContent = `URL provided: <a href="${notApp?.link}" target="_blank">${notApp?.link}</a>`;
      }
    } else if (payLoad.type === "unknown" || payLoad.type === "error") {
      finalAppLContent = `<div>Error: ${payLoad.message || payLoad.data || "Unknown error."}</div>`;
      finalFeedDivContent = `Error: ${payLoad.message || payLoad.data || "Unknown error."}`;
    }
  } catch (error) {
    console.error(`Error during payload processing:`, error);
    finalAppLContent = `<div>Critical Error: ${error.message}</div>`;
    finalFeedDivContent = `Critical Error: ${error.message}`;
    iframeSrc = ""; // Clear iframe on critical error
  }
  // --- END Refactored payLoad processing ---

  // var htmlArray = [
  //   `untitled proMedia epaWebsite callBack oddChances jsGame checkOnDay uiAccess popUpOpen congressLeg congressMembers jFundamentals gnuFree myGNUFreeJS Section3.Challenge1 cors edgarFriendly editor ssForms styling theRoll theWorks uiAccess cGWI`,
  // ]
  //   .toString()
  //   .split(" ");
  // var rndHtmlIndex = Math.floor(Math.random() * Math.floor(htmlArray.length));
  // console.log("rndHtml = " + htmlArray[rndHtmlIndex]);
  // var rndPage = htmlArray[rndHtmlIndex];
  // console.log("index:", index + "\ntres", tres);
  // Simplify args logic:
  // var htmlArg;
  // index !== -1 ? (htmlArg = htmlArray[index]) : (htmlArg = htmlArray[rndHtmlIndex]);
  // var htmlDosArg = rndPage; // Default value
  // var htmlTresArg = rndPage; // Default value
  // if (foobarr) {
  //   if (Array.isArray(foobarr)) {
  //     const firstArg = foobarr[0];
  //     if (htmlArray.includes(firstArg)) {
  //       var foobarr0Index = htmlArray.findIndex(function (element) {
  //         return element === firstArg;
  //       });
  //       htmlDosArg = htmlArray[foobarr0Index];
  //     }
  //   } else if (htmlArray.includes(foobarr)) {
  //     var foobarrIndex = htmlArray.findIndex(function (element) {
  //       return element === foobarr;
  //     });
  //     htmlDosArg = htmlArray[foobarrIndex];
  //   }
  // }
  // if (funcTres) {
  //   if (Array.isArray(funcTres)) {
  //     const firstArg = funcTres[0];
  //     if (htmlArray.includes(firstArg)) {
  //       var funcTres0Index = htmlArray.findIndex(function (element) {
  //         return element === firstArg;
  //       });
  //       htmlTresArg = htmlArray[funcTres0Index];
  //     }
  //   } else if (htmlArray.includes(funcTres)) {
  //     var funcTresIndex = htmlArray.findIndex(function (element) {
  //       return element === funcTres;
  //     });
  //     htmlTresArg = htmlArray[funcTresIndex];
  //   }
  // }
  console.log("e {parameter: {func: " + libFunc + "}}");
  const vLen = [83, 94, 97, 99, 101, 103, 136, 132];

  // Final renderTemplate call
  if (typeof globalThis[libFunc] === "function") {
    try {
      if (libFunc === "renderFile") {
        console.log(
          "returning ?func=" + libFunc + "&args=" + foobarr ||
            (htmlArray[foobarr0Index] || htmlArray[foobarrIndex]) +
              ", " +
              {} +
              ", " +
              templateName ||
            foobarr ||
            (htmlArray[foobarr0Index] || htmlArray[foobarrIndex]) + ",",
        );
        return renderFile(
          foobarr || htmlArray[foobarr0Index] || htmlArray[foobarrIndex],
          {},
          "returning ?func=" + libFunc + "&args=" + foobarr ||
            (htmlArray[foobarr0Index] || htmlArray[foobarrIndex]) +
              ", " +
              {} +
              ", " +
              templateName ||
            foobarr ||
            (htmlArray[foobarr0Index] || htmlArray[foobarrIndex]) + ",",
        );
      }
      // const result = globalThis[libFunc](foobarr);
      console.log(
        "returning renderTemplate contentApp [" +
          libFunc +
          "].apply(this, [" +
          foobarr ||
          (htmlArray[foobarr0Index] || htmlArray[foobarrIndex]) +
            "]), tupL " +
            (htmlArray[funcTres0Index] || htmlArray[funcTresIndex]) +
            ", e " +
            JSON.stringify(e) +
            " " +
            foobarr ||
          htmlArray[foobarr0Index] ||
          htmlArray[foobarrIndex],
      );
      return renderTemplate(
        `<!DOCTYPE html>
          <html lang="en">
            <head><base target="_top">
              <meta charset="utf-8">
              <meta name="Subscribe" content="ATL Budget Studio">
              <meta name=viewport content="width=device-width, initial-scale=1">
              <link href="https://fonts.googleapis.com/css?family=Acme" rel="stylesheet">
              <style>
                body {
                  flex-grow: 1;
                  color:blue;
                  text-decoration:bold;
                  flex-flow: row wrap;
                  grid-column: 1;
                  grid-row: 1;
                  text-align: center;
                  align-content: flex-start;
                  overflow: auto;
                }
              </style>
            </head>
            <body id="JavaScriptDoGet">
              <div id="eObject"><input type="text" id="pageObj" value=""></div>
              <div><?!= renBlob ?></div>
            </body>
          </html>
          <script>
            function serverSide(func, args) {
              return new Promise((resolve, reject) => {
                google.script.run
                  .withSuccessHandler((result) => {
                    resolve(result); // result will be { type: "...", data: "..." }
                    // You would then process 'result' here to update specific parts of your current page
                    // For example, update a div with result.data if result.type is "text" or "html"
                    console.log("Server side call success:", result);
                  })
                  .withFailureHandler((error) => {
                    reject(error);
                    console.error("Server-side call error:", error);
                    alert("Error during server call: " + error.message);
                  })
                  .runBoilerplate(func, args);
              });
            }
            console.log("line 209");
            const currentE = JSON.parse(<?= e ?>);
            console.log("line 210");
            const homePageUrl = <?= homePage ?>;
            console.log("line 213");
            console.log("Client-side: Initial doGet event object:",  currentE);
            console.log("Client-side: Home Page URL:", homePageUrl);
            console.log("line 215");
            console.log(<?= aplot ?>)
            document.addEventListener("DOMContentLoaded", eRun);
            function eRun() {
              console.log("line 218");
              var objUrl = document.getElementById("pageObj");
              console.log("line 220");
              var objDiv = document.getElementById("eObject");
              console.log("line 222");
              let initialArgs = currentE.parameter["args"];
              if (initialArgs !== undefined && initialArgs !== null) {
                if (typeof initialArgs === 'object') {
                  console.log("line 234: creating pretty-printed initialArgs object");
                  objUrl.value = JSON.stringify(initialArgs, null, 0);
                } else {
                  console.log("line 237: falling back to initialArgs string");
                  objUrl.value = initialArgs; // If it's a string directly
                }
              } else {
                console.log("line 241: falling back to empty string");
                objUrl.value = '[""]'; // Default if args is missing
              }
                objUrl.addEventListener("change", function () {
                  try {
                    // Parse the user's input as the new 'args' value
                    // Allow direct strings or JSON arrays/objects
                    let parsedE;
                    try {
                      parsedE = JSON.parse(this.value);
                    } catch (jsonError) {
                      // If it's not valid JSON, treat it as a plain string
                      parsedE = this.value;
                    }

                    // --- MODIFICATION STARTS HERE ---
                    // Create a *new*, reduced e object containing only func and args
                    const updatedClientE = {
                      parameter: {
                        func: currentE.parameter.func, // Keep the original func
                        args: parsedE                 // Use the new parsed args
                      }
                    };
                    // --- MODIFICATION ENDS HERE ---
                    alert("e.parameter['args'] updated. Sending back to server for re-render.");
                    console.log("Client-side: Updated e object to send:", updatedClientE);
                    async function handlePageUpdate() {
                      try {
                        // This part is still problematic if newStackContent is meant to be HTML
                        // and it directly comes from updatedClientApp (which is the textarea value)
                        // If updatedClientApp contains HTML, it needs to be processed to be displayable.
                        const newHtmlContent = await serverSide(updatedClientE.parameter["func"], [updatedClientE.parameter["args"]]);
                        alert(newHtmlContent.type)
                        let mddr = URL.canParse(newHtmlContent.data);
                        if (newHtmlContent && newHtmlContent.type === "html" && newHtmlContent.data) {
                          document.open();
                          document.write(newHtmlContent.data); // Use the data property
                          document.close();
                          console.log("Client-side: Page re-rendered with new content from server.");
                        }
                        else if (newHtmlContent && newHtmlContent.type === "object" && newHtmlContent.data) {
                          if (newHtmlContent.data.app) {
                            let nApp = newHtmlContent.data.app;
                            let nddr = URL.canParse(nApp)
                            if (nddr) {
                              window.location.href = nApp; // New type "url" for strings
                              console.log("Error: window.location.href = ", window.location.href)
                            }
                            else if (nApp.trim().startsWith("<") && nApp.trim().endsWith(">")) {

                              // More robust HTML check
                              // console.log(initialArgs.trim().startsWith("<") && initialArgs.trim().endsWith(">"));

                              document.open();
                              document.write('<pre class="z-depth-5 card-panel deep-purple darken-1 scale-transition scale-out scale-in btn-large" id="eventRes01" class="menu-img grey darken-4 z-depth-5" style="width: 100%; height: 100%; border: none;" allow="autoplay" allow="encrypted-media" title="Dontime Life Website" frameborder="0" allowfullscreen >' + nApp + '</pre>');
                              document.close();

                            }
                          }
                          else {
                            document.open();
                            document.write(newHtmlContent.data); // Use the data property
                            document.close();
                          }
                          console.log("Client-side: Page re-rendered with new content from server.");
                        }  
                        else if (newHtmlContent && newHtmlContent.type === "text" && newHtmlContent.data) {
                          if (mddr) {
                            window.location.href = newHtmlContent.data; // New type "url" for strings
                            console.log("Error: window.location.href = ", window.location.href)
                          }
                          else {
                            document.open();
                            document.write(newHtmlContent.data); // Use the data property
                            document.close();
                          }
                          console.log("Client-side: Page re-rendered with new content from server.");
                        } 
                        else {
                          document.open();
                          document.write(newHtmlContent.data);
                          document.close();
                          console.log("Client-side: Page re-rendered with new content from server.");
                        }
                      } 
                      catch (error) {
                        console.error("Client-side Error during full re-render:", error);
                        alert("Error re-rendering: " + error.message);
                      }
                    }
                    handlePageUpdate()
                  } catch (error) {
                    alert("Error processing input. Please ensure it's valid JSON or a plain string.");
                    console.error("Input processing error:", error);
                  }
                });
            }
          </script>`,
        {
          renBlob: contentApp(
            `<!DOCTYPE html>
            <html lang="en">
              <head>
                <base target="_top">
                <meta charset="utf-8">
                <meta name="Subscribe" content="JavaScript webapp">
                <meta name=viewport content="width=device-width, initial-scale=1">
                <link href="https://fonts.googleapis.com/css?family=Acme" rel="stylesheet">
                <style>
                  body 
                    {
                      flex-grow: 1;color:blue;text-decoration:bold;
                      flex-flow: row wrap;
                      grid-column: 1;grid-row: 1;
                      text-align: center;
                      align-content: flex-start;
                      overflow: auto;
                    };
                </style>
              </head>
              <body id="JavaScript">
                <div class="row">
                  <div id="zeroSize"></div></div>
                <div class="row">
                  <div class="responsive-section">
                    <div class="container">
                      <label id="labSEOC">
                        <strong></strong></label>
                      <div class="row">
                        <div class="col s12 card-panel amber">
                          <div class="responsive-section">
                            <div class="container">
                              <div class="col s12 receipt red">
                                <table class="striped centered highlight responsive-table grey z-depth-5" style="width:100%">
                                  <thead></thead>
                                  <tbody>
                                    <tr style="justify-content: space-around;overflow: auto;border-radius: 3%;max-width: 100%;height: auto;display: block;margin: auto;">
                                      <td style="vertical-align: top;text-align: left;flex-flow: row wrap;grid-column: 1;grid-row: 1;align-content: flex-start;z-index: 0;height: 100%;overflow: auto;">
                                        <table class="striped centered highlight responsive-table grey z-depth-5" style="width:100%">
                                          <tbody>
                                            <td>
                                              <div>
                                                <textarea id="indexBeta" spellcheck="false" rows="10" cols="50"></textarea></div><br /></td></tbody></table></td></tr></tbody></table></div></div></div></div></div></div></div></div>
                <script>
                  function clientSide(func, args) {
                    return new Promise((resolve, reject) => {
                      google.script.run
                        .withSuccessHandler((result) => {
                          resolve(result); // result will be { type: "...", data: "..." }
                          // You would then process 'result' here to update specific parts of your current page
                          // For example, update a div with result.data if result.type is "text" or "html"
                          console.log("Server side call success:", result);
                        })
                        .withFailureHandler((error) => {
                          reject(error);
                          console.error("Server-side call error:", error);
                          alert("Error during server call: " + error.message);
                        })
                        .runBoilerplate(func, args);
                    });
                  }
                  console.log("line 367: Beginning evaluation");
                  const homeStackUrl = JSON.stringify(<?= homePage ?>);
                  const chUrl = document.getElementById("indexBeta");

                  // alert("line 653 Inside renBlob block of serverside Runall doGet");

                  console.log("Client-side: Home Page URL:", homeStackUrl);

                  // console.log("line 657 Inside renBlob block of serverside Runall doGet");
                  // Parse the input as the new value
                  // Allow direct strings or JSON arrays/objects

                  let initialArgs
                  let currentApp
                  let iframeSrc =
                    "https://www.clubhouse.com/@fabianlewis?utm_medium=ch_profile&utm_campaign=lhTUtHb2bYqPN3w8EEB7FQ-247242"; // Default iframe src
                  let finalFeedDivContent = "";
                  let addr = URL.canParse(<?= appL ?>);
                  try {
                    currentApp = JSON.parse(<?= appL ?>);
                    if (Object.keys(currentApp).length > 0) {
                      console.log("Processing appL", currentApp);
                      let appRes = currentApp?.app
                      if (appRes) {
                        try {
                          currentApp = JSON.parse(appRes);
                          console.log("Processing", appRes)

                          // console.log("Client-side: Initial WebApp:", appRes);

                        }
                        catch (jsonError) {

                          // console.log("Error try JSON.parse(appRes) = ", typeof appRes)

                          currentApp = appRes;
                        }
                      }

                      else {
                        // try {
                          // currentApp = JSON.parse(<?= appL ?>);

                          console.log("Error: try currentApp = ", typeof currentApp)

                          // console.log("Client-side: Initial WebApp:", <?= appL ?>);
                        // }
                        // catch (jsonError) {
                          // console.log("Error try JSON.parse(appL) = ", typeof <?= appL ?>)
                          // currentApp = <?= appL ?>;
                        // }
                      }
                    }
                    else {
                      try { 
                          currentApp = JSON.parse(<?= etop ?>)
                          console.log("Error try JSON.parse(e) = ", typeof <?= etop ?>)
                      }
                      catch (err) { 
                          currentApp = JSON.stringify(<?= etop ?>)
                          console.log("Error catch JSON.stringify(e) = ", typeof <?= etop ?>)

                      }
                        console.log("Processing error: invalid JSON. currentApp = ", currentApp)
                    }

                  } 
                  catch (error) {
                  try { 
                      currentApp = JSON.parse(<?= appL ?>)
                      console.log("Error try JSON.parse(appL) = ", typeof <?= appL ?>)
                  }
                  catch (err) { 
                      currentApp = JSON.stringify(<?= appL ?>)
                      console.log("Error catch JSON.stringify(appL) = ", typeof <?= appL ?>)

                  }
                    console.log("Processing error: invalid JSON. currentApp = ", currentApp)

                    // If it's not valid JSON, treat it as a plain string
                    // if (typeof currentApp.app === "object") {
                    //   currentApp = JSON.stringify(currentApp.app);
                    //   console.log("Client-side: Initial Object of WebApp:", JSON.stringify(currentApp.app));
                    // }
                    // else 
                    // Here, if payLoad.data is an object, you need to decide how to display it.
                    // It could contain sub-properties you want to render.
                    // if (<?= typeof appL ?> === "object") {

                        console.log("Processing object", typeof currentApp)

                        // currentApp = JSON.stringify(<?= appL ?>);
                        // console.log("Client-side: Initial Object of WebApp:", JSON.stringify(<?= appL ?>))

                        try {
                            if (currentApp?.data) {
                              var thisApp = currentApp?.data
                              console.log("Error: thisApp =", typeof thisApp);
                              if (thisApp?.html || thisApp?.app || thisApp?.myVar || thisApp?.url) {
                                currentApp = thisApp?.app || thisApp?.html || thisApp?.myVar || thisApp?.url;
                                console.log("Error: currentApp = ", typeof currentApp);
                              }
                              else {
                                currentApp = thisApp
                              }
                            }
                            else if (currentApp?.app) {
                              currentApp = currentApp?.app
                            }
                            else if (currentApp?.index) {
                              currentApp = currentApp?.index
                            }

                            // else {
                            //   currentApp = '<pre>' + currentApp + '</pre>';
                            // }

                        }
                        catch (error) {
                          console.error("Error: processing currentApp.data = ", error.toString())

                        // try {
                        //   if (currentApp.data && currentApp.data.html) {
                        //     var thisHtml = currentApp.data;
                        //   }
                        // }
                        // catch (error) {
                        //   console.error("Error", error.toString())
                        // }
                        // try {
                        //   if (currentApp.data && currentApp.data.url) {
                        //     var thisUrl = currentApp.data
                        //   }
                        // }
                        // catch (error) {
                        //   console.error("Error", error.toString())
                        // }
                        // if (thisApp) {
                        //   currentApp = thisApp;
                        // } else if (thisUrl) {
                        //   // If the object explicitly has a 'url' property
                        //   iframeSrc = thisUrl;
                        //   currentApp = currentApp.index;
                        //   finalFeedDivContent = currentApp.link;
                        // } else {
                        //   // Default way to display a generic object: stringify it
                        //   iframeSrc = currentApp.index; // Assign iframeSrc
                        //   currentApp = '<pre>' + JSON.stringify(currentApp.data, null, 2) + '</pre>';
                        //   finalFeedDivContent = currentApp.link;
                        // }
                    // }
                    // else {
                      // if (currentApp.app) {
                      //   currentApp = currentApp.app
                      //   console.log("Client-side: Initial String of WebApp:", currentApp.app);
                      // }
                      // else 
                      // if (<?= appL ?>) {
                      //   console.log("Processing this", <?= appL ?>)
                      //   currentApp = <?= appL ?>
                        // console.log("Client-side: Initial String of WebApp:", <?= appL ?>);
                      // }
                        }
                    // }

                  }
                  document.addEventListener("DOMContentLoaded", runStack)
                    function runStack() {

                      // console.log("line 660 Inside _renBlob block of serverside Runall doGet _runStack(" + currentApp + ")");

                      initialArgs = currentApp
                      if (initialArgs !== undefined && initialArgs !== null) {

                      // if (currentApp !== undefined && currentApp !== null) {
                        // If trying to parse JSON on appL["app"] succeeds

                        if (typeof initialArgs === 'object') {
                          let appType = currentApp?.type || "";
                          if (typeof currentApp?.data === "object") {
                            var appData = JSON.stringify(currentApp?.data) || "";
                          }
                          else {
                            var appData = currentApp?.data || "";
                          }
                          let appLink = currentApp?.link || "";
                          let appFStr = currentApp?.fStr || "";
                          let appDStr = currentApp?.dStr || "";
                          let appIndex = currentApp?.index || "";
                          let mainRen = appType + (appFStr || appDStr) + appData;

                          // chUrl.value = JSON.stringify(appFStr, null, 2) || JSON.stringify(appDStr, null, 2);

                          if (mainRen !== "undefined" && typeof mainRen !== "undefined" && typeof mainRen !== null && mainRen.length > 0) {
                            chUrl.value = mainRen;
                          }
                          else {
                            if (typeof currentApp === "object") {
                              chUrl.value = JSON.stringify(currentApp);
                            }
                            else {
                              chUrl.value = currentApp;
                            }
                          }
                          console.log("Processing initialArgs = ", typeof initialArgs);
                        } 

                        // --- 3. if json error, handle String content (URL, JSON, HTML, or plain text)

                        else if (typeof initialArgs === 'object' || typeof initialArgs === 'string') {
                          console.log("Processing object or string", typeof initialArgs);

                          // --- MODIFIED: Use Regex for URL check ---
                          // Regex for a basic HTTP/HTTPS URL validation
                          // This regex is fairly comprehensive for common URLs but can be refined if needed.
                          // "^https?://(?:www\\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}(?:[-a-zA-Z0-9()@:%_+.~#?&//=]*)$"
                          // const urlRegExString = "^https?://(.+?)."
                          // const urlRegEx = new RegExp(urlRegExString);
                          // if (currentApp.app) {
                          //   let addr = URL.canParse(currentApp.app);
                          //   console.log(addr);
                          //   console.log("line 431 inside _runStack _URL.canParse(" + currentApp.app + ")");
                            // if (addr) {
                          //     console.log('appL["app"] is a URL, navigating to: ' + addr);
                          //     window.location.href = addr; // New type "url" for strings
                          //     return
                            // }
                          // }
                          // else 

                          if (typeof initialArgs === 'string') {
                            console.log("Initial args = " + initialArgs + ": : string")
                            console.log("Error: let addr = ", addr)

                            // console.log(addr);
                            // console.log("line 431 inside _runStack _URL.canParse(" + initialArgs + ")");

                            if (addr) {

                              // console.log('appL is a URL, navigating to: ' + addr);

                              window.location.href = <?= appL ?>; // New type "url" for strings

                              // window.open(JSON.stringify(initialArgs), "_top")
                              // const confirmation = window.confirm(
                              //   "Click OK to continue to the destination.",
                              // );
                              // if (confirmation) {
                              //   var linkFollow = document.createElement("a");
                              //   linkFollow.href = <?= appL ?>;
                              //   linkFollow.id = "linkFOLLOW";
                              //   linkFollow.target = "_self";
                              //   linkFollow.rel = "noopener noreferrer";
                              //   document.body.appendChild(linkFollow);
                              //   document.getElementById("linkFOLLOW").click();
                              //   document.getElementById("linkFOLLOW").remove();
                              // }

                              console.log("Error: window.location.href = ", window.location.href)
                              return

                            }

                          }

                          // --- END MODIFIED ---

                          try {
                            console.log("Processing Json object", typeof initialArgs);

                            // console.log(initialArgs.trim().startsWith("<") && initialArgs.trim().endsWith(">"));
                            // console.log("line 444 _runStack JSON.parse(" + initialArgs + ")");

                            const parsedJson = JSON.parse(initialArgs);
                            if (parsedJson) {
                              
                              // Convert the JavaScript object into a formatted JSON string

                              console.log("initialArgs is a JSON object, navigating to", initialArgs);

                              // const jsonString = JSON.stringify(parsedJson, null, 2); 

                              document.open();
                              document.write("<pre>" + jsonString + "</pre>"); // Wrap in <pre> for formatting
                              document.close();
                              
                            }
                          } catch (jsonError) {
                            console.log("Processing error invalid Json", typeof initialArgs);

                            // Not JSON, treat as HTML or plain text

                            console.log("Processing HTML", typeof initialArgs);
                            if (initialArgs.trim().startsWith("<") && initialArgs.trim().endsWith(">")) {

                              // More robust HTML check
                              // console.log(initialArgs.trim().startsWith("<") && initialArgs.trim().endsWith(">"));

                              document.open();
                              document.write('<pre class="z-depth-5 card-panel deep-purple darken-1 scale-transition scale-out scale-in btn-large" id="eventRes01" class="menu-img grey darken-4 z-depth-5" style="width: 100%; height: 100%; border: none;" allow="autoplay" allow="encrypted-media" title="Dontime Life Website" frameborder="0" allowfullscreen >' + initialArgs + '</pre>');
                              document.close();

                              // const iframe = document.createElement("iframe");
                              // iframe.id = "eventRes01";
                              // iframe.title = "Dontime Life Website";
                              // iframe.allow = "autoplay; encrypted-media";
                              // iframe.allowFullscreen = true;
                              // iframe.style.width = "100%";
                              // iframe.style.height = "100%";
                              // iframe.style.border = "none";
                              // iframe.className = "z-depth-5 card-panel deep-purple darken-1 scale-transition scale-out scale-in btn-large menu-img grey darken-4 z-depth-5";
                              // document.getElementById("iframeContainer").appendChild(iframe);
                              // const iframeDoc = iframe.contentWindow.document;
                              // iframeDoc.open();
                              // document.open();
                              // document.write('<div id="iframeContainer">' + iframeDoc.write(initialArgs) + '</div>');
                              // document.close();
                              // iframeDoc.close();

                            } 
                            else {
                              console.log("Processing this", typeof initialArgs);
                              let appStr = null;
                                if (typeof initialArgs === "object") {
                                  appStr = JSON.stringify(initialArgs);
                                } else {

                                  // Escape special characters and wrap in quotes for the HTML template

                                  appStr = JSON.stringify(initialArgs); 
                                }

                              // const fStr = JSON.stringify(currentApp.index? currentApp.index.funcStr:"null");
                              // const dStr = JSON.stringify(currentApp.index? currentApp.index.dataStr:"null");
                              // const indStr = fStr? fStr:dStr;
                              // const combineStr = indStr + " " + appStr
                              // console.log("typeof initialArgs === ", typeof initialArgs);

                              chUrl.value = JSON.stringify(appStr, null, 2);
                            }
                          }
                        }
                      } else {
                        chUrl.value = '[""]'; // Default if args is missing
                      }
                        chUrl.addEventListener("change", function() {
                          try {

                            // Parse the user's input as the new value
                            // Allow direct strings or JSON arrays/objects

                            let htmlApp
                            try {
                              htmlApp = JSON.parse(this.value);
                            } 
                            catch (jsonError) {

                              // If it's not valid JSON, treat it as a plain string

                              htmlApp = this.value
                            }

                            // --- MODIFICATION STARTS HERE ---
                            // Create a *new*, reduced e object containing only func and args

                            const updatedClientApp = htmlApp

                            // --- MODIFICATION ENDS HERE ---

                            alert("WebApp updated. Sending back to server for re-render.");
                            console.log("Client-side: Updated WebApp to send:", updatedClientApp);
                                    async function handleStackUpdate() {
                                      try {
                                        const newStackContent = updatedClientApp
                                        document.open();
                                        document.write(newStackContent);
                                        document.close();
                                        console.log("Client-side: Page re-rendered with new content from server.");
                                      } 
                                      catch (error) {
                                        console.error("Client-side Error during full re-render:", error);
                                        alert("Error re-rendering: " + error.message);
                                      }
                                    }
                            handleStackUpdate()
                          } catch (error) {
                            alert("Error processing input. Please ensure it's valid JSON or a plain string.");
                            console.error("Input processing error:", error);
                          }
                        });
                    }
                </script>
              </body>
            </html>`,
            {
              appL:
                payLoad.type === "text" ? iframeSrc : JSON.stringify(payLoad),
              etop: JSON.stringify(e),
              tupL: htmlArray[funcTres0Index] || htmlArray[funcTresIndex],
              homePage: getScriptUrl(),
            },
          ),
          aplot: payLoad.type === "text" ? iframeSrc : JSON.stringify(payLoad),
          e: JSON.stringify(e),
          homePage: getScriptUrl(),
        },

        "returning renderTemplate contentApp [" +
          libFunc +
          "].apply(this, [" +
          (foobarr || htmlArray[foobarr0Index] || htmlArray[foobarrIndex]) +
          "]), tupL " +
          (htmlArray[funcTres0Index] || htmlArray[funcTresIndex]) +
          ", e " +
          JSON.stringify(e) +
          " " +
          (foobarr || htmlArray[foobarr0Index] || htmlArray[foobarrIndex]),
      );
    } catch (error) {
      console.error(`Error executing function "${libFunc}":`, error);
      throw new Error(
        "Error executing function: " + error.toString() + "\n" + error.stack,
      );
    }
  }
};

var getScriptUrl = function () {
  return ScriptApp.getService().getUrl();
};

var getUrl = function (appInterface) {
  var url = appInterface?.getService().getUrl();
  return url;
};

function prepareDataBrain(data, ratio = 29) {
  if (data) {
    return Array.isArray(data)
      ? data.map((row) => {
          const rings = Object.values(row).slice(0, 1);
          const values = Object.values(row).slice(1);
          authLogic(values[values.indexOf("M")] === "M")
            ? (function () {
                const male = values.splice(values.indexOf("M"), 1);
                values.splice(0, 0, male[0]);
              })()
            : authLogic(values[values.indexOf("F")] === "F")
              ? (function () {
                  const female = values.splice(values.indexOf("F"), 1);
                  values.splice(0, 0, female[0]);
                })()
              : authLogic(values[values.indexOf("I")] === "I")
                ? (function () {
                    const inConclusive = values.splice(values.indexOf("I"), 1);
                    values.splice(0, 0, inConclusive[0]);
                  })()
                : (function () {
                    return;
                  })();
          values[0] = sexToNumber(values[0]);
          return {
            input: values,
            output: [rings[0] / ratio],
          };
        })
      : data;
  }
};

var rule = function () {
  var today = new Date();
  var todayString = today.toDateString() + " - " + today.toTimeString();
  return todayString;
}

var scriptQuit = function () {
  return;
}

function sexToNumber(sex) {
  switch (sex) {
    case "F":
      return 0;
    case "M":
      return 1;
    default:
      return 0.5;
  }
};

function sheetWebsite(e) {
  var usr = e;
  if (!usr["parameter"]) {
    var query = [e][0] || Math.floor(Math.random() * Math.floor(e.length));
  } else {
    var query =
      usr.parameter["args"] || Math.floor(Math.random() * Math.floor(e.length));
  }
  var urlSs =
    "https://docs.google.com/spreadsheets/d/1-vNcN0vCLcXgMY9uwcKukUgv_4njggRZ6fqoZs-hBFE/edit#gid=138098962";
  var urlWww =
    "https://script.google.com/macros/s/AKfycbzhrxdXzM08AAwA5ualRXdnDtV6C_xQ7bcq4v6H0HNdBqPr2C8A1URyWN0FLLccQuoA/exec?func=misBing&args=";
  var tmp = [];
  var parameters = [e][1] || 1;
  var sheetName = "Inventory";
  var sheet = ssGetSheetBySpreadsheetUrl(urlSs, sheetName).activate();
  var range = sheet.getDataRange();
  var data = range.getValues();
  var headings = data.slice(3, 4).toString().toLowerCase().split(",");
  var noHeaders = data.slice(4).map(function (val) {
    return val.toString().toLowerCase();
  });
  var outputData = covObjects(noHeaders, headings);
  var output = JSON.stringify({ status: "success", data: outputData });
  var rows = [];
  var values = range.getValues();
  for (var row in values) {
    rows.push([]);
    for (var col in values[row]) {
      rows[row].push(values[row][col]);
    }
  }
  var rowsToReturn = splitArr(rows, 5, query);
  var outputQuery = covObjects(rowsToReturn, headings);
  var arrData = covArrays(outputQuery);
  let objParts = {};
  for (var i = 0; i < arrData.length; i++) {
    for (var [key, { headings }] of Object.entries(arrData[i])) {
      objParts[headings] = key;
    }
  }
  if (arrData) {
    const keys = Object.keys(arrData);
    keys.forEach(function (key) {
      tmp[key] = arrData[key];
    });
  }
  var jo = {};
  var dataArray = [];
  for (var i = 0, l = arrData.length; i < l; i++) {
    var record = {};
    record["id"] = arrData[i][0]["sku"];
    record["productName"] = arrData[i][0]["description"];
    record["rand1"] = arrData[i][0]["total customer purchase"];
    record["rand2"] = arrData[i][0]["qty offset"];
    record["rand3"] = arrData[i][0]["estimated value"];
    record["rand4"] = arrData[i][0]["supply processed "];
    record["rand5"] = arrData[i][0]["pack size"];
    record["rand6"] = arrData[i][0]["total supply available"];
    record["rand7"] = arrData[i][0]["cost supply available"];
    record["rand8"] = arrData[i][0]["current cost per item"];
    record["rand9"] = arrData[i][0][" average cost over time"];
    if (record["id"] !== "") {
      dataArray.push(record);
    }
  }
  var randNum = Math.floor(Math.random() * Math.floor(dataArray.length));
  var searchString = dataArray[randNum]["productName"];
  jo.user = dataArray;
  var coTable = jo.user.map((r) => {
    return `<tr><td><a class="waves-effect waves-light btn" href="${urlWww + encodeURIComponent(r["id"])}" target="_blank">${r["id"]}</a></td><td><a class="waves-effect waves-light btn" href="${urlWww + encodeURIComponent(r["productName"])}" target="_blank">${r["productName"]}</a></td><td><a class="waves-effect waves-light btn" href="${urlWww + encodeURIComponent(r["rand1"])}" target="_blank">${r["rand1"]}</a></td><td><a class="waves-effect waves-light btn" href="${urlWww + encodeURIComponent(r["rand2"])}" target="_blank">${r["rand2"]}</a></td><td><a class="waves-effect waves-light btn" href="${urlWww + encodeURIComponent(r["rand3"])}" target="_blank">${r["rand3"]}</a></td><td><a class="waves-effect waves-light btn" href="${urlWww + encodeURIComponent(r["rand4"])}" target="_blank">${r["rand4"]}</a></td><td><a class="waves-effect waves-light btn" href="${urlWww + encodeURIComponent(r["rand5"])}" target="_blank">${r["rand5"]}</a></td><td><a class="waves-effect waves-light btn" href="${urlWww + encodeURIComponent(r["rand6"])}" target="_blank">${r["rand6"]}</a></td><td><a class="waves-effect waves-light btn" href="${urlWww + encodeURIComponent(r["rand7"])}" target="_blank">${r["rand7"]}</a></td><td><a class="waves-effect waves-light btn" href="${urlWww + encodeURIComponent(r["rand8"])}" target="_blank">${r["rand8"]}</a></td><td><a class="waves-effect waves-light btn" href="${urlWww + encodeURIComponent(r["rand9"])}" target="_blank">${r["rand9"]}</a></td></tr>`;
  });
  var result = JSON.stringify(coTable);
  baseUrl = getUrl(ScriptApp);
  inventoryUrl = getUrl(ScriptApp);
  financeUrl = getUrl(ScriptApp);
  return HtmlService.createTemplate(
    `
    <h2 class="search-overlay__section-title">General Information</h2>
    <div class="row">
    <div class="col s10 card-panel amber push-s1 push-m1 push-l1">
    <div class="container">
    <div class="col s12 receipt red">
    <span><input placeholder="args ex. 1, 2...6" class="flow-text menu-img z-depth-5 card-panel black scale-transition scale-out scale-in receipt btn-large" id="invItem" type="search" /></span>
    </div></div></div></div>
    <div class="row">
    <div class="col s10 card-panel amber push-s1 push-m1 push-l1">
    <div class="container">
    <div class="col s12 receipt red">
    <table class="striped centered highlight responsive-table grey z-depth-5" style="width:100%">
      <thead>
        <tr>
          <th>ID</th>
          <th>Product Name</th>
          <th>Inventory</th>
          <th>In House</th>
          <th>Est Value</th>
          <th>Incoming</th>
          <th>Quantity</th>
          <th>Available</th>
          <th>Price</th>
          <th>Item Price</th>
          <th>Price Change</th>
        </tr>
      </thead>
      <tbody id="sheetWebsite">
      </tbody>
    </table>
    </div></div></div></div>
    <script>document.getElementById('invItem').addEventListener('change', userClicked)
      function userClicked()
        {// Init a timeout variable to be used below
        let timeout = null;
        (() => {// Clear the timeout if it has already been set.
        // This will prevent the previous task from executing
        // if it has been less than <MILLISECONDS>
        // clearTimeout(timeout);
        // Make a new timeout set to go off in 1000ms (1 second)
        // timeout = setTimeout
        // (function  () 
          // {console.log('Input Value:', textInput.value);}, 5000)();
        if (typeof url === "undefined")
          {var urlData = document.getElementById("url").value;
          var url = urlData.toString()}
        var args = document.getElementById("invItem").value;
        var linkHome = document.createElement("a");
        var linkFollow = document.createElement("a");
        linkHome.href = "https://flewis21.github.io/foobar/";
        linkFollow.href = url + "?func=sheetWebsite" + "&args=" + encodeURIComponent(args);
        linkHome.id = "linkHOME";
        linkFollow.id = "linkFOLLOW";
        linkHome.target = "popup";
        linkFollow.target = "_top";
        document.body.appendChild(linkHome);
        document.body.appendChild(linkFollow);
        document.getElementById("linkFOLLOW").click();
        document.getElementById("linkHOME");
        document.getElementById("invItem").value = "";})()}; //Global object closed
    </script>
    <script>document.querySelector(".search-overlay__section-title").setAttribute("style", "background-color: red;color: white;");</script>
    <script>document.querySelector(".query-results").setAttribute("style", "background-color: red; color: yellow;");</script>
    <script>document.addEventListener("DOMContentLoaded", function()
      {document.getElementById("sheetWebsite").innerHTML = ${result};})</script>
    <input type="hidden" value="<?= getUrl(ScriptApp) ?>" id="url" />`,
  ).getRawContent();
};

// case "request": // <!-----------------------------API Endpoint Page------------------------!>
// console.log(query)
// let lastrow = sheet.getLastRow();
// console.log(data)
// console.log(noHeaders)
// console.log(typeof headings + " - HEADINGS: " + headings[5])
// let range = sheet.getRange(e.parameter['noheaders'],e.parameter['col'],lastrow,parameters);
// console.log(rowsToReturn[0]);
// console.log(Utilities.jsonStringify(Object.entries([arrData])))
// Math.floor(Math.random());
//.map(entry => [entry[1]]))
// console.log(rows)
//Object.fromEntries(JSON.stringify(
// console.log(arrData[i]);
// var minData = [tmp][0].entries().next().value
//var dataRow = Utilities.jsonParse(arrData);
// console.log(typeof arrData[i]);
// console.log(arrData[i])
// console.log(result)
// webApp = HtmlService.createTemplate(ContentService.createTextOutput(JSON.stringify({ data: coTable, error: false })).setMimeType(ContentService.MimeType.JSON).getContent());
// let randomRequest = rowsToReturn[0][1][0];
// console.log(rowsToReturn[0]);
// if (query != null)
//   {var rowsToReturn = rows.filter(function (a) { return a[5] == query; });}
// webApp = HtmlService.createTemplate(ContentService.createTextOutput(JSON.stringify({'data': rows, 'error': false})).setMimeType(ContentService.MimeType.JSON).getContent());
// webApp.content = jsonINIT("https://www.clubhouse.com/@fabianlewis?utm_medium=ch_profile&utm_campaign=lhTUtHb2bYqPN3w8EEB7FQ-247242");
// return webApp.evaluate().setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
// console.log("Array of Objects: " + Utilities.jsonStringify(arrData[0]))

// function userSite() {
//   var website = SitesApp.getSites();
//   console.log(website);
//   return {
//     mySites: website,
//   };
// }

function wwwDe(url) {
  var feed = UrlFetchApp.fetch(url).getContentText();
  feed = feed.replace(
    /(&lt;img.*?alt="(.*?)".*?&gt;)/g,
    "$1" + new Array(10).join("&lt;br /&gt;") + "$2",
  );
  return ContentService.createTextOutput(feed).setMimeType(
    ContentService.MimeType.RSS,
  );
};
