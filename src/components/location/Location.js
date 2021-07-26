import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import './Location.css'

class Location extends Component {
    render() {
        return (
            <div className="div1">
                
                    
                        <Map google={this.props.google} zoom={14}>

                            <Marker onClick={this.onMarkerClick}
                                name={'Current location'} />

                            <InfoWindow onClose={this.onInfoWindowClose}>
                                {/* <div>
        <h1>{this.state.selectedPlace.name}</h1>
    </div> */}
                            </InfoWindow>
                        </Map>
               
               

            </div>
        );
    }
}

// export default Location;
export default GoogleApiWrapper({
    apiKey: ("AIzaSyCYKd0moq1Fue95GfbH82MMeMAGfPGbSqw")
})(Location)
