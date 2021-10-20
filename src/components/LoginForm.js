import React from 'react'
import './css/style.css'
// import { Form, FormInput, FormGroup, FormCheckbox, Button } from 'shards-react'

const shrds = require('shards-react')
const { Form, FormInput, FormGroup, Button } = shrds;

function LoginForm() {
    
    return (
        <div>
            <h5 className="display-4 mb-5 text-center">Login</h5>
            <Form>
                <FormGroup>
                    <FormInput id="#username" placeholder="Username" />
                </FormGroup>
                <FormGroup>
                    <FormInput type="password" id="#password" placeholder="Password" />
                </FormGroup>
                
                <FormGroup>
                    <Button className="submit-button">Lezgo</Button>
                </FormGroup>
            </Form>
        </div>
    )
}

export default LoginForm
