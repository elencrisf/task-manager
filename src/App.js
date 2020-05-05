import React from 'react';
import './App.css';
import Task from './components/Task';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/layout/Header';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import { Provider } from './contexts/TaskContext';

const App = () => {


  return (
    <Provider>
      <Router>
        <div className="App">
          <Header branding="Task Manager" />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Task} />
              <Route exact path="/about" component={About} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>

    </Provider>

  )
}

export default App;
