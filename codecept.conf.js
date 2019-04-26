require('import-export');

exports.config = {
  tests: "./tests/**/*.js",
  timeout: 10000,
  output: "./output",
  helpers: {
    WebDriver: {
      url: 'https://www.amazon.de',
      browser: "chrome",
      desiredCapabilities: {
        chromeOptions: {
          args: [ "--headless", "--window-size=1440,700", "--no-sandbox" ]
        }
      },
      windowSize: "1440x700",
      smartWait: 5000,
      timeouts: {
        "script": 60000,
        "page load": 10000
      }
    }
  },
  name: "codeceptjs-wdio-services",
  multiple: {
    parallel: {
      chunks: 2
    }
  },
  include: {
    homePage: './pages/HomePage.js',
    resultPage: './pages/ResultPage.js',
    productDetailsPage: './pages/ProductDetailsPage.js',
    popup: './pages/Popup.js',
    cartPage: './pages/CartPage.js'
  },
  plugins: {
    wdio: {
      services: ['selenium-standalone'],
      enabled: true
    }
  }
}
