import express from "express"
import { loginInfo } from "../schemaController/loginController.js"

const loginRouter = express.Router();

loginRouter.post('/login', loginInfo)

export default loginRouter;