import axios from "axios";

const getAirplanes = async () => {
    const airplanes = await axios.get('http://localhost:4000/api/airplanes');
    return airplanes.data;
}

const getAirplane = async (id) => {
    const airplane = await axios.get(`http://localhost:4000/api/airplanes/${id}`);
    console.log(airplane.data)
    return airplane.data;
}

const postAirplane = async (airplaneObj) => {
    const airplane = await axios.post('http://localhost:4000/api/airplanes',airplaneObj);
    return airplane.data;
}

const airplanesService = {
    getAirplanes,
    getAirplane,
    postAirplane
}

export default airplanesService;