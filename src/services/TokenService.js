const LOCAL_STORAGE_TOKEN_KET_NAME = 'token';

export default class TokenService {
    static get() {
        console.log("token" + localStorage.getItem(LOCAL_STORAGE_TOKEN_KET_NAME) )
        return localStorage.getItem(LOCAL_STORAGE_TOKEN_KET_NAME);
    }

    static set(token) {
        localStorage.setItem(LOCAL_STORAGE_TOKEN_KET_NAME, token);
    }

    static remove() {
        localStorage.removeItem(LOCAL_STORAGE_TOKEN_KET_NAME);
    }
}