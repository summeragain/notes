import React, { Component } from 'react';
import Note from './Note';
import Button from './AddNoteButton';
import './assets/css/List.css';

class List extends Component {
  getList() {
    return [
      { id: 101, title: 'first note', content: 'Hi! Let me introduce this note.', tags: null },
      { id: 102, title: 'second note', content: 'What do people write in notes?', tags: null },
      { id: 103, title: 'third note', content: 'Some important info', tags: null },
      { id: 104, title: 'last note', content: 'or not so important', tags: null }
    ];
  }
  render() {
    let list = this.getList();
    let listItems = list.map((note) =>
      <Note note={note} key={note.id} />
    );

    return (
      <div className="container">
        <div className="menu-bar">
          <Button />
        </div>
        <div className="list-wrapper">
          {listItems}
        </div>
      </div>
    );
  }
}

export default List;
