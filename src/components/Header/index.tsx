import { NavLink } from "react-router-dom";
import { Timer, Scroll } from "phosphor-react";

import { HeaderContainer } from "./styles";

import logoIgnite from "../../assets/logo-ignite.svg";

function Header() {
  return (
    <HeaderContainer>
      <img src={logoIgnite} alt="Logo" />
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}

export { Header };
