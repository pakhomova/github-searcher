import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../../../constants/routes.json';

export default class Card extends Component {
  render() {
    return (
      <div style={{ margin: 10, display: 'flex' }}>
        <img alt="avatar" style={{ width: '70px' }} src={this.props.avatar_url} />
        <div style={{ marginLeft: 10 }}>
          <Link to={routes.USER}>{this.props.login}</Link>
        </div>
      </div>
    );
  }
}
