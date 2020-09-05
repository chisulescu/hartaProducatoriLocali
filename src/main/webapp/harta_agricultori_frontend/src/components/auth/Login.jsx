import React from "react";
import { Redirect } from "react-router-dom";
import "./auth.css";
import Register from "./Register";
import {Link} from 'react-router-dom';

// const axios = require('axios').default;


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      navigate: false,
    };

  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = () => {
    // const { username, password } = this.state;
    // console.log("Submitting");
    // const self = this;

    // axios.post('http://127.0.0.1:8000/rest-auth/login/', {
    //   username,
    //   password
    // })
    // .then((response) => {
    //   console.log(response);
    //   if (response.status === 200) {
    //     this.props.logIn();
    //     self.setState({ navigate: true })
    //   }
    // })
    // .catch((error) => {
    //   console.log(error);
    // });
    console.log("111111111");
    this.props.logIn("user");
    this.setState({ navigate: true })
  };



  goToRegister = () => {
    window.location.pathname = '/register';
  };

  render() {
    const { navigate, username, password } = this.state;

    if (navigate) {
      return <Redirect to="/home" push={true} />
    }

    return (
        <div class="wrapper fadeInDown">
          <div id="formContent">
            <h2 class="active"> Sign In </h2>

            <form>
              <input
              type="text"
              id="username"
              className="fadeIn first myInput"
              name="username"
              placeholder="Enter your username"
              value={username}
              onChange={this.handleChange}/>

              <input
              type="text"
              id="password"
              className="fadeIn second myInput"
              name="password"
              value={password}
              placeholder="Enter your password"
              onChange={this.handleChange}/>

              <input type="submit" class="fadeIn fourth myInput" value="Log In" onClick={this.handleSubmit} />
            </form>

            <div id="formFooter">
             <a class="underlineHover"> <Link to={"register"} className="nav-link">Create an account</Link> </a>
              <a class="underlineHover"> <Link to={"register"} className="nav-link">Forgot Password?</Link> </a>
            </div>

          </div>
        </div>
    );
  }
}

export default Login;