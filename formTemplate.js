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
function createFormFunction(searchString) {
  // --- Configuration for randomness ---
  const SCRIPT_TITLES = searchString
    ? Array(searchString)
    : functionRegistry.fileList;
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
  // try {
  //   let functionCheck = driveManager(script || scriptTitle, functionRegistry.time);
  // }
  Logger.log(`Random script: ${script?.toString()}`);
  Logger.log(`Script name: ${scriptTitle}`);

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
  const isRequired = randChoice(); //Math.random() < 0.7; // 70% chance of being required

  let fileIndex; //= crmT(scriptTitle)
  let fileParams; //= functionRegistry.paramsList[fileIndex]
  let scriptUrl; //= script()//.getPublishedUrl();
  let mapArr = {};
  let vidTubeTime = vidPlaylist(scriptTitle);
  let tubeArr = vidTubeTime?.playlistArr;
  var tubeEngine = vidTubeTime.hardUrl;
  const userSubmit = FormApp.create(scriptTitle)
    .setDescription(rule())
    .setConfirmationMessage(encodeURI(tubeEngine));
  const sectionHeaderItem = userSubmit
    .addSectionHeaderItem()
    .setTitle(questionTitle + " (New Section)");
  const checkboxGridItem = userSubmit
    .addCheckboxGridItem()
    .setTitle(questionTitle + " (Black)");
  const gridItem = userSubmit
    .addGridItem()
    .setTitle(questionTitle + " (Radio Grid)");
  const imageItem = userSubmit;
  // .addImageItem()
  // .setTitle(questionTitle + " (Image)");
  const videoItem = userSubmit;
  // Use a valid YouTube video ID
  // if (tubeArr) {
  const videoAlignments = [
    FormApp.Alignment.LEFT,
    FormApp.Alignment.CENTER,
    FormApp.Alignment.RIGHT,
  ];
  if (tubeArr.length > 0) {
    let tubeUrlsArr = [];
    tubeArr.forEach((vidId) => {
      let linkLocation = "https://www.youtube.com/watch?v=" + vidId;
      // tubeUrlsArr.push(linkLocation);
      // let rndTube = Math.floor(Math.random() * (Math.floor(tubeUrlsArr.length)));
      // var tubeVideoUrl = tubeUrlsArr[rndTube];
      videoItem
        .addVideoItem()
        .setTitle(questionTitle)
        // .setHelpText(encodeURI(tubeEngine))
        .setVideoUrl(linkLocation)
        .setWidth(Math.floor(Math.random() * 300) + 400) // 400-700px width
        .setAlignment(
          videoAlignments[Math.floor(Math.random() * videoAlignments.length)],
        );
    });
  }
  // }
  else {
    let tubeArr = vidPlaylist(scriptTitle).playlistArr;
    tubeArr.forEach((vidId) => {
      let linkLocation = "https://www.youtube.com/watch?v=" + vidId;
      videoItem
        .addVideoItem()
        .setTitle(questionTitle)
        // .setHelpText(encodeURI(tubeEngine))
        .setVideoUrl(linkLocation)
        // Aretha Franklin, Marvis Staples - Oh Happy Day (Official Music Video)
        // Rick Astley - Never Gonna Give You Up dQw4w9WgXcQ (a classic placeholder)
        .setWidth(Math.floor(Math.random() * 300) + 400) // 400-700px width
        .setAlignment(
          videoAlignments[Math.floor(Math.random() * videoAlignments.length)],
        );
    });
  }
  const imgFile = seoPictTime(scriptTitle, functionRegistry.time)?.playList;
  let rndfileImage =
    imgFile[Math.floor(Math.random() * Math.floor(imgFile.length))];
  if (rndfileImage) {
    let deepFileDive = DriveApp.getFilesByName(rndfileImage);
    if (deepFileDive.hasNext()) {
      var nextDFD = deepFileDive?.hasNext();
    }
  }
  if (nextDFD) {
    while (nextDFD) {
      let dFile = deepFileDive;
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
  } else {
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
            return;
          } else {
            tempSortImg.push(imgUrl);
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
    tempSortImg.forEach((priImg) => {
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
      } catch (error) {
        console.info(error.stack);
      }
    });
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
  gridItem.setRows([
    "aBlackR",
    "aBlackRO-O-O",
    "aBlackPawn",
    "aWhitePawn",
    "aWhiteRO-O-O",
    "aWhiteR",
    "bBlackN",
    "bBlackPawn",
    "bWhitePawn",
    "bWhiteN",
    "cBlackB",
    "cBlackPawn",
    "cWhitePawn",
    "cWhiteB",
    "dBlackQ",
    "dBlackPawn",
    "dWhitePawn",
    "dWhiteQ",
    "eBlackK",
    "eBlackKO-O-O",
    "eBlackKO-O",
    "eBlackPawn",
    "eWhitePawn",
    "eWhiteKO-O",
    "eWhiteKO-O-O",
    "eWhiteK",
    "fBlackB",
    "fBlackPawn",
    "fWhitePawn",
    "fWhiteB",
    "gBlackN",
    "gBlackPawn",
    "gWhitePawn",
    "gWhiteN",
    "hBlackR",
    "hBlackRO-O",
    "hBlackPawn",
    "hWhitePawn",
    "hWhiteRO-O",
    "hWhiteR",
  ]);
  gridItem.setColumns([
    "a8",
    "a7",
    "a6",
    "a5",
    "a4",
    "a3",
    "a2",
    "a1",
    "b8",
    "b7",
    "b6",
    "b5",
    "b4",
    "b3",
    "b2",
    "b1",
    "c8",
    "c7",
    "c6",
    "c5",
    "c4",
    "c3",
    "c2",
    "c1",
    "d8",
    "d7",
    "d6",
    "d5",
    "d4",
    "d3",
    "d2",
    "d1",
    "e8",
    "e7",
    "e6",
    "e5",
    "e4",
    "e3",
    "e2",
    "e1",
    "f8",
    "f7",
    "f6",
    "f5",
    "f4",
    "f3",
    "f2",
    "f1",
    "g8",
    "g7",
    "g6",
    "g5",
    "g4",
    "g3",
    "g2",
    "g1",
    "h8",
    "h7",
    "h6",
    "h5",
    "h4",
    "h3",
    "h2",
    "h1",
    "x",
    "+",
    "#",
    "=",
  ]);
  if (isRequired) gridItem.setRequired(true);
  if (Math.random() < 0.3) {
    gridItem.setValidation(
      FormApp.createGridValidation().requireLimitOneResponsePerColumn().build(),
    );
  }
  checkboxGridItem.setRows(["8", "7", "6", "5", "4", "3", "2", "1"]);
  checkboxGridItem.setColumns(["a", "b", "c", "d", "e", "f", "g", "h"]);
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
    console.log("isRequired", isRequired);
    // console.info(userEMail);
    if (!script || (script && script?.length === 0)) {
      console.log("!script || (script && script?.length === 0)");
      console.info(script?.toString() || scriptTitle);
      // var tempObj =
      if (!script) {
        console.log("!script");
        mapArr["driveManager"] = [];
        // let funcX = driveManager(scriptTitle, functionRegistry.time);
        let tempObj = isMapped(mapArr, [
          "driveManager",
          [scriptTitle, functionRegistry.time],
        ])["driveManager"]; //userSubmit.getPublishedUrl()]);
        scriptUrl = resolveParams(tempObj);
      } else {
        console.log("(script && script?.length === 0)");
        mapArr[scriptTitle] = [];
        let tempObj = isMapped(mapArr, [scriptTitle])[scriptTitle];
        scriptUrl = resolveParams(tempObj);
      }
    } else {
      console.info("script\n", script?.toString() || scriptTitle);
      mapArr[scriptTitle] = [];
      fileIndex = crmT(scriptTitle);
      fileParams = functionRegistry.paramsList[fileIndex];
      let tempObj = isMapped(mapArr, [scriptTitle, [...fileParams.parameters]])[
        scriptTitle
      ];
      scriptUrl = resolveParams(tempObj);
    }
  } else {
    console.log("isRequired", isRequired);
    if (!script || script.length === 0) {
      console.log("!script || (script && script?.length === 0)");
      if (!script) {
        console.log("!script");
        mapArr["driveManager"] = [];
        // let funcX = driveManager(scriptTitle, functionRegistry.time);
        let tempObj = isMapped(mapArr, [
          "driveManager",
          [scriptTitle, functionRegistry.time],
        ])["driveManager"]; //userSubmit.getPublishedUrl()]);
        scriptUrl = resolveParams(tempObj);
      } else {
        console.log("(script && script?.length === 0)");
        mapArr[scriptTitle] = [];
        // let funcX = driveManager(scriptTitle, functionRegistry.time);
        let tempObj = isMapped(mapArr, [scriptTitle])[scriptTitle]; //userSubmit.getPublishedUrl()]);
        scriptUrl = resolveParams(tempObj);
      }
    } else {
      console.info("script\n", script?.toString() || scriptTitle);
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
      const rndTMult = Math.floor(Math.random() * eventTypes.length);
      const randomType = eventTypes[rndTMult];
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
            let validationBuilder = FormApp.createTextValidation(); // ScriptApp.WeekDay; // .requireAllScopes(ScriptApp.AuthMode.FULL);
            switch (validationType) {
              case 0:
                validationBuilder.requireNumber(); //.FRIDAY; //;
                break;
              case 1:
                validationBuilder.requireTextContainsPattern("test"); //.MONDAY; //;
                break;
              case 2:
                validationBuilder.requireTextIsEmail(); //.WEDNESDAY; //;
                break;
              case 3:
                validationBuilder.requireTextIsUrl(); //.THURSDAY; //;
                break;
              case 4:
                validationBuilder.requireTextLengthGreaterThanOrEqualTo(5); //.TUESDAY; //;
                break;
            }
            userSubmit
              .addTextItem()
              .setTitle(questionTitle + "\n" + textItem.getBody().getText()) //.textItem
              // .getBody()
              // .appendListItem
              .setValidation(
                validationBuilder.build(),
                // .withCustomMessage("Please follow the specific text rule.")
                // .build()
              )
              .setHelpText("Please follow the specific text rule.");
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

/**
 * Creates a new Google Form with a random structure and content,
 * leveraging available FormsApp properties and methods from the provided documentation.
 *
 * NOTE: Programmatic control over font styles and direct theme color
 * setting (beyond the initial form creation) is NOT available via the FormsApp API.
 * The form will use Google Forms' default theme or the last manually applied theme.
 *
 * @returns {string} The URL of the newly created random Google Form.
 */
function createRandomForm() {
  // --- Configuration for randomness ---
  const FORM_TITLES = [
    "Random Survey",
    "Quick Feedback Form",
    "Daily Check-in",
    "Mystery Questionnaire",
    "Event Registration",
    "Project Status Update",
    "Abstract Data Collection",
    "Whimsical Inquiry",
    "Customer Poll",
    "Service Evaluation",
    "Product Interest Form",
  ];
  const FORM_DESCRIPTIONS = [
    "A randomly generated form to gather insights.",
    "Please fill out this form at your leisure. Content is randomized.",
    "Exploring the possibilities of programmatic form creation.",
    "This form was created by an algorithm. Enjoy!",
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
  const MAX_SECTIONS = 3;
  const MIN_QUESTIONS_PER_SECTION = 2;
  const MAX_QUESTIONS_PER_SECTION = 7;

  // --- Create the Form ---
  const formTitle = FORM_TITLES[Math.floor(Math.random() * FORM_TITLES.length)];
  const form = FormApp.create(formTitle);
  Logger.log(`Created new form: ${form.getTitle()} - ${form.getEditUrl()}`);

  // --- Set Basic Form Properties ---
  const formDescription =
    FORM_DESCRIPTIONS[Math.floor(Math.random() * FORM_DESCRIPTIONS.length)];
  form.setDescription(formDescription);

  // Randomly decide to collect email or not
  form.setCollectEmail(Math.random() < 0.5);

  // Randomly decide to show progress bar for multi-section forms
  if (Math.random() < 0.7) {
    form.setProgressBar(true); // Using setProgressBar as found in Form methods
  }

  // --- Add Sections and Questions ---
  const numSections =
    Math.floor(Math.random() * (MAX_SECTIONS - MIN_SECTIONS + 1)) +
    MIN_SECTIONS;

  for (let s = 0; s < numSections; s++) {
    if (s > 0) {
      // Add page break for subsequent sections
      form
        .addPageBreakItem()
        .setTitle(
          `Section ${s + 1}: ${QUESTION_WORDS[Math.floor(Math.random() * QUESTION_WORDS.length)]} Details`,
        )
        .setHelpText(
          `This is a random section for more ${QUESTION_WORDS[Math.floor(Math.random() * QUESTION_WORDS.length)]} related questions.`,
        );
    }

    const numQuestions =
      Math.floor(
        Math.random() *
          (MAX_QUESTIONS_PER_SECTION - MIN_QUESTIONS_PER_SECTION + 1),
      ) + MIN_QUESTIONS_PER_SECTION;

    for (let q = 0; q < numQuestions; q++) {
      // All ItemTypes that have corresponding add...Item() methods and are not UNSUPPORTED
      const itemTypes = [
        FormApp.ItemType.TEXT,
        FormApp.ItemType.PARAGRAPH_TEXT,
        FormApp.ItemType.MULTIPLE_CHOICE,
        FormApp.ItemType.CHECKBOX,
        FormApp.ItemType.LIST,
        FormApp.ItemType.DATE,
        FormApp.ItemType.DATETIME,
        FormApp.ItemType.DURATION,
        FormApp.ItemType.TIME,
        FormApp.ItemType.SCALE,
        FormApp.ItemType.RATING,
        FormApp.ItemType.GRID,
        FormApp.ItemType.CHECKBOX_GRID,
        FormApp.ItemType.SECTION_HEADER, // Can add section headers within sections
        FormApp.ItemType.IMAGE,
        FormApp.ItemType.VIDEO,
      ];
      const randomType =
        itemTypes[Math.floor(Math.random() * itemTypes.length)];

      const questionTitle = `${QUESTION_WORDS[Math.floor(Math.random() * QUESTION_WORDS.length)]} ${Math.random() < 0.5 ? "?" : ""}`;
      const isRequired = Math.random() < 0.7; // 70% chance of being required

      switch (randomType) {
        case FormApp.ItemType.TEXT:
          const textItem = form
            .addTextItem()
            .setTitle(questionTitle + " (Short Text)");
          if (isRequired) textItem.setRequired(true);
          if (Math.random() < 0.4) {
            // Add random text/number validation
            const validationType = Math.floor(Math.random() * 5); // More text validations
            let validationBuilder = FormApp.createTextValidation();
            switch (validationType) {
              case 0:
                validationBuilder.requireNumber();
                break;
              case 1:
                validationBuilder.requireTextContainsPattern("test");
                break;
              case 2:
                validationBuilder.requireTextIsEmail();
                break;
              case 3:
                validationBuilder.requireTextIsUrl();
                break;
              case 4:
                validationBuilder.requireTextLengthGreaterThanOrEqualTo(5);
                break;
            }
            textItem.setValidation(
              validationBuilder
                .withCustomMessage("Please follow the specific text rule.")
                .build(),
            );
          }
          break;

        case FormApp.ItemType.PARAGRAPH_TEXT:
          const paragraphItem = form
            .addParagraphTextItem()
            .setTitle(questionTitle + " (Long Text)");
          if (isRequired) paragraphItem.setRequired(true);
          if (Math.random() < 0.3) {
            // Add random length validation
            // **** CORRECTED: Use createParagraphTextValidation() ****
            paragraphItem.setValidation(
              FormApp.createParagraphTextValidation()
                .requireTextLengthGreaterThanOrEqualTo(20)
                .withCustomMessage("Please write at least 20 characters.")
                .build(),
            );
          }
          break;

        case FormApp.ItemType.MULTIPLE_CHOICE:
          const mcItem = form
            .addMultipleChoiceItem()
            .setTitle(questionTitle + " (Choose One)");
          const mcChoices = [];
          for (let i = 0; i < Math.floor(Math.random() * 3) + 2; i++) {
            // 2-4 choices
            mcChoices.push(
              mcItem.createChoice(
                CHOICE_WORDS[Math.floor(Math.random() * CHOICE_WORDS.length)],
              ),
            );
          }
          mcItem.setChoices(mcChoices);
          if (isRequired) mcItem.setRequired(true);
          if (Math.random() < 0.2) mcItem.showOtherOption(true); // Randomly add 'Other' option
          break;

        case FormApp.ItemType.CHECKBOX:
          const cbItem = form
            .addCheckboxItem()
            .setTitle(questionTitle + " (Select All That Apply)");
          const cbChoices = [];
          for (let i = 0; i < Math.floor(Math.random() * 4) + 2; i++) {
            // 2-5 choices
            cbChoices.push(
              cbItem.createChoice(
                CHOICE_WORDS[Math.floor(Math.random() * CHOICE_WORDS.length)],
              ),
            );
          }
          cbItem.setChoices(cbChoices);
          if (isRequired) cbItem.setRequired(true);
          if (Math.random() < 0.3) {
            // Add random checkbox validation
            cbItem.setValidation(
              FormApp.createCheckboxValidation()
                .setHelpText("Select between 1 and 3 options.")
                .requireSelectBetween(1, 3)
                .build(),
            );
          }
          if (Math.random() < 0.2) cbItem.showOtherOption(true); // Randomly add 'Other' option
          break;

        case FormApp.ItemType.LIST:
          const listItem = form
            .addListItem()
            .setTitle(questionTitle + " (Dropdown)");
          const listChoices = [];
          for (let i = 0; i < Math.floor(Math.random() * 3) + 2; i++) {
            // 2-4 choices
            listChoices.push(
              listItem.createChoice(
                CHOICE_WORDS[Math.floor(Math.random() * CHOICE_WORDS.length)],
              ),
            );
          }
          listItem.setChoices(listChoices);
          if (isRequired) listItem.setRequired(true);
          break;

        case FormApp.ItemType.DATE:
          const dateItem = form
            .addDateItem()
            .setTitle(questionTitle + " (Date)");
          if (isRequired) dateItem.setRequired(true);
          dateItem.setIncludesYear(Math.random() < 0.5); // Randomly include year
          break;

        case FormApp.ItemType.DATETIME:
          const dateTimeItem = form
            .addDateTimeItem()
            .setTitle(questionTitle + " (Date & Time)");
          if (isRequired) dateTimeItem.setRequired(true);
          dateTimeItem.setIncludesYear(Math.random() < 0.5); // Randomly include year
          break;

        case FormApp.ItemType.DURATION:
          const durationItem = form
            .addDurationItem()
            .setTitle(questionTitle + " (Duration)");
          if (isRequired) durationItem.setRequired(true);
          break;

        case FormApp.ItemType.TIME:
          const timeItem = form
            .addTimeItem()
            .setTitle(questionTitle + " (Time)");
          if (isRequired) timeItem.setRequired(true);
          break;

        case FormApp.ItemType.SCALE:
          const scaleItem = form
            .addScaleItem()
            .setTitle(questionTitle + " (Rating Scale)");
          scaleItem.setLowerBound(1);
          scaleItem.setUpperBound(Math.floor(Math.random() * 5) + 5); // Scale of 1 to 5-9
          if (Math.random() < 0.5) scaleItem.setLabels("Lowest", "Highest");
          if (isRequired) scaleItem.setRequired(true);
          break;

        case FormApp.ItemType.RATING:
          const ratingItem = form
            .addRatingItem()
            .setTitle(questionTitle + " (Icon Rating)");
          ratingItem.setRatingScaleLevel(Math.floor(Math.random() * 5) + 5); // Scale of 5-9
          const ratingIcons = [
            FormApp.RatingIconType.STAREnum,
            FormApp.RatingIconType.HEARTEnum,
            FormApp.RatingIconType.THUMB_UPEnum,
          ];
          ratingItem.setRatingIcon(
            ratingIcons[Math.floor(Math.random() * ratingIcons.length)],
          );
          if (isRequired) ratingItem.setRequired(true);
          break;

        case FormApp.ItemType.GRID:
          const gridItem = form
            .addGridItem()
            .setTitle(questionTitle + " (Radio Grid)");
          gridItem.setRows(["Row 1", "Row 2", "Row 3"]);
          gridItem.setColumns(["Disagree", "Neutral", "Agree"]);
          if (isRequired) gridItem.setRequired(true);
          if (Math.random() < 0.3) {
            gridItem.setValidation(
              FormApp.createGridValidation()
                .requireLimitOneResponsePerColumn()
                .build(),
            );
          }
          break;

        case FormApp.ItemType.CHECKBOX_GRID:
          const checkboxGridItem = form
            .addCheckboxGridItem()
            .setTitle(questionTitle + " (Checkbox Grid)");
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
          break;

        case FormApp.ItemType.SECTION_HEADER:
          const sectionHeaderItem = form
            .addSectionHeaderItem()
            .setTitle(questionTitle + " (New Section)");
          if (Math.random() < 0.7) {
            sectionHeaderItem.setHelpText(
              "This is a random section header for organization.",
            );
          }
          break;

        case FormApp.ItemType.IMAGE:
          const imageItem = form
            .addImageItem()
            .setTitle(questionTitle + " (Image)");
          // Use a public image URL or provide a Blob
          imageItem.setImage(
            DriveApp.getFileById("YOUR_PUBLIC_IMAGE_FILE_ID_HERE").getBlob(),
          ); // Replace with a real public image ID
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
          break;

        case FormApp.ItemType.VIDEO:
          const videoItem = form
            .addVideoItem()
            .setTitle(questionTitle + " (Video)");
          // Use a valid YouTube video ID
          videoItem.setVideoUrl("https://www.youtube.com/watch?v=dQw4w9WgXcQ"); // Rick Astley - Never Gonna Give You Up (a classic placeholder)
          videoItem.setWidth(Math.floor(Math.random() * 300) + 400); // 400-700px width
          const videoAlignments = [
            FormApp.Alignment.LEFT,
            FormApp.Alignment.CENTER,
            FormApp.Alignment.RIGHT,
          ];
          videoItem.setAlignment(
            videoAlignments[Math.floor(Math.random() * videoAlignments.length)],
          );
          break;
      }
    }
  }

  // --- Log and Return Form URL ---
  const formUrl = form.getPublishedUrl();
  Logger.log(`Random Form Created: ${formUrl}`);
  return formUrl;
}

function dtls(callFunc, time) {
  var appList = [];
  for (var key in globalThis) {
    if (typeof globalThis[key] == "function") {
      appList.push(key);
    }
  }
  var rdmNumForName = Math.floor(Math.random() * Math.floor(appList.length));
  var keysFunc = seoSheet(appList[rdmNumForName]).keyWords;
  var formName =
    callFunc && callFunc !== "callFunc"
      ? callFunc
      : keysFunc[Math.floor(Math.random() * Math.floor(keysFunc.length))];
  if (
    [appList].join().toLowerCase().includes([formName].join("").toLowerCase())
  ) {
    var jsFunc = globalThis[formName]();
    var isProduct = formsUrls([formName].join("").toLowerCase(), "Forms");
    console.log(typeof isProduct);
    if (typeof isProduct === "string") {
      var formUrl = FormApp.openByUrl(isProduct).getPublishedUrl();
      return formUrl;
    }
    var form = formMaker([formName].join("").toUpperCase(), "Forms");
    if (typeof form === "object") {
      form.setCollectEmail(true);
      if (
        [appList]
          .join()
          .toLowerCase()
          .includes([formName].join("").toLowerCase())
      ) {
        form
          .addParagraphTextItem()
          .setHelpText(globalThis[formName].toString());
      }
      jsFunc.map((piece) => {
        while (piece) {
          if (piece) {
            var elaspeTime = new Date() - time;
            var timeToExecute = functionRegistry.maxTime - elaspeTime;
            // console.log("piece: " + piece + "\nelaspeTime: " + elaspeTime)
            form.addPageBreakItem().setTitle([formName].join(""));
            // form.addSectionHeaderItm().setTitle([piece].join("").split('"'))
            form.addSectionHeaderItem().setHelpText(JSON.stringify(piece));
            if (
              timeToExecute <= 6 * 60 * 1000 &&
              timeToExecute >= 5.98 * 60 * 1000
            ) {
              console.log(
                "that function: " +
                  arguments.callee.caller.name +
                  "\nthis function: " +
                  arguments.callee.name +
                  "\nTime limit six minutes",
              );
            }
            if (
              timeToExecute <= 5 * 60 * 1000 &&
              timeToExecute >= 4.98 * 60 * 1000
            ) {
              // console.log("that function: " + arguments.callee.caller.name + "\nthis function: " + arguments.callee.name + "\nTime limit five minutes")
            }
            if (
              timeToExecute <= 4 * 60 * 1000 &&
              timeToExecute >= 3.98 * 60 * 1000
            ) {
              // console.log("that function: " + arguments.callee.caller.name + "\nthis function: " + arguments.callee.name + "\nTime limit four minutes")
            }
            if (
              timeToExecute <= 3 * 60 * 1000 &&
              timeToExecute >= 2.98 * 60 * 1000
            ) {
              // console.log("that function: " + arguments.callee.caller.name + "\nthis function: " + arguments.callee.name + "\nTime limit three minutes")
            }
            if (
              timeToExecute <= 2 * 60 * 1000 &&
              timeToExecute >= 1.98 * 60 * 1000
            ) {
              // console.log("that function: " + arguments.callee.caller.name + "\nthis function: " + arguments.callee.name + "\nTime limit two minutes")
            }
            if (
              timeToExecute <= 1 * 60 * 1000 &&
              timeToExecute >= 0.98 * 60 * 1000
            ) {
              // console.log("that function: " + arguments.callee.caller.name + "\nthis function: " + arguments.callee.name + "\nTime limit one minute")
            }
            if (timeToExecute <= 0.05 * 60 * 1000) {
              console.log(
                "piece: " +
                  piece[0] +
                  "\ntimeToExecute: " +
                  timeToExecute.valueOf(),
              );
              return;
            }
            return piece[0];
          }
          return;
        }
      });
      var formUrl = form.getPublishedUrl();
      return formUrl;
    }
  }
  var isProduct = formsUrls([formName].join("").toLowerCase(), "Forms");
  console.log(typeof isProduct);
  if (typeof isProduct === "string") {
    var formUrl = FormApp.openByUrl(isProduct).getPublishedUrl();
    return formUrl;
  }
  var form = formMaker([formName].join("").toUpperCase(), "Forms");
  if (typeof form === "object") {
    form.addTextItem().setTitle("Your Name").setRequired(true);
    form.addDateItem().setTitle("Birth Date").setRequired(true);
    form.addParagraphTextItem().setTitle("Your Message").setRequired(true);
    form
      .setTitle(formName)
      .setConfirmationMessage("Thanks for your feedback !!");
    var url = form.getPublishedUrl();
    return url;
    return HtmlService.createTemplate(
      `<div class="row">
    <div class="col s10 card-panel amber push-s1 push-m1 push-l1">
    <div class="video-container" style="clear: both">
    <div class="col s12 receipt deep-purple darken-1">
    <iframe 
      class="z-depth-5 card-panel deep-purple darken-1 scale-transition scale-out scale-in btn-large" 
      src="${url}" 
      width="100%"
      height="100%"
      allow="autoplay"
      allow="encrypted-media"
      title="Dontime Life Website"
      frameborder="0"
      allowfullscreen
      ></iframe>
    </div></div></div></div>`,
    )
      .evaluate()
      .getContent();
  } else {
    return dtlsMain(formName);
  }
}

function dtlsCalculator(e) {
  var username = e;
  const data = needUtility(
    randomSubstance(0, 2, ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]),
  )[0];
  const rndNumData = Math.floor(
    Math.random() * Math.floor(data?.playlistArr.length),
  );
  if (!username) {
    var percent = data?.rndTitle;
  } else {
    var percent = username;
  }
  if (typeof username === "undefined") {
    var form = formMaker(data?.rndTitle);
    form
      .setTitle(data?.rndTitle)
      .setConfirmationMessage("Thanks for your feedback !!");
  } else {
    var form = formMaker(username);
    fileManager(username, "Forms");
    form
      .setTitle(username)
      .setConfirmationMessage("Thanks for your feedback !!");
  }
  var list = [];
  if (0 < percent) {
    for (var i = 0; 0 < percent; i++) {
      var result =
        JSON.stringify(i) * percent - Math.floor(JSON.stringify(i) * percent);
      if (result === 0) {
        list.push([
          JSON.stringify(i) * percent +
            " " +
            "out of" +
            " " +
            JSON.stringify(i) +
            " " +
            "odds",
        ]);
        if (JSON.stringify(i) >= 10) {
          break;
        }
      }
    }
  } else {
    list.push([percent]).toString();
  }
  const breakUrl =
    "https://script.google.com/macros/s/AKfycbzhrxdXzM08AAwA5ualRXdnDtV6C_xQ7bcq4v6H0HNdBqPr2C8A1URyWN0FLLccQuoA/exec?func=dtlsCalculator&args=";
  const vegasUrl =
    "https://script.google.com/macros/s/AKfycbzhrxdXzM08AAwA5ualRXdnDtV6C_xQ7bcq4v6H0HNdBqPr2C8A1URyWN0FLLccQuoA/exec?func=dtlsVegas&args=";
  const today = new Date();
  const rule = today.toDateString() + " - " + today.toTimeString();
  form.addSectionHeaderItem().setTitle(rule);
  var videIdUrl = data?.playlistArr[rndNumData];
  var globalYoutubeUrl = "https://www.youtube.com/watch?v=";
  if (typeof data?.videoItem !== "undefined") {
    form
      .addVideoItem()
      .setAlignment(FormApp.Alignment.CENTER)
      .setWidth(360)
      .setVideoUrl(globalYoutubeUrl + videIdUrl)
      .setHelpText(globalYoutubeUrl + videIdUrl);
  }
  const htmlList = list
    .map(function (r) {
      var rndFormArray = needUtility(r[0])[0];
      var videoVegas = substanceVegas(null, 0, 11);
      var rndFormVideo =
        rndFormArray?.playlistArr[
          Math.floor(
            Math.random() * Math.floor(rndFormArray?.playlistArr.length),
          )
        ];
      return `${form
        .addSectionHeaderItem()
        .setTitle(r[0])
        .setHelpText(vegasUrl + globalYoutubeUrl + rndFormVideo)}\n\n\n\n`;
    })
    .toString()
    .replace(/,/g, "");
  const url = form.getPublishedUrl();
  // return geneFrame(url)
  const html = HtmlService.createTemplate(`
    <div class="row">
    <div class="col s10 l10 m10 card-panel push-s1 push-l1 push-m1">
    <div class="container row valign-wrapper"><?!= rule() ?></div>
    <div class="video-container grey" style="clear: both">
    <div class="col s10 l10 m10 receipt black darken-1">
    <iframe 
      class="z-depth-5 card-panel deep-purple darken-1 scale-transition scale-out scale-in btn-large" 
      src="${url}" 
      width="100%"
      height="100%"
      allow="autoplay"
      allow="encrypted-media"
      title="Dontime Life Website"
      frameborder="0"
      allowfullscreen
      ></iframe>
    </div></div></div></div></div>`);
  return html.evaluate().getContent();
} //:contentFile('uiAccess');

function dtlsEnvironment(e, time) {
  var dtlsUrl =
    "https://script.google.com/macros/s/AKfycbzhrxdXzM08AAwA5ualRXdnDtV6C_xQ7bcq4v6H0HNdBqPr2C8A1URyWN0FLLccQuoA/exec?func=videoPage&args=";
  var arrayMath = allInvestors(e, time);
  // var arrayMath = [`${randomSubstance(null,0,2*3)} ${randomSubstance(null,0,3*5)}`]
  var product =
    e ||
    arrayMath
      .toString()
      .split(" ")
      .sort((a, b) => a - b)[
      Math.floor(
        Math.random() * Math.floor(arrayMath.toString().split(" ").length),
      )
    ];
  // var e = "if and out business"
  if (e) {
    var boilerUrl = dtlsBridge(e, time);
    if (boilerUrl) {
      return boilerUrl;
    }
  }
  var isProduct = formsUrls(product);
  if (typeof isProduct !== "undefined") {
    var formUrl = FormApp.openByUrl(isProduct).getPublishedUrl();
    return HtmlService.createTemplate(
      `
    <div class="row">
    <div class="col s10 l10 m10 card-panel push-s1 push-l1 push-m1">
    <div class="container row valign-wrapper"><?!= rule() ?></div>
    <div class="video-container grey" style="clear: both">
    <div class="col s10 l10 m10 receipt black darken-1">
    <iframe 
      class="z-depth-5 card-panel deep-purple darken-1 scale-transition scale-out scale-in btn-large" 
      src=${formUrl}
      width="100%"
      height="100%"
      allow="autoplay"
      allow="encrypted-media"
      title="Dontime Life Website"
      frameborder="0"
      allowfullscreen
      ></iframe>
    </div></div></div></div>
      `,
    ).getRawContent();
  }
  var data = coUtility(product)[0];
  if (typeof data.rndTitle !== "undefined") {
    var test = productNamePartial(
      [data.rndTitle.replace(/,./g, "")].toString().split(" ")[
        Math.floor(
          Math.random() *
            Math.floor(
              [data.rndTitle.replace(/,./g, "")].toString().split(" ").length,
            ),
        )
      ],
    );
  }
  if (typeof test !== "undefined") {
    var test2 = productRegNo(test["eparegno"]);
    if ([test2].indexOf("companyinfo") !== -1) {
      var productCo = [];
      for (var i = 0, l = test2["companyinfo"].length; i < l; i++) {
        var isCompany = test2["companyinfo"][i]["name"];
        productCo.push(isCompany);
      }
      var uniqueCo = [];
      for (var i = 0, l = productCo.length; i < l; i++) {
        var epaCo = coUtility(productCo[i]);
        uniqueCo.push(epaCo);
      }
      var randomCik = uniqueCo[0];
      var coInfo = uniqueCo[0][0].rndTitle;
      var secReport = uniqueCo[0][0].secUrl;
      var stkTicker = uniqueCo[0][0].rndTicker;
      var watchV = uniqueCo[0][0].videoItem;
      var playVid = uniqueCo[0][0].videoItemUrl;
    } else {
      var coInfo = data.rndTitle;
      var secReport = data.secUrl;
      var stkTicker = data.rndTicker;
      var watchV = data.videoItem;
      var playVid = data.videoItemUrl;
    }
    if ([test2].indexOf("active_ingredients") !== -1) {
      var uniqueData = [];
      for (var i = 0, l = test2["active_ingredients"].length; i < l; i++) {
        var isIngredient = test2["active_ingredients"][i]["active_ing"];
        if (isIngredient) {
          var pIName = productIngName(isIngredient);
          if (typeof pIName !== "undefined") {
            uniqueData.push(pIName["items"] || pIName["first"] || pIName);
          }
        }
      }
      if (typeof uniqueData[0][0]["rndTitle"] === "undefined") {
        var uniqueDataArray = [];
        for (var i = 0, l = uniqueData.length; i < l; i++) {
          if (uniqueData[i].length !== 0) {
            uniqueData[i].map((item) => {
              uniqueDataArray.push(item);
            });
          }
        }
        const matches = [];
        uniqueDataArray
          .sort((a, b) => a - b)
          .filter((ac) => {
            if (
              JSON.stringify(ac["eparegnumber"])
                .toLowerCase()
                .includes(test2["eparegno"])
            )
              matches.push(ac);
          });
        var randomKey = Math.floor(Math.random() * Math.floor(matches.length)); // Math.floor(Math.random())
        var uniqueDataKey = [matches].entries().next().value;
        if (typeof uniqueDataKey[1].length !== 0) {
          var randomProduct = uniqueDataKey[1][randomKey]["productname"];
          var isProductOnDrive = formsUrls(randomProduct);
          if (typeof isProductOnDrive !== "undefined") {
            return dtlsMain(randomProduct);
          }
          var isDataKey = uniqueDataKey[1][randomKey];
          var randomIngredient = isDataKey["ingredientname"];
          var randomProductStatusDate = isDataKey["productstatusdate"];
          var randomProductNameStatus = isDataKey["productnamestatus"];
          var randomAlternateBrandName = isDataKey["alternatebrandname"];
          var randomPcCode = isDataKey["pccode"];
          var randomRegistrationStatus = isDataKey["registrationstatus"];
          var randomCasNumber = isDataKey["casnumber"];
          var randomEpaRegNum = isDataKey["eparegnumber"];
          var epaUrl =
            "https://ofmpub.epa.gov/sor_internet/registry/substreg/searchandretrieve/substancesearch/search.do?multipleEntriesSearch=&multipleKeys=" +
            randomCasNumber +
            "&onSRS=true&onChemResourceDir=true&substanceNameScope=beginswith";
        }
      }
    }
  } else {
    var coInfo = data.rndTitle;
    var secReport = data.secUrl;
    var stkTicker = data.rndTicker;
    var watchV = data.videoItem;
    var playVid = data.videoItemUrl;
  }
  var form = formMaker(coInfo);
  fileManager(coInfo, "Forms");
  form
    .addVideoItem()
    .setAlignment(FormApp.Alignment.CENTER)
    .setWidth(360)
    .setVideoUrl(playVid)
    .setHelpText(playVid);
  if (typeof randomProduct !== "undefined") {
    form
      .addSectionHeaderItem()
      .setTitle("Active Ingredient in " + randomProduct)
      .setHelpText(randomIngredient);
    form
      .addSectionHeaderItem()
      .setTitle("Alternate Brand Name(s) for " + randomProduct)
      .setHelpText(randomAlternateBrandName);
    form
      .addSectionHeaderItem()
      .setTitle("EPA Registration Number for " + randomProduct)
      .setHelpText(randomEpaRegNum);
    form
      .addSectionHeaderItem()
      .setTitle("Registration Status for " + randomProduct)
      .setHelpText(randomRegistrationStatus);
    form
      .addSectionHeaderItem()
      .setTitle("Name Status for " + randomProduct)
      .setHelpText(randomProductNameStatus);
    form
      .addSectionHeaderItem()
      .setTitle("Status Date for " + randomProduct)
      .setHelpText(randomProductStatusDate);
    form
      .addSectionHeaderItem()
      .setTitle("Pesticide Chemical Code for " + randomIngredient)
      .setHelpText(randomPcCode);
    form
      .addSectionHeaderItem()
      .setTitle("Chemical Number for " + randomIngredient)
      .setHelpText(epaUrl);
  }
  form
    .addSectionHeaderItem()
    .setTitle("Company Info")
    .setHelpText(dtlsUrl + encodeURIComponent(coInfo));
  if (typeof secReport !== "undefined") {
    form.addSectionHeaderItem().setTitle(stkTicker).setHelpText(secReport);
    form.addTextItem().setTitle("Industry").setRequired(true);
    form
      .addParagraphTextItem()
      .setTitle("Industry/Market Corrections")
      .setRequired(false);
    form.addParagraphTextItem().setTitle("News").setRequired(false);
    form
      .addParagraphTextItem()
      .setTitle("Economic/Business Cycles")
      .setRequired(false);
    form.addTextItem().setTitle("Stock Price").setRequired(true);
    form.addTextItem().setTitle("Outstanding Shares").setRequired(true);
    form.addTextItem().setTitle("Quarterly Earnings").setRequired(true);
    form.addTextItem().setTitle("Annualized Net Income").setRequired(false);
    form.addTextItem().setTitle("Total Equity").setRequired(false);
    form.addTextItem().setTitle("Retained Earnings").setRequired(false);
    form
      .addTextItem()
      .setTitle("Cash & Marketable Securities")
      .setRequired(true);
    form.addTextItem().setTitle("Accounts Receivable").setRequired(true);
    form.addTextItem().setTitle("Inventories").setRequired(true);
    form.addTextItem().setTitle("Long-term Investments").setRequired(false);
    form.addTextItem().setTitle("Net PP&E").setRequired(false);
    form
      .addTextItem()
      .setTitle("Current Financial Liabilities")
      .setRequired(true);
    form
      .addTextItem()
      .setTitle("Long-term Interest-bearing Debts")
      .setRequired(false);
    form
      .addTextItem()
      .setTitle("Current Year Total Earnings")
      .setRequired(false);
    form.addTextItem().setTitle("Base Year Total Earnings").setRequired(false);
  }
  form.addTextItem().setTitle("Your Name").setRequired(true);
  form.addDateItem().setTitle("Birth Date").setRequired(true);
  form.addParagraphTextItem().setTitle("Your Message").setRequired(true);
  form.setTitle(coInfo).setConfirmationMessage("Thanks for your feedback !!");
  var url = form.getPublishedUrl();
  return url;
  // return HtmlService.createTemplate(
  //   `<div class="row">
  //   <div class="col s10 card-panel amber push-s1 push-m1 push-l1">
  //   <div class="video-container" style="clear: both">
  //   <div class="col s12 receipt deep-purple darken-1">
  //   <iframe
  //     class="z-depth-5 card-panel deep-purple darken-1 scale-transition scale-out scale-in btn-large"
  //     src="${url}"
  //     width="100%"
  //     height="100%"
  //     allow="autoplay"
  //     allow="encrypted-media"
  //     title="Dontime Life Website"
  //     frameborder="0"
  //     allowfullscreen
  //     ></iframe>
  //   </div></div></div></div>`).evaluate().getContent()
}

function dtlsInvestor(coKey, time) {
  var coData = coUtility(coKey)[0];
  if (coData) {
    var coDataName = coData.rndTitle;
    try {
      dtlsMain(coDataName);
    } catch {
      console.log(coDataName + " does not exist yet!");
    }
  }
  if (typeof coData.rndTicker !== "undefined") {
    // var form = formMaker();
    var urlTicker = "https://www.nasdaq.com/search?q=" + coData.rndTicker;
    var form = formMaker(
      [coData.rndTitle].join("").toUpperCase(),
      "Forms",
      time,
    );

    if (typeof form === "object") {
      // fileManager(coData.rndTitle, "Forms")
      form
        .addSectionHeaderItem()
        .setTitle(urlTicker)
        .setHelpText(coData.secUrl);
      form.addTextItem().setTitle("Industry").setRequired(true);
      form.addTextItem().setTitle("Sector").setRequired(true);
      form
        .addParagraphTextItem()
        .setTitle("Industry/Market Corrections")
        .setRequired(false);
      form.addParagraphTextItem().setTitle("News").setRequired(false);
      form
        .addParagraphTextItem()
        .setTitle("Economic/Business Cycles")
        .setRequired(false);
      form.addTextItem().setTitle("Stock Price").setRequired(true);
      form.addTextItem().setTitle("Outstanding Shares").setRequired(true);
      form.addTextItem().setTitle("Quarterly Earnings").setRequired(true);
      form.addTextItem().setTitle("Annualized Net Income").setRequired(false);
      form.addTextItem().setTitle("Total Equity").setRequired(false);
      form.addTextItem().setTitle("Retained Earnings").setRequired(false);
      form
        .addTextItem()
        .setTitle("Cash & Marketable Securities")
        .setRequired(true);
      form.addTextItem().setTitle("Accounts Receivable").setRequired(true);
      form.addTextItem().setTitle("Inventories").setRequired(true);
      form.addTextItem().setTitle("Long-term Investments").setRequired(false);
      form.addTextItem().setTitle("Net PP&E").setRequired(false);
      form
        .addTextItem()
        .setTitle("Current Financial Liabilities")
        .setRequired(true);
      form
        .addTextItem()
        .setTitle("Long-term Interest-bearing Debts")
        .setRequired(false);
      form
        .addTextItem()
        .setTitle("Current Year Total Earnings")
        .setRequired(false);
      form
        .addTextItem()
        .setTitle("Base Year Total Earnings")
        .setRequired(false);
      form.addTextItem().setTitle("Your Name").setRequired(true);
      form.addDateItem().setTitle("Birth Date").setRequired(true);
      form.addParagraphTextItem().setTitle("Your Message").setRequired(true);
      form
        .setTitle(coData.rndTitle)
        .setConfirmationMessage("Thanks for your feedback !!");
      var url = form.getPublishedUrl();
      return url;
      // return HtmlService.createTemplate(
      // <div class="row">
      // <div class="col s10 card-panel amber push-s1 push-m1 push-l1">
      // <div class="video-container" style="clear: both">
      // <div class="col s12 receipt deep-purple darken-1">
      // <iframe
      //   class="z-depth-5 card-panel deep-purple darken-1 scale-transition scale-out scale-in btn-large"
      //   src="${url}"
      //   width="100%"
      //   height="100%"
      //   allow="autoplay"
      //   allow="encrypted-media"
      //   title="Dontime Life Website"
      //   frameborder="0"
      //   allowfullscreen
      //   ></iframe>
      // </div></div></div></div>
      // ).evaluate().getContent()
    }
  } else {
    return dtlsEnvironment(coData.rndTitle);
  }
}

function dtlsResearchForm(topic) {
  var cokey;
  topic
    ? (cokey = topic)
    : (cokey = objectOfS(
        ["parameter"],
        [[["func", arguments.callee.name]]],
        functionRegistry.time,
      ).parameter["func"]);
  console.log(
    functionRegistry.time +
      "\n" +
      arguments.callee.name +
      "\n!" +
      topic +
      ", = " +
      topic,
  );
  var tri = trial();
  var form = FormApp.create(cokey).setDescription(" Research " + tri.length);
  if (typeof form === "object") {
    var formUrl = form.getPublishedUrl();
    tri.map((seo) => {
      for (var key in seo) {
        if (key === "heads") {
          form
            .addParagraphTextItem()
            .setTitle(randomSubstance(0, 1, [key]).myNewArr);
        } else {
          form
            .addParagraphTextItem()
            .setTitle(randomSubstance(0, 1, [key]).myNewArr);
        }
      }
    });
    form.setCollectEmail(true);
    return formUrl;
  }
}

function dtlsSomeFunction(e) {
  var time = functionRegistry.time;
  var importedData = globalThis.arrD();
  var funcStr = randomSubstance(0, 4, importedData).myNewArr;
  var uniqueKey = [funcStr];
  var uniqueCoObjects = covObjects(uniqueKey, ["allTime"]);
  var rndCoObjects =
    uniqueCoObjects[
      Math.floor(Math.random() * Math.floor(uniqueCoObjects.length))
    ];
  var uniqueCoArray = covArrays(rndCoObjects);
  var rndCoArray =
    uniqueCoArray[Math.floor(Math.random() * Math.floor(uniqueCoArray.length))];
  var cokey = e || rndCoArray;
  var isProduct = formsUrls([cokey].join("").toLowerCase(), "videoForms");
  console.log(typeof isProduct);
  if (typeof isProduct === "string") {
    var formUrl = FormApp.openByUrl(isProduct).getPublishedUrl();
    return formUrl;
  }

  //Youtube Widget
  var seoArray = seoPastTime([cokey].join(""), time);
  if (seoArray) {
    var idArray = seoArray.playList;
    var covIdArray = covArrays(idArray);
  }
  // console.log(covIdArray[0][0].map((e)=>{return e[0]}))
  var form = formMaker([cokey].join("").toUpperCase(), "videoForms", time);
  var formUrl = form.getPublishedUrl();
  form.setCollectEmail(true);
  if (seoArray) {
    if (typeof form === "object") {
      covIdArray.map((d) => {
        while (d) {
          var elapsedTime = functionRegistry.time;
          var timeToExecute = functionRegistry.timeLeftToExecute;
          form.addPageBreakItem().setTitle([cokey].join(""));
          form
            .addSectionHeaderItem()
            .setTitle("https://youtube.com/watch?v=" + d[0]);
          if (d) {
            try {
              form
                .addVideoItem()
                .setAlignment(FormApp.Alignment.CENTER)
                .setWidth(612)
                .setVideoUrl("https://youtube.com/watch?v=" + d[0]);
            } catch {
              console.warn("Video could not be enbedded");
            }
          }
          if (
            timeToExecute <= 6 * 60 * 1000 &&
            timeToExecute >= 5.98 * 60 * 1000
          ) {
            console.log("Time limit six minutes");
          }
          if (
            timeToExecute <= 5 * 60 * 1000 &&
            timeToExecute >= 4.98 * 60 * 1000
          ) {
            console.log("Time limit five minutes");
          }
          if (
            timeToExecute <= 4 * 60 * 1000 &&
            timeToExecute >= 3.98 * 60 * 1000
          ) {
            console.log("Time limit four minutes");
          }
          if (
            timeToExecute <= 3 * 60 * 1000 &&
            timeToExecute >= 2.98 * 60 * 1000
          ) {
            console.log("Time limit three minutes");
          }
          if (
            timeToExecute <= 2 * 60 * 1000 &&
            timeToExecute >= 1.98 * 60 * 1000
          ) {
            console.log("Time limit two minutes");
          }
          if (
            timeToExecute <= 1 * 60 * 1000 &&
            timeToExecute >= 0.98 * 60 * 1000
          ) {
            console.log("Time limit one minute");
          }
          if (timeToExecute <= 0.1 * 60 * 1000) {
            console.log(timeToExecute.valueOf());
            break;
          }
          return;
        }
        return;
      });
    }
  }
  return { playList: covIdArray, content: formUrl };
}

function dtlsStore(itemName, time) {
  // if (typeof itemName === "undefined") {
  //   var itemName = "water"
  // }
  if (itemName) {
    var boilerUrl = dtlsBridge(itemName, time);
    if (boilerUrl) {
      return boilerUrl;
    }
  }
  var isProduct = formsUrls(
    [itemName]?.join("").toLowerCase(),
    "inventoryForms",
  );
  console.log(typeof isProduct);
  if (typeof isProduct === "string" && isProduct !== "undefined") {
    var formUrl = FormApp.openByUrl(isProduct).getPublishedUrl();
    return formUrl;
  }
  var time = start;
  var form = formMaker(
    [itemName]?.join("").toUpperCase(),
    "inventoryForms",
    time,
  );
  var formUrl = form.getPublishedUrl();
  var jo = storeFunction();
  var joItemCount = [];
  jo.map((c) => {
    var joXItem = c["Description"];
    if (
      [joXItem]
        .join("")
        .toLowerCase()
        .includes([itemName].join("").toLowerCase())
    ) {
      joItemCount.push(c);
    }
  });
  if (joItemCount.length > 1 || joItemCount.length < 1) {
    form
      .setTitle(joItemCount.length + " Items")
      .setConfirmationMessage("Thanks for your feedback !!");
  } else {
    form
      .setTitle(joItemCount.length + " Item")
      .setConfirmationMessage("Thanks for your feedback !!");
  }
  var coTable = joItemCount
    .map((r) => {
      form.addPageBreakItem().setTitle(r["Description"]);
      form
        .addSectionHeaderItem()
        .setTitle("Quantity: " + r["QTY"] + " set of " + r["Pack Size"]);
      form.addSectionHeaderItem().setTitle("Price: " + r["TOTAL COST"]);
      form
        .addSectionHeaderItem()
        .setTitle("Cost Per Piece: " + r["COST PER PIECE"]) + "\n\n\n\n\n\n";
    })
    .toString()
    .replace(/,/g, "");
  return formUrl;
  var result = JSON.stringify(coTable);
  baseUrl = getUrl(ScriptApp);
  inventoryUrl = getUrl(ScriptApp);
  financeUrl = getUrl(ScriptApp);
  var itemContent = contentApp(
    `<div class="row">
        <div class="col s10 card-panel l12 m12 push-s1">
          <div class="z-depth-5 green toolbar_icon toolbar_iconHover container">
            <div class="col s12 l12 m12">
              <div class="black" id="seoData">
                <div class="row">
                  <div class="col s10 l10 m10 card-panel push-s1 push-l1 push-m1">
                    <div class="container row valign-wrapper"><?!= rule() ?></div>
                      <div class="video-container grey" style="clear: both">
                        <div class="col s10 l10 m10 receipt black darken-1">
                          <iframe 
                            class="z-depth-5 card-panel deep-purple darken-1 scale-transition scale-out scale-in btn-large" 
                            src=<fileUrl 
                            id="busRes"
                            width="100%"
                            height="100%"
                            allow="autoplay"
                            allow="encrypted-media"
                            title="Dontime Life Website"
                            frameborder="0"
                            allowfullscreen
                            ></iframe>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col s10 card-panel l12 m12 push-s1">
                    <div class="z-depth-5 grey toolbar_icon toolbar_iconHover container">
                      <div class="col s12 l12 m12">
                        <input style="font-size:18pt;color:green" placeholder="research" class="timepicker flow-text menu-img z-depth-5 card-panel black scale-transition scale-out scale-in receipt btn-large" id="busSearch"  type="search" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>`,
    {
      item: itemName || "SHOPPING LIST",
      fileUrl: formUrl,
      allTime: time,
    },
  );
  return itemContent;
}

function dtlsTv() {
  var randomSECCo = needUtility(randomSubstance(null, 0, 7))[0];
  var myVid = randomSECCo?.rndTitle;
  var infoLink = seoSheet(myVid)?.keyWords;
  var pageArray = [];
  infoLink.map((tv) => {
    var plaListNum = Math.floor(Math.random() * Math.floor(tv.length));
    var rndListItem = tv[plaListNum];
    pageArray.push(rndListItem);
  });
  var story =
    pageArray[Math.floor(Math.random() * Math.floor(pageArray.length))];
  dtlsVegas(story);
}

function dtlsVegas(rndId) {
  if (typeof rndId === "undefined") {
    var rndId = "Converse Chuck Taylor All Star Low Top";
  }
  console.log("dtlsVegas:\ncalling seoSheet(" + rndId + ").keyWords");
  var rndTKey = seoSheet(rndId)?.keyWords;
  return console.log(convertToJS(rndTKey));
  var keyNum = Math.floor(Math.random() * Math.floor(rndTKey.length));
  var ndT = rndTKey[keyNum].replace(/"'/g, "");
  var ndTNum = Math.floor(Math.random() * Math.floor(ndT.length));
  var util = ndT[ndTNum];
  var ndtUtil = needUtility(util)[0];
  return console.log(ndtUtil);
  var ndTArray = ndtUtil?.playlistArr;
  var form = formMaker([rndId].join("").toUpperCase(), "Forms");
  if (typeof form === "string") {
    var formUrl = FormApp.openByUrl(form).getPublishedUrl();
  } else {
    // fileManager([rndId].join("").toUpperCase(), "Forms")
    var rndVid =
      ndTArray[Math.floor(Math.random() * Math.floor(ndTArray.length))];
    form
      .addVideoItem()
      .setAlignment(FormApp.Alignment.CENTER)
      .setWidth(612)
      .setVideoUrl(rndVid);
    form.addPageBreakItem().setTitle(rndVid);
    var formUrl = form.getPublishedUrl();
  }
  var result = JSON.stringify(ndtUtil?.rndTitle);
  var html = HtmlService.createTemplate(
    `<html>
      <body>
        <div class="row">
        <div class="col s10 card-panel amber push-s1 push-m1 push-l1">
        <div class="container" style="clear: both">
        <div class="col s12 receipt deep-purple darken-1">
        <div id="vegas">${result}</div>          
        </div></div></div></div>
        <div class="row">
        <div class="col s10 card-panel amber push-s1 push-m1 push-l1">
        <div class="video-container" style="clear: both">
        <div class="col s12 receipt deep-purple darken-1">
        <iframe 
          class="z-depth-5 card-panel deep-purple darken-1 scale-transition scale-out scale-in btn-large" 
          src="${formUrl}" 
          width="100%"
          height="100%"
          allow="autoplay"
          allow="encrypted-media"
          title="Dontime Life Website"
          frameborder="0"
          allowfullscreen
          ></iframe>
        </div></div></div></div>
      </body>
    </html>`,
  );
  // html.result = ndtUtil.rndTitle
  return html.getRawContent();
}

function filetypeBing(e) {
  var time = start;
  // var namedVar = "pred"
  var arrData = coSort(time).ticker;
  var utilNeed = randomUtility(e, arrData);
  var cokey = e || utilNeed;
  var isProduct = formsUrls([cokey].join("").toLowerCase(), "docForms");
  console.log(typeof isProduct);
  if (typeof isProduct === "string") {
    var formUrl = FormApp.openByUrl(isProduct).getPublishedUrl();
    return formUrl;
  }
  // var utiStr = skyNeed(cokey, time)
  // var utiSeo = pastSeo(utiStr, time)
  var uti = bingSWF([cokey].join(""));
  var form = formMaker([cokey].join("").toUpperCase(), "docForms", time);
  if (typeof form === "object") {
    // fileManager(form.getId(), "docForms", time)

    form.addTextItem().setTitle("Your Name").setRequired(true);
    form.addDateItem().setTitle("Birth Date").setRequired(true);
    form.addParagraphTextItem().setTitle("Your Message").setRequired(true);
    form.setCollectEmail(true);
    uti.map((piece) => {
      while (piece) {
        if (piece) {
          if (piece.indexOf("https://") > -1) {
            var elaspeTime = new Date() - time;
            var timeToExecute = functionRegistry.maxTime - elaspeTime;
            // console.log("piece: " + piece + "\nelaspeTime: " + elaspeTime)
            form.addPageBreakItem().setTitle([cokey].join(""));
            form.addSectionHeaderItem().setTitle(piece);
            if (
              timeToExecute <= 6 * 60 * 1000 &&
              timeToExecute >= 5.98 * 60 * 1000
            ) {
              console.log(
                "that function: " +
                  arguments.callee.caller.name +
                  "\nthis function: " +
                  arguments.callee.name +
                  "\nTime limit six minutes",
              );
            }
            if (
              timeToExecute <= 5 * 60 * 1000 &&
              timeToExecute >= 4.98 * 60 * 1000
            ) {
              // console.log("that function: " + arguments.callee.caller.name + "\nthis function: " + arguments.callee.name + "\nTime limit five minutes")
            }
            if (
              timeToExecute <= 4 * 60 * 1000 &&
              timeToExecute >= 3.98 * 60 * 1000
            ) {
              // console.log("that function: " + arguments.callee.caller.name + "\nthis function: " + arguments.callee.name + "\nTime limit four minutes")
            }
            if (
              timeToExecute <= 3 * 60 * 1000 &&
              timeToExecute >= 2.98 * 60 * 1000
            ) {
              // console.log("that function: " + arguments.callee.caller.name + "\nthis function: " + arguments.callee.name + "\nTime limit three minutes")
            }
            if (
              timeToExecute <= 2 * 60 * 1000 &&
              timeToExecute >= 1.98 * 60 * 1000
            ) {
              // console.log("that function: " + arguments.callee.caller.name + "\nthis function: " + arguments.callee.name + "\nTime limit two minutes")
            }
            if (
              timeToExecute <= 1 * 60 * 1000 &&
              timeToExecute >= 0.98 * 60 * 1000
            ) {
              // console.log("that function: " + arguments.callee.caller.name + "\nthis function: " + arguments.callee.name + "\nTime limit one minute")
            }
            if (timeToExecute <= 0.05 * 60 * 1000) {
              console.log(
                "piece: " +
                  piece[0] +
                  "\ntimeToExecute: " +
                  timeToExecute.valueOf(),
              );
              return;
            }
            return piece[0];
          }
        }
        return;
      }
    });
    var formUrl = form.getPublishedUrl();
    return formUrl;
  }
  var rndUti = uti[randNum(uti)];
  return [cokey].join("");
}

function generalWorkInvoice(clientName, time) {
  // var clientName = "iforce maxx"
  if (clientName) {
    var boilerUrl = dtlsBridge(clientName, time);
    if (boilerUrl) {
      return boilerUrl;
    }
  }
  var isProduct = formsUrls([clientName].join("").toLowerCase(), "Forms");
  console.log(typeof isProduct);
  if (typeof isProduct === "string" && isProduct !== "undefined") {
    console.log(isProduct);
    var formUrl = FormApp.openByUrl(isProduct).getPublishedUrl();
    return formUrl;
  }
  var time = start;
  var arrData = allInvestors(clientName, time);
  var cokey = arrData.title;
  var yahooNeed = arrData.ticker;
  var coHelpText = arrData.edgarUrl;
  if (
    [cokey].join().toLowerCase().includes([clientName].join().toLowerCase())
  ) {
    isProduct = formsUrls([cokey].join("").toLowerCase(), "Forms");
    console.log(typeof isProduct);
    if (typeof isProduct === "string" && isProduct !== "undefined") {
      console.log(isProduct);
      var formUrl = FormApp.openByUrl(isProduct).getPublishedUrl();
      return formUrl;
    }
    return HtmlService.createTemplate(
      contentApp(
        `
      <?  var clientBusName = busName ?>
      <?  var dtlsUrl =  portBing(clientBusName); ?>
      <?  var form = formMaker([clientBusName].join("").toUpperCase(), "Forms", timeNow);  ?>
      <?   if (typeof form === "object"){ ?>
      <?  console.log("form object " + form.getPublishedUrl()) ?>
      <?  var formUrl = form.getPublishedUrl(); ?>
      <?  form.setCollectEmail(true); ?>
      <?  form.setAllowResponseEdits(true); ?>
      <?  form.addSectionHeaderItem().setTitle; ?>
      <?  form.addDateItem().setTitle('Invoice Date').setRequired(true); ?>
      <?  form.addTextItem().setTitle("Pickup Address ").setRequired(false) ?>
      <?  form.addTextItem().setTitle("Car ").setRequired(true); ?>
      <?  form.addTextItem().setTitle("Vin/STK # ").setRequired(true) ?>
      <?  form.addTextItem().setTitle("Gas ").setRequired(true) ?>
      <?  form.addTextItem().setTitle("Company Address ").setRequired(true) ?>
      <?  form.addTextItem().setTitle("Delivery/Pick-up/Chase-car ").setRequired(true) ?>
      <?  form.addTextItem().setTitle("Hours").setRequired(false) ?>
      <?  form.addTextItem().setTitle("Labor ").setRequired(true) ?>
      <?  form.addTextItem().setTitle("Total ").setRequired(false) ?>
      <?  form.addSectionHeaderItem().setTitle("Company Info").setHelpText(dtlsUrl); ?>
      <?  if (typeof clientTicker !== "undefined") { ?>
      <?  form.addSectionHeaderItem().setTitle(clientTicker).setHelpText(clientFile); ?>
      <?  form.addTextItem().setTitle("Industry").setRequired(true); ?>
      <?  form.addTextItem().setTitle("Sector").setRequired(true); ?>
      <?  form.addParagraphTextItem().setTitle("Industry/Market Corrections").setRequired(false); ?>
      <?  form.addParagraphTextItem().setTitle("News").setRequired(false); ?>
      <?  form.addParagraphTextItem().setTitle("Economic/Business Cycles").setRequired(false); ?>
      <?  form.addTextItem().setTitle("Stock Price").setRequired(true); ?>
      <?  form.addTextItem().setTitle("Outstanding Shares").setRequired(true); ?>
      <?  form.addTextItem().setTitle("Quarterly Earnings").setRequired(true); ?>
      <?  form.addTextItem().setTitle("Annualized Net Income").setRequired(false); ?>
      <?  form.addTextItem().setTitle("Total Equity").setRequired(false); ?>
      <?  form.addTextItem().setTitle("Retained Earnings").setRequired(false); ?>
      <?  form.addTextItem().setTitle("Cash & Marketable Securities").setRequired(true); ?>
      <?  form.addTextItem().setTitle("Accounts Receivable").setRequired(true); ?>
      <?  form.addTextItem().setTitle("Inventories").setRequired(true); ?>
      <?  form.addTextItem().setTitle("Long-term Investments").setRequired(false); ?>
      <?  form.addTextItem().setTitle("Net PP&E").setRequired(false); ?>
      <?  form.addTextItem().setTitle("Current Financial Liabilities").setRequired(true); ?>
      <?  form.addTextItem().setTitle("Long-term Interest-bearing Debts").setRequired(false); ?>
      <?  form.addTextItem().setTitle("Current Year Total Earnings").setRequired(false); ?>
      <?  form.addTextItem().setTitle("Base Year Total Earnings").setRequired(false);} ?>
      <?  form.addTextItem().setTitle('Your Name').setRequired(true); ?>
      <?  form.addTextItem().setTitle('Your Address').setRequired(true); ?>
      <?  form.addTextItem().setTitle('Your Phone Number').setRequired(true); ?>
      <?  form.addParagraphTextItem().setTitle('Your Message').setRequired(true); ?>
      <?  form.addGridItem().setTitle('Track').setRows(["Status"]).setColumns(["Queued", "Pending", "Settled"]).setRequired(true); ?>
      <?  form.setTitle(clientBusName.toUpperCase()).setConfirmationMessage('Thanks for your feedback !!')}; ?>
      <div class="row">
      <div class="col s12 l12 m12 card-panel">
      <div class="container row valign-wrapper"><?!= rule() ?></div>
      <div class="video-container grey" style="clear: both">
      <div class="col s12 l12 m12 receipt black darken-1">
      <iframe 
        class="z-depth-5 card-panel deep-purple darken-1 scale-transition scale-out scale-in btn-large" 
        src="${formUrl}" 
        width="100%"
        height="100%"
        allow="autoplay"
        allow="encrypted-media"
        title="Dontime Life Website"
        frameborder="0"
        allowfullscreen
        ></iframe>
      </div></div></div></div>`,
        {
          client: clientName,
          timeNow: time,
          busName: cokey,
          clientTicker: yahooNeed,
          clientFile: coHelpText,
        },
      ),
    )
      .evaluate()
      .getContent();
  } else {
    return HtmlService.createTemplate(
      contentApp(
        `
    <?  var clientBusName = busName ?>
    <?  var dtlsUrl =  portBing(clientBusName); ?>
    <?  var form = formMaker([clientBusName].join("").toUpperCase(), "Forms", timeNow);  ?>
    <?   if (typeof form === "object"){ ?>
    <?  console.log("form object " + form.getPublishedUrl()) ?>
    <?  var formUrl = form.getPublishedUrl(); ?>
    <?  form.setCollectEmail(true); ?>
    <?  form.setAllowResponseEdits(true); ?>
    <?  form.addSectionHeaderItem().setTitle; ?>
    <?  form.addDateItem().setTitle('Invoice Date').setRequired(true); ?>
    <?  form.addTextItem().setTitle("Pickup Address ").setRequired(false) ?>
    <?  form.addTextItem().setTitle("Car ").setRequired(true); ?>
    <?  form.addTextItem().setTitle("Vin/STK # ").setRequired(true) ?>
    <?  form.addTextItem().setTitle("Gas ").setRequired(true) ?>
    <?  form.addTextItem().setTitle("Customer Address ").setRequired(true) ?>
    <?  form.addTextItem().setTitle("Delivery/Pick-up/Chase-car ").setRequired(true) ?>
    <?  form.addTextItem().setTitle("Hours").setRequired(false) ?>
    <?  form.addTextItem().setTitle("Labor ").setRequired(true) ?>
    <?  form.addTextItem().setTitle("Total ").setRequired(false) ?>
    <?  if (dtlsUrl.length === 99){form.addSectionHeaderItem().setTitle("Customer Info").setHelpText(dtlsUrl);} ?>
    <?  form.addTextItem().setTitle('Your Name').setRequired(true); ?>
    <?  form.addTextItem().setTitle('Your Address').setRequired(true); ?>
    <?  form.addTextItem().setTitle('Your Phone Number').setRequired(true); ?>
    <?  form.addParagraphTextItem().setTitle('Your Message').setRequired(true); ?>
      <?  form.addGridItem().setTitle('Track').setRows(["Status"]).setColumns(["Queued", "Pending", "Settled"]).setRequired(true); ?>
    <?  form.setTitle(clientBusName.toUpperCase()).setConfirmationMessage('Thanks for your feedback !!')}; ?>
    <div class="row">
    <div class="col s12 l12 m12 card-panel">
    <div class="container row valign-wrapper"><?!= rule() ?></div>
    <div class="video-container grey" style="clear: both">
    <div class="col s12 l12 m12 receipt black darken-1">
    <iframe 
      class="z-depth-5 card-panel deep-purple darken-1 scale-transition scale-out scale-in btn-large" 
      src="${formUrl}" 
      width="100%"
      height="100%"
      allow="autoplay"
      allow="encrypted-media"
      title="Dontime Life Website"
      frameborder="0"
      allowfullscreen
      ></iframe>
    </div></div></div></div>`,
        {
          client: clientName,
          timeNow: time,
          busName: clientName,
          clientTicker: yahooNeed,
          clientFile: coHelpText,
        },
      ),
    )
      .evaluate()
      .getContent();
  }
}

var overFlow = function () {
  `    <?  var liveForm = FormApp.openById(form.getId()) ?>
    <?  var formResponses = liveForm.getResponses() ?>
    <?  for (var i = 0; i < formResponses.length; i++) { ?>
    <?  var formResponse = formResponses[i]; ?>
    <?  var itemResponses = formResponse.getItemResponses(); ?>
    <?  for (var j = 0; j < itemResponses.length; j++) { ?>
      <?  var itemResponse = itemResponses[j]; ?>
      <?  console.log('Response #%s to the question "%s" was "%s"', 
        (i + 1).toString(), 
        itemResponse.getItem().getTitle(), 
          itemResponse.getResponse()); ?>
    <?  }} ?>
      <? var liveForm = FormApp.openById(form.getId()) ?>
      <? var formResponses = liveForm.getResponses() ?>
      <? for (var i = 0; i < formResponses.length; i++) { ?>
      <? var formResponse = formResponses[i]; ?>
      <? var itemResponses = formResponse.getItemResponses(); ?>
      <? for (var j = 0; j < itemResponses.length; j++) { ?>
        <? var itemResponse = itemResponses[j]; ?>
        <? console.log('Response #%s to the question "%s" was "%s"', 
          (i + 1).toString(), 
          itemResponse.getItem().getTitle(), 
            itemResponse.getResponse()); ?>
      <? }} ?>
`;
};

function geneFrame(reference) {
  if (typeof reference === "undefined") {
    var reference = functionRegistry.htmlFile;
  }
  return HtmlService.createTemplate(
    contentApp(
      `
    <? var rndClient = function() { ?>
    <?  return new Promise((resolve) => {resolve(formMaker(file, folder, time))})} ?>
    <? var clientRes = rndClient()
    .then((resu) => {return resu})
    .catch((err) => {console.log(err)}) ?>
    <? var form = FormApp.openByUrl(JSON.stringify(formMaker(file, folder, time))) ?>
    <? var vidId = coUtility(file)[0].playlistArr ?>
    <? if (vidId.length > 0) { ?>
       <? vidId.map((id) => { ?>
        <? return form.addVideoItem().setAlignment(FormApp.Alignment.CENTER).setWidth(612).setVideoUrl("https://youtube.com/watch?v=" + id)})} ?>
    <? var formUrl = form.getPublishedUrl() ?>
    <div class="row">
    <div class="col s10 card-panel amber push-s1 push-m1 push-l1">
    <div class="container" style="clear: both">
    <div class="col s12 receipt deep-purple darken-1">
    <div id="vegas"></div>          
    </div></div></div></div>
    <div class="row">
    <div class="col s10 l10 m10 card-panel push-s1 push-l1 push-m1">
    <div class="container row valign-wrapper"><?!= rule() ?></div>
    <div class="video-container grey" style="clear: both">
    <div class="col s10 l10 m10 receipt black darken-1">
    <iframe 
      class="z-depth-5 card-panel deep-purple darken-1 scale-transition scale-out scale-in btn-large" 
      src=<?= formUrl  ?>
      width="100%"
      height="100%"
      allow="autoplay"
      allow="encrypted-media"
      title="Dontime Life Website"
      frameborder="0"
      allowfullscreen
      ></iframe>
    </div></div></div></div>
    <script>
      function serverside(func, args) {
        return new Promise((resolve, reject) => {
          google.script.run
            .withSuccessHandler((result) => {
              console.log("Success handling:", result);
              resolve(result);
            })
            .withFailureHandler((error) => {
              console.error("Error handling:", error);
              alert("An error occurred: " + error.message);
              reject(error);
            })
            .runBoilerplate(func, args);
        });
      }
      document.addEventListener("DOMContentLoaded", lasVegas)
      function lasVegas() {
        var argo = <?= file ?>
        serverside("formsUrls", [argo,"videoForms"]).then((gen) => {
          document.getElementById("vegas").innerHTML = JSON.stringify(gen)
        })
      }
    </script>`,
      {
        file: reference,
        time: functionRegistry.time,
        folder: furtFolder(),
      },
    ),
  );
}

function mainMan(mainFile) {
  if (mainFile) {
    // var mainFile = "wild"
    var stringSplit = mainFile.split(" ");
    var lowerCaseS = [];
    testData([stringSplit])?.map((increase) => {
      if (lowerCaseS.indexOf(increase) === -1) {
        lowerCaseS.push(increase);
      }
    });
    for (var i = 0, l = lowerCaseS.length; i < l; i++) {
      if (typeof lowerCaseS[i] !== "undefined") {
        var fileX = searchDataTree(mainFile);
      }
    }
    if (fileX) {
      var appType = fileX.split("/");
      if (appType.indexOf("spreadsheets") === -1) {
        var url = FormApp.openByUrl(fileX).getPublishedUrl();
      }
    }
    return HtmlService.createTemplate(
      contentApp(
        `
      <div class="row">
      <div class="col s10 l12 m12 card-panel push-s1">
      <div class="container row valign-wrapper"><?!= rule() ?></div>
      <div class="video-container grey" style="clear: both">
      <div class="col s12 l12 m12 receipt black darken-1">
      <iframe 
        class="z-depth-5 card-panel deep-purple darken-1 scale-transition scale-out scale-in btn-large" 
        src=<?= url ?>
        width="100%"
        height="100%"
        allow="autoplay"
        allow="encrypted-media"
        title="Dontime Life Website"
        frameborder="0"
        allowfullscreen
        ></iframe>
      </div></div></div></div>
      `,

        { url: url },
      ),
    )
      .evaluate()
      .getContent();
  }
}

async function somMainFunc(e) {
  var elapsedTime = new Date() - start;
  var timeToExecute = functionRegistry.maxTime - elapsedTime;
  while (timeToExecute > 0.3 * 60 * 1000) {
    console.log(timeToExecute);
    dtlsSomeFunction("It's who you know");
    if (elapsedTime <= 0.3 * 60 * 1000) {
      console.log("Six minutes");
    }
    if (elapsedTime == 1 * 60 * 1000) {
      console.log("Five minutes remainig");
    }
    if (elapsedTime == 2 * 60 * 1000) {
      console.log("Four minutes remainig");
    }
    if (elapsedTime == 3 * 60 * 1000) {
      console.log("Three minutes remainig");
    }
    if (elapsedTime == 4 * 60 * 1000) {
      console.log("Two minutes remainig");
    }
    if (elapsedTime == 5 * 60 * 1000) {
      console.log("One minute remainig");
    }
    if (elapsedTime >= functionRegistry.maxTime) {
      console.log("maximum execution time exceeded");
    }
  }
}
