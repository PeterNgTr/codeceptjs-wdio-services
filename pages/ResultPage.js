const I = actor();

export default resultPage = {
  resultBar: 'div[id="search"] span[data-component-type="s-result-info-bar"]',
  productName: 'h2 a',
  noResult: '#noResultsTitle',

  async hasResults(searchString) {
    const results = await I.grabTextFrom(this.productName);
    return results.join(' ').toLowerCase().includes(searchString.toLowerCase());
  },

  async showProductDetails() {
    I.waitForElement(this.productName, 3);
    I.click(this.productName);
    I.wait(2);
  },
};
