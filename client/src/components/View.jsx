import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Bootstrap from "react-bootstrap";
import Col from 'react-bootstrap/Col'
const View = () => {
  return (
    <Form className = 'form-content'>
      <Form.Row>
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Event Name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Event Name"
          />
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Location</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Location"
          />
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Date</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Date"
          />
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Time</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Time"
          />
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Organizer Name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Organizer Name"
          />
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Contact Info</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Time"
          />
        </Form.Group>
      </Form.Row>
      <Form.Group md="8" controlId="validationCustom02">
          <Form.Label>Description</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Time"
          />
        </Form.Group>

      <Form.Group>
        <Form.Check
          required
          label=" Agree to terms and conditions"
          feedback="You must agree before submitting."
        />
      </Form.Group>
      <Button type="submit">Submit form</Button>

  </Form>
  )

}


export default View;