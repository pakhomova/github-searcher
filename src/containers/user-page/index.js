import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserPage extends Component {
  render() {
    return (
      <div>
        <p>Current User: {JSON.parse(this.props.currentUser).login}</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({ currentUser: JSON.stringify(state.currentUser.currentUser) });

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPage);
