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
        <div class="container-fluid">
            <div class="row d-flex d-md-block flex-nowrap wrapper">
                <div class="col-md-3 float-left col-1 pl-0 pr-0 collapse width show" id="sidebar">
                    <div class="custom1 list-group border-0 text-center text-md-left">
                        <a href="#menu1" class="list-group-item d-inline-block collapsed" data-toggle="collapse" aria-expanded="false"><i class="fa fa-dashboard"></i> <span class="d-none d-md-inline">Dashboard</span> </a>
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
                </div>
                <main class="col-md-9 float-left col px-5 pl-md-2 pt-2 main">
                    <div className={"shadow"}>
                        <AdminMap
                        name="location"
                        value={location}
                        customers={this.state.customers}
                        />
                    </div>
                </main>
            </div>
        </div>
    );
    }
}

export default AdminPage;