'use strict';

require('dotenv').config();
const express           = require('express');
const app               = express();
const PORT              = process.env.PORT || 3000;
const ENV               = process.env.NODE_ENV || 'development';
const googleMapsApiKey  = process.env.GOOGLE_MAPS_API_KEY;
const bodyParser        = require('body-parser');
const compression       = require('compression');
const cookieSession     = require('cookie-session');
const db                = require('./db');
const helmet            = require('helmet');
const knexConfig        = require('./knexfile');
const minifyHTML        = require('express-minify-html');
const sass              = require('node-sass-middleware');
const directoryRoutes   = require('./routes/directory');
const eventCreateRoutes = require('./routes/create-event');
const eventSaveRoutes   = require('./routes/event');
const placeRoutes       = require('./routes/place');
const priceRoutes       = require('./routes/price');
const userRoutes        = require('./routes/user');

db.init(app, knexConfig[ENV]);
const knex = db.handle();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static('public'));

// Use Helmet for secure HTTP headers
app.use(helmet());

// Use Compression for gzip compression middleware
app.use(compression());

app.use(cookieSession({
  keys: ['hello', 'world']
}));

// Use MinifyHTML to speed up HTML delivery in production
app.use(minifyHTML({
  override: true,
  exception_url: false,
  htmlMinifier: {
    removeComments: true,
    collapseWhitespace: true,
    collapseBooleanAttributes: true,
    removeAttributeQuotes: true,
    removeEmptyAttributes: true,
    minifyJS: true
  }
}));

app.use((req, res, next) => {
  res.locals.userId = req.session.userId;
  res.locals.apiKey = googleMapsApiKey;
  next();
});

// Use Sass with compressed (minified) output to speed up delivery
app.use('/styles', sass({
  src: __dirname + '/styles',
  dest: __dirname + '/public/styles',
  debug: true,
  outputStyle: 'compressed'
}));

// For production (Heroku) http:// requests, redirect to https://
if (app.get('env') === 'production') {
  app.use((req, res, next) => {
    if (req.header('X-Forwarded-Proto') !== 'https') {
      res.redirect(`https://${req.header('host')}${req.url}`);
    } else {
      next();
    }
  });
}

// Route to home page (GET)
app.get('/', (req, res) => {
  knex('regions')
    .select([
      'regions.name as region_name',
      'regions.slug as region_slug'
    ])
    .orderBy('region_name')
    .then((regionResults) => {
      knex('places')
        .select([
          'regions.slug as region_slug',
          'regions.id as region_id',
          'places.name as place_name',
          'places.slug as place_slug'
        ])
        .join('regions', 'regions.id', '=', 'places.region_id')
        .orderBy('place_name')
        .then((placeResults) => {
          let templateVars = {
            region: regionResults,
            place: placeResults
          };
          res.render('index', templateVars);
        });
    });
});

// Imported routes from ./routes directory
app.use('/bc', directoryRoutes);
app.use('/create-event', eventCreateRoutes);
app.use('/event', eventSaveRoutes);
app.use('/user', userRoutes);
app.use('/place', placeRoutes);
app.use('/price', priceRoutes);

// Route for 404 catch-all
app.get('*', function(req, res){
  res.status(404).render('404');
});

app.listen(PORT, () => {
  console.log('Listening on port ' + PORT);
});
