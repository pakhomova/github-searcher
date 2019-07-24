import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../../../constants/routes.json';

const cardStyle = { margin: 10, display: 'flex' };

export default class Card extends Component {
  render() {
    return (
      <div style={cardStyle}>
        <img alt="avatar" style={{ width: '70px' }} src={this.props.avatar_url} />
        <div style={{ marginLeft: 10 }}>
          <Link to={routes.USER} onClick={this.props.onLinkClick(this.props.login)}>
            {this.props.login}
          </Link>
        </div>
      </div>
    );
  }
}
