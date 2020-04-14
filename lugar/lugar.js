const axios = require('axios');

const getLugarLatLng = async (dir) => {

    const encodeUrl = encodeURI(dir);
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        headers: {'x-rapidapi-key': '2b243ae5demsh733ab6a4bc7d711p17c6e5jsn1f83c5dfe361'}
    });

    const resp = await instance.get();

    if( resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${dir}`);
    }

    const data = resp.data.Results[0]; 
    const direccion = data.name; 
    const lat = data.lat; 
    const lng = data.lon; 

    return {
        direccion, 
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}
