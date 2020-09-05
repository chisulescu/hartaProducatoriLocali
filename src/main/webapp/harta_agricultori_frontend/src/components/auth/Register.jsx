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

       <div class="wrapper fadeInDown">
                <div id="formContent">
                  <h2 class="active"> Sign In </h2>

                  <form>
                    <input
                    type="text"
                    id="username"
                    class="fadeIn one"
                    name="username"
                    placeholder="Enter your username"
                    value={username}
                    onChange={this.handleChange}/>

                    <input
                    type="text"
                    id="password1"
                    class="fadeIn secound"
                    name="password1"
                    value={password1}
                    placeholder="Enter your email"
                    onChange={this.handleChange}/>

                    <input
                    type="text"
                    id="password2"
                    class="fadeIn third"
                    name="password2"
                    value={password2}
                    placeholder="Enter your password"
                    onChange={this.handleChange}/>

                    <input
                    type="text"
                    id="email"
                    class="fadeIn third"
                    name="email"
                    value={email}
                    placeholder="Repet password"
                    onChange={this.handleChange}/>

                    <input type="submit" class="fadeIn fourth" value="Log In" onClick={this.handleSubmit} />
                  </form>

                  <div id="formFooter">
                   <a class="underlineHover"> <Link to={"login"} className="nav-link">Login</Link> </a>
                  </div>

                </div>
              </div>
    );
  }
}

export default Register;
