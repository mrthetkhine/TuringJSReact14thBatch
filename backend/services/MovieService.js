const Movie = require('./../models/Movie');
async function getAllMovies()
{
    let movies = await Movie.find();
    return movies;
}
async function getMovieById(movieId)
{
    let movie = await Movie.findById(movieId);
    return movie;
}
async function saveMovie(movie)
{
    let newMovie = new Movie(movie);
    let savedMovie = await newMovie.save();
    return savedMovie
}
async function updateMovieById(movieId,movie)
{

    let updatedMovie = await Movie.findByIdAndUpdate(movieId,movie,{
        new:true
    })
    return updatedMovie;
}
async function deleteMovieById(movieId)
{

    let movie = await Movie.findByIdAndDelete(movieId);
    return movie;
}
async function getAllMovieByYear(year)
{
    let movie = await Movie.find({
        year
    });
    return movie;
}
module.exports = {
    getAllMovies,
    saveMovie,
    getMovieById,
    updateMovieById,
    deleteMovieById,
    getAllMovieByYear,
}