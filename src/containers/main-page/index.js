import React, { Component } from 'react';
import CardList from './components/card-list';
import Form from './components/form';
import Counter from './components/counter';

export default class MainPage extends Component {
  state = {
    users: [],
    count: -1
  };

  addSearchedUsers = searchData => {
    let users = searchData.items;
    let count = searchData.total_count;
    this.setState({ users: [...users], count: count });
  };

  render() {
    return (
      <div style={{ margin: 20 }}>
        <Form onSubmit={this.addSearchedUsers} />
        <Counter count={this.state.count} />
        <CardList cards={this.state.users} />
      </div>
    );
  }
}
