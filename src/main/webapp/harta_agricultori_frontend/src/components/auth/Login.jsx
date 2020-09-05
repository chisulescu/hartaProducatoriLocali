import React from "react";
import { Redirect } from "react-router-dom";
import "./auth.css";
import Register from "./Register";

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
        <div>
          <h2 id="text">Login</h2>
          <form>
            <label htmlFor="email">Username</label>
            <input
                name="username"
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={this.handleChange}
            />
            <label htmlFor="email">Password</label>
            <input
                name="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={this.handleChange}
            />
            <button className="authButton" type="button" onClick={this.handleSubmit}>Login</button>
          </form>
        </div>
    );
  }
}

export default Login;