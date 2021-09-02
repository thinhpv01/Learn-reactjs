import React from 'react';
import PropTypes from 'prop-types';
import {
    Box,
    Button,
    Checkbox,
    FormControlLabel,
    makeStyles,
    TextField,
    Typography,
} from '@material-ui/core';
import { useState } from 'react';
import { boolean } from 'yup/lib/locale';

FilterByService.propTypes = {
    filters: PropTypes.object,
    onChange: PropTypes.func,
};

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '1rem',
        borderTop: `1px solid ${theme.palette.grey[400]}`,
    },
    list: {
        padding: 0,
        margin: 0,
        listStyle: 'none',
    },
}));

function FilterByService({ filters = {}, onChange }) {
    const classes = useStyles();

    const handleChange = (e) => {
        const { name, checked } = e.target;
        if (onChange) onChange({ [name]: checked });
    };

    return (
        <Box className={classes.root}>
            <Typography variant="subtitle2">DINH VU</Typography>
            <ul className={classes.list}>
                {[
                    { value: 'isPromotion', label: 'Co khuyen mai' },
                    { value: 'isFreeShip', label: 'Van chuyen mien phi' },
                ].map((service) => (
                    <li key={service.value}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={Boolean(filters[service.value])}
                                    onChange={handleChange}
                                    name={service.value}
                                    color="primary"
                                />
                            }
                            label={service.label}
                        />
                    </li>
                ))}
            </ul>
        </Box>
    );
}

export default FilterByService;
