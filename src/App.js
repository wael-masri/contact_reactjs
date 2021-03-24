import './App.css';
import React from 'react';
import { Signup } from './Components/Signup';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-5">
          <Signup />
        </div>
        <div className="col-md-7 my-auto">
        <img src='' />        </div>
      </div>
    </div>
  );
}

export default App;