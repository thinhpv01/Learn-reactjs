import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import InputFiled2 from 'components/form-controls/inputField2';
import { Button } from '@material-ui/core';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import './styles.scss';

AlbumForm.propTypes = {
    onsubmit: PropTypes.func,
};

function AlbumForm({ onSubmit }) {
    const schema = yup.object().shape({
        name: yup.string().required('Please enter Name!').min(5, 'Name is too short'),
        imgUrl: yup.string().required('Please enter imgUrl!'),
    });
    const form = useForm({
        defaultValues: {
            name: '',
            imgUrl: '',
        },
        resolver: yupResolver(schema),
    });

    const handleSubmit = (values) => {
        if (onSubmit) onSubmit(values);
        form.reset();
    };
    return (
        <form onSubmit={form.handleSubmit(handleSubmit)} className="form">
            <p className="form__title">Add album item</p>
            <InputFiled2 name="name" label="name" form={form} />
            <InputFiled2 name="imgUrl" label="img url" form={form} />
            <Button variant="contained" color="primary" size="large" type="submit" style={{ marginTop: '1rem' }}>
                Submit
            </Button>
        </form>
    );
}

export default AlbumForm;
