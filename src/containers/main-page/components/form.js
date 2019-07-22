import React, { Component } from 'react';
import axios from 'axios';

export default class Form extends Component {
  state = {
    username: ''
  };

  onInputChange = ev => this.setState({ username: ev.target.value });

  handleSubmit = event => {
    event.preventDefault();

    axios.get(`https://api.github.com/search/users?q=${this.state.username}+in:login`).then(resp => {
      this.props.onSubmit(resp.data);
      console.log(resp.data);
      this.setState({ username: '' });
    });
  };

  render() {
    return (
      <form className="ui form">
        <input
          type="text"
          value={this.state.username}
          onChange={this.onInputChange}
          placeholder="Enter GitHub username"
          required
        />
        <button className="ui button" onClick={this.handleSubmit} style={{ marginTop: 5, marginBottom: 5 }}>
          Find Users
        </button>
      </form>
    );
  }
}
