import React, { Component } from "react";
class SearchBar extends Component {
  state = { term: "" };
  setTerm = (e) => {
    console.log(e.target.value);
    this.setState({ term: e.target.value });
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onFormSubmit(this.state.term);
  };
  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={(e) => this.onFormSubmit(e)} className="ui form">
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
