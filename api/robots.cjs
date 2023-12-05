const express = require('express');
const router = express.Router();

const {
  getAllRobots
} = require('../db/robots.cjs')


router.get('/', async (req, res, next) => {
  try{
    const robots = await getAllRobots();
    res.send(robots);
  } catch (err) {
    next(err)
  }
})

module.exports = router;