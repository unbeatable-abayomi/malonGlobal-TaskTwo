import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Components/Header';
import LastestNews from './Components/LastestNews';
import Business from './Components/Business';
import Entertainment from './Components/Entertainment';
import Health from './Components/Health';
import Science from './Components/Science';
import Sports from './Components/Sports';
import Technology from './Components/Technology';
import General from './Components/General';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
   
    <Header/>
    <General/> 
    <Switch>
         <Route exact path='/' component={LastestNews}/>
         <Route  path='/business' component={Business}/>
         <Route  path='/entertainment' component={Entertainment}/>
         <Route  path='/health' component={Health}/>
         <Route  path='/science' component={Science}/>
         <Route  path='/sports' component={Sports}/>
         <Route  path='/technology' component={Technology}/>
     
     </Switch>
    </div>
    </BrowserRouter>
   
  );
}

export default App;
