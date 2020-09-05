import React from "react";
import "./auth.css";
import {Link} from 'react-router-dom';

const axios = require('axios').default;


class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password1: "",
      password2: ""
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = () => {
    const { username, email, password1, password2 } = this.state;
    console.log("Submitting");
    axios.post('http://127.0.0.1:8000/rest-auth/registration/', {
      username,
      email,
      password1,
      password2
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  };

  render() {
    const { username, email, password1, password2 } = this.state;
    return (
      <div>
        <h2 id="text">Register</h2>
        <form>
          <label htmlFor="email">Username</label>
          <input
            name="username"
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={this.handleChange}
          />
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="text"
            placeholder="Enter your email"
            value={email}
            onChange={this.handleChange}
          />
          <label htmlFor="email">Password</label>
          <input
            name="password1"
            type="password"
            value={password1}
            onChange={this.handleChange}
          />
          <label htmlFor="email">Re-enter your password</label>
          <input
            name="password2"
            type="password"
            value={password2}
            onChange={this.handleChange}
          />
          <button className="authButton" type="button" onClick={this.handleSubmit}>Register</button>
          <Link to={"login"} className="nav-link">Sing in</Link>
        </form>
      </div>
    );
  }
}

export default Register;
