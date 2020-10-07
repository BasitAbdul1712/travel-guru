import React, { useState } from 'react';
import PlaceDetails from '../PlaceDetails/PlaceDetails';
import PlaceTitles from '../PlaceTitles/PlaceTitles';
import fakeData from './FakeData.json';

import './Home.css'

const Home = () => {
    const [places, setPlaces] =  useState(fakeData)
    const [selectedPlace, setSelectedPlace] = useState(fakeData[0])
    // console.log(selectedPlace);
    const handleSelectPlace = (place) => {
        // console.log('place selected', place);
        setSelectedPlace(place);
        // console.log(place.picture);
        // const styles={
        //     backgroundImage: "url(" + place.picture + ")",
        //     backgroundPosition: 'center',
        //     backgroundSize: 'cover',
        //     backgroundRepeat: 'no-repeat'
        //   }
        document.body.style = ' background-image: url("'+place.picture+'")';
    }
    return (
        <div  className="container">
            <div className="row row-div ">
                <div className="col-6 first-row-div">
                   <PlaceDetails selectedPlace  = {selectedPlace} > </PlaceDetails>
                    
                </div>
                <div className="col-6 second-row-div ">
                   
                        {
                        places.map(place =>
                        <PlaceTitles
                        handleSelectPlace = {handleSelectPlace}
                         place={place}> 
                        </PlaceTitles>)
                        }
            
                </div>
            </div>
        </div>
    );
};

export default Home;