import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import Calender from '../Calender/Calender';
import FakeData from '../Home/FakeData.json';
import './Book.css';
const Book = () => {
    const { title } = useParams();
    const place = FakeData.find(pd => pd.title === title)
    console.log(place);
    const style = {
        color: '#fff',
        marginLeft: '160px',
        marginRight: '50px',
        paddingTop: '180px',
        display: 'flex',
    }
    const styles = { 
        height: '300px',
        width: '600px',
    }

    const fromStyle = {
        width: '500px',
        backgroundColor: '#fff',
        marginLeft: '230px',
        padding: '15px',
        borderRadius: '10px'

    }
    return (
        <div style={style} className="">
            <div style={styles} className="">
                <h1>{place.title} </h1>
                <p> {place.details} </p>
            </div>
            <div style = {fromStyle} className="">
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Origin</Form.Label>
                        <Form.Text className="text-muted">
                            Origin
                    </Form.Text>
                        <Form.Control type="origin" placeholder="Enter your origin place here" />
                     
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Destination</Form.Label>
                        <Form.Text className="text-muted">
                            Destination
                        </Form.Text>
                        <Form.Control type="destination" placeholder="Enter your destination here" />
                    </Form.Group>
                        <Form>
                        <Calender></Calender>
                       </Form> 
                    
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button href = "/searchingArea" variant="warning" type="submit">
                        Start Booking
                    </Button>
                </Form>
            </div>

        </div>
    );
};

export default Book;