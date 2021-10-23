import React from 'react'
import { Container, Card, CardBody, Row, Col } from "shards-react"
import { BrowserRouter as Router, Route, Switch, useRouteMatch } from 'react-router-dom'
import Sidebar from './Sidebar'
import Match from './Match'
import Chat from './Chat'
import "./css/style.css"


function Home() {
    let { path } = useRouteMatch();

    return (
        <div>
            {/* <Container>
                <Row>
                    <Col>
                    <Card>
                        <CardBody>
                            <Sidebar />  
                        </CardBody>
                    </Card>
                    </Col>
                </Row>
            </Container> */}
            <Router>
            <Container fluid>
                {/* <Card style={{ height: "85vh" }}>
                    <CardBody> */}

                        <Row>
                            <Col lg="1"> 
                                <Card style={{position: "absolute", background: "linear-gradient(60deg, rgba(255,2,168,1) 0%, rgba(207,1,212,1) 51%, rgba(158,0,255,1) 94%)", width: "10vw"}}>
                                    <CardBody>
                                        <Sidebar />  
                                    </CardBody>
                                </Card>
                                </Col>
                                <Col>
                                <Card style={{boxShadow: "none", borderRadius: "0px 10px 10px 0px", minHeight: "85vh"}}>
                                    <CardBody>
                                        <Switch>
                                            <Route exact path={`${path}/`} component={Match} />
                                            <Route path={`${path}/chat`} component={Chat} />
                                        </Switch>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>   
            </Container>
            </Router>
        </div>
    )
}



export default Home;
