import React, { Component } from 'react';
import AddNote from './AddNote';

class Button extends Component {
  constructor(props) {
    super(props);

    this.state = { clicked: false };
  }

  onClick = () => {
    this.setState({ clicked: true });
  }

  render() {
    return (
      <div>
        <button className="btn" onClick={this.onClick}>PLUS</button>
        {this.state.clicked ? <AddNote className="editable" /> : null}
      </div>
    );
  }
}

export default Button;
