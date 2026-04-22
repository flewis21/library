const b_top = HtmlService.createHtmlOutput(`<base target="_top" />`);
const utf_8 = HtmlService.createHtmlOutput(`<meta charset="UTF-8" />`);
const xuacompatible = HtmlService.createHtmlOutput(
  `<meta http-equiv="X-UA-Compatible" content="IE=edge" />`,
);
const viewport = HtmlService.createHtmlOutput(
  `<meta name="viewport" content="width=device-width, initial-scale=1.0" />`,
);
const google_signin_client = HtmlService.createHtmlOutput(
  `<meta content="739921544160-nvqbr8cmqcs35n700q94mn5qnjh7vdr5.apps.googleusercontent.com" name="google-signin-client_id" />`,
);
const fontAwesome = HtmlService.createHtmlOutput(
  `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />`,
);
const googleApis_preConnect = HtmlService.createHtmlOutput(
  `<link rel="preconnect" href="https://fonts.googleapis.com" />`,
);
const gstatic_preConnect = HtmlService.createHtmlOutput(
  `<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />`,
);
const googleApisCss = HtmlService.createHtmlOutput(
  `<link href="https://fonts.googleapis.com/css2?family=Libre+Barcode+128&family=Montserrat:ital@1&family=Oswald&family=Roboto&display=swap" rel="stylesheet" />`,
);
const materializeCss = HtmlService.createHtmlOutput(
  `<link href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" rel="stylesheet" />`,
);
const tabulatorCss = HtmlService.createHtmlOutput(
  `<link href="https://unpkg.com/tabulator-tables@5.2.3/dist/css/tabulator_materialize.min.css" rel="stylesheet" />`,
);
const googleApisIcon = HtmlService.createHtmlOutput(
  `<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />`,
);
const google_charts_loader = HtmlService.createHtmlOutput(
  `<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>`,
);
const googleApisOnApiLoad = HtmlService.createHtmlOutput(
  `<script src="https://apis.google.com/js/api.js?onload=onApiLoad"></script>`,
);
const googleApis_defer = HtmlService.createHtmlOutput(
  `<script async="" defer="" src="https://apis.google.com/js/platform.js"></script>`,
);
const desktopContainer = HtmlService.createHtmlOutput(
  `@media (min-width: 901px) {.desktop-container {width: 85%;margin: 0 auto;};.responsive-section {width: 85%;margin: 20 auto;}}`,
);
const mobileSection = HtmlService.createHtmlOutput(
  `@media (max-width: 900px) {.mobile-section {padding: 10px};.responsive-section {padding: 10px;} .menu-icon {display: none;} .sidebar {display: none;} .container .large-container {padding-left: 5%;padding-right: 5%;} .nav-right img {display: none;} .nav-right .user-icon  {display: block;width: 30px;} .nav-middle .search-box input {width: 100px;} .nav-middle .mic-icon {display: none;} .logo {width: 90px;}}`,
);
const article = HtmlService.createHtmlOutput(
  `article {background-color: white;margin-top: 5px;padding: 10px 15px;color: black;}`,
);
const aside = HtmlService.createHtmlOutput(
  `aside {background-color: #bbbbbb;padding: 20px;margin-top: 10px;}`,
);
const block_display = HtmlService.createHtmlOutput(
  `article, aside, footer, header, nav, main, section {display: block;}`,
);
const body = HtmlService.createHtmlOutput(
  `body {background-image: url("https://flewis21.github.io/foobar/images/user.jpg");width: 1080px;margin-left: auto;margin-right: auto;border-radius: 0.5px;background-color: #f0f0f0;font-family: Helvetica, Arial, sans-serif;font-size: 15px;background-repeat: no-repeat;background-attachment: fixed;background-size: cover;background-position: center; }`,
);
const body_survey_player = HtmlService.createHtmlOutput(
  `body {flex-grow: 1;color:blue;text-decoration:bold;flex-flow: row wrap;grid-column: 1;grid-row: 1;text-align: center;align-content: flex-start;overflow: auto;}`,
);
const body_unset = HtmlService.createHtmlOutput(
  `body, div, th, td{margin: 0.5px 0.5px 0.5px 0.5px !important; /* Remove default margin */width: 100% !important;}`,
);
const div_oddchances = HtmlService.createHtmlOutput(
  `div #content01 {clear: both;overflow-y: auto;overflow-x: hidden;text-align: center;}`,
);
const figcaption = HtmlService.createHtmlOutput(
  `figcaption {color: white;text-align: center;user-select: none;}`,
);
const footer = HtmlService.createHtmlOutput(
  `footer {clear: both;background-color: #20416c;color: white;padding: 5px 20px;}`,
);
const header = HtmlService.createHtmlOutput(
  `header {background-color:rgba(255,255,255,.1);color: #a7e1ee;font-size: smaller;}`,
);
const header_h1 = HtmlService.createHtmlOutput(
  `header h1 {font-family: "Montserrat", cursive;margin-left: 15px;}`,
);
const html = HtmlService.createHtmlOutput(`html,body {height: 100%;}`);
const img = HtmlService.createHtmlOutput(`img {width: 160px;cursor: pointer;}`);
const link_all = HtmlService.createHtmlOutput(
  `a {text-decoration: none;color: #5a5a5a;}`,
);
const link_active = HtmlService.createHtmlOutput(
  `a:hover,a:active {color: white !important;text-decoration: none !important;}`,
);
const link_visited = HtmlService.createHtmlOutput(
  `a:link,a:visited {color: black !important;}`,
);
const list_item_link = HtmlService.createHtmlOutput(`li a {color: white;}`);
const main = HtmlService.createHtmlOutput(
  `main {height: 92%;margin-top: 10px;width: 100%;margin-bottom: 10px;}`,
);
const nav = HtmlService.createHtmlOutput(
  `nav {background-color: #20416c;padding: 10px 2%;justify-content: space-between;margin-top: 1px;box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);background: #fff;position: stactic;top: 0;z-index: 10;}`,
);
const nav_oddchances = HtmlService.createHtmlOutput(`nav {font-size: 30px;}`);
const section = HtmlService.createHtmlOutput(
  `section {background-color: #bbbbbb;margin-top: 10px;padding: 5px;}`,
);
const table_display = HtmlService.createHtmlOutput(
  `table {width: 100% !important; /* Example: set table width */border-collapse: separate !important; /* Override default collapse if present */border-spacing: 0 !important; /* Remove spacing between cells */}`,
);
const table_display_unset = HtmlService.createHtmlOutput(
  `table, thead, tbody, tr, th, td {all: unset !important; /* This is a powerful reset, removing all inherited and default styles */display: block !important; /* Treat all table elements as block-level to remove table-specific layout */}`,
);
const tableSummary_table = HtmlService.createHtmlOutput(
  `table.summary-table {text-align: right;}`,
);
const tbodySummary_table_tdNth_child1 = HtmlService.createHtmlOutput(
  `tbody.summary-table td:nth-child(1) {width: 277px;}`,
);
const tbodySummary_table_tdNth_child2 = HtmlService.createHtmlOutput(
  `tbody.summary-table td:nth-child(2) {width: 75px;}`,
);
const tbodySummary_table_tdNth_child3 = HtmlService.createHtmlOutput(
  `tbody.summary-table td:nth-child(3) {width: 25px;}`,
);
const td_display = HtmlService.createHtmlOutput(
  `vertical-align: top;text-align: left;flex-flow: row wrap;grid-column: 1;grid-row: 1;align-content: flex-start;z-index: 0;height: 100%;overflow: auto;`,
);
const th_description = HtmlService.createHtmlOutput(
  `th.description {width: 180px;text-align: left;}`,
);
const th_price = HtmlService.createHtmlOutput(`th.price {width: 75px;}`);
const tr_display = HtmlService.createHtmlOutput(
  `tr {display: flex; /* Use flexbox for rows for more control */width: 100%;justify-content: space-around;overflow: auto;border-radius: 3%;max-width: 100%;height: auto;margin: auto;}`,
);
const website = HtmlService.createHtmlOutput(
  `* {box-sizing: border-box;margin: 0;padding: 0;font-family: "Roboto", sans-serif;}`,
);
const banner_page_header = HtmlService.createHtmlOutput(
  `.banner {background-color: #11233b;color: white;padding: 10px 20px;width: 100%;}`,
);
const banner_img = HtmlService.createHtmlOutput(
  `.banner img {width: 100%;border-radius: 8px;}`,
);
const boiler_footer = HtmlService.createHtmlOutput(
  `.boiler-footer {clear: none;margin-top: 10px;height: 92%;}`,
);
const company_info = HtmlService.createHtmlOutput(
  `.company-info {margin-top: 5px;}`,
);
const container = HtmlService.createHtmlOutput(
  `.container {background: #f9f9f9;padding-left: 17%;padding-right: 2%;padding-top: 20px;padding-bottom: 20px;}`,
);
const contentSection = HtmlService.createHtmlOutput(
  `.content-section {padding: 20px;border: 1px solid #eee;margin-bottom: 20px}`,
);
const datepicker_day = HtmlService.createHtmlOutput(
  `.datepicker-day-button {color: #424242 !important; /* A dark gray. Using !important ensures it overrides Materialize defaults and your other styles. */}`,
);
const datepicker_table_td_istoday = HtmlService.createHtmlOutput(
  `.datepicker-table td.is-today .datepicker-day-button {color: #ff9800 !important; /* Example: orange for today's date */}`,
);
const datepicker_table_td_isselected = HtmlService.createHtmlOutput(
  `.datepicker-table td.is-selected .datepicker-day-button {color: white !important; /* Keep white if the selected background is dark */}`,
);
const datepicker_display_table = HtmlService.createHtmlOutput(
  `.datepicker-container table {/* Re-establish standard table display */display: table !important;width: 100% !important; /* Ensure it takes full width of its container */border-collapse: collapse !important; /* Standard table styling */}`,
);
const datepicker_display_thead = HtmlService.createHtmlOutput(
  `.datepicker-container thead {display: table-header-group !important;}`,
);
const datepicker_display_tbody = HtmlService.createHtmlOutput(
  `.datepicker-container tbody {display: table-row-group !important;}`,
);
const datepicker_display_tr = HtmlService.createHtmlOutput(
  `.datepicker-container tr {display: table-row !important;}`,
);
const datepicker_color =
  HtmlService.createHtmlOutput(`.datepicker-container .datepicker-day-button {color: #424242 !important;
 }`);
