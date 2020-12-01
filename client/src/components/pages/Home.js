import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container " style={{ margin: '30px 0', width: '100vw' }}>
      <div className="row valign-wrapper" style={{ justifyContent: 'center' }}>
        <a
          href="#!"
          className="waves-effect waves-light red lighten-2 btn center-align"
        >
          <Link to="login" style={{ color: 'inherit' }}>
            LogIn
          </Link>
        </a>
      </div>

      <div className="row valign-wrapper" style={{ justifyContent: 'center' }}>
        <a
          href="#!"
          className="waves-effect waves-light red lighten-2  btn center-align"
        >
          <Link to="/register" style={{ color: 'inherit' }}>
            Register
          </Link>
        </a>
      </div>
    </div>
  );
};

export default Home;
