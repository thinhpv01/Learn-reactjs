import React from 'react';
import PropTypes from 'prop-types';
import { THUMBNAIL_PLACEHOLDER, STATIC_HOST } from 'constants/index';
import { Box } from '@material-ui/core';

ProductThumbnail.propTypes = {};

function ProductThumbnail({ product }) {
    const thumbnail = product.thumbnail
        ? `${STATIC_HOST}${product.thumbnail.url}`
        : THUMBNAIL_PLACEHOLDER;
    return (
        <Box>
            <img src={thumbnail} width="100%" style={{ objectFit: 'cover' }} alt={product.name} />
        </Box>
    );
}

export default ProductThumbnail;
