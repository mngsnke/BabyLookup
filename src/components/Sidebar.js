import React from 'react'
import { Row, Col } from "shards-react"
import { Link, useRouteMatch } from 'react-router-dom'
import { Heart, ChatDots } from "react-bootstrap-icons"
import "./css/style.css"

function Sidebar() {
    let { url } = useRouteMatch()
    return (
        <div>
            <Link className="align-middle" to="/home">
            <Row style={{fontSize: "1em"}} className="sidebar-text text-white">
                <Col lg="2"><Heart /></Col>
                <Col>Find a Match</Col> 
            </Row>
            </Link>
            <Link to="/home/chat">
                <Row style={{fontSize: "1em"}} className="sidebar-text text-white">
                    <Col lg="2"><ChatDots /></Col>
                    <Col>Chat</Col>
                </Row>
            </Link>
        </div>
    )
}

export default Sidebar
