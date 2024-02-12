import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <NavLink 
          to="/"
          className="nav-link"
      />
      Home
      <NavLink  
          to="/directors"
          className="nav-link"
      />
      Directors
      <NavLink  
          to="/actors"
          className="nav-link"
      />
      Actors
    </nav>
    );
};

export default NavBar;
