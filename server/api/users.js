const router = require('express').Router();
const User = require('../db/models/User');

//get all users
router.get('/', async (req, res, next) => {
    try {
        res.send(
            await User.findAll()
        );
    }
    catch(err) {
        next(err);
    };
});

module.exports = router;