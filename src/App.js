import './App.css';
import TodoFeatures from './features/Todo';
import Album from './features/Album';
import { NavLink, Redirect, Route, Switch, useHistory, useLocation, useParams, useRouteMatch } from 'react-router-dom';
import NotFound from './components/NotFound';
import { useEffect } from 'react';
import productApi from './api/productApi';
import CounterFeature from './features/Counter/index.';
import CounterFeature1 from 'features/Counter/index1';

function App() {
    useEffect(() => {
        const fetchProducts = async () => {
            const productList = await productApi.getAll({ _limit: 10 });
        };

        fetchProducts();
    }, []);
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
            <p className="header">Header</p>
            <p className="nav__link">
                <NavLink to="/" exact>
                    Home
                </NavLink>
            </p>
            <p className="nav__link">
                <NavLink to="/todos">Todos</NavLink>
            </p>
            <p className="nav__link">
                <NavLink to="/album">Album</NavLink>
            </p>

            <Switch>
                <Redirect from="/home" to="/" exact />
                <Redirect from="/post-list/:postId" to="/posts/:postId" exact />

                <Route path="/" component={CounterFeature1} exact />
                <Route path="/todos" component={TodoFeatures} />
                <Route path="/album" component={Album} />
                <Route component={NotFound} />
            </Switch>
            <p className="footer">Footer</p>
        </div>
    );
}

export default App;
