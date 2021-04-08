import React, { useState } from 'react';
import { useHistory } from 'react-router';
import Signup from '../SignIn/Signup';

import './Login.scss';
function Login() {
  const [signIn, setSignIn] = useState(false);
  const history = useHistory();
  return (
    <div className="login">
      <div className="login__background">
        <img
         className="login__logo"
         src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" />
         <button onClick={() => setSignIn(true)}  className="login__button">Sign In</button>
         <div className="login__gradient" />
      </div>
      <div className="login__body">
      {signIn ? (
        <Signup />
      ) : (
        <>
        <h1>Unlimited films, TV programmes and more.</h1>
          <h2>Watch anywhere. Cancel at any time.</h2>
          <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
          <div className="login__input">
            <form>
              <input type="email" placeholder="Email Address"/>
              <button onClick={() => setSignIn(true)} className="login__getStarted">
                get started
              </button>
            </form>
          </div>
        </>
      )
      
      }
     
      </div>
    </div>
  );
}

export default Login;
