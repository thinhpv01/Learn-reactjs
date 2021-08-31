import { login } from 'features/Auth/userSlice';
import { useSnackbar } from 'notistack';
import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import LoginForm from '../LoginForm';

Login.propTypes = {
    closeDialog: PropTypes.func,
};

function Login(props) {
    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar();
    const handleSubmit = async (values) => {
        try {
            const action = login(values);
            const user = await dispatch(action).unwrap();
            const { closeDialog } = props;
            if (closeDialog) closeDialog();
            console.log(user);
        } catch (error) {
            enqueueSnackbar(error.message, { variant: 'error' });
            console.log('Failed to register: ', error);
        }
    };
    return <LoginForm onSubmit={handleSubmit} />;
}

export default Login;
