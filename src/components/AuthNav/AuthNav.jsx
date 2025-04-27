import { NavLink } from 'react-router';
import css from './AuthNav.module.css';



export default function AuthNav() {
  return (
    <div className={css.div}>
      <NavLink to="/register" className={css.linkClass}>
        Register
      </NavLink>
      <NavLink to="/login" className={css.linkClass}>
        Login
      </NavLink>
    </div>
  );
};

