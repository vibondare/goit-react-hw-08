import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import clsx from "clsx";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { useSelector } from "react-redux";

const buildNavLinkClass = ({ isActive }) => {
  return clsx(css.navLink, isActive && css.navLinkIsActive);
};

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav className={css.nav}>
      <NavLink to="/" className={buildNavLinkClass}>
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts" className={buildNavLinkClass}>
          Contacts
        </NavLink>
      )}
    </nav>
  );
}
