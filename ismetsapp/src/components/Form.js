import 'bootstrap/dist/css/bootstrap.min.css';

import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {NavigationBar} from "./NavigationBar";


export const Form = () => {

// Get the cities from the backend solution

const [cities, setCities] = useState([]);

useEffect(() => {
    axios.get(`https://localhost:7015/api/React/cities/`)
    .then(response => setCities(response.data))
    .catch(function(error) 
        {
            if(error.response) 
            {

                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } 

            else if(error.request)
            {
                console.log(error.request);
            } 

            else
            {
                console.log('Error', error.message);
            }
        }
    )
    }, []);

    // the attributes are set with the user inputs.

    const [name, setName] = useState("");

    const [phoneNumber, setPhoneNumber] = useState();


    const [cityId, setCityId] = useState();



    const AddPersonPost = () => {

        var person = {
        
            Name: name,
            PhoneNumber: phoneNumber,
            CityId : cityId
        
        };

        if(name !== null || phoneNumber !== null || cityId !== null)
        {

        axios.post(`https://localhost:7015/api/React/addperson/`, person)
        .then(alert("A person with the following details: \n Name: " + name + "\n Phone number: " + phoneNumber + "\n City ID: " + cityId + "\nhas been added."))
        .catch(function(error) 
            {
                if(error.response) 
                {

                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                } 

                else if(error.request)
                {
                    console.log(error.request);
                } 

                else
                {
                    console.log('Error', error.message);
                }
            }
            );
            } 
            else 
            {
                alert("The data given must not be empty!");
            }
        

        
    };

// här assignar vi värden i vår use state. event.preventDefault ska användas. addPerson använder sig av personAttributes

// den här ska ändras så att den fetchar api!

const handleSubmit = (e) => {

    e.preventDefault();

    AddPersonPost();

   
}

return(

    
    <div className='container'>
     <NavigationBar/>

          <div>
                <h3>Person form</h3>
            </div>
       
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
                <button>Add person!</button>
            </div>
        </form>
    </div>

)



}