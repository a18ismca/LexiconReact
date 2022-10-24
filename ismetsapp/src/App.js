import './App.css';
import { Form } from './components/Form';
import { List } from './components/List';
import { Home } from './components/Home';
import { Edit } from './components/Edit';
import { Login } from './components/Login';
import { PersonalDetails} from './components/PersonalDetails';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { UserProvider } from './components/UserContext';
import React from 'react';




// The routes of this application are listed below.

function App() {

  return (

    <UserProvider>

    <div className='App'>

      <BrowserRouter>

        <Routes>

          <Route index path="/" element={<Login/>} />

          <Route path="/home" element={<Home />} />

          <Route path="/add" element={<Form />} />

          <Route path="/list" element={<List />} />

          <Route path="/editperson/:id/" element={<Edit />} />

          <Route path="/personaldetails/:id/" element={<PersonalDetails  />} />

        </Routes>

      </BrowserRouter>
      
    </div>

    </UserProvider>
  );
}

export default App;
