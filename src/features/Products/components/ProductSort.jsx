import React from 'react';
import PropTypes from 'prop-types';
import { Tab, Tabs } from '@material-ui/core';

ProductSort.propTypes = {
    currentSort: PropTypes.string,
    onChange: PropTypes.func,
};

function ProductSort({ currentSort, onChange }) {
    const handleSortChange = (e, newValue) => {
        if (onChange) onChange(newValue);
    };
    return (
        <Tabs
            value={currentSort}
            indicatorColor="primary"
            textColor="primary"
            onChange={handleSortChange}
            aria-label="disabled tabs example"
        >
            <Tab label="Low to high price" value="salePrice:ASC" />
            <Tab label="Height to Low price" value="salePrice:DESC" />
        </Tabs>
    );
}

export default ProductSort;
