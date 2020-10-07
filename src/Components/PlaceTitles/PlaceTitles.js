import React from 'react';
import { Card } from 'react-bootstrap';
import './PlaceTitles.css';

const PlaceTitles = (props) => {
    const {_id, title,picture} = props.place;
    const styles = {
        backgroundImage: ` linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ),url(${picture})`,
        width: '200px',
        height: '300px',
        marginLeft: '10px',
        borderRadius: '20px',
    }
    return (
        <div >   
           <Card className = "Place-title"  onClick={() =>props.handleSelectPlace(props.place)}  style={styles }>
                <Card.Title className = "cart-title"> {title} </Card.Title>
            </Card>
        </div>
    );
};

export default PlaceTitles;