import React from "react";
import HomeView from "./HomeView";
import CategorySelectionView from "./CategorySelectionView";
import NewEntryView from "./NewEntryView";
import { BrowserRouter, Route, Link } from "react-router-dom";

export default class App extends React.Component {
  state = {
    categories: ["food", "thoughts", "other"],
    entries: []
  };

  onEntrySubmit = entry => {
    this.setState({ entries: [...this.state.entries, entry] });
  };

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Link to="/">Home</Link>
            <Link to="/category">Category</Link>
            <Link to="/entry">Entry</Link>
            <Route
              exact
              path="/"
              render={props => <HomeView entries={this.state.entries} />}
            />
            <Route
              exact
              path="/category"
              render={props => (
                <CategorySelectionView
                  {...props}
                  categories={this.state.categories}
                />
              )}
            />
            <Route
              exact
              path="/entry/:cat_id"
              render={props => (
                <NewEntryView
                  {...props}
                  categories={this.state.categories}
                  onEntrySubmit={this.onEntrySubmit}
                />
              )}
            />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
