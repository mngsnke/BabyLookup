import React from 'react'
import RegisterForm from './RegisterForm'
import { Container, Row, Col, Card, CardBody } from "shards-react"
import "./css/style.css"
import 'bootstrap/dist/css/bootstrap.min.css'

function RegisterLanding() {
    return (
        <div className="text-white container-fluid position-absolute top-50 start-50 translate-middle">
            <Container className="wd-100">
                <Row>
                    <Col className='container-fluid'>
                        <Card className="form-width">
                            <CardBody>
                                <RegisterForm />
                            </CardBody>
                        </Card>
                    </Col>
                    <Col><div className="display-1 d-flex slogan-right register-slogan">You're excited, aren't you?</div></Col>
                </Row>
            </Container>
        </div>
    )
}

export default RegisterLanding
