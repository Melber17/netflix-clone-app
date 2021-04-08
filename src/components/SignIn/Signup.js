import React, { useRef } from 'react';
import { auth } from '../../firebase';
import './Signup.scss';
function Signup() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const register = (e) => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(emailRef.current.value, passwordRef.current.value)
    .then((authUser) => {
        console.log(authUser)
    }).catch(error => {
        alert(error.message)
    })
  };

  const signIn = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(emailRef.current.value,
        passwordRef.current.value)
        .then(authUser => {
            console.log(authUser)
        }).catch(error => alert(error.message))
  };
  return (
    <div className="signup">
      <form>
        <h1>Sign In</h1>
        <input type="email" ref={emailRef} placeholder="Email" />
        <input type="password" ref={passwordRef} placeholder="Password" />
        <button type="submit" onClick={signIn}>
          {' '}
          Sign In
        </button>

        <h4>
          <span className="signup__gray">New to Netflix?</span>
          <span className="signup__link" onClick={register}>
            Sign Up now.
          </span>
        </h4>
      </form>
    </div>
  );
}

export default Signup;
