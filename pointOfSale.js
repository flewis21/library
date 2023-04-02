function posHtml() {
  const content = HtmlService.createTemplate(`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Libre+Barcode+128&family=Montserrat:ital@1&family=Oswald&family=Roboto&display=swap" rel="stylesheet">
        <title>Restauraunt POS</title>
      </head>
      <body class="blue">
        <header>
          <h1>Restaurant POS</h1>
        </header>
        <main class="main-container flex-row">
          <section class="order flex-column">
            <article class="receipt flex-column">
              <div class="company-info flex-column">
                <p id="company-name">The Awesome Cafe</p>
                <p id="company-address">123 Elm St.</p>
                <p id="company-city">New York, NY</p>
                <p id="company-phone">123-456-7890</p>
                <p id="invoice-number">Invoice #5050</p>
              </div>
              <div class="receipt-details">
              <table class="details-detail">
                <thead>
                  <tr>
                    <td class="dotted-border" colspan="5"></td>
                  </tr>
                  <tr>
                    <td class="empty-border" colspan="5"></td>
                  </tr>
                  <tr>
                    <th class="description">Description</th>
                    <th class="quantity">Qty</th>
                    <th class="price">Price</th>
                    <th class="subtotal">Sub</th>
                    <th class="delete">Del</th>
                  </tr>
                  <tr>
                    <td class="dotted-border" colspan="5"></td>
                  </tr>
                  <tr>
                    <td class="empty-border" colspan="5"></td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="description">Fries</td>
                    <td class="quantity">1</td>
                    <td class="price">$12.99</td>
                    <td class="subtotal">$12.99</td>
                    <td class="delete"><i class="fa-solid fa-delete-left"></i></td>
                  </tr>
                </tbody>
              </table>
              </div>
              <div class="receipt-summary">
              <table class="summary-table">
                <tbody class="summary-table" id="total-summary">
                  <tr>
                    <td class="dotted-border" colspan="3"></td>
                  </tr>
                  <tr>
                    <td class="empty-border" colspan="3"></td>
                  </tr>
                  <tr>
                    <td>Subtotal:</td>
                    <td id="subtotal-summary">$0.00</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Tax:</td>
                    <td id="subtotal-tax">$0.00</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Grand Total:</td>
                    <td id="grandtotal-summary">$0.00</td>
                    <td></td>
                  </tr>
                </tbody>
                <tbody class="summary-table" id="payment-summary">
                  <tr>
                    <td>Amt Paid:</td>
                    <td id="amount-paid">$0.00</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td id="tip-change-title">Change:</td>
                    <td id="tip-change-amount">$0.00</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Payment Type:</td>
                    <td id="payment-type">$0.00</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td class="dotted-border" colspan="3"></td>
                  </tr>
                  <tr>
                    <td class="empty-border" colspan="3"></td>
                  </tr>
                </tbody>
              </table>
              </div>
              <div class="reciept-footer flex-column">
                <p id="receipt-message">Thanks For Your Business</p>
                <p id="barcode">Barcode</p>
              </div>
            </article>
            <div class="toolbar flex-row">
              <i class="fa-solid fa-money-bill-wave toolbar-icon"></i>
              <i class="fa-solid fa-credit-card toolbar-icon"></i>
              <i class="fa-solid fa-trash-can toolbar-icon"></i>
            </div>
          </section>
          <section class="menu-payment grid">
            <div class="menu flex-row" id="menu">
              <figure class="menu-item">
                <iframe src="https://drive.google.com/file/d/1--9TBDIYipI0ZN2bEb_77bITFzC1cRDK/preview" allow="autoplay" class="menu-img" style="width:150px;"></iframe>
                <figcaption>
                  Fries
                </figcaption>
                <figcaption>
                  $12.99
                </figcaption>
              </figure>
              <figure class="menu-item">
                <iframe src="https://drive.google.com/file/d/1--9TBDIYipI0ZN2bEb_77bITFzC1cRDK/preview" allow="autoplay" class="menu-img" style="width:150px;"></iframe>
                <figcaption>
                  Fries
                </figcaption>
                <figcaption>
                  $12.99
                </figcaption>
              </figure>
              <figure class="menu-item">
                <iframe src="https://drive.google.com/file/d/1--9TBDIYipI0ZN2bEb_77bITFzC1cRDK/preview" allow="autoplay" class="menu-img" style="width:150px;"></iframe>
                <figcaption>
                  Fries
                </figcaption>
                <figcaption>
                  $12.99
                </figcaption>
              </figure>
              <figure class="menu-item">
                <iframe src="https://drive.google.com/file/d/1--9TBDIYipI0ZN2bEb_77bITFzC1cRDK/preview" allow="autoplay" class="menu-img" style="width:150px;"></iframe>
                <figcaption>
                  Fries
                </figcaption>
                <figcaption>
                  $12.99
                </figcaption>
              </figure>
            </div>
          </section>
        </main>
      </body>
    </html>`);
  return content.getRawContent();
}
