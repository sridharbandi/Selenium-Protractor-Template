browser.ignoreSynchronization = true;
var GoogleSearchPage = require('../pageobjects/googlesearchpage');
var SearchResultsPage = require('../pageobjects/searchresultspage');

describe('Verify Google Title', function() {
    it('should have a title', async function() {
        await GoogleSearchPage.open();
        expect(await GoogleSearchPage.title()).toEqual('Google');
    });

    it('Search for Selenium', async function() {
        await GoogleSearchPage.searchFor('Selenium');
        expect(await SearchResultsPage.isSeleniumPresent()).toBeTruthy();
    });
});