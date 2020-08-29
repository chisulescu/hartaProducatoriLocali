import React from 'react';
import {Jumbotron, Image, Button} from 'react-bootstrap';
import ReactPlayer from 'react-player';
import './styling/Welcome.css';

class Welcome extends React.Component {

  render () {
    return (
        <div>
          <div className="section">
            <Jumbotron className= "bg-dark text-white left1">
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
              <Button size="lg" variant="info" className="btn lg" href="/addParteneri">Inscrie-te!</Button>
            </Jumbotron>
            <Image className="image1" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.PKUrFTfyvSLWxtJ8Mz9s8AHaHa%26pid%3DApi&f=1" fluid width="100%" />
          </div>

          <div className="section">
            <Image className="image2" src="https://cdn.pixabay.com/photo/2015/09/02/12/34/fence-918535_1280.jpg" fluid width="100%" />
            <Jumbotron className= "text-dark right2">
              <h3>Titlu</h3>
              <blockquote className="blockquote mb-0">
                  <p>
                      Text..
                    </p>
              </blockquote>
            </Jumbotron>
          </div>

          <div className="section3">
            <ReactPlayer 
              url={[
                  {src: './video/video2.mp4', type: 'video/ogg'},
                  {src: './video/video1.mp4', type: 'video/ogg'}
                ]}
              width='100%' height='80%' playing loop muted fluid
            />
          <h6>Lorem ipsum dolor sit amet</h6>

          <Button variant="outline-success" className="btn2" href="/parteneri">Gaseste parteneri!</Button>
          </div>

            

        </div>
    );
  }
}

export default Welcome;