import React from "react";
import Button from "react-bootstrap/Button";

export default class Header extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="container-fluid d-flex justify-content-center">
        <div
          className="d-flex justify-content-end"
          style={{
            backgroundColor: "rgba(255,203,164,0.3)",
            width: "90%",
            position: "realtive",
            padding: "2rem",
            height: "50vh",
            marginTop: "3rem",
          }}
        >
          <div
            style={{
            
              position: "absolute",
              top: "12rem",
              left: "9rem",
              width: "25%",
              height: "20rem",
            }}
          >
            <div className="d-flex flex-column justify-content-center align-items-center my-5 ">
              <h1 style={{ fontSize: "2rem", color: "darkgrey" }}>
                We find your place
              </h1>
              <p className="my-3 px-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
              <Button style={{color: "#fff", padding: "0.7rem",borderRadius: 0, border: "none", backgroundColor: "rgba(255,176,124,1.00)"}} variant="outline-secondary">Get There</Button>
            </div>
          </div>
          <img
            src="/images/apartments3.jpg"
            style={{
              width: "50%",
              height: "22rem",
              position: "absolute",
              top: "11rem",
              right: "1rem",
              borderRadius: "5px",
              boxShadow: "10px 10px 5px 0px rgba(0,0,0,0.75)"
            }}
          />
        </div>
      </div>
    );
  }
}
