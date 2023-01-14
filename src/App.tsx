import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes  ,Route } from 'react-router-dom';
import Main from './pages/main/Main';
import Detail from './pages/Detail';


function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<Main/>}></Route>
      <Route path='/detail' element={<Detail/>}></Route>
    </Routes>
    </div>
  );
}

export default App;
