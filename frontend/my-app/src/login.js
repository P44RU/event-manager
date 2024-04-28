import React from 'react';
import { useState } from 'react';

const LoginPage = () => {

  const [data, setData] = useState({
    username: '',
    password: '',
   
  });

  const { username, password } = data;

  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submithandler = (e) => {
    e.preventDefault();
    if (username.length <= 5) {
      alert('Username must be at least 5 characters long');
    } else if (password.length < 6 ) {
      alert('Password must contain at least 6 characters');
    } else {
      console.log(data);
      alert("You are sucessfully login");
    }
  };
  return (
    <div>
       <center>
        <form onSubmit={submithandler}>
          Username: <input type="text" placeholder="Enter username" name="username" value={username} onChange={onChange} />
          <br />
          Password: <input type="password" placeholder="Enter password" name="password" value={password} onChange={onChange} />
          <br />
          <input type="submit" name="submit" />
        </form>
      </center>
    </div>
  );
};

export default LoginPage;