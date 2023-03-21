import { useContext } from "react";
import { PlacesContext } from "../context/places/placesContext";

export const MapView = () => {

    const { userLocation, isLoading } = useContext(PlacesContext);


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
    }


    return (

        <>
            <h3>geolocalizacion del usuario: {userLocation}</h3>
        </>

    );
};
