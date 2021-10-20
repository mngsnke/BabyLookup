import React from 'react'
import { Form, FormGroup, FormInput, Button } from 'shards-react'

function RegisterForm() {
    return (
        <div>
            <h5 className="display-4 mb-5 text-center">Register</h5>
            <Form>
                <FormGroup>
                    <FormInput type="email" id="#email" placeholder="Email Address" />
                </FormGroup>
                <FormGroup>
                    <FormInput id="#username" placeholder="Username" />
                </FormGroup>
                <FormGroup>
                    <FormInput type="password" id="#password" placeholder="Password" />
                </FormGroup>
                <FormGroup>
                    <FormInput type="password" id="#password2" placeholder="Confirm Password" />
                </FormGroup>
                
                <FormGroup>
                    <Button className="submit-button">Lezgo</Button>
                </FormGroup>
            </Form>
        </div>
    )
}

export default RegisterForm
