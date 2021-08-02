import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import BoardScreen from './screens/BoardScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import BoardViewScreen from './screens/BoardViewScreen'
import WeekScreen from './screens/WeekScreen'

import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Route path='/' component={ BoardScreen } exact />
        <Route path='/board/:id' component={ BoardViewScreen } />
        <Route path='/week/:id' component={ WeekScreen } />
        <Route path='/login' component={ LoginScreen } />
        <Route path='/register' component={ RegisterScreen } />
      </Router>
    </div>
  );
}

export default App;
