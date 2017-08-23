import React, { Component } from 'react';

class Note extends Component {
  render() {
    return (
      <div data-id={this.props.note.id} className="note-wrapper col-md-4">
        <div className="note-title">
          <h2>{this.props.note.title}</h2>
        </div>
        <div className="note-content">
          {this.props.note.content}
        </div>
        <div className="note-tags">
          {this.props.note.tags}
        </div>
      </div>
    );
  }
}

export default Note;
