import { useContext, useLayoutEffect, useRef } from "react";
import { PlacesContext } from "../context/places/PlacesContext";
import { Map } from "mapbox-gl";

export const MapView = () => {

    const { userLocation, isLoading } = useContext(PlacesContext);
    const mapDiv = useRef<HTMLDivElement>(null);

    //
    // useLayoutEffect(() => {

    //     if ( !isLoading ) {
    //         const map = new Map({
    //             container: , // container ID
    //             style: 'mapbox://styles/mapbox/streets-v12', // style URL
    //             center: [-74.5, 40], // starting position [lng, lat]
    //             zoom: 9, // starting zoom
    //        });
    //     }

    // }, [isLoading]);

    if ( isLoading ) {

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

        <div ref={mapDiv}
            style={{
                height: '100vh',
                width: '100vw', position: "fixed",
                top: '0', left: '0'
            }}>
            {userLocation}
        </div>
    );
};
