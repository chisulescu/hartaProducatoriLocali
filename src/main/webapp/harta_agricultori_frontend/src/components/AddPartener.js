import React from 'react';
import {Card, Form, Button, Col, Container} from 'react-bootstrap';
import ToastComponent from './ToastComponent';
import PartenersMap from './PartenersMap';

import axios from 'axios';
import {registerPartner} from "../blockchain/BlockchainService";

class AddPartener extends React.Component {

        constructor(props){
            super(props);
            this.state = this.initialState;
            this.state.show = false;
            this.submitPartener = this.submitPartener.bind(this);
            this.partnerRegistered = this.partnerRegistered.bind(this);
        }

        initialState = {
            tara:'', producator:'', nume_firma:'', judet:'', categorie:'', sub_categorie:'', descriere_producator:'',
            email:'', telefon:'', website:'', facebook:'', checkbox:'', latitude:'', longitude:''
        }

        submitPartener = event => {
            event.preventDefault();

            const customer = {
            tara: this.state.tara,
            producator: this.state.producator,
            nume_firma: this.state.nume_firma,
            judet: this.state.judet,
            categorie: this.state.categorie,
            sub_categorie: this.state.sub_categorie,
            descriere_producator: this.state.descriere_producator,
            email: this.state.email,
            telefon: this.state.telefon,
            website: this.state.website,
            facebook: this.state.facebook,
            localhost: this.state.location,
            latitude: this.state.latitude,
            longitude: this.state.longitude
            };

            console.log(customer)
            registerPartner(customer)

            axios.post("http://localhost:8080/customers", customer)
                .then(response => {
                    if(response.data != null){
                        this.setState({"show":true});
                        setTimeout(() => this.setState({"show":false}), 1000);
                    } else {
                        this.setState({"show":false});
                    }
                });

        this.setState(this.initialState);
        }

        partnerRegistered = event => {
            this.setState({
            [event.target.name]:event.target.value
            });
        }

         setLocation = (latidudeFromMap, longitudeFromMap)=>{
                this.state.latitude = latidudeFromMap;
                this.state.longitude = longitudeFromMap;
        }

