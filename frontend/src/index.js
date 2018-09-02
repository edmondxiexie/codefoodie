import React from "react";
import ReactDOM from "react-dom";
import "./style/index.scss";

import Content from "./js/components/Content";

const App = () => {
  return (
    <div>
      Hello React!
      <Content />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
