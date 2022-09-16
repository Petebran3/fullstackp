import { Component } from 'react'
import { Map, GoogleApiWrapper } from 'google-maps-react';



class Restaurants extends Component {
  render() {
    return (
    
   <>
      <Map
        google ={this.props.google}
        zoom ={14}
        style ={{width:"100%", height:"100%"}}
        initialCenter={
          {
            lat: 35.227085,
            lng: -80.843124
          }
        }
      />
      </>

    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyAM49GedQ8pX1gXbsGfu50hz1AphIFGK5E"
})(Restaurants);
  


