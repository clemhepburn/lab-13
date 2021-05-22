import locationData from '../data/location';
import weatherData from '../data/weather';
import yelpData from '../data/yelp';
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

  const expectedYelp = [
    {
      name: 'Luc Lac',
      image_url: 'https://s3-media1.fl.yelpcdn.com/bphoto/azr6sD6VeJbdaiO2aKvSsw/o.jpg',
      price: '$$',
      rating: 4.0,
      url: 'https://www.yelp.com/biz/luc-lac-portland-7?adjust_creative=SIP1Dfwy1M0HWzdgGg9H9g&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=SIP1Dfwy1M0HWzdgGg9H9g'
    },
    {
      name: 'Screen Door',
      image_url: 'https://s3-media4.fl.yelpcdn.com/bphoto/lqmMYlLRV-aoH73koWA6Ew/o.jpg',
      price: '$$',
      rating: 4.5,
      url: 'https://www.yelp.com/biz/screen-door-portland?adjust_creative=SIP1Dfwy1M0HWzdgGg9H9g&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=SIP1Dfwy1M0HWzdgGg9H9g'
    },
    {
      name: 'Q Restaurant & Bar',
      image_url: 'https://s3-media2.fl.yelpcdn.com/bphoto/jAH0XyZe5N8YTrOy71SuJg/o.jpg',
      price: '$$',
      rating: 4.5,
      url: 'https://www.yelp.com/biz/q-restaurant-and-bar-portland?adjust_creative=SIP1Dfwy1M0HWzdgGg9H9g&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=SIP1Dfwy1M0HWzdgGg9H9g'
    }
  ];

  test('munging the yelp data', () => {
    const output = formatYelp(yelpData);

    expect(output).toEqual(expectedYelp);
  });


});