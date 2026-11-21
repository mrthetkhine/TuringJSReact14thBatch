const mongoose = require('mongoose');
const { Schema } = mongoose;
const ReviewSchema =new Schema({
    review: String,
    rating:Number,
    movie:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Movie',
        required: true
    },
});
const Review = mongoose.model('Review', ReviewSchema);
module.exports = Review;