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
        this.handleChange = this.handleChange.bind(this);
        }

    handleChange(checkName) {
        this.setState(prevState => ({
            [checkName]: !prevState.checked
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
                        onChange={() => this.handleChange("check1")}
                        checked={this.state.checked}
                        height={20}
                        width={40}
                        uncheckedIcon={false}
                        checkedIcon={false}
                    />
                </div>
                <div className="customRow">
                    <p id="text">Afiseaza producatori</p>
                    <Switch
                        onChange={this.handleChange}
                        checked={this.state.checked}
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