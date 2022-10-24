import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import React, { useState, useContext } from 'react';
import { UserContext } from './UserContext';

export const Login = () => {

// Use context and set username.

const { userLogin } = useContext(UserContext);

const [name, setUsername] = useState();

const usernameOnChange = (e) => {
    setUsername(e.target.value);
}

const usernameSubmit = (e) => {
    e.preventDefault();
}



    return(

        <div className='container'>
            <header>
                <h4>Welcome to login page!</h4>
            </header>

            <form onSubmit = { usernameSubmit } >
                <div>
                    <label>
                        Username
                    </label>
                </div>
        

                <div>
                    <input 
                        type='text' 
                        placeholder='Enter here!'
                        onChange={usernameOnChange}
                        required 
                    />
                </div>
                

                
                    <Link to="home"><button onClick={() => userLogin(name)}>Login</button></Link>
                
            
            </form>
        </div>
        

    )

}