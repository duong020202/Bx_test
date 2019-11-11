module.exports = {
    '@tags': ['Dashboard'],
    'Login -> DashBoard'(browser) {
        const userAccount = 'oanh.fincumet';
        const userAccountInput = '//*[@id="root"]/div/div/div[1]/div/form/div[1]/div/input';
        const userPassword = 'wnn355fWWvve';
        const userPasswordInput = '//*[@id="root"]/div/div/div[1]/div/form/div[2]/div/input';
        const submitButtonSelector = '//*[@id="root"]/div/div/div[1]/div/form/div[3]/button[2]';
        const dashBoard = '//*[@id="fuse-navbar"]/div/div/div[1]/div/ul/a[1]/div/span'
        const selectCustomer = '//*[@id="fuse-layout"]/div/div/div[2]/div/div[3]/div/div/div[1]/div[2]/div/div/div[1]/div/div/div'
        const customerOanhDo = '//*[@id="menu-"]/div[2]/ul/li[16]'
        const editStartDate = '//*[@id="fuse-layout"]/div/div/div[2]/div/div[3]/div/div/div[1]/div[2]/div/div/div[2]/div[1]/div/div/button'
        const chosenStartDate = '/html/body/div[2]/div[2]/div/div[1]/div[3]/div/div[1]/div[6]/button'
        const choseButton = '/html/body/div[2]/div[2]/div/div[2]/button[3]'
        const getButton1 = '//*[@id="fuse-layout"]/div/div/div[2]/div/div[3]/div/div/div[1]/div[2]/div/div/div[3]/button'
        const changeMonthButton = '/html/body/div[2]/div[2]/div/div[1]/div[2]/div[1]/button[1]'
       
       
        browser
        .windowMaximize()
        .url('https://boxcontroldev.hder.fi/ui')
        .waitForElementVisible('body', 'The page is loaded')
        .useXpath()
        // .setValue('//*[@id="root"]/div/div/div[1]/div/form/div[1]/div/input', "\u0008 \u0008 \u0008 \u0008 \u0008 \u0008")
        .setValue(userAccountInput, userAccount)
        // .setValue('//*[@id="root"]/div/div/div[1]/div/form/div[2]/div/input', "\u0008 \u0008 \u0008 \u0008 \u0008 \u0008")
        .setValue(userPasswordInput, userPassword)
        .click(submitButtonSelector)
        .pause(2000)
        .assert.elementPresent('/html/body', 'Login success')
        .element('xpath', '/html/body/div[2]/div[2]/div', function(result){
            if(result.status != -1){

            browser.click('/html/body/div[2]/div[2]/div/div[4]/button/span[1]')
            browser.pause(5000)
            }
        })
        .pause(1000)
        .click(dashBoard)
        .pause(200)
        .waitForElementVisible('//*[@id="fuse-layout"]/div/div/div[2]','Dashboard page')
        .assert.urlContains('dashboard','The URL contains "dashboard"')
        .pause(300)
        .click(selectCustomer)
        .pause(1000)
        .click(customerOanhDo)
        .pause(2000)
        .assert.elementPresent('//*[@id="fuse-layout"]/div/div/div[2]/div/div[3]/div/div/div[1]/div[2]/div/div/div[1]/div/div/div', 'Customer Oanh Do is chose')
        .click(editStartDate)
        .pause(300)
        .click(changeMonthButton)
        .pause(300)
        .click(chosenStartDate)
        .click(choseButton)
        .pause(2000)
        .click(getButton1)
        .assert.elementPresent('//*[@id="fuse-layout"]/div/div/div[2]/div/div[3]/div/div/div[1]/div[2]/div/div[1]/div[2]/div[1]/div/input', 'The date is chose accordingly')
        .pause(1000)
        .assert.elementPresent('//*[@id="fuse-layout"]/div/div/div[2]/div/div[3]/div/div/div[1]/div[2]/div/div[2]/div', 'Information of the customer shown')
        .pause(5000)
        // .assert


        .end();
    }
}