import React from 'react';
import create from './Create.jsx'
const Home = (props) => {
  // console.log("props.view:", props.view);
  // console.log("type of: ", typeof props.view)
  return (
    <div className='home'>
      <h1 className='home-title'>PetPal</h1>
      <h3 className='home-content'>The Only Dogs Meeting Friends Website</h3>
      <hr />
      <div className='home-button'>
          <button className="btn btn-default btn-lg" onClick= {()=>changeView(create,event)}>Create Events<i class="fas fa-paw"></i></button>
      </div>
    </div>
  );
};

export default Home;