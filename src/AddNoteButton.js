import React, { Component } from 'react';
import AddNote from './AddNote';
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';

class AddNoteButton extends Component {
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
        <Button onClick={this.onClick}>PLUS</Button>
        {this.state.clicked ?
          <Modal.Dialog>
            <Modal.Header>
              <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <AddNote />
            </Modal.Body>

            <Modal.Footer>
              <Button>Close</Button>
              <Button bsStyle="primary">Save changes</Button>
            </Modal.Footer>

          </Modal.Dialog>
          : null}
      </div>
    );
  }
}

export default AddNoteButton;
