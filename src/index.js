import React from "react";
import { render } from "react-dom";
import { List } from "./List";
import { Search } from "./Search";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <div style={styles}>
    <h2>Start editing to see some magic happen {"\u2728"}</h2>
    <Search />
    <List />
  </div>
);

render(<App />, document.getElementById("root"));
