import React from 'react';
import {Jumbotron, Container} from 'react-bootstrap';
import ReactPlayer from 'react-player';
import MainMap from './MainMap';
import {getAllPartners} from "../blockchain/BlockchainService";
import './styling/Welcome.css'


class Welcome extends React.Component {

         constructor(props){
            super(props);
              this.state = {
              location: '',
              customers: []
            };

         }

        componentDidMount() {
             this.findAllCustomers();

         }

         test(){
             console.log("1111111111111");
           }

         findAllCustomers(){
             getAllPartners((result) => {this.setState({customers: result}); console.log(result)})
             console.log("pppppppppppppppppppp");

              this.state.customers.map((customer) => (
              console.log(customer)
             ))
             // axios.get("http://localhost:8080/customers")
             // .then(response => response.data)
             // .then((data) => {
             //     this.setState({customers: data});
             //     console.log(data)
             // });
         }


        render () {
                const { location } = this.state;

                    return (
                        <div style={{margin: "0 auto"}}>
                          <Container>
                             <div className={"shadow"}>
                                <MainMap
                                name="location"
                                value={location}
                                customers={this.state.customers}
                                />
                            </div>
                            <ReactPlayer class="shadow"
                            url={[
                                {src: './video/video2.mp4', type: 'video/ogg'},
                                {src: './video/video1.mp4', type: 'video/ogg'}
                              ]}
                            width='100%' height='80%' playing loop muted fluid
                            />
                            <Jumbotron className= "bg-dark text-white">
                                      <h1>HARTA PRODUCĂTORILOR LOCALI</h1>
                                      <blockquote className="blockquote mb-0">
                                          <p>
                                              Bine ai venit pe platforma noastră! Dacă ești producător te invităm gratuit să te înscri în platformă
                                              pentru a avea o deschidere cât mai mare către consumatori. Dacă ești consumator, investitor sau
                                              simpatizant ai conceptului acestei platforme te invităm să citești mai jos, dar și să accesezi zonele
                                              site-ului nostru: zona de hartă, zona de listare și zona premium.
                                           </p>
                                             <footer className="blockquote-footer">
                                                   Guvernul Romaniei
                                             </footer>
                                      </blockquote>
                             </Jumbotron>
                             <footer className="blockquote-footer">

                             </footer>
                          </Container>
                        </div>
                    );
                 }

}

export default Welcome;