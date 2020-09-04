import React, { Component } from "react";
import './styling/Admin.css';
import './styling/SwitchButton.css';
import AdminMap from './AdminMap';

class AdminPage extends Component {

            constructor(props){
                    super(props);
                      this.state = {
                      location: '',
                      checked: false,
                      customers: []
                    };
                    this.onChange = this.onChange.bind(this);
                    }

              onChange(e) {
                 const { checked } = e.target;
                 this.setState({ checked });
               }

            render() {

            const { location } = this.state;

            return (
                <div class="container-fluid">
                    <div class="row d-flex d-md-block flex-nowrap wrapper">
                        <div class="col-md-3 float-left col-1 pl-0 pr-0 collapse width show" id="sidebar">
                            <div class="list-group border-0 text-center text-md-left">
                                <a href="#menu1" class="list-group-item d-inline-block collapsed" data-toggle="collapse" aria-expanded="false"><i class="fa fa-dashboard"></i> <span class="d-none d-md-inline">Dashboard</span> </a>
                                <div class="rss">
                                      <input type="checkbox" id="buttonThree" checked={this.state.checked} onChange={this.onChange} />
                                      <label for="buttonThree">
                                          <i></i>
                                        </label>
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