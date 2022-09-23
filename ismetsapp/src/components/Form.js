import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useState } from "react";

export const Form = ({addPerson})  =>{

  const [getPersonAttributes, setPersonAttributes] = useState({
    firstName: "",
    lastName: "",
    age: "",
    nationality: "",
    mailAddress: "",
    
  });


  // set first name, skrev name ist. för firstName i e.target.name
  const handleChange = (e) => {
    setPersonAttributes({ ...getPersonAttributes, [e.target.name]: e.target.value });
    
  };

  const handleSubmit = (e) => {
  
      e.preDefault();
        addPerson(getPersonAttributes);
        setPersonAttributes({ firstName: "", lastName: "", age: "", nationality: "", mailddress: ""});
  
  };

  

  return (
    
    <div className="form-container">
    
      <form onSubmit={handleSubmit} >
        <div>
          <h3>Person Form</h3>
        </div>
        <div>
          <input
            type="text"
            name="firstName"
            placeholder="First name"
            value={getPersonAttributes.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <input
            type="text"
            name="lastName"
            placeholder="Last name"
            value={getPersonAttributes.lastName}
            onChange={handleChange}
            required
          />
        </div>     
        <div>
            <input
                type='number'
                name='age'
                placeholder='Age'
                value={getPersonAttributes.age}
                onChange={handleChange}
                required
            />
        </div>
        <div>
            <input
                type='text'
                name='nationality'
                placeholder='Nationality'
                value={getPersonAttributes.nationality}
                onChange={handleChange}
                required
            />
        </div>
        <div>
            <input
                type='text'
                name='mailAddress'
                placeholder="E-Mail"
                value={getPersonAttributes.mailAddress}
                onChange={handleChange}
                required
            />
        </div>
        
        <div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

