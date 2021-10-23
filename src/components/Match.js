import React from 'react'
import {Container, Row, Col, Card, CardBody} from "shards-react"
import Image from "react-bootstrap/Image"
import img from "./images/kyle.jpg"

function Match() {
    return (
        <div>
            <Container>
                <Row>
                    {/* X Column */}
                    <Col lg="4">
                    </Col>

                    {/* Profile Card Column */}
                    <Col lg="4">
                        
                        <Card>
                            <CardBody style={{padding: "0"}}>
                                <Image src={img} alt="no load oh no" rounded style={{width: "100%", height: "100%"}} />
                            </CardBody>
                        </Card>
                    </Col>
                    
                    {/* Check column */}
                    <Col lg="4">
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Match
