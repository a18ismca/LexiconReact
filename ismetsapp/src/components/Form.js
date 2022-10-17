import 'bootstrap/dist/css/bootstrap.min.css';

import React, {useState} from 'react';

import {NavigationBar} from "./NavigationBar";

// addPerson är en metod som skickas vidare till App.js
export const Form = ({addPerson, cities, countries}) => {

// [parameter, metod]
const [personAttributes, setPersonAttributes] = useState({
    name: "",
    phoneNumber: "",
    city: null,
    cityId: "",
    languages: [],
});

// här sätter vi formatet som finns ovan m.h.a. setPersonAttributes
const handleChange = (e) => {
    setPersonAttributes({...personAttributes, [e.target.name]: e.target.value});
}

// här assignar vi värden i vår use state. event.preventDefault ska användas. addPerson använder sig av personAttributes

// den här ska ändras så att den fetchar api!
const handleSubmit = (e) => {
    e.preventDefault();
    addPerson(personAttributes);
    setPersonAttributes({ name: "", phoneNumber: "", city: null, cityId: "", languages: []});

   
}

return(

    
    <div className='container'>
     <NavigationBar/>

          <div>
                <h3>Person form</h3>
                <table>
                
            </table>
            </div>
       
        <form onSubmit={handleSubmit}>
          
            <div>
                <input
                    type='text'
                    name='name'
                    placeholder='Name'
                    value={personAttributes.name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <input
                    type='text'
                    name='phoneNumber'
                    placeholder='Phone number'
                    value={personAttributes.phoneNumber}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
            
            <label>Residence</label>
            </div>
            <div>
            

                <select 
                    name='cityId' 
                    value={personAttributes.cityId} 
                    onChange={handleChange}
                    required
                >

                    {cities.map((city, id) => {
                        return <option key={id}>{city.cityId}</option>
                    })}
                </select>
            </div>
            
            <br/>

            <div>
                <button>Add person!</button>
            </div>

           


        </form>

        
        
    </div>

)



}