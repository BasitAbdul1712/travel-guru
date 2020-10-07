import { getByTitle } from '@testing-library/react';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';

const PlaceDetails = (props) => {
    const {_id,title, headline, picture} = props.selectedPlace;
    const history = useHistory()
    console.log(history);
    // console.log(props.selectedPlace.title);
    const handleClick = (title, details) => {
        const url =`/homes/${title}`;
        history.push(url, details)
        // history.push(details)
    }
   
    return (
        <div>
            <h1>{title} </h1>
            <p>{headline}</p>
            <Button  variant="warning" type="submit" onClick = {() => handleClick (title)} > Book here </Button>
        </div>
    );
};


export default PlaceDetails;