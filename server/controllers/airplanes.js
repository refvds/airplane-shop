const Airplane = require('../models/airplane');

const getAirplanes = async(req, res) => {
    try {
        const airplanes = await Airplane.find();
        res.status(200).json(airplanes);
    } catch (error) {
        res.status(500).json({error: 'Internal Server Error'});
    }
};

const getAirplane = async(req, res) => {
    try {
        const airplane = await Airplane.findById({ _id: req.params.id });
        res.status(200).json(airplane);
    } catch (error) {
        res.status(400).json({error: 'The airplane has not found'});
    }
}

const createAirplane = async(req, res) => {
    const errors = {};
    
    if (!req.body.name) {
        errors.name = {
            message: 'This field must be filled in'
        }
    }

    if (!req.body.price) {
        errors.price = {
            message: 'This field must be filled in'
        }
    }

    if (!req.body.description) {
        errors.description = {
            message: 'This field must be filled in'
        }
    }

    if (req.body.description && req.body.description.length > 700) {
        errors.description = {
            message: 'The length of this field must be 700 or less '
        }
    }

    if (!req.body.capacity) {
        errors.capacity = {
            message: 'This field must be filled in'
        }
    }

    if (Object.keys(errors).length > 0) {
        return res.status(400).json(errors);
    }

    try {
        const { name, price, description, capacity } = req.body;
        const airplane = await Airplane.create({
            name, 
            price, 
            description, 
            capacity,
            image:  `http://localhost:${process.env.PORT}/static/${req.file.filename}` 
        });
        
        res.status(201).json(airplane);
    } catch(error) {
        res.status(500).json({error: 'Internal Server Error'});
    }
}


module.exports = {
    getAirplanes,
    createAirplane,
    getAirplane
}