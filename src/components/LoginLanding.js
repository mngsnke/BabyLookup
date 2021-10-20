import React from 'react'
import { Container, Row, Col, Card, CardBody } from 'shards-react'
import LoginForm from './LoginForm'
import './css/style.css'

function LoginLanding() {
    return (
        <div className="text-white container-fluid position-absolute top-50 start-50 translate-middle">
            <Container className="wd-100">
                <Row>
                    <Col><div className="display-1 slogan">Find Your Baby, You Lonely Ass!</div></Col>
                    <Col className="my-auto">
                        <Card>
                            <CardBody>
                                <LoginForm />
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default LoginLanding
