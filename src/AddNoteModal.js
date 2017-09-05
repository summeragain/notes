import React, { Component } from 'react';
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';

class AddNoteButton extends Component {
  constructor(props) {
    super(props);
  }

  close() {
    this.props.onClose();
  }

  addNote() {
    //todo: get data
    //add new note to list

    //this.props.onSubmit(/* data */);
  }

  render() {
    return (
      <div>
        {this.props.visible ?
          <Modal.Dialog className="add-note">
            <Modal.Header>
              <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <FormGroup controlId="formControlsTextarea">
                <ControlLabel>Title</ControlLabel>
                <FormControl componentClass="input" inputRef={this.props.title} placeholder="Write a title" />
                <ControlLabel>Content</ControlLabel>
                <FormControl componentClass="textarea" inputRef={this.props.content} placeholder="textarea" />
                <ControlLabel>Tags</ControlLabel>
                <FormControl componentClass="input" inputRef={this.props.tags} placeholder="tags" />
              </FormGroup>
            </Modal.Body>

            <Modal.Footer>
              <Button onClick={() => this.close()}>Close</Button>
              <Button bsStyle="primary" onClick={() => this.addNote()}>Add note</Button>
            </Modal.Footer>

          </Modal.Dialog>
          : null}
      </div>
    );
  }
}

export default AddNoteButton;
