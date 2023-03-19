import { PlacesStates } from './PlacesProvider';

//es una funcion pura que recibe el estado, y va a regresar un objeto del mismo tipo del estado
//tamnbien recibe las acciones que nos sirven para determinar el mismo estado
//siempre debe devolver un nuevo estado
//debe regresar si o si algo de tipo PlacesState

//solo las PlacesAction son las permitidas en esta funcion

type PlacesAction = { type: 'userLocation', payload: [number, number] };

export const placesProvider = (state: PlacesStates, action: PlacesAction): PlacesStates => {


    

}
