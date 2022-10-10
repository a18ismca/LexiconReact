import 'bootstrap/dist/css/bootstrap.min.css';
import {NavigationBar} from './NavigationBar';
import {Link} from "react-router-dom";
import React from 'react';

export const List = ({people}) => {
  
  
 
 if(people.length == 0){
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
          <tr >
              <th>Name</th>
              <th>Last name</th>
              <th>Age</th>
              <th>Nationality</th>
              <th>E-Mail</th>
          </tr>
        {people.map((person,id) => (
            
          <tr key={id}>        
            <th> {person.firstName}</th>
            <th> {person.lastName}</th>
            <th> {person.age}</th>
            <th> {person.nationality}</th>
            <th> {person.mailAddress}</th>
            <th><Link to="/personaldetails">Details</Link></th>
          </tr>
          
           )
          )
        }
           
         </thead>
        </table>

              
            </div>
          );
      }
    }
     