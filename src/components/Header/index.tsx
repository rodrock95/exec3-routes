import { Link } from "react-router-dom";
import "./styles.css";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="container">
        <nav className="nav-main">
        <Link to={"/"}>
          <h1 className="site-name">MeuSite</h1>
        </Link>
        <ul className="menu-items">
          <NavLink to={"/home"} className={({isActive}) => isActive ? "menu-active" : "menu-items"}>
              <li>Início</li>
          </NavLink>
          <NavLink to={"/promotion"} className={({isActive}) => isActive ? "menu-active" : "menu-items"}>
            <li>Promoção</li>
          </NavLink>
          <NavLink to={"/sub"} className={({isActive}) => isActive ? "menu-active" : "menu-items"}>
            <li>Participar</li>
          </NavLink>
        </ul> 
        </nav>
      </div>
    </header>
  );
}
