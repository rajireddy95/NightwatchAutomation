module.exports = {
    '@tags':['commandObjectLogin'],
    'Login form validation':function(browser){
        const login = browser.page.commandLogin();

        login.navigate()
            .validateform()
    },

    'Login with no username and password':function (browser) {
        const login = browser.page.commandLogin();
        login.navigate()
            .chooseSignOn()
            .submit()
            .validateError('An email address required')
    },
    'Login with username and no password':function (browser) {
        const login = browser.page.commandLogin();
        login.navigate()
            .chooseSignOn()
            .fillInForm('abc@gmail.com','')
            .submit()
            .pause(2000)
            .validateError('Password is required')
    },
    'Login with username and no password':function (browser) {
        const login = browser.page.commandLogin();
        login.navigate()
            .chooseSignOn()
            .fillInForm('abc@gmail.com','abc1234')
            .submit()
            .pause(2000)
            .validateError('Authentication failed.')
    }
}