import { useContext } from "react";
import { PlacesContext } from "../context/places/PlacesContext";


export const Isloading = () => {

    const { isLoading } = useContext(PlacesContext);
   


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
}