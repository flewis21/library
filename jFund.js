var jFund = function (fx) {
  console.log(
    JSON.stringify(this["start"]) +
      "\n" +
      arguments.callee.name +
      "\n!ed, = " +
      !fx,
  );
  // var fx = e;
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
      section: [
        "test",
        "ssTest",
        "The Simple Webapp Trio",
        "Journalism Web App",
      ],
    },
  };
  var result = contentApp(
    `
<!DOCTYPE html>
  <html>
    <head>
      <base target="_self">
    </head>
    <body>
      <a id="caller" href="<?= getUrl(ScriptApp) ?>?func=jFund&args=${fx}">update</a>
      <br>
      <div id="div"><?!= index ?></div>
    </body>
  </html>`,
    {
      index: (function index() {
        console.log(
          JSON.stringify(this["start"]) + "\n" + arguments.callee.name,
        );
        if (fx === objMaster.objects.challenges[1]) {
          return contentApp(
            `
<html>
  <head></head>
  <body>
    <div id="flName">waiting...</div>
    <script>
      var flDeed = function flName() { 
        var dynObj = {
          friends: ["Chris", "Moises", "Van", "RahShaHHann"],
          firstname: "Fabian",
          lastname: "Lewis"
        }
      return console.log(dynObj.firstname + " has " + dynObj.friends.length + " friends and his best friend is " + dynObj.friends[dynObj.friends.length -1])
          }
            document.getElementById("flName").innerHTML = flDeed()
            var erHand = document.getElementById("flName")
            if (erHand.innerHTML === "undefined") {
              erHand.innerHTML = ""
            }
    </script>
  </body>
</html>`,
            {},
            "dynamicSentence1",
          );
        } else if (fx === objMaster.objects.challenges[2]) {
          return contentApp(
            `
  <html>
    <head></head>
    <body>
      <div id="dynS2">Waiting...</div>
      <script>
        var demoFab = function dynamicSentence2() {
          var fabian = {
            hasDriversLicense: false,
            name: {
              first: "Fabian",
              last: "Lewis"
            },
            job: "Grauduate Student",
            birthYear: 1972,
            calcAge: function calcAge() {
              return 2022 - this.birthYear
            },
            getSummary: function summary() {
              if (!this.hasDriversLicense) {
                return this.name.first + " is an " + this.age + " year old " + this.job + " who doesn't have a drivers license" + "." 
              } else {
                return this.name.first + " is an " + this.age + " year old " + this.job + " who has a drivers license" + "." 
              }
            // Fabian is an 50 year old graduate student.
          }
          }
          fabian.age = fabian.calcAge(),
          fabian.summary = fabian.getSummary()
          return console.log(fabian.summary)
        }
        document.getElementById("dynS2").innerHTML = demoFab()
        var erHand = document.getElementById("dynS2")
        if (erHand.innerHTML === "undefined") {
          erHand.innerHTML = ""
        }
      </script>
    </body>
  </html>
    `,
            {},
            "dynamicSentence2",
          );
        } else if (fx === objMaster.objects.challenges[3]) {
          return contentApp(
            `
<html>
  <head></head>
  <body>
    <div id="innerOB">waiting....</div>
    <script>
    var bmiOB = function objBMI() {
//BMI: mass / height ** 2 = mass / (height * height);
var bmiMark = {
      name: {
        first: "Mark",
        last: "David"
      },
      mass: prompt("What is Mark's mass?"),
      height: prompt("What is Mark's height?"),
      calcBMI() {
        this.bmi = this.mass / this.height ** 2
        return this.bmi  
      },
}
var bmiJohn = {
      name: {
        first: "John",
        last: "David"
      },
      mass: prompt("What is John's mass?"),
      height: prompt("What is John's height?"),
      calcBMI() {
        this.bmi = this.mass / this.height ** 2
        return this.bmi
      },
    }
    // bmiJohn.bmi = bmiJohn.calBMI();
    // bmiMark.bmi = bmiMark.calBMI();
    // John Smith's BMI is higher than Mark Miller's.
    bmiJohn.calcBMI()
    bmiMark.calcBMI()
    bmiJohn.bmi
    bmiMark.bmi
    if (bmiMark.bmi > bmiJohn.bmi) {
    return console.log(bmiMark.name.first + " " + bmiMark.name.last + "'s BMI of " + bmiMark.bmi + " is higher than " + bmiJohn.name.first + " " + bmiJohn.name.last + "'s BMI of " + bmiJohn.bmi + " .")
    } else {
    return console.log(bmiJohn.name.first + " " + bmiJohn.name.last + "'s BMI of " + bmiJohn.bmi + " is higher than " + bmiMark.name.first + " " + bmiMark.name.last + "'s BMI of " + bmiMark.bmi + " .")
    }
    // console.log(bmiJohn, bmiMark)
    }
    document.getElementById("innerOB").innerHTML = bmiOB()
    var erHand = document.getElementById("innerOB")
    if (erHand.innerHTML === "undefined") {
      erHand.innerHTML = ""
    }
    </script>
  </body>
</html>`,
            {},
            "objBMI",
          );
        } else if (fx === objMaster.objects.challenges[0]) {
          return contentApp(
            `
  <html>
    <head></head>
    <body>
      <div id="tiCal">Waiting...</div>
      <script>
        var tipYou = function tip_Calculator() {
        // Exercise
            var calcTip = function(bill) {
              if (bill >=301) {
                tip = bill + (bill * .2)
                return tip
              } else if (bill >= 50) {
                  tip = bill + (bill * .15);
                  return tip
                  } else if (bill > 0) {
                      tip = bill + (bill * .2)
                      return tip
                    }
              }
            var bills = [125, 555, 44];
            var tips = [calcTip(bills[0]) - bills[0], calcTip(bills[1]) - bills[1], calcTip(bills[bills.length -1]) - bills[bills.length -1]];
            var totals = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[bills.length -1])];
            console.log(bills, tips)
            return console.log(totals)
          }
        document.getElementById("tiCal").innerHTML = tipYou()
        var erHand = document.getElementById("tiCal")
        if (erHand.innerHTML === "undefined") {
          erHand.innerHTML = ""
        }
      </script>
    </body>
  </html>`,
            {},
            "tip_Calculator",
          );
        }
        if (fx === objMaster.arrays.lessons[0]) {
          return contentApp(
            `<html>
    <head></head>
    <body>
      <div id="arrEd">Waiting....</div>
      <script>
        var edArray = function arrays() {
          const friends = ['chris', 'moises', 'van']
          const fabian = ['fabian', 'Lewis', 2037 - 1991, 'student', friends];
          console.log(fabian)
          console.log(friends[friends.length - 1])
          console.log(fabian.length)


        // Exercise
          const calcAge = function (birthYear) {
            return 2037 - birthYear
          }

          const years = [1990, 1967, 2002, 2010, 2018];
          console.log(years + 10)
          console.log(years - 10)


          const age1 = calcAge(years[0]);
          const age2 = calcAge(years[0]);
          const age3 = calcAge(years[years.length -1]);
          console.log(age1, age2, age3);


          const ages = [calcAge(years[0]), calcAge(years[0]), calcAge(years[years.length -1])];
          console.log(ages)
          }
          document.getElementById("arrEd").innerHTML = edArray()
          var erHand = document.getElementById("arrEd")
          if (erHand.innerHTML === "undefined") {
            erHand.innerHTML = ""
          }
      </script>
    </body>
  </html>`,
            {},
            "arrays",
          );
        } else if (fx === objMaster.objects.lessons[0]) {
          return contentApp(
            `<html>
  <head></head>
  <body>
    <div id="objEd">Waiting....</div>
    <script>
      var edObject = function objects() {
        "use strict";
        var fabian = {
          first_Name: "Fabian",
          last_Name: "Lewis",
          job: "Student",
          age: 2037 - 1991,
          friends: ['Chris', 'Moises', 'Van']
        }
        fabian.location = "Atlanta, Ga";
        fabian["twitter"] = "@trchaury"
        var nameKey = "Name";
        console.log("First name " + fabian["first_"+nameKey] + " and last name " + fabian["last_"+nameKey]);
        console.log("First name " + fabian.first_+nameKey + " and last name " + fabian.last_+nameKey);
        var interestedIn = prompt("What do you want to know about this webmaster? Choose between first name, last name, age, job and friends. " + fabian["last_" + nameKey]);
          if (!fabian[interestedIn]) {
            return console.log("referenceError: " + interestedIn + " is undefined!")
            }else {
              return console.log(fabian[interestedIn])
              }
        return console.log(fabian)
      }
      document.getElementById("objEd").innerHTML = edObject()
      var erHand = document.getElementById("objEd")
      if (erHand.innerHTML === "undefined") {
        erHand.innerHTML = ""
      }
    </script>
  </body>
</html>`,
            {},
            "objects",
          );
        } else if (fx === objMaster.objects.lessons[2]) {
          return contentApp(
            `<html>
    <head></head>
    <body>
      <div id="loopEd">Waiting....</div>
      <script>
        var edLoop = function loops() {
          const friends = ['chris', 'moises', 'van'];
          const fabian = ['fabian', 'Lewis', 2037 - 1991, 'student', friends];
          console.log(fabian);
          console.log(friends[friends.length - 1]);
          console.log(fabian.length);


          // Exercise
            const calcAge = function (birthYear) {
              return 2037 - birthYear;
            }

          const years = [1990, 1967, 2002, 2010, 2018];
          console.log(years + 10);
          console.log(years - 10);


          const age1 = calcAge(years[0]);
          const age2 = calcAge(years[0]);
          const age3 = calcAge(years[years.length -1]);
          console.log(age1, age2, age3);


          const ages = [calcAge(years[0]), calcAge(years[0]), calcAge(years[years.length -1])];
          console.log(ages);
          for (var data = 1;fabian.length > data; data++) {
            console.log(data)
          }
        }
        document.getElementById("loopEd").innerHTML = edLoop()
        var erHand = document.getElementById("loopEd")
        if (erHand.innerHTML === "undefined") {
          erHand.innerHTML = ""
        }
      </script>
    </body>
  </html>`,
            {},
            "loops",
          );
        } else if (fx === objMaster.objects.lessons[1]) {
          return contentApp(
            `<html>
    <head></head>
    <body>
      <div id="objMEd">Waiting....</div>
      <script>
        var edObjM = function objMethods() {
        "use strict";


        var fabian = {
          hasDriversLiscense: true,
          first_Name: "Fabian",
          last_Name: "Lewis",
          job: "Student",
          birthYear: 1991,
          calcAge: function () {
            console.log(this)
            return 2037 - this.birthYear
          },    
          friends: ['Chris', 'Moises', 'Van']
        }
        fabian.location = "Atlanta, Ga";
        fabian["twitter"] = "@trchaury";


        // console.log(fabian.calcAge(1972));
        // console.log(fabian["calcAge"](1985));
        fabian.age = fabian.calcAge();

        var nameKey = "Name";
        console.log("First name " + fabian["first_"+nameKey] + " and last name " + fabian["last_"+nameKey]);
        console.log(fabian.age);
        // console.log("First name " + fabian.first_+nameKey + " and last name " + fabian.last_+nameKey);


        var interestedIn = prompt("What do you want to know about this webmaster? Choose between first name, last name, age, job and friends. " + fabian["last_" + nameKey]);
        if (!fabian[interestedIn]) {
            console.log("referenceError: " + interestedIn + " is undefined!")
            console.log(fabian["age"]);
            } else {
                console.log(fabian[interestedIn])
                console.log(fabian.twitter);
                }


        console.log(fabian)
      }
      document.getElementById("objMEd").innerHTML = edObjM()
      var erHand = document.getElementById("objMEd")
      if (erHand.innerHTML === "undefined") {
        erHand.innerHTML = ""
      }
      </script>
    </body>
  </html>`,
            {},
            "objMethods",
          );
        } else if (fx === objMaster.miscellaneous.section[0]) {
          return contentApp(
            `<html>
    <head></head>
    <body>
      <div id="testScr">Waiting...</div>
      <script>
        var scrFunc = function test() {
          "use strict";
          if (typeof e === "undefined") {
            console.log("done!")
            } else {
                console.log(typeof e)
                }
                if (typeof e === "object") {
                  console.log(e)
                  var mx = "https://www.sec.gov/files/company_tickers.json"
                  var go = function() {
                      google.script.run
                      .withSuccessHandler(
                        function(whatToWrite) {
                          document.getElementById("div").innerHTML=whatToWrite;
                         }).jsonINIT(mx)
                  }
                  document.getElementById('caller').onclick = go;
                }
        }
        document.getElementById("testScr").innerHTML = scrFunc()
        var erHand = document.getElementById("testScr")
        if (erHand.innerHTML === "undefined") {
          erHand.innerHTML = ""
        }
      </script>
    </body>
  </html>`,
            {},
            "test",
          );
        } else if (fx === objMaster.miscellaneous.section[1]) {
          return contentApp(
            `<html>
    <head></head>
    <body>
      <div id="test2">Waiting...</div>
      <script>
        var medTest = function test() {
          "use strict";
          var ssTest = googlw.script.run
          .withSuccessHandler(
            function(writer) {
                        }).test
          }
          document.getElementById("test2").innerHTML = medTest()
          var erHand = document.getElementById("test2")
          if (erHand.innerHTML === "undefined") {
            erHand.innerHTML = ""
          }
        </script>
      </body>
    </html>`,
            {},
            "ssTest",
          );
        } else if (fx === objMaster.miscellaneous.section[2]) {
          return contentApp(
            `
<!DOCTYPE html>
<html lang="en">

<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <!-- Tailwind CSS and DaisyUI CDN -->
  <link href="https://cdn.jsdelivr.net/npm/tailwindcss@^2.2.19/dist/tailwind.min.css" rel="stylesheet">
  <link href="https://cdn.jsdelivr.net/npm/daisyui@^1.3.6/dist/full.css" rel="stylesheet">
  <!-- Alpine.js CDN -->
  <script src="//unpkg.com/alpinejs" defer></script>
  <!-- use /dev/index.html environment for development and test, for production remove and serve at root domain e.g. example.com/index.html -->
  <base href="/dev/" />
</head>

<body>
  <div class="container mx-auto p-8">
    <h1 class="text-4xl font-bold text-center">Buzzword generator!</h1>
    <!-- bind x-data to messageStore -->
    <div x-data="messageStore" class="flex justify-center">
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title">Buzz count <div class="badge badge-lg" x-text="bsCount"></div>
          </h2>
          <div class="toast toast-top toast-center">
            <div class="alert alert-info">
              <span x-text="message"></span>
            </div>            
          </div>
          <div class="card-actions justify-end">
            <!-- call method to fetch new data and update page -->
            <button @click="getMessage()" class="btn btn-primary">Get Buzzwords</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <script>
    document.addEventListener('alpine:init', () => {
      Alpine.data('messageStore', () => ({
        message: 'Click the button to fetch a message ...',
        bsCount: 0,
        // init is called when document is ready
        init() {      
          this.getMessage()
        },
        // fetch json from the server public api
        async getMessage() {
          try {
            const response = await fetch('api/message', {
              headers: {
                'Content-Type': 'application/json'
              }
            });
            if (!response.ok) {
              throw new Error('HTTP error! status: ${response.status}');
            }
            // destruct json from server
            const { message, bsCount } = await response.json();
            // update local Alpine.data model
            this.message = message;
            this.bsCount = bsCount;
          } catch (error) {
            console.error('Error:', error);
          }
        }
      }));
    });
  </script>
</body>

</html>`,
            {},
            "The Simple Webapp Trio",
          );
        } else if (fx === objMaster.miscellaneous.section[3]) {
          return contentApp(
            `<!DOCTYPE html>
<html>
<head><title>Journalism Web App</title></head>
<body>

  <h2>Search News</h2>
  Query: <input type="text" id="searchQuery" value="Google"><br>
  Page Size: <input type="number" id="pageSize" value="10"><br>
  Page: <input type="number" id="page" value="1"><br>
  <button id="pageSearch">Search</button>

  <h2>Top Headlines</h2>
  Country: <input type="text" id="country" value="us"><br>
  Category: <input type="text" id="category" value="technology"><br>
  Page Size: <input type="number" id="pageSize" value="10"><br>
  Page: <input type="number" id="page" value="1"><br>
  <button id="numbNews">Get Top Headlines</button>

  <h2>Summarize Text</h2>
  Text: <textarea id="textToSummarize" rows="4" cols="50"></textarea><br>
  <button onclick="summarize()">Summarize</button>
  <div id="summary"></div>

  <div id="news"></div>

<script>
// Helper Function to make server calls with promises
function callServerFunction(functionName, ...args){
  return new Promise((resolve, reject) => {
    google.script.run
      .withSuccessHandler(resolve)
      .withFailureHandler(reject)
      [functionName](...args);
  })
}
// Client-side (HTML)
document.getElementById("pageSearch").addEventListener("click",searchNews)
var searchNews = function() {
  let query = document.getElementById("searchQuery").value;
  let apiKey = <?!= getScriptProperty('NEWS_API_KEY') ?>;
  let pageSize = document.getElementById('pageSize').value;
  let page = document.getElementById('page').value;
  callServerFunction('getNewsArticles', query, apiKey, pageSize, page)
    .then(data => displayNews(data.articles))
    .catch(error => displayError(error));
}

document.getElementById("numbNews").addEventListener("click",getTopNews)
function getTopNews() {
  let country = document.getElementById("country").value;
  let category = document.getElementById("category").value;
  let apiKey = <?!= getScriptProperty('NEWS_API_KEY') ?>;
  let pageSize = document.getElementById('pageSize').value;
  let page = document.getElementById('page').value;

  callServerFunction('getTopHeadlines', country, category, apiKey, pageSize, page)
    .then(data => displayNews(data.articles))
    .catch(error => displayError(error));
}

function summarize() {
  let text = document.getElementById("textToSummarize").value;
  let summarizationApiKey = <?!= getScriptProperty('SUMMARIZATION_API_KEY') ?>;
  callServerFunction('summarizeText', text, summarizationApiKey)
    .then(summaryData => {
        document.getElementById("summary").innerText = JSON.stringify(summaryData);
    })
    .catch(error => displayError(error));
}

function displayNews(articles) {
  let newsDiv = document.getElementById("news");
  newsDiv.innerHTML = ""; // Clear previous results
  if (articles && articles.length > 0) {
    articles.forEach(article => {
      newsDiv.innerHTML += '<h3><a href="article.url" target="_blank">article.title</a></h3><p>article.description</p><img src="article.urlToImage" width="200"><hr>';
    });
  } else {
    newsDiv.innerHTML = "<p>No articles found.</p>";
  }
}

function displayError(error) {
  document.getElementById("news").innerHTML = '<p style="color: red;">Error: error</p>';
}

</script>
</body>
</html>`,
            {},
            " ",
          );
        } else if (fx === objMaster) {
          return contentApp(``, {}, " ");
        }
      })(),
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
    },
  );
  return result;
};

