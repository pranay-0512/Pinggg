// eslint-disable-next-line no-unused-vars
import React from 'react'
import axios from 'axios';
import PropTypes from 'prop-types';
import './style.css'
import waveImg from './wave.gif'
const AuthPage = (props) =>{
    const onSubmit = (e)=>{
        e.preventDefault();
        const {value} = e.target[0];
        axios.post('http://localhost:3001/authenticate',
        {username:value}).then(r=>{
            props.onAuth({...r.data,secret:value});
        })
        .catch(e=>
            console.log(e)
        )
        
    }
  return (
    <div className='background'>
      <form onSubmit={onSubmit} className='form-card'>
      <div className='form-title'><span>Welcome</span><span><img src={waveImg} width='90px'/></span></div>
      <div className='form-subtitle'>Set a username to get started</div>
      <div className='auth'>
        <div className='auth-label'>Username</div>
        <input className='auth-input' name='username' type='text'/>
        <button className='auth-button' type='submit'>Enter</button>
      </div>
      </form>
    </div>
  );
}
AuthPage.propTypes = {
    onAuth: PropTypes.func.isRequired,
  };
export default AuthPage;
