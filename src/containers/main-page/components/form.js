import React, { Component } from 'react';
import axios from 'axios';

export default class Form extends Component {
  state = {
    username: ''
  };

  onInputChange = ev => this.setState({ username: ev.target.value });

  handleSubmit = event => {
    event.preventDefault();

    axios.get(`https://api.github.com/users/${this.state.username}`).then(resp => {
      this.props.onSubmit(resp.data);
      this.setState({ username: '' });
    });
  };

  render() {
    return (
      <form className="ui form" onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.username}
          onChange={this.onInputChange}
          placeholder="GitHub username"
          required
        />
        <button className="ui button" type="submit">
          Add card
        </button>
      </form>
    );
  }
}
