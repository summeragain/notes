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
    this.note = this.props.noteData || {};
  }

  close() {
    this.props.onClose();
  }

  addNote() {
    let data = {
      id: this.note.id || null,
      title: this.form.title.value,
      content: this.form.content.value,
      tags: this.form.tags.value
    };
    this.props.onSubmit(data);
  }

  render() {
    return (
      <div>
        <Modal.Dialog className="add-note">
          <Modal.Header>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <FormGroup controlId="formControlsTextarea">
              <ControlLabel>Title</ControlLabel>
              <FormControl componentClass="input" inputRef={title => this.form.title = title} placeholder="Write a title" defaultValue={this.note.title} />
              <ControlLabel>Content</ControlLabel>
              <FormControl componentClass="textarea" inputRef={content => this.form.content = content} placeholder="textarea" defaultValue={this.note.content} />
              <ControlLabel>Tags</ControlLabel>
              <FormControl componentClass="input" inputRef={tags => this.form.tags = tags} placeholder="tags" defaultValue={this.note.tags} />
            </FormGroup>
          </Modal.Body>

          <Modal.Footer>
            <Button onClick={() => this.close()}>Close</Button>
            <Button bsStyle="primary" onClick={() => this.addNote()}>{this.note.id ? "Update" : "Add note"}</Button>
          </Modal.Footer>

        </Modal.Dialog>
      </div>
    );
  }
}

export default AddNoteButton;
