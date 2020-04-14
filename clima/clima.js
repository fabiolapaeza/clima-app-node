const axios = require('axios');

const getClima = async (lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=7369feffa6603adc9c055917ed8b66ef&units=metric`);
    return resp.data.main.temp;
}

module.exports = {
    getClima
}