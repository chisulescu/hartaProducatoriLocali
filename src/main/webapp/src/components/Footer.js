import React from 'react';
import {Navbar, Container, Col} from 'react-bootstrap';

class Footer extends React.Component {

        render () {
                let fullYear = new Date().getFullYear();

                    return (
                        <Navbar fixed="bottom" bg="dark" className="text-white">
                            <Container>
                                     <Col lg={12} clasName="text-center text-muted">
                                            <div>@ {fullYear} - {fullYear + 1}, All Rights Reserved by Tudor Podar</div>
                                      </Col>
                            </Container>
                        </Navbar>
                    );
                 }

}

export default Footer;