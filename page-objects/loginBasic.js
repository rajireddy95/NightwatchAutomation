module.exports = {
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