function navBar(
  ref1,
  title1,
  ref2,
  title2,
  ref3,
  title3,
  ref4,
  title4,
  ref5,
  title5,
  ref6,
  title6,
  ref7,
  title7,
  ref8,
  title8,
  ref9,
  title9,
) {
  const navBar = HtmlService.createTemplate(
    `<div>
        <?!= ref1 ?>
        <?!= ref2 ?>
        <?!= ref3 ?>
        <?!= ref4 ?>
        <?!= ref5 ?>
        <?!= ref6 ?>
        <?!= ref7 ?>
        <?!= ref8 ?>
        <?!= ref9 ?>
        <?!= test ?>
     </div>`,
  );
  navBar.ref1 = HtmlService.createHtmlOutput(
    `<a href="${ref1}" class=\"nav__link\" data-link>${title1}</a>`,
  ).getContent();
  navBar.ref2 = HtmlService.createHtmlOutput(
    `<a href="${ref2}" class=\"nav__link\" data-link>${title2}</a>`,
  ).getContent();
  navBar.ref3 = HtmlService.createHtmlOutput(
    `<a href="${ref3}" class=\"nav__link\" data-link>${title3}</a>`,
  ).getContent();
  navBar.ref4 = HtmlService.createHtmlOutput(
    `<a href="${ref4}" class=\"nav__link\" data-link>${title4}</a>`,
  ).getContent();
  navBar.ref5 = HtmlService.createHtmlOutput(
    `<a href="${ref5}" class=\"nav__link\" data-link>${title5}</a>`,
  ).getContent();
  navBar.ref6 = HtmlService.createHtmlOutput(
    `<a href="${ref6}" class=\"nav__link\" data-link>${title6}</a>`,
  ).getContent();
  navBar.ref7 = HtmlService.createHtmlOutput(
    `<a href="${ref7}" class=\"nav__link\" data-link>${title7}</a>`,
  ).getContent();
  navBar.ref8 = HtmlService.createHtmlOutput(
    `<a href="${ref8}" class=\"nav__link\" data-link>${title8}</a>`,
  ).getContent();
  navBar.ref9 = HtmlService.createHtmlOutput(
    `<a href="${ref9}" class=\"nav__link\" data-link>${title9}</a>`,
  ).getContent();
  navBar.test = HtmlService.createHtmlOutput(
    `
    <script>
      ${tagBuilder("data", [["the"]], "a", '\\ value=r[1] target="_blank" href="https://www.sec.gov/edgar/browse/?CIK="r[0][0]"&owner=exclude"')}
    </script> `,
  ).getContent();
  // contentApp("<?!= html ?>", { html: "".concat(contentApp(
  // "\n  <head>\n  <base target=\"_parent\"></base>\n  <meta charset=\"UTF-8\"></meta>\n  <meta content=\"width=device-width, initial-scale=1.0\" name=\"viewport\"></meta>\n <link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\"></link>\n  <link href=\"https://fonts.googleapis.com/icon?fam ily=Material+Icons\" rel=\"stylesheet\"></link>\n  <link href=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css\" rel=\"stylesheet\"></link>\n\n  </head>\n <body>\n\n <div class=\"navbar\">\n  <nav class=\"nav\">\n  <a href=\"".concat(ref2, "\" class=\"nav__link\" data-link><?!= title2 ?></a>\n  <a href=\"".concat(ref3, "\" class=\"nav__link\" data-link><?!= title3 ?></a>\n  <a href=\"".concat(ref4, "\" class=\"nav__link\" data-link><?!= title4 ?></a>\n  <a href=\"".concat(ref5, "\" class=\"nav__link\" data-link><?!= title5 ?></a>\n  <a href=\"".concat(ref6, "\"  class=\"nav__link\"  data-link><?!= title6 ?></a>\n  <a href=\"".concat(ref7, "\"  class=\"nav__link\"  data-link><?!= title7 ?></a>\n  <a href=\"".concat(ref8, "\"  class=\"nav__link\"  data-link><?!= title8 ?></a>\n  <a href=\"".concat(ref9, "\"  class=\"nav__link\"  data-link><?!= title9 ?></a>\n  </nav>\n\n  <script src=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js\"></script>\n </body>\n\n  "))))))))), { title1: title1, title2: title2, title3: title3, title4: title4, title5: title5, title6: title6, title7: title7, title8: title8, title9: title9 }
  // )
  // ,"")});
  return renderTemplate(navBar.evaluate().getContent()); //:contentFile('uiAccess');
};
