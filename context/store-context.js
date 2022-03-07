import { createContext, useReducer } from 'react'

export const StoreContext = createContext();

export const ACTION_TYPES = {
  SET_LATLONG: 'SET_LATLONG',
  SET_COFFEE_STORES: 'SET_COFFEE_STORES'
}

const storeReducer = (state, action) => {
  switch(action.type) {
    case ACTION_TYPES.SET_LATLONG: {
      return { ...state, latlong: action.payload.latlong }
    }
    case ACTION_TYPES.SET_COFFEE_STORES: {
      return { ...state, coffeeStores: action.payload.coffeeStores }
    }
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

// In order to share info throughout the app we need Context.
// This is important because we don't want child/grandchild components
// relying entirely on the parent.
const StoreProvider = ({children}) => {
  const initialState = {
    latlong: '',
    coffeeStores: []
  }

  // useReducer is a react hook.
  const [state, dispatch] = useReducer(storeReducer, initialState);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  )
}

export default StoreProvider;
