import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NoMatch from './404/NoMatch';
import Admin from './admin/Admin';
import Login from './login/Login';
import User from './User/User';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={User} />
          <Route path="/login" exact component={Login} />
          {/* Admin */}
          <Route path="/admin" exact component={Admin} />
          {/* 404 */}
          <Route path="/*" component={NoMatch} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