// Server-side (Code.gs)
// Helper function for fetching data (using Promises for async handling)
function fetchData(url, options) {
  console.log(
    JSON.stringify(this["start"]) +
      "\n" +
      arguments.callee.name +
      "\n!ed, = " +
      !url,
  );
  return new Promise((resolve, reject) => {
    try {
      var response = UrlFetchApp.fetch(url, options);
      if (response.getResponseCode() == 200) {
        resolve(JSON.parse(response.getContentText()));
      } else {
        reject(
          "HTTP Error: " +
            response.getResponseCode() +
            " - " +
            response.getContentText(),
        );
      }
    } catch (error) {
      reject("Fetch Error: " + error);
    }
  });
}

// Function to fetch news articles from News API
function getNewsArticles(query, apiKey, pageSize = 10, page = 1) {
  console.log(
    JSON.stringify(this["start"]) +
      "\n" +
      arguments.callee.name +
      "\n!ed, = " +
      !query,
  );
  if (!apiKey) {
    return Promise.reject(
      "News API key is missing. Please set it in script properties.",
    );
  }
  var url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(query)}&apiKey=${apiKey}&pageSize=${pageSize}&page=${page}`; // Use template literals and encodeURIComponent
  return fetchData(url);
}

// Function to fetch top headlines from News API
function getTopHeadlines(country, category, apiKey, pageSize = 10, page = 1) {
  console.log(
    JSON.stringify(this["start"]) +
      "\n" +
      arguments.callee.name +
      "\n!ed, = " +
      !country,
  );
  if (!apiKey) {
    return Promise.reject(
      "News API key is missing. Please set it in script properties.",
    );
  }
  var url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&pageSize=${pageSize}&page=${page}`; // Use template literals
  return fetchData(url);
}

