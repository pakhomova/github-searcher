import React, { Component } from 'react';
import Card from './card';

export default class CardList extends Component {
  render() {
    return (
      <div>
        {this.props.cards.map(card => (
          <Card {...card} />
        ))}
      </div>
    );
  }
}
