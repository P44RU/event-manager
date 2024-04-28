import React, { useState } from 'react';


const RegisterPage = () => {
  
 
  const [data, setData] = useState({
    username: '',
    password: '',
    email: '',
    confirmpassword: '',
   });


  const { username, password, email, confirmpassword } = data;

  const onChange = (e) => { 
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submithandler = (e) => {
    e.preventDefault();
    if (username.length <= 5) {
      alert('Username must be at least 5 characters long');
    } else if (password.length < 6 || confirmpassword.length < 6) {
      alert('Password must contain at least 6 characters');
    } else if (password !== confirmpassword) {
      alert('Passwords do not match');
    } else {
      console.log(data);
      alert("Register Successfully"); // Navigate to the login page after successful form submission
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
          Email: <input type="email" placeholder="Enter email" name="email" value={email} onChange={onChange} />
          <br />
          Confirm Password: <input type="password" name="confirmpassword" value={confirmpassword} onChange={onChange} />
          {password !== confirmpassword ? <p style={{ color: 'red' }}>Passwords do not match</p> : null}
          <br />
          <input type="submit" name="submit" />
          <a href='login'>Login</a>
        </form>
      </center>
    </div>
  );
};

export default RegisterPage;