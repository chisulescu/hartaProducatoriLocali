import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';

class NavigationBar extends React.Component {

render () {
            return (
            <div>
                  <Navbar>
                  <Link to={""} className="navbar-brand">
                  <img src="./img/farm.png" width="25" height="25" alt="brand"/>
                  </Link>
                    <Nav className="mr-auto">
                          <Link to={"parteneri"} className="nav-link">Parteneri</Link>
                          <Link to={"addParteneri"} className="nav-link">Inscrie-te acum!</Link>
                    </Nav>
                  </Navbar>
            </div>
            );
}

}

export default NavigationBar;