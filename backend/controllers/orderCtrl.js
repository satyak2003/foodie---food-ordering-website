import orderModel from "../models/orderModel.js";
import userModel from "../models/usermodel.js";
import Stripe from "stripe"

const stripe = new Stripe (process.env.STRIPE_SECRET_KEY)

//function to place user order
const placeOrder = async(req,res)=>{

    const frontend_url = "https://localhost:3000"

    try {
        const newOrder = new orderModel({
            userId:req.body.userId,
            items:req.body.items,
            amount:req.body.amount,
            address:req.body.address
        })
        await newOrder.save();
        await userModel.findByIdAndUpdate(req.body.userId,{cartData:{}});

        const lineItem = req.body.items.map((item)=>({
            price_data:{
                currency:"inr",
                product_data:{
                    name:item.name
                },
                unit_amount:item.price*100*80
            },
            quantity:item.quantity
        }))

        lineItem.push({
            price_data:{
                currency:"inr",
                product_data:{
                    name:"delivery charges",
                    unit_amount:1*100*80
                },
                quantity:1
            }
        })

        const session  = await stripe.Checkout.session.create({
            lineItem:lineItem,
            mode:"payment",
            success_url:`${frontend_url}/verify?success=true&orderId${newOrder._id}`,
            cancel_url:`${frontend_url}/verify?success=false&orderId${newOrder._id}`
        })

        res.json({success:true,session_url:session.url})

    } catch (error) {
        
    }
}

export {placeOrder}