import React, { PureComponent } from 'react';
import { search, filter } from '../actions/actions';
import Button from './Button';
import styles from './Search.scss';
import { toClassString } from '../utils/cssUtils';

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
      <div className="row" >
        <div className="col-xs-12" >
          <input className={toClassString('form-control', styles.searchInput)}
                 type="text"
                 ref={ref => {
                   this.searchField = ref;
                 }}
                 placeholder="Search Soundcloud User..." />
        </div>
        <div className="col-xs-12" >
          <Button onClick={this.search} >Search</Button>
        </div>

        <input type="text" onChange={this.filter} />
      </div>
    );
  }
}

export default Search;
