import React from "react";
import "./Appointment.css";
import { Form, Button, Dropdown } from "react-bootstrap";

const Appointment = () => {
  return (
    <div id="appointment" className="container pt-2 w-50">
      <div className="text-center my-3">
        <h2>
          Book an <span className="text-primary">Appointment</span>
        </h2>
      </div>
      <div>
        <Form.Group className="mb-3">
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Name" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Your Address</Form.Label>
          <Form.Control type="text" placeholder="Enter Address" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Number</Form.Label>
          <Form.Control type="number" placeholder="Phone" />
        </Form.Group>

        <Form.Select aria-label="Default select example">
          <option>Type of Service</option>
          <option value="1">Fixing Implants</option>
          <option value="2">Crowns & Bridge Repair</option>
          <option value="3">Root Canal</option>
          <option value="4">Dental Filling</option>
        </Form.Select>
      </div>

      <div className="text-center">
        <Button className="my-5" variant="primary" type="submit" size="lg">
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Appointment;
