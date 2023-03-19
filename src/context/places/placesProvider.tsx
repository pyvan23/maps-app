//El estado es la informacion que nosotros guardamos en memoria

import { useEffect, useReducer } from 'react';
import { PlacesContext } from './PlacesContext';
import { placesReducer } from './placesReducer';

export interface PlacesStates {
  isLoading: boolean;
  userLocation?: [number, number];
}


const INITIAL_STATE: PlacesStates = {

  isLoading: false,
  userLocation: undefined

}
interface Props {
  children: JSX.Element | JSX.Element[]
}

export const PlacesProvider = ({ children }: Props) => {

  const [state, dispatch] = useReducer(placesReducer, INITIAL_STATE);
  //al no tener dependencias el useEffect se disparara solo una vez, cuando el PlacesProvider sea montado

  useEffect(() => {
    
  }, [])
  


  return (<PlacesContext.Provider value={{
    ...state
  }}>
    {children}
  </PlacesContext.Provider>)

}