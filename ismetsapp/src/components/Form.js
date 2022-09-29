import 'bootstrap/dist/css/bootstrap.min.css';

import React, {useState} from 'react';

// addPerson är en metod som skickas vidare till App.js
export const Form = ({addPerson}) => {

// [parameter, metod]
const [personAttributes, setPersonAttributes] = useState({
    firstName: "",
    lastName: "",
    age: "",
    nationality: "",
    mailAddress: "",
});

// här sätter vi formatet som finns ovan m.h.a. setPersonAttributes
const handleChange = (e) => {
    setPersonAttributes({...personAttributes, [e.target.name]: e.target.value});
}

// här assignar vi värden i vår use state. event.preventDefault ska användas. addPerson använder sig av personAttributes
const handleSubmit = (e) => {
    e.preventDefault();
    addPerson(personAttributes);
    setPersonAttributes({ firstName: "", lastName: "", age: "", nationality: "", mailAddress: ""});
}

return(

    <div className='form-container'>

        <form onSubmit={handleSubmit}>
            <div>
                <h3>Person form</h3>
            </div>

         

            <div>
                <input
                    type='text'
                    name='firstName'
                    placeholder='First name'
                    value={personAttributes.firstName}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <input
                    type='text'
                    name='lastName'
                    placeholder='Last name'
                    value={personAttributes.lastName}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <input
                    type='number'
                    name='age'
                    placeholder='Age'
                    value={personAttributes.age}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <input
                    type='text'
                    name='nationality'
                    placeholder='Nationality'
                    value={personAttributes.nationality}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <input
                    type='text'
                    name='mailAddress'
                    placeholder='E-Mail'
                    value={personAttributes.mailAddress}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <button>Add person!</button>
            </div>

        </form>
    </div>

)



}