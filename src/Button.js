import React, { Component } from 'react';
import AddNote from './AddNote';
import Modal from 'react-bootstrap/lib';

class Button extends Component {
  //TODO: show a modal with form to fill
  onClick() {
    return <Modal />;
  }
  render() {
    return (
      <button className="btn" onClick={this.props.onClick}>PLUS</button>
    );
  }
}

export default Button;
