import React, { Component } from 'react';
import Note from './Note';
import AddNoteModal from './AddNoteModal';
import './assets/css/List.css';
import Button from 'react-bootstrap/lib/Button';

class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAddingNewNote: false,
      list: this.getList()
    };
  }

  getList() {
    return [
      { id: 101, title: 'first note', content: 'Hi! Let me introduce this note.', tags: null },
      { id: 102, title: 'second note', content: 'What do people write in notes?', tags: null },
      { id: 103, title: 'third note', content: 'Some important info', tags: null },
      { id: 110, title: 'last note', content: 'or not so important', tags: null }
    ];
  }

  openNoteModal = () => {
    this.setState({ isAddingNewNote: true });
  }

  onCloseNoteModal = () => {
    this.setState({ isAddingNewNote: false });
  }

  addNewNote = (data) => {
    let newNoteData = { id: 104, title: 'no number note', content: 'new note', tags: null };
    this.state.list.unshift(newNoteData);
  }

  render() {
    let listItems = this.state.list.map((note) =>
      <Note note={note} key={note.id} />
    );

    return (
      <div className="container">
        <div className="menu-bar">
          <Button onClick={this.openNoteModal}>+</Button>
          <AddNoteModal onClose={this.onCloseNoteModal} visible={this.state.isAddingNewNote} onSubmit={this.addNewNote} />
        </div>
        <div className="list-wrapper">
          {listItems}
        </div>
      </div>
    );
  }
}

export default List;
