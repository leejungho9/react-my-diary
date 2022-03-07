//token api

import axios from "axios";
const USER_API_URL = "https://api.marktube.tv/v1/me";

export default class UserService {
    static async login(reqData) {
        const response = await axios.post(USER_API_URL, reqData);
        return response.data.token;
     
    }
    static async logout(token) {
        await axios.delete(USER_API_URL, {headers: {Authorization: `Bearer ${token}`}})
    }

}