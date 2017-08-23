import React, { Component } from 'react';

class AddNote extends Component {
  render() {
    return (
      <div className="note-wrapper">
        <div className="note-title">
          <h2>
            <input type="text" placeholder="Write a title" />
          </h2>
        </div>
        <div className="note-content">
          <textarea></textarea>
        </div>
        <div className="note-tags">
          <input />
        </div>
      </div>
    );
  }
}

export default AddNote;
