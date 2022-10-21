import 'bootstrap/dist/css/bootstrap.min.css';
import {Link, useParams, Redirect} from "react-router-dom";
import {NavigationBar} from './NavigationBar';
import { useContext, useEffect } from "react";
import React, {useState} from "react";
import axios from 'axios';
export const Edit = () => {

  const [details, setDetails] = useState();

  const {id} = useParams();

  useEffect(() => {
    axios.get(`https://localhost:7015/api/React/personaldetails/${id}`)
    .then(response => setDetails(response.data));
   
  });

  const [cities, setCities] = useState([]);

useEffect(() => {
  axios.get(`https://localhost:7015/api/React/cities/`)
  .then(response => setCities(response.data))
}, []);



const [name, setName] = useState("");

const [phoneNumber, setPhoneNumber] = useState();


const [cityId, setCityId] = useState();



const EditPersonPost = () => {
    var person = {
       
        Name: name,
        PhoneNumber: phoneNumber,
        CityId : cityId
    
    };


   
    axios.put(`https://localhost:7015/api/React/editperson/`, person).then(res => console.log(res));
    ;

    
};





// här assignar vi värden i vår use state. event.preventDefault ska användas. addPerson använder sig av personAttributes

// den här ska ändras så att den fetchar api!
const handleSubmit = (e) => {
    e.preventDefault();

    EditPersonPost();

   
}


console.log(details)


  if(details != null){
  return (
         
    <div className='container'>
      <NavigationBar/>
      <div>
        <h2>Edit person</h2>
    </div>
  

    

  
  

  {details.map((person) => (
            <ul className="list-unstyled" key={person.id}>
                <li className='font-weight-bold'> ID
                    <ul>
                        <li>{person.id}</li>
                    </ul>
                </li>
                <li> Name
                    <ul>
                        <li>{person.name}</li>
                    </ul>
                </li>
                <li> Phone number
                    <ul>
                        <li>{person.phoneNumber}</li>
                    </ul>
                </li>
                <li> Residence
                    <ul>
                        <li>City ID: {person.cityId}</li>
                        <li>{person.city.name}</li>
                    </ul>
                </li>
            </ul>
        
              

           
              
             

         
            
             )
            )
          }


<form onSubmit={handleSubmit}>
          
            <div>
                <input
                    type='text'
                    name='name'
                    placeholder='Name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>

            <div>
                <input
                    type='number'
                    name='phoneNumber'
                    placeholder='Phone number'
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                />
            </div>


           
            


            <div>
            <label>Residence</label>
            </div>
            <div>
            

                <select 
                    name='cityId' 
                    value={cityId} 
                    onChange={(e) => setCityId(e.target.value)}
                    
                >

                    {cities.map((city) => {
                     
                        return <option key={city.cityId}>{city.cityId}</option>
                        
                        
                    })}
                </select>
            </div>
            <div>
            
        </div>
            
            <br/>

            <div>
                <button>Edit!</button>
            </div>

           


        </form>


          

<button className='btn btn-link'><Link to="/list">Return to list</Link></button>



   
 



      
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


