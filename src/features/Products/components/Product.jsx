import React from 'react';
import PropTypes from 'prop-types';
import { Skeleton } from '@material-ui/lab';
import { Box, Typography } from '@material-ui/core';
import { THUMBNAIL_PLACEHOLDER, STATIC_HOST } from 'constants/index';
import { useHistory } from 'react-router';
import { formatPrice } from 'utils';

Product.propTypes = {
    product: PropTypes.object,
};

function Product({ product }) {
    const history = useHistory();
    const thumbnail = product.thumbnail
        ? `${STATIC_HOST}${product.thumbnail.url}`
        : THUMBNAIL_PLACEHOLDER;

    const handleClick = () => {
        history.push(`/products/${product.id}`);
    };
    return (
        <div>
            <Box padding={1} onClick={handleClick}>
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
                        {formatPrice(product.salePrice)}
                    </Box>
                    {product.promotionPercent > 0 && ` -${product.promotionPercent}%`}
                </Typography>
            </Box>
        </div>
    );
}

export default Product;
