import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import logo from "../../assets/img/header/Logo.png";
import logo2x from "../../assets/img/header/Logo2x.png";

export default function Navigation() {
  return (
    <header className={css.header}>
      <nav className={css.nav}>
        <picture>
          <source srcSet={`${logo2x} 2x, ${logo} 1x`} />
          <img src={logo} alt="Logo" width="136" height="16" />
        </picture>

        <div className={css.link}>
          <NavLink to="/" className={css.navLink}>
            Home
          </NavLink>
          <NavLink to="/catalog" className={css.navLink}>
            Catalog
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
