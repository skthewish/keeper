import React from "react";
import { Link } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

export default function Note(props) {
  function clickhandle() {
    props.onDelete(props.id);
  }
  return (
    <div className="note">
      <h3>{props.title}</h3>
      <p>{props.content}</p>
      <Link to="/notes">
        <IconButton
          style={{ color: "#f5ba13", float: "right" }}
          size="small"
          onClick={clickhandle}
        >
          <DeleteIcon />
        </IconButton>
      </Link>
    </div>
  );
}
