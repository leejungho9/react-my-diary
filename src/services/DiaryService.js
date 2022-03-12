import axios from "axios";
const BOOK_API_URL = 'https://api.marktube.tv/v1/book';

export default class DiaryService {
    static async getDiary(token) {
        const response = await axios.get(BOOK_API_URL, {
            headers : {
              Authorization : `Bearer ${token}`, 
            },
          });
            return response.data;
    }
  static async AddDiary(token, diary) {
    const response = await axios.post(BOOK_API_URL, diary, {
        headers : {
          Authorization : `Bearer ${token}`, 
        },
      });
        return response.data;
}
}

