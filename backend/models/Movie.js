const mongoose = require('mongoose');
const { Schema } = mongoose;
const MovieSchema =new Schema({
    title: {
        type: String,
        required: true,
    },
    year:Number,
    director:{
        name:String,
        phoneNo:String
    },
    genre:[String],
});
const Movie = mongoose.model('Movie', MovieSchema);
module.exports = Movie;