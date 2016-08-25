import React, { PureComponent } from 'react';
import { search, filter } from '../actions/actions';


class Search extends PureComponent {

  static propTypes = {};
  static defaultProps = {};

  search = () => {
    const { value } = this.searchField;
    search(value);
  }

  filter = event => {
    const { value } = event.target;
    filter(value);
  }

  render() {
    return (
      <div>
        <input type="text" ref={ref => {
          this.searchField = ref;
        }} placeholder="Search Soundcloud User..." />
        <button onClick={this.search} >Search</button>

        <input type="text" onChange={this.filter} />
      </div>
    );
  }
}

export default Search;
