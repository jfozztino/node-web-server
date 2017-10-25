const axios = require('axios');

var getWeather = (coords) => {
  return axios.get(`https://api.darksky.net/forecast/e4a0ad9fe4bd5f6ecc80bfde0ff03c06/${coords[0]},${coords[1]}`);
        // .then((response) => {
        //     return response.data.currently.temperature;
        // })
        // .catch((error) => {
        //   console.log(`Error: ${error}`);
        // });
};

module.exports.getWeather = getWeather;
