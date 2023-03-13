var jFund = function (e) {
  var fx = e.parameter.fx;
  var objMaster = {
    arrays: {
      lessons: ["arrays"],
    },
    objects: {
      lessons: ["objects", "objMethods", "loops"],
      challenges: [
        "tip_Calculator",
        "dynamicSentence1",
        "dynamicSentence2",
        "objBMI",
      ],
    },
    miscellaneous: {
      section: ["test", "ssTest"],
    },
  };
  var result = contentFile(
    `
<!DOCTYPE html>
  <html>
    <head>
      <?!= styleHtml().getContent() ?>
      <base target="_self">
    </head>
    <body>
          <a id="caller" href="<?= getUrl(ScriptApp) + "?default=ssTest" ?>">update</a>
          <br>
          <div id="div">waiting...</div>
      <script id="gold" type="text/javascript">
        <?!= index() ?>
      </script>
    </body>
  </html>`,
    {
      index: function index() {
        if (fx === objMaster.objects.challenges[1]) {
          var html = contentApp(
            "\n   document.defaultView.addEventListener('DOMContentLoaded', dynamicSentence);\n    <?!= codingChallenges ?>\n\n\n   ",
            {
              codingChallenges: function dynamicSentence1() {
                // Fabian has three friends, and his best friend is Van.
                var dynObj = {
                  friends: ["Chris", "Moises", "Van"],
                  firstname: "Fabian",
                  lastname: "Lewis",
                };

                console.log(
                  dynObj.firstname +
                    " has " +
                    dynObj.friends.length +
                    " friends and his best friend is " +
                    dynObj.friends[dynObj.friends.length - 1]
                );
              },
            }
          );
          return html;
        } else if (fx === objMaster.objects.challenges[2]) {
          var html = contentApp(
            "\n   document.defaultView.addEventListener('DOMContentLoaded', dynamicSentence2);\n    <?!= codingChallenges ?>\n\n\n   ",
            {
              codingChallenges: function dynamicSentence2() {
                var fabian = {
                  hasDriversLicense: false,
                  name: {
                    first: "Fabian",
                    last: "Lewis",
                  },
                  job: "Grauduate Student",
                  birthYear: 1972,
                  calcAge: function calcAge() {
                    return 2022 - this.birthYear;
                  },
                  getSummary: function summary() {
                    if (!this.hasDriversLicense) {
                      return (
                        this.name.first +
                        " is an " +
                        this.age +
                        " year old " +
                        this.job +
                        " who doesn't have a drivers license" +
                        "."
                      );
                    } else {
                      return (
                        this.name.first +
                        " is an " +
                        this.age +
                        " year old " +
                        this.job +
                        " who has a drivers license" +
                        "."
                      );
                    }
                    // Fabian is an 50 year old graduate student.
                  },
                };
                (fabian.age = fabian.calcAge()),
                  console.log(fabian.getSummary());
              },
            }
          );
          return html;
        } else if (fx === objMaster.objects.challenges[3]) {
          var html = contentApp(
            "\n   document.defaultView.addEventListener('DOMContentLoaded', objBMI);\n    <?!= codingChallenges ?>\n\n\n   ",
            {
              codingChallenges: function objBMI() {
                //BMI: mass / height ** 2 = mass / (height * height);
                var bmiMark = {
                  name: {
                    first: "Mark",
                    last: "David",
                  },
                  mass: prompt("What is Mark's mass?"),
                  height: prompt("What is Mark's height?"),
                  calcBMI() {
                    this.bmi = this.mass / this.height ** 2;
                    return this.bmi;
                  },
                };
                var bmiJohn = {
                  name: {
                    first: "John",
                    last: "David",
                  },
                  mass: prompt("What is John's mass?"),
                  height: prompt("What is John's height?"),
                  calcBMI() {
                    this.bmi = this.mass / this.height ** 2;
                    return this.bmi;
                  },
                };
                // bmiJohn.bmi = bmiJohn.calBMI();
                // bmiMark.bmi = bmiMark.calBMI();
                // John Smith's BMI is higher than Mark Miller's.
                console.log(bmiJohn.calcBMI());
                console.log(bmiMark.calcBMI());
                console.log(bmiJohn.bmi);
                console.log(bmiMark.bmi);
                if (bmiMark.bmi > bmiJohn.bmi) {
                  console.log(
                    bmiMark.name.first +
                      " " +
                      bmiMark.name.last +
                      "'s BMI of " +
                      bmiMark.bmi +
                      " is higher than " +
                      bmiJohn.name.first +
                      " " +
                      bmiJohn.name.last +
                      "'s BMI of " +
                      bmiJohn.bmi +
                      " ."
                  );
                } else {
                  console.log(
                    bmiJohn.name.first +
                      " " +
                      bmiJohn.name.last +
                      "'s BMI of " +
                      bmiJohn.bmi +
                      " is higher than " +
                      bmiMark.name.first +
                      " " +
                      bmiMark.name.last +
                      "'s BMI of " +
                      bmiMark.bmi +
                      " ."
                  );
                }
                console.log(bmiJohn, bmiMark);
              },
            }
          );
          return html;
        } else if (fx === objMaster.objects.challenges[0]) {
          var html = contentApp(
            "\n   document.defaultView.addEventListener('DOMContentLoaded', tip_Calculator);\n    <?!= codingChallenges ?>\n\n\n   ",
            {
              codingChallenges: function tip_Calculator() {
                // Exercise
                var calcTip = function (bill) {
                  if (bill >= 301) {
                    tip = bill + bill * 0.2;
                    return tip;
                  } else if (bill >= 50) {
                    tip = bill + bill * 0.15;
                    return tip;
                  } else if (bill > 0) {
                    tip = bill + bill * 0.2;
                    return tip;
                  }
                };
                var bills = [125, 555, 44];
                var tips = [
                  calcTip(bills[0]) - bills[0],
                  calcTip(bills[1]) - bills[1],
                  calcTip(bills[bills.length - 1]) - bills[bills.length - 1],
                ];
                var totals = [
                  calcTip(bills[0]),
                  calcTip(bills[1]),
                  calcTip(bills[bills.length - 1]),
                ];
                console.log(bills, tips);
                console.log(totals);
              },
            }
          );
          return html;
        }
        if (fx === objMaster.arrays.lessons[0]) {
          var html = contentApp(
            "\n   document.defaultView.addEventListener('DOMContentLoaded', arrays);\n    <?!= lessons ?>\n\n\n   ",
            {
              lessons: function arrays() {
                const friends = ["chris", "moises", "van"];
                const fabian = [
                  "fabian",
                  "Lewis",
                  2037 - 1991,
                  "student",
                  friends,
                ];
                console.log(fabian);
                console.log(friends[friends.length - 1]);
                console.log(fabian.length);

                // Exercise
                const calcAge = function (birthYear) {
                  return 2037 - birthYear;
                };

                const years = [1990, 1967, 2002, 2010, 2018];
                console.log(years + 10);
                console.log(years - 10);

                const age1 = calcAge(years[0]);
                const age2 = calcAge(years[0]);
                const age3 = calcAge(years[years.length - 1]);
                console.log(age1, age2, age3);

                const ages = [
                  calcAge(years[0]),
                  calcAge(years[0]),
                  calcAge(years[years.length - 1]),
                ];
                console.log(ages);
              },
            }
          );
          return html;
        } else if (fx === objMaster.objects.lessons[0]) {
          var html = contentApp(
            "\n   document.defaultView.addEventListener('DOMContentLoaded', objects);\n    <?!= lessons ?>\n\n\n   ",
            {
              lessons: function objects() {
                "use strict";
                var fabian = {
                  first_Name: "Fabian",
                  last_Name: "Lewis",
                  job: "Student",
                  age: 2037 - 1991,
                  friends: ["Chris", "Moises", "Van"],
                };
                fabian.location = "Atlanta, Ga";
                fabian["twitter"] = "@trchaury";
                var nameKey = "Name";
                console.log(
                  "First name " +
                    fabian["first_" + nameKey] +
                    " and last name " +
                    fabian["last_" + nameKey]
                );
                console.log(
                  "First name " +
                    fabian.first_ +
                    nameKey +
                    " and last name " +
                    fabian.last_ +
                    nameKey
                );
                var interestedIn = prompt(
                  "What do you want to know about this webmaster? Choose between first name, last name, age, job and friends. " +
                    fabian["last_" + nameKey]
                );
                if (!fabian[interestedIn]) {
                  console.log(
                    "referenceError: " + interestedIn + " is undefined!"
                  );
                } else {
                  console.log(fabian[interestedIn]);
                }
                console.log(fabian);
              },
            }
          );
          return html;
        } else if (fx === objMaster.objects.lessons[2]) {
          var html = contentBlob(
            "\n   document.defaultView.addEventListener('DOMContentLoaded', loops);\n    <?!= lessons ?>\n\n\n   ",
            {
              lessons: function loops(e) {
                console.log(eval(e.target));
                const friends = ["chris", "moises", "van"];
                const fabian = [
                  "fabian",
                  "Lewis",
                  2037 - 1991,
                  "student",
                  friends,
                ];
                console.log(fabian);
                console.log(friends[friends.length - 1]);
                console.log(fabian.length);

                // Exercise
                const calcAge = function (birthYear) {
                  return 2037 - birthYear;
                };

                const years = [1990, 1967, 2002, 2010, 2018];
                console.log(years + 10);
                console.log(years - 10);

                const age1 = calcAge(years[0]);
                const age2 = calcAge(years[0]);
                const age3 = calcAge(years[years.length - 1]);
                console.log(age1, age2, age3);

                const ages = [
                  calcAge(years[0]),
                  calcAge(years[0]),
                  calcAge(years[years.length - 1]),
                ];
                console.log(ages);
                for (var data = 1; fabian.length > data; data++) {
                  console.log(data);
                }
              },
            }
          );
          return html;
        } else if (fx === objMaster.objects.lessons[1]) {
          var html = contentApp(
            "\n   document.defaultView.addEventListener('DOMContentLoaded', objMethods);\n    <?!= lessons ?>\n\n\n   ",
            {
              lessons: function objMethods() {
                "use strict";

                var fabian = {
                  hasDriversLiscense: true,
                  first_Name: "Fabian",
                  last_Name: "Lewis",
                  job: "Student",
                  birthYear: 1991,
                  calcAge: function () {
                    console.log(this);
                    return 2037 - this.birthYear;
                  },
                  friends: ["Chris", "Moises", "Van"],
                };
                fabian.location = "Atlanta, Ga";
                fabian["twitter"] = "@trchaury";

                // console.log(fabian.calcAge(1972));
                // console.log(fabian["calcAge"](1985));
                fabian.age = fabian.calcAge();

                var nameKey = "Name";
                console.log(
                  "First name " +
                    fabian["first_" + nameKey] +
                    " and last name " +
                    fabian["last_" + nameKey]
                );
                console.log(fabian.age);
                // console.log("First name " + fabian.first_+nameKey + " and last name " + fabian.last_+nameKey);

                var interestedIn = prompt(
                  "What do you want to know about this webmaster? Choose between first name, last name, age, job and friends. " +
                    fabian["last_" + nameKey]
                );
                if (!fabian[interestedIn]) {
                  console.log(
                    "referenceError: " + interestedIn + " is undefined!"
                  );
                  console.log(fabian["age"]);
                } else {
                  console.log(fabian[interestedIn]);
                  console.log(fabian.twitter);
                }

                console.log(fabian);
              },
            }
          );
          return html;
        } else if (fx === objMaster.miscellaneous.section[0]) {
          var html = contentApp(
            "\n   document.defaultView.addEventListener('DOMContentLoaded', test);\n    <?!= misc ?>\n\n\n   ",
            {
              misc: function test(e) {
                console.log(eval(e.target));
                ("use strict");
                if (typeof e === "undefined") {
                  console.log("done!");
                } else {
                  console.log(typeof e);
                }
                if (typeof e === "object") {
                  console.log(e);
                  var mx = "https://www.sec.gov/files/company_tickers.json";
                  var go = function () {
                    google.script.run
                      .withSuccessHandler(function (whatToWrite) {
                        document.getElementById("div").innerHTML = whatToWrite;
                      })
                      .jsonINIT(mx);
                  };
                  document.getElementById("caller").onclick = go;
                }
              },
              home: "?default=jFunc&sect=test",
            }
          );
          return html;
        } else if (fx === objMaster.miscellaneous.section[1]) {
          var html = contentApp(
            "\n   document.defaultView.addEventListener('DOMContentLoaded', test);\n    <?!= misc ?>\n\n\n   ",
            {
              misc: function test(e) {
                console.log(eval(e.target));
                ("use strict");
                var ssTest = googlw.script.run.withSuccessHandler(function (
                  writer
                ) {}).test;
              },
            }
          );
          return html;
        }
      },
      link: getUrl(ScriptApp) + "?default=jFun&fx=" + fx,
      utf_8: '\n<meta charset="UTF-8">',
      viewport:
        '<meta name="viewport" content="width=device-width, initial-scale=1.0">',
      fontAwesome:
        '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />',
      googleApisCss:
        '<link href="https://fonts.googleapis.com/css2?family=Libre+Barcode+128&family=Montserrat:ital@1&family=Oswald&family=Roboto&display=swap" rel="stylesheet">',
      googleApisIcon:
        '\n <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>\n  ',
      googleApis_preConnect:
        '<link rel="preconnect" href="https://fonts.googleapis.com">',
      website:
        '\n * {\n box-sizing: border-box;margin: 0;padding: 0;font-family: "Roboto", sans-serif;\n }\n ',
      html: "\n html,\n body {\n height: 100%;\n }\n ",
      main: "\n main {\n height: 92%;\n margin-top: 10px;\n }\n ",
      body: "\n body {\n background-color: #ffc107;\n }\n ",
      header:
        "\n header {\n background-color: rgba(255,255,255,.1);\n color: #a7e1ee;\n font-size: smaller;\n }\n ",
      header_h1:
        '\n header h1 {\n font-family: "Montserrat", cursive;\n margin-left: 15px;\n }\n ',
      grid: "\n .grid {\n display: grid;\n }\n ",
      flex_row: "\n .flex-row {\n display: flex;\n flex-direction: row;\n }\n ",
      flex_column:
        "\n .flex-column {\n display: flex;\n flex-direction: column;\n }\n ",
    }
  );
  return result;
};

var superTest = function (e) {
  var html = contentApp(
    "\n   <body id='test'>\n<a id='caller' href='<?!= link ?>'>Update</a>\n<div id='div'>Waiting...</div><br>\n<script id='gold' type='text/javascript'>\ndocument.defaultView.addEventListener('DOMContentLoaded', test);\n<?!= misc ?>\n\n</script>\n    </body>\n   ",
    {
      misc: function test(e) {
        console.log(eval(e.target));
        ("use strict");
        var mx = this.link;
        var data = function (write) {
          console.log(document.getElementById("test").innerHTML);
          // google.script.run.withSuccessHandler(function(written)
          // {
          document.getElementById("div").innerHTML = JSON.stringify(write);
          // }).runAll("boilerplate.proMediaSnip", []);
        };
        var go = function () {
          google.script.run
            .withSuccessHandler(data)
            .runAlleval("breakthrough", []);
        };
        document.getElementById("caller").onclick = go;
      },
      link: getUrl(ScriptApp) + "?default=ssTest",
    }
  );
  return html;
};
