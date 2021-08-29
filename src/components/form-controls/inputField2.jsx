import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';
import { Controller } from 'react-hook-form';

InputFiled2.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    disabled: PropTypes.bool,
};

function InputFiled2(props) {
    const { form, name, label, disabled } = props;
    const {
        formState: { errors },
    } = form;
    const hasError = errors[name];
    return (
        <Controller
            control={form.control}
            name={name}
            render={({ field: { onChange, onBlur, value, name, ref } }) => (
                <TextField
                    label={label}
                    value={value}
                    onChange={onChange}
                    disabled={disabled}
                    margin="normal"
                    variant="outlined"
                    error={!!hasError}
                    helperText={errors[name]?.message}
                />
            )}
        />
    );
}

export default InputFiled2;