// Function to summarize text using a hypothetical summarization API (replace with a real API)
function summarizeText(text, summarizationApiKey) {
  console.log(
    JSON.stringify(this["start"]) +
      "\n" +
      arguments.callee.name +
      "\n!ed, = " +
      !text,
  );
  if (!summarizationApiKey) {
    return Promise.reject("Summarization API Key Missing");
  }
  var url = "YOUR_SUMMARIZATION_API_ENDPOINT"; // Replace with actual endpoint
  var options = {
    method: "post",
    contentType: "application/json",
    payload: JSON.stringify({ text: text }),
    headers: {
      Authorization: "Bearer " + summarizationApiKey,
    },
  };
  return fetchData(url, options);
}

function getScriptProperty(propName) {
  console.log(
    JSON.stringify(this["start"]) +
      "\n" +
      arguments.callee.name +
      "\n!ed, = " +
      !propName,
  );
  return PropertiesService.getScriptProperties().getProperty(propName);
}

// Helper Function to make server calls with promises (included in HTML)
function callServerFunction(functionName, args) {
  console.log(
    JSON.stringify(this["start"]) +
      "\n" +
      arguments.callee.name +
      "\n!ed, = " +
      !functionName,
  );
  return new Promise((resolve, reject) => {
    google.script.run
      .withSuccessHandler(resolve)
      .withFailureHandler(reject)
      [functionName](...args);
  });
}

var superTest = function (e) {
  console.log(
    JSON.stringify(this["start"]) +
      "\n" +
      arguments.callee.name +
      "\n!ed, = " +
      !e,
  );
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
    },
  );
  return html;
};
