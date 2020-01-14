import React from 'react';
import Event from './Event.jsx'
const View = ({events, changeView}) => {
  return (
  <div className="view">
    <ul>
      <li className="view-list-item">
        {events.map(event =>(
          <Event event = {event} key = {event._id} changeView={changeView}/>

          ))}

      </li>
    </ul>
  </div>
  )
};

export default View;