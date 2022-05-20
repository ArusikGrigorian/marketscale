import React from "react";
import Logo from "./logo";
import Menu from "./menu";

const Sidebar = ({ menu }) => {
  const { logo, menu_titles, menu_list } = menu;

  return (
    <div className="sidebar">
      <Logo logo={logo} />
      <Menu menu_titles={menu_titles} menu_list={menu_list} />
    </div>
  );
};

export default Sidebar;
