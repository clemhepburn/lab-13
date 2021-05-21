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
