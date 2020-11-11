import React, { useState } from 'react';
import { Button, Form, FormGroup } from 'reactstrap';
import Formnput from '../shared/Formnput';
import { createUser } from '../actions/user';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const NewFormUser = ({ createUser }) => {
    const [userCredentials, setUserCredentials] = useState({firstName: '', lastName: ''})
    const { firstName, lastName } = userCredentials;
    const handleChange = e => {
        const { name, value } = e.target;
        setUserCredentials({...userCredentials, [name]: value})
    }

    const handleSubmit = e => {
        e.preventDefault();
        createUser(userCredentials);
        setUserCredentials({firstName: '', lastName: ''})
    }

    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Formnput handleChange={handleChange} placeHolder='First Name' label='First Name' name='firstName' required value={firstName} />
            </FormGroup>
            <FormGroup>
                <Formnput handleChange={handleChange} placeHolder='Last Name' label='Last Name' name='lastName' required value={lastName} />
            </FormGroup>
            <FormGroup>
                <Button block outline type='submit' color='primary'>Create</Button>
            </FormGroup>
        </Form>
    )
}

NewFormUser.propTypes = {
    createUser: PropTypes.func.isRequired
}

export default connect(null,{createUser})(NewFormUser)
