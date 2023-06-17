import AppFecth from "../components/AppFecth"
import { MapView } from "../components/MapView"
import { useContext } from "react";

import { Isloading } from "../components/Isloading";
import { PlacesContext } from "../context/places/PlacesContext";




export const HomeScreen = () => {

  const { isLoading } = useContext(PlacesContext);

  if (isLoading) {

    return (
      <div className="loading-map d-flex justify-content-center">
        <div className=" spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div>
          <h4>Loading...</h4>
        </div>
      </div>
    )
  };



  return (
    // <MapView/>
    <AppFecth />
  )
}
