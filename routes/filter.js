var express = require('express');
var router = express.Router();

router.get('*', function(req, res, next) {

    if (req.originalUrl === '/api/login') {
    return next();
    } else {
         //DO SOMETHING
         console.log("filter called");
    }
    return next();
});

module.exports = router;