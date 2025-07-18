import express from "express";
import dotenv from "dotenv";
import { dbConnection } from "./dbConnection/dbConnection.js";
import detailsRouter from "./router/registerRouter.js";
import cors from 'cors'
import loginRouter from "./router/loginRouter.js";

const app= express();
dotenv.config({path:'./config/config.env'})

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(cors({
    origin:process.env.FRONTEND_URL,
    methods:["GET", "POST", "PUT", "DELETE"],
    credentials:true
}))

dbConnection()

app.use('/form/info', detailsRouter)
app.use('/user',loginRouter)

export default app