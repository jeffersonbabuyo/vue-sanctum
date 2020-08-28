import Api from "~/plugins/axios";
import Csrf from "~/plugins/Csrf";

export default {
    async register(form) {
        await Csrf.getCookie()
        return Api.post('/register', form)
    },

    async login(form) {
        await Csrf.getCookie();
        return Api.post('/login', form)
    },

    async logout(form) {
        await Csrf.getCookie();
        return Api.post('/logout', form)
    },

    async me() {
        return Api.get('/user')
    }
}
