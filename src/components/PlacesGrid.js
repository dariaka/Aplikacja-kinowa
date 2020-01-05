import './PlacesGrid.css';
import React from 'react';
import Place from './Place';

const switchPlaceReservation = () => {
    console.log("Switch place reservation");
}

function PlacesGrid() {
    return (
        <div className="wrapper">
            PlacesGrid
            <Place num={'01'} onButtonClick={switchPlaceReservation} />
        </div>
    );
}

export default PlacesGrid;