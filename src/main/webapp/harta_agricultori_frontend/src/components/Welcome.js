import React from 'react';
import {Jumbotron, Image} from 'react-bootstrap';
import ReactPlayer from 'react-player';
//import clase

class Welcome extends React.Component {

        render () {
                    return (
                        <div>
                            <Image src="https://cdn.pixabay.com/photo/2015/09/02/12/34/fence-918535_1280.jpg" fluid width="100%" />
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

                        </div>
                    );
                 }

}

export default Welcome;