import axios from "axios";

const getAirplanes = async () => {
    const airplanes = await axios.get('http://localhost:4000/api/airplanes');
    return airplanes.data;
}


const airplanesService = {
    getAirplanes
  
}

export default airplanesService;