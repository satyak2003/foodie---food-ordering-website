import express from "express"
import { loginusr,regusr } from "../controllers/userctrl.js"

const usrRouter = express.Router()

usrRouter.post("/register",regusr)
usrRouter.post("/login",loginusr)

export default usrRouter