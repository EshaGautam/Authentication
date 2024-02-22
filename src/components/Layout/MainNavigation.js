import { Link } from 'react-router-dom';
import AuthContext from '../Store/Auth-Context';
import { useContext } from 'react';
import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  const AuthCtx = useContext(AuthContext);
  const { isUserLoggedIn } = AuthCtx;
  return (
    <header className={classes.header}>
      <Link to="/">
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          {!isUserLoggedIn && (
            <li>
              <Link to="/auth">Login</Link>
            </li>
          )}
          {isUserLoggedIn&&<li>
            <Link to="/profile">Profile</Link>
          </li>}
          {isUserLoggedIn&&<li>
            <button>Logout</button>
          </li>}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
