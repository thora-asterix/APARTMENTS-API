import React from "react";
import axios from "axios";
import ApartmentCard from "./ApartmentCard";

export default class ApartmentList extends React.Component {
  state = {
    apartments: [],
  };

  componentDidMount() {
    axios.get("http://localhost:8080/availableApartments").then((res) => {
      const apartments = res.data;
      this.setState({ apartments });
    });
  }

  render() {
    return (
      <div className="container d-flex justify-content-center align-items-center">
        <div className="row justify-content-around">
        {this.state.apartments.map((aprt) => (
          <div key={aprt.apartmentId} className="my-4 col-6 d-flex mx-auto " >
            <ApartmentCard aprt={aprt} />
          </div>
        ))}
        </div>
      </div>
    );
  }
}
