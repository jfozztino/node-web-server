const axios = require('axios');

var getWeather = (address) => {
  return axios.get(`https://api.darksky.net/forecast/e4a0ad9fe4bd5f6ecc80bfde0ff03c06/${address}`);
};

module.exports.getWeather = getWeather;