const datepicker_display = HtmlService.createHtmlOutput(
  `.datepicker-container th,.datepicker-container td {/* Re-establish table cell display */display: table-cell !important;/* Undo flex and reset padding/margin/border that your global rules removed */flex: none !important; /* Crucial to undo flex: 1 */padding: 0 !important; /* Materialize has its own padding for day buttons, often 0 for cell and padding on button */margin: 0 !important;border: none !important;vertical-align: middle !important; /* Standard for cells */text-align: center !important; /* Days of week and numbers are typically centered */}`,
);
const dotted_border = HtmlService.createHtmlOutput(
  `.dotted-border {border-bottom: dotted 2px;}`,
);
const fa_trash_canHover = HtmlService.createHtmlOutput(
  `.fa-trash-can:hover {transform: scale(1.2);}`,
);
const flex_column = HtmlService.createHtmlOutput(
  `.flex-column {display: flex;flex-direction: column;}`,
);
const flex_div = HtmlService.createHtmlOutput(
  `.flex-div {display: flex;align-items: center;}`,
);
const flex_row = HtmlService.createHtmlOutput(
  `.flex-row {display: flex;flex-direction: row;}`,
);
const float_left = HtmlService.createHtmlOutput(`.float-left {float: left;}`);
const float_right = HtmlService.createHtmlOutput(
  `.float-right {float: right;}`,
);
const grid = HtmlService.createHtmlOutput(
  `.grid {display: grid;grid-template-columns: repeat(auto-fit,minmax(500px, 1fr));grid-column-gap: 16px;grid-row-gap: 30px;}`,
);
const large_container = HtmlService.createHtmlOutput(
  `.large-container {padding-left: 7%;}`,
);
const list_container = HtmlService.createHtmlOutput(
  `.list-container {margin-top: 15px;}`,
);
const menu = HtmlService.createHtmlOutput(
  `.menu {flex-flow: row wrap;grid-column: 1;grid-row: 1;align-content: flex-start;z-index: 0;height: 100%;overflow: auto;}`,
);
const menu_img = HtmlService.createHtmlOutput(
  `.menu-img {border-radius: 50%;max-width: 100%;height: auto;display: block;margin: auto;}`,
);
const menu_item = HtmlService.createHtmlOutput(
  `.menu-item {flex-flow:column nowrap;flex-basis: auto;flex-shrink: 0;margin: 5px;background: rgba(255, 255, 255, .05);width: 150px;}`,
);
const menu_itemHover = HtmlService.createHtmlOutput(
  `.menu-item:hover>.menu-img {transform: scale(1.03);}`,
);
const menu_payment = HtmlService.createHtmlOutput(
  `.menu-payment {background: rgba(255, 255, 255, .05);flex-grow: 1;z-index: 0;}`,
);
const nav_left_menu_ico = HtmlService.createHtmlOutput(
  `.nav-left .menu-icon {width: 22px;margin-right: 25px;}`,
);
const nav_left_logo = HtmlService.createHtmlOutput(
  `.nav-left .logo {width: 30px;}`,
);
const nav_middle = HtmlService.createHtmlOutput(``);
const nav_middle_mic_ico = HtmlService.createHtmlOutput(
  `.nav-middle .mic-icon {width: 16px;}`,
);
const nav_middle_search_box = HtmlService.createHtmlOutput(
  `.nav-middle .search-box {border: 1px solid #ccc;margin-right: 15px;padding: 8px 12px;border-radius: 25px;}`,
);
const nav_middle_search_box_img = HtmlService.createHtmlOutput(
  `.nav-middle .search-box img {width: 15px;}`,
);
const nav_middle_search_box_input = HtmlService.createHtmlOutput(
  `.nav-middle .search-box input {width: 50%;border: 0;outline: 0;background: transparent;}`,
);
const nav_right_img = HtmlService.createHtmlOutput(
  `.nav-right img {width: 25px;margin-right: 25px;}`,
);
const nav_right_user_ico = HtmlService.createHtmlOutput(
  `.nav-right .user-icon {width: 35px;border-radius: 50%;margin-right: 0;}`,
);
const order = HtmlService.createHtmlOutput(
  `.order {background-color: white;flex: 0 0 440px;overflow: auto;}`,
);
const order_menu_payment = HtmlService.createHtmlOutput(
  `.order,.menu-payment {border: solid .5px;border-radius: 10px;margin: 0px 10px 5px 10px;height: 100%;max-height: 100%;}`,
);
const quantity_price_subtotal_delete = HtmlService.createHtmlOutput(
  `.quantity,.price,.subtotal,.delete {text-align: right;}`,
);
const receipt = HtmlService.createHtmlOutput(
  `.receipt {border: solid .5px;margin: 10px 15px 5px 15px;box-shadow: 3px 3px 2px rgb(3,3,3);user-select: none;flex-grow: 1;}`,
);
const receipt_company_info_receipt_footer = HtmlService.createHtmlOutput(
  `.receipt,.company-info,.receipt-footer {align-items: center;}`,
);
const receipt_details = HtmlService.createHtmlOutput(
  `.receipt-details {margin-top: 10px;flex-grow: 1;}`,
);
const receipt_footer = HtmlService.createHtmlOutput(
  `.receipt-footer {padding-top: 20px;}`,
);
const receipt_blue_table_unset = HtmlService.createHtmlOutput(
  `.receipt table.striped.centered.highlight.responsive-table.grey.z-depth-5 table {all: unset !important;display: block !important;}`,
);
const receipt_unset = HtmlService.createHtmlOutput(
  `.receipt table.striped.centered.highlight.responsive-table.red.z-depth-5 table tr,.receipt table.striped.centered.highlight.responsive-table.blue.z-depth-5 table td {all: unset !important;display: block !important; /* Or display: flex for rows, display: block for cells */}`,
);
const responsiveSection = HtmlService.createHtmlOutput(
  `.responsive-section .container {width: 100%;padding: 0px}`,
);
const shortcuts_links_a_img = HtmlService.createHtmlOutput(
  `.shortcut-links a img {width: 20px;margin-right: 20px;}`,
);
const shortcuts_links_a = HtmlService.createHtmlOutput(
  `.shortcut-links a {display: flex;align-items: center;margin-bottom; 20px; width: fit-content;flex-wrap: wrap;}`,
);
const shortcuts_links_a_first_child = HtmlService.createHtmlOutput(
  `.shortcut-links a:first-child {color: #ed3833;}`,
);
const sidebar = HtmlService.createHtmlOutput(
  `.sidebar {background: #fff;width: 100%;height: 100vh;position: fixed;top: 0;padding-left: 2%;padding-top: 80px}`,
);
const sidebar_hr = HtmlService.createHtmlOutput(
  `.sidebar hr {border: 0;height: 1px;background: #ccc;width: 85%;}`,
);
const small_sidebar = HtmlService.createHtmlOutput(
  `.small-sidebar {width: 5%;}`,
);
const small_sidebar_link_paragraph = HtmlService.createHtmlOutput(
  `.small-sidebar a p {display: none;}`,
);
const small_sidebar_h3 = HtmlService.createHtmlOutput(
  `.small-sidebar h3 {display: none;}`,
);
const small_sidebar_hr = HtmlService.createHtmlOutput(
  `.small-sidebar hr {width: 50%;margin-bottom: 25px;}`,
);
const socials = HtmlService.createHtmlOutput(`.socials {width: 100%;}`);
const static_fix = HtmlService.createHtmlOutput(
  `.static-fix {position: sticky;}`,
);
const subscribed_list_h3 = HtmlService.createHtmlOutput(
  `.subscribed-list h3 {font-size: 13px;margin: 20px 0;color: #5a5a5a;}`,
);
const subscribed_list_link = HtmlService.createHtmlOutput(
  `.subscribed-list a {display: flex;align-items: center;margin-bottom: 20px;width: fit-content;flex-wrap: wrap;}`,
);
const subscribed_list_link_img = HtmlService.createHtmlOutput(
  `.subscribed-list a img {width: 25px;border-radius: 50%;margin-right: 20px;}`,
);
const toolbar = HtmlService.createHtmlOutput(
  `.toolbar {flex: 0 0 60px;justify-content: space-around;align-items: center;border: solid .5px;border-radius: 10px;margin: 0px 15px 5px 15px;}`,
);
const toolbar_icon = HtmlService.createHtmlOutput(
  `.toolbar-icon {font-size: 2rem;}`,
);
const toolbar_iconHover = HtmlService.createHtmlOutput(
  `.toolbar-icon:hover {transform: scale(1.2);}`,
);
const vid_info = HtmlService.createHtmlOutput(
  `.vid-info {color: #5a5a5a;font-size: 13px;}`,
);
const vid_info_link = HtmlService.createHtmlOutput(
  `.vid-info a {color: #000;font-weight: 600;display: block;margin-bottom: 5px;}`,
);
const vid_list_thumbnail = HtmlService.createHtmlOutput(
  `.vid-list .thumbnail {width: 100%;border-radius: 5px;}`,
);
const vid_list_flex_div = HtmlService.createHtmlOutput(
  `.vid-list .flex-div {align-items: flex-start;margin-top: 7px;}`,
);
const vid_list_flex_div_img = HtmlService.createHtmlOutput(
  `.vid-list .flex-div img {width: 35px;margin-right: 10px;border-radius: 50%;}`,
);
const barcode = HtmlService.createHtmlOutput(
  `#barcode {font-family: "Libre Barcode 128", cursive;font-size: 70px;margin-top: 10px;}`,
);
const company_name = HtmlService.createHtmlOutput(
  `#company-name {font-size: 1.5rem;}`,
);
const company_phone = HtmlService.createHtmlOutput(
  `#company-phone {font-size: 1.25rem;}`,
);
const jsoninput = HtmlService.createHtmlOutput(
  `#jsonInput {display: none;width: 100%;height: 8vh; /* Or whatever height you need */margin:10px auto;padding: 0px;box-sizing: border-box; /* Include padding in width/height */border:1px solid #ccc;font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', 'monospace'; /* Monospaced font is crucial */font-size: 14px;line-height: 1.5; /* Good for readability */white-space:pre-wrap;text-align:left;background-color: #282c34; /* Dark background common for code editors */color: #abb2bf; /* Light text color for contrast */resize: vertical; /* Allow vertical resizing, or 'none' to disable */overflow: auto; /* Enable scrolling if content exceeds height *//* Focus state */outline: none; /* Remove default blue outline on focus */box-shadow: 0 0 0 2px rgba(97, 175, 239, 0.5); /* Custom focus highlight */transition: box-shadow 0.2s ease-in-out;}`,
);
const indexbeta = HtmlService.createHtmlOutput(
  `#indexBeta,#player1,#player2 {/* Basic layout and appearance */width: 100%;height: 80vh; /* Or whatever height you need */font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', 'monospace'; /* Monospaced font is crucial */font-size: 14px;line-height: 1.5; /* Good for readability */margin:10px auto;white-space:pre-wrap;text-align:left;padding: 0px;box-sizing: border-box; /* Include padding in width/height */border: 1px solid #333;background-color: #282c34; /* Dark background common for code editors */color: #abb2bf; /* Light text color for contrast */resize: vertical; /* Allow vertical resizing, or 'none' to disable */overflow: auto; /* Enable scrolling if content exceeds height *//* Hide default textarea scrollbar (optional, but common for custom scrollbars) *//* If you hide this, you'd need to implement custom scrollbars with JavaScript *//* -webkit-overflow-scrolling: touch; */ /* For smooth scrolling on touch devices *//* &::-webkit-scrollbar { display: none; } *//* & { -ms-overflow-style: none; scrollbar-width: none; } *//* Focus state */outline: none; /* Remove default blue outline on focus */box-shadow: 0 0 0 2px rgba(97, 175, 239, 0.5); /* Custom focus highlight */transition: box-shadow 0.2s ease-in-out;}`,
);
const indexbeta_color_boxshadow = HtmlService.createHtmlOutput(
  `#indexBeta,#jsonInput,#player1,#player2:focus {box-shadow: 0 0 0 2px rgba(97, 175, 239, 0.8); /* More prominent on focus */}`,
);
const indexbeta_color = HtmlService.createHtmlOutput(
  `#indexBeta,#jsonInput,#player1,#player2:placeholder {color: #616e7f;}`,
);
const seperator2 = HtmlService.createHtmlOutput(
  `/* ----------------------------Menu-Payment-------------------------- */`,
);
const seperator1 = HtmlService.createHtmlOutput(
  `/* -----------------------------------ORDER--------------------------- */`,
);
const logo = HtmlService.createHtmlOutput(
  `https://flewis21.github.io/foobar/images/logo.jpg`,
);
const seaIcn = HtmlService.createHtmlOutput(
  `https://flewis21.github.io/foobar/images/user.jpg`,
);
const materializeJs = HtmlService.createHtmlOutput(
  `<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>`,
);
const luxonJs = HtmlService.createHtmlOutput(
  `<script src="https://cdnjs.cloudflare.com/ajax/libs/luxon/3.0.1/luxon.min.js" integrity="sha512-6ZJuab/UnRq1muTChgrVxJhSgygmL2GMLVmSJN7pcBEqJ1dWPbqN9CiZ6U3HrcApTIJsLnMgXYBYgtVkJ8fWiw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>`,
);
const tabulatorJs = HtmlService.createHtmlOutput(
  `<script type="text/javascript" src="https://unpkg.com/tabulator-tables@5.2.3/dist/js/tabulator.min.js"></script>`,
);
const jsQuery = HtmlService.createHtmlOutput(
  `<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>`,
);
const div_query = HtmlService.createHtmlOutput(
  `<script>document.querySelector("div").setAttribute("style", "color: blue; text-align: center;");</script>
`);
const body_query = HtmlService.createHtmlOutput(
  `<script>document.querySelector("body").setAttribute("style", "background-color: amber;background: 282828;");</script>
`);
const iframe_query = HtmlService.createHtmlOutput(
  `<script>document.querySelector("iframe").setAttribute("style", "color: blue; text-align: center;");</script>
`);
const domain_lookup = HtmlService.createHtmlOutput(
  `
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <script>
    function serverSide(func, args) {
      return new Promise((resolve, reject) => {
        google.script.run
        .withSuccessHandler(result => {
            resolve(result)})
        .withFailureHandler(error => {
            reject(error)})
        .runBoilerplate(func, args)
      });
    }
    function lookupDomain(searchTerm) {
      serverSide("lookupDomain", [searchTerm])
        .then(results => {
          console.log("Lookup results:", results);
          displaySearchResults(results); // Display results
        })
        .catch(error => {
          console.error("Error looking up domain:", error);
          $("#errorMessage").text(error); // Display error message
        });
    }

    $("#lookupButton").click(function() {
      const searchTerm = $("#searchTerm").val();
      lookupDomain(searchTerm);
    });
  </script>
`);
const busy_calendar = HtmlService.createHtmlOutput(
  `
    <script>
      function serverSide(func, args) {
        return new Promise((resolve, reject) => {
          google.script.run
          .withSuccessHandler(result => {
              resolve(result)})
          .withFailureHandler(error => {
              console.log(document.getElementById("test").innerHTML);
              reject(error)})
          .runBoilerplate(func, args)
        });
      }
      document.addEventListener("DOMContentLoaded", function() {
        // mod the array
        let timePicker = document.querySelectorAll(".prefTime");
        M.Timepicker.init(timePicker, { 
          defaultTime: "now" ,
        });
        serverSide("busyDates", [])
          .then((response) => { 
            // Rename 'disabledDays' to 'response' or 'payload' to avoid confusion
            // Access the actual array from the 'data' property
            let disabledDays = [];
            if (response && response.type === "object" && Array.isArray(response.data)) {
              disabledDays = response.data;
            } else {
              console.warn("Expected an object with an array in 'data' from busyDates, received:", response);
              // Fallback to empty array if the structure is not as expected
              disabledDays = [];
            }
            let datePicker = document.querySelectorAll(".prefDate");
            M.Datepicker.init(datePicker, {
              defaultDate: new Date() - new Date(new Date()).toLocaleDateString(),
              setDefaultDate: true,
              minDate: new Date(),
              disableDayFn: 
                function (day) {
                  return disabledDays.indexOf(day.valueOf()) > -1;
                },
            });
          })
          .catch((error) => {
            console.log(error);
          });
      });
    </script>
`);
const key_press = HtmlService.createHtmlOutput(
  `
  <script>
    var busa = document.getElementById("artiicleIndex");
    var busx = document.getElementById("loadingLab");
    var busc = document.getElementById("contentDiv");
    function serverSide(func, args) {
      return new Promise((resolve, reject) => {
        google.script.run
        .withSuccessHandler(result => {
            resolve(result)})
        .withFailureHandler(error => {
            reject(error)})
        .runBoilerplate(func, args)
      });
    }
    busa.addEventListener('keypress', function(event) {
      // If the user preses the "Enter" key on the keyboard. 
      if (event.key === "Enter")  {
        const strValue = busa.value;
        busx.innerText = "... waiting for " + strValue;
        serverSide("jFund", strValue)
        .then((article) => {
          if (article) {
            // User clicked "No" or X in the title bar.
            busx.innerText = ""
            busc.innerHTML = article;}})
        .catch((er) => {
          console.log(er)
          busx.innerText = JSON.stringify(er)})
        busa.value = ""}})
  </script>  
`);
const domain_submit = HtmlService.createHtmlOutput(
  `
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <script>
    function serverSide(func, args) {
      return new Promise((resolve, reject) => {
        google.script.run
        .withSuccessHandler(result => {
            resolve(result)})
        .withFailureHandler(error => {
            reject(error)})
        .runBoilerplate(func, args)
      });
    }
    function submitDomain(formData) {
      serverSide("submitDomain", [formData])
        .then(result => {
          console.log("Server response:", result);
          $("#successMessage").text(result); // Display success message
        })
        .catch(error => {
          console.error("Error submitting domain:", error);
          $("#errorMessage").text(error); // Display error message
        });
    }

    $("#domainForm").submit(function(event) {
      event.preventDefault();
      const formData = $(this).serializeObject();
      submitDomain(formData); // Call the function
    });
  </script>
`);
const document_ready_select = HtmlService.createHtmlOutput(
  `
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <script>
    function serverSide(func, args) {
      return new Promise((resolve, reject) => {
        google.script.run
        .withSuccessHandler(result => {
            resolve(result)})
        .withFailureHandler(error => {
            reject(error)})
        .runBoilerplate(func, args)
      });
    }
    $(document).ready(function() {
      $('select').formSelect();

      $('#templateSelect').change(function() {
        var selectedTemplateUrl 
          = $(this).val();
          if (selectedTemplateUrl) {
            $("#editorFrame").prop("src", selectedTemplateUrl); // Load template in iframe
            $("#myForm").show(); // Show the form only after template is loaded.
            $("#myForm").empty(); // Clear previous form fields.
            // 2. Dynamically create form fields based on template placeholders (requires server-side)
            serverside("getPlaceholders",[selectedTemplateUrl]).then((placeholders)=>{
              placeholders.forEach(function(placeholder) {
                var fieldName 
                  = placeholder.replace(/{{|}}/g, ''); // Extract field name
                $("#myForm").append("<label for='" + fieldName + "'>" + fieldName + ":</label><br>");
                $("#myForm").append("<input type='text' name='" + fieldName + "'><br>");
              });
              $("#myForm").append("<button type='submit'>Submit</button>");


              $("#myForm").submit(function(event) {
                event.preventDefault();

                var formData 
                  = $(this).serializeObject();
                serverside("processFormData",[formData, selectedTemplateUrl]).then((newDocUrl)=>{
                  $("#result").html("<p>Document created. <a href='" + newDocUrl + "' target='_blank'>Open Document</a></p>");
                }).catch((error)=>{
                  console.error("Error:", error);
                  $("#result").html("<p>Error creating document. Please check the logs.</p>");
                })

              });

            }).catch((er)=>{alert(er);console.error("Error:", er);return "Error" + er})}else {
          $("#editorFrame").prop("src", "");
          $("#myForm").hide();}
      });

      $.fn.serializeObject = function() { // jQuery plugin for serializing form data
        var o 
          = {};
        var a 
          = this.serializeArray();
        $.each(a, function() {
          if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
              o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
          } else {
            o[this.name] = this.value || '';
          }
        });
        return o;
      };
    });
  </script>
`);
const google_script_run_promise = HtmlService.createHtmlOutput(
  `
  <script>
    function serverSide(func, args) {
      return new Promise((resolve, reject) => {
        google.script.run
        .withSuccessHandler(result => {
            resolve(result)})
        .withFailureHandler(error => {
            reject(error)})
        .runBoilerplate(func, args)
      });
    }
  </script>
`);
const collapse_menu = HtmlService.createHtmlOutput(
  `
  <script>
    var menuIcon = document.querySelector(".menu-icon");
    var sidebar = document.querySelector(".sidebar");
    var container = document.querySelector(".container");
    menuIcon.onclick = function () {
      sidebar.classList.toggle("small-sidebar");
      container.classList.toggle("large-container");
    }
  </script>
`);
const func_clicked = HtmlService.createHtmlOutput(
  ` 
  <script>
    document.getElementById('func').addEventListener('change', funcClicked)
    function funcClicked() {
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
        if (typeof args !== "undefined") {
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
      })();
    }
  </script>
`);
const auto_video = HtmlService.createHtmlOutput(
  `
    <script>
      function serverside(func, args) {
        return new Promise((resolve, reject) => {
          google.script.run
          .withSuccessHandler((result) => {
              resolve(result)})
          .withFailureHandler((error) => {
            alert("Error handling: ")
              // console.log(error)
              reject(error)})
          .runBoilerplate(func, args)})};

      function debounce(func, delay) {
        let timeout;
        return function(...args) {
          const context = this;
          clearTimeout(timeout);
          timeout = setTimeout(() => func.apply(context, args), delay);
        };
      }

      function setupAutocomplete(inputId, suggestionsDivId, columnName) {

        // Client-side code
        const localSuggestionsCache = {};
        const input = document.getElementById(inputId);
        const suggestionsDiv = document.getElementById(suggestionsDivId);

        if (!input || !suggestionsDiv) {
          console.error("Input element " + inputId + " or suggestions div " + suggestionsDivId + " not found for autocomplete setup.");
          return;
        }
        
        serverside('getVI', [])
          .then((response) => { 
            // Rename 'fullList' to 'response' or 'payload' to avoid confusion
            // Access the actual array from the 'data' property
            let fullList = {};
            if (response && response.type === "object") {
              fullList = response.data;
            } else {
              console.warn("Expected an object with an array in 'data' from chaseFunction, received:", response);
              // Fallback to empty array if the structure is not as expected
              fullList = {};
            }
            localSuggestionsCache[columnName] = fullList
            // console.log('Successfully fetched full list for', columnName);
            // console.log('chaseFunction, [' + columnName + ']:' + JSON.stringify(localSuggestionsCache[columnName][0]))
          })
          .catch(error => {
            console.error("Error fetching address suggestions for " + inputId + ":", error);
            suggestionsDiv.innerHTML = '<div>Error fetching suggestions.</div>';
          });
          
        const fetchSuggestions = debounce((query) => {
          if (query.length < 3) {
            suggestionsDiv.innerHTML = '';
            return;
          }
          
          // Filter the local list instead of making a server call
          const localList = localSuggestionsCache[columnName] || [];
          // console.log("localSuggestionsCache[columnName] || [] ", localList)
          const suggestions = localList.filter(item => 
            String(item).toLowerCase().includes(query.toLowerCase())
          );
          
          suggestionsDiv.innerHTML = '';
          if (suggestions && suggestions.length > 0) {
            suggestions.forEach(suggestion => {
              // console.log(suggestion)
              const div = document.createElement('div');
              div.textContent = suggestion;
              div.addEventListener('click', () => {
                input.value = suggestion;
                suggestionsDiv.innerHTML = '';
              });
              suggestionsDiv.appendChild(div);
            });
          }

        }, 300);
        
        if (input && suggestionsDiv) {
          input.addEventListener('input', (event) => {
            fetchSuggestions(event.target.value);
          });

          document.addEventListener('click', (event) => {
            if (!input.contains(event.target) && !suggestionsDiv.contains(event.target)) {
              suggestionsDiv.innerHTML = '';
            }
          });

          input.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') {
                suggestionsDiv.innerHTML = '';
                input.blur();
            }
          });

        } else {
            console.error("Input element '" + inputId + "' or suggestions div '" + suggestionsDivId + "' not found for autocomplete setup.");
        }
      }
      // Setup Autocomplete
      setupAutocomplete('delAddr', 'delAddrSuggestions', "Delivery Address");
    </script>
`);
const auto_complete = HtmlService.createHtmlOutput(
  `
    <script>
      function debounce(func, delay) {
        let timeout;
        return function(...args) {
          const context = this;
          clearTimeout(timeout);
          timeout = setTimeout(() => func.apply(context, args), delay);
        };
      }

      function setupAutocomplete(inputId, suggestionsDivId, columnName) {

        // Client-side code
        const localSuggestionsCache = {};
        const input = document.getElementById(inputId);
        const suggestionsDiv = document.getElementById(suggestionsDivId);

        if (!input || !suggestionsDiv) {
          console.error("Input element " + inputId + " or suggestions div " + suggestionsDivId + " not found for autocomplete setup.");
          return;
        }
        
        serverside('chaseFunction', [columnName])
          .then((response) => { 
            // Rename 'fullList' to 'response' or 'payload' to avoid confusion
            // Access the actual array from the 'data' property
            let fullList = {};
            if (response && response.type === "object") {
              fullList = response.data;
            } else {
              console.warn("Expected an object with an array in 'data' from chaseFunction, received:", response);
              // Fallback to empty array if the structure is not as expected
              fullList = {};
            }
            localSuggestionsCache[columnName] = fullList
            // console.log('Successfully fetched full list for', columnName);
            // console.log('chaseFunction, [' + columnName + ']:' + JSON.stringify(localSuggestionsCache[columnName][0]))
          })
          .catch(error => {
            console.error("Error fetching address suggestions for " + inputId + ":", error);
            suggestionsDiv.innerHTML = '<div>Error fetching suggestions.</div>';
          });
          
        const fetchSuggestions = debounce((query) => {
          if (query.length < 3) {
            suggestionsDiv.innerHTML = '';
            return;
          }
          
          // Filter the local list instead of making a server call
          const localList = localSuggestionsCache[columnName] || [];
          // console.log("localSuggestionsCache[columnName] || [] ", localList)
          const suggestions = localList.filter(item => 
            String(item).toLowerCase().includes(query.toLowerCase())
          );
          
          suggestionsDiv.innerHTML = '';
          if (suggestions && suggestions.length > 0) {
            suggestions.forEach(suggestion => {
              // console.log(suggestion)
              const div = document.createElement('div');
              div.textContent = suggestion;
              div.addEventListener('click', () => {
                input.value = suggestion;
                suggestionsDiv.innerHTML = '';
              });
              suggestionsDiv.appendChild(div);
            });
          }

        }, 300);
        
        if (input && suggestionsDiv) {
          input.addEventListener('input', (event) => {
            fetchSuggestions(event.target.value);
          });

          document.addEventListener('click', (event) => {
            if (!input.contains(event.target) && !suggestionsDiv.contains(event.target)) {
              suggestionsDiv.innerHTML = '';
            }
          });

          input.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') {
                suggestionsDiv.innerHTML = '';
                input.blur();
            }
          });

        } else {
            console.error("Input element '" + inputId + "' or suggestions div '" + suggestionsDivId + "' not found for autocomplete setup.");
        }
      }
      // Setup Autocomplete
      setupAutocomplete('delAddr', 'delAddrSuggestions', "Delivery Address");
    </script>
`);
const next_clicked_video = HtmlService.createHtmlOutput(
  `
    <script>

      function serverside(func, args) {
        return new Promise((resolve, reject) => {
          google.script.run
          .withSuccessHandler(result => {
              resolve(result)})
          .withFailureHandler(error => {
              reject(error)})
          .runBoilerplate(func, args)
        });
      }
      function debounce(func, delay) {
        let timeout;
        return function(...args) {
          const context = this;
          clearTimeout(timeout);
          timeout = setTimeout(() => func.apply(context, args), delay);
        };
      }

      document.addEventListener("DOMContentLoaded", function() {
        // Client-side code
        const localSuggestionsCache = {};
        const nVid = document.querySelectorAll(".userClickedNext");
        const input = document.querySelectorAll(".prefDate");
        const suggestionsDiv = document.querySelectorAll(".test");
        let fullList = [];

        if (!input || !suggestionsDiv) {
          console.error("Input element " + inputId + " or suggestions div " + suggestionsDivId + " not found for autocomplete setup.");
          return;
        }

        serverside("getVI", [])
          .then((response) => {
            // Rename 'vidIds' to 'response' or 'payload' to avoid confusion
            // Access the actual array from the response
            if (response && typeof response === "object") {
              for (var key in response) {
                // alert(response[key][0]);
                let i = 0;
                let l = response[key].length;
                // alert(l);
                for (i,l;i<l;i++) {
                  let tData = response[key][i];
                  let dLoc =  "https://www.youtube.com/watch?v=";
                  fullList.push(dLoc + tData);
                //   let clVid = tData[i]]
                //   // .replace(/\"/g, "");
                //   alert(cVid);
                }
              }
              // fullList = response.data;
            } else {
              console.warn("Expected an array in response from getVI, received:", response);
              // Fallback to empty array if the structure is not as expected
              fullList = [];
            }
            localSuggestionsCache["allMatches"] = fullList;
            // alert("vidIds = " + JSON.stringify(localSuggestionsCache["allMatches"]));
            // window.location.href = JSON.stringify(localSuggestionsCache["allMatches"][Math.floor(Math.random() * localSuggestionsCache["allMatches"].length)]);
            // window.open(JSON.stringify(localSuggestionsCache["allMatches"][Math.floor(Math.random() * localSuggestionsCache["allMatches"].length)]), "_top")
            const confirmation = window.confirm(
              "Click OK to continue to the destination.",
            );
            if (confirmation) {
              var linkFollow = document.createElement("a");
              linkFollow.href = localSuggestionsCache["allMatches"][Math.floor(Math.random() * localSuggestionsCache["allMatches"].length)];
              linkFollow.id = "linkFOLLOW";
              linkFollow.target = "_self";
              linkFollow.rel = "noopener noreferrer";
              document.body.appendChild(linkFollow);
              document.getElementById("linkFOLLOW").click();
              document.getElementById("linkFOLLOW").remove();
            }
          })
          .catch(error => {
            console.error("Error fetching address suggestions for " + inputId + " :", error);
            suggestionsDiv.innerHTML = '<div>Error fetching suggestions.</div>';
          });
          
        const fetchSuggestions = debounce((query) => {
          if (query.length < 3) {
            suggestionsDiv.innerHTML = '';
            return;
          }
          
          // Filter the local list instead of making a server call
          const localList = localSuggestionsCache[columnName] || [];
          // console.log("localSuggestionsCache[columnName] || [] ", localList)
          const suggestions = localList.filter(item => 
            String(item).toLowerCase().includes(query.toLowerCase())
          );
          
          suggestionsDiv.innerHTML = '';
          if (suggestions && suggestions.length > 0) {
            suggestions.forEach(suggestion => {
              // console.log(suggestion)
              const div = document.createElement('div');
              div.textContent = suggestion;
              div.addEventListener('click', () => {
                input.value = suggestion;
                suggestionsDiv.innerHTML = '';
              });
              suggestionsDiv.appendChild(div);
            });
          }

        }, 300);
        
        if (input && suggestionsDiv) {
          input.addEventListener('input', (event) => {
            fetchSuggestions(event.target.value);
          });

          document.addEventListener('click', (event) => {
            if (!input.contains(event.target) && !suggestionsDiv.contains(event.target)) {
              suggestionsDiv.innerHTML = '';
            }
          });

          input.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') {
                suggestionsDiv.innerHTML = '';
                input.blur();
            }
          });

        } else {
            console.error("Input element '" + inputId + "' or suggestions div '" + suggestionsDivId + "' not found for autocomplete setup.");
        }


      });
    </script>
`);
const next_clicked = HtmlService.createHtmlOutput(
  `
    <script>
      function serverside(func, args) {
        return new Promise((resolve, reject) => {
          google.script.run
          .withSuccessHandler(result => {
              resolve(result)})
          .withFailureHandler(error => {
              reject(error)})
          .runBoilerplate(func, args)
        });
      }
      document
        .querySelectorall("userClickedNext")
        .addEventListener("click", nextFunc);
      function nextFunc() {
        serverside("getVI").then((drop) => {
          var rndNumDrop = Math.floor(Math.random() * Math.floor(drop.length));
          var rndFunc = drop[rndNumDrop];
          localStorage.setItem("gsSearch", rndFunc);
          console.log(rndFunc + "...");
          document.getElementById("template").innerHTML =
            "waiting for nextFunc: " + rndFunc + "...";
          serverside(rndFunc)
            .then((droplet) => {
              document.getElementById("template").innerHTML =
                arguments.callee.name + "\n" + rndFunc + "(" + droplet + ")";
              // alert(arguments.callee.name + "\n" + rndFunc + "(" + droplet + ")");
              document.getElementById("template").innerHTML =
                arguments.callee.name + "\ndroplet.length = " + droplet.length;
              // alert(
              //   arguments.callee.name + "\ndroplet.length = " + droplet.length,
              // );
              if (droplet.length === 99) {
                serverside("seoCapital", droplet).then((myFile) => {
                  document.getElementById("template").innerHTML =
                    rndFunc + "(" + myFile + ")";
                  // alert(rndFunc + "(" + myFile + ")");
                  if (
                    myFile.length === 99 ||
                    myFile.length === 86 ||
                    myFile.length === 101 ||
                    myFile.length === 112
                  ) {
                    // console.log(cChange)
                    var linkFollow = document.createElement("a");
                    linkFollow.href = myFile + "?func=" + rndFunc;
                    linkFollow.id = "linkFOLLOW";
                    linkFollow.target = "_blank";
                    document.body.appendChild(linkFollow);
                    document.getElementById("linkFOLLOW").click();
                    document.getElementById("linkFOLLOW").remove();
                  } else {
                    document.getElementById("template").innerHTML =
                      JSON.stringify(myFile);
                  }
                });
              } else {
                document.getElementById("template").innerHTML =
                  arguments.callee.name +
                    "\n" +
                    droplet.length +
                    " is not the required length",;
                // alert(
                //   arguments.callee.name +
                //     "\n" +
                //     droplet.length +
                //     " is not the required length",
                // );
                serverside("getScriptUrl")
                  .then((cChange) => {
                    console.log(
                      arguments.callee.name +
                        "\n" +
                        typeof cChange +
                        " with length = " +
                        cChange.length,
                    );
                    if (cChange.length === 112 || cChange.length === 86) {
                      // console.log(cChange)
                      const confirmation = window.confirm(
                        "Click OK to continue to the destination.",
                      );
                      if (confirmation) {
                        var linkFollow = document.createElement("a");
                        linkFollow.href = cChange + "?func=" + rndFunc;
                        linkFollow.id = "linkFOLLOW";
                        linkFollow.target = "_blank";
                        linkFollow.rel = "noopener noreferrer";
                        document.body.appendChild(linkFollow);
                        document.getElementById("linkFOLLOW").click();
                        document.getElementById("linkFOLLOW").remove();
                      }
                    } else {
                      var docWnd = document.getElementById("template");
                      docWnd.innerHTML = cChange;
                    }
                  })
                  .catch((er) => {
                    document.getElementById("template").innerHTML =
                      arguments.callee.name +
                        "\n" +
                        rndFunc +
                        " error(" +
                        er +
                        ")";
                    // alert(
                    //   arguments.callee.name +
                    //     "\n" +
                    //     rndFunc +
                    //     " error(" +
                    //     er +
                    //     ")",
                    // );
                    console.log(arguments.callee.name + "\n" + er);
                    document.getElementById("template").innerHTML =
                      JSON.stringify(er);
                  });
              }
            })
            .catch((er) => {
              document.getElementById("template").innerHTML =
                arguments.callee.name + "\n" + rndFunc + " error(" + er + ")";
              // alert(
              //   arguments.callee.name + "\n" + rndFunc + " error(" + er + ")",
              // );
              serverside("getScriptUrl")
                .then((cChange) => {
                  console.log(
                    arguments.callee.name +
                      "\n" +
                      typeof cChange +
                      " with length = " +
                      cChange.length,
                  );
                  if (cChange.length === 112 || cChange.length === 86) {
                    // console.log(cChange)
                    const confirmation = window.confirm(
                      "Click OK to continue to the destination.",
                    );
                    if (confirmation) {
                      var linkFollow = document.createElement("a");
                      linkFollow.href = cChange + "?func=" + rndFunc;
                      linkFollow.id = "linkFOLLOW";
                      linkFollow.target = "_blank";
                      linkFollow.rel = "noopener noreferrer";
                      document.body.appendChild(linkFollow);
                      document.getElementById("linkFOLLOW").click();
                      document.getElementById("linkFOLLOW").remove();
                    }
                  } else {
                    var docWnd = document.getElementById("template");
                    docWnd.innerHTML = cChange;
                  }
                })
                .catch((er) => {
                  document.getElementById("template").innerHTML =
                    arguments.callee.name + "\n" + rndFunc + " error(" + er + ")";
                  // alert(
                  //   arguments.callee.name + "\n" + rndFunc + " error(" + er + ")",
                  // );
                  console.log(arguments.callee.name + "\n" + er);
                  document.getElementById("template").innerHTML =
                    JSON.stringify(er);
                });
            });
        });
      }
    </script>
`);
const again_clicked = HtmlService.createHtmlOutput(
  `
  <script>
    function serverside(func, args) {
      return new Promise((resolve, reject) => {
        google.script.run
        .withSuccessHandler(result => {
            resolve(result)})
        .withFailureHandler(error => {
            reject(error)})
        .runBoilerplate(func, args)
      });
    }
    document
      .getElementById("userClickedAgain")
      .addEventListener("click", againFunc);
    function againFunc() {
      againCap = localStorage.getItem("gsSearch");
      document.getElementById("template").innerHTML =
        "waiting for againFunc: " + againCap + "...";
      serverside(againCap)
        .then((droplet) => {
          document.getElementById("template").innerHTML =
            arguments.callee.name + "\n" + againCap + "(" + droplet + ")";
          // alert(arguments.callee.name + "\n" + againCap + "(" + droplet + ")");
          document.getElementById("template").innerHTML =
            arguments.callee.name + "\ndroplet.length = " + droplet.length;
          // alert(arguments.callee.name + "\ndroplet.length = " + droplet.length);
          if (
            droplet.length === 99 ||
            droplet.length === 101 ||
            droplet.length === 112 ||
            droplet.length === 86
          ) {
            serverside("seoCapital", droplet).then((myFile) => {
              document.getElementById("template").innerHTML =
                arguments.callee.name + "\n" + againCap + "(" + myFile + ")";
              // alert(
              //   arguments.callee.name + "\n" + againCap + "(" + myFile + ")",
              // );
              document.getElementById("template").innerHTML =
                JSON.stringify(myFile);
            });
          } else {
            document.getElementById("template").innerHTML =
              arguments.callee.name +
                "\n" +
                droplet.length +
                " is not the required length";
            // alert(
            //   arguments.callee.name +
            //     "\n" +
            //     droplet.length +
            //     " is not the required length",
            // );
            serverside("getScriptUrl")
              .then((cChange) => {
                console.log(
                  arguments.callee.name +
                    "\n" +
                    typeof cChange +
                    " with length = " +
                    cChange.length,
                );
                if (cChange.length === 112 || cChange.length === 86) {
                  // console.log(cChange)
                  const confirmation = window.confirm(
                    "Click OK to continue to the destination.",
                  );
                  if (confirmation) {
                    var linkFollow = document.createElement("a");
                    linkFollow.href = cChange + "?func=" + againCap;
                    linkFollow.id = "linkFOLLOW";
                    linkFollow.target = "_blank";
                    linkFollow.rel = "noopener noreferrer";
                    document.body.appendChild(linkFollow);
                    document.getElementById("linkFOLLOW").click();
                    document.getElementById("linkFOLLOW").remove();
                  }
                } else {
                  var docWnd = document.getElementById("template");
                  docWnd.innerHTML = cChange;
                }
              })
              .catch((er) => {
                document.getElementById("template").innerHTML =
                  arguments.callee.name +
                    "\n" +
                    againCap +
                    " error(" +
                    er +
                    ")";
                // alert(
                //   arguments.callee.name +
                //     "\n" +
                //     againCap +
                //     " error(" +
                //     er +
                //     ")",
                // );
                console.log(arguments.callee.name + "\n" + er);
                document.getElementById("template").innerHTML =
                  JSON.stringify(er);
              });
          }
        })
        .catch((er) => {
          document.getElementById("template").innerHTML =
            arguments.callee.name + "\n" + againCap + " error(" + er + ")";
          // alert(arguments.callee.name + "\n" + againCap + " error(" + er + ")");
          serverside("getScriptUrl")
            .then((cChange) => {
              console.log(
                arguments.callee.name +
                  "\n" +
                  typeof cChange +
                  " with length = " +
                  cChange.length,
              );
              if (droplet.length === 86 || cChange.length === 112) {
                // console.log(cChange)
                const confirmation = window.confirm(
                  "Click OK to continue to the destination.",
                );
                if (confirmation) {
                  var linkFollow = document.createElement("a");
                  linkFollow.href = cChange + "?func=" + againCap;
                  linkFollow.id = "linkFOLLOW";
                  linkFollow.target = "_blank";
                  linkFollow.rel = "noopener noreferrer";
                  document.body.appendChild(linkFollow);
                  document.getElementById("linkFOLLOW").click();
                  document.getElementById("linkFOLLOW").remove();
                }
              } else {
                var docWnd = document.getElementById("template");
                docWnd.innerHTML = cChange;
              }
            })
            .catch((er) => {
              document.getElementById("template").innerHTML =
                arguments.callee.name + "\n" + againCap + " error(" + er + ")";
              // alert(
              //   arguments.callee.name + "\n" + againCap + " error(" + er + ")",
              // );
              console.log(arguments.callee.name + "\n" + er);
              document.getElementById("template").innerHTML =
                JSON.stringify(er);
            });
        });
    }
  </script>
`);
const args_clicked = HtmlService.createHtmlOutput(
  `
  <script>
    document.getElementById('args').addEventListener('change', argsClicked)
    function argsClicked() {
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
        if (typeof func !== "undefined") {
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
      })();
    }
  </script>
`);
const yTPlayer = HtmlService.createHtmlOutput(
  `
  <script>
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    let ctr = 0;
    let iframePlayer;
    let duration = 0;
    let lastVolume = 100;
    let seekBar, volumeSlider;
    function onYouTubeIframeAPIReady() {
      iframePlayer = new YT.Player("iframePlayer", {
        height: "1405",
        width: "2105",
        //  videoId: 'OTeQee-gxa4',
        playerVars: {
          autoplay: 1,
          loop: 1,
          controls: 0,
          showinfo: 0,
          rel: 0,
          autohide: 1,
          playsinline: 1,
          enablejsapi: 1,
          mute: 0,
          vq: "hd1080",
          iv_load_policy: 3,
          cc_load_policy: 1,
          listType: "playlist",
          list: "UU6DOFpA9UCTgNwJiVX1IOpQ",
        },
        events: {
          onReady: onPlayerReady,
          onStateChange: onPlayerStateChange,
          onError: onPlayerError,
        },
      });
      function onPlayerReady(event) {
        setShuffle();
        event.target.nextVideo();
      }

      // 5. The API calls this function when the player's state changes.
      //    The function indicates that when playing a video (state=1),
      //    the player should play for six seconds and then stop.
      let done = false;
      function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING) {
          changeBorderColor(event.data);
          setLoop();
        } else if (event.data == YT.PlayerState.UNSTARTED) {
          changeBorderColor(event.data);
          setTimeout(2000, playvideo)
          event.target.playVideo();
        } else if (event.data == YT.PlayerState.ENDED) {
          changeBorderColor(event.data);
          setShuffle();
          setTimeout(2000, playVideo);
          // event.target.playVideo();
          setShuffle();
          setTimeout(2000, nextVideo);
          // event.target.nextVideo();
        } else if (event.data == YT.PlayerState.PAUSED) {
          changeBorderColor(event.data);
        } else if (event.data == YT.PlayerState.BUFFERING) {
          changeBorderColor(event.data);
          setShuffle();
        } else if (event.data == YT.PlayerState.VIDEO_CUED) {
          changeBorderColor(event.data);
        }
        done = true;
      }

      function changeBorderColor(playerStatus) {
        let color;

        if (playerStatus == -1) {
          color = "#37474F";
        } // unstarted = gray
        else if (playerStatus == 0) {
          color = "#FFFF00";
        } // ended = yellow
        else if (playerStatus == 1) {
          color = "#33691E";
        } // playing = green
        else if (playerStatus == 2) {
          color = "#DD2C00";
        } // paused = red
        else if (playerStatus == 3) {
          color = "#AA00FF";
        } // buffering = purple
        else if (playerStatus == 5) {
          color = "#FF6DOO";
        } // video cued = orange

        if (color) {
          document.getElementById("iframePlayer").style.borderColor = color;
        }
      }

      function onPlayerError() {
        iframePlayer.destroy;
        onYouTubeIframeAPIReady();
      }
      function stopVideo() {
        if (iframePlayer && iframePlayer.stopVideo) {
          iframePlayer.stopVideo();
        }
      }

      function getVideoUrl() {
        if (iframePlayer && iframePlayer.getVideoUrl) {
          iframePlayer.getVideoUrl();
        }
      }

      function setLoop() {
        if (iframePlayer && iframePlayer.setLoop) {
          iframePlayer.setLoop(true);
        }
      }

      function setShuffle() {
        if (iframePlayer && iframePlayer.setShuffle) {
          iframePlayer.setShuffle(true);
        }
      }

      function playVideo() {
        if (iframePlayer && iframePlayer.playVideo) {
          iframePlayer.playVideo();
        }
      }
      function nextVideo() {
        if (iframePlayer && iframePlayer.nextVideo) {
          iframePlayer.nextVideo();
        }
      }
      function muteVideo() {
        if (iframePlayer && iframePlayer.mute) {
          iframePlayer.mute();
        }
      }
      function unmuteVideo() {
        if (iframePlayer && iframePlayer.unMute) {
          iframePlayer.unMute();
        }
      }
      function setVolume(vol) {
        if (iframePlayer && iframePlayer.setVolume) {
          iframePlayer.setVolume(vol);
        }
      }

      function pauseVideo() {
        if (iframePlayer && iframePlayer.pauseVideo) {
          iframePlayer.pauseVideo();
        }
      }
    }
  </script>
`);
const remove_iframe = HtmlService.createHtmlOutput(
  `
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script>
      $('a').click(function(){
          $('iframe')[0].contentWindow.location.reload();
          setTimeout(function(){
            $('iframe').remove();
          }, 1000);
      });
    </script>
`);
const enter_key_event_listener = HtmlService.createHtmlOutput(
  `
  <script>

    document.addEventListener("DOMContentLoaded", function() {
      function serverside(func, args) {
        return new Promise((resolve, reject) => {
          google.script.run
          .withSuccessHandler((result) => {
            resolve(result)
          })
          .withFailureHandler((error) => {
            reject(error)
          })
          .runBoilerplate(func, args)
        })
      };

      var eventG = document.getElementById("linkload01");
      var eventH = document.getElementById("spSearch");
      var eventL = document.getElementById("spLab");
      var eventV = document.getElementById("player2");
      var vLen = [83, 94, 97, 99, 101, 103, 136, 132];

      eventH.addEventListener("keypress", function(event) {
        // If the user preses the "Enter" key on the keyboard. 
        if (event.key === "Enter")  {
          let parsedE;

          try {
            // Parse the user's input as the new 'args' value
            // Allow direct strings or JSON arrays/objects
            try {
              parsedE = JSON.parse(eventH.value);
            } 
            catch (jsonError) {
              // If it's not valid JSON, treat it as a plain string
              parsedE = eventH.value;
            }
          } 
          catch(error) {
            alert("Error parsing JSON. Please ensure the input is valid JSON.");
            console.error("JSON parsing error:", error);
          };

          var strValue = parsedE;

          serverside("substanceVegas", [null,null,null,1,1,5])
            .then((sub) => {
              var hosts = sub.substHost;
              var rndHost = hosts[Math.floor(Math.random() * (Math.floor(hosts.length)))];
              eventH.value = rndHost;
            });

          if (!strValue) {
            eventL.innerText = "... Loading";

            serverside("mis")
              .then((retn) => {
                var stream = retn.index;

                if (stream) {
                  if (vLen.includes(stream.length) || [stream].indexOf("&entry") > -1) {
                    eventV.innerHTML = '<iframe class="z-depth-5 card-panel deep-purple darken-1 scale-transition scale-out scale-in btn-large" src="" id="eventRes01" class="menu-img grey darken-4 z-depth-5" style="width: 100%; height: 100%; border: none;" allow="autoplay" allow="encrypted-media" title="Dontime Life Website" frameborder="0" allowfullscreen ></iframe>';
                    document.getElementById("eventRes01").src = stream;
                    eventG.href = stream;
                    eventL.innerText = "Research"
                  } 
                  else {
                    let data;
                    // 1. Handle UrlFetchApp.HTTPResponse

                    if (typeof stream.getResponseCode === "function" && typeof stream.getContentText === "function") {
                      const contentType = stream.getHeaders()["Content-Type"] || "";
                      const responseText = stream.getContentText();

                      if (contentType.includes("application/json")) {
                        try {
                          data = JSON.parse(responseText);
                        } 
                        catch (e) {
                          data = "Error parsing JSON from URL fetch: " + responseText
                        }
                      } 
                      else if (contentType.includes("text/html")) {
                        data = responseText;
                      } 
                      else {
                        data = responseText;
                      }
                    };

                    eventV.innerHTML = JSON.stringify(stream);
                    eventG.href = stream;
                    eventL.innerText = "Research"
                  }
                }
              })
              .catch((er) => {
                eventL.innerText = er.stack;
              })
          } 
          else {
            document.getElementById("spSearch").value = "";
            eventL.innerText = "... Loading " + strValue;

            serverside("mis", [strValue])
              .then((retn) => {
                var stream = retn.index; 

                if (stream) {
                  if (vLen.includes(stream.length) || [stream].indexOf("&entry") > -1) {
                    eventV.innerHTML = '<iframe class="z-depth-5 card-panel deep-purple darken-1 scale-transition scale-out scale-in btn-large" src="" id="eventRes01" class="menu-img grey darken-4 z-depth-5" style="width: 100%; height: 100%; border: none;" allow="autoplay" allow="encrypted-media" title="Dontime Life Website" frameborder="0" allowfullscreen ></iframe>';document.getElementById("eventRes01").src = stream;
                    eventG.href = stream;
                    eventL.innerText = "Research"
                  } 
                  else {
                    let data;
                    // 1. Handle UrlFetchApp.HTTPResponse

                    if (typeof stream.getResponseCode === "function" && typeof stream.getContentText === "function") {
                      const contentType = stream.getHeaders()["Content-Type"] || "";
                      const responseText = stream.getContentText();

                      if (contentType.includes("application/json")) {
                        try {
                          data = JSON.parse(responseText);
                        } 
                        catch (e) {
                          data = "Error parsing JSON from URL fetch: " + responseText
                        }
                      } 
                      else if (contentType.includes("text/html")) {
                        data = responseText;
                      } 
                      else {
                        data = responseText;
                      }
                    };

                    eventV.innerHTML = JSON.stringify(stream);
                    eventG.href = stream;
                    eventL.innerText = "Research"
                  }
                }
              })
              .catch((er) => {
                eventL.innerText = er
              })
          }
        }
      })
    })
  </script>
`);
const player2 = HtmlService.createHtmlOutput(
  `
  <script>

    document.addEventListener("DOMContentLoaded", function() {
      function serverside(func, args) {
        return new Promise((resolve, reject) => {
          google.script.run
          .withSuccessHandler((result) => {
            resolve(result)
          })
          .withFailureHandler((error) => {
            reject(error)
          })
          .runBoilerplate(func, args)
        })
      };

      var eventV = document.getElementById("player2");
      serverside("mis", link)
      .then((misHome) => {
        var emPlay = document.getElementById("player2");
        if (emPlay.innerHTML === "") {
          emplay.innerHTML = misHome;
        }
      })
      .catch((er) => {
        eventL.innerText = er.stack;
      })
    });
  </script>
`);
const spyTPlayer = HtmlService.createHtmlOutput(
  `
    <script>
      document.addEventListener("DOMContentLoaded", function() {
        function serverside(func, args) {
          return new Promise((resolve, reject) => {
            google.script.run
            .withSuccessHandler((result) => {
              resolve(result)
            })
            .withFailureHandler((error) => {
              reject(error)
            })
            .runBoilerplate(func, args)
          })
        };
        serverside("vidPlaylist", [])
        .then((myPlayList) => {
          // 1. Load the IFrame Player API code asynchronously.
          const tag = document.createElement("script");
          tag.src = "https://www.youtube.com/iframe_api"; // *** FIX THIS URL ***
          const firstScriptTag = document.getElementsByTagName("script")[0];
          firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

          let player1; // Declare player1 once globally or within appropriate scope
          let ctr = 0;

          // This global function will be called by the YouTube API once it's loaded
          function onYouTubeIframeAPIReady() {
            try {
              const loadingSurveyElement = document.getElementById('loadingSurvey');
              const player1Div = document.getElementById('player1');

              if (!player1Div) {
                console.log("Error: The 'player1' div element was not found in the DOM.");
                return; // Stop execution if player div is missing
              }
              
              if (!loadingSurveyElement) {
                loadingSurveyElement.style.display = 'none'; // Hide loading if element missing
              }

              // Show the loading indicator *after* player1Div is confirmed to exist
              if (loadingSurveyElement) {
                loadingSurveyElement.style.display = 'block';
              }
            } 
            catch (error) {
              console.error("Error creating YouTube player:", error);
              if (loadingSurveyElement) {
                  loadingSurveyElement.style.display = 'none'; // Hide loading indicator on player creation error
              }
            }
            console.log("youtube API ready");

              player1 = new YT.Player("player1", {
                height: "360",
                width: "535",
                // videoId: "OTeQee-gxa4",
                playerVars: {
                  autoplay: 1,
                  loop: 1,
                  controls: 0,
                  rel: 0,
                  autohide: 1,
                  playsinline: 0,
                  mute: 0,
                  vq: "hd1080",
                  iv_load_policy: 3,
                  cc_load_policy: 1,
                  listType: "playlist",
                  list: "UU6DOFpA9UCTgNwJiVX1IOpQ",
                },
                events: {
                  onReady: onPlayerReady,
                  onStateChange: onPlayerStateChange,
                  onError: onPlayerError,
                },
              });
            console.log("YT.Player initialization attempted for player1.");
          }

          function onPlayerReady(event) {
            console.log("Player ready, loading playlist.");
            // event.target.loadPlaylist(myPlayList, ctr);
            // ctr++;
            setShuffle();
            setLoop();
            event.target.playVideo();

            // Hide the loading indicator once the player is ready and playing
            // const loadingSurveyElement = document.getElementById('loadingSurvey');
            if (loadingSurveyElement) {
              loadingSurveyElement.style.display = 'none';
            }
          }

          
          // 5. The API calls this function when the player's state changes.The function indicates that when playing a video (state=1),the player should play for six seconds and then stop.
          let done = false;

          function onPlayerStateChange(event) {
            if (event.data == YT.PlayerState.UNSTARTED) {
              var youtubeID = event.target.getVideoUrl();
              setTimeout(2000, playVideo);
              changeBorderColor(event.data);
            }
            else if (event.data == YT.PlayerState.ENDED) {
              //console.log("load another video");
              player1.loadPlaylist(myPlayList, ctr);
              ctr++
              // setTimeout(player1.loadVideoById());
              setTimeout(2000, nextVideo);
              changeBorderColor(event.data);
            }
            else if (event.data == YT.PlayerState.PAUSED) {
              setTimeout(2000, pauseVideo);
              changeBorderColor(event.data)
            }
            else if (event.data == YT.PlayerState.BUFFERING) {
              setTimeout(2000, playVideo);
              changeBorderColor(event.data)
            }
            else if (event.data == YT.PlayerState.VIDEO_CUED) {
              setTimeout(2000, playVideo);
              changeBorderColor(event.data)
            };
            done = true;
          };

          function changeBorderColor(playerStatus) {
            let color;
            
            if (playerStatus == -1) {
              color = "#37474F"
            } // unstarted = gray
            else if (playerStatus == 0) {
              color = "#FFFF00"
            } // ended = yellow
            else if (playerStatus == 1) {
              color = "#33691E"
            } // playing = green
            else if (playerStatus == 2) {
              color = "#DD2C00"
            } // paused = red
            else if (playerStatus == 3) {
              color = "#AA00FF"
            } // buffering = purple
            else if (playerStatus == 5) {
              color = "#FF6DOO"
            }; // video cued = orange
            if (color) {
              document.getElementById('player1').style.borderColor = color;
            };
          };
          
          function onPlayerError(event) {
            console.log("YouTube Player Error (Code:", event.data, "):", event);
            // const loadingSurveyElement = document.getElementById('loadingSurvey');
            if (loadingSurveyElement) {
              loadingSurveyElement.style.display = 'none'; // Hide loading indicator
            }

            if (player1) {
              player1.destroy(); // Properly destroy the player instance
              player1 = null; // Clear the reference to the destroyed player
            }
            // Do NOT call onYouTubeIframeAPIReady() here.
            // Depending on the error code, you might:
            // - Display a user-friendly error message.
            // - Attempt to load a different video if the current one is broken.
            // - Log the error to a server for monitoring.
          }

          
          function stopVideo() {
            player1.stopVideo();
          };

          function getVideoUrl() {
            player1.getVideoUrl();
          };

          function setLoop() {
            player1.setLoop(true);
          };

          function setShuffle() {
            player1.setShuffle(true);
          };

          function playVideo() {
            player1.playVideo();
          };

          function nextVideo() {
            player1.nextVideo();
          };

          function pauseVideo() {
            player1.pauseVideo();
          };
        })
      
    </script>
`);
const location_url = HtmlService.createHtmlOutput(
  `
  <script>
    let drivMC = <?= drivemC ?>;
    if (drivMC) {
      window.location.href = drivMC;
    }
  </script>
`);

