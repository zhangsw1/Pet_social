import React from 'react';
import Event from './Event.jsx'
const View = (props) => {
  return (
  <div className="view">
    <ul>
      <li className="view-list-item">
        {props.events.map(event =>(
          <Event event = {event} key = {event._id}/>

          ))}

      </li>
    </ul>
  </div>
  )
};

export default View;