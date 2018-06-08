browser.ignoreSynchronization = true;

describe('Verify Google Title', function() {
    it('should have a title', function() {
        browser.get('http://www.google.com/');

        expect(browser.getTitle()).toEqual('Google');
    });
});