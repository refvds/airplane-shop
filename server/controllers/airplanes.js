const Airplane = require('../models/airplane');

const getAirplanes = async(req, res) => {
    try {
        const airplanes = await Airplane.find();
        res.status(200).json(airplanes);
    } catch (error) {
        res.status(500).json({error: 'Internal Server Error'});
    }
};

const createAirplane = async(req, res) => {
    try {
        const { name, price, description, copacity } = req.body;
        console.log(req.body)
        const airplane = await Airplane.create({
            name, 
            price, 
            description, 
            copacity,
            image:  `http://localhost:${process.env.PORT}/static/${req.file.filename}` 
        });
        res.status(201).json(airplane);
    } catch(error) {
        res.status(500).json({error: 'Internal Server Error'});
    }
}


module.exports = {
    getAirplanes,
    createAirplane
}