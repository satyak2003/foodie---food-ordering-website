import userModel from "../models/usermodel.js";

//add item to cart function
const addToCart = async(req,res)=>{
    try {
        let userData = await userModel.findById(req.id.userId);
        let cartData = await userData.cartData;
        if(!cartData[req.body.itemId]){
            cartData[req.body.itemId] = 1;
        }
        else{
            cartData[req.body.itemId] += 1;
        }
        await userModel.findByIdAndUpdate(req.body.userId,{cartData});
        res.json({success:true,message:"Items Added To Cart"})
    } catch (error) {
        console.log(error)
        res.json({Successfalse,message:"Items not added - Error"})
    }
}

//remove item from cart function
const removeFromCart = async(res,req)=>{
    try {
        let userData = await userModel.findById(req.id.userId);
        let cartData = await userData.cartData;
        if (cartData[req.body,itemId>0]) {
            cartData[req.body.itemId] -= 1;
        }
        await userModel.findByIdAndUpdate(req.body.userId,{cartData});
        res.json({success:true,message:"Items removed from cart"})
    } catch (error) {
        console.log(error)
        req.json({success:false,message:"Error - items not removed from cart!"})
    }
}

//fetch user cart data function
const getCart = async(req,res)=>{
    try {
        let userData = await userModel.findById(req.body.userId);
        let cartData = await userData.cartData;
        res.json({success:true,cartData})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"Error - getting cart data"})
    }

}

export{addToCart,removeFromCart,getCart}