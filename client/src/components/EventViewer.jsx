// import React from 'react';
// import React from 'react';
// import Form from 'react-bootstrap/Form'
// import Button from 'react-bootstrap/Button'
// import Bootstrap from "react-bootstrap";
// import Col from 'react-bootstrap/Col';

const Register = () => {
  return (
    <Form className = 'form-content'>
      <div>Event Details</div>
      <hr/>
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
      <Form.Group controlId="validationCustom02">
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


  </Form>
  )

}
// const View = () => {
//   <Button type="submit">Submit form</Button>
// }


// export default Register;


<Form.Row>
<Form.Group as={Col} md="6" controlId="event-name">
  <Form.Label>Event Name</Form.Label>
  <Form.Control
    required
    type="text"
    placeholder="Event Name"
  />
</Form.Group>
<Form.Group as={Col} md="6" controlId="event-location">
  <Form.Label>Location</Form.Label>
  <Form.Control
    required
    type="text"
    placeholder="Location"
  />
</Form.Group>
</Form.Row>

<Form.Row>
<Form.Group as={Col} md="6" controlId="event-date">
  <Form.Label>Date</Form.Label>
  <Form.Control
    required
    type="text"
    placeholder="ex: Sat, Feb 1st"
  />
</Form.Group>
<Form.Group as={Col} md="6" controlId="event-time">
  <Form.Label>Time</Form.Label>
  <Form.Control
    required
    type="text"
    placeholder="ex: 12:30PM"
  />
</Form.Group>
</Form.Row>

<Form.Row>
<Form.Group as={Col} md="6" controlId="event-organizer">
  <Form.Label>Organizer Name</Form.Label>
  <Form.Control
    required
    type="text"
    placeholder="Organizer Name"
  />
</Form.Group>
<Form.Group as={Col} md="6" controlId="event-contact">
  <Form.Label>Contact Info</Form.Label>
  <Form.Control
    required
    type="text"
    placeholder="ex:email or text"
  />
</Form.Group>
</Form.Row>

<Form.Group md="8" controlId="event-description">
  <Form.Label>Description</Form.Label>
  <Form.Control
    required
    type="text"
    placeholder="Description"
  />
</Form.Group>


{/* Ending */}
<Form.Group>
<Form.Check
  required
  label=" Agree to terms and conditions"
  feedback="You must agree before submitting."
/>
</Form.Group>
<div>Nice job! You're almost done.</div>
<div>
<Button type="submit">Make Your Event Live    <i class="fas fa-rocket"></i></Button>
</div>




/*

import React from 'react';
import Button from 'react-bootstrap/Button'
import Bootstrap from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

class Create extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      eventName:'',
      eventDate: '',
      eventTime: '',
      eventHost: '',
      contactInfo: '',
      eventDescription: '',
      eventLocation: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event){
    alert("Form is submitted");
    event.preventDefault();
    var userInput = {
      eventName:this.state.eventName,
      eventDate: this.state.eventDate,
      eventTime: this.state.eventTime,
      eventHost: this.state.eventHost,
      contactInfo: this.state.contactInfo,
      eventDescription: this.state.eventDescription,
      eventLocation: this.state.eventLocation
    }
    console.log("this is userinput: ",userInput)
    fetch('/api/events',{
      method:'post',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(userInput)
    })

    .then(this.setState({
      eventName:'',
      eventDate: '',
      eventTime: '',
      eventHost: '',
      contactInfo: '',
      eventDescription: '',
      eventLocation: ''
    }))
    // .then(this.props.getData)
  }

  render(){
    return (
      <div class="create">
          <div class="create-editor">
          <h2>Event Details</h2>
          <hr/>
          <form onSubmit={this.handleSubmit}>
          <Form.Label> Event Name</Form.Label>
          <Form.Control class="create-input"
                required
                type="text"
                name='eventName'
                value={this.state.eventName}
                onChange={(e) => this.handleChange(e)}
                placeholder="Event Name"
          />
              {/* <input class="create-input"
                    type='text'
                    name='eventName'
                    value={this.state.eventName}
                    onChange={(e) => this.handleChange(e)}
                    placeholder='Event Name'/> */}
                    <br />
                    Location
                    <input class="create-input"
                         type='text'
                         name='eventLocation'
                         value={this.state.eventLocation}
                         onChange={(e) => this.handleChange(e)}
                         placeholder='Location'/>
                    <br />
                    Date
                    <input class="create-input"
                         type='text'
                         name='eventDate'
                         value={this.state.eventDate}
                         onChange={(e) => this.handleChange(e)}
                         placeholder='ex: Sat, Feb 1st'/>
                    <br />
                    Time
                    <input class="create-input"
                         type='text'
                         name='eventTime'
                         value={this.state.eventTime}
                         onChange={(e) => this.handleChange(e)}
                         placeholder='ex: 12:30PM'/>
                    <br />
                    Organizer Name
                    <input class="create-input"
                         type='text'
                         name='eventHost'
                         value={this.state.eventHost}
                         onChange={(e) => this.handleChange(e)}
                         placeholder='Organizer Name'/>
                    <br />

                    Contact Info
                    <input class="create-input"
                         type='text'
                         name='contactInfo'
                         value={this.state.contactInfo}
                         onChange={(e) => this.handleChange(e)}
                         placeholder='Organizer Name'/>
                    <br />
                    Description
                    <textarea class="create-body-textarea"
                         name='eventDescription'
                         value={this.state.eventDescription}
                         onChange={(e) => this.handleChange(e)}
                         placeholder='Description'/>
                    <br />
                    <div>Nice job! You're almost done.</div>
                    <br />
                    <Button class="create-submit-button" type="submit">Make Your Event Live    <i class="fas fa-rocket"></i></Button>


               </form>
             </div>
             </div>
         )
       }

     }

     export default Create;