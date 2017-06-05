import ReactDOM from 'react-dom'
import React, { Component, PropTypes } from 'react';

import ImgsIndex from './images_index';


export default class App extends Component {
  render() {
    return (
      <div>
        <div> container</div>
        <a className="waves-effect waves-light btn">button</a>
        <ImgsIndex/>
      </div>
    );
  }
}
