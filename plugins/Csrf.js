import Api from "~/plugins/axios";

export default {
    getCookie() {
        return Api.get('https://api.moebius.ph/sanctum/csrf-cookie')
    }
}
