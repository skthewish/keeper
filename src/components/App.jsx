import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Notes from "./Notes";
import InputNote from "./InputNote";
import Home from "./Home";

export default function App() {
  const [notes, setNotes] = useState([]);

  function addNote(note) {
    setNotes((prevNotes) => {
      return [...prevNotes, note];
    });
  }

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route
          exact
          path="/inputnote"
          component={() => <InputNote onAdd={addNote} />}
        />
        <Route path="/notes" component={() => <Notes newNotes={notes} />} />
      </Switch>

      <Footer />
    </div>
  );
}
