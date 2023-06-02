const path = require('path')
const express = require('express');
const multer = require('multer');
const { getAirplanes, createAirplane } = require('../controllers/airplanes');

const router = express.Router();

const storage = multer.diskStorage({
    destination: './assets/',
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
});

const upload = multer({ storage });

router.get('/', getAirplanes);
router.get('/:id', (req, res)=>res.send('Get an airplane'));
router.post('/', upload.single('image'), createAirplane);

module.exports = router;