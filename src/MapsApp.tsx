
import AppFecth from './components/fecth';
import { PlacesProvider } from './context/places/PlacesProvider'
import { HomeScreen } from './screens/HomeScreen';
import './styles.css'
export const MapsApp = () => {
  return (
    <PlacesProvider>
      {/* <HomeScreen /> */}
      <AppFecth/>
    </PlacesProvider>
  )
}
