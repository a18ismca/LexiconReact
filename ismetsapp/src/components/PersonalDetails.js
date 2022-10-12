import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";
import {NavigationBar} from './NavigationBar';
import React from "react";

export const PersonalDetails = ({specificPerson}) => {

    return(
       <>
<div className='container'>
              <NavigationBar/>
              <div>
                <h2>List of people</h2>
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
            <th>{specificPerson.name}</th>
            <th> {specificPerson.phoneNumber}</th>
            <th> {specificPerson.cityId}</th>
            <th> {specificPerson.languages}</th>
          </tr>
          
           
           
         </thead>
        </table>

              
            </div>
        <Link to="/list">Return to list</Link>
        </>

        
    )
}
