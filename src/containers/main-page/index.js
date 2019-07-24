import React, { Component } from 'react';
import CardList from './components/card-list';
import Form from './components/form';
import Counter from './components/counter';
import { connect } from 'react-redux';
import { pickUser } from '../../actions/current-user';

class MainPage extends Component {
  state = {
    users: [],
    count: -1
  };

  addSearchedUsers = searchData => {
    let users = searchData.items;
    let count = searchData.total_count;
    this.setState({ users: [...users], count: count });
  };

  onUserClick = login => {
    return () => {
      let pickedUser = this.state.users.find(user => user.login === login);
      this.props.pickUser(pickedUser);
    };
  };

  render() {
    return (
      <div style={{ margin: 20 }}>
        <p>Current User: {this.props.currentUser}</p>
        <Form onSubmit={this.addSearchedUsers} />
        <Counter count={this.state.count} />
        <CardList cards={this.state.users} onUserClick={this.onUserClick} />
      </div>
    );
  }
}

const mapStateToProps = state => ({ currentUser: JSON.stringify(state.currentUser.currentUser) });

const mapDispatchToProps = {
  pickUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage);
