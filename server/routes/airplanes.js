const path = require('path')
const express = require('express');

const {getAirplanes} = require('../controllers/airplanes');



const router = express.Router();

router.get('/', getAirplanes);
router.get('/:id', (req, res)=>res.send('Get an airplane'));
router.post('/', (req, res)=>res.send('post an airplane'));

module.exports = router;