import mongodb from 'mongodb';
import app from "./server.js";
import dotenv from "dotenv";
import httpsMongoDB from './api/mongodb.api.js';

dotenv.config()
const port = process.env.PORT || 5000

mongodb.MongoClient.connect(
    process.env.MONGODB_URI,
    {   maxPoolSize: 50,
        wtimeoutMS: 2500})
    .then( async conn => {
        await httpsMongoDB.injectDB(conn)
        app.listen(port, ()=>{
            console.log(`listening on port ${port}`);
        });})
    .catch( err => {
        console.error(err.stack)
        process.exit(1)}
);

