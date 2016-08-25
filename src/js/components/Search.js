import React, { Component } from 'react';
import { search } from '../actions/actions';


class Search extends Component {

  static propTypes = {};
  static defaultProps = {};

  search = () => {

    const { value } = this.searchField;
    search(value);
  }

  render() {
    return (
      <div>
        <input type="text" ref={ref => {
          this.searchField = ref;
        }} placeholder="Search Soundcloud User..." />
        <button onClick={this.search} >Search</button>
      </div>
    );
  }
}

export default Search;
