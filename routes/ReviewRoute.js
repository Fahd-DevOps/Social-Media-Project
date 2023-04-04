const express = require("express");
const router = express.Router();
const Post = require("../models/Post");
const Review = require("../models/ReviewSchema")

router.post("/:post_id/review", async(req,res,next)=>{
    const review = await Review.create({
        review: req.body.review,
        user: req.user._id,
        post: req.params.post_id
    })
    await review.save();
    res.send(review);
})

router.get('/:post_id/review', async(req,res)=>{
    const reviews = await Review.find({post: req.params.post_id});
    let sum = 0;
    let number= reviews.length;

    for(let i=0; i< number; i++){
        sum+= reviews[i].review;
    }
    let average = sum / number;
    res.json({ average: `${average}` });
    
    // res.send(average);
})


router.patch("/:post_id/review/:review_id", async(req,res,next)=>{
    const updatedReview = req.body.review;

    const review = await Review.findByIdAndUpdate(
        req.params.review_id,
        { review: updatedReview },
        { new: true }
        );
        res.json(review);
})

router.delete("/:post_id/review/:review_id", async(req,res,next)=>{
    const review = await Review.findByIdAndDelete(req.params.review_id);
    res.json({ message: 'Review deleted Successfully!' });
})


module.exports = router;