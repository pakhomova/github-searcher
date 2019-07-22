import React, { Component } from 'react';

export default class Counter extends Component {
  render() {
    let counter = this.props.count;
    let style = { display: counter < 0 ? 'none' : '' };
    return (
      <div style={style}>
        <p>Search results: {counter} users found.</p>
      </div>
    );
  }
}
