import 'bootstrap/dist/css/bootstrap.min.css';
import {Link, useParams, Redirect} from "react-router-dom";
import {NavigationBar} from './NavigationBar';
import { useContext, useEffect } from "react";
import React, {useState} from "react";
import axios from 'axios';
export const PersonalDetails = () => {

  const [details, setDetails] = useState();

  const {id} = useParams();

  useEffect(() => {
    axios.get(`https://localhost:7015/api/React/personaldetails/${id}`)
    .then(response => setDetails(response.data));
   
  });

const Delit = () => {
  try{
  axios.delete(`https://localhost:7015/api/React/delit/${id}`);
  return(<p>Delete successful.</p>)
  } 
  catch (err)
  {
    if(err.response)
    {
      return(<p className='statement'>{err.response}</p>)
    } 
    else if(err.request)
    {
      return(<p className='statement'>{err.request}</p>)
    } 
    else{
      return(<p className='statement'>Unknown error.</p>)
    }

  }
 
  
}



console.log(details)


  if(details != null){
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
      <th>Country</th>
      <th>Languages</th>
  </tr>

  {details.map((person) => (
            
            <tr key={person.id}>    
              <th> {person.name}</th>
              <th> {person.phoneNumber}</th>
              <th> {person.city.name}</th>
              <th> {person.city.country.name}</th>

              {person.languages.map((language) => (
                <tr key={language.languageId}>
                  {language.name}
                  </tr>
              ))}
              
             

            </tr>
            
             )
            )
          }

          

<button className='btn btn-link'><Link to="/list">Return to list</Link></button>
  
  
<button className='btn btn-danger' onClick={Delit}>Delete</button>
<div className='statement'></div>

   
 </thead>
</table>



      
    </div>
  );
}
else{
  return(
    <div className='container'>
      <NavigationBar/>
      <div>
        <h2>Personal details</h2>
    </div>
      <h6>No results found.</h6>
      <button className='btn btn-link'><Link to="/list">Return to list</Link></button>
    </div>
  )
}
}


