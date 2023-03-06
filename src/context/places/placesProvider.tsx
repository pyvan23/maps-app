import { PlacesContext } from './PlacesContext';
export interface PlacesStates {
  isLoading: boolean;
  userLocation?: [number, number];
}


const INITIAL_STATE: PlacesStates = {

    isLoading:false,
    userLocation: undefined

}

const PlacesProvider = () =>{


    return(<PlacesContext.Provider value={{isLoading:false,
      userLocation: undefined
  }}>

    </PlacesContext.Provider>)

}