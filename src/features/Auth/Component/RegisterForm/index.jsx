import { yupResolver } from '@hookform/resolvers/yup';
import { Avatar, Button, makeStyles, Typography } from '@material-ui/core';
import InputField from 'components/form-controls/InputField';
import PropTypes from 'prop-types';
import React from 'react';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import PasswordField from 'components/form-controls/passwordField';
RegisterForm.propTypes = {
    onSubmit: PropTypes.func,
};

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

function RegisterForm(props) {
    const classes = useStyles();
    const schema = yup.object().shape({
        fullName: yup
            .string()
            .required('Please enter your full name!')
            .test('Should has at least two words', 'Please enter at least two words!', (values) => {
                return values.split(' ').length >= 2;
            }),
        email: yup
            .string()
            .required('Please enter your email!')
            .email('Please enter a valid email address!'),
        password: yup
            .string()
            .required('Please enter your password!')
            .min(6, 'Please enter at least 6 characters!'),
        retypePassword: yup
            .string()
            .required('Please retype your password')
            .oneOf([yup.ref('password')], 'Password does not match!'),
    });
    const form = useForm({
        defaultValues: {
            fullName: '',
            email: '',
            password: '',
            retypePassword: '',
        },
        resolver: yupResolver(schema),
    });

    const handleSubmit = (values) => {
        const { onSubmit } = props;
        if (onSubmit) onSubmit(values);
        form.reset();
    };

    return (
        <div className={classes.paper}>
            <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component="h3" variant="h6">
                Create An Account
            </Typography>
            <form onSubmit={form.handleSubmit(handleSubmit)}>
                <InputField name="fullName" label="Full Name" form={form} />
                <InputField name="email" label="Email" form={form} />
                <PasswordField name="password" label="Password" form={form} />
                <PasswordField name="retypePassword" label="Retype Password" form={form} />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    size="large"
                    className={classes.submit}
                >
                    Create An Account
                </Button>
            </form>
        </div>
    );
}

export default RegisterForm;
