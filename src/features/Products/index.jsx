import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import ListPage from './pages/ListPage/ListPage';
import DetailPage from './pages/DetailPage/DetailPage';
import { Box } from '@material-ui/core';

ProductsFeature.propTypes = {};

function ProductsFeature(props) {
    const match = useRouteMatch();
    return (
        <Box pt={4}>
            <Switch>
                <Route path={match.url} component={ListPage} exact />
                <Route path={`${match.url}/:productId`} component={DetailPage} />
            </Switch>
        </Box>
    );
}

export default ProductsFeature;
