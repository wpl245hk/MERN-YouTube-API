import express from 'express';
import cors from 'cors';
import router from './dao/router.js';

const app = express();

app.use(cors())
app.use(express.json())
app.use("/api", router)
app.use("*", (req, res)=>{
    res.status(404).json({error:"page not found"})
})

export default app;