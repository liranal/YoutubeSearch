import React, { Component } from "react";
class SearchBar extends Component {
  state = { term: "" };
  setTerm = (e) => {
    console.log(e.target.value);
    this.setState({ term: e.target.value });
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setTerm(e)}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
