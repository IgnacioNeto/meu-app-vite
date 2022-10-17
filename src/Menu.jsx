import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <nav>
      <NavLink exact to="/" activeClassName="ativado">
        Home
      </NavLink>
      <NavLink to="/classicrock" activeClassName="ativado">
        Classic Rock
      </NavLink>
      <NavLink to="/heavymetal" activeClassName="ativado">
        Heavy Metal
      </NavLink>
    </nav>
  );
};

export default Menu;
