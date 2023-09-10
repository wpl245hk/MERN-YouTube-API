import axios from 'axios';

const httpsBase = axios.create({
    baseURL: `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=3&order=date&type=video&key=${process.env.YOUTUBE_API_KEY}&q=football%7C`,
    headers: { "Content-Type": "application/json" }
});

class httpsYoutube {
  
  static async getFunction (name){
    try {
      return await httpsBase.get(`${name}`) } 
    catch (e) {console.error(`error: Cannot connect to youtube API ${e}`) }
  }
};

export default httpsYoutube;