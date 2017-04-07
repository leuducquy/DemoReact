import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link
  
} from 'react-router-dom';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from  './components/about';


const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        </ul>

      <hr/>

      <Route exact path="/" component={HomePage}/>
      <Route path="/about" component={AboutPage}/>
     
    </div>
  </Router>
);




export default BasicExample;