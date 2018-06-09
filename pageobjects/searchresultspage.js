var SearchResultsPage = function () {
    var linkselenium = element(by.linkText('Selenium - Web Browser Automation'));

    this.isSeleniumPresent = async function() {
      return await linkselenium.isDisplayed();
    };

};
module.exports = new SearchResultsPage();