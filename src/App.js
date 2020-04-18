import React from 'react';
import Navbar from './Components/Navbar/navbar';
import { Route, Switch } from 'react-router-dom';
import Home from './Components/Home/home';
import About from './Components/About/about';
import PageNotFound from './Components/PageNotFound/PageNotFound';
import Login from './Components/Login/login';
import Courses from './Components/Courses/index';

function App() {
  return (
    <div className="container-fluid" style={{ paddingTop: '58px' }}>
      <Navbar />
      <div className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/login" component={Login} />
          <Route path="/courses" component={Courses} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
