import 'bootstrap/dist/css/bootstrap.min.css';
import {NavigationBar} from './NavigationBar';
import {Link} from "react-router-dom";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const List = () => {
  

const [peopleList, setPeopleList] = useState([]);

  useEffect(() => {
    axios.get(`https://localhost:7015/api/React/people/`)
    .then(response => setPeopleList(response.data));
  }, []);

 


const sortByName = () => {

  const sortedNameList = peopleList.map((x) => x);

  sortedNameList.sort((a, b) => {
    if(a.name < b.name){
      return -1;
    }

    if(a.name > b.name){
      return 1;
    }
    return 0;
  })

  setPeopleList(sortedNameList);

}

 if(peopleList.length == 0){
    return (
      <div className='container'>
        <NavigationBar/>
        <div>
          <h2>List of people</h2>
        </div>
        <p>No results found</p>
      </div>
    )  
 } 
 else{
        return (
         
            <div className='container'>
              <NavigationBar/>
              <div>
                <h2>List of people</h2>
            </div>
          
      <table class="table">
        <thead>
          <tr>
              <th>Name</th>
          </tr>

        {peopleList.map((person) => (
            
          <tr key={person.id}>    
             
            <th>{person.name}</th>
            <th><Link to={`/personaldetails/${person.id}`}>Details</Link></th>
            <th><Link to={`/editperson/${person.id}`}>Edit</Link></th>

          </tr>
          
           )
           
          )
        }
           
         </thead>
        </table>

        <div className='btn btn-primary btn-small' onClick={sortByName}>Sort by name ascending</div>
          </div>
          );
      }

    }
     