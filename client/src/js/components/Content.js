import React, { Component } from "react";

import Button from "./common/Button";

class Content extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="content">
        <Button />
      </div>
    );
  }
}

export default Content;