const GameManager = {
  setGameStart: function(classType) {
    this.resetPlayer(classType);
    this.setPreFight();
  },
  resetPlayer: function(classType) {
    let gamer;
    switch (classType) {
      case "Warrior": gamer = 
        new Gamer(classType, 200, 0, 200, 100, 50);
        break;
      case "Rouge": gamer = 
        new Gamer(classType, 100, 0, 100, 150, 200);
        break;
      case "Mage": gamer = 
        new Gamer(classType, 80, 0, 50, 200, 50);
        break;
      case "Hunter": gamer = 
        new Gamer(classType, 200, 0, 50, 200, 100);
        break;
    } 
  },
  setPreFight: function() {
    let enemy;
  }
}

const getInterface = HtmlService.createHtmlOutput(
  `
  <script>
    document.querySelector(\".interface\");
    getInterface.innerHTML = 
      "
        <img src="" class="img-avatar">
        <div>
          <h3>
            " + classType + "
          </h3>
          <p>
            Health: " + gamer.health + "
          </p>
        </div>
      ";
  </script>
`);

const Gamer = function(classType, health, mana, strength, agility, speed) {
  this.classType = classType;
  this.health = health;
  this.mana = mana;
  this.strength = strength;
  this.agility = agility;
  this.speed = speed;
}

