import React, { useEffect } from 'react';
import HomeScreen from './components/HomeScreen/Home';
import Row from './components/Row/Row';
import Login from "./components/Login/Login"
import {selectUser} from "./features/userSlice"
import {useDispatch, useSelector} from "react-redux";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { auth } from './firebase';
import { login, logout } from './features/userSlice';
import './App.scss';
import Profile from './components/Profile/Profile';
function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {

    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        console.log(userAuth)
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        }))
      } else {
        dispatch(logout())
      }
    })

    return unsubscribe;
  }, [dispatch])
  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <Switch>
          <Route path="/profile">
            <Profile/>
          </Route>
            <Route path="/">
              <HomeScreen />
            </Route>
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
