import React, { Component } from "react";
import './styling/Admin.css';
import AdminMap from './AdminMap';
import Switch from "react-switch";

class AdminPage extends Component {
    constructor(props){
        super(props);
            this.state = {
            location: '',
            checked: false,
            customers: []
        };
        this.handleChange = this.handleChange.bind(this);
        }

    handleChange() {
        this.setState(prevState => ({
            checked: !prevState.checked
          }));
    }

    render() {

    const { location } = this.state;

    return (
        <div className="myContainer">
            <div class="custom1">
                <p>Dashboard</p>
                <div className="customRow">
                    <p id="text">User</p>
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