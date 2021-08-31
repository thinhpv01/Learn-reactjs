import { yupResolver } from '@hookform/resolvers/yup';
import { Avatar, Button, LinearProgress, makeStyles, Typography } from '@material-ui/core';
import InputField from 'components/form-controls/InputField';
import PropTypes from 'prop-types';
import React from 'react';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import PasswordField from 'components/form-controls/passwordField';
LoginForm.propTypes = {
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
    progress: {
        position: 'absolute',
        top: 0,
        height: '6px',
        width: '100%',
        left: 0,
    },
}));

function LoginForm(props) {
    const classes = useStyles();
    const schema = yup.object().shape({
        identifier: yup
            .string()
            .required('Please enter your email!')
            .email('Please enter a valid email address!'),
        password: yup.string().required('Please enter your password!'),
    });
    const form = useForm({
        defaultValues: {
            identifier: '',
            password: '',
        },
        resolver: yupResolver(schema),
    });

    const handleSubmit = async (values) => {
        const { onSubmit } = props;
        if (onSubmit) await onSubmit(values);
    };

    const { isSubmitting } = form.formState;

    return (
        <div className={classes.paper}>
            {isSubmitting && <LinearProgress className={classes.progress} />}
            <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component="h3" variant="h6">
                Sign In
            </Typography>
            <form onSubmit={form.handleSubmit(handleSubmit)}>
                <InputField name="identifier" label="Email" form={form} />
                <PasswordField name="password" label="Password" form={form} />
                <Button
                    disabled={isSubmitting}
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    size="large"
                    className={classes.submit}
                >
                    Sign In
                </Button>
            </form>
        </div>
    );
}

export default LoginForm;
