import React from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import './styling/Map.css';
import leafGreen from './img/markerBlue.png';
import leafShadow from './img/snadowBlue.png';

//L.Icon.Default.imagePath = "http://joshuafrazier.info/images/firefox.svg";

class PartenersMap extends React.Component {
        constructor(props) {
            super(props);
            this.state = this.initialState;
            this.state.draggable=true;
          };

        initialState = {
            lat: 46.770920,
            lng: 23.589920,
            zoom: 10
          };

       toggleDraggable = () => {
          this.setState({ draggable: !this.state.draggable })
       }

        addressMarker = (event) => {
         this.state.lat = event.target.getLatLng().lat;
         this.state.lng = event.target.getLatLng().lng;
         console.log(this.state.lat);
         console.log(this.state.lng);
         console.log("Am ajuns pe aici");
         this.props.getLocation(event.target.getLatLng().lat, event.target.getLatLng().lng);
         }


          grenIcon = L.icon({
             iconUrl: leafGreen,
             shadowUrl: leafShadow,
             iconSize:     [21, 41], // size of the icon
             shadowSize:   [40, 54], // size of the shadow
             iconAnchor:   [2, 54], // point of the icon which will correspond to marker's location
             shadowAnchor: [4, 62],  // the same for the shadow
             popupAnchor:  [-3, -76]
           });

        render () {
            var center = [this.state.lat, this.state.lng];

            return (
                <Map zoom={this.state.zoom} center={center} style={{ width: '100%', height: '700px'}}>
                   <TileLayer
                            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                    />
                    <Marker
                        position={center}
                        draggable={this.state.draggable}
                        onDragend={this.addressMarker}
                        icon={this.grenIcon}>
                        <Popup>
                            <span onClick={this.toggleDraggable}>
                              {this.state.draggable ? `Hello` : 'MARKER FIXED'}
                            </span>
                       </Popup>
                    </Marker>
                </Map>
              );

        }
}
export default PartenersMap;