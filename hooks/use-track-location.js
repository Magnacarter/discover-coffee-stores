import { useState, useContext } from 'react'
import { ACTION_TYPES, StoreContext } from '../pages/_app'

const useTrackLocation = () => {
  const [locationErrorMsg, setLocationErrorMsg] = useState('');
  //const [latlong, setLatLong] = useState('');
  const [isFindingLocation, setIsFindingLoaction] = useState(false);

  const { dispatch } = useContext(StoreContext);

  const success = (position) => {
    const latitude  = position.coords.latitude;
    const longitude = position.coords.longitude;

    // setLatLong(`${latitude},${longitude}`);
    // With context we have a global state for latlong.
    // Dispatch is comming from _api.js in the <StoreProdider/>
    dispatch({
      type: ACTION_TYPES.SET_LATLONG,
      payload: { latlong: `${latitude},${longitude}` }
    });

    setLocationErrorMsg('');
    setIsFindingLoaction(false);
  }

  const error = () => {
    setIsFindingLoaction(false);
    setLocationErrorMsg('Unable to retrieve your location');
  }

  const handleTrackLocation = () => {
    setIsFindingLoaction(true);

    if(!navigator.geolocation) {
      setLocationErrorMsg('Geolocation is not supported by your browser');
      setIsFindingLoaction(false);
    } else {
      navigator.geolocation.getCurrentPosition(success, error);
    }
  }

  return {
    //latlong,
    handleTrackLocation,
    locationErrorMsg,
    isFindingLocation
  }
}

export default useTrackLocation