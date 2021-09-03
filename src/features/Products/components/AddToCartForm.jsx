import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '@material-ui/core';
import QuantityField from 'components/form-controls/quantityField';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

AddToCartForm.propTypes = {
    onSubmit: PropTypes.func,
};

function AddToCartForm({ onSubmit = null }) {
    AddToCartForm.propTypes = {
        onSubmit: PropTypes.func,
    };
    const schema = yup.object().shape({
        quantity: yup
            .number()
            .min(1, 'Please enter at least 1')
            .required('Please enter quantity!')
            .typeError('Please enter a number!'),
    });
    const form = useForm({
        defaultValues: {
            quantity: 0,
        },
        resolver: yupResolver(schema),
    });

    const handleSubmit = async (values) => {
        if (onSubmit) await onSubmit(values);
    };
    return (
        <form onSubmit={form.handleSubmit(handleSubmit)}>
            <QuantityField name="quantity" label="quantity" form={form} />
            <Button
                type="submit"
                variant="contained"
                style={{ width: '200px' }}
                color="primary"
                size="small"
            >
                By
            </Button>
        </form>
    );
}

export default AddToCartForm;
