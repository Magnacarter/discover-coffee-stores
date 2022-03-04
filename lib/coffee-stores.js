import { createApi } from 'unsplash-js';

// Init unsplash.
const unsplashApi = createApi({
  accessKey: process.env.UNSPLASH_KEY,
});

// Build api query.
const getUrlForCoffeeStores = (latlong, query, limit) => {
  return `https://api.foursquare.com/v3/places/search?query=${query}&ll=${latlong}&limit=${limit}`;
}

// Get the photo urls from unsplash api.
const getCoffeeStorePhotos = async () => {
  const photos = await unsplashApi.search.getPhotos({
    query: 'coffee shops',
    page: 1,
    perPage: 10,
    orientation: 'portrait'
  });

  const unsplashResults = photos.response.results;
  const photosResponse = unsplashResults.map(result => result.urls['small']);

  return photosResponse;
}

// Build object of coffee stores.
export const fetchCoffeeStores = async () => {
  const fetchParams = getUrlForCoffeeStores('39.798458%2C-94.807992', 'coffee%20shops', 6);
  const coffeeImageUrls = await getCoffeeStorePhotos();

  const options = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: process.env.NEXT_PUBLIC_FOURSQUARE_API_KEY
    }
  };

  const response = await fetch(fetchParams, options);
  const data = await response.json();

  // Add an image to each coffee store object with a key of imgUrl.
  return data.results.map((result, idx) => {
    return {
      ...result,
      imgUrl: coffeeImageUrls[idx]
    }
  });
}
