var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log('req ',req.url);
  res.json({
      id:1,
      name: "Demo"
    }
  );
});

module.exports = router;
