import React from 'react'
import { PlacesProvider } from './context/places/PlacesProvider'
import { HomeScreen } from './screens/HomeScreen';

export const MapsApp = () => {
  return (
    <PlacesProvider>
      <HomeScreen />
    </PlacesProvider>
  )
}
