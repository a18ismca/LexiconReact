import 'bootstrap/dist/css/bootstrap.min.css';
import {NavigationBar} from './NavigationBar';
import {Link} from "react-router-dom";
import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export const List = ({people}) => {
  

  const { id } = useParams();
 
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
          <tr>
              <th>Name</th>
          </tr>

        {people.map((person) => (
            
          <tr key={person.id}>    
             
            <th>{person.name}</th>
            <th><Link to={`/personaldetails/${person.id}`}>Details</Link></th>

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
     