import './App.css';
import {Form} from './components/Form';
import {List} from './components/List';
import {Home} from './components/Home';
import {BrowserRouter, Route, Routes} from "react-router-dom"

import { useState } from 'react';

function App() {


  // här lagras alla personer som skapats
  const [people, updatePeople] = useState([]);

  // person innehåller attributen som används i List.js
  const addPerson = (person) => {
    updatePeople([...people, person]);
  };



  return (


    <div className='App'>
      <BrowserRouter>

        <Routes>

          <Route index path="/" element={<Home/>} />

          <Route path="/add" element={<Form addPerson={addPerson} />} />

          <Route path="/list" element={<List people={people}/>} />

        </Routes>

      </BrowserRouter>
      

    </div>
    
  );
}

 

export default App;
