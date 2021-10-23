import React from 'react'
import {Container, Row, Col, Card, CardBody} from "shards-react"

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
                            <CardBody>
                                <h1>
                                    Match Window
                                </h1>
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
