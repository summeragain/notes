import React, { Component } from 'react';
import Modal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';

class AddNoteButton extends Component {
  constructor(props) {
    super(props);

    this.form = {};
  }

  close() {
    this.props.onClose();
  }

  addNote() {
    let data = {
      title: this.form.title.value,
      content: this.form.content.value,
      tags: this.form.tags.value
    };
    this.props.onSubmit(data);
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
                <FormControl componentClass="input" inputRef={title => this.form.title = title} placeholder="Write a title" defaultValue={this.props.noteData.id} />
                <ControlLabel>Content</ControlLabel>
                <FormControl componentClass="textarea" inputRef={content => this.form.content = content} placeholder="textarea" defaultValue={this.props.noteData.content} />
                <ControlLabel>Tags</ControlLabel>
                <FormControl componentClass="input" inputRef={tags => this.form.tags = tags} placeholder="tags" defaultValue={this.props.noteData.tags} />
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
