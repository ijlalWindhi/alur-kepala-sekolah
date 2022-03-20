// inisiasi library default
import React from "react";

// inisiasi component
import LayoutSidebar from "../../../components/Layout/LayoutSidebar";

export default class ForumDiskusi extends React.Component {
  constructor() {
    super();
    this.state = {
      // call variable
    };
  }
  render() {
    return (
      <>
        <LayoutSidebar>
          <h1>ini ForumDiskusi</h1>
        </LayoutSidebar>
      </>
    );
  }
}
