import React from 'react';
import {Navbar, Nav, Button} from 'react-bootstrap';
import {Link, withRouter} from 'react-router-dom';

class NavigationBar extends React.Component {

render () {
    const showNavBar = this.props.location.pathname!=='/login' 
    && this.props.location.pathname!=='/register'
    && this.props.location.pathname!=='/adminPage';
    console.log(showNavBar);
            return (
            <div>
                {showNavBar &&
                <Navbar>
                  <Link to={""} className="navbar-brand">
                  <img src="./img/farm.png" width="25" height="25" alt="brand"/>
                  </Link>
                    <Nav className="mr-auto">
                        <Link to={"parteneri"} className="nav-link">Parteneri</Link>
                        <Link to={"addParteneri"} className="nav-link">Inscrie-te acum!</Link>
                        {this.props.isAuthed &&
                            <Link to={"adminPage"} className="nav-link">Admin Page</Link>
                        }
                        {!this.props.isAuthed &&

                            <Link to={"login"} className="nav-link">Login</Link>
                        }
                        {this.props.isAuthed &&
                            <Button onClick={this.props.logout} className="nav-link">Logout</Button>
                        }
                    </Nav>
                </Navbar>
            }
        </div>
    );
}

}

export default withRouter(NavigationBar)