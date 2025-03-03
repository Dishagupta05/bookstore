const router = require("express").Router();
const User = require("../models/user");
const {authenticateToken} = require("./userauth");

//put to cart

router.put("/add-to-cart",authenticateToken,async(req,res)=>{
    try{
    const {bookid,id} = req.headers;
    const UserData = await User.findById(id);
    const isBookinCart = UserData.cart.includes(bookid);
    if(isBookinCart){
        return res.json({
            status:"Success",
            message:"Book is already in cart",
        });
    }
    await User.findByIdAndUpdate(id,{
        $push:{cart:bookid},
    });

    return res.json({
        status:"Success",
        message:"Book added to cart",

    });
}catch(error){
    console.log(error);
    return res.status(500).json({message:"An error occured"});
}

});


//remove book from cart

router.put("/remove-book-from-cart/:bookid",authenticateToken,async(req,res)=>{
    try {
        const {bookid}= req.params;
        const {id}=req.headers;
        await User.findByIdAndUpdate(id,{
            $pull:{cart:bookid},
        });
        return res.json({
            status:"success",
            message:"Book removed from cart",
        });

        
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:"An error occured"});
        
    }
});

//get cart of a user 

router.get("/get-cart",authenticateToken,async(req,res)=>{
    try{
        const {id} = req.headers;
        const UserData = await User.findById(id).populate("cart");
        const cart = UserData.cart.reverse();

        return res.json({
            status:"Success",
            data:cart,
        });
    }
    catch(error){
        console.log(error);
        return res.status(500).json({message:"An error occured"});
    }
})
module.exports = router;