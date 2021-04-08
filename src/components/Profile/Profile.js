import React from 'react';
import { selectUser } from '../../features/userSlice';
import Nav from '../Nav/Nav';
import { useSelector } from 'react-redux';
import './Profile.scss';
import { auth } from '../../firebase';
function Profile() {
  const user = useSelector(selectUser);
  return (
    <div className="profile">
      <Nav />
      <div className="profile__body">
        <h1>Edit Profile</h1>

        <div className="profile__info">
          <img
            src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
            alt=""
          />
          <div className="profile__details">
            <h2>{user.email}</h2>
            <div className="profile__plans">
              <h3>Plans</h3>
              
              <button onClick={() => auth.signOut()} className="profile__signOut">
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
