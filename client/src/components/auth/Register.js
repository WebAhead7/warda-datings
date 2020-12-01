import React, { useState } from 'react';

const Register = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const { name, email, password, password2 } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  return (
    <div>
      <div className="row">
        <div className="input-field col s6">
          <input
            value={name}
            id="name"
            type="text"
            className="validate"
            onChange={onChange}
          />
          <label className="active" htmlFor="name">
            Name
          </label>
        </div>
      </div>

      <div className="row">
        <div className="input-field col s6">
          <input
            value={email}
            id="email"
            type="email"
            className="validate"
            onChange={onChange}
          />
          <label className="active" htmlFor="email">
            Email
          </label>
        </div>
      </div>

      <div className="row">
        <div className="input-field col s6">
          <input
            value={password}
            id="password"
            type="password"
            className="validate"
            onChange={onChange}
          />
          <label className="active" htmlFor="password">
            Password
          </label>
        </div>
      </div>

      <div className="row">
        <div className="input-field col s6">
          <input
            value={password2}
            id="password2"
            type="password"
            className="validate"
            onChange={onChange}
          />
          <label className="active" htmlFor="password2">
            Confirm Password
          </label>
        </div>
      </div>
    </div>
  );
};

export default Register;
