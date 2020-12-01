import React, { useState } from 'react';

const Register = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const { name, emai, password, password2 } = user;
  return (
    <div>
      <div class="row">
        <div class="input-field col s6">
          <input value="Alvin" id="name" type="text" class="validate" />
          <label class="active" for="name">
            Name
          </label>
        </div>
      </div>

      <div class="row">
        <div class="input-field col s6">
          <input value="Alvin" id="name" type="text" class="validate" />
          <label class="active" for="name">
            Name
          </label>
        </div>
      </div>

      <div class="row">
        <div class="input-field col s6">
          <input value="Alvin" id="name" type="text" class="validate" />
          <label class="active" for="name">
            Name
          </label>
        </div>
      </div>

      <div class="row">
        <div class="input-field col s6">
          <input value="Alvin" id="name" type="text" class="validate" />
          <label class="active" for="name">
            Name
          </label>
        </div>
      </div>
    </div>
  );
};

export default Register;
