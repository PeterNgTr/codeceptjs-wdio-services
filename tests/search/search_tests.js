import {expect} from 'chai';
const { I, homePage, resultPage } = inject();

Feature('Search functionality');

Before(() => {
    I.amOnPage('/');
});

Scenario('Search function is displayed', () => {
    I.seeElement(homePage.searchTextbox);
    I.seeElement(homePage.searchButton);
});

Scenario('Search returns results', async () => {
    const searchString = 'echo';
    homePage.search(searchString);
    I.seeElement(resultPage.resultBar);
    expect(await resultPage.hasResults(searchString)).to.be.true;
});

Scenario('Search returns no results', () => {
    const searchString = 'echdjhkfefweho';
    homePage.search(searchString);
    I.see('Keine Ergebnisse');
});