import { expect } from 'chai';

const {
  I, homePage, resultPage, productDetailsPage, cartPage,
} = inject();

Feature('Add to cart functionality');

Before(() => {
  I.amOnPage('/');
});

Scenario('Add a product to shopping cart', async () => {
  const searchString = 'echo';
  homePage.search(searchString);
  resultPage.showProductDetails();
  expect(await productDetailsPage.addToCart()).to.be.true;
  I.seeElement(cartPage.confirmText);
});
