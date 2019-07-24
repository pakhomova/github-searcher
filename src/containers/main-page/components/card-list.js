import React, { Component } from 'react';
import Card from './card';

export default class CardList extends Component {
  render() {
    return (
      <div>
        {this.props.cards.map(card => (
          <Card key={card.id.toString()} onLinkClick={this.props.onUserClick} {...card} />
        ))}
      </div>
    );
  }
}
