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
      noteData: null,
      list: this.getList()
    };
  }

  getList() {
    return [
      { id: 101, title: 'first note', content: 'Hi! Let me introduce this note.', tags: null },
      { id: 110, title: 'last note', content: 'or not so important', tags: null },
      { id: 102, title: 'second note', content: 'What do people write in notes?', tags: null },
      { id: 103, title: 'third note', content: 'Some important info', tags: null }
    ];
  }

  showNoteModal = (id) => {
    console.log(id);
    if (id) {
      this.setState({ noteData: this.state.list.find(o => o.id === id) });
    }
    this.setState({ isAddingNewNote: true });
  }

  hideNoteModal = () => {
    this.setState({ isAddingNewNote: false });
  }

  addOrEditNote(data) {
    if (!data.id) {
      data.id = this.getLastNoteId() + 1;
    }

    this.setState({ isAddingNewNote: false });

    let index = this.state.list.findIndex(o => o.id === data.id);
    if (index === -1) {
      this.state.list.unshift(data);
    } else {
      this.state.list.splice(index, 1, data);
    }
  }

  getLastNoteId() {
    return Math.max.apply(Math, this.state.list.map(o => o.id));
  }

  render() {
    let listItems = this.state.list.map((note) =>
      <Note note={note} key={note.id} onClick={() => this.showNoteModal(note.id)} />
    );

    return (
      <div className="container">
        <div className="menu-bar">
          <Button onClick={this.showNoteModal}>+</Button>
          {
            this.state.isAddingNewNote ?
              <AddNoteModal onClose={this.hideNoteModal} noteData={this.state.noteData}
                onSubmit={(data) => this.addOrEditNote(data)} /> :
              null
          }
        </div>
        <div className="list-wrapper">
          {listItems}
        </div>
      </div>
    );
  }
}

export default List;
