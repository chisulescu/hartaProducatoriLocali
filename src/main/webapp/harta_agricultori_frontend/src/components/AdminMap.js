import React from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import './styling/Map.css';

L.Icon.Default.imagePath = "https://unpkg.com/leaflet@1.5.0/dist/images/";

class AdminMap extends React.Component {
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

       test(){
        console.log("1111111111111");

      }

        addressMarker = (event) => {
         this.state.lat = event.target.getLatLng().lat;
         this.state.lng = event.target.getLatLng().lng;
         console.log(this.state.lat);
         console.log(this.state.lng);
         console.log("Am ajuns pe aici");
         this.props.getLocation(event.target.getLatLng().lat, event.target.getLatLng().lng);
         }

        render () {
            var center = [this.state.lat, this.state.lng];

            return (
                <Map zoom={this.state.zoom} center={center} style={{ width: '100%', height: '700px'}}>
                   <TileLayer
                            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                    />
                     {this.props.customers.map((customer) => (
                      <Marker
                         position={[customer.latitude, customer.longitude]}
                         draggable={this.state.draggable}
                         onDragend={this.addressMarker}>
                         <Popup>
                             <span onClick={this.toggleDraggable}>
                               {this.state.draggable ? `Hello` : 'MARKER FIXED'}
                             </span>
                        </Popup>
                     </Marker>
                    ))}
                </Map>
              );

        }
}
export default AdminMap;