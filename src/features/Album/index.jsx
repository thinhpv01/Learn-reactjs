import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from './components/AlbumList';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import ListPage from './pages/ListPage';
import DetailPage from './pages/DetailPage';
import NotFound from 'components/NotFound';

AlbumFeature.propTypes = {};

function AlbumFeature(props) {
    const match = useRouteMatch();
    console.log(match);
    return (
        <div>
            <Switch>
                <Route path={match.path} component={ListPage} exact />
                <Route path={`${match.path}/:albumId`} component={DetailPage} exact />
                <Route component={NotFound} />
            </Switch>
        </div>
    );
}

export default AlbumFeature;
