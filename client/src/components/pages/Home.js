import React from 'react';

const Home = () => {
  return (
    <div className="container " style={{ margin: '30px 0', width: '100vw' }}>
      <div className="row valign-wrapper" style={{ justifyContent: 'center' }}>
        <a
          href="#!"
          className="waves-effect waves-light red lighten-2 btn center-align"
        >
          Sign In
        </a>
      </div>

      <div className="row valign-wrapper" style={{ justifyContent: 'center' }}>
        <a
          href="#!"
          className="waves-effect waves-light red lighten-2  btn center-align"
        >
          Sign Up
        </a>
      </div>
    </div>
  );
};

export default Home;
