import React from 'react';
import {Jumbotron, Image, Button} from 'react-bootstrap';
import ReactPlayer from 'react-player';
import './styling/Welcome.css';

class Welcome extends React.Component {

  render () {
    return (
      <div>
        <ReactPlayer 
          url={[
              {src: './video/video2.mp4', type: 'video/ogg'},
              {src: './video/video1.mp4', type: 'video/ogg'}
            ]}
          width='100%' height='80%' playing loop muted fluid
        />
        <section id="feature-two" class="feature-dark">
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
                <Button size="lg" variant="info" className="btn lg" href="/addParteneri">Inscrie-te!</Button>
              </div>
              <div class="col-lg-6 text-sm-center d-none d-lg-block">
                <img src="https://cdn.pixabay.com/photo/2015/09/02/12/34/fence-918535_1280.jpg" alt="iphone"></img>
              </div>
            </div>
          </div>
        </section>

        <section id="feature-three">
          <div class="container">
            <div class="row feature-content">
              <div class="col-lg-6 d-none d-lg-block no-padding">
                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.istockphoto.com%2Fphotos%2Ffertile-agricultural-field-of-organic-crops-in-california-picture-id507512896%3Fk%3D6%26m%3D507512896%26s%3D612x612%26w%3D0%26h%3D0seoYVbKDCtqKq_Ekg2_JUcVKBnEZ2plS8r43Sa2KVk%3D&f=1&nofb=1" alt="macbook"></img>

              </div>
              <div class="col-lg-5 offset-lg-1">
                <h2>O echipa de experti</h2>
                <p class="lead">
                  Nu stiu ce pl sa scriu
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla consequuntur natus facere dolorum, 
                  dolores quaerat similique iusto asperiores eveniet, a eum magnam totam animi sequi. 
                  Neque ut, voluptatem nam consectetur.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="feature-four" class="feature-nex feature-dark">
          <div class="container">
            <div class="row feature-content">
              <div class="col-lg-8 offset-lg-2">
                <p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla consequuntur natus facere dolorum, dolores quaerat similique iusto asperiores eveniet, a eum magnam totam animi sequi. Neque ut, voluptatem nam consectetur.</p>
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
          <h1>Preturi</h1>
          
          <p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi atque ipsa natus itaque molestias necessitatibus dolorum libero tempora delectus numquam, nisi aspernatur accusamus laborum, eligendi ea deserunt sapiente voluptatem. Odit.</p>
        </div>
        
          <div class="card-deck mb-3 text-center">
            <div class="card mb-4 box-shadow">
              <div class="card-header">
                <h4 class="my-0 font-weight-normal">Free</h4>
              </div>
              <div class="card-body">
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
                <h4 class="my-0 font-weight-normal">Pro</h4>
              </div>
              <div class="card-body">
                <h1 class="card-title pricing-card-title">$15 <small class="text-muted">/ mo</small></h1>
                <ul class="list-unstyled mt-3 mb-4">
                  <li>20 users included</li>
                  <li>10 GB of storage</li>
                  <li>Priority email support</li>
                  <li>Help center access</li>
                </ul>
              </div>
            </div>
            <div class="card mb-4 box-shadow">
              <div class="card-header">
                <h4 class="my-0 font-weight-normal">Enterprise</h4>
              </div>
              <div class="card-body">
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