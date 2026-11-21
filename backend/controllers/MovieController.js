const movieService = require('../services/MovieService');

async function getAllMovies(req,res,next)
{
    const movies = await movieService.getAllMovies();
    res.json(movies);
}
async function getMovieById(req,res,next)
{
    const movieId = req.params.id;
    try{
        const movie = await movieService.getMovieById(movieId);
        if(movie)
        {
            res.json(movie);
        }
        else
        {
            res.status(404).json({
                message:'Movie '+movieId+" not found"
            })
        }

    }
    catch(err)
    {
        res.status(404).json({
            message:'Movie '+movieId+" not found"
        })
    }

}
async function getMovieByYear(req,res,next)
{
    const year = req.params.year;
    try{
        const movies = await movieService.getAllMovieByYear(year);
        if(movies)
        {
            res.json(movies);
        }
        else
        {
            res.status(404).json({
                message:'Movies not found'
            })
        }

    }
    catch(err)
    {
        res.status(404).json({
            message:'Movie '+movieId+" not found"
        })
    }

}
async function updateMovieById(req,res,next)
{
    const movieId = req.params.id;
    const movie = req.body;
    try{
        const updatedMovie = await movieService.updateMovieById(movieId,movie);
        res.json(updatedMovie);

    }
    catch(err)
    {
        res.status(404).json({
            message:'Movie '+movieId+" not found"
        })
    }

}
async function saveMovie(req,res,next)
{
    const movie = req.body;

    try {
        let savedMovie =await movieService.saveMovie(movie);

        res.status(201).json(savedMovie);
    }
    catch(err)
    {
        res.status(400).json({
            message:err.message
            })
    }
}
async function deleteMovie(req,res,next)
{
    const movieId = req.params.id;
    try{
        const movie = await movieService.deleteMovieById(movieId);
        if(movie)
        {
            res.json(movie);
        }
        else
        {
            res.status(404).json({
                message:'Movie '+movieId+" not found"
            })
        }

    }
    catch(err)
    {
        res.status(404).json({
            message:'Movie '+movieId+" not found"
        })
    }

}
module.exports = {
    getAllMovies,
    saveMovie,
    getMovieById,
    updateMovieById,
    deleteMovie,
    getMovieByYear,
}