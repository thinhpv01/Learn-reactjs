import React from 'react';
import PropTypes from 'prop-types';
import RegisterForm from '../RegisterForm';

Register.propTypes = {};

function Register(props) {
    const handleSubmit = (values) => {
        console.log(values);
    };
    return <RegisterForm onSubmit={handleSubmit} />;
}

export default Register;
