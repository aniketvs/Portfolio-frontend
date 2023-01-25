
import './App.css';
import { BrowserRouter,Routes , Route} from "react-router-dom";
import React from 'react';
import Home from './component/Home';
function App() {
  return (
  <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
