var loginCommands = {
    validateform: function () {
        return this.waitForElementVisible('body', 1000)
            .click('@signinBtn')
            .verify.visible('@email')
            .verify.visible('@password')
            .verify.visible('@submit')
    },
    chooseSignOn: function () {
        return this.waitForElementVisible('body', 1000)
            .click('@signinBtn')
    },
    fillInForm: function (email, password) {
        return this.verify.visible('@email')
            .setValue('@email', email)
            .setValue('@password', password)
    },
    submit: function () {
        return this.verify.visible('@submit')
            .click('@submit')
    },
    validateError: function (errormessage) {
        return this.verify.visible('@error')
            .verify.containsText('@error', errormessage)
    }
};

module.exports = {
    commands: [loginCommands],
    url: function () {
        return this.api.launchUrl;
    },
    elements: {
        signinBtn: {
            selector: '.login'
        },
        email: {
            selector: '#email'
        },

        password: {
            selector: '#passwd'
        },
        submit: {
            selector: '#SubmitLogin'
        },
        error: {
            selector: '.alert-danger ol li'
        }
    }
}