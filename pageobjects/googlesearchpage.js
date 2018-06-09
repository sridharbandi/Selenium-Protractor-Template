var GoogleSearchPage = function () {

  var searchbox = element(by.id('lst-ib'));

  this.open = async function () {
      await browser.get('http://www.google.com');
  };

  this.title = async function () {
      return await browser.getTitle();
  };

  this.searchFor = async function (searchterm) {
      await searchbox.sendKeys(searchterm, protractor.Key.RETURN);
  }
};
module.exports = new GoogleSearchPage();