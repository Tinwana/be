import express, { json, urlencoded } from "express";
import cors from 'cors'
import mongoose from 'mongoose'
import route from "./routes/index.js";
import dotenv from 'dotenv';
dotenv.config()
const app = express();
const port = process.env.PORT || 3001;
const url = process.env.DATABASE_URL;
app.use(express.urlencoded())
app.use(express.json()); 
//localhost:3001
app.use('/',cors())
mongoose.connect(url , { useNewUrlParser:true , useUnifiedTopology:true })
.then(res => {
    console.log('connect db successfully');
    
})
.catch(err => {
    console.log({ error: err});
})
route(app);
app.listen(port, ()=> {
    console.log(`listening on ${port}`);
})


