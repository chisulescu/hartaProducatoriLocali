import React from 'react';
import {Card, Table, ButtonGroup, Button} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEdit, faTrash} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import {getAllPartners} from "../blockchain/BlockchainService";

class Partener extends React.Component {

        constructor(props) {
            super(props);
            this.state = {
              customers: []
            };
        }

        componentDidMount() {
            this.findAllCustomers();
        }

        findAllCustomers(){
            getAllPartners((result) => {this.setState({customers: result}); console.log(result)})

            // axios.get("http://localhost:8080/customers")
            // .then(response => response.data)
            // .then((data) => {
            //     this.setState({customers: data});
            //     console.log(data)
            // });
        }
/* Jos unde se insereaza iamgiena am pus acele doua paranteze dinainte de customer.title ca sa am spatiu intre imagine si titlu*/
        render () {
               return (
               <Card className={"border border-white bg-white text-gree shadow p-3 mb-8 bg-white rounded"}>
                    <Card.Header className={"border border-white bg-white"}> Parteneri </Card.Header>
                    <Card.Body>
                        <Table>
                            <thead>
                                <tr>
                                  <th>Tara</th>
                                  <th>Firma</th>
                                  <th>Judet</th>
                                  <th>Email</th>
                                  <th>Telefon</th>
                                  <th>Website</th>
                                </tr>
                              </thead>
                              <tbody>
                              {
                              this.state.customers.length == 0 ?
                                <tr align="center">
                                  <td colSpan="6">Parteneri indisponibili</td>
                                </tr> :
                              this.state.customers.map((customer) => (
                                <tr key={customer.id}>
                                <td>{customer.tara}</td>
                                <td>{customer.nume_firma}</td>
                                <td>{customer.judet}</td>
                                <td>{customer.email}</td>
                                <td>{customer.telefon}</td>
                                <td>{customer.website}</td>
                                <td>
                                    <ButtonGroup>
                                        <Button size="sm" variant="outline-primary"><FontAwesomeIcon icon={faEdit}/></Button>
                                          <Button size="sm" variant="outline-danger"><FontAwesomeIcon icon={faTrash}/></Button>
                                    </ButtonGroup>
                                </td>
                                </tr>
                            ))
                              }
                              </tbody>
                        </Table>
                    </Card.Body>
               </Card>
               );
        }

}

export default Partener;