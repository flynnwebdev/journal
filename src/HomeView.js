import React from "react";

export default class HomeView extends React.Component {
  render() {
    return (
      <>
        <h1>Home View</h1>
        <ul>
          {this.props.entries.map((item, index) => {
            return <li>{item} </li>;
          })}
        </ul>
      </>
    );
  }
}
