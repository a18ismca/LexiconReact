import './App.css';
import {Form} from './components/Form';
import {List} from './components/List';
import {Home} from './components/Home';
import {Login} from './components/Login';
import {PersonalDetails} from './components/PersonalDetails';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import { UserProvider } from './components/UserContext';
import React, { useState, useContext } from 'react';
import { UserContext } from './components/UserContext';

function App() {

  const { user } = useContext(UserContext);

  // här lagras alla personer som skapats
  const [people, updatePeople] = useState([]);

  // person innehåller attributen som används i List.js
  const addPerson = (person) => {
    updatePeople([...people, person]);
  };



  return (

    <UserProvider>
    <div className='App'>
      <BrowserRouter>

        <Routes>

          <Route index path="/" element={<Login/>} />

          <Route path="/home" element={<Home />} />

          <Route path="/add" element={<Form addPerson={addPerson} />} />

          <Route path="/list" element={<List people={people}/>} />

          <Route path="/personaldetails" element={<PersonalDetails />} />

        </Routes>

      </BrowserRouter>
      

    </div>
    </UserProvider>
    
  );
}

 

export default App;
