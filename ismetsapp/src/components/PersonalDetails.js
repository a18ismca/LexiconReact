import 'bootstrap/dist/css/bootstrap.min.css';
import {Link, useParams} from "react-router-dom";
import {NavigationBar} from './NavigationBar';
import { useContext, useEffect } from "react";
import React, {useState} from "react";
import axios from 'axios';

const PersonalDetails = () => {

  const [details, setDetails] = useState([]);

  useEffect(() => {
    axios.get(`https://localhost:7015/api/React/personaldetails/1`)
    .then(response => setDetails(response.data));
    console.log(details);
  }, []);




  return (
         
    <div className='container'>
      <NavigationBar/>
      <div>
        <h2>Personal details</h2>
    </div>
  

    
<table className="table">
<thead>
  
  <tr>
      <th>Name</th>
      <th>Phone number</th>
      <th>City</th>
      <th>Languages</th>
  </tr>

  <tr>    
     
    <th>{details.name}</th>
    <th> {details.phoneNumber}</th>
    <th> {details.cityId}</th>
    <th> {details.languages}</th>
    
  </tr>
  
   
  

   
 </thead>
</table>

      
    </div>
  );
}

export default PersonalDetails;
