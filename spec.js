browser.ignoreSynchronization = true;
var GoogleSearchPage = require('./pageobjects/googlesearchpage');

describe('Verify Google Title', function() {
    it('should have a title', async function() {
        await GoogleSearchPage.open();


        expect(await GoogleSearchPage.title()).toEqual('Google');
    });
});