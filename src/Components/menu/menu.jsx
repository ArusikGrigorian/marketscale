import React from "react";
import List from "./list";

const Menu = ({ menu_titles, menu_list }) => {
  return (
    <div className="sidebar-menu">
      {menu_titles.map((title) => {
        return (
          <List key={title.id} current_list={menu_list[title.title]} list_title={title.title} />
        );
      })}
    </div>
  );
};

export default Menu;
