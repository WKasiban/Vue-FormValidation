Vue.config.devtools = true;

var app = new Vue({
    el: '#form',
    data: {
        name: null,
        email: null,
        password: null,
        password2: null,
        errorsName: '',
        errorsEmail: '',
        errorsPassword: '',
        errorsPassword2: '',
    },
    methods: {
        checkForm(e) {
            if (!this.name) {
                this.errorsName = 'You cannot let this field blank.'
            }

            if (this.email && !this.validEmail(this.email)) {
                this.errorsEmail = 'It seem you forget to put @ in your email'
            } else if (!this.email) {
                this.errorsEmail = 'You cannot let this field blank.'
            }

            if (!this.password) {
                this.errorsPassword = 'You cannot let this field blank.'
            } else if (this.password && this.password.length < 7) {
                this.errorsPassword = 'Your password must be at least 8 charecters'
            }

            if (!this.password2) {
                this.errorsPassword2 = 'You cannot let this field blank.'
            } else if (this.password2 && this.password2 != this.password) {
                this.errorsPassword2 = 'It seem your confirm password not match with the password'
            }

            e.preventDefault();
        },
        validEmail(email) {
            var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        }
    }
})