const mongoose = require('mongoose');
const Review = require('./../models/Review');

async function getAllReviewByMovieId(movieId){
    const reviews = await Review.find({
        movie:movieId
    })
    //.populate('movie');
    return reviews;
}
async function getReviewById(id){
    const review = await Review.findById(id);
    return review;
}
async function saveReview(review){
    review.movie = new mongoose.Types.ObjectId(review.movie);

    let newReview = new Review(review);
    let savedReview = await newReview.save();
    return savedReview;
}
async function updateReviewById(id,review){
    review.movie = new mongoose.Types.ObjectId(review.movie);

    let updatedReview = await Review.findByIdAndUpdate(id,review,{
        new:true
    });
    return updatedReview;
}
async function deleteById(id){

    let deletedReview = await Review.findByIdAndDelete(id);
    return deletedReview;
}
module.exports = {
    getAllReviewByMovieId,
    getReviewById,
    saveReview,
    updateReviewById,
    deleteById,
}