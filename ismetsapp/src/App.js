import logo from './logo.svg';
import './App.css';
import {Ismet} from './components/Ismet.js';
import {Form} from './components/Form';
import {List} from './components/List';

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
      <header className='header'>
        <h1>Ismets app</h1>
      </header>

      <Form addPerson={addPerson}></Form>
      <List people={people}></List>

    </div>
    
  );
}

 

export default App;
