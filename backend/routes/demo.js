var express = require('express');
var router = express.Router();

let todos = [
    {
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
    },
    {
        "userId": 1,
        "id": 2,
        "title": "quis ut nam facilis et officia qui",
        "completed": false
    },
    {
        "userId": 1,
        "id": 3,
        "title": "fugiat veniam minus",
        "completed": false
    },
    {
        "userId": 1,
        "id": 4,
        "title": "et porro tempora",
        "completed": true
    },
];
router.get('/', function(req, res, next) {
    console.log('req ',req.url);
    return res.json(todos);
});
//demo/movies
router.get('/movies/:movieId/actors/:actorId', (req, res) => {
    //console.log('');
    res.json({
            movieId: req.params.movieId,
            actorId: req.params.actorId,
    });
});
router.get('/files/*', (req, res) => {
    // GET /files/images/logo.png
    console.dir('here wildcard ',req.params);
    // => [ 'images', 'logo.png' ]
    res.json({
        message: 'File '+req.params[0]
    })
    //res.send(`File: ${req.params.filepath.join('/')}`);
});
/*router.get(/a/, (req, res) => {
    console.log('this match ');
    res.send('/a/');
});*/
/*router.get('/:id', function(req, res, next) {
    console.log('req id ',req.params.id);
    return res.json(todos[req.params.id]);
});*/
router.post('/', function(req, res, next) {
    console.log('post ',req.body);
    return res.status(201).json(req.body);
});
router.put('/:id', function(req, res, next) {
    console.log('put update ',req.body);
    return res.status(200).json(req.body);
});

router.delete('/:id', function(req, res, next) {
    console.log('delete ',req.body);
    return res.status(200).json(req.body);
});

module.exports = router;