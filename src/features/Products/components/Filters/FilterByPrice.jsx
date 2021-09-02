import React from 'react';
import PropTypes from 'prop-types';
import { Box, Button, makeStyles, TextField, Typography } from '@material-ui/core';
import { useState } from 'react';

FilterByPrice.propTypes = {
    onChange: PropTypes.func,
};

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '1rem',
        borderTop: `1px solid ${theme.palette.grey[400]}`,
    },
    range: {
        display: 'flex',
        alignItems: 'center',
        marginTop: theme.spacing(1),
        marginBottom: '.5rem',
        '& > span': {
            margin: '0 .5rem',
        },
    },
}));

function FilterByPrice({ onChange }) {
    const classes = useStyles();
    const [values, setValues] = useState({
        salePrice_gte: 0,
        salePrice_lte: 0,
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };

    const handleSubmit = () => {
        if (onChange) onChange(values);
        setValues({
            salePrice_gte: 0,
            salePrice_lte: 0,
        });
    };
    return (
        <Box className={classes.root}>
            <Typography variant="subtitle2">GIA</Typography>
            <Box className={classes.range}>
                <TextField
                    name="salePrice_gte"
                    value={values.salePrice_gte}
                    onChange={handleChange}
                />
                <span>-</span>
                <TextField
                    name="salePrice_lte"
                    value={values.salePrice_lte}
                    onChange={handleChange}
                />
            </Box>
            <Button variant="outlined" size="small" color="primary" onClick={handleSubmit}>
                Ap dung
            </Button>
        </Box>
    );
}

export default FilterByPrice;
