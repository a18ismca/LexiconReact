import './App.css';
import {Form} from './components/Form';
import {List} from './components/List';
import {Home} from './components/Home';
import {Login} from './components/Login';
import {PersonalDetails} from './components/PersonalDetails';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import { UserProvider } from './components/UserContext';
import React, { useState, useContext, useEffect } from 'react';
import axios from "axios";
import { UserContext } from './components/UserContext';

function App() {


// Fetch all people

  const [peopleList, setPeopleList] = useState([]);

  useEffect(() => {
    axios.get(`https://localhost:7015/api/React/people/`)
    .then(response => setPeopleList(response.data));
  }, []);

  // Fetch all cities

  const [cityList, setCityList] = useState([]);

  useEffect(() => {
    axios.get(`https://localhost:7015/api/React/cities`)
    .then(response => setCityList(response.data))
  }, []);


const [countryList, setCountryList] = useState([]);

useEffect(() => {
  axios.get(`https://localhost:7015/api/React/countries`)
  .then(response => setCountryList(response.data))
}, []);




  const [personListByID, setPersonListByID] = useState([]);

  useEffect(() => {
    axios.get(`https://localhost:7015/api/React/people/{Id}`)
    .then(response => setPersonListByID(response.data));
  }, []);

  const { user } = useContext(UserContext);



  
  // här lagras alla personer som skapats
  //const [people, updatePeople] = useState([]);

  // person innehåller attributen som används i List.js
  const addPerson = (person) => {
    setPeopleList([...peopleList, person]);
    axios.post(``)

  };





  return (

    <UserProvider>
    <div className='App'>
      <BrowserRouter>

        <Routes>

          <Route index path="/" element={<Login/>} />

          <Route path="/home" element={<Home />} />

          <Route path="/add" element={<Form addPerson={addPerson} cities={cityList} countries={countryList}/>} />

          <Route path="/list" element={<List people={peopleList}/>} />

          <Route path="/personaldetails" element={<PersonalDetails specificPerson={personListByID}/>} />

        </Routes>

      </BrowserRouter>
      

    </div>
    </UserProvider>
    
  );
}

export default App;
