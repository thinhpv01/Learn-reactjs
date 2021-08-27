import './App.css';
import TodoFeatures from './features/Todo';
import Album from './features/Album';
import { NavLink, Redirect, Route, Switch, useHistory, useLocation, useParams, useRouteMatch } from 'react-router-dom';
import NotFound from './components/NotFound';

function App() {
  const Thinh = {
    name: 'Pham Van Thinh',
    age: '20',
    male: true,
  };
  const history = useHistory();
  console.log(history);

  const location = useLocation();
  console.log(location);

  const params = useParams();
  console.log(params);

  const rou = useRouteMatch();
  console.log(rou);

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

        <Route path="/" component={TodoFeatures} exact />
        <Route path="/todos" component={TodoFeatures} />
        <Route path="/album" component={Album} />
        <Route component={NotFound} />
      </Switch>
      <p className="footer">Footer</p>
    </div>
  );
}

export default App;
