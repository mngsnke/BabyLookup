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
            <Router>
                <Container fluid style={{padding: "0vh 2vw 0vh 2vw"}}>
                    <Row>
                        <Col lg={1} style={{padding: "0"}}>
                            <Card style={{boxShadow: "none", borderRadius: "10px 0px 0px 10px", background: "linear-gradient(60deg, rgba(255,2,168,1) 0%, rgba(207,1,212,1) 51%, rgba(158,0,255,1) 94%)"}}>
                                <CardBody>
                                    <Sidebar />
                                </CardBody>
                            </Card>
                        </Col>
                        <Col lg={11} style={{padding: "0"}}>
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
