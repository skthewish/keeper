import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";

export default function Header() {
  return (
    <header>
      <h1> Keeper</h1>

      <Link
        to="/inputnote"
        className="addNoteContainer"
        style={{ textDecoration: "none" }}
      >
        <div>
          <Button
            variant="contained"
            color="#fff"
            style={{
              backgroundColor: "#fff",
              fontFamily: "'McLaren', cursive",
              textTransform: "none",
            }}
            className="addNote"
          >
            <AddIcon /> New Note
          </Button>
        </div>
      </Link>
    </header>
  );
}
