var express = require('express');
var router = express.Router();

let index = 0;

router.get('*', function(req, res, next) {

    if (req.originalUrl === '/api/login') {
    return next();
    } else {
         //DO SOMETHING
         console.log("filter called");
         console.log("Index" + index++);
    }
    return next();
});

module.exports = router;