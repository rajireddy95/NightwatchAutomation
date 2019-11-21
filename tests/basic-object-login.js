module.exports = {
    '@tags':['basicObjects'],
    'Login form Validation': function(browser) {
        const login = browser.page.loginBasic();
        login.navigate()
            .waitForElementVisible('body', 1000)
            .click('@signinBtn')
            .verify.visible('@email')
            .verify.visible('@password')
            .verify.visible('@submit')
            browser.end();
    },
    'Login with no username or password':function (browser) {
        const login  = browser.page.loginBasic();
        login.navigate()
            .waitForElementVisible('body',1000)
            .click('@signinBtn')
            .click('@submit')
            .verify.visible('@error')
            .verify.containsText('@error','An email address required')
            .end()

    },
    'Login with username and no password':function (browser) {
        const login  = browser.page.loginBasic();
        login.navigate()
            .waitForElementVisible('body',1000)
            .click('@signinBtn')
            .setValue('@email','rajireddy95@gmail.com')
            .click('@submit')
            .verify.visible('@error')
            .verify.containsText('@error','Password is required.')
            .end()
    },

    'Login with invalid username and password':function (browser) {
        const login  = browser.page.loginBasic();
        login.navigate()
            .waitForElementVisible('body',1000)
            .click('@signinBtn')
            .setValue('@email','abc@gmail.com')
            .setValue('@password','abc1234')
            .click('@submit')
            .verify.visible('@error')
            .verify.containsText('@error','Authentication failed.')
            .end()
    }
}