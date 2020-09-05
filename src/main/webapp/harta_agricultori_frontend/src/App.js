import React from 'react';
import './App.css';
import {Container, Row, Col} from 'react-bootstrap';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';


// importuri clase
import NavigationBar from './components/NavigationBar';
import Welcome from './components/Welcome';
import Footer from './components/Footer';
import Partener from './components/Partener';
import AddPartener from './components/AddPartener';
import AdminPage from './components/AdminPage';
import PrivateRoute from './components/privateRoute';
import Login from './components/auth/Login';
import Register from './components/auth/Register';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authed: true, // temporary set to true
      user: 'user'  // temporary
    };
    this.enableAuthed = this.enableAuthed.bind(this);
    this.disableAuthed = this.disableAuthed.bind(this);
  }

  enableAuthed(user) {
    this.setState({ authed: true, user: user });
  }

  disableAuthed() {
    console.log("apasat");
    this.setState({ authed: false });
  }

render () {
  // const marginTop = {marginTop: "20px"};
  return (
    <Router>
         <NavigationBar isAuthed={this.state.authed} logout={this.disableAuthed} />
            <Row>
                <Col >
                  <Switch>
                    <Route path="/" exact component={Welcome}/>
                    <Route path="/addParteneri" exact component={AddPartener}/>
                    <Route path="/login">
                      <Login logIn={this.enableAuthed} />
                    </Route>
                    <Route path="/register">
                      <Register />
                    </Route>
                    <Route path="/parteneri" exact component={Partener}/>
                    <PrivateRoute authed={this.state.authed} path='/adminPage' component={AdminPage} />
                  </Switch>
                </Col>
            </Row>
         <Footer/>
    </Router>
  );
}
}

export default App;