        render () {
             const {tara, producator, nume_firma, judet, categorie, sub_categorie, descriere_producator, email, telefon, website, facebook, location} = this.state;

             return (
                    <div>
                        <Container>
                        <div style={{"display":this.state.show ? "block" : "none"}}>
                            <ToastComponent children = {{show:this.state.show, message:"Partner Saved Successfully."}}/>
                        </div>
                        <Card className={"border border-white bg-white text-gree shadow p-3 mb-5 bg-white rounded"}>
                               <Card.Header className={"border border-white bg-white"}> Formular </Card.Header>
                                  <Form onSubmit={this.submitPartener} id="formInscriereId">
                                        <Card.Body>
                                                <Form.Row>
                                                    <Form.Group as={Col} controlId="FormGridTara">
                                                         <Form.Label>Tara</Form.Label>
                                                         <Form.Control required autoComplete = "off"
                                                         name="tara"
                                                         value={tara}
                                                         onChange={this.partnerRegistered}
                                                         type="text"
                                                         placeholder="Tara"
                                                         className="bg-white text-gree"/>
                                                    </Form.Group>
                                                     <Form.Group as={Col} controlId="FormGridProducator">
                                                         <Form.Label>Tip producator</Form.Label>
                                                         <Form.Control required autoComplete = "off"
                                                         name="producator"
                                                         value={producator}
                                                         onChange={this.partnerRegistered}
                                                         type="text"
                                                         placeholder="Tip producator"
                                                          className="bg-white text-gree"/>
                                                      </Form.Group>
                                                </Form.Row>
                                                 <Form.Row>
                                                    <Form.Group as={Col} controlId="FormGridNumeFirma">
                                                         <Form.Label>Nume Firma</Form.Label>
                                                         <Form.Control required autoComplete = "off"
                                                         name="nume_firma"
                                                         value={nume_firma}
                                                         onChange={this.partnerRegistered}
                                                         type="text"
                                                         placeholder="Nume firma"
                                                         className="bg-white text-gree"/>
                                                    </Form.Group>
                                                     <Form.Group as={Col} controlId="FormGridJudet">
                                                         <Form.Label>Judet</Form.Label>
                                                         <Form.Control required autoComplete = "off"
                                                         name="judet"
                                                         value={judet}
                                                         onChange={this.partnerRegistered}
                                                         type="text"
                                                         placeholder="Judet"
                                                         className="bg-white text-gree"/>
                                                      </Form.Group>
                                                </Form.Row>
                                                <Form.Row>
                                                    <Form.Group as={Col} controlId="FormGridCategorie">
                                                         <Form.Label>Categorie</Form.Label>
                                                         <Form.Control required autoComplete = "off"
                                                         name="categorie"
                                                         value={categorie}
                                                         onChange={this.partnerRegistered}
                                                         type="text"
                                                         placeholder="Categorie"
                                                         className="bg-white text-gree"/>
                                                    </Form.Group>
                                                     <Form.Group as={Col} controlId="FormGridSubCategorie">
                                                         <Form.Label>Sub-categorie</Form.Label>
                                                         <Form.Control required autoComplete = "off"
                                                         name="sub_categorie"
                                                         value={sub_categorie}
                                                         onChange={this.partnerRegistered}
                                                         type="text"
                                                         placeholder="Sub-categorie"
                                                         className="bg-white text-gree"/>
                                                      </Form.Group>
                                                </Form.Row>
                                                <Form.Row>
                                                <Form.Group as={Col} controlId="FormGridDescriereProdus">
                                                     <Form.Label>Descriere producator</Form.Label>
                                                     <Form.Control required autoComplete = "off"
                                                     name="descriere_producator"
                                                     value={descriere_producator}
                                                     onChange={this.partnerRegistered}
                                                     type="text"
                                                     placeholder="Descriere"
                                                     className="bg-white text-gree"/>
                                                </Form.Group>
                                                 <Form.Group as={Col} controlId="FormGridEmail">
                                                     <Form.Label>Email</Form.Label>
                                                     <Form.Control required autoComplete = "off"
                                                     name="email"
                                                     value={email}
                                                     onChange={this.partnerRegistered}
                                                     type="email"
                                                     placeholder="Email"
                                                     className="bg-white text-gree"/>
                                                  </Form.Group>
                                            </Form.Row>
                                                <Form.Row>
                                                <Form.Group as={Col} controlId="FormGridTelefon">
                                                     <Form.Label>Telefon</Form.Label>
                                                     <Form.Control required autoComplete = "off"
                                                     name="telefon"
                                                     value={telefon}
                                                     onChange={this.partnerRegistered}
                                                     type="text"
                                                     placeholder="Telefon"
                                                     className="bg-white text-gree"/>
                                                </Form.Group>
                                                 <Form.Group as={Col} controlId="FormGridWebsite">
                                                     <Form.Label>Website</Form.Label>
                                                     <Form.Control required autoComplete = "off"
                                                     name="website"
                                                     value={website}
                                                     onChange={this.partnerRegistered}
                                                     type="website"
                                                     placeholder="Website(option)"
                                                     className="bg-white text-gree"/>
                                                  </Form.Group>
                                                  <Form.Group as={Col} controlId="FormGridFacebook">
                                                   <Form.Label>Facebook</Form.Label>
                                                   <Form.Control required autoComplete = "off"
                                                   name="facebook"
                                                   value={facebook}
                                                   onChange={this.partnerRegistered}
                                                   type="text"
                                                   placeholder="Facebook link"
                                                   className="bg-white text-gree"/>
                                                </Form.Group>
                                            </Form.Row>
                                            <Form.Row>
                                            <Form.Group as={Col} controlId="FormGridEmail">
                                                 <Form.Label>Select your location</Form.Label>
                                                 <div className={"shadow"}>
                                                     <PartenersMap
                                                     name="location"
                                                     value={location}
                                                     onChange={this.partnerRegistered}
                                                     getLocation={this.setLocation.bind(this)}
                                                     />
                                                 </div>
                                              </Form.Group>
                                            </Form.Row>
                                            <Form.Row>
                                                <Form.Group as={Col} controlId="FormGridCheckbox">
                                                    <Form.Check required
                                                    type="checkbox"
                                                    name="checkbox"
                                                    value={this.state.checkbox}
                                                    onChange={this.partnerRegistered}
                                                    label="Sunt de acord cu termenii și condițiile producatoridinromania.ro" />
                                                </Form.Group>
                                            </Form.Row>
                                        </Card.Body>
                                        <Card.Footer className="border border-white bg-white footerRegister">
                                         <Button size ="mm" variant="success" type="submit">
                                             Inscrie-te
                                         </Button>
                                        </Card.Footer>
                                   </Form>
                               </Card>
                               </Container>
                          </div>

                     );
                 }

}

export default AddPartener;