import React, { createContext, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home';
import Book from './Components/Book/Book';
import LogIn from './Components/LogIn/LogIn';
import NotFound from './Components/NotFound/NotFound';
import SearchingArea from './Components/SerchingArea/SearchingArea';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (  
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
          <Header/>
          <Switch>
            <Route path="/home">
            <Home></Home>
            </Route>
            <Route path="/homes/:title">
              <Book></Book>
            </Route>
            <Route path="/login">
              <LogIn></LogIn>
            </Route>
            <PrivateRoute path="/searchingArea">
              <SearchingArea/>
            </PrivateRoute>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/*">
            <NotFound/>
            </Route>
          </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
