module.exports = {
    '@tags' : ['demo'],
    'Demo test Google' : function (browser) {
      browser
        .url('https://www.google.com/')
        .pause(1000)
        .useXpath()
        .setValue('//*[@id="tsf"]/div[2]/div[1]/div[1]/div/div[2]/input','hamk')
        .pause(4000)
        .click('//*[@id="tsf"]/div[2]/div[1]/div[2]/div[2]/div[2]/center/input[1]')
        .pause(3000)
        .assert.elementPresent('//*[@id="rso"]/div[1]/div/div/div/div/div[1]/a[1]','The link of Hämeen ammattikorkeakoulu is shown')
        .end();
    }};
  