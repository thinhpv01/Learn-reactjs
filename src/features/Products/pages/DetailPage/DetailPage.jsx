import React from 'react';
import PropTypes from 'prop-types';
import { Box, Container, makeStyles, Grid, Paper, LinearProgress } from '@material-ui/core';
import ProductThumbnail from 'features/Products/components/ProductThumbnail';
import { Route, Switch, useRouteMatch } from 'react-router';
import useProductDetail from 'features/Products/hooks/hooksProductDetail';
import ProductInfo from 'features/Products/components/ProductInfo';
import AddToCartForm from 'features/Products/components/AddToCartForm';
import ProductMenu from 'features/Products/components/ProductMenu';
import ProductDescription from 'features/Products/components/ProductDescription';
import ProductAdditional from 'features/Products/components/ProductAdditional';
import ProductReviews from 'features/Products/components/ProductReview';
import { useDispatch } from 'react-redux';
import { addToCart } from 'features/Cart/CartSlice';

DetailPage.propTypes = {};

const useStyles = makeStyles((theme) => ({
    root: {},
    left: {
        width: '400px',
        padding: '.75rem',
        borderRight: '1px solid #ccc',
    },
    right: {
        flex: '1 1 0',
        padding: '.75rem',
    },
    loading: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
    },
}));

function DetailPage(props) {
    const classes = useStyles();
    const {
        params: { productId },
        url,
    } = useRouteMatch();
    const { product, loading } = useProductDetail(productId);
    const dispatch = useDispatch();
    if (loading) {
        return (
            <Box className={classes.loading}>
                <LinearProgress />
            </Box>
        );
    }
    const handleAddToCart = ({ quantity }) => {
        const action = addToCart({
            id: product.id,
            product,
            quantity,
        });
        dispatch(action);
    };
    return (
        <Box>
            <Container>
                <Paper elevation={0}>
                    <Grid container>
                        <Grid item className={classes.left}>
                            <ProductThumbnail product={product} />
                        </Grid>
                        <Grid item className={classes.right}>
                            <ProductInfo product={product} />
                            <AddToCartForm onSubmit={handleAddToCart} />
                        </Grid>
                    </Grid>
                </Paper>
                <ProductMenu />
                <Switch>
                    <Route path={url} exact>
                        <ProductDescription product={product} />
                    </Route>
                    <Route path={`${url}/additional`} exact>
                        <ProductAdditional product={product} />
                    </Route>
                    <Route path={`${url}/reviews`} exact>
                        <ProductReviews product={product} />
                    </Route>
                </Switch>
            </Container>
        </Box>
    );
}

export default DetailPage;
