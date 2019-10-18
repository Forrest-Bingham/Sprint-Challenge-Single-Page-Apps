import React, { useState } from "react";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import WelcomePage from "./components/WelcomePage";
import SearchForm from "./components/SearchForm";

import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <main>
      <div>
        <Header />
      </div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/character-list">Character List</Link>
      </nav>

      <Route exact path="/" component={WelcomePage} />
      <Route
        exact
        path="/character-list"
        render={props => <CharacterList {...props} />}
      />
    </main>
  );
}
