import axios from 'axios';
import { useState } from 'react';
import './App.css';

function App() {
  const [registerUsername, setRegisterUsername] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [loginUsername, setLoginUserName] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [data, setData] = useState(null);
  
  const register = () => {
    axios({
      method: 'post',
      data: {
        username: registerUsername,
        password: registerPassword
      },
      withCredentials: true,
      url: '/register'
    })
    .then(res => console.log(res));
  };
  
  const login = () => {
    axios({
      method: 'post',
      data: {
        username: loginUsername,
        password: loginPassword
      },
      withCredentials: true,
      url: '/login'
    })
    .then(res => console.log(res));
  };

  const getUser = () => {
    axios({
      method: 'get',
      withCredentials: true,
      url: '/user'
    })
    .then(res => {
      setData(res.data);
      console.log(res.data);
    })
    .catch((err)=>{
      console.log(err);
    })
  };

  const logout = () => {
    axios({
      method: 'get',
      withCredentials: true,
      url: '/logout'
    })
    .then(res => {
      console.log(res.data);
    });
  };

  const loginGoogle = () => {
    window.open('/auth/google', '_self');
  };

  return (
    <div className="App">
      <div>
        <h1>Register</h1>
        <input placeholder="username" onChange={e => setRegisterUsername(e.target.value)}/>
        <input placeholder="password" onChange={e => setRegisterPassword(e.target.value)}/>
        <button onClick={register}>Submit</button>
      </div>
      <div>
        <h1>Login</h1>
        <input placeholder="username" onChange={e => setLoginUserName(e.target.value)}/>
        <input placeholder="password" onChange={e => setLoginPassword(e.target.value)}/>
        <button onClick={login}>Submit</button>
      </div>
      <div>
        <h1>Get User</h1>
        <button onClick={getUser}>get user</button>
        {data && <h1>Welcome Back {data.username}</h1> }
      </div>
      <div className="logout">
        <button onClick={logout}>log out</button>
      </div>
      <div className="google-auth">
        <button onClick={loginGoogle}>login with google</button>
      </div>
    </div>
  );
}

export default App;
