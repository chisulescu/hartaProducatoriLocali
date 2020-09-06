import React from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import './styling/Map.css';
import wheat from './img/wheat.png';
import meat from './img/meat.png';
import cheese from './img/cheese.png';
import fruit from './img/fruit.png';
import vegetable from './img/vegetable.png';
import leafFactory from './img/factory.png';
import question from './img/question-mark.png';
import leafShadow from './img/snadowBlue.png';

//L.Icon.Default.imagePath = "https://unpkg.com/leaflet@1.5.0/dist/images/";

class AdminMap extends React.Component {
        constructor(props) {
            super(props);
            this.state = this.initialState;
            this.state.draggable=true;

          };

        initialState = {
            lat: 45.6523093 ,
            lng: 25.6102746,
            zoom: 7
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




         wheatIcon = L.icon({
           iconUrl: wheat,
           shadowUrl: leafShadow,
           iconSize:     [41, 41], // size of the icon
           shadowSize:   [40, 54], // size of the shadow
           iconAnchor:   [16, 54], // point of the icon which will correspond to marker's location
           shadowAnchor: [4, 62],  // the same for the shadow
           popupAnchor:  [-3, -76]
         });

         meatIcon = L.icon({
           iconUrl: meat,
           shadowUrl: leafShadow,
           iconSize:     [41, 41], // size of the icon
           shadowSize:   [40, 54], // size of the shadow
           iconAnchor:   [16, 54], // point of the icon which will correspond to marker's location
           shadowAnchor: [4, 62],  // the same for the shadow
           popupAnchor:  [-3, -76]
         });

         cheeseIcon = L.icon({
           iconUrl: cheese,
           shadowUrl: leafShadow,
           iconSize:     [41, 41], // size of the icon
           shadowSize:   [40, 54], // size of the shadow
           iconAnchor:   [16, 54], // point of the icon which will correspond to marker's location
           shadowAnchor: [4, 62],  // the same for the shadow
           popupAnchor:  [-3, -76]
         });

         fruitIcon = L.icon({
           iconUrl: fruit,
           shadowUrl: leafShadow,
           iconSize:     [41, 41], // size of the icon
           shadowSize:   [40, 54], // size of the shadow
           iconAnchor:   [16, 54], // point of the icon which will correspond to marker's location
           shadowAnchor: [4, 62],  // the same for the shadow
           popupAnchor:  [-3, -76]
         });

         vegetableIcon = L.icon({
           iconUrl: vegetable,
           shadowUrl: leafShadow,
           iconSize:     [41, 41], // size of the icon
           shadowSize:   [40, 54], // size of the shadow
           iconAnchor:   [16, 54], // point of the icon which will correspond to marker's location
           shadowAnchor: [4, 62],  // the same for the shadow
           popupAnchor:  [-3, -76]
         });

         factoryIcon = L.icon({
           iconUrl: leafFactory,
           shadowUrl: leafShadow,
           iconSize:     [41, 41], // size of the icon
           shadowSize:   [40, 54], // size of the shadow
           iconAnchor:   [27, 50], // point of the icon which will correspond to marker's location
           shadowAnchor: [4, 62],  // the same for the shadow
           popupAnchor:  [-3, -76]
         });

         questionIcon = L.icon({
            iconUrl: question,
            shadowUrl: leafShadow,
            iconSize:     [41, 41], // size of the icon
            shadowSize:   [40, 54], // size of the shadow
            iconAnchor:   [27, 50], // point of the icon which will correspond to marker's location
            shadowAnchor: [4, 62],  // the same for the shadow
            popupAnchor:  [-3, -76]
          });

        render () {
            var center = [this.state.lat, this.state.lng];

            return (
                <Map zoom={this.state.zoom} center={center} style={{ width: '100%', height: '100%'}}>
                   <TileLayer
                      attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                      url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                    />
                    {this.props.customers.map((customer) => {
                      console.log('Categggggggggggg');
                      console.log(customer.categorie)
                      let icon = null;
                      switch (customer.categorie) {
                        case "carne":
                          icon = this.meatIcon;
                          break;
                        case "cereale":
                          icon = this.wheatIcon;
                              break;
                        case "legume":
                          icon = this.vegetableIcon;
                          break;
                        case "fructe":
                          icon = this.fruitIcon;
                          break;
                        case "branzeturi":
                          icon = this.cheeseIcon;
                          break;
                        case "depozit":
                          icon = this.factoryIcon;
                          break;
                        default:
                          icon = this.questionIcon;
                          break;
                      }
                      return (
                      <Marker
                         position={[customer.latitude, customer.longitude]}
                         draggable={this.state.draggable}
                         onDragend={this.addressMarker}
                         icon={icon}>
                         <Popup>
                             <span onClick={this.toggleDraggable}>
                               {this.state.draggable ? `Hello111111111` : 'MARKER FIXED'}

                             </span>
                        </Popup>
                     </Marker>
                    )})}
                </Map>
              );

        }
}
export default AdminMap;