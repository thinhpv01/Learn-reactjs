import React from 'react';
import PropTypes from 'prop-types';
import RegisterForm from '../RegisterForm';
import { useDispatch } from 'react-redux';
import { register } from 'features/Auth/userSlice';

Register.propTypes = {};

function Register(props) {
    const dispatch = useDispatch();
    const handleSubmit = async (values) => {
        try {
            values.username = values.email;
            console.log(values);
            const action = register(values);
            const user = await dispatch(action).unwrap();
            console.log(user);
        } catch (error) {
            console.log('Failed to register: ', error);
        }
    };
    return <RegisterForm onSubmit={handleSubmit} />;
}

export default Register;
