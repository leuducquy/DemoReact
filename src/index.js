import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {Router ,browserHistory, Route, IndexRoute} from 'react-router';

import routes from './routes';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home/HomePage';
import About from './components/about';
import CoursePage from './components/course/CoursesPage';
import App from './components/App';
import {loadCourses} from './actions/courseAction';
import configureStore from './store/configureStore';
import ManageCoursePage  from './components/course/ManageCoursePage';
const store = configureStore();
store.dispatch(loadCourses());

render(
  (
  <Provider store = {store} >
  <Router history={browserHistory}>
  <Route path = "/" component = {App} >
    <IndexRoute  component={Home}/>
    <Route path="/about" component={About}/>
    <Route path="/courses" component={CoursePage}/>
     <Route path="/course" component={ManageCoursePage}/>
  </Route>
  </Router>
  </Provider>
  
)

, document.getElementById('app'));