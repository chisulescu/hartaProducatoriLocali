import React, { Component } from "react";
import './styling/Admin.css';
import './styling/Switch.css';
import AdminMap from './AdminMap';
import Switch from "react-switch";
import {getAllPartners} from "../blockchain/BlockchainService";


class AdminPage extends Component {
    constructor(props){
        super(props);
            this.state = {
            location: '',
            checked1: false,
            checked2: false,
            customers: [
             { categorie: 'depozit', sub_categorie: 'depozit', latitude: '46.770920', longitude: '23.589920'},
             { categorie: 'depozit', sub_categorie: 'depozit', latitude: '47.158455', longitude: '27.601442' }
            ]
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
        componentDidUpdate() {

        console.log("Switch 1");
        console.log(this.state.checked1);
        console.log("Switch 2");
        console.log(this.state.checked2);

        if (this.state.checked1 && this.state.checked2){
            this.findAllCustomers();
        } else if  (this.state.checked1 && !this.state.checked2) {
            this.state.customers = []
        }


        }
         componentDidMount() {
             this.findAllCustomers();
         }

        findAllCustomers(){
             getAllPartners((result) => {
             this.setState({customers: result}); console.log(result)})
             console.log("pppppppppppppppppppp");
              console.log(this.state.customers)
             console.log("ooooooooooo");
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
            <div className="custom2">
                <div class="navigation">
                    <a class="button" href="">
                        <img src="https://pbs.twimg.com/profile_images/378800000639740507/fc0aaad744734cd1dbc8aeb3d51f8729_400x400.jpeg"></img>
                        <div class="logout">LOGOUT</div>
                    </a>
                </div>
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