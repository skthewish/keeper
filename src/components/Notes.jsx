import React, { useState } from "react";
import Note from "./Note";

export default function Notes(props) {
  const [notes, setNotes] = useState(props.newNotes);
  function deleteNote(id) {
    setNotes((prevNotes) => {
      prevNotes.splice(id, 1);
      return prevNotes;
    });
  }
  return notes.map((notesItem, index) => (
    <Note
      key={index}
      id={index}
      title={notesItem.title}
      content={notesItem.content}
      onDelete={deleteNote}
    />
  ));
}
