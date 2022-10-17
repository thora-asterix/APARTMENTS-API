import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";


export default class ApartmentCard extends React.Component {

  constructor(){
    super();
    this.value = `/images/img1.jpg`;
  }

  render() {
    return (
      <div>
        <Card style={{ width: "70%", marginLeft: "4rem"}}>
          <Card.Img style={{width: "100%"}} variant="top" src={`/images/img${Math.floor(1 + Math.random() * 10)}.jpg`} />
          <Card.Body>
            <Card.Title>Apartment {this.props.aprt.apartmentUnitNumber}</Card.Title>
            <Card.Text>
              This apartment is on floor # {this.props.aprt.floorNumber}. It has {this.props.aprt.bedroomNumber} bedroom/s and {this.props.aprt.bathroomNumber} bathroom/s. 
            </Card.Text>
            <Button variant="light">Learn More</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
