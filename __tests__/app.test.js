import supertest from 'supertest';
import app from '../lib/app.js';
const request = supertest(app);
import locationData from '../data/location';
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


});