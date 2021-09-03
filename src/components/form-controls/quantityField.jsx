import React from 'react';
import PropTypes from 'prop-types';
import { Box, TextField, Typography } from '@material-ui/core';
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
import { AddCircleOutline, RemoveCircleOutline } from '@material-ui/icons';

QuantityField.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    disabled: PropTypes.bool,
};

const useStyles = makeStyles((theme) => ({
    root: {},
    box: {
        display: 'flex',
        flexWrap: 'row nowrap',
        alignItems: 'center',
        maxWidth: '200px',
    },
}));

function QuantityField(props) {
    const classes = useStyles();
    const { form, name, label, disabled } = props;
    const {
        formState: { errors },
        setValue,
    } = form;
    const hasError = !!errors[name];

    return (
        <FormControl error={hasError} variant="outlined" fullWidth margin="normal" size="small">
            <Typography>{label}</Typography>
            <Controller
                control={form.control}
                name={name}
                render={({ field: { onChange, onBlur, value, name, ref } }) => (
                    <Box className={classes.box}>
                        <IconButton onClick={() => setValue(name, Number.parseInt(value) - 1)}>
                            <RemoveCircleOutline />
                        </IconButton>
                        <OutlinedInput
                            id={name}
                            type="number"
                            value={value}
                            onChange={onChange}
                            disabled={disabled}
                        />
                        <IconButton onClick={() => setValue(name, Number.parseInt(value) + 1)}>
                            <AddCircleOutline />
                        </IconButton>
                    </Box>
                )}
            />
            <FormHelperText id="component-error-text">{errors[name]?.message}</FormHelperText>
        </FormControl>
    );
}

export default QuantityField;
