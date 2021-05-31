import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import AddIcon from "@material-ui/icons/Add";

export default function InputNote(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function addNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  return (
    <div className="inputNote">
      <form>
        <input
          type="text"
          name="title"
          onChange={handleChange}
          placeholder="Title"
          value={note.title}
        />
        <textarea
          rows={5}
          name="content"
          onChange={handleChange}
          placeholder="Write your note...."
          value={note.content}
        />

        <button className="addBtn" onClick={addNote}>
          <NavLink exact to="/notes">
            <AddIcon className="addicon" fontSize="small" />
          </NavLink>
        </button>
      </form>
    </div>
  );
}
