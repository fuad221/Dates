import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home'
import MyDates from './components/MyDtes'
import NewDate from './components/NewDate'
import Nav from './components/Nav'
function App() {
  return (
    <div>
      <Router>
        <Nav />

        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/newdate">
          <NewDate />
        </Route>

        <Route path="/mydates">
          <MyDates />
        </Route>



      </Router>
    </div>
  );
}

export default App;
