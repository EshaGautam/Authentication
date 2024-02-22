import { Switch, Route } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import AuthContext from './components/Store/Auth-Context';
import { useContext } from 'react';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';


function App() {

    const AuthCtx = useContext(AuthContext);
    const { isUserLoggedIn} = AuthCtx;

  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/auth">{!isUserLoggedIn && <AuthPage/>}</Route>

        <Route path="/profile">
          {isUserLoggedIn ? <UserProfile /> : <Redirect to="/auth" />}
        </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
