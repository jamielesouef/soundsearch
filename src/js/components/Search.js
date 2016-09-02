import React, { PureComponent } from 'react';
import actions from '../actions/actions';
import Button from './Button';
import styles from './Search.scss';
import { toClassString } from '../utils/cssUtils';

class Search extends PureComponent {

  search = () => {
    const { value } = this.searchField;
    actions.search(value);
  }

  filter = event => {
    const { value } = event.target;
    actions.filter(value);
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
        <div className="col-xs-12" >
          <input type="text"
                 lassName={toClassString('form-control', styles.searchInput)}
                 onChange={this.filter}
                 placeholder="Filter results..." />
        </div>
      </div>
    );
  }
}

export default Search;
