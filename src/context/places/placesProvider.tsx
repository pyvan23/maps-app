import { PlacesContext } from './PlacesContext';
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


  return (<PlacesContext.Provider value={{
    isLoading: false,
    userLocation: undefined
  }}>
    {children}
  </PlacesContext.Provider>)

}