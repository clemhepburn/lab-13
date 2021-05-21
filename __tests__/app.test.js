import supertest from 'supertest';
import app from '../lib/app.js';
const request = supertest(app);
import locationData from '../data/location';
import weatherData from '../data/weather';
import { formatLocation, formatWeather, formatYelp } from '../lib/munge-utils.js';

describe('API Data Munging Functions', () => {

  const expectedLocation = {
    formatted_query: 'Portland, Multnomah County, Oregon, USA',
    latitude: '45.5202471',
    longitude: '-122.6741949'
  };

    
  test('munges location data', async () => {
    
    const output = formatLocation(locationData);

    expect(output).toEqual(expectedLocation);

  });

  const expectedWeather = [

    {
      forecast: 'Broken clouds',
      time: '2021-05-12'
    },
    {
      forecast: 'Few clouds',
      time: '2021-05-13'
    },
    {
      forecast: 'Moderate rain',
      time: '2021-05-14'
    }
  ];

  test('weather data munge function', async () => {
    const output = formatWeather(weatherData);

    expect(output).toEqual(expectedWeather);
  });


});