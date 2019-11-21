module.exports = {
    '@tags': ['simpleLogin'],
    'Login form validation': function (browser) {
        browser
            .init()
            .waitForElementVisible('body', 1000)
            .click('.login')
            .assert.visible('#email')
            .verify.visible('#passwd')
            .verify.visible('#SubmitLogin')
            .saveScreenshot("./screenshots/Loginform.png")
            .end();
    },
    'Login with no username or password':function (browser) {
        browser
            .init()
            .waitForElementVisible('body',1000)
            .click('.login')
            .click('#SubmitLogin')
            .verify.visible('.alert-danger')
            .verify.containsText('.alert-danger','An email address required')
            .saveScreenshot("./screenshots/loginfail.png")
            .end()

    },
    'Login with username and no password':function (browser) {
        browser
            .init()
            .waitForElementVisible('body',1000)
            .click('.login')
            .setValue('#email','rajireddy95@gmail.com')
            .click('#SubmitLogin')
            .verify.visible('.alert-danger')
            .verify.containsText('.alert-danger','Password is required.')
            .pause(2000)
            .end()
    },

    'Login with invalid username and password':function (browser) {
        browser
            .init()
            .waitForElementVisible('body',1000)
            .click('.login')
            .setValue('#email','abc@gmail.com')
            .setValue('#passwd','abc1234')
            .click('#SubmitLogin')
            .verify.visible('.alert-danger')
            .verify.containsText('.alert-danger','Authentication failed.')
            .pause(2000)
            .end()
    }
}