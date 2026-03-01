function postToDiscord(currentMessage) {
  var url = "https://discord.com/channels/@me/872526530109145178";
  var validUrl = isValidUrl(url);
  var message = {
    content: currentMessage,
  };
  var options = {
    method: "post",
    payload: message,
  };
  let response;
  let location;
  let htmlData;
  let supUrl;
  let retries = 0;
  let delay = 1000;
  response = UrlFetchApp.fetch(url, {
    followRedirects: false, // Prevent automatic redirects
    muteHttpExceptions: true,
  });
  try {
    if (response) {
      var res = response.getResponseCode();
      if (res) {
        if (res === 429) {
          retries++;
          delay += 2;
          Utilities.sleep(delay + Math.random() * 500);
          Logger.log(`Rate limit hit, retrying in ${delay} ms`);
          while (retries < maxRetries) {
            try {
              response = UrlFetchApp.fetch(
                supFunc && supFunc.args ? supFunc.args : validUrl?.hostname,
                {
                  followRedirects: false, // Prevent automatic redirects
                  muteHttpExceptions: true,
                },
              );
            } catch (error) {
              Logger.log("Error fetching data: " + error);
              retries++;
              delay += 2;
              Utilities.sleep(delay);
            }
          }
          Logger.log("Max retries reached, failed to fetch data.");
        } else {
          if (res >= 300 && res < 400) {
            // Redirect occurred
            location = response.getHeaders().Location;
            htmlData = UrlFetchApp.fetch(location, {
              followRedirects: true,
              muteHttpExceptions: true,
            }).getContentText();
            supUrl = location;
            // var form = formMaker();
            var form = formMaker(
              [JSON.stringify(message)].join("").toUpperCase(),
              "misForms",
              functionRegistry.time,
            );

            if (typeof form === "object") {
              // fileManager(coData.rndTitle, "Forms")
              Logger.log(
                `Created new form: ${form.getTitle()} - ${form.getEditUrl()}`,
              );

              // --- Set Basic Form Properties ---

              // Randomly decide to collect email or not
              form.setCollectEmail(Math.random() < 0.5);

              // Randomly decide to show progress bar for multi-section forms
              if (Math.random() < 0.7) {
                form.setProgressBar(true);
              }

              // --- Add Sections and Questions ---

              form
                .addSectionHeaderItem()
                .setTitle("Redirect occurred\n" + htmlData);
              if (Math.random() < 0.7) {
                form.addTextItem().setTitle("Industry").setRequired(true);
              }
              if (Math.random() < 0.7) {
                form.addTextItem().setTitle("Industry").setRequired(true);
              }
              form
                .addParagraphTextItem()
                .setTitle("Industry/Market Corrections")
                .setRequired(randChoice() < 0.1);
              form
                .addParagraphTextItem()
                .setTitle("News")
                .setRequired(randChoice() < 0.1);
              form
                .addParagraphTextItem()
                .setTitle("Economic/Business Cycles")
                .setRequired(randChoice());
              if (Math.random() < 0.7) {
                form.addTextItem().setTitle("Stock Price").setRequired(true);
              }
              if (Math.random() < 0.7) {
                form
                  .addTextItem()
                  .setTitle("Outstanding Shares")
                  .setRequired(true);
              }
              if (Math.random() < 0.7) {
                form
                  .addTextItem()
                  .setTitle("Quarterly Earnings")
                  .setRequired(true);
              }
              form
                .addTextItem()
                .setTitle("Annualized Net Income")
                .setRequired(randChoice() < 0.1);
              form
                .addTextItem()
                .setTitle("Total Equity")
                .setRequired(randChoice() < 0.1);
              form
                .addTextItem()
                .setTitle("Retained Earnings")
                .setRequired(randChoice() < 0.1);
              if (Math.random() < 0.7) {
                form
                  .addTextItem()
                  .setTitle("Cash & Marketable Securities")
                  .setRequired(true);
              }
              if (Math.random() < 0.7) {
                form
                  .addTextItem()
                  .setTitle("Accounts Receivable")
                  .setRequired(true);
              }
              if (Math.random() < 0.7) {
                form.addTextItem().setTitle("Inventories").setRequired(true);
              }
              form
                .addTextItem()
                .setTitle("Long-term Investments")
                .setRequired(randChoice() < 0.1);
              form
                .addTextItem()
                .setTitle("Net PP&E")
                .setRequired(randChoice() < 0.1);
              if (Math.random() < 0.7) {
                form
                  .addTextItem()
                  .setTitle("Current Financial Liabilities")
                  .setRequired(true);
              }
              form
                .addTextItem()
                .setTitle("Long-term Interest-bearing Debts")
                .setRequired(randChoice() < 0.1);
              form
                .addTextItem()
                .setTitle("Current Year Total Earnings")
                .setRequired(randChoice() < 0.1);
              form
                .addTextItem()
                .setTitle("Base Year Total Earnings")
                .setRequired(randChoice() < 0.1);
              if (Math.random() < 0.7) {
                form.addTextItem().setTitle("Your Name").setRequired(true);
              }
              if (Math.random() < 0.7) {
                form.addDateItem().setTitle("Birth Date").setRequired(true);
              }
              if (Math.random() < 0.7) {
                form
                  .addParagraphTextItem()
                  .setTitle("Your Message")
                  .setRequired(true);
              }
              form.setConfirmationMessage("Thanks for your feedback !!");
              var responseObj = {
                dataStr: seoPastTime(isValidUrl(location).hostname),
                url: form.getPublishedUrl(),
              };
            }
          } else {
            // No redirect or other error
            location = response.getContentText();
            htmlData = location;
            supUrl = validUrl.hostname;
            // var form = formMaker();
            var form = formMaker(
              [JSON.stringify(message)].join("").toUpperCase(),
              "misForms",
              functionRegistry.time,
            );

            if (typeof form === "object") {
              // fileManager(coData.rndTitle, "Forms")
              Logger.log(
                `Created new form: ${form.getTitle()} - ${form.getEditUrl()}`,
              );

              // --- Set Basic Form Properties ---

              // Randomly decide to collect email or not
              form.setCollectEmail(Math.random() < 0.5);

              // Randomly decide to show progress bar for multi-section forms
              if (Math.random() < 0.7) {
                form.setProgressBar(true);
              }

              // --- Add Sections and Questions ---

              form
                .addSectionHeaderItem()
                .setTitle("No redirect or other error\n" + htmlData);
              if (Math.random() < 0.7) {
                form.addTextItem().setTitle("Industry").setRequired(true);
              }
              if (Math.random() < 0.7) {
                form.addTextItem().setTitle("Sector").setRequired(true);
              }
              form
                .addParagraphTextItem()
                .setTitle("Industry/Market Corrections")
                .setRequired(randChoice() < 0.1);
              form
                .addParagraphTextItem()
                .setTitle("News")
                .setRequired(randChoice() < 0.1);
              form
                .addParagraphTextItem()
                .setTitle("Economic/Business Cycles")
                .setRequired(randChoice() < 0.1);
              if (Math.random() < 0.7) {
                form.addTextItem().setTitle("Stock Price").setRequired(true);
              }
              if (Math.random() < 0.7) {
                form
                  .addTextItem()
                  .setTitle("Outstanding Shares")
                  .setRequired(true);
              }
              if (Math.random() < 0.7) {
                form
                  .addTextItem()
                  .setTitle("Quarterly Earnings")
                  .setRequired(true);
              }
              form
                .addTextItem()
                .setTitle("Annualized Net Income")
                .setRequired(randChoice() < 0.1);
              form
                .addTextItem()
                .setTitle("Total Equity")
                .setRequired(randChoice() < 0.1);
              form
                .addTextItem()
                .setTitle("Retained Earnings")
                .setRequired(randChoice() < 0.1);
              if (Math.random() < 0.7) {
                form
                  .addTextItem()
                  .setTitle("Cash & Marketable Securities")
                  .setRequired(true);
              }
              if (Math.random() < 0.7) {
                form
                  .addTextItem()
                  .setTitle("Accounts Receivable")
                  .setRequired(true);
              }
              if (Math.random() < 0.7) {
                form.addTextItem().setTitle("Inventories").setRequired(true);
              }
              form
                .addTextItem()
                .setTitle("Long-term Investments")
                .setRequired(randChoice() < 0.1);
              form
                .addTextItem()
                .setTitle("Net PP&E")
                .setRequired(randChoice() < 0.1);
              if (Math.random() < 0.7) {
                form
                  .addTextItem()
                  .setTitle("Current Financial Liabilities")
                  .setRequired(true);
              }
              form
                .addTextItem()
                .setTitle("Long-term Interest-bearing Debts")
                .setRequired(randChoice() < 0.1);
              form
                .addTextItem()
                .setTitle("Current Year Total Earnings")
                .setRequired(randChoice() < 0.1);
              form
                .addTextItem()
                .setTitle("Base Year Total Earnings")
                .setRequired(randChoice() < 0.1);
              if (Math.random() < 0.7) {
                form.addTextItem().setTitle("Your Name").setRequired(true);
              }
              if (Math.random() < 0.7) {
                form.addDateItem().setTitle("Birth Date").setRequired(true);
              }
              if (Math.random() < 0.7) {
                form
                  .addParagraphTextItem()
                  .setTitle("Your Message")
                  .setRequired(true);
              }
              form.setConfirmationMessage("Thanks for your feedback !!");
              var responseObj = {
                dataStr: seoPastTime(validUrl.hostname),
                url: form.getPublishedUrl(),
              };
            }
          }
        }
      }
    }
  } catch (e) {
    Logger.log("Error resolving TinyURL: " + e.toString());
    console.error("Error resolving TinyURL: ", e.toString());
  }
  console.log("Final app:", htmlData);
  return { index: responseObj, app: htmlData, link: supUrl };
}

function postFromSpreadsheet(column, rowOff, colOff, discord) {
  var messageCell = ssCell(column, rowOff, colOff);
  var currentMessage = messageCell.getValue();
  if (currentMessage == "") return;
  postToDiscord(currentMessage);
}
