import './App.css';
import TodoFeatures from './features/Todo';
import Album from './features/Album';
import {
    NavLink,
    Redirect,
    Route,
    Switch,
    useHistory,
    useLocation,
    useParams,
    useRouteMatch,
} from 'react-router-dom';
import NotFound from './components/NotFound';
import { useEffect } from 'react';
import productApi from './api/productApi';
import CounterFeature from './features/Counter/index.';
import CounterFeature1 from 'features/Counter/index1';
import Header from 'components/Header';
import { Button } from '@material-ui/core';
import ProductsFeature from 'features/Products';

function App() {
    // const history = useHistory();
    // console.log(history);

    // const location = useLocation();
    // console.log(location);

    // const params = useParams();
    // console.log(params);

    // const rou = useRouteMatch();
    // console.log(rou);

    return (
        <div className="App">
            <Header />
            <Switch>
                <Redirect from="/home" to="/" exact />
                <Redirect from="/post-list/:postId" to="/posts/:postId" exact />

                <Route path="/" component={CounterFeature1} exact />
                <Route path="/todos" component={TodoFeatures} />
                <Route path="/album" component={Album} />
                <Route path="/products" component={ProductsFeature} />
                <Route component={NotFound} />
            </Switch>
        </div>
    );
}

export default App;
