const Airplane = require('../models/airplane');

const getAirplanes = async(req, res) => {
    try {
        const airplanes = await Airplane.find();
        res.status(200).json(airplanes);
    } catch (error) {
        res.status(500).json({error: 'Internal Server Error'})
    }
};

module.exports = {
    getAirplanes
}