import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';
import { Controller } from 'react-hook-form';

InputField.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    disabled: PropTypes.bool,
};

function InputField(props) {
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
                    fullWidth
                    label={label}
                    disabled={disabled}
                    onChange={onChange}
                    value={value}
                    error={!!hasError}
                    helperText={errors[name]?.message}
                />
            )}
        />
    );
}

export default InputField;
