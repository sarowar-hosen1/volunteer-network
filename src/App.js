import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import NoMatch from './Components/NoMatch/NoMatch';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import EventTask from './Components/MyEvent/MyEvent';
import AdminDashboard from './Components/AdminDashboard/AdminDashboard';

export const UserContext = createContext();
export const TitleContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [title, setTitle] = useState(null);

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <TitleContext.Provider value={[title, setTitle]}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route path='/login'>
              <Login />
            </Route>

            <PrivateRoute path='/register'>
              <Register />
            </PrivateRoute>

            <PrivateRoute path='/myEvent'>
              <EventTask/>
            </PrivateRoute>

            <PrivateRoute path='/admin'>
              <AdminDashboard/>
            </PrivateRoute>

            <Route path="*">
              <NoMatch />
            </Route>

          </Switch>
        </Router>
      </TitleContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
