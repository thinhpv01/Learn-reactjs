import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography, makeStyles } from '@material-ui/core';
import { useState } from 'react';
import { useEffect } from 'react';
import categoryApi from 'api/categoryApi';

FilterByCategory.propTypes = {
    onChange: PropTypes.func,
};

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '1rem',
    },
    menu: {
        margin: 0,
        padding: 0,
        listStyle: 'none',
        '&>li': {
            marginTop: '.5rem',
            cursor: 'pointer',
            transition: '.4s',
            '&:hover': {
                color: theme.palette.primary.main,
            },
        },
    },
}));

function FilterByCategory({ onChange }) {
    const classes = useStyles();
    const [categoryList, setCategoryList] = useState([]);
    useEffect(() => {
        (async () => {
            try {
                const list = await categoryApi.getAll();
                setCategoryList(
                    list.map((x) => ({
                        id: x.id,
                        name: x.name,
                    }))
                );
            } catch (error) {
                console.log('fail to fetch category list: ', error);
            }
        })();
    }, []);
    const handleCategoryClick = (category) => {
        if (onChange) onChange(category.id);
    };
    return (
        <Box className={classes.root}>
            <Typography variant="subtitle2">DANH MUC SAN PHAM</Typography>
            <ul className={classes.menu}>
                {categoryList.map((category) => (
                    <li key={category.id} onClick={() => handleCategoryClick(category)}>
                        <Typography variant="body2">{category.name}</Typography>
                    </li>
                ))}
            </ul>
        </Box>
    );
}

export default FilterByCategory;
