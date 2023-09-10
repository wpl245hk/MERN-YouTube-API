import { ObjectId } from 'mongodb';
import httpsYoutube from '../api/youtube.api.js';
import httpsMongoDB from '../api/mongodb.api.js';


export default class controller {
    static async youtubeApiGet(req,res,next){
        let {data}  = await httpsYoutube.getFunction(req.params.name);
        console.log(`Connection to youtube API succesfully`);
        return res.send(data)
    }

    static async mongodbApiGet(req,res,next){
        let returnUser = await httpsMongoDB.getFunction(req.query.username, req.query.pw );
        console.log(`Connection to mongodbApiGet succesfully`) ;
        return res.send( returnUser)
    }

    static async mongodbApiPost(req,res,next){
        const user = {
            _id: new ObjectId(),
            username: req.body.username,
            password: req.body.password,
            formation: req.body.formation
        }
        try {await httpsMongoDB.postFunction(user);
            console.log(`Connection to mongodbApiPost succesfully`) ;
            res.json({ status: "success"});} 
        catch(e){
            console.error(`error: No response from mongodb post API ${e}`)
        }
    }
};