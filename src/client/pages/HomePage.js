import React from 'react'



const HomePage = () => {
  return (
      <div>
      <div> home component does this change</div>
      <button onClick={() => console.log('Hi there')}>Press me!</button>
      </div>
    );
};


export default {
  component: HomePage
};