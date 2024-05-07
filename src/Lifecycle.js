// write all component lifecycle methods in this file

import e from 'cors';
import React, { Component } from 'react';

class Lifecycle extends Component {
  constructor(props) {
    super(props);
    console.log('Lifecycle constructor');
  }

  static getDerivedStateFromProps(props, state) {
    console.log('Lifecycle getDerivedStateFromProps');
    return null;
  }

  componentDidMount() {
    console.log('Lifecycle componentDidMount');
  }

  shouldComponentUpdate() {
    console.log('Lifecycle shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate() {
    console.log('Lifecycle getSnapshotBeforeUpdate');
    return null;
  }

  componentDidUpdate() {
    console.log('Lifecycle componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('Lifecycle componentWillUnmount');
  }

  render() {
    console.log('Lifecycle render');
    return (
      <div>
        <h1>Lifecycle Component</h1>
      </div>
    );
  }
}

export default Lifecycle;