import GoogleSearchPage from '../pageobjects/googlesearchpage';
import SearchResultsPage from '../pageobjects/searchresultspage';

describe('Verify Google Title', function () {
    it('should have a title', async function () {
        await GoogleSearchPage.open();
        expect(await GoogleSearchPage.title()).toEqual('Google');
    });

    it('Search for Selenium', async function () {
        await GoogleSearchPage.searchFor('Selenium');
        expect(await SearchResultsPage.isSeleniumPresent()).toBeTruthy();
    });
});