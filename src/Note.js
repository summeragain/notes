import React, { Component } from 'react';

class Note extends Component {
  onClick() {
    this.props.onClick();
  }
  render() {
    return (
      <div data-id={this.props.note.id} className="note-wrapper col-md-4 col-sm-6">
        <div className="white-panel" onClick={() => this.props.onClick()}>
          <div className="note-title">
            <h4>{this.props.note.title}</h4>
          </div>
          <div className="note-content">
            {this.props.note.content}
          </div>
          <div className="note-tags">
            {this.props.note.tags}
          </div>
        </div>
      </div>
    );
  }
}

export default Note;
