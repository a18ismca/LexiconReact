import 'bootstrap/dist/css/bootstrap.min.css';
import {NavigationBar} from './NavigationBar';
import {Link} from "react-router-dom";
import React from 'react';
import axios from 'axios';

export const CityList = ({cities}) => {
  


        return (
         
            <div className='container'>
              <NavigationBar/>
              <div>
                <h2>List of cities</h2>
            </div>
          

            
      <table class="table">
        <thead>
          
          <tr>
              <th>Name</th>
              <th>Country</th>
              <th>CountryID</th>
              <th>Inhabitants</th>
          </tr>
        {cities.map((city, id) => (
            
          <tr key={id}>       
            <th>{city.cityId}</th>
            <th> {city.name}</th>
            <th> {city.country}</th>
            <th> {city.countryId}</th>
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
    
     