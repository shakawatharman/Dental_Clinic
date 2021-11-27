import React from "react";
import { Form, Button } from "react-bootstrap";

const Appointment = () => {

  const handleSubmit=()=>{
    alert('Submitted Successfully');
  }
  return (
    <div id="appointment" className="container my-5 pt-2">
      <div className="text-center my-3">
        <h2>
          Book an <span className="text-primary">Appointment</span>
        </h2>
      </div>
      <div>
        <Form.Group className="mb-3">
          <Form.Label>Your Name</Form.Label>
          <Form.Control
            className="border-0 shadow"
            type="text"
            placeholder="Enter Name"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Your Address</Form.Label>
          <Form.Control
            className="border-0 shadow"
            type="text"
            placeholder="Enter Address"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Number</Form.Label>
          <Form.Control
            className="border-0 shadow"
            type="number"
            placeholder="Phone Number"
            required
          />
        </Form.Group>

        <Form.Select
          className="border-0 shadow"
          aria-label="Default select example"
        >
          <option>Type of Service</option>
          <option value="1">Fixing Implants</option>
          <option value="2">Crowns & Bridge Repair</option>
          <option value="3">Root Canal</option>
          <option value="4">Dental Filling</option>
        </Form.Select>
      </div>

      <div className="text-center">
        <Button onClick={handleSubmit} className="my-5" variant="primary" type="submit" size="lg">
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Appointment;
