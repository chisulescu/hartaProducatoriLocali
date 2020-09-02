import React from 'react';
import {Jumbotron, Image, Button} from 'react-bootstrap';
import ReactPlayer from 'react-player';
import './styling/Welcome.css';
import PartenersMap from './PartenersMap';

class Welcome extends React.Component {

  render () {
    return (
      <div>
        {/* <ReactPlayer 
          url={[
              {src: './video/video2.mp4', type: 'video/ogg'},
              {src: './video/video1.mp4', type: 'video/ogg'}
            ]}
          width='100%' height='80%' playing loop muted fluid
        /> */}
        <section id="feature-two">
          <div class="container">
            <div class="row feature-content">
              <div class="col-lg-6 feature-caption">
                <h2>HARTA PRODUCĂTORILOR LOCALI</h2>
                <p class="lead">
                      Bine ai venit pe platforma noastră! Dacă ești producător te invităm gratuit să te înscri în platformă
                      pentru a avea o deschidere cât mai mare către consumatori. Dacă ești consumator, investitor sau
                      simpatizant ai conceptului acestei platforme te invităm să citești mai jos, dar și să accesezi zonele
                      site-ului nostru: zona de hartă, zona de listare și zona premium.
                </p>
                {/* <a href="#" role="button" class="btn btn-outline-secondary btn-lg">Discover the products</a> */}
                <Button size="lg" variant="outline-info" className="btn lg" href="/addParteneri">Inscrie-te!</Button>
              </div>
              <div class="col-lg-6 text-sm-center d-none d-lg-block">
                <img className="image2" src="https://cdn.pixabay.com/photo/2015/09/02/12/34/fence-918535_1280.jpg" alt="iphone"></img>
              </div>
            </div>
          </div>
        </section>

        <section id="feature-three">
          <div class="container">
            <div class="row feature-content">
              <div class="col-lg-6 d-none d-lg-block map">
                <div className={"shadow"}>
                  <PartenersMap
                    name="location"
                    height="400px"
                    // value={location}
                    // onChange={this.partnerRegistered}
                    // getLocation={this.setLocation.bind(this)}
                  />
                </div>
              </div>
              <div class="col-lg-5 offset-lg-1">
                <h2>O echipa de experti</h2>
                <p class="lead">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla consequuntur natus facere dolorum, 
                  dolores quaerat similique iusto asperiores eveniet, a eum magnam totam animi sequi. 
                  Neque ut, voluptatem nam consectetur.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="feature-four" class="feature-nex">
          <div class="container">
            <div class="row feature-content">
              <div class="col-lg-8 offset-lg-2">
                <h6>Cu proiectul nostru poti:</h6>
                <div class="row">
                  <div class="col-lg-6">
                    <ul>
                      <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
                      <li>Repudiandae, architecto enim minus pariatur temporibus nihil eligendi neque vero voluptates quisquam tempora ullam placeat!</li>
                    </ul>
                  </div>
                  <div class="col-lg-6">
                    <ul>
                      <li>Voluptate magnam, a unde nostrum similique, hic delectus quidem ad.</li>
                      <li>Autem blanditiis explicabo.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="feature-six" class="feature-price">
        <div class="container">
        <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
          <h2>Preturi</h2>
          
          <p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi atque ipsa natus itaque molestias necessitatibus dolorum libero tempora delectus numquam, nisi aspernatur accusamus laborum, eligendi ea deserunt sapiente voluptatem. Odit.</p>
        </div>
        
          <div class="card-deck mb-3 text-center">
            <div class="card mb-4 box-shadow">
              <div class="card-header">
                <h4 class="my-0 font-weight-normal colorize">Free</h4>
              </div>
              <div class="card-body custom">
                <h1 class="card-title pricing-card-title">$0 <small class="text-muted">/ mo</small></h1>
                <ul class="list-unstyled mt-3 mb-4">
                  <li>10 users included</li>
                  <li>2 GB of storage</li>
                  <li>Email support</li>
                  <li>Help center access</li>
                </ul>
              </div>
            </div>
            <div class="card mb-4 box-shadow">
              <div class="card-header">
                <h4 class="my-0 font-weight-normal colorize">Pro</h4>
              </div>
              <div class="card-body custom">
                <div className="custom">
                  <h1 class="card-title pricing-card-title">$15 <small class="text-muted">/ mo</small></h1>
                  <ul class="list-unstyled mt-3 mb-4">
                    <li>20 users included</li>
                    <li>10 GB of storage</li>
                    <li>Priority email support</li>
                    <li>Help center access</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="card mb-4 box-shadow">
              <div class="card-header">
                <h4 class="my-0 font-weight-normal colorize">Enterprise</h4>
              </div>
              <div class="card-body custom">
                <h1 class="card-title pricing-card-title">$29 <small class="text-muted">/ mo</small></h1>
                <ul class="list-unstyled mt-3 mb-4">
                  <li>30 users included</li>
                  <li>15 GB of storage</li>
                  <li>Phone and email support</li>
                  <li>Help center access</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        </section>
          <div className="section3">
          <h6>Ceva scris aicia..</h6>
          <Button variant="outline-success" className="btn2" href="/parteneri">Gaseste parteneri!</Button>
          </div>
        </div>
    );
  }
}

export default Welcome;