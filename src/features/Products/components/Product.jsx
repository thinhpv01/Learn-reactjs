import React from 'react';
import PropTypes from 'prop-types';
import { Skeleton } from '@material-ui/lab';
import { Box, Typography } from '@material-ui/core';
import { THUMBNAIL_PLACEHOLDER, STATIC_HOST } from 'constants/index';

Product.propTypes = {
    product: PropTypes.object,
};

function Product({ product }) {
    const thumbnail = product.thumbnail
        ? `${STATIC_HOST}${product.thumbnail.url}`
        : THUMBNAIL_PLACEHOLDER;
    return (
        <div>
            <Box padding={1}>
                <Box>
                    <img
                        src={thumbnail}
                        width="100%"
                        height="250px"
                        style={{ objectFit: 'cover' }}
                        alt={product.name}
                    />
                </Box>
                <Typography variant="body2">{product.name}</Typography>
                <Typography variant="body2">
                    <Box component="span" fontSize="16px" fontWeight="bold" mr={1}>
                        {product.salePrice.toLocaleString('vi-VN', {
                            style: 'currency',
                            currency: 'VND',
                        })}
                    </Box>
                    {product.promotionPercent > 0 && ` -${product.promotionPercent}%`}
                </Typography>
            </Box>
        </div>
    );
}

export default Product;
