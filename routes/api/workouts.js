const router = require('express').Router();
const db = require('../../models/Workout.js');

// ROUTES

router.get('/', (req, res) => {
  db.find()
    .then((data) => res.status(200).json(data))
    .catch((error) => res.status(400).json(error));
});

router.post('/', (req, res) => {
    console.log(req.body);
  db.create(req.body)
    .then((data) => res.status(200).json(data))
    .catch((error) => res.status(400).json(error));
});

router.put('/:id', (req, res) => {
    console.log(req.body, req.params.id);
  db.findOneAndUpdate(
    {
      _id: req.params.id,
    },
    {
      $push: {
        exercises: req.body,
      },
      $inc: {
        totalDuration: req.body.duration,
      },
    }
  )
    .then((data) => res.json(data))
    .catch((error) => res.status(500).json(error));
});

router.get('/range', (req, res) => {
  db.find()
    .then((data) => res.status(200).json(data))
    .catch((error) => res.status(400).json(error));
});

module.exports = router;