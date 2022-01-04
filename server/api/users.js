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

//Get single user by id
router.get('/:id', async (req, res, next) => {
    try {
        res.send(await User.findByPk(req.params.id))
    }
    catch(err) {
        next(err);
    };
});

module.exports = router;