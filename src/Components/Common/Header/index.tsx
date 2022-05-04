import React from "react";
import { NavLink, useLocation } from "react-router-dom";

import { ButtonSvg } from "../ButtonSvg";
import { ReactComponent as MenuSvg } from "../../../assets/svg/menu.svg";
import { ReactComponent as Chevron } from "../../../assets/svg/chevron.svg";

import s from "./Header.module.scss";
import classNames from "classnames";

const Header: React.FC = () => {
  const [menuVisible, setMenuVisible] = React.useState(false);
  const { pathname } = useLocation();

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <header className={s.header}>
      <ButtonSvg handleClick={toggleMenu}>
        <MenuSvg />
      </ButtonSvg>
      {/* <button className={s.btn} onClick={toggleMenu}>
        <MenuSvg />
      </button> */}
      <div
        className={classNames(s.menu, {
          [s.active]: menuVisible,
        })}
      >
        <div className={s.menu_top}>
          {/* <button className={s.btn} onClick={toogleMenu}> */}
          <ButtonSvg handleClick={toggleMenu}>
            <Chevron />
          </ButtonSvg>
          {/* </button> */}
        </div>
        <nav className={s.nav}>
          <NavLink
            to="/"
            className={classNames(s.nav_link, "/" === pathname && s.nav_active)}
          >
            Главная
          </NavLink>
          <NavLink
            to="/categories"
            className={classNames(
              s.nav_link,
              "/categories" === pathname && s.nav_active
            )}
          >
            Категории
          </NavLink>
          <NavLink
            to="/language"
            className={classNames(
              s.nav_link,
              "/language" === pathname && s.nav_active
            )}
          >
            Языки
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
