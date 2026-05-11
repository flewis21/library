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
  const navBar = new ContentApp(
    "\n <div>\n    <?!= ref1 ?><?!= ref2 ?><?!= ref3 ?><?!= ref4 ?><?!= ref5 ?><?!= ref6 ?><?!= ref7 ?><?!= ref8 ?><?!= ref9 ?>\n  <?!= test ?>\n   </div>\n  ",
    {
      ref1: new ContentApp(
        "\n <a href=".concat(
          ref1,
          ' class="nav__link" data-link>'.concat(title1, "</a>"),
        ),
        {
          ref1: ref1,
          title1: title1,
        },
      ).tmp,
      ref2: new ContentApp(
        "\n <a href=".concat(
          ref2,
          ' class="nav__link" data-link>'.concat(title2, "</a>"),
        ),
        {
          ref2: ref2,
          title2: title2,
        },
      ).tmp,
      ref3: new ContentApp(
        "\n <a href=".concat(
          ref3,
          ' class="nav__link" data-link>'.concat(title3, "</a>"),
        ),
        {
          ref3: ref3,
          title3: title3,
        },
      ).tmp,
      ref4: new ContentApp(
        "\n <a href=".concat(
          ref4,
          ' class="nav__link" data-link>'.concat(title4, "</a>"),
        ),
        {
          ref4: ref4,
          title4: title4,
        },
      ).tmp,
      ref5: new ContentApp(
        "\n <a href=".concat(
          ref5,
          ' class="nav__link" data-link>'.concat(title5, "</a>"),
        ),
        {
          ref5: ref5,
          title5: title5,
        },
      ).tmp,
      ref6: new ContentApp(
        "\n <a href=".concat(
          ref6,
          ' class="nav__link" data-link>'.concat(title6, "</a>"),
        ),
        {
          ref6: ref6,
          title6: title6,
        },
      ).tmp,
      ref7: new ContentApp(
        "\n <a href=".concat(
          ref7,
          ' class="nav__link" data-link>'.concat(title7, "</a>"),
        ),
        {
          ref7: ref7,
          title7: title7,
        },
      ).tmp,
      ref8: new ContentApp(
        "\n <a href=".concat(
          ref8,
          ' class="nav__link" data-link>'.concat(title8, "</a>"),
        ),
        {
          ref8: ref8,
          title8: title8,
        },
      ).tmp,
      ref9: new ContentApp(
        "\n <a href=".concat(
          ref9,
          ' class="nav__link" data-link>'.concat(title9, "</a>"),
        ),
        {
          ref9: ref9,
          title9: title9,
        },
      ).tmp,
      test: new ContentApp(
        "\n  <script>\n  ".concat(
          tagBuilder(
            "data",
            [["the"]],
            "a",
            '\\ value=r[1] target="_blank" href="https://www.sec.gov/edgar/browse/?CIK="r[0][0]"&owner=exclude"',
          ),
          "\n  </script> ",
        ),
      ).tmp,
    },
  ).tmp;
  // new ContentApp("<?!= html ?>", { html: "".concat(new ContentApp(
  // "\n  <head>\n  <base target=\"_parent\"></base>\n  <meta charset=\"UTF-8\"></meta>\n  <meta content=\"width=device-width, initial-scale=1.0\" name=\"viewport\"></meta>\n <link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\"></link>\n  <link href=\"https://fonts.googleapis.com/icon?fam ily=Material+Icons\" rel=\"stylesheet\"></link>\n  <link href=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css\" rel=\"stylesheet\"></link>\n\n  </head>\n <body>\n\n <div class=\"navbar\">\n  <nav class=\"nav\">\n  <a href=\"".concat(ref2, "\" class=\"nav__link\" data-link><?!= title2 ?></a>\n  <a href=\"".concat(ref3, "\" class=\"nav__link\" data-link><?!= title3 ?></a>\n  <a href=\"".concat(ref4, "\" class=\"nav__link\" data-link><?!= title4 ?></a>\n  <a href=\"".concat(ref5, "\" class=\"nav__link\" data-link><?!= title5 ?></a>\n  <a href=\"".concat(ref6, "\"  class=\"nav__link\"  data-link><?!= title6 ?></a>\n  <a href=\"".concat(ref7, "\"  class=\"nav__link\"  data-link><?!= title7 ?></a>\n  <a href=\"".concat(ref8, "\"  class=\"nav__link\"  data-link><?!= title8 ?></a>\n  <a href=\"".concat(ref9, "\"  class=\"nav__link\"  data-link><?!= title9 ?></a>\n  </nav>\n\n  <script src=\"https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js\"></script>\n </body>\n\n  "))))))))), { title1: title1, title2: title2, title3: title3, title4: title4, title5: title5, title6: title6, title7: title7, title8: title8, title9: title9 }
  // ).tmp
  // ,"")}).tmp;
  return new ContentApp(navBar).tmp; //:contentFile('uiAccess');
}
