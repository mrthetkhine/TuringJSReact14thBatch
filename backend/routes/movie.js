var express = require('express');
const movieController = require("../controllers/MovieController");
var router = express.Router();

router.get('/',movieController.getAllMovies);
router.get('/:id',movieController.getMovieById);
router.get('/year/:year',movieController.getMovieByYear);
router.post('/',movieController.saveMovie);
router.put('/:id',movieController.updateMovieById);
router.delete('/:id',movieController.deleteMovie);

module.exports = router;