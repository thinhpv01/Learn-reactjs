import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';
import { Controller } from 'react-hook-form';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { useState } from 'react';

PasswordField.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    disabled: PropTypes.bool,
};

function PasswordField(props) {
    const { form, name, label, disabled } = props;
    const [showPassword, setShowPassword] = useState(false);
    const {
        formState: { errors },
    } = form;
    const hasError = !!errors[name];

    const handleToggleShowPassword = () => {
        setShowPassword((x) => !x);
    };
    return (
        <FormControl error={hasError} variant="outlined" fullWidth margin="normal">
            <InputLabel htmlFor={name}>{label}</InputLabel>
            <Controller
                control={form.control}
                name={name}
                render={({ field: { onChange, onBlur, value, name, ref } }) => (
                    <OutlinedInput
                        id={name}
                        type={showPassword ? 'text' : 'password'}
                        value={value}
                        onChange={onChange}
                        label={label}
                        disabled={disabled}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleToggleShowPassword}
                                    edge="end"
                                >
                                    {showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        }
                        variant="outlined"
                        margin="normal"
                    />
                )}
            />
            <FormHelperText id="component-error-text">{errors[name]?.message}</FormHelperText>
        </FormControl>
    );
}

export default PasswordField;
