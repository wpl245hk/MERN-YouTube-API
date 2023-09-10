import axios from 'axios';

const httpsBase = axios.create({
    baseURL: "http://localhost:3001/api/",
    headers: { "Content-Type": "application/json" }
});

class httpsBackend {
    static async youtubeFunction (data){
        return await httpsBase.get(`youtube/${data}`);
    }

    static async mongodbGetFunction (data){
        if (data.username) {
            let ans = await httpsBase.get(`mongodb/?username=${data.username}&pw=${data.password}`);
            return ans
        }
    }

    static async mongodbPostFunction (data){
        if (data.username) {
            return await httpsBase.post(`mongodb`, data);
        }
    }

    static tryfunction(){
        return "helloworld";
    }
};

export default httpsBackend;