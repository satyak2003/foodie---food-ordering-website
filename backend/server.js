import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodroute.js"
import usrRouter from "./routes/userroute.js"
import 'dotenv/config'
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"


//app configration

const app = express()
const port = 3000

//middle ware
app.use(express.json())
app.use(cors())

//Database connection
connectDB();

//API end point
app.use("/api/food",foodRouter);
app.use("/images",express.static('uploads'))
app.use("/api/user",usrRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)


app.get("/",(req,res)=>{
    res.send("API working")
})

app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`)
})

//mongodb+srv://carlo:carlo2k23@cluster0.hhlwlv2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0