import React, { Component } from "react";
import './styling/Admin.css';
import './styling/Switch.css';
import AdminMap from './AdminMap';
import Switch from "react-switch";
import {getAllPartners} from "../blockchain/BlockchainService";

const initialCustomers = [
    { categorie: 'depozit', sub_categorie: 'depozit', latitude: '46.770920', longitude: '23.589920'},
    { categorie: 'depozit', sub_categorie: 'depozit', latitude: '47.158455', longitude: '27.601442'},
    { categorie: 'depozit', sub_categorie: 'depozit', latitude: '45.748871', longitude: '21.208679'},
    { categorie: 'depozit', sub_categorie: 'depozit', latitude: '45.6523093', longitude: '25.6102746'},
    { categorie: 'depozit', sub_categorie: 'depozit', latitude: '47.6565584', longitude: '23.5719843'},
    { categorie: 'depozit', sub_categorie: 'depozit', latitude: '44.4361414', longitude: '26.1027202'},
    { categorie: 'depozit', sub_categorie: 'depozit', latitude: '44.3190159', longitude: '23.7965614'},
    { categorie: 'depozit', sub_categorie: 'depozit', latitude: '46.0687385', longitude: '23.5704398'},
    { categorie: 'depozit', sub_categorie: 'depozit', latitude: '47.3469264', longitude: '25.3557638'},
    { categorie: 'depozit', sub_categorie: 'depozit', latitude: '45.2716092', longitude: '27.9742932'}
   ];

class AdminPage extends Component {
    constructor(props){
        super(props);
            this.state = {
            location: '',
            checked1: true,
            checked2: true,
            customers: initialCustomers,
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

        componentDidMount() {
             this.findAllCustomers();
        }

        findAllCustomers(){
             getAllPartners((result) => {
                this.setState({ customers: [...this.state.customers, ...result]})
                console.log(result)
            })
         }
         logout = () => {
            console.log('apasaat');
            this.props.logout();
         }

        render() {

            const { location, customers, checked1, checked2 } = this.state;
            let values = customers;
            console.log("customers: ", this.state.customers)

            if (!checked1 && checked2){
                const onlyProducers = this.state.customers.filter(customer => customer.categorie!='depozit')
                values = onlyProducers;
            } else
            if (checked1 && !checked2){
                console.log("intrat");
                values = initialCustomers;
            } else if (!checked1 && !checked2)
                values = [];


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
                        <div className="navigation">
                            <div className="button" >
                                <img className="imagine" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Sigla_guvernului_Rom%C3%A2niei_versiunea_2016_cu_coroan%C4%83.png/230px-Sigla_guvernului_Rom%C3%A2niei_versiunea_2016_cu_coroan%C4%83.png"></img>
                                <div onClick={this.logout} className="logout">LOGOUT</div>
                            </div>
                        </div>
                        <AdminMap
                            name="location"
                            value={location}
                            customers={values}
                        />
                    </div>
                </div>
            );
        }
}

export default AdminPage;