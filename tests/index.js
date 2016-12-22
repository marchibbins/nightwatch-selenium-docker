module.exports = {
  'Test my page': (browser) => {
    browser
      .url(browser.launchUrl)
      .assert.title('Hello world')
      .end();
  },
};
