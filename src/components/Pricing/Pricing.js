import React from "react";
import { Card, CardGroup } from "react-bootstrap";

const Pricing = () => {
  return (
    <div className="container">
      <h1 className="text-center text-primary mt-5">Our Dental Pricing</h1>
      <p className="text-center mb-5">select any of these</p>
      <CardGroup>
        <Card>
          <Card.Body>
            <div className="text-center">
              <h2>Basic Dentistry</h2>
              <h1>$99.99</h1>
              <p>Dental fillings</p> <hr />
              <Card.Title>Dentures</Card.Title>
              <hr />
              <Card.Title>Oral surgery</Card.Title>
              <hr />
              <Card.Title>Dental veneers</Card.Title>
              <hr />
              <Card.Title>Number of Teeth</Card.Title>
              <hr />
              <Card.Title>Teeth whitening</Card.Title>
              <hr />
              <Card.Title>Crowns and bridges</Card.Title>
              <hr />
              <Card.Title>Lipid Profile</Card.Title>
            </div>
          </Card.Body>

          <Card.Footer className="bg-primary">
            <div className="text-center text-white">Signup Now</div>
          </Card.Footer>
        </Card>

        <Card>
          <Card.Body>
            <div className="text-center">
              <h2>Cosmetic Dentistry</h2>
              <h1>$79.99</h1>
              <p>Crowns and bridges</p>
              <hr />
              <Card.Title>Dental fillings</Card.Title> <hr />
              <Card.Title>Teeth whitening</Card.Title>
              <hr />
              <Card.Title>Number of Teeth</Card.Title>
              <hr />
              <Card.Title>Oral surgery</Card.Title>
              <hr />
              <Card.Title>Dental veneers</Card.Title>
              <hr />
              <Card.Title>Dentures</Card.Title>
              <hr />
              <Card.Title>Lipid Profile</Card.Title>
            </div>
          </Card.Body>

          <Card.Footer className="bg-primary">
            <div className="text-center text-white">Signup Now</div>
          </Card.Footer>
        </Card>

        <Card>
          <Card.Body>
            <div className="text-center">
              <h2>Basic Dentistry</h2>
              <h1>$99.99</h1>
              <p>Dental fillings</p> <hr />
              <Card.Title>Number of Teeth</Card.Title>
              <hr />
              <Card.Title>Oral surgery</Card.Title>
              <hr />
              <Card.Title>Dental veneers</Card.Title>
              <hr />
              <Card.Title>Teeth whitening</Card.Title>
              <hr />
              <Card.Title>Crowns and bridges</Card.Title>
              <hr />
              <Card.Title>Dentures</Card.Title>
              <hr />
              <Card.Title>Lipid Profile</Card.Title>
            </div>
          </Card.Body>

          <Card.Footer className="bg-primary">
            <div className="text-center text-white">Signup Now</div>
          </Card.Footer>
        </Card>
      </CardGroup>
    </div>
  );
};

export default Pricing;
