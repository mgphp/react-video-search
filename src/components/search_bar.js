/**
 * Created by markgr on 09/07/2017.
 */
import React, {Component} from 'react';

class SearchBar extends Component {

  constructor (props) {
    super(props);
    this.state = {term:''}
  }

  render() {
    return (
      <div>
        <input onChange={event => this.setState({term: event.target.value})} /><br />
        <lable>The value is: <span>{this.state.term}</span></lable>
      </div>
      );
  }

  onInputChange(e) {

  }
}

export default SearchBar;