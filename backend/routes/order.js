const router = require("express").Router();
const {authenticateToken} = require("./userauth");
const Book = require("../models/book");
const order = require("../models/order");
const User = require("../models/user");

router.post("/place-order",authenticateToken,async(req,res)=>{
    try{
     const {id} = req.headers;
     const {order} = req.body;
     for(const orderData of order){
        const newOrder = new Order({user:id,book:orderData._id});
        const orderDataFromDb = await newOrder.save();
        //saving order in user model

        await User.findByIdAndUpdate(id,{$push:{orders:orderDataFromDb._id},
        });
        //clearing cart
        await User.findByIdAndUpdate(id,{
            $pull:{cart:orderData._id},
        });
     }   
    return res.json({
        status:"Success",
        message:"Order Plaaced Successfully",
    });
    }
    catch(errer){
        console.log(error);
        return res.status(500).jsoon({message:"An error occured"});
    }
});

router.get("/get-order-history",authenticateToken,async(req,res)=>{
    try{
        const {id} = req.headers;
        const userData = await User.findById(id).populate({
            path:"order",
            populate:{path:"book"},
            }
        );
        const ordersData = userData.orders.reverse();
        returnres.json({
            status:"Success",
            data:ordersData,
        });

    }
    catch(error){
        console.log(error);
        return res.status(500).json({message:"An error Occurred"});
    }
});

router.get("/get-all-orders",authenticateToken,async(req,res)=>{
    try{
        const userData = await Order.find()
        .populate({
            path:"book",
        })
        .populate({
            path:"user",
        })
        .sort({createdAt:-1});
        return res.json({
            status:"Success",
            data:userData,
        });
    }
    catch(error){
        console.log(error);
        return res.status(500).json({message:"An error occured"});
    }
});

router.put("/update-status/:id",authenticateToken,async(req,res)=>{
    try{
        const {id} = req.params;
        await Order.findByIdAndUpdate(id,{status:req.body.status});
        return res.json({
            status:"Success",
            message:"Status updated Successfully",
        });

    }catch(error){
        console.log(error);
        return res.status(500).json({message:"An error occured"});
    }
})

module.exports = router;