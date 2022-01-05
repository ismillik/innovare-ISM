const router = require('express').Router();
const Milestone = require('../db/models/Milestone');

//get all milestones
router.get('/', async (req, res, next) => {
    try {
        res.send(
            await Milestone.findAll()
        );
    }
    catch(err) {
        next(err);
    };
});

//create milestone
router.post('/', async (req, res, next) => {
    try {
        const milestone = await Milestone.create(req.body);
        res.status(201).send(milestone);
    }
    catch(err) {
        next(err);
    };
});

//Delete milestone
router.delete('/:id', async (req, res, next) => {
  try {
    const milestone = await Milestone.findByPk(req.params.id);
    await milestone.destroy();
    res.sendStatus(202);
  } catch (err) {
    next(err);
  }
});

//Update milestone
router.put('/:id', async (req, res, next) => {
  try {
    const milestone = await Milestone.findByPk(req.params.id);
    res.send(await milestone.update(req.body));
  } catch (err) {
    next(err);
  }
});

module.exports = router;