const Enemy = function(enemyType, health, mana, strength, agility, speed) {
  this.classType = enemyType;
  this.health = health;
  this.mana = mana;
  this.strength = strength;
  this.agility = agility;
  this.speed = speed;
}
        
const styleHtml = {
  renderFile: HtmlService.createHtmlOutput(
    `${desktopContainer.getContent() + mobileSection.getContent() + responsiveSection.getContent() + nav_middle_search_box_input.getContent() + nav_middle_search_box.getContent() + nav_left_menu_ico.getContent() + nav_left_logo.getContent() + nav_right_user_ico.getContent() + nav_right_img.getContent() + flex_div.getContent() + footer.getContent() + socials.getContent() + aside.getContent() + main.getContent() + article.getContent() + website.getContent() + banner_page_header.getContent() + banner_img.getContent() + img.getContent() + nav.getContent() + section.getContent() + body.getContent() + block_display.getContent() + receipt_footer.getContent() + receipt.getContent() + boiler_footer.getContent() + sidebar.getContent() + small_sidebar.getContent() + static_fix.getContent() + float_left.getContent() + float_right.getContent() + sidebar_hr.getContent() + small_sidebar_h3.getContent() + small_sidebar_hr.getContent() + small_sidebar_link_paragraph.getContent() + subscribed_list_h3.getContent() + subscribed_list_link.getContent() + subscribed_list_link_img.getContent() + container.getContent() + list_container.getContent() + grid.getContent() + vid_list_thumbnail.getContent() + vid_list_flex_div.getContent() + vid_list_flex_div_img.getContent() + vid_info.getContent() + vid_info_link.getContent() + menu.getContent() + order.getContent() + large_container.getContent()}`,
  ),
  surveyPlayer: HtmlService.createHtmlOutput(
    `${body_survey_player.getContent()}`,
  ),
  oddChances: HtmlService.createHtmlOutput(
    `${link_visited.getContent() + link_active.getContent()}`,
  ),
  runIt: HtmlService.createHtmlOutput(
    `${key_press.getContent() + yTPlayer.getContent() + spyTPlayer.getContent() + collapse_menu.getContent() + domain_lookup.getContent() + domain_submit.getContent() + document_ready_select.getContent() + remove_iframe.getContent() + jsQuery.getContent() + materializeJs.getContent() + luxonJs.getContent() + tabulatorJs.getContent()}`
  ),
  abcIt: HtmlService.createHtmlOutput(
    `
      ${utf_8.getContent() + b_top.getContent() + xuacompatible.getContent() + viewport.getContent() + google_signin_client.getContent() + fontAwesome.getContent() + googleApis_preConnect.getContent() + gstatic_preConnect.getContent() + googleApisCss.getContent() + materializeCss.getContent() + tabulatorCss.getContent() + googleApisIcon.getContent() + google_charts_loader.getContent() + googleApisOnApiLoad.getContent() + googleApis_defer.getContent()}
  `),
  spRunIt: HtmlService.createHtmlOutput(
    `
      ${spyTPlayer.getContent() + player2.getContent() + enter_key_event_listener.getContent()};
  `),
  mgfRunIt: HtmlService.createHtmlOutput(
    `
      ${next_clicked_video.getContent() + busy_calendar.getContent()}
  `),
};

var builtStyling = function (e) {
  var content = styleHtml.renderFile.getContent();
  var frame = frameHtml();

  var htmlString = `
  <!DOCTYPE html>
  <html>
    <head>
      ${content.utf_8}
      ${content.xuacompatible}
      ${content.viewport}
      ${content.googleApis_preConnect}
      ${content.googleApisCss}
      ${content.fontAwesome}
      ${content.materializeCss}
      ${content.jsQuery}
      ${content.tabulatorCss}
      ${content.gstatic_preConnect}
      <style>
        ${content.desktopContainer}
        ${content.mobileSection}
        ${content.contentSection}
        ${content.responsiveSection}
        ${content.website}
        ${content.html}
        ${content.main}
        ${content.body}
        ${content.header}
        ${content.header_h1}
        ${content.grid}
        ${content.flex_row}
        ${content.flex_column}
        ${content.order_menu_payment}
        ${content.seperator1}
        ${content.order}
        ${content.receipt}
        ${content.receipt_company_info_receipt_footer}
        ${content.company_info}
        ${content.company_name}
        ${content.company_phone}
        ${content.th_description}
        ${content.th_price}
        ${content.quantity_price_subtotal_delete}
        ${content.receipt_details}
        ${content.dotted_border}
        ${content.fa_trash_canHover}
        ${content.tableSummary_table}
        ${content.tbodySummary_table_tdNth_child1}
        ${content.tbodySummary_table_tdNth_child2}
        ${content.tbodySummary_table_tdNth_child3}
        ${content.receipt_footer}
        ${content.barcode}
        ${content.toolbar}
        ${content.toolbar_icon}
        ${content.toolbar_iconHover}
        ${content.seperator2}
        ${content.menu_payment}
        ${content.menu}
        ${content.menu_item}
        ${content.menu_img}
        ${content.figcaption}
        ${content.menu_itemHover}
        ${content.img}
      </style>
    </head>
    <body>
    <div id="iframePlayer"></div>
      ${content.materializeJs}
      ${content.luxonJs}
      ${content.tabulatorJs}
      <script>
        ${HtmlService.createTemplate(frame.iframePlayer).evaluate().getContent()}
      </script>
    </body>
  </html>
  `;
  return HtmlService.createHtmlOutput(htmlString).asTemplate();
};

function frameHtml(file, argsArray) {
  const content = {};
  return content;
}
