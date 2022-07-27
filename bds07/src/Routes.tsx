import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from 'pages/Home';
import UserSearch from 'pages/UserSearch';
import Navbar from 'components/Navbar';

const Routes = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/usersearch">
          <UserSearch />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
