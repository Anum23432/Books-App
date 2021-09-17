import React from 'react';


import Home from './Home';
import Login from './Login';

import BookList from './BookList';
import {
  BrowserRouter as Router,
  Switch,
  Route
  
} from "react-router-dom";
import { Navbar } from 'react-bootstrap';
import Intro from './Intro';

function Routes(){
return(
<>
<Router>
      <div>
      
         <Navbar bg="dark">
         <div className="indigo">
          <Navbar.Brand style={{color:'lightcyan'}} href="/">Home</Navbar.Brand>
          <Navbar.Brand style={{color:'lightcyan'}} href="/Home">Click to Continue</Navbar.Brand>
          </div>
        </Navbar>
     
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
         <Switch>
           
           <Route path="/Home">
             <Home />
           </Route>
           <Route path="/Login">
             <Login />
            </Route>
            <Route path="/BookList">
             <BookList />
            </Route>
            <Route path="/Intro">
             <Intro />
            </Route>
            <Route path="/">
             <Intro />
            </Route>
           
         </Switch>
       </div>
     </Router>
  
</>


)};

export default Routes;