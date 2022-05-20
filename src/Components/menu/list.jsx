import React, { useState } from "react";
import Select from "react-select";
import {
  FaShareAlt,
  FaUnlock,
  FaPoll,
  FaPollH,
  FaCcMastercard,
  FaCalendarCheck,
  FaTools,
} from "react-icons/fa";

const List = ({ current_list, list_title }) => {
  const icons = [FaShareAlt, FaUnlock, FaPoll, FaPollH, FaCcMastercard, FaCalendarCheck, FaTools];
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <ul className="sidebar-menu-list">
      <div className="sidebar-menu-list-title">{list_title}</div>
      {current_list.map((list_item) => {
        const Icon = icons[list_item.iid];
        const Tagname = list_item.options ? Select : "li";

        return (
          <Tagname
            key={list_item.id}
            className={
              list_item.title === "Calendar"
                ? "sidebar-menu-list-item item-calendar"
                : "sidebar-menu-list-item"
            }
            placeholder={Tagname === Select ? list_item.title : null}
            defaultValue={Tagname === Select ? selectedOption : null}
            onChange={Tagname === Select ? setSelectedOption : null}
            options={Tagname === Select ? list_item.options : null}
          >
            <i className="sidebar-menu-list-item-icon">
              <Icon />
            </i>
            {list_item.title}
            {list_item.credits && (
              <div className="sidebar-menu-list-item-credits">{list_item.credits}</div>
            )}
          </Tagname>
        );
      })}
    </ul>
  );
};

export default List;
