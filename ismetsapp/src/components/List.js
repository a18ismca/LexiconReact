import 'bootstrap/dist/css/bootstrap.min.css';
import {NavigationBar} from './NavigationBar';
import {Link} from "react-router-dom";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
              <th>Phone number</th>
              <th>City</th>
              <th>Languages</th>
          </tr>
        {people.map((person, id) => (
            
          <tr key={id}>        
            <th> {person.name}</th>
            <th> {person.phoneNumber}</th>
            <th> {person.cityId}</th>
            <th> {person.languages}</th>
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
     