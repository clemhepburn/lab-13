export function formatLocation(data) {
  const array = data.map(location => {
    return {
      formatted_query: location.display_name, 
      latitude: location.lat,
      longitude: location.lon
    };
  });
  return array[0];
}

export function formatWeather(data) {
  return data.data.map(weather => {
    return {
      forecast: weather.weather.description,
      time: weather.valid_date
    };
  });
}

export function formatYelp(data) {
  return data.businesses.map(yelp => {
    return {
      name: yelp.name,
      image_url: yelp.image_url,
      price: yelp.price,
      rating: yelp.rating,
      url: yelp.url
    };
  });
}