const router = require("express").Router();
const User = require("../models/user");
const { route } = require("./book");
const {authenticateToken} = require("./userauth");

//add book to favourite
router.put("/add-book-to-favourite",authenticateToken,async(req,res)=>{
    try{
        const {bookid,id} = req.headers;
        const userData = await User.findById(id);
        const isBookFavourite = userData.foverite.includes(bookid);
        if(isBookFavourite){
            return res.status(200).json({message:"Book is already in favrourite"});
        }
        await User.findByIdAndUpdate(id,{$push:{foverite:bookid}});
        return res.status(200).json({message:"Book added to favrourites"});
    }
    catch(error){
        res.status(500).json({message:"Internal server error"});
    }
});

//remove book from favorite
router.put("/remove-book-from-favorite",authenticateToken,async(req,res)=>{
    try {
        const {bookid,id} = req.headers;
        const UserData = await User.findById(id);
        const isBookFavourite = UserData.foverite.includes(bookid);
        if (isBookFavourite){
            await User.findByIdAndUpdate(id,{$pull:{foverite:bookid}});
        }
        return res.status(200).json({message:"Book removed from favorites"});
    } catch (error) {
        return res.status(500).json({message:"Internal serval error"});
        
    }
});
//get information from favorite book

router.get("/get-favorite-books",authenticateToken,async(req,res)=>{
    try {
        const {id} = req.headers;
        const UserData = await User.findById(id).populate("foverite");
        const FavoriteBooks = UserData.foverite;
        return res.json({
            status:"Success",
            data:FavoriteBooks,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:"Internal serval error"});
        
    }
});

module.exports = router;