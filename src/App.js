import Header from 'components/Header';
import CartFeature from 'features/Cart';
import CounterFeature1 from 'features/Counter/index1';
import ProductsFeature from 'features/Products';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import NotFound from './components/NotFound';
import Album from './features/Album';
import TodoFeatures from './features/Todo';

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
                <Route path="/cart" component={CartFeature} />
                <Route component={NotFound} />
            </Switch>
        </div>
    );
}

export default App;
