import React, { Component, Suspense } from 'react';
// import Students from './components/Students'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home'
// import ArHome from './components/arabic/ArHome'
import './i18next'

class App extends Component {
  render() {
    return (
      <Suspense fallback={(<div>Loading ...</div> )}>
      <BrowserRouter>
        
        <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
      
    </BrowserRouter>
      </Suspense>
    );
  }
}

export default App;
