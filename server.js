const express = require('express');
const hbs = require('hbs');
const fs = require('fs');
const ipify = require('ipify');
const axios = require('axios');

const weather = require('./weather/weather');

const port = process.env.PORT || 3000;

var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

// app.use((req, res, next) => {
//   var now = new Date().toString();
//   var log = `${now}: ${req.method} ${req.url}`;
//   fs.appendFile('server.log', log + '\n', (err) => {
//     console.log('Unable to append to server.log.');
//   });
//   next();
// });

// app.use((req, res, next) => {
//   res.render('maintenance.hbs', {
//     pageTitle: 'sorry'
//   });
//   next();
// });

app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', () => new Date().getFullYear());

hbs.registerHelper('screamIt', (text) => text.toUpperCase());

app.use((req, res, next) => {
  axios.get(`https://api.darksky.net/forecast/e4a0ad9fe4bd5f6ecc80bfde0ff03c06/34,-118`)
    .then((response) => {
        var temperature = response.data.currently.temperature.toString().split('.');
        temperature = temperature[0] + '°';
        res.locals.temperature = temperature;
        next();
    })
    .catch((error) => {
      console.log('IP ERROR');
      console.log(error);
    })
});


// app.use((req, res, next) => {
//   ipify().then((ip) => {
//     console.log(ip);
//     axios.get(`http://ipinfo.io/${ip}`)
//       .then((response) => {
//           var coords = response.data.loc.split(',');
//           var city = response.data.city;
//           var state = response.data.region;
//           res.locals.city = city;
//           res.locals.state = state;
//           return weather.getWeather(coords);
//       })
//       .then((response) => {
//           var temperature = response.data.currently.temperature.toString().split('.');
//           temperature = temperature[0] + '°';
//           res.locals.temperature = temperature;
//           next();
//       })
//       .catch((error) => {
//         console.log('IP ERROR');
//         console.log(error);
//       })
//     });
// });

app.get('/', (req, res) => {
  console.log('LOCALS:');
  console.log(res.locals);
    res.render('home.hbs', {
      pageTitle: 'jFozztino',
      subHeader: `software developer and <a href="https://twitter.com/intent/tweet?text=Hey, @ArianaGrande, @jFozztino thinks you're awesome" target="_blank">Ariana Grande</a>'s 287th biggest fan`,
      temp: res.locals.temperature,
      city: res.locals.city,
      state: res.locals.state,
      welcomeMessage: 'welcome to my internet location. enjoy some of my codes:',
    });
});

app.get('/about', (req, res) => {
    res.render('about.hbs', {
      pageTitle: 'about jFozztino',
    });
});

app.get('/projects', (req, res) => {
    res.render('about.hbs', {
      pageTitle: 'projects by jFozztino',
    });
});



app.get('/bad', (req, res) => {
    res.send({
      error: 'Unable to fulfill this request.'
    })
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
