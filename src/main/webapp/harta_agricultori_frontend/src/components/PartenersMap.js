import "mapbox-gl/dist/mapbox-gl.css"
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css"
import React, { Component } from 'react'
import MapGL from "react-map-gl";
import Geocoder from "react-map-gl-geocoder";

class PartenerMap extends Component {
  state = {
    viewport :{
      latitude: 46.770920,
      longitude: 23.589920,
      zoom: 6
    }
  }
  mapRef = React.createRef()

  handleViewportChange = viewport => {
    this.setState({
      viewport: { ...this.state.viewport, ...viewport }
    })
  }
  handleGeocoderViewportChange = viewport => {
    const geocoderDefaultOverrides = { transitionDuration: 1000 };

    return this.handleViewportChange({
      ...viewport,
      ...geocoderDefaultOverrides
    });
  };

    render(){
      const { viewport } = this.state
      return (
        <div style={{ height: '120vh'}}>
          <MapGL
            ref={this.mapRef}
            {...viewport}
            mapStyle="mapbox://styles/mapbox/streets-v9"
            width="100%"
            height="90%"
            onViewportChange={this.handleViewportChange}
            mapboxApiAccessToken={"pk.eyJ1IjoiY2hpc3VsZXNjdSIsImEiOiJja2FtdXBxb3MxN3A0MzBwaWtzazNzM2psIn0.uIO_5R9FqNRGduQ_TSa6Ag"}
            >
              <Geocoder
                mapRef={this.mapRef}
                onViewportChange={this.handleGeocoderViewportChange}
                mapboxApiAccessToken={"pk.eyJ1IjoiY2hpc3VsZXNjdSIsImEiOiJja2FtdXBxb3MxN3A0MzBwaWtzazNzM2psIn0.uIO_5R9FqNRGduQ_TSa6Ag"}
                position='top-left'
              />
            </MapGL>
        </div>
      )
    }
}

export default PartenerMap;