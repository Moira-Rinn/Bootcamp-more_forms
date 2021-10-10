import React, { useState } from 'react';
import SMCR from '../imgs/SMCR.png';

const RegForm = (props) => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const [fNameErrMsg, setFNameErrMsg] = useState("");
  const [lNameErrMsg, setLNameErrMsg] = useState("");
  const [emailErrMsg, setEmailErrMsg] = useState("");
  const [passErrMsg, setPassErrMsg] = useState("");
  const [pass2ErrMsg, setPass2ErrMsg] = useState("");

  const [fNameErrChk, setFNameErrChk] = useState(true);
  const [lNameErrChk, setLNameErrChk] = useState(true);
  const [emailErrChk, setEmailErrChk] = useState(true);
  const [passErrChk, setPassErrChk] = useState(true);

  const handleName = (e) => {

    if (e.target.alt === "First Name") {
      setFirstName(e.target.value);
      if (e.target.value.length < 1) { setFNameErrMsg(`${e.target.alt} is required!`); }
      else if (e.target.value.length < 2) { setFNameErrMsg(`${e.target.alt} must be 2 characters or longer!`); }
      else { setFNameErrMsg(""); setFNameErrChk(false); }
    }
    else if (e.target.alt === "Last Name") {
      setLastName(e.target.value);
      if (e.target.value.length < 1) { setLNameErrMsg(`${e.target.alt} is required!`); }
      else if (e.target.value.length < 2) { setLNameErrMsg(`${e.target.alt} must be 2 characters or longer!`); }
      else { setLNameErrMsg(""); setLNameErrChk(false); }
    }
    errChk(e.target.value);
  }

  const handleEmail = (e) => {
    setUserEmail(e.target.value);
    if (validateEmail(userEmail)) { setEmailErrMsg(""); setEmailErrChk(false) }
    else { setEmailErrMsg(`Not a valid ${e.target.alt}`) }
    errChk(e.target.value);
  }

  const handlePassword = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 8) { setPassErrMsg(`${e.target.alt} must be 8 characters or longer!`); }
    else { setPassErrMsg(""); setPassErrChk(false) }
    errChk(e.target.value);
  }

  const handlPassword2 = (e) => {
    setPassword2(e.target.value);
    if (e.target.value === password) { setPass2ErrMsg(''); }
    else { setPass2ErrMsg('Passwords do not match.'); }
    errChk(e.target.value);
  }

  const errChk = (chk) => {
    if (!fNameErrChk && !lNameErrChk && !emailErrChk && !passErrChk && chk === password) {
      document.getElementById('submitBtn').disabled = false;
    } else {
      document.getElementById('submitBtn').disabled = true;
    }
  }

  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  const newUser = (e) => {
    e.preventDefault();
    const newUser = { firstName, lastName, userEmail, password, password2 }
  }

  return (
    <div className="user">
      <div className='form-wrapper'>
        <img src={SMCR} alt="S.M.C.R. Logo"></img>
        <form onSubmit={newUser}>
          <div className='form-group'>
            <label htmlFor='fname-input'>First Name: </label>
            <input
              alt='First Name'
              className='form-control-sm'
              type="text"
              value={firstName}
              onChange={handleName}
            />
          </div>

          <p id='NameErr'>{fNameErrMsg}</p>

          <div className='form-group'>
            <label>Last Name: </label>
            <input
              alt='Last Name'
              className='form-control-sm'
              type="text"
              value={lastName}
              onChange={handleName}
            />
          </div>

          <p id='NameErr'>{lNameErrMsg}</p>

          <div className='form-group'>
            <label>Email Address: </label>
            <input
              alt='Email'
              className='form-control-sm'
              type="text"
              value={userEmail}
              onChange={handleEmail} />
          </div>

          <p id='NameErr'>{emailErrMsg}</p>

          <div className='form-group'>
            <label>Password: </label>
            <input
              alt='Password'
              className='form-control-sm'
              type="text"
              value={password}
              onChange={handlePassword}
            />
          </div>

          <p id='NameErr'>{passErrMsg}</p>

          <div className='form-group'>
            <label>Confirm Password: </label>
            <input
              alt='Confirm Password'
              className='form-control-sm'
              type="text" value={password2}
              onChange={handlPassword2}
            />
          </div>

          <p id='NameErr'>{pass2ErrMsg}</p>

          <input
            id='submitBtn'
            className='btn btn-light btn-outline-dark'
            type="submit"
            value="Create User"
            disabled
          />
        </form>
      </div>

      <div className='userData'>
        <h2>You're Entering: </h2>
        <h4 id='fname'>First Name: {firstName}</h4>
        <h4 id='lname'>Last Name: {lastName}</h4>
        <h4 id='email'>Email: {userEmail}</h4>
        <h4 id='pass'>Password: {password}</h4>
      </div>
    </div>
  );
}
export default RegForm;