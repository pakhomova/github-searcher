import React, { Component } from 'react';
import CardList from './components/card-list';
import Form from './components/form';

export default class MainPage extends Component {
  state = {
    cards: []
  };

  addNewCard = cardInfo => {
    this.setState({ cards: [...this.state.cards, cardInfo] });
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.addNewCard} />
        <CardList cards={this.state.cards} />
      </div>
    );
  }
}
