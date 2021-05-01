import React from 'react';
import './App.css';
import { TodoPage } from './Pages/TodoPage';
import { ShowPage } from './Pages/ShowPage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    
    <div className="App">
      <Router>
       <Switch>
          <Route exact path='/'>
            <TodoPage />
          </Route>
          <Route path='/:id'>
            <ShowPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
