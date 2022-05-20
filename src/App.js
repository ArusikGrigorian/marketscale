import "./App.scss";
import { LOGO, MENU_LIST_TITLES, MENU_LIST, URL } from "./Components/constants/constants";
import Sidebar from "./Components/menu/sidebar";
import Content from "./Components/main/content";
import WithFetchedData from "./Components/utils/fetch";
import React from "react";

const ContentWithData = WithFetchedData(Content, URL);

function App() {
  return (
    <div className="app">
      <Sidebar menu={{ logo: LOGO, menu_titles: MENU_LIST_TITLES, menu_list: MENU_LIST }} />
      <ContentWithData />
    </div>
  );
}

export default App;
