import 'bootstrap/dist/css/bootstrap.min.css';
import {Link, useParams} from "react-router-dom";
import {NavigationBar} from './NavigationBar';
import { useContext, useEffect } from "react";
import React, {useState} from "react";
import axios from 'axios';

export const PersonalDetails = ({person}) => {

console.log(person)
    return(
      <div>
      <div className='container'>
                    <NavigationBar/>
                    <div>
                      <h2>Personal details</h2>
                  </div>
                
      
                  
            <table class="table">
              <thead>
                <tr>
                    <th>Name</th>
                    <th>Phone number</th>
                    <th>City</th>
                    <th>Languages</th>
                </tr>
                  
                
            
            <tr>    
               
              <th>{person.name}</th>
              <th> {person.phoneNumber}</th>
              <th> {person.cityId}</th>
              <th> {person.languages}</th>
            </tr>
            
             
            
          
                
                 
                 
            </thead>

              </table>
      
              <Link to="/list">Return to list</Link>

                  </div>
              </div>
      

        
    )
}
