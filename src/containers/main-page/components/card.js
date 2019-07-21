import React, { Component } from 'react';

export default class Card extends Component {
  render() {
    return (
      <div style={{ margin: '1em' }}>
        <img alt="avatar" style={{ width: '70px' }} src={this.props.avatar_url} />
        <div>
          <div style={{ fontWeight: 'bold' }}>{this.props.name}</div>
          <div>{this.props.blog}</div>
        </div>
      </div>
    );
  }
}
