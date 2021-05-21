/* eslint-disable no-console */
// import dependencies
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import request from 'superagent';

// make an express app
const app = express();

// allow our server to be called from any website
app.use(cors());
// read JSON from body of request when indicated by Content-Type
app.use(express.json());
// enhanced logging
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send('Proxy Api');
});


// API routes:

app.get('/location', async (req, res) => {
  try {
    const LOCATION_KEY = process.env.LOCATION_DB_API_KEY;
    const response = await request.get(`https://us1.locationiq.com/v1/search.php?key=${LOCATION_KEY}&q=${req.query.search}&format=json`);

    const location = formatLocation(response.body);

    res.json(location);
  }
  catch(err) {
    console.log(err);
    res.status(500).send({ error: err });
  }
});

app.get('/weather', async (req, res) => {
  try {
    const WEATHER_KEY = process.env.WEATHER_DB_API_KEY;
    const response = await request.get(`https://api.weatherbit.io/v2.0/forecast/daily?&lat=${req.query.latitude}&lon=${req.query.longitude}&key=${WEATHER_KEY}`);

    const weather = formatWeather(response.body);

    res.json(weather);
  }
  catch(err) {
    console.log(err);
    res.status(500).send({ error: err });
  }
});

app.get('/reviews', async (req, res) => {
  try {
    const YELP_KEY = process.env.YELP_DB_API_KEY;
    const response = await request
      .get(`https://api.yelp.com/v3/businesses/search?latitude=${req.query.latitude}&longitude=${req.query.longitude}`)
      .set('Authorization', `Bearer ${YELP_KEY}`);

    const yelp = formatYelp(response.body);

    res.json(yelp);
  }
  catch(err) {
    console.log(err);
    res.status(500).send({ error: err });
  }
});


export default app;