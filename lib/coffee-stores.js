const getUrlForCoffeeStores = (latlong, query, limit) => {
  return `https://api.foursquare.com/v3/places/search?query=${query}&ll=${latlong}&limit=${limit}`;
}

export const fetchCoffeeStores = async () => {

  const fetchParams = getUrlForCoffeeStores('39.798458%2C-94.807992', 'coffee%20shops', 6);
  const options = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: process.env.NEXT_PUBLIC_FOURSQUARE_API_KEY
    }
  };
  const response = await fetch(fetchParams, options);
  const data = await response.json();
  console.log(data);

  return data.results;
}