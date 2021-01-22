import React from "react";
import "./App.css";
import ToDo from "./components/ToDo";
import Header from "./components/Header";

function App() {
  return (
    <div className="app">
      <Header />
      <ToDo />
    </div>
  );
}

export default App;
