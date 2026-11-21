const express = require('express');
const router = express.Router();
const reviewController= require('./../controllers/ReviewController');

router.get('/movies/:movieId',reviewController.getAllReviewsByMovieId);
router.get('/:id',reviewController.getReviewById);
router.post('/',reviewController.saveReview);
router.put('/:id',reviewController.updateReviewById);
router.delete('/:id',reviewController.deleteReviewById);
module.exports = router;