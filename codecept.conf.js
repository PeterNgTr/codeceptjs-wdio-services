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
          args: [ "--headless", "--disable-gpu", "--window-size=800,600" ]
        }
      },
      windowSize: "1440x700",
      smartWait: 5000
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
