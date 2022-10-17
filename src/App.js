import React from "react";
import logo from "./logo.svg";
import ApartmentList from "./components/ApartmentList";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import "./App.css";

function App() {
  return (
    <div>
      <Navigation />
      <Header />
      <div
        style={{
          textAlign: "center",
          margin: "3rem 0 3rem 0",
        }}
      >
        <h1 style={{ fontSize: "2rem", color: "lightgrey" }}>
          Apartment Availability
        </h1>

      </div>
      <ApartmentList />
    </div>
  );
}

export default App;
