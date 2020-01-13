import React from 'react';

const Register = () => {
  return (
    <div class="create-editor">
    <h2>Event Details
    </h2>
      <form>
        <div className="create-input">
          Event Name
          <input type = 'text' placeholder='Give it a short distinct name'></input>
        </div>
        <div className="create-input">
          Location
          <input type = 'text' placeholder='Give it a detail address'></input>
        </div>
        <div className="create-input">
          Date
          <input type = 'text'></input>
        </div>
        <div className="create-input">
          Time
          <input type = 'text'></input>
        </div>
        <div className="create-input">
          Organizer Name
          <input type = 'text'></input>
        </div>
        <div className="create-input">
          Contact Info
          <input type = 'text' placeholder='Email or Phone numbers'></input>
        </div>
        <div className="create-input">
          Event Limitation
          <input type = 'text'></input>
        </div>

        <div className="create-input">
          Event Description
          <textarea class="create-body-textarea"  placeholder="Post Body"></textarea>
        </div>
        <button class="create-submit-button" type="submit">Save post</button>
      </form>
  </div>
  )

}

export default Register;