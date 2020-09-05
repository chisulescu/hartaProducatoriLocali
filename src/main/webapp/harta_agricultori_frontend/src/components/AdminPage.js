import React, { Component } from "react";
import './styling/Admin.css';
import './styling/Switch.css';
import AdminMap from './AdminMap';
import Switch from "react-switch";

class AdminPage extends Component {
    constructor(props){
        super(props);
            this.state = {
            location: '',
            checked1: false,
            checked2: false,
            customers: []
        };
        this.handleChange1 = this.handleChange1.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        }

        handleChange1() {
        this.setState(prevState => ({
           checked1: !prevState.checked1
          }));
        }

        handleChange2() {
            this.setState(prevState => ({
                checked2: !prevState.checked2
              }));
        }

    render() {

    const { location } = this.state;

    return (
        <div className="myContainer">
            <div class="custom1">
                <p>Dashboard</p>
                <div className="customRow">
                    <p id="text">Afiseaza depozite</p>
                    <Switch
                        className="switch-position-correct"
                        onChange={this.handleChange1}
                        checked={this.state.checked1}
                        height={20}
                        width={40}
                        uncheckedIcon={false}
                        checkedIcon={false}
                    />
                </div>
                <div className="customRow">
                    <p id="text">Afiseaza producatori</p>
                    <Switch
                        onChange={this.handleChange2}
                        checked={this.state.checked2}
                        height={20}
                        width={40}
                        uncheckedIcon={false}
                        checkedIcon={false}
                    />
                </div>
            </div>
            <div className="shadow custom2">
                <AdminMap
                    name="location"
                    value={location}
                    customers={this.state.customers}
                />
            </div>
        </div>
    );
    }
}

export default AdminPage;