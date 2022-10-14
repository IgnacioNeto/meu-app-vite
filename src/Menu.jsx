import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/classicrock">Classic Rock</NavLink>
      <NavLink to="/heavymetal">Heavy Metal</NavLink>
    </nav>
  );
};

export default Menu;
