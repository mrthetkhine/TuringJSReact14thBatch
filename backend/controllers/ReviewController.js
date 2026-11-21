const reviewService = require("../services/ReviewService");

async function getAllReviewsByMovieId(req,res,next  ){
    let movieId = req.params.movieId;
    let reviews = await reviewService.getAllReviewByMovieId(movieId);
    res.json(reviews);
}
async function getReviewById(req,res,next  ){
    let id = req.params.id;
    let review = await reviewService.getReviewById(id);
    res.json(review);
}

async function saveReview(req,res,next)
{
    let review = req.body;
    let savedReview = await reviewService.saveReview(review);
    res.json(savedReview);
}
async function updateReviewById(req,res,next  ){
    let id = req.params.id;
    let review = req.body;
    let updatedReview = await reviewService.updateReviewById(id,review);
    res.json(updatedReview);
}
async function deleteReviewById(req,res,next  ){
    let id = req.params.id;

    let deletedReview = await reviewService.deleteById(id);
    if(deletedReview){
        res.json(deletedReview);
    }
    else {
        res.status(404).json({
            message:'Review '+id+' Not Found'
        });
    }

}

module.exports = {
    getAllReviewsByMovieId,
    getReviewById,
    saveReview,
    updateReviewById,
    deleteReviewById,
}