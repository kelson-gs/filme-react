import * as React from "react";
import {Routes, Route} from 'react-router-dom';
import './App.css';


import About from './Pages/About';
import Home from './Pages/Home';
import Film from './Pages/Film';

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={ <Home /> }/>
        <Route path="/about" element={ <About /> }/>
        <Route path="/film/:id" element={ <Film id=":id"/> }/>
    </Routes>
    </div>
  );
}

export default App;
