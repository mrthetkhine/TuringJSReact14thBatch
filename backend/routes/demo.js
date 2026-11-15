var express = require('express');
var router = express.Router();
var path = require('path');
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
router.use(function (req, res, next) {
    console.log('/demo route ',req.url);
    next();
})
router.get('/', function(req, res, next) {
    console.log('req ',req.url);
    console.log('req.user ', req.user);
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
router.get('/user/:id', (req, res, next) => {
    console.log('user/id first route');
    if (req.params.id === '0') {
        return next('route');
    }
    res.send(`User ${req.params.id}`);
});

router.get('/user/:id', (req, res) => {
    console.log('user/id second handler');
    res.send('Special handler for user ID 0');
});
router.get('/json', (req, res) => {
    console.log('user/id second handler');
    res.json({
        message:'Handle with res.json'
    })
});
router.get('/download', (req, res) => {
    console.log('download');
    res.download('./public/hello.txt');
});
router.get('/admin', (req, res) => {
    console.log('redirect');
    res.redirect(`/demo/login`);
});
router.get('/login', (req, res) => {
    console.log('login');
    res.render('login');
});
router.get('/send', (req, res) => {
    console.log('send');
    res.status(404).send('Sorry, we cannot find that!');
});
router.get('/sendFile', (req, res,next) => {
    console.log('sendFile');
    let options = {
        root: path.join(__dirname,'../','public'),
        //dotfiles: 'deny',
        headers: {
            'x-timestamp': Date.now(),
            'x-sent': true,
        },
    };
    res.sendFile('hello.txt', options, (err) => {
        if (err) {
            console.log('err ',err);
            next(err);
        } else {
            console.log('Sent:');
        }
    });
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