import React, { Component } from 'react';

export default class Card extends Component {
  render() {
    return (
      <div style={{ margin: 10, display: 'flex' }}>
        <img alt="avatar" style={{ width: '70px' }} src={this.props.avatar_url} />
        <div style={{ marginLeft: 10 }}>
          <div style={{ fontWeight: 'bold' }}>{this.props.login}</div>
        </div>
      </div>
    );
  }
}
