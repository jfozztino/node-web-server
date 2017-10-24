const express = require('express');
const hbs = require('hbs');
const fs = require('fs');
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

app.get('/', (req, res) => {
    res.render('home.hbs', {
      pageTitle: 'jFozztino',
      subHeader: `software developer and Ariana Grande's 287th biggest fan`,
      welcomeMessage: 'welcome to my internet location',
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
