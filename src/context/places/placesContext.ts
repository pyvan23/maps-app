import { createContext } from "react";

export interface PlacesContextProps {
  isLoading: boolean;
  userLocation?: [number, number];
}

export const placesContext = createContext<PlacesContextProps>(
  {} as PlacesContextProps);

