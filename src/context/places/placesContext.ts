//El context es para exponer y mostrar a el resto de los componentes

import { createContext } from "react";

export interface PlacesContextProps {
  isLoading: boolean;
  userLocation?: [number, number];
}

export const PlacesContext = createContext<PlacesContextProps>( {} as PlacesContextProps);
