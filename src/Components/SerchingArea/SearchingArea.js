import React from 'react';
import './SearchingArea.css'
// import { Map, GoogleApiWrapper } from 'google-maps-react';
const SearchingArea = () => {
    // const mapStyles = {
    //     width: '100%',
    //     height: '100%',
    //   };
    return (
        <div>
            <div style={{ marginLeft:'130px', color:'#fff', }}>
                <p>252 stays Apr 13-17 guests</p>
                <h3>Stay in Cox's Bazar</h3>
            </div>
            <div className="Row SearchingArea"  >
                <div className = "col-6">
                    <div className = "SearchingArea">
                        <div>
                            <img style = {{width: '250px'}}src="../../Images/Image/Rectangle 26.png" alt=""/>
                        </div>
                        <div style = {{paddingLeft: '10px'}}>
                            <h5>Light bright airy stylish apt & safe peaceful stay</h5>
                            <p>4 guest 2 bedrooms 2 beds 2 baths with air conditioning kitchen</p>
                            <h6>Free Cancellation</h6>
                            <div style = {{display:'flex', paddingTop: '20px'}}>
                                <img style = {{width: '15px', height: '15px'}} src="../../Images/Icon/star_1_.png" alt=""/>
                                <h4> 4.9(20)</h4>
                                <p><span>$34/</span>night $167 total</p>
                            </div>
                        </div>
                    </div>
                    <div className = "SearchingArea">
                        <div>
                            <img style = {{width: '250px'}} src="../../Images/Image/Rectangle 27.png" alt=""/>
                        </div>
                        <div style = {{paddingLeft: '10px'}}>
                            <h5>Light bright airy stylish apt & safe peaceful stay</h5>
                            <p>4 guest 2 bedrooms 2 beds 2 baths with air conditioning kitchen</p>
                            <h6>Free Cancellation</h6>
                            <div style = {{display:'flex', paddingTop: '20px'}}>
                                <img style = {{width: '15px', height: '15px'}} src="../../Images/Icon/star_1_.png" alt=""/>
                                    <h4> 4.9(20)</h4>
                                    <p><span>$34/</span>night $167 total</p>
                               
                            </div>
                        </div>
                    </div>
                    <div className = "SearchingArea">
                        <div>
                            <img style = {{width: '250px'}} src="../../Images/Image/Rectangle 28.png" alt=""/>
                        </div>
                        <div style = {{paddingLeft: '10px', paddingTop: '20px'}}>
                            <h5>Light bright airy stylish apt & safe peaceful stay</h5>
                            <p>4 guest 2 bedrooms 2 beds 2 baths with air conditioning kitchen</p>
                            <h6>Free Cancellation</h6>
                            <div style = {{display:'flex', paddingTop: '20px'}}>
                                <img style = {{width: '15px', height: '15px'}} src="../../Images/Icon/star_1_.png" alt=""/>
                                <h4> 4.9(20)</h4>
                                <p><span>$34/</span>night $167 total</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className = "col-6 second-row-div">
                    <img className = "map "src="https://www.google.com/maps/d/thumbnail?mid=1KdRwGt6EkP4kzBU3CvQlgXmCpNA&hl=de" alt=""/>
                {/* <Map
                    google={props.google}
                    zoom={8}
                    style={mapStyles}
                    initialCenter={{ lat: 47.444, lng: -122.176}}
                    /> */}
                </div>
        </div>
        </div>
    );
};

export default SearchingArea